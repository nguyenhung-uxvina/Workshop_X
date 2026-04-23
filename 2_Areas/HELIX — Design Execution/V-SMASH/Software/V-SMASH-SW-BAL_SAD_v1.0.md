---
project: V-SMASH-SW-BAL
type: software-architecture-document
version: 1.0
created: 2026-03-02
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — FLAG-07c fixed (coast limit), FLAG-12a fixed (eMMC offset), FLAG-12b fixed (gate constant naming) — 2026-03-02)
parent_family: V-SMASH
sw_phase: 2 (Architecture)
safety_class: B (lead computation accuracy affects engagement effectiveness; bounds check is safety-related)
source: V-SMASH-SW-BAL_SRS_v1.0.md (SW-Phase 1)
resolves_flags: [SRS-FLAG-10, SRS-FLAG-12]
decisions: [BAL-1 synchronous-pure-function, BAL-2 angular-kalman-separate, BAL-3 max-lead-derivation, BAL-4 const-lut-bilinear, BAL-5 range-ema-reset-on-reacquire]
---

# V-SMASH-SW-BAL — Software Architecture Document

**SW-Phase 2 | Version 1.0 | 2026-03-02**

---

## 1. Introduction

### 1.1 Purpose

This Software Architecture Document (SAD) defines the internal structure, algorithm design, data flow, memory layout, and implementation specification for V-SMASH-SW-BAL — the ballistic computation and sensor fusion module. It translates the 55 requirements from the SRS (SW-Phase 1) into an implementable architecture and resolves the 2 QC Gate FLAGs carried forward from SW-Phase 1.

**Key decisions made in this document:**
- Execution model (BAL-1): `bal_compute()` is a synchronous pure function called inline by SW-AI coordinator thread — no separate thread, no internal state mutation after init
- Kalman separation (BAL-2): BAL-TRACK operates in angular space (mrad), separate from AI-TRACK's pixel-space tracker — different state vectors serve different purposes
- MAX_LEAD_MRAD derivation (BAL-3): Formally derived from LUT analysis + display physical constraint = 50.0 mrad confirmed
- LUT architecture (BAL-4): Compile-time `const` C array with bilinear interpolation, O(1) lookup
- Range smoothing (BAL-5): EMA with track-aware reset on reacquisition

**Intended audience:** BAL algorithm engineer (implementer), AI engineer (caller via `bal_compute()`), FW engineer (fault/watchdog interface), QA engineer (V&V), safety engineer (Class B audit).

### 1.2 References

| ID | Document | Relevance |
|----|----------|-----------|
| [SRS] | V-SMASH-SW-BAL_SRS_v1.0.md | Requirements baseline (55 requirements) |
| [PP] | V-SMASH-SW-BAL_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [AI-SAD] | V-SMASH-SW-AI_SAD_v1.0.md | Coordinator design (COORD-1), `bal_compute()` API contract (§14), ai_output_t struct |
| [AI-SRS] | V-SMASH-SW-AI_SRS_v1.0.md | `ai_output_t` / `ai_frame_output_t` interface (§3.10.2) |
| [FW-SAD] | V-SMASH-SW-FW_SAD_v1.0.md | FW-API contracts (§7), FSM states (§4), fault table (§4.4), watchdog API |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0.md | Variant matrix, SW envelope |
| [SG3] | V-SMASH_SG3_Requirements_Reconciliation_v1.0.md | Power budget, detection range conditioning, lead accuracy envelope |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0.md | §2.3 SW-BAL standards |

### 1.3 QC Gate FLAG Resolution Index

| SRS FLAG | Issue | Resolution in SAD |
|----------|-------|-------------------|
| FLAG-10 | Local maintainability — all toolchain import-only | §14 — acknowledged; MISRA C + pure C99 minimizes vendor lock-in. Algorithm is platform-portable (no GPU dependency). |
| FLAG-12 | `MAX_LEAD_MRAD = 50.0` derivation deferred to SAD | §7.1 — Formal derivation from LUT analysis, display FOV constraint, and weapon engagement doctrine. Value 50.0 mrad confirmed. |

---

## 2. Architecture Overview

### 2.1 System Context

SW-BAL runs as a synchronous function call within the SW-AI pipeline thread. It does **not** have its own thread. The AI coordinator calls `bal_compute()` once per frame for the highest-confidence gated detection, receives the result synchronously, and merges it into the overlay for `fw_display_render()`.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SW-AI PIPELINE THREAD                               │
│                                                                        │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌──────────────┐  │
│  │AI-CAP  │→ │AI-DET  │→ │AI-GATE │→ │AI-TRACK│→ │ AI-COORD     │  │
│  │        │  │        │  │        │  │        │  │              │  │
│  │        │  │        │  │        │  │        │  │  ┌─────────┐ │  │
│  │        │  │        │  │        │  │        │  │  │bal_     │ │  │
│  │        │  │        │  │        │  │        │  │  │compute()│ │  │
│  │        │  │        │  │        │  │        │  │  │ ≤2 ms   │ │  │
│  │        │  │        │  │        │  │        │  │  └────┬────┘ │  │
│  │        │  │        │  │        │  │        │  │       │      │  │
│  │        │  │        │  │        │  │        │  │  overlay_t   │  │
│  └────────┘  └────────┘  └────────┘  └────────┘  └──────┬───────┘  │
│                                                          │          │
│  ─────────────────────────────────────── FW-API ─────────┼───────── │
│                                                          │          │
│                                          fw_display_render(&overlay) │
└─────────────────────────────────────────────────────────────────────┘
```

**Why no separate thread?**

| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Separate BAL thread** | Decoupled, independent watchdog | Thread sync overhead, latency penalty (queue/wait), ≤2 ms compute doesn't justify thread cost | Rejected |
| **Inline synchronous call** | Zero latency overhead, simple API, no synchronization primitives needed | BAL blocks AI pipeline (but only ≤2 ms of 33 ms budget) | **SELECTED (BAL-1)** |

The BAL computation (range estimate + LUT lookup + bounds check) completes in ≤2 ms on ARM Cortex-A78. This is <6% of the 33 ms frame budget. Thread creation overhead alone would exceed the computation time.

### 2.2 Pipeline Architecture

```
ai_output_t (from AI-COORD, single highest-confidence detection)
       │
       ▼ INPUT VALIDATION
       │  - confidence ∈ [0.0, 1.0]?
       │  - angular_size_mrad > 0?
       │  - target_class recognized?
       │  → If invalid: return BAL_ERR_INVALID_INPUT (-1)
       │
       ▼ BAL-SIZE (§3)
       │  target_class → physical_size_m
       │  4-entry const table, O(1) lookup
       │  → physical_size_m
       │
       ▼ BAL-RANGE (§4)
       │  range_m = (physical_size_m × FOCAL_LENGTH_PX) / apparent_size_px
       │  EMA smoothing (α = 0.3) per track_id
       │  Clamped to [30, 300] m
       │  → range_est_m, range_valid
       │
       ▼ BAL-TRACK (§5)
       │  4-state Kalman: [ang_pos_x, ang_pos_y, ang_vel_x, ang_vel_y]
       │  Per-track filter (up to 10)
       │  Innovation gate: reject >3σ outliers
       │  → filtered_angular_vel_dps, filtered_angular_dir_deg
       │
       ▼ BAL-LEAD (§6)
       │  Bilinear interpolation in 4×7 LUT
       │  Input: (range_est_m, filtered_angular_vel_dps)
       │  → lead_offset_x_mrad, lead_offset_y_mrad, lead_magnitude_mrad
       │
       ▼ BAL-BOUNDS (§7)
       │  Check 1: |lead| > MAX_LEAD_MRAD (50.0)? → COMPUTE FAULT
       │  Check 2: |Δlead| > JUMP_LIMIT_MRAD (15.0)? → suppress 1 frame
       │  Check 3: range_valid == 0? → suppress lead, "RANGE?" message
       │  Check 4: FSM in fault/init/shutdown? → suppress lead
       │  → valid, est_indicator, range_warning
       │
       ▼ BAL-CALIB (§8)
       │  Apply bore-sight: display = lead + factory_offset
       │  Convert mrad → pixel coordinates
       │  → dot_x, dot_y
       │
       ▼ OUTPUT
       │  Populate bal_output_t
       │  Return 0 (success) or error code
```

### 2.3 Timing Budget

| Stage | WCET (µs) | Notes |
|-------|-----------|-------|
| Input validation | 5 | Branch checks, no computation |
| BAL-SIZE | 5 | Table lookup (4 entries) |
| BAL-RANGE | 30 | Division + EMA + bounds check |
| BAL-TRACK | 800 | Kalman predict + update (4×4 matrices, single track) |
| BAL-LEAD | 50 | Bilinear interpolation (4 multiplies + bounds) |
| BAL-BOUNDS | 20 | Magnitude + jump + range checks |
| BAL-CALIB | 15 | Offset addition + mrad→pixel conversion |
| **Total (single detection)** | **≤925 µs** | Well within 20 ms budget (SWR-BAL-P01) |
| Worst case (10 tracks × Kalman) | ≤8,500 µs | 10 Kalman updates + 1 LUT lookup (only best detection gets lead) |

**Note:** Only the highest-confidence detection triggers the full pipeline including LUT lookup and overlay output. All 10 tracks receive Kalman updates (to maintain filter state), but only one produces a displayed lead dot (SWR-BAL-F71).

---

## 3. BAL-SIZE — Physical Size Lookup Architecture

### 3.1 Implementation

```c
/* bal_size.h — target physical size lookup */

#include "ai_output.h"  /* ai_class_t */
#include "bal_config.h"  /* size #defines */

/**
 * Physical size lookup table.
 * Maps ai_class_t → default physical wingspan/rotor-diameter in meters.
 * Build-time configurable via bal_config.h (SWR-BAL-F02).
 */
static const float BAL_SIZE_TABLE[4] = {
    [AI_CLASS_DRONE_ROTOR]      = BAL_SIZE_DRONE_ROTOR_M,       /* 0.35 m */
    [AI_CLASS_DRONE_FIXED_WING] = BAL_SIZE_DRONE_FIXED_WING_M,  /* 1.00 m */
    [AI_CLASS_BIRD]             = BAL_SIZE_BIRD_M,               /* 0.20 m */
    [AI_CLASS_UNKNOWN]          = BAL_SIZE_UNKNOWN_M,            /* 0.35 m */
};

/**
 * bal_size_lookup — Returns physical size for target class.
 * Returns BAL_SIZE_UNKNOWN_M for any unrecognized class (SWR-BAL-F03).
 */
static inline float bal_size_lookup(ai_class_t cls) {
    if (cls >= 0 && cls < 4) {
        return BAL_SIZE_TABLE[cls];
    }
    return BAL_SIZE_UNKNOWN_M;  /* defensive — unrecognized class */
}
```

**Design rationale:** Designated initializer ensures table correctness at compile time. Static const placement in ROM (no RAM cost). Inline eliminates function call overhead.

### 3.2 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F01 | `BAL_SIZE_TABLE` with 4 entries |
| SWR-BAL-F02 | Values from `bal_config.h` `#define`s |
| SWR-BAL-F03 | Bounds check + default return |

