---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2206:2021 — System Design
mode: RETROACTIVE
step: SA1 + SA2 (combined for retro efficiency)
---

# SA1: SYSTEM CONTEXT + SA2: DOMAIN ALLOCATION — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE
**Standard:** VDI 2206:2021, Steps SA1-SA2

---

## SA1: SYSTEM CONTEXT DIAGRAM (Black-Box)

```
                         EXTERNAL ENTITIES
                         ═════════════════

  Xạ thủ (Gunner) ─────────────────────────┐
  [traverse, elevation, trigger,            │
   body weight ≤100kg]                      │
                                            ▼
  Huấn luyện viên ──────────┐     ╔═══════════════════════════════╗
  (Instructor)               │     ║                               ║
  [scenario select,          ├────▶║   VN-CUAV-SIM-001 PA-2       ║──▶ Training outcome
   inject, pause/resume]     │     ║   STANDARD                   ║    (skill acquisition,
                             │     ║                               ║     score, progression)
  Điện lưới 220V/50Hz ──────┤     ║   "Huấn luyện xạ thủ bắn    ║
  [single phase, 20A max]   ├────▶║    C-UAV/USV trên biển       ║──▶ AAR reports
                             │     ║    trong môi trường           ║    (CSV, PDF, replay)
  Phòng huấn luyện ─────────┤     ║    mô phỏng"                 ║
  [6×8m, trần ≥3m,          │     ║                               ║──▶ Nhiệt thải (~2kW)
   tối được, AC 25-35°C]    │     ╚═══════════════════════════════╝
                             │                    ▲
  Weapon modules (MWI) ──────┘                    │
  [DSHK, NSV, KPVT, ZU-23-2, PKM]               │
  [NFC tag + 12-pin MIL connector]               │
                                                  │
  CORTEX network (future) ────────────────────────┘
  [LAN/WAN for multi-station, PA-6/PA-9 only]
```

### EXTERNAL INTERFACES

| IF-ID | External Entity | Direction | Type | Specification | Priority |
|-------|----------------|-----------|------|---------------|----------|
| EX-01 | Xạ thủ | IN | Force + Signal | Traverse/elevation torque, trigger pull 1.5-4kg | DEMAND |
| EX-02 | Huấn luyện viên | IN | Signal | GUI commands, scenario selection, inject | DEMAND |
| EX-03 | Điện lưới | IN | Energy | 220V ±10%, 50Hz, ≤5kW (E-01, E-02) | DEMAND |
| EX-04 | Phòng huấn luyện | IN | Spatial | 6×8m, trần ≥3m, tối được (G-01) | DEMAND |
| EX-05 | Weapon module | IN | Material + Data | Quick-release plate + NFC tag + 12-pin | DEMAND |
| EX-06 | Xạ thủ | OUT | Signal + Energy | Visual 180° + audio 5.1 + recoil + motion | DEMAND |
| EX-07 | Huấn luyện viên | OUT | Signal + Data | God-eye view + scores + AAR replay | DEMAND |
| EX-08 | CORTEX LAN | BIDI | Data | Multi-station sync (PA-6/PA-9 only) | WISH |

### SYSTEM BOUNDARY DECISIONS

| Item | INSIDE (WX designs) | OUTSIDE (interface to) |
|------|--------------------|-----------------------|
| Weapon cradle + MWI | ✅ | — |
| Weapon modules (5 types) | ✅ | — |
| Motion platform (2-DOF) | ✅ | — |
| Projection screen + frame | ✅ | — |
| Projectors (3×) | COTS — specify + integrate | Manufacturer |
| Render PC + GPU | COTS — specify + integrate | Manufacturer |
| Instructor PC | COTS — specify | Manufacturer |
| Unity SW + all game logic | ✅ | Unity engine (license) |
| UPS | COTS — specify | Manufacturer |
| Phòng huấn luyện | — | ✅ Customer provides |
| Điện lưới | — | ✅ Customer provides |

