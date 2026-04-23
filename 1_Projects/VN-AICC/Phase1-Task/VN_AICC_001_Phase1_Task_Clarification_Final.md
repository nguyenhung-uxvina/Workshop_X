# VN-AICC-001: PHASE 1 — TASK CLARIFICATION (Final)
## AI Command & Control Console — Pahl & Beitz Systematic Design
### Version 1.0 | Quality Gate Document | 13/02/2026

---

**Document ID:** VN-AICC-001-P1-FINAL-v1.0
**Project:** AI Command & Control Console (AICC)
**Framework:** Pahl & Beitz Systematic Design + D-M-I-R Unified Model
**Phase:** 1 — Task Clarification (Completed)
**Author:** KN Nguyen / Workshop X
**Status:** ✅ READY FOR QUALITY GATE REVIEW

---

## TABLE OF CONTENTS

1. Executive Summary
2. Essential Problem — Finalized
3. Strategic Architecture Decisions
4. Requirements List V1.0
5. Platform Strategy & Variant Architecture
6. IRONMESH Ecosystem Integration
7. Embodiment Pre-Decisions (Architecture)
8. Development Roadmap
9. Phase 1 Quality Gate Checklist
10. D-M-I-R Reflection
11. Phase 2 Entry Conditions

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Vision

AICC (AI Command & Control Console) là nền tảng giao diện người-AI (Human-AI Interface Platform) thuộc hệ sinh thái CORTEX RANGE / IRONMESH. Sản phẩm cho phép con người giám sát, ra quyết định và tương tác với các hệ thống AI tự động thông qua kênh chuyên dụng — từ môi trường dân dụng đến quân sự.

### 1.2 Key Decisions Summary

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| D1 | Essential Problem Level | Level 2 — Medium Abstraction | Balances ambition with focus; opens 8+ solution paths |
| D2 | Ecosystem Strategy | CORTEX-native (standalone fallback) | Built-in market + data flywheel; standalone as risk mitigation |
| D3 | Form Factor Strategy | Multi-form, serial development | Desktop first → Wall → Rack → Vehicle; serial reduces capacity risk |
| D4 | Carrier Board | CM4 IO Board (prototype) → Custom (production) | Validate function first; custom PCB only after design stable |
| D5 | Display Interface | HDMI (primary) + SPI (secondary) | Maximum display flexibility; compute-module-agnostic |
| D6 | OS Architecture | IRONMESH OS Terminal Edition | 100% software platform reuse; single codebase, build flags |
| D7 | First Prototype | AICC-MAKER hardware, PRO architecture | $80 BOM, 3-week timeline; validates function not form |

### 1.3 Project Metrics

| Metric | Target | Basis |
|--------|--------|-------|
| Prototype BOM Cost | ~$80 | CM4 $35 + displays $25 + buttons $10 + misc $10 |
| Prototype Timeline | 3 weeks | MAKER hardware + IRONMESH OS Terminal Edition |
| IRONMESH Component Reuse | ~55% | Compute, comms, power, OS core from existing products |
| New Development | ~45% | Display modules, I/O board, carrier board, enclosures |
| Product Variants | 4 | MAKER ($99) / PRO ($249) / TAC ($499) / RACK ($899) |
| Year 3 Revenue Target | $73K direct + recurring subscriptions | Based on installed base projection |

---

## 2. ESSENTIAL PROBLEM — FINALIZED

### 2.1 P&B 5-Step Abstraction Result

**Step 1 — Eliminate personal preferences:**
Loại bỏ "Stream Deck replacement", "Raspberry Pi project", "OpenClaw controller"

**Step 2 — Omit requirements not directly related to overall function:**
Loại bỏ brand-specific: RPi, OpenClaw, specific display size

**Step 3 — Transform quantitative to qualitative:**
"6 buttons" → "sufficient physical controls for critical decisions"
"7-inch display" → "adequate situational awareness display"

**Step 4 — Generalize results meaningfully:**
"AI agent controller" → "Human-AI interface platform"
"Desktop device" → "Scalable from civilian to military environments"

