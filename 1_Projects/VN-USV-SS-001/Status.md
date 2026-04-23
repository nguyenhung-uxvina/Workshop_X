---
created: 2026-03-17
updated: 2026-03-19
type: project
status: active
tags: [#type/project, #status/active]
tier: 2-product-dev
---

# VN-USV-SS-001 — Status

## Tier
**Tier 2 — Product Dev** (added to active projects 2026-04-09)

## Current Phase
**Phase 0: Initialized** (2026-03-17). FORGE pipeline complete. Awaits /plan + Phase 1.

## Pahl-Beitz Progress
- [x] Phase 0: Project Init (charter, ICD v0, sync calendar)
- [x] Phase 0: FORGE Pipeline COMPLETE (8/8 skills)
- [x] Phase 0: **Portfolio Planning v1.0 (--ex)** — 10 variants, $1.27M/5yr
- [ ] Phase 1: Task Clarification
- [ ] Phase 2: Conceptual Design
- [ ] Phase 3: Embodiment Design
- [ ] Phase 4: Detail Design

## Physical Validation
- **dP/dt this month:** 0 (project just initialized)
- **Next physical milestone:** Lab demonstrator 30-day ($140)
- **Next physical gate date:** ~~2026-04-17~~ **RESET → 2026-05-09** (CEO decision 2026-04-09, original overdue)
- **Hardware on hand:** None yet

## Known Parameters
- **Concept:** Open-hull semi-submersible USV (torpedo-form HDPE + open frame)
- **LOA:** 2.5-4.0 m, Ø300-500mm, 30-80 kg empty, 15-40 kg payload
- **Propulsion:** Dual BLDC + ballast pump, LiFePO4 48V
- **Autonomy:** ArduSub + Pixhawk, Level 2-3
- **Comms:** LoRa + 4G, optional Iridium
- **Cost:** $2,900-6,500 prototype, $2,000-4,000 production

## ACH Decision
- **FORGE SHIFT:** GO (2026-03-19)
- **SHIFT Scorecard:** S=PASS, H=PASS, I=PASS, F=PASS (Level 2 inherent), T=MARGINAL
- **Conditions:**
  1. Lab demonstrator MUST validate semi-sub depth hold with ArduSub before Phase 2
  2. Field data collection plan required before Phase 3
  3. Monitor ArduSub semi-sub mode community adoption
- **Economics:** $300 vs $10K+ per unit (97% reduction), local content 50-75%
- **Fallback:** NC ballast valve = auto-surface on fault (Level 2)

## Blocking Constraints
1. Chưa có lab demonstrator — cần $140 + 30 ngày
2. Biên phòng chưa có formal requirement — cần stakeholder engagement
3. CEO capacity limited — VN-XUONG (T1) + VN-AST (T1) đang priority cao hơn
4. ~~ACH assessment chưa chạy~~ → **GO** (2026-03-19, /forge-shift)

## Key Decisions Pending
- Hull form final selection (torpedo vs catamaran vs SWATH — VDI 2225)
- Computing platform: Pixhawk only vs Pixhawk + Jetson
- Payload baseline: ISR only vs ISR + decoy
- Ballast control accuracy target

## Deadline
**Lab demonstrator: ~~2026-04-17~~ RESET → 2026-05-09** (30 days from 2026-04-09)
**Phase 1 target: 2026-06-09** (30 days after lab demo)
**Full prototype: 2027-03-17** (12 months from init)
