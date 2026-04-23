# VN-MPADS-001: MANPADS TRAINING SIMULATOR
## Phase 1: Task Clarification - Deep Dive Analysis

**Document Version:** 1.0  
**Date:** December 23, 2025  
**Product Code:** VN-MPADS-001  
**Classification:** INTERNAL USE  

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Definition

**MANPADS Trainer** (Man-Portable Air Defense System Trainer) là hệ thống huấn luyện mô phỏng tên lửa phòng không vác vai, cho phép các xạ thủ luyện tập kỹ năng phát hiện, bám bắt, khóa mục tiêu và phóng tên lửa chống các mối đe dọa từ trên không bao gồm máy bay, trực thăng và UAV/drone.

### 1.2 Strategic Importance

```
WHY MANPADS TRAINER IS CRITICAL NOW:
══════════════════════════════════════════════════════════════════════

🚨 THE DRONE REVOLUTION IN WARFARE:
┌─────────────────────────────────────────────────────────────────────┐
│  LESSONS FROM UKRAINE (2022-2025):                                  │
│  ├─ Drones dominate modern battlefields                            │
│  ├─ MANPADS critical for low-altitude air defense                  │
│  ├─ Small UAVs require new engagement techniques                   │
│  ├─ IR seekers effective against drone thermal signatures          │
│  └─ Training demand EXPLODING worldwide                            │
│                                                                     │
│  VIETNAM CONTEXT:                                                   │
│  ├─ Growing drone threat from potential adversaries                │
│  ├─ Air defense modernization priority                             │
│  ├─ Indigenous MANPADS program (TL-01/Project KC-I)               │
│  ├─ Large SA-7/Igla inventory requiring operators                  │
│  └─ Naval and coastal defense applications                         │
└─────────────────────────────────────────────────────────────────────┘

⭐ MARKET TIMING: PERFECT
├─ Ukraine conflict increased global MANPADS training demand 3-5x
├─ Counter-drone capability is TOP military priority worldwide
├─ Vietnam expanding indigenous air defense production
└─ Limited simulator options for Eastern/Soviet systems
```

### 1.3 Weapon Systems Covered

```
VN-MPADS-001 WEAPON COVERAGE:
══════════════════════════════════════════════════════════════════════

TIER 1 - LEGACY SYSTEMS (Still in wide use):
┌─────────────────────────────────────────────────────────────────────┐
│  9K32 STRELA-2 / SA-7 GRAIL (1968)                                 │
│  ├─ Type: IR homing, tail-chase only                               │
│  ├─ Weight: 9.8 kg (missile + tube)                                │
│  ├─ Range: 3.2-4.2 km                                              │
│  ├─ Altitude: 50-2,300m                                            │
│  ├─ Speed: Mach 1.75                                               │
│  ├─ Warhead: 1.17 kg HE fragmentation                              │
│  ├─ Status: Legacy, still in Vietnam inventory                     │
│  └─ Priority: ⭐⭐⭐ (training for basic concepts)                  │
├─────────────────────────────────────────────────────────────────────┤
│  9K34 STRELA-3 / SA-14 GREMLIN (1974)                              │
│  ├─ Improved seeker, better IRCCM                                  │
│  ├─ Range: 4.5 km                                                  │
│  ├─ Altitude: up to 3,000m                                         │
│  └─ Priority: ⭐⭐⭐                                                 │
└─────────────────────────────────────────────────────────────────────┘

TIER 2 - MAIN OPERATIONAL SYSTEMS:
┌─────────────────────────────────────────────────────────────────────┐
│  9K310 IGLA-1 / SA-16 GIMLET (1981)                                │
│  ├─ Type: IR homing, all-aspect                                    │
│  ├─ Weight: 10.8 kg                                                │
│  ├─ Range: 5.2 km                                                  │
│  ├─ Altitude: 10-3,500m                                            │
│  ├─ Speed: Mach 1.9                                                │
│  ├─ Pk: 0.30-0.48 (unprotected target)                             │
│  └─ Priority: ⭐⭐⭐⭐                                               │
├─────────────────────────────────────────────────────────────────────┤
│  9K38 IGLA / SA-18 GROUSE (1983)                                   │
│  ├─ Type: Advanced IR seeker, IRCCM                                │
│  ├─ Weight: 10.8 kg                                                │
│  ├─ Range: 5.2 km                                                  │
│  ├─ Altitude: 10-3,500m                                            │
│  ├─ Pk: 0.44-0.59 (F-4 target)                                     │
│  ├─ Features: Night sight compatible, IFF                          │
│  ├─ Status: MAIN Vietnamese MANPADS                                │
│  └─ Priority: ⭐⭐⭐⭐⭐ HIGHEST                                     │
└─────────────────────────────────────────────────────────────────────┘

TIER 3 - ADVANCED SYSTEMS:
┌─────────────────────────────────────────────────────────────────────┐
│  9K338 IGLA-S / SA-24 GRINCH (2004)                                │
│  ├─ Type: Two-channel optical seeker                               │
│  ├─ Weight: 10.8 kg                                                │
│  ├─ Range: 6.0 km (extended)                                       │
│  ├─ Altitude: 10-3,500m                                            │
│  ├─ Features: Laser proximity fuse, improved IRCCM                 │
│  ├─ Targets: Aircraft, helicopters, cruise missiles, UAVs         │
│  ├─ Status: Possibly in Vietnamese inventory                       │
│  └─ Priority: ⭐⭐⭐⭐⭐                                             │
├─────────────────────────────────────────────────────────────────────┤
│  TL-01 / PROJECT KC-I (VIETNAMESE INDIGENOUS!) 🇻🇳                 │
│  ├─ Type: Derivative of Igla-S                                     │
│  ├─ Status: Locally assembled/produced                             │
│  ├─ Manufacturer: Vietnam defense industry                         │
│  ├─ Note: Indigenous program similar to SCX-12.7V HMG             │
│  └─ Priority: ⭐⭐⭐⭐⭐ (Strategic importance!)                     │
└─────────────────────────────────────────────────────────────────────┘

TIER 4 - WESTERN REFERENCE (Export/Interoperability):
┌─────────────────────────────────────────────────────────────────────┐
│  FIM-92 STINGER (USA)                                              │
│  ├─ Type: IR/UV dual seeker                                        │
│  ├─ Range: 4.8 km                                                  │
│  ├─ Speed: Mach 2.2                                                │
│  ├─ Status: Reference for international training                   │
│  └─ Priority: ⭐⭐⭐ (export market, interoperability)              │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.4 Market Opportunity Summary

| Metric | Value | Notes |
|--------|-------|-------|
| **Primary Market** | Vietnamese Air Defense Forces | Army, Navy, Air Force |
| **Secondary Market** | Regional export | ASEAN, Middle East |
| **Market Size** | 30-50 systems | Vietnam domestic |
| **Unit Price Range** | $80,000-180,000 | Depending on config |
| **Total Revenue** | $3-8M USD | 10-year projection |
| **Competition** | Zen (AR-based), Konus (Russia) | Limited options |
| **Unique Advantage** | TL-01 support | Vietnamese indigenous |

---

## 2. VIETNAMESE MANPADS INVENTORY

### 2.1 System Generations

```
MANPADS EVOLUTION (Vietnamese Context):
══════════════════════════════════════════════════════════════════════

