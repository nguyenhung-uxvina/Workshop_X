# VN-GLT-001 CONCEPTUAL DESIGN
## Grenade Launcher Training System | Hệ Thống Huấn Luyện Súng Phóng Lựu

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-GLT-001 Grenade Launcher Training System                  │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. STRATEGIC CONTEXT

### 1.1 Weapon Platforms

**AUTOMATIC GRENADE LAUNCHERS:**
- AGS-17 Plamya (30mm) - Tripod mounted, belt-fed
- AGS-30 (30mm) - Lightweight successor

**UNDER-BARREL GRENADE LAUNCHERS:**
- GP-25/GP-30 Kostyor (40mm) - Under-barrel for AK
- M203 (40mm) - Reference for interoperability

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC VALUE                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  • VOG-17 (30mm) grenade: $15-30 each                                      │
│  • VOG-25 (40mm) grenade: $20-40 each                                      │
│  • Training consumption: 100+ rounds/soldier/year                          │
│  • Simulator enables unlimited practice                                    │
│  • Market target: $65,000-$85,000                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. VDI 2225 EVALUATION

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Concept       │ Technical │ Economic │ Combined  │ Cost      │ Status     │
│                │ Value     │ Value    │ Strength  │           │            │
│  ═════════════╪═══════════╪══════════╪═══════════╪═══════════╪════════════│
│  A: Basic      │ 0.55      │ 1.00     │ 0.74      │ $45,000   │            │
│  B: Standard   │ 0.78      │ 0.95     │ 0.86      │ $72,000   │            │
│  C: Premium    │ 0.88      │ 0.00     │ 0.00      │ $125,000  │ Over budget│
│  D: Optimal    │ 0.82      │ 1.00     │ 0.91      │ $68,000   │ ✅ SELECTED│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. SELECTED CONCEPT

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    VN-GLT-001 SELECTED CONCEPT                              ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  CONCEPT D: OPTIMAL GRENADE LAUNCHER TRAINER - $68,000                     ║
║                                                                             ║
║  COMPONENTS:                                                                ║
║  ═══════════                                                                ║
║  1. AGS-17 STATION                                                          ║
║     • Full-weight AGS-17 replica on tripod                                 ║
║     • Traverse/elevation encoders                                          ║
║     • Optical sight simulation                                             ║
║     • Trigger mechanism with burst control                                 ║
║                                                                             ║
║  2. GP-25 STATION                                                           ║
║     • AK with GP-25 attachment (instrumented)                              ║
║     • Quadrant sight simulation                                            ║
║     • Range estimation training                                            ║
║                                                                             ║
║  3. DISPLAY & SIMULATION                                                    ║
║     • 55" display with terrain + targets                                   ║
║     • Grenade ballistic model (low velocity arc)                           ║
║     • Impact and burst radius visualization                                ║
║     • Area target engagement training                                      ║
║                                                                             ║
║  KEY FEATURES:                                                              ║
║  ═════════════                                                              ║
║  • 2 training stations (AGS-17 + GP-25)                                    ║
║  • Range: 50-1,700m (AGS-17), 50-400m (GP-25)                             ║
║  • Direct and indirect fire modes                                          ║
║  • Area target engagement scoring                                          ║
║  • Burst pattern simulation                                                ║
║                                                                             ║
║  COST: $68,000 (within $65K-$85K) ✅                                       ║
║  COMBINED STRENGTH: S = 0.91                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### Cost Breakdown

| Component | Cost | % |
|-----------|------|---|
| AGS-17 replica | $14,000 | 20.6% |
| GP-25 instrumented | $8,000 | 11.8% |
| Display system | $4,000 | 5.9% |
| Simulation server | $4,500 | 6.6% |
| Ballistic software | $15,000 | 22.1% |
| Visual rendering | $10,000 | 14.7% |
| Instructor station | $3,500 | 5.1% |
| Integration | $6,000 | 8.8% |
| Documentation | $3,000 | 4.4% |
| **TOTAL** | **$68,000** | 100% |

---

*VN-GLT-001 Grenade Launcher Trainer - Phase 2 Conceptual Design COMPLETE*
