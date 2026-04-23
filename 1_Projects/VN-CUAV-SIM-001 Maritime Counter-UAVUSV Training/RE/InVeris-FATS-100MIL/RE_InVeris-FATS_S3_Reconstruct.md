# RE STAGE 3: RECONSTRUCT — Divergence Map + Recommendations

**Date:** 2026-04-22
**Input files verified:**
- RE_InVeris-FATS_S2A_Requirements.md ✅
- RE_InVeris-FATS_S2A_TVDT.md ✅
- RE_InVeris-FATS_S2B_Function_Structure.md ✅
- RE_InVeris-FATS_S2B_Solution_Det_SF.md ✅
- RE_InVeris-FATS_S2B_Design_Type.md ✅
- RE_InVeris-FATS_S2M_Cross_Domain.md ✅

---

## 3D — DIVERGENCE MAP: WX LITE-PA2 vs InVeris FATS 180MIL

### KEPT (WX validates FATS approach → WX aligned)

| # | Feature | FATS Approach | WX LITE Approach | Why Keep |
|---|---------|-------------|-----------------|---------|
| K1 | **180° FOV multi-projector** | 3× UST projectors, borderless screens, 180° wrap | 3× Optoma UST, curved screen 4m×2m, 180° | Industry standard for immersive gunnery sim. FATS 180MIL = validation of WX display architecture. |
| K2 | **Weapon-specific recoil** | Gas blowback calibrated per weapon type | Solenoid PWM per weapon type (MWI NFC auto-config) | Both adjust recoil per weapon. Implementation differs but concept confirmed. |
| K3 | **Scenario authoring by instructor** | Proprietary editor (non-programmer) | Unity custom editor (Er-06: ≤15min) | FATS confirms that instructor-friendly authoring is DEMAND, not wish. |
| K4 | **AAR with shot-by-shot replay** | Shot placement + weapon trace + grouping analysis | 3D replay + aim trace + impact point + PDF report | Core AAR concept identical. WX matches FATS in replay capability. |
| K5 | **Multi-weapon platform** | BlueFire 300+ variants on same system | MWI 5 weapons with NFC auto-detect | Platform strategy confirmed. WX focused subset = right for naval niche. |
| K6 | **Edge-blended projection** | Software edge-blending across 3 screens | Software edge-blending (Resolume or custom Unity shader) | Same approach. FATS validates multi-projector edge-blend as standard. |
| K7 | **Fire control / safety selector** | Safety/fire control sensor in weapon | S-04: single/burst mode detection | Both track weapon fire mode. Confirmed as requirement. |
| K8 | **Latency < 50ms** | "Real-time" claim | S-01: ≤50ms measured budget (46ms) | WX has explicit measured budget. FATS claims but doesn't publish number. WX more rigorous. |

### MODIFIED (FATS insight → WX should upgrade/adjust)

| # | Feature | FATS Approach | Current WX | Recommended WX Modification | Cost | Priority | Phase |
|---|---------|-------------|-----------|---------------------------|------|----------|-------|
| **M1** | **Trigger sensing** | Analog force sensor (pressure curve) | Microswitch (on/off) | **Add strain gauge or force cell to trigger mechanism.** Measure pull force (0.1N resolution). Enables: trigger jerk detection, coaching on trigger squeeze technique, distinguishes slam-fire vs controlled. | **+$10/unit** + $500 dev | **HIGH** | Phase 3 |
| **M2** | **Weapon cant sensing** | MEMS IMU (3-axis gyro+accel) | None (encoder gives az/el only) | **Add MEMS IMU (MPU-6050 or BMI160) to weapon module.** Measures cant (roll axis), ≤0.5° resolution. Enables: cant correction coaching, weapon handling quality metric. Mount on weapon body near grip. | **+$8/unit** + $300 dev | **HIGH** | Phase 3 |
| **M3** | **AAR → Real-time feedback** | Automatic Coaching: real-time doctrine-referenced | Post-session AAR only | **Upgrade AAR engine to include live feedback overlay.** Phase 3A: Simple real-time indicators (aim trace on screen, hit/miss flash, ammo counter). Phase 3B: AI coaching (ACH path C, post-launch). | **+$0** (3A software-only) / **+$15K** (3B AI dev) | **HIGH** (3A) / MEDIUM (3B) | 3A: Phase 3 / 3B: Post-launch |
| **M4** | **Scoring module reusability** | OCR processor shared across FATS 100/180 product line | Scoring embedded in Unity app per variant | **Design scoring/AAR as independent Unity module** (DLL or package) reusable across LITE/FIXED/FULL/CORTEX. Separate ballistic engine + AAR data pipeline from scenario-specific code. | **+$0** (architecture decision) | **HIGH** | Phase 3 |
| **M5** | **Doctrine configuration layer** | Coaching references customer's own training doctrine (per-customer configurable) | No doctrine configuration | **Add doctrine config file** (JSON/YAML) defining: weapon handling standards, accuracy benchmarks, engagement procedures, scoring thresholds per VN military doctrine (TCLL, QCHD). Enables: customer-specific coaching when M3B is ready. Creates switching cost. | **+$2K dev** | MEDIUM | Phase 3-4 |
| **M6** | **Sensor data logging richness** | Trigger pressure + cant + stock weld + aim at 60Hz+ | Encoder az/el at 10Hz + trigger on/off | **Upgrade logging: encoder 30Hz→60Hz, add trigger force + cant angle to data stream.** Requires M1 + M2 sensors. Enables: richer AAR analytics, future AI training data for coaching model. | **+$0** (software only, once sensors added) | HIGH | Phase 3 |
| **M7** | **Trainee profile tracking** | Implicit in 40+ country coaching database | Basic skill dimension tracking (5 dimensions) | **Formalize trainee database:** per-shooter history, progress tracking, skill trends, automatic difficulty adjustment. WX already has S-06 AAR logging — extend to persistent profile. | **+$1K dev** | MEDIUM | Phase 3-4 |

