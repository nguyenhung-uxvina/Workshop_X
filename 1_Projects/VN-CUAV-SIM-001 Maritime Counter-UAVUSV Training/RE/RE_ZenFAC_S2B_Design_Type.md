---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2B — RE Complexity Classification
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 2B-DT: RE COMPLEXITY — Zen FAC Simulator

## Per-SF Assessment

| SF | WX Prior Art | Complexity | Depth in Stage 3 |
|:--:|-------------|:----------:|:-----------------:|
| SF-01 Motion | YES (2-DOF, simpler) | GREEN | SHALLOW |
| SF-02 Visual | YES (Unity 3-screen) | GREEN | SHALLOW |
| SF-03 Recoil | PARTIAL (solenoid, lower force) | **AMBER** | MODERATE |
| SF-04 Ship dynamics | PARTIAL (Unity physics) | AMBER | MODERATE |
| SF-05 Ballistics | YES (ray-trace) | GREEN | SHALLOW |
| SF-06 AI coaching | PARTIAL (ACH planned, not built) | **RED** | DEEP |
| SF-07 Haptic controls | NO (standard switches) | AMBER | MODERATE |
| SF-08 EO/IR | NO (day-only LITE) | RED | DEEP (deferred v2) |
| SF-09 Ocean render | PARTIAL (Unity shader) | AMBER | MODERATE |
| SF-10 AAR | PARTIAL (planned) | AMBER | MODERATE |
| SF-11 Safety | YES (basic E-stop) | GREEN | SHALLOW |
| SF-12 Sync | PARTIAL (Unity main loop) | AMBER | MODERATE |
| SF-13 Networking | NO (standalone) | RED | DEEP (deferred CORTEX) |
| SF-14 Threat AI | PARTIAL (D4 research) | AMBER | MODERATE |
| SF-15 Comms | NO | RED | DEEP (deferred) |

## Summary

**OVERALL RE COMPLEXITY: AMBER**

| Category | Count | % | Stage 3 Approach |
|----------|:-----:|:-:|-----------------|
| GREEN | 4 | 27% | WX pattern library |
| AMBER | 7 | 47% | Selective learning |
| RED | 4 | 27% | 3 of 4 deferred. Only SF-06 (AI) needs immediate DEEP work |

**Time budget calibration:** AMBER → 60-70% of full RED effort.
**Critical path:** SF-06 (AI adaptive training) = only RED SF requiring immediate action for LITE v1.0.