---

## 4. BAL-RANGE — Monocular Range Estimation Architecture

### 4.1 Range Computation

```c
/* bal_range.h — monocular range estimation */

#include "bal_constants.h"  /* FOCAL_LENGTH_PX, MRAD_PER_PX */
#include "bal_config.h"     /* RANGE_MIN_M, RANGE_MAX_M, RANGE_ALPHA */

typedef struct {
    float    prev_range_m;       /* previous smoothed range */
    uint32_t prev_track_id;      /* track ID for smoother state */
    bool     initialized;        /* false until first estimate for this track */
} bal_range_state_t;

typedef struct {
    float   range_est_m;         /* smoothed, clamped range estimate */
    bool    range_valid;         /* true if within [RANGE_MIN_M, RANGE_MAX_M] */
    float   raw_range_m;         /* pre-clamp, pre-smooth (for diagnostics) */
} bal_range_result_t;

/**
 * bal_range_estimate — Compute range from monocular angular size.
 *
 * Formula: range_m = (physical_size_m × FOCAL_LENGTH_PX) / apparent_size_px
 * Where: apparent_size_px = angular_size_mrad / MRAD_PER_PX
 *
 * Applies EMA smoothing (α = RANGE_ALPHA) per track.
 * Resets smoother on track_id change or reacquired flag (SWR-BAL-F13).
 */
int bal_range_estimate(bal_range_state_t *state,
                       float physical_size_m,
                       float angular_size_mrad,
                       uint32_t track_id,
                       bool reacquired,
                       bal_range_result_t *result);
```

### 4.2 EMA Smoothing Logic

```c
/* bal_range.c — smoothing implementation */

int bal_range_estimate(bal_range_state_t *state,
                       float physical_size_m,
                       float angular_size_mrad,
                       uint32_t track_id,
                       bool reacquired,
                       bal_range_result_t *result) {

    /* Defensive: angular_size must be > 0 (division by zero, SWR-BAL-I04) */
    if (angular_size_mrad <= 0.0f) {
        return BAL_ERR_INVALID_INPUT;
    }

    /* Convert angular_size_mrad to pixels */
    float apparent_size_px = angular_size_mrad / MRAD_PER_PX;

    /* Monocular range formula (SWR-BAL-F10) */
    float raw_range = (physical_size_m * FOCAL_LENGTH_PX) / apparent_size_px;
    result->raw_range_m = raw_range;

    /* Reset smoother on track change or reacquisition (SWR-BAL-F13) */
    if (track_id != state->prev_track_id || reacquired || !state->initialized) {
        state->prev_range_m = raw_range;
        state->prev_track_id = track_id;
        state->initialized = true;
    }

    /* EMA smoothing (SWR-BAL-F12): smoothed = α × raw + (1−α) × prev */
    float smoothed = RANGE_ALPHA * raw_range +
                     (1.0f - RANGE_ALPHA) * state->prev_range_m;
    state->prev_range_m = smoothed;

    /* Clamp to [30, 300] m (SWR-BAL-F11) */
    if (smoothed < RANGE_MIN_M || smoothed > RANGE_MAX_M) {
        result->range_est_m = fclampf(smoothed, RANGE_MIN_M, RANGE_MAX_M);
        result->range_valid = false;  /* RANGE_OUT_OF_BOUNDS */
    } else {
        result->range_est_m = smoothed;
        result->range_valid = true;
    }

    return 0;
}

static inline float fclampf(float v, float lo, float hi) {
    return (v < lo) ? lo : (v > hi) ? hi : v;
}
```

### 4.3 Range Accuracy Analysis

Per [SG3] Issue 3 and SRS §4.4:

| Range (m) | Apparent size (drone-rotor, 0.35 m) | Estimation error (±30%) | Impact on lead |
|-----------|-------------------------------------|------------------------|-|
| 50 | 63.8 px | ±15 m | ±1.9 mrad (TOF error) |
| 100 | 31.9 px | ±30 m | ±3.9 mrad |
| 150 | 21.3 px | ±45 m | ±6.0 mrad |
| 200 | 16.0 px | ±60 m | ±8.2 mrad |

**Interpretation:** Range error is the dominant error source. At 200 m, ±30% range error propagates to ~±8 mrad lead error — well above the 1.0 mrad primary spec. This is why [SG3] conditions lead accuracy to the envelope: the 1.0 mrad target applies only within the primary envelope (≤150 m, ≤10 deg/s), where the monocular range limitation is acknowledged.

### 4.4 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F10 | Range formula in `bal_range_estimate()` |
| SWR-BAL-F11 | Clamp + `range_valid` flag |
| SWR-BAL-F12 | EMA with α = 0.3 |
| SWR-BAL-F13 | Reset on track_id change / reacquired |

---

## 5. BAL-TRACK — Kalman Tracking Filter Design

### 5.1 Why a Separate Kalman Filter? (Decision BAL-2)

SW-AI's AI-TRACK and SW-BAL's BAL-TRACK serve fundamentally different purposes:

| Aspect | AI-TRACK (in SW-AI) | BAL-TRACK (in SW-BAL) |
|--------|---------------------|----------------------|
| **Domain** | Pixel space (cx, cy, w, h, vx, vy) | Angular space (θx, θy, ωx, ωy) in mrad |
| **Purpose** | Visual association — keep track_id stable across frames | Angular velocity smoothing — reject detection jitter before lead computation |
| **State dim** | 6-DOF (position + size + velocity in pixels) | 4-DOF (angular position + angular velocity in mrad) |
| **Consumer** | AI-GATE (per-track confidence), AI-COORD (bbox rendering) | BAL-LEAD (lead LUT input) |
| **Tolerance** | Can coast ≤5 frames with pure prediction | Must not introduce lead jitter — smooth velocity is critical |

**Could we reuse AI-TRACK's angular velocity output directly?** AI-TRACK computes angular velocity from frame-to-frame pixel displacement (see [AI-SAD] §8.4). This raw velocity has frame-to-frame noise of ±2–5 deg/s due to detection bbox jitter. Feeding this directly into the LUT would produce ±2–10 mrad lead jitter (range-dependent), which is visually distracting and degrades aiming.

BAL-TRACK's Kalman filter in angular space specifically smooths this velocity with a proper noise model, producing stable lead updates even when individual detections jitter.

**Decision: Separate Kalman filters (BAL-2).** The cost is ~800 µs per track per frame — acceptable within the 20 ms budget.

### 5.2 State Vector and Model

**State vector:** `x = [θx, θy, ωx, ωy]` where θ is angular position (mrad from sensor center) and ω is angular velocity (mrad/s).

**Constant-velocity transition model (SWR-BAL-F20):**

```
x(k+1) = F × x(k) + w(k)

    ┌ 1  0  dt  0  ┐
F = │ 0  1  0   dt │
    │ 0  0  1   0  │
    └ 0  0  0   1  ┘

where dt = 1/30 s (frame period) = 0.0333 s
```

**Measurement model:** We observe angular position only (from detection bbox center converted to mrad):

```
z(k) = H × x(k) + v(k)

    ┌ 1  0  0  0 ┐
H = │ 0  1  0  0 │
    └            ┘
```

### 5.3 Filter Implementation

```c
/* bal_track.h — BAL Kalman tracking filter */

#include <stdint.h>
#include <stdbool.h>

#define BAL_TRACK_STATE_DIM  4   /* θx, θy, ωx, ωy */
#define BAL_TRACK_MEAS_DIM   2   /* θx, θy (observed) */
#define BAL_TRACK_MAX       10   /* matches ai_frame_output_t max */
#define BAL_TRACK_MAX_COAST 10   /* max consecutive gated rejections before reinit (QC FLAG-07c) */

typedef struct {
    /* State and covariance */
    float x[BAL_TRACK_STATE_DIM];                              /* state vector */
    float P[BAL_TRACK_STATE_DIM][BAL_TRACK_STATE_DIM];         /* covariance */

    /* Track identity */
    uint32_t track_id;          /* mirrors ai_output_t.track_id */
    bool     active;            /* true = filter initialized for this track */

    /* Innovation gate state */
    float    innov_sq_prev;     /* previous innovation magnitude² (for diagnostics) */
    uint8_t  coast_count;       /* consecutive gated rejections (0 = last update accepted) */

    /* Output (updated each cycle) */
    float    angular_vel_dps;   /* filtered angular velocity magnitude (deg/s) */
    float    angular_dir_deg;   /* filtered angular velocity direction (0–360°) */
} bal_track_t;

typedef struct {
    bal_track_t tracks[BAL_TRACK_MAX];
} bal_tracker_t;

/**
 * bal_track_init — Initialize tracker. Clears all track slots.
 */
void bal_track_init(bal_tracker_t *tracker);

/**
 * bal_track_update — Predict + update for a single detection.
 *
 * If track_id not found: creates new track (SWR-BAL-F21).
 * If reacquired: resets filter (SWR-BAL-F22).
 * Innovation gate: rejects >3σ outliers (SWR-BAL-F23).
 *
 * After update, track->angular_vel_dps and angular_dir_deg are valid.
 */
int bal_track_update(bal_tracker_t *tracker,
                     uint32_t track_id,
                     float meas_theta_x_mrad,
                     float meas_theta_y_mrad,
                     bool reacquired,
                     float dt_s);

/**
 * bal_track_predict_all — Predict-only step for all active tracks.
 * Called once per frame before individual updates.
 */
void bal_track_predict_all(bal_tracker_t *tracker, float dt_s);
```

### 5.4 Kalman Predict Step

```c
/* bal_track.c — predict step */

void bal_track_predict(bal_track_t *t, float dt) {
    /* State prediction: x = F × x */
    /* θx += ωx × dt, θy += ωy × dt, ω unchanged */
    t->x[0] += t->x[2] * dt;  /* θx += ωx × dt */
    t->x[1] += t->x[3] * dt;  /* θy += ωy × dt */
    /* x[2], x[3] (velocities) unchanged — constant velocity model */

    /* Covariance prediction: P = F × P × Fᵀ + Q */
    /* Expand for 4×4 with constant-velocity structure: */
    float p00 = t->P[0][0], p02 = t->P[0][2];
    float p11 = t->P[1][1], p13 = t->P[1][3];
    float p20 = t->P[2][0], p22 = t->P[2][2];
    float p31 = t->P[3][1], p33 = t->P[3][3];

    /* P' = F P Fᵀ + Q (only non-trivial terms) */
    t->P[0][0] = p00 + dt * (p02 + p20) + dt * dt * p22 + KALMAN_Q_POS;
    t->P[0][2] = p02 + dt * p22;
    t->P[2][0] = p20 + dt * p22;

    t->P[1][1] = p11 + dt * (p13 + p31) + dt * dt * p33 + KALMAN_Q_POS;
    t->P[1][3] = p13 + dt * p33;
    t->P[3][1] = p31 + dt * p33;

    t->P[2][2] = p22 + KALMAN_Q_VEL;
    t->P[3][3] = p33 + KALMAN_Q_VEL;
}
```

