# VN-ADTS-001: HỆ THỐNG HUẤN LUYỆN PHÒNG KHÔNG & PHÁO BINH
## Artillery & Air Defense Training System
### PHASE 1: TASK CLARIFICATION
### Pahl & Beitz Systematic Design Methodology

---

## 1. PRODUCT FAMILY OVERVIEW

### 1.1 System Scope Definition

Đây là **HỆ THỐNG SẢN PHẨM** (Product Family) gồm nhiều modules có thể triển khai độc lập hoặc tích hợp:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               VN-ADTS-001: ARTILLERY & AIR DEFENSE TRAINING SYSTEM          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  MODULE A: MANPADS TRAINER                                                  │
│  ════════════════════════════                                               │
│  • VN-MANPADS-SIM-001: Stinger/Igla Simulator                              │
│  • Mô phỏng tên lửa vác vai phòng không                                    │
│  • Target: Máy bay, trực thăng, UAV, tên lửa hành trình                    │
│                                                                             │
│  MODULE B: AERIAL TARGET SYSTEM                                             │
│  ══════════════════════════════                                             │
│  • VN-TARGET-DRONE-001: High-Speed Target Drone                            │
│  • Bia bay mô phỏng máy bay, tên lửa hành trình                           │
│  • Tốc độ cao: 200-500 km/h                                                │
│                                                                             │
│  MODULE C: ARTILLERY FORWARD OBSERVER                                       │
│  ═════════════════════════════════════                                      │
│  • VN-ARTY-FOS-001: Artillery Forward Observer Simulator                   │
│  • Huấn luyện sĩ quan quan sát pháo binh                                   │
│  • Điều chỉnh đạn pháo, cối 60-155mm                                       │
│                                                                             │
│  MODULE D: MORTAR FIRE CONTROL                                              │
│  ══════════════════════════════                                             │
│  • VN-MORTAR-SIM-001: 60/81/120mm Mortar Simulator                         │
│  • Huấn luyện khẩu đội cối                                                 │
│  • Fire direction center integration                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Product Priority Matrix

| Module | TAM (5yr) | Technical Complexity | Competition | Synergy | Priority |
|--------|-----------|---------------------|-------------|---------|----------|
| **A. MANPADS Trainer** | 50-100 units | HIGH | SKIFTECH (UA) | HIGH | **⭐ #1** |
| **B. Target Drone** | 30-50 units | VERY HIGH | Airbus, QinetiQ | MEDIUM | #3 |
| **C. Artillery FOS** | 40-80 units | MEDIUM | Zen Tech (IN) | HIGH | **⭐ #2** |
| **D. Mortar Simulator** | 60-120 units | MEDIUM | Zen Tech (IN) | HIGH | #4 |

**Recommendation:** Focus on **Module A (MANPADS)** + **Module C (Artillery FOS)** first - highest market demand, lower technical risk, shares platform.

---

## 2. MODULE A: MANPADS TRAINING SIMULATOR

### 2.1 Target Systems Reference (Real Weapons)

#### 2.1.1 Stinger (FIM-92) Specifications

| Parameter | Value | Unit | Notes |
|-----------|-------|------|-------|
| System weight | 15.87 | kg | With grip stock |
| Missile weight | 10.1 | kg | Without launcher |
| Length | 1.52 | m | Missile |
| Diameter | 76.2 | mm | Missile body |
| Speed | Mach 2+ | ~750 m/s | Supersonic |
| Range | 1-8 | km | Effective |
| Altitude | 15-3,800 | m | Engagement envelope |
| Guidance | IR homing | - | Passive infrared |
| Seeker | Dual IR/UV | - | Stinger-POST |
| IFF | AN/PPX-3B | - | Identification Friend/Foe |

#### 2.1.2 Igla (SA-18) Specifications (Alternative)

| Parameter | Value | Unit | Notes |
|-----------|-------|------|-------|
| System weight | 17.9 | kg | Ready to fire |
| Missile weight | 10.6 | kg | |
| Length | 1.57 | m | |
| Diameter | 72 | mm | |
| Speed | Mach 1.9 | ~570 m/s | |
| Range | 0.5-5.2 | km | |
| Altitude | 10-3,500 | m | |

#### 2.1.3 Target Engagement Process

