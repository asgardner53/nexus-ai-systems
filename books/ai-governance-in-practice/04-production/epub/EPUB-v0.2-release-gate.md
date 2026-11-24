# AI Governance in Practice: EPUB v0.2 release gate

Status: **RC1 AUTHOR APPROVED; TECHNICALLY VALIDATED; KINDLE VISUAL VERIFICATION NOT SEPARATELY EVIDENCED**. This record identifies the approved release candidate for publication preparation.

## Launch settings approval 25 November 2026

Alec replied **yes** to the specific six-setting confirmation. Approved for submission preparation: A$9.99 including GST; the 70% royalty option for eligible sales; Amazon.com.au as the primary marketplace; no initial KDP Select enrolment; no DRM; and no Kindle ISBN purchase.

The [launch settings approval record](../../05-release/launch-settings-approval-2026-11-25.md) preserves the scope. Rights and territories, AI-origin declarations, retailer listing approval, and specific RC1 Kindle verification remain open. No upload, merge or publication authority is inferred.

## Author approval: 25 November 2026

Alec Gardner replied **“approved”** after receiving the corrected Run 22 EPUB and its QA report. This is recorded as author acceptance of the supplied file and its designation as **release candidate RC1 for publication preparation**.

RC1 is the unchanged Run 22 EPUB, delivered as `AI_Governance_in_Practice_v0.2_RC1.epub`, SHA-256 `1080220ab601b002f9b389eba3fcc61b9b18b9b1a827234bb1ade2a72553668f`. The existing technical validation remains applicable; this approval does not change the EPUB bytes.

**Verification status:** Technical validation passed and author approval was received. Kindle Previewer conversion, reference pagination and device-specific visual coverage have not been independently verified or separately documented for this artifact. The approval is not recorded as a report that the full Kindle visual QA pass was performed.

Merge, KDP upload and publication remain separate actions.

## Current correction cycle: 25 November 2026

The 22 November layout feedback and subsequent failed builds supersede the earlier visual acceptance for the corrected proof. Run 21 failed because the heading replacement emitted literal backreferences, deleting all thirteen Part and Chapter headings. EPUBCheck passed that malformed book; its format check alone did not establish content completeness. The previous prose-fidelity check repeated the faulty transformation and could not detect it.

The correction preserves captured heading text, verifies all complete titles independently, reverses the actual heading edits to recover the input, and also reconstructs the complete locked manuscript after removing only approved production additions. The source manuscript remains unchanged.

The v0.2 stylesheet keeps each of the 99 reference entries together where possible, compacts the contents, prevents automatic hyphenation in headings, and avoids redundant opening-page breaks. About the Author becomes its own principal section and contents entry; its approved prose is unchanged. The build and embedded-cover check now use the same approved cover asset.

The corrected artifact passed [GitHub Run 22](https://github.com/asgardner53/nexus-ai-systems/actions/runs/45491621772), built from commit `4245c3160b73b72df0a8c0eacafc95dee1dcdf0d`. EPUBCheck 5.4.0 reported 0 fatals, 0 errors and 0 warnings. All 17 complete section headings and linked contents entries, eight diagrams, 99 separate references and the approved embedded cover passed independent validation. All eight regression tests passed.

Artifact ID: `14965518946`. The downloaded EPUB is 2,983,895 bytes, SHA-256 `1080220ab601b002f9b389eba3fcc61b9b18b9b1a827234bb1ade2a72553668f`. The artifact ZIP checksum and EPUB checksum match the workflow records. Comparing this exact downloaded EPUB against the author-supplied Run 15 proof confirmed identical text in 538 paragraphs, identical 93 paragraph links, and identical 99 reference entries.

At delivery, renewed Kindle Previewer review remained open. Alec subsequently approved the supplied file as recorded above. Kindle Previewer was unavailable in the review workspace. Supplemental MuPDF rendering showed complete headings and no clipped text, but it does not reliably reproduce Kindle pagination or figure positioning. This record distinguishes the received author approval from the unverified Kindle test coverage.

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
1. Record Kindle Previewer execution and coverage for RC1 before claiming the full Kindle QA gate is complete: Enhanced Typesetting, reference pagination, contents, section openings, all eight diagrams and device/font/orientation views. Author acceptance was received on 25 November; specific Previewer results were not supplied.
2. Complete rights/permissions, AI-content classification, retailer listing, territorial and remaining cover/accessibility checks. The six launch settings are approved as recorded above; edition presentation and launch timing remain proposals.
3. Obtain separate explicit author approval before merging PR #11 or uploading to KDP, and separate approval to publish.

No merge, KDP upload or publication is authorised by this record.
