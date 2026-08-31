# Brick 5 — Output Standard and Definition of Done

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 5
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 5.1 Governing principle

A Studio must define **what good looks like before generation begins**.

An output is not complete because the AI has stopped writing, because the requested format has been produced, or because the result appears polished. Completion must be determined against an explicit output standard tied to the Studio's purpose, authority, evidence requirements, user needs and release conditions.

The governing question is:

> **What must be demonstrably true before this output can be relied upon, released or acted upon?**

A Studio without a defined answer to that question has no defensible Definition of Done.

## 5.2 Mandatory build instruction

Every Studio must create an **Output Standard and Definition of Done Record** before operational workflows and prompts are finalised.

The record must define, for each material output type:

1. the intended user and use;
2. the required structure and format;
3. the minimum content requirements;
4. the evidence requirements;
5. the source and citation requirements;
6. the required level of completeness;
7. the required level of accuracy;
8. the required level of practical usefulness;
9. any professional, regulatory, editorial or organisational standard that applies;
10. the required treatment of uncertainty and limitations;
11. the required treatment of contradictory evidence;
12. the required human review or approval;
13. any required metadata, version or status label;
14. release conditions;
15. failure conditions; and
16. the exact criteria that define "Done".

The Output Standard must be specific enough that a reviewer can determine whether an output passes without relying only on personal taste.

## 5.3 Output standard rule

The Output Standard must define quality in terms relevant to the Studio's purpose.

Depending on the Studio, quality dimensions may include:

| Quality dimension | Typical question |
|---|---|
| **Purpose fit** | Does the output actually solve the problem the Studio exists to address? |
| **Accuracy** | Are material statements factually and technically correct? |
| **Evidence integrity** | Are claims supported by appropriate evidence? |
| **Source integrity** | Are controlling and authoritative sources used correctly? |
| **Completeness** | Are all required elements present? |
| **Traceability** | Can significant claims, decisions or conclusions be traced to evidence? |
| **Clarity** | Can the intended user understand and use the output? |
| **Practical usefulness** | Can the intended user act on the output appropriately? |
| **Consistency** | Does the output align with the Studio's approved rules, terminology and structure? |
| **Boundary compliance** | Has the output remained within approved scope and authority? |
| **Uncertainty integrity** | Are limitations and unresolved issues stated honestly? |
| **Professional quality** | Does the output meet the relevant professional, editorial, regulatory or organisational standard? |
| **Release readiness** | Have all required gates and approvals been completed? |

The dimensions selected must be proportionate to the Studio and its consequences.

## 5.4 Definition of Done rule

"Done" must be a controlled status, not a subjective impression.

For a material Studio output, **Done** means that all mandatory output criteria, gates and approvals applicable to that output have been satisfied.

A result may be:

- **Generated** — the AI has produced a response or draft;
- **Complete for review** — required content appears present but quality or authority review remains outstanding;
- **Gate-passed** — required quality controls have been successfully completed;
- **Approved for release** — an authorised human has approved release where required;
- **Released** — the approved output has been delivered, published, filed or otherwise placed into operational use.

These statuses must not be treated as interchangeable.

## 5.5 No cosmetic completion rule

Presentation quality must not conceal substantive weakness.

A well-formatted report, polished article, attractive slide deck, apparently complete compliance matrix or confident recommendation is not "Done" if material evidence, source authority, required content, boundary compliance or human approval is missing.

The Studio must prioritise substantive completion over cosmetic completeness.

## 5.6 Completeness rule

Every output type must identify its mandatory components.

Where required components are absent, the Studio must not silently infer that they are unnecessary.

The Studio must distinguish between:

- **mandatory content** — required for the output to pass;
- **conditional content** — required when specified circumstances apply;
- **optional enhancement** — useful but not required for completion.

If mandatory content cannot be produced because evidence or information is missing, the output must remain incomplete, qualified or escalated rather than being padded with invented material.

## 5.7 Accuracy and verification rule

The required level of verification must match the reliance level and consequence of the output.

