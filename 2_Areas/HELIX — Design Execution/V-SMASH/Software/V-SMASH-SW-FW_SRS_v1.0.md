---
project: V-SMASH-SW-FW
type: software-requirements-specification
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 5 PASS, 7 FLAG, 0 FAIL — 2026-02-24)
parent_family: V-SMASH
sw_phase: 1 (Formal Specification)
safety_class: B (IEC 62443 analogy)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
source: V-SMASH-SW-FW_Product_Proposal_v1.0.md (SW-Phase 0)
standards: [IEEE 830, MIL-STD-498 SRS DID, IEC 62443, TCVN 13726]
---

# V-SMASH-SW-FW — Software Requirements Specification

**SW-Phase 1 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) defines the complete, testable requirements for V-SMASH-SW-FW — the embedded firmware platform running on all V-SMASH product variants. It formalizes the requirements extracted in SW-Phase 0 (Product Proposal v1.0) into verifiable specifications that serve as the contractual baseline for SW-Phase 2 (Architecture), SW-Phase 3 (Implementation), and SW-Phase 5 (Qualification).

**Intended audience:** FW engineer (implementer), SW-AI/SW-BAL/SW-COM leads (API consumers), QA engineer (V&V), project manager (schedule), safety reviewer (Class B audit).

### 1.2 Scope

SW-FW is the foundation software layer for the V-SMASH family. It abstracts hardware, manages system health (power, thermal, faults), drives the operator display and status LED, and publishes API contracts consumed by SW-AI, SW-BAL, and SW-COM.

**Boundaries:**

| Layer | Responsibility | Sub-Project |
|-------|---------------|-------------|
| Application (AI inference, ballistics, tracking) | Detection, classification, fire solution | SW-AI, SW-BAL |
| Application (communications, diagnostics) | BLE, OTA, data logging | SW-COM |
| **Firmware platform (THIS SRS)** | **HAL, boot, power, thermal, FSM, display, LED, watchdog, safety** | **SW-FW** |
| Hardware | SoC, PCB, sensors, display, battery | V-SMASH-M HW design |

### 1.3 Definitions & Abbreviations

| Term | Definition |
|------|-----------|
| FSM | Fault State Machine — system health state management (distinct from engagement state machine) |
| HAL | Hardware Abstraction Layer — isolates SoC-specific interfaces behind portable APIs |
| SoC | System-on-Chip — currently NVIDIA Jetson Orin Nano (VM-2101) |
| Tj | Junction temperature of the SoC die |
| SoC (battery) | State of Charge — battery remaining capacity percentage |
| FW-API | Published firmware interface layer consumed by SW-AI, SW-BAL, SW-COM |
| OLED | Organic LED display module (VM-1300) — operator visual output |
| MIPI CSI-2 | Camera Serial Interface for image sensor (VM-1200) |
| Stale indicator | A displayed symbol (lead dot, confidence bar, fault message) that no longer reflects current system state |

### 1.4 References

| ID | Document | Relevance |
|----|----------|-----------|
| [PP] | V-SMASH-SW-FW_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [B1] | V-SMASH-M_B1_YCKT_v1.0 | Master requirements list (VM-xxx IDs) |
| [B4] | V-SMASH-M_B4_User_Manual_v1.0 | Operational states §5.2, fault messages §6.2 |
| [FMEA] | V-SMASH-M_FMEA_v1.0 | Failure modes F04, F05, F15 |
| [B3] | V-SMASH-M_B3_Process_Plan_v1.0 | OP-240 firmware loading |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0 | Variant matrix, SW core decomposition |

---

## 2. Overall Description

### 2.1 System Context

