# VN-12.7MM-SIM-023: OUTCOME-DRIVEN VALIDATION PLAN
## forge-validate Output | Phase 3 Embodiment

**Document**: VN-12.7MM-SIM-023-VAL | **Version**: 1.0 | **Date**: 2026-03-20
**Project Code**: VN-12.7MM-SIM-001
**Scope**: I-01 (HONG HAI) base + I-08 (ACH) coaching validation
**Input Documents**:
- Doc 022 v1.1 (Recoil Concept — RC-A Pneumatic, physical tests T1-T5)
- Opportunity Landscape v2 (68 outcomes, top 20 underserved)
- SHIFTO Assessment (I-08: S/H/I/F=PASS, T=MARGINAL, O=HIGH)
- Doc 002 v1.4 (205 requirements)
- Doc 015 v2.1 (9 subsystems)

---

# 1. VALIDATION PHILOSOPHY

## Customer Outcomes → Test Criteria

Traditional validation: "Does it meet specs?" (engineer-centric)
**Outcome-driven validation:** "Does it solve the customer's problem?" (user-centric)

Each validation test maps to a **customer desired outcome** from forge-job-map. If the test passes but the outcome isn't addressed, the validation is INCOMPLETE.

```
Outcome (what customer wants)
  → Metric (how we measure it)
    → Test (how we verify)
      → Pass/Fail (quantitative threshold)
        → Evidence (what we show the customer)
```

---

# 2. OUTCOME × VALIDATION TRACEABILITY

## 2.1 Channel A — Mount Resistance (SS3 Brake)

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-27: Traverse resistance difference | 9.6 | Torque delta vs reference DShK | K-005, F-001 | 1 | T | Torque variation ≤10% at fixed current |
| O-59: Mount stiffness difference | 9.4 | Stiffness feel score (1-5, by 5 gunners) | K-010 | 3 | D | Mean score ≥3.5/5.0 (≥70% match feel) |
| O-60: Traverse effort difference | 9.0 | Traverse torque range | F-001 | 1 | T | 5-15 Nm adjustable, monotonic |
| O-61: Elevation effort difference | 8.6 | Elevation force at grip | F-002 | 1 | T | 10-30 N at grip, adjustable |

## 2.2 Channel B — Firing Vibration (SS10 Pneumatic Recoil)

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-62: Per-shot impulse difference | 10.0 | Peak force vs 70% reference | F-005, TE-001 | 1 | T | ≥1,400 N peak at 10 bar (AS-001) |
| O-26: Recoil feel difference (general) | 10.0 | Recoil feel score (1-5, by 5 gunners) | TE-001 | 3 | D | Mean score ≥3.5/5.0 |
| O-64: "Recoil shock" sim→live | 9.8 | Delta in first live-fire hit rate (sim-trained vs baseline) | TE-002 | 3 | T | No statistically significant decrease vs baseline |
| O-63: Burst vibration at 600 RPM | 9.5 | Sustained cycling rate | FC-004 | 1 | T | ≥10 Hz (600 RPM) for 60s (AS-002) |
| O-37: Bad habit formation | 9.6 | Training scar indicator: sim-trained gunner compensates for non-existent force | — | 3 | D | 0/5 gunners show phantom compensation in live-fire |

## 2.3 Software — Ballistics & Scoring (SS4)

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-30: False impression rate | 9.8 | Hit/miss mismatch vs ballistic truth | OP-013 | 2 | T | ≤5% false positive + false negative |
| O-35: Bore offset vs impact | 8.0 | Angular error at 1000m | OP-013 | 2 | A | ≤0.5 mrad bore-to-impact offset |
| O-28: Trigger-to-response latency | 7.5 | End-to-end latency | S-004 | 1 | T | ≤50 ms (visual), ≤15.5 ms (recoil with fast valve) |