**Step 5 — Formulate essential problem:**

> **"Nền tảng giao diện người-AI (Human-AI Interface Platform) cho phép con người giám sát, ra quyết định và tương tác với hệ thống AI tự động thông qua kênh chuyên dụng, có khả năng mở rộng từ môi trường dân dụng đến quân sự."**

### 2.2 Solution-Neutral Function Statement

> **"Cung cấp dedicated situational awareness và decision authority cho người dùng đối với các tác nhân AI hoạt động bán tự chủ, trong điều kiện vận hành đa dạng từ văn phòng đến chiến trường."**

### 2.3 Abstraction Validation — Solution Paths Opened

| Solution Path | Khả thi? | Ghi chú |
|--------------|----------|---------|
| Compact desktop device | ✅ | Reference product (AICC-MAKER/PRO) |
| Wall-mounted panel | ✅ | C2 room installation |
| 19" rack-mount module | ✅ | Data center / ship CIC |
| Vehicle-mount tablet | ✅ | Mobile C2 |
| Wearable notification device | ✅ | Field operator alert |
| Software-only (app on tablet) | ✅ | Budget variant |
| Voice-only interface | ✅ | Hands-free environments |
| Large multi-screen console | ✅ | Joint Operations Center |

→ **8+ solution paths** = abstraction đủ rộng nhưng vẫn focused. Level 2 là sweet spot.

### 2.4 Fictitious Constraints Eliminated

| Removed Constraint | Original Assumption | Why Fictitious |
|-------------------|---------------------|----------------|
| "Raspberry Pi 4" | Implicit hardware choice | Locks to single compute platform |
| "6 buttons exactly" | SI.04 original | Arbitrary — variant-dependent |
| "OpenClaw" | Implicit software | Locks to single AI framework |
| "Desktop only" | Implicit form factor | Limits market addressability |
| "7-inch display" | Implicit size | Platform should support multiple sizes |

---

## 3. STRATEGIC ARCHITECTURE DECISIONS

### 3.1 Decision D4: Carrier Board Strategy

**Decision:** Serial development — CM4 IO Board cho prototype → Custom carrier cho production

**Analysis:**

| Option | Cost | Timeline | Risk | Production Fit |
|--------|------|----------|------|----------------|
| A: CM4 IO Board (off-the-shelf) | $35 | 0 weeks | Low | Poor (160×90mm oversized) |
| B: Custom carrier board | $50-100 prototype | 40-60h engineering | Medium | Excellent (~55×40mm) |
| C: Compact third-party (Piunora/219) | $40-80 | 0 weeks | Medium (supply) | Fair |

**Rationale:** Không cần custom PCB để validate essential function. Custom PCB chỉ justify khi design đã stable qua prototype testing. V-SMASH precedent: custom Jetson carrier thành công với $50 local fab.

**Serial Development Timeline:**
```
Phase A (Prototype):  CM4 IO Board → validate software + UI + interaction
Phase B (Pre-production): Custom carrier board → optimize size + cost + integration  
Phase C (Production): Custom carrier → mass production optimization
```

### 3.2 Decision D5: Display Interface Strategy

**Decision:** HDMI (primary) + SPI (secondary)

**Interface Comparison:**

| Interface | Cost | Size Range | Speed | Ecosystem | Compute-Agnostic? |
|-----------|------|-----------|-------|-----------|-------------------|
| SPI | $5-15 | 2.4"-4" | ~15fps | Medium | ✅ Yes |
| HDMI | $15-40 | 3.5"-15"+ | 60fps | Very Large | ✅ Yes |
| DSI (MIPI) | $10-25 | 3.5"-7" | 60fps | Small | ❌ RPi-specific |

**Rationale:**
- HDMI cho main display: bất kỳ HDMI display nào đều compatible — platform-enabling decision
- SPI cho secondary panel: status LEDs, OLED per-button, low-bandwidth data
- Tại sao không DSI? DSI ecosystem nhỏ hơn HDMI, và khi chuyển CM4→Jetson→custom SBC, HDMI availability cao hơn
- Platform strategy cần interface agnostic to compute module — HDMI đạt tiêu chí

