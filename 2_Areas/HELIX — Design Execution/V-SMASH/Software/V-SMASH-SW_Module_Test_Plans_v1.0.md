---
project: V-SMASH-SW
phase: 3
type: module-test-plans
version: 1.0
created: 2026-03-02
status: draft
scope: Unit test plans for all 4 SW modules — SW-FW, SW-AI, SW-BAL, SW-COM
inputs:
  - V-SMASH-SW-FW_SRS_v1.0.md
  - V-SMASH-SW-AI_SRS_v1.0.md
  - V-SMASH-SW-BAL_SRS_v1.0.md
  - V-SMASH-SW-COM_SRS_v1.0.md
  - V-SMASH-SW-ICD_v1.0.md (shared types, struct sizes)
test_environment: ENV-SIM (x86 Linux) unless noted
---

# V-SMASH-SW — Module Test Plans v1.0 (L1a Unit Testing)

**Version 1.0 | 2026-03-02**

---

## 1. Purpose and Scope

This document defines unit test plans (Level 1a) for all four V-SMASH software modules. Unit tests run on ENV-SIM (x86 Linux workstation) unless the test specifically requires hardware (ENV-GPU for AI timing, ENV-BLE for COM SPI).

**Test framework:** CMocka (C), pytest (Python for AI model tests)
**Coverage tool:** gcov/lcov (C), pytest-cov (Python)
**Coverage targets:** ≥80% line coverage, ≥70% branch coverage for safety class B/C modules.

### 1.1 Safety Class Distribution

| Safety Class | Modules / Functions | Unit Test Priority |
|-------------|--------------------|--------------------|
| C (highest) | AI gate logic (CONFIRM/ENGAGE), FW-FSM SAFETY_OVERRIDE | MUST pass 100% |
| B | FW-FSM (non-safety), AI inference, BAL compute, COM SPI | MUST pass 100% critical |
| A | COM health, COM logger, AI post-processing | ≥90% pass rate acceptable |

### 1.2 Stub / Mock Policy

| Stubbed | Real |
|---------|------|
| HAL hardware (OV9281, SSD1331, GPIO) | Business logic under test |
| nRF52840 SPI slave | AI model (ENV-GPU for timing) |
| eMMC filesystem | Ballistic lookup tables |
| External RTC | All ICD data structures (from ICD-SW header) |

---

## 2. SW-FW — Firmware Module Unit Tests

**Implements:** HAL drivers, FSM (10-state), watchdog cascade, thermal monitor, Thread T1 (sensor), Thread T2 (display)
**Language:** C (Zephyr RTOS compatible)
**Test env:** ENV-SIM (Zephyr native_posix board)

### 2.1 HAL Tests

| TC-ID | Test Name | Inputs | Expected Output | Pass Criteria | Safety |
|-------|-----------|--------|-----------------|---------------|--------|
| FW-HAL-01 | Sensor init sequence | Mock OV9281 ACK response | `hal_sensor_init()` returns 0 | Returns 0 in ≤5ms; no retry loop triggered | B |
| FW-HAL-02 | Sensor init failure — NACK | Mock OV9281 NACK (hardware absent) | `hal_sensor_init()` returns -ENODEV | Returns -ENODEV; error logged; does NOT hang | B |
| FW-HAL-03 | Frame capture — nominal | 30 Hz clock tick, mock pixel data (3.1 MB) | `frame_buffer_t` filled correctly | `frame_buffer_t.timestamp` monotonically increasing; pixel data matches mock; sizeof = 32B (aarch64: pointer = 8B) | B |
| FW-HAL-04 | OLED SPI write | `overlay_t` struct (270B mock) | SPI transfer initiated, mock SPI ACK | SPI write completes in ≤5ms; bytes transferred = 270 | B |
| FW-HAL-05 | GPIO output — fire gate | `gpio_pin_set(GATE_PIN, 1)` | GPIO pin HIGH observed on mock | Pin set within 1ms; no other GPIO affected | C |
| FW-HAL-06 | GPIO — SAFETY_OVERRIDE | Green IFF classification + trigger held | Gate pin remains LOW regardless of trigger | Gate NEVER goes HIGH on GREEN IFF — safety invariant | C |

### 2.2 FSM Tests

