---
project: V-SMASH-SW-AI
type: software-requirements-specification
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 9 PASS, 3 FLAG, 0 FAIL — FLAG-06 resolved with F64 calibration, FLAG-10 resolved with R8 license risk + Model Card license field, FLAG-12 V-NV/V-P TBD acceptable for baseline — 2026-02-24)
parent_family: V-SMASH
sw_phase: 1 (Formal Specification)
safety_class: C (highest — AI classification directly gates engagement indicators)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
source: V-SMASH-SW-AI_Product_Proposal_v1.0.md (SW-Phase 0)
standards: See [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0]] §2.2
environment: See [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]] SW-AI column
reconciliation: See [[V-SMASH_SG3_Requirements_Reconciliation_v1.0]] Issues 1+2
---

# V-SMASH-SW-AI — Software Requirements Specification

**SW-Phase 1 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This SRS defines the complete, testable requirements for V-SMASH-SW-AI — the AI detection and classification pipeline. SW-AI is **Safety Class C (highest)**: the confidence gate (SWR-AI-S01) directly controls whether an operator sees a lead indicator. A false positive at high confidence could prompt an engagement on a non-threat. A stale detection after AI hang could display outdated aiming data.

**Independent V&V mandatory** per TCVN Compliance Matrix §3: model validator ≠ model trainer. Test dataset separate from training dataset. Hazard analysis by safety engineer.

**Intended audience:** AI/ML engineer (implementer), FW engineer (API dependency), BAL engineer (output consumer), QA engineer (independent V&V), safety engineer (MIL-STD-882E hazard analysis).

### 1.2 Scope

SW-AI runs entirely on the **Jetson Orin Nano** (VM-2101) main SoC. It consumes camera frames from FW-HAL via `fw_sensor_capture()` and produces detection/classification output consumed by SW-BAL and FW-DISP via `fw_display_render()`.

SW-AI does **NOT**:
- Identify friend vs foe (IFF). Classification is object TYPE only (drone-rotor, drone-fixed-wing, bird, unknown).
- Authorize engagement. The operator always decides whether to fire. AI provides detection and classification information only.
- Override the confidence gate. The 70% threshold is architecturally enforced (SWR-AI-S04).

### 1.3 Definitions

| Term | Definition |
|------|-----------|
| Pd | Probability of detection — fraction of true targets correctly detected |
| FPR | False positive rate — fraction of non-target presentations classified as target |
| FNR | False negative rate — fraction of true targets missed (= 1 − Pd) |
| Confidence | Softmax probability output from classification head (0.0–1.0) |
| GATE | Confidence threshold below which lead indicator is suppressed (≥0.70) |
| Wilson CI | Wilson score confidence interval — robust for small-sample proportions |
| Model Card | Standardized ML model documentation (architecture, data, performance, limitations) |
| TensorRT | NVIDIA inference optimization framework (INT8 quantization) |
| Letterbox | Resize preserving aspect ratio with padding (1920×1080 → 640×360 active + 140px pad each side) |

### 1.4 References

| ID | Document | Relevance |
|----|----------|-----------|
| [PP] | V-SMASH-SW-AI_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [B1] | V-SMASH-M_B1_YCKT_v1.0 | VM-O06/O07/O08/O09, VM-K01/K02, VM-S01/S02/S04, VM-Y03/Y04/Y06 |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0 | §2 AI Training Data, §12 SW Operating Envelope |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0 | §2.2 SW-AI standards |
| [SG3] | V-SMASH_SG3_Requirements_Reconciliation_v1.0 | Issues 1+2: power budget, detection range conditioning |
| [FW-SAD] | V-SMASH-SW-FW_SAD_v1.0 §7 | FW-API contracts consumed by SW-AI |
| [FMEA] | V-SMASH-M_FMEA_v1.0 | F06 (misclassification), F07 (missed detection), F08 (cascading error), F09 (adversarial) |
| [REQ] | V-SMASH-M_Requirements_List_v1.0 | VM-S08 (FOV 8–15°), VM-S09 (f-number ≤f/2.0) |

### 1.5 Operating Environment

Per [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]]:
- AI inference at ambient −10°C to +55°C. Cold start: model load may take 1–2 s longer at −10°C (eMMC read speed degrades).
- Thermal throttle: FW reduces AI frame rate via `fw_get_thermal_state()` — 30→15→10→5 fps.
- High humidity (100% RH): condensation on CMOS lens → SENSOR_FAULT (FW-HAL handles). AI receives no valid frames during condensation event.
- Vibration: frame blur during transport — AI should not process frames during transport mode (FW-FSM not in READY/DETECTED).

---

## 2. System Context

