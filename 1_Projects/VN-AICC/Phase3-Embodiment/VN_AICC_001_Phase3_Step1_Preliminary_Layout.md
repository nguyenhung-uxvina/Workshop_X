---
project: VN-AICC-001
phase: 3
type: preliminary_layout
version: 2.0
created: 2026-02-19
status: REVISED — Corrected to 160×90mm IO Board, updated BOM/dimensions/materials
---

# VN-AICC-001: PHASE 3, STEP 1 — PRELIMINARY LAYOUT
## Embodiment Design: System Architecture & Physical Layout for Hybrid C+
### Version 2.0 | 19/02/2026

---

**Document ID:** VN-AICC-001-P3-S1-v2.0
**Phase:** 3 — Embodiment Design
**Input:** VN-AICC-001-P2-S4-v1.0 (Hybrid C+ approved as principle solution)
**Method:** P&B Chapter 7 — Embodiment Design, RISM-PRAD process
**Approach:** 15-Step RISM-PRAD-DECS-OCP (Complex defense system)

---

## 1. HYBRID C+ ARCHITECTURE SUMMARY (FROM PHASE 2)

### 1.1 Principle Solution: "Defense Sentinel Optimized"

| Element | Selection | Source |
|---|---|---|
| F2.3 Keystone | Dual-track synchronized FSM (Operator FSM + System FSM) | SP-D |
| Safety Architecture | HW interrupt E-stop + HW WDT + graduated confirmation | F4.1-C, F5.2-B, F4.3-C |
| Priority Assessment | Static priority matrix (simplified from escalation ladder) | F2.2-A (was F2.2-C) |
| Fail-safe | Graduated degradation + HW WDT backstop | F5.4-B + F5.2-B |
| Display | Fixed multi-zone layout + icon status matrix | F3.1-C, F3.2-B |
| Input | HW interrupt-driven + layered mapping with visual guide | F4.1-C, F4.2-C |
| Alerts | Escalating cascade (visual → audio → haptic) | F3.3-B |
| Communication | IRONMESH native bus + CDM direct command | F1.1-A, F4.4-A |

### 1.2 Key Design Targets

| Target | Value | Source |
|---|---|---|
| MAKER BOM | ≤ $50 | MF.02 + C10 production optimization committed |
| Development time | 5–7 weeks to prototype | C11 improvement via simplified F2.2 + F5.4 |
| IRONMESH reuse | ~55% | Phase 2 estimate |
| Local content | ≥ 60% by value | MF.01 |
| E-stop latency | ≤ 200ms (target <60ms) | SF.01–SF.03 |
| Boot time | ≤ 30s | OP.01 |
| Continuous operation | ≥ 24h | OP.02 |

---

## 2. SYSTEM ARCHITECTURE — BLOCK DIAGRAM

