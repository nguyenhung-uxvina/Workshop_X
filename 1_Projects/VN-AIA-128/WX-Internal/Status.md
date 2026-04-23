---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #status/active]
parent: VN-AIA-128
---

# WX-AIA Status

## Current State

- **Phase:** 0 — Initialized
- **Blocking constraint:** Chưa có local GPU server setup (cần RTX 3060+ hoặc tương đương)
- **Next action:** Data preparation — index SOPs + templates + báo giá (deadline 03-25)

## Timeline

```
[====>                                        ] Phase 0
03-20        03-25      03-28      04-05      04-12      04-19
Init         Data       RAG        Web UI     WX MVP     HD128
             Prep       Pipeline   + Auth     Beta       Demo
```

## Decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-20 | Sub-scope within VN-AIA-128, not separate project | Portfolio at 7/7 limit. 80% shared codebase. Dog-food strategy. |
| 2026-03-20 | Qwen2.5-7B as initial LLM | VN language support (VMLU ranked), runs on consumer GPU, open weights |
| 2026-03-20 | ChromaDB + bge-m3 for RAG | Local-only, no cloud dependency, multilingual embedding |

## Dependencies

| Dependency | From | Status |
|-----------|------|:------:|
| LLM selection validated | Research: Nemotron VN | ✓ Qwen2.5-7B selected |
| GPU hardware available | CEO | ⏳ Need RTX 3060+ |
| Data sources identified | _Scope_Brief.md | ✓ 7 source groups listed |
| VN-AIA-128 architecture | Phase0-Init | ✓ RAG + LLM + Web UI |

## Risks

| Risk | Severity | Mitigation |
|------|:--------:|-----------|
| No GPU available at WX | HIGH | CEO laptop RTX? Or rent cloud GPU for MVP |
| Vietnamese RAG quality poor | MED | Test with 20-question benchmark, iterate prompts |
| Staff adoption low | MED | Start with CEO + 1 engineer, demonstrate value first |
| Data too small for meaningful RAG | LOW | 50+ documents is sufficient for MVP |
