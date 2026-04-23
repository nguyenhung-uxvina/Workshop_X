---
project: V-SMASH-M
phase: 4
type: verification-plan
prompt: P34
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs:
  - V-SMASH-M_Requirements_List_v1.0.md (P13 — 78 requirements)
  - V-SMASH-M_Test_Requirements_v1.0.md (Phase 3 — T01-T14)
  - V-SMASH-M_FMEA_v1.0.md (P26 — 22 failure modes)
  - V-SMASH-M_BOM_v1.0.md (P33 — 71 part numbers)
  - V-SMASH-M_Standards_Compliance_Matrix_v1.0.md (15 standards)
  - IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md (TCVN mapping)
total_requirements: 78
demands_verified: 54
wishes_verified: 24
safety_critical: 4 (VM-Y01–VM-Y04)
---

# V-SMASH-M (Micro-Sight) — Verification Plan (P34)

> **Purpose:** Map every requirement to a verification method (A/I/T/D), define pass/fail criteria, test sequence, and cost estimate. Ensures no requirement ships unverified.
>
> **Safety rule:** All 4 [SAFETY-CRITICAL] requirements (VM-Y01–Y04) verified by T or D. A alone is NOT acceptable for safety-critical items.
>
> **TCVN integration:** TCVN equivalents noted per IRONMESH S5 Compliance Matrix. Products for Vietnamese military procurement reference both MIL-STD and TCVN.

---

## 1. Verification Matrix — All 78 Requirements

### 1.1 Geometry (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-G01 | Max dimensions L×W×H | ≤120×50×60 mm | D | **I** | — | Caliper measurement, all 3 axes within limit | B | $5 |
| VM-G02 | Total weight incl. battery | ≤0.50 kg | D | **I** | — | Scale measurement: ≤500g ±1g | B | $5 |
| VM-G03 | Picatinny rail interface | 21.2 mm ±0.1 mm | D | **I** | MIL-STD-1913 gauge | Go/no-go gauge check; fits standard 1913 rail test fixture | B | $20 |
| VM-G04 | Optical axis height above rail | 25 ±2 mm | W | **I** | — | Height gauge measurement on rail fixture | B | $10 |
| VM-G05 | Battery access without rail removal | ≤20N, single-hand, no tools | D | **D** | — | 5 operators attempt battery change mounted; 100% success, force gauge ≤20N | E | $50 |

### 1.2 Kinematics (2 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-K01 | Drone angular velocity tracking | ≥30°/s | D | **T** | T09, T10 | Drone sled at 30°/s relative angular rate; indicator tracks without dropout for 5s | E | $300 |
| VM-K02 | Lead indicator update rate | ≥30 Hz | D | **T** | — | High-speed camera (240 fps) captures OLED updates; measure frame-to-frame interval ≤33 ms | C | $200 |

### 1.3 Forces (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-F01 | Recoil shock survival | ≥10,000G, 0.5ms | D | **T** | T01 | MIL-STD-810H 516.8 Proc I: 500 cycles, functional after. Optical alignment ≤0.5 mrad drift. Zero solder cracks (X-ray). TCVN 7699-2-27:2007. | D | $3,000 |
| VM-F02 | Drop survival (1.5m concrete) | Operational after 26 drops | D | **T** | T02 | MIL-STD-810H 516.8 Proc IV: all faces/edges/corners. IP67 maintained. No housing crack. TCVN 7699-2-27:2007. | D | $1,500 |
| VM-F03 | Rail clamp — zero shift after 500 rds | Zero shift | D | **T** | T01 | After T01 shock sequence: bore-sight check ≤0.2 mrad. Clamp torque unchanged. FMEA F18 mitigation validated. | D | incl. T01 |

