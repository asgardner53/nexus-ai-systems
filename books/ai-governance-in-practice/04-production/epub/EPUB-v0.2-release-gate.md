# AI Governance in Practice — EPUB v0.2 release gate

Status: **HOLD — AUTOMATED BUILD VALIDATED; KINDLE PREVIEWER PENDING**. This record is a production-control note, not publication approval.

## Protected sources
- Locked manuscript: `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md`. Do not edit.
- Preserve original EPUB v0.1.
- Pull request #11 must remain draft until author approval.

## Checks completed
- Original v0.2 CI build (run 44857708124): EPUBCheck 5.2.1 passed with zero errors/warnings; eight images and nonempty alt text checked.
- A subsequent locally corrected review proof replaced five images with the approved artwork masters. Its ZIP integrity, XML/XHTML structure and eight embedded image resources were checked. The corrected proof is **not** the GitHub Actions artifact and its EPUBCheck result must not be inferred from the earlier build.

## Automated validation completed on GitHub
- Workflow run [44860958523](https://github.com/asgardner53/nexus-ai-systems/actions/runs/44860958523), commit `b9a9fc3a6749f8b466076df886241111e88ca062`, completed successfully.
- All five SVG master fingerprint checks passed; EPUB v0.2 generated successfully.
- EPUBCheck 5.2.1: **0 fatals, 0 errors, 0 warnings, 0 infos**.
- ZIP integrity, eight embedded diagrams, eight nonempty alt descriptions, navigation and prose-fidelity checks passed.
- Validated GitHub Actions artifact ID: `14689414457`. This artifact supersedes the locally patched review proof for further testing.

## Outstanding release blockers
1. Complete a final visual comparison of the GitHub-rendered diagrams against the approved masters at Kindle reading sizes; SVG fingerprint equivalence alone does not guarantee identical rasterisation.
2. Complete **actual Amazon Kindle Previewer** Enhanced Typesetting conversion and phone, e-reader, tablet, portrait/landscape, large-font, dark/light and grayscale visual QA. Inspect all eight figures, chapter openings, table of contents, quotations, references and links. Record screenshots/findings and remediate blockers.
3. Obtain Alec Gardner's explicit author approval before marking the PR ready, merging or uploading to KDP.

No merge, KDP upload or publication is authorised by this record.
