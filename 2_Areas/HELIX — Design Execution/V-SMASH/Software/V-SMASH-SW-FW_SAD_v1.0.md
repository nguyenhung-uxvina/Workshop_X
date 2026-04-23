---
project: V-SMASH-SW-FW
type: software-architecture-document
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — 2026-02-24)
parent_family: V-SMASH
sw_phase: 2 (Architecture)
safety_class: B (IEC 62443 analogy)
source: V-SMASH-SW-FW_SRS_v1.0.md (SW-Phase 1)
resolves_flags: [SRS-FLAG-01, SRS-FLAG-03, SRS-FLAG-05, SRS-FLAG-07, SRS-FLAG-09, SRS-FLAG-10, SRS-FLAG-12]
decisions: [OI-1 PREEMPT_RT, OI-4 gtest+Unity, COMPUTE_FAULT trigger, comm failure fallbacks]
---

# V-SMASH-SW-FW — Software Architecture Document

**SW-Phase 2 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This Software Architecture Document (SAD) defines the internal structure, thread model, state machine design, API contracts, and build system for V-SMASH-SW-FW. It translates the 70 requirements from the SRS (SW-Phase 1) into an implementable architecture and resolves all 7 QC Gate FLAGs and 6 open items carried forward from SW-Phase 1.

**Key decisions made in this document:**
- Thread architecture: 4 real-time threads + 1 background thread
- FSM: table-driven, 10 states × 14 events = 140 transition cells (fully enumerated)
- HAL: 7 bus drivers with unified error reporting
- Communication failure fallbacks: conservative defaults (assume worst case)
- COMPUTE FAULT: triggered by SW-BAL via `fw_report_fault(BAL_FAULT)`
- Real-time strategy: PREEMPT_RT kernel + SCHED_FIFO threads
- Unit test: gtest (C++ modules) + Unity (pure C HAL)

### 1.2 References

| ID | Document | Relevance |
|----|----------|-----------|
| [SRS] | V-SMASH-SW-FW_SRS_v1.0.md | Requirements baseline (70 requirements) |
| [PP] | V-SMASH-SW-FW_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0.md | Variant matrix, sequencing |

### 1.3 QC Gate FLAG Resolution Index

| SRS FLAG | Issue | Resolution in SAD |
|----------|-------|-------------------|
| FLAG-01/09 | System power 2.3 W vs Jetson 7–15 W TDP | §2.3 — clarified as mission-average with duty cycling |
| FLAG-03 | TCVN clauses not cited | §10 — TCVN compliance matrix added |
| FLAG-05 | No ambient operating envelope | §2.2 — ambient environment defined |
| FLAG-07 | I2C/SPI failure fallbacks missing | §5 — communication failure table with conservative defaults |
| FLAG-10 | SoC import-only, no local alternative | §10 — acknowledged, FW-HAL portability is mitigation |
| FLAG-12 | COMPUTE FAULT unmapped + RTOS deferred | §4.2 — COMPUTE FAULT = BAL_FAULT; §3.1 — PREEMPT_RT selected |

---

## 2. System Context & Constraints

### 2.1 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         V-SMASH SOFTWARE STACK                       │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    APPLICATION LAYER                          │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │    │
│  │  │  SW-AI   │  │  SW-BAL  │  │  SW-COM  │                   │    │
│  │  │ (thread) │  │ (thread) │  │ (thread) │                   │    │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘                   │    │
│  └───────┼──────────────┼──────────────┼────────────────────────┘    │
│          │              │              │                              │
│  ════════╧══════════════╧══════════════╧════════════════════════     │
│                       FW-API (C headers, thread-safe)                │
│  ══════════════════════════════════════════════════════════════      │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    FIRMWARE LAYER (this SAD)                   │    │
│  │                                                               │    │
│  │  T1: Sensor Thread ──── fw_sensor_capture() ────┐            │    │
│  │  T2: Display Thread ─── fw_display_render() ────┤  FW-API   │    │
│  │  T3: Monitor Thread ─── FW-PWR + FW-THERM + WDG │  impls    │    │
│  │  T4: Safety ISR ─────── FW-SAFE (interrupt) ────┘            │    │
│  │  T5: Background ─────── diagnostics, logging                  │    │
│  │                                                               │    │
│  │  FW-FSM (table-driven, called from T3 on state events)       │    │
│  │                                                               │    │
│  └────────────────────────┬────────────────────────────────────┘    │
│                           │                                          │
│  ┌────────────────────────┴────────────────────────────────────┐    │
│  │                    FW-HAL (bus abstraction)                    │    │
│  │  hal_mipi │ hal_spi │ hal_i2c │ hal_gpio │ hal_usb │ hal_pwm│    │
│  └────────────────────────┬────────────────────────────────────┘    │
│                           │                                          │
│  ─────────────────────────┴─────────────────────── HARDWARE ───────  │
│    MIPI CSI-2    SPI      I2C #0/#1   GPIO     USB-C     PWM        │
│    (VM-1200)   (VM-1300)  (VM-4105)  (VM-4108)                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Operating Environment (Resolves SRS FLAG-05)

| Parameter | Value | Source |
|-----------|-------|--------|
| Ambient temperature (operating) | −10°C to +55°C | VM-M01 (Vietnam tropical + highland winter) |
| Ambient temperature (storage) | −40°C to +70°C | MIL-STD-810H Method 501.7 / 502.7 |
| Relative humidity | 5–100% RH (condensing) | TCVN 7699-2-78 |
| Altitude | 0–3,000 m ASL | Vietnam terrain profile |
| Vibration (transport) | 5–500 Hz, 1.04 g RMS | MIL-STD-810H Method 514.8 Cat. 4 |
| Vibration (operational, vehicle — V-R only) | 5–500 Hz, 2.36 g RMS | MIL-STD-810H Cat. 20 |
| EMI/EMC | TCVN 7699-2-29 (radiated), MIL-STD-461G RE102 | Operating near tactical radios |
| IP rating (system level) | IP54 minimum (infantry), IP65 (vehicle) | VM-P02 |

**Firmware impact:** FW-THERM thresholds assume Tj = ambient + SoC self-heating. At +55°C ambient, Tj reaches 85°C (throttle point) at ~30 W SoC dissipation. Cold-start at −10°C: battery reports lower SoC% due to increased internal resistance — FW-PWR applies temperature-compensated SoC estimation (§5.4).

