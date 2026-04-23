---
project: V-SMASH-SW
type: integration-test-plan
version: 1.0
created: 2026-03-02
status: accepted (QC Gate: HUMAN REVIEW — 8 PASS, 4 FLAG, 0 FAIL — FLAG-03 fixed (testing standards §6.0), FLAG-07 fixed (halt criteria §6.3), FLAG-08 fixed (TC-E2E-06/07 added), FLAG-11 fixed (independence §6.2) — 2026-03-02)
parent_family: V-SMASH
sw_phase: 2→3 bridge (Architecture → Implementation)
scope: End-to-end integration verification across SW-FW, SW-AI, SW-BAL, SW-COM
source_documents:
  - V-SMASH-SW-FW_SAD_v1.0.md
  - V-SMASH-SW-AI_SAD_v1.0.md
  - V-SMASH-SW-BAL_SAD_v1.0.md
  - V-SMASH-SW-COM_SAD_v1.0.md
  - V-SMASH-SW-FW_SRS_v1.0.md
  - V-SMASH-SW-AI_SRS_v1.0.md
  - V-SMASH-SW-BAL_SRS_v1.0.md
  - V-SMASH-SW-COM_SRS_v1.0.md
---

# V-SMASH-SW — Coordinator Integration Test Plan

**Version 1.0 | 2026-03-02**

---

## 1. Purpose

This document defines the integration test strategy for verifying that SW-FW, SW-AI, SW-BAL, and SW-COM work correctly together as a system. It bridges SW-Phase 2 (Architecture) and SW-Phase 3 (Implementation) by defining:

1. **Interface contracts** between modules — data structures, rates, synchronization
2. **End-to-end data flow verification** — capture → detect → compute → render → log
3. **Safety-critical integration paths** — fault propagation, indicator suppression, watchdog cascade
4. **Test harness architecture** — what's mocked, what's real, what hardware is needed

**This is a design document.** Test implementation happens during SW-Phase 3/4.

---

## 2. Scope & Boundaries

### 2.1 In Scope

| Integration Path | Modules | Safety Class |
|-----------------|---------|-------------|
| Primary pipeline | FW→AI→BAL→Display | B (engagement display) |
| Fault propagation | Any module→FW-FSM→Display+LED | B (safety suppression) |
| Watchdog cascade | AI/BAL/COM→FW-WDG→FW-FSM | B (stale data prevention) |
| Engagement logging | AI-COORD→COM→eMMC→BLE | A (post-engagement data) |
| Health telemetry | AI/BAL/FW→COM→BLE | A (diagnostic) |
| Thermal throttling | FW-THERM→AI frame rate→BAL throughput | B (thermal protection) |
| Firmware update | COM→SPI→nRF52840 OTA | A (maintenance function) |

### 2.2 Out of Scope

- **Unit-level verification** — covered by individual module test plans in SW-Phase 3
- **Hardware qualification** — covered in SW-Phase 4 (HW-SW integration)
- **AI model accuracy** — covered by SW-AI validation dataset (separate V&V)
- **BLE interoperability** — covered by Bluetooth SIG qualification
- **Production acceptance** — covered in SW-Phase 5

### 2.3 Test Environments

| Environment | Hardware | Purpose |
|------------|----------|---------|
| **ENV-SIM** | x86 workstation, no GPU | Interface contract tests. All modules stubbed. Pure data flow. |
| **ENV-GPU** | Jetson Orin Nano devkit (or x86 + CUDA GPU) | AI inference timing. Real TensorRT, mock sensor. |
| **ENV-BLE** | Jetson devkit + nRF52840-DK | SPI + BLE stack. Real COM, mock AI/BAL. |
| **ENV-FULL** | Jetson devkit + nRF52840-DK + CMOS sensor + OLED | Full pipeline. Required for SW-Phase 4. |

---

## 3. Integration Architecture

### 3.1 Primary Pipeline (30 Hz Loop)

```
┌─────────┐    frame_buffer_t    ┌──────────┐   ai_output_t   ┌──────────┐
│  FW-T1  │───────────────────→│  SW-AI   │───────────────→│  SW-BAL  │
│ (Sensor)│   3.1 MB, 30 Hz     │ Pipeline │   ~60 B, 30 Hz  │bal_compute│
│  HAL    │   double-buffered    │ INFER→   │   confidence     │ ≤20 ms   │
│         │   atomic swap        │ TRACK→   │   ≥0.70 gate     │ sync call│
│         │                      │ GATE     │                  │          │
└─────────┘                      └────┬─────┘                  └────┬─────┘
                                      │                             │
                                      │         bal_output_t        │
                                      │←────────────────────────────┘
                                      │         64 B
                                      │
                                 ┌────▼─────┐    overlay_t     ┌──────────┐
                                 │ AI-COORD │───────────────→│  FW-T2   │
                                 │ Overlay  │   ~280 B         │ (Display)│
                                 │ Assembly │   SPSC queue     │  60 Hz   │
                                 │          │   latest-wins    │  OLED    │
                                 └────┬─────┘                  └──────────┘
                                      │
                                      │   engagement_log_record_t
                                      │   64 B, on-demand
                                      ▼
                                 ┌──────────┐    SPI frame     ┌──────────┐
                                 │  T-COM   │───────────────→│ nRF52840 │
                                 │ (Jetson) │   257 B max      │  Zephyr  │
                                 │ Log+BLE  │   8 MHz, CRC-16  │  BLE 5.0 │
                                 └──────────┘                  └──────────┘
```

