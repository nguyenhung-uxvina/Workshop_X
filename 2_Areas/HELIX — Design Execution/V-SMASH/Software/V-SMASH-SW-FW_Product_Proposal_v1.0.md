---
project: V-SMASH-SW-FW
type: software-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
sw_phase: 0 (Requirements Extraction)
safety_class: B (IEC 62443 analogy — firmware controls safety-critical display behavior)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
priority: CRITICAL — foundation layer, all other SW sub-projects depend on this
---

# V-SMASH-SW-FW — Embedded Firmware Platform

## 1. Purpose

Embedded firmware platform that runs on the NVIDIA Jetson Orin Nano (VM-2101) SoC. Provides the hardware abstraction layer, boot sequence, power management, thermal management, fault state machine, display driver, and LED control for all V-SMASH variants.

**Without this sub-project:** No formal firmware architecture. Current state = 13 critical gaps where firmware behavior is specified in requirements (VM-Y02, VM-N06, VM-H02, VM-M05, VM-E05, etc.) but no implementation spec, no module decomposition, no API contracts for SW-AI/SW-BAL/SW-COM to build against.

---

## 2. Scope Boundary

### In Scope

| Module | Functions | Source Requirements |
|--------|-----------|-------------------|
| **FW-BOOT** | Power-on sequence: SoC init → sensor init → AI model load → OLED init → ready state. ≤3s total (VM-H02) | VM-H02, VM-Q01 |
| **FW-PWR** | Battery SoC estimation, low-battery warning at ≤15% (VM-E05), power budgeting ≤2.3W avg / ≤4.0W peak (VM-E03/E07) | VM-E03, VM-E05, VM-E07 |
| **FW-THERM** | Tj monitoring, thermal throttle at 85/90/95°C, graceful shutdown at ≥100°C, display blank on thermal shutdown (VM-M05) | VM-M05, VM-N06(3) |
| **FW-FSM** | Fault state machine: 6 operational states (READY, DETECTED, POST-SHOT, LOW BATTERY, FAULT, OVERHEAT) + 3 degraded modes (SENSOR FAULT, AI FAULT, THERMAL) | VM-N04, VM-N06, B4 §5.2 |
| **FW-WDG** | AI inference watchdog: timeout >500ms → AI FAULT, suppress indicators (VM-N06) | VM-N06(2) |
| **FW-DISP** | OLED display driver: 60 Hz refresh (VM-S03), 8 fault/status messages, lead dot rendering, confidence color (3-tier), auto-brightness (VM-H04) | VM-S03, VM-S04, VM-H04, VM-H06 |
| **FW-LED** | RGB status LED control: 3+ states (OK/FAULT/LOW BATT), distinguishable from power-off (VM-N04) | VM-N04, VM-4108 |
| **FW-HAL** | Hardware Abstraction Layer: abstracts SoC-specific interfaces (GPIO, I2C, SPI, MIPI CSI-2, USB-C). Enables SoC portability (Jetson → Hailo-8 / RK3588 fallback) | BOM R2 risk, VM-5501 |
| **FW-SAFE** | Power-fail display blanking: OLED → blank ≤100ms on power loss, no residual dot, no stale indicator (VM-Y02) | VM-Y02 (SAFETY-CRITICAL) |

### Out of Scope (Handled by Other SW Sub-Projects)

| Module | Sub-Project |
|--------|-------------|
| AI detection & classification inference | V-SMASH-SW-AI |
| Ballistic computation, tracking, calibration | V-SMASH-SW-BAL |
| BLE stack, diagnostics, OTA update, data logging | V-SMASH-SW-COM |

---

## 3. Requirements (Extracted from V-SMASH-M Design Package)

### 3.1 Performance Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-FW-01 | Boot time (power-on to operational) | VM-H02 | ≤3.0 s (desired ≤2.0 s) | T: stopwatch, 10 trials |
| SWR-FW-02 | Display refresh rate | VM-S03 | ≥60 Hz | T: high-speed camera 240fps |
| SWR-FW-03 | Power-fail display blank time | VM-Y02 | ≤100 ms, no residual | T: battery pull, 10× |
| SWR-FW-04 | Average power consumption (FW overhead) | VM-E03 | Budget: ≤0.3W of 2.3W total | T: power measurement |
| SWR-FW-05 | Watchdog response time | VM-N06 | AI hang >500ms → FAULT in ≤100ms | T: fault injection |
| SWR-FW-06 | Thermal throttle response | VM-M05 | Tj ≥95°C → throttle active in ≤1s | T: thermal chamber |
| SWR-FW-07 | Fault indicator update latency | VM-N04 | State change → LED/OLED update ≤50ms | T: fault injection + camera |
| SWR-FW-08 | Display message rendering | B4 §5.2, §6.2 | 8 distinct messages: SENSOR FAULT, AI FAULT, THERMAL, COMPUTE FAULT, RANGE?, NO LINK, LOW BATT, (normal=none) | I: visual inspection per state |

