#!/usr/bin/env python3
"""Prepare controlled EPUB v0.2 from the locked manuscript; never edit the source."""
from pathlib import Path
import hashlib, html, re, runpy, subprocess

ROOT=Path(__file__).resolve().parents[3]
EPUB=ROOT/"04-production/epub"
SRC=ROOT/"02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md"
BUILD=EPUB/"build"
IMAGES=BUILD/"images"
COVER=EPUB/"book_cover_design_dark_navy_electric_blue_backgr.png"
APPROVED_COVER_SHA256="f93aedbb1c01f214ed4ddc0928a177966449a6bdd92b71e0d7ae04233df3e3d3"
assert COVER.is_file(), f"Missing approved production cover: {COVER}"
assert hashlib.sha256(COVER.read_bytes()).hexdigest()==APPROVED_COVER_SHA256, "Approved cover checksum mismatch"
assert SRC.is_file() and SRC.read_text(encoding="utf-8").startswith("# AI Governance in Practice\n")
runpy.run_path(str(EPUB/"scripts/prepare_epub.py"),run_name="__main__")
prepared=(BUILD/"manuscript-production.md").read_text(encoding="utf-8")
assert prepared.count("](images/")==3, "Expected three original diagrams"
text=prepared
visuals=[
 ("V04-policy-to-control-gap","Policy-to-Control Gap",["Declared policy","Defined authority","Operating controls","Observable evidence"],"A policy is not an operating control until authority, execution and evidence connect.","The gap does not necessarily imply bad faith."),
 ("V05-human-decision-responsibility","Human Decision Responsibility",["AI recommendation","Human examination","Authorised decision","Recorded rationale"],"Human involvement must include informed judgement and the ability to intervene.","That does not mean the decision is wrong. It does mean that a human sign-off is not, by itself, evidence of meaningful human control."),
 ("V06-governance-in-the-workflow","Governance in the Workflow",["Work request","Authority check","Execution and escalation","Monitoring and record"],"Governance is embedded in the workflow, not detached from it.","Workflow and configuration can allocate decision rights without announcing that they are doing so."),
 ("V07-capability-to-control","Capability-to-Control Relationship",["Understand the task","Challenge the output","Intervene effectively","Organisational support"],"Training alone does not establish operational capability.","Meaningful capability is therefore partly domain capability."),
 ("V08-agent-action-control-points","Agent Action Control Points",["Identity and access","Permitted action scope","Approval or stop gate","Execution and review"],"AI-initiated actions require boundaries, evidence and recourse.","Yet nobody had made one conscious decision to authorise the complete consequence.")
]
# Locked SHA-256 fingerprints of the five author-approved SVG masters.
# Abort production if any generated diagram drifts from its approved master.
APPROVED_SVG_SHA256={
    "V04-policy-to-control-gap":"69d80a08242ae793a721fcd911b4b4a195d973abd2397a795a7229957f643695",
    "V05-human-decision-responsibility":"b2043f863b92afcf5cac64dbbcd9bc793d033a3344a9be70075b148fe6febdc6",
    "V06-governance-in-the-workflow":"1ebfc3c112e03b28528406df77855c626e4c0da3d4c68448e353c9fb07198bbe",
    "V07-capability-to-control":"69a861701a3d51c4d7b68b0ddd56102275b40570f6db276577fe9fd4d9dffe30",
    "V08-agent-action-control-points":"af94fb781a9af4147bd42114643db8d242d6c76e5a10a901cceca6a3d44fdf86",
}
def svg_for(title,steps,caption):
    parts=['<svg xmlns="http://www.w3.org/2000/svg" width="960" height="750" viewBox="0 0 960 750" role="img" aria-labelledby="title desc">',f'<title id="title">{html.escape(title)}</title>',f'<desc id="desc">{html.escape("; then ".join(steps)+". "+caption)}</desc>','<rect width="960" height="750" fill="#ffffff"/>',f'<text x="480" y="62" text-anchor="middle" fill="#173c59" font-family="Arial,sans-serif" font-size="38" font-weight="700">{html.escape(title)}</text>']
    for i,step in enumerate(steps):
        y=115+i*139
        parts += [f'<rect x="130" y="{y}" width="700" height="104" rx="17" fill="#eef6f7" stroke="#236779" stroke-width="3"/>',f'<text x="480" y="{y+62}" text-anchor="middle" fill="#173c59" font-family="Arial,sans-serif" font-size="31" font-weight="600">{html.escape(step)}</text>']
        if i<3:
            parts += [f'<line x1="480" y1="{y+105}" x2="480" y2="{y+131}" stroke="#236779" stroke-width="5"/>',f'<path d="M470 {y+123} L480 {y+134} L490 {y+123}" fill="none" stroke="#236779" stroke-width="4"/>']
    parts.append("</svg>")
    return "\n".join(parts)