| TC-ID | Test Name | Initial State | Input Sequence | Expected Final State | Pass Criteria | Safety |
|-------|-----------|--------------|----------------|---------------------|---------------|--------|
| FW-FSM-01 | Boot → STANDBY | BOOT | Power on, all modules init OK | STANDBY | State = STANDBY in ≤30s; OLED shows startup | B |
| FW-FSM-02 | STANDBY → ALERT | STANDBY | A-DETECT: `detected=true`, `conf=0.75` (3 consecutive frames) | ALERT | Transition in ≤300ms; A-TRACK + A-IFF started | B |
| FW-FSM-03 | Low-confidence detection rejected | STANDBY | A-DETECT: `detected=true`, `conf=0.65` (1 frame) | STANDBY | No state change; 3-frame threshold enforced | B |
| FW-FSM-04 | ALERT → LOCKED (hostile) | ALERT | A-IFF: `result=HOSTILE`, `conf=0.90` | LOCKED | Red reticle command issued; A-FC started | C |
| FW-FSM-05 | ALERT → AMBER (uncertain) | ALERT | A-IFF: `result=UNKNOWN`, `conf=0.55` | AMBER | Amber reticle command issued; no gate action | C |
| FW-FSM-06 | GREEN IFF blocks gate | ALERT | A-IFF: `result=NEUTRAL`, `conf=0.95` + trigger held | ALERT (no LOCKED) | SAFETY_OVERRIDE: gate pin stays LOW; green reticle displayed | C |
| FW-FSM-07 | LOCKED → READY | LOCKED | Trigger held (operator input) | READY | State = READY; A-FC monitoring active | C |
| FW-FSM-08 | READY → ENGAGED | READY | A-FC: `quality=90`, `window_open=true`, trigger held | ENGAGED | Gate pin HIGH for ≤50ms; engagement logged | C |
| FW-FSM-09 | Quality floor — gate blocked | READY | A-FC: `quality=75`, trigger held | READY | Gate pin stays LOW; quality < 85 floor enforced | C |
| FW-FSM-10 | ENGAGED → ASSESSING → CONCLUDED | ENGAGED | Shot complete, track lost, no re-detect | CONCLUDED | ASSESSING intermediate state visited; log written; → STANDBY | B |
| FW-FSM-11 | Any state → FAULT | Any | WDG timeout: SW-AI stale for 2s | FAULT | OLED manual indicator; gate pin forced LOW; system recoverable | B |
| FW-FSM-12 | Safe zone violation | READY | A-FC: `safe_zone_exit=true` | READY (gate blocked) | Gate pin stays LOW regardless of quality/trigger; RED-X indicator | C |

### 2.3 Watchdog Tests

| TC-ID | Test Name | Test Method | Pass Criteria | Safety |
|-------|-----------|------------|---------------|--------|
| FW-WDG-01 | Normal kick — no timeout | SW-AI kicks WDG at 10 Hz (mock) | WDG does NOT fire; FSM stays in current state | B |
| FW-WDG-02 | AI stale — WDG fires at 2s | Suspend WDG kick for 2.1s | WDG fires in 2.0±0.1s; FSM → FAULT; gate forced LOW | B |
| FW-WDG-03 | BAL stale — WDG fires | Suspend BAL WDG kick for 2.1s | WDG fires; FSM → FAULT | B |
| FW-WDG-04 | WDG recovery after FAULT | Fire WDG → FAULT → restart modules → kick resumes | FSM returns to STANDBY within 5s of modules restarted | B |

### 2.4 Thermal Monitor Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria |
|-------|-----------|--------|----------|---------------|
| FW-THERM-01 | Normal operation | Mock Tj = 60°C | No throttle action | Tj read; state = NOMINAL; no messages to AI |
| FW-THERM-02 | Throttle trigger | Mock Tj = 85°C | Throttle command sent to AI | `thermal_state_t.throttle_active = true`; AI frame rate target = 10 Hz |
| FW-THERM-03 | Thermal shutdown | Mock Tj = 101°C | Shutdown sequence initiated | OLED warning; FSM → FAULT after 30s; graceful |
| FW-THERM-04 | Recovery after throttle | Tj drops from 87°C to 75°C (below hysteresis) | Throttle released | Frame rate restored to 30 Hz; no oscillation |

---

## 3. SW-AI — Inference Module Unit Tests