### 3.2 Safety Suppression Path

```
Any module fault
  │
  ▼
fw_report_fault(fault_type)
  │
  ▼
FW-T3 (FSM) ──→ fsm_state = FAULT/SENSOR_FAULT/AI_FAULT/...
  │                (atomic write, ≤10 ms)
  ├──→ FW-T2: suppress dot_x/dot_y + confidence color (≤100 ms total)
  ├──→ FW-LED: update LED pattern (≤50 ms)
  └──→ All modules: read fsm_state → cease non-essential output
```

### 3.3 Watchdog Cascade

```
Module registers: fw_register_watchdog(MODULE_X, 500 ms)
Module heartbeats: fw_watchdog_heartbeat(handle) — per inference/compute cycle
  │
  │ If heartbeat missed for >500 ms:
  ▼
FW-T3 scans wdg_table[4] at 10 Hz
  → Detects timeout → fw_report_fault(FAULT_X)
    → FSM transition → indicator suppression ≤100 ms
```

---

## 4. Test Cases

### 4.1 Interface Contract Tests (ENV-SIM)

These tests verify data structure compatibility and API contracts between modules. No real hardware needed — all modules are stubbed with known inputs/outputs.

#### TC-INT-01: frame_buffer_t Producer-Consumer Contract

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F36, SWR-AI-F01 |
| **Modules** | FW-T1 (producer) → AI-INFER (consumer) |
| **Precondition** | FW stub produces frame_buffer_t with known pixel pattern |
| **Stimulus** | AI-INFER reads frame via fw_sensor_capture() |
| **Verify** | (a) width=1920, height=1080, stride=1920 aligned, (b) timestamp_us monotonically increasing, (c) seq increments by 1, (d) data pointer valid and readable (3.1 MB), (e) double-buffer index swap is atomic — no torn frame |
| **Acceptance** | 1000 consecutive frames with zero structure violations |

#### TC-INT-02: ai_output_t Structure Compatibility

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-F35, SWR-BAL-F71 |
| **Modules** | AI-GATE (producer) → bal_compute() (consumer) |
| **Precondition** | AI stub produces ai_output_t with known detection data |
| **Stimulus** | BAL reads ai_output_t fields |
| **Verify** | (a) sizeof(ai_output_t) matches between AI and BAL compilation units, (b) field offsets identical (no padding mismatch), (c) bbox values in sensor space [0,1920]×[0,1080], (d) angular_size_mrad > 0 when valid, (e) confidence in [0.0, 1.0], (f) class_id in {0,1,2,3}, (g) timestamp_us matches frame timestamp |
| **Acceptance** | Compile-time static_assert on sizeof + offsetof; runtime 1000-frame check |

#### TC-INT-03: bal_output_t Structure Compatibility

| Field | Value |
|-------|-------|
| **Requirement** | SWR-BAL-F70 |
| **Modules** | bal_compute() (producer) → AI-COORD overlay assembly (consumer) |
| **Precondition** | BAL stub produces bal_output_t with known lead values |
| **Stimulus** | AI-COORD reads bal_output_t to assemble overlay_t |
| **Verify** | (a) sizeof(bal_output_t) = 64 bytes, (b) lead_x_mrad/lead_y_mrad in ±50.0 mrad when valid=true, (c) lead_magnitude_mrad = sqrt(x²+y²) ±0.01, (d) range_est_m in [20, 500] when range_valid=true, (e) valid=false when lead exceeds MAX_LEAD_MRAD, (f) track_id matches input ai_output_t.track_id |
| **Acceptance** | 100 boundary cases + 1000 nominal cases |

#### TC-INT-04: overlay_t Structure Compatibility

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F26, SWR-AI-F33 |
| **Modules** | AI-COORD (producer) → FW-T2 display_render() (consumer) |
| **Precondition** | AI-COORD stub produces overlay_t with known values |
| **Stimulus** | FW-T2 reads overlay_t from SPSC queue |
| **Verify** | (a) dot_x in [0, 640], dot_y in [0, 480] (OLED resolution), (b) dot_color ∈ {GREEN, YELLOW, NONE}, (c) fire_gate ∈ {0, 1}, (d) messages[8][32] null-terminated, (e) timestamp_us within 33 ms of current time |
| **Acceptance** | 100 boundary + 1000 nominal |

#### TC-INT-05: engagement_log_record_t Structure Compatibility

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F10, SWR-COM-F11 |
| **Modules** | AI-COORD (producer) → T-COM (consumer) → eMMC + BLE |
| **Precondition** | AI-COORD stub produces engagement_log_record_t |
| **Stimulus** | T-COM receives via SPSC queue, writes to circular buffer, sends BLE core |
| **Verify** | (a) sizeof = 64 bytes, (b) CRC-32 over bytes [0..53] matches crc32 field, (c) BLE core subset = first 15 bytes (timestamp_s, target_class, confidence_pct, range_est_dm, lead_angle_01mrad, duration_ms, outcome, thermal_state, battery_soc), (d) extended fields (max_angular_vel, avg_confidence, frames_tracked, reacquisitions, bore_offset) stored locally only |
| **Acceptance** | 50 records written + read back with CRC verification |