for basename,title,steps,caption,anchor in visuals:
    assert text.count(anchor)==1, "Non-unique anchor: "+title
    end=text.find("\n\n",text.index(anchor))
    assert end>0, "Missing paragraph boundary: "+title
    alt=title+". "+"; then ".join(steps)+". "+caption
    fig=f"\n\n![{alt}](images/{basename}.png){{.core-visual}}"
    text=text[:end]+fig+text[end:]
    svg=IMAGES/(basename+".svg")
    svg.write_text(svg_for(title,steps,caption),encoding="utf-8")
    actual=hashlib.sha256(svg.read_bytes()).hexdigest()
    assert actual==APPROVED_SVG_SHA256[basename], f"Approved artwork drift: {basename}: {actual}"
    subprocess.run(["rsvg-convert","-w","1200",str(svg),"-o",str(IMAGES/(basename+".png"))],check=True)
text,removed=re.subn(r"(?m)^---[ \t]*\n(?:\n)?","",text)
assert removed>=10 and text.count("](images/")==8
# Verifiable prose fidelity: only inserted images and removed horizontal rules.
recovered=text
for basename,*rest in visuals:
    recovered=re.sub(r"\n\n!\[[^\n]*\]\(images/"+re.escape(basename)+r"\.png\)\{\.core-visual\}","",recovered,count=1)
expected=re.sub(r"(?m)^---[ \t]*\n(?:\n)?","",prepared)
assert recovered==expected, "Unexpected change to existing manuscript content"
# Add only author-approved end matter after manuscript-fidelity verification.
bio_source=EPUB/"about-the-author-approved-v1.0.md"
bio_record=bio_source.read_text(encoding="utf-8")
bio_start=bio_record.index("## About the Author\n")
bio_end=bio_record.index("\n## Approval and production note",bio_start)
bio=bio_record[bio_start:bio_end].strip()
assert bio.startswith("## About the Author\n") and "**Nexus BMG**" in bio
assert text.count("## About the Author")==0, "About the Author already present"
text=text.rstrip()+"\n\n"+bio+"\n"
assert text.endswith(bio+"\n") and text.count("## About the Author")==1
(BUILD/"manuscript-production.md").write_text(text,encoding="utf-8")
meta=(EPUB/"metadata.yaml").read_text(encoding="utf-8")
assert "v0.1" in meta
(BUILD/"metadata-v0.2.yaml").write_text(meta.replace("v0.1","v0.2"),encoding="utf-8")
css=(EPUB/"epub.css").read_text(encoding="utf-8")
css=re.sub(r"(?m)^hr\s*\{[^\n]*\}\s*\n?","",css)
css=css.replace("color: #082d4a;","color: inherit;")
(BUILD/"epub-v0.2.css").write_text(css+"\n/* v0.2 adaptive typography, no decorative rules */\n",encoding="utf-8")
(BUILD/"v0.2-manifest.txt").write_text(
    "SOURCE_GIT_BLOB_SHA=b06696d4e77f7bb4b5c3520fcc32e326936880d3\n"+
    "SOURCE_SHA256="+hashlib.sha256(SRC.read_bytes()).hexdigest()+"\n"+
    f"NEW_VISUALS=5\nTOTAL_VISUALS=8\nSEPARATORS_REMOVED={removed}\n"+
    "MANUSCRIPT_FIDELITY=PASS\nABOUT_AUTHOR=APPROVED_V1.0\n"+
    "COVER_SHA256="+APPROVED_COVER_SHA256+"\nCOVER_STATUS=APPROVED_V1.0\n",encoding="utf-8")
print("Prepared EPUB v0.2: eight visuals; removed",removed,"decorative separators; prose fidelity PASS")
