# Chapter 10 Evidence Register v0.1 — When the System Begins to Act

**Book:** *AI Governance in Practice*  
**Chapter:** 10 — When the System Begins to Act  
**Date:** 2026-11-19  
**Materiality:** M3  
**Status:** **EVIDENCE PASS / PROVENANCE APPROVED / SAFE TO BRIEF**  
**Human decision owner:** Alec Gardner

## Research question

How should organisations govern AI systems that plan and initiate actions through tools, services, records and other agents, and what can the book claim distinctly without repackaging established identity, security, human-control, provenance and runtime-assurance work?

## Overall evidence decision

The evidence supports the chapter's central movement from output review to governance of delegated action. It supports identity and authorisation controls, action-level enforcement, selective human approval, interruption and recourse, proportionate traceability, multi-agent system evaluation and reassessment after material change.

The evidence does not support a new named Chapter 10 framework. Originality lies in integrating these established components with the book's approved Meaningful Accountability architecture.

## Claim register

| Claim ID | Claim or proposition | Evidence strength | Qualification or safe boundary | Status |
|---|---|---|---|---|
| C10-001 | Agentic AI is a spectrum of planning, tool use, persistence, delegation, coordination and supervision | Strong authoritative | Do not impose one universal autonomy threshold | VERIFIED |
| C10-002 | Governance significance depends on what the system can cause to happen, not merely its label | Strong synthesis | Present as organisational interpretation | SUPPORTED |
| C10-003 | The material shift occurs when outputs become tool calls, transactions, communications, record changes or downstream actions | Strong authoritative and technical | Consequence depends on actual tools and operating context | VERIFIED |
| C10-004 | The complete action path is the relevant governance object, not the model or final output alone | Strong evidence-informed synthesis | *Action path* remains descriptive, not a named framework | APPROVED FOR CONTROLLED USE |
| C10-005 | Distinct non-human identity supports attribution and control | Strong authoritative | Identity alone does not establish authority | VERIFIED |
| C10-006 | Authentication and technical capability do not establish current permission | Strong authoritative | Authorisation remains action-, resource-, purpose- and context-specific | VERIFIED |
| C10-007 | Delegated authority should be bound to a human or institutional principal | Strong emerging authoritative | Implementation patterns remain immature | VERIFIED WITH QUALIFICATION |
| C10-008 | Least privilege, expiring delegation and prohibition on self-expanding privileges reduce exposure | Strong authoritative | Controls require testing and maintenance | VERIFIED |
| C10-009 | Material permissions should be evaluated at or near the point of action | Strong authoritative and technical | Do not claim all governance can be automated | VERIFIED |
| C10-010 | When AI can act, governance must be enforceable where authority becomes action | Strong synthesis | Gardner proposition informed by established prior art | APPROVED FOR CONTROLLED USE |
| C10-011 | Restricted tools, sandboxing, rate limits, transaction caps and policy-enforcement hooks can reduce consequences | Strong technical and guidance evidence | None guarantees safe or lawful action | VERIFIED WITH LIMITS |
| C10-012 | Selected high-impact or difficult-to-reverse actions may require prior human approval | Strong guidance and human-control evidence | Not every action requires synchronous approval | VERIFIED |
| C10-013 | Human approval is weak where reviewers lack time, information, authority or alternatives | Strong human-factors and meaningful-control evidence | Approval is one control among several | VERIFIED |
| C10-014 | Delegated action should remain bounded, attributable, observable, interruptible and revocable | Strong synthesis | Preserve technical feasibility and proportionality | APPROVED FOR CONTROLLED USE |
| C10-015 | Reversibility or defined recourse should increase with consequence | Strong guidance and safety logic | Some actions cannot be reversed; remedy may be required | SUPPORTED INTERPRETATION |
| C10-016 | Intervention should include refusal, pause, cancellation, revocation, rollback, fallback, containment and decommissioning | Strong authoritative and runtime-assurance evidence | One universal kill switch is unsafe and unrealistic | VERIFIED WITH CONTEXT |
| C10-017 | Action evidence should identify acting identity, authority, tool use, handoffs, state changes and outcomes proportionately | Strong authoritative and provenance evidence | Do not require total retention or chain-of-thought | VERIFIED |
| C10-018 | Runtime evidence should support both live intervention and later assurance | Strong synthesis from monitoring and assurance evidence | Evidence completeness remains bounded | SUPPORTED INTERPRETATION |
| C10-019 | Large, long-horizon or multi-agent traces may reduce practical oversight | Strong current technical-policy evidence | Do not claim inevitable loss of oversight | VERIFIED WITH UNCERTAINTY |
| C10-020 | More logs do not automatically create better oversight | Strong assurance and monitoring evidence | Design material-event visibility rather than indiscriminate retention | VERIFIED |
| C10-021 | Multi-agent safety cannot be inferred from component safety alone | Strong authoritative and systems evidence | Do not claim all multi-agent systems are unsafe | VERIFIED |
| C10-022 | Governance reach differs across singular, federated and open multi-agent arrangements | Strong authoritative | Distinguish control, influence, dependency and residual risk | VERIFIED |
| C10-023 | Protocols such as A2A and MCP provide useful identity, task and authorisation primitives | Strong primary technical | Protocol compliance does not confer institutional legitimacy | VERIFIED |
| C10-024 | Agent security includes prompt injection, unsafe tool use, memory manipulation and excessive privilege | Strong benchmark and guidance evidence | Results remain model-, tool- and environment-specific | VERIFIED |
| C10-025 | Pre-deployment evaluation is a gate, not a permanent assurance conclusion | Strong evidence-informed synthesis | Re-evaluate after material change | APPROVED FOR CONTROLLED USE |
| C10-026 | Benchmark performance and attack rates should not be generalised beyond tested conditions | Strong methodological evidence | Use benchmarks for threat and test design | VERIFIED |
| C10-027 | Permission and controls should be reassessed after material changes in model, tools, permissions, data, memory, counterparties or context | Strong lifecycle guidance | Define materiality proportionately | VERIFIED |
| C10-028 | Adaptive governance is an institutional process, not an agent rewriting its own rules | Strong governance interpretation | Human and institutional authority remains controlling | VERIFIED |
| C10-029 | Agentic risks are partly extensions of established automation, identity and cybersecurity problems | Strong hostile evidence | Emphasise the changed combination of features | VERIFIED |
| C10-030 | Bounded delegated action can create legitimate organisational value | Strong contrary evidence | The chapter governs action rather than arguing against it | VERIFIED |
| C10-031 | Delegation does not transfer accountability to the agent | Strong established book architecture and governance evidence | Distributed operational responsibility may still be legitimate | APPROVED FOR MANUSCRIPT USE |
| C10-032 | The organisation remains accountable for purpose, authority, controls, evidence, recourse and withdrawal | Strong authoritative and book-level synthesis | Do not imply agents are moral or legal principals | VERIFIED |

