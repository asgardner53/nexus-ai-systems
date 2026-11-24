#!/usr/bin/env python3
"""Validate the controlled v0.2 EPUB without importing the build script.

These checks complement EPUBCheck. A PASS does not constitute Kindle Previewer
or author approval. Complete titles are independent expectations, so a faulty
heading transformation cannot manufacture its own successful comparison.
"""
from __future__ import annotations

import argparse
from collections import Counter
import hashlib
import json
from pathlib import Path
import posixpath
import re
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree as ET
from zipfile import BadZipFile, ZIP_STORED, ZipFile


EXPECTED_SECTIONS = (
    "Preface",
    "Note on Cases and Examples",
    "Part I: The Accountability Problem",
    "Chapter 1: The AI You Are Already Governing",
    "Chapter 2: When Policy Exists but Control Does Not",
    "Chapter 3: The Human Who Still Owns the Decision",
    "Part II: Making Accountability Meaningful",
    "Chapter 4: The Conditions for Meaningful Accountability",
    "Chapter 5: What Have We Actually Allowed the AI to Do?",
    "Chapter 6: Where Governance Actually Lives",
    "Chapter 7: Capability Before Compliance",
    "Chapter 8: Governance as Permission",
    "Part III: Proving and Adapting Control",
    "Chapter 9: Evidence Before Assurance",
    "Chapter 10: When the System Begins to Act",
    "References",
    "About the Author",
)
APPROVED_COVER_SHA256 = "95997bbfa293f22be8caef9ca6e45729eda96efe7701177f1dffc9976a31e9da"
XHTML = "http://www.w3.org/1999/xhtml"
OPF = "http://www.idpf.org/2007/opf"
EPUB = "http://www.idpf.org/2007/ops"
DC = "http://purl.org/dc/elements/1.1/"
NS = {"h": XHTML, "opf": OPF, "dc": DC}


class ValidationError(ValueError):
    """An EPUB release invariant failed."""


def require(condition: bool, message: str) -> None:
    if not condition:
        raise ValidationError(message)


def text_of(node: ET.Element) -> str:
    return " ".join("".join(node.itertext()).split())


def local_target(base: str, href: str) -> tuple[str, str] | None:
    """Resolve a package-relative URL; external reader links are not fetched."""
    uri = urlsplit(href)
    if uri.scheme or uri.netloc:
        return None
    path = unquote(uri.path)
    target = posixpath.normpath(posixpath.join(posixpath.dirname(base), path)) if path else base
    require(not target.startswith(("../", "/")) and target != "..", f"Resource escapes EPUB: {href}")
    return target, unquote(uri.fragment)


