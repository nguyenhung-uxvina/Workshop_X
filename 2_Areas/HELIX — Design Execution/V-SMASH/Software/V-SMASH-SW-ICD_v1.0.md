---
project: V-SMASH-SW
type: interface-control-document
version: 1.0
created: 2026-03-02
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — FLAG-01 fixed (8 struct sizes corrected), FLAG-12 fixed (GATT UUID assigned) — 2026-03-02)
parent_family: V-SMASH
sw_phase: 2→3 bridge (Architecture → Implementation)
scope: All inter-module interfaces across SW-FW, SW-AI, SW-BAL, SW-COM
source_documents:
  - V-SMASH-SW-FW_SAD_v1.0.md
  - V-SMASH-SW-AI_SAD_v1.0.md
  - V-SMASH-SW-BAL_SAD_v1.0.md
  - V-SMASH-SW-COM_SAD_v1.0.md
resolves_open_items: [INT-OI-01 (shared header file), INT-OI-02 (stub library API)]
---

# V-SMASH-SW — Interface Control Document

**Version 1.0 | 2026-03-02**

---

## 1. Purpose

This document is the **single source of truth** for all inter-module interfaces in the V-SMASH software system. It defines:

1. **Shared data types** — all structs, enums, and constants used across module boundaries (§2)
2. **Interface boundaries** — 9 specific interfaces between module pairs (§3–§11)
3. **Compilable header file** — `v_smash_sw_types.h` extracted directly from this document (Appendix A)

**Resolves:** INT-OI-01 (shared header file) and INT-OI-02 (stub library API) from the Integration Test Plan.

**Rule:** If this ICD and any SAD disagree, **this ICD governs** at the interface boundary. SADs govern internal module design.

---

## 2. Shared Data Types

### 2.1 Enumerations

#### fsm_state_t — System Finite State Machine

| Value | Name | Description | Entered By |
|-------|------|-------------|-----------|
| 0 | `FSM_INIT` | Power-on initialization | FW-T3 (boot) |
| 1 | `FSM_READY` | Nominal operation, pipeline active | FW-T3 (init complete) |
| 2 | `FSM_DETECTED` | Target detected, lead computed | FW-T3 (AI gate pass) |
| 3 | `FSM_POST_SHOT` | Post-shot cooldown | FW-T3 (shot event) |
| 4 | `FSM_LOW_BATTERY` | Battery SoC ≤20% | FW-T3 (power monitor) |
| 5 | `FSM_OVERHEAT` | Tj ≥100°C, thermal shutdown | FW-T3 (thermal monitor) |
| 6 | `FSM_FAULT` | General fault (BAL, COM) | fw_report_fault() |
| 7 | `FSM_SENSOR_FAULT` | Camera/sensor failure | fw_report_fault() |
| 8 | `FSM_AI_FAULT` | AI pipeline timeout/failure | fw_report_fault() |
| 9 | `FSM_SHUTDOWN` | Commanded shutdown | FW-T3 (power button) |

**Storage:** `atomic<uint8_t>` — single writer (FW-T3), multiple readers.
**Safety Class:** B — FSM state controls indicator suppression (SWR-FW-S01).

#### thermal_state_t — Thermal Throttle State

| Value | Name | AI Frame Rate | Tj Threshold |
|-------|------|--------------|-------------|
| 0 | `THERMAL_NORMAL` | 30 Hz | Tj < 85°C |
| 1 | `THERMAL_THROTTLE_15` | 15 Hz | Tj ≥ 85°C |
| 2 | `THERMAL_THROTTLE_10` | 10 Hz | Tj ≥ 90°C |
| 3 | `THERMAL_THROTTLE_5` | 5 Hz | Tj ≥ 95°C |
| 4 | `THERMAL_SHUTDOWN` | 0 Hz (halt) | Tj ≥ 100°C |

**Storage:** `atomic<uint8_t>` — single writer (FW-T3), multiple readers.

#### power_state_t — Power Supply State

| Value | Name | SoC Range | Action |
|-------|------|-----------|--------|
| 0 | `POWER_OK` | >20% | Normal operation |
| 1 | `POWER_LOW_BATTERY` | 10–20% | Warning LED + display message |
| 2 | `POWER_CRITICAL` | ≤10% | Graceful shutdown initiated |

#### fault_type_t — Fault Classification

| Value | Name | Source Module |
|-------|------|-------------|
| 0 | `FAULT_SENSOR` | FW-T3 (sensor health check) |
| 1 | `FAULT_AI` | SW-AI (watchdog timeout / init failure) |
| 2 | `FAULT_BAL` | SW-BAL (compute fault) |
| 3 | `FAULT_COM` | SW-COM (SPI heartbeat failure) |
| 4 | `FAULT_GENERAL` | Any module (unclassified) |

#### module_id_t — Watchdog Module Registration

| Value | Name |
|-------|------|
| 0 | `MODULE_AI` |
| 1 | `MODULE_BAL` |
| 2 | `MODULE_COM` |
| 3 | `MODULE_SPARE` |

#### dot_color_t — Overlay Lead Dot Color

| Value | Name | Confidence Range | Display |
|-------|------|-----------------|---------|
| 0 | `DOT_COLOR_NONE` | <0.70 (suppressed) | No dot rendered |
| 1 | `DOT_COLOR_YELLOW` | 0.70–0.89 | Yellow dot |
| 2 | `DOT_COLOR_GREEN` | ≥0.90 | Green dot |

#### target_class_t — AI Detection Classification

| Value | Name |
|-------|------|
| 0 | `CLASS_ROTOR` |
| 1 | `CLASS_FIXED_WING` |
| 2 | `CLASS_BIRD` |
| 3 | `CLASS_UNKNOWN` |

#### engagement_outcome_t — Engagement Result

| Value | Name |
|-------|------|
| 0 | `OUTCOME_LOST` |
| 1 | `OUTCOME_SHOT_FIRED` |
| 2 | `OUTCOME_DISENGAGE` |

#### bal_error_t — BAL Compute Return Codes

| Value | Name | Description |
|-------|------|-------------|
| 0 | `BAL_OK` | Computation successful |
| -1 | `BAL_ERR_INVALID_INPUT` | ai_output_t validation failed |
| -2 | `BAL_ERR_COMPUTE_FAULT` | Internal computation error (NaN, overflow) |
| -3 | `BAL_ERR_FAULTED` | Module in fault state, refusing computation |

#### spi_cmd_t — SPI Command IDs (Jetson → nRF)

