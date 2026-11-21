# Chapter 6 Research Brief v0.1 — Where Governance Actually Lives

**Book:** *AI Governance in Practice*  
**Author:** Alec Gardner  
**Date:** 2026-11-18  
**Materiality:** M3 — publication evidence control  
**Execution mode:** Nexus Evidence Engine using Firecrawl, Scite, official-source retrieval and GitHub; no Deep Research run claimed  
**Human decision owner:** Alec Gardner  
**Research outcome:** **EVIDENCE PASS / SAFE TO DEVELOP DETAILED CHAPTER BRIEF**

## Research question

How do organisational decisions about AI authority, risk and accountability become operational through data, identity, access, configuration, workflow, documentation, logging, supply-chain arrangements and lifecycle controls — and what are the limits of treating infrastructure as governance?

## Chapter role

Chapter 5 established that organisations must define the operational authority they permit AI to exercise. It ended with a practical problem:

> A boundary written in an approval paper is not yet a boundary in operation.

Chapter 6 must show how governance decisions become real in the infrastructure of work.

The chapter moves the reader from:

> What authority have we authorised?

To:

> **What in the operating environment actually makes that authority possible, constrained, observable, reviewable and revocable?**

The chapter must also preserve a critical boundary:

> Governance is partly enacted through infrastructure. It is not reducible to infrastructure.

Policies, roles, professional judgement, challenge, culture and assurance remain necessary. Technical and workflow controls give organisational decisions operational force; they do not replace the people and institutions responsible for those decisions.

## Concise evidence answer

The evidence supports the proposition that AI governance becomes operational through a connected control environment that includes:

- data quality, provenance, rights and permitted use;
- identities, authentication, authorisation and access limits;
- system and model configuration;
- workflow position, defaults, thresholds and approval points;
- documentation of intended use, tested conditions and limitations;
- logging, traceability and decision provenance;
- monitoring, testing, incident response and change control;
- contracts, information rights and third-party responsibilities;
- override, restriction, rollback, alternative pathways and decommissioning.

These mechanisms determine what people and systems can access, what they may do, what evidence survives and whether a governance decision can be enforced or reconstructed.

The evidence also shows that infrastructure is not self-executing governance. Controls may be misconfigured, bypassed, outdated, too broad, too rigid or poorly aligned to actual work. Documentation can become a stale snapshot. Logs can omit relevant context. Vendor opacity can prevent meaningful challenge. Technical restrictions can create false assurance or remove legitimate professional discretion.

The defensible governing proposition is therefore:

> **Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

This is Gardner synthesis informed by established governance, security, accountability and socio-technical research. It is not presented as a new external definition of AI governance.

## Primary and authoritative evidence

### NIST AI Risk Management Framework — Govern

The NIST Govern Playbook treats governance as implemented organisational practice rather than document possession. Relevant outcomes require organisations to:

- establish and implement policies, processes, procedures and practices;
- align AI governance with data governance, testing, monitoring, auditing, change management and incident response;
- define roles, responsibilities and delegated authorities;
- document human–AI roles, system scope, assumptions, limitations and dependencies;
- establish inventories and processes for data generation, ingestion, storage, transformation and security;
- manage third-party systems and supply-chain risks;
- monitor performance and impacts;
- provide appeal, override and adjudication mechanisms;
- plan for decommissioning and safe withdrawal.

**Evidence contribution:** organisational governance decisions require operational mechanisms, records and lifecycle controls.

**Boundary:** the AI RMF is voluntary and context-sensitive. NIST confirmed in 2026 that AI RMF 1.0 is under revision, so the final manuscript must recheck current wording before publication.

### NIST SP 800-207 — Zero Trust Architecture

NIST's zero-trust architecture rejects implicit trust based solely on network location or ownership. Access to resources requires explicit authentication and authorisation, with security focused on users, assets and resources rather than a trusted perimeter.

**Evidence contribution:** identity and access design determine practical authority. A policy statement does not constrain system action if identities and permissions allow something broader.

**Boundary:** zero trust is a cybersecurity architecture, not a complete AI governance model. Its principles support the access-control claim but do not settle questions of fairness, purpose, legitimacy or organisational judgement.

### NIST SP 800-53 Rev. 5

NIST's control catalogue includes control families for:

- access control;
- audit and accountability;
- configuration management;
- identification and authentication;
- incident response;
- system and information integrity;
- supply-chain risk management;
- privacy and risk assessment.

**Evidence contribution:** operational governance relies on control families that shape access, configuration, evidence, change and third-party dependencies.

**Boundary:** the controls must be selected, tailored, implemented and tested according to context. Possessing a control catalogue does not establish operating effectiveness.

### Australian Government Guidance for AI Adoption — implementation guidance

Current Australian guidance requires organisations to assign accountability across internal and third-party roles and to define the competencies, authority and resources required. It also covers:

- system scope, intended use and foreseeable misuse;
- data quality, data/model provenance, usage rights, privacy and cybersecurity;
- AI registers containing technical components, datasets, test results, risk plans and audit requirements;
- tool and system access controls;
- testing, monitoring and response processes;
- human oversight, intervention, pause mechanisms and dynamic guardrails;
- supply-chain information sharing and contractual requirements;
- decommissioning criteria and alternative pathways for critical functions.

**Evidence contribution:** governance is enacted through a combination of organisational, data, technical, workflow, supplier and lifecycle mechanisms.

**Boundary:** the material is guidance rather than a universal legal rule. It is authoritative for Australian practice and a strong implementation example for international readers.

### European Union AI Act — consolidated text as at 27 July 2026

For systems within its scope, the consolidated EU AI Act contains requirements concerning:

- data and data-governance practices;
- technical documentation;
- automatic logging and record retention;
- transparency and instructions for use;
- human-oversight interfaces;
- accuracy, robustness and cybersecurity;
- quality-management systems;
- responsibilities across the AI value chain;
- monitoring, incident reporting and post-market review.

**Evidence contribution:** current binding regulation treats data, documentation, logging, interfaces, cybersecurity, quality management and value-chain responsibilities as part of AI governance and compliance.

**Boundary:** the Act is jurisdiction- and scope-specific, with staged application dates. The chapter should use it as a regulatory mirror rather than universalise its requirements.

## Academic evidence

### Internal algorithmic auditing

Raji et al. (2020) present internal algorithmic auditing as an end-to-end organisational process linking declared principles to engineering practice across the AI lifecycle. Their framework includes documentation, risk identification, testing, accountability and decisions about whether a system should proceed.

**Evidence contribution:** governance must be integrated into development and deployment processes rather than added after a model is complete.

### Reviewable automated decision-making

Cobbe, Lee and Singh (2021) argue that accountability should consider the complete socio-technical decision process, including commissioning, development, operation and points of review or intervention. Model-focused explanation alone may omit the organisational and technical conditions that shape a decision.

**Evidence contribution:** governance infrastructure includes the full workflow, not merely the model or final output.

### Decision provenance

Singh, Cobbe and Norval (2019) propose decision provenance to capture the data flows, dependencies, contexts, processing steps and flow-on effects that lead to decisions and actions.

**Evidence contribution:** logs and provenance can make complex decision pipelines more inspectable, support reconstruction and reveal distributed dependencies.

**Boundary:** provenance records do not automatically establish legitimacy, accuracy or accountability. They must be interpretable, accessible and connected to a forum capable of acting on them.

### Documentation artefacts

Model Cards (Mitchell et al., 2019), Datasheets for Datasets (Gebru et al., 2021) and AI FactSheets (Arnold et al., 2019) provide structured ways to record intended use, performance, data origin, composition, limitations, safety, security and provenance.

**Evidence contribution:** documentation can translate implicit technical and organisational knowledge into inspectable artefacts for developers, deployers, users, auditors and suppliers.

**Boundary:** documentation is both useful and limited. It may be incomplete, voluntary, outdated or disconnected from runtime operation. A document describes a condition; it does not necessarily enforce it.

### Data cascades

Sambasivan et al. (2021) provide empirical evidence that undervalued and poorly resourced data work can create cascading failures in high-stakes AI systems.

**Evidence contribution:** data quality, collection, labelling, maintenance and context are governance concerns, not merely preparatory technical work.

**Boundary:** the study does not imply that every data defect produces systemic harm. It supports attention to organisational investment, role clarity and lifecycle data management.

### Organisational implementation