### 2.1 Hardware Architecture

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    AICC HYBRID C+ — HARDWARE ARCHITECTURE                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │                    COMPUTE MODULE (CM4)                              │     ║
║  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │     ║
║  │  │BCM2711   │  │ 2GB RAM  │  │ 16GB eMMC│  │WiFi/BT   │            │     ║
║  │  │Quad A72  │  │ LPDDR4   │  │ (OS+App) │  │ 802.11ac │            │     ║
║  │  │1.5GHz    │  │          │  │          │  │          │            │     ║
║  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │     ║
║  │                                                                     │     ║
║  │  Interfaces: HDMI×2 | SPI×1 | I2C×1 | GPIO×28 | USB×2 | ETH×1    │     ║
║  └──────────────┬──────────┬──────────┬──────────┬───────────────────┘     ║
║                  │HDMI      │SPI       │I2C       │GPIO/USB                  ║
║                  ▼          ▼          ▼          ▼                          ║
║  ┌──────────┐  ┌──────────┐  ┌─────────────────────────────────────┐       ║
║  │PRIMARY   │  │SECONDARY │  │         I/O CARRIER BOARD           │       ║
║  │DISPLAY   │  │DISPLAY   │  │                                     │       ║
║  │          │  │          │  │  ┌────────────┐  ┌──────────────┐   │       ║
║  │ HDMI     │  │ SPI OLED │  │  │ I2C I/O    │  │ HW INTERRUPT │   │       ║
║  │ 3.5"–7"  │  │ 1.3"–2"  │  │  │ EXPANDER   │  │ DEBOUNCE     │   │       ║
║  │ Dashboard│  │ Status   │  │  │ (MCP23017) │  │ CIRCUIT      │   │       ║
║  │          │  │ icons    │  │  │ 16-ch      │  │ (RC+Schmitt) │   │       ║
║  │          │  │          │  │  └──────┬─────┘  └──────┬───────┘   │       ║
║  │          │  │          │  │         │               │           │       ║
║  │          │  │          │  │  ┌──────▼───────────────▼───────┐   │       ║
║  │          │  │          │  │  │       BUTTON ARRAY           │   │       ║
║  │          │  │          │  │  │  [B1][B2][B3][B4][B5][B6]    │   │       ║
║  │          │  │          │  │  │       + [E-STOP] (HW INT)    │   │       ║
║  │          │  │          │  │  └──────────────────────────────┘   │       ║
║  │          │  │          │  │                                     │       ║
║  │          │  │          │  │  ┌────────────┐  ┌──────────────┐   │       ║
║  │          │  │          │  │  │ RGB LED    │  │ HW WATCHDOG  │   │       ║
║  │          │  │          │  │  │ DRIVER     │  │ TIMER (WDT)  │   │       ║
║  │          │  │          │  │  │ (4× RGB)   │  │ (e.g. TPL5010│   │       ║
║  │          │  │          │  │  │ via I2C    │  │  or MAX6369) │   │       ║
║  │          │  │          │  │  └──────┬─────┘  └──────┬───────┘   │       ║
║  │          │  │          │  │         │               │           │       ║
║  │          │  │          │  │  ┌──────▼──┐     ┌──────▼────────┐  │       ║
║  │          │  │          │  │  │ 4× RGB  │     │ WDT_DONE pin  │  │       ║
║  │          │  │          │  │  │ LEDs    │     │ → CM4 GPIO    │  │       ║
║  │          │  │          │  │  └─────────┘     └───────────────┘  │       ║
║  │          │  │          │  │                                     │       ║
║  │          │  │          │  │  ┌────────────┐  ┌──────────────┐   │       ║
║  │          │  │          │  │  │ AUDIO AMP  │  │ PIEZO BUZZER │   │       ║
║  │          │  │          │  │  │ (PAM8403)  │  │ (alert tone) │   │       ║
║  │          │  │          │  │  │ PWM input  │  │              │   │       ║
║  │          │  │          │  │  └──────┬─────┘  └──────────────┘   │       ║
║  │          │  │          │  │         │                           │       ║
║  │          │  │          │  │  ┌──────▼──┐                        │       ║
║  │          │  │          │  │  │Speaker  │                        │       ║
║  │          │  │          │  │  │ 8Ω 1W   │                        │       ║
║  │          │  │          │  │  └─────────┘                        │       ║
║  └──────────┘  └──────────┘  └─────────────────────────────────────┘       ║
║                                                                              ║
║  ┌───────────────────────────────────────────────────────────────────┐       ║
║  │                    POWER MANAGEMENT                                │       ║
║  │                                                                   │       ║
║  │  USB-C 5V ═══► [Buck/LDO] ═══► 5V rail ═══► CM4                  │       ║
║  │                    │                                              │       ║
║  │                    ╠═══► 3.3V rail ═══► I2C devices, LEDs         │       ║
║  │                    ╠═══► Display power ═══► HDMI + SPI display     │       ║
║  │                    ╚═══► Audio power ═══► Amplifier                │       ║
║  │                                                                   │       ║
║  │  DC barrel 7-12V ═══► [Buck to 5V] ═══► (same distribution)      │       ║
║  └───────────────────────────────────────────────────────────────────┘       ║
║                                                                              ║
║  ┌───────────────────────────────────────────────────────────────────┐       ║
║  │                    NETWORK INTERFACES                              │       ║
║  │                                                                   │       ║
║  │  CM4 WiFi ─────► IRONMESH mesh network (primary)                  │       ║
║  │  CM4 Ethernet ──► Wired IRONMESH / upstream C2 (PRO/TAC/RACK)    │       ║
║  │  USB LoRa ──────► Long-range mesh (optional, TAC variant)         │       ║
║  └───────────────────────────────────────────────────────────────────┘       ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 2.2 Bus Architecture Summary

| Bus | Function | Devices | Speed | Protocol |
|---|---|---|---|---|
| **HDMI** | Primary display | 1× LCD panel | 60fps | HDMI 1.4 |
| **SPI** | Secondary display | 1× OLED/LCD | 15–30fps | SPI Mode 0 |
| **I2C** (Bus 1) | I/O expansion | MCP23017 + LED driver + WDT | 400kHz | I2C |
| **GPIO** | HW interrupt E-stop | 1× dedicated line (HW debounced) | <1ms | Direct |
| **GPIO** | WDT heartbeat | 1× WDT_DONE signal | Periodic | Direct |
| **PWM** | Audio output | 1× PAM8403 amplifier | 44.1kHz | PWM/I2S |
| **USB** | Expansion port | External devices | 480Mbps | USB 2.0 |
| **Ethernet** | Wired network | RJ45 | 1Gbps | TCP/IP |
| **WiFi** | Wireless network | Internal CM4 | 867Mbps | 802.11ac |

---

## 3. SOFTWARE ARCHITECTURE

