# VN-12.7MM-SIM-006: SYSTEM ARCHITECTURE
## Phase 3: Embodiment Design - Part 1

**Document**: VN-12.7MM-SIM-006-ARCH | **Version**: 1.0 | **Date**: 2026-01-20
**Project Code**: VN-12.7MM-SIM-001
**Selected Concept**: V2 Standard Trainer (Enhanced)

---

# 1. SYSTEM OVERVIEW

## 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    VN-12.7MM-SIM-001 SYSTEM ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │                      TRAINER STATION (Main Unit)                        │    │
│     │                                                                         │    │
│     │  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐          │    │
│     │  │   MECHANICAL  │    │  ELECTRONICS  │    │    VISUAL     │          │    │
│     │  │   SUBSYSTEM   │◄──►│   SUBSYSTEM   │◄──►│   SUBSYSTEM   │          │    │
│     │  │               │    │               │    │               │          │    │
│     │  │ • Mount frame │    │ • Main PC     │    │ • 3× monitors │          │    │
│     │  │ • Gun replica │    │ • I/O board   │    │ • GPU         │          │    │
│     │  │ • Pedestal    │    │ • Sensors     │    │ • Mount arms  │          │    │
│     │  │ • Resistance  │    │ • Amplifiers  │    │               │          │    │
│     │  └───────────────┘    └───────┬───────┘    └───────────────┘          │    │
│     │                               │                                        │    │
│     │                               │                                        │    │
│     │  ┌───────────────┐    ┌───────┴───────┐    ┌───────────────┐          │    │
│     │  │    AUDIO      │    │   SOFTWARE    │    │   FEEDBACK    │          │    │
│     │  │   SUBSYSTEM   │◄──►│   SUBSYSTEM   │◄──►│   SUBSYSTEM   │          │    │
│     │  │               │    │               │    │               │          │    │
│     │  │ • 5.1 speakers│    │ • Simulation  │    │ • Vibration   │          │    │
│     │  │ • Amplifier   │    │ • Ballistics  │    │ • Indicators  │          │    │
│     │  │ • Sound card  │    │ • Scoring     │    │ • LEDs        │          │    │
│     │  └───────────────┘    └───────────────┘    └───────────────┘          │    │
│     │                                                                         │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                         │                                          │
│                                         │ Ethernet                                 │
│                                         │                                          │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │                    INSTRUCTOR STATION (Optional)                        │    │
│     │                                                                         │    │
│     │  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐          │    │
│     │  │   CONTROL     │    │   MONITORING  │    │    REPLAY     │          │    │
│     │  │               │    │               │    │               │          │    │
│     │  │ • Scenario    │    │ • Trainee view│    │ • Session     │          │    │
│     │  │ • Difficulty  │    │ • Performance │    │ • AAR tools   │          │    │
│     │  │ • Inject      │    │ • Real-time   │    │ • Export      │          │    │
│     │  └───────────────┘    └───────────────┘    └───────────────┘          │    │
│     │                                                                         │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.2 Subsystem Summary

| Subsystem | Function | Key Components |
|-----------|----------|----------------|
| **Mechanical** | Physical structure and motion | Frame, mount, grips, resistance |
| **Electronics** | Signal processing and control | PC, I/O board, sensors, drivers |
| **Visual** | Display rendering | Monitors, GPU, mounts |
| **Audio** | Sound generation | Speakers, amplifier, sound card |
| **Software** | Simulation and scoring | Unity, ballistics, UI |
| **Feedback** | Haptic and status | Vibration motor, LEDs |
| **Instructor** | Training management | Control interface, replay |

---

# 2. MECHANICAL SUBSYSTEM

