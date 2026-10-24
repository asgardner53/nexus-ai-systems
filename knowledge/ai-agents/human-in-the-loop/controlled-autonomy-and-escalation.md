# Controlled Autonomy and Human Escalation

## Document status
- **Status:** Candidate
- **Owner:** Alec Gardner
- **Knowledge domain:** AI agents / human-in-the-loop

## Knowledge statement
Organisational AI agents should be designed for controlled autonomy: enough authority to perform useful work, with explicit boundaries, escalation rules and human decision points proportionate to the consequence of the action.

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

## Provenance
- NAT11423006 Lecture 4 source synthesis
- NEX-KMAP-003

## Reuse status
Candidate for Nexus AI system design, governance research, learning design and client advisory development. Not approved AIRBOK doctrine or legal advice.
