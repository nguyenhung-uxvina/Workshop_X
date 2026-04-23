# VN-NGT-001: NAVAL GUNNERY TRAINING SIMULATOR
## Phase 1: Task Clarification - Deep Dive Analysis

**Document Version:** 1.0  
**Date:** December 23, 2025  
**Product Code:** VN-NGT-001  
**Classification:** INTERNAL USE  

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Definition

**Naval Gunnery Training Simulator (NGT)** là hệ thống huấn luyện mô phỏng cho thủy thủ và pháo thủ hải quân Việt Nam, tập trung vào các hệ thống vũ khí Soviet/Russian được trang bị trên tàu chiến Việt Nam.

### 1.2 Strategic Synergy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  VN NAVAL TRAINING ECOSYSTEM - PRODUCT SYNERGY                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌────────────────────┐          ┌────────────────────┐                    │
│  │   BMT-01-HN        │          │   VN-NGT-001       │                    │
│  │   Naval Target     │◄────────►│   Gunnery Trainer  │                    │
│  │   (HỒNG HÀ)       │  TARGET   │   (This Product)   │                    │
│  └────────────────────┘  DRONE   └────────────────────┘                    │
│           │                              │                                  │
│           │                              │                                  │
│           ▼                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐                  │
│  │          INTEGRATED NAVAL TRAINING PACKAGE           │                  │
│  │   • Simulator training → Live fire with target       │                  │
│  │   • Skills transfer validation                       │                  │
│  │   • Complete training cycle                          │                  │
│  └──────────────────────────────────────────────────────┘                  │
│                                                                             │
│  SYNERGY VALUE:                                                            │
│  • Shared customer: Vietnamese Navy                                        │
│  • Shared 3D visualization engine                                          │
│  • Shared fire control algorithms                                          │
│  • Bundle pricing advantage                                                │
│  • Platform: 50-60% component reuse                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Market Opportunity

| Metric | Value | Notes |
|--------|-------|-------|
| **Target Market** | Vietnamese Navy + Coast Guard | Primary: VPN, Secondary: VCG |
| **Market Size** | 20-40 systems | Over 10-year lifecycle |
| **Unit Price** | $80,000-150,000 | Depending on configuration |
| **Total Revenue** | $2.4-6.0M USD | Excluding maintenance |
| **Competition** | Limited | No Eastern-bloc specific simulators |

---

## 2. VIETNAMESE NAVAL WEAPONS INVENTORY

### 2.1 Primary Naval Gun Systems

```
VIETNAMESE NAVY GUN SYSTEMS PRIORITY:
══════════════════════════════════════════════════════════════════════

TIER 1 - HIGH PRIORITY (Large ships, main armament):
┌─────────────────────────────────────────────────────────────────────┐
│  AK-176 / AK-176M (76.2mm)                                         │
│  ├─ Ships: Gepard-class frigates, Molniya-class corvettes         │
│  ├─ Rate of Fire: 30/60/120 rpm (selectable)                       │
│  ├─ Range: 15.7 km (surface), 11.5 km (air)                       │
│  ├─ Ammunition: 152 ready rounds                                   │
│  ├─ Fire Control: MR-123-02/76 radar + optical sight              │
│  └─ Training Priority: ⭐⭐⭐⭐⭐                                    │
└─────────────────────────────────────────────────────────────────────┘

TIER 2 - HIGH PRIORITY (CIWS, point defense):
┌─────────────────────────────────────────────────────────────────────┐
│  AK-630 / AK-630M (30mm 6-barrel Gatling)                          │
│  ├─ Ships: Most corvettes and frigates                             │
│  ├─ Rate of Fire: 4,000-5,000 rpm                                  │
│  ├─ Range: 4,000m (effective)                                      │
│  ├─ Ammunition: 2,000 rounds ready                                 │
│  ├─ Fire Control: MR-123 Bass Tilt + electro-optical              │
│  └─ Training Priority: ⭐⭐⭐⭐⭐                                    │
└─────────────────────────────────────────────────────────────────────┘

TIER 3 - MEDIUM PRIORITY (Medium-caliber, patrol vessels):
┌─────────────────────────────────────────────────────────────────────┐
│  AK-230 (30mm twin)                                                │
│  ├─ Ships: Older patrol boats, auxiliary vessels                   │
│  ├─ Rate of Fire: 1,000 rpm (combined)                             │
│  ├─ Range: 2,500m                                                   │
│  └─ Training Priority: ⭐⭐⭐                                       │
├─────────────────────────────────────────────────────────────────────┤
│  2M-3M (25mm twin)                                                  │
│  ├─ Ships: Small patrol craft                                      │
│  ├─ Rate of Fire: 480-500 rpm                                      │
│  ├─ Range: 3,000m                                                   │
│  └─ Training Priority: ⭐⭐⭐                                       │
└─────────────────────────────────────────────────────────────────────┘

TIER 4 - MEDIUM PRIORITY (Crew-served weapons):
┌─────────────────────────────────────────────────────────────────────┐
│  DShK/DShKM (12.7mm Heavy Machine Gun)                             │
│  ├─ Ships: All patrol boats, auxiliary vessels                     │
│  ├─ Rate of Fire: 600 rpm                                          │
│  ├─ Range: 2,000m (effective)                                      │
│  └─ Training Priority: ⭐⭐⭐⭐                                     │
├─────────────────────────────────────────────────────────────────────┤
│  KPV/KPVT (14.5mm Heavy Machine Gun)                               │
│  ├─ Ships: Some patrol boats                                       │
│  ├─ Rate of Fire: 600 rpm                                          │
│  ├─ Range: 2,000m                                                   │
│  └─ Training Priority: ⭐⭐⭐                                       │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Ship Classes with Weapon Systems

| Ship Class | Type | Qty | Primary Guns | Secondary Guns |
|------------|------|-----|--------------|----------------|
| **Gepard 3.9** | Frigate | 4 | AK-176M (1) | AK-630M (2) |
| **Molniya** | Corvette | 8 | AK-176M (1) | AK-630 (1) |
| **BPS-500** | Patrol | 6 | AK-630 (1) | 14.5mm (2) |
| **Project 1241** | Missile Boat | 6+ | AK-630 (1) | 30mm/25mm |
| **TT-400TP** | Patrol | 12+ | 14.5mm/12.7mm | Small arms |
| **Various PB** | Patrol | 30+ | 12.7mm DShK | Small arms |

### 2.3 Fire Control Systems

```
FIRE CONTROL RADAR SYSTEMS:
════════════════════════════════════════════════════════════

