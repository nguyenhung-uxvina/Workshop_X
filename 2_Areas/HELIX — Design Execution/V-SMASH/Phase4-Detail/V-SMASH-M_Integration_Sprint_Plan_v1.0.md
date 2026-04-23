---
project: V-SMASH-M
phase: 4
type: integration-sprint-plan
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
tracks: [SW-NO-HW, SW-WITH-HW, ELECTRONICS, MECHANICAL]
sprints: 11
sprint_duration_weeks: 2
total_weeks: 22
capacity_h_per_week: 25
---

# V-SMASH-M (Micro-Sight) — Integration Sprint Plan v1.0

**Kế hoạch tích hợp phần mềm – điện tử – cơ khí**
**Version 1.0 | 2026-03-02**

---

## 1. Overview

### 1.1 Purpose

This document defines the sprint-based integration schedule for V-SMASH-M, covering:

- **Software integration** (SW-AI + SW-BAL + SW-COM + SW-FW across 4 test environments)
- **Electronics integration** (PCB design → fabrication → bring-up → sensor integration)
- **Mechanical integration** (tooling → housing production → sub-assembly → final assembly)

All tracks run in parallel and converge at **L2 HW-SW integration** (Sprint 7), culminating in **FAT** (Sprint 11).

### 1.2 Capacity and Constraints

| Parameter | Value |
|-----------|-------|
| Sprint duration | 2 weeks |
| Total sprints | 11 (S01–S11) |
| Total calendar time | ~22 weeks from S01 start |
| Engineering capacity | 25h/week (~50h/sprint) |
| Critical blocker | Jetson Orin Nano production unit (OI-VnV-01) — not yet ordered |
| Injection mold lead time | 6–8 weeks (must order by end of S02) |
| PCB fab lead time | 3–4 weeks (must order by end of S02) |

### 1.3 Integration Tracks

| Track | ID | Description | HW Required | Blocker? |
|-------|----|-------------|------------|---------|
| SW — No HW | A | SW-AI + SW-BAL unit tests and ENV-SIM integration | None (x86) | No |
| SW — With HW | B | SW-COM (nRF52840-DK) + SW-FW (Jetson) | nRF52840-DK ✓, Jetson ✗ | SW-FW blocked until S05 |
| Electronics | C | PCB design → fab → bring-up → sensor integration | PCB fab (3–4 wk) | Order timing |
| Mechanical | D | 3D print → mold order → housing → assembly | Mold (6–8 wk) | Order timing |

### 1.4 V&V Level Mapping

| Sprint | V&V Level | Description |
|--------|-----------|-------------|
| S01–S03 | L1a (unit) | SW module unit tests (56 TCs) |
| S03–S05 | L1b (SW integration) | Multi-module ENV-SIM / ENV-GPU / ENV-BLE |
| S06–S07 | L2 (HW-SW) | 7 L2 test cases with production hardware |
| S08 | L2 completion | Full L2 pass gate |
| S09–S10 | L3 (qualification) | T01–T14 system qualification |
| S11 | L4 (FAT) | Factory Acceptance Test |

---

## 2. Critical Path

```
WEEK:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22
SPRINT: S01   S02   S03   S04   S05   S06   S07   S08   S09   S10   S11
        ├─────────────────────────────────────────────────────────────────┤

TRACK A (SW, no HW):
        [AI+BAL unit ][AI+BAL INT-SIM][ENV-GPU/BLE  ][SW-INT done   ]

TRACK B (SW, with HW):
        [COM unit    ][COM BLE HW    ][■■ BLOCKED ■■][SW-FW port+INT][FW done]
                       (nRF52840-DK)  (Jetson needed) (Jetson arrives S05)

TRACK C (Electronics):
        [PCB design  ][ORDER PCB─────────────────────][PCB bring-up  ][Sensor INT]
                       └──3–4 wk fab lead──────────────┘

TRACK D (Mechanical):
        [3D print    ][ORDER MOLD────────────────────────────────────][1st housing]
                       └──6–8 wk mold lead────────────────────────────┘

CONVERGENCE:
                                                        [L2 HW-SW tests ][L3 qual ][FAT]
                                                              S07            S09-10   S11

CRITICAL PATH: A+B-FW → ENV-FULL → L2 → L3 → FAT
               (constrained by Jetson availability — target: arrive by week 9 = start of S05)
```

**Critical path activities (must-not-slip):**
1. **Jetson Orin Nano order** → must be placed no later than **week 1 of S01** (lead time 8–10 weeks → arrive S05)
2. **Injection mold order** → must be placed by end of **S02** (arrive S07–S08)
3. **PCB order** → must be placed by end of **S02** (arrive S04)
4. **SW-AI + SW-BAL unit tests pass** (S01–S02) → gate to SW integration (S03)
5. **ENV-FULL SW integration pass** (S05) → gate to L2 tests (S07)
6. **L3 qualification pass** (S09–S10) → gate to FAT (S11)

---

## 3. Sprint Plans

---

### SPRINT S01 — SW Unit Tests: AI + BAL (Weeks 1–2)

