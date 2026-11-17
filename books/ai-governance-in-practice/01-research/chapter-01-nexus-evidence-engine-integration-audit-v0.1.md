# Chapter 1 — Nexus Evidence Engine Integration Audit v0.1

**Book:** *AI Governance in Practice*  
**Chapter:** 1 — The AI You Are Already Governing  
**Date:** 2026-11-17  
**Materiality:** M3 — publication evidence control  
**Execution mode:** Firecrawl, Scite and GitHub; no Deep Research run claimed  
**Human decision owner:** Alec Gardner  
**Decision:** **PASS WITH QUALIFICATIONS — manuscript remains closed**

## Research question

Does the controlled evidence adequately support the chapter's argument that organisations must govern AI participation in work and decisions, not merely maintain a tool inventory?

## Scope

The audit tested the controlled manuscript against the current evidence position for:

1. embedded AI in ordinary software and workflows;
2. the limits of tool inventories;
3. context- and consequence-dependent risk;
4. shadow AI as an organisational visibility problem;
5. visibility as a prerequisite for proportionate deliberate governance;
6. the boundary that embedded AI is not automatically high risk;
7. the proposition that the same general-purpose capability may require different governance in different uses.

## Evidence outcome

The chapter's core evidence architecture remains sound.

Current Australian Government guidance explicitly states that an AI systems register should record systems, use cases, accountable people and governance level, including AI features embedded in common software packages. It also states that a register is a transparency and documentation mechanism and should not replace risk assessment or wider governance.

The current Australian foundations guidance states that the same AI tool can create different risks depending on how it is used and recommends risk screening, use-case assessment, proportionate controls, monitoring and human oversight appropriate to stakes and autonomy.

NIST's Map function continues to require organisations to understand intended purpose, users, actual and prospective deployment settings, impacts, limitations, foreseeable misuse, human-AI roles and contextual change. NIST also notes that relevant actors may lack complete visibility or control over other lifecycle activities.

The Samsung incident remains a defensible narrow illustration of employee use creating an information-governance risk before organisational controls caught up. Cemex and Wipro remain appropriate vendor-authored examples of AI embedded in familiar enterprise platforms and workflows, provided they are not used as independent evidence of effectiveness.

Current academic evidence strengthens, but does not materially change, the shadow-AI argument. Petersson et al. (2026) provide sector-specific empirical evidence that unauthorised AI use can reflect both governance risk and unmet organisational needs. The study also supports the chapter's existing caution that prohibition alone may not resolve the underlying work problem.

## Claim decisions

### C01-001 — AI can be embedded in ordinary software and workflows before appearing as a separate AI project

**Outcome:** VERIFIED / STRONG

**Evidence establishes:**
- Australian Government guidance explicitly includes embedded AI features in registers.
- Cemex and Wipro document AI integrated into Teams, Microsoft 365 and connected enterprise systems.
- NIST treats AI as a socio-technical system situated in use contexts and interdependent workflows.

**Safe wording:**
AI may become part of ordinary organisational infrastructure and workflows without appearing as a separately labelled AI project.

**Unsafe overstatement:**
All enterprise software now contains consequential AI, or embedded AI is inherently uncontrolled or high risk.

### C01-002 — A tool inventory alone is insufficient for meaningful governance

**Outcome:** VERIFIED AS SUPPORTED INTERPRETATION

**Evidence establishes:**
- Australian guidance requires use cases and governance levels, not product names alone.
- It explicitly states that a register does not replace impact assessment and risk management.
- NIST requires purpose, context, users, impacts, limitations and human-AI roles to be mapped.

**Gardner synthesis:**
> **Govern the work AI participates in, not merely the tools labelled AI.**

**Boundary:**
Inventories remain useful and recommended. The chapter correctly treats them as a starting point rather than a complete governance system.

### C01-003 — Risk depends materially on context of use and consequence

**Outcome:** VERIFIED / STRONG

**Evidence establishes:**
- Australian guidance directly states that the same AI tool can create different risks depending on use.
- NIST Map centres contextual purpose, deployment, users, potential impacts and operational conditions.

**Safe wording:**
The governance significance of an AI capability depends materially on how, where and for what purpose it is used, and on the consequences that may follow.

**Unsafe overstatement:**
Product characteristics are irrelevant, or use context is the only determinant of risk.

### C01-004 — Visibility is a prerequisite for proportionate deliberate governance

**Outcome:** VERIFIED AS SUPPORTED INTERPRETATION

**Evidence establishes:**
- Australian guidance recommends registers, screening and controls matched to individual uses.
- NIST requires contextual mapping and continuing reassessment as systems and conditions change.

