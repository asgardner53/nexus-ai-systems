# Chapter 9 Manuscript Evidence Survival Register v0.1

**Book:** *AI Governance in Practice*  
**Chapter:** 9 — Evidence Before Assurance  
**Controlled manuscript:** `chapter-09-evidence-before-assurance-v0.1.md`  
**Date:** 2026-11-19  
**Materiality:** M3  
**Decision:** **CONDITIONAL PASS — two local citation-visibility repairs required**

## Overall judgement

The Chapter 9 evidentiary backbone survived drafting. The manuscript visibly retains the professional assurance logic, audit-evidence distinctions, control-effectiveness evidence, decision-provenance and reviewability scholarship, internal-audit and Three Lines boundaries, lifecycle monitoring, incident evidence, continuous-monitoring limitations and the full provenance controls for the Evolved Governance Chain.

No invented source, unverifiable citation, material claim–source mismatch, universal assurance claim or original construct presented as externally validated was identified.

Two local repairs are required before Evidence Survival and Citation Visibility receive full PASS:

1. add direct visible support to the paragraph explaining the reliability limits of system-generated evidence;
2. add direct ISO support to the paragraph distinguishing management-system certification from assurance about individual AI uses and outcomes.

These items do not change the chapter's argument, architecture or narrative.

## Claim-level survival

| Claim ID | Manuscript visibility and warrant | Decision |
|---|---|---|
| C09-001 | Assurance is defined through claim/subject matter, criteria, evidence, evaluation and conclusion, with IAASB and UK AI-assurance support | PASS |
| C09-002 | Reasonable and limited assurance are distinguished and neither is presented as certainty | PASS |
| C09-003 | Sufficiency and appropriateness are visibly distinguished through PCAOB and IAASB evidence logic | PASS |
| C09-004 | Contradictory evidence is treated as material rather than excluded from the assurance record | PASS |
| C09-005 | System-generated evidence is challenged for completeness, accuracy and underlying controls; direct warrant should be repeated at the defining paragraph | CONDITIONAL PASS — E9-01 |
| C09-006 | Control design, implementation, operating effectiveness and outcome are separated and supported by NIST, COSO and Australian guidance | PASS |
| C09-007 | “Successful execution does not eliminate the need for assurance” is introduced explicitly as the organisation's evidence-informed conclusion | PASS |
| C09-008 | Evidence is defined as information capable of supporting or challenging a claim, grounded in the preceding audit-evidence discussion | PASS |
| C09-009 | Decision provenance and reviewability are visibly supported by Singh, Cobbe and Norval; Cobbe and Singh; Raji et al.; and Cobbe, Lee and Singh | PASS |
| C09-010 | The reconstructability proposition is bounded to “well enough to test” and preserves privacy, proportionality and tacit-judgement limitations | PASS |
| C09-011 | Monitoring is distinguished from assurance using IIA, NIST and Australian guidance | PASS |
| C09-012 | Proportionate independence is stated after the authoritative role and independence evidence and avoids universal external-audit requirements | PASS |
| C09-013 | The manuscript preserves that execution and assurance need not always be organisationally separate | PASS |
| C09-014 | Assurance is bounded by use, configuration, criteria, period and evidence, supported by IAASB, ISO, NIST and the EU AI Act | PASS |
| C09-015 | Different claims and assurance questions are shown to require different criteria and evidence; no universal technique is claimed | PASS |
| C09-016 | Incidents, complaints, overrides, exceptions, near misses and corrective actions remain visible as evidence through NIST, Australian and ISO prior art | PASS |
| C09-017 | Continuous monitoring is presented with both its timeliness benefits and its judgement, alarm and inheritance limitations | PASS |
| C09-018 | Certification is correctly bounded to management-system scope, but the defining paragraph needs a direct ISO citation | CONDITIONAL PASS — E9-02 |
| C09-019 | The Evolved Governance Chain is visibly introduced as Gardner integration informed by established prior work and explicitly bounded as non-linear and diagnostic | PASS |
| C09-020 | Assurance is expressly positioned as the conclusion produced by evaluation rather than another link in the chain | PASS |

## Repair E9-01 — System-generated evidence citation visibility

### Current manuscript movement

The manuscript explains that a log can accurately capture the events it was configured to record while omitting the event that matters, and that the reliability of system-generated evidence depends partly on the controls, definitions and transformations producing it.

### Evidence position

The claim is directly supported by established audit-evidence requirements concerning organisation-generated information and by NIST's testing, measurement and evidence-control guidance.

### Required repair

Add a proportionate citation to the final sentence of that paragraph, for example:

> Its reliability depends partly on the controls, definitions and transformations through which it was produced (PCAOB, 2010; NIST, 2023).