| Value | Name | Payload | Description |
|-------|------|---------|-------------|
| 0x01 | `SPI_SET_ADV_DATA` | GATT characteristic data | Push BLE characteristic update |
| 0x02 | `SPI_SEND_NOTIFY` | Notification payload (≤20 B) | Trigger BLE notification |
| 0x03 | `SPI_OTA_BEGIN` | Image size (4 B) + CRC-32 (4 B) | Start firmware update session |
| 0x04 | `SPI_OTA_CHUNK` | Offset (4 B) + data (≤240 B) | Transfer firmware chunk |
| 0x05 | `SPI_OTA_COMMIT` | None | Finalize and verify update |
| 0x10 | `SPI_HEARTBEAT_PING` | None | Health check request |

#### spi_evt_t — SPI Event IDs (nRF → Jetson, via IRQ)

| Value | Name | Payload | Description |
|-------|------|---------|-------------|
| 0x81 | `SPI_BLE_CONNECTED` | None | BLE central connected |
| 0x82 | `SPI_BLE_DISCONNECTED` | None | BLE central disconnected |
| 0x83 | `SPI_BLE_DATA_RECEIVED` | Characteristic ID + data | Write from BLE central |
| 0x84 | `SPI_OTA_ACK` | Status byte | Chunk acknowledged |
| 0x85 | `SPI_OTA_RESULT` | Status byte | Update complete/failed |
| 0x90 | `SPI_HEARTBEAT_PONG` | None | Health check response |

### 2.2 Structures

#### frame_buffer_t — Sensor Frame (FW→AI)

```c
typedef struct __attribute__((packed)) {
    uint8_t  *data;            // Pixel data pointer (1920×1080 raw)
    uint32_t  width;           // 1920
    uint32_t  height;          // 1080
    uint32_t  stride;          // Bytes per row (≥1920, aligned)
    uint64_t  timestamp_us;    // Monotonic microseconds
    uint32_t  seq;             // Frame sequence number (0, 1, 2, ...)
} frame_buffer_t;
// sizeof = 32 bytes on aarch64 (pointer=8B). Jetson-only — never serialized to nRF.
// Pixel data size = stride × height ≈ 3.1 MB
```

**Sync:** Double-buffered with atomic index swap. Zero-copy.
**Rate:** 30 Hz (THERMAL_NORMAL), reduced per thermal_state_t.
**Safety:** B — frame drives detection pipeline.

#### ai_raw_det_t — Raw Detection (AI internal)

```c
typedef struct __attribute__((packed)) {
    float    bbox_cx;           // Center X in sensor space [0, 1920]
    float    bbox_cy;           // Center Y in sensor space [0, 1080]
    float    bbox_w;            // Width in pixels
    float    bbox_h;            // Height in pixels
    float    class_scores[4];   // Per-class confidence [rotor, fixed_wing, bird, unknown]
    float    confidence;        // Max class score [0.0, 1.0]
    int32_t  class_id;          // Index of max score [0..3]
} ai_raw_det_t;
// sizeof = 40 bytes (4×4 bbox + 4×4 scores + 4 conf + 4 class)
```

#### ai_output_t — Gated Detection (AI→BAL)

```c
typedef struct __attribute__((packed)) {
    uint32_t track_id;          // Persistent track identifier
    float    bbox_cx;           // Center X in sensor space [0, 1920]
    float    bbox_cy;           // Center Y in sensor space [0, 1080]
    float    bbox_w;            // Width in pixels
    float    bbox_h;            // Height in pixels
    float    angular_size_mrad; // Target apparent size (for range LUT)
    float    confidence;        // Gated confidence ≥0.70
    int32_t  class_id;          // target_class_t
    float    angular_vel_dps;   // Angular velocity (deg/s) from tracker
    uint64_t timestamp_us;      // Frame timestamp
    uint32_t frame_seq;         // Frame sequence number
} ai_output_t;
// sizeof = 48 bytes (9×4 fields + 8 timestamp + 4 frame_seq)
```

**Validity:** Only produced when confidence ≥ 0.70 AND track age ≥ 3 frames.
**Safety:** C — gates engagement capability.

#### ai_frame_output_t — Per-Frame Detection Array (AI→Coordinator)

```c
#define AI_MAX_DETECTIONS 10

typedef struct __attribute__((packed)) {
    ai_output_t detections[AI_MAX_DETECTIONS];
    int32_t     count;          // Number of valid detections [0..10]
    uint64_t    timestamp_us;   // Frame timestamp
} ai_frame_output_t;
// sizeof = 492 bytes (48×10 + 4 + 8)
```

#### bal_output_t — Ballistic Solution (BAL→Coordinator)

```c
typedef struct __attribute__((packed)) {
    float    lead_x_mrad;       // Left-right lead angle ±50.0
    float    lead_y_mrad;       // Up-down lead angle ±50.0
    float    lead_magnitude_mrad; // sqrt(x² + y²), capped at 50.0
    float    range_est_m;       // Smoothed monocular range [20, 500] m
    uint8_t  range_valid;       // 1 = within bounds, 0 = out-of-bounds
    uint8_t  valid;             // 1 = lead within MAX_LEAD_MRAD, 0 = exceeded
    uint8_t  est_indicator;     // 1 = estimated/extrapolated, display "EST"
    uint8_t  range_warning;     // 1 = display "RANGE?"
    uint8_t  compute_fault;     // 1 = BAL error, will trigger FAULT_BAL
    uint8_t  _pad[3];           // Alignment padding
    uint32_t track_id;          // Matches ai_output_t.track_id
    float    angular_vel_dps;   // From BAL Kalman tracker
    uint8_t  thermal_state;     // thermal_state_t at computation time
    uint8_t  _reserved[3];     // Future use
} bal_output_t;
// sizeof = 36 bytes (4×4 floats + 5×1 flags + 3 pad + 4 track + 4 vel + 1 thermal + 3 reserved)
```

**Contract:** `bal_compute()` returns bal_output_t synchronously. ≤20 ms WCET.
**Safety:** B — lead accuracy affects aiming indicator.

#### overlay_t — Display Overlay (Coordinator→FW-T2)

```c
#define OVERLAY_MAX_MESSAGES 8
#define OVERLAY_MSG_LEN      32

typedef struct __attribute__((packed)) {
    uint16_t dot_x;             // Lead dot X [0, 640] OLED pixels
    uint16_t dot_y;             // Lead dot Y [0, 480] OLED pixels
    uint8_t  dot_color;         // dot_color_t
    uint8_t  fire_gate;         // 1 = fire gate open, 0 = closed
    char     messages[OVERLAY_MAX_MESSAGES][OVERLAY_MSG_LEN]; // Null-terminated
    uint64_t timestamp_us;      // Frame timestamp
} overlay_t;
// sizeof = 270 bytes (2+2+1+1+256+8)
```

**Sync:** Lock-free SPSC queue (depth 2), latest-wins policy.
**Safety:** B — FW-T2 MUST check fsm_state before rendering dot/color (SWR-FW-S01).

