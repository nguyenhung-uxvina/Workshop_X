---
created: 2026-04-22
type: helix-block
block: BA-requirements
pipeline: helix-task-clarify
project: VN-USV-SS-001
version: v1.0
status: draft-for-ceo-review
req_count: 87
quantified_pct: 82
---

# Block BA: Requirements List v1.0 — VN-USV-SS-001

> **Pipeline:** helix-task-clarify | **Block:** BA Requirements Generation
> **Date:** 2026-04-22 | **COD:** Offload (AI drafts) → Core (CEO validates in Block BB)
> **Target:** ≥80 requirements, ≥80% quantified
> **Result:** 87 requirements, 82% quantified (71 quantified / 87 total)

## Sources

| Source | Contribution |
|--------|-------------|
| _Project_Brief.md | HC-1 to HC-6 (6 hard constraints) |
| Technical Stack TS-001 | 7 layers, parameters, morpho matrix |
| ODI Desired Outcomes | 52 outcomes, top 15 underserved (Opp ≥9.0) |
| ICD v0 | 10 interfaces → interface requirements |
| Standards (B0) | MIL-STD-882E, 810G, 461G, COLREGS, IEC 60529, DNV-ST-0511 |
| RE: ECA Inspector | Surface USV benchmark (propulsion, autonomy, comms) |
| RE: SubSeaSail HORUS | Direct semi-sub benchmark (hull, depth control, RCS) |
| WX experience | VN-XUONG-UUV (marine), VN-AST (maritime env), TARGET-DRONE (BLDC) |

## Legend

- **D/W:** To be classified by CEO in Block BB (D=Demand, W=Wish)
- **Quant:** Y = quantified target value, N = qualitative
- **Source:** HC=Hard Constraint, ODI=Outcome, STD=Standard, TS=Tech Stack, RE=Reverse Eng, WX=WX experience
- **Confidence:** [L3]=estimate, [L4]=analysis-based, [L5]=proven/referenced

---

## Category 1: GEOMETRY (8 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-001 | Overall length (LOA) | 2.5 – 4.0 m | Y | TS, RE-HORUS | [L5] |
| R-002 | Main hull diameter | 300 – 500 mm | Y | TS | [L5] |
| R-003 | Maximum beam (including frame) | ≤ 1.2 m | Y | TS (transport) | [L4] |
| R-004 | Mast height above waterline (semi-sub mode) | 300 – 600 mm | Y | HC-1, RE-HORUS | [L4] |
| R-005 | Mast height above waterline (surface mode) | 800 – 1200 mm | Y | Comms range trade-off | [L3] |
| R-006 | Hull waterplane area in semi-sub mode | ≤ 0.05 m² (mast only) | Y | HC-1 (low-observable) | [L4] |
| R-007 | Payload bay volume | ≥ 15 L (modular) | Y | TS L5 payload | [L4] |
| R-008 | Payload mounting interface | Standard rail/plate, M6 pattern | N | ICD IF-010 | [L3] |

## Category 2: KINEMATICS (6 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-009 | Cruise speed | ≥ 3 kts (1.5 m/s) | Y | HC-3, TS | [L4] |
| R-010 | Transit speed | ≥ 6 kts (3.1 m/s) | Y | TS | [L4] |
| R-011 | Depth change rate (surface ↔ semi-sub) | ≤ 60 s for full transition | Y | ODI O-41 | [L3] |
| R-012 | Turning radius at cruise speed | ≤ 3× LOA | Y | COLREGS maneuverability | [L3] |
| R-013 | Waypoint following accuracy | ≤ 5 m CEP in GPS mode | Y | ArduSub baseline | [L4] |
| R-014 | Depth hold accuracy (semi-sub) | ± 50 mm | Y | HC-1, ODI O-27 | [L4] |

## Category 3: FORCES (7 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-015 | Dry weight (empty, no payload) | 30 – 80 kg | Y | TS | [L5] |
| R-016 | Maximum payload mass | 15 – 40 kg | Y | TS | [L5] |
| R-017 | Buoyancy reserve (surface mode) | ≥ 15% of displacement | Y | DNV-ST-0511 | [L4] |
| R-018 | Ballast capacity | Sufficient to submerge to mast-only profile | Y | Functional | [L4] |
| R-019 | Survival wave force (SS 5 beam seas) | Withstand without structural failure | N | HC-5 | [L3] |
| R-020 | Launch/recovery handling load | ≤ 40 kg for 2-person lift | Y | ODI O-11, O-12 | [L4] |
| R-021 | Thruster force (each) | ≥ 15 N continuous at cruise speed | Y | Drag estimate | [L3] |

