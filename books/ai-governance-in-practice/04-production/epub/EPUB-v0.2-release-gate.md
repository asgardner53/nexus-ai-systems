# AI Governance in Practice — EPUB v0.2 release gate

Status: **HOLD — REVIEW PROOF ONLY**. This record is a production-control note, not publication approval.

## Protected sources
- Locked manuscript: `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md`. Do not edit.
- Preserve original EPUB v0.1.
- Pull request #11 must remain draft until author approval.

## Checks completed
- Original v0.2 CI build (run 44857708124): EPUBCheck 5.2.1 passed with zero errors/warnings; eight images and nonempty alt text checked.
- A subsequent locally corrected review proof replaced five images with the approved artwork masters. Its ZIP integrity, XML/XHTML structure and eight embedded image resources were checked. The corrected proof is **not** the GitHub Actions artifact and its EPUBCheck result must not be inferred from the earlier build.

## Outstanding release blockers
1. Incorporate the exact approved five visual masters into the reproducible repository build (not only a post-build EPUB patch). Verify asset provenance/checksums and review generated PNGs against masters.
2. Rebuild on this branch; rerun EPUBCheck and structural, navigation, image/alt, metadata and source-fidelity checks on the newly generated artifact.
3. Complete **actual Amazon Kindle Previewer** Enhanced Typesetting conversion and phone, e-reader, tablet, portrait/landscape, large-font, dark/light and grayscale visual QA. Inspect all eight figures, chapter openings, table of contents, quotations, references and links. Record screenshots/findings and remediate blockers.
4. Obtain Alec Gardner's explicit author approval before marking the PR ready, merging or uploading to KDP.

No merge, KDP upload or publication is authorised by this record.
