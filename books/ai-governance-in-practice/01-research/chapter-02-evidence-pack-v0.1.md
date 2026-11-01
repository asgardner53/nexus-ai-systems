# Chapter 2 Evidence Pack — When Policy Exists but Control Does Not

**Date:** 2026-11-01  
**Materiality:** M3 — publication evidence gate  
**Outcome:** SAFE TO DRAFT, with stated boundaries

## Research question

What distinguishes declared AI governance from governance that actually changes organisational behaviour, decision-making and control?

## Evidence synthesis

The evidence supports the chapter's central argument, but with an important qualification.

Policies, principles and formal governance structures are not ineffective by definition. Authoritative frameworks such as ISO/IEC 42001 and the NIST AI RMF explicitly require policy as part of a wider management system. However, both frameworks go well beyond policy: they require processes, roles, responsibilities, risk management, implementation, monitoring, review and continual improvement.

This distinction is reinforced by longstanding organisational research on **decoupling**: organisations can adopt formal policies that are weakly connected to day-to-day practice. AI-specific research now reports a similar implementation gap. Recent studies identify continuing difficulty in translating trustworthy or responsible-AI principles into operational practices, while current survey evidence shows that formal responsible-AI policies are becoming more common even as knowledge, budget and coordination gaps remain.

The safe book argument is therefore not:

> “Policies do not work.”

It is:

> **Policy is necessary, but governance becomes real only when policy is coupled to decisions, roles, controls, evidence and behaviour.**

## Claim decisions

### C02-001 — AI governance requires more than policy or principles

**Status:** VERIFIED / STRONG

**Evidence establishes:**
- ISO/IEC 42001 defines an AI management system as interrelated organisational elements that establish policies and objectives **and processes to achieve them**.
- NIST Govern 1 requires policies, processes, procedures and practices to be in place, transparent and implemented effectively.
- NIST Govern 2 requires accountability structures, empowered people, clear responsibilities and training.
- OECD accountability requires traceability and systematic lifecycle risk management.

**Gardner synthesis:**
> A principle becomes governance only when it changes what somebody is permitted, required or able to do.

**Qualification:** policy is foundational; do not frame it as decorative by default.

### C02-002 — Formal governance can become decoupled from operational practice

**Status:** VERIFIED AS AN ORGANISATIONAL PHENOMENON; SUPPORTED APPLICATION TO AI

**Evidence establishes:**
- Decoupling scholarship documents organisations formally adopting policies without fully implementing them in daily practice.
- Westphal & Zajac show formal corporate policy can remain more symbolic than substantive.
- de Bree & Stoopendaal summarise decoupling as a gap between work as imagined and work as done.
- Current AI governance research reports gaps between ethical principles/frameworks and operational implementation.

**Reasonable interpretation:**
AI governance can exhibit the same policy-practice gap where frameworks, committees or principles are not connected to operational decision processes.

**Qualification:** do not imply deliberate deception; decoupling can arise from capability, coordination, incentives, resources or unclear implementation mechanisms.

### C02-003 — Operational governance requires roles, authority, controls, monitoring and feedback

**Status:** VERIFIED / STRONG

**Evidence establishes:**
- NIST Govern specifies roles, communications, training, inventory mechanisms, monitoring and periodic review.
- ISO/IEC 42001 requires implementation, performance evaluation and continual improvement.
- OECD requires traceability, override/repair mechanisms and systematic risk management appropriate to role and context.

**Gardner synthesis:**
> Governance is enacted through decisions, permissions, controls, evidence and escalation — not through documents alone.

### C02-004 — The current responsible-AI implementation gap is real but uneven

**Status:** SUPPORTED

**Evidence establishes:**
- 2025 developer research reports a significant gap between trustworthy-AI research and real-world implementation.
- A 2025 systematic review identifies persistent gaps between theoretical principles and practical implementation.
- 2026 Stanford AI Index reports responsible-AI policies becoming more common while knowledge, budget and regulatory uncertainty continue to inhibit implementation.

**Qualification:**
The evidence is heterogeneous. Some studies are exploratory, interview-based or rely on survey data. Do not present a single global maturity statistic as universal fact.

### C02-005 — Formal policies and standards can improve governance when internalised

**Status:** SUPPORTED / CONTRARY EVIDENCE

**Evidence establishes:**
- Research across 28 public organisations found stronger governance where AI strategy, policy, ethical principles, standards and training were internalised.
- The study found training of decision-makers, developers and users associated with more advanced governance practices.
- NIST and ISO themselves are designed to link policy with implementation and continual review.

**Reasonable interpretation:**
The problem is not formalisation itself. The problem is weak coupling between formal governance and operational practice.

**Use in chapter:** this is the chapter's main red-team correction.

## Key evidence sources

### Primary / authoritative

1. **NIST AI Risk Management Framework 1.0 — Govern**
   - Governance is cross-cutting.
   - Policies/processes/practices must be implemented effectively.
   - Accountability structures, roles, communications, training and monitoring are required.
   - The framework explicitly states the Core is not a checklist.

