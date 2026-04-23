---
project: V-SMASH-SW
type: system-software-architecture-document
version: 1.1
created: 2026-03-03
updated: 2026-03-03
status: draft
parent_srs: V-SMASH-SW_System_SRS_v1.1
change_log: "v1.1 — QC Gate FLAG resolutions: COM SAD metadata updated to exists (fix), HAL isolation decision strengthened with EAR contingency detail and SoC candidates (F10), named V&V authority in §11 (F11)"
icd: V-SMASH-SW-ICD_v1.0
child_sads:
  - V-SMASH-SW-FW_SAD_v1.0
  - V-SMASH-SW-AI_SAD_v1.0
  - V-SMASH-SW-BAL_SAD_v1.0
  - V-SMASH-SW-COM_SAD_v1.0   (exists — QC-gated 2026-03-02, 10 PASS, 2 FLAG resolved)
---

# V-SMASH-SW — System Software Architecture Document

**System SW-Phase 2 | Version 1.1 | 2026-03-03**

---

## 1. Introduction

### 1.1 Purpose

This document describes the **overall software architecture** for V-SMASH-SW — the complete software system across all four modules (SW-FW, SW-AI, SW-BAL, SW-COM). It addresses:

- Module decomposition and responsibilities
- Full thread/task architecture across Jetson + nRF52840
- End-to-end data flows (primary frame pipeline + telemetry + fault)
- Boot sequence with timing
- Memory and resource allocation
- Cross-cutting architectural decisions with rationale

Individual module SADs (FW/AI/BAL) govern internal module design. **ICD governs at all interface boundaries.**

### 1.2 Architectural Goals

| Goal | Rationale |
|------|-----------|
| **Hard real-time frame pipeline** | ≤150 ms end-to-end latency, ≥30 Hz nominal — PREEMPT_RT + priority hierarchy |
| **HAL isolation** | BOM Risk R1: Jetson EAR block → SoC swap. Only FW-HAL changes. |
| **Defense-in-depth safety** | Dual suppression: AI-COORD suppresses per-logic, T2 suppresses per-FSM-state independently |
| **Zero dynamic allocation post-boot** | Deterministic latency; no heap fragmentation triggering watchdog timeout in operation |
| **COM independence** | BLE fault must not degrade aiming — FAULT_COM shows "NO LINK" only |

---

## 2. System Decomposition

### 2.1 Module Allocation

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                       V-SMASH-M DEVICE                                       │
│                                                                              │
│ ┌──────────────────────────────────────────────────────────────────────────┐ │
│ │                  JETSON ORIN NANO 8GB (VM-2101)                          │ │
│ │                  JetPack 6.x — Linux PREEMPT_RT                          │ │
│ │                                                                          │ │
│ │  ┌───────────────────────────────────────────────────────────────────┐   │ │
│ │  │                     APPLICATION LAYER                             │   │ │
│ │  │  ┌──────────┐   ┌──────────┐   ┌──────────────────────────────┐  │   │ │
│ │  │  │  SW-AI   │   │  SW-BAL  │   │         SW-COM (Jetson)      │  │   │ │
│ │  │  │(T-AI)    │   │(inline   │   │   COM-DATA COM-DIAG          │  │   │ │
│ │  │  │          │──→│ in T-AI) │   │   COM-UPDATE COM-SEC         │  │   │ │
│ │  │  └──────────┘   └──────────┘   │   COM-LOG COM-HEALTH (T-COM) │  │   │ │
│ │  └────────────────────┬───────────└─────────────┬────────────────┘   │   │ │
│ │                       │                         │                    │   │ │
│ │  ══════════════════ FW-API ════════════════════════════════════════   │   │ │
│ │                                                                      │   │ │
│ │  ┌───────────────────────────────────────────────────────────────┐   │   │ │
│ │  │                     SW-FW LAYER                               │   │   │ │
│ │  │  FW-BOOT FW-FSM FW-PWR FW-THERM FW-WDG                       │   │   │ │
│ │  │  FW-DISP FW-LED FW-SAFE FW-DIAG                               │   │   │ │
│ │  │  ┌──────────────────────────────────────────────────────┐     │   │   │ │
│ │  │  │  FW-HAL (SoC-specific layer — sole boundary)         │     │   │   │ │
│ │  │  │  hal_mipi  hal_spi  hal_i2c  hal_gpio  hal_pwm  hal_usb    │   │   │ │
│ │  │  └──────────────────────────────────────────────────────┘     │   │   │ │
│ │  └───────────────────────────────────────────────────────────────┘   │   │ │
│ └──────────────────────────────────────────────────────────────────────┘   │ │
│                                                                              │ │
│ ┌───────────────────────────────┐   SPI 8 MHz + GPIO IRQ                    │ │
│ │  nRF52840 (VM-4102)           │◄──────────────────────────────────────────┘ │
│ │  Zephyr RTOS                  │                                              │
│ │  COM-BLE (BLE 5.0 GATT)       │                                              │
│ └───────────────────────────────┘                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Sub-Component Summary