Madaio et al. (2020) show that fairness checklists and similar operational tools are shaped by organisational roles, incentives, workflows and authority. Wieringa's (2020) review of algorithmic accountability similarly emphasises actors, forums, standards, information and consequences.

**Evidence contribution:** artefacts and controls work only within an institutional arrangement that determines who uses them, what authority follows and what consequences attach.

## Evidence by infrastructure domain

### 1. Identity, access and permissions

**Evidence establishes:**
- access to resources should be explicitly authenticated and authorised;
- AI systems, agents and service identities can exercise only the practical access granted through credentials, roles and permissions;
- access-control, identity and authentication mechanisms are established security-control families;
- Australian guidance explicitly includes tool and system access controls.

**Reasonable interpretation:**
The practical authority of an AI system is partly defined by the identities it uses and the resources those identities can access or change.

**Safe formulation:**
> A governance boundary is not operational where system identities and permissions enable actions outside it.

**Unsafe formulation:**
> Least privilege alone makes an AI system responsibly governed.

Access control says what can be reached or changed. It does not determine whether the purpose, decision or consequence is legitimate.

### 2. Data quality, provenance and rights

**Evidence establishes:**
- data governance includes origin, collection, preparation, transformations, assumptions, representativeness, bias, gaps and permitted use;
- dataset documentation supports communication between data creators and consumers;
- neglected data work can create downstream cascades;
- privacy, confidentiality, intellectual property and contractual rights affect lawful and responsible use.

**Reasonable interpretation:**
The data environment shapes both what an AI system can know and what the organisation is entitled to let it use.

**Safe formulation:**
> Data provenance, quality and usage rights are part of the governance infrastructure because they condition the legitimacy, reliability and scope of AI-enabled work.

**Unsafe formulation:**
> Complete provenance guarantees reliable or fair outcomes.

### 3. Workflow and configuration

**Evidence establishes:**
- governance frameworks require documented human–AI roles, delegated authority, change management and monitoring;
- reviewability applies to the complete decision process;
- access, defaults, thresholds, routing rules, prompts, tool connections and approval steps affect how a system operates.

**Reasonable interpretation:**
Workflow and configuration encode practical decision rights. They can preserve or defeat the authority boundary approved in Chapter 5.

**Safe formulation:**
> A workflow can quietly allocate authority through defaults, routing, thresholds and the point at which human approval is required.

**Unsafe formulation:**
> Every governance rule should be hard-coded.

Some requirements depend on professional judgement, contextual interpretation and legitimate discretion.

### 4. Documentation

**Evidence establishes:**
- model, dataset and supplier documentation can record intended use, performance, limitations, provenance and safety/security claims;
- documentation supports audit, deployment decisions and communication across organisational boundaries.

**Reasonable interpretation:**
Documentation is a governance interface between technical work and organisational decision-making.

**Safe formulation:**
> Documentation can make assumptions, limitations and responsibilities visible enough to challenge and review.

**Unsafe formulation:**
> A completed model card or system card proves that the system is well governed.

### 5. Logging, traceability and decision provenance

**Evidence establishes:**
- logs and provenance can record system events, data flows, dependencies, configurations and actions;
- reviewable systems require records that allow decisions and processes to be reconstructed;
- current regulation requires logging for defined high-risk uses.

**Reasonable interpretation:**
Without proportionate records, monitoring, investigation, contestability and assurance become substantially weaker.

**Safe formulation:**
> Logs and provenance are evidence infrastructure: they help the organisation reconstruct what occurred, under which configuration and with which human or system interventions.

**Unsafe formulation:**
> Logging creates accountability.

Accountability also requires identifiable actors, standards, forums, judgement and consequences. Logs may be incomplete, fragmented, inaccessible or excessive.

### 6. Third-party and supply-chain arrangements

**Evidence establishes:**
- AI systems depend on providers, data sources, software components, cloud services and downstream integrations;
- primary guidance requires roles, information sharing, contractual responsibilities, monitoring and incident coordination across the value chain;
- supplier documentation can communicate claims and limitations.

**Reasonable interpretation:**
An organisation may outsource components and operations without outsourcing responsibility for how the system is selected, integrated, configured and used.

**Safe formulation:**
> Vendor governance requires practical information and control rights, not merely procurement approval.