**Theme:** Get SW-AI and SW-BAL to unit test pass on ENV-SIM (x86, no hardware).

#### Track A — SW-AI Unit Tests

| Task | Owner | Hours | TCs |
|------|-------|-------|-----|
| Set up pytest + CMocka test framework on dev machine | SW-AI Lead | 4h | — |
| Implement AI-PP-01 to AI-PP-03 (preprocessing tests) | SW-AI | 6h | 3 TCs |
| Implement AI-DET-01 to AI-DET-03 (detection/classification) | SW-AI | 8h | 3 TCs |
| Implement AI-IFF-01 to AI-IFF-04 (IFF classification) | SW-AI | 10h | 4 TCs |
| Implement AI-GATE-01 to AI-GATE-04 (engagement gate logic) | SW-AI | 10h | 4 TCs |
| Implement AI-TIMING-01 (inference latency ≤80ms) | SW-AI | 4h | 1 TC |
| Run gcov/lcov coverage report | SW-AI | 2h | — |

**Safety class C TCs in this sprint:** AI-GATE-01 to AI-GATE-04 (100% pass mandatory before S02)

#### Track A — SW-BAL Unit Tests

| Task | Owner | Hours | TCs |
|------|-------|-------|-----|
| Set up CMocka for BAL (C module) | SW-BAL Lead | 2h | — |
| Implement BAL-COMP-01 to BAL-COMP-06 (ballistic accuracy) | SW-BAL | 12h | 6 TCs |
| Implement BAL-PRED-01 to BAL-PRED-03 (trajectory predictor) | SW-BAL | 6h | 3 TCs |
| Implement BAL-OUT-01 to BAL-OUT-03 (output struct size check) | SW-BAL | 4h | 3 TCs |
| Run gcov coverage report | SW-BAL | 2h | — |

#### Track D — Mechanical: 3D Print Prototype Review

| Task | Owner | Hours |
|------|-------|-------|
| Review current 3D print prototype vs Phase 3 layout drawings | ME Lead | 4h |
| Document deviation list (fit check, rail mount, battery door) | ME Lead | 2h |
| **Place injection mold RFQ** (lead time 6–8 wk → must decide by S02) | PM | 2h |

#### Sprint S01 Entry Criteria
- SW-AI and SW-BAL source code at tagged commit (v0.9.0 or later)
- Dev machine with x86, Python 3.10+, CMocka installed
- Phase 3 layout drawings finalized (ME Lead confirm)

#### Sprint S01 Exit Gate
- [ ] AI-GATE-01 to AI-GATE-04: 4/4 PASS (safety class C — mandatory)
- [ ] AI unit tests total: ≥14/15 PASS
- [ ] BAL-COMP-01 to BAL-COMP-06: all pass (reference value ±5%)
- [ ] BAL unit tests total: ≥11/12 PASS
- [ ] gcov line coverage: SW-AI ≥80%, SW-BAL ≥80%
- [ ] 3D print deviation list documented
- [ ] Mold RFQ sent (or decision to extend to S02 with rationale)

**Sprint S01 budget: ~70h** (Track A: ~50h, Track D: ~8h, overhead: ~12h)

---

### SPRINT S02 — SW Unit Tests: COM + FW-HAL; PCB + Mold Orders (Weeks 3–4)

**Theme:** Complete SW-COM unit tests; start SW-FW HAL tests on simulated GPIO. Place PCB and mold orders.

#### Track B — SW-COM Unit Tests (nRF52840-DK)

| Task | Owner | Hours | TCs |
|------|-------|-------|-----|
| Flash nRF52840-DK with SW-COM firmware | SW-COM Lead | 3h | — |
| Implement COM-SPI-01 to COM-SPI-05 (SPI driver tests) | SW-COM | 12h | 5 TCs |
| Implement COM-BLE-01 to COM-BLE-06 (GATT characteristic tests) | SW-COM | 12h | 6 TCs |
| Implement COM-LOG-01 to COM-LOG-04 (flash logger tests) | SW-COM | 8h | 4 TCs |
| Implement COM-HLTH-01 to COM-HLTH-03 (health monitor tests) | SW-COM | 6h | 3 TCs |
| Coverage report (nRF52840-DK gcov equivalent) | SW-COM | 2h | — |

**Note:** COM-BLE tests require nRF52840-DK + reference phone/tablet. BLE pairing test (COM-BLE-01) is prerequisite for HAT H-04.

#### Track B — SW-FW HAL Skeleton (x86 stub, no Jetson)

| Task | Owner | Hours | TCs |
|------|-------|-------|-----|
| Create x86 HAL stub (GPIO mock, SPI mock, thermal mock) | SW-FW Lead | 8h | — |
| Implement FW-HAL-01 to FW-HAL-03 (GPIO tests on stub) | SW-FW | 6h | 3 TCs |
| Implement FW-HAL-04 (SAFETY_OVERRIDE logic test — x86 stub) | SW-FW | 4h | 1 TC (Class C) |
| Document: which FW tests require real Jetson HW | SW-FW | 2h | — |

**Note:** FW-HAL-05 (Jetson thermal sensor) and FW-FSM tests require production Jetson. Defer to S05.