MR-123-02 "Bass Tilt":
├─ Type: Fire control radar
├─ Band: I/J band
├─ Tracking: 1 surface + 1 air target simultaneously  
├─ Range: Surface 70km, Air 40km
├─ Controls: AK-630 and/or AK-176
├─ Backup: Optical/TV sighting
└─ Simulation Priority: ⭐⭐⭐⭐⭐ (CRITICAL)

SP-521 Electro-Optical Tracker:
├─ Type: TV/FLIR tracking system
├─ Detection: MiG-21 size at 7km (air), boat at 70km (surface)
├─ Features: Laser rangefinder, TV sight
├─ Integration: Works with MR-123
└─ Simulation Priority: ⭐⭐⭐⭐

Kolonka Optical Sight:
├─ Type: Manual optical backup
├─ Use: Emergency/backup targeting
├─ Features: Lead computing sight
└─ Simulation Priority: ⭐⭐⭐
```

---

## 3. TRAINING REQUIREMENTS ANALYSIS

### 3.1 Current Training Challenges

```
VIETNAMESE NAVY TRAINING GAPS:
══════════════════════════════════════════════════════════════════════

PROBLEM 1: Ammunition Cost & Availability
├─ 76mm round cost: $200-400 per round
├─ 30mm round cost: $15-50 per round
├─ Annual training budget: Limited
├─ Rounds per qualification: 50-100+ rounds
└─ Impact: Insufficient live-fire practice

PROBLEM 2: Ship Availability
├─ Operational tempo: High (South China Sea patrols)
├─ Maintenance cycles: Ships often unavailable
├─ Fuel cost: $5,000+ per training sortie
└─ Impact: Limited at-sea training time

PROBLEM 3: Safety Concerns
├─ Live fire accidents: Risk of injury/damage
├─ Weather restrictions: Cannot train in rough seas
├─ Ammunition handling: Safety protocols
└─ Impact: Conservative training approach

PROBLEM 4: Skill Retention
├─ Personnel rotation: Every 2-3 years
├─ New operator training: 6-12 months
├─ Skill degradation: Without regular practice
└─ Impact: Combat readiness gaps

PROBLEM 5: Scenario Limitations
├─ Live fire: Limited to towed targets
├─ Anti-missile practice: Cannot simulate
├─ Night/adverse weather: Difficult to arrange
└─ Impact: Incomplete tactical training
```

### 3.2 Training Objectives

| Level | Objective | Current Method | Simulator Value |
|-------|-----------|----------------|-----------------|
| **Basic** | Weapon familiarization | Classroom + deck | ⭐⭐⭐⭐ Faster learning |
| **Intermediate** | Target acquisition | Limited live-fire | ⭐⭐⭐⭐⭐ Unlimited practice |
| **Advanced** | Engagement procedures | Rare exercises | ⭐⭐⭐⭐⭐ Complex scenarios |
| **Expert** | Combat scenarios | Almost never | ⭐⭐⭐⭐⭐ Only way to train |

### 3.3 Skills to Train

```
GUNNERY SKILLS HIERARCHY:
══════════════════════════════════════════════════════════════════════

LEVEL 1: BASIC OPERATOR SKILLS
├─ Weapon system startup/shutdown procedures
├─ Console familiarization (radar, controls, displays)
├─ Safety procedures and emergency protocols
├─ Basic target acquisition (manual and radar-assisted)
└─ Time to competency: 4-8 weeks

LEVEL 2: INTERMEDIATE GUNNERY
├─ Lead calculation for moving targets
├─ Range estimation and laser rangefinder use
├─ Ammunition selection (HE, AP, proximity)
├─ Rate of fire management
├─ Burst control and engagement timing
└─ Time to competency: 8-16 weeks

LEVEL 3: ADVANCED TACTICAL
├─ Multiple target prioritization
├─ Air vs. surface threat discrimination
├─ Friendly fire avoidance
├─ Coordinated fire with other weapons
├─ Degraded mode operations (radar failure, backup sights)
└─ Time to competency: 16-32 weeks

LEVEL 4: COMBAT PROFICIENCY
├─ Anti-ship missile defense (AK-630 CIWS)
├─ Fast attack craft engagement
├─ Aerial target tracking (helicopters, drones)
├─ Night/adverse weather operations
├─ Battle damage assessment
├─ Combat decision-making under stress
└─ Time to competency: 32+ weeks
```

---

## 4. PRODUCT ARCHITECTURE OPTIONS

### 4.1 Configuration Levels

```
SYSTEM ARCHITECTURE OPTIONS:
══════════════════════════════════════════════════════════════════════