### 3.3 Decision D6: OS Architecture

**Decision:** IRONMESH OS Terminal Edition

**Options Evaluated:**

| Option | Reuse | Maintenance | Performance | Upgrade Path |
|--------|-------|-------------|-------------|-------------|
| A: Full IRONMESH OS | 100% | Single codebase | Overkill | Full |
| B: Lightweight AICC-OS | 0% | 2 OS tracks | Optimal | Limited |
| **C: Terminal Edition** | **100%** | **Single codebase** | **Optimized** | **Full** |

**Architecture:**
- Cùng codebase IRONMESH OS, khác build configuration (feature flags)
- Giữ: CDM + networking + security + display framework
- Loại bỏ: AI inference engine + sensor drivers (không cần cho terminal)
- Upgrade path: AICC-TAC có thể enable AI inference khi cần (edge processing)
- Analogy: automotive ECU — cùng base OS, different feature flags

### 3.4 Decision D7: First Prototype Target

**Decision:** AICC-MAKER hardware, AICC-PRO architecture

| Variant | Dev Cost | Dev Time | Learning Value | Market Signal |
|---------|----------|----------|----------------|---------------|
| AICC-MAKER | $200 | 2-3 weeks | High | Weak |
| AICC-PRO | $500 | 4-5 weeks | Very High | Strong |
| AICC-TAC | $1,500 | 8-10 weeks | Medium | Strong |

**Prototype Configuration:**
```
Hardware:   CM4 IO Board + off-the-shelf HDMI display + 3D printed case
Software:   IRONMESH OS Terminal Edition (from day 1)
I/O:        Custom PCB đơn giản (buttons + LEDs + I2C connector)
BOM:        ~$80 (CM4 $35 + displays $25 + buttons $10 + misc $10)
Timeline:   3 weeks to working prototype
```

**P&B Rationale:** Prototype validates FUNCTION, not FORM:
- ✅ AI agent communication (CORTEX CDM flow)
- ✅ Display rendering (dashboard + action panel)
- ✅ Physical interaction (button press → approve/reject)
- ✅ State machine (idle → alert → action → confirm)
- ✅ Multi-agent monitoring

Sau function validation, chuyển sang AICC-PRO = embodiment optimization only (better display, enclosure, battery) — không phải re-architecture.

---

## 4. REQUIREMENTS LIST V1.0

### 4.1 Platform Requirements (PL)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | PL.01 | Platform-neutral compute socket | Support CM4 + future modules | T: Compatibility test |
| D | PL.02 | Multi-form factor architecture | ≥ 4 form factors from shared core | D: Architecture review |
| D | PL.03 | CORTEX RANGE native integration | Full CDM compliance | T: Integration test |
| D | PL.04 | Software-agnostic application layer | Swappable CORTEX/standalone modes | T: Functional test |
| W | PL.05 | Cross-platform design language | Consistent across variants | I: Visual inspection |
| D | PL.06 | IRONMESH CDM compatibility | Full protocol compliance | T: Protocol validation |
| D | PL.07 | IRONMESH OS bootable | Terminal Edition build | T: Boot test |
| D | PL.08 | Multi-agent support | ≥ 4 simultaneous AI agents | T: Load test |
| W | PL.09 | Agent priority visualization | Color-coded urgency levels | T: UI test |

### 4.2 Functional Requirements (FN)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | FN.01 | AI agent status display | Real-time, ≤ 500ms latency | T: Latency measurement |
| D | FN.02 | Decision approval/rejection | 2-step confirmation for critical | T: Workflow test |
| D | FN.03 | Alert notification | Visual + audio + haptic | T: Multi-modal test |
| D | FN.04 | Agent configuration | View/modify agent parameters | T: Config test |
| D | FN.05 | Logging & audit trail | Timestamped, tamper-evident | T: Integrity test |
| W | FN.06 | Multi-screen support | Primary + secondary display | T: Dual display test |
| D | FN.07 | State machine operation | Idle → Alert → Action → Confirm | T: State transition test |
| W | FN.08 | Voice alert capability | TTS for critical notifications | T: Audio test |