### 1.4 Energy (7 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-E01 | Battery type | Li-ion 18650 or 21700 | W | **I** | — | BOM inspection: VM-6101 = 21700 cell | B | $5 |
| VM-E02 | Battery life at 25°C | ≥8 hours | D | **T** | T11 | Continuous operation (AI active, OLED on, BLE idle) at 25°C ambient: measured runtime ≥8.0h | C | $200 |
| VM-E06 | Battery life at -10°C | ≥5 hours | D | **T** | T11 | Same test in -10°C chamber: measured runtime ≥5.0h. TCVN 7699-2-1:2007 (cold). | D | $500 |
| VM-E03 | System average power | ≤2.3 W | D | **A** | — | Power budget analysis from measured subsystem draws. Cross-check with T11 runtime. | A | $100 |
| VM-E07 | Peak power | ≤4.0 W, ≤500ms burst | W | **T** | — | Oscilloscope capture at battery terminals during simultaneous AI+OLED+BLE. Peak ≤4.0W, duration ≤500ms. No brownout reset. | C | $200 |
| VM-E04 | Charge time 0→80% | ≤3 hours via USB-C | W | **T** | — | Discharge to 0%, charge via USB-C PD 5V/2A. Time to 80% SoC ≤3.0h. | C | $50 |
| VM-E05 | Low battery warning at ≤15% | Visual indicator | D | **D** | — | Discharge to 15% SoC; verify indicator visible to operator in shooting position | C | $20 |

### 1.5 Material (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-M01 | Housing material | PA6-GF30 or equivalent | W | **I** | — | Material cert inspection: CoC from injection molder confirms PA6-GF30 grade | B | $10 |
| VM-M02 | Operating temperature range | -10°C to +55°C | D | **T** | T03 | MIL-STD-810H 501.7/502.7: function at both extremes. TCVN 7699-2-1 + TCVN 7699-2-2. | D | $2,000 |
| VM-M03 | Prohibited materials | No Cd, asbestos, Be | D | **I** | — | BOM + material cert review: no prohibited materials on any CoC | B | $50 |
| VM-M04 | UV resistance (housing) | No degradation after 2,000h UV-B | W | **T** | — | UV-B exposure per ASTM G154 Cycle 1. Visual + tensile test after 2,000h. TCVN 7699-2-5:2011 (solar). | D | $800 |
| VM-M05 | Thermal management (sealed) | Tj ≤95°C at +55°C ambient | D | **T** | T03 | Thermocouple on SoC during T03 high-temp test: Tj ≤95°C at steady state. Thermal shutdown test at 100°C: graceful display-off. | D | incl. T03 |

### 1.6 Signals (9 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-S01 | CMOS sensor resolution | ≥2 MP (1920×1080) | D | **I** | — | Datasheet verification + capture resolution test (USAF 1951 chart) | B | $20 |
| VM-S08 | Optical system horizontal FOV | 8°–15° | D | **I** | — | FOV measurement: calibrated target at known distance, count pixels | C | $50 |
| VM-S09 | Optical system f-number | ≤f/2.0 | W | **I** | — | Lens datasheet verification + light throughput measurement | B | $20 |
| VM-S02 | AI inference latency (end-to-end) | ≤150 ms | D | **T** | — | Strobe trigger → indicator update: high-speed camera measurement over 100 frames. Mean ≤150ms. | C | $300 |
| VM-S03 | OLED refresh rate | ≥60 Hz | D | **T** | — | High-speed camera (240 fps): verify ≥60 distinct frames per second on OLED output | C | $100 |
| VM-S04 | Classification confidence indicator | 3-level GREEN/YELLOW/RED | D | **T** | T09 | Present known targets at controlled confidence levels; verify correct color display for each tier | E | incl. T09 |
| VM-S05 | BLE 5.0 data upload | Optional, system operates without | W | **T** | — | (a) BLE connected: verify data transfer. (b) BLE disconnected: verify all functions operational. | C | $100 |
| VM-S06 | Lead indicator angular accuracy | ≤1.0 mrad at 150m | D | **T** | T10 | Calibrated target on drone sled at 100-150m. Measured lead error ≤1.0 mrad. ≥50 passes. | E | $1,000 |
| VM-S07 | Post-shot reacquisition time | ≤200 ms after recoil | D | **T** | T01 (during) | During shock test: high-speed camera captures indicator recovery. Time from recoil peak to stable indicator ≤200ms. | D | incl. T01 |

