# Remediation 03 — Status and State Taxonomy

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Whole-Standard Forensic Integrity Review v0.1
- **Finding addressed:** 8
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This taxonomy separates status vocabularies so that words such as **Approved**, **Passed**, **Blocked**, **Released**, **Verified** and **Superseded** cannot be transferred casually between different objects.

The governing rule is:

> **Every status belongs to a defined object class. A status valid for one object must not be used as authority for another.**

## 2. Controlled status namespaces

The Standard will use separate status namespaces for at least:

1. Studio Build Status;
2. Build Gate State;
3. Operational Gate State;
4. Work-Item State;
5. Source Status;
6. Evidence State;
7. Controlled Document Status;
8. Output Status;
9. Release Status;
10. Incident/Exception Status; and
11. Lifecycle Status.

## 3. Studio Build Status

Studio Build Status describes the state of Studio construction and approval under NEX-GOV-003.

Permitted baseline values:

- **Concept** — Studio idea exists but BG-01 has not yet passed.
- **In Build** — Studio has passed BG-01 and construction is underway.
- **Under Test** — architecture is substantially built and operational testing is underway.
- **Under Final Review** — Build Record and final coherence review are underway.
- **Conditionally Approved** — limited approval exists subject to explicit conditions.
- **Approved** — BG-18 has passed and final human approval is effective.
- **Suspended** — operation is temporarily halted under Brick 17.
- **Retired** — Studio is no longer authorised for operation.

Only BG-18 may confer the Build Status **Approved**.

## 4. Build Gate State

Build Gate State applies only to BG-01 to BG-18.

Baseline values:

- **Not Assessed**
- **Pass**
- **Conditional Pass**
- **Fail**
- **Blocked**
- **Escalate**
- **Waived by Authority** — only where the Build Gate is formally waivable
- **Reopened** — previously passed gate returned to active assessment because assumptions or conditions changed

A Build Gate Pass does not mean the Studio itself is Approved.

## 5. Operational Gate State

Operational Gate State applies only to Studio-specific OG identifiers.

Baseline values:

- **Not Assessed**
- **Pass**
- **Conditional Pass**
- **Fail**
- **Blocked**
- **Escalate**
- **Waived by Authority** — only where the Operational Gate permits waiver
- **Reopened**

An Operational Gate Pass applies only to the specific work item or defined operational context being assessed.

## 6. Work-Item State

Work-Item State describes where a case, task, submission, article, report or other item sits within an operational Studio workflow.

Typical values may include:

- **New**
- **In Intake**
- **In Scope Review**
- **In Research**
- **Evidence Incomplete**
- **Under Analysis**
- **Drafting**
- **Under Gate Review**
- **Returned for Correction**
- **Blocked**
- **Escalated**
- **Awaiting Human Approval**
- **Approved for Release**
- **Released**
- **Withdrawn**
- **Superseded**
- **Closed**

Each Studio may use a subset or extension, but must define the state machine explicitly.

## 7. Source Status

Source Status describes authority, currency or usability of a source.

Baseline values:

- **Controlling**
- **Authoritative**
- **Approved**
- **Supporting**
- **Provisional**
- **Superseded**
- **Disputed**
- **Excluded**

Where needed, source status may be accompanied by separate currency metadata such as Current, Expired or Revalidation Required rather than overloading the status field.

## 8. Evidence State

Evidence State describes the condition of a specific evidence item.

Baseline values:

- **Verified**
- **Unverified**
- **Corroborated**
- **Contradicted**
- **Incomplete**
- **Superseded**
- **Disputed**
- **Excluded**
- **Withdrawn**

Evidence State must not be used as a proxy for Source Status. A highly authoritative source may still contain evidence that is incomplete for the specific claim being tested.

## 9. Controlled Document Status

Controlled Document Status applies to standards, procedures, records, templates and controlled artefacts.

Baseline values:

- **Draft**
- **Under Review**
- **Approved**
- **Approved Live Register**
- **Superseded**
- **Withdrawn**
- **Retired**
- **Archived**

Document status does not imply Studio approval. An Approved template can exist inside a Studio that is still In Build.

## 10. Output Status

Output Status describes maturity of an artefact produced by a Studio.

Baseline values:

- **Generated**
- **Complete for Review**
- **Gate-Passed**
- **Ready for Approval**
- **Approved for Release**
- **Released**
- **Superseded**
- **Withdrawn**

