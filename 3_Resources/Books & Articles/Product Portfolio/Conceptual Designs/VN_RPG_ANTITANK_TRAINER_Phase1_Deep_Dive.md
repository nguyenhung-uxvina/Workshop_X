# VN-RPG-001: RPG/ANTI-TANK TRAINING SIMULATOR
## Phase 1: Task Clarification - Deep Dive Analysis

**Document Version:** 1.0  
**Date:** December 24, 2025  
**Product Code:** VN-RPG-001  
**Classification:** INTERNAL USE  

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Definition

**RPG/Anti-Tank Trainer** là hệ thống huấn luyện mô phỏng vũ khí chống tăng cá nhân, cho phép xạ thủ luyện tập kỹ năng ngắm bắn, ước lượng khoảng cách, tính toán đạn đạo và tiêu diệt mục tiêu bọc thép mà không cần sử dụng đạn thật.

### 1.2 Strategic Importance

```
WHY RPG TRAINER IS CRITICAL:
══════════════════════════════════════════════════════════════════════

🎯 THE INFANTRY ANTI-TANK BACKBONE:
┌─────────────────────────────────────────────────────────────────────┐
│  RPG-7: "AK-47 OF ANTI-TANK WEAPONS"                               │
│                                                                     │
│  GLOBAL REACH:                                                      │
│  ├─ 9+ MILLION units produced since 1961                           │
│  ├─ 40+ countries use RPG-7                                        │
│  ├─ Manufactured in 12+ countries                                  │
│  ├─ Every infantry squad has RPG capability                        │
│  └─ Standard squad-level anti-armor weapon                         │
│                                                                     │
│  VIETNAM CONTEXT:                                                   │
│  ├─ RPG-7 iconic weapon of Vietnam War                             │
│  ├─ Vietnamese local production established                        │
│  ├─ B41 (Vietnamese designation) in every unit                     │
│  ├─ Multiple warhead types in inventory                            │
│  └─ Training demand: EVERY infantry soldier                        │
└─────────────────────────────────────────────────────────────────────┘

📊 MARKET SIZE COMPARISON:
┌─────────────────────────────────────────────────────────────────────┐
│  Product          │ Users per Unit │ Total Potential Users         │
│  ─────────────────┼────────────────┼─────────────────────────────── │
│  Small Arms       │ All soldiers   │ 400,000+                       │
│  RPG/Anti-Tank    │ 1 per squad    │ 50,000+ (every squad!)        │
│  Machine Gun      │ 1-2 per platoon│ 15,000+                        │
│  MANPADS          │ Specialists    │ 5,000+                         │
│  Naval Gunnery    │ Navy only      │ 3,000+                         │
└─────────────────────────────────────────────────────────────────────┘

⭐ HIGHEST VOLUME after rifles - EVERY infantry squad needs this!
```

### 1.3 Weapon Systems Covered

```
VN-RPG-001 WEAPON COVERAGE:
══════════════════════════════════════════════════════════════════════

TIER 1 - PRIMARY SYSTEMS (Vietnamese Standard):
┌─────────────────────────────────────────────────────────────────────┐
│  RPG-7V / B41 (VIETNAMESE DESIGNATION) 🇻🇳                         │
│  ├─ Type: Reusable, shoulder-launched                              │
│  ├─ Caliber: 40mm launcher / 70-105mm warheads                     │
│  ├─ Weight: 7 kg (launcher) + 2-4.5 kg (grenade)                   │
│  ├─ Length: 950mm                                                   │
│  ├─ Effective Range: 200-500m                                       │
│  ├─ Max Range: 920m (self-destruct)                                │
│  ├─ Muzzle Velocity: 115 m/s initial, 295 m/s rocket               │
│  ├─ Sight: PGO-7 optical (2.7x) + iron sights                      │
│  ├─ Status: MAIN Vietnamese AT weapon                              │
│  └─ Priority: ⭐⭐⭐⭐⭐ HIGHEST                                     │
├─────────────────────────────────────────────────────────────────────┤
│  RPG-7V2 (Upgraded)                                                 │
│  ├─ UP-7V universal sight                                          │
│  ├─ Extended range ammunition                                       │
│  ├─ All warhead types compatible                                   │
│  └─ Priority: ⭐⭐⭐⭐⭐                                             │
└─────────────────────────────────────────────────────────────────────┘

TIER 2 - SINGLE-USE SYSTEMS:
┌─────────────────────────────────────────────────────────────────────┐
│  RPG-18 "Mukha" / RPG-22 "Netto"                                   │
│  ├─ Type: Disposable, single-shot                                  │
│  ├─ Similar to M72 LAW concept                                     │
│  ├─ Weight: 2.6-3.5 kg                                             │
│  ├─ Range: 200m effective                                          │
│  └─ Priority: ⭐⭐⭐                                                 │
├─────────────────────────────────────────────────────────────────────┤
│  RPG-26 "Aglen" / RPG-27 "Tavolga"                                 │
│  ├─ Type: Improved disposable                                      │
│  ├─ Tandem warhead (RPG-27)                                        │
│  ├─ Better accuracy                                                │
│  └─ Priority: ⭐⭐⭐                                                 │
└─────────────────────────────────────────────────────────────────────┘

TIER 3 - ADVANCED SYSTEMS:
┌─────────────────────────────────────────────────────────────────────┐
│  RPG-29 "Vampir"                                                    │
│  ├─ Type: Reusable, heavy AT                                       │
│  ├─ Caliber: 105mm tandem HEAT                                     │
│  ├─ Penetration: 750mm + ERA                                       │
│  ├─ Weight: 11.5 kg                                                │
│  ├─ Range: 500m                                                     │
│  ├─ Status: Premium AT capability                                  │
│  └─ Priority: ⭐⭐⭐⭐                                               │
├─────────────────────────────────────────────────────────────────────┤
│  RPG-32 "Hashim" (if acquired)                                     │
│  ├─ Type: Multi-caliber, advanced                                  │
│  ├─ 72mm and 105mm grenades                                        │
│  └─ Priority: ⭐⭐⭐ (future)                                        │
└─────────────────────────────────────────────────────────────────────┘

TIER 4 - WESTERN REFERENCE (Export/Interoperability):
┌─────────────────────────────────────────────────────────────────────┐
│  M72 LAW (USA)                                                      │
│  ├─ Type: Disposable                                               │
│  ├─ 66mm HEAT                                                       │
│  └─ Priority: ⭐⭐ (reference)                                       │
├─────────────────────────────────────────────────────────────────────┤
│  AT4 / Carl Gustaf (Sweden)                                         │
│  ├─ Type: Recoilless                                               │
│  ├─ 84mm multi-purpose                                             │
│  └─ Priority: ⭐⭐⭐ (export market)                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.4 RPG-7 Warhead Types

```
RPG-7 AMMUNITION FAMILY:
══════════════════════════════════════════════════════════════════════

