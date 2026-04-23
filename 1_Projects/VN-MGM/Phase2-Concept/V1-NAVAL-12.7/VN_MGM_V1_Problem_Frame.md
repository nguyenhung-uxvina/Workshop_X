---
created: 2026-04-10
type: problem-frame
block: BA
pipeline: helix-concept-generate v3.1
project: VN-MGM V1-NAVAL-12.7
mode: quick (retroactive)
status: COMPLETE
---

# BA Problem Frame — VN-MGM V1-NAVAL-12.7

## 1. Solution-Determining Sub-Functions

| Rank | SF | Sub-Function | Why Determines Architecture | V1 Choice (proven) |
|------|----|-----------|-----------------------------|-------------------|
| **1** | F4.1 | Decelerate weapon during recoil | Recoil path dictates structural member sizing, material, weld specifications. Change recoil concept → change entire structure. | **Rigid mount + structural margin** (S355, SF 1.5, no damper) |
| **2** | F2.1 | Support continuous rotation | Bearing type determines pedestal diameter, height, mounting interface, cost, maintenance. | **Slewing ring bearing** (single-row ball, Ø200mm PCD, $300-500) |

**Insight:** V1 chose the SIMPLEST solution for F4.1 (rigid, no damper) and the MOST ROBUST for F2.1 (slewing ring, not pintle). This combination = maximum reliability at moderate cost. Conservative FORCE-path decisions validated by 0 failures in 300 units.

## 2. TRIZ Contradictions (from HOQ Correlation Roof)

| # | Contradiction | Improving | Worsening | V1 Resolution | TRIZ Principle |
|---|-------------|-----------|-----------|---------------|---------------|
| **K1** | Traverse Speed vs Effort | DP1: faster traverse (°/s) | DP2: more effort (N·m) | V1 accepts ~30°/s manual limit. V5 resolves with motor (eliminates contradiction). | #15 Dynamicity: V5 adds motor mode while keeping manual fallback |
| **K2** | Mounting Speed vs Corrosion | DP8: quick-release mechanism | DP5: corrosion endurance | V1 uses 2 pins (simple, acceptable corrosion risk) + N10 grease maintenance. | #11 Cushion in advance: preventive maintenance (N10-MAINT-KIT) |

**Note:** V1 does NOT resolve K1 — it ACCEPTS the manual limit. K1 is the fundamental driver for V5-MOTORIZED. This is correct for a VARIANT: document the limitation, don't try to solve it within V1.

## 3. FORCE Path — Critical Design Chain

```
RECOIL EVENT (50 kN, 2 ms pulse, 600 rpm):

  Weapon ──→ Cradle (S355 welded) ──→ Trunnion pins (Ø20 steel)
     │                                       │
     │                                       ▼
     │                              Elevation mechanism (worm gear)
     │                                       │
     └────────────────────────── ──→ Pedestal column (S355 tube)
                                             │
                                             ▼
                                    Slewing ring bearing
                                             │
                                             ▼
                                    Base plate (S355)
                                             │
                                             ▼
                                    4× M16 bolts (8.8 grade)
                                             │
                                             ▼
                                    Ship deck (customer)

EVERY component in this chain: SF ≥ 1.5, 50,000 cycle fatigue life.
V1 achieves this with RIGID path (no damper, no elastomer, no hydraulic).
Simpler = fewer failure modes = higher reliability.
```

## 4. Why V1 Architecture is Correct (Retroactive Validation)

| Design Decision | Alternative Considered | Why V1 Choice is Better (proven) |
|----------------|----------------------|----------------------------------|
| Rigid recoil path | Elastomer damper (archive Var B) | No degradation over time. Elastomer stiffness varies -80% at 65°C (VN tropical). |
| Rigid recoil path | Hydraulic buffer (archive Var A) | No leak risk in salt environment. Zero maintenance. |
| Slewing ring bearing | Pintle bearing (archive Var B) | Higher axial+radial+moment capacity. Self-contained sealing. COTS replacement. |
| Worm gear elevation | Sector gear (archive option) | Self-locking = no brake needed. Operator can release handles without weapon dropping. |
| STANAG 4568 base | Quick-mount adapter | Proven standard. Maximum shear resistance. Every VN Navy vessel has matching holes. |
