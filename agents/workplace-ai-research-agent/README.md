# Workplace AI Research Agent

Version: 0.1.0 · Status: Draft · Owner / approval authority: Alec Gardner.
Prepared: 7 October 2026. Effective date: not effective; development implementation; operational release pending.
Next review: before adapter integration or pilot activation.
Repository path: `agents/workplace-ai-research-agent/`.

Prepare an evidence-backed Friday workplace AI report for human review.
Includes configuration validation, public research adapters, a supervised host
search connection and a SQLite durable controller with an evidence-delivery queue.
The live Nexus Evidence Register host connection is verified; independent
deployment credentials and runtime wiring remain pending. No
autonomous deployment or Friday schedule is active.

## Local checks

From this directory, with Node.js 24 or later:

```sh
npm run check
node src/config.mjs config/pilot.example.json
```

No dependencies or credentials are needed for these checks.
The JSON Schema uses Draft 7; the bundled validator implements only the vocabulary
used by this schema and rejects unsupported schema keywords.

## Configuration

`schemas/config.schema.json` is the contract; `config/pilot.example.json` is its
safe starting profile. Unknown keys, elevated permissions, scheduling activation,
paid activation and excessive limits fail validation. Model and storage remain
unconfigured. Word/item ranges receive additional semantic checks.
This profile must be revised through review before activation.

## Runtime integration

Target runtime: eve. An eve 0.72.1 scaffold is included under `runtime/`, with its dependency lockfile.
Its dynamic model resolver deliberately throws before provider calls; optional default
tools and the built-in agent tool are disabled. Adapters exist; operational eve wiring and independent deployment remain pending.
Install/init eve in a separate temporary directory, inspect its shipped versioned docs,
then map these contracts into actual framework tools. The generated framework scaffold is not ready for deployment.
Run `npm ci` and `npm run typecheck` inside `runtime/` to check it.

Read `docs/durable-controller.md` for durability boundaries and the blocked
register connection, alongside the architecture, pilot tests and build record.
Operational reports, evidence, logs and secrets belong outside this public repository.

AI assists. Humans decide. GitHub records.