```
┌──────────────────────────────────────────────────────────────┐
│                  JETSON ORIN NANO (main SoC)                  │
│                                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                      SW-AI PIPELINE                      │  │
│  │                                                          │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐ │  │
│  │  │ AI-CAP   │→ │ AI-DET   │→ │ AI-CLS   │→ │AI-GATE │ │  │
│  │  │ Capture  │  │ YOLOv8   │  │ 4-class  │  │≥70%    │ │  │
│  │  │ + Resize │  │ INT8     │  │ softmax  │  │3-frame │ │  │
│  │  └────┬─────┘  └──────────┘  └──────────┘  └───┬────┘ │  │
│  │       │                                         │       │  │
│  └───────┼─────────────────────────────────────────┼───────┘  │
│          │                                         │           │
│    fw_sensor_capture()                       ai_output_t      │
│    (from FW-HAL)                                  │           │
│                                          ┌────────┴────────┐  │
│                                          ▼                 ▼  │
│                                     ┌─────────┐    ┌────────┐│
│                                     │ SW-BAL  │    │FW-DISP ││
│                                     │(consume)│    │(render)││
│                                     └─────────┘    └────────┘│
│                                                                │
│  Watchdog: fw_register_watchdog(MODULE_AI, 500)               │
│  Thermal:  fw_get_thermal_state() → adjust frame rate         │
│  Fault:    fw_report_fault(FAULT_AI) on pipeline failure      │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Specific Requirements

### 3.1 Functional Requirements — AI-CAP (Image Capture & Preprocessing)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F01 | AI-CAP shall capture frames from the CMOS sensor (VM-1200, 1920×1080) via `fw_sensor_capture()` at the rate specified by the current thermal state. | VM-S01, FW-SAD §7.2 | MUST | T: measure frame rate at each thermal state |
| SWR-AI-F02 | AI-CAP shall preprocess each frame: letterbox resize from 1920×1080 to 640×640 (640×360 active pixels + 140px top/bottom padding), normalize pixel values to [0.0, 1.0] float32, convert to NCHW tensor format. | YOLOv8 requirement | MUST | T: inspect preprocessed tensor dimensions and value range |
| SWR-AI-F03 | AI-CAP shall timestamp each preprocessed frame using the `frame_buffer_t.timestamp_us` from FW-HAL. This timestamp propagates through the entire pipeline to `ai_output_t.capture_timestamp_us`. | Latency measurement | MUST | T: verify timestamp propagation end-to-end |
| SWR-AI-F04 | AI-CAP shall skip frames (drop, not queue) if the pipeline is still processing the previous frame. No frame queuing — latest frame only. | Real-time constraint | MUST | T: inject slow inference, verify no frame accumulation |
| SWR-AI-F05 | AI-CAP shall not process frames when `fw_get_fsm_state()` returns INIT, SHUTDOWN, or OVERHEAT. In these states, AI-CAP idles and produces no output. | Safety | MUST | T: verify no inference during prohibited states |

### 3.2 Functional Requirements — AI-DET (Object Detection)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F10 | AI-DET shall run YOLOv8-nano inference on the preprocessed 640×640 tensor using TensorRT INT8 quantized engine on the Jetson Orin Nano GPU. | [PP] §4 | MUST | T: verify TensorRT engine loaded, INT8 confirmed |
| SWR-AI-F11 | AI-DET shall output per-detection: bounding box (x_center, y_center, width, height in pixels at 640×640 input), class label, confidence score, and detection ID for tracking. | YOLOv8 output format | MUST | T: inspect detection output struct |
| SWR-AI-F12 | AI-DET shall support multi-object detection: up to 10 simultaneous detections per frame. Detections beyond 10 shall be discarded (lowest confidence first). | Design | MUST | T: present >10 targets, verify top-10 by confidence retained |
| SWR-AI-F13 | AI-DET shall apply non-maximum suppression (NMS) with IoU threshold ≥0.45 to eliminate duplicate detections of the same object. | YOLOv8 standard | MUST | T: present overlapping targets, verify single detection per object |
| SWR-AI-F14 | AI-DET shall convert bounding box pixel coordinates back from 640×640 model space to 1920×1080 sensor space for angular measurement. Letterbox padding offset shall be accounted for. | Coordinate accuracy | MUST | T: verify coordinate mapping with known target position |
| SWR-AI-F15 | AI-DET shall compute angular size of each detection: `angular_size_mrad = (bbox_width_px / sensor_width_px) * HFOV_mrad`. HFOV is a build-time constant from `hal_config.h`. | SF5, range estimation input | MUST | T: present known-size target, verify angular size ±5% |

### 3.3 Functional Requirements — AI-CLS (Classification)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F20 | AI-CLS shall classify each detection into one of 4 classes: `DRONE_ROTOR` (0), `DRONE_FIXED_WING` (1), `BIRD` (2), `UNKNOWN` (3). | VM-O08 | MUST | I: model output layer inspection |
| SWR-AI-F21 | AI-CLS shall output a confidence score (0.0–1.0) for each detection, derived from the softmax probability of the assigned class. | VM-S04 | MUST | T: verify confidence range on controlled targets |
| SWR-AI-F22 | AI-CLS classification is object TYPE only. It does NOT classify friend vs foe, hostile vs neutral, or engagement authorization. | VM-S04 note, HITL | MUST (SAFETY) | I: design review — no IFF labels in model output |
| SWR-AI-F23 | AI-CLS `UNKNOWN` class shall be assigned when the highest softmax score is below 0.50 (no class dominates). | Design | SHOULD | T: present ambiguous objects, verify UNKNOWN assignment |

### 3.4 Functional Requirements — AI-GATE (Confidence Gating) — SAFETY-CRITICAL

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F30 | AI-GATE shall suppress the lead indicator (set `overlay_t.dot_color = DOT_COLOR_OFF`) for any detection with confidence < 0.70. **This is the primary safety function of SW-AI.** | VM-Y03 (SAFETY-CRITICAL) | MUST | T: controlled confidence sweep 0.50–0.90, verify gate at 0.70 |
| SWR-AI-F31 | AI-GATE shall implement 3-frame temporal persistence: a detection must maintain confidence ≥0.70 for 3 consecutive frames before the lead indicator is enabled. Single-frame high-confidence detections are suppressed. | Design (anti-flicker) | MUST | T: inject single high-confidence frame among low frames, verify no indicator |
| SWR-AI-F32 | AI-GATE shall implement 3-frame temporal decay: once the lead indicator is enabled, it remains for up to 3 frames after confidence drops below 0.70 OR detection is lost, then suppresses. | Design (smooth tracking) | MUST | T: drop confidence mid-track, verify 3-frame decay then suppress |
| SWR-AI-F33 | AI-GATE shall map confidence to 3-tier color: GREEN (≥0.90), YELLOW (0.70–0.89), RED (display suppressed, <0.70). Set `overlay_t.dot_color` accordingly. | VM-S04 | MUST | T: controlled confidence targets at each tier boundary |
| SWR-AI-F34 | The confidence gate threshold (0.70) shall be a build-time constant. It shall NOT be configurable at runtime, via diagnostics, or by any field-accessible interface. | VM-Y03, DW Audit | MUST (SAFETY) | I: code review — threshold is `#define`, not variable. D: field mode audit |
| SWR-AI-F35 | AI-GATE shall produce the `ai_output_t` struct (§4.1) for each gated detection, containing all fields required by SW-BAL for lead computation. | API contract | MUST | T: inspect output struct contents |