#### Track C — Electronics: PCB Design Final + Order

| Task | Owner | Hours |
|------|-------|-------|
| PCB design review: confirm BOM against ICD struct sizes (overlay_t=270B, SPI timing) | HW Lead | 6h |
| Finalize Gerber files | HW Lead | 4h |
| **Place PCB fabrication order** (3–4 wk lead → arrive S04) | PM | 2h |
| Component pre-order (Jetson-related ICs, nRF52840 modules) | PM | 4h |

#### Track D — Mechanical: Mold Order + Jigs

| Task | Owner | Hours |
|------|-------|-------|
| **Place injection mold order** (6–8 wk lead → arrive S06–S07) | PM | 4h |
| Assembly jig design: bore-sight alignment fixture (PR-11) | ME Lead | 8h |
| Assembly jig design: torque driver guide for M2 fasteners | ME Lead | 4h |

**HARD DEADLINE S02:** PCB order placed + Mold order placed. If either slips past end of S02, FAT date slides 1 sprint per week of delay.

#### Sprint S02 Exit Gate
- [ ] COM unit tests: ≥17/18 PASS (COM-BLE-01 must pass)
- [ ] FW-HAL-04 (SAFETY_OVERRIDE — Class C): PASS
- [ ] FW-HAL stubs committed and documented
- [ ] PCB order placed — order confirmation received (mandatory)
- [ ] Mold order placed — order confirmation received (mandatory)
- [ ] PR-11 bore-sight jig: design ≥50% complete

**Sprint S02 budget: ~80h** (Track B: ~43h, Track C: ~16h, Track D: ~16h, overhead: ~5h)

---

### SPRINT S03 — SW Integration: ENV-SIM (Weeks 5–6)

**Theme:** First multi-module SW integration on ENV-SIM. AI → BAL → COM (mocked SPI).

#### Track A — ENV-SIM Integration

| Task | Owner | Hours |
|------|-------|-------|
| Build ENV-SIM integration harness (Python orchestrator, mock SPI) | SW-AI Lead | 8h |
| INT-01: AI pipeline end-to-end on ENV-SIM (frame → detection → gate) | SW-AI + SW-BAL | 8h |
| INT-02: AI→BAL ICD validation (ai_output_t=48B, bal_output_t=36B) | SW-BAL + SW-AI | 6h |
| INT-03: BAL→COM output over mock SPI (overlay_t=270B struct pack check) | SW-BAL + SW-COM | 6h |
| INT-04: Engagement log write/read cycle (engagement_log_record_t=64B) | SW-COM | 4h |
| INT-05: Health stats aggregation (ai_health_stats_t=44B) | SW-AI + SW-COM | 4h |
| ICD boundary validation: all struct sizes match SW-ICD v1.0 | All SW leads | 4h |
| Fix integration defects | All | 8h |

**Pass criteria:** All 5 integration scenarios pass with 0 struct size mismatches, 0 data corruption on ring buffer.

#### Track B — SW-FW: HAL Completion on x86 Stub

| Task | Owner | Hours |
|------|-------|-------|
| Implement FW-HAL-05 mock (thermal sensor — returns synthetic values) | SW-FW | 4h |
| Implement FW-HAL-06 (SPI write fire gate test on stub) | SW-FW | 6h |
| Document Jetson-specific items deferred to S05 | SW-FW | 2h |

#### Track D — Mechanical: Jig Completion + Pre-Assembly Trial

| Task | Owner | Hours |
|------|-------|-------|
| PR-11 jig: complete design + 3D print prototype jig | ME Lead | 8h |
| Torque jig: complete + test on 3D print housing | ME Lead | 4h |
| Pre-assembly trial: 3D print housing + PCB placeholder + battery mock | ME Lead | 6h |

#### Sprint S03 Exit Gate
- [ ] INT-01 to INT-05: all PASS on ENV-SIM
- [ ] 0 ICD struct size mismatches (all 5 structs validated)
- [ ] Ring buffer: no data corruption after 1000-cycle soak
- [ ] FW-HAL complete on x86 stub (FW-HAL-01 to FW-HAL-06)
- [ ] PR-11 jig: 3D print available for dimensional check

**Sprint S03 budget: ~70h** (Track A: ~48h, Track B: ~12h, Track D: ~18h, overhead: ~2h — spread over 2 weeks)

---

### SPRINT S04 — ENV-GPU Timing + ENV-BLE + PCB Arrival (Weeks 7–8)

**Theme:** SW-AI timing validation on GPU hardware; SW-COM BLE hardware integration; PCB arrives and enter bring-up.

#### Track A — ENV-GPU Timing Validation

| Task | Owner | Hours |
|------|-------|-------|
| Set up ENV-GPU (Jetson Xavier devkit or x86+CUDA fallback) | SW-AI Lead | 6h |
| INT-SYS-02: YOLOv8-nano inference latency ≤80ms at 30fps (10 min soak) | SW-AI | 8h |
| INT-SYS-03: Thermal throttle simulation (85°C forced, verify pipeline continues) | SW-AI | 6h |
| Record timing distribution: p50, p95, p99 | SW-AI | 4h |
| Compare ENV-GPU results vs ENV-SIM (delta expected: <5ms for AI-only path) | SW-AI | 3h |