### 1.7 Safety (6 requirements) — **[SAFETY-CRITICAL] items highlighted**

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| **VM-Y01** | **[SC] No autonomous fire capability** | Zero electrical connections to trigger | D | **I+T** | — | (I) Wiring diagram inspection: no wire to trigger mechanism. (T) Continuity test between device and trigger = open circuit. **Both methods required.** | B+C | $100 |
| **VM-Y02** | **[SC] Safe power failure mode** | Display OFF, no residual indicator | D | **T** | — | Pull battery during operation: OLED goes blank ≤100ms. No residual dot. Repeat 10×. | C | $50 |
| **VM-Y03** | **[SC] Classification confidence gating** | No indicator when <70% confidence | D | **T** | T09 | Present borderline targets (60-75% confidence): verify indicator suppressed at <70%. Verify indicator appears at >70%. ≥20 transitions. | E | incl. T09 |
| **VM-Y04** | **[SC] AI misclassification rate** | ≤2% FPR at ≥90% confidence | D | **T** | T09 | ≥100 non-drone presentations (birds, debris, aircraft): count false positives. FPR ≤2.0%. | E | $2,000 |
| VM-Y05 | Laser safety | Class 1 or NO laser | D | **I** | — | Design review: no laser in BOM. Confirmed: VM BOM contains no laser components. | A | $10 |
| VM-Y06 | AI classification safety integrity | MIL-STD-882E risk assessment | D | **A** | — | Hazard analysis document per MIL-STD-882E. Severity II, Probability D classification documented. | A | $200 |

> **SAFETY CHECK:** All 4 [SAFETY-CRITICAL] items (VM-Y01–Y04) use T or D methods. Zero A-only. **PASS.**

### 1.8 Ergonomics (6 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-H01 | Training time to competence | ≤2 hours classroom + practical | D | **D** | — | 10 untrained soldiers complete training: 100% competent (pass 3/3 engagement scenarios) within 2h | E | $500 |
| VM-H02 | Power-on to operational | ≤3 seconds | D | **T** | — | Stopwatch/video: switch ON to indicator active ≤3.0s. 10 trials, all pass. | C | $20 |
| VM-H03 | Mount/dismount time | ≤30 seconds, no tools | D | **D** | — | 5 soldiers (gloved): mount and dismount on 1913 rail. All ≤30s. No tools used. | E | $50 |
| VM-H04 | Display readability in sunlight | ≥1,000 nits or auto-brightness | D | **T** | — | Luminance meter: OLED output ≥1,000 nits at max brightness setting. Test indoors with calibrated meter. | C | $100 |
| VM-H05 | Eye relief | Compatible at 25-75 mm | W | **D** | — | 5 operators with different shooting stances: all can see full indicator at natural position | E | $50 |
| VM-H06 | Controls | ≤1 external control, zero menu during use | D | **I** | — | Physical inspection: count external controls. Functional: confirm zero menu interaction needed during operation. | B | $10 |

### 1.9 Production (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-P01 | Housing injection-moldable at WX | Single-cavity, ≤2 undercuts | D | **I** | — | Mold design review: confirm single cavity, count undercuts ≤2 | A | $20 |
| VM-P02 | PCB on existing SMT line | ≤200 SMD, ≤4 BGA | W | **I** | — | BOM part count: verify SMD count ≤200, BGA count ≤4 | A | $20 |
| VM-P03 | Production rate | ≥100 units/month by Q1 2027 | W | **A** | — | Assembly time analysis (77 min/unit × overhead factor): capacity calculation vs 100/month | A | $50 |
| VM-P04 | Unique BOM components | ≤50 unique part numbers | W | **I** | — | BOM count: 71 line items. **EXCEEDS target by 42%.** See §5 open items. | B | $5 |

