# VN-MRT-001: MORTAR FIRE CONTROL TRAINING SIMULATOR
## Phase 1: Task Clarification - Deep Dive Analysis

**Document Version:** 1.0  
**Date:** December 24, 2025  
**Product Code:** VN-MRT-001  
**Classification:** INTERNAL USE  

---

## 1. EXECUTIVE SUMMARY

### 1.1 Product Definition

**Mortar Fire Control Trainer** là hệ thống huấn luyện mô phỏng toàn diện cho kíp trung đội cối, bao gồm: Forward Observer (FO - Trinh sát viên), Fire Direction Center (FDC - Trung tâm chỉ huy hỏa lực), và Mortar Crew (Kíp cối). Hệ thống cho phép huấn luyện đồng bộ tất cả các thành phần của hỏa lực gián tiếp mà không cần sử dụng đạn thật.

### 1.2 Strategic Importance - NEW CAPABILITY CLUSTER

```
WHY MORTAR TRAINER OPENS NEW DOOR:
══════════════════════════════════════════════════════════════════════

🚀 INDIRECT FIRE CAPABILITY CLUSTER:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CURRENT PRODUCTS (Direct Fire):                                   │
│  ├─ Small Arms → Direct aiming at visible target                  │
│  ├─ Machine Gun → Direct aiming at visible target                 │
│  ├─ RPG → Direct aiming at visible target                         │
│  └─ All require LINE OF SIGHT to target                           │
│                                                                     │
│  NEW CLUSTER (Indirect Fire):                                      │
│  ├─ MORTAR → First indirect fire simulator ⭐                     │
│  ├─ Artillery FOS → Builds on mortar FDC concepts                 │
│  ├─ Naval Gunfire → Shares call-for-fire procedures               │
│  └─ Joint Fires → Ultimate integration                            │
│                                                                     │
│  MORTAR IS THE GATEWAY TO INDIRECT FIRE TRAINING!                 │
└─────────────────────────────────────────────────────────────────────┘

📊 INFANTRY BATTALION ORGANIC FIRE SUPPORT:
┌─────────────────────────────────────────────────────────────────────┐
│  "BATTALION COMMANDER'S ARTILLERY"                                 │
│                                                                     │
│  Every Infantry Battalion has Mortar Platoon:                      │
│  ├─ 60mm Mortars: Company level (3-6 tubes)                       │
│  ├─ 82mm Mortars: Battalion level (4-6 tubes)                     │
│  ├─ 120mm Mortars: Regiment/Brigade (6-8 tubes)                   │
│  └─ Provides ORGANIC indirect fire support                        │
│                                                                     │
│  MORTAR = Infantry's Own Artillery                                 │
│  ├─ Under battalion commander's direct control                    │
│  ├─ No coordination with artillery required                       │
│  ├─ Faster response than divisional artillery                     │
│  └─ Essential for close fire support                              │
└─────────────────────────────────────────────────────────────────────┘

⚡ INDIRECT FIRE FUNDAMENTALS:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  DIRECT FIRE (Small Arms, MG, RPG):                               │
│  Gunner ───────────────────────────────► Target (sees target)     │
│                                                                     │
│  INDIRECT FIRE (Mortar):                                           │
│                    ╭────╮                                          │
│  FO ──► FDC ──► Mortar ╯    ╲                                     │
│   │              │           ╲                                     │
│   │         (calculates)      ╲                                    │
│   │                            ╲                                   │
│   ╰─────────────────────────────►  Target                          │
│   (sees target)         (hidden behind terrain)                    │
│                                                                     │
│  THREE COMPONENTS MUST WORK TOGETHER:                              │
│  1. Forward Observer (FO) - Sees target, calls for fire           │
│  2. Fire Direction Center (FDC) - Calculates firing solution      │
│  3. Mortar Crew - Sets deflection/elevation, fires                │
│                                                                     │
│  = COMPLEX TEAM TRAINING REQUIRED!                                 │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.3 Weapon Systems Covered

```
VN-MRT-001 MORTAR SYSTEMS:
══════════════════════════════════════════════════════════════════════

TIER 1 - LIGHT MORTAR (Company Level):
┌─────────────────────────────────────────────────────────────────────┐
│  60mm MORTAR (M224 / Soviet equivalent)                            │
│  ├─ Caliber: 60mm                                                  │
│  ├─ Weight: 18 kg (complete)                                       │
│  ├─ Range: 70m - 3,490m                                            │
│  ├─ Rate of Fire: 20-30 rpm                                        │
│  ├─ Crew: 3 (commander, gunner, ammo bearer)                      │
│  ├─ Role: Company-level close support                              │
│  ├─ Mobility: Man-portable                                         │
│  └─ Priority: ⭐⭐⭐                                                │
└─────────────────────────────────────────────────────────────────────┘

TIER 2 - MEDIUM MORTAR (Battalion Level) ⭐ PRIMARY:
┌─────────────────────────────────────────────────────────────────────┐
│  82mm MORTAR (BM-37 / BM-41 / 2B14 Podnos)                         │
│  ├─ Caliber: 82mm (Soviet standard, can fire 81mm)                │
│  ├─ Weight: 42-56 kg                                               │
│  ├─ Range: 100m - 4,000m (3,000-5,500m modern)                     │
│  ├─ Rate of Fire: 15-25 rpm                                        │
│  ├─ Crew: 4-5                                                       │
│  ├─ HE payload: 400-680g                                           │
│  ├─ Role: Battalion organic fire support                           │
│  ├─ Mobility: Wheeled, towed, or carried                          │
│  ├─ Status: MAIN Vietnamese battalion mortar                       │
│  └─ Priority: ⭐⭐⭐⭐⭐ HIGHEST                                     │
├─────────────────────────────────────────────────────────────────────┤
│  81mm MORTAR (M252 / M29A1)                                        │
│  ├─ NATO standard caliber                                          │
│  ├─ Range: up to 5,935m (M252)                                     │
│  ├─ Interoperable with 82mm tubes                                  │
│  └─ Priority: ⭐⭐⭐⭐ (export market)                               │
└─────────────────────────────────────────────────────────────────────┘