**Pass criteria:** p99 latency ≤80ms, 0 pipeline failures during 10-min soak.

#### Track B — ENV-BLE: SW-COM + SW-AI HW Integration

| Task | Owner | Hours |
|------|-------|-------|
| Connect nRF52840-DK to Jetson devkit via SPI | SW-COM + SW-AI | 6h |
| INT-BLE-01: BLE pairing and GATT read on ENV-BLE | SW-COM | 4h |
| INT-BLE-02: HEALTH_TELEMETRY over BLE during AI inference (live data) | SW-COM + SW-AI | 6h |
| INT-BLE-03: Log flush cycle on real flash (COM-LOG timing) | SW-COM | 4h |
| Stress test: 4h BLE continuous stream → check log integrity | SW-COM | 4h |

#### Track C — PCB Bring-Up (PCB arrives this sprint)

| Task | Owner | Hours |
|------|-------|-------|
| Receive PCB → visual inspection (solder quality, component placement) | HW Lead | 4h |
| Power-on test: verify 3.3V, 1.8V, Vin rails at correct voltages | HW Lead | 4h |
| JTAG/SWD access: confirm Jetson module boots from PCB | HW Lead | 4h |
| nRF52840 on PCB: confirm SPI comms with Jetson via PCB traces | HW + SW-COM | 4h |
| Sensor power rails: confirm IMU + OLED Vdd correct | HW Lead | 3h |
| Document any PCB bring-up issues → ECO log | HW Lead | 3h |

**Risk:** If PCB bring-up reveals layout issues, 2-week re-spin adds 1 sprint to C-track. This does NOT affect SW tracks A and B.

#### Sprint S04 Exit Gate
- [ ] ENV-GPU: p99 inference latency ≤80ms (pass)
- [ ] ENV-BLE: BLE pair + HEALTH_TELEMETRY read (pass)
- [ ] PCB power rails: all nominal
- [ ] PCB nRF52840 SPI comms: functional
- [ ] No blocking PCB bring-up issues (ECO log maintained)

**Sprint S04 budget: ~70h** (Track A: ~27h, Track B: ~24h, Track C: ~22h, overhead: ~7h — adjust per actual hours)

---

### SPRINT S05 — Jetson Production Unit Arrives; SW-FW Port + ENV-FULL Bring-Up (Weeks 9–10)

**Theme:** Jetson Orin Nano production unit arrives. SW-FW ported to production HW. ENV-FULL assembled for first time.

**Gate requirement:** Jetson Orin Nano production unit must be in-hand by start of S05. If not received, SW-FW porting and all subsequent L2 tests slip by 1 sprint per week of delay. PM to confirm tracking 2 weeks before S05.

#### Track B — SW-FW: Port to Jetson Orin Nano Production

| Task | Owner | Hours |
|------|-------|-------|
| Flash L4T BSP to production Jetson Orin Nano | SW-FW Lead | 4h |
| HAL bring-up: GPIO fire gate on production Jetson | SW-FW | 6h |
| FW-HAL-05: Thermal sensor read from production Jetson (real sensor) | SW-FW | 4h |
| FW-HAL-06: SPI write fire gate test on production Jetson + PCB | SW-FW | 6h |
| FW-FSM-01 to FW-FSM-06: FSM state machine tests (first 6 states) | SW-FW | 12h |
| FW-WDG-01 to FW-WDG-04: Watchdog tests | SW-FW | 8h |
| FW-THERM-01 to FW-THERM-04: Thermal management tests | SW-FW | 8h |

#### Track A+B — ENV-FULL Assembly + First Boot

| Task | Owner | Hours |
|------|-------|-------|
| Assemble ENV-FULL: production Jetson + PCB + nRF52840 + OLED + sensors | HW + SW Leads | 6h |
| First boot on ENV-FULL: confirm full SW stack loads (FW + AI + BAL + COM) | All SW | 4h |
| First AI inference on ENV-FULL: confirm camera + pipeline running | SW-AI + SW-FW | 4h |
| IFF classification on ENV-FULL: test GREEN/AMBER/RED targets | SW-AI + SW-FW | 4h |

#### Track C — Electronics: Sensor Integration on PCB

| Task | Owner | Hours |
|------|-------|-------|
| IMU integration: calibrate on PCB → confirm SPI data valid | HW Lead | 4h |
| OLED integration: confirm all 4 reticle states on PCB | HW + SW-FW | 4h |
| Battery management IC: confirm charge/discharge cycle on PCB | HW Lead | 4h |

#### Sprint S05 Exit Gate
- [ ] Jetson Orin Nano production unit in-hand (mandatory)
- [ ] FW-FSM-01 to FW-FSM-06: PASS
- [ ] FW-WDG-01 to FW-WDG-04: PASS
- [ ] ENV-FULL first boot: full SW stack loads, no crash in 1h soak
- [ ] OLED: all 4 reticle states display correctly
- [ ] IMU: SPI data valid

