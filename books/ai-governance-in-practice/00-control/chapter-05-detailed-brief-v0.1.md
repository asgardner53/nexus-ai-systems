# Chapter 5 Detailed Brief v0.1 — What Have We Actually Allowed the AI to Do?

**Book:** *AI Governance in Practice*  
**Author:** Alec Gardner  
**Date:** 2026-11-18  
**Status:** Detailed chapter brief locked for drafting  
**Target length:** 2,700–3,200 words  
**Approved construct:** Delegated Authority Map

## Chapter role in the book

Chapter 3 established that accountability can remain formally human while practical control weakens.

Chapter 4 established the conditions required for accountability to remain meaningful:

- capability;
- visibility;
- authority;
- intervention capacity;
- accountability alignment.

Chapter 5 now examines the other side of the arrangement. If human accountability depends on what people can still know, judge and change, the organisation must be explicit about what decisions and actions the AI may undertake without fresh human approval.

The chapter moves the reader from **human accountability** to **delegated organisational authority**.

It must make one shift unmistakable:

> Governance cannot stop at approving an AI system. It must define the authority the organisation has permitted that system to exercise.

## Reader entry belief

Once an AI tool has been approved for a particular purpose, the organisation has largely settled the question of what it may do.

A related assumption is that a product label—assistant, copilot, recommender, agent or automated system—provides a reasonable indication of its authority.

The chapter will destabilise both beliefs.

## Opening tension

Open with an illustrative organisational scene involving an AI “assistant” approved for a bounded customer-service purpose.

At first, the system drafts responses and retrieves information. Over time, apparently modest implementation changes give it access to the ticketing platform, customer records and a limited refund workflow. It begins classifying requests, routing cases, prioritising queues, updating records and executing low-value refunds within configured thresholds.

No single decision announces that authority has been delegated. Each change appears operational and incremental:

- connect another data source;
- add a tool;
- reduce handling time;
- allow a low-value transaction;
- automate an obvious case;
- widen the threshold after good performance.

At a governance review, someone asks what the system is actually authorised to do.

The original approval still calls it an “assistant”.

The chapter’s opening question is:

> **At what point did assistance become delegated authority?**

The scene should remain plausible and ordinary. Do not use a dramatic incident, runaway agent or futuristic failure. The tension comes from authority expanding through normal implementation decisions without a corresponding governance decision.

## Dominant proposition

> **Capability does not confer authority.**

A system’s technical capacity to perform a decision or action does not establish organisational permission to perform it.

Supporting proposition:

> **Delegation does not transfer accountability.**

Practical leadership formulation:

> **Do not ask only what the AI can do. Ask what the organisation has authorised it to do, under what conditions, and who can still change that authority.**

## Primary reader discovery

AI authority is not determined by what the system is called.

It is created through:

- permissions;
- access;
- workflow position;
- defaults;
- approval thresholds;
- tool connections;
- the ability to initiate or execute actions;
- the conditions under which fresh human judgement is no longer required.

The governance unit is therefore not the product label or one overall autonomy score. It is the **specific operational authority delegated for a defined function and context**.

## Approved construct

### Delegated Authority Map

> **The Delegated Authority Map is a practical organisational diagnostic that identifies the functions an AI system may perform, the actions it may take without fresh human approval, the boundaries within which that permission applies, the controls that govern it, the recourse available when conditions change, and the human or institutional accountability that remains.**

Approved structure:

**Function → Permission → Boundary → Control → Recourse**

with **Accountability** as an overlay across the complete arrangement.

The map must not be presented as:

- a vertical autonomy ladder;
- a numerical maturity score;
- a validated scientific instrument;
- a legal test;
- a compliance certificate;
- a transfer of legal personhood, moral agency or institutional accountability to AI.

## Terminology boundary

In this chapter, **authority** means organisational permission to make or execute defined decisions or actions within a controlled operating arrangement.

It does not imply that an AI system possesses:

- legal personhood;
- moral responsibility;
- independent institutional accountability;
- unrestricted discretion;
- permission beyond the boundaries established by the organisation.