### 3.5 Functional Requirements — AI-TRACK (Multi-Object Tracking)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F40 | AI-TRACK shall assign persistent track IDs to detections across frames. Same physical object shall retain the same track_id across consecutive frames. | VM-K01, SF2 | MUST | T: track object across 100 frames, verify ID persistence |
| SWR-AI-F41 | AI-TRACK shall compute angular velocity (deg/s) for each tracked object using bounding box center displacement between frames: `angular_vel = Δangle / Δtime`. | SF5 (BAL input) | MUST | T: drone sled at known speed, verify angular velocity ±10% |
| SWR-AI-F42 | AI-TRACK shall estimate angular velocity using a minimum of 3 frames of tracking history. First 2 frames: angular velocity = 0 (insufficient data). | Design | SHOULD | T: verify angular velocity output starts at frame 3 |
| SWR-AI-F43 | AI-TRACK shall handle track loss: if a tracked object is not detected for >5 consecutive frames, the track ID is retired. A new detection at similar position gets a new track ID. | Design | MUST | T: occlude target for 6 frames, verify new track ID on reappearance |
| SWR-AI-F44 | AI-TRACK shall handle post-shot reacquisition: after a recoil event (signaled by FW-FSM POST_SHOT state), AI-TRACK shall attempt to re-associate the highest-confidence detection within ±5° of the pre-shot track position with the existing track ID. | VM-S07 | MUST | T: simulate recoil displacement, verify reacquisition within ≤200 ms |

### 3.6 Functional Requirements — AI-HEALTH (Pipeline Health & Watchdog)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F50 | AI pipeline shall register with FW watchdog: `fw_register_watchdog(MODULE_AI, 500)` (500 ms timeout). | VM-N06, FW-SAD §7.2 | MUST | T: verify watchdog registration at boot |
| SWR-AI-F51 | AI pipeline shall call `fw_watchdog_heartbeat()` after each successful inference cycle. | VM-N06 | MUST | T: monitor heartbeat timing over 1000 frames |
| SWR-AI-F52 | If AI inference hangs (no heartbeat for >500 ms), FW-WDG shall trigger AI_FAULT → FSM suppresses all AI indicators. SW-AI does not self-detect this — FW-WDG is the monitor. | VM-N06, SWR-FW-F22 | MUST | T: inject inference hang (sleep 600ms), verify AI_FAULT within 100ms of timeout |
| SWR-AI-F53 | AI pipeline shall query `fw_get_thermal_state()` before each inference cycle and adjust target frame rate: NORMAL→30fps, THROTTLE_15→15fps, THROTTLE_10→10fps, THROTTLE_5→5fps. | VM-M05, FW-SAD §4.1 | MUST | T: inject thermal state changes, verify frame rate adjustment |
| SWR-AI-F54 | On AI pipeline initialization failure (model load fail, TensorRT engine fail), AI shall call `fw_report_fault(FAULT_AI)` and halt inference. No partial operation. | Reliability | MUST | T: corrupt model file, verify FAULT_AI reported |
| SWR-AI-F55 | AI pipeline shall log inference statistics to COM-DATA every 60 s: avg_inference_ms, frame_count, detection_count, gate_pass_count, gate_suppress_count. | Diagnostics | SHOULD | T: verify log entries via COM-DIAG |

### 3.7 Functional Requirements — AI-MODEL (Model Management)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-AI-F60 | AI model binary (TensorRT engine) shall be loaded from eMMC partition at boot. Path: `/opt/vsmash/models/vsmash_yolo_v{major}.{minor}.engine`. | Design | MUST | T: verify model load from specified path |
| SWR-AI-F61 | AI model version shall be readable via FW-API (exposed to COM-BLE characteristic C05 and COM-DIAG). Format: `"YOLO-v{major}.{minor}"`. | B4 §5.5 | MUST | T: read model version via BLE and diagnostic |
| SWR-AI-F62 | AI model shall be updateable via COM-UPDATE (depot only, signed). Model is an independent updatable image (SWR-COM-F37c). | VM-N05 | MUST | T: update model via USB-C, verify new version loads |
| SWR-AI-F63 | AI model binary shall be integrity-verified (SHA-256 hash check) at load time. Corrupted model → FAULT_AI. | Reliability | MUST | T: corrupt model file, verify hash check fails → FAULT_AI |
| SWR-AI-F64 | AI model confidence scores SHALL be calibrated (temperature scaling or Platt scaling) such that detections reported at confidence C are empirically correct ≥C fraction of the time (±5%). Calibration verified via reliability diagram on held-out test set. Calibration parameters baked into TensorRT engine at export. | QC Gate FLAG-06, TCVN 13726 §6.2 | MUST | T: reliability diagram on ≥1,000 test detections — expected calibration error (ECE) ≤0.05. D: independent V&V reviews calibration report. |

