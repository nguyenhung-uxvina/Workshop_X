# VN-12.7MM-SIM-012: CONCEPT EVALUATION (VDI 2225)
## Phase 2: Conceptual Design -- Scope: I-01 (Standard) Base Variant

**Document**: VN-12.7MM-SIM-012-CE | **Version**: 2.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Supersedes**: VN-12.7MM-SIM-005-CE v1.0 (2026-01-20)
**Input Documents**:
- VN-12.7MM-SIM-002-REQ v1.3 (Requirements List)
- VN-12.7MM-SIM-011-MM v2.0 (Morphological Matrix)

---

# 1. CHANGES FROM v1.0

| Aspect | v1.0 | v2.0 |
|--------|------|------|
| Criteria count | 8 | 10 |
| Requirements baseline | v1.0 (unquantified) | v1.3 (quantified thresholds) |
| Criteria traceability | Informal | Each criterion mapped to specific requirement IDs |
| Sensitivity analysis | 2 informal scenarios | 3 structured scenarios with recalculated scores |
| Risk register | None | Top 5 risks for selected concept |
| Strength-weakness profile | None | Included |
| Calculation transparency | Summary matrix with arithmetic errors | Full step-by-step calculation |

**Note on v1.0 arithmetic errors**: The v1.0 evaluation matrix header showed scores (V1=2.35, V2=3.00, V3=2.95, V4=2.65) that did not match the detailed calculations below it (V1=2.55, V3=3.00, V4=2.85). This v2.0 provides single-source calculations with verification.

---

# 2. EVALUATION CRITERIA

## 2.1 Criteria Definition

Criteria are derived from the quantified requirements in REQ v1.3. Weights reflect I-01 variant priorities: training effectiveness is primary justification for procurement; control fidelity and ballistic accuracy are the technical enablers; cost and local content are program-approval gates.

| # | Criterion | Mapped Requirements | Weight | Rationale for Weight |
|---|-----------|-------------------|--------|---------------------|
| C1 | Training effectiveness | TE-002 (>=15% hit rate), TE-003 (>=20% lead error reduction), TE-004 (>=15% dispersion reduction) | 0.20 | Primary justification for procurement investment |
| C2 | Control fidelity | K-005 (<=10% friction var), F-006 (<=0.05 deg backlash), K-010 (+-20% feel match) | 0.15 | Directly enables training transfer; quantified in v1.3 |
| C3 | Ballistic model accuracy | BM-004 (<=2% drag error), FC-001 (<=0.5 deg lead), FC-002 (<=0.2 deg superelev) | 0.15 | Directly enables sim-to-live correlation (TE-010) |
| C4 | Visual/audio realism | S-001 to S-012 (display, tracer, impact, HUD, audio) | 0.10 | Contributes to immersion but secondary to control/ballistic fidelity |
| C5 | Cost compliance | CO-001 (<=45K unit cost for I-01) | 0.10 | Hard gate for program approval |
| C6 | Local content | PR-001 (>=70% for I-01) | 0.05 | Policy requirement; lower weight because all compliant concepts cluster near threshold |
| C7 | Maintainability | MT-001 (MTBF >=500h), MT-002 (MTTR <=4h) | 0.10 | Operational sustainability |
| C8 | Development risk and schedule | SCH-001 (<=12 months prototype) | 0.05 | Schedule is firm but lower weight as most concepts are feasible within window |
| C9 | Manufacturability | PR-002 (80% COTS), PR-005 (no special tooling) | 0.05 | Affects production ramp and unit-to-unit consistency |
| C10 | Variant extensibility | Ability to support CTR, TAC, ACH, TAB variants from base design | 0.05 | Strategic value for portfolio; lower weight because I-01 must stand alone |
| | **TOTAL** | | **1.00** | |

## 2.2 Scoring Scale (VDI 2225)

| Score | Meaning | Description |
|-------|---------|-------------|
| 0 | Unacceptable | Does not meet minimum requirement; showstopper |
| 1 | Just tolerable | Barely acceptable; significant limitation |
| 2 | Adequate | Meets minimum requirement |
| 3 | Good | Exceeds requirement; comfortable margin |
| 4 | Very good | Close to ideal solution |

---

# 3. CONCEPT SCORING

## 3.1 Scoring Rationale by Criterion

