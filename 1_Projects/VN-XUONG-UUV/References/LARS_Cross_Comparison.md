---
created: 2026-03-06
type: reference
source: synthesis
project: VN-XUONG-UUV
tags: [#type/article, #topic/technology]
note: Synthesized from 4 individual LARS analyses. All source data from pre-training knowledge (May 2025 cutoff) — verify specs before design decisions.
---

# LARS Cross-Comparison — 4 Manufacturers

## Quick Summary

| | L3Harris | Saab | ECA Group | Atlas Elektronik |
|--|----------|------|-----------|------------------|
| **Primary UUV** | REMUS 600/Bluefin-12 | AUV62-AT | A18-M | SeaCat |
| **UUV weight** | 200-750 kg | 300-400 kg | 700-800 kg | 300-450 kg |
| **UUV diameter** | Up to 533mm | 324mm | ~324mm | ~324mm |
| **Platform** | 7-12m USV | 200-5000t vessel | USV to MCM vessel | ARCIMS 12m USV / MCM vessel |
| **Launch method** | Stern ramp (A-frame for >500kg) | Stern ramp/cradle | Crane or stern ramp | Stern ramp + cradle |
| **Recovery method** | Passive funnel + winch | Hook/snare + crane | Capture frame or funnel | Funnel-guided cradle |
| **Launch SS** | SS 3-4 | SS 3 | SS 3-4 | SS 4 |
| **Recovery SS** | SS 2-3 | SS 3 | SS 2-3 | SS 3-4 |
| **Launch time** | 10-20 min | 10-20 min | 15-30 min | 10-20 min |
| **Recovery time** | 20-45 min | 15-30 min | 20-45 min | 15-30 min |
| **Automation** | Semi to fully auto | Semi-auto | Semi to highly auto (UMIS) | Semi-auto to auto (ARCIMS) |
| **LARS weight** | 300-600 kg | 500-1500 kg | N/A | 500-1500 kg |
| **Deck footprint** | ~3.5x1.5m | ~2x4-6m | ~4x7m | ~3x2m + ramp |

---

## Consensus Findings (All 4 Agree)

### 1. Recovery is THE hard problem
All 4 manufacturers confirm: launch is straightforward, recovery is the binding constraint. Every design decision should be evaluated against "does this make recovery easier?"

### 2. Stern ramp is the dominant architecture
All 4 use stern ramp/slipway as primary or preferred method for medium UUVs. Advantages:
- Gravity-assisted launch
- Wake shadow provides calmer recovery zone
- Centerline operation minimizes roll coupling
- Simpler than crane/A-frame mechanically

### 3. Passive funnel capture > active capture
3 of 4 (L3Harris, ECA, Atlas) use V-shaped funnel/guide geometry for recovery. The UUV drives itself in — no robotic arm or active grasping needed. More reliable in waves.

### 4. Sea State 3 is the practical recovery limit
All 4 agree: SS 3 (Hs ~1.25m) is the reliable recovery ceiling for medium UUVs from small-medium vessels. SS 4 is marginal. This covers most Vietnam coastal operations.

### 5. Semi-automation is the right level for now
Full autonomous recovery remains an R&D frontier even for these major companies. Semi-auto (powered mechanisms, operator supervision) is the proven sweet spot.

### 6. 324mm torpedo form factor is the standard
3 of 4 UUVs use ~324mm diameter (lightweight torpedo standard). This enables reuse of torpedo handling equipment and existing cradle/rail designs.

### 7. Modular/containerized design philosophy
All 4 promote bolt-on or containerized LARS for vessel-of-opportunity deployment. No need for dedicated UUV carrier vessels.

### 8. USBL acoustic homing is essential
All systems use acoustic positioning (USBL) for UUV terminal approach during recovery. This is non-negotiable equipment.

---

## Key Differences

| Aspect | Divergence | Implication for VN |
|--------|-----------|-------------------|
| Recovery capture | L3Harris/Atlas: passive funnel. Saab: manual hook. ECA: capture frame + funnel | Passive funnel is more robust — adopt this |
| Platform size | L3Harris: small USV (7-12m). Others: larger vessels too | VN xuong = tender from mother ship, so 8-12m range fits |
| Autonomy ambition | L3Harris/Atlas/ECA pushing full auto. Saab more conservative | Start conservative like Saab, plan for growth |
| UUV weight | ECA A18 heaviest (700-800kg). Others 300-500kg | VN spec says 200-1000kg — need to confirm actual UUV |

---

## Recommended Architecture for VN-XUONG-UUV

> **UPDATE 2026-03-06 (post-ODI, user HITL input):**
> User confirmed HARD CONSTRAINTS: tau me nho + crane yeu.
> Original recommendation of 10-12m vessel may be TOO LARGE.
> Re-evaluate for minimum viable size that can handle 5m/550kg UUV.
> Priority order: compact > UUV protection > crew safety > recovery SS > stability (#6).

Based on consensus across all 4 (adjusted for compact constraint):

```
VN-XUONG-UUV Architecture (REVISED)
=====================================

Vessel: MINIMUM viable size — target 7-9m aluminum
        (original 10-12m may exceed mother ship capacity)
        Displacement: minimize — target <5 tonnes
        Stern: Open transom with ramp slot

LARS:   Stern ramp + cradle-on-rails
        Ramp angle: 15-20 degrees
        Passive V-funnel capture at waterline
        Electric/hydraulic winch (500-1000kg SWL)
        UHMWPE guide rails (no UUV hull damage)

Recovery: Semi-automated
          UUV homes via USBL acoustic
          Funnel captures, winch pulls up
          Operator supervises + intervenes if needed

Materials: 316L SS structure
           5083 Al hull
           HDPE/UHMWPE guides and bumpers
           Dyneema winch line

Target specs:
  - UUV capacity: up to 500kg (design for 1000kg growth)
  - Launch: SS 3-4, 10-15 min
  - Recovery: SS 3, 20-30 min (target)
  - Crew: 3-4 (Phase 1), reduce to 2 later
  - USBL: commercial COTS (EvoLogics, Sonardyne, Kongsberg)
```

---

## Cost Estimation (from L3Harris analysis)

| Component | Estimated Cost (USD) |
|-----------|---------------------|
| Hull (10m aluminum) | 80,000-150,000 |
| Propulsion + power | 40,000-80,000 |
| LARS mechanical (ramp + cradle + winch) | 30,000-60,000 |
| Hydraulic system | 15,000-30,000 |
| Control system (autopilot + DP) | 50,000-100,000 |
| USBL system | 30,000-80,000 |
| Communications | 20,000-50,000 |
| Integration + testing | 30,000-60,000 |
| **Total (without UUV)** | **295,000-610,000** |

~20-30% of Western equivalent cost, leveraging Vietnamese shipbuilding.

---

## Vietnam-Specific Recommendations (Consensus)

1. **Design around recovery** — not launch
2. **Stern ramp + passive funnel** — simplest, most proven
3. **Sea State 3 baseline** — covers most VN coastal ops
4. **Semi-automated** — operator-in-loop for capture phase
5. **Modular/containerized** — deploy on multiple vessel types
6. **324mm UUV form factor** — if possible, leverage torpedo handling standards
7. **Tropical materials** — 316L SS, 5083 Al, anti-fouling coatings, freshwater washdown
8. **USBL from day 1** — non-negotiable for recovery
9. **Test early in real conditions** — Cam Ranh Bay, Da Nang
10. **Plan monsoon windows** — NE monsoon (Oct-Mar) limits operations

---

## TRL Progression Path (from Saab analysis)

| Phase | TRL | Activity |
|-------|-----|----------|
| 1 | 3-4 | Hydraulic A-frame + custom cradle, manual capture, test with weighted dummy |
| 2 | 5-6 | Winch automation, guided funnel, tension monitoring |
| 3 | 7-8 | Semi-auto capture, vessel maneuvering guidance, sea state go/no-go |
| 4 | 8-9 | Multi-vehicle handling, reduced crew, night ops |

---

## Next Steps for VN-XUONG-UUV

1. **Confirm UUV target** — exact weight, dimensions, form factor
2. **Funnel geometry design** — the highest-leverage engineering task
3. **Vessel hull selection** — 10-12m aluminum, Vietnamese shipyard capabilities
4. **USBL system selection** — evaluate COTS options + cost
5. **Prototype planning** — weighted dummy first, then real UUV

---

*Synthesized from 4 manufacturer analyses | VN-XUONG-UUV Phase 0 Pre-study*