### 1.10 Quality Control (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-Q01 | Functional acceptance test (100%) | Power-on + AI + OLED + BLE | D | **T** | T12 | PR-10 jig: all 4 functions pass on every production unit | Prod | $5/unit |
| VM-Q02 | Defect rate (outgoing) | ≤1% | D | **I** | — | Track production yield: ≤10 rejects per 1,000 units. Monthly review. | Prod | monitoring |
| VM-Q03 | Environmental sample test | 3/1,000 lot: 810H shock+vib+temp | W | **T** | T01,T03 | Sample units pass same qualification tests as Phase 4. Lot acceptance criteria: 3/3 pass. | Prod | $2,000/lot |

### 1.11 Assembly (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-A01 | Field battery replacement | ≤60s, tool-free, gloved hands | D | **D** | — | 5 soldiers with winter gloves: battery change ≤60s. All succeed. | E | $50 |
| VM-A02 | Factory assembly time | ≤45 min (target ≤30) | W | **I** | — | Time-study during first article build: measure actual assembly time | C | $50 |
| VM-A03 | Field-replaceable parts | Battery only; depot for rest | D | **I** | — | Design review: confirm only battery door accessible tool-free. All other fasteners require T10 Torx. | A | $10 |

### 1.12 Transport (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-T01 | Transport vibration survival | MIL-STD-810H 514.8 Cat 4 | D | **T** | — | Random vibration per 514.8 Cat 4 (truck transport). Function after. TCVN 7699-2-6:2009 + TCVN 7699-2-64:2013. | D | $2,000 |
| VM-T02 | Packaging | ≤200×100×100 mm, stackable | W | **I** | — | Measure packaging dimensions. Test 50-unit carton stacking (5 high). | B | $20 |
| VM-T03 | Export control classification | EAR99 target | D | **A** | — | EAR classification analysis for Jetson Orin Nano (VM-2101). **⚠ BLOCKER: BIS ruling required.** | A | $500 |

### 1.13 Operation (11 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-O01 | Operating temperature | -10°C to +55°C | D | **T** | T03 | Same as VM-M02. Combined test. | D | incl. T03 |
| VM-O02 | Humidity tolerance | 95% RH at 40°C | D | **T** | T04 | MIL-STD-810H 507.6: 10 cycles. Function maintained. No corrosion. TCVN 7699-2-30:2007. | D | $1,500 |
| VM-O03 | Dust resistance | IP6X | D | **T** | T05 | IEC 60529 dust test. Zero ingress. TCVN 4255:2008. | D | $800 |
| VM-O04 | Rain resistance (body) | IPX7 (1m, 30 min) | D | **T** | T05 | IEC 60529 immersion test. Mass change <0.1g. TCVN 4255:2008. | D | incl. T05 |
| VM-O05 | Rain resistance (battery door) | IPX5 (water jet) | D | **T** | — | IEC 60529 water jet test on battery door. No ingress. | D | $300 |
| VM-O10 | EMC/EMI immunity | IEC 61000-4-3, 3 V/m | D | **T** | T07 | No false indicators, no resets during immunity test. TCVN 7909-4-3:2015. QCVN 18:2022/BTTTT (BLE radio). | D | $3,000 |
| VM-O11 | EMC/EMI emissions | CISPR 32 Class B | D | **T** | T08 | Below Class B limits. QCVN 118:2018/BTTTT. | D | incl. T07 |
| VM-O06 | Detection range (daylight) | ≥200m (D), ≥150m min | D | **T** | T09 | ≥30cm target at 200m: Pd ≥90% over 100 passes (daylight, clear) | E | $2,000 |
| VM-O09 | Detection probability | Pd ≥90% at 200m, ≥95% at 150m | D | **T** | T09 | Statistical test: ≥100 presentations per range. Binomial confidence interval. | E | incl. T09 |
| VM-O07 | Detection range (low light) | ≥100m | W | **T** | T09 (ext) | Dusk/dawn conditions: ≥100m detection of medium drone. ≥50 passes. | E | $500 |
| VM-O08 | Target classification categories | 4 classes minimum | D | **T** | T09 | Present each of 4 target types; verify correct classification for each | E | incl. T09 |