def validate(path: Path) -> dict:
    with ZipFile(path) as archive:
        names = archive.namelist()
        require(len(names) == len(set(names)), "Duplicate ZIP member names")
        require(archive.testzip() is None, "ZIP CRC failure")
        require(bool(names) and names[0] == "mimetype", "mimetype must be the first ZIP member")
        require(archive.getinfo("mimetype").compress_type == ZIP_STORED, "mimetype must be uncompressed")
        require(archive.read("mimetype") == b"application/epub+zip", "Incorrect mimetype contents")
        for name in names:
            require(not name.startswith("/") and ".." not in name.split("/"), f"Unsafe ZIP member: {name}")

        container = ET.fromstring(archive.read("META-INF/container.xml"))
        rootfiles = container.findall("{urn:oasis:names:tc:opendocument:xmlns:container}rootfiles/{urn:oasis:names:tc:opendocument:xmlns:container}rootfile")
        require(len(rootfiles) == 1, "Expected one package rootfile")
        package_path = rootfiles[0].get("full-path", "")
        require(package_path in names, "Container package path is missing")
        require(rootfiles[0].get("media-type") == "application/oebps-package+xml", "Incorrect package media type")
        package = ET.fromstring(archive.read(package_path))
        require(package.tag == f"{{{OPF}}}package" and package.get("version") == "3.0", "Expected EPUB 3 package")
        for field, expected in (("title", "AI Governance in Practice"), ("creator", "Alec Gardner"), ("language", "en-AU")):
            values = [text_of(n) for n in package.findall(f"opf:metadata/dc:{field}", NS)]
            require(values == [expected], f"Unexpected package {field}: {values}")
        identifiers = package.findall("opf:metadata/dc:identifier", NS)
        require(any(n.get("id") == package.get("unique-identifier") and text_of(n) for n in identifiers), "Package unique identifier is unresolved")

        manifest_nodes = package.findall("opf:manifest/opf:item", NS)
        require(bool(manifest_nodes), "Package manifest is empty")
        manifest = {}
        resources = {}
        for item in manifest_nodes:
            item_id = item.get("id", "")
            require(item_id and item_id not in manifest, f"Missing or duplicate manifest ID: {item_id}")
            href = item.get("href", "")
            require(bool(href), f"Missing manifest href: {item_id}")
            resolved = local_target(package_path, href)
            require(resolved is not None, f"Unpackaged manifest resource: {href}")
            resource, fragment = resolved
            require(not fragment and resource in names, f"Missing manifest resource: {href}")
            require(resource not in resources, f"Duplicate manifest resource: {resource}")
            manifest[item_id] = (item, resource)
            resources[resource] = item

        documents = {}
        id_maps = {}
        for resource, item in resources.items():
            if item.get("media-type") != "application/xhtml+xml":
                continue
            root = ET.fromstring(archive.read(resource))
            require(root.tag == f"{{{XHTML}}}html", f"Not XHTML: {resource}")
            require(root.get("lang", root.get("{http://www.w3.org/XML/1998/namespace}lang")) == "en-AU", f"Missing English language declaration: {resource}")
            require(not root.findall(".//h:hr", NS), f"Decorative horizontal rule remains: {resource}")
            require(not re.search(r"\\[1-9](?=[\s:;]|$)", text_of(root)), f"Literal replacement placeholder remains: {resource}")
            ids = {}
            for node in root.iter():
                if "id" in node.attrib:
                    require(node.attrib["id"] not in ids, f"Duplicate element ID in {resource}: {node.attrib['id']}")
                    ids[node.attrib["id"]] = node
            documents[resource] = root
            id_maps[resource] = ids

        # Resolve all packaged internal links, image sources and stylesheet links.
        for resource, root in documents.items():
            for node in root.iter():
                for attribute in ("href", "src", "{http://www.w3.org/1999/xlink}href"):
                    if attribute not in node.attrib:
                        continue
                    target = local_target(resource, node.attrib[attribute])
                    if target is None:
                        continue
                    destination, fragment = target
                    require(destination in resources, f"Broken internal resource: {resource} -> {node.attrib[attribute]}")
                    if fragment:
                        require(destination in id_maps and fragment in id_maps[destination], f"Broken internal target: {resource} -> {node.attrib[attribute]}")

        nav_items = [(item, resource) for item, resource in manifest.values() if "nav" in item.get("properties", "").split()]
        require(len(nav_items) == 1, "Expected one manifest-designated navigation document")
        nav_path = nav_items[0][1]
        require(nav_path in documents, "Navigation document must be XHTML")
        nav_root = documents[nav_path]
        tocs = [node for node in nav_root.findall(".//h:nav", NS) if "toc" in node.get(f"{{{EPUB}}}type", "").split()]
        require(len(tocs) == 1, "Expected one EPUB table of contents")
        toc_links = tocs[0].findall(".//h:a", NS)
        toc_titles = [text_of(node) for node in toc_links]
        require(toc_titles == list(EXPECTED_SECTIONS), f"TOC complete titles/order mismatch: {toc_titles}")

        landmark_paths = {}
        for nav in nav_root.findall(".//h:nav", NS):
            if "landmarks" not in nav.get(f"{{{EPUB}}}type", "").split():
                continue
            for link in nav.findall(".//h:a", NS):
                target = local_target(nav_path, link.get("href", ""))
                for kind in link.get(f"{{{EPUB}}}type", "").split():
                    if kind in ("cover", "titlepage"):
                        require(kind not in landmark_paths and target is not None, f"Invalid {kind} landmark")
                        landmark_paths[kind] = target[0]
        require(set(landmark_paths) == {"cover", "titlepage"}, "Missing cover/title-page landmarks")

        spine_refs = package.findall("opf:spine/opf:itemref", NS)
        require(bool(spine_refs), "Spine is empty")
        spine_paths = []
        for ref in spine_refs:
            require(ref.get("idref") in manifest, f"Unresolved spine ID: {ref.get('idref')}")
            resource = manifest[ref.get("idref")][1]
            require(resource in documents, f"Spine resource is not XHTML: {resource}")
            require(resource not in spine_paths, f"Duplicate spine resource: {resource}")
            spine_paths.append(resource)
        front = [landmark_paths["cover"], landmark_paths["titlepage"], nav_path]
        require(spine_paths[:3] == front, "Expected cover, title page and visible TOC before book sections")
        section_paths = spine_paths[3:]
        actual_headings = []
        section_locations = []
        for resource in section_paths:
            headings = documents[resource].findall(".//h:h1", NS)
            require(len(headings) == 1, f"Expected one major-section h1 per content document: {resource}")
            actual_headings.append(text_of(headings[0]))
            section_locations.append((resource, headings[0]))
        require(actual_headings == list(EXPECTED_SECTIONS), f"Complete H1 titles/order mismatch: {actual_headings}")
        require(set(documents) == set(spine_paths), "Unexpected XHTML document outside the controlled reading order")

        for link, (section_path, heading) in zip(toc_links, section_locations):
            target = local_target(nav_path, link.get("href", ""))
            require(target is not None and target[0] == section_path, f"TOC entry points to the wrong section: {text_of(link)}")
            if target[1]:
                anchor = id_maps[section_path].get(target[1])
                require(anchor is not None, f"TOC heading anchor missing: {text_of(link)}")
                anchored_headings = [anchor] if anchor.tag == f"{{{XHTML}}}h1" else anchor.findall(".//h:h1", NS)
            else:
                # Pandoc versions may link directly to a split chapter document.
                # The document must still contain exactly the expected main H1;
                # a supplied fragment always takes the stricter branch above.
                anchored_headings = documents[section_path].findall(".//h:h1", NS)
            require(anchored_headings == [heading], f"TOC target is not the matching H1 section: {text_of(link)}")
            require(text_of(heading) == text_of(link), f"TOC target title mismatch: {text_of(link)}")

        cover_items = [(item, resource) for item, resource in manifest.values() if "cover-image" in item.get("properties", "").split()]
        require(len(cover_items) == 1, "Expected one package-designated cover image")
        cover_path = cover_items[0][1]
        cover_sha256 = hashlib.sha256(archive.read(cover_path)).hexdigest()
        require(cover_sha256 == APPROVED_COVER_SHA256, f"Embedded cover checksum mismatch: {cover_sha256}")
        image_paths = {resource for resource, item in resources.items() if item.get("media-type", "").startswith("image/")}
        require(len(image_paths) == 9 and cover_path in image_paths, "Expected approved cover plus eight diagram assets")
        diagram_sources = []
        cover_sources = []
        for resource, root in documents.items():
            for node in root.iter():
                if node.tag.rsplit("}", 1)[-1] not in ("img", "image"):
                    continue
                href = node.get("src") or node.get("href") or node.get("{http://www.w3.org/1999/xlink}href", "")
                target = local_target(resource, href)
                require(target is not None and target[0] in image_paths, f"Unpackaged image in {resource}")
                if resource == landmark_paths["cover"]:
                    cover_sources.append(target[0])
                    continue
                require(resource in section_paths, f"Unexpected image outside book sections: {resource}")
                require(node.tag == f"{{{XHTML}}}img" and node.get("alt", "").strip(), f"Missing informative diagram alt text: {resource}")
                require(node.get("role") != "presentation", f"Informative diagram marked decorative: {resource}")
                diagram_sources.append(target[0])
        require(cover_sources == [cover_path], "Cover page does not use the approved package cover")
        require(Counter(diagram_sources) == Counter({p: 1 for p in image_paths - {cover_path}}), "Expected eight distinct internal diagrams, each used once")

        references_path = section_locations[EXPECTED_SECTIONS.index("References")][0]
        reference_section = id_maps[references_path].get("references")
        require(reference_section is not None, "Missing references section ID")
        references = reference_section.findall("h:p", NS)
        require(len(references) == 99 and len(reference_section.findall(".//h:p", NS)) == 99, "Expected 99 separate reference paragraphs directly under #references")
        require(all(text_of(p) for p in references), "Empty reference entry")
        require(len(reference_section.findall(".//h:h1", NS)) == 1, "References contain an unintended principal section")

        styles = []
        for link in documents[references_path].findall(".//h:link", NS):
            if "stylesheet" in link.get("rel", "").split():
                resolved = local_target(references_path, link.get("href", ""))
                require(resolved is not None, "External reference stylesheet")
                styles.append(archive.read(resolved[0]).decode("utf-8"))
        require(bool(styles), "References have no packaged stylesheet")
        keep_together = {}
        css = re.sub(r"/\*.*?\*/", "", "\n".join(styles), flags=re.S)
        for selectors, declarations in re.findall(r"([^{}]+)\{([^{}]*)\}", css):
            selectors = [re.sub(r"\s+", " ", s.strip()) for s in selectors.split(",")]
            if not any(re.fullmatch(r"#references(?:\s*>\s*|\s+)p", s) for s in selectors):
                continue
            for declaration in declarations.split(";"):
                key, separator, value = declaration.partition(":")
                if separator:
                    keep_together[key.strip().lower()] = value.strip().lower()
        require(keep_together.get("page-break-inside") == "avoid" and keep_together.get("break-inside") in ("avoid", "avoid-page"), "References lack both legacy and modern per-entry keep-together CSS")

    return {
        "status": "PASS",
        "epub": str(path),
        "epub_sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
        "sections": list(EXPECTED_SECTIONS),
        "section_count": len(EXPECTED_SECTIONS),
        "internal_diagrams": len(diagram_sources),
        "reference_entries": len(references),
        "embedded_cover_sha256": cover_sha256,
        "checks": [
            "ZIP integrity, mimetype, container and manifest resources",
            "Metadata and ordered reading spine",
            "17 complete H1 titles and matching linked TOC destinations",
            "All packaged internal resource and fragment targets",
            "Eight distinct internal images with informative alt text",
            "Approved embedded cover bytes and cover-page reference",
            "99 separate reference entries with per-entry keep-together CSS",
            "No literal replacement placeholders or decorative horizontal rules",
        ],
        "kindle_previewer": "PENDING: these structural checks do not test Kindle rendering",
        "pagination_note": "Keep-together CSS is advisory and cannot keep an entry larger than the reader's screen on one screen.",
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("epub", type=Path)
    parser.add_argument("--report", type=Path, help="Write a JSON validation report")
    args = parser.parse_args()
    try:
        result = validate(args.epub)
    except (ValidationError, BadZipFile, ET.ParseError, KeyError, OSError) as error:
        result = {"status": "FAIL", "epub": str(args.epub), "error": str(error)}
    if args.report:
        args.report.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if result["status"] == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(main())