```
┌─────────────────────────────────────────────────────────────────┐
│                       V-SMASH SYSTEM                            │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│  │  SW-AI   │  │  SW-BAL  │  │  SW-COM  │  ← API Consumers    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                     │
│       │              │              │                           │
│  ═════╧══════════════╧══════════════╧═══════════                │
│              FW-API (this SRS defines)                           │
│  ═══════════════════════════════════════════════                 │
│       │              │              │                           │
│  ┌────┴──────────────┴──────────────┴────────┐                 │
│  │              SW-FW (this SRS)              │                 │
│  │  FW-BOOT │ FW-PWR │ FW-THERM │ FW-FSM    │                 │
│  │  FW-WDG  │ FW-DISP│ FW-LED   │ FW-SAFE   │                 │
│  │  FW-HAL                                    │                 │
│  └────┬──────────────┬──────────────┬────────┘                 │
│       │              │              │                           │
│  ┌────┴──────────────┴──────────────┴────────┐                 │
│  │          HARDWARE (SoC + PCB)              │                 │
│  │  MIPI CSI-2 │ SPI │ I2C │ GPIO │ USB-C    │                 │
│  └───────────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Operating Modes

SW-FW operates in exactly one of these system modes at any time:

| Mode | Entry Condition | Behavior |
|------|----------------|----------|
| **INIT** | Power applied | FW-BOOT runs startup sequence. No display output except "STARTING" splash. |
| **OPERATIONAL** | Boot complete, all subsystems healthy | Normal operation. FW-FSM in READY or combat states. FW-API active. |
| **DEGRADED** | One subsystem in fault | FW-FSM in degraded mode (SENSOR FAULT / AI FAULT / THERMAL). Reduced capability, operator warned. |
| **SHUTDOWN** | Thermal ≥100°C or critical battery or user power-off | Graceful shutdown: blank display, safe state, power off. |

### 2.3 Assumptions & Dependencies

| ID | Assumption | Impact if Wrong |
|----|-----------|----------------|
| ASM-01 | Jetson Orin Nano available (EAR approved) | SoC swap to Hailo-8 or RK3588 — HAL port required |
| ASM-02 | Main PCB schematic (SA-04) matches devkit pinout | HAL adaptation for custom board |
| ASM-03 | OLED SPI clock ≥40 MHz achievable on target PCB | May not reach 60 Hz refresh — fallback to 30 Hz [ASSUMPTION] |
| ASM-04 | JetPack 6.x real-time patches available | May need PREEMPT_RT kernel — added integration effort |
| ASM-05 | Battery protection IC provides coulomb counter via I2C | Alternative: voltage-based SoC estimation (less accurate) |

---

## 3. Specific Requirements

### 3.1 Functional Requirements — FW-BOOT (Boot Sequence)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F01 | On power-on, FW-BOOT shall execute the startup sequence: SoC init → HAL init → sensor init → display init → AI model load → transition to OPERATIONAL mode. | VM-H02, VM-Q01 | MUST | T: instrumented boot log, 10 trials |
| SWR-FW-F02 | FW-BOOT shall display a "STARTING" indicator on the OLED within ≤500 ms of power-on [ASSUMPTION]. | VM-H02 (UX) | SHOULD | T: high-speed camera, power-on to first pixel |
| SWR-FW-F03 | If any subsystem fails initialization, FW-BOOT shall transition to the appropriate DEGRADED mode rather than halting. | VM-N06 | MUST | T: fault injection per subsystem |
| SWR-FW-F04 | FW-BOOT shall log boot duration and subsystem init status to a persistent buffer readable via diagnostic interface (USB-C). | B3 OP-240 | SHOULD | T: read diagnostic log after boot |

### 3.2 Functional Requirements — FW-PWR (Power Management)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F05 | FW-PWR shall estimate battery state-of-charge (SoC%) by reading the battery protection IC (VM-4105) via I2C at ≥1 Hz. | VM-E05 | MUST | T: compare with reference meter across discharge curve |
| SWR-FW-F06 | When SoC% ≤ 15%, FW-PWR shall trigger LOW BATTERY state in FW-FSM. | VM-E05 | MUST | T: discharge to 15%, verify state transition |
| SWR-FW-F07 | When SoC% ≤ 5%, FW-PWR shall trigger CRITICAL BATTERY → initiate graceful shutdown. | VM-E05 (implied) | MUST | T: discharge to 5%, verify shutdown sequence |
| SWR-FW-F08 | FW-PWR shall enforce a per-module power budget: FW overhead ≤ 0.3 W of 2.3 W system average. | VM-E03, VM-E07 | MUST | T: power measurement with AI idle vs active |
| SWR-FW-F09 | FW-PWR shall expose `get_power_state()` API returning one of: `{OK, LOW_BATTERY, CRITICAL}`. | [PP] §4 | MUST | T: verify return values at each threshold |

### 3.3 Functional Requirements — FW-THERM (Thermal Management)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F10 | FW-THERM shall read SoC junction temperature (Tj) at ≥2 Hz via JetPack thermal API. | VM-M05 | MUST | T: thermal chamber sweep 25→100°C |
| SWR-FW-F11 | FW-THERM shall apply thermal throttle stages: Tj ≥ 85°C → notify SW-AI to reduce to 15 Hz; Tj ≥ 90°C → force 10 Hz; Tj ≥ 95°C → force 5 Hz + OVERHEAT warning. | VM-M05, VM-N06(3) | MUST | T: thermal chamber, verify AI frame rate at each threshold |
| SWR-FW-F12 | At Tj ≥ 100°C, FW-THERM shall initiate graceful shutdown: blank display → safe state → power off. | VM-M05 | MUST (SAFETY) | T: thermal chamber, verify display blank + shutdown |
| SWR-FW-F13 | FW-THERM shall expose `get_thermal_state()` API returning one of: `{NORMAL, THROTTLE_15HZ, THROTTLE_10HZ, THROTTLE_5HZ, SHUTDOWN}`. | [PP] §4 | MUST | T: verify return values at each Tj threshold |
| SWR-FW-F14 | FW-THERM shall implement thermal hysteresis: throttle stage clears at (threshold − 5°C). | Best practice | SHOULD | T: verify no oscillation at boundary |

### 3.4 Functional Requirements — FW-FSM (Fault State Machine)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F15 | FW-FSM shall manage these operational states: INIT, READY, DETECTED, POST_SHOT, LOW_BATTERY, FAULT, OVERHEAT. | VM-N04, B4 §5.2 | MUST | T: force each state, verify transitions |
| SWR-FW-F16 | FW-FSM shall manage these degraded modes: SENSOR_FAULT, AI_FAULT, THERMAL_DEGRADED. Each degraded mode shall be independently enterable (e.g., sensor fault does not imply AI fault). | VM-N06, B4 §6.2 | MUST | T: inject each fault independently |
| SWR-FW-F17 | On entering any fault or degraded state, FW-FSM shall: (a) update FW-DISP with the corresponding message, (b) update FW-LED to FAULT pattern, (c) suppress any stale combat indicators (lead dot, confidence). | VM-N06, SWR-FW-S01 | MUST (SAFETY) | T: fault injection, camera verify display + LED |
| SWR-FW-F18 | FW-FSM shall allow recovery from degraded modes when the fault condition clears, verified by 3 consecutive healthy readings at ≥1 Hz. | VM-N06 (implied) | SHOULD | T: inject fault, clear condition, verify recovery timing |
| SWR-FW-F19 | FW-FSM state transitions shall be logged to a circular buffer (≥256 entries) readable via diagnostic interface. | B3 OP-240 | SHOULD | T: read diagnostic log, verify entries |
| SWR-FW-F20 | FW-FSM shall expose `report_fault(fault_type)` API that triggers the appropriate state transition from any calling module (SW-AI, SW-BAL, SW-COM). | [PP] §4 | MUST | T: call from test harness, verify transition |

### 3.5 Functional Requirements — FW-WDG (Watchdog)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F21 | FW-WDG shall expose `register_watchdog(module_id, timeout_ms)` API. Registered modules must call a heartbeat function within `timeout_ms` to remain in good standing. | [PP] §4, VM-N06 | MUST | T: register, let timeout expire, verify fault |
| SWR-FW-F22 | If a registered module's heartbeat exceeds timeout_ms, FW-WDG shall trigger the corresponding fault state (e.g., AI timeout → AI_FAULT) within ≤100 ms. | VM-N06(2) | MUST | T: fault injection, timestamp measurement |
| SWR-FW-F23 | FW-WDG shall support at least 4 simultaneous watchdog registrations (SW-AI, SW-BAL, SW-COM, plus one spare). | Design margin | SHOULD | T: register 4 modules, verify all monitored |
| SWR-FW-F24 | On watchdog timeout, FW-WDG shall suppress all indicators from the timed-out module within ≤100 ms (no stale data). | VM-N06, SWR-FW-S01 | MUST (SAFETY) | T: timeout, camera verify indicator suppression latency |

### 3.6 Functional Requirements — FW-DISP (Display Driver)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F25 | FW-DISP shall drive the OLED module (VM-1300) via SPI at ≥60 Hz refresh rate. | VM-S03 | MUST | T: high-speed camera 240 fps, measure frame interval |
| SWR-FW-F26 | FW-DISP shall expose `display_render(overlay)` API accepting an overlay struct: `{dot_x: uint16, dot_y: uint16, color: enum{GREEN,YELLOW,RED,OFF}, messages: char[8][32]}`. | [PP] §4 | MUST | T: render test patterns, camera verify |
| SWR-FW-F27 | FW-DISP shall render the lead dot at the coordinates specified by `display_render()` with a positional accuracy of ≤1 pixel. | VM-S04 | MUST | T: render known coordinates, pixel-level inspection |
| SWR-FW-F28 | FW-DISP shall render confidence as a 3-tier color: GREEN (high ≥ 0.8), YELLOW (medium 0.5–0.8), RED (low < 0.5). Color thresholds configurable at build time. | VM-S04 | MUST | I: visual inspection of each color |
| SWR-FW-F29 | FW-DISP shall render up to 8 distinct fault/status messages as defined in B4 §6.2: SENSOR FAULT, AI FAULT, THERMAL, COMPUTE FAULT, RANGE?, NO LINK, LOW BATT, (normal = clear). | B4 §6.2, SWR-FW-08 | MUST | I: visual inspection per state |
| SWR-FW-F30 | FW-DISP shall support auto-brightness adjustment based on ambient light sensor input (VM-H04). If no ambient light sensor is present, brightness shall default to a depot-configurable fixed level. | VM-H04 | SHOULD | T: vary ambient light, measure OLED brightness response |
| SWR-FW-F31 | FW-DISP shall blank the display (all pixels off) when commanded by FW-SAFE or FW-THERM shutdown, within ≤100 ms. | VM-Y02, SWR-FW-S02 | MUST (SAFETY) | T: trigger blank, high-speed camera verify |

### 3.7 Functional Requirements — FW-LED (Status LED)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F32 | FW-LED shall drive the RGB status LED (VM-4108) via GPIO/PWM with at least 3 distinct patterns: OK (steady green), FAULT (blinking red), LOW BATT (blinking amber). | VM-N04 | MUST | I: visual inspection per state |
| SWR-FW-F33 | FW-LED FAULT and LOW BATT patterns shall be visually distinguishable from power-off (LED off). | VM-N04, SWR-FW-S04 | MUST (SAFETY) | I: compare powered-off vs each fault state |
| SWR-FW-F34 | FW-LED state shall update within ≤50 ms of FW-FSM state change. | VM-N04 | MUST | T: FSM transition, timestamp LED change |

### 3.8 Functional Requirements — FW-HAL (Hardware Abstraction Layer)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F35 | FW-HAL shall abstract the following physical interfaces behind portable C APIs: MIPI CSI-2 (camera), SPI (OLED), I2C (sensors, battery IC), GPIO (LED, general), USB-C (diagnostics, charging), PWM (LED dimming). | [PP] §2, BOM risk | MUST | T: run same application code on devkit vs target board |
| SWR-FW-F36 | FW-HAL `sensor_capture()` shall return a 1920×1080 raw frame buffer with ≤5 ms call-to-return latency [ASSUMPTION — devkit measurement pending]. | [PP] §4, VM-K02 | MUST | T: timestamp call-to-return, 100 frames |
| SWR-FW-F37 | FW-HAL shall be the sole module that includes SoC-specific SDK headers (JetPack). All modules above FW-HAL shall compile without SoC-specific includes. | SWR-FW-A02 | MUST | T: build with mock HAL, verify compilation |
| SWR-FW-F38 | FW-HAL shall support configuration of I2C bus addresses and SPI chip-select pins via a build-time configuration table (not hardcoded). | PCB portability | MUST | I: inspect config file, rebuild with altered config |
| SWR-FW-F39 | FW-HAL shall expose a `hal_self_test()` function that verifies all physical interfaces respond. Return: bitmask of healthy/faulted interfaces. | VM-Q01 | SHOULD | T: disconnect sensor, verify bitmask reflects fault |

### 3.9 Functional Requirements — FW-SAFE (Safety-Critical)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-FW-F40 | On detection of power supply loss (voltage below threshold), FW-SAFE shall blank the OLED display within ≤100 ms with zero residual pixels. | VM-Y02 | MUST (SAFETY-CRITICAL) | T: battery pull test, high-speed camera, 10 trials |
| SWR-FW-F41 | FW-SAFE shall use a hardware interrupt (not polling) to detect power-loss events, ensuring response even if main firmware loop is blocked. | VM-Y02 design | MUST (SAFETY-CRITICAL) | T: block main loop, pull battery, verify display blanks |
| SWR-FW-F42 | After FW-SAFE blanks the display on power loss, no software path shall be capable of re-enabling the display without a full power cycle. | VM-Y02 | MUST (SAFETY-CRITICAL) | T: attempt display write after power-fail blank, verify no output |
| SWR-FW-F43 | On thermal shutdown (Tj ≥ 100°C), FW-SAFE shall blank display, set LED to OFF, and halt all processing within ≤200 ms. | VM-M05 | MUST (SAFETY-CRITICAL) | T: thermal chamber to 100°C, camera + power measurement |

---

### 3.10 Performance Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-FW-P01 | Boot time: power-on to OPERATIONAL | VM-H02 | ≤3.0 s (desired ≤2.0 s) | T: stopwatch + instrumented log, 10 trials |
| SWR-FW-P02 | Display refresh rate | VM-S03 | ≥60 Hz sustained | T: high-speed camera 240 fps |
| SWR-FW-P03 | Power-fail display blank latency | VM-Y02 | ≤100 ms, zero residual | T: battery pull, camera, 10 trials |
| SWR-FW-P04 | FW power overhead | VM-E03 | ≤0.3 W average (of 2.3 W system budget) | T: power measurement, AI idle |
| SWR-FW-P05 | Watchdog response time | VM-N06 | Timeout detection → FAULT ≤100 ms | T: fault injection, timestamp |
| SWR-FW-P06 | Thermal throttle response | VM-M05 | Tj ≥ 95°C → throttle active ≤1.0 s | T: thermal chamber ramp |
| SWR-FW-P07 | Fault indicator update latency | VM-N04 | FSM change → LED/OLED update ≤50 ms | T: fault injection + camera |
| SWR-FW-P08 | Sensor capture latency | VM-K02 | `sensor_capture()` call-to-return ≤5 ms [ASSUMPTION] | T: timestamp, 100 calls |
| SWR-FW-P09 | Frame-to-frame cycle time (system) | VM-K02 | ≤33 ms (30 Hz minimum throughput) | T: end-to-end pipeline measurement |
| SWR-FW-P10 | FSM state transition time | Design | ≤10 ms from trigger to new state stable | T: instrumented FSM, 50 transitions |

---

### 3.11 Safety Requirements

All safety requirements require **independent V&V** — not self-verified by the implementing engineer.

| ID | Requirement | Source | Safety Class | Fallback | Verification |
|----|-------------|--------|-------------|----------|-------------|
| SWR-FW-S01 | No stale indicator shall be displayed in ANY fault or degraded state. On entering a fault state, all combat indicators (lead dot, confidence color, tracking box) shall be suppressed within ≤100 ms. | VM-N06 | SAFETY-CRITICAL | FW-SAFE hardware interrupt blanks display if software path fails | T: fault injection, camera 240 fps |
| SWR-FW-S02 | On power failure, OLED shall display no residual image — zero visible pixels within ≤100 ms. | VM-Y02 | SAFETY-CRITICAL | HW: OLED power rail cut by MOSFET on Vbat loss (independent of FW) | T: battery pull, camera, 10 trials. D: oscilloscope on OLED power rail |
| SWR-FW-S03 | Thermal shutdown shall result in stable display-off with no flickering or partial rendering. | VM-M05 | SAFETY-CRITICAL | HW: thermal cutoff at 105°C (independent of FW) as backup. FMEA F15. | T: thermal chamber 100°C, camera |
| SWR-FW-S04 | Any fault state shall be visually distinguishable from power-off state. Operator must be able to differentiate "device faulted but powered" from "device unpowered." | VM-N04 | SAFETY-RELATED | LED blink pattern vs LED off. No fallback needed — low severity. | I: visual comparison chart |
| SWR-FW-S05 | FW-SAFE power-loss handler shall be implemented as a hardware interrupt, not a polled check, to ensure response even during main-loop hang. | VM-Y02 design | SAFETY-CRITICAL | None — this IS the fallback mechanism. | D: code review + T: main-loop block test |

---

### 3.12 Architecture Constraints

| ID | Constraint | Rationale | Verification |
|----|-----------|-----------|-------------|
| SWR-FW-A01 | Implementation language: C or C++ (C++17 max) on Linux (JetPack SDK 6.x). | Jetson Orin Nano platform mandate. CUDA only in SW-AI. | I: inspect build system |
| SWR-FW-A02 | FW-HAL shall be the sole module with SoC-specific SDK dependencies. | BOM risk: Jetson EAR block → SoC swap. Only HAL changes. | T: mock HAL build |
| SWR-FW-A03 | FW-API contracts shall be defined as C header files with Doxygen documentation. | Inter-module stability. API headers are the contract. | I: header review |
| SWR-FW-A04 | Zero user-facing menus, settings, or interactive UI elements. | VM-H06: ≤1 control (power button), 0 menus. | I: UI review |
| SWR-FW-A05 | All configurable parameters (variant, thresholds, display layout) via build-time `#define` or depot-flashed parameter block. No field configuration. | VM-N05: no field config. Prevents operator error in combat. | I: inspect config mechanism |
| SWR-FW-A06 | FW shall use real-time scheduling (SCHED_FIFO or PREEMPT_RT) for time-critical threads: sensor capture, display render, watchdog monitor. | VM-K02: ≤33 ms frame-to-frame. Cannot tolerate Linux scheduler jitter. | T: measure worst-case latency under load |
| SWR-FW-A07 | No dynamic memory allocation (malloc/new) after boot sequence completes. All buffers pre-allocated during INIT. | Embedded reliability — prevents fragmentation and OOM in long runs. | T: run 72h continuous, monitor heap |
| SWR-FW-A08 | FW-FSM state machine shall be implemented as a deterministic table-driven FSM (not ad-hoc if/else chains). | Verifiability — state transitions reviewable as a table, testable exhaustively. | I: code review of FSM implementation |