```
MANPADS ENGAGEMENT SEQUENCE:
════════════════════════════

1. ACQUISITION (2-5 sec)
   ├── Visual detection of target
   ├── IFF interrogation (friend/foe check)
   └── Decision to engage

2. TRACKING (3-8 sec)
   ├── Shoulder launcher
   ├── Aim at target
   ├── Activate seeker (BCU cooldown: ~5 sec)
   ├── Acquire IR lock (audible tone)
   └── Lead angle calculation (super-elevation)

3. FIRING (0.5 sec)
   ├── Safety off
   ├── Trigger squeeze
   ├── Missile ejection (safe distance from operator)
   └── Rocket motor ignition

4. GUIDANCE (5-15 sec)
   ├── Proportional navigation
   ├── Missile tracks IR signature
   └── Intercept at target

5. IMPACT
   ├── Proximity fuze or direct hit
   └── Warhead detonation

CRITICAL TRAINING SKILLS:
• Target identification (aircraft type, friend/foe)
• Lead angle estimation for crossing targets
• Timing BCU activation (limited duration)
• Shoot/no-shoot decision making
• Team coordination (loader/gunner)
```

### 2.2 Existing Competitor Solutions

| Competitor | Country | Features | Price Est. | Weaknesses |
|------------|---------|----------|------------|------------|
| **SKIFTECH Stinger Sim** | Ukraine | Laser tracking, real weight, 1000 shots | $10-20K | No physical target |
| **ArmNord Stinger Sim** | Latvia | VR headset (70°), 3D environment | $50-100K | VR only, no real launcher |
| **US LAADTS** | USA | Surrogate Stinger, real aircraft tracking | $170K+ | Too expensive |
| **Zen Technologies** | India | Various MANPADS trainers | $30-50K | Generic, not Stinger-specific |

### 2.3 Gap Analysis - VN Differentiation

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MANPADS TRAINER GAP ANALYSIS                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  FEATURE                    SKIF   ARM   LAAD   ZEN    VN-MANPADS       │
│  ────────────────────────   ────   ───   ────   ───    ──────────       │
│  Real launcher weight        ✓      ✗      ✓      ~       ✓             │
│  Seeker cooling simulation   ✓      ~      ✓      ✓       ✓             │
│  IFF simulation              ✗      ✗      ✓      ~       ✓ ★           │
│  Real aircraft tracking      ✗      ✗      ✓      ✗       ✓ ★           │
│  Target drone integration    ✗      ✗      ~      ✗       ✓ ★           │
│  VR option                   ✗      ✓      ✗      ~       W(M)          │
│  Indoor training             ✓      ✓      ✗      ✓       ✓             │
│  Outdoor training            ✓      ✗      ✓      ~       ✓             │
│  Vietnamese UI               ✗      ✗      ✗      ✗       ✓ ★           │
│  Local support               ✗      ✗      ✗      ✗       ✓ ★           │
│  Price target                $$     $$$    $$$$   $$      $$ ★          │
│                                                                          │
│  ★ = Unique differentiation for VN product                              │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.4 MANPADS Trainer Requirements List

#### 2.4.1 Physical Simulation (PS)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | PS.01 | System weight (complete) | 15-17 | kg | I |
| D | PS.02 | Launcher length | 1.5 ± 0.1 | m | I |
| D | PS.03 | Launcher diameter | 76 ± 5 | mm | I |
| D | PS.04 | Grip stock authentic | Yes | - | I |
| D | PS.05 | Trigger mechanism | Functional | - | T |
| D | PS.06 | Safety switch | Functional | - | T |
| W(H) | PS.07 | Interchangeable launcher (Stinger/Igla) | Modular | - | D |

#### 2.4.2 Seeker Simulation (SK)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | SK.01 | **BCU cooling simulation** | **Functional** | - | **T** |
| D | SK.02 | BCU activation time | 3-5 | sec | T |
| D | SK.03 | BCU duration limit | 30-45 | sec | T |
| D | SK.04 | **IR lock tone (audio)** | **Authentic** | - | **T** |
| D | SK.05 | Lock-on indication | Audio + visual | - | T |
| D | SK.06 | Seeker field of view | ±10 | degrees | A |
| D | SK.07 | Target discrimination | Yes | - | T |
| W(H) | SK.08 | Flare/countermeasure rejection | Simulated | - | A |