### 3.1 Hybrid C+ Software Stack

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                AICC HYBRID C+ — SOFTWARE ARCHITECTURE                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │  APPLICATION LAYER (AICC-specific, ~50% new development)            │     ║
║  │                                                                     │     ║
║  │  ┌───────────────────────────────────────────────────────────┐      │     ║
║  │  │  DUAL-TRACK FSM ENGINE (F2.3-D) ★ KEYSTONE               │      │     ║
║  │  │                                                           │      │     ║
║  │  │  ┌──────────────┐    sync     ┌──────────────┐           │      │     ║
║  │  │  │ OPERATOR FSM │◄──protocol──►│ SYSTEM FSM   │           │      │     ║
║  │  │  │              │             │              │           │      │     ║
║  │  │  │ IDLE         │             │ ALL_NOMINAL  │           │      │     ║
║  │  │  │ REVIEWING    │             │ ALERT_ACTIVE │           │      │     ║
║  │  │  │ DECIDING     │             │ ACTION_PEND  │           │      │     ║
║  │  │  │ CONFIRMING   │             │ EXECUTING    │           │      │     ║
║  │  │  │ EMERGENCY    │             │ FAULT        │           │      │     ║
║  │  │  └──────────────┘             └──────────────┘           │      │     ║
║  │  │                                                           │      │     ║
║  │  │  Sync rules:                                              │      │     ║
║  │  │  - System ALERT_ACTIVE → Operator transitions to REVIEWING│      │     ║
║  │  │  - Operator CONFIRMING → System transitions to EXECUTING  │      │     ║
║  │  │  - Either EMERGENCY → both enter EMERGENCY (immediate)    │      │     ║
║  │  └───────────────────────────────────────────────────────────┘      │     ║
║  │                                                                     │     ║
║  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │     ║
║  │  │ PRIORITY     │  │ DISPLAY      │  │ DECISION     │              │     ║
║  │  │ ASSESSOR     │  │ COMPOSITOR   │  │ HANDLER      │              │     ║
║  │  │ (F2.2-A)     │  │ (F3.1-C)     │  │ (F4.2-C,     │              │     ║
║  │  │              │  │              │  │  F4.3-C)     │              │     ║
║  │  │ Static 2D    │  │ Fixed zones: │  │              │              │     ║
║  │  │ priority     │  │ Alert bar    │  │ Layered map  │              │     ║
║  │  │ matrix       │  │ Agent grid   │  │ + visual     │              │     ║
║  │  │ (type×sev)   │  │ Action queue │  │ guide        │              │     ║
║  │  │              │  │ Status bar   │  │              │              │     ║
║  │  │ O(1) lookup  │  │ Button legend│  │ Graduated    │              │     ║
║  │  │              │  │              │  │ confirm      │              │     ║
║  │  └──────────────┘  └──────────────┘  └──────────────┘              │     ║
║  │                                                                     │     ║
║  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │     ║
║  │  │ ALERT        │  │ AUDIT        │  │ AGENT        │              │     ║
║  │  │ MANAGER      │  │ LOGGER       │  │ AGGREGATOR   │              │     ║
║  │  │ (F3.3-B)     │  │ (FN.05)      │  │ (F2.1-C)     │              │     ║
║  │  │              │  │              │  │              │              │     ║
║  │  │ Escalating   │  │ Timestamped  │  │ Hybrid poll  │              │     ║
║  │  │ cascade:     │  │ decision log │  │ + heartbeat  │              │     ║
║  │  │ vis→aud→hap  │  │ Dual-FSM     │  │              │              │     ║
║  │  │              │  │ state capture│  │ ≥4 agents    │              │     ║
║  │  └──────────────┘  └──────────────┘  └──────────────┘              │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │  MIDDLEWARE LAYER (IRONMESH OS Terminal Edition, ~55% reuse)         │     ║
║  │                                                                     │     ║
║  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │     ║
║  │  │ CDM PROTOCOL │  │ MESSAGE      │  │ DISPLAY      │              │     ║
║  │  │ ENGINE       │  │ QUEUE        │  │ FRAMEWORK    │              │     ║
║  │  │ [IRONMESH]   │  │ [IRONMESH]   │  │ [IRONMESH]   │              │     ║
║  │  │              │  │              │  │              │              │     ║
║  │  │ CDM parse/   │  │ Priority-    │  │ HDMI render  │              │     ║
║  │  │ serialize    │  │ lane ring    │  │ pipeline     │              │     ║
║  │  │ Agent disc.  │  │ buffer       │  │ Zone manager │              │     ║
║  │  └──────────────┘  └──────────────┘  └──────────────┘              │     ║
║  │                                                                     │     ║
║  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │     ║
║  │  │ NETWORKING   │  │ SECURITY     │  │ CONFIG       │              │     ║
║  │  │ STACK        │  │ & AUTH       │  │ MANAGER      │              │     ║
║  │  │ [IRONMESH]   │  │ [IRONMESH]   │  │ [IRONMESH+]  │              │     ║
║  │  │              │  │              │  │              │              │     ║
║  │  │ WiFi/ETH/    │  │ Device auth  │  │ File-based   │              │     ║
║  │  │ LoRa mgmt    │  │ Agent cert   │  │ static conf  │              │     ║
║  │  │ CDM routing  │  │ Log signing  │  │ + AICC modes │              │     ║
║  │  └──────────────┘  └──────────────┘  └──────────────┘              │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │  HAL LAYER (Hardware Abstraction, mix of reuse + new)               │     ║
║  │                                                                     │     ║
║  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │     ║
║  │  │HDMI driver │ │SPI display │ │I2C bus mgr │ │GPIO/INT    │       │     ║
║  │  │[IRONMESH]  │ │driver [NEW]│ │[IRONMESH]  │ │handler[NEW]│       │     ║
║  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │     ║
║  │                                                                     │     ║
║  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐       │     ║
║  │  │PWM audio   │ │LED driver  │ │WDT driver  │ │Power mgmt  │       │     ║
║  │  │driver [NEW]│ │[NEW]       │ │[NEW]       │ │[IRONMESH]  │       │     ║
║  │  └────────────┘ └────────────┘ └────────────┘ └────────────┘       │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
║                                                                              ║
║  ┌─────────────────────────────────────────────────────────────────────┐     ║
║  │  LINUX KERNEL (Raspberry Pi OS / IRONMESH OS base)                  │     ║
║  └─────────────────────────────────────────────────────────────────────┘     ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### 3.2 Dual-Track FSM — Detailed State Diagram