## 2.1 Mechanical Block Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    MECHANICAL SUBSYSTEM ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│                              ┌─────────────────┐                                   │
│                              │   GUN REPLICA   │                                   │
│                              │                 │                                   │
│                              │ • Barrel tube   │                                   │
│                              │ • Receiver mock │                                   │
│                              │ • Spade grips   │                                   │
│                              │ • Trigger assy  │                                   │
│                              │ • Rear sight    │                                   │
│                              └────────┬────────┘                                   │
│                                       │                                            │
│                                       │ Elevation axis                             │
│                                       │                                            │
│                              ┌────────┴────────┐                                   │
│                              │  ELEVATION       │                                   │
│                              │  ASSEMBLY        │                                   │
│                              │                  │                                   │
│                              │ • Trunnion      │                                   │
│                              │ • Elevation arm │                                   │
│                              │ • Encoder mount │                                   │
│                              │ • Brake mount   │                                   │
│                              └────────┬────────┘                                   │
│                                       │                                            │
│                                       │ Traverse axis                              │
│                                       │                                            │
│                              ┌────────┴────────┐                                   │
│                              │   TRAVERSE      │                                   │
│                              │   ASSEMBLY      │                                   │
│                              │                 │                                   │
│                              │ • Bearing       │                                   │
│                              │ • Slewing ring  │                                   │
│                              │ • Encoder mount │                                   │
│                              │ • Brake mount   │                                   │
│                              └────────┬────────┘                                   │
│                                       │                                            │
│                              ┌────────┴────────┐                                   │
│                              │    PEDESTAL     │                                   │
│                              │                 │                                   │
│                              │ • Column        │                                   │
│                              │ • Cable routing │                                   │
│                              │ • Electronics   │                                   │
│                              │   enclosure     │                                   │
│                              └────────┬────────┘                                   │
│                                       │                                            │
│                              ┌────────┴────────┐                                   │
│                              │   BASE FRAME    │                                   │
│                              │                 │                                   │
│                              │ • Floor mount   │                                   │
│                              │ • Leveling feet │                                   │
│                              │ • Cable entry   │                                   │
│                              └─────────────────┘                                   │
│                                                                                     │
│                                                                                     │
│  DIMENSIONS:                           WEIGHT BUDGET:                              │
│  ════════════                          ═══════════════                             │
│  Footprint: 2.5m × 2.5m                Gun replica: 25 kg                          │
│  Height: 1.8m (to eye level)           Elevation assy: 15 kg                       │
│  Clearance: 3.0m × 3.0m needed         Traverse assy: 30 kg                        │
│                                        Pedestal: 40 kg                             │
│                                        Base frame: 50 kg                           │
│                                        ─────────────────                           │
│                                        TOTAL: ~160 kg                              │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Mechanical Interfaces

| Interface | Type | Specification |
|-----------|------|---------------|
| **M-IF-001** | Elevation pivot | Ø40mm shaft, needle bearings |
| **M-IF-002** | Traverse bearing | Ø300mm slewing ring, 4-point contact |
| **M-IF-003** | Floor mount | 4× M12 anchors, 600×600mm pattern |
| **M-IF-004** | Gun-to-cradle | Pin mount, quick-release |
| **M-IF-005** | Cable pass-through | Slip ring 12 circuits, center axis |

---

# 3. ELECTRONICS SUBSYSTEM

