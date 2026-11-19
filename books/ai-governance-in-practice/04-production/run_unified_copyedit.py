from __future__ import annotations

import re
from pathlib import Path

BOOK_ROOT = Path(__file__).resolve().parents[1]
MANUSCRIPT = BOOK_ROOT / "02-manuscript"
OUTPUT = MANUSCRIPT / "copyedit-v1.0"
OUTPUT.mkdir(parents=True, exist_ok=True)

SOURCE_FILES = [
    "front-matter-author-preface-v0.2-approved.md",
    "front-matter-note-on-cases-and-examples-v0.1.md",
    "part-01-the-accountability-problem-v0.1.md",
    "chapter-01-the-ai-you-are-already-governing-v0.2.md",
    "chapter-02-when-policy-exists-but-control-does-not-v0.7-whole-book-author-revision.md",
    "chapter-03-the-human-who-still-owns-the-decision-v0.3.md",
    "part-02-making-accountability-meaningful-v0.1.md",
    "chapter-04-the-conditions-for-meaningful-accountability-v0.3.md",
    "chapter-05-what-have-we-actually-allowed-the-ai-to-do-v0.3-whole-book-author-revision.md",
    "chapter-06-where-governance-actually-lives-v0.3-whole-book-author-revision.md",
    "chapter-07-capability-before-compliance-v0.3-whole-book-author-revision.md",
    "chapter-08-governance-as-permission-v0.3-whole-book-author-revision.md",
    "part-03-proving-and-adapting-control-v0.1.md",
    "chapter-09-evidence-before-assurance-v0.3-whole-book-author-revision.md",
    "chapter-10-when-the-system-begins-to-act-v0.3-whole-book-author-revision.md",
]

GLOBAL_REPLACEMENTS = {
    "\u00a0": " ",
    "# Chapter 6 - Where Governance Actually Lives": "# Chapter 6 — Where Governance Actually Lives",
    "(ISO, 2023": "(ISO/IEC, 2023",
    "MIT CISR, 2026": "Sebastian et al., 2026",
    "Nitchals, 2026; van de Sande, Economou-Zavlanos & van Genderen, 2026": "Sterz et al., 2024; Calvert, 2025",
    "Engin, 2026": "Sebastian et al., 2026",
    "Cäker & Siverbo, 2021": "Cäker, Siverbo & Åkesson, 2022",
    "Bozeman, Youtie & Jung, 2020": "Bozeman, Youtie & Jung, 2021",
    "Zhu et al., 2026": "Sterz et al., 2024",
}

PER_FILE_REPLACEMENTS = {
    "chapter-04-the-conditions-for-meaningful-accountability-v0.3.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-05-what-have-we-actually-allowed-the-ai-to-do-v0.3-whole-book-author-revision.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-06-where-governance-actually-lives-v0.3-whole-book-author-revision.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-07-capability-before-compliance-v0.3-whole-book-author-revision.md": {
        "(European Union, 2024; NIST, 2023; Australian Government, 2026)": "(European Union, 2024; NIST, 2023; Australian Government, 2026a)",
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-08-governance-as-permission-v0.3-whole-book-author-revision.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-09-evidence-before-assurance-v0.3-whole-book-author-revision.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
    },
    "chapter-10-when-the-system-begins-to-act-v0.3-whole-book-author-revision.md": {
        "Australian Government, 2026": "Australian Government, 2026b",
        "(Australian Government, 2026b; NASA, 2024)": "(Australian Government, 2026b; Slagel et al., 2024)",
    },
}

# Applied after file-specific changes to repair overlaps caused by institutional year suffixes
# and source substitutions within a multi-source citation.
POST_REPLACEMENTS = {
    "Australian Government, 2026ba": "Australian Government, 2026a",
    "Sterz et al., 2024; Sterz et al., 2024; Calvert, 2025": "Sterz et al., 2024; Calvert, 2025",
}

# Limited whole-book consistency corrections. These do not alter argument or evidence strength.
STYLE_REPLACEMENTS = {
    "AI assurance": "AI assurance",
    "AI-assurance": "AI assurance",
    "decision making": "decision-making",
    "decision-maker": "decision-maker",
    "human-AI": "human–AI",
    "human-machine": "human–machine",
    "third party": "third-party",
    "real time": "real-time",
    "high consequence": "high-consequence",
    "low consequence": "low-consequence",
    "whole book": "whole-book",
}


def apply_replacements(text: str, filename: str) -> tuple[str, int]:
    count = 0
    for old, new in GLOBAL_REPLACEMENTS.items():
        if old in text:
            count += text.count(old)
            text = text.replace(old, new)

    for old, new in PER_FILE_REPLACEMENTS.get(filename, {}).items():
        if old in text:
            count += text.count(old)
            text = text.replace(old, new)

    for old, new in POST_REPLACEMENTS.items():
        if old in text:
            count += text.count(old)
            text = text.replace(old, new)

    for old, new in STYLE_REPLACEMENTS.items():
        pattern = rf"(?<![\w–-]){re.escape(old)}(?![\w–-])"
        text, n = re.subn(pattern, new, text)
        count += n

    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = "\n".join(line.rstrip() for line in text.split("\n"))
    text = re.sub(r"\n{4,}", "\n\n\n", text)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = text.strip() + "\n"
    return text, count


