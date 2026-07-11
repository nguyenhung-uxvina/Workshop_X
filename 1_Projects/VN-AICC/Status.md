---
created: 2026-03-05
updated: 2026-07-10
type: project
status: active
tags: [#type/project, #status/active]
tier: 2-product-dev
reactivated: 2026-05-15
reactivated_from: on-hold
reactivation_reason: "CEO Decision D (2026-05-15): Bet Now on AI platform — không chờ surplus cash. AICC là IRONMESH connective tissue; on-hold mâu thuẫn với D. CM4 sprint reactivated."
---

# VN-AICC — Status

## ⏰ 2-WEEK CLOCK (CEO decision 2026-07-10 — Delete Pass v2)
Sprint CM4 reactivated 2026-05-15 với time-box 2-4 tuần (exit target 2026-06-05) — **đã quá hạn 5 tuần không có kết quả ghi nhận**. Điều kiện mới:
- **CM4 latency benchmark PHẢI có số liệu (P50/P95/P99 ms) trước 2026-07-24.**
- Không đạt → **AUTO ON-HOLD** theo đúng logic circuit-breaker của chính sprint. Không cho phép trạng thái "reactivated nhưng không chạy" — đó là vùng giữa barbell trá hình.
- AICC là vé lồi #2 của portfolio (não vòng 8/8, Decision D "Bet Now") — nhưng bet nghĩa là ĐẶT CƯỢC THẬT trong 2 tuần, không phải giữ chỗ.

## Tier
**Tier 2 — Product Dev** (reactivated 2026-05-15 — CEO Decision D override)

## Current Phase
**PROTOTYPE-Standalone-v1: CM4 Latency Sprint — IN PROGRESS** (reactivated 2026-05-15)
Phase 3 Embodiment unblocks after sprint exit criterion met.

## Pahl-Beitz Progress
- [x] Phase 1: Task Clarification (Quality Gate passed)
- [x] Phase 2: Conceptual Design (Function Structure + Morpho Matrix + VDI2225)
- [ ] **Phase 3: Embodiment Design** (blocked pending CM4 sprint exit)
- [ ] Phase 4: Detail Design

## PROTOTYPE-Standalone-v1 (Circuit Breaker Sprint) — 🟢 ACTIVE
- **Purpose:** Validate CM4 inference latency, break AICC-CORTEX circular dependency
- **Time box:** 2-4 weeks from 2026-05-15
- **Exit criterion:** Latency number documented (ms) → Phase 3 resumes OR Hailo-8 fallback triggered
- **Target exit date:** 2026-06-05 (3 weeks)
- **Design brief:** `PROTOTYPE-Standalone-v1/design-brief.md`
- **Fallback:** Hailo-8 accelerator (if CM4 latency > 200ms threshold)

## Physical Validation
- **dP/dt this month:** 0 → target 1 (CM4 bench result)
- **Next physical milestone:** CM4 inference latency benchmark
- **Critical unvalidated assumption:** CM4 latency ≤ 200ms for real-time AI response (R1)

## Sprint Kanban

### To Do
- [ ] Procure CM4 module (if not on hand)
- [ ] Set up bench test: CM4 + AI model + inference loop
- [ ] Measure latency: single-agent → 4-agent → peak load
- [ ] Document result: P50 / P95 / P99 latency in ms
- [ ] Decision gate: ≤200ms → Phase 3 proceed | >200ms → Hailo-8 fallback

### In Progress
- [ ] Sprint setup (started 2026-05-15)

### Done
*(empty — sprint just reactivated)*

## Blocking Constraints
1. ~~CM4 inference latency = UNVALIDATED~~ → **Sprint active — resolving**
2. Human-AI interaction design (judgment interface) — Phase 3 item
3. IRONMESH ecosystem integration — standalone approach removes this blocker during sprint

## Key Risk
AICC circular dependency (AICC waits CORTEX, CORTEX waits AICC).
Circuit breaker: standalone prototype validates CM4 without CORTEX. ✅ Approach confirmed.

## Strategic Context (CEO Decision D — 2026-05-15)
AICC = IRONMESH terminal for entire WX product ecosystem. Every hardware product (CUAV-SIM, XUONG-UUV, MGM-V5, AST-MSL) needs AICC as its AI control layer. Deferring AICC = deferring the entire AI platform strategy. CEO Decision D: "Bet now — không chờ surplus cash."

## Phase 0 Planning (retroactive 2026-04-09)
- [x] Product Planning v1.0 — Steps 1-8 consolidated from Phase 1-3 docs
- [x] Product Proposal v1.0 — solution-neutral v3.0 schema
- [x] **Portfolio Planning v1.0** — 4 variants (MAKER→PRO→TAC→RACK)
- [x] **Portfolio Planning v1.1 (--ex)** — 4→9 variants (+SWONLY, OEM, TRAINER, AUDIT, INDUSTRIAL)
- Reframed: "AI Command Center" → "Human-AI Judgment Interface Platform"
- Sequence: V1→N5→N6→V2→N7→V3→N8→V4→N9
- Razor-blade model: HW $413K + IRONMESH subscription $1.08M = **$1.49M / 5yr** [L5] (revised from $22.7M — original was [L6-FANTASY])
- Platform ROI: **857%** (NRE savings unchanged)
- AICC = IRONMESH terminal for all WX products + defense OEM + non-defense industrial
- Export 2028+

## Deadline
Prototype sprint: 2-4 weeks from start date (TBD)
