# DEEP-DIVE ANALYSIS: DANH MỤC BIA MỤC TIÊU BIỂN
## Naval Target Systems Portfolio for Vietnamese Defense Training
## Bia Mục tiêu Huấn luyện Hải quân

**Framework Applied:** D-M-I-R × ODI × Systems Thinking × Pahl-Beitz Systematic Design × Meta-Learning
**Date:** January 31, 2026
**Classification:** CONFIDENTIAL - Technical Design Document

---

# EXECUTIVE SUMMARY

## Portfolio Overview: 5 Marine Target Systems

| Code | Product Name (EN) | Tên Tiếng Việt | Price | R&D | Priority |
|------|-------------------|----------------|-------|-----|----------|
| VN-TGT-001 | Towed Artillery/Missile Target (Sea) | Bia kéo bắn pháo/tên lửa trên biển | $45,000 | $85,000 | ⭐⭐⭐ P1 |
| VN-TGT-002 | Aerial Target Drone | Bia bay huấn luyện phòng không | $55,000 | $150,000 | ⭐⭐⭐ P1 |
| VN-TGT-003 | Floating Mine Target | Bia mìn trôi huấn luyện rà phá | $8,000 | $25,000 | ⭐⭐ P2 |
| VN-TGT-004 | Marine LOMAH Scoring Target | Bia chấm điểm súng bộ binh trên biển | $25,000 | $55,000 | ⭐⭐⭐ P1 |
| VN-TGT-005 | Target USV (Surface Vessel) | Xuồng mục tiêu không người lái | $65,000 | $120,000 | ⭐⭐ P2 |

## Strategic Value Proposition

**The "Zero Practice Problem" in Naval Weapons Training:**
- Naval gunners CANNOT practice on real targets (cost, safety, availability)
- Missile operators get 0-1 live fires in entire career
- Mine clearance training uses simulated targets only
- Result: 40-60% effectiveness vs trained adversaries

**The Solution: Indigenous Target Systems Portfolio**
- Realistic targets for live-fire training
- 60-70% cost savings vs imported alternatives
- Full capability ownership (no foreign dependency)
- Recurring revenue from consumables/recovery

---

# PART 1: VN-TGT-001 - TOWED ARTILLERY/MISSILE TARGET (SEA)
## Bia Kéo Bắn Pháo/Tên lửa Trên Biển

## 1.1 Product Definition

| Aspect | Specification |
|--------|---------------|
| **Product Code** | VN-TGT-001 |
| **Full Name (EN)** | Towed Naval Gunnery & Missile Target |
| **Tên Tiếng Việt** | Bia kéo bắn pháo và tên lửa hải quân |
| **Primary Function** | Mục tiêu thực cho huấn luyện bắn pháo hạm và tên lửa chống hạm |
| **Target Users** | Hải quân VN, Cảnh sát biển, xuất khẩu ASEAN |
| **Unit Price** | $45,000 |
| **R&D Investment** | $85,000 |
| **Development Time** | 10 months |

## 1.2 Job-to-be-Done Analysis (ODI)

**Primary Job:** "Train naval gunners to effectively engage surface targets with live ammunition"

**Job Process Map:**

```
STEP 1: PREPARE    → STEP 2: DEPLOY    → STEP 3: ENGAGE    → STEP 4: ASSESS    → STEP 5: RECOVER
───────────────────────────────────────────────────────────────────────────────────────────────
• Load target       • Tow to range      • Fire at target    • Score hits        • Retrieve target
• Brief crew        • Set tow distance  • Track impacts     • Debrief crew      • Inspect damage
• Check systems     • Clear range       • Observe splashes  • Record data       • Repair/replace
```

**Underserved Outcomes (High ODI Scores):**

| Outcome | Imp | Sat | Opp | Current Gap |
|---------|-----|-----|-----|-------------|
| Minimize cost per engagement | 9.5 | 3.5 | 15.5 | Foreign targets $80-150K |
| Maximize target survivability (reuse) | 9.0 | 4.0 | 14.0 | Imported targets single-use |
| Minimize setup time | 8.5 | 4.5 | 12.5 | Current: 2+ hours |
| Maximize radar visibility (RCS) | 9.0 | 5.0 | 13.0 | Need realistic signature |
| Minimize tow vessel requirements | 8.0 | 5.0 | 11.0 | Need small boat capable |

## 1.3 Requirements List (Pahl-Beitz)

### DEMANDS (D)

| ID | Requirement | Specification | Verification |
|----|-------------|---------------|--------------|
| D1 | Radar cross-section | RCS ≥ 10 m² at X-band | Anechoic chamber test |
| D2 | Tow speed range | 5-25 knots | Sea trial |
| D3 | Survivability | Withstand 20mm near-miss at 10m | Live fire test |
| D4 | Stability | Roll ≤ ±15° at 20 knots, Sea State 3 | Sea trial |
| D5 | Visibility | Radar + Visual (orange) + IR enhancer | Multi-spectral test |
| D6 | Tow cable strength | 10,000 kg breaking load | Tensile test |
| D7 | Buoyancy reserve | Positive buoyancy after 3× 76mm hits | Flooding test |
| D8 | Recovery | Crane lift or self-righting | Recovery drill |

### WISHES (W)

| ID | Requirement | Target | Priority |
|----|-------------|--------|----------|
| W1 | Hit scoring (miss distance) | ±1m accuracy | HIGH |
| W2 | Telemetry (real-time) | GPS + motion data | MEDIUM |
| W3 | Modular damage sections | Replace damaged panels | HIGH |
| W4 | Smoke/flare enhancement | Visual tracking aid | MEDIUM |
| W5 | Remote scuttling | Emergency sink capability | LOW |

## 1.4 Function Structure

