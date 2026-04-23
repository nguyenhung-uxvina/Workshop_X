# VN-AICC-001: PHASE 2, STEP 1 — FUNCTION STRUCTURE
## Conceptual Design: Establishing Function Structure (P&B §6.3)
### Version 1.0 | 13/02/2026

---

**Document ID:** VN-AICC-001-P2-S1-v1.0
**Phase:** 2 — Conceptual Design
**Step:** 1 of 4 (Function Structure → Morphological Matrix → Concept Variants → VDI 2225 Evaluation)
**Input:** Phase 1 Final Document (VN-AICC-001-P1-FINAL-v1.0)
**Method:** P&B Chapter 6.3 "Establishing Function Structures"

---

## 1. METHODOLOGY NOTES

### 1.1 P&B Function Structure Rules Applied

Per P&B §6.3.2 and the 6 guidelines for establishing function structures:

1. **Start rough, refine step-by-step** — Begin with 3-5 main subfunctions, then decompose
2. **Focus on main flow first** — For AICC, the main flow is **SIGNALS** (agent data → human awareness → human decision → agent commands). Energy and material are auxiliary.
3. **Use generally valid subfunctions** — Channel, convert, store, connect, change signals (P&B §6.3, Figure 2.7)
4. **Microelectronics signal flow pattern** — Per P&B §6.3 point 6: detect (sensors) → process (controllers) → indicate (displays) → activate (actuators)
5. **Function = verb + noun** — Solution-neutral formulations
6. **Iterate** — First pass → identify gaps → complete with auxiliary flows

### 1.2 AICC System Classification

AICC is primarily a **signal processing system** with human-in-the-loop:

| Flow Type | Role in AICC | Importance |
|-----------|-------------|------------|
| **Signal** | MAIN flow — AI agent data in, human decisions out | Primary (design-determining) |
| **Energy** | AUXILIARY — electrical power distribution | Secondary |
| **Material** | MINIMAL — no material transformation (hardware components only) | Tertiary (embodiment only) |

This classification follows P&B's guidance that for mechatronic/electronic systems, signal flow typically determines the design.

---

## 2. OVERALL FUNCTION (BLACK BOX)

### 2.1 Overall Function Statement

From Phase 1 Essential Problem:

> **"Cung cấp dedicated situational awareness và decision authority cho người dùng đối với các tác nhân AI hoạt động bán tự chủ"**

### 2.2 Black Box Representation

```
                    SYSTEM BOUNDARY
    ┌──────────────────────────────────────────────────┐
    │                                                  │
    │              AICC OVERALL FUNCTION                │
    │                                                  │
    │   "Provide dedicated human decision authority     │
    │    over semi-autonomous AI agents"                │
    │                                                  │
    │                                                  │
════╪══►  INPUTS                        OUTPUTS  ══════╪══►
    │                                                  │
    │   SIGNAL IN:                   SIGNAL OUT:        │
    │   ─── Agent status data ──►    ─── Decision      │
    │   ─── Alert notifications ►       commands ─────►│
    │   ─── Sensor feeds ──────►    ─── Config         │
    │   ─── System health ─────►       updates ───────►│
    │   ─── Network messages ──►    ─── Audit log ────►│
    │                                                  │
    │   ENERGY IN:                   ENERGY OUT:        │
    │   ═══ Electrical power ══►    ═══ Heat ════════►│
    │                               ═══ Light ═══════►│
    │                               ═══ Sound ═══════►│
    │                                                  │
    │   HUMAN IN:                    HUMAN OUT:         │
    │   ··· Button press ·······►   ··· Visual info ··►│
    │   ··· Mode selection ·····►   ··· Audio alert ···►│
    │   ··· Emergency stop ·····►   ··· Haptic         │
    │                                  feedback ······►│
    │                                                  │
    └──────────────────────────────────────────────────┘

    Legend:  ═══ Energy flow    ─── Signal flow    ··· Human interaction
```

### 2.3 Input/Output Specification

