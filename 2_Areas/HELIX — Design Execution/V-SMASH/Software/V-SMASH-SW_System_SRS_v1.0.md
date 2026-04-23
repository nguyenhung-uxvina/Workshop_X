---
project: V-SMASH-SW
type: system-software-requirements-specification
version: 1.1
created: 2026-03-03
updated: 2026-03-03
status: draft
change_log: "v1.1 — QC Gate FLAG resolutions: added §1.5 Operating Environment (F05), clarified SWR-SYS-P02 scope (F01), added governing standards to §5 (F03), ECE calibration cross-ref in S05 (F06), added SWR-SYS-P08/P09/P10 (F08/F09), named V&V authority in §9 (F11)"
safety_class: B (system-level — aggregates Class B modules; Class C (SW-AI) and Class A (SW-COM) governed by module SRSs)
scope: All four SW modules integrated: SW-FW + SW-AI + SW-BAL + SW-COM
child_srss:
  - V-SMASH-SW-FW_SRS_v1.0   (Safety Class B)
  - V-SMASH-SW-AI_SRS_v1.0   (Safety Class C)
  - V-SMASH-SW-BAL_SRS_v1.0  (Safety Class B)
  - V-SMASH-SW-COM_SRS_v1.0  (Safety Class A)
icd: V-SMASH-SW-ICD_v1.0
standards: [IEEE 830, MIL-STD-498 SRS DID, IEC 62443, TCVN 13726]
---

# V-SMASH-SW — System Software Requirements Specification

**System SW-Phase 1 | Version 1.1 | 2026-03-03**

---

## 1. Introduction

### 1.1 Purpose

This document is the **system-level SRS** for V-SMASH-SW — the complete software system running on V-SMASH-M. It sits above the four module-level SRSs and specifies:

- Cross-cutting requirements that span multiple modules
- System-level performance (end-to-end latency budget)
- System-level safety (multi-module fault propagation)
- Inter-module interface requirements
- System-level boot, shutdown, and lifecycle requirements
- Variant configuration system

Individual module SRSs (FW/AI/BAL/COM) govern module-internal requirements. Where a conflict exists, this System SRS governs interface behavior; module SADs govern internal design. If this SRS conflicts with the ICD, the **ICD governs** at the interface boundary.

### 1.2 Scope

V-SMASH-SW runs on two hardware processors:

| Processor | SW Modules | Role |
|-----------|-----------|------|
| NVIDIA Jetson Orin Nano 8GB (VM-2101), JetPack 6.x, Linux PREEMPT_RT | SW-FW, SW-AI, SW-BAL, COM-Jetson | Detection, ballistics, display, diagnostics, data logging |
| nRF52840 BLE co-processor (VM-4102), Zephyr RTOS | COM-BLE | BLE 5.0 GATT server, OTA update, pairing |

**Out of scope:** AI model training, hardware drivers beyond FW-HAL, IRONMESH server-side protocol, V-D variant (ballistic module excluded), V-R vehicle stabilization (deferred to BAL v2.0).

### 1.3 Definitions

| Term | Definition |
|------|-----------|
| Frame cycle | One complete iteration: capture → infer → compute ballistics → render display |
| Engagement | Period from first gated detection to loss-of-track or manual disengage |
| Pipeline budget | End-to-end latency from camera frame capture to display update: ≤150 ms |
| Tactical indicator | Any symbol related to targeting: lead dot, confidence color, EST, RANGE?, fire gate |
| Suppression | Hiding all tactical indicators; safe state for display in any fault condition |
| HITL | Human-in-the-loop: operator makes all engagement decisions; SW provides information only |

### 1.4 References