### 2.3 Power Architecture Clarification (Resolves SRS FLAG-01/09)

The VM-E03 requirement of ≤2.3 W average refers to the **mission-average power including duty cycling**, not continuous peak draw. The Jetson Orin Nano operates in two modes:

| Mode | SoC Power | Duration | Duty |
|------|-----------|----------|------|
| Active (AI inference at 30 Hz) | 7–10 W | ~40% of mission | AI actively tracking target |
| Idle (display on, no inference) | 2–3 W | ~60% of mission | Patrol / standby — no target in view |

**Mission-average:** 0.4 × 8.5 W + 0.6 × 2.5 W = **4.9 W** [ASSUMPTION — field duty cycle TBD].

**Corrective note:** The 2.3 W system average (VM-E03) was specified for an earlier SoC candidate (Hailo-8 at 2.5 W TDP). With Jetson Orin Nano, the system-level power budget must be revised upward. **Recommendation:** Revise VM-E03 to ≤5.0 W mission-average for Jetson Orin Nano, or ≤2.5 W if Hailo-8 is selected via FW-HAL SoC swap.

**FW overhead budget remains valid:** ≤0.3 W marginal cost of FW services vs bare-metal idle. This is independent of SoC choice.

---

## 3. Thread Architecture

### 3.1 Thread Model

**Decision (resolves OI-1):** PREEMPT_RT kernel with SCHED_FIFO scheduling for threads T1–T3. Stock Linux CFS for T5 (background). T4 is a hardware ISR, not a Linux thread.

| Thread | Name | Priority | Schedule | Period | WCET Budget | SWR Traceability |
|--------|------|----------|----------|--------|-------------|-----------------|
| T1 | `fw_sensor_thread` | 90 (SCHED_FIFO) | Periodic, 33 ms (30 Hz) | 33.33 ms | ≤5 ms capture + ≤1 ms overhead = 6 ms | SWR-FW-F36, P08, P09 |
| T2 | `fw_display_thread` | 85 (SCHED_FIFO) | Periodic, 16.67 ms (60 Hz) | 16.67 ms | ≤3 ms render + ≤1 ms SPI DMA = 4 ms [ASSUMPTION] | SWR-FW-F25, F26, P02 |
| T3 | `fw_monitor_thread` | 80 (SCHED_FIFO) | Periodic, 100 ms (10 Hz) | 100 ms | ≤2 ms total (I2C reads + FSM eval + watchdog check) | SWR-FW-F05, F10, F22, P05, P06 |
| T4 | `fw_safe_isr` | HW IRQ (highest) | Edge-triggered interrupt | Aperiodic | ≤100 µs ISR body | SWR-FW-F40, F41, S02, S05 |
| T5 | `fw_background_thread` | 20 (SCHED_OTHER) | Event-driven | N/A | No deadline | SWR-FW-F04, F19, R01 |

### 3.2 Thread Interaction Diagram

```
                    ┌───────────────────────────────────┐
                    │          SHARED STATE              │
                    │                                    │
                    │  fsm_state      [atomic]           │
                    │  thermal_state  [atomic]           │
                    │  power_state    [atomic]           │
                    │  display_lock   [mutex]            │
                    │  frame_buffer   [double-buffered]  │
                    │  overlay_slot   [lock-free SPSC]   │
                    │  wdg_table[4]   [atomic per slot]  │
                    │  diag_log       [lock-free ring]   │
                    └──┬──────┬──────┬──────┬──────┬────┘
                       │      │      │      │      │
          ┌────────────┘      │      │      │      └─────────────┐
          ▼                   ▼      │      ▼                    ▼
    ┌──────────┐      ┌──────────┐  │  ┌──────────┐     ┌──────────┐
    │ T1:Sensor│      │T2:Display│  │  │T3:Monitor│     │T5:Backgnd│
    │ 30 Hz    │      │ 60 Hz    │  │  │ 10 Hz    │     │ On-demand│
    │          │      │          │  │  │          │     │          │
    │ capture  │      │ read ovl │  │  │ I2C read │     │ USB diag │
    │ → frame  │      │ render   │  │  │ PWR eval │     │ log flush│
    │   buffer │      │ → SPI TX │  │  │ THERM ev │     │ FW flash │
    └──────────┘      └──────────┘  │  │ WDG scan │     └──────────┘
                                    │  │ → FSM    │
                                    │  └──────────┘
                                    │
                               ┌────┴─────┐
                               │ T4:ISR   │
                               │ (HW IRQ) │
                               │          │
                               │ Vbat LOW │
                               │ → blank  │
                               │   OLED   │
                               │ → set    │
                               │   flag   │
                               └──────────┘
```

### 3.3 Synchronization Primitives

| Primitive | Type | Used By | Rationale |
|-----------|------|---------|-----------|
| `fsm_state` | `atomic<uint8_t>` | T3 writes, T1/T2/T5 + API readers | Single-writer, multiple-reader. No lock needed. |
| `thermal_state` | `atomic<uint8_t>` | T3 writes, API readers | Same pattern as fsm_state. |
| `power_state` | `atomic<uint8_t>` | T3 writes, API readers | Same pattern. |
| `frame_buffer` | Double buffer (ping-pong) | T1 writes back, SW-AI reads front | Zero-copy: T1 fills buffer[write_idx], atomically swaps idx. Reader always gets latest complete frame. |
| `overlay_slot` | Lock-free SPSC queue (depth 2) | SW-AI/SW-BAL write, T2 reads | Producer (application) pushes overlay. T2 pops latest. If queue empty, T2 re-renders last overlay. |
| `display_lock` | `pthread_mutex_t` | T2, T4 (ISR promotes to deferred work) | Only contention point: T4 needs to blank display. T4 sets `safe_blank` atomic flag; T2 checks flag at top of render loop and yields. |
| `wdg_table[4]` | `atomic<uint64_t>` timestamps | Registered modules write heartbeat, T3 scans | Per-slot atomic timestamp. T3 compares `now - wdg_table[i]` vs timeout. |
| `diag_log` | Lock-free ring buffer (4 KB) | T3 writes FSM transitions, T5 reads for USB dump | SPSC ring: T3 produces, T5 consumes on diagnostic request. |