| Flow | Direction | Quantity | Source/Destination |
|------|-----------|----------|-------------------|
| Agent status data | IN (Signal) | ≥ 4 agents, ≤ 500ms latency | IRONMESH network / CORTEX CDM |
| Alert notifications | IN (Signal) | Priority-classified (critical/warning/info) | AI engines |
| Sensor feeds | IN (Signal) | Camera, LOMAH, radar (processed summaries) | IRONMESH sensors |
| System health | IN (Signal) | Self-diagnostic data | Internal monitoring |
| Network messages | IN (Signal) | Mesh network traffic | LoRa/WiFi/ETH |
| Decision commands | OUT (Signal) | Approve/reject/modify agent actions | To AI agents |
| Configuration updates | OUT (Signal) | Agent parameter changes | To CORTEX/IRONMESH |
| Audit log | OUT (Signal) | Timestamped human decisions | To storage/network |
| Electrical power | IN (Energy) | 5-12V DC, ≤ 15W | USB-C / DC jack |
| Heat | OUT (Energy) | ≤ 5W dissipation | To environment |
| Light | OUT (Energy) | Display backlight + LED indicators | To human operator |
| Sound | OUT (Energy) | Alert audio, ≤ 85dB | To human operator |
| Button press | IN (Human) | ≥ 6 programmable inputs | Human operator |
| Visual information | OUT (Human) | Dashboard + status displays | To human operator |
| Haptic feedback | OUT (Human) | Button click + optional vibration | To human operator |

---

## 3. FUNCTION STRUCTURE — LEVEL 1 (MAIN SUBFUNCTIONS)

### 3.1 Decomposition Strategy

Following P&B §6.3.2 guidance: "First derive a rough function structure with a few subfunctions from what functional relationships you can identify in the requirements list."

AICC's overall function decomposes into **5 main subfunctions** that follow the signal processing chain:

```
MAIN SIGNAL FLOW (Left to Right):

  Agent Data ──►┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐──► Commands
  Network Msgs ►│  F1:   │─►│  F2:   │─►│  F3:   │─►│  F4:   │──► Config
  Alerts ──────►│RECEIVE │  │PROCESS │  │PRESENT │  │CAPTURE │──► Audit Log
                │& FILTER│  │& ASSESS│  │TO HUMAN│  │HUMAN   │
                │SIGNALS │  │PRIORITY│  │        │  │DECISION│
                └────┬───┘  └────┬───┘  └────┬───┘  └────┬───┘
                     │           │           │           │
                     └───────────┴─────┬─────┴───────────┘
                                       │
                                 ┌─────▼─────┐
                                 │   F5:     │
                                 │  MANAGE   │──► Heat
                                 │  SYSTEM   │──► Diagnostics
                                 │  RESOURCES│
                                 └───────────┘
                                       ▲
                            Power ═════╝
```

### 3.2 Main Subfunction Definitions

| ID | Subfunction | Verb + Noun (P&B format) | Flow Type | Classification |
|----|-------------|-------------------------|-----------|---------------|
| **F1** | Receive & Filter Signals | "Receive and filter agent signals" | Signal (main) | Main function |
| **F2** | Process & Assess Priority | "Process signals and assess priority" | Signal (main) | Main function |
| **F3** | Present to Human | "Present situational awareness to human" | Signal → Human | Main function |
| **F4** | Capture Human Decision | "Capture and transmit human decisions" | Human → Signal | Main function |
| **F5** | Manage System Resources | "Manage power, health, and configuration" | Energy + Signal | Auxiliary function |

---

## 4. FUNCTION STRUCTURE — LEVEL 2 (SUB-SUBFUNCTIONS)

### 4.1 F1: Receive & Filter Signals

```
                    F1: RECEIVE & FILTER SIGNALS
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Agent data ──►┌──────────┐  ┌──────────┐           │
    │  Network ─────►│ F1.1     │─►│ F1.2     │─►  Filtered   
    │  Alerts ──────►│ RECEIVE  │  │ FILTER & │   signal ──►
    │  Sensor feeds ►│ MULTI-   │  │ CLASSIFY │   stream
    │                │ SOURCE   │  │ SIGNALS  │           │
    │                │ SIGNALS  │  │          │           │
    │                └──────────┘  └─────┬────┘           │
    │                                    │                │
    │                              ┌─────▼────┐           │
    │                              │ F1.3     │           │
    │                              │ BUFFER   │           │
    │                              │ & QUEUE  │           │
    │                              │ SIGNALS  │           │
    │                              └──────────┘           │
    └─────────────────────────────────────────────────────┘
```

