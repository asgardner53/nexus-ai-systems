from __future__ import annotations

from pathlib import Path

BOOK_ROOT = Path(__file__).resolve().parents[1]
RESEARCH = BOOK_ROOT / "01-research"
SOURCE = RESEARCH / "claims-evidence-register.md"
OUTPUT = RESEARCH / "claims-evidence-register-v1.0.md"

REPLACEMENTS = [
    ("# Claims & Evidence Register v0.10", "# Claims & Evidence Register v1.0"),
    ("Nitchals 2026; van de Sande et al. 2026", "Sterz et al. 2024; Calvert 2025"),
    ("Nitchals 2026", "Calvert 2025"),
    ("van de Sande et al. 2026", "Sterz et al. 2024"),
    ("Zhu et al. 2026", "Sterz et al. 2024"),
    ("MIT CISR 2026", "Sebastian et al. 2026"),
    ("Engin 2026", "Sebastian et al. 2026"),
    ("Cäker & Siverbo 2021", "Cäker, Siverbo & Åkesson 2022"),
    ("Bozeman, Youtie & Jung 2020", "Bozeman, Youtie & Jung 2021"),
    ("Bozeman et al. 2020", "Bozeman et al. 2021"),
    ("Sterz et al. 2024; Sterz et al. 2024; Calvert 2025", "Sterz et al. 2024; Calvert 2025"),
    ("Sterz et al. 2024; Sterz et al. 2024", "Sterz et al. 2024"),
]

NOTE = """

**Whole-book reconciliation status:** **PASS TO PROOF WITH FINAL DYNAMIC MONITORING**  
**Canonical reference source:** `02-manuscript/references-v1.0-reconciled.md`  
**Controlled manuscript:** `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md`

This version consolidates the chapter-level register after whole-book citation and reference reconciliation. It preserves the original claim IDs and evidence decisions while normalising superseded source names and years. Publication-stage currency and retraction/editorial-notice checks remain controlled in `whole-book-claims-citations-reference-reconciliation-v1.0.md`.
"""

if not SOURCE.exists():
    raise FileNotFoundError(f"Claims register not found: {SOURCE}")

text = SOURCE.read_text(encoding="utf-8")
for old, new in REPLACEMENTS:
    text = text.replace(old, new)

header = "# Claims & Evidence Register v1.0"
if header not in text:
    raise RuntimeError("Reconciled claims-register heading was not produced")

text = text.replace(header, header + NOTE, 1)
text = text.replace("\r\n", "\n").replace("\r", "\n")
text = "\n".join(line.rstrip() for line in text.split("\n")).strip() + "\n"

for forbidden in ("Nitchals 2026", "van de Sande et al. 2026", "Engin 2026", "Zhu et al. 2026"):
    if forbidden in text:
        raise RuntimeError(f"Superseded citation remains in reconciled claims register: {forbidden}")

OUTPUT.write_text(text, encoding="utf-8")
print(f"Generated {OUTPUT.relative_to(BOOK_ROOT)}")
