# AI Agent Foundations

## Document status
- **Status:** Candidate
- **Owner:** Alec Gardner
- **Knowledge domain:** AI agents / foundations

## Knowledge statement
An AI agent is best understood as a system that can pursue a defined goal across one or more steps, use relevant context, select actions and potentially interact with tools or connected systems within defined permissions.

## Supported interpretation
A useful conceptual distinction is:
- conversational AI responds primarily to user prompts;
- an AI assistant supports a broader range of user tasks using instructions and context;
- an AI agent may plan and act toward a goal with less step-by-step human direction.

These categories can overlap in real products and should not be treated as universally fixed technical definitions.

## Practical model
**Observe → Plan → Act**
- Observe: receive and interpret relevant information.
- Plan: determine the steps required to pursue the goal.
- Act: use permitted tools, systems or outputs to perform approved tasks.

## Design implications
A custom agent should define:
- purpose and user;
- instructions and behavioural rules;
- knowledge/context;
- tools and connections;
- permissions;
- human checkpoints;
- evaluation and testing.

## Boundary conditions
Greater autonomy does not imply unlimited authority. Consequential decisions involving people, money, privacy, safety, legal obligations or material organisational risk require explicit human decision rights.

## Provenance
- NAT11423006 Lecture 1 source synthesis
- NEX-KMAP-001

## Reuse status
Candidate for Nexus AI system design, learning design and research. Not approved AIRBOK doctrine.