**Implements:** Frame ingestion, YOLOv8-nano TensorRT inference, IFF classification, confidence gate, coordinator output
**Language:** Python 3.11 + TensorRT (inference), C binding via ctypes
**Test env:** ENV-SIM for logic; ENV-GPU for timing tests (marked GPU)

### 3.1 Pipeline and Preprocessing Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| AI-PP-01 | Frame ingestion | `frame_buffer_t` (32B header + 1280×720 mock image) | Preprocessed tensor: 640×640, float32, normalized | Tensor shape = (1,3,640,640); values in [0,1]; latency ≤5ms | B |
| AI-PP-02 | Frame drop detection | 2 frames with same timestamp | Frame drop counter incremented | `frame_drop_count` += 1; warning logged; no crash | B |
| AI-PP-03 | Corrupt frame handling | `frame_buffer_t` with `valid=false` | Frame skipped; previous output held | No inference run; `ai_output_t.stale = true` | B |

### 3.2 Detection and Classification Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| AI-DET-01 | Drone detected — above threshold | Test image: FPV drone at 100m (from validation dataset) | `detected=true`, `drone_type=FPV`, `conf≥0.75` | Detection output matches ground truth; correct drone_type | B |
| AI-DET-02 | No-drone — below threshold | Test image: clear sky, bird, debris | `detected=false` | No false positive on ≥50 negative test images; FPR ≤2% | C |
| AI-DET-03 | Low-confidence detection | Test image: partially obscured drone (conf = 0.62) | `detected=true`, `conf=0.62` (pass through) | Detection reported; FSM decides threshold (not AI module) | B |
| AI-IFF-01 | HOSTILE classification | Test image: known FPV attack pattern | `result=HOSTILE`, `conf≥0.85` | Classification correct; basis[] array populated | C |
| AI-IFF-02 | NEUTRAL classification | Test image: civilian DJI with RC marker | `result=NEUTRAL`, `conf≥0.85` | Classification = NEUTRAL; gate NOT opened | C |
| AI-IFF-03 | UNKNOWN — ambiguous | Test image: blurred, partial view | `result=UNKNOWN`, `conf<0.70` | UNKNOWN returned immediately (no retry delay); amber triggers | C |
| AI-IFF-04 | IFF confidence oscillation | 5 frames alternating HOSTILE/UNKNOWN around 0.70 | Amber reticle held until 500ms stable | `stable_flag = false` until 500ms continuous; no flicker | C |

### 3.3 Confidence Gate and Output Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| AI-GATE-01 | Gate pass — high confidence | `conf=0.85`, `result=HOSTILE` | `gate_passed=true` | Output forwarded to BAL; `ai_output_t` populated correctly | C |
| AI-GATE-02 | Gate block — low confidence | `conf=0.68`, `result=HOSTILE` | `gate_passed=false` | BAL receives stale/null; amber reticle path | C |
| AI-GATE-03 | Output struct size | Check `sizeof(ai_output_t)` | 48B | `sizeof(ai_output_t) == 48` (verified per ICD-SW Appendix A) | B |
| AI-GATE-04 | Output rate | Generate 30 frames at 30 Hz | 30 outputs in 1.0s ±50ms | Rate maintained; no backlog | B |
| AI-TIMING-01 | Inference latency — GPU | 100 frames on ENV-GPU (TensorRT) | P95 latency ≤70ms per frame | P50 ≤50ms, P95 ≤70ms (measured, not estimated) | B |

### 3.4 AI Health and Coordinator Tests

| TC-ID | Test Name | Expected | Pass Criteria |
|-------|-----------|----------|---------------|
| AI-HLTH-01 | Health stats generation | `ai_health_stats_t` populated at 1 Hz | All fields valid (sizeof = 44B); `inference_fps` within ±1 Hz of target |
| AI-HLTH-02 | Coordinator output struct | `ai_frame_output_t` generated | sizeof = 492B (per ICD-SW correction); all fields populated |

---

## 4. SW-BAL — Ballistic Module Unit Tests

**Implements:** Ballistic computation, trajectory predictor, lead angle calculator, output generation
**Language:** C
**Test env:** ENV-SIM

### 4.1 Ballistic Computation Accuracy Tests

> Reference values derived from published exterior ballistics tables (7.62mm NATO M80 and 12.7mm M33 Ball). Tests use ≤1% tolerance on computed values.

