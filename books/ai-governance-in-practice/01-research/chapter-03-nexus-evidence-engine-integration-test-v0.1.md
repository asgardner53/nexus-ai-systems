# Chapter 3 — Nexus Evidence Engine Integration Test v0.1

**Book:** *AI Governance in Practice*  
**Chapter:** 3 — The Human Who Still Owns the Decision  
**Date:** 2026-11-17  
**Materiality:** M3 — publication evidence and emerging-doctrine control  
**Execution mode:** Nexus Evidence Engine using Firecrawl, Scite and GitHub; no Deep Research run  
**Human decision owner:** Alec Gardner  
**Outcome:** **PASS WITH QUALIFICATIONS**

## Test purpose

Validate the first end-to-end Nexus BMG evidence workflow across:

1. source discovery;
2. primary-source retrieval;
3. academic citation analysis;
4. publication and DOI verification;
5. claim-level verification;
6. contradiction and boundary testing;
7. evidence selection and exclusion recording;
8. controlled evidence registration in GitHub.

The test used the material claims and open evidence item in Chapter 3 of *AI Governance in Practice*.

## Claims tested

The run tested the Chapter 3 claim family C03-002 to C03-008:

- human presence does not itself guarantee meaningful oversight;
- effective oversight requires practical competence, information access, authority and intervention capacity;
- automation can reduce situation awareness and impair takeover performance in some settings;
- responsibility can be assigned to a human with limited practical control;
- AI accountability can be distributed across multiple actors;
- delegating work to AI does not by itself extinguish organisational accountability;
- the Accountability–Control Gap is a defensible Gardner organisational synthesis when its provenance boundary is explicit.

## End-to-end workflow executed

### 1. Classify

The task was classified **M3** because the evidence supports a public ebook, a controlled original construct and claims with governance and reputational consequence.

### 2. Search — Firecrawl

Firecrawl was used for:

- broad academic source discovery;
- official-source discovery;
- retrieval of current NIST, OECD and EU source text;
- full-text extraction from the 2026 peer-reviewed human-oversight article;
- identification of recent and emerging sources for monitoring.

Firecrawl successfully located:

- current official EU AI Act Article 14 and Article 26(2) text;
- the NIST AI RMF Govern Playbook;
- the current OECD AI Principles accountability wording;
- *Designing meaningful human oversight in AI* (Zhu et al., 2026);
- additional recent papers on HITL failure modes, delegated agency and agentic oversight.

### 3. Verify and analyse — Scite

Scite was used to:

- resolve and verify five core academic papers by DOI;
- check for editorial notices;
- inspect citation tallies and available supporting, contrasting and mentioning contexts;
- build a forward citation graph for foundational meaningful-human-control research;
- identify contrary evidence affecting the safe wording of the out-of-the-loop claim;
- record citation-inclusion and exclusion decisions.

Scite verification outcome:

- **5 papers verified**;
- **0 papers could not be verified**;
- **0 editorial notices detected**;
- **1 paper had visible contrasting evidence relevant to qualification**;
- **9 sources recorded as included and 9 recorded as excluded** in the Scite decision log.

Important interpretation control: Scite's “verified” status confirms the publication identity and available citation record. It does not, by itself, prove the manuscript claim. Claim verification still required reading the source and checking entailment.

### 4. Read primary and full-text sources — Firecrawl

Firecrawl retrieved the relevant text from:

- NIST Govern outcomes 1.2, 1.4, 1.5, 2.1, 2.3 and 3.2;
- EU AI Act Article 14 and Article 26(2), consolidated as at 27 July 2026;
- OECD accountability wording based on roles, context and ability to act;
- Zhu et al. (2026), including the distinction between AI operative agency and human evaluative agency and the warning against rubber-stamp oversight.

This step supplied the substantive text needed to test exact claim entailment rather than relying on search snippets or citation counts.

### 5. Challenge

The run actively tested contrary and limiting evidence.

The strongest material challenge concerned the out-of-the-loop claim. Scite surfaced later industrial research reporting that deskilling was not perceived as problematic in a restricted and highly predictable production environment. This does not overturn Endsley and Kiris, but it confirms that the chapter must retain bounded wording:

> Some forms of automation **can** reduce situation awareness and impair takeover performance; the effect is not inevitable across all environments.

Other boundaries retained:

- more human involvement is not automatically safer;
- human oversight must be designed, not merely declared;
- responsibility may be distributed across actors;
- “Delegation does not transfer accountability” is Gardner interpretation, not a universal legal rule;
- the EU AI Act is a jurisdiction-specific regulatory example;
- recent 2026 papers should not automatically displace stronger established evidence merely because they are newer.

### 6. Register

The run created a controlled Chapter 3 evidence register in GitHub with:

- stable claim IDs;
- claim type;
- primary and supporting evidence;
- contrary evidence;
- source quality;
- currency and jurisdiction controls;
- verification status;
- safe wording;
- unsafe overstatement;
- human approval and monitoring requirements.

## Tool-by-tool validation

| Capability | Firecrawl | Scite | Combined result |
|---|---|---|---|
| Broad source discovery | PASS | PASS for scholarly literature | PASS |
| Official-source discovery | PASS | Not primary use | PASS |
| Current legal/regulatory retrieval | PASS | Not primary use | PASS |
| Full-text claim checking | PASS where pages were accessible | Partial; some text restricted | PASS through combination |
| DOI/publication verification | Useful metadata | PASS | PASS |
| Citation landscape | Limited | PASS, with coverage limitations | CONDITIONAL PASS |
| Supporting/contrasting evidence | Search-based | PASS where citation contexts available | PASS WITH QUALIFICATIONS |
| Source-selection audit trail | Manual | PASS through citation decision report | PASS |
| Evidence registration | Not a repository | Not a repository | PASS through GitHub |