**GREY ZONE (CEO decides):**
- ESP32 MCU boards: buy dev boards or design custom PCB? → **CEO: dev boards for PA-2 prototype, custom PCB for production (Phase 4)**
- Audio system: integrated vs separate amplifier? → **CEO: separate amp, easier to upgrade**

---

## SA2: SYSTEM ARCHITECTURE — DOMAIN ALLOCATION

### Block Diagram

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                        VN-CUAV-SIM-001 PA-2 STANDARD                     ║
║                                                                           ║
║  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────────┐ ║
║  │   MECH MODULE    │    │   ELEC MODULE    │    │    SW MODULE         │ ║
║  │                  │    │                  │    │                      │ ║
║  │  SS1-M: Cradle   │    │  SS1-E: Encoders │    │  SS2-SW: Unity      │ ║
║  │  body, bearings, │◄──►│  (Az+El), trigger│◄──►│  render engine,     │ ║
║  │  quick-release,  │IF01│  switch, NFC,    │IF02│  ballistic 6DOF,    │ ║
║  │  trigger mech    │    │  solenoid driver, │    │  target AI, ocean   │ ║
║  │                  │    │  mag brake driver │    │  FFT, effects       │ ║
║  │  SS1-M: Weapon   │    │                  │    │                      │ ║
║  │  modules (5 type)│    │  SS2-E: 3× proj, │    │  SS4: Scoring,      │ ║
║  │                  │    │  audio amp+spkr,  │    │  AAR, session log,  │ ║
║  │  SS3-M: Platform │    │  HDMI splitter   │    │  trainee profile,   │ ║
║  │  frame, seat,    │◄──►│                  │    │  report export      │ ║
║  │  harness, hard   │IF03│  SS3-E: 2× linear│◄──►│                      │ ║
║  │  stops           │    │  actuator, ESP32  │IF04│  SS5: Instructor    │ ║
║  │                  │    │  PID controller   │    │  GUI, god-eye,      │ ║
║  │  SS2-M: Screen   │    │                  │    │  scenario author,   │ ║
║  │  frame, curved   │    │  SS1-E: ESP32    │    │  inject, multi-stn  │ ║
║  │  surface         │    │  weapon MCU       │    │                      │ ║
║  │                  │    │  (NFC+recoil+brake)│   │  F7-SW: Auto-config │ ║
║  └──────────────────┘    └──────────────────┘    │  on weapon swap      │ ║
║           │                       │              └──────────────────────┘ ║
║           │                       │                        │              ║
║           └───────────── ICD v1.5 ─────────────────────────┘              ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### DOMAIN ALLOCATION TABLE

| SF-ID | Sub-Function | Primary | Secondary | Lead | Rationale |
|-------|-------------|---------|-----------|------|-----------|
| **F1: SENSE WEAPON INPUT** | | | | | |
| F1.1 | Đo góc traverse | ELEC | MECH | ELEC | Encoder = elec, bearing = mech |
| F1.2 | Đo góc elevation | ELEC | MECH | ELEC | Same as F1.1 |
| F1.3 | Phát hiện bắn (trigger) | ELEC | MECH | ELEC | Switch = elec, mechanism = mech |
| F1.4 | Kháng lực xoay | ELEC | MECH | MECH | Mag brake = elec, torque path = mech |
| F1.5 | Cảm giác cò súng | MECH | — | MECH | Pure mechanical spring |
| F1.6 | Xung giật (recoil) | ELEC | MECH | ELEC | Solenoid = elec, mounting = mech |
| F1.7 | NFC weapon ID | ELEC | SW | ELEC | NFC reader = elec, logic = SW |
| **F2: SIMULATE ENV & TARGETS** | | | | | |
| F2.1-F2.8 | All render + ballistic + AI | **SW** | — | SW | Pure software (Unity) |
| **F3: DISPLAY SCENE** | | | | | |
| F3.1 | Project 180° visual | ELEC | MECH | ELEC | Projectors = elec, screen = mech |
| F3.2 | Sight overlay | SW | — | SW | Render overlay |
| F3.3-F3.5 | Audio (gunfire, env, target) | ELEC | SW | **SHARED** | Amp = elec, FMOD = SW |
| **F4: MOTION SHIP** | | | | | |
| F4.1-F4.2 | Roll/pitch actuation | ELEC | MECH | **SHARED** | Actuator = elec, frame = mech |
| F4.3 | Wave→actuator sync | SW | ELEC | **SHARED** | Algorithm = SW, PID = ESP32 |
| F4.4 | Safety (harness, E-stop) | MECH | ELEC | MECH | Physical safety, E-stop relay = elec |
| **F5: EVALUATE PERFORMANCE** | | | | | |
| F5.1-F5.6 | Scoring, AAR, reports | **SW** | — | SW | Pure software |
| **F6: CONTROL SESSION** | | | | | |
| F6.1-F6.6 | Instructor GUI + control | **SW** | — | SW | Pure software |
| **F7: SWAP WEAPON MODULE** | | | | | |
| F7.1 | Quick-release plate | MECH | — | MECH | Pure mechanical |
| F7.2 | 12-pin connector | ELEC | — | ELEC | Electrical interface |
| F7.3 | NFC auto-detect | ELEC | SW | ELEC | NFC read = elec, logic = SW |
| F7.4 | Auto-configure system | SW | — | SW | Software reconfiguration |
| F7.5 | Instructor confirm | SW | — | SW | GUI workflow |

