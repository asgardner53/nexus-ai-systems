# Remediation 01 — Gate Taxonomy and BG-01

## Document control

- **Parent standard:** NEX-GOV-003 — Nexus Studio Building Standard
- **Remediation source:** Whole-Standard Forensic Integrity Review v0.1
- **Findings addressed:** 1, 2 and 3
- **Version:** 0.1
- **Status:** Draft remediation
- **Repository:** `asgardner53/nexus-ai-systems`
- **Branch:** `studio-building-standard`

## 1. Purpose

This remediation removes ambiguity between the gates used to **build and approve a Studio** and the gates that operate **inside an approved Studio**.

The Standard will use two distinct gate classes.

## 2. Gate taxonomy

### 2.1 Build Gates — BG

A **Build Gate** determines whether a defined part of Studio construction under NEX-GOV-003 has been completed to the required standard.

Build Gates use the identifier format:

**BG-01 to BG-18**

A Build Gate belongs to the Studio Building Standard itself. It governs progression through construction, testing and approval of the Studio.

Examples:

- **BG-01 — Studio Eligibility and Definition Gate**
- **BG-02 — Purpose and Authority Gate**
- **BG-03 — Source Authority Gate**
- **BG-06 — Gate Architecture Gate**
- **BG-15 — Release Readiness Design Gate**
- **BG-18 — Final Studio Approval Gate**

Passing a Build Gate means the corresponding Studio-design domain has been sufficiently designed and evidenced to permit construction to continue. It does not mean any operational work item inside the future Studio has passed an operational gate.

### 2.2 Operational Gates — OG

An **Operational Gate** controls work moving through an approved Studio after, or during approved testing prior to, operational use.

Operational Gates are designed under Brick 6 and use the identifier format:

**OG-[STUDIO-ID]-[NN]**

Examples:

- `OG-HBR-01 — Originality Gate`
- `OG-ASQA-03 — Evidence Coverage Gate`
- `OG-PD-04 — Release Readiness Gate`

Operational Gate names and numbering are Studio-specific. They are not required to mirror BG-01 to BG-18.

### 2.3 Separation rule

Build Gates and Operational Gates must never be treated as interchangeable.

The Standard must preserve the following distinction:

> **Bricks define what must be built. Build Gates prove the bricks. Operational Gates control the work performed by the finished Studio.**

A Build Gate may assess whether a Studio has designed an Operational Gate correctly. It does not itself perform the operational decision that the Operational Gate will later make.

## 3. BG-01 — Studio Eligibility and Definition Gate

### 3.1 Purpose

BG-01 determines whether the proposed construct should proceed as a Studio under NEX-GOV-003.

It prevents unnecessary Studio construction where the need can be met safely and sufficiently by a simpler prompt, template, ordinary workflow, checklist or existing approved Studio.

### 3.2 Evidence required

Before BG-01 may pass, the builder must provide a **Studio Concept Record** containing at least:

- proposed Studio working name;
- problem or recurring need;
- intended users;
- intended class of outcome;
- reason a controlled Studio is preferable to a simple prompt or ordinary workflow;
- known consequence or reliance considerations;
- existing Studio overlap check;
- accountable build owner;
- proposed authoritative repository or controlled system; and
- confirmation that the build will proceed through NEX-GOV-003.

### 3.3 BG-01 pass criteria

BG-01 may be marked **Pass** only when all material questions can be answered Yes with evidence:

- Is there a sufficiently clear recurring problem, decision burden, production need or assurance need?
- Would a controlled Studio add meaningful value beyond a simple prompt, template or ordinary procedure?
- Has duplication with an existing approved Studio been considered?
- Are intended users or user roles identifiable at a provisional level?
- Is the intended outcome sufficiently clear to justify structured design?
- Is there an identifiable accountable build owner?
- Is there a controlled location for the build record?
- Has the builder accepted that the Studio will be constructed through NEX-GOV-003 rather than by ad hoc prompting?

### 3.4 BG-01 failure response

If BG-01 fails, the default outcome is one of:

- **Do not build a Studio**;
- use a simpler controlled prompt, template or workflow;
- use or extend an existing approved Studio through Brick 14 change control; or
- return the concept for clarification.

Failure at BG-01 is a valid governance outcome.