```
OPERATOR FSM                              SYSTEM FSM
─────────────                             ──────────

┌──────────┐   System ALERT_ACTIVE        ┌──────────────┐
│          │◄─────────sync──────────────►│              │
│  IDLE    │                              │ ALL_NOMINAL  │
│          │   No active alerts           │              │
└─────┬────┘                              └──────┬───────┘
      │                                          │
      │ New alert arrives                        │ Agent sends alert
      │ (via System FSM sync)                    │
      ▼                                          ▼
┌──────────┐                              ┌──────────────┐
│          │   Display alert details      │              │
│REVIEWING │   Show button legend:        │ ALERT_ACTIVE │
│          │   [Acknowledge][Dismiss]      │              │
│          │   [Details][E-STOP]           │  N agents    │
└─────┬────┘                              │  with alerts │
      │                                   └──────┬───────┘
      │ Operator selects action                   │
      │                                          │ Operator issues
      ▼                                          │ command
┌──────────┐                              ┌──────────────┐
│          │   Show action preview        │              │
│DECIDING  │   Buttons: [Approve][Reject] │ ACTION_PEND  │
│          │   [Modify][Cancel]           │              │
│          │   graduated confirm          │  Waiting for │
└─────┬────┘                              │  human       │
      │                                   └──────┬───────┘
      │ Operator confirms action                  │
      │ (graduated difficulty)                    │
      ▼                                          ▼
┌──────────┐                              ┌──────────────┐
│          │   Hold button (critical)     │              │
│CONFIRMING│   OR double-press (warning)  │ EXECUTING    │
│          │   OR single-press (info)     │              │
│          │                              │ CDM command  │
└─────┬────┘                              │ transmitted  │
      │                                   └──────┬───────┘
      │ Confirmed → return to idle                │
      │                                          │ Command ACK'd
      ▼                                          ▼
┌──────────┐                              ┌──────────────┐
│  IDLE    │◄─────────sync──────────────►│ ALL_NOMINAL  │
└──────────┘                              └──────────────┘

EMERGENCY PATH (bypasses all states):
─────────────────────────────────────
  E-STOP pressed (HW interrupt)
       │
       ├──► Operator FSM → EMERGENCY (immediate)
       └──► System FSM → FAULT (immediate)
            → CDM halt-all command transmitted
            → All agents receive halt
            → Latency: <60ms total

  EMERGENCY → IDLE: requires operator manual reset
              (deliberate act, not automatic)
```

### 3.3 Safety-Critical Path — Timing Analysis

```
E-STOP ACTIVATION PATH (must complete ≤ 200ms):

  [HARDWARE]                [SOFTWARE]                 [NETWORK]

  E-stop button             GPIO ISR                   CDM halt
  pressed                   fires                      transmitted
  ─────┬────               ─────┬────                 ─────┬────
       │                        │                          │
       │ HW debounce            │ Read INT                 │ Format CDM
       │ (RC + Schmitt)         │ flag                     │ halt msg
       │ ~1-5ms                 │ ~0.1ms                   │ ~1ms
       │                        │                          │
       │                        │ Operator FSM             │ TX via
       │                        │ → EMERGENCY              │ native bus
       │                        │ ~0.5ms                   │ ~40-50ms
       │                        │                          │
       │                        │ System FSM               │
       │                        │ → FAULT                  │
       │                        │ ~0.5ms                   │
       │                        │                          │
       ▼                        ▼                          ▼

  TOTAL WORST CASE: 5 + 0.1 + 0.5 + 0.5 + 1 + 50 = ~57ms ≤ 200ms ✅

  MARGIN: 200 - 57 = 143ms (71% margin)
```

---

## 4. PHYSICAL LAYOUT — MAKER VARIANT (Reference Design)

### 4.1 Enclosure Concept

```
FRONT VIEW (operator-facing):
╔══════════════════════════════════════════════════════╗
║                                                      ║
║  ┌──────────────────────────────────────────────┐    ║
║  │                                              │    ║
║  │           PRIMARY DISPLAY (HDMI)             │    ║
║  │              3.5" – 5" LCD                   │    ║
║  │                                              │    ║
║  │  ┌─────────────────────────────────────┐     │    ║
║  │  │ ALERT BAR (top zone)                │     │    ║
║  │  ├─────────────────────────────────────┤     │    ║
║  │  │                                     │     │    ║
║  │  │      AGENT STATUS GRID              │     │    ║
║  │  │      (center zone)                  │     │    ║
║  │  │                                     │     │    ║
║  │  ├─────────────────────────────────────┤     │    ║
║  │  │ ACTION QUEUE (bottom zone)          │     │    ║
║  │  ├─────────────────────────────────────┤     │    ║
║  │  │ BUTTON LEGEND (visual guide zone)   │     │    ║
║  │  └─────────────────────────────────────┘     │    ║
║  │                                              │    ║
║  └──────────────────────────────────────────────┘    ║
║                                                      ║
║  ┌──────┐   ┌──────────────────────────────────┐     ║
║  │OLED  │   │ [LED1] [LED2] [LED3] [LED4]      │     ║
║  │status│   │  Agt1   Agt2   Agt3   Agt4      │     ║
║  │panel │   │                                  │     ║
║  │(SPI) │   │ [B1:ACK] [B2:DIS] [B3:DTL]      │     ║
║  │      │   │ [B4:MOD] [B5:CFG] [B6:NAV]      │     ║
║  └──────┘   │                                  │     ║
║             │        [🔴 E-STOP]                │     ║
║             └──────────────────────────────────┘     ║
║                                                      ║
╚══════════════════════════════════════════════════════╝

TOP VIEW (orientation):
╔══════════════════════════════╗
║  ┌──────────────────────┐    ║
║  │     DISPLAY          │    ║  ← Tilted ~15° toward operator
║  └──────────────────────┘    ║
║  ┌──────────────────────┐    ║
║  │  Controls + LEDs     │    ║  ← Flat or slight tilt
║  └──────────────────────┘    ║
║         [E-STOP]             ║  ← Recessed + guarded
╚══════════════════════════════╝

SIDE VIEW (updated v2.0):
     ┌──────────────────────┐
     │   Display window     │ Z=72-75  Top cover
     │   (top surface)      │ Z=62.5   Display
     ├──────────────────────┤
     │   Air gap 31.6mm     │          Convection zone
     ├──────────────────────┤
     │   CM4 + Heatsink     │ Z=14.6-30.9
     │   CM4 IO Board 160×90│
     ├──────────────────────┤
     │   I/O Carrier 80×50  │ Z=8-9.6
     ├──────────────────────┤
     │   Bottom plate       │ Z=0-3   Base
     └──────────────────────┘
     ←──────────────────────→
            180mm
```

