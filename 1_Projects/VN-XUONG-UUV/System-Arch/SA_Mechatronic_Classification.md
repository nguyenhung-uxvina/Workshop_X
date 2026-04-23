---
project: VN-XUONG-UUV
type: system-arch
document: SA0
version: 1.0
created: 2026-04-14
updated: 2026-04-14
status: CEO-APPROVED
mode: retro-quick
---

# SA0: Mechatronic Classification — VN-XUONG-UUV

## Classification

| Criterion | Value |
|-----------|-------|
| Mode | RETROACTIVE (--retro) — project in Phase 2 |
| Mechanical SFs | 21 (dominant — hull, ramp, channel, cradle, structure) |
| Electrical SFs | 6 (minor — VFD winch, actuator, battery, charger, distribution, sensors) |
| Software SFs | 0 (no embedded SW — VFD is COTS parameterized) |
| OEM Interface | 7 (UUV controller = black box boundary) |
| **Decision** | **QUICK** (SA2 + SA3 + SA4 + SA6) |

## Key Design Decision (2026-04-14)

**CEO decided: Genset ELIMINATED → Battery-only LARS power.**

| Impact | Detail |
|--------|--------|
| Weight savings | ~150 kg net (genset 200 kg → battery ~50 kg) |
| EMC risk R4 | ELIMINATED (no genset EMI near UUV controller) |
| Noise | Silent LARS ops — tactical advantage |
| Endurance | Battery-limited — must size for full L+R cycle |
| ELEC complexity | Reduced from 8 → 6 sub-functions |
| Recharge | At mother ship (220VAC shore power or mother ship generator) |

## Affected Documents (require update)

- Doc 006 Function Structure v2.0 → v2.1: F4.2 genset → battery bank
- Doc 008 Weight Estimate v2.0 → v2.1: remove genset 200 kg, add battery bank ~50 kg
- Doc 010 Concept Description v1.0 → v1.1: power architecture change
- Doc 012 CFMA: remove genset failure modes, add battery depletion mode