### 4.3 Safety Requirements (SF)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | SF.01 | Fail-safe default state | All agents halt on AICC failure | T: Failure injection |
| D | SF.02 | Emergency stop button | Hardware kill switch, red | T: Response time test |
| D | SF.03 | Unintended action prevention | Physical guard + 2-step confirm | T: Error injection |
| D | SF.04 | Connection loss handling | Visual warning ≤ 1s, auto-safe ≤ 5s | T: Disconnect test |
| D | SF.05 | Human-in-the-loop confirmation | 2-step for ALL critical actions | T: Workflow test |

### 4.4 Interface & Interaction (SI)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | SI.01 | Primary display | HDMI, ≥ 3.5" (variant dependent) | T: Display validation |
| W | SI.02 | Secondary display | SPI, status/info panel | T: Display validation |
| D | SI.03 | Physical buttons | ≥ 6 programmable (variant dependent) | T: Button response |
| D | SI.04 | LED status indicators | ≥ 4 RGB LEDs | T: Visual check |
| D | SI.05 | Button tactile feedback | Audible click, ≥ 0.5N force | T: Tactile measurement |
| W | SI.06 | Backlit buttons | For low-light operation | T: Illumination test |
| D | SI.07 | Network connectivity | WiFi + Ethernet + LoRa (optional) | T: Connectivity test |
| D | SI.08 | USB port | ≥ 1 USB 2.0 for expansion | T: Peripheral test |
| W | SI.09 | Audio output | Speaker or 3.5mm jack | T: Audio test |
| D | SI.10 | I2C expansion bus | For additional modules | T: Protocol test |
| D | SI.11 | Audit log storage | Timestamped, tamper-evident | T: Log integrity |
| W | SI.12 | Voice alert capability | TTS engine integration | T: TTS output |

### 4.5 Operational Requirements (OP)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | OP.01 | Boot time | ≤ 30s to operational | T: Timing measurement |
| D | OP.02 | Continuous operation | ≥ 24h without restart | T: Endurance test |
| W | OP.03 | Battery backup (portable) | ≥ 4h (PRO/TAC variants) | T: Battery test |
| D | OP.04 | Power input | 5-12V DC, USB-C preferred | T: Power range test |
| D | OP.05 | Multi-AICC synchronization | ≥ 4 units coordinated | T: Multi-unit test |

### 4.6 Environmental Requirements (EV)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | EV.01 | Operating temperature (civilian) | 0°C to +45°C | T: Thermal test |
| W | EV.02 | Operating temperature (military) | -10°C to +55°C | T: MIL-STD-810 |
| D | EV.03 | IP rating (civilian) | IP41 minimum (dust/drip) | T: Ingress test |
| W | EV.04 | IP rating (military) | IP54 minimum (TAC variant) | T: Ingress test |
| W | EV.05 | Vibration resistance (military) | MIL-STD-810 Method 514 | T: Vibration test |

### 4.7 Ergonomic Requirements (ER)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | ER.01 | One-hand operation | Primary functions accessible | T: Usability test |
| D | ER.02 | Display readability | Minimum 300 nit brightness | T: Luminance measurement |
| W | ER.03 | Sunlight readability (TAC) | ≥ 1000 nit (TAC variant) | T: Outdoor test |
| D | ER.04 | Weight (MAKER/PRO) | ≤ 500g | A: Weight measurement |
| W | ER.05 | Weight (TAC) | ≤ 1.5kg with battery | A: Weight measurement |
| W | ER.06 | Gloved operation (TAC) | Usable with combat gloves | T: Gloved test |

### 4.8 Manufacturing & Cost (MF)

