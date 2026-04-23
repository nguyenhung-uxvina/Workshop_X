---
created: 2026-04-10
type: ach-assessment
method: FORGE SHIFT v2.0 (SHIFTO)
version: v1.0
project: VN-MGM
scope: V1-NAVAL-12.7 base + portfolio trajectory (V1→N12→V5→N11)
evidence_tier: "[L4-ESTIMATE] with [L1-FIELD] production data"
feeds_to:
  - forge-scout (ACH opportunity filter)
  - forge-cost (ACH vs HW cost comparison)
  - helix-task-clarify (ACH-derived requirements)
---

# ACH Assessment — VN-MGM Portfolio

## Scope

Evaluate ACH potential across **4 sub-functions** identified from ODI Two-Channel analysis:

| # | Sub-function | Channel | Current Solution | ACH Candidate |
|---|-------------|---------|-----------------|---------------|
| SF-A | Target Tracking Assist | B (Information) | Operator skill only | AI lead indicator + target lock |
| SF-B | Condition Monitoring | B (Information) | Manual inspection only | IoT vibration/corrosion sensor |
| SF-C | Night Engagement Assist | B (Information) | NVG (if available) | Thermal camera + AI highlight |
| SF-D | Motor Drive Control | A (Physical) | Manual muscle | BLDC motor + controller (NOT ACH) |

**SF-D is NOT ACH** — it's a hardware upgrade (V5/N12). ACH Boundary Rule: AI works on INFORMATION, not PHYSICAL FORCES. Motor drive = physical force → conventional hardware engineering.

---

## Assessment 1: SF-A — Target Tracking Assist

### SHIFT Scorecard

```
SHIFT SCORECARD — VN-MGM / Target Tracking Assist
Date: 2026-04-10

S — SUBSTITUTABLE?
  Physics test: "Is target bearing information present in cheap sensor data?"
  Evidence: Camera + IMU can estimate target bearing and angular rate.
    Computer vision tracking = mature (OpenCV, YOLO family).
    Naval target tracking from fixed camera = well-studied domain.
  Score: PASS
  Notes: Commodity camera ($20-50) + IMU ($5) sufficient for bearing estimation.
    NOT substituting the weapon pointing (physical) — only the INFORMATION
    about where to point (lead angle, target rate).

H — HYBRID POSSIBLE?
  Architecture: Camera on mount → edge compute → display overlay (LED ring or
    simple HUD showing lead direction) → operator still aims manually.
  V5 extension: Camera → compute → motor servo loop (closed-loop tracking).
  Score: PASS
  Notes: Hybrid = camera provides info, human/motor executes pointing.

I — IMPROVEMENT TRAJECTORY?
  dA/dt: Computer vision improving ~20%/year (YOLO v5→v8→v11 in 3 years).
  dH/dt: Manual aiming = 0% improvement (human performance ceiling).
    Mechanical sights = 0% improvement (mature technology).
  Crossover: AI-assisted tracking ALREADY superior to manual for fast targets.
  Score: PASS (dA/dt >> dH/dt = 0)

F — FALLBACK FEASIBLE?
  Level 0: Camera fails → ❌ unacceptable
  Level 1: Camera fails → manual aiming (exactly like V1 today) → ✅
  Level 2: AI degrades → simpler algorithm (centroid tracking) → ✅
  Achieved level: Level 2 (graceful degradation to V1 manual baseline)
  Score: PASS
  Notes: V1 manual operation IS the fallback. AI is additive, not replacing.

T — TRAINING DATA?
  Available: Maritime target videos widely available (commercial + military).
  Synthetic: Ship/boat rendering in game engines = proven approach.
  Field: 300 installed mounts × exercises = collection opportunities.
  Score: PASS (rich domain, many data sources)

O — OUTCOME-ALIGNED?
  Outcomes addressed:
    O-29: Track moving target (Opp 8.0) ← ★ TOP-2 UNDERSERVED
    O-34: First hit efficiency (Opp 7.0)
    O-28: Slew 180° to new threat (Opp 7.0) — partial (shows direction)
    O-43: Switch target bearing (Opp 7.0) — partial
  Top-15 underserved addressed: 4/15
  Combined Opp: 29.0/40 for addressed outcomes
  Score: ✅ HIGH — addresses #2 most underserved outcome
```