## 3.1 Electronics Block Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    ELECTRONICS SUBSYSTEM ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                           MAIN COMPUTER                                     │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │    CPU      │  │    GPU      │  │   MEMORY    │  │   STORAGE   │       │   │
│  │  │             │  │             │  │             │  │             │       │   │
│  │  │ Intel i7   │  │ RTX 3060   │  │ 32GB DDR4  │  │ 1TB NVMe   │       │   │
│  │  │ 12th Gen   │  │ 12GB       │  │             │  │             │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │   │
│  │  │ SOUND CARD  │  │  ETHERNET   │  │    USB      │                        │   │
│  │  │             │  │             │  │             │                        │   │
│  │  │ 5.1 output │  │ Gigabit    │  │ 3.0 ports  │                        │   │
│  │  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘                        │   │
│  │         │                │                │                                │   │
│  └─────────┼────────────────┼────────────────┼────────────────────────────────┘   │
│            │                │                │                                     │
│            │                │                │                                     │
│            ▼                ▼                ▼                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────────────────────┐   │
│  │   AUDIO     │  │ INSTRUCTOR  │  │              I/O INTERFACE              │   │
│  │   OUTPUT    │  │  NETWORK    │  │              BOARD (USB)                │   │
│  │             │  │             │  │                                         │   │
│  │ • Amp       │  │ • Control   │  │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │   │
│  │ • Speakers  │  │ • Data sync │  │  │ ENCODER │  │ ENCODER │  │ ANALOG  │ │   │
│  └─────────────┘  └─────────────┘  │  │ INPUT 1 │  │ INPUT 2 │  │ INPUTS  │ │   │
│                                    │  │(Traverse)│  │(Elevat.)│  │(Trigger)│ │   │
│                                    │  └────┬────┘  └────┬────┘  └────┬────┘ │   │
│                                    │       │            │            │       │   │
│                                    │  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐ │   │
│                                    │  │ DIGITAL │  │  PWM    │  │ RELAY   │ │   │
│                                    │  │ OUTPUTS │  │ OUTPUTS │  │ OUTPUTS │ │   │
│                                    │  │ (8 ch)  │  │ (4 ch)  │  │ (4 ch)  │ │   │
│                                    │  └────┬────┘  └────┬────┘  └────┬────┘ │   │
│                                    │       │            │            │       │   │
│                                    └───────┼────────────┼────────────┼───────┘   │
│                                            │            │            │           │
│                                            ▼            ▼            ▼           │
│                                    ┌─────────────────────────────────────────┐   │
│                                    │          SENSOR/ACTUATOR GROUP          │   │
│                                    │                                         │   │
│                                    │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │   │
│                                    │  │TRAVERSE │  │ELEVATION│  │ TRIGGER │ │   │
│                                    │  │ ENCODER │  │ ENCODER │  │ SENSOR  │ │   │
│                                    │  │ 10000   │  │ 10000   │  │ Force   │ │   │
│                                    │  │ PPR     │  │ PPR     │  │ 0-100N  │ │   │
│                                    │  └─────────┘  └─────────┘  └─────────┘ │   │
│                                    │                                         │   │
│                                    │  ┌─────────┐  ┌─────────┐  ┌─────────┐ │   │
│                                    │  │TRAVERSE │  │ELEVATION│  │VIBRATION│ │   │
│                                    │  │ BRAKE   │  │ BRAKE   │  │ MOTOR   │ │   │
│                                    │  │ 24V DC  │  │ 24V DC  │  │ 12V DC  │ │   │
│                                    │  │ Magnet  │  │ Magnet  │  │ ERM     │ │   │
│                                    │  └─────────┘  └─────────┘  └─────────┘ │   │
│                                    │                                         │   │
│                                    └─────────────────────────────────────────┘   │
│                                                                                     │
│                                                                                     │
│  POWER DISTRIBUTION:                                                               │
│  ═══════════════════                                                               │
│                                                                                     │
│     AC INPUT ─────┬───────────────────────────────────────────────────────────    │
│     220VAC 50Hz   │                                                                │
│                   ▼                                                                │
│            ┌─────────────┐                                                         │
│            │    PSU      │                                                         │
│            │   750W      │                                                         │
│            └──────┬──────┘                                                         │
│                   │                                                                │
│      ┌────────────┼────────────┬────────────┬────────────┐                        │
│      ▼            ▼            ▼            ▼            ▼                        │
│  ┌───────┐  ┌───────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│  │ PC    │  │ Monitors│  │ I/O Board │  │ Brakes   │  │ Amplifier │              │
│  │ 400W  │  │ 3×45W  │  │   12V/5A  │  │  24V/2A  │  │   100W    │              │
│  └───────┘  └───────┘  └───────────┘  └───────────┘  └───────────┘              │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Electronics Interface Definitions

