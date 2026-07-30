#!/usr/bin/env python3
"""Extract model data from the Next.js RSC payload in `providers` and write data.js.

The payload holds ~900 model×host entries. Benchmark scores live on the nested
"model" object; pricing and speed live on the host entry. Speed is aggregated
across a model's hosts using the median; pricing is taken from its cheapest
host (see `price_rank`).
"""
import csv
import glob
import json
import os
import re
import sys
import time
import urllib.request
from collections import Counter, defaultdict
from statistics import median

PROVIDERS_URL = "https://artificialanalysis.ai/leaderboards/providers"
MODEL_PAGE_URL = "https://artificialanalysis.ai/models/{slug}"
MODEL_PAGE_CACHE_DIR = "model_pages"
MODEL_PAGE_FETCH_DELAY = 20.0  # seconds to wait after each live model-page fetch

USER_AGENT = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
              " (KHTML, like Gecko) Chrome/126.0 Safari/537.36")


def _fetch(url, headers=None):
    """GET a URL as text with a browser User-Agent."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, **(headers or {})})
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode()


def _fetch_rsc(url):
    """GET a Next.js RSC flight payload (the raw data a page hydrates from)."""
    # The RSC header makes Next.js return that raw payload instead of the HTML
    # shell, which is what the rest of this script parses.
    return _fetch(url, {"RSC": "1"})


def fetch_source(path, fetch_fn):
    """Fetch an external data source, caching the text to `path`.

    `--cached` reuses the cache without a network call (like `fetch_providers`);
    a failed fetch also falls back to the cache so one flaky site doesn't lose
    its fields from data.js. Returns None only when there is no data at all.
    """
    if "--cached" in sys.argv and os.path.exists(path):
        return open(path).read()
    try:
        text = fetch_fn()
    except Exception as e:
        cached = " (using cached copy)" if os.path.exists(path) else ""
        print(f"  ! fetch for {path} failed: {e}{cached}", file=sys.stderr)
        return open(path).read() if os.path.exists(path) else None
    with open(path, "w") as f:
        f.write(text)
    return text


def fetch_providers(path="providers"):
    """Download the RSC flight payload and cache it in `path`.

    Pass --cached to reuse the existing file instead of re-downloading.
    """
    if "--cached" in sys.argv:
        try:
            return open(path).read()
        except FileNotFoundError:
            pass
    text = _fetch_rsc(PROVIDERS_URL)
    with open(path, "w") as f:
        f.write(text)
    return text


def fetch_model_page(slug):
    """Return a model's own page payload, fetching once and caching forever after.

    Individual model pages carry fields the bulk `providers` listing above has
    dropped (Coding/Agentic Index, parameter count, legacy price ratios,
    per-prompt-type breakdowns...). Fetching one per model would hit AA's
    server far harder than the single bulk request above, so callers only ask
    for a handful of slugs at a time; anything already cached on disk is
    reused without a network call, so add more later by dropping a page at
    `model_pages/<slug>` yourself.
    """
    os.makedirs(MODEL_PAGE_CACHE_DIR, exist_ok=True)
    path = os.path.join(MODEL_PAGE_CACHE_DIR, slug)
    if os.path.exists(path):
        return open(path).read()
    try:
        text = _fetch_rsc(MODEL_PAGE_URL.format(slug=slug))
    except Exception as e:
        print(f"  ! couldn't fetch model page for {slug}: {e}", file=sys.stderr)
        return None
    with open(path, "w") as f:
        f.write(text)
    time.sleep(MODEL_PAGE_FETCH_DELAY)
    return text


# `--fetch-model <slug> [<slug> ...]` just seeds the model_pages/ cache (for
# manually growing the enriched set) and exits — it never touches the bulk
# `providers` listing, unlike a normal run.
if "--fetch-model" in sys.argv:
    slugs = sys.argv[sys.argv.index("--fetch-model") + 1:]
    if not slugs:
        sys.exit("usage: clean.py --fetch-model <slug> [<slug> ...]")
    for slug in slugs:
        print(f"fetching {slug}...")
        if fetch_model_page(slug):
            print(f"  cached to {MODEL_PAGE_CACHE_DIR}/{slug}")
    sys.exit(0)


s = fetch_providers()


def _drop_undefined(pairs):
    """Drop keys the RSC payload encodes as the string "$undefined".

    Next.js flight serialises a JS `undefined` value as "$undefined" rather than
    omitting the key, so a missing sub-object arrives as a string where the rest
    of this script expects a dict (upstream now does this for `performance` on
    hosts that report no speed data). Dropping the key at decode time keeps that
    wire detail out of the extraction code, which already handles absent keys.
    """
    return {k: v for k, v in pairs if v != "$undefined"}


decoder = json.JSONDecoder(object_pairs_hook=_drop_undefined)


# --- EQBench 3 results (eqbench3_chartdata.js) ---------------------------------
# The chart file is `const chartData = { <model-id>: {...} };`. Each entry's
# `absoluteRadar` holds the per-dimension scores we surface as `eqbench3_*`.
def load_eqbench(path="eqbench3_chartdata.js"):
    try:
        text = open(path).read()
    except FileNotFoundError:
        return {}
    obj = text[text.index("{"): text.rstrip().rstrip(";").rindex("}") + 1]
    chart = json.loads(obj)
    out = {}
    for key, entry in chart.items():
        ar = (entry or {}).get("absoluteRadar") or {}
        labels, values = ar.get("labels"), ar.get("values")
        if not labels or not values or len(labels) != len(values):
            continue
        out[key] = {f"eqbench3_{lab}": v for lab, v in zip(labels, values)
                    if isinstance(v, (int, float)) and not isinstance(v, bool)}
    return out


EQBENCH = load_eqbench()

# EQBench model ids use a different naming convention than Artificial Analysis,
# so match on a normalized form. DROP removes serving/format descriptors that
# only one side carries; size tokens (e.g. "120b") are kept so variants don't
# collide. ALIASES cover genuine renames / reorderings the normalizer can't see.
_EQ_DROP = {"instruct", "it", "beta", "preview", "latest", "chat", "free",
            "base", "hf", "reasoning", "thinking", "exp", "turbo"}


def _eq_norm(x):
    if not x:
        return ""
    x = x.split("/")[-1].lower()
    x = re.sub(r"\(.*?\)", "", x)            # parenthetical effort/variant notes
    x = re.sub(r"\d{4}-\d{2}-\d{2}", "", x)  # ISO dates
    x = re.sub(r"\d{8}", "", x)              # yyyymmdd dates
    return "".join(p for p in re.split(r"[^a-z0-9]+", x) if p and p not in _EQ_DROP)


EQ_ALIASES = {
    "llama4scout": "meta-llama/Llama-4-Scout-17B-16E-Instruct",
    "llama4maverick": "meta-llama/Llama-4-Maverick-17B-128E-Instruct",
    "llamanemotronultra": "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
    "gpt4o": "chatgpt-4o-latest-2025-04-25",
    "gpt5": "gpt-5-chat-latest-2025-08-07",
    "claude45sonnet": "claude-sonnet-4.5", "claudesonnet45": "claude-sonnet-4.5",
    "claude4sonnet": "claude-sonnet-4", "claudesonnet4": "claude-sonnet-4",
    "claude4opus": "claude-opus-4", "claudeopus4": "claude-opus-4",
    "mistrallarge2": "mistralai/Mistral-Large-Instruct-2411",
    "mistralsmall3": "mistralai/Mistral-Small-24B-Instruct-2501",
    "mistralsmall31": "mistralai/Mistral-Small-3.1-24B-Instruct-2503",
    "mistralsmall32": "mistralai/Mistral-Small-3.2-24B-Instruct-2506",
    "grok420": "grok-4.20-beta", "grok4200309": "grok-4.20-beta",
}
_EQ_BY_NORM = {_eq_norm(k): k for k in EQBENCH}


def eqbench_for(model):
    """Return the eqbench3_* dict for an AA model dict, or {} if no match."""
    for attr in ("slug", "name", "short_name"):
        n = _eq_norm(model.get(attr))
        if not n:
            continue
        key = EQ_ALIASES.get(n) or _EQ_BY_NORM.get(n)
        if key and key in EQBENCH:
            return EQBENCH[key]
    return {}


# --- LiveBench results (table_<date>.csv) -------------------------------------
# livebench.ai is a JS app whose bundle hard-codes the list of release dates and
# fetches `table_<date>.csv` / `categories_<date>.json` for the newest one; do
# the same discovery here. Releases are immutable, so a dated file already on
# disk is reused without a network call (like `model_pages/`), and loading
# globs for the newest local pair so `--cached` / offline runs keep working.
LIVEBENCH_URL = "https://livebench.ai/"


def fetch_livebench_release():
    shell = _fetch(LIVEBENCH_URL)
    bundle_path = re.search(r'src="\./(static/js/main\.[^"]*\.js)"', shell).group(1)
    bundle = _fetch(LIVEBENCH_URL + bundle_path)
    dates = json.loads(re.search(
        r'\[\s*"20\d\d-\d\d-\d\d"(?:,"20\d\d-\d\d-\d\d")+\]', bundle).group(0))
    return max(dates).replace("-", "_")


def fetch_livebench_files():
    if "--cached" in sys.argv:
        return
    try:
        release = fetch_livebench_release()
    except Exception as e:
        print(f"  ! couldn't discover latest LiveBench release: {e}"
              " (using newest local files)", file=sys.stderr)
        return
    for name in (f"table_{release}.csv", f"categories_{release}.json"):
        if not os.path.exists(name):
            fetch_source(name, lambda: _fetch(LIVEBENCH_URL + name))


fetch_livebench_files()


def _newest(pattern):
    """Newest local file for a `<prefix>_<yyyy_mm_dd>.<ext>` glob, or None."""
    return max(glob.glob(pattern), default=None)


def load_livebench_categories():
    """Map category name -> member column list, for aggregate scores."""
    path = _newest("categories_*.json")
    if not path:
        return {}
    with open(path) as f:
        return json.load(f)


LB_CATEGORIES = load_livebench_categories()


def load_livebench():
    # The CSV is one row per LiveBench model id with a column per benchmark
    # task. Each numeric cell is surfaced as a `livebench_<task>` field.
    path = _newest("table_*.csv")
    if not path:
        return {}
    out = {}
    with open(path, newline="") as f:
        for r in csv.DictReader(f):
            mid = r.get("model")
            if not mid:
                continue
            scores = {}
            for col, val in r.items():
                if col == "model":
                    continue
                try:
                    scores[f"livebench_{col}"] = float(val)
                except (TypeError, ValueError):
                    continue
            # Aggregate category scores: average the member columns present.
            for cat, members in LB_CATEGORIES.items():
                vals = [scores[f"livebench_{m}"] for m in members
                        if f"livebench_{m}" in scores]
                if vals:
                    cid = "livebench_" + re.sub(r"\W+", "_", cat.strip().lower())
                    scores[cid] = sum(vals) / len(vals)
            if scores:
                out[mid] = scores
    return out


LIVEBENCH = load_livebench()

# Benchmark-site model ids drop reasoning/effort/serving descriptors and order
# size tokens differently from AA, so match on a normalized form (cf.
# `_eq_norm`); this matcher is shared by LiveBench, CursorBench, DeepSWE and
# SimpleBench. Per-source ALIASES cover reorderings (AA writes "4.5 Haiku",
# LiveBench "haiku-4-5") and stray release dates the date regexes don't catch.
# Only genuine descriptors belong here: a token that names a distinct model
# ("GPT-5.5 Instant" is its own model, not a serving mode of GPT-5.5) must be
# kept, or that model silently inherits its namesake's scores.
_LB_DROP = {"base", "thinking", "reasoning", "nonreasoning", "nothinking",
            "high", "low", "medium", "xhigh", "max", "effort", "highthinking",
            "lowthinking", "preview", "exp", "auto", "unknown",
            "instruct", "it", "chat", "latest", "beta", "free", "hf",
            "minimal", "non"}


def _lb_drop(token):
    # `\d+k` context-length tokens (32k, 12k...) are serving descriptors too;
    # parameter-count tokens like "120b" are kept so model variants don't collide.
    return token in _LB_DROP or re.fullmatch(r"\d{1,3}k", token)


def _lb_norm(x, is_slug=False):
    if not x:
        return ""
    x = x.split("/")[-1].lower().split(",")[0]
    if is_slug and "_" in x:           # AA slugs are "<provider>_<model>"
        x = x.split("_", 1)[1]
    x = re.sub(r"\(.*?\)", "", x)
    x = re.sub(r"\d{4}-\d{2}-\d{2}", "", x)      # ISO date
    x = re.sub(r"\d{2}-\d{4}", "", x)            # mm-yyyy
    x = re.sub(r"(?<!\d)\d{2}-\d{2}(?!\d)", "", x)  # mm-dd
    x = re.sub(r"\d{8}", "", x)                  # yyyymmdd
    return "".join(p for p in re.split(r"[^a-z0-9]+", x) if p and not _lb_drop(p))


# `_lb_norm` drops effort descriptors (xhigh/medium/...), so distinct LiveBench
# rows like "gpt-5.5-xhigh" and "gpt-5.5-medium" collapse to one norm and an AA
# model would match an arbitrary effort variant. `_lb_effort` recovers the effort
# level (kept even when in parens, e.g. AA's "GPT-5.5 (xhigh)") so scores only
# attach to the variant actually benchmarked. "none" marks non-reasoning
# variants, which must never inherit a reasoning run's score (AA writes
# "(Non-reasoning, high)": that "high" is not a thinking level).
_LB_EFFORTS = ("xhigh", "xlow", "high", "medium", "low", "minimal", "max")


def _lb_effort(x):
    if not x:
        return ""
    toks = set(re.split(r"[^a-z0-9]+", x.lower()))
    if "nonreasoning" in toks or "nothinking" in toks or {"non", "reasoning"} <= toks:
        return "none"
    for e in _LB_EFFORTS:
        if e in toks:
            return e
    if "med" in toks:                  # SimpleBench writes "(med)" for medium
        return "medium"
    # A "thinking" run with no stated level ("Kimi K2 Thinking"). The
    # normalizer drops the token, so without this pseudo-level the model
    # collapses onto its non-thinking sibling and inherits its score.
    if "thinking" in toks:
        return "thinking"
    return ""


def _model_effort(model):
    """The effort level of an AA model, from whichever attr carries one.

    The slug often lacks the level the display name has ("gpt-5-5" is
    "GPT-5.5 (xhigh)"), and a non-reasoning marker on any attr overrides a
    level found on another.
    """
    effs = [e for e in (_lb_effort(model.get(a))
                        for a in ("slug", "short_name", "name")) if e]
    if "none" in effs:
        return "none"
    return effs[0] if effs else ""


def _model_norms(model):
    """Every non-empty `_lb_norm` of an AA model's slug / short_name / name."""
    for attr, is_slug in (("slug", True), ("short_name", False), ("name", False)):
        if n := _lb_norm(model.get(attr), is_slug=is_slug):
            yield n