### Economics Quick-Check

| Category | Hardware (imported FCS) | ACH Solution | Delta |
|----------|----------------------|-------------|-------|
| Unit cost | $15-30K (fire control system) | $200-500 (camera+compute+display) | -97% |
| Import risk | HIGH (ITAR/EAR restricted) | LOW (commodity COTS) | ★ |
| Capability | Full ballistic FCS | Lead indicator + tracking assist | 60% of capability |
| Reuse | 1 product | VN-CUAV-SIM, VN-AICC, VN-USV | 4+ products |
| Local content | 0% (imported) | 95%+ (assembly local) | ★ |

### SHIFT Summary — SF-A

| Dimension | Score | Notes |
|-----------|-------|-------|
| S | **PASS** | Camera + IMU sufficient |
| H | **PASS** | Info overlay, not replacing aiming |
| I | **PASS** | dA/dt >> dH/dt = 0 |
| F | **PASS** | Level 2 — degrades to manual V1 |
| T | **PASS** | Rich domain |
| O | **�� HIGH** | Addresses O-29 (Opp 8.0) |

**Recommendation: GO** — All 6 dimensions PASS. Strongest ACH case in VN-MGM portfolio.

**BUT: timeline consideration** — SF-A is a V5/N12 add-on, not V1 base. V1 = manual only (SC-2). ACH layer comes AFTER motor drive works.

---

## Assessment 2: SF-B — Condition Monitoring

### SHIFT Scorecard

```
S — SUBSTITUTABLE?
  Physics test: "Is bearing/structure health present in cheap sensor data?"
  Evidence: Vibration signature analysis for bearing health = industrial standard.
    MEMS accelerometer ($2-5) detects bearing degradation patterns.
    Corrosion rate estimable from humidity + salt + time model.
  Score: PASS
  Notes: Well-established in industrial predictive maintenance.

H — HYBRID POSSIBLE?
  Architecture: MEMS accelerometer on bearing housing → MCU with threshold
    algorithm → LED indicator (green/yellow/red) OR BLE → phone app.
  No camera needed. Simplest possible AI: threshold + trend detection.
  Score: PASS

I — IMPROVEMENT TRAJECTORY?
  dA/dt: Predictive maintenance AI improving rapidly (industrial IoT market).
  dH/dt: Manual inspection = 0% improvement.
  Score: PASS

F — FALLBACK FEASIBLE?
  Level 2: Sensor fails → mount still works (manual inspection as before).
  Score: PASS (inherent fallback — sensor is purely informational)

T — TRAINING DATA?
  Available: Industrial bearing vibration datasets (NASA, CWRU, etc.)
  Field: 300 mounts × varying maintenance states = natural dataset.
  Need: Correlate vibration signature with "maintenance needed" state.
  Score: MARGINAL — need field collection campaign on 10-20 mounts.
  Notes: T=MARGINAL acceptable IF N10-MAINT-KIT includes sensor data collection
    as standard procedure → generates training data organically.

O — OUTCOME-ALIGNED?
  Outcomes addressed:
    O-51: Corrosion from skipped maintenance (Opp 8.0) ← ★ TOP-3 UNDERSERVED
    O-22: Undetected traverse problem (Opp 7.0)
    O-55: Condition after storage (Opp 7.0)
    O-25: Condition uncertainty (Opp 6.0)
  Top-15 underserved addressed: 4/15
  Score: ✅ HIGH — addresses O-51 (Opp 8.0)
```

### Economics Quick-Check