### 5.5 Kalman Update Step with Innovation Gate

```c
/* bal_track.c — update step with innovation gate (SWR-BAL-F23) */

/**
 * Innovation gate threshold: χ²(2 DOF) at 3σ significance.
 * For 2 measurement dimensions, 3σ gate ≈ χ²₂(p=0.003) = 11.83.
 * Use 18.0 (conservative) — admits 99.97% of valid measurements.
 * Single named constant for the actual comparison threshold (QC FLAG-12b).
 */
#define INNOV_GATE_CHI2_2DOF  18.0f

int bal_track_kalman_update(bal_track_t *t,
                            float z_theta_x,
                            float z_theta_y) {
    /* Innovation: y = z - H × x */
    float y0 = z_theta_x - t->x[0];
    float y1 = z_theta_y - t->x[1];

    /* Innovation covariance: S = H P Hᵀ + R (2×2, diagonal) */
    float S00 = t->P[0][0] + KALMAN_R_MEAS;
    float S11 = t->P[1][1] + KALMAN_R_MEAS;

    /* Innovation gate: check Mahalanobis distance (SWR-BAL-F23) */
    /* For diagonal S: d² = y0²/S00 + y1²/S11 */
    float d_sq = (y0 * y0) / S00 + (y1 * y1) / S11;
    t->innov_sq_prev = d_sq;

    if (d_sq > INNOV_GATE_CHI2_2DOF) {
        /* Reject measurement — predict-only (coast) */
        t->coast_count++;

        /* Coast limit: if too many consecutive rejections, reinitialize
         * from current measurement (QC FLAG-07c). Prevents silent divergence. */
        if (t->coast_count >= BAL_TRACK_MAX_COAST) {
            /* Reinitialize: trust measurement, reset velocity to zero */
            t->x[0] = z_theta_x;
            t->x[1] = z_theta_y;
            t->x[2] = 0.0f;
            t->x[3] = 0.0f;
            memset(t->P, 0, sizeof(t->P));
            t->P[0][0] = KALMAN_R_MEAS;
            t->P[1][1] = KALMAN_R_MEAS;
            t->P[2][2] = KALMAN_Q_VEL * 100.0f;
            t->P[3][3] = KALMAN_Q_VEL * 100.0f;
            t->coast_count = 0;
            fw_log_event(EVT_BAL_TRACK_REINIT);
            return BAL_TRACK_REINIT;
        }

        return BAL_TRACK_GATED;  /* measurement rejected, coasting */
    }

    t->coast_count = 0;  /* measurement accepted — reset coast counter */

    /* Kalman gain: K = P Hᵀ S⁻¹ (simplified for H = [I 0]) */
    /* K is 4×2; only top-left 2×2 and bottom-left 2×2 blocks are non-zero */
    float K00 = t->P[0][0] / S00;
    float K10 = t->P[1][1] / S11;
    float K20 = t->P[2][0] / S00;
    float K31 = t->P[3][1] / S11;

    /* State update: x = x + K × y */
    t->x[0] += K00 * y0;
    t->x[1] += K10 * y1;
    t->x[2] += K20 * y0;  /* velocity updated by position innovation */
    t->x[3] += K31 * y1;

    /* Covariance update: P = (I - K H) P (Joseph form for stability) */
    /* Simplified for diagonal structure: */
    t->P[0][0] *= (1.0f - K00);
    t->P[1][1] *= (1.0f - K10);
    t->P[2][0] *= (1.0f - K00);
    t->P[0][2] *= (1.0f - K00);
    t->P[3][1] *= (1.0f - K10);
    t->P[1][3] *= (1.0f - K10);
    /* Velocity diagonal unchanged by this simplified update */

    return 0;  /* measurement accepted */
}
```

### 5.6 Track Initialization and Reacquisition

```c
/* bal_track.c — new track and reacquisition (SWR-BAL-F21, F22) */

void bal_track_create(bal_track_t *t,
                      uint32_t track_id,
                      float theta_x_mrad,
                      float theta_y_mrad,
                      float init_vel_x,   /* from ai_output_t angular_vel, converted */
                      float init_vel_y) {
    t->track_id = track_id;
    t->active = true;

    /* Initial state: measured position, AI-reported velocity */
    t->x[0] = theta_x_mrad;
    t->x[1] = theta_y_mrad;
    t->x[2] = init_vel_x;   /* mrad/s, from AI angular velocity */
    t->x[3] = init_vel_y;

    /* Initial covariance: high uncertainty on velocity */
    memset(t->P, 0, sizeof(t->P));
    t->P[0][0] = KALMAN_R_MEAS;          /* trust measurement */
    t->P[1][1] = KALMAN_R_MEAS;
    t->P[2][2] = KALMAN_Q_VEL * 100.0f;  /* very uncertain initial velocity */
    t->P[3][3] = KALMAN_Q_VEL * 100.0f;

    t->angular_vel_dps = 0.0f;
    t->angular_dir_deg = 0.0f;
}

void bal_track_reacquire(bal_track_t *t,
                         float theta_x_mrad,
                         float theta_y_mrad) {
    /* SWR-BAL-F22: Reinitialize from current measurement, zero velocity,
     * increase process noise for 5 frames (fast re-convergence) */
    t->x[0] = theta_x_mrad;
    t->x[1] = theta_y_mrad;
    t->x[2] = 0.0f;  /* zero velocity — target may have changed direction */
    t->x[3] = 0.0f;

    /* Increased covariance for fast re-convergence */
    memset(t->P, 0, sizeof(t->P));
    t->P[0][0] = KALMAN_R_MEAS;
    t->P[1][1] = KALMAN_R_MEAS;
    t->P[2][2] = KALMAN_Q_VEL * 500.0f;   /* very high — expect rapid convergence */
    t->P[3][3] = KALMAN_Q_VEL * 500.0f;

    t->angular_vel_dps = 0.0f;
    t->angular_dir_deg = 0.0f;
}
```

### 5.7 Angular Velocity Extraction

After Kalman update, extract velocity for BAL-LEAD:

```c
/* bal_track.c — velocity extraction (SWR-BAL-F26) */

void bal_track_extract_velocity(bal_track_t *t) {
    /* ωx, ωy are in mrad/s — convert to deg/s */
    float omega_x_dps = t->x[2] / 17.4533f;  /* mrad/s → deg/s */
    float omega_y_dps = t->x[3] / 17.4533f;

    t->angular_vel_dps = sqrtf(omega_x_dps * omega_x_dps +
                               omega_y_dps * omega_y_dps);
    t->angular_dir_deg = atan2f(omega_y_dps, omega_x_dps) * (180.0f / (float)M_PI);
    if (t->angular_dir_deg < 0.0f) {
        t->angular_dir_deg += 360.0f;
    }
}
```

### 5.8 Kalman Tuning Parameters

| Parameter | Symbol | Default Value | Rationale | SWR |
|-----------|--------|---------------|-----------|-----|
| Process noise (position) | Q_pos | 0.01 mrad² | Target position changes slowly between frames at 30 Hz | F24 |
| Process noise (velocity) | Q_vel | 1.0 (mrad/s)² | Aerial targets can maneuver — allow velocity to adapt | F24 |
| Measurement noise | R_meas | 2.0 mrad² | ≈1.4 mrad std dev, corresponds to ~13 px bbox jitter at MRAD_PER_PX=0.109 | F25 |
| Innovation gate | χ²₂ ≤ 18.0 (conservative 3σ for 2 DOF) | Rejects gross outliers while accepting 99.97% of valid measurements | F23 |
| Max coast | 10 frames (333 ms at 30 Hz) | Prevents silent Kalman divergence. After 10 consecutive rejections, track reinitializes from current measurement. | QC FLAG-07c |

**Tuning protocol (SW-Phase 3):** Same methodology as [AI-SAD] §8.6 — collect drone sled data, grid search Q/R, validate angular velocity error ≤10% after ≥5 frames. All Q/R values are compile-time configurable via `bal_config.h` (SWR-BAL-F24, F25).

### 5.9 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F20 | 4-state constant-velocity model |
| SWR-BAL-F21 | `bal_track_create()` — init from measurement + AI velocity |
| SWR-BAL-F22 | `bal_track_reacquire()` — reset, zero velocity, high covariance |
| SWR-BAL-F23 | Innovation gate (Mahalanobis d² ≤ 18 for 2-DOF, 3σ) |
| SWR-BAL-F24 | Q diagonal from `bal_config.h` |
| SWR-BAL-F25 | R diagonal from `bal_config.h` |
| SWR-BAL-F26 | `bal_track_extract_velocity()` → angular_vel_dps, angular_dir_deg |
| SWR-BAL-F27 | `BAL_TRACK_MAX = 10`, array of independent filters |

---

## 6. BAL-LEAD — Ballistic LUT Architecture

### 6.1 LUT Storage Format (Decision BAL-4)

```c
/* bal_lut.h — ballistic lead lookup table */

/**
 * LUT: lead_angle_mrad = f(range_m, angular_vel_dps)
 * 4 range bins × 7 velocity bins = 28 entries (SWR-BAL-F31)
 * Compile-time const, placed in ROM (SWR-BAL-F34)
 */

#define BAL_LUT_RANGE_N   4
#define BAL_LUT_VEL_N     7

static const float BAL_LUT_RANGE_GRID[BAL_LUT_RANGE_N] = {
    50.0f, 100.0f, 150.0f, 200.0f
};

static const float BAL_LUT_VEL_GRID[BAL_LUT_VEL_N] = {
    0.0f, 5.0f, 10.0f, 15.0f, 20.0f, 25.0f, 30.0f
};

#if defined(BAL_LUT_7_62x39)

/**
 * 7.62×39mm M43 Ball lead angles (mrad)
 * Computed from: lead_mrad = angular_vel_rad/s × TOF_s × 1000
 * TOF from G1 drag model (BC=0.285, V₀=715 m/s)
 * See [SRS] §4.2, §4.3 for derivation
 *
 * Row index = range bin, Column index = velocity bin
 */
static const float BAL_LUT_7_62x39[BAL_LUT_RANGE_N][BAL_LUT_VEL_N] = {
    /* range\vel   0     5     10    15    20    25    30  deg/s */
    /* 50 m */  {  0.0f,  6.3f, 12.6f, 18.8f, 25.1f, 31.4f, 37.7f },
    /* 100 m */ {  0.0f, 12.9f, 25.8f, 38.8f, 51.7f, 64.6f, 77.5f },
    /* 150 m */ {  0.0f, 19.9f, 39.8f, 59.7f, 79.6f, 99.5f,119.4f },
    /* 200 m */ {  0.0f, 27.3f, 54.7f, 82.0f,109.3f,136.7f,164.0f },
};

#define BAL_LUT_ACTIVE  BAL_LUT_7_62x39

#elif defined(BAL_LUT_12_7x108)

/**
 * 12.7×108mm lead angles — TO BE COMPUTED for V-P variant
 * Placeholder structure; values TBD when V-P enters SW-Phase 1.
 */
static const float BAL_LUT_12_7x108[BAL_LUT_RANGE_N][BAL_LUT_VEL_N];
#define BAL_LUT_ACTIVE  BAL_LUT_12_7x108

#endif
```

