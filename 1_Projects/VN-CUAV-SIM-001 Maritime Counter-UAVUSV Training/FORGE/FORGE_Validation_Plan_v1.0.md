# FORGE VALIDATION PLAN — VN-CUAV-SIM-001
## ACH Validation Infrastructure — 4-Stage Plan
## Maritime Counter-UAV/USV Shooting Training Simulation

**Date:** 2026-04-07
**Method:** FORGE Validate (Lab → Field Sim → Operational → Continuous)
**Input:** SHIFT v1.0 (6/6 PASS), Cost v1.0, Job Map v1.0, Requirements v1.0 (101 reqs)
**ACH Layers:** 7 (Ballistic, Targets, Environment, Motion, Scoring, Adaptive, Weapon)

---

## 1. VALIDATION OBJECTIVES

1. **Prove ballistic accuracy** — V-SMASH 6DOF model ≤5% error vs TM tables (Q-01, T-03)
2. **Prove scoring validity** — hit/miss classification ≥95% (S-07, O-30)
3. **Prove training transfer** — simulator training improves live-fire performance (T-08)
4. **Define Performance Envelope** — where each ACH layer works / degrades / fails
5. **Verify fallback activation** — every Level 2 fallback triggers correctly
6. **Prove latency budget** — end-to-end ≤50ms (S-01)
7. **Collect baseline data** for Stage 4 continuous monitoring

---

## 2. REQUIREMENTS TRACEABILITY

| Req ID | Requirement | ACH Layer | Stage | Method | Pass Criteria |
|--------|------------|:---------:|:-----:|:------:|---------------|
| Q-01 | Ballistic ≤1 mrad @ 1000m (12.7mm B-32) | ACH-1 | 1 | T | ≤1 mrad deviation |
| T-03 | Ballistic ±5% vs TM tables 100-1500m | ACH-1 | 1 | A+T | Error ≤5% at each 100m increment |
| S-07 | Hit/miss classification ≥95% | ACH-5 | 1,2 | T | ≥95% over 1000 shots |
| S-01 | End-to-end latency ≤50ms | All | 1 | T | Measured ≤50ms (trigger→visual) |
| T-01 | Frame rate ≥60 fps continuous | ACH-2,3 | 1 | T | No drop below 60fps in 8h test |
| T-04 | Ship motion roll ±5-15°, pitch ±3-10° SS1-4 | ACH-4 | 1,2 | T | Motion profile matches ±0.5° commanded |
| Q-03 | Motion platform accuracy ±0.5° | ACH-4 | 1 | T | Measured ±0.5° |
| T-05 | ≥5 UAV attack profiles | ACH-2 | 2 | D | 5 distinct behaviors demonstrated |
| T-02 | UAV Group 1 visible ≥300m in scene | ACH-3 | 2 | D | DJI Mavic 30cm identifiable at 300m |
| Er-04 | No coding for instructor scenario creation | ACH-2 | 2,3 | D | Instructor creates scenario ≤15 min |
| T-08 | Training transfer ≥20% live-fire improvement | All | 3 | T | Pre/post live-fire accuracy comparison |
| Q-04 | 8h burn-in without failure | All | 1 | T | Zero crash/restart in 8h |
| O-02 | Continuous operation ≥8h/day | All | 2,3 | D | 5 consecutive days ×8h |
| Sa-02 | E-stop ≤1s full stop | ACH-4 | 1 | T | Measured ≤1s from button to zero motion |
| K-01 | Weapon traverse ≥60°/s | ACH-7 | 1 | T | Measured ≥60°/s |

Methods: I=Inspection, A=Analysis, D=Demonstration, T=Test

---

## 3. STAGE 1: LAB VALIDATION (Tại Workshop X)

**Prerequisite:** HELIX Gate 3 passed (embodiment complete), first prototype built
**Duration:** 2-3 tuần
**Location:** Phòng thí nghiệm WX
**Personnel:** WX engineers (Core: CEO supervises)

### 3A. Ballistic Accuracy Test (ACH-1) ★ CRITICAL