### 3.4 Memory Budget

All memory pre-allocated at boot (SWR-FW-A07). No malloc/new after INIT.

| Resource | Size | Allocation |
|----------|------|-----------|
| Frame buffer ×2 (double) | 2 × 6.2 MB = 12.4 MB | Static (DMA-capable region) |
| Overlay queue (depth 2) | 2 × 544 B = ~1 KB | Static |
| FSM diagnostic log | 256 × 16 B = 4 KB | Static (ring buffer) |
| Thermal history | 1000 × 4 B = 4 KB | Static (ring buffer) |
| Boot log | 2 KB | Static |
| Display framebuffer (OLED) | Depends on resolution — typically 128×64×2 = 16 KB | Static (SPI DMA buffer) |
| Thread stacks (×4 user threads) | 4 × 64 KB = 256 KB | `pthread_attr_setstacksize` |
| **Total FW memory** | **~12.7 MB** | Dominated by camera frame double-buffer |

System has ≥4 GB RAM (Jetson Orin Nano). FW uses <0.4% of available memory.

---

## 4. FW-FSM — Fault State Machine Design

### 4.1 State Definitions

| # | State | Display | LED | Entry Condition |
|---|-------|---------|-----|-----------------|
| 0 | `INIT` | "STARTING" | Off | Power-on. Boot in progress. |
| 1 | `READY` | Clear (no indicators) | Steady green | Boot complete, all healthy. No target detected. |
| 2 | `DETECTED` | Lead dot + confidence | Steady green | SW-AI reports target detected. |
| 3 | `POST_SHOT` | Clear (brief) | Steady green | Fire event completed. Returns to READY after 2 s. |
| 4 | `LOW_BATTERY` | "LOW BATT" | Blink amber (1 Hz) | SoC% ≤ 15%. Operations continue with warning. |
| 5 | `OVERHEAT` | "THERMAL" | Blink red (2 Hz) | Tj ≥ 95°C. AI throttled. |
| 6 | `FAULT` | Fault-specific message | Blink red (1 Hz) | General fault (multiple subsystems). |
| 7 | `SENSOR_FAULT` | "SENSOR FAULT" | Blink red (1 Hz) | Camera/sensor failure. AI cannot operate. |
| 8 | `AI_FAULT` | "AI FAULT" | Blink red (1 Hz) | AI watchdog timeout or inference error. |
| 9 | `SHUTDOWN` | Blank | Off | Tj ≥ 100°C or SoC% ≤ 5% or power-fail. Terminal state. |

**COMPUTE FAULT resolution (SRS FLAG-12):** The "COMPUTE FAULT" display message from B4 §6.2 is rendered when `fw_report_fault(BAL_FAULT)` is called by SW-BAL (ballistic computation failure). This maps to state `FAULT` (state 6) with message override "COMPUTE FAULT". The FSM enters state 6 on `BAL_FAULT` event; FW-DISP selects the message string from a fault-type-to-message lookup table.

### 4.2 State Transition Table

The FSM is table-driven (SWR-FW-A08). Each cell shows `next_state / action`.

**Legend:** `—` = event ignored in this state. `!` = safety-critical transition.

| Current State ↓ \ Event → | boot_done | target_detect | target_lost | shot_complete | post_shot_timeout | low_batt | batt_critical | tj_95 | tj_100 | sensor_fail | ai_timeout | bal_fault | com_fault | fault_clear |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **INIT** | READY/a1 | — | — | — | — | — | — | — | SHUTDOWN!/a9 | — | — | — | — | — |
| **READY** | — | DETECTED/a2 | — | — | — | LOW_BATT/a4 | SHUTDOWN!/a9 | OVERHEAT/a5 | SHUTDOWN!/a9 | SENSOR_FAULT!/a7 | AI_FAULT!/a8 | FAULT/a6 | FAULT/a6 | — |
| **DETECTED** | — | — | READY/a3 | POST_SHOT/a3 | — | LOW_BATT/a4 | SHUTDOWN!/a9 | OVERHEAT/a5 | SHUTDOWN!/a9 | SENSOR_FAULT!/a7 | AI_FAULT!/a8 | FAULT/a6 | — | — |
| **POST_SHOT** | — | DETECTED/a2 | — | — | READY/a1 | LOW_BATT/a4 | SHUTDOWN!/a9 | OVERHEAT/a5 | SHUTDOWN!/a9 | SENSOR_FAULT!/a7 | AI_FAULT!/a8 | — | — | — |
| **LOW_BATTERY** | — | DETECTED/a2 | READY→LB/— | — | — | — | SHUTDOWN!/a9 | OVERHEAT/a5 | SHUTDOWN!/a9 | SENSOR_FAULT!/a7 | AI_FAULT!/a8 | FAULT/a6 | — | — |
| **OVERHEAT** | — | — | — | — | — | — | SHUTDOWN!/a9 | — | SHUTDOWN!/a9 | SENSOR_FAULT!/a7 | AI_FAULT!/a8 | — | — | READY/a10 |
| **FAULT** | — | — | — | — | — | — | SHUTDOWN!/a9 | — | SHUTDOWN!/a9 | — | — | — | — | READY/a10 |
| **SENSOR_FAULT** | — | — | — | — | — | — | SHUTDOWN!/a9 | — | SHUTDOWN!/a9 | — | — | — | — | READY/a10 |
| **AI_FAULT** | — | — | — | — | — | — | SHUTDOWN!/a9 | — | SHUTDOWN!/a9 | — | — | — | — | READY/a10 |
| **SHUTDOWN** | — | — | — | — | — | — | — | — | — | — | — | — | — | — |

### 4.3 Action Definitions