# Effort levels from highest to lowest. "" (unqualified) ranks highest: a run
# that doesn't state its thinking level is assumed to be at the highest level
# available, never a lower one. "thinking" (reasoning on, level unstated) sits
# just below it. "none" (non-reasoning) ranks below everything.
_EFFORT_PREF = ("", "thinking", "max", "xhigh", "high", "medium", "low", "xlow",
                "minimal", "none")
_EFFORT_RANK = {e: i for i, e in enumerate(_EFFORT_PREF)}

# Highest effort rank each AA norm group reaches across its variants. Filled
# in once the payload is parsed below; the matchers only run after that, in
# the row loop.
AA_TOP_EFFORT = {}


def make_matcher(scores, aliases={}):
    """Build an AA-model -> `scores`-entry matcher on `_lb_norm`/`_lb_effort`.

    `scores` maps source-side model ids to field dicts; `aliases` maps the
    AA-side normalized form to the source-side one for names the normalizer
    can't reconcile.

    An AA model matches the source row at its exact effort level, else the
    nearest *lower* level (a max variant takes the xhigh row when there is no
    max row, high takes medium, ...) — never a higher one, since a higher
    level's score would overstate the variant. Unqualified sides are assumed
    to mean the highest available level: a source row with no stated level
    (e.g. all of CursorBench) attaches only to the AA group's highest-effort
    variant, and an AA model with no stated level takes the source's
    unqualified row, else its highest-effort row.
    """
    by_norm_effort = {}
    # Iterate lowest effort first so on (norm, effort) collisions the id
    # sorted() ranks higher wins deterministically.
    for k in sorted(scores, key=lambda k: -_EFFORT_RANK[_lb_effort(k)]):
        by_norm_effort[(_lb_norm(k), _lb_effort(k))] = k

    def match(model):
        """Return the source's field dict for an AA model dict, or {}."""
        eff = _model_effort(model)
        norms = list(_model_norms(model))

        def row(e):
            # Most specific (longest) norm first: a display name may carry a
            # version tag the slug lacks ("deepseek-r1" slug vs "DeepSeek R1
            # 0528" name), and the tagged form must beat the bare one, which
            # belongs to a different release.
            for n in sorted(norms, key=len, reverse=True):
                if key := by_norm_effort.get((aliases.get(n, n), e)):
                    return scores[key]

        if r := row(eff):
            return r
        # The unqualified row, only for the variant at the top of its AA
        # group; lower variants get an explicit lower level or nothing.
        # "thinking" counts as unqualified here: AA tags ordinary reasoning
        # serving duplicates with bare "-thinking" slugs (e.g. Vertex hosts),
        # and those must share their unqualified sibling's row. A genuine
        # thinking/non-thinking split is still routed by the exact-effort
        # lookup above before this gate is reached.
        gate = _EFFORT_RANK["" if eff == "thinking" else eff]
        if all(AA_TOP_EFFORT.get(n, gate) >= gate for n in norms):
            if r := row(""):
                return r
        # Walk down the levels below the model's own. "none" (non-reasoning)
        # is not a lower thinking level, so it is never a fallback target.
        for e in _EFFORT_PREF[_EFFORT_RANK[eff] + 1:]:
            if e == "none":
                break
            if r := row(e):
                return r
        return {}

    return match