| Test # | Name | Input | Expected Output | Pass/Fail | Duration |
|--------|------|-------|----------------|:---------:|:--------:|
| BA-01 | 12.7mm B-32 trajectory vs TM | Fixed aim (0°,0°), range 100-1500m in 100m steps | Impact point deviation | ≤5% at each range | 2h |
| BA-02 | 12.7mm B-32 with crosswind 5m/s | Same as BA-01 + wind vector | Wind-corrected impact | ≤5% | 1h |
| BA-03 | 12.7mm B-32 with ship motion (roll 10°, pitch 5°) | Fixed aim + sea state 3 | Motion-compensated trajectory | ≤8% (relaxed for motion) | 2h |
| BA-04 | 14.5mm BS trajectory vs TM | Same as BA-01 for 14.5mm | Impact deviation | ≤5% | 2h |
| BA-05 | 23mm OFZ trajectory vs TM | Same as BA-01 for 23mm | Impact deviation | ≤5% | 2h |
| BA-06 | Extreme range (1500-2500m) | Beyond normal engagement | Graceful divergence, no NaN | No crash, error ≤10% | 1h |

**Method:** Compare V-SMASH output vs published TM tables (JBM Ballistics cross-reference). Log every data point. Generate deviation plot per range.

**Equipment needed:**
- Published TM tables for 12.7mm B-32, 14.5mm BS, 23mm OFZ (available from military manuals)
- JBM Ballistics Calculator (free, cross-reference)
- Python script for automated comparison (WX develops)
- CSV export from V-SMASH for each test point

### 3B. Scoring Accuracy Test (ACH-5)

| Test # | Name | Input | Expected Output | Pass/Fail | Duration |
|--------|------|-------|----------------|:---------:|:--------:|
| SC-01 | Hit detection — stationary target | 100 shots at stationary UAV (known hit/miss) | ≥95% correct classification | ≥95/100 | 1h |
| SC-02 | Hit detection — moving target | 100 shots at DJI Mavic profile 30km/h | ≥95% correct | ≥95/100 | 1h |
| SC-03 | Hit detection — high-speed target | 100 shots at FPV kamikaze 200km/h | ≥90% correct (relaxed) | ≥90/100 | 1h |
| SC-04 | Near-miss classification | 50 shots with impact <1m from target | Correct miss, not false hit | 0 false hits | 30m |
| SC-05 | Scoring consistency | Same scenario replayed 10× | Score variance ≤3% | σ ≤3% | 1h |

**Method:** Pre-scripted aim sequences fed via automated encoder input. Ground truth = calculated collision volume intersection.

### 3C. Latency Test (All ACH Layers)

| Test # | Name | Method | Pass Criteria | Duration |
|--------|------|--------|:------------:|:--------:|
| LT-01 | Trigger → visual feedback | High-speed camera 240fps on trigger + screen | ≤50ms | 30m |
| LT-02 | Encoder → aim update | Oscilloscope on encoder pulse + screen pixel | ≤16ms (1 frame) | 30m |
| LT-03 | Motion command → actuator response | Accelerometer on platform vs UDP timestamp | ≤30ms | 30m |
| LT-04 | NFC detect → config complete | Timestamp log from NFC read to UI update | ≤3s | 15m |
| LT-05 | Cold boot → ready | Stopwatch from power-on to "Ready" screen | ≤5 min | 15m |

### 3D. Motion Platform Test (ACH-4)

| Test # | Name | Input | Pass Criteria | Duration |
|--------|------|-------|:------------:|:--------:|
| MP-01 | Roll accuracy | Command ±12° sine, period 6s | ±0.5° of commanded | 30m |
| MP-02 | Pitch accuracy | Command ±8° sine, period 5s | ±0.5° of commanded | 30m |
| MP-03 | Combined roll+pitch | Sea state 3 profile | Match profile ±0.5° | 30m |
| MP-04 | E-stop response | Full motion → E-stop button | ≤1s to zero | 15m |
| MP-05 | 8h endurance | SS2 profile continuous | No drift, no overheat | 8h |
| MP-06 | Overload 150kg | 100kg weight + 50kg simulated | No failure, ±0.5° maintained | 30m |

### 3E. Weapon Station Test (ACH-7)