**Sprint S05 budget: ~80h** (Track A+B convergence: ~48h, Track C: ~12h, ENV-FULL assembly: ~10h, overhead: ~10h)

---

### SPRINT S06 — SW-FW Completion + First Housing + L2 Prep (Weeks 11–12)

**Theme:** Complete all SW-FW unit tests on production Jetson. First production-quality housing available from mold (or prototype mold). Begin L2 test preparation.

#### Track B — SW-FW: Remaining FSM Tests + Safety-Critical

| Task | Owner | Hours |
|------|-------|-------|
| FW-FSM-07 to FW-FSM-12: remaining FSM tests | SW-FW | 12h |
| FW-HAL-04 re-run on production HW (SAFETY_OVERRIDE — Class C) | SW-FW | 4h |
| SW-FW unit test complete: generate final coverage report | SW-FW | 4h |

#### Track A+B — ENV-FULL Integration: Full SW Stack

| Task | Owner | Hours |
|------|-------|-------|
| INT-FULL-01: Full engagement cycle on ENV-FULL (STANDBY→ALERT→AMBER→RED→fire gate) | All SW | 8h |
| INT-FULL-02: SAFETY_OVERRIDE end-to-end (GREEN IFF → gate never opens) | SW-AI + SW-FW | 6h |
| INT-FULL-03: BLE health telemetry during full engagement cycle | SW-COM + SW-FW | 4h |
| INT-FULL-04: Log flush and recovery after watchdog reset | SW-FW + SW-COM | 4h |
| Soak test: 4h continuous operation ENV-FULL (no crashes, no thermal shutdown) | All SW | — (unattended) |

**Safety class C — INT-FULL-02 (SAFETY_OVERRIDE):** Requires dual sign-off (SW-AI Lead + SW-FW Lead) before L2 entry.

#### Track C — PCB: Production-Quality PCB Assembly

| Task | Owner | Hours |
|------|-------|-------|
| Receive production-quality PCBs (if re-spin in S04 required) | HW Lead | 2h |
| Assemble 3 units: PCB + all components (production-representative) | HW | 8h |
| Functional test each unit: power rails + SPI + BLE basic | HW | 6h |

#### Track D — Mechanical: First Injection-Molded Housing

| Task | Owner | Hours |
|------|-------|-------|
| Receive first injection-mold shots (prototype tools) | ME Lead | 2h |
| First article inspection: dimensional check against Phase 3 drawings | ME Lead | 6h |
| Rail mount fit check: mount on reference Picatinny rail | ME Lead | 4h |
| Battery door function check: single-hand, latch, <20N force | ME Lead | 3h |
| Document deviations → ECO if needed | ME Lead | 2h |

#### Sprint S06 Exit Gate
- [ ] All 21 SW-FW unit tests: PASS
- [ ] FW-HAL-04 (SAFETY_OVERRIDE Class C): PASS on production Jetson
- [ ] INT-FULL-01 to INT-FULL-04: PASS
- [ ] INT-FULL-02 dual sign-off: SW-AI Lead + SW-FW Lead (mandatory)
- [ ] 4h ENV-FULL soak: 0 crashes, 0 thermal shutdowns
- [ ] 3 production-representative PCB units: functional
- [ ] First housing: rail mount fits, battery door functions

**Sprint S06 budget: ~80h** (SW: ~42h, PCB assembly: ~16h, ME: ~17h, overhead: ~5h)

---

### SPRINT S07 — L2 HW-SW Integration Tests (Weeks 13–14)

**Theme:** Execute all 7 L2 test cases against the VnV Master Plan. This is the hardware integration gate.

#### L2 Test Execution

Execute per V-SMASH-M_VnV_Master_Plan_v1.0 §5.

| L2 Test | Description | Environment | Hours |
|---------|-------------|-------------|-------|
| L2-01 | AI pipeline E2E on production Jetson (latency + accuracy) | ENV-FULL | 8h |
| L2-02 | HITL gate logic: all 4 fire conditions (SAFETY_OVERRIDE) | ENV-FULL | 6h |
| L2-03 | BLE + SPI comms under full load | ENV-FULL | 4h |
| L2-04 | Thermal management: Tj=87°C forced test (thermal throttle trigger) | ENV-FULL | 6h |
| L2-05 | Bore-sight alignment: 3 units, ≤0.2 mrad requirement | ENV-FULL + PR-11 | 8h |
| L2-06 | Battery life projection: 30min at 80% SoC (≥60min extrapolated) | ENV-FULL | 4h |
| L2-07 | Watchdog + fallback: inject fault, verify WDG recovery | ENV-FULL | 4h |

**Safety-critical L2 tests:**
- **L2-02 (HITL gate logic):** SW Lead + HW Lead dual sign-off
- **L2-05 (bore-sight):** Use PR-11 fixture; record per-unit laser spot position photo

#### Defect Resolution Budget

| Severity | Action | Hours Budgeted |
|----------|--------|----------------|
| Critical (gate fail) | Fix and retest same sprint | 12h |
| Major (degraded but passable) | Root cause and fix — may slip to S08 | 8h |
| Minor (cosmetic / documentation) | Log → fix before L3 | 4h |

