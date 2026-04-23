---
project: VN-XUONG-UUV
type: system-arch
document: SA3
version: 1.5
created: 2026-04-14
updated: 2026-04-14
status: AI-DRAFT
mode: retro-quick
note: "v1.5 — retroactive ICD, some interfaces already decided in Phase 2"
---

# SA3: Interface Control Document v1.5 — VN-XUONG-UUV

## Internal Interfaces (MECH ↔ ELEC)

| IF-ID | From | To | Type | Specification | Constraint | Priority | Owner | Status |
|-------|------|----|------|--------------|-----------|----------|-------|--------|
| IF-01 | MECH (ramp) | ELEC (winch) | Physical mount | Winch baseplate: 4× M12 bolts, ≤500×400mm footprint | Reaction force 10 kN vertical + 5 kN lateral | D | MECH | Phase 3 |
| IF-02 | ELEC (winch) | MECH (pendant) | Mechanical | Wire rope Ø8-10mm, pendant length ~4m | SWL 20 kN (SF=2 on 10 kN) | D | ELEC | Phase 3 |
| IF-03 | ELEC (VFD) | MECH (winch) | Power cable | 24VDC, ~40A peak, cable run ≤8m | Voltage drop <5% (≤1.2V) | D | ELEC | **SA-06 verify** |
| IF-04 | ELEC (actuator) | MECH (ramp hinge) | Physical mount | Clevis mount, 2× M10 pins, stroke ~300mm | Force 2 kN, speed 10mm/s | D | MECH | Phase 3 |
| IF-05 | ELEC (battery) | MECH (hull) | Physical mount | Battery box ~400×300×250mm, ~30 kg, LOW in hull | Ventilation for LFP (minimal), tie-down 3G | D | MECH | **SA-01 verify** |
| IF-06 | ELEC (load cell) | MECH (winch cable) | Signal + mount | Inline load cell on pendant, signal 4-20mA or digital | IP67, range 0-20 kN | W | ELEC | Phase 3 |
| IF-07 | ELEC (distribution) | MECH (console) | Physical + signal | Panel mount on console, ~300×200mm cutout | Accessible to LARS operator | W | MECH | Phase 3 |
| IF-08 | ELEC (bilge pump) | MECH (hull) | Physical mount | Through-hull fitting, pump ≤2 kg, 24VDC | Auto float switch | W | MECH | Standard |
| IF-09 | ELEC (charger) | MECH (hull) | Physical + power | Shore power inlet 220VAC (waterproof) on hull side | IEC 60309 marine plug, ≤5A | D | MECH | Phase 3 |

## External Interfaces (System ↔ OEM / Mother Ship)

| IF-ID | From | To | Type | Specification | Constraint | Priority | Owner | Status |
|-------|------|----|------|--------------|-----------|----------|-------|--------|
| EX-01 | SYSTEM | Mother Ship | Tow | Bridle + towline, SWL 5t | Quick-release under load | D | MECH | Decided |
| EX-02 | Mother Ship | SYSTEM | Crane transfer | Sling for UUV 550 kg, crane SWL 2.5t | Sling angle ≤60° | D | MECH | Decided |
| EX-03 | Mother Ship | SYSTEM | Shore power | 220VAC, ≤5A, for battery recharge | Umbilical length ~10m | D | ELEC | Phase 3 |
| **EX-04** | **SYSTEM** | **UUV Controller** | **Power** | **24VDC direct OR 220VAC via inverter** | **TBD — needs OEM ICD** | **D** | **ELEC** | **BLOCKING** |
| **EX-05** | **SYSTEM** | **UUV Controller** | **Physical mount** | **Suitcase on bracket, ~10 kg, console area** | **TBD — needs OEM ICD** | **D** | **MECH** | **BLOCKING** |
| **EX-06** | **UUV tether** | **SYSTEM deck** | **Cable routing** | **Fiber optic, Ø~10mm, stern fairlead → clips → controller** | **Bend radius ≥200mm, no crush points** | **D** | **MECH** | **TBD** |
| EX-07 | SYSTEM | Mother Ship | VHF | Ch 16 + working channel | Standard marine VHF | W | ELEC | Standard |

## Critical Interfaces (Highest Integration Risk)

1. **IF-03 (VFD → Winch power cable):** 24VDC at 40A over 8m = significant voltage drop. Must verify cable sizing or consider 48VDC system. Links to SA-02, SA-06.
2. **EX-04 (UUV controller power):** Unknown requirement from OEM. If 220VAC → need DC-AC inverter (~$200, ~3 kg, ~90% efficiency → draws more from battery). **BLOCKING until OEM ICD received.**
3. **IF-01 (Winch mounting):** 10 kN reaction force on aluminum ramp structure. Must be verified in Phase 3 FEM or equivalent.

## Unresolved Interfaces

| IF-ID | Issue | Blocks | Resolution Path |
|-------|-------|--------|----------------|
| **EX-04** | UUV controller power spec unknown | Phase 3 ELEC design | Send ICD Template v1.3 to OEM |
| **EX-05** | UUV controller physical dimensions unknown | Phase 3 layout | Send ICD Template v1.3 to OEM |
| **EX-06** | Tether cable specifications incomplete | Cable routing design | OEM datasheet |
| IF-03 | Exact VFD model + cable size TBD | Wiring design | Market survey for 24VDC marine winch |