TIER 3 - HEAVY MORTAR (Regiment/Brigade Level):
┌─────────────────────────────────────────────────────────────────────┐
│  120mm MORTAR (2B11 Sani / PM-43)                                  │
│  ├─ Caliber: 120mm                                                 │
│  ├─ Weight: 210 kg (combat), 285 kg (travel)                      │
│  ├─ Range: 460m - 7,100m (up to 9,500m modern)                    │
│  ├─ Rate of Fire: 12-15 rpm                                        │
│  ├─ Crew: 5-6                                                       │
│  ├─ HE payload: 1,270-4,200g                                       │
│  ├─ Role: Regiment/Brigade fire support                            │
│  ├─ Note: "Pack howitzer firepower, mortar simplicity"            │
│  └─ Priority: ⭐⭐⭐⭐⭐                                             │
├─────────────────────────────────────────────────────────────────────┤
│  2B9 Vasilek (Automatic Mortar)                                    │
│  ├─ 82mm automatic gun-mortar                                      │
│  ├─ 4-round clips, semiautomatic                                  │
│  ├─ Rate: 100-120 rpm (burst)                                      │
│  ├─ Used by Soviet airborne, Russia today                         │
│  └─ Priority: ⭐⭐⭐ (specialty)                                    │
└─────────────────────────────────────────────────────────────────────┘

AMMUNITION TYPES:
┌─────────────────────────────────────────────────────────────────────┐
│  Type              │ Use                        │ Training Need    │
│  ──────────────────┼────────────────────────────┼──────────────────│
│  HE (High Explos.) │ Personnel, positions       │ PRIMARY          │
│  WP (White Phos.)  │ Smoke screen, incendiary   │ IMPORTANT        │
│  Smoke             │ Screening, marking         │ IMPORTANT        │
│  Illumination      │ Battlefield lighting       │ IMPORTANT        │
│  Thermobaric       │ Bunkers, caves             │ ADVANCED         │
│  Guided (Kitolov)  │ Precision strike           │ SPECIALTY        │
└─────────────────────────────────────────────────────────────────────┘

CHARGE PROPELLANT SYSTEM:
┌─────────────────────────────────────────────────────────────────────┐
│  82mm Example:                                                      │
│  ├─ Charge 0: Minimum range (~100m)                                │
│  ├─ Charge 1-2: Short range                                        │
│  ├─ Charge 3-4: Medium range                                       │
│  ├─ Charge 5-6: Maximum range (~4000m+)                            │
│                                                                     │
│  Critical Training: Correct charge selection for range!            │
│  Wrong charge = miss or danger close to friendlies                 │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.4 Training Requirements Analysis

```
MORTAR FIRE CONTROL TRAINING CHALLENGES:
══════════════════════════════════════════════════════════════════════

PROBLEM 1: AMMUNITION COST
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ 82mm HE round: $50-80 each                                     │
│  ├─ 120mm HE round: $100-200 each                                  │
│  ├─ Illumination: $80-150 each                                     │
│  ├─ Training session: 20-50 rounds minimum                        │
│  ├─ Annual cost per platoon: $10,000-30,000                       │
│  └─ Limited budget = LIMITED PROFICIENCY                           │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited virtual rounds: $0 per shot                          │
│  ├─ 200:1 cost savings ratio                                       │
│  ├─ Practice ALL ammunition types                                  │
│  └─ FDC procedures without ammunition expense                      │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 2: RANGE REQUIREMENTS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Need 7+ km range for 120mm                                     │
│  ├─ Large impact area required                                     │
│  ├─ Danger zones for misfires                                      │
│  ├─ Limited suitable ranges in Vietnam                             │
│  ├─ Weather dependent                                               │
│  └─ Range scheduling conflicts                                     │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Train indoors, any location                                    │
│  ├─ No danger zone requirements                                    │
│  ├─ Any weather, day/night                                         │
│  ├─ Multiple simultaneous platoons                                 │
│  └─ 24/7 availability                                              │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 3: FDC COMPUTATION SKILLS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ FDC procedures complex and perishable                         │
│  ├─ Plotting board calculations require practice                   │
│  ├─ MET (meteorological) corrections critical                     │
│  ├─ Errors cause fratricide or mission failure                    │
│  └─ Limited practice without live fire                             │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited FDC computation practice                             │
│  ├─ See immediate results of calculations                         │
│  ├─ Error detection and correction                                 │
│  ├─ Build speed and accuracy                                       │
│  └─ Train under stress conditions                                  │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 4: FORWARD OBSERVER SKILLS
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ Call for Fire procedures complex                              │
│  ├─ Range estimation critical (life or death)                     │
│  ├─ Adjustment techniques require experience                      │
│  ├─ Coordination with FDC essential                               │
│  └─ Limited live practice opportunities                            │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Unlimited Call for Fire practice                              │
│  ├─ See impact of adjustments immediately                         │
│  ├─ Build FO-FDC teamwork                                          │
│  ├─ Practice various terrain/target types                         │
│  └─ Develop "eye" for burst observation                           │
└─────────────────────────────────────────────────────────────────────┘

PROBLEM 5: TEAM COORDINATION
┌─────────────────────────────────────────────────────────────────────┐
│  Current State:                                                     │
│  ├─ FO + FDC + Crew must work as team                             │
│  ├─ Communication procedures critical                              │
│  ├─ Timing and synchronization                                     │
│  ├─ Error propagation between elements                            │
│  └─ Rarely train all 3 elements together                          │
│                                                                     │
│  Simulator Impact:                                                  │
│  ├─ Integrated training all elements                              │
│  ├─ Full communication chain                                       │
│  ├─ Identify weak links                                            │
│  ├─ Build team cohesion                                            │
│  └─ Stress inoculation under fire                                  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. INDIRECT FIRE TEAM STRUCTURE

### 2.1 Team Components

```
MORTAR INDIRECT FIRE TEAM:
══════════════════════════════════════════════════════════════════════

    FORWARD OBSERVER (FO)                  FIRE DIRECTION CENTER (FDC)
    ┌───────────────────┐                  ┌───────────────────────────┐
    │ • Locates target  │                  │ • Receives call for fire  │
    │ • Calls for fire  │ ═══════════════► │ • Computes firing data    │
    │ • Observes fall   │     RADIO/       │ • Issues fire commands    │
    │ • Adjusts fire    │ ◄═══════════════ │ • Applies corrections     │
    │ • Battle damage   │     WIRE         │ • Records missions        │
    └───────────────────┘                  └───────────────────────────┘
           │                                           │
           │                                           │
           │  OBSERVES                                 │ COMMANDS
           ▼                                           ▼
    ┌───────────────────┐                  ┌───────────────────────────┐
    │     TARGET        │                  │      MORTAR SECTION       │
    │  • Enemy troops   │                  │  • Sets deflection        │
    │  • Vehicles       │                  │  • Sets elevation         │
    │  • Positions      │                  │  • Selects charge         │
    │  • Bunkers        │                  │  • Loads and fires        │
    └───────────────────┘                  └───────────────────────────┘

