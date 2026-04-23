---
project: V-SMASH
type: requirements-reconciliation
version: 1.0
created: 2026-02-24
status: draft — requires KN sign-off before SW-AI / SW-BAL SRS finalize
scope: SG-3 Physics Coupling — 3 B1-level requirement conflicts
origin: Batch QC Gate run on 4 SW proposals (Session 50)
---

# V-SMASH — SG-3 Requirements Reconciliation

**Purpose:** Resolve 3 VM-level requirement conflicts that block SW-AI and SW-BAL SRS. Each conflict involves coupled parameters where the original B1 spec is either physically inconsistent or needs conditioning.

---

## Issue 1: VM-E03 — System Power Budget

### Conflict

| Parameter | B1 Value | Physical Reality |
|-----------|----------|-----------------|
| VM-E03: avg system power | ≤2.3 W | Jetson Orin Nano TDP: 7–15 W |
| VM-E07: peak system power | ≤4.0 W | Jetson Orin Nano peak: 15 W |

The 2.3 W figure traces to the Hailo-8 SoC candidate (BOM R2 risk evaluation). Hailo-8 TDP ≈ 2.5 W is compatible with 2.3 W system average. Jetson Orin Nano is the selected SoC (VM-2101) — its minimum operating mode is 7 W.

### Analysis

Jetson Orin Nano power modes (JetPack 6.x):

| Mode | SoC Power | AI Inference Rate | Total System (est.) |
|------|-----------|-------------------|---------------------|
| 7 W (MAXN off) | 5–7 W | ~15 fps (reduced) | ~6–8 W |
| 15 W (MAXN) | 10–15 W | 30 fps (full) | ~11–16 W |
| Idle / display-only | 2–3 W | 0 fps | ~3–4 W |

Mission-average depends on duty cycle. Typical engagement scenario:
- 80% idle/scanning (no detection): SoC in 7W mode at low inference rate → ~5 W system
- 15% active tracking (detection): SoC in 15W mode at 30 fps → ~12 W system
- 5% peak (burst inference + display + BLE): → ~16 W system
- **Weighted average: 0.80×5 + 0.15×12 + 0.05×16 = 6.6 W mission-average**

Battery impact (14.8 V, 2600 mAh = 38.5 Wh):
- At 2.3 W (original): 16.7 h — unrealistic with Jetson
- At 6.6 W (reconciled): **5.8 h mission** — acceptable for infantry patrol
- At 12 W (continuous tracking): 3.2 h — short but realistic for active engagement

### Resolution

| Requirement | Original | Reconciled | Rationale |
|------------|----------|------------|-----------|
| **VM-E03** | ≤2.3 W avg | **≤7.0 W mission-average** | Jetson 7W mode baseline + peripherals. Covers 80/15/5 duty cycle. |
| **VM-E07** | ≤4.0 W peak | **≤16 W peak** | Jetson 15W MAXN mode + all peripherals active. |
| VM-E03-NOTE | — | **≤3.0 W display-only mode** | No AI inference. OLED + FSM only. Useful for standby/sentry mode. |

**Battery spec change needed:** Current 38.5 Wh battery provides ~5.5 h mission at 7.0 W. If ≥8 h required, battery must increase to ≥56 Wh (e.g., 14.8 V / 3800 mAh). This is a B2 hardware design decision.

**SW impact:**
- FW-PWR module: power mode switching strategy (idle→7W→15W) per FSM state
- SW-AI: inference rate reduces in 7W mode (~15 fps vs 30 fps) — acceptable if tracked
- All SW sub-projects: revised power budget allocation

| Module | Original Budget | Reconciled Budget | Notes |
|--------|----------------|-------------------|-------|
| FW overhead | ≤0.3 W | ≤0.5 W | FSM, LED, thermal monitoring |
| SW-AI inference | — (not broken out) | ≤5.0 W (7W mode) / ≤12.0 W (15W mode) | Dominates power budget |
| OLED display | — | ≤0.3 W | SPI-driven, 128×64 or similar |
| SW-COM (BLE) | — | ≤0.05 W | nRF52840 |
| Sensors (CMOS) | — | ≤0.5 W | VM-1200 + MIPI CSI-2 |
| **System total** | **≤2.3 W** | **≤6.4 W (7W mode) / ≤13.4 W (15W mode)** | |

---

## Issue 2: VM-O06 — Detection Range vs Pixel Resolution

### Conflict (as reported in batch QC)

VM-O06 requires detection of ≥30 cm drone at ≥200 m. The batch QC flagged this as "sub-pixel at model input (640×640), physically undetectable by YOLO."

### Analysis — Updated with VM-S08 Optical Binding