| ID | Document |
|----|----------|
| [ICD] | V-SMASH-SW-ICD_v1.0 — authoritative interface definitions |
| [FW-SRS] | V-SMASH-SW-FW_SRS_v1.0 |
| [AI-SRS] | V-SMASH-SW-AI_SRS_v1.0 |
| [BAL-SRS] | V-SMASH-SW-BAL_SRS_v1.0 |
| [COM-SRS] | V-SMASH-SW-COM_SRS_v1.0 |
| [B1] | V-SMASH-M_B1_YCKT_v1.0 — master requirements |
| [FMEA] | V-SMASH-M_FMEA_v1.0 |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0 |

### 1.5 Operating Environment

| Parameter | Requirement | Standard |
|-----------|-------------|---------|
| Operating temperature | −10°C to +55°C | MIL-STD-810H Method 501.7 / 502.7 |
| Storage temperature | −20°C to +70°C | MIL-STD-810H |
| Humidity | ≤ 95% RH, non-condensing | MIL-STD-810H Method 507.6 |
| Ingress protection | IP66 (dust-tight + rain) | IEC 60529 |
| Vibration | MIL-STD-810H Method 514.8 Category 4 (infantry carry + rifle recoil) | MIL-STD-810H |
| Shock | MIL-STD-810H Method 516.8 Procedure I — functional shock (rifle discharge cycle) | MIL-STD-810H |
| Altitude | 0 – 3,000 m ASL | MIL-STD-810H Method 500.6 |
| EMI/EMC | MIL-STD-461G CE/CS/RE/RS (conducted + radiated emissions and susceptibility) | MIL-STD-461G |

> **SW impact:** SW-AI must not exceed Jetson Orin Nano Tj ≤ 85°C sustained at +55°C ambient (thermal throttle activates at 85°C). Operating envelope qualification is system-level; SW module tests run at +25°C ±5°C. Thermal throttle path (SWR-SYS-F13/F14) verified at module test by injecting THROTTLE_15/10/5/SHUTDOWN states via diagnostic interface.

---

## 2. System Context

### 2.1 External Interfaces

```
┌─────────────────────────────────────────────────────────────┐
│               EXTERNAL ENVIRONMENT                          │
│  CMOS Sensor ──→ V-SMASH-SW ──→ OLED Display               │
│  Power System ──→              ──→ RGB LED                  │
│  USB-C Depot  ──→              ──→ BLE (IRONMESH / Depot)   │
│                                ──→ eMMC (log storage)       │
└─────────────────────────────────────────────────────────────┘
```

| External System | Direction | Interface | Contract |
|----------------|-----------|-----------|----------|
| CMOS sensor VM-1200 | IN | MIPI CSI-2 2-lane, 1920×1080@30fps | FW-HAL → ICD-01 |
| OLED display VM-1300 | OUT | SPI DMA, 40 MHz | FW-HAL → FW-DISP |
| Battery protection IC VM-4105 | IN | I2C 400 kHz, addr 0x55 | FW-HAL → FW-PWR |
| Power-fail GPIO | IN | HW interrupt, falling edge | FW-HAL → FW-SAFE (ISR) |
| IRONMESH base station | OUT (primary) | BLE 5.0 GATT, ≤30 m range | ICD-08 → nRF52840 |
| Depot diagnostic tool | BIDIRECTIONAL | USB-C CDC ACM | COM-DIAG |
| eMMC VM-2103 | BIDIRECTIONAL | Filesystem, mmap | COM-DATA, COM-LOG, BAL-CALIB, AI model |

### 2.2 System Operating Modes

The FSM in FW-FSM defines system modes. All SW modules must honor mode transitions:

| Mode | FSM State(s) | Tactical Indicators | COM | Diagnostics |
|------|-------------|---------------------|-----|-------------|
| Initializing | INIT | None (STARTING splash only) | Initializing | Disabled |
| Ready | READY | None (waiting for target) | Active | Disabled |
| Tracking | DETECTED, POST_SHOT | Active (lead dot, confidence) | Active | Disabled |
| Degraded | SENSOR_FAULT, AI_FAULT, LOW_BATTERY | Suppressed + fault message | Active | Disabled |
| Fault | FAULT | Suppressed + fault message | Active | Disabled |
| Overheat | OVERHEAT | Suppressed + "THERMAL" | Active | Disabled |
| Shutdown | SHUTDOWN | Blank | Ceasing | Disabled |

