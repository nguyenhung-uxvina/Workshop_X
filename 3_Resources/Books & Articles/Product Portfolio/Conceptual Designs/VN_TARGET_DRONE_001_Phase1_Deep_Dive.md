# VN-TARGET-DRONE-001: HỆ THỐNG BIA BAY HUẤN LUYỆN PHÒNG KHÔNG
## Aerial Target Drone System for Air Defense Training
### PHASE 1: TASK CLARIFICATION - DEEP DIVE
### Pahl & Beitz Systematic Design Methodology

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Definition

| Aspect | Description |
|--------|-------------|
| **Product Name** | VN-TARGET-DRONE-001 - Aerial Target Drone System |
| **Vietnamese** | Hệ thống bia bay huấn luyện phòng không |
| **Primary Function** | Mô phỏng mục tiêu bay (máy bay, trực thăng, UAV, tên lửa hành trình) cho huấn luyện phòng không |
| **Target Users** | Lực lượng phòng không, Hải quân, Không quân |
| **Key Benefit** | Huấn luyện bắn đạn thật với mục tiêu thực, đánh giá năng lực hệ thống vũ khí |

### 1.2 Risk Assessment

| Factor | Level | Rationale |
|--------|-------|-----------|
| **Technical Complexity** | ⚠️ **VERY HIGH** | Turbojet propulsion, high-speed flight, recovery systems |
| **Development Cost** | ⚠️ **HIGH** | $100-200K R&D |
| **Time to Market** | ⚠️ **LONG** | 18-24 months |
| **Competition** | ⚠️ **STRONG** | QinetiQ, Airbus, Kratos dominant |
| **Strategic Value** | ✅ **VERY HIGH** | Enables realistic live-fire training |

### 1.3 Market Opportunity

| Metric | Value | Notes |
|--------|-------|-------|
| **TAM (5 năm)** | 30-50 hệ thống | VN + Regional export |
| **Unit Price Target** | $30,000-80,000 | Depends on speed class |
| **R&D Investment** | $100,000-200,000 | High complexity |
| **Break-even** | 5-8 units sold | |
| **Synergy with MANPADS** | CRITICAL | Primary customer is MANPADS training |

---

## 2. THREAT SIMULATION REQUIREMENTS

### 2.1 Target Types to Simulate

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    THREAT SIMULATION MATRIX                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  THREAT TYPE          SPEED         ALTITUDE      IR SIGNATURE   PRIORITY  │
│  ════════════════════════════════════════════════════════════════════════  │
│                                                                             │
│  🚁 HELICOPTER                                                              │
│     • Attack heli     100-300 km/h  50-500m       HIGH          ⭐⭐⭐ P1    │
│     • Transport       150-250 km/h  100-2000m     MEDIUM        ⭐⭐ P2     │
│                                                                             │
│  ✈️ FIXED-WING AIRCRAFT                                                     │
│     • Attack (A-10)   300-500 km/h  100-3000m     HIGH          ⭐⭐⭐ P1    │
│     • Transport (C-130) 400-600 km/h 1000-5000m   MEDIUM        ⭐⭐ P2     │
│     • Fighter (Su-25) 500-800 km/h  500-5000m     HIGH          ⭐⭐ P2     │
│                                                                             │
│  🚀 CRUISE MISSILE                                                          │
│     • Subsonic (Tomahawk) 800-900 km/h 30-100m    LOW-MED       ⭐⭐⭐ P1    │
│     • Sea-skimming    800-1000 km/h 5-30m         LOW           ⭐⭐ P2     │
│                                                                             │
│  🛸 UAV/DRONE                                                               │
│     • Tactical (Bayraktar) 150-220 km/h 100-3000m LOW           ⭐⭐⭐ P1    │
│     • Reconnaissance  100-200 km/h  500-5000m     LOW           ⭐⭐ P2     │
│     • FPV attack      80-150 km/h   0-500m        VERY LOW      ⭐⭐ P2     │
│                                                                             │
│  P1 = High Priority (Phase 1)                                              │
│  P2 = Medium Priority (Phase 2+)                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Speed Class Definition

| Class | Speed Range | Propulsion | Target Simulation | Development Priority |
|-------|-------------|------------|-------------------|---------------------|
| **Class A: Low Speed** | 80-200 km/h | Propeller | Helicopter, UAV, slow aircraft | ⭐⭐⭐ FIRST |
| **Class B: Medium Speed** | 200-400 km/h | Propeller/Small jet | Attack aircraft, fast UAV | ⭐⭐ SECOND |
| **Class C: High Speed** | 400-700 km/h | Turbojet | Fighter jet, cruise missile | ⭐ THIRD |
| **Class D: Supersonic** | 700-1500 km/h | Turbojet/Ramjet | Fast jet, ballistic missile | FUTURE |

**Recommendation:** Start with **Class A + Class B** (lower risk, lower cost), then expand to Class C.