---

### 3.8 Performance Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-AI-P01 | End-to-end latency (capture → ai_output_t ready) | VM-S02 | ≤80 ms (AI pipeline share of 150 ms total) | T: timestamp difference, 1000 frames, 95th percentile |
| SWR-AI-P02 | Inference latency (model forward pass only) | [PP] §4 | ≤30 ms (YOLOv8-nano INT8 on Orin Nano) | T: TensorRT profiler, 1000 inferences |
| SWR-AI-P03 | Pipeline frame rate (THERMAL_NORMAL) | VM-K02 | ≥30 Hz (≤33.3 ms/frame) | T: high-speed camera, measure frame intervals |
| SWR-AI-P04 | Pipeline frame rate (THERMAL_THROTTLE_15) | VM-M05 | ≥15 Hz | T: inject thermal state, measure frame intervals |
| SWR-AI-P05 | Detection range — daylight, ≥30cm target, 12° FOV | VM-O06, [SG3] Issue 2 | ≥200 m (DESIRED), ≥150 m (MANDATORY) | T: field test, calibrated targets at 150m and 200m, ≥100 passes each |
| SWR-AI-P06 | Detection range — low-light (dusk/dawn) | VM-O07 | ≥100 m [ESTIMATE — validate in SW-5] | T: field test at controlled illumination |
| SWR-AI-P07 | Probability of detection at 150 m (daylight) | VM-O09, [SG3] | Pd ≥90% (Wilson CI 95% lower bound ≥85%) | T: ≥200 presentations at 150m, count detections |
| SWR-AI-P08 | Probability of detection at 200 m (daylight) | VM-O09, [SG3] | Pd ≥80% (Wilson CI 95% lower bound ≥73%) | T: ≥200 presentations at 200m, count detections |
| SWR-AI-P09 | False positive rate at ≥90% confidence | VM-Y04 | FPR ≤2% (Wilson CI 95% upper bound ≤4%) | T: ≥500 non-drone presentations, count false positives |
| SWR-AI-P10 | False negative rate at 150 m | [SG3], MIL-STD-882E | FNR ≤10% (= 1 − Pd ≥90%) | T: same test as P07, complementary metric |
| SWR-AI-P11 | Angular velocity tracking limit | VM-K01 | ≥30 deg/s relative to shooter LOS | T: drone sled at max angular rate |
| SWR-AI-P12 | Post-shot reacquisition time | VM-S07 | ≤200 ms from recoil event to re-tracked detection | T: recoil simulation + high-speed camera |
| SWR-AI-P13 | AI pipeline power draw (Jetson 15W mode) | [SG3] Issue 1 | ≤12.0 W (SoC + inference) | T: power meter at Jetson input during active inference |
| SWR-AI-P14 | AI pipeline power draw (Jetson 7W mode) | [SG3] Issue 1 | ≤5.0 W (SoC + inference at 15fps) | T: power meter during 7W mode inference |
| SWR-AI-P15 | Model load time at boot | VM-H02 | ≤1.5 s (within 3.0 s total boot budget) | T: timestamp from model load start to ready, 10 trials |
| SWR-AI-P16 | Minimum detectable target size at model input | [SG3] Issue 2, VM-O06-A | ≥4 pixels (at 640×640 model input) | T: Pd vs pixel-size characterization curve |

---

### 3.9 Safety Requirements — SAFETY CLASS C

| ID | Requirement | Source | Safety Class | Fallback | Verification |
|----|-------------|--------|-------------|----------|-------------|
| SWR-AI-S01 | Lead indicator SHALL NOT display when ANY detection has confidence <0.70. The gate is ALWAYS active — no bypass, no override, no degraded mode that skips the gate. | VM-Y03 | SAFETY-CRITICAL | If gate mechanism fails → FAULT_AI (no indicator). | T: 1000-frame confidence sweep. I: code review (no bypass path). |
| SWR-AI-S02 | FPR SHALL NOT exceed 2% at ≥90% confidence threshold. Measured on a validation dataset of ≥500 non-drone presentations with Wilson CI 95% upper bound ≤4%. | VM-Y04 | SAFETY-CRITICAL | If FPR exceeds 2% on validation → model BLOCKED from deployment. | T: ≥500 non-drone presentations with statistical analysis. |
| SWR-AI-S03 | No stale detection output after AI pipeline hang (>500 ms). FW-WDG monitors heartbeat; on timeout, FSM suppresses ALL AI indicators within ≤100 ms. | VM-N06 | SAFETY-CRITICAL | FW-WDG is independent monitor (not self-monitored). | T: inject AI hang, verify indicator suppression ≤600 ms from last valid frame. |
| SWR-AI-S04 | Confidence gate threshold (0.70) SHALL NOT be field-overridable. Not exposed via BLE, USB-C diagnostic, runtime config, or any operator interface. | VM-Y03, DW Audit | SAFETY-CRITICAL | Build-time constant only. | I: code review + D: field mode audit — no path to modify threshold. |
| SWR-AI-S05 | MIL-STD-882E hazard analysis SHALL be completed for the AI classification function before deployment. Scope: Severity II (critical — could lead to engagement on non-threat), Probability D (remote — with confidence gate). | VM-Y06 | SAFETY-MANDATORY | Hazard analysis is a deliverable, not a runtime function. | D: independent safety review of completed hazard analysis. |
| SWR-AI-S06 | AI classification SHALL NOT output engagement authorization, threat level, hostile/friendly classification, or any ROE-adjacent determination. Output is object TYPE and confidence ONLY. | HITL, ROE | SAFETY-CRITICAL | By design — model architecture has no ROE labels. | I: model architecture review. T: verify output struct has no ROE fields. |
| SWR-AI-S07 | Both FPR (false positive rate) AND FNR (false negative rate) SHALL be measured and reported in the Model Card. A single "accuracy %" metric is not acceptable. | MIL-STD-882E, TCVN 13726 §6.2 | SAFETY-MANDATORY | Validation report rejected if only accuracy % provided. | D: Model Card review by independent V&V. |