**Memory cost:** 28 × 4 bytes = 112 bytes (ROM). Grid arrays: (4+7) × 4 = 44 bytes. Total: 156 bytes. Negligible.

### 6.2 Bilinear Interpolation

```c
/* bal_lut.c — bilinear interpolation (SWR-BAL-F32) */

/**
 * bal_lut_lookup — Bilinear interpolation in 2D LUT.
 *
 * For range > 200 m: extrapolate from 150–200 m slope (SWR-BAL-F32).
 * For angular velocity > 30 deg/s: clamp to 30 deg/s (SWR-BAL-F32).
 *
 * Returns lead angle in mrad (always ≥ 0).
 */
float bal_lut_lookup(float range_m, float angular_vel_dps) {

    /* Clamp angular velocity to LUT range (SWR-BAL-F32) */
    float vel = fclampf(angular_vel_dps, 0.0f,
                        BAL_LUT_VEL_GRID[BAL_LUT_VEL_N - 1]);

    /* Find range bin indices */
    int ri = 0;
    for (int i = 0; i < BAL_LUT_RANGE_N - 1; i++) {
        if (range_m >= BAL_LUT_RANGE_GRID[i]) ri = i;
    }

    /* Handle extrapolation beyond 200 m: use last two bins */
    int ri_lo, ri_hi;
    float range_frac;

    if (range_m <= BAL_LUT_RANGE_GRID[0]) {
        /* Below minimum: use first bin (no negative lead) */
        ri_lo = 0; ri_hi = 0; range_frac = 0.0f;
    } else if (range_m >= BAL_LUT_RANGE_GRID[BAL_LUT_RANGE_N - 1]) {
        /* Above maximum: extrapolate from last two bins (SWR-BAL-F32) */
        ri_lo = BAL_LUT_RANGE_N - 2;
        ri_hi = BAL_LUT_RANGE_N - 1;
        float span = BAL_LUT_RANGE_GRID[ri_hi] - BAL_LUT_RANGE_GRID[ri_lo];
        range_frac = (range_m - BAL_LUT_RANGE_GRID[ri_lo]) / span;
        /* Allow frac > 1.0 for extrapolation */
    } else {
        /* Normal interpolation */
        ri_lo = ri;
        ri_hi = ri + 1;
        float span = BAL_LUT_RANGE_GRID[ri_hi] - BAL_LUT_RANGE_GRID[ri_lo];
        range_frac = (range_m - BAL_LUT_RANGE_GRID[ri_lo]) / span;
    }

    /* Find velocity bin indices */
    int vi_lo = 0, vi_hi = 0;
    float vel_frac = 0.0f;

    for (int i = 0; i < BAL_LUT_VEL_N - 1; i++) {
        if (vel >= BAL_LUT_VEL_GRID[i]) {
            vi_lo = i;
            vi_hi = i + 1;
        }
    }
    if (vi_hi == vi_lo) {
        vi_hi = vi_lo;  /* at grid boundary */
        vel_frac = 0.0f;
    } else {
        float vspan = BAL_LUT_VEL_GRID[vi_hi] - BAL_LUT_VEL_GRID[vi_lo];
        vel_frac = (vel - BAL_LUT_VEL_GRID[vi_lo]) / vspan;
    }

    /* Bilinear interpolation */
    float c00 = BAL_LUT_ACTIVE[ri_lo][vi_lo];
    float c10 = BAL_LUT_ACTIVE[ri_hi][vi_lo];
    float c01 = BAL_LUT_ACTIVE[ri_lo][vi_hi];
    float c11 = BAL_LUT_ACTIVE[ri_hi][vi_hi];

    float c0 = c00 + range_frac * (c10 - c00);  /* interpolate along range */
    float c1 = c01 + range_frac * (c11 - c01);
    float result = c0 + vel_frac * (c1 - c0);     /* interpolate along velocity */

    return (result > 0.0f) ? result : 0.0f;
}
```

### 6.3 Lead Direction Computation

```c
/* bal_lead.c — lead direction (SWR-BAL-F33) */

/**
 * bal_lead_compute — Compute lead vector from magnitude and target motion direction.
 *
 * Lead is applied opposite to target motion (SWR-BAL-F33):
 * The weapon must aim ahead of the target, so the lead offset is in the
 * direction of target travel.
 *
 * Convention: motion_dir_deg is the direction the target is moving.
 *             Lead vector points in the same direction (aim ahead of target).
 */
void bal_lead_compute(float lead_magnitude_mrad,
                      float motion_dir_deg,
                      float *lead_x_mrad,
                      float *lead_y_mrad) {
    float dir_rad = motion_dir_deg * ((float)M_PI / 180.0f);
    *lead_x_mrad = lead_magnitude_mrad * cosf(dir_rad);
    *lead_y_mrad = lead_magnitude_mrad * sinf(dir_rad);
}
```

### 6.4 LUT Generator Tool

A Python offline tool generates the LUT from ballistic parameters for any ammunition type:

```
tools/
└── generate_lut.py
    Input:  ammunition YAML file (muzzle velocity, bullet mass, BC, drag model)
    Output: C header with const array (copy-paste into bal_lut.h)
    Method: G1 drag model numerical integration → TOF table → lead angle grid
```

This tool runs at build time for new ammunition types (V-X, V-P variants). The 7.62×39mm M43 LUT is pre-computed and verified in the SRS (§4.2, §4.3).

### 6.5 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F30 | `bal_lut_lookup()` with LUT |
| SWR-BAL-F31 | 4×7 grid, values from SRS §4.3 |
| SWR-BAL-F32 | Bilinear interpolation + range extrapolation + velocity clamp |
| SWR-BAL-F33 | `bal_lead_compute()` — direction from filtered velocity |
| SWR-BAL-F34 | `static const` array, `#ifdef VARIANT_xx` selection |
| SWR-BAL-F35 | EST indicator logic (in BAL-BOUNDS §7) |

---

## 7. BAL-BOUNDS — Output Sanity Check Architecture

### 7.1 MAX_LEAD_MRAD Formal Derivation (Resolves SRS FLAG-12)

**Goal:** Derive a physically justified maximum lead angle threshold that distinguishes valid ballistic computation from computational error or unreasonable engagement conditions.

**Constraint 1 — Display physical limit:**

The OLED overlay has a usable display area matching the sensor FOV. At HFOV = 209.4 mrad (12°), the maximum displayable offset from the target center to the lead dot is constrained by the display width:

```
Max displayable offset = HFOV_MRAD / 2 = 104.7 mrad (half-width)
```

A lead dot beyond ~100 mrad would place the indicator near the edge of the sensor FOV, far from the target. Beyond this, the lead dot exits the FOV entirely — physically impossible to display.

**Constraint 2 — Weapon engagement doctrine:**

Practical engagement with a shoulder-fired automatic weapon against a small aerial target requires the shooter to maintain visual contact with the target. If the lead angle exceeds ~50 mrad (2.9°), the lead dot is displaced by:

```
50.0 mrad × PX_PER_MRAD = 50.0 × 9.17 = 459 pixels from target center
```

At 1920 px sensor width, this is 24% of the horizontal FOV. A larger lead would require the shooter to split attention between the target (for tracking) and the lead indicator (for aiming) across a significant angular separation — degrading engagement effectiveness.

**Constraint 3 — LUT analysis:**

From the 7.62×39mm M43 LUT ([SRS] §4.3):

| Engagement condition | Lead (mrad) | Within MAX_LEAD? |
|---------------------|-------------|-------------------|
| 150 m, 10 deg/s (primary envelope limit) | 39.8 | YES (39.8 < 50.0) |
| 100 m, 15 deg/s | 38.8 | YES |
| 50 m, 30 deg/s | 37.7 | YES |
| 100 m, 20 deg/s | 51.7 | NO — triggers FAULT |
| 150 m, 15 deg/s | 59.7 | NO — triggers FAULT |
| 200 m, 10 deg/s | 54.7 | NO — triggers FAULT |

**Analysis:** MAX_LEAD = 50.0 mrad permits all realistic close-range engagements (≤100 m at ≤15 deg/s, ≤150 m at ≤10 deg/s). Beyond this, combinations that exceed 50 mrad represent high-speed crossing targets at medium range — conditions where:
1. Monocular range error (±30%) dominates lead accuracy
2. The engagement is marginal (fast-crossing at 100+ m is extremely difficult)
3. The EST indicator is already active (outside primary envelope)

**Decision (BAL-3): MAX_LEAD_MRAD = 50.0 mrad CONFIRMED.**

This value:
- Fully covers the primary envelope (≤150 m / ≤10 deg/s)
- Permits moderate extended engagements (≤100 m / ≤15 deg/s)
- Correctly faults unrealistic conditions (fast crossing at long range)
- Keeps the lead dot within 24% of display width from target center
- Acts as a safety net against Kalman divergence or LUT extrapolation error

### 7.2 Bounds Check Implementation

```c
/* bal_bounds.h — output sanity checks */

#include "bal_config.h"  /* MAX_LEAD_MRAD, JUMP_LIMIT_MRAD, etc. */

typedef struct {
    float    prev_lead_x_mrad;   /* previous frame lead X (for jump check) */
    float    prev_lead_y_mrad;   /* previous frame lead Y */
    bool     prev_valid;          /* was previous frame lead valid? */
    uint8_t  range_valid_streak;  /* consecutive valid range frames (for hysteresis) */
    uint8_t  jump_suppress_count; /* frames remaining in jump suppression */
} bal_bounds_state_t;

typedef struct {
    bool    valid;           /* true = lead is displayable */
    bool    est_indicator;   /* true = outside primary envelope */
    bool    range_warning;   /* true = RANGE? message needed */
    bool    compute_fault;   /* true = BAL_FAULT reported to FW */
} bal_bounds_result_t;

/**
 * bal_bounds_check — Apply all safety bounds checks.
 *
 * Checks (in order):
 * 1. FSM state (SWR-BAL-S06) — must be READY/DETECTED/POST_SHOT
 * 2. Range valid (SWR-BAL-F42) — suppress + RANGE? if out-of-bounds
 * 3. Lead magnitude (SWR-BAL-F40) — COMPUTE FAULT if > MAX_LEAD_MRAD
 * 4. Lead jump (SWR-BAL-F41) — suppress 1 frame if Δlead > JUMP_LIMIT
 * 5. EST indicator (SWR-BAL-F35) — set if outside primary envelope
 */
int bal_bounds_check(bal_bounds_state_t *state,
                     float lead_x_mrad,
                     float lead_y_mrad,
                     float lead_magnitude_mrad,
                     float range_est_m,
                     bool range_valid,
                     float angular_vel_dps,
                     bal_bounds_result_t *result);
```

### 7.3 Bounds Logic Detail