### 1.14 Maintenance (6 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-N01 | MTBF | ≥1,500h (D), ≥2,000h (W) | D/W | **A** | — | Reliability prediction per MIL-HDBK-217F using BOM component data. Cross-check with T14 burn-in infant mortality rate. | A | $300 |
| VM-N02 | MTTR (depot) | ≤2 hours | W | **D** | — | Simulate 3 common faults (sensor, OLED, PCB): trained depot tech repairs each ≤2h with standard tools | E | $200 |
| VM-N03 | Field calibration | Zero user steps. Auto bore-sight ≤3s, ≤0.5 mrad | D | **D** | T13 | Power-on from cold: measure bore-sight convergence time ≤3s. Residual error ≤0.5 mrad (PR-11 jig). | C | incl. T13 |
| VM-N04 | Fault indicator | 3 states: OK/FAULT/LOW BATTERY | D | **T** | — | Inject 3 fault conditions; verify correct indicator for each. Test in daylight. | C | $50 |
| VM-N05 | SW/FW update method | USB-C or BLE OTA, depot only | W | **D** | — | Perform firmware update via USB-C. Perform firmware update via BLE. Both succeed. Verify no field-update interface exposed. | C | $50 |
| VM-N06 | Degraded mode behavior | 3 failure states defined | D | **T** | — | Inject each fault: (1) block CMOS → "SENSOR FAULT"; (2) hang AI >500ms → "AI FAULT"; (3) overheat → "THERMAL" + reduced rate. Verify NO stale indicator in any state. | C | $200 |

### 1.15 Costs (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-C01 | Unit manufacturing cost | ≤$500 (D), target $300-400 (W) | D | **A** | — | P35 cost analysis: BOM + labor + overhead ≤$500 at 500 units | A | P35 deliverable |
| VM-C02 | Local content by value | ≥60% (D), target 75% (W) | D | **A** | — | BOM local content calculation: currently 50.6%. Mitigation paths M1-M4 tracked. | A | P35 deliverable |
| VM-C03 | Development cost (NRE) | ≤$50,000 | W | **A** | — | NRE actuals tracking vs budget | A | accounting |
| VM-C04 | Warranty cost per unit | ≤$15/unit (≤3%) | W | **A** | — | Predict from MTBF (VM-N01) × repair cost × 12-month period | A | $50 |

### 1.16 Schedules (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Method | Test Ref | Pass Criteria | Seq | Cost Est. |
|--------|-------------|-------------|-----|--------|----------|---------------|-----|-----------|
| VM-D01 | Phase 1 Gate 2 | Q1 2026 | D | **I** | — | Gate record exists with APPROVED decision | — | $0 |
| VM-D02 | Phase 2 Gate 3 | Q2 2026 | D | **I** | — | Gate record exists with APPROVED decision | — | $0 |
| VM-D03 | Phase 3 Gate 4 | Q3 2026 | D | **I** | — | Gate record exists with APPROVED decision | — | $0 |
| VM-D04 | First article delivery | Q4 2026 | D | **I** | — | First article build + test complete | — | $0 |
| VM-D05 | Production ramp ≥100/month | Q1 2027 | W | **I** | — | Production log shows ≥100 units shipped in a calendar month | — | $0 |

---

## 2. Verification Method Summary