| Action | Name | Description | Latency Budget |
|--------|------|-------------|---------------|
| a1 | `enter_ready` | Clear display, LED steady green | ≤50 ms (SWR-FW-P07) |
| a2 | `enter_detected` | Enable lead dot rendering, LED steady green | ≤50 ms |
| a3 | `clear_indicators` | Suppress lead dot, confidence. Display clear or POST_SHOT. | ≤50 ms |
| a4 | `enter_low_batt` | Display "LOW BATT", LED blink amber | ≤50 ms |
| a5 | `enter_overheat` | **Suppress all combat indicators**, display "THERMAL", LED blink red, notify SW-AI throttle | ≤100 ms (SWR-FW-S01) |
| a6 | `enter_fault` | **Suppress all combat indicators**, display fault message (from LUT), LED blink red | ≤100 ms (SWR-FW-S01) |
| a7 | `enter_sensor_fault` | **Suppress all combat indicators**, display "SENSOR FAULT", LED blink red | ≤100 ms (SWR-FW-S01) |
| a8 | `enter_ai_fault` | **Suppress all combat indicators**, display "AI FAULT", LED blink red | ≤100 ms (SWR-FW-S01) |
| a9 | `enter_shutdown` | **Blank display** (SWR-FW-S02/S03), LED off, halt all threads, request power-off | ≤200 ms (SWR-FW-F43) |
| a10 | `recover` | Verify 3 consecutive healthy readings, then enter_ready | ≥3 s (SWR-FW-F18) |

**Safety invariant:** Actions a5, a6, a7, a8, a9 all call `suppress_combat_indicators()` as their first operation. This function atomically sets a flag checked by T2 (display thread) — T2 will not render any lead dot, confidence bar, or tracking box while flag is set. This enforces SWR-FW-S01 regardless of the specific fault type.

### 4.4 Fault-to-Message Lookup Table

| fault_type_t enum | Display Message | FSM State |
|-------------------|----------------|-----------|
| `SENSOR_FAULT` | "SENSOR FAULT" | SENSOR_FAULT (7) |
| `AI_FAULT` | "AI FAULT" | AI_FAULT (8) |
| `BAL_FAULT` | "COMPUTE FAULT" | FAULT (6) |
| `COM_FAULT` | "NO LINK" | FAULT (6) |
| `GENERAL` | "FAULT" | FAULT (6) |
| *(internal)* `THERM_WARN` | "THERMAL" | OVERHEAT (5) |
| *(internal)* `LOW_BATT` | "LOW BATT" | LOW_BATTERY (4) |
| *(internal)* `RANGE_WARN` | "RANGE?" | *(overlay — no state change)* |

---

## 5. Communication Failure Handling (Resolves SRS FLAG-07)

**Design principle:** On bus communication failure, assume worst case (conservative). An operator relying on a silent failure is more dangerous than a false alarm.

### 5.1 I2C/SPI Failure Response Table

| Bus | Module | Failure Mode | Detection | Fallback Behavior | FSM Impact |
|-----|--------|-------------|-----------|-------------------|------------|
| I2C #0 | FW-PWR (battery IC) | Read timeout (>50 ms) or NACK | HAL returns `-EIO` | Retry 3× at 200 ms intervals. If persistent: enter LOW_BATTERY (conservative — assume battery may be dying). Set `battery_soc = 0xFF` (unknown). | → LOW_BATTERY |
| I2C #1 | FW-DISP (ambient light) | Read timeout or NACK | HAL returns `-EIO` | Use depot-configured fixed brightness. No fault state — ambient sensor is optional. | No state change |
| I2C (Tj) | FW-THERM (JetPack API) | API returns error or stale value | Timestamp check: if Tj unchanged for >2 s → suspect stale | Enter OVERHEAT (conservative — assume thermal runaway possible). Log `THERM_SENSOR_FAULT`. | → OVERHEAT |
| SPI | FW-DISP (OLED) | SPI transfer timeout or DMA error | HAL returns `-EIO` | Retry 3×. If persistent: LED shows specific pattern (fast red triple-blink), FSM enters FAULT. Display is unavailable — operator relies on LED only. | → FAULT ("DISPLAY FAULT" in log, LED-only indication) |
| MIPI CSI-2 | FW-HAL (camera) | No frame received within 100 ms | Frame timeout counter | Enter SENSOR_FAULT. Camera failure = no AI input = operator must use iron sights. | → SENSOR_FAULT |
| GPIO (power-fail) | FW-SAFE | Spurious interrupt | Debounce: require Vbat < threshold for ≥10 ms | If < 10 ms: ignore (noise). If ≥ 10 ms: execute blank sequence. | → SHUTDOWN (if valid) |

### 5.2 Recovery from Communication Failures

Recovery follows SWR-FW-F18: 3 consecutive successful reads at ≥1 Hz before clearing fault.

```
BUS_FAIL detected
  → set fail_counter[bus] = 0
  → enter fault state (per table above)
  → retry reads at normal cadence

Each successful read:
  → fail_counter[bus]++
  → if fail_counter[bus] ≥ 3:
       → clear fault via fault_clear event
       → FSM transitions back to READY (action a10)
```

---

## 6. FW-HAL — Hardware Abstraction Layer Design

### 6.1 HAL Module Structure

```
fw_hal/
├── hal.h                 ← Public HAL API (all modules include this only)
├── hal_config.h          ← Build-time pin/address configuration (SWR-FW-F38)
├── hal_types.h           ← Shared types (error codes, bus handles)
├── hal_mipi.c/.h         ← MIPI CSI-2 camera driver
├── hal_spi.c/.h          ← SPI master driver (OLED)
├── hal_i2c.c/.h          ← I2C bus driver (battery IC, sensors)
├── hal_gpio.c/.h         ← GPIO control (LED, power-fail interrupt)
├── hal_usb.c/.h          ← USB-C device mode (diagnostics)
├── hal_pwm.c/.h          ← PWM output (LED dimming)
└── platform/
    ├── jetson_orin_nano/  ← JetPack 6.x implementation (SoC-specific)
    │   ├── jetson_mipi.c
    │   ├── jetson_spi.c
    │   ├── jetson_i2c.c
    │   ├── jetson_gpio.c
    │   ├── jetson_usb.c
    │   └── jetson_pwm.c
    ├── hailo8/             ← (future) Hailo-8 port stub
    └── mock/               ← Mock HAL for unit testing (SWR-FW-F37)
        ├── mock_mipi.c
        └── ...
```

**Portability rule (SWR-FW-A02, SWR-FW-F37):** Only files under `platform/` include SoC-specific SDK headers. All HAL API consumers include only `hal.h`. Building with `platform/mock/` validates this isolation — if any module above HAL fails to compile with mock, the abstraction is broken.

### 6.2 HAL API Summary

