# Chapter 6 Detailed Brief v0.1 — Where Governance Actually Lives

**Book:** *AI Governance in Practice*  
**Author:** Alec Gardner  
**Date:** 2026-11-18  
**Status:** Detailed chapter brief locked for drafting  
**Target length:** 2,700–3,200 words

## Chapter role in the book

Chapter 5 established that an organisation must define the operational authority it permits an AI system to exercise. It ended with the recognition that an authority boundary recorded in an approval paper is not yet a boundary in operation.

Chapter 6 now moves the argument into the infrastructure of work.

It must show how governance decisions become practical through:

- data;
- identity;
- authentication and authorisation;
- permissions and access;
- configuration;
- workflow design;
- documentation;
- logging and provenance;
- monitoring and change control;
- contracts and supplier arrangements;
- restriction, withdrawal and alternative pathways.

The chapter's task is not to produce a technical-control catalogue. It is to make one organisational shift unmistakable:

> **Governance becomes real where the operating environment changes what people and systems can access, decide, do, record and reverse.**

The chapter must preserve the accompanying boundary:

> **Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.**

## Reader entry belief

Governance lives mainly in policies, committees, risk assessments and approval processes. Technology implements the system after the governance decision has been made.

A related assumption is that a recommendation-only system remains recommendation-only because the approval paper says so.

The chapter will destabilise both beliefs.

## Opening tension

Open with a composite supplier-onboarding system approved to assist procurement staff by reviewing documentation and recommending whether an application should progress.

The approval paper states that:

- the system may recommend but not decide;
- a procurement officer remains responsible for changing supplier status;
- higher-risk applications require specialist review;
- all consequential actions remain subject to human approval.

During a later control review, the organisation discovers that the operating environment tells a different story.

The system uses a service identity with write access to the supplier platform. A workflow automatically changes low-risk applications from *pending* to *approved*. The supposed human approval step is a notification sent after the status has changed. One data connection includes information outside the approved purpose. Logs record the final status but not the rule, model version or source data that produced it. The provider can update a component without the organisation receiving enough information to determine whether the decision boundary has changed.

Nobody has deliberately overridden the governance decision. The policy was never translated fully into the operating environment.

The opening question is:

> **Which arrangement governs the system: the approved decision, or the infrastructure through which the work actually occurs?**

The organisation and events must be identified lightly as composite. Avoid a dramatic breach or scandal. The tension comes from the ordinary gap between the approved model of work and the configured model of work.

## Dominant proposition

> **A governance boundary becomes real only when the operating environment supports, observes and preserves it.**

Book-level synthesis:

> **Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

Boundary proposition:

> **Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.**

These formulations are Gardner synthesis informed by established governance, security, accountability and socio-technical evidence. They are not presented as externally validated definitions.

## Primary reader discovery

The reader should discover that governance is distributed across apparently ordinary implementation choices:

- which identity the system uses;
- which records it can read or change;
- which tools it can invoke;
- where an approval sits in the workflow;
- whether a threshold triggers a recommendation, decision or action;
- which configuration is active;
- what is logged and retained;
- what a provider must disclose;
- who can change or revoke access;
- what happens when the system is restricted or unavailable.

These choices do not merely support governance. They can enact, enlarge, weaken or defeat it.

## Terminology and conceptual boundary

Use **governance infrastructure** as ordinary descriptive language, not as a proprietary framework or named Gardner construct.

In this chapter, governance infrastructure means the connected organisational and technical arrangements through which governance decisions acquire practical effect and leave reviewable evidence.

Do not imply that governance is reducible to technology. The chapter should consistently distinguish:

- governance intent;
- operational enactment;
- evidence of operating effectiveness.

A control can be designed, implemented and still fail in operation. A documented boundary can be accurate when approved and obsolete six months later. A technically enforced rule can consistently implement a poor decision.

## Narrative movement

### Movement 1 — The approval paper and the operating system disagree

Develop the supplier-onboarding scene.

Let the reader first encounter a system that appears compliant in documentation. Then reveal the service identity, automated status change, post-action notification, partial logs and provider update mechanism.