# AA orders the older Claude names version-first ("Claude 4.5 Haiku") where the
# benchmark sites write them model-first ("claude-haiku-4-5"); the normalizer
# can't reorder tokens, so alias the AA-side form for any source using it.
CLAUDE_ORDER_ALIASES = {"claude45haiku": "claudehaiku45",
                        "claude45sonnet": "claudesonnet45"}

# keyed by the AA-side normalized form, value is the LiveBench-side form
LB_ALIASES = {**CLAUDE_ORDER_ALIASES,
              "grok4": "grok40709", "grokcode1": "grokcode10825"}
livebench_for = make_matcher(LIVEBENCH, LB_ALIASES)


# --- EQ-Bench 4 (eqbench.com) --------------------------------------------------
# The leaderboard hydrates from `const EQBENCH4_DATA = {...};`. It is a separate
# run from EQ-Bench 3 above with its own dimensions, so both are surfaced. Per
# model we take the headline Elo, the eight descriptive `dims` traits and the
# six ability scores. Abilities come from the "absolute" mode (per-dimension,
# min-max normalized 1-10 across the board) rather than the site's default
# "neighbour" mode, whose signed margins are only meaningful against a model's
# own Elo neighbours and so can't be compared across the leaderboard.
def load_eqbench4():
    text = fetch_source(
        "eqbench4_data.js",
        lambda: _fetch("https://eqbench.com/eqbench4/eqbench4_data.js"))
    if not text:
        return {}
    obj = text[text.index("{"): text.rstrip().rstrip(";").rindex("}") + 1]
    out = {}
    for m in json.loads(obj).get("models", []):
        abilities = ((m.get("ability_modes") or {}).get("absolute") or {}).get("values") or {}
        vals = {"elo": m.get("elo"), **(m.get("dims") or {}), **abilities}
        scores = {f"eqbench4_{k}": v for k, v in vals.items()
                  if isinstance(v, (int, float)) and not isinstance(v, bool)}
        if scores and m.get("model"):
            out[m["model"]] = scores
    return out