For low-consequence drafting, internal consistency review may sometimes be sufficient. For regulated, professional, financial, legal, assessment, compliance, publication or other consequential outputs, material facts and controlling claims must be checked against the approved source architecture.

The Studio must define which claims require:

- source verification;
- current-source verification;
- primary-source verification;
- calculation checking;
- cross-source confirmation;
- human professional review; or
- independent second review.

The presence of citations alone does not prove accuracy.

## 5.8 Evidence sufficiency rule

The output must contain enough evidence for the level of claim being made.

The Studio must not allow:

- stronger claims than the evidence supports;
- compliance conclusions from incomplete requirements;
- definitive recommendations from highly uncertain evidence without qualification;
- universal propositions from narrow evidence without boundary conditions; or
- unsupported confidence created through polished language.

Where evidence is insufficient, the Definition of Done must require the limitation to be recorded or the output to fail the relevant gate.

## 5.9 Contradictory-evidence rule

Where contradictory evidence could materially affect the outcome, completion requires that it be considered rather than ignored.

The Studio must define whether contradictory evidence must be:

- disclosed;
- analysed;
- reconciled where defensible;
- retained as an unresolved limitation; or
- escalated for human judgement.

An output is not complete merely because supportive evidence has been found.

## 5.10 Usability rule

An output must be usable by its intended audience.

Usability may require:

- appropriate language and terminology;
- clear decision implications;
- practical next actions;
- appropriate level of detail;
- accessible structure;
- correct format;
- audience-appropriate explanation;
- separation of facts, analysis, recommendations and decisions; or
- clear indication of what the user must still verify or approve.

Technical correctness without practical usability may still fail the output standard where the Studio's purpose requires action or decision support.

## 5.11 Audience and reliance rule

Every material output should make clear, where relevant, who it is for and how it may be relied upon.

The Studio must not produce an output in a form that implies greater authority than the underlying review status permits.

Examples include:

- a draft must not look like an approved policy;
- an advisory assessment review must not look like a formal competency decision unless authorised;
- a research hypothesis must not be presented as established fact;
- an internal working paper must not appear to be external legal advice; and
- an unapproved article draft must not be labelled publication-ready merely because the prose is polished.

## 5.12 Status-labelling rule

Material outputs must use status labels appropriate to the Studio.

Possible labels include:

- Concept;
- Working Draft;
- Draft for Review;
- Evidence Incomplete;
- Under Review;
- Gate Failed;
- Gate Passed;
- Ready for Approval;
- Approved for Release;
- Released;
- Superseded; and
- Withdrawn.

The Studio must define which labels it uses and what each label permits.

## 5.13 Defect severity rule

Not all defects are equal. The Studio should classify output defects so that minor presentation issues do not receive the same treatment as evidence or authority failures.

At minimum, Studios with consequential outputs should distinguish:

| Severity | Meaning | Typical response |
|---|---|---|
| **Critical** | Could produce an unlawful, unsafe, materially false or unauthorised outcome | Stop release; correct and re-review |
| **Major** | Material requirement, evidence, logic or source problem that could alter the conclusion | Fail gate; return for correction |
| **Moderate** | Meaningful quality or usability problem that does not invalidate the core result | Correct before release where required |
| **Minor** | Cosmetic, stylistic or low-impact defect | Correct proportionately; may not block release if the Standard permits |

Each Studio may refine this model.

## 5.14 No compensating-error rule

Strength in one quality dimension must not automatically compensate for failure in another mandatory dimension.

Excellent writing cannot compensate for unsupported claims. Strong evidence cannot compensate for an unauthorised action. Complete formatting cannot compensate for missing requirements. Practical usefulness cannot compensate for regulatory non-compliance.

Where a criterion is mandatory, it must pass in its own right unless the Studio's approved Standard explicitly provides a different rule.

## 5.15 Output-specific Definition of Done

A Studio may produce multiple output types. Each material output type must therefore have its own Definition of Done where the criteria differ materially.

For example, a Studio may require different completion criteria for:

- a research brief;
- an evidence register;
- a recommendation;
- a draft article;
- an assessment review;
- a compliance finding;
- a client report;
- a publication-ready manuscript;
- an email prepared for human review; or
- an external system action.

