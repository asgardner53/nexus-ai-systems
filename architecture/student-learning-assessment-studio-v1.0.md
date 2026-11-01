# Student Learning & Assessment Studio v1.0

Status: Approved architecture
Owner: Alec Gardner
Repository: Nexus AI Systems
Date: 2 November 2026

## Purpose

Create one reusable learner-support system across any unit, qualification or course.

The Studio progressively transforms unit resources into:

- a cumulative plain-English student knowledge base;
- lecture and resource summaries;
- a Five Key Takeaways Bank;
- a whole-unit integration map;
- an assessment-readiness map once the formal Assessment Kit is available;
- an assessment evidence register; and
- a final forensic submission verification.

## Governing sequence

**Learn → Integrate → Map → Apply → Verify**

Core control:

> **Teach first. Map second. Assess third. Verify evidence last.**

The Studio must not assume that the formal Assessment Kit exists at the beginning of the unit.

## Stage 1 — Learn

Upload and analyse unit resources first.

For each lecture, reading, slide deck, video transcript, activity or linked resource:

1. identify what the material is teaching;
2. explain important concepts, terminology, models and frameworks in plain English;
3. retain technically important distinctions;
4. identify examples and practical applications;
5. record important sources and links;
6. distinguish course material from supplementary research;
7. connect the material to prior learning; and
8. add it to the cumulative unit knowledge base.

Treat supplied course material as the primary source of truth.

Do not silently fill teaching gaps with external knowledge.

## Stage 2 — Integrate

Maintain a cumulative whole-unit knowledge system rather than disconnected lecture summaries.

For every completed lecture or substantial resource set:

- create a learner-facing summary;
- update the cumulative knowledge base;
- update the whole-unit integration map; and
- add exactly five retained takeaways to the Five Key Takeaways Bank.

The Five Key Takeaways Bank becomes the rapid whole-unit revision resource.

## Provisional assessment signposts

If templates, activity sheets or partial assessment documents appear before the formal Assessment Kit, record any visible minimums as **provisional assessment signposts**.

Examples include:

- minimum numbers of examples;
- stakeholders;
- word ranges;
- consultation requirements;
- screenshots;
- videos;
- emails;
- approvals;
- reports; and
- presentations.

Do not treat provisional signposts as final requirements.

## Stage 3 — Map

When the formal Assessment Kit arrives, build the full **assessment spine**.

Extract:

- every question and task identifier;
- exact instructional verbs;
- minimum counts;
- word requirements;
- stakeholder requirements;
- consultation requirements;
- practical tasks;
- required documents;
- screenshots;
- videos;
- presentations;
- emails;
- approvals;
- observations;
- platform requirements; and
- submission evidence.

Then map each assessment item to the cumulative knowledge base.

Use the following coverage statuses:

- **Covered**
- **Partially covered**
- **Not covered**

Never force-fit learning to a criterion.

## Stage 4 — Apply

Use the accumulated knowledge base to support the learner through each assessment item.

The Studio may:

- explain the question;
- unpack the instructional verb;
- identify relevant learning and sources;
- scaffold the response;
- help structure an answer;
- explain practical tasks;
- review drafts;
- identify missing requirements; and
- help construct and organise required evidence.

Support understanding and application rather than bypassing learning.

For practical tasks, use this bridge where appropriate:

1. What is the goal or problem?
2. What information must be observed, collected or received?
3. What decisions, analysis or planning are required?
4. What tools, systems, stakeholders or actions are involved?
5. Where must human review, approval, judgement or accountability remain?

## Stage 5 — Verify

Before final submission, conduct forensic evidence reconciliation.

Check every Assessment Kit requirement against:

1. the learner's response;
2. the required evidence;
3. the evidence register; and
4. the actual files intended for submission.

Verify that:

- every question is answered;
- every instructional verb is satisfied;
- every minimum count is met;
- word requirements are addressed;
- required stakeholders are present;
- consultation and approvals are evidenced;
- required emails, screenshots, videos, presentations and reports exist;
- filenames can be traced to requirements;
- practical evidence supports written claims;
- referenced appendices exist;
- contradictions are resolved; and
- no required evidence remains outside the submission package.

Readiness classifications:

- **Ready for submission**
- **Ready subject to identified corrections**
- **Not yet ready**

## Generic folder structure

```text
Student-Learning-Assessment-Studio/
|
|-- 01-unit-source-material/
|-- 02-student-knowledge-base/
|-- 03-lecture-and-resource-summaries/
|-- 04-five-key-takeaways-bank/
|-- 05-assessment-mapping/
|-- 06-evidence-register/
|-- 07-working-drafts/
`-- 08-final-submission/
```

Each unit receives its own controlled subfolder or equivalent workspace, for example:

```text
NAT11423007/
NAT11423008/
NAT11423006/
BSBHRM527/
BSBHRM525/
```

## Source discipline

Always distinguish:

- **Course material**
- **Supplementary research**
- **Studio interpretation**

Course materials remain authoritative for what the unit teaches and requires.

## Repository boundary

This public repository stores only generic Studio architecture, governance and reusable workflow logic.

Do **not** store student submissions, assessment recordings, personal information, restricted RTO records, confidential learner evidence or unit submission packages in this public repository.

Those artefacts must remain in appropriately controlled private systems.

## Governing control

**Learn → Integrate → Map → Apply → Verify**

> **Teach first. Map second. Assess third. Verify evidence last.**
