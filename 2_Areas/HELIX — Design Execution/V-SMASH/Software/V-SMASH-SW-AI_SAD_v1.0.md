---
project: V-SMASH-SW-AI
type: software-architecture-document
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 9 PASS, 3 FLAG, 0 FAIL — FLAG-07a fixed (NO LEAD message), FLAG-07b fixed (NaN escalation threshold), FLAG-09a fixed (power mode table), FLAG-12a fixed (Kalman tuning §8.6), FLAG-12b fixed (Hungarian spec) — 2026-03-02)
parent_family: V-SMASH
sw_phase: 2 (Architecture)
safety_class: C (highest — AI classification directly gates engagement indicators)
source: V-SMASH-SW-AI_SRS_v1.0.md (SW-Phase 1)
resolves_flags: [SRS-FLAG-06, SRS-FLAG-10, SRS-FLAG-12]
decisions: [COORD-1 AI-owns-overlay, TRACK-1 IoU-tracker, MODEL-1 lazy-warmup, QUANT-1 PTQ-INT8, CALIB-1 temperature-scaling]
---

# V-SMASH-SW-AI — Software Architecture Document

**SW-Phase 2 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This Software Architecture Document (SAD) defines the internal structure, thread model, pipeline architecture, model management strategy, and tracker design for V-SMASH-SW-AI. It translates the 64 requirements from the SRS (SW-Phase 1) into an implementable architecture and resolves the 3 QC Gate FLAGs carried forward from SW-Phase 1.

**Key decisions made in this document:**
- Coordinator role (COORD-1): SW-AI owns overlay assembly — receives BAL output, merges, calls `fw_display_render()`
- Tracker design (TRACK-1): Simple IoU-based tracker with Kalman filter prediction for v1.0
- Model loading (MODEL-1): Synchronous load at boot with GPU warm-up (2 dummy inferences)
- Quantization (QUANT-1): Post-training quantization (PTQ) INT8 via TensorRT calibration dataset
- Confidence calibration (CALIB-1): Temperature scaling baked into TensorRT engine at export

**Intended audience:** AI/ML engineer (implementer), FW engineer (API dependency), BAL engineer (output consumer), QA engineer (V&V), safety engineer (Class C audit).

### 1.2 References

| ID | Document | Relevance |
|----|----------|-----------|
| [SRS] | V-SMASH-SW-AI_SRS_v1.0.md | Requirements baseline (64 requirements) |
| [PP] | V-SMASH-SW-AI_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [FW-SAD] | V-SMASH-SW-FW_SAD_v1.0.md | Thread model, FW-API contracts, FSM, HAL |
| [BAL-SRS] | V-SMASH-SW-BAL_SRS_v1.0.md | `bal_output_t` struct, BAL API contract |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0.md | Variant matrix, SW envelope |
| [SG3] | V-SMASH_SG3_Requirements_Reconciliation_v1.0.md | Power, detection range, lead accuracy conditioning |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0.md | §2.2 SW-AI standards |

### 1.3 QC Gate FLAG Resolution Index

| SRS FLAG | Issue | Resolution in SAD |
|----------|-------|-------------------|
| FLAG-06 | Confidence calibration methodology unspecified | §5 — Temperature scaling pipeline with ECE ≤0.05 validation |
| FLAG-10 | YOLOv8-nano AGPL-3.0 license risk | §6.3 — License decision matrix + contingency architecture |
| FLAG-12 | V-NV/V-P variant TBD for reuse factor | §9 — Variant configuration matrix with build-time #defines |

---

## 2. Architecture Overview

### 2.1 System Context

SW-AI runs as a single pipeline thread within the V-SMASH software stack. It consumes frames from FW-HAL, produces detections consumed by SW-BAL, and owns the final overlay assembly to FW-DISP.

```
┌──────────────────────────────────────────────────────────────────────┐
│                    JETSON ORIN NANO — SOFTWARE STACK                    │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐ │
│  │                    SW-AI PIPELINE (this SAD)                       │ │
│  │                                                                    │ │
│  │  ┌────────┐  ┌────────────┐  ┌────────┐  ┌────────┐  ┌───────┐ │ │
│  │  │AI-CAP  │→ │AI-DET+CLS  │→ │AI-GATE │→ │AI-TRACK│→ │AI-COORD│ │ │
│  │  │preproc │  │TensorRT    │  │thresh  │  │IoU +   │  │overlay │ │ │
│  │  │5ms     │  │engine      │  │+ color │  │Kalman  │  │assembly│ │ │
│  │  │        │  │≤30ms       │  │1ms     │  │2ms     │  │+ BAL   │ │ │
│  │  └───┬────┘  └────────────┘  └────────┘  └────────┘  └───┬───┘ │ │
│  │      │                                                    │      │ │
│  └──────┼────────────────────────────────────────────────────┼──────┘ │
│         │                                                    │        │
│   fw_sensor_capture()                                  ┌─────┴──────┐ │
│   (from FW-HAL T1)                                     │            │ │
│                                                   ┌────┴───┐  ┌────┴┐│
│                                                   │ SW-BAL │  │DISP ││
│                                                   │bal_compute│ │render│
│                                                   │(inline) │  │(T2) ││
│                                                   └────────┘  └─────┘│
│                                                                        │
│  AI thread: SCHED_FIFO priority 75 (below FW T1=90, T2=85, T3=80)    │
│  Watchdog: fw_register_watchdog(MODULE_AI, 500)                       │
│  Thermal: fw_get_thermal_state() → frame skip for throttling          │
└──────────────────────────────────────────────────────────────────────┘
```

### 2.2 Coordinator Decision (COORD-1)

**Problem (from SRS §3.10.3):** Who assembles the final `overlay_t` from AI detections + BAL lead computation?

**Decision: SW-AI owns overlay assembly.**

Rationale:
1. **Data locality:** SW-AI already holds all detection data (bounding boxes, confidence, gate state). BAL only adds the lead offset. Sending full detection context to a separate coordinator would duplicate data.
2. **Timing:** AI→BAL→overlay is a serial pipeline. A separate coordinator thread adds a context switch (≥100 µs) with no benefit. Inline BAL call within AI thread keeps latency minimal.
3. **Simplicity:** One thread owns the render path — no synchronization between AI and a coordinator for overlay writes.