---

### 3.13 Interface Requirements

#### 3.13.1 FW-API — Published Interfaces to SW-AI, SW-BAL, SW-COM

| API Function | Signature (Draft) | Consumer | Contract |
|-------------|-------------------|----------|----------|
| `fw_sensor_capture` | `int fw_sensor_capture(frame_buffer_t *buf)` | SW-AI | Returns 1920×1080 raw frame. Latency ≤5 ms [ASSUMPTION]. Returns 0 on success, error code on failure. Buffer must be pre-allocated by caller (≥6.2 MB for 1080p raw). |
| `fw_display_render` | `int fw_display_render(const overlay_t *ovl)` | SW-AI, SW-BAL | Accepts overlay struct. Renders at next refresh cycle (≤16.7 ms at 60 Hz). Non-blocking. Returns 0 on success. If in fault state, render is suppressed (returns -EFAULT). |
| `fw_report_fault` | `int fw_report_fault(fault_type_t type)` | SW-AI, SW-BAL, SW-COM | Triggers FSM transition. `type` enum: SENSOR_FAULT, AI_FAULT, BAL_FAULT, COM_FAULT, GENERAL. Returns 0 on transition accepted. |
| `fw_get_thermal_state` | `thermal_state_t fw_get_thermal_state(void)` | SW-AI | Returns: NORMAL, THROTTLE_15HZ, THROTTLE_10HZ, THROTTLE_5HZ, SHUTDOWN. Non-blocking. |
| `fw_get_power_state` | `power_state_t fw_get_power_state(void)` | SW-AI, SW-COM | Returns: OK, LOW_BATTERY, CRITICAL. Non-blocking. |
| `fw_register_watchdog` | `int fw_register_watchdog(module_id_t id, uint32_t timeout_ms)` | SW-AI, SW-BAL | Registers module for heartbeat monitoring. Returns watchdog handle. Module must call `fw_watchdog_heartbeat(handle)` within timeout_ms. |
| `fw_watchdog_heartbeat` | `int fw_watchdog_heartbeat(int handle)` | SW-AI, SW-BAL | Resets watchdog timer for registered module. Returns 0 on success. |
| `fw_get_battery_soc` | `uint8_t fw_get_battery_soc(void)` | SW-COM | Returns battery SoC% (0–100). Updated at ≥1 Hz. |
| `fw_get_fsm_state` | `fsm_state_t fw_get_fsm_state(void)` | SW-AI, SW-BAL, SW-COM | Returns current FSM state enum. Non-blocking. |