```
OVERALL FUNCTION: Present realistic surface target for naval weapons training

├── F1: FLOAT stably
│   ├── F1.1: Provide buoyancy
│   ├── F1.2: Maintain upright attitude
│   └── F1.3: Self-right after capsize

├── F2: TOW reliably
│   ├── F2.1: Accept tow cable attachment
│   ├── F2.2: Track straight behind tow vessel
│   └── F2.3: Survive tow loads (10+ kN)

├── F3: PRESENT target signature
│   ├── F3.1: Generate radar return (RCS)
│   ├── F3.2: Provide visual contrast
│   ├── F3.3: Generate IR signature (optional)
│   └── F3.4: Support scoring system

├── F4: SURVIVE engagement
│   ├── F4.1: Absorb projectile impacts
│   ├── F4.2: Resist fragmentation damage
│   ├── F4.3: Maintain buoyancy after hits
│   └── F4.4: Contain flooding (compartments)

├── F5: SCORE hits
│   ├── F5.1: Detect projectile passage/impact
│   ├── F5.2: Transmit hit data
│   └── F5.3: Record engagement data

└── F6: RECOVER
    ├── F6.1: Provide lift points
    ├── F6.2: Enable towing back
    └── F6.3: Allow damage assessment
```

## 1.5 Morphological Matrix

| Subfunction | Solution 1 | Solution 2 | Solution 3 |
|-------------|------------|------------|------------|
| F1.1 Buoyancy | Foam-filled hull | Air compartments | Inflatable sections |
| F2.2 Tracking | Fixed keel | Active rudder | Drogue stabilizer |
| F3.1 RCS | Corner reflectors | Luneberg lens | Metal mesh panels |
| F4.1 Absorb impacts | Foam sandwich | Honeycomb aluminum | Sacrificial panels |
| F5.1 Hit detection | Acoustic sensors | Breakwire grid | Piezo film |

## 1.6 Concept Selection

### VARIANT A: "ROBUST REUSABLE" ★RECOMMENDED★

| Function | Solution | Rationale |
|----------|----------|-----------|
| Buoyancy | Foam-filled compartments | Survives multiple hits |
| Tracking | Fixed keel + skeg | Simple, reliable |
| RCS | Corner reflector array | Adjustable, replaceable |
| Survivability | Foam sandwich panels | Self-sealing to small holes |
| Hit detection | Acoustic MDI sensors | Proven technology |

**Estimated Specifications:**
- Length: 4.5m × Width: 2.0m × Height: 1.8m
- Weight: 800 kg (dry)
- RCS: 10-50 m² (adjustable)
- Reuse: 10-15 engagements
- Cost: $42,000

### VDI 2225 Evaluation Summary

| Criterion | Weight | Variant A | Variant B | Variant C |
|-----------|--------|-----------|-----------|-----------|
| Survivability | 0.25 | 4 | 3 | 2 |
| RCS realism | 0.20 | 3 | 4 | 3 |
| Tow stability | 0.15 | 4 | 3 | 4 |
| Manufacturing | 0.15 | 4 | 2 | 3 |
| Cost | 0.15 | 4 | 2 | 3 |
| Scoring capability | 0.10 | 3 | 4 | 2 |
| **TOTAL** | **1.00** | **3.65** | **3.05** | **2.75** |

**Selection: VARIANT A "ROBUST REUSABLE"**

## 1.7 Embodiment Design

### Hull Construction

```
CROSS-SECTION VIEW:
┌─────────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────────┐  │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  │ ← Outer skin (GRP 6mm)
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  │
│  │ ░░ ┌─────────┐  ┌─────────┐  ┌─────────┐ ░░░░░░░ │  │ ← Foam flotation blocks
│  │ ░░ │  FOAM   │  │  FOAM   │  │  FOAM   │ ░░░░░░░ │  │   (closed-cell polyurethane)
│  │ ░░ │ BLOCK 1 │  │ BLOCK 2 │  │ BLOCK 3 │ ░░░░░░░ │  │
│  │ ░░ └─────────┘  └─────────┘  └─────────┘ ░░░░░░░ │  │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  │
│  └───────────────────────────────────────────────────┘  │
│         ▲               ▲               ▲               │
│     COMPARTMENT 1   COMPARTMENT 2   COMPARTMENT 3       │
│     (FWD)           (MID)           (AFT - Tow attach)  │
└─────────────────────────────────────────────────────────┘
```

### Material Selection

| Component | Material | Specification | Reason |
|-----------|----------|---------------|--------|
| Hull skin | GRP (Glass-reinforced plastic) | 6mm laminate | Impact tolerant, marine |
| Flotation | Closed-cell PU foam | 32 kg/m³ density | Survives puncture |
| Keel | 5083 Aluminum | 6mm plate | Corrosion resistant |
| Corner reflectors | 6061 Aluminum | 2mm sheet | Light, reflective |
| Tow bridle | Grade 80 chain + wire | 10,000 kg WLL | High strength |

### Key Dimensions

| Parameter | Value | Note |
|-----------|-------|------|
| LOA | 4.5 m | Length overall |
| Beam | 2.0 m | Maximum width |
| Draft | 0.6 m | Waterline to keel |
| Freeboard | 1.2 m | Waterline to deck |
| Displacement | 1,200 kg | Full load |
| RCS height | 2.5 m | Above waterline |

## 1.8 Scoring System (Optional MDI)

**Miss Distance Indicator (MDI) Principle:**

```
ACOUSTIC MDI SYSTEM:
─────────────────────
6 pressure sensors detect supersonic projectile shockwave

      ┌─── SENSOR 1 ───┐
      │                │
SENSOR 6              SENSOR 2
      │    TARGET     │
      │    CENTER     │
SENSOR 5              SENSOR 3
      │                │
      └─── SENSOR 4 ───┘

Time-of-arrival differences → Triangulation → Miss distance ±0.5m
```

**Telemetry Package:**
- GPS position (1 Hz update)
- Roll/pitch/yaw (10 Hz)
- Hit detection events
- Battery status
- Radio link: 5 km range

## 1.9 Cost Estimate

| Assembly | Material | Labor | Overhead | Total |
|----------|----------|-------|----------|-------|
| Hull structure | $8,000 | $4,000 | $2,000 | $14,000 |
| Flotation system | $3,000 | $1,500 | $800 | $5,300 |
| RCS array | $4,000 | $2,000 | $1,000 | $7,000 |
| Tow system | $2,500 | $1,000 | $500 | $4,000 |
| Scoring (optional) | $6,000 | $2,000 | $1,000 | $9,000 |
| Paint/finish | $1,500 | $1,000 | $500 | $3,000 |
| **SUBTOTAL** | | | | **$42,300** |
| Margin (10%) | | | | $4,230 |
| **TARGET PRICE** | | | | **$46,530** |

---

# PART 2: VN-TGT-002 - AERIAL TARGET DRONE
## Bia Bay Huấn luyện Phòng không