#### 2.4.3 Target Tracking (TT)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | TT.01 | **Real aircraft/drone tracking** | **Yes** | - | **T** |
| D | TT.02 | Tracking technology | Laser/Camera | - | D |
| D | TT.03 | Target acquisition range | 0.5-8 | km | T |
| D | TT.04 | Target speed range | 50-300 | m/s | T |
| D | TT.05 | Target altitude range | 15-3,800 | m | T |
| D | TT.06 | Crossing target tracking | Yes | - | T |
| D | TT.07 | Target type classification | Aircraft/Heli/UAV/CM | - | T |
| W(H) | TT.08 | Multiple target handling | ≥ 3 simultaneous | - | T |

#### 2.4.4 Flight Simulation (FS)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | FS.01 | Missile flight modeling | Physics-based | - | A |
| D | FS.02 | Proportional navigation | Yes | - | A |
| D | FS.03 | Hit/miss calculation | Real-time | - | T |
| D | FS.04 | **Super-elevation guidance** | **Simulated** | - | **T** |
| D | FS.05 | Lead angle display | Visual cue | - | I |
| W(H) | FS.06 | Miss distance indication | Yes | - | T |

#### 2.4.5 IFF System (IF)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | IF.01 | **IFF simulation** | **Friend/Foe/Unknown** | - | **T** |
| D | IF.02 | IFF interrogation | Functional | - | T |
| D | IF.03 | IFF response display | Audio + visual | - | T |
| W(H) | IF.04 | IFF failure simulation | Yes | - | T |

#### 2.4.6 Instructor Station (IS)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | IS.01 | Scenario editor | Pre-built + custom | - | D |
| D | IS.02 | Target injection | Real-time | - | T |
| D | IS.03 | Trainee monitoring | Full view | - | D |
| D | IS.04 | Performance recording | Yes | - | D |
| D | IS.05 | After-action review | Playback + scoring | - | D |
| D | IS.06 | Multi-trainee support | ≥ 4 stations | - | D |
| W(H) | IS.07 | Remote instructor capability | Yes | - | D |

#### 2.4.7 Target Scenarios (TS)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | TS.01 | Fixed-wing aircraft | Fast jet, transport | - | D |
| D | TS.02 | Rotary-wing aircraft | Attack heli, transport | - | D |
| D | TS.03 | UAV targets | Various sizes | - | D |
| D | TS.04 | **Cruise missile simulation** | **Yes** | - | **D** |
| D | TS.05 | Head-on engagement | Yes | - | T |
| D | TS.06 | Tail-chase engagement | Yes | - | T |
| D | TS.07 | Crossing engagement | Yes | - | T |
| W(H) | TS.08 | Low-altitude (nap-of-earth) | Yes | - | T |
| W(H) | TS.09 | Night scenario | NVG compatible | - | T |

---

## 3. MODULE B: AERIAL TARGET DRONE SYSTEM

### 3.1 Mission Requirements

| Use Case | Target Speed | Altitude | Endurance | IR Signature |
|----------|--------------|----------|-----------|--------------|
| Helicopter simulation | 50-150 km/h | 50-500m | 1-2 hr | Medium |
| Attack aircraft | 200-400 km/h | 100-2000m | 30-60 min | High |
| **Cruise missile** | **400-600 km/h** | **30-100m** | **15-30 min** | **Low-Medium** |
| Fast jet (limited) | 500-800 km/h | 500-5000m | 15-30 min | High |
| UAV threat | 100-200 km/h | 100-1000m | 1-3 hr | Low |

### 3.2 Target Drone Technical Concepts

| Concept | Speed | Cost | Reusability | Complexity |
|---------|-------|------|-------------|------------|
| **A. Turbojet drone** | 400-600 km/h | $$$$ | Recoverable | Very High |
| **B. Propeller + tow** | 100-200 km/h | $$ | High | Medium |
| **C. Rocket-boosted** | 600-800 km/h | $$$$$ | Expendable | Very High |
| **D. Modified RC jet** | 200-400 km/h | $$ | Recoverable | Medium |

### 3.3 Target Drone Requirements (Summary)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | TD.01 | Speed range | 150-500 | km/h | Adjustable |
| D | TD.02 | Altitude range | 30-3000 | m | Above ground |
| D | TD.03 | Endurance | ≥ 30 | min | Per sortie |
| D | TD.04 | IR enhancement | Flare system | - | Heat signature |
| D | TD.05 | Radar enhancement | Corner reflector | - | RCS augmentation |
| D | TD.06 | Recovery method | Parachute/runway | - | Reusable |
| D | TD.07 | Launch method | Catapult/runway | - | Field deployable |
| W(H) | TD.08 | Miss distance indicator | Yes | - | Scoring |
| W(H) | TD.09 | Scoring/telemetry | Real-time | - | Training feedback |
| D | TD.10 | Flight termination | Automatic | - | Safety |

