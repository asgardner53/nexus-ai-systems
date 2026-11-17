# Chapter 5 Research Brief v0.1 — What Have We Actually Allowed the AI to Do?

**Book:** *AI Governance in Practice*  
**Author:** Alec Gardner  
**Date:** 2026-11-18  
**Materiality:** M3 — publication evidence and original-construct provenance control  
**Execution mode:** Nexus Evidence Engine using Firecrawl, Scite, official-source retrieval and GitHub; no Deep Research run claimed  
**Human decision owner:** Alec Gardner  
**Research outcome:** **EVIDENCE PASS / ORIGINALITY CONDITIONAL PASS / HUMAN DECISION REQUIRED BEFORE DETAILED BRIEF**

## Research question

How should an organisation define, bound, monitor and revoke the operational authority it permits an AI system to exercise, while preserving meaningful human accountability?

## Chapter role

Chapters 3 and 4 established two propositions:

- **Delegation does not transfer accountability.**
- Accountability is meaningful only where capability, visibility, authority, intervention capacity and responsibility remain adequately aligned.

Chapter 5 must now examine the other side of that arrangement. If meaningful accountability depends on what humans can still know and do, the organisation must be explicit about what the AI has been allowed to do without fresh human judgement.

The chapter should move the reader from asking:

> Is this AI tool approved?

To asking:

> **What operational authority has the organisation permitted this system to exercise, within what boundaries, under what controls, and who can revoke it?**

## Concise evidence answer

The evidence does not support treating AI autonomy as one simple ladder from “human” to “machine”. Automation can operate at different stages of a decision and at different levels within each stage. A system may independently collect and analyse information while lacking authority to select or execute an action. Another may operate within a narrow transactional boundary but be prohibited from reframing the objective, changing the rules or acting outside a defined population.

The defensible governance unit is therefore not the product label or a single autonomy score. It is the **specific operational authority delegated for a defined function and context**.

Current evidence supports six practical conclusions:

1. **Capability does not confer authority.** A system's technical ability to perform an action does not establish organisational permission to perform it.
2. **Authority is function-specific.** Framing, analysing, recommending, prioritising, deciding, executing, adapting and learning may carry different permissions.
3. **Delegation is context-specific.** Risk, ambiguity, consequence, uncertainty, scale, speed and reversibility affect what may reasonably be delegated.
4. **Delegated authority requires an operating boundary.** Purpose, data, tools, people, resources, transactions, time and escalation conditions must be explicit.
5. **Authority must remain reviewable and revocable.** Monitoring, pause, override, rollback, restriction and decommissioning are part of the delegation design.
6. **Accountability remains organisational.** Authority may move into systems and workflows; responsibility for authorising and governing that movement does not disappear.

## Foundational academic evidence

### Types and levels of automation

Parasuraman, Sheridan and Wickens distinguish automation across different information-processing functions, including information acquisition, information analysis, decision and action selection, and action implementation. Their work demonstrates why automation should not be described by one undifferentiated level. A system can be highly automated in one function and tightly constrained in another.

Endsley and Kaber similarly show that automation level affects performance, situation awareness and workload in different ways. Higher automation may improve routine performance while reducing awareness or recovery capacity in some settings. The effect is not universal and varies with task and environment.

**Evidence contribution:** delegation should be mapped by function and context rather than treated as a single product-level autonomy label.

### Flexible delegation and variable autonomy

Miller and Parasuraman's delegation-interface work treats task allocation between humans and automation as adjustable rather than fixed. Variable-autonomy research likewise argues that meaningful human control may require the allocation of control to change as conditions change.

**Evidence contribution:** delegated authority should be capable of tightening, loosening, deferring or returning to humans according to context and system state.

### Ability, authority, responsibility and control

Flemisch and colleagues distinguish human and machine ability, authority, responsibility and control. Cavalcante Siebert and colleagues apply that relationship to AI, including the need for explicit operating domains and responsibility commensurate with ability and authority.

