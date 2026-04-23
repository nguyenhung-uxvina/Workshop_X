---
created: 2026-04-10
type: essential-problem
block: BC
project: VN-MGM V1-NAVAL-12.7
status: CEO-APPROVED (retroactive — 300 units prove the solution)
feeds_to:
  - BD_Function_Structure.md
  - Phase 2 helix-concept-generate
---

# Essential Problem — VN-MGM V1-NAVAL-12.7

## Statement (FORGE-enriched, P&B §6.1 Level 2)

> **Provide a platform-mounted system that enables a single operator to accurately direct a heavy weapon (25-55 kg) toward any threat in the upper hemisphere, maintaining readiness and effectiveness across all environmental conditions (day/night, sea state 0-3, tropical marine), without external power, while preserving the weapon and operator through the full engagement cycle.**

## Decomposed Sub-Problems

| # | Sub-Problem | Sacred Constraint | FORCE Relevance |
|---|------------|-------------------|-----------------|
| EP-1 | Accept and retain weapon securely under all loads | SC-1: ≥50 kN recoil | ★ PRIMARY — recoil is the dominant force |
| EP-2 | Enable angular positioning in azimuth (360°) and elevation (-15° to +85°) | — | Force path: operator → mechanism → weapon |
| EP-3 | Absorb cyclic recoil without fatigue failure over service life | SC-1: 50,000 cycles | ★ PRIMARY — FORCE paradigm core |
| EP-4 | Transfer residual loads to platform without damage | SC-1 derived | Force path: mount → base → deck |
| EP-5 | Resist marine tropical degradation throughout service | SC-3: 1,000h salt fog | Force enabler — corrosion weakens force path |
| EP-6 | Be installable and portable by 2 persons | SC-4: ≤75 kg | Mass constraint on force-carrying structure |
| EP-7 | Operate without external power | SC-2: zero power | Energy source = human muscle only |
| EP-8 | Maintain readiness between engagements | FORGE: O-51 (Opp 8.0) | NEW — not in archive. Corrosion → force path degradation |

## FORCE Paradigm Mapping

```
ESSENTIAL PROBLEM → FORCE CHAIN

EP-1 (Accept weapon) ─────┐
EP-3 (Absorb recoil) ─────┤──→ FORCE PATH: Weapon → Cradle → Trunnion
EP-4 (Transfer to deck) ──┘    → Pedestal → Bearing → Base → Deck bolts

EP-2 (Angular positioning) ──→ FORCE CONTROL: Operator muscle → Handles
                                → Mechanism → Weapon pointing

EP-5 (Resist corrosion) ─────→ FORCE PRESERVATION: Protect force path
EP-8 (Maintain readiness) ───┘  from degradation over time

EP-6 (Portable) ─────────────→ FORCE STRUCTURE CONSTRAINT: Must carry
EP-7 (No power) ─────────────┘  50 kN with ≤75 kg structure, ≤49 N·m input
```

**The essential problem IS a force management problem.** Every sub-problem either IS about force transmission (EP-1,3,4), controls force direction (EP-2), preserves the force path (EP-5,8), or constrains the force-carrying structure (EP-6,7).

## V5/N12 Extension

For motorized variants, EP-7 changes:
- V1: "Operate without external power" → human muscle
- V5/N12: "Operate WITH external power AND maintain manual fallback" → motor + clutch + manual override

This creates a new sub-problem:
- **EP-9 (V5/N12 only):** Enable smooth transition between powered and manual operation without interrupting engagement

## Validation (retroactive)

This essential problem was SOLVED by V1 (300 units, 0 structural failures). The value of formalizing it:
1. **Inheritance:** V5/N12 must solve EP-1 through EP-8 PLUS EP-9
2. **Abstraction check:** Were there solutions we missed? (see TRIZ resources in BC_Abstraction.md — recoil energy harvesting)
3. **Portfolio coherence:** All 12 variants share EP-1 through EP-6. Differentiation is in EP-7/8/9.