## Safe wording and prohibited overstatement

### Agentic spectrum

**Safe:**

> Agentic AI describes different combinations of planning, tool use, state, persistence, delegation and supervision.

**Unsafe:**

> Agentic AI begins at one universal threshold of autonomy.

### Identity and authorisation

**Safe:**

> Identity establishes who or what is requesting action; authorisation determines whether that action is permitted in the present context.

**Unsafe:**

> An authenticated agent is an authorised agent.

### Runtime enforcement

**Safe:**

> When AI can act, governance must be enforceable at the point where authority becomes action.

**Unsafe:**

> Every governance requirement should be converted into software policy.

### Human approval

**Safe:**

> Human approval is strongest when it occurs before a consequential action and the reviewer has the information, time and authority to change the outcome.

**Unsafe:**

> A human approval step makes agentic action safe.

### Intervention

**Safe:**

> Intervention design should consider refusal, pause, cancellation, revocation, rollback, fallback, containment and recourse.

**Unsafe:**

> Every agent needs one kill switch that safely solves loss of control.

### Observability

**Safe:**

> Runtime observability should preserve enough information about identity, authority, tool use, state change and outcome to support intervention and accountability.

**Unsafe:**

> Recording chain-of-thought provides a complete and reliable explanation.

### Multi-agent systems

**Safe:**