```c
/* hal.h — FW-HAL Public API */

/* Initialization */
int  hal_init(void);                              /* Init all buses per hal_config.h */
int  hal_self_test(uint8_t *result_bitmask);      /* SWR-FW-F39 */

/* Camera (MIPI CSI-2) */
int  hal_mipi_init(void);
int  hal_mipi_capture(void *buf, size_t buf_size); /* ≤5 ms [ASSUMPTION] */
void hal_mipi_release(void);

/* Display (SPI) */
int  hal_spi_init(uint32_t clock_hz);
int  hal_spi_transfer(const void *tx, size_t len); /* DMA-backed */
void hal_spi_blank(void);                          /* Emergency blank — called from ISR context */

/* Sensors & Battery (I2C) */
int  hal_i2c_init(uint8_t bus, uint32_t speed_hz);
int  hal_i2c_read(uint8_t bus, uint8_t addr, uint8_t reg, void *buf, size_t len);
int  hal_i2c_write(uint8_t bus, uint8_t addr, uint8_t reg, const void *buf, size_t len);

/* GPIO */
int  hal_gpio_init(void);
int  hal_gpio_write(uint8_t pin, uint8_t value);
int  hal_gpio_read(uint8_t pin, uint8_t *value);
int  hal_gpio_register_isr(uint8_t pin, int edge, void (*handler)(void));  /* FW-SAFE ISR */

/* PWM */
int  hal_pwm_init(uint8_t channel, uint32_t freq_hz);
int  hal_pwm_set_duty(uint8_t channel, uint8_t percent);  /* 0–100 */

/* USB (Diagnostics) */
int  hal_usb_init(void);
int  hal_usb_read(void *buf, size_t max_len, int timeout_ms);
int  hal_usb_write(const void *buf, size_t len);
int  hal_usb_connected(void);  /* Returns 1 if depot tool detected */

/* Error codes (all functions) */
#define HAL_OK        0
#define HAL_ERR_IO   (-5)   /* Bus communication failure */
#define HAL_ERR_TMO  (-110) /* Timeout */
#define HAL_ERR_BUSY (-16)  /* Resource busy */
#define HAL_ERR_INVAL (-22) /* Invalid parameter */
```

### 6.3 hal_config.h — Build-Time Configuration

```c
/* hal_config.h — per-variant / per-board configuration */

/* === SoC Selection === */
#define HAL_PLATFORM_JETSON_ORIN_NANO  /* or HAL_PLATFORM_HAILO8, HAL_PLATFORM_RK3588 */

/* === I2C === */
#define HAL_I2C_BUS0_DEV       "/dev/i2c-1"      /* Battery IC */
#define HAL_I2C_BUS0_SPEED     400000             /* 400 kHz */
#define HAL_I2C_BATT_ADDR      0x55               /* VM-4105 I2C address */
#define HAL_I2C_BUS1_DEV       "/dev/i2c-2"       /* Ambient light (optional) */
#define HAL_I2C_ALS_ADDR       0x29               /* If present */

/* === SPI === */
#define HAL_SPI_DEV            "/dev/spidev0.0"
#define HAL_SPI_CLOCK_HZ       40000000           /* 40 MHz [ASSUMPTION] */
#define HAL_SPI_MODE           SPI_MODE_0
#define HAL_SPI_CS_PIN         8                   /* Chip-select GPIO */

/* === GPIO === */
#define HAL_GPIO_LED_R         12
#define HAL_GPIO_LED_G         13
#define HAL_GPIO_LED_B         14
#define HAL_GPIO_PWR_FAIL      7                   /* Power-fail interrupt input */
#define HAL_GPIO_PWR_FAIL_EDGE HAL_EDGE_FALLING    /* Active-low */

/* === PWM === */
#define HAL_PWM_LED_CHANNEL    0
#define HAL_PWM_LED_FREQ       1000               /* 1 kHz */

/* === Camera === */
#define HAL_MIPI_DEV           "/dev/video0"
#define HAL_MIPI_WIDTH         1920
#define HAL_MIPI_HEIGHT        1080
#define HAL_MIPI_FPS           30

/* === Variant === */
#if defined(VARIANT_VM)
  /* V-M baseline — no CAN, no thermal sensor */
#elif defined(VARIANT_VL)
  /* V-L — adds fire gate FSM states */
#elif defined(VARIANT_VR)
  #define HAL_CAN_ENABLED      1
  #define HAL_CAN_DEV          "can0"
  #define HAL_CAN_BITRATE      500000
  #define HAL_PWR_VEHICLE_12V  1  /* 12V→5V regulator, not battery */
#elif defined(VARIANT_VNV)
  #define HAL_FLIR_ENABLED     1
  #define HAL_I2C_FLIR_BUS     2
  #define HAL_I2C_FLIR_ADDR    0x2A
#endif
```

---

## 7. FW-API — Detailed Interface Specifications

### 7.1 Type Definitions

