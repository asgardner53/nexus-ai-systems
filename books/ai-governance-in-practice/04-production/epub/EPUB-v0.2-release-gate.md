# AI Governance in Practice: EPUB v0.2 release gate

Status: **CORRECTED REVIEW PROOF; RENEWED KINDLE PREVIEW REQUIRED**. Author-approved publication preparation remains authorised. This record is a production-control note, not publication approval.

## Current correction cycle: 25 November 2026

The 22 November layout feedback and subsequent failed builds supersede the earlier visual acceptance for the corrected proof. Run 21 failed because the heading replacement emitted literal backreferences, deleting all thirteen Part and Chapter headings. EPUBCheck passed that malformed book; its format check alone did not establish content completeness. The previous prose-fidelity check repeated the faulty transformation and could not detect it.

The correction preserves captured heading text, verifies all complete titles independently, reverses the actual heading edits to recover the input, and also reconstructs the complete locked manuscript after removing only approved production additions. The source manuscript remains unchanged.

The v0.2 stylesheet keeps each of the 99 reference entries together where possible, compacts the contents, prevents automatic hyphenation in headings, and avoids redundant opening-page breaks. About the Author becomes its own principal section and contents entry; its approved prose is unchanged. The build and embedded-cover check now use the same approved cover asset.

The release remains a review proof until the exact corrected artifact passes the workflow and a renewed Kindle Previewer check. Automated structural validation and supplemental EPUB rendering do not constitute a human Kindle acceptance.

## Protected sources
- Locked manuscript: `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md`. Do not edit.
- Preserve original EPUB v0.1.
- Alec authorised moving pull request #11 out of draft for review on 21 November 2026; merge remains a separate controlled action.

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

## Author decision — 21 November 2026
- Alec Gardner explicitly replied **Approved** to the request to approve EPUB v0.2 for publication preparation, including moving PR #11 out of draft and proceeding towards KDP submission preparation.
- This approval permits **ready-for-review status and preparation of the KDP release pack only**. It does not authorise merging the PR, uploading to KDP, or making the title live.

## Outstanding release blockers
1. Recheck the exact corrected artifact in Kindle Previewer: Enhanced Typesetting, contents destinations, every Part and Chapter opening, all eight diagrams, reference-entry pagination, author section, phone/e-reader/tablet, portrait/landscape and ordinary/large text. Earlier author acceptance predates these corrections.
2. Complete KDP pre-submission rights/permissions, AI-content classification, metadata, cover, price, territories, DRM and distribution choices.
3. Obtain separate explicit author approval before merging PR #11 or uploading to KDP, and separate approval to publish.

No merge, KDP upload or publication is authorised by this record.
