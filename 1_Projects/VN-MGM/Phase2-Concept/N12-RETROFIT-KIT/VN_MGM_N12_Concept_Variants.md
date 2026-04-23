---
created: 2026-04-11
type: concept-variants
block: BB
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: N12-RETROFIT-KIT
status: COMPLETE — CEO selection in BC
concept_count: 3
feeds_to:
  - VN_MGM_N12_Pugh_Screening.md (BC)
  - VN_MGM_N12_VDI_2225_Evaluation.md (BC)
---

# BB Concept Variants — VN-MGM N12-RETROFIT-KIT

## Concept Overview

All 3 concepts share 10 of 12 WPs (83% common). They differ ONLY in F8.1 (elevation coupling) and consequent F8.2 adjustments. This confirms N12 is an ADAPTIVE design where the solution-determining SF (F8.1) drives concept differentiation.

```
SHARED ACROSS ALL CONCEPTS:
  F7.1: Spur pinion → slewing ring teeth (CEO confirmed)
  F7.2: Split-ring clamp on pedestal
  F7.3: Elastomer bushing isolation
  F9.1: EM clutch NC (fail-safe manual)
  F9.2: Triple watchdog (overcurrent/overspeed/heartbeat)
  F9.3: LED + piezo beep
  F10.1: Industrial 2-axis joystick (10m cable)
  F10.2: PID servo (STM32 + 2× servo drives)

DIFFERENTIATORS:
  F8.1: Elevation coupling method (3 options)
  F8.2: Elevation clamping (adapts to F8.1)
  F10.3: Cable routing (CR1 for A/B, CR2 for C)
```

---

## Concept A: "WORM DRIVE"

```
ARCHITECTURE:
                                        ┌──── ELEVATION MOTOR MODULE ────┐
                                        │ Motor → Clutch → Jaw Coupling  │
                                        │         → V1 WORM SHAFT INPUT  │
                                        │ (uses V1's own worm as reducer) │
                                        └────────── U-bolt clamp ────────┘
                                                    │
┌─── AZIMUTH MOTOR MODULE ──┐          ┌────────────┘
│ Motor → Gearbox → Clutch  │          │
│   → Pinion                │    ┌─────┤ V1 MOUNT (unchanged)
│     → V1 Ring Teeth       │    │     │ ├─ Slewing ring (az)
│                            │    │     │ ├─ Worm gear (el) ← motor couples here
└── Split-ring clamp ───────┘    │     │ ├─ Pedestal
                                 │     │ └─ Cradle + weapon
┌─── CONTROLLER BOX ────────┐   │     └─────────────────────
│ STM32 + 2× Servo Drives   │───┘
│ E-stop relay + Watchdog    │
│ 24-48V DC input, IP65      │
└────────────────────────────┘
         │
┌─── JOYSTICK ──────────────┐
│ 2-axis analog + E-stop     │
│ Mode switch + LED          │
│ 10m cable                  │
└────────────────────────────┘
```

**Principle:** Motor couples DIRECTLY to V1's worm input shaft via jaw coupling. V1's existing worm gear acts as the elevation reducer. No separate gearbox needed for elevation.

| Attribute | Value |
|-----------|-------|
| Kit weight (est.) | ≤12 kg |
| Kit BOM (est.) | $1,800-2,200 |
| Install time | ≤3 hours (simpler el install) |
| Parts count | ~45 |
| El gearbox | NONE (uses V1 worm) |
| El motor | Same BLDC as az (commonality) |
| Unique risk | V1 worm shaft access unknown |

---

## Concept B: "LINEAR ACTUATOR"

