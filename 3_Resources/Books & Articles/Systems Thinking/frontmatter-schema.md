# Frontmatter Schema

> **Purpose**: Standardized YAML metadata for all vault files
> **Version**: 1.0
> **Date**: 2026-01-29

---

## Required Fields

```yaml
---
title: "Document Title"
project: bb-01 | v-smash | smb-consulting | general
type: requirement | design | decision | quality | test | procurement | skill | research
created: 2026-01-29
updated: 2026-01-29
status: draft | active | completed | archived
---
```

---

## Optional Fields

```yaml
---
# Categorization
tags: [mtbf, dfx, gate-2, mems]
phase: concept | embodiment | detail | production
gate: G1 | G2 | G3

# Entities (for graph traversal)
entities:
  - type: component
    name: ESP32-WROOM-32E
  - type: standard  
    name: MIL-STD-810H
  - type: supplier
    name: Hshop.vn

# Relationships
links:
  parent: "[[Project-README]]"
  children: 
    - "[[Detail-Doc-1]]"
  related:
    - "[[Related-Doc]]"

# Metrics
metrics:
  completion: 90
  dfx_score: 85
  mtbf_hours: 551

# Vietnamese
title_vi: "Tiêu đề tiếng Việt"
---
```

---

## Type-Specific Fields

### Requirements
```yaml
type: requirement
version: 1.3
baseline: true
trace_to: [design, test]
```

### Design
```yaml
type: design
methodology: pahl-beitz | vdi-2225
artifacts: [function-structure, morphological-matrix]
```

### Quality
```yaml
type: quality
doc_type: fmea | dfx | atp | mtbf | gate-review
severity: critical | major | minor
```

### Decision
```yaml
type: decision
decision_id: DEC-005
decided_by: Hung
decision_date: 2026-01-26
alternatives: [Option-A, Option-B, Option-C]
```

### Procurement
```yaml
type: procurement
budget_vnd: 17000000
suppliers: [Hshop.vn, AliExpress, Jotun-VN]
lead_time_days: 14
```

### Test
```yaml
type: test
test_level: component | environmental | field | acceptance
pass_criteria: defined
```

---

## Entity Types

| Type | Examples |
|------|----------|
| `component` | ESP32, MEMS mic, ADC |
| `standard` | MIL-STD-810H, IP65, VDI-2225 |
| `supplier` | Hshop.vn, Seeed Studio |
| `person` | Hung, Workshop-X team |
| `tool` | FreeCAD, Airtable, Claude |
| `concept` | MTBF, DfX, GraphRAG |

---

## Search Examples

### Semantic Search
```
"Find documents about acoustic sensors"
→ Matches: title, tags, entities with "acoustic"
```

### Metadata Search
```
"BB-01 quality documents from January"
→ Filter: project=bb-01, type=quality, created>=2026-01-01
```

### Graph Traversal
```
"What's connected to MTBF improvement?"
→ Follow: links.related, entities with shared names
```

---

## Migration Script

```python
# Add frontmatter to existing files
def add_frontmatter(filepath):
    # Extract metadata from path and content
    project = extract_project(filepath)
    doc_type = extract_type(filepath)
    
    frontmatter = f"""---
title: "{extract_title(filepath)}"
project: {project}
type: {doc_type}
created: {get_created_date(filepath)}
updated: {datetime.now().isoformat()[:10]}
status: active
tags: {extract_tags(content)}
---

"""
    # Prepend to file
    prepend_to_file(filepath, frontmatter)
```

---

*Schema for Second Brain metadata*