OPTION A: DESKTOP TRAINER (Entry Level)
┌─────────────────────────────────────────────────────────────────────┐
│  Cost: $25,000-40,000                                               │
│  Fidelity: LOW-MEDIUM                                               │
│                                                                     │
│  Components:                                                        │
│  ├─ Desktop PC + monitors (3x displays)                             │
│  ├─ Generic joystick/controller                                     │
│  ├─ Software simulation                                             │
│  └─ Basic instructor station                                        │
│                                                                     │
│  Pros:                                                              │
│  ├─ Low cost, rapid deployment                                      │
│  ├─ Multiple stations per classroom                                 │
│  └─ Easy maintenance                                                │
│                                                                     │
│  Cons:                                                              │
│  ├─ Limited realism                                                 │
│  ├─ No procedural training (no real controls)                       │
│  └─ Skills transfer questionable                                    │
│                                                                     │
│  Best For: Pre-training, familiarization, theory                    │
└─────────────────────────────────────────────────────────────────────┘

OPTION B: PART-TASK TRAINER (Medium Fidelity)
┌─────────────────────────────────────────────────────────────────────┐
│  Cost: $60,000-90,000                                               │
│  Fidelity: MEDIUM-HIGH                                              │
│                                                                     │
│  Components:                                                        │
│  ├─ Replica fire control console (representative controls)         │
│  ├─ Large format display or projection (180° FOV)                   │
│  ├─ Representative radar display simulation                         │
│  ├─ Motion cues (optional vibration platform)                       │
│  ├─ Instructor Operating Station (IOS)                              │
│  └─ After Action Review (AAR) system                                │
│                                                                     │
│  Pros:                                                              │
│  ├─ Procedural accuracy                                             │
│  ├─ Skills transfer validated                                       │
│  ├─ Cost-effective                                                  │
│  └─ Modular/upgradeable                                             │
│                                                                     │
│  Cons:                                                              │
│  ├─ Not exact replica                                               │
│  └─ Limited motion/environmental simulation                         │
│                                                                     │
│  Best For: Core training, skills development ⭐ RECOMMENDED         │
└─────────────────────────────────────────────────────────────────────┘

OPTION C: FULL-FIDELITY SIMULATOR (High Fidelity)
┌─────────────────────────────────────────────────────────────────────┐
│  Cost: $150,000-300,000                                             │
│  Fidelity: HIGH                                                     │
│                                                                     │
│  Components:                                                        │
│  ├─ Exact replica weapon station (AK-176 or AK-630)                 │
│  ├─ Actual/decommissioned hardware integration                      │
│  ├─ 360° visual dome or multiple projection                         │
│  ├─ 6-DOF motion platform (ship motion simulation)                  │
│  ├─ Recoil simulation system                                        │
│  ├─ Environmental effects (smoke, flash, sound)                     │
│  ├─ Full instructor station with scenario editor                    │
│  └─ Network capability for team training                            │
│                                                                     │
│  Pros:                                                              │
│  ├─ Maximum realism                                                 │
│  ├─ 1:1 skills transfer                                             │
│  ├─ Combat stress conditioning                                      │
│  └─ Full tactical training capability                               │
│                                                                     │
│  Cons:                                                              │
│  ├─ High cost                                                       │
│  ├─ Complex maintenance                                             │
│  ├─ Requires facility space                                         │
│  └─ Longer development time                                         │
│                                                                     │
│  Best For: Advanced/combat training, qualification assessment       │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Recommended Configuration Matrix

| Customer Segment | Primary | Optional Add-on | Budget |
|------------------|---------|-----------------|--------|
| **Naval Academy** | Part-Task (4x) | Desktop (8x) | $400K |
| **Fleet Training Center** | Full-Fidelity (1x) + Part-Task (2x) | AAR system | $450K |
| **Individual Ship** | Desktop (1x) | - | $35K |
| **Coast Guard** | Part-Task (2x) | - | $150K |

---

## 5. TECHNICAL DEEP-DIVE: KEY SUBSYSTEMS

### 5.1 Fire Control Simulation