PERSONNEL STRUCTURE:
┌─────────────────────────────────────────────────────────────────────┐
│  FORWARD OBSERVER TEAM (2-3 personnel):                            │
│  ├─ FO (Officer/NCO) - Observes, calls fire                       │
│  ├─ RTO (Radio Operator) - Communications                         │
│  └─ Security/Assistant                                              │
│                                                                     │
│  FIRE DIRECTION CENTER (3-4 personnel):                            │
│  ├─ FDC Chief (SSG/SGT) - Decisions, supervises                   │
│  ├─ Computer #1 - Primary calculations                            │
│  ├─ Computer #2 - Verification                                     │
│  └─ RTO - Communications                                           │
│                                                                     │
│  MORTAR SECTION (4-6 tubes, 3-4 personnel each):                  │
│  ├─ Section Sergeant - Supervises all tubes                       │
│  ├─ Squad Leader - Per tube, supervises                           │
│  ├─ Gunner - Sets deflection/elevation                            │
│  ├─ Assistant Gunner - Loads, sets charge                         │
│  └─ Ammo Bearer(s) - Prepares and passes rounds                   │
│                                                                     │
│  TOTAL: 15-25 personnel per mortar platoon                        │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Call for Fire Procedure

```
CALL FOR FIRE FORMAT:
══════════════════════════════════════════════════════════════════════

FO TO FDC - STANDARD CALL FOR FIRE:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  LINE 1: OBSERVER IDENTIFICATION                                   │
│  "STEEL 3, THIS IS MIKE 7, FIRE MISSION, OVER"                    │
│                                                                     │
│  LINE 2: WARNING ORDER                                              │
│  "ADJUST FIRE" / "FIRE FOR EFFECT" / "IMMEDIATE SUPPRESSION"      │
│                                                                     │
│  LINE 3: TARGET LOCATION (Choose method)                           │
│  ├─ GRID: "GRID 18S TQ 12345678"                                  │
│  ├─ POLAR: "DIRECTION 4520, DISTANCE 1200"                        │
│  └─ SHIFT: "FROM RP1, LEFT 200, ADD 300"                          │
│                                                                     │
│  LINE 4: TARGET DESCRIPTION                                         │
│  "ENEMY INFANTRY PLATOON IN THE OPEN"                              │
│  "MACHINE GUN POSITION, BUNKER"                                    │
│                                                                     │
│  LINE 5: METHOD OF ENGAGEMENT (Optional)                           │
│  "HE, DELAY" / "WP" / "ILLUMINATION"                               │
│                                                                     │
│  LINE 6: METHOD OF FIRE CONTROL                                    │
│  "AT MY COMMAND" / "WHEN READY" / "TIME ON TARGET 0630"           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

ADJUSTMENT PROCEDURE:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Initial Round ──────────────────────── FO Observes                │
│        ▼                                                           │
│  FO Sends Correction ─────────────────► FDC Computes               │
│  "RIGHT 50, ADD 100"                           │                   │
│        ▲                                       ▼                   │
│  FO Observes Again ◄─────────────────── Next Round Fired          │
│        │                                                           │
│        ▼                                                           │
│  Within 50m? ──► Yes ──► "FIRE FOR EFFECT"                        │
│        │                                                           │
│        ▼                                                           │
│        No ──► Continue Adjusting                                   │
│                                                                     │
│  END OF MISSION:                                                   │
│  "END OF MISSION, ESTIMATE 15 CASUALTIES, TARGET DESTROYED"       │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.3 FDC Computation

```
FDC COMPUTATION PROCESS:
══════════════════════════════════════════════════════════════════════

STEP 1: RECEIVE CALL FOR FIRE
┌─────────────────────────────────────────────────────────────────────┐
│  FDC RTO receives and records:                                     │
│  ├─ Observer identification                                        │
│  ├─ Target location (grid/polar/shift)                            │
│  ├─ Target description                                             │
│  └─ Method of engagement                                           │
└─────────────────────────────────────────────────────────────────────┘

STEP 2: PLOT TARGET
┌─────────────────────────────────────────────────────────────────────┐
│  Using M16/M19 Plotting Board or Mortar Ballistic Computer (MBC): │
│  ├─ Plot target location                                          │
│  ├─ Determine range (mortar to target)                            │
│  ├─ Determine direction (deflection)                              │
│  └─ Check against safety limits                                    │
└─────────────────────────────────────────────────────────────────────┘

STEP 3: COMPUTE FIRING DATA
┌─────────────────────────────────────────────────────────────────────┐
│  From Firing Tables or MBC:                                        │
│  ├─ DEFLECTION: Direction to target (mils)                        │
│  ├─ ELEVATION: Angle of tube (mils)                               │
│  ├─ CHARGE: Propellant rings for range                            │
│  └─ Apply corrections:                                             │
│      ├─ MET (meteorological) corrections                          │
│      ├─ Registration corrections                                   │
│      └─ Non-standard conditions                                    │
└─────────────────────────────────────────────────────────────────────┘

STEP 4: ISSUE FIRE COMMAND
┌─────────────────────────────────────────────────────────────────────┐
│  Standard Fire Command:                                             │
│                                                                     │
│  "PLATOON, ONE ROUND"            - Unit and rounds                 │
│  "DEFLECTION 2840"               - Direction (mils)                │
│  "ELEVATION 1067"                - Tube angle (mils)               │
│  "CHARGE 3"                      - Propellant                      │
│  "HE, QUICK"                     - Ammo and fuze                   │
│  "AT MY COMMAND" or "FIRE"       - Control                         │
└─────────────────────────────────────────────────────────────────────┘

STEP 5: RECORD AND CONTINUE
┌─────────────────────────────────────────────────────────────────────┐
│  ├─ Record all data on DA Form 2399                               │
│  ├─ Process FO corrections                                         │
│  ├─ Compute adjusted firing data                                   │
│  ├─ Issue subsequent commands                                      │
│  └─ Complete mission record                                        │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. PRODUCT ARCHITECTURE

### 3.1 System Configurations