The reader should understand that no single actor necessarily behaved irresponsibly. Procurement approved one workflow, technology configured another, and the provider controlled part of the system that neither function could fully see.

Do not resolve the problem immediately. Allow the question of which arrangement is authoritative to sit with the reader.

### Movement 2 — Governance is enacted in ordinary infrastructure

Move from the scene to the larger insight.

Policies and approval decisions express intent. Infrastructure determines much of what is possible in practice. The identity, permission, workflow and configuration surrounding a system can preserve the approved boundary or quietly replace it.

Connect lightly to Chapter 5 without repeating the Delegated Authority Map. The map described what authority was intended. Chapter 6 asks what makes that authority real.

Introduce the dominant proposition only after the reader has experienced the mismatch:

> **A governance boundary becomes real only when the operating environment supports, observes and preserves it.**

### Movement 3 — Identity and access define practical authority

Use the supplier-onboarding service identity as the entry point.

The policy may describe a recommendation-only system, but a service account with write access can alter records. An AI component that can invoke an approval endpoint, update a customer profile or call another system possesses practical capacity beyond a system that can only read and recommend.

Bring in NIST's zero-trust principle carefully. The useful insight is explicit authentication and authorisation around resources, not a claim that zero trust is an AI governance framework.

Show how governance questions become concrete:

- Which identity does the system use?
- Which resources can that identity reach?
- What actions can it perform?
- Are permissions narrower than the system's technical capability?
- Are temporary, inherited or vendor-managed permissions visible?
- Who can grant, change or revoke them?

Do not produce an access-control manual. The organisational point is that identity and permissions are a practical expression of delegated authority.

Preserve the boundary:

> Access control determines what can be reached or changed; it does not determine whether the purpose is legitimate or the decision is sound.

### Movement 4 — Data is not merely an input

Shift from what the system may do to what it may know and use.

The supplier system may draw on company records, sanctions data, financial information, previous incidents and external sources. Each source carries questions of origin, quality, recency, representativeness, consent, confidentiality, intellectual property and permitted purpose.

Use Sambasivan et al.'s data-cascades research to show why neglected data work can become an organisational failure rather than a minor technical defect. Use Datasheets for Datasets and current Australian/EU guidance to support provenance and documentation.

Develop the core insight:

> The data environment shapes both what the system can know and what the organisation is entitled to let it use.

Avoid turning the chapter into a data-governance primer. Select two or three aspects that materially affect the running case: an external data field used outside its original purpose, an outdated supplier record and an undocumented transformation that changes risk classification.

Preserve the boundary that complete provenance does not guarantee fairness or correctness.

### Movement 5 — Workflow and configuration allocate decision rights

Return to the automatic status change.

The supposed human approval was located after the action, not before it. The approval paper and the workflow used the same word—approval—but described different events.

Show how practical authority can be encoded through:

- defaults;
- routing rules;
- thresholds;
- prompts or instructions;
- confidence cut-offs;
- exception conditions;
- tool connections;
- order of operations;
- placement of human review;
- whether the review can change the outcome.

Use Cobbe, Lee and Singh's reviewability argument to widen the focus beyond the model. The decision is a socio-technical process beginning before the output and continuing into action, review and remedy.

The chapter should make clear that workflow design is a governance decision even when it is described internally as process optimisation.

Preserve the counterpoint: not every rule should be hard-coded. Novel cases, legitimate professional discretion and context-sensitive judgement may require exceptions and escalation.

### Movement 6 — Documentation makes assumptions visible, not enforceable

Introduce model cards, datasheets and FactSheets as important bridges between technical work and organisational decision-making.

Explain what documentation can do:

- record intended use;
- describe tested conditions and performance;
- expose limitations and known risks;
- document data origin and composition;
- communicate supplier claims;
- provide a basis for approval, challenge and later review.

Then show its limit through the running case. The original system documentation may accurately describe a recommendation tool while the deployed workflow has evolved into bounded execution. The document is not false; it is stale.

The key distinction:

