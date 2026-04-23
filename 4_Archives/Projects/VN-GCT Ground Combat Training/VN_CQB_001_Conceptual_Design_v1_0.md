# VN-CQB-001 CONCEPTUAL DESIGN
## Close Quarters Battle / MOUT Training System
## Hệ Thống Huấn Luyện Tác Chiến Cận Chiến / Đô Thị

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-CQB-001 Close Quarters Battle Training System             │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. STRATEGIC CONTEXT

### 1.1 Product Overview

The VN-CQB-001 addresses specialized training for:
- Room clearing and building assault
- Hostage rescue operations
- Urban combat (MOUT - Military Operations on Urban Terrain)
- Team movement and coordination
- Shoot/no-shoot decision making

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC VALUE ASSESSMENT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. TRAINING FACILITY LIMITATIONS                                           │
│     • MOUT facilities expensive to build and maintain                      │
│     • Limited scenarios in physical structures                             │
│     • Simulator enables unlimited scenario variations                      │
│                                                                             │
│  2. SAFETY CONCERNS                                                         │
│     • CQB training has high injury rate                                    │
│     • Simunition/UTM expensive ($0.50-1.00/round)                         │
│     • Simulator eliminates physical risk                                   │
│                                                                             │
│  3. SCENARIO FLEXIBILITY                                                    │
│     • Multiple building layouts                                            │
│     • Variable threat placement                                            │
│     • Civilian/hostage scenarios                                           │
│     • Low-light conditions                                                 │
│                                                                             │
│  4. MARKET OPPORTUNITY                                                      │
│     • Special Forces, Police tactical units                                │
│     • Import options: $200K-$500K                                          │
│     • Vietnamese target: $85,000-$120,000                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Requirements

| Category | Requirement | Value | Priority |
|----------|-------------|-------|----------|
| **Weapons** | Primary | AK, Glock, MP5 | MUST |
| **Team Size** | Simultaneous | 4 trainees | MUST |
| **Display** | Immersion | 180°+ projection | MUST |
| **Scenarios** | Types | Room clearing, hallway, stairwell | MUST |
| **Threats** | Targets | Armed, unarmed, hostage | MUST |
| **Decision** | Training | Shoot/no-shoot scenarios | MUST |
| **Unit Price** | Target | $85,000-$120,000 | MUST |

---

## 2. ESSENTIAL PROBLEM

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  REPLICATE close quarters battle and urban combat decision-making           ║
║  INCLUDING room clearing tactics, threat identification, and team movement  ║
║  FOR developing reflexive shooting skills and tactical judgment             ║
║  WITHOUT physical risk, Simunition cost, or facility limitations            ║
║  WHILE enabling varied scenarios and objective assessment                   ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 3. SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CQB TRAINER ARCHITECTURE                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  TRAINEE STATIONS (×4)                                               │   │
│  │  ════════════════════════                                            │   │
│  │  • Instrumented weapons (AK, Glock, MP5)                            │   │
│  │  • Laser emitter for hit detection                                   │   │
│  │  • Position tracking (body sensor vest)                              │   │
│  │  • Voice communication headset                                       │   │
│  │  • Haptic feedback vest (optional)                                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  IMMERSIVE DISPLAY SYSTEM                                            │   │
│  │  ════════════════════════════                                        │   │
│  │  • 180° curved projection screen (5m × 2.5m)                        │   │
│  │  • 3× short-throw projectors (5000 lumens)                          │   │
│  │  • Floor projection for room layout                                  │   │
│  │  • Low-light simulation capability                                   │   │
│  │  • 3D audio system (8 speakers)                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  SIMULATION ENGINE                                                   │   │
│  │  ════════════════════════                                            │   │
│  │  • Unity 3D with photorealistic interiors                           │   │
│  │  • AI threat actors (behavioral model)                              │   │
│  │  • Civilian/hostage AI                                              │   │
│  │  • Shot detection and hit registration                              │   │
│  │  • Player position tracking                                         │   │
│  │  • Low-latency rendering (<50ms)                                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                              │                                              │
│                              ▼                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  INSTRUCTOR STATION                                                  │   │
│  │  • Scenario selection (50+ building layouts)                        │   │
│  │  • Threat placement editor                                          │   │
│  │  • Real-time monitoring (all trainees)                              │   │
│  │  • Inject events (door breach, flashbang)                           │   │
│  │  • Shoot/no-shoot scoring                                           │   │
│  │  • AAR with multi-angle replay                                      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. VDI 2225 EVALUATION

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Concept       │ Technical │ Economic │ Combined  │ Cost      │ Status     │
│                │ Value     │ Value    │ Strength  │           │            │
│  ═════════════╪═══════════╪══════════╪═══════════╪═══════════╪════════════│
│  A: Basic      │ 0.55      │ 1.00     │ 0.74      │ $68,000   │            │
│  B: Standard   │ 0.78      │ 0.95     │ 0.86      │ $105,000  │            │
│  C: Premium    │ 0.92      │ 0.00     │ 0.00      │ $195,000  │ Over budget│
│  D: Optimal    │ 0.82      │ 1.00     │ 0.91      │ $98,000   │ ✅ SELECTED│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. SELECTED CONCEPT

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    VN-CQB-001 SELECTED CONCEPT                              ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  CONCEPT D: OPTIMAL CQB TRAINER - $98,000                                  ║
║                                                                             ║
║  KEY FEATURES:                                                              ║
║  ═════════════                                                              ║
║  • 4 trainee stations with instrumented weapons                            ║
║  • 180° curved projection (3× projectors)                                  ║
║  • Position tracking via body sensor vests                                 ║
║  • 50+ scenario templates (room, hallway, stairwell, building)            ║
║  • AI threats with behavioral modeling                                     ║
║  • Shoot/no-shoot decision training                                        ║
║  • 3D spatial audio for immersion                                          ║
║  • Low-light and flashbang simulation                                      ║
║  • Multi-angle AAR replay                                                  ║
║                                                                             ║
║  COST: $98,000 (within $85K-$120K) ✅                                      ║
║  COMBINED STRENGTH: S = 0.91                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### Cost Breakdown

| Component | Cost | % |
|-----------|------|---|
| Instrumented weapons (×6) | $12,000 | 12.2% |
| Position tracking system | $10,000 | 10.2% |
| Projection system (3×) | $15,000 | 15.3% |
| Projection screen (curved) | $8,000 | 8.2% |
| Audio system | $4,000 | 4.1% |
| Simulation server | $6,000 | 6.1% |
| Software development | $28,000 | 28.6% |
| Scenario database | $6,000 | 6.1% |
| Instructor station | $4,000 | 4.1% |
| Integration | $5,000 | 5.1% |
| **TOTAL** | **$98,000** | 100% |

---

*VN-CQB-001 Close Quarters Battle Trainer - Phase 2 Conceptual Design COMPLETE*
