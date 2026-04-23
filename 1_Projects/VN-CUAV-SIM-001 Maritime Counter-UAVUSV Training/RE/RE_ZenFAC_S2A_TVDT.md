---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2A — TVDT (Target Values Decision Table)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 2A-TVDT: TARGET VALUES — Zen FAC vs WX LITE

| Rank | Req ID | Parameter | Unit | Zen Value (inferred) | WX LITE Target | Tolerance | Trade-off | Weight |
|:----:|:------:|-----------|------|:-------------------:|:--------------:|-----------|-----------|:------:|
| 1 | R-006 | Recoil force | N | 50-150 | ≥25 | ±10 | WX ACH compensates lower force with AI coaching | 15% |
| 2 | AI-01 | AI adaptation responsiveness | — | Real-time adaptive | ACH Layer 1 planned | — | Must ship in v1.0 | 15% |
| 3 | R-001 | Visual FOV | ° | 360 | 180 | ±10° | 180° adequate for single-station gunnery | 10% |
| 4 | R-004 | Motion DOF | count | 6 | 2 | — | 2-DOF sufficient for gunner (not helmsman) | 10% |
| 5 | R-023 | Frame rate | fps | ≥30 | ≥30 | min 25 | Parity | 10% |
| 6 | R-024 | Motion latency | ms | ≤50 | ≤100 | — | WX acceptable for 2-DOF gunnery cue | 5% |
| 7 | R-012 | EO/IR capability | — | Day+thermal | Day only | — | Deferred to v2.0 | 5% |
| 8 | R-027 | Scenario types | count | 4+ (conventional) | 3+ (C-UAS specific) | — | WX deeper in niche | 10% |
| 9 | R-021 | Modularity | — | Single→multi-ship | LITE→CORTEX product line | — | WX more structured | 10% |
| 10 | R-032 | Unit price | USD | $200-500K | $50-70K | ±$10K | WX 3-7× cheaper = structural | 10% |