| Module | Sub-components | Primary Thread | Notes |
|--------|---------------|---------------|-------|
| **SW-FW** | FW-BOOT, FW-FSM, FW-PWR, FW-THERM, FW-WDG, FW-DISP, FW-LED, FW-SAFE, FW-DIAG, FW-HAL | T1, T2, T3, T4(ISR), T5 | Foundation layer; publishes FW-API |
| **SW-AI** | AI-CAP, AI-DET, AI-GATE, AI-TRACK, AI-COORD, AI-HEALTH, AI-MODEL | T-AI | GPU inference; owns overlay assembly |
| **SW-BAL** | BAL-SIZE, BAL-RANGE, BAL-TRACK, BAL-LEAD, BAL-BOUNDS, BAL-CALIB, BAL-HEALTH | None (inline in T-AI) | Pure computation; synchronous call |
| **SW-COM (Jetson)** | COM-DATA, COM-DIAG, COM-UPDATE, COM-SEC, COM-LOG, COM-HEALTH | T-COM, T5 | Logging, diagnostics, security |
| **SW-COM (nRF52840)** | COM-BLE | Zephyr threads | BLE 5.0 GATT; separate firmware image |

---

## 3. Thread Architecture

All Jetson threads use SCHED_FIFO (PREEMPT_RT). Higher priority = preempts lower priority. No thread at prio ≥80 may block on a mutex held by a lower-priority thread.

```
Priority │ Thread          │ Rate       │ WCET  │ Role
─────────┼─────────────────┼────────────┼───────┼─────────────────────────────
 HW IRQ  │ T4 (FW-SAFE)   │ Aperiodic  │ <1 ms │ Power-fail blank; atomic set
  90     │ T1 (sensor)     │ 30 Hz      │  6 ms │ hal_mipi_capture; buffer swap
  85     │ T2 (display)    │ 60 Hz      │  4 ms │ SPSC pop; FSM check; SPI DMA
  80     │ T3 (monitor)    │ 10 Hz      │  2 ms │ Thermal/PWR read; FSM eval; WDG scan
  75     │ T-AI (pipeline) │ 30–5 Hz*   │ 80 ms │ Full AI + BAL + overlay assembly
  40     │ T-COM           │ 20 Hz+IRQ  │ 5 ms  │ SPI master, BLE queue, log flush
  20     │ T5 (background) │ Event      │ —     │ USB diagnostics; FW flash (SCHED_OTHER)
─────────┴─────────────────┴────────────┴───────┴─────────────────────────────
  *T-AI rate follows thermal state: NORMAL=30Hz / THROTTLE_15=15Hz / THROTTLE_10=10Hz / THROTTLE_5=5Hz
```

**Thread communication rules:**
- T1 → T-AI: double-buffered atomic index swap (no mutex, no block)
- T-AI → T2: lock-free SPSC queue depth 2, latest-wins (no mutex, no block)
- T3 → all: atomic state variables (`_Atomic fsm_state_t` etc.), single writer multiple readers
- T-AI → T-COM: lock-free SPSC queues (engagement depth 16, events depth 32)
- T5 must not hold any mutex when yielding; all diagnostic reads via snapshot copies

---

## 4. Data Flows

### 4.1 Primary Frame Pipeline