| Test # | Name | Pass Criteria | Duration |
|--------|------|:------------:|:--------:|
| WS-01 | Traverse speed ≥60°/s | Measured with encoder | 15m |
| WS-02 | Elevation range -10° to +87° | Full sweep, no binding | 15m |
| WS-03 | Recoil impulse 15-20N (DSHK) | Force gauge measurement | 15m |
| WS-04 | NFC weapon swap WM-01→WM-02 | Complete in ≤5 min, auto-config verified | 15m |
| WS-05 | NFC weapon swap all 5 modules | Each module recognized and configured | 30m |
| WS-06 | Magnetic brake 0-10Nm | Torque measurement at 3 settings | 15m |

### 3F. System Integration Test

| Test # | Name | Pass Criteria | Duration |
|--------|------|:------------:|:--------:|
| SI-01 | 8h burn-in (Q-04) | Zero crash, zero restart | 8h |
| SI-02 | Frame rate under load (8 targets + effects) | ≥60fps sustained | 2h |
| SI-03 | AAR replay fidelity | Replay matches live session ±1 frame | 1h |
| SI-04 | Scenario library — all 10 pre-built | Each runs without error | 2h |
| SI-05 | Self-test on boot | All subsystems pass/fail correct | 30m |
| SI-06 | UPS switchover | Power cut → UPS holds → graceful save | 15m |

### Stage 1 Summary

| Category | # Tests | Duration | Equipment Cost |
|----------|:-------:|:--------:|:--------------:|
| Ballistic (BA) | 6 | 10h | ~$0 (SW tools) |
| Scoring (SC) | 5 | 4.5h | ~$0 (automated) |
| Latency (LT) | 5 | 2h | ~$200 (high-speed camera rental) |
| Motion (MP) | 6 | 10.5h | ~$100 (accelerometer) |
| Weapon (WS) | 6 | 1.5h | ~$50 (force gauge) |
| Integration (SI) | 6 | 13.5h | ~$0 |
| **TOTAL** | **34** | **~42h (~2 weeks)** | **~$350** |

**Stage 1 GO/NO-GO:**
- All BA tests PASS → proceed
- Any BA test FAIL → fix V-SMASH model, re-test (do not proceed)
- SC-01 < 95% → fix collision volume, re-test
- LT-01 > 50ms → optimize render pipeline
- MP-04 > 1s → redesign E-stop (safety-critical)

---

## 4. STAGE 2: FIELD SIMULATION (Tại đơn vị khách hàng)

**Prerequisite:** Stage 1 PASS
**Duration:** 1 tuần
**Location:** Phòng huấn luyện tại đơn vị hải quân (VN Navy base)
**Personnel:** 1 WX engineer + 1-2 VN Navy instructors + 3-5 xạ thủ

### 4A. Environmental Robustness

| Variable | Range to Test | Method |
|----------|:-------------|--------|
| Room temperature | 25-40°C (VN summer, AC may fail) | Test with AC off for 2h |
| Humidity | 70-95% (coastal) | Monitor GPU/projector temp |
| Power quality | 200-240V (VN fluctuation) | UPS handling test |
| Ambient light | Dark room vs. light leaks | Projector contrast assessment |
| Noise | Background naval activity (ships, generators) | Audio clarity test |

### 4B. Operator Usability (Real Instructors)

| Test # | Name | Method | Pass Criteria |
|--------|------|--------|:------------:|
| FU-01 | Instructor creates scenario from scratch | Observe + time | ≤15 min, no help needed |
| FU-02 | Instructor runs 3 consecutive sessions | Observe workflow | No confusion, smooth transitions |
| FU-03 | Weapon swap by instructor (not WX engineer) | WM-01→WM-02 | ≤5 min, first attempt |
| FU-04 | AAR debrief with real gunner | Instructor leads debrief | Gunner understands feedback |
| FU-05 | Vietnamese GUI completeness | Check all text | 100% Vietnamese, no English strings |

### 4C. Adversarial / Edge Case Testing

