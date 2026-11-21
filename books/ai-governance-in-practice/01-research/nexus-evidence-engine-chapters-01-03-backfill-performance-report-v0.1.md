# Nexus Evidence Engine — Chapters 1–3 Backfill Performance Report v0.1

**Project:** *AI Governance in Practice*  
**Date:** 2026-11-17  
**Materiality:** M3  
**Human decision owner:** Alec Gardner  
**Execution mode:** Firecrawl + Scite + GitHub; no Deep Research run  
**Overall decision:** **VALIDATED FOR HUMAN-SUPERVISED CONTROLLED USE**

## Test objective

Run the first controlled retrospective evidence backfill across three live ebook chapters and determine whether the Nexus Evidence Engine ecosystem can reliably support:

- source discovery;
- primary and full-text retrieval;
- academic verification and citation analysis;
- claim-entailment checking;
- contrary-evidence testing;
- source inclusion/exclusion decisions;
- evidence registration;
- manuscript evidence survival;
- cross-chapter provenance and monitoring control.

## Work completed

### Chapter 1

- retrospective integration audit completed;
- chapter evidence register created;
- shadow-AI academic evidence screened;
- authoritative Australian and NIST guidance rechecked;
- no material reason to reopen the manuscript;
- one publication-stage citation-year reconciliation identified.

**Decision:** PASS WITH QUALIFICATIONS — manuscript remains closed.

### Chapter 2

- retrospective integration audit completed;
- chapter evidence register created;
- decoupling, AI-governance implementation and contrary formalisation evidence verified;
- two citation-survival gaps identified;
- v0.6 Proof reconciliation created without developmental rewriting.

**Decision:** PASS WITH LIMITED PROOF CORRECTIONS — architecture remains closed.

### Chapter 3

- prior integration test reused after currency check;
- v0.3 Author Revision created;
- Zhu et al. (2026) inserted to close E3-01;
- short-paragraph clusters repaired;
- targeted Evidence Survival, Citation Visibility, Doctrine Integrity and Book-Prose checks passed.

**Decision:** PASS — move to Copyedit.

### Cross-chapter

- terminology reconciled;
- original-construct provenance reconciled;
- contradiction and boundary conditions consolidated;
- shared monitoring dependencies identified;
- Chapter 1 → Chapter 2 → Chapter 3 flow tested.

**Decision:** PASS WITH PUBLICATION-STAGE CONTROLS.

## Evidence-screening performance

| Chapter | Academic verification | Source-decision record | Material correction produced |
|---|---:|---:|---|
| Chapter 1 | 4 current shadow-AI papers screened and verified | 8 included / 5 excluded | Citation-year reconciliation only; no prose reopening |
| Chapter 2 | 8 academic references verified across decoupling and AI governance | 9 included / 6 excluded | Two visible citations inserted in v0.6 Proof |
| Chapter 3 | 5 core academic papers verified; citation graph and contrary evidence checked | 9 included / 9 excluded | Zhu et al. inserted; E3-01 closed; book prose repaired |

Counts are chapter-level screening events rather than unique-source totals. Some authoritative sources, particularly NIST, support more than one chapter.

## Tool performance

### Firecrawl

**Strengths**

- broad discovery across official, academic and institutional sources;
- effective retrieval of current web pages and publisher text;
- useful targeted extraction from long pages;
- strong access to current legal, regulatory and standards material;
- successful retrieval of full text where Scite access was restricted.

**Limitations**

- broad literature searches produced noise, duplicates and domain-specific material;
- ranking did not equal evidentiary quality;
- publisher metadata occasionally required reconciliation with DOI records;
- search results still required manual claim-scope and jurisdiction judgement.

**Validated role**

> Discovery, authoritative-source retrieval and full-text claim checking.

### Scite

**Strengths**

- reliable DOI and publication-identity verification;
- editorial-notice and predatory-journal checks;
- useful citation tallies, citation context and contrasting-evidence signals;
- auditable inclusion/exclusion decision reporting;
- effective bibliography metadata support;
- useful citation graph where coverage was adequate.

**Limitations**

- full text and snippets were restricted for some papers, including some open-access records;
- citation-graph coverage varied substantially by paper;
- recent 2026 sources had short citation histories;
- stance counts could not substitute for reading the source or checking claim entailment.

**Validated role**

> Scholarly identity, citation landscape, challenge signals and source-selection audit trail.

### GitHub

**Strengths**

- stable source-of-truth manuscript retrieval;
- versioned audit, evidence-register and manuscript records;
- transparent commit history;
- practical separation between manuscript, evidence, control and central-register artefacts.

**Limitations**

- evidence changes do not automatically propagate to dependent manuscripts or constructs;
- duplicate source records across chapter and master registers still require reconciliation;
- status and gate registers require explicit updates rather than event-driven synchronisation.

