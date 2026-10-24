# Nexus AI Knowledge Base

## Document control
- **Version:** 0.1
- **Document status:** Approved
- **Owner:** Alec Gardner
- **Approval authority:** Alec Gardner
- **Effective date:** 24 October 2026
- **Next review:** 24 April 2027, or earlier on material architecture change
- **Repository path:** `knowledge/README.md`
- **Change history:** v0.1 establishes and approves the knowledge architecture and governance boundaries.

This directory is the reusable Nexus AI knowledge layer. It converts learning, research, implementation evidence and controlled source syntheses into reusable knowledge objects without treating any single course, vendor article or source as authoritative doctrine.

## Governing principle

**AI assists. Humans decide. GitHub records.**

## Separation of layers

- `source-syntheses/` records what a particular source set or learning activity contributed.
- `ai-agents/` contains reusable concept and implementation knowledge.
- `indexes/` supports discovery and traceability.
- `governance/` contains the approved lifecycle and governance controls for this knowledge layer.
- Authoritative reusable templates and registers are held in the repository-level `templates/` and `registers/` folders.

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
