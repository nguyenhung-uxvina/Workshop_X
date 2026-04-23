---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2221:2019 Requirements Co-Evolution Log
---

# Requirements Delta Log — VN-CUAV-SIM-001
## Phase 2 Conceptual Design — Requirements Backflow Record

**Purpose:** VDI 2221:2019 co-evolution principle — requirements are living, not frozen at Gate 1. This log tracks all requirement changes discovered during Phase 2 concept development.

---

## Delta Entries

| Delta-ID | Date | Req-ID | Change Type | Old Value | New Value | Reason (Phase 2 finding) | CEO Approved |
|----------|:----:|--------|:-----------:|-----------|-----------|--------------------------|:------------:|
| D-001 | 2026-04-14 | C-01 (FIXED) | **Value change** | ≤$70,000/unit | **≤$80,000/bộ** | 2-station + 4-projector system exceeds single-station SC-4. Different segment justification. | ✅ CEO 2026-04-14 |
| D-002 | 2026-04-14 | C-01 (FULL) | **Value change** | ≤$70,000/unit | **≤$200,000/hệ thống** | Flagship product targets Bộ QP budget. Shared deck + 360° + crew = fundamentally different segment. SC-4F created. | ✅ CEO 2026-04-14 |
| D-003 | 2026-04-14 | C-01 (CORTEX) | **Value change** | ≤$70,000/unit | **≤$500,000/deployment** | System-of-systems pricing. Quân chủng/Vùng HQ budget. SC-4C created. | ✅ CEO 2026-04-14 |
| D-004 | 2026-04-14 | F1.7 Sight | **WP removed** | AR eyepiece WP-D | **Removed from morpho** | CEO: impractical for defense context, cost-prohibitive, no VN supply chain. | ✅ CEO 2026-04-14 |
| D-005 | 2026-04-14 | F3.1 Display (FULL) | **New constraint** | — | **Matrox splitter for 6-proj** | CEO preference over 2×GPU. Simplifies architecture. Compatibility risk MEDIUM→LOW. | ✅ CEO 2026-04-14 |

---

## Summary Statistics

| Metric | Count |
|--------|:-----:|
| Total deltas | 5 |
| Value changes | 3 (all SC-4 variant cost limits) |
| WP removed | 1 (AR eyepiece) |
| New constraints | 1 (Matrox splitter) |
| New requirements | 0 |
| CEO approved | 5/5 |

---

## Propagation Status

| Delta | Propagated to Requirements List? | Propagated to Variant Reqs? |
|-------|:-------------------------------:|:--------------------------:|
| D-001 | N/A (variant-specific) | ✅ FIXED_PA8_Requirements_v1.0.md |
| D-002 | N/A (variant-specific) | ✅ FULL_PA6_Requirements_v1.0.md |
| D-003 | N/A (variant-specific) | ✅ CORTEX_PA9_Requirements_v1.0.md |
| D-004 | N/A (morpho only) | ✅ Morphological_Matrix.md updated |
| D-005 | N/A (morpho only) | ✅ Morphological_Matrix.md updated |

**All deltas propagated. No orphan changes.**

---

*VDI 2221:2019 co-evolution log. Updated each time Phase 2/3 discovers requirement changes.*
