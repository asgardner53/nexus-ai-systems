# Brick 11 — Registers and Control Records

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 11
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 11.1 Governing principle

A Studio must preserve a reliable institutional record of what was decided, why it was decided, what evidence supported it, what version was current, and who held authority.

Chat history, model memory and informal notes may assist work, but they are not controlled records.

The governing rule is:

> **If a decision, control, approval or evidence state matters later, it must exist in a controlled record rather than only in conversation.**

## 11.2 Mandatory build instruction

Every Studio must define its **Register and Control Record Architecture** before operational release.

The architecture must identify:

1. which registers are mandatory;
2. which registers are conditional on risk or function;
3. the purpose of each register;
4. the fields each record must contain;
5. record identifiers;
6. ownership and update authority;
7. status values;
8. version-control rules;
9. links between related records;
10. retention expectations;
11. correction and amendment rules;
12. supersession rules;
13. access and confidentiality requirements;
14. archival or retirement rules;
15. auditability requirements; and
16. the authoritative system of record.

## 11.3 Minimum register architecture

Every material Studio should consider at least the following register types:

| Register | Purpose |
|---|---|
| **Studio Register** | Identifies Studios, owners, status, classification and authoritative location |
| **Controlled Document Register** | Identifies authoritative standards, instructions, templates and versions |
| **Source Register** | Records controlling, authoritative and supporting sources |
| **Evidence Register** | Records evidence identity, provenance, status and linkage |
| **Gate Decision Register** | Records gate outcomes, evidence reviewed and conditions |
| **Decision and Change Register** | Records material design, authority and governance decisions |
| **Incident Register** | Records material failures, breaches or control incidents |
| **Connector and Permission Register** | Records approved systems, purpose, permissions and review status |
| **Risk or Exception Register** | Records unresolved risks, approved exceptions or residual conditions |
| **Release Register** | Records approved outputs, release authority, version and destination where relevant |

Not every Studio requires every register. The Studio must justify the registers it uses and must not omit a register needed to preserve a material control.

## 11.4 Record identity rule

Material records should have stable identifiers.

Identifiers should be unique enough to support traceability across sources, evidence, gates, decisions and outputs.

Where practical, identifiers should allow a reviewer to link:

**Studio → Case or Work Item → Evidence → Gate → Decision → Output → Release**

## 11.5 Record-status rule

Controlled records must use defined status values.

Typical statuses may include:

- Draft;
- Under Review;
- Approved;
- Approved Live Register;
- Active;
- Conditional;
- Suspended;
- Superseded;
- Withdrawn;
- Retired; and
- Archived.

The meaning of each status must be explicit.

A draft must not be represented as authoritative merely because it is the latest file available.

## 11.6 Authoritative-record rule

Every controlled record must have an identifiable authoritative location.

Where multiple copies exist, the Studio must define which copy governs.

Convenience copies, exports, screenshots, email attachments, local downloads and chat reproductions must not silently become authoritative substitutes for the controlled record.

## 11.7 Version-control rule

Material controlled documents and records must preserve version history sufficient to explain change over time.

The control system should record, where relevant:

- current version;
- prior version;
- effective date;
- approval date;
- change summary;
- approving authority; and
- superseded status.

Material changes must not erase prior history.

## 11.8 Amendment rule

Corrections must preserve the integrity of the original record.

Where a record is corrected after approval or use, the Studio should preserve:

- the original value or version;
- the correction;
- reason for correction;
- date;
- person or authority making the correction; and
- downstream records affected.

Silent retrospective alteration is prohibited for material records.

## 11.9 Supersession rule

When a controlled document or record is replaced, the prior version must remain identifiable as superseded rather than disappearing.

The Studio should record:

- what superseded it;
- effective date;
- whether earlier outputs remain valid;
- whether affected gates must be reopened; and
- whether users must be notified.

## 11.10 Linkage rule

Registers must not become isolated lists.

The Studio should link related records where this improves traceability.

Examples include:

- a gate record linked to evidence IDs;
- an evidence record linked to source IDs;
- a change decision linked to the affected control document;
- an incident linked to the affected workflow and release;
- a release record linked to the approved output version; and
- a connector record linked to the Studio and permission decision.

## 11.11 Ownership rule

Every register must have a defined owner.

The owner is responsible for ensuring that the register remains current, accurate and appropriately controlled.

Update authority may be delegated, but ownership must remain clear.

## 11.12 Access-control rule

Control records must be accessible to those who need them while protecting information that should not be broadly available.

The Studio should define:

- who may view;
- who may edit;
- who may approve;
- who may delete or archive;
- whether sensitive fields require restricted storage; and
- whether public repositories are suitable for the content.

A control register must not become a new source of privacy or confidentiality risk.

## 11.13 Data-minimisation rule

Registers should contain enough information to support governance and traceability, but not unnecessary sensitive detail.

Where underlying evidence is restricted, the register may record its identifier, classification and secure location rather than duplicate the evidence itself.

## 11.14 Record-retention rule

Every Studio should define how long material records are retained, taking account of:

- law or regulation;
- organisational policy;
- contractual obligation;
- audit needs;
- professional standards;
- operational need;
- dispute risk; and
- historical governance value.

Where no external rule applies, retention should still be long enough to reconstruct material decisions and changes.

## 11.15 Deletion rule

Deletion of material control records must be governed.

Where records may be deleted, the Studio should define:

- who may authorise deletion;
- minimum retention period;
- whether the record must first be archived;
- whether Git or another history mechanism preserves the change trail; and
- whether deletion affects legal, regulatory or audit obligations.

Convenience is not sufficient reason to destroy a material governance record.

## 11.16 Live-register rule

Some registers are continuously maintained rather than issued as static versions.

A live register must still define:

- owner;
- authoritative location;
- approval status;
- field structure;
- change authority;
- review cadence; and
- historical recoverability.

"Live" must not mean uncontrolled.

## 11.17 Decision-record rule

Material decisions should be recorded when they change or interpret the Studio's operation.

Decision records should capture, where relevant:

- decision ID;
- decision question;
- options considered;
- evidence or authority relied upon;
- decision;
- rationale;
- decision-maker;
- date;
- affected controls;
- implementation action; and
- review trigger.

## 11.18 Change-register rule

Material changes to the Studio must be traceable.

The change register should capture changes to:

- purpose;
- authority;
- source hierarchy;
- boundaries;
- gates;
- workflow;
- human decision rights;
- connectors;
- output standards;
- testing requirements; and
- release controls.

Minor editorial changes may be handled proportionately, but substantive changes must not disappear inside ordinary file edits.

## 11.19 Incident-register rule

Material control failures must have an incident record where the Studio's governance requires it.

Incident records may include:

- incident ID;
- date;
- affected Studio;
- description;
- impact;
- affected outputs or users;
- immediate containment;
- root cause;
- corrective action;
- decision owner;
- closure status; and
- lessons or design changes.

Repeated incidents should inform redesign rather than merely accumulate as history.

## 11.20 Exception and waiver record rule

Approved exceptions or waivers must be visible and time-bounded where appropriate.

The record should include:

- requirement or gate affected;
- authority granting the exception;
- rationale;
- risk accepted;
- compensating controls;
- duration or expiry;
- affected outputs; and
- review trigger.

An exception that exists only in conversation is not a controlled exception.

## 11.21 Release-record rule

Where release matters, the Studio should record:

- output identifier;
- version;
- release status;
- gates completed;
- approver;
- release date;
- release destination;
- supersession or withdrawal status; and
- links to the authoritative output.

This prevents uncertainty about which version was actually approved and released.

## 11.22 Conversational-memory rule

Chat history and model memory may support continuity, but they must not serve as the sole formal record of:

- approval;
- evidence state;
- source authority;
- decision rights;
- exceptions;
- incidents;
- release status;
- connector permissions; or
- material governance decisions.

Where a conversation produces a material decision, that decision must be transferred into the appropriate controlled record.

## 11.23 Record-quality rule

A register is only useful if its entries are reliable.