**Evidence contribution:** technical capability, authorised decision rights and accountability are related but separate organisational design choices.

### Human–autonomy teaming

Human–autonomy teaming research treats autonomy as a relationship within a socio-technical system rather than a property belonging only to the machine. Roles, coordination, workload, trust, situation awareness and shared understanding affect whether the allocation works.

**Evidence contribution:** the map must capture the surrounding human and organisational arrangement, not merely machine independence.

## Current organisational and governance evidence

### MIT CISR — frame, act and learn

MIT CISR's 2026 executive research divides decisions into three activities:

- **Frame** — define the problem, assumptions, stakeholders, constraints and success criteria.
- **Act** — gather information, generate and evaluate options, recommend or authorise action, and execute approved steps.
- **Learn** — monitor outcomes, maintain accountability and update the decision system.

The research also uses risk and ambiguity to distinguish routine, consequential, exploratory and strategic decisions. It argues that human and AI participation should shift across these activities and decision types.

**Evidence contribution:** authority can be allocated differently within a single decision. Delegating execution does not necessarily delegate framing or learning.

**Boundary:** the evidence is based on 30 interviews with 27 executives across nine organisations. It is valuable current practitioner research, not a universal causal model.

### NIST AI RMF Govern

NIST requires organisations to define roles, responsibilities and delegated authorities; align risk management to risk tolerance; document appropriate human involvement; monitor system performance; provide override and adjudication processes; manage change; and decommission systems safely.

**Evidence contribution:** delegated authority must be documented, monitored, course-corrected and linked to clear accountability.

**Currency boundary:** AI RMF 1.0 is being revised. The source must be checked again before publication.

### OECD AI Principles

The OECD recognises that AI systems differ in autonomy and adaptiveness. It requires accountability based on role, context and ability to act, and calls for mechanisms that allow systems to be overridden, repaired or safely decommissioned where necessary.

**Evidence contribution:** delegated authority must remain compatible with human agency, traceability, lifecycle risk management and safe withdrawal.

### Australian Government Guidance for AI Adoption

The 2026 Australian guidance requires organisations to define intended uses, foreseeable misuse, capabilities, limitations, context, accountability, human control, intervention, pause mechanisms, dynamic guardrails, tool and system access controls, monitoring and decommissioning criteria.

**Evidence contribution:** organisational permission should be expressed through explicit scope, access, controls and lifecycle decisions, not inferred from system capability.

## Contemporary prior art

### Human-AI governance configuration

Engin's 2026 Human-AI Governance framework distinguishes decision authority, process autonomy and accountability configuration. This is material prior art for any framework that maps authority allocation.

### Workplace roles — assistant, arbiter and manager

Lee, Lee and Mutlu's 2026 workplace study identifies AI operating as assistant, arbiter and manager. It describes accountability-authority asymmetry where workers may carry responsibility while authority shifts toward AI.

This evidence is particularly relevant, but it is extremely recent. It should support and monitor the argument rather than carry it alone.

### Sector-specific autonomy models

Recent cybersecurity and healthcare frameworks map autonomy according to risk, task complexity, trust, verification and human involvement. These demonstrate the practical demand for calibrated authority, while also showing why a single universal autonomy scale is unlikely to fit every sector.

### Capability versus permission

A 2026 preprint explicitly separates what an agent can do from what it is authorised to do. The concept is highly relevant and materially limits any claim that this distinction is newly discovered. Because the work remains a recent preprint, it should be monitored and acknowledged in the provenance record rather than used as a core evidentiary foundation.

## Challenge and contrary evidence

### More automation can be appropriate

The chapter must not imply that human approval is required before every action. For some low-ambiguity, bounded and reversible decisions, automated execution may improve consistency, speed and service without weakening accountability, provided the operating boundary and monitoring are sound.

### Human approval can create friction without control

Mandatory approval can slow work, overload reviewers or create ritual sign-off. Human presence is not the objective. The objective is an allocation of authority that matches consequence, uncertainty and the conditions for meaningful accountability.

