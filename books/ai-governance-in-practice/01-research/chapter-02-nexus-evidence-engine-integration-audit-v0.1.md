# Chapter 2 — Nexus Evidence Engine Integration Audit v0.1

**Book:** *AI Governance in Practice*  
**Chapter:** 2 — When Policy Exists but Control Does Not  
**Date:** 2026-11-17  
**Materiality:** M3 — publication evidence control  
**Execution mode:** Firecrawl, Scite and GitHub; no Deep Research run claimed  
**Human decision owner:** Alec Gardner  
**Decision:** **PASS WITH LIMITED PROOF CORRECTIONS — architecture remains closed**

## Research question

Does the controlled evidence adequately support the chapter's distinction between declared AI governance and governance that changes organisational decisions, permissions, controls, evidence and behaviour?

## Scope

The audit tested:

1. policy and principles as necessary but insufficient;
2. formal policy-practice decoupling;
3. operational governance through roles, authority, controls, monitoring and feedback;
4. governance artefacts versus governance capability;
5. instruction versus enforceable control;
6. false assurance created by weak coupling;
7. the need to revisit approvals when operating conditions change;
8. the corrective proposition that policy, standards and training can strengthen governance when internalised.

## Evidence outcome

The chapter's argument remains well supported.

ISO/IEC 42001 defines an AI management system as organisational elements that establish policies and objectives and the processes required to achieve them. The official standard description requires implementation, maintenance, performance evaluation and continual improvement. This directly supports the chapter's central distinction between policy possession and governance capability.

The NIST AI RMF Govern Playbook requires implemented policies, processes, procedures and other controls, documented responsibilities and delegated authorities, training, monitoring, change management, periodic review and executive responsibility. It supports the chapter's operational account of governance without validating every Gardner phrase as NIST terminology.

Established organisational scholarship supports the phenomenon of formal policy becoming decoupled from day-to-day practice. Westphal and Zajac provide empirical evidence of policy-practice decoupling; de Bree and Stoopendaal define and analyse the gap between formal systems and actual implementation, including how regulation may support recoupling.

Current responsible-AI research strengthens the implementation argument. Papagiannidis, Mikalef and Conboy's review distinguishes high-level principles from structural, procedural and relational governance practices across the lifecycle. Cousineau, Dara and Chowdhury's interviews with 19 AI developers identify practical barriers involving inconsistent concepts, limited tools, regulatory uncertainty, training and monitoring. Sayan and Bueechl's 12 expert interviews similarly emphasise strategic direction, operational execution, cross-functional coordination and continuous adaptation.

The Stanford AI Index 2026 reports increasing formalisation of responsible-AI work while knowledge, budget and regulatory uncertainty continue to constrain implementation. This is contextual survey reporting, not evidence that policy adoption itself causes effective governance.

Important corrective evidence also survived the audit. Almeida and Santos Júnior's study of 28 public organisations across five continents found associations between more advanced governance and training, AI strategy, policy, ethical principles, standards, data governance and risk processes. This supports the chapter's restraint: the problem is not formalisation itself but whether formal governance is internalised and coupled to organisational practice.

## Claim decisions

### C02-001 — AI governance requires more than policies and principles

**Outcome:** VERIFIED / STRONG

**Evidence establishes:**
- ISO/IEC 42001 requires policies, objectives and processes, together with implementation, evaluation and continual improvement.
- NIST Govern requires policies, procedures and other controls to be effectively implemented, monitored and reviewed.

**Safe wording:**
Policy is foundational, but it becomes operational governance only through processes, roles, controls, evidence, monitoring and review.

**Unsafe overstatement:**
Policies are useless, merely symbolic or incapable of affecting practice.

### C02-002 — Formal governance can become decoupled from operational practice

**Outcome:** VERIFIED AS AN ORGANISATIONAL PHENOMENON; SUPPORTED APPLICATION TO AI

Westphal and Zajac and de Bree and Stoopendaal support the policy-practice gap. AI-specific studies support the application of that problem to responsible-AI implementation.

**Boundary:**
Decoupling is not necessarily deliberate. It may arise from incentives, capability, ambiguity, process distance, resource limits or competing priorities.

### C02-003 — Operational governance requires roles, authority, controls, monitoring and feedback

**Outcome:** VERIFIED / STRONG

ISO, NIST and the reviewed organisational evidence all support operational mechanisms beyond declared principles.

**Gardner synthesis:**
> **Governance exists where principles alter decisions, permissions, controls, evidence and behaviour.**

This remains author synthesis rather than an external standard definition.

### C02-004 — Responsible-AI implementation remains uneven despite increasing formalisation

**Outcome:** VERIFIED WITH QUALIFICATION

Stanford HAI reports increasing adoption of formal policies and governance roles alongside implementation barriers. Cousineau et al. and Sayan and Bueechl provide qualitative evidence of continuing operational difficulty.

**Boundary:**
The evidence is heterogeneous and partly survey- and interview-based. It should not be universalised as a single global maturity statistic.

### C02-005 — Policy, standards and training can strengthen governance when internalised

**Outcome:** VERIFIED AS ASSOCIATION / CORRECTIVE EVIDENCE

