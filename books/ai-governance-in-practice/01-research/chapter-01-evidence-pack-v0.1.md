# Chapter 1 Evidence Pack — The AI You Are Already Governing

**Date:** 2026-11-01  
**Materiality:** M3 — publication evidence gate  
**Outcome:** SAFE TO DRAFT, with stated boundaries

## Research question

How widely and invisibly is AI already embedded in organisational work, and what does an organisation need to see before it can govern AI meaningfully?

## Evidence synthesis

The evidence supports the chapter's core argument.

Authoritative governance sources consistently require organisations to understand AI **in context of use**, not merely identify that an AI system exists.

NIST AI RMF Map requires organisations to understand intended purpose, users, deployment setting, actual use, impacts and contextual factors. NIST also recommends maintaining AI inventories and resourcing them according to organisational risk priorities.

The OECD AI Principles tie accountability and risk management to roles, context and lifecycle use, and require traceability appropriate to context.

Australia's Guidance for AI Adoption is especially direct: the same AI system can present materially different risks depending on use case. It gives the example of using ChatGPT to draft marketing emails versus using it to assess job applications. Its AI systems register template requires organisations to capture AI systems, their **use cases**, accountable people and governance level, including AI features embedded in common software packages.

The Australian screening tool also establishes an important proportionality boundary: different use cases need different levels of governance attention, and screening should prevent governance processes being overwhelmed by less important uses.

## Claim decisions

### C01-001 — AI can already be embedded in ordinary organisational software and workflows before it appears as a separate AI project

**Status:** SUPPORTED

**Evidence establishes:**
- Australian Government register guidance explicitly says registers should capture AI features embedded in common software packages.
- Current enterprise cases show AI integrated into Microsoft 365, Teams, ServiceNow, SAP SuccessFactors and Dynamics workflows.
- Organisational research shows GenAI increasingly used inside established software-development workflows.

**Qualification:**
Embedded AI is not necessarily uncontrolled AI. The claim is about visibility, not risk by default.

### C01-002 — A tool inventory alone is insufficient for meaningful AI governance

**Status:** SUPPORTED INTERPRETATION

**Evidence establishes:**
- NIST requires context mapping beyond inventory.
- Australian guidance requires both system-level and use-case-level governance.
- The same AI system can require different governance depending on how it is used.

**Reasonable interpretation:**
Knowing that an AI tool exists does not by itself reveal the decision, people, data, consequence or authority affected by its use.

**Gardner synthesis:**
> Govern the work AI participates in, not merely the tools labelled AI.

**Qualification:**
A complete AI register remains valuable and is recommended by NIST and Australian guidance. The book should not dismiss inventories; it should explain why they are a starting point rather than the whole governance task.

### C01-003 — Risk depends materially on context of use and consequence, not simply on the AI product itself

**Status:** VERIFIED / STRONG

**Evidence establishes:**
- Australian Guidance for AI Adoption explicitly states that the same AI system can present different risks depending on how it is used.
- NIST Map centres intended purpose, deployment context, users, impacts and foreseeable misuse.
- OECD accountability is explicitly role- and context-dependent.

### C01-004 — Visibility of AI use is a prerequisite for proportionate governance

**Status:** SUPPORTED INTERPRETATION

**Evidence establishes:**
- NIST recommends AI inventories and context mapping.
- Australian guidance recommends registers and screening processes.
- Australian screening guidance differentiates higher-risk uses from lower-risk uses to avoid overwhelming governance processes.

**Reasonable interpretation:**
An organisation cannot apply proportionate controls to an AI use it cannot identify or contextualise.

**Qualification:**
Do not write this as a universal causal law. Visibility is necessary for deliberate governance, but some controls may operate generically without use-by-use identification.

### C01-005 — Shadow AI is a material visibility problem for organisations

**Status:** SUPPORTED, with survey limitations

**Evidence establishes:**
- IBM defines shadow AI as unsanctioned AI use without formal IT approval or oversight.
- IBM-sponsored 2025 workforce studies in Canada and the United States report substantial use of personal/non-enterprise AI applications.
- Cisco's 2025 Australian risk-leader research reports participants observing employee AI use without official sanction or oversight.

**Qualification:**
Survey estimates are vendor-sponsored and jurisdiction-specific. They demonstrate the existence and practical relevance of shadow AI, not a universal prevalence rate.

