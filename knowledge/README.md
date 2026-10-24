# Nexus AI Knowledge Base

## Document control
- **Version:** 0.2
- **Document status:** Under Review
- **Owner:** Alec Gardner
- **Approval authority:** Alec Gardner
- **Effective date:** v0.1 remains effective; v0.2 proposed extension not yet effective
- **Next review:** Before v0.2 approval or earlier on material architecture change
- **Repository path:** `knowledge/README.md`
- **Change history:** v0.1 established the approved knowledge architecture. v0.2 proposes an Opportunity & Reuse layer while preserving the v0.1 evidence and approval boundaries.

This directory is the reusable Nexus AI knowledge layer. It converts learning, research, implementation evidence and controlled source syntheses into reusable knowledge objects without treating any single course, vendor article or source as authoritative doctrine.

## Governing principle

**AI assists. Humans decide. GitHub records.**

## Separation of layers

- `source-syntheses/` records what a particular source set or learning activity contributed.
- `ai-agents/` contains reusable concept and implementation knowledge.
- `indexes/` supports discovery and traceability.
- `governance/` contains lifecycle and governance controls for this knowledge layer.
- `reuse-maps/` maps knowledge into potential downstream channels and products without implying approval.
- `indexes/` also includes an Opportunity & Reuse Index for triage and prioritisation.
- `control-drafts/` may hold proposed reusable records until separately approved.
- Authoritative reusable templates and registers remain governed by the repository-level `templates/` and `registers/` folders.

Course materials may inform this knowledge base but must not be copied into it beyond what is permitted. Student submissions, assessment evidence and personal information are prohibited.

## Proposed AI-agent knowledge domains

- foundations
- agentic-workflows
- human-in-the-loop
- guardrails-and-permissions
- escalation-and-handoff
- evaluation-and-verification
- multi-agent-systems
- business-cases-and-value
- platforms-and-tools
- implementation-patterns

## Evidence discipline

Reusable entries distinguish claim status from document status.

**Claim status:**
- Verified fact
- Supported interpretation
- Attributed claim
- Working hypothesis
- Unresolved

**Document status:** Draft, Under Review, Approved, Superseded, Suspended or Retired.

**Knowledge maturity:** Candidate, Evidence-supported, Approved for defined reuse, Superseded or Retired.

Before reuse in publications, client work, assessment design, governance or AIRBOK development, re-check currency, scope, source authority and context.

## Approval boundary

Nothing in this directory becomes AIRBOK doctrine, a regulatory conclusion, a credential requirement or an approved Nexus governance position merely because it is stored here.

A knowledge object may be approved for a defined Nexus reuse scope while still remaining unapproved for AIRBOK doctrine or any other separately governed use.

See:
- `knowledge/governance/knowledge-lifecycle-v0.1.md`
- `knowledge/indexes/ai-knowledge-index.md`
- `registers/source-to-knowledge-register-v0.1.md`


## Opportunity & Reuse layer — v0.2 proposal

The Opportunity & Reuse layer converts useful knowledge into candidate downstream uses while keeping opportunity value separate from evidence strength.

Every material source or knowledge object may generate one or more signals:

- **Knowledge signal** — reusable concept, model, pattern, risk or implementation insight.
- **Commercial signal** — potential service, diagnostic, advisory offer, workshop, product or client need.
- **Publishing signal** — potential article, newsletter, post, ebook section, case study, visual or speaking topic.
- **Doctrine signal** — a trigger for deeper AIRBOK research only; never doctrine by itself.

Potential destinations include AI Edge, The Evolving Leader, People Agenda, LinkedIn, masterclasses, Udemy / LinkedIn Learning, VET, PD Studio, client advisory, small-business advisory, governance development, books/ebooks and product/Studio development.

Opportunity status must never upgrade claim status, document status, knowledge maturity or AIRBOK doctrine status.

See:
- `knowledge/governance/opportunity-reuse-standard-v0.1.md`
- `knowledge/indexes/opportunity-reuse-index.md`
- `knowledge/reuse-maps/channel-reuse-map-v0.1.md`
- `knowledge/control-drafts/opportunity-reuse-record-template-v0.1.md`