Use the phrase **delegated organisational authority** where the distinction needs emphasis.

## Narrative movement

### Movement 1 — The authority nobody remembers delegating

Develop the opening scene through the accumulation of small implementation changes.

The reader should recognise a common organisational pattern: the system’s name and original approval remain unchanged while its access, workflow position and capacity to act expand.

The scene should lead to the realisation that authority can move without a formal declaration that it has moved.

Do not name the Delegated Authority Map yet.

### Movement 2 — Labels are poor governance controls

Show why terms such as *assistant*, *copilot*, *recommender*, *automation* and *agent* can mislead.

A system called an assistant may execute transactions. A system described as automated may only organise information. A recommendation-only system may materially frame a high-consequence decision, while an autonomous process may perform a narrow, reversible and low-consequence action.

The point is not to create a better product taxonomy. It is to show that labels do not reveal the actual allocation of authority.

The reader should begin asking:

- What can the system initiate?
- What can it select?
- What can it execute?
- When does it need fresh approval?
- When does it have to defer?

### Movement 3 — Capability and permission are different organisational facts

Introduce the governing proposition:

> **Capability does not confer authority.**

A system may be technically capable of accessing a database, issuing a refund, selecting a candidate, changing a schedule or invoking another tool. The organisation still has to decide whether that action is permitted, for which purpose, under what conditions and within what limits.

Use an engineering analogy lightly: a machine’s operating capability does not determine the operating envelope in which it is authorised to run.

Do not imply that capability is irrelevant. Capability determines what must be governed; permission determines what may be exercised.

Make the legal and moral boundary explicit: the organisation is configuring permission, not recognising the AI as an independent legal or moral actor.

### Movement 4 — A decision is not one indivisible act

Bring in the foundational automation and decision-rights evidence.

Parasuraman, Sheridan and Wickens show that automation can occur across different information-processing functions. MIT CISR similarly separates the work of a decision into framing, acting and learning. These sources support the chapter’s central insight: authority may be allocated differently within the same decision.

A system may:

- acquire or select information;
- analyse or summarise it;
- generate options;
- recommend or prioritise;
- select an action within limits;
- execute an approved action;
- monitor outcomes;
- adapt its method;
- escalate uncertainty.

Do not present this as a long visible taxonomy in the prose. Develop two or three contrasted configurations through narrative explanation.

For example, the customer-service system may independently classify and route cases, recommend outcomes for complex complaints and execute only low-value refunds within a defined threshold.

The reader should see that one overall “autonomy level” would conceal this mixed arrangement.

### Movement 5 — Why the autonomy ladder is not enough

Acknowledge that autonomy scales can be useful for orientation, comparison and design. Do not dismiss established frameworks.

Then show their limit for organisational governance: a ladder implies one direction and one overall level, while real systems often combine different permissions across different functions.

The chapter should explain that:

- autonomy is not identical to risk;
- recommendation can be consequential without execution;
- narrow automated execution can be low consequence;
- reversible actions can still create cumulative or distributive harm;
- human approval can create friction without creating meaningful control.

The conclusion of this movement is not “less automation”. It is **more precise delegation**.

### Movement 6 — Delegation depends on the decision and its context

Use risk, ambiguity, consequence, uncertainty, speed, scale and reversibility as factors shaping appropriate delegation.

MIT CISR provides current organisational evidence that different decisions require different allocations of framing, acting and learning. NIST, OECD and Australian guidance support context-sensitive, risk-based and lifecycle governance.

Avoid turning these factors into a universal formula or scoring model.

The argument should remain practical:

- low-ambiguity, low-consequence and reversible actions may be suitable for bounded execution;
- high-consequence or ambiguous decisions may require stronger human framing, exception handling or approval;
- scale and speed can make individually minor actions collectively consequential;
- reversibility helps, but does not make an action automatically safe;
- the organisation may deliberately allow substantial automation where boundaries, monitoring and recourse remain credible.

### Movement 7 — Authority drift

Return to the opening system.

