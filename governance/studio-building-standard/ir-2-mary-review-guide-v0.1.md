# NEX-GOV-003 — Mary’s IR-2 Review Guide

**Reviewer:** Mary Schloetzer (`marysnexus`)  
**Review level:** IR-2 — Independent Human or Functional Review  
**Pull request:** PR #1 — NEX-GOV-003 v1.0-RC1 — Independent IR-2 Review  
**Primary review target:** `governance/nex-gov-003-v1.0-rc1-normative-master.md`

## Purpose of this guide

Mary, you do not need to read all of the development files in this pull request from beginning to end. Those files preserve the evidence trail showing how the Standard was built. Your main task is to independently challenge the proposed Standard itself.

Work through the six short passes below. Stop whenever something is unclear and record a question or concern. You are not expected to solve the problem you identify.

Use four simple responses as you review:

- **OK** — this makes sense and appears sufficiently controlled.
- **Concern** — something may need clarification or strengthening.
- **Major Concern** — you believe this could materially weaken the Standard or create false confidence.
- **Question** — you need more information before forming a view.

Your job is not to agree with Alec or with the AI. Your job is to find weaknesses that the builders may have missed.

---

## Pass 1 — Does the whole idea make sense?

Read the opening and architecture sections of the normative master.

Ask:

1. Does it make sense to use one common Standard to govern how Nexus AI Studios are built?
2. Is the difference between a Studio, a Brick, a Build Gate and an Operational Gate understandable?
3. Does anything feel unnecessarily complicated?
4. Is there an obvious problem or risk the architecture appears to have missed?

**Your response:** OK / Concern / Major Concern / Question, plus any comments.

---

## Pass 2 — Can the gates actually stop bad work?

Focus on the Build Gate and Operational Gate sections.

Ask:

1. Could someone simply work around a gate when under time or commercial pressure?
2. Are the non-waivable gates protecting the right things?
3. Could Conditional Approval be used to push through something that should really be stopped?
4. Could someone mark an inconvenient control Not Applicable without enough challenge?

**Your response:** OK / Concern / Major Concern / Question, plus any comments.

---

## Pass 3 — Are humans genuinely in control?

Focus on authority, human decision rights, escalation, prompts, tools and connectors.

Ask:

1. Is it clear what AI may assist with, recommend, decide or act on?
2. Are important decisions genuinely reserved for authorised humans?
3. Could a prompt, automation, connector or AI action quietly expand its own authority?
4. Is escalation clear when the AI is uncertain or the evidence conflicts?

**Your response:** OK / Concern / Major Concern / Question, plus any comments.

---

## Pass 4 — Can we trust the evidence and still protect people?

Focus on evidence, provenance, research, privacy, stakeholder impact, explainability and contestability.

Ask:

1. Could a material conclusion be traced back to the evidence supporting it?
2. Does the Standard require contradictory evidence to be taken seriously?
3. Does evidence retention create unnecessary privacy or confidentiality exposure?
4. If an AI-supported decision materially affects a person, is there a genuine human path to question or challenge it?
5. Can Nexus explain an important AI-supported decision without pretending to reveal hidden AI reasoning?

**Your response:** OK / Concern / Major Concern / Question, plus any comments.

---

## Pass 5 — What happens when things go wrong?

Focus on adversarial review, dependencies, testing, incidents, release and lifecycle controls.

Ask:

1. Does the Standard expect Studios to be tested under failure and hostile conditions, not just normal conditions?
2. If an important dependency changes or fails, can an old approval be reconsidered or suspended?
3. Can release still be blocked even when the work itself looks finished?
4. Does the Standard prevent an old or abandoned Studio continuing indefinitely without review?

**Your response:** OK / Concern / Major Concern / Question, plus any comments.

---

## Pass 6 — Final independent challenge

Now step away from the detail and ask one final question:

> **If Nexus BMG is going to rely on this Standard to govern how its AI Studios are built, what could Alec and the AI have missed?**

Please identify anything that could create false confidence, unnecessary bureaucracy, unclear accountability, weak protection, poor usability or a way around the intended controls.

Then choose one overall disposition:

- **Recommend Approval**
- **Recommend Conditional Approval**
- **Return for Remediation**
- **Do Not Recommend Approval**

Add a short explanation for your choice.

---

## How to record your review in GitHub

You can comment directly on particular lines where that is useful. You can also record broader concerns in the Pull Request conversation.

When you have finished all six passes, submit your overall review on PR #1. Your recommendation is independent assurance evidence; it does **not** itself approve the Standard. Final approval remains a separate governance decision.

## If you get lost

Return to this guide. You only need to know which pass you are working on and which question you are answering. You do not need to understand GitHub’s technical features or review computer code.

**The aim is not to finish quickly. The aim is to notice what the builders did not notice.**