| TC-ID | Test Name | Input Parameters | Expected Lead (mrad) | Pass Criteria | Safety |
|-------|-----------|-----------------|---------------------|---------------|--------|
| BAL-COMP-01 | 7.62mm @ 100m, drone 30°/s crossing | Caliber=7.62, range=100m, v_target=30m/s (90°), v0=900m/s | ~2.2 mrad | Computed lead within ±0.05 mrad of reference | B |
| BAL-COMP-02 | 12.7mm @ 200m, drone 20°/s approaching | Caliber=12.7, range=200m, v_target=20m/s (45°), v0=880m/s | ~1.8 mrad | Computed lead within ±0.05 mrad of reference | B |
| BAL-COMP-03 | 7.62mm @ 50m, hovering target | range=50m, v_target=0 m/s | 0.0 mrad (no lead needed) | Lead = 0.0 ±0.01 mrad | B |
| BAL-COMP-04 | Wind correction (10 m/s crosswind) | 7.62mm @ 150m, 10 m/s crosswind, drone at 90° | Lead adjusted by wind drift ≈ 1.5 mrad | Wind-corrected lead vs. no-wind lead differs by ≥1.0 mrad | B |
| BAL-COMP-05 | Range input zero — error handling | range = 0 | Returns error; no division by zero | Returns BAL_ERR_RANGE; no crash; no inf/nan output | B |
| BAL-COMP-06 | Negative range — error handling | range = -10m | Returns error | Returns BAL_ERR_RANGE | B |

### 4.2 Trajectory Predictor Tests

| TC-ID | Test Name | Input | Expected | Pass Criteria |
|-------|-----------|-------|----------|---------------|
| BAL-PRED-01 | Linear trajectory extrapolation | 5 track points: straight line, const velocity | Predicted position matches linear extrapolation ±0.5m at 200ms ahead | Position error ≤0.5m (t+200ms) for constant-velocity track | B |
| BAL-PRED-02 | Maneuvering target extrapolation | 5 track points: turning at 10°/s | Prediction degrades gracefully; confidence output reflects uncertainty | `prediction_conf < 0.7` when angular acceleration > 15°/s²; BAL does not crash | B |
| BAL-PRED-03 | Track lost — last known | Track lost (NULL input) | Last valid prediction held for ≤500ms | `last_valid_prediction` used; `prediction_stale = true` after 500ms | B |

### 4.3 Output Struct Tests

| TC-ID | Test Name | Expected | Pass Criteria |
|-------|-----------|----------|---------------|
| BAL-OUT-01 | Output struct size | `sizeof(bal_output_t) == 36B` | Assertion passes (per ICD-SW corrected sizes) | B |
| BAL-OUT-02 | Output at 30 Hz | 30 outputs generated per second | Rate = 30 Hz ±1 Hz; no missed outputs under nominal load | B |
| BAL-OUT-03 | Solution quality flag | `quality=0` when BAL inputs invalid | `quality = 0` propagated to FW-FC gate correctly | C |

---

## 5. SW-COM — Communications Module Unit Tests

**Implements:** nRF52840 SPI driver, GATT characteristic management, engagement logger, health telemetry aggregator
**Language:** C (nRF52840 firmware: Zephyr / Nordic SDK)
**Test env:** ENV-SIM for logic; ENV-BLE for SPI + BLE stack tests (marked BLE)

### 5.1 SPI Driver Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| COM-SPI-01 | Frame transmit — nominal | `engagement_log_record_t` (64B) | SPI frame: header(2B) + payload(64B) + CRC-16(2B) = 68B | Frame bytes match expected; CRC-16 correct (CCITT polynomial) | A |
| COM-SPI-02 | Frame size limit | 257B max payload | Frame accepted; larger payload rejected | Payload ≤255B accepted; >255B returns COM_ERR_OVERFLOW | A |
| COM-SPI-03 | CRC corruption detection | Inject 1-bit flip in payload | CRC mismatch detected | `crc_error_count` incremented; corrupted frame discarded; no crash | A |
| COM-SPI-04 | SPI clock rate | 8 MHz SPI clock (mock) | Transfer completes in expected time | 68B at 8MHz ≈ 68μs; measured within ±20% | A |
| COM-SPI-05 | IRQ-driven receive | nRF52840 mock sends 32B system_event | Event received; `com_rx_callback` invoked | Callback fires within ≤1ms of SPI IRQ; event data intact | A |