**Thread safety:** All FW-API functions shall be thread-safe (callable from any thread without external locking).

**Error convention:** Negative return = error code (POSIX errno style). Zero = success. Positive = valid data.

#### 3.13.2 Hardware Interfaces (FW-HAL Internal)

| Interface | Protocol | Connected To | Data Rate | FW Module |
|-----------|----------|-------------|-----------|-----------|
| MIPI CSI-2 | 2-lane, 1080p30 | CMOS sensor (VM-1200) | ~3 Gbps | FW-HAL → `fw_sensor_capture` |
| SPI | Master, Mode 0 | OLED display (VM-1300) | ≥40 MHz [ASSUMPTION] | FW-HAL → FW-DISP |
| I2C #0 | 400 kHz | Battery protection IC (VM-4105) | ~50 kbps | FW-HAL → FW-PWR |
| I2C #1 | 400 kHz | Ambient light sensor (if present) | ~10 kbps | FW-HAL → FW-DISP |
| GPIO ×3 | Digital out | RGB LED (VM-4108) | N/A (static) | FW-HAL → FW-LED |
| PWM ×1 | 1 kHz | LED dimming | N/A | FW-HAL → FW-LED |
| USB-C | USB 2.0 Device | Depot diagnostic tool | 480 Mbps max | FW-HAL → diagnostic interface |
| GPIO ×1 | Interrupt in | Power-fail detect | N/A (edge) | FW-HAL → FW-SAFE |

