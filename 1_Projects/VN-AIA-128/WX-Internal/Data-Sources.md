---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #status/active]
parent: VN-AIA-128
---

# WX-AIA Data Sources Registry

Danh sách tài liệu sẽ được index vào RAG system cho WX-AIA MVP.

## Phase 1 — MVP (target: 2026-03-25)

### SOPs (~15 files)
```
3_Resources/SOPs/
├── AI Failure Log.md
├── COD Decision Rule.md
├── DCTRS Delegation Protocol.md
├── FUEL Context Protocol.md
├── THỊNH Practice Protocol.md
├── Defense_AI_QC_Gate.md
├── credential-management.md
├── defense_ai_qc_checklist.md
├── mcp-security.md
├── nightly-automation.md
├── reverse-proxy-setup.md
├── S1_prompt_library.md
└── workshop_x_delegation_pattern_library.md
```

### Templates (~16 files)
```
3_Resources/Templates/
├── CLAUDE-template.md
├── manufacturing-analysis-template.md
├── organizational-analysis-template.md
├── project_template.md
├── quick-analysis-template.md
├── template-manufacturing-analysis.md
├── template-organizational-system.md
├── template-technical-system.md
└── weekly_reflection_template.md
```

### Báo Giá & BOM
```
1_Projects/VN-XUONG-UUV/Phase2-Concept/BAOGIA_Xuong_LARS_UUV_v1.0.md
1_Projects/VN-12.7MM-SIM/[BOM files]
1_Projects/BB-01_LOMAH/[BOM files]
```

**Estimated P1 total: ~40-50 documents**

## Phase 2 — Extended

### Project Briefs & Status
```
1_Projects/*/_Project_Brief.md    (~7 files)
1_Projects/*/Status.md            (~7 files)
```

### Design Decisions
```
_meta/decisions.md
_meta/learnings.md
```

**Estimated P2 total: +15-20 documents**

## Phase 3 — Full Coverage

### Physical Validation Data
```
2_Areas/HELIX — Design Execution/Physical-Validation/
```

### Operating Procedures
```
CLAUDE.md
.claude/rules/*.md
```

### Galaxy Notes (read-only reference)
```
5_Galaxy/*.md    (~98 notes — read-only, không modify)
```

**Estimated P3 total: +100+ documents**

## Indexing Notes

- **Format:** Tất cả đều Markdown → dễ parse, không cần OCR
- **Language:** Mix Vietnamese + English → cần multilingual embedding (bge-m3)
- **Update frequency:** SOPs/Templates thay đổi ít (monthly). Project docs thay đổi nhiều (weekly) → cần re-index schedule
- **Sensitive data:** Báo giá có giá supplier → KHÔNG expose ra ngoài WX network
- **Chunking strategy:** Markdown heading-based chunks (## sections) → giữ context tốt hơn fixed-size chunks