```c
/* bal_bounds.c — safety bounds implementation */

int bal_bounds_check(bal_bounds_state_t *state,
                     float lead_x_mrad,
                     float lead_y_mrad,
                     float lead_magnitude_mrad,
                     float range_est_m,
                     bool range_valid,
                     float angular_vel_dps,
                     bal_bounds_result_t *result) {

    result->valid = true;
    result->est_indicator = false;
    result->range_warning = false;
    result->compute_fault = false;

    /* Check 1: FSM state (SWR-BAL-S06, SWR-BAL-F43) */
    fsm_state_t fsm = fw_get_fsm_state();
    if (fsm != FSM_READY && fsm != FSM_DETECTED && fsm != FSM_POST_SHOT) {
        result->valid = false;
        return 0;
    }

    /* Check 2: Range validity with 3-frame hysteresis (SWR-BAL-F42) */
    if (!range_valid) {
        state->range_valid_streak = 0;
        result->valid = false;
        result->range_warning = true;
        return 0;
    } else {
        if (state->range_valid_streak < 3) {
            state->range_valid_streak++;
        }
        /* If recovering from RANGE?, require 3 consecutive valid frames */
        if (result->range_warning && state->range_valid_streak < 3) {
            /* Still in hysteresis recovery */
            result->valid = false;
            result->range_warning = true;
            return 0;
        }
    }

    /* Check 3: Lead magnitude (SWR-BAL-F40) — SAFETY-RELATED */
    if (lead_magnitude_mrad > MAX_LEAD_MRAD) {
        fw_report_fault(FAULT_BAL);  /* COMPUTE FAULT → FSM state 6 */
        result->valid = false;
        result->compute_fault = true;
        return BAL_ERR_COMPUTE_FAULT;
    }

    /* Check 4: Lead jump (SWR-BAL-F41) — SAFETY-RELATED */
    if (state->jump_suppress_count > 0) {
        state->jump_suppress_count--;
        result->valid = false;
        /* Update prev for next frame */
        state->prev_lead_x_mrad = lead_x_mrad;
        state->prev_lead_y_mrad = lead_y_mrad;
        return 0;
    }

    if (state->prev_valid) {
        float dx = lead_x_mrad - state->prev_lead_x_mrad;
        float dy = lead_y_mrad - state->prev_lead_y_mrad;
        float delta_lead = sqrtf(dx * dx + dy * dy);

        if (delta_lead > JUMP_LIMIT_MRAD && angular_vel_dps <= 15.0f) {
            /* Jump without corresponding target motion → suppress 1 frame */
            state->jump_suppress_count = 1;
            result->valid = false;
            /* Log LEAD_JUMP event */
            fw_log_event(EVT_BAL_LEAD_JUMP);
        }
    }

    /* Save state for next frame */
    state->prev_lead_x_mrad = lead_x_mrad;
    state->prev_lead_y_mrad = lead_y_mrad;
    state->prev_valid = true;

    /* Check 5: EST indicator (SWR-BAL-F35) */
    if (range_est_m > 150.0f || angular_vel_dps > 10.0f) {
        result->est_indicator = true;
    }

    return 0;
}
```

### 7.4 Safety Invariant

**All bounds checks run on every frame, unconditionally.** The check order ensures fail-safe behavior:

1. FSM gate runs first — if the system is in any fault/degraded state, lead is suppressed before any computation is examined.
2. COMPUTE FAULT immediately reports to FW-FSM. The FSM enters state 6 and suppresses all combat indicators (FW-SAD §4.3 action a6). BAL does not need to track FSM response — the FW safety layer enforces display blanking independently.
3. Jump suppression is a single-frame hold — if the detection was genuinely a new trajectory, the next frame will produce a consistent lead and suppression lifts.

### 7.5 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F35 | EST indicator when range >150 m OR vel >10 deg/s |
| SWR-BAL-F40 | Magnitude check against MAX_LEAD_MRAD (50.0), `fw_report_fault(FAULT_BAL)` |
| SWR-BAL-F41 | Jump check: Δlead > JUMP_LIMIT_MRAD (15.0) without motion >15 deg/s |
| SWR-BAL-F42 | Range warning: suppress + "RANGE?" + 3-frame hysteresis |
| SWR-BAL-F43 | FSM state gate (only READY/DETECTED/POST_SHOT permitted) |
| SWR-BAL-F44 | Thresholds are `#define` constants |
| SWR-BAL-S01 | Same as F40 — COMPUTE FAULT path |
| SWR-BAL-S02 | Same as F41 — jump suppression |
| SWR-BAL-S03 | Same as F42 — RANGE? display |
| SWR-BAL-S05 | All thresholds are `#define` (build-time constants) |
| SWR-BAL-S06 | FSM gate at pipeline entry |

---

## 8. BAL-CALIB — Bore-Sight Calibration Architecture

### 8.1 Calibration Data Format

```c
/* bal_calib.h — bore-sight calibration loading */

#include <stdint.h>

/** Bore-sight calibration record stored in eMMC */
typedef struct __attribute__((packed)) {
    uint32_t magic;              /* 0x42414C43 ("BALC") */
    uint8_t  version;            /* Record format version (1) */
    uint8_t  reserved[3];        /* Pad to 4-byte alignment */
    float    offset_x_mrad;      /* Horizontal bore-sight offset */
    float    offset_y_mrad;      /* Vertical bore-sight offset */
    uint32_t serial_number;      /* Weapon serial number (traceability) */
    uint32_t calibration_date;   /* Unix timestamp of factory calibration */
    uint16_t crc16;              /* CRC-16/CCITT over bytes 0..19 */
    uint16_t pad;                /* Pad to 24 bytes total */
} bal_calib_record_t;
/* sizeof(bal_calib_record_t) = 24 bytes */

#define BAL_CALIB_MAGIC   0x42414C43u
#define BAL_CALIB_VERSION 1

/**
 * eMMC calibration storage location (QC FLAG-12a).
 * Stored in the FW-HAL calibration partition (partition 3, "cal").
 * Offset 0x0000: FW calibration header (reserved, 256 bytes)
 * Offset 0x0100: BAL bore-sight record (24 bytes)
 * Offset 0x0200: Reserved for future calibration data
 * See FW-HAL partition table: hal_emmc.h §3.2
 */
#define BAL_CALIB_PARTITION  3       /* eMMC partition index ("cal") */
#define BAL_CALIB_OFFSET     0x0100  /* byte offset within calibration partition */

/** Runtime calibration state */
typedef struct {
    float    offset_x_mrad;     /* Active bore-sight X offset */
    float    offset_y_mrad;     /* Active bore-sight Y offset */
    bool     loaded;            /* true if valid calibration loaded */
} bal_calib_state_t;

/**
 * bal_calib_load — Load calibration from eMMC at power-on.
 *
 * Returns 0 on success.
 * If magic/version mismatch or CRC fail: uses (0, 0) default, logs event.
 * Must complete within 100 ms (SWR-BAL-F55).
 */
int bal_calib_load(bal_calib_state_t *state);

/**
 * bal_calib_write — Write calibration to eMMC (factory/depot only).
 *
 * Gated by hal_usb_connected() (SWR-BAL-F54).
 * Returns 0 on success, -1 if USB not connected.
 */
int bal_calib_write(const bal_calib_record_t *record);
```

### 8.2 CRC-16 Implementation

```c
/* bal_calib.c — CRC-16/CCITT (SWR-BAL-F53) */

/**
 * CRC-16/CCITT (polynomial 0x1021, init 0xFFFF)
 * Computed over the first 20 bytes of bal_calib_record_t
 * (everything except crc16 and pad fields)
 */
static uint16_t bal_crc16_ccitt(const uint8_t *data, size_t len) {
    uint16_t crc = 0xFFFFu;
    for (size_t i = 0; i < len; i++) {
        crc ^= (uint16_t)data[i] << 8;
        for (int bit = 0; bit < 8; bit++) {
            if (crc & 0x8000u) {
                crc = (crc << 1) ^ 0x1021u;
            } else {
                crc <<= 1;
            }
        }
    }
    return crc;
}

int bal_calib_load(bal_calib_state_t *state) {
    bal_calib_record_t record;

    /* Read from eMMC calibration partition */
    int rc = hal_emmc_read(BAL_CALIB_OFFSET, &record, sizeof(record));

    if (rc != 0) {
        /* eMMC read failure */
        state->offset_x_mrad = 0.0f;
        state->offset_y_mrad = 0.0f;
        state->loaded = false;
        fw_log_event(EVT_BAL_CALIB_MISSING);
        return 0;  /* not fatal — continue with defaults (SWR-BAL-F52) */
    }

    /* Check magic and version */
    if (record.magic != BAL_CALIB_MAGIC || record.version != BAL_CALIB_VERSION) {
        state->offset_x_mrad = 0.0f;
        state->offset_y_mrad = 0.0f;
        state->loaded = false;
        fw_log_event(EVT_BAL_CALIB_MISSING);
        return 0;
    }

    /* CRC-16 check (SWR-BAL-F53) */
    uint16_t computed_crc = bal_crc16_ccitt((const uint8_t *)&record, 20);
    if (computed_crc != record.crc16) {
        state->offset_x_mrad = 0.0f;
        state->offset_y_mrad = 0.0f;
        state->loaded = false;
        fw_log_event(EVT_BAL_CALIB_CRC_FAIL);
        return 0;
    }

    /* Valid calibration — apply */
    state->offset_x_mrad = record.offset_x_mrad;
    state->offset_y_mrad = record.offset_y_mrad;
    state->loaded = true;
    fw_log_event(EVT_BAL_CALIB_LOADED);
    return 0;
}

int bal_calib_write(const bal_calib_record_t *record) {
    /* Gate: USB diagnostics mode only (SWR-BAL-F54) */
    if (!hal_usb_connected()) {
        return -1;  /* write not permitted */
    }

    return hal_emmc_write(BAL_CALIB_OFFSET, record, sizeof(*record));
}
```

### 8.3 Bore-Sight Application

The bore-sight offset is applied as the final step before pixel conversion:

```c
/* bal_calib.c — offset application (SWR-BAL-F51) */

void bal_calib_apply(const bal_calib_state_t *calib,
                     float lead_x_mrad,
                     float lead_y_mrad,
                     float target_cx_px,
                     float target_cy_px,
                     uint16_t *dot_x,
                     uint16_t *dot_y) {
    /* Apply bore-sight offset in mrad domain */
    float corrected_x = lead_x_mrad + calib->offset_x_mrad;
    float corrected_y = lead_y_mrad + calib->offset_y_mrad;

    /* Convert mrad → pixel offset (SWR-BAL-I11) */
    float offset_x_px = corrected_x * PX_PER_MRAD;  /* 9.17 px/mrad */
    float offset_y_px = corrected_y * PX_PER_MRAD;

    /* Lead dot position = target center + lead offset */
    float dot_x_f = target_cx_px + offset_x_px;
    float dot_y_f = target_cy_px + offset_y_px;

    /* Clamp to sensor bounds */
    *dot_x = (uint16_t)fclampf(dot_x_f, 0.0f, (float)(SENSOR_WIDTH_PX - 1));
    *dot_y = (uint16_t)fclampf(dot_y_f, 0.0f, (float)(SENSOR_HEIGHT_PX - 1));
}
```

