---
title: "Second Brain AI Agent Architecture"
project: general
type: skill
created: 2026-01-29
updated: 2026-01-29
status: active
tags: [graphrag, knowledge-graph, mcp, agent, memory]
entities:
  - type: concept
    name: GraphRAG
  - type: tool
    name: Prefect
  - type: tool
    name: FastMCP
  - type: tool
    name: Neo4j
  - type: concept
    name: Knowledge-Graph
source: decodingai.com
---

# Second Brain AI Agent Architecture

> **Type**: System Design Skill
> **Source**: Decoding AI (decodingai.com)
> **Status**: 🔄 PLANNING

---

## Core Principle

> **Effective agents = Structured Memory + Reliable Orchestration**

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   DOCUMENT ──→ INGESTION ──→ KNOWLEDGE GRAPH ──→ AGENT        │
│                (GraphRAG)        (Memory)      (Orchestrator)  │
│                                                    ↓           │
│                                              MCP SERVER        │
│                                                    ↓           │
│                                            USER (Claude/Cursor)│
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Three Retrieval Modes

| Mode | Query Type | Implementation |
|------|------------|----------------|
| **Semantic** | "Find notes about X" | Vector embeddings |
| **Metadata** | "Documents from Jan 2026" | Tags, dates, frontmatter |
| **Graph** | "What connects to X?" | [[wikilinks]], 1-2 hops |

---

## Memory Types

| Type | Content | Example |
|------|---------|---------|
| **Episodic** | Events, timeline | "Gate 2 closed on Jan 26" |
| **Semantic** | Facts, knowledge | "BB-01 uses MEMS mics" |
| **Procedural** | How-to, processes | "VDI 2225 evaluation steps" |

---

## Component Stack

### 1. Ingestion Pipeline
```
Document
    ↓
KG Write (Open Source)
    ↓
Embedding Model (Open Source)
    ↓
KG Objects (entities, relationships, vectors, metadata)
```

**Tools**: LangChain, LlamaIndex, Unstructured

### 2. Knowledge Graph
```
Entities ←──→ Relationships
    ↓              ↓
Vectors      Metadata
```

**Tools**: Neo4j, Qdrant, Weaviate, Mem0

### 3. Agent Orchestration
```
Agent (Closed Source LLM)
    ↓
Tools: KG Search, KG Write, Web Search, Image Gen
    ↓
Skills: Update Memory, Write Content
```

**Tools**: Prefect, n8n, Temporal, LangGraph

### 4. MCP Server
```
FastMCP (Prefect)
    ↓
MCP Clients: Claude, Cursor, Custom
```

---

## Implementation for Workshop X

### Current State
- ✅ Obsidian vault with [[wikilinks]]
- ✅ Claude Memory (episodic)
- ✅ Airtable (structured data)
- ✅ Clawdbot MCP (Telegram interface)
- ⬜ Embeddings/semantic search
- ⬜ Entity extraction
- ⬜ Unified knowledge graph

### Phase 1: Enhance Vault
```markdown
---
tags: [bb-01, quality, mtbf]
date: 2026-01-26
project: BB-01
phase: Gate-2
entities: [MEMS-mic, ESP32, LoRa]
---
```
Add YAML frontmatter for metadata search.

### Phase 2: Add Semantic Search
Options:
- Obsidian Smart Connections plugin
- Local embeddings with Ollama
- Qdrant cloud (free tier)

### Phase 3: GraphRAG Integration
Options:
- Neo4j AuraDB (free tier)
- Mem0 (AI memory layer)
- Custom with LangGraph

### Phase 4: Expose via MCP
```python
# FastMCP server
@mcp.tool()
def kg_search(query: str, mode: str = "semantic"):
    """Search knowledge graph"""
    if mode == "semantic":
        return vector_search(query)
    elif mode == "metadata":
        return metadata_search(query)
    elif mode == "graph":
        return graph_traverse(query)

@mcp.tool()
def kg_write(content: str, entities: list):
    """Write to knowledge graph"""
    extract_entities(content)
    create_embeddings(content)
    update_graph(entities)
```

---

## Key Design Decisions

### 1. Open vs Closed Source
| Component | Recommendation |
|-----------|----------------|
| Embedding | Open (local privacy) |
| KG Write | Open (customizable) |
| Agent LLM | Closed (Claude quality) |
| LLM Twin | Open (fine-tunable) |

### 2. Orchestration Choice
| Tool | Pros | Cons |
|------|------|------|
| Prefect | Durable, monitoring | Learning curve |
| n8n | Visual, easy | Less code control |
| Temporal | Enterprise-grade | Complex |
| LangGraph | LLM-native | Newer |

### 3. Graph DB Choice
| Tool | Pros | Cons |
|------|------|------|
| Neo4j | Mature, Cypher | Heavy |
| Qdrant | Vector-native | Less graph |
| Weaviate | Hybrid | Resource-intensive |
| Mem0 | AI-first | Newer, less control |

---

## Integration with D-M-I-R

```
DIAGNOSIS
├── KG Search: Find relevant past decisions
├── Graph Traverse: Connected problems
└── Semantic: Similar issues

MODELING
├── KG Search: Prior models, patterns
├── Procedural Memory: How we solved before
└── Entity relationships

INTERVENTION
├── KG Write: Log decisions
├── Update Memory: New learnings
└── Link to outcomes

REFLECTION
├── Graph Traverse: Impact analysis
├── Episodic Memory: Timeline
└── Update procedural memory
```

---

## Quick Start Checklist

- [ ] Add YAML frontmatter to all vault files
- [ ] Install Obsidian Smart Connections
- [ ] Create entity extraction template
- [ ] Set up Qdrant cloud (free)
- [ ] Build KG Search MCP tool
- [ ] Build KG Write MCP tool
- [ ] Integrate with Clawdbot

---

## References

- Source: decodingai.com
- Prefect: prefect.io
- FastMCP: github.com/jlowin/fastmcp
- Mem0: mem0.ai
- LangGraph: langchain-ai.github.io/langgraph

---

*Architecture skill for building Second Brain AI Agent*