| ID | Sub-subfunction | P&B Generally Valid Function | Description |
|----|----------------|---------------------------|-------------|
| F1.1 | Receive multi-source signals | **Channel signals** | Accept data from multiple IRONMESH network interfaces (WiFi, ETH, LoRa), validate CDM protocol compliance |
| F1.2 | Filter & classify signals | **Change signals** | Parse CDM messages, classify by agent source, priority level, and message type; reject malformed data |
| F1.3 | Buffer & queue signals | **Store signals** | Maintain ordered queue of incoming signals for processing; prevent data loss during high-traffic periods |

**IRONMESH Integration Point:** F1.1 directly interfaces with IRONMESH CDM protocol stack. This subfunction is **100% reusable** from existing IRONMESH OS networking module.

---

### 4.2 F2: Process & Assess Priority

```
                    F2: PROCESS & ASSESS PRIORITY
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Filtered ──►┌──────────┐  ┌──────────┐             │
    │  signal      │ F2.1     │─►│ F2.2     │──► Assessed
    │  stream      │ AGGREGATE│  │ ASSESS   │   priority ─►
    │              │ AGENT    │  │ URGENCY  │   signals
    │              │ STATUS   │  │ & RISK   │             │
    │              └──────────┘  └─────┬────┘             │
    │                                  │                  │
    │                            ┌─────▼────┐             │
    │                            │ F2.3     │             │
    │  State history ◄───────────│ MAINTAIN │             │
    │  (for audit)               │ STATE    │             │
    │                            │ MACHINE  │             │
    │                            └──────────┘             │
    └─────────────────────────────────────────────────────┘
```

| ID | Sub-subfunction | P&B Generally Valid Function | Description |
|----|----------------|---------------------------|-------------|
| F2.1 | Aggregate agent status | **Connect signals** | Combine status data from ≥ 4 agents into unified operational picture; correlate related events across agents |
| F2.2 | Assess urgency & risk | **Change signals** (evaluate) | Apply priority rules: critical (immediate action required), warning (attention needed), info (awareness). Generate alert triggers |
| F2.3 | Maintain state machine | **Store signals** | Track system state (idle → alert → action → confirm → idle); maintain transition history for audit trail |

**IRONMESH Integration Point:** F2.1 relies on CORTEX CDM data schema for agent status aggregation. F2.3 state machine framework is **new development** specific to AICC human-in-the-loop workflow.

---

### 4.3 F3: Present to Human

```
                    F3: PRESENT TO HUMAN
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Assessed ──►┌──────────┐                            │
    │  priority    │ F3.1     │──► HDMI signal ──► Display
    │  signals     │ RENDER   │                            │
    │              │ VISUAL   │                            │
    │              │ DASHBOARD│                            │
    │              └──────────┘                            │
    │                                                     │
    │  Assessed ──►┌──────────┐                            │
    │  priority    │ F3.2     │──► SPI signal ──► Status
    │  signals     │ RENDER   │                  panel
    │              │ STATUS   │                            │
    │              │ SUMMARY  │                            │
    │              └──────────┘                            │
    │                                                     │
    │  Alert ─────►┌──────────┐                            │
    │  triggers    │ F3.3     │══► Audio ═══► Speaker
    │              │ GENERATE │══► Light ═══► LED indicators
    │              │ MULTI-   │··► Haptic ···► Vibration
    │              │ MODAL    │                            │
    │              │ ALERTS   │                            │
    │              └──────────┘                            │
    │                                                     │
    │  Agent ─────►┌──────────┐                            │
    │  priority    │ F3.4     │══► LED color ═► RGB LEDs
    │              │ INDICATE │                            │
    │              │ AGENT    │                            │
    │              │ STATE    │                            │
    │              └──────────┘                            │
    └─────────────────────────────────────────────────────┘
```