**Unsafe formulation:**
> Deployers can always inspect or control the provider's model and supply chain.

Provider opacity, intellectual-property limits, platform changes and bargaining power may constrain visibility and control.

### 7. Change, withdrawal and alternative pathways

**Evidence establishes:**
- AI governance frameworks require monitoring, change management, incident response, override and decommissioning;
- current Australian guidance requires criteria and alternative pathways where critical functions depend on AI;
- system dependencies and workflow integration can make abrupt shutdown harmful.

**Reasonable interpretation:**
Governance infrastructure must support safe restriction, rollback, replacement or withdrawal, not only deployment.

**Safe formulation:**
> A control environment is incomplete if the organisation cannot safely narrow, suspend or retire the authority it has created.

**Unsafe formulation:**
> Every AI system needs a single emergency stop button.

## Challenge and contrary evidence

### Technical controls can create false assurance

A configured control may be misapplied, disabled, bypassed or inconsistent across connected systems. A policy-enforcement point can enforce the wrong rule perfectly. Control existence is not the same as control effectiveness.

**Implication:** distinguish designed control, implemented control and evidenced operating effectiveness.

### Documentation can become a stale snapshot

Model cards, datasheets and supplier declarations capture information at a point in time. They may not record later updates, configuration changes, workflow reuse or the reasons for governance decisions.

**Implication:** documentation requires ownership, versioning, change triggers and connection to operational evidence.

### Logs can be incomplete or harmful

Logging may fail to capture human reasoning, off-platform communication, vendor-side changes or relevant context. Extensive logging can also create privacy, security, retention and access risks.

**Implication:** log deliberately and proportionately. Record what is needed for review, investigation and assurance rather than collecting everything indefinitely.

### Hard-coded rules can remove legitimate judgement

Not every policy can or should become a rigid technical constraint. Novel cases, professional discretion and changing context may require human interpretation and exception handling.

**Implication:** infrastructure should preserve appropriate discretion and escalation rather than eliminate judgement in the name of consistency.

### Vendor controls can remain opaque

Contracts and documentation can improve visibility but cannot guarantee access to proprietary models, complete data lineage or timely notice of platform changes.

**Implication:** understand residual dependence, negotiate information/change rights where possible and maintain contingency or alternative pathways for material uses.

### Infrastructure is not culture or capability

A well-configured environment cannot guarantee that people notice warning signs, challenge defaults, understand evidence or use escalation mechanisms.

**Implication:** Chapter 6 must end by exposing the need for the capability and culture developed in Chapter 7.

## Three-Layer Evidence Test

### Evidence establishes

- governance frameworks require implemented processes, roles, data controls, monitoring, change management and third-party governance;
- security standards operationalise identity, access, audit, configuration and supply-chain controls;
- documentation and provenance mechanisms improve transparency and reviewability;
- organisational studies show that artefacts depend on roles, incentives, workflows and institutional conditions;
- data and system dependencies can generate cascading operational problems.

### Reasonable interpretation

- governance decisions are partly encoded or enacted in infrastructure;
- access, workflow and configuration determine practical authority;
- documentation, logging and provenance determine what can later be reviewed and evidenced;
- supplier arrangements determine which information and controls remain available;
- control effectiveness must be tested rather than inferred.

### Gardner synthesis

> **Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.**

Supporting formulation:

> **Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.**

## Originality and provenance boundary

The chapter does not claim originality for:

- governance by design;
- access control or zero trust;
- data governance and provenance;
- model cards, datasheets or supplier declarations;
- decision provenance and reviewability;
- internal algorithmic auditing;
- configuration management, logging or supply-chain risk management;
- socio-technical governance.

The Gardner contribution is the book-level integration:

1. connecting the Delegated Authority Map to the infrastructure that makes its boundaries real;
2. translating established technical and organisational controls into an executive governance argument;
3. showing that governance intent, operational permission and evidentiary trace must remain aligned;
4. preserving the distinction between infrastructure as an enactment layer and governance as a wider institutional system;
5. creating the bridge from delegated authority to workforce capability and culture.

No separate named framework is required in Chapter 6.

## Claims safe to use

