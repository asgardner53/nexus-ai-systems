# NEX-GOV-003 — Nexus Studio Building Standard

## Version 1.0 Release Candidate 1 — Normative Master

- **Document ID:** NEX-GOV-003
- **Version:** 1.0-RC1
- **Status:** Release Candidate — Under Independent Review
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`
- **Normative status:** Candidate only; not yet an Approved Standard

---

# 1. Purpose and authority of this Standard

NEX-GOV-003 defines the mandatory Nexus method for designing, building, testing, governing, approving, maintaining, changing, suspending and retiring AI-assisted Studios.

A **Studio** is a controlled, purpose-built environment that combines artificial intelligence, human judgement, authoritative sources, evidence, workflow, decision rights and quality controls to produce a defined class of trusted outcome.

A Studio is not merely a prompt, prompt library, chatbot, model configuration or collection of instructions.

The governing design principle is:

> **Design backwards from trust. Determine what must be true before you would rely upon, release or put your name to the outcome, then build the Studio so those conditions must be demonstrated.**

This Standard is an internal governance and build standard. It does not by itself confer legal approval, regulatory approval, professional accreditation, certification against ISO or any other external conformity status.

External standards, legislation, regulation, professional requirements and contractual obligations retain their own authority and must be identified through the source hierarchy applicable to the Studio being built.

---

# 2. Core governance model

Every Studio must be built through eighteen construction bricks and their associated Build Gates.

The governing taxonomy is:

> **Bricks build the Studio. Build Gates prove the bricks. Operational Gates control the Studio's work.**

## 2.1 Build Gates

Build Gates use identifiers **BG-01 to BG-18**. They determine whether a required Studio-construction domain has been sufficiently designed, evidenced and tested.

## 2.2 Operational Gates

Operational Gates are Studio-specific controls created under Brick 6 and use the format:

`OG-[STUDIO-ID]-[NN]`

An Operational Gate governs a work item, decision or release condition inside an operating Studio.

Passing a Build Gate does not mean an operational work item has passed an Operational Gate. Passing an Operational Gate does not mean the Studio itself is approved.

## 2.3 Authority levels

Every material AI-supported activity must be classified as one of:

- **Assist** — AI structures, drafts, retrieves, compares or analyses; a human determines the outcome.
- **Recommend** — AI proposes a judgement or action; an authorised human accepts, rejects or modifies it.
- **Decide** — AI determines a defined outcome only where explicit authority, controls and testing permit it.
- **Act** — AI performs an external action only where explicit authority, permission, workflow and control conditions permit it.

Capability does not equal authority.

---

# 3. Studio Assurance Classification

Every Studio must receive an assurance classification during construction and a confirmed classification no later than BG-04.

The four tiers are:

- **Tier 1 — Assistive / Low Consequence**
- **Tier 2 — Controlled Decision Support / Moderate Consequence**
- **Tier 3 — High Assurance / Professional, Regulated or External Reliance**
- **Tier 4 — Critical Assurance / Rights, Safety or Autonomous Consequence**

Classification must consider consequence, reliance, decision authority, external exposure, rights impact, safety impact, regulatory/professional impact, data sensitivity, financial impact, autonomy, reversibility, scale, uncertainty and dependency.

The tier must be at least as high as the most material consequence that cannot be adequately reduced by an approved control.

A Studio must not be classified downward merely to reduce testing, review, documentation or governance burden.

The Assurance Tier determines minimum depth of evidence provenance, independent review, adversarial review, testing, human approval, dual control, auditability, connector authority, monitoring and lifecycle review.

---

# 4. Status and state taxonomy

Every Studio must define separate status namespaces. At minimum these may include:

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

A Build Gate Pass is not Studio Approval. A Verified evidence item is not an Approved conclusion. An Approved document does not mean the Studio is Approved. A Generated output is not a Released output.

Where ambiguity exists, status language must be qualified by object class.

---

# 5. Applicability rule

Every Brick 1–18 must be assessed for every Studio.

Permitted applicability outcomes are:

- **Applicable — Full control required**
- **Applicable — Proportionate control permitted**
- **Applicable — Conditional control triggered**
- **Not Applicable — Justified**

Reduced depth is not equivalent to Not Applicable.

A Not Applicable decision requires rationale and must not weaken a legal, regulatory, privacy, security, safety, professional, evidentiary or authority requirement.

At BG-18, material Not Applicable determinations must be challenged. For Tier 3 and Tier 4 Studios, material N/A determinations require IR-2 or stronger confirmation.

An unsupported N/A determination becomes **Applicable — Pending Control Design** and reopens the relevant Build Gate.

---

# 6. Brick 1 — Studio Eligibility and Definition

A proposed Studio must first demonstrate that a controlled Studio is justified rather than a simpler prompt, template, procedure or extension of an existing approved Studio.

The required artefact is the **Studio Concept Record**.

The record must identify:

- proposed Studio name and identifier;
- recurring problem or need;
- intended users;
- intended class of outcome;
- reason a Studio is preferable to a simpler mechanism;
- known consequence/reliance considerations;
- overlap with existing Studios;
- accountable build owner; and
- authoritative build location.

## BG-01 — Studio Eligibility and Definition Gate

BG-01 passes only when the Studio need, intended users, intended outcome, build owner and controlled build location are sufficiently clear.

Failure at BG-01 is a legitimate outcome and may result in using a simpler mechanism or extending an existing Studio through change control.

BG-01 is non-waivable.

---

# 7. Brick 2 — Purpose, Intended Outcome and Authority

Every Studio must define its purpose before defining its prompts or automation.

The required artefact is the **Studio Purpose and Authority Record**.

The record must define:

- problem or need;
- intended users;
- intended outcome;
- primary outputs;
- intended benefits and value hypothesis;
- reliance level;
- authorised AI activities;
- human-reserved decisions;
- accountable owner;
- success criteria;
- exclusions and non-purpose;
- preliminary stakeholder impacts; and
- provisional Assurance Tier.

The Studio must distinguish:

**Activity → Output → Outcome → Decision or value created.**

## BG-02 — Purpose and Authority Gate

BG-02 passes only when purpose, intended value, AI authority, human authority, reliance, owner and exclusions are clear enough to govern later design.

BG-02 is non-waivable.

---

# 8. Brick 3 — Authoritative Sources and Source Hierarchy

A Studio must know which sources it may rely upon and which source governs when sources disagree.

The required artefact is the **Source Authority and Hierarchy Record**.

The Studio must distinguish as applicable:

- controlling authority;
- authoritative guidance;
- approved organisational authority;
- primary evidence;
- research evidence;
- supporting evidence;
- practitioner evidence;
- user-provided material;
- prior Studio output; and
- AI/model knowledge.

The source architecture must define status, version, currency, jurisdiction, precedence, conflict resolution, escalation, provenance and IP/licensing restrictions.

Where a primary or controlling source is reasonably accessible, model memory or secondary summaries must not silently replace it for consequential claims.

## BG-03 — Source Authority Gate

BG-03 passes only when authority, hierarchy, currency and conflict handling are explicit.

BG-03 is non-waivable.

---

# 9. Brick 4 — Scope, Boundaries and Prohibited Uses

A Studio must know where its authority ends.

The required artefact is the **Scope, Boundary and Prohibited Use Record**.

Activities and uses must be classifiable as:

**Permitted → Conditional → Escalate → Prohibited**

The Studio must define, as applicable:

- authorised users and roles;
- permitted and prohibited activities;
- data/information classes;
- jurisdiction and organisational limits;
- consequential-decision limits;
- connector read/write/action limits;
- external-action boundaries;
- operator competence and qualification requirements;
- partial-scope handling;
- uncertainty response;
- prompt-injection and boundary-override response;
- stakeholder and rights-impact boundaries; and
- contestability triggers.

## BG-04 — Scope and Boundary Gate

BG-04 confirms the Assurance Tier and passes only when scope, prohibited use, data boundaries, authority limits and operator competence are sufficient.

BG-04 is non-waivable.

---

# 10. Brick 5 — Output Standard and Definition of Done

A Studio must define what good looks like before generation begins.

The required artefact is the **Output Standard and Definition of Done Record**.

Every material output type must define:

- intended user and use;
- required structure and format;
- mandatory and conditional content;
- evidence and source requirements;
- accuracy and verification requirements;
- completeness criteria;
- contradictory-evidence treatment;
- uncertainty and limitations;
- usability criteria;
- explainability/interpretability requirements where applicable;
- transparency requirements where applicable;
- human review;
- release conditions; and
- failure conditions.

The Standard distinguishes:

**Generated → Complete for Review → Gate-Passed → Ready for Approval → Approved for Release → Released**

Definition of Done must be tied to evidence, not appearance or elapsed effort.

## BG-05 — Output Standard Gate

BG-05 passes only when every material output has explicit completion and quality criteria.

---

# 11. Brick 6 — Gate System Design

Brick 6 is the meta-standard for designing Operational Gates and validating Build Gate architecture.

The required artefact is the **Gate Architecture and Control Record**.

Every material gate must define:

- purpose;
- risk or failure mode controlled;
- prerequisites;
- evidence required;
- pass criteria;
- fail criteria;
- decision authority;
- failure consequence;
- backward return point;
- re-entry conditions;
- escalation conditions;
- dependency on other gates;
- expiry/revalidation triggers; and
- decision record.

Minimum gate states are:

- Not Assessed;
- Pass;
- Conditional Pass;
- Fail;
- Blocked;
- Escalate;
- Waived by Authority where explicitly permitted; and
- Reopened.

A gate cannot pass by assertion. It must pass by evidence.

### Build Gate waiver rule

Build Gates are not waivable unless this Standard explicitly permits waiver. Silence means not waivable.

The following Build Gates are non-waivable:

**BG-01, BG-02, BG-03, BG-04, BG-06, BG-10, BG-14, BG-16 and BG-18.**

Schedule pressure, commercial pressure, stakeholder seniority, sunk effort, technical inconvenience, user insistence or confidence in AI output are never sufficient waiver grounds.

### Operational Gate proportionality

Every Studio must assess Brick 6, but BG-06 may validly conclude that no separate Operational Gate is required beyond approved workflow, release controls and human decision points, provided that decision is justified and no material trust point is left uncontrolled.

Operational Gates must not be created merely to make a Studio appear more governed.

### Bootstrap rule

BG-01 to BG-05 are provisional until BG-06 passes. They must then undergo Gate Architecture Conformance Review against Brick 6.

## BG-06 — Gate Architecture Gate

BG-06 passes only when Operational Gate architecture is proportionate, evidence-based and capable of stopping progression where required.

BG-06 is non-waivable.

---

# 12. Brick 7 — Evidence Architecture and Provenance

A Studio must be able to show why it reached a material conclusion.

The required artefact is the **Evidence Architecture and Provenance Record**.

The governing lineage is:

**Claim or requirement → Evidence → Source → Interpretation → Decision → Gate → Output**

The Studio must define:

- evidence identifiers;
- provenance fields;
- evidence states;
- sufficiency criteria;
- interpretation rules;
- assumption visibility;
- transformation/derived-evidence lineage;
- contradictory evidence handling;
- negative-evidence discipline;
- evidence-gap treatment;
- freshness/revalidation;
- replacement/supersession;
- sensitive-evidence handling;
- evidence-to-gate linkage; and
- evidence-to-output linkage.

Failure to find evidence must not be converted into proof that the evidence or condition does not exist.

Sensitive evidence should remain in an approved secure system where practical, with governance repositories retaining only the minimum metadata needed for traceability.

Explainability must rely on reconstructable evidence, criteria and recorded rationale rather than hidden model chain-of-thought.

## BG-07 — Evidence Integrity and Provenance Gate

BG-07 passes only when material conclusions can be reconstructed by an authorised reviewer without reliance on hidden model reasoning.

---

# 13. Brick 8 — Research Protocol

Research must be purposeful, controlled and sufficient for the intended reliance.

The required artefact is the **Research Protocol and Research Control Record**.

The research lifecycle is:

**Question Defined → Search Designed → Sources Retrieved → Evidence Extracted → Contradictions Tested → Gaps Assessed → Sufficiency Determined → Research Closed or Escalated**

Research controls must define, where relevant:

- explicit research questions;
- primary/controlling source requirements;
- prior-art or precedent search;
- contradictory-evidence search;
- boundary-condition search;
- alternate terminology;
- inclusion/exclusion criteria;
- currency requirements;
- search-failure recording;
- bias controls;
- stopping rules; and
- escalation.

Research is complete when the evidence is sufficient for the decision, not when the search supports the preferred answer.

## BG-08 — Research Sufficiency Gate

BG-08 passes only when research depth is proportionate and the stopping decision is defensible.

---

# 14. Brick 9 — Workflow Architecture

A Studio must define how work moves through the system.

The required artefact is the **Workflow Architecture and State Control Record**.

A workflow must define:

- entry points;
- intake requirements;
- stages and states;
- entry and exit criteria;
- Operational Gate placement;
- forward transitions;
- backward transitions;
- blocked and escalated states;
- human hand-offs;
- tool and connector placement;
- automation rules;
- retries;
- duplicate-action prevention;
- parallel and branching rules;
- risk-based routing;
- release path;
- post-release correction path;
- cancellation/abandonment;
- audit events; and
- exception handling.

A user or AI system must not be able to jump directly to release simply by requesting a final answer.

## BG-09 — Workflow Integrity Gate

BG-09 passes only when authorised transitions, backward correction, blocking and escalation are demonstrably controlled.

---

# 15. Brick 10 — Human Decision Rights and Escalation

Human decision authority must be explicit.

The required artefact is the **Human Decision Rights and Escalation Record**.

For each consequential decision the Studio must identify, as applicable:

- preparer;
- reviewer;
- recommender;
- approver;
- executor;
- accountable owner;
- AI authority level;
- escalation destination;
- delegation rules;
- absence/unavailability rules;
- override rules;
- dissent recording;
- conflict-of-interest control;
- dual-control requirement; and
- operator competence requirement.

Meaningful human review must allow the reviewer to understand the issue, inspect relevant evidence, challenge the AI recommendation, request further evidence, reject or modify the outcome, and record rationale where required.

A human clicking approve without sufficient context is not meaningful human oversight.

Where a person-affecting decision is contestable, the required human-review owner must be identified.

## BG-10 — Human Authority and Escalation Gate

BG-10 passes only when consequential decisions have clear human ownership and escalation paths.

BG-10 is non-waivable.

---

# 16. Brick 11 — Registers and Control Records

A Studio must preserve reliable institutional memory of material decisions, evidence, gates, changes, incidents and releases.

The required artefact is the **Register and Control Record Architecture**.

Registers may include:

- Studio Register;
- AI/Studio Portfolio Register where multiple Studios are governed collectively;
- Controlled Document Register;
- Source Register;
- Evidence Register;
- Build Gate Register;
- Operational Gate records;
- Decision and Change Register;
- Incident Register;
- Connector and Permission Register;
- Risk/Exception Register;
- Release Register; and
- Dependency Record.

Controlled records must define identifiers, owner, authoritative location, status, version, amendment, supersession, linkage, access, retention, archival and review rules.

Conversation may support work but must not be the sole formal record of approvals, authority, exceptions, evidence states, release status or material governance decisions.

## BG-11 — Record Integrity Gate

BG-11 passes only when material governance history can be reconstructed without relying on chat memory.

---

# 17. Brick 12 — Prompting Architecture

Prompts are controlled components inside a Studio. They are not the Studio itself.

The required artefact is the **Prompting Architecture and Prompt Control Record**.

Every material prompt must define:

- role;
- workflow stage;
- authorised inputs;
- source rules;
- evidence rules;
- output contract;
- Operational Gate relationship;
- human-review relationship;
- tool/connector permissions;
- memory/context rules;
- prohibited behaviours;
- escalation/fallback behaviour;
- prompt-chain hand-offs;
- version;
- tests; and
- regression requirements.

Prompts must remain subordinate to higher-order authority, source, evidence, boundary, workflow and human-decision controls.

External content must be treated as untrusted instruction unless the architecture explicitly grants it authority.

Prompts must not fabricate missing evidence, approvals, sources, dates, calculations, decisions or compliance status merely to complete an output.

## BG-12 — Prompt Architecture Gate

BG-12 passes only when prompt behaviour remains subordinate, testable and safely fallible.

---

# 18. Brick 13 — Adversarial and Contradictory Review

A Studio must actively try to discover why its own conclusion, output or control may be wrong.

The required artefact is the **Adversarial and Contradictory Review Protocol**.

Adversarial review must test, where relevant:

- contradictory evidence;
- assumptions;
- source authority and selection;
- claim strength;
- alternative explanations;
- boundary conditions;
- counterexamples;
- practical failure modes;
- false positives and false negatives;
- stakeholder harm;
- unfair impact;
- explainability failure; and
- consequence of error.

The review must be sufficiently independent and must be capable of changing the outcome.

A producer prompt should not automatically certify its own output.

A material hostile finding must trigger correction, qualification, additional research, gate failure, escalation, delay, withdrawal or abandonment as appropriate.

## BG-13 — Adversarial Resilience Gate

BG-13 passes only when hostile review is substantive rather than performative.

---

# 19. Brick 14 — Version and Change Control

A Studio must remain controlled as it changes.

The required artefact is the **Version and Change Control Record**.

Material changes must define:

- change request;
- classification;
- reason;
- affected components;
- upstream/downstream impact;
- affected Build Gates;
- Operational Gate revalidation;
- regression testing;
- approval authority;
- effective date;
- deployment; and
- rollback/containment where relevant.

Changes to model, connector, source, prompt, workflow, human authority, Assurance Tier, shared component or critical dependency may be material.

A local change must not be assumed to have only local consequences.

Prior released outputs must be reviewed where a material defect or changed controlling authority may invalidate them.

## BG-14 — Change Integrity Gate

BG-14 passes only when material change cannot silently alter the approved operating basis.

BG-14 is non-waivable.

---

# 20. Brick 15 — Release Criteria

Release is a separate act of trust and authority.

The required artefact is the **Release Criteria and Release Control Record**.

An output may move through states such as:

**Generated → Complete for Review → Gate-Passed → Approved for Release → Released**

Release criteria must confirm, where applicable:

- mandatory Operational Gates have passed;
- evidence is sufficient;
- controlling sources are current;
- required explanation is present;
- required AI-use transparency is present;
- required contestability information is present;
- defect thresholds are met;
- limitations are visible;
- exact output version is identified;
- required human approval is valid;
- release destination and audience are authorised;
- sensitive-information checks are complete;
- IP/licensing and attribution checks are complete;
- release metadata is complete; and
- withdrawal/correction is possible.

### Release-time Build-assumption validation

Operational Gate passage alone is insufficient. Before release, the Studio must also confirm that:

- Lifecycle Status permits operation;
- no relevant Build Gate is Failed, Reopened, Blocked or materially invalidated;
- Assurance Tier remains current;
- critical dependencies remain within approved conditions;
- required human authority remains valid;
- source/regulatory assumptions remain current; and
- no active incident or suspension condition blocks release.

Release refusal is a successful control outcome.

## BG-15 — Release Readiness Design Gate

BG-15 passes only when the Studio has a defensible and controlled release mechanism.

---

# 21. Brick 16 — Testing and Failure Cases

A Studio must prove correct behaviour under normal, incomplete, ambiguous, hostile and failure conditions.

The required artefact is the **Test and Failure Case Record**.

Every material Studio must maintain a representative test pack including, as applicable:

- known-good;
- known-bad;
- ambiguous;
- incomplete;
- contradictory;
- out-of-scope;
- gate-bypass;
- human escalation;
- stale source;
- prompt injection;
- connector failure;
- duplicate action;
- release blocking;
- false positive/false negative;
- end-to-end; and
- regression cases.

Expected outcomes must be defined before execution.

Testing must include at least one end-to-end case from intake to release or controlled refusal.

Material failed tests must create defects and return to the earliest brick responsible for the root cause.

## BG-16 — Operational Resilience Gate

BG-16 passes only when the Studio demonstrates safe behaviour under realistic and hostile conditions.

BG-16 is non-waivable.

---

# 22. Brick 17 — Maintenance, Review and Retirement

Approval is a point in time. Trustworthiness must be maintained through time.

The required artefact is the **Maintenance, Review and Retirement Plan**.

The Studio must define:

- accountable owner;
- periodic review cadence;
- event-triggered review;
- source/model/tool/connector review;
- prompt and workflow health;
- Operational Gate performance;
- incidents and defect learning;
- human override/rejection patterns;
- stakeholder complaints and contestability trends;
- operator competence/retraining;
- usefulness/value review;
- operational metrics where meaningful;
- internal assurance/audit for higher tiers where appropriate;
- management review for higher-tier or portfolio use;
- suspension;
- reactivation;
- retirement;
- access removal; and
- archival/successor rules.

Critical dependency degradation may trigger Restricted Operation, work-item blocking, Operational Gate blocking, Build Gate reopening, Assurance Tier reassessment, suspension or revalidation.

A Studio must not remain active merely because no local file changed if an external dependency has invalidated its approved operating basis.

## BG-17 — Lifecycle Integrity Gate

BG-17 passes only when continued ownership, review, suspension and retirement are governed.

---

# 23. Brick 18 — Studio Build Record and Final Approval

A Studio is not approved because its components exist. It is approved only when the complete architecture has been assembled, tested, challenged and consciously accepted by an authorised human.

The required artefact is the **Studio Build Record and Final Approval Record**.

The final Build Record must contain:

- Studio identity;
- owner;
- purpose and intended benefit;
- users and reliance;
- Assurance Tier;
- authoritative location;
- Brick 1–18 status;
- BG-01 to BG-18 status;
- Operational Gate inventory;
- Cross-Cutting Assurance Record;
- Stakeholder Impact Record where triggered;
- Risk Acceptance Context;
- Explainability Profile where triggered;
- Contestability Profile where triggered;
- dependency record;
- independent-review record;
- test summary;
- hostile-review summary;
- defects;
- exceptions;
- residual risks;
- operational baseline;
- effective date; and
- next review date.

Final review must test cross-brick coherence and contradictions.

The traceability chain is:

**Purpose → Authority → Sources → Boundaries → Output Standard → Gates → Evidence → Research → Workflow → Human Decisions → Records → Prompts → Adversarial Review → Change Control → Release → Testing → Lifecycle → Final Approval**

### Condition classes

- **C1 — Approval-blocking:** unresolved Critical defect, failed non-waivable Build Gate, unresolved authority/legal/privacy/security/safety blocker, missing mandatory approval, or unknown baseline. C1 blocks both Approved and Conditionally Approved status.
- **C2 — Bounded operational condition:** may permit Conditionally Approved status only when use is restricted, owner and expiry are defined, no non-waivable control is affected and the residual risk is authorised.
- **C3 — Post-approval improvement item:** non-material improvement that does not alter authority, safety, legality, privacy, evidence integrity or defined reliability.

### Independent assurance and final approval

Independent assurance reviewer and final approval authority are distinct roles.

The independent reviewer must be sufficiently competent and independent and able to require evidence, reject a proposed Pass, reopen gates and require remediation.

The final approver reviews the assurance evidence, residual risk and independent disposition and decides whether the Studio may become Approved.

The final approver may not override a non-waivable blocker.

## BG-18 — Final Studio Approval Gate

BG-18 may confer Studio Build Status **Approved** only when:

- all eighteen bricks have been assessed;
- all mandatory Build Gates have passed;
- material N/A decisions have survived challenge;
- required artefacts exist;
- cross-cutting assurance is complete;
- stakeholder/risk/explainability/contestability requirements are satisfied where triggered;
- testing and hostile review are complete;
- Critical defects are closed;
- Major defects are closed or validly handled where the Standard permits;
- residual risks are visible and within authorised risk acceptance;
- independent review requirements are satisfied;
- the exact operational baseline is identified; and
- an authorised human makes an explicit approval decision.

BG-18 is non-waivable.

---

# 24. Cross-Cutting Assurance Review

The Cross-Cutting Assurance Review is a mandatory overlay across the eighteen bricks. It is not BG-19.

Every Studio must assess applicability of:

1. legal and regulatory;
2. privacy and confidentiality;
3. information security;
4. safety and harm prevention;
5. fairness, discrimination and accessibility;
6. intellectual property, copyright and licensing;
7. records, retention and evidentiary obligations;
8. professional and ethical responsibility;
9. third-party/model/vendor/connector dependency;
10. business continuity, resilience and recoverability;
11. operator competence and authorised-use readiness;
12. data residency and jurisdiction where material;
13. stakeholder impact where triggered; and
14. environmental impact where material.

A local control is not effective if satisfying it creates a material uncontrolled failure elsewhere in the Studio.

For Tier 3 and Tier 4 Studios, material legal, privacy, security, professional or safety domains normally require specialist review.

---

# 25. Stakeholder Impact Assessment

A Stakeholder Impact Assessment is mandatory where the Studio may materially affect identifiable people, groups, communities or external parties.

The assessment must consider:

- stakeholder group;
- intended benefit;
- potential harm;
- severity and plausibility;
- reversibility;
- fairness/discrimination;
- accessibility;
- cultural/language implications;
- AI-use transparency where relevant;
- contestability need;
- controls; and
- residual impact.

The assessment must not hide materially different groups under a generic label such as "users".

---

# 26. Risk Acceptance Context

For Tier 2–4 Studios, material residual risk must be evaluated against an authorised Risk Acceptance Context.

Where a formal organisational risk appetite/tolerance framework exists, relevant criteria must be identified.

Where no formal framework exists, the authorised governance basis for accepting residual risk must be recorded.

The builder, prompt designer or AI system must not accept material residual risk unless that authority has been explicitly granted.

Risk acceptance records must identify risk category, inherent consequence, controls, residual risk, appetite/tolerance, unacceptable threshold, acceptance authority and escalation threshold.

---

# 27. Explainability and Interpretability

Where a Studio influences consequential human decisions, supports regulated/professional judgement, materially affects a person, or requires contestability, it must define an appropriate level of explanation.

The Studio should be able to explain, at an appropriate level:

- material information/evidence considered;
- governing source or decision criteria;
- principal factors influencing the recommendation/outcome;
- important assumptions;
- significant contradictory evidence;
- uncertainty and limitations;
- the role of AI;
- the role of human judgement; and
- material rationale for the final human decision.

Explainability does not require disclosure of hidden model chain-of-thought or private model scratchpad reasoning.

Where adequate explanation is required but cannot be produced, the Studio must reduce reliance, strengthen human review, narrow scope, block, escalate or prohibit the use as appropriate.

---

# 28. Contestability and Affected-Person Review

A formal contestability or human-review path is required where an AI-supported outcome may materially affect employment, assessment/qualification, recruitment, access, ranking, eligibility, legal/contractual position, regulated status, significant financial interest or comparable rights/interests.

Where applicable, the Studio must define:

- whether/how material AI involvement is disclosed;
- how correction/review/reconsideration may be requested;
- human review owner;
- evidence retained;
- decision status during challenge;
- final decision record; and
- how challenge patterns feed lifecycle review.

Contestability must produce genuine human review rather than a second automated pass that simply reproduces the original outcome.

---

# 29. Dependency Control

Every Studio must identify material dependencies that can affect authority, evidence, availability, security or output reliability.

Dependencies may include models, vendors, APIs, connectors, authentication providers, data stores, authoritative repositories, hosting platforms, specialist human roles, shared components and upstream/downstream Studios.

Trust, authority and approval are not inherited automatically from an upstream dependency.

Where an upstream Studio output is used, the receiving Studio must verify provenance, version, approval status, currency, limitations and suitability for the receiving purpose.

Shared-component change must trigger impact assessment across dependent Studios.

Tier 3 and Tier 4 Studios must identify material single points of failure and define fallback, restriction or suspension responses as appropriate.

For material third-party AI dependencies, due diligence should consider supplier terms, data processing, privacy, security assurances, model/version change, availability, subprocessors, vendor-supplied evidence, independent testing ability and exit/substitution path.

Vendor marketing claims do not establish assurance.

---

# 30. Independent Review

The Standard recognises four review-independence levels:

- **IR-0 — Self-review**
- **IR-1 — Separate-context review**
- **IR-2 — Independent human or functional review**
- **IR-3 — Strong independent assurance**

Minimum expectations:

- Tier 1: IR-0 or IR-1 unless triggered;
- Tier 2: IR-1, with IR-2 for material consequential use or triggers;
- Tier 3: IR-2 for material architecture, adversarial review and final assurance;
- Tier 4: IR-3 for critical domains or strengthened independent assurance as defined.

Regardless of tier, IR-2 or stronger is required where materially triggered by regulated/professional authority, rights impact, significant financial impact, high-reliance public/client claims, safety-critical use, major privacy/security implications, high-impact autonomous action, unresolved material contradiction, repeated major defects/incidents or material authority expansion.

Independence without competence is insufficient.

A review that cannot alter the outcome is advisory, not assurance.

---

# 31. Retention, Provenance and Privacy

The governing rule is:

> **Retain what must be retained, reference what need not be duplicated, and remove what no longer has a lawful or governance purpose.**

The order of consideration is:

1. law, regulation, court/tribunal requirement or legal hold;
2. binding contractual/professional retention obligation;
3. approved organisational records policy;
4. Studio-specific auditability/provenance need;
5. data minimisation and purpose limitation for anything not otherwise required.

Sensitive or restricted evidence should remain in approved secure systems where practical. Governance repositories may retain identifiers, secure location, version, custodian, classification, relevant section/timestamp, access authority and decision linkage rather than unnecessary copies.

Before deletion, the Studio must assess whether deletion would invalidate a release, gate, complaint, audit, investigation, legal hold or ability to reconstruct a consequential decision.

Retention does not imply broad access.

---

# 32. AI/Studio Portfolio Governance

Where an organisation operates multiple Studios, it should maintain an AI/Studio Portfolio Register appropriate to scale and risk.

The portfolio view should identify Studio/use-case ID, owner, purpose, Assurance Tier, Lifecycle Status, material dependencies, key risk domains, review date, shared components and systemic incident themes.

Portfolio governance should detect concentration risk, duplicated capability, shared dependency failures, recurring incidents and governance issues that no single Studio can see alone.

NEX-GOV-003 remains a Studio-building standard and is not by itself a complete enterprise AI management system.

---

# 33. AI-Use Transparency

Where AI materially contributes to an output or process, the Studio must determine whether disclosure is required or appropriate based on law, policy, professional obligations, contract, rights impact, materiality of AI contribution and likelihood that non-disclosure would mislead.

Disclosure is not required where prohibited or where AI contribution is immaterial and disclosure would add no meaningful information.

---

# 34. Operational Metrics and Management Review

Where meaningful, lifecycle monitoring should use measures that support decisions rather than vanity reporting.

Possible indicators include:

- Operational Gate failure rate;
- human override/rejection rate;
- citation/evidence defect rate;
- escalation frequency;
- correction/withdrawal rate;
- incident rate;
- false-positive/false-negative rate;
- dependency failure rate;
- drift indicators;
- timeliness/latency where material; and
- user usefulness/value.

Tier 3 and Tier 4 Studios should consider scheduled internal assurance review/audit and management review of incidents, overrides, resources, competence, systemic findings and improvement decisions.

---

# 35. Version, release and lifecycle of this Standard

This RC1 is a candidate normative master. It is not yet an Approved Standard.

The modular brick, remediation, forensic-review, self-assurance and test files remain controlled development evidence and historical provenance. They do not override this RC1 unless a later controlled finding explicitly returns RC1 for remediation.

Before NEX-GOV-003 v1.0 may become an Approved Standard, the following remain mandatory:

- independent IR-2 or stronger review;
- review of SA-08 and SA-16 evidence;
- confirmation or challenge of SAL-3 for the Standard itself;
- resolution of any new Critical or Major independent-review findings;
- explicit final approval record;
- identification of exact normative baseline;
- effective date; and
- next review date.

The Standard itself is governed through its **Standard Self-Assurance Profile**, not by pretending that the Standard is an operational Studio.

---

# 36. Nexus Studio Build Pack

Every new or materially changed Studio must use the approved Nexus Studio Build Pack or an approved equivalent preserving the same controls and traceability.

The Build Pack must capture or link the evidence required for:

- Studio Concept;
- Assurance Classification;
- Status/State Profile;
- Purpose and Authority;
- Source Hierarchy;
- Scope/Boundaries;
- Output Standard;
- Operational Gate Architecture;
- Evidence/Provenance;
- Research Protocol;
- Workflow;
- Human Decision Rights;
- Registers;
- Prompt Architecture;
- Adversarial Review;
- Change Control;
- Release Criteria;
- Test Pack;
- Lifecycle Plan;
- Cross-Cutting Assurance;
- Stakeholder Impact where triggered;
- Risk Acceptance Context;
- Explainability Profile where triggered;
- Contestability Profile where triggered;
- Dependency Record;
- Independent Review Record; and
- Final Approval.

The Standard defines the controls. The Build Pack proves they were applied.

---

# 37. Core rules

The following rules summarise the control philosophy of NEX-GOV-003:

> **Design backwards from trust.**

> **Bricks build the Studio. Build Gates prove the bricks. Operational Gates control the Studio's work.**

> **Capability does not equal authority.**

> **A gate cannot pass by assertion. It must pass by evidence.**

> **Research is complete when the evidence is sufficient for the decision, not when it supports the preferred answer.**

> **Human oversight is not the presence of a human. It is clear authority, meaningful judgement and retained accountability.**

> **Prompts implement governance. They do not invent governance.**

> **Confidence is earned when a conclusion survives serious challenge.**

> **Release refusal is a successful control outcome.**

> **Approval is a point in time. Trustworthiness must be maintained through time.**

> **A status has authority only over the object it was designed to describe.**

> **Trust is not inherited automatically from a dependency.**

> **A review that cannot alter the outcome is advisory, not assurance.**

> **Retain what must be retained, reference what need not be duplicated, and remove what no longer has a lawful or governance purpose.**

> **Trust requires awareness of who may be affected, explicit authority to accept residual risk, an understandable basis for consequential outcomes and a real path to challenge them.**

> **AI assists. Humans decide. GitHub records.**