| ID | Sub-subfunction | P&B Generally Valid Function | Description |
|----|----------------|---------------------------|-------------|
| F3.1 | Render visual dashboard | **Channel signals** → display | Transform assessed data into primary display layout: agent status panels, action queue, alert banner. HDMI output |
| F3.2 | Render status summary | **Channel signals** → display | Transform key metrics into secondary display format: system health, connection status, mode indicator. SPI output |
| F3.3 | Generate multi-modal alerts | **Connect signal with energy** | Convert critical/warning signals into audio tones, LED patterns, and haptic pulses. Multi-sensory notification |
| F3.4 | Indicate agent state | **Connect signal with energy** | Drive RGB LEDs to show per-agent status: green (nominal), yellow (attention), red (critical), blue (action pending) |

**IRONMESH Integration Point:** F3.1 display renderer uses IRONMESH OS display framework (reusable). F3.3 alert system is **new development** — IRONMESH sensor nodes don't have human-facing alerts.

---

### 4.4 F4: Capture Human Decision

```
                    F4: CAPTURE HUMAN DECISION
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Button ····►┌──────────┐  ┌──────────┐             │
    │  press       │ F4.1     │─►│ F4.2     │             │
    │  Mode ······►│ DETECT   │  │ INTERPRET│             │
    │  selection   │ PHYSICAL │  │ USER     │             │
    │  E-stop ····►│ INPUT    │  │ INTENT   │             │
    │              └──────────┘  └─────┬────┘             │
    │                                  │                  │
    │                            ┌─────▼────┐             │
    │  State machine ◄───────────│ F4.3     │             │
    │  (from F2.3)               │ VALIDATE │             │
    │                            │ & CONFIRM│             │
    │                            │ DECISION │             │
    │                            └─────┬────┘             │
    │                                  │                  │
    │                            ┌─────▼────┐             │
    │                            │ F4.4     │──► Commands
    │                            │ TRANSMIT │──► Config
    │                            │ DECISION │──► Audit log
    │                            │ TO AGENTS│             │
    │                            └──────────┘             │
    └─────────────────────────────────────────────────────┘
```

| ID | Sub-subfunction | P&B Generally Valid Function | Description |
|----|----------------|---------------------------|-------------|
| F4.1 | Detect physical input | **Detect signals** (sensor function) | Read button state changes via I2C/GPIO, debounce, identify which control was activated. Emergency stop = hardware interrupt |
| F4.2 | Interpret user intent | **Change signals** (context-dependent) | Map physical input to semantic action based on current state: Button 1 in ALERT state = "approve action"; same button in IDLE state = "view agent detail" |
| F4.3 | Validate & confirm decision | **Connect signals** (check + feedback) | Implement 2-step confirmation for critical actions: first press = preview, second press = confirm. Display confirmation dialog on F3.1 |
| F4.4 | Transmit decision to agents | **Channel signals** (output) | Format human decision as CDM-compliant command, transmit to target agent(s) via IRONMESH network, log to audit trail |

**IRONMESH Integration Point:** F4.4 uses IRONMESH CDM for command transmission (100% reusable). F4.1-F4.3 are **AICC-specific** — no existing IRONMESH product has physical human input.

**Safety Critical Path:** F4.1 (E-stop) → F4.3 (validate) → F4.4 (transmit halt) must complete within **≤ 200ms** per safety requirement SF.01-SF.03.

---

### 4.5 F5: Manage System Resources (Auxiliary)

