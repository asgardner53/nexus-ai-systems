# Chapter 3 Research Brief — The Human Who Still Owns the Decision

**Book:** AI Governance in Practice  
**Author:** Alec Gardner  
**Date:** 2026-11-02  
**Materiality:** M3 — publication evidence gate  
**Status:** Research brief complete; evidence gate open pending final chapter brief

## Research question

What happens when an organisation assigns accountability to a human while AI increasingly frames, recommends, prioritises or acts within the decision process?

## Decision context

Chapter 3 must diagnose the book's central accountability problem without prematurely introducing the full Meaningful Accountability Test reserved for Chapter 4.

The chapter must distinguish:
- formal accountability from practical control;
- human presence from meaningful human agency;
- delegated execution from transferred accountability;
- individual responsibility from distributed organisational responsibility.

## Provisional governing proposition

> **Delegating work or execution to AI does not, by itself, extinguish organisational accountability.**

Approved Gardner shorthand for manuscript use:

> **Delegation does not transfer accountability.**

This shorthand is **author interpretation / emerging doctrine**, not a universal legal rule.

## Evidence synthesis

### 1. Human oversight requires more than a named human

The current EU AI Act provides a strong regulatory example. For high-risk systems, human oversight is intended to be effective and proportionate to risk, autonomy and context. Oversight persons must be able to understand relevant system capabilities and limitations, monitor operation, recognise automation bias, interpret outputs, disregard or override outputs, intervene and stop the system. Deployers must assign oversight to natural persons with the necessary competence, training, authority and support.

This supports the chapter's central diagnostic: a person can be formally designated as accountable or responsible while lacking the conditions required to exercise meaningful control.

**Use carefully:** EU requirements are jurisdiction-specific and apply to defined high-risk systems. They should illustrate governance conditions, not be universalised as global law.

### 2. Accountability is role- and context-dependent

The OECD AI Principles state that AI actors should be accountable based on their roles, the context and their ability to act. They also require traceability and ongoing risk management across the lifecycle.

This supports a distributed-responsibility model rather than a simplistic single-owner model.

### 3. Senior leadership retains governance responsibility even when authority is delegated

NIST AI RMF Govern requires clear roles, responsibilities and delegated authorities. It states that executive leadership takes responsibility for decisions about risks associated with AI development and deployment, while power, resources and authorisation may be delegated through the management chain.

This is particularly useful for the Gardner proposition:

> **Delegation does not transfer accountability.**

The safe reading is that delegated execution or risk-management authority does not remove the need for clear accountability at the appropriate organisational level.

### 4. Human control can degrade under automation

Endsley and Kiris' classic out-of-the-loop research found that automation can reduce situation awareness and impair an operator's ability to take over when automation fails. Later human-control literature continues to treat supervisory control, teaming and meaningful human control as design problems rather than merely staffing problems.

Current experimental evidence also shows that humans evaluating AI suggestions can be influenced by automation-related biases. This means that “a human checked it” cannot automatically be treated as evidence of independent judgement.

### 5. Human oversight can become symbolic or rubber-stamping

Recent interdisciplinary work on effective human oversight argues that oversight requires sufficient causal power, epistemic access, self-control and appropriate role intentions. Current 2026 work on meaningful human oversight similarly warns against reducing human agency to a rubber stamp and instead emphasises human evaluative agency: the ability to verify, steer, contest and substitute.

This directly supports the chapter's distinction between **nominal sign-off** and **substantive judgement**.

### 6. Responsibility can be misallocated to the nearest human

Elish's **moral crumple zone** describes situations where responsibility is attributed to a human actor who had limited control over an automated system.

This is a strong narrative and conceptual bridge into the Gardner **Accountability–Control Gap**.

### 7. Responsibility-gap scholarship is contested

The literature does not agree that autonomous systems inevitably create unfillable “responsibility gaps”.

Some scholars argue that responsibility can remain indirect or organisational even where machines act autonomously. Others suggest that the more useful problem is a **control gap** rather than a responsibility gap: the organisation or human actor may remain responsible, but practical control may be insufficient.