## What the plugins do well together

The strongest validated sequence is:

> **Firecrawl discovers → Scite analyses the scholarly record → Firecrawl retrieves and reads authoritative/full text → Nexus Evidence Engine verifies and challenges the claim → GitHub records the controlled evidence.**

Firecrawl contributed breadth and direct text retrieval. Scite contributed publication identity, citation context, contrasting evidence and an auditable inclusion/exclusion decision layer. Neither tool was sufficient alone for the full M3 workflow.

## Limitations identified

### Scite

- Full-text and citation snippets were restricted for some papers despite open-access status.
- Citation-graph coverage was uneven: the graph call had strong coverage for Siebert et al. but low coverage for some other seeds.
- Citation tallies and stance labels are useful signals, not substitutes for source reading or claim-entailment checking.
- Very recent 2026 papers have limited citation histories and should be treated as emerging evidence.

### Firecrawl

- Broad academic search returned useful but noisy results, including duplicate records, preprints, healthcare-specific sources and papers outside the chapter's scope.
- Search ranking does not equal evidentiary authority.
- Official and publisher pages still require human/Engine judgement about jurisdiction, method and scope.

### Workflow

- The integration remains human-supervised rather than a single automated pipeline.
- Stable DOI and source matching works well; source deduplication and claim-to-source mapping still require Evidence Engine reasoning.
- GitHub registration is successful, but automatic propagation from changed evidence to all dependent artefacts is not yet implemented.

## Chapter 3 evidence outcome

The run confirms the Chapter 3 evidence architecture.

### Strongly supported

- Human presence alone does not establish meaningful oversight.
- Meaningful oversight requires practical understanding, monitoring, interpretation, override and intervention conditions.
- Out-of-the-loop performance is a defensible bounded risk.
- Moral crumple zones are an appropriate caution against attributing responsibility to a nearby human with limited control.
- Accountability should be mapped across roles and ability to act.
- NIST supports delegated authorities alongside retained executive responsibility for AI risk decisions.

### Gardner synthesis retained

> **Delegation does not transfer accountability.**

> **Accountability–Control Gap:** a mismatch between accountability assigned to a person, role or organisation and the practical control realistically exercisable over the decision or outcome.

These remain author interpretation / emerging doctrine. The evidence supports the problem and neighbouring concepts; it does not externally validate the Gardner terminology.

## E3-01 resolution

The integration test identified and verified the preferred current source for closing E3-01:

**Zhu, L., Lu, Q., Ding, M., Lee, S.U. & Wang, C. (2026), ‘Designing meaningful human oversight in AI’, *AI and Ethics*, vol. 6, no. 3, p. 286, doi:10.1007/s43681-026-01147-7.**

The paper directly supports the distinction between AI operative agency and human evaluative agency and warns that nominal oversight can reduce the human to a rubber stamp.

E3-01 is **evidentially resolved** but remains **manuscript-open** until the citation is inserted into Chapter 3 v0.3.

## Monitoring decisions

Monitor:

- amendments or official implementation guidance affecting EU AI Act human-oversight obligations;
- a material NIST AI RMF revision affecting Govern outcomes;
- the developing citation record for Zhu et al. (2026);
- the emerging *Keeping an Eye on AI* oversight framework, which is relevant but currently too new to carry a core claim;
- stronger empirical evidence on agentic oversight and responsibility allocation.

Do not routinely monitor:

- the enduring publication identity of Endsley & Kiris (1995);
- Elish's moral crumple zone concept;
- the established Siebert et al. meaningful-human-control properties, except when a materially stronger synthesis appears.

## Integration-test decision

### Overall

**PASS WITH QUALIFICATIONS**

### Validated

- source discovery;
- official-source retrieval;
- academic citation analysis;
- DOI and publication verification;
- claim verification;
- contradiction testing;
- source inclusion/exclusion recording;
- GitHub evidence registration.

### Not yet validated

- unattended end-to-end automation;
- automatic source deduplication;
- automatic impact propagation to all dependent manuscript and doctrine artefacts;
- automatic monitoring alerts across Firecrawl, Scite and GitHub.

## Human decision gate

Alec Gardner retains approval of:

- the final wording of ‘Delegation does not transfer accountability’;
- the Accountability–Control Gap definition;
- insertion of Zhu et al. (2026) into Chapter 3;
- progression of Chapter 3 beyond Author Revision;
- reuse of this workflow as the default Nexus Evidence Engine integration pattern.

## Recommended standard workflow after this test

1. Extract controlled claims from the Studio artefact.
2. Classify materiality and jurisdiction.
3. Use Firecrawl for broad and authoritative source discovery.
4. Use Scite for academic resolution, citation context, contrary evidence and selection logging.
5. Return to Firecrawl or the official publisher/regulator for full-text verification.
6. Apply the Three-Layer Evidence Test.
7. Register claims, sources, contradictions and monitoring in GitHub.
8. Update the manuscript only after the claim is verified.
9. Re-run Evidence Survival after editorial revision.
10. Preserve Alec's human approval gate.