```
━━━━━━━━━━━━━━━━━━━ FRAME CYCLE (~33 ms at 30 Hz) ━━━━━━━━━━━━━━━━━━━

HARDWARE                              T1 (prio 90)
──────────                            ────────────
CMOS 1920×1080 → MIPI CSI-2 → hal_mipi_capture()
                                → frame_buffer[write_idx]
                                → atomic_swap(read_idx, write_idx)
                                        │
                                        │ ICD-01: zero-copy pointer
                                        ▼
                               T-AI (prio 75)
                               ──────────────
                               fw_get_fsm_state()   ← ICD-02
                               if NOT READY/DETECTED/POST_SHOT: skip cycle

                               fw_get_thermal_state()   ← ICD-02
                               adjust target_period

                               AI-CAP: letterbox 1920×1080 → 640×640
                               AI-DET: TensorRT INT8 GPU inference (~20-30 ms)
                               AI-DET: NMS, temperature-scale softmax (T from .meta.json)
                               AI-GATE: per-track confidence state machine
                               AI-TRACK: IoU+Kalman tracker, assign track_id
                                        │
                                        │ ai_frame_output_t (ICD-04)
                                        │ (stack-allocated, up to 10 ai_output_t)
                                        ▼
                               if count == 0: render blank overlay → SKIP BAL

                               AI-COORD: select best detection (max confidence)
                                        │
                                        │ const ai_output_t * (ICD-04)
                                        ▼
                               BAL (inline, synchronous)
                               ─────────────────────────
                               BAL-SIZE:  class → physical_size_m
                               BAL-RANGE: range_m = phys × FOCAL / apparent_px
                                          EMA α=0.3 per track; clamp [30,300]m
                               BAL-TRACK: 4-state Kalman [θx,θy,ωx,ωy] update
                                          innovation gate 3σ
                               BAL-LEAD:  bilinear interp LUT 4×7 (range × vel)
                               BAL-BOUNDS: 4 checks (FSM, range, MAX_LEAD, jump)
                               BAL-CALIB: apply bore-sight offset → dot_x/y px
                               fw_watchdog_heartbeat(handle_bal)
                                        │
                                        │ bal_output_t (ICD-05, 36 B on stack)
                                        ▼
                               AI-COORD: assemble overlay_t (270 B)
                               if bal.valid: dot at (dot_x, dot_y), color by gate_state
                               if BAL invalid: detection center, "NO LEAD"
                               if BAL fault: fw_report_fault(FAULT_BAL)
                               fw_display_render(&overlay)   → ICD-06: SPSC push
                               fw_watchdog_heartbeat(handle_ai)

                               [engagement complete? → com_log_engagement()]
                                                        │
                                                        │ ICD-07: SPSC queue
                                                        ▼
                                              T-COM (prio 40)
                                              ─────────────
                                              mmap write to engagement.bin
                                              SPI_SEND_NOTIFY → nRF52840
                                              nRF52840 → BLE notification → IRONMESH

━━━━━━━━━ RENDER (asynchronous, 60 Hz) ━━━━━━━━━

T2 (prio 85, 60 Hz)
───────────────────
[FIRST CHECK] if safe_blank atomic: blank OLED immediately (T4 ISR path)
[SECOND CHECK] fw_get_fsm_state(): if not READY/DETECTED/POST_SHOT → suppress tacticals
SPSC pop latest overlay_t
hal_spi_transfer() DMA → OLED
```

### 4.2 Fault Propagation Flow

```
Any module detects fault
        │
        ├─ AI timeout     → fw_watchdog_heartbeat() NOT called
        │                    T3 detects miss within 600 ms
        │                    T3 → fw_report_fault(FAULT_AI)
        │
        ├─ BAL NaN/bounds → fw_report_fault(FAULT_BAL) from T-AI inline
        │
        ├─ COM nRF miss   → 3× SPI PONG miss → fw_report_fault(FAULT_COM)
        │                    from T-COM
        │
        ├─ Sensor fail    → hal_mipi_capture() returns NULL × N
        │                    T1 → fw_report_fault(FAULT_SENSOR)
        │
        ▼
FW-FSM (T3 context, ≤10 ms transition)
        │
        ├─ FSM state atomic updated
        │
        ├─ FSM action: suppress_combat_indicators() FIRST
        │   → T2 reads fsm_state at next render loop top
        │   → tactical indicators suppressed within ≤16.7 ms (1 display cycle)
        │
        ├─ FSM action: set display fault message
        │
        └─ com_log_event(EVT_FAULT_ENTER) → T-COM → eMMC + BLE notify

Recovery (3× healthy T3 monitor cycles = ≥300 ms):
        FSM → READY, indicators re-enabled
        com_log_event(EVT_FAULT_CLEAR)
```