### 4.2 Key Dimensions (MAKER variant)

| Dimension | Value | Constraint Source |
|---|---|---|
| Width (X) | **180 mm** | 160mm IO Board + 2×(3mm wall + 7mm clearance) |
| Depth (Y) | **115 mm** | 90mm IO Board + 8mm rear connector zone + front controls + walls |
| Height (Z) | **75 mm** | Z-stack: base + standoffs + PCBs + CM4 + heatsink + air gap + display + top |
| Weight | **~400g** (≤ 500g) | ER.04 |
| Envelope | **180×115×75** | ≤ 200×150×80 ✅ |
| Display | Top surface window | ER.02 readability (optional 15° wedge base) |

**Detailed spatial layout:** See `VN_AICC_001_Phase3_Spatial_Layout.md` v1.2 for full component placement, dimensioned views, and enclosure shell design.

### 4.3 Internal Component Stacking (Updated v2.0)

```
Z-STACK CROSS-SECTION (precise dimensions per Spatial Layout v1.2):

  Z=75.0 ┌──────────────────────────────────┐ Top surface
  Z=72.0 │  Top Cover (PETG, snap-fit)      │ Cover plate + alignment lip
         │  ┌────── Display Window ────────┐ │
  Z=62.5 │  │  HDMI Display 86×56×9.5mm   │ │ On display shelves
         │  └──────────────────────────────┘ │
         │                                    │
         │  ~~~ AIR GAP 31.6mm (vents) ~~~   │ Side exhaust vents (C2, C3)
         │                                    │
  Z=30.9 │  ┌── Heatsink 40×40×10 ──┐       │ Al 6063-T5
  Z=20.9 │  ├── CM4 Module 55×40 ───┤       │ On Hirose socket
  Z=16.2 │  ├── CM4 IO Board 160×90 ┤       │ On 11.6mm brass standoffs
  Z=14.6 │  └───────────────────────-┘       │
         │                                    │
  Z= 9.6 │  ┌── I/O Carrier 80×50 ──┐       │ On 5mm brass standoffs
  Z= 8.0 │  └───────────────────────-┘       │ Connected via 6-pin JST-PH
         │                                    │
  Z= 3.0 │  Base plate (PETG, FDM)          │ + speaker (rear-right)
  Z= 0.0 └──────────────────────────────────┘ Bottom (front intake vent V2)

  Rear panel connectors (through R1 cutout, 124×15.5mm):
  [2×HDMI] [Ethernet RJ45] [2×USB-A] [DC barrel] [µUSB]
```

**Note:** I/O Carrier Board (80×50mm) sits BELOW the CM4 IO Board (160×90mm) on separate standoffs. Connected via 6-pin JST-PH cable (I2C SDA/SCL + GPIO4 E-stop + GPIO17 WDT + 3.3V + GND).

---

## 5. INTERFACE CONTROL — CRITICAL INTERFACES

### 5.1 I2C Bus Interface (Bus 1)

| Address | Device | Function | Data Rate | Notes |
|---|---|---|---|---|
| 0x20 | MCP23017 I/O Expander | 6 buttons + spare channels | 400kHz | INT output for button events |
| 0x40 | PCA9685 LED Driver | 4× RGB LEDs (12 PWM channels) | 400kHz | Or discrete GPIO if simpler |
| — | HW WDT (TPL5010) | Heartbeat exchange | N/A | Uses dedicated GPIO, not I2C |

### 5.2 I/O Carrier Board — Test Points & Connector Keying

#### Test Points (labeled on silkscreen, 1mm round pads, plated):

| TP ID | Signal | Location on I/O Board | Purpose |
|---|---|---|---|
| **TP1** | +5V rail | Near power input, top edge | Verify power supply to board |
| **TP2** | +3.3V rail | Near LDO output | Verify regulated logic voltage |
| **TP3** | I2C SDA (Bus 1) | Near MCP23017, between pull-up and IC | Probe I2C data line for bus debugging |
| **TP4** | I2C SCL (Bus 1) | Near MCP23017, between pull-up and IC | Probe I2C clock line for bus debugging |
| **TP5** | GPIO4 (E-stop INT) | After HW debounce circuit output | Measure E-stop latency: scope trigger on TP5 falling edge |
| **TP6** | GND | Adjacent to TP1, top edge | Ground reference for all probe measurements |

**Test point placement rule:** All TPs on same board edge (top) for single-probe-hand access during prototype debug.

#### Internal Connector Keying:

All internal board-to-board and board-to-wire connections use **polarized connectors** to prevent reverse insertion:

| Connection | Connector Type | Keying Method |
|---|---|---|
| I/O Board ↔ CM4 IO Board (I2C + GPIO) | JST-PH 2.0mm, 6-pin | Polarized housing + silkscreen arrow at pin 1 |
| I/O Board ↔ E-stop button | JST-PH 2.0mm, 2-pin | Polarized housing (NC + GND) |
| I/O Board ↔ Button array | JST-PH 2.0mm, 8-pin | Polarized housing |
| I/O Board ↔ Speaker | JST-PH 2.0mm, 2-pin | Polarized housing |
| SPI OLED ↔ CM4 IO Board | FFC/FPC 7-pin ribbon | Keyed ZIF connector (contacts on one side only) |

