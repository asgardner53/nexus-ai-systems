# AI Agent Foundations

## Document control
- **Version:** 0.1
- **Document status:** Draft
- **Knowledge maturity:** Candidate
- **Owner:** Alec Gardner
- **Approval authority:** Alec Gardner
- **Prepared:** 24 October 2026
- **Effective date:** Not effective — draft candidate
- **Next review:** Before promotion to evidence-supported status or on material source change
- **Repository path:** `knowledge/ai-agents/foundations/ai-agent-foundations.md`
- **Change history:** v0.1 establishes the initial reusable foundations entry.

## Knowledge statement
An AI agent is best understood as a system that can pursue a defined goal across one or more steps, use relevant context, select actions and potentially interact with tools or connected systems within defined permissions.

## Claim status
**Supported interpretation.** This entry synthesises multiple practitioner/vendor sources and course material. It is not yet independently verified to M2 evidence standard.

## Evidence base

| Source synthesis | Source class | Date checked | Contribution | Limitation |
|---|---|---|---|---|
| `knowledge/source-syntheses/NAT11423006/lecture-01.md` | Mixed practitioner/vendor course source set | 23 Oct 2026 | Assistant/agent distinctions, Observe-Plan-Act, customisation, human oversight | Predominantly commercial/practitioner sources; independent verification pending |

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

## Risks and failure modes
- treating marketing terminology as universal technical taxonomy;
- giving an agent broader permissions than its task requires;
- confusing autonomous action with organisational authority;
- failing to define human review for consequential actions.

## Human decision points
Humans retain authority over consequential decisions and over any promotion of this entry to an approved reuse status.

## Provenance
- `knowledge/source-syntheses/NAT11423006/lecture-01.md`
- NEX-KMAP-001

## Reuse status
Draft candidate only. Suitable as a research input; not yet approved for controlled Nexus reuse or AIRBOK doctrine.