#### TC-INT-06: system_event_record_t Structure Compatibility

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F20, SWR-COM-F21 |
| **Modules** | FW/AI/BAL/COM (producers) → T-COM (consumer) |
| **Precondition** | Each module stub generates system events |
| **Stimulus** | T-COM receives and logs to events.bin circular buffer |
| **Verify** | (a) sizeof = 32 bytes, (b) source_module ∈ {0=FW, 1=AI, 2=BAL, 3=COM}, (c) severity ∈ {0=INFO, 1=WARN, 2=ERROR, 3=CRITICAL}, (d) CRC-32 over bytes [0..27] matches crc32 field, (e) timestamp_s monotonically increasing per source |
| **Acceptance** | 100 events from each module, round-trip CRC check |

---

### 4.2 End-to-End Pipeline Tests (ENV-SIM → ENV-GPU)

#### TC-E2E-01: Nominal Pipeline — Single Target at Center

| Field | Value |
|-------|-------|
| **Requirement** | Pipeline budget ≤150 ms (VM-S02), SWR-FW-P09 |
| **Modules** | FW→AI→BAL→Display (full chain) |
| **Precondition** | (a) FSM in READY, (b) thermal_state = NORMAL, (c) simulated target at frame center (960, 540), angular size 5.0 mrad, confidence 0.85 |
| **Stimulus** | Inject 100 frames with target present |
| **Verify** | (a) AI detects target within 3 frames (gate persistence), (b) BAL produces lead_x/lead_y near zero (center target = minimal lead), (c) overlay_t.dot_color = YELLOW (0.70–0.89), (d) overlay_t.dot_x/dot_y near OLED center, (e) end-to-end latency ≤150 ms (95th percentile), (f) engagement_log_record_t generated on disengage |
| **Acceptance** | 100% detection after gate settles; latency P95 ≤150 ms |

#### TC-E2E-02: Nominal Pipeline — Target at Edge, Moving

| Field | Value |
|-------|-------|
| **Requirement** | SWR-BAL-P01, SWR-AI-P01 |
| **Modules** | FW→AI→BAL→Display |
| **Precondition** | FSM=READY, NORMAL thermal, simulated target moving left-to-right at 30 deg/s, confidence 0.92 |
| **Stimulus** | 300 frames (10 seconds at 30 Hz) |
| **Verify** | (a) AI tracking produces stable track_id (no ID switches), (b) angular_vel_dps ≈ 30 ±5, (c) BAL lead_x_mrad tracks proportionally to angular velocity, (d) overlay_t.dot_color = GREEN (≥0.90), (e) lead_magnitude_mrad within MAX_LEAD_MRAD bound (50.0), (f) per-frame BAL latency ≤20 ms |
| **Acceptance** | Stable tracking ≥95% of frames; lead computation ≤20 ms P99 |

#### TC-E2E-03: Multi-Target — Best Detection Selection

| Field | Value |
|-------|-------|
| **Requirement** | SWR-BAL-F71 |
| **Modules** | AI→BAL→Display |
| **Precondition** | 3 simultaneous detections: conf 0.95, 0.80, 0.72 |
| **Stimulus** | AI-COORD selects highest-confidence for bal_compute() |
| **Verify** | (a) BAL receives detection with conf=0.95, (b) overlay shows single lead dot for best target, (c) engagement log records class matching best target |
| **Acceptance** | 100% correct selection across 50 multi-target frames |

#### TC-E2E-04: Pipeline Flush — Target Lost

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-F32, SWR-BAL-F72 |
| **Modules** | AI→BAL→Display |
| **Precondition** | Active tracking (10 frames), then target exits frame |
| **Stimulus** | AI detection count drops to 0 |
| **Verify** | (a) AI-GATE maintains 3-frame decay (est_indicator=true), (b) after decay: ai_output_t count=0, (c) BAL produces no output, (d) overlay clears lead dot, (e) "NO TARGET" message displayed within 3 frames of target loss |
| **Acceptance** | Dot disappears within 3 frames of target loss; no stale lead |

#### TC-E2E-05: Confidence Below Gate Threshold

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-F30, SWR-AI-S01 |
| **Modules** | AI→BAL→Display |
| **Precondition** | Simulated detection with confidence = 0.65 (below 0.70 gate) |
| **Stimulus** | 50 frames with sub-threshold detection |
| **Verify** | (a) AI-GATE suppresses — ai_output_t count=0, (b) BAL not called, (c) no lead dot displayed, (d) gate_suppress_count increments in ai_health_stats_t |
| **Acceptance** | Zero lead dots across all 50 frames |

#### TC-E2E-06: False Positive — Empty Frame, No Target

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-S01, SWR-FW-S01 |
| **Modules** | FW→AI→BAL→Display (full chain) |
| **Safety Class** | B (spurious lead dot = misleading aiming indicator) |
| **Precondition** | FSM=READY, NORMAL thermal, 100 frames of empty sky (no target present) |
| **Stimulus** | Inject 100 frames with background clutter but no valid target |
| **Verify** | (a) AI detection count = 0 for all frames (no spurious detections), (b) BAL not called (no input), (c) overlay_t has no lead dot for all 100 frames, (d) no engagement_log_record_t generated, (e) gate_suppress_count = 0 (nothing to suppress — no detections at all) |
| **Acceptance** | Zero lead dots across 100 empty frames; zero false engagements logged |
| **Note** | Tests the *integration impact* of a false positive — if AI spuriously detects, does the pipeline propagate it to display? Separate from AI model accuracy (SW-AI V&V). |