| D/W | ID | Requirement | Value/Target | Verification |
|-----|-----|-------------|-------------|-------------|
| D | MF.01 | Local content ratio | ≥ 60% (target 70%) | A: BOM analysis |
| D | MF.02 | Target BOM — MAKER | ≤ $50 | A: Cost analysis |
| D | MF.03 | Target BOM — PRO | ≤ $120 | A: Cost analysis |
| W | MF.04 | Target BOM — TAC | ≤ $200 | A: Cost analysis |
| D | MF.05 | Assembly time | ≤ 30 min per unit | T: Assembly time study |
| D | MF.06 | PCB fab capability | Local 2-layer minimum | D: Vendor audit |
| D | MF.07 | 3D printable enclosure (prototype) | FDM compatible | T: Print test |

**Verification Legend:** T = Test | A = Analysis | D = Design Review | I = Inspection

**Total Requirements: 56 items** (38 Demand + 18 Wish)

---

## 5. PLATFORM STRATEGY & VARIANT ARCHITECTURE

### 5.1 Platform Core vs. Variant-Specific

```
PLATFORM CORE (shared across ALL variants):
┌─────────────────────────────────────────────────┐
│  IRONMESH OS Terminal Edition                   │
│  ├── CDM Protocol Engine                        │
│  ├── State Machine Framework                    │
│  ├── Display Renderer (HDMI + SPI drivers)      │
│  ├── Input Handler (Button + I2C + USB)         │
│  ├── Networking Stack (WiFi + ETH + LoRa opt.)  │
│  ├── Security & Auth                            │
│  └── Audit Logger                               │
│                                                 │
│  HARDWARE PLATFORM:                             │
│  ├── Compute Module Socket (CM4 initial)        │
│  ├── HDMI Output (primary display)              │
│  ├── SPI Bus (secondary display)                │
│  ├── I2C Expansion Bus                          │
│  ├── USB 2.0 Port                               │
│  └── Power Management (5-12V input)             │
└─────────────────────────────────────────────────┘

VARIANT-SPECIFIC ADDITIONS:
┌──────────┬──────────┬──────────┬──────────┐
│  MAKER   │   PRO    │   TAC    │   RACK   │
├──────────┼──────────┼──────────┼──────────┤
│ 3.5" LCD │ 5" IPS   │ 7" Mil   │ No built │
│ 6 buttons│ 8 buttons│ 12 btns  │ in panel │
│ 3D print │ Aluminum │ Rugged   │ 19" 1U   │
│ USB-C pwr│ Battery  │ MIL-conn │ Rack pwr │
│ WiFi only│ WiFi+ETH │ Full+LoRa│ Full+LoRa│
│ No audio │ Speaker  │ Headset  │ Multi-ch │
│ $99      │ $249     │ $499     │ $899     │
└──────────┴──────────┴──────────┴──────────┘
```

### 5.2 Software Architecture — 3-Layer Stack

```
┌──────────────────────────────────────────────┐
│             AICC SOFTWARE STACK               │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │  APP LAYER (Swappable)                  │  │
│  │  ┌──────────┐  ┌────────────────────┐   │  │
│  │  │ CORTEX   │  │ STANDALONE         │   │  │
│  │  │ RANGE    │  │ (OpenClaw /        │   │  │
│  │  │ Agent    │  │  Custom Agent      │   │  │
│  │  │          │  │  Manager)          │   │  │
│  │  └──────────┘  └────────────────────┘   │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │  MIDDLEWARE (Shared — Platform Core)     │  │
│  │  Message Queue │ State Machine │ Auth   │  │
│  │  Display Renderer │ Input Handler       │  │
│  │  → IRONMESH CDM compatible              │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │  HAL (Hardware Abstraction Layer)       │  │
│  │  Display driver │ Button driver         │  │
│  │  Network │ Power │ Sensors              │  │
│  └─────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

**Nguyên tắc P&B:** "Division of tasks" — tách app layer (variant-specific) khỏi middleware (platform-shared). CORTEX integration ở APP layer, không ở HAL.

### 5.3 Phased Form Factor Development

```
Phase A (Month 1-2): DESKTOP ONLY (AICC-MAKER prototype)
  → Validate core platform on simplest form factor
  → 80% of learning happens here
  → Prototype cost: ~$80

Phase B (Month 3-4): + WALL MOUNT adapter
  → Bracket adapter for existing desktop unit
  → Minimal new engineering (~15h)
  → Validates CORTEX integration in C2 room

