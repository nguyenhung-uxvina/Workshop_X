---
created: 2026-04-10
type: coupling-analysis
block: BD
project: VN-MGM V1-NAVAL-12.7
mode: quick (retroactive)
status: COMPLETE
---

# BD Coupling & Risk — VN-MGM V1-NAVAL-12.7

## 1. Cross-Domain Coupling (V1 = single domain: Mechanical)

V1 is a **purely mechanical** product. No electronics, no software, no AI.

| Domain Pair | Coupling | Notes |
|------------|:--------:|-------|
| Mech × Elec | **NONE** | V1 has zero electrical components (SC-2: no power) |
| Mech × SW | **NONE** | No software |
| Mech × AI | **NONE** | No AI (SF-A/B/C are future V5 add-ons) |

**Coupling risk: ZERO for V1.** This is one of its greatest strengths — single-domain product = no integration debt, no cross-domain failure modes, no interface complexity.

V5/N12 will introduce Mech×Elec coupling (motor, controller). N11 adds Mech×Elec×SW (gyro + servo loop). ACH adds AI layer. Each step adds coupling → each step needs integration management.

## 2. Assumption Register (V1 proven — all validated)

| # | Assumption | Type | Status | Evidence |
|---|-----------|------|:------:|---------|
| A1 | S355 steel adequate for 50 kN × 50,000 cycles | Technical | ✅ Validated | 300 units, 0 fatigue failures |
| A2 | Slewing ring bearing Ø200mm adequate for axial+moment loads | Technical | ✅ Validated | 300 units, rare seizure (only from grease neglect) |
| A3 | STANAG 4568 bolt pattern present on target vessels | Interface | ✅ Validated | Installed on patrol boats, DK1, fishing militia |
| A4 | Single operator can generate ≤49 N·m for sustained traverse | Ergonomic | ✅ Validated | Field: 30°/s at ~40 N·m, fatigue after 30 min |
| A5 | Galvanize + epoxy + PU provides ≥1,000h salt fog | Material | ✅ Validated | Field: coating adequate, touch-up at 3 years |
| A6 | 73 kg carriable by 2 persons without crane | Logistic | ✅ Validated | Field: 2-person carry with handles, fits pickup truck |
| A7 | CNC tolerances ±0.1mm achievable at WX | Production | ✅ Validated | 300 units with consistent quality |

**0 unvalidated assumptions.** Product is TRL 9.

## 3. Sensitivity Analysis (weight variation on VDI 2225)

What if HOQ weights shift ±20%?

| Scenario | C1 weight | C5 weight | Rt | Change |
|----------|-----------|-----------|-----|--------|
| Baseline | 0.175 | 0.104 | **0.560** | — |
| C1 (Speed) +20% | 0.210 | 0.104 | 0.575 | +2.7% |
| C5 (Night) +20% | 0.175 | 0.125 | 0.549 | -2.0% |
| C5 (Night) +50% | 0.175 | 0.156 | 0.532 | -5.0% |
| C3 (Corrosion) +20% | 0.175 | 0.104 | 0.572 | +2.1% |

**Rt is stable (0.53-0.58) across all weight variations.** V1 concept ranking does not change — it remains "adequate technical, excellent economic." Night operability sensitivity is low because V1 scores 1 regardless of weight.

## 4. Key Risks for V5/N12 Inheritance (not V1 risks)

| Risk | Probability | Impact | Mitigation |
|------|:-----------:|:------:|-----------|
| Motor adds vibration → affects aiming precision | MED | MED | Phase A bench test: measure vibration spectrum |
| EM clutch fail-closed → operator cannot override | LOW | HIGH | SC-V5-1: NC clutch (fail-safe = manual mode) |
| N12 clamp design → doesn't fit V1 production variations | MED | MED | Measure 5 production V1 units for tolerance range |
| ACH camera obstructs weapon recoil path | LOW | MED | Mount camera BELOW barrel centerline |
| Condition sensor false positive → unnecessary maintenance | MED | LOW | Threshold tuning with 6-month field data |