### 4.3 Thermal Throttle Flow

```
T3 (10 Hz): read Tj via JetPack thermal API
        85°C → THROTTLE_15 (15 Hz target)
        90°C → THROTTLE_10
        95°C → THROTTLE_5
       100°C → SHUTDOWN

T-AI: fw_get_thermal_state() at pipeline start
        → adjust sleep: 33ms/66ms/100ms/200ms/cease
        → THROTTLE: reduces frame rate, watchdog still heartbeating
        → SHUTDOWN: T-AI exits → watchdog times out → FW-WDG fires FAULT_AI
          (unless FSM already in SHUTDOWN first)
```

---

## 5. Boot Sequence

```
t = 0 ms       Power on
t = 0+         T4 ISR registered on power-fail GPIO ← FIRST SW ACTION

t = ~50 ms     HAL buses init:
               hal_gpio_init()  hal_spi_init()  hal_i2c_init(0,1)
               hal_pwm_init()   hal_usb_init()

t = ~300 ms    FW-DISP early init: OLED power-on sequence
               Display: "STARTING" splash ← SWR-SYS-F04 target ≤500 ms

t = ~500 ms    hal_mipi_init() → camera power-on + MIPI lane config
               Capture 1 validation frame:
                  FAIL → FW-FSM INIT → SENSOR_FAULT immediately
                  PASS → continue

t = ~700 ms    hal_self_test(): all buses tested, bitmask logged
               Critical failure → DEGRADED mode

               ┌─────────────────────────────────────────────────────┐
               │  PARALLEL INIT (all three start concurrently)       │
               │                                                     │
               │  SW-AI init:          SW-BAL init:    SW-COM init:  │
               │  sha256(engine_file)  bal_calib_load  SPI nRF ping  │
               │  TRT engine load      init 10 track   BLE init      │
               │  2 dummy inferences   fw_register_wdg fw_register_wdg│
               │  fw_register_wdg                                    │
               └─────────────────────────────────────────────────────┘
               AI load is longest: ~800 ms–2.5 s
               (lazy mode: enter READY without waiting for AI warmup)

t ≤ 3000 ms    All subsystems healthy:
               FW-FSM: INIT → READY (action a1)
               LED: steady green
               OLED: clear (remove splash)
               Threads running: T1 T2 T3 T4 T-AI T-COM T5

               ═══════════ OPERATIONAL LOOP ═══════════
```

**Startup dependency constraints:**
1. T4 ISR before all other init (power-fail safe from t=0+)
2. HAL buses before FW-DISP (SPI needed for OLED)
3. FW-DISP early init before MIPI (OLED online while waiting for camera)
4. All watchdog handles registered before FSM → READY
5. FSM stays in INIT until conditions SWR-SYS-F05 met

---

## 6. Memory Architecture

### 6.1 Jetson CPU RAM Allocation

| Region | Owner | Size | Mechanism |
|--------|-------|------|-----------|
| Frame double-buffer | FW-HAL → T1 | 2 × 6.2 MB = 12.4 MB | Static array; atomic index swap |
| AI inference workspace | SW-AI | ~1 MB pinned CUDA host | `cudaMallocHost()` at AI init |
| Overlay SPSC queue | T-AI → T2 | 2 × 270 B = 540 B | Static ring buffer |
| FSM + atomic state | SW-FW | < 1 KB | `.data` section, cache-line aligned |
| Watchdog table (4 slots) | FW-WDG | ~64 B | Static struct array |
| BAL track states (10 tracks) | SW-BAL | ~1.5 KB | Static track array in BAL-TRACK |
| BAL LUT (4×7 = 28 entries) | SW-BAL | 112 B | `const float[4][7]` in ROM (.rodata) |
| Engagement SPSC queue | T-AI → T-COM | 16 × 64 B = 1 KB | Static ring buffer |
| Event SPSC queue | any → T-COM | 32 × 32 B = 1 KB | Static ring buffer |
| Diagnostic ring buffer | FW-DIAG | ~4 KB | Lock-free ring, T5 drain |
| **Subtotal (CPU)**  | | **~14 MB** | |

