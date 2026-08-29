# Nexus Studio Building Standard

## Document control

- **Document ID:** NEX-GOV-003
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Authoritative branch during development:** `studio-building-standard`
- **Approval authority:** Alec Gardner

## Purpose

This Standard defines the mandatory method for designing, building, testing, governing, approving and maintaining Nexus BMG AI-assisted Studios.

It serves two purposes simultaneously:

1. it provides a reusable methodology that another competent person can follow to design a controlled Studio; and
2. it is the mandatory build protocol used whenever Nexus BMG creates or materially changes one of its own Studios.

No Studio is considered built merely because its prompts work or because it can produce an impressive output. A Studio must demonstrate that its purpose, authority, sources, evidence architecture, gates, workflow, human decision points, failure behaviours, testing, version controls and release conditions have been deliberately designed.

---

# Brick 1 — What Is a Studio?

A **Studio** is a controlled, purpose-built environment for using artificial intelligence, human judgement, authoritative sources, evidence, defined workflows and quality controls to produce a particular class of trusted outcome.

A Studio is not a prompt, prompt library, chatbot or collection of instructions. Prompts may operate within a Studio, but they are subordinate components of a larger system. The defining characteristic of a Studio is that an output does not become trustworthy merely because an AI system has produced it. Trust must be progressively established through evidence, controls, review and defined decision points.

Every Studio begins with a clearly defined purpose. It identifies what the Studio is intended to accomplish, who or what the output serves, which sources have authority, what evidence is required, where the boundaries of AI authority lie, what requires human judgement, what quality standards must be achieved and what conditions must be satisfied before an output can be released.

A Studio operates through **gates**. Gates are explicit decision points at which work must demonstrate that specified conditions have been satisfied before progressing. A gate cannot be passed merely because the AI states that it has been passed. The required evidence must exist in the work, source material, control record or decision record. Where a gate is not satisfied, the work must stop, return to an earlier stage, seek additional evidence or be escalated for human judgement.

Studios must also preserve **provenance**. Where appropriate to the risk and purpose of the Studio, it should be possible to determine what sources informed an output, what significant assumptions were made, what evidence was considered, what contradictory evidence was identified, what material decisions were taken, which gates were applied, what human interventions occurred and which version was ultimately approved.

Human accountability remains fundamental. AI may research, analyse, compare, challenge, generate, test and recommend within the authority granted to it by the Studio. It must not silently extend that authority. Where professional, regulatory, ethical, strategic or consequential judgement is required, the Studio must identify the appropriate human decision point.

The design principle underlying every Studio is:

> **Design backwards from trust. Determine what must be true before you would rely upon, release or put your name to the output, and then build the Studio so those conditions must be demonstrated.**

Accordingly, a Studio is not considered operational simply because its prompts work or it can generate an impressive output. It must first demonstrate that its purpose, boundaries, evidence architecture, gates, workflow, human decision rights, failure behaviours, version controls, testing requirements and release conditions have been deliberately designed.

## Studio Building Rule

Every new Studio must itself be built through the **Studio Building Standard**.

No Studio may bypass the Standard on the basis that its subject matter appears simple, familiar or low risk. The depth of individual controls may be proportionate to the purpose and consequences of the Studio, but the requirement to consider each control remains.

This creates a recursive control architecture:

**Studio Building Standard → governs the construction of Studios → Studios govern the production of their outputs.**

The Standard therefore serves two purposes simultaneously. It is a methodology that others can use to design controlled AI-assisted Studios, and it is the mandatory build protocol used whenever Nexus BMG creates, substantially modifies or governs one of its own Studios.

---

# Brick 2 — Studio Purpose, Intended Outcome and Authority

## 2.1 Governing principle

A Studio must not be designed around a technology, prompt, model or feature. It must be designed around a clearly defined problem, intended outcome and authorised decision boundary.

Before research, workflow design, prompt engineering, connector selection or automation begins, the Studio builder must be able to state why the Studio exists, who it serves, what trusted outcome it is expected to support, what it is authorised to do and who remains accountable for decisions made with or through it.