---

## 3. Functional Requirements — Cross-Cutting

### 3.1 System Initialization

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-SYS-F01 | The power-fail interrupt handler (FW-SAFE ISR) shall be registered as the **first** software action after power-on, before any other module initialization. | FMEA F15, SWR-FW-S02 | MUST (SAFETY) | I: boot log confirms ISR registered first |
| SWR-SYS-F02 | Module initialization shall follow this dependency order: (1) FW-HAL buses, (2) FW-DISP early init + STARTING splash, (3) MIPI camera + validation frame, (4) FW-FSM in INIT, (5) AI/BAL/COM init in parallel. No module shall enter operational state before FW-FSM reaches READY. | Boot sequence stability | MUST | T: instrument boot log with timestamps for each step |
| SWR-SYS-F03 | SW-AI, SW-BAL, and SW-COM shall each call `fw_register_watchdog()` during their init phase, before `fw_get_fsm_state()` is first polled. Watchdog registration is required before the module produces any output. | SWR-FW-F16, SWR-BAL-F60, SWR-COM-F60 | MUST | T: verify watchdog registered before first heartbeat at each module |
| SWR-SYS-F04 | System shall display "STARTING" splash on OLED within ≤500 ms of power-on, regardless of AI model load time. AI model load (≤2.5 s) must not block display initialization. | VM-H02, SWR-FW-F02 | MUST | T: oscilloscope power-on → first OLED pixel, ≤500 ms, 10 trials |
| SWR-SYS-F05 | FW-FSM shall not leave INIT state until ALL of the following are true: (a) MIPI camera validated, (b) all watchdog handles registered, (c) `hal_self_test()` passes critical buses (MIPI, SPI, I2C-0). AI model warmup failure alone shall NOT block INIT → READY (lazy AI init acceptable per SWR-FW-F02). | Safe startup gate | MUST | T: simulate sensor fail at boot, verify FSM stays in INIT / enters SENSOR_FAULT |

### 3.2 Frame Cycle Coordination

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-SYS-F10 | The frame cycle shall follow a fixed sequential dependency: T1 (capture) → T-AI (infer + BAL) → T2 (render). No tactical indicators shall be rendered before the corresponding frame's AI + BAL output is available. | ICD-01 sequencing | MUST | T: inject known-output frame, verify correct indicator rendered |
| SWR-SYS-F11 | SW-BAL (`bal_compute()`) shall execute synchronously within T-AI, inline with the AI pipeline, not as an independent thread. BAL output shall be available to the overlay coordinator within the same frame cycle that produced the AI detection. | [ICD] COORD-1, BAL-1 | MUST | I: architecture review — no BAL thread; T: trace BAL result in same frame as AI output |
| SWR-SYS-F12 | When `ai_frame_output_t.count == 0` (no gated detection), the overlay coordinator shall: (a) pass blank overlay to FW-DISP (dot off), (b) NOT call `bal_compute()`. BAL shall not receive empty-frame calls. | SWR-BAL-F72 | MUST | T: inject zero-count frames, verify no BAL call and dot off |
| SWR-SYS-F13 | The system shall maintain a minimum tactical frame rate of ≥30 Hz under nominal thermal conditions, degrading gracefully under thermal throttle: ≥15 Hz at THROTTLE_15, ≥10 Hz at THROTTLE_10, ≥5 Hz at THROTTLE_5. | VM-K02, VM-M05 | MUST | T: inject thermal states, measure display update interval |
| SWR-SYS-F14 | SW-AI shall query `fw_get_thermal_state()` at the start of each pipeline cycle and adjust its target inference period accordingly before committing to TensorRT inference. | SWR-AI thermal handling, SWR-FW-F11 | MUST | T: inject THROTTLE_10, verify AI slows to ≤10 Hz within 2 cycles |