#### Sprint S07 Exit Gate (L2 Gate)

- [ ] L2-01: latency p99 ≤80ms, accuracy ≥70% mAP (PASS)
- [ ] L2-02: all 4 HITL conditions (PASS) — dual sign-off obtained
- [ ] L2-03: BLE HEALTH_TELEMETRY live during engagement cycle (PASS)
- [ ] L2-04: Tj=87°C test — throttle triggered, no shutdown, pipeline continues (PASS)
- [ ] L2-05: bore-sight ≤0.2 mrad on all 3 units (PASS)
- [ ] L2-06: ≥60 min battery life extrapolated at 80% SoC (PASS)
- [ ] L2-07: WDG recovery within 5s (PASS)
- [ ] L2 test report signed: HW Lead + SW Lead

**Sprint S07 budget: ~70h** (L2 tests: ~40h, defect resolution: ~24h, reporting: ~6h)

---

### SPRINT S08 — Production Assembly + Pre-L3 Qualification Setup (Weeks 15–16)

**Theme:** Assemble production-representative units from final housing + PCBs. Instrument and prepare for L3 qualification.

#### Production Assembly (Track C + D Convergence)

| Task | Owner | Hours |
|------|-------|-------|
| Receive production housing (from mold — final shots) | ME Lead | 2h |
| Sub-assembly batch: 5 units (PCB into housing, torque to spec, bore-sight per B3 process plan) | ME + HW | 20h |
| Per-unit functional check: power-on, BLE pair, OLED states, rail mount | ME + SW | 10h |
| Bore-sight calibration: each unit bore-sighted on PR-11 to ≤0.1 mrad | ME | 8h |
| Issue bore-sight certificates (per unit serial number) | QA | 4h |
| BOM as-built: record per-unit serial → component lot traceability | QA | 4h |

#### L3 Qualification Preparation

| Task | Owner | Hours |
|------|-------|-------|
| Coordinate with external test lab: shock (T10 — 10,000G), EMI (T12), IP66 (T08) | PM | 4h |
| Prepare qualification test units (2 units for destructive tests, 3 for non-destructive) | QA | 4h |
| Ship units to external lab (if required for T10/T12) | PM | 2h |
| Instrument units for thermal (T07), vibration (T11) | HW | 6h |

#### Sprint S08 Exit Gate
- [ ] 5 production-representative units assembled, bore-sighted, and functionally checked
- [ ] All bore-sight certificates issued (≤0.1 mrad — factory level)
- [ ] BOM as-built completed for all 5 units
- [ ] External lab appointment confirmed for T08/T10/T12
- [ ] L3 test units shipped/ready

**Sprint S08 budget: ~64h** (assembly: ~44h, L3 prep: ~20h)

---

### SPRINT S09 — L3 System Qualification Tests T01–T07 (Weeks 17–18)

**Theme:** Execute first half of T01–T14 qualification tests.

Execute per V-SMASH-M_Test_Requirements_v1.0 and VnV Master Plan §6.

| Test | Description | Method | Hours |
|------|-------------|--------|-------|
| T01 | Effective range ≥150m: target recognition at 150m | Field | 8h |
| T02 | OLED visibility: 500+ lux, all 4 states | Lab bench | 4h |
| T03 | AI decision accuracy ≥70% mAP (100-image set) | Lab (GPU) | 6h |
| T04 | HITL verification: gate logic formal test at system level | Lab — SAFETY | 8h |
| T05 | Aiming precision ≤0.5 mrad bore-sight repeatability | Lab bench + PR-11 | 6h |
| T06 | Weight ≤300g (production unit weighed) | Lab bench | 1h |
| T07 | Operating temperature: -10°C to +55°C thermal soak | Thermal chamber | 12h |

**T04 is safety-critical:** QA Officer + Customer Kỹ thuật co-witness required (per OI-VnV-03).

#### Sprint S09 Exit Gate
- [ ] T01–T07: all PASS (or documented deviations with disposition)
- [ ] T04 dual sign-off obtained (QA Officer + Customer Kỹ thuật)
- [ ] T07 thermal soak: 0 failures across -10°C to +55°C
- [ ] All test records filed with unit serial traceability

**Sprint S09 budget: ~65h** (tests: ~45h, defect resolution: ~12h, documentation: ~8h)

---

### SPRINT S10 — L3 System Qualification Tests T08–T14 (Weeks 19–20)

**Theme:** Complete qualification test suite. All 14 tests pass → L3 gate signed.

| Test | Description | Method | Hours |
|------|-------------|--------|-------|
| T08 | IP66 dust/water ingress protection | External lab | — (ext lab) |
| T09 | AI False Positive Rate ≤2% at 150m (field conditions) | Field — SAFETY | 12h |
| T10 | Drop/shock resistance: 10,000G sabot | External lab | — (ext lab) |
| T11 | Battery cycle life: 500 charge/discharge cycles (projection) | Lab | 8h |
| T12 | EMI/EMC compliance (MIL-STD or TCVN equivalent) | External lab | — (ext lab) |
| T13 | Maintainability: L1 field maintenance ≤15 min (battery swap, rail mount) | Lab bench | 4h |
| T14 | BLE range ≥20m in indoor environment | Field | 4h |