A single vague quality statement must not be stretched across materially different outputs.

## 5.16 Required artefact — Output Standard and Definition of Done Record

Before Brick 5 can pass, every Studio must produce a controlled record containing at least:

- Studio name and identifier;
- output types;
- intended user for each output;
- intended use;
- required structure and format;
- mandatory content;
- conditional content;
- evidence requirements;
- source and citation requirements;
- accuracy and verification requirements;
- completeness criteria;
- contradictory-evidence treatment;
- uncertainty and limitation requirements;
- usability criteria;
- status labels;
- defect-severity rules where relevant;
- human review requirements;
- release conditions;
- failure conditions;
- Definition of Done for each material output;
- accountable owner;
- version and status; and
- approval status.

This record may later be incorporated into the Studio Control Record, output templates, checklists or gate records, but it must exist as a controlled design artefact.

## 5.17 Gate 5 — Output Standard Gate

A Studio may progress beyond Brick 5 only when the following questions can be answered **Yes** with evidence:

- Is each material output type identified?
- Is the intended user and intended use clear?
- Is quality defined before generation begins?
- Are mandatory content requirements explicit?
- Are evidence and source requirements explicit?
- Are accuracy and verification requirements proportionate to reliance and consequence?
- Are completeness criteria defined?
- Is contradictory evidence addressed where material?
- Are uncertainty and limitations required to be stated honestly?
- Are usability criteria defined?
- Are output status labels controlled?
- Is the distinction between Generated, Complete for Review, Gate-Passed, Approved and Released clear?
- Are mandatory failures prevented from being hidden by good presentation?
- Is there an explicit Definition of Done for every material output type?
- Can an independent reviewer determine whether the output passes?

If any material answer is **No**, the gate fails.

## 5.18 Evidence required to pass

Gate 5 requires the completed Output Standard and Definition of Done Record plus representative examples or test cases showing how the criteria will be applied.

At minimum, testing should include:

- an obviously strong output;
- a polished but evidence-deficient output;
- a complete-looking output with a missing mandatory element;
- an output with unresolved contradictory evidence;
- an output that exceeds the Studio's authority;
- an output with correct substance but poor usability; and
- an output that should be approved only after human review.

The Studio should demonstrate that it can distinguish these cases rather than rating them all as "good" because they look professional.

## 5.19 Failure response

If Gate 5 fails:

- production prompts must not be treated as final;
- release automation must not be enabled;
- outputs must remain Draft, Under Review or another non-release status;
- missing quality criteria must be defined;
- output-specific completion rules must be added where generic criteria are insufficient;
- weak or ambiguous release language must be removed; and
- the Studio must not represent its outputs as trusted, approved, compliant, publication-ready or final where the Definition of Done has not been satisfied.

A Studio that cannot define how an output becomes complete cannot reliably govern output quality.

## 5.20 Human approval point

The accountable owner must approve the Output Standard and Definition of Done before the Studio's production workflow is treated as operational.

Additional professional, regulatory, editorial, quality, privacy, security or organisational approval may be required where outputs carry material consequences.

Any later material change to output purpose, reliance level, required quality, evidence standard or release threshold must return to Gate 5 and any earlier affected gate.

## 5.21 GitHub control record

For Nexus BMG Studios, the Output Standard and Definition of Done Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record must preserve:

- output types;
- quality criteria;
- Definition of Done;
- status labels;
- release thresholds;
- material changes;
- approval records; and
- the rationale for any significant change in quality or reliance requirements.

Where output templates, checklists or schemas implement the Standard, their controlled versions should be traceable to this record.

## 5.22 Brick 5 completion rule

Brick 5 is complete only when the Studio can answer four questions for every material output:

> **What does good look like?**
>
> **What evidence proves it is good enough?**
>
> **What still prevents release?**
>
> **Who, if anyone, must approve it before it is done?**

If those questions cannot be answered, the output is not governed.

---

## Brick 5 core rule

**The AI finishing the task is not the same as the Studio finishing the work.**
