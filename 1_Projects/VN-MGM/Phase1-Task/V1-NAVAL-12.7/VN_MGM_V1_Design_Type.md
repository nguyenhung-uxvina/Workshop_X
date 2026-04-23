---
created: 2026-04-10
type: design-type
block: BD
project: VN-MGM
status: COMPLETE
---

# Design Type Assessment — VN-MGM Portfolio

## P&B Design Type Classification (§6.3)

| Variant | Design Type | Rationale | Phase 2 Approach |
|---------|------------|-----------|-----------------|
| **V1-NAVAL-12.7** | **VARIANT** (proven) | 300 shipped, 0 failures. Architecture fixed. | Document retroactively |
| **V2-SIM-CRADLE** | VARIANT of V1 | Remove recoil path, add encoders. Same base. | Focused: encoder integration |
| **N10-MAINT-KIT** | N/A (consumable) | Kit design, not mechanical design | Package engineering |
| **V3-ADAPTER-KIT** | VARIANT of V1 cradle | New cradle geometry per weapon | Focused: weapon interface |
| **N6-MINI** | VARIANT (scaled down) | Same architecture at smaller scale | Scale analysis |
| **N8-OEM-BEARING** | VARIANT (extracted) | Bearing + flange from V1 | Component extraction |
| **V4-TRIPOD** | **ADAPTIVE** | V1 top + new tripod base (replace deck mount) | Focused: tripod base |
| **N7-SENSOR-MOUNT** | ADAPTIVE of N6 | Replace weapon cradle with sensor cradle | Focused: sensor interface |
| **N9-VEHICLE-TURRET** | **ADAPTIVE** | V1 top + vehicle roof ring interface | Focused: vehicle interface |
| **V5-MOTORIZED** | **ADAPTIVE** | V1 base + motor + clutch + controller | Focused: motor integration |
| **N12-RETROFIT** | **ADAPTIVE** | Bolt-on motor kit for V1 installed base | Focused: clamp design |
| **N11-STABILIZED** | **ORIGINAL** (stabilization) | New gyro + servo sub-system on V5 base | Full Phase 2 needed |

## Phase 2 Priority

```
PRIORITY 1 (in progress): V5 + N12 (shared Phase A bench test)
PRIORITY 2 (after V5): N11 (original design for stabilization)
PRIORITY 3 (demand-driven): V4, N7, N9
PRIORITY 4 (extraction): V2, V3, N6, N8, N10
```

## Shared Architecture Map

```
            V1 BASE (PROVEN)
           ┌────┴────┐
     V1 top assembly  V1 base assembly
     (cradle+elev)    (pedestal+bearing+base)
           │                │
     ┌─────┼─────┐    ┌────┼────┐
     V2    V3    V4   N6   N8   N9
     (sim) (adapt)(tri)(mini)(oem)(veh)
           │
     ┌─────┼─────┐
     N12   V5    N11
     (retro)(motor)(stab)
     
     REUSE: V1 top → V2,V3 (cradle variants)
            V1 base → N6 (scaled), N8 (extracted), N9 (adapted)
            V1 complete → N12 (add motor), V5 (integrated motor)
            V5 → N11 (add gyro)
```
