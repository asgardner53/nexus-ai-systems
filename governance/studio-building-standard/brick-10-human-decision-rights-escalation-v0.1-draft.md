# Brick 10 — Human Decision Rights and Escalation

## Document control

- **Parent standard:** Nexus Studio Building Standard — NEX-GOV-003
- **Brick:** 10
- **Version:** 0.1
- **Status:** Draft
- **Owner:** Alec Gardner
- **Repository:** `asgardner53/nexus-ai-systems`
- **Development branch:** `studio-building-standard`

## 10.1 Governing principle

A Studio must make human decision rights explicit.

AI may assist, analyse, compare, challenge, recommend and, where specifically authorised, execute defined actions. It must not silently absorb authority merely because the model is capable of producing a confident answer or because a workflow has become highly automated.

The governing principle is:

> **AI may exercise capability only within authority that has been deliberately granted. Accountability remains with the authorised human or institution.**

The Studio must therefore distinguish clearly between advice, recommendation, decision, approval and action.

## 10.2 Mandatory build instruction

Every Studio must create a **Human Decision Rights and Escalation Record** before operational release.

The record must define:

1. the decisions the Studio supports;
2. the decisions AI may make, if any;
3. the decisions reserved to humans;
4. the authorised human role for each reserved decision;
5. the level of human review required;
6. the information the human must receive to decide meaningfully;
7. escalation triggers;
8. escalation destinations;
9. escalation priority or urgency where relevant;
10. authority for exceptions and waivers;
11. authority for external release;
12. authority for connector write or action permissions;
13. authority for changes to Studio scope or decision rights;
14. delegation rules;
15. absence or unavailability rules;
16. conflict-of-interest rules where relevant;
17. override and dissent recording;
18. re-entry into the workflow after human decision; and
19. the decision record that must be retained.

## 10.3 Decision-rights rule

Every material decision must have a named authority level.

The minimum authority model is:

| Level | Meaning |
|---|---|
| **Assist** | AI provides information, structure, drafting or analysis; the human determines the outcome |
| **Recommend** | AI proposes a judgement or course of action; an authorised human accepts, rejects or modifies it |
| **Decide** | AI determines a defined outcome only where explicit authority, controls and testing permit it |
| **Act** | AI performs an external action only where explicit authority, permissions and control conditions permit it |

The Studio must not blur these levels.

## 10.4 Human-reserved decision rule

Human decision authority must be retained where required by law, regulation, professional responsibility, organisational delegation, ethical obligation, governance or consequence.

Human-reserved decisions may include, depending on the Studio:

- formal assessment or competency outcomes;
- employment decisions;
- legal or regulatory interpretations;
- financial commitments;
- publication approval;
- client commitments;
- safety-critical decisions;
- privacy or security exceptions;
- governance classifications;
- acceptance of material risk;
- connector write permissions;
- release of sensitive information;
- approval of waivers; and
- changes to Studio authority.

The Studio must identify these decisions explicitly rather than relying on an assumption that "a human is somewhere in the loop".

## 10.5 Meaningful human review rule

Human review must be substantive enough to support the decision being made.

A reviewer should receive, where relevant:

- the decision required;
- AI analysis or recommendation;
- supporting evidence;
- source authority;
- contradictory evidence;
- known limitations;
- unresolved uncertainty;
- applicable gate status;
- consequences of approval or rejection; and
- any relevant prior decisions.

A human clicking "approve" without sufficient context does not constitute meaningful oversight.

## 10.6 Rubber-stamp prohibition

The Studio must not design human approval as a ceremonial step.

Where the human decision is material, the workflow should require enough visibility and judgement that the reviewer can reasonably:

- understand the issue;
- challenge the AI recommendation;
- request more evidence;
- reject the proposed outcome;
- modify the outcome; and
- record the rationale where necessary.

If the human cannot realistically do these things, the control should not be represented as meaningful human oversight.

## 10.7 Decision-owner rule

Every consequential decision must have an identifiable decision owner.

The decision owner may be a named individual, role or governing body, but authority must be clear enough that the Studio knows where responsibility sits.

Where multiple roles participate, the Studio should distinguish:

- **preparer**;
- **reviewer**;
- **recommender**;
- **approver**;
- **executor**; and
- **accountable owner**.

One person may hold multiple roles, but the distinction must remain conceptually clear.

## 10.8 Delegation rule

Delegated authority must be explicit.

Where a human decision right may be delegated, the Studio must define:

- who may delegate;
- to whom;
- what decision rights are delegated;
- limits on the delegation;
- duration or expiry;
- whether further delegation is permitted; and
- how the delegation is recorded.

The Studio must not infer delegated authority from job title, seniority or system access alone.

## 10.9 Unavailable-decision-maker rule

The Studio must define what happens when the required decision-maker is unavailable.

Possible responses include:

- route to an approved delegate;
- hold in Awaiting Human Approval;
- escalate to a higher authority;
- suspend the action; or
- cancel the workflow step.

The Studio must not silently substitute AI for an unavailable human approver.

## 10.10 Escalation rule

Escalation is required where the Studio reaches the boundary of its authority, evidence or approved rules.

Escalation triggers may include:

- unresolved controlling-source conflict;
- material evidence insufficiency;
- ambiguous scope;
- uncertain jurisdiction;
- consequential decision outside AI authority;
- privacy or security concern;
- suspected fabrication or integrity failure;
- conflict of interest;
- repeated gate failure;
- attempted boundary override;
- exception not covered by the approved workflow;
- material user dispute;
- request for a prohibited action; or
- uncertainty that could materially alter the outcome.

The Studio must not treat escalation as failure. It is a controlled response to exceeded authority.

## 10.11 Escalation-destination rule

Every escalation trigger should have a defined destination where practical.

Destinations may include:

- Studio owner;
- subject-matter expert;
- regulator or authoritative body;
- privacy officer;
- security owner;
- legal adviser;
- qualified assessor;
- senior manager;
- governance committee;
- client authority; or
- another approved decision-maker.

"Escalate to a human" is too vague where the receiving authority matters.

## 10.12 Escalation-package rule

The escalation hand-off must contain enough information for the receiving authority to decide effectively.

The package should include, where relevant:

- reason for escalation;
- decision required;
- evidence reviewed;
- source conflict or uncertainty;
- applicable gate status;
- AI recommendation, if appropriate;
- options considered;
- consequences of delay;
- consequence of each decision path; and
- required return instruction.

## 10.13 Escalation-priority rule

Not all escalations are equally urgent.

Where material, Studios should classify escalation priority, for example:

- **Routine** — normal human review required;
- **Priority** — delay may materially affect quality, timeliness or operations;
- **Urgent** — delay may cause significant harm, breach or operational failure;
- **Critical** — immediate human intervention is required before further action.

Priority must not reduce evidence or authority requirements.

## 10.14 Override rule

An authorised human may sometimes override an AI recommendation or gate outcome.

Where override is permitted, the Studio must record:

- what was overridden;
- who held authority to override;
- rationale;
- evidence considered;
- risk accepted;
- any compensating control;
- downstream effect; and
- whether the decision triggers review of the Studio design.

An override must not be used to conceal a control failure.

## 10.15 Dissent rule

Where a material human decision differs from the AI recommendation, the Studio should preserve the divergence where it affects governance, learning or auditability.

The purpose is not to privilege AI over humans. It is to preserve the decision trail and enable later review of whether the Studio's recommendation logic remains sound.

Repeated patterns of human disagreement may indicate that the Studio requires redesign.

## 10.16 Conflict-of-interest rule

Where a decision-maker may have a material conflict of interest, the Studio should define an alternate decision path.

The Studio must not knowingly route a consequential approval to a person whose conflict undermines the integrity of the decision where governance requires independence.

## 10.17 Dual-control rule

Some high-consequence decisions may require more than one human decision-maker.

Where dual control is required, the Studio must define:

- which decisions require it;
- whether approvals must be independent;
- sequence of approval;
- disagreement handling;
- final accountable authority; and
- evidence retained.

Dual control should be used where consequence justifies it, not as decorative bureaucracy.

## 10.18 Decision-confidence rule

AI confidence must not substitute for human authority.

The Studio may communicate confidence, uncertainty or evidence strength to the reviewer, but a high-confidence AI recommendation does not eliminate a mandatory human decision right.

Likewise, a human decision does not transform weak evidence into strong evidence. The underlying evidence status must remain visible.

## 10.19 Escalation-loop rule

Escalation must have a controlled return path.

The decision-maker's response should determine:

- whether work may proceed;
- which stage resumes;
- which gates must be re-run;
- whether new evidence is required;
- whether the scope or authority record must change; and
- whether the decision creates a precedent or change-control issue.

The Studio must not lose escalation outcomes in unrecorded conversation.

## 10.20 No silent authority expansion rule

A human approval of one case does not automatically expand the Studio's standing authority for all future cases.

