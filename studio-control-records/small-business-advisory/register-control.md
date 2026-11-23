# Register suite control and data dictionary

- Document ID: SBA-REG-001
- Version: 0.2
- Status: Under Review
- Owner: Alec Gardner
- Approval authority: Alec Gardner
- Prepared: 11 October 2026
- Effective date: Not effective - approval pending
- Next review: 18 October 2026, or earlier on material change
- Repository path: studio-control-records/small-business-advisory/register-control.md
- Independent reviewer: Not appointed
- Professional review: Not commenced

## Controlled components
Version 0.2 and Under Review apply to baseline-register.json, legacy-id-map.csv, review-register.csv and approval-gates.json. This file supplies their owner, authority, effective date, review date and change history. Each JSON also carries its own metadata. CSV rows are records, not individual approved documents.

## Identifier rules
SBA-EVD-NNN identifies source/evidence items; SBA-CLM-NNN identifies propositions or explicit research questions; SBA-ACT-NNN identifies actions. GOV-SBA-NNN preserves the original review findings. SBA-GATE-A to SBA-GATE-D identifies decision gates. Evidence, claims and actions may relate many-to-many through explicit semicolon-separated fields. An evidence item can be only a lead; linking it does not verify a claim.

Legacy mapping key: original file + original ID at commit 1925f435fc4a374d8a2f6f6bda338072f606b59d. Ten inventory IDs map to ten claims; seven original CSV IDs map to seven actions. The reused old IDs are retained only in this qualified mapping and Git history.

## Evidence fields
id, title, source_type, source_locator, source_ref, git_blob_sha, acquisition_recorded_at_utc, method, quality, status, limitations. Acquisition recording time is when the manifest was assembled after connector reads, not an invented exact download time. Source reads occurred in the same session on 11 October 2026. Date-only observations and unavailable original bytes are explicit. For acquired raw originals later add byte length, SHA-256, custodian and custody transfers in approved restricted storage. Blank hashes mean not computed, never passed integrity verification.

## Claims
Each claim records type, proposition, intended use, evidence_ids, verification status, safe wording, limitation/contrary evidence and required human gate. Verified internal governance facts are not verified payroll/legal conclusions. Regulatory questions remain unresolved; reported results remain reported only. Source quality A applies only to a source directly evidencing its own governance text or metadata, not to laws cited inside it.

## Actions
claim_ids/evidence_ids link to registered items. source_version describes the evidence period; law_locator and current/historic effective dates are empty until primary law is acquired. contrary_evidence_ids identifies contradictory items when registered; limitation describes the present uncertainty. owner and due_date are accountability/planning fields. due_basis explicitly distinguishes proposed checkpoints from statutory deadlines. acceptance states the closure test. closure_evidence is a proposed file/record or an actual test/review reference, never an invented outcome. reviewer, review_decision, decision_date and reviewed_commit are blank or pending until genuinely recorded. reopen_if defines invalidation. A status of Amended - human review pending is not Closed.

## Gate semantics
All four gate decisions start Pending; decision-maker and independent reviewer records are not fabricated. A decision requires exact reviewed commit, scope, evidence, conditions, identity, competence/conflict record and date. Gate D cannot be approved by a documentation merge, script, issue closure or AI review.

## Validation and limits
Run `python validate_baseline.py --repo-root <root> --base-snapshot <original-registers-root>` and `python test_validator.py`. These check scoped data/control integrity. They do not prove legal compliance, content truth, full privacy/security or payroll calculations. Prohibited-content pattern checks are limited heuristics; human privacy review remains mandatory. No CI workflow or repository setting is activated.

## Change history
0.1 held a seven-row CSV whose IDs conflicted with the ten-row Markdown inventory.
0.2 separates namespaces, preserves all 17 original mappings and adds closure fields, source manifest and gate records. Original v0.1 remains in Git; no source history is deleted.