### 3.3 Display Safety Suppression

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-SYS-F20 | FW-T2 (display thread) shall independently verify `fw_get_fsm_state()` at the top of every render loop and suppress all tactical indicators if FSM is in any non-READY/DETECTED/POST_SHOT state. This is independent of what `overlay_t` contains — defense-in-depth. | SWR-FW-S01, FMEA F04 | MUST (SAFETY) | T: inject FSM fault mid-render-loop; verify indicator suppression regardless of overlay_t content |
| SWR-SYS-F21 | FW-SAFE ISR shall suppress display (set safe_blank atomic) unconditionally on power-fail GPIO edge, without waiting for FSM state machine to process. T2 shall check safe_blank at render loop top before FSM check. | SWR-FW-S02 | MUST (SAFETY) | D: oscilloscope GPIO edge → OLED blank ≤100 ms |
| SWR-SYS-F22 | Tactical indicators include: lead dot, confidence color overlay, fire gate symbol, angular velocity vector, EST message. Non-tactical indicators (fault messages, battery warn, thermal warn, RANGE?, "NO LEAD") may be displayed in degraded states. | Display policy | MUST | I: overlay_t field classification reviewed |

### 3.4 Watchdog System

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-SYS-F30 | FW-WDG shall maintain watchdog entries for all three consumer modules: SW-AI (handle 0), SW-BAL (handle 1), SW-COM (handle 2). Each entry: 500 ms timeout. | SWR-FW-F16, SWR-BAL-F60, SWR-COM-F60 | MUST | T: halt each module in turn, verify FW-WDG fires appropriate fault within 600 ms |
| SWR-SYS-F31 | When FW-WDG fires an AI timeout, it shall call `fw_report_fault(FAULT_AI)` — not `FAULT_BAL` or `FAULT_COM`. The fault type shall correctly identify the failing module for operator and telemetry. | SWR-FW-F21 | MUST | T: halt AI heartbeat specifically, verify FSM receives FAULT_AI |
| SWR-SYS-F32 | SW-BAL shall call `fw_watchdog_heartbeat()` from within T-AI **after** `bal_compute()` returns successfully. If `bal_compute()` returns an error code, the heartbeat shall still be called (BAL reports its own fault via `fw_report_fault()` separately — watchdog timeout is independent). | SWR-BAL-F60 | MUST | T: verify heartbeat timing relative to bal_compute call |

### 3.5 System Shutdown

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-SYS-F40 | On FSM entering SHUTDOWN (Tj ≥ 100°C OR battery SoC ≤ 5% OR user power-off): (a) all tactical indicators blanked immediately, (b) COM-DATA flush engagement buffer to eMMC within ≤500 ms, (c) FW-DISP blank display, (d) FW-PWR initiate safe power-off. | SWR-FW-F43, SWR-COM-F53 | MUST | T: trigger each shutdown condition, verify sequence and log integrity |
| SWR-SYS-F41 | In SHUTDOWN state, T-AI and T-COM shall cease producing output within ≤2 frame cycles of FSM entering SHUTDOWN. This prevents stale indicators from re-appearing before power is cut. | VM-Y02 | MUST | T: trigger shutdown mid-engagement, verify no new tactical output after SHUTDOWN entry |

---

## 4. Performance Requirements — System Level