> A document can describe a boundary. It does not make the system obey it.

Avoid a catalogue of documentation formats. Use the evidence to support the organisational argument that documentation requires ownership, versioning, change triggers and connection to operating evidence.

### Movement 7 — Logs and provenance create the possibility of review

Move from what was intended to what can be reconstructed.

The supplier platform records that the status changed, but not which data, model version, rule, configuration and human or system interventions produced the change. The organisation can see the outcome but cannot reconstruct the decision path.

Use Singh, Cobbe and Norval on decision provenance and Cobbe, Lee and Singh on reviewability. Explain that logs and provenance can capture:

- relevant events;
- data flows;
- configurations and versions;
- system actions;
- human interventions;
- dependencies and downstream effects.

Then preserve the crucial boundary:

> Logs do not create accountability. They create part of the evidentiary basis through which accountability can be exercised.

Accountability also requires actors, standards, forums, judgement and consequences.

Represent the contrary evidence. Logging can be incomplete, fragmented or inaccessible. It may omit off-platform discussion or provider-side changes. Excessive logging can create privacy, security and retention risks. The chapter should argue for purposeful, proportionate records, not universal surveillance.

Do not fully develop assurance or the Evolved Governance Chain. Chapter 9 owns that synthesis.

### Movement 8 — Vendors are inside the governance system

Return to the provider update that can change behaviour without a fresh governance decision.

Show how third-party systems complicate governance:

- providers control components, training and updates;
- deployers control purpose, integration, local data, access and workflow;
- information may not cross organisational boundaries cleanly;
- contractual rights may determine whether the deployer receives test results, incident notices, version changes or audit information;
- the deployer may depend on a service it cannot fully inspect.

Use Australian guidance, NIST supply-chain controls, EU value-chain duties and FactSheets as visible evidence.

The chapter should not pretend that contracts solve opacity. Information rights can be incomplete, bargaining power uneven and proprietary limits real.

The organisational insight is:

> An organisation may outsource technology and operation without outsourcing responsibility for how the system is selected, configured and used.

### Movement 9 — Governance must include change and withdrawal

Build from Chapter 5's authority-drift concept without repeating its definition.

Access expands. Data changes. A provider updates the model. A workflow removes an approval. A threshold shifts. Any of these may alter the effective governance arrangement.

Show that the infrastructure must support:

- change detection;
- reassessment triggers;
- configuration and version control;
- incident response;
- restriction or rollback;
- revocation of access;
- safe suspension or decommissioning;
- alternative pathways where continuity matters.

Preserve the counterpoint that abrupt shutdown can create harm in critical or interdependent processes. The objective is safe withdrawal, not a theatrical stop button.

### Movement 10 — The danger of control-shaped false assurance

Introduce the deeper complication.

A technically configured control may enforce the wrong rule perfectly. A permission may be narrow in one system and broad in a connected one. A log may demonstrate that an event occurred without revealing whether the decision was legitimate. A model card may be complete but obsolete. A dashboard may be green because it is measuring the wrong condition.

Connect lightly to Chapter 2's false-assurance argument, but do not repeat the policy–practice discussion. Here the specific problem is operational:

- control designed;
- control implemented;
- control evidenced as effective.

These are different states.

Use Raji et al., Madaio et al. and Wieringa to reinforce that controls and artefacts depend on organisational roles, authority, incentives and consequences.

The chapter should not become anti-control. Its conclusion is that infrastructure must be tested and interpreted, not merely installed.

### Movement 11 — Where governance lives

Bring the chapter's domains together through the running case rather than a visible checklist.

The supplier system is governed not by any one artefact but by the combined arrangement:

- the approved purpose;
- the service identity;
- the data sources;
- the workflow;
- the threshold;
- the review point;
- the documentation;
- the logs;
- the provider agreement;
- the change and withdrawal process;
- the people responsible for interpreting and acting on them.

Now state the book-level synthesis:

> **Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

Immediately retain the boundary:

> **Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.**

### Movement 12 — Handoff to Chapter 7

End by exposing what infrastructure cannot do.