PG-7V (Original HEAT) - 1961
┌─────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  [Warhead 85mm]═══════[Rocket Motor]═══[Fins]              │    │
│  └────────────────────────────────────────────────────────────┘    │
│  • Penetration: 260mm RHA                                          │
│  • Weight: 2.2 kg                                                   │
│  • Range: 500m                                                      │
│  • Note: Vietnam War era, still in inventory                       │
└─────────────────────────────────────────────────────────────────────┘

PG-7VM (Improved HEAT) - 1969
┌─────────────────────────────────────────────────────────────────────┐
│  • Penetration: 300mm RHA                                          │
│  • Improved accuracy (+20-25%)                                      │
│  • Reduced wind sensitivity                                         │
│  • Weight: 2.0 kg (Light class)                                    │
└─────────────────────────────────────────────────────────────────────┘

PG-7VL (Enhanced HEAT) - 1977
┌─────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  [Warhead 93mm]═══════════[Rocket Motor]═══[Fins]          │    │
│  └────────────────────────────────────────────────────────────┘    │
│  • Penetration: 500mm RHA                                          │
│  • Effective vs composite armor                                     │
│  • Weight: 2.6 kg (Medium class)                                   │
│  • Range: 500m                                                      │
│  • MAIN TRAINING ROUND                                             │
└─────────────────────────────────────────────────────────────────────┘

PG-7VR (Tandem HEAT) - 1988 ⭐ CRITICAL
┌─────────────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  [Precursor][Main Warhead 105mm]═══[Rocket]═══[Fins]       │    │
│  └────────────────────────────────────────────────────────────┘    │
│  • Penetration: 750mm RHA (behind ERA)                             │
│  • Defeats Explosive Reactive Armor (ERA)                          │
│  • Weight: 4.5 kg (Heavy class)                                    │
│  • Range: 200m (reduced due to weight)                             │
│  • Used against M1 Abrams, Merkava, modern MBTs                    │
│  • ESSENTIAL for modern armor threats                              │
└─────────────────────────────────────────────────────────────────────┘

OG-7V (Fragmentation) - 1999
┌─────────────────────────────────────────────────────────────────────┐
│  • Anti-personnel fragmentation                                     │
│  • 1000+ fragments                                                  │
│  • Kill radius: 7m                                                  │
│  • Weight: 2.0 kg                                                   │
│  • Range: 700m+                                                     │
│  • Used vs infantry, soft targets                                  │
└─────────────────────────────────────────────────────────────────────┘

TBG-7V (Thermobaric) - 1988
┌─────────────────────────────────────────────────────────────────────┐
│  • Fuel-Air Explosive (FAE)                                        │
│  • Devastating in enclosed spaces                                   │
│  • Urban warfare, bunkers, caves                                   │
│  • Weight: 4.5 kg                                                   │
│  • Range: 200m                                                      │
│  • CRITICAL for urban operations                                   │
└─────────────────────────────────────────────────────────────────────┘

WARHEAD SELECTION TRAINING:
┌─────────────────────────────────────────────────────────────────────┐
│  Target Type          │ Recommended Warhead                        │
│  ─────────────────────┼───────────────────────────────────────────  │
│  Light armor (APC)    │ PG-7VL                                     │
│  MBT without ERA      │ PG-7VL                                     │
│  MBT with ERA         │ PG-7VR (tandem)                            │
│  Infantry in open     │ OG-7V (frag)                               │
│  Bunker/building      │ TBG-7V (thermobaric)                       │
│  Helicopter (hover)   │ PG-7VL or OG-7V                            │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.5 Market Opportunity Summary

| Metric | Value | Notes |
|--------|-------|-------|
| **Primary Market** | Vietnamese Infantry Forces | Army, Marines, Border |
| **Secondary Market** | Regional export | ASEAN, Africa |
| **Market Size** | 40-70 systems | Vietnam domestic |
| **Unit Price Range** | $35,000-100,000 | Depending on config |
| **Total Revenue** | $2-5M USD | 10-year projection |
| **Competition** | Skiftech (Ukraine), Zen (India) | Limited options |
| **Unique Advantage** | B41/Vietnamese focus | Local production |

---

## 2. TRAINING REQUIREMENTS ANALYSIS

### 2.1 RPG Training Challenges

```
PROBLEM ANALYSIS:
══════════════════════════════════════════════════════════════════════

PROBLEM 1: AMMUNITION COST
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ PG-7VL round: $300-500 each                                    │
│  ├─ PG-7VR tandem: $800-1,200 each                                 │
│  ├─ TBG-7V thermobaric: $600-900 each                              │
│  ├─ Live fire training: 3-5 rounds per session                     │
│  ├─ Annual cost per soldier: $1,500-3,000                          │
│  └─ Limited budget = LIMITED PROFICIENCY                           │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited virtual shots: $0 per shot                           │
│  ├─ 500:1 cost savings ratio                                       │
│  ├─ Practice all warhead types without expense                     │
│  └─ Live fire for confidence building only                         │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 2: RANGE REQUIREMENTS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Need 1+ km range (920m max + safety)                           │
│  ├─ BACKBLAST danger zone: 20+ meters rear                         │
│  ├─ Limited suitable ranges in Vietnam                             │
│  ├─ Moving target training nearly impossible                       │
│  └─ Weather/visibility constraints                                  │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Train indoors, any location                                    │
│  ├─ No backblast hazard                                            │
│  ├─ Moving targets: tanks, APCs, helicopters                       │
│  ├─ Any weather, day/night                                         │
│  └─ Urban scenario training possible                               │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 3: RANGE ESTIMATION SKILLS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ RPG accuracy HIGHLY dependent on range estimation              │
│  ├─ PGO-7 sight requires proper ranging                            │
│  ├─ Hit probability drops to 50% at 200m with errors               │
│  ├─ Moving targets require lead calculation                        │
│  └─ Crosswind compensation critical                                 │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Practice range estimation repeatedly                           │
│  ├─ Sight picture training                                         │
│  ├─ Lead calculation for moving targets                            │
│  ├─ Wind compensation training                                      │
│  └─ Immediate feedback on errors                                    │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 4: WARHEAD SELECTION TRAINING
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Multiple warhead types available                               │
│  ├─ Different ballistics per warhead weight                        │
│  ├─ Wrong warhead = mission failure                                │
│  ├─ Tandem (PG-7VR) essential vs ERA                               │
│  └─ Cannot practice all types live                                  │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Train with ALL warhead types                                   │
│  ├─ Understand ballistic differences                               │
│  ├─ Practice target-warhead matching                               │
│  └─ See armor penetration effects                                   │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 5: ANTI-ARMOR TACTICS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Tank weak points training limited                              │
│  ├─ Side/rear attack doctrine                                      │
│  ├─ Reactive armor countermeasures                                 │
│  ├─ Urban ambush positioning                                        │
│  └─ Team coordination (loader + gunner)                            │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Show armor weak points visually                                │
│  ├─ Practice optimal engagement angles                             │
│  ├─ Urban terrain scenarios                                        │
│  ├─ ERA defeat techniques                                          │
│  └─ Team coordination training                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 RPG Gunner Skill Hierarchy

```
RPG GUNNER SKILL PROGRESSION:
══════════════════════════════════════════════════════════════════════