```
FIRE CONTROL SYSTEM SIMULATION ARCHITECTURE:
══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│                    RADAR SIMULATION MODULE                          │
├─────────────────────────────────────────────────────────────────────┤
│  MR-123-02 "Bass Tilt" Simulation:                                  │
│  ├─ Search mode: PPI display, range rings, bearing marks           │
│  ├─ Track mode: Target designation, track gate                     │
│  ├─ Engagement mode: Fire solution calculation                     │
│  ├─ Clutter simulation: Sea return, rain, chaff                    │
│  ├─ ECM effects: Jamming, deception                                │
│  └─ Degraded modes: Manual backup, optical sight                   │
│                                                                     │
│  Technical Requirements:                                            │
│  ├─ Update rate: 60 Hz display, 10 Hz tracking                     │
│  ├─ Range scales: 2/4/8/16/32 km                                   │
│  ├─ Bearing accuracy: 0.5° simulated                               │
│  ├─ Range accuracy: 10m simulated                                  │
│  └─ Track capacity: 10 targets simultaneous                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    BALLISTICS SIMULATION MODULE                     │
├─────────────────────────────────────────────────────────────────────┤
│  76mm AK-176 Ballistics:                                            │
│  ├─ Muzzle velocity: 980 m/s (HE-FRAG)                             │
│  ├─ Projectile mass: 5.9 kg                                         │
│  ├─ Drag coefficient: Computed for ogive shape                      │
│  ├─ Wind effects: Crosswind drift calculation                      │
│  ├─ Temperature/pressure: Standard atmosphere correction           │
│  └─ Dispersion: CEP modeling at various ranges                     │
│                                                                     │
│  30mm AK-630 Ballistics:                                            │
│  ├─ Muzzle velocity: 880 m/s                                       │
│  ├─ Projectile mass: 0.39 kg                                       │
│  ├─ Rate of fire: 83 rounds/second simulated                       │
│  ├─ Burst pattern: Dispersion modeling                             │
│  └─ Hit probability: P(k) calculation for CIWS                     │
│                                                                     │
│  Model Complexity: 6-DOF trajectory with:                          │
│  ├─ Gravity                                                         │
│  ├─ Air resistance (Mach-dependent Cd)                             │
│  ├─ Wind (3D vector field)                                         │
│  ├─ Ship motion compensation                                        │
│  └─ Lead angle computation                                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    LEAD COMPUTING SIGHT SIMULATION                  │
├─────────────────────────────────────────────────────────────────────┤
│  Automatic Lead Calculation:                                        │
│  ├─ Target velocity estimation (from radar/optical tracking)       │
│  ├─ Projectile time of flight computation                          │
│  ├─ Lead angle = arctan(Vt × ToF / R)                              │
│  ├─ Ship motion compensation (roll, pitch, yaw)                    │
│  └─ Parallax correction (sensor to gun offset)                     │
│                                                                     │
│  Manual/Backup Mode:                                                │
│  ├─ Tracer observation method                                       │
│  ├─ Kentucky windage (experience-based correction)                  │
│  └─ Optical sight reticle with range rings                         │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 Target Simulation

```
TARGET GENERATION SYSTEM:
══════════════════════════════════════════════════════════════════════

SURFACE TARGETS:
┌─────────────────────────────────────────────────────────────────────┐
│  Category          │ Speed        │ RCS      │ Behavior            │
├────────────────────┼──────────────┼──────────┼─────────────────────┤
│  Fast Attack Craft │ 40-50 kts    │ 50-200 m²│ Evasive maneuvers   │
│  Patrol Boat       │ 20-30 kts    │ 30-100 m²│ Approach/flee       │
│  Fishing Vessel    │ 8-12 kts     │ 10-50 m² │ Random movement     │
│  Cargo Ship        │ 12-18 kts    │ 1000+ m² │ Straight course     │
│  Small Boat/FIAC   │ 30-60 kts    │ 5-20 m²  │ Aggressive attack   │
│  Jet Ski/PWC       │ 50+ kts      │ 1-5 m²   │ Very evasive        │
└─────────────────────────────────────────────────────────────────────┘

AIR TARGETS:
┌─────────────────────────────────────────────────────────────────────┐
│  Category          │ Speed        │ RCS      │ Altitude            │
├────────────────────┼──────────────┼──────────┼─────────────────────┤
│  Attack Helicopter │ 100-150 kts  │ 5-20 m²  │ 50-500m             │
│  Fighter Jet       │ 400-600 kts  │ 3-10 m²  │ 100-5000m           │
│  Maritime Patrol   │ 200-300 kts  │ 30-50 m² │ 500-3000m           │
│  UAV (Large)       │ 80-150 kts   │ 0.5-5 m² │ 100-3000m           │
│  UAV (Small)       │ 30-80 kts    │ 0.01-0.5m²│ 50-500m            │
│  Anti-Ship Missile │ 600-900 kts  │ 0.1-1 m² │ 5-50m (sea-skimmer) │
└─────────────────────────────────────────────────────────────────────┘

MISSILE THREAT SIMULATION (for AK-630 CIWS training):
┌─────────────────────────────────────────────────────────────────────┐
│  Missile Type       │ Speed   │ Profile         │ Detection Range   │
├─────────────────────┼─────────┼─────────────────┼───────────────────┤
│  Harpoon-type       │ Mach 0.9│ Sea-skimming    │ 8-15 km          │
│  Exocet-type        │ Mach 0.9│ Pop-up terminal │ 10-20 km         │
│  C-802/YJ-83        │ Mach 0.9│ Sea-skimming    │ 10-18 km         │
│  Brahmos-type       │ Mach 2.8│ Diving          │ 15-30 km         │
│  Kh-35/SS-N-25      │ Mach 0.8│ Sea-skimming    │ 8-15 km          │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.3 Visual System Requirements

```
VISUAL DISPLAY SPECIFICATIONS:
══════════════════════════════════════════════════════════════════════

OPTION A: LCD DISPLAYS (Part-Task Trainer)
├─ Configuration: 3x 55" 4K LCD in curved array
├─ Field of View: 180° horizontal × 40° vertical
├─ Resolution: 11,520 × 2,160 total pixels
├─ Frame Rate: 60 Hz
├─ Update Latency: <50 ms
├─ Cost: $8,000-12,000
└─ Space: 3m × 2m footprint

OPTION B: PROJECTION DOME (Full-Fidelity)
├─ Configuration: 4-channel projection on dome screen
├─ Field of View: 180° × 70°
├─ Resolution: 4K per channel (edge-blended)
├─ Frame Rate: 60 Hz
├─ Brightness: 3,000+ lumens per projector
├─ Cost: $40,000-60,000
└─ Space: 5m × 5m dome diameter

SCENE CONTENT REQUIREMENTS:
├─ Ocean rendering: Dynamic waves, Beaufort 0-8
├─ Sky/atmosphere: Day/night cycle, clouds, visibility
├─ Weather effects: Rain, fog, spray
├─ Lighting: Sun position, shadows, moonlight
├─ Target rendering: Photo-realistic vessels, aircraft
├─ Special effects: Muzzle flash, tracer, impacts, explosions
├─ Instrument overlays: Radar display, HUD elements
└─ Frame budget: <16.6 ms per frame (60 FPS)
```