---

## 4. MODULE C: ARTILLERY FORWARD OBSERVER SIMULATOR

### 4.1 Training Objectives

| Skill | Description | Priority |
|-------|-------------|----------|
| **Target acquisition** | Identify, locate, and describe targets | CRITICAL |
| **Call for fire** | Standard fire mission format | CRITICAL |
| **Adjustment of fire** | Correct aim based on observed impact | CRITICAL |
| **Fire control** | Coordinate multiple batteries | HIGH |
| **Danger close** | Fire support near friendly forces | HIGH |
| **Smoke/illumination** | Special munition employment | MEDIUM |

### 4.2 Artillery FOS System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                 ARTILLERY FORWARD OBSERVER SIMULATOR                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────┐          ┌─────────────────┐                      │
│  │ INSTRUCTOR      │          │ TRAINEE STATION │                      │
│  │ STATION         │◄────────►│ (FO Position)   │                      │
│  │                 │          │                 │                      │
│  │ • Scenario      │          │ • Binoculars    │                      │
│  │   control       │          │ • Laser range-  │                      │
│  │ • Enemy force   │          │   finder        │                      │
│  │   placement     │          │ • Radio/comms   │                      │
│  │ • Impact        │          │ • Map/compass   │                      │
│  │   simulation    │          │ • Tablet/device │                      │
│  │ • Scoring       │          │                 │                      │
│  └─────────────────┘          └─────────────────┘                      │
│           │                            │                                │
│           ▼                            ▼                                │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    VIRTUAL BATTLEFIELD                          │   │
│  │                                                                 │   │
│  │  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐  │   │
│  │  │ 3D TERRAIN    │    │ BALLISTIC     │    │ IMPACT        │  │   │
│  │  │               │    │ CALCULATOR    │    │ VISUALIZATION │  │   │
│  │  │ • Vietnamese  │    │               │    │               │  │   │
│  │  │   terrain     │    │ • 155mm       │    │ • Smoke       │  │   │
│  │  │ • Weather     │    │ • 105mm       │    │ • Flash       │  │   │
│  │  │ • Time of day │    │ • 120mm mortar│    │ • Crater      │  │   │
│  │  │               │    │ • 81mm mortar │    │ • Fragmentation│  │   │
│  │  └───────────────┘    └───────────────┘    └───────────────┘  │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Artillery FOS Requirements List

#### 4.3.1 Observation Equipment (OE)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | OE.01 | Simulated binoculars | 7x-10x magnification | - | T |
| D | OE.02 | Laser rangefinder simulation | 50-10,000m | m | T |
| D | OE.03 | Compass/azimuth | 0-6400 mils | mils | T |
| D | OE.04 | Map interface | Digital + paper | - | D |
| W(H) | OE.05 | Night vision mode | Yes | - | T |

#### 4.3.2 Communication (CM)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | CM.01 | Radio simulation | Authentic voice | - | T |
| D | CM.02 | Call for fire format | Standard military | - | T |
| D | CM.03 | FDC communication | Two-way | - | T |
| W(H) | CM.04 | Digital fire request | AFATDS-like | - | D |

#### 4.3.3 Ballistics (BA)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | BA.01 | Artillery types | 105mm, 122mm, 130mm, 155mm | - | D |
| D | BA.02 | Mortar types | 60mm, 81mm, 82mm, 120mm | - | D |
| D | BA.03 | Time of flight | Realistic | sec | A |
| D | BA.04 | CEP simulation | Realistic | m | A |
| D | BA.05 | Meteorological effects | Wind, temp, humidity | - | A |
| W(H) | BA.06 | Rocket artillery | BM-21, M270 MLRS | - | D |

#### 4.3.4 Visualization (VS)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | VS.01 | 3D terrain | Vietnamese terrain database | - | D |
| D | VS.02 | Impact visualization | Smoke, flash, dust | - | T |
| D | VS.03 | Time of day | Day/dusk/night | - | D |
| D | VS.04 | Weather effects | Rain, fog, clear | - | D |
| D | VS.05 | Display resolution | ≥ 1920×1080 | pixels | I |
| W(H) | VS.06 | Stereoscopic (VR) option | Yes | - | D |

