# NEX-GOV-003 — Nexus Studio Building Standard

## Authoritative Draft Master

- **Version:** 0.2
- **Status:** Draft — Under Final Assembly and Forensic Review
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`
- **Approval authority:** Alec Gardner

## 1. Purpose

NEX-GOV-003 defines the mandatory method for designing, building, testing, governing, approving, maintaining and retiring Nexus BMG AI-assisted Studios.

It is both:

1. a reusable method others may follow to construct a controlled Studio; and
2. the mandatory build standard applied whenever Nexus BMG creates or materially changes one of its own Studios.

No Studio is considered approved because its prompts work, its outputs are impressive, or its technology is advanced. Approval requires evidence that the complete Studio architecture has been deliberately designed, tested, challenged and accepted by an authorised human.

The governing principle is:

> **Design backwards from trust. Determine what must be true before you would rely upon, release or put your name to the output, then build the Studio so those conditions must be demonstrated.**

## 2. Governing architecture

The Standard is built around eighteen construction bricks, Build Gates, Studio-specific Operational Gates, assurance classification, controlled evidence, cross-cutting assurance and final human approval.

The governing taxonomy is:

> **Bricks build the Studio. Build Gates prove the bricks. Operational Gates control the Studio's work.**

### Build Gates

Build Gates use the identifiers **BG-01 to BG-18** and determine whether each Studio-construction domain has been satisfactorily completed.

### Operational Gates

Operational Gates are Studio-specific controls designed under Brick 6 and use the format:

`OG-[STUDIO-ID]-[NN]`

Passing a Build Gate does not mean an operational work item has passed an Operational Gate. Passing an Operational Gate does not mean the Studio itself is approved.

## 3. Studio Assurance Classification

Every Studio must receive an assurance classification:

- **Tier 1 — Assistive / Low Consequence**
- **Tier 2 — Controlled Decision Support / Moderate Consequence**
- **Tier 3 — High Assurance / Professional, Regulated or External Reliance**
- **Tier 4 — Critical Assurance / Rights, Safety or Autonomous Consequence**

Control depth rises with consequence, reliance, uncertainty, autonomy and exposure.

A Studio must not be classified downward merely to reduce governance burden.

The assurance tier determines minimum expectations for:

- evidence provenance;
- independent review;
- adversarial review;
- testing depth;
- human approval;
- dual control;
- connector permissions;
- auditability;
- monitoring cadence;
- lifecycle review; and
- release authority.

## 4. Status and state taxonomy

The Standard uses separate namespaces for:

- Studio Build Status;
- Build Gate State;
- Operational Gate State;
- Work-Item State;
- Source Status;
- Evidence State;
- Controlled Document Status;
- Output Status;
- Release Status;
- Incident/Exception Status; and
- Lifecycle Status.

A status has authority only over the object it was designed to describe.

Statements such as "Approved", "Passed", "Final" or "Done" must be qualified where ambiguity exists.

## 5. Applicability principle

Every Brick 1–18 must be assessed for every Studio.

Permitted applicability outcomes are:

- Applicable — Full control required;
- Applicable — Proportionate control permitted;
- Applicable — Conditional control triggered; or
- Not Applicable — Justified.

Reduced depth is not the same as Not Applicable.

A Not Applicable determination requires recorded rationale and must not weaken a legal, regulatory, privacy, security, safety, professional or evidentiary requirement.

---

# 6. The Eighteen-Brick Standard

## Brick 1 — What Is a Studio?

A Studio is a controlled, purpose-built environment for using artificial intelligence, human judgement, authoritative sources, evidence, defined workflows and quality controls to produce a particular class of trusted outcome.

A Studio is not merely a prompt, prompt library, chatbot or collection of instructions.

Every new Studio must itself be built through NEX-GOV-003.

### BG-01 — Studio Eligibility and Definition Gate

BG-01 determines whether the proposed construct should proceed as a Studio rather than as a simpler prompt, template, ordinary procedure or extension of an existing approved Studio.

Evidence must include a Studio Concept Record, accountable build owner and controlled build location.

---

## Brick 2 — Studio Purpose, Intended Outcome and Authority

A Studio must be designed around a clearly defined problem, intended outcome and authorised decision boundary rather than around a technology or model capability.

The required artefact is the **Studio Purpose and Authority Record**.

The Studio must distinguish:

**Activity → Output → Outcome → Decision or value created.**

Capability does not equal authority.

The minimum authority model is:

**Assist → Recommend → Decide → Act**

### BG-02 — Purpose and Authority Gate

BG-02 verifies that purpose, users, outputs, reliance, AI authority, human authority, accountable ownership, success criteria and exclusions are sufficiently clear.

A provisional Assurance Tier is assigned during BG-02.

---

## Brick 3 — Authoritative Sources and Source Hierarchy

A Studio must know what it is allowed to treat as authoritative and which source governs when sources disagree.

The required artefact is the **Source Authority and Hierarchy Record**.

The source architecture distinguishes controlling authority, authoritative guidance, approved organisational authority, primary evidence, research evidence, supporting evidence, practitioner evidence, user-provided material, prior Studio output and AI/model knowledge.

The Standard requires explicit source status, currency, version, jurisdiction, conflict resolution, IP/licensing considerations and stop/escalate behaviour where authority cannot be resolved.

### BG-03 — Source Authority Gate

BG-03 verifies that controlling authority, hierarchy, currency rules, conflict handling, AI-memory limits and provenance requirements are explicit.

---

## Brick 4 — Scope, Boundaries and Prohibited Uses

A Studio must know where its authority ends.

The required artefact is the **Scope, Boundary and Prohibited Use Record**.

Activities must be classifiable as:

**Permitted → Conditional → Escalate → Prohibited**

The Studio must define user-role boundaries, data boundaries, connector read/write/action limits, consequential-decision limits, operator competence requirements, partial-scope handling, uncertainty response and boundary-drift controls.

### BG-04 — Scope and Boundary Gate

BG-04 confirms the Assurance Tier and verifies that the Studio can recognise where it must stop.

---

## Brick 5 — Output Standard and Definition of Done

A Studio must define what good looks like before generation begins.

The required artefact is the **Output Standard and Definition of Done Record**.

The Standard distinguishes:

**Generated → Complete for Review → Gate-Passed → Approved for Release → Released**

Quality must be defined through purpose fit, accuracy, evidence integrity, completeness, traceability, clarity, usefulness, consistency, boundary compliance, uncertainty integrity, professional quality and release readiness as applicable.

### BG-05 — Output Standard Gate

BG-05 verifies that every material output has explicit completion, evidence, quality and release criteria.

---

## Brick 6 — Gate System Design

Brick 6 is the meta-standard for designing Operational Gates and validating Build Gate architecture.

The required artefact is the **Gate Architecture and Control Record**.

A gate must answer:

- What are we testing?
- What evidence is required to pass?
- Who or what is authorised to decide?
- What happens if it fails?
- Can it actually stop progression?

The minimum gate states are:

**Not Assessed · Pass · Conditional Pass · Fail · Escalate · Blocked · Waived by Authority · Reopened**

A gate cannot pass by assertion. It must pass by evidence.

### Bootstrap conformance rule

BG-01 to BG-05 are provisional until BG-06 has passed. Once Brick 6 is complete, BG-01 to BG-05 must undergo Gate Architecture Conformance Review against Brick 6.

### BG-06 — Gate Architecture Gate

BG-06 verifies the architecture of the Studio's Operational Gates and conformance of the earlier Build Gates.

---

## Brick 7 — Evidence Architecture and Provenance

A Studio must be able to show why it reached the conclusion it did.

The required artefact is the **Evidence Architecture and Provenance Record**.

The governing trace is:

**Claim or requirement → Evidence → Source → Interpretation → Decision → Gate → Output**

The Standard requires evidence identity, provenance, state, sufficiency, interpretation separation, assumption visibility, transformation lineage, citation integrity, contradictory evidence preservation, negative-evidence discipline, freshness, replacement control and sensitive-evidence handling.

### BG-07 — Evidence Integrity and Provenance Gate

BG-07 verifies that material conclusions can be reconstructed without relying on hidden model reasoning.

---

## Brick 8 — Research Protocol

Research must be purposeful, controlled and sufficient for the decision or output being supported.

The required artefact is the **Research Protocol and Research Control Record**.

The research lifecycle is:

**Question Defined → Search Designed → Sources Retrieved → Evidence Extracted → Contradictions Tested → Gaps Assessed → Sufficiency Determined → Research Closed or Escalated**

The Standard requires search-before-answer where appropriate, primary-source priority, prior-art search, contradictory-evidence search, boundary-condition research, inclusion/exclusion rules, stopping rules, research-gap recording and bias controls.

### BG-08 — Research Sufficiency Gate

BG-08 verifies that research is sufficient for the intended reliance rather than merely supportive of the preferred conclusion.

---

## Brick 9 — Workflow Architecture

A Studio must define how work moves through the system.

The required artefact is the **Workflow Architecture and State Control Record**.

A workflow is not merely a sequence of prompts. It controls intake, classification, state, stage, gates, human hand-offs, connectors, forward movement, backward movement, blocking, escalation, retries, failure containment, release and post-release correction.

### BG-09 — Workflow Integrity Gate

BG-09 verifies that work may move only through authorised transitions and that failure has a controlled route.

---

## Brick 10 — Human Decision Rights and Escalation

Human decision rights must be explicit.

The required artefact is the **Human Decision Rights and Escalation Record**.

The Studio must identify who prepares, reviews, recommends, approves, executes and remains accountable.

Meaningful human review requires sufficient information and real authority to challenge, reject, request evidence, modify or escalate.

Operator competence requirements must be explicit where relevant.

### BG-10 — Human Authority and Escalation Gate

BG-10 verifies that consequential decisions have clear human ownership and escalation paths.

---

## Brick 11 — Registers and Control Records

A Studio must preserve a reliable institutional record of material decisions, evidence states, approvals, changes and releases.

The required artefact is the **Register and Control Record Architecture**.

Potential registers include Studio, Controlled Document, Source, Evidence, Build Gate, Operational Gate, Decision and Change, Incident, Connector and Permission, Risk/Exception, Release and Dependency records.

Conversation may support work but is not a substitute for a controlled record.

### BG-11 — Record Integrity Gate

BG-11 verifies that material governance history can be reconstructed without relying on chat memory.

---

## Brick 12 — Prompting Architecture

Prompts are implementation components inside a Studio. They are not the Studio itself.

The required artefact is the **Prompting Architecture and Prompt Control Record**.

Prompts must inherit approved purpose, authority, source, evidence, boundary, workflow, gate and human-decision rules.

Prompts must be version controlled, tested, resistant to governance override, safe in failure and observable for deterioration.

### BG-12 — Prompt Architecture Gate

BG-12 verifies that operational prompts remain subordinate to the Studio architecture.

---

## Brick 13 — Adversarial and Contradictory Review

A Studio must actively try to discover why its own conclusion, output or control may be wrong.

The required artefact is the **Adversarial and Contradictory Review Protocol**.

Review must test contradictory evidence, assumptions, source selection, claim strength, alternative explanations, boundary conditions, counterexamples, failure modes, false positives, false negatives and consequence of error where relevant.

Review must be sufficiently independent and capable of changing the outcome.

### BG-13 — Adversarial Resilience Gate

BG-13 verifies that hostile review is real rather than performative.

---

## Brick 14 — Version and Change Control

A Studio must remain controlled as it changes.

The required artefact is the **Version and Change Control Record**.

Material changes require classification, impact assessment, affected-gate re-entry, regression testing, approval, controlled deployment, rollback where appropriate and assessment of prior released outputs.

Changes in model, connector, source, prompt, workflow, authority, assurance tier or dependencies may be material.

### BG-14 — Change Integrity Gate

BG-14 verifies that change does not silently alter the approved Studio architecture.

---

## Brick 15 — Release Criteria

Release is a separate act of trust and authority.

The required artefact is the **Release Criteria and Release Control Record**.

Release requires confirmation of mandatory Operational Gate states, evidence readiness, defect thresholds, limitations, exact version, human approval, source currency, destination, audience, sensitive-information checks, IP/licensing checks, attribution, release metadata and withdrawal/correction capability.

Release refusal is a successful control outcome.

### BG-15 — Release Readiness Design Gate

BG-15 verifies that the Studio has a defensible operational release mechanism before final approval.

---

## Brick 16 — Testing and Failure Cases

A Studio must prove correct behaviour not only when everything goes right, but when evidence is incomplete, sources conflict, users push boundaries, tools fail and controls are attacked.

The required artefact is the **Test and Failure Case Record**.

Minimum test categories include known-good, known-bad, ambiguous, incomplete, contradictory, out-of-scope, bypass, escalation and end-to-end cases, with additional cases based on Assurance Tier.

Expected outcomes must be defined before execution.

### BG-16 — Operational Resilience Gate

BG-16 verifies that the Studio fails safely and that its controls work under realistic and hostile conditions.

---

## Brick 17 — Maintenance, Review and Retirement

Approval is a point in time. Trustworthiness must be maintained through time.

The required artefact is the **Maintenance, Review and Retirement Plan**.

The Studio must define ownership continuity, periodic review, event-triggered review, source/model/tool/connector currency, prompt/workflow health, gate performance, incidents, human override patterns, operator competence, suspension, reactivation, retirement and archival control.

### BG-17 — Lifecycle Integrity Gate

BG-17 verifies that the Studio can remain trustworthy, be suspended when necessary and retire cleanly.

---

## Brick 18 — Studio Build Record and Final Approval

A Studio becomes approved only when the complete architecture has been assembled, tested, challenged, documented and consciously accepted by the authorised human or governing body.

The required artefact is the **Studio Build Record and Final Approval Record**.

Final review must test cross-brick coherence and contradictions.

The required traceability chain is:

**Purpose → Authority → Sources → Boundaries → Output Standard → Gates → Evidence → Research → Workflow → Human Decisions → Records → Prompts → Adversarial Review → Change Control → Release → Testing → Lifecycle → Final Approval**

### BG-18 — Final Studio Approval Gate

BG-18 may confer Studio Build Status **Approved** only when all applicable mandatory Build Gates have passed, required artefacts exist, cross-cutting assurance is complete, testing and hostile review are satisfactory, material defects are resolved or validly excepted, residual risks are visible and an authorised human makes an explicit approval decision.

Final Studio approval is a human governance decision.

---

# 7. Cross-Cutting Assurance Review

The Cross-Cutting Assurance Review is a mandatory overlay and is not BG-19.

Every Studio must assess applicability of:

1. legal and regulatory;
2. privacy and confidentiality;
3. information security;
4. safety and harm prevention;
5. fairness, discrimination and accessibility;
6. intellectual property, copyright and licensing;
7. records, retention and evidentiary obligations;
8. professional and ethical responsibility;
9. third-party, model, vendor and connector dependency;
10. business continuity, resilience and recoverability;
11. operator competence and authorised-use readiness; and
12. data residency and jurisdiction where material.

The completed **Cross-Cutting Assurance Record** is mandatory evidence for BG-18.

No local control is sufficient if satisfying it creates a material uncontrolled failure elsewhere in the Studio.

# 8. Dependency Control

Every Studio must identify material dependencies that may affect authority, evidence, availability, security or output reliability.

Dependencies may include models, connectors, APIs, data stores, authentication systems, authoritative repositories, human specialists, shared components and upstream/downstream Studios.

Trust is not inherited automatically from a dependency.

Material dependency change triggers Brick 14 impact assessment and affected Build Gate re-entry where required.

# 9. Independent Review

The Standard defines four independence levels:

- **IR-0 — Self-review**
- **IR-1 — Separate-context review**
- **IR-2 — Independent human or functional review**
- **IR-3 — Strong independent assurance**

Minimum final-review expectations are determined by Assurance Tier.

Tier 3 normally requires IR-2 for material architecture, adversarial review and final assurance. Tier 4 requires stronger independence for critical domains.

An independent reviewer must be both sufficiently independent and competent for the issue being reviewed.

A review that cannot alter the outcome is advisory, not assurance.

# 10. Retention, Provenance and Privacy Reconciliation

The governing rule is:

> **Retain what must be retained, reference what need not be duplicated, and remove what no longer has a lawful or governance purpose.**

The order of consideration is:

1. applicable law, regulation, court/tribunal requirement or binding legal hold;
2. binding contractual or professional retention obligation;
3. approved organisational records policy;
4. Studio-specific auditability and provenance need; and
5. data minimisation and purpose limitation for anything not otherwise required.

Sensitive evidence should remain in approved secure systems where practical, with governance repositories storing only the minimum controlled metadata required for traceability.

# 11. Required execution instrument — Nexus Studio Build Pack

Every new or materially changed Studio must use the approved **Nexus Studio Build Pack** or an approved equivalent that preserves the same controls and traceability.

The Build Pack contains the controlled records required for:

- BG-01 to BG-18;
- Assurance Classification;
- Status and State Profile;
- Operational Gate inventory;
- Cross-Cutting Assurance;
- Dependency Control;
- Independent Review;
- Retention/Privacy Reconciliation; and
- Final Approval.

The Standard defines the controls. The Build Pack proves they were applied.

# 12. Whole-System Hostile Test

Before BG-18 may pass, the assembled Studio must survive at least one whole-system hostile scenario combining multiple pressures appropriate to its Assurance Tier.

The scenario should combine, where relevant:

- ambiguous request;
- misleading user-provided source;
- contradictory authoritative source;
- missing evidence;
- attempted gate bypass;
- unauthorised connector or external-action request; and
- pressure for immediate release.

The Studio must preserve authority, evidence integrity, correct escalation and release control across the combined scenario.

# 13. Change and lifecycle rule

Once a Studio is approved, all material change is governed through Brick 14 and continued fitness through Brick 17.

Approval does not create permanent fitness.

Material changes may reopen earlier Build Gates and invalidate prior Operational Gate assumptions, approvals or released outputs.

# 14. Final approval rule

A Studio may use Studio Build Status **Approved** only after BG-18 has passed.

The final approver must be able to answer:

- Do I understand what this Studio is intended to do?
- Do I understand what it is not allowed to do?
- Can I see evidence that its controls work?
- Can I see unresolved limitations and residual risks?
- Can I identify exactly which version I am approving?
- Am I prepared to put my authority behind its use?

# 15. Incorporated controlled components

This master incorporates the following controlled component files by reference. During Draft v0.2, the component files remain the detailed normative source for their respective control domains. Where this master summarises a component, the component's detailed mandatory rules remain in force unless explicitly superseded by a later approved master revision.

## 15.1 Construction components

- `governance/nexus-studio-building-standard-v0.1-draft.md` — original master containing Bricks 1–3 and initial architecture
- `governance/studio-building-standard/brick-04-scope-boundaries-prohibited-uses-v0.1-draft.md`
- `governance/studio-building-standard/brick-05-output-standard-definition-of-done-v0.1-draft.md`
- `governance/studio-building-standard/brick-06-gate-system-design-v0.1-draft.md`
- `governance/studio-building-standard/brick-07-evidence-architecture-provenance-v0.1-draft.md`
- `governance/studio-building-standard/brick-08-research-protocol-v0.1-draft.md`
- `governance/studio-building-standard/brick-09-workflow-architecture-v0.1-draft.md`
- `governance/studio-building-standard/brick-10-human-decision-rights-escalation-v0.1-draft.md`
- `governance/studio-building-standard/brick-11-registers-control-records-v0.1-draft.md`
- `governance/studio-building-standard/brick-12-prompting-architecture-v0.1-draft.md`
- `governance/studio-building-standard/brick-13-adversarial-contradictory-review-v0.1-draft.md`
- `governance/studio-building-standard/brick-14-version-change-control-v0.1-draft.md`
- `governance/studio-building-standard/brick-15-release-criteria-v0.1-draft.md`
- `governance/studio-building-standard/brick-16-testing-failure-cases-v0.1-draft.md`
- `governance/studio-building-standard/brick-17-maintenance-review-retirement-v0.1-draft.md`
- `governance/studio-building-standard/brick-18-studio-build-record-final-approval-v0.1-draft.md`

## 15.2 Forensic review and remediation components

- `governance/studio-building-standard/forensic-integrity-review-v0.1-draft.md`
- `governance/studio-building-standard/remediation-01-gate-taxonomy-bg01-v0.1-draft.md`
- `governance/studio-building-standard/remediation-02-assurance-classification-matrix-v0.1-draft.md`
- `governance/studio-building-standard/remediation-03-status-state-taxonomy-v0.1-draft.md`
- `governance/studio-building-standard/remediation-04-cross-cutting-assurance-review-v0.1-draft.md`
- `governance/studio-building-standard/remediation-06-applicability-dependency-independent-review-retention-privacy-v0.1-draft.md`

## 15.3 Execution component

- `governance/studio-building-standard/studio-build-pack-v0.1-draft.md`

# 16. Precedence during Draft v0.2

Until v1.0 approval, the following precedence applies:

1. this **v0.2 Draft Master** defines the current architecture and taxonomy;
2. remediation files supersede conflicting earlier draft wording in the areas they explicitly remediate;
3. detailed brick files remain normative for the detailed rules of their brick unless inconsistent with a later remediation;
4. the Build Pack is the current execution template but remains Draft;
5. the forensic review remains historical evidence of defects identified and does not override closed remediation controls.

Any unresolved contradiction must be recorded and resolved before v1.0 approval.

# 17. Current approval status

This document is **not approved v1.0**.

Current Studio Build Status for NEX-GOV-003 itself:

**Under Final Review**

The remaining required steps are:

1. run whole-standard contradiction review against this assembled master;
2. apply NEX-GOV-003 to itself using the Studio Build Pack;
3. run the whole-system hostile scenario;
4. complete independent review at the required level;
5. resolve material defects;
6. prepare BG-18 final approval evidence;
7. open a pull request for human review; and
8. only after authorised approval, establish NEX-GOV-003 v1.0 as the approved operational baseline.

## Core rule

> **AI assists. Humans decide. GitHub records.**