> The safety of a multi-agent arrangement cannot be inferred by adding together the safety claims of its components.

**Unsafe:**

> Multi-agent systems inevitably become uncontrollable.

### Evaluation

**Safe:**

> Pre-deployment evaluation is a gate, not a permanent assurance conclusion.

**Unsafe:**

> Passing a recognised agent benchmark demonstrates safe real-world deployment.

### Adaptive governance

**Safe:**

> Adaptive governance means revisiting authority, boundaries, evidence and intervention when capability, context or consequence changes materially.

**Unsafe:**

> The AI system should autonomously rewrite its governance rules.

## Three-Layer Evidence Test

### Evidence establishes

- agentic systems vary in autonomy, tool use, persistence, delegation and coordination;
- identity, delegated authorisation, least privilege and action-level policy checks are current control priorities;
- selected consequential actions benefit from stronger approval and intervention;
- action traces, handoffs, state changes and outcomes matter for monitoring and reconstruction;
- multi-agent systems can generate interaction-level risks;
- benchmarks and oversight methods have material limitations;
- permission and controls need reassessment after material change.

### Reasonable interpretation

- governance should focus on actual authority and action rather than vendor labels;
- identity and capability do not establish current permission;
- material boundaries need operational controls near execution;
- intervention should include prevention, interruption, recovery and recourse;
- evidence should travel with material action sufficiently for live intervention and later assurance;
- the complete multi-agent arrangement requires system-level governance;
- institutional permission should adapt when capability, tools, counterparties or consequence change.

### Gardner synthesis

- when AI can act, governance must be enforceable where authority becomes action;
- delegated action should remain bounded, attributable, observable, interruptible and revocable, with reversibility or recourse proportionate to consequence;
- the relevant governance object is the complete action path rather than the model or final output alone;
- Chapter 10 integrates existing book constructs rather than introducing a new framework;
- the organisation must remain able to govern what it permits AI to do.

## Contradiction and challenge log

| ID | Challenge | Effect on safe wording | Resolution |
|---|---|---|---|
| CH10-01 | Agentic risks are partly evolutionary | Avoid unprecedented-risk language | CLOSED WITH QUALIFICATION |
| CH10-02 | Autonomy can create legitimate value | Govern rather than prohibit delegated action | CLOSED |
| CH10-03 | Human approval can become ceremonial | Combine human decisions with bounded tools and evidence | CLOSED |
| CH10-04 | Runtime controls may fail or enforce a bad rule | Preserve testing, challenge, judgement and recourse | CLOSED |
| CH10-05 | Complete traces may be impossible or harmful | Require proportionate material-action evidence | CLOSED WITH QUALIFICATION |
| CH10-06 | Abrupt shutdown can create damage | Use a portfolio of pause, fallback, rollback and recovery | CLOSED |
| CH10-07 | Protocol compliance does not equal governance | Separate technical primitives from institutional authority | CLOSED |
| CH10-08 | Safe components may combine badly | Evaluate the complete arrangement | CLOSED |
| CH10-09 | Benchmarks have transfer and reproducibility limits | Confine results to tested settings | CLOSED |
| CH10-10 | Current standards remain immature | Retain monitoring and publication-stage currency checks | OPEN MONITORING |

## Monitoring register

Recheck before publication if:

- NIST publishes formal agent identity, authorisation, security or interoperability guidance;
- the NIST AI Agent Standards Initiative issues material deliverables;
- allied cyber agencies revise joint agentic-AI guidance;
- A2A or MCP changes identity, delegation, authorisation or task semantics;
- Australia releases additional AI Safety Institute findings or mandatory obligations;
- the EU issues agent-specific implementing guidance or standards;
- stronger evidence emerges on agent controls, multi-agent failure, runtime monitoring, long-horizon oversight or intervention effectiveness;
- materially identical whole-book runtime-action synthesis appears in prior art.

## Release note

**Evidence adequate for intended use:** yes, with stated qualifications  
**Unresolved high-materiality evidence gaps:** none at research stage  
**Provenance decision:** approved — no new named framework  
**Reuse status:** verified for detailed briefing and first draft  
**Monitoring required:** yes — fast-moving standards, protocols and empirical evidence
