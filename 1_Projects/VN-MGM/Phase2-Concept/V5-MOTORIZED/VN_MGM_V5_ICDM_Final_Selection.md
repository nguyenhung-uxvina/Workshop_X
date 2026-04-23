---
created: 2026-04-12
type: icdm-final-selection
block: BE
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "ICDM Step 9 — Final Concept Selection (Hari & Weiss)"
status: DEFERRED — awaiting Phase A bench test (KG-3)
concepts_evaluated: 2 (A, B)
recommended: A "Pinion-Worm"
feeds_to:
  - VN_MGM_V5_Handoff_Package.md
  - Phase 3 helix-embody-realize
---

# BE ICDM Final Selection — VN-MGM V5-MOTORIZED

## 1. DQM Comparison Table (ICDM Step 9)

| Metric | A "Pinion-Worm" | B "Pinion-Sector" | Winner |
|--------|:---------------:|:-----------------:|:------:|
| **DQM (Group B, 9 criteria)** | **99.0%** | 94.5% | **A** |
| **CFMA Rev SFD (lower=better)** | **111** | 173 | **A** |
| **CDTC BOM vs $10K target** | **-30% ($7K)** | -20% ($8K) | **A** |
| **CDTC margin** | **42%** | 38% | **A** |
| **RTA TTM (prototype)** | **8 weeks** | 10-11 weeks | **A** |
| **RTA knowledge gaps** | **5** | 7 | **A** |
| **RTA NRE** | **$3-5K** | $5-8K | **A** |
| **Robustool** | **✅ PASS** | ⚠️ CONDITIONAL | **A** |
| **PC Score (ICDM commonality)** | **6/6** | 6/6 | TIE |
| **Sensitivity** | Robust | Robust | TIE |
| **Pugh (Group A)** | **0 (datum)** | -3 (-31.7%) | **A** |

**Concept A wins on 9 of 11 metrics, ties on 2.** No metric where B is superior.

---

## 2. IRL — Innovation Readiness Level (per concept)

| Factor | A Score (1-5) | B Score (1-5) | Evidence |
|--------|:------------:|:------------:|---------|
| Technology maturity | **4** | 3 | A: all TRL ≥6, worm gear proven. B: sector gear + clamp = TRL 4 (needs validation) |
| Market understanding | **5** | **5** | 300 V1 customers, trắc thủ feedback, RE v1.0 |
| Manufacturing capability | **4** | 3 | A: CNC bracket + COTS assembly. B: +custom sector gear machining + FEA |
| Team competence | 3 | 2 | A: servo = 1 new skill. B: servo + sector FEA = 2 new skills |
| IP/regulatory | **5** | **5** | No ITAR, no restricted tech |
| **Overall IRL** | **4.2 / 5** | **3.6 / 5** | A: READY. B: PROCEED WITH GAPS. |

---

## 3. Why A, Not B — Structured Rationale

### What A does better:
1. **Simpler elevation mechanism** — uses V1's own worm gear as reducer. No custom sector needed.
2. **Lower risk** — 5 KGs vs 7. No sector clamp recoil validation. No FEA required.
3. **Faster to market** — 8 weeks vs 10-11. Bench test serves both V5 AND N12.
4. **Lower NRE** — $3-5K vs $5-8K. No sector gear tooling.
5. **Higher margin** — 42% vs 38%. $1K BOM difference accumulates at volume.
6. **Better CFMA** — Rev SFD 111 vs 173. No sector-specific failure modes (B1, B2, B3).

### What B does better:
1. **Identical motor module both axes** — maximum production simplification at high volume.
   - **Counter:** This advantage only materializes at >50 units/year. V5 target is 15 units in Year 1. At this volume, the production simplification benefit is ~$50/unit (setup time savings) — far less than the $1K BOM and $2-3K NRE cost of the sector approach.

### What B does NOT do better (common misconception):
- "Sector = simpler because same approach both axes" — FALSE. Sector ADDS complexity: custom gear, clamp, FEA, retorque maintenance. Worm shaft coupling (A) is actually simpler: jaw coupling to existing shaft.

---

## 4. Concept A — Architecture Summary