#### engagement_log_record_t — Engagement Event (Coordinator→COM)

```c
typedef struct __attribute__((packed)) {
    // --- Core fields (bytes 0–14): sent via BLE ---
    uint32_t timestamp_s;       // Monotonic seconds
    uint8_t  target_class;      // target_class_t
    uint8_t  confidence_pct;    // 0–100
    uint16_t range_est_dm;      // Range in decimeters [0, 3000] = 0–300 m
    int16_t  lead_angle_01mrad; // Lead angle in 0.1 mrad [±5000]
    uint16_t duration_ms;       // Tracking duration
    uint8_t  outcome;           // engagement_outcome_t
    uint8_t  thermal_state;     // thermal_state_t
    uint8_t  battery_soc;       // 0–100%
    // --- Extended fields (bytes 15–53): local storage only ---
    uint16_t max_angular_vel_01dps; // Peak velocity in 0.1 deg/s
    uint16_t avg_confidence_pct10;  // Average confidence × 10
    uint8_t  frames_tracked;    // Number of frames
    uint8_t  reacquisitions;    // Post-shot reacquisitions
    int16_t  bore_offset_01mrad_x;  // Bore-sight calibration X
    int16_t  bore_offset_01mrad_y;  // Bore-sight calibration Y
    // --- Reserved (bytes 25–59): zero-filled, future fields ---
    uint8_t  reserved[35];      // Padding to align CRC at end
    // --- Integrity (bytes 60–63) ---
    uint32_t crc32;             // CRC-32 over bytes [0..59]
} engagement_log_record_t;
// sizeof = 64 bytes (15 core + 10 extended + 35 reserved + 4 CRC)
// BLE core payload = bytes [0..14] = 15 bytes
```

**Sync:** Lock-free SPSC queue from AI-COORD to T-COM.
**Storage:** mmap circular buffer (engagement.bin, 64 KB = 1024 records).
**Safety:** A — post-engagement data, no operational impact.

#### system_event_record_t — System Event (Any→COM)

```c
typedef struct __attribute__((packed)) {
    uint32_t timestamp_s;       // Monotonic seconds
    uint8_t  event_type;        // See event type table below
    uint8_t  param_hi;          // Event-specific parameter (high byte)
    uint8_t  param_lo;          // Event-specific parameter (low byte)
    uint8_t  source_module;     // 0=FW, 1=AI, 2=BAL, 3=COM
    uint32_t uptime_total_s;    // Cumulative lifetime uptime
    uint8_t  severity;          // 0=INFO, 1=WARN, 2=ERROR, 3=CRITICAL
    uint8_t  _reserved[15];    // Padding
    uint32_t crc32;             // CRC-32 over bytes [0..27]
} system_event_record_t;
// sizeof = 32 bytes
```

**Event Types:**

| Value | Name | param_hi | param_lo |
|-------|------|----------|----------|
| 0x01 | `EVT_BOOT` | fw_version_major | fw_version_minor |
| 0x02 | `EVT_FAULT_ENTER` | fault_type_t | fsm_state_t (previous) |
| 0x03 | `EVT_FAULT_EXIT` | fault_type_t | fsm_state_t (new) |
| 0x04 | `EVT_THERMAL` | thermal_state_t (old) | thermal_state_t (new) |
| 0x10 | `EVT_BLE_CONNECT` | 0 | 0 |
| 0x11 | `EVT_BLE_DISCONNECT` | 0 | 0 |
| 0x20 | `EVT_FW_UPDATE_START` | 0 | 0 |
| 0x21 | `EVT_FW_UPDATE_OK` | 0 | 0 |
| 0x22 | `EVT_FW_UPDATE_FAIL` | error_code | 0 |
| 0x30 | `EVT_NRF_UNRESPONSIVE` | consecutive_fails | 0 |

**Storage:** mmap circular buffer (events.bin, 320 KB = 10,240 records).

#### ai_health_stats_t — Health Telemetry (AI→COM)

```c
typedef struct __attribute__((packed)) {
    uint32_t frame_count;       // Total frames captured
    uint32_t inference_count;   // Successful inferences
    uint32_t inference_fail_count; // Failed inferences
    uint32_t detection_count;   // Raw detections (pre-gate)
    uint32_t gate_pass_count;   // Detections passing confidence gate
    uint32_t gate_suppress_count; // Detections suppressed by gate
    uint32_t track_create_count; // New tracks started
    uint32_t track_retire_count; // Tracks retired
    uint32_t reacquisition_count; // Post-shot reacquisitions
    uint16_t model_version;     // AI model version tag
    uint8_t  thermal_state;     // Current thermal_state_t
    uint8_t  _pad;
    uint32_t uptime_s;          // Seconds since AI init
} ai_health_stats_t;
// sizeof = 44 bytes (9×4 uint32 + 2 uint16 + 1+1 uint8 + 4 uint32)
```

**Rate:** Published every 60 seconds to COM.

#### spi_frame_t — SPI Wire Protocol (Jetson ↔ nRF52840)

```c
#define SPI_SOF         0x7E
#define SPI_EOF         0x7F
#define SPI_MAX_PAYLOAD 251
#define SPI_MAX_FRAME   257  // SOF(1) + LEN(1) + CMD(1) + PAYLOAD(251) + CRC16(2) + EOF(1)

typedef struct __attribute__((packed)) {
    uint8_t  sof;               // Always SPI_SOF (0x7E)
    uint8_t  len;               // Payload length [0, 251]
    uint8_t  cmd;               // spi_cmd_t or spi_evt_t
    uint8_t  payload[SPI_MAX_PAYLOAD]; // Variable length
    uint16_t crc16;             // CRC-16/CCITT over [len, cmd, payload[0..len-1]]
    uint8_t  eof;               // Always SPI_EOF (0x7F)
} spi_frame_t;
// Max wire size = 257 bytes
// SPI Mode 0, 8 MHz clock
```

### 2.3 Constants