### ADDED (WX unique — not in FATS, WX keeps as advantage)

| # | Feature | WX LITE | FATS Equivalent | Why WX Unique |
|---|---------|---------|-----------------|---------------|
| **A1** | **Ship motion platform (2-DOF)** | Roll ±12°, pitch ±8°, JONSWAP sea state model | **NONE** — no motion platform in any FATS product | Maritime gunnery requires platform motion. Training transfer for naval gunners is ZERO without ship motion simulation. WX's physical platform = primary differentiator. |
| **A2** | **Naval weapon pedestal mount** | Authentic traverse (slip clutch + magnetic brake) + elevation (counterweight) | Hand-held weapon only | Crew-served weapon on naval mount has completely different motor skills than hand-held rifle. FATS cannot simulate this. |
| **A3** | **C-UAV/USV target AI** | 5 UAV groups + 3 USV profiles with adaptive difficulty | FATS Drone = VBS4 land-only, no USV, no naval scenarios | WX purpose-built for maritime C-UAV/USV threat. FATS Drone is generic battlefield drone sim. |
| **A4** | **MWI with NFC auto-detect** | Weapon module swap ≤5min, NFC auto-configures ballistic/recoil/sight/scoring | BlueFire serial number (manual weapon selection in SW) | WX NFC approach is FASTER + less error-prone for field use. |
| **A5** | **Software sovereignty** | Unity on-premise, pre-imaged SSD, no telemetry, no foreign server (L-04 sacred) | VBS3/4 licensed from Czech company (Bohemia Interactive) | For VN defense procurement, on-premise sovereignty is mandatory. FATS' VBS dependency is a liability for sovereignty-sensitive customers. |
| **A6** | **Visual cue assist for micro-UAV** | Subtle highlight/blink when UAV <2px on screen at >250m | No equivalent (FATS targets are human-scale) | Micro-UAV (30cm) at 300m = 1.8px. Undetectable without assist. WX solves training gap that FATS doesn't even face (they don't train anti-drone gunnery). |
| **A7** | **V-SMASH ballistic engine reuse** | Proven ballistic core from existing WX product | Proprietary (built from scratch over 30+ years) | WX reuses validated engine = lower risk, faster development. |

### REMOVED (FATS has, WX deliberately excludes)

