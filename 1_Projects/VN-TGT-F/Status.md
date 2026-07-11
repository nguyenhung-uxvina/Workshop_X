---
created: 2026-05-10
updated: 2026-07-10
type: project
status: merged
tier: 2-product-dev
tags: [#type/project, #status/merged]
merged: 2026-07-10
merged_into: BB-01_LOMAH
merge_reason: "Delete Pass v2 (CEO decision 2026-07-10): Module-PROTO (piezo + ESP32 + LoRa hit detection) trùng 80% công nghệ với BB-01. Gộp thành MỘT nền tảng hit-detection chung — 1 bench test phục vụ cả hai. TGT-F giữ vai trò PRODUCT CATALOG (13 SKU bia BQP), không phải dự án thiết kế độc lập."
---

# VN-TGT-F — Status (Master)

## 🔀 MERGED vào BB-01_LOMAH (2026-07-10 — Delete Pass v2)
- **Module-PROTO** (hull + hit detect) → chuyển vào BB-01 như application thứ 2 của nền tảng hit-detection chung. Bench test piezo BB-01 (deadline 2026-08-10) validate cho CẢ HAI sản phẩm.
- **Catalog 13 SKU** giữ nguyên tại đây làm tài liệu sản phẩm — kích hoạt SKU khi có đơn hàng hoặc khi BB-01 platform sẵn sàng.
- **Module-LD** (land targets research) → dừng, gộp vào resume condition.
- HELIX pipeline Module-F (G1 target 06-21) → HỦY lịch, chạy lại theo nhịp BB-01.

## Tier
**Tier 2 — Product Dev** | Platform + Module architecture

## Product Catalog

### Bia Đơn (9 SKU)
| SKU | Tên | BQP | Vũ Khí | Status |
|-----|-----|-----|--------|--------|
| **TGT-10** | Bia số 10 — Nổi tự do | 122–127 | Súng trường | 🟡 ACTIVE — core platform |
| **TGT-9** | Bia số 9 — Cố định bờ | 122–127 | Súng trường | ⚪ PLANNED |
| **TGT-6** | Bia số 6 | 134 | M79 | ⚪ PLANNED |
| **TGT-6c** | Bia số 6c | 134 | M79 | ⚪ PLANNED |
| **TGT-7e** | Bia số 7e | 135 | M79 | ⚪ PLANNED |
| **TGT-14** | Bia số 14 — Chiếu sáng liên tục | 122–127 | Súng trường | ⚪ PLANNED |
| **TGT-15** | Bia số 15 — Nhấp nháy đảo | 122–127 | Súng trường | ⚪ PLANNED |
| **TGT-18** | Bia số 18 — Tàu AGS-17 | 128–133 | AGS-17 | ⚪ PLANNED |
| **TGT-18b** | Bia số 18b — Tàu Cối 60mm | 128–133 | Cối 60mm | ⚪ PLANNED |

### Bia Cụm — Cluster Products (4 SKU)
> Tất cả cụm = **1 khung nổi chung** + N tấm bia gắn trên khung.

| SKU | Tên BQP | Cấu Hình | BQP | Scoring | Status |
|-----|---------|---------|-----|---------|--------|
| **TGT-2x6c** | Cụm 2 bia số 6c | 1 khung + 2×bia 6c, 3m spacing | 134 | Per bia | ⚪ PLANNED |
| **TGT-2x6** | Cụm 2 bia số 6 | 1 khung + 2×bia 6, 3m spacing ⚠️ bờ? | 134 | Per bia | ⚪ PLANNED |
| **TGT-6c-2x7e** | Cụm bia số 7e | 1 khung + 1×6c + 2×7e | 134–135 | 2 zones | ⚪ PLANNED |
| **TGT-3x6c** | Cụm bia số 6c (M79) | 1 khung + 3×bia 6c | 134 | R=4m cluster-level | ⚪ PLANNED |

### Infrastructure
| | Scope | Gate | Status |
|--|-------|------|--------|
| **Module-PROTO** | Hull + hit detect prototype | **2026-06-09** | 🔴 NEEDS TEAM ASSIGN |
| **Module-LD** | Land targets GO/NO-GO research | **2026-08-02** | 🟡 RESEARCH START |

## HELIX Progress (Module-F — active pipeline)

- [x] Phase 0: Project Init — Charter + ICD v0 + Sync Calendar (2026-05-10)
- [ ] Phase 1: Task Clarification (target: G1 2026-06-21)
- [ ] Phase 2: Conceptual Design (target: G2 2026-08-02)
- [ ] Phase 3: Embodiment Design (target: G3 2026-10-04)
- [ ] Phase 4: Detail Design (target: G4 2026-12-06)

## Blocking Items

| Item | Module | Priority |
|------|--------|:--------:|
| Assign Cơ khí + AI/SW leads cho PROTO | PROTO | 🔴 HIGH |
| Order COTS components (piezo, ESP32, LoRa) | PROTO | 🔴 HIGH |
| Stakeholder access: Cục Quân huấn | F | 🟡 MED |
| Start BQP land target regulation research | LD | 🟡 MED |

## ACH Status

| Sub-function | Decision | Conditions Met? |
|-------------|----------|:---------------:|
| Hit Detection DP1 (hit/miss) | CONDITIONAL GO | ❌ Lab demo pending (PROTO gate) |

## Next Actions

1. **PROTO:** Assign team + order components (tuần này)
2. **F:** Chạy `/helix-task-clarify VN-TGT-F` — Phase 1 (scope: Platform + Float Basic)
3. **LD:** Bắt đầu BQP regulation research song song

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-10 | Phase 0 complete | Charter + ODI + HOQ + forge-shift + forge-cost + Product Proposal |
| 2026-05-10 | ACH CONDITIONAL GO hit/miss | forge-shift: S/H/I/F=PASS, T=MARGINAL, O=HIGH |
| 2026-05-10 | Chấp nhận prototype economics | Justify bởi strategic value (local content, capability premium) |
| 2026-05-10 | D1 GO PROTO gate 2026-06-09 | Physical gate validate ACH + hull trước G2 |
| 2026-05-10 | D2 Platform + 4 modules | Modular architecture — tuần tự F→C→N→H |
| 2026-05-10 | D3 C before N | Cluster cơ khí đơn giản hơn Night LED R&D |
| 2026-05-10 | D4 Add LD research | GO/NO-GO land targets ≤ 2026-08-02 |
| 2026-05-10 | Gộp về VN-TGT-F | Single project folder, module sub-dirs |
