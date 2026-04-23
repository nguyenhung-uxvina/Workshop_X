---
created: 2026-04-11
type: tvdt
block: BC
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
top_requirements: 15
feeds_to:
  - Phase 2 VDI 2225 criteria weights
  - VN_MGM_V5_Function_Structure.md (BD)
---

# TVDT — Target Values Decision Table — VN-MGM V5-MOTORIZED

## Top 15 Requirements × Target Values × Achievability

Ranked by HOQ weight (from HOQ_Design_Parameters_v1.0) × requirement criticality.

| Rank | Req ID | Requirement                    | Target Value                               | Achievable? | Evidence                                                  |   Gap?   | Resolution Phase        |
| ---- | ------ | ------------------------------ | ------------------------------------------ | :---------: | --------------------------------------------------------- | :------: | ----------------------- |
| 1    | K-03   | Az slew rate (motor, coarse)   | ≥60°/s (target 90°/s)                      |    ✅ YES    | COTS BLDC 200W + 1:80 worm = 90°/s [L4-calc]              |    No    | —                       |
| 2    | SF-01  | Auto-fallback ≤1s              | ≤1s (EM clutch NC)                         |    ✅ YES    | COTS EM clutch: 50-200ms release [L3]                     |    No    | —                       |
| 3    | F-06   | Recoil recovery ≤0.5s          | ≤0.5s (motor PID, relaxed CEO 2026-04-11)  |   ⚠️ TBD    | Depends on elastomer + motor torque vs 50 kN impulse [L4] | **TG-1** | Phase A bench test      |
| 4    | K-04   | El slew rate (motor, coarse)   | ≥30°/s (target 45°/s)                      |    ✅ YES    | Same motor + 1:80 worm [L4-calc]                          |    No    | —                       |
| 5    | F-07   | Elastomer shock reduction ≥40% | ≥40% at motor shaft                        |   ⚠️ TBD    | EPDM 60A estimated 40-60% [L4]                            | **TG-2** | Phase A bench test      |
| 6    | SF-04  | E-stop ≤50ms                   | ≤50ms HW relay                             |    ✅ YES    | Standard HW relay: 5-15ms [L3]                            |    No    | —                       |
| 7    | K-09   | Position accuracy ±0.5°        | ±0.5° (encoder)                            |    ✅ YES    | 4,096 CPR encoder = ±0.09° [L3]                           |    No    | —                       |
| 8    | CO-01  | BOM ≤$10K                      | $5-10K estimated                           |  ✅ LIKELY   | RE v1.0 BOM decomposition [L4]                            |    No    | Phase B BOM             |
| 9    | TR-01  | Total weight ≤100 kg           | V1(75) + motor(~20) = ~95 kg               |  ✅ LIKELY   | V1 proven + motor/gearbox/clutch estimates [L4]           |    No    | Phase B weigh-in        |
| 10   | OP-05  | Salt fog ≥500 hrs (motor)      | ≥500 hrs (IP65 sealed)                     |    ✅ YES    | IP65 COTS motors available [L3]                           |    No    | —                       |
| 11   | MA-01  | MTBF ≥2,000 hrs                | BLDC: 20,000h. Worm: 50,000h. Clutch: [L4] |  ✅ LIKELY   | Component MTBFs exceed target [L3]                        |    No    | —                       |
| 12   | IX-02  | Data port protocol defined     | Modbus RTU + CANopen DS301                 |    ✅ YES    | Standard protocols, well-documented [L3]                  |    No    | —                       |
| 13   | PC-01  | Motor commonality V5↔N12       | Same model                                 |    ✅ YES    | Design-in: select ONCE, use in both                       |    No    | Phase 2 motor selection |
| 14   | FD-06  | Data port write protection     | Physical key switch                        |    ✅ YES    | Standard 2-position key switch [L3]                       |    No    | —                       |
| 15   | IX-03  | Power headroom ≥30%            | PSU ≥520W if baseline 400W                 |    ✅ YES    | 600W PSU COTS available [L3]                              |    No    | —                       |

## Summary

| Status | Count | Details |
|--------|:-----:|---------|
| ✅ Achievable | 13 | Standard COTS or proven technology |
| ⚠️ TBD (bench test) | 2 | TG-1 recoil recovery, TG-2 elastomer attenuation |
| ❌ Not achievable | 0 | — |

**No blocking gaps.** 2 TBDs resolved by Phase A bench test ($3-5K, 4 weeks). All other targets achievable with COTS components.

---

*TVDT | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