LEVEL 1: BASIC OPERATOR (2-4 weeks)
├─ Weapon nomenclature
├─ Safety procedures (backblast!)
├─ Loading procedures
├─ Firing position (kneeling, standing, prone)
├─ Cocking and trigger
├─ Misfire procedures
└─ Simulator Role: Foundation training

LEVEL 2: MARKSMANSHIP (4-8 weeks)
├─ PGO-7 optical sight operation
├─ Range estimation using sight reticle
├─ Aiming at stationary targets
├─ Trigger control
├─ Follow-through
├─ Hit zone understanding
└─ Simulator Role: Core skill building

LEVEL 3: ADVANCED GUNNERY (8-12 weeks)
├─ Moving target engagement
├─ Lead calculation
├─ Wind compensation
├─ Multiple warhead types
├─ Light/Medium/Heavy ballistics
├─ Range adjustment for warhead weight
└─ Simulator Role: Advanced scenarios

LEVEL 4: ANTI-ARMOR SPECIALIST (12-20 weeks)
├─ Tank identification
├─ Weak point targeting
├─ ERA recognition and defeat
├─ Urban engagement techniques
├─ Helicopter engagement
├─ Night operations
└─ Simulator Role: Tactical training

LEVEL 5: TEAM LEADER (20+ weeks)
├─ Loader coordination
├─ Multiple RPG team tactics
├─ Ambush planning
├─ Target prioritization
├─ Fire and maneuver
└─ Simulator Role: Leadership training
```

---

## 3. PRODUCT ARCHITECTURE

### 3.1 System Configurations

```
VN-RPG-001 CONFIGURATION OPTIONS:
══════════════════════════════════════════════════════════════════════

