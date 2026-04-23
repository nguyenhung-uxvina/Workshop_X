---
project: V-SMASH-SW-BAL
type: software-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
sw_phase: 0 (Requirements Extraction)
safety_class: B (lead computation accuracy directly affects engagement effectiveness; bounds check is safety-related)
reusable_by: [V-M, V-L, V-X, V-T, V-NV, V-P, V-R]
excluded_by: [V-D]
priority: HIGH — core aiming function, unspecified algorithm is Gap #4
---

# V-SMASH-SW-BAL — Ballistic Computation & Sensor Fusion

## 1. Purpose

Ballistic computation module that converts AI detection output (bounding box, class, confidence, angular size) into an accurate lead indicator for the operator. Includes range estimation, ballistic model, tracking filter, bounds checking, auto bore-sight calibration, and post-shot reacquisition.

**Without this sub-project:** SF5 (lead computation) is referenced 8+ times across Phase 1-4 with a formula outline in the Function Structure but no formal algorithm specification, no ballistic model, no range estimation validation, no bounds-check logic. The FMEA (F08) identifies cascading computation errors as RPN=108 with moderate errors (+/-30%) **undetectable** by the system.

---

## 2. Scope Boundary

### In Scope

| Module | Functions | Source Requirements |
|--------|-----------|-------------------|
| **BAL-RANGE** | Monocular range estimation: angular_size × class_physical_size → estimated range. Formula: `range = (physical_size × focal_length) / (pixel_size × apparent_pixels)` | SF5, SF5-A5 |
| **BAL-SIZE** | Physical size lookup table: class → typical wingspan/dimension for range calculation | SF3 output, SF5 |
| **BAL-LEAD** | Ballistic lead computation: target angular velocity + range + ammunition ballistics → angular lead offset. Pre-computed lookup table for 7.62×39mm (V-M baseline) | VM-S06, SF5 |
| **BAL-TRACK** | Kalman filter target tracking: smooth bounding box trajectory, predict next-frame position, estimate angular velocity | VM-K01, SF2 (tracking) |
| **BAL-BOUNDS** | Output sanity checking: lead angle >physical limit OR >5 deg/frame jump → COMPUTE FAULT. Range <30m or >300m → RANGE? warning | SF5 bounds, FMEA F08 |
| **BAL-CALIB** | Auto bore-sight calibration on power-on: sensor-to-OLED offset measurement + correction, ≤3s convergence, ≤0.5 mrad residual | VM-N03 |
| **BAL-REACQ** | Post-shot reacquisition: after recoil event, re-detect + re-track + recompute within ≤200ms | VM-S07 |

### Out of Scope

| Module | Sub-Project |
|--------|-------------|
| Object detection (bounding box generation) | V-SMASH-SW-AI |
| Object classification (class label + confidence) | V-SMASH-SW-AI |
| Display rendering of lead dot | V-SMASH-SW-FW |
| IMU / recoil detection hardware driver | V-SMASH-SW-FW (FW-HAL) |

---

## 3. Requirements (Extracted from V-SMASH-M Design Package)

### 3.1 Lead Computation Performance

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-BAL-01 | Lead indicator angular accuracy | VM-S06 | ≤1.0 mrad at 150m | T: calibrated target on drone sled (T10) |
| SWR-BAL-02 | Lead update rate | VM-K02 | ≥30 Hz (synced with AI pipeline) | T: high-speed camera |
| SWR-BAL-03 | Angular velocity tracking | VM-K01 | ≥30 deg/s relative to shooter LOS | T: drone sled at max angular rate |
| SWR-BAL-04 | Post-shot reacquisition time | VM-S07 | ≤200 ms after recoil event | T: recoil simulation + camera |