GENERATION 1: STRELA SERIES (1970s-1980s)
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  SA-7 STRELA-2                          SA-14 STRELA-3             │
│  ┌──────────────────┐                   ┌──────────────────┐       │
│  │  [Launch Tube]   │                   │  [Launch Tube]   │       │
│  │       ║          │                   │       ║          │       │
│  │  [Gripstock]     │                   │  [Gripstock]     │       │
│  │    ═══╬═══       │                   │    ═══╬═══       │       │
│  │       ║          │                   │       ║          │       │
│  │  [Shoulder]      │                   │  [Shoulder]      │       │
│  └──────────────────┘                   └──────────────────┘       │
│                                                                     │
│  • Tail-chase engagement only           • Improved all-aspect      │
│  • Simple IR seeker                     • Better IRCCM             │
│  • 3.6-4.2 km range                     • 4.5 km range             │
│  • 1500-2300m ceiling                   • 3000m ceiling            │
│  • Vietnam War legacy                   • Still in service         │
│                                                                     │
│  TRAINING VALUE: Fundamentals, engagement procedures                │
└─────────────────────────────────────────────────────────────────────┘

GENERATION 2: IGLA SERIES (1980s-Present) - MAIN SYSTEMS
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  IGLA SYSTEM COMPONENTS:                                            │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              LAUNCH TUBE (9P39)                              │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │  [Aerospike] ═══════════════════════════ [Nozzle]    │   │   │
│  │  │               ↑ Missile 9M39 inside                   │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          │                                   │   │
│  │                    [Connector]                               │   │
│  │                          │                                   │   │
│  │  ┌───────────────────────┴───────────────────────────────┐  │   │
│  │  │              GRIPSTOCK (9P516)                         │  │   │
│  │  │  ┌─────┐  ┌─────────────────────┐  ┌─────────────┐   │  │   │
│  │  │  │Power│  │    Trigger Group    │  │   IFF Port  │   │  │   │
│  │  │  │Unit │  │ [Safety] [Trigger]  │  │   (Optional)│   │  │   │
│  │  │  └─────┘  └─────────────────────┘  └─────────────┘   │  │   │
│  │  │              [Shoulder Rest]                          │  │   │
│  │  └───────────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  OPERATIONAL SEQUENCE:                                              │
│  1. Visual acquisition of target                                    │
│  2. Power-up system (thermal battery activation)                    │
│  3. Seeker cooldown (3-5 seconds)                                   │
│  4. Track target, await seeker lock tone                            │
│  5. Lead target (super-elevation)                                   │
│  6. Pull trigger (uncage seeker)                                    │
│  7. LAUNCH - missile self-guides to target                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

GENERATION 3: IGLA-S / TL-01 (2004-Present) - ADVANCED
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  IGLA-S IMPROVEMENTS:                                               │
│  ├─ Extended range: 6.0 km (vs 5.2 km)                             │
│  ├─ Two-channel optical seeker (IR + UV)                           │
│  ├─ Improved target discrimination vs flares                       │
│  ├─ Laser proximity fuse + impact fuse                             │
│  ├─ Larger warhead with more fragments                             │
│  ├─ Night sight compatible (1PN72M)                                │
│  ├─ Can engage: Aircraft, helicopters, cruise missiles, UAVs      │
│  └─ VIETNAMESE TL-01 based on this design                          │
│                                                                     │
│  ⭐ CRITICAL: Vietnam has indigenous production capability!        │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Technical Specifications Comparison

| Parameter | SA-7B | SA-16 | SA-18 | SA-24 | Stinger |
|-----------|-------|-------|-------|-------|---------|
| **Weight (system)** | 9.8 kg | 10.8 kg | 10.8 kg | 10.8 kg | 10.1 kg |
| **Missile length** | 1.44 m | 1.67 m | 1.67 m | 1.67 m | 1.52 m |
| **Range (max)** | 4.2 km | 5.2 km | 5.2 km | 6.0 km | 4.8 km |
| **Altitude (max)** | 2,300 m | 3,500 m | 3,500 m | 3,500 m | 3,800 m |
| **Speed** | Mach 1.75 | Mach 1.9 | Mach 1.9 | Mach 1.9 | Mach 2.2 |
| **Warhead** | 1.17 kg | 1.17 kg | 1.17 kg | 1.27 kg | 1.0 kg |
| **Seeker** | IR (uncooled) | IR (cooled) | IR (advanced) | IR+UV | IR+UV |
| **All-aspect** | No | Yes | Yes | Yes | Yes |
| **Pk (unprotected)** | 0.20-0.30 | 0.30-0.48 | 0.44-0.59 | >0.60 | 0.60-0.70 |
| **IRCCM** | None | Basic | Advanced | Superior | Advanced |
| **Vietnam Use** | Legacy | Main | Main | Modern | Reference |
| **Sim Priority** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 3. TRAINING REQUIREMENTS ANALYSIS

### 3.1 MANPADS Training Challenges