## 2.1 Product Definition

| Aspect | Specification |
|--------|---------------|
| **Product Code** | VN-TGT-002 |
| **Full Name (EN)** | Aerial Target Drone System |
| **Tên Tiếng Việt** | Hệ thống bia bay huấn luyện phòng không |
| **Primary Function** | Mô phỏng mục tiêu bay cho huấn luyện phòng không |
| **Target Users** | Phòng không-Không quân, Hải quân, xuất khẩu |
| **Unit Price** | $55,000 (Class A: Low Speed) |
| **R&D Investment** | $150,000 |
| **Development Time** | 18 months |

## 2.2 Threat Simulation Matrix

```
THREAT TYPE         SPEED         ALTITUDE      IR SIGNATURE   PRIORITY
══════════════════════════════════════════════════════════════════════════

🚁 HELICOPTER
   • Attack heli     100-300 km/h  50-500m       HIGH          ⭐⭐⭐ P1
   • Transport       150-250 km/h  100-2000m     MEDIUM        ⭐⭐ P2

✈️ FIXED-WING AIRCRAFT
   • Attack (A-10)   300-500 km/h  100-3000m     HIGH          ⭐⭐⭐ P1
   • Transport       400-600 km/h  1000-5000m    MEDIUM        ⭐⭐ P2

🚀 CRUISE MISSILE
   • Subsonic        800-900 km/h  30-100m       LOW-MED       ⭐⭐⭐ P1
   • Sea-skimming    800-1000 km/h 5-30m         LOW           ⭐⭐ P2

🛸 UAV/DRONE
   • Tactical        150-220 km/h  100-3000m     LOW           ⭐⭐⭐ P1
   • FPV attack      80-150 km/h   0-500m        VERY LOW      ⭐⭐ P2
```

## 2.3 Speed Class Definition

| Class | Speed Range | Propulsion | Price Target | Dev Priority |
|-------|-------------|------------|--------------|--------------|
| **Class A: Low** | 80-200 km/h | Propeller | $40-60K | ⭐⭐⭐ FIRST |
| **Class B: Medium** | 200-400 km/h | Prop/Jet | $80-120K | ⭐⭐ SECOND |
| **Class C: High** | 400-700 km/h | Turbojet | $150-250K | ⭐ THIRD |

**Recommendation:** Start with **Class A** (lower risk, synergy with MANPADS trainer)

## 2.4 Requirements List (Class A)

### DEMANDS (D)

| ID | Requirement | Specification |
|----|-------------|---------------|
| D1 | Speed range | 80-200 km/h |
| D2 | Altitude range | 50-3,000m AGL |
| D3 | Endurance | ≥45 minutes |
| D4 | Payload | ≥5 kg (signature enhancers) |
| D5 | Control range | ≥20 km |
| D6 | RCS | Adjustable 0.1-5 m² |
| D7 | IR signature | Flare/hot exhaust option |
| D8 | Recovery | Parachute + airbag |
| D9 | Reusability | ≥20 flights |

### WISHES (W)

| ID | Requirement | Target | Priority |
|----|-------------|--------|----------|
| W1 | Miss distance scoring | ±0.5m accuracy | HIGH |
| W2 | Pre-programmed flight paths | GPS waypoints | HIGH |
| W3 | MANPADS seeker simulation | IR flare patterns | MEDIUM |
| W4 | Formation flying | 2-3 drones coordinated | LOW |
| W5 | Hit indication | Smoke/signal on contact | MEDIUM |

## 2.5 Function Structure

```
OVERALL FUNCTION: Present realistic aerial target for air defense training

├── F1: FLY controllably
│   ├── F1.1: Generate lift
│   ├── F1.2: Generate thrust
│   ├── F1.3: Control attitude
│   └── F1.4: Navigate to waypoints

├── F2: PRESENT signature
│   ├── F2.1: Generate radar return
│   ├── F2.2: Generate IR signature
│   ├── F2.3: Provide visual contrast
│   └── F2.4: Tow banner (optional)

├── F3: SCORE misses
│   ├── F3.1: Detect near-miss (acoustic)
│   ├── F3.2: Calculate miss distance
│   └── F3.3: Transmit score data

├── F4: SURVIVE engagement
│   ├── F4.1: Tolerate near-misses
│   ├── F4.2: Contain minor damage
│   └── F4.3: Indicate hit (smoke)

├── F5: RECOVER safely
│   ├── F5.1: Deploy parachute
│   ├── F5.2: Cushion landing (airbag)
│   └── F5.3: Activate locator beacon

└── F6: COMMUNICATE
    ├── F6.1: Receive commands
    ├── F6.2: Transmit telemetry
    └── F6.3: Transmit scoring data
```

## 2.6 Concept Selection

### VARIANT A: "PROPELLER TRAINER" ★RECOMMENDED for Class A★

**Configuration:**
- Twin-boom pusher propeller
- Electric motor (for low IR) OR small gasoline (for higher IR)
- Cruciform tail
- High wing for stability
- Modular payload bay

**Estimated Specifications:**
| Parameter | Value |
|-----------|-------|
| Wingspan | 3.5 m |
| Length | 2.8 m |
| MTOW | 35 kg |
| Speed | 80-180 km/h |
| Endurance | 60 min (electric) / 90 min (gasoline) |
| Ceiling | 3,000 m |
| RCS | 0.5-3 m² (with enhancers) |

## 2.7 Launch & Recovery System

### Launch Options

| Method | Pros | Cons | Cost |
|--------|------|------|------|
| Pneumatic catapult | Reliable, all-weather | Heavy, complex | $35,000 |
| Bungee catapult | Simple, portable | Weather dependent | $8,000 |
| Rocket-assisted | Compact, any terrain | Single-use booster | $15,000 + $500/launch |
| Runway takeoff | Lowest stress | Needs runway | $0 (integrated) |

**Recommendation:** Bungee catapult for cost-effectiveness, pneumatic for naval ships

### Recovery System

