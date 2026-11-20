#!/usr/bin/env python3
from pathlib import Path
import re, shutil

ROOT=Path(__file__).resolve().parents[3]
src=ROOT/"02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md"
out=ROOT/"04-production/epub/build/manuscript-production.md"
assets=ROOT/"04-production/visual-assets"
imgdir=ROOT/"04-production/epub/build/images"
out.parent.mkdir(parents=True,exist_ok=True); imgdir.mkdir(parents=True,exist_ok=True)
text=src.read_text(encoding="utf-8")

visuals=[
("meaningful-accountability-test-v1.0.png",
 "These five conditions come together in what I call the **Meaningful Accountability Test**.",
 "Meaningful Accountability Test. Accountability becomes meaningful when capability, visibility, authority, intervention capacity and accountability alignment remain connected in practice. The conditions are interdependent rather than additive."),
("delegated-authority-map-v1.0.png",
 "That is the purpose of the **Delegated Authority Map**.",
 "Delegated Authority Map. Organisational authority can be traced from the function AI performs through permission, boundary, control and recourse. Accountability remains with the organisation throughout the delegation chain."),
("evolved-governance-chain-v1.0.png",
 "The fragmented pilot record reveals the purpose of what I call the **Evolved Governance Chain**.",
 "Evolved Governance Chain. Governance connects purpose, authority and boundaries to execution, evidence, evaluation and learning. Learning feeds back into governance adaptation. Assurance is a conclusion drawn from evaluation rather than another link in the chain.")
]
for fname,anchor,alt in visuals:
    if text.count(anchor)!=1: raise SystemExit(f"Visual anchor not unique: {anchor}")
    para=re.search(re.escape(anchor)+r".*?(?=\n\n)",text,re.S)
    if not para: raise SystemExit(f"Anchor paragraph missing: {anchor}")
    insert=para.group(0)+f'\n\n![{alt}](images/{fname}){{.core-visual}}'
    text=text[:para.start()]+insert+text[para.end():]

# Semantic production title block; Pandoc metadata supplies EPUB title page.
text=re.sub(r'^# AI Governance in Practice\n\n## Building the Operating System for Responsible, Accountable and Effective AI\n\n\*\*Alec Gardner\*\*\n\n---\n\n','',text,count=1)
out.write_text(text,encoding="utf-8")
print(out)
