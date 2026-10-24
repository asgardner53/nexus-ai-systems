#!/usr/bin/env python3
"""SBA-VAL-002 v0.2, Under Review; mutation tests, not independent assurance.
Owner: Alec Gardner. Effective: pending. Review by 2026-10-18.
Controlled by register-control.md. No network, credentials or repository writes.
"""
import csv
import io
import json
import shutil
import tempfile
import unittest
from pathlib import Path
from validate_baseline import validate, PREFIX

class ValidatorTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.root=Path(self.tmp.name)/'candidate'
        original=Path(__file__).resolve().parents[2]
        shutil.copytree(original/PREFIX,self.root/PREFIX,ignore=shutil.ignore_patterns('__pycache__','*.pyc'))
        (self.root/'registers').mkdir()
        for name in ('document-register.md','studio-register.md','change-and-decision-register.md'):
            shutil.copy2(original/'registers'/name,self.root/'registers'/name)
        self.folder=self.root/PREFIX
    def tearDown(self):
        self.tmp.cleanup()
    def change_json(self,fn,mutate):
        p=self.folder/fn; obj=json.loads(p.read_text()); mutate(obj); p.write_text(json.dumps(obj))
    def change_csv(self,fn,mutate):
        p=self.folder/fn
        with p.open(newline='') as f:
            r=csv.DictReader(f); fields=r.fieldnames; rows=list(r)
        fields,rows=mutate(fields,rows)
        with p.open('w',newline='') as f:
            w=csv.DictWriter(f,fieldnames=fields); w.writeheader(); w.writerows(rows)
    def rejected(self,name):
        result=validate(self.root)
        self.assertFalse(result['ok'])
        self.assertTrue(any(c['check']==name and not c['passed'] for c in result['checks']),result)
    def test_01_clean_baseline(self):
        self.assertTrue(validate(self.root)['ok'])
    def test_02_duplicate_evidence_id(self):
        self.change_json('baseline-register.json',lambda x:x['evidence'][1].update(id=x['evidence'][0]['id']))
        self.rejected('ids.evidence')
    def test_03_dangling_claim_source(self):
        self.change_json('baseline-register.json',lambda x:x['claims'][0].update(evidence_ids=['SBA-EVD-999']))
        self.rejected('links.claim_evidence')
    def test_04_duplicate_action_id(self):
        def mutate(fields,rows): rows[1]['id']=rows[0]['id']; return fields,rows
        self.change_csv('review-register.csv',mutate);self.rejected('ids.actions')
    def test_05_missing_legacy_mapping(self):
        self.change_csv('legacy-id-map.csv',lambda f,r:(f,r[:-1]));self.rejected('legacy.complete_qualified_map')
    def test_06_false_gate_approval(self):
        self.change_json('approval-gates.json',lambda x:x['gates'][0].update(decision='Approved'))
        self.rejected('gates.pending_not_signed')
    def test_07_unpinned_source(self):
        self.change_json('baseline-register.json',lambda x:x['evidence'][0].update(source_ref='main'))
        self.rejected('sources.pinned_git')
    def test_08_existing_register_modified(self):
        p=self.root/'registers/studio-register.md';p.write_text(p.read_text().replace('Nexus AI Studio Register','Changed Register',1))
        self.rejected('preserve.studio-register.md')
    def test_09_missing_status_metadata(self):
        p=self.folder/'README.md';p.write_text(p.read_text().replace('- Status: Under Review','- Status: Approved',1))
        self.rejected('metadata.markdown')
    def test_10_csv_formula(self):
        def mutate(f,r): r[0]['owner']='=1+1';return f,r
        self.change_csv('review-register.csv',mutate);self.rejected('csv.no_formula_inputs')
    def test_11_unapproved_binary(self):
        (self.folder/'client.xlsx').write_bytes(b'PK synthetic test');self.rejected('scope.exact_file_set')
    def test_12_signed_link(self):
        p=self.folder/'README.md';p.write_text(p.read_text()+'\nhttps://example.invalid/evidence?'+ 'token='+'synthetic\n')
        self.rejected('privacy.limited_pattern_scan')
    def test_13_invalid_json(self):
        (self.folder/'approval-gates.json').write_text('{');self.rejected('input_or_schema_error')
    def test_14_dangling_action_claim(self):
        def mutate(f,r): r[0]['claim_ids']='SBA-CLM-999';return f,r
        self.change_csv('review-register.csv',mutate);self.rejected('links.action_claim')
    def test_15_settings_falsely_closed(self):
        def mutate(f,r): next(a for a in r if a['stream']=='GOV-SBA-007')['status']='Closed';return f,r
        self.change_csv('review-register.csv',mutate);self.rejected('actions.settings_open')
    def test_16_claim_prematurely_verified(self):
        self.change_json('baseline-register.json',lambda x:x['claims'][3].update(verification_status='Verified'))
        self.rejected('claims.reported_not_verified')
    def test_17_lost_central_entry(self):
        p=self.root/'registers/document-register.md';p.write_text(p.read_text().replace('SBA-SCR-001','REMOVED'))
        self.rejected('central.document_ids')
    def test_18_missing_closure_column(self):
        def mutate(f,r): f.remove('reopen_if'); [a.pop('reopen_if') for a in r];return f,r
        self.change_csv('review-register.csv',mutate);self.rejected('actions.schema')

if __name__=='__main__':
    unittest.main(verbosity=2)