---

### 3.10 Interface Requirements

#### 3.10.1 FW-API Functions Consumed by SW-AI

| API Function | Usage | Reference |
|-------------|-------|-----------|
| `fw_sensor_capture(frame_buffer_t *buf)` | Capture camera frame for AI preprocessing | FW SAD §7.2 |
| `fw_display_render(const overlay_t *ovl)` | Submit lead indicator + confidence color to display | FW SAD §7.2 |
| `fw_report_fault(FAULT_AI)` | Report AI pipeline failure to FSM | FW SAD §7.2 |
| `fw_get_thermal_state()` | Query thermal state to adjust inference rate | FW SAD §7.2 |
| `fw_get_fsm_state()` | Check FSM state before processing (skip in INIT/SHUTDOWN/OVERHEAT) | FW SAD §7.2 |
| `fw_register_watchdog(MODULE_AI, 500)` | Register AI watchdog at boot | FW SAD §7.2 |
| `fw_watchdog_heartbeat(handle)` | Reset watchdog after each inference cycle | FW SAD §7.2 |

#### 3.10.2 AI Output Interface — Provided to SW-BAL

SW-AI produces an `ai_output_t` struct per gated detection, consumed by SW-BAL for lead computation:

```c
/* ai_output.h — SW-AI → SW-BAL interface contract */

#include <stdint.h>

typedef enum {
    AI_CLASS_DRONE_ROTOR      = 0,
    AI_CLASS_DRONE_FIXED_WING = 1,
    AI_CLASS_BIRD             = 2,
    AI_CLASS_UNKNOWN          = 3,
} ai_class_t;

typedef struct {
    /* Detection identity */
    uint32_t  track_id;            /* Persistent track ID across frames */
    ai_class_t target_class;       /* Classification result */
    float     confidence;          /* Softmax confidence (0.0–1.0) */

    /* Spatial (in sensor coordinates: 1920×1080) */
    float     bbox_cx;             /* Bounding box center X (pixels) */
    float     bbox_cy;             /* Bounding box center Y (pixels) */
    float     bbox_w;              /* Bounding box width (pixels) */
    float     bbox_h;              /* Bounding box height (pixels) */
    float     angular_size_mrad;   /* Angular extent of target (mrad) */

    /* Dynamics (from AI-TRACK) */
    float     angular_vel_dps;     /* Angular velocity (deg/s), 0 if <3 frames */
    float     angular_vel_dir_deg; /* Direction of motion (0–360°, 0=right) */

    /* Metadata */
    uint64_t  capture_timestamp_us;/* Original frame capture time (monotonic µs) */
    uint8_t   gate_state;          /* 0=SUPPRESSED, 1=YELLOW (0.70–0.89), 2=GREEN (≥0.90) */
    uint8_t   track_age_frames;    /* Frames since track started (saturates at 255) */
    uint8_t   reacquired;          /* 1 if this is a post-shot reacquisition */
    uint8_t   reserved;            /* Pad to 4-byte alignment */
} ai_output_t;

/* Per-frame output: array of gated detections */
typedef struct {
    ai_output_t detections[10];    /* Max 10 per frame */
    uint8_t     count;             /* Number of valid entries (0–10) */
    uint8_t     thermal_state;     /* Current thermal state at inference time */
    uint16_t    inference_ms;      /* Inference time this frame (ms) */
    uint32_t    frame_seq;         /* Frame sequence number from FW-HAL */
} ai_frame_output_t;
```

#### 3.10.3 Overlay Generation

SW-AI is responsible for generating the `overlay_t` struct submitted to `fw_display_render()`:
- **If ≥1 gated detection (gate_state > 0):** Select highest-confidence detection. Set `dot_x`, `dot_y` to BAL-computed lead position (received back from SW-BAL). Set `dot_color` per confidence tier.
- **If 0 gated detections:** Set `dot_color = DOT_COLOR_OFF`. Clear dot position.
- **Messages:** Populated based on FSM state (delegated to FW-FSM via `fw_report_fault()`, not SW-AI).

**Note:** The actual lead dot position comes from SW-BAL, not SW-AI. SW-AI provides the detection; SW-BAL computes the lead; SW-AI (or a coordinator) merges BAL output into the overlay and calls `fw_display_render()`. The coordinator role is an architectural decision for SAD (SW-Phase 2).

---

## 4. AI Pipeline Specification

### 4.1 Pipeline Stages and Timing Budget

