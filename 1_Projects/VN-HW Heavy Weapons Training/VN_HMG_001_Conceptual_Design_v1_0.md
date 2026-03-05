# VN-HMG-001 CONCEPTUAL DESIGN
## Heavy Machine Gun Training System | Hệ Thống Huấn Luyện Đại Liên

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-HMG-001 Heavy Machine Gun Training System                 │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      COMPLETE                                                      │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 1. STRATEGIC CONTEXT

### Market Opportunity
- No domestic HMG simulator exists
- Import options: $180K-$350K
- Vietnamese target: $85,000-$105,000
- Ammunition savings: $5,000-15,000/crew/year

### Target Weapons
- DShK/DShKM (12.7×108mm) - PRIMARY
- NSV (12.7×108mm)  
- PKM (7.62×54mmR)
- ZU-23-2 (23×152mm) for AA training

## 2. ESSENTIAL PROBLEM

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  REPLICATE heavy automatic weapon engagement experience                     ║
║  INCLUDING sustained fire, target tracking, and burst control               ║
║  FOR developing gunner proficiency in ground and air defense                ║
║  WITHOUT ammunition consumption, weapon wear, or range constraints          ║
║  WHILE providing realistic feedback and objective assessment                ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

## 3. VDI 2225 EVALUATION

| Concept | Technical | Economic | Combined | Cost | Status |
|---------|-----------|----------|----------|------|--------|
| A: Basic | 0.44 | 1.00 | 0.66 | $55K | |
| B: Standard | 0.83 | 1.00 | 0.91 | $92K | |
| C: Premium | 0.90 | 0.00 | 0.00 | $158K | Over budget |
| **D: Optimal** | **0.83** | **1.00** | **0.91** | **$88K** | **✅ SELECTED** |

## 4. SELECTED CONCEPT

```
╔═════════════════════════════════════════════════════════════════════════════╗
║  VN-HMG-001 OPTIMAL HMG TRAINER - $88,000                                  ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  COMPONENTS:                                                                ║
║  • DShK/NSV replica (full weight ~30kg)                                    ║
║  • Traverse/elevation encoders                                             ║
║  • Vibration motor (100W) for recoil                                       ║
║  • Barrel heat LED indicator                                               ║
║  • 85" 4K display (120Hz)                                                  ║
║  • Intel i7 + RTX 4070 simulation server                                   ║
║                                                                             ║
║  FEATURES:                                                                  ║
║  • Fire rate: 600-800 rpm simulation                                       ║
║  • Range: 2,000m ground, 1,500m air                                        ║
║  • Dispersion cone ballistic model                                         ║
║  • Tracer visualization (every 5th round)                                  ║
║  • Barrel heating with accuracy degradation                                ║
║  • Ground & air targets (vehicles, helicopters, UAVs)                      ║
║                                                                             ║
║  COST: $88,000 (within $85K-$105K) ✅                                      ║
║  COMBINED STRENGTH: S = 0.91                                               ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---
*VN-HMG-001 Phase 2 Conceptual Design - COMPLETE*