### 6.2 Jetson GPU Memory Allocation

| Region | Owner | Size | Mechanism |
|--------|-------|------|-----------|
| TensorRT engine | SW-AI | 4–8 MB | `cudaMalloc` at AI init |
| Inference workspace | SW-AI | ~2 MB | TensorRT auto-managed |
| Input tensor (640×640×3 FP32) | SW-AI | ~4.7 MB pinned | `cudaMallocHost` for DMA |
| **Subtotal (GPU)** | | **~15 MB** | Jetson has 8 GB unified; GPU is ≪1% |

### 6.3 eMMC Allocation

| Partition | Content | Size |
|-----------|---------|------|
| OS + JetPack | Linux root filesystem | ~8 GB |
| FW-A | Active firmware image | 64 MB |
| FW-B | Staging firmware image | 64 MB |
| AI model | TensorRT engine + .meta.json | ~128 MB |
| Engagement log (`engagement.bin`) | 1,024 × 64 B circular | 64 KB |
| Event log (`events.bin`) | 10,240 × 32 B circular | 320 KB |
| Bore-sight calibration | 20 B + CRC-16 | 4 KB (sector-aligned) |
| Boot selector | A/B partition flag | 4 KB |

---

## 7. Key Architectural Decisions

| Decision | Choice | Alternatives Rejected | Rationale |
|----------|--------|-----------------------|-----------|
| **BAL runs inline in T-AI** | Synchronous `bal_compute()` in T-AI context | Separate BAL thread with IPC | BAL WCET ≤2 ms typical, ≤20 ms worst case. Thread creation + IPC adds >100 µs overhead per frame plus synchronization complexity. Inline is simpler, faster, and safer (same fault context). |
| **AI-COORD owns overlay assembly** | SW-AI calls `fw_display_render()` | Separate coordinator module | AI holds all detection state and BAL output in the same stack frame. A separate coordinator needs a copy of that data anyway — net zero benefit, extra synchronization point. |
| **Two independent Kalman filters** | AI-TRACK (pixel space) + BAL-TRACK (angular space) | One shared Kalman | AI-TRACK optimizes visual tracking (occlusion, bbox stability). BAL-TRACK optimizes angular velocity smoothing for lead accuracy. Different state vectors, different noise models, different purposes. Sharing requires compromise of both. |
| **SPSC lock-free queue T-AI → T2** | Lock-free SPSC, depth 2, latest-wins | Mutex + shared pointer | T-AI prio 75 < T2 prio 85. Mutex would cause priority inversion: T2 blocked waiting for T-AI = display freeze. Lock-free SPSC: T2 always gets latest available frame; T-AI never blocks. |
| **PREEMPT_RT + SCHED_FIFO** | Hard RT kernel + SCHED_FIFO | Stock Linux + pthreads priority | Fault suppression ≤100 ms, sensor capture ≤5 ms, display 60 Hz cannot be guaranteed under stock Linux CFS scheduler under load. PREEMPT_RT gives deterministic preemption latency < 1 ms. |
| **No dynamic allocation post-boot** | All buffers pre-allocated at init | `malloc()` per frame | Heap fragmentation can cause `malloc()` to fail or take unbounded time mid-operation, triggering watchdog. Pre-allocation at boot = deterministic from first frame. |
| **HAL isolation — single SoC boundary** | FW-HAL + platform directories | SDK calls scattered through modules | BOM R1: Jetson Orin Nano EAR export classification block. **EAR review initiated 2026-03-03** (6–10 week timeline). Contingency SoCs evaluated for HAL porting: **(1) Hailo-8L** — porting effort ~2 weeks (HAL NPU inference layer only; NMS, tracker, overlay unchanged); **(2) Rockchip RK3588** — porting effort ~3 weeks (HAL NPU + GStreamer/V4L2 adaptation). All modules above FW-HAL (SW-AI logic, SW-BAL, SW-COM) require zero changes. SW lifecycle assessment: pending EAR ruling outcome. Supply chain qualification and MoD BOM approval required before production for any contingency SoC. |
| **Temperature scaling in AI** | Scalar `T` per model in `.meta.json` | No calibration (raw softmax) | Raw softmax from neural networks is NOT a calibrated probability. 70% gate threshold relies on calibration (ECE ≤0.05). Must re-run calibration when model changes. |
| **IoU + Kalman tracker (not DeepSORT)** | IoU-based matching + linear Kalman | DeepSORT (appearance features) | DeepSORT requires CNN feature extraction per detection = 3–5 ms extra GPU + 8–10 MB extra GPU RAM. For 4-class aerial C-UAS with small target count (≤10), IoU matching is sufficient and 10× faster. |
| **BLE Safety Class A** | COM fault = "NO LINK" only, no tactical suppression | COM fault = suppress all indicators | V-SMASH operates in contested EM environments. BLE disconnect is normal operating condition. Suppressing aiming on BLE fault would make the system unusable in field. |