A control may generate an alert, but someone must understand why it matters. A log may reveal a pattern, but someone must challenge the system or escalate. An exception route may exist, but people must feel authorised and capable of using it. A provider may disclose a limitation, but the organisation needs the competence to interpret it.

The chapter should end without summarising its domains.

Preferred final question:

> **Can the people carrying accountability recognise when the control environment is no longer enough?**

This makes Chapter 7 — *Capability Before Compliance* — necessary.

## Evidence to appear visibly in prose

Use a disciplined selection rather than a literature parade.

### Primary and authoritative sources

- **NIST AI RMF Govern** — implemented governance, data governance, human–AI roles, monitoring, change, third-party systems and decommissioning.
- **NIST SP 800-207** — explicit authentication and authorisation; no implicit trust.
- **NIST SP 800-53 Rev. 5** — access, audit, configuration, identity, incident and supply-chain control families.
- **Australian Government Guidance for AI Adoption (2026)** — data/provenance, access, monitoring, supply-chain duties, intervention and alternative pathways.
- **EU AI Act consolidated text** — data governance, documentation, logging, human oversight, cybersecurity, quality management and value-chain duties, used with jurisdictional qualification.

### Academic sources

- **Raji et al. (2020)** — end-to-end internal algorithmic auditing.
- **Cobbe, Lee & Singh (2021)** — reviewability across the complete socio-technical decision process.
- **Singh, Cobbe & Norval (2019)** — decision provenance.
- **Mitchell et al. (2019)** — model cards.
- **Gebru et al. (2021)** — datasheets for datasets.
- **Arnold et al. (2019)** — supplier FactSheets.
- **Sambasivan et al. (2021)** — data cascades.
- **Madaio et al. (2020)** and **Wieringa (2020)** — organisational conditions and the wider accountability system.

## Evidence that should remain in the background unless required

Do not overload the chapter with:

- complete security-control catalogues;
- technical zero-trust architecture;
- full MLOps lifecycle engineering;
- detailed policy-as-code or runtime guardrails;
- AI bills of materials;
- cryptographic provenance;
- sector-specific logging schemas;
- multi-agent identity and permission protocols;
- the complete assurance architecture reserved for Chapter 9.

Recent preprints on telemetry-first governance, policy cards, AIBOMs and LLM audit trails remain in the monitoring record. They should not carry the core argument.

## Three-Layer Evidence Test

### Evidence establishes

- governance frameworks require implemented organisational processes, data controls, monitoring, change management and third-party governance;
- security standards operationalise identity, access, audit, configuration and supply-chain controls;
- documentation and provenance mechanisms support transparency and reviewability;
- organisational research shows that tools and controls depend on roles, incentives, workflows and authority;
- data and system dependencies can generate cascading operational problems.

### Reasonable interpretation

- governance decisions are partly encoded and enacted in infrastructure;
- access, workflow and configuration shape practical authority;
- documentation, logging and provenance shape what can later be reviewed and evidenced;
- supplier arrangements shape the information and controls available to the organisation;
- control effectiveness must be demonstrated rather than inferred.

### Gardner synthesis

> **A governance boundary becomes real only when the operating environment supports, observes and preserves it.**

> **Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

> **Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.**

## Originality and provenance integrity

Do not claim originality for:

- governance by design;
- zero trust or access control;
- data governance and provenance;
- model cards, datasheets or supplier declarations;
- decision provenance and reviewability;
- internal algorithmic auditing;
- configuration management, logging or supply-chain risk management;
- socio-technical governance.

The Gardner contribution is the book-level integration:

1. connecting delegated authority to the infrastructure that makes its boundaries real;
2. translating established technical and organisational controls into an executive governance argument;
3. linking governance intent, operational permission and evidentiary trace;
4. preserving the distinction between infrastructure as an enactment layer and governance as a wider institutional system;
5. creating the bridge from delegated authority to workforce capability and culture.

No new named framework is required.

## Practical value

The chapter should change the leadership question from:

> Have we approved and controlled this AI system?

To:

> **Which identities, permissions, data, workflows, records and supplier arrangements make our governance decision true in operation — and what evidence shows that they still do?**

Do not turn this into a compliance checklist. The reader should leave seeing the operating environment differently.

## Voice standard

The chapter should sound like Alec:

- calm and practical;
- comfortable with technical ideas without becoming a technologist's manual;
- attentive to how organisations actually work;
- sceptical of paper controls and green dashboards;
- equally sceptical of the idea that every problem can be solved through hard-coded enforcement;
- board-relevant but grounded in ordinary implementation decisions;
- evidence-aware and careful about jurisdiction.

Use engineering discipline: distinguish intended boundary, implemented control and evidenced effectiveness.

Avoid:

- a catalogue of security controls;
- jargon-heavy architecture prose;
- generic “governance by design” slogans;
- the implication that policy is irrelevant;
- the implication that technical control is always preferable to judgement;
- a long model-card or logging tutorial;
- premature assurance architecture;
- agentic-AI futurism.

## Book-prose and narrative controls

- Sustain the composite supplier-onboarding example across the chapter.
- Use headings sparingly in the published prose; the framework above is a drafting architecture, not a visible chapter structure.
- Let the reader discover governance infrastructure through the mismatch before explaining it.
- Prefer sustained paragraph movements.
- Avoid serial mini-essays on access, data, workflow and logs. Each domain should deepen the same running problem.
- Keep visible lists scarce.
- Use the dominant proposition only after it has been earned.
- The final question may remain as a scarce short paragraph.

## Repetition and chapter-boundary controls

Do not repeat:

- Chapter 1's visibility-of-use argument;
- Chapter 2's policy–control distinction in full;
- Chapter 3's Accountability–Control Gap diagnosis;
- Chapter 4's Meaningful Accountability Test;
- Chapter 5's full Delegated Authority Map;
- Chapter 7's capability and culture argument;
- Chapter 9's assurance and complete evidentiary chain;
- Chapter 10's detailed agent identity and multi-agent governance.

Chapter 6 owns one job:

> **Show how governance intent becomes operationally real — or fails to — through the infrastructure of work.**

## Visual possibility

Potential later visual:

### Where Governance Lives

A restrained, Kindle-legible diagram showing one governance decision connected to:

- Data
- Identity and permission
- Workflow and configuration
- Documentation and provenance
- Monitoring and change
- Supplier arrangements

A surrounding band would show human accountability and judgement.

Do not build the final visual before the prose establishes whether it clarifies the argument. The visual must not imply that the listed infrastructure domains are exhaustive or that governance is purely technical.

## Drafting and review plan

### First draft

Draft Chapter 6 v0.1 at approximately 2,700–3,200 words.

### Developmental review

Test:

- whether the opening is distinct from Chapter 5's customer-service authority-drift case;
- whether infrastructure is shown as enactment rather than a technical catalogue;
- whether the chapter sustains one argument;
- whether the running supplier example creates continuity;
- whether evidence appears naturally;
- whether the Chapter 7 boundary is preserved;
- whether the ending creates forward pressure.

### Evidence review

Run Forensic Evidence Survival on:

- identity/access and practical authority;
- data provenance and rights;
- workflow/configuration and decision rights;
- documentation limitations;
- logging/provenance and reviewability;
- vendor/supply-chain governance;
- control-effectiveness and false-assurance boundaries;
- the infrastructure-not-whole-governance proposition.

### Theory review

Confirm that the chapter's formulations remain Gardner synthesis informed by established evidence and do not claim a new technical governance framework.

## Drafting gate

- [x] M3 research brief complete
- [x] Evidence gate passed
- [x] Scite publication verification complete
- [x] Contrary and boundary evidence incorporated
- [x] Chapter role fixed
- [x] Dominant proposition fixed
- [x] Opening tension fixed
- [x] Evidence visibility requirements fixed
- [x] Originality boundary fixed
- [x] Chapter 7 and Chapter 9 boundaries fixed
- [x] No new named construct requiring approval

**STATUS: SAFE TO DRAFT**