- AI governance is partly enacted through data, identity, permissions, configuration, workflow, logging and supplier arrangements.
- Identity and access design shape practical AI authority.
- Data quality, provenance and usage rights are governance concerns.
- Workflow defaults, thresholds and approval points can encode decision rights.
- Documentation supports governance but does not itself enforce or prove control.
- Logging and provenance support reviewability but do not create accountability by themselves.
- Vendor governance requires information, change, incident and control arrangements across the supply chain.
- Controls must be monitored, tested and revised when operating conditions change.
- Decommissioning and alternative pathways are part of governance design.
- Governance remains socio-technical: people, roles, culture, judgement and assurance remain essential.

## Claims requiring qualification

- Technical enforcement is not appropriate for every governance requirement.
- Complete data provenance may be impractical or unavailable.
- Logs may be partial and can create privacy or security risks.
- Vendor contracts do not guarantee practical transparency or control.
- A technically enforced rule may still embody a poor or illegitimate policy.
- Infrastructure does not remove the need for human capability, challenge and exception handling.
- EU requirements apply only within their legal scope and according to staged commencement dates.

## Chapter boundary

Chapter 6 owns:

- data, identity, access and permissions as governance infrastructure;
- configuration and workflow as operational expressions of authority;
- documentation, logging and provenance as reviewability infrastructure;
- vendor and supply-chain dependencies;
- technical controls, monitoring, change and decommissioning;
- the boundary that governance is enacted through, but not reducible to, infrastructure.

Chapter 6 should not fully develop:

- AI literacy, professional judgement, escalation confidence and culture — Chapter 7;
- enabling versus coercive formalisation — Chapter 8;
- full assurance, evidence proportionality and the Evolved Governance Chain — Chapter 9;
- agent identity, multi-agent permissions and runtime agent governance at full depth — Chapter 10.

## Narrative opportunities

### Opening tension

Use a composite procurement or supplier-onboarding system that has been approved as recommendation-only. During a control review, the organisation discovers that:

- the service identity has write access to supplier records;
- a workflow automatically changes status for low-risk applications;
- the supposed approval step is a notification sent after the action;
- vendor logs are incomplete or retained for too short a period;
- a model or platform update can change behaviour without a fresh governance decision.

Nobody has deliberately ignored the policy. The policy was never fully translated into the operating environment.

The opening question becomes:

> **Which arrangement governs the system: the approved decision, or the infrastructure through which the work actually occurs?**

### Reader discovery

The reader discovers that governance is distributed across ordinary technical and organisational choices:

- which identity the system uses;
- which data it can retrieve;
- which tools it can invoke;
- where approval sits in the workflow;
- what is logged;
- what a supplier must disclose;
- what happens when conditions change.

### Dominant proposition

> **A governance boundary becomes real only when the operating environment supports, observes and preserves it.**

This is a chapter-level formulation of the wider Gardner synthesis, not a separate named construct.

### Ending movement

The chapter should end after establishing that controls can be perfectly documented and technically available while remaining ineffective if people cannot understand, challenge or use them.

That leads directly to Chapter 7:

> **Can the people carrying accountability recognise when the control environment is no longer enough?**

## Monitoring triggers

Recheck before publication if:

- NIST releases the revised AI RMF or materially changes the Govern outcomes;
- NIST updates SP 800-207 or SP 800-53 in ways material to identity, access, logging or supply-chain controls;
- EU AI Act implementation guidance or harmonised standards materially change the interpretation of data, logging or value-chain duties;
- Australia introduces mandatory AI governance requirements or materially revises the implementation guidance;
- stronger empirical evidence emerges on runtime governance, AI audit trails or policy-as-code;
- model-card, dataset-documentation or AI-bill-of-materials standards become widely adopted or formally standardised.

## Human decision gate

No new named construct or doctrine requiring separate author approval emerged from the research.

Alec retains final judgement over the chapter-level governing language, but the current evidence does not require a pause before the detailed chapter brief.

## Gate outcome

### Evidence

**PASS**

The evidence supports the chapter's core argument and its major domains.

### Doctrine integrity

**PASS**

The synthesis clearly distinguishes evidence, interpretation and Gardner argument.

### Originality

**PASS WITH QUALIFICATION**

The component ideas are established. The distinctive contribution is their integration into the book's delegated-authority and meaningful-accountability architecture.

### Drafting decision

**SAFE TO DEVELOP THE DETAILED CHAPTER BRIEF.**