### C1: Training Effectiveness (weight 0.20)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 1 | 3-DOF ballistics + single monitor + scripted AI = poor training transfer. Likely fails TE-002/003/004 thresholds. |
| V2 Standard | 3 | 6-DOF + triple monitor + behavior tree AI + statistical scoring. Designed to meet TE-002 (>=15%), TE-003 (>=20%), TE-004 (>=15%). Statistical AAR supports skill development. |
| V3 Enhanced | 4 | All V2 capabilities + adaptive AI + Kalman FC + immersive display. Likely exceeds all TE thresholds. |
| V4 Replica | 3 | Authentic feel is strong for transfer, but same ballistic/scoring engine as V2. Equal to V2 in measured outcomes; advantage is subjective. |

### C2: Control Fidelity (weight 0.15)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 1 | Potentiometer (0.1-0.5 deg resolution, marginal). Friction brake fails K-005 (>10% variation). No self-test. |
| V2 Standard | 3 | Optical encoder (<=0.1 deg). Magnetic brake meets K-005 (<=10%). Meets F-006 (<=0.05 deg). Meets K-010 with calibration. |
| V3 Enhanced | 4 | Resolver + servo motor. Torque variation <2%, backlash <0.01 deg. Programmable feel profiles. Exceeds all requirements. |
| V4 Replica | 3 | Authentic weapon feel (subjective K-010 match). But actual mount friction is uncontrolled -- K-005 compliance uncertain. Score reflects benefit of doubt; could be 2 if friction proves non-compliant. |

### C3: Ballistic Model Accuracy (weight 0.15)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 1 | 3-DOF model: drag error >2% (fails BM-004), no validated dispersion (fails BM-008). Lookup FC is adequate but paired with inadequate ballistics. |
| V2 Standard | 3 | 6-DOF analytical: meets BM-004 (<=2%), BM-008 (<=3.0 MOA). Analytical FC meets FC-001, FC-002, FC-003. Requires validation effort. |
| V3 Enhanced | 4 | Same 6-DOF as V2 + Kalman filter FC. Best lead accuracy for maneuvering targets. Exceeds FC-001. |
| V4 Replica | 3 | Same 6-DOF + analytical FC as V2. Identical ballistic performance. |

### C4: Visual/Audio Realism (weight 0.10)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 1 | Single monitor (fails S-002 >=90 deg FOV). Stereo audio (no spatial). Minimal immersion. |
| V2 Standard | 3 | Triple 27" monitors (~120 deg FOV). Unity rendering: good water, tracer, impact effects. 5.1 surround with directional cues. |
| V3 Enhanced | 4 | Curved screen (150+ deg). Unreal Nanite/Lumen for photorealistic rendering. Best visual fidelity available. |
| V4 Replica | 3 | Same triple monitor + Unity + 5.1 surround as V2. Identical visual/audio subsystem. |

### C5: Cost Compliance (weight 0.10)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 4 | $25K is well under $45K. Significant margin. |
| V2 Standard | 3 | $42K is under $45K with ~7% margin. Compliant but tight. |
| V3 Enhanced | 0 | $65K exceeds $45K by 44%. Hard fail on CO-001 MUST requirement. |
| V4 Replica | 1 | $53K exceeds $45K by 18%. Fails CO-001. Scored 1 (not 0) because weapon parts cost may be reduced via MoD arrangement, but uncertain. |

### C6: Local Content (weight 0.05)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 4 | ~85% local. Potentiometers, steel frame, all basic components locally sourced. |
| V2 Standard | 3 | ~70% local. Encoders and magnetic brakes imported; structure, displays, audio, integration local. Meets PR-001 threshold. |
| V3 Enhanced | 1 | ~55% local. Resolvers, servo motors, projectors all imported. Below PR-001 (>=70%) for I-01. |
| V4 Replica | 1 | ~45% local (if weapon parts classified as non-local procurement). Below PR-001. |

### C7: Maintainability (weight 0.10)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 3 | Simple components, easy replacement. But no BIST (MT-006 fail). MTBF likely >500h due to simplicity. MTTR <2h. |
| V2 Standard | 3 | BIST meets MT-006. Modular design. MTBF >=500h achievable. MTTR <=4h. Standard components locally stocked. |
| V3 Enhanced | 2 | Servo motor and projector system require specialized maintenance. MTTR may exceed 4h for projector alignment. ML components need software expertise. |
| V4 Replica | 2 | Weapon parts maintenance requires MoD-specific knowledge. Spare parts from military supply chain (slow). Sensor retrofit complicates access. |