```
V5-MOTORIZED "PINION-WORM" ARCHITECTURE

    ┌─────────────────────────────────────────────────────────────┐
    │                        V1 BASE MOUNT                        │
    │                    (FROZEN — 300 units proven)               │
    │                                                              │
    │   AZIMUTH AXIS                    ELEVATION AXIS             │
    │   ═══════════                     ══════════════             │
    │   Motor (BLDC 200W)               Motor (BLDC 200W)  [PC-01]│
    │     ↓                               ↓                       │
    │   Worm Gearbox (1:80)             EM Clutch (NC)     [PC-02]│
    │     ↓                               ↓                [PC-03]│
    │   EM Clutch (NC)                  Jaw Coupling               │
    │     ↓                               ↓                       │
    │   Spur Pinion (Ø32mm)            V1 Worm Input Shaft        │
    │     ↓                               ↓                       │
    │   V1 Slewing Ring Teeth           V1 Worm Gear (existing)   │
    │     ↓                               ↓                       │
    │   ←── 360° continuous ──→         -15° to +85° elevation    │
    │                                                              │
    │   CONTROLLER (STM32F446 + 2× BLDC servo drives)     [PC-04]│
    │     ├─ PID motor control (2 axes independent)                │
    │     ├─ Safety: watchdog + E-stop relay + cable-cut detect    │
    │     ├─ Data: RS485 Modbus + CAN (position out)               │
    │     ├─ Log: SD card (current, position, faults, hours)       │
    │     └─ UPS: LiFePO4 12V 10Ah (graceful shutdown)            │
    │                                                              │
    │   JOYSTICK (2-axis, IP65, 10m cable, speed toggle)   [PC-06]│
    │   E-STOP (red mushroom, HW relay, independent)               │
    │   KEY SWITCH (READ-ONLY / READ-WRITE for data port)          │
    │                                                              │
    │   SAFETY PATH (hardwired, independent of software):          │
    │   Fault/E-stop/cable-cut → HW relay OPENS → Motor OFF ≤50ms │
    │   → EM clutch power CUT → NC clutch RELEASES ≤1s            │
    │   → V1 = free manual (300 units proven)                      │
    └─────────────────────────────────────────────────────────────┘
```

---

## 5. P02 QC Gate (S3 Compliance)

| # | QC Check | Status | Evidence |
|---|---------|:------:|---------|
| 1 | ≥3 concept variants generated | ✅ | 4 generated (A/B/C/D) |
| 2 | Systematic evaluation (not gut feel) | ✅ | Pugh Group A → CSR Group B → DQM → CFMA/CDTC/RTA/Robustool |
| 3 | Customer needs traced to evaluation criteria | ✅ | HOQ → CSR functions → DQM weights |
| 4 | Sacred constraints verified per concept | ✅ | SC-V5-1 to SC-V5-5 checked for A and B |
| 5 | Weak spots identified and assessed | ✅ | A: 3 (LOW-MED), B: 4 (1 HIGH), C: 4 (3 HIGH/CRIT), D: eliminated |
| 6 | CFMA completed (function-level) | ✅ | 9 failure modes for A, 12 for B, Rev SFD calculated |
| 7 | Cost estimate against target | ✅ | CDTC Pareto: A=$7K (-30%), B=$8K (-20%) |
| 8 | Risk/TTM analysis | ✅ | RTA: A=8wk/5KG, B=10-11wk/7KG |
| 9 | Sensitivity analysis | ✅ | A robust under ±5% weight perturbation |
| 10 | CEO selects (non-delegable) | ⏳ | **PENDING CEO DECISION** |

**P02 QC: 9/10 PASS — awaiting CEO selection (item 10).**

---

## 6. CEO Decision — Non-Delegable (Core)

```
═══════════════════════════════════════════════════════════════
   CEO CONCEPT SELECTION — VN-MGM V5-MOTORIZED
═══════════════════════════════════════════════════════════════

   RECOMMENDATION: Concept A "PINION-WORM"
   
   DQM: 99.0%  |  BOM: $7K  |  TTM: 8 weeks  |  PC: 6/6
   
   Wins on 9/11 metrics. Zero metrics where B is superior.
   
   Concept B "Pinion-Sector" retained as CONTINGENCY:
   → Deploy B ONLY IF Phase A bench test reveals V1 worm shaft
     is inaccessible or ratio is incompatible (KG-3 fails).
   
   ─────────────────────────────────────────────────────────
   
   CEO OPTIONS:
   (A) ✅ SELECT Concept A "Pinion-Worm" — proceed to Phase 3
   (B) ✅ SELECT Concept B "Pinion-Sector" — explain rationale
   (C) 🔄 Request additional analysis before deciding
   (D) ⏸️ Defer selection until Phase A bench test results
   
═══════════════════════════════════════════════════════════════
```

---

*BE ICDM Final Selection | DQM: A=99%, B=94.5% | IRL: A=4.2, B=3.6 | P02 QC 9/10 | helix-concept-generate v3.1 (ICDM) | 2026-04-12*