**Rule:** Zero bare pin headers for production. Prototype may use pin headers with silkscreen polarity marks + heat-shrink color coding on wires (red = pin 1).

### 5.3 GPIO Allocation (CM4)

| GPIO | Function | Direction | Notes |
|---|---|---|---|
| GPIO4 | E-STOP HW interrupt | Input, pull-up, falling edge | Hardware debounced externally |
| GPIO17 | WDT_DONE (heartbeat to WDT) | Output | Periodic toggle to feed watchdog |
| GPIO18 | PWM Audio (to PAM8403) | Output | PWM for audio tone generation |
| GPIO27 | MCP23017 INT output | Input | Button press interrupt from I/O expander |
| SPI0 | Secondary display | Output | SPI CS0 for OLED status panel |

### 5.4 Display Zone Layout (Fixed Multi-Zone)

```
PRIMARY DISPLAY (HDMI, 480×320 minimum for MAKER 3.5"):
┌────────────────────────────────────────────┐
│ ZONE 1: ALERT BAR (100% width × 15%)      │  Red/yellow/green
│ Current highest priority alert message      │  background by severity
├────────────────────────────────────────────┤
│                                            │
│ ZONE 2: AGENT STATUS GRID (100% × 45%)    │  2×2 grid for 4 agents
│                                            │  Each cell: name, status,
│  ┌──────────┐  ┌──────────┐               │  last action, health bar
│  │ Agent 1  │  │ Agent 2  │               │
│  │ ██████░░ │  │ ████████ │               │
│  └──────────┘  └──────────┘               │
│  ┌──────────┐  ┌──────────┐               │
│  │ Agent 3  │  │ Agent 4  │               │
│  │ ███████░ │  │ ██░░░░░░ │               │
│  └──────────┘  └──────────┘               │
│                                            │
├────────────────────────────────────────────┤
│ ZONE 3: ACTION QUEUE (100% × 25%)         │  Pending decisions list
│ ▶ Approve Agent-2 target engage?           │  Current action highlighted
│   Modify Agent-4 patrol route              │
├────────────────────────────────────────────┤
│ ZONE 4: BUTTON LEGEND (100% × 15%)        │  Real-time button labels
│ [B1:Approve] [B2:Reject] [B3:Details]      │  Changes per operator
│ [B4:Modify]  [B5:Config] [B6:Navigate]     │  FSM state
└────────────────────────────────────────────┘

SECONDARY DISPLAY (SPI OLED, 128×64):
┌────────────────────────┐
│ ⚡ PWR: OK  📡 NET: 4/4│  System health icons
│ 🌡 42°C   ⏱ 04:32:15  │  Uptime, temperature
│ MODE: OPERATIONAL      │  Current system mode
│ LOG: 1,247 events      │  Audit log count
└────────────────────────┘
```

---

## 6. PRELIMINARY BOM — MAKER VARIANT

### 6.1 Component List

| # | Component | Specification | Qty | Est. Cost | Source | Category |
|---|---|---|---|---|---|---|
| 1 | Raspberry Pi CM4 | 2GB RAM, 16GB eMMC, WiFi | 1 | $35.00 | Import | Compute |
| 2 | CM4 IO Board | Official Raspberry Pi **160×90mm** | 1 | **$35.00** | Import | Compute |
| 3 | HDMI Display | 3.5" IPS 480×320 | 1 | $12.00 | Import | Display |
| 4 | SPI OLED | 1.3" 128×64 SH1106 | 1 | $3.00 | Import | Display |
| 5 | I/O Carrier Board | Custom PCB (2-layer) | 1 | $2.00 | **Local** | I/O |
| 6 | MCP23017 | I2C I/O Expander | 1 | $1.50 | Import | I/O |
| 7 | Tactile buttons | 12mm, ≥0.5N, through-hole | 6 | $1.80 | **Local** | Input |
| 8 | E-stop button | 16mm, NC, mushroom red | 1 | $2.00 | **Local** | Safety |
| 9 | HW debounce circuit | RC + 74HC14 Schmitt | 1 set | $0.50 | **Local** | Safety |
| 10 | HW Watchdog | TPL5010 or MAX6369 | 1 | $1.00 | Import | Safety |
| 11 | RGB LEDs | WS2812B or discrete | 4 | $1.00 | **Local** | Indicator |
| 12 | LED driver (optional) | PCA9685 PWM | 1 | $1.00 | Import | Indicator |
| 13 | Audio amplifier | PAM8403 module | 1 | $0.50 | **Local** | Audio |
| 14 | Speaker | 8Ω 1W, 28mm | 1 | $0.50 | **Local** | Audio |
| 15 | Piezo buzzer | 5V, 2kHz | 1 | $0.30 | **Local** | Audio |
| 16 | Power regulator | 5V buck + 3.3V LDO | 1 set | $1.50 | **Local** | Power |
| 17 | Connectors | USB-C, DC barrel, headers | 1 set | $2.00 | **Local** | Interconnect |
| 18 | Enclosure | 3D printed, **PETG** (180×115×75mm) | 1 | $4.00 | **Local** | Mechanical |
| 19 | Fasteners & misc | Brass M2.5 standoffs, SS screws | 1 set | $1.30 | **Local** | Mechanical |
| | **TOTAL** | | | **$109.90** | | |

### 6.2 Cost Analysis vs. Target