### C8: Development Risk and Schedule (weight 0.05)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 4 | Low risk. 7-month timeline. All proven components. |
| V2 Standard | 3 | Moderate risk. 11-month timeline within SCH-001 (<=12 mo). Primary risk: 6-DOF validation. |
| V3 Enhanced | 1 | High risk. 16-month timeline exceeds SCH-001. ML target AI unproven (TRL 5-6). Curved screen integration complex. |
| V4 Replica | 2 | Medium risk. 12-month timeline (marginal SCH-001). Weapon procurement timeline uncertain. Regulatory approval unknown duration. |

### C9: Manufacturability (weight 0.05)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 4 | >90% COTS. No special tooling. Standard welding and assembly. |
| V2 Standard | 3 | ~85% COTS. Magnetic brake requires sourcing but is off-the-shelf. Standard assembly. No special tooling. |
| V3 Enhanced | 2 | Servo motor integration requires precision alignment. Curved screen requires custom frame. Special calibration tooling likely needed. |
| V4 Replica | 1 | Each weapon unit is unique (decommissioned). Sensor retrofit is per-unit custom work. No two units identical. Fails PR-005 (no special tooling) in practice. |

### C10: Variant Extensibility (weight 0.05)

| Concept | Score | Justification |
|---------|-------|---------------|
| V1 Budget | 1 | Potentiometer + 3-DOF + single monitor architecture is a dead end. Cannot grow to CTR/ACH requirements. |
| V2 Standard | 4 | Modular architecture. Encoder/brake subsystem can be containerized (CTR). Software can add AI coaching (ACH). Network interface supports TAC (3-station). |
| V3 Enhanced | 3 | Already near CTR/ACH spec. But high base cost makes variants even more expensive. Curved screen not portable. |
| V4 Replica | 1 | Weapon-dependent design. Each variant (different weapon type) requires entirely new retrofit. Not scalable. |

## 3.2 Evaluation Matrix Summary

| Criterion | Weight (g) | V1 Budget | V2 Standard | V3 Enhanced | V4 Replica |
|-----------|-----------|-----------|-------------|-------------|------------|
| C1 Training effectiveness | 0.20 | 1 | 3 | 4 | 3 |
| C2 Control fidelity | 0.15 | 1 | 3 | 4 | 3 |
| C3 Ballistic model accuracy | 0.15 | 1 | 3 | 4 | 3 |
| C4 Visual/audio realism | 0.10 | 1 | 3 | 4 | 3 |
| C5 Cost compliance | 0.10 | 4 | 3 | 0 | 1 |
| C6 Local content | 0.05 | 4 | 3 | 1 | 1 |
| C7 Maintainability | 0.10 | 3 | 3 | 2 | 2 |
| C8 Dev risk and schedule | 0.05 | 4 | 3 | 1 | 2 |
| C9 Manufacturability | 0.05 | 4 | 3 | 2 | 1 |
| C10 Variant extensibility | 0.05 | 1 | 4 | 3 | 1 |

---

# 4. WEIGHTED SCORE CALCULATIONS

## 4.1 V1: Budget Trainer

```
W = (0.20 x 1) + (0.15 x 1) + (0.15 x 1) + (0.10 x 1) + (0.10 x 4)
  + (0.05 x 4) + (0.10 x 3) + (0.05 x 4) + (0.05 x 4) + (0.05 x 1)

W = 0.200 + 0.150 + 0.150 + 0.100 + 0.400
  + 0.200 + 0.300 + 0.200 + 0.200 + 0.050

W = 1.950

Normalized: W / 4 = 1.950 / 4 = 0.4875 = 48.8%
```

## 4.2 V2: Standard Trainer

```
W = (0.20 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.10 x 3)
  + (0.05 x 3) + (0.10 x 3) + (0.05 x 3) + (0.05 x 3) + (0.05 x 4)

W = 0.600 + 0.450 + 0.450 + 0.300 + 0.300
  + 0.150 + 0.300 + 0.150 + 0.150 + 0.200

W = 3.050

Normalized: W / 4 = 3.050 / 4 = 0.7625 = 76.3%
```