## Verified examples for Chapter 1

### Case A — Samsung and unsanctioned generative AI use

Bloomberg reported in May 2023 that Samsung restricted employee use of external generative AI tools after staff uploaded sensitive code to ChatGPT.

**Use in chapter:** illustration of AI entering work through employee behaviour before governance catches up.

**Limitations:** media-reported case based on an internal memo; use only for the narrow proposition that unauthorised employee AI use can create information-governance risk.

### Case B — Cemex HR agent embedded across enterprise workflows

A 2026 Microsoft customer case documents Cemex integrating a Copilot Studio HR agent with Teams, ServiceNow and SAP SuccessFactors. The system progressed from a controlled pilot into production support for approximately 800 employees.

**Use in chapter:** illustration that AI governance must follow the work and transactions AI participates in across connected systems, not only a standalone tool.

**Limitations:** vendor-authored customer story; appropriate as implementation illustration, not independent proof of effectiveness.

### Case C — Wipro AI embedded in the flow of work

A 2026 Microsoft customer case documents Wipro embedding an AI recognition agent into Microsoft 365 Copilot and connecting it with enterprise workflows and Dynamics 365.

**Use in chapter:** illustration of AI becoming part of ordinary enterprise workflow rather than appearing as a separate system boundary.

**Limitations:** vendor-authored case; reported performance benefits should not be used as independent causal evidence.

## Counterevidence and boundary conditions

1. **Not every AI use needs the same governance intensity.**
   Australian screening guidance explicitly recommends differentiated attention according to use-case risk.

2. **A complete inventory still has value.**
   NIST states that full inventories can provide technical, business and risk-management benefits. The book should therefore argue for richer visibility, not against inventories.

3. **Low-risk uses may be managed through general controls.**
   The chapter should not imply bespoke assessment for every AI-assisted task.

4. **Visibility can become bureaucratic if poorly designed.**
   Registers should support decisions and proportional governance, not become a documentation exercise detached from risk.

## Controlled terminology

### AI use
The application of an AI system or AI-enabled feature to perform, support, influence or automate organisational work, decisions or actions.

### Embedded AI
AI functionality incorporated into a broader software product, platform, workflow or service rather than deployed as a visibly separate AI application.

### Shadow AI
Unsanctioned organisational use of AI tools or applications without the formal approval or oversight expected by the organisation.

### Consequential use
An AI use that can materially affect people, rights, safety, finances, employment, access, organisational risk or other significant outcomes.

### Decision participation
The degree to which AI contributes to framing, informing, recommending, prioritising, deciding, executing or adapting an organisational decision or action.

These are controlled working definitions for the manuscript. Where publication requires a formal definition from a standard or law, use that source's terminology precisely.

## Chapter 1 drafting boundaries

Safe to write:
- governance begins with visibility of AI use and context;
- embedded and shadow AI complicate organisational visibility;
- a register is necessary but not sufficient;
- the same AI system can carry different risks in different uses;
- governance effort should be proportionate;
- the reader should map AI to the work, decisions and actions it influences.

Do not write:
- that most employees universally use shadow AI;
- that every embedded AI feature is high risk;
- that inventories are ineffective or unnecessary;
- that visibility alone produces effective governance;
- that vendor case-study performance claims prove general effectiveness.

## Drafting proposition

> **The first governance question is not “What AI do we own?” but “Where is AI participating in our work, decisions and actions, and with what consequence?”**

Supporting Gardner line:

> **Govern the work AI participates in, not merely the tools labelled AI.**

## Evidence gate checklist

- [x] Two or more primary/authoritative governance sources support context/use visibility.
- [x] Two or more credible organisational/adoption sources show embedded or informal AI use.
- [x] Contrary/proportionality evidence identified.
- [x] Three verified illustrative cases available.
- [x] Controlled terms defined.
- [x] Evidence/synthesis boundary recorded.
- [x] Vendor-source limitations recorded.
- [x] No unresolved provenance issue changes the chapter argument.

## Gate outcome

**EVIDENCE: PASS**

**CHAPTER STATUS: SAFE TO DRAFT**

The chapter remains subject to normal citation verification during drafting and a later Forensic Evidence Survival Check on the controlled manuscript.