```
VN-MRT-001 CONFIGURATION OPTIONS:
══════════════════════════════════════════════════════════════════════

OPTION A: FDC DESK TRAINER (Basic)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $35,000-50,000                                              │
│  Focus: FDC computation and procedures                             │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 2x FDC workstations (computer + plotting board)               │
│  ├─ Large monitor for map display                                  │
│  ├─ Simulated radio communications                                 │
│  ├─ AI-generated FO calls                                          │
│  ├─ Instructor station                                             │
│  └─ Basic AAR                                                      │
│                                                                     │
│  Features:                                                          │
│  ├─ Plotting board practice                                        │
│  ├─ MBC (Mortar Ballistic Computer) simulation                    │
│  ├─ Fire mission procedures                                        │
│  ├─ Computation verification                                       │
│  └─ 2-4 trainees at a time                                         │
│                                                                     │
│  Best For: FDC skill building, schools                            │
└─────────────────────────────────────────────────────────────────────┘

OPTION B: INTEGRATED MORTAR SIMULATOR (Standard) ⭐ RECOMMENDED
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $80,000-120,000                                             │
│  Focus: Complete FO + FDC + Crew training                          │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 1x Forward Observer Station (terrain display, binos)          │
│  ├─ 1x Fire Direction Center (2 computers)                        │
│  ├─ 4-6x Mortar Simulators (scale replicas)                       │
│  ├─ Large projection for target area                              │
│  ├─ Radio communication system                                     │
│  ├─ Full instructor station                                        │
│  └─ Comprehensive AAR with 3D playback                             │
│                                                                     │
│  Features:                                                          │
│  ├─ Complete indirect fire chain                                   │
│  ├─ Real-time burst visualization                                  │
│  ├─ MET corrections simulation                                     │
│  ├─ Multiple mission types                                         │
│  ├─ Team coordination training                                     │
│  └─ 10-15 trainees simultaneous                                    │
│                                                                     │
│  Best For: Battalion mortar platoons, training centers            │
└─────────────────────────────────────────────────────────────────────┘

OPTION C: MULTI-PLATOON ADVANCED (Premium)
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $150,000-200,000                                            │
│  Focus: Multiple platoon coordination                              │
│                                                                     │
│  Configuration:                                                     │
│  ├─ 2x FO Stations (terrain + observation)                        │
│  ├─ 2x FDC Stations (for split operations)                        │
│  ├─ 8-12x Mortar Simulators                                        │
│  ├─ Large dome/curved projection                                   │
│  ├─ Networked for combined operations                             │
│  ├─ Integration with Artillery FOS                                 │
│  └─ Full AAR facility                                              │
│                                                                     │
│  Features:                                                          │
│  ├─ Multiple simultaneous missions                                 │
│  ├─ Priority of fires                                              │
│  ├─ Sheaf adjustments                                              │
│  ├─ Fire for Effect coordination                                  │
│  ├─ Combined arms scenarios                                        │
│  └─ 20-30 trainees                                                  │
│                                                                     │
│  Best For: Regional training centers, advanced schools            │
└─────────────────────────────────────────────────────────────────────┘

OPTION D: MOBILE FIELD TRAINER
┌─────────────────────────────────────────────────────────────────────┐
│  Price: $60,000-80,000                                              │
│  Focus: Outdoor realistic training                                 │
│                                                                     │
│  Configuration:                                                     │
│  ├─ Vehicle-mounted FDC station                                    │
│  ├─ Portable mortar simulators                                     │
│  ├─ Tablet-based FO station                                        │
│  ├─ Virtual impact markers (AR/GPS)                               │
│  └─ Wireless communications                                        │
│                                                                     │
│  Features:                                                          │
│  ├─ Real terrain utilization                                       │
│  ├─ Actual mortar handling                                         │
│  ├─ GPS-based positioning                                          │
│  └─ Integration with tactical exercises                           │
│                                                                     │
│  Best For: Field exercises, unit deployment                       │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Technical Architecture

```
VN-MRT-001 SYSTEM ARCHITECTURE:
══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────┐
│                    FORWARD OBSERVER STATION                        │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  [3D Terrain Display - Large Monitor/Projection]            │   │
│  │   • Realistic terrain visualization                         │   │
│  │   • Day/night modes                                         │   │
│  │   • Weather effects                                         │   │
│  │   • Targets and enemy positions                             │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  [Simulated Binoculars with Compass]                       │   │
│  │   • Direction finding                                       │   │
│  │   • Range estimation (mil-relation)                        │   │
│  │   • Burst observation                                       │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  [Radio Handset + Map Board]                               │   │
│  │   • Voice communication with FDC                           │   │
│  │   • Grid reference tools                                    │   │
│  │   • Call for fire procedures                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ Radio Link
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    FIRE DIRECTION CENTER                           │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  [Computer Station #1]          [Computer Station #2]       │   │
│  │   • M16/M19 Plotting Board       • Verification/Check      │   │
│  │   • MBC Interface                • Recording                │   │
│  │   • Map with overlays            • Communications          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  [FDC Chief Station]                                        │   │
│  │   • Decision making                                         │   │
│  │   • Mission prioritization                                  │   │
│  │   • Safety verification                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ Wire/Radio Link
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    MORTAR SECTION (4-6 Tubes)                      │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐          │
│  │ MORTAR #1 │ │ MORTAR #2 │ │ MORTAR #3 │ │ MORTAR #4 │          │
│  │           │ │           │ │           │ │           │          │
│  │ [Sight]   │ │ [Sight]   │ │ [Sight]   │ │ [Sight]   │          │
│  │    ║      │ │    ║      │ │    ║      │ │    ║      │          │
│  │ ═══╬═══   │ │ ═══╬═══   │ │ ═══╬═══   │ │ ═══╬═══   │          │
│  │    ▲      │ │    ▲      │ │    ▲      │ │    ▲      │          │
│  │  [Base]   │ │  [Base]   │ │  [Base]   │ │  [Base]   │          │
│  │           │ │           │ │           │ │           │          │
│  │ Sensors:  │ │ Sensors:  │ │ Sensors:  │ │ Sensors:  │          │
│  │ • Defl.   │ │ • Defl.   │ │ • Defl.   │ │ • Defl.   │          │
│  │ • Elev.   │ │ • Elev.   │ │ • Elev.   │ │ • Elev.   │          │
│  │ • Round   │ │ • Round   │ │ • Round   │ │ • Round   │          │
│  │ • Charge  │ │ • Charge  │ │ • Charge  │ │ • Charge  │          │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘          │
│                                                                     │
│  Mortar Replica Features:                                          │
│  • Scale weight and dimensions                                     │
│  • Functional sight (deflection/elevation)                        │
│  • Simulated round loading                                         │
│  • Charge ring selection                                           │
│  • Recoil effect on firing                                         │
│  • Sensors detect all settings                                     │
└─────────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    SIMULATION ENGINE                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  BALLISTICS MODEL:                                          │   │
│  │  • Mortar trajectory calculation                            │   │
│  │  • Charge-based range                                       │   │
│  │  • MET corrections (wind, temp, density)                   │   │
│  │  • Probable error computation                               │   │
│  │  • Impact point determination                               │   │
│  │  • Burst effects visualization                              │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  SCENARIO GENERATOR:                                        │   │
│  │  • Target types and behaviors                               │   │
│  │  • Terrain effects                                          │   │
│  │  • Weather conditions                                       │   │
│  │  • Time of day                                              │   │
│  │  • Complexity levels                                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    INSTRUCTOR STATION                              │
│  • Scenario control                                                │
│  • Real-time monitoring                                            │
│  • Inject events (targets, changes)                               │
│  • Recording                                                        │
│  • After-Action Review                                             │
│  • Scoring and assessment                                          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 4. SOFTWARE REQUIREMENTS

### 4.1 Training Modes

```
VN-MRT-001 SOFTWARE TRAINING MODES:
══════════════════════════════════════════════════════════════════════

MODE 1: BASIC PROCEDURES
├─ Mortar assembly and emplacement
├─ Sight operation and laying
├─ Loading and charge selection
├─ Safety procedures
├─ Fire commands
└─ Misfire drills

MODE 2: FDC COMPUTATION
├─ Plotting board operation
├─ Grid/polar/shift plotting
├─ Firing data calculation
├─ MET corrections
├─ Record keeping (DA Form 2399)
└─ Mortar Ballistic Computer

MODE 3: FORWARD OBSERVER
├─ Target location methods
├─ Call for fire format
├─ Burst observation
├─ Adjustment techniques
├─ Bracket, creeping, precision
└─ End of mission reporting

MODE 4: ADJUST FIRE MISSIONS
├─ Polar missions
├─ Grid missions
├─ Shift from known point
├─ Area fire
├─ Precision fire
└─ Walking fire

MODE 5: FIRE FOR EFFECT
├─ Area targets
├─ Linear targets
├─ Sheaf adjustments (parallel, converged)
├─ Zone fire (120mm)
├─ Massed fires
└─ Time on target

MODE 6: SPECIAL MISSIONS
├─ Illumination (battlefield lighting)
├─ Coordinated illumination + HE
├─ Smoke screening
├─ Final Protective Fire (FPF)
├─ Immediate suppression
└─ Danger close

MODE 7: TACTICAL SCENARIOS
├─ Support advancing infantry
├─ Defensive fires
├─ Counter-attack support
├─ Urban operations
├─ Night operations
└─ MOUT (Military Operations Urban Terrain)

MODE 8: TEAM INTEGRATION
├─ FO-FDC-Crew full cycle
├─ Multiple simultaneous missions
├─ Priority of fires
├─ Fire support coordination
├─ Combined arms integration
└─ Stress/time pressure
```

### 4.2 After-Action Review

```
AAR CAPABILITIES:
══════════════════════════════════════════════════════════════════════

3D PLAYBACK:
├─ Round trajectory from mortar to target
├─ Impact point visualization
├─ Burst pattern analysis
├─ Multiple camera angles
├─ Slow-motion/freeze frame
└─ Overlay with correct solution

MISSION ANALYSIS:
├─ Call for fire accuracy
├─ FDC computation correctness
├─ Mortar crew settings
├─ Time metrics
├─ Communication clarity
└─ Error identification

SCORING:
├─ First Round Time (FRT)
├─ Rounds to adjust
├─ CEP (Circular Error Probable)
├─ Target effect achieved
├─ Safety violations
├─ Overall proficiency

TRAINING RECORDS:
├─ Individual progression
├─ Team performance
├─ Qualification tracking
├─ Trend analysis
└─ Export (PDF, Excel)
```

---

## 5. COMPETITOR ANALYSIS

```
COMPETITOR ANALYSIS:
══════════════════════════════════════════════════════════════════════

COMPETITOR 1: ZEN TECHNOLOGIES (India) - 81mm MIS
┌─────────────────────────────────────────────────────────────────────┐
│  Product: 81mm Mortar Integrated Simulator                        │
│  Status: Delivered 170+ to Indian Army                             │
│                                                                     │
│  Features:                                                          │
│  ├─ Instructor Station + MFC + MPC + 4-6 mortars                  │
│  ├─ 3D scenarios, all terrain types                               │
│  ├─ All ammunition effects                                         │
│  ├─ Environmental effects (weather, day/night)                    │
│  ├─ Realistic sound                                                │
│  └─ BN and MECHANISED versions                                     │
│                                                                     │
│  Estimated Price: $100,000-150,000                                 │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Proven system, combat-tested doctrine                         │
│  ├─ Complete FO-FDC-Crew integration                              │
│  ├─ Indian Army validated                                          │
│  └─ Strong support network                                         │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ 81mm only (not 82mm Soviet standard)                          │
│  ├─ High price point                                               │
│  ├─ Indian doctrine focus                                          │
│  └─ No 120mm variant                                               │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 2: INVERIS (USA) - Mortar Simulator
┌─────────────────────────────────────────────────────────────────────┐
│  Product: Heavy Weapon Mortar Simulator                            │
│  Status: US Army, NATO forces                                      │
│                                                                     │
│  Features:                                                          │
│  ├─ Integrates with SAT (Small Arms Trainer)                      │
│  ├─ Customer bipods and sights                                     │
│  ├─ HE, WP, Illumination rounds                                   │
│  ├─ Recoil effect                                                  │
│  ├─ FO + FDC functions                                             │
│  └─ Comprehensive AAR                                              │
│                                                                     │
│  Estimated Price: $150,000-250,000                                 │
│                                                                     │
│  Strengths:                                                         │
│  ├─ US Army approved                                               │
│  ├─ Integration with other simulators                             │
│  └─ High fidelity                                                  │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Very expensive                                                 │
│  ├─ Western mortar focus (60mm, 81mm, 120mm)                      │
│  ├─ Export restrictions                                            │
│  └─ Not suited for Eastern doctrine                                │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 3: SKIFTECH (Ukraine) - Mortar Fire Simulation
┌─────────────────────────────────────────────────────────────────────┐
│  Product: Mortar Fire Simulation System                            │
│  Status: Ukrainian Armed Forces                                    │
│                                                                     │
│  Features:                                                          │
│  ├─ Mounted block for 82mm and 120mm                              │
│  ├─ Interchangeable rings for calibers                            │
│  ├─ Weather condition training                                     │
│  ├─ Virtual targets                                                │
│  └─ Field deployable                                               │
│                                                                     │
│  Estimated Price: $40,000-80,000                                   │
│                                                                     │
│  Strengths:                                                         │
│  ├─ Soviet/Eastern mortar focus (82mm, 120mm)                     │
│  ├─ Combat-proven (Ukraine war)                                   │
│  ├─ Field deployable                                               │
│  └─ Lower price point                                              │
│                                                                     │
│  Weaknesses:                                                        │
│  ├─ Limited FDC training                                           │
│  ├─ Basic visualization                                            │
│  └─ Uncertain supply (war situation)                               │
└─────────────────────────────────────────────────────────────────────┘

COMPETITOR 4: BEL (India) - 81mm Mortar Simulator
┌─────────────────────────────────────────────────────────────────────┐
│  Product: 81mm Mortar Simulator                                    │
│  Status: Indian Army                                               │
│                                                                     │
│  Features:                                                          │
│  ├─ MFC and MPC training                                          │
│  ├─ Target prioritization                                          │
│  └─ Engagement training                                            │
│                                                                     │
│  Note: Government entity, limited export                           │
└─────────────────────────────────────────────────────────────────────┘

MARKET GAP ANALYSIS:
┌─────────────────────────────────────────────────────────────────────┐
│  GAP 1: No Vietnamese/Eastern 82mm specific simulator              │
│  GAP 2: Most lack complete FO-FDC-Crew integration                │
│  GAP 3: 120mm heavy mortar training underserved                   │
│  GAP 4: Affordable mid-range option missing                       │
│  GAP 5: Soviet/Eastern FDC procedures not supported               │
│                                                                     │
│  VN-MRT-001 OPPORTUNITY:                                           │
│  ├─ 82mm + 120mm coverage (Vietnamese inventory)                  │
│  ├─ Complete indirect fire team training                          │
│  ├─ Soviet/Eastern doctrine compatible                            │
│  ├─ Affordable ($80-120K vs $150-250K Western)                   │
│  └─ Gateway to Artillery FOS product                              │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 6. SYNERGY ANALYSIS

### 6.1 Platform Synergy

```
COMPONENT REUSE ANALYSIS:
══════════════════════════════════════════════════════════════════════

FROM VN-SAMT-001 (Small Arms):
┌─────────────────────────────────────────────────────────────────────┐
│  Component                      │ Reuse % │ Savings              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ Simulation engine (Unity)       │   60%   │  $9,000              │
│ Instructor station framework    │   70%   │  $5,600              │
│ After-Action Review system      │   60%   │  $4,800              │
│ Database/reporting              │   80%   │  $2,400              │
│ Vietnamese localization         │   90%   │  $2,700              │
│ Audio framework                 │   40%   │  $800                │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL SAMT SYNERGY           │   ~65%  │  $25,300             │
└─────────────────────────────────┴─────────┴──────────────────────┘

FROM VN-MGT-001 (Machine Gun):
┌─────────────────────────────────────────────────────────────────────┐
│  Component                      │ Reuse % │ Savings              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ Terrain rendering               │   50%   │  $3,000              │
│ Environmental effects           │   60%   │  $1,800              │
├─────────────────────────────────┼─────────┼──────────────────────┤
│ SUBTOTAL MGT SYNERGY            │   ~55%  │  $4,800              │
└─────────────────────────────────┴─────────┴──────────────────────┘

TOTAL ESTIMATED SYNERGY SAVINGS: ~$30,100
```

### 6.2 Unique Development Required

```
MORTAR-SPECIFIC DEVELOPMENT:
══════════════════════════════════════════════════════════════════════

UNIQUE COMPONENTS (NEW):
┌─────────────────────────────────────────────────────────────────────┐
│  • Indirect fire ballistics model                                  │
│  • Mortar trajectory calculation                                   │
│  • Charge-based range tables                                       │
│  • MET (meteorological) corrections                               │
│  • Probable error modeling                                         │
│  • FDC computation engine                                          │
│  • Plotting board simulation                                       │
│  • MBC (Mortar Ballistic Computer) interface                      │
│  • Call for fire protocol system                                  │
│  • Radio communication simulation                                  │
│  • FO station with observation tools                              │
│  • Mortar replica hardware (82mm, 120mm)                          │
│  • Sight simulation with sensors                                   │
│  • Round/charge detection                                          │
│  • Burst effect visualization                                      │
│  • Sheaf pattern generation                                        │
└─────────────────────────────────────────────────────────────────────┘

ESTIMATED UNIQUE DEVELOPMENT: ~$75,000

NOTE: Mortar requires MORE new development than RPG/MANPADS
      because indirect fire is completely new capability cluster
```

### 6.3 Future Synergy (Mortar → Artillery)

```
MORTAR AS FOUNDATION FOR ARTILLERY FOS:
══════════════════════════════════════════════════════════════════════

MORTAR TRAINER ENABLES:
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  VN-MRT-001 (Mortar)  ────────────────► VN-AFO-001 (Artillery FOS) │
│                                                                     │
│  Shared Components:                                                 │
│  ├─ FO station and procedures (80% reuse)                         │
│  ├─ Call for fire protocol (90% reuse)                            │
│  ├─ FDC computation engine (70% reuse)                            │
│  ├─ Indirect fire ballistics (60% reuse, scale up)               │
│  ├─ Burst observation/adjustment (85% reuse)                      │
│  └─ AAR for indirect fire (75% reuse)                             │
│                                                                     │
│  Artillery FOS adds:                                                │
│  ├─ Extended range ballistics (15+ km)                            │
│  ├─ Multiple battery coordination                                  │
│  ├─ Artillery-specific ammo types                                  │
│  └─ Integration with artillery units                               │
│                                                                     │
│  ESTIMATED SYNERGY TO ARTILLERY FOS: ~60% ($60,000 savings)       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 7. COST ESTIMATE

### 7.1 R&D Cost

```
VN-MRT-001 DEVELOPMENT COST:
══════════════════════════════════════════════════════════════════════

SOFTWARE DEVELOPMENT:
├─ Indirect fire ballistics engine: $12,000
├─ Mortar trajectory model: $8,000
├─ Charge/range calculation: $5,000
├─ MET corrections system: $6,000
├─ FDC computation module: $10,000
├─ Plotting board simulation: $5,000
├─ MBC interface: $4,000
├─ Call for fire system: $6,000
├─ Radio communication sim: $4,000
├─ Burst effect visualization: $6,000
├─ Sheaf pattern generator: $4,000
├─ Scenario generator: $5,000
├─ Integration: $5,000
├─ Testing/validation: $5,000
└─ Content development: $5,000
                                 ─────────
Subtotal Software:               $90,000

HARDWARE DEVELOPMENT:
├─ 82mm mortar replica: $6,000
├─ 120mm mortar replica: $8,000
├─ Sight simulation + sensors: $4,000
├─ Simulated rounds + charge: $3,000
├─ FO station (binos, radio): $4,000
├─ FDC workstations: $3,000
└─ Integration: $2,000
                                 ─────────
Subtotal Hardware:               $30,000

SYNERGY SAVINGS:                 -$30,100

CONTINGENCY (15%):               $13,500

TOTAL R&D INVESTMENT:            ~$103,400 (with synergy)
══════════════════════════════════════════════════════════════════════

COMPARISON:
├─ With synergy: $103,400
├─ Standalone development: $145,000
└─ SAVINGS: $41,600 (29%)

NOTE: Lower synergy than RPG (29% vs 62%) because mortar is
      NEW CAPABILITY CLUSTER (indirect fire vs direct fire)
```

### 7.2 Bill of Materials (Integrated Standard)

| Category | Component | Qty | Unit Cost | Total |
|----------|-----------|-----|-----------|-------|
| **FO Station** | Terrain display (65") | 1 | $2,000 | $2,000 |
| **FO Station** | Simulated binoculars | 1 | $1,500 | $1,500 |
| **FO Station** | Radio handset | 1 | $500 | $500 |
| **FDC** | Computer workstations | 2 | $2,500 | $5,000 |
| **FDC** | Plotting board replicas | 2 | $800 | $1,600 |
| **FDC** | Map display (55") | 1 | $1,500 | $1,500 |
| **Mortars** | 82mm mortar replica | 4 | $3,000 | $12,000 |
| **Mortars** | Simulated rounds (set) | 4 | $500 | $2,000 |
| **Computing** | Simulation server | 1 | $5,000 | $5,000 |
| **Display** | Target area projection | 1 | $6,000 | $6,000 |
| **Instructor** | IOS workstation | 1 | $3,000 | $3,000 |
| **Audio** | Sound system | 1 | $2,000 | $2,000 |
| **Software** | License (per system) | 1 | $5,000 | $5,000 |
| **Comms** | Radio simulation | 1 | $2,000 | $2,000 |
| **Infrastructure** | Mounting, cables | 1 | $2,000 | $2,000 |
| **Contingency** | 15% | - | - | $7,700 |
| **TOTAL BOM** | - | - | - | **~$59,000** |

### 7.3 Pricing Strategy

| Configuration | BOM Cost | Margin | Unit Price | Note |
|---------------|----------|--------|------------|------|
| **FDC Desk Trainer** | $25,000 | 55% | $55,000 | Basic |
| **Integrated Standard** | $59,000 | 45% | **$107,000** ⭐ | Main |
| **Multi-Platoon** | $95,000 | 40% | $158,000 | Premium |
| **Mobile Field** | $45,000 | 45% | $82,000 | Outdoor |

---

## 8. MARKET SIZE ESTIMATE

```
VIETNAM MARKET SIZE ANALYSIS:
══════════════════════════════════════════════════════════════════════

SEGMENT 1: INFANTRY BATTALIONS
├─ Infantry battalions with mortar platoon: 80-100
├─ Target penetration: 40%
├─ Configuration: Integrated Standard
├─ Potential: 32-40 systems
└─ Revenue: $3.4-4.3M

SEGMENT 2: TRAINING CENTERS/SCHOOLS
├─ Infantry schools: 8-12
├─ Artillery schools: 3-5
├─ NCO academies: 5-8
├─ Configuration: Multi-Platoon Premium
├─ Potential: 16-25 systems
└─ Revenue: $2.5-4.0M

SEGMENT 3: MECHANIZED/ARMOR UNITS
├─ Mechanized battalions: 20-30
├─ Target penetration: 30%
├─ Configuration: Integrated Standard
├─ Potential: 6-9 systems
└─ Revenue: $0.6-1.0M

SEGMENT 4: MARINE/SPECIAL FORCES
├─ Marine battalions: 5-8
├─ SF with organic mortars: 3-5
├─ Configuration: Mobile Field
├─ Potential: 5-10 systems
└─ Revenue: $0.4-0.8M

TOTAL VIETNAM MARKET (10-year):
├─ Systems: 59-84 units
├─ Revenue: $6.9-10.1M
└─ Average per year: $690K-1.0M/year
══════════════════════════════════════════════════════════════════════

EXPORT POTENTIAL:
├─ ASEAN (Laos, Cambodia, Myanmar): 12-20 units
├─ Africa (mortar users): 15-25 units
├─ Additional revenue: $3-5M
```

---

## 9. REQUIREMENTS LIST (PRELIMINARY)

### 9.1 Functional Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **F-001** | Simulate 82mm mortar | MUST | Full platoon (4-6) |
| **F-002** | Simulate 120mm mortar | MUST | Full section (4-6) |
| **F-003** | Forward Observer station | MUST | Complete FO functions |
| **F-004** | Fire Direction Center | MUST | 2 computer positions |
| **F-005** | Call for fire procedures | MUST | Grid, polar, shift |
| **F-006** | FDC computation | MUST | Plotting + MBC |
| **F-007** | Indirect fire ballistics | MUST | All charges |
| **F-008** | MET corrections | MUST | Wind, temp, density |
| **F-009** | HE, Smoke, Illum ammo | MUST | All effects |
| **F-010** | Burst visualization | MUST | Impact + effects |
| **F-011** | Adjustment procedures | MUST | All methods |
| **F-012** | Team communication | MUST | FO-FDC-Crew |
| **F-013** | Day/night operation | MUST | Variable lighting |
| **F-014** | Vietnamese language | MUST | Complete UI |
| **F-015** | 60mm light mortar | WISH | Company level |
| **F-016** | Artillery integration | WISH | Future expansion |

### 9.2 Performance Requirements

| ID | Requirement | MUST/WISH | Quantification |
|----|-------------|-----------|----------------|
| **P-001** | Visual frame rate | MUST | ≥60 FPS |
| **P-002** | Ballistic accuracy | MUST | ±1% vs firing tables |
| **P-003** | Round time | MUST | Real-time or faster |
| **P-004** | MTBF | MUST | >2000 hours |

---

## 10. CRITICAL QUESTIONS

```
8 CRITICAL QUESTIONS FOR VN-MRT-001:
══════════════════════════════════════════════════════════════════════

QUESTION 1: MORTAR CALIBERS
┌─────────────────────────────────────────────────────────────────────┐
│  Which calibers to include?                                         │
│                                                                     │
│  □ A) 82mm only (battalion level)                                  │
│  □ B) 82mm + 120mm ⭐ RECOMMENDED                                  │
│  □ C) 60mm + 82mm + 120mm (complete)                               │
│                                                                     │
│  Impact: Development scope, training coverage                       │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 2: TRAINING SCOPE
┌─────────────────────────────────────────────────────────────────────┐
│  Which elements to train?                                           │
│                                                                     │
│  □ A) FDC only                                                     │
│  □ B) FDC + Crew (no FO)                                           │
│  □ C) Complete FO + FDC + Crew ⭐ RECOMMENDED                      │
│                                                                     │
│  Impact: System complexity, training value                          │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 3: PRIMARY CONFIGURATION
┌─────────────────────────────────────────────────────────────────────┐
│  What configuration as main product?                                │
│                                                                     │
│  □ A) FDC Desk Trainer ($55K)                                      │
│  □ B) Integrated Standard ($107K) ⭐ RECOMMENDED                   │
│  □ C) Multi-Platoon Premium ($158K)                                │
│  □ D) Mobile Field ($82K)                                          │
│                                                                     │
│  Impact: Price point, facility requirements                         │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 4: NUMBER OF MORTARS
┌─────────────────────────────────────────────────────────────────────┐
│  How many mortar replicas per system?                              │
│                                                                     │
│  □ A) 2 mortars (demo/basic)                                       │
│  □ B) 4 mortars (standard platoon) ⭐ RECOMMENDED                  │
│  □ C) 6 mortars (full platoon)                                     │
│                                                                     │
│  Impact: Cost, training realism                                     │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 5: DEVELOPMENT SEQUENCE
┌─────────────────────────────────────────────────────────────────────┐
│  When to develop Mortar Trainer?                                    │
│                                                                     │
│  □ A) After SAMT + MGT + RPG ⭐ RECOMMENDED                        │
│  □ B) After SAMT + MGT + MPADS                                     │
│  □ C) Earlier (higher priority)                                    │
│                                                                     │
│  Impact: Synergy, resource allocation                               │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 6: ARTILLERY FOS INTEGRATION
┌─────────────────────────────────────────────────────────────────────┐
│  Plan for Artillery FOS integration?                                │
│                                                                     │
│  □ A) Standalone mortar only                                       │
│  □ B) Design for future ArtyFOS expansion ⭐ RECOMMENDED           │
│  □ C) Include ArtyFOS in same project                              │
│                                                                     │
│  Impact: Architecture, future development                           │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 7: BUDGET ENVELOPE
┌─────────────────────────────────────────────────────────────────────┐
│  Budget constraints?                                                │
│                                                                     │
│  R&D Budget:                                                        │
│  □ A) <$80,000 (minimal)                                           │
│  □ B) $80,000-120,000 ⭐ RECOMMENDED                               │
│  □ C) $120,000-150,000 (enhanced)                                  │
│                                                                     │
│  Target Unit Price:                                                 │
│  □ A) <$80,000                                                     │
│  □ B) $80,000-120,000 ⭐ RECOMMENDED                               │
│  □ C) $120,000-180,000                                             │
└─────────────────────────────────────────────────────────────────────┘

QUESTION 8: TIMELINE
┌─────────────────────────────────────────────────────────────────────┐
│  Target completion?                                                 │
│                                                                     │
│  □ A) 10 months                                                    │
│  □ B) 12 months ⭐ RECOMMENDED                                     │
│  □ C) 15 months                                                    │
│                                                                     │
│  Note: Mortar is more complex (new indirect fire cluster)          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 11. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Indirect fire ballistics complexity | MEDIUM | HIGH | Validate with firing tables |
| FDC procedure differences (Soviet vs NATO) | MEDIUM | MEDIUM | Focus on Vietnamese doctrine |
| Mortar replica manufacturing | LOW | MEDIUM | Partner with local manufacturer |
| Competition from Zen/InVeris | MEDIUM | LOW | Focus on Eastern calibers |
| Integration complexity (3 elements) | MEDIUM | MEDIUM | Phased development |
| Longer development time | MEDIUM | LOW | Plan for 12 months |

**Overall Risk Level: MEDIUM** (New capability cluster, higher complexity)

---

## 12. SUMMARY & RECOMMENDATION

### 12.1 Product Summary

| Aspect | Value |
|--------|-------|
| **Product** | Mortar Fire Control Training Simulator |
| **Code** | VN-MRT-001 |
| **Calibers** | 82mm (primary) + 120mm |
| **Elements** | FO + FDC + Mortar Crew |
| **Market Size** | 59-84 systems ($6.9-10.1M Vietnam) |
| **Export Potential** | 27-45 systems ($3-5M) |
| **Unit Price** | $55,000-158,000 |
| **R&D Cost** | ~$103,400 (with synergy) |
| **Timeline** | 12 months |
| **Risk Level** | MEDIUM |
| **Priority** | ⭐⭐⭐⭐ HIGH |

### 12.2 Strategic Recommendation

```
RECOMMENDATION: DEVELOP VN-MRT-001 AFTER RPG (6th Product)
══════════════════════════════════════════════════════════════════════

RATIONALE:
1. OPENS NEW CLUSTER: Gateway to indirect fire products
2. BATTALION ESSENTIAL: Every infantry battalion has mortars
3. ARTILLERY BRIDGE: 60% synergy to Artillery FOS
4. UNIQUE CAPABILITY: Soviet/Eastern 82mm focus
5. LONGER TIMELINE: 12 months (new capability cluster)

RECOMMENDED SEQUENCE:
┌─────────────────────────────────────────────────────────────────────┐
│  Direct Fire Products:                                              │
│  SAMT → MGT → RPG → MPADS (faster development)                     │
│                                                                     │
│  Indirect Fire Products:                                            │
│  MORTAR → Artillery FOS → Joint Fires (new cluster)                │
└─────────────────────────────────────────────────────────────────────┘

CONFIGURATION: Integrated Standard @ $107,000
CALIBERS: 82mm + 120mm
ELEMENTS: Complete FO + FDC + 4 Mortars

UNIQUE VALUE:
├─ Vietnamese 82mm/120mm specific training
├─ Complete indirect fire team (FO-FDC-Crew)
├─ Soviet/Eastern doctrine compatible
├─ Foundation for Artillery FOS product
└─ 29% cost savings vs standalone

KEY MESSAGE:
"Train your complete mortar team - Forward Observer,
Fire Direction Center, and Mortar Crews - together
in realistic indirect fire scenarios, building the
teamwork essential for accurate fire support."
```

---

## 13. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-24 | Claude AI | Initial Phase 1 document |

---

**END OF DOCUMENT**

*This document follows Pahl & Beitz systematic design methodology for Phase 1: Task Clarification. Proceed to Phase 2: Conceptual Design after stakeholder input on critical questions.*