### Autonomy is not identical to risk

A system may operate autonomously in a narrow, low-consequence domain, while a recommendation-only system may materially shape a high-consequence decision. Autonomy level alone cannot determine governance intensity.

### Linear ladders can conceal mixed configurations

A system may:

- gather and analyse information autonomously;
- recommend but not decide;
- execute only pre-authorised actions;
- adapt operational tactics but not change the objective;
- escalate uncertainty without choosing the response.

One overall “level” can hide these differences.

### Reversibility is not the only condition

Reversible actions can still cause cumulative, distributive or reputational harm. Irreversibility increases consequence, but a reversible action is not automatically safe to delegate.

### Authority can drift

Permissions may expand through configuration changes, vendor updates, workflow redesign, tool access, employee reliance or reuse in new contexts. A static approval may no longer describe the authority exercised in practice.

## Provenance and originality decision

The research establishes extensive prior art in:

- decision rights;
- types and levels of automation;
- adaptive and variable autonomy;
- task allocation;
- human–autonomy teaming;
- operating domains;
- risk- and ambiguity-based allocation;
- capability versus permission;
- pause, override, rollback and decommissioning;
- accountability-authority alignment.

The book must not claim that Alec Gardner invented these component ideas or the general concept of mapping autonomy.

The defensible Gardner contribution is narrower and practical:

1. use **delegated organisational authority** as the organising question rather than autonomy alone;
2. distinguish technical capability from organisational permission;
3. map authority function by function rather than assigning one autonomy level to a product;
4. connect permission to operating boundaries, control mode, recourse and accountability;
5. integrate the map with the Accountability–Control Gap and Meaningful Accountability Test;
6. provide executives with a diagnostic that connects policy decisions to system configuration and workflow design.

## Proposed Delegated Authority Map

The recommended map is not a ladder. It is a structured description of a defined AI-enabled decision or action.

### 1. Function

What part of the work or decision may the AI perform?

Possible functions include:

- frame or interpret the problem;
- acquire or select information;
- analyse or summarise;
- generate options;
- recommend or prioritise;
- select or decide within limits;
- execute an approved action;
- adapt its approach;
- monitor, learn or escalate.

### 2. Permission

What may the AI do without obtaining fresh human approval?

Permission must identify the exact decision or action rights granted. Technical capability outside that permission remains unauthorised.

### 3. Boundary

Where does the permission apply?

The boundary may define:

- purpose and intended use;
- people or populations affected;
- data and information accessible;
- tools, systems and resources available;
- transaction type or value;
- geography, jurisdiction and business unit;
- time horizon and frequency;
- uncertainty, consequence and risk limits;
- prohibited actions and foreseeable misuse.

### 4. Control

How is the delegated authority governed while it is active?

Control may include:

- prior approval;
- supervision or sampling;
- exception thresholds;
- monitoring and evidence requirements;
- identity, access and permission controls;
- validation and testing;
- independent review;
- change control;
- named operational and risk owners.

### 5. Recourse

What happens when conditions move outside the boundary?

Recourse includes:

- defer to a human;
- escalate to a higher authority;
- pause or restrict operation;
- override or correct an action;
- roll back where possible;
- revoke permissions;
- decommission the system;
- provide contestability and redress.

### Accountability overlay

Every map must identify:

- who authorised the delegation;
- who owns outcomes and learning;
- who monitors the authority in use;
- who can modify or revoke it;
- who is responsible for conditions outside the operator's control.

## Proposed controlled definition

For human approval:

> **The Delegated Authority Map is a practical organisational diagnostic that identifies the functions an AI system may perform, the actions it may take without fresh human approval, the boundaries within which that permission applies, the controls that govern it, the recourse available when conditions change, and the human or institutional accountability that remains.**

The term **authority** is used here as organisational permission to act or decide within a defined operating arrangement. It does not imply legal personhood, moral agency or an independent transfer of institutional accountability to the AI.

## Governing propositions

Primary:

> **Capability does not confer authority.**