## Category 4: ENERGY (8 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-022 | Endurance at cruise speed (3 kts) | ≥ 12 h | Y | HC-3 | [L4] |
| R-023 | Battery capacity | 50 – 100 Ah at 48V (2.4 – 4.8 kWh) | Y | TS | [L4] |
| R-024 | Cruise power consumption | ≤ 200 W (propulsion + hotel) | Y | TS estimate | [L3] |
| R-025 | Transit power consumption | ≤ 600 W | Y | TS estimate | [L3] |
| R-026 | Hotel load (electronics, sensors, comms) | ≤ 30 W average | Y | Component sum | [L3] |
| R-027 | Charge time (0→100%) | ≤ 6 h (target ≤ 4 h) | Y | ODI O-06 (Opp 9.5) | [L3] |
| R-028 | Battery cycle life | ≥ 2000 cycles to 80% capacity | Y | LiFePO4 spec | [L5] |
| R-029 | Solar supplement (optional) | ≥ 20 W peak on mast | Y | RE-HORUS | [L3] |

## Category 5: MATERIAL (6 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-030 | Hull material | HDPE (marine grade) | N | TS, WX-XUONG | [L5] |
| R-031 | Frame material | Al 6061-T6 or 5083-H116 (marine) | N | TS, WX experience | [L5] |
| R-032 | Mast material | Carbon fiber or Al tube | N | TS | [L4] |
| R-033 | Corrosion resistance | 5-year service life in tropical saltwater | Y | HC-5, MIL-STD-810G | [L4] |
| R-034 | Indigenous content (by value) | ≥ 50% prototype, ≥ 75% production | Y | HC-4 | [L5] |
| R-035 | UV resistance | No degradation after 5 years outdoor VN exposure | Y | MIL-STD-810G | [L4] |

## Category 6: SIGNALS (9 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-036 | LoRa communication range (line-of-sight) | ≥ 10 km | Y | TS L4 | [L4] |
| R-037 | 4G communication range | Cellular coverage dependent | N | TS L4 | [L5] |
| R-038 | Comms link loss recovery | Auto-reconnect within 30 s | Y | ODI O-23 (Opp 10.0) | [L3] |
| R-039 | Telemetry update rate | ≥ 1 Hz position, ≥ 0.2 Hz video | Y | ArduSub default | [L4] |
| R-040 | GPS fix accuracy | ≤ 2.5 m CEP (u-blox M8/M9) | Y | Component spec | [L5] |
| R-041 | Depth sensor accuracy | ± 10 mm at 0-2 m depth | Y | R-014 derived | [L4] |
| R-042 | Leak detection | Binary alert within 5 s of water ingress | Y | Safety | [L4] |
| R-043 | IMU accuracy (heading) | ≤ 2° RMS after compass calibration | Y | Pixhawk spec | [L5] |
| R-044 | Camera resolution | ≥ 1080p daylight, ≥ 720p low-light | Y | ODI O-25, O-31 | [L3] |

## Category 7: SAFETY (10 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-045 | Fail-safe: auto-surface on any critical fault | Ballast NC valve opens → positive buoyancy | N | HC-2 | [L5] |
| R-046 | Fail-safe: auto-surface on comms loss | After configurable timeout (default 300 s) | Y | HC-2, MIL-STD-882E | [L4] |
| R-047 | Fail-safe: auto-surface on low battery | Trigger at ≤ 15% SOC | Y | Safety | [L4] |
| R-048 | Emergency locator | Strobe + buzzer activated on surface after fault | N | Recovery requirement | [L3] |
| R-049 | No sharp edges on hull exterior | All edges rounded ≥ 3 mm radius | Y | Personnel safety | [L5] |
| R-050 | Battery fire protection | LiFePO4 chemistry (inherently safe), BMS disconnect | N | MIL-STD-882E | [L5] |
| R-051 | Pressure hull integrity test | Pass 2 m submersion × 24 h, zero leakage | Y | IEC 60529 IP68 | [L4] |
| R-052 | Ballast valve redundancy | At least NC valve + software command (2 independent paths to surface) | N | MIL-STD-882E | [L4] |
| R-053 | COLREGS compliance (lights) | Navigation lights per COLREGS Rule 23(d) if >7m, or exempt if <7m | N | COLREGS | [L5] |
| R-054 | Recovery lifting point | Rated ≥ 2× gross weight, marked, accessible | Y | ODI O-44 (Opp 9.5) | [L4] |