```
                    F5: MANAGE SYSTEM RESOURCES
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Power ═════►┌──────────┐                            │
    │  (5-12V DC)  │ F5.1     │═══► 5V system ══► CM4
    │              │ REGULATE │═══► 3.3V logic ═► I/O board
    │              │ & DISTRI-│═══► Display pwr ► Displays
    │              │ BUTE     │                            │
    │              │ POWER    │                            │
    │              └──────────┘                            │
    │                                                     │
    │              ┌──────────┐                            │
    │              │ F5.2     │──► Health status ─► F2
    │              │ MONITOR  │──► Temp warning ──► F3.3
    │              │ SYSTEM   │                            │
    │              │ HEALTH   │                            │
    │              └──────────┘                            │
    │                                                     │
    │              ┌──────────┐                            │
    │  Config ◄────│ F5.3     │──► Boot sequence
    │  updates     │ MANAGE   │──► Mode switching
    │              │ SYSTEM   │──► Network config
    │              │ CONFIG   │──► OTA updates
    │              └──────────┘                            │
    │                                                     │
    │              ┌──────────┐                            │
    │              │ F5.4     │──► Fail-safe state
    │  Fault ─────►│ HANDLE   │──► Error reporting
    │  detection   │ FAULTS & │──► Auto-recovery
    │              │ FAIL-SAFE│                            │
    │              └──────────┘                            │
    └─────────────────────────────────────────────────────┘
```

| ID | Sub-subfunction | P&B Generally Valid Function | Description |
|----|----------------|---------------------------|-------------|
| F5.1 | Regulate & distribute power | **Channel energy** + **Vary energy** | Accept 5-12V DC input, regulate to 5V (CM4), 3.3V (I2C devices), display power. Battery management for portable variants |
| F5.2 | Monitor system health | **Detect signals** (internal) | Monitor CPU temperature, memory usage, network connectivity, power status. Generate health status for F2 aggregation |
| F5.3 | Manage system configuration | **Store signals** + **Change signals** | Handle boot sequence, runtime mode switching, network configuration, OTA firmware updates |
| F5.4 | Handle faults & fail-safe | **Connect signal with energy** | Detect component failures, trigger fail-safe state (halt all agents), attempt auto-recovery, report errors. Maps to SF.01-SF.04 |

**IRONMESH Integration Point:** F5.1 power management = **80% reusable** from IRONMESH power board. F5.2 health monitoring = **100% reusable** from IRONMESH OS. F5.3 config management = **partial reuse** (boot + OTA from IRONMESH, AICC-specific mode switching new). F5.4 fail-safe = **AICC-specific** — different fail-safe logic than sensor nodes.

---

## 5. COMPLETE FUNCTION STRUCTURE — INTEGRATED VIEW

### 5.1 Full Signal Flow Diagram

