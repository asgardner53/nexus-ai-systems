# Nexus AI Systems Repository Governance

## Repository status

This repository is currently **public**.

It contains governance standards, Studio control records, templates and registers for Nexus BMG AI systems. It must not contain confidential client information, student evidence, personal records, credentials, secret keys or restricted operational data.

## Governing principle

**AI assists. Humans decide. GitHub records.**

## Authoritative content

The following folders contain the controlled governance record:

- `governance/` — approved governance and document-control standards;
- `studio-control-records/` — approved Studio boundaries, permissions and human approval points;
- `templates/` — approved reusable control templates;
- `registers/` — Studio, document, connector, decision and incident registers.

## Repository allocation

| Content | Authoritative repository |
|---|---|
| Nexus-wide AI governance | `asgardner53/nexus-ai-systems` |
| AIRBOK manuscript, doctrine and source controls | `asgardner53/airbok-foundational-edition` — private |
| Nexus Masterclass source and delivery assets | `asgardner53/Nexus-BMG-masterclass-studio` — private |
| Student submissions, videos and assessment records | Authorised RTO systems only |
| Confidential client materials | Approved private repository or secure client system only |

## Public-repository restrictions

Do not commit:

- student names, submissions, videos or competency records;
- client-confidential documents or identifiable employee information;
- passwords, tokens, API keys, authentication codes or connection secrets;
- private email, calendar or contact data;
- unpublished commercial agreements;
- sensitive incident evidence;
- restricted personal or health information;
- proprietary manuscripts intended for controlled private development.

Governance records may refer to secure source locations but must not duplicate restricted evidence.

## Document status

A document is authoritative only when it is identified as Approved or Approved live register in `registers/document-register.md`.

Draft, prototype and working files must not be represented as approved.

## Change control

Material changes should:

1. preserve Git history;
2. use clear commit messages;
3. update the relevant register;
4. record material governance decisions;
5. retain human approval;
6. use a branch and pull request where practical.

## Human authority

Alec Gardner retains approval authority for Studio classifications, controlled documents, AIRBOK doctrine, assessment outcomes, external publication and material changes to decision rights or connector permissions.

## Review

Repository visibility, permissions and content classification must be reviewed at least every six months and whenever sensitive content, new connectors or automated writes are proposed.