```
RECOVERY SEQUENCE:
───────────────────────────────────────────────────────────────────────

1. COMMAND RECOVERY     2. PARACHUTE DEPLOY    3. AIRBAG INFLATE
   (Pilot or auto)         (at 300m AGL)          (at 50m AGL)
       │                        │                       │
       ▼                        ▼                       ▼
   ┌───────┐               ┌───────┐               ┌───────┐
   │ FLYING│  ──────────►  │DESCENT│  ──────────►  │LANDING│
   │180km/h│               │ 8m/s  │               │ 3m/s  │
   └───────┘               └───────┘               └───────┘
                                                        │
                                                        ▼
                                                   ┌───────┐
                                                   │LOCATOR│
                                                   │BEACON │
                                                   └───────┘
```

## 2.8 Miss Distance Indicator (MDI)

**Acoustic MDI System (proven technology):**

| Parameter | Specification |
|-----------|---------------|
| Sensors | 6-12 piezoelectric microphones |
| Detection range | 0-50 m from flight path |
| Accuracy | ±0.5 m miss distance |
| Angular resolution | 12 sectors (30° each) |
| Projectile speed | Supersonic (>340 m/s) required |
| Weight | 0.7 kg |
| Telemetry | Real-time to ground station |

## 2.9 Cost Estimate (Class A)

| Assembly | Material | Labor | Overhead | Total |
|----------|----------|-------|----------|-------|
| Airframe | $8,000 | $4,000 | $2,000 | $14,000 |
| Propulsion | $5,000 | $2,000 | $1,000 | $8,000 |
| Avionics/autopilot | $10,000 | $3,000 | $2,000 | $15,000 |
| Recovery system | $3,000 | $1,500 | $800 | $5,300 |
| MDI scoring | $6,000 | $2,000 | $1,000 | $9,000 |
| Ground station (shared) | $15,000 | $5,000 | $3,000 | $23,000 |
| **SUBTOTAL (per drone)** | | | | **$51,300** |
| **System (GCS + 3 drones)** | | | | **$176,900** |

---

# PART 3: VN-TGT-003 - FLOATING MINE TARGET
## Bia Mìn Trôi Huấn luyện Rà Phá

## 3.1 Product Definition

| Aspect | Specification |
|--------|---------------|
| **Product Code** | VN-TGT-003 |
| **Full Name (EN)** | Floating Mine Training Target |
| **Tên Tiếng Việt** | Bia mìn trôi huấn luyện rà phá |
| **Primary Function** | Mục tiêu huấn luyện phát hiện và tiêu diệt thủy lôi |
| **Target Users** | Hải quân (MCM units), Cảnh sát biển |
| **Unit Price** | $8,000 |
| **R&D Investment** | $25,000 |
| **Development Time** | 6 months |

## 3.2 Training Scenarios

```
MINE COUNTERMEASURES (MCM) TRAINING MATRIX:
═══════════════════════════════════════════════════════════════════════

SCENARIO 1: VISUAL DETECTION
├── Mine type simulated: Contact mine (floating)
├── Training task: Visual spotting from ship/helicopter
├── Target requirement: Realistic appearance, GPS tracking
└── Engagement: Mark position, approach carefully

SCENARIO 2: SONAR DETECTION
├── Mine type simulated: Moored mine (subsurface)
├── Training task: Sonar classification
├── Target requirement: Acoustic reflectivity similar to real mine
└── Engagement: Classify, localize, neutralize

SCENARIO 3: NEUTRALIZATION
├── Mine type simulated: Training mine
├── Training task: Shoot/destroy floating mine
├── Target requirement: Survive small arms, indicate hits
└── Engagement: Small arms fire, record hits

SCENARIO 4: DISPOSAL
├── Mine type simulated: Inert training mine
├── Training task: EOD approach and render safe
├── Target requirement: Realistic handling, safe
└── Engagement: Diver approach, attach charge (simulated)
```

## 3.3 Requirements List

### DEMANDS (D)

| ID | Requirement | Specification |
|----|-------------|---------------|
| D1 | Float height | 30-50% above waterline |
| D2 | Visibility | Detectable at 500m (visual) |
| D3 | Stability | Self-righting in Sea State 3 |
| D4 | Durability | Survive 100+ 7.62mm impacts |
| D5 | Recovery | Easy retrieval by small boat |
| D6 | Safety | Non-explosive, non-toxic |
| D7 | Tracking | GPS + AIS transponder |
| D8 | Battery life | ≥72 hours operation |

### WISHES (W)

| ID | Requirement | Target | Priority |
|----|-------------|--------|----------|
| W1 | Hit scoring | Count impacts | HIGH |
| W2 | Sonar signature | Simulate moored mine | MEDIUM |
| W3 | Remote activation | Turn on/off scoring | HIGH |
| W4 | Depth adjustment | Simulate different mine types | LOW |
| W5 | Cluster deployment | Deploy 5-10 at once | MEDIUM |

## 3.4 Function Structure

```
OVERALL FUNCTION: Simulate floating mine for MCM training

├── F1: FLOAT visibly
│   ├── F1.1: Maintain buoyancy
│   ├── F1.2: Self-right after disturbance
│   └── F1.3: Present realistic silhouette

├── F2: TRACK position
│   ├── F2.1: Report GPS location
│   ├── F2.2: Broadcast AIS signal
│   └── F2.3: Store drift path data

├── F3: SCORE engagement
│   ├── F3.1: Detect bullet impacts
│   ├── F3.2: Count hits
│   └── F3.3: Transmit score data

├── F4: SURVIVE training
│   ├── F4.1: Resist small arms fire
│   ├── F4.2: Contain flooding
│   └── F4.3: Maintain electronics protection

└── F5: RECOVER
    ├── F5.1: Provide lift point
    ├── F5.2: Enable towing
    └── F5.3: Download data
```

## 3.5 Embodiment Design

### External Appearance

```
FLOATING MINE TARGET - PROFILE VIEW:
════════════════════════════════════════════════════════════════

                    ┌─── GPS/RADIO ANTENNA
                    │
                    ▼
              ╔═══════════╗
           ╔══╝           ╚══╗
        ╔══╝    ┌─────┐      ╚══╗   ← Horns (visual only, rubber)
     ╔══╝       │ELEC │         ╚══╗
    ║           │BAY  │            ║  ← Electronics bay (watertight)
    ║     ●     └─────┘      ●     ║  ← Impact sensors (piezo)
    ║           MAIN BODY          ║
    ╚══╗                       ╔══╝  ← Foam-filled body (HDPE shell)
       ╚══╗                 ╔══╝
          ╚══╗           ╔══╝
             ╚═══════════╝
                  │
                  ▼
              ┌───────┐
              │ KEEL  │  ← Weighted keel (self-righting)
              │ WEIGHT│
              └───────┘

DIAMETER: 600mm (typical naval mine size)
HEIGHT: 800mm (including horns)
WEIGHT: 45 kg (dry)
```