**Implementation:** After AI-GATE produces gated detections, AI-COORD calls `bal_compute()` (SW-BAL's synchronous API) for the highest-confidence detection, merges the lead offset into `overlay_t`, and calls `fw_display_render()`.

```c
/* AI-COORD: overlay assembly (pseudocode) */
void ai_coord_assemble(const ai_frame_output_t *ai_out) {
    overlay_t ovl = {0};

    if (ai_out->count == 0) {
        ovl.dot_color = DOT_COLOR_OFF;
        fw_display_render(&ovl);
        return;
    }

    /* Select highest-confidence gated detection */
    const ai_output_t *best = ai_select_best(ai_out);

    /* Call BAL synchronously — ≤20 ms budget */
    bal_output_t bal_out;
    int rc = bal_compute(best, &bal_out);

    if (rc == 0 && bal_out.valid) {
        ovl.dot_x = bal_out.lead_x;
        ovl.dot_y = bal_out.lead_y;
        ovl.dot_color = best->gate_state;  /* 1=YELLOW, 2=GREEN */
        if (bal_out.range_warn)
            snprintf(ovl.messages[0], 32, "RANGE?");
        if (bal_out.est_mode)
            snprintf(ovl.messages[1], 32, "EST");
    } else {
        /* BAL failed or invalid — show detection box without lead (QC FLAG-07a fix) */
        ovl.dot_x = (uint16_t)best->bbox_cx;
        ovl.dot_y = (uint16_t)best->bbox_cy;
        ovl.dot_color = best->gate_state;
        snprintf(ovl.messages[0], 32, "NO LEAD");  /* Operator sees BAL degradation */
    }

    ovl.timestamp_us = best->capture_timestamp_us;
    fw_display_render(&ovl);
}
```

### 2.3 Thread Model

SW-AI runs as a single thread within the FW thread architecture ([FW-SAD] §3.1):

| Thread | Name | Priority | Schedule | Period | WCET Budget | Notes |
|--------|------|----------|----------|--------|-------------|-------|
| T-AI | `ai_pipeline_thread` | 75 (SCHED_FIFO) | Periodic, variable (thermal-dependent) | 33 ms (30 Hz) to 200 ms (5 Hz) | ≤80 ms (SWR-AI-P01) | Below all FW threads (T1=90, T2=85, T3=80) |

**Why single-threaded:** TensorRT inference uses the GPU asynchronously. CPU work (preprocess, postprocess, tracking, gating) is ≤16 ms total. GPU inference (≤30 ms) overlaps with CPU idle/yield. A multi-threaded AI pipeline would add synchronization overhead with no latency improvement — the GPU is the bottleneck, not the CPU.

**Power mode behavior (QC FLAG-09a — per [SG3] Issue 1):**

| Jetson Power Mode | AI Frame Rate | Inference Latency | Power Draw (AI share) | Notes |
|-------------------|--------------|-------------------|----------------------|-------|
| 15 W (MAXN) | 30 fps | ≤30 ms | ≤12.0 W (SWR-AI-P13) | Full performance. Active tracking. |
| 7 W (MAXN off) | 15 fps | ≤50 ms (GPU clock reduced) | ≤5.0 W (SWR-AI-P14) | Patrol/scanning. Pd may degrade slightly. |
| Idle (no inference) | 0 fps | N/A | ~2 W (SoC idle) | FW-FSM in INIT/SHUTDOWN/OVERHEAT. |

FW-PWR controls SoC power mode transitions. SW-AI adapts passively via `fw_get_thermal_state()` — thermal throttle stages map to frame rate reduction, which indirectly matches power mode behavior. AI does not directly control power mode.

**Recalibration dependency:** Temperature scaling parameter T (§5) is model-specific. If the model is re-trained and re-quantized (new `.engine` file), T must be re-calibrated using `tools/calibrate_temp.py` on the new model's validation set. The `.meta.json` file stores T per model version — the runtime reads T from metadata at model load, ensuring correct calibration parameter is used per model version.

**Frame pacing:** AI thread sleeps between cycles. Sleep duration = `target_period - actual_cycle_time`. If cycle exceeds period, next frame is processed immediately (no queuing, SWR-AI-F04).

```
AI Thread Lifecycle:
  boot → register_watchdog(MODULE_AI, 500)
       → load_model()
       → warm_up(2 dummy frames)
       → loop:
           check fsm_state — skip if INIT/SHUTDOWN/OVERHEAT
           check thermal_state — adjust target_period
           fw_sensor_capture(&frame)
           ai_cap_preprocess(&frame, &tensor)
           ai_det_infer(&tensor, &raw_dets)     ← GPU (async enqueue + sync wait)
           ai_det_postprocess(&raw_dets, &dets)
           ai_gate_apply(&dets, &gated)
           ai_track_update(&gated, &tracked)
           ai_coord_assemble(&tracked)
           fw_watchdog_heartbeat(wdg_handle)
           ai_health_log_stats()                 ← every 60 s
           sleep(remaining_period)
```

### 2.4 Memory Architecture

All memory pre-allocated at boot (consistent with FW-SAD SWR-FW-A07). No malloc/new after initialization.

| Resource | Size | Allocation | Notes |
|----------|------|-----------|-------|
| Input frame buffer (from FW double-buffer) | 0 (shared) | FW-HAL owns | SW-AI reads front buffer via `fw_sensor_capture()` |
| Preprocessed tensor (640×640×3 float32) | 4.7 MB | Static | NCHW format, pinned (CUDA host) for zero-copy DMA |
| TensorRT engine (deserialized) | ~4–8 MB | GPU memory | Model-dependent. YOLOv8-nano INT8 ≈ 6 MB. |
| TensorRT execution context | ~2 MB | GPU memory | Workspace for inference |
| Raw detection buffer | 10 × 64 B = 640 B | Static | Max 10 detections per frame |
| Gated detection buffer | 10 × 64 B = 640 B | Static | After confidence gate |
| Tracker state | 10 × 128 B = 1.3 KB | Static | Per-track Kalman state + history |
| Gate persistence buffer | 10 × 12 B = 120 B | Static | 3-frame history per track |
| Overlay output | 544 B | Static | Single `overlay_t` |
| Statistics accumulator | 64 B | Static | Rolling counters for health log |
| **Total SW-AI memory** | **~11–15 MB** | | Dominated by TensorRT engine |

**GPU memory budget:** Jetson Orin Nano has 8 GB unified memory. TensorRT engine + workspace + tensor I/O ≈ 15 MB. This is <0.2% of available memory.

---

## 3. AI-CAP — Image Capture & Preprocessing

### 3.1 Preprocessing Pipeline

```
fw_sensor_capture()
  │  1920×1080 raw (NV12 or YUYV — format from FW-HAL)
  ▼
┌───────────────────────────────────┐
│ Step 1: Color Convert (GPU)       │
│   NV12/YUYV → RGB888              │
│   CUDA kernel or VPI              │
│   ≤1 ms                           │
├───────────────────────────────────┤
│ Step 2: Letterbox Resize (GPU)    │
│   1920×1080 → 640×360 active      │
│   + 140 px top/bottom padding     │
│   Bilinear interpolation          │
│   ≤1 ms                           │
├───────────────────────────────────┤
│ Step 3: Normalize (GPU)           │
│   uint8 [0,255] → float32 [0,1]  │
│   HWC → NCHW transpose            │
│   ≤1 ms                           │
├───────────────────────────────────┤
│ Step 4: Copy to TRT Input Binding │
│   Pinned host → GPU device        │
│   Zero-copy if unified memory     │
│   ≤1 ms                           │
└───────────────────────────────────┘
  │  640×640×3 float32 tensor (NCHW)
  ▼  Total preprocess: ≤5 ms (SWR-AI-P01 budget allocation)
```

**Optimization:** On Jetson Orin Nano with unified memory, Steps 1–3 can run entirely on GPU via NVIDIA VPI (Vision Programming Interface) or custom CUDA kernels. Step 4 is a no-op with unified memory (pointer aliasing). Target: ≤3 ms total preprocessing.

### 3.2 Frame Skip Logic

```c
/* Frame pacing — no queue, latest frame only (SWR-AI-F04) */
static uint64_t last_process_time_us = 0;

bool ai_cap_should_process(thermal_state_t thermal) {
    uint64_t now = get_monotonic_us();
    uint64_t min_interval_us;

    switch (thermal) {
        case THERMAL_NORMAL:      min_interval_us = 33333;  break; /* 30 Hz */
        case THERMAL_THROTTLE_15: min_interval_us = 66667;  break; /* 15 Hz */
        case THERMAL_THROTTLE_10: min_interval_us = 100000; break; /* 10 Hz */
        case THERMAL_THROTTLE_5:  min_interval_us = 200000; break; /* 5 Hz  */
        default:                  return false;  /* SHUTDOWN — no processing */
    }

    if (now - last_process_time_us < min_interval_us) {
        return false;  /* Skip — too soon */
    }
    last_process_time_us = now;
    return true;
}
```

### 3.3 Letterbox Geometry Constants

```c
/* ai_preprocess.h — letterbox constants for 1920×1080 → 640×640 */

#define AI_MODEL_W          640
#define AI_MODEL_H          640
#define AI_SENSOR_W         1920
#define AI_SENSOR_H         1080

/* Letterbox: fit 1920×1080 into 640×640 maintaining aspect ratio */
/* Scale factor: min(640/1920, 640/1080) = min(0.333, 0.593) = 0.333 */
#define AI_LETTERBOX_SCALE  (AI_MODEL_W / (float)AI_SENSOR_W)  /* 0.3333 */
#define AI_LETTERBOX_NEW_H  ((int)(AI_SENSOR_H * AI_LETTERBOX_SCALE))  /* 360 */
#define AI_LETTERBOX_PAD_Y  ((AI_MODEL_H - AI_LETTERBOX_NEW_H) / 2)   /* 140 */
#define AI_LETTERBOX_PAD_X  0  /* No horizontal padding */
```

---

## 4. AI-DET — TensorRT Inference Engine

### 4.1 TensorRT Pipeline Design

```
┌──────────────────────────────────────────────────────────────┐
│                TensorRT Inference Engine                       │
│                                                                │
│  Model: YOLOv8-nano (or contingency — see §6.3)              │
│  Precision: INT8 (PTQ — post-training quantization)           │
│  Platform: Jetson Orin Nano, JetPack 6.x, TensorRT 10.x     │
│                                                                │
│  ┌──────────┐     ┌──────────────┐     ┌──────────────────┐  │
│  │ Input    │     │ Engine       │     │ Output           │  │
│  │ Binding  │ ──► │ Forward Pass │ ──► │ Binding          │  │
│  │          │     │              │     │                  │  │
│  │ 640×640  │     │ Backbone     │     │ [N, 84, 8400]   │  │
│  │ ×3       │     │ + Neck       │     │ (raw detections) │  │
│  │ float32  │     │ + Head       │     │                  │  │
│  │ NCHW     │     │ INT8         │     │ float32          │  │
│  └──────────┘     └──────────────┘     └──────────────────┘  │
│                                                                │
│  Execution: enqueueV3() → cudaStreamSynchronize()             │
│  Latency target: ≤30 ms (SWR-AI-P02)                         │
│  Memory: ~6 MB engine + ~2 MB workspace                       │
└──────────────────────────────────────────────────────────────┘
```

### 4.2 Model Loading & Initialization

```c
/* ai_model.h — model management interface */

typedef struct {
    void *engine;           /* nvinfer1::ICudaEngine* */
    void *context;          /* nvinfer1::IExecutionContext* */
    void *stream;           /* cudaStream_t */
    void *input_buf;        /* GPU: float32[1][3][640][640] */
    void *output_buf;       /* GPU: float32[1][84][8400] */
    char  model_path[256];  /* /opt/vsmash/models/vsmash_yolo_v{M}.{m}.engine */
    char  version_str[32];  /* "YOLO-v1.0" (SWR-AI-F61) */
    uint8_t hash_sha256[32];/* Model file SHA-256 (SWR-AI-F63) */
    float temp_scale;       /* Temperature scaling parameter (SWR-AI-F64) */
    bool  loaded;           /* true after successful load + warmup */
} ai_model_t;

/* Boot sequence (MODEL-1 decision: synchronous load + warm-up) */
int ai_model_init(ai_model_t *model) {
    /* 1. Read engine file from eMMC (SWR-AI-F60) */
    /* 2. Verify SHA-256 hash (SWR-AI-F63) — fail → FAULT_AI */
    /* 3. Deserialize TensorRT engine */
    /* 4. Create execution context */
    /* 5. Allocate GPU input/output bindings */
    /* 6. Load temperature scaling parameter from engine metadata */
    /* 7. Warm-up: 2 dummy inferences to prime GPU caches */
    /* 8. Set model->loaded = true */
    /* Total: ≤1.5 s (SWR-AI-P15) */
    return 0;
}
```

**Model path convention:**
```
/opt/vsmash/models/
├── vsmash_yolo_v1.0.engine       ← TensorRT serialized engine (INT8)
├── vsmash_yolo_v1.0.engine.sha256 ← SHA-256 hash file
├── vsmash_yolo_v1.0.calib        ← INT8 calibration cache (for rebuild)
└── vsmash_yolo_v1.0.meta.json    ← Model Card metadata (version, classes, thresholds)
```

### 4.3 Inference Function

```c
/* ai_inference.h */

#define AI_MAX_RAW_DETS     8400  /* YOLOv8 output grid: 3 scales × (80×80 + 40×40 + 20×20) */
#define AI_OUTPUT_DIMS      84    /* 4 bbox + 80 classes (COCO) or 4 bbox + 4 classes (custom) */
#define AI_NUM_CLASSES       4    /* DRONE_ROTOR, DRONE_FIXED_WING, BIRD, UNKNOWN */

typedef struct {
    float bbox_cx, bbox_cy, bbox_w, bbox_h;  /* model space (640×640) */
    float class_scores[AI_NUM_CLASSES];       /* raw logits pre-softmax */
    float confidence;                          /* max class score post-softmax */
    int   class_id;                            /* argmax of class_scores */
} ai_raw_det_t;

typedef struct {
    ai_raw_det_t dets[AI_MAX_POSTPROC];  /* after NMS — max 10 */
    int count;
} ai_det_result_t;

/* Forward pass — GPU execution */
int ai_det_infer(const ai_model_t *model, const void *input_tensor,
                 float *output_raw);

/* Postprocess: decode + NMS + coordinate remap + angular size */
int ai_det_postprocess(const float *output_raw,
                       const ai_model_t *model,
                       ai_det_result_t *result);
```

### 4.4 Postprocessing Pipeline

```
TensorRT output [1, 84, 8400]
  │
  ▼ Step 1: Transpose → [8400, 84]
  │
  ▼ Step 2: Decode bounding boxes (cx, cy, w, h in model space)
  │          Extract 4 class scores per detection
  │
  ▼ Step 3: Confidence filter — discard if max_class_score < 0.25
  │          (pre-NMS filter to reduce candidates — 8400 → ~50-200)
  │
  ▼ Step 4: Softmax on 4 class scores (not COCO 80)
  │          Apply temperature scaling: scores /= temp_scale (SWR-AI-F64)
  │
  ▼ Step 5: NMS — IoU threshold ≥ 0.45 (SWR-AI-F13)
  │          Sort by confidence, suppress overlapping boxes
  │          Limit to top 10 (SWR-AI-F12)
  │
  ▼ Step 6: Coordinate remap — model (640×640) → sensor (1920×1080)
  │          Account for letterbox padding offset
  │          cx_sensor = (cx_model - AI_LETTERBOX_PAD_X) / AI_LETTERBOX_SCALE
  │          cy_sensor = (cy_model - AI_LETTERBOX_PAD_Y) / AI_LETTERBOX_SCALE
  │
  ▼ Step 7: Angular size computation (SWR-AI-F15)
  │          angular_size_mrad = (bbox_w_sensor / SENSOR_WIDTH_PX) * HFOV_MRAD
  │
  ▼ Step 8: UNKNOWN class assignment — if max_score < 0.50 → UNKNOWN (SWR-AI-F23)
  │
  ▼ ai_det_result_t (up to 10 detections, sensor coordinates, angular sizes)
```

**Coordinate remap implementation:**

```c
/* ai_postprocess.c — coordinate remapping */
void ai_remap_to_sensor(ai_raw_det_t *det) {
    /* Remove letterbox padding offset */
    det->bbox_cy -= AI_LETTERBOX_PAD_Y;

    /* Scale from model space to sensor space */
    det->bbox_cx /= AI_LETTERBOX_SCALE;
    det->bbox_cy /= AI_LETTERBOX_SCALE;
    det->bbox_w  /= AI_LETTERBOX_SCALE;
    det->bbox_h  /= AI_LETTERBOX_SCALE;

    /* Clamp to sensor bounds */
    det->bbox_cx = CLAMP(det->bbox_cx, 0.0f, (float)AI_SENSOR_W);
    det->bbox_cy = CLAMP(det->bbox_cy, 0.0f, (float)AI_SENSOR_H);
}
```

---

## 5. Confidence Calibration Architecture (Resolves FLAG-06)

### 5.1 Problem

Neural network softmax outputs are NOT calibrated probabilities. A detection reported at 85% confidence may empirically be correct only 60% of the time (overconfident). For Safety Class C (AI gates lead indicator), uncalibrated confidence means the 70% gate threshold (SWR-AI-S01) does not provide the intended safety margin.

### 5.2 Temperature Scaling Design (CALIB-1)

**Method:** Post-hoc temperature scaling (Guo et al., 2017). Single scalar parameter T > 0 learned on held-out validation set. Applied to logits before softmax.

```
calibrated_score[i] = softmax(logit[i] / T)

Where T is optimized to minimize negative log-likelihood on validation set.
```

**Why temperature scaling over alternatives:**
- Platt scaling: 2 parameters per class → 8 parameters for 4-class. Overfitting risk on small validation sets.
- Isotonic regression: non-parametric, requires large calibration set. Not trivially embeddable in TensorRT.
- **Temperature scaling: 1 parameter, preserves class rankings, minimal compute overhead.**

### 5.3 Calibration Pipeline (Offline — Training Phase)

```
Training Dataset v1.0
  │
  ▼ Train YOLOv8-nano (PyTorch, FP32)
  │
  ▼ Export to ONNX (with raw logit output — NOT softmax)
  │
  ▼ Calibrate temperature T on held-out validation set:
  │   1. Run inference on validation set (≥2,000 images)
  │   2. Collect (logit_vector, true_label) pairs for all detections
  │   3. Optimize T via scipy.optimize.minimize(NLL, T_init=1.5)
  │   4. Validate: reliability diagram + ECE metric
  │   5. Accept if ECE ≤ 0.05 (SWR-AI-F64)
  │
  ▼ Bake T into ONNX model as a constant div node before softmax
  │   (or store as metadata, applied in postprocessing — see §5.4)
  │
  ▼ Convert to TensorRT INT8 engine:
  │   1. PTQ calibration dataset (1,000 representative images)
  │   2. Generate calibration cache (.calib file)
  │   3. Build engine with INT8 + calibration cache
  │
  ▼ Output: vsmash_yolo_v{M}.{m}.engine + .meta.json (includes T value)
```

### 5.4 Runtime Calibration Application

Temperature scaling is applied during postprocessing (Step 4 in §4.4), NOT inside the TensorRT engine. This preserves INT8 precision for the backbone while applying calibration in FP32 arithmetic.

```c
/* ai_postprocess.c — calibrated softmax */
void ai_calibrated_softmax(float *logits, int n_classes, float temp_scale,
                           float *probs) {
    float max_logit = logits[0];
    for (int i = 1; i < n_classes; i++)
        if (logits[i] > max_logit) max_logit = logits[i];

    float sum = 0.0f;
    for (int i = 0; i < n_classes; i++) {
        probs[i] = expf((logits[i] - max_logit) / temp_scale);
        sum += probs[i];
    }
    for (int i = 0; i < n_classes; i++)
        probs[i] /= sum;
}
```

### 5.5 Calibration Validation (SW-Phase 5)

| Metric | Requirement | Method | Pass Criteria |
|--------|-------------|--------|---------------|
| ECE (Expected Calibration Error) | SWR-AI-F64 | Reliability diagram on ≥1,000 test detections, 10 equal-width bins | ECE ≤ 0.05 |
| MCE (Maximum Calibration Error) | Best practice | Max bin deviation on reliability diagram | MCE ≤ 0.15 |
| NLL (Negative Log-Likelihood) | Optimization target | On validation set | NLL < NLL_uncalibrated |
| Class-conditional calibration | Safety | Per-class reliability diagram (4 classes) | Each class ECE ≤ 0.08 |

**Reliability diagram format:**
```
Confidence → Accuracy plot (10 bins):
  Bin 0.0-0.1: observed accuracy should be ~5%
  Bin 0.1-0.2: observed accuracy should be ~15%
  ...
  Bin 0.9-1.0: observed accuracy should be ~95%

Perfect calibration = diagonal line.
ECE = weighted average of |accuracy - confidence| per bin.
```

---

## 6. Model Management & Versioning

### 6.1 Model File Layout

```
/opt/vsmash/models/
├── active/                          ← symlink to currently active model version
│   └── → ../v1.0/
├── v1.0/
│   ├── vsmash_yolo_v1.0.engine     ← TensorRT serialized engine (INT8)
│   ├── vsmash_yolo_v1.0.sha256     ← SHA-256 hash (hex, 64 chars)
│   ├── vsmash_yolo_v1.0.meta.json  ← Model metadata
│   └── vsmash_yolo_v1.0.calib      ← INT8 calibration cache
├── v1.1/                            ← future model update
│   └── ...
└── rollback/                        ← previous model for emergency rollback
    └── → ../v1.0/
```

### 6.2 Model Metadata Schema

```json
{
  "model_name": "V-SMASH-YOLO",
  "version": "1.0",
  "version_string": "YOLO-v1.0",
  "architecture": "YOLOv8-nano",
  "quantization": "INT8",
  "platform": "jetson_orin_nano_jp6",
  "input_shape": [1, 3, 640, 640],
  "output_shape": [1, 84, 8400],
  "classes": ["DRONE_ROTOR", "DRONE_FIXED_WING", "BIRD", "UNKNOWN"],
  "num_classes": 4,
  "confidence_gate": 0.70,
  "temp_scale": 1.35,
  "nms_iou_threshold": 0.45,
  "pre_nms_score_threshold": 0.25,
  "max_detections": 10,
  "training_dataset_version": "V-SMASH-DATA-v1.0",
  "training_dataset_hash": "sha256:abc123...",
  "validation_ece": 0.037,
  "license": "Ultralytics Enterprise OR YOLOv5-nano MIT (see §6.3)",
  "created": "2026-xx-xx",
  "created_by": "training pipeline v1.0"
}
```

### 6.3 License Decision Matrix (Resolves FLAG-10)

| Option | License | Risk | Inference Speed | Accuracy | Recommendation |
|--------|---------|------|----------------|----------|---------------|
| **YOLOv8-nano + Ultralytics Enterprise** | Commercial | LOW (need to procure license) | Fastest (INT8 optimized) | Best (latest arch) | **PRIMARY** — procure before SW-3a |
| YOLOv5-nano | MIT | NONE | ~10% slower | ~2% lower mAP | **CONTINGENCY A** — zero license risk |
| RT-DETR-L (light) | Apache-2.0 | NONE | ~5% slower | Comparable | **CONTINGENCY B** — transformer-based |

**Architecture for license contingency:**

SW-AI architecture is model-agnostic by design. The model-specific code is isolated to:
1. **Model export script** (`tools/export_model.py`) — converts PyTorch → ONNX → TensorRT
2. **Postprocessing** (`ai_postprocess.c`) — output tensor shape interpretation
3. **Metadata** (`.meta.json`) — class count, output dims

All other code (preprocess, gating, tracking, coordinator) is model-independent. Swapping from YOLOv8-nano to YOLOv5-nano requires:
- Re-export ONNX model (different PyTorch checkpoint)
- Update output tensor dimensions in `.meta.json` (YOLOv5 output format differs slightly)
- Update postprocess decoder (anchor-based vs anchor-free)

**Estimated swap effort:** ≤2 days engineering + 1 day validation.

---

## 7. AI-GATE — Confidence Gating Architecture

### 7.1 Gate State Machine (Per Track)

```
                 ┌─────────────────────────────────┐
                 │                                   │
            conf < 0.70                         conf < 0.70
            for 3 frames                        for 3 frames
                 │                                   │
    ┌────────────▼──────────┐          ┌────────────▼──────────┐
    │      SUPPRESSED       │          │       DECAYING        │
    │  gate_state = 0       │          │  (3-frame countdown)  │
    │  dot_color = OFF      │          │  gate_state = prev    │
    └────────────┬──────────┘          └────────────┬──────────┘
                 │                                   │
            conf ≥ 0.70                         decay_count = 0
            for 3 consecutive                        │
            frames                                   ▼
                 │                          ┌────────────────────┐
                 └──────────────────────────►    SUPPRESSED      │
                                            └────────────────────┘
                 │
                 ▼
    ┌────────────────────────┐
    │        ACTIVE          │
    │  gate_state = 1 or 2   │
    │  YELLOW: 0.70–0.89     │
    │  GREEN:  ≥ 0.90        │
    └────────────┬───────────┘
                 │
            conf drops < 0.70
            OR track lost
                 │
                 ▼
    ┌────────────────────────┐
    │       DECAYING         │
    │  decay_counter = 3     │
    │  gate_state = prev     │
    └────────────────────────┘
```

### 7.2 Gate Implementation

```c
/* ai_gate.h */

#define AI_GATE_THRESHOLD     0.70f   /* SWR-AI-F34: build-time constant */
#define AI_GATE_PERSIST_FRAMES 3      /* SWR-AI-F31: persistence count */
#define AI_GATE_DECAY_FRAMES   3      /* SWR-AI-F32: decay count */

typedef enum {
    GATE_SUPPRESSED = 0,
    GATE_PENDING    = 1,  /* internal: counting up to PERSIST_FRAMES */
    GATE_ACTIVE     = 2,
    GATE_DECAYING   = 3,  /* internal: counting down from DECAY_FRAMES */
} gate_internal_state_t;

typedef struct {
    gate_internal_state_t state;
    uint8_t persist_count;   /* frames with conf ≥ threshold (0–3) */
    uint8_t decay_count;     /* frames remaining in decay (3–0) */
    uint8_t last_gate_output;/* 0=SUPPRESSED, 1=YELLOW, 2=GREEN */
} ai_gate_track_t;

/* Per-track gate update — called each frame */
uint8_t ai_gate_update(ai_gate_track_t *gate, float confidence) {
    bool above = (confidence >= AI_GATE_THRESHOLD);

    switch (gate->state) {
    case GATE_SUPPRESSED:
        if (above) {
            gate->persist_count++;
            if (gate->persist_count >= AI_GATE_PERSIST_FRAMES) {
                gate->state = GATE_ACTIVE;
                gate->last_gate_output = (confidence >= 0.90f) ? 2 : 1;
            } else {
                gate->state = GATE_PENDING;
            }
        } else {
            gate->persist_count = 0;
        }
        break;

    case GATE_PENDING:
        if (above) {
            gate->persist_count++;
            if (gate->persist_count >= AI_GATE_PERSIST_FRAMES) {
                gate->state = GATE_ACTIVE;
                gate->last_gate_output = (confidence >= 0.90f) ? 2 : 1;
            }
        } else {
            gate->state = GATE_SUPPRESSED;
            gate->persist_count = 0;
        }
        break;

    case GATE_ACTIVE:
        if (above) {
            gate->last_gate_output = (confidence >= 0.90f) ? 2 : 1;
        } else {
            gate->state = GATE_DECAYING;
            gate->decay_count = AI_GATE_DECAY_FRAMES;
        }
        break;

    case GATE_DECAYING:
        if (above) {
            gate->state = GATE_ACTIVE;
            gate->last_gate_output = (confidence >= 0.90f) ? 2 : 1;
        } else {
            gate->decay_count--;
            if (gate->decay_count == 0) {
                gate->state = GATE_SUPPRESSED;
                gate->persist_count = 0;
                gate->last_gate_output = 0;
            }
        }
        break;
    }

    return (gate->state == GATE_ACTIVE || gate->state == GATE_DECAYING)
           ? gate->last_gate_output : 0;
}
```

### 7.3 Safety Enforcement

The confidence gate threshold is enforced at three levels:

1. **Build-time constant:** `#define AI_GATE_THRESHOLD 0.70f` — not a variable, not configurable.
2. **No runtime path to modify:** No BLE characteristic, no USB-C diagnostic command, no config file can change the threshold. Verified by code review (SWR-AI-S04).
3. **FW-WDG fallback:** If AI hangs and gate cannot run, FW-WDG triggers AI_FAULT → all indicators suppressed (SWR-AI-S03).

---

## 8. AI-TRACK — Multi-Object Tracker Design

### 8.1 Tracker Selection (TRACK-1)

**Decision: IoU-based tracker with Kalman filter prediction for v1.0.**

| Alternative | Pros | Cons | Decision |
|------------|------|------|----------|
| Simple IoU (SORT-lite) | Fast (≤1 ms), deterministic, minimal state | Poor with occlusion, ID switches | Too fragile for reacquisition |
| **IoU + Kalman prediction** | Fast (≤2 ms), handles brief occlusion, smooth velocity | Needs tuning for angular motion | **SELECTED** — best fit for v1.0 |
| DeepSORT (appearance) | Robust re-identification | 10× compute, needs embedding model, extra GPU memory | Overkill for v1.0, consider v2.0 |
| ByteTrack | Good for crowded scenes | Optimized for pedestrians, not aerial targets | Not domain-appropriate |

### 8.2 Tracker Architecture

```
Per-frame input: ai_det_result_t (up to 10 detections)
  │
  ▼ Step 1: Kalman Predict
  │   For each active track: predict next position using constant-velocity model
  │   State vector: [cx, cy, w, h, vx, vy] (6-DOF)
  │   Process noise Q: diagonal, tuned per §8.6 methodology
  │
  ▼ Step 2: Cost Matrix (IoU)
  │   Compute IoU between predicted track positions and new detections
  │   Cost = 1 - IoU
  │
  ▼ Step 3: Hungarian Assignment
  │   Optimal matching: minimize total cost
  │   Match threshold: IoU ≥ 0.20 (low threshold — aerial targets move fast)
  │
  ▼ Step 4: Update Matched Tracks
  │   Kalman update with detection measurement
  │   Compute angular velocity from position delta / time delta
  │   Reset miss_count = 0
  │
  ▼ Step 5: Handle Unmatched Detections
  │   Create new tracks (new track_id, age = 0)
  │
  ▼ Step 6: Handle Unmatched Tracks
  │   Increment miss_count
  │   If miss_count > 5: retire track (SWR-AI-F43)
  │   Otherwise: keep predicting (coasting)
  │
  ▼ Step 7: Post-Shot Reacquisition (SWR-AI-F44)
  │   If FW-FSM in POST_SHOT:
  │     Search ±5° around pre-shot track position
  │     Associate highest-confidence detection with original track_id
  │     Reset miss_count
  │
  ▼ Output: tracked detections with persistent IDs + angular velocities
```

### 8.3 Kalman Filter Specification

```c
/* ai_tracker.h — Kalman filter for single track */

#define TRACK_STATE_DIM   6   /* cx, cy, w, h, vx, vy */
#define TRACK_MEAS_DIM    4   /* cx, cy, w, h (from detection) */
#define TRACK_MAX         10  /* max simultaneous tracks */
#define TRACK_MAX_MISS     5  /* frames before retirement (SWR-AI-F43) */
#define TRACK_MIN_VEL_AGE  3  /* min frames before angular velocity output (SWR-AI-F42) */
#define TRACK_REACQ_ANGLE  5.0f /* degrees — post-shot search radius (SWR-AI-F44) */

typedef struct {
    uint32_t track_id;              /* persistent ID (monotonic counter) */
    float    state[TRACK_STATE_DIM]; /* [cx, cy, w, h, vx, vy] */
    float    P[TRACK_STATE_DIM][TRACK_STATE_DIM]; /* covariance */
    uint8_t  age;                   /* frames since track started (saturate 255) */
    uint8_t  miss_count;            /* consecutive frames without match */
    bool     active;                /* false = retired or uninitialized */
    ai_gate_track_t gate;           /* per-track confidence gate state */

    /* Angular velocity computation */
    float    prev_cx;               /* previous frame center X (sensor coords) */
    float    prev_cy;               /* previous frame center Y (sensor coords) */
    uint64_t prev_timestamp_us;     /* previous frame timestamp */
    float    angular_vel_dps;       /* computed angular velocity (deg/s) */
    float    angular_vel_dir_deg;   /* direction of motion (0–360°) */
} ai_track_t;

typedef struct {
    ai_track_t tracks[TRACK_MAX];
    uint32_t   next_id;             /* monotonic track ID counter */
    int        active_count;
} ai_tracker_t;
```

### 8.4 Angular Velocity Computation

```c
/* ai_tracker.c — angular velocity from frame-to-frame displacement */
void ai_track_compute_angular_vel(ai_track_t *track,
                                   float cx, float cy,
                                   uint64_t timestamp_us) {
    if (track->age < TRACK_MIN_VEL_AGE) {
        track->angular_vel_dps = 0.0f;  /* SWR-AI-F42 */
        track->angular_vel_dir_deg = 0.0f;
        goto save;
    }

    float dt_s = (float)(timestamp_us - track->prev_timestamp_us) / 1e6f;
    if (dt_s < 1e-6f) goto save;  /* avoid division by zero */

    /* Pixel displacement → angular displacement */
    float dx_px = cx - track->prev_cx;
    float dy_px = cy - track->prev_cy;

    float dx_mrad = dx_px * MRAD_PER_PX;
    float dy_mrad = dy_px * MRAD_PER_PX;

    float angular_disp_mrad = sqrtf(dx_mrad*dx_mrad + dy_mrad*dy_mrad);
    float angular_disp_deg = angular_disp_mrad / 17.4533f;

    track->angular_vel_dps = angular_disp_deg / dt_s;
    track->angular_vel_dir_deg = atan2f(dy_px, dx_px) * (180.0f / M_PI_F);
    if (track->angular_vel_dir_deg < 0.0f)
        track->angular_vel_dir_deg += 360.0f;

save:
    track->prev_cx = cx;
    track->prev_cy = cy;
    track->prev_timestamp_us = timestamp_us;
}
```

### 8.5 Post-Shot Reacquisition

```c
/* ai_tracker.c — post-shot reacquisition (SWR-AI-F44) */
int ai_track_reacquire(ai_tracker_t *tracker,
                        const ai_det_result_t *dets,
                        uint32_t pre_shot_track_id) {
    /* Find the track that was active before shot */
    ai_track_t *target = NULL;
    for (int i = 0; i < TRACK_MAX; i++) {
        if (tracker->tracks[i].track_id == pre_shot_track_id) {
            target = &tracker->tracks[i];
            break;
        }
    }
    if (!target) return -1;  /* track already retired */

    /* Search ±5° around pre-shot position */
    float search_radius_px = TRACK_REACQ_ANGLE / (HFOV_DEG / AI_SENSOR_W);
    float best_conf = 0.0f;
    int best_idx = -1;

    for (int d = 0; d < dets->count; d++) {
        float dx = dets->dets[d].bbox_cx - target->state[0];
        float dy = dets->dets[d].bbox_cy - target->state[1];
        float dist = sqrtf(dx*dx + dy*dy);

        if (dist <= search_radius_px && dets->dets[d].confidence > best_conf) {
            best_conf = dets->dets[d].confidence;
            best_idx = d;
        }
    }

    if (best_idx >= 0) {
        /* Re-associate detection with original track ID */
        target->miss_count = 0;
        target->active = true;
        /* Kalman update with reacquired detection */
        ai_track_kalman_update(target, &dets->dets[best_idx]);
        return 0;  /* reacquired */
    }

    return -1;  /* not found within search radius */
}
```

### 8.6 Kalman Filter Tuning Methodology (QC FLAG-12a)

The Kalman filter Q (process noise) and R (measurement noise) matrices are tuned empirically during SW-Phase 3 using drone sled data. Architecture defines the tuning methodology; specific values are [TBD-SW3].

**Process noise Q** (6×6 diagonal):

| State | Symbol | Initial Estimate | Rationale |
|-------|--------|-----------------|-----------|
| cx (pixels) | σ²_cx | 25.0 | ~5 px/frame jitter at 30 fps for 10 m/s crossing target |
| cy (pixels) | σ²_cy | 25.0 | Same as cx |
| w (pixels) | σ²_w | 4.0 | Box width changes slowly (range change ≤1%/frame) |
| h (pixels) | σ²_h | 4.0 | Same as w |
| vx (px/frame) | σ²_vx | 100.0 | High — aerial targets accelerate/maneuver |
| vy (px/frame) | σ²_vy | 100.0 | Same as vx |

**Measurement noise R** (4×4 diagonal):

| Measurement | Symbol | Initial Estimate | Rationale |
|-------------|--------|-----------------|-----------|
| cx (pixels) | σ²_mcx | 9.0 | YOLOv8 bbox center ±3 px typical |
| cy (pixels) | σ²_mcy | 9.0 | Same as cx |
| w (pixels) | σ²_mw | 16.0 | Bbox width ±4 px typical |
| h (pixels) | σ²_mh | 16.0 | Same as w |

**Tuning protocol (SW-Phase 3):**
1. Collect 10+ drone sled runs at varied speeds (5, 10, 20 deg/s) and ranges (100, 150, 200 m)
2. Run tracker offline with initial Q/R, measure track loss rate and angular velocity error
3. Grid search Q diagonal ±2× around initial estimates, minimize track loss rate
4. Validate on held-out runs. Accept if: track loss rate ≤5% per 100-frame sequence, angular velocity error ≤10% at ≥3 frames history

**Hungarian assignment implementation (QC FLAG-12b):** Custom O(n³) implementation for n ≤ 10 tracks (deterministic, no heap allocation). ~100 µs for 10×10 matrix on ARM Cortex-A78 core. Library: adapted from Kuhn-Munkres reference implementation (public domain). Located in `src/ai_hungarian.c`.

---

## 9. Variant Configuration Matrix

### 9.1 Compile-Time Configuration (Resolves FLAG-12)

```c
/* ai_config.h — variant-specific AI configuration */

#if defined(VARIANT_VM) || defined(VARIANT_VL) || defined(VARIANT_VX) || defined(VARIANT_VT)
  /* Standard visible-only AI pipeline */
  #define AI_DUAL_SENSOR        0
  #define AI_GATE_OUTPUT_MODE   AI_GATE_MODE_LEAD
  #define AI_TRACK_DATA_EXPORT  0
  #define AI_HFOV_DEG           12.0f

#elif defined(VARIANT_VD)
  /* Detection-only (no lead dot — alert mode) */
  #define AI_DUAL_SENSOR        0
  #define AI_GATE_OUTPUT_MODE   AI_GATE_MODE_ALERT_ONLY
  #define AI_TRACK_DATA_EXPORT  0
  #define AI_HFOV_DEG           12.0f

#elif defined(VARIANT_VNV)
  /* Night-vision: dual visible + thermal sensor */
  #define AI_DUAL_SENSOR        1
  #define AI_GATE_OUTPUT_MODE   AI_GATE_MODE_LEAD
  #define AI_TRACK_DATA_EXPORT  0
  #define AI_HFOV_DEG           12.0f
  /* Dual-sensor model: 6-channel input (RGB + thermal 3-ch) */
  #define AI_MODEL_CHANNELS     6
  #define AI_MODEL_INPUT_H      640
  #define AI_MODEL_INPUT_W      640

#elif defined(VARIANT_VP)
  /* Panoramic: wider FOV, different model weights */
  #define AI_DUAL_SENSOR        0
  #define AI_GATE_OUTPUT_MODE   AI_GATE_MODE_LEAD
  #define AI_TRACK_DATA_EXPORT  0
  #define AI_HFOV_DEG           20.0f  /* wider FOV — different angular constants */

#elif defined(VARIANT_VR)
  /* Vehicle-mounted: motion compensation, standard sensor */
  #define AI_DUAL_SENSOR        0
  #define AI_GATE_OUTPUT_MODE   AI_GATE_MODE_LEAD
  #define AI_TRACK_DATA_EXPORT  0
  #define AI_HFOV_DEG           12.0f
  #define AI_MOTION_COMP        1  /* compensate for vehicle motion via IMU */
#endif

/* V-T adds data export overlay — detected alongside standard pipeline */
#if defined(VARIANT_VT)
  #undef  AI_TRACK_DATA_EXPORT
  #define AI_TRACK_DATA_EXPORT  1
#endif

/* Default channel count for standard visible-only models */
#ifndef AI_MODEL_CHANNELS
  #define AI_MODEL_CHANNELS     3
#endif
```

### 9.2 Variant Impact Summary

| Module | V-M | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|-----|-----|-----|-----|-----|------|-----|-----|
| AI-CAP preprocess | Standard | = | = | = | = | **Dual-input fusion** | = (wider FOV constants) | = + motion comp |
| AI-DET model | Baseline weights | = | = | = | = | **6-ch dual-input model** | **Re-trained for FOV** | **Re-trained for vehicle motion** |
| AI-CLS classes | 4-class | = | = | = | = | 4-class + thermal sig | = | = |
| AI-GATE mode | LEAD | = | **ALERT_ONLY** | = | = | = | = | = |
| AI-TRACK extras | Standard | = | Det-only (no BAL) | = | + frame export | + thermal track fusion | = | + vehicle motion filter |
| AI-COORD | Full pipeline | = | No BAL call | = | + data logging | = | = | = |
| Model weights | **Baseline** | = | = | = | = | **New model** | **New model** | **New model** |
| **Reuse** | **Baseline** | **100%** | **95%** | **100%** | **98%** | **60%** | **85%** | **90%** |

---

## 10. AI Health & Diagnostics

### 10.1 Health Statistics (SWR-AI-F55)

```c
/* ai_health.h — rolling statistics reported every 60 s */

typedef struct {
    /* Pipeline performance */
    float    avg_inference_ms;   /* moving average inference time */
    float    max_inference_ms;   /* worst-case since last report */
    uint32_t frame_count;        /* total frames processed */
    uint32_t skip_count;         /* frames skipped (thermal or pipeline busy) */

    /* Detection statistics */
    uint32_t detection_count;    /* total detections (pre-gate) */
    uint32_t gate_pass_count;    /* detections that passed gate */
    uint32_t gate_suppress_count;/* detections suppressed by gate */

    /* Tracking statistics */
    uint32_t track_create_count; /* new tracks created */
    uint32_t track_retire_count; /* tracks retired (lost) */
    uint32_t reacquisition_count;/* post-shot reacquisitions */

    /* Model info */
    char     model_version[32];  /* "YOLO-v1.0" */
    uint8_t  thermal_state;      /* current thermal state */
    uint32_t uptime_s;           /* seconds since boot */
} ai_health_stats_t;
```

### 10.2 Logging Protocol

Health stats are reported to SW-COM every 60 seconds via a shared memory struct (or function call to COM data interface). SW-COM packages these into BLE telemetry (COM-DATA characteristic) and USB-C diagnostic output.

```c
/* ai_health.c — periodic reporting */
static uint64_t last_report_us = 0;

void ai_health_check_report(ai_health_stats_t *stats) {
    uint64_t now = get_monotonic_us();
    if (now - last_report_us < 60000000ULL) return;  /* 60 s */

    /* Push stats to COM */
    com_publish_ai_health(stats);

    /* Reset rolling counters */
    stats->frame_count = 0;
    stats->detection_count = 0;
    /* ... etc ... */

    last_report_us = now;
}
```

---

## 11. Error Handling & Fault Paths

### 11.1 AI Pipeline Fault Table

| Fault | Detection | Response | FSM Impact | Recovery |
|-------|-----------|----------|------------|----------|
| Model file missing / corrupt | SHA-256 hash mismatch at boot | `fw_report_fault(FAULT_AI)`. No inference. | → AI_FAULT | Depot re-flash model. Power cycle to retry. |
| TensorRT engine deserialization fail | `createInferRuntime()` returns NULL | `fw_report_fault(FAULT_AI)`. No inference. | → AI_FAULT | May indicate JetPack version mismatch. Depot re-build engine. |
| GPU memory allocation fail | `cudaMalloc()` returns error | `fw_report_fault(FAULT_AI)`. No inference. | → AI_FAULT | Power cycle. If persistent, hardware fault. |
| Inference timeout (>100 ms) | Cycle time check exceeds 100 ms | Log warning. Skip frame. Watchdog still heartbeats. | No FSM change (non-fatal) | Transient — may occur during thermal throttle. |
| Inference hang (>500 ms) | FW-WDG timeout — AI thread fails to heartbeat | FW-WDG triggers AI_FAULT. All indicators suppressed. | → AI_FAULT | FW-WDG is independent monitor (not self-detected). |
| Camera frame error | `fw_sensor_capture()` returns `-EIO` | Skip frame. Increment error counter. If 10 consecutive: report fault. | → SENSOR_FAULT (FW handles) | FW-FSM handles sensor recovery. |
| NaN/Inf in inference output | isnan/isinf check on output tensor | Discard frame. Log anomaly. If ≥10 consecutive NaN frames: `fw_report_fault(FAULT_AI)` — persistent NaN indicates model defect. | No FSM change if transient; → AI_FAULT if ≥10 consecutive | Transient — INT8 overflow rare. If persistent: model must be re-exported at depot. |
| BAL compute failure | `bal_compute()` returns error | Show detection box without lead (fallback in AI-COORD §2.2). | No FSM change — SW-BAL may separately report BAL_FAULT | BAL handles own fault reporting. |

### 11.2 Defensive Checks

```c
/* ai_pipeline.c — main loop defensive checks */
void ai_pipeline_cycle(ai_pipeline_t *pipe) {
    /* 1. Check FSM state — do not process in prohibited states */
    fsm_state_t fsm = fw_get_fsm_state();
    if (fsm == FSM_INIT || fsm == FSM_SHUTDOWN || fsm == FSM_OVERHEAT) {
        fw_watchdog_heartbeat(pipe->wdg_handle);  /* still alive, just idle */
        return;
    }

    /* 2. Check thermal state — adjust frame rate */
    thermal_state_t thermal = fw_get_thermal_state();
    if (!ai_cap_should_process(thermal)) {
        fw_watchdog_heartbeat(pipe->wdg_handle);
        return;  /* too soon — skip this cycle */
    }

    /* 3. Capture frame */
    frame_buffer_t frame;
    int rc = fw_sensor_capture(&frame);
    if (rc != 0) {
        pipe->sensor_error_count++;
        if (pipe->sensor_error_count >= 10) {
            /* FW will handle SENSOR_FAULT — we just stop trying */
        }
        fw_watchdog_heartbeat(pipe->wdg_handle);
        return;
    }
    pipe->sensor_error_count = 0;

    /* 4. Preprocess */
    ai_cap_preprocess(&frame, &pipe->tensor);

    /* 5. Inference */
    uint64_t infer_start = get_monotonic_us();
    rc = ai_det_infer(&pipe->model, pipe->tensor.data, pipe->output_raw);
    uint64_t infer_end = get_monotonic_us();
    float infer_ms = (float)(infer_end - infer_start) / 1000.0f;

    if (rc != 0 || infer_ms > 100.0f) {
        /* Log but don't fault — transient */
        pipe->stats.max_inference_ms = fmaxf(pipe->stats.max_inference_ms, infer_ms);
        fw_watchdog_heartbeat(pipe->wdg_handle);
        return;
    }

    /* 6. Postprocess + NMS + remap */
    ai_det_result_t dets;
    ai_det_postprocess(pipe->output_raw, &pipe->model, &dets);

    /* 7. NaN/Inf check on detections (QC FLAG-07b: escalate if persistent) */
    if (ai_sanitize_detections(&dets) != 0) {
        pipe->nan_error_count++;
        if (pipe->nan_error_count >= 10) {
            fw_report_fault(FAULT_AI);  /* persistent NaN → model defect */
            return;
        }
        fw_watchdog_heartbeat(pipe->wdg_handle);
        return;  /* discard this frame */
    }
    pipe->nan_error_count = 0;

    /* 8. Gate */
    ai_frame_output_t gated;
    ai_gate_apply(&pipe->tracker, &dets, &gated);

    /* 9. Track */
    ai_track_update(&pipe->tracker, &gated, frame.timestamp_us);

    /* 10. Post-shot reacquisition */
    if (fsm == FSM_POST_SHOT && pipe->pre_shot_track_id != 0) {
        ai_track_reacquire(&pipe->tracker, &dets, pipe->pre_shot_track_id);
    }

    /* 11. Assemble overlay + BAL */
    ai_coord_assemble(&gated);

    /* 12. Heartbeat — we're alive */
    fw_watchdog_heartbeat(pipe->wdg_handle);

    /* 13. Update stats */
    ai_health_update_stats(&pipe->stats, infer_ms, &gated);
    ai_health_check_report(&pipe->stats);
}
```

---

## 12. Build System & Source Layout

### 12.1 Source Tree

```
sw-ai/
├── CMakeLists.txt              ← Top-level: variant selection, TensorRT linkage
├── cmake/
│   ├── FindTensorRT.cmake      ← TensorRT SDK discovery
│   ├── variant_ai.cmake        ← AI-specific variant defines
│   └── toolchain_jetson.cmake  ← Cross-compilation toolchain
├── include/
│   ├── ai_output.h             ← ai_output_t, ai_frame_output_t (public API)
│   ├── ai_config.h             ← Variant #defines (§9.1)
│   ├── ai_preprocess.h         ← Letterbox constants
│   ├── ai_inference.h          ← TensorRT wrapper interface
│   ├── ai_gate.h               ← Confidence gate interface
│   ├── ai_tracker.h            ← Tracker interface + Kalman types
│   ├── ai_coord.h              ← Coordinator (overlay assembly)
│   ├── ai_health.h             ← Health stats types
│   └── ai_model.h              ← Model management types
├── src/
│   ├── ai_pipeline.c           ← Main pipeline thread loop (§11.2)
│   ├── ai_preprocess.cu        ← GPU preprocessing (CUDA kernels)
│   ├── ai_inference.cpp        ← TensorRT engine load + infer (C++ for nvinfer API)
│   ├── ai_postprocess.c        ← Decode, NMS, remap, calibrated softmax
│   ├── ai_gate.c               ← Confidence gate FSM (§7.2)
│   ├── ai_tracker.c            ← IoU tracker + Kalman filter (§8)
│   ├── ai_coord.c              ← Overlay assembly + BAL call (§2.2)
│   ├── ai_hungarian.c          ← Kuhn-Munkres assignment (§8.6)
│   ├── ai_health.c             ← Statistics + periodic logging (§10)
│   └── ai_model.c              ← Model load, hash verify, version (§6)
├── test/
│   ├── test_preprocess.cpp     ← Letterbox geometry, normalize range
│   ├── test_postprocess.cpp    ← NMS, coordinate remap, angular size
│   ├── test_gate.cpp           ← Gate FSM: persist, decay, threshold enforcement
│   ├── test_tracker.cpp        ← Track create/retire/reacquire, velocity calc
│   ├── test_coord.cpp          ← Overlay assembly with BAL mock
│   ├── test_calibration.cpp    ← Temperature scaling, ECE computation
│   ├── test_model.cpp          ← Hash verify, version parsing, load failure
│   ├── test_pipeline.cpp       ← Full pipeline with mock FW-API + mock TensorRT
│   └── mock/
│       ├── mock_fw_api.h       ← Mock FW-API for unit testing
│       ├── mock_tensorrt.h     ← Mock TensorRT engine (returns canned output)
│       └── mock_bal.h          ← Mock bal_compute()
├── tools/
│   ├── export_model.py         ← PyTorch → ONNX → TensorRT conversion
│   ├── calibrate_temp.py       ← Temperature scaling calibration (§5.3)
│   ├── validate_ece.py         ← ECE + reliability diagram generation
│   └── generate_calib_data.py  ← INT8 PTQ calibration dataset extraction
└── models/
    └── README.md               ← Model file placement instructions
```

### 12.2 Build Commands

```bash
# Build for V-M (baseline) on Jetson
cmake -B build -DVARIANT=VM -DPLATFORM=jetson_orin_nano \
      -DTENSORRT_ROOT=/usr/local/tensorrt
cmake --build build

# Build for unit tests (mock TensorRT + mock FW-API)
cmake -B build_test -DVARIANT=VM -DBUILD_TESTS=ON -DUSE_MOCK_TRT=ON
cmake --build build_test && ctest --test-dir build_test

# Build for V-NV (dual sensor)
cmake -B build -DVARIANT=VNV -DPLATFORM=jetson_orin_nano \
      -DTENSORRT_ROOT=/usr/local/tensorrt

# Static analysis
cmake --build build --target check  # cppcheck + clang-tidy
```

### 12.3 Dependencies

| Library | Version | License | Usage |
|---------|---------|---------|-------|
| TensorRT | 10.x (JetPack 6.x) | NVIDIA proprietary | Inference engine |
| CUDA Runtime | 12.x (JetPack 6.x) | NVIDIA proprietary | GPU compute |
| cuDNN | 9.x (JetPack 6.x) | NVIDIA proprietary | Conv acceleration |
| NVIDIA VPI | 3.x (JetPack 6.x) | NVIDIA proprietary | Image preprocessing |
| Eigen 3.4 | 3.4 | MPL-2.0 | Kalman filter linear algebra |
| gtest | 1.14 | BSD-3 | Unit testing |

**All NVIDIA libraries are platform-locked to Jetson.** No additional procurement needed — included with JetPack SDK. Eigen is header-only, no binary dependency.

---

## 13. Test Architecture

### 13.1 Unit Test Strategy

| Test Suite | Module | Mock Deps | Key Tests | SWR Coverage |
|-----------|--------|-----------|-----------|-------------|
| `test_preprocess` | AI-CAP | None | Letterbox geometry (4:3→1:1 mapping), normalize bounds, pad offset | F02, F03 |
| `test_postprocess` | AI-DET | None | NMS (overlapping boxes), coordinate remap accuracy, angular size calc, UNKNOWN assignment | F11–F15, F23 |
| `test_gate` | AI-GATE | None (pure logic) | 3-frame persist, 3-frame decay, threshold at exactly 0.70, color tier boundaries (0.90), no bypass path | F30–F35, S01, S04 |
| `test_tracker` | AI-TRACK | None | Track create/retire (5 frames), ID persistence, angular velocity from ≥3 frames, reacquisition within ±5° | F40–F44 |
| `test_coord` | AI-COORD | Mock BAL, Mock FW-API | Overlay assembly: 0 detections (OFF), 1 detection (lead), BAL failure (fallback) | §2.2, F35 |
| `test_calibration` | Softmax | None | Temperature scaling correctness, ECE computation on synthetic data | F64 |
| `test_model` | AI-MODEL | Mock filesystem | SHA-256 verify, corrupt file → FAULT_AI, version string parsing, metadata load | F60–F63 |
| `test_pipeline` | Full | Mock FW-API, Mock TRT, Mock BAL | FSM state skip (INIT/SHUTDOWN/OVERHEAT), thermal frame pacing, watchdog heartbeat, sensor error count, NaN sanitize | F01, F04, F05, F50–F54 |

**Coverage target:** ≥80% branch coverage on all C source files. CUDA kernels (`ai_preprocess.cu`) tested via integration on devkit (not unit-testable with mock).

### 13.2 Integration Test Plan (SW-Phase 4, on target)

| Test | Target | Equipment | SWR Coverage |
|------|--------|-----------|-------------|
| Inference latency profile | Jetson Orin Nano devkit | TensorRT profiler (trtexec) | P01, P02, P03 |
| Full pipeline latency | Devkit + VM-1200 camera | Instrumented timestamps, 1000 frames | P01, P03, P04 |
| Detection range sweep | Devkit + drone sled | Calibrated targets at 100/150/200 m | P05–P08 |
| FPR test | Devkit + non-drone targets | ≥500 presentations (birds, clutter, sky) | P09, S02 |
| Thermal throttle | Devkit in thermal chamber | Chamber + frame rate counter | F53, P04 |
| Post-shot reacquisition | Devkit + recoil simulator | High-speed camera + track ID log | F44, P12 |
| Power draw | Devkit + power meter | INA226 at Jetson power input | P13, P14 |
| Model load time | Cold boot | Instrumented boot log, 10 trials | P15 |
| 72h soak | Devkit continuous run | Memory profiler + health stats | Reliability |
| Calibration validation | Devkit + test dataset | reliability diagram + ECE report | F64, S07 |

---

## 14. SW-BAL Interface Contract

### 14.1 BAL Compute API (consumed by AI-COORD)

SW-BAL exposes a synchronous function called inline by the AI thread:

```c
/* bal_api.h — SW-BAL public interface */

typedef struct {
    bool     valid;          /* true if computation succeeded */
    uint16_t lead_x;         /* lead dot X in sensor coordinates */
    uint16_t lead_y;         /* lead dot Y in sensor coordinates */
    float    lead_mrad;      /* lead angle magnitude (mrad) */
    float    lead_dir_deg;   /* lead angle direction (0–360°) */
    bool     range_warn;     /* true if range outside 30–300 m bounds (SWR-BAL-S03) */
    bool     est_mode;       /* true if lead error >1.0 mrad (VM-S06-B) */
} bal_output_t;

/*
 * bal_compute — Compute ballistic lead for a single detection.
 *
 * Synchronous: completes within ≤20 ms.
 * Thread-safe: no internal state modified (pure function of inputs).
 * Returns 0 on success, -1 on invalid input, -2 on computation failure.
 */
int bal_compute(const ai_output_t *detection, bal_output_t *result);
```

### 14.2 Data Flow: AI → BAL → Overlay

```
ai_frame_output_t (from AI-GATE + AI-TRACK)
  │
  ▼ ai_select_best() → highest-confidence gated detection
  │
  ▼ bal_compute(best_detection, &bal_out)  ← synchronous, ≤20 ms
  │
  ▼ Merge into overlay_t:
  │   if bal_out.valid:
  │     dot_x = bal_out.lead_x
  │     dot_y = bal_out.lead_y
  │   else:
  │     dot_x = detection.bbox_cx  (fallback — no lead)
  │     dot_y = detection.bbox_cy
  │   dot_color = gate_state (0/1/2)
  │   if bal_out.range_warn: messages[0] = "RANGE?"
  │   if bal_out.est_mode:   messages[1] = "EST"
  │
  ▼ fw_display_render(&overlay)
```

---

## 15. Standards Compliance

### 15.1 TCVN / MIL-STD References

| Standard | Clause | Applies To | SW-AI Module |
|----------|--------|-----------|-------------|
| TCVN 13726:2023 | §5.4 AI safety classification | Safety Class C assignment | Entire pipeline — SRS §3.9 |
| TCVN 13726:2023 | §6.2 V&V requirements | Independent validation, dual-error reporting | AI-GATE, validation methodology §7 |
| MIL-STD-882E | Hazard analysis | Severity II / Probability D classification | SWR-AI-S05 hazard analysis deliverable |
| IEC 62443-4-1 | Secure development | Code review, static analysis, test coverage | Build system, test architecture |
| MISRA C:2012 | Coding standard | Advisory subset for AI-CAP/DET/TRACK, required subset for AI-GATE | AI-GATE is safety-critical path |

### 15.2 Safety Architecture Summary

| Safety Function | Implementation | Independent Check | Fallback |
|----------------|---------------|-------------------|----------|
| Confidence gate (≥0.70) | AI-GATE build-time constant | Code review — no bypass path | FW-WDG timeout → suppress all |
| No stale indicator | FW-WDG 500 ms timeout | FW-WDG is independent (T3 thread) | AI_FAULT → indicators off |
| Calibrated confidence | Temperature scaling (ECE ≤0.05) | Independent V&V reviews reliability diagram | Model blocked if ECE >0.05 |
| No ROE/IFF output | Model architecture (4 class labels only) | Model Card review | By design — no ROE labels exist |
| Dual error reporting (FPR + FNR) | Model Card v1.0 mandatory fields | Independent V&V reviews Model Card | Validation report rejected if only "accuracy %" |

---

## 16. Acceptance Criteria (Gate to SW-Phase 3: Implementation)

- [ ] **Pipeline architecture complete:** All 7 modules (CAP, DET, CLS, GATE, TRACK, HEALTH, MODEL) + COORD have defined interfaces, data flow, and error handling
- [ ] **Coordinator decided:** AI-owns-overlay rationale documented (COORD-1)
- [ ] **TensorRT pipeline:** Engine loading, inference, postprocessing pipeline fully specified with timing budgets
- [ ] **Confidence calibration:** Temperature scaling pipeline from training through runtime with ECE validation methodology
- [ ] **Tracker design:** IoU + Kalman tracker specified with post-shot reacquisition logic
- [ ] **Gate FSM:** 4-state gate machine with persist/decay counters, safety invariants enforced
- [ ] **License contingency:** Model-agnostic architecture documented, swap effort estimated
- [ ] **SRS FLAGs resolved:** FLAG-06 (calibration §5), FLAG-10 (license §6.3), FLAG-12 (variants §9)
- [ ] **Test plan:** Unit test suites + integration test plan defined. Mock TensorRT for offline testing.
- [ ] **BAL interface:** `bal_compute()` contract agreed with SW-BAL lead
- [ ] **Memory budget:** All allocations pre-calculated, no dynamic allocation after boot
- [ ] **QC Gate passed:** Defense AI QC Gate run on this SAD, all checks PASS or FLAG-with-plan

---

*Software Architecture Document — V-SMASH-SW-AI*
*SW-Phase 2 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-AI_SRS_v1.0|SRS (SW-Phase 1)]]*
*Resolves: SRS FLAGs 06, 10, 12*
*Decisions: COORD-1 (AI-owns-overlay), TRACK-1 (IoU+Kalman), MODEL-1 (sync load), QUANT-1 (PTQ-INT8), CALIB-1 (temp scaling)*