---

## 6. COMPETITOR ANALYSIS

### 6.1 International Competitors

| Company | Product | Weapon Types | Price Range | Notes |
|---------|---------|--------------|-------------|-------|
| **Reamda (Ireland)** | Naval Gunnery Simulators | Rheinmetall 20mm, .50 Cal, OTO 76mm | $150-300K | Western weapons only |
| **Laser Shot (USA)** | NCGT | M2, Mk38 | $200-400K | US Navy focused |
| **Zen Technologies (India)** | FAC Simulator | Generic + Soviet | $100-250K | **Key competitor** |
| **CAE (Canada)** | NCSS | Various | $500K+ | Full CIC simulation |
| **Rheinmetall (Germany)** | TacSi-based | Western naval guns | $300-500K | Premium segment |
| **Terma (Denmark)** | C-Sim | Integrated C2 | $400K+ | Command training |
| **Agueris (France)** | Naval cabin sims | Generic | $200-400K | French Navy focused |

### 6.2 Competitive Gap Analysis

```
MARKET GAP OPPORTUNITY:
══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│         HIGH ┃                                                      │
│              ┃      CAE, Rheinmetall                                │
│              ┃         (Western only)                               │
│    FIDELITY  ┃                           ┌────────────────────┐     │
│              ┃                           │  OPPORTUNITY ZONE  │     │
│              ┃      Laser Shot           │  Soviet/Russian    │     │
│              ┃      Reamda               │  High Fidelity     │     │
│              ┃                           │  Moderate Cost     │     │
│              ┃                           └────────────────────┘     │
│              ┃   Zen Technologies                                   │
│              ┃   (Medium fidelity,                                  │
│              ┃    Eastern weapons)                                  │
│              ┃                                                      │
│         LOW  ┃   Generic PC sims                                    │
│              ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                 LOW                              HIGH               │
│                          PRICE                                      │
│                                                                     │
│   ⭐ KEY INSIGHT: No high-fidelity simulators for Soviet/Russian    │
│      naval gun systems (AK-176, AK-630) at accessible price point   │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.3 Zen Technologies Deep-Dive (Primary Competitor)

```
ZEN TECHNOLOGIES ANALYSIS:
══════════════════════════════════════════════════════════════════════

STRENGTHS:
├─ Extensive product line (tank, infantry, naval simulators)
├─ Proven with Indian Navy (similar Soviet/Russian weapons)
├─ AI-enabled instructor station (recent FAC simulator)
├─ 6-DOF motion platform capability
├─ Export track record
└─ Price competitive ($100-250K range)

WEAKNESSES:
├─ Geographic distance from Vietnam
├─ Indian focus (may not prioritize Vietnamese market)
├─ Support/maintenance response time
├─ Customization for Vietnamese Navy procedures
└─ IP concerns (India-Vietnam technology sharing)

PRODUCT COMPARISON:
┌─────────────────────────────────────────────────────────────────────┐
│  Feature            │ Zen FAC Sim    │ Our VN-NGT-001 (Target)     │
├─────────────────────┼────────────────┼─────────────────────────────┤
│  Weapon focus       │ Generic MMG    │ AK-176, AK-630 specific     │
│  Fire control sim   │ Basic          │ MR-123-02 accurate          │
│  Motion platform    │ 6-DOF          │ 3-DOF (lower cost)          │
│  AI instructor      │ Yes            │ Optional                     │
│  Local support      │ Limited        │ Vietnamese-based            │
│  Price              │ $150-200K      │ $80-120K target             │
│  Customization      │ Medium         │ High (Vietnamese Navy)      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 7. REQUIREMENTS LIST (PRELIMINARY)

### 7.1 Functional Requirements

| ID | Requirement | MUST/WISH | Quantification | Source |
|----|-------------|-----------|----------------|--------|
| **F-001** | Simulate AK-176 76mm gun operation | MUST | Full fire control cycle | VPN |
| **F-002** | Simulate AK-630 30mm CIWS operation | MUST | CIWS engagement mode | VPN |
| **F-003** | Simulate MR-123-02 radar display | MUST | PPI + track modes | VPN |
| **F-004** | Simulate electro-optical tracking | WISH | TV/FLIR imagery | VPN |
| **F-005** | Generate surface targets | MUST | 10+ simultaneous | Training |
| **F-006** | Generate air targets | MUST | 5+ simultaneous | Training |
| **F-007** | Generate anti-ship missile threats | WISH | 3+ simultaneous | Combat |
| **F-008** | Calculate ballistic trajectories | MUST | 6-DOF model | Physics |
| **F-009** | Simulate lead angle computation | MUST | Auto + manual modes | Training |
| **F-010** | Provide instructor control | MUST | Scenario creation | Training |
| **F-011** | Record training sessions | MUST | Full replay capability | AAR |
| **F-012** | Score trainee performance | MUST | Hit rate, response time | Assessment |
| **F-013** | Support multiple difficulty levels | MUST | Beginner to expert | Training |
| **F-014** | Simulate environmental conditions | MUST | Sea state, weather | Realism |
| **F-015** | Simulate weapon malfunctions | WISH | Training on failures | Training |

### 7.2 Performance Requirements

