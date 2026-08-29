# Brick 7 — Evidence Architecture and Provenance

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 7
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 7.1 Governing principle

A Studio must be able to show **why it reached the conclusion it did**.

Evidence architecture is the controlled structure that links claims, requirements, source material, interpretation, decisions, gates and final outputs. Provenance is the record of where that evidence came from, what happened to it, how it was interpreted and how it influenced the result.

The governing chain is:

> **Claim or requirement → Evidence → Source → Interpretation → Decision → Gate → Output**

A trustworthy Studio should be able to reconstruct this chain for every material conclusion.

## 7.2 Mandatory build instruction

Every Studio must create an **Evidence Architecture and Provenance Record** before its operational evidence workflow is finalised.

The record must define:

1. what counts as evidence for the Studio;
2. how evidence is linked to claims, requirements or decisions;
3. how evidence provenance is captured;
4. how evidence status is classified;
5. how evidence sufficiency is assessed;
6. how contradictory evidence is retained and treated;
7. how interpretations are separated from source facts;
8. how assumptions are identified;
9. how transformations, summaries or calculations are recorded;
10. how evidence is versioned or time-stamped where needed;
11. how evidence is protected against silent substitution or loss;
12. how evidence supports gates and decisions;
13. what evidence must be retained for audit, review or reconstruction;
14. how sensitive evidence is referenced without inappropriate duplication; and
15. when an evidence gap requires escalation, qualification or failure.

## 7.3 Evidence versus source rule

A source is where information originates. Evidence is the information from that source that is relevant to a claim, requirement or decision.

A Studio must not treat the existence of a source as proof that the source actually supports the claim being made.

For every material claim, the Studio should be able to answer:

- what exact evidence is being relied upon;
- where that evidence came from;
- what authority the source carries;
- whether the evidence directly supports the claim; and
- what limitations apply.

## 7.4 Claim-to-evidence traceability rule

Every material claim, finding, recommendation or decision should be traceable to supporting evidence where the Studio's reliance level requires it.

Traceability may be implemented through:

- citations;
- evidence identifiers;
- mapping tables;
- requirement matrices;
- source references;
- decision records;
- linked registers; or
- another controlled method appropriate to the Studio.

The method may vary, but the chain must remain recoverable.

## 7.5 Requirement-to-evidence traceability rule

Where the Studio evaluates compliance, assessment, governance, policy, contractual or other defined requirements, each material requirement must be traceable to the evidence used to determine whether it is met.

The Studio must distinguish:

- requirement text;
- evidence offered;
- evidence location;
- interpretation;
- decision;
- unresolved gap; and
- final status.

A conclusion such as "compliant", "covered", "competent" or "satisfied" must not exist without traceable support where the Studio's purpose requires formal evidence.

## 7.6 Evidence identity rule

Material evidence should have a stable identity sufficient to distinguish it from similar or later material.

Depending on the Studio, evidence identity may include:

- evidence ID;
- source title;
- author or issuing body;
- version;
- date;
- page, section, paragraph, line, timestamp or record reference;
- file or repository path;
- URL or document identifier;
- retrieval date;
- jurisdiction;
- approval status; or
- case-specific identifier.

The level of detail must be proportionate to the consequences of the output.

## 7.7 Provenance rule

For material evidence, the Studio must preserve enough provenance to establish:

- origin;
- authenticity or authority where relevant;
- version or currency;
- chain of handling where material;
- any transformation applied;
- the interpretation derived from it; and
- where it influenced the final output.

Provenance is not merely a bibliography. It is the history of how evidence entered and moved through the Studio.

## 7.8 Evidence-state rule

Evidence should be classified by state where this affects reliance.

Possible states include:

- **Verified** — provenance, relevance and required authenticity checks are satisfied;
- **Unverified** — potentially useful but not yet verified sufficiently for the intended reliance;
- **Corroborated** — supported by one or more independent sources;
- **Contradicted** — materially challenged by other credible evidence;
- **Incomplete** — relevant but missing necessary context or components;
- **Superseded** — replaced by later evidence for current reliance;
- **Disputed** — authenticity, interpretation or applicability is unresolved;
- **Excluded** — known but not permitted to influence the decision;
- **Withdrawn** — previously considered but no longer relied upon for a recorded reason.

The Studio must not silently upgrade evidence status merely because it supports the preferred conclusion.

## 7.9 Evidence sufficiency rule

Evidence sufficiency is not the same as evidence quantity.

The Studio must assess whether the evidence is sufficient for the strength and consequence of the claim being made.

Sufficiency may depend on:

- relevance;
- authority;
- completeness;
- directness;
- reliability;
- corroboration;
- currency;
- coverage of the requirement;
- consistency;
- contradictory evidence;
- contextual applicability; and
- reliance level.

A large volume of weak or duplicative evidence must not be mistaken for strong evidence.

## 7.10 Interpretation separation rule

The Studio must distinguish between:

**what the source says** and **what the Studio concludes from it**.

Where interpretation is material, the record should preserve:

- the relevant source evidence;
- the interpretive step;
- the rationale;
- relevant assumptions;
- alternative interpretations where material; and
- the person or authority responsible for the final interpretation where human judgement is required.

The Studio must not rewrite interpretive conclusions as though they were direct source facts.

## 7.11 Assumption rule

Material assumptions must be visible.

An assumption is not evidence merely because it appears reasonable.

Where the Studio relies on an assumption, it must determine whether the assumption is:

- benign and low consequence;
- material and requiring verification;
- provisional and requiring qualification; or
- unacceptable because the decision cannot safely proceed without evidence.

Material assumptions should be linked to the conclusions they affect.

## 7.12 Derived-evidence rule

Evidence may be transformed through calculations, coding, summarisation, aggregation, classification, translation, transcription or other processing.

Where the transformation materially affects the outcome, the Studio must retain enough information to reconstruct:

- the original evidence;
- the transformation method;
- parameters or rules applied;
- the resulting derived evidence;
- validation or checking performed; and
- any limitations introduced by the transformation.

A transformed output must not be treated as equivalent to the original source without recording the transformation.

## 7.13 Citation-integrity rule

Where citations are used, they must support the specific claim to which they are attached.

The Studio must guard against:

- citations to sources that do not support the claim;
- citations that support only part of a compound claim;
- secondary citations where a controlling primary source is required;
- fabricated citations;
- incorrect page or section references;
- citations to superseded versions; and
- citation laundering, where repeated secondary references create the appearance of independent support for the same underlying source.

A citation is not evidence integrity unless the citation is accurate and relevant.

## 7.14 Contradictory-evidence preservation rule

Contradictory evidence must not disappear merely because the Studio ultimately reaches a decision.

Where contradictory evidence is material, the evidence architecture must preserve:

- the contradictory source;
- the claim or requirement it affects;
- the nature of the contradiction;
- how the contradiction was evaluated;
- the resolution, if any;
- any residual uncertainty; and
- who authorised the final judgement where human judgement was required.

The evidence record should make it possible to understand not only why the final conclusion was accepted, but why competing evidence was not decisive.

## 7.15 Negative-evidence rule

Absence of evidence must not automatically be converted into evidence of absence.

The Studio must distinguish between:

- evidence that something did not occur;
- failure to find evidence that it occurred;
- incomplete search or unavailable records; and
- evidence that would reasonably be expected to exist but is missing.

This distinction must influence confidence and reliance appropriately.

## 7.16 Evidence-gap rule

Material evidence gaps must be recorded rather than silently filled by model inference.

For each significant gap, the Studio should determine whether to:

- seek additional evidence;
- lower confidence;
- qualify the conclusion;
- produce a provisional finding;
- escalate;
- fail the applicable gate; or
- stop the decision.

The correct response depends on consequence and reliance level.

## 7.17 Evidence freshness rule

Some evidence becomes stale.

The Studio must identify evidence types where freshness materially affects reliance, including where appropriate:

- regulatory records;
- policy versions;
- market data;
- organisational records;
- qualifications or licences;
- product documentation;
- system configurations;
- personnel status;
- financial data; and
- time-sensitive research or external events.

Where freshness matters, the Studio must record the relevant date and define a revalidation trigger.

## 7.18 Evidence replacement rule

New evidence must not silently overwrite earlier evidence where the earlier material forms part of the decision history.

Where evidence is replaced, corrected or superseded, the Studio should preserve:

- the prior evidence or reference;
- the reason for replacement;
- the new evidence;
- the effect on earlier decisions; and
- whether affected gates must be reopened.

## 7.19 Sensitive-evidence rule

Provenance does not require inappropriate duplication of sensitive evidence.

Where evidence is confidential, personal, sensitive, commercially restricted or otherwise controlled, the Studio may preserve provenance by recording:

- evidence identifier;
- secure location;
- owner or custodian;
- classification;
- access authority;
- relevant metadata; and
- decision linkage

without copying the protected content into a repository that is not approved to hold it.

## 7.20 Evidence-to-gate rule

Every material gate that depends on evidence must specify which evidence satisfies its criteria.

Gate records should be able to link to:

- evidence IDs;
- source records;
- review findings;
- test outputs;
- decision records; and
- unresolved gaps.

A gate decision without traceable evidence weakens the entire control architecture.

## 7.21 Evidence-to-output rule

The final output should preserve appropriate traceability to the evidence that supports it.

The form of traceability may differ by audience. A public article may use citations; an internal compliance review may use requirement IDs and evidence references; an assessment review may use mapping and evidence locations; a board paper may use an evidence appendix or source register.

The presentation can change. The provenance chain must not disappear.

## 7.22 Evidence lineage rule

Where an output is reused as input to another Studio or later workflow, the receiving Studio must not assume that provenance has survived unless it can verify the lineage.

The lineage should identify, where material:

- originating Studio or process;
- source evidence;
- transformation history;
- prior gate status;
- approval status;
- version;
- date; and
- known limitations.

A downstream Studio inherits neither authority nor reliability merely by receiving an upstream output.

## 7.23 Evidence integrity incident rule

Material provenance failures should be treated as control incidents.

Examples include:

- fabricated evidence;
- broken or false citations;
- altered source material without disclosure;
- loss of critical source identity;
- use of superseded evidence as current;
- deliberate omission of material contradictory evidence;
- unauthorised substitution of evidence;
- destroyed decision lineage; or
- inability to reconstruct a consequential decision.

The Studio must define when such failures require escalation, withdrawal, correction or incident recording.

## 7.24 Required artefact — Evidence Architecture and Provenance Record

Before Brick 7 can pass, every Studio must produce a controlled record containing at least:

- Studio name and identifier;
- evidence types;
- claim-to-evidence linkage method;
- requirement-to-evidence linkage method where applicable;
- evidence identifiers;
- provenance fields;
- evidence-state definitions;
- sufficiency criteria;
- interpretation-recording rules;
- assumption rules;
- transformation and derived-evidence rules;
- contradictory-evidence rules;
- negative-evidence rules;
- evidence-gap treatment;
- freshness and revalidation rules;
- replacement and supersession rules;
- sensitive-evidence handling;
- evidence-to-gate linkage;
- evidence-to-output linkage;
- evidence-lineage rules;
- integrity incident triggers;
- accountable owner;
- version and status; and
- approval status.

## 7.25 Gate 7 — Evidence Integrity and Provenance Gate

A Studio may progress beyond Brick 7 only when the following questions can be answered **Yes** with evidence:

- Can material claims be traced to evidence?
- Can evidence be traced to its source?
- Can source facts be distinguished from Studio interpretation?
- Are material assumptions visible?
- Are derived or transformed evidence steps reconstructable?
- Are evidence states controlled?
- Is sufficiency assessed rather than inferred from volume?
- Is contradictory evidence preserved and evaluated?
- Are evidence gaps visible?
- Are freshness and supersession handled where material?
- Can sensitive evidence be referenced without inappropriate duplication?
- Can gate decisions link to supporting evidence?
- Can final outputs retain appropriate traceability?
- Can downstream reuse preserve or re-establish lineage?
- Are material provenance failures treated as incidents or control failures?

If any material answer is **No**, the evidence architecture is incomplete.

## 7.26 Evidence required to pass

Gate 7 requires:

- the completed Evidence Architecture and Provenance Record;
- a representative evidence register or equivalent prototype;
- at least one complete trace from claim or requirement through evidence and source to decision and output;
- at least one contradictory-evidence example;
- at least one evidence-gap example; and
- at least one example of evidence replacement, revalidation or sensitive-location referencing where relevant to the Studio.

For consequential Studios, the reviewer must be able to reconstruct a representative decision without relying on hidden model reasoning.

## 7.27 Failure response

If Gate 7 fails:

- material outputs must not be represented as fully evidence-grounded;
- consequential gate decisions relying on broken provenance must be reopened or blocked;
- unsupported claims must be corrected, qualified or removed;
- evidence identities and source references must be repaired;
- hidden assumptions must be surfaced;
- material contradictory evidence must be restored to the record;
- broken lineage must be re-established where possible; and
- serious integrity failures must be escalated or recorded as incidents.

A Studio that cannot reconstruct the basis of a material conclusion cannot reliably defend that conclusion.

## 7.28 Human approval point

The accountable owner must approve the evidence architecture before operational use.

Additional subject-matter, quality, regulatory, privacy, legal, assessment or audit approval may be required where the Studio depends on formal evidence standards or sensitive information.

Human judgement is required where evidence sufficiency, authenticity, contradictory interpretation or residual uncertainty cannot be resolved by the approved rules alone.

Any material change to evidence standards, provenance requirements, retention rules or traceability thresholds requires reassessment of Brick 7 and any affected gates.

## 7.29 GitHub control record

For Nexus BMG Studios, the Evidence Architecture and Provenance Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- evidence architecture;
- provenance fields;
- evidence-state definitions;
- traceability method;
- transformation rules;
- contradictory-evidence treatment;
- major evidence-integrity decisions;
- material changes;
- approval records; and
- representative templates or examples.

Restricted underlying evidence may remain in an approved secure system and be referenced by controlled identifier and location.

## 7.30 Brick 7 completion rule

Brick 7 is complete only when the Studio can answer five questions for every material conclusion:

> **What evidence supports this?**
>
> **Where did that evidence come from?**
>
> **What interpretation or transformation occurred?**
>
> **What contradictory or missing evidence matters?**
>
> **Can another authorised reviewer reconstruct the decision?**

If the final answer is no, provenance is insufficient.

---

## Brick 7 core rule

**If a material conclusion cannot be reconstructed from its evidence trail, it should not be treated as fully controlled.**
