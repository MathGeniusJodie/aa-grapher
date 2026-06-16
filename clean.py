#!/usr/bin/env python3
"""Extract model data from the Next.js RSC payload in `providers` and write data.js.

The payload holds ~900 model×host entries. Benchmark scores live on the nested
"model" object; pricing and speed live on the host entry. We aggregate hosts
per model using the median.
"""
import json
import re
from collections import Counter, defaultdict
from statistics import median

s = open("providers").read()
decoder = json.JSONDecoder()


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


def keep_field(k):
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
