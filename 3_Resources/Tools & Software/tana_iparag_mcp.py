"""
tana-iparag-bridge — MCP server bridging Tana voice transcripts into the IPARAG vault.

Follows THỊNH workflow: Thu (Capture) → Hóa (Atomize) → Ích (Connect) → Nhớ (Persist) → Hành (Harvest)

7 tools:
  - process_voice_transcript: classify transcript into IPARAG categories (read-only)
  - create_galaxy_note: write permanent note to 5_Galaxy/ (enforces Forced Link Rule)
  - create_inbox_item: write note to 0_Inbox/
  - list_galaxy_notes: list all Galaxy notes with metadata
  - search_galaxy: keyword search across Galaxy notes
  - tana_fetch_inbox: fetch items from Tana (requires TANA_API_TOKEN)
  - tana_mark_processed: mark Tana node as processed (requires TANA_API_TOKEN)
"""

import os
import re
from datetime import date
from pathlib import Path

from fastmcp import FastMCP
from pydantic import BaseModel, Field

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

VAULT_PATH = Path(os.environ.get("VAULT_PATH", r"D:\Workshop_X"))
GALAXY_DIR = VAULT_PATH / "5_Galaxy"
INBOX_DIR = VAULT_PATH / "0_Inbox"

TANA_LOCAL_URL = "http://localhost:8262"
TANA_CLOUD_URL = "https://europe-west1-tana-prod.cloudfunctions.net/api"

# Known Galaxy notes (loaded dynamically, but clusters are static metadata)
TOPIC_CLUSTERS = {
    "A": {
        "name": "KM Fundamentals",
        "keywords": ["atomic", "cấu trúc", "forced link", "temporal", "taste",
                      "phẳng", "semantic"],
    },
    "B": {
        "name": "Network Effects",
        "keywords": ["activation", "threshold", "serendipity", "valley", "despair",
                      "mạng lưới"],
    },
    "C": {
        "name": "Judgment & Agency",
        "keywords": ["phán đoán", "judgment", "skin in the game", "paradigm",
                      "physical-world", "uỷ thác"],
    },
    "D": {
        "name": "AI Failure Modes",
        "keywords": ["ai dependency", "context drift", "context vs capability",
                      "dj/dt", "delegation"],
    },
    "E": {
        "name": "Systems Archetypes",
        "keywords": ["shifting the burden", "nested", "archetype", "systems"],
    },
    "F": {
        "name": "Knowledge Lifecycle",
        "keywords": ["graveyard", "harvest", "analyst trap", "vault"],
    },
}

# Keywords for IPARAG classification
PROJECT_KEYWORDS = {
    "lomah": "BB-01_LOMAH",
    "bb-01": "BB-01_LOMAH",
    "piezo": "BB-01_LOMAH",
    "claude code": "Mastering Claude Code V2",
    "mastering claude": "Mastering Claude Code V2",
    "thịnh": "THỊNH 12-Week Practice Protocol",
    "12-week": "THỊNH 12-Week Practice Protocol",
    "iparag": "Xây Dựng Hệ Thống IPARAG",
}

AREA_KEYWORDS = {
    "ai": "AI & Công Cụ Lập Trình",
    "lập trình": "AI & Công Cụ Lập Trình",
    "programming": "AI & Công Cụ Lập Trình",
    "tư duy": "Phát Triển Tư Duy & Knowledge Management",
    "knowledge management": "Phát Triển Tư Duy & Knowledge Management",
    "km": "Phát Triển Tư Duy & Knowledge Management",
    "workshop": "Workshop X — Nghiên Cứu & Phân Tích Hệ Thống",
    "nghiên cứu": "Workshop X — Nghiên Cứu & Phân Tích Hệ Thống",
    "hệ thống": "Workshop X — Nghiên Cứu & Phân Tích Hệ Thống",
    "electronics": "Workshop X — Nghiên Cứu & Phân Tích Hệ Thống",
}