### 8.4 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F50 | `bal_calib_load()` at power-on |
| SWR-BAL-F51 | `bal_calib_apply()` — offset_x/y added to lead |
| SWR-BAL-F52 | Default (0, 0) on missing data, log `CALIB_MISSING` |
| SWR-BAL-F53 | CRC-16/CCITT over 20-byte record |
| SWR-BAL-F54 | `hal_usb_connected()` gate on write |
| SWR-BAL-F55 | Load completes within single eMMC read (≤10 ms typical) |

---

## 9. BAL-HEALTH — Module Health Architecture

### 9.1 Watchdog Registration

```c
/* bal_health.c — health monitoring (SWR-BAL-F60) */

static uint32_t bal_wdg_handle = 0;

int bal_health_init(void) {
    /* Register with FW watchdog: 500 ms timeout */
    bal_wdg_handle = fw_register_watchdog(MODULE_BAL, 500);
    if (bal_wdg_handle == 0) {
        return -1;  /* registration failed */
    }
    fw_log_event(EVT_BAL_INIT_OK);
    return 0;
}

/**
 * bal_health_heartbeat — Called after each successful pipeline cycle.
 * Must be called within 500 ms or FW-WDG triggers FAULT.
 */
void bal_health_heartbeat(void) {
    fw_watchdog_heartbeat(bal_wdg_handle);
}
```

**Note:** BAL does not have its own thread, so the heartbeat is called from the AI pipeline thread after `bal_compute()` returns. If `bal_compute()` hangs (e.g., infinite loop in Kalman), the AI thread stalls, AI watchdog fires first (AI_FAULT), and BAL watchdog follows within 500 ms.

### 9.2 Internal Fault Detection

```c
/* bal_health.c — internal fault handler (SWR-BAL-F61) */

typedef enum {
    BAL_FAULT_NONE = 0,
    BAL_FAULT_KALMAN_NAN,
    BAL_FAULT_LUT_INDEX,
    BAL_FAULT_DIV_ZERO,
    BAL_FAULT_COMPUTE,
} bal_fault_code_t;

static bal_fault_code_t bal_active_fault = BAL_FAULT_NONE;

void bal_health_report_fault(bal_fault_code_t code) {
    bal_active_fault = code;
    fw_report_fault(FAULT_BAL);
    fw_log_event_with_data(EVT_BAL_FAULT, (uint32_t)code);
}

bool bal_health_is_faulted(void) {
    return (bal_active_fault != BAL_FAULT_NONE);
}
```

### 9.3 NaN/Inf Guard

Every Kalman update output is checked for NaN before use:

```c
/* bal_track.c — NaN guard */

static inline bool bal_is_finite(float v) {
    /* IEEE 754: NaN and Inf have all-ones exponent */
    return !(isnan(v) || isinf(v));
}

int bal_track_check_state(bal_track_t *t) {
    for (int i = 0; i < BAL_TRACK_STATE_DIM; i++) {
        if (!bal_is_finite(t->x[i])) {
            bal_health_report_fault(BAL_FAULT_KALMAN_NAN);
            return -1;
        }
    }
    return 0;
}
```

### 9.4 Event Log Table

| Event Code | Name | Trigger | Severity |
|-----------|------|---------|----------|
| `EVT_BAL_INIT_OK` | Init success | `bal_health_init()` completes | INFO |
| `EVT_BAL_FAULT` | Internal fault | NaN, LUT error, div-by-zero | ERROR |
| `EVT_BAL_CALIB_LOADED` | Calibration loaded | Valid CRC + magic | INFO |
| `EVT_BAL_CALIB_MISSING` | No calibration data | Missing or corrupt magic/version | WARNING |
| `EVT_BAL_CALIB_CRC_FAIL` | CRC mismatch | Data corruption detected | WARNING |
| `EVT_BAL_RANGE_WARN` | Range out of bounds | range ∉ [30, 300] m | WARNING |
| `EVT_BAL_LEAD_JUMP` | Lead angle jump | Δlead > 15 mrad without motion | WARNING |
| `EVT_BAL_EST_ACTIVE` | EST mode entered | Outside primary envelope | INFO |
| `EVT_BAL_VEL_EXCEEDED` | Velocity >30 deg/s | angular_vel_dps > 30 | WARNING |
| `EVT_BAL_TRACK_REINIT` | Track reinitialized | Coast count exceeded BAL_TRACK_MAX_COAST (10) | WARNING |

### 9.5 Traceability

| SWR | Implementation |
|-----|----------------|
| SWR-BAL-F60 | `bal_health_init()` — watchdog 500 ms |
| SWR-BAL-F61 | `bal_health_report_fault()` — NaN/LUT/div-zero detection |
| SWR-BAL-F62 | Event codes table (9 events) |

---

## 10. `bal_compute()` — Public API Implementation

### 10.1 API Contract (per [AI-SAD] §14)

```c
/* bal_api.h — public interface consumed by AI-COORD */

#include "ai_output.h"
#include "bal_output.h"

#define BAL_OK                  0
#define BAL_ERR_INVALID_INPUT  -1
#define BAL_ERR_COMPUTE_FAULT  -2
#define BAL_ERR_FAULTED        -3   /* module in fault state — no output */

/**
 * bal_init — Initialize BAL module.
 * Call once at boot. Loads calibration, initializes tracker, registers watchdog.
 * Must complete within ≤200 ms (calibration load ≤100 ms + init overhead).
 */
int bal_init(void);

/**
 * bal_compute — Compute ballistic lead for a single detection.
 *
 * Called by AI-COORD for the highest-confidence gated detection per frame.
 * Synchronous: completes within ≤2 ms (WCET ≤20 ms budget).
 * Thread-safe: called from AI pipeline thread only (single-threaded access).
 *
 * @param detection  Pointer to AI detection output (ai_output_t)
 * @param result     Pointer to BAL output struct (bal_output_t)
 * @return BAL_OK (0) on success, negative on error
 */
int bal_compute(const ai_output_t *detection, bal_output_t *result);

/**
 * bal_update_tracks — Update all Kalman filters for all detections in a frame.
 * Called once per frame before bal_compute() to keep filter state current.
 *
 * @param frame  Full frame output from AI (all detections, not just best)
 * @param dt_s   Time since last frame (seconds)
 */
void bal_update_tracks(const ai_frame_output_t *frame, float dt_s);
```

### 10.2 Implementation

```c
/* bal_api.c — main API implementation */

/* Module-level state (initialized once at boot, no dynamic allocation) */
static bal_tracker_t      s_tracker;
static bal_range_state_t  s_range_states[BAL_TRACK_MAX];
static bal_bounds_state_t s_bounds_state;
static bal_calib_state_t  s_calib;
static bool               s_initialized = false;

int bal_init(void) {
    /* Initialize tracker */
    bal_track_init(&s_tracker);

    /* Initialize range smoothers */
    memset(s_range_states, 0, sizeof(s_range_states));

    /* Initialize bounds state */
    memset(&s_bounds_state, 0, sizeof(s_bounds_state));

    /* Load bore-sight calibration from eMMC (SWR-BAL-F50) */
    bal_calib_load(&s_calib);

    /* Register watchdog (SWR-BAL-F60) */
    if (bal_health_init() != 0) {
        return -1;
    }

    s_initialized = true;
    return 0;
}

void bal_update_tracks(const ai_frame_output_t *frame, float dt_s) {
    if (!s_initialized || bal_health_is_faulted()) return;

    /* Clamp count (SWR-BAL-I02) */
    int count = frame->count;
    if (count > 10) {
        count = 10;
        fw_log_event(EVT_BAL_AI_COUNT_OVERFLOW);
    }

    /* Predict all active tracks forward */
    bal_track_predict_all(&s_tracker, dt_s);

    /* Update each detection's Kalman filter */
    for (int i = 0; i < count; i++) {
        const ai_output_t *det = &frame->detections[i];

        /* Validate confidence (SWR-BAL-I03) */
        if (det->confidence < 0.0f || det->confidence > 1.0f) {
            fw_log_event(EVT_BAL_AI_CONFIDENCE_INVALID);
            continue;
        }

        /* Convert bbox center to angular position (mrad from sensor center) */
        float theta_x = (det->bbox_cx - SENSOR_WIDTH_PX / 2.0f) * MRAD_PER_PX;
        float theta_y = (det->bbox_cy - SENSOR_HEIGHT_PX / 2.0f) * MRAD_PER_PX;

        /* Update or create Kalman filter for this track */
        bal_track_update(&s_tracker,
                         det->track_id,
                         theta_x, theta_y,
                         det->reacquired,
                         dt_s);
    }
}

int bal_compute(const ai_output_t *detection, bal_output_t *result) {
    /* Pre-clear result */
    memset(result, 0, sizeof(*result));

    /* Check module health */
    if (!s_initialized) return BAL_ERR_FAULTED;
    if (bal_health_is_faulted()) return BAL_ERR_FAULTED;

    /* --- INPUT VALIDATION --- */

    /* Validate angular_size (SWR-BAL-I04) */
    if (detection->angular_size_mrad <= 0.0f) {
        fw_log_event(EVT_BAL_AI_ANGSIZE_ZERO);
        return BAL_ERR_INVALID_INPUT;
    }

    /* Validate confidence (SWR-BAL-I03) */
    if (detection->confidence < 0.0f || detection->confidence > 1.0f) {
        return BAL_ERR_INVALID_INPUT;
    }

    /* Echo input fields for traceability */
    result->track_id = detection->track_id;
    result->target_class = detection->target_class;
    result->confidence = detection->confidence;

    /* --- BAL-SIZE (§3) --- */
    float phys_size = bal_size_lookup(detection->target_class);
    result->physical_size_m = phys_size;

    /* --- BAL-RANGE (§4) --- */
    int track_idx = bal_track_find(&s_tracker, detection->track_id);
    bal_range_state_t *rng = (track_idx >= 0)
        ? &s_range_states[track_idx]
        : &s_range_states[0];  /* fallback — should not happen for gated det */

    bal_range_result_t range_result;
    int rc = bal_range_estimate(rng, phys_size,
                                detection->angular_size_mrad,
                                detection->track_id,
                                detection->reacquired,
                                &range_result);
    if (rc != 0) return BAL_ERR_INVALID_INPUT;

    result->range_est_m = range_result.range_est_m;
    result->range_valid = range_result.range_valid ? 1 : 0;

    /* --- BAL-TRACK velocity extraction (§5) --- */
    float filtered_vel_dps = 0.0f;
    float filtered_dir_deg = 0.0f;
    if (track_idx >= 0) {
        bal_track_t *trk = &s_tracker.tracks[track_idx];
        bal_track_extract_velocity(trk);

        /* NaN guard (§9.3) */
        if (bal_track_check_state(trk) != 0) {
            return BAL_ERR_COMPUTE_FAULT;
        }

        filtered_vel_dps = trk->angular_vel_dps;
        filtered_dir_deg = trk->angular_dir_deg;

        /* Velocity limit check (SWR-BAL-P12) */
        if (filtered_vel_dps > 30.0f) {
            result->valid = 0;
            fw_log_event(EVT_BAL_VEL_EXCEEDED);
            return BAL_OK;  /* not a fault, just outside tracking range */
        }
    }

    result->filtered_angular_vel_dps = filtered_vel_dps;
    result->filtered_angular_dir_deg = filtered_dir_deg;

    /* --- BAL-LEAD (§6) --- */
    float lead_mag = bal_lut_lookup(range_result.range_est_m, filtered_vel_dps);
    float lead_x_mrad, lead_y_mrad;
    bal_lead_compute(lead_mag, filtered_dir_deg, &lead_x_mrad, &lead_y_mrad);

    result->lead_offset_x_mrad = lead_x_mrad;
    result->lead_offset_y_mrad = lead_y_mrad;
    result->lead_magnitude_mrad = lead_mag;

    /* --- BAL-BOUNDS (§7) --- */
    bal_bounds_result_t bounds;
    rc = bal_bounds_check(&s_bounds_state,
                          lead_x_mrad, lead_y_mrad, lead_mag,
                          range_result.range_est_m,
                          range_result.range_valid,
                          filtered_vel_dps,
                          &bounds);

    result->valid = bounds.valid ? 1 : 0;
    result->est_indicator = bounds.est_indicator ? 1 : 0;
    result->range_warning = bounds.range_warning ? 1 : 0;

    if (rc == BAL_ERR_COMPUTE_FAULT) {
        return BAL_ERR_COMPUTE_FAULT;
    }

    /* --- BAL-CALIB (§8) — bore-sight correction → pixel coords --- */
    if (bounds.valid) {
        bal_calib_apply(&s_calib,
                        lead_x_mrad, lead_y_mrad,
                        detection->bbox_cx, detection->bbox_cy,
                        &result->dot_x, &result->dot_y);
    }

    /* Heartbeat — pipeline completed successfully */
    bal_health_heartbeat();

    return BAL_OK;
}
```