#### 3.13.3 Diagnostic Interface (USB-C)

| Function | Description | Access |
|----------|-------------|--------|
| Read boot log | Returns last boot sequence timing + subsystem status | Depot only |
| Read FSM log | Returns circular buffer of FSM state transitions (≥256 entries) | Depot only |
| Read thermal log | Returns Tj history (last 1000 samples) | Depot only |
| Flash configuration | Write variant config + threshold parameters | Depot only (authenticated) |
| Firmware update | Flash new firmware image | Depot only (signed image) |

**Restriction:** Diagnostic interface shall be disabled during OPERATIONAL mode. Enabled only when device detects depot diagnostic tool handshake on USB-C.

---

### 3.14 Reliability & Maintainability Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-FW-R01 | FW shall operate continuously for ≥72 hours without memory leak, crash, or FSM deadlock. | Operational profile (patrol duration) | 72h continuous uptime | T: soak test on target, memory monitoring |
| SWR-FW-R02 | FW shall recover from any single transient fault (sensor glitch, I2C timeout) without requiring power cycle. | VM-N06, field robustness | Auto-recovery in ≤5 s | T: inject transient faults, verify recovery |
| SWR-FW-R03 | FW update shall be via signed firmware image flashed through USB-C diagnostic interface. No OTA update path in FW (OTA is SW-COM's responsibility). | Security | Signed images only | I: verify signature check in flash routine |
| SWR-FW-R04 | FW source shall have ≥80% branch coverage in unit tests (excluding FW-HAL platform-specific code). | Quality standard | 80% branch coverage | T: coverage report from CI |

---

### 3.15 Environment & Build Requirements

| ID | Requirement | Value |
|----|-------------|-------|
| SWR-FW-E01 | Target OS | Linux (JetPack 6.x) with PREEMPT_RT patches [ASSUMPTION] |
| SWR-FW-E02 | Compiler | GCC ≥ 12 (aarch64-linux-gnu cross-compiler) |
| SWR-FW-E03 | Build system | CMake ≥ 3.22 |
| SWR-FW-E04 | Unit test framework | Google Test (gtest) or Unity (C) — decided in SW-Phase 2 |
| SWR-FW-E05 | Static analysis | cppcheck + clang-tidy, zero critical findings before merge |
| SWR-FW-E06 | Coding standard | MISRA C:2012 (advisory subset for non-safety modules, required subset for FW-SAFE) |

---

## 4. Variant Configuration Matrix

Core modules are identical across all variants. Differences are limited to FW-FSM states, FW-DISP layout, and FW-HAL adaptations. All variant selection via build-time `#define VARIANT_xxx` or depot-flash parameter.

| Module | V-M (Baseline) | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|----------------|-----|-----|-----|-----|------|-----|-----|
| FW-BOOT | Full | = | Reduced (no AI model preload for detection-only) | = V-L | = V-L | = V-L + thermal sensor init | = V-L | = V-L + CAN init |
| FW-PWR | Full | = | = | = | = | = | = | Vehicle power input (12V→5V) |
| FW-THERM | Full | = | = | = | = | = | Extended (lower thresholds for larger optics thermal mass) | = |
| FW-FSM | 6 states, no fire gate | + READY, ENGAGED states | 3 states (STANDBY→ALERT→CONCLUDED) | V-L minus export-restricted states | V-L + TRAINING_EXPORT | = V-L | = V-L | V-L + CAN_FAULT |
| FW-WDG | Full | = | = | = | = | = | = | = |
| FW-DISP | Lead dot + confidence | + fire indicator | Alert only (no lead dot) | V-L minus restricted | V-L + data overlay | Dual: visible + thermal overlay | Extended FOV layout | V-L + external display mirror |
| FW-LED | Full | = | = | = | = | = | = | = |
| FW-HAL | Jetson baseline | = | = | = | = | + thermal sensor (FLIR Lepton I2C) | = (larger SPI display) | + CAN bus HAL |
| FW-SAFE | Full | = | = | = | = | = | = | = |

**Single codebase rule:** All variants compile from the same source tree. `#define VARIANT_xxx` selects FSM table, display layout, and HAL configuration at build time.

---

## 5. Traceability Matrix (Requirements → Source → Verification)

### 5.1 Forward Traceability (Source Requirement → SWR-FW)

| Source Req | SWR-FW Coverage |
|-----------|----------------|
| VM-H02 (boot time) | SWR-FW-F01, F02, P01 |
| VM-Q01 (self-test) | SWR-FW-F01, F03, F39 |
| VM-E03/E07 (power budget) | SWR-FW-F08, P04 |
| VM-E05 (low battery) | SWR-FW-F05, F06, F07, F09 |
| VM-M05 (thermal) | SWR-FW-F10, F11, F12, F13, F14, P06, S03 |
| VM-N04 (fault indication) | SWR-FW-F15, F32, F33, F34, P07, S04 |
| VM-N06 (inference watchdog) | SWR-FW-F16, F17, F21, F22, F24, P05, S01 |
| VM-S03 (display refresh) | SWR-FW-F25, P02 |
| VM-S04 (display accuracy) | SWR-FW-F27, F28 |
| VM-H04 (auto-brightness) | SWR-FW-F30 |
| VM-H06 (no menus) | SWR-FW-A04 |
| VM-N05 (no field config) | SWR-FW-A05 |
| VM-K02 (frame cycle) | SWR-FW-F36, P08, P09, A06 |
| VM-Y02 (power-fail safe) | SWR-FW-F40, F41, F42, P03, S02, S05 |
| B4 §5.2 (operational states) | SWR-FW-F15 |
| B4 §6.2 (fault messages) | SWR-FW-F29 |
| B3 OP-240 (diagnostics) | SWR-FW-F04, F19 |
| FMEA F15 (thermal bug) | SWR-FW-S03 |
| BOM R2 (SoC risk) | SWR-FW-F35, F37, A02 |

### 5.2 Backward Traceability (SWR-FW → Verification Method)

| Verification | Count | SWR-FW IDs |
|-------------|-------|------------|
| T (Test) | 38 | F01–F14, F16–F27, F31, F34, F36, F37, F39–F43, P01–P10, R01–R02, R04 |
| I (Inspection) | 10 | F28, F29, F30, F32, F33, F38, A01, A04, A05, R03 |
| D (Demonstration) | 2 | S02 (oscilloscope), S05 (code review + test) |
| A (Analysis) | 0 | — (none — per safety override, analysis alone insufficient) |

---

## 6. Risks

| # | Risk | Prob. | Impact | Mitigation | Contingency |
|---|------|-------|--------|------------|-------------|
| R1 | Jetson EAR block → SoC swap | Medium | HIGH | FW-HAL abstracts SoC. Only HAL port needed. | Budget 4 weeks HAL porting to Hailo-8 or RK3588. |
| R2 | Boot time > 3 s with full AI model load | Medium | MEDIUM | Lazy load: "STARTING" splash immediately, AI loads in background. | Accept 4 s boot with UX mitigation (SWR-FW-F02). |
| R3 | Thermal throttle firmware bug (FMEA F15, S=8) | Low | HIGH | HW thermal cutoff at 105°C independent of FW. Independent V&V of SWR-FW-S03. | HW cutoff is fail-safe backup. |
| R4 | 60 Hz OLED refresh not achievable on SPI | Low | LOW | Evaluate DMA-driven SPI transfer. | 30 Hz acceptable (SWR-FW-F25 → ≥30 Hz). |
| R5 | PCB schematic delay → HAL finalization blocked | Medium | MEDIUM | HAL design starts against devkit. Pin remapping is config change, not redesign. | Use devkit for SW-Phase 3/4 if PCB late. |
| R6 | Real-time latency on stock Linux kernel | Medium | MEDIUM | PREEMPT_RT kernel patches. Evaluate during SW-Phase 3. | Fallback: use dedicated RT thread for sensor capture + watchdog. |
| R7 | Battery SoC estimation inaccurate | Low | LOW | Calibrate against reference meter across full discharge curve. | Voltage-based fallback with wider hysteresis bands. |

---

## 7. Acceptance Criteria (Gate to SW-Phase 2: SAD)

All criteria must be satisfied before proceeding to Software Architecture Document.

- [ ] **Completeness:** Every SWR-FW requirement has: ID, description, source, priority, verification method
- [ ] **Traceability:** Every source requirement (VM-xxx) maps to ≥1 SWR-FW. No orphan source reqs.
- [ ] **Safety V&V:** All SAFETY-CRITICAL requirements (S01–S05) have: (a) independent V&V flag, (b) fallback behavior, (c) verification method T or D
- [ ] **API stability:** FW-API function signatures reviewed and accepted by SW-AI, SW-BAL, SW-COM leads
- [ ] **Testability:** Every MUST requirement is verifiable by T (test) or I (inspection) — no "A (analysis) only"
- [ ] **Variant coverage:** All 8 variants mapped against all 9 modules — no blank cells
- [ ] **Assumptions tagged:** Every unvalidated performance value marked [ASSUMPTION]
- [ ] **No conflicts:** No SWR-FW requirements contradict each other or parent VM requirements
- [ ] **QC Gate passed:** Defense AI QC Gate (12 checks) run on this SRS, all checks PASS or FLAG-with-plan

---

## 8. Open Items for SW-Phase 2 Resolution

| # | Item | Decision Needed | Owner |
|---|------|----------------|-------|
| OI-1 | PREEMPT_RT vs SCHED_FIFO for real-time threads | Benchmark on devkit during SW-Phase 2 | FW engineer |
| OI-2 | Exact SPI clock rate achievable for OLED refresh | Measure on devkit with VM-1300 module | FW engineer |
| OI-3 | `sensor_capture()` ≤5 ms — validate on target | Benchmark on Jetson devkit + VM-1200 | FW engineer |
| OI-4 | Unit test framework selection (gtest vs Unity) | Decide based on team preference + CI setup | FW engineer |
| OI-5 | V-R CAN bus protocol definition | Coordinate with MTB-20 vehicle integration team | Systems engineer |
| OI-6 | V-NV dual-display rendering architecture | Requires FLIR Lepton thermal sensor evaluation | FW + optics engineer |

---

*Software Requirements Specification — V-SMASH-SW-FW*
*SW-Phase 1 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-FW_Product_Proposal_v1.0|SW-Phase 0 Product Proposal]]*
*Cross-reference: [[V-SMASH-M_B1_YCKT_v1.0|B1 YCKT]], [[V-SMASH-M_FMEA_v1.0|FMEA]], [[V-SMASH-M_B4_User_Manual_v1.0|B4 §5/6]], [[V-SMASH_Family_Orchestration_Design_v1.0|Orchestration]]*