**Validated role**

> Controlled evidence, manuscript and governance record.

## Validated operating pattern

The most reliable workflow is:

> **Extract claims → classify materiality → Firecrawl discovers → Scite verifies and analyses → Firecrawl or the official source supplies substantive text → Evidence Engine tests entailment and contradiction → GitHub registers the result → Studio applies editorial controls → Alec decides.**

This pattern successfully prevented several common errors:

- treating search ranking as source quality;
- treating Scite verification as proof of a claim;
- treating recent evidence as automatically stronger evidence;
- allowing an external source to appear to validate Gardner terminology;
- carrying background research that was invisible in the manuscript;
- reopening sound prose merely because a newer source existed;
- ignoring contrary evidence that narrowed safe wording.

## Manuscript value added

The backfill produced identifiable improvements rather than administrative duplication:

1. Chapter 1 gained a current academic evidence layer for shadow AI and a controlled citation-year issue without unnecessary rewriting.
2. Chapter 2 gained visible support for both ISO's management-system claim and the corrective finding that formal governance can work when internalised.
3. Chapter 3 gained a current scholarly source for human evaluative agency and a cleaner book-prose movement.
4. The opening three chapters now share consistent boundaries around proportionality, policy, control, human oversight and distributed accountability.
5. Monitoring requirements are now attached to the evidence most likely to change.

## Quality-gate result

| Control | Outcome |
|---|---|
| Source discovery | PASS |
| Primary-source preference | PASS |
| Academic verification | PASS |
| Full-text verification | PASS WITH ACCESS QUALIFICATIONS |
| Claim entailment | PASS |
| Contrary evidence | PASS |
| Citation visibility | PASS after recorded corrections |
| Original-construct provenance | PASS |
| Evidence registration | PASS |
| Reuse controls | PASS for Chapters 1–3 |
| Monitoring identification | PASS |
| Automatic impact propagation | NOT VALIDATED |
| Unattended end-to-end automation | NOT VALIDATED |
| Human decision gate | PASS |

## Control limitations

The workflow is validated as **human-supervised evidence engineering**, not autonomous research approval.

Not yet validated:

- unattended orchestration from claim extraction to manuscript change;
- automatic source deduplication across all registers;
- automatic claim-dependency mapping and impact alerts;
- automated monitoring notifications;
- reliable per-run cost and connector-credit reporting;
- comparative efficiency against Deep Research or an independent human literature review.

No claim is made that the current workflow is the cheapest, fastest or fully automated option.

## Recommended operating standard — for human approval

Use the following pattern for Chapters 4–10:

1. build the chapter claim map before drafting;
2. classify claims by materiality and type;
3. retrieve primary authority first;
4. use Firecrawl for discovery and accessible full text;
5. use Scite for academic verification, citation context, contradiction signals and decision logging;
6. read the underlying source before claim approval;
7. record evidence, interpretation and Gardner synthesis separately;
8. draft narratively;
9. run Forensic Evidence Survival on the controlled manuscript;
10. register monitoring only where evidence can materially change;
11. preserve Alec's decision gate for original constructs and publication progression.

## Recommended ecosystem improvements

### Priority 1 — Central source identity

Introduce stable source IDs reused across chapter evidence registers so NIST, OECD, ISO and major academic sources do not need independent identity records in every chapter.

### Priority 2 — Dependency mapping

Create a lightweight table linking:

- source;
- claim IDs;
- manuscript locations;
- constructs;
- monitoring trigger.

This would make evidence-change impact assessment faster and more reliable.

### Priority 3 — Citation reconciliation

Use Scite bibliography output and official institutional metadata to build the consolidated Harvard Australian reference list rather than hand-retyping references at the end.

### Priority 4 — Monitoring automation

After the monitoring register structure is stable, test condition-based checks for:

- NIST AI RMF revisions;
- Australian guidance updates;
- EU AI Act implementation guidance;
- editorial notices affecting cited papers;
- stronger published versions of monitored preprints.

### Priority 5 — Cost and review-time capture

For the next full chapter evidence run, record:

- connector credits where observable;
- number of searches and source reads;
- human review time;
- manuscript corrections produced;
- evidence rejected as unnecessary.

This will test whether the workflow improves quality efficiently rather than merely increasing process.

## Release decision

**VALIDATED FOR HUMAN-SUPERVISED CONTROLLED USE**

The Firecrawl–Scite–GitHub workflow is sufficiently robust to support Chapters 4–10 under the Nexus Evidence Engine, subject to:

- primary-source reading;
- explicit source limitations;
- claim-level human judgement;
- controlled GitHub records;
- Alec Gardner's approval of original synthesis and publication progression.

It is not approved as an unattended autonomous workflow.

**AI assists. Humans decide. Institutions remain accountable.**