Show how authority may expand through:

- new tool connections;
- wider data access;
- threshold changes;
- vendor updates;
- workflow redesign;
- reuse for a new population or purpose;
- new downstream actions;
- increasing employee reliance;
- the removal of a formerly required approval step.

The original approval may remain technically unchanged while the authority exercised in practice has moved.

This movement should connect to Chapter 2’s static-approval problem without re-explaining the policy–control gap.

Introduce the idea that delegation must remain **reviewable and revocable**, not merely approved once.

Do not develop runtime technical enforcement in detail; Chapter 6 owns that work.

### Movement 8 — Introducing the Delegated Authority Map

Only after the reader has experienced the limits of labels, ladders and static approval should the map be named.

Explain that the map does not ask, “How autonomous is this system?” as one abstract question.

It asks:

1. What function may it perform?
2. What may it do without fresh human approval?
3. Where does that permission begin and end?
4. How is the authority governed while active?
5. What happens when the conditions change or the boundary is crossed?
6. Who remains accountable across the arrangement?

State the controlled definition once, clearly.

Then apply the map to the running customer-service example rather than explaining it as an abstract framework.

### Movement 9 — Function and permission

Use the opening case to separate function from permission.

The system may be permitted to:

- classify and route all enquiries;
- retrieve approved customer information;
- recommend an outcome for complex complaints;
- execute refunds only below a defined value and only for specified transaction types;
- escalate cases involving vulnerability, dispute, uncertainty or policy exception.

The manuscript should show that the organisation is not merely describing what the system does. It is specifying which actions may occur without fresh human judgement.

Clarify that any capability outside the permission remains unauthorised, even if technically accessible.

### Movement 10 — Boundary

Develop the operating boundary in prose, not as an exhaustive checklist.

A credible boundary may define:

- purpose and intended use;
- people or populations affected;
- data the system may access;
- tools and systems it may invoke;
- transaction type and value;
- geography or jurisdiction;
- time and frequency;
- uncertainty, consequence or risk limits;
- prohibited actions;
- conditions requiring human referral.

Use selected details from the running example. Do not dump the full list into the chapter unless a compact table later improves comprehension.

The key insight is that permission without a boundary becomes discretion by accident.

### Movement 11 — Control, recourse and accountability

Explain the difference among the three without moving into Chapter 6’s technical implementation.

**Control** governs the authority while it remains active. It may involve approval conditions, monitoring, sampling, exception thresholds, evidence requirements, testing, independent review, change control and named owners.

**Recourse** determines what happens when conditions change or the system moves outside its boundary: defer, escalate, pause, restrict, override, correct, roll back, revoke permission or decommission.

**Accountability** remains across the full arrangement: who authorised the delegation, owns outcomes and learning, monitors its use, can change or revoke it, and remains responsible for conditions controlled elsewhere.

Make clear that recourse is not an emergency afterthought. It is part of the original delegation design.

Use OECD, NIST and Australian guidance visibly at this point.

### Movement 12 — The executive governance consequence

Return to the governance decision.

An executive committee should not merely approve “the AI assistant”. It should be able to describe the authority it is approving:

- what the system may frame, recommend, decide or execute;
- what requires fresh human judgement;
- which boundaries apply;
- how authority is monitored;
- who can tighten, pause or revoke it;
- where accountability remains.

The map changes the approval conversation from product possession to organisational authority.

This is the chapter’s practical value. It links governance intent to workflow and system design without becoming a technical manual.

### Movement 13 — What the map does not prove

Preserve the red-team boundary.

A complete map does not prove that the system is:

- safe;
- fair;
- secure;
- effective;
- lawful;
- necessary;
- suitable for deployment.

Nor does the map mean that maximum human approval is preferable. A low-risk, bounded process may legitimately operate with significant automated execution. A high-consequence recommendation may demand strong challenge even when the system does not execute anything.

The map describes authority and its governance. It does not replace impact assessment, risk management, assurance or human judgement.

### Movement 14 — Handoff to Chapter 6

