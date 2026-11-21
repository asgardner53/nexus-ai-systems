# Chapter 10 Research Brief v0.1 — When the System Begins to Act

**Book:** *AI Governance in Practice*  
**Author:** Alec Gardner  
**Date:** 2026-11-19  
**Materiality:** M3 — publication evidence and original-synthesis provenance control  
**Execution mode:** current official-source research, original academic and conference sources, and controlled GitHub project records. Scite was attempted but unavailable because the connected call limit had been reached; no Scite analysis or Deep Research run is claimed.  
**Human decision owner:** Alec Gardner  
**Research outcome:** **EVIDENCE PASS / PROVENANCE APPROVED / DETAILED BRIEF AUTHORISED**

## Research question

How should organisations govern AI systems that move from generating information or recommendations to planning and initiating actions through tools, services, records and other agents; what runtime controls, intervention mechanisms, traceability and adaptive-governance arrangements are supported by current evidence; and what can this book claim as a distinctive contribution without repackaging established agent-security, identity, runtime-assurance and human-control work?

## Chapter role

Chapter 9 ended with the question:

> **What happens when the system begins to act faster than the organisation can reconstruct?**

Chapter 10 completes the book by moving from retrospective evidence and periodic assurance into governance while delegated action is occurring.

The chapter moves the reader from:

> We approved the agent, assigned an owner, restricted its tools and retained logs.

To:

> **At each consequential step, can the organisation determine which identity is acting, what authority applies now, which boundary is in force, what changed, who can still interrupt or revoke the action, what recourse remains and who is institutionally accountable?**

The chapter must not become speculative futurism, a product survey or a security implementation manual. Agentic AI intensifies rather than replaces the book's central problem: authority can migrate into systems and action paths while formal accountability remains human and institutional.

## Concise evidence answer

### 1. Agentic capability is a spectrum

Current OECD, NIST and government guidance treats agentic systems as differing combinations of planning, tool use, state, persistence, delegation, coordination and reduced supervision. Governance should therefore focus on the authority, tools and consequences present in the work rather than depend on whether a vendor labels the product an agent.

Safe formulation:

> **The governance significance of an agent lies in what it can cause to happen, not in whether it is marketed as autonomous.**

### 2. The material shift is from output to action

An acting system can invoke tools, modify records, send communications, spend resources, use credentials, delegate tasks and trigger downstream systems. The risk is not autonomy in the abstract. It is the combination of permission, access, speed, scale, persistence, interdependence, reversibility and consequence.

Approved Gardner synthesis:

> **The relevant governance object is the complete action path connecting identity, authority, tools, state changes, counterparties, evidence and recourse — not the model or final output alone.**

The phrase *action path* remains descriptive lower-case language, not a new named framework.

### 3. Identity and capability do not establish current authority

NIST identity and authorisation work, allied cyber guidance and current protocol specifications distinguish machine identity, authentication, delegated access, least privilege, contextual authorisation and auditable grant chains. An authenticated agent may still lack permission for the requested action, resource, amount, purpose, counterparty or time.

Safe formulation:

> **Identity establishes who or what is requesting action; authorisation determines whether that action is permitted in the present context.**

### 4. Governance must enter the execution path

Prompts, policies and model-level guardrails remain useful but cannot by themselves prevent an external tool, credential or workflow from performing an unauthorised action. Current evidence supports scoped identities, action-level checks, restricted tools, sandboxing, policy-enforcement hooks, step-up approval, rate or transaction limits, checkpoints, egress controls and fail-closed behaviour.

Approved dominant proposition:

> **When AI can act, governance must be enforceable at the point where authority becomes action.**

This does not mean every governance requirement should be hard-coded. Material authority boundaries need operational controls near execution while professional and institutional judgement remains available where context matters.

### 5. Meaningful intervention requires more than a kill switch

Current evidence supports selective human approval for high-impact or difficult-to-reverse actions, live monitoring, interruption, cancellation, credential revocation, rollback, containment, fallback and safe decommissioning. It also shows why repeated approval requests and one emergency stop can be weak or unsafe controls.

Approved supporting proposition:

> **Delegated action should remain bounded, attributable, observable, interruptible and revocable, with reversibility or defined recourse proportionate to consequence.**

### 6. Multi-agent safety is a system property

Australia's AI Safety Institute and current systems research show that individually tested agents may form an arrangement with cascading error, amplification, false consensus, identity confusion or weaker governance reach. Singular, federated and open arrangements provide different degrees of organisational control.