| ID | Requirement | Source | Value | Allocation |
|----|-------------|--------|-------|-----------|
| SWR-SYS-P01 | End-to-end pipeline latency: camera frame → OLED pixel update | VM-S02 | **≤ 150 ms** (95th percentile) | Budget: 6 ms capture + 80 ms AI inference + 20 ms BAL WCET + 16.7 ms render = 122.7 ms. Margin: 27.3 ms |
| SWR-SYS-P02 | **Tactical data rate** — rate at which T-AI produces new `ai_frame_output_t` → `overlay_t` updates, nominal thermal (NORMAL). *Scope: T-AI output rate only.* Display thread T2 refreshes at 60 Hz independently and may re-render the same overlay on frames where T-AI has no new output. This requirement governs new tactical data production, not display refresh rate. | VM-K02 | **≥ 30 Hz** (33 ms/inference cycle) | T: instrument T-AI output timestamps; measure interval over ≥100 consecutive cycles under NORMAL thermal; independent of T2 60 Hz display refresh |
| SWR-SYS-P03 | Frame rate — thermal THROTTLE_15 | VM-M05 | **≥ 15 Hz** | AI reduces inference period to 66 ms |
| SWR-SYS-P04 | System boot to OPERATIONAL (READY state, all watchdogs registered) | VM-H02 | **≤ 3.0 s** | AI model load is longest step; lazy init acceptable |
| SWR-SYS-P05 | Total SW CPU overhead (FW + AI CPU-portion + BAL + COM combined) | VM-E03 | **≤ 80% across 6 Jetson cores** | Verified by `perf stat` during continuous operation |
| SWR-SYS-P06 | Total SW memory footprint (CPU RAM: FW + AI + BAL + COM) | VM-E03 | **≤ 100 MB CPU RAM** | Dominated by frame double-buffer 12.4 MB; GPU memory separate |
| SWR-SYS-P07 | Post-shot reacquisition: engagement interruption → next valid display output | VM-S07 | **≤ 250 ms** | AI: ≤3 frames (~100 ms) + BAL Kalman reinit ≤5 frames + render cycle |
| SWR-SYS-P08 | **Detection probability (Pd):** probability of producing a gated detection on a genuine airborne target within operational engagement range [30–300 m] | [AI-SRS] SWR-AI-P04 | **≥ 90%** per target class | T: structured target presentation test, ≥100 presentations per class (ROTOR/FIXED_WING/BIRD), per qualification test plan |
| SWR-SYS-P09 | **False positive rate (FPR):** rate of false gated detections per minute in background-only scenes (no real aerial target present) | [AI-SRS] SWR-AI-P05 | **≤ 2 / min** | T: background-only video sequence ≥10 min; count false gated detections (confidence ≥ 0.70 threshold); controlled sky/ground scene |
| SWR-SYS-P10 | **SW power overhead:** combined Jetson Orin Nano incremental power consumption of V-SMASH-SW (delta: idle vs nominal operational loop with AI inference running) | VM-E04 (BOM power budget cross-reference) | **≤ 1.5 W incremental** | T: `tegrastats` power sampling at 100 ms intervals; compare Jetson idle (no threads active) vs full AI pipeline (T1+T-AI+T2+T3+T-COM running); average over 60 s |

---

## 5. Safety Requirements — Cross-Cutting

> **Governing standards:** IEC 61508-3:2010 (software for safety-related systems), IEC 62443-4-2 (device security), MIL-STD-882E (system safety), TCVN 13726:2023 (AI system safety — specific clause cross-references TBD in V&V plan). Requirements marked SAFETY-CRITICAL require independent V&V against cited standards before production release (see §9).