#### TC-E2E-07: False Negative — Small/Edge Target Present but Undetected

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-F01, SWR-BAL-F72 |
| **Modules** | FW→AI→BAL→Display |
| **Safety Class** | C (missed detection = no aiming aid, operator reverts to manual) |
| **Precondition** | FSM=READY, NORMAL thermal, simulated target at frame edge (50, 540), angular size 1.0 mrad (near minimum), confidence expected <0.70 |
| **Stimulus** | 50 frames with marginal target |
| **Verify** | (a) If AI detects with confidence <0.70: gate suppresses correctly (per TC-E2E-05), (b) If AI does not detect at all: pipeline produces no output, no stale data, (c) overlay shows no lead dot (correct behavior — insufficient confidence), (d) system remains in READY state (no fault triggered by missed detection), (e) operator can still aim manually (display shows camera feed without AI overlay) |
| **Acceptance** | No stale lead data; no false fault; graceful degradation to manual aiming |
| **Note** | Tests that a missed detection does NOT cause pipeline errors (null pointer, stale state, fault cascade). The *accuracy* of detection is AI V&V scope. |

---

### 4.3 Safety-Critical Integration Tests (ENV-SIM)

#### TC-SAF-01: Fault Propagation — AI Watchdog Timeout

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI-F52, SWR-FW-F24, SWR-FW-F17 |
| **Modules** | AI (hangs) → FW-WDG → FW-FSM → FW-T2 + FW-LED |
| **Safety Class** | B |
| **Precondition** | AI registered with fw_register_watchdog(MODULE_AI, 500 ms), active tracking |
| **Stimulus** | AI stops calling fw_watchdog_heartbeat() (simulated hang) |
| **Verify** | (a) FW-WDG detects timeout within 500 ms + 100 ms scan period, (b) fw_report_fault(FAULT_AI) called, (c) FSM transitions to AI_FAULT, (d) display suppresses lead dot and confidence color ≤100 ms from timeout, (e) LED updates to fault pattern ≤50 ms from FSM change, (f) "AI FAULT" message displayed |
| **Acceptance** | Total time from last heartbeat to indicator suppression ≤600 ms; zero residual lead indicators after suppression |

#### TC-SAF-02: Fault Propagation — BAL Compute Fault

| Field | Value |
|-------|-------|
| **Requirement** | SWR-BAL-F61, SWR-FW-F17 |
| **Modules** | BAL → FW-FSM → FW-T2 + FW-LED |
| **Safety Class** | B |
| **Precondition** | Active tracking, BAL producing valid output |
| **Stimulus** | BAL detects internal error: bal_compute() returns BAL_ERR_COMPUTE_FAULT |
| **Verify** | (a) BAL calls fw_report_fault(FAULT_BAL), (b) BAL ceases all output (compute_fault=true), (c) FSM transitions to FAULT, (d) display shows "COMPUTE FAULT" ≤100 ms, (e) subsequent overlay_t from AI-COORD has no lead dot |
| **Acceptance** | Fault → suppression ≤100 ms; zero stale lead data |

#### TC-SAF-03: Fault Propagation — COM SPI Heartbeat Failure

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F61, SWR-COM-F02 |
| **Modules** | COM → FW-FSM → Display |
| **Safety Class** | A (non-critical) |
| **Precondition** | Active BLE connection, SPI heartbeat running (5 s interval) |
| **Stimulus** | nRF52840 stops responding to SPI_HEARTBEAT_PING |
| **Verify** | (a) COM detects 3 consecutive failures (15 s), (b) COM calls fw_report_fault(COM_FAULT), (c) "NO LINK" message displayed, (d) primary pipeline (AI→BAL→Display) continues operating normally — COM fault does NOT affect aiming |
| **Acceptance** | Primary pipeline unaffected (100% frame rate maintained); COM fault logged |

#### TC-SAF-04: FSM Suppression — Stale Indicator Prevention

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-S01 (critical safety requirement) |
| **Modules** | FW-T2 display_render() with FSM in fault state |
| **Safety Class** | B |
| **Precondition** | Active tracking with lead dot displayed |
| **Stimulus** | External trigger: FSM transitions to any fault state (FAULT, SENSOR_FAULT, AI_FAULT, OVERHEAT, SHUTDOWN) |
| **Verify** | (a) FW-T2 reads fsm_state before rendering each frame, (b) dot_x, dot_y, confidence color suppressed (not rendered), (c) only text messages rendered (fault message), (d) suppression occurs even if AI-COORD continues sending overlay_t with stale lead data, (e) zero frames rendered with lead dot after FSM enters fault |
| **Acceptance** | For each of 5 fault states: zero residual lead indicators in 1000 frames after transition |

#### TC-SAF-05: Lead Bounds Safety — MAX_LEAD_MRAD Enforcement