| Stage | Module | Budget | Input | Output |
|-------|--------|--------|-------|--------|
| 1. Capture | AI-CAP | ≤5 ms | MIPI CSI-2 DMA (via FW-HAL) | `frame_buffer_t` (1920×1080) |
| 2. Preprocess | AI-CAP | ≤5 ms | Raw frame | 640×640 float32 tensor (NCHW) |
| 3. Inference | AI-DET + AI-CLS | ≤30 ms | Tensor | Bounding boxes + classes + confidences |
| 4. Postprocess | AI-DET | ≤3 ms | Raw detections | NMS, coordinate remap, angular size |
| 5. Tracking | AI-TRACK | ≤2 ms | Detections | Track IDs, angular velocities |
| 6. Gating | AI-GATE | ≤1 ms | Tracked detections | Gated `ai_output_t` array |
| **Total AI** | | **≤46 ms** | | |
| 7. BAL (lead) | SW-BAL | ≤20 ms | `ai_output_t` | Lead angle |
| 8. Render | FW-DISP | ≤16.7 ms | `overlay_t` | OLED update |
| **Total system** | | **≤83 ms** | | **Within 150 ms budget (VM-S02)** |

### 4.2 Pixel-to-Angle Conversion

At build-time, the following constants are derived from VM-S08 (FOV) and VM-1200 (sensor resolution):

```c
/* For 12° HFOV nominal, 1920×1080 sensor: */
#define HFOV_DEG        12.0f
#define HFOV_MRAD       (HFOV_DEG * 17.4533f)  /* 209.4 mrad */
#define SENSOR_WIDTH_PX  1920
#define SENSOR_HEIGHT_PX 1080
#define MRAD_PER_PX     (HFOV_MRAD / SENSOR_WIDTH_PX)  /* 0.109 mrad/px */
#define MODEL_INPUT_W    640
#define MODEL_INPUT_H    640
#define LETTERBOX_SCALE  (MODEL_INPUT_W / (float)SENSOR_WIDTH_PX)  /* 0.333 */
```

Target detection feasibility at 12° HFOV (reference from [SG3] Issue 2):

| Range (m) | 30cm target (px on sensor) | px at model input | Expected Pd |
|-----------|---------------------------|-------------------|-------------|
| 100 | 27.5 | 9.2 | ≥95% |
| 150 | 18.3 | 6.1 | ≥90% |
| 200 | 13.8 | 4.6 | ≥80% |
| 250 | 11.0 | 3.7 | <70% (below min) |

---

## 5. Model Card (Formal — V1.0)

| Field | Value |
|-------|-------|
| **Model name** | V-SMASH-YOLO-v1.0 |
| **Base architecture** | YOLOv8-nano (Ultralytics) |
| **Quantization** | INT8 (TensorRT, Jetson Orin Nano) |
| **Input** | 640×640×3, float32, NCHW, letterbox from 1920×1080 |
| **Output** | Bounding boxes + 4-class labels + confidence per detection |
| **Classes** | 0: drone-rotor, 1: drone-fixed-wing, 2: bird, 3: unknown |
| **Target platform** | NVIDIA Jetson Orin Nano 8 GB (JetPack 6.x) |
| **Training framework** | PyTorch → ONNX → TensorRT engine |
| **Training dataset** | V-SMASH Training Dataset v1.0 (≥16,000 labeled images) |
| **Validation split** | 80% train / 10% val / 10% test (test set held out, never used in training) |
| **Primary metrics** | Pd ≥90% @150m, Pd ≥80% @200m, FPR ≤2% @≥90% confidence |
| **Secondary metrics** | mAP@0.5, per-class precision/recall, confusion matrix |
| **Known limitations** | Low-light: range degrades to ~100m. Targets <4px at model input: Pd <50%. Cluttered backgrounds: FPR may increase. Strong backlight: silhouette-only detection, classification unreliable. |
| **Ethical scope** | Object TYPE classification ONLY. No IFF. No engagement authorization. HITL mandatory. |
| **Update cadence** | Per training dataset version. Depot-only deployment via COM-UPDATE. |
| **Safety classification** | Class C — independent V&V mandatory (TCVN Compliance Matrix §3) |
| **Confidence calibration** | Temperature-scaled softmax. ECE ≤0.05 on held-out test set (SWR-AI-F64). |
| **License** | YOLOv8-nano: Ultralytics AGPL-3.0. **Commercial license required for defense embedded deployment** — AGPL source-distribution obligation incompatible with depot firmware update model. Ultralytics Enterprise license recommended. TensorRT: NVIDIA proprietary (platform-locked). |

---

## 6. Training Data Specification

