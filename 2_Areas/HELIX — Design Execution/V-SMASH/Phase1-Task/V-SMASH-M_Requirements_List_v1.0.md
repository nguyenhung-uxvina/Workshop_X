---
project: V-SMASH-M
phase: 1
type: requirements-list
prompt: P13
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Product_Proposal_v1.0.md, V-SMASH-M_ODI_Report_v1.1, V-SMASH-M_Stakeholder_Analysis_v1.0.md]
total_requirements: 78
demands: 54
wishes: 24
quantified_pct: 100
---

# V-SMASH-M (Micro-Sight) — Requirements List (P13)

> **Product:** Clip-on AI aiming aid for infantry C-UAS. $500 target. ≤0.5 kg. "Follow the dot."
> **Complexity class:** Simple component/accessory → target 50-80 requirements.
> **Gate criterion:** ≥80% quantified, all 16 categories ≥2 requirements, zero vague qualifiers.

---

## Requirements Table

| Req ID | Cat | Requirement | Value / Limit | D/W | Verify | Source | Status |
|--------|-----|-------------|---------------|-----|--------|--------|--------|
| **1. GEOMETRY** | | | | | | | |
| VM-G01 | GEO | Maximum external dimensions (L×W×H) | ≤120 × 50 × 60 mm | D | I | Picatinny rail envelope + sight picture clearance [ASSUMPTION] | ✓ |
| VM-G02 | GEO | Total weight including battery | ≤0.50 kg | D | I | P11 §3 / OM15 (Opp 13) / C1 resolution | ✓ |
| VM-G03 | GEO | Picatinny rail interface (MIL-STD-1913) | 21.2 mm slot width ± 0.1 mm | D | I | MIL-STD-1913 Section 3.3 | ✓ |
| VM-G04 | GEO | Optical axis height above rail | 25 ± 2 mm | W | I | Co-witness with iron sights [ASSUMPTION] | ✓ |
| VM-G05 | GEO | Battery compartment access without removing from rail | ≤20 N opening force, single-hand operation, no external tools | D | D | S3 (Maintainer) — field battery replacement | ✓ |
| **2. KINEMATICS** | | | | | | | |
| VM-K01 | KIN | Drone angular velocity tracking (max) | ≥30°/s relative to shooter LOS | D | T | Typical FPV drone at 150m crossing at 15 m/s = ~6°/s; factor 5× margin for close fast crossing [ASSUMPTION] | ✓ |
| VM-K02 | KIN | Lead indicator update rate | ≥30 Hz (≤33 ms per frame) | D | T | Smooth visual tracking for human eye; <20 Hz perceived as flickering | ✓ |
| **3. FORCES** | | | | | | | |
| VM-F01 | FOR | Recoil shock survival (7.62×39mm) | ≥10,000 G peak, 0.5 ms duration | D | T | MIL-STD-810H Method 516.8 Procedure I (functional shock) — AK-47 recoil environment [ASSUMPTION] | ✓ |
| VM-F02 | FOR | Drop survival (1.5 m onto concrete) | Operational after 26 drops (all faces/edges/corners) | D | T | MIL-STD-810H Method 516.8 Procedure IV | ✓ |
| VM-F03 | FOR | Rail clamping force (resist recoil walk) | Zero shift after 500 rounds 7.62×39mm | D | T | Field use: soldier fires hundreds of rounds per mission [ASSUMPTION] | ✓ |
| **4. ENERGY** | | | | | | | |
| VM-E01 | ENR | Battery type | Rechargeable Li-ion, 18650 or 21700 format | W | I | S8 (Logistics) — standard commercial cell for supply chain [ASSUMPTION: G7 pending] | ✓ |
| VM-E02 | ENR | Battery life (continuous operation, AI active, at 25°C) | ≥8 hours | D | T | P11 §3 / OM17 (Opp 13) — full patrol duration | ✓ |
| VM-E06 | ENR | Battery life (continuous operation, AI active, at -10°C) | ≥5 hours | D | T | Li-ion loses 30-40% capacity at -10°C. 18.5 Wh × 0.65 ≈ 12 Wh → 12/2.3 = 5.2h. Highland patrol minimum. [QC-RUN12] | ✓ |
| VM-E03 | ENR | Power consumption (system average) | ≤2.3 W | D | A | Derived: 8h from 21700 cell (~5,000 mAh × 3.7V = 18.5 Wh) → 18.5/8 = 2.3W. No margin — tight budget. [ASSUMPTION] | ✓ |
| VM-E07 | ENR | Power consumption (peak) | ≤4.0 W peak during simultaneous AI inference + OLED at max brightness + BLE transmit. Peak duration ≤500 ms per burst. | W | T | [QC-RUN12] Average power ≠ peak power. Battery voltage sag at peak draw must not trigger brownout reset. Phase 2 concept architecture determines exact peak. [ASSUMPTION] | ✓ |
| VM-E04 | ENR | Charge time (0→80%) | ≤3 hours via USB-C | W | T | Overnight charging at base | ✓ |
| VM-E05 | ENR | Low battery warning | Visual indicator at ≤15% remaining | D | D | Soldier must know before battery dies during engagement | ✓ |
| **5. MATERIAL** | | | | | | | |
| VM-M01 | MAT | Housing material | Glass-filled nylon (PA6-GF30) or equivalent | W | I | Impact-resistant, lightweight, injection-moldable locally. Workshop X capable [ASSUMPTION] | ✓ |
| VM-M02 | MAT | Operating temperature range | -10°C to +55°C | D | T | MIL-STD-810H Method 501.7/502.7 — Vietnam climate + highland cold [ASSUMPTION] | ✓ |
| VM-M03 | MAT | Prohibited materials | No cadmium, no asbestos, no beryllium | D | I | TCVN environmental + REACH equivalent [ASSUMPTION: G6 pending] | ✓ |
| VM-M04 | MAT | UV resistance (housing) | No degradation after 2,000 hours UV-B exposure | W | T | Outdoor military use — tropical sunlight | ✓ |
| VM-M05 | MAT | Thermal management (sealed enclosure) | Jetson module junction temperature ≤95°C at +55°C ambient with housing sealed (IP67). Thermal shutdown at ≥100°C with graceful display-off (no stale indicator). | D | T | [QC-RUN12] Jetson Nano TDP 5-10W in sealed IP67 housing at tropical ambient. No thermal path defined = potential thermal runaway or silent performance throttling. Phase 3 layout validates heat sink design. | ✓ |
| **6. SIGNALS** | | | | | | | |
| VM-S01 | SIG | CMOS sensor resolution | ≥2 MP (1920×1080 minimum) | D | I | YOLOv8-nano input requirement for drone detection at 200m [ASSUMPTION] | ✓ |
| VM-S08 | SIG | Optical system horizontal FOV | 8°–15° | D | I | Binding parameter: 30cm target at 200m needs ≥15px on 1920px sensor → FOV ≤15°. Narrower FOV = more pixels on target but less situational awareness. Phase 2 trades exact value. [QC-RUN12] | ✓ |
| VM-S09 | SIG | Optical system f-number | ≤f/2.0 | W | I | Light-gathering for low-light detection (VM-O07). Faster lens = heavier + more expensive → W, not D. [QC-RUN12] | ✓ |
| VM-S02 | SIG | AI inference latency (detection → lead indicator) | ≤150 ms end-to-end | D | T | P11 §3 / OM05 (Opp 16) / C4 resolution: parallel IFF + lead | ✓ |
| VM-S03 | SIG | OLED display refresh rate | ≥60 Hz | D | T | Lead indicator overlay must be flicker-free during tracking | ✓ |
| VM-S04 | SIG | Classification confidence indicator | 3-level: GREEN (≥90%), YELLOW (70-89%), RED (<70%). Note: classifies object TYPE (drone/bird/unknown), NOT friend-vs-foe. Classification ≠ threat ID ≠ engagement authorization. | D | T | OM07 (Opp 18) / OM08 (Opp 14) / FR-IFF-01/02. [QC-RUN12: renamed from "IFF confidence" — system classifies object type, not friend/foe] | ✓ |
| VM-S05 | SIG | Bluetooth Low Energy (BLE 5.0) for IRONMESH data upload | Optional — system operates fully without BLE connection | W | T | P11 §2 — IRONMESH integration is value-add, not core | ✓ |
| VM-S06 | SIG | Lead indicator angular accuracy | ≤1.0 mrad at 150m engagement range | D | T | P11 §3 / OM06 (Opp 16) — "follow the dot" must lead to hits | ✓ |
| VM-S07 | SIG | Post-shot reacquisition time | ≤200 ms after recoil event | D | T | OM12 (Opp 14) — updated lead after miss within 2 frames | ✓ |
| **7. SAFETY** | | | | | | | |
| VM-Y01 | SAF | [SAFETY-CRITICAL] No autonomous fire capability | Zero electrical connections between V-M and weapon trigger mechanism. Verify: wiring diagram inspection + continuity test = open circuit. | D | I | P11 §Family Dependency — "V-M NEVER gets fire gate." Human fires manually. | ✓ |
| VM-Y02 | SAF | [SAFETY-CRITICAL] Safe power failure mode | On power loss: display OFF (blank), no residual indicator, no random dot | D | T | S5 (Safety Officer) — stale indicator could cause misaimed shot | ✓ |
| VM-Y03 | SAF | [SAFETY-CRITICAL] Classification confidence gating | Lead indicator SHALL NOT display when classification confidence <70% (RED state). Note: confidence = "how likely this is a drone", NOT "how likely this is hostile." ROE decision remains with soldier. | D | T | FR-IFF-01/02 / OM07 (Opp 18) — prevents engagement of non-drone targets. [QC-RUN12: clarified scope — classification ≠ IFF ≠ engagement auth] | ✓ |
| VM-Y04 | SAF | [SAFETY-CRITICAL] AI misclassification rate (drone vs non-drone) | ≤2% false positive rate at ≥90% confidence threshold | D | T | OM07 (Opp 18) / Phase 0 ODI — bird/debris misclassification [ASSUMPTION: G5 pending] | ✓ |
| VM-Y05 | SAF | Laser safety (if any aiming laser used) | Class 1 eye-safe (IEC 60825-1) or NO laser | D | I | S5 (Safety Officer) — no eye hazard to friendly forces | ✓ |
| VM-Y06 | SAF | AI classification safety integrity | Safety risk assessment per MIL-STD-882E (System Safety) for AI classification function (VM-Y03/Y04). Classification error leading to engagement of non-drone target = Severity II (Critical), Probability D (Remote). Document hazard analysis before Phase 3. | D | A | [QC-RUN12] Safety-critical AI classification has no referenced safety standard. MIL-STD-882E selected over IEC 61508 — better fit for military system-level risk assessment. | ✓ |
| **8. ERGONOMICS** | | | | | | | |
| VM-H01 | ERG | Training time to competence ("follow the dot") | ≤2 hours classroom + practical combined | D | D | OM02 (Opp 16) — mass infantry minimal training budget | ✓ |
| VM-H02 | ERG | Power-on to operational readiness | ≤3 seconds from switch ON to indicator active | D | T | OM01 (Opp 15) — combat: seconds matter | ✓ |
| VM-H03 | ERG | Mount/dismount time (Picatinny clip) | ≤30 seconds, no tools | D | D | Consumption chain job: quick mount/dismount | ✓ |
| VM-H04 | ERG | Display readability in direct sunlight | ≥1,000 nits OLED brightness OR auto-brightness | D | T | Vietnam tropical sunlight (≥100,000 lux outdoors) [ASSUMPTION] | ✓ |
| VM-H05 | ERG | Eye relief (display to eye distance) | Compatible with standard shooting position (25-75 mm) | W | D | Must not require unnatural head position [ASSUMPTION] | ✓ |
| VM-H06 | ERG | Controls | ≤1 external control (power button). Zero menu selections required during operation. | D | I | "Follow the dot" paradigm — zero cognitive load. S4 (Commander): no complex training. | ✓ |
| **9. PRODUCTION** | | | | | | | |
| VM-P01 | PRD | Housing: injection-moldable with Workshop X tooling | Single-cavity mold, ≤2 undercuts | D | I | S7 (Workshop X) — existing injection molding capability | ✓ |
| VM-P02 | PRD | PCB assembly on existing SMT line | ≤200 SMD components, ≤4 BGA packages | W | I | S7 (Workshop X) — SMT line component limits [ASSUMPTION] | ✓ |
| VM-P03 | PRD | Production rate target | ≥100 units/month by Q1 2027 | W | A | 10,000-unit initial lot ÷ 5-year ramp [ASSUMPTION] | ✓ |
| VM-P04 | PRD | Unique BOM component count | ≤50 unique part numbers | W | I | C5 resolution — Workshop X manageability threshold | ✓ |
| **10. QUALITY CONTROL** | | | | | | | |
| VM-Q01 | QC | Functional acceptance test (production) | 100% units: power-on + AI detection + indicator display + BLE handshake | D | T | S7/S3 — every unit tested before shipping | ✓ |
| VM-Q02 | QC | Defect rate (factory outgoing) | ≤1% (≤10 per 1,000 units) | D | I | Mass procurement quality expectation [ASSUMPTION] | ✓ |
| VM-Q03 | QC | Environmental sample testing (production lot) | 3 units per 1,000-unit lot: MIL-STD-810H shock + vibration + temperature | W | T | Sample destructive testing — cost-effective for volume | ✓ |
| **11. ASSEMBLY** | | | | | | | |
| VM-A01 | ASM | Field disassembly for battery replacement | ≤60 seconds, tool-free, gloved hands (winter gloves) | D | D | S3 (Maintainer) + S2 (End-user) — field conditions | ✓ |
| VM-A02 | ASM | Factory assembly time per unit | ≤45 minutes (target: ≤30 minutes) | W | I | Production rate requirement VM-P03 at 100 units/month [ASSUMPTION] | ✓ |
| VM-A03 | ASM | Field-replaceable sub-assemblies | Field-replaceable parts: 1 (battery). All other repairs require depot disassembly (≥2 fasteners requiring T10 Torx). | D | I | C2 resolution — cost vs reliability trade | ✓ |
| **12. TRANSPORT** | | | | | | | |
| VM-T01 | TRN | Transport vibration survival | MIL-STD-810H Method 514.8 Category 4 (truck transport) | D | T | Military logistics — moved by truck convoy | ✓ |
| VM-T02 | TRN | Packaging | Individual box ≤200×100×100 mm, stackable, 50-unit carton | W | I | S8 (Logistics) — battalion-scale delivery packaging | ✓ |
| VM-T03 | TRN | Export control classification | EAR99 target classification. If Jetson module ECCN ≥3A991 → obtain BIS ruling before Phase 3. | D | A | [ASSUMPTION: may require Commerce Dept ruling for Jetson Orin Nano] | ⚠ |
| **13. OPERATION** | | | | | | | |
| VM-O01 | OPR | Operating temperature | -10°C to +55°C (same as VM-M02) | D | T | MIL-STD-810H — Vietnam highland to delta | ✓ |
| VM-O02 | OPR | Humidity tolerance | 95% RH non-condensing at 40°C | D | T | MIL-STD-810H Method 507.6 — tropical monsoon environment | ✓ |
| VM-O03 | OPR | Dust/sand resistance | IP6X (dust-tight) per IEC 60529 | D | T | MIL-STD-810H Method 510.7 — field use in dusty conditions | ✓ |
| VM-O04 | OPR | Rain resistance (main body) | IPX7 (1m immersion for 30 min) per IEC 60529 | D | T | IP67 main body — monsoon + river crossing [C3 resolution] | ✓ |
| VM-O05 | OPR | Rain resistance (battery door) | IPX5 (water jet) per IEC 60529 | D | T | IP65 battery door — C3 resolution trade | ✓ |
| VM-O10 | OPR | EMC/EMI immunity | Radiated immunity per IEC 61000-4-3 (3 V/m, 80 MHz–2.7 GHz). Conducted immunity per IEC 61000-4-6. BLE 5.0 (2.4 GHz) shall not be disrupted by co-located VHF/UHF military radios at 1m distance. | D | T | [QC-RUN12] V-M has BLE radio in military RF environment — untested EMC = jammed device or comms interference. [ASSUMPTION: G6 TCVN standards pending] | ✓ |
| VM-O11 | OPR | EMC/EMI emissions | Radiated emissions per IEC 61000-4 / CISPR 32 Class B or TCVN 7699 equivalent. V-M shall not interfere with military VHF/UHF radios at 1m distance. | D | T | [QC-RUN12] BLE transmitter could cause spurious RF emissions. [ASSUMPTION: G6 TCVN standards pending] | ✓ |
| VM-O06 | OPR | Drone detection range (daylight, ≥30 cm wingspan target) | ≥200 m (D), ≥150 m minimum acceptable (kill threshold) | D | T | P11 §3 / OM03 (Opp 14) — smaller optic than V-L | ✓ |
| VM-O09 | OPR | Detection probability at specified range (daylight, ≥30 cm target at 200m) | Pd ≥90% at 200m, Pd ≥95% at 150m (kill threshold range) | D | T | Complements VM-Y04 (FPR). Both error directions required: FPR = false engagement, FNR = missed threat. [QC-RUN12] | ✓ |
| VM-O07 | OPR | Drone detection range (low light, dusk/dawn) | ≥100 m [ESTIMATE: needs verification] | W | T | AI performance degrades in low light. No NV on V-M. | ⚠ |
| VM-O08 | OPR | Target classification categories | 4 classes minimum: drone (multi-rotor), drone (fixed-wing), bird, other/unknown | D | T | OM07 / FR-IFF-01 — misclassification reduction | ✓ |
| **14. MAINTENANCE** | | | | | | | |
| VM-N01 | MNT | MTBF (mean time between failures) | ≥1,500 hours (D), ≥2,000 hours (W) | D/W | A | C2 resolution — 1,500h D, 2,000h W | ✓ |
| VM-N02 | MNT | MTTR (mean time to repair — depot level) | ≤2 hours | W | D | Depot technician with standard tools | ✓ |
| VM-N03 | MNT | Field calibration required | Zero user calibration steps. AI auto bore-sight: ≤3 sec on power-on, ≤0.5 mrad residual error. | D | D | Consumption chain: "zero maintenance." S3 (Maintainer). | ✓ |
| VM-N04 | MNT | Operator fault indicator (visible during use) | LED or OLED icon visible to operator in shooting position: ≥3 states — OK (steady) / FAULT (flashing) / LOW BATTERY (slow flash). Distinct from power-off (no light). | D | T | [QC-RUN12] Upgraded W→D: AI failure indistinguishable from power-off is unsafe — soldier must know system is faulted vs simply off. S3 (Maintainer) + S2 (End-user). | ✓ |
| VM-N05 | MNT | Software/firmware update method | USB-C or BLE OTA. No field update required (depot only). | W | D | AI model updates pushed at depot, not by end-user | ✓ |
| VM-N06 | MNT | Degraded mode behavior | Define behavior for 3 partial-failure states: (1) CMOS sensor fault → display "SENSOR FAULT", suppress all indicators; (2) AI inference hang (>500ms no output) → display "AI FAULT", suppress indicators; (3) Thermal throttle (VM-M05 limit) → reduce inference rate to ≤15 Hz, display "THERMAL" warning. No degraded state shall display a stale lead indicator. | D | T | [QC-RUN12] No degraded mode defined. Partial HW failure could produce stale/incorrect indicator without operator awareness. | ✓ |
| **15. COSTS** | | | | | | | |
| VM-C01 | CST | Unit manufacturing cost (BOM + labor) | ≤$500 (D), target $300-400 (W) | D | A | P11 §3 / OM14 (Opp 19) — #1 opportunity. Kill if >$600. | ✓ |
| VM-C02 | CST | Local content by value | ≥60% (D), target 75% (W) | D | A | P11 §2 / S6 (MoD) — defense sovereignty requirement | ✓ |
| VM-C03 | CST | Development cost (NRE) to first article | ≤$50,000 [ESTIMATE: needs verification] | W | A | V-M reuses V-L AI core — NRE is housing + optics + integration only [ASSUMPTION] | ⚠ |
| VM-C04 | CST | Warranty cost per unit (12-month) | ≤$15/unit (≤3% of sale price) | W | A | [ASSUMPTION: based on defect rate VM-Q02 × typical repair cost] | ⚠ |
| **16. SCHEDULES** | | | | | | | |
| VM-D01 | SCH | Phase 1 Gate 2 (requirements complete) | Q1 2026 | D | I | Current phase — this document | ✓ |
| VM-D02 | SCH | Phase 2 Gate 3 (concept selected) | Q2 2026 | D | I | P11 §3 — 12-month total to first unit | ✓ |
| VM-D03 | SCH | Phase 3 Gate 4 (layout finalized) | Q3 2026 | D | I | Must complete before prototype build | ✓ |
| VM-D04 | SCH | First article delivery | Q4 2026 | D | I | P11 §3 — fastest family product | ✓ |
| VM-D05 | SCH | Production ramp to ≥100 units/month | Q1 2027 [ESTIMATE] | W | I | Follows first article + qualification | ⚠ |

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| **Total requirements** | **78** |
| Requirements per category (avg) | 4.88 |
| Categories with ≥2 requirements | 16/16 ✅ |
| D (Demand) | 54 (69%) |
| W (Wish) | 24 (31%) |
| [SAFETY-CRITICAL] tagged | 4 (VM-Y01, VM-Y02, VM-Y03, VM-Y04) |
| [ASSUMPTION] tagged | 21 (+3 from MEDIUM amendments: VM-O10, VM-O11, VM-E07) |
| [ESTIMATE: needs verification] | 5 (VM-O07, VM-T03, VM-C03, VM-C04, VM-D05) |
| Quantified (numeric value + unit) | 100% (post-P14 audit + QC Run #12 amendments) |
| Vague qualifiers used | 0 |
| **[QC-RUN12] HIGH amendments** | +4 new reqs (VM-S08, VM-S09, VM-E06, VM-O09), 1 W→D upgrade (VM-N04) |
| **[QC-RUN12] MEDIUM amendments** | +6 new reqs (VM-O10, VM-O11, VM-Y06, VM-M05, VM-E07, VM-N06), IFF→classification rename (VM-S04, VM-Y03) |

### Category Distribution

| Category | Count | Min Met? |
|----------|-------|----------|
| 1. Geometry | 5 | ✅ |
| 2. Kinematics | 2 | ✅ |
| 3. Forces | 3 | ✅ |
| 4. Energy | 7 | ✅ |
| 5. Material | 5 | ✅ |
| 6. Signals | 9 | ✅ |
| 7. Safety | 6 | ✅ |
| 8. Ergonomics | 6 | ✅ |
| 9. Production | 4 | ✅ |
| 10. Quality Control | 3 | ✅ |
| 11. Assembly | 3 | ✅ |
| 12. Transport | 3 | ✅ |
| 13. Operation | 11 | ✅ |
| 14. Maintenance | 6 | ✅ |
| 15. Costs | 4 | ✅ |
| 16. Schedules | 5 | ✅ |
| **TOTAL** | **78** | ✅ (near upper bound — justified by QC-driven completeness) |

### ODI Traceability

| Outcome | Opp | Mapped to Requirements |
|---------|-----|----------------------|
| OM14 (cost) | 19 | VM-C01, VM-C02 |
| OM07 (misclassification) | 18 | VM-Y03, VM-Y04, VM-S04, VM-O08 |
| OM06 (lead accuracy) | 16 | VM-S06 |
| OM02 (training) | 16 | VM-H01, VM-H06 |
| OM05 (latency) | 16 | VM-S02 |
| OM01 (power-on) | 15 | VM-H02 |
| OM12 (recompute) | 14 | VM-S07 |
| OM09 (hit probability) | 14 | VM-S06, VM-K01, VM-K02 (indirect) |
| OM03 (detection range) | 14 | VM-O06, VM-O07, VM-O09 (Pd), VM-S08 (FOV) |
| OM08 (confidence clarity) | 14 | VM-S04 |
| OM15 (weight) | 13 | VM-G02 |
| OM17 (battery) | 13 | VM-E02, VM-E03, VM-E06 (cold-temp) |
| OM04 (acquire time) | 13 | VM-S01, VM-S02 (indirect) |
| OM16 (weapon compat) | 12 | VM-G03, VM-G04 |
| OM13 (data capture) | 11 | VM-S05 (BLE optional) |
| OM10 (rounds to neutralize) | 11 | VM-S06 (indirect — better aim = fewer rounds) |
| OM11 (post-shot tracking) | 11 | VM-S07 |

**All 17 ODI outcomes mapped to ≥1 requirement. ✅**

### Stakeholder Traceability

| Stakeholder | Key Requirements Addressed |
|-------------|--------------------------|
| S1 (Logistics Command) | VM-C01, VM-C02, VM-T02, VM-D04 |
| S2 (Rifleman) | VM-G02, VM-H01-H06, VM-E02, VM-F01-F03 |
| S3 (Maintainer) | VM-G05, VM-A01, VM-A03, VM-N01-N05 |
| S4 (Commander) | VM-H01, VM-O06, VM-Y03 |
| S5 (Safety Officer) | VM-Y01-Y05, VM-S04 |
| S6 (MoD/TCVN) | VM-C02, VM-M03, VM-T03 |
| S7 (Workshop X) | VM-P01-P04, VM-M01 |
| S8 (Logistics System) | VM-T01-T02, VM-O01-O05, VM-E01 |

---

## HITL CHECKPOINT

**68 requirements generated across all 16 categories.**

Review focus areas before P14 audit:
1. **[SAFETY-CRITICAL] tags** — 4 tagged (VM-Y01 through VM-Y04). Any missing?
2. **[ESTIMATE] items** — 5 marked. These need verification sources before gate.
3. **[ASSUMPTION] count** — 18 of 68 (26%). Acceptable for draft but should drop to ≤15% by gate.
4. **Export control (VM-T03)** — flagged ⚠. Jetson module EAR classification is a potential program blocker.

**Ready for P14 D/W Audit?**