| Field | Value |
|-------|-------|
| **Requirement** | SWR-BAL-F43 |
| **Modules** | BAL (bounds checking) → AI-COORD (overlay assembly) |
| **Safety Class** | B |
| **Precondition** | Target with extreme angular velocity producing lead > 50.0 mrad |
| **Stimulus** | AI provides detection with angular_vel_dps = 180 (max) at close range |
| **Verify** | (a) BAL computes lead but sets valid=false when magnitude > 50.0 mrad, (b) AI-COORD does not render lead dot when valid=false, (c) "LEAD LIMIT" or equivalent warning displayed |
| **Acceptance** | Zero lead dots rendered when lead exceeds bounds; BAL output.valid = false |

#### TC-SAF-06: Concurrent Fault + Active Pipeline

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F17, SWR-FW-F24 |
| **Modules** | All — simultaneous operation |
| **Safety Class** | B |
| **Precondition** | Full pipeline running (30 Hz), active tracking |
| **Stimulus** | Inject AI_FAULT mid-frame (between AI detection and BAL computation) |
| **Verify** | (a) Current frame's BAL output is NOT displayed (suppressed before render), (b) no race condition between fault transition and overlay render, (c) SPSC queue drain does not render stale data after fault |
| **Acceptance** | Zero stale frames across 100 fault injection points (random timing) |

---

### 4.4 Thermal Throttling Integration Tests (ENV-GPU)

#### TC-THR-01: Thermal State Cascade — NORMAL to THROTTLE_15

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F11, SWR-AI-F53 |
| **Modules** | FW-THERM → AI frame rate → BAL throughput → Display |
| **Precondition** | Pipeline at 30 Hz, NORMAL thermal state |
| **Stimulus** | FW-THERM reports Tj ≥ 85°C → thermal_state = THROTTLE_15 |
| **Verify** | (a) AI reduces capture to 15 Hz (±1 Hz tolerance), (b) BAL called at 15 Hz (matches AI output rate), (c) display continues at 60 Hz (last overlay repeated), (d) no pipeline stall during transition, (e) end-to-end latency still ≤150 ms |
| **Acceptance** | Frame rate transitions within 2 frames; no dropped frames |

#### TC-THR-02: Progressive Throttling — All Stages

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F11, SWR-AI-P03, SWR-AI-P04 |
| **Modules** | FW-THERM → AI → BAL |
| **Stimulus** | Ramp thermal state: NORMAL(30)→THROTTLE_15(15)→THROTTLE_10(10)→THROTTLE_5(5) |
| **Verify** | At each stage: (a) AI frame rate matches target ±1 Hz, (b) BAL output rate matches AI, (c) pipeline latency ≤150 ms, (d) no fault triggered during throttling |
| **Acceptance** | All 4 stages verified; smooth transitions |

#### TC-THR-03: Thermal Shutdown

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F31 |
| **Modules** | FW-THERM → FW-FSM → all modules |
| **Stimulus** | thermal_state = SHUTDOWN (Tj ≥ 100°C) |
| **Verify** | (a) FSM transitions to OVERHEAT, (b) AI stops inference (SWR-AI-F05), (c) display blanked ≤100 ms, (d) COM logs OVERHEAT event, (e) all modules cease non-essential processing |
| **Acceptance** | Display blank ≤100 ms; zero processing after shutdown |

---

### 4.5 Engagement Logging Integration Tests (ENV-BLE)

#### TC-LOG-01: Engagement Event — Full Lifecycle

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F10, SWR-COM-F11 |
| **Modules** | AI-COORD → T-COM → eMMC → BLE |
| **Precondition** | BLE connected, target tracking active |
| **Stimulus** | Complete engagement: detect → track → disengage (outcome=2) |
| **Verify** | (a) engagement_log_record_t written to eMMC engagement.bin, (b) CRC-32 valid on readback, (c) BLE notification sent with core 15 bytes via COM-DATA characteristic, (d) extended fields (max_angular_vel, frames_tracked) stored locally only (not in BLE payload), (e) circular buffer wraps correctly after 1024 records (64 KB / 64 B) |
| **Acceptance** | Record stored + BLE notified; CRC valid; extended fields local-only |

#### TC-LOG-02: Engagement Event — BLE Disconnected

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F02, SWR-COM-F04 |
| **Modules** | AI-COORD → T-COM → eMMC (BLE unavailable) |
| **Precondition** | BLE disconnected |
| **Stimulus** | Engagement completes |
| **Verify** | (a) Record still written to eMMC (local storage unaffected), (b) BLE notification skipped (no error), (c) "NO LINK" displayed, (d) primary pipeline unaffected, (e) on BLE reconnect: buffered data available for bulk transfer |
| **Acceptance** | eMMC write succeeds; no pipeline impact |

#### TC-LOG-03: Health Telemetry — 60-Second Broadcast

| Field | Value |
|-------|-------|
| **Requirement** | SWR-AI health stats via COM |
| **Modules** | AI-HEALTH → COM → BLE COM-STATUS |
| **Precondition** | BLE connected, pipeline running |
| **Stimulus** | 60-second timer fires in AI-HEALTH |
| **Verify** | (a) ai_health_stats_t populated: frame_count, inference_count, detection_count, gate_pass_count, thermal_state, uptime_s, (b) COM receives and updates BLE COM-STATUS characteristic, (c) BLE notification sent to connected device, (d) stats reset correctly for next interval |
| **Acceptance** | Stats received within 1 s of 60 s timer; all fields non-zero after 60 s of operation |