```
ARCHITECTURE:
                    ┌──── LINEAR ACTUATOR ────┐
                    │ Motor → Clutch → Screw  │
                    │   → Push/Pull rod        │
                    │     → Elevation arm      │
                    └─ Clevis ─── Clevis ──────┘
                       (pedestal) (el arm)

┌─── AZIMUTH MOTOR MODULE ──┐           V1 MOUNT (unchanged)
│ (identical to Concept A)   │           ├─ Slewing ring (az)
└── Split-ring clamp ───────┘           ├─ Worm gear (el, UNUSED by kit)
                                         ├─ Pedestal
┌─── CONTROLLER + JOYSTICK ─┐           └─ Cradle + weapon
│ (identical to Concept A)   │                ↑
└────────────────────────────┘           actuator pushes here
```

**Principle:** Linear actuator between pedestal bracket and elevation arm. Converts linear motion to elevation rotation. V1 worm gear is NOT used by kit — V1 manual mode still uses handwheel → worm.

| Attribute | Value |
|-----------|-------|
| Kit weight (est.) | ≤14 kg |
| Kit BOM (est.) | $2,200-2,600 |
| Install time | ≤4 hours (2 clamp points for el) |
| Parts count | ~55 |
| El gearbox | Built-in ball screw (self-locking) |
| El motor | BLDC or stepper (screw-driven) |
| Unique risk | El range limited by actuator stroke. 2 attachment points. |

---

## Concept C: "SECTOR GEAR"

```
ARCHITECTURE:
                                        ┌──── ELEVATION MOTOR MODULE ────┐
                                        │ Motor → Gearbox → Clutch       │
                                        │   → Pinion                     │
                                        │     → Sector gear              │
                                        │       (clamped to trunnion)    │
                                        └────── U-bolt + sector ─────────┘

┌─── AZIMUTH MOTOR MODULE ──┐           V1 MOUNT (unchanged)
│ (identical to Concept A)   │           ├─ Slewing ring (az) ← az pinion
└── Split-ring clamp ───────┘           ├─ Trunnion ← SECTOR GEAR clamped
                                         ├─ Worm gear (el, UNUSED by kit)
┌─── CONTROLLER + JOYSTICK ─┐           ├─ Pedestal
│ (identical to Concept A)   │           └─ Cradle + weapon
└────────────────────────────┘
```

**Principle:** Same gear-mesh approach for both axes. Az = pinion on ring teeth. El = pinion on clamp-on sector gear at trunnion. Maximum parts commonality.

| Attribute | Value |
|-----------|-------|
| Kit weight (est.) | ≤15 kg (sector gear adds weight) |
| Kit BOM (est.) | $2,000-2,400 |
| Install time | ≤4 hours (sector gear alignment critical) |
| Parts count | ~50 |
| El gearbox | Same as az (worm gearbox, commonality) |
| El motor | Same BLDC as az (full commonality) |
| Unique risk | Sector gear clamping under recoil. Limited arc (120°). |

---

## Quick Comparison

| Criterion | A: Worm Drive | B: Linear Act. | C: Sector Gear |
|-----------|:------------:|:--------------:|:--------------:|
| Kit BOM est. | **$2,000** | $2,400 | $2,200 |
| Kit weight | **≤12 kg** | ≤14 kg | ≤15 kg |
| Install time | **≤3 hr** | ≤4 hr | ≤4 hr |
| Parts count | **~45** | ~55 | ~50 |
| V1 dependency | HIGH (needs worm shaft) | **LOW** | MEDIUM (needs trunnion access) |
| El range | Full V1 range | Limited by stroke | Limited by sector arc |
| Parts commonality (az↔el) | Motor only | Motor only | **Motor + gearbox + pinion** |
| Self-locking (el) | YES (V1 worm) | YES (ball screw) | NO (needs brake or worm) |
| Manual mode feel | V1 identical (handwheel) | V1 identical (handwheel) | V1 identical (handwheel) |
| Recoil robustness | Good (worm absorbs) | Good (screw absorbs) | Risk (sector clamp slip) |

---

*3 concept variants for BC evaluation. All share 83% of WPs. Key differentiator: F8.1 elevation coupling.*