---

## 3. COMPETITOR ANALYSIS

### 3.1 Major Competitors

| Manufacturer | Product | Speed | Recovery | Price Est. | Market |
|--------------|---------|-------|----------|------------|--------|
| **QinetiQ** (UK) | Banshee Jet 80+ | 720 km/h | Parachute | $100-200K | NATO, US Army |
| **QinetiQ** (UK) | Banshee Whirlwind | 200 km/h | Parachute | $30-50K | Training |
| **Airbus** (DE) | Do-DT45 | 814 km/h | Expendable | $50-100K | NATO |
| **Airbus** (DE) | Do-DT25 | 555 km/h | Parachute | $30-50K | Europe |
| **Kratos** (US) | BQM-177A | 900+ km/h | Parachute | $150K+ | US Navy |
| **Denel** (ZA) | Skua | 750 km/h | Parachute/airbag | $80-120K | Africa, Asia |
| **China** | WJ-500 | 750 km/h | Parachute | $30-50K | Export |
| **China** | ZH-150 | 900 km/h | Parachute | $50-80K | PLA |

### 3.2 QinetiQ Banshee Family (Benchmark)

```
QINETIQ BANSHEE PRODUCT LINE:
═════════════════════════════

┌──────────────────────────────────────────────────────────────────────────┐
│                       BANSHEE FAMILY SPECIFICATIONS                       │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  MODEL              ENGINE          SPEED      ENDURANCE   ALTITUDE      │
│  ─────────────────────────────────────────────────────────────────────  │
│  Banshee Whirlwind  40hp Rotary     200 km/h   Long        Low-Medium    │
│  Banshee Jet 40     1×40kg Turbojet 480 km/h   30+ min     9,000m        │
│  Banshee Jet 40+    1×40kg Turbojet 500 km/h   30+ min     9,000m        │
│  Banshee Jet 80     2×40kg Turbojet 650 km/h   45 min      9,000m        │
│  Banshee Jet 80+    2×40kg Turbojet 720 km/h   45+ min     9,144m        │
│  MQM-185B (US Army) 2×40kg Turbojet 720 km/h   45+ min     9,144m        │
│                                                                          │
│  KEY FEATURES:                                                           │
│  • Catapult launch                                                       │
│  • Parachute recovery                                                    │
│  • "Hot Nose" IR enhancement (Band I, II, III)                          │
│  • Radar augmentation                                                    │
│  • Miss Distance Indicator (MDI) compatible                              │
│  • CASPA digital avionics                                                │
│  • Autonomous waypoint navigation                                        │
│  • Used by 40+ countries                                                 │
│  • Tested against: Stinger, Mistral, Igla, AIM-9, AMRAAM, Patriot       │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Airbus Do-DT Family (Benchmark)

| Model | Role | Speed | Notes |
|-------|------|-------|-------|
| **Do-DT25** | Fighter jet, UAV, cruise missile | 555 km/h (300 kt) | Most versatile |
| **Do-DT45** | High-speed threats | 814 km/h (440 kt) | Live-fire target |
| **Do-DT55neo** | Anti-radar missile | 900+ km/h | Ejectable from DT25 |
| **HT05** | Combat helicopter | 200-300 km/h | Low-speed target |

### 3.4 Gap Analysis for VN Product

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TARGET DRONE GAP ANALYSIS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FEATURE                    QINETIQ  AIRBUS  KRATOS  CHINA   VN-TARGET     │
│  ────────────────────────   ───────  ──────  ──────  ─────   ─────────     │
│  Low-speed (helicopter)      ✓        ✓       ✗       ✓       ✓            │
│  Medium-speed (aircraft)     ✓        ✓       ✓       ✓       ✓ (Phase 1)  │
│  High-speed (cruise missile) ✓        ✓       ✓       ✓       ✓ (Phase 2)  │
│  IR enhancement (Hot Nose)   ✓        ✓       ✓       ~       ✓ ★          │
│  Radar augmentation          ✓        ✓       ✓       ✓       ✓            │
│  Miss Distance Indicator     ✓        ✓       ✓       ~       ✓ ★          │
│  Parachute recovery          ✓        ~       ✓       ✓       ✓            │
│  Sea-skimming (<30m)         ✓        ✓       ✓       ✓       W (Phase 2)  │
│  Autonomous navigation       ✓        ✓       ✓       ✓       ✓            │
│  Multi-target control        ✓        ✓       ✓       ~       ✓            │
│  Vietnamese terrain/SW       ✗        ✗       ✗       ✗       ✓ ★          │
│  Local support               ✗        ✗       ✗       ~       ✓ ★          │
│  Integration with MANPADS    ~        ~       ~       ✗       ✓ ★          │
│  Price (low-speed)           $$$      $$$     N/A     $$      $ ★          │
│  Price (high-speed)          $$$$     $$$$    $$$$$   $$$     $$ ★         │
│                                                                             │
│  ★ = Unique VN differentiation                                             │
│  W = Wish (future capability)                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. SYSTEM ARCHITECTURE

### 4.1 Complete System Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              VN-TARGET-DRONE-001 COMPLETE SYSTEM ARCHITECTURE               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    GROUND CONTROL STATION (GCS)                     │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │   │
│  │  │   FLIGHT    │  │  TELEMETRY  │  │  SCORING    │                 │   │
│  │  │   CONTROL   │  │   DISPLAY   │  │   SYSTEM    │                 │   │
│  │  │             │  │             │  │             │                 │   │
│  │  │ • Waypoint  │  │ • Position  │  │ • MDI data  │                 │   │
│  │  │   planning  │  │ • Altitude  │  │ • Hit/miss  │                 │   │
│  │  │ • Manual    │  │ • Speed     │  │ • Recording │                 │   │
│  │  │   override  │  │ • Fuel/batt │  │ • Playback  │                 │   │
│  │  │ • Emergency │  │ • Engine    │  │             │                 │   │
│  │  │   terminate │  │   status    │  │             │                 │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                          RF Data Link (≥100 km)                            │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         AERIAL TARGET DRONE                         │   │
│  │                                                                     │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │   │
│  │  │  PROPULSION │  │  AVIONICS   │  │  PAYLOAD    │                 │   │
│  │  │             │  │             │  │  MODULE     │                 │   │
│  │  │ • Engine    │  │ • Autopilot │  │             │                 │   │
│  │  │   (jet/prop)│  │ • IMU       │  │ • IR        │                 │   │
│  │  │ • Fuel      │  │ • GPS       │  │   enhance   │                 │   │
│  │  │ • ESC       │  │ • Altimeter │  │ • Radar     │                 │   │
│  │  │             │  │ • Data link │  │   augment   │                 │   │
│  │  │             │  │ • FTS       │  │ • MDI       │                 │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                 │   │
│  │                                                                     │   │
│  │  ┌─────────────┐  ┌─────────────┐                                  │   │
│  │  │  AIRFRAME   │  │  RECOVERY   │                                  │   │
│  │  │             │  │  SYSTEM     │                                  │   │
│  │  │ • Composite │  │             │                                  │   │
│  │  │   body      │  │ • Parachute │                                  │   │
│  │  │ • Wings     │  │ • Airbag    │                                  │   │
│  │  │ • Control   │  │ • Float     │                                  │   │
│  │  │   surfaces  │  │   (water)   │                                  │   │
│  │  └─────────────┘  └─────────────┘                                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    LAUNCH & RECOVERY EQUIPMENT                      │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                 │   │
│  │  │  LAUNCHER   │  │   ENGINE    │  │  TRANSPORT  │                 │   │
│  │  │             │  │   STARTER   │  │  /STORAGE   │                 │   │
│  │  │ • Pneumatic │  │             │  │             │                 │   │
│  │  │   catapult  │  │ • Air start │  │ • Trailer   │                 │   │
│  │  │ • Rocket    │  │ • Electric  │  │ • Cases     │                 │   │
│  │  │   booster   │  │   start     │  │ • Spares    │                 │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Product Line Concepts

#### 4.2.1 Concept A: VN-TD-100 (Low-Speed Propeller)

```
VN-TD-100 "EAGLE" - LOW SPEED TARGET DRONE
═══════════════════════════════════════════

