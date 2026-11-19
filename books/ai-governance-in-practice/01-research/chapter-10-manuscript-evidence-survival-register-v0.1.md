# Chapter 10 Manuscript Evidence Survival Register v0.1

**Book:** *AI Governance in Practice*  
**Chapter:** 10 — When the System Begins to Act  
**Controlled manuscript:** `chapter-10-when-the-system-begins-to-act-v0.1.md`  
**Date:** 2026-11-19  
**Materiality:** M3  
**Decision:** **CONDITIONAL PASS — four local citation-visibility repairs required**

## Overall judgement

The Chapter 10 evidentiary backbone survived drafting. The manuscript visibly retains the evidence on agentic AI as a spectrum, the shift from output to action, distinct non-human identity, contextual authorisation, action-level enforcement, selective human approval, intervention and recourse, proportionate traceability, oversight limits, multi-agent system risk, evaluation limitations and reassessment after material change.

The hostile and contrary evidence also survives. The chapter acknowledges legitimate value from bounded delegated action, the evolutionary character of several risks, the limitations of human approval, the possibility that runtime controls enforce a poor rule, the risks of excessive trace collection, the limits of kill switches and the context-bound nature of benchmarks.

No invented source, unverifiable citation, material claim–source mismatch, universal agent-safety claim, speculative sentience claim or new Gardner framework presented as externally validated was identified.

Four local repairs are required before Evidence Survival and Citation Visibility receive full PASS. They do not alter the argument, final-chapter architecture, narrative or whole-book conclusion.

## Claim-level survival

| Claim group | Manuscript visibility and warrant | Decision |
|---|---|---|
| C10-001 to C10-004 | Agentic spectrum, output-to-action shift and complete action path remain visible and appropriately separated from vendor labels | PASS |
| C10-005 to C10-010 | Identity, authentication, contextual authorisation, principal binding, least privilege and action-level enforcement remain visible | CONDITIONAL PASS — E10-01 and E10-03 |
| C10-011 to C10-016 | Restricted tools, selective approval, intervention, revocation, rollback, fallback and recourse remain visible and qualified | CONDITIONAL PASS — E10-02 |
| C10-017 to C10-020 | Runtime evidence, grant chains, traceability, chain-of-thought limits and oversight-volume limits remain visible | CONDITIONAL PASS — E10-03 and E10-04 |
| C10-021 to C10-023 | Multi-agent system risk, governance reach and protocol limits remain visible | PASS |
| C10-024 to C10-027 | Security benchmarks, deployment-transfer limits and material-change reassessment remain visible | PASS |
| C10-028 to C10-032 | Adaptive governance, evolutionary risks, legitimate value, institutional accountability and whole-book synthesis remain visible | PASS |

## Repair E10-01 — Protocol authorisation semantics

### Current manuscript movement

The manuscript correctly states that A2A and MCP can carry authenticated requests, task state and authorisation prompts, and that a protocol may indicate that additional authorisation is required without itself supplying institutional permission.

### Evidence position

This is supported by the current A2A and MCP specifications, including their separation of protocol state and authenticated requests from the actual scope and grant of authority.

### Required repair

Add direct support to the second protocol paragraph:

> Technical interoperability helps systems coordinate. Institutional legitimacy still has to come from the organisation (A2A Protocol, 2026; Model Context Protocol, 2026).

This prevents a consequential protocol claim from relying only on the preceding paragraph's citation.

## Repair E10-02 — Meaningful human approval

### Current manuscript movement

The manuscript states that approval is strongest before consequential or difficult-to-reverse action where the reviewer has information, time, authority and a practical alternative.

### Evidence position

The claim is supported by meaningful-human-control scholarship and current joint and Australian guidance on selected high-impact actions, intervention and human oversight.

### Required repair

Add direct support to the sentence:

> Approval is strongest when it occurs before a consequential or difficult-to-reverse action and the reviewer has the information, time, authority and practical alternative needed to change the outcome (Calvert, 2025; ASD et al., 2026; Australian Government, 2026).

## Repair E10-03 — Grant-chain traceability

### Current manuscript movement

The manuscript states that a runtime trace should preserve the grant chain and distinguish authority inherited from a human role, delegated to a service identity, requested dynamically by an agent and accepted by a downstream system.

### Evidence position

NIST NCCoE identity and authorisation work and allied cyber guidance support principal binding, delegated authority, expiring permission and auditable grant chains.

