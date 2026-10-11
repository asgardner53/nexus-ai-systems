# Forensic review protocol — v0.1

- Status: Draft — Under Review
- Owner / approval authority: Alec Gardner
- Date: 11 October 2026
- Next review: 11 November 2026
- Repository path: studio-control-records/small-business-advisory/forensic-review-protocol.md
- Materiality: M3

## Review sequence
1. **Preserve** source artefacts and Git history. Record SHA-256, origin, date, custodian and access classification.
2. **Map actions** from Phase 1 through Phase 4D: claims, decisions, source rules, calculations, tests, approvals, external representations and changes.
3. **Verify** each material claim against current and historical primary authority, including correct effective dates, jurisdictions, classifications and exceptions.
4. **Challenge** interpretations with contrary statutory provisions, tribunal/court cases, regulator enforcement and credible alternative readings.
5. **Reproduce** workbook calculations in an actual supported spreadsheet engine; retain formula traces, inputs, expected/actual outputs and defect records. Python-only desk checks are not Excel-engine integration tests.
6. **Assess boundaries** of employment, legal, payroll/BAS, RTO/ASQA, privacy and consumer-law activities against actual proposed service delivery.
7. **Escalate** unresolved legal and payroll matters to appropriately qualified independent specialists. Preserve written scope, findings, qualifications and conflicts.
8. **Decide**: Alec Gardner records the human approval outcome. A pull request merge is not equivalent to specialist sign-off or client release.

## Finding fields
Stable ID; action; source artefact and commit; law/award clause and effective date; claim type; evidence strength; contradictory evidence; severity; remediation; owner; independent reviewer; decision status; next review trigger.

## Minimum independent review
Employment/industrial relations specialist for award interpretation and Fair Work; qualified payroll specialist for computation and operational testing; registered tax/BAS professional where regulated services arise; Australian lawyer for legal advice, contractual liability and litigation analysis; VET/ASQA specialist only where regulated training/assessment activities are implicated.

## Release rule
Default: **NOT APPROVED FOR CLIENT USE**. Any release requires documented specialist clearance for applicable scopes, closed critical defects, executed spreadsheet-engine tests, approved marketing and service boundaries, and a dated human authorisation.

## Change history
v0.1 — initial governance-only forensic baseline proposed on a review branch; not approved.