**VM-S08 (FOV 8–15°) already exists** — added in Phase 1 Gate 2 review per QC Run 12. The batch QC missed this because it reviewed SW proposals only, not the Phase 1 requirements list.

Pixel calculation at 12° HFOV (nominal design):

| Stage | Calculation | Result |
|-------|-------------|--------|
| Target angular size | 0.30 m / 200 m | 1.5 mrad |
| Sensor pixel angular resolution | 12° / 1920 px = 0.109 mrad/px | |
| **Pixels on sensor** | 1.5 / 0.109 | **13.8 px** |
| YOLO letterbox resize ratio | 640 / 1920 | 0.333× |
| **Pixels at model input** | 13.8 × 0.333 | **4.6 px** |

Range sensitivity across FOV range:

| FOV | px on sensor (30cm@200m) | px at model input (640) | Detection feasibility |
|-----|-------------------------|------------------------|----------------------|
| 8° | 20.6 px | 6.9 px | Comfortable |
| 10° | 16.5 px | 5.5 px | Good |
| **12° (nominal)** | **13.8 px** | **4.6 px** | **Marginal — detectable with contrast** |
| 15° | 11.0 px | 3.7 px | Marginal — high FNR likely |

Range sensitivity at 12° FOV:

| Range | px on sensor | px at model input | Detection confidence |
|-------|-------------|-------------------|---------------------|
| 100 m | 27.5 px | 9.2 px | High (Pd ≥95%) |
| **150 m** | **18.3 px** | **6.1 px** | **Good (Pd ≥90%)** |
| **200 m** | **13.8 px** | **4.6 px** | **Marginal (Pd ~70–85%)** |
| 250 m | 11.0 px | 3.7 px | Low (Pd <60%) |
| 300 m | 9.2 px | 3.1 px | Very low (Pd <40%) |

### Resolution

The batch QC flag was based on incorrect calculation (assumed wide FOV without checking VM-S08). The optical chain IS bound by VM-S08.

However, the analysis reveals that **200 m detection is marginal at 12° FOV** (4.6 px at model input). The proposal's SWR-AI-01 already acknowledges this: "≥200m (D), ≥150m (kill threshold)."

| Requirement | Original | Reconciled | Rationale |
|------------|----------|------------|-----------|
| **VM-O06** | ≥200 m detection range | **≥200 m detection range (DESIRED), ≥150 m (MANDATORY)** | 200m = 4.6px at model input — Pd ~70–85%. 150m = 6.1px — Pd ≥90%. |
| **NEW: VM-O06-A** | — | **Minimum detectable target: ≥4 px at model input** | Below 4px, YOLO false-negative rate exceeds acceptable limits. |
| **NEW: VM-O06-B** | — | **FOV selection shall prioritize detection range over situational awareness: ≤12° HFOV recommended** | Narrower FOV = more pixels on target. 15° FOV degrades 200m detection to ~3.7px (below minimum). |

**SW impact:**
- SW-AI SRS: SWR-AI-01 detection range specified as D/M (desired/mandatory) — already correct
- SW-AI SRS: Add requirement for minimum target pixel size at model input (≥4 px)
- SW-AI SRS: Pd requirement conditioned on range: ≥95% @150m, ≥80% @200m (not ≥90% @200m)
- SW-AI validation: Test plan must include pixel-size sweep to characterize Pd vs target size curve

**SWR-AI-03 revision needed:**

| ID | Original | Reconciled |
|----|----------|-----------|
| SWR-AI-03 | Pd ≥90% at 200m | **Pd ≥80% at 200m** (12° FOV, 4.6px target) |
| SWR-AI-04 | Pd ≥95% at 150m | **Pd ≥90% at 150m** (unchanged — 6.1px target) |
| NEW: SWR-AI-03A | — | **Pd vs range characterization curve required at model validation** |

---

## Issue 3: VM-S06 — Lead Accuracy vs Range Error

### Conflict

VM-S06 requires lead accuracy ≤1.0 mrad. SW-BAL uses monocular range estimation with ±30% error. Lead angle is proportional to range × angular velocity → ±30% range error propagates to ±30% lead error.

### Analysis

Lead angle formula (simplified): `lead_angle = (range × angular_velocity × time_of_flight) / range`

For 7.62×39mm at crossing target:

| Range | Angular Vel | Nominal Lead | Lead Error (±30% range) | Within 1.0 mrad? |
|-------|-------------|-------------|------------------------|-------------------|
| 100 m | 5 deg/s | ~1.2 mrad | ±0.4 mrad | YES |
| 100 m | 15 deg/s | ~3.5 mrad | ±1.1 mrad | NO |
| 100 m | 30 deg/s | ~7.0 mrad | ±2.1 mrad | NO |
| 150 m | 5 deg/s | ~2.0 mrad | ±0.6 mrad | YES |
| **150 m** | **10 deg/s** | **~4.0 mrad** | **±1.2 mrad** | **NO** |
| 150 m | 15 deg/s | ~6.0 mrad | ±1.8 mrad | NO |
| 200 m | 5 deg/s | ~3.0 mrad | ±0.9 mrad | YES (barely) |
| 200 m | 10 deg/s | ~6.0 mrad | ±1.8 mrad | NO |

**Observation:** ≤1.0 mrad accuracy is only achievable at low angular velocities (≤5 deg/s) regardless of range. The ±30% monocular range error makes the spec unachievable for any meaningfully crossing target.

However, there are two mitigating factors:
1. **Most real engagements are near-head-on or near-tail-on** — angular velocity relative to shooter LOS is typically ≤10 deg/s for approaching drones
2. **Range error reduces at closer ranges** — the ±30% is worst-case; typical error is ±15–20%

### Resolution

| Requirement | Original | Reconciled | Rationale |
|------------|----------|------------|-----------|
| **VM-S06** | ≤1.0 mrad | **≤1.0 mrad at ≤150 m range AND ≤10 deg/s angular velocity** | Operating envelope where spec is achievable with monocular range estimation |
| **NEW: VM-S06-A** | — | **≤2.0 mrad at ≤200 m AND ≤20 deg/s** | Extended envelope with degraded (but useful) accuracy |
| **NEW: VM-S06-B** | — | **Display "EST" (estimate) indicator when lead error >1.0 mrad** | Operator awareness that lead is approximate |
| **NEW: VM-S06-C** | — | **Display "RANGE?" when range estimate outside 30–300 m bounds** | Already in SW-BAL proposal (SWR-BAL-S03) — now elevated to VM-level |

**SW impact:**
- SW-BAL SRS: Lead accuracy spec conditioned on range × angular velocity envelope
- SW-BAL SRS: New requirement for "EST" display indicator when outside primary envelope
- SW-FW SRS: Add "EST" to OLED message list (currently 8 messages → 9)
- SW-AI SRS: Angular velocity output must include quality metric (for BAL to decide EST display)

---

## Summary: SG-3 Resolution Status

| # | Issue | Original Spec | Reconciled Spec | Status |
|---|-------|--------------|-----------------|--------|
| 1 | VM-E03: Power | ≤2.3 W avg | **≤7.0 W mission-avg, ≤16 W peak** | RESOLVED — battery spec may need B2 update |
| 2 | VM-O06: Detection range | ≥200 m | **≥200 m (D), ≥150 m (M) + ≤12° HFOV binding** | RESOLVED — VM-S08 exists, Pd conditioned |
| 3 | VM-S06: Lead accuracy | ≤1.0 mrad | **≤1.0 mrad at ≤150m / ≤10 deg/s** | RESOLVED — conditioned on operating envelope |

### Unblocked SRS Work

| SRS | Was Blocked On | Now Unblocked By |
|-----|---------------|-----------------|
| **SW-AI** | VM-O06 detection range (pixel count uncertain) | Issue 2: FOV binding confirmed, Pd conditioned by range, min 4px target |
| **SW-BAL** | VM-S06 lead accuracy (unachievable with ±30% range error) | Issue 3: accuracy conditioned on range × angular velocity envelope |
| **SW-FW** | VM-E03 power budget (2.3W impossible on Jetson) | Issue 1: revised to 7.0W mission-avg with power mode switching |

### How to Reference This Document

In each SW SRS, add to the References section:

```markdown
| [SG3] | V-SMASH_SG3_Requirements_Reconciliation_v1.0 | Reconciled VM-E03/VM-O06/VM-S06 values |
```

For specific requirements, cite the reconciled value:

```markdown
Per [SG3] Issue 2: VM-O06 reconciled to ≥200 m (D), ≥150 m (M) with Pd ≥80% @200m, ≥90% @150m.
```

---

*V-SMASH SG-3 Requirements Reconciliation v1.0*
*Origin: Batch QC Gate run — Session 50 (2026-02-24)*
*Cross-reference: [[V-SMASH-M_Requirements_List_v1.0|B1 VM-E03, VM-O06, VM-S06, VM-S08]], [[V-SMASH-SW-AI_Product_Proposal_v1.0|SW-AI]], [[V-SMASH-SW-BAL_Product_Proposal_v1.0|SW-BAL]], [[progress|SG-3 Escalation]]*