| Test # | Name | Scenario | Expected Behavior |
|--------|------|---------|-------------------|
| AE-01 | Extreme engagement: UAV at 10m (point blank) | FPV crash dive | No visual glitch, hit detection works |
| AE-02 | Extreme range: UAV at 2000m | Barely visible dot | Renders correctly, bullets reach |
| AE-03 | Swarm saturation: 8 targets (LITE max) | All 8 active + firing | ≥60fps maintained |
| AE-04 | Rapid weapon swap mid-session | Instructor swaps during exercise | Graceful pause, auto-config, resume |
| AE-05 | Power failure during session | Kill power | UPS holds, data saved, resume from save |
| AE-06 | Wrong weapon module (NFC mismatch) | Place WM-01 body + WM-02 NFC tag | System detects mismatch, alerts |
| AE-07 | Continuous 8h operation | Day-long training | No degradation, no memory leak |

### 4D. Fallback Trigger Testing

| Fallback | Trigger | Expected Response | Test Method |
|----------|---------|-------------------|-------------|
| Ballistic model error | Inject corrupt ballistic table | System loads last-known-good, alerts instructor | SW injection |
| Unity crash | Force-kill Unity process | Auto-restart, session restored from checkpoint | Task manager kill |
| Motion malfunction | Disconnect actuator cable | E-stop triggers, training continues visual-only | Physical disconnect |
| NFC failure | Cover NFC reader | Manual weapon selection available in GUI | Physical block |
| Projector failure (1 of 3) | Unplug 1 projector | System degrades to 2-screen (120°), alerts | Physical unplug |
| GPU overheat | Block GPU fan (briefly!) | Frame rate drops → warning → thermal throttle → shutdown | Controlled test |

### Stage 2 Summary

| Category | # Tests | Duration | Notes |
|----------|:-------:|:--------:|-------|
| Environmental | 5 | 1 day | Monitor logs |
| Usability | 5 | 1 day | Real instructors |
| Edge cases | 7 | 1 day | Adversarial |
| Fallback | 6 | 0.5 day | Each fallback path |
| **TOTAL** | **23** | **~3.5 days** | + 1.5 days setup/debrief |

---

## 5. STAGE 3: OPERATIONAL FIELD TEST (Training Transfer Validation)

**Prerequisite:** Stage 2 PASS
**Duration:** 6-8 tuần (with pre/post live-fire comparison)
**Location:** VN Navy training unit
**Personnel:** 10-20 xạ thủ (experiment group + control group)

### 5A. Training Transfer Protocol ★ CRITICAL

This is THE validation that justifies the product's existence.

```
TRAINING TRANSFER STUDY — VN-CUAV-SIM-001

DESIGN: Pre-post with control group
  Group A (Experiment): 40h simulator + 10h live fire
  Group B (Control):    0h simulator + 50h live fire
  Both groups: same total training hours (50h)

PRE-TEST (Week 0):
  Both groups: 50 rounds live fire at stationary + moving targets
  Measure: accuracy (%), reaction time (s), ammo efficiency (rounds/hit)

TRAINING PERIOD (Week 1-6):
  Group A: 40h on VN-CUAV-SIM-001 LITE (various scenarios, progressive difficulty)
           + 10h live fire at trường bắn
  Group B: 50h live fire at trường bắn (standard training method)

POST-TEST (Week 7):
  Both groups: same 50-round test as pre-test (identical conditions)
  Measure: same 3 metrics

ANALYSIS:
  Compare (Group A post - pre) vs (Group B post - pre)
  Target: Group A improvement ≥ 20% more than Group B (T-08 requirement)
  Statistical: paired t-test, n=10 per group, α=0.05, power=0.80
```

### 5B. Operational Metrics (6-week deployment)

| Metric | Target | Collection Method |
|--------|:------:|-------------------|
| System uptime | ≥95% of scheduled training hours | Automated log |
| Mean time between failures | ≥500h (Ma-01) | Failure log |
| Mean time to repair | ≤4h (Ma-02) | Repair log |
| Instructor satisfaction (1-5) | ≥4.0 | Survey after each week |
| Gunner satisfaction (1-5) | ≥3.5 | Survey after each session |
| Scenarios used per week | Tracking | Automated log |
| Average session length | Tracking | Automated log |
| Weapon swap frequency | Tracking | NFC log |

### 5C. User Feedback Collection