## 2.4 System — Setup & Operations

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-13: Setup time cold→ready | 9.0 | Time from power-on to training-ready | PR-008 | 2 | T | ≤8 min by 2 persons |
| O-33: Instructor alert delay | 8.6 | Time from gunner error to instructor display | — | 2 | T | ≤2 seconds |

## 2.5 Reporting & Data (SS8)

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-51: Auto-report generation | 8.8 | Time to generate MoD-format PDF | S-023 | 2 | D | ≤30 seconds, zero manual data entry |
| O-52: Cross-session comparison | 8.0 | Trend display over N sessions | S-024 | 2 | D | Visible chart + table for ≥20 sessions |
| O-54: Export to unit records | 8.0 | Export format compatibility | — | 2 | I | CSV + PDF, USB export in ≤10 seconds |

## 2.6 I-08 ACH Coaching (Stage 2b — after I-01 Stage 2 PASS)

| Outcome | Opp | Metric | Req | Stage | Method | Pass Criteria |
|---------|:---:|--------|-----|:-----:|--------|---------------|
| O-38: Miss diagnosis time | 9.4 | Time from miss to AI feedback displayed | — | 2b | T | ≤5 seconds with correct root cause ≥80% |
| O-48: Sub-skill drill isolation | 9.0 | Drill types available, auto-generated | S-022 | 2b | D | ≥5 drill types, auto-selected based on weakness |
| O-45: Adaptive difficulty | 8.4 | Difficulty auto-adjusts within session | — | 2b | D | Adjusts within 3 engagements of performance shift |
| O-68: Predict live-fire fail | 8.4 | Prediction accuracy on ≥20 session history | — | 4 | A | ≥75% correct prediction (validated against live-fire results) |
| O-65: Weakness identification | 8.0 | Correct weakness ID per gunner | — | 2b | D | HLV agrees with AI diagnosis ≥80% of time |

---

# 3. STAGED VALIDATION PLAN

## Stage 1: LAB VALIDATION (Controlled Environment)

**Trigger:** Components on hand (brake + pneumatic cylinder + solenoid + MCU)
**Location:** Workshop X lab bench
**Duration:** 3-5 days
**Cost:** $0 additional (components already procured for prototype)

### Test Matrix

| Test # | Name | Outcome | Input | Expected Output | Pass/Fail | Duration |
|--------|------|---------|-------|-----------------|-----------|----------|
| T1 | Brake torque characterization | O-27, O-60 | PWM 0-100% × 10 steps | Torque curve 0-20 Nm | GO-1: ≤10% variation | 4h |
| T2 | Brake torque range | O-60, O-61 | Fixed currents | Range map | GO-2: 5-15 Nm traverse, 10-30 N elev | 2h |
| T3 | Brake backlash | O-59 | Oscillation test | Angular play | GO-3: ≤0.05° | 1h |
| T4 | Pneumatic force | O-62 | Cylinder at 8-10 bar | Peak force (load cell) | ≥1,400 N at 10 bar | 2h |
| T5 | Solenoid cycling | O-63 | 10 Hz for 60s | Cycle count, consistency | ≥600 cycles/min, ≤5% force variation | 2h |
| T6 | Sync latency | O-28 | Trigger → solenoid → force sensor | Time delta | ≤15.5 ms with fast valve | 1h |
| T7 | Exhaust noise | — | 10 Hz cycling | dB(A) at 1m | ≤70 dB(A) with muffler | 1h |
| T8 | Pressure consistency | O-25a | 10 cycles, wait 1h, 10 cycles | Force delta | ≤5% between sessions | 1h |
| T9 | E-stop response | Safety | Press E-stop during firing | Solenoid + brake de-energize | ≤100 ms total cutoff | 0.5h |
| T10 | BIST self-test | O-22 | Power-on sequence | BIST pass/fail + pressure check | All sensors read, air ≥8 bar | 0.5h |

### Edge Cases