```
PROBLEM ANALYSIS:
══════════════════════════════════════════════════════════════════════

PROBLEM 1: MISSILE COST (Critical!)
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ SA-18 missile: $30,000-50,000 each                             │
│  ├─ SA-24 missile: $50,000-80,000 each                             │
│  ├─ Live fire exercise: 2-3 missiles minimum                       │
│  ├─ Annual training cost: $150,000-500,000 per unit               │
│  ├─ Limited budget = LIMITED TRAINING                              │
│  └─ Most operators: 0-2 live fires in career!                      │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited virtual launches: $0 per shot                        │
│  ├─ 1000:1 cost savings ratio                                      │
│  ├─ Operators can practice hundreds of engagements                 │
│  ├─ Live fire for qualification/confidence building only           │
│  └─ Estimated savings: $100,000+ per year per unit                │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 2: LIVE TARGET AVAILABILITY
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Need aerial targets (drones, towed targets)                    │
│  ├─ Pilotless Target Aircraft (PTA): $5,000-50,000 each           │
│  ├─ Range coordination: Complex, limited windows                   │
│  ├─ Weather dependent                                              │
│  ├─ Safety clearances required                                     │
│  └─ Cannot practice against realistic threat profiles             │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited aerial target types                                  │
│  ├─ Jets, helicopters, cruise missiles, drones                    │
│  ├─ Any weather, day/night                                        │
│  ├─ Realistic threat aircraft signatures                          │
│  └─ Countermeasure scenarios (flares, jamming)                    │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 3: SEEKER BEHAVIOR TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ IR seeker behavior is INVISIBLE to naked eye                  │
│  ├─ Operators cannot "see" what seeker sees                       │
│  ├─ Difficult to teach target discrimination                       │
│  ├─ Flare rejection techniques hard to practice                   │
│  └─ Lock-on zone understanding limited                             │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Visualize seeker field of view                                │
│  ├─ Show IR signature of targets                                   │
│  ├─ Display countermeasure deployment                             │
│  ├─ Teach optimal engagement angles                               │
│  └─ Build intuition for lock-on conditions                        │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 4: ENGAGEMENT WINDOW TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Target appears for seconds only                                │
│  ├─ Must make rapid decisions                                      │
│  ├─ Power-up, acquire, track, lock, fire sequence                 │
│  ├─ Typical engagement window: 8-15 seconds                       │
│  └─ Stress response training impossible without sim               │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Practice time-critical procedures                              │
│  ├─ Build muscle memory                                            │
│  ├─ Stress inoculation training                                    │
│  ├─ Measure and improve reaction times                            │
│  └─ Variable difficulty progressions                               │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 5: ANTI-DRONE TRAINING (NEW REQUIREMENT!)
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Drones are NEW primary threat                                  │
│  ├─ Small thermal signature (hard to lock)                        │
│  ├─ Low, slow flight profiles                                      │
│  ├─ Swarm tactics                                                   │
│  ├─ NO established doctrine for MANPADS vs drones                 │
│  └─ Ukraine experience shows MANPADS effective vs drones          │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Train against UAV profiles                                     │
│  ├─ Small drone engagement techniques                              │
│  ├─ Develop anti-drone TTPs                                        │
│  ├─ Multiple drone scenarios                                       │
│  └─ Build institutional knowledge                                   │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 MANPADS Operator Skill Hierarchy

```
MANPADS GUNNER SKILL PROGRESSION:
══════════════════════════════════════════════════════════════════════

LEVEL 1: BASIC OPERATOR (4-6 weeks)
├─ System nomenclature and function
├─ Safety procedures (CRITICAL!)
├─ Shoulder position and aiming
├─ Power-up sequence
├─ Trigger discipline
├─ Post-launch procedures
└─ Simulator Role: Foundation training

LEVEL 2: PROFICIENT GUNNER (6-12 weeks)
├─ Target identification
├─ Seeker audio interpretation (lock tone)
├─ Lead/super-elevation calculation
├─ Engagement zone understanding
├─ Reaction time improvement
├─ Day engagement proficiency
└─ Simulator Role: Core skill building

LEVEL 3: ADVANCED GUNNER (12-24 weeks)
├─ Multiple target prioritization
├─ Countermeasure awareness
├─ Night operations (with NVD)
├─ Helicopter engagement (hot/cold aspects)
├─ Jet aircraft engagement
├─ Rapid re-engagement
└─ Simulator Role: Advanced scenarios

LEVEL 4: SPECIALIST (24+ weeks)
├─ UAV/Drone engagement
├─ Cruise missile engagement
├─ Team coordination (with early warning)
├─ Adverse weather operations
├─ IFF procedures
├─ Tactical deployment
└─ Simulator Role: Expert training

LEVEL 5: INSTRUCTOR (Continuous)
├─ Training methodology
├─ Performance evaluation
├─ Scenario design
├─ Doctrine development
└─ Simulator Role: IOS operation, AAR conduct
```

---

## 4. PRODUCT ARCHITECTURE

### 4.1 System Configurations

```
VN-MPADS-001 CONFIGURATION OPTIONS:
══════════════════════════════════════════════════════════════════════