**T09 is safety-critical:** VM-Y04 FPR ≤2% [SAFETY-CRITICAL]. Requires field conditions, ≥100 passes, dual signature: WX HW Lead + Customer Kỹ thuật (OI-VnV-03).

#### L3 Gate Review

| Task | Hours |
|------|-------|
| Compile T01–T14 qualification reports | 6h |
| Compile system qualification package (all B-series documents) | 4h |
| L3 Gate review meeting: present pass/fail status, resolve any open items | 4h |
| Obtain L3 Gate sign-off: WX QA Officer + Customer Kỹ thuật | 2h |

#### Sprint S10 Exit Gate (L3 Gate — Gateway to FAT)
- [ ] T08–T14: all PASS (external lab reports received)
- [ ] T09 dual sign-off: WX HW Lead + Customer Kỹ thuật (mandatory)
- [ ] T11: ≥1 full cycle completed, extrapolation documented
- [ ] System qualification package: all 10 documents complete and signed (per HAT §3)
- [ ] L3 Gate signed: WX QA + Customer Kỹ thuật

**Sprint S10 budget: ~60h** (in-house tests: ~28h, external lab coordination: ~10h, L3 gate: ~16h, documentation: ~6h)

---

### SPRINT S11 — Factory Acceptance Test (FAT) (Weeks 21–22)

**Theme:** Execute FAT on production units per V-SMASH-M_FAT_Procedure_v1.0. Prepare delivery package.

#### FAT Execution (Per FAT Procedure v1.0)

| FAT Stage | Tests | Hours |
|-----------|-------|-------|
| Pre-FAT: Entry check, SW version confirm, config baseline | FAT-01–FAT-02 | 2h |
| Mechanical: visual, housing, rail mount, battery door | FAT-03–FAT-04 | 3h |
| Optical + Aiming: bore-sight ≤0.2 mrad per unit | FAT-05 [SAFETY] | 4h per unit |
| Electrical: power-on, boot, battery life | FAT-06–FAT-07 | 3h |
| Software: SW version, AI accuracy, OLED states | FAT-08–FAT-09 | 4h |
| HITL: gate logic all 4 conditions | FAT-10 [SAFETY] | 3h |
| BLE: pair, GATT, range | FAT-11 | 2h |
| Environmental: IP66 spot check, temperature function | FAT-12–FAT-13 | 4h |
| Maintainability: L1 field maintenance demo | FAT-14 | 2h |
| Batch: SW build manifest, batch qualification review | FAT-15–FAT-16 | 3h |
| FAT sign-off and delivery package assembly | — | 4h |

**FAT-05 and FAT-10 are [SAFETY-CRITICAL]:** Require QA Officer co-signature.

#### Delivery Package Assembly

| Item | Owner |
|------|-------|
| FAT record (signed by all 4 roles) | QA |
| B1 YCKT, B4 User Manual, B5 Maintenance Manual, B6 DMKTKT | Engineering |
| Bore-sight certificates (per unit) | QA |
| SW build manifest (git tag + hash v1.0.0) | SW Lead |
| Battery UN38.3 certificate | PM |
| System qualification reports T01–T14 | QA |
| BOM as-built (per unit serial) | QA |

#### Sprint S11 Exit Gate (FAT Gate — Delivery Authorization)
- [ ] FAT-01 to FAT-16: all MANDATORY tests PASS
- [ ] FAT-05 bore-sight: ≤0.2 mrad on all units (QA Officer co-sign)
- [ ] FAT-10 HITL: all 4 gate conditions correct (QA Officer co-sign)
- [ ] Delivery package: all 10 documents present and signed
- [ ] FAT record signed: Customer Representative + WX QA + WX HW Lead + WX SW Lead
- [ ] Units sealed in transport packaging per B6 DMKTKT

**Sprint S11 budget: ~65h** (FAT execution: ~40h, documentation/delivery package: ~15h, buffer: ~10h)

---

## 4. Hardware Procurement Schedule

| Item | Order By | Lead Time | Expected Arrival | Sprint Needed | Priority |
|------|----------|-----------|-----------------|---------------|---------|
| **Jetson Orin Nano (production module)** | **S01 Week 1** | **8–10 weeks** | **S05** | **S05 (critical path)** | **CRITICAL** |
| Injection mold tooling | S02 end | 6–8 weeks | S06–S07 | S08 (assembly) | HIGH |
| PCB fabrication (first run) | S02 end | 3–4 weeks | S04 | S04 (bring-up) | HIGH |
| nRF52840-DK (additional units) | S01 | 1–2 weeks | S02 | S02 (COM tests) | MEDIUM |
| Reference 1913 Picatinny rail (for test fixture) | S01 | 1 week | S02 | S07 (L2-05) | MEDIUM |
| 21700 battery cells (production lot) | S06 | 2–3 weeks | S07 | S08 (assembly) | MEDIUM |
| External lab bookings (T08, T10, T12) | S06 | Book 4 weeks ahead | S09–S10 | S09–S10 | HIGH |

