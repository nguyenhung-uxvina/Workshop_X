---
created: 2026-04-10
type: tvdt
block: BC
method: "Weiss & Hari 2015 — Target Values Decision Table"
project: VN-MGM V1-NAVAL-12.7
status: COMPLETE (retroactive — all values L1-FIELD proven)
feeds_to:
  - BD_Function_Structure.md
  - Phase 2 VDI 2225 evaluation
  - HOQ_Design_Parameters_v1.0.md (weights)
---

# TVDT — Target Values Decision Table — VN-MGM V1-NAVAL-12.7

## Purpose
Map top customer values → functional requirements → technical parameters → achievable targets.
For V1 (retroactive): all values PROVEN. TVDT serves as inheritance base for V5/N12.

## TVDT Matrix (Top 10 Parameters by HOQ Weight)

| # | Customer Value (from FORGE) | Functional Req | Technical Parameter (DP) | Target | Achieved (V1) | Gap | HOQ Weight |
|---|---------------------------|---------------|------------------------|--------|--------------|-----|-----------|
| 1 | Track moving target (O-29, Opp 8.0) | K-03: Traverse rate ≥20°/s | **DP1: Traverse Speed** (°/s) | ≥20°/s (V1), ≥60°/s (V5) | 30°/s ✅ | V1: none. V5: needs motor. | 0.175 |
| 2 | Hit target with fewer rounds (O-34, Opp 7.0) | K-03+K-04: Smooth aiming | **DP7: First Hit Efficiency** (rounds/hit) | ≤5 rounds at 400m (trained gunner) | ~8 rounds [L4] | Marginal — training + lead indicator helps | 0.149 |
| 3 | Mount survives without maintenance (O-51, Opp 8.0) | OP-04: Salt fog ≥1,000h | **DP5: Corrosion Endurance** (months to degradation) | ≥12 months without maintenance | 6-9 months [L1] | ⚠️ GAP — mounts degrade if grease skipped | 0.140 |
| 4 | Aim stable on waves (O-31, Opp 7.5) | OP-06: Sea state 3 operation | **DP3: Elevation Precision** (mrad under motion) | ≤5 mrad pointing error | ~10-15 mrad [L4] | ⚠️ GAP — no stabilization (V1 = operator skill) | 0.108 |
| 5 | Fight at night (O-40, Opp 8.5) | S-03: Night sight mount | **DP4: Night Operability** (engagement capability in <1 lux) | NVG/thermal mount available | Picatinny rail ✅, no integral solution | ⚠️ GAP — operator must supply NVG | 0.104 |
| 6 | Less cleaning after firing (O-50, Opp 7.0) | MA-02: Lube interval ≥1,000 rds | **DP6: Maintenance Burden** (man-hours per 1,000 rounds) | ≤0.5 man-hours | ~1.0 man-hours [L1] | ⚠️ GAP — wash + grease takes time | 0.100 |
| 7 | Know mount is OK (O-22, Opp 7.0) | MA-03: Visual inspect | **DP10: Condition Observability** (health assessment without disassembly) | Pass/fail indicator | None — feel only [L1] | ⚠️ GAP — no objective indicator | 0.087 |
| 8 | Easy to traverse (O-26, Opp 6.0) | K-03: ≤5 kg·m effort | **DP2: Traverse Effort** (N·m) | ≤49 N·m | ~40 N·m [L1] ✅ | None — within spec | 0.058 |
| 9 | Mount weapon in dark/rough sea (O-16, Opp 7.0) | AS-02: ≤60s weapon mount | **DP8: Mounting Speed (adverse)** (seconds in dark + sea state 3) | ≤120s | ~180-300s [L4] | ⚠️ GAP — night + waves = slow | 0.047 |
| 10 | Safe barrel change (O-44, Opp 7.0) | SF-05: ≥30mm clearance | **DP9: Hot Barrel Safety** (clearance mm, max contact temp °C) | ≥30mm, <60°C at contact | 30mm ✅, temp unknown | Marginal — clearance OK, temp exposure risk | 0.040 |

## Gap Analysis Summary

| Status | Count | Parameters |
|--------|-------|-----------|
| ✅ No gap (V1 meets target) | **3** | DP1 (traverse speed), DP2 (effort), DP8 partial |
| ⚠️ Gap exists (V1 does not fully satisfy) | **6** | DP3, DP4, DP5, DP6, DP7, DP10 |
| ❓ Unknown (needs measurement) | **1** | DP9 (barrel temp at contact) |

### Gap Resolution Paths

| Gap | Resolution | Product |
|-----|-----------|---------|
| DP3: Elevation precision on waves | N11-STABILIZED (gyro) | N11 |
| DP4: Night operability | SF-C thermal overlay (ACH GO) | V5 add-on |
| DP5: Corrosion endurance | N10-MAINT-KIT (preventive) + SF-B sensor (predictive) | N10 + N10-M |
| DP6: Maintenance burden | Self-lubricating bearings OR sealed design (Phase 2 concept) | V1 Gen 2 |
| DP7: First hit efficiency | SF-A tracking assist (ACH GO) | V5 add-on |
| DP10: Condition observability | SF-B vibration sensor (ACH GO) | N10-M |

## TVDT × Portfolio Inheritance

```
PARAMETER INHERITANCE TABLE

              V1    N10   N12   V5    V3    N6    V4    N7    N9    N11
DP1  Spd      30    -     60    60    -     -     30    var   var   60
DP2  Effort   40    -     10*   10*   -     -     40    -     -     10*
DP3  Prec     10    -     10    5     -     -     10    -     -     2
DP4  Night    rail  -     +SC   +SC   -     -     rail  +SC   -     +SC
DP5  Corr     9mo   +kit  9mo   9mo   9mo   9mo   9mo   -     -     9mo
DP6  Maint    1.0h  0.5h  1.0h  1.0h  -     -     1.0h  -     -     1.0h
DP7  Hit      8     -     4*    3*    -     -     8     -     -     3*
DP8  Mount    180s  -     180s  120s  -     -     120s  -     -     120s
DP9  Barrel   30mm  -     30mm  30mm  30mm  -     30mm  -     -     30mm
DP10 Obs      none  +chk  +SFB  +SFB  -     -     none  -     -     +SFB

* = motor-assisted (reduced effort, improved tracking)
+SC = SF-C thermal camera add-on
+SFB = SF-B vibration condition monitor
+kit = N10 maintenance checklist improves awareness
+chk = N10 standardized checklist
```

**Key insight:** V1 gaps become V5/N12 requirements. TVDT gap analysis = requirements inheritance mechanism.

---

*All V1 values [L1-FIELD] unless marked [L4]. Gaps feed into Phase 2 concept exploration for next-gen V1 or V5/N12 design.*