| Interface ID | Description | Type | Specification |
|--------------|-------------|------|---------------|
| **E-IF-001** | Traverse encoder | Quadrature | 10000 PPR, 5V TTL, A/B/Z |
| **E-IF-002** | Elevation encoder | Quadrature | 10000 PPR, 5V TTL, A/B/Z |
| **E-IF-003** | Trigger sensor | Analog | 0-5V, 10-bit, 0-100N |
| **E-IF-004** | Traverse brake | PWM | 24V, 0-100% duty, 1kHz |
| **E-IF-005** | Elevation brake | PWM | 24V, 0-100% duty, 1kHz |
| **E-IF-006** | Vibration motor | PWM | 12V, 0-100% duty, ERM type |
| **E-IF-007** | Status LEDs | Digital | 5V, 8 channels |
| **E-IF-008** | Emergency stop | Digital | NC contact, 24V |
| **E-IF-009** | USB to I/O board | USB 2.0 | 12 Mbps, HID class |
| **E-IF-010** | Video output | DisplayPort | 3× DP 1.4, 4K@60Hz |

---

# 4. SOFTWARE SUBSYSTEM

## 4.1 Software Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    SOFTWARE ARCHITECTURE                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         APPLICATION LAYER                                   │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │  SCENARIO   │  │   SCORING   │  │   REPLAY    │  │ INSTRUCTOR  │       │   │
│  │  │  MANAGER    │  │   ENGINE    │  │   SYSTEM    │  │    UI       │       │   │
│  │  │             │  │             │  │             │  │             │       │   │
│  │  │ • Load      │  │ • Hit rate  │  │ • Record    │  │ • Control   │       │   │
│  │  │ • Execute   │  │ • Timing    │  │ • Playback  │  │ • Monitor   │       │   │
│  │  │ • Difficulty│  │ • Grade     │  │ • Export    │  │ • Inject    │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                         │                                          │
│                                         │ API calls                                │
│                                         ▼                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         SIMULATION LAYER                                    │   │
│  │                         (Unity Engine)                                      │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │   SCENE     │  │  BALLISTICS │  │   TARGET    │  │   EFFECTS   │       │   │
│  │  │  RENDERER   │  │   ENGINE    │  │     AI      │  │   MANAGER   │       │   │
│  │  │             │  │             │  │             │  │             │       │   │
│  │  │ • Terrain   │  │ • 6-DOF     │  │ • Behavior  │  │ • Particles │       │   │
│  │  │ • Ocean     │  │ • Drag      │  │ • Pathing   │  │ • Impacts   │       │   │
│  │  │ • Sky       │  │ • Wind      │  │ • Evasion   │  │ • Tracers   │       │   │
│  │  │ • Lighting  │  │ • Dispersion│  │ • Spawn     │  │ • Muzzle    │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │   │
│  │  │    HUD      │  │   AUDIO     │  │  COLLISION  │                        │   │
│  │  │   SYSTEM    │  │   MANAGER   │  │  DETECTION  │                        │   │
│  │  │             │  │             │  │             │                        │   │
│  │  │ • Ammo cnt  │  │ • Firing    │  │ • Raycast   │                        │   │
│  │  │ • Reticle   │  │ • Impacts   │  │ • Hit reg   │                        │   │
│  │  │ • Score     │  │ • Ambient   │  │ • Damage    │                        │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                        │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                         │                                          │
│                                         │ Driver calls                             │
│                                         ▼                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         HARDWARE INTERFACE LAYER                            │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │   INPUT     │  │   OUTPUT    │  │   DISPLAY   │  │   NETWORK   │       │   │
│  │  │   DRIVER    │  │   DRIVER    │  │   DRIVER    │  │   DRIVER    │       │   │
│  │  │             │  │             │  │             │  │             │       │   │
│  │  │ • Encoders  │  │ • Brakes    │  │ • 3 monitors│  │ • Instructor│       │   │
│  │  │ • Trigger   │  │ • Vibration │  │ • Surround  │  │ • Data log  │       │   │
│  │  │ • Buttons   │  │ • LEDs      │  │             │  │             │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                         │                                          │
│                                         │ OS calls                                 │
│                                         ▼                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         OPERATING SYSTEM                                    │   │
│  │                         Windows 10/11 Pro                                   │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Software Interfaces