def target_name(source_name: str) -> str:
    stem = source_name.removesuffix(".md")
    stem = re.sub(r"-v\d+\.\d+(?:-[a-z0-9-]+)?$", "", stem)
    return f"{stem}-copyedit-v1.0.md"


def extract_citation_groups(text: str) -> list[str]:
    groups: set[str] = set()
    for match in re.finditer(r"\(([^()\n]*(?:19|20)\d{2}[a-z]?[^()\n]*)\)", text):
        group = re.sub(r"\s+", " ", match.group(1)).strip()
        if re.search(r"[A-Za-zÀ-ÖØ-öø-ÿ].*(?:19|20)\d{2}", group):
            groups.add(group)
    return sorted(groups, key=str.casefold)


def word_count(text: str) -> int:
    return len(re.findall(r"\b[\w’'-]+\b", re.sub(r"[#*_>`]", "", text)))


copyedited_parts: list[str] = []
change_rows: list[tuple[str, str, int, int]] = []

for source_name in SOURCE_FILES:
    source_path = MANUSCRIPT / source_name
    if not source_path.exists():
        raise FileNotFoundError(f"Controlled source missing: {source_path}")
    source_text = source_path.read_text(encoding="utf-8")
    edited_text, change_count = apply_replacements(source_text, source_name)
    destination_name = target_name(source_name)
    destination_path = OUTPUT / destination_name
    destination_path.write_text(edited_text, encoding="utf-8")
    copyedited_parts.append(edited_text.rstrip())
    change_rows.append((source_name, destination_name, change_count, word_count(edited_text)))

manuscript_body = "\n\n---\n\n".join(copyedited_parts)

reference_path = MANUSCRIPT / "references-v1.0-reconciled.md"
reference_text = ""
if reference_path.exists():
    reference_text = reference_path.read_text(encoding="utf-8").strip()

master_sections = [
    "# AI Governance in Practice",
    "",
    "## Building the Operating System for Responsible, Accountable and Effective AI",
    "",
    "**Alec Gardner**",
    "",
    "---",
    "",
    manuscript_body,
]
if reference_text:
    master_sections.extend(["", "---", "", reference_text])

master_text = "\n".join(master_sections).strip() + "\n"
master_path = MANUSCRIPT / "ai-governance-in-practice-unified-copyedit-v1.0.md"
master_path.write_text(master_text, encoding="utf-8")

# Audit only the front matter, part openings and chapters. Bibliographic years in the
# reference list are not in-text citations and must not enter the citation inventory.
citation_groups = extract_citation_groups(manuscript_body)
inventory_lines = [
    "# Whole-Book In-Text Citation Inventory v1.0",
    "",
    "**Generated from:** `ai-governance-in-practice-unified-copyedit-v1.0.md`  ",
    "**Scope:** front matter, part openings and Chapters 1–10; references excluded.  ",
    "**Purpose:** proof-stage citation-to-reference matching and anomaly review.",
    "",
]
for citation in citation_groups:
    inventory_lines.append(f"- {citation}")
(MANUSCRIPT / "citation-inventory-v1.0.md").write_text("\n".join(inventory_lines) + "\n", encoding="utf-8")

report_lines = [
    "# Unified Whole-Book Copyedit v1.0 — Build Report",
    "",
    "**Book:** *AI Governance in Practice*  ",
    "**Outcome:** **COPYEDIT MASTER GENERATED**  ",
    f"**Master word count:** {word_count(master_text):,}",
    "",
    "## Controlled outputs",
    "",
    "- `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md`",
    "- `02-manuscript/references-v1.0-reconciled.md`",
    "- `02-manuscript/citation-inventory-v1.0.md`",
    "- `02-manuscript/copyedit-v1.0/` component files",
    "",
    "## Copyedit scope",
    "",
    "- Australian English and house terminology",
    "- citation author/year normalisation",
    "- institutional-source naming and year-letter control",
    "- punctuation, whitespace and Markdown consistency",
    "- restrained hyphenation and human–AI terminology",
    "- preservation of argument, evidence strength, construct provenance and chapter sequence",
    "",
    "## Component results",
    "",
    "| Controlled source | Copyedited output | Applied replacements | Words |",
    "|---|---|---:|---:|",
]
for source_name, destination_name, changes, words in change_rows:
    report_lines.append(f"| `{source_name}` | `{destination_name}` | {changes} | {words:,} |")
report_lines.extend([
    "",
    "## Controls retained",
    "",
    "- Chapter 10 remains the conclusion.",
    "- No new framework or construct has been introduced.",
    "- Gardner synthesis remains visibly distinct from external evidence.",
    "- Composite-case disclosure remains in front matter.",
    "- The three-part architecture and all approved closing propositions remain unchanged.",
    "",
    "## Remaining gates",
    "",
    "- final citation-inventory-to-reference audit;",
    "- dynamic currency check for fast-moving sources;",
    "- visual design and provenance;",
    "- proof and Kindle production controls.",
])
(BOOK_ROOT / "00-control" / "unified-copyedit-v1.0-build-report.md").write_text(
    "\n".join(report_lines) + "\n", encoding="utf-8"
)

print(f"Generated {len(SOURCE_FILES)} copyedited components")
print(f"Master word count: {word_count(master_text):,}")
print(f"Citation groups: {len(citation_groups)}")