| Condition | Expected Behavior | Fallback? |
|-----------|-------------------|:---------:|
| Air pressure drops below 6 bar | Force < 1,400 N → BIST warning | Auto-pause training |
| Solenoid fails stuck-open | Continuous air flow, no impulse | E-stop cuts 24V |
| Solenoid fails stuck-closed | No recoil → training scars | System alert: "Recoil offline" |
| MCU crash during firing | Solenoid de-energizes (fail-safe) | Brakes de-energize → free rotation |
| Temperature 45°C (tropical) | Pneumatic efficiency drop ~5% | Auto-compensate via regulator |

### Stage 1 GO/NO-GO

| # | Criterion | Threshold | Kills? |
|---|----------|-----------|:------:|
| GO-1 | Brake torque variation | ≤10% | YES |
| GO-2 | Brake torque range | 5-15 Nm | YES |
| GO-3 | Brake backlash | ≤0.05° | YES |
| GO-4 | Pneumatic force | ≥1,400 N | YES |
| GO-5 | Cycling rate | ≥10 Hz × 60s | YES |
| GO-6 | Sync latency | ≤20 ms | NO (≤15.5 target, 20 acceptable) |
| GO-7 | E-stop | ≤100 ms | YES (safety) |

**All YES criteria must PASS for Stage 2 entry.**

## Stage 2: FIELD SIMULATION (Integrated System)

**Trigger:** Stage 1 PASS + full I-01 prototype assembled
**Location:** Workshop X facility (3×3m training room)
**Duration:** 2 weeks
**Operators:** 2-3 internal testers (NOT developers — recruit 1 ex-military if possible)

### Test Matrix

| Test # | Name | Outcome | Duration | Pass Criteria |
|--------|------|---------|----------|---------------|
| FS-1 | Cold start timing | O-13 | 5 trials | ≤8 min avg, max 10 min |
| FS-2 | Ballistic accuracy | O-30, O-35 | 100 engagements | ≤5% hit/miss error, ≤0.5 mrad offset |
| FS-3 | 2-hour endurance | O-62, O-63 | 2h continuous | No force degradation, no overheat |
| FS-4 | Instructor display | O-33, O-38 | 20 engagements | Alert ≤2s, diagnosis visible |
| FS-5 | Auto-report | O-51 | 5 sessions | PDF generated ≤30s, correct data |
| FS-6 | Cross-session trends | O-52 | 20 sessions | Chart renders, data consistent |
| FS-7 | Sub-skill drills | O-48 | 10 drills | ≥5 types, selectable by instructor |
| FS-8 | Scenario switching | O-45 | 10 switches | ≤30s between scenarios |
| FS-9 | Recoil × tracking combined | O-37 | 50 engagements | No encoder noise from pneumatic (SA-001) |
| FS-10 | Setup by non-developer | O-13, O-20 | 3 trials by external | Setup completed without developer help |

### Environmental Variables

| Variable | Range | How Tested |
|----------|-------|-----------|
| Ambient temp | 25-35°C (VN indoor) | Natural variation during 2-week period |
| Power quality | 220V ±10%, 50 Hz | Measured, not simulated |
| Compressor warm/cold | Cold start vs running | Test AM (cold) and PM (warm) |
| Operator skill | Novice vs experienced | Recruit 1 novice, 1 ex-military |

## Stage 3: OPERATIONAL TEST (Real Users)

**Trigger:** Stage 2 PASS + 15 user interviews complete (forge-job-map validation)
**Location:** Naval training center (customer facility)
**Duration:** 4-6 weeks (2 sessions/day × 5 days/week)
**Operators:** Real xạ thủ, real HLV, real chỉ huy

### Test Matrix

