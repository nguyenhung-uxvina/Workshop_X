---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2206:2021 — System Design
mode: RETROACTIVE
step: SA5
---

# SA5: VERIFICATION & VALIDATION PLAN — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE
**Standard:** VDI 2206:2021, Step SA5 — Assurance of Properties (Eigenschaftsabsicherung)

---

## VERIFICATION MATRIX (Did we build the system RIGHT?)

### Cross-Domain Requirements (ICD-critical)

| Req-ID | Requirement | Level | Method | When | Domain Owner | Physical Test? |
|--------|------------|-------|--------|------|-------------|:--------------:|
| **S-01** | Latency trigger→visual ≤50ms | **System** | **Test** (oscilloscope + photodiode) | Phase 3 PoC | SHARED (ELEC+SW) | ✅ **YES** |
| **T-03** | Ballistic ±5% vs TM tables | Subsystem | Test (automated comparison) + Analysis | Phase 3 | SW | ✅ verify vs firing range data |
| **K-03** | Motion roll ±12°, pitch ±8° | Subsystem | Test (IMU measurement) | Phase 3 | SHARED (ELEC+MECH) | ✅ **YES** |
| **K-04** | Wave period 4-8s | Subsystem | Test (log actuator + compare JONSWAP) | Phase 3 | SHARED (SW+ELEC) | ✅ **YES** |
| **F-01** | Recoil ≥8N peak | Component | **Test** (force gauge) | **Phase 3 PoC (2026-05-07)** | ELEC | ✅ **YES — physical gate** |
| **Q-03** | Motion accuracy ±0.5° | Subsystem | Test (IMU vs command) | Phase 3 | ELEC | ✅ **YES** |
| **Sa-02** | E-stop ≤1s | **System** | **Test** (stopwatch + video) | Phase 3 | SHARED (MECH+ELEC) | ✅ **YES** |
| **G-03** | FOV ≥150° ngang, ≥50° dọc | System | **Inspection** (protractor + laser) | Phase 3 | MECH+ELEC | ✅ **YES** |
| **S-07** | Hit detection ≥95% | System | Test (automated test suite: 1000 shots) | Phase 3 | SW | ⚠️ SW test, physical validation Phase 4 |

### Domain-Specific Requirements (selected critical)

| Req-ID | Requirement | Level | Method | When | Domain Owner | Physical Test? |
|--------|------------|-------|--------|------|-------------|:--------------:|
| **E-02** | Power ≤5kW | System | **Test** (power meter) | Phase 3 | ELEC | ✅ **YES** |
| **E-03** | UPS ≥15 min | Component | Test (load test + timer) | Phase 3 | ELEC | ✅ **YES** |
| **T-01** | Frame rate ≥60fps | Subsystem | Test (Unity profiler + FPS counter) | Phase 3 | SW | ✅ on target HW |
| **Er-05** | Audio ≥85dB at gunner | Component | Test (SPL meter) | Phase 3 | ELEC | ✅ **YES** |
| **Q-05** | Boot self-test ≤2 min | System | Test (stopwatch) | Phase 4 | SW+ELEC | ✅ **YES** |
| **O-07** | ≥10 pre-built scenarios | System | Inspection (count) | Phase 4 | SW | ❌ content check |
| **Ma-01** | MTBF ≥500h | System | **Analysis** (component MTBF calc) | Phase 3 | ALL | ⚠️ field data needed |
| **P-01** | Local content ≥60% | System | Analysis (BOM value calc) | Phase 4 | ALL | ❌ cost analysis |
| **L-04** | Sovereignty — offline operation | System | **Demonstration** (disconnect internet, run 8h) | Phase 4 | SW | ✅ **YES** |

### Analyst Trap Guard

| Verification Method | Count | Has Physical Follow-up? |
|--------------------|:-----:|:-----------------------:|
| **Test** (physical measurement) | **12** | ✅ inherently physical |
| **Analysis** (calculation/simulation) | 2 | ⚠️ Ma-01 needs field hours, P-01 = cost calc |
| **Inspection** (visual/count) | 2 | ✅ physical inspection |
| **Demonstration** (operate & observe) | 1 | ✅ L-04 disconnect test |

**Rule:** 12/17 (71%) verified by physical test → **PASS** analyst trap guard.
**Flag:** Ma-01 (MTBF) = analysis only until fleet accumulates 500h field hours. Accept [L4-ESTIMATE] for Phase 3, validate in field.

---

## VALIDATION PLAN (Did we build the RIGHT system?)

