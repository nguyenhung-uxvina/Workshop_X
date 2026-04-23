---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #status/active]
tier: 1-prototype
---

# VN-AIA-128 — Status

## Tier
**Tier 1 — Prototype** (physical gate ≤ 30 ngày: demo MVP 2026-04-19)

## Current Phase
**Phase 0: Initialized** (2026-03-20, helix-project-init)

## Pahl-Beitz Progress (adapted for SW product)
- [x] Phase 0: Project Init — Charter + ICD v0 + Sync Calendar
- [ ] Phase 1: Task Clarification — Requirements + stakeholder interviews
- [ ] Phase 2: Conceptual Design — LLM selection, RAG architecture, deployment model
- [ ] Phase 3: Embodiment Design — Implementation, integration, data pipeline
- [ ] Phase 4: Detail Design — Hardening, security, documentation, handover

## Physical Validation
- **dP/dt this month:** 0 (project just started)
- **Next physical milestone:** Demo MVP — RAG chatbot trả lời 20 câu quy định
- **Physical gate deadline:** **2026-04-19** (30 ngày từ init)
- **Demo audience:** ≥3 cán bộ Hải đoàn 128

## Blocking Constraints
1. **Stakeholder access** — chưa có liên hệ chính thức với HD128 CNTT / nghiệp vụ
2. **Dữ liệu đầu vào** — chưa nhận được tài liệu quy định nội bộ để nạp vào RAG
3. **Hạ tầng** — chưa xác định server on-premise hay private cloud VN
4. **LLM selection** — chưa đánh giá: local open-source (Vistral/Qwen) vs API VN cloud

## Key Decisions Pending
- [ ] LLM engine: Local open-source (Vistral 7B, Qwen2 7B) vs VN cloud API (FPT AI, Viettel AI)
- [ ] Vector DB: ChromaDB (simple) vs Qdrant (scalable) vs pgvector (PostgreSQL)
- [ ] Deployment: Docker on-premise vs private cloud (FPT Cloud / Viettel Cloud)
- [ ] Dữ liệu Phase 1: loại tài liệu nào nạp trước? (quy định, văn bản mẫu, quy trình)
- [ ] Security: xác thực tích hợp hệ thống hiện có hay standalone?

## Stakeholder Map

| # | Stakeholder | Vai trò | Access | Priority |
|---|-----------|---------|:------:|:--------:|
| 1 | Cán bộ tác chiến HD128 | Daily user | **NEED** | HIGH |
| 2 | Chỉ huy HD128 / Phòng ban | Phê duyệt, dùng kết quả | **NEED** | HIGH |
| 3 | Bộ phận CNTT Tân Cảng | Hạ tầng, bảo mật | **NEED** | HIGH |
| 4 | Sĩ quan nghiệp vụ | Nội dung domain | NEED | MED |
| 5 | Workshop X CEO | Phát triển, tích hợp | HAVE | MED |

**⚠ 3 HIGH stakeholders = "NEED" → BLOCKING. Phải thiết lập liên hệ trước Phase 1.**

## FORGE Pipeline Status
- **forge-job-map:** ✅ DONE (42 outcomes, DISRUPTIVE, 4 MUST MVP)
- **forge-validate:** ✅ DONE (3-stage, 12 tests, 4 kill gates, model selection matrix)
- **forge-trust:** ✅ DONE (3 audience messages, 5 concerns, demo milestone 2026-04-19)
- **forge-cost:** ✅ DONE ($2.5K MVP, free pilot strategy, 5yr $349K)
- **forge-library:** ✅ DONE (WX-RAG-001, reuse multiplier UNLIMITED)
- **forge-flywheel:** ✅ DONE ($500/yr → accuracy 80→92% over 12 months)
- **FORGE pipeline: 7/7 COMPLETE** (shift skipped — product IS AI)

## ODI Status (legacy reference)
- **forge-job-map:** ✅ DONE
- **⚠ Flag:** Requirements sẽ dựa trên giả định nếu không có ODI (17% success rate per Ulwick)
- **Recommendation:** Chạy /forge-job-map sau khi có access stakeholder

## Deadline
**2026-04-19** — Demo MVP cho Hải đoàn 128 (30 ngày từ init)