**Safe wording:**
An organisation cannot deliberately apply proportionate use-specific governance to AI activity it cannot identify and contextualise.

**Boundary:**
Some general policies and controls may operate without identifying every individual use.

### C01-005 — Shadow AI creates a practical visibility problem

**Outcome:** VERIFIED WITH BOUNDARIES

**Evidence establishes:**
- Samsung illustrates unsanctioned use creating a data-governance problem.
- Australian guidance explicitly recognises shadow AI and links registers and organisational awareness to its reduction.
- Petersson et al. provide current empirical evidence of unauthorised AI use in a regulated professional setting.

**Safe wording:**
Shadow AI creates a visibility and governance problem because consequential use may occur outside expected approval, monitoring and data-control pathways.

**Unsafe overstatement:**
Most workers use shadow AI, or shadow AI is always malicious, reckless or high risk.

### C01-006 — Unauthorised use may reveal unmet work needs

**Outcome:** SUPPORTED WITH QUALIFICATION

Petersson et al. support the manuscript's qualified formulation that, in some organisations, informal use may indicate that approved tools or pathways do not meet practical work needs.

**Boundary:**
This does not excuse policy breaches, confidentiality failures or unsafe use.

### C01-007 — General-purpose AI may require different governance in different uses

**Outcome:** VERIFIED / STRONG

Australian guidance supplies a direct comparison between low-consequence drafting and higher-consequence employment assessment. NIST similarly requires context-specific risk mapping.

## Three-Layer Evidence Test

### Evidence establishes
- registers should capture embedded AI and use cases;
- the same tool can create different risks in different uses;
- registers do not replace wider governance;
- contextual mapping is central to NIST risk management;
- unsanctioned AI use can occur outside formal organisational controls.

### Reasonable interpretation
- product-name approval does not determine all governance consequences;
- governance should follow AI's participation in work, decisions and actions;
- visibility enables more deliberate proportional control.

### Gardner synthesis
> **Govern the work AI participates in, not merely the tools labelled AI.**

> **Visibility before proportionality.**

These remain author synthesis, not quoted definitions from NIST or Australian guidance.

## Challenge and boundary findings

1. **Inventories remain valuable.** The evidence does not support dismissing registers.
2. **Embedded AI is not automatically high risk.** Risk depends on capability, use and consequence.
3. **Visibility can become bureaucratic.** Documentation should serve decisions rather than become an end in itself.
4. **Shadow AI has mixed causes.** It may involve poor judgement, convenience, professional discretion or unmet organisational needs.
5. **Vendor case studies are implementation evidence only.** They do not independently establish productivity or effectiveness.
6. **Current shadow-AI evidence is still developing.** Sector-specific studies should not be universalised.

## Source-selection decisions

### Included
- Australian Government AI systems register guidance;
- Australian Government foundations guidance;
- Australian Government AI screening questions;
- NIST AI RMF Map Playbook;
- Bloomberg's Samsung report, narrow incident use only;
- Microsoft Cemex and Wipro customer cases, implementation illustrations only;
- Petersson et al. (2026), sector-specific empirical shadow-AI evidence.

### Excluded from carrying core claims
- very recent shadow-AI papers with little or no citation history;
- inaccessible practitioner articles that did not improve the evidence position;
- preprints on critical-infrastructure shadow AI and endogenous governance scope, retained for monitoring only;
- vendor-sponsored prevalence statistics, unnecessary for the chapter's qualitative argument.

## Currency and reference reconciliation

A publication-stage citation correction is required.

The controlled manuscript uses `Australian Government, 2025a`, `2025b` and `2025c`, while the currently controlled public pages and downloadable resources used in this audit are published or materially refreshed in 2026. This does **not** change the chapter argument, but the final in-text citation years and consolidated references must be reconciled at copyedit or proof.

The NIST AI RMF 1.0 remains current at the audit date, but NIST states that an update is underway. This source therefore requires monitoring before publication.

## Reopening decision

No material claim-source mismatch, provenance failure, contrary evidence or architecture problem was found.

The chapter therefore remains closed to developmental rewriting.

## Final decision

**PASS WITH QUALIFICATIONS — MANUSCRIPT REMAINS CLOSED**

Recorded publication-stage actions:

1. reconcile the Australian Government citation years and titles;
2. retain vendor-case qualifications;
3. retain bounded wording on shadow AI prevalence and causes;
4. recheck the NIST AI RMF revision status before publication;
5. consider adding Petersson et al. (2026) during copyedit only if the sentence-level citation improves traceability without disturbing the chapter's narrative.
