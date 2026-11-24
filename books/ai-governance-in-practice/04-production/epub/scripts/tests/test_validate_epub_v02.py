#!/usr/bin/env python3
"""Mutation regressions against a real, completed EPUB.

Run from the EPUB directory:
    python scripts/tests/test_validate_epub_v02.py build/AI_Governance_in_Practice_v0.2_REVIEW.epub

All mutations are temporary copies. The supplied review proof is never edited.
"""
import argparse
from pathlib import Path
import posixpath
import sys
import tempfile
import unittest
from xml.etree import ElementTree as ET
from zipfile import ZipFile

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from validate_epub_v02 import NS, ValidationError, text_of, validate  # noqa: E402


BASELINE = None


class RealEpubMutationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if BASELINE is None:
            raise unittest.SkipTest("Supply a completed EPUB path to run the real-build mutation tests")
        # The controls must accept the unmodified completed artifact first.
        cls.original_result = validate(BASELINE)

    def mutated_copy(self, mutation):
        temporary = tempfile.TemporaryDirectory(prefix="epub-validator-regression-")
        self.addCleanup(temporary.cleanup)
        destination = Path(temporary.name) / "mutated.epub"
        with ZipFile(BASELINE) as original:
            changed = mutation(original)
            self.assertTrue(changed, "A regression test must mutate at least one ZIP member")
            with ZipFile(destination, "w") as output:
                for member in original.infolist():
                    output.writestr(member, changed.get(member.filename, original.read(member.filename)))
        return destination

    @staticmethod
    def replace_heading(archive, title, replacement):
        for name in archive.namelist():
            if not name.endswith(".xhtml"):
                continue
            root = ET.fromstring(archive.read(name))
            for heading in root.findall(".//h:h1", NS):
                if text_of(heading) == title:
                    for child in list(heading):
                        heading.remove(child)
                    heading.text = replacement
                    return {name: ET.tostring(root, encoding="utf-8", xml_declaration=True)}
        raise AssertionError(f"Missing fixture heading: {title}")

    def test_unmodified_epub_passes(self):
        self.assertEqual(self.original_result["status"], "PASS")
        self.assertEqual(self.original_result["section_count"], 17)
        self.assertEqual(self.original_result["internal_diagrams"], 8)
        self.assertEqual(self.original_result["reference_entries"], 99)

    def test_missing_heading_word_rejected(self):
        path = self.mutated_copy(lambda z: self.replace_heading(
            z, "Part I: The Accountability Problem", "Part I: The Accountability"))
        with self.assertRaisesRegex(ValidationError, "Complete H1 titles/order mismatch"):
            validate(path)

    def test_literal_backreference_rejected(self):
        path = self.mutated_copy(lambda z: self.replace_heading(
            z, "Chapter 10: When the System Begins to Act", r"\1: \2"))
        with self.assertRaisesRegex(ValidationError, "Literal replacement placeholder"):
            validate(path)

    def test_broken_navigation_target_rejected(self):
        def mutation(archive):
            name = next(n for n in archive.namelist() if n.endswith("nav.xhtml"))
            root = ET.fromstring(archive.read(name))
            link = next(a for a in root.findall(".//h:a", NS) if text_of(a) == "References")
            link.set("href", link.get("href").split("#", 1)[0] + "#missing-reference-anchor")
            return {name: ET.tostring(root, encoding="utf-8", xml_declaration=True)}
        path = self.mutated_copy(mutation)
        with self.assertRaisesRegex(ValidationError, "Broken internal target"):
            validate(path)

    def test_valid_fragment_navigation_accepted(self):
        def mutation(archive):
            name = next(n for n in archive.namelist() if n.endswith("nav.xhtml"))
            root = ET.fromstring(archive.read(name))
            for link in root.findall(".//h:nav[@id='toc']//h:a", NS):
                href = link.get("href").split("#", 1)[0]
                resource = posixpath.normpath(posixpath.join(posixpath.dirname(name), href))
                chapter = ET.fromstring(archive.read(resource))
                section = chapter.find(".//h:section", NS)
                self.assertIsNotNone(section)
                self.assertTrue(section.get("id"))
                link.set("href", href + "#" + section.get("id"))
            return {name: ET.tostring(root, encoding="utf-8", xml_declaration=True)}
        path = self.mutated_copy(mutation)
        self.assertEqual(validate(path)["status"], "PASS")

    def test_existing_fragment_that_is_not_heading_rejected(self):
        def mutation(archive):
            name = next(n for n in archive.namelist() if n.endswith("nav.xhtml"))
            root = ET.fromstring(archive.read(name))
            link = next(a for a in root.findall(".//h:a", NS) if text_of(a) == "References")
            href = link.get("href").split("#", 1)[0]
            resource = posixpath.normpath(posixpath.join(posixpath.dirname(name), href))
            chapter = ET.fromstring(archive.read(resource))
            paragraph = chapter.find(".//h:p", NS)
            paragraph.set("id", "existing-paragraph-not-heading")
            link.set("href", href + "#existing-paragraph-not-heading")
            return {
                name: ET.tostring(root, encoding="utf-8", xml_declaration=True),
                resource: ET.tostring(chapter, encoding="utf-8", xml_declaration=True),
            }
        path = self.mutated_copy(mutation)
        with self.assertRaisesRegex(ValidationError, "TOC target is not the matching H1 section"):
            validate(path)

    def test_fragmentless_link_to_wrong_document_rejected(self):
        def mutation(archive):
            name = next(n for n in archive.namelist() if n.endswith("nav.xhtml"))
            root = ET.fromstring(archive.read(name))
            links = root.findall(".//h:a", NS)
            link = next(a for a in links if text_of(a) == "References")
            wrong = next(a for a in links if text_of(a) == "About the Author")
            link.set("href", wrong.get("href").split("#", 1)[0])
            return {name: ET.tostring(root, encoding="utf-8", xml_declaration=True)}
        path = self.mutated_copy(mutation)
        with self.assertRaisesRegex(ValidationError, "TOC entry points to the wrong section"):
            validate(path)

    def test_wrong_embedded_cover_rejected(self):
        def mutation(archive):
            name = next(n for n in archive.namelist() if n.endswith(".opf"))
            package = ET.fromstring(archive.read(name))
            cover = next(i for i in package.findall("opf:manifest/opf:item", NS)
                         if "cover-image" in i.get("properties", "").split())
            resource = posixpath.normpath(posixpath.join(posixpath.dirname(name), cover.get("href")))
            changed = bytearray(archive.read(resource))
            changed[-1] ^= 1
            return {resource: bytes(changed)}
        path = self.mutated_copy(mutation)
        with self.assertRaisesRegex(ValidationError, "Embedded cover checksum mismatch"):
            validate(path)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("epub", type=Path)
    args = parser.parse_args()
    BASELINE = args.epub.resolve()
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(RealEpubMutationTests)
    result = unittest.TextTestRunner(verbosity=2).run(suite)
    raise SystemExit(0 if result.wasSuccessful() else 1)