---

## 8. Cross-Cutting Concerns

### 8.1 Error Code Conventions

All C functions: return 0 = success, negative = error (POSIX errno style).
`bal_compute()`: returns 0/BAL_OK, -1/BAL_ERR_INVALID_INPUT, -2/BAL_ERR_COMPUTE_FAULT, -3/BAL_ERR_FAULTED.
`fw_report_fault()`: always succeeds (void-equivalent; FSM is always ready).
Thread-safe: all FW-API functions callable from any thread simultaneously.

### 8.2 Logging Architecture

Three log channels, all written by T-COM from SPSC queues:

| Channel | Source | Destination | Format |
|---------|--------|-------------|--------|
| Engagement log | AI-COORD at engagement end | `engagement.bin` mmap circular | 64 B / record, CRC-32 |
| System event log | Any module via `com_log_event()` | `events.bin` mmap circular | 32 B / event, CRC-32 |
| Diagnostic ring | FW-DIAG | USB-C (depot only) | 4 KB lock-free ring, ASCII/binary |

Boot log written by FW-BOOT to diagnostic ring. FSM log (≥256 transitions) in FW-DIAG. Thermal history (last 1,000 Tj samples) in FW-DIAG.

### 8.3 Static Analysis and CI Requirements

| Check | Scope | Gate |
|-------|-------|------|
| cppcheck | All Jetson C/C++ code | Zero critical findings before merge |
| clang-tidy | All Jetson C/C++ code | Zero critical findings before merge |
| MISRA C:2012 required subset | FW-SAFE module only | Zero required-level violations |
| _Static_assert in v_smash_sw_types.h | All cross-module struct sizes | Build fails if assertion fails |
| SHA-256 engine file | AI model at runtime load | Mismatch → FAULT_AI immediately |
| CRC-16/CCITT | BAL bore-sight record | Mismatch → default (0,0), non-fatal |
| CRC-32 ISO 3309 | Engagement log records | Per-record; corrupted records skipped, reader continues |

### 8.4 Variant Build System

```
build.sh --variant VM  # → -DVARIANT_VM
build.sh --variant VD  # → -DVARIANT_VD → bal_config.h #error → BUILD FAILS (correct behavior)
build.sh --variant VR  # → -DVARIANT_VR → bal_config.h #error → BUILD FAILS (V-R BAL v2.0 needed)

Per variant, CMake selects:
  - FW-FSM table (fw_fsm_table_${VARIANT}.c)
  - FW-DISP layout (fw_disp_layout_${VARIANT}.h)
  - BAL LUT file (bal_lut_${VARIANT}.h)
  - COM GATT profile (com_gatt_${VARIANT}.h)
  - FW-HAL platform (platform/jetson_orin_nano/ or platform/mock/)
```

---

## 9. Interface Summary (Reference to ICD)

All interface contracts below are normative in [ICD]. Sizes are enforced by `_Static_assert`.