A useful Studio purpose statement answers a practical question:

> **What problem are we solving, for whom, to what standard, and with what limits on AI authority?**

A Studio that cannot answer this question clearly is not ready to be built.

## 2.2 Mandatory build instruction

For every proposed Studio, the builder must complete a **Studio Purpose and Authority Record** before progressing to source selection, detailed workflow design, prompting or connector configuration.

The record must define:

1. **Problem or need** — the real-world problem, recurring task, decision burden, quality gap or opportunity the Studio is intended to address.
2. **Intended users** — the people, roles or authorised groups expected to use the Studio and any relevant assumptions about their capability or authority.
3. **Intended outcome** — the practical result the Studio is expected to help produce, not merely the type of content it generates.
4. **Primary outputs** — the documents, analyses, recommendations, decisions, records, artefacts or actions the Studio may produce or support.
5. **Reliance level** — how far a user may reasonably rely on the Studio's output before additional verification, professional judgement or formal approval is required.
6. **AI authority** — what the AI is permitted to research, analyse, generate, compare, test, recommend, draft or execute.
7. **Human authority** — which decisions, approvals, releases, classifications, interpretations or consequential actions remain reserved to an authorised human.
8. **Accountable owner** — the person or role responsible for approving the Studio's purpose, authority, operational status and material changes.
9. **Success criteria** — the observable conditions that would indicate the Studio is achieving its purpose.
10. **Non-purpose** — matters the Studio may appear capable of doing but is not being created or authorised to do.

The purpose statement must be specific enough that an independent reviewer can determine whether a proposed feature, prompt, connector, source or workflow step belongs inside the Studio.

## 2.3 Intended outcome rule

The intended outcome must describe the value or decision the Studio supports rather than merely the activity it performs.

Weak outcome statements describe AI activity, for example: "generate reports", "answer questions", "review documents" or "create articles".

Stronger outcome statements define the trusted result, for example: enabling a qualified assessor to determine whether submitted evidence meets specified assessment requirements; enabling a senior leader to receive an evidence-grounded decision brief; or enabling an author to develop a publication-ready article that has survived defined originality, evidence and editorial gates.

The Standard therefore requires the Studio builder to distinguish between:

**Activity → Output → Outcome → Decision or value created.**

The Studio should be designed against the outcome and decision, not merely the activity.

## 2.4 Authority rule

Capability does not equal authority.

A Studio may be technically capable of making a judgement, sending a message, changing a record, publishing content, accessing a connector or initiating an action. That capability does not authorise it to do so.

AI authority must be explicitly granted and bounded. Anything not explicitly authorised must be treated as outside the Studio's autonomous authority until approved.

Human authority must be retained wherever the Studio affects rights, formal outcomes, regulatory interpretation, professional judgement, employment decisions, assessment outcomes, financial commitments, external publication, sensitive data access, client commitments or other consequential decisions unless a separately approved control explicitly provides otherwise.

Where responsibility is shared across roles, decision rights must identify who may recommend, who may review, who may approve and who is ultimately accountable.

## 2.5 Minimum authority model

Every Studio must distinguish at least four levels of authority:

| Authority level | Meaning |
|---|---|
| **Assist** | AI may retrieve, organise, summarise, draft or structure information without making the final judgement. |
| **Recommend** | AI may analyse evidence and propose a course of action, classification or decision for human consideration. |
| **Decide** | The Studio may make a defined decision only where that authority has been explicitly approved, tested and documented. |
| **Act** | The Studio may perform an external or system action only where permissions, failure controls, human approval requirements and audit records have been explicitly established. |

No Studio should default to **Decide** or **Act** simply because a model or connector makes those functions technically possible.

## 2.6 Required artefact — Studio Purpose and Authority Record

Before Brick 2 can pass, each proposed Studio must produce a controlled record containing at least:

- Studio working name;
- proposed Studio identifier;
- problem or need;
- intended users;
- intended outcome;
- primary outputs;
- reliance level;
- authorised AI activities;
- human-reserved decisions;
- accountable owner;
- success criteria;
- explicit non-purpose or exclusions;
- known consequential or high-risk implications;
- provisional governance classification, where applicable;
- record status and version;
- approval status.

This record may later become part of the Studio Control Record, but it must exist during construction so that all subsequent design decisions can be tested against it.

## 2.7 Gate 2 — Purpose and Authority Gate

A Studio may progress beyond Brick 2 only when the following questions can be answered **Yes** with evidence in the Studio Purpose and Authority Record:

- Is there a clear problem or need worth solving?
- Are the intended users identifiable?
- Is the intended outcome stated as a practical result rather than an AI activity?
- Are the primary outputs known?
- Is the expected reliance level clear?
- Is AI authority explicitly bounded?
- Are human-reserved decisions explicit?
- Is an accountable owner identified?
- Are success criteria observable?
- Are obvious non-purposes or exclusions recorded?
- Can a reviewer use the purpose statement to decide whether later features belong in or outside the Studio?

If any material answer is **No**, the gate fails.

## 2.8 Evidence required to pass

The gate must not be passed by an AI statement that the Studio has a clear purpose. The evidence must consist of the completed controlled record and, where relevant, supporting business, regulatory, client, user or governance requirements.

Where the Studio is being created for a regulated, professional or consequential context, the purpose and authority record must identify the applicable accountable human role before the build proceeds.

## 2.9 Failure response

If Gate 2 fails:

- detailed prompt engineering must not begin;
- connectors and write permissions must not be enabled;
- automation must not be authorised;
- the Studio must remain in **Concept** or **Working Draft** status;
- unresolved authority questions must be escalated to the accountable owner;
- conflicting purposes must be resolved or separated into different Studios; and
- features that cannot be justified against the purpose must be removed, deferred or separately approved.

Where the proposed Studio has no sufficiently valuable or defensible purpose, the correct outcome may be **do not build the Studio**.

## 2.10 Human approval point

The accountable owner must approve the Studio's purpose and provisional authority boundary before the Studio progresses into detailed source, evidence, workflow, prompting, connector or automation design.

Approval at this point does not approve operational release. It authorises continuation of the build under the stated purpose and limits.

Any later material change to purpose, intended users, reliance level or AI authority requires the Studio to return to Gate 2 for reassessment.

## 2.11 GitHub control record

For Nexus BMG Studios, the Studio Purpose and Authority Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The GitHub record must preserve:

- the initial purpose and authority definition;
- material revisions;
- approval status;
- the responsible owner;
- any decision that materially expands or restricts Studio authority; and
- sufficient version history to explain why the current boundary exists.

Chat history and AI memory may assist development but are not substitutes for the controlled record.

## 2.12 Brick 2 completion rule

Brick 2 is complete only when the purpose and authority of the proposed Studio are sufficiently clear that every later design choice can be challenged with two questions:

> **Does this help achieve the approved Studio purpose?**
>
> **Is the Studio authorised to do it?**

If either answer is uncertain, the design decision must not silently proceed.

---

# Brick 3 — Authoritative Sources and Source Hierarchy

## 3.1 Governing principle

A Studio must know **what it is allowed to treat as authoritative**.

Access to information does not make that information controlling. A Studio may encounter legislation, standards, policies, procedures, academic research, commercial guidance, uploaded files, websites, practitioner knowledge, prior Studio outputs, user statements and model memory. These sources do not carry equal authority, and they must not be treated as interchangeable.

Every Studio must therefore establish a deliberate source hierarchy before it relies on source material to make, support or recommend a consequential judgement.

The governing question is:

> **When two sources disagree, which source governs, why, and what must the Studio do if the conflict cannot be resolved?**

If the Studio cannot answer that question, its source architecture is incomplete.

## 3.2 Mandatory build instruction

Every proposed Studio must create a **Source Authority and Hierarchy Record** before detailed evidence rules, research workflows or prompts are finalised.