TARGET SIMULATION: Helicopter, slow UAV, reconnaissance aircraft

SPECIFICATIONS:
┌────────────────────────────────────────────────────────────┐
│  Parameter              │  Value                          │
├────────────────────────────────────────────────────────────┤
│  Wingspan               │  2.5-3.0 m                       │
│  Length                 │  2.0-2.5 m                       │
│  MTOW                   │  15-25 kg                        │
│  Engine                 │  2-stroke gasoline (25-50 cc)    │
│                         │  or Electric (10-15 kW)          │
│  Speed range            │  80-200 km/h                     │
│  Endurance              │  1-2 hours                       │
│  Ceiling                │  3,000 m                         │
│  Launch                 │  Catapult / Hand launch          │
│  Recovery               │  Parachute                       │
│  Control range          │  50 km                           │
│  Payload capacity       │  3-5 kg                          │
│  Unit cost target       │  $8,000-15,000                   │
└────────────────────────────────────────────────────────────┘

ADVANTAGES:
✓ Lower development risk
✓ Lower cost per unit
✓ Longer endurance
✓ Easier recovery
✓ Suitable for frequent training

LIMITATIONS:
✗ Cannot simulate high-speed threats
✗ Limited to MANPADS, short-range SAM training
```

#### 4.2.2 Concept B: VN-TD-300 (Medium-Speed Jet)

```
VN-TD-300 "FALCON" - MEDIUM SPEED TARGET DRONE
══════════════════════════════════════════════