---

## 5. Resource Allocation by Sprint

| Sprint | SW (h) | HW/Electronics (h) | Mechanical (h) | PM/QA (h) | Total (h) |
|--------|--------|-------------------|----------------|-----------|-----------|
| S01 | 44 | 0 | 8 | 4 | 56 |
| S02 | 43 | 16 | 16 | 12 | 87 |
| S03 | 48 | 6 | 18 | 4 | 76 |
| S04 | 27 | 22 | 4 | 4 | 57 |
| S05 | 48 | 12 | 0 | 4 | 64 |
| S06 | 42 | 16 | 17 | 8 | 83 |
| S07 | 24 | 16 | 0 | 8 | 48 |
| S08 | 8 | 10 | 30 | 12 | 60 |
| S09 | 8 | 20 | 0 | 20 | 48 |
| S10 | 8 | 16 | 0 | 24 | 48 |
| S11 | 8 | 8 | 4 | 32 | 52 |
| **Total** | **308** | **142** | **97** | **132** | **679h** |

**Capacity check:** 25h/week × 22 weeks × 2 (if 2-person core team) = 1100h available. 679h planned = ~62% utilization. Buffer: ~38% for defect resolution, retests, and external delays.

---

## 6. Integration Risk Register

| ID | Risk | Probability | Impact | Mitigation | Sprint |
|----|------|-------------|--------|-----------|--------|
| R01 | Jetson Orin Nano delivery delayed (>10 weeks) | MEDIUM | HIGH — SW-FW and L2 slip by 1:1 ratio | Order in S01 week 1. Fallback: Jetson Xavier devkit for FW port, final validation on production unit only | S01–S05 |
| R02 | Injection mold dimensional deviation >tolerance | LOW | MEDIUM — 1–2 sprint delay for mold correction | First article inspection S06. Use 3D print for L2 tests if needed | S06–S08 |
| R03 | PCB bring-up failure (layout issue) | LOW | MEDIUM — 2-week re-spin; SW tracks unaffected | DFM review S02. Keep SW on ENV-FULL (Jetson+DK) until final PCB | S04 |
| R04 | SW-AI accuracy <70% mAP on production Jetson | MEDIUM | HIGH — L3 T03 fail; likely model retraining | Validate on ENV-GPU (S04) before ENV-FULL (S05). Training data quality check | S04–S05 |
| R05 | T09 FPR >2% on field test (safety-critical) | LOW | CRITICAL — FAT blocked | IFF gate threshold hardening in S06. Extensive AI-IFF testing in S03–S05 | S06, S09–S10 |
| R06 | External lab capacity unavailable for T08/T10/T12 | MEDIUM | MEDIUM — 2–4 week slip | Book lab 4 weeks before S09 (i.e., in S07) | S07 |
| R07 | BLE interference from Jetson SPI noise | LOW | LOW — BLE range degraded; DK workaround available | HW shielding check in S04 bring-up. FCC/CE pre-scan if available | S04 |
| R08 | 25h/week capacity insufficient for S02 peak (87h planned) | MEDIUM | MEDIUM — S02 most loaded sprint | S02 tasks may span into S03. Prioritize: PCB/mold orders are hard deadline; SW-FW stub work can flex | S02 |

---

## 7. Integration Milestone Summary

| Milestone | Sprint | Gate | Sign-Off Required |
|-----------|--------|------|------------------|
| M-SW: All 56 unit tests pass | S02–S03 | Informal | SW Leads |
| M-SIM: ENV-SIM integration complete | S03 | L1b gate | SW Leads |
| M-BLE: ENV-BLE integration complete | S04 | L1b gate | SW-COM + SW-AI Lead |
| M-HW: Jetson arrives, SW-FW porting begins | S05 | — | PM confirm |
| M-FULL: ENV-FULL integration complete | S06 | SAFETY sign-off | SW-AI Lead + SW-FW Lead |
| **M-L2: L2 gate pass** | **S07** | **L2 gate** | **HW Lead + SW Lead** |
| M-ASSY: 5 production units assembled | S08 | Informal | QA |
| M-L3a: T01–T07 pass | S09 | L3a gate | QA Officer + Customer Kỹ thuật |
| **M-L3: Full L3 qualification complete** | **S10** | **L3 gate** | **WX QA + Customer Kỹ thuật** |
| **M-FAT: Factory Acceptance Test complete** | **S11** | **FAT gate** | **All 4 roles (Customer Rep + QA + HW + SW)** |

---

*V-SMASH-M Integration Sprint Plan v1.0 — 2026-03-02*
*11 sprints × 2 weeks = 22 weeks from S01 start to FAT delivery.*
*Critical path: Jetson order (S01) → SW-FW port (S05) → ENV-FULL integration (S06) → L2 (S07) → L3 (S09–S10) → FAT (S11).*
*679 estimated hours across SW / Electronics / Mechanical / PM+QA tracks.*
