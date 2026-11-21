# AI Governance in Practice — EPUB v0.2 release gate

Status: **VISUAL REVIEW ACCEPTED BY AUTHOR — FORMAL PUBLICATION APPROVAL PENDING**. This record is a production-control note, not publication approval.

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

## Author-reported Kindle review — 21 November 2026
- Alec Gardner confirmed that Kindle Previewer was installed and that he reviewed the EPUB with a **positive outcome**.
- This is an author-reported visual acceptance, not an independently witnessed or screenshot-documented device-by-device QA pass.
- Alec subsequently confirmed **all good, no issues** in response to the specific question whether diagrams, chapter layout and navigation looked good and required no corrections. These three visual-review categories are accepted on author report.
- Individual device-mode, font-size, orientation, theme and accessibility test coverage has not been separately evidenced; do not describe these as independently certified.
- This acknowledgement is **not** permission to merge, upload to KDP or publish.

## Outstanding release blockers
1. If required for a fully evidenced device-coverage claim, record individual device-mode, font-size, orientation, theme and accessibility checks; these were not separately documented.
2. Obtain Alec Gardner's explicit publication release approval before marking the PR ready, merging or uploading to KDP.

No merge, KDP upload or publication is authorised by this record.
