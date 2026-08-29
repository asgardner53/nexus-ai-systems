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