eqbench4_for = make_matcher(load_eqbench4(), CLAUDE_ORDER_ALIASES)


# --- CursorBench (benchlm.ai) --------------------------------------------------
# BenchLM's page embeds the leaderboard in the standard Next.js `__NEXT_DATA__`
# blob. `score` is the CursorBench result itself; `overallScore`/`displayScore`
# are BenchLM's own composite ratings, which we don't surface.
def load_cursorbench():
    text = fetch_source(
        "cursorbench.html",
        lambda: _fetch("https://benchlm.ai/benchmarks/cursorBench"))
    if not text:
        return {}
    m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>',
                  text, re.S)
    leaderboard = json.loads(m.group(1))["props"]["pageProps"]["leaderboard"]
    return {e["sourceModelId"] or e["slug"]: {"cursorbench": e["score"]}
            for e in leaderboard
            if isinstance(e.get("score"), (int, float))}


cursorbench_for = make_matcher(load_cursorbench())


# --- DeepSWE (deepswe.datacurve.ai) --------------------------------------------
# The site hydrates from a JSON artifact with one row per model x reasoning
# effort (all rows currently use the mini-swe-agent harness). pass@1 is the
# attempt pass rate, pass@4 is tasks with any passing rollout; both are
# fractions, scaled to percentages to match the other benchmark fields.
def load_deepswe():
    text = fetch_source(
        "deepswe.json",
        lambda: _fetch("https://deepswe.datacurve.ai/artifacts/v1.1/leaderboard-live.json"))
    if not text:
        return {}
    out = {}
    for r in json.loads(text)["rows"]:
        key = r["model"] + (f"-{r['reasoning_effort']}" if r.get("reasoning_effort") else "")
        fields = {"deepswe_pass_at_1": r["pass_at_1"] * 100,
                  "deepswe_pass_at_4": r["pass_at_4"] * 100}
        if isinstance(r.get("mean_cost_usd"), (int, float)):
            fields["deepswe_cost_per_task"] = r["mean_cost_usd"]
        out[key] = fields
    return out