```c
// --- BAL Bounds ---
#define BAL_MAX_LEAD_MRAD       50.0f   // OLED display constraint
#define BAL_RANGE_MIN_M         20.0f   // Monocular angular resolution limit
#define BAL_RANGE_MAX_M        500.0f   // Optical confidence limit
#define BAL_RANGE_ALPHA          0.3f   // EMA smoothing factor (resets on reacquisition)

// --- AI Gate ---
#define AI_CONFIDENCE_GATE       0.70f  // Minimum confidence for lead display
#define AI_CONFIDENCE_GREEN      0.90f  // Green dot threshold
#define AI_GATE_PERSIST_FRAMES   3      // Frames before gate enables
#define AI_GATE_DECAY_FRAMES     3      // Frames after confidence drop

// --- Watchdog ---
#define WDG_TIMEOUT_AI_MS       500     // AI heartbeat timeout
#define WDG_TIMEOUT_BAL_MS      500     // BAL heartbeat timeout
#define WDG_TIMEOUT_COM_MS      500     // COM heartbeat timeout
#define WDG_SCAN_RATE_HZ        10      // FW-T3 watchdog scan rate

// --- COM ---
#define COM_SPI_HEARTBEAT_INTERVAL_S  5  // SPI ping interval
#define COM_SPI_HEARTBEAT_MAX_FAIL    3  // Consecutive failures before fault
#define COM_HEALTH_INTERVAL_S        60  // ai_health_stats_t publish interval
#define COM_ENGAGEMENT_BUF_SIZE  (64 * 1024)  // 64 KB circular buffer
#define COM_EVENTS_BUF_SIZE     (320 * 1024)  // 320 KB circular buffer

// --- Display ---
#define OLED_WIDTH              640
#define OLED_HEIGHT             480
#define OLED_REFRESH_HZ          60

// --- Timing Budgets ---
#define PIPELINE_BUDGET_US     150000   // 150 ms end-to-end (VM-S02)
#define CAPTURE_BUDGET_US        5000   // 5 ms
#define AI_INFERENCE_BUDGET_US  80000   // 80 ms (capture→ai_output_t)
#define BAL_COMPUTE_BUDGET_US   20000   // 20 ms WCET
#define RENDER_BUDGET_US        16700   // 16.7 ms (60 Hz frame)

// --- Safety Timing ---
#define FAULT_SUPPRESS_MAX_MS    100    // Indicator suppression deadline
#define LED_UPDATE_MAX_MS         50    // LED pattern update deadline
#define DISPLAY_BLANK_MAX_MS     100    // Thermal shutdown blank deadline
```

---

## 3. ICD-01: FW-HAL → AI (Sensor Capture)

### 3.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | FW-T1 (Sensor thread, RT priority) |
| **Consumer** | AI-INFER (AI inference thread) |
| **Data** | frame_buffer_t (§2.2) |
| **Mechanism** | Double-buffered shared memory, atomic index swap |
| **Rate** | 30 Hz (THERMAL_NORMAL), reduced per thermal_state_t |
| **Safety Class** | B |

### 3.2 API

```c
/**
 * Capture a frame from the CMOS sensor.
 * Returns pointer to the READ buffer (double-buffered).
 * Caller must NOT write to the returned buffer.
 * Pointer valid until next call to fw_sensor_capture().
 *
 * @return Pointer to frame_buffer_t, or NULL on sensor failure.
 * Latency: ≤5 ms call-to-return (SWR-FW-F36, SWR-FW-P08).
 */
const frame_buffer_t* fw_sensor_capture(void);
```

### 3.3 Protocol

1. FW-T1 writes to WRITE buffer at sensor frame rate
2. On frame complete: atomic swap of read/write index
3. AI-INFER calls `fw_sensor_capture()` → returns pointer to READ buffer
4. AI-INFER must consume frame before next `fw_sensor_capture()` call
5. If AI is slower than sensor: frames dropped (latest-wins)

### 3.4 Error Handling

| Condition | FW-T1 Action | AI Action |
|-----------|-------------|-----------|
| Sensor I2C failure | Return NULL | Call `fw_report_fault(FAULT_SENSOR)` |
| Frame timeout (>50 ms) | Return NULL | Skip frame, retry next cycle |
| Buffer corruption (CRC) | Return NULL | Call `fw_report_fault(FAULT_SENSOR)` |

---

## 4. ICD-02: FW-FSM → All Modules (State, Faults, Watchdog)

### 4.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | FW-T3 (Monitor thread, 10 Hz) |
| **Consumers** | AI, BAL, COM, FW-T2 |
| **Data** | fsm_state_t, thermal_state_t, power_state_t (atomics) |
| **Mechanism** | Atomic reads (acquire/release semantics) |
| **Safety Class** | B |

### 4.2 Read APIs

```c
/**
 * Read current FSM state. Lock-free atomic read.
 * All modules must check before each processing cycle.
 * States {INIT, SHUTDOWN, OVERHEAT} → AI must not process frames (SWR-AI-F05).
 * States {FAULT, SENSOR_FAULT, AI_FAULT} → FW-T2 suppresses indicators (SWR-FW-S01).
 */
fsm_state_t fw_get_fsm_state(void);

/**
 * Read current thermal throttle state.
 * AI must query before each inference and adjust frame rate (SWR-AI-F53).
 */
thermal_state_t fw_get_thermal_state(void);

/**
 * Read current power state.
 */
power_state_t fw_get_power_state(void);

/**
 * Read battery state of charge.
 * @return 0–100 (percent), or 0xFF if unavailable.
 */
uint8_t fw_get_battery_soc(void);
```

### 4.3 Fault Reporting API

```c
/**
 * Report a fault from any module. Triggers FSM state transition.
 * FW-T3 processes fault and transitions FSM within ≤10 ms.
 * Display suppression occurs within ≤100 ms of this call (SWR-FW-F17).
 *
 * @param type  fault_type_t identifying the faulting module.
 */
void fw_report_fault(fault_type_t type);
```

### 4.4 Watchdog APIs

```c
/**
 * Register a module for watchdog monitoring.
 * Must be called once during module initialization.
 *
 * @param id         module_id_t
 * @param timeout_ms Heartbeat deadline in milliseconds (typically 500).
 * @return           Watchdog handle [0..3], or -1 on failure.
 */
int fw_register_watchdog(module_id_t id, uint32_t timeout_ms);

/**
 * Reset watchdog timer. Must be called after each successful processing cycle.
 * If not called within timeout_ms: FW-T3 triggers fw_report_fault().
 *
 * @param handle  Handle returned by fw_register_watchdog().
 */
void fw_watchdog_heartbeat(int handle);
```

### 4.5 Watchdog Timing

```
Registration: fw_register_watchdog(MODULE_AI, 500)
                                                    ┌──────┐
Module heartbeats: ──●────●────●────●────[HANG]─────│500 ms│──→ FW-T3 detects
                                                    └──────┘
FW-T3 scan (10 Hz): checks wdg_table[] every 100 ms
Worst-case detection: 500 ms timeout + 100 ms scan = 600 ms
FSM transition: ≤10 ms after detection
Display suppression: ≤100 ms after FSM transition
Total last-heartbeat-to-suppression: ≤710 ms
```

---

## 5. ICD-03: FW-THERM → AI (Thermal Throttling)

### 5.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | FW-T3 (reads JetPack thermal API, 10 Hz) |
| **Consumer** | AI-INFER (adjusts capture rate) |
| **Data** | thermal_state_t (§2.1) |
| **Mechanism** | Atomic read via `fw_get_thermal_state()` |
| **Safety Class** | B |