If a decision establishes a broader policy, delegation, new precedent or recurring permission, that change must be formally incorporated through change control.

One-off approval must not silently become a permanent Studio capability.

## 10.21 Decision-rights matrix rule

Every consequential Studio should maintain a decision-rights matrix.

The matrix should identify, for each material decision:

- decision description;
- AI authority level;
- human decision owner;
- required reviewer or approver;
- escalation destination;
- waiver authority;
- release authority; and
- required record.

The matrix may resemble RACI or delegation frameworks, but must focus specifically on decision authority rather than task participation alone.

## 10.22 Required artefact — Human Decision Rights and Escalation Record

Before Brick 10 can pass, every Studio must produce a controlled record containing at least:

- Studio name and identifier;
- decision inventory;
- AI authority level for each decision;
- human-reserved decisions;
- decision owners;
- reviewer and approver roles;
- delegation rules;
- absence/unavailability rules;
- escalation triggers;
- escalation destinations;
- escalation priorities where relevant;
- escalation-package requirements;
- override rules;
- dissent-recording rules;
- conflict-of-interest controls where relevant;
- dual-control requirements where relevant;
- re-entry rules after escalation;
- no-silent-authority-expansion rule;
- decision-rights matrix;
- accountable owner;
- version and status; and
- approval status.

## 10.23 Gate 10 — Human Authority and Escalation Gate

A Studio may progress beyond Brick 10 only when the following questions can be answered **Yes** with evidence:

- Are all consequential decisions identified?
- Is the AI authority level explicit for each decision?
- Are human-reserved decisions explicit?
- Is there a named or role-based decision owner?
- Is human review meaningful rather than ceremonial?
- Are delegation rules explicit where relevant?
- Is there a safe response when the required human is unavailable?
- Are escalation triggers defined?
- Are escalation destinations specific enough?
- Does the escalation package provide enough information for meaningful judgement?
- Are override rules controlled and recorded?
- Can human dissent from AI recommendations be preserved where material?
- Are conflicts of interest addressed where relevant?
- Is dual control defined where consequence requires it?
- Does escalation have a controlled return path?
- Is one-off human approval prevented from silently expanding permanent Studio authority?
- Is the decision-rights matrix complete?

If any material answer is **No**, the human authority architecture is incomplete.

## 10.24 Evidence required to pass

Gate 10 requires:

- the completed Human Decision Rights and Escalation Record;
- a decision-rights matrix;
- at least one normal human approval scenario;
- at least one escalation scenario;
- at least one unavailable-decision-maker scenario;
- at least one human override or disagreement scenario; and
- evidence that a one-off approval does not automatically alter standing Studio authority.

For consequential Studios, the relevant human authority must approve the decision-rights model itself.

## 10.25 Failure response

If Gate 10 fails:

- consequential decision-making must not be treated as operational;
- AI must remain at Assist or Recommend where authority is unclear;
- release or external action must remain blocked where required human authority is missing;
- vague escalation routes must be clarified;
- ceremonial human review must be redesigned;
- ambiguous delegation must be removed or formalised; and
- the Studio must be retested using real decision scenarios.

A Studio that cannot identify who remains accountable is not ready to exercise consequential capability.

## 10.26 Human approval point

The accountable owner must approve the Human Decision Rights and Escalation Record before operational release.

Where the Studio operates in a regulated, professional, assessment, employment, legal, financial, privacy-sensitive, safety-critical or other consequential context, the relevant authorised role or governing body must approve the decision-rights model.

Any material change to AI authority, human-reserved decisions, delegation, escalation routes, waiver authority or release authority requires reassessment of Brick 10 and affected earlier bricks.

## 10.27 GitHub control record

For Nexus BMG Studios, the Human Decision Rights and Escalation Record must be retained in the authoritative GitHub repository or another specifically approved controlled system.

The controlled record should preserve:

- decision-rights matrix;
- AI authority levels;
- human decision ownership;
- escalation routes;
- delegation rules;
- override rules;
- material changes in authority;
- approval records; and
- representative decision or escalation templates where appropriate.

## 10.28 Brick 10 completion rule

Brick 10 is complete only when the Studio can answer five questions for every consequential decision:

> **Who is allowed to recommend?**
>
> **Who is allowed to decide?**
>
> **Who is accountable?**
>
> **Where does the issue go when authority or evidence runs out?**
>
> **How is that decision preserved?**

If those answers are unclear, human control is not adequately designed.

---

## Brick 10 core rule

**Human oversight is not the presence of a human. It is the presence of clear human authority, meaningful judgement and retained accountability.**