| ID | Requirement | MUST/WISH | Quantification | Source |
|----|-------------|-----------|----------------|--------|
| **P-001** | Visual update rate | MUST | ≥60 Hz | Quality |
| **P-002** | System latency | MUST | <100 ms end-to-end | Training |
| **P-003** | Target tracking accuracy | MUST | <0.5° simulated | Realism |
| **P-004** | Radar simulation update | MUST | ≥10 Hz | MR-123 spec |
| **P-005** | Ballistics computation | MUST | <1 ms per round | Real-time |
| **P-006** | Visual resolution | MUST | ≥1080p per channel | Quality |
| **P-007** | Audio fidelity | WISH | Spatial 5.1 surround | Immersion |
| **P-008** | Concurrent trainees | MUST | ≥2 stations networked | Efficiency |
| **P-009** | Mean Time Between Failures | MUST | >500 hours | Reliability |
| **P-010** | Startup time | MUST | <5 minutes | Operations |

### 7.3 Interface Requirements

| ID | Requirement | MUST/WISH | Quantification | Source |
|----|-------------|-----------|----------------|--------|
| **I-001** | Representative fire control console | MUST | Match AK-176/630 layout | Training |
| **I-002** | Radar display screen | MUST | Accurate MR-123 interface | Training |
| **I-003** | Handwheel controls | MUST | Bearing, elevation, range | Controls |
| **I-004** | Fire trigger | MUST | Representative activation | Controls |
| **I-005** | Intercom simulation | WISH | Ship communication | Team |
| **I-006** | Emergency stop | MUST | Safety cutoff | Safety |
| **I-007** | Instructor station | MUST | Monitor + control | IOS |
| **I-008** | AAR playback interface | MUST | Review capability | Training |

### 7.4 Environmental/Safety Requirements

| ID | Requirement | MUST/WISH | Quantification | Source |
|----|-------------|-----------|----------------|--------|
| **E-001** | Operating temperature | MUST | 15-35°C | Environment |
| **E-002** | Humidity tolerance | MUST | 30-80% RH | Environment |
| **E-003** | Power consumption | WISH | <5 kW total system | Logistics |
| **E-004** | Noise level | MUST | <70 dB at operator | Safety |
| **E-005** | EMC compliance | WISH | MIL-STD-461G | Standard |
| **E-006** | Ergonomic design | MUST | Per ISO 9241 | Safety |
| **E-007** | Fire safety | MUST | IEC 60065 compliant | Safety |

### 7.5 Cost/Schedule Requirements

| ID | Requirement | MUST/WISH | Quantification | Source |
|----|-------------|-----------|----------------|--------|
| **C-001** | Unit production cost | MUST | <$120,000 (Part-Task) | Budget |
| **C-002** | R&D investment | MUST | <$150,000 total | Budget |
| **C-003** | Development timeline | MUST | <18 months to prototype | Schedule |
| **C-004** | Warranty period | MUST | ≥2 years | Support |
| **C-005** | Spares availability | MUST | 10+ years | Lifecycle |
| **C-006** | Training materials | MUST | Complete package | Delivery |

---

## 8. DEVELOPMENT COST ESTIMATE

### 8.1 R&D Cost Breakdown

```
VN-NGT-001 DEVELOPMENT COST STRUCTURE:
══════════════════════════════════════════════════════════════════════

PHASE 1: TASK CLARIFICATION (This document)
├─ Effort: 2 weeks
├─ Cost: $3,000 (internal)
└─ Status: ✅ COMPLETE

PHASE 2: CONCEPTUAL DESIGN
├─ Function structure development: $5,000
├─ Morphological matrix/concept generation: $5,000
├─ Concept evaluation (VDI 2225): $3,000
├─ Preliminary architecture: $5,000
└─ Subtotal: $18,000

PHASE 3: EMBODIMENT DESIGN
├─ Detailed system design: $15,000
├─ Hardware component selection: $5,000
├─ Software architecture: $10,000
├─ Prototype planning: $5,000
└─ Subtotal: $35,000

PHASE 4: DETAIL DESIGN & PROTOTYPE
├─ Console hardware development: $20,000
├─ Software development (simulation core): $35,000
├─ Visual system integration: $15,000
├─ Fire control simulation: $20,000
├─ Target generation system: $10,000
├─ Instructor station: $10,000
├─ Integration & testing: $15,000
├─ Documentation: $5,000
└─ Subtotal: $130,000

CONTINGENCY (15%): $27,000

TOTAL R&D INVESTMENT: ~$210,000
══════════════════════════════════════════════════════════════════════

TIMELINE: 15-18 months to first prototype
ROI: Break-even at 3 units sold
```

### 8.2 Bill of Materials (Part-Task Trainer)

| Category | Component | Est. Cost | Source |
|----------|-----------|-----------|--------|
| **Computing** | Workstation (GPU) | $5,000 | Dell/HP |
| **Computing** | IOS Workstation | $2,500 | Dell/HP |
| **Display** | 3x 55" 4K LCD | $4,500 | Samsung/LG |
| **Display** | Display mounting | $1,500 | Custom |
| **Controls** | Console enclosure | $5,000 | Local fab |
| **Controls** | Control panels | $8,000 | Custom/import |
| **Controls** | Handwheels/joystick | $3,000 | Import |
| **Audio** | 5.1 speaker system | $1,500 | Commercial |
| **Motion** | Vibration platform | $3,000 | Optional |
| **Software** | Licenses (Unity/Unreal) | $2,000 | Standard |
| **Integration** | Cabling, mounting | $2,000 | Local |
| **Contingency** | 15% | $5,700 | - |
| **TOTAL BOM** | - | **~$44,000** | - |

