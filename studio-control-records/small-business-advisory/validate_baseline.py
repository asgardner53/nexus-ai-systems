#!/usr/bin/env python3
"""SBA-VAL-001 v0.2, Under Review. Local governance checks only; no network/writes.
Owner/approval authority: Alec Gardner. Prepared 2026-10-11. Effective: pending.
Review by 2026-10-18. Controlled by register-control.md. Not payroll or CI assurance.
"""
from __future__ import annotations
import argparse
import csv
import hashlib
import json
import re
from pathlib import Path
from typing import Any

PREFIX = Path('studio-control-records/small-business-advisory')
OLD = '1925f435fc4a374d8a2f6f6bda338072f606b59d'
EXPECTED = {
    'README.md', 'forensic-evidence-baseline.md', 'forensic-review-protocol.md',
    'studio-control-record.md', 'register-control.md', 'remediation-report.md',
    'baseline-register.json', 'legacy-id-map.csv', 'review-register.csv',
    'approval-gates.json', 'validate_baseline.py', 'test_validator.py',
}
ORIGINALS = {
    'document-register.md': (8952, 'd813d270bf66ad7120907cd0dd9d1aa7a6e85c85'),
    'studio-register.md': (3184, '4004038ae60abafd21d17f5c10919df4105d2c6d'),
    'change-and-decision-register.md': (11099, '011145b5989fbb7978e1fbc55b2105ead50e33e5'),
}
ACTION_FIELDS = {
    'id','stream','claim_ids','evidence_ids','source_version','law_locator',
    'current_effective_date','historic_effective_date','contrary_evidence_ids',
    'limitation','risk','required_action','owner','due_date','due_basis','acceptance',
    'closure_evidence','reviewer','review_decision','decision_date','reviewed_commit',
    'reopen_if','status',
}

def git_blob(data: bytes) -> str:
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()

