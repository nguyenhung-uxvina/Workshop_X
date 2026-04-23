# VN-NVL-001 CONCEPTUAL DESIGN
## Naval Weapons Training System | Hệ Thống Huấn Luyện Vũ Khí Hải Quân

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-NVL-001 Naval Weapons Training System                     │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. INTRODUCTION & STRATEGIC CONTEXT

### 1.1 Product Overview

The VN-NVL-001 addresses naval gunnery and weapon system training for Vietnamese Navy vessels:

**WEAPON SYSTEMS:**
- Naval guns: AK-176 76mm, AK-630 30mm CIWS, AK-230 30mm
- Anti-ship missiles: Kh-35 Uran (SS-N-25)
- Torpedo systems: 533mm torpedo tubes
- Naval fire control systems

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC VALUE ASSESSMENT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. AMMUNITION COST                                                         │
│     • 76mm naval round: $200-500                                           │
│     • 30mm CIWS burst: $50-100/second                                      │
│     • Kh-35 missile: $500,000+                                             │
│     • Torpedo: $1-2 million                                                │
│     • Training at sea: Extremely expensive                                 │
│                                                                             │
│  2. OPERATIONAL CONSTRAINTS                                                 │
│     • Live firing requires designated sea areas                            │
│     • Weather/sea state dependencies                                       │
│     • Ship availability for training                                       │
│     • Simulator enables shore-based training                               │
│                                                                             │
│  3. CREW COORDINATION                                                       │
│     • Bridge-to-gun coordination                                           │
│     • Combat Information Center (CIC) procedures                           │
│     • Fire control system operation                                        │
│     • Anti-surface and anti-air warfare                                    │
│                                                                             │
│  4. MARKET OPPORTUNITY                                                      │
│     • Import options: $800K-$3M                                            │
│     • Vietnamese target: $200,000-$280,000                                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Requirements Summary

| Category | Requirement | Value | Priority |
|----------|-------------|-------|----------|
| **Weapons** | Gun systems | AK-176, AK-630, AK-230 | MUST |
| **Missiles** | ASM simulation | Kh-35 fire control | WISH |
| **Training Modes** | Configurations | Gun director + CIC | MUST |
| **Target Types** | Surface/air | Ships, boats, aircraft, missiles | MUST |
| **Sea State** | Simulation | Sea state 0-5 | MUST |
| **Ship Motion** | Platform | 6-DOF ship dynamics | MUST |
| **Unit Price** | Target | $200,000-$280,000 | MUST |

### 1.3 Reference Weapon Platforms

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TARGET NAVAL WEAPON SYSTEMS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NAVAL GUNS:                                                                │
│  ═══════════                                                                │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  AK-176 76mm Naval Gun - PRIMARY                                │       │
│  │  • Rate of fire: 120 rpm                                       │       │
│  │  • Range: 15.7 km (surface), 11 km (air)                       │       │
│  │  • Elevation: -15° to +85°                                     │       │
│  │  • Fire control: MR-123 Vympel radar                           │       │
│  │  • Mounted on: Gepard-class, Molniya-class                     │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  AK-630 30mm CIWS                                               │       │
│  │  • 6-barrel rotary cannon                                      │       │
│  │  • Rate of fire: 4,000-5,000 rpm                               │       │
│  │  • Range: 4 km (effective)                                     │       │
│  │  • Primary anti-missile defense                                │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
│  MISSILE SYSTEMS:                                                           │
│  ════════════════                                                           │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  Kh-35 Uran (SS-N-25 Switchblade)                               │       │
│  │  • Range: 130 km                                               │       │
│  │  • Sea-skimming profile                                        │       │
│  │  • Active radar homing                                         │       │
│  │  • Fire control training focus                                 │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. ABSTRACTION - ESSENTIAL PROBLEM

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                         ESSENTIAL PROBLEM STATEMENT                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  REPLICATE naval weapon system operation and engagement                     ║
║                                                                             ║
║  INCLUDING fire control, platform motion compensation, and target tracking  ║
║                                                                             ║
║  FOR developing naval gunnery proficiency and CIC coordination              ║
║                                                                             ║
║  WITHOUT live ordnance, ship time, or designated sea areas                  ║
║                                                                             ║
║  WHILE simulating realistic sea conditions and multi-target scenarios       ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 3. FUNCTION STRUCTURE