Almeida and Santos Júnior provide empirical evidence associating training, strategy, policy, ethical principles and standards with more advanced AI governance practices in public organisations.

**Boundary:**
The study does not establish policy alone as a causal driver, and its sample is self-selecting and not globally balanced.

### C02-006 — Instruction and enforceable control are different organisational mechanisms

**Outcome:** SUPPORTED GARDNER INTERPRETATION

NIST distinguishes policies and procedures from other controls and requires implementation, documentation, monitoring and change management. ISO requires operational implementation rather than declaration alone.

**Safe wording:**
An instruction states what should happen; an enforceable control changes what can happen, what must happen or what evidence is required before action proceeds.

**Boundary:**
This is Gardner explanatory language, not a formal ISO or NIST taxonomy. Not every requirement should be technically enforced.

### C02-007 — Governance artefacts can create false assurance where operational coupling is weak

**Outcome:** SUPPORTED GARDNER DIAGNOSTIC

Decoupling scholarship supports the possibility that documented structure and actual practice diverge.

**Boundary:**
Policies, committees and registers do not inherently create false assurance. The risk arises when their existence is treated as proof of control effectiveness without operational evidence.

### C02-008 — Static approval may become unreliable when operating conditions change

**Outcome:** VERIFIED AS GOVERNANCE IMPLICATION

NIST and ISO require ongoing monitoring, periodic review, change management and continual improvement.

**Safe wording:**
Approval should be revisited when material assumptions, use, data, capability or operating conditions change.

**Unsafe overstatement:**
Every approval expires automatically, or boards generally receive misleading AI reports.

## Three-Layer Evidence Test

### Evidence establishes
- AI management systems require processes and continual improvement beyond policy;
- formal policy can be decoupled from practice;
- responsible-AI implementation faces practical organisational barriers;
- governance arrangements depend on roles, coordination, training, monitoring and adaptation;
- formal strategy, policy, standards and training can support more advanced governance when internalised.

### Reasonable interpretation
- governance artefacts are not equivalent to governance capability;
- operational coupling determines whether principles survive contact with work;
- visible formalisation may create confidence that exceeds demonstrated control effectiveness.

### Gardner synthesis
> **Policy tells the organisation what it intends; governance determines what actually happens.**

> **Governance exists where principles alter decisions, permissions, controls, evidence and behaviour.**

> **False assurance** describes confidence based on visible governance artefacts where operational effectiveness has not been demonstrated.

## Challenge and boundary findings

1. **Policy can work.** Evidence does not support an anti-policy argument.
2. **Formalisation is not automatically theatre.** Weak implementation may reflect genuine difficulty rather than deception.
3. **Decoupling is context-dependent.** Institutional conditions and implementation mechanisms affect whether policy is enacted.
4. **More control is not automatically better.** Excessive approval and process can create avoidance and friction.
5. **Implementation evidence is heterogeneous.** Qualitative and survey findings should not be universalised.
6. **Association is not causation.** The public-organisation study supports internalisation and training but does not prove that policy alone produces governance maturity.
7. **Current survey figures are attributed findings.** Stanford HAI reports the figures; they should not be presented as a universal census of organisations.

## Citation Visibility Test

The controlled v0.5 proof manuscript preserves the central evidence, but two limited citation-visibility repairs are required:

1. The ISO/IEC 42001 description is followed only by a NIST citation. The sentence should cite both ISO and NIST.
2. The paragraph stating that formal governance can be effective when integrated into day-to-day practice should visibly cite Almeida and Santos Júnior (2025).

These are proof-stage citation repairs. They do not require developmental reopening or change the argument.

## Source-selection decisions

### Included
- ISO/IEC 42001 official description;
- NIST AI RMF Govern Playbook;
- Westphal and Zajac (2001);
- de Bree and Stoopendaal (2020 print citation; DOI published online in 2018);
- Papagiannidis, Mikalef and Conboy (2025);
- Cousineau, Dara and Chowdhury (2025);
- Sayan and Bueechl (2025);
- Almeida and Santos Júnior (2025);
- Stanford AI Index 2026 responsible-AI chapter.

### Excluded from carrying core claims
- recent organisational and MLOps preprints without developed citation histories;
- sector-specific healthcare governance frameworks unnecessary for a general chapter;
- redundant framework papers that did not improve claim support;
- very recent November 2026 papers retained only for monitoring.

## Reopening decision

No material claim-source mismatch, contrary finding, provenance failure or architecture problem was found.

The chapter remains closed to developmental rewriting.

A narrowly reconciled proof version may insert the two missing citations without changing prose, argument or status.

## Final decision

**PASS WITH LIMITED PROOF CORRECTIONS — ARCHITECTURE REMAINS CLOSED**

Required actions:

1. cite ISO and NIST together in the management-system paragraph;
2. cite Almeida and Santos Júnior (2025) in the formal-governance corrective paragraph;
3. retain the current qualification of governance theatre, implementation evidence and legal scope;
4. monitor NIST and current implementation evidence before publication;
5. retain Chapter 2 at Proof after the narrow correction.