End by returning to the central problem exposed by the map.

It is one thing to describe a boundary. It is another to make the boundary real.

The organisation now has to encode or enact its decisions through:

- data access;
- identities;
- permissions;
- system configuration;
- workflow design;
- logging;
- controls;
- vendor arrangements.

Do not explain those mechanisms in Chapter 5.

The ending question is:

> **Where does governance actually live?**

That makes Chapter 6 necessary.

## Evidence to appear visibly in prose

The manuscript should visibly draw on a disciplined selection of sources rather than parade the full evidence pack.

### Foundational sources

- **Parasuraman, Sheridan & Wickens (2000)** — types and levels of automation across decision functions.
- **Endsley & Kaber (1999)** — context-dependent effects of automation level on performance, situation awareness and workload.
- **Miller & Parasuraman (2007)** — flexible delegation and supervisory-control interfaces.
- **Flemisch et al. (2011/2012)** — relationship among ability, authority, responsibility and control.
- **Cavalcante Siebert et al. (2022/2023)** — actionable meaningful-human-control properties and responsibility commensurate with ability and authority.
- **Methnani et al. (2021)** — variable autonomy and the inadequacy of human presence alone.

### Current organisational and authoritative sources

- **MIT CISR (Sebastian et al., 2026)** — risk, ambiguity and allocation across framing, acting and learning.
- **NIST AI RMF and Govern Playbook** — delegated authorities, risk tolerance, human–AI roles, monitoring, override, change and decommissioning.
- **OECD AI Principles (2024 revision)** — role- and context-based accountability, human agency, override, repair and decommissioning.
- **Australian Government Guidance for AI Adoption (2026)** — system scope, accountability, intervention, pause, guardrails, access controls and decommissioning.

### Prior-art acknowledgement

Use one concise provenance passage acknowledging closely related contemporary work, including Engin’s Human-AI Governance configuration and recent function- or autonomy-allocation frameworks.

Do not load the chapter with recent preprints. They remain in the evidence and monitoring record.

## Evidence that should remain in the background unless required

Keep the following in the research register unless a specific claim needs them:

- sector-specific autonomy ladders;
- highly technical agent architectures;
- Bayesian or formal autonomy-allocation models;
- recent capability-versus-permission preprints;
- current multi-agent governance proposals;
- detailed access-control and identity engineering;
- complete agentic-AI standards work.

These are valuable for provenance, monitoring and later chapters, but would pull Chapter 5 towards a literature review or Chapter 10.

## Three-Layer Evidence Test

### Evidence establishes

- automation and AI participation can differ across decision functions;
- appropriate allocation depends on task, context, risk, ambiguity and consequence;
- authority, ability, responsibility and control are distinct;
- governance frameworks require explicit roles, delegated authority, monitoring, intervention, change control and decommissioning;
- variable and revisable allocations may be necessary as conditions change.

### Reasonable interpretation

- one product-level autonomy label is insufficient for organisational governance;
- technical capability should be separated from organisational permission;
- delegated authority should be described by function, boundary, control and recourse;
- static approvals may cease to describe authority exercised in practice.

### Gardner synthesis

> **Capability does not confer authority.**

> **Delegated Authority Map: Function → Permission → Boundary → Control → Recourse, with accountability as an overlay.**

> **Do not ask only what the AI can do. Ask what the organisation has authorised it to do, under what conditions, and who can still change that authority.**

## Doctrine and provenance integrity

Approved for manuscript use:

> **Capability does not confer authority.**

Supporting proposition:

> **Delegation does not transfer accountability.**

The manuscript must clearly state that:

- the component ideas are established;
- the map is Gardner organisational synthesis;
- the contribution is the executive-facing integration and connection to the book’s accountability architecture;
- the map is not validated as a universal instrument;
- authority is organisational permission, not legal or moral agency.

Do not yet develop fully:

- **Successful execution does not eliminate the need for assurance** — later assurance chapter;
- **Execution and assurance should be organisationally separable** — remains under evidence development;
- the full **Evolved Governance Chain** — Chapter 9.

