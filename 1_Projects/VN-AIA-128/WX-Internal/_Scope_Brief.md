---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #status/active]
parent: VN-AIA-128
---

# WX-AIA — Trợ Lý Ảo Nội Bộ Workshop X

**Sub-scope of VN-AIA-128** | Khởi tạo: 2026-03-20

## Mục Đích

Dog-food VN-AIA-128 bằng dữ liệu nội bộ Workshop X:
1. Validate RAG architecture trước khi demo HD128
2. Tạo trust evidence ("chúng tôi dùng chính sản phẩm này")
3. Unblock multi-user AI access cho nhân viên WX

## Target Users

| # | User | Use Case | Priority |
|---|------|----------|:--------:|
| 1 | CEO | Tra cứu báo giá, BOM, decisions, SOPs | HIGH |
| 2 | Kỹ sư | Tra cứu requirements, design specs, P&B templates | HIGH |
| 3 | Kế toán | Tra cứu chứng từ, quy trình tài chính | MED |
| 4 | Quản lý | Dashboard, project status, SOP lookup | MED |

## Data Sources

| # | Source | Type | Size Est. | Phase |
|---|--------|------|-----------|:-----:|
| 1 | 3_Resources/SOPs/ | SOP documents | ~15 files | P1 - MVP |
| 2 | 3_Resources/Templates/ | Templates | ~16 files | P1 - MVP |
| 3 | 1_Projects/*/báo giá, BOM | Quotes, BOMs | ~10 files | P1 - MVP |
| 4 | 1_Projects/*/_Project_Brief | Project briefs | ~7 files | P2 |
| 5 | _meta/decisions.md | Design decisions | 1 file | P2 |
| 6 | 2_Areas/HELIX/Physical-Validation/ | Test data | ~5 files | P3 |
| 7 | CLAUDE.md + .claude/rules/ | Operating procedures | ~5 files | P3 |

## Shared với VN-AIA-128 (~80%)

| Component | Shared | Notes |
|-----------|:------:|-------|
| RAG engine (embedding + vector DB + retrieval) | ✓ | Cùng pipeline |
| LLM inference layer | ✓ | Qwen2.5-7B hoặc QwQ-32B |
| Web UI (chat interface) | ✓ | Cùng frontend |
| Auth layer (user login) | ✓ | Cùng auth module |
| Data sources | ✗ | WX docs vs HD128 docs |
| Security config | ✗ | Internal LAN vs air-gap |
| Domain-specific prompts | ✗ | Engineering vs naval admin |

## Architecture

- **Deploy:** Docker trên local WX server (hoặc CEO laptop)
- **LLM:** Qwen2.5-7B (nhẹ, chạy được trên RTX 3060+)
- **Vector DB:** ChromaDB hoặc FAISS (local, no cloud)
- **UI:** Gradio hoặc Open WebUI
- **Embedding:** bge-m3 (multilingual, supports Vietnamese)

## Success Criteria

1. ≥80% accuracy trên 20 câu hỏi test (SOPs + báo giá)
2. ≤5s response time
3. ≥3 nhân viên WX dùng thường xuyên (≥3x/tuần) trong 2 tuần
4. CEO confirms: "có ích hơn tự search file"

## Milestones

| # | Date | Deliverable | Status |
|---|------|-------------|:------:|
| 1 | 2026-03-25 | Data preparation: index SOPs + templates + báo giá | PENDING |
| 2 | 2026-03-28 | RAG pipeline working: embed → store → retrieve | PENDING |
| 3 | 2026-04-05 | Web UI + auth: multi-user chat interface | PENDING |
| 4 | 2026-04-12 | **WX-AIA MVP: internal beta with ≥2 staff** | PENDING |
| 5 | 2026-04-19 | HD128 demo: sanitized WX version + HD128 sample data | PENDING |

## Physical Gate

- **Date:** 2026-04-12 (1 tuần trước HD128 demo)
- **Deliverable:** WX-AIA MVP chạy trên local server, ≥2 nhân viên test
- **Pass criteria:** ≥80% accuracy, ≤5s response, 2+ users confirmed

## Business Value

- **Dog-food ROI:** Mỗi bug fix cho WX version = bug fix cho HD128 version (compound)
- **Trust evidence:** Demo cho HD128: "chúng tôi dùng chính sản phẩm này điều hành công ty"
- **Skill building:** Team WX quen AI trước khi deploy cho khách hàng
- **Data validation:** WX documents test RAG quality trước khi dùng tài liệu quân sự