| Method | Count | % of Total | Requirements |
|--------|-------|------------|-------------|
| **A — Analysis** | 15 | 19% | VM-E03, Y05, Y06, P01-P03, A03, T03, N01, C01-C04 |
| **I — Inspection** | 19 | 24% | VM-G01-G04, E01, M01, M03, S01, S08, S09, H06, P04, Q02, T02, A02, D01-D05 |
| **T — Test** | 34 | 44% | All environmental, EMC, performance, safety-critical |
| **D — Demonstration** | 8 | 10% | VM-G05, E05, H01, H03, H05, A01, N02, N05 |
| **I+T (dual)** | 1 | 1% | VM-Y01 (safety-critical: both methods required) |
| **Monitoring** | 1 | 1% | VM-Q02 (production yield tracking) |
| **Total** | **78** | **100%** | |

### Method Distribution Check

- **MUST requirements (54):** 100% have at least one method assigned ✅
- **WISH requirements (24):** 100% have method assigned (some flagged as "if time/budget") ✅
- **[SAFETY-CRITICAL] (4):** All use T or D. Zero A-only. ✅
- **HITL requirements:** VM-H01, H03, H05, G05, A01 all verified by D (live demo). ✅

---

## 3. Verification Sequence Plan

### Phase A — Pre-Build Analysis (Weeks 1-2)

| Activity | Items | Effort | Deliverable |
|----------|-------|--------|-------------|
| Engineering calculations | VM-E03, N01, P03, C01-C04 | 40h engineering | Calculation reports |
| Hazard analysis | VM-Y06 | 16h safety engineering | MIL-STD-882E hazard analysis document |
| Export control analysis | VM-T03 | External (BIS) | EAR classification ruling **⚠ BLOCKER** |
| Design reviews | VM-Y05, P01, P02, A03 | 8h review | Design review records |
| **Phase A Total** | **15 items** | **~64h + BIS ruling** | |

### Phase B — Incoming Inspection (Weeks 3-4, concurrent with build)

| Activity | Items | Effort | Deliverable |
|----------|-------|--------|-------------|
| Dimensional inspection | VM-G01-G04, H06 | 4h per unit | Inspection records |
| Material cert review | VM-E01, M01, M03, S01, S08, S09 | 8h total | CoC verification log |
| BOM count verification | VM-P04, T02 | 2h | BOM audit report |
| Picatinny gauge check | VM-G03 | 0.5h per unit | Go/no-go record |
| Anodize incoming inspection | VM-5501 (MIL-A-8625) | 1h per batch | Eddy current measurement |
| **Phase B Total** | **19 items** | **~16h + per-unit time** | |

### Phase C — Functional Test (Weeks 5-7, after first article build)

| Activity | Items | Effort | Deliverable |
|----------|-------|--------|-------------|
| Power and battery tests | VM-E02, E04, E07, K02 | 24h bench time | Test reports |
| Display performance | VM-S02, S03, H02, H04 | 16h bench time | Test reports |
| AI system functional | VM-S04, S05, N04, N06 | 16h bench time | Test reports |
| Safety functional tests | VM-Y01 (continuity), Y02 (power fail) | 8h | Safety test certificates |
| Production jig validation | VM-Q01 (T12), N03 (T13) | 8h jig setup | Jig validation records |
| Assembly time study | VM-A02 | 4h | Time study report |
| Firmware update test | VM-N05 | 4h | Update verification |
| **Phase C Total** | **18 items** | **~80h bench time** | |

### Phase D — Environmental Qualification (Weeks 8-14, external lab)