### 5.2 GATT Characteristic Tests (ENV-BLE)

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| COM-BLE-01 | GATT service advertising | BLE stack start | V-SMASH service UUID visible in scan (UUID from ICD-SW §ICD-09) | Service UUID = V-SMASH base UUID (derived from "VSMASH" ASCII); discoverable | A |
| COM-BLE-02 | ENGAGEMENT_LOG read | Phone reads ENGAGEMENT_LOG characteristic | `engagement_log_record_t` (64B) returned | Data length = 64B; content matches last logged record | A |
| COM-BLE-03 | HEALTH_TELEMETRY notify | Health update at 1 Hz | Notification sent to subscribed client | Notification rate = 1 Hz ±0.1 Hz; `ai_health_stats_t` 44B | A |
| COM-BLE-04 | SYSTEM_EVENT indicate | New system event (fault) | Indication sent; ACK received | Indication fired within 100ms of event; ACK from client | A |
| COM-BLE-05 | All 11 GATT characteristics | Enumerate all characteristics | 11 characteristics readable | All 11 defined in ICD-SW §ICD-09 enumerable and readable | A |
| COM-BLE-06 | IRONMESH placeholder char | Read IRONMESH_DATA characteristic | Returns placeholder (0x00 or empty) | No crash; defined UUID present | A |

### 5.3 Engagement Logger Tests

| TC-ID | Test Name | Inputs | Expected | Pass Criteria | Safety |
|-------|-----------|--------|----------|---------------|--------|
| COM-LOG-01 | Write engagement record | `engagement_log_record_t` (64B) | Record written to eMMC mock | Write completes; `read_back == written`; no corruption | A |
| COM-LOG-02 | Circular buffer wrap | Write N+1 records to N-record buffer | Oldest record overwritten | `log_count` stays at N; newest record present; no crash | A |
| COM-LOG-03 | Flush on shutdown | Trigger graceful shutdown during active write | All pending records flushed before halt | After simulated shutdown + remount: all in-flight records present on eMMC | A |
| COM-LOG-04 | Record struct size | `sizeof(engagement_log_record_t) == 64B` | Static assertion passes | `_Static_assert` in header passes (per ICD-SW Appendix A) | A |

### 5.4 Health Telemetry Aggregator Tests

| TC-ID | Test Name | Expected | Pass Criteria |
|-------|-----------|----------|---------------|
| COM-HLTH-01 | Aggregate from AI module | `ai_health_stats_t` (44B) received at 1 Hz | Aggregated into `health_telemetry_t`; no data loss | A |
| COM-HLTH-02 | Aggregate from FW module | Battery %, thermal state, FSM state received | `battery_pct` and `fsm_state` reflected in health output | A |
| COM-HLTH-03 | Health over BLE | Health transmitted to phone | `health_telemetry_t` struct on HEALTH_TELEMETRY characteristic | A |

---

## 6. Exit Criteria Summary

| Module | Critical Tests | Must Pass | Coverage Target |
|--------|---------------|-----------|-----------------|
| SW-FW | FW-HAL-05/06, FW-FSM-04/06/08/09/12 (safety-critical C) | 100% critical | Line ≥80%, Branch ≥70% |
| SW-AI | AI-DET-02, AI-IFF-01/02/03/04, AI-GATE-01/02 (safety C) | 100% critical | Line ≥80%, Branch ≥70% |
| SW-BAL | BAL-COMP-05/06 (error handling), BAL-OUT-03 (quality flag) | 100% critical | Line ≥80%, Branch ≥70% |
| SW-COM | COM-SPI-03 (CRC), COM-BLE-01/05, COM-LOG-03 (flush) | 100% critical | Line ≥70%, Branch ≥60% |

**L1a exit gate:** All CRITICAL tests pass (100%). No CRITICAL open defects. Coverage targets met. SW Lead signs off.

---

*V-SMASH-SW Module Test Plans v1.0 — 2026-03-02*
*56 unit test cases across 4 modules. Safety class C tests (gate logic, IFF, SAFETY_OVERRIDE) require 100% pass.*
*Test framework: CMocka (C), pytest (Python). Coverage: gcov/lcov, pytest-cov.*