```c
/* fw_api_types.h */

#include <stdint.h>

/* --- Frame buffer --- */
typedef struct {
    uint8_t  *data;        /* Pointer to pre-allocated buffer (caller owns) */
    uint32_t  width;       /* 1920 */
    uint32_t  height;      /* 1080 */
    uint32_t  stride;      /* Bytes per row (may include padding) */
    uint64_t  timestamp_us;/* Capture timestamp (monotonic µs) */
    uint32_t  seq;         /* Frame sequence number (wraps at 2^32) */
} frame_buffer_t;

/* --- Display overlay --- */
typedef enum {
    DOT_COLOR_OFF    = 0,
    DOT_COLOR_GREEN  = 1,  /* Confidence ≥ 0.8 */
    DOT_COLOR_YELLOW = 2,  /* Confidence 0.5–0.8 */
    DOT_COLOR_RED    = 3,  /* Confidence < 0.5 */
} dot_color_t;

typedef struct {
    uint16_t    dot_x;           /* Lead dot X coordinate (pixels). 0 = hidden. */
    uint16_t    dot_y;           /* Lead dot Y coordinate (pixels). 0 = hidden. */
    dot_color_t dot_color;       /* Confidence color tier */
    uint8_t     fire_gate;       /* 1 = fire indicator ON (V-L/V-X/V-T/V-P/V-R) */
    char        messages[8][32]; /* Up to 8 status strings. Empty = not displayed. */
    uint64_t    timestamp_us;    /* Overlay generation timestamp */
} overlay_t;

/* --- FSM types --- */
typedef enum {
    FSM_INIT           = 0,
    FSM_READY          = 1,
    FSM_DETECTED       = 2,
    FSM_POST_SHOT      = 3,
    FSM_LOW_BATTERY    = 4,
    FSM_OVERHEAT       = 5,
    FSM_FAULT          = 6,
    FSM_SENSOR_FAULT   = 7,
    FSM_AI_FAULT       = 8,
    FSM_SHUTDOWN       = 9,
} fsm_state_t;

typedef enum {
    FAULT_SENSOR  = 0,
    FAULT_AI      = 1,
    FAULT_BAL     = 2,   /* → "COMPUTE FAULT" message */
    FAULT_COM     = 3,   /* → "NO LINK" message */
    FAULT_GENERAL = 4,
} fault_type_t;

typedef enum {
    THERMAL_NORMAL       = 0,
    THERMAL_THROTTLE_15  = 1,  /* Tj ≥ 85°C — reduce to 15 Hz */
    THERMAL_THROTTLE_10  = 2,  /* Tj ≥ 90°C — reduce to 10 Hz */
    THERMAL_THROTTLE_5   = 3,  /* Tj ≥ 95°C — reduce to 5 Hz */
    THERMAL_SHUTDOWN     = 4,  /* Tj ≥ 100°C */
} thermal_state_t;

typedef enum {
    POWER_OK          = 0,
    POWER_LOW_BATTERY = 1,  /* SoC% ≤ 15% */
    POWER_CRITICAL    = 2,  /* SoC% ≤ 5% — shutdown imminent */
} power_state_t;

typedef enum {
    MODULE_AI  = 0,
    MODULE_BAL = 1,
    MODULE_COM = 2,
    MODULE_SPARE = 3,
} module_id_t;
```

### 7.2 API Function Specifications

```c
/* fw_api.h — complete FW-API contract */

#include "fw_api_types.h"

#ifdef __cplusplus
extern "C" {
#endif

/*
 * fw_sensor_capture — Capture a camera frame into caller's buffer.
 *
 * Returns the latest completed frame (double-buffered, zero-copy swap).
 * Caller must pre-allocate buf->data with ≥ (width × height × 2) bytes.
 * Populates buf->timestamp_us and buf->seq on success.
 *
 * Thread-safe: may be called from any thread.
 * Latency: ≤5 ms call-to-return [ASSUMPTION — devkit validation pending].
 * Error: -EIO if sensor in SENSOR_FAULT state.
 *
 * Traces to: SWR-FW-F36, P08
 */
int fw_sensor_capture(frame_buffer_t *buf);

/*
 * fw_display_render — Submit an overlay for display rendering.
 *
 * Non-blocking: queues overlay for T2 to render at next refresh cycle.
 * If FSM is in any fault/degraded state, combat indicators in overlay
 * are suppressed (SWR-FW-S01) — returns -EFAULT but queues status messages.
 * If overlay is NULL, display is cleared.
 *
 * Thread-safe: lock-free SPSC queue (latest-wins).
 * Latency: ≤16.7 ms to screen (next refresh at 60 Hz).
 *
 * Traces to: SWR-FW-F26, F27, F28, F31, P02, S01
 */
int fw_display_render(const overlay_t *ovl);

/*
 * fw_report_fault — Report a fault from application layer.
 *
 * Triggers FSM transition to appropriate fault state (§4.2).
 * Fault-to-message mapping per §4.4 lookup table.
 * Immediately suppresses combat indicators (SWR-FW-S01).
 *
 * Thread-safe: atomic FSM transition.
 * Latency: ≤10 ms state change (SWR-FW-P10) + ≤50 ms display update (P07).
 *
 * Traces to: SWR-FW-F20, F17, S01
 */
int fw_report_fault(fault_type_t type);

/*
 * fw_get_thermal_state — Query current thermal state.
 *
 * Non-blocking atomic read. Updated by T3 at 10 Hz.
 * SW-AI should poll this to adjust inference frame rate.
 *
 * Traces to: SWR-FW-F13
 */
thermal_state_t fw_get_thermal_state(void);

/*
 * fw_get_power_state — Query current power state.
 *
 * Non-blocking atomic read. Updated by T3 at 10 Hz.
 *
 * Traces to: SWR-FW-F09
 */
power_state_t fw_get_power_state(void);

/*
 * fw_register_watchdog — Register a module for heartbeat monitoring.
 *
 * Returns watchdog handle (0–3). Module must call fw_watchdog_heartbeat()
 * within timeout_ms to remain healthy. On timeout: T3 triggers
 * the corresponding fault state within ≤100 ms (SWR-FW-F22).
 *
 * Max 4 registrations (SWR-FW-F23). Returns -ENOMEM if full.
 *
 * Traces to: SWR-FW-F21, F22, F23
 */
int fw_register_watchdog(module_id_t id, uint32_t timeout_ms);

/*
 * fw_watchdog_heartbeat — Reset watchdog timer for registered module.
 *
 * Atomically updates timestamp in wdg_table[handle].
 *
 * Traces to: SWR-FW-F21
 */
int fw_watchdog_heartbeat(int handle);

/*
 * fw_get_battery_soc — Query battery state-of-charge.
 *
 * Returns 0–100 (percent). Returns 0xFF if battery IC read has failed
 * (communication failure — FW-PWR in fallback mode per §5.1).
 * Updated at ≥1 Hz by T3.
 *
 * Traces to: SWR-FW-F05
 */
uint8_t fw_get_battery_soc(void);

/*
 * fw_get_fsm_state — Query current FSM state.
 *
 * Non-blocking atomic read. Applications should check this before
 * rendering combat overlays — if state is fault/degraded, overlays
 * will be suppressed by fw_display_render() anyway.
 *
 * Traces to: SWR-FW-F15, F16
 */
fsm_state_t fw_get_fsm_state(void);

#ifdef __cplusplus
}
#endif
```

---

## 8. Boot Sequence