### 5.2 Protocol

1. AI queries `fw_get_thermal_state()` **before each inference cycle** (SWR-AI-F53)
2. AI adjusts `fw_sensor_capture()` call rate per thermal_state_t table
3. Transition from any state to THERMAL_SHUTDOWN: AI stops all inference (SWR-AI-F05)
4. BAL throughput follows AI output rate (no independent throttle needed)

### 5.3 Hysteresis

| Transition | Tj Threshold |
|-----------|-------------|
| NORMAL → THROTTLE_15 | ≥85°C |
| THROTTLE_15 → NORMAL | <80°C (5°C hysteresis) |
| THROTTLE_15 → THROTTLE_10 | ≥90°C |
| THROTTLE_10 → THROTTLE_15 | <85°C |
| Any → SHUTDOWN | ≥100°C |
| SHUTDOWN → NORMAL | <80°C (full cool-down required) |

---

## 6. ICD-04: AI-GATE → BAL (Detection Output)

### 6.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | AI-COORD (selects best detection per frame) |
| **Consumer** | `bal_compute()` synchronous call |
| **Data** | ai_output_t (§2.2) |
| **Mechanism** | Direct function argument (same address space) |
| **Rate** | 30 Hz (matches AI frame rate) |
| **Safety Class** | C→B (gate threshold is safety-critical) |

### 6.2 Contract

```c
/**
 * AI-COORD selects the highest-confidence gated detection from
 * ai_frame_output_t.detections[] and passes it to bal_compute().
 *
 * Selection rule: max(confidence) among count detections.
 * If count == 0: bal_compute() is NOT called for this frame.
 *
 * Preconditions for ai_output_t validity:
 *   - confidence ≥ AI_CONFIDENCE_GATE (0.70)
 *   - track age ≥ AI_GATE_PERSIST_FRAMES (3 frames)
 *   - class_id ∈ [0..3]
 *   - bbox within sensor space [0,1920] × [0,1080]
 *   - angular_size_mrad > 0
 *   - timestamp_us matches current frame
 */
```

### 6.3 Confidence → Color Mapping

| Confidence Range | dot_color_t | Display |
|-----------------|-------------|---------|
| < 0.70 | DOT_COLOR_NONE | Suppressed — no dot, no BAL call |
| 0.70–0.89 | DOT_COLOR_YELLOW | Yellow dot — medium confidence |
| ≥ 0.90 | DOT_COLOR_GREEN | Green dot — high confidence |

Thresholds are build-time configurable constants (SWR-AI-F33).

---

## 7. ICD-05: BAL → Coordinator (Ballistic Solution)

### 7.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | `bal_compute()` — pure synchronous function |
| **Consumer** | AI-COORD (overlay assembly) |
| **Data** | bal_output_t (§2.2) |
| **Mechanism** | Output parameter (pointer) |
| **Latency** | ≤2 ms typical, ≤20 ms WCET |
| **Safety Class** | B |

### 7.2 API

```c
/**
 * Compute ballistic lead solution for a single gated detection.
 * Pure function: no side effects, no global state mutation.
 * Thread-safe: may be called from any thread.
 *
 * @param detection  Gated detection from AI-GATE. Must not be NULL.
 * @param result     Output: populated bal_output_t. Must not be NULL.
 * @return           bal_error_t (0 = success, negative = error).
 *
 * Timing: ≤20 ms worst-case (SWR-BAL-P01).
 * Called by: AI-COORD, once per frame for best detection.
 * Not called when: ai_frame_output_t.count == 0 (SWR-BAL-F72).
 */
int bal_compute(const ai_output_t *detection, bal_output_t *result);
```

### 7.3 Coordinator Response to bal_output_t

| bal_output_t.valid | bal_output_t.compute_fault | Coordinator Action |
|-------------------|--------------------------|-------------------|
| 1 (true) | 0 (false) | Render lead dot at (dot_x, dot_y) with confidence color |
| 0 (false) | 0 (false) | Suppress lead dot. Display "LEAD LIMIT" if lead > MAX. Display "RANGE?" if range_warning. |
| any | 1 (true) | Call `fw_report_fault(FAULT_BAL)`. Display "COMPUTE FAULT". |

---

## 8. ICD-06: Coordinator → FW-T2 (Display Overlay)

### 8.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | AI-COORD |
| **Consumer** | FW-T2 (Display thread, 60 Hz) |
| **Data** | overlay_t (§2.2) |
| **Mechanism** | Lock-free SPSC queue, depth 2, latest-wins |
| **Safety Class** | B |

### 8.2 API

```c
/**
 * Submit overlay for display rendering.
 * Non-blocking. If queue full, oldest entry is overwritten (latest-wins).
 *
 * FW-T2 safety enforcement (SWR-FW-S01):
 *   Before rendering each frame, FW-T2 reads fw_get_fsm_state().
 *   If fsm_state ∈ {FAULT, SENSOR_FAULT, AI_FAULT, OVERHEAT, SHUTDOWN, LOW_BATTERY}:
 *     → dot_x, dot_y, dot_color SUPPRESSED (not rendered)
 *     → only messages[] rendered (fault/warning text)
 *   This suppression occurs even if overlay_t contains valid lead data.
 *
 * @param ovl  Pointer to overlay_t. Copied into queue (no pointer retention).
 */
void fw_display_render(const overlay_t *ovl);
```

### 8.3 Coordinate Transform

```
Sensor space (1920×1080) → OLED space (640×480):
  dot_x = (uint16_t)((bbox_cx + lead_x_pixels) × 640 / 1920)
  dot_y = (uint16_t)((bbox_cy + lead_y_pixels) × 480 / 1080)

  lead_x_pixels = lead_x_mrad × focal_length_px / 1000.0
  lead_y_pixels = lead_y_mrad × focal_length_px / 1000.0

  Clamp: dot_x ∈ [0, 639], dot_y ∈ [0, 479]
```

---

## 9. ICD-07: Coordinator → COM (Engagement & Telemetry)

### 9.1 Interface Summary

| Property | Value |
|----------|-------|
| **Producer** | AI-COORD (engagement events), AI-HEALTH (stats) |
| **Consumer** | T-COM (Jetson COM thread) |
| **Data** | engagement_log_record_t, ai_health_stats_t, system_event_record_t (§2.2) |
| **Mechanism** | Lock-free SPSC queue (engagement), direct call (health stats) |
| **Safety Class** | A |

### 9.2 APIs

