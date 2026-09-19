# NEX-GOV — Nexus Studio Evidence Integration Standard v1.0

## Purpose

Establish the Nexus Evidence Engine as the shared evidence-control layer across all Nexus BMG Studios, AIRBOK, VET/ASQA, publishing, governance, masterclasses, professional development and client work.

Do not duplicate evidence rules inside individual Studios. Each Studio defines the work product and domain-specific quality standard; the Nexus Evidence Engine determines whether evidence is required and controls how evidence is searched, verified, challenged, registered, reused and monitored.

Core principle: **AI assists. Humans decide. Institutions remain accountable.**

## Operating sequence

Apply this sequence to all substantive Studio work:

1. Classify the task and intended use.
2. Determine materiality: M1, M2 or M3.
3. Determine whether external evidence or reusable internal evidence is required.
4. Select the appropriate model/reasoning level and authorised tools/connectors.
5. Invoke the Nexus Evidence Engine when evidence is required.
6. Consume only claims supported to the level required for the task.
7. Produce the Studio-specific output.
8. Apply the relevant human decision gate.
9. Register/version controlled outputs where required.
10. Reuse and monitor evidence under the Evidence Engine controls.

## Mandatory invocation triggers

Invoke the Nexus Evidence Engine when a Studio task materially depends on any of the following:

- law, regulation, regulator guidance or standards;
- statistics, quotations, dates, timetables or named cases;
- academic research or practitioner evidence;
- current AI/product/model capabilities;
- public claims with meaningful reputational consequence;
- assessment design, validity or regulatory interpretation;
- controlled doctrine, governance or assurance conclusions;
- client advice or recommendations that rely on external factual claims;
- prior-art, contradiction, source validation or fact-checking;
- evidence intended for future reuse across multiple outputs.

Do not invoke the full M2/M3 workflow for trivial lookups that are genuinely M1.

## Materiality defaults by Studio

Use these defaults as routing presumptions, not automatic final classifications:

| Studio/domain | Default | Typical M3 trigger |
| --- | --- | --- |
| AIRBOK development | M3 | doctrine, law, standards, cases, controlled statistics |
| AIRBOK repository/governance | M3 | controlled architecture, doctrine status, governance or release controls |
| VET/ASQA course assurance | M3 | standards interpretation, assessment validity, compliance conclusions |
| VET assessment design/review | M2/M3 | unit requirements, evidence rules, assessment validity; assessor retains competency judgement |
| HBR / research-led publishing | M2 | high-consequence public claim, contested evidence, legal/regulatory assertion |
| LinkedIn thought leadership / newsletters | M2 | legal, regulatory, statistical or reputationally material public claims |
| Nexus BMG ebooks | M2 | controlled frameworks, high-consequence claims, legal/regulatory content |
| Masterclass Studio | M2 | legal/regulatory teaching content, high-consequence client material |
| PD Studio | M2 | professional currency claims, regulatory or standards interpretation |
| AI Edge | M2 | fast-moving product/model claims, workforce statistics, public assertions |
| Client advisory | M2/M3 | material recommendation, governance, compliance, workforce or regulatory decision |

When uncertain between levels, use the higher level.

## Studio interface contract

Each Studio should implement only the following interface logic:

> **Nexus Evidence Engine Interface** — When the task requires external evidence, source validation, regulatory interpretation, statistics, quotations, named cases, research support, current product/model claims or reusable evidence, classify the task M1/M2/M3 and invoke the Nexus Evidence Engine. Use the Engine's verified claims, limitations, contradiction findings and monitoring status as the evidence basis for the Studio output. Do not create a weaker parallel research process inside the Studio. Apply the Studio's own quality, editorial, assessment or governance rules after the evidence run. Preserve the relevant human decision gate.

## Evidence consumption rules

Studios may consume Evidence Engine outputs only as follows:

- **Verified fact:** may be stated as fact within the verified scope and currency.
- **Supported interpretation:** must remain framed as interpretation or synthesis.
- **Attributed claim:** must retain attribution.
- **Working hypothesis:** must not be silently promoted to fact.
- **Unresolved:** must remain visible or be excluded from definitive claims.

If a Studio materially changes the wording, scope, jurisdiction, population or causal strength of a verified claim, re-check the claim before release.

## Reuse controls

Before a Studio reuses registered evidence, the Evidence Engine must check:

1. whether the underlying source/rule changed;
2. whether the evidence remains current for the new use;
3. jurisdiction/population/context fit;
4. original verification status;
5. whether stronger primary evidence is now available.

A prior citation is not automatically reusable evidence.

## Monitoring controls

Use monitoring only for material claims likely to change, including:

- legislation, regulation and regulator guidance;
- AI models, products and capability statements;
- standards and frameworks;
- significant court/tribunal decisions;
- statistics used in controlled/public outputs;
- implementation timetables and institutional policies.

Record the trigger that should cause re-verification. Avoid monitoring stable background evidence without a decision-relevant reason.

## Human decision gates

The Evidence Engine and Studios may research, compare, draft, test and recommend, but must not independently present the following as finally approved:

- AIRBOK controlled doctrine;
- formal regulatory/compliance determinations;
- VET competency outcomes requiring assessor judgement;
- credentials or certification outcomes;
- governance approvals;
- high-materiality client decisions;
- publication claims designated for human editorial approval.

## Central register model

Maintain one logical **Nexus Evidence Register** rather than disconnected Studio registers. Use stable claim IDs and record intended uses so evidence can be traced across outputs.

Example namespaces:

- NEE-EUAI-* — EU AI Act
- NEE-NIST-* — NIST AI RMF and related material
- NEE-OECD-* — OECD sources
- NEE-ASQA-* — ASQA / RTO standards and guidance
- NEE-FWC-* — Fair Work Commission decisions
- NEE-AI-* — AI capability/adoption/workforce evidence

The namespace is organisational, not evidentiary. Every claim still requires source-level verification and currency control.

## Change impact rule

When monitored evidence changes, identify the dependent claims and controlled artefacts that may require review. Prioritise affected outputs rather than re-reviewing every Studio artefact indiscriminately.

## Release gate

Before releasing M2/M3 Studio work confirm:

- evidence requirements were classified;
- the Evidence Engine was invoked where required;
- material claims are traceable;
- contrary/limiting evidence was considered;
- current claims use current evidence;
- unsafe overstatement has been removed;
- reuse and monitoring status are visible where material;
- the applicable human decision gate is preserved.