Supporting:

> **Delegation does not transfer accountability.**

Practical diagnostic:

> **Do not ask only what the AI can do. Ask what the organisation has authorised it to do, under what conditions, and who can still change that authority.**

## Claims safe to use

- AI authority should be specified by function and context rather than inferred from a product label.
- A system's capability and its organisational permission are separate questions.
- Delegated authority should be bounded, monitored, revisable and revocable.
- Risk, ambiguity, consequence, uncertainty, speed, scale and reversibility affect appropriate delegation.
- Human approval is not required for every action, but meaningful accountability and recourse must remain proportionate to the authority delegated.
- Accountability for authorising and governing AI remains human and institutional.

## Claims requiring qualification

- There is no universally validated autonomy scale for organisational AI governance.
- Risk does not increase mechanically with autonomy in every context.
- More human involvement is not automatically safer.
- Reversibility reduces some consequences but does not eliminate risk.
- The Delegated Authority Map is Gardner synthesis, not a validated scientific instrument, legal test or compliance certificate.

## Chapter boundary

Chapter 5 owns:

- the distinction between capability and authorised permission;
- the function-specific nature of delegation;
- the Delegated Authority Map;
- risk, ambiguity, consequence and reversibility as delegation considerations;
- escalation, revocation and decommissioning as authority controls.

Chapter 5 should not yet fully develop:

- data, identity, permissions and technical enforcement infrastructure — Chapter 6;
- capability-building and organisational culture — Chapter 7;
- enabling versus coercive governance — Chapter 8;
- assurance evidence and the full Governance Chain — Chapter 9;
- the complete agentic and multi-agent extension — Chapter 10.

## Narrative opportunities

### Opening tension

An organisation approves an “AI assistant” for a bounded purpose. Over time, the system receives access to more tools and begins selecting, routing and executing actions that were never described in the original approval. Nothing dramatic announces the change. Authority expands through ordinary implementation decisions.

The chapter asks:

> At what point did assistance become delegated authority?

### Reader discovery

The reader discovers that AI authority is not determined by what the system is called. It is created through permissions, workflows, defaults, access and the absence or presence of fresh human approval.

### Ending movement

Once the organisation can describe the authority it has delegated, it must make those boundaries real through data, identity, permissions, workflow, logging and system configuration.

That leads directly to Chapter 6:

> **Where does governance actually live?**

## Monitoring triggers

Recheck before publication if:

- NIST releases the revised AI RMF or new agent standards that materially change delegated-authority guidance;
- Australian mandatory AI governance requirements are introduced;
- the capability-versus-permission preprint becomes peer reviewed;
- stronger empirical research validates organisational delegation frameworks;
- MIT CISR publishes expanded evidence or revisions to the AI Decision Matrix;
- agent platforms materially change the practical meaning of tool access, permission, identity or revocation.

## Human decision gate

Alec Gardner must approve whether to:

1. retain the name **Delegated Authority Map**;
2. define the map through **Function → Permission → Boundary → Control → Recourse**, with accountability as an overlay;
3. retain **Capability does not confer authority** as the chapter's governing proposition;
4. describe authority as organisational permission rather than legal or moral agency;
5. present the map as a practical diagnostic rather than an autonomy ladder, validated instrument, legal test or compliance certificate.

## Gate outcome

### Evidence

**PASS**

The evidence supports function-specific, bounded, context-dependent and revocable delegation.

### Theory and doctrine integrity

**PASS WITH QUALIFICATION**

The chapter may use delegated organisational authority as its organising concept if legal personhood and moral agency are not implied.

### Originality

**CONDITIONAL PASS**

Material prior art exists for every component. The contribution is the executive-facing synthesis, function-specific mapping, accountability linkage and integration into the book's governance operating system.

### Drafting decision

**DO NOT DRAFT PROSE YET.**

**SAFE TO DEVELOP THE DETAILED CHAPTER BRIEF AFTER ALEC APPROVES THE MAP'S NAME, structure and provenance position.**