```
═══════════════════════════════════════════════════════════════════════
                    AICC COMPLETE FUNCTION STRUCTURE
═══════════════════════════════════════════════════════════════════════

                        SIGNAL FLOW (Main)
                        ─────────────────

  IRONMESH           ┌─────────────────────────────────────────────┐
  Network            │                                             │
  ┌───────┐          │  ┌───────┐   ┌───────┐   ┌───────┐         │
  │Agent 1│──CDM────►│  │ F1.1  │──►│ F1.2  │──►│ F1.3  │         │
  │Agent 2│──CDM────►│  │Receive│   │Filter │   │Buffer │         │
  │Agent 3│──CDM────►│  │Multi- │   │&Class.│   │&Queue │         │
  │Agent 4│──CDM────►│  │Source │   │       │   │       │         │
  └───────┘          │  └───────┘   └───────┘   └───┬───┘         │
                     │                              │              │
                     │         ┌─────────────────────▼────┐        │
                     │         │  ┌───────┐   ┌───────┐   │        │
                     │         │  │ F2.1  │──►│ F2.2  │   │        │
                     │         │  │Aggreg.│   │Assess │   │        │
                     │         │  │Agent  │   │Urgency│   │        │
                     │         │  │Status │   │& Risk │   │        │
                     │         │  └───────┘   └───┬───┘   │        │
                     │         │              ┌───▼───┐   │        │
                     │         │              │ F2.3  │   │        │
                     │         │              │State  │   │        │
                     │         │              │Machine│   │        │
                     │         │              └───┬───┘   │        │
                     │         └──────────────────┼───────┘        │
                     │                            │                │
                     │    ┌───────────────────────┼──────────┐     │
                     │    │  ┌───────┐  ┌───────┐ │┌───────┐ │     │
                     │    │  │ F3.1  │  │ F3.2  │ ││ F3.3  │ │     │
                     │    │  │Render │  │Render │ ││Multi- │ │     │
                     │    │  │Visual │  │Status │ ││Modal  │ │     │
                     │    │  │Dashbd │  │Summary│ ││Alert  │ │     │
                     │    │  └───┬───┘  └───┬───┘ │└───┬───┘ │     │
                     │    │      │          │     │    │     │     │
                     │    │  ┌───▼───┐      │     │    │     │     │
                     │    │  │ F3.4  │      │     │    │     │     │
                     │    │  │Agent  │      │     │    │     │     │
                     │    │  │State  │      │     │    │     │     │
                     │    │  │LEDs   │      │     │    │     │     │
                     │    │  └───────┘      │     │    │     │     │
                     │    └────────────────┼─────┼────┼─────┘     │
                     │                     │     │    │            │
                     │                     ▼     ▼    ▼            │
                     │              ┌──────────────────────┐       │
                     │              │    HUMAN OPERATOR     │       │
                     │              │  Eyes ◄── Display     │       │
                     │              │  Eyes ◄── Status      │       │
                     │              │  Ears ◄── Audio       │       │
                     │              │  Eyes ◄── LED colors  │       │
                     │              │                       │       │
                     │              │  Hands ──► Buttons    │       │
                     │              │  Hands ──► E-stop     │       │
                     │              └──────────┬───────────┘       │
                     │                         │                   │
                     │    ┌────────────────────▼──────────────┐    │
                     │    │  ┌───────┐   ┌───────┐            │    │
                     │    │  │ F4.1  │──►│ F4.2  │            │    │
                     │    │  │Detect │   │Interp.│            │    │
                     │    │  │Phys.  │   │User   │            │    │
                     │    │  │Input  │   │Intent │            │    │
                     │    │  └───────┘   └───┬───┘            │    │
                     │    │              ┌───▼───┐            │    │
                     │    │              │ F4.3  │◄── F2.3    │    │
                     │    │              │Valid. │   (state)   │    │
                     │    │              │&Confm │            │    │
                     │    │              └───┬───┘            │    │
                     │    │              ┌───▼───┐            │    │
                     │    │              │ F4.4  │──► CDM cmd  │    │
                     │    │              │Transm.│──► Audit    │    │
                     │    │              │Decisn │              │    │
                     │    │              └───────┘            │    │
                     │    └───────────────────────────────────┘    │
                     │                                             │
  IRONMESH           │         ┌───────────────────────────┐       │
  Network ◄──CDM─────│─────────│ F4.4 output (commands)    │       │
  Audit Store ◄──────│─────────│ F4.4 output (audit log)   │       │
                     │         └───────────────────────────┘       │
                     │                                             │
                     └─────────────────────────────────────────────┘

                        ENERGY FLOW (Auxiliary)
                        ──────────────────────

                     ┌─────────────────────────────────────────────┐
  Power              │  ┌───────┐                                  │
  (5-12V DC) ════════╪═►│ F5.1  │═══► 5V ═══► CM4 compute         │
                     │  │Regulate│══► 3.3V ══► I/O board           │
                     │  │&Distrib│══► Display power ══► F3.1,F3.2  │
                     │  │Power  │══► LED power ══════► F3.3,F3.4   │
                     │  └───────┘                                  │
                     │                                             │
                     │  ┌───────┐   ┌───────┐                      │
                     │  │ F5.2  │──►│ F5.4  │──► Fail-safe state   │
                     │  │Monitor│   │Fault  │──► Error report       │
                     │  │Health │   │Handle │                      │
                     │  └───────┘   └───────┘                      │
                     │                                             │
                     │  ┌───────┐                                  │
                     │  │ F5.3  │──► Boot / Mode / OTA             │
                     │  │Config │                                  │
                     │  └───────┘                                  │
                     └─────────────────────────────────────────────┘
```

---

## 6. FUNCTION-TO-REQUIREMENT TRACEABILITY