### 3.5 Human approval point

The accountable build owner must approve progression beyond BG-01.

Approval authorises Studio construction. It does not approve the Studio for operational use.

## 4. Build Gate map

The Studio Building Standard will use the following build-gate identifiers:

| Brick | Build Gate |
|---|---|
| Brick 1 | **BG-01 — Studio Eligibility and Definition Gate** |
| Brick 2 | **BG-02 — Purpose and Authority Gate** |
| Brick 3 | **BG-03 — Source Authority Gate** |
| Brick 4 | **BG-04 — Scope and Boundary Gate** |
| Brick 5 | **BG-05 — Output Standard Gate** |
| Brick 6 | **BG-06 — Gate Architecture Gate** |
| Brick 7 | **BG-07 — Evidence Integrity and Provenance Gate** |
| Brick 8 | **BG-08 — Research Sufficiency Gate** |
| Brick 9 | **BG-09 — Workflow Integrity Gate** |
| Brick 10 | **BG-10 — Human Authority and Escalation Gate** |
| Brick 11 | **BG-11 — Record Integrity Gate** |
| Brick 12 | **BG-12 — Prompt Architecture Gate** |
| Brick 13 | **BG-13 — Adversarial Resilience Gate** |
| Brick 14 | **BG-14 — Change Integrity Gate** |
| Brick 15 | **BG-15 — Release Readiness Design Gate** |
| Brick 16 | **BG-16 — Operational Resilience Gate** |
| Brick 17 | **BG-17 — Lifecycle Integrity Gate** |
| Brick 18 | **BG-18 — Final Studio Approval Gate** |

## 5. Bootstrap conformance rule

Bricks 2–5 were conceptually created before Brick 6 defines the formal gate-design standard. The final Standard must therefore apply the following rule:

> **BG-02 to BG-05 are provisional until BG-06 has passed. Once Brick 6 is complete, BG-01 to BG-05 must undergo Gate Architecture Conformance Review against Brick 6 before their status becomes final for the build.**

The conformance review must verify for each earlier Build Gate:

- clear gate purpose;
- risk or failure mode controlled;
- prerequisites;
- evidence-to-pass;
- pass criteria;
- fail criteria;
- decision authority;
- failure consequence;
- backward movement;
- re-entry rules;
- escalation conditions;
- waiver status where applicable; and
- gate decision record.

Any earlier gate that does not conform must be revised and re-assessed.

## 6. Brick 6 clarification

Brick 6 must be interpreted and, in final assembly, edited to state explicitly:

> **Brick 6 is the meta-standard for designing Operational Gates and for validating the architecture of all Build Gates.**

Its two functions are therefore:

1. define how every Operational Gate in a Studio must be designed; and
2. provide the conformance standard against which BG-01 to BG-18 are tested.

## 7. Brick 18 clarification

Brick 18 must maintain two separate gate views where applicable:

### Build Gate Register

The complete BG-01 to BG-18 construction and approval record.

### Operational Gate Inventory

The list of Studio-specific Operational Gates designed under Brick 6, with evidence that their architecture and testing have passed the relevant Build Gates.

BG-18 does not require every Operational Gate to share the Build Gate numbering scheme.

## 8. Naming rule

In all final NEX-GOV-003 documentation:

- the phrase **Build Gate** must be used when referring to BG-01 to BG-18;
- the phrase **Operational Gate** must be used when referring to gates inside a Studio;
- the unqualified word **gate** may be used only where the class is already unambiguous from context.

## 9. Remediation acceptance criteria

Forensic Findings 1, 2 and 3 may be marked remediated only when:

- BG-01 exists;
- BG-01 to BG-18 are consistently identified;
- Brick 6 explicitly governs Operational Gate design and Build Gate conformance;
- BG-01 to BG-05 undergo conformance review after Brick 6;
- Brick 18 separates the Build Gate Register from the Operational Gate Inventory; and
- the final master Standard uses the taxonomy consistently.

## Remediation status

**CONTROL DESIGN COMPLETE — IMPLEMENTATION INTO MASTER STANDARD PENDING FINAL ASSEMBLY**

## Core rule

> **Bricks build the Studio. Build Gates prove the bricks. Operational Gates control the Studio's work.**
