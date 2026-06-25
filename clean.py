#!/usr/bin/env python3
"""Extract model data from the Next.js RSC payload in `providers` and write data.js.

The payload holds ~900 model×host entries. Benchmark scores live on the nested
"model" object; pricing and speed live on the host entry. We aggregate hosts
per model using the median.
"""
import csv
import json
import re
from collections import Counter, defaultdict
from statistics import median

s = open("providers").read()
decoder = json.JSONDecoder()


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
# The CSV is one row per LiveBench model id with a column per benchmark task.
# Each numeric cell is surfaced as a `livebench_<task>` field.
def load_livebench_categories(path="categories_2026_01_08.json"):
    """Map category name -> member column list, for aggregate scores."""
    try:
        with open(path) as f:
            return json.load(f)
    except FileNotFoundError:
        return {}


LB_CATEGORIES = load_livebench_categories()


def load_livebench(path="table_2026_01_08.csv"):
    try:
        f = open(path, newline="")
    except FileNotFoundError:
        return {}
    out = {}
    with f:
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

# LiveBench ids drop reasoning/effort/serving descriptors and order size tokens
# differently from AA, so match on a normalized form (cf. `_eq_norm`). LB_ALIASES
# cover reorderings (AA writes "4.5 Haiku", LiveBench "haiku-4-5") and stray
# release dates the date regexes don't catch.
_LB_DROP = {"base", "thinking", "reasoning", "nonreasoning", "nothinking",
            "high", "low", "medium", "xhigh", "max", "effort", "highthinking",
            "lowthinking", "preview", "exp", "auto", "32k", "64k", "16k",
            "instruct", "it", "chat", "latest", "beta", "free", "hf",
            "minimal", "instant", "non", "fast"}


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
    return "".join(p for p in re.split(r"[^a-z0-9]+", x) if p and p not in _LB_DROP)


# `_lb_norm` drops effort descriptors (xhigh/medium/...), so distinct LiveBench
# rows like "gpt-5.5-xhigh" and "gpt-5.5-medium" collapse to one norm and an AA
# model would match an arbitrary effort variant. `_lb_effort` recovers the effort
# level (kept even when in parens, e.g. AA's "GPT-5.5 (xhigh)") so we can match
# effort-aware first, then fall back to the bare norm.
_LB_EFFORTS = ("xhigh", "xlow", "high", "medium", "low", "minimal", "max")


def _lb_effort(x):
    if not x:
        return ""
    toks = set(re.split(r"[^a-z0-9]+", x.lower()))
    for e in _LB_EFFORTS:
        if e in toks:
            return e
    return ""


# keyed by the AA-side normalized form, value is the LiveBench-side form
LB_ALIASES = {
    "claude45haiku": "claudehaiku45", "claude45sonnet": "claudesonnet45",
    "grok4": "grok40709", "grokcode1": "grokcode10825",
}
_LB_BY_NORM = {_lb_norm(k): k for k in LIVEBENCH}
_LB_BY_NORM_EFFORT = {(_lb_norm(k), _lb_effort(k)): k for k in LIVEBENCH}


def livebench_for(model):
    """Return the livebench_* dict for an AA model dict, or {} if no match."""
    attrs = (("slug", True), ("short_name", False), ("name", False))
    norms = []
    for attr, is_slug in attrs:
        raw = model.get(attr)
        n = _lb_norm(raw, is_slug=is_slug)
        if n:
            norms.append((LB_ALIASES.get(n, n), _lb_effort(raw)))
    # Prefer an exact effort match from *any* attr before falling back to the
    # bare norm, so a no-effort slug never grabs the wrong variant's row when a
    # later attr (e.g. name "GPT-5.5 (xhigh)") carries the effort level.
    for n, e in norms:
        if e and (key := _LB_BY_NORM_EFFORT.get((n, e))):
            return LIVEBENCH[key]
    for n, _ in norms:
        if key := _LB_BY_NORM.get(n):
            return LIVEBENCH[key]
    return {}


def enclosing_object(i):
    """Parse the JSON object whose body contains position i."""
    depth = 0
    j = i
    while j > 0:
        c = s[j]
        if c == "}":
            depth += 1
        elif c == "{":
            if depth == 0:
                break
            depth -= 1
        j -= 1
    try:
        return decoder.raw_decode(s, j)[0]
    except ValueError:
        return None