deepswe_for = make_matcher(load_deepswe())


# --- SimpleBench (simple-bench.com) --------------------------------------------
# The site hydrates its table from a plain JS array in leaderboard-data.js.
# That file is the source of truth: Epoch's CSV mirror (previously used here)
# lags behind it, missing models and carrying since-revised scores. The file
# also holds an `openEndedData` table for a different benchmark, so only the
# `leaderboardData` array is parsed.
def load_simplebench():
    text = fetch_source(
        "simplebench.js",
        lambda: _fetch("https://simple-bench.com/static/js/leaderboard-data.js"))
    if not text:
        return {}
    table = re.search(r"const leaderboardData = \[(.*?)\];", text, re.S).group(1)
    out = {}
    seen = set()
    for name, score in re.findall(
            r'model:\s*"([^"]+)"\s*,\s*score:\s*"([\d.]+)%"', table):
        if "Human" in name:            # the two human-baseline rows
            continue
        # "+" is eaten by the normalizer but AA slugs spell it "plus"
        # (Command R+ / command-r-plus).
        key = name.replace("+", " plus")
        # Bare mm-dd version tags ("DeepSeek V3 03-24", "DeepSeek R1 05/28")
        # would otherwise collide with the undated base model: the normalizer
        # strips dashed dates and treats "/" as a path separator, keeping only
        # what follows it. Fuse them into version tokens the way AA writes
        # them ("V3 0324", "R1 0528"). The lookarounds leave full ISO dates
        # ("o1-2024-12-17") intact for the normalizer to strip whole.
        key = re.sub(r"(?<![\d-])(\d{2})[-/](\d{2})(?![\d-])", r"\1\2", key)
        # Parenthesized tags vanish from norms, so revisions like "Gemini 2.5
        # Pro (06-05)" vs "(03-25)" still collide; rows come in rank order, so
        # keep the first (higher-scoring, in practice newer) one.
        sig = (_lb_norm(key), _lb_effort(key))
        if sig in seen:
            continue
        seen.add(sig)
        out[key] = {"simplebench": float(score)}
    return out