```
POWER ON (t=0)
  │
  ├─ T4: ISR registered on power-fail GPIO (immediate — before any init)
  │
  ▼ hal_init()
  ├─ hal_gpio_init() ──── GPIO pins configured, LED OFF
  ├─ hal_spi_init() ───── OLED bus ready
  ├─ hal_i2c_init(0) ──── Battery IC bus ready
  ├─ hal_i2c_init(1) ──── ALS bus ready (if present)
  ├─ hal_pwm_init() ───── LED PWM ready
  │
  ▼ FW-DISP early init (t ≈ 300 ms [ASSUMPTION])
  ├─ OLED power on + init sequence
  ├─ Display "STARTING" splash ← SWR-FW-F02 (≤500 ms target)
  │
  ▼ hal_mipi_init() (t ≈ 500 ms)
  ├─ Camera sensor power on + MIPI lane config
  ├─ First frame captured (validation)
  │   └─ If FAIL → enter SENSOR_FAULT (SWR-FW-F03)
  │
  ▼ hal_self_test() (t ≈ 800 ms)
  ├─ Each bus tested: bitmask returned
  ├─ Any critical bus failed → enter appropriate DEGRADED mode
  │
  ▼ AI model load (t ≈ 800 ms → ~2.5 s) ← longest step
  ├─ SW-AI loads model into GPU memory (FW provides file path)
  ├─ This step may be deferred (lazy load) if boot time > 3 s
  │   └─ If deferred: FW enters READY, SW-AI enters AI_LOADING (not a fault)
  │
  ▼ All subsystems healthy (t ≤ 3.0 s target)
  ├─ FSM: INIT → READY (action a1)
  ├─ LED: steady green
  ├─ Display: clear
  ├─ FW-API: active
  ├─ T1, T2, T3, T5: running
  │
  ▼ OPERATIONAL

  Boot log written to diag buffer: {
    total_ms, hal_init_ms, disp_init_ms, mipi_init_ms,
    self_test_result, ai_load_ms, subsystem_status[9]
  }
```

---

## 9. Build System & Variant Configuration

### 9.1 CMake Structure

```
sw-fw/
├── CMakeLists.txt            ← Top-level: variant selection, platform selection
├── cmake/
│   ├── variant_vm.cmake      ← #defines for V-M
│   ├── variant_vl.cmake      ← #defines for V-L
│   ├── variant_vd.cmake      ← V-D (simplified FSM)
│   ├── variant_vx.cmake      ← V-X (export, feature removal)
│   ├── variant_vt.cmake      ← V-T (training data export)
│   ├── variant_vnv.cmake     ← V-NV (dual sensor)
│   ├── variant_vp.cmake      ← V-P (extended FOV)
│   └── variant_vr.cmake      ← V-R (CAN bus, vehicle power)
├── include/
│   ├── fw_api.h              ← Public API (§7.2)
│   ├── fw_api_types.h        ← Public types (§7.1)
│   └── fw_internal.h         ← Internal shared types
├── src/
│   ├── fw_boot.c             ← FW-BOOT module
│   ├── fw_pwr.c              ← FW-PWR module
│   ├── fw_therm.c            ← FW-THERM module
│   ├── fw_fsm.c              ← FW-FSM (table-driven)
│   ├── fw_fsm_table.c        ← FSM transition table (generated from §4.2)
│   ├── fw_wdg.c              ← FW-WDG module
│   ├── fw_disp.c             ← FW-DISP module
│   ├── fw_led.c              ← FW-LED module
│   ├── fw_safe.c             ← FW-SAFE module (MISRA C:2012 required subset)
│   └── fw_diag.c             ← Diagnostic interface (T5)
├── hal/                       ← FW-HAL (§6)
│   ├── hal.h
│   ├── hal_config.h
│   └── platform/{jetson,mock}/
├── test/
│   ├── test_fsm.cpp          ← Exhaustive FSM table test (all 140 cells)
│   ├── test_wdg.cpp          ← Watchdog timeout + recovery
│   ├── test_pwr.cpp          ← Power state transitions
│   ├── test_therm.cpp        ← Thermal throttle stages
│   ├── test_disp.cpp         ← Overlay rendering + suppression
│   ├── test_safe.cpp         ← Safety path verification
│   ├── test_api.cpp          ← Thread-safety tests
│   └── mock/                 ← Mock HAL for all tests
└── depot/
    ├── flash_config.py       ← Depot tool: write variant config to device
    └── diag_reader.py        ← Depot tool: read diagnostic logs
```

### 9.2 Build Commands

```bash
# Build for V-M (baseline) on Jetson
cmake -B build -DVARIANT=VM -DPLATFORM=jetson_orin_nano
cmake --build build

# Build for V-L
cmake -B build -DVARIANT=VL -DPLATFORM=jetson_orin_nano

# Build for unit tests (mock HAL)
cmake -B build_test -DVARIANT=VM -DPLATFORM=mock -DBUILD_TESTS=ON
cmake --build build_test && ctest --test-dir build_test

# Static analysis
cmake --build build --target check  # runs cppcheck + clang-tidy
```

### 9.3 Variant Compile-Time Differences

| Variant Define | FSM Table | DISP Layout | HAL Extras | Feature Flags |
|---------------|-----------|-------------|------------|--------------|
| `VARIANT_VM` | `fsm_table_vm.h` — 6 operational states | Basic: dot + confidence | Baseline | — |
| `VARIANT_VL` | `fsm_table_vl.h` — + READY, ENGAGED | + fire indicator | = | `FIRE_GATE_ENABLED` |
| `VARIANT_VD` | `fsm_table_vd.h` — 3 states only | Alert only | = | `DETECTION_ONLY` |
| `VARIANT_VX` | `fsm_table_vl.h` — V-L minus restricted | V-L minus restricted | = | `EXPORT_MODE` |
| `VARIANT_VT` | `fsm_table_vl.h` + training | V-L + data overlay | = | `TRAINING_EXPORT` |
| `VARIANT_VNV` | `fsm_table_vl.h` | Dual display | + FLIR HAL | `DUAL_SENSOR` |
| `VARIANT_VP` | `fsm_table_vl.h` | Extended FOV | Larger SPI display | `EXTENDED_FOV` |
| `VARIANT_VR` | `fsm_table_vl.h` + CAN_FAULT | V-L + ext display | + CAN HAL, vehicle PWR | `CAN_ENABLED`, `VEHICLE_POWER` |

---

## 10. Standards Compliance Matrix (Resolves SRS FLAG-03, FLAG-10)