## 4.3 V3: Enhanced Trainer

```
W = (0.20 x 4) + (0.15 x 4) + (0.15 x 4) + (0.10 x 4) + (0.10 x 0)
  + (0.05 x 1) + (0.10 x 2) + (0.05 x 1) + (0.05 x 2) + (0.05 x 3)

W = 0.800 + 0.600 + 0.600 + 0.400 + 0.000
  + 0.050 + 0.200 + 0.050 + 0.100 + 0.150

W = 2.950

Normalized: W / 4 = 2.950 / 4 = 0.7375 = 73.8%
```

**CRITICAL NOTE**: V3 scores 0 on C5 (cost compliance). Per VDI 2225 methodology, a score of 0 on any criterion is a showstopper. V3 is eliminated from I-01 selection regardless of total score.

## 4.4 V4: Authentic Replica

```
W = (0.20 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.10 x 1)
  + (0.05 x 1) + (0.10 x 2) + (0.05 x 2) + (0.05 x 1) + (0.05 x 1)

W = 0.600 + 0.450 + 0.450 + 0.300 + 0.100
  + 0.050 + 0.200 + 0.100 + 0.050 + 0.050

W = 2.350

Normalized: W / 4 = 2.350 / 4 = 0.5875 = 58.8%
```

---

# 5. RESULTS RANKING

| Rank | Concept | Weighted Score | Normalized | Decision |
|------|---------|---------------|------------|----------|
| 1 | V2 Standard | 3.050 | 76.3% | SELECTED -- meets all MUST requirements |
| 2 | V3 Enhanced | 2.950 | 73.8% | ELIMINATED -- C5 = 0 (cost showstopper) |
| 3 | V4 Replica | 2.350 | 58.8% | REJECTED -- fails CO-001, PR-001; below 70% threshold |
| 4 | V1 Budget | 1.950 | 48.8% | REJECTED -- 6 requirement waivers; below 60% threshold |

**V2 Standard is the only concept that:**
- Achieves >=70% VDI 2225 score (76.3%)
- Has no criterion scored 0 (no showstoppers)
- Meets all MUST (D) requirements from REQ v1.3 without waivers

---

# 6. SENSITIVITY ANALYSIS

Three scenarios test the robustness of V2 selection under different stakeholder priority assumptions.

## 6.1 Scenario A: Baseline Weights (Reference)

Weights as defined in Section 2.1. Results from Section 5.

| Concept | Score | Rank |
|---------|-------|------|
| V2 Standard | 76.3% | 1 |
| V3 Enhanced | 73.8% (eliminated) | -- |
| V4 Replica | 58.8% | 3 |
| V1 Budget | 48.8% | 4 |

## 6.2 Scenario B: Training Effectiveness Emphasized

Stakeholder priority: "Training outcome is paramount." C1 weight increases from 0.20 to 0.25. C5 (cost) weight decreases from 0.10 to 0.05 to compensate.

| Criterion | Baseline Weight | Scenario B Weight |
|-----------|----------------|-------------------|
| C1 Training effectiveness | 0.20 | **0.25** |
| C5 Cost compliance | 0.10 | **0.05** |
| All others | unchanged | unchanged |

**Recalculation -- V1 Budget:**
```
W = (0.25 x 1) + (0.15 x 1) + (0.15 x 1) + (0.10 x 1) + (0.05 x 4)
  + (0.05 x 4) + (0.10 x 3) + (0.05 x 4) + (0.05 x 4) + (0.05 x 1)
W = 0.250 + 0.150 + 0.150 + 0.100 + 0.200 + 0.200 + 0.300 + 0.200 + 0.200 + 0.050
W = 1.800   Normalized: 45.0%
```

**Recalculation -- V2 Standard:**
```
W = (0.25 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.05 x 3)
  + (0.05 x 3) + (0.10 x 3) + (0.05 x 3) + (0.05 x 3) + (0.05 x 4)
W = 0.750 + 0.450 + 0.450 + 0.300 + 0.150 + 0.150 + 0.300 + 0.150 + 0.150 + 0.200
W = 3.050   Normalized: 76.3%
```