| Interface ID | Description | Protocol | Data Rate |
|--------------|-------------|----------|-----------|
| **S-IF-001** | Input polling | USB HID | 1000 Hz |
| **S-IF-002** | Brake control | USB HID | 100 Hz |
| **S-IF-003** | Display sync | NVIDIA Surround | 60 fps |
| **S-IF-004** | Audio output | WASAPI | 48 kHz |
| **S-IF-005** | Instructor link | TCP/IP | 10 Hz |
| **S-IF-006** | Data logging | File I/O | Continuous |

---

# 5. VISUAL SUBSYSTEM

## 5.1 Display Configuration

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    VISUAL SUBSYSTEM - TRIPLE MONITOR SETUP                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│                           OPERATOR VIEW (TOP DOWN)                                 │
│                                                                                     │
│                                     ▲                                              │
│                                     │ Look direction                               │
│                                     │                                              │
│                         ┌───────────┴───────────┐                                  │
│                         │                       │                                  │
│            ┌────────────┤     CENTER MONITOR    ├────────────┐                     │
│            │            │       (Primary)       │            │                     │
│            │            │                       │            │                     │
│            │            │    ┌───────────┐      │            │                     │
│   ┌────────┤            │    │  Weapon   │      │            ├────────┐            │
│   │        │            │    │   Sight   │      │            │        │            │
│   │  LEFT  │            │    └───────────┘      │            │ RIGHT  │            │
│   │MONITOR │            │                       │            │MONITOR │            │
│   │        │            └───────────────────────┘            │        │            │
│   │(Periph)│◄───────────── 120° Total FOV ─────────────────▶│(Periph)│            │
│   │        │                                                 │        │            │
│   └────────┘                                                 └────────┘            │
│                                                                                     │
│        40°                         40°                          40°                │
│                                                                                     │
│                                                                                     │
│  MONITOR SPECIFICATIONS:                                                           │
│  ═══════════════════════                                                           │
│                                                                                     │
│  │ Parameter        │ Value              │ Notes                              │   │
│  ├──────────────────┼────────────────────┼────────────────────────────────────┤   │
│  │ Model            │ 27" IPS            │ Thin bezel preferred               │   │
│  │ Resolution       │ 2560×1440 (QHD)    │ Good balance of quality/perf       │   │
│  │ Refresh Rate     │ 144 Hz             │ Smooth motion                      │   │
│  │ Response Time    │ ≤5ms GTG           │ Low latency                        │   │
│  │ Brightness       │ 350 cd/m²          │ Adequate for indoor                │   │
│  │ Viewing Angle    │ 178°/178°          │ IPS panel                          │   │
│  │ Connectivity     │ DisplayPort 1.4    │ Required for surround              │   │
│  │ Quantity         │ 3                  │ Surround setup                     │   │
│  │ Bezel Width      │ ≤8mm               │ Minimize gap                       │   │
│  └──────────────────┴────────────────────┴────────────────────────────────────┘   │
│                                                                                     │
│                                                                                     │
│  MOUNTING ARRANGEMENT:                                                             │
│  ═════════════════════                                                             │
│                                                                                     │
│              ┌─────────────────────────────────────────────────┐                   │
│              │                                                 │                   │
│              │              MONITOR STAND/ARM                  │                   │
│              │              (Adjustable height)                │                   │
│              │                                                 │                   │
│              │   ┌───────┐    ┌───────┐    ┌───────┐          │                   │
│              │   │ LEFT  │    │CENTER │    │ RIGHT │          │                   │
│              │   │  30°  │    │  0°   │    │  30°  │          │                   │
│              │   │ angle │    │       │    │ angle │          │                   │
│              │   └───────┘    └───────┘    └───────┘          │                   │
│              │                                                 │                   │
│              │   Distance from operator: 1.5-2.0m              │                   │
│              │   Eye level height: 1.6m from floor             │                   │
│              │                                                 │                   │
│              └─────────────────────────────────────────────────┘                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 6. AUDIO SUBSYSTEM