### 3.1 System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    NAVAL WEAPONS TRAINER ARCHITECTURE                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  COMBAT INFORMATION CENTER (CIC) STATION                             │   │
│  │  ════════════════════════════════════════                            │   │
│  │  • Tactical display (radar picture)                                 │   │
│  │  • Track management console                                          │   │
│  │  • Weapon assignment panel                                           │   │
│  │  • Communication interfaces                                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              │ Target designation                           │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  FIRE CONTROL STATION                                                │   │
│  │  ════════════════════════                                            │   │
│  │  • Fire control radar simulation (MR-123)                           │   │
│  │  • Target tracking display                                           │   │
│  │  • Engagement parameters                                             │   │
│  │  • Fire authorization panel                                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              │ Firing commands                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  GUN DIRECTOR STATION                                                │   │
│  │  ════════════════════════                                            │   │
│  │  • AK-176 gun director replica                                      │   │
│  │  • Manual tracking handwheels                                        │   │
│  │  • Optical sight simulation                                          │   │
│  │  • Auto/manual mode selection                                        │   │
│  │  • Trigger mechanism                                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  SIMULATION ENGINE                                                   │   │
│  │  ════════════════════════                                            │   │
│  │  • Ship motion model (6-DOF)                                        │   │
│  │  • Naval ballistics (shell + sea state)                             │   │
│  │  • Target motion generation                                          │   │
│  │  • Fire control radar model                                          │   │
│  │  • Impact assessment                                                 │   │
│  │  • Visual scene (sea + targets)                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  INSTRUCTOR STATION                                                  │   │
│  │  • Scenario control (targets, sea state, weather)                   │   │
│  │  • Real-time monitoring                                             │   │
│  │  • Inject events (jamming, casualties)                              │   │
│  │  • AAR with engagement replay                                       │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Naval-Specific Considerations

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    NAVAL TRAINING SPECIAL REQUIREMENTS                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. SHIP MOTION COMPENSATION                                                │
│     ───────────────────────────                                             │
│     • Roll, pitch, yaw, heave, surge, sway                                 │
│     • Gun stabilization simulation                                         │
│     • Firing solution adjustment                                           │
│     • Sea state 0-5 simulation                                             │
│                                                                             │
│  2. NAVAL BALLISTICS                                                        │
│     ───────────────────                                                     │
│     • Shell trajectory over water                                          │
│     • Wind effect at sea                                                   │
│     • Splash patterns for near-misses                                      │
│     • Time of flight to moving targets                                     │
│                                                                             │
│  3. FIRE CONTROL RADAR                                                      │
│     ────────────────────                                                    │
│     • MR-123 Vympel simulation                                             │
│     • Target acquisition and lock                                          │
│     • Track-while-scan                                                     │
│     • Clutter and jamming effects                                          │
│                                                                             │
│  4. ENGAGEMENT TYPES                                                        │
│     ──────────────────                                                      │
│     • Anti-surface: Ship, FAC, small boat                                  │
│     • Anti-air: Aircraft, helicopter, missile                              │
│     • Shore bombardment                                                    │
│     • CIWS anti-missile defense                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. CONCEPT EVALUATION (VDI 2225)

### 4.1 Concepts Generated

| Concept | Description | Est. Cost | Configuration |
|---------|-------------|-----------|---------------|
| **A: Basic** | Gun director only | $120,000 | Simple gunnery trainer |
| **B: Standard** | Gun + Fire control | $195,000 | FC radar + gun director |
| **C: Premium** | Full CIC integration | $380,000 | Complete combat system |
| **D: Optimal** | Balanced system | $235,000 | CIC + FC + Gun director |