**Recalculation -- V3 Enhanced:**
```
W = (0.25 x 4) + (0.15 x 4) + (0.15 x 4) + (0.10 x 4) + (0.05 x 0)
  + (0.05 x 1) + (0.10 x 2) + (0.05 x 1) + (0.05 x 2) + (0.05 x 3)
W = 1.000 + 0.600 + 0.600 + 0.400 + 0.000 + 0.050 + 0.200 + 0.050 + 0.100 + 0.150
W = 3.150   Normalized: 78.8% (still eliminated: C5 = 0)
```

**Recalculation -- V4 Replica:**
```
W = (0.25 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.05 x 1)
  + (0.05 x 1) + (0.10 x 2) + (0.05 x 2) + (0.05 x 1) + (0.05 x 1)
W = 0.750 + 0.450 + 0.450 + 0.300 + 0.050 + 0.050 + 0.200 + 0.100 + 0.050 + 0.050
W = 2.450   Normalized: 61.3%
```

| Concept | Baseline | Scenario B | Change |
|---------|----------|------------|--------|
| V1 Budget | 48.8% | 45.0% | -3.8% |
| V2 Standard | 76.3% | 76.3% | 0.0% |
| V3 Enhanced | 73.8% (elim) | 78.8% (elim) | +5.0% |
| V4 Replica | 58.8% | 61.3% | +2.5% |

**Result**: V2 remains top-ranked among eligible concepts. V2 score is unchanged because V2 scores uniformly (3 on both C1 and C5). V3 improves but remains eliminated due to C5=0. V4 improves slightly but stays below 70%.

## 6.3 Scenario C: Local Content Emphasized

Stakeholder priority: "Local content is critical for program approval." C6 weight increases from 0.05 to 0.10. C10 (variant extensibility) weight decreases from 0.05 to 0.00 to compensate.

| Criterion | Baseline Weight | Scenario C Weight |
|-----------|----------------|-------------------|
| C6 Local content | 0.05 | **0.10** |
| C10 Variant extensibility | 0.05 | **0.00** |
| All others | unchanged | unchanged |

**Recalculation -- V1 Budget:**
```
W = (0.20 x 1) + (0.15 x 1) + (0.15 x 1) + (0.10 x 1) + (0.10 x 4)
  + (0.10 x 4) + (0.10 x 3) + (0.05 x 4) + (0.05 x 4) + (0.00 x 1)
W = 0.200 + 0.150 + 0.150 + 0.100 + 0.400 + 0.400 + 0.300 + 0.200 + 0.200 + 0.000
W = 2.100   Normalized: 52.5%
```

**Recalculation -- V2 Standard:**
```
W = (0.20 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.10 x 3)
  + (0.10 x 3) + (0.10 x 3) + (0.05 x 3) + (0.05 x 3) + (0.00 x 4)
W = 0.600 + 0.450 + 0.450 + 0.300 + 0.300 + 0.300 + 0.300 + 0.150 + 0.150 + 0.000
W = 3.000   Normalized: 75.0%
```

**Recalculation -- V3 Enhanced:**
```
W = (0.20 x 4) + (0.15 x 4) + (0.15 x 4) + (0.10 x 4) + (0.10 x 0)
  + (0.10 x 1) + (0.10 x 2) + (0.05 x 1) + (0.05 x 2) + (0.00 x 3)
W = 0.800 + 0.600 + 0.600 + 0.400 + 0.000 + 0.100 + 0.200 + 0.050 + 0.100 + 0.000
W = 2.850   Normalized: 71.3% (still eliminated: C5 = 0)
```

**Recalculation -- V4 Replica:**
```
W = (0.20 x 3) + (0.15 x 3) + (0.15 x 3) + (0.10 x 3) + (0.10 x 1)
  + (0.10 x 1) + (0.10 x 2) + (0.05 x 2) + (0.05 x 1) + (0.00 x 1)
W = 0.600 + 0.450 + 0.450 + 0.300 + 0.100 + 0.100 + 0.200 + 0.100 + 0.050 + 0.000
W = 2.350   Normalized: 58.8%
```

| Concept | Baseline | Scenario C | Change |
|---------|----------|------------|--------|
| V1 Budget | 48.8% | 52.5% | +3.7% |
| V2 Standard | 76.3% | 75.0% | -1.3% |
| V3 Enhanced | 73.8% (elim) | 71.3% (elim) | -2.5% |
| V4 Replica | 58.8% | 58.8% | 0.0% |