| Method | Timing | Sample |
|--------|--------|:------:|
| Structured interview (instructor) | Week 2, 4, 6 | 2-3 instructors |
| Structured interview (gunners) | Week 3, 6 | 5-10 gunners |
| Observation (WX engineer watches training) | Week 1, 3, 5 | Full sessions |
| Bug/issue log | Continuous | All users |
| Feature request log | Continuous | All users |

### Stage 3 GO/NO-GO

| # | Criterion | Threshold | Consequence if FAIL |
|---|----------|:---------:|---------------------|
| 1 | Training transfer ≥20% | Group A outperforms B by ≥20% | Re-evaluate scenario design |
| 2 | System uptime ≥95% | ≥95% of scheduled hours | Fix reliability issues |
| 3 | MTBF ≥500h | No failure in 6-week test | Design review |
| 4 | Instructor satisfaction ≥4.0 | Average score ≥4.0/5.0 | UI/workflow redesign |
| 5 | Zero safety incidents | 0 | Mandatory design review |

---

## 6. STAGE 4: CONTINUOUS MONITORING (Post-Deployment)

**Prerequisite:** Stage 3 PASS + units deployed
**Duration:** Ongoing (lifetime of product)

### 6A. Telemetry Pipeline

| Data Point | Frequency | Storage | Purpose |
|-----------|:---------:|:-------:|---------|
| Session summary (duration, scenarios, scores) | Per session | Local SQLite + USB export | Usage tracking |
| Aim trace (10Hz per session) | Per session | Local (50MB/session) | Training analytics + ACH-6 data flywheel |
| System health (GPU temp, fps, errors) | 1/min during operation | Local log, rotated monthly | Preventive maintenance |
| Weapon module usage (NFC count) | Per swap | NFC write-back | Maintenance scheduling |
| Failure events | On occurrence | Local + flag for service | MTBF tracking |

### 6B. Performance Drift Detection

| Metric | Baseline (from Stage 1) | Alert Threshold | Action |
|--------|:----------------------:|:---------------:|--------|
| Ballistic deviation | ≤5% | >7% | Re-validate V-SMASH model |
| Frame rate | ≥60fps | <55fps sustained 5min | GPU health check |
| Latency | ≤50ms | >65ms | System optimization |
| Hit/miss accuracy | ≥95% | <92% | Scoring algorithm review |
| Motion accuracy | ±0.5° | >±1.0° | Actuator calibration |

### 6C. Quarterly Revalidation

Every 3 months (or after any SW update):
1. Re-run BA-01 (ballistic baseline) — 2h
2. Re-run SC-01 (scoring baseline) — 1h
3. Re-run LT-01 (latency check) — 30m
4. Review telemetry drift dashboard
5. Compare current vs Stage 1 baseline

**Trigger for full re-validation:** Any metric degrades >10% from Stage 1 baseline → re-run full Stage 1.

---

## 7. PERFORMANCE ENVELOPE

> Filled after Stage 1-2 completion. Template below.

| Condition | ACH Layer | Performance | Category |
|-----------|:---------:|:-----------:|:--------:|
| Standard (indoor, 25°C, stable power) | All | Full spec | ✅ WORKS WELL |
| Sea State 1-3 motion | ACH-4 | Full spec | ✅ WORKS WELL |
| Sea State 4 motion | ACH-4 | ±1° error (relaxed) | ⚠️ DEGRADED |
| Sea State 5+ motion | ACH-4 | Beyond actuator range | ❌ FAILS → visual-only fallback |
| 8 simultaneous targets (LITE) | ACH-2 | ≥60fps | ✅ WORKS WELL |
| 12+ targets (LITE hardware) | ACH-2 | <60fps possible | ⚠️ DEGRADED → limit to 8 |
| Temperature >45°C (AC failure) | All | GPU throttle, <60fps | ⚠️ DEGRADED |
| Temperature >55°C | All | Auto-shutdown | ❌ FAILS → thermal protection |
| Power fluctuation ±10% | All | UPS compensates | ✅ WORKS WELL |
| Power fluctuation >±15% | All | UPS alarm, limited runtime | ⚠️ DEGRADED |
| 1 projector failure | ACH-3 | 120° FOV (2 screens) | ⚠️ DEGRADED → trainable |
| 2 projector failure | ACH-3 | 60° FOV (1 screen) | ❌ FAILS → session end |
| Range >1500m (12.7mm) | ACH-1 | ≤8% error (relaxed) | ⚠️ DEGRADED |
| Range >2500m | ACH-1 | >10% error | ❌ FAILS → beyond weapon envelope |
| Night/fog rendering | ACH-3 | Post-process, ≥60fps | ✅ WORKS WELL |
| NFC failure | ACH-7 | Manual config available | ⚠️ DEGRADED → manual workaround |