Safe formulation:

> **The safety of a multi-agent arrangement cannot be inferred by adding together the safety claims of its components.**

### 7. Evaluation and permission must adapt

AgentDojo, ToolEmu, Agent Security Bench and related work reveal prompt-injection, unsafe-tool-use, memory and privilege risks, while *AI Agents That Matter* warns about cost, reproducibility, benchmark overfitting and deployment transfer. UK AISI research also shows how long traces and multi-agent activity can weaken practical oversight.

Safe formulation:

> **Pre-deployment evaluation is a gate, not a permanent assurance conclusion.**

Permission and controls should be revisited after material change in models, tools, permissions, data, prompts, memory, counterpart agents, integrations, context or consequence.

## Primary and authoritative evidence

### NIST AI Agent Standards Initiative

Supports the importance of interoperability, secure external action, identity and agent-security standards. The initiative remains under development and is not a completed regulatory framework.

### NIST CAISI agent-security work

Supports indirect prompt-injection, specification-gaming and access-control concerns while recognising that established cybersecurity remains relevant but requires adaptation.

### NIST NCCoE identity and authorisation concept work

Supports distinct identity, delegated authority, proof of authority, least privilege, dynamic policy, auditability and binding action to a human or institutional principal. It is concept-stage work rather than a final standard.

### Allied cyber-agency guidance

ASD, CISA, NSA, Canadian, New Zealand and UK agencies support low-risk initial deployment, distinct non-human identities, minimum privilege, runtime authorisation, expiring delegation, human approval for selected actions, live intervention, reversibility, rate limits and checkpoints.

### Australian Guidance for AI Adoption

Supports proportionate human oversight, pause mechanisms, dynamic guardrails, access controls, monitoring, intervention, decommissioning and alternative pathways.

### Australian AI Safety Institute

Supports the conclusion that multi-agent safety is a property of the complete arrangement and that governance reach changes across singular, federated and open environments.

### OECD agentic-AI work

Supports agentic AI as a spectrum rather than one binary category and highlights longer-horizon, delegated and coordinated action.

### A2A and MCP specifications

Provide useful primitives for identity, authenticated requests, tasks, capability descriptions, authorisation prompts and state. They do not decide legitimate institutional purpose, risk acceptance, accountability or remedy.

### OWASP agent-security and control work

Supports inspectability, runtime enforcement, restricted tools, action boundaries, traceability and portable control patterns. It remains technical prior art, not a complete organisational-governance model.

## Academic and evaluation evidence

- **AgentDojo:** indirect prompt-injection and tool-use security evaluation across realistic tasks.
- **ToolEmu:** emulated high-stakes tools and potentially severe agent failures.
- **Agent Security Bench:** attacks across prompts, tools and memory; current defences remain limited and setting-dependent.
- **AI Agents That Matter:** benchmark cost, reproducibility, overfitting and research-to-deployment limitations.
- **Runtime assurance and Simplex prior art:** monitoring an advanced controller and transferring control to a constrained fallback where defined properties are violated.
- **Meaningful human control scholarship:** human control requires more than final-step approval and depends on information, authority and intervention capacity.
- **UK AISI oversight research:** longer tasks, complex memory, tool use and multi-agent collaboration can make monitoring and investigation harder.

## Hostile and contrary evidence

### Agentic risks are not wholly new

Prompt injection, excessive privilege, identity spoofing, insecure delegation and cascading failure have established antecedents. The chapter should emphasise the changed combination of probabilistic planning, natural-language instruction, tool access, speed, persistence and reduced intervention opportunity.

### More delegated action can create legitimate value

Agents can reduce hand-offs, extend service availability and complete bounded work. The chapter should govern delegated action rather than argue against it.

### Human approval can become ceremonial

Approval fatigue, weak evidence and time pressure can turn human review into ritual acceptance. Combine selected human decisions with bounded tools, thresholds and machine-enforced limits.

### Runtime controls can fail or enforce the wrong boundary

A monitor may fail, a policy may encode an illegitimate rule and a fallback may be unavailable. Retain red teaming, evaluation, professional judgement, recourse and institutional accountability.

### Complete observability is neither realistic nor always desirable

Provider-side events, tacit judgement and cross-organisational handoffs may remain opaque. Extensive traces can create confidentiality, security and retention risk. Retain enough evidence for material action and intervention, not every possible trace.