The record must identify:

1. the classes of sources the Studio may use;
2. the controlling sources for the Studio's purpose;
3. the order of precedence between source classes;
4. any jurisdiction, organisational or contextual limits on that hierarchy;
5. currency and version requirements;
6. how source conflicts are detected and resolved;
7. how unverified or provisional sources are labelled;
8. which source classes may inform analysis but may not override controlling authority;
9. when human interpretation is required; and
10. how source provenance is preserved.

The hierarchy must be appropriate to the Studio. There is no single universal source order that applies to every domain.

## 3.3 Source-classification model

Each Studio must classify its source types. Depending on purpose, these may include:

| Source class | Typical examples | Default role |
|---|---|---|
| **Controlling authority** | legislation, regulation, binding standards, court or tribunal decisions, formally approved governing instruments | Defines mandatory requirements where applicable |
| **Authoritative official guidance** | regulator guidance, government publications, official interpretations, product documentation | Explains or operationalises controlling requirements but does not silently override them |
| **Approved organisational authority** | approved policies, procedures, frameworks, contracts, delegations, controlled templates | Governs organisational practice within its approved scope |
| **Primary evidence** | source documents, submissions, records, datasets, interviews, observations, contemporaneous evidence | Establishes the factual basis for analysis or decision-making |
| **Peer-reviewed or established evidence** | academic research, systematic reviews, recognised professional literature | Supports evidence-based interpretation and argument |
| **Credible secondary evidence** | reputable professional guidance, industry analysis, high-quality journalism, specialist commentary | Provides context, interpretation, examples or current developments |
| **Practitioner evidence** | first-hand executive, professional or operational experience | Adds contextual and experiential insight where relevant and appropriately identified |
| **User-provided material** | uploaded files, notes, instructions, examples, drafts | May provide case-specific context but is not automatically authoritative |
| **Prior Studio output** | earlier reports, drafts, analyses, summaries, registers | May be reusable evidence only where its provenance and status remain valid |
| **AI/model knowledge or memory** | model recall, conversational memory, generated summaries | Discovery or drafting aid only unless independently verified against an approved source |

These categories are a starting model. A Studio may add or refine source classes where necessary.

## 3.4 Source hierarchy rule

Every Studio must explicitly record its own source hierarchy.

The hierarchy must be based on **authority for the question being answered**, not convenience, familiarity or ease of retrieval. A recent secondary source does not automatically outrank an older but still-current controlling instrument. An internal policy does not override law. A user-uploaded document does not become approved merely because it is available to the Studio. Academic prestige does not convert research into regulatory authority.

Where different source types answer different questions, the Studio may maintain more than one hierarchy. For example, a compliance Studio may use one hierarchy for legal requirements, another for organisational implementation requirements and another for empirical evidence about effective practice.

The hierarchy must therefore be **question-sensitive**, not mechanically applied.

## 3.5 Controlling-source rule

For every material decision type, the Studio must identify the source or source class with final controlling authority where one exists.

Examples include:

- the current legislation or regulatory instrument for a legal requirement;
- the current approved unit of competency and assessment requirements for a VET assessment mapping decision;
- the approved organisational policy for an internal procedural requirement;
- the signed contract for a contractual obligation;
- the current official product documentation for a software capability claim;
- the primary research or dataset for a claim about a specific study result.

Where there is no single controlling source, the Studio must state that explicitly and define how multiple evidence types are weighed.

## 3.6 Source status rule

A Studio must distinguish source **availability** from source **status**.

Where appropriate, sources should carry one of the following status labels:

- **Controlling** — authorised to determine the applicable requirement within scope;
- **Authoritative** — highly reliable official or approved guidance that informs interpretation;
- **Approved** — formally authorised for organisational or Studio use;
- **Primary evidence** — direct evidence relevant to the matter under consideration;
- **Supporting** — credible evidence that informs but does not control the decision;
- **Provisional** — potentially useful but not yet sufficiently verified;
- **Superseded** — replaced by a later valid source and not to be relied upon as current authority;
- **Disputed** — authority, accuracy or applicability is unresolved;
- **Excluded** — known but not permitted to influence the decision for the relevant purpose.