## 6.1 Audio Configuration

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    AUDIO SUBSYSTEM - 5.1 SURROUND                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│                         SPEAKER PLACEMENT (TOP VIEW)                               │
│                                                                                     │
│                                                                                     │
│                               FRONT CENTER                                         │
│                                    [C]                                             │
│                                     │                                              │
│                                     │                                              │
│               FRONT LEFT            │            FRONT RIGHT                       │
│                   [FL]──────────────┼──────────────[FR]                           │
│                      ╲              │              ╱                               │
│                       ╲             │             ╱                                │
│                        ╲    30°     │    30°    ╱                                 │
│                         ╲           │           ╱                                  │
│                          ╲          │          ╱                                   │
│                           ╲    ┌────┴────┐    ╱                                   │
│                            ╲   │         │   ╱                                    │
│                             ╲  │ OPERATOR│  ╱                                     │
│                              ╲ │    ●    │ ╱                                      │
│                               ╲│         │╱                                       │
│                                └─────────┘                                        │
│                               ╱           ╲                                       │
│                              ╱             ╲                                      │
│                             ╱   110°  110°  ╲                                     │
│                            ╱                 ╲                                    │
│                           ╱                   ╲                                   │
│                   [SL]───╱─────────────────────╲───[SR]                          │
│               SURROUND LEFT                  SURROUND RIGHT                       │
│                                                                                     │
│                                 [SUB]                                              │
│                               SUBWOOFER                                            │
│                            (Floor, any position)                                   │
│                                                                                     │
│                                                                                     │
│  AUDIO SPECIFICATIONS:                                                             │
│  ═════════════════════                                                             │
│                                                                                     │
│  │ Component        │ Specification        │ Notes                            │   │
│  ├──────────────────┼──────────────────────┼──────────────────────────────────┤   │
│  │ Front speakers   │ 2-way, 50W RMS each  │ FL, C, FR                        │   │
│  │ Surround speakers│ 2-way, 30W RMS each  │ SL, SR                           │   │
│  │ Subwoofer        │ 100W RMS, 8" driver  │ Low frequency (<200Hz)           │   │
│  │ Amplifier        │ 5.1 channel, 300W    │ Integrated or separate           │   │
│  │ Frequency range  │ 40Hz - 20kHz         │ Full spectrum                    │   │
│  │ SPL (max)        │ 90 dB at 2m          │ Realistic gunfire                │   │
│  └──────────────────┴──────────────────────┴──────────────────────────────────┘   │
│                                                                                     │
│                                                                                     │
│  AUDIO SOURCES:                                                                    │
│  ═══════════════                                                                   │
│                                                                                     │
│  │ Sound              │ Type        │ Channels   │ Priority │                    │
│  ├────────────────────┼─────────────┼────────────┼──────────┤                    │
│  │ 12.7mm firing      │ Loop        │ Front all  │ HIGH     │                    │
│  │ Brass ejection     │ One-shot    │ Surround   │ MEDIUM   │                    │
│  │ Water impact       │ One-shot    │ Positional │ MEDIUM   │                    │
│  │ Target hit         │ One-shot    │ Positional │ HIGH     │                    │
│  │ Target explosion   │ One-shot    │ All + Sub  │ HIGH     │                    │
│  │ Ocean ambient      │ Loop        │ All        │ LOW      │                    │
│  │ Wind               │ Loop        │ Surround   │ LOW      │                    │
│  │ Radio chatter      │ Triggered   │ Center     │ MEDIUM   │                    │
│  └────────────────────┴─────────────┴────────────┴──────────┘                    │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 7. DATA FLOW DIAGRAM