OPTION A: BASIC MARKSMANSHIP TRAINER
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $35,000-50,000                                              │
│  Fidelity: MEDIUM                                                   │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 1x RPG-7 replica (weighted, functional sight)                  │
│  ├─ Large screen display (75"+)                                    │
│  ├─ Laser insert for aiming                                        │
│  ├─ Basic ballistic simulation                                     │
│  ├─ Instructor laptop                                              │
│  └─ Simple AAR                                                     │
│                                                                     │
│  Features:                                                          │
│  ├─ Static target engagement                                       │
│  ├─ Range estimation training                                      │
│  ├─ Sight picture practice                                         │
│  ├─ Basic scoring                                                   │
│  └─ 1 trainee at a time                                            │
│                                                                     │
│  Best For: Initial training, small units                           │
└─────────────────────────────────────────────────────────────────────┘

OPTION B: INDOOR GUNNERY SIMULATOR (Standard) ⭐ RECOMMENDED
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $60,000-85,000                                              │
│  Fidelity: HIGH                                                     │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 2x RPG-7 replicas (full weight, functional)                    │
│  ├─ Wide-screen projection (120"+ curved)                          │
│  ├─ High-fidelity ballistics                                       │
│  ├─ All warhead types simulated                                    │
│  ├─ Moving target capability                                       │
│  ├─ Launch effect (pneumatic bump, flash)                          │
│  ├─ Full instructor station                                        │
│  └─ Comprehensive AAR with 3D playback                             │
│                                                                     │
│  Features:                                                          │
│  ├─ Static and moving targets                                      │
│  ├─ All warhead ballistics                                         │
│  ├─ Armor penetration visualization                                │
│  ├─ Day/night scenarios                                            │
│  ├─ Weather effects                                                │
│  ├─ 2 trainees simultaneous                                        │
│  └─ Performance tracking                                            │
│                                                                     │
│  Best For: Training centers, infantry battalions                   │
└─────────────────────────────────────────────────────────────────────┘

OPTION C: TACTICAL ENGAGEMENT SIMULATOR (Advanced)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $85,000-120,000                                             │
│  Fidelity: VERY HIGH                                                │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 4x RPG replicas (RPG-7, RPG-18/22, RPG-29)                     │
│  ├─ Multi-screen or dome projection                                │
│  ├─ 3D terrain with urban environments                             │
│  ├─ Realistic vehicle models (T-72, M1, Leopard)                   │
│  ├─ ERA visualization                                              │
│  ├─ Team coordination (gunner + loader)                            │
│  ├─ Networked for multi-team training                              │
│  └─ Integration with other simulators                              │
│                                                                     │
│  Features:                                                          │
│  ├─ Full tactical scenarios                                        │
│  ├─ Urban combat training                                          │
│  ├─ Ambush planning and execution                                  │
│  ├─ Fire and maneuver                                              │
│  ├─ Combined arms scenarios                                        │
│  └─ After-action debrief facility                                  │
│                                                                     │
│  Best For: Regional training centers, special forces               │
└─────────────────────────────────────────────────────────────────────┘

OPTION D: LASER-BASED FIELD TRAINER
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $40,000-60,000                                              │
│  Fidelity: HIGH (Outdoor)                                           │
│                                                                     │
│  Configuration:                                                     │
│  ├─ Modified real RPG-7 with laser                                 │
│  ├─ Laser detector on target vehicles                              │
│  ├─ Radio coverage system                                          │
│  ├─ Tablet-based instructor station                                │
│  └─ Real-time hit detection                                        │
│                                                                     │
│  Features:                                                          │
│  ├─ Outdoor field training                                         │
│  ├─ Real weapon handling                                           │
│  ├─ Actual terrain and conditions                                  │
│  ├─ Force-on-force integration                                     │
│  └─ Tactical exercises                                              │
│                                                                     │
│  Best For: Field exercises, force-on-force                         │
│  Note: Similar to Skiftech (Ukraine) approach                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Technical Architecture

```
VN-RPG-001 SYSTEM ARCHITECTURE:
══════════════════════════════════════════════════════════════════════

                     RPG-7 REPLICA WEAPON
     ┌────────────────────────────────────────────────────┐
     │                                                    │
     │  ┌──────────────────────────────────────────────┐ │
     │  │        LAUNCH TUBE (Realistic weight)        │ │
     │  │  ┌─────────────────────────────────────────┐ │ │
     │  │  │ [Front sight]        [Rear venturi]     │ │ │
     │  │  │      ║                    ║             │ │ │
     │  │  │ ═════╬════════════════════╬═════        │ │ │
     │  │  │      ║   (Wood grip)      ║             │ │ │
     │  │  └─────────────────────────────────────────┘ │ │
     │  └──────────────────────────────────────────────┘ │
     │               │                                   │
     │  ┌────────────┴────────────┐                     │
     │  │    PGO-7 OPTICAL SIGHT  │                     │
     │  │  ┌────────────────────┐ │                     │
     │  │  │ [Ranging reticle]  │ │                     │
     │  │  │  2.7x magnification│ │                     │
     │  │  │ [Stadia lines]     │ │                     │
     │  │  └────────────────────┘ │                     │
     │  └─────────────────────────┘                     │
     │               │                                   │
     │  ┌────────────┴────────────┐                     │
     │  │    FIRING MECHANISM     │                     │
     │  │  • Hammer (functional)  │                     │
     │  │  • Trigger + sensor     │                     │
     │  │  • Safety               │                     │
     │  │  • Wireless data link   │                     │
     │  └─────────────────────────┘                     │
     │                                                   │
     │  ┌──────────────────────────────────────────────┐│
     │  │    TRAINING GRENADE (Dummy)                  ││
     │  │  ┌────────────────────────────────────────┐  ││
     │  │  │[Warhead]═══[Motor]═══[Folding Fins]    │  ││
     │  │  └────────────────────────────────────────┘  ││
     │  │  • Correct weight per type (2.0-4.5 kg)     ││
     │  │  • RFID chip identifies warhead type        ││
     │  │  • Loading sequence sensor                  ││
     │  └──────────────────────────────────────────────┘│
     └────────────────────────────────────────────────────┘
                            │
                      [Wireless Link]
                            │
     ┌──────────────────────┴──────────────────────┐
     │            SIMULATION COMPUTER              │
     │  ┌────────────────────────────────────────┐ │
     │  │  BALLISTICS ENGINE:                    │ │
     │  │  • Rocket trajectory model             │ │
     │  │  • Boost + sustainer phases            │ │
     │  │  • Gravity drop calculation            │ │
     │  │  • Wind drift (weathervane effect)     │ │
     │  │  • Warhead-specific ballistics         │ │
     │  │  • Impact angle calculation            │ │
     │  │  • Armor penetration model             │ │
     │  │  • ERA interaction                     │ │
     │  └────────────────────────────────────────┘ │
     └──────────────────────┬──────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
  ┌───────────┐      ┌───────────┐      ┌───────────┐
  │ PROJECTION│      │   AUDIO   │      │ INSTRUCTOR│
  │  SCREEN   │      │  SYSTEM   │      │  STATION  │
  │           │      │           │      │           │
  │ Terrain   │      │ Launch    │      │ Control   │
  │ Vehicles  │      │ Rocket    │      │ Scenarios │
  │ Effects   │      │ Impact    │      │ AAR       │
  │ Damage    │      │ Backblast │      │ Reports   │
  └───────────┘      └───────────┘      └───────────┘
```

### 3.3 Ballistics Model Requirements

```
RPG-7 BALLISTICS SIMULATION:
══════════════════════════════════════════════════════════════════════

FLIGHT PHASES:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  PHASE 1: LAUNCH (0-11m)                                           │
│  ├─ Booster charge ejects grenade                                  │
│  ├─ Initial velocity: 115 m/s                                      │
│  ├─ Backblast generated (danger zone)                              │
│  └─ Flash and smoke signature                                       │
│                                                                     │
│  PHASE 2: ROCKET IGNITION (11m+)                                   │
│  ├─ Sustainer motor ignites                                        │
│  ├─ Acceleration to 295 m/s                                        │
│  ├─ Fins deploy and induce spin                                    │
│  └─ Visible smoke trail                                            │
│                                                                     │
│  PHASE 3: SUSTAINER BURN (to ~500m)                                │
│  ├─ Maximum velocity maintained                                    │
│  ├─ Spin stabilization                                             │
│  ├─ Weathervane effect in crosswind                                │
│  └─ Trajectory curves INTO wind                                    │
│                                                                     │
│  PHASE 4: COAST (500m-920m)                                        │
│  ├─ Motor burnout                                                  │
│  ├─ Velocity decay                                                 │
│  ├─ Increased drop                                                 │
│  └─ Self-destruct at ~920m / 4.5 seconds                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

WARHEAD BALLISTICS COMPARISON:
┌─────────────────────────────────────────────────────────────────────┐
│  Warhead    │ Weight │ Class  │ Max Eff Range │ Drop at 200m      │
│  ───────────┼────────┼────────┼───────────────┼───────────────────│
│  PG-7V      │ 2.2 kg │ Light  │ 500m          │ Low               │
│  PG-7VM     │ 2.0 kg │ Light  │ 500m          │ Low               │
│  PG-7VL     │ 2.6 kg │ Medium │ 500m          │ Medium            │
│  PG-7VR    │ 4.5 kg │ Heavy  │ 200m          │ High              │
│  OG-7V      │ 2.0 kg │ Light  │ 700m          │ Low               │
│  TBG-7V     │ 4.5 kg │ Heavy  │ 200m          │ High              │
└─────────────────────────────────────────────────────────────────────┘

CROSSWIND MODEL:
┌─────────────────────────────────────────────────────────────────────┐
│  Wind Speed  │ Effect at 200m                                      │
│  ────────────┼─────────────────────────────────────────────────────│
│  0-7 km/h    │ Negligible                                          │
│  7-15 km/h   │ Noticeable drift, aim correction needed            │
│  15-25 km/h  │ Significant drift, first-round hit <50% at 180m   │
│  25+ km/h    │ Difficult engagement, consider not firing          │
│                                                                     │
│  Note: RPG "weathervanes" - curves INTO the wind                   │
│  This is COUNTER-INTUITIVE and must be trained!                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. TARGET VEHICLE LIBRARY

### 4.1 Armor Targets

```
TARGET VEHICLE DATABASE:
══════════════════════════════════════════════════════════════════════

MAIN BATTLE TANKS:
┌─────────────────────────────────────────────────────────────────────┐
│  T-72 (Various)                                                     │
│  ├─ Frontal armor: 500-600mm RHAe                                  │
│  ├─ Side armor: 80mm + ERA                                         │
│  ├─ Rear armor: 40mm                                               │
│  ├─ Weak points: Driver periscopes, tracks, rear deck              │
│  └─ Recommended: PG-7VR (tandem) for frontal, PG-7VL for side     │
├─────────────────────────────────────────────────────────────────────┤
│  T-55/T-54 (Legacy)                                                 │
│  ├─ Frontal armor: 200mm                                           │
│  ├─ Side armor: 80mm                                               │
│  ├─ All aspects vulnerable to PG-7VL                               │
│  └─ Training reference for basic skills                            │
├─────────────────────────────────────────────────────────────────────┤
│  M1 Abrams (Reference)                                              │
│  ├─ Frontal armor: 1000mm+ RHAe (composite)                        │
│  ├─ Side armor: 300mm+                                             │
│  ├─ Rear: 50mm                                                     │
│  ├─ Weak points: Rear deck, tracks, turret ring                    │
│  └─ Recommended: PG-7VR from side/rear only                        │
├─────────────────────────────────────────────────────────────────────┤
│  Leopard 2 (Reference)                                              │
│  ├─ Similar to M1 Abrams                                           │
│  ├─ Frontal engagement NOT recommended                             │
│  └─ Side/rear attacks with PG-7VR                                  │
└─────────────────────────────────────────────────────────────────────┘

ARMORED PERSONNEL CARRIERS:
┌─────────────────────────────────────────────────────────────────────┐
│  BTR-80/82 (8x8 wheeled)                                           │
│  ├─ Armor: 10mm (14.5mm resistant)                                 │
│  ├─ ALL aspects vulnerable to ALL RPG warheads                     │
│  └─ Easy target, good for training basics                          │
├─────────────────────────────────────────────────────────────────────┤
│  BMP-2/3 (Tracked IFV)                                              │
│  ├─ Armor: 33mm front, 18mm sides                                  │
│  ├─ Vulnerable to PG-7VL from all angles                          │
│  └─ Moving target training                                          │
├─────────────────────────────────────────────────────────────────────┤
│  M113 (Legacy APC)                                                  │
│  ├─ Armor: 38mm aluminum                                           │
│  ├─ Easy kill, all warheads effective                              │
│  └─ Vietnam War reference                                           │
├─────────────────────────────────────────────────────────────────────┤
│  Stryker / LAV (8x8)                                                │
│  ├─ Armor: 14.5mm resistant + slat armor                          │
│  ├─ Slat armor may pre-detonate warhead                           │
│  └─ Training for anti-RPG countermeasures                          │
└─────────────────────────────────────────────────────────────────────┘

SOFT TARGETS:
┌─────────────────────────────────────────────────────────────────────┐
│  Trucks / Technicals                                                │
│  ├─ No armor protection                                            │
│  ├─ OG-7V (fragmentation) recommended                              │
│  └─ Conserve HEAT rounds                                            │
├─────────────────────────────────────────────────────────────────────┤
│  Bunkers / Buildings                                                │
│  ├─ TBG-7V (thermobaric) for enclosed                             │
│  ├─ PG-7VL for wall breach                                         │
│  └─ Urban warfare training                                          │
├─────────────────────────────────────────────────────────────────────┤
│  Helicopters (Stationary/Hovering)                                  │
│  ├─ Vulnerable to all warheads                                     │
│  ├─ OG-7V effective (fragmentation)                                │
│  ├─ Lead calculation required                                      │
│  └─ High-value target training                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 5. SOFTWARE REQUIREMENTS

### 5.1 Training Modes

```
VN-RPG-001 SOFTWARE TRAINING MODES:
══════════════════════════════════════════════════════════════════════

MODE 1: BASIC PROCEDURES
├─ Weapon assembly/disassembly
├─ Loading sequence
├─ Safety checks
├─ Firing positions
├─ Backblast awareness
└─ Misfire drill

MODE 2: SIGHT TRAINING
├─ PGO-7 reticle familiarization
├─ Range estimation using stadia
├─ Aiming point selection
├─ Sight picture consistency
└─ Iron sight backup

MODE 3: STATIC TARGET ENGAGEMENT
├─ Stationary armored targets
├─ Various ranges (50-500m)
├─ All warhead types
├─ Accuracy scoring
└─ Hit zone analysis

MODE 4: MOVING TARGET ENGAGEMENT
├─ Crossing targets (4 m/s standard)
├─ Approaching/receding
├─ Lead calculation practice
├─ Variable speeds
└─ Different vehicle types

MODE 5: ENVIRONMENTAL CHALLENGES
├─ Crosswind effects (7-25 km/h)
├─ Day/night conditions
├─ Rain/dust/smoke
├─ Urban terrain
└─ Jungle/forest

MODE 6: WARHEAD SELECTION
├─ Target identification
├─ Armor assessment
├─ Warhead matching
├─ ERA recognition
└─ Optimal engagement

MODE 7: TACTICAL SCENARIOS
├─ Convoy ambush
├─ Defensive position
├─ Urban combat
├─ Helicopter engagement
├─ Fire and maneuver
└─ Multiple targets

MODE 8: TEAM TRAINING
├─ Gunner + loader coordination
├─ Multiple RPG teams
├─ Target handoff
├─ Fire discipline
└─ Rapid reload drill
```

### 5.2 After-Action Review

```
AAR CAPABILITIES:
══════════════════════════════════════════════════════════════════════

3D PLAYBACK:
├─ Trajectory visualization
├─ Impact point analysis
├─ Armor penetration simulation
├─ Multiple camera angles
└─ Slow-motion replay

ENGAGEMENT ANALYSIS:
├─ Range estimation accuracy
├─ Aim point selection
├─ Lead calculation error
├─ Wind compensation
├─ Warhead selection decision
└─ Hit/miss determination

SCORING METRICS:
├─ First-round hit probability
├─ Kill probability (Pk)
├─ Time to engage
├─ Warhead efficiency
├─ Overall proficiency score
└─ Trend analysis over sessions

ARMOR EFFECTS:
├─ Impact angle
├─ Penetration depth
├─ ERA interaction (tandem)
├─ Damage assessment
└─ Why hit/miss/partial

REPORTING:
├─ Individual records
├─ Unit statistics
├─ Qualification tracking
├─ Export (PDF, Excel)
└─ Vietnamese language
```

---

## 6. COMPETITOR ANALYSIS

### 6.1 Primary Competitors

```
COMPETITOR ANALYSIS:
══════════════════════════════════════════════════════════════════════

COMPETITOR 1: SKIFTECH (Ukraine)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: RPG-7 Laser Tactical Simulator                           │
│  Status: Active production, combat-proven                          │
│                                                                     │
│  Features:                                                          │
│  ├─ Real RPG-7 launcher with laser attachment                      │
│  ├─ Outdoor field training                                         │
│  ├─ Laser detectors on target vehicles                             │
│  ├─ Tablet-based instructor station                                │
│  ├─ Integration with TacSim system                                 │
│  └─ Used by Ukrainian Armed Forces                                 │
│                                                                     │
│  Estimated Price: $30,000-50,000                                   │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Real weapon handling                                           │
│  ├─ Field deployable                                               │
│  ├─ Force-on-force integration                                     │
│  ├─ Combat-proven concept                                          │
│  └─ Realistic outdoor training                                     │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Requires outdoor range                                         │
│  ├─ Limited ballistic simulation                                   │
│  ├─ No warhead selection training                                  │
│  ├─ Cannot show penetration effects                                │
│  └─ Weather dependent                                              │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 2: ZEN TECHNOLOGIES (India)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: ATGM Simulator (not exactly RPG)                         │
│  Status: 300+ delivered to Indian Army                             │
│                                                                     │
│  Features:                                                          │
│  ├─ Indoor simulator for guided missiles                           │
│  ├─ Konkurs, Milan-2T, Javelin simulation                          │
│  ├─ Target detection/acquisition training                          │
│  ├─ Integrates with BMP-II simulator                              │
│  └─ Comprehensive AAR                                              │
│                                                                     │
│  Estimated Price: $80,000-150,000                                  │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Proven company                                                 │
│  ├─ Indian Army validated                                          │
│  ├─ Good instructor station                                        │
│  └─ Integration with vehicle sims                                  │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Focuses on GUIDED missiles (ATGM)                             │
│  ├─ NOT unguided RPG-7                                            │
│  ├─ Different skill set                                            │
│  └─ Higher price point                                             │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 3: SIS (Pakistan)
┌─────────────────────────────────────────────────────────────────────┐
│  Product: RPG-7 Simulator                                           │
│  Status: Limited information available                              │
│                                                                     │
│  Features:                                                          │
│  ├─ Tactical representation of RPG-7                               │
│  ├─ True-to-life handling                                          │
│  └─ Basic gunnery training                                         │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Limited market presence                                        │
│  ├─ Minimal technical data                                         │
│  └─ Unknown capabilities                                            │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 4: ARSENAL JSCo (Bulgaria) - PUS-7
┌─────────────────────────────────────────────────────────────────────┐
│  Product: PUS-7 Training Device                                     │
│  Status: Production                                                 │
│                                                                     │
│  Features:                                                          │
│  ├─ Training device for RPG-7V                                     │
│  ├─ Firing at 300m and 400m                                        │
│  ├─ Mobile and fixed targets                                       │
│  └─ Realistic training                                             │
│                                                                     │
│  Note: This is SUB-CALIBER trainer (live fire)                     │
│  Not electronic simulation                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### 6.2 Market Gap Analysis

```
MARKET POSITIONING:
══════════════════════════════════════════════════════════════════════

                    HIGH FIDELITY
                         ▲
                         │
                         │      Zen ATGM
                         │         ●
              PRICE      │           (guided missiles)
                         │
                         │   ┌─────────────────────┐
                         │   │ ⭐ VN-RPG-001       │
                         │   │    OPPORTUNITY     │
                         │   │                     │
                         │   │ • Indoor + Field   │
                         │   │ • All warheads     │
                         │   │ • Vietnamese B41   │
                         │   │ • $50-85K range    │
                         │   └─────────────────────┘
                         │
            Skiftech     │
               ●         │
         (field laser)   │
                         │
                    LOW FIDELITY
                         └────────────────────────────────────────►
                              INDOOR              OUTDOOR
                              ONLY                CAPABLE

KEY MARKET GAPS:
├─ NO high-fidelity indoor RPG simulator for Eastern weapons
├─ No warhead selection/ballistics training available
├─ No armor penetration visualization
├─ Vietnamese B41 specific training not offered
├─ Combined indoor + outdoor capability rare
└─ Affordable option ($50-85K) missing
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
│ Simulation engine (Unity)       │   70%   │  $10,500             │
│ Instructor station framework    │   75%   │  $6,000              │
│ After-Action Review system      │   80%   │  $6,400              │
│ Database/reporting              │   85%   │  $2,550              │
│ Vietnamese localization         │   90%   │  $2,700              │
│ Laser tracking concepts         │   50%   │  $2,000              │
│ Audio framework                 │   60%   │  $1,200              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL SAMT SYNERGY           │   ~70%  │  $31,350             │
└─────────────────────────────────┴─────────┴──────────────────────┘

FROM VN-MGT-001 (Machine Gun):
┌─────────────────────────────────────────────────────────────────────┐
│  Component                      │ Reuse % │ Savings              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ Moving target system            │   70%   │  $5,600              │
│ Vehicle 3D models               │   40%   │  $2,000              │
│ Environmental effects           │   60%   │  $1,800              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL MGT SYNERGY            │   ~55%  │  $9,400              │
└─────────────────────────────────┴─────────┴──────────────────────┘

TOTAL ESTIMATED SYNERGY SAVINGS: ~$40,750
```

### 7.2 Unique Development Required

```
RPG-SPECIFIC DEVELOPMENT:
══════════════════════════════════════════════════════════════════════

UNIQUE COMPONENTS:
┌─────────────────────────────────────────────────────────────────────┐
│  • Rocket ballistics model (boost + sustain + coast)               │
│  • Warhead-specific trajectory calculations                        │
│  • Crosswind weathervane effect                                    │
│  • Armor penetration physics                                       │
│  • ERA defeat model (tandem warheads)                              │
│  • Vehicle damage visualization                                     │
│  • PGO-7 sight reticle simulation                                  │
│  • Warhead selection interface                                     │
│  • RPG-7 weapon replica hardware                                   │
│  • Training grenades (weighted dummies)                            │
│  • Launch effect (bump, flash, smoke)                              │
│  • Backblast visualization                                         │
└─────────────────────────────────────────────────────────────────────┘

ESTIMATED UNIQUE DEVELOPMENT: ~$55,000
```

---

## 8. COST ESTIMATE

### 8.1 R&D Cost (With Platform Synergy)

```
VN-RPG-001 DEVELOPMENT COST:
══════════════════════════════════════════════════════════════════════

SOFTWARE DEVELOPMENT:
├─ Rocket ballistics engine: $10,000
├─ Warhead trajectory models (6 types): $8,000
├─ Crosswind/weathervane: $4,000
├─ Armor penetration physics: $6,000
├─ ERA defeat simulation: $4,000
├─ Vehicle damage model: $5,000
├─ PGO-7 sight simulation: $3,000
├─ Warhead selection system: $2,000
├─ Integration with platform: $4,000
├─ Testing/validation: $4,000
└─ Scenarios/content: $5,000
                                 ─────────
Subtotal Software:               $55,000

HARDWARE DEVELOPMENT:
├─ RPG-7 replica (full weight): $6,000
├─ PGO-7 sight simulation: $2,000
├─ Trigger/firing mechanism: $2,000
├─ Training grenades (set): $3,000
├─ Wireless tracking: $2,000
└─ Launch effect device: $2,000
                                 ─────────
Subtotal Hardware:               $17,000

SYNERGY SAVINGS:                 -$40,750

CONTINGENCY (15%):               $5,000

TOTAL R&D INVESTMENT:            ~$36,250 (with synergy)
══════════════════════════════════════════════════════════════════════

COMPARISON:
├─ With full synergy (SAMT + MGT first): $36,250
├─ With SAMT synergy only: $55,000
├─ Standalone development: $95,000
└─ SAVINGS: $58,750 (62%)
```

### 8.2 Bill of Materials (Standard Indoor Simulator)

| Category | Component | Qty | Unit Cost | Total |
|----------|-----------|-----|-----------|-------|
| **Computing** | Simulation PC (RTX 4080) | 1 | $3,500 | $3,500 |
| **Display** | 120" curved screen | 1 | $3,500 | $3,500 |
| **Display** | Projector (4K laser) | 1 | $4,000 | $4,000 |
| **Weapons** | RPG-7 replica (weighted) | 2 | $2,500 | $5,000 |
| **Weapons** | PGO-7 sight simulation | 2 | $800 | $1,600 |
| **Weapons** | Training grenades (set of 6) | 2 | $1,500 | $3,000 |
| **Interface** | Firing mechanism + sensors | 2 | $1,000 | $2,000 |
| **Audio** | Sound system | 1 | $1,500 | $1,500 |
| **Instructor** | IOS workstation | 1 | $2,500 | $2,500 |
| **Software** | License (per system) | 1 | $3,000 | $3,000 |
| **Effects** | Launch bump/flash | 2 | $500 | $1,000 |
| **Infrastructure** | Mounting, cables | 1 | $1,500 | $1,500 |
| **Contingency** | 15% | - | - | $4,800 |
| **TOTAL BOM** | - | - | - | **~$37,000** |

### 8.3 Pricing Strategy

| Configuration | BOM Cost | Margin | Unit Price | Note |
|---------------|----------|--------|------------|------|
| **Basic Marksmanship** | $22,000 | 55% | $48,000 | Entry level |
| **Indoor Standard** | $37,000 | 50% | **$74,000** ⭐ | Main product |
| **Tactical Advanced** | $55,000 | 45% | $100,000 | Premium |
| **Laser Field** | $28,000 | 50% | $56,000 | Outdoor |

---

## 9. MARKET SIZE ESTIMATE

```
VIETNAM MARKET SIZE ANALYSIS:
══════════════════════════════════════════════════════════════════════

SEGMENT 1: INFANTRY BATTALIONS
├─ Infantry battalions: 80-100
├─ Target penetration: 50%
├─ Configuration: Indoor Standard
├─ Potential: 40-50 systems
└─ Revenue: $3.0-3.7M

SEGMENT 2: TRAINING CENTERS/SCHOOLS
├─ Infantry training centers: 10-15
├─ Military academies: 5-8
├─ Configuration: Tactical Advanced
├─ Potential: 15-23 systems
└─ Revenue: $1.5-2.3M

SEGMENT 3: SPECIAL FORCES
├─ SF units: 8-12
├─ Marines: 5-8
├─ Configuration: Tactical + Field
├─ Potential: 8-15 systems
└─ Revenue: $0.6-1.2M

SEGMENT 4: RESERVE/MILITIA TRAINING
├─ Provincial training facilities: 30-40
├─ Target penetration: 30%
├─ Configuration: Basic Marksmanship
├─ Potential: 10-15 systems
└─ Revenue: $0.5-0.7M

TOTAL VIETNAM MARKET (10-year):
├─ Systems: 73-103 units
├─ Revenue: $5.6-7.9M
└─ Average per year: $560-790K/year
══════════════════════════════════════════════════════════════════════

EXPORT POTENTIAL:
├─ ASEAN (Laos, Cambodia, Myanmar): 15-25 units
├─ Africa (RPG users): 20-40 units
├─ Additional revenue: $2.5-5M
```

---

## 10. REQUIREMENTS LIST (PRELIMINARY)

### 10.1 Functional Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **F-001** | Simulate RPG-7V/V2 | MUST | Full engagement |
| **F-002** | Simulate B41 (Vietnamese) | MUST | Local designation |
| **F-003** | All warhead types | MUST | PG-7V/VL/VR, OG-7V, TBG-7V |
| **F-004** | Rocket ballistics model | MUST | Boost + sustain + coast |
| **F-005** | Crosswind effects | MUST | Weathervane simulation |
| **F-006** | PGO-7 sight simulation | MUST | 2.7x, reticle, ranging |
| **F-007** | Static targets | MUST | 50-500m range |
| **F-008** | Moving targets | MUST | 0-20 km/h |
| **F-009** | Armor penetration model | MUST | RHA, ERA, composite |
| **F-010** | Vehicle damage visualization | MUST | Kill/mobility/firepower |
| **F-011** | Day/night operation | MUST | Variable lighting |
| **F-012** | Instructor station | MUST | Full control + AAR |
| **F-013** | Vietnamese language | MUST | Complete UI |
| **F-014** | RPG-18/22 disposable | WISH | Additional weapons |
| **F-015** | RPG-29 heavy AT | WISH | Advanced capability |

### 10.2 Performance Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **P-001** | Visual frame rate | MUST | ≥60 FPS |
| **P-002** | Ballistic accuracy | MUST | ±1% vs real data |
| **P-003** | Tracking latency | MUST | <20 ms |
| **P-004** | MTBF | MUST | >2000 hours |

### 10.3 Cost/Schedule Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **C-001** | Unit cost (Standard) | MUST | <$80,000 |
| **C-002** | R&D investment | MUST | <$40,000 (with synergy) |
| **C-003** | Development time | MUST | <8 months |

---

## 11. CRITICAL QUESTIONS FOR STAKEHOLDER

```
8 CRITICAL QUESTIONS FOR VN-RPG-001:
══════════════════════════════════════════════════════════════════════

QUESTION 1: WEAPON SCOPE
┌─────────────────────────────────────────────────────────────────────┐
│  Which RPG systems to include?                                      │
│                                                                     │
│  □ A) RPG-7V/B41 only (basic)                                      │
│  □ B) RPG-7 + disposables (RPG-18/22)                              │
│  □ C) RPG-7 + RPG-29 (heavy AT) ⭐ RECOMMENDED                     │
│  □ D) All RPG family (comprehensive)                               │
│                                                                     │
│  Impact: Development scope, training coverage                       │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 2: WARHEAD COVERAGE
┌─────────────────────────────────────────────────────────────────────┐
│  Which warheads to simulate?                                        │
│                                                                     │
│  □ A) HEAT only (PG-7V, VL, VR)                                    │
│  □ B) HEAT + Fragmentation (+ OG-7V) ⭐ RECOMMENDED                │
│  □ C) All including thermobaric (+ TBG-7V)                         │
│                                                                     │
│  Impact: Training completeness, urban warfare prep                  │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 3: PRIMARY CONFIGURATION
┌─────────────────────────────────────────────────────────────────────┐
│  What configuration as main product?                                │
│                                                                     │
│  □ A) Basic Marksmanship ($48K)                                    │
│  □ B) Indoor Standard ($74K) ⭐ RECOMMENDED                        │
│  □ C) Tactical Advanced ($100K)                                    │
│  □ D) Laser Field ($56K)                                           │
│                                                                     │
│  Impact: Price point, facility requirements                         │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 4: TARGET VEHICLES
┌─────────────────────────────────────────────────────────────────────┐
│  Which target vehicles to include?                                  │
│                                                                     │
│  □ A) Generic tanks/APCs only                                      │
│  □ B) Soviet/Russian vehicles (T-72, BMP, BTR)                     │
│  □ C) Include Western (M1, Leopard, Stryker) ⭐ RECOMMENDED        │
│  □ D) Comprehensive global (20+ vehicles)                          │
│                                                                     │
│  Impact: Training scenarios, export potential                       │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 5: DEVELOPMENT SEQUENCE
┌─────────────────────────────────────────────────────────────────────┐
│  When to develop RPG Trainer?                                       │
│                                                                     │
│  □ A) After SAMT only                                              │
│  □ B) After SAMT + MGT ⭐ RECOMMENDED (max synergy 62%)            │
│  □ C) After MPADS                                                   │
│  □ D) In parallel with other products                              │
│                                                                     │
│  Impact: R&D cost ($36K vs $95K)                                   │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 6: FIELD TRAINER OPTION
┌─────────────────────────────────────────────────────────────────────┐
│  Include outdoor laser-based field trainer?                         │
│                                                                     │
│  □ A) Indoor only (simpler)                                        │
│  □ B) Both indoor + field ⭐ RECOMMENDED                           │
│  □ C) Field only (like Skiftech)                                   │
│                                                                     │
│  Impact: Training flexibility, development scope                    │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 7: BUDGET ENVELOPE
┌─────────────────────────────────────────────────────────────────────┐
│  Budget constraints?                                                │
│                                                                     │
│  R&D Budget:                                                        │
│  □ A) <$30,000 (minimal)                                           │
│  □ B) $30,000-45,000 ⭐ RECOMMENDED                                │
│  □ C) $45,000-70,000 (enhanced)                                    │
│                                                                     │
│  Target Unit Price:                                                 │
│  □ A) <$50,000                                                     │
│  □ B) $50,000-85,000 ⭐ RECOMMENDED                                │
│  □ C) $85,000-120,000                                              │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 8: TIMELINE
┌─────────────────────────────────────────────────────────────────────┐
│  Target completion?                                                 │
│                                                                     │
│  □ A) 6 months after MGT                                           │
│  □ B) 8 months after MGT ⭐ RECOMMENDED                            │
│  □ C) 12 months after MGT                                          │
│  □ D) Flexible                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 12. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Ballistics model accuracy | MEDIUM | HIGH | Validate with real firing data |
| Weapon replica quality | LOW | MEDIUM | Partner with local manufacturer |
| Competition from Skiftech | MEDIUM | MEDIUM | Focus on indoor + warhead training |
| Export restrictions | LOW | LOW | Focus on domestic first |
| Development delays | LOW | MEDIUM | Leverage platform synergy |