TARGET SIMULATION: Attack aircraft, fast UAV, slow cruise missile

SPECIFICATIONS:
┌────────────────────────────────────────────────────────────┐
│  Parameter              │  Value                          │
├────────────────────────────────────────────────────────────┤
│  Wingspan               │  2.0-2.5 m                       │
│  Length                 │  2.5-3.0 m                       │
│  MTOW                   │  40-60 kg                        │
│  Engine                 │  Small turbojet (20-40 kg thrust)│
│  Speed range            │  200-500 km/h                    │
│  Endurance              │  30-45 min                       │
│  Ceiling                │  6,000 m                         │
│  Launch                 │  Pneumatic catapult              │
│  Recovery               │  Parachute + airbag              │
│  Control range          │  80 km                           │
│  Payload capacity       │  5-10 kg                         │
│  Unit cost target       │  $25,000-40,000                  │
└────────────────────────────────────────────────────────────┘

ADVANTAGES:
✓ Versatile threat simulation
✓ Moderate development complexity
✓ Good price/performance ratio
✓ Reusable

LIMITATIONS:
✗ Cannot simulate supersonic threats
✗ Higher operating cost than propeller
```

#### 4.2.3 Concept C: VN-TD-600 (High-Speed Jet)

```
VN-TD-600 "RAPTOR" - HIGH SPEED TARGET DRONE
════════════════════════════════════════════

TARGET SIMULATION: Fast jet, cruise missile, anti-ship missile

SPECIFICATIONS:
┌────────────────────────────────────────────────────────────┐
│  Parameter              │  Value                          │
├────────────────────────────────────────────────────────────┤
│  Wingspan               │  2.5-3.5 m                       │
│  Length                 │  3.5-4.5 m                       │
│  MTOW                   │  80-150 kg                       │
│  Engine                 │  Turbojet (40-80 kg thrust)      │
│                         │  Twin-engine option              │
│  Speed range            │  400-750 km/h                    │
│  Endurance              │  30-60 min                       │
│  Ceiling                │  9,000 m                         │
│  Launch                 │  Rocket-assisted catapult        │
│  Recovery               │  Parachute + airbag              │
│  Control range          │  100+ km                         │
│  Payload capacity       │  15-30 kg                        │
│  Unit cost target       │  $50,000-80,000                  │
└────────────────────────────────────────────────────────────┘

ADVANTAGES:
✓ Realistic cruise missile simulation
✓ Full threat spectrum coverage
✓ Sea-skimming capability

LIMITATIONS:
✗ Highest development risk
✗ Highest cost
✗ Complex recovery
✗ Requires experienced team
```

---

## 5. CRITICAL SUBSYSTEMS

### 5.1 IR Signature Enhancement ("Hot Nose")

```
IR ENHANCEMENT SYSTEM:
═════════════════════

PURPOSE: Create realistic IR signature for IR-guided missiles (Stinger, Igla, Mistral)

┌─────────────────────────────────────────────────────────────────────────────┐
│                    IR SIGNATURE SIMULATION                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  REAL AIRCRAFT IR SOURCES:                                                  │
│  ═════════════════════════                                                  │
│                                                                             │
│  1. ENGINE EXHAUST (Rear)                                                   │
│     • Temperature: 400-800°C                                                │
│     • IR Band: I (1-3 μm), II (3-5 μm)                                     │
│     • Strongest signature                                                   │
│                                                                             │
│  2. ENGINE INTAKE (Front/Side)                                              │
│     • Temperature: 100-300°C                                                │
│     • IR Band: II (3-5 μm)                                                 │
│     • Important for head-on engagements                                     │
│                                                                             │
│  3. AIRFRAME HEATING (Aerodynamic)                                          │
│     • Temperature: 50-150°C                                                 │
│     • IR Band: III (8-12 μm)                                               │
│     • Increases with speed                                                  │
│                                                                             │
│  SIMULATION METHODS:                                                        │
│  ═══════════════════                                                        │
│                                                                             │
│  A. TURBOJET ENGINE (Natural)                                               │
│     • Provides realistic rear-aspect signature                              │
│     • Included in jet-powered drones                                        │
│                                                                             │
│  B. "HOT NOSE" BLACK-BODY EMITTER                                           │
│     • Electrically heated element                                           │
│     • Provides front/side-aspect signature                                  │
│     • Bands I, II, III selectable                                          │
│     • QinetiQ patented technology                                           │
│                                                                             │
│  C. IR FLARES (Consumable)                                                  │
│     • Provides high-intensity burst                                         │
│     • Limited duration                                                      │
│     • Used as towed target augmentation                                     │
│                                                                             │
│  D. PYROTECHNIC AUGMENTER                                                   │
│     • Provides sustained signature                                          │
│     • Higher intensity than black-body                                      │
│     • Safety considerations                                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Miss Distance Indicator (MDI)