| Metric | Value | Target | Status |
|---|---|---|---|
| Prototype BOM | **$109.90** | ~$80 | **❌ Over by $30** (official IO Board = $35) |
| Production BOM (est.) | $48–52 | ≤$50 | ⚠️ Borderline — needs custom carrier |
| Cost delta source | Official CM4 IO Board ($35) vs custom carrier ($15 production) | | +$20 prototype-only cost |
| Production savings | Custom carrier (-$20), CM4 Lite (-$5), bulk pricing (-$10) | | Feasible path to $48 |

**Decision:** Accept $110 prototype cost — official IO Board validates full architecture. Production uses custom $15 carrier board → meets $50 MAKER target.

### 6.3 Local Content Analysis

| Category | Items | Local Value | Import Value |
|---|---|---|---|
| Compute (CM4 + IO Board) | 2 | $0 | **$70.00** |
| Displays | 2 | $0 | $15.00 |
| I/O PCB + assembly (FR-4, TPTPCB) | 1 | $2.00 | $0 |
| Passive components | ~20 | $3.00 | $2.50 |
| Mechanical (PETG enclosure, Al heatsink, brass standoffs) | ~10 | **$6.80** | $0 |
| Active ICs (imported) | ~5 | $0 | $4.00 |
| Audio components | 3 | $1.30 | $0 |
| Connectors, cables | ~6 | $3.00 | $1.50 |
| **TOTAL** | | **$16.10** (14.6%) | **$93.00** (85.4%) |

**⚠️ MAKER prototype local content: ~15% — well below 60% target.**

**Root cause:** Official CM4 IO Board ($35) + CM4 module ($35) = $70 imported compute dominates BOM.

**Path to 60% in production:**
- Custom carrier PCB replaces $35 IO Board → $15 local PCB assembly → shifts $20 to local
- CM4 module ($35 import) remains — unavoidable
- With custom carrier: local ~$36 (45%) / import ~$44 (55%) — still below 60%
- Reaching 60% requires higher local assembly labor value ($10-15 integration + testing labor)
- **Full analysis in Step 3.5 Local Content Assessment**

---

## 7. SIGNAL FLOW — OPERATIONAL SCENARIOS

### 7.1 Normal Operation: Agent Alert → Operator Decision

```
Timeline →
──────────────────────────────────────────────────────────────────────

1. AGENT sends alert via IRONMESH CDM
   │
   ▼
2. F1.1 (native bus) receives CDM message → F1.2 (rule-table) classifies
   as WARNING priority → F1.3 (ring buffer) queues in warning lane
   │
   ▼
3. F2.1 (poll+heartbeat) picks up new alert → F2.2 (static matrix)
   assigns priority level = WARNING → Agent aggregate updated
   │
   ▼
4. System FSM: ALL_NOMINAL → ALERT_ACTIVE
   Sync protocol → Operator FSM: IDLE → REVIEWING
   │
   ▼
5. F3.1 (fixed zones): ALERT BAR turns yellow, shows message
   F3.3 (escalating cascade): visual flash starts
   F3.4 (dedicated LED): Agent LED turns yellow
   F3.1 (button legend zone): updates to show REVIEWING actions
   │
   ▼
6. [OPERATOR SEES ALERT — READS DETAILS]
   │
   ├──► If no response in T1 (e.g., 10s):
   │    F3.3 adds audio beep (escalation stage 2)
   │
   ├──► If no response in T2 (e.g., 30s):
   │    F3.3 adds haptic (escalation stage 3)
   │
   ▼
7. Operator presses [B1: Acknowledge]
   F4.1 (HW interrupt path for buttons via I2C expander)
   → F4.2 (layered mapping): B1 in REVIEWING = "Acknowledge Alert"
   → Operator FSM: REVIEWING → DECIDING
   │
   ▼
8. F3.1 updates: shows action preview ("Approve Agent-2 patrol?")
   Button legend updates: [B1:Approve] [B2:Reject] [B3:Details]
   │
   ▼
9. Operator presses [B1: Approve] → graduated confirmation
   F4.3: WARNING level = two-step sequential
   → First press: shows confirmation dialog
   → Second press within 5s window: CONFIRMED
   │
   ▼
10. Operator FSM: DECIDING → CONFIRMING → IDLE
    System FSM: ALERT_ACTIVE → ACTION_PEND → EXECUTING → ALL_NOMINAL
    │
    ▼
11. F4.4 (CDM direct): formats approval as CDM command → transmits
    Audit logger: records decision + operator FSM state + timestamp
    Agent LED returns to green

    Total operator workflow: ~5-30 seconds (operator-paced)
```

### 7.2 Emergency: E-Stop Activation

```
Timeline →
──────────────────────────────────────────────────────────────────────

1. Operator presses E-STOP (mushroom button)
   │
   ▼
2. HW interrupt (GPIO4, falling edge) — bypasses I2C, bypasses all SW
   │
   ├──► ISR fires in <1ms
   │    → Operator FSM: [any state] → EMERGENCY (immediate)
   │    → System FSM: [any state] → FAULT (immediate)
   │
   ▼
3. F4.4 (CDM direct): HALT-ALL command → all agents
   Latency: <60ms total from button press
   │
   ▼
4. F3.1: full-screen EMERGENCY overlay (red background)
   F3.3: continuous audio alarm
   F3.4: all LEDs blink red
   │
   ▼
5. RECOVERY: Operator must physically reset E-stop (twist to release)
   + press [B1: Resume] to exit EMERGENCY state
   → Deliberate two-action reset prevents accidental resumption
```

---

## 8. DESIGN RULES COMPLIANCE CHECK

### 8.1 P&B 4 Basic Rules