### 6.1 Dataset Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-AI-T01 | Minimum dataset size | Best practice, [ORCH] §2 | ≥16,000 labeled images | I: dataset manifest count |
| SWR-AI-T02 | Class coverage | VM-O08 | All 4 classes + negative (no target) examples. Negative ≥20% of dataset. | I: class distribution report |
| SWR-AI-T03 | Environmental diversity | VM-O06/O07, [ORCH] §12 | Daylight (clear, cloudy, haze), dusk/dawn, cluttered BG (trees, buildings), open sky | I: metadata tag audit |
| SWR-AI-T04 | Range diversity | VM-O06, [SG3] | Targets at 50, 100, 150, 200 m. ≥100 images per range per class. | I: range distribution report |
| SWR-AI-T05 | Vietnam-specific content | Local context | Vietnamese landscape, local bird species (egret, starling, kite), local commercial drones (DJI Mavic, FPV racing) | I: metadata review |
| SWR-AI-T06 | Dataset version control | [ORCH] §2 | Versioned alongside model. Each model version references exact dataset version hash. | I: version manifest review |
| SWR-AI-T07 | Test set isolation | Safety Class C V&V | Test set (10%) SHALL NOT be used in training or hyperparameter tuning. Sealed by independent V&V. | D: independent V&V confirms test set seal |
| SWR-AI-T08 | Labeling standard | Best practice | Bounding box labels: <5px center error, <10% size error. Inter-annotator agreement ≥90% (Cohen's kappa ≥0.85). | A: labeling quality audit |

### 6.2 Dataset Composition Target

| Class | Target Count | % of Dataset | Range Distribution | Notes |
|-------|-------------|-------------|-------------------|-------|
| drone-rotor | ≥4,000 | ~25% | 50/100/150/200 m uniform | DJI Mavic, FPV, generic quads |
| drone-fixed-wing | ≥2,000 | ~12% | 50/100/150/200 m uniform | Surveillance fixed-wing UAS |
| bird | ≥3,000 | ~19% | Various (50–300 m) | Local species: egret, kite, starling, pigeon |
| unknown | ≥1,000 | ~6% | Various | Debris, kites, balloons, distant aircraft |
| **negative** (no target) | **≥4,000** | **~25%** | N/A | Sky, clouds, clutter, buildings, foliage |
| **mixed** (multi-target frames) | ≥2,000 | ~12% | Various | Drone + bird, 2 drones, bird flock |
| **Total** | **≥16,000** | 100% | | |

---

## 7. Validation Methodology

### 7.1 Statistical Framework

All detection/classification metrics SHALL use the **Wilson score interval** for confidence bounds (robust for small proportions near 0 or 1, unlike Wald interval).

Wilson CI formula:
```
p̂ = successes / n
z = 1.96 (for 95% CI)
lower = (p̂ + z²/2n - z√(p̂(1-p̂)/n + z²/4n²)) / (1 + z²/n)
upper = (p̂ + z²/2n + z√(p̂(1-p̂)/n + z²/4n²)) / (1 + z²/n)
```

### 7.2 Minimum Sample Sizes

| Metric | Target | Max Acceptable | Required Samples | Rationale |
|--------|--------|---------------|-----------------|-----------|
| Pd @150m | ≥90% | Wilson 95% LB ≥85% | ≥200 presentations | n=200: if 180/200 detected, Wilson 95% LB = 85.3% |
| Pd @200m | ≥80% | Wilson 95% LB ≥73% | ≥200 presentations | n=200: if 160/200 detected, Wilson 95% LB = 74.0% |
| FPR @≥90% conf | ≤2% | Wilson 95% UB ≤4% | ≥500 non-drone presentations | n=500: if 10/500 FP, Wilson 95% UB = 3.6% |
| FNR @150m | ≤10% | Wilson 95% UB ≤15% | ≥200 presentations | Complement of Pd test |

### 7.3 Test Conditions

| Condition | Specification | Rationale |
|-----------|-------------|-----------|
| Daylight | Sun elevation >15°, clear or partly cloudy | Primary operating condition |
| Dusk/dawn | Sun elevation −6° to +5° (civil twilight) | SWR-AI-P06 low-light test |
| Background | Mix of open sky (50%), cluttered (trees/buildings, 30%), mixed (20%) | FPR increases with clutter |
| Target presentation | Drone sled (V-SMASH-SLED) at calibrated range and speed | Controlled, repeatable |
| Non-target presentation | Birds, kites, debris, empty sky, moving foliage | FPR test stimuli |

---

## 8. Variant Configuration Matrix

| Module | V-M | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|-----|-----|-----|-----|-----|------|-----|-----|
| AI-CAP | 1920×1080, 30fps | = | = | = | = | **Dual: visible + thermal** | Larger sensor TBD | = + vehicle stabilization |
| AI-DET | YOLOv8-nano INT8 | = | = | = | = | **Dual-input model** | Re-trained for different FOV | = |
| AI-CLS | 4-class | = | = | = | = | 4-class + thermal signature | = | = |
| AI-GATE | 70%, 3-frame | = | 70% → ALERT only (no lead) | = | = | = | = | = |
| AI-TRACK | Kalman-based | = | Detection tracking only (no BAL feed) | = | + data export per frame | + thermal-enhanced tracking | = | + vehicle motion compensation |
| Model weights | **Baseline** | = | = | May need export re-validation | = | **New dual-input model** | **Re-trained for FOV** | **Re-trained for motion** |
| AI-TRAIN | Standard | = | = | = | + training data capture API | Standard | Standard | Standard |

**Reuse factor:** 5/8 direct (V-M, V-L, V-D, V-X, V-T). 3/8 require model adaptation (V-NV, V-P, V-R).

**Build-time configuration:** `#define VARIANT_xxx` selects:
- `AI_GATE_OUTPUT_MODE`: `LEAD` (default) or `ALERT_ONLY` (V-D)
- `AI_CAP_DUAL_SENSOR`: 0 (default) or 1 (V-NV)
- `AI_TRACK_DATA_EXPORT`: 0 (default) or 1 (V-T)
- `AI_HFOV_DEG`: 12.0 (default) or variant-specific

---

## 9. Traceability Matrix

### 9.1 Forward (Source → SWR-AI)

| Source | SWR-AI Coverage |
|--------|-----------------|
| VM-S01 (sensor resolution) | F01, F02, P16 |
| VM-S02 (end-to-end latency) | P01, §4.1 timing budget |
| VM-S04 (confidence indicator) | F21, F33, S01 |
| VM-S07 (reacquisition) | F44, P12 |
| VM-O06 (detection range) | P05, P08, P16 |
| VM-O07 (low-light) | P06 |
| VM-O08 (classification) | F20, F22, F23 |
| VM-O09 (Pd) | P07, P08 |
| VM-K01 (angular velocity) | F41, P11 |
| VM-K02 (frame rate) | F01, P03 |
| VM-Y03 (confidence gate) | F30, F31, F34, S01, S04 |
| VM-Y04 (FPR) | P09, S02, S07 |
| VM-Y06 (hazard analysis) | S05 |
| VM-N06 (stale indicator) | F50, F51, F52, S03 |
| VM-M05 (thermal throttle) | F53, P04 |
| VM-H02 (boot time) | P15 |
| FMEA F06 (misclassification) | S02, P09 |
| FMEA F07 (missed detection) | P07, P10, T01–T08 |
| FMEA F08 (cascading error) | F35, §4.1 (BAL input format) |
| FMEA F09 (adversarial) | S06 (no ROE output) |
| [SG3] Issue 1 (power) | P13, P14 |
| [SG3] Issue 2 (range/pixels) | P05, P08, P16, §4.2 |
| MIL-STD-882E | S05, S07 |
| TCVN 13726 §5.4/§6.2 | S01, S02, S04, S07, F64 |
| QC Gate FLAG-06 (calibration) | F64 |

### 9.2 Backward (SWR-AI → Verification)

| Method | Count | IDs |
|--------|-------|-----|
| T (Test) | 39 | F01–F05, F10–F15, F20–F21, F23, F30–F35, F40–F44, F50–F55, F60–F64, P01–P16, S01, S03 |
| I (Inspection) | 8 | F02, F20, F22, F34, S04, S06, T01–T03, T05, T06 |
| D (Demonstration) | 5 | F34 (field audit), F64 (calibration V&V), S05 (safety review), S07 (model card), T07 (test set seal) |
| A (Analysis) | 3 | T04 (range distribution), T08 (labeling quality), §7.2 (Wilson CI) |

---

## 10. Risks

| # | Risk | Prob. | Impact | Mitigation | Contingency |
|---|------|-------|--------|------------|-------------|
| R1 | FPR >2% on real-world data vs training data | HIGH | CRITICAL — VM-Y04 fail | Diverse training data. Field validation before production. FPR measured on held-out test set. | Block deployment until FPR within spec. Collect more diverse negative examples. |
| R2 | Training data insufficient (Vietnam-specific) | HIGH | HIGH — model bias | Partner with military units for field data. Synthetic augmentation. V-SMASH-SLED for controlled collection. | Staged deployment: lab-validated model first, field-validated model after data collection. |
| R3 | Pd <90% at 150m for small drones (<30cm) | MEDIUM | HIGH — VM-O09 fail at mandatory range | FOV ≤12° provides ≥6.1px at model input. Optimize detection head for small objects. | Accept ≥80% Pd at 150m with operational advisory. |
| R4 | TensorRT INT8 quantization degrades accuracy | MEDIUM | MEDIUM — quantization error | Calibrate quantization with representative dataset. Compare INT8 vs FP16 accuracy. | Fall back to FP16 (slower but more accurate) if INT8 degradation >2% mAP. |
| R5 | AI model >30ms inference on Jetson Orin Nano | LOW | MEDIUM — timing budget | INT8 + TensorRT. YOLOv8-nano is smallest architecture. | Accept 20fps pipeline rate (still within VM-K02 spirit). |
| R6 | Adversarial attack: modified drone evades detection | LOW | HIGH — FMEA F09 | Not in scope for v1.0. HITL (operator also observes through optic). | Operator visual backup. Flag for v2.0 robustness testing. |
| R7 | Model drift: accuracy degrades over time with new drone types | MEDIUM | MEDIUM | Depot re-training with updated dataset. Model versioning via COM-UPDATE. | Maintain baseline model as fallback. |
| R8 | YOLOv8-nano AGPL-3.0 license incompatible with defense embedded deployment (source-distribution obligation) | HIGH | HIGH — legal block on production | Procure Ultralytics Enterprise license before SW-3a training pipeline. Budget in BOM. | Evaluate alternative YOLO-family architectures with permissive license (YOLOv5-nano MIT, RT-DETR Apache-2.0). |

---

## 11. Acceptance Criteria (Gate to SW-Phase 2: SAD)

- [ ] **Pipeline requirements complete:** All 7 modules (CAP, DET, CLS, GATE, TRACK, HEALTH, MODEL) formally specified
- [ ] **Safety requirements:** All 7 SWR-AI-S01→S07 reviewed by safety engineer
- [ ] **AI output struct:** `ai_output_t` agreed with SW-BAL (input format confirmed)
- [ ] **Model Card:** Formal v1.0 with all fields populated
- [ ] **Training Data Spec:** Dataset composition, labeling standard, version control
- [ ] **Validation Methodology:** Wilson CI framework, sample sizes, test conditions
- [ ] **Performance specs conditioned:** Per [SG3] — Pd @150m/200m, power @7W/15W mode
- [ ] **FW-API dependency:** All consumed functions listed with FW SAD reference
- [ ] **Variant coverage:** All 8 variants mapped — V-NV dual-input, V-D alert-only, V-T data export
- [ ] **Standards:** References TCVN Compliance Matrix §2.2 and SW Operating Envelope §12
- [ ] **QC Gate:** Defense AI QC Gate run, all checks PASS or FLAG-with-plan

---

*Software Requirements Specification — V-SMASH-SW-AI*
*SW-Phase 1 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-AI_Product_Proposal_v1.0|SW-Phase 0 Product Proposal]]*
*Standards: [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0|TCVN Matrix §2.2]]*
*Environment: [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12|SW Operating Envelope]]*
*Reconciliation: [[V-SMASH_SG3_Requirements_Reconciliation_v1.0|SG-3 Issues 1+2]]*
