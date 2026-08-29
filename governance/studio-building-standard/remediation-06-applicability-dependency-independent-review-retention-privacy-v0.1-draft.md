# Remediation 06 — Applicability, Dependency, Independent Review and Retention/Privacy Reconciliation

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Whole-Standard Forensic Integrity Review v0.1
- **Findings addressed:** 11, 12, 13 and 14
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This remediation closes four linked governance gaps by defining:

1. which controls are universally applicable and which scale by assurance tier;
2. how Studio dependencies are identified and governed;
3. when independent review is mandatory rather than discretionary; and
4. how retention, provenance and auditability are reconciled with privacy, confidentiality and data minimisation.

The governing principle is:

> **A controlled Studio must know what applies, what it depends on, who must independently challenge it, and what information it is justified in retaining.**

---

# Part A — Brick and Control Applicability Matrix

## A1. Applicability principle

Every Brick 1–18 must be assessed for every Studio.

A builder may not skip a brick because it appears irrelevant. Instead, each brick must receive one of the following applicability outcomes:

- **Applicable — Full control required**
- **Applicable — Proportionate control permitted**
- **Applicable — Conditional control triggered**
- **Not Applicable — Justified**

A Not Applicable decision requires evidence and rationale.

## A2. Universal bricks

The following bricks are universally applicable to every Studio, although the depth of implementation may scale by assurance tier:

- Brick 1 — Studio Definition and Eligibility
- Brick 2 — Purpose, Intended Outcome and Authority
- Brick 3 — Authoritative Sources and Source Hierarchy
- Brick 4 — Scope, Boundaries and Prohibited Uses
- Brick 5 — Output Standard and Definition of Done
- Brick 6 — Gate System Design
- Brick 7 — Evidence Architecture and Provenance
- Brick 9 — Workflow Architecture
- Brick 10 — Human Decision Rights and Escalation
- Brick 11 — Registers and Control Records
- Brick 12 — Prompting Architecture
- Brick 14 — Version and Change Control
- Brick 15 — Release Criteria
- Brick 16 — Testing and Failure Cases
- Brick 17 — Maintenance, Review and Retirement
- Brick 18 — Studio Build Record and Final Approval

## A3. Conditional-depth bricks

The following bricks remain assessed for every Studio but may operate at reduced depth where the Studio's purpose genuinely does not require the full control set:

- **Brick 8 — Research Protocol**: reduced where the Studio does not perform material research or current-source retrieval.
- **Brick 13 — Adversarial and Contradictory Review**: depth scales materially by assurance tier and output consequence.

A reduced-depth application is not the same as Not Applicable.

## A4. Applicability by assurance tier

| Control area | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Purpose and authority | Full | Full | Full | Full |
| Source hierarchy | Full but proportionate | Full | Formal | Formal + specialist where required |
| Scope/boundaries | Full | Full | Formal | Formal + strengthened |
| Definition of Done | Required | Required | Formal | Formal + high assurance |
| Operational Gate architecture | Simple where justified | Required | Formal | Formal + strengthened |
| Evidence provenance | Proportionate | Required for material claims | Formal traceability | Formal traceability + enhanced assurance |
| Research protocol | Conditional depth | Required where research material | Formal where claims/evidence material | Formal + independent challenge |
| Workflow | Required | Required | Formal | Formal + resilience controls |
| Human decision rights | Required | Required | Formal | Formal + dual control where triggered |
| Registers | Proportionate | Required | Formal | Formal + stronger auditability |
| Prompt control | Required | Required | Formal | Formal + enhanced testing |
| Adversarial review | Targeted | Required for material outputs | Formal | Formal + independent repeated challenge |
| Change control | Required | Required | Formal | Formal + enhanced rollback/assurance |
| Release controls | Required | Required | Formal | Formal + high-assurance release authority |
| Testing | Representative | Structured | Comprehensive | Comprehensive + independent/high consequence |
| Lifecycle | Defined | Defined | Formal | Formal + high-frequency/event-driven |
| Final approval | Human | Human | Human + independent review | Human + strong independent assurance |

## A5. Not Applicable rule