OPTION A: CLASSROOM TRAINER (Basic)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $50,000-70,000                                              │
│  Fidelity: MEDIUM                                                   │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 1x MANPADS replica (weighted, functional controls)             │
│  ├─ Desktop computer with large monitor (65"+)                     │
│  ├─ Seeker simulation (audio lock tone)                            │
│  ├─ Basic visual scenarios                                         │
│  ├─ Instructor station (PC-based)                                  │
│  └─ No recoil/launch simulation                                    │
│                                                                     │
│  Features:                                                          │
│  ├─ Procedural training                                            │
│  ├─ Target acquisition practice                                    │
│  ├─ Lock-on audio training                                         │
│  ├─ Basic After-Action Review                                      │
│  └─ Unlimited students (one at a time)                             │
│                                                                     │
│  Best For: Initial training, classroom use                          │
└─────────────────────────────────────────────────────────────────────┘

OPTION B: INDOOR SIMULATOR (Standard) ⭐ RECOMMENDED
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $100,000-140,000                                            │
│  Fidelity: HIGH                                                     │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 2x MANPADS replicas (full weight, functional)                  │
│  ├─ Dome or curved screen (180°+ FOV)                              │
│  ├─ High-resolution projection system                              │
│  ├─ Realistic seeker simulation                                    │
│  ├─ Launch effect (pneumatic bump, flash, smoke)                   │
│  ├─ Binocular/sight integration                                    │
│  ├─ Full instructor station                                        │
│  ├─ Comprehensive AAR system                                       │
│  └─ 7.1 audio (aircraft sound positioning)                         │
│                                                                     │
│  Features:                                                          │
│  ├─ Full engagement cycle simulation                               │
│  ├─ All target types (jets, helos, UAVs)                          │
│  ├─ Countermeasure scenarios                                       │
│  ├─ Day/night/weather conditions                                   │
│  ├─ Performance tracking                                           │
│  └─ 2 trainees simultaneous                                        │
│                                                                     │
│  Best For: Air defense unit training, academies                    │
└─────────────────────────────────────────────────────────────────────┘

OPTION C: AUGMENTED REALITY OUTDOOR (Advanced)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $140,000-200,000                                            │
│  Fidelity: VERY HIGH                                                │
│                                                                     │
│  Configuration:                                                     │
│  ├─ Real MANPADS weapon (modified, no missile)                     │
│  ├─ AR headset/goggles overlay                                     │
│  ├─ Virtual targets in real environment                            │
│  ├─ Full seeker simulation                                         │
│  ├─ GPS/tracking integration                                       │
│  ├─ Mobile instructor station                                      │
│  └─ Can integrate with live aircraft                               │
│                                                                     │
│  Features:                                                          │
│  ├─ Train in actual field positions                                │
│  ├─ Real terrain, weather awareness                                │
│  ├─ Realistic physical handling                                    │
│  ├─ Integration with live/constructive exercises                   │
│  ├─ MAWS training for aircraft crews                               │
│  └─ Multi-site networked training                                  │
│                                                                     │
│  Best For: Advanced tactical training, joint exercises             │
└─────────────────────────────────────────────────────────────────────┘

OPTION D: INTEGRATED AIR DEFENSE TRAINER (Premium)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $200,000-300,000                                            │
│  Fidelity: HIGHEST                                                  │
│                                                                     │
│  Configuration:                                                     │
│  ├─ Multiple MANPADS positions (4-6)                               │
│  ├─ Radar/Early Warning station simulation                         │
│  ├─ Command post integration                                       │
│  ├─ IFF simulation                                                  │
│  ├─ Sector air defense coordination                                │
│  ├─ Network capability (LVC)                                       │
│  └─ Full AAR/debrief facility                                      │
│                                                                     │
│  Features:                                                          │
│  ├─ Section/platoon level training                                 │
│  ├─ Air defense coordination                                       │
│  ├─ Engagement prioritization                                      │
│  ├─ Fire discipline                                                │
│  ├─ Combined arms scenarios                                        │
│  └─ Joint service exercises                                        │
│                                                                     │
│  Best For: Air defense command training, national center           │
└─────────────────────────────────────────────────────────────────────┘
```

### 4.2 Technical Architecture

```
VN-MPADS-001 SYSTEM ARCHITECTURE:
══════════════════════════════════════════════════════════════════════

                    MANPADS REPLICA WEAPON
     ┌────────────────────────────────────────────────────┐
     │  ┌──────────────────────────────────────────────┐  │
     │  │           LAUNCH TUBE (Weighted)             │  │
     │  │  • Correct weight (10+ kg)                   │  │
     │  │  • Balance point accurate                    │  │
     │  │  • Shoulder pad                              │  │
     │  └──────────────────────────────────────────────┘  │
     │                       │                            │
     │  ┌──────────────────────────────────────────────┐  │
     │  │           GRIPSTOCK (Functional)             │  │
     │  │  • Trigger with pressure sensor              │  │
     │  │  • Safety switch                             │  │
     │  │  • Uncaging button                           │  │
     │  │  • Battery simulator (BCU)                   │  │
     │  │  • IFF trigger (optional)                    │  │
     │  │  • Wireless data link                        │  │
     │  └──────────────────────────────────────────────┘  │
     │                       │                            │
     │  ┌──────────────────────────────────────────────┐  │
     │  │           SEEKER SIMULATION                  │  │
     │  │  • IR seeker FOV overlay                     │  │
     │  │  • Lock tone audio (earpiece)                │  │
     │  │  • Gyro/orientation sensors                  │  │
     │  │  • Target tracking output                    │  │
     │  └──────────────────────────────────────────────┘  │
     └────────────────────────────────────────────────────┘
                            │
                      [Wireless Link]
                            │
     ┌──────────────────────┴──────────────────────┐
     │            SIMULATION COMPUTER              │
     │  ┌────────────────────────────────────────┐ │
     │  │  • IR seeker model (physics-based)     │ │
     │  │  • Target IR signature database        │ │
     │  │  • Missile flight model                │ │
     │  │  • Countermeasure effects              │ │
     │  │  • Engagement zone calculation         │ │
     │  │  • Environmental factors               │ │
     │  │  • Hit probability model               │ │
     │  └────────────────────────────────────────┘ │
     └──────────────────────┬──────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
  ┌───────────┐      ┌───────────┐      ┌───────────┐
  │ PROJECTION│      │   AUDIO   │      │ INSTRUCTOR│
  │   DOME    │      │  SYSTEM   │      │  STATION  │
  │           │      │           │      │           │
  │ 180°+ FOV │      │ 3D audio  │      │ Control   │
  │ Sky/ground│      │ Aircraft  │      │ Monitor   │
  │ Day/night │      │ position  │      │ AAR       │
  │ Weather   │      │ Lock tone │      │ Reports   │
  └───────────┘      └───────────┘      └───────────┘
```

### 4.3 Seeker Simulation Details

```
IR SEEKER SIMULATION MODEL:
══════════════════════════════════════════════════════════════════════

SEEKER PHYSICS:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  FIELD OF VIEW (FOV):                                               │
│  ├─ Acquisition FOV: ±3° (narrow cone)                             │
│  ├─ Tracking FOV: ±1° (after lock)                                 │
│  └─ Gimbal limits: ±40° from boresight                             │
│                                                                     │
│  IR SIGNATURE MODEL:                                                │
│  ├─ Engine exhaust (primary)                                       │
│  │   ├─ Jet engine: 400-700°C                                      │
│  │   ├─ Turboprop: 300-500°C                                       │
│  │   ├─ Helicopter: 250-400°C                                      │
│  │   └─ UAV (small): 100-200°C                                     │
│  ├─ Skin heating (friction)                                        │
│  ├─ Solar reflection                                               │
│  └─ Background contrast                                             │
│                                                                     │
│  LOCK-ON CONDITIONS:                                                │
│  ├─ Minimum contrast ratio                                         │
│  ├─ Angular rate limits                                            │
│  ├─ Aspect angle (tail-chase vs all-aspect)                       │
│  └─ Range to target                                                │
│                                                                     │
│  COUNTERMEASURE MODEL:                                              │
│  ├─ Flare ejection timing                                          │
│  ├─ Flare IR intensity decay                                       │
│  ├─ Seeker discrimination logic                                    │
│  ├─ IRCCM effectiveness by generation                              │
│  └─ DIRCM (laser jammer) effects                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

TARGET LIBRARY:
┌─────────────────────────────────────────────────────────────────────┐
│  CATEGORY         │ EXAMPLES                    │ IR SIGNATURE     │
├───────────────────┼─────────────────────────────┼──────────────────┤
│ Fighter jets      │ F-16, Su-27, MiG-29        │ High (afterburn) │
│ Attack aircraft   │ Su-25, A-10, Su-34         │ High             │
│ Helicopters       │ Mi-24, AH-64, UH-60        │ Medium           │
│ Transport         │ C-130, An-26, IL-76        │ Medium-High      │
│ Cruise missiles   │ Tomahawk, Kalibr           │ Medium           │
│ Large UAV         │ Bayraktar TB2, MQ-9        │ Medium           │
│ Medium UAV        │ Orlan-10, Shahed-136       │ Low-Medium       │
│ Small UAV         │ Mavic, Quadcopter          │ Very Low         │
└───────────────────┴─────────────────────────────┴──────────────────┘
```

---

## 5. SOFTWARE REQUIREMENTS

### 5.1 Training Modes

```
VN-MPADS-001 SOFTWARE TRAINING MODES:
══════════════════════════════════════════════════════════════════════

MODE 1: BASIC PROCEDURES
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Learn system operation sequence                         │
│                                                                     │
│  Training Steps:                                                    │
│  1. System power-up (BCU activation)                               │
│  2. Seeker cooldown wait                                           │
│  3. Target acquisition (visual)                                    │
│  4. Aiming and tracking                                            │
│  5. Lock tone recognition                                          │
│  6. Super-elevation application                                    │
│  7. Trigger sequence                                               │
│  8. Post-launch procedures                                         │
│                                                                     │
│  Targets: Static, slow-moving, predictable                         │
│  Feedback: Step-by-step guidance, error correction                 │
└─────────────────────────────────────────────────────────────────────┘

MODE 2: TARGET ENGAGEMENT
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Engage various aircraft types                           │
│                                                                     │
│  Scenarios:                                                         │
│  ├─ Helicopter approach (frontal, flanking)                        │
│  ├─ Jet aircraft (low-level attack run)                            │
│  ├─ Transport aircraft (straight flight)                           │
│  ├─ UAV profiles (loiter, approach, egress)                        │
│  └─ Cruise missile intercept                                       │
│                                                                     │
│  Variables:                                                         │
│  ├─ Speed: 100-800 km/h                                            │
│  ├─ Altitude: 50-3500m                                             │
│  ├─ Aspect: Head-on, beam, tail                                    │
│  └─ Range: 500-6000m                                               │
│                                                                     │
│  Scoring: Time-to-lock, launch decision, Pk estimate               │
└─────────────────────────────────────────────────────────────────────┘

MODE 3: COUNTERMEASURE TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Engage targets using defensive measures                 │
│                                                                     │
│  Countermeasures Simulated:                                         │
│  ├─ IR flares (various patterns)                                   │
│  ├─ Chaff (no IR effect, visual distraction)                      │
│  ├─ Maneuvering (jinking, break turns)                            │
│  ├─ Terrain masking                                                │
│  └─ DIRCM (laser jammer) - advanced                               │
│                                                                     │
│  Training Focus:                                                    │
│  ├─ Optimal engagement timing                                      │
│  ├─ Pre-flare launch techniques                                    │
│  ├─ Re-engagement after break-lock                                 │
│  └─ IRCCM effectiveness understanding                              │
└─────────────────────────────────────────────────────────────────────┘

MODE 4: ANTI-DRONE SPECIALIST
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Engage UAVs/drones                                      │
│                                                                     │
│  Drone Types:                                                       │
│  ├─ Large MALE (Bayraktar TB2, MQ-9)                              │
│  ├─ Medium tactical (Orlan-10, ScanEagle)                         │
│  ├─ Loitering munition (Shahed-136, Lancet)                       │
│  ├─ Small reconnaissance (Mavic-class)                            │
│  └─ Drone swarm (multiple simultaneous)                            │
│                                                                     │
│  Challenges:                                                        │
│  ├─ Low IR signature                                               │
│  ├─ Slow speed (hard to track)                                    │
│  ├─ Small size (visual acquisition)                               │
│  ├─ Multiple targets                                               │
│  └─ Cost-benefit decision (missile vs drone value)                │
└─────────────────────────────────────────────────────────────────────┘

MODE 5: NIGHT/LOW-VISIBILITY
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Operate in reduced visibility                           │
│                                                                     │
│  Conditions:                                                        │
│  ├─ Night (moon phases)                                            │
│  ├─ Dusk/dawn                                                      │
│  ├─ Rain/fog                                                       │
│  ├─ Smoke/dust                                                     │
│  └─ Illumination (flares, searchlights)                           │
│                                                                     │
│  Equipment:                                                         │
│  ├─ NVD simulation (1PN72M)                                        │
│  ├─ Audio cueing emphasis                                          │
│  └─ Early warning integration                                       │
└─────────────────────────────────────────────────────────────────────┘

MODE 6: TACTICAL SCENARIOS
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Apply skills in realistic scenarios                     │
│                                                                     │
│  Scenarios:                                                         │
│  ├─ Convoy defense vs helicopter attack                            │
│  ├─ Position defense vs CAS aircraft                               │
│  ├─ Base defense vs drone reconnaissance                           │
│  ├─ Point defense vs cruise missile                               │
│  ├─ Ambush engagement                                              │
│  └─ Withdrawal under air attack                                    │
│                                                                     │
│  Evaluation:                                                        │
│  ├─ Target prioritization                                          │
│  ├─ Fire discipline                                                │
│  ├─ Ammunition conservation                                        │
│  └─ Survival (counter-battery)                                     │
└─────────────────────────────────────────────────────────────────────┘

MODE 7: TEAM/SECTION TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Objective: Coordinate multiple MANPADS teams                       │
│                                                                     │
│  Coordination:                                                      │
│  ├─ Sector assignment                                              │
│  ├─ Target handoff                                                 │
│  ├─ Sequential engagement                                          │
│  ├─ Early warning integration                                      │
│  └─ IFF procedures                                                 │
│                                                                     │
│  Network Features:                                                  │
│  ├─ Multiple trainee stations                                      │
│  ├─ Shared tactical picture                                        │
│  ├─ Voice communication                                            │
│  └─ Centralized AAR                                                │
└─────────────────────────────────────────────────────────────────────┘
```

### 5.2 After-Action Review Requirements

```
AAR CAPABILITIES:
══════════════════════════════════════════════════════════════════════

3D PLAYBACK:
├─ Full engagement reconstruction
├─ Multiple viewpoints (gunner, target, bird's-eye)
├─ Seeker FOV overlay
├─ Missile flight path
├─ Target track vs missile track
└─ Slow-motion/frame-by-frame

ENGAGEMENT ANALYSIS:
├─ Time-to-lock
├─ Lock quality (signal strength)
├─ Launch decision point
├─ Super-elevation accuracy
├─ Missile time-of-flight
├─ Intercept geometry
├─ Miss distance (if applicable)
└─ Pk assessment

SCORING METRICS:
├─ Detection time
├─ Acquisition time
├─ Lock-on time
├─ Launch decision quality
├─ Engagement success rate
├─ Countermeasure response
└─ Overall proficiency score

REPORTING:
├─ Individual performance tracking
├─ Unit summary statistics
├─ Qualification records
├─ Trend analysis
├─ Export (PDF, Excel)
└─ Vietnamese language
```

---

## 6. COMPETITOR ANALYSIS

### 6.1 Primary Competitors

```
COMPETITOR ANALYSIS:
══════════════════════════════════════════════════════════════════════

COMPETITOR 1: ZEN TECHNOLOGIES (India) - NEW AR-BASED
┌─────────────────────────────────────────────────────────────────────┐
│  Product: AR-Based Stinger/MANPADS Air Defense Simulator           │
│  Status: Unveiled at I/ITSEC 2025 (December 2025)                  │
│                                                                     │
│  Features:                                                          │
│  ├─ Augmented Reality environments                                 │
│  ├─ Live drone replication                                         │
│  ├─ Counter-UAS integration                                        │
│  ├─ Stinger focus (Western market)                                 │
│  └─ Training-as-a-Service model                                    │
│                                                                     │
│  Estimated Price: $80,000-150,000                                   │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Modern AR technology                                           │
│  ├─ Live drone integration                                         │
│  ├─ Established company                                            │
│  └─ Indian Army validation                                         │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Stinger-focused (not Eastern weapons)                         │
│  ├─ No TL-01/Igla-S specific                                      │
│  ├─ Import distance to Vietnam                                     │
│  └─ New product (unproven)                                         │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 2: 9F859 KONUS (Russia/Kolomna)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: Official Igla-S training simulator                        │
│  Manufacturer: Kolomna OKB (Igla maker)                            │
│                                                                     │
│  Features:                                                          │
│  ├─ Developed for Igla, Igla-1, Igla-S                            │
│  ├─ Computer graphics environment                                  │
│  ├─ Classroom-based                                                │
│  ├─ Full operational procedures                                    │
│  └─ Russian military standard                                      │
│                                                                     │
│  Estimated Price: $100,000-200,000 (estimated)                     │
│                                                                     │
│  Strengths:                                                         │
│  ├─ OEM product (exact weapon match)                              │
│  ├─ Proven with Russian forces                                     │
│  └─ Comprehensive training program                                 │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Russian sanctions (export restrictions)                        │
│  ├─ Limited to Russian customers                                   │
│  ├─ Older technology (not AR/VR)                                  │
│  └─ No TL-01 support                                               │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 3: MAAT TRAINER (Israel/Europe)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: MANPADS Aircrew Awareness Trainer                        │
│                                                                     │
│  Features:                                                          │
│  ├─ Dual-use: MANPADS operators AND aircraft crews                │
│  ├─ UV threat signature (MAWS testing)                            │
│  ├─ Supports SA-24, Stinger replicas                              │
│  ├─ Outdoor, transportable                                         │
│  └─ ~100 launches in 2 hours                                       │
│                                                                     │
│  Estimated Price: $50,000-100,000                                   │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Dual training capability                                       │
│  ├─ Live aircraft integration                                      │
│  └─ Field deployable                                               │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Requires live aircraft                                         │
│  ├─ Limited indoor capability                                      │
│  └─ Western focus                                                  │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 4: JMANPADS (USA - BlueHalo)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: Joint MANPADS Trainer                                     │
│                                                                     │
│  Features:                                                          │
│  ├─ UV threat signature                                            │
│  ├─ Compatible with AAR-47, AAR-57 CMWS                           │
│  ├─ Digital video recording                                        │
│  ├─ Weight comparable to SA-7, SA-18                              │
│  └─ US military qualified                                          │
│                                                                     │
│  Estimated Price: $100,000-150,000                                  │
│                                                                     │
│  Strengths:                                                         │
│  ├─ US military standard                                           │
│  ├─ MAWS integration tested                                        │
│  └─ Field proven                                                   │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Export restrictions                                            │
│  ├─ US weapon focus                                                │
│  └─ High cost                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2 Market Gap Analysis

```
MARKET POSITIONING:
══════════════════════════════════════════════════════════════════════

                    HIGH
                     ▲
                     │   Konus          JMANPADS
                     │   (Russia)          (USA)
                     │      ●                ●
              PRICE  │
                     │        Zen AR
                     │           ●
                     │
                     │   MAAT     ┌──────────────────┐
                     │     ●      │ ⭐ OPPORTUNITY   │
                     │            │    ZONE          │
                     │            │ Vietnamese TL-01 │
                     │            │ Igla-S focus     │
                     │            │ $80-140K range   │
                     │            │ Counter-drone    │
                     │            └──────────────────┘
                    LOW
                     └────────────────────────────────────────────►
                         EASTERN                    WESTERN
                         SYSTEMS                    SYSTEMS
                     (Igla, Strela)            (Stinger, Mistral)

KEY GAPS:
├─ NO Vietnamese-made MANPADS simulator exists
├─ TL-01 (indigenous MANPADS) has NO training solution
├─ Counter-drone training is underserved globally
├─ Eastern weapon systems lack modern simulators
└─ AR/VR technology not applied to Igla family
```

---

## 7. SYNERGY ANALYSIS

### 7.1 Platform Synergy with Existing Products

```
COMPONENT REUSE ANALYSIS:
══════════════════════════════════════════════════════════════════════

FROM VN-SAMT-001 (Small Arms):
┌─────────────────────────────────────────────────────────────────────┐
│  Component                      │ Reuse % │ Savings              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ Simulation engine (Unity)       │   60%   │  $9,000              │
│ Instructor station framework    │   70%   │  $5,600              │
│ After-Action Review system      │   75%   │  $6,000              │
│ Database/reporting              │   85%   │  $2,550              │
│ Vietnamese localization         │   90%   │  $2,700              │
│ Audio system design             │   40%   │  $800                │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL SAMT SYNERGY           │   ~65%  │  $26,650             │
└─────────────────────────────────┴─────────┴──────────────────────┘

FROM VN-MGT-001 (Machine Gun - AA Mode):
┌─────────────────────────────────────────────────────────────────────┐
│  Component                      │ Reuse % │ Savings              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ Aerial target library           │   80%   │  $6,400              │
│ Aircraft flight models          │   70%   │  $5,600              │
│ 3D sky/environment              │   60%   │  $3,000              │
│ AA engagement logic             │   40%   │  $3,200              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL MGT SYNERGY            │   ~60%  │  $18,200             │
└─────────────────────────────────┴─────────┴──────────────────────┘

TOTAL ESTIMATED SYNERGY SAVINGS: ~$45,000
```

### 7.2 Unique Development Required

```
MANPADS-SPECIFIC DEVELOPMENT:
══════════════════════════════════════════════════════════════════════

UNIQUE COMPONENTS:
┌─────────────────────────────────────────────────────────────────────┐
│  • IR seeker physics model (critical!)                             │
│  • Seeker FOV visualization                                        │
│  • Lock tone audio simulation                                      │
│  • Countermeasure (flare) model                                    │
│  • Missile flight dynamics (9M39, 9M342)                          │
│  • Target IR signature database                                    │
│  • Engagement zone calculator                                      │
│  • Super-elevation guidance                                        │
│  • BCU (Battery Coolant Unit) simulation                          │
│  • Gripstock control interface                                     │
│  • MANPADS weapon replica hardware                                 │
│  • Dome/curved screen (sky view requirement)                      │
└─────────────────────────────────────────────────────────────────────┘

ESTIMATED UNIQUE DEVELOPMENT: ~$70,000
```

---

## 8. COST ESTIMATE

### 8.1 R&D Cost (With Platform Synergy)

```
VN-MPADS-001 DEVELOPMENT COST:
══════════════════════════════════════════════════════════════════════

SOFTWARE DEVELOPMENT:
├─ IR seeker physics model: $12,000
├─ Seeker visualization/audio: $8,000
├─ Countermeasure simulation: $6,000
├─ Missile flight dynamics: $8,000
├─ Target IR signature database: $5,000
├─ Engagement zone calculator: $4,000
├─ UAV/Drone target models: $6,000
├─ Night/NVD simulation: $4,000
├─ Section coordination mode: $5,000
├─ Integration with existing: $5,000
└─ Testing/validation: $5,000
                                 ─────────
Subtotal Software:               $68,000

HARDWARE DEVELOPMENT:
├─ MANPADS replica (Igla-S): $10,000
├─ Gripstock interface: $4,000
├─ Seeker audio system: $3,000
├─ Wireless tracking: $3,000
└─ Launch effect (optional): $3,000
                                 ─────────
Subtotal Hardware:               $23,000

SYNERGY SAVINGS:                 -$45,000

CONTINGENCY (15%):               $7,000

TOTAL R&D INVESTMENT:            ~$53,000 (with synergy)
══════════════════════════════════════════════════════════════════════

COMPARISON:
├─ With full synergy (SAMT + MGT first): $53,000
├─ With SAMT synergy only: $72,000
├─ Standalone development: $118,000
└─ SAVINGS: $65,000 (55%)
```

### 8.2 Bill of Materials (Standard Indoor Simulator)

| Category | Component | Qty | Unit Cost | Total |
|----------|-----------|-----|-----------|-------|
| **Computing** | Simulation PC (RTX 4090) | 1 | $4,000 | $4,000 |
| **Display** | Dome projection system | 1 | $25,000 | $25,000 |
| **Display** | Projectors (high-res) | 3 | $4,000 | $12,000 |
| **Weapons** | MANPADS replica (Igla-S) | 2 | $5,000 | $10,000 |
| **Interface** | Gripstock + tracking | 2 | $2,000 | $4,000 |
| **Audio** | 3D positional system | 1 | $3,000 | $3,000 |
| **Audio** | Operator earpiece | 2 | $200 | $400 |
| **Instructor** | IOS workstation | 1 | $2,500 | $2,500 |
| **Software** | License (per system) | 1 | $5,000 | $5,000 |
| **Infrastructure** | Dome frame, acoustics | 1 | $8,000 | $8,000 |
| **Contingency** | 15% | - | - | $11,100 |
| **TOTAL BOM** | - | - | - | **~$85,000** |

### 8.3 Pricing Strategy

| Configuration | BOM Cost | Margin | Unit Price | Note |
|---------------|----------|--------|------------|------|
| **Classroom Basic** | $35,000 | 50% | $70,000 | Entry level |
| **Indoor Standard** | $85,000 | 45% | **$155,000** ⭐ | Main product |
| **AR Outdoor** | $100,000 | 40% | $167,000 | Advanced |
| **Integrated AD** | $150,000 | 35% | $230,000 | Premium |

---

## 9. MARKET SIZE ESTIMATE

```
VIETNAM MARKET SIZE ANALYSIS:
══════════════════════════════════════════════════════════════════════

SEGMENT 1: AIR DEFENSE UNITS (Army)
├─ MANPADS batteries/platoons: 50-80
├─ Target penetration: 40%
├─ Configuration: Indoor Standard
├─ Potential: 20-32 systems
└─ Revenue: $3.1-5.0M

SEGMENT 2: NAVAL FORCES
├─ Naval bases with AD: 8-10
├─ Ship-based MANPADS teams: 20+
├─ Configuration: Indoor Standard or AR
├─ Potential: 5-8 systems
└─ Revenue: $0.8-1.3M

SEGMENT 3: TRAINING CENTERS/ACADEMIES
├─ AD training centers: 5-8
├─ Military academies: 3-5
├─ Configuration: Indoor Standard or Integrated
├─ Potential: 8-13 systems
└─ Revenue: $1.2-2.4M

SEGMENT 4: SPECIAL FORCES / RAPID REACTION
├─ Units with MANPADS capability: 10-15
├─ Target penetration: 30%
├─ Configuration: AR Outdoor (portable)
├─ Potential: 3-5 systems
└─ Revenue: $0.5-0.8M

TOTAL VIETNAM MARKET (10-year):
├─ Systems: 36-58 units
├─ Revenue: $5.6-9.5M
└─ Average per year: $560-950K/year
══════════════════════════════════════════════════════════════════════

EXPORT POTENTIAL:
├─ ASEAN (Laos, Cambodia, Myanmar): 10-20 units
├─ Middle East/Africa (Igla users): 10-30 units
├─ Additional revenue: $3-8M
```

---

## 10. REQUIREMENTS LIST (PRELIMINARY)

### 10.1 Functional Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **F-001** | Simulate Igla/SA-18 | MUST | Full engagement cycle |
| **F-002** | Simulate Igla-S/SA-24 | MUST | Advanced seeker |
| **F-003** | Simulate TL-01 (Vietnamese) | MUST | Indigenous weapon |
| **F-004** | Simulate Strela/SA-7 | WISH | Legacy training |
| **F-005** | IR seeker physics model | MUST | Realistic lock-on |
| **F-006** | Audio lock tone | MUST | Distinctive tones |
| **F-007** | Countermeasure simulation | MUST | Flares, jinking |
| **F-008** | Aircraft targets | MUST | Jets, helos, UAVs |
| **F-009** | Drone/UAV targets | MUST | Multiple types |
| **F-010** | Day/night operation | MUST | NVD simulation |
| **F-011** | Instructor control | MUST | Full management |
| **F-012** | After-Action Review | MUST | 3D playback |
| **F-013** | Multi-trainee mode | WISH | 2+ simultaneous |
| **F-014** | Vietnamese language | MUST | Complete UI |

### 10.2 Performance Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **P-001** | Visual frame rate | MUST | ≥60 FPS |
| **P-002** | Seeker response | MUST | <20 ms latency |
| **P-003** | Audio latency | MUST | <10 ms |
| **P-004** | Tracking accuracy | MUST | ±0.5° |
| **P-005** | MTBF | MUST | >2000 hours |

### 10.3 Cost/Schedule Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **C-001** | Unit cost (Standard) | MUST | <$160,000 |
| **C-002** | R&D investment | MUST | <$60,000 (with synergy) |
| **C-003** | Development time | MUST | <10 months |

---

## 11. CRITICAL QUESTIONS FOR STAKEHOLDER

```
8 CRITICAL QUESTIONS FOR VN-MPADS-001:
══════════════════════════════════════════════════════════════════════

QUESTION 1: WEAPON PRIORITY
┌─────────────────────────────────────────────────────────────────────┐
│  Which MANPADS systems to support FIRST?                            │
│                                                                     │
│  □ A) Igla/SA-18 only (main operational)                           │
│  □ B) Igla + Igla-S (current + advanced)                           │
│  □ C) Igla + Igla-S + TL-01 (include indigenous) ⭐ RECOMMENDED    │
│  □ D) All including SA-7/Strela (full legacy)                      │
│                                                                     │
│  Impact: Development scope, market differentiation                  │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 2: DEVELOPMENT SEQUENCE
┌─────────────────────────────────────────────────────────────────────┐
│  When should MANPADS trainer be developed?                          │
│                                                                     │
│  □ A) After SAMT only (65% synergy)                                │
│  □ B) After SAMT + MGT (55% synergy) ⭐ RECOMMENDED                 │
│  □ C) In parallel with MGT                                         │
│  □ D) Standalone (no synergy)                                       │
│                                                                     │
│  Impact: R&D cost ($53K vs $118K)                                  │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 3: SYSTEM CONFIGURATION
┌─────────────────────────────────────────────────────────────────────┐
│  What configuration should be primary product?                      │
│                                                                     │
│  □ A) Classroom basic ($70K)                                       │
│  □ B) Indoor standard with dome ($155K) ⭐ RECOMMENDED             │
│  □ C) AR outdoor ($167K)                                           │
│  □ D) Integrated AD ($230K)                                        │
│                                                                     │
│  Impact: Unit price, facility requirements                          │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 4: COUNTER-DRONE PRIORITY
┌─────────────────────────────────────────────────────────────────────┐
│  How important is anti-drone training capability?                   │
│                                                                     │
│  □ A) Not priority (traditional aircraft focus)                    │
│  □ B) Included but secondary                                       │
│  □ C) Equal priority with aircraft ⭐ RECOMMENDED                  │
│  □ D) PRIMARY focus (drone threat dominant)                        │
│                                                                     │
│  Impact: Target library, marketing focus                            │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 5: TL-01 INDIGENOUS SUPPORT
┌─────────────────────────────────────────────────────────────────────┐
│  How important is Vietnamese TL-01 MANPADS support?                 │
│                                                                     │
│  □ A) Not important (Igla sufficient)                              │
│  □ B) Desirable (future addition)                                  │
│  □ C) Important (include from start) ⭐ RECOMMENDED                │
│  □ D) Critical (primary focus)                                     │
│                                                                     │
│  Impact: Market differentiation, government support                 │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 6: DISPLAY TECHNOLOGY
┌─────────────────────────────────────────────────────────────────────┐
│  What display technology preferred?                                 │
│                                                                     │
│  □ A) Large flat screen (lowest cost)                              │
│  □ B) Dome projection (immersive) ⭐ RECOMMENDED                   │
│  □ C) VR headset (individual)                                      │
│  □ D) AR overlay (outdoor capable)                                 │
│                                                                     │
│  Impact: Immersion, cost, facility requirements                     │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 7: BUDGET ENVELOPE
┌─────────────────────────────────────────────────────────────────────┐
│  What is the budget constraint?                                     │
│                                                                     │
│  R&D Budget:                                                        │
│  □ A) <$40,000 (minimal features)                                  │
│  □ B) $40,000-60,000 (with synergy) ⭐ RECOMMENDED                 │
│  □ C) $60,000-100,000 (enhanced)                                   │
│                                                                     │
│  Target Unit Price:                                                 │
│  □ A) <$100,000                                                    │
│  □ B) $100,000-180,000 ⭐ RECOMMENDED                              │
│  □ C) $180,000-250,000                                             │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 8: TIMELINE
┌─────────────────────────────────────────────────────────────────────┐
│  When is the first system needed?                                   │
│                                                                     │
│  □ A) 6 months after MGT completion                                │
│  □ B) 9 months after MGT completion ⭐ RECOMMENDED                 │
│  □ C) 12 months after MGT completion                               │
│  □ D) Flexible                                                      │
│                                                                     │
│  Impact: Resource allocation, synergy utilization                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 12. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| IR seeker model complexity | MEDIUM | HIGH | Partner with physics experts |
| TL-01 documentation access | MEDIUM | HIGH | Engage defense industry early |
| Dome display cost | LOW | MEDIUM | Curved screen alternative |
| Competition from Zen AR | MEDIUM | MEDIUM | Focus on Eastern weapons |
| Russian sanctions (Konus) | HIGH | LOW | Creates opportunity for us |
| Counter-drone doctrine unclear | MEDIUM | LOW | Develop with military users |

**Overall Risk Level: MEDIUM** (manageable with proper partnerships)

---

## 13. SUMMARY & RECOMMENDATION

### 13.1 Product Summary

| Aspect | Value |
|--------|-------|
| **Product** | MANPADS Training Simulator |
| **Code** | VN-MPADS-001 |
| **Weapons** | Igla, Igla-S, TL-01, (SA-7 optional) |
| **Market Size** | 36-58 systems ($5.6-9.5M Vietnam) |
| **Export Potential** | 20-50 systems ($3-8M additional) |
| **Unit Price** | $70,000-230,000 |
| **R&D Cost** | ~$53,000 (with full synergy) |
| **Timeline** | 9 months after MGT |
| **Risk Level** | MEDIUM |
| **Priority** | ⭐⭐⭐⭐⭐ HIGHEST |

### 13.2 Strategic Recommendation

```
RECOMMENDATION: DEVELOP VN-MPADS-001 THIRD (After SAMT + MGT)
══════════════════════════════════════════════════════════════════════

RATIONALE:
1. CRITICAL TIMING: Counter-drone demand exploding globally
2. UNIQUE PRODUCT: Only simulator for Vietnamese TL-01
3. HIGH SYNERGY: 55% cost savings with SAMT + MGT first
4. STRATEGIC: Air defense is national priority
5. EXPORT POTENTIAL: Many Igla users worldwide lack simulators
6. TECHNOLOGY BRIDGE: Enables Air Defense Command Trainer

RECOMMENDED SEQUENCE:
┌─────────────────────────────────────────────────────────────────────┐
│  Year 1 Month 1-12:  VN-SAMT-001 (Small Arms)                      │
│  Year 2 Month 1-9:   VN-MGT-001 (Machine Gun)                      │
│  Year 2 Month 6-15:  VN-MPADS-001 (MANPADS) ⭐                     │
│  Year 3+:            Air Defense Command, Artillery FOS            │
└─────────────────────────────────────────────────────────────────────┘

CONFIGURATION: Indoor Standard with Dome @ $155,000
WEAPONS: Igla-S + TL-01 (Vietnamese indigenous)
FEATURES: Full counter-drone capability
UNIQUE VALUE: Only Eastern MANPADS + drone trainer

KEY MESSAGE:
"Train your air defenders against the threats of tomorrow - 
drones, cruise missiles, and modern aircraft - at 1/1000th 
the cost of live fire, with our Vietnamese-made simulator 
supporting your indigenous TL-01 MANPADS."
```

---

## 14. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-23 | Claude AI | Initial Phase 1 document |

---

**END OF DOCUMENT**

*This document follows Pahl & Beitz systematic design methodology for Phase 1: Task Clarification. Proceed to Phase 2: Conceptual Design after stakeholder input on critical questions.*