### 3.2 Range Estimation Performance

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-BAL-10 | Range estimation method | SF5-A5, Morpho | Monocular size-based (selected concept) | A: algorithm review |
| SWR-BAL-11 | Range estimation accuracy | SF5 note | +/-30% at 200m (acknowledged limitation) | T: known-range targets |
| SWR-BAL-12 | Range reasonableness bounds | FMEA F08 | <30m or >300m → suppress indicator + RANGE? | T: out-of-bounds injection |
| SWR-BAL-13 | Physical size lookup table | SF5-A5 | Per-class: drone-rotor (typical 0.3-0.5m), drone-fixed-wing (0.8-1.5m), bird (configurable), unknown (default 0.3m) | I: table review |

### 3.3 Calibration Performance

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-BAL-20 | Auto bore-sight convergence time | VM-N03 | ≤3.0 s at power-on | T: 10 cold starts on PR-11 jig |
| SWR-BAL-21 | Bore-sight residual error | VM-N03 | ≤0.5 mrad | T: PR-11 jig measurement |
| SWR-BAL-22 | Zero user calibration steps | VM-N03 | Fully automatic, no operator input | I: operating procedure review |

### 3.4 Safety-Related Requirements

| ID | Requirement | Source | Safety Class |
|----|-------------|--------|-------------|
| SWR-BAL-S01 | Lead angle bounds check: >physical limit → COMPUTE FAULT | SF5, FMEA F08 | SAFETY-RELATED |
| SWR-BAL-S02 | Frame-to-frame jump >5 deg without matching target motion → suppress | SF5 bounds | SAFETY-RELATED |
| SWR-BAL-S03 | Range <30m or >300m → suppress indicator + RANGE? | FMEA F08 | SAFETY-RELATED |
| SWR-BAL-S04 | No stale lead indicator after loss of detection input | VM-N06 | SAFETY-CRITICAL (via FW-WDG) |

---

## 4. Algorithm Architecture (Conceptual)

```
 From SW-AI:
 {bbox, class, confidence, angular_size, track_id, angular_velocity}
       │
       ▼
 ┌─────────────┐
 │  BAL-SIZE   │  class → physical_size lookup
 │  Lookup     │  drone-rotor: 0.35m (default)
 │  Table      │  drone-FW: 1.0m (default)
 └──────┬──────┘
        ▼ physical_size_est
 ┌─────────────┐
 │  BAL-RANGE  │  range = (phys_size × f) / (px_size × apparent_px)
 │  Monocular  │  Result: range_est ± 30%
 │  Estimate   │
 └──────┬──────┘
        ▼ range_est
 ┌─────────────┐
 │  BAL-TRACK  │  Kalman filter: smooth trajectory
 │  Kalman     │  Output: smoothed angular_velocity
 │  Filter     │
 └──────┬──────┘
        ▼ smoothed_angular_velocity + range_est
 ┌─────────────┐
 │  BAL-LEAD   │  Ballistic lookup table
 │  7.62×39mm  │  Input: range + angular_vel
 │  Lookup     │  Output: lead_angle (mrad)
 └──────┬──────┘
        ▼ lead_angle
 ┌─────────────┐
 │  BAL-BOUNDS │  Sanity checks:
 │  Checks     │  - |lead| > max_physical → COMPUTE FAULT
 │             │  - Δlead > 5 deg/frame → SUPPRESS
 │             │  - range < 30m or > 300m → RANGE?
 └──────┬──────┘
        │
   ┌────┴────┐
   ▼         ▼
 VALID     FAULT
 (→FW-DISP) (→FW-FSM: COMPUTE FAULT / RANGE?)
```

### Ballistic Model: 7.62×39mm (V-M Baseline)

| Parameter | Value | Source |
|-----------|-------|--------|
| Ammunition | 7.62×39mm M43 ball | AK-platform standard |
| Muzzle velocity | ~715 m/s | Published data |
| Ballistic coefficient | ~0.285 (G1) | Published data |
| Lookup table entries | Range × Angular velocity matrix | Pre-computed |
| Range increments | 50m, 100m, 150m, 200m (4 points, linear interpolation) | SWR-BAL-10 |
| Angular velocity increments | 0, 5, 10, 15, 20, 25, 30 deg/s (7 points) | VM-K01 ceiling |
| **Table size** | **4 × 7 = 28 entries** | Compact, fits in cache |