# keyed by the AA-side normalized form, value is the SimpleBench-side form
SB_ALIASES = {
    "claudefable5": "claudefable",     # site omits the version number
    "mistrallarge2": "mistrallargev2",
    # the site only benchmarked the 08-06 snapshot; AA's May/Nov refreshes
    # carried this score under the old Epoch source too
    "gpt4o": "gpt4o0806",
}
simplebench_for = make_matcher(load_simplebench(), SB_ALIASES)


def enclosing_object(text, i):
    """Parse the JSON object whose body contains position i in text."""
    depth = 0
    j = i
    while j > 0:
        c = text[j]
        if c == "}":
            depth += 1
        elif c == "{":
            if depth == 0:
                break
            depth -= 1
        j -= 1
    try:
        return decoder.raw_decode(text, j)[0]
    except ValueError:
        return None


# The payload holds one entry per model×host. Each entry has a nested `model`
# (benchmark scores, keyed by `slug`), plus `pricing`, `performance` and
# `features` sub-objects that vary by host. We aggregate hosts per model slug
# using the median. `label` is the display name; there is no separate id.
def snake(k):
    """camelCase leaf key -> snake_case (lowercased, digits kept attached)."""
    return re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", k).lower()


# Renames for fields whose plain snake form would misfire the direction/scale
# heuristics (which key off substrings like "tokens") or read awkwardly.
# `*_seconds` suffixes are stripped generically below.
# Order matters: `price1m_` is normalised before the blended field is shortened.
FIELD_RENAME = {
    "output_tokens_per_second": "output_speed",   # a speed (max), not a price
    "time_to_first_token": "time_to_first_chunk",
    "price1m_": "price_1m_",
    "price_1m_blended7_to2_to1": "price_1m_blended",
    # The bulk `providers` listing and a model's own page spell these
    # identically-valued fields differently; collapse onto the providers name
    # so `row.setdefault` treats them as the same field instead of two.
    "it_bench_sre": "itbench_sre",
    "harvey_lab_all_pass": "harvey_lab",
    "automation_bench_partial_score": "automation_bench",
}


def field_name(dotted):
    """Snake-case a flattened dotted path and apply the renames above."""
    name = "_".join(snake(part) for part in dotted.split("."))
    name = re.sub(r"_seconds$", "", name)
    for a, b in FIELD_RENAME.items():
        name = name.replace(a, b)
    return name


def flatten(obj, prefix=""):
    """Flatten numeric leaves to snake_case field names via `field_name`."""
    out = {}
    for k, v in obj.items():
        key = f"{prefix}{k}"
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            out[field_name(key)] = v
        elif isinstance(v, dict):
            out.update(flatten(v, f"{key}."))
    return out


# These nested objects on a model page duplicate `performanceByPromptType`'s
# "long" bucket value-for-value (verified across every enriched model so far),
# so skip them rather than add redundant fields for the same numbers.
MODEL_PAGE_DUPLICATE_KEYS = {"timescaleData", "endToEndResponseTime", "timeToFirstAnswerToken"}