| # | Stakeholder Need | Validation Method | When | Pass Criteria | Domain |
|---|-----------------|-------------------|------|--------------|--------|
| V-01 | Xạ thủ learns lead angle correctly | **Training transfer study** — compare sim scores vs live-fire hit rate | Post-Phase 4 (6 weeks) | Sim-trained group ≥80% of live-trained group accuracy | ALL |
| V-02 | Xạ thủ detects UAV ≥300m in sim | **User acceptance test** — 10 gunners × 5 scenarios | Phase 3 prototype | ≥8/10 gunners detect UAV at 300m within 5s | SW+ELEC |
| V-03 | Instructor can run session independently | **User acceptance test** — instructor operates solo after 2-day training | Phase 3 prototype | Instructor runs 4h session without WX support | SW |
| V-04 | Weapon swap ≤5 min | **Demonstration** — timed swap by untrained operator | Phase 3 prototype | 3/3 operators complete swap ≤5 min | MECH+ELEC+SW |
| V-05 | Recoil feels "real enough" | **Subjective evaluation** — 10 gunners rate 1-5 Likert scale | Phase 3 PoC | Mean ≥3.0 ("acceptable"), no score = 1 | MECH+ELEC |
| V-06 | Ship motion feels "real enough" | **Subjective evaluation** — same cohort | Phase 3 prototype | Mean ≥3.0, no motion sickness reported | MECH+ELEC+SW |
| V-07 | System survives 8h continuous operation | **Endurance test** — run 8h with scenario rotation | Phase 4 | Zero crash, FPS never <30, no thermal shutdown | ALL |
| V-08 | MoD procurement officers accept price/capability | **Customer demo** — invited demo day | Post-Phase 3 | ≥1 written expression of interest | ALL |

---

## PHYSICAL PROTOTYPE PLAN (link to dP/dt)

| Prototype | Purpose | Domains Tested | Interfaces Verified | Target Date | Status |
|-----------|---------|---------------|--------------------:|-------------|--------|
| **P1: SS1 Weapon Station PoC** | Recoil feel, encoder accuracy, trigger response, Unity integration | MECH+ELEC+SW | IF-01a,b,d · IF-02a,b,c,e | **2026-05-07** | ⏳ PLANNED |
| **P2: SS2 Visual PoC** | 3-projector setup, edge-blend, warp mesh, latency measurement | ELEC+SW+MECH | IF-02 chain · IF-05a,b,c | 2026-06 (est) | 📋 NOT PLANNED |
| **P3: SS3 Motion PoC** | 2-DOF motion, PID tuning, wave fidelity, safety E-stop | MECH+ELEC+SW | IF-03a,b,c,d · IF-04a,b,c | 2026-06 (est) | 📋 NOT PLANNED |
| **P4: System Integration** | All SS combined, full latency chain, 8h endurance | **ALL** | **ALL ICD** | 2026-07 (est) | 📋 NOT PLANNED |
| **P5: User Validation** | Training transfer study, customer demo | ALL + operators | N/A (system-level) | 2026-08 (est) | 📋 NOT PLANNED |

**dP/dt status:** 1 physical prototype planned (P1). P2-P5 estimated but not committed.
**⚠️ GAP:** Only P1 has firm date. P2-P5 dates are estimates — CEO must commit dates after P1 results.

### P1 Success Criteria (from Status.md — confirmed)

1. CNC cradle holds weapon mockup rigidly
2. Encoder reads azimuth ±0.5° and elevation ±0.5°
3. Unity receives encoder data at ≥30 Hz
4. Trigger solenoid fires on Unity command with ≤50ms latency
5. Solenoid recoil impulse is perceptible to operator

**ICD interfaces tested by P1:** IF-01a (encoder mount), IF-01b (solenoid mount), IF-01d (trigger mount), IF-02a-c (sensor→Unity chain), IF-02e (recoil command)

**ICD interfaces NOT tested by P1:** IF-03 (motion), IF-04 (wave sync), IF-05 (projection) → need P2, P3.

---

## MODEL INVENTORY (VDI 2206 Blue Strand)

| Model | Type | Exists? | Domain | Confidence | Needs Physical Validation? |
|-------|------|:-------:|--------|:----------:|:--------------------------:|
| Ballistic 6DOF | Mathematical (spreadsheet) | ⚠️ PLANNED | SW | L5-ASSUMPTION | ✅ vs TM tables + firing range |
| Ocean FFT (JONSWAP) | Mathematical (Unity shader) | ⚠️ PLANNED | SW | L4-ESTIMATE | ✅ vs video of real sea state |
| Latency budget | Analytical (table) | ✅ YES (SA4) | SHARED | L4-ESTIMATE | ✅ oscilloscope measurement |
| Power budget | Analytical (table) | ✅ YES (SA4) | ELEC | L3-CALCULATED | ✅ power meter |
| Cost model | Analytical (table) | ✅ YES (SA4) | ALL | L4-ESTIMATE | ❌ BOM quote validation |
| Motion PID | Control model | ❌ NO | ELEC | — | ✅ actuator bench test |
| Thermal model | Analytical | ❌ NO | ELEC | — | ⚠️ may need for enclosed cabin |
| Structural (cradle) | CAD + FEM | ❌ NO | MECH | — | ✅ load test on P1 |
| Structural (platform) | CAD + FEM | ❌ NO | MECH | — | ✅ load test on P3 |
| Warp mesh (projection) | Geometric | ❌ NO | SW+MECH | — | ✅ calibration on P2 |

**Blue Strand Assessment:** 3/10 models exist (budgets + latency). 7 models needed but not yet created. Critical gap: Motion PID model (needed before P3) and Warp mesh (needed before P2).

---

*Next: SA6 (Architecture Review Gate) → CEO checkpoint*
