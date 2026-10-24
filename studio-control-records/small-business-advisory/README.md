# Small Business Advisory Studio - governance baseline

- Document ID: SBA-DOC-001
- Version: 0.2
- Status: Under Review
- Owner: Alec Gardner
- Approval authority: Alec Gardner
- Prepared: 11 October 2026
- Effective date: Not effective - approval pending
- Next review: 18 October 2026, or earlier on material change
- Repository path: studio-control-records/small-business-advisory/README.md
- Independent reviewer: Not appointed
- Professional review: Not commenced

## Scope and authority
This is a public, governance-only proposal for NEX-AI-SBA-001. M3 is the research materiality; Controlled is the proposed governance-workflow classification, awaiting owner acceptance. Restricted client work is a separate proposed workflow and is not activated here.

**HOLD: NOT APPROVED FOR CLIENT USE.** PR #5 remains draft and unmerged. The current instruction authorises branch corrections, a separate settings proposal and internal re-review only. It does not authorise a merge, settings changes, restricted evidence ingestion, professional advice or client release.

## Navigation
- [Studio control record](studio-control-record.md): purpose, permissions, boundaries and 24 control areas.
- [Forensic baseline](forensic-evidence-baseline.md): examined refs and limitations.
- [Review protocol](forensic-review-protocol.md): acquisition, investigation and closure.
- [Register control](register-control.md): field definitions, blank-value rules and version control.
- [Evidence and claim records](baseline-register.json): distinct identifiers and immutable source locators.
- [Legacy identifier mapping](legacy-id-map.csv): original file plus identifier to new identifier.
- [Action register](review-register.csv): original investigation actions and eight governance findings.
- [Approval gates](approval-gates.json): four separate gates, all pending.
- [Remediation report](remediation-report.md): amendments and residual decisions.
- [Validator](validate_baseline.py) and [mutation tests](test_validator.py): local structure checks, not payroll assurance.

## Public repository restriction
Do not commit identifiable client/employee/student data, private correspondence, credentials, signed access links, privileged legal advice, confidential commercial records or unreviewed operational workbooks. A draft branch and its pull request are still public. Approved restricted custody is separate; public records use opaque evidence identifiers, not confidential access paths. This proposal changes neither visibility nor access rights.

## Separate decisions
Repository-settings proposal: https://github.com/asgardner53/nexus-ai-systems/issues/6 . No settings have been changed. A comment by the authoring connection is not an independent human approval. Completing a local validator does not satisfy GitHub CI or professional review.

## Change history
0.1: original four-file proposal retained in Git history at 1925f435fc4a374d8a2f6f6bda338072f606b59d.
0.2: governance remediation on the same review branch; no operational approval.
