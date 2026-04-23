# VN-MRT-001 CONCEPTUAL DESIGN
## Mortar Training System | Hệ Thống Huấn Luyện Cối

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-MRT-001 Mortar Training System                            │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. INTRODUCTION & STRATEGIC CONTEXT

### 1.1 Product Overview

The VN-MRT-001 addresses training needs for indirect fire weapons - mortars (60mm, 82mm, 120mm). Mortar training is fundamentally different from direct-fire weapons as it requires:

- **Indirect fire procedures** (FO calls, fire direction center)
- **Ballistic calculations** (charge selection, elevation, deflection)
- **Crew coordination** (gunner, assistant gunner, ammo bearer)
- **Adjustment techniques** (bracketing, creeping fire)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC VALUE ASSESSMENT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  WHY MORTAR TRAINING SIMULATOR IS HIGH PRIORITY:                           │
│  ═══════════════════════════════════════════════                            │
│                                                                             │
│  1. AMMUNITION COST SAVINGS                                                 │
│     • 82mm mortar round: ~$150-300 per shot                                │
│     • 120mm mortar round: ~$400-800 per shot                               │
│     • Training consumption: 500+ rounds/year per unit                      │
│     • Simulator enables unlimited fire missions at fixed cost              │
│                                                                             │
│  2. RANGE LIMITATIONS                                                       │
│     • Live mortar firing requires large impact areas                       │
│     • Safety fans extend several kilometers                                │
│     • Simulator enables training in any facility                           │
│                                                                             │
│  3. CREW COORDINATION                                                       │
│     • Fire Direction Center (FDC) procedures                               │
│     • Forward Observer (FO) call-for-fire                                  │
│     • Gun crew drills                                                      │
│     • All can be trained simultaneously                                    │
│                                                                             │
│  4. MARKET OPPORTUNITY                                                      │
│     • No domestic mortar simulator exists                                  │
│     • Import options: $200K-$400K                                          │
│     • Vietnamese solution target: $95,000-$120,000                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Requirements Summary

| Category | Requirement | Value | Priority |
|----------|-------------|-------|----------|
| **Weapons** | Mortar types | 60mm, 82mm, 120mm | MUST |
| **Training Positions** | Crew positions | FO + FDC + Gun crew (3) | MUST |
| **Range Simulation** | Max range | 6,000m (120mm) | MUST |
| **Ballistic Model** | Indirect fire | Full trajectory with wind | MUST |
| **Fire Missions** | Types | Adjust fire, FFE, illumination | MUST |
| **Terrain** | Database | Vietnam tactical areas | MUST |
| **Unit Price** | Target cost | $95,000-$120,000 | MUST |