**Result**: V2 remains top-ranked among eligible concepts (75.0% > 70% threshold). V1 improves due to high local content but still far below threshold. V3 and V4 worsen or stay flat.

## 6.4 Sensitivity Summary

| Scenario | V2 Score | V2 Rank | Selection Stable? |
|----------|----------|---------|-------------------|
| A: Baseline | 76.3% | 1 | Yes |
| B: Training emphasis (+5% C1, -5% C5) | 76.3% | 1 | Yes |
| C: Local content emphasis (+5% C6, -5% C10) | 75.0% | 1 | Yes |

**V2 Standard selection is robust across all tested scenarios.** No plausible weight shift moves V2 below the 70% threshold or allows another concept to overtake it among eligible candidates.

---

# 7. STRENGTH-WEAKNESS PROFILE: V2 STANDARD

## 7.1 Criterion-Level Assessment

| Criterion | Score | Assessment |
|-----------|-------|------------|
| C1 Training effectiveness | 3 (Good) | STRENGTH -- 6-DOF + behavior tree AI + statistical scoring designed to meet TE thresholds. Room to improve with future software updates. |
| C2 Control fidelity | 3 (Good) | STRENGTH -- Magnetic brake + optical encoder meets all quantified requirements. Proven technology combination. |
| C3 Ballistic model accuracy | 3 (Good) | STRENGTH -- 6-DOF analytical model meets BM-004 and FC requirements. Requires validation but methodology is standard. |
| C4 Visual/audio realism | 3 (Good) | ADEQUATE -- Triple monitor is industry standard for gunnery sims. Unity rendering is capable but not cutting-edge. Upgradable to Unreal in future version. |
| C5 Cost compliance | 3 (Good) | WATCH -- $42K estimate has only ~7% margin to $45K ceiling. Cost overrun risk during development. Requires disciplined BOM management. |
| C6 Local content | 3 (Good) | WATCH -- 70% is exactly at threshold. Loss of any local supplier could push below. Need backup suppliers identified. |
| C7 Maintainability | 3 (Good) | STRENGTH -- BIST, modular design, standard components. No specialized skills needed. |
| C8 Dev risk and schedule | 3 (Good) | ADEQUATE -- 11 months is within 12-month limit but leaves little buffer. 6-DOF validation is primary schedule risk. |
| C9 Manufacturability | 3 (Good) | STRENGTH -- 85% COTS, no special tooling, standard assembly processes. |
| C10 Variant extensibility | 4 (Very good) | KEY STRENGTH -- Modular architecture directly supports CTR (containerize), TAC (network), ACH (add AI layer). Highest score among all concepts. |

## 7.2 Summary

- **Strengths** (scores 3-4): Training effectiveness, control fidelity, ballistic accuracy, maintainability, manufacturability, variant extensibility
- **Watch items** (at threshold): Cost margin (7%), local content (exactly 70%), schedule (1 month buffer)
- **Weaknesses** (scores 0-1): None

The V2 profile shows balanced performance with no critical weaknesses. The primary risk is the thin margin on cost and local content, which must be managed through the embodiment design phase.

---

# 8. SELECTION DECISION

## 8.1 Selected Concept: V2 STANDARD TRAINER

**VDI 2225 Score**: 76.3% (above 70% threshold, above 75% "proceed with confidence" mark)
**Showstoppers**: None (no criterion scored 0)
**MUST requirement compliance**: All 164 MUST requirements addressable without waivers

**Rationale for selection**:

1. Only concept meeting all MUST requirements from REQ v1.3 without waivers
2. Highest VDI 2225 score among eligible concepts (76.3%)
3. Selection is robust across all three sensitivity scenarios tested
4. Highest variant extensibility score (4/4) -- strategic portfolio value
5. Balanced strength profile with no critical weaknesses
6. All component technologies at TRL 8-9; no unproven elements
7. Development timeline (11 months) fits within SCH-001 (<=12 months)

**Fallback concept**: If V2 cost overruns during embodiment design, a "V2-Lite" variant can be created by substituting:
- Stereo speakers for 5.1 surround (saves ~$400)
- Microswitch for force sensor trigger (saves ~$20, loses S-007 wish)
- Aluminum frame (lighter but costlier) is NOT a cost-reduction path