```
MISS DISTANCE INDICATOR SYSTEM:
═══════════════════════════════

PURPOSE: Measure how close projectile/missile passed to target (for scoring)

┌─────────────────────────────────────────────────────────────────────────────┐
│                    MDI SYSTEM COMPONENTS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. ACOUSTIC MDI (Primary method)                                           │
│     ├── Detects shockwave of supersonic projectile                         │
│     ├── 6-12 pressure sensors in nose                                      │
│     ├── Measures miss distance + angular position                          │
│     ├── Real-time telemetry to ground                                      │
│     └── Works for: Guns, cannons, supersonic missiles                      │
│                                                                             │
│  2. RADAR MDI (Alternative)                                                 │
│     ├── Doppler detection of passing objects                               │
│     ├── Works for subsonic + supersonic                                    │
│     └── Higher cost                                                        │
│                                                                             │
│  3. SCORING STATION (Ground)                                                │
│     ├── Receives MDI telemetry                                             │
│     ├── Calculates exact miss distance                                     │
│     ├── Records all engagements                                            │
│     └── Generates reports                                                  │
│                                                                             │
│  SPECIFICATIONS (Air Target AS-135):                                        │
│     • Miss distance accuracy: ±0.5 m                                       │
│     • Angular resolution: 12 sectors (30° each)                            │
│     • Detection range: 0-50 m                                              │
│     • Projectile speed: Supersonic required                                │
│     • Weight: ~0.7 kg                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Recovery System

```
RECOVERY SYSTEM OPTIONS:
════════════════════════

┌────────────────────────────────────────────────────────────────────────────┐
│  METHOD          │  PROS                    │  CONS                       │
├────────────────────────────────────────────────────────────────────────────┤
│  PARACHUTE       │  • Simple, reliable      │  • Wind drift               │
│                  │  • Low cost              │  • Landing damage possible  │
│                  │  • Works over water      │                             │
├────────────────────────────────────────────────────────────────────────────┤
│  PARACHUTE +     │  • Soft landing          │  • Heavier system           │
│  AIRBAG          │  • Protects drone        │  • More complex             │
│                  │  • Inverted landing OK   │                             │
├────────────────────────────────────────────────────────────────────────────┤
│  NET RECOVERY    │  • Precise landing       │  • Ground equipment needed  │
│                  │  • No damage             │  • Complex coordination     │
├────────────────────────────────────────────────────────────────────────────┤
│  BELLY LANDING   │  • No extra equipment    │  • Requires runway          │
│  (Skid)          │  • Quick turnaround      │  • Damage risk              │
├────────────────────────────────────────────────────────────────────────────┤
│  EXPENDABLE      │  • No recovery cost      │  • High per-shot cost       │
│  (No recovery)   │  • Simpler design        │  • Not reusable             │
└────────────────────────────────────────────────────────────────────────────┘