INSIGHT_MARKERS = [
    "tôi nhận ra", "tôi hiểu ra", "khái niệm", "nguyên tắc", "insight",
    "quan trọng là", "bài học", "rule", "principle", "mô hình", "pattern",
    "i realized", "key idea", "the point is",
]

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

_UNSAFE_CHARS = re.compile(r'[<>:"/\\|?*]')


def sanitize_filename(name: str) -> str:
    """Remove characters illegal in Windows filenames, preserve Vietnamese."""
    sanitized = _UNSAFE_CHARS.sub("", name).strip()
    # Collapse multiple spaces
    sanitized = re.sub(r"\s+", " ", sanitized)
    # Limit length (Windows MAX_PATH safety)
    if len(sanitized) > 200:
        sanitized = sanitized[:200].rstrip()
    return sanitized


def today_str() -> str:
    return date.today().isoformat()


def parse_frontmatter(text: str) -> dict:
    """Extract YAML frontmatter fields from a note as a dict of strings."""
    match = re.match(r"^---\s*\n(.*?)\n---", text, re.DOTALL)
    if not match:
        return {}
    result = {}
    for line in match.group(1).splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            result[key.strip()] = value.strip()
    return result


def extract_wikilinks(text: str) -> list[str]:
    """Extract all [[wikilink]] targets from text."""
    return re.findall(r"\[\[([^\]]+)\]\]", text)