### 3.2 Safety Requirements

| ID | Requirement | Source | Safety Class |
|----|-------------|--------|-------------|
| SWR-FW-S01 | No stale indicator in ANY fault/degraded state | VM-N06 | SAFETY-CRITICAL |
| SWR-FW-S02 | Power-fail → display blank, no residual dot | VM-Y02 | SAFETY-CRITICAL |
| SWR-FW-S03 | Thermal shutdown → stable display-off | VM-M05 | SAFETY-CRITICAL |
| SWR-FW-S04 | Fault state distinguishable from power-off | VM-N04 | SAFETY-RELATED |

### 3.3 Architecture Constraints

| ID | Constraint | Rationale |
|----|-----------|-----------|
| SWR-FW-A01 | C/C++ on Linux (JetPack SDK) | Jetson Orin Nano platform |
| SWR-FW-A02 | HAL must abstract SoC-specific APIs | BOM risk: Jetson EAR block → SoC swap |
| SWR-FW-A03 | API contracts for SW-AI, SW-BAL, SW-COM | Inter-module interfaces defined here |
| SWR-FW-A04 | Zero user-facing menus or settings | VM-H06: ≤1 control (power button), 0 menus |
| SWR-FW-A05 | All configuration via build-time or depot-flashed params | VM-N05: no field config |
| SWR-FW-A06 | RTOS or real-time Linux scheduling for inference pipeline | VM-K02: ≤33ms frame-to-frame |

---

## 4. Software Architecture (Conceptual)

```
┌────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                        │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │  SW-AI   │ │  SW-BAL  │ │  SW-COM  │ │ FW-FSM   │     │
│  │(external)│ │(external)│ │(external)│ │(internal)│     │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘     │
│       │             │             │             │           │
│  ─────┴─────────────┴─────────────┴─────────────┴────────  │
│                    FW-API LAYER                             │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │SENSOR│ │DISPLA│ │POWER │ │THERM │ │ LED  │ │WATCHD│  │
│  │ API  │ │Y API │ │ API  │ │ API  │ │ API  │ │OG API│  │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘  │
│     │        │        │        │        │        │        │
│  ───┴────────┴────────┴────────┴────────┴────────┴─────── │
│                    FW-HAL LAYER                            │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │
│  │ MIPI │ │ SPI  │ │ I2C  │ │ GPIO │ │ USB  │ │ PWM  │  │
│  │CSI-2 │ │(OLED)│ │(sens)│ │(LED) │ │ -C   │ │(LED) │  │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘  │
│     └────────┴────────┴────────┴────────┴────────┴─────── │
│                    HARDWARE (SoC + PCB)                     │
└────────────────────────────────────────────────────────────┘
```

### Key API Contracts (FW-API → External Sub-Projects)

| API | Consumer | Contract |
|-----|----------|----------|
| `sensor_capture()` → frame buffer | SW-AI | Returns 1920×1080 raw frame, ≤5ms latency |
| `display_render(overlay)` | SW-AI, SW-BAL | Accepts overlay struct (dot_x, dot_y, color, messages[]), renders at ≥60 Hz |
| `report_fault(type)` | SW-AI, SW-BAL, SW-COM | Triggers FSM state transition, updates LED + OLED |
| `get_thermal_state()` | SW-AI | Returns {normal, throttle_15hz, shutdown} |
| `get_power_state()` | SW-AI, SW-COM | Returns {ok, low_battery, critical} |
| `register_watchdog(module, timeout_ms)` | SW-AI, SW-BAL | Registers inference watchdog, FW monitors heartbeat |

---

## 5. Deliverables per SW-SDLC Phase

| SW Phase | Deliverable | Format |
|----------|-------------|--------|
| SW-0: Req Extraction | This document (SWR-FW-xx requirements) | Markdown |
| SW-1: SRS | Formal Software Requirements Specification | Markdown + traceability matrix |
| SW-2: SAD | Software Architecture Document + API specs | Markdown + UML/block diagrams |
| SW-3: Implementation | Source code (C/C++), unit tests, build scripts | Git repo |
| SW-4: Integration Test | HW-SW integration test results on target SoC | Test report |
| SW-5: Qualification | V&V report against SWR-FW-xx requirements | Test report + traceability |

---

