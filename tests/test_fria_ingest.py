import copy
import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from fria_ingest import render

SAMPLE = {
 "date":"2026-11-23", "research_window":"Synthetic test only",
 "summary":"Synthetic test, not research.",
 "claims":[{"id":"FRIA-CLM-TEST-001","claim":"Synthetic test","source_title":"Example","source_url":"https://example.org/paper","jurisdiction":"International","limitations":"No study","contrary_evidence":"Not assessed","safe_wording":"Do not publish","verification_status":"provisional","materiality":"M2"}],
 "opportunities":[{"rank":1,"headline":"Test headline","rationale":"Test","evidence_gap":"All evidence outstanding"}]
}
class IntakeTests(unittest.TestCase):
 def test_three_records(self):
  self.assertEqual(len(render(SAMPLE)), 3)
 def test_rejects_verified(self):
  x=copy.deepcopy(SAMPLE);x["claims"][0]["verification_status"]="verified"
  with self.assertRaises(ValueError):render(x)
 def test_rejects_duplicate(self):
  x=copy.deepcopy(SAMPLE);x["claims"].append(copy.deepcopy(x["claims"][0]))
  with self.assertRaises(ValueError):render(x)
 def test_rejects_http(self):
  x=copy.deepcopy(SAMPLE);x["claims"][0]["source_url"]="http://example.org"
  with self.assertRaises(ValueError):render(x)
if __name__=="__main__":
 unittest.main()
