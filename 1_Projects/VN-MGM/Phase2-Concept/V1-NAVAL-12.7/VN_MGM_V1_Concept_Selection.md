---
created: 2026-04-10
type: concept-selection
block: BE
pipeline: helix-concept-generate v3.1
project: VN-MGM V1-NAVAL-12.7
mode: quick (retroactive)
status: CEO-CONFIRMED (retroactive — 300 units prove selection)
selected_concept: "V1 Proven Naval"
---

# BE Concept Selection — VN-MGM V1-NAVAL-12.7

## Selected Concept: "V1 PROVEN NAVAL"

### Working Principle Selection Summary

| SF | Sub-Function | Selected WP | Rationale |
|----|-------------|------------|-----------|
| F1.1 | Receive weapon | CNC cradle channel | Precision fit, DShK 105±1mm |
| F1.2 | Lock weapon | 2× asymmetric trunnion pins | 15g retention, poka-yoke |
| F2.1 | Azimuth rotation | **Slewing ring bearing** | Highest load capacity, self-sealed |
| F2.2 | Traverse input | Spade grip handles | MIL standard, proven ergonomics |
| F3.2 | Elevation drive | **Worm gear + handwheel** | Self-locking, smooth, low effort |
| F4.1 | Recoil deceleration | **Rigid mount (structural margin)** | Simplest, zero maintenance, zero degradation |
| F4.2 | Load distribution | Tubular pedestal (S355) | CNC tube, optimal strength/weight |
| F5.1 | Deck interface | STANAG 4568 (4×M16) | Universal standard, maximum compatibility |
| F6.1 | Corrosion protect | Galvanize + epoxy + PU | Proven 3-layer, local availability |
| F6.2 | Wear protection | PTFE bushings + marine grease | Low friction, field-serviceable |

### VDI 2225 Result

| Metric | Score |
|--------|-------|
| Technical Value (Rt) | **0.560** (56%) — adequate, gaps in night/condition |
| Economic Value (Re) | **0.833** (83%) — excellent cost advantage |
| S-Diagram position | Above value line — economic > technical |
| Weak spots | C5 Night (1), C7 Condition (1) |
| Strong points | C1 Speed (3), C3 Corrosion (3), C8 Effort (3) |

### CEO Selection Rationale (retroactive)

V1 concept was selected and proven by 300 units of production. The retroactive Phase 2 confirms:

1. **Correct architecture decisions** — rigid recoil + slewing ring = maximum reliability at minimum complexity
2. **Cost achievement** — $2.5K BOM vs $4-8.5K archive estimates → simpler is cheaper
3. **Identified weak spots** — night operability (C5) and condition observability (C7) are real customer pain points (FORGE validated) → feed ACH roadmap
4. **HOQ weights reveal truth** — archive weights missed night engagement gap; customer-outcome weights expose it
5. **Foundation for portfolio** — V1 architecture = inheritance base for all 11 other variants

### What V1 Does NOT Solve (feeds V5/N12/N11)

| Gap | Customer Pain (FORGE) | Resolution | Product |
|-----|----------------------|-----------|---------|
| Fast target tracking | O-29 (Opp 8.0) | Motor drive + SF-A tracking assist | V5, N12 |
| Night engagement | O-40 (Opp 8.5) | SF-C thermal overlay | V5 add-on |
| Condition awareness | O-51 (Opp 8.0) | SF-B vibration sensor | N10-M |
| Platform stabilization | O-31 (Opp 7.5) | Gyro + servo | N11 |
| Operator fatigue | O-30 (Opp 6.5) | Motor assist | V5, N12 |

## CEO Decision

```
CONCEPT: "V1 Proven Naval" — CONFIRMED ✅
  (retroactive — 300 units, 0 structural failures)
  
WEAK SPOTS ACKNOWLEDGED:
  C5 (Night): Address via SF-C ACH on V5 ✅
  C7 (Condition): Address via SF-B ACH on N10-M ✅

PROCEED TO: Phase 3 not needed for V1 (already in production)
  → V5-MOTORIZED: /helix-concept-generate VN-MGM V5-MOTORIZED
  → N12-RETROFIT: /helix-concept-generate VN-MGM N12-RETROFIT-KIT
```
