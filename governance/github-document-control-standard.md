# GitHub Document Control Standard

## Status

Approved operating rule

## Owner

Alec Gardner

## Effective date

26 July 2026

## Purpose

GitHub is the authoritative repository for all controlled Nexus BMG, AI Studio and AIRBOK documents. Chat conversations, AI memory and temporary working files support development but do not constitute the formal source of truth.

## Core rule

All controlled documents must be stored, versioned and maintained in an approved GitHub repository.

**AI assists. Humans decide. GitHub records.**

## Repository allocation

| Document category | Authoritative repository |
|---|---|
| Nexus AI governance standards, Studio control records, templates, registers and shared operating rules | `asgardner53/nexus-ai-systems` |
| AIRBOK manuscript, chapter files, doctrine register, terminology register, source records and publication controls | `asgardner53/airbok-foundational-edition` |
| Nexus Masterclass Studio documents and assets | `asgardner53/Nexus-BMG-masterclass-studio` |
| HR role automation documents and code | `asgardner53/hr-roles-automation` |
| Legacy or general Nexus material | `asgardner53/Nexus`, subject to later migration review |

## Document status controls

Each controlled document must state:

- title;
- version;
- status;
- owner;
- approval authority;
- effective date;
- next review date;
- repository path;
- change history where material.

Approved status labels are:

- Draft;
- Under Review;
- Approved;
- Superseded;
- Suspended;
- Retired.

A polished document must not be treated as approved unless its approval status is recorded.

## Version control

1. Material changes must be committed with a clear commit message.
2. The repository history forms part of the document audit trail.
3. Controlled files must not be overwritten without preserving version history through Git.
4. Major changes should use a branch and pull request where practical.
5. Approval decisions must be identifiable through the document, commit, pull request or associated control record.
6. Superseded documents must remain recoverable through repository history or a controlled archive folder.

## File formats

Markdown is the preferred authoritative format for governance, doctrine, instructions, registers and manuscript source files because it supports readable version comparison.

DOCX, PDF, PPTX and XLSX files may be stored where required for publication, distribution or operational use. Where practical, the editable source and the published output should both be retained.

## Folder convention

Recommended top-level folders include:

- `governance/`;
- `studio-control-records/`;
- `templates/`;
- `registers/`;
- `manuscript/`;
- `chapters/`;
- `research/`;
- `sources/`;
- `publication/`;
- `archive/`.

## Human approval

AI may draft, revise, format and prepare documents for GitHub storage. Alec Gardner or another authorised human retains responsibility for:

- approving controlled content;
- changing document status;
- approving doctrine;
- approving competency decisions;
- approving external publication;
- authorising material repository restructuring or deletion.

## Privacy and restricted information

Student assessment evidence, personal information and confidential client material must not be stored in a public repository.

Restricted material may only be placed in a private repository with approved access controls and a legitimate retention purpose. Where possible, control records should refer to the secure source location rather than duplicate sensitive evidence in GitHub.

The Assessment Review Studio governance documents may be stored in GitHub. Individual student submissions, videos and assessment records must remain in the authorised RTO systems unless a separate secure-storage approval explicitly permits otherwise.

## Chat and memory controls

ChatGPT conversations and memory may support continuity but must not be relied upon as the sole record for:

- approvals;
- manuscript status;
- controlled terminology;
- doctrine status;
- Studio permissions;
- assessment outcomes;
- regulatory interpretations;
- change history.

Any material decision developed in conversation must be transferred to the appropriate GitHub-controlled document.

## Review triggers

This standard must be reviewed when:

- a new repository is created;
- repository visibility changes;
- new categories of sensitive information are proposed for storage;
- automated write access is introduced;
- a material security or privacy incident occurs;
- Nexus document-control requirements change.

## Approval statement

GitHub is approved as the formal document-control environment for Nexus AI systems and AIRBOK, subject to repository allocation, privacy, access and human approval controls in this standard.