### 4.2 VDI 2225 Results

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Criterion              │ Wt   │ A    │ B    │ C    │ D                     │
│  ═══════════════════════╪══════╪══════╪══════╪══════╪═════════════════════  │
│  Gunnery Fidelity       │ 0.18 │ 3    │ 3    │ 4    │ 3                     │
│  Fire Control Sim       │ 0.16 │ 1    │ 4    │ 4    │ 4                     │
│  Ship Motion Model      │ 0.14 │ 2    │ 3    │ 4    │ 3                     │
│  CIC Integration        │ 0.12 │ 0    │ 1    │ 4    │ 3                     │
│  Cost Compliance        │ 0.15 │ 4    │ 4    │ 0    │ 3                     │
│  Target Variety         │ 0.10 │ 2    │ 3    │ 4    │ 3                     │
│  Maintainability        │ 0.08 │ 4    │ 3    │ 2    │ 3                     │
│  Expandability          │ 0.07 │ 2    │ 3    │ 4    │ 4                     │
│  ═══════════════════════╪══════╪══════╪══════╪══════╪═════════════════════  │
│  Technical Value (Wt)   │      │ 0.56 │ 0.78 │ 0.90 │ 0.83                  │
│  Economic Value (We)    │      │ 1.00 │ 1.00 │ 0.00 │ 0.92                  │
│  Combined Strength (S)  │      │ 0.75 │ 0.88 │ 0.00 │ 0.87                  │
│                                                                             │
│  Note: B narrowly beats D on combined strength due to lower cost           │
│  However, D selected for CIC integration (strategic training value)        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. SELECTED CONCEPT: OPTIMAL NAVAL WEAPONS TRAINER

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    VN-NVL-001 SELECTED CONCEPT                              ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  CONCEPT D: OPTIMAL NAVAL SYSTEM - $235,000                                ║
║                                                                             ║
║  STATIONS INCLUDED:                                                         ║
║  ══════════════════                                                         ║
║                                                                             ║
║  1. COMBAT INFORMATION CENTER (CIC)                                         ║
║     • 55" tactical display with radar picture                              ║
║     • Track management workstation                                         ║
║     • Weapon assignment interface                                          ║
║     • Communication panel (simulated)                                      ║
║                                                                             ║
║  2. FIRE CONTROL STATION                                                    ║
║     • MR-123 radar display simulation                                      ║
║     • Target tracking controls                                             ║
║     • Engagement parameter display                                         ║
║     • Fire authorization panel                                             ║
║                                                                             ║
║  3. GUN DIRECTOR STATION                                                    ║
║     • AK-176 director replica                                              ║
║     • Manual tracking handwheels (elevation + azimuth)                     ║
║     • Optical sight with stabilization                                     ║
║     • Fire control mode selector                                           ║
║     • Trigger mechanism                                                    ║
║                                                                             ║
║  4. VISUAL DISPLAY SYSTEM                                                   ║
║     • 180° curved display (3× projectors) OR 85" flat panel               ║
║     • Sea surface rendering with ship motion                               ║
║     • Target visualization (ships, aircraft)                               ║
║     • Shell splash effects                                                 ║
║                                                                             ║
║  5. SIMULATION ENGINE                                                       ║
║     • Intel Xeon + RTX 4080 (high demand rendering)                        ║
║     • 6-DOF ship motion model                                              ║
║     • Naval ballistic engine                                               ║
║     • Fire control radar model                                             ║
║     • Sea state 0-5 simulation                                             ║
║                                                                             ║
║  KEY SPECIFICATIONS:                                                        ║
║  ═══════════════════                                                        ║
║  • Weapon: AK-176 76mm (primary), AK-630 CIWS option                       ║
║  • Range: Up to 16 km surface, 11 km air                                   ║
║  • Ship motion: Full 6-DOF, sea state 0-5                                  ║
║  • Targets: Surface ships, FACs, aircraft, missiles                        ║
║  • Training stations: CIC + FC + Gun director + Instructor                 ║
║                                                                             ║
║  COST: $235,000 (within $200K-$280K) ✅                                    ║
║  COMBINED STRENGTH: S = 0.87                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### 5.1 Cost Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    COST BREAKDOWN - VN-NVL-001                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Component                        │ Cost       │ % of Total                │
│  ════════════════════════════════╪════════════╪═══════════════════════     │
│  CIC Station                      │ $8,000     │ 3.4%                      │
│  Fire Control Station             │ $12,000    │ 5.1%                      │
│  Gun Director replica             │ $35,000    │ 14.9%                     │
│  Visual display system            │ $18,000    │ 7.7%                      │
│  Simulation server                │ $12,000    │ 5.1%                      │
│  Network infrastructure           │ $4,000     │ 1.7%                      │
│  Instructor station               │ $5,000     │ 2.1%                      │
│  Software development:            │            │                           │
│    - Ship motion model            │ $20,000    │ 8.5%                      │
│    - Naval ballistic engine       │ $18,000    │ 7.7%                      │
│    - Fire control simulation      │ $22,000    │ 9.4%                      │
│    - Visual rendering (sea)       │ $18,000    │ 7.7%                      │
│    - CIC interface                │ $10,000    │ 4.3%                      │
│  Target database                  │ $12,000    │ 5.1%                      │
│  Integration & testing            │ $25,000    │ 10.6%                     │
│  Documentation                    │ $8,000     │ 3.4%                      │
│  Contingency (5%)                 │ $8,000     │ 3.4%                      │
│  ════════════════════════════════╪════════════╪═══════════════════════     │
│  TOTAL                            │ $235,000   │ 100%                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. EXPANSION OPTIONS

| Module | Add-on Cost | Capability |
|--------|-------------|------------|
| AK-630 CIWS station | $45,000 | Anti-missile defense training |
| Kh-35 missile fire control | $55,000 | ASM engagement procedures |
| Motion platform base | $80,000 | Physical ship motion simulation |
| Second gun station | $40,000 | Dual-mount training |

---

*VN-NVL-001 Naval Weapons Training System - Phase 2 Conceptual Design COMPLETE*

**END OF DOCUMENT**