This contrary evidence strengthens rather than weakens the book's direction. Chapter 3 should avoid claiming that AI makes accountability disappear. The sharper argument is that accountability can remain formally present while becoming increasingly difficult to exercise meaningfully.

### 8. Decision rights should change with risk and ambiguity

MIT CISR's 2026 research on AI decision rights distinguishes framing, acting and learning and recommends different human/AI allocations depending on risk and ambiguity. Its organisational cases retain named human business ownership and human accountability even where AI agents undertake significant portions of execution.

This supports the chapter's organisational-design perspective and provides a bridge to Chapter 5, where delegated authority will be developed fully.

## Claims safe to use

### C03-001 — Effective AI governance requires explicit decision rights and accountability
**Status:** VERIFIED / STRONG

Supported by NIST, OECD and MIT CISR.

### C03-002 — Human presence does not itself guarantee meaningful oversight
**Status:** VERIFIED / STRONG

Supported by EU AI Act Article 14, human-oversight scholarship, human-factors evidence and current automation-bias research.

### C03-003 — Effective human oversight requires practical conditions including competence, information/visibility, authority and intervention capacity
**Status:** VERIFIED WITH CONTEXT

EU AI Act provides a regulatory example; FAccT and meaningful-human-control scholarship provide broader conceptual support.

### C03-004 — Automation can reduce situation awareness and impair takeover performance
**Status:** VERIFIED / BOUNDED

Supported by Endsley & Kiris and subsequent human-factors work. Do not generalise the magnitude of the effect across every AI context.

### C03-005 — Responsibility can be assigned to a human who has limited practical control
**Status:** SUPPORTED

Elish's moral crumple zone provides a well-established conceptual account. Use as a cautionary organisational pattern, not as proof that this occurs in every AI deployment.

### C03-006 — AI accountability can be distributed across multiple actors
**Status:** VERIFIED / STRONG

Supported by OECD role-based accountability, EU provider/deployer obligations and contemporary responsibility/liability scholarship.

### C03-007 — Delegating work to AI does not by itself extinguish organisational accountability
**Status:** SUPPORTED INTERPRETATION

Supported by NIST executive-responsibility logic, OECD role-based accountability and current decision-rights research.

**Gardner synthesis:**
> **Delegation does not transfer accountability.**

**Qualification:** not a universal legal statement. Legal liability and formal duties vary by jurisdiction, role, contract and regulatory regime.

### C03-008 — Accountability–Control Gap
**Status:** GARDNER SYNTHESIS / PROVENANCE-CONTROLLED

Working definition:

> **A mismatch between the accountability assigned to a person, role or organisation and the practical control they can realistically exercise over the decision or outcome.**

Neighbouring scholarship:
- Elish — moral crumple zones;
- meaningful human control;
- responsibility-gap literature;
- Veluwenkamp & Hindriks — control gaps;
- human-factors out-of-the-loop research;
- effective human oversight literature.

Originality boundary:
The concepts of responsibility gaps, control gaps, moral crumple zones and meaningful human control are established. Originality must lie in the organisational diagnostic synthesis and its place within the book's governance operating system. Do not claim the underlying problem is newly discovered.

## Contrary and limiting evidence

1. **Responsibility gaps are contested.** Some scholars argue that autonomous systems do not necessarily create gaps because humans and organisations can remain indirectly responsible.
2. **Responsibility can be distributed.** Accountability should not be forced onto a single proximate operator where designers, providers, deployers, managers and organisations all shape outcomes.
3. **More human involvement is not always safer.** Human review can create delay, overload, automation bias or rubber-stamping. The goal is effective control, not maximum human touch.
4. **Control is context-dependent.** The degree of human involvement appropriate for low-risk routine decisions may differ substantially from high-risk or ambiguous decisions.
5. **Legal accountability varies.** The manuscript must not turn a governance proposition into a universal legal conclusion.

## Chapter boundary

Chapter 3 should diagnose the **Accountability–Control Gap**.

It should **not yet** fully specify the five conditions in the Meaningful Accountability Test. Chapter 4 owns:
- Capability
- Visibility
- Authority
- Intervention capacity
- Accountability alignment

Chapter 3 may foreshadow those conditions without presenting the full framework.

Chapter 5 owns the detailed Delegated Authority Map and degrees of machine authority.

