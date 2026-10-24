# Controlled Autonomy and Human Escalation

## Document control
- **Version:** 0.1
- **Document status:** Draft
- **Knowledge maturity:** Candidate
- **Owner:** Alec Gardner
- **Approval authority:** Alec Gardner
- **Prepared:** 24 October 2026
- **Effective date:** Not effective — draft candidate
- **Next review:** Before promotion to evidence-supported status or on material technical/legal change
- **Repository path:** `knowledge/ai-agents/human-in-the-loop/controlled-autonomy-and-escalation.md`
- **Change history:** v0.1 establishes the initial human-in-the-loop and escalation entry.

## Knowledge statement
Organisational AI agents should be designed for controlled autonomy: enough authority to perform useful work, with explicit boundaries, escalation rules and human decision points proportionate to the consequence of the action.

## Claim status
**Supported interpretation.** The entry synthesises vendor, technical and legal-practitioner sources. It is not legal advice and is not yet independently verified to M2 evidence standard.

## Evidence base

| Source synthesis | Source class | Date checked | Contribution | Limitation |
|---|---|---|---|---|
| `knowledge/source-syntheses/NAT11423006/lecture-04.md` | Mixed vendor, technical documentation and legal-practitioner source set | 24 Oct 2026 | Human checkpoints, escalation, guardrails, no-code agents and evaluation | Commercial bias in several sources; legal commentary is context-specific; independent verification pending |

## Core distinctions

### Human checkpoint
A person must review, confirm or approve a specified action or output before the workflow continues.

### Guardrail
A rule or technical control limits what the agent is permitted to do.

### Escalation
The agent transfers a case, decision or exception to a human when defined conditions are met.

## Candidate escalation signals
Depending on the workflow, escalation may be triggered by:
- low confidence;
- complex or exceptional cases;
- urgent or sensitive matters;
- repeated failure or looping;
- negative sentiment or user frustration;
- missing or conflicting information;
- a defined high-impact decision threshold;
- business rules requiring human approval.

## Evaluation implications
An agent should be evaluated not only on output quality but also on whether it:
- follows instructions;
- remains grounded in authorised information;
- respects permissions;
- escalates appropriately;
- avoids prohibited actions;
- behaves safely under edge cases.

## Boundary conditions
Automated evaluation can assist testing, but consequential decisions should not rely solely on an AI system judging another AI system. Human review remains required where material risk or accountability demands it.

## Risks and failure modes
- escalation thresholds that are too loose or too strict;
- guardrails that are described but not technically enforced;
- hidden human-accountability gaps;
- using automated evaluators as the sole assurance mechanism.

## Human decision points
Humans approve consequential actions, escalation policy, risk thresholds and any promotion of this entry to approved reuse status.

## Provenance
- `knowledge/source-syntheses/NAT11423006/lecture-04.md`
- NEX-KMAP-003

## Reuse status
Draft candidate only. Suitable as a research input; not approved AIRBOK doctrine, legal advice or governance policy.
