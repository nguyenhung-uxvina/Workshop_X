---
created: 2026-04-11
type: essential-problem
block: BC
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: PROPOSED — CEO approval needed
feeds_to:
  - VN_MGM_V5_Function_Structure.md (BD)
  - Phase 2 helix-concept-generate
---

# Essential Problem — VN-MGM V5-MOTORIZED

## Essential Problem Statement

> **Provide powered angular drive for a proven heavy weapon mount that: (1) exceeds human tracking capability for close-range fast-moving targets, (2) guarantees instantaneous reversion to full manual aiming on any power disruption, (3) survives weapon recoil loading without degradation, and (4) serves as an extensible platform for future sensing and autonomous capabilities — all while maintaining the proven mount's structural integrity, deck interface, and field serviceability.**

## Decomposed Sub-Problems

| # | Sub-Problem | Sacred Constraint | Type |
|---|------------|-------------------|------|
| EP-V5-1 | Drive weapon in azimuth at ≥60°/s with sufficient torque to hold against wind + platform motion | SC-V5-4 | ★ PERFORMANCE-DEFINING |
| EP-V5-2 | Drive weapon in elevation at ≥30°/s with sufficient torque to support weapon weight + acceleration | SC-V5-4 | ★ PERFORMANCE-DEFINING |
| EP-V5-3 | Transition instantly (≤1s) from powered to manual on any power disruption | SC-V5-1, SC-V5-2 | ★ SAFETY-DEFINING |
| EP-V5-4 | Manual mode must feel ≥80% identical to V1 (no residual motor drag, same effort) | SC-V5-3 | Safety |
| EP-V5-5 | Protect motor/gearbox/encoder from 50 kN recoil shock × 50,000 cycles | SC-V1-1 | Physics |
| EP-V5-6 | Recover aim point ≤0.5s after recoil burst in motor mode | SC-V5-5 (relaxed) | Performance |
| EP-V5-7 | Accept proportional speed commands from operator with variable rate (coarse/fine) | — | Ergonomic |
| EP-V5-8 | Report angular position to external systems for future sensing/control integration | — | ★ PLATFORM-DEFINING (ICDM) |
| EP-V5-9 | Maintain structural integrity of proven V1 mount (STANAG 4568, 50 kN recoil path) | SC-V1-1 | Physics |
| EP-V5-10 | Withstand tropical marine environment (salt fog, humidity, temperature) | SC-V1-3 | Environment |

## V5 vs V1 vs N12 Essential Problem Comparison

| Dimension | V1 (Manual) | N12 (Retrofit Kit) | V5 (Motorized Mount) |
|-----------|-------------|--------------------|--------------------|
| Force source | Operator muscle | Motor + operator (dual) | **Motor primary, operator fallback** |
| Attachment to mount | IS the mount | Clamp-on (removable) | **Integrated (permanent)** |
| Structural modification | N/A | ZERO (SC-N12-4) | **Allowed (≤3 brackets — P-05)** |
| Power required | Zero | 24-48V DC (ship) | 24-48V DC + UPS backup |
| Failure mode | Mechanical only | + Electrical → V1 manual | + Electrical → V1 manual |
| Fallback | None needed | V1 manual (proven) | V1 manual (proven) |
| Data output | Zero | RS485/CAN (basic) | **RS485/CAN + logging (platform)** |
| Extensibility | None | Limited (kit form factor) | **★ Full platform (ICDM)** |
| Target engagement | Slow (≤30°/s) | Fast + slow (≥45°/s) | **Fast + slow (≥60°/s)** |
| Weight | ≤75 kg | V1 + ≤15 kg kit | **≤100 kg integrated** |

**V5's defining difference from N12:** V5 is a PERMANENT integrated product (not a bolt-on kit). This allows:
- Optimized motor bracket (welded/bolted to structure, not clamped)
- Higher torque (rigid coupling, not clamp friction)
- Better recoil isolation (designed-in, not added-on)
- Full extensibility (ICDM platform architecture)

## ICDM Extension: Platform Essential Problem

> **Beyond the immediate motorization function, V5 must serve as the architectural foundation for a family of capability upgrades (camera → FCS → gyro → autonomous tracking) that plug in via standardized interfaces WITHOUT structural or control system redesign.**

This adds EP-V5-8 as a PLATFORM requirement, not just a FEATURE requirement. The data port and modular controller are not "nice to have" — they are the platform's value proposition for the entire VN-MGM upgrade path (V5 → camera → FCS → RCWS).

---

*Essential Problem | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