| ID | Requirement | Source | Safety Class | Verification |
|----|-------------|--------|-------------|-------------|
| SWR-SYS-S01 | **Independence of combat function from communications:** V-SMASH system shall perform full aiming, detection, tracking, and display functions regardless of BLE connection state, nRF52840 health, or COM-COM fault state. FAULT_COM in FSM shall trigger "NO LINK" message but NOT suppress tactical indicators. | VM-S05, SWR-COM-S01 | SAFETY-RELATED | T: power-off nRF52840, run full functional engagement test — all tactical functions nominal |
| SWR-SYS-S02 | **No combat function independent of SW-FW state:** All modules (SW-AI, SW-BAL) shall query `fw_get_fsm_state()` before producing tactical output. No module may produce tactical indicators in INIT, FAULT, SENSOR_FAULT, AI_FAULT, OVERHEAT, SHUTDOWN, or LOW_BATTERY states. | [FW-SRS] SWR-FW-A07 | SAFETY-CRITICAL | T: set FSM to each prohibited state; verify zero tactical output from AI-COORD and BAL-COORD |
| SWR-SYS-S03 | **No IFF (Identify Friend/Foe) in output:** No data structure at any interface (overlay_t, bal_output_t, ai_output_t, GATT characteristics, engagement_log_record_t) shall contain any field relating to hostile/friendly classification, ROE, or engagement authorization. Output classes are: ROTOR / FIXED_WING / BIRD / UNKNOWN only. | [ICD] §5, [AI-SRS] SWR-AI-S04 | SAFETY-CRITICAL | I: code review of all struct definitions in v_smash_sw_types.h — no ROE/IFF fields |
| SWR-SYS-S04 | **Stale indicator prevention:** A display indicator is stale if its source data is older than 2 frame cycles (>66 ms at 30 Hz). T2 shall clear all tactical indicators on any frame where the pipeline has not produced a valid ai_frame_output_t within 66 ms. | SWR-FW-S01, SWR-BAL-S04 | SAFETY-RELATED | T: halt AI pipeline; verify all tactical indicators cleared within ≤66 ms |
| SWR-SYS-S05 | **No runtime modification of safety thresholds:** The following values shall be build-time constants (`#define` or `constexpr`) with no runtime write path: AI_GATE_THRESHOLD (0.70), MAX_LEAD_MRAD (50.0), JUMP_LIMIT_MRAD (15.0), RANGE_MIN_M (30.0), RANGE_MAX_M (300.0), watchdog timeout (500 ms). No BLE, USB-C, or IPC message shall modify these values. *Note: AI_GATE_THRESHOLD=0.70 is derived from ECE calibration (ECE ≤0.05 criterion) — cross-reference [AI-SRS] §8 for calibration evidence. Any threshold change requires new model release + ECE re-validation + QC Gate approval before deployment.* | [AI-SRS] SWR-AI-S03, [BAL-SRS] SWR-BAL-S05; IEC 61508-3 §7.4.4 (safety data); TCVN 13726 | SAFETY-CRITICAL | I: code review — search for all write paths to threshold constants; MISRA: no pointer-to-const violations |
| SWR-SYS-S06 | **Unsigned firmware shall not execute:** Firmware signature verification shall occur in the ROM bootloader before any user-space code runs. SW-COM firmware update path is a secondary enforcement layer, not the primary. | [COM-SRS] SWR-COM-S03 | SAFETY-RELATED | T: attempt to boot unsigned image; D: ROM bootloader audit |

---

## 6. Interface Requirements (Cross-Module)

All interface details are normative in [ICD]. This section allocates interface ownership:

| ICD ID | Interface | Producer | Consumer | Mechanism |
|--------|-----------|---------|---------|-----------|
| ICD-01 | Frame buffer (1920×1080) | FW-T1 | T-AI | Double-buffered shared memory, atomic swap, zero-copy |
| ICD-02 | FSM/thermal/power state bus | FW-T3 (writer) | All modules (readers) | Atomic variables (`_Atomic` / `std::atomic`), acquire-release |
| ICD-03 | FW-API functions | SW-FW | SW-AI, SW-BAL, SW-COM | Direct C function calls (same address space, thread-safe) |
| ICD-04 | AI detection output (`ai_output_t` per detection, `ai_frame_output_t` per frame) | T-AI | BAL inline (synchronous) | Stack-allocated, direct function argument |
| ICD-05 | Ballistic solution (`bal_output_t`) | BAL inline call | AI-COORD | Return value / output pointer |
| ICD-06 | Display overlay (`overlay_t`) | AI-COORD | FW-T2 | Lock-free SPSC queue, depth 2, latest-wins |
| ICD-07 | Engagement + telemetry + events | AI-COORD / all modules | T-COM | Lock-free SPSC queues (engagement: depth 16, events: depth 32) |
| ICD-08 | SPI wire protocol | COM-Jetson (master) | nRF52840 (slave) | SPI 8 MHz, CRC-16/CCITT per frame, IRQ-driven |