2. **ISO/IEC 42001:2023**
   - AI management system = policies, objectives and processes to achieve them.
   - Requires implementation, maintenance, performance evaluation and continual improvement.
   - Strong basis for distinguishing policy from operational management.

3. **OECD AI Principles**
   - Accountability is role- and context-based.
   - Requires traceability and ongoing risk management.
   - Robustness principle includes override, repair and decommissioning mechanisms.

### Academic / organisational evidence

4. **Westphal & Zajac (2001) — Decoupling Policy from Practice**
   - Strong organisational foundation for symbolic versus substantive implementation.

5. **de Bree & Stoopendaal (2020) — De- and Recoupling and Public Regulation**
   - Useful synthesis of decoupling; “work as imagined” versus “work as done”.

6. **Responsible artificial intelligence governance: A review and research framework (2025)**
   - Distinguishes responsible-AI principles from governance mechanisms.

7. **Trustworthy AI: AI developers' lens to implementation challenges and opportunities (2025)**
   - 19 developer interviews; identifies real-world implementation barriers.

8. **Embedding AI Governance in Organizations (2025)**
   - 12 expert interviews; shows operational governance requires cross-functional coordination, roles and continuous adaptation.

9. **Artificial intelligence governance: Understanding how public organizations implement it (2024/2025)**
   - 28 public organisations across five continents; provides useful contrary evidence showing policy/strategy/training can support more advanced governance when internalised.

### Current implementation context

10. **Stanford AI Index 2026**
    - Responsible-AI policies are becoming more common.
    - Implementation remains constrained by knowledge, budget and regulatory uncertainty.
    - Useful as current context, not proof of causality.

11. **OneTrust 2026 survey**
    - Practitioner evidence of coordination/accountability gaps despite increasing adoption.
    - Use only as contextual survey evidence; vendor-sponsored.

## Narrative opportunities

### Opening contradiction
The organisation has:
- an AI policy;
- responsible-AI principles;
- an AI committee;
- an approval form;
- perhaps even an AI register.

Yet ask a manager:
> Who can approve this use?
> Who can stop it?
> What evidence is required?
> What happens if conditions change?
> Who monitors whether the control is working?

The answers become uncertain.

This lets the chapter distinguish **governance artefacts** from **governance capability** without mocking formal governance.

### Work as imagined / work as done
The decoupling literature gives us a powerful conceptual bridge:
- policy describes work as imagined;
- governance must reach work as done.

Use carefully; do not turn Chapter 2 into institutional-theory exposition.

### The committee trap
A committee can centralise accountability while leaving operational authority unclear. This is a plausible organisational illustration but should not be stated as universal evidence without a case.

### The checklist trap
NIST explicitly says its Core is not a checklist. This supports a useful argument against mistaking framework completion for governance effectiveness.

## Red-team findings and boundaries

1. **Policy can work.**
   Policies, strategy, standards and training can materially strengthen governance where they are integrated into practice.

2. **Formalisation is not automatically theatre.**
   Do not use “governance theatre” as a casual label for any organisation with weak implementation.

3. **Decoupling is not always deliberate.**
   Gaps can arise from immature capability, resource constraints, ambiguous ownership, incentives or system complexity.

4. **More operational control is not always better.**
   Excessive approvals and controls can produce friction and avoidance. Proportionality from Chapter 1 must survive.

5. **No single governance model fits every organisation.**
   NIST explicitly frames its Playbook as voluntary and non-checklist; ISO is management-system based but context-sensitive.

## Gardner synthesis

Primary proposition:

> **Governance exists where principles alter decisions, permissions, controls, evidence and behaviour.**

Supporting distinction:

> **Policy tells the organisation what it intends. Governance determines what actually happens.**

Possible deeper line:

> **The gap between policy and practice is not an AI problem. AI simply makes the cost of that gap harder to ignore.**

All three are Gardner synthesis. They must not be presented as externally validated terminology.

## Chapter boundary

This chapter should diagnose the policy-control gap.

It should **not yet** fully resolve:
- who owns consequential AI decisions;
- meaningful human control;
- capability/authority/intervention alignment;
- delegated authority.

Those belong in Chapters 3–5.

## Safe-to-draft gate

- [x] Two or more primary frameworks show governance requires implementation beyond policy.
- [x] Organisational decoupling theory establishes policy-practice gaps as a recognised phenomenon.
- [x] Two or more AI-specific implementation studies show practical translation gaps.
- [x] Current implementation context verified.
- [x] Contrary evidence shows policy/formalisation can work when internalised.
- [x] Gardner synthesis boundaries recorded.
- [x] No causal claim that policy alone causes governance maturity.
- [x] No unresolved provenance issue changes the chapter argument.

## Gate outcome

**EVIDENCE: PASS**

**CHAPTER STATUS: SAFE TO BRIEF AND DRAFT**
