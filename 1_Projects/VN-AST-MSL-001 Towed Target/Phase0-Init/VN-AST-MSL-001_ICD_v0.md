---
created: 2026-03-08
updated: 2026-03-08
type: icd
status: skeleton
document-id: VN-AST-MSL-001-ICD-001
version: "0"
tags: [#type/project, #status/active]
---

# ICD v0 — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Status** | SKELETON — details populated during Phase 1 |
| **Version** | v0 |

---

## Domain Boundaries

| Domain | Scope |
|--------|-------|
| **Cơ (Mechanical)** | Hull HDPE, khung thép, pontoon, neo, cột mast, corner reflectors |
| **Điện (Electrical)** | GPS beacon, SOLAS navigation light, battery pack, cabling |
| **AI/Software** | N/A — passive target |

---

## Interface Register

| IF-ID | From | To | Type | Description | Status |
|-------|------|----|------|-------------|--------|
| IF-001 | Cơ | Điện | Mounting | GPS beacon gắn trên cột mast | TBD |
| IF-002 | Cơ | Điện | Mounting | SOLAS light gắn trên cột mast | TBD |
| IF-003 | Điện | Cơ | Power | Battery box lắp trong hull/mast base | TBD |
| IF-004 | Cơ | Cơ | Structural | Pontoon ↔ hull connection (pelican hook) | TBD |
| IF-005 | Cơ | Cơ | Structural | Khung radial ↔ hull connection | TBD |
| IF-006 | Cơ | Cơ | Mooring | Anchor line ↔ hull attachment point | TBD |
| IF-007 | Cơ | Cơ | Mounting | Corner reflector ↔ cột mast/khung | TBD |

> **Note:** Domain AI/SW không có → ICD chỉ cover Cơ-Điện và Cơ-Cơ interfaces.
> Đây là dự án chủ yếu cơ khí — ICD tập trung vào structural interfaces.

---

## Constraints Inherited

| Source | Constraint |
|--------|-----------|
| Success Criteria | Budget ≤ 2,000M VND |
| Success Criteria | Nội địa hoá ≥ 60% → ưu tiên vật tư có sẵn tại Việt Nam |
| FORGE Library | Greenfield — không có template tái sử dụng |
| Product Nature | Passive target — không có nguồn điện lớn, chỉ battery cho beacon/light |

---

## ICD Evolution Plan

| Version | Phase | Content | Status |
|---------|-------|---------|--------|
| **v0** | Phase 0 | Skeleton — document này | **CURRENT** |
| v1 | Phase 1 | Requirements phân bổ cho từng domain | PLANNED |
| v2 | Phase 2 | Interface specs cho concept được chọn | PLANNED |
| v3 | Phase 3 | Frozen — change control active | PLANNED |

---

*ICD v0 | VN-AST-MSL-001 | HELIX Framework*