---

## 5. MODULE D: MORTAR FIRE CONTROL SIMULATOR

### 5.1 Mortar System Specifications

| Mortar Type | Caliber | Range | Rate of Fire | Crew |
|-------------|---------|-------|--------------|------|
| M224 | 60mm | 70-3,490m | 20 rpm | 3 |
| M252 | 81mm | 83-5,650m | 15 rpm | 5 |
| M120 | 120mm | 200-7,200m | 4-10 rpm | 5 |
| 2B11 | 120mm | 480-7,100m | 8-10 rpm | 5 |

### 5.2 Training Requirements

| Skill | Description | Priority |
|-------|-------------|----------|
| **Fire direction** | Calculate firing data | CRITICAL |
| **Aiming & laying** | Set deflection/elevation | CRITICAL |
| **Charge selection** | Select propellant charges | HIGH |
| **Safety procedures** | Prevent accidents | CRITICAL |
| **Direct fire** | Anti-personnel direct engagement | MEDIUM |
| **Indirect fire** | Standard mortar fire | CRITICAL |

### 5.3 Mortar Simulator Requirements (Summary)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | MS.01 | Mortar types | 60/81/82/120mm | - | Vietnamese inventory |
| D | MS.02 | Deflection simulation | 0-6400 mils | mils | Full circle |
| D | MS.03 | Elevation simulation | 800-1500 mils | mils | Variable |
| D | MS.04 | Recoil simulation | Authentic | - | Tube disturbance |
| D | MS.05 | Charge simulation | 0-9 charges | - | Selectable |
| D | MS.06 | Round type | HE, WP, Illum | - | Different effects |
| D | MS.07 | Ballistic accuracy | ≥ 95% | - | vs real tables |
| D | MS.08 | Crew positions | Gunner, A-gunner, Ammo | - | Team training |
| W(H) | MS.09 | Networked FDC | Yes | - | Platoon integration |

---

## 6. SYSTEM INTEGRATION ARCHITECTURE

### 6.1 Common Platform Elements

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      COMMON PLATFORM ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  SHARED COMPONENTS (Reusable across all modules):                       │
│  ════════════════════════════════════════════════                       │
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │ TERRAIN ENGINE  │  │ BALLISTIC       │  │ INSTRUCTOR      │         │
│  │                 │  │ ENGINE          │  │ FRAMEWORK       │         │
│  │ • Vietnamese    │  │                 │  │                 │         │
│  │   terrain DB    │  │ • Trajectory    │  │ • Scenario      │         │
│  │ • Weather       │  │   calculation   │  │   editor        │         │
│  │   simulation    │  │ • Weapon        │  │ • Scoring       │         │
│  │ • 3D rendering  │  │   database      │  │ • AAR system    │         │
│  │ • VR support    │  │ • Impact        │  │ • Recording     │         │
│  │                 │  │   modeling      │  │                 │         │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘         │
│           │                    │                    │                   │
│           └────────────────────┼────────────────────┘                   │
│                                │                                        │
│                                ▼                                        │
│           ┌─────────────────────────────────────────┐                  │
│           │           COMMON API LAYER              │                  │
│           │   • Module interfaces                   │                  │
│           │   • Data exchange protocols             │                  │
│           │   • Network communication               │                  │
│           └─────────────────────────────────────────┘                  │
│                                │                                        │
│           ┌────────────────────┼────────────────────┐                  │
│           │                    │                    │                   │
│           ▼                    ▼                    ▼                   │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐         │
│  │ MANPADS MODULE  │  │ ARTILLERY FOS   │  │ MORTAR MODULE   │         │
│  │                 │  │ MODULE          │  │                 │         │
│  │ + Target drone  │  │                 │  │                 │         │
│  │   integration   │  │                 │  │                 │         │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Platform Reuse Benefits

| Component | Module A | Module B | Module C | Module D |
|-----------|----------|----------|----------|----------|
| Terrain Engine | ✓ | ✓ | ✓ | ✓ |
| Weather System | ✓ | ✓ | ✓ | ✓ |
| Ballistic Engine | ✓ (missile) | - | ✓ (arty) | ✓ (mortar) |
| Instructor Framework | ✓ | ✓ | ✓ | ✓ |
| Recording/AAR | ✓ | ✓ | ✓ | ✓ |
| VR Support | Optional | - | Optional | Optional |
| **Reuse Rate** | 60% | 30% | 70% | 75% |