### 8.3 Unit Pricing Strategy

| Configuration | BOM | Margin | Unit Price |
|---------------|-----|--------|------------|
| **Desktop Trainer** | $8,000 | 60% | $20,000 |
| **Part-Task Trainer** | $44,000 | 50% | $88,000 |
| **Full-Fidelity** | $90,000 | 50% | $180,000 |

---

## 9. PLATFORM SYNERGY WITH BMT-01-HN

### 9.1 Shared Components Analysis

```
VN-NGT-001 ↔ BMT-01-HN SYNERGY MATRIX:
══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│  Component                    │ NGT-001 │ BMT-01-HN │ Shared %      │
├───────────────────────────────┼─────────┼───────────┼───────────────┤
│  3D Visualization Engine      │   ✓     │     ✓     │    90%        │
│  Ocean/Wave Rendering         │   ✓     │     ✓     │    100%       │
│  Target 3D Models (vessels)   │   ✓     │     ✓     │    80%        │
│  Weather Simulation           │   ✓     │     ✓     │    100%       │
│  GPS/Navigation System        │   ✗     │     ✓     │    0%         │
│  Radar Simulation             │   ✓     │     ✓     │    60%        │
│  Ballistics Engine            │   ✓     │     ✗     │    0%         │
│  Fire Control Logic           │   ✓     │     ✗     │    0%         │
│  AAR/Replay System            │   ✓     │     ✓     │    80%        │
│  Instructor Station           │   ✓     │     ✓     │    70%        │
│  Database (terrain, assets)   │   ✓     │     ✓     │    75%        │
│  Network Infrastructure       │   ✓     │     ✓     │    90%        │
├───────────────────────────────┼─────────┼───────────┼───────────────┤
│  OVERALL PLATFORM SYNERGY     │         │           │    55-60%     │
└─────────────────────────────────────────────────────────────────────┘

SYNERGY VALUE:
├─ Software development savings: ~$40,000 (30% of NGT software)
├─ Reduced testing time: 3 months (shared infrastructure)
├─ Combined maintenance contract value: +25%
└─ Bundle pricing attraction: +15% deal closure rate
```

### 9.2 Combined Training Package

```
INTEGRATED NAVAL TRAINING SYSTEM:
══════════════════════════════════════════════════════════════════════

         CLASSROOM                    SIMULATOR                LIVE FIRE
    ┌─────────────────┐          ┌─────────────────┐      ┌─────────────────┐
    │  Theory         │          │  VN-NGT-001     │      │  BMT-01-HN      │
    │  Procedures     │───────►  │  Gunnery Sim    │ ───► │  Naval Target   │
    │  Safety         │          │  Skills Dev.    │      │  Validation     │
    └─────────────────┘          └─────────────────┘      └─────────────────┘
           │                            │                        │
           │                            │                        │
           ▼                            ▼                        ▼
    ┌─────────────────────────────────────────────────────────────────────┐
    │                    TRAINING PROGRESSION                             │
    │                                                                     │
    │  Week 1-2: Theory     Week 3-8: Simulator    Week 9-10: Live Fire   │
    │  (Classroom)          (VN-NGT-001)           (with BMT-01-HN)       │
    │                                                                     │
    │  ⭐ COMPLETE TRAINING CYCLE - SKILLS VALIDATED                      │
    └─────────────────────────────────────────────────────────────────────┘

BUNDLE PRICING:
├─ Gunnery Simulator only: $88,000
├─ Naval Target only: $50,000-70,000
├─ COMBINED PACKAGE: $120,000 (-15% bundle discount)
└─ Annual maintenance: $15,000 (both systems)
```

---

## 10. CRITICAL QUESTIONS FOR STAKEHOLDER

### 10.1 Essential Information Needed