---

## 5. Auto Bore-Sight Calibration Algorithm (Conceptual)

The bore-sight calibration corrects the angular offset between the CMOS sensor optical axis and the OLED display optical axis. This offset is a manufacturing tolerance that varies per unit.

### Proposed Algorithm

```
On power-on:
1. Read stored calibration offset from eMMC (last factory calibration)
2. Initialize OLED → display reference crosshair at center
3. AI-CAP captures frame → detect crosshair through optical path
4. Measure pixel offset: (detected_x - center_x, detected_y - center_y)
5. Convert pixel offset to angular offset (mrad) using known focal length
6. If |offset| > 0.5 mrad:
   a. Apply correction to display_render() offset parameter
   b. Re-measure to confirm residual ≤ 0.5 mrad
7. Store updated calibration offset
8. Total time: ≤3 seconds
```

**Alternative (simpler):** Use factory-calibrated fixed offset stored in eMMC. No runtime calibration. Power-on simply loads stored offset. ≤0.1s boot contribution.

**Recommendation:** Factory-calibrated fixed offset for V-M (simpler, faster boot). Runtime self-check as future enhancement.

---

## 6. Deliverables per SW-SDLC Phase

| SW Phase | Deliverable | Format |
|----------|-------------|--------|
| SW-0 | This document (SWR-BAL-xx requirements) | Markdown |
| SW-1 | Formal SRS + ballistic model specification + calibration algorithm spec | Markdown |
| SW-2 | Algorithm architecture + Kalman filter design + bounds check logic | Markdown + math doc |
| SW-3 | Source code (C++): range est, ballistic LUT, Kalman, bounds, calibration | Git repo |
| SW-3t | Ballistic lookup table generator (Python): compute lead table from ballistic model | Git repo (Python tool) |
| SW-4 | Integration test: lead accuracy on PR-11 jig + drone sled | Test report |
| SW-5 | V&V report: lead accuracy vs SWR-BAL-01 (≤1.0 mrad), calibration vs SWR-BAL-20/21 | Test report |

---

## 7. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| SW-AI output API (bbox, class, confidence, angular_size, velocity) | V-SMASH-SW-AI | PENDING | BAL input format |
| FW-DISP display API (`display_render(overlay)`) | V-SMASH-SW-FW | PENDING | Lead dot rendering |
| FW-HAL watchdog API (`register_watchdog()`) | V-SMASH-SW-FW | PENDING | BAL health monitoring |
| Optical system specs (focal length, pixel pitch) | V-SMASH-M BOM/B2 | AVAILABLE (partial) | Range estimation formula parameters |
| Ballistic data 7.62×39mm | Published references | AVAILABLE | Lookup table generation |
| PR-11 Bore-Sight Jig | TOOLING sub-project | PENDING (8 wk lead) | Calibration validation |
| V-SMASH-SLED drone sled | TOOLING sub-project | PENDING | Field accuracy testing (T10) |

**Critical path:** Lead accuracy field test (T10) requires both PR-11 jig (for calibration) AND drone sled (for target presentation). Both are in TOOLING pipeline.

---

## 8. Variant Configuration Map

