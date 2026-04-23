---
created: 2026-03-08
updated: 2026-03-08
type: project-charter
status: approved
document-id: VN-AST-MSL-001-CHR-001
version: "1.0"
tags: [#type/project, #status/active]
---

# PROJECT CHARTER — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Author** | Workshop X CEO |
| **Status** | Phase 0 — Initialized |
| **Approved** | 2026-03-08 |

---

## Sản Phẩm

**Platform Mục Tiêu Chống Hạm (Anchored Sea Target)**

Thiết kế và chế tạo platform mục tiêu nổi trên mặt nước để sử dụng trong huấn luyện tên lửa chống hạm của Hải Quân Việt Nam. Platform phải mô phỏng đặc tính radar của tàu chiến cỡ nhỏ, hoạt động được trong điều kiện Biển Đông với chi phí thấp và khả năng chế tạo nội địa cao.

| | |
|--|--|
| **Tier** | 1 — Prototype (physical gate bắt buộc ≤ 30 ngày) |
| **Target Customer** | Hải Quân Việt Nam — huấn luyện tên lửa chống hạm |

---

## Domains

| Domain | Lead | Clock Speed | Tỷ Trọng | Notes |
|--------|------|-------------|-----------|-------|
| Cơ (Mechanical) | CEO | 1 week | 95% | Hull, frame, pontoon, neo, cột mast, corner reflectors |
| Điện (Electrical) | CEO | 2 weeks | 5% | GPS beacon, SOLAS light, battery |
| AI/Software | N/A | — | 0% | Passive target — không có AI/SW |

---

## Milestones

Timeline compressed — DMIR artifacts available as reference.

| Gate | Target Date | Deliverable | Status |
|------|-------------|-------------|--------|
| G0 | 2026-03-08 | Charter + ICD v0 | **DONE** |
| G1 | 2026-03-15 | Task Clarification complete | PENDING |
| G2 | 2026-03-22 | Conceptual Design selected | PENDING |
| G3 | 2026-04-05 | Embodiment Design frozen | PENDING |
| G4 | 2026-04-19 | Detail Design + manufacturing pkg | PENDING |

### Physical Gate (Tier 1)

| | |
|--|--|
| **Date** | 2026-04-07 |
| **Deliverable** | Test coupon — mẫu hàn HDPE butt fusion hoặc prototype corner reflector |

---

## Similar Products (FORGE Library)

| Product | Reuse Potential | Notes |
|---------|----------------|-------|
| BB-01 (LOMAH) | LOW | Khác domain, chỉ chung field deployment |
| VN-12.7MM-SIM | NONE | Không liên quan |

> **GREENFIELD** — không có template tái sử dụng từ FORGE library.

---

## ACH Applicability

**NO** — Đây là passive physical target, không có sensor/AI compensation.

---

## Success Criteria

| # | Tiêu Chí | Giá Trị | Đo Bằng |
|---|----------|---------|---------|
| SC-1 | RCS (X-band) | ≥ 1,000 m² | Radar test hoặc tính toán validated |
| SC-2 | Chi phí / unit | ≤ 2,000M VND (~$80,000 USD) | BOM + labor costing |
| SC-3 | Thời gian chế tạo | ≤ 8 tuần (từ khi có vật tư) | Manufacturing log |
| SC-4 | Nội địa hoá | ≥ 60% (tính theo BOM value) | BOM analysis |
| SC-5 | Sống sót | Sea State 5-6 (không chìm) | Stability calculation + sea trial |

---

## Prior Work (DMIR Reference)

Dự án này đã có Phase 2-3 từ bài tập DMIR reverse-engineering. Các artifacts cũ giữ nguyên trong project folder làm **REFERENCE**, không dùng trực tiếp cho HELIX forward design.

| Artifact | Version | Status |
|----------|---------|--------|
| Conceptual Design (reverse-engineered) | v1.0 | REFERENCE |
| Embodiment Design | v1.0, v1.1, v2.0 | REFERENCE |
| Comprehensive Analysis | v1.0 | REFERENCE |
| Anchored Target Analysis | v1.0 | REFERENCE |
| Competitive Comparison | v1.0 | REFERENCE |
| BOM v1.0 | v1.0 | REFERENCE |

---

*Phase 0 Charter | VN-AST-MSL-001 | HELIX Framework*