#### TC-LOG-04: System Event Logging — Multi-Source

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F20, SWR-COM-F21 |
| **Modules** | FW + AI + BAL + COM → T-COM → eMMC events.bin |
| **Stimulus** | Generate events from all 4 modules: EVT_BOOT (FW), EVT_THERMAL (FW), EVT_FAULT_ENTER (AI), EVT_BLE_CONNECT (COM) |
| **Verify** | (a) All events written to events.bin, (b) source_module correctly identifies origin, (c) timestamp_s monotonically increasing, (d) severity levels correct, (e) circular buffer handles wrap (10,240 records = 320 KB / 32 B) |
| **Acceptance** | 100 events from each module; round-trip CRC valid |

---

### 4.6 Synchronization & Concurrency Tests (ENV-SIM)

#### TC-SYNC-01: Double-Buffer Atomic Swap — No Torn Frames

| Field | Value |
|-------|-------|
| **Requirement** | SWR-FW-F36 |
| **Modules** | FW-T1 (writer, 30 Hz) → AI-INFER (reader, 30 Hz) |
| **Stimulus** | Run 10,000 frames with concurrent write/read |
| **Verify** | (a) CRC or sentinel pattern at frame start/end matches on every read, (b) no partial frame observed (mixed old/new data), (c) atomic index swap verified via memory ordering checks |
| **Acceptance** | Zero torn frames in 10,000 cycles |

#### TC-SYNC-02: SPSC Queue — Overlay Latest-Wins Behavior

| Field | Value |
|-------|-------|
| **Modules** | AI-COORD (writer) → FW-T2 (reader) |
| **Stimulus** | AI-COORD writes 3 overlay_t entries before FW-T2 reads |
| **Verify** | (a) FW-T2 reads only the latest overlay (not queued), (b) no memory leak from dropped entries, (c) works correctly when writer is faster than reader |
| **Acceptance** | FW-T2 always reads most recent; no stale data |

#### TC-SYNC-03: SPSC Queue — Engagement Event Ordering

| Field | Value |
|-------|-------|
| **Modules** | AI-COORD (writer) → T-COM (reader) |
| **Stimulus** | Rapid engagement sequence — 10 events in 1 second |
| **Verify** | (a) All 10 events received by T-COM in order, (b) no dropped events (queue depth sufficient), (c) timestamps monotonically increasing |
| **Acceptance** | Zero dropped events; correct ordering |

#### TC-SYNC-04: Atomic FSM State — Multi-Reader Consistency

| Field | Value |
|-------|-------|
| **Modules** | FW-T3 (writer) → AI + BAL + COM + FW-T2 (readers) |
| **Stimulus** | FSM transitions while all modules read concurrently |
| **Verify** | (a) All readers see same state (no intermediate values), (b) atomic<uint8_t> provides acquire/release semantics, (c) no reader sees state N+1 before writer commits |
| **Acceptance** | 10,000 transitions with 4 concurrent readers; zero inconsistencies |

---

### 4.7 SPI Protocol Integration Tests (ENV-BLE)

#### TC-SPI-01: Heartbeat Ping-Pong

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F60 |
| **Modules** | T-COM (Jetson) ↔ nRF52840 (Zephyr) |
| **Stimulus** | T-COM sends SPI_HEARTBEAT_PING (cmd 0x10) every 5 s |
| **Verify** | (a) nRF responds with SPI_HEARTBEAT_PONG (cmd 0x90) within 1 s, (b) CRC-16 valid on both directions, (c) SOF (0x7E) and EOF (0x7F) framing correct |
| **Acceptance** | 100 consecutive ping-pong cycles; ≤100 ms round-trip |

#### TC-SPI-02: BLE Notification via SPI

| Field | Value |
|-------|-------|
| **Requirement** | SWR-COM-F11 |
| **Modules** | T-COM → SPI → nRF52840 → BLE → client device |
| **Stimulus** | T-COM sends SPI_SEND_NOTIFY (cmd 0x02) with 15-byte engagement core |
| **Verify** | (a) nRF receives via SPI, (b) nRF updates COM-DATA GATT characteristic, (c) BLE notification sent to connected client, (d) client receives matching 15 bytes |
| **Acceptance** | End-to-end: Jetson → client device ≤500 ms |

#### TC-SPI-03: SPI Frame Error Recovery

| Field | Value |
|-------|-------|
| **Modules** | T-COM ↔ nRF52840 |
| **Stimulus** | Inject CRC error in SPI frame |
| **Verify** | (a) Receiver detects CRC mismatch, (b) frame discarded (no partial processing), (c) next valid frame processed normally, (d) error counter incremented |
| **Acceptance** | Zero corrupted data passed to application; recovery within 1 frame |

---

## 5. Requirements Traceability Matrix