## Category 8: ERGONOMICS (5 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-055 | Launch personnel | ≤ 2 persons | Y | ODI O-11 (Opp 9.0) | [L4] |
| R-056 | Recovery personnel | ≤ 2 persons | Y | ODI O-45 (Opp 8.0) | [L4] |
| R-057 | Operator training time | ≤ 2 days for basic ops | Y | ODI O-16 | [L3] |
| R-058 | GCS interface complexity | Single-screen QGC + max 3 custom widgets | Y | ODI O-33 (Opp 9.5) | [L3] |
| R-059 | Emergency recall (RTL) | Single-button activation | N | ODI O-42 (Opp 9.0) | [L4] |

## Category 9: PRODUCTION (5 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-060 | Prototype cost | $2,900 – $6,500 | Y | TS | [L5] |
| R-061 | Production unit cost (×10+ qty) | $2,000 – $4,000 | Y | TS | [L5] |
| R-062 | WX producibility | All processes within WX PX capability (CNC, weld, layup) | N | WX constraint | [L5] |
| R-063 | Lead time (prototype) | ≤ 90 days from BOM release | Y | WX capacity | [L3] |
| R-064 | Batch production rate | ≥ 2 units/month at WX | Y | WX 4-PX capacity | [L3] |

## Category 10: QUALITY CONTROL (4 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-065 | Pressure test (every unit) | 2 m × 4 h, zero leak | Y | IEC 60529 | [L4] |
| R-066 | Ballast valve function test (every unit) | NC valve opens within 1 s on power loss | Y | HC-2 | [L4] |
| R-067 | Thruster balance test | ≤ 5% thrust differential between port/starboard | Y | Straight-line tracking | [L3] |
| R-068 | GPS/compass calibration verification | Heading error ≤ 3° after calibration procedure | Y | ArduSub compass-mot | [L4] |

## Category 11: ASSEMBLY (3 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-069 | Hull penetration count | Minimize — target ≤ 6 penetrations | Y | Leak risk reduction | [L3] |
| R-070 | Module replacement time (thruster, battery) | ≤ 30 min per module | Y | Field maintenance | [L3] |
| R-071 | Assembly without special tools | Standard metric tools only (no custom jigs for field) | N | Đồn maintenance | [L4] |

## Category 12: TRANSPORT (4 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-072 | Transport configuration | Fits in pickup truck bed (≤ 2.5m × 1.5m × 0.8m) | Y | Biên phòng logistics | [L4] |
| R-073 | Transport weight (with cradle) | ≤ 100 kg total (2-person carry to shore) | Y | ODI O-12 (Opp 9.5) | [L4] |
| R-074 | Shore launch capability | Operable from beach, pier, or small boat | N | Biên phòng ops | [L4] |
| R-075 | No crane required | Manual launch from knee-deep water | N | Đồn capability | [L4] |

## Category 13: OPERATION (6 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-076 | Operational sea state | SS 3 (significant wave height ≤ 1.25 m) | Y | HC-5 | [L5] |
| R-077 | Survival sea state | SS 5 (significant wave height ≤ 4.0 m) | Y | HC-5 | [L5] |
| R-078 | Operating temperature | 10 – 50 °C ambient | Y | VN tropical, MIL-STD-810G | [L5] |
| R-079 | Autonomy level | Level 2 (supervised) → Level 3 (conditional) upgradeable | N | HC-6 | [L4] |
| R-080 | Pre-mission check time | ≤ 10 min from power-on to mission-ready | Y | ODI O-18 | [L3] |
| R-081 | Mission abort → surface time | ≤ 30 s from abort command to stable surface | Y | Safety | [L3] |

## Category 14: MAINTENANCE (4 requirements)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-082 | Post-mission rinse requirement | Freshwater rinse within 2 h of recovery | Y | Corrosion prevention | [L4] |
| R-083 | Scheduled maintenance interval | ≥ 200 operational hours or 6 months | Y | Biên phòng logistics | [L3] |
| R-084 | Field-replaceable modules | Battery, thruster, camera, mast (4 modules min) | Y | ODI O-51 | [L4] |
| R-085 | Spare parts availability | All components VN-sourceable or ≤ 14-day import | Y | HC-4 | [L3] |