### 10.3 Calling Convention (from AI-COORD)

Per [AI-SAD] §14.2, the AI coordinator calls BAL as follows:

```c
/* ai_coord.c — BAL integration (excerpt) */

void ai_coord_assemble(const ai_frame_output_t *gated) {
    overlay_t overlay;
    memset(&overlay, 0, sizeof(overlay));

    /* Update all BAL Kalman filters (all detections) */
    float dt_s = /* ... frame period from timestamps ... */;
    bal_update_tracks(gated, dt_s);

    if (gated->count == 0) {
        overlay.dot_color = DOT_COLOR_OFF;
        fw_display_render(&overlay);
        return;
    }

    /* Select best detection (highest confidence) */
    const ai_output_t *best = ai_select_best(gated);

    /* Compute BAL */
    bal_output_t bal_out;
    int rc = bal_compute(best, &bal_out);

    /* Merge into overlay */
    if (rc == BAL_OK && bal_out.valid) {
        overlay.dot_x = bal_out.dot_x;
        overlay.dot_y = bal_out.dot_y;
        overlay.dot_color = /* gate_state color */;
    } else {
        /* Fallback: show detection box without lead ([AI-SAD] §14.2) */
        overlay.dot_x = (uint16_t)best->bbox_cx;
        overlay.dot_y = (uint16_t)best->bbox_cy;
        overlay.dot_color = DOT_COLOR_OFF;

        if (rc == BAL_ERR_COMPUTE_FAULT) {
            /* "NO LEAD" message per [AI-SAD] FLAG-07a */
            snprintf(overlay.messages[2], OVERLAY_MSG_LEN, "NO LEAD");
        }
    }

    if (bal_out.range_warning) {
        snprintf(overlay.messages[0], OVERLAY_MSG_LEN, "RANGE?");
    }
    if (bal_out.est_indicator) {
        snprintf(overlay.messages[1], OVERLAY_MSG_LEN, "EST");
    }

    fw_display_render(&overlay);
}
```

---

## 11. Memory Budget

All memory is pre-allocated at boot. No `malloc`/`new` after initialization.

| Resource | Size | Allocation |
|----------|------|-----------|
| `bal_tracker_t` (10 tracks × 4-state Kalman) | 10 × ~120 B = 1.2 KB | Static |
| `bal_range_state_t[10]` | 10 × 12 B = 120 B | Static |
| `bal_bounds_state_t` | 24 B | Static |
| `bal_calib_state_t` | 12 B | Static |
| LUT (7.62×39mm) + grid arrays | 156 B | ROM (const) |
| Event log entries (shared with FW ring buffer) | 0 B (uses FW facility) | N/A |
| **Total BAL memory** | **~1.5 KB** | Negligible (system has 4 GB) |

No GPU memory. No DMA buffers. BAL is pure CPU computation.

---

## 12. Variant Configuration Matrix

### 12.1 Per-Variant BAL Configuration

| Variant | LUT | BAL-TRACK | BAL-CALIB | Adaptation Needed |
|---------|-----|-----------|-----------|-------------------|
| **V-M** | 7.62×39mm M43 | Standard Kalman | Factory offset | **Baseline — this SAD** |
| V-L | 7.62×39mm M43 | Standard Kalman | Factory offset | None (identical to V-M) |
| **V-D** | **N/A** | **N/A** | **N/A** | **BAL excluded** — `#error` in build |
| V-X | Custom LUT | Standard Kalman | Factory offset | LUT generated from customer ammo spec |
| V-T | 7.62×39mm M43 | Kalman + data export | Factory offset | Add COM export of Kalman state per frame |
| V-NV | 7.62×39mm M43 | Standard Kalman | Factory offset | No BAL change (thermal affects AI, not BAL) |
| V-P | **12.7×108mm LUT** | Standard Kalman | Factory offset | New LUT only (same pipeline) |
| V-R | **CAN-selectable LUT** | Kalman + **stabilization** | **Runtime auto-cal** | **Major rework** — not in v1.0 scope |

### 12.2 Build Configuration

Uses the same `bal_config.h` structure defined in [SRS] §6.3. Key compile-time switches:

```c
/* bal_config.h — variant selection (from SRS §6.3, reproduced for reference) */

/* LUT selection */
#if defined(BAL_LUT_7_62x39)
  #define BAL_LUT_ACTIVE  BAL_LUT_7_62x39
#elif defined(BAL_LUT_12_7x108)
  #define BAL_LUT_ACTIVE  BAL_LUT_12_7x108
#elif defined(BAL_LUT_CUSTOM)
  /* Customer LUT — provided as separate header */
  #include "bal_lut_custom.h"
  #define BAL_LUT_ACTIVE  BAL_LUT_CUSTOM
#endif

/* V-T training data export */
#if defined(VARIANT_VT)
  #define BAL_DATA_EXPORT  1   /* Export Kalman state to COM per frame */
#else
  #define BAL_DATA_EXPORT  0
#endif

/* V-R vehicle stabilization (not in v1.0) */
#if defined(VARIANT_VR)
  #error "V-R stabilization requires BAL v2.0 architecture — not supported in v1.0"
#endif
```

### 12.3 V-T Data Export Architecture

For the training variant, BAL exports Kalman state after each update:

```c
/* bal_export.c — V-T training data export */
#if BAL_DATA_EXPORT

typedef struct {
    uint32_t frame_id;
    uint32_t track_id;
    float    state[BAL_TRACK_STATE_DIM];   /* Kalman state vector */
    float    range_est_m;
    float    lead_magnitude_mrad;
    float    angular_vel_dps;
} bal_export_record_t;

void bal_export_frame(const bal_export_record_t *record) {
    com_publish_bal_training(record);  /* SW-COM queues for BLE/USB */
}

#endif
```

---

## 13. Error Handling & Fault Paths

### 13.1 Fault Table

| Fault | Detection | Response | FSM Impact | Recovery |
|-------|-----------|----------|------------|----------|
| Kalman NaN/Inf | `bal_track_check_state()` post-update | `fw_report_fault(FAULT_BAL)`, cease output | → FAULT ("COMPUTE FAULT") | Power cycle. If persistent: software defect. |
| LUT index out of range | Should not occur (inputs clamped). Defensive: range_frac bounds check. | Log anomaly. Use nearest grid point. | No FSM change (recovered) | N/A — defensive only. |
| Division by zero (range calc) | `angular_size_mrad ≤ 0` check at input validation | Return `BAL_ERR_INVALID_INPUT`. Detection skipped. | No FSM change | Transient — depends on AI output. |
| Lead exceeds MAX_LEAD | `bal_bounds_check()` magnitude test | `fw_report_fault(FAULT_BAL)`, `valid = 0` | → FAULT ("COMPUTE FAULT") | FW fault_clear after 3 consecutive healthy cycles. |
| Calibration data corrupt | CRC-16 mismatch at boot | Use default (0, 0). Log `CALIB_CRC_FAIL`. | No FSM change | Factory re-calibration via USB depot tool. |
| Watchdog timeout | BAL not heartbeating within 500 ms | FW-WDG fires. AI thread likely stalled (BAL runs inline). | → AI_FAULT (AI thread failed) | Power cycle. |

### 13.2 Fault Propagation

```
BAL internal error (NaN, MAX_LEAD exceeded)
       │
       ▼
  fw_report_fault(FAULT_BAL)
       │
       ▼
  FW-FSM receives bal_fault event → enters state 6 (FAULT)
       │
       ▼
  Action a6: suppress_combat_indicators() + display "COMPUTE FAULT"
       │
       ▼
  FW-WDG continues monitoring. BAL ceases output (SWR-BAL-F61).
  Recovery: fault_clear after 3 consecutive healthy monitor cycles.
```

---

## 14. Build System & Source Layout

### 14.1 Source Tree

```
sw-bal/
├── CMakeLists.txt              ← Top-level: variant selection, link to FW-API
├── cmake/
│   └── variant_bal.cmake       ← BAL-specific variant defines
├── include/
│   ├── bal_api.h               ← Public API: bal_init(), bal_compute(), bal_update_tracks()
│   ├── bal_output.h            ← bal_output_t struct definition
│   ├── bal_config.h            ← Variant #defines, safety thresholds, Kalman params
│   ├── bal_constants.h         ← Optical constants (shared with AI)
│   ├── bal_size.h              ← Physical size lookup
│   ├── bal_range.h             ← Monocular range estimation types
│   ├── bal_track.h             ← Kalman filter types and API
│   ├── bal_lut.h               ← LUT storage + bilinear interpolation
│   ├── bal_bounds.h            ← Bounds check types and API
│   ├── bal_calib.h             ← Bore-sight calibration types and API
│   └── bal_health.h            ← Health monitoring types
├── src/
│   ├── bal_api.c               ← Main API: bal_init(), bal_compute(), bal_update_tracks()
│   ├── bal_range.c             ← Range estimation + EMA smoothing
│   ├── bal_track.c             ← Kalman filter: predict, update, create, reacquire
│   ├── bal_lut.c               ← LUT lookup + bilinear interpolation
│   ├── bal_bounds.c            ← Safety bounds checks
│   ├── bal_calib.c             ← Calibration load/write + CRC-16
│   ├── bal_health.c            ← Watchdog + fault reporting
│   └── bal_export.c            ← V-T data export (conditional compile)
├── test/
│   ├── test_size.c             ← BAL-SIZE: all classes + unknown + invalid
│   ├── test_range.c            ← BAL-RANGE: formula, EMA, clamp, reset on reacquire
│   ├── test_track.c            ← BAL-TRACK: Kalman convergence, innovation gate, NaN
│   ├── test_lut.c              ← BAL-LEAD: grid points, interpolation, extrapolation
│   ├── test_bounds.c           ← BAL-BOUNDS: MAX_LEAD, jump, range, FSM gate
│   ├── test_calib.c            ← BAL-CALIB: CRC, missing data, USB gate
│   ├── test_api.c              ← bal_compute() end-to-end with known inputs
│   └── mock/
│       ├── mock_fw_api.h       ← Mock FW-API (FSM, watchdog, fault, logging)
│       └── mock_hal.h          ← Mock HAL (eMMC read/write)
└── tools/
    ├── generate_lut.py         ← Ammunition YAML → C const LUT header
    └── verify_lut.py           ← Compare LUT vs analytical ballistic model
```