## 7.1 Real-Time Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    REAL-TIME DATA FLOW (1000 Hz Loop)                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│  ┌─────────────────┐                                                               │
│  │    SENSORS      │                                                               │
│  │                 │                                                               │
│  │ Traverse enc ───┼───┐                                                           │
│  │ Elevation enc ──┼───┼───┐                                                       │
│  │ Trigger sensor ─┼───┼───┼───┐                                                   │
│  │ E-stop ─────────┼───┼───┼───┼───┐                                              │
│  └─────────────────┘   │   │   │   │                                              │
│                        │   │   │   │                                              │
│                        ▼   ▼   ▼   ▼                                              │
│                   ┌─────────────────────┐                                         │
│                   │    I/O BOARD        │                                         │
│                   │   (1000 Hz poll)    │                                         │
│                   └──────────┬──────────┘                                         │
│                              │ USB                                                │
│                              ▼                                                    │
│                   ┌─────────────────────┐                                         │
│                   │   INPUT DRIVER      │                                         │
│                   │  (Buffer, filter)   │                                         │
│                   └──────────┬──────────┘                                         │
│                              │                                                    │
│           ┌──────────────────┼──────────────────┐                                 │
│           │                  │                  │                                 │
│           ▼                  ▼                  ▼                                 │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │   BALLISTICS    │ │   SCENE VIEW    │ │    SCORING      │                     │
│  │    ENGINE       │ │   CONTROLLER    │ │    ENGINE       │                     │
│  │                 │ │                 │ │                 │                     │
│  │ Position ──────▶│ │ Aim direction ─▶│ │ Fire events ──▶│                     │
│  │ Fire command ──▶│ │ Update camera ─▶│ │ Hit data ─────▶│                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           │ Projectile        │ Render            │ Score                        │
│           │ positions         │ commands          │ updates                      │
│           │                   │                   │                              │
│           ▼                   ▼                   ▼                              │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                     │
│  │   EFFECTS       │ │   RENDERER      │ │     HUD         │                     │
│  │   MANAGER       │ │   (60 fps)      │ │   OVERLAY       │                     │
│  │                 │ │                 │ │                 │                     │
│  │ Tracers ───────▶│ │ Scene ─────────▶│ │ Ammo count ────▶│                     │
│  │ Muzzle flash ──▶│ │ Effects ───────▶│ │ Score display ─▶│                     │
│  │ Impacts ───────▶│ │ HUD ───────────▶│ │ Messages ──────▶│                     │
│  └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                     │
│           │                   │                   │                              │
│           └───────────────────┼───────────────────┘                              │
│                               │                                                  │
│                               ▼                                                  │
│                   ┌─────────────────────┐                                         │
│                   │   DISPLAY OUTPUT    │                                         │
│                   │   (Triple monitor)  │                                         │
│                   └─────────────────────┘                                         │
│                                                                                     │
│                                                                                     │
│  LATENCY BUDGET:                                                                   │
│  ═══════════════                                                                   │
│                                                                                     │
│  │ Stage                      │ Time (ms) │ Cumulative │                         │
│  ├────────────────────────────┼───────────┼────────────┤                         │
│  │ Sensor sampling            │    1      │     1      │                         │
│  │ USB transfer               │    1      │     2      │                         │
│  │ Input processing           │    1      │     3      │                         │
│  │ Simulation update          │    5      │     8      │                         │
│  │ Render (GPU)               │   10      │    18      │                         │
│  │ Display refresh            │   16      │    34      │ (60Hz)                  │
│  ├────────────────────────────┼───────────┼────────────┤                         │
│  │ TOTAL LATENCY              │           │   <40 ms   │ ✓ Meets <50ms          │
│  └────────────────────────────┴───────────┴────────────┘                         │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 8. INTERFACE CONTROL DOCUMENT (ICD) SUMMARY

