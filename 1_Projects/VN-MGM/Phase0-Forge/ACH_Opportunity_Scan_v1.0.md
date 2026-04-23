---
created: 2026-04-10
type: ach-opportunity-scan
method: FORGE Scout v2.0
version: v1.0
project: VN-MGM (full portfolio — 12 variants)
evidence_tier: "[L4-ESTIMATE] with [L1-FIELD] V1 data"
outcome_data: "Opportunity_Landscape_v1.0.md (55 outcomes, V1 trắc thủ)"
feeds_to:
  - forge-shift (top opportunities → full SHIFT assessment)
  - forge-library (model catalog)
  - forge-portfolio (ACH pipeline status)
  - helix-task-clarify (ACH-derived requirements per variant)
---

# ACH Opportunity Scan — VN-MGM Portfolio (12 Variants)

## Step 0: Outcome-First Filter (from forge-job-map)

### Underserved Outcomes × ACH Addressability

| Rank | Outcome | Opp | ACH Addressable? | ACH Sub-function |
|------|---------|-----|:-----------------:|-----------------|
| 1 | O-40: Night engagement | 8.5 | **YES** | SF-C: Thermal overlay |
| 2 | O-29: Track moving target | 8.0 | **YES** | SF-A: Tracking assist |
| 3 | O-51: Corrosion from skipped maint | 8.0 | **YES** | SF-B: Condition monitor |
| 4 | O-31: Platform motion pointing error | 7.5 | MAYBE | N11-STABILIZED (HW, not ACH) + AI compensation |
| 5 | O-16: Mount weapon in darkness | 7.0 | MAYBE | LED alignment guide ($5, not really AI) |
| 6 | O-22: Undetected traverse problem | 7.0 | **YES** | SF-B: Vibration anomaly detect |
| 7 | O-28: Slew 180° speed | 7.0 | NO | Physical: motor needed (V5/N12) |
| 8 | O-34: Rounds to first hit | 7.0 | **YES** | SF-A: Ballistic lead indicator |
| 9 | O-43: Switch target bearing | 7.0 | NO | Physical: motor speed |
| 10 | O-44: Hot barrel burn risk | 7.0 | MAYBE | Thermal warning ($10 sensor) |
| 11 | O-50: Post-fire maintenance | 7.0 | MAYBE | SF-B: "maintenance needed" alert |
| 12 | O-55: Condition after storage | 7.0 | **YES** | SF-B: Remote health check |

**Summary: 6/12 top underserved outcomes directly ACH-addressable.** All via Channel B (information). Channel A outcomes (O-28, O-43, O-31) require physical hardware (motor, gyro).

### Overserved Outcomes → Cost Reduction via ACH

| Outcome | Opp | Current Cost Driver | ACH Opportunity |
|---------|-----|-------------------|----------------|
| O-02: Mount confusion | 3.0 | Paint marking ($10) | None — already cheap |
| O-10: Wrong ammo | 3.0 | SOP ($0) | None |
| O-46: Weapon switch | 3.0 | V3 adapter ($800-1.5K) | None — mechanical |

**No ACH cost reduction opportunities in overserved** — overserved outcomes are already solved cheaply. This is expected for a mature, well-designed mechanical product.

---

## Step 1: ACH Opportunity Matrix — All 12 Variants

### Legend
- **ACH-H:** HIGH — sensor/computation function, commodity data, clear value
- **ACH-M:** MEDIUM — feasible but safety-critical or data-scarce
- **ACH-L:** LOW — mechanical-only, no information advantage
- **ACH-0:** ZERO — ACH Boundary Rule violation (physical force)

### Matrix

| # | Variant | Price | Sub-function | Current | ACH | Rationale |
|---|---------|-------|-------------|---------|:---:|-----------|
| **V1** | **NAVAL-12.7** | $3-5K | Traverse/elevate | Manual muscle | **0** | Physical force. Boundary Rule. |
| | | | Recoil absorption | Structural steel | **0** | Physical force. No AI substitute. |
| | | | Corrosion protection | Coating + grease | **0** | Material science, not information. |
| | | | **Condition awareness** | **Manual inspect** | **H** | **SF-B: Vibration sensor. O-22, O-51, O-55.** |
| | | | Weapon retention check | Pin + visual | **L** | $2 sensor adds nothing over 2-pin design. |
| **V2** | **SIM-CRADLE** | $2-4K | Weapon kinematics capture | Encoders | **L** | Standard encoder → already digital, no AI needed. |
| | | | **Recoil simulation feedback** | **Spring/damper** | **M** | Could use force model instead of mechanical recoil device. Feeds VN-CUAV-SIM. |
| | | | Training scoring | Manual observation | **H** | **Camera + AI scoring = VN-CUAV-SIM crossover.** |
| **N10** | **MAINT-KIT** | $200-500 | Maintenance checklist | Paper card | **L** | QR code → digital checklist = UX, not AI. |
| | | | **Wear prediction** | **Calendar-based** | **H** | **SF-B sensor data → predict next maintenance. "N10-M" variant.** |
| | | | Grease application | Manual | **0** | Physical. |
| **V3** | **ADAPTER-KIT** | $1-3K | Weapon-cradle fit | Mechanical adapter | **0** | Pure geometry. No information gap. |
| | | | Recoil compatibility check | Engineering calc | **L** | One-time calc, not recurring AI task. |
| **N6** | **MINI** | $1-2K | Pan/tilt | Manual | **0** | Small, light — no force assistance needed. |
| | | | **Camera auto-pan** | **Manual aim** | **M** | If N6 used for surveillance camera → auto-tracking valuable. Not weapon-mounted. |
| **N8** | **OEM-BEARING** | $0.5-1.5K | Bearing assembly | Precision machining | **0** | Pure mechanical. No information content. |
| | | | **QC inspection** | **Manual measurement** | **M** | Vision-based dimensional QC. Low volume makes ROI marginal. |
| **V4** | **TRIPOD** | $3-6K | Same as V1 except portable | Manual | **0** | Same Boundary Rule as V1. |
| | | | **Condition monitoring** | **Manual** | **H** | **Same SF-B as V1. Shared model.** |
| **N7** | **SENSOR-MOUNT** | $2-5K | Pan/tilt for camera/radar | Manual or servo | **L→M** | If motorized: servo control = standard, not AI. If auto-tracking: **M.** |
| | | | **Object tracking** | **Operator aim** | **H** | **Civilian surveillance: auto-track = high value. Same SF-A model.** |
| **N9** | **VEHICLE-TURRET** | $4-8K | Traverse/elevate | Manual or servo | **0** | Physical force for vehicle-class loads. |
| | | | **Threat detection** | **Crew observation** | **H** | **Camera + AI alert for vehicle situational awareness.** |
| | | | **Stabilization compensation** | **None (manual)** | **M** | Vehicle motion compensation via IMU + servo. More servo control than AI. |
| **V5** | **MOTORIZED** | $10-18K | Motor drive | BLDC+worm+clutch | **0** | Physical force. Boundary Rule. |
| | | | Motor control | PID controller | **L** | Standard servo, not AI. |
| | | | **Target tracking** | **Operator joystick** | **H** | **SF-A: Camera + CV = auto-track. #1 ACH opportunity.** |
| | | | **Night engagement** | **NVG (if available)** | **H** | **SF-C: Thermal camera overlay. O-40.** |
| | | | **Predictive maintenance** | **Calendar** | **H** | **SF-B: Motor + bearing + gearbox monitoring.** |
| **N12** | **RETROFIT-KIT** | $3-6K | Motor drive (bolt-on) | Manual V1 base | **0** | Physical. Same as V5 but clamp-on. |
| | | | **Same ACH as V5** | — | **H** | **All V5 ACH applicable (SF-A, B, C).** |
| **N11** | **STABILIZED** | $15-30K | Gyro stabilization | IMU + servo loop | **L** | Standard control, not AI. (Could be adaptive → M.) |
| | | | **Adaptive stabilization** | **Fixed PID** | **M** | ML-tuned PID for sea state adaptation. Marginal value over well-tuned PID. |
| | | | **All V5 ACH** | — | **H** | **SF-A + SF-B + SF-C fully applicable.** |

---

## Step 2: Cross-Product Synergy Map

### Model Reuse Graph

```
MODEL REUSE — VN-MGM Portfolio

Model SF-A: Visual Target Tracking (Camera + CV)
  ├── V5-MOTORIZED    (weapon tracking, auto-lead)
  ├── N12-RETROFIT    (same, bolt-on)
  ├── N11-STABILIZED  (same + stabilized platform)
  ├── N7-SENSOR-MOUNT (civilian surveillance tracking)
  └── N9-VEHICLE      (threat detection variant)
  Reuse Multiplier: 1 model → 5 products
  Cross-WX: VN-CUAV-SIM (target tracking in sim), VN-AICC (fire control)

Model SF-B: Vibration-Based Condition Monitor (MEMS accel + threshold)
  ├── V1-NAVAL        (bearing health)
  ├── V4-TRIPOD       (bearing health)
  ├── V5-MOTORIZED    (motor + bearing + gearbox)
  ├── N12-RETROFIT    (motor health on V1 base)
  ├── N11-STABILIZED  (all above + gyro bearing)
  └── N10-M variant   (diagnostic add-on kit)
  Reuse Multiplier: 1 model → 6 products + N10-M service
  Cross-WX: ANY WX product with rotating bearings

Model SF-C: Thermal Night Overlay (LWIR camera + highlight)
  ├── V5-MOTORIZED    (night engagement assist)
  ├── N12-RETROFIT    (night upgrade)
  ├── N11-STABILIZED  (night operations)
  └── N7-SENSOR-MOUNT (thermal surveillance)
  Reuse Multiplier: 1 model → 4 products
  Cross-WX: VN-USV-SS-001 (night navigation), VN-AICAM (surveillance)

SYNERGY SUMMARY:
  3 models → serve 12 product slots across 5 variants
  Cross-WX reuse: 4+ other products outside VN-MGM portfolio
```

### Synergy Diagram

```
                    ┌─────────────┐
                    │  SF-A       │
                    │  Tracking   │───── V5, N12, N11, N7, N9
                    │  (5 prods)  │
                    └──────┬──────┘
                           │ shared camera+compute HW
                    ┌──────┴──────┐
                    │  SF-C       │
                    │  Thermal    │───── V5, N12, N11, N7
                    │  (4 prods)  │
                    └─────────────┘

    ┌─────────────┐
    │  SF-B       │
    │  Condition  │───── V1, V4, V5, N12, N11, N10-M
    │  (6 prods)  │
    └─────────────┘
    (independent sensor — no shared HW with SF-A/C)
```

---

## Step 3: SHIFT Quick-Pass (Pre-Screen)

| # | Opportunity | S | H | I | F | T | O | Quick Verdict |
|---|-------------|---|---|---|---|---|---|---------------|
| 1 | SF-A: Tracking (V5/N12/N11) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ O-29 (8.0) | **→ forge-shift: DONE (GO)** |
| 2 | SF-B: Condition (all mounts) | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ O-51 (8.0) | **→ forge-shift: DONE (COND. GO)** |
| 3 | SF-C: Thermal (V5/N12/N11) | ✅ | ✅ | ✅ | ✅ | ⚠️ | ✅ O-40 (8.5) | **→ forge-shift: DONE (COND. GO)** |
| 4 | V2: Sim scoring | ✅ | ✅ | ✅ | ✅ | ? | N/A | → depends on VN-CUAV-SIM scope |
| 5 | N7: Auto-track (civilian) | ✅ | ✅ | ✅ | ✅ | ✅ | N/A (no job-map) | → forge-shift when N7 activates |
| 6 | N9: Threat detect (vehicle) | ✅ | ? | ✅ | ? | ⚠️ | N/A (no job-map) | → forge-shift when N9 activates |
| 7 | V2: Recoil sim model | ⚠️ | ✅ | ✅ | ✅ | ⚠️ | N/A | → low priority (VN-CUAV-SIM leads) |
| 8 | N8: Vision QC | ✅ | ✅ | ✅ | ✅ | ⚠️ | N/A | → ROI marginal at <50 units/yr |

**Top 3 already assessed in ACH_Assessment_v1.0.md** — no duplicate work needed.

---

## Step 4: CEO Strategic Filter

### Prioritized Shortlist (3 tiers)

**Tier A — NOW (2026):**

| # | Opportunity | Why Now | Investment | Revenue Potential |
|---|------------|---------|-----------|------------------|
| 1 | **SF-B: Condition Monitor** | 300 installed mounts → immediate market. Ride N10-MAINT-KIT deployment. Lowest risk, highest coverage. | $5K NRE + $50-200/mount | $15-30K + $735K savings/5yr |

**Tier B — NEXT (2027, after V5 motor proven):**

| # | Opportunity | Why After V5 | Investment | Revenue Potential |
|---|------------|-------------|-----------|------------------|
| 2 | **SF-A: Target Tracking** | Needs stable motorized platform. Camera + compute shared with SF-C. Addresses #2 underserved. | $20K NRE + $200-500/unit | $30-120K/5yr |
| 3 | **SF-C: Night Thermal** | Same platform + compute as SF-A. Addresses #1 underserved. Bundle as "Smart V5" package. | $15K NRE + $500-2K/unit | $15-75K/5yr |

**Tier C — LATER (2028+, when variants activate):**

| # | Opportunity | Trigger | Notes |
|---|------------|---------|-------|
| 4 | V2 Sim scoring | VN-CUAV-SIM WEAPON-MOD scope definition | Model from VN-CUAV-SIM, not VN-MGM |
| 5 | N7 Auto-track (civilian) | First civilian customer inquiry | SF-A model reuse, minimal delta |
| 6 | N9 Threat detect | Army vehicle contract | Different domain (land vehicle), new job-map needed |

### CEO Decision Required

```
TIER A (commit now):
  SF-B Condition Monitor:  [ ] GO  [ ] NO-GO  [ ] DEFER

TIER B (commit after V5 motor proven):
  SF-A Target Tracking:    [ ] GO  [ ] NO-GO  [ ] DEFER
  SF-C Night Thermal:      [ ] GO  [ ] NO-GO  [ ] DEFER

TIER C (acknowledge, no commitment):
  V2/N7/N9 ACH:           [ ] Acknowledged  [ ] Remove from tracking
```

---

## Step 5: ACH Architecture Summary

### "Smart Mount" Package Evolution

```
LEVEL 0: V1 Manual (today)
  Hardware: Steel + bearing + handles
  Intelligence: Zero (operator skill only)
  Price: $3-5K

LEVEL 1: V1 + SF-B (2026 Q4)
  Add: $50 vibration sensor + MCU + LED indicator
  Intelligence: Condition awareness (predictive maintenance)
  Price: +$100-200 (via N10-M kit)

LEVEL 2: V5/N12 Motorized (2027 Q1)
  Add: BLDC motor + gearbox + clutch + controller
  Intelligence: Motor control (standard servo, not AI)
  Price: $10-18K (V5) or $3-6K (N12 retrofit)

LEVEL 3: V5 + SF-A + SF-C "Smart Mount" (2027 Q2-Q3)
  Add: Camera + thermal + edge compute + display overlay
  Intelligence: Target tracking + night engagement + condition
  Price: +$2-4K add-on package
  = Pre-RCWS capability at 20-30% of imported RCWS cost

LEVEL 4: V5 + optics + AICC Fire Control (2028+)
  Add: Full optics suite + AICC fire control computer
  Intelligence: Autonomous fire control (human-in-loop)
  = Indigenous RCWS
  Price: $30-50K (still 50% of import)
```

### Cross-WX ACH Compound Value

| VN-MGM Model | Also Serves |
|-------------|------------|
| SF-A (tracking CV) | VN-CUAV-SIM (target sim), VN-AICC (fire control), VN-USV (navigation) |
| SF-B (vibration health) | Any WX product with bearings: VN-AST-MSL (winch), VN-XUONG (davit) |
| SF-C (thermal) | VN-USV (night ops), VN-AICAM (surveillance), BB-01 (night scoring) |

**3 models developed for VN-MGM → reusable across 6+ WX products. This is the FORGE flywheel in action.**

---

*All ACH in VN-MGM is ADDITIVE (base products work without AI). Lowest-risk ACH pattern in the WX portfolio.*