| # | Feature | FATS Has | Why WX Removes | Impact |
|---|---------|---------|---------------|--------|
| **R1** | VBS3/VBS4 tactical collective engine | Squad-level tactical simulation, mission rehearsal | WX scope = gunnery training, not tactical simulation. Adding VBS = massive cost + license dependency + scope creep. | None for naval gunnery. Future CORTEX variant could add tactical layer. |
| **R2** | HD Video judgmental scenarios | Pre-recorded branching video for judgment training | Naval gunnery engagement is rules-based (ROE clear), not ambiguous like law enforcement scenarios. Judgment training = different product. | Low for C-UAV gunnery. FATS video mode serves law enforcement, not naval. |
| **R3** | Wireless weapon (Bluetooth) | BlueFire Bluetooth 2-way | Naval weapon is pedestal-mounted = no need for wireless. Wired is MORE reliable (salt spray, EMI on ship). Wireless adds battery management complexity for zero benefit. | None — wired is BETTER for naval mount. |
| **R4** | Buttstock pressure sensor | Cheek/shoulder weld quality measurement | Naval crew-served weapon operator stands BEHIND weapon, not cheek-weld like rifle. Stock weld is irrelevant for 12.7mm DSHK/NSV on naval mount. | None for naval mount. Revisit IF rifle variant (PKM/WM-05) added. |
| **R5** | 15-trainee concurrent capacity | OCR multi-spot disambiguation for 15 trainees | LITE = single operator. FULL/CORTEX will address multi-trainee. Building for 15 in LITE adds massive unnecessary complexity. | None for LITE. By design — addressed in FULL/CORTEX variants. |
| **R6** | Compressed air fill station | Magazine-contained gas recharge infrastructure | WX uses 24VDC solenoid = no gas, no fill station, no maintenance, no safety concerns. Eliminates entire maintenance workflow. | **POSITIVE** — WX maintenance is SIMPLER than FATS. |
| **R7** | Real weapon conversion | Convert live weapon body → simulator | WX fabricates purpose-built replica → CAN optimize for training (lighter, better balanced, integrated sensors) without constraints of real weapon geometry. | **POSITIVE** — WX can optimize weapon mockup for training transfer, not weapon fidelity. |

---

## DIVERGENCE SUMMARY

| Category | Count | Items |
|----------|-------|-------|
| **KEPT** (WX validates FATS) | 8 | 180° FOV, weapon-specific recoil, instructor authoring, AAR replay, multi-weapon platform, edge-blend, fire control, latency |
| **MODIFIED** (upgrade from FATS insight) | 7 | Trigger force sensor, cant IMU, real-time feedback, scoring module reuse, doctrine config, data logging 60Hz, trainee profiles |
| **ADDED** (WX unique advantage) | 7 | Ship motion, naval mount, C-UAV/USV AI, NFC MWI, sovereignty, visual cue assist, V-SMASH reuse |
| **REMOVED** (deliberately excluded) | 7 | VBS3/4, video judgment, wireless, stock weld, 15-trainee, air fill, weapon conversion |
| **TOTAL** | **29** | |

---

## PHASE 3 EMBODIMENT IMPACT

### Modifications to incorporate in Phase 3 (CEO decision required):

**Tier 1 — DO NOW (Phase 3, ≤$1K additional, high impact):**

| # | Modification | Cost | Change to WX Design | Impact |
|---|-------------|------|---------------------|--------|
| M1 | Trigger strain gauge | +$10/unit, $500 dev | Add to weapon module PCB design | Enables coaching on trigger squeeze |
| M2 | Cant IMU (MPU-6050) | +$8/unit, $300 dev | Add to weapon module PCB, mount near grip | Enables cant correction coaching |
| M4 | Scoring module as reusable Unity package | +$0 | Architecture decision in Unity project structure | Enables LITE→FIXED→FULL reuse |
| M6 | Data logging upgrade (60Hz + sensor data) | +$0 | Software change in Unity data pipeline | Future AI training data |

**Tier 1 total: +$18/unit + $800 development. ROI: massive.**

**Tier 2 — DO SOON (Phase 3-4, $2-3K additional):**

| # | Modification | Cost | Timeline |
|---|-------------|------|---------|
| M3A | Real-time feedback overlay (simple) | +$0 (SW only) | Phase 3 |
| M5 | Doctrine config layer (JSON/YAML) | +$2K dev | Phase 4 |
| M7 | Trainee profile database | +$1K dev | Phase 4 |

**Tier 3 — DO LATER (Post-launch, $15K, ACH leapfrog):**

| # | Modification | Cost | Timeline |
|---|-------------|------|---------|
| M3B | AI coaching engine (ACH path C) | +$15K dev | Post-launch (6 months) |

---

## REQUIREMENTS DELTA LOG