```
8 CRITICAL QUESTIONS FOR VN-NGT-001:
══════════════════════════════════════════════════════════════════════

QUESTION 1: WEAPON PRIORITY
┌─────────────────────────────────────────────────────────────────────┐
│  Which weapon system should we prioritize FIRST?                    │
│                                                                     │
│  □ A) AK-176 (76mm) - Main gun on frigates/corvettes               │
│  □ B) AK-630 (30mm CIWS) - Point defense, anti-missile             │
│  □ C) Both equally                                                  │
│  □ D) Start with DShK 12.7mm (simpler, more vessels)               │
│                                                                     │
│  Impact: Determines R&D focus, cost, timeline                       │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 2: FIDELITY LEVEL
┌─────────────────────────────────────────────────────────────────────┐
│  What fidelity level is required?                                   │
│                                                                     │
│  □ A) Desktop Trainer ($20-35K) - Basic skills, theory              │
│  □ B) Part-Task Trainer ($80-120K) - Full procedures ⭐ RECOMMENDED │
│  □ C) Full-Fidelity ($150-200K) - Combat qualification              │
│  □ D) Tiered approach: Desktop + Part-Task combination              │
│                                                                     │
│  Impact: Cost, development complexity, training value               │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 3: CUSTOMER SEGMENT
┌─────────────────────────────────────────────────────────────────────┐
│  Who is the primary customer?                                       │
│                                                                     │
│  □ A) Naval Academy (Nha Trang) - Initial training                  │
│  □ B) Fleet Training Centers - Operational training                 │
│  □ C) Individual ships (on-board training)                          │
│  □ D) Coast Guard (VCG)                                             │
│                                                                     │
│  Impact: Configuration, quantity, pricing, support model            │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 4: MOTION PLATFORM
┌─────────────────────────────────────────────────────────────────────┐
│  Is ship motion simulation required?                                │
│                                                                     │
│  □ A) No - Static platform (lower cost)                             │
│  □ B) Vibration only (recoil simulation)                            │
│  □ C) 3-DOF motion (roll, pitch, heave)                             │
│  □ D) 6-DOF full motion                                             │
│                                                                     │
│  Impact: Cost +$10,000-50,000, complexity, realism                  │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 5: NETWORK CAPABILITY
┌─────────────────────────────────────────────────────────────────────┐
│  Multi-station networking required?                                 │
│                                                                     │
│  □ A) Standalone only                                               │
│  □ B) Local network (2-4 stations, same facility)                   │
│  □ C) Wide area network (distributed training)                      │
│  □ D) Integration with existing ship combat systems                 │
│                                                                     │
│  Impact: Architecture, development effort, cost                     │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 6: ANTI-MISSILE TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Is anti-ship missile defense training required?                    │
│                                                                     │
│  □ A) No - Surface/air targets only                                 │
│  □ B) Basic - Generic sea-skimmer simulation                        │
│  □ C) Advanced - Multiple missile types, evasive maneuvers          │
│  □ D) Full CIWS - Complete point defense scenario                   │
│                                                                     │
│  Impact: Complexity, realism, training value for AK-630             │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 7: BUDGET ENVELOPE
┌─────────────────────────────────────────────────────────────────────┐
│  What is the expected budget range?                                 │
│                                                                     │
│  R&D Budget:                                                        │
│  □ A) <$100,000                                                     │
│  □ B) $100,000-150,000                                              │
│  □ C) $150,000-250,000                                              │
│  □ D) >$250,000                                                     │
│                                                                     │
│  Unit Price Target:                                                 │
│  □ A) <$50,000                                                      │
│  □ B) $50,000-100,000                                               │
│  □ C) $100,000-150,000                                              │
│  □ D) >$150,000                                                     │
│                                                                     │
│  Impact: Feature set, development scope                             │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 8: TIMELINE
┌─────────────────────────────────────────────────────────────────────┐
│  When is the system needed?                                         │
│                                                                     │
│  □ A) ASAP (<12 months) - MVP approach                              │
│  □ B) 12-18 months - Standard development                           │
│  □ C) 18-24 months - Full feature development                       │
│  □ D) Flexible - Quality over speed                                 │
│                                                                     │
│  Impact: Development approach, feature prioritization               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 11. RISK ASSESSMENT

### 11.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Fire control accuracy insufficient | MEDIUM | HIGH | Early validation with SMEs |
| Visual system performance issues | LOW | MEDIUM | Use proven game engine |
| Hardware integration challenges | MEDIUM | MEDIUM | Modular architecture |
| Ballistics model validation | LOW | HIGH | Compare with published data |
| MR-123 radar interface unknown | HIGH | HIGH | Obtain technical documentation |

### 11.2 Market Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Vietnamese Navy budget constraints | MEDIUM | HIGH | Phased delivery option |
| Competition from Zen Technologies | MEDIUM | MEDIUM | Local support advantage |
| Changing requirements | MEDIUM | MEDIUM | Agile development approach |
| Export restrictions on technology | LOW | HIGH | Use commercial components |

### 11.3 Overall Risk Level

```
RISK SUMMARY:
══════════════════════════════════════════════════════════════════════

OVERALL RISK LEVEL: MEDIUM

Key Risk Drivers:
├─ Fire control documentation availability: HIGH RISK
├─ Market size validation: MEDIUM RISK
├─ Development timeline: MEDIUM RISK
└─ Technology complexity: MEDIUM RISK

Risk Reduction Actions (Priority):
1. Obtain MR-123-02 technical documentation
2. Validate market size with Vietnamese Navy contacts
3. Develop proof-of-concept for fire control simulation
4. Identify component suppliers for console hardware
```

---

## 12. NEXT STEPS

### 12.1 Immediate Actions (Week 1-2)

| # | Action | Owner | Due Date |
|---|--------|-------|----------|
| 1 | Answer 8 critical questions | Hung | Week 1 |
| 2 | Obtain MR-123 radar documentation | Hung | Week 2 |
| 3 | Validate market size with Navy contacts | Hung | Week 2 |
| 4 | Collect AK-176/AK-630 technical specs | Hung | Week 2 |

### 12.2 Phase 2 Preparation

After stakeholder input, proceed to **Phase 2: Conceptual Design**:
- Function structure development
- Morphological matrix (solution alternatives)
- VDI 2225 concept evaluation
- Preliminary architecture selection

### 12.3 Development Roadmap (Draft)

```
VN-NGT-001 DEVELOPMENT TIMELINE:
══════════════════════════════════════════════════════════════════════

Month 1-2:   Phase 1 Task Clarification (CURRENT)
Month 3-4:   Phase 2 Conceptual Design
Month 5-8:   Phase 3 Embodiment Design
Month 9-14:  Phase 4 Detail Design & Prototype
Month 15-18: Testing, Validation, Delivery

MILESTONE GATES:
├─ M1 (Month 2): Requirements frozen
├─ M2 (Month 4): Concept selected
├─ M3 (Month 8): Design review passed
├─ M4 (Month 14): Prototype complete
└─ M5 (Month 18): Customer acceptance
```

---

## 13. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-23 | Claude AI | Initial Phase 1 document |

---

**END OF DOCUMENT**

*This document follows Pahl & Beitz systematic design methodology for Phase 1: Task Clarification. Proceed to Phase 2: Conceptual Design after stakeholder input on critical questions.*
