# NAT11423006 Source Synthesis — Lecture 4

## Status
**Draft source synthesis. Not approved doctrine.**

## Reusable concepts identified

1. Controlled autonomy is preferable to unconstrained autonomy in organisational AI-agent design.
2. Human-in-the-loop checkpoints should be deliberately placed where judgement, authority or risk requires human involvement.
3. Escalation can be triggered by low confidence, complexity, urgency, sensitivity, frustration, repeated failure or defined business rules.
4. Guardrails define what an agent may and may not do; escalation defines when the agent should hand control to a human.
5. Agent performance should be evaluated against explicit criteria such as correctness, relevance, groundedness, safety, instruction adherence and escalation behaviour.

## Public source set
- MindStudio — human-in-the-loop checkpoints
- Replicant — human handoff and escalation
- Zendesk — escalation strategies for AI agents
- Twig — escalation to human agents
- MindStudio — no-code AI-agent builders
- Dust — no-code AI-agent builder
- MindStudio — 24/7 AI agents
- Agno — guardrails for AI agents
- MindStudio — evaluators and verifiers
- Lander & Rogers — human-in-the-loop by design
- MLflow — LLM as a judge

## Knowledge candidates
- `knowledge/ai-agents/human-in-the-loop/controlled-autonomy-and-escalation.md`

## Limitations
Commercial implementation guidance can provide useful patterns but should be distinguished from independent technical, legal or regulatory authority. Evaluation methods such as LLM-as-a-judge have limitations and should not automatically replace human evaluation for consequential decisions.

## Five retained takeaways
1. Full autonomy is not the goal; controlled autonomy is.
2. A good agent knows when to stop and escalate.
3. Guardrails define what an agent may and may not do.
4. Useful agents can be built without traditional programming through no-code tools.
5. Agents should be evaluated against defined criteria rather than labelled simply “good”.