# Host entries are the objects containing blended price keys.
HOST_FIELDS = [
    "price_1m_blended_0_3_1", "price_1m_blended_7_2_1", "price_1m_blended_0_1_1",
    "price_1m_blended_100_1_1", "price_1m_blended_0_100_1",
    "price_1m_input_tokens", "price_1m_output_tokens",
    "median_output_speed", "median_time_to_first_chunk", "median_end_to_end_response_time",
]
models = {}
host_data = defaultdict(lambda: defaultdict(list))
for m in re.finditer(r'"price_1m_blended_0_3_1"', s):
    o = enclosing_object(m.start())
    if not isinstance(o, dict):
        continue
    model = o.get("model")
    if not isinstance(model, dict) or "id" not in model:
        continue
    mid = model["id"]
    if mid not in models or len(model) > len(models[mid]):
        models[mid] = model
    for f in HOST_FIELDS:
        v = o.get(f)
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            host_data[mid][f].append(v)
    ts = o.get("timescaleData") or {}
    for f in ("median_output_speed", "median_time_to_first_chunk", "median_end_to_end_response_time"):
        v = ts.get(f)
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            host_data[mid][f].append(v)


# Per-prompt-length performance rows live outside the host entries; collect
# end-to-end / TTFC stats per model and prompt length ("medium", "long", "100k").
for m in re.finditer(r'"prompt_length_type":"(\w+)"', s):
    o = enclosing_object(m.start())
    if not isinstance(o, dict) or "model_id" not in o:
        continue
    plen = m.group(1)
    for f in ("median_time_to_first_chunk", "median_end_to_end_response_time", "median_output_speed"):
        v = o.get(f)
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            host_data[o["model_id"]][f"{f}_{plen}_prompt"].append(v)


# Outdated/superseded/saturated benchmarks to drop from the export.
# (All `lab_claimed_*` fields are dropped separately in keep_field.)
EXCLUDED_FIELDS = {
    "aime",          # superseded by aime25 and newer math evals
    "aime25",        # saturated; rolled into math_index
    "math_500",      # saturated
    "mmlu_pro",      # saturated
    "livecodebench", # superseded by newer coding evals
    "humaneval",     # saturated
}


def keep_field(k):
    if k in EXCLUDED_FIELDS:
        return False
    if k.startswith("lab_claimed_"):
        return False
    if k.startswith(("canonical_eval_token_counts.", "representative_query_token_counts.", "model_creators.")):
        return False
    if k.startswith("multilingual_aa.") and k != "multilingual_aa.average.score":
        return False
    if k.startswith("omniscience_breakdown.") and not k.startswith("omniscience_breakdown.total."):
        return False
    if k.startswith("briefcase_breakdown.") and k != "briefcase_breakdown.elo":
        return False
    return True


def flatten(obj, prefix=""):
    out = {}
    for k, v in obj.items():
        key = f"{prefix}{k}"
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            out[key] = v
        elif isinstance(v, dict):
            out.update(flatten(v, f"{key}."))
    return out


rows = []
for mid, m in models.items():
    row = {k: v for k, v in flatten(m).items() if keep_field(k)}
    for f, vals in host_data[mid].items():
        row[f] = median(vals)
    row["num_hosts"] = len(host_data[mid].get("price_1m_blended_0_3_1", []))
    # USD cost to run the full intelligence-index eval suite, from its token
    # counts and the model's (median across hosts) per-1M-token prices
    tc = m.get("intelligence_index_token_counts") or {}
    pin = row.get("price_1m_input_tokens")
    pout = row.get("price_1m_output_tokens")
    tin = tc.get("input") or tc.get("input_tokens")
    tout = tc.get("output_tokens")
    if None not in (pin, pout, tin, tout) and (pin or pout):
        row["intelligence_index_run_cost"] = (tin * pin + tout * pout) / 1e6
    # Use `estimated_*` values as a fallback for the metric they estimate, then
    # drop the estimated field itself (it's merged into the real one).
    for k in [k for k in row if k.startswith("estimated_")]:
        base = k[len("estimated_"):]
        cur = row.get(base)
        if not isinstance(cur, (int, float)) or isinstance(cur, bool):
            row[base] = row[k]
        del row[k]
    row.update(eqbench_for(m))
    row.update(livebench_for(m))
    row["name"] = m.get("short_name") or m.get("name")
    row["creator"] = (m.get("model_creators") or {}).get("name", "")
    row["open_weights"] = bool(m.get("is_open_weights"))
    rows.append(row)

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


def pretty_name(field):
    """Convert snake_case / dot.separated field names to Title Case words."""
    if field.startswith("eqbench3_"):
        return "EQB3 " + pretty_name(field[len("eqbench3_"):])
    if field.startswith("livebench_"):
        return "LiveBench " + pretty_name(field[len("livebench_"):])
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