```c
/**
 * Queue an engagement event for logging and BLE broadcast.
 * Non-blocking. Queue depth: 16 (handles burst during rapid engagements).
 *
 * @param record  Fully populated engagement_log_record_t with CRC-32.
 */
void com_log_engagement(const engagement_log_record_t *record);

/**
 * Submit health statistics for BLE telemetry.
 * Called every COM_HEALTH_INTERVAL_S (60 s) by AI-HEALTH.
 *
 * @param stats  Populated ai_health_stats_t.
 */
void com_update_health(const ai_health_stats_t *stats);

/**
 * Log a system event. Called by any module.
 * Non-blocking. Queue depth: 32.
 *
 * @param event  Populated system_event_record_t with CRC-32.
 */
void com_log_event(const system_event_record_t *event);
```

### 9.3 CRC Computation

```c
// CRC-32 (ISO 3309 / ITU-T V.42) over specified byte range.
// engagement_log_record_t: CRC over bytes [0..59], stored at offset 60.
// system_event_record_t:   CRC over bytes [0..27], stored at offset 28.
uint32_t crc32_compute(const void *data, size_t len);
```

---

## 10. ICD-08: COM (Jetson) ↔ nRF52840 (SPI Protocol)

### 10.1 Interface Summary

| Property | Value |
|----------|-------|
| **Jetson side** | T-COM thread (SPI master) |
| **nRF side** | Zephyr SPI slave + BLE stack |
| **Physical** | SPI Mode 0, 8 MHz, CS active low |
| **Wire format** | spi_frame_t (§2.2) — SOF/LEN/CMD/PAYLOAD/CRC16/EOF |
| **IRQ** | nRF asserts GPIO IRQ when it has an event. Jetson polls at 20 Hz idle. |
| **Safety Class** | A |

### 10.2 Protocol Sequence — Normal Operation

```
Jetson (Master)                         nRF52840 (Slave)
    │                                       │
    │─── SPI_HEARTBEAT_PING ───────────────→│
    │←── SPI_HEARTBEAT_PONG ───────────────│  (within 1 s)
    │                                       │
    │─── SPI_SET_ADV_DATA (COM-STATUS) ───→│  (health update)
    │                                       │
    │           [IRQ asserted]              │
    │←── SPI_BLE_CONNECTED ────────────────│  (BLE central connects)
    │                                       │
    │─── SPI_SEND_NOTIFY (engagement) ────→│  (15-byte core payload)
    │                                       │→ BLE notification to client
    │                                       │
```

### 10.3 CRC-16 Specification

- **Algorithm:** CRC-16/CCITT (polynomial 0x1021, init 0xFFFF)
- **Scope:** bytes [LEN, CMD, PAYLOAD[0..LEN-1]]
- **Byte order:** Big-endian (MSB first on wire)

### 10.4 Error Recovery

| Error | Detection | Recovery |
|-------|----------|---------|
| CRC mismatch | Receiver computes CRC, compares | Discard frame. Increment error counter. No ACK/NACK — next valid frame resumes normal flow. |
| Missing SOF/EOF | Byte scan | Discard bytes until next SOF. Re-sync. |
| Timeout (no response) | Jetson: 1 s per heartbeat | Retry next interval. After COM_SPI_HEARTBEAT_MAX_FAIL (3) consecutive: `fw_report_fault(FAULT_COM)`. |
| nRF reset | nRF sends EVT_BOOT on startup | Jetson re-initializes GATT data via SPI_SET_ADV_DATA sequence. |

---

## 11. ICD-09: nRF52840 → BLE (GATT Profile)

### 11.1 GATT Service

| Property | Value |
|----------|-------|
| **Service UUID** | `56534D41-5348-4001-8000-00805F9B34FB` (V-SMASH base: "VSMA" + "SH" ASCII in bytes 0–5, variant 1) |
| **Characteristics** | 11 standard + 1 IRONMESH placeholder |
| **Security** | BLE LESC pairing, encrypted link |
| **MTU** | Negotiate ≥64 bytes |

### 11.2 Characteristics

| Name | UUID Suffix | Properties | Size | Description |
|------|------------|-----------|------|-------------|
| COM-META | 0x0001 | Read | 32 B | Device metadata: serial, HW version, FW version, model name |
| COM-DATA | 0x0002 | Read, Notify | 15 B | Last engagement core fields (engagement_log_record_t bytes [0..14]) |
| COM-STATUS | 0x0003 | Read, Notify | 48 B | ai_health_stats_t + FSM state + battery SoC |
| COM-DIAG | 0x0004 | Write | ≤244 B | Diagnostic command (L0/L1 ASCII or L2 binary, auto-detect by first byte: $=ASCII, 0xAA=binary) |
| COM-HISTORY | 0x0005 | Read | 15 B × N | Bulk transfer of buffered engagement records |
| COM-CONFIG | 0x0006 | Read, Write | 16 B | Device configuration (confidence threshold, throttle temps) |
| COM-UPDATE | 0x0007 | Write | ≤244 B | Firmware update image chunks (L3 auth required) |
| COM-UPDATE-STATUS | 0x0008 | Read, Notify | 8 B | Update progress: state, percent, CRC status |
| COM-CAL | 0x0009 | Read, Write | 32 B | Bore-sight calibration offsets |
| COM-TIME | 0x000A | Write | 8 B | Time synchronization (UTC epoch seconds + timezone) |
| COM-AUTH | 0x000B | Read, Write | 64 B | Ed25519 challenge-response for L2/L3 access |
| PROTO-VERSION | 0x00FF | Read | 4 B | ICD version + IRONMESH compatibility tag |

### 11.3 Diagnostic Levels

| Level | Access | Auth Required | Protocol | Use Case |
|-------|--------|--------------|----------|----------|
| L0 | Physical USB-C only | None | NMEA ASCII ($-prefixed) | Depot technician, basic serial terminal |
| L1 | BLE or USB-C | None | NMEA ASCII + binary bulk | Field diagnostics, data download |
| L2 | BLE | Ed25519 challenge-response | Binary framed (0xAA header) | Authorized maintenance, config write |
| L3 | BLE | Ed25519 + firmware signing | Binary framed | Firmware update only |

---

## 12. Interface Boundary Summary

| ICD | Boundary | Data | Rate | Sync | Safety |
|-----|----------|------|------|------|--------|
| ICD-01 | FW-HAL → AI | frame_buffer_t | 30 Hz | Double-buffer atomic | B |
| ICD-02 | FW-FSM → All | fsm/thermal/power state | 10 Hz write, on-demand read | Atomic | B |
| ICD-03 | FW-THERM → AI | thermal_state_t | 10 Hz write | Atomic | B |
| ICD-04 | AI-GATE → BAL | ai_output_t | 30 Hz | Direct call argument | C→B |
| ICD-05 | BAL → Coordinator | bal_output_t | 30 Hz | Return parameter | B |
| ICD-06 | Coordinator → FW-T2 | overlay_t | 30 Hz write, 60 Hz read | SPSC queue | B |
| ICD-07 | Coordinator → COM | engagement/health/events | On-demand / 60 s | SPSC queue / direct | A |
| ICD-08 | COM ↔ nRF52840 | SPI frames | 20 Hz poll + IRQ | SPI Mode 0, CRC-16 | A |
| ICD-09 | nRF52840 → BLE | GATT characteristics | On-demand / notify | BLE LESC | A |

