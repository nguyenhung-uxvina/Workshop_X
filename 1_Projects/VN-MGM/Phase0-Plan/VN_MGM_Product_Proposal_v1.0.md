---
created: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v1.0
project: VN-MGM
status: approved
gate0: PASS
feeds_to:
  - FORGE: /odi, /shift, /portfolio
  - HELIX: /req (Phase 1 — can reference archived VN-MGM-001A requirements)
---

# Product Proposal — VN-MGM Mount/Gimbal System

## 1. Intended Functions (solution-neutral)

**Primary:**
- Aim heavy objects (weapons, sensors, equipment) in azimuth and elevation on fixed or moving platforms
- Absorb reaction forces during operation without structural degradation

**Secondary:**
- Enable rapid weapon/equipment interchange on the same base
- Withstand marine and tropical environmental conditions during extended deployment

**Auxiliary:**
- Accept motorized drive upgrade without base redesign
- Support training simulation equipment (encoders, sensors) alongside or instead of live weapons

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target Value |
|---|---|---|---|---|
| R01 | Performance | Azimuth rotation range | D | ±180° continuous (360°) |
| R02 | Performance | Elevation range | D | -15° to +85° |
| R03 | Performance | Manual operating force (azimuth) | D | ≤5 kg·m one-hand |
| R04 | Performance | Manual operating force (elevation) | D | ≤3 kg·m |
| R05 | Structural | Reaction force absorption | D | ≥50 kN peak cyclic |
| R06 | Structural | Design life (cycles) | D | ≥50,000 firing cycles |
| R07 | Environment | Marine corrosion resistance | D | ≥1,000 hrs salt fog |
| R08 | Environment | Operating temperature | D | -10°C to +55°C |
| R09 | Interface | Deck/base mounting pattern | D | Standard bolt pattern (≥4 points) |
| R10 | Interface | Weapon interchange time | W | ≤60 seconds removal |
| R11 | Operations | Total assembly weight | D | ≤75 kg (2-person handling) |
| R12 | Operations | Setup time (complete) | W | ≤15 minutes, 2 persons |
| R13 | Cost | Unit production cost | D | ≤$8K |
| R14 | Sovereignty | Local content | D | ≥80% by BOM value |
| R15 | Maintenance | Service interval | W | ≥1,000 rounds between service |

## 3. Cost Target

| Parameter | Target |
|---|---|
| Unit cost (V1-NAVAL-12.7) | $5-8K [L4-ESTIMATE from archive] |
| Development budget (V1) | $45K [L4-ESTIMATE from archive] |
| Production volume | 20-50 units/year [L5-ASSUMPTION] |
| Import reference | $15-20K (imported naval mounts) |
| Cost advantage | 60% reduction [L4-ESTIMATE] |
| Local content | ≥80% (CNC machining + assembly = local) |

## 4. Working Principle Suggestions (OPTIONS only)

### Azimuth Bearing
- **Option A:** Slewing ring bearing — advantage: proven, high load capacity, compact / risk: import component, lead time
- **Option B:** Crossed roller bearing — advantage: precision, smooth / risk: expensive, lower load than slewing ring
- **Option C:** Plain bearing + thrust washer — advantage: cheapest, fully local / risk: higher friction, shorter life

### Elevation Mechanism
- **Option A:** Worm gear + handwheel — advantage: self-locking, precise / risk: slow for fast targets
- **Option B:** Sector gear + handle — advantage: fast slew, simple / risk: no self-lock, needs brake
- **Option C:** Linear actuator (for motorized variant) — advantage: precise, powerful / risk: needs power, complex

### Recoil Absorption
- **Option A:** Rigid mount + structural margin — advantage: simplest / risk: transmits full shock to deck
- **Option B:** Elastomer dampers — advantage: reduces deck loading 40-60% / risk: temperature-dependent stiffness
- **Option C:** Hydraulic recoil buffer — advantage: best absorption / risk: maintenance, leak risk

### Corrosion Protection
- **Option A:** Hot-dip galvanize + epoxy paint — advantage: proven, cheap / risk: heavy coating
- **Option B:** Stainless steel (SS316) critical surfaces — advantage: long-lasting / risk: expensive, hard to machine
- **Option C:** Zinc-rich primer + polyurethane topcoat — advantage: standard marine practice / risk: needs recoating 3-5 years

## 5. Risk Assessment + Fallbacks

| Risk | Type | P | I | Fallback |
|---|---|---|---|---|
| Recoil absorption inadequate | Technical | MED | HIGH | Over-engineer structural margin (1.5× safety factor). Test at military range before delivery. |
| Slewing ring bearing supply | Supply chain | LOW | MED | 3 Chinese + 1 VN supplier identified in archive. Buffer stock 6-month. |
| Marine corrosion accelerated in VN tropical | Technical | MED | MED | SS316 for all exposed fasteners. Sacrificial zinc anodes at deck interface. |
| CNC machining tolerance on large parts | Production | LOW | MED | WX has CNC capability. Test fit with gauge blocks before assembly. |
| Manual effort exceeds spec under corrosion | Operations | MED | LOW | Annual lubrication SOP. PTFE bushings at friction surfaces. |

## 6. Sacred Constraints

| # | Constraint | Basis |
|---|---|---|
| SC-1 | Must handle ≥50 kN recoil without fatigue failure at 50,000 cycles | Physics — 12.7mm DShK recoil force |
| SC-2 | Must operate manually without power | Operations — ship power may be unavailable |
| SC-3 | Must survive 1,000 hrs salt fog without structural degradation | Environment — VN coastal/naval deployment |
| SC-4 | Must be installable by 2 persons without crane | Operations — small vessel deck access |
| SC-5 | ≥80% local content | Sovereignty — defense procurement requirement |

## 7. Gate 0 Result
**PASS** — All 6 criteria met.

## 8. Design Paradigm
**FORCE-CENTERED** — Core challenge is absorbing 50 kN cyclic recoil while maintaining smooth aiming under marine corrosion. Unlike BB-01 (acoustic) or TARGET-DRONE (signature), VN-MGM's physics constraint is structural dynamics under repeated high-force loading.