## Narrative opportunities

### Opening tension
A manager signs off a decision that AI has substantially shaped. The signature is human. The recommendation, ranking, evidence selection or workflow path may not be.

The central question is not whether a human was present.

It is whether the human still had enough practical control for the accountability attached to their name to be meaningful.

### Moral crumple zone
Use Elish to complicate the conventional instinct to “keep a human in the loop”. A human can become the point where blame lands even when meaningful control was distributed elsewhere.

### Out-of-the-loop performance
Use Endsley & Kiris to demonstrate that automation can reduce the very awareness and capability needed when intervention suddenly becomes necessary.

### Regulatory mirror
Use the EU AI Act sparingly as a revealing list of what regulators consider necessary for effective oversight: competence, understanding, awareness of automation bias, interpretation, override and stop capability.

### Decision-rights bridge
Use MIT CISR to show that organisations increasingly need to decide which parts of a decision humans frame, AI acts on and humans learn from.

## Potential chapter movement

1. Human signature / apparent ownership.
2. Separate formal accountability from practical control.
3. Show how automation can move the human out of the operational loop.
4. Introduce moral crumple zones and distributed responsibility.
5. Show why “human in the loop” can become symbolic.
6. Use current regulation and research to reveal the conditions hidden inside meaningful oversight.
7. Introduce the **Accountability–Control Gap** as Gardner synthesis.
8. End with the question Chapter 4 must answer: what conditions make accountability meaningful?

## Evidence sources — primary / authoritative

- NIST AI RMF 1.0 and NIST AI RMF Playbook — governance roles, executive responsibility, delegated authority, human oversight, monitoring.
- OECD AI Principles — role/context/ability-to-act accountability; traceability; ongoing risk management.
- EU AI Act, consolidated text as at 27 July 2026 — human oversight and deployer obligations.
- Australian Government AI Technical Standard — human-centred design, oversight/control mechanisms and systemic safety.

## Evidence sources — academic / research

- Elish, M.C. (2019), *Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction*.
- Endsley, M.R. & Kiris, E.O. (1995), *The Out-of-the-Loop Performance Problem and Level of Control in Automation*.
- Tsamados, A., Floridi, L. & Taddeo, M. (2025), *Human control of AI systems: from supervision to teaming*.
- Calvert, S.C. (2025), *Principles and Framework for the Operationalisation of Meaningful Human Control Over Autonomous Systems*.
- effective-human-oversight interdisciplinary research, FAccT 2024.
- Zhu et al. (2026), *Designing meaningful human oversight in AI*.
- Beck et al. (2026), *Bias in the Loop: How Humans Evaluate AI-Generated Suggestions*.
- Vallor & Vierkant (2024), responsibility gap and epistemic/control conditions.
- Veluwenkamp & Hindriks (2024), *Artificial agents: responsibility & control gaps*.
- Custers, Lahmann & Scott (2025), shared responsibilities and liability overlaps.
- MIT CISR (2026), *Designing Decision Rights for AI*.

## Current implementation evidence

MIT CISR's 2026 work provides current organisational evidence that decision rights can be distributed across framing, acting and learning while named human owners remain accountable for outcomes.

Use as practitioner research, not universal empirical law.

## Monitoring triggers

Recheck before publication if any of the following change:
- NIST AI RMF revision replaces or materially changes Govern outcomes;
- EU AI Act human-oversight obligations change through implementation guidance or amendment;
- Australian AI governance requirements become mandatory or materially change;
- stronger empirical evidence emerges on human oversight, automation bias or agentic decision rights.

## Human decision required

Alec must approve:
1. the exact manuscript wording of **Delegation does not transfer accountability**;
2. the working definition and name **Accountability–Control Gap**;
3. whether Chapter 3 should use a real-world opening case or a non-specific organisational scenario.

## Evidence gate

**RESEARCH BRIEF: PASS**

**SAFE TO DEVELOP DETAILED CHAPTER BRIEF**

Drafting should not begin until the Chapter 3 detailed brief fixes:
- the chapter's opening tension;
- the exact scope of Accountability–Control Gap;
- which evidence is visible in prose;
- what is withheld for Chapter 4.