---

## Appendix A: v_smash_sw_types.h

This header file is extracted directly from §2 of this ICD. It SHALL be the single shared header included by all four modules. Any interface change MUST be reflected here first, then propagated to module code.

```c
/**
 * v_smash_sw_types.h — V-SMASH Shared Software Interface Types
 *
 * AUTO-GENERATED from V-SMASH-SW-ICD_v1.0.md §2.
 * DO NOT EDIT MANUALLY — edit the ICD, then regenerate.
 *
 * Included by: SW-FW, SW-AI, SW-BAL, SW-COM
 * Safety Class: B (contains safety-critical type definitions)
 */

#ifndef V_SMASH_SW_TYPES_H
#define V_SMASH_SW_TYPES_H

#include <stdint.h>
#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

/* ═══════════════════════════════════════════════════════════ */
/*  ENUMERATIONS                                              */
/* ═══════════════════════════════════════════════════════════ */

typedef enum {
    FSM_INIT          = 0,
    FSM_READY         = 1,
    FSM_DETECTED      = 2,
    FSM_POST_SHOT     = 3,
    FSM_LOW_BATTERY   = 4,
    FSM_OVERHEAT      = 5,
    FSM_FAULT         = 6,
    FSM_SENSOR_FAULT  = 7,
    FSM_AI_FAULT      = 8,
    FSM_SHUTDOWN      = 9
} fsm_state_t;

typedef enum {
    THERMAL_NORMAL      = 0,
    THERMAL_THROTTLE_15 = 1,
    THERMAL_THROTTLE_10 = 2,
    THERMAL_THROTTLE_5  = 3,
    THERMAL_SHUTDOWN    = 4
} thermal_state_t;

typedef enum {
    POWER_OK           = 0,
    POWER_LOW_BATTERY  = 1,
    POWER_CRITICAL     = 2
} power_state_t;

typedef enum {
    FAULT_SENSOR  = 0,
    FAULT_AI      = 1,
    FAULT_BAL     = 2,
    FAULT_COM     = 3,
    FAULT_GENERAL = 4
} fault_type_t;

typedef enum {
    MODULE_AI    = 0,
    MODULE_BAL   = 1,
    MODULE_COM   = 2,
    MODULE_SPARE = 3
} module_id_t;

typedef enum {
    DOT_COLOR_NONE   = 0,
    DOT_COLOR_YELLOW = 1,
    DOT_COLOR_GREEN  = 2
} dot_color_t;

typedef enum {
    CLASS_ROTOR      = 0,
    CLASS_FIXED_WING = 1,
    CLASS_BIRD       = 2,
    CLASS_UNKNOWN    = 3
} target_class_t;

typedef enum {
    OUTCOME_LOST       = 0,
    OUTCOME_SHOT_FIRED = 1,
    OUTCOME_DISENGAGE  = 2
} engagement_outcome_t;

typedef enum {
    BAL_OK                = 0,
    BAL_ERR_INVALID_INPUT = -1,
    BAL_ERR_COMPUTE_FAULT = -2,
    BAL_ERR_FAULTED       = -3
} bal_error_t;

/* ═══════════════════════════════════════════════════════════ */
/*  CONSTANTS                                                  */
/* ═══════════════════════════════════════════════════════════ */

#define AI_MAX_DETECTIONS        10
#define AI_CONFIDENCE_GATE       0.70f
#define AI_CONFIDENCE_GREEN      0.90f
#define AI_GATE_PERSIST_FRAMES   3
#define AI_GATE_DECAY_FRAMES     3

#define BAL_MAX_LEAD_MRAD        50.0f
#define BAL_RANGE_MIN_M          20.0f
#define BAL_RANGE_MAX_M          500.0f
#define BAL_RANGE_ALPHA          0.3f

#define WDG_TIMEOUT_AI_MS        500
#define WDG_TIMEOUT_BAL_MS       500
#define WDG_TIMEOUT_COM_MS       500

#define OLED_WIDTH               640
#define OLED_HEIGHT              480
#define OVERLAY_MAX_MESSAGES     8
#define OVERLAY_MSG_LEN          32

#define PIPELINE_BUDGET_US       150000
#define BAL_COMPUTE_BUDGET_US    20000
#define FAULT_SUPPRESS_MAX_MS    100

#define SPI_SOF                  0x7E
#define SPI_EOF                  0x7F
#define SPI_MAX_PAYLOAD          251

/* ═══════════════════════════════════════════════════════════ */
/*  STRUCTURES                                                 */
/* ═══════════════════════════════════════════════════════════ */

typedef struct __attribute__((packed)) {
    uint8_t  *data;
    uint32_t  width;
    uint32_t  height;
    uint32_t  stride;
    uint64_t  timestamp_us;
    uint32_t  seq;
} frame_buffer_t;

_Static_assert(sizeof(frame_buffer_t) == 32,
    "frame_buffer_t size mismatch — expect 32B on aarch64 (pointer=8B)");

typedef struct __attribute__((packed)) {
    float    bbox_cx;
    float    bbox_cy;
    float    bbox_w;
    float    bbox_h;
    float    class_scores[4];
    float    confidence;
    int32_t  class_id;
} ai_raw_det_t;

_Static_assert(sizeof(ai_raw_det_t) == 40,
    "ai_raw_det_t size mismatch — expect 40B packed");

typedef struct __attribute__((packed)) {
    uint32_t track_id;
    float    bbox_cx;
    float    bbox_cy;
    float    bbox_w;
    float    bbox_h;
    float    angular_size_mrad;
    float    confidence;
    int32_t  class_id;
    float    angular_vel_dps;
    uint64_t timestamp_us;
    uint32_t frame_seq;
} ai_output_t;

_Static_assert(sizeof(ai_output_t) == 48,
    "ai_output_t size mismatch — expect 48B packed");

typedef struct __attribute__((packed)) {
    ai_output_t detections[AI_MAX_DETECTIONS];
    int32_t     count;
    uint64_t    timestamp_us;
} ai_frame_output_t;

_Static_assert(sizeof(ai_frame_output_t) == 492,
    "ai_frame_output_t size mismatch — expect 48×10+4+8=492B packed");

typedef struct __attribute__((packed)) {
    float    lead_x_mrad;
    float    lead_y_mrad;
    float    lead_magnitude_mrad;
    float    range_est_m;
    uint8_t  range_valid;
    uint8_t  valid;
    uint8_t  est_indicator;
    uint8_t  range_warning;
    uint8_t  compute_fault;
    uint8_t  _pad[3];
    uint32_t track_id;
    float    angular_vel_dps;
    uint8_t  thermal_state;
    uint8_t  _reserved[3];
} bal_output_t;

_Static_assert(sizeof(bal_output_t) == 36,
    "bal_output_t size mismatch — expect 36B packed");

typedef struct __attribute__((packed)) {
    uint16_t dot_x;
    uint16_t dot_y;
    uint8_t  dot_color;
    uint8_t  fire_gate;
    char     messages[OVERLAY_MAX_MESSAGES][OVERLAY_MSG_LEN];
    uint64_t timestamp_us;
} overlay_t;

_Static_assert(sizeof(overlay_t) == 270,
    "overlay_t size mismatch — expect 2+2+1+1+256+8=270B packed");

typedef struct __attribute__((packed)) {
    /* Core fields — BLE payload (bytes 0–14) */
    uint32_t timestamp_s;
    uint8_t  target_class;
    uint8_t  confidence_pct;
    uint16_t range_est_dm;
    int16_t  lead_angle_01mrad;
    uint16_t duration_ms;
    uint8_t  outcome;
    uint8_t  thermal_state;
    uint8_t  battery_soc;
    /* Extended fields — local storage only (bytes 15–24) */
    uint16_t max_angular_vel_01dps;
    uint16_t avg_confidence_pct10;
    uint8_t  frames_tracked;
    uint8_t  reacquisitions;
    int16_t  bore_offset_01mrad_x;
    int16_t  bore_offset_01mrad_y;
    /* Reserved (bytes 25–59) — zero-filled, future fields */
    uint8_t  reserved[35];
    /* Integrity (bytes 60–63) */
    uint32_t crc32;             /* CRC-32 over bytes [0..59] */
} engagement_log_record_t;

_Static_assert(sizeof(engagement_log_record_t) == 64,
    "engagement_log_record_t size mismatch — update ICD §2.2");

typedef struct __attribute__((packed)) {
    uint32_t timestamp_s;
    uint8_t  event_type;
    uint8_t  param_hi;
    uint8_t  param_lo;
    uint8_t  source_module;
    uint32_t uptime_total_s;
    uint8_t  severity;
    uint8_t  _reserved[15];
    uint32_t crc32;
} system_event_record_t;

_Static_assert(sizeof(system_event_record_t) == 32,
    "system_event_record_t size mismatch — update ICD §2.2");

typedef struct __attribute__((packed)) {
    uint32_t frame_count;
    uint32_t inference_count;
    uint32_t inference_fail_count;
    uint32_t detection_count;
    uint32_t gate_pass_count;
    uint32_t gate_suppress_count;
    uint32_t track_create_count;
    uint32_t track_retire_count;
    uint32_t reacquisition_count;
    uint16_t model_version;
    uint8_t  thermal_state;
    uint8_t  _pad;
    uint32_t uptime_s;
} ai_health_stats_t;

_Static_assert(sizeof(ai_health_stats_t) == 44,
    "ai_health_stats_t size mismatch — expect 9×4+2+1+1+4=44B packed");

/* ═══════════════════════════════════════════════════════════ */
/*  FW-API (ICD-01, ICD-02, ICD-06)                           */
/* ═══════════════════════════════════════════════════════════ */

const frame_buffer_t* fw_sensor_capture(void);
fsm_state_t           fw_get_fsm_state(void);
thermal_state_t       fw_get_thermal_state(void);
power_state_t         fw_get_power_state(void);
uint8_t               fw_get_battery_soc(void);
void                  fw_report_fault(fault_type_t type);
int                   fw_register_watchdog(module_id_t id, uint32_t timeout_ms);
void                  fw_watchdog_heartbeat(int handle);
void                  fw_display_render(const overlay_t *ovl);

/* ═══════════════════════════════════════════════════════════ */
/*  BAL-API (ICD-05)                                          */
/* ═══════════════════════════════════════════════════════════ */

int bal_compute(const ai_output_t *detection, bal_output_t *result);

/* ═══════════════════════════════════════════════════════════ */
/*  COM-API (ICD-07)                                          */
/* ═══════════════════════════════════════════════════════════ */

void     com_log_engagement(const engagement_log_record_t *record);
void     com_update_health(const ai_health_stats_t *stats);
void     com_log_event(const system_event_record_t *event);
uint32_t crc32_compute(const void *data, size_t len);

#ifdef __cplusplus
}
#endif

#endif /* V_SMASH_SW_TYPES_H */
```