A Not Applicable decision is permitted only where:

- the control genuinely has no meaningful relationship to Studio purpose, consequence or operation;
- another control does not depend on it;
- removing it does not weaken a legal, regulatory, privacy, security, safety, professional or evidentiary requirement; and
- the rationale is recorded in the Studio Build Record.

## A6. Applicability review trigger

Applicability must be reassessed after material changes to:

- purpose;
- assurance tier;
- user roles;
- decision authority;
- data sensitivity;
- external exposure;
- connector capability;
- regulated status; or
- dependency architecture.

---

# Part B — Studio Dependency Control

## B1. Dependency principle

A Studio must identify material dependencies that could alter its authority, evidence, availability, security or output reliability.

A dependency is any external or internal component whose failure, change or unavailability can materially affect Studio operation.

## B2. Dependency classes

Dependencies may include:

- upstream Studios;
- downstream Studios;
- shared Studio components;
- AI models or model providers;
- APIs;
- connectors;
- authentication providers;
- data stores;
- authoritative source repositories;
- external research services;
- hosting platforms;
- specialist human roles;
- regulatory or professional authorities;
- templates or shared controlled artefacts;
- third-party datasets;
- software libraries; and
- successor/predecessor Studios.

## B3. Dependency Record

Every material dependency must be recorded with at least:

- dependency ID;
- dependency name;
- type;
- owner/provider;
- purpose;
- upstream/downstream relationship;
- information exchanged;
- authority relied upon;
- failure consequence;
- change consequence;
- fallback arrangement;
- monitoring requirement;
- assurance-tier impact;
- review cadence; and
- change-control trigger.

## B4. No inherited-trust rule

A Studio must not automatically inherit trust, authority or approval from an upstream Studio or external dependency.

Where an upstream Studio output is used, the receiving Studio must verify, as appropriate:

- source provenance;
- output version;
- approval status;
- assurance tier;
- known limitations;
- relevant Operational Gate status;
- currency; and
- suitability for the receiving Studio's purpose.

## B5. Shared-component rule

Where prompts, templates, workflows, source registers or connectors are shared between Studios, changes to the shared component must trigger impact assessment across all dependent Studios.

## B6. Single-point-of-failure rule

Tier 3 and Tier 4 Studios must identify material single points of failure.

Where a single dependency could stop operation or materially compromise safe behaviour, the lifecycle and continuity architecture must define an appropriate response, such as:

- fallback provider;
- manual process;
- suspension;
- cached controlled source;
- alternate authorised model;
- redundant system; or
- controlled outage state.

## B7. Human-dependency rule

Critical human roles are dependencies too.

Where a qualified assessor, legal adviser, privacy officer, security owner, specialist reviewer or other individual role is required for continued operation, the Studio must identify what happens when that role is unavailable.

## B8. Dependency-change rule

A material dependency change must trigger Brick 14 impact assessment and may require re-entry to earlier Build Gates.

Examples include:

- model provider change;
- connector API change;
- shared Studio retirement;
- source repository relocation;
- changed vendor terms;
- changed data-processing location;
- removal of a specialist human role.

---

# Part C — Independent Review Thresholds

## C1. Independence principle

Independent review exists to challenge assumptions that the primary builder, producer or decision-maker may not detect.

Independence must be sufficient for the purpose of the review. It does not always require a completely separate organisation, but it does require meaningful separation from the decision being tested.

## C2. Independence levels

The Standard recognises four levels of review independence:

### IR-0 — Self-review

The original builder or producer reviews their own work.

Permitted only for low-risk local checks where independent challenge is not required.

### IR-1 — Separate-context review

A separate prompt, fresh context, independent analysis pass or reviewer role evaluates the work without simply inheriting the producer's reasoning.

Useful for Tier 1 and some Tier 2 controls.

### IR-2 — Independent human or functional review

A different competent person or function reviews the work and has authority to challenge, reject or return it.

This is the minimum normal level for material Tier 3 review.

### IR-3 — Strong independent assurance

A reviewer is materially independent of the builder and operational owner, potentially from another governance function, specialist discipline or external party.