Phase C (Month 5-6): + RACK MOUNT (if demand confirmed)
  → 19" rack tray for desktop unit OR new chassis
  → Decision based on actual customer feedback

Phase D (Month 7+): + VEHICLE MOUNT (if contract exists)
  → Only develop with confirmed military requirement
  → Highest engineering cost → only justify with revenue

KEY INSIGHT: Phases B, C, D are ADAPTER designs cho cùng core unit.
Platform core không thay đổi — chỉ enclosure + connectors + mounting.
```

---

## 6. IRONMESH ECOSYSTEM INTEGRATION

### 6.1 AICC Position in IRONMESH

```
IRONMESH ECOSYSTEM:

SENSORS (Eyes)          AICC (Interface)         ACTUATORS (Hands)
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│ VN-LOMAH    │────┐    │              │    ┌────│ V-SMASH      │
│ VN-CAM      │    │    │   AICC       │    │    │ RCWS         │
│ Radar feed  │    ├───►│   Human-AI   │────┤    │ Target drone │
│ Radio       │    │    │   Terminal   │    │    │ USV          │
│ GPS/INS     │────┘    │              │    └────│ Catapult     │
└─────────────┘         └──────┬───────┘         └──────────────┘
                               │
                        ┌──────▼───────┐
                        │ IRONMESH OS  │
                        │ + 6 AI       │
                        │   Engines    │
                        └──────────────┘