### 10.1 TCVN / MIL-STD Clause References

| Standard | Clause | Applies To | SW-FW Module |
|----------|--------|-----------|-------------|
| TCVN 7699-2-1:2007 | Cold/heat test | Ambient −10 to +55°C operating envelope | FW-THERM, FW-PWR (cold-start battery) |
| TCVN 7699-2-6:2009 | Vibration test | SoC data integrity under vibration | FW-HAL (I2C/SPI error rates) |
| TCVN 7699-2-29:2012 | EMC radiated emission | SPI/I2C bus EMI | FW-HAL (clock rates, signal integrity) |
| TCVN 7699-2-78:2009 | Damp heat test | 80–100% RH, 40°C | FW-THERM (condensation recovery) |
| TCVN 13726:2023 | Defense procurement AI | Safety classification, V&V | FW-SAFE (Class B V&V) |
| MIL-STD-810H | Methods 501/502/514 | Environmental qualification | All modules — defines test envelope |
| MIL-STD-461G | RE102 | Radiated emissions | FW-HAL (SPI clock, PWM frequency) |
| IEC 62443-4-1 | Secure development lifecycle | Coding standard, static analysis | All modules — MISRA C, cppcheck |
| IEC 62443-4-2 | Component security | Firmware update signing, diagnostic access | FW-HAL USB, depot tools |
| MISRA C:2012 | Rules 1–22 | Coding standard | FW-SAFE: required subset. Others: advisory subset. |

### 10.2 Local Content Acknowledgment (SRS FLAG-10)

SW-FW is pure software — no BOM, no local content metric directly. However:

- **SoC (Jetson Orin Nano):** US import, NVIDIA. Subject to EAR. No Vietnamese alternative.
- **FW-HAL portability** (SWR-FW-A02) is the architectural mitigation: SoC swap to Hailo-8 (Israel) or RK3588 (China) requires only HAL-layer port, not application redesign.
- **Development labor:** Vietnamese engineer. Counts as local content for labor portion.
- **System-level local content** is tracked at V-SMASH product level, not SW sub-project level.

---

## 11. Test Architecture

### 11.1 Unit Test Strategy

**Decision (resolves OI-4):** gtest for C++ test harness wrapping C modules. Unity not needed — gtest handles C function testing via `extern "C"` linkage.

| Test Suite | Module | Mock Deps | Key Tests | SWR Coverage |
|-----------|--------|-----------|-----------|-------------|
| `test_fsm` | FW-FSM | FW-DISP, FW-LED (mock) | All 140 transition cells exhaustively. Invalid event in each state. | F15–F20, P10, A08 |
| `test_wdg` | FW-WDG | FW-FSM (mock) | Register, heartbeat, timeout, recovery. 4 concurrent modules. | F21–F24, P05 |
| `test_pwr` | FW-PWR | FW-HAL I2C (mock), FW-FSM (mock) | SoC% thresholds (15%, 5%). I2C failure → LOW_BATT fallback. Cold-temp compensation. | F05–F09, §5.1 |
| `test_therm` | FW-THERM | FW-HAL (mock), FW-FSM (mock) | All 4 throttle stages. Hysteresis. Sensor read failure → OVERHEAT. | F10–F14, P06, §5.1 |
| `test_disp` | FW-DISP | FW-HAL SPI (mock) | Overlay render, suppression in fault state, blank command. SPI failure → FAULT. | F25–F31, P02, S01 |
| `test_safe` | FW-SAFE | FW-HAL GPIO (mock), FW-DISP (mock) | Power-fail ISR, debounce, display blank, no re-enable. | F40–F43, S02, S03, S05 |
| `test_api` | FW-API | All modules (mock) | Thread-safety: concurrent calls from 4 threads. Error codes. EFAULT in fault state. | All API functions |
| `test_boot` | FW-BOOT | FW-HAL (mock), all modules (mock) | Normal boot sequence. Subsystem failure → DEGRADED. Boot log written. | F01–F04, P01 |

**Coverage target:** ≥80% branch coverage (SWR-FW-R04), excluding `platform/jetson*/` (tested in SW-Phase 4 integration).

### 11.2 Integration Test Plan (SW-Phase 4, on target)

| Test | Target | Equipment | SWR Coverage |
|------|--------|-----------|-------------|
| Boot timing | Jetson devkit | Stopwatch + instrumented log | P01, F01, F02 |
| Display refresh | Devkit + VM-1300 OLED | High-speed camera 240 fps | P02, F25 |
| Battery discharge | Devkit + real battery | Reference SoC meter | F05, F06, F07 |
| Thermal chamber | Devkit in thermal chamber | Chamber + Tj log | F10–F14, P06, S03 |
| Power-fail | Devkit + battery pull | High-speed camera + oscilloscope | P03, F40–F42, S02 |
| 72h soak | Devkit continuous run | Memory profiler, log analysis | R01, A07 |
| Fault injection | Devkit + fault simulator | Custom test harness | F03, F16–F18, F22, F24 |

---

## 12. Acceptance Criteria (Gate to SW-Phase 3: Implementation)

- [ ] **Architecture complete:** All 9 FW modules have defined interfaces, thread assignment, and error handling
- [ ] **FSM verified:** All 140 transition cells specified — no blank cells in state × event table
- [ ] **API frozen:** FW-API header files (`fw_api.h`, `fw_api_types.h`) reviewed and accepted by SW-AI, SW-BAL, SW-COM leads
- [ ] **HAL portable:** Mock HAL defined, build with mock compiles all non-HAL modules
- [ ] **SRS FLAGs resolved:** All 7 QC Gate FLAGs from SRS addressed with specific design decisions
- [ ] **Test plan:** Unit test suites defined for all modules. Integration test plan ready for SW-Phase 4.
- [ ] **Safety path:** FW-SAFE ISR → display blank path documented with timing analysis
- [ ] **QC Gate passed:** Defense AI QC Gate run on this SAD, all checks PASS or FLAG-with-plan

---

*Software Architecture Document — V-SMASH-SW-FW*
*SW-Phase 2 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-FW_SRS_v1.0|SRS (SW-Phase 1)]]*
*Resolves: SRS FLAGs 01, 03, 05, 07, 09, 10, 12 + Open Items OI-1, OI-4*
