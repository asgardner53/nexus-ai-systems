#!/usr/bin/env python3
"""Render provisional FRIA research records from a validated JSON payload."""
import argparse
import json
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

def field(item, key):
    value = item.get(key)
    if not isinstance(value, str) or not value.strip():
        raise ValueError("Missing or empty: " + key)
    return value.strip()

def cell(value):
    return str(value).replace("|", "\\|").replace("\n", " ").replace("\r", " ")

def render(data):
    day = field(data, "date")
    date.fromisoformat(day)
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", day):
        raise ValueError("Invalid date format")
    field(data, "research_window")
    field(data, "summary")
    if not isinstance(data.get("claims"), list) or not isinstance(data.get("opportunities"), list):
        raise ValueError("claims and opportunities must be arrays")
    ids = set()
    claims = [
        "# FRIA Evidence Register — " + day, "",
        "**Status: Provisional intake; human verification required.**", "",
        "| ID | Claim | Source | Jurisdiction | Materiality | Status | Limitations | Contrary evidence | Safe wording |",
        "|---|---|---|---|---|---|---|---|---|"
    ]
    for c in data["claims"]:
        cid = field(c, "id")
        if not re.fullmatch(r"FRIA-CLM-[A-Z0-9-]+", cid) or cid in ids:
            raise ValueError("Invalid or duplicate claim ID")
        ids.add(cid)
        for k in ("claim", "source_title", "source_url", "jurisdiction", "limitations", "contrary_evidence", "safe_wording"):
            field(c, k)
        url = urlparse(c["source_url"])
        if url.scheme != "https" or not url.netloc:
            raise ValueError("Source URL must be absolute HTTPS")
        if c.get("verification_status") not in ("provisional", "unresolved", "rejected"):
            raise ValueError("Intake cannot assert verified status")
        if c.get("materiality") not in ("M2", "M3"):
            raise ValueError("M2/M3 required")
        values = [cid, c["claim"], "[" + cell(c["source_title"]) + "](" + c["source_url"] + ")", c["jurisdiction"], c["materiality"], c["verification_status"], c["limitations"], c["contrary_evidence"], c["safe_wording"]]
        claims.append("| " + " | ".join(map(cell, values)) + " |")
    opportunities = [
        "# FRIA Editorial Opportunities — " + day, "",
        "**Status: Candidate topics; human editorial approval required.**", "",
        "| Rank | Headline | Rationale | Evidence gap |",
        "|---|---|---|---|"
    ]
    for o in sorted(data["opportunities"], key=lambda x: x["rank"]):
        if not isinstance(o.get("rank"), int) or o["rank"] < 1:
            raise ValueError("Invalid rank")
        for k in ("headline", "rationale", "evidence_gap"):
            field(o, k)
        opportunities.append("| " + " | ".join(map(cell, [o["rank"], o["headline"], o["rationale"], o["evidence_gap"]])) + " |")
    root = Path("the-learning-frontier")
    return {
        root / "01-research-intelligence" / (day + "-fria-brief.md"): "# FRIA Research Brief — " + day + "\n\n**Window:** " + field(data, "research_window") + "\n\n**Status:** Provisional; review required\n\n" + data["summary"] + "\n",
        root / "02-evidence-register" / (day + "-claims.md"): "\n".join(claims) + "\n",
        root / "03-editorial-pipeline" / (day + "-opportunities.md"): "\n".join(opportunities) + "\n",
    }

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    args = parser.parse_args()
    records = render(json.loads(Path(args.input).read_text(encoding="utf-8")))
    for path, content in records.items():
        if path.exists():
            raise ValueError("Refusing to overwrite " + str(path))
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print(path)

if __name__ == "__main__":
    main()
