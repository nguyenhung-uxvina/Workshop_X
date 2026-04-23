---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — Solution-Free Verification
mode: RETROACTIVE
pipeline: helix-task-clarify v3.2 --icdm
block: BC
---

# BC ICDM: Solution-Free Verification — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE
**Source:** Requirements v2.0 IFR + Sacred Constraints + Function Structure 6-Flow v1.0

---

## 1. IFR SOLUTION-FREE CHECK

### Current IFR

> *"Hệ thống lý tưởng: xạ thủ đạt kỹ năng bắn C-UAV/USV tương đương bắn thực, với ZERO chi phí đạn, ZERO rủi ro an toàn, ZERO cần ra biển, chỉ cần phòng 6×8m + điện 220V + 1 instructor."*

### Word-by-Word Scan

| Fragment | Solution-free? | Issue | Fix needed? |
|----------|:-----------:|-------|:-----------:|
| "xạ thủ đạt kỹ năng bắn C-UAV/USV tương đương bắn thực" | ✅ | Outcome-based, no tech specified | No |
| "ZERO chi phí đạn" | ✅ | Constraint on cost, not mechanism | No |
| "ZERO rủi ro an toàn" | ✅ | Safety constraint | No |
| "ZERO cần ra biển" | ✅ | Location constraint, not solution | No |
| "phòng 6×8m" | ⚠️ | **Geometry constraint** — specifies room size | **Minor**: room size is deployment constraint, not solution. Acceptable for defense context where installation space is known. |
| "điện 220V" | ⚠️ | **Infrastructure constraint** — specifies power standard | **Minor**: VN power standard is fact, not design choice. Acceptable. |
| "1 instructor" | ✅ | Operational constraint on manning | No |

### Verdict: **PASS with minor notes**

The IFR describes WHAT the system must achieve (training equivalence) and WHERE it must work (room, power), not HOW (no projection, no Unity, no encoders, no specific technology). The geometry/power constraints are deployment facts, not solution choices.

---

## 2. SACRED CONSTRAINTS — Solution-Free Check

| SC | Statement | Solution-free? | Note |
|:--:|----------|:-----------:|------|
| SC-1 | "100% mô phỏng — ZERO đạn thật" | ✅ | Constraint on method (no live ammo), not on how simulation works |
| SC-2 | "Phản hồi trong ngưỡng nhận thức con người" | ✅ | Performance threshold, not implementation |
| SC-3 | "Đạn đạo khớp thực tế đủ để học lead angle đúng" | ✅ | Accuracy target, not model type |
| SC-4 | "Giá bán ≤ $70K/unit" | ✅ | Cost ceiling |
| SC-5 | "Vận hành độc lập, không phụ thuộc server ngoài" | ✅ | Architecture constraint (on-premise), not specific technology |

**Verdict: ALL 5 PASS** — no brand names, no specific technologies.

---

## 3. REQUIREMENTS SCAN — Solution Contamination Check

> Scan all 102 requirements for brand names, specific technologies, or geometry constraints that should be abstracted.

### Flagged Items

| Req | Current Text | Contamination | Severity | Resolution |
|:---:|-------------|:------------:|:--------:|-----------|
| M-04 | "nhôm profile 40×40mm" | Specific material + dimension | LOW | W (wish) — acceptable as production preference, not design constraint |
| M-05 | "sơn tĩnh điện màu OD green" | Specific finish | LOW | W (wish) + Luxurious — aesthetic only |
| P-01 | "sourced tại VN hoặc COTS có sẵn ở thị trường VN" | Location constraint | LOW | Defense procurement fact, not solution bias |
| P-02 | "gia công được tại Workshop X (CNC + hàn)" | Specific manufacturing site | MED | **Note:** This biases toward WX-manufacturable designs. Acceptable for Phase 1 (we ARE WX) but Phase 2 concepts should not be eliminated solely because WX can't make them today. |
| P-05 | "JLCPCB VN-compatible" | Brand name | LOW | W (wish) — specifies capability class, not vendor lock. Acceptable. |
| O-04 | "DSHK 12.7mm + NSV 12.7mm" | Specific weapon models | LOW | These are the CUSTOMER's weapons, not our design choice. Solution-free = correct. |
| T-02 | "DJI Mavic, ~30cm" | Brand name | LOW | Reference example for size class, not design dependency. Acceptable. |

### Verdict: **PASS**

No requirement forces a specific design solution. The flagged items are either:
- Wish (W) requirements = non-binding preferences
- Customer context (weapon names, threat names) = facts, not solutions
- Production preferences = WX-specific but don't eliminate concepts

**P-02 advisory:** During Phase 2 concept evaluation, do NOT eliminate a concept solely because WX cannot currently manufacture it. Evaluate on customer value first, then check producibility.

---

## 4. FUNCTION STRUCTURE — Abstraction Check

> Verify that the 6-Flow Function Structure uses abstract functions, not implementations.

| Level | Example Function | Solution-free? |
|-------|-----------------|:-----------:|
| L1 | "Simulate weapon dynamics" | ✅ Abstract |
| L1 | "Generate target behavior" | ✅ Abstract |
| L1 | "Render visual environment" | ⚠️ "Render" implies display technology — but at L1 it's sufficiently abstract |
| L1 | "Evaluate trainee performance" | ✅ Abstract |
| L1 | "Simulate ship motion" | ✅ Abstract |
| L1 | "Manage training session" | ✅ Abstract |
| L1 | "Record and replay" | ✅ Abstract |

**Verdict: PASS** — L1 functions are outcome-oriented. L2 sub-functions (in 6-Flow doc) get more specific but appropriately so for the decomposition level.

---

## 5. BC SUMMARY

| Check | Result | Note |
|-------|:------:|------|
| IFR solution-free | **PASS** | Minor: room size + power are deployment facts |
| Sacred constraints | **PASS** | All 5 outcome-based |
| Requirements scan | **PASS** | 7 minor flags, all acceptable |
| Function structure | **PASS** | L1 abstract, L2 appropriately specific |
| **Overall BC** | **PASS** | No solution contamination detected |

**P-02 advisory forwarded to Phase 2:** Don't eliminate concepts based on current WX manufacturing capability alone.

---

*Next: Block BD ICDM (Platform & Innovation Flows)*