def model_page_fields(slug, text):
    """Flatten the richest `"slug":"<slug>"` object found on a model's own page.

    The same slug shows up in several shallow stub objects too (e.g. related-
    model links), so keep whichever match has the most keys.
    """
    best = None
    for m in re.finditer(rf'"slug":"{re.escape(slug)}"', text):
        o = enclosing_object(text, m.start())
        if isinstance(o, dict) and (best is None or len(o) > len(best)):
            best = o
    if not best:
        return {}
    trimmed = {k: v for k, v in best.items() if k not in MODEL_PAGE_DUPLICATE_KEYS}
    return flatten(trimmed)


# Benchmark scores live on `model` and are identical across a model's hosts.
# Per-host `performance`/`features` are aggregated by median; `pricing` is kept
# whole per host and resolved to the cheapest one below.
HOST_SECTIONS = ("performance", "features")
models = {}          # slug -> model dict (with `name` injected for matching)
labels = {}          # slug -> display label
hosts = defaultdict(set)   # slug -> set of host slugs
host_pricing = defaultdict(list)   # slug -> one flattened `pricing` per host
host_data = defaultdict(lambda: defaultdict(list))
for hit in re.finditer(r'"hostApiId":', s):
    o = enclosing_object(s, hit.start())
    if not isinstance(o, dict):
        continue
    model = o.get("model")
    if not isinstance(model, dict) or not model.get("slug"):
        continue
    slug = model["slug"]
    label = o.get("label")
    # eqbench/livebench matchers look at slug/name/short_name; the payload only
    # carries slug, so surface the display label under both name attributes.
    model = {**model, "name": label, "short_name": label}
    if slug not in models or len(model) > len(models[slug]):
        models[slug] = model
    if label and slug not in labels:
        labels[slug] = label
    # `hostApiId` names the model as that host spells it, not the host itself
    # (every provider serving Kimi K2.6 reports "moonshotai/Kimi-K2.6"), so
    # hosts are counted by `host.slug`. A host can list one model more than
    # once — a dated snapshot beside its alias, a "-turbo" endpoint beside the
    # standard one — and that is still one host, hence a set.
    if host_slug := (o.get("host") or {}).get("slug"):
        hosts[slug].add(host_slug)
    if pricing := flatten(o.get("pricing") or {}):
        host_pricing[slug].append(pricing)
    for section in HOST_SECTIONS:
        for f, v in flatten(o.get(section) or {}).items():
            host_data[slug][f].append(v)

for m in models.values():
    eff_rank = _EFFORT_RANK[_model_effort(m)]
    for n in _model_norms(m):
        AA_TOP_EFFORT[n] = min(AA_TOP_EFFORT.get(n, eff_rank), eff_rank)


def price_rank(pricing):
    """Sort key selecting a model's cheapest host, on a 3:1 input/output blend.

    Every host entry carries both token prices, unlike `costPerTask` (44% of
    entries) and the cache prices, so this is the only key that ranks the whole
    set. The blend is what makes it a ranking rather than a guess: cheapest-by-
    input alone picks a different host for 17 of the 218 multi-host models.
    """
    return (3 * pricing["price_1m_input_tokens"]
            + pricing["price_1m_output_tokens"]) / 4


rows = []
row_slugs = []
for slug, m in models.items():
    row = flatten(m)
    for f, vals in host_data[slug].items():
        row[f] = median(vals)
    # Pricing is one host's whole quote, not a per-field median across hosts.
    # A median mixes hosts — cheap input from one, dear output from another —
    # into a quote nobody actually offers, and a single reseller that hasn't
    # passed on a price cut drags the model up: Amazon Bedrock still lists
    # GPT-5.6 Luna at the pre-cut $1.10/$6.60 against OpenAI's $0.20/$1.20,
    # which medianed to a fictional $0.65/$3.90.
    if quotes := host_pricing[slug]:
        row.update(min(quotes, key=price_rank))
    row["num_hosts"] = len(hosts[slug])
    row.update(eqbench_for(m))
    row.update(eqbench4_for(m))
    row.update(livebench_for(m))
    row.update(cursorbench_for(m))
    row.update(deepswe_for(m))
    row.update(simplebench_for(m))
    row["name"] = labels.get(slug) or slug
    row["creator"] = (m.get("creator") or {}).get("name", "")
    row["open_weights"] = bool(m.get("isOpenWeights"))
    rows.append(row)
    row_slugs.append(slug)


