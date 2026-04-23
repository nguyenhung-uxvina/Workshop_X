# VN-ATG-001 CONCEPTUAL DESIGN
## Anti-Tank Guided Missile Training System | Hệ Thống Huấn Luyện Tên Lửa Chống Tăng

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-ATG-001 Anti-Tank Guided Missile Trainer                  │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. STRATEGIC CONTEXT

### 1.1 Product Overview

The VN-ATG-001 addresses ATGM operator training for:
- 9M14 Malyutka (AT-3 Sagger) - Wire-guided MCLOS
- 9M113 Konkurs (AT-5 Spandrel) - Wire-guided SACLOS
- 9M133 Kornet (AT-14) - Laser beam-riding
- B-72 (if available)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC VALUE ASSESSMENT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. MISSILE COST                                                            │
│     • AT-3 Sagger: $5,000-10,000                                           │
│     • AT-5 Konkurs: $15,000-30,000                                         │
│     • AT-14 Kornet: $50,000-100,000                                        │
│     • Training missiles still expensive                                    │
│                                                                             │
│  2. OPERATOR SKILL CRITICALITY                                              │
│     • MCLOS requires continuous manual guidance                            │
│     • High skill degradation without practice                              │
│     • Simulator enables daily practice                                     │
│                                                                             │
│  3. SCENARIO FLEXIBILITY                                                    │
│     • Moving armored targets                                               │
│     • Multiple engagement distances (500-4000m)                            │
│     • Terrain masking scenarios                                            │
│     • Counter-measure simulation                                           │
│                                                                             │
│  4. MARKET OPPORTUNITY                                                      │
│     • Import options: $150K-$350K                                          │
│     • Vietnamese target: $75,000-$100,000                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Requirements

| Category | Requirement | Value | Priority |
|----------|-------------|-------|----------|
| **Missiles** | Types | AT-3, AT-5, Kornet | MUST |
| **Control** | MCLOS simulation | Full manual guidance | MUST |
| **Range** | Engagement | 500-4000m | MUST |
| **Targets** | Types | MBT, APC, static/moving | MUST |
| **Feedback** | Miss analysis | Impact point, flight path | MUST |
| **Unit Price** | Target | $75,000-$100,000 | MUST |

---

## 2. ESSENTIAL PROBLEM

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  REPLICATE ATGM guidance and engagement experience                          ║
║  INCLUDING manual flight control, target tracking, and guidance to impact   ║
║  FOR developing and maintaining operator proficiency                        ║
║  WITHOUT expending expensive missiles or range facilities                   ║
║  WHILE providing objective performance measurement                          ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

## 3. VDI 2225 EVALUATION

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Concept       │ Technical │ Economic │ Combined  │ Cost      │ Status     │
│                │ Value     │ Value    │ Strength  │           │            │
│  ═════════════╪═══════════╪══════════╪═══════════╪═══════════╪════════════│
│  A: Basic      │ 0.58      │ 1.00     │ 0.76      │ $55,000   │            │
│  B: Standard   │ 0.80      │ 0.95     │ 0.87      │ $92,000   │            │
│  C: Premium    │ 0.90      │ 0.00     │ 0.00      │ $165,000  │ Over budget│
│  D: Optimal    │ 0.83      │ 1.00     │ 0.91      │ $85,000   │ ✅ SELECTED│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. SELECTED CONCEPT

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    VN-ATG-001 SELECTED CONCEPT                              ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  CONCEPT D: OPTIMAL ATGM TRAINER - $85,000                                 ║
║                                                                             ║
║  COMPONENTS:                                                                ║
║  ═══════════                                                                ║
║  1. LAUNCHER REPLICA STATION                                                ║
║     • 9P135 launcher sight unit replica                                    ║
║     • Joystick guidance controller (MCLOS simulation)                      ║
║     • Trigger mechanism                                                    ║
║     • Periscopic sight simulation display                                  ║
║                                                                             ║
║  2. VISUAL DISPLAY                                                          ║
║     • 55" 4K display (target scene)                                        ║
║     • Sight display (magnified view)                                       ║
║     • Missile flight visualization                                         ║
║                                                                             ║
║  3. SIMULATION ENGINE                                                       ║
║     • Missile flight dynamics model                                        ║
║     • Wire guidance simulation                                             ║
║     • Target motion and terrain                                            ║
║     • Hit/miss assessment                                                  ║
║                                                                             ║
║  KEY FEATURES:                                                              ║
║  ═════════════                                                              ║
║  • MCLOS guidance simulation (AT-3 mode)                                   ║
║  • SACLOS guidance simulation (AT-5/Kornet mode)                           ║
║  • 2 operator stations                                                     ║
║  • Range: 500-4000m                                                        ║
║  • Moving targets: 0-50 km/h                                               ║
║  • Flight time simulation (up to 25 seconds)                               ║
║  • Miss distance analysis                                                  ║
║  • Instructor AAR with flight path replay                                  ║
║                                                                             ║
║  COST: $85,000 (within $75K-$100K) ✅                                      ║
║  COMBINED STRENGTH: S = 0.91                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### Cost Breakdown

| Component | Cost | % |
|-----------|------|---|
| Launcher replica (×2) | $16,000 | 18.8% |
| Guidance controller | $4,000 | 4.7% |
| Display systems | $6,000 | 7.1% |
| Simulation server | $5,000 | 5.9% |
| Missile dynamics software | $18,000 | 21.2% |
| Visual rendering | $12,000 | 14.1% |
| Target database | $6,000 | 7.1% |
| Instructor station | $4,000 | 4.7% |
| Integration & testing | $10,000 | 11.8% |
| Documentation | $4,000 | 4.7% |
| **TOTAL** | **$85,000** | 100% |

---

*VN-ATG-001 Anti-Tank Guided Missile Trainer - Phase 2 Conceptual Design COMPLETE*