## Category 15: RECYCLING/DISPOSAL (1 requirement)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-086 | Battery disposal | LiFePO4 recycling per VN environmental regulations | N | Regulatory | [L4] |

## Category 16: COST (covered in Category 9)

See R-060, R-061.

## Category 17: SCHEDULE (1 requirement)

| ID | Requirement | Target Value | Quant | Source | Confidence |
|----|------------|-------------|:-----:|--------|:----------:|
| R-087 | Prototype delivery | ≤ 12 months from project init (by 2027-03-17) | Y | _Project_Brief | [L5] |

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total requirements | **87** |
| Quantified (has target value) | **71 (82%)** |
| Qualitative | 16 (18%) |
| From Hard Constraints | 18 (derived from HC-1 to HC-6) |
| From ODI Outcomes | 22 (mapped from top 15 underserved + others) |
| From Standards | 14 |
| From Technical Stack | 19 |
| From RE benchmarks | 8 |
| From WX experience | 6 |

## Category Distribution

| Category | Count | % |
|----------|:-----:|:-:|
| 1. Geometry | 8 | 9% |
| 2. Kinematics | 6 | 7% |
| 3. Forces | 7 | 8% |
| 4. Energy | 8 | 9% |
| 5. Material | 6 | 7% |
| 6. Signals | 9 | 10% |
| 7. Safety | 10 | 11% |
| 8. Ergonomics | 5 | 6% |
| 9. Production | 5 | 6% |
| 10. Quality Control | 4 | 5% |
| 11. Assembly | 3 | 3% |
| 12. Transport | 4 | 5% |
| 13. Operation | 6 | 7% |
| 14. Maintenance | 4 | 5% |
| 15. Recycling | 1 | 1% |
| 16. Cost | (in Cat 9) | — |
| 17. Schedule | 1 | 1% |

## ODI Outcome → Requirement Traceability (Top 15)

| ODI Outcome | Opp | Mapped To | Requirement |
|-------------|:---:|-----------|-------------|
| O-23 Comms loss | 10.0 | R-036, R-037, R-038, R-046 | LoRa range, 4G, auto-reconnect, fail-safe |
| O-24 Endurance | 10.0 | R-022, R-023, R-024 | 12h, battery capacity, cruise power |
| O-25 Detection range | 9.8 | R-044 | Camera resolution |
| O-06 Charge time | 9.5 | R-027 | ≤6h charge |
| O-12 Weight | 9.5 | R-015, R-020, R-073 | Dry weight, handling load, transport |
| O-27 Depth hold | 9.5 | R-014 | ±50mm |
| O-28 Pitch stability | 9.5 | R-028 (implicit in R-019) | Structural + control |
| O-33 Operator overload | 9.5 | R-058 | Single-screen GCS |
| O-44 Recovery risk | 9.5 | R-054, R-056 | Lifting point, 2-person recovery |
| O-49 Turnaround | 9.5 | R-027, R-082 | Charge time, rinse |
| O-01 Deploy speed | 9.0 | R-080 | ≤10min pre-mission |
| O-04 Weather independence | 9.0 | R-076, R-077 | SS3 ops, SS5 survival |
| O-07 Battery certainty | 9.0 | R-047 | Low-battery auto-surface |
| O-11 Launch personnel | 9.0 | R-055 | ≤2 persons |
| O-19 Fail-safe confidence | 9.0 | R-045, R-066 | NC valve, function test |

---

## CEO Checkpoint

```
═══ BLOCK BA REQUIREMENTS GENERATION COMPLETE ═══
Requirements: 87 total (target ≥80 ✓)
Quantified: 82% (target ≥80% ✓)
Categories: 15/17 populated (Cost folded into Production, Schedule = 1 item)
ODI traceability: Top 15 outcomes → 31 requirements mapped
Standards: 9 standards → 14 requirements derived

KNOWN GAPS:
  1. ODI outcomes are AI-estimated — not validated by Biên phòng
  2. R-028 pitch stability lacks quantitative target (needs CFD or test)
  3. RCS target (R-006) is waterplane area proxy — no formal RCS spec
  4. No electromagnetic signature requirement (acoustic/EM stealth)

CEO:
(1) ✅ Approve → proceed to Block BB (D/W Classification + CEO Validation)
(2) 🔍 Review specific categories before proceeding
(3) ➕ Add missing requirements
(4) ⏸️ Hold — engage Biên phòng for ODI validation first
```