This level is appropriate for defined Tier 4 or high-consequence assurance activities.

## C3. Minimum independence by assurance tier

| Assurance tier | Minimum final architecture review | Minimum material adversarial review | Minimum final approval assurance |
|---|---|---|---|
| Tier 1 | IR-0 or IR-1 | IR-1 where material | Human approval; IR-1 if triggered |
| Tier 2 | IR-1; IR-2 on material risk triggers | IR-1 or IR-2 | Human approval; IR-2 for material consequential use |
| Tier 3 | IR-2 | IR-2 | IR-2 review before final approval |
| Tier 4 | IR-3 for critical domains | IR-3 or strengthened IR-2 with specialist independence | IR-3 assurance plus authorised final human approval |

## C4. Mandatory independent-review triggers

Regardless of tier, IR-2 or stronger review is required where one or more of the following is material:

- regulated or professional decision authority;
- rights-affecting decisions;
- significant financial impact;
- public or client-facing high-reliance claims;
- safety-critical use;
- major privacy/security implications;
- high-impact autonomous action;
- unresolved material contradictory evidence;
- repeated human disagreement with Studio recommendations;
- repeated Major or Critical defects;
- material incident;
- substantial expansion in authority;
- material downgrade of assurance controls; or
- approval of an exception affecting a non-trivial control.

## C5. Reviewer competence rule

Independence alone is insufficient. The reviewer must also be competent for the question being reviewed.

A technically independent reviewer without appropriate knowledge cannot substitute for required subject-matter or governance expertise.

## C6. Reviewer authority rule

Independent review must have real consequence.

The reviewer must be able to:

- request evidence;
- challenge assumptions;
- reject a proposed Pass;
- require remediation;
- reopen affected gates; and
- escalate unresolved matters.

A review that cannot alter the outcome is advisory, not assurance.

## C7. Conflict-of-interest rule

A reviewer with a material conflict of interest should not provide the required independence unless the conflict is explicitly assessed and an authorised governance decision determines the review remains sufficient.

## C8. Independent-review record

The Build Record must identify:

- review level used;
- reviewer identity/role;
- reviewer competence basis;
- independence basis;
- material findings;
- required remediation;
- final disposition; and
- affected Build/Operational Gates.

---

# Part D — Retention, Provenance and Privacy Reconciliation

## D1. Reconciliation principle

A trustworthy Studio must preserve enough evidence to reconstruct material decisions without retaining more sensitive information than is justified.

The governing rule is:

> **Retain what must be retained, reference what need not be duplicated, and remove what no longer has a lawful or governance purpose.**

## D2. Retention hierarchy

Where retention and privacy obligations interact, the Studio must apply the following order of consideration:

1. **Applicable law, regulation, court/tribunal requirement or binding legal hold**
2. **Binding contractual or professional retention obligation**
3. **Approved organisational records policy**
4. **Studio-specific auditability and provenance need**
5. **Data minimisation and purpose limitation for anything not otherwise required**

This is not permission to retain data indefinitely. Higher-order requirements must be interpreted within their actual scope and duration.

## D3. Minimum-necessary provenance rule

Where the underlying evidence does not need to be copied into the Studio's governance repository, provenance may be preserved through controlled metadata such as:

- evidence ID;
- source ID;
- secure location;
- document/version identifier;
- custodian;
- classification;
- relevant page/section/timestamp;
- access authority;
- decision linkage; and
- retention rule.

## D4. Secure-reference rule

Sensitive or restricted evidence should remain in an approved secure system where practical.

GitHub or another governance repository may retain the controlled reference without duplicating the underlying sensitive content.

## D5. Retention-schedule rule

Every material record class must define:

- record type;
- reason for retention;
- minimum period;
- maximum or review period where applicable;
- retention trigger date;
- owner/custodian;
- storage location;
- disposal method; and
- legal hold or suspension-of-disposal conditions.

## D6. Purpose-expiry rule

When the lawful, contractual, professional or governance purpose for retaining information ends, the Studio must determine whether the information should be:

- deleted;
- anonymised;
- aggregated;
- archived under a different lawful basis;
- retained under legal hold; or
- preserved as minimum metadata only.

## D7. Evidence deletion impact rule

Before deleting evidence or records, the Studio must assess whether deletion would invalidate:

- a released output;
- an open complaint or dispute;
- a regulatory obligation;
- a gate decision;
- an incident investigation;
- a legal hold;
- an active audit; or
- the ability to reconstruct a consequential decision.

## D8. Derived-data rule

Deleting original sensitive evidence does not automatically require deletion of all derived artefacts, but the Studio must assess whether derived material still contains personal, confidential or re-identifiable information.

## D9. Redaction and pseudonymisation rule

Where full evidence is unnecessary for governance, the Studio should consider controlled redaction, pseudonymisation or aggregation while preserving sufficient traceability.

## D10. Access-versus-retention rule

Retention does not imply broad access.

A record may need to be retained for years while access remains restricted to a narrow authorised group.

## D11. Superseded-record rule

Superseded records may need to remain recoverable for audit or historical reconstruction even when they are no longer current.

The Studio must clearly distinguish:

- current authoritative record;
- superseded record;
- archived record; and
- destroyed record.

## D12. Privacy incident rule

If governance records themselves create inappropriate exposure of personal or sensitive information, the matter must be treated as a privacy/control incident rather than justified automatically by auditability.

## D13. Retention/privacy review trigger

Retention and privacy rules must be reassessed after material changes to:

- data types;
- user roles;
- jurisdictions;
- storage locations;
- connectors;
- vendors;
- legal requirements;
- professional standards;
- client contracts; or
- Studio purpose.

---

# Part E — Integration with the Build Pack

The Studio Build Pack must maintain or include:

1. **Brick Applicability Profile**
2. **Studio Dependency Record**
3. **Independent Review Record**
4. **Retention and Privacy Reconciliation Record**

## E1. Brick Applicability Profile

| Brick/control | Applicability outcome | Assurance-tier depth | Rationale | Evidence |
|---|---|---|---|---|
| | | | | |

## E2. Independent Review Record

- Review ID:
- Review level: IR-0 / IR-1 / IR-2 / IR-3
- Reviewer:
- Competence basis:
- Independence basis:
- Scope:
- Findings:
- Affected gates:
- Required remediation:
- Disposition:

## E3. Retention and Privacy Reconciliation Record

| Record/evidence class | Retention authority/purpose | Period | Secure location | Minimum metadata retained | Disposal rule | Access control |
|---|---|---|---|---|---|---|
| | | | | | | |

---

# Part F — Build Gate integration

These controls are not new Build Gates. They become mandatory evidence across the existing architecture.

- Applicability profile is established after BG-01 and confirmed through BG-04.
- Dependency control informs BG-03, BG-04, BG-09, BG-14, BG-16 and BG-17.
- Independent review thresholds inform BG-06, BG-13, BG-16 and BG-18.
- Retention/privacy reconciliation informs BG-04, BG-07, BG-11, BG-15 and BG-17.

BG-18 must verify that all four records are complete and coherent.

---

# Part G — Remediation acceptance criteria

Forensic Findings 11, 12, 13 and 14 may be marked remediated when:

- every Studio records brick/control applicability;
- Not Applicable decisions require justification;
- assurance tier determines minimum control depth;
- material dependencies are formally recorded;
- upstream trust is not automatically inherited;
- dependency changes trigger Brick 14 impact assessment;
- independent-review levels are defined;
- minimum independent-review thresholds are deterministic by tier and trigger;
- reviewer competence and authority are required;
- retention obligations and data minimisation follow an explicit precedence rule;
- sensitive evidence can be preserved by secure reference rather than unnecessary duplication;
- deletion impact is assessed before destruction; and
- BG-18 verifies all four control areas.

## Remediation status

**CONTROL DESIGN COMPLETE — IMPLEMENTATION INTO MASTER STANDARD PENDING FINAL ASSEMBLY**

## Core rule

> **Apply every control deliberately, trust no dependency blindly, require independent challenge where consequence demands it, and retain no more information than accountability genuinely requires.**