AICC provides the HUMAN DECISION POINT between sensing and action.
```

### 6.2 Component Reuse Analysis

| Component | AICC Usage | IRONMESH Shared? | Reuse Source |
|-----------|-----------|-----------------|-------------|
| Compute module (CM4/Jetson) | Processing core | ✅ 80% across IRONMESH | Existing part |
| Camera module (VN-CAM) | Optional add-on | ✅ 100% across IRONMESH | Existing product |
| LoRa/BLE comms | Mesh networking | ✅ 100% across IRONMESH | Existing part |
| Power management board | Power regulation | ✅ 80% across IRONMESH | Existing part |
| IRONMESH OS core | Software platform | ✅ 100% across IRONMESH | Existing platform |
| IRONMESH CDM | Data protocol | ✅ 100% across IRONMESH | Existing standard |
| Display modules | Main + status | ❌ AICC-specific | New development |
| Button/I/O board | User input | ❌ AICC-specific | New development |
| Carrier board | PCB backbone | ❌ AICC-specific | New development |
| Enclosures | Physical housing | ⚠️ Design language shared | New per variant |

**Reuse Score: ~55%** — AICC chỉ cần develop ~45% new components.

### 6.3 Revenue Model

| Variant | Price | Margin | Volume Y1 | Volume Y3 | Revenue Y3 |
|---------|-------|--------|-----------|-----------|------------|
| AICC-MAKER | $99 | 50% | 50 | 200 | $20K |
| AICC-PRO | $249 | 55% | 20 | 100 | $25K |
| AICC-TAC | $499 | 60% | 5 | 30 | $15K |
| AICC-RACK | $899 | 55% | 2 | 15 | $13K |
| **TOTAL** | | | **77** | **345** | **$73K** |

+ IRONMESH OS subscription per AICC unit: $3-10K/year (recurring)

---

## 7. EMBODIMENT PRE-DECISIONS (Architecture)

Các quyết định kiến trúc sau đã được phân tích và confirmed trong Phase 1, sẽ constraint Phase 2 concept generation:

### 7.1 Hardware Architecture Baseline

```
AICC-MAKER PROTOTYPE HARDWARE:
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌──────────────┐   ┌───────────────────────┐   │
│  │ RPi CM4      │   │ HDMI Display 3.5-5"   │   │
│  │ IO Board     │──►│ (primary)             │   │
│  │ (prototype)  │   └───────────────────────┘   │
│  │              │   ┌───────────────────────┐   │
│  │              │──►│ SPI OLED 1.3"         │   │
│  │              │   │ (secondary status)    │   │
│  └──────┬───────┘   └───────────────────────┘   │
│         │                                       │
│    ┌────▼────────────────────────────────────┐   │
│    │ Custom I/O Board (Simple PCB)           │   │
│    │ ┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐   │   │
│    │ │ BTN ││ BTN ││ BTN ││ BTN ││ BTN │   │   │
│    │ │  1  ││  2  ││  3  ││  4  ││  5  │   │   │
│    │ └─────┘└─────┘└─────┘└─────┘└─────┘   │   │
│    │ ┌─────┐  ┌────────────────┐            │   │
│    │ │E-STOP│  │ RGB LED × 4    │            │   │
│    │ └─────┘  └────────────────┘            │   │
│    │ I2C ◄──── to CM4 IO Board              │   │
│    └────────────────────────────────────────┘   │
│                                                 │
│  ┌──────────────────────────────────────────┐   │
│  │ 3D Printed Enclosure (FDM)               │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  Power: USB-C 5V/3A                             │
└─────────────────────────────────────────────────┘
```

### 7.2 Production Evolution Path

```
Prototype (Phase A)           →  Production (Phase B+)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CM4 IO Board ($35, 160×90mm)  →  Custom carrier (~$15, 55×40mm)
Off-the-shelf HDMI display    →  Matched display module per variant
3D printed enclosure          →  Injection molded / CNC aluminum
Flying wire I/O               →  Integrated I/O on carrier board
USB-C power only              →  Multi-input power management
```

---

## 8. DEVELOPMENT ROADMAP

### 8.1 Phase Overview (8-Week Plan)

| Phase | Duration | Focus | Deliverable |
|-------|----------|-------|-------------|
| **P1: Task Clarification** | ✅ Complete | Requirements + Essential Problem | This document |
| **P2: Conceptual Design** | Week 1-3 | Function structure + Morphological matrix + VDI 2225 | Principle solution |
| **P3: Embodiment Design** | Week 4-6 | Layout, BOM, prototype build | Working prototype |
| **P4: Detail Design** | Week 7-8 | Production drawings, test protocol | Production-ready docs |

### 8.2 Phase 2 Entry Plan

| Task | Effort | Priority |
|------|--------|----------|
| Create Function Structure (overall + sub-functions) | 4h | Critical |
| Build Morphological Matrix (solution principles per sub-function) | 4h | Critical |
| Generate 3-4 concept variants from matrix | 2h | Critical |
| VDI 2225 evaluation with IRONMESH reuse criterion | 3h | Critical |
| Select principle solution | 1h | Critical |
| **Phase 2 Total** | **~14h** | |

---

## 9. PHASE 1 QUALITY GATE CHECKLIST

### 9.1 P&B Phase 1 Completion Criteria

| Criterion | Status | Evidence |
|-----------|--------|----------|
| Essential problem formulated (solution-neutral) | ✅ | Section 2 |
| Requirements list complete (D/W classified) | ✅ | Section 4 — 56 items |
| Verification methods assigned (T/A/D/I) | ✅ | Section 4 — all rows |
| Stakeholder analysis complete | ✅ | Vietnamese military + CORTEX users identified |
| Fictitious constraints eliminated | ✅ | Section 2.4 — 5 constraints removed |
| Solution space validated (multiple paths open) | ✅ | Section 2.3 — 8+ paths |
| Budget/timeline constraints documented | ✅ | Section 1.3 + Section 8 |
| External constraints identified (standards, regulations) | ✅ | MIL-STD-810, TCVN referenced |

### 9.2 D-M-I-R Quality Gate Additions

| Criterion | Status | Evidence |
|-----------|--------|----------|
| Ecosystem integration strategy defined | ✅ | CORTEX-native + standalone fallback |
| Component reuse mapped | ✅ | Section 6.2 — 55% reuse |
| Capacity constraint acknowledged | ✅ | Serial development strategy |
| Hidden trade-offs identified | ✅ | CORTEX dependency loop analyzed |
| Platform vs. variant separation clear | ✅ | Section 5.1 |

### 9.3 Gate Decision

**☑️ PHASE 1 PASS — Ready to proceed to Phase 2: Conceptual Design**

Open items carried forward:
- Stakeholder validation (1 CORTEX user + 1 military operator) — can proceed in parallel with Phase 2
- Requirement conflicts (cost vs. ruggedization for TAC variant) — resolve during VDI 2225 evaluation

---

## 10. D-M-I-R REFLECTION

### 10.1 Methodology Learnings

| Aspect | Learning |
|--------|---------|
| **Abstraction value** | Eliminating "RPi + OpenClaw" opened 8+ solution paths instead of 1 |
| **Platform thinking** | P&B Chapter 9 platform construction directly applicable to multi-form strategy |
| **Ecosystem integration** | CORTEX-native creates built-in market but adds dependency risk — mitigate with standalone fallback |
| **Capacity awareness** | Multi-form from start requires serial development (Musk principle) — 25h/week constraint drives sequencing |
| **Component reuse** | ~55% reuse from IRONMESH significantly reduces development effort |
| **Serial development** | CM4 IO Board → Custom carrier avoids premature optimization of hardware |
| **Function vs. Form** | MAKER prototype validates all essential functions at 1/6 the cost of TAC prototype |

### 10.2 Time Investment — Phase 1

| Activity | Estimated Hours | Actual |
|----------|----------------|--------|
| Requirements list creation | 4h | ~3h |
| Essential problem abstraction | 2h | ~2h |
| Platform strategy analysis | 3h | ~3h |
| Embodiment architecture decisions | 4h | ~3h |
| Documentation | 2h | ~2h |
| **Total Phase 1** | **15h** | **~13h** |

→ Efficiency gain: systematic approach reduced exploration time. D-M-I-R coaching prevented "solution-first" pattern.

### 10.3 Key Risk Register

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| CORTEX adoption slow → AICC no market | High | Medium | Standalone fallback mode |
| CM4 EOL before production | Medium | Low | CM4 production guaranteed 2030+; custom carrier enables module swap |
| Engineering capacity overrun | High | Medium | Serial development; MAKER-first reduces parallel work |
| Display supply chain | Medium | Medium | HDMI standard = thousands of options |
| Custom carrier board failure | Medium | Low | V-SMASH precedent; local fab proven |

---

## 11. PHASE 2 ENTRY CONDITIONS

### 11.1 Inputs to Phase 2

Phase 2 (Conceptual Design) will use these Phase 1 outputs:

1. **Essential Problem Statement** (Section 2) → drives function structure creation
2. **Requirements List V1.0** (Section 4) → evaluation criteria for VDI 2225
3. **Platform Architecture** (Section 5) → constrains concept generation to platform-compatible solutions
4. **Embodiment Pre-Decisions** (Section 7) → HDMI+SPI, CM4, IRONMESH OS Terminal Edition
5. **IRONMESH Reuse Map** (Section 6) → reuse as explicit evaluation criterion

### 11.2 Phase 2 Scope

```
Phase 2 Deliverables:
├── Function Structure (Overall → Sub-functions)
│   ├── Main function: "Provide human decision authority over AI agents"
│   ├── Sub-functions aligned with IRONMESH integration points
│   └── Energy/Signal/Material flow diagram
│
├── Morphological Matrix
│   ├── Solution principles per sub-function
│   ├── IRONMESH-compatible options highlighted
│   └── 3-4 concept variants generated
│
├── VDI 2225 Concept Evaluation
│   ├── Weighted criteria from Requirements List
│   ├── IRONMESH reuse as evaluation criterion
│   ├── Systematic scoring of all variants
│   └── Selected principle solution with justification
│
└── Principle Solution Documentation
    ├── Selected concept description
    ├── Critical interface definitions
    └── Risk assessment for Phase 3
```

---

*Document ID: VN-AICC-001-P1-FINAL-v1.0*
*Framework: Pahl & Beitz Systematic Design + D-M-I-R Unified Model*
*Quality Gate: PASS*
*Date: 13/02/2026*
*Next Phase: P2 — Conceptual Design*
