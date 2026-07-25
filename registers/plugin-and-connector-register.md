# Nexus Plugin and Connector Register

## Document control

- **Version:** 1.0
- **Status:** Approved live register
- **Owner:** Alec Gardner
- **Effective date:** 26 July 2026
- **Next review date:** 26 January 2027, or earlier following material change
- **Repository:** `asgardner53/nexus-ai-systems`

## Purpose

This register records the approved purpose, access level, human approval requirements and key risks for plugins, connectors and tools used across Nexus AI Studios.

A connection is not approved merely because it is technically available. It must be used only for an authorised Studio purpose and within the controls recorded here and in the relevant Studio Control Record.

## Status definitions

- **Approved:** authorised for the stated purpose and conditions.
- **Approved with restrictions:** authorised only within specified limits.
- **Proposed:** under consideration and not yet authorised for operational use.
- **Suspended:** temporarily unavailable pending review.
- **Retired:** no longer authorised.

## Register

| Connector, plugin or tool | Approved Studios | Approved purpose | Read access | Write or action access | Human approval requirement | Information classification | Key risks and controls | Status | Review date |
|---|---|---|---|---|---|---|---|---|---|
| GitHub | All governed Studios | Authoritative document control, version history, repository search, controlled updates and publication workflows | Approved repositories | File creation and updates when explicitly authorised | Required before material controlled changes, deletion, publication or doctrine-status changes | Public, internal, confidential only in approved private repositories | Do not store student evidence or restricted client material in public repositories; preserve commit history; use clear paths and status labels | Approved | 26 January 2027 |
| Gmail | Assessment Review, Nexus operations, publishing and authorised correspondence workflows | Search and read relevant correspondence; draft, reply, forward, archive or send authorised emails | Relevant mailbox content | Drafting permitted; sending, forwarding, archiving, deletion and labelling require explicit user instruction | Required before sending, forwarding, deleting or materially changing mailbox records | Internal, confidential, personal | Apply minimum necessary access; verify recipient and context; do not disclose unrelated personal information | Approved with restrictions | 26 January 2027 |
| Google Calendar | Nexus operations and authorised scheduling workflows | Review availability, inspect events and manage authorised meetings | Relevant calendar events | Create, update, respond to or delete events only on explicit instruction | Required for all calendar changes | Internal, personal, confidential | Confirm date, time, timezone, attendees and recurrence; avoid exposing private event details | Approved with restrictions | 26 January 2027 |
| Google Contacts | Nexus operations and authorised correspondence workflows | Resolve contact details for a named person or organisation | Contact records | No write authority | Not required for lookup; confirmation required before using an ambiguous contact for an external action | Personal, confidential | Use only where relevant; avoid unnecessary disclosure of contact information | Approved with restrictions | 26 January 2027 |
| ChatGPT conversation files and file library | Assessment Review, AIRBOK, publishing, masterclass and document workflows | Retrieve, inspect and process user-provided or authorised files | Supplied and authorised files | Materialisation or generated-file creation where required; persistent library changes only on explicit instruction | Required before deleting, renaming, moving or persistently uploading files | Public through restricted, depending on source | Use controlling versions; preserve file citations; do not infer unseen content; minimise sensitive data | Approved with restrictions | 26 January 2027 |
| Web research | AIRBOK, publishing, governance, current regulatory research and authorised assessment verification | Retrieve current public evidence and authoritative sources | Public internet sources | No external-system write authority | Human review required before reliance on high-risk claims or publication | Public | Prefer primary and authoritative sources; verify currency; cite material claims; do not use public research to replace controlled internal sources | Approved | 26 January 2027 |
| Document generation tools | All Studios producing formal documents | Create, edit, render and verify DOCX or document-style outputs | Authorised source content | Create and revise working or final files | Human approval required before final controlled or external release | Public through confidential | Use approved templates; verify layout and content; store authoritative versions in GitHub where applicable | Approved with restrictions | 26 January 2027 |
| PDF tools | Assessment Review, AIRBOK, publishing and governance workflows | Read, extract, compare, redact, convert or create approved PDFs | Authorised PDFs | Create or modify working outputs when requested | Human approval required before final release, redaction reliance or replacement of controlled records | Public through restricted | Render and verify; protect sensitive evidence; preserve originals; use OCR only when necessary | Approved with restrictions | 26 January 2027 |
| Spreadsheet tools | Nexus operations, registers, trackers, budgets and authorised assessment records | Create, review and update structured data and registers | Authorised spreadsheets and data files | Create and modify working spreadsheets | Human approval required before formal reliance, external release or changes to controlled records | Public through confidential | Preserve formulas and data integrity; validate totals; do not expose personal data in public files | Approved with restrictions | 26 January 2027 |
| Presentation tools | Publishing, masterclass, governance and training Studios | Create and update professional presentations | Authorised content and assets | Create and revise presentation files | Human approval required before delivery, publication or client use | Public through confidential | Preserve branding, evidence and status; verify layout; avoid unsupported claims | Approved with restrictions | 26 January 2027 |
| Image generation | Publishing, LinkedIn, ebook and masterclass Studios | Generate approved original visual assets and edit authorised images | User-supplied images where applicable | Create new images or edited variants | Human approval required before publication or use of a person's likeness | Public through confidential | Confirm image rights and identity requirements; do not represent generated images as documentary evidence | Approved with restrictions | 26 January 2027 |
| Automations and scheduled tasks | Research scans, reminders and approved recurring workflows | Run scheduled prompts or condition checks | Sources required by the authorised task | Send scheduled results or notifications; no unsupported external action | Explicit approval required when the automation is created or materially changed | Public through confidential | Define cadence, purpose and stopping conditions; avoid excessive frequency; review continued value | Approved with restrictions | 26 January 2027 |
| Learning management or student management systems | Assessment Review Studio | Access or update authorised assessment records | Conditional and subject to RTO approval | No write access by default | RTO and assessor approval required before connection or any update | Restricted | Must remain separate from public repositories; apply identity, access, privacy, audit and outcome-approval controls | Proposed | Before activation |
| Plagiarism or academic-integrity services | Assessment Review Studio | Support authorised authenticity or integrity review | Conditional | No automated adverse decision authority | RTO approval and assessor review required | Restricted | Tool outputs are indicators, not proof; comply with RTO policy and procedural fairness | Proposed | Before activation |
| Client systems and third-party business applications | Relevant Nexus client Studio only | Purpose to be defined for each engagement | Not approved by default | Not approved by default | Separate approval and register entry required before access | Confidential or restricted | Complete privacy, security, contractual and minimum-access review before activation | Proposed | Before activation |

## General operating controls

1. Use the minimum access necessary for the approved task.
2. Do not use a connector outside the purpose recorded in this register and the relevant Studio Control Record.
3. Explicit human approval is required before external communication, deletion, publication, controlled-record changes or decisions affecting a person.
4. Connector output must not override a controlling source document or professional judgement.
5. Credentials, passwords, authentication codes and secret keys must not be placed in prompts, documents or repositories.
6. Sensitive material must only be stored in an approved secure system or private repository with appropriate access controls.
7. New connectors and material permission changes require review before use.
8. Unused or unnecessary connections must be removed or retired.

## Change triggers

Update this register when:

- a new connector is enabled;
- a connector gains write or action authority;
- a new Studio begins using a connector;
- information classification changes;
- repository visibility changes;
- an incident or privacy concern occurs;
- a connector is suspended or retired;
- provider capabilities or terms materially change.

## Approval statement

The plugins, connectors and tools listed as Approved or Approved with restrictions may be used only within their recorded purpose, access boundaries and human approval requirements.

**AI assists. Humans decide. GitHub records.**