This repair makes the warrant visible at the exact point of the consequential claim rather than relying on the preceding audit-evidence paragraph.

## Repair E9-02 — Certification-scope citation visibility

### Current manuscript movement

The manuscript states that certification against ISO/IEC 42001 can provide evidence about the management system within scope but does not certify every AI use, decision or outcome as safe, fair, lawful or effective.

### Evidence position

This distinction is supported by the management-system scope of ISO/IEC 42001 and the conformity-assessment requirements in ISO/IEC 42006.

### Required repair

Add direct support to the certification paragraph, for example:

> That can provide useful evidence about the management system within the certificate's scope; it does not certify every AI use, decision or outcome as safe, fair, lawful or effective (ISO/IEC, 2023, 2025).

The final reference list must distinguish the two standards precisely.

## Evolved Governance Chain provenance survival

**PASS**

The manuscript states:

- the component ideas are established across assurance, internal control, management systems, algorithmic auditing, decision provenance and reviewability;
- the contribution is their integration with the book's Meaningful Accountability architecture;
- the spine is diagnostic rather than chronological;
- cross-cutting conditions do not become sequential boxes;
- assurance sits outside the spine as the evaluation conclusion.

The text does not imply that earlier sources validate the named Gardner construct.

## Three-Layer Evidence Test

### Evidence establishes

- assurance requires defined subject matter or claims, criteria, evidence, evaluation and conclusions;
- evidence quantity and quality are different;
- supportive and contradictory evidence matter;
- control design, implementation, operating effectiveness and outcome are distinct propositions;
- monitoring, specialist challenge, internal audit and external assurance perform different roles;
- provenance and records support reviewability of socio-technical processes;
- assurance is bounded by scope, period, configuration and evidence;
- incidents, corrective action and lifecycle monitoring contribute to assurance;
- continuous monitoring has material limits.

### Reasonable interpretation

- AI-governance evidence should be designed around explicit claims;
- favourable execution cannot establish control effectiveness by itself;
- the organisation needs enough reconstruction to test the material claim;
- the required independence should increase with consequence, uncertainty, conflict and reliance;
- exceptions and near misses are useful assurance evidence;
- conclusions should be revisited after material change.

### Gardner synthesis

- successful execution does not eliminate the need for assurance;
- evidence is information capable of supporting or challenging a defined governance claim;
- an organisation cannot make a defensible assurance claim about a process it cannot reconstruct well enough to test;
- the Evolved Governance Chain as a diagnostic traceability spine;
- assurance as a conclusion outside the spine.

The layers remain reconstructable in the controlled prose.

## Contrary and limiting evidence survival

**PASS**

The manuscript preserves that:

- favourable outcomes may arise through weak, bypassed or lucky pathways;
- adverse outcomes do not automatically prove control failure;
- logs can omit material context;
- full reconstruction may be impossible or disproportionate;
- evidence collection can create privacy, security and retention risks;
- external independence may lack operational context;
- management expertise may coexist with conflict of interest;
- assurance conclusions are time- and scope-bounded;
- management-system certification does not assure every use or outcome;
- incident absence is ambiguous;
- continuous monitoring can produce alarm overload and metric fixation;
- traceability can preserve a poor or illegitimate decision;
- evidence does not eliminate uncertainty.

## Citation Visibility Test

**CONDITIONAL PASS**

The manuscript generally places evidence where the reader needs it and avoids a source parade. Open items are limited to:

- **E9-01:** direct support at the system-generated-evidence reliability paragraph;
- **E9-02:** direct ISO support at the certification-scope paragraph.

Publication-stage source-control items remain:

- confirm the exact UK AI-assurance source title and year;
- reconcile the current IIA Three Lines and Global Standards dates;
- distinguish ISO/IEC 42001:2023, ISO/IEC 42006:2025 and any retained ISO 19011 reference;
- reconcile NIST, OECD, Australian Government and EU source titles and version dates;
- remove unused references and ensure every final citation has a full reference entry.

These are publication controls, not developmental evidence defects.

## Decision

**FORENSIC EVIDENCE SURVIVAL: CONDITIONAL PASS**  
**CITATION VISIBILITY: CONDITIONAL PASS**  
**CLAIM ENTAILMENT: PASS**  
**CONTRARY EVIDENCE SURVIVAL: PASS**  
**EVOLVED GOVERNANCE CHAIN PROVENANCE: PASS**

Proceed to the Theory, Originality, Red-Team and Engrossment review. Then prepare a targeted Chapter 9 v0.2 Author Revision closing E9-01 and E9-02 before the full gate re-run and clean author-reading version.