### Material Selection

| Component | Material | Specification | Reason |
|-----------|----------|---------------|--------|
| Shell | HDPE (rotomolded) | 8mm wall thickness | Impact resistant, cheap |
| Flotation | Closed-cell PE foam | Fill interior voids | Survives puncture |
| Keel | Lead + steel | 15 kg ballast | Self-righting |
| Horns | Rubber (molded) | Realistic appearance | Visual realism |
| Electronics housing | ABS (IP68) | Watertight enclosure | Protects GPS/radio |
| Impact sensors | Piezoelectric discs | 8 sensors around body | Hit detection |

### Hit Scoring System

```
HIT DETECTION PRINCIPLE:
═════════════════════════

8 piezoelectric sensors detect bullet impacts:

        SENSOR 1
           │
    S8 ────┼──── S2
      \    │    /
       \   │   /
    S7 ─── ● ─── S3      ● = Processing unit
       /   │   \
      /    │    \
    S6 ────┼──── S4
           │
        SENSOR 5

• Impact threshold: >10g acceleration
• Hit count stored in memory
• Transmitted on command (radio)
• Angular position of hits recorded
```

## 3.6 Cost Estimate

| Assembly | Material | Labor | Overhead | Total |
|----------|----------|-------|----------|-------|
| Shell (rotomolded) | $800 | $400 | $200 | $1,400 |
| Flotation foam | $300 | $200 | $100 | $600 |
| Keel/ballast | $200 | $150 | $80 | $430 |
| Horns (4 pcs) | $100 | $100 | $50 | $250 |
| Electronics | $2,500 | $800 | $500 | $3,800 |
| Impact sensors | $400 | $200 | $100 | $700 |
| Paint/finish | $200 | $150 | $80 | $430 |
| **SUBTOTAL** | | | | **$7,610** |
| Margin (10%) | | | | $761 |
| **TARGET PRICE** | | | | **$8,371** |

---

# PART 4: VN-TGT-004 - MARINE LOMAH SCORING TARGET
## Bia Chấm điểm Súng Bộ binh Trên Biển

## 4.1 Product Definition

| Aspect | Specification |
|--------|---------------|
| **Product Code** | VN-TGT-004 |
| **Full Name (EN)** | Marine Infantry LOMAH Scoring Target |
| **Tên Tiếng Việt** | Bia chấm điểm súng bộ binh trên biển (ON/OFF) |
| **Primary Function** | Chấm điểm bắn súng bộ binh từ tàu hoặc bờ vào bia trên biển |
| **Target Users** | Hải quân, Hải quân Đánh bộ, Cảnh sát biển |
| **Unit Price** | $25,000 (complete system) |
| **R&D Investment** | $55,000 |
| **Development Time** | 8 months |

## 4.2 Training Gap Analysis (ODI)

**Job:** "Qualify naval infantry on marksmanship while engaging targets at sea"

**The Marine Marksmanship Challenge:**
- Shooting from moving platform (ship deck)
- Target also moving (waves, current)
- Traditional LOMAH cannot work (land-based)
- No feedback = no improvement

**Underserved Outcomes:**

| Outcome | Imp | Sat | Opp | Gap |
|---------|-----|-----|-----|-----|
| Minimize feedback delay after shot | 9.5 | 2.0 | 17.0 | No marine LOMAH exists |
| Maximize scoring accuracy | 9.0 | 3.0 | 15.0 | Manual scoring only |
| Minimize setup time | 8.5 | 4.0 | 13.0 | Current: Anchor targets, no scoring |
| Maximize all-weather operation | 8.0 | 3.5 | 12.5 | Weather cancels training |

## 4.3 System Concept

### ON/OFF Scoring Principle

```
MARINE LOMAH CONCEPT:
═════════════════════

Unlike precision LOMAH (measures miss distance), Marine LOMAH uses
simple ON/OFF scoring: HIT or MISS.

FLOATING TARGET ARRAY:
─────────────────────────────────────────────────────────────────────

     ┌───────────────────────────────────────────────────────────┐
     │                    RANGE AREA (200m)                      │
     │                                                           │
     │    ┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐    ┌───┐   │
     │    │ T1│    │ T2│    │ T3│    │ T4│    │ T5│    │ T6│   │
     │    │   │    │   │    │   │    │   │    │   │    │   │   │
     │    └─┬─┘    └─┬─┘    └─┬─┘    └─┬─┘    └─┬─┘    └─┬─┘   │
     │      │        │        │        │        │        │      │
     │      └────────┴────────┴───┬────┴────────┴────────┘      │
     │                            │                              │
     │                      MOORING LINE                         │
     │                            │                              │
     │                       ┌────┴────┐                         │
     │                       │ ANCHOR  │                         │
     │                       └─────────┘                         │
     │                                                           │
     └───────────────────────────────────────────────────────────┘
                                 │
                                 │ RADIO LINK
                                 ▼
                          ┌─────────────┐
                          │ SCORING     │
                          │ DISPLAY     │
                          │ (on ship)   │
                          └─────────────┘
```

### Target Unit Design

```
INDIVIDUAL TARGET UNIT (Pop-up style):
══════════════════════════════════════

        ┌─────────────────────┐
        │                     │   ← Target face (E-type silhouette)
        │    ┌───────────┐    │     450 × 700mm
        │    │           │    │
        │    │  SCORING  │    │   ← Scoring zone (vital area)
        │    │   ZONE    │    │     Contains breakwire grid
        │    │           │    │
        │    └───────────┘    │
        │                     │
        └─────────┬───────────┘
                  │
           ┌──────┴──────┐
           │   HINGE     │    ← Drops when hit (mechanical)
           │   POINT     │      OR remote reset (pneumatic)
           └──────┬──────┘
                  │
        ┌─────────┴─────────┐
        │                   │
        │   FLOAT BASE      │   ← Foam-filled buoy
        │   (300mm dia)     │     Electronics inside
        │                   │
        └───────────────────┘
```

## 4.4 Requirements List