## 8.1 All System Interfaces

| ID | Interface | From | To | Type | Signal |
|----|-----------|------|-----|------|--------|
| IF-001 | Traverse encoder | Mount | I/O Board | Electrical | Quadrature 5V |
| IF-002 | Elevation encoder | Mount | I/O Board | Electrical | Quadrature 5V |
| IF-003 | Trigger sensor | Grip | I/O Board | Electrical | Analog 0-5V |
| IF-004 | Emergency stop | Panel | I/O Board | Electrical | NC contact |
| IF-005 | Traverse brake | I/O Board | Brake | Electrical | PWM 24V |
| IF-006 | Elevation brake | I/O Board | Brake | Electrical | PWM 24V |
| IF-007 | Vibration motor | I/O Board | Motor | Electrical | PWM 12V |
| IF-008 | Status LEDs | I/O Board | Panel | Electrical | Digital 5V |
| IF-009 | USB I/O | I/O Board | PC | Data | USB 2.0 HID |
| IF-010 | Video | GPU | Monitors | Video | DisplayPort |
| IF-011 | Audio | Sound card | Amp | Audio | 5.1 analog |
| IF-012 | Network | PC | Instructor | Data | Ethernet TCP |
| IF-013 | Power | Mains | PSU | Electrical | 220VAC |
| IF-014 | Slip ring | Rotating | Fixed | Electrical | 12 circuits |

---

# 9. PHYSICAL INTEGRATION

## 9.1 Overall Layout Drawing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    TRAINER STATION LAYOUT (FRONT VIEW)                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                                                                                     │
│                           3000mm total width                                       │
│              ◄─────────────────────────────────────────────────▶                   │
│                                                                                     │
│         ┌───────────────────────────────────────────────────────────┐              │
│         │                    MONITOR ARRAY                          │     ▲        │
│         │                                                           │     │        │
│         │    ┌─────────┐    ┌─────────┐    ┌─────────┐            │     │        │
│         │    │         │    │         │    │         │            │     │        │
│         │    │  LEFT   │    │ CENTER  │    │  RIGHT  │            │  2800mm      │
│         │    │   27"   │    │   27"   │    │   27"   │            │  ceiling     │
│         │    │         │    │         │    │         │            │     │        │
│         │    └─────────┘    └─────────┘    └─────────┘            │     │        │
│         │                                                           │     │        │
│         └───────────────────────────────────────────────────────────┘     │        │
│                                                                            │        │
│                                   ┌───────┐                               │        │
│                                   │BARREL │                               │  1800mm│
│                              ┌────┴───────┴────┐                          │  eye   │
│                              │    RECEIVER     │                          │  level │
│                              │    + GRIPS      │                          │     │  │
│                              └────────┬────────┘                          │     │  │
│                                       │                                    │     │  │
│                              ┌────────┴────────┐                          │     │  │
│                              │    PEDESTAL     │                          │     │  │
│                              │                 │                          │     │  │
│                              │   (Electronics  │                          │     │  │
│                              │    inside)      │                          │     │  │
│                              └────────┬────────┘                          │     │  │
│                                       │                                    │     ▼  │
│  ════════════════════════════════════════════════════════════════════════════════  │
│                              FLOOR (with base frame)                               │
│                                                                                     │
│                                                                                     │
│              ◄────────────────── 2500mm footprint ────────────────────▶            │
│                                                                                     │
│                                                                                     │
│  CLEARANCE REQUIREMENTS:                                                           │
│  • Front: 1.5m (operator standing)                                                │
│  • Sides: 0.5m (maintenance access)                                               │
│  • Rear: 1.0m (cable routing)                                                     │
│  • Total room: 4.0m × 4.0m minimum                                               │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 10. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Systems Engineering | Initial release |

---

**NEXT**: Document 007 - Embodiment Design (Layout, BOM, DfX)

*VN-12.7MM-SIM-006 System Architecture v1.0*