---

## 7. APPLICABLE STANDARDS

### 7.1 Military Standards

| Standard | Application | Modules |
|----------|-------------|---------|
| MIL-STD-810H | Environmental testing | All |
| MIL-STD-461G | EMC/EMI | All |
| MIL-STD-882E | System Safety | All |
| MIL-STD-1472 | Human Engineering | All |
| MIL-HDBK-29612 | Instructional Systems | All |
| NATO STANAG 4586 | UAV Control | B (Drone) |
| NATO STANAG 4175 | Air Target Requirements | B (Drone) |

### 7.2 Vietnamese Standards

| Standard | Application |
|----------|-------------|
| QCVN 06:2010/BQP | Defense Product Quality |
| TCVN 6508 | Environmental Testing |
| TCVN 7699 | Electrical Safety |

---

## 8. COST & SCHEDULE ESTIMATES

### 8.1 Development Cost by Module

| Module | R&D Cost | Prototype | Production/Unit | Timeline |
|--------|----------|-----------|-----------------|----------|
| **A. MANPADS Trainer** | $50-80K | $30-40K | $20-35K | 12-18 months |
| **B. Target Drone** | $100-200K | $50-100K | $30-50K | 18-24 months |
| **C. Artillery FOS** | $40-60K | $20-30K | $15-25K | 12-15 months |
| **D. Mortar Simulator** | $30-50K | $15-25K | $12-20K | 9-12 months |
| **Common Platform** | $80-120K | - | - | Included in A |

### 8.2 Recommended Development Sequence

```
PHASED DEVELOPMENT ROADMAP:
════════════════════════════

PHASE 1 (Months 1-6): FOUNDATION
├── Common Platform development (Terrain, Instructor, Ballistic engines)
├── Architecture design for all modules
└── Requirements validation with Vietnamese military

PHASE 2 (Months 6-12): MODULE A + C
├── MANPADS Trainer development (priority #1)
├── Artillery FOS development (parallel)
├── Integration testing
└── User acceptance testing

PHASE 3 (Months 12-18): MODULE D
├── Mortar Simulator development
├── Integration with Artillery FOS (FDC linkage)
└── Field testing

PHASE 4 (Months 18-24): MODULE B
├── Target Drone development (highest risk)
├── Integration with MANPADS Trainer
└── Live-fire qualification
```

---

## 9. CRITICAL INPUT QUESTIONS

### For Customer/Stakeholder Input

| # | Question | Options | Impact |
|---|----------|---------|--------|
| **1** | Priority MANPADS type? | A) Stinger B) Igla C) Both D) Generic | Launcher design |
| **2** | Real target tracking required? | A) Yes (outdoor) B) No (indoor only) C) Both | Cost, complexity |
| **3** | Target drone priority? | A) Critical (live-fire) B) Nice-to-have C) Not needed | Module B scope |
| **4** | Artillery calibers needed? | 105/122/130/155mm - select all applicable | Ballistic database |
| **5** | Mortar calibers needed? | 60/81/82/120mm - select all applicable | Module D scope |
| **6** | VR capability? | A) Required B) Optional C) Not needed | Development effort |
| **7** | Multi-site networking? | A) Required B) Optional C) Not needed | Architecture |
| **8** | Total budget? | _____ USD | Scope limitation |

---

## 10. RECOMMENDATIONS

### 10.1 Product Priority

| Priority | Product | Rationale |
|----------|---------|-----------|
| **#1** | **MANPADS Trainer** | Highest demand, moderate complexity, exportable |
| **#2** | **Artillery FOS** | High synergy with MANPADS platform, lower risk |
| **#3** | **Mortar Simulator** | Builds on FOS, proven market (Zen Tech competitor) |
| **#4** | **Target Drone** | Highest risk, delay until platform proven |

### 10.2 Unique Selling Points for VN Products

| USP | Description |
|-----|-------------|
| **Integrated System** | All modules share common platform (cost efficiency) |
| **Vietnamese Terrain** | Native terrain database unavailable in imports |
| **Local Support** | Vietnamese language, local maintenance |
| **Customizable** | Adaptable to Vietnamese weapon inventory (B41, etc.) |
| **Cost Advantage** | 40-60% of import price |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | Claude + Hung | Initial draft |

---

*Phase 1 Task Clarification - Ready for stakeholder review and input*