### 14.2 Build Commands

```bash
# Build for V-M (baseline)
cmake -B build -DVARIANT=VM -DPLATFORM=jetson_orin_nano
cmake --build build

# Unit tests (mock FW-API, no hardware dependency)
cmake -B build_test -DVARIANT=VM -DBUILD_TESTS=ON
cmake --build build_test && ctest --test-dir build_test

# Static analysis (MISRA C subset)
cmake --build build --target check  # cppcheck + clang-tidy

# V-P variant (12.7mm)
cmake -B build_vp -DVARIANT=VP -DPLATFORM=jetson_orin_nano
```

### 14.3 Dependencies

| Library | Version | License | Usage |
|---------|---------|---------|-------|
| C99 standard library | — | — | `math.h` (sqrtf, atan2f, isnan, isinf), `string.h` (memset), `stdint.h` |
| FW-API headers | v1.0 (from SW-FW) | Internal | `fw_report_fault()`, `fw_register_watchdog()`, etc. |
| AI output headers | v1.0 (from SW-AI) | Internal | `ai_output_t`, `ai_frame_output_t` |
| Unity | 2.6 | MIT | Unit testing framework |

**No external dependencies.** BAL is pure C99 with no GPU, no RTOS, no third-party libraries. This maximizes portability and minimizes local maintainability risk (resolves FLAG-10).

---

## 15. Test Architecture

### 15.1 Unit Test Strategy

| Test Suite | Module | Mock Deps | Key Tests | SWR Coverage |
|-----------|--------|-----------|-----------|-------------|
| `test_size` | BAL-SIZE | None | 4 valid classes → correct size. Unknown class → default. Invalid enum → default. | F01, F02, F03 |
| `test_range` | BAL-RANGE | None | Known angular size → correct range. EMA reduces noise (≥40% RMS reduction). Clamp at 30/300 m. Reset on reacquire. Reset on track_id change. Division guard (angular_size = 0). | F10, F11, F12, F13, I04 |
| `test_track` | BAL-TRACK | None | Constant velocity → convergence ≤5 frames. Innovation gate rejects 10× outlier. Reacquire: zero velocity + high covariance. NaN injection → fault detected. 10 simultaneous tracks. | F20–F27 |
| `test_lut` | BAL-LEAD | None | All 28 grid points match SRS §4.3 (≤0.01 mrad). Midpoints: bilinear error ≤0.05 mrad. Extrapolation beyond 200 m: linear from 150–200 slope. Velocity >30 → clamped. | F30–F35, P04* |
| `test_bounds` | BAL-BOUNDS | Mock FW-API | Lead >50 mrad → FAULT_BAL. Jump >15 mrad without motion → 1-frame suppress. Range out-of-bounds → RANGE? + suppress. FSM in FAULT → no output. 3-frame hysteresis recovery. | F40–F44, S01–S03, S05, S06 |
| `test_calib` | BAL-CALIB | Mock HAL | Valid record → offsets loaded. Corrupt CRC → default (0,0) + log. Missing data → default + log. USB gate: write fails without USB connected. | F50–F55 |
| `test_api` | Full pipeline | Mock FW-API, Mock HAL | End-to-end: known input → known lead output. Faulted module → BAL_ERR_FAULTED. Invalid input → BAL_ERR_INVALID_INPUT. bal_update_tracks with 3 detections. | F70–F72, I01–I03, I10–I12 |

**Coverage target:** ≥90% branch coverage on all C source files. Safety-related modules (bal_bounds.c) require 100% branch coverage.

### 15.2 Integration Test Plan (SW-Phase 4, on target)

| Test | Target | Equipment | SWR Coverage |
|------|--------|-----------|-------------|
| BAL latency profile | Devkit (ARM Cortex-A78) | `perf stat`, 1000 frames | P01, P02 |
| Lead accuracy (primary envelope) | PR-11 jig + drone sled | Calibrated range + speed, ≥50 passes per condition | P04 |
| Lead accuracy (extended envelope) | PR-11 jig + drone sled | ≥30 passes per condition | P05 |
| Range estimation accuracy | Known-range targets | Targets at 50/100/150/200 m, ≥20 measurements each | P06 |
| Post-shot reacquisition | Recoil simulator | Time from reacquired to valid lead | P07 |
| Calibration load time | Cold boot | 10 cold starts, measure boot → CALIB_LOADED | P08 |
| Bore-sight residual | PR-11 jig + thermal chamber | 3 temperatures (−10, +23, +55°C) | P09 |
| Kalman convergence | Drone sled (constant velocity) | Track age vs velocity error, ≥10 runs | P10 |
| CPU utilization | Continuous operation | `perf stat` over 60 s window | P11 |
| Velocity limit | Drone sled (>30 deg/s) | Verify suppression at 35 deg/s | P12 |

---

## 16. Standards Compliance

### 16.1 TCVN / MIL-STD / IEC References

| Standard | Clause | Applies To | BAL Module |
|----------|--------|-----------|-----------|
| TCVN 13726:2023 | §5.2 Operational readiness | Calibration ≤0.1 s boot time | BAL-CALIB (P08) |
| TCVN 7699-2-6:2009 | Environmental: vibration + humidity | Kalman robustness under vibration | BAL-TRACK (P09 note) |
| IEC 61508-3 | §7.4.5 Safety parameter integrity | Safety thresholds as build-time constants | BAL-BOUNDS (S05) |
| MIL-STD-882E | Hazard analysis methodology | FMEA F08 cascading computation error | BAL-BOUNDS (S01, S02) |
| MISRA C:2012 | Required subset for safety-related code | All BAL source (advisory subset for non-safety) | All modules |

### 16.2 Safety Architecture Summary

| Safety Function | Implementation | Independent Check | Fallback |
|----------------|---------------|-------------------|----------|
| Lead magnitude bound (50 mrad) | `bal_bounds_check()` — build-time `#define` | Code review: no bypass path | → FAULT_BAL → FW suppresses all combat indicators |
| Lead jump detection (15 mrad) | `bal_bounds_check()` — frame-to-frame delta | Code review: suppression is unconditional | 1-frame hold. Next valid frame releases. |
| Range bounds (30–300 m) | `bal_range_estimate()` clamp + `bal_bounds_check()` | Code review: "RANGE?" message hardcoded | Lead suppressed. Operator sees "RANGE?" warning. |
| Stale indicator (watchdog) | FW-WDG 500 ms timeout (independent monitor) | FW-WDG runs in T3 (separate thread) | → AI_FAULT → all indicators off |
| NaN guard | `bal_track_check_state()` on every Kalman update | Code review + unit test (NaN injection) | → FAULT_BAL → cease output |
| Calibration integrity | CRC-16 on eMMC record | Test: corrupt 1 byte → verify detection | Default (0, 0) — uncalibrated but safe |

### 16.3 Local Maintainability (Resolves FLAG-10)

SW-BAL is written in pure C99 with **zero external dependencies** beyond the standard library. This mitigates the local maintainability concern flagged in QC:

| Aspect | Assessment |
|--------|-----------|
| Language | C99 — universally supported by all embedded toolchains |
| GPU dependency | **None** — BAL is CPU-only |
| RTOS dependency | **None** — BAL is a synchronous function call |
| Platform dependency | **None** — only uses `math.h`, `stdint.h`, `string.h` |
| Build system | CMake — widely available |
| Test framework | Unity (MIT, single .c/.h file) |
| Algorithm complexity | Linear algebra (4×4 Kalman), bilinear interpolation — textbook algorithms |
| Local developer access | Any C developer can maintain. No specialized ML/GPU/DSP knowledge required. |

**Risk mitigation:** Even if the Jetson Orin Nano platform changes, BAL code can be recompiled for any ARM or x86 target without modification. The FW-API abstraction layer ([FW-SAD] §7) is the only platform-specific dependency, and it is maintained by the FW team.

---

## 17. Acceptance Criteria (Gate to SW-Phase 3: Implementation)

- [ ] **Pipeline architecture complete:** All 7 modules (SIZE, RANGE, TRACK, LEAD, BOUNDS, CALIB, HEALTH) have defined interfaces, data flow, and error handling
- [ ] **bal_compute() API agreed:** Synchronous API matches [AI-SAD] §14 contract. bal_update_tracks() addition documented.
- [ ] **Kalman filter specified:** 4-state angular-space model with Q/R defaults, innovation gate (3σ), convergence target (≤5 frames)
- [ ] **BAL-TRACK vs AI-TRACK separation justified:** Different domains (pixel vs angular), different purposes (association vs smoothing)
- [ ] **LUT architecture:** 4×7 const array with bilinear interpolation. Extrapolation and clamping behavior specified.
- [ ] **MAX_LEAD_MRAD derived:** 50.0 mrad formally justified from LUT analysis + display constraint + engagement doctrine (resolves SRS FLAG-12)
- [ ] **Bounds logic complete:** All thresholds defined, all fault paths traced to FW-FSM
- [ ] **Calibration architecture:** eMMC record format, CRC-16, USB write gate, default fallback
- [ ] **Memory budget:** ~1.5 KB total, no dynamic allocation
- [ ] **Variant plan:** All 8 variants mapped, V-R explicitly deferred, V-T export architecture defined
- [ ] **Safety requirements covered:** All 6 SWR-BAL-Sxx traced to implementation
- [ ] **Test architecture:** 7 unit test suites + 10 integration tests defined
- [ ] **Local maintainability addressed:** Pure C99, zero external deps (resolves SRS FLAG-10)
- [ ] **QC Gate passed:** Defense AI QC Gate run on this SAD, all checks PASS or FLAG-with-plan

---

*Software Architecture Document — V-SMASH-SW-BAL*
*SW-Phase 2 | Version 1.0 | 2026-03-02*
*Source: [[V-SMASH-SW-BAL_SRS_v1.0|SRS (SW-Phase 1)]]*
*Resolves: SRS FLAGs 10, 12*
*Decisions: BAL-1 (synchronous pure function), BAL-2 (angular Kalman separate), BAL-3 (MAX_LEAD 50.0 derivation), BAL-4 (const LUT bilinear), BAL-5 (range EMA reset on reacquire)*