### Required repair

Add direct support at the end of the grant-chain paragraph:

> Otherwise the organisation may know which component acted while remaining unable to explain why the component was entitled to act (NIST NCCoE, 2026; ASD et al., 2026).

## Repair E10-04 — Chain-of-thought and reasoning traces

### Current manuscript movement

The manuscript correctly rejects chain-of-thought as a complete or necessarily reliable governance explanation.

### Evidence position

UK AI Security Institute work on loss of oversight supports the boundary that internal reasoning signals may be partial, difficult to interpret or strategically unreliable as systems become more capable and operate over longer horizons.

### Required repair

Add direct support to the sentence:

> Nor should it treat chain-of-thought as a complete or reliable explanation of action (UK AI Security Institute, 2026a).

## Three-Layer Evidence Test

### Evidence establishes

- agentic systems vary in planning, tool use, persistence, delegation, coordination and supervision;
- identity and authentication are distinct from current contextual authority;
- scoped identities, least privilege, expiring delegation and action-level checks are current control priorities;
- selected consequential actions benefit from stronger approval and intervention;
- runtime evidence should include material identities, permissions, tool calls, handoffs, state changes and outcomes;
- multi-agent arrangements can generate interaction-level risk;
- benchmarks and oversight methods have important limits;
- permission and controls require reassessment after material change.

### Reasonable interpretation

- governance should follow actual authority and action rather than vendor labels;
- material authority boundaries need controls near execution;
- human approval should be selective and meaningful rather than universal and ceremonial;
- intervention should include prevention, interruption, recovery and recourse;
- observability should be designed around material authority and consequence;
- the complete multi-agent arrangement requires governance and evaluation;
- adaptive governance remains an institutional process.

### Gardner synthesis

- when AI can act, governance must be enforceable where authority becomes action;
- delegated action should remain bounded, attributable, observable, interruptible and revocable, with reversibility or recourse proportionate to consequence;
- the relevant governance object is the complete action path rather than the model or final output alone;
- Chapter 10 integrates the book's approved constructs and does not introduce a new named framework;
- the organisation must still be able to govern what it permits AI to do.

The layers remain reconstructable in the controlled prose.

## Contrary and limiting evidence survival

**PASS**

The manuscript preserves that:

- many agentic risks extend established automation, identity and cybersecurity problems;
- bounded delegated action may create legitimate value;
- human approval can become ritual or fatigue-inducing;
- runtime controls can fail or enforce a poor boundary;
- complete observability may be impossible, disproportionate or harmful;
- abrupt stopping can create unsafe partial state;
- protocols provide technical primitives rather than institutional legitimacy;
- individually safe components may combine into an unsafe system;
- benchmark results remain confined to tested settings;
- adaptive governance does not authorise an agent to rewrite its own rules;
- delegation does not transfer institutional accountability.

## No-new-framework provenance survival

**PASS**

The manuscript:

- introduces no new named Chapter 10 framework;
- keeps *action path* descriptive and lower case;
- treats runtime authority, authority envelopes, runtime governance and runtime assurance as prior-art language;
- identifies the original contribution as integration with the book's Meaningful Accountability architecture;
- does not imply technical-standard, legal, scoring, maturity or certification status.

## Citation Visibility Test

**CONDITIONAL PASS**

The chapter generally places evidence where needed and avoids a standards parade. Open items are limited to:

- **E10-01:** protocol authorisation semantics;
- **E10-02:** meaningful human approval conditions;
- **E10-03:** grant-chain traceability;
- **E10-04:** chain-of-thought and reasoning-trace limitation.

Publication-stage source controls remain for exact 2026 source titles, dates and protocol versions. These are later integrity controls rather than developmental evidence defects.

## Decision

**FORENSIC EVIDENCE SURVIVAL: CONDITIONAL PASS**  
**CITATION VISIBILITY: CONDITIONAL PASS**  
**CLAIM ENTAILMENT: PASS**  
**CONTRARY EVIDENCE SURVIVAL: PASS**  
**NO-NEW-FRAMEWORK PROVENANCE: PASS**

Proceed to Theory, Red-Team, Engrossment and Whole-Book-Closing review, then prepare a targeted Chapter 10 v0.2 Author Revision closing E10-01 to E10-04 before the complete gate re-run and clean author-reading version.