def load_galaxy_notes() -> list[dict]:
    """Load all Galaxy notes with metadata."""
    notes = []
    if not GALAXY_DIR.exists():
        return notes
    for path in sorted(GALAXY_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except OSError:
            continue
        fm = parse_frontmatter(content)
        links = extract_wikilinks(content)
        tags_raw = fm.get("tags", "")
        tags = re.findall(r"#[\w/\-]+", tags_raw)
        # Detect cluster
        title_lower = path.stem.lower()
        cluster = None
        for cid, cdata in TOPIC_CLUSTERS.items():
            if any(kw in title_lower for kw in cdata["keywords"]):
                cluster = f"{cid}: {cdata['name']}"
                break
        notes.append({
            "title": path.stem,
            "filename": path.name,
            "tags": tags,
            "links": links,
            "link_count": len(links),
            "cluster": cluster or "Uncategorized",
            "created": fm.get("created", "unknown"),
        })
    return notes


def galaxy_note_titles() -> set[str]:
    """Return set of Galaxy note titles (stems) for link validation."""
    if not GALAXY_DIR.exists():
        return set()
    return {
        p.stem for p in GALAXY_DIR.glob("*.md")
        if not p.name.startswith("_")
    }


def classify_text(text: str) -> list[dict]:
    """Classify text segments into IPARAG categories using keyword matching."""
    text_lower = text.lower()
    results = []

    # Check for project matches
    for kw, project in PROJECT_KEYWORDS.items():
        if kw in text_lower:
            results.append({
                "category": "project",
                "target": f"1_Projects/{project}",
                "matched_keyword": kw,
            })

    # Check for area matches
    for kw, area in AREA_KEYWORDS.items():
        if kw in text_lower:
            results.append({
                "category": "area",
                "target": f"2_Areas/{area}",
                "matched_keyword": kw,
            })

    # Check for insight markers → Galaxy candidate
    for marker in INSIGHT_MARKERS:
        if marker in text_lower:
            results.append({
                "category": "galaxy",
                "target": "5_Galaxy",
                "matched_keyword": marker,
            })
            break  # One galaxy match is enough

    # If nothing matched → inbox
    if not results:
        results.append({
            "category": "inbox",
            "target": "0_Inbox",
            "matched_keyword": None,
        })

    return results


# ---------------------------------------------------------------------------
# Pydantic models for structured output
# ---------------------------------------------------------------------------

class AtomicConcept(BaseModel):
    """A single atomic concept extracted from a transcript."""
    title: str = Field(description="Proposed title for the note")
    core_idea: str = Field(description="1-3 sentence summary of the concept")
    category: str = Field(description="IPARAG category: galaxy/project/area/resource/inbox")
    target_path: str = Field(description="Suggested destination in vault")
    suggested_links: list[str] = Field(default_factory=list,
                                       description="Existing Galaxy notes this could link to")
    confidence: str = Field(description="high/medium/low — how confident the classification is")


class TranscriptResult(BaseModel):
    """Result of processing a voice transcript."""
    concepts: list[AtomicConcept]
    raw_classifications: list[dict]
    existing_galaxy_count: int
    suggestion: str = Field(description="Human-readable summary of what to do next")


class GalaxyNoteResult(BaseModel):
    """Result of creating a Galaxy note."""
    success: bool
    filepath: str = ""
    title: str = ""
    link_count: int = 0
    message: str = ""


class InboxItemResult(BaseModel):
    """Result of creating an Inbox item."""
    success: bool
    filepath: str = ""
    title: str = ""
    message: str = ""


class TanaResult(BaseModel):
    """Result from Tana API operations."""
    success: bool
    data: dict | None = None
    message: str = ""


# ---------------------------------------------------------------------------
# MCP Server
# ---------------------------------------------------------------------------

mcp = FastMCP(
    name="tana-iparag-bridge",
    instructions=(
        "Bridge between Tana voice transcripts and the IPARAG vault. "
        "Process transcripts, create Galaxy permanent notes and Inbox items. "
        "Follows THỊNH workflow: Thu→Hóa→Ích→Nhớ→Hành."
    ),
)


# -- Tool 1: process_voice_transcript -------------------------------------

@mcp.tool()
def process_voice_transcript(
    transcript: str,
    source_context: str = "",
) -> dict:
    """
    Extract atomic concepts from a raw voice transcript and classify each
    by IPARAG category (galaxy/project/area/resource/inbox).

    Does NOT write any files — returns suggestions only.
    The LLM or user decides what to create.

    Args:
        transcript: Raw transcript text from Tana voice note.
        source_context: Optional context (e.g. "morning walk", "meeting with X").
    """
    existing_titles = galaxy_note_titles()
    classifications = classify_text(transcript)

    # Build atomic concepts from classifications
    concepts = []
    seen_categories = set()

    for cls in classifications:
        cat = cls["category"]
        if cat in seen_categories and cat != "project":
            continue
        seen_categories.add(cat)

        # Find potentially related Galaxy notes by keyword overlap
        transcript_words = set(re.findall(r"\w{4,}", transcript.lower()))
        suggested_links = []
        for title in existing_titles:
            title_words = set(re.findall(r"\w{4,}", title.lower()))
            if transcript_words & title_words:
                suggested_links.append(title)

        concepts.append(AtomicConcept(
            title=f"[Cần đặt tên] — từ voice note"
                  + (f" ({source_context})" if source_context else ""),
            core_idea=transcript[:200] + ("..." if len(transcript) > 200 else ""),
            category=cat,
            target_path=cls["target"],
            suggested_links=suggested_links[:5],
            confidence="medium" if cls["matched_keyword"] else "low",
        ))

    suggestion_parts = []
    if any(c.category == "galaxy" for c in concepts):
        suggestion_parts.append(
            "Transcript contains insight markers → consider creating a Galaxy permanent note"
        )
    if any(c.category == "project" for c in concepts):
        proj_names = [c.target_path for c in concepts if c.category == "project"]
        suggestion_parts.append(
            f"References project(s): {', '.join(proj_names)}"
        )
    if not suggestion_parts:
        suggestion_parts.append(
            "No strong category signals → route to Inbox for manual review"
        )

    result = TranscriptResult(
        concepts=concepts,
        raw_classifications=classifications,
        existing_galaxy_count=len(existing_titles),
        suggestion=" | ".join(suggestion_parts),
    )
    return result.model_dump()


# -- Tool 2: create_galaxy_note -------------------------------------------

@mcp.tool()
def create_galaxy_note(
    title: str,
    core_idea: str,
    detailed_explanation: str,
    why_important: str,
    links: list[str],
    topic_tags: list[str],
    source: str = "",
) -> dict:
    """
    Write a permanent note to 5_Galaxy/.

    Enforces:
    - Forced Link Rule: must have ≥ 2 links
    - Flat structure: no subdirectories
    - Atomic: one concept per note
    - Exact template match (frontmatter + 5 sections)
    - Validates that linked notes exist, warns on orphans

    Args:
        title: Note title (becomes filename).
        core_idea: 1-3 sentences summarizing the concept.
        detailed_explanation: Extended explanation with examples.
        why_important: Personal relevance.
        links: List of Galaxy note titles to link to (≥ 2 required).
        topic_tags: Topic tags like "knowledge-management", "systems-thinking".
        source: Citation / origin of the concept.
    """
    # Forced Link Rule
    if len(links) < 2:
        return GalaxyNoteResult(
            success=False,
            message=(
                f"REJECTED: Forced Link Rule requires ≥ 2 links, got {len(links)}. "
                f"Use list_galaxy_notes() to find link targets."
            ),
        ).model_dump()

    # Validate links exist
    existing = galaxy_note_titles()
    valid_links = []
    orphan_warnings = []
    for link in links:
        if link in existing:
            valid_links.append(link)
        else:
            orphan_warnings.append(link)

    if len(valid_links) < 2:
        return GalaxyNoteResult(
            success=False,
            message=(
                f"REJECTED: Need ≥ 2 valid links to existing Galaxy notes. "
                f"Valid: {valid_links}. Not found: {orphan_warnings}. "
                f"Use list_galaxy_notes() to see available notes."
            ),
        ).model_dump()

    # Sanitize filename
    safe_title = sanitize_filename(title)
    if not safe_title:
        return GalaxyNoteResult(
            success=False,
            message="REJECTED: Title is empty after sanitization.",
        ).model_dump()

    filepath = GALAXY_DIR / f"{safe_title}.md"

    # Check for duplicate
    if filepath.exists():
        return GalaxyNoteResult(
            success=False,
            message=f"REJECTED: Note already exists at {filepath}",
        ).model_dump()

    # Build tags
    all_tags = ["#type/permanent-note"]
    for tag in topic_tags:
        normalized = tag.lstrip("#").strip()
        if not normalized.startswith("topic/"):
            normalized = f"topic/{normalized}"
        all_tags.append(f"#{normalized}")
    tags_str = ", ".join(all_tags)

    # Build links frontmatter
    links_fm = ", ".join(f"[[{lnk}]]" for lnk in links)

    # Build links section with annotations
    links_section = "\n".join(f"- [[{lnk}]]" for lnk in links)

    # Build source section
    source_section = (
        f"- Nguồn: {source}\n- Ngày gặp: {today_str()}"
        if source
        else f"- Ngày gặp: {today_str()}"
    )

    today = today_str()
    content = f"""---
created: {today}
updated: {today}
type: permanent-note
tags: [{tags_str}]
links: {links_fm}
---

# {title}

## Ý Tưởng Cốt Lõi

{core_idea}

## Giải Thích Chi Tiết

{detailed_explanation}

## Tại Sao Điều Này Quan Trọng?

{why_important}

## Liên Kết

{links_section}

## Nguồn Gốc

{source_section}
"""

    # Write
    try:
        GALAXY_DIR.mkdir(parents=True, exist_ok=True)
        filepath.write_text(content, encoding="utf-8")
    except OSError as e:
        return GalaxyNoteResult(
            success=False,
            message=f"WRITE ERROR: {e}",
        ).model_dump()

    msg = f"Created Galaxy note: {filepath.name}"
    if orphan_warnings:
        msg += f" | WARNING: These links don't match existing notes: {orphan_warnings}"

    return GalaxyNoteResult(
        success=True,
        filepath=str(filepath),
        title=title,
        link_count=len(links),
        message=msg,
    ).model_dump()


# -- Tool 3: create_inbox_item --------------------------------------------

@mcp.tool()
def create_inbox_item(
    title: str,
    content: str,
    item_type: str = "idea",
    source_context: str = "",
) -> dict:
    """
    Write a note to 0_Inbox/ for items needing manual review.

    Args:
        title: Item title (becomes filename).
        content: Main content of the item.
        item_type: One of: idea, clipping, book, article, task, audio.
        source_context: Where this came from (e.g. "Tana voice note").
    """
    valid_types = {"idea", "clipping", "book", "article", "task", "audio"}
    if item_type not in valid_types:
        item_type = "idea"

    safe_title = sanitize_filename(title)
    if not safe_title:
        return InboxItemResult(
            success=False,
            message="REJECTED: Title is empty after sanitization.",
        ).model_dump()

    # Add date prefix to prevent collisions
    filepath = INBOX_DIR / f"{today_str()} {safe_title}.md"

    if filepath.exists():
        # Append a counter
        counter = 2
        while filepath.exists():
            filepath = INBOX_DIR / f"{today_str()} {safe_title} ({counter}).md"
            counter += 1

    today = today_str()
    source_line = f"\n\n> Nguồn: {source_context}" if source_context else ""
    note_content = f"""---
created: {today}
updated: {today}
type: {item_type}
status: inbox
tags: [#type/{item_type}, #status/inbox]
---

# {title}

{content}{source_line}
"""

    try:
        INBOX_DIR.mkdir(parents=True, exist_ok=True)
        filepath.write_text(note_content, encoding="utf-8")
    except OSError as e:
        return InboxItemResult(
            success=False,
            message=f"WRITE ERROR: {e}",
        ).model_dump()

    return InboxItemResult(
        success=True,
        filepath=str(filepath),
        title=title,
        message=f"Created inbox item: {filepath.name}",
    ).model_dump()


# -- Tool 4: list_galaxy_notes --------------------------------------------

@mcp.tool()
def list_galaxy_notes() -> dict:
    """
    List all Galaxy permanent notes with titles, tags, link counts,
    and topic clusters. Use this to find link targets before creating
    new notes.
    """
    notes = load_galaxy_notes()

    # Group by cluster
    by_cluster: dict[str, list] = {}
    for note in notes:
        cluster = note["cluster"]
        by_cluster.setdefault(cluster, []).append(note)

    return {
        "total_notes": len(notes),
        "by_cluster": {
            cluster: [
                {
                    "title": n["title"],
                    "tags": n["tags"],
                    "link_count": n["link_count"],
                    "links": n["links"],
                }
                for n in cluster_notes
            ]
            for cluster, cluster_notes in sorted(by_cluster.items())
        },
        "all_titles": [n["title"] for n in notes],
    }


# -- Tool 5: search_galaxy ------------------------------------------------

@mcp.tool()
def search_galaxy(
    query: str,
    search_content: bool = False,
) -> dict:
    """
    Keyword search across Galaxy note titles and optionally content.
    Returns matches with context snippets.

    Args:
        query: Search term (case-insensitive).
        search_content: If True, also search inside note content (slower).
    """
    query_lower = query.lower()
    matches = []

    if not GALAXY_DIR.exists():
        return {"matches": [], "query": query, "message": "Galaxy directory not found"}

    for path in sorted(GALAXY_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue

        title = path.stem
        title_match = query_lower in title.lower()

        content_match = False
        snippet = ""
        if search_content or title_match:
            try:
                content = path.read_text(encoding="utf-8")
            except OSError:
                continue

            if not title_match and search_content:
                content_match = query_lower in content.lower()

            # Extract context snippet around first match
            if title_match or content_match:
                idx = content.lower().find(query_lower)
                if idx >= 0:
                    start = max(0, idx - 80)
                    end = min(len(content), idx + len(query) + 80)
                    snippet = "..." + content[start:end].replace("\n", " ") + "..."

        if title_match or content_match:
            fm = parse_frontmatter(
                path.read_text(encoding="utf-8") if not (title_match or content_match)
                else content
            )
            matches.append({
                "title": title,
                "filename": path.name,
                "match_type": "title" if title_match else "content",
                "snippet": snippet,
                "tags": re.findall(r"#[\w/\-]+", fm.get("tags", "")),
            })

    return {
        "matches": matches,
        "query": query,
        "total_matches": len(matches),
    }


# -- Tool 6: tana_fetch_inbox ---------------------------------------------

@mcp.tool()
def tana_fetch_inbox(limit: int = 10) -> dict:
    """
    Fetch recent items from Tana inbox.

    Tries local Tana API (localhost:8262) first, falls back to cloud API.
    Requires TANA_API_TOKEN environment variable.

    Args:
        limit: Maximum number of items to fetch (default 10).
    """
    token = os.environ.get("TANA_API_TOKEN")
    if not token:
        return TanaResult(
            success=False,
            message=(
                "TANA_API_TOKEN not set. To enable Tana integration:\n"
                "1. Open Tana → Settings → API tokens\n"
                "2. Create a new token\n"
                "3. Set environment variable: TANA_API_TOKEN=your_token\n"
                "4. Add to .mcp.json env block or system environment\n\n"
                "For now, paste transcripts directly into process_voice_transcript()."
            ),
        ).model_dump()

    try:
        import httpx
    except ImportError:
        return TanaResult(
            success=False,
            message="httpx not installed. Run: pip install httpx",
        ).model_dump()

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    # Try local first, then cloud
    for base_url in [TANA_LOCAL_URL, TANA_CLOUD_URL]:
        try:
            with httpx.Client(timeout=10) as client:
                resp = client.post(
                    f"{base_url}/search",
                    headers=headers,
                    json={
                        "query": "inbox",
                        "limit": limit,
                    },
                )
                if resp.status_code == 200:
                    return TanaResult(
                        success=True,
                        data=resp.json(),
                        message=f"Fetched from {base_url}",
                    ).model_dump()
        except (httpx.ConnectError, httpx.TimeoutException):
            continue
        except Exception as e:
            return TanaResult(
                success=False,
                message=f"Tana API error: {e}",
            ).model_dump()

    return TanaResult(
        success=False,
        message="Could not connect to Tana (tried local and cloud). Check if Tana is running.",
    ).model_dump()


# -- Tool 7: tana_mark_processed ------------------------------------------

@mcp.tool()
def tana_mark_processed(node_id: str) -> dict:
    """
    Mark a Tana node as processed after routing it into IPARAG.

    Requires TANA_API_TOKEN environment variable.

    Args:
        node_id: The Tana node ID to mark as processed.
    """
    token = os.environ.get("TANA_API_TOKEN")
    if not token:
        return TanaResult(
            success=False,
            message=(
                "TANA_API_TOKEN not set. Cannot mark node as processed.\n"
                "Set the token to enable this feature (see tana_fetch_inbox help)."
            ),
        ).model_dump()

    try:
        import httpx
    except ImportError:
        return TanaResult(
            success=False,
            message="httpx not installed. Run: pip install httpx",
        ).model_dump()

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    for base_url in [TANA_LOCAL_URL, TANA_CLOUD_URL]:
        try:
            with httpx.Client(timeout=10) as client:
                resp = client.post(
                    f"{base_url}/nodes/{node_id}/tag",
                    headers=headers,
                    json={"tag": "processed"},
                )
                if resp.status_code in (200, 201, 204):
                    return TanaResult(
                        success=True,
                        data={"node_id": node_id},
                        message=f"Marked node {node_id} as processed via {base_url}",
                    ).model_dump()
        except (httpx.ConnectError, httpx.TimeoutException):
            continue
        except Exception as e:
            return TanaResult(
                success=False,
                message=f"Tana API error: {e}",
            ).model_dump()

    return TanaResult(
        success=False,
        message="Could not connect to Tana. Check if Tana is running.",
    ).model_dump()


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    mcp.run()
