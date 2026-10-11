# Forensic review and closure protocol

- Document ID: SBA-DOC-003
- Version: 0.2
- Status: Under Review
- Owner: Alec Gardner
- Approval authority: Alec Gardner
- Prepared: 11 October 2026
- Effective date: Not effective - approval pending
- Next review: 18 October 2026, or earlier on material change
- Repository path: studio-control-records/small-business-advisory/forensic-review-protocol.md
- Independent reviewer: Not appointed
- Professional review: Not commenced

## Investigation sequence
1. Confirm scope, gate authority and confidentiality before acquiring evidence. Preserve originals and record acquisition/custody; use working copies for analysis.
2. Map each Phase 1-4D assertion and action to a claim ID, supporting evidence IDs, exact version and an action owner. A source leading to a claim is not proof that it is true.
3. For substantive work, search primary authority, academic evidence where relevant, practitioner interpretation, contrary evidence and currency/implementation material. Record why a pass is not relevant; do not claim a search that did not occur.
4. Determine actual jurisdiction, activity, employment category, award coverage and period. Separate law, guidance, proposed reform and commentary. Check commencement, transitional and historical provisions before applying a current rule to past payroll.
5. Reproduce payroll tests in the specified spreadsheet application/version and retain inputs, expected/actual results, formulas, logs and defects. A reference Python model is a different test layer; local governance checks are neither payroll tests nor Excel integration tests.
6. Record contrary evidence, missing data and scope restrictions. Use 'insufficient evidence' rather than inventing a breach or a pass.
7. Refer regulated or consequential questions to the qualified specialist for that scope. Record conflicts, credentials/registration where applicable, exact reviewed version, decision, conditions and date. This AI-assisted work is not independent professional assurance.
8. Close actions only with acceptance evidence and an attributable human decision. Reopen on material rule, source, version, scope, permission or evidence change.

## Separate research streams (not legal determinations)
- Fair Work: Act, regulations, award/agreement coverage, classification, wages, hours, leave and records, with period-specific application.
- ATO: GST/PAYG, STP and super employer-obligation review, distinct from adviser registration. No rate or commencement claim is verified in this governance change.
- TPB: determine tax/BAS service boundaries and registered-partner responsibilities for the actual service, not merely its name.
- Legal: professional-practice boundaries, contracts, privacy, representations, negligence and relevant proceedings; lawyer review of applicability.
- RTO/ASQA: first determine whether regulated training/assessment or an RTO arrangement is involved. The user's RTO reference remains an applicability question, not an assumption that Nexus is an RTO.

## Terminology
Use 'Fair Work Act 2009' for the Act, 'FWO' for the Fair Work Ombudsman and 'FWC' for the Fair Work Commission. Do not use the ambiguous shorthand 'FWA' as a source identifier. ATO and RTO are different terms. RTO means Registered Training Organisation for this provisional scope; confirm applicability before a substantive finding.

## Case-law record schema
For every later case, capture case ID, parties, court/tribunal, neutral citation, proceeding/judgment dates, primary judgment/orders URL, precise paragraphs, issue, material facts, holding, remedy, appeal/stay/later-treatment status and date checked, limitation/contrary authority and claim IDs supported. Distinguish allegations, regulator announcements, settlements, orders and adjudicated findings. No case was substantively reviewed in this remediation.

## Action closure
Action register fields implement evidence/claim links, source version, current/historical effective dates, contradictory evidence, risk, owner, proposed checkpoint, acceptance criteria, closure evidence, reviewer decision/date/commit and reopening trigger. Empty rule-date or decision fields mean unresolved/not decided, never approved or not applicable. Proposed checkpoints are internal planning dates, not legal deadlines.

## Approval records
Gate A: governance-only acceptance and separate merge instruction.
Gate B: specific restricted custody and acquisition permission.
Gate C: substantive independent specialist assurance for defined scope/version.
Gate D: defined client-use release, only after applicable earlier gates and human acceptance.
See approval-gates.json and studio-control-record.md. No gate is approved by this PR or a passing script.

## Change history
0.2: distinct tax/adviser streams, terminology, case-law schema and action closure rules added. No substantive investigation is represented as complete.