| Delta-ID | WX Req-ID | Change Type | Current Value | Proposed Change | Reason | CEO Approve? |
|----------|-----------|------------|---------------|----------------|--------|-------------|
| D-001 | NEW | **NEW REQ** | — | "Trigger force sensor: strain gauge, ≥0.1N resolution, integrated in weapon module" | FATS RE: trigger pressure = core coaching input | PENDING |
| D-002 | NEW | **NEW REQ** | — | "Weapon cant sensor: MEMS IMU (MPU-6050), ≤0.5° resolution, mounted on weapon body" | FATS RE: cant sensing enables handling quality metric | PENDING |
| D-003 | S-06 | **VALUE CHANGE** | "aim path 10Hz" | "aim path + trigger force + cant angle at **60Hz**" | FATS RE: richer sensor data → better coaching | PENDING |
| D-004 | NEW | **NEW REQ** | — | "Scoring/AAR module designed as reusable Unity package for cross-variant deployment" | FATS RE: OCR shared across product family → WX should do same | PENDING |
| D-005 | NEW | **NEW REQ (W)** | — | "Real-time feedback overlay: aim trace, hit flash, ammo counter visible during engagement" | FATS RE: Automatic Coaching is real-time. WX Phase 3A = simple version. | PENDING |
| D-006 | NEW | **NEW REQ (W)** | — | "Doctrine configuration file (JSON/YAML) for customer-specific training standards" | FATS RE: doctrine lock-in creates switching cost | PENDING |

---

## COACHING ARCHITECTURE DECISION (CEO — Core, non-delegable)

Based on RE of all 3 competitors (Zen FAC, ACME-GAR-GTS, InVeris FATS), coaching is the **#1 value driver** in weapon training simulation. CEO must decide WX path:

### Path A: Ship without coaching (current plan)
- **Pro:** Fast, cheap, meets PoC gate 2026-05-07
- **Con:** WX LITE = "projection + recoil" = commodity. Risk: any competitor can replicate.
- **Risk level:** HIGH for long-term competitive position
- **Revenue impact:** $50-70K per unit (hardware margin only)

### Path B: Rule-based coaching (match FATS)
- **Pro:** Proven approach, moderate development ($5K + 3 months)
- **Con:** 30 years behind FATS in coaching rule database. Hard to catch up.
- **Risk level:** MEDIUM — matches but doesn't differentiate
- **Revenue impact:** +$5-10K per unit (coaching premium)

### Path C: AI coaching (ACH leapfrog)
- **Pro:** AI learns from EACH session → gets better over time. FATS rule-based = static. **WX AI coaching would be the ONLY adaptive coaching system in the market.**
- **Con:** Longer development ($15K + 6 months post-launch). Needs training data (first N sessions).
- **Risk level:** LOW-MEDIUM — if it works, creates compound moat
- **Revenue impact:** +$10-20K per unit (AI coaching premium) + recurring data/model update revenue
- **ACH compound:** Every session → training data → better model → better coaching → more sessions. Classic data flywheel.

### Recommended: **A now → B soon → C as ACH goal**

1. **Phase 3 PoC (now):** Ship with Tier 1 modifications (sensors + logging). No coaching yet. Meets 2026-05-07 gate.
2. **Phase 3 full (3 months):** Add M3A real-time feedback overlay (simple visual indicators). Ship LITE v1.0.
3. **Phase 4 (6 months):** Add doctrine config (M5) + trainee profiles (M7). Rule-based coaching from sensor data. Ship LITE v1.1.
4. **Post-launch (12 months):** Accumulate training data → build AI coaching model. Ship LITE v2.0 with ACH coaching. This is the **FATS-killer feature.**

This staged approach:
- ✅ Meets PoC deadline (2026-05-07)
- ✅ Ships revenue-generating product (v1.0) quickly
- ✅ Collects training data from Day 1 (sensors + 60Hz logging)
- ✅ Builds toward AI coaching moat (v2.0)
- ✅ Total additional cost: $18/unit + $18.8K development (spread over 12 months)

---

## STAGE 3 SUMMARY

```
=== STAGE 3 COMPLETE — InVeris FATS DIVERGENCE MAP ===

Divergence items: 29 total
  KEPT:     8 (WX validates FATS architecture)
  MODIFIED: 7 (FATS insights → WX upgrades)
  ADDED:    7 (WX unique advantages confirmed)
  REMOVED:  7 (deliberately excluded for naval niche)

Requirements deltas: 6 (2 new D, 1 value change, 1 arch decision, 2 new W)

Phase 3 modifications:
  Tier 1 (DO NOW):  4 items, +$18/unit + $800 dev — HIGH impact
  Tier 2 (DO SOON): 3 items, +$3K dev — MEDIUM impact
  Tier 3 (DO LATER): 1 item, +$15K dev — ACH LEAPFROG

CEO DECISIONS REQUIRED (Core — non-delegable):
1. ✅/❌ Approve 6 requirements deltas (D-001 through D-006)
2. ✅/❌ Approve Tier 1 modifications for Phase 3 PoC scope
3. A/B/C Select coaching path (recommend: A→B→C staged)
4. ✅/❌ Approve proceeding to Stage 5 (Knowledge Capture)
   (Stages 3P + 4M skipped — competitive intel mode, not acquisition)

CEO: decisions?
```
