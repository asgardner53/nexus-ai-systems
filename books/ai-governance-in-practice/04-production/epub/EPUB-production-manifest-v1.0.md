# AI Governance in Practice — EPUB Production Manifest v1.0

## Current RC1 record

This 21 November assembly record is historical. Its old cover-placement blocker and build IDs are superseded by the RC1 publication record. The approved cover is embedded in Run 22; RC1 technical validation and author acceptance are recorded.

See [RC1 publication preparation](../../05-release/publication-pack-RC1-2026-11-25.md) and [the current release gate](EPUB-v0.2-release-gate.md). Updated 25 November 2026.

## Historical record

**Status:** CONTROLLED ASSEMBLY RECORD — RELEASE HOLD  
**Date:** 21 November 2026  
**Production branch:** `ai-governance-epub-v0.2-review`

## 1. Authoritative source set

| Component | Controlled source | State |
|---|---|---|
| Manuscript | `02-manuscript/ai-governance-in-practice-unified-copyedit-v1.0.md` | LOCKED |
| Manuscript source map | `00-control/whole-book-unified-copyedit-v1.0-source-map.md` | CONTROLLED |
| References | `02-manuscript/references-v1.0-reconciled.md` | CONTROLLED |
| About the Author | `04-production/epub/about-the-author-approved-v1.0.md` | APPROVED |
| KDP/EPUB metadata | `04-production/epub/KDP-EPUB-metadata-sheet-v1.0.md` | CONTROLLED |
| Cover approval record | `04-production/epub/cover-approval-record-v0.2.md` | APPROVED PROOF RECORD |
| EPUB preparation script | `04-production/epub/scripts/prepare_epub_v02.py` | CONTROLLED |
| Build workflow | `.github/workflows/build-ai-governance-epub-v0.2.yml` | CONTROLLED |

## 2. Approved cover identity

Approved conversation proof:
- source filename: `a_refined_ebook_cover_with_an_electric_deep_blue_g.png`
- RGB PNG, 1024 × 1536 px, 2:3
- SHA-256: `6ebd965d4a5da48d16517c541f3a98b9b096cdc90eb4e2beda8475e982402cf0`
- author decision: APPROVED, 21 November 2026

**Assembly state:** SUPERSEDED BY APPROVED RECONSTRUCTED PRODUCTION COVER — see cover approval record.

No regenerated or visually substituted cover may be treated as the approved source. The binary attached to production must match the recorded SHA-256 or be separately re-approved after any production conversion.

## 3. Internal visuals

- Eight embedded diagrams are included in the controlled v0.2 production path.
- Existing CI evidence confirms eight image resources and eight non-empty alt descriptions.
- Visual and prose-fidelity controls remain as recorded in `EPUB-v0.2-release-gate.md`.

## 4. Existing EPUB build evidence

Validated build: `AI_Governance_in_Practice_v0.2_REVIEW.epub`

GitHub Actions run: `44860958523`  
Artifact ID: `14689414457`  
EPUBCheck: 5.2.1 — 0 fatals, 0 errors, 0 warnings, 0 infos  
Archive/navigation/image/alt-text/prose-fidelity checks: PASS  
Kindle Previewer: author-reported positive review; diagrams, chapter layout and navigation accepted.

This validated v0.2 is preserved. It must not be relabelled as a new v0.1.

## 5. Requested release-production assembly

The next build after cover attachment will be the first **cover-integrated controlled release candidate** derived from the validated v0.2 baseline. Version identifier to be assigned without overwriting v0.1 or v0.2 history.

Required inputs:
1. locked manuscript;
2. canonical references;
3. approved About the Author;
4. controlled metadata;
5. eight controlled internal visuals;
6. exact approved cover binary;
7. controlled CSS/build configuration.

## 6. Open release decisions

The following are deliberately unresolved and must remain exactly **PENDING ALEC DECISION** until separately decided:
- ISBN;
- rights territories;
- price(s);
- royalty option;
- DRM;
- KDP Select;
- publication/pre-order date;
- other distribution;
- final KDP keywords/categories where live platform verification is required.

AI-content classification, accessibility declaration and rights/permissions verification also remain open release gates.

## 7. Release status

**Assembly gate:** CONDITIONAL PASS  
**Blocker:** approved reconstructed cover binary must be placed at `04-production/epub/assets/AI_Governance_in_Practice_Kindle_Cover_v1.0.png` and verified against SHA-256 `95997bbfa293f22be8caef9ca6e45729eda96efe7701177f1dffc9976a31e9da` before the cover-integrated build.  
**Publication status:** HOLD — NOT AUTHORISED.

**AI assists. Alec decides. GitHub records.**


## 8. Approved reconstructed production cover

Author approval: **APPROVED — 21 November 2026**  
Controlled SHA-256: `95997bbfa293f22be8caef9ca6e45729eda96efe7701177f1dffc9976a31e9da`  
Repository target: `04-production/epub/assets/AI_Governance_in_Practice_Kindle_Cover_v1.0.png`

The missing historical proof is not the release asset. This newly approved image is now the authoritative production cover. Binary placement and checksum verification remain required before build.