## 8.2 V2 Standard Configuration Summary

| Sub-Function | Selected Solution | Key Component | Est. Cost |
|-------------|-------------------|---------------|-----------|
| F1.1 Sense traverse | Optical encoder (16-bit incremental) | Omron/Autonics | $100-150 |
| F1.2 Sense elevation | Optical encoder (16-bit incremental) | Omron/Autonics | $100-150 |
| F1.3 Sense trigger | Force sensor (FSR) | Interlink FSR-400 | $15-25 |
| F1.4 Resistance | Magnetic particle brake (x2 axes) | Ogura/Placid | $300-800 |
| F2.1 Display | 3x 27" thin-bezel monitors | Samsung/LG | $600-1200 |
| F2.2 Rendering | Unity engine | Unity Technologies | Free tier |
| F2.3 Target AI | Behavior trees | In-house (Unity BT) | Dev cost only |
| F3.1 Ballistics | 6-DOF analytical model | In-house | Dev cost only |
| F3.2 Fire control | Analytical real-time | In-house | Dev cost only |
| F4.1 Performance | Statistical scoring + AAR | In-house | Dev cost only |
| F5.1 Audio | 5.1 surround system | JBL/Yamaha | $200-500 |
| F5.2 Structure | Steel welded frame + replica grips | Local fabrication | $300-600 |
| F6.1 System mgmt | Automated BIST + sequencer | In-house (software) | Dev cost only |
| | **Hardware subtotal** | | **$1,615-3,425** |
| | Computing (GPU workstation) | | $3,000-5,000 |
| | Integration, cabling, power | | $1,000-2,000 |
| | Software development (amortized over 10 units) | | $25,000-30,000 |
| | Assembly and test labor | | $2,000-3,000 |
| | **Total unit cost estimate (at qty 10)** | | **$38,000-43,000** |

---

# 9. RISK REGISTER: TOP 5 DEVELOPMENT RISKS

| # | Risk | Probability | Impact | Score | Mitigation |
|---|------|-------------|--------|-------|-----------|
| R1 | 6-DOF ballistic model fails BM-004 validation (drag error >2% against published firing table data) | Medium | High | 6 | Use published 12.7mm B-32 aero coefficient data from multiple sources. Validate against STANAG 4355 BALCO model. Build validation test suite early (Month 2). Fallback: adjust polynomial order until error budget met. |
| R2 | Unit cost exceeds CO-001 ($45K) during embodiment design as component costs finalize | Medium | High | 6 | Maintain running BOM cost tracker updated weekly. Set internal target at $40K (11% margin). Identify cost-reduction substitutions for top-5 cost drivers. Gate review at CDR with hard cost ceiling. |
| R3 | Magnetic brake torque variation exceeds K-005 (10%) across temperature range (18-32C per OP-017) | Low-Medium | Medium | 4 | Request brake manufacturer torque-vs-temperature data. Implement current-compensation lookup table in firmware. Include torque measurement in acceptance test procedure. |
| R4 | Statistical scoring system fails to achieve TE-010 (r-squared >=0.75 sim-to-live correlation) before prototype delivery | Medium | High | 6 | Design scoring algorithm to be tunable with calibration parameters. Plan early live-fire correlation trial (Month 8-9) with 20+ gunners. Accept initial delivery with r-squared >=0.60 and post-delivery calibration plan. |
| R5 | Local content falls below PR-001 (70%) when detailed BOM is costed | Low-Medium | Medium | 4 | Track local content percentage in BOM from Phase 3 onward. Identify VN-sourced alternatives for top imported components. Steel frame, displays (Samsung VN), integration labor, and software all count toward local content. |

**Risk acceptance threshold**: Risks with score >=6 require mitigation plan active by CDR. Risks with score >=8 require executive escalation.

---

# 10. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial release (as Doc 005) |
| 2.0 | 2026-03-05 | Engineering Team | Complete redo for Phase 2: 10 criteria (was 8), quantified requirement traceability, corrected arithmetic, 3 sensitivity scenarios, strength-weakness profile, risk register. Fixed v1.0 arithmetic inconsistencies. Renumbered as Doc 012. |

---

**NEXT**: Phase 3 -- Embodiment Design

*VN-12.7MM-SIM-012 Concept Evaluation (VDI 2225) v2.0*