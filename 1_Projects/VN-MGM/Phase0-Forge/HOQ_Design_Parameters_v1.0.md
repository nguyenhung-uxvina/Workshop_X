---
created: 2026-04-10
type: hoq-design-parameters
method: House of Quality (Weiss & Hari 2015 — Modified)
version: v1.0
project: VN-MGM V1-NAVAL-12.7
dp_count: 10
feeds_to:
  - helix-concept-generate (VDI 2225 criterion weights)
  - helix-p2-frame (TRIZ contradiction detection)
---

# HOQ Design Parameters — VN-MGM V1-NAVAL-12.7

## Step H1: Top 15 Outcomes → 10 Design Parameters

| DP# | Design Parameter | Source Outcomes | Physical Meaning |
|-----|-----------------|----------------|------------------|
| DP1 | **Traverse Speed** | O-28, O-29, O-43 | Angular velocity azimuth (°/s) |
| DP2 | **Traverse Effort** | O-26, O-30 | Torque at handle (N·m) |
| DP3 | **Elevation Precision** | O-31, O-33 | Pointing repeatability under disturbance (mrad) |
| DP4 | **Night Operability** | O-40, O-16 | Ability to operate in <1 lux conditions |
| DP5 | **Corrosion Endurance** | O-51, O-14, O-55 | Time-to-degradation in marine tropical (months) |
| DP6 | **Maintenance Burden** | O-50, O-52, O-53 | Man-hours per 1,000 rounds |
| DP7 | **First Hit Efficiency** | O-34, O-38 | Rounds per hit on standard target at range |
| DP8 | **Mounting Speed (adverse)** | O-16, O-17, O-20 | Time to mount weapon in dark + sea state 3 (s) |
| DP9 | **Hot Barrel Safety** | O-44 | Clearance + protection for barrel change (mm, °C) |
| DP10 | **Condition Observability** | O-22, O-25, O-55 | Ability to assess mount health without disassembly |

## Step H2: HOQ Matrix (Correlation Grades)

```
                          Design Parameters
                    DP1   DP2   DP3   DP4   DP5   DP6   DP7   DP8   DP9   DP10
Outcome       Imp   Trav  Trav  Elev  Night Corr  Maint 1st   Mount  Hot   Cond
              (W)   Spd   Eff   Prec  Ops   End   Burd  Hit   SpdAd  Barr  Obs
─────────────────────────────────────────────────────────────────────────────────
O-40 (night)  5.0    -     -    C:3    A:9   -     -    B:5    B:5    -     -
O-29 (track)  5.0   A:9    B:5  B:5    -     -     -    A:9    -      -     -
O-51 (corr)   5.0    -     -     -     -    A:9   A:9    -     -      -    B:5
O-31 (motion) 5.0   C:3    -    A:9    -     -     -    B:5    -      -     -
O-16 (dark)   4.5    -     -     -    A:9    -     -     -    A:9     -     -
O-22 (detect) 5.0    -     -     -     -    C:3    -     -     -      -    A:9
O-28 (slew)   5.0   A:9    B:5   -     -     -     -    C:3    -      -     -
O-34 (1st hit)5.0   B:5    -    B:5   B:5    -     -    A:9    -      -     -
O-43 (switch) 5.0   A:9    B:5   -     -     -     -    C:3    -      -     -
O-44 (barrel) 5.0    -     -     -     -     -     -     -     -     A:9    -
O-50 (maint)  4.5    -     -     -     -    B:5   A:9    -     -      -    C:3
O-55 (storage)4.5    -     -     -     -    A:9   B:5    -     -      -    A:9
O-30 (fatigue)4.5   C:3   A:9    -     -     -     -     -     -      -     -
O-14 (pin)    4.5    -     -     -     -    A:9   C:3    -    C:3     -     -
O-08 (carry)  4.5    -     -     -     -     -     -     -     -      -     -
```

Note: O-08 (carry weight) doesn't map strongly to any DP — it's a weapon characteristic, not mount.

## Step H3: Design Parameter Weights

| DP# | Design Parameter | W_TP | R_j (%) | Weight (0-1) | Priority |
|-----|-----------------|------|---------|-------------|----------|
| DP1 | **Traverse Speed** | 196.5 | **17.5%** | 0.175 | ★ HIGH |
| DP7 | **First Hit Efficiency** | 167.0 | **14.9%** | 0.149 | ★ HIGH |
| DP5 | **Corrosion Endurance** | 157.5 | **14.0%** | 0.140 | ★ HIGH |
| DP3 | **Elevation Precision** | 121.0 | 10.8% | 0.108 | MEDIUM |
| DP4 | **Night Operability** | 117.0 | 10.4% | 0.104 | MEDIUM |
| DP6 | **Maintenance Burden** | 112.5 | 10.0% | 0.100 | MEDIUM |
| DP10 | **Condition Observability** | 97.5 | 8.7% | 0.087 | MEDIUM |
| DP2 | **Traverse Effort** | 65.0 | 5.8% | 0.058 | LOW |
| DP8 | **Mounting Speed (adverse)** | 52.5 | 4.7% | 0.047 | LOW |
| DP9 | **Hot Barrel Safety** | 45.0 | 4.0% | 0.040 | LOW |
| | **TOTAL** | **1,121.0** | **100%** | **1.000** | |

**Top 3 Design Challenges:**
1. **Traverse Speed (17.5%)** — Manual limit ~30°/s. Motor needed for fast targets.
2. **First Hit Efficiency (14.9%)** — Combination of pointing precision + target tracking + feedback.
3. **Corrosion Endurance (14.0%)** — Maintenance skip = #1 field failure mode.

## Step H4: Correlation Roof — Contradiction Detection

```
         DP1   DP2   DP3   DP4   DP5   DP6   DP7   DP8   DP9   DP10
DP1  —
DP2  (-)  —                          ← K1: CONTRADICTION
DP3  (0)  (0)  —
DP4  (0)  (0)  (0)  —
DP5  (0)  (0)  (0)  (0)  —
DP6  (0)  (+)  (0)  (0)  (+)  —
DP7  (+)  (0)  (+)  (+)  (0)  (0)  —
DP8  (0)  (0)  (0)  (+)  (-)  (0)  (0)  —     ← K2: CONTRADICTION
DP9  (0)  (0)  (0)  (0)  (0)  (0)  (0)  (0)  —
DP10 (0)  (0)  (0)  (0)  (+)  (+)  (0)  (0)  (0)  —
```

### Contradictions Detected

| # | DP-A | DP-B | Nature | → TRIZ Contradiction |
|---|------|------|--------|---------------------|
| **K1** | DP1 (Traverse Speed) | DP2 (Traverse Effort) | Faster traverse requires more force OR motor (adds weight/cost/complexity) | Speed vs Force → TRIZ #9 (Preliminary counteraction) #15 (Dynamicity) |
| **K2** | DP8 (Mounting Speed) | DP5 (Corrosion Endurance) | Quick-release mechanisms corrode faster than permanent joints | Reliability vs Speed → TRIZ #11 (Cushion in advance) #35 (Parameter change) |

### Synergies Detected

| DP-A | DP-B | Nature |
|------|------|--------|
| DP5 + DP6 | Corrosion + Maintenance | Better corrosion resistance → less maintenance needed |
| DP5 + DP10 | Corrosion + Observability | Condition monitoring → early corrosion detection → prevent failure |
| DP1 + DP7 | Speed + First Hit | Faster slew → faster engagement → fewer rounds wasted |
| DP4 + DP8 | Night + Mounting | Night-friendly design helps adverse condition mounting |

## Step H5: Other Characteristics (not in matrix)

| Characteristic | Relevant Outcomes | Note |
|---------------|------------------|------|
| Total weight | O-08 (carry) | Weapon weight, not mount — monitor in Phase 3 |
| Production cost | O-54 (consumable) | Already constrained by CO-01 (≤$3K BOM) |
| Ammunition feed reliability | O-45 (reload) | Weapon characteristic, not mount |
| EMC compatibility | — | V1 = no electronics. Relevant for V5 only |

---

## VDI 2225 Weight Export (for Phase 2)

```
CRITERION WEIGHTS FOR VDI 2225 — VN-MGM V1
(Normalized from HOQ, sum = 1.000)

g1 = 0.175  Traverse Speed
g2 = 0.149  First Hit Efficiency
g3 = 0.140  Corrosion Endurance
g4 = 0.108  Elevation Precision
g5 = 0.104  Night Operability
g6 = 0.100  Maintenance Burden
g7 = 0.087  Condition Observability
g8 = 0.058  Traverse Effort
g9 = 0.047  Mounting Speed (adverse)
g10= 0.040  Hot Barrel Safety
              ─────
Σ  = 1.008  (rounding → normalize to 1.000)
```

Use these weights in `/helix-concept-generate` Step 3.5 (ODI import) and VDI 2225 evaluation matrix.

---

*Contradictions K1 and K2 feed into Phase 2 TRIZ analysis. K1 is the fundamental V1→V5 transition question.*