---

## 8. TEST INFRASTRUCTURE

| Item | Available? | Source | Lead Time | Cost |
|------|:---------:|--------|:---------:|:----:|
| High-speed camera (240fps) | Rent | VN camera rental | 1 day | $200 |
| Force gauge (0-50N) | Buy | Shopee/Lazada | 3 days | $30 |
| Accelerometer (ADXL345 + logger) | WX stock | In-house | 0 | $0 |
| Oscilloscope | WX stock | In-house | 0 | $0 |
| TM tables (12.7mm, 14.5mm, 23mm) | Available | Military manuals + JBM | 0 | $0 |
| Python comparison scripts | Develop | WX engineer, 2 days | 2 days | $0 |
| Trường bắn (Stage 3 live fire) | Navy | Coordinate with đơn vị | 4-6 weeks | $0 (MoD) |
| 10-20 xạ thủ (Stage 3) | Navy | Coordinate with đơn vị | 4-6 weeks | $0 (MoD) |
| **TOTAL test infrastructure cost** | | | | **~$230** |

---

## 9. SCHEDULE

| Phase | Activity | Duration | Dependencies |
|-------|----------|:--------:|:-------------|
| **Prototype build** | HELIX Phase 3-4 → first unit | 8-12 months | Current Phase 2 |
| **Stage 1: Lab** | 34 tests at WX | 2 weeks | Prototype complete |
| Fix & re-test | Address Stage 1 failures | 1-2 weeks | Stage 1 results |
| **Stage 2: Field Sim** | 23 tests at Navy base | 1 week | Stage 1 PASS + Navy coordination |
| Fix & iterate | Address Stage 2 findings | 1-2 weeks | Stage 2 results |
| **Stage 3: Operational** | 6-week training transfer study | 8 weeks | Stage 2 PASS + 20 xạ thủ assigned |
| **Stage 4: Continuous** | Telemetry + quarterly revalidation | Ongoing | Stage 3 PASS + units deployed |
| **Total validation timeline** | | **~14-18 weeks** (after prototype) | |

---

## 10. FORGE ROUTING

```
forge-validate FEEDS:
├── forge-trust → Stage 1-3 results = customer evidence
│   "Ballistic accuracy ≤5% verified in 15 range increments"
│   "Training transfer ≥20% validated with 20 gunners over 6 weeks"
├── forge-portfolio → Validation status per variant
├── forge-flywheel → Stage 4 telemetry = data flywheel input (ACH-6)
├── helix-detail-finalize → Test infrastructure requirements in BOM
└── bridge-knowledge-base → L2: validation methodology for future products
```

---

## 11. CEO DECISION

**👤 CEO: Validation plan covers 4 stages, 80+ tests, $230 infrastructure cost.**

Key judgment calls needed:
1. **Stage 3 feasibility:** Cần coordinate với hải quân — 20 xạ thủ × 6 tuần. Khi nào bắt đầu liên hệ?
2. **Training transfer threshold:** T-08 says ≥20% improvement. Acceptable? Or should we target higher?
3. **Stage 1 start date:** Phụ thuộc prototype build. Target completion?

**Confirm: Validation plan APPROVED / MODIFY / REJECT?**

**Next FORGE steps remaining:**
- `/forge-trust` — customer evidence package (uses validation results)
- `/forge-fallback` — formalize Level 2 fallback architecture
- `/forge-library` — register V-SMASH as WX-BAL-001
- `/forge-flywheel` — data collection plan
- `/forge-evolve` — moat assessment