**Shared type definitions:** All structs above defined in `v_smash_sw_types.h`. `_Static_assert` enforces `sizeof` at compile time.

---

## 7. Architecture Constraints (System-Level)

| ID | Constraint | Rationale |
|----|-----------|-----------|
| SWR-SYS-A01 | All Jetson threads use SCHED_FIFO scheduling (PREEMPT_RT kernel). No SCHED_OTHER thread may preempt SCHED_FIFO threads. T5 (USB diagnostics) runs SCHED_OTHER and must not acquire any mutex held by T1–T-AI. | Hard timing requirements for sensor + display + fault detection |
| SWR-SYS-A02 | No dynamic memory allocation (malloc/new) shall occur after system initialization completes (FSM enters READY). All working buffers for T-AI, T2, T3, and BAL are pre-allocated at init time. | Deterministic latency; prevents heap fragmentation causing watchdog timeout |
| SWR-SYS-A03 | FW-HAL is the sole module with SoC-specific code. Replacing Jetson Orin Nano with Hailo-8 or RK3588 requires changes to HAL platform directory only (`jetson_orin_nano/` → `hailo8/` or `rk3588/`). All modules above FW-HAL compile unchanged. | [FW-SRS] SWR-FW-A02 — BOM risk: Jetson EAR block |
| SWR-SYS-A04 | Single codebase for all 8 variants. Variant selection via build-time `#define VARIANT_xxx` only. No runtime variant switching. | Reduces test matrix complexity; prevents field configuration errors |
| SWR-SYS-A05 | `v_smash_sw_types.h` is the canonical source for all cross-module types. No module may define its own version of a type already in this header. All `sizeof` assertions via `_Static_assert` in this header. | Interface stability; prevents struct layout divergence between modules |

---

## 8. Variant Configuration Matrix (System View)

| Module | V-M | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|-----|-----|-----|-----|-----|------|-----|-----|
| SW-FW | Baseline | +READY/ENGAGED FSM states | Reduced boot (no AI preload) | V-L minus restricted states | V-L + TRAINING_EXPORT | +thermal sensor (FLIR I2C) | +extended thermal | +CAN HAL |
| SW-AI | Baseline | = | 4-class only, no lead | = | +training data export | +thermal channel fusion | = | = |
| SW-BAL | 7.62×39mm LUT | = | **EXCLUDED** (#error) | Custom LUT per contract | +full state logging | = | 12.7×108mm LUT | **v2.0 required** (vehicle stabilization) |
| SW-COM | Standard GATT | = | Detection alerts only | +AES-256-GCM app-layer | +training metadata characteristic | = | = | +CAN diagnostic bridge |

---

## 9. Acceptance Criteria (Gate to System SAD)

- [ ] All 4 module SRSs accepted (QC Gate PASS or FLAG-with-plan)
- [ ] ICD published (v_smash_sw_types.h header file created, all `_Static_assert` sizes agreed)
- [ ] SAFETY-CRITICAL requirements SWR-SYS-S02, SWR-SYS-S03, SWR-SYS-S05 reviewed by **independent V&V**: (a) **WX-QE** (Workshop X Quality Engineering — independent from SW development team) for internal design review before system integration; (b) **MoD-designated testing authority** [TBD — confirm per procurement contract] for production release approval
- [ ] Thread priority table agreed (T1 prio 90 > T2 prio 85 > T3 prio 80 > T-AI prio 75 > T-COM)
- [ ] End-to-end latency budget (150 ms) confirmed by timing model analysis
- [ ] V-BAL = V-D `#error` in `bal_config.h` confirms no accidental BAL inclusion
- [ ] QC Gate run on this document: Defense AI QC Gate, all checks PASS or FLAG-with-plan

---

*V-SMASH-SW System SRS — v1.1 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
*Cross-reference: [ICD] V-SMASH-SW-ICD_v1.0 governs all interface definitions*