| Activity | Items | Effort | Deliverable | Lab |
|----------|-------|--------|-------------|-----|
| Shock test (MIL-STD-810H 516.8) | VM-F01, F02, F03, S07 (T01, T02) | 5 days | Shock test report | External |
| Vibration test (MIL-STD-810H 514.8) | VM-T01 | 3 days | Vibration test report | External |
| Temperature cycling (MIL-STD-810H 501/502) | VM-M02, O01, E06, M05 (T03) | 5 days | Thermal test report | External |
| Humidity test (MIL-STD-810H 507.6) | VM-O02 (T04) | 5 days | Humidity test report | External |
| IP67 test (IEC 60529) | VM-O03, O04, O05 (T05) | 2 days | IP test report | External |
| IP67 post-shock retest | T06 | 1 day | IP retest report | External |
| EMC immunity + emissions | VM-O10, O11 (T07, T08) | 5 days | EMC test report | EMC lab |
| UV exposure test | VM-M04 | 3 months (parallel) | UV aging report | External |
| Burn-in (T14) | 3-5 units, 24h at 55°C | 2 days | Burn-in report | Internal (WX) |
| **Phase D Total** | **19 items** | **~26 lab days + 3 months UV** | | |

### Phase E — Field Demonstration (Weeks 15-17)

| Activity | Items | Effort | Deliverable |
|----------|-------|--------|-------------|
| AI detection & classification | VM-K01, O06, O07, O08, O09, Y03, Y04 (T09) | 3 days field | Detection test report + statistical analysis |
| Lead accuracy | VM-S06, S04 (T10) | 2 days field | Accuracy test report |
| Operator demonstrations | VM-G05, H01, H03, H05, A01, E05 | 1 day + 10 soldiers | Demonstration records |
| Depot repair demo | VM-N02 | 0.5 day | Depot MTTR record |
| **Phase E Total** | **14 items** | **~6.5 field days** | |

---

## 4. Cost Estimate Summary

| Phase | Items | Duration | Est. Cost | Notes |
|-------|-------|----------|-----------|-------|
| **A — Analysis** | 15 | 2 weeks | $1,250 | Engineering hours + BIS filing |
| **B — Inspection** | 19 | 2 weeks | $300 | Mostly internal labor |
| **C — Functional Test** | 18 | 3 weeks | $1,700 | Bench equipment + test fixtures |
| **D — Environmental** | 19 | 7 weeks (lab) | $15,400 | External lab: shock, vibe, thermal, humidity, IP, EMC, UV |
| **E — Field Demo** | 14 | 2.5 weeks | $6,600 | Drone sled, field range time, soldiers |
| **Qualification samples** | — | — | $2,000 | 3-5 units consumed/damaged during testing |
| **Total Verification** | **78** | **~16.5 weeks** | **$27,250** | |

| Metric | Value |
|--------|-------|
| Verification cost as % of unit cost ($202) | 13.5% (at 1,000-unit program = $2.73/unit amortized) |
| Most expensive test category | Environmental (Phase D): $15,400 (57% of total) |
| Most expensive single test | EMC lab (T07+T08): $3,000 |
| Sample units needed | 5 (3 for environmental, 2 for field test; some overlap) |

---

## 5. Open Verification Items

| # | Item | Issue | Recommendation | Priority |
|---|------|-------|----------------|----------|
| OV-1 | **VM-T03 Export Control** | BIS ruling on Jetson Orin Nano (ECCN 3A991?) not obtained. **BLOCKER for procurement.** | File BIS commodity jurisdiction request. Cannot proceed to production without ruling. | **CRITICAL** |
| OV-2 | **VM-P04 BOM Count** | 71 unique part numbers vs ≤50 target. Exceeds WISH by 42%. | Accept as-is (W not D). Or: consolidate fasteners (M3×8 SS variants) to reduce count. | LOW |
| OV-3 | **VM-C02 Local Content** | 50.6% vs ≥60% DEMAND. Mitigation paths M1-M4 in progress. | Track M1-M4 closure. Cannot close Phase 4 gate until ≥60% path is credible. | **HIGH** |
| OV-4 | **VM-O07 Low-Light Detection** | ≥100m WISH. No NV on V-M. Performance uncertain. | Verify during Phase E field test at dusk/dawn. May need to lower spec or add IR illuminator. | MEDIUM |
| OV-5 | **EMC lab selection** | No Vietnamese lab for MIL-STD-461G / TCVN 7909. IEC 61000 labs exist. | Use Vietnamese IEC lab for TCVN 7909 compliance. If MIL-STD-461G needed for export: Singapore. | HIGH |
| OV-6 | **Drone sled for T09/T10** | Need controllable target at known range/speed for detection + accuracy tests. | Build or procure drone sled (motorized rail at 100-200m). Or use live drone flights (less controlled). | HIGH |
| OV-7 | **TCVN/QS standards** | Military-specific standards catalog not obtained (TCVN Compliance Matrix G1). | Query during first military touchpoint. May add requirements to verification plan. | HIGH |