| Test Case | SRS Requirements Verified | Safety Class | Environment |
|-----------|--------------------------|-------------|-------------|
| TC-INT-01 | SWR-FW-F36, SWR-AI-F01 | B | ENV-SIM |
| TC-INT-02 | SWR-AI-F35, SWR-BAL-F71 | C→B | ENV-SIM |
| TC-INT-03 | SWR-BAL-F70 | B | ENV-SIM |
| TC-INT-04 | SWR-FW-F26, SWR-AI-F33 | B | ENV-SIM |
| TC-INT-05 | SWR-COM-F10, SWR-COM-F11 | A | ENV-SIM |
| TC-INT-06 | SWR-COM-F20, SWR-COM-F21 | A | ENV-SIM |
| TC-E2E-01 | VM-S02, SWR-FW-P09 | B | ENV-GPU |
| TC-E2E-02 | SWR-BAL-P01, SWR-AI-P01 | B | ENV-GPU |
| TC-E2E-03 | SWR-BAL-F71 | B | ENV-SIM |
| TC-E2E-04 | SWR-AI-F32, SWR-BAL-F72 | B | ENV-SIM |
| TC-E2E-05 | SWR-AI-F30, SWR-AI-S01 | C | ENV-SIM |
| TC-E2E-06 | SWR-AI-S01, SWR-FW-S01 | B | ENV-SIM |
| TC-E2E-07 | SWR-AI-F01, SWR-BAL-F72 | C | ENV-SIM |
| TC-SAF-01 | SWR-AI-F52, SWR-FW-F24, SWR-FW-F17 | B | ENV-SIM |
| TC-SAF-02 | SWR-BAL-F61, SWR-FW-F17 | B | ENV-SIM |
| TC-SAF-03 | SWR-COM-F61, SWR-COM-F02 | A | ENV-SIM |
| TC-SAF-04 | SWR-FW-S01 | **B (critical)** | ENV-SIM |
| TC-SAF-05 | SWR-BAL-F43 | B | ENV-SIM |
| TC-SAF-06 | SWR-FW-F17, SWR-FW-F24 | B | ENV-SIM |
| TC-THR-01 | SWR-FW-F11, SWR-AI-F53 | B | ENV-GPU |
| TC-THR-02 | SWR-FW-F11, SWR-AI-P03/P04 | B | ENV-GPU |
| TC-THR-03 | SWR-FW-F31 | B | ENV-GPU |
| TC-LOG-01 | SWR-COM-F10, SWR-COM-F11 | A | ENV-BLE |
| TC-LOG-02 | SWR-COM-F02, SWR-COM-F04 | A | ENV-BLE |
| TC-LOG-03 | AI health → COM telemetry | A | ENV-BLE |
| TC-LOG-04 | SWR-COM-F20, SWR-COM-F21 | A | ENV-BLE |
| TC-SYNC-01 | SWR-FW-F36 | B | ENV-SIM |
| TC-SYNC-02 | SPSC overlay queue | B | ENV-SIM |
| TC-SYNC-03 | SPSC engagement queue | A | ENV-SIM |
| TC-SYNC-04 | Atomic FSM multi-reader | B | ENV-SIM |
| TC-SPI-01 | SWR-COM-F60 | A | ENV-BLE |
| TC-SPI-02 | SWR-COM-F11 | A | ENV-BLE |
| TC-SPI-03 | SPI error recovery | A | ENV-BLE |

**Coverage:** 32 test cases covering 44 SRS requirements across 4 modules.

---

## 6. Test Execution Strategy

### 6.0 Applicable Standards

| Standard | Applicability |
|----------|--------------|
| **IEC 61508-7 §C.5** | Software integration testing techniques for Safety Class B. Requires structural coverage of interfaces, fault injection, and timing analysis. |
| **MIL-STD-882E §4.4.4** | System safety test hazard analysis — test cases TC-SAF-01 through TC-SAF-06 derive from hazard analysis of stale indicator display (SWR-FW-S01). |
| **IEC 62443-4-1 §SD-4** | Secure development testing for communication interfaces (SPI, BLE). Applies to TC-SPI-* and TC-LOG-* test cases. |

**Note:** This integration test plan covers pre-qualification testing (SW-Phase 2→3 bridge). Formal V&V against these standards occurs in SW-Phase 5 (Qualification). Test procedures here follow the intent of IEC 61508-7 Annex C techniques without claiming full compliance at this stage.

### 6.1 Phasing

| Phase | Environment | Test Cases | Prerequisite |
|-------|------------|------------|-------------|
| **Phase I: Contracts** | ENV-SIM | TC-INT-01 through TC-INT-06 | Header files compiled from SADs |
| **Phase II: Pipeline** | ENV-SIM | TC-E2E-03/04/05/06/07, TC-SYNC-01/02/03/04 | Module stubs with known I/O |
| **Phase III: Safety** | ENV-SIM | TC-SAF-01 through TC-SAF-06 | FW-FSM + watchdog stubs |
| **Phase IV: Timing** | ENV-GPU | TC-E2E-01/02, TC-THR-01/02/03 | Jetson devkit + TensorRT model |
| **Phase V: Communications** | ENV-BLE | TC-LOG-01/02/03/04, TC-SPI-01/02/03 | nRF52840-DK + Zephyr BLE |
| **Phase VI: Full System** | ENV-FULL | All TC repeated on target HW | Complete hardware prototype |

### 6.2 Entry/Exit Criteria