# --- Enrich a handful of models with their individual model-page payload ------
# Auto-fetch only the models most people actually look at (top TOP_N by
# Intelligence Index, plus the price/intelligence Pareto frontier); everything
# else stays on the bulk fields above unless its page is already cached (see
# `fetch_model_page`). Fields already set from the bulk listing win on overlap
# since they're aggregated across all of a model's hosts.
TOP_N = None  # None = no cap, enrich every scored model


def pareto_frontier(items, cost_key, quality_key):
    """(slug, row) pairs on the min-cost/max-quality skyline."""
    frontier = []
    best_quality = float("-inf")
    for slug, row in sorted(items, key=lambda t: t[1][cost_key]):
        if row[quality_key] > best_quality:
            frontier.append(slug)
            best_quality = row[quality_key]
    return frontier


scored = [(slug, row) for slug, row in zip(row_slugs, rows) if "intelligence_index" in row]
ranked = sorted(scored, key=lambda t: -t[1]["intelligence_index"])
top_n = {slug for slug, _ in (ranked if TOP_N is None else ranked[:TOP_N])}
priced = [(slug, row) for slug, row in scored if "price_1m_blended" in row]
pareto = set(pareto_frontier(priced, "price_1m_blended", "intelligence_index"))
priority_slugs = top_n | pareto

enriched = 0
stopped_early = False
for slug, row in zip(row_slugs, rows):
    cached = os.path.exists(os.path.join(MODEL_PAGE_CACHE_DIR, slug))
    if slug not in priority_slugs and not cached:
        continue
    text = fetch_model_page(slug)
    if text is None:
        # A live fetch failed; stop rather than retry or push on to the next
        # model (`fetch_model_page` already printed the underlying error).
        print(f"stopping enrichment: fetch failed for {slug}, not retrying", file=sys.stderr)
        stopped_early = True
        break
    for k, v in model_page_fields(slug, text).items():
        row.setdefault(k, v)
    enriched += 1
status = "stopped early" if stopped_early else "done"
print(f"enriched {enriched} models from individual model pages ({status}; "
      f"{len(top_n)} top by intelligence, {len(pareto)} price/intelligence pareto)")

counts = Counter(k for r in rows for k in r if k not in ("name", "creator", "open_weights"))
fields = sorted(counts)
field_id = {k: f"f{i}" for i, k in enumerate(fields)}


def default_direction(field):
    """'min' if people usually want to minimize this metric, else 'max'."""
    if field == "context_window_tokens" or "non_hallucination" in field:
        return "max"
    if re.search(r"price|cost|time|latency|hallucination|tokens|num_incorrect|num_not_attempted", field):
        return "min"
    return "max"


def default_scale(field):
    """'log' for wide-range ratio quantities; 'linear' for bounded scores."""
    if re.search(r"price|cost|time|latency|tokens|num_hosts", field):
        return "log"
    return "linear"


PRETTY_PREFIX = {"eqbench3_": "EQB3", "eqbench4_": "EQB4",
                 "livebench_": "LiveBench", "deepswe_": "DeepSWE"}
PRETTY_EXACT = {"cursorbench": "CursorBench", "simplebench": "SimpleBench"}


def pretty_name(field):
    """Convert snake_case / dot.separated field names to Title Case words."""
    if field in PRETTY_EXACT:
        return PRETTY_EXACT[field]
    for prefix, label in PRETTY_PREFIX.items():
        if field.startswith(prefix):
            return f"{label} " + pretty_name(field[len(prefix):])
    return " ".join(w.upper() if w in ("elo", "aime", "aq", "ttfc", "ci", "p25", "p50", "p75", "p95", "p5")
                   else w.capitalize()
                   for w in re.split(r"[_.]", field))


def sig4(v):
    """Round float to 4 significant figures; leave ints unchanged."""
    if not isinstance(v, float):
        return v
    rounded = float(f"{v:.4g}")
    return int(rounded) if rounded == int(rounded) else rounded


field_objects = [
    {"id": field_id[k], "name": k, "pretty_name": pretty_name(k),
     "direction": default_direction(k), "scale": default_scale(k)}
    for k in fields
]

# Rekey DATA rows: long field names → short ids, floats → 4 sig figs
short_rows = []
for r in rows:
    sr = {"name": r["name"], "creator": r["creator"], "open_weights": r["open_weights"]}
    for k, fid in field_id.items():
        if k in r:
            sr[fid] = sig4(r[k])
    short_rows.append(sr)

with open("data.js", "w") as f:
    f.write("const FIELDS = " + json.dumps(field_objects, indent=1) + ";\n")
    f.write("const DATA = " + json.dumps(short_rows) + ";\n")

print(f"{len(rows)} models, {len(fields)} numeric fields")