RECOMMENDATION: Parachute + Airbag (balance of cost and drone protection)
```

---

## 6. REQUIREMENTS LIST

### 6.1 Flight Performance (FP)

| D/W | ID | Requirement | Class A | Class B | Class C | Unit | Verification |
|-----|-----|-------------|---------|---------|---------|------|--------------|
| D | FP.01 | Maximum speed | 200 | 500 | 750 | km/h | T |
| D | FP.02 | Cruise speed | 120-180 | 300-400 | 500-650 | km/h | T |
| D | FP.03 | Minimum speed | 60 | 150 | 250 | km/h | T |
| D | FP.04 | Maximum altitude | 3,000 | 6,000 | 9,000 | m | T |
| D | FP.05 | **Minimum altitude** | **30** | **30** | **15** | **m** | **T** |
| D | FP.06 | Endurance | 90-120 | 30-45 | 30-60 | min | T |
| D | FP.07 | Range | 50 | 80 | 100+ | km | T |
| D | FP.08 | G-load | 3 | 4 | 5 | g | T |
| W(H) | FP.09 | Sea-skimming | - | - | 5-30 | m | T |

### 6.2 Physical Characteristics (PC)

| D/W | ID | Requirement | Class A | Class B | Class C | Unit | Verification |
|-----|-----|-------------|---------|---------|---------|------|--------------|
| D | PC.01 | Wingspan | 2.5-3.0 | 2.0-2.5 | 2.5-3.5 | m | I |
| D | PC.02 | Length | 2.0-2.5 | 2.5-3.0 | 3.5-4.5 | m | I |
| D | PC.03 | MTOW | 15-25 | 40-60 | 80-150 | kg | I |
| D | PC.04 | Payload capacity | 3-5 | 5-10 | 15-30 | kg | I |
| D | PC.05 | Airframe material | Composite | Composite | Composite | - | I |

### 6.3 Propulsion (PR)

| D/W | ID | Requirement | Class A | Class B | Class C | Unit | Verification |
|-----|-----|-------------|---------|---------|---------|------|--------------|
| D | PR.01 | Engine type | Gasoline/Electric | Turbojet | Turbojet | - | I |
| D | PR.02 | Power/Thrust | 5-10 kW | 20-40 kg | 40-80 kg | - | T |
| D | PR.03 | Fuel/Battery | 5-10 L / 10 Ah | 10-20 L | 20-40 L | - | I |
| D | PR.04 | Engine start | Electric | Air/Electric | Air/Electric | - | T |

### 6.4 Signature Enhancement (SE)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | SE.01 | **IR enhancement (rear)** | **Engine exhaust** | - | **T** |
| D | SE.02 | **IR enhancement (front)** | **Hot nose system** | - | **T** |
| D | SE.03 | IR bands | I, II, III selectable | - | T |
| D | SE.04 | IR intensity | Adjustable (heli/aircraft) | - | T |
| D | SE.05 | **Radar augmentation** | **Corner reflector** | - | **T** |
| D | SE.06 | RCS enhancement | 0.1-10 m² adjustable | - | T |
| W(H) | SE.07 | Visual enhancement | Smoke generator | - | T |
| W(H) | SE.08 | Flare dispenser | IR countermeasure | - | T |

### 6.5 Scoring System (SC)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | SC.01 | **Miss distance indicator** | **Acoustic MDI** | - | **T** |
| D | SC.02 | MDI accuracy | ±1 | m | T |
| D | SC.03 | MDI angular resolution | 12 sectors | - | T |
| D | SC.04 | Real-time telemetry | Yes | - | T |
| D | SC.05 | Ground scoring station | Yes | - | D |
| D | SC.06 | Hit detection | Projectile + missile | - | T |

### 6.6 Launch System (LS)

| D/W | ID | Requirement | Class A | Class B | Class C | Unit | Verification |
|-----|-----|-------------|---------|---------|---------|------|--------------|
| D | LS.01 | Launch method | Catapult/Hand | Catapult | Rocket-assisted | - | T |
| D | LS.02 | Launch speed | 25-30 | 40-60 | 60-80 | m/s | T |
| D | LS.03 | Launcher mobility | Trailer-mounted | Trailer-mounted | Trailer-mounted | - | I |
| D | LS.04 | Setup time | ≤15 | ≤20 | ≤30 | min | T |
| D | LS.05 | Launch angle | 15-30 | 15-30 | 15-30 | degrees | T |

### 6.7 Recovery System (RC)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | RC.01 | **Recovery method** | **Parachute + Airbag** | - | **T** |
| D | RC.02 | Descent rate | 5-8 | m/s | T |
| D | RC.03 | Water landing | Capable (floatation) | - | T |
| D | RC.04 | Reuse cycles | ≥20 | flights | T |
| D | RC.05 | Emergency termination | Flight termination system | - | T |

### 6.8 Navigation & Control (NC)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | NC.01 | **Autopilot** | **Digital, 3-axis** | - | **D** |
| D | NC.02 | GPS navigation | Waypoint autonomous | - | T |
| D | NC.03 | Altitude hold | ±5 | m | T |
| D | NC.04 | Heading hold | ±2 | degrees | T |
| D | NC.05 | **Low-level flight** | **Radar/Baro altimeter** | - | **T** |
| D | NC.06 | Terrain following | Optional | - | D |
| D | NC.07 | Manual override | Full control | - | T |
| D | NC.08 | Geofencing | Safety boundary | - | T |

### 6.9 Data Link & Telemetry (DL)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | DL.01 | Control range | ≥100 | km | T |
| D | DL.02 | Telemetry rate | ≥10 | Hz | T |
| D | DL.03 | Frequency band | UHF/L-band | - | D |
| D | DL.04 | Encryption | Optional | - | D |
| D | DL.05 | Multi-target control | Up to 4 | drones | T |

### 6.10 Ground Control Station (GC)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | GC.01 | Flight planning | Waypoint editor | - | D |
| D | GC.02 | Real-time display | Position, speed, altitude | - | D |
| D | GC.03 | Telemetry recording | Full flight | - | D |
| D | GC.04 | Scoring integration | MDI data display | - | D |
| D | GC.05 | Mobility | Vehicle-mounted | - | I |
| D | GC.06 | Operator stations | 1-2 | - | I |

### 6.11 Safety (SA)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | SA.01 | Flight termination | Manual + automatic | - | T |
| D | SA.02 | Lost link behavior | Return to base / terminate | - | T |
| D | SA.03 | Geofence violation | Auto-terminate | - | T |
| D | SA.04 | Low fuel/battery | Auto-recovery | - | T |
| D | SA.05 | Range safety | Transponder | - | D |

### 6.12 Environment (EN)

| D/W | ID | Requirement | Value | Unit | Verification |
|-----|-----|-------------|-------|------|--------------|
| D | EN.01 | Operating temperature | 0-45 | °C | T |
| D | EN.02 | Wind resistance | 15 | m/s | T |
| D | EN.03 | Rain operation | Light rain | - | T |
| D | EN.04 | Storage temperature | -20 to 55 | °C | T |
| D | EN.05 | Salt spray (naval) | MIL-STD-810H | - | T |

### 6.13 Costs (CO)

| D/W | ID | Requirement | Class A | Class B | Class C | Unit | Verification |
|-----|-----|-------------|---------|---------|---------|------|--------------|
| D | CO.01 | R&D budget | $30-50K | $60-100K | $100-200K | USD | I |
| D | CO.02 | Prototype cost | $15-25K | $30-50K | $50-100K | USD | I |
| D | CO.03 | Unit production cost | $8-12K | $20-30K | $40-60K | USD | I |
| D | CO.04 | Target selling price | $15-20K | $35-50K | $60-90K | USD | I |
| D | CO.05 | Cost per flight | $200-500 | $500-1000 | $1000-2000 | USD | A |

---

## 7. DEVELOPMENT ROADMAP

### 7.1 Phased Development Strategy

```
PHASED DEVELOPMENT ROADMAP:
═══════════════════════════