## Practical value

The chapter should change the leader’s question from:

> Is this AI system approved?

To:

> **What functions and actions has the organisation authorised this system to perform without fresh human judgement, where do those permissions end, and who can change or revoke them?**

This is the practical shift the chapter must earn.

## Voice standard

The chapter should sound like Alec:

- calm and experienced;
- organisational rather than product-led;
- technically literate without becoming technical;
- sceptical of reassuring labels and vague approval language;
- practical about the legitimate value of automation;
- board-relevant without becoming a risk paper;
- evidence-aware and careful about originality.

Use engineering discipline: distinguish what a system **can do**, what it **may do**, the conditions under which it may do it and how permission is withdrawn.

Avoid:

- fear-based agent rhetoric;
- generic calls to “keep humans in control”;
- a catalogue of autonomy levels;
- a consultant’s framework dump;
- heavy legalism;
- implying that more human approval is always better;
- implying that all delegation concerns agentic AI.

## Book-prose and narrative controls

- Preserve sustained paragraph movements.
- Do not reveal the complete map in the opening pages.
- Let the reader experience authority drift before naming the construct.
- Use the running organisational example analytically, not decoratively.
- Keep visible lists scarce; one compact presentation of the final map is justified.
- Do not turn each map component into a mini-essay with identical cadence.
- Short paragraphs may be used sparingly for the governing proposition and the final question.
- Avoid repeated “the point is” and “this is where” transitions.

## Repetition and chapter-boundary controls

Do not repeat:

- Chapter 1’s visibility-of-use argument;
- Chapter 2’s policy-versus-operational-control analysis;
- Chapter 3’s diagnosis of the Accountability–Control Gap;
- Chapter 4’s full Meaningful Accountability Test;
- Chapter 6’s detailed data, identity, permissions, logging and configuration controls;
- Chapter 9’s assurance and evidentiary chain;
- Chapter 10’s full agentic and multi-agent extension.

Chapter 5 owns one job:

> **Make delegated AI authority visible, precise, bounded, governable and revocable.**

## Visual possibility

Potential later visual:

### Delegated Authority Map

A portrait-oriented, Kindle-legible structure rather than a horizontal autonomy ladder.

Preferred design:

- a top band naming the defined decision or action;
- five stacked sections: Function, Permission, Boundary, Control and Recourse;
- a continuous Accountability band running alongside or beneath the structure;
- one filled illustrative example after the generic model is introduced.

Do not build the final visual before the draft proves which elements genuinely require visual explanation.

The visual must not imply:

- numerical scoring;
- a linear progression towards greater autonomy;
- certification;
- completeness across every possible use.

## Drafting and review plan

### First draft

Draft Chapter 5 v0.1 at approximately 2,700–3,200 words.

### Developmental review

Test:

- whether the opening authority-drift scene is distinct from Chapters 3 and 4;
- whether the chapter sustains one proposition;
- whether the map is earned before being introduced;
- whether function-specific delegation is clear without becoming a taxonomy;
- whether the Chapter 6 boundary is preserved;
- whether the ending creates forward pressure.

### Evidence review

Run Forensic Evidence Survival on:

- function-specific automation;
- context-dependent allocation;
- capability versus permission;
- bounded and revocable authority;
- authority drift;
- the Delegated Authority Map’s provenance.

### Theory review

Reconfirm that the map is presented as Gardner synthesis with explicit prior-art acknowledgement and no first-of-kind, validation, legal or certification claim.

## Drafting gate

- [x] Research brief complete
- [x] M3 evidence gate passed
- [x] Contrary and boundary evidence incorporated
- [x] Delegated Authority Map name approved
- [x] Definition approved
- [x] Structure approved
- [x] Governing proposition approved
- [x] Originality and terminology boundaries approved
- [x] Chapter role and ending fixed
- [x] Chapter 6 and Chapter 10 boundaries fixed
- [x] Narrative opening fixed
- [x] Evidence visibility requirements fixed

**STATUS: SAFE TO DRAFT**
