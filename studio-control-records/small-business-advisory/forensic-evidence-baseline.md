# Forensic evidence baseline — v0.1

- Status: Draft / Unverified for regulatory conclusions
- Owner: Alec Gardner
- Approval authority: Alec Gardner
- Date: 11 October 2026
- Next review: 11 November 2026 or earlier on material change
- Repository path: studio-control-records/small-business-advisory/forensic-evidence-baseline.md
- Materiality: M3; Australian jurisdiction

## Evidence boundaries
GitHub repository `asgardner53/nexus-ai-systems` is selected as the authoritative **governance** location. Presence of actual Small Business Advisory Studio operational files or previous RC1–RC4 workbook commits has NOT been established. A chat summary is a discovery lead, not independently verified historical evidence.

## Baseline inventory
| ID | Item or claim | Provenance / locator | Evidence status | Required next verification |
|---|---|---|---|---|
| SBA-001 | GitHub repository is public and restricts sensitive data | REPOSITORY-GOVERNANCE.md | Verified from repository text | Confirm ongoing visibility and access controls |
| SBA-002 | Nexus GitHub document control requires status, version, approval and history | governance/github-document-control-standard.md | Verified from repository text | Check current register and any superseding rule |
| SBA-003 | Retail Compliance Module RC1–RC4 reportedly developed | Prior project conversation; operational files not in this repository | Unverified in GitHub | Securely inventory original workbooks, hashes, dates and custody |
| SBA-004 | RC4 reportedly contains 19 sheets and 15/15 Python reference tests passed | Prior project report; not an Excel-engine validation | Unverified independently | Run spreadsheet engine tests and inspect test artifacts |
| SBA-005 | Two formula defects reportedly corrected | Prior project report | Unverified independently | Reproduce defects and compare revisions |
| SBA-006 | Independent specialist review pack reportedly prepared | Prior project report | Unverified in GitHub | Locate controlled original and specialist engagement scope |
| SBA-007 | Fair Work / award applicability and rate interpretation | Fair Work Act 2009; General Retail Industry Award 2020 (MA000004), official sources | Not yet assessed clause-by-clause | Establish time-specific rule matrix and source snapshots |
| SBA-008 | RTO/ASQA regulatory applicability | 2025 Standards for RTOs and actual service scope | Unresolved | Determine whether any regulated training or assessment is provided |
| SBA-009 | Tax/BAS and legal professional service boundaries | TPB guidance; applicable state and federal legislation | Unresolved | Qualified practitioner/legal review |
| SBA-010 | Relevant enforcement and litigation precedents | Official courts, FWC, FWO, ASQA and other regulator decisions | Not yet searched systematically | Search, validate jurisdiction, facts, holdings and dates |

## Explicit limitations
No court judgment, award clause, rate, or specialist approval is treated as established merely because a working document mentions it. The Fair Work Ombudsman (FWO) and Fair Work Commission (FWC) have distinct functions. Any reference to 'FWA' must be disambiguated before legal conclusions.

## Preservation and evidence integrity
Do not rewrite or delete source evidence. Capture original filename, source system, custodian, acquisition date, SHA-256, version, access restrictions, and review chain before analysis. Preserve separate working copies and record each correction.

## Human gate
No client deployment, definitive legal advice, assurance certification or representation of compliance until qualified independent reviewers sign off and Alec Gardner authorises release.