A Studio must not silently promote a provisional, user-supplied or AI-generated source into an authoritative status.

## 3.7 Currency and version rule

A source is not reliable merely because it was once authoritative.

For sources whose authority can change, the Studio must define a currency test. That test may include:

- effective date;
- version or release number;
- amendment status;
- jurisdiction;
- approval status;
- supersession status;
- review date;
- applicability to the current case;
- official publication location; and
- date last verified.

Where currency materially affects the outcome, the Studio must verify the current source before relying on it.

A cached copy, uploaded document, prior citation or model recollection must not be assumed current simply because it appears complete.

## 3.8 Source-conflict rule

Source conflict must be treated as a normal control condition, not an inconvenience to be hidden.

When two material sources disagree, the Studio must:

1. identify the conflict explicitly;
2. determine whether the sources address the same question, jurisdiction, period and scope;
3. check version, currency and approval status;
4. apply the approved source hierarchy;
5. preserve the contradictory source where it remains relevant;
6. record the resolution and rationale; and
7. escalate where the hierarchy does not produce a defensible answer.

The Studio must not merge contradictory sources into a false consensus merely to produce a neat answer.

## 3.9 No silent reconciliation rule

Where two authoritative or apparently controlling sources remain materially inconsistent after verification, the Studio must not invent a reconciliation.

It must instead state the conflict, identify the consequence for the task and escalate to the authorised human or appropriate external authority where required.

This rule is particularly important in legal, regulatory, assessment, policy, contractual, technical and professional contexts.

## 3.10 User-provided source rule

User-provided information is important but not self-authenticating.

A file, statement, instruction or example supplied by a user may establish case-specific facts or context, but it does not automatically override a controlling source or become an approved organisational standard.

Where a user asks the Studio to rely on a source that conflicts with a higher-authority source, the Studio must follow the approved hierarchy and surface the conflict.

Where the user's instruction itself carries legitimate decision authority, that authority should be recorded separately from the evidentiary status of the material provided.

## 3.11 AI memory and generated-content rule

AI memory, prior conversational context and generated content must never serve as the sole formal authority for a material claim where an authoritative source is required.

AI may use memory to locate, recall or propose relevant information, but material facts, current requirements and consequential claims must be checked against the source architecture established for the Studio.

A previous Studio output may be reused only where its provenance, currency, approval status and applicability remain valid.

## 3.12 Research-source rule

Where a Studio uses research rather than a single controlling authority, it must define how research evidence is weighted.

The Studio should consider, as appropriate:

- relevance to the actual proposition;
- methodological quality;
- directness of evidence;
- recency where material;
- replication or consistency;
- contradictory evidence;
- applicability to the intended population or context;
- independence and conflicts of interest; and
- distinction between evidence, interpretation and opinion.

Research hierarchy must not be reduced to a simplistic rule that one publication type always wins. The evidentiary question must remain tied to the claim being made.

## 3.13 Required artefact — Source Authority and Hierarchy Record

Before Brick 3 can pass, every Studio must produce a controlled record containing at least:

- Studio name and identifier;
- source classes permitted;
- controlling source or source classes;
- source hierarchy or hierarchies;
- rationale for precedence;
- jurisdiction or scope limitations;
- currency and version rules;
- source-status labels;
- conflict-resolution procedure;
- escalation conditions;
- prohibited or excluded source uses;
- treatment of user-provided materials;
- treatment of prior Studio outputs;
- treatment of AI memory and generated content;
- provenance-recording requirements;
- responsible owner;
- version and status; and
- approval status.

The record may later form part of the Studio Control Record, Source Register or Evidence Register, but it must exist during construction.

## 3.14 Gate 3 — Source Authority Gate

A Studio may progress beyond Brick 3 only when the following questions can be answered **Yes** with evidence:

- Have the relevant source classes been identified?
- Is the controlling authority known for each material decision type where one exists?
- Has a source hierarchy been defined rather than assumed?
- Is the hierarchy appropriate to the question and context?
- Are currency and version requirements explicit?
- Can the Studio distinguish controlling, authoritative, supporting, provisional, superseded and disputed sources?
- Is there a defined process for resolving source conflicts?
- Is there a stop-and-escalate rule for unresolved authoritative conflict?
- Are user-provided sources prevented from silently overriding higher authority?
- Are AI memory and generated content prevented from acting as sole formal authority where verification is required?
- Can the provenance of material sources be preserved?

If any material answer is **No**, the gate fails.

## 3.15 Evidence required to pass

Gate 3 requires the completed Source Authority and Hierarchy Record and, where relevant, examples of the actual controlling or authoritative sources the Studio will use.

For regulated, professional or consequential Studios, a reviewer must be able to trace the hierarchy from the Studio's intended decision back to the authority that governs that decision.

The gate must not be passed merely because the Studio has access to a large knowledge base or internet search capability.

## 3.16 Failure response

If Gate 3 fails:

- the Studio must not make or recommend consequential decisions from unresolved sources;
- detailed evidence rules must not be finalised;
- research prompts must not imply an authority hierarchy that has not been approved;
- disputed source status must be recorded;
- outdated or superseded sources must be quarantined from current reliance;
- unresolved conflicts must be escalated to the accountable owner or relevant subject-matter authority; and
- the Studio remains in **Working Draft** or **Under Review** status for the affected function.

Where no defensible authority basis can be established for a proposed Studio function, that function must be removed, narrowed or separately governed.

## 3.17 Human approval point

The accountable owner, and where necessary an appropriate subject-matter authority, must approve the source hierarchy before the Studio relies on it operationally.

Human approval is mandatory where:

- two plausible controlling sources conflict;
- jurisdiction is uncertain;
- an internal policy appears inconsistent with external authority;
- applicability depends on professional interpretation;
- a source has uncertain approval or supersession status; or
- the proposed hierarchy materially changes the Studio's decision behaviour.

Any later material change to controlling authority, hierarchy or source-status rules requires reassessment of Gate 3.

## 3.18 GitHub control record

For Nexus BMG Studios, the Source Authority and Hierarchy Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- the approved hierarchy;
- source-class definitions;
- material changes in controlling authority;
- version and currency decisions;
- significant conflict resolutions;
- approval records; and
- links or references to authoritative source locations where appropriate.

Sensitive or restricted source material need not be duplicated into GitHub. The record may instead identify its approved secure location and status.

## 3.19 Brick 3 completion rule

Brick 3 is complete only when the Studio can answer three questions for any material claim or decision:

> **What source supports this?**
>
> **What authority does that source carry?**
>
> **What happens if a higher-authority source disagrees?**

If the Studio cannot answer all three, it is not yet ready to rely on the information.

---

## Planned build sequence

The Standard will be developed brick by brick. Each brick will contain, as appropriate:

- the governing principle;
- the mandatory build instruction;
- the required artefact or control record;
- the applicable gate;
- the evidence required to pass the gate;
- the failure response;
- the human approval point; and
- the GitHub record required to preserve provenance.

Planned bricks include:

1. What Is a Studio?
2. Studio Purpose, Intended Outcome and Authority
3. Authoritative Sources and Source Hierarchy
4. Scope, Boundaries and Prohibited Uses
5. Output Standard and Definition of Done
6. Gate System Design
7. Evidence Architecture and Provenance
8. Research Protocol
9. Workflow Architecture
10. Human Decision Rights and Escalation
11. Registers and Control Records
12. Prompting Architecture
13. Adversarial and Contradictory Review
14. Version and Change Control
15. Release Criteria
16. Testing and Failure Cases
17. Maintenance, Review and Retirement
18. Studio Build Record and Final Approval

---

## Governing principle

**AI assists. Humans decide. GitHub records.**
