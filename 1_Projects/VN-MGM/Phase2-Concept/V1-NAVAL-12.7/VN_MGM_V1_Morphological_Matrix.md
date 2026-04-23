---
created: 2026-04-10
type: morphological-matrix
block: BB
pipeline: helix-concept-generate v3.1
project: VN-MGM V1-NAVAL-12.7
mode: quick (retroactive — documents AS-BUILT production choices)
status: COMPLETE
---

# BB Morphological Matrix — VN-MGM V1-NAVAL-12.7 (Retroactive)

## Note on Retroactive Mode

V1 = 300 units shipped. This matrix documents the PRODUCTION design and alternatives that were EVALUATED during development (from VN-MGM-001A archive). The selected WP for each SF is marked ★. This serves as the inheritance reference for V5/N12/N11.

## Morphological Matrix

| SF | Sub-Function | WP-1 | WP-2 | WP-3 | V1 Selected |
|----|-------------|------|------|------|:-----------:|
| **F1.1** | Receive weapon | Cradle channel (CNC) | Pintle socket | Quick-disconnect rail | **★ WP-1** |
| **F1.2** | Lock weapon | 2× trunnion pins (asymmetric) | Single T-bolt | Cam-lock lever | **★ WP-1** |
| **F1.3** | Quick release | Pull-pin (2 actions) | Lever release (1 action) | Slide-off rail | **★ WP-1** |
| **F2.1** | Azimuth rotation | **Slewing ring bearing** (ball) | Pintle bearing (shaft+socket) | Ball bearing turntable | **★ WP-1** |
| **F2.2** | Traverse input | Spade grip handles | T-bar handle | Wheel + gear | **★ WP-1** |
| **F3.1** | Elevation support | Trunnion bearings | Pivot pin + bushing | Linear guide | **★ WP-1** |
| **F3.2** | Elevation drive | **Worm gear + handwheel** | Sector gear + handle | Rack & pinion | **★ WP-1** |
| **F3.3** | Elevation lock | Worm self-lock (inherent) | Friction brake | Ratchet pawl | **★ WP-1** |
| **F4.1** | Recoil deceleration | **Rigid mount (structural margin)** | Elastomer damper | Hydraulic buffer | **★ WP-1** |
| **F4.2** | Load distribution | Tubular pedestal (S355) | Box-section column | Truss frame | **★ WP-1** |
| **F5.1** | Deck interface | **STANAG 4568 bolt pattern** (4×M16) | Quick-release clamp | Weld-on foundation | **★ WP-1** |
| **F5.2** | Electrical ground | Metal-to-metal bolt contact | Grounding strap | Conductive gasket | **★ WP-1** |
| **F6.1** | Corrosion protect | **Galvanize + epoxy + PU** | SS316 construction | Zinc-rich primer only | **★ WP-1** |
| **F6.2** | Wear protection | **PTFE bushings + marine grease** | Sealed bearings (no grease) | Oil-bath lubrication | **★ WP-1** |
| **F6.3** | Operator safety | Clearances + markings + chamfers | Full guard enclosure | Interlock switches | **★ WP-1** |
| **F6.4** | Condition signal | Manual feel + visual inspect | **Vibration sensor (future SF-B)** | Strain gauge telemetry | ★ WP-1 (WP-2 planned for N10-M) |

## V1 Concept Summary — "PROVEN NAVAL"

```
V1 = ALL WP-1 selections across 16 sub-functions.

Pattern: In every case, V1 chose the MOST CONVENTIONAL, MOST RELIABLE
working principle. No innovative or risky choices. This is correct for
a Tier 1 Cash Cow defense product:

  Conventional + Reliable + Local-manufacturable = 300 units, 0 failures

Innovation enters through VARIANTS (V5 motor, N11 gyro, SF-A/B/C ACH),
NOT through the base product.
```

## Compatibility Check (retroactive — all proven)

| WP Pair | Compatible? | Evidence |
|---------|:----------:|---------|
| F2.1 (slewing ring) × F4.1 (rigid recoil) | ✅ | Slewing ring absorbs moment load from rigid recoil path |
| F3.2 (worm gear) × F3.3 (self-lock) | ✅ | Worm gear provides inherent self-lock — no separate mechanism |
| F6.1 (galvanize+paint) × F2.1 (slewing ring) | ✅ | Bearing has own seals; coating on pedestal structure |
| F1.2 (pins) × F6.2 (PTFE+grease) | ⚠️ | Pins need regular grease in salt environment — N10 addresses |
| F5.1 (STANAG bolts) × F4.1 (rigid) | ✅ | Full recoil force → 4×M16 at 200 kN capacity → SF ≥ 4× |

All WP combinations proven compatible by 300-unit production history.

## Concept Variants (Archive — for reference)

| Variant | F2.1 Bearing | F4.1 Recoil | Cost | Weight | Status |
|---------|-------------|-------------|------|--------|--------|
| **V1 "Proven Naval"** | Slewing ring | Rigid | **$2.5K BOM** | **73 kg** | ★ PRODUCTION (300 units) |
| Archive A "Professional" | Slewing ring | Spring-damper | $8.5K est. | 72 kg | Not built |
| Archive B "Simplified" | Pintle | Elastomer | $6.5K est. | 65 kg | Not built |
| Archive C "Economy" | Pintle | Elastomer | $4.0K est. | 45 kg | Not built |

**V1 actual = cheaper than ALL archive variants** ($2.5K vs $4-8.5K) because rigid recoil + proven manufacturing achieved cost targets that estimated variants could not.
