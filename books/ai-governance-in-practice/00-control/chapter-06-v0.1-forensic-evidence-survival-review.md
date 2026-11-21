# Chapter 6 v0.1 — Forensic Evidence Survival, Citation Visibility and Integrity Review

**Chapter:** Where Governance Actually Lives  
**Date:** 2026-11-18  
**Materiality:** M3 — publication evidence control  
**Controlled manuscript:** `chapter-06-where-governance-actually-lives-v0.1.md`  
**Decision:** **CONDITIONAL PASS — five local repairs required; no argument or architecture change**

## Overall judgement

The chapter's evidentiary backbone survived the transition from the research brief into book prose.

The controlled manuscript visibly retains authoritative evidence on identity and access, data governance, technical documentation, logging, human oversight, supply-chain obligations, monitoring, change and decommissioning. It also retains the academic evidence on data cascades, reviewable automated decision-making, decision provenance, documentation artefacts, internal algorithmic auditing and organisational implementation.

Contrary and limiting evidence remains present throughout. The manuscript does not claim that infrastructure is the complete governance system, that least privilege proves responsible use, that provenance guarantees fairness, that documentation enforces its contents, that logging creates accountability, that contracts eliminate vendor opacity or that every governance rule should be hard-coded.

No invented source, retracted source, material claim-source mismatch or original framework presented as externally validated was identified.

Five local repairs are required before Evidence PASS. They concern exact claim entailment, citation visibility and Gardner-synthesis signalling. They do not justify a full rewrite.

## Claim-level review

### C06-001 — AI governance is partly enacted through infrastructure

**Outcome: PASS WITH PROVENANCE REPAIR**

The proposition is supported across NIST, Australian Government and EU sources, together with the socio-technical and internal-audit scholarship. The manuscript also preserves the boundary that infrastructure is not the complete governance system.

The first bold proposition should be introduced explicitly as the organisational conclusion or Gardner synthesis drawn from the evidence and case, rather than appearing to be an externally established definition.

**Repair ID: E6-01**

### C06-002 — Identity and access design shape practical AI authority

**Outcome: PASS**

The service-identity example is properly connected to NIST SP 800-207 and NIST SP 800-53. The manuscript accurately limits the zero-trust evidence to explicit authentication, authorisation and resource access rather than presenting zero trust as an AI governance framework.

The counterclaim that least privilege does not establish legitimate purpose or sound judgement is retained.

### C06-003 — Data quality, provenance and usage rights are governance infrastructure

**Outcome: PASS WITH WORDING REPAIR**

Australian guidance, the EU AI Act, Datasheets for Datasets and the data-cascades study remain visible.

The Sambasivan paragraph is directionally correct but should be narrowed to the verified scope of the source. The article reports interviews with 53 practitioners across India, East and West African countries and the United States, and defines data cascades as compounding downstream effects triggered by practices that undervalue data quality. The current phrase that organisations "rewarded model development" is a plausible interpretation, but it is stronger and more causal than the verified abstract requires.

Recommended safe wording:

> Sambasivan and colleagues, drawing on interviews with 53 AI practitioners across India, East and West African countries and the United States, documented data cascades: compounding downstream effects from data problems associated with practices that undervalue data quality (Sambasivan et al., 2021).

**Repair ID: E6-02**

### C06-004 — Workflow and configuration can encode practical decision rights

**Outcome: CONDITIONAL PASS**

The running case and Cobbe, Lee and Singh support the socio-technical decision-process argument. The manuscript's specific movement through defaults, thresholds, routing, instructions, tool connections and the placement of human review is also supported by NIST and current Australian implementation guidance, but that support is not visible at the paragraph where the claim is made.

Add a proportionate citation at the end of the workflow-allocation paragraph or integrate the sources into the following reviewability paragraph.

**Repair ID: E6-03**

### C06-005 — Documentation supports governance but does not enforce it

**Outcome: CONDITIONAL PASS**

The manuscript accurately presents model cards, datasheets and supplier FactSheets as documentation mechanisms rather than proof of effective governance. The stale-document boundary is clearly developed through the running case.

The sentence naming all three documentation forms cites Mitchell et al. and Arnold et al. but omits Gebru et al. at that point. Gebru has appeared earlier, but the later composite claim should carry all three references for clean citation visibility.

**Repair ID: E6-04**

### C06-006 — Logs and provenance support reviewability but do not create accountability by themselves

**Outcome: PASS**

Decision provenance is accurately attributed to Singh, Cobbe and Norval. Wieringa supports the wider actor, standard, forum and consequence structure of accountability. The manuscript preserves the limits of logging, including incomplete context, fragmented records and privacy, security and retention risks.

### C06-007 — Vendor governance requires information and control arrangements across the supply chain

**Outcome: PASS**

NIST, Australian guidance, the EU AI Act and FactSheets remain visible. The text does not claim that contracts can eliminate proprietary limits, bargaining asymmetry or incomplete knowledge.

The proposition that an organisation can outsource technology and operation without outsourcing responsibility is clearly presented as organisational interpretation rather than a quoted legal rule.