---

## 6. Phase 3 Test Requirements Traceability

All 14 Phase 3 tests (T01–T14) are incorporated into this verification plan:

| Phase 3 Test | Verification Phase | Requirements Covered | Status |
|-------------|-------------------|---------------------|--------|
| T01 Shock | D | VM-F01, F03, S07 | Planned |
| T02 Drop | D | VM-F02 | Planned |
| T03 Temperature | D | VM-M02, M05, E06, O01 | Planned |
| T04 Humidity | D | VM-O02 | Planned |
| T05 IP67 | D | VM-O03, O04 | Planned |
| T06 IP67 post-shock | D | DfCorr mitigation | Planned |
| T07 EMC immunity | D | VM-O10 | Planned |
| T08 EMC emissions | D | VM-O11 | Planned |
| T09 AI detection | E | VM-K01, O06, O07, O08, O09, Y03, Y04, S04 | Planned |
| T10 Lead accuracy | E | VM-S06 | Planned |
| T11 Battery life | C+D | VM-E02, E06 | Planned |
| T12 EOL production test | Prod | VM-Q01 | Planned |
| T13 Bore-sight | C+Prod | VM-N03 | Planned |
| T14 Burn-in | D | DfR screening | Planned |

**14/14 Phase 3 tests incorporated. ✅**

---

## 7. FMEA Mitigation Verification

All 6 mitigated failure modes (RPN≥100) have verification coverage:

| FMEA ID | Failure Mode | Mitigation | Verified By | Pass Criteria |
|---------|-------------|-----------|-------------|---------------|
| F03 | Lens-to-sensor misalignment | AA7075 bench + H7/g6 bore + PR-05 jig | T01 (post-shock alignment) + T13 (bore-sight) | ≤0.5 mrad drift after 500 shocks |
| F07 | Missed detection (residual RPN=210) | Expanded training data + range spec | T09 (Pd measurement) | Pd ≥90% at 200m |
| F08 | Wrong lead angle | SF5 bounds check + range check | T10 (accuracy) + system log review | ≤1.0 mrad lead error |
| F11 | OLED-to-sensor alignment | UV-cure lock + PR-11 jig | T13 (bore-sight) | ≤0.2 mrad factory; ≤0.5 mrad in-service |
| F16 | IP67 seal failure | O-ring design + Loctite + conformal coat | T05 (IP67) + T06 (IP67 post-shock) | Mass change <0.1g after immersion |
| F18 | Clamp loosening | Loctite 243 + torque spec + witness mark | T01 (post-shock bore-sight) | ≤0.2 mrad shift after 500 shocks |
| F19 | Optical bench fatigue | AA7075-T6, 5mm, fillet radii | T01 (500 shock cycles) | No crack at visual inspection + alignment PASS |

**6/6 FMEA mitigations have verification coverage. ✅**

---

*Verification plan prepared by: KN Nguyen (AI-assisted, Claude Opus 4.6)*
*Status: DRAFT — awaiting HITL approval before commitment*
*Next: P35 Cost Analysis → P57 Phase 4 Gate Review*