### 1.3 Reference Weapon Platforms

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TARGET MORTAR PLATFORMS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  60mm Mortar (M6/Type 63)                                       │       │
│  │  • Max range: 1,500-2,000m                                      │       │
│  │  • Rate of fire: 20-30 rpm                                      │       │
│  │  • Company-level asset                                          │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  82mm Mortar (Type 67/2B14 Podnos) - PRIMARY                    │       │
│  │  • Max range: 3,000-4,000m                                      │       │
│  │  • Rate of fire: 15-25 rpm                                      │       │
│  │  • Battalion-level asset                                        │       │
│  └─────────────────────────────────────────────────────────────────┘       │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────┐       │
│  │  120mm Mortar (2S12 Sani/PM-120)                                │       │
│  │  • Max range: 5,700-7,100m                                      │       │
│  │  • Rate of fire: 10-15 rpm                                      │       │
│  │  • Regiment-level asset                                         │       │
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
║  REPLICATE the complete indirect fire engagement cycle                      ║
║                                                                             ║
║  INCLUDING target acquisition, fire direction, ballistic calculation,       ║
║  gun laying, and fire adjustment                                            ║
║                                                                             ║
║  FOR developing mortar crew proficiency and fire team coordination          ║
║                                                                             ║
║  WITHOUT live ordnance or dedicated impact ranges                           ║
║                                                                             ║
║  WHILE enabling rapid iteration and objective assessment                    ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 3. FUNCTION STRUCTURE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MORTAR TRAINING SYSTEM ARCHITECTURE                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    FORWARD OBSERVER STATION                          │   │
│  │  • Binocular view simulation (monitor)                               │   │
│  │  • Map display with grid overlay                                     │   │
│  │  • Radio communication interface                                     │   │
│  │  • Call-for-fire input terminal                                      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │ Radio (simulated)                            │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    FIRE DIRECTION CENTER (FDC)                       │   │
│  │  • Firing chart / digital map                                        │   │
│  │  • Ballistic computer simulation                                     │   │
│  │  • Charge selection tables                                           │   │
│  │  • Fire commands generation                                          │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │ Fire commands                                │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    MORTAR GUN STATION                                │   │
│  │  • Instrumented mortar tube replica                                  │   │
│  │    - Elevation sensor (0-89°)                                        │   │
│  │    - Deflection sensor (0-6400 mils)                                 │   │
│  │    - Firing mechanism sensor                                         │   │
│  │  • Sight unit simulation                                             │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │ Firing data                                  │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    SIMULATION ENGINE                                 │   │
│  │  • Ballistic trajectory calculation                                  │   │
│  │  • Wind/met effects modeling                                         │   │
│  │  • Terrain interaction                                               │   │
│  │  • Impact visualization (Unity 3D)                                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    INSTRUCTOR STATION                                │   │
│  │  • Scenario control, monitoring, AAR                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. CONCEPT EVALUATION (VDI 2225)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Concept       │ Technical │ Economic │ Combined  │ Cost      │ Status     │
│                │ Value     │ Value    │ Strength  │           │            │
│  ═════════════╪═══════════╪══════════╪═══════════╪═══════════╪════════════│
│  A: Basic      │ 0.53      │ 1.00     │ 0.73      │ $72,000   │            │
│  B: Standard   │ 0.83      │ 0.92     │ 0.87      │ $108,000  │            │
│  C: Premium    │ 0.88      │ 0.00     │ 0.00      │ $165,000  │ Over budget│
│  D: Optimal    │ 0.85      │ 1.00     │ 0.92      │ $98,000   │ ✅ SELECTED│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. SELECTED CONCEPT: OPTIMAL MORTAR TRAINER

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    VN-MRT-001 SELECTED CONCEPT                              ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  CONCEPT D: OPTIMAL MORTAR TRAINER - $98,000                               ║
║                                                                             ║
║  STATIONS:                                                                  ║
║  ═════════                                                                  ║
║  1. Forward Observer Station                                                ║
║     • 32" monitor with binocular view                                      ║
║     • Digital map with grid overlay                                        ║
║     • Call-for-fire interface                                              ║
║                                                                             ║
║  2. Fire Direction Center                                                   ║
║     • Dual monitor (map + computation)                                     ║
║     • Digital fire direction computer                                      ║
║     • Firing chart generation                                              ║
║                                                                             ║
║  3. Mortar Gun Station                                                      ║
║     • 82mm mortar tube replica                                             ║
║     • Elevation encoder (0.1 mil)                                          ║
║     • Deflection encoder (0.1 mil)                                         ║
║     • Sight unit with crosslevel                                           ║
║     • Firing trigger sensor                                                ║
║                                                                             ║
║  4. Simulation Engine                                                       ║
║     • Intel i7 + RTX 4060                                                  ║
║     • Point-mass ballistic model                                           ║
║     • Vietnam terrain (50m res)                                            ║
║     • Unity 3D visualization                                               ║
║                                                                             ║
║  KEY SPECS:                                                                 ║
║  ══════════                                                                 ║
║  • Mortars: 60mm, 82mm, 120mm                                              ║
║  • Max range: 7,000m                                                       ║
║  • Fire missions: Adjust, FFE, illumination, smoke                         ║
║  • Network latency: ≤100ms                                                 ║
║                                                                             ║
║  COST: $98,000 (within $95K-$120K target) ✅                               ║
║  COMBINED STRENGTH: S = 0.92                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

*VN-MRT-001 Phase 2 Conceptual Design - COMPLETE*