The Studio must avoid:

- incomplete identifiers;
- inconsistent status values;
- duplicate records without clear relationship;
- orphaned records;
- missing owners;
- undocumented changes;
- stale live registers;
- ambiguous authoritative location; and
- records that cannot be linked back to the work they govern.

## 11.24 Register-review rule

Registers must be reviewed periodically and after material change.

The review should identify:

- stale entries;
- superseded documents still marked active;
- expired permissions;
- unresolved incidents;
- open exceptions;
- missing ownership;
- broken links;
- inconsistent versions; and
- records that no longer match operational reality.

## 11.25 Required artefact — Register and Control Record Architecture

Before Brick 11 can pass, every Studio must produce a controlled record containing at least:

- register inventory;
- purpose of each register;
- mandatory versus conditional status;
- record identifiers;
- required fields;
- status values;
- authoritative location;
- version rules;
- ownership and update authority;
- linkage rules;
- amendment rules;
- supersession rules;
- retention rules;
- access restrictions;
- sensitive-record handling;
- deletion and archival rules;
- review cadence;
- transfer-from-conversation rule;
- accountable owner;
- version and status; and
- approval status.

## 11.26 Gate 11 — Record Integrity Gate

A Studio may progress beyond Brick 11 only when the following questions can be answered **Yes** with evidence:

- Are the required registers identified?
- Is each register's purpose clear?
- Are record identifiers defined?
- Are status values controlled?
- Is the authoritative record location known?
- Are version and amendment rules explicit?
- Can superseded records remain recoverable?
- Are related records linked where necessary?
- Is ownership clear?
- Are access and confidentiality controls appropriate?
- Are retention and deletion rules defined?
- Are exceptions, incidents, releases and material decisions recorded where required?
- Is conversational memory prevented from acting as the sole formal record?
- Can the register set be reviewed for staleness and inconsistency?

If any material answer is **No**, the control-record architecture is incomplete.

## 11.27 Evidence required to pass

Gate 11 requires:

- the completed Register and Control Record Architecture;
- a representative Studio Register entry;
- a representative decision or change record;
- a representative gate or evidence record;
- an example of a superseded or amended record;
- an example of a record linked to another control artefact; and
- confirmation of the authoritative system of record.

For consequential Studios, a reviewer must be able to reconstruct a representative decision trail using the registers without relying on chat memory.

## 11.28 Failure response

If Gate 11 fails:

- the Studio must not represent its governance as fully auditable;
- missing registers must be created;
- ambiguous authority or ownership must be resolved;
- stale or conflicting records must be corrected;
- material decisions held only in conversation must be transferred into controlled records;
- broken traceability must be repaired; and
- release or high-reliance operation may remain blocked where the missing record affects accountability.

A Studio that cannot remember its own controlled decisions cannot reliably govern itself over time.

## 11.29 Human approval point

The accountable owner must approve the Register and Control Record Architecture before operational release.

Additional records-management, privacy, legal, compliance, audit or security approval may be required where retention, deletion, access or sensitive information is regulated.

Any material change to authoritative systems, retention, record ownership, approval status, access rights or register structure requires reassessment of Brick 11 and affected controls.

## 11.30 GitHub control record

For Nexus BMG Studios, GitHub should hold governance records appropriate to the repository's classification, including approved standards, control records, templates, registers and version history.

Sensitive evidence or restricted operational data must remain in an approved secure system where required, with GitHub storing controlled references rather than inappropriate duplicates.

GitHub history supports technical provenance; the relevant register identifies which current document or record is authoritative.

## 11.31 Brick 11 completion rule

Brick 11 is complete only when the Studio can answer five questions about any material governance record:

> **What is the record?**
>
> **Where is the authoritative version?**
>
> **Who owns and may change it?**
>
> **What changed over time?**
>
> **Can another authorised reviewer reconstruct the relevant decision without relying on chat history?**

If the final answer is no, the record architecture is insufficient.

---

## Brick 11 core rule

**Conversation helps the Studio work. Controlled records allow the Studio to remember, prove and govern what it did.**
