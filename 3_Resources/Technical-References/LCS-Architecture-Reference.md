---
created: 2026-04-19
updated: 2026-04-19
type: technical-reference
version: v1.0
source: "Strategy Doc 2 Parts VIII-IX — LCS Architecture + Actuators HAL"
status: reference-only
relevance: "VN-XUONG-UUV (LARS control), VN-USV-SS-001, future MSM variants"
note: "Recommendation document, NOT specification. Actual architecture decisions by future Software Architect."
---

# LCS (Launch Control System) Architecture — Reference

> **Status:** Aspirational reference from vision documents. WX does NOT currently have LCS capability.
> **Use:** Reference when planning control system architecture for VN-XUONG-UUV LARS, future USV, or MSM platforms.
> **Decision authority:** Future Software Architect hire will review and adapt.

---

## 1. ARCHITECTURE PHILOSOPHY

1. **Modularity first** — support multiple LARS + platform types
2. **Safety non-negotiable** — independent safety path
3. **Progression-ready** — L1 architecture supports L4 evolution
4. **Interoperable standards** — no proprietary lock-in
5. **Safety-critical rigor** — IEC 61508, classification societies

---

## 2. PROPOSED TECHNOLOGY STACK

### 2.1 Dual-RTOS Architecture

| Component | Technology | Role |
|---|---|---|
| **Main Controller** | PREEMPT_RT Linux (Ubuntu 24.04 LTS) + ROS 2 Jazzy | Control + application logic |
| **Safety Controller** | Siemens S7-1500F (SIL 3 certified) | Independent safety monitoring |
| **Motor Drivers** | FreeRTOS microcontrollers | Real-time motor control |
| **Middleware** | Cyclone DDS (Eclipse, no license) | Inter-node communication |

### 2.2 Languages
- **C++:** Control + HAL (performance-critical)
- **Python:** Tooling + UI backend (rapid development)
- **Qt/QML:** Operator UI

### 2.3 Layered Architecture
```
Qt/QML UI (Operator Station)
↓
ROS 2 Nodes (Operations + Applications)
↓
ROS 2 Middleware (Cyclone DDS)
↓
Custom C++ HAL
↓
Linux Kernel (PREEMPT_RT)
↓
Hardware

Parallel Safety Path:
Safety PLC Program ↔ S7-1500F RTOS ↔ Safety PLC Hardware

Inter-path: PROFIsafe over PROFINET
```

### 2.4 Network Architecture
- **EtherCAT:** Motor drives real-time (deterministic, nanosecond sync)
- **PROFINET/PROFIsafe:** Safety PLC communication
- **Ethernet:** Cameras, UUV comms, general
- **NMEA 2000:** Vessel navigation integration

**Safety network physically separated from general network.**

---

## 3. CAPABILITY PROGRESSION

| Level | Name | Capability | Target | Investment |
|---|---|---|---|---|
| **L1** | "Ranger" | Assisted manual ops | 2027 | $1.95M |
| **L2** | "Guardian" | Guided manual | 2028-2029 | $1.5-2M |
| **L3** | "Commander" | Supervised autonomy + motion compensation | 2030-2031 | $2.5-3.5M |
| **L4** | "Autonomous" | Full autonomous L&R | 2031-2033 | $4-5M |

**Total LCS investment (vision):** $10-11M over 7 years.

**Grounded assessment:** WX likely needs L1-L2 scope first ($3-4M). L3-L4 contingent on MSM/USV program success and team scaling.

---

## 4. ACTUATORS HAL DESIGN

### 4.1 Core Interfaces

**IActuator (base):**
- Lifecycle: initialize, enable, disable, shutdown
- State: get_state, get_health, get_diagnostics
- Safety: emergency_stop, is_safe_to_operate
- Events: on_state_change, on_fault, on_warning

**IMotionActuator (extends IActuator):**
- command_position, command_velocity, command_torque
- get_position, get_load
- set_limits, calibrate

**Specialized:** IBinaryActuator, IRotaryActuator, IHydraulicActuator

### 4.2 Key Algorithms

| Algorithm | Purpose | Notes |
|---|---|---|
| **Command Validation** (5-stage) | Syntactic → safety → limits → trajectory → resources | Every command validated before execution |
| **S-Curve Trajectory** (7-segment) | Jerk-limited smooth motion | Pre-computed + online re-planning |
| **Multi-Actuator Coordination** | Parallel, master-slave, synchronized, sequential | Per mission profile |
| **Fault Detection** (4-layer) | Self-reporting → sensor comparison → temporal → cross-check | State machine: NORMAL→WARNING→FAULT→E-STOP |
| **Real-time Control Loop** | 1-5ms cycle, read→process→write→deadline | No malloc in real-time path, lock-free comms |

### 4.3 EtherCAT Integration
- **Why:** Deterministic timing, high bandwidth, daisy-chain topology
- **Master:** SOEM (open source C library) recommended
- **Pattern:** 1ms cycle PDO, SDO for parameters at startup

---

## 5. EFFORT ESTIMATE — L1 Actuators HAL

| Activity | Engineer-weeks |
|---|---|
| Interface design + review | 2 |
| Base IActuator implementation | 2 |
| IMotionActuator + trajectory | 4 |
| Winch-specific implementation | 3 |
| Hydraulic cylinder implementation | 2 |
| Brake/latch implementations | 2 |
| EtherCAT integration | 4 |
| Safety PLC integration | 3 |
| Fault detection + handling | 3 |
| Simulation models | 3 |
| Unit + integration tests | 5 |
| HIL test infrastructure | 3 |
| Documentation | 2 |
| **Total** | **~38 engineer-weeks** |

**With 2-3 engineers:** 6-8 months elapsed time.

---

## 6. TESTING STRATEGY

| Level | Frequency | Scope | Duration |
|---|---|---|---|
| Unit tests | Per commit | Mock hardware | <30 sec |
| Integration tests | Nightly | Simulated hardware | 5-15 min |
| HIL tests | Weekly | Real hardware | Hours |
| Field tests | Sprint 4+ | Real sea conditions | Days |

---

## 7. WX CURRENT RELEVANCE

| Product | LCS Relevance | Scope Needed |
|---|---|---|
| **VN-XUONG-UUV** | LARS control system | L1 subset — winch + ramp control only |
| **VN-USV-SS-001** | Autonomous control | L2-L3 — deferred to 2029+ |
| **Future MSM variants** | Full LCS | L1-L4 progression |
| **TMS integration** | Operator interface concepts | Qt/QML UI patterns |

**Near-term action:** VN-XUONG-UUV LARS control can use simplified version of HAL design without full ROS 2 stack. Extract IActuator + IMotionActuator patterns for winch/ramp control.

---

*Reference document. Architecture decisions to be made by qualified Software Architect when hired. Do not treat as specification.*