def validate(repo_root: Path, base_snapshot: Path | None = None) -> dict[str, Any]:
    root = repo_root.resolve()
    folder = root / PREFIX
    checks: list[dict[str, Any]] = []
    def check(name: str, passed: bool, detail: str = '') -> None:
        checks.append({'check': name, 'passed': bool(passed), 'detail': detail})
    def read_csv(name: str) -> tuple[list[str], list[dict[str, str]]]:
        with (folder / name).open(encoding='utf-8', newline='') as f:
            reader = csv.DictReader(f)
            rows = list(reader)
            fields = reader.fieldnames or []
        if any(None in row or any(value is None for value in row.values()) for row in rows):
            raise ValueError('Malformed CSV row in ' + name)
        return fields, rows
    try:
        found = {p.name for p in folder.iterdir() if p.is_file()}
        check('scope.exact_file_set', found == EXPECTED, 'Only 12 specified governance files')
        check('scope.no_symlinks', not any(p.is_symlink() for p in folder.rglob('*')))
        check('scope.no_subdirectories', not any(p.is_dir() for p in folder.iterdir()))
        data = json.loads((folder / 'baseline-register.json').read_text())
        gates = json.loads((folder / 'approval-gates.json').read_text())
        af, actions = read_csv('review-register.csv')
        mf, mapping = read_csv('legacy-id-map.csv')
        check('parse.json_csv', True)
        evidence, claims = data['evidence'], data['claims']
        check('counts.v02', (len(evidence),len(claims),len(actions),len(mapping)) == (17,13,16,17))
        ids = {}
        for label, rows, prefix in [('evidence',evidence,'EVD'),('claims',claims,'CLM'),('actions',actions,'ACT')]:
            values = [r['id'] for r in rows]
            ids[label] = set(values)
            check('ids.' + label, len(values) == len(set(values)) and all(re.fullmatch('SBA-'+prefix+r'-\d{3}',v) for v in values))
        check('links.claim_evidence', all(c['evidence_ids'] and set(c['evidence_ids']) <= ids['evidence'] for c in claims))
        check('links.action_claim', all(a['claim_ids'] and set(a['claim_ids'].split(';')) <= ids['claims'] for a in actions))
        check('links.action_evidence', all(a['evidence_ids'] and set(a['evidence_ids'].split(';')) <= ids['evidence'] for a in actions))
        check('links.all_claims_have_actions', set(';'.join(a['claim_ids'] for a in actions).split(';')) == ids['claims'])
        check('links.contrary_evidence', all(not a['contrary_evidence_ids'] or set(a['contrary_evidence_ids'].split(';')) <= ids['evidence'] for a in actions))
        check('actions.schema', set(af) == ACTION_FIELDS and len(af) == len(set(af)))
        check('actions.required_values', all(all(a[k] for k in ('owner','due_date','due_basis','acceptance','limitation','reopen_if')) for a in actions))
        check('actions.no_false_closure', all(a['review_decision']=='Pending' and not any(a[k] for k in ('reviewer','decision_date','reviewed_commit')) and a['status']!='Closed' for a in actions))
        check('actions.governance_coverage', {a['stream'] for a in actions if a['stream'].startswith('GOV-')} == {'GOV-SBA-'+f'{i:03d}' for i in range(1,9)})
        check('actions.settings_open', next(a for a in actions if a['stream']=='GOV-SBA-007')['status']=='Open - owner decision required')
        check('actions.ato_separate', any(a['stream']=='ATO obligations' for a in actions) and any(a['stream']=='Professional boundaries' for a in actions))
        expected_map = {('forensic-evidence-baseline.md',f'SBA-{i:03d}',f'SBA-CLM-{i:03d}') for i in range(1,11)} | {('review-register.csv',f'SBA-{i:03d}',f'SBA-ACT-{i:03d}') for i in range(1,8)}
        check('legacy.complete_qualified_map', len(mapping)==17 and {(m['legacy_file'],m['legacy_id'],m['new_id']) for m in mapping} == expected_map and all(m['legacy_commit']==OLD for m in mapping))
        check('sources.pinned_git', all(e['source_ref']==OLD and re.fullmatch(r'[a-f0-9]{40}',e['git_blob_sha']) and '/blob/'+OLD+'/' in e['source_locator'] for e in evidence[:11]))
        check('sources.acquisition_limits', data['acquisition']['raw_originals_acquired'] is False and data['acquisition']['sha256_computed'] is False and bool(data['acquisition']['timing_limit']))
        check('sources.unacquired_leads', all(e['status']=='Not acquired' and not e['acquisition_recorded_at_utc'] for e in evidence[13:]))
        check('claims.reported_not_verified', all(c['verification_status']=='Reported only' for c in claims[2:6]))
        check('claims.substance_unresolved', all(c['verification_status']=='Unresolved' for c in claims[6:]))
        check('claims.required_limits', all(c['safe_wording'] and c['limitation'] and c['claim_type'] and c['intended_use'] for c in claims))
        for name, obj in [('evidence',data),('gates',gates)]:
            m=obj['metadata']
            check('metadata.'+name, m['status']=='Under Review' and m['version']=='0.2' and m['owner']=='Alec Gardner' and m['effective_date']=='Not effective - approval pending' and m['independent_reviewer']=='Not appointed')
        check('gates.four_distinct', len(gates['gates'])==4 and {g['id'] for g in gates['gates']} == {'SBA-GATE-'+x for x in 'ABCD'})
        check('gates.pending_not_signed', all(g['decision']=='Pending' and g['independent_reviewer']=='Not appointed' and not any(g[k] for k in ('decision_maker','decision_at','reviewed_commit','evidence_refs','reviewer_role','competence_or_registration','conflict_declaration')) for g in gates['gates']))
        check('gates.acceptance_fields', all(g['required_evidence'] and g['invalidation'] and 'scope' in g and 'conditions' in g for g in gates['gates']))
        texts={name:(folder/name).read_text(encoding='utf-8') for name in EXPECTED}
        required=['- Document ID:','- Version: 0.2','- Status: Under Review','- Owner: Alec Gardner','- Approval authority: Alec Gardner','- Effective date: Not effective - approval pending','- Next review:','- Repository path:','- Independent reviewer: Not appointed']
        check('metadata.markdown', all(all(s in t for s in required) for n,t in texts.items() if n.endswith('.md')))
        check('control.24_sections', len(re.findall(r'^## \d+\.',texts['studio-control-record.md'],re.M))==24)
        check('control.no_client_use', 'NOT APPROVED FOR CLIENT USE' in texts['README.md'] and 'NOT APPROVED FOR CLIENT USE' in texts['studio-control-record.md'])
        links=re.findall(r'\]\(([^)]+)\)',texts['README.md'])
        check('links.readme_local', all((folder/link).is_file() and (folder/link).resolve().is_relative_to(folder.resolve()) for link in links if not link.startswith('https://')))
        check('csv.no_formula_inputs', all(not value.lstrip().startswith(('=','+','-','@')) for row in actions+mapping for value in row.values()))
        pattern = re.compile(r'gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----|[?&](?:token|sig|X-Amz-Signature)=')
        check('privacy.limited_pattern_scan', not any(pattern.search(t) for n,t in texts.items() if not n.endswith('.py')), 'Heuristic only; human privacy review required')
        for name,(size,sha) in ORIGINALS.items():
            content=(root/'registers'/name).read_bytes()
            check('preserve.'+name, git_blob(content[:size])==sha)
            tail=content[size:].decode()
            check('central.'+name, 'Under Review' in tail and 'Small Business Advisory Studio' in tail and 'Not effective - approval pending' in tail and 'PR #5' in tail)
            if base_snapshot is not None:
                check('snapshot.'+name, (base_snapshot/'registers'/name).read_bytes()==content[:size])
        d=(root/'registers/document-register.md').read_text()
        check('central.document_ids', all(x in d for x in ('SBA-DOC-001','SBA-DOC-002','SBA-DOC-003','SBA-SCR-001','SBA-REG-001','SBA-GAT-001','SBA-REV-002')))
    except (OSError, ValueError, KeyError, TypeError, StopIteration) as exc:
        check('input_or_schema_error', False, str(exc))
    return {'profile':'SBA-VAL-001 v0.2 governance-only','ok':bool(checks) and all(c['passed'] for c in checks),'checks':checks,'limits':'Local structural/heuristic checks only; not GitHub CI, Excel, legal, privacy certification or independent professional assurance.'}

def main() -> int:
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repo-root',type=Path,required=True)
    parser.add_argument('--base-snapshot',type=Path)
    args=parser.parse_args()
    result=validate(args.repo_root,args.base_snapshot)
    print(json.dumps(result,indent=2))
    return 0 if result['ok'] else 1

if __name__=='__main__':
    raise SystemExit(main())