### 6.1 Traceability Matrix

| Subfunction | Traces to Requirements | Critical? |
|-------------|----------------------|-----------|
| F1.1 Receive multi-source signals | PL.03, PL.06, SI.07 | Yes |
| F1.2 Filter & classify signals | PL.08, FN.01 | Yes |
| F1.3 Buffer & queue signals | FN.01 (latency), OP.02 (24h operation) | No |
| F2.1 Aggregate agent status | PL.08 (≥4 agents), FN.01 | Yes |
| F2.2 Assess urgency & risk | PL.09 (priority viz), FN.03 (alerts) | Yes |
| F2.3 Maintain state machine | FN.07 (state machine), FN.05 (audit) | Yes |
| F3.1 Render visual dashboard | SI.01 (HDMI display), ER.02 (readability) | Yes |
| F3.2 Render status summary | SI.02 (SPI display), FN.06 (multi-screen) | No |
| F3.3 Generate multi-modal alerts | FN.03 (alert notification), SI.09 (audio) | Yes |
| F3.4 Indicate agent state | SI.04 (RGB LEDs), PL.09 (priority viz) | No |
| F4.1 Detect physical input | SI.03 (buttons), SF.02 (E-stop) | Yes |
| F4.2 Interpret user intent | FN.02 (decision approval), ER.01 (one-hand) | Yes |
| F4.3 Validate & confirm decision | SF.03 (unintended prevention), SF.05 (2-step) | **SAFETY** |
| F4.4 Transmit decision to agents | PL.03 (CORTEX), FN.05 (logging), SI.11 (audit) | Yes |
| F5.1 Regulate & distribute power | OP.04 (power input), OP.03 (battery) | Yes |
| F5.2 Monitor system health | OP.02 (24h operation), EV.01 (temperature) | No |
| F5.3 Manage system configuration | OP.01 (boot time ≤30s), PL.04 (agnostic) | No |
| F5.4 Handle faults & fail-safe | SF.01 (fail-safe), SF.04 (connection loss) | **SAFETY** |

### 6.2 Untraceable Requirements Check

Requirements not directly mapped to subfunctions (need review):

| Requirement | Issue | Resolution |
|-------------|-------|------------|
| MF.01-MF.07 (Manufacturing) | Not functional — embodiment phase concern | Carry to Phase 3 |
| ER.03-ER.06 (Ergonomics) | Physical form constraints — not functional | Carry to Phase 3 |
| EV.02-EV.05 (Mil environmental) | Ruggedization — embodiment concern | Carry to Phase 3 |
| OP.05 (Multi-AICC sync) | Cross-device coordination | Add as F1 extension in Phase 3 |

→ All unmapped requirements are correctly **embodiment/detail design concerns**, not conceptual functions. No missing subfunctions detected.

---

## 7. IRONMESH REUSE MAPPING

### 7.1 Subfunction Reuse Classification

| Subfunction | IRONMESH Reuse | New Dev | Reuse Source |
|-------------|---------------|---------|-------------|
| F1.1 Receive multi-source | **100%** | 0% | IRONMESH OS networking stack |
| F1.2 Filter & classify | **80%** | 20% | CDM parser (reuse) + AICC priority rules (new) |
| F1.3 Buffer & queue | **100%** | 0% | IRONMESH OS message queue |
| F2.1 Aggregate agent status | **60%** | 40% | CDM data aggregation (reuse) + multi-agent view (new) |
| F2.2 Assess urgency & risk | **20%** | 80% | Alert framework (reuse) + AICC priority logic (new) |
| F2.3 Maintain state machine | **0%** | 100% | AICC-specific human-in-the-loop state machine |
| F3.1 Render visual dashboard | **40%** | 60% | Display framework (reuse) + AICC UI layout (new) |
| F3.2 Render status summary | **40%** | 60% | Display framework (reuse) + status layout (new) |
| F3.3 Generate multi-modal alerts | **10%** | 90% | Audio driver (reuse) + alert generation logic (new) |
| F3.4 Indicate agent state | **0%** | 100% | LED driver + color logic fully new |
| F4.1 Detect physical input | **0%** | 100% | I2C button driver fully new |
| F4.2 Interpret user intent | **0%** | 100% | Context-dependent mapping fully new |
| F4.3 Validate & confirm decision | **0%** | 100% | 2-step confirmation fully new |
| F4.4 Transmit decision | **90%** | 10% | CDM command transmission (reuse) + audit format (new) |
| F5.1 Regulate & distribute power | **80%** | 20% | IRONMESH power board (reuse) + AICC specific rails |
| F5.2 Monitor system health | **100%** | 0% | IRONMESH OS health monitoring |
| F5.3 Manage system configuration | **70%** | 30% | IRONMESH boot/OTA (reuse) + AICC modes (new) |
| F5.4 Handle faults & fail-safe | **30%** | 70% | Watchdog (reuse) + AICC fail-safe logic (new) |