| Category | Manual Inspection | ACH Condition Monitor | Delta |
|----------|------------------|---------------------|-------|
| Per-mount cost | $0 (labor absorbed) | $50-200 sensor + install | $50-200 upfront |
| Annual cost | $500+ repairs from neglect | $0 (sensor = passive) | -$500/yr/mount |
| 300 mounts × 5yr | $750K repair/replace | $15K sensors + $0 ops | **-$735K savings** |
| Reuse | — | Any rotating machinery product | 4+ products |

### SHIFT Summary — SF-B

| Dimension | Score |
|-----------|-------|
| S | **PASS** |
| H | **PASS** |
| I | **PASS** |
| F | **PASS** (inherent) |
| T | **MARGINAL** — need field collection |
| O | **✅ HIGH** — O-51 (Opp 8.0) |

**Recommendation: CONDITIONAL GO**
- **Condition:** T=MARGINAL → Include vibration baseline collection in N10-MAINT-KIT deployment (first 20 mounts). After 6 months of data → reassess T score.
- **Phase:** Deploy as N10-M (motor maintenance add-on) in 2027.
- **Fallback:** Sensor fails → manual inspection (today's baseline).

---

## Assessment 3: SF-C — Night Engagement Assist

### SHIFT Scorecard

```
S — SUBSTITUTABLE?
  Physics test: "Is target position present in thermal/IR sensor data at night?"
  Evidence: Thermal cameras detect vessels, humans at 500-2000m range.
    LWIR microbolometer ($200-1K uncooled) vs military thermal sight ($10-30K).
  Score: PASS

H — HYBRID POSSIBLE?
  Architecture: Uncooled thermal camera ($500) → edge compute → overlay on
    small display or project onto sight picture → operator aims at highlight.
  Score: PASS

I — IMPROVEMENT TRAJECTORY?
  dA/dt: Thermal camera cost -15%/year. AI object detection on thermal = active research.
  dH/dt: Military thermal sights = slow improvement, high cost plateau.
  Score: PASS

F — FALLBACK FEASIBLE?
  Level 2: Thermal fails → illumination (searchlight) or NVG (if issued).
  Level 1: All fails → star shells / tracer fire (traditional).
  Score: PASS

T — TRAINING DATA?
  Available: FLIR maritime datasets exist. Synthetic thermal rendering possible.
  Score: MARGINAL — maritime thermal at 12.7mm engagement ranges less common.

O — OUTCOME-ALIGNED?
  Outcomes addressed:
    O-40: Night engagement (Opp 8.5) ← ★★ #1 MOST UNDERSERVED
    O-16: Mounting in darkness (Opp 7.0) — indirect
  Top-15 underserved addressed: 2/15
  Score: ✅ HIGH — addresses THE highest underserved outcome
```

### Economics Quick-Check

| Category | Military Thermal Sight | ACH Thermal Overlay | Delta |
|----------|----------------------|-------------------|-------|
| Unit cost | $10-30K (imported) | $500-2K (COTS thermal + compute) | -95% |
| Import | ITAR restricted | Commodity (dual-use thermal) | ★ |
| Capability | Full weapon sight | Target highlight overlay | 70% |
| Local content | 0% | 90%+ | ★ |

### SHIFT Summary — SF-C

| Dimension | Score |
|-----------|-------|
| S | **PASS** |
| H | **PASS** |
| I | **PASS** |
| F | **PASS** |
| T | **MARGINAL** |
| O | **✅ HIGH** — O-40 (Opp 8.5) |

**Recommendation: CONDITIONAL GO**
- **Condition:** T=MARGINAL → Need 100+ thermal maritime images for baseline training. Collect during night exercises on 2-3 vessels.
- **Phase:** Prototype after V5 motor proven (V5 provides stable platform for camera).
- **Synergy:** Same camera + compute unit serves SF-A (tracking) + SF-C (night) → shared ACH hardware.

---

## Assessment 4: SF-D — Motor Drive Control

### SHIFT Scorecard (abbreviated — expected NO-GO)

```
S — SUBSTITUTABLE?
  Physics test: "Can AI replace the motor/gearbox/clutch for traverse drive?"
  Answer: NO. Motor provides PHYSICAL FORCE to rotate 75 kg mount + 34 kg weapon.
    AI cannot generate torque. AI cannot replace gear reduction.
  Score: FAIL — ACH Boundary Rule violation.
  
  NOTE: Motor CONTROL (PID loop, joystick mapping) is software, not ACH.
    Standard servo control ≠ AI. No ML/AI needed for motor control.
```

**Recommendation: NO-GO — Not ACH**
SF-D is conventional hardware engineering (BLDC motor + worm gear + EM clutch + controller). Already addressed by V5-MOTORIZED Phase 1 requirements. AI does NOT replace physical force generation.

---

## Portfolio ACH Trajectory

```
TIMELINE — VN-MGM ACH Integration Path

2026 Q2-Q3: V1 (manual, no ACH) — PRODUCTION CONTINUES
            N10-MAINT-KIT (no ACH) — NEAR-TERM
            N12-RETROFIT-KIT (motor only, no ACH) — DEVELOPMENT

2026 Q4:    SF-B pilot: Vibration sensor on 20 N10-equipped mounts
            → Collect baseline data for condition monitoring

2027 Q1:    N12/V5 motor proven → stable platform available
            SF-B production: Condition monitor in N10-M variant

2027 Q2-Q3: SF-A prototype: Camera + tracking assist on V5
            SF-C prototype: Thermal overlay on V5 (shared hardware)
            → Combined: SF-A + SF-C = V5 "Smart Mount" package

2027 Q4:    V5 + SF-A + SF-C = pre-RCWS with AI-assisted targeting
            → PATH TO: V5 + optics + AICC FC = indigenous RCWS

ACH VALUE ACCRUAL:
  SF-B ($50/mount): 300 mounts × $50 = $15K → saves $735K/5yr
  SF-A ($200-500): 15-75 V5/N12 units × $350 = $5-26K
  SF-C ($500-2K): 15-75 units × $1K = $15-75K
  Combined ACH revenue: $35-116K (add-on pricing)
  Combined savings: $735K+ (maintenance avoidance)
```

---

## CEO Decision Package

### Summary

| SF | Sub-function | SHIFTO | Recommendation | Timeline |
|----|-------------|--------|---------------|----------|
| SF-A | Target Tracking Assist | 5P + ✅O | **GO** | 2027 Q2 (after V5 motor) |
| SF-B | Condition Monitoring | 4P + 1M + ✅O | **CONDITIONAL GO** | 2026 Q4 (pilot with N10) |
| SF-C | Night Engagement | 4P + 1M + ✅O | **CONDITIONAL GO** | 2027 Q2 (with SF-A) |
| SF-D | Motor Drive Control | **FAIL** (Boundary) | **NO-GO (not ACH)** | N/A — HW engineering |

### Risk Assessment

| Risk | Consequence | Mitigation |
|------|-----------|-----------|
| SF-A fails | V5 works fine without it (manual backup) | Level 2 fallback inherent |
| SF-B sensor unreliable | Return to manual inspection | $50 loss per sensor |
| SF-C thermal insufficient | Use conventional NVG/searchlight | Standard fallback exists |
| All ACH fails | V1/V5/N12 function perfectly as hardware products | ACH is ADDITIVE, not replacing |

**Key insight: All ACH in VN-MGM is ADDITIVE** — the base products (V1, V5, N12) work without any AI. ACH adds capability ON TOP. This is the lowest-risk ACH pattern: if AI fails, customer still has a working product.

### CEO Decision Required

```
SF-A (Target Tracking):    [ ] GO  [ ] NO-GO  [ ] CONDITIONAL: ___
SF-B (Condition Monitor):  [ ] GO  [ ] NO-GO  [ ] CONDITIONAL: ___
SF-C (Night Assist):       [ ] GO  [ ] NO-GO  [ ] CONDITIONAL: ___
SF-D (Motor Drive):        [x] NO-GO (confirmed — not ACH)
```

---

*All scores [L4-ESTIMATE]. Validate with prototype data in Phase A bench test.*