### A kill switch can create harm

Abrupt shutdown can strand transactions, interrupt services or leave unsafe partial state. Design controlled pause, safe degradation, rollback, fallback, recovery and post-action remedy.

### Protocol compliance does not equal governance

Technical protocols can carry identity and task state without determining legitimate purpose, authority, institutional accountability or remedy.

### Benchmarks remain context-bound

Use attack and benchmark results for threat modelling and control design, not as universal real-world incident rates.

## Three-Layer Evidence Test

### Evidence establishes

- agentic systems vary in planning, tool use, persistence, delegation and coordination;
- identity, delegated authorisation and least privilege are current priorities;
- action-level controls can reduce the consequences of model-level failure;
- selected consequential actions benefit from stronger approval and intervention;
- material tool calls, handoffs, state changes and outcomes matter for monitoring and reconstruction;
- multi-agent arrangements can create interaction-level risks;
- evaluation and oversight methods remain limited;
- permission and controls require reassessment after material change.

### Reasonable interpretation

- governance should focus on actual authority and action rather than product labels;
- identity and technical capability do not establish current permission;
- material boundaries need operational controls near execution;
- human decision points should reflect consequence, uncertainty and reversibility;
- intervention should include prevention, pause, revocation, rollback, fallback, containment and recourse;
- evidence should travel with material action sufficiently for intervention and later assurance;
- the complete multi-agent arrangement requires governance and evaluation;
- institutional permission should adapt when capability, context or consequence changes.

### Gardner synthesis

> **When AI can act, governance must be enforceable at the point where authority becomes action.**

> **Delegated action should remain bounded, attributable, observable, interruptible and revocable, with reversibility or defined recourse proportionate to consequence.**

> **The relevant governance object is the complete action path connecting identity, authority, tools, state changes, counterparties, evidence and recourse — not the model or final output alone.**

## Originality and provenance conclusion

No new named Chapter 10 framework is authorised. Terms such as *runtime authority*, *authority envelope*, *action boundary*, *runtime governance* and *runtime assurance* have substantial prior art.

The defensible Gardner contribution is the whole-book integration:

1. extending delegated authority into action as it occurs;
2. applying Governance as Permission to runtime checks, expiry, escalation and revocation;
3. applying Meaningful Accountability to intervention under speed and uncertainty;
4. extending the Evolved Governance Chain into tool calls, handoffs and state changes;
5. linking identity, permission, action, evidence, recourse and institutional accountability;
6. closing the book around four propositions:
   - capability does not confer authority;
   - delegation does not transfer accountability;
   - successful execution does not eliminate the need for assurance;
   - when AI can act, governance must be enforceable at the point where authority becomes action.

## Chapter boundary

Chapter 10 owns:

- the shift from output to action;
- agentic AI as a spectrum;
- identity, delegated authority and action-level authorisation;
- tool use, state change and downstream consequence;
- runtime controls, containment and policy enforcement;
- human approval, interruption, revocation, rollback and recourse;
- action traceability and oversight limits;
- multi-agent and cross-organisational governance reach;
- adaptive reassessment after material change;
- final integration of the book's approved propositions.

It should not become a protocol comparison, zero-trust implementation manual, security taxonomy, product-incident catalogue, speculative superintelligence chapter or new maturity model.

## Narrative opportunity

Continue the knowledge-assistant case. After controlled expansion, the assistant may open and assign procedure-review tasks. It encounters conflicting procedures, asks another organisational agent for ownership information and opens several tasks. A downstream scheduling system interprets the tasks as priority work and reschedules operations; one task enters a supplier workflow. Each action is permitted somewhere, but nobody consciously authorised the complete consequence.

Opening question:

> **At what point did permission become action that nobody could still meaningfully interrupt?**

The chapter should close the book by returning to its central question: can the organisation still exercise judgement, assign authority, intervene and remain accountable for what it permits AI to do?

## Gate outcome

- **Evidence:** PASS
- **Agentic-authority architecture:** PASS WITH QUALIFICATION
- **Doctrine integrity:** PASS WITH QUALIFICATION
- **Originality:** PASS FOR WHOLE-BOOK INTEGRATION / FAIL FOR A NEW NAMED FRAMEWORK
- **Provenance package:** APPROVED
- **Detailed chapter brief:** AUTHORISED
- **Drafting decision:** SAFE TO DEVELOP AND LOCK THE DETAILED CHAPTER BRIEF