### DEMANDS (D)

| ID | Requirement | Specification |
|----|-------------|---------------|
| D1 | Target size | E-type silhouette 450×700mm |
| D2 | Hit detection | Detect .223/5.56mm and larger |
| D3 | Radio range | ≥1 km to ship |
| D4 | Battery life | ≥8 hours continuous |
| D5 | Wave tolerance | Sea State 3 (1.25m waves) |
| D6 | Reset method | Manual or remote (pneumatic) |
| D7 | Scoring display | Real-time on ship display |
| D8 | Water resistance | IP67 minimum |

### WISHES (W)

| ID | Requirement | Target | Priority |
|----|-------------|--------|----------|
| W1 | Hit zone discrimination | Vital vs non-vital | HIGH |
| W2 | Night visibility | IR reflective + light | MEDIUM |
| W3 | Quick deployment | <30 min for 6 targets | HIGH |
| W4 | Remote pop-up | Pneumatic reset from ship | MEDIUM |
| W5 | Shot counting | Total hits per target | HIGH |

## 4.5 Function Structure

```
OVERALL FUNCTION: Score infantry weapons fire at sea targets

├── F1: FLOAT stably
│   ├── F1.1: Maintain buoyancy
│   ├── F1.2: Keep target face vertical
│   └── F1.3: Tolerate wave motion

├── F2: PRESENT target
│   ├── F2.1: Display silhouette
│   ├── F2.2: Maintain visible contrast
│   └── F2.3: Present at correct height

├── F3: DETECT hits
│   ├── F3.1: Sense bullet passage through target
│   ├── F3.2: Discriminate hit zone (vital/non-vital)
│   └── F3.3: Count total hits

├── F4: INDICATE hit (mechanical)
│   ├── F4.1: Drop target face on hit (pop-down)
│   └── F4.2: Reset for next engagement

├── F5: TRANSMIT score
│   ├── F5.1: Send hit event
│   ├── F5.2: Send zone information
│   └── F5.3: Maintain radio link

└── F6: DISPLAY score (ship unit)
    ├── F6.1: Show target status (up/down)
    ├── F6.2: Show hit count
    └── F6.3: Generate session report
```

## 4.6 Scoring Technology Options

| Method | Principle | Pros | Cons | Selection |
|--------|-----------|------|------|-----------|
| Breakwire grid | Wire breaks on bullet pass | Simple, reliable | Single-use wires | ★ PRIMARY |
| Piezo sensors | Vibration detection | Reusable | Less precise zone | BACKUP |
| Acoustic | Shockwave detection | No contact needed | Complex, expensive | NOT SELECTED |
| Optical | Light beam interruption | Precise | Weather sensitive | NOT SELECTED |

**Selected: Breakwire Grid + Mechanical Pop-down**

## 4.7 Cost Estimate

### Per-Target Unit

| Component | Material | Labor | Overhead | Total |
|-----------|----------|-------|----------|-------|
| Float base | $400 | $200 | $100 | $700 |
| Target frame | $300 | $200 | $100 | $600 |
| Breakwire panels (10 pcs) | $200 | $100 | $50 | $350 |
| Electronics | $800 | $300 | $200 | $1,300 |
| Pneumatic reset | $400 | $200 | $100 | $700 |
| Radio module | $300 | $100 | $50 | $450 |
| **SUBTOTAL per target** | | | | **$4,100** |

### Complete System (6 targets + display)

| Item | Quantity | Unit Cost | Total |
|------|----------|-----------|-------|
| Target units | 6 | $4,100 | $24,600 |
| Display unit | 1 | $3,500 | $3,500 |
| Spare breakwires | 60 | $35 | $2,100 |
| Deployment kit | 1 | $1,500 | $1,500 |
| **SYSTEM TOTAL** | | | **$31,700** |
| **TARGET PRICE** | | | **$25,000** (with margin optimization) |

---

# PART 5: VN-TGT-005 - TARGET USV (SURFACE VESSEL)
## Xuồng Mục tiêu Không Người lái

## 5.1 Product Definition

| Aspect | Specification |
|--------|---------------|
| **Product Code** | VN-TGT-005 |
| **Full Name (EN)** | Target Unmanned Surface Vessel |
| **Tên Tiếng Việt** | Xuồng mục tiêu không người lái |
| **Primary Function** | Mục tiêu tự hành mô phỏng tàu địch cho huấn luyện bắn |
| **Target Users** | Hải quân, Cảnh sát biển, xuất khẩu |
| **Unit Price** | $65,000 |
| **R&D Investment** | $120,000 |
| **Development Time** | 14 months |

## 5.2 Advantage Over Towed Target

| Factor | Towed Target (VN-TGT-001) | USV Target (VN-TGT-005) |
|--------|---------------------------|-------------------------|
| Maneuverability | Straight line only | Any pattern, evasive |
| Speed range | Limited by tow vessel | Independent, 5-40 knots |
| Realism | Predictable | Realistic threat behavior |
| Safety | Tow vessel in range | No manned vessel in range |
| Complexity | Simple | Complex |
| Cost | Lower ($45K) | Higher ($65K) |
| Maintenance | Lower | Higher |

**Recommendation:** USV for advanced training, Towed for basic gunnery

## 5.3 Requirements List

### DEMANDS (D)

| ID | Requirement | Specification |
|----|-------------|---------------|
| D1 | Speed range | 5-35 knots |
| D2 | Endurance | ≥4 hours at 15 knots |
| D3 | Control range | ≥15 km |
| D4 | RCS | ≥5 m² (patrol boat simulation) |
| D5 | Maneuvers | Pre-programmed + manual override |
| D6 | Survivability | Withstand near-misses |
| D7 | Recovery | Self-return capability |
| D8 | Sea state | Operate in Sea State 4 |

### WISHES (W)

| ID | Requirement | Target | Priority |
|----|-------------|--------|----------|
| W1 | Hit scoring | Miss distance ±2m | HIGH |
| W2 | Swarm mode | 2-3 USVs coordinated | MEDIUM |
| W3 | Wake signature | Realistic water wake | MEDIUM |
| W4 | Night operation | IR beacon, radar tracking | HIGH |
| W5 | Weapon simulation | Simulated return fire (laser) | LOW |

## 5.4 Function Structure