**Entry to integration testing:**
- All 4 SADs accepted with QC Gate (✅ completed Session 51–54)
- Header files (struct definitions, API signatures) extracted from SADs
- At minimum: FW-API stub library compilable

**Test independence (Safety Class B):**
- Stub design for FW-API, AI, BAL, COM must be **reviewed by a person independent of the module developer** before use in TC-SAF-* and TC-E2E-06 tests
- Safety test results (TC-SAF-01 through TC-SAF-06) require **dual sign-off**: test executor + independent reviewer
- Module developers may run their own Class A tests without independent review

**Exit from integration testing:**
- All 32 test cases PASS
- Zero open safety-critical (Class B) failures
- Class A failures documented with workarounds
- Traceability matrix 100% populated with results
- Safety test sign-off sheets completed (dual signature)

### 6.3 Test Halt & Failure Response

| Trigger | Action | Resume Condition |
|---------|--------|-----------------|
| **Class B test FAIL** (TC-SAF-*, TC-E2E-01/02, TC-SYNC-01/02/04, TC-THR-*) | **Halt all testing.** Log failure with full trace. Notify SW-FW lead + module owner. | Root cause identified, fix implemented, failed test re-run PASS. All prior Phase tests re-run (regression). |
| **Class A test FAIL** (TC-LOG-*, TC-SPI-*, TC-SYNC-03, TC-INT-05/06) | **Continue non-dependent tests.** Log failure. | Fix implemented, failed test re-run PASS before Phase exit. |
| **Contract test FAIL** (TC-INT-01 through TC-INT-04) | **Halt Phase II and beyond.** Struct mismatch invalidates all downstream tests. | Shared header file corrected, all contract tests re-run PASS. |
| **ENV-GPU hardware unavailable** | **Skip Phase IV.** Run Phase I/II/III/V. Mark timing tests as DEFERRED. | Hardware procured → Phase IV executed before Phase VI entry. |
| **Multiple Class B FAILs in same module** | **Escalate to design review.** SAD for affected module may need revision before further testing. | Design review complete, SAD updated if needed, all tests re-run from Phase I. |

### 6.4 Test Harness Architecture

```
┌─────────────────────────────────────────┐
│            Test Runner (pytest/CTest)     │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │ Stub Library │  │ Assertion Engine │  │
│  │ • FW stub    │  │ • Struct size    │  │
│  │ • AI stub    │  │ • Field range    │  │
│  │ • BAL stub   │  │ • Timing P95     │  │
│  │ • COM stub   │  │ • CRC verify     │  │
│  │ • SPI mock   │  │ • Fault sequence │  │
│  └──────┬──────┘  └────────┬─────────┘  │
│         │                   │            │
│  ┌──────▼───────────────────▼─────────┐  │
│  │        Shared Header Files          │  │
│  │  frame_buffer_t  ai_output_t       │  │
│  │  bal_output_t    overlay_t         │  │
│  │  engagement_log_record_t           │  │
│  │  system_event_record_t             │  │
│  │  fsm_state_t  thermal_state_t      │  │
│  └────────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Key principle:** The shared header files ARE the integration contract. If `sizeof(ai_output_t)` differs between AI and BAL compilation units, the struct contract test (TC-INT-02) catches it at compile time via `static_assert`.

---

## 7. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| **R1:** Struct padding differs between ARM (Jetson) and ARM (nRF52840) | Medium | High — silent data corruption | Use `__attribute__((packed))` or explicit `static_assert(sizeof == N)` in shared headers |
| **R2:** SPSC queue depth insufficient under burst | Low | Medium — dropped events | Size queues for worst case: overlay=2 (latest-wins), engagement=16 (burst during rapid engagements) |
| **R3:** Timing tests fail on devkit but pass on target (clock differences) | Medium | Medium — false confidence | Run timing tests on target HW in Phase VI; devkit results are indicative only |
| **R4:** SPI clock compatibility between Jetson GPIO and nRF52840 | Low | High — COM non-functional | Verify SPI mode 0 + 8 MHz on both sides during ENV-BLE Phase V |
| **R5:** Watchdog timing affected by OS scheduler jitter | Medium | Medium — false fault triggers | Use monotonic clock; add 10% margin to timeout (500 ms + 50 ms tolerance) |

---

## 8. Open Items

| ID | Item | Owner | Blocking? |
|----|------|-------|-----------|
| INT-OI-01 | Extract shared header files from SADs into compilable `v_smash_sw_types.h` | SW-FW lead | Yes — required for Phase I |
| INT-OI-02 | Define stub library API (mock FW functions) | SW-FW lead | Yes — required for Phase I |
| INT-OI-03 | Procure nRF52840-DK for ENV-BLE | Hardware | Yes — required for Phase V |
| INT-OI-04 | Define test data corpus (synthetic frames, known detections) | SW-AI lead | Yes — required for Phase II |
| INT-OI-05 | COM-OI-01 from SAD: `fw_clear_fault()` API — needed for TC-SAF recovery tests | SW-FW lead | No — workaround via T3 debounce |

---

*Document generated from 4 SAD + 4 SRS analysis. 32 test cases, 44 requirements traced, 4 test environments defined. QC Gate: 8 PASS, 4 FLAG → all fixed → ACCEPTED.*