| Rule | Status | Evidence |
|---|---|---|
| **Clarity** | ✅ | Each function maps to identifiable component. Dual-track FSM = two simple, visible state tables. Button → function mapping shown on-screen. |
| **Simplicity** | ✅ | Single-rail power. 2-layer PCB. Two flat FSMs instead of one complex HSM. Static priority matrix (no ML/tuning). File-based config (no runtime KV). |
| **Safety** | ✅ | HW interrupt E-stop + HW WDT = defense-in-depth. Graduated confirmation = consequence-proportional. Dual-track FSM = operator state independent of agent failures. |
| **Economy** | ⚠️ | Prototype BOM **$109.90** exceeds $80 target ❌ (official IO Board = $35). Accepted for architecture validation. Production path to ≤$50 via custom carrier ($15). Local content ~15% for prototype — production target ≥60% via local assembly. |

### 8.2 Design Principles Applied

| Principle | Application in Hybrid C+ |
|---|---|
| **Task Division** | Each I2C device has one function (MCP23017=buttons, PCA9685=LEDs, WDT=safety). Each software module = one function. |
| **Self-Help** | E-stop = normally-closed (NC) contact → wire break = safe state. WDT = auto-reset on hang. |
| **Stability** | Operator FSM has defined states with explicit transitions only. No undefined states possible. |
| **Bi-stability** | E-stop: pressed=HALT, released+reset=OPERATIONAL. Clear ON/OFF. |
| **Direct Transmission** | Safety path: HW interrupt → GPIO ISR → CDM halt. No middleware in safety-critical path. |

---

## 9. RISK REGISTER — PHASE 3

| # | Risk | Probability | Impact | Mitigation | Status |
|---|---|---|---|---|---|
| R1 | CM4 supply disruption | Medium | High | Design for CM4 socket → allows pin-compatible replacements. Production: evaluate Banana Pi CM4 compatible. | Open |
| R2 | I2C bus noise on I/O board | Low | Medium | Use pull-ups, keep traces short (<10cm), add ferrite beads if needed. I2C proven on IRONMESH at same speeds. | Open |
| R3 | HW debounce circuit tuning | Low | Low | RC time constant calculated for ~5ms debounce; 74HC14 threshold provides clean edges. Test with oscilloscope during prototype. | Open |
| R4 | Display latency (HDMI pipeline) | Low | Medium | IRONMESH display framework proven on similar CM4 setup. Target <100ms render-to-pixel for dashboard updates. | Open |
| R5 | Production BOM > $50 target | Medium | High | Committed optimizations: integrate debounce into carrier PCB, CM4 Lite, bulk component pricing. Validate during BOM finalization. | Open |
| R6 | Local content < 60% | High | Medium | See Section 6.3 analysis. Requires custom carrier board in production to shift value to local assembly. | **Critical** |

---

## 10. PHASE 3 PROGRESS

### 10.1 Completed Steps

| Step | Deliverable | Document | Status |
|---|---|---|---|
| **3.1 Preliminary Layout** | Component placement + enclosure shell | `VN_AICC_001_Phase3_Spatial_Layout.md` v1.2 | ✅ Approved |
| **3.2 DfX Review** | 74-item checklist, 49 prototype-applicable | `VN_AICC_001_Phase3_DfX_Scorecard_v0.9.md` | ✅ GO for prototype |
| **3.3 Material Selection** | PETG / FR-4 / Al 6063-T5 / Brass M2.5 | `VN_AICC_001_Phase3_Step3_Material_Selection.md` | ✅ Approved |

### 10.2 Remaining Steps

| Step | Deliverable | Dependency |
|---|---|---|
| **3.4 Tolerance & Interface** | Dimensional tolerances, mating features | Material selection |
| **3.5 Local Content Assessment** | Production local content plan to reach ≥60% | BOM finalization |
| **3.6 Gate 3 Review** | Phase 3→4 gate checklist | All steps complete |

### 10.3 Prototype Build Plan

| Week | Activity | Output |
|---|---|---|
| 1 | Order CM4 + IO Board + displays + components; design I/O carrier PCB | PCB Gerber files sent to TPTPCB (HCMC) |
| 2 | Receive PCB; assemble I/O board; 3D print PETG enclosure (base + cover) | Hardware prototype assembled |
| 3 | Port IRONMESH OS Terminal Edition; implement dual-track FSM | Working software on hardware |
| 4 | Integration testing; E-stop timing verification; UX walkthrough | Validated prototype |
| 5–7 | Iterate on UX, fix bugs, optimize display performance | Release candidate |

### 10.4 Key Design Changes Since v1.0

| Change | v1.0 | v2.0 | Impact |
|---|---|---|---|
| CM4 IO Board | 85×56mm ($5) | **160×90mm ($35)** | Enclosure expanded, BOM +$30 |
| Enclosure | 120–150mm wide, PLA | **180×115×75mm, PETG** | Fits envelope, better heat resistance |
| Prototype BOM | $72.60 | **$109.90** | Accepted for architecture validation |
| Cover attachment | 4 screws | **4 snap-fit clips** | DfA-02: 22→14 fasteners |
| IO Board mounts | 8× M2.5 | **4× M2.5 (corners)** | Sufficient for prototype |
| Top vents | Above heatsink | **Beside display (L+R)** | Heatsink overlaps display in XY |

---

*Document ID: VN-AICC-001-P3-S1-v2.0*
*Method: P&B Chapter 7 — Embodiment Design (RISM-PRAD)*
*Status: REVISED — Dimensions, BOM, materials corrected for 160×90mm IO Board*