**Overall Risk Level: LOW-MEDIUM** (Well-defined scope, high synergy)

---

## 13. SUMMARY & RECOMMENDATION

### 13.1 Product Summary

| Aspect | Value |
|--------|-------|
| **Product** | RPG/Anti-Tank Training Simulator |
| **Code** | VN-RPG-001 |
| **Weapons** | RPG-7/B41, RPG-29, (disposables optional) |
| **Warheads** | PG-7V/VL/VR, OG-7V, TBG-7V |
| **Market Size** | 73-103 systems ($5.6-7.9M Vietnam) |
| **Export Potential** | 35-65 systems ($2.5-5M) |
| **Unit Price** | $48,000-100,000 |
| **R&D Cost** | ~$36,250 (with synergy) |
| **Timeline** | 8 months after MGT |
| **Risk Level** | LOW-MEDIUM |
| **Priority** | ⭐⭐⭐⭐⭐ HIGHEST |

### 13.2 Strategic Recommendation

```
RECOMMENDATION: DEVELOP VN-RPG-001 AFTER MGT
══════════════════════════════════════════════════════════════════════

RATIONALE:
1. HIGHEST VOLUME: Every infantry squad has RPG (50,000+ users)
2. LOWEST COST: $36K R&D with 62% synergy savings
3. SIMPLEST: Unguided weapon, well-understood ballistics
4. FASTEST: 8 months development
5. UNIVERSAL: RPG-7 used by 40+ countries (export potential)

RECOMMENDED SEQUENCE:
┌─────────────────────────────────────────────────────────────────────┐
│  SAMT (12 mo) → MGT (9 mo) → RPG (8 mo) → MPADS (9 mo)            │
│      ↓              ↓            ↓            ↓                    │
│  Foundation    Crew weapons   Infantry AT   Air Defense           │
└─────────────────────────────────────────────────────────────────────┘

CONFIGURATION: Indoor Standard @ $74,000
WEAPONS: RPG-7/B41 + RPG-29
WARHEADS: All 6 types (HEAT, tandem, frag, thermobaric)
FEATURES: Full armor penetration visualization

UNIQUE VALUE:
├─ Vietnamese B41 specific training
├─ ALL warhead types with correct ballistics
├─ Armor penetration visualization (ERA defeat)
├─ Urban warfare scenarios
└─ 62% cost savings vs standalone development

KEY MESSAGE:
"Train your anti-tank gunners on every warhead type,
against every threat vehicle, at 500:1 cost savings -
the most cost-effective RPG training solution available."
```

---

## 14. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-24 | Claude AI | Initial Phase 1 document |

---

**END OF DOCUMENT**

*This document follows Pahl & Beitz systematic design methodology for Phase 1: Task Clarification. Proceed to Phase 2: Conceptual Design after stakeholder input on critical questions.*