### 7.2 Reuse Summary

| Category | Subfunctions | Avg Reuse | Dev Effort Weight |
|----------|-------------|-----------|-------------------|
| F1 — Receive & Filter | F1.1, F1.2, F1.3 | **93%** | Low — mostly plug-in IRONMESH modules |
| F2 — Process & Assess | F2.1, F2.2, F2.3 | **27%** | High — core AICC logic, mostly new |
| F3 — Present to Human | F3.1, F3.2, F3.3, F3.4 | **23%** | High — UI/UX is AICC's unique value |
| F4 — Capture Decision | F4.1, F4.2, F4.3, F4.4 | **23%** | High — human input chain is fully new |
| F5 — Manage Resources | F5.1, F5.2, F5.3, F5.4 | **70%** | Low — leverage IRONMESH OS |

**Overall function-level reuse: ~47%** (aligned with Phase 1 estimate of ~55% component-level reuse)

**Development effort concentration:** F2 (priority assessment), F3 (UI rendering), F4 (human input chain) represent **~80% of new development work**. This is where concept variants in Phase 2 Step 3 should differ.

---

## 8. D-M-I-R STEP REFLECTION

### 8.1 What This Step Achieved

| Output | Quality Check |
|--------|--------------|
| Overall function (black box) | ✅ Solution-neutral, clear I/O specification |
| 5 main subfunctions | ✅ Follow signal processing chain, cover all requirements |
| 18 sub-subfunctions | ✅ Each uses P&B generally valid function verbs |
| 3-flow diagram (Signal/Energy/Human) | ✅ Signal = main flow, Energy = auxiliary, Material = minimal |
| Traceability matrix | ✅ All 56 requirements traced or correctly deferred |
| IRONMESH reuse mapping | ✅ Quantified per subfunction, identifies dev effort focus |

### 8.2 Key Insights for Next Step

1. **F2 + F3 + F4 are the "AICC soul"** — These 3 function groups have lowest IRONMESH reuse (23-27%) and highest new development. Morphological matrix should focus solution variation HERE.

2. **F1 and F5 are "plug-in"** — High reuse (70-93%) means these subfunctions should use proven IRONMESH solutions. Morphological matrix for these will have fewer options (already constrained by platform).

3. **Safety-critical path identified** — F4.1 → F4.3 → F4.4 (E-stop → validate → transmit halt) requires ≤ 200ms latency. This constrains solution principles for F4.

4. **State machine (F2.3) is architectural keystone** — All other subfunctions interact with it. Solution principle for F2.3 drives overall system behavior.

### 8.3 Next Step: Phase 2, Step 2 — Morphological Matrix

**Input:** This function structure (18 subfunctions identified)

**Task:** For each subfunction, identify 2-4 solution principles. Focus variation on F2, F3, F4 (highest new development). Combine compatible principles into 3-4 complete concept variants.

**Estimated effort:** 4 hours

---

*Document ID: VN-AICC-001-P2-S1-v1.0*
*Method: P&B Chapter 6.3 — Establishing Function Structures*
*Status: ✅ COMPLETE*
*Next: Phase 2, Step 2 — Morphological Matrix (P&B §6.5)*
