#!/usr/bin/env python3
"""Prepare controlled EPUB v0.2 from the locked manuscript; never edit the source."""
from pathlib import Path
import hashlib, html, re, runpy, subprocess

ROOT=Path(__file__).resolve().parents[3]
EPUB=ROOT/"04-production/epub"
SRC=ROOT/"02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md"
BUILD=EPUB/"build"
IMAGES=BUILD/"images"
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
def svg_for(title,steps,caption):
    parts=['<svg xmlns="http://www.w3.org/2000/svg" width="960" height="750" viewBox="0 0 960 750" role="img" aria-labelledby="title desc">',f'<title id="title">{html.escape(title)}</title>',f'<desc id="desc">{html.escape("; then ".join(steps)+". "+caption)}</desc>','<rect width="960" height="750" fill="#ffffff"/>',f'<text x="480" y="62" text-anchor="middle" fill="#173c59" font-family="Arial,sans-serif" font-size="38" font-weight="700">{html.escape(title)}</text>']
    for i,step in enumerate(steps):
        y=115+i*139
        parts += [f'<rect x="130" y="{y}" width="700" height="104" rx="17" fill="#eef6f7" stroke="#236779" stroke-width="3"/>',f'<text x="480" y="{y+62}" text-anchor="middle" fill="#173c59" font-family="Arial,sans-serif" font-size="31" font-weight="600">{html.escape(step)}</text>']
        if i<3:
            parts += [f'<line x1="480" y1="{y+105}" x2="480" y2="{y+131}" stroke="#236779" stroke-width="5"/>',f'<path d="M470 {y+123} L480 {y+134} L490 {y+123}" fill="none" stroke="#236779" stroke-width="4"/>']
    parts.append("</svg>")
    return "\n".join(parts)+"\n"

for basename,title,steps,caption,anchor in visuals:
    assert text.count(anchor)==1, "Non-unique anchor: "+title
    end=text.find("\n\n",text.index(anchor))
    assert end>0, "Missing paragraph boundary: "+title
    alt=title+". "+"; then ".join(steps)+". "+caption
    fig=f"\n\n![{alt}](images/{basename}.png){{.core-visual}}"
    text=text[:end]+fig+text[end:]
    svg=IMAGES/(basename+".svg")
    svg.write_text(svg_for(title,steps,caption),encoding="utf-8")
    subprocess.run(["rsvg-convert","-w","1200",str(svg),"-o",str(IMAGES/(basename+".png"))],check=True)
text,removed=re.subn(r"(?m)^---[ \t]*\n(?:\n)?","",text)
assert removed>=10 and text.count("](images/")==8
# Verifiable prose fidelity: only inserted images and removed horizontal rules.
recovered=text
for basename,*rest in visuals:
    recovered=re.sub(r"\n\n!\[[^\n]*\]\(images/"+re.escape(basename)+r"\.png\)\{\.core-visual\}","",recovered,count=1)
expected=re.sub(r"(?m)^---[ \t]*\n(?:\n)?","",prepared)
assert recovered==expected, "Unexpected change to existing manuscript content"
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
    "MANUSCRIPT_FIDELITY=PASS\n",encoding="utf-8")
print("Prepared EPUB v0.2: eight visuals; removed",removed,"decorative separators; prose fidelity PASS")