| Test # | Name | Outcome | Duration | Pass Criteria |
|--------|------|---------|----------|---------------|
| OT-1 | Recoil fidelity (user rating) | O-26, O-62 | 30 gunners × 1 session | Mean feel score ≥3.5/5.0 |
| OT-2 | Mount resistance (user rating) | O-27, O-59 | 30 gunners × 1 session | Mean feel score ≥3.5/5.0 |
| OT-3 | Training scar check | O-64, O-37 | 5 gunners: 10 sim sessions → 1 live-fire | 0/5 show phantom recoil compensation |
| OT-4 | Instructor acceptance | O-38, O-33 | 5 HLV × 5 sessions each | Mean satisfaction ≥4.0/5.0 |
| OT-5 | CO reporting value | O-51, O-58 | 5 COs review auto-reports | "Would use this for unit records" ≥4/5 |
| OT-6 | Real-world setup | O-13 | 10 setups by unit technicians | 90th percentile ≤10 min |
| OT-7 | 30-day reliability | — | 30 consecutive training days | ≥95% availability (MT-001) |
| OT-8 | Maintenance by unit | — | 2 maintenance events by unit tech | Completed without WX support (MT-002) |

### OT-3: Training Scar Protocol (Critical Test)

```
PROTOCOL: Sim→Live Transfer Validation

1. Select 5 gunners with NO prior simulator experience
2. Train on VN-12.7MM-SIM: 10 sessions × 2h (total 20h sim time)
3. Measure: hit rate, tracking error, burst discipline on simulator
4. LIVE FIRE: 1 qualification session on real DShK
5. Measure: hit rate, tracking error, burst discipline on live weapon
6. COMPARE: sim-trained group vs control group (live-fire only)

PASS: Sim-trained group performs EQUAL OR BETTER than control
FAIL: Sim-trained group shows >10% worse performance → training scars detected
      → Root cause: which channel? Investigate Channel A feel vs Channel B recoil vs both

This is the MOST IMPORTANT validation test.
If OT-3 fails → entire product premise fails.
```

## Stage 2b: I-08 ACH COACHING VALIDATION (after Stage 2 I-01 PASS)

**Trigger:** I-01 Stage 2 PASS + ≥200 training sessions collected (data compound)
**Location:** Workshop X → then naval training center
**Duration:** 4 weeks

| Test # | Name | Outcome | Pass Criteria |
|--------|------|---------|---------------|
| ACH-1 | Miss root cause accuracy | O-38 | AI correct ≥80% (validated by HLV) |
| ACH-2 | Weakness identification | O-65 | AI matches HLV assessment ≥80% |
| ACH-3 | Auto drill relevance | O-48 | AI-generated drill addresses actual weakness ≥70% |
| ACH-4 | Adaptive difficulty | O-45 | Difficulty changes within 3 engagements of performance shift |
| ACH-5 | Report quality | O-51 | HLV rates auto-report ≥4.0/5.0 usefulness |

## Stage 4: CONTINUOUS MONITORING (Post-Deployment)

**Trigger:** Stage 3 PASS + units deployed
**Telemetry pipeline:** Session data → USB export → quarterly review

### Metrics Tracked

| Metric | Source | Frequency | Drift Threshold | Action if Breached |
|--------|--------|-----------|:---------------:|-------------------|
| Brake torque consistency | Encoder + current log | Per session | >15% variation | Maintenance alert |
| Pneumatic force consistency | Pressure transducer | Per session | >10% variation | Check regulator/seals |
| Hit/miss accuracy | Ballistics vs scoring | Per session | >7% mismatch | SW update needed |
| Session completion rate | System log | Monthly | <90% | Investigate reliability |
| User satisfaction (survey) | Instructor feedback | Quarterly | <3.5/5.0 | Product improvement trigger |
| I-08: AI coaching accuracy | HLV override rate | Per session | >30% override | Retrain model |
| I-08: Prediction accuracy | Live-fire correlation | Bi-annual | <70% correct | Model update + more data |

---

# 4. PERFORMANCE ENVELOPE (Output Template — filled after Stage 1-2)

| Condition | Channel A (Brake) | Channel B (Pneumatic) | Software | Category |
|-----------|-------------------|----------------------|----------|----------|
| Normal (25°C, 8 bar, clean) | 5-15 Nm ±10% | ≥1,400 N at 10 Hz | ≤50 ms latency | ✅ WORKS WELL |
| Hot (40°C) | 5-15 Nm ±12% (TBD) | ≥1,300 N (−7% TBD) | Same | ⚠️ DEGRADED |
| Low pressure (6 bar) | Same | ≥900 N (**below 70% threshold**) | Same | 🔴 FAILS → warning |
| Compressor off | Same | 0 N (no recoil) | Same | 🔴 FAILS → Channel B offline |
| After 4h continuous | TBD (brake heating) | TBD (seal wear) | Same | ⚠️ TBD |
| MCU crash | Free rotation (safe) | Depressurize (safe) | No scoring | 🔴 FAILS → E-stop equivalent |

**To be filled with actual data after Stage 1 testing.**

---

# 5. TEST INFRASTRUCTURE

| Item | Available? | Source | Lead Time | Cost |
|------|:---------:|--------|-----------|:----:|
| Magnetic brake (traverse) | Ordered | Import (Ogura) | On order, ETA 2026-04-01 | $350 |
| Magnetic brake (elevation) | Ordered | Import (Ogura) | On order, ETA 2026-04-01 | $200 |
| Pneumatic cylinder 54mm | Not yet | Local (Airtac) | 1 week | $80 |
| Fast solenoid valve | Not yet | Import (Parker/Festo) | 2 weeks | $150 |
| Pressure transducer | Not yet | Import (Honeywell) | 1 week | $50 |
| Load cell (for T4 force test) | Not yet | Borrow or rent | 1 week | $0-50 |
| Torque wrench (for T1-T3) | Available | Workshop X | — | $0 |
| Oscilloscope (for T6 latency) | Available | Workshop X | — | $0 |
| dB meter (for T7 noise) | Borrow | — | 1 week | $0 |
| Air compressor 2HP | Not yet | Local | Stock | $300 |

**Total Stage 1 infrastructure cost:** ~$80-130 beyond already-ordered components.

---

# 6. SCHEDULE

| Phase | Activity | Duration | Dependencies | Target Date |
|-------|----------|----------|-------------|-------------|
| **Stage 1** | Lab validation (T1-T10) | 3-5 days | Brake + cylinder + valve arrival | **2026-04-05 → 04-10** |
| Gap | Order missing items if Stage 1 PASS | 2 weeks | Stage 1 GO | 2026-04-10 → 04-24 |
| **Stage 2** | Integrated system test (FS-1 to FS-10) | 2 weeks | Full I-01 assembled | **2026-06 (est.)** |
| **Stage 3** | Operational test (OT-1 to OT-8) | 4-6 weeks | Customer facility access | **2026-08 (est.)** |
| OT-3 | Training scar protocol (5 gunners) | 6 weeks | 20h sim + 1 live-fire | **2026-08 → 09** |
| **Stage 2b** | I-08 ACH coaching validation | 4 weeks | ≥200 sessions data | **2027-Q1 (est.)** |
| **Stage 4** | Continuous monitoring | Ongoing | Deployed units | **2027+** |

---

# 7. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-20 | KN + AI (forge-validate) | Initial release. Outcome-driven validation plan: 20 outcomes mapped to 30+ tests across 4 stages. OT-3 training scar protocol defined. I-08 ACH validation stage 2b. Performance envelope template. |

---

**CEO DECISIONS (2026-03-20):**
1. ✅ OT-3 training scar protocol ACCEPTED (5 gunners, live-fire required)
2. ✅ Stage 1 GO/NO-GO criteria (7 gates) ACCEPTED
3. ✅ Stage 3 naval training center access CONFIRMED

**NEXT:** Execute Stage 1 after brake + cylinder arrive (2026-04-05).

---

*VN-12.7MM-SIM-023 Validation Plan v1.0*
*forge-validate × forge-job-map — Outcome-Driven Validation*
