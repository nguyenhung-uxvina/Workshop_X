# RE STAGE 2A-TVDT: TARGET VALUES — InVeris FATS vs WX LITE-PA2

**Date:** 2026-04-22

## TARGET VALUES DECISION TABLE

| Rank | Req ID | Parameter | Unit | FATS Value | WX LITE Target | WX vs FATS | Weight % |
|------|--------|-----------|------|-----------|---------------|------------|----------|
| 1 | FR-008/F-01 | **Recoil impulse** | N (peak) | ~60% real (~18-25N est. for 5.56mm) | **≥25N** (12.7mm) | **WX HIGHER** — different caliber, higher target | 15% |
| 2 | FR-016 | **Trigger pressure sensing** | resolution | Analog (0.1N est.) | Digital (on/off) | **FATS BETTER** — analog vs binary | 12% |
| 3 | FR-035 | **Coaching latency** | s | Real-time (<1s) | Post-session (minutes) | **FATS BETTER** — instant vs delayed | 12% |
| 4 | S-01 | **System latency** | ms | Unknown (real-time claim) | **≤50ms** | Unknown — WX has measured budget (46ms) | 10% |
| 5 | FR-022/S-07 | **Hit detection accuracy** | % | High (camera+OCR, est. >98%) | **≥95%** (ray-trace) | FATS likely higher — camera direct vs computed | 10% |
| 6 | G-03 | **Horizontal FOV** | degrees | **180°** (180MIL) | **180°** | **PARITY** | 8% |
| 7 | FR-018 | **Weapon cant sensing** | degrees | Yes (MEMS IMU, est. ±0.5°) | **None** | **FATS BETTER** — WX gap | 8% |
| 8 | K-03 | **Ship motion range** | degrees | **None** (no motion) | **±12° roll, ±8° pitch** | **WX BETTER** — FATS has zero | 8% |
| 9 | FR-029 | **Weapon variants** | count | **300+** | **5** (Phase 1: 2) | FATS more — but WX focused niche | 5% |
| 10 | FR-026 | **Concurrent trainees** | count | **15** (100MIL) / 5 (180MIL) | **1** (LITE) | FATS more — WX by design (LITE) | 5% |
| 11 | FR-042 | **System price** | USD | $200-500K+ | **$50-70K** | **WX 3-7× CHEAPER** | 5% |
| 12 | FR-012 | **Wireless weapon** | Y/N | Yes (Bluetooth) | No (wired) | FATS better mobility — WX fixed mount OK | 2% |

## SUMMARY SCORECARD

| Dimension | FATS Advantage | WX Advantage | Parity |
|-----------|---------------|-------------|--------|
| Recoil fidelity | | **WX** (if ≥25N achieved) | |
| Sensor suite | **FATS** (3 extra sensors) | | |
| Coaching | **FATS** (real-time + doctrine) | | |
| Maritime | | **WX** (only player) | |
| Motion platform | | **WX** (2-DOF) | |
| C-UAV focus | | **WX** (purpose-built) | |
| Multi-trainee | **FATS** (15 vs 1) | | |
| Price | | **WX** (3-7× cheaper) | |
| FOV | | | **TIE** (180°) |
| Sovereignty | | **WX** (Unity owned) | |
| **SCORE** | **3** | **5** | **1** |

**WX wins 5/9 comparative dimensions.** FATS advantages (sensors, coaching, multi-trainee) are addressable in Phase 3 or future variants.