```
OVERALL FUNCTION: Simulate hostile surface vessel for weapons training

├── F1: PROPEL at various speeds
│   ├── F1.1: Generate thrust (5-35 knots)
│   ├── F1.2: Maneuver (turn, zigzag)
│   └── F1.3: Maintain heading in waves

├── F2: NAVIGATE autonomously
│   ├── F2.1: Follow pre-programmed path
│   ├── F2.2: Execute evasive maneuvers
│   ├── F2.3: Avoid obstacles (AIS integration)
│   └── F2.4: Return to base on command

├── F3: PRESENT target signature
│   ├── F3.1: Generate radar return
│   ├── F3.2: Create visual profile
│   ├── F3.3: Generate IR signature
│   └── F3.4: Produce realistic wake

├── F4: SCORE engagements
│   ├── F4.1: Detect projectile passage
│   ├── F4.2: Calculate miss distance
│   └── F4.3: Transmit scoring data

├── F5: SURVIVE engagement
│   ├── F5.1: Withstand fragmentation
│   ├── F5.2: Maintain buoyancy after damage
│   ├── F5.3: Auto-return if critical damage
│   └── F5.4: Indicate hit (smoke/dye)

└── F6: COMMUNICATE
    ├── F6.1: Receive commands
    ├── F6.2: Transmit telemetry
    ├── F6.3: Broadcast AIS (safety)
    └── F6.4: Emergency beacon
```

## 5.5 Concept Selection

### Hull Configuration Options

| Configuration | Pros | Cons | Selection |
|---------------|------|------|-----------|
| Monohull | Simple, cheap | Less stable at speed | - |
| Catamaran | Stable, large deck | Complex, heavy | - |
| RHIB style | Fast, proven | Requires good sea keeping | ★ SELECTED |
| Hydrofoil | Very fast | Complex, expensive | - |

### Propulsion Options

| Type | Speed | Endurance | Complexity | Selection |
|------|-------|-----------|------------|-----------|
| Outboard gasoline | 40 knots | 4 hours | Low | ★ PRIMARY |
| Inboard diesel | 35 knots | 8 hours | Medium | OPTION |
| Waterjet | 45 knots | 3 hours | High | FUTURE |
| Electric | 15 knots | 2 hours | Low | NOT SUITABLE |

## 5.6 Embodiment Design

### Hull Layout

```
TARGET USV - TOP VIEW:
═══════════════════════════════════════════════════════════════════════

    ┌─────────────────────────────────────────────────────────────┐
    │                            BOW                               │
    │                        ┌─────────┐                          │
    │                        │ SCORING │                          │
    │                        │ SENSORS │                          │
    │      ┌─────────────────┴─────────┴─────────────────┐       │
    │      │                                             │        │
    │      │           ┌───────────────────┐            │        │
    │      │           │                   │            │        │
    │      │           │    AVIONICS BAY   │            │        │
    │  ◄── │           │  (autopilot, GPS) │            │ ──►    │
    │      │           │                   │            │        │
    │      │           └───────────────────┘            │        │
    │      │                                             │        │
    │      │           ┌───────────────────┐            │        │
    │      │           │                   │            │        │
    │      │           │    FUEL TANK      │            │        │
    │      │           │    (80 liters)    │            │        │
    │      │           │                   │            │        │
    │      │           └───────────────────┘            │        │
    │      │                                             │        │
    │      └─────────────────────────────────────────────┘        │
    │                        ┌─────────┐                          │
    │                        │ OUTBOARD│                          │
    │                        │  MOTOR  │                          │
    │                        └────┬────┘                          │
    │                             │                                │
    └─────────────────────────────┴────────────────────────────────┘
                               STERN

    LENGTH: 5.5 m
    BEAM: 2.0 m
    DRAFT: 0.5 m
    DISPLACEMENT: 600 kg
```

### Key Specifications

| Parameter | Value |
|-----------|-------|
| Length | 5.5 m |
| Beam | 2.0 m |
| Draft | 0.5 m |
| Displacement (full) | 800 kg |
| Engine | 60 HP outboard |
| Fuel capacity | 80 liters |
| Speed max | 35 knots |
| Speed cruise | 20 knots |
| Endurance | 4 hours @ 20 knots |
| RCS | 5-15 m² (with enhancers) |
| Control range | 15 km |

## 5.7 Control System

```
USV CONTROL ARCHITECTURE:
═══════════════════════════════════════════════════════════════════════

GROUND CONTROL STATION (GCS)
┌─────────────────────────────────────────┐
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │OPERATOR │  │ MAP/NAV │  │ SCORING │ │
│  │CONTROLS │  │ DISPLAY │  │ DISPLAY │ │
│  └────┬────┘  └────┬────┘  └────┬────┘ │
│       └────────────┴───────────┘       │
│                    │                    │
│              ┌─────┴─────┐              │
│              │  RADIO    │              │
│              │TRANSCEIVER│              │
│              └─────┬─────┘              │
└────────────────────┼────────────────────┘
                     │
                     │ 2.4 GHz LINK (15 km)
                     │
┌────────────────────┼────────────────────┐
│              ┌─────┴─────┐              │
│              │  RADIO    │              │
│              │ RECEIVER  │              │
│              └─────┬─────┘              │
│                    │                    │
│       ┌────────────┴───────────┐       │
│  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐ │
│  │AUTOPILOT│  │   GPS   │  │ SCORING │ │
│  │ (Pixhawk)│  │(RTK opt)│  │ SENSORS │ │
│  └────┬────┘  └─────────┘  └─────────┘ │
│       │                                 │
│  ┌────┴────┐                           │
│  │ MOTOR   │                           │
│  │ CONTROL │                           │
│  └─────────┘                           │
└─────────────────────────────────────────┘
              USV ONBOARD
```

## 5.8 Cost Estimate

| Assembly | Material | Labor | Overhead | Total |
|----------|----------|-------|----------|-------|
| Hull (RHIB style) | $12,000 | $5,000 | $3,000 | $20,000 |
| Engine (60HP outboard) | $8,000 | $1,000 | $500 | $9,500 |
| Fuel system | $1,500 | $800 | $400 | $2,700 |
| Autopilot/avionics | $8,000 | $3,000 | $2,000 | $13,000 |
| Radio/telemetry | $3,000 | $1,000 | $500 | $4,500 |
| RCS enhancers | $2,000 | $1,000 | $500 | $3,500 |
| Scoring system | $5,000 | $2,000 | $1,000 | $8,000 |
| Ground control station | $10,000 | $4,000 | $2,000 | $16,000 |
| **SUBTOTAL** | | | | **$77,200** |
| **SYSTEM (2 USVs + GCS)** | | | | **$138,400** |
| **Per USV + shared GCS** | | | | **$69,200** |

