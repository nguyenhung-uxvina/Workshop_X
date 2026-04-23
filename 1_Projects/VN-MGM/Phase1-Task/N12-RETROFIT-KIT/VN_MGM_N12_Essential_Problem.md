---
created: 2026-04-10
type: essential-problem
block: BC
project: VN-MGM N12-RETROFIT-KIT
status: PROPOSED — CEO approval needed
feeds_to:
  - VN_MGM_N12_Function_Structure.md
  - Phase 2 helix-concept-generate
---

# Essential Problem — VN-MGM N12-RETROFIT-KIT

## P&B 5-Step Abstraction

### Step 1-3: Eliminate bias, omit non-functional, qualitative

| Solution-biased | Abstracted |
|----------------|-----------|
| "BLDC motor with worm gearbox" | "Powered angular drive for traverse and elevation" |
| "Split-ring clamp on pedestal" | "Removable mechanical coupling to existing structure" |
| "EM clutch NC 24V" | "Automatic transition device between powered and manual mode" |
| "STM32 controller" | "Motion control unit accepting operator input" |
| "Joystick 2-axis" | "Operator command interface with proportional speed control" |

### Step 4: Expand to broader scope

V1 Essential Problem: "...single operator to accurately direct a heavy weapon..."
N12 adds: "...with POWERED assistance for fast targets while PRESERVING manual capability for when power is unavailable..."

### Step 5: Essential Problem Statement

> **Add powered angular drive capability to an EXISTING proven weapon mount (300 units deployed) without modifying the mount's structure, while preserving 100% manual fallback, installable on-ship by 2 persons in ≤4 hours using standard tools, enabling engagement of fast-moving targets (≥45°/s traverse) that manual operation cannot track.**

## Decomposed Sub-Problems

| # | Sub-Problem | Sacred Constraint | Type |
|---|------------|-------------------|------|
| EP-N12-1 | Couple motor torque to existing mount rotation axis WITHOUT permanent attachment | SC-N12-4: no weld/drill | ★ DEFINING — this is what makes N12 unique |
| EP-N12-2 | Couple motor torque to existing elevation axis WITHOUT permanent attachment | SC-N12-4 | ★ DEFINING |
| EP-N12-3 | Transition seamlessly between powered and manual modes | SC-N12-2: 100% manual preserved | Safety-critical |
| EP-N12-4 | Maintain clamp grip under 50 kN recoil vibration | SC-N12-4 + V1 F-01 | Physics |
| EP-N12-5 | Route power and signal cables through 360° rotation without snag | — | Geometric |
| EP-N12-6 | Control 2-axis motor from single operator interface | — | Ergonomic |
| EP-N12-7 | Fail safely to manual on any fault (power loss, cable cut, controller fault) | SC-N12-2 | Safety-critical |
| EP-N12-8 | Install/remove without crane, dock, or special tools | SC-N12-1, SC-N12-3, SC-N12-5 | Operations |

## N12 vs V1 Essential Problem Comparison

| Dimension | V1 Essential Problem | N12 Essential Problem (delta) |
|-----------|---------------------|-------------------------------|
| Force source | Operator muscle only | Motor + operator (dual source) |
| Attachment | Permanent (bolt to deck) | **Removable (clamp to V1)** ★ |
| Power | Zero (SC-2) | 24-48V DC from ship |
| Failure mode | Mechanical (bearing, weld) | + Electrical (motor, controller, cable) |
| Fallback | None needed (manual IS the function) | **Manual = fallback** (V1 proven baseline) |
| Target engagement | Slow targets only (≤30°/s) | Fast + slow (≥45°/s motor, ≤30°/s manual) |

**N12's defining challenge = EP-N12-1 and EP-N12-2:** How to transmit motor torque to the mount's rotation axes without ANY permanent modification. CEO confirmed gear mesh via external teeth on slewing ring → azimuth coupling solved in principle. Elevation coupling is the remaining open question.

## TRIZ Resources Available

| Resource | Present? | How to Use |
|----------|:--------:|-----------|
| V1 slewing ring external teeth | ✅ YES (CEO confirmed) | Pinion gear meshes directly — no adapter needed |
| V1 elevation worm shaft extension | ? UNKNOWN | If worm shaft extends past housing → couple motor there |
| V1 pedestal cylindrical surface | ✅ YES | Clamp reference surface |
| Ship 24V DC power | ✅ YES | Motor power source |
| V1 bolt holes (existing) | ✅ YES | Controller box mounting (reuse existing holes) |
| Gravity (weapon weight) | ✅ YES | Weight helps clamp friction (downward force on pedestal) |
| Recoil vibration (harmful) | ✅ Present | Could indicate clamp loosening (vibration monitoring) |