## 6. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| Jetson Orin Nano hardware (VM-2101) | Procurement | PENDING — EAR review | Cannot start SW-3 without target HW |
| Main PCB schematic (SA-04) | V-SMASH-M B2 | PENDING | HAL pin mapping, I2C addresses |
| OLED module datasheet (VM-1300) | BOM | AVAILABLE | SPI protocol, init sequence |
| CMOS sensor datasheet (VM-1200) | BOM | AVAILABLE | MIPI CSI-2 lane config |
| Battery protection IC spec (VM-4105) | BOM | AVAILABLE | SoC estimation method |
| JetPack SDK version | NVIDIA | AVAILABLE (JetPack 6.x) | OS + CUDA + driver baseline |

**Critical path:** HAL cannot be finalized until main PCB schematic is available. SW-3 (implementation) requires physical SoC board.

---

## 7. Variant Configuration Map

| Variant | FW-BOOT | FW-PWR | FW-THERM | FW-FSM | FW-DISP | FW-HAL | Adaptation |
|---------|---------|--------|----------|--------|---------|--------|------------|
| V-M | Full | Full | Full | 6 states (no fire gate) | Lead dot + confidence | Jetson | **Baseline** |
| V-L | Full | Full | Full | Full (+ READY, ENGAGED) | Lead dot + confidence + fire indicator | Jetson | Add fire gate states |
| V-D | Reduced | Full | Full | 3 states (STANDBY→ALERT→CONCLUDED) | Alert only (no lead dot) | Jetson | Simplified FSM |
| V-X | Full | Full | Full | V-L minus export-controlled | V-L minus restricted | Jetson | Feature flag removal |
| V-T | Full | Full | Full | V-L + training data export mode | V-L + data overlay | Jetson | Add training UI |
| V-NV | Full | Full | Full | V-L + thermal sensor fusion | Dual-display (visible + thermal) | Jetson | Dual sensor HAL |
| V-P | Full | Full | Extended | V-L | Extended FOV display | Jetson | Larger display driver |
| V-R | Full | Vehicle power | Full | V-L + CAN bus interface | V-L + external display | Jetson | CAN HAL + vehicle power |

**Reuse factor:** 8/8 — core FW-HAL + FW-BOOT + FW-PWR + FW-THERM identical. Variant-specific = FSM states + display config.

---

## 8. Effort Estimate

| Phase | Duration | Personnel | Notes |
|-------|----------|-----------|-------|
| SW-0 + SW-1 | 2 weeks | 1 FW engineer | Requirements + SRS extraction from existing 33 artifacts |
| SW-2 (Architecture) | 3 weeks | 1 FW engineer | HAL design, API contracts, FSM diagram |
| SW-3 (Implementation) | 8 weeks | 1 FW engineer | Core modules. Parallel with HW PCB bring-up |
| SW-4 (Integration) | 3 weeks | 1 FW + 1 test | On-target testing with development board |
| SW-5 (Qualification) | 2 weeks | 1 FW + 1 QA | V&V report, safety review |
| **Total** | **~18 weeks** | | Overlaps with HW development. SW-2 can start before HW. |

**NRE cost:** Primarily labor. Development board (Jetson Orin Nano DevKit): ~$500.

---

## 9. Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Jetson EAR block → SoC change | Medium | HIGH — full HAL port | FW-HAL abstraction layer is primary mitigation |
| 3s boot time not achievable with full AI model load | Medium | MEDIUM — user experience | Lazy load: display "STARTING" immediately, AI model loads in background |
| Thermal throttle firmware bug (FMEA F15, S=8) | Low | HIGH — undetected overheat | HW thermal cutoff at 105°C as independent backup |
| 60 Hz OLED refresh not achievable on SPI bus | Low | LOW — 30 Hz acceptable | Evaluate parallel DMA transfer |

---

## 10. Acceptance Criteria (Gate to SW-Phase 1)

- [ ] All SWR-FW-xx requirements traceable to source (VM-xxx)
- [ ] API contract drafts reviewed by SW-AI, SW-BAL, SW-COM leads
- [ ] Safety-critical requirements (SWR-FW-S01→S04) flagged for independent V&V
- [ ] HAL module list confirmed against PCB schematic
- [ ] Variant configuration map reviewed by family orchestration

---

*Software sub-project of V-SMASH Product Family*
*Cross-reference: [[V-SMASH-M_B1_YCKT_v1.0|B1 YCKT]], [[V-SMASH-M_FMEA_v1.0|FMEA F04/F05/F15]], [[V-SMASH-M_B4_User_Manual_v1.0|B4 §5.2, §6.2]], [[V-SMASH-M_B3_Process_Plan_v1.0|B3 OP-240]], [[V-SMASH_Family_Orchestration_Design_v1.0|Orchestration §2 SW Core]]*