---

# PART 6: PORTFOLIO STRATEGY & SYNERGIES

## 6.1 Product Positioning Matrix

```
                    COMPLEXITY
                    Low ◄─────────────────────────► High
                    │                               │
        Simple     │ VN-TGT-003      VN-TGT-001   │    Advanced
        Scoring    │ Mine Target     Towed Target  │    Scoring
                   │ ($8K)           ($45K)        │
                   │                               │
    L              │                               │
    I              │ VN-TGT-004                    │
    V              │ Marine LOMAH                  │
    E              │ ($25K)                        │
                   │                               │
    F              │                VN-TGT-002     │
    I              │                Aerial Drone   │
    R              │                ($55K)         │
    E              │                               │
                   │                VN-TGT-005     │
                   │                Target USV     │
                   │                ($65K)         │
                   │                               │
        Simulation │                               │    Live Fire
```

## 6.2 Development Roadmap

```
TIMELINE (18 MONTHS):
════════════════════════════════════════════════════════════════════════

MONTH:  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18
        │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │  │

VN-TGT-003 Mine Target (6 mo)
        ├──────────────────┤
        Design   Proto  Test
        $25K R&D → Ready Month 6

VN-TGT-004 Marine LOMAH (8 mo)
        ├─────────────────────────┤
        Design    Proto    Test
        $55K R&D → Ready Month 8

VN-TGT-001 Towed Target (10 mo)
        ├───────────────────────────────┤
        Design      Proto      Test
        $85K R&D → Ready Month 10

VN-TGT-005 Target USV (14 mo)
              ├───────────────────────────────────────┤
              Design        Proto        Test
              $120K R&D → Ready Month 14

VN-TGT-002 Aerial Drone (18 mo)
        ├─────────────────────────────────────────────────────────┤
        Design           Proto           Test           Cert
        $150K R&D → Ready Month 18

TOTAL R&D: $435,000
TOTAL REVENUE (Year 1): Est. $500K-800K
```

## 6.3 Common Component Strategy

| Component | Products Using | Cost Savings |
|-----------|----------------|--------------|
| GPS/telemetry module | All 5 products | 30% volume discount |
| Radio transceiver | All 5 products | 25% standardization |
| Acoustic MDI | TGT-001, TGT-002 | Shared development |
| RCS enhancer | TGT-001, TGT-002, TGT-005 | Common design |
| Foam flotation | TGT-001, TGT-003, TGT-004 | Bulk purchase |

**Estimated savings from commonality: 15-20% overall**

## 6.4 Revenue Model

### One-Time Sales

| Product | Year 1 Units | Price | Revenue |
|---------|--------------|-------|---------|
| VN-TGT-001 Towed | 5 | $45,000 | $225,000 |
| VN-TGT-002 Aerial | 2 systems | $180,000 | $360,000 |
| VN-TGT-003 Mine | 20 | $8,000 | $160,000 |
| VN-TGT-004 LOMAH | 3 systems | $25,000 | $75,000 |
| VN-TGT-005 USV | 2 | $65,000 | $130,000 |
| **TOTAL YEAR 1** | | | **$950,000** |

### Recurring Revenue (Consumables & Service)

| Product | Consumable | Annual/Unit | Units | Annual |
|---------|------------|-------------|-------|--------|
| TGT-001 | Damage panels | $2,000 | 5 | $10,000 |
| TGT-002 | Recovery parachutes | $500 | 6 | $3,000 |
| TGT-003 | Replacement shells | $1,500 | 20 | $30,000 |
| TGT-004 | Breakwire panels | $1,000 | 18 | $18,000 |
| TGT-005 | Maintenance | $5,000 | 2 | $10,000 |
| **TOTAL RECURRING** | | | | **$71,000/year** |

---

# PART 7: META-LEARNING CAPTURE

## 7.1 Vietnamese Mnemonic

**"BIA BIỂN NĂM MÓN" (Five-Course Sea Target)**

| Mnemonic | Product | Key Feature |
|----------|---------|-------------|
| **B**ia kéo | VN-TGT-001 | Towed target for artillery |
| **I**a bay | VN-TGT-002 | Aerial drone target |
| **A**o mìn | VN-TGT-003 | Mine simulation target |
| **B**ia bắn | VN-TGT-004 | Infantry scoring target |
| **I**ển USV | VN-TGT-005 | Surface vessel target |
| **Ể**n biển | - | Marine environment |
| **N**ội địa | - | Indigenous production |
| **N**ăm món | - | Five products portfolio |
| **Á**m sát | - | Realistic threat simulation |
| **M**uốn mua | - | Export potential |
| **Ó**c động | - | Scoring intelligence |
| **N**hanh | - | Quick deployment |

## 7.2 Design Principle Summary

| Principle | Application |
|-----------|-------------|
| **Survivability first** | Foam-filled, compartmented hulls |
| **Passive preferred** | Avoid active electronics where possible |
| **Modular damage** | Replaceable panels, not full rebuild |
| **Common components** | GPS, radio, RCS enhancers shared |
| **Scoring essential** | All products include hit detection |
| **Indigenous materials** | HDPE, GRP, aluminum locally available |

## 7.3 Key Design Decisions Log

| Decision | Options | Selection | Rationale |
|----------|---------|-----------|-----------|
| Towed hull | Steel/Al/GRP | GRP + foam | Survivability, cost |
| Aerial propulsion | Jet/Prop/Hybrid | Propeller | Lower speed class first |
| Mine detection | Piezo/Acoustic/Optical | Piezo array | Simple, reliable |
| LOMAH method | Acoustic/Breakwire/Optical | Breakwire | Marine environment |
| USV hull | Mono/Cat/RHIB | RHIB | Speed + stability |

---

# DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-31 | Claude/KN Nguyen | Initial release |

**CLASSIFICATION:** CONFIDENTIAL - Internal Use Only

---

**END OF DOCUMENT**