| Variant | BAL-RANGE | BAL-LEAD | BAL-TRACK | BAL-CALIB | Ammunition | Adaptation |
|---------|-----------|----------|-----------|-----------|------------|------------|
| V-M | Full | 7.62×39mm LUT | Kalman | Factory offset | 7.62×39mm | **Baseline** |
| V-L | Full | 7.62×39mm LUT | Kalman | Factory offset | 7.62×39mm | Same as V-M |
| V-D | **EXCLUDED** | **EXCLUDED** | Detection tracking only | Factory offset | N/A (no weapon) | No ballistic module |
| V-X | Full | Configurable LUT | Kalman | Factory offset | Export customer ammo | LUT per ammunition type |
| V-T | Full | 7.62×39mm LUT | Kalman + data log | Factory offset | 7.62×39mm | Training data capture from BAL |
| V-NV | Full | 7.62×39mm LUT | Kalman + thermal fusion | Factory offset | 7.62×39mm | Thermal-enhanced tracking |
| V-P | Full | 12.7×108mm LUT | Kalman | Factory offset | 12.7×108mm | **New ballistic table** |
| V-R | Full | Multi-ammo LUT | Kalman + stabilization | Auto-calibrate | CAN-configurable | Vehicle motion compensation |

**Reuse factor:** 7/8 (V-D excluded). Core algorithm identical; variant-specific = ammunition LUT + tracking enhancements.

### Ammunition Lookup Tables Required

| Ammunition | Variant(s) | Priority |
|------------|-----------|----------|
| 7.62×39mm M43 | V-M, V-L, V-T, V-NV | P0 — baseline |
| 12.7×108mm | V-P | P1 — after V-M validated |
| Customer-specified | V-X, V-R | P2 — per export contract |

---

## 9. Effort Estimate

| Phase | Duration | Personnel | Notes |
|-------|----------|-----------|-------|
| SW-0 + SW-1 | 2 weeks | 1 algorithm engineer | Requirements + ballistic model spec |
| SW-2 (Architecture) | 2 weeks | 1 algorithm engineer | Kalman design, LUT generator, bounds logic |
| SW-3 (Implementation) | 5 weeks | 1 algorithm engineer | C++ modules + Python LUT generator |
| SW-4 (Integration) | 3 weeks | 1 algo + 1 test | On-target with SW-AI output, PR-11 jig |
| SW-5 (Qualification) | 2 weeks | 1 algo + 1 QA | Accuracy validation, field test with drone sled |
| **Total** | **~14 weeks** | | Partially parallel with SW-AI (shares test infrastructure) |

---

## 10. Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Range estimation ±30% → lead error ≥1.0 mrad at 200m | HIGH | HIGH — VM-S06 fail at max range | Accept ≤1.0 mrad at 150m (kill threshold, not 200m) |
| Misclassification → wrong physical size → wrong range → wrong lead (FMEA F08) | MEDIUM | HIGH — cascading error | BAL-BOUNDS catches extreme errors; moderate errors (+/-30%) undetectable |
| Kalman filter divergence during rapid maneuver | LOW | MEDIUM — lost track | Bounded innovation gate; fall back to raw measurement |
| Bore-sight drift over temperature | MEDIUM | MEDIUM — accuracy degradation | Factory calibration at 23°C; characterize thermal drift in SW-5 |

---

## 11. Acceptance Criteria (Gate to SW-Phase 1)

- [ ] Ballistic model specification complete (ammunition, table structure, interpolation method)
- [ ] Range estimation algorithm formally specified (formula, inputs, accuracy bounds)
- [ ] Kalman filter design parameters defined (process noise, measurement noise, state vector)
- [ ] Bounds check logic fully specified (all thresholds, all fault messages)
- [ ] Calibration algorithm selected (factory fixed offset vs runtime self-check)
- [ ] API contract with SW-AI (input format) and SW-FW (output format) agreed
- [ ] Variant ammunition table plan reviewed

---

*Software sub-project of V-SMASH Product Family*
*Cross-reference: [[V-SMASH-M_Function_Structure_v1.0|SF5, SF5 bounds]], [[V-SMASH-M_FMEA_v1.0|FMEA F08]], [[V-SMASH-M_Morphological_Matrix_v1.0|SF5-A5]], [[V-SMASH-M_Verification_Plan_v1.0|T10 Lead Accuracy, VM-N03]], [[V-SMASH-JIG-PR11_Product_Proposal_v1.0|Bore-Sight Jig]], [[V-SMASH-SLED_Product_Proposal_v1.0|Drone Target Sled]]*