### SHARED FUNCTIONS (Highest Integration Risk)

| SF | Domains | Lead | Integration Risk | Why Risky |
|----|---------|------|:----------------:|-----------|
| **F3.3-F3.5 Audio** | ELEC+SW | SW leads, ELEC provides HW | LOW | FMOD API well-defined |
| **F4.1-F4.3 Motion** | MECH+ELEC+SW | **SW leads** (algorithm), ELEC implements (PID), MECH provides (structure) | **HIGH** | 3-domain coupling: wave model (SW) → UDP → ESP32 PID (ELEC) → actuator → frame (MECH). Latency + mechanical resonance risk. |
| **F1.1-F1.6 Weapon sensing** | MECH+ELEC | **ELEC leads** | **HIGH** | Encoder alignment depends on mechanical precision. Solenoid impulse depends on mounting stiffness. |
| **F7 Weapon swap** | MECH+ELEC+SW | **SW leads** (orchestration) | MEDIUM | 3-domain: physical release (M) → connector (E) → NFC detect (E) → auto-config (SW) |

### ALLOCATION CONFLICTS (Retroactive Discovery)

| # | Conflict | Implicit Resolution (Phase 2) | Formal Resolution Needed? |
|---|---------|-------------------------------|:-------------------------:|
| 1 | F4.3 wave sync: SW generates wave, ESP32 executes PID — who owns latency budget between them? | Assumed: SW sends UDP at 50Hz, ESP32 runs independent PID | **YES** — need latency contract |
| 2 | F1.1-F1.2 encoder precision: mechanical bearing play vs electrical encoder resolution — who owns ±0.1° accuracy? | Assumed: encoder accuracy sufficient, bearing play "small enough" | **YES** — need tolerance budget |
| 3 | F3.1 projector alignment: MECH provides screen surface, ELEC provides projectors — who owns edge-blend quality? | Not addressed | **YES** — need alignment spec |

---

## RETROACTIVE GAP ANALYSIS

| Gap | Impact | Status | Action |
|-----|--------|--------|--------|
| No formal ICD v1 | Interfaces assumed but not contracted | **OPEN** | Create ICD v1.5 in SA3 |
| No domain budgets | Power budget in function structure (informal) | **PARTIAL** | Formalize in SA4 |
| No V&V plan | Test approach undefined for cross-domain reqs | **OPEN** | Create in SA5 |
| Allocation conflicts unresolved | 3 conflicts discovered (above) | **OPEN** | CEO resolves in SA3 |
| No model inventory | Unknown what analysis models exist | **OPEN** | Survey in SA5 |

---

*Next: SA3 (ICD v1.5) → CEO checkpoint*
