---
project: V-SMASH-SW-BAL
type: software-requirements-specification
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — FLAG-10 local maintainability tracked, FLAG-12 MAX_LEAD_MRAD derivation deferred to SAD — 2026-02-24)
parent_family: V-SMASH
sw_phase: 1 (Formal Specification)
safety_class: B (lead computation accuracy affects engagement effectiveness; bounds check is safety-related)
reusable_by: [V-M, V-L, V-X, V-T, V-NV, V-P, V-R]
excluded_by: [V-D]
source: V-SMASH-SW-BAL_Product_Proposal_v1.0.md (SW-Phase 0)
standards: See [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0]] §2.3
environment: See [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]] SW-BAL column
reconciliation: See [[V-SMASH_SG3_Requirements_Reconciliation_v1.0]] Issue 3
---

# V-SMASH-SW-BAL — Software Requirements Specification

**SW-Phase 1 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This SRS defines the complete, testable requirements for V-SMASH-SW-BAL — the ballistic computation and sensor fusion module. SW-BAL converts AI detection output (`ai_output_t`) into an angular lead indicator for the operator. This includes monocular range estimation, ballistic lead-angle lookup, Kalman tracking filter, output bounds checking, and factory bore-sight calibration loading.

**Safety Class B:** SW-BAL does not directly gate the engagement decision (that is SW-AI's confidence gate), but an incorrect lead angle can misdirect fire. Safety-related requirements (SWR-BAL-Sxx) cover output bounds checking and stale indicator suppression. Independent V&V required for safety-related requirements only; self-V&V acceptable for non-safety requirements.

### 1.2 Scope

**Included:** BAL-RANGE (range estimation), BAL-SIZE (physical size lookup), BAL-LEAD (ballistic lead computation), BAL-TRACK (Kalman tracking filter), BAL-BOUNDS (output sanity checking), BAL-CALIB (bore-sight calibration loading), BAL-HEALTH (module health monitoring).

**Excluded:** V-D variant (detection-only, no weapon/ballistic module). Object detection and classification (SW-AI). Display rendering (SW-FW). IMU/recoil detection hardware driver (SW-FW FW-HAL).

### 1.3 References

| Ref | Document | Relevance |
|-----|----------|-----------|
| [PP] | V-SMASH-SW-BAL_Product_Proposal_v1.0 | SW-Phase 0 source for all SWR-BAL requirements |
| [SG3] | V-SMASH_SG3_Requirements_Reconciliation_v1.0 | Issue 3: VM-S06 lead accuracy conditioned on range × angular velocity envelope |
| [AI-SRS] | V-SMASH-SW-AI_SRS_v1.0 | `ai_output_t` interface contract (§3.10.2) |
| [FW-SAD] | V-SMASH-SW-FW_SAD_v1.0 | FW-API contract (§7), `overlay_t`, `fw_display_render()`, `fw_report_fault()`, watchdog API |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0 | §2.3: SW-BAL safety standard mapping |
| [ENV] | V-SMASH_Family_Orchestration_Design_v1.0 §12 | SW operating envelope (−10 to +55°C, 95% RH) |
| [B1] | V-SMASH-M_B1_YCKT_v1.0 | Source VM-level requirements |
| [FMEA] | V-SMASH-M_FMEA_v1.0 | F08: cascading computation error (RPN=108) |

### 1.4 Definitions

| Term | Meaning |
|------|---------|
| Lead angle | Angular offset between current target position and predicted point of impact, in mrad |
| LUT | Lookup Table — pre-computed values with bilinear interpolation |
| Bore-sight | Alignment between sensor optical axis and weapon barrel axis |
| EST indicator | "Estimate" warning displayed when lead accuracy exceeds primary envelope |
| Monocular range | Range estimated from single camera using apparent angular size vs known physical size |
| Primary envelope | Range ≤150 m AND angular velocity ≤10 deg/s — where ≤1.0 mrad accuracy is achievable |
| Extended envelope | Range ≤200 m AND angular velocity ≤20 deg/s — where ≤2.0 mrad accuracy is achievable |

---

## 2. System Context

### 2.1 Data Flow

```
ai_frame_output_t (from SW-AI, per frame)
       │
       │  For each gated detection (gate_state > 0):
       ▼
 ┌─────────────┐
 │  BAL-SIZE   │  target_class → physical_size_m
 │  Lookup     │  (4-entry table)
 └──────┬──────┘
        ▼ physical_size_m
 ┌─────────────┐
 │  BAL-RANGE  │  range_m = (physical_size_m × FOCAL_LENGTH_PX)
 │  Monocular  │              / angular_size_px
 │  Estimate   │  Result: range_est ± 30% [ACKNOWLEDGED]
 └──────┬──────┘
        ▼ range_est_m
 ┌─────────────┐
 │  BAL-TRACK  │  Kalman filter: smooth angular velocity
 │  Kalman     │  Innovation gate: reject outliers
 │  Filter     │  Output: smoothed_angular_vel_dps
 └──────┬──────┘
        ▼ smoothed_angular_vel_dps + range_est_m
 ┌─────────────┐
 │  BAL-LEAD   │  Bilinear interpolation in 7.62×39mm LUT
 │  Ballistic  │  Output: lead_angle_mrad + lead_direction_deg
 │  LUT        │
 └──────┬──────┘
        ▼ lead_angle_mrad
 ┌─────────────────┐
 │  BAL-BOUNDS     │  Sanity checks:
 │  + BAL-CALIB    │  - |lead| > MAX_LEAD_MRAD → COMPUTE FAULT
 │                 │  - Δlead > JUMP_LIMIT → SUPPRESS 1 frame
 │                 │  - range <30m or >300m → RANGE? + suppress lead
 │                 │  - Apply bore-sight offset from BAL-CALIB
 └──────┬──────┘
        │
   ┌────┴────┐
   ▼         ▼
 VALID     FAULT/SUPPRESS
 → bal_output_t    → fw_report_fault(FAULT_BAL)
                     or RANGE? overlay message
```

### 2.2 Interface Summary

| Interface | Direction | Type | Contract |
|-----------|-----------|------|----------|
| `ai_frame_output_t` | IN (from SW-AI) | Shared memory / function call | [AI-SRS] §3.10.2 |
| `overlay_t` | OUT (to FW-DISP) | Via `fw_display_render()` | [FW-SAD] §7.1, §7.2 |
| `fw_report_fault(FAULT_BAL)` | OUT (to FW-FSM) | Function call | [FW-SAD] §7.2 |
| `fw_register_watchdog()` | INIT (to FW-WDG) | Function call | [FW-SAD] §7.2 |
| `fw_watchdog_heartbeat()` | PERIODIC (to FW-WDG) | Function call | [FW-SAD] §7.2 |
| `fw_get_fsm_state()` | IN (from FW-FSM) | Function call | [FW-SAD] §7.2 |
| `fw_get_thermal_state()` | IN (from FW-THERM) | Function call | [FW-SAD] §7.2 |

---

## 3. Requirements

### 3.1 Functional Requirements — BAL-SIZE (Physical Size Lookup)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F01 | BAL-SIZE shall maintain a lookup table mapping `ai_class_t` to a default physical size (meters). Default values: drone-rotor = 0.35 m, drone-fixed-wing = 1.0 m, bird = 0.20 m, unknown = 0.35 m. | [PP] SWR-BAL-13 | MUST | I: table review. T: inject each class, verify output |
| SWR-BAL-F02 | BAL-SIZE physical size values shall be build-time configurable via a configuration header (not runtime-modifiable). | [PP] variant config | MUST | I: code review — `#define` in config header |
| SWR-BAL-F03 | BAL-SIZE shall return the default physical size for `AI_CLASS_UNKNOWN` (0.35 m) for any unrecognized class value. | Defensive coding | MUST | T: inject invalid class enum value, verify default returned |

### 3.2 Functional Requirements — BAL-RANGE (Monocular Range Estimation)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F10 | BAL-RANGE shall estimate target range using the monocular angular size method: `range_m = (physical_size_m × FOCAL_LENGTH_PX) / apparent_size_px`, where `apparent_size_px = ai_output_t.angular_size_mrad / MRAD_PER_PX`. | [PP] SWR-BAL-10, SF5-A5 | MUST | T: inject known angular sizes, verify computed range within ±1% of analytical result |
| SWR-BAL-F11 | BAL-RANGE shall clamp estimated range to [30.0, 300.0] m. Values outside this range are tagged as `RANGE_OUT_OF_BOUNDS`. | [PP] SWR-BAL-12 | MUST | T: inject angular sizes that produce <30 m and >300 m, verify clamping and flag |
| SWR-BAL-F12 | BAL-RANGE shall apply a first-order exponential smoothing filter (α = 0.3 [ASSUMPTION — tunable at integration]) to range estimates across frames for the same `track_id`, to reduce frame-to-frame jitter. | Design (noise reduction) | SHOULD | T: inject noisy angular sizes, verify smoothed range RMS noise reduction ≥40% vs raw |
| SWR-BAL-F13 | BAL-RANGE shall reset the range smoother when `track_id` changes or `reacquired == 1` (post-shot reacquisition). On reset, the first estimate is used directly (no smoothing). | Post-shot recovery | MUST | T: inject reacquired=1, verify immediate range estimate (no lag from prior track) |

### 3.3 Functional Requirements — BAL-TRACK (Kalman Tracking Filter)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F20 | BAL-TRACK shall maintain a per-track Kalman filter with state vector `[angular_pos_x, angular_pos_y, angular_vel_x, angular_vel_y]` (4-state, constant-velocity model). | VM-K01, design | MUST | T: inject constant-velocity trajectory, verify state convergence within 5 frames |
| SWR-BAL-F21 | BAL-TRACK shall initialize a new filter when a new `track_id` first appears. Initial state: position from bbox center, velocity from `ai_output_t.angular_vel_dps` and `angular_vel_dir_deg`. | Design | MUST | T: verify filter initialization on new track |
| SWR-BAL-F22 | BAL-TRACK shall reset the filter when `reacquired == 1` (post-shot reacquisition): reinitialize from current measurement, zero velocity estimate, increase process noise for 5 frames (fast re-convergence). | VM-S07 | MUST | T: inject reacquired flag, verify filter reset and convergence within 5 frames (≤167 ms) |
| SWR-BAL-F23 | BAL-TRACK shall implement an innovation gate: if the measurement residual exceeds 3σ of the filter's predicted uncertainty, the measurement is rejected and the filter predicts forward using the prior state. | Outlier rejection | MUST | T: inject single-frame outlier (10× expected), verify filter rejects and coasts |
| SWR-BAL-F24 | BAL-TRACK process noise Q shall be tunable at build time. Default Q diagonal: `[0.01, 0.01, 1.0, 1.0]` (position: tight, velocity: loose) [ASSUMPTION — tuned at integration]. | Design | MUST | I: verify Q is compile-time configurable |
| SWR-BAL-F25 | BAL-TRACK measurement noise R shall be derived from SW-AI detection jitter. Default R diagonal: `[2.0, 2.0]` pixels² [ASSUMPTION — calibrated from AI output variance]. | Design | MUST | I: verify R is compile-time configurable |
| SWR-BAL-F26 | BAL-TRACK shall output the filtered angular velocity magnitude (deg/s) and direction (deg) for use by BAL-LEAD. | API contract | MUST | T: verify output matches Kalman state extraction |
| SWR-BAL-F27 | BAL-TRACK shall track up to 10 simultaneous targets (matching `ai_frame_output_t.detections[10]`). Each target gets an independent Kalman filter instance. | [AI-SRS] §3.10.2 | MUST | T: inject 10 simultaneous tracks, verify independent filter operation |

### 3.4 Functional Requirements — BAL-LEAD (Ballistic Lead Computation)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F30 | BAL-LEAD shall compute the lead angle using a pre-computed lookup table (LUT) indexed by `[range_m, angular_vel_dps]`. The LUT encodes the angular lead offset (mrad) required for the configured ammunition type. | VM-S06, [PP] SWR-BAL-01 | MUST | T: compare LUT output vs analytical ballistic model at all grid points — error ≤0.01 mrad |
| SWR-BAL-F31 | BAL-LEAD LUT for 7.62×39mm M43 (V-M baseline) shall have the following grid: Range = {50, 100, 150, 200} m. Angular velocity = {0, 5, 10, 15, 20, 25, 30} deg/s. Total: 4 × 7 = 28 entries. | [PP] §4 | MUST | I: verify LUT dimensions and contents match ballistic model output |
| SWR-BAL-F32 | BAL-LEAD shall use bilinear interpolation between LUT grid points. For range >200 m, extrapolate from 150–200 m slope (linear). For angular velocity >30 deg/s, clamp to 30 deg/s entry. | Design | MUST | T: query points between grid nodes, verify interpolation error ≤0.05 mrad vs analytical |
| SWR-BAL-F33 | BAL-LEAD shall compute the lead direction from the filtered angular velocity direction: lead is applied opposite to target motion in sensor coordinates. Output: `lead_offset_x_mrad`, `lead_offset_y_mrad`. | Physics | MUST | T: inject known motion direction, verify lead applied in correct direction |
| SWR-BAL-F34 | BAL-LEAD LUT shall be a compile-time constant array (not runtime-loaded). Variant selection via `#ifdef VARIANT_xx`. | Build config | MUST | I: code review — LUT is const array in ROM |
| SWR-BAL-F35 | BAL-LEAD shall flag when the operating point is outside the primary envelope (range >150 m OR angular velocity >10 deg/s) by setting `est_indicator = 1` in `bal_output_t`. | [SG3] Issue 3, VM-S06-B | MUST | T: inject points inside and outside primary envelope, verify EST flag |

### 3.5 Functional Requirements — BAL-BOUNDS (Output Sanity Checking)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F40 | BAL-BOUNDS shall check that the computed lead angle magnitude does not exceed `MAX_LEAD_MRAD` (default: 50.0 mrad [ASSUMPTION]). If exceeded: report `FAULT_BAL` via `fw_report_fault()`, set `bal_output_t.valid = 0`. | [PP] SWR-BAL-S01, FMEA F08 | MUST (SAFETY) | T: inject angular velocity that produces >50 mrad lead, verify fault reported |
| SWR-BAL-F41 | BAL-BOUNDS shall check frame-to-frame lead angle jump: if |lead(t) − lead(t−1)| > `JUMP_LIMIT_MRAD` (default: 15.0 mrad [ASSUMPTION]) without corresponding target motion >15 deg/s, suppress lead for 1 frame and log `LEAD_JUMP` event. | [PP] SWR-BAL-S02 | MUST (SAFETY) | T: inject sudden lead jump without matching target motion, verify 1-frame suppression |
| SWR-BAL-F42 | BAL-BOUNDS shall suppress lead and display "RANGE?" when range estimate is `RANGE_OUT_OF_BOUNDS` (per BAL-RANGE F11). Lead dot hidden, message[0] = "RANGE?". Lead resumes when range returns to [30, 300] m for ≥3 consecutive frames. | [PP] SWR-BAL-S03, VM-S06-C | MUST (SAFETY) | T: inject out-of-range, verify RANGE? display and suppression. T: return to valid range, verify 3-frame hysteresis |
| SWR-BAL-F43 | BAL-BOUNDS shall suppress lead when `fw_get_fsm_state()` returns any fault/degraded state (FAULT, SENSOR_FAULT, AI_FAULT, OVERHEAT, SHUTDOWN). | FW-SAD §4.2 | MUST (SAFETY) | T: inject FSM fault state, verify lead suppressed |
| SWR-BAL-F44 | BAL-BOUNDS `MAX_LEAD_MRAD` and `JUMP_LIMIT_MRAD` thresholds shall be build-time constants, not runtime-configurable. | Safety | MUST (SAFETY) | I: code review — `#define`, not variable |

### 3.6 Functional Requirements — BAL-CALIB (Bore-Sight Calibration)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F50 | BAL-CALIB shall load factory bore-sight calibration offsets (`offset_x_mrad`, `offset_y_mrad`) from non-volatile storage (eMMC) at power-on. These offsets represent the angular misalignment between the CMOS sensor optical axis and the OLED display optical axis. | VM-N03, [PP] SWR-BAL-20/21 | MUST | T: write known offset to eMMC, reboot, verify loaded offset matches |
| SWR-BAL-F51 | BAL-CALIB shall apply the bore-sight offset as a fixed correction to every lead dot position: `display_x = lead_x + offset_x`, `display_y = lead_y + offset_y` (in pixel coordinates). | VM-N03 | MUST | T: set known offset, inject known lead angle, verify display position = lead + offset |
| SWR-BAL-F52 | If no calibration data is found in eMMC (first boot or corrupted), BAL-CALIB shall use default offset (0, 0) and log `CALIB_MISSING` event. Operation continues — no fault state. | Defensive | MUST | T: wipe eMMC calibration sector, boot, verify zero offset and log entry |
| SWR-BAL-F53 | BAL-CALIB data shall include a CRC-16 integrity check. If CRC fails on load: use default (0, 0), log `CALIB_CRC_FAIL`. | Data integrity | MUST | T: corrupt 1 byte of stored calibration, verify CRC detection and fallback |
| SWR-BAL-F54 | BAL-CALIB shall be writable only via USB diagnostics mode (depot tool). No field-accessible interface for bore-sight modification. | Safety, [PP] SWR-BAL-22 | MUST | I: code review — write function gated by `hal_usb_connected()` |
| SWR-BAL-F55 | BAL-CALIB bore-sight convergence shall be ≤0.1 s (factory offset load from eMMC). No runtime self-calibration in v1.0. | [PP] §5 recommendation | MUST | T: measure time from boot to calibration-loaded event |

### 3.7 Functional Requirements — BAL-HEALTH (Module Health Monitoring)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F60 | BAL-HEALTH shall register with `fw_register_watchdog(MODULE_BAL, 500)` at initialization. BAL shall call `fw_watchdog_heartbeat()` after each successful BAL pipeline cycle. | FW-SAD §7.2, VM-N06 | MUST | T: verify watchdog registration at init. T: halt BAL, verify FW-WDG triggers FAULT within 500 ms |
| SWR-BAL-F61 | If BAL detects an internal error (Kalman NaN, LUT index out of range, division by zero): call `fw_report_fault(FAULT_BAL)`, log the specific error code, and cease producing lead output until reset. | FMEA F08 | MUST | T: inject NaN into Kalman state, verify fault reported and output ceased |
| SWR-BAL-F62 | BAL-HEALTH shall log the following events via the FW logging facility: `BAL_INIT_OK`, `BAL_FAULT`, `CALIB_LOADED`, `CALIB_MISSING`, `CALIB_CRC_FAIL`, `RANGE_WARN`, `LEAD_JUMP`, `EST_ACTIVE`. | Diagnostics | MUST | I: verify all event codes defined and logged at appropriate points |

### 3.8 Functional Requirements — BAL Output Interface

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-F70 | BAL shall produce a `bal_output_t` struct per processed detection, consumed by the overlay coordinator to populate `overlay_t` for `fw_display_render()`. | API contract | MUST | T: verify struct populated for each gated detection |
| SWR-BAL-F71 | BAL shall process all gated detections in `ai_frame_output_t.detections[]` (count = `ai_frame_output_t.count`, max 10) per frame. For the V-M baseline, only the highest-confidence detection is used for the lead dot; remaining detections are processed but not displayed. | Design | MUST | T: inject 3 detections, verify all processed, highest-confidence used for overlay |
| SWR-BAL-F72 | BAL shall not produce any output when `ai_frame_output_t.count == 0` (no gated detections). In this case, BAL sets `overlay_t.dot_color = DOT_COLOR_OFF` and clears the dot position. | Design | MUST | T: inject zero-count frame, verify overlay cleared |

#### BAL Output Struct

```c
/* bal_output.h — SW-BAL → overlay coordinator interface contract */

#include <stdint.h>
#include "ai_output.h"    /* ai_class_t */

typedef struct {
    /* Input echo (for traceability) */
    uint32_t  track_id;             /* From ai_output_t */
    ai_class_t target_class;        /* From ai_output_t */
    float     confidence;           /* From ai_output_t */

    /* Range estimation */
    float     range_est_m;          /* Estimated range (meters), clamped to [30, 300] */
    float     physical_size_m;      /* Physical size used for range calc */
    uint8_t   range_valid;          /* 1 = within [30, 300] m, 0 = out-of-bounds */

    /* Lead computation */
    float     lead_offset_x_mrad;   /* Lead angle X component (mrad, sensor frame) */
    float     lead_offset_y_mrad;   /* Lead angle Y component (mrad, sensor frame) */
    float     lead_magnitude_mrad;  /* Total lead angle magnitude (mrad) */

    /* Display position (pixels, after bore-sight correction) */
    uint16_t  dot_x;                /* Lead dot X position (sensor pixel coords) */
    uint16_t  dot_y;                /* Lead dot Y position (sensor pixel coords) */

    /* Status */
    uint8_t   valid;                /* 1 = lead is valid and displayable, 0 = suppressed */
    uint8_t   est_indicator;        /* 1 = outside primary envelope → display "EST" */
    uint8_t   range_warning;        /* 1 = range out of bounds → display "RANGE?" */
    uint8_t   reserved;             /* Pad to 4-byte alignment */

    /* Kalman state (for diagnostics / COM upload) */
    float     filtered_angular_vel_dps;  /* Smoothed angular velocity (deg/s) */
    float     filtered_angular_dir_deg;  /* Smoothed angular direction (deg) */
} bal_output_t;
```

### 3.9 Performance Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-BAL-P01 | BAL pipeline latency (ai_output_t → bal_output_t ready) | VM-S02 allocation | ≤20 ms (within 150 ms system budget) | T: timestamp difference, 1000 frames, 95th percentile ≤20 ms |
| SWR-BAL-P02 | BAL pipeline frame rate | VM-K02 | ≥30 Hz (synced with AI pipeline output rate) | T: measure BAL output intervals over 1000 frames |
| SWR-BAL-P03 | BAL pipeline frame rate under thermal throttle | VM-M05 | Matches AI output rate: ≥15 Hz at THROTTLE_15, ≥10 Hz at THROTTLE_10 | T: inject thermal states, measure BAL output rate |
| SWR-BAL-P04 | Lead accuracy — primary envelope (range ≤150 m, angular velocity ≤10 deg/s) | [SG3] Issue 3, VM-S06 | ≤1.0 mrad | T: PR-11 jig + drone sled, ≥50 passes per condition, 4 range × 3 velocity bins |
| SWR-BAL-P05 | Lead accuracy — extended envelope (range ≤200 m, angular velocity ≤20 deg/s) | [SG3] VM-S06-A | ≤2.0 mrad | T: PR-11 jig + drone sled, ≥30 passes per condition |
| SWR-BAL-P06 | Range estimation accuracy | [PP] SWR-BAL-11 | ±30% at 200 m (acknowledged limitation) | T: known-range targets at 50, 100, 150, 200 m — ≥20 measurements per range |
| SWR-BAL-P07 | Post-shot reacquisition (BAL contribution) | VM-S07 | ≤50 ms from reacquired detection to valid lead output | T: inject reacquired=1, measure time to first valid bal_output_t |
| SWR-BAL-P08 | Bore-sight calibration load time | VM-N03 | ≤0.1 s from power-on to calibration loaded | T: measure boot timing, 10 cold starts |
| SWR-BAL-P09 | Bore-sight residual error | VM-N03 | ≤0.5 mrad (factory-calibrated offset accuracy) | T: PR-11 jig measurement at 3 ambient temperatures (−10, +23, +55°C) |
| SWR-BAL-P10 | Kalman filter convergence after new track | Design | ≤5 frames (≤167 ms at 30 Hz) to steady-state velocity estimate (error ≤20% of true velocity) | T: inject constant-velocity track, measure convergence time |
| SWR-BAL-P11 | BAL CPU utilization | Power budget [SG3] Issue 1 | ≤5% of Jetson Orin Nano CPU (single core) in 7 W mode | T: `perf stat` measurement during continuous operation, 60 s window |
| SWR-BAL-P12 | Angular velocity tracking range | VM-K01 | 0–30 deg/s. BAL shall not produce valid lead for measured angular velocity >30 deg/s — set `valid = 0`, log `VEL_EXCEEDED`. | T: inject 35 deg/s trajectory, verify suppression |

### 3.10 Safety-Related Requirements

| ID | Requirement | Source | Safety Class | Verification |
|----|-------------|--------|-------------|-------------|
| SWR-BAL-S01 | BAL-BOUNDS shall detect and report COMPUTE FAULT when lead magnitude exceeds `MAX_LEAD_MRAD` (50.0 mrad). On COMPUTE FAULT: lead dot immediately hidden, `fw_report_fault(FAULT_BAL)` called, operator sees "COMPUTE FAULT" on OLED. | [PP] SWR-BAL-S01, FMEA F08 | SAFETY-RELATED | T: inject extreme velocity/range combination → verify fault within 1 frame. D: independent V&V reviews bounds logic. |
| SWR-BAL-S02 | BAL-BOUNDS shall detect and suppress lead for 1 frame when frame-to-frame jump exceeds `JUMP_LIMIT_MRAD` (15.0 mrad) without corresponding target angular velocity >15 deg/s. This prevents display of erratic lead caused by detection glitch or Kalman divergence. | [PP] SWR-BAL-S02 | SAFETY-RELATED | T: inject lead jump without motion, verify 1-frame suppression. |
| SWR-BAL-S03 | BAL-BOUNDS shall suppress lead and display "RANGE?" when range estimate is outside [30, 300] m. Lead suppressed until range returns to valid bounds for ≥3 consecutive frames. | [PP] SWR-BAL-S03, VM-S06-C | SAFETY-RELATED | T: inject out-of-bounds range, verify suppression and "RANGE?" message. T: return to valid, verify 3-frame hysteresis. |
| SWR-BAL-S04 | BAL shall cease producing lead output within 500 ms of AI pipeline failure (no `ai_frame_output_t` received). Enforced by FW-WDG: if BAL does not heartbeat within 500 ms, FW enters FAULT and suppresses all combat indicators. | VM-N06, [PP] SWR-BAL-S04 | SAFETY-CRITICAL | T: halt AI pipeline, verify FW-WDG triggers FAULT ≤500 ms, verify lead disappears. |
| SWR-BAL-S05 | All safety-related bounds check thresholds (`MAX_LEAD_MRAD`, `JUMP_LIMIT_MRAD`, range bounds [30, 300] m) shall be build-time constants, not runtime-configurable. | IEC 61508-3 §7.4.5 | SAFETY-RELATED | I: code review — all thresholds are `#define` or `constexpr`. |
| SWR-BAL-S06 | BAL shall not produce lead output when FSM state is any of: INIT, SHUTDOWN, OVERHEAT, FAULT, SENSOR_FAULT, AI_FAULT. BAL checks `fw_get_fsm_state()` at pipeline start; if not READY, DETECTED, or POST_SHOT, pipeline is skipped. | FW-SAD §4.2 | SAFETY-RELATED | T: set FSM to each prohibited state, verify no BAL output. |

### 3.11 Interface Requirements

#### 3.11.1 Input Interface (from SW-AI)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-I01 | BAL shall consume `ai_frame_output_t` as defined in [AI-SRS] §3.10.2. All fields listed in the `ai_output_t` struct are required for BAL processing. | API contract | MUST | T: verify BAL reads all fields correctly. I: type compatibility check at compile time. |
| SWR-BAL-I02 | BAL shall validate `ai_frame_output_t.count` is in [0, 10] before processing. If count > 10: clamp to 10 and log `AI_COUNT_OVERFLOW`. | Defensive | MUST | T: inject count=11, verify clamped to 10 and logged |
| SWR-BAL-I03 | BAL shall validate each `ai_output_t.confidence` is in [0.0, 1.0]. If outside: skip that detection and log `AI_CONFIDENCE_INVALID`. | Defensive | MUST | T: inject confidence=1.5, verify detection skipped |
| SWR-BAL-I04 | BAL shall validate each `ai_output_t.angular_size_mrad` is > 0.0. If ≤0: skip that detection (division by zero in range formula) and log `AI_ANGSIZE_ZERO`. | Defensive | MUST | T: inject angular_size=0, verify detection skipped (no crash) |

#### 3.11.2 Output Interface (to Overlay Coordinator)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-BAL-I10 | BAL shall produce `bal_output_t` as defined in §3.8. The overlay coordinator (architectural decision in SAD) reads this struct to populate `overlay_t` for `fw_display_render()`. | API contract | MUST | T: verify struct populated correctly for various input conditions |
| SWR-BAL-I11 | BAL shall convert lead offset from mrad to pixel coordinates for `dot_x`, `dot_y` using: `pixel_offset = lead_mrad / MRAD_PER_PX`, where `MRAD_PER_PX = HFOV_MRAD / SENSOR_WIDTH_PX = 209.4 / 1920 = 0.109 mrad/px`. Bore-sight offset is added after this conversion. | [AI-SRS] §3.10.2, [SG3] Issue 2 | MUST | T: inject known lead in mrad, verify pixel position matches analytical conversion |
| SWR-BAL-I12 | BAL shall set `overlay_t.messages[1] = "EST"` when `bal_output_t.est_indicator == 1` (outside primary envelope). Set `overlay_t.messages[0] = "RANGE?"` when `bal_output_t.range_warning == 1`. | [SG3] VM-S06-B, VM-S06-C | MUST | T: verify correct message placement for each condition |

---

## 4. Ballistic Model Specification

### 4.1 Ammunition: 7.62×39mm M43 Ball (V-M Baseline)

| Parameter | Value | Source |
|-----------|-------|--------|
| Cartridge | 7.62×39mm M43 (steel core) | AK-platform standard |
| Bullet mass | 7.9 g (122 gr) | Published data |
| Muzzle velocity (V₀) | 715 m/s | Published data |
| Ballistic coefficient (G1) | 0.285 | Published data |
| Drag model | G1 standard | Simplified — sufficient for ≤200 m |

### 4.2 Time-of-Flight Table

Time of flight (TOF) computed using G1 drag model:

| Range (m) | TOF (ms) | Velocity at range (m/s) | Drop (cm) |
|-----------|----------|------------------------|-----------|
| 50 | 72 | 672 | 2.5 |
| 100 | 148 | 631 | 10.7 |
| 150 | 228 | 591 | 25.5 |
| 200 | 313 | 553 | 48.0 |

### 4.3 Lead Angle Lookup Table

Lead angle (mrad) = `angular_velocity_rad/s × TOF_s`:

| Range \ Ang. Vel. | 0 deg/s | 5 deg/s | 10 deg/s | 15 deg/s | 20 deg/s | 25 deg/s | 30 deg/s |
|-------------------|---------|---------|----------|----------|----------|----------|----------|
| **50 m** | 0.0 | 6.3 | 12.6 | 18.8 | 25.1 | 31.4 | 37.7 |
| **100 m** | 0.0 | 12.9 | 25.8 | 38.8 | 51.7 | 64.6 | 77.5 |
| **150 m** | 0.0 | 19.9 | 39.8 | 59.7 | 79.6 | 99.5 | 119.4 |
| **200 m** | 0.0 | 27.3 | 54.7 | 82.0 | 109.3 | 136.7 | 164.0 |

*Values in mrad. Computed as: lead_mrad = (ang_vel_deg/s × π/180) × TOF_s × 1000.*

**Note:** At high range × high angular velocity, lead values are very large (>50 mrad). BAL-BOUNDS `MAX_LEAD_MRAD = 50.0` will trigger COMPUTE FAULT for combinations in the lower-right region. This is by design — these combinations are beyond the weapon's practical engagement capability.

### 4.4 Lead Accuracy Error Budget

Per [SG3] Issue 3 analysis:

| Error Source | Magnitude | Contribution to Lead Error |
|-------------|-----------|---------------------------|
| Range estimation (±30%) | ±30% of range | ±30% of lead angle (dominant) |
| Angular velocity noise (Kalman filter) | ±2 deg/s (after filtering) | ±(TOF × 2 deg/s) — 0.3–0.6 mrad |
| Bore-sight offset residual | ≤0.5 mrad | Fixed bias, not lead-dependent |
| LUT interpolation error | ≤0.05 mrad | Negligible |
| **Total (RSS)** | | **See envelope conditioning below** |

### 4.5 Operating Envelope Conditioning (from [SG3] Issue 3)

| Envelope | Range | Angular Velocity | Lead Accuracy | EST Display |
|----------|-------|-----------------|---------------|-------------|
| **Primary** | ≤150 m | ≤10 deg/s | ≤1.0 mrad (VM-S06) | No |
| **Extended** | ≤200 m | ≤20 deg/s | ≤2.0 mrad (VM-S06-A) | Yes — "EST" |
| **Beyond** | >200 m OR >20 deg/s | — | Unreliable | Yes — "EST" + possible RANGE? |

---

## 5. Optical Constants

Constants shared with SW-AI ([AI-SRS] §3.10.2) for coordinate conversion:

```c
/* bal_constants.h — optical and conversion constants */

/* Sensor */
#define SENSOR_WIDTH_PX     1920
#define SENSOR_HEIGHT_PX    1080

/* Optics (VM-S08: 12° HFOV nominal) */
#define HFOV_DEG            12.0f
#define VFOV_DEG            (HFOV_DEG * SENSOR_HEIGHT_PX / SENSOR_WIDTH_PX)  /* 6.75° */
#define HFOV_MRAD           (HFOV_DEG * 17.4533f)  /* 209.4 mrad */
#define VFOV_MRAD           (VFOV_DEG * 17.4533f)  /* 117.8 mrad */
#define MRAD_PER_PX         (HFOV_MRAD / SENSOR_WIDTH_PX)  /* 0.109 mrad/px */
#define PX_PER_MRAD         (SENSOR_WIDTH_PX / HFOV_MRAD)  /* 9.17 px/mrad */

/* Derived: focal length in pixels (for range estimation) */
/* FOCAL_LENGTH_PX = SENSOR_WIDTH_PX / (2 × tan(HFOV_DEG/2 × π/180)) */
/* At 12° HFOV: tan(6°) = 0.10510 → FOCAL_LENGTH_PX = 1920 / (2 × 0.10510) = 9134 px */
#define FOCAL_LENGTH_PX     9134.0f

/* Range estimation: range_m = (physical_size_m × FOCAL_LENGTH_PX) / apparent_size_px */

/* Lead conversion */
/* lead_px = lead_mrad / MRAD_PER_PX = lead_mrad × PX_PER_MRAD */
```

---

## 6. Variant Configuration

### 6.1 Variant Matrix

| Variant | BAL Module | Ammunition LUT | BAL-TRACK | BAL-CALIB | Adaptation |
|---------|-----------|---------------|-----------|-----------|------------|
| **V-M** | Full | 7.62×39mm M43 | Standard Kalman | Factory offset | **Baseline** |
| V-L | Full | 7.62×39mm M43 | Standard Kalman | Factory offset | Same as V-M |
| **V-D** | **EXCLUDED** | N/A | N/A | N/A | No weapon — no ballistic module |
| V-X | Full | **Configurable LUT** | Standard Kalman | Factory offset | Customer ammunition LUT per export contract |
| V-T | Full | 7.62×39mm M43 | Kalman + data log | Factory offset | Additional: log all BAL state to COM for training analysis |
| V-NV | Full | 7.62×39mm M43 | Kalman | Factory offset | No BAL change — thermal affects AI, not BAL |
| V-P | Full | **12.7×108mm** | Standard Kalman | Factory offset | **New LUT** (heavier round, different TOF profile) |
| V-R | Full | **CAN-selectable LUT** | Kalman + **stabilization** | **Runtime auto-cal** | Major: vehicle motion compensation, multi-ammo, active calibration |

### 6.2 Ammunition LUT Priority

| Priority | Ammunition | Variant(s) | Status |
|----------|-----------|-----------|--------|
| P0 | 7.62×39mm M43 | V-M, V-L, V-T, V-NV | **Baseline — this SRS** |
| P1 | 12.7×108mm | V-P | After V-M validated |
| P2 | Customer-specified | V-X, V-R | Per export contract |

### 6.3 Build Configuration

```c
/* bal_config.h — per-variant build configuration */

#if defined(VARIANT_VM) || defined(VARIANT_VL) || defined(VARIANT_VT) || defined(VARIANT_VNV)
  #define BAL_LUT_7_62x39     1
  #define BAL_CALIB_FACTORY   1
  #define BAL_TRACK_STANDARD  1
#elif defined(VARIANT_VX)
  #define BAL_LUT_CUSTOM      1      /* LUT provided per export contract */
  #define BAL_CALIB_FACTORY   1
  #define BAL_TRACK_STANDARD  1
#elif defined(VARIANT_VP)
  #define BAL_LUT_12_7x108    1
  #define BAL_CALIB_FACTORY   1
  #define BAL_TRACK_STANDARD  1
#elif defined(VARIANT_VR)
  #define BAL_LUT_MULTI       1      /* CAN-selectable at runtime */
  #define BAL_CALIB_RUNTIME   1      /* Active self-calibration */
  #define BAL_TRACK_STABILIZED 1     /* Vehicle motion compensation */
#elif defined(VARIANT_VD)
  #error "V-D has no ballistic module — do not include SW-BAL"
#endif

/* Physical size defaults (overridable per variant) */
#define BAL_SIZE_DRONE_ROTOR_M       0.35f
#define BAL_SIZE_DRONE_FIXED_WING_M  1.00f
#define BAL_SIZE_BIRD_M              0.20f
#define BAL_SIZE_UNKNOWN_M           0.35f

/* Safety-related thresholds (build-time constants, SWR-BAL-S05) */
#define MAX_LEAD_MRAD       50.0f
#define JUMP_LIMIT_MRAD     15.0f
#define RANGE_MIN_M         30.0f
#define RANGE_MAX_M         300.0f

/* Kalman filter tuning [ASSUMPTION — calibrated at integration] */
#define KALMAN_Q_POS        0.01f     /* Process noise: position */
#define KALMAN_Q_VEL        1.0f      /* Process noise: velocity */
#define KALMAN_R_MEAS       2.0f      /* Measurement noise: pixels² */

/* Range estimation smoothing */
#define RANGE_ALPHA         0.3f      /* EMA smoothing factor [ASSUMPTION] */
```

---

## 7. Traceability Matrix

### 7.1 Forward (Source → SWR-BAL)

| Source | SWR-BAL Coverage |
|--------|-----------------|
| VM-S06 (lead accuracy) | F30, F31, F32, F33, F35, P04, P05, S01, S02, §4.5 |
| VM-S06-A (extended accuracy) | F35, P05, I12 |
| VM-S06-B (EST indicator) | F35, I12 |
| VM-S06-C (RANGE? display) | F42, I12, S03 |
| VM-S07 (reacquisition) | F13, F22, P07 |
| VM-K01 (angular velocity) | F20, F26, F27, P12 |
| VM-K02 (frame rate) | P02, P03 |
| VM-N03 (bore-sight) | F50, F51, F52, F53, F54, F55, P08, P09 |
| VM-N06 (stale indicator) | F60, S04 |
| VM-M05 (thermal throttle) | P03 |
| VM-O06 (detection range) | §4.5 envelope conditioning |
| SF5 (lead computation) | F30–F35, §4 ballistic model |
| SF5-A5 (monocular range) | F10, F11, F12 |
| FMEA F08 (cascading error) | F40, F41, F61, S01, S02 |
| [SG3] Issue 1 (power) | P11 (CPU budget) |
| [SG3] Issue 3 (lead accuracy) | F35, P04, P05, §4.5, S01 |
| IEC 61508-3 §7.4.5 | S01, S03, S05 |
| TCVN 13726 §5.2 | P08 (operational readiness) |
| TCVN 7699-2-6:2009 | P09 note (Kalman robustness under vibration) |

### 7.2 Backward (SWR-BAL → Verification)

| Method | Count | IDs |
|--------|-------|-----|
| T (Test) | 42 | F01, F03, F10–F13, F20–F23, F26, F27, F30, F32, F33, F35, F40–F43, F50–F53, F55, F60–F62, F70–F72, P01–P12, I01–I04, I10–I12, S01–S04, S06 |
| I (Inspection) | 10 | F01, F02, F24, F25, F31, F34, F44, F54, F62, S05 |
| D (Demonstration) | 2 | S01 (independent V&V reviews bounds logic), S04 (watchdog integration demo) |
| A (Analysis) | 1 | §4.4 (error budget analysis) |

---

## 8. Risks

| # | Risk | Prob. | Impact | Mitigation | Contingency |
|---|------|-------|--------|------------|-------------|
| R1 | Range estimation ±30% → lead error >1.0 mrad at 200 m | HIGH | HIGH — VM-S06 fail at max range | [SG3] conditions accuracy to envelope: ≤1.0 mrad at ≤150 m. EST indicator at extended range. | Accept ≤2.0 mrad at 200 m with EST. Operator trained to use EST advisory. |
| R2 | Misclassification → wrong physical size → wrong range → wrong lead (FMEA F08) | MEDIUM | HIGH — cascading error, moderate errors (+/−30%) undetectable | BAL-BOUNDS catches extreme errors. Class-specific physical size table reduces expected misclass impact. | Display EST when confidence <0.90 (map from ai_output_t.gate_state). |
| R3 | Kalman filter divergence during rapid maneuver (>30 deg/s) | LOW | MEDIUM — lost track | Innovation gate (F23) rejects outliers. Process noise allows rapid convergence (F24). | Fall back to raw AI angular velocity measurement. |
| R4 | Bore-sight drift over temperature (−10 to +55°C) | MEDIUM | MEDIUM — systematic accuracy degradation | Factory calibration at 23°C. P09 validates at 3 temperatures. | If drift >0.5 mrad: add temperature-compensated calibration table in v1.1. |
| R5 | LUT interpolation introduces error at grid boundaries | LOW | LOW | 4×7 grid with bilinear interpolation. F32 requires ≤0.05 mrad error vs analytical. | Increase grid density to 8×14 (still compact). |
| R6 | V-R vehicle stabilization requires entirely different tracking architecture | HIGH | HIGH — major rework | V-R explicitly flagged as "Major adaptation" in variant matrix. Not in v1.0 scope. | Defer to V-R-specific SRS when vehicle-mount contract secured. |

---

## 9. Acceptance Criteria (Gate to SW-Phase 2: SAD)

- [ ] **All 7 modules specified:** BAL-SIZE, BAL-RANGE, BAL-TRACK, BAL-LEAD, BAL-BOUNDS, BAL-CALIB, BAL-HEALTH + output interface
- [ ] **Ballistic model complete:** 7.62×39mm M43 TOF table, lead LUT (4×7), interpolation method, error budget
- [ ] **Kalman filter specified:** State vector, process noise, measurement noise, innovation gate, convergence criteria
- [ ] **Bounds logic complete:** All thresholds defined (MAX_LEAD, JUMP_LIMIT, range bounds), all fault paths traced
- [ ] **Operating envelope documented:** Per [SG3] Issue 3 — primary (≤150 m / ≤10 deg/s) and extended (≤200 m / ≤20 deg/s) envelopes with accuracy specs
- [ ] **Interface contracts:** `ai_output_t` input verified, `bal_output_t` output defined, overlay message placement specified
- [ ] **Calibration algorithm:** Factory fixed offset selected (v1.0), write-protection via USB-only access
- [ ] **Safety requirements:** All 6 SWR-BAL-Sxx reviewed — independent V&V for S01, S03, S04
- [ ] **Variant plan:** All 8 variants mapped, ammunition LUT priority defined
- [ ] **QC Gate:** Defense AI QC Gate run, all checks PASS or FLAG-with-plan

---

*Software Requirements Specification — V-SMASH-SW-BAL*
*SW-Phase 1 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-BAL_Product_Proposal_v1.0|SW-Phase 0 Product Proposal]]*
*Standards: [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0|TCVN Matrix §2.3]]*
*Environment: [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12|SW Operating Envelope]]*
*Reconciliation: [[V-SMASH_SG3_Requirements_Reconciliation_v1.0|SG-3 Issue 3]]*