PHASE 1 (Months 1-12): CLASS A - LOW SPEED DRONE
════════════════════════════════════════════════
├── Month 1-3: Detailed design
├── Month 4-6: Prototype fabrication
├── Month 7-9: Flight testing
├── Month 10-12: Integration with MANPADS trainer
└── Deliverable: VN-TD-100 "Eagle" production-ready

PHASE 2 (Months 12-24): CLASS B - MEDIUM SPEED DRONE
════════════════════════════════════════════════════
├── Month 12-15: Design + turbojet selection
├── Month 16-18: Prototype fabrication
├── Month 19-21: Flight testing
├── Month 22-24: Customer trials
└── Deliverable: VN-TD-300 "Falcon" production-ready

PHASE 3 (Months 24-36): CLASS C - HIGH SPEED DRONE
═══════════════════════════════════════════════════
├── Month 24-28: Advanced design
├── Month 29-32: Prototype + testing
├── Month 33-36: Qualification
└── Deliverable: VN-TD-600 "Raptor" production-ready

TOTAL TIMELINE: 3 YEARS for full product line
```

### 7.2 Risk Mitigation Strategy

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Turbojet procurement | HIGH | HIGH | Partner with Chinese/Turkish supplier |
| Recovery system failure | MEDIUM | HIGH | Redundant parachute, airbag |
| IR enhancement complexity | MEDIUM | MEDIUM | License "Hot Nose" technology |
| Cost overrun | MEDIUM | MEDIUM | Start with Class A (lower risk) |
| Export restrictions | LOW | HIGH | Design with COTS components |

---

## 8. SUPPLIER LANDSCAPE

### 8.1 Turbojet Engine Options

| Manufacturer | Model | Thrust | Weight | Price Est. | Notes |
|--------------|-------|--------|--------|------------|-------|
| **JetCat** (DE) | P500 | 50 kg | 3.2 kg | $8,000-12,000 | High quality |
| **Kingtech** (TW) | K-85G | 85 kg | 4.8 kg | $5,000-8,000 | Popular |
| **Swiwin** (CN) | SW60B | 60 kg | 3.1 kg | $3,000-5,000 | Good value |
| **PBS** (CZ) | TJ100 | 100 kg | 15 kg | $15,000-25,000 | Proven |
| **Microturbo** (FR) | TRI 60 | 60 kg | 18 kg | $20,000+ | Military grade |

### 8.2 Autopilot Options

| Manufacturer | Model | Features | Price | Notes |
|--------------|-------|----------|-------|-------|
| **Pixhawk** | Cube Orange | Open source, proven | $500-800 | Development |
| **UAV Navigation** | Vector | Professional, certified | $5,000-10,000 | Production |
| **Lockheed Martin** | Kestrel | Military grade | $20,000+ | Export controlled |
| **Chinese OEM** | Various | Copy of Western systems | $1,000-3,000 | Integration risk |

### 8.3 IR Enhancement Options

| Supplier | Technology | Bands | Price Est. | Notes |
|----------|------------|-------|------------|-------|
| **QinetiQ** | Hot Nose | I, II, III | License required | Patent protected |
| **Custom develop** | Black-body emitter | I, II | $5,000-10,000 | Development effort |
| **Flare systems** | Pyrotechnic | I, II | $100-500/use | Consumable |

---

## 9. COST ESTIMATES

### 9.1 Development Costs by Class

| Category | Class A | Class B | Class C |
|----------|---------|---------|---------|
| Design & Engineering | $15,000 | $30,000 | $60,000 |
| Prototype Airframe | $5,000 | $10,000 | $20,000 |
| Propulsion | $2,000 | $10,000 | $25,000 |
| Avionics & Control | $5,000 | $10,000 | $15,000 |
| IR Enhancement | $3,000 | $8,000 | $15,000 |
| MDI Integration | $2,000 | $3,000 | $5,000 |
| Ground Station | $8,000 | $12,000 | $20,000 |
| Testing & Certification | $5,000 | $15,000 | $30,000 |
| Contingency (20%) | $9,000 | $19,600 | $38,000 |
| **TOTAL R&D** | **$54,000** | **$117,600** | **$228,000** |

### 9.2 Production Costs Per Unit

| Component | Class A | Class B | Class C |
|-----------|---------|---------|---------|
| Airframe | $2,000 | $4,000 | $8,000 |
| Propulsion | $1,500 | $8,000 | $20,000 |
| Avionics | $2,000 | $4,000 | $6,000 |
| IR Enhancement | $1,000 | $3,000 | $6,000 |
| MDI | $1,500 | $2,000 | $2,500 |
| Recovery System | $500 | $1,500 | $3,000 |
| Assembly & Test | $1,000 | $2,000 | $4,000 |
| **UNIT COST** | **$9,500** | **$24,500** | **$49,500** |
| **SELLING PRICE (50% margin)** | **$14,000** | **$37,000** | **$74,000** |

### 9.3 Complete System Cost

| Configuration | Components | Cost |
|---------------|------------|------|
| **Basic System** | 4× Class A drones + GCS + Launcher | ~$80,000 |
| **Standard System** | 2× Class A + 2× Class B + GCS + Launcher | ~$130,000 |
| **Full System** | 2× Class A + 2× Class B + 2× Class C + GCS | ~$280,000 |

---

## 10. CRITICAL INPUT QUESTIONS

| # | Question | Options | Impact |
|---|----------|---------|--------|
| **1** | Priority speed class? | A) Low (heli/UAV) B) Medium (aircraft) C) High (cruise missile) | Product focus |
| **2** | Development sequence? | A) Class A first B) All parallel C) Class B first | Timeline, risk |
| **3** | Propulsion source? | A) Chinese B) European C) Develop own | Cost, control |
| **4** | Recovery requirement? | A) Reusable (parachute) B) Expendable C) Both | Cost per use |
| **5** | IR enhancement? | A) License tech B) Develop own C) Flare only | Development effort |
| **6** | Primary customer? | A) Air Defense B) Navy C) Export | Requirements |
| **7** | Live-fire vs training? | A) Live-fire primary B) Tracking training C) Both | MDI priority |
| **8** | Total investment budget? | _____ USD | Scope limitation |

---

## 11. RECOMMENDATIONS

### 11.1 Product Priority

| Priority | Product | Timeline | Investment | Risk |
|----------|---------|----------|------------|------|
| **#1** | VN-TD-100 (Class A) | 12 months | $50-60K | LOW |
| **#2** | VN-TD-300 (Class B) | +12 months | $100-120K | MEDIUM |
| **#3** | VN-TD-600 (Class C) | +12 months | $200-250K | HIGH |

### 11.2 Development Strategy

1. **Start with Class A** - Lower risk, faster time-to-market, builds capability
2. **Partner for turbojet** - Don't develop engine, source from established supplier
3. **Develop IR enhancement in-house** - Critical differentiator, avoid license costs
4. **Integrate early with MANPADS trainer** - Validates both products together
5. **Target regional export** - Vietnam + ASEAN market for cost advantage

### 11.3 Unique Selling Points

| USP | Description |
|-----|-------------|
| **🔗 MANPADS Integration** | Complete training ecosystem (Simulator + Live target) |
| **🇻🇳 Local Support** | Vietnamese operation, maintenance, spare parts |
| **💰 Cost Advantage** | 40-60% of Western competitors |
| **🌏 Regional Market** | ASEAN air defense training services |
| **📦 Modular System** | Speed classes can be mixed per customer need |

---

## 12. SUMMARY

### 12.1 Requirements Count

| Category | Count |
|----------|-------|
| Flight Performance | 9 |
| Physical Characteristics | 5 |
| Propulsion | 4 |
| Signature Enhancement | 8 |
| Scoring System | 6 |
| Launch System | 5 |
| Recovery System | 5 |
| Navigation & Control | 8 |
| Data Link | 5 |
| Ground Control | 6 |
| Safety | 5 |
| Environment | 5 |
| Costs | 5 |
| **TOTAL** | **76** |

### 12.2 Key Decisions Needed

1. ✅ Start with Class A or Class B?
2. ✅ Turbojet supplier selection
3. ✅ IR enhancement approach (license vs develop)
4. ✅ Investment commitment
5. ✅ Target customer (domestic vs export)

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | Claude + Hung | Initial draft |

---

*Phase 1 Task Clarification - DEEP DIVE COMPLETE - Highest complexity module*
*Recommend: Start with Class A, prove technology, then expand to B and C*