| ICD | Interface | Size | Rate | Mechanism |
|-----|-----------|------|------|-----------|
| ICD-01 | frame_buffer_t | 32 B header + 6.2 MB data | 30 Hz | Atomic double-buffer, zero-copy pointer |
| ICD-02 | FSM/thermal/power atomics | ~16 B | 10 Hz update, any-rate read | `_Atomic` variables |
| ICD-03 | FW-API (9 functions) | N/A | On-demand | Direct C function calls |
| ICD-04 | ai_frame_output_t | 492 B (header 8B + 10 × 48B + 4B) | 30 Hz | Stack-allocated, passed by pointer |
| ICD-05 | bal_output_t | 36 B | 30 Hz | Stack-allocated, return value |
| ICD-06 | overlay_t | 270 B | 60 Hz render, 30 Hz update | SPSC queue depth 2 |
| ICD-07 | engagement_log_record_t | 64 B | Per engagement | SPSC queue depth 16 |
| ICD-07 | system_event_record_t | 32 B | Per event | SPSC queue depth 32 |
| ICD-07 | ai_health_stats_t | 44 B | 60 s | Direct call |
| ICD-08 | spi_frame_t | ≤257 B wire | 20 Hz + IRQ | SPI 8 MHz, CRC-16/CCITT |

---

## 10. Traceability to System SRS

| System SRS Requirement | SAD Section | Decision |
|-----------------------|-------------|---------|
| SWR-SYS-F01 (ISR first) | §5 Boot Sequence | T4 registered t=0+ explicitly |
| SWR-SYS-F02 (init order) | §5 Boot Sequence | Dependency constraints enumerated |
| SWR-SYS-F10 (frame cycle ordering) | §4.1 Primary Pipeline | Sequential data flow diagram |
| SWR-SYS-F11 (BAL inline) | §3 Decomposition, §7 Decisions | BAL inline in T-AI justified |
| SWR-SYS-F20 (T2 dual suppression) | §4.2 Fault Flow, §7 Decisions | Defense-in-depth: T4+T2 independent |
| SWR-SYS-F30–F32 (watchdog) | §4.1, §5 Boot | WDG table, boot registration shown |
| SWR-SYS-P01 (150 ms budget) | §4.1 Pipeline, §6.1 Memory | Timing breakdown in pipeline diagram |
| SWR-SYS-S01 (COM independence) | §7 Decisions (BLE Class A) | COM fault → NO LINK only |
| SWR-SYS-S03 (no IFF) | §8.3 Static Analysis | Code review of v_smash_sw_types.h |
| SWR-SYS-S05 (no runtime threshold mod) | §8.1, §8.3 | _Static_assert + MISRA enforcement |
| SWR-SYS-A01 (SCHED_FIFO) | §3 Thread Architecture | Priority table, no inversion rule |
| SWR-SYS-A02 (no dynamic alloc) | §6 Memory, §7 Decisions | Pre-allocation at init, justified |
| SWR-SYS-A03 (HAL isolation) | §2 Decomposition, §7 Decisions | HAL platform directories, justified |
| SWR-SYS-A04 (single codebase) | §8.4 Variant Build | CMake variant selection |

---

## 11. Acceptance Criteria (Gate to System SW-Phase 3)

- [ ] Thread priority table agreed across all 4 module teams; no priority inversions possible
- [ ] All SPSC queue depths validated: engagement (16), events (32), overlay (2) — no queue overflow in burst scenario
- [ ] v_smash_sw_types.h created with all cross-module structs + `_Static_assert` (confirmed sizes: ai_output_t=48B, bal_output_t=36B, overlay_t=270B, engagement_log_record_t=64B)
- [ ] Boot sequence timing verified by analysis: T4 ISR ≤100 µs, STARTING splash ≤500 ms, READY ≤3.0 s
- [ ] BAL inline decision confirmed by timing: BAL WCET ≤20 ms verified on devkit
- [ ] Memory budget confirmed: CPU ≤100 MB, GPU ≤30 MB, eMMC COM allocation ≤512 MB
- [ ] HAL mock (`platform/mock/`) compiles all 4 modules with zero hardware — enables CI on x86
- [ ] SAFETY-CRITICAL requirements (SWR-SYS-S02, SWR-SYS-S05 — ref: System SRS §5) verified by independent V&V: **WX-QE** (Workshop X Quality Engineering, independent from development team) architecture review completed before system integration; **MoD testing authority** review [TBD — authority per procurement contract] completed before production release
- [ ] QC Gate: Defense AI QC Gate run, all checks PASS or FLAG-with-plan

---

*V-SMASH-SW System SAD — v1.1 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
*ICD governs all interface boundaries. Module SADs govern internal module design.*