### C06-008 — Governance infrastructure must support change, restriction and safe withdrawal

**Outcome: CONDITIONAL PASS**

The safe-withdrawal paragraph is visibly supported by NIST and Australian guidance. The immediately preceding paragraph introduces change detection, reassessment triggers, configuration and version control, incident response, restriction and rollback without a citation at the point of the claim.

Add NIST and Australian guidance to that paragraph so the lifecycle basis remains visible before the manuscript moves to decommissioning.

**Repair ID: E6-05**

### C06-009 — Control design, implementation and evidenced effectiveness are different states

**Outcome: PASS**

Raji et al. and Madaio et al. support the lifecycle and institutional conditions around operational controls. The phrase is a Gardner organisational synthesis rather than a claim that those sources validate a three-stage framework. The manuscript does not name or formalise it as a separate construct.

### C06-010 — Technical controls can create false assurance

**Outcome: PASS WITH QUALIFICATION**

The manuscript presents concrete mechanisms through which false assurance can arise: narrow permissions in one system but broad permissions in another, event logs without justification, documentation detached from local workflow and dashboards measuring the wrong condition.

This is evidence-informed interpretation connected to Chapter 2, not an externally validated universal law. The boundary is adequately preserved.

### C06-011 — Infrastructure does not replace judgement, institutional responsibility or assurance

**Outcome: PASS**

This boundary survives strongly. The manuscript explicitly states what infrastructure cannot determine or supply and does not turn governance into an engineering discipline.

### C06-012 — The chapter must hand off to capability and culture

**Outcome: PASS**

The ending exposes the dependence of technical and workflow controls on people who can understand, challenge, escalate and stop. It does not prematurely develop the Chapter 7 evidence or reduce the next chapter to training.

## Three-Layer Evidence Test

### Evidence establishes

The cited primary and academic sources establish that effective governance and accountability depend on implemented controls, data governance, documentation, traceability, monitoring, human–AI role design, change management, third-party arrangements and institutional processes.

### Reasonable interpretation

Those arrangements determine much of what an AI-enabled system can access, change, record and transmit, and whether an organisational governance decision can be observed or reconstructed in operation.

### Gardner synthesis

> A governance boundary becomes real only when the operating environment supports, observes and preserves it.

> Governance does not live only in policies and committees. It is enacted in the data, identities, permissions, workflows, configurations, records and supplier arrangements that shape what people and systems can actually do.

> Infrastructure gives governance operational force, but it does not replace human judgement, institutional responsibility or assurance.

The synthesis is defensible and original at the level of book integration. The individual component ideas are established prior art and are not claimed as Gardner discoveries.

## Contrary and boundary evidence survival

**Outcome: PASS**

The manuscript visibly retains that:

- access restriction does not establish legitimacy;
- data provenance does not guarantee fairness or accuracy;
- not every governance rule should be hard-coded;
- documentation may be accurate yet stale;
- logs may be incomplete and can create additional risks;
- supplier contracts cannot guarantee visibility or control;
- abrupt shutdown may harm interdependent operations;
- control existence does not establish operating effectiveness;
- infrastructure cannot make an unwise boundary wise.

## Citation visibility

**Outcome: CONDITIONAL PASS**

Citation coverage is strong and proportionate. The defects are local rather than systemic:

- one interpretation should be narrowed to the directly verified scope of the data-cascades source;
- workflow/configuration claims require visible primary-source support;
- the composite documentation claim should include the Datasheets source;
- change-control claims require a visible lifecycle citation;
- the principal Gardner synthesis should be signalled as interpretation.

## Source and currency notes

- NIST AI RMF 1.0 and its Playbook remain usable current evidence, but NIST has confirmed that the framework is under revision. Recheck the revised framework before publication.
- The Australian Government implementation guidance is current as at 18 November 2026 and should be rechecked at final proof.
- The EU AI Act must be cited with its scope, staged application and consolidated version/access date visible in the final reference list.
- The NIST 2020a/2020b designations must be reconciled against the consolidated bibliography during copyedit.

These are monitoring and reference-control matters, not open defects in the chapter's argument.

## Repair schedule

| ID | Required repair | Effect on argument |
|---|---|---|
| E6-01 | Signal the first central proposition explicitly as Gardner/organisational synthesis. | None |
| E6-02 | Narrow the Sambasivan paragraph to the verified data-cascades finding and sample. | None |
| E6-03 | Add visible authority for workflow and configuration as operational allocations of decision rights. | None |
| E6-04 | Add Gebru et al. to the later composite documentation citation. | None |
| E6-05 | Add visible NIST/Australian support to the change-control and rollback paragraph. | None |

## Decision

**FORENSIC EVIDENCE SURVIVAL: CONDITIONAL PASS**

Produce a targeted Chapter 6 v0.2 that closes E6-01 to E6-05 without changing the opening, chapter architecture, dominant proposition, supplier-onboarding case or Chapter 7 handoff.

After the repairs, re-run:

- Evidence Survival and Citation Visibility;
- Narrative;
- Book Prose;
- Theory and Authenticity;
- Engrossment.