Where the output is incomplete because evidence is missing, an additional controlled state such as **Evidence Incomplete** may be used if defined by the Studio.

## 11. Release Status

Release Status records the external or operational disposition of an approved output.

Baseline values:

- **Not Released**
- **Approved for Release**
- **Released**
- **Conditionally Released**
- **Withdrawn**
- **Superseded**
- **Expired**

Release Status must be linked to the exact output version.

## 12. Incident and Exception Status

### Incident Status

Possible baseline values:

- **Open**
- **Contained**
- **Under Investigation**
- **Corrective Action in Progress**
- **Closed**

### Exception/Waiver Status

Possible baseline values:

- **Proposed**
- **Under Review**
- **Approved**
- **Active**
- **Expired**
- **Revoked**
- **Closed**

An Approved exception does not mean the affected gate has Passed; the gate record must identify the exception state separately.

## 13. Lifecycle Status

Lifecycle Status applies to the operational standing of an approved Studio.

Baseline values:

- **Active**
- **Restricted Operation**
- **Suspended**
- **Under Reactivation Review**
- **Retired**
- **Archived**

Build Status and Lifecycle Status may coexist. For example, an approved Studio may have Build Status **Approved** and Lifecycle Status **Suspended**.

## 14. Cross-status prohibition rule

The following substitutions are prohibited unless an explicit rule says otherwise:

- a gate Pass must not be called Studio Approval;
- an output being Generated must not be called Complete;
- an output being Complete for Review must not be called Released;
- a source being Authoritative must not imply the evidence is Verified;
- evidence being Verified must not imply a conclusion is Approved;
- a document being Approved must not imply the Studio is Approved;
- a work item being Closed must not imply the output was Released;
- a human approval of one work item must not imply standing Studio authority.

## 15. Qualified-language rule

Where ambiguity is possible, status references must include the object class.

Prefer:

- **Build Gate BG-07: Pass**
- **Output Status: Approved for Release**
- **Evidence State: Contradicted**
- **Studio Build Status: Under Test**

Avoid unqualified statements such as:

- "It's approved"
- "It passed"
- "It's final"
- "It's done"

unless the object and meaning are unambiguous in the controlled context.

## 16. State-transition rule

Every Studio must define which transitions are valid for its operational states.

For example, an output may move:

**Generated → Complete for Review → Gate-Passed → Approved for Release → Released**

but must not jump from **Generated → Released** unless the Studio has an explicitly approved automated route that still satisfies all intervening controls.

## 17. Reversion rule

Statuses must support controlled regression where conditions change.

Examples:

- Build Gate Pass → Reopened;
- Released → Withdrawn;
- Source Approved → Superseded;
- Evidence Verified → Disputed;
- Studio Lifecycle Active → Suspended.

Historical status must remain recoverable.

## 18. System-of-record rule

Each status namespace must identify its authoritative system or register.

Examples:

- Studio Build Status → Studio Register / Build Record;
- Build Gate State → Build Gate Register;
- Operational Gate State → case/work-item gate record;
- Evidence State → Evidence Register;
- Source Status → Source Register;
- Document Status → Controlled Document Register;
- Release Status → Release Register.

Chat text may communicate a status but must not silently become the authoritative status record.

## 19. Build integration

The final Standard must incorporate this taxonomy into:

- Brick 5 — output statuses;
- Brick 6 — Build and Operational Gate states;
- Brick 7 — evidence states;
- Brick 9 — work-item states;
- Brick 11 — document/register statuses;
- Brick 15 — release statuses;
- Brick 17 — lifecycle statuses; and
- Brick 18 — Studio Build Status.

## 20. Required artefact

Every Studio Build Record must include a **Status and State Profile** identifying:

- namespaces used;
- permitted values;
- definitions;
- authoritative register/system;
- valid transitions;
- reversion conditions; and
- any Studio-specific extensions.

## 21. Remediation acceptance criteria

Forensic Finding 8 may be marked remediated when:

- each major status object has a distinct namespace;
- final brick documents use the namespace consistently;
- cross-status substitutions are prohibited;
- authoritative systems of record are identified;
- output, gate, evidence, source, document, lifecycle and Studio statuses are distinguishable; and
- the Build Pack includes a Status and State Profile.

## Remediation status

**CONTROL DESIGN COMPLETE — IMPLEMENTATION INTO MASTER STANDARD PENDING FINAL ASSEMBLY**

## Core rule

> **A status has authority only over the object it was designed to describe.**