---

## Appendix B: Stub Library API (for Integration Testing)

This defines the mock/stub signatures needed for INT-OI-02 from the Integration Test Plan. Each stub returns configurable values for test injection.

```c
/**
 * v_smash_sw_stubs.h — Test Stub Library
 * Used by: Integration Test Plan Phase I–III (ENV-SIM)
 *
 * Each stub has a corresponding _set_*() function to inject test values.
 */

#ifndef V_SMASH_SW_STUBS_H
#define V_SMASH_SW_STUBS_H

#include "v_smash_sw_types.h"

/* --- FW Stubs --- */
void stub_fw_set_frame(const frame_buffer_t *frame);
void stub_fw_set_fsm_state(fsm_state_t state);
void stub_fw_set_thermal_state(thermal_state_t state);
void stub_fw_set_power_state(power_state_t state);
void stub_fw_set_battery_soc(uint8_t soc);

/* Query: what was rendered? */
const overlay_t* stub_fw_get_last_overlay(void);
int stub_fw_get_overlay_count(void);
void stub_fw_reset_overlay_count(void);

/* Query: what faults were reported? */
fault_type_t stub_fw_get_last_fault(void);
int stub_fw_get_fault_count(void);

/* Query: watchdog state */
int stub_fw_get_watchdog_timeout_count(module_id_t id);

/* --- AI Stubs --- */
void stub_ai_set_frame_output(const ai_frame_output_t *output);
void stub_ai_set_health_stats(const ai_health_stats_t *stats);

/* --- BAL Stubs --- */
void stub_bal_set_output(const bal_output_t *output);
void stub_bal_set_error(bal_error_t error);

/* --- COM Stubs --- */
const engagement_log_record_t* stub_com_get_last_engagement(void);
int stub_com_get_engagement_count(void);
const system_event_record_t* stub_com_get_last_event(void);
int stub_com_get_event_count(void);

/* --- Test Infrastructure --- */
void stub_reset_all(void);  /* Reset all stubs to default state */

#endif /* V_SMASH_SW_STUBS_H */
```

---

*Interface Control Document for V-SMASH Software System. 9 interface boundaries, 12 shared data types, compilable header file (Appendix A), stub library API (Appendix B). QC Gate: 10 PASS, 2 FLAG → all fixed → ACCEPTED.*
