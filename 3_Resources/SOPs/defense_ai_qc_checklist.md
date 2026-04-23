# Defense AI QC Checklist — Workshop X
## Systematized Critical Reasoning for IRONMESH AI Outputs

**Version:** 1.0
**Created:** 2026-02-20
**Skill:** Skill 3 — Critical Reasoning & Quality Control (7/10 → 9/10)
**Gap closed:** "Systematize into automated checklist" (agentic_ai_skills_analysis.md §4.2)
**Expected impact:** Reduces Skill 3 time from 5h → 2h/week (3h freed for R2 loop)

---

## HOW TO USE

```
STEP 1: Run deterministic validator first (automated, <10 seconds)
        python validate_defense_ai_output.py --input <output_file.json>

STEP 2: For any flag from Step 1, check the corresponding category below

STEP 3: Work through judgment-required items (§4-6) manually
        These require domain knowledge — cannot be automated

STEP 4: Record final verdict:
        PASS  → Proceed to next stage
        PASS* → Proceed with noted caveats
        FAIL  → Do not proceed, list specific failures
        HOLD  → Escalate — human domain expert needed
```

---

## CATEGORY 1: PHYSICS PLAUSIBILITY ⚡ [AUTOMATABLE]

*"AI confident ≠ AI correct. AI hallucinate plausible-sounding numbers."*

Run `validate_defense_ai_output.py` for automated checks. Manual verification for edge cases.

### 1.1 Weapon/Ballistics
- [ ] **Range vs. effective range**: Does AI recommendation respect weapon effective range?
  - 12.7mm HMG: ≤2,000m effective (not 2,800m as AI may suggest)
  - 7.62mm: ≤600m effective
  - Reference: TCVN weapon specifications
- [ ] **Energy at target**: KE = ½mv² plausible for stated range?
  - Check velocity drop vs. ballistic coefficient
  - Sea-level vs. altitude adjustment applied?
- [ ] **Lead angle**: Does lead angle account for target motion AND own platform motion?
  - Ship-fired weapon: own velocity + target velocity + wind
  - Static range: target velocity + wind only

### 1.2 Acoustics (VN-LOMAH)
- [ ] **Speed of sound**: 340 m/s (air, 20°C) — temperature correction applied for Vietnam climate?
- [ ] **TDOA calculation**: Time difference of arrival cross-checked against mic array geometry?
- [ ] **Frequency plausibility**: Gunshot fundamental ≈ 1-4 kHz, muzzle blast <200 Hz
- [ ] **Signal-to-noise**: SNR reported — is it plausible for stated range and weather?
- [ ] **Maritime adjustment**: Water surface reflections reduce effective detection range by 30-40%

### 1.3 Optics (VN-CAM)
- [ ] **Angular resolution**: Is target resolvable at stated range? (Hailo-8 + lens combo)
  - Formula: Resolvable feature = range × (pixel_pitch / focal_length)
- [ ] **Light conditions**: Camera parameters appropriate for time of day / weather stated?
- [ ] **Parallax**: Multi-camera baseline and stereo geometry consistent with stated range?

### 1.4 Environmental Physics
- [ ] **Wind correction**: Wind speed and direction consistent with actual vs. stated?
- [ ] **Sea state effect**: Wave-induced platform motion accounted for in firing solutions?
- [ ] **Temperature/humidity**: Affects ballistics (air density), acoustics (speed of sound), and optics (mirage)
- [ ] **Electromagnetic**: EMI from naval systems — does it affect sensor accuracy stated?

---

## CATEGORY 2: DATA QUALITY ⚡ [AUTOMATABLE]

### 2.1 Confidence Thresholds
- [ ] **Minimum confidence met**: ≥0.85 required for all automated scoring (CORTEX FSM §5)
- [ ] **Confidence calibrated**: Is AI confident for a reason, or is it extrapolating from out-of-distribution data?
  - **Red flag:** "Confidence: 94%" with Sea State 4 + training data from calm seas (VN-SMASH scenario)
- [ ] **Uncertainty quantified**: Is a confidence interval provided, or just a point estimate?

### 2.2 Training Data Relevance
- [ ] **Environmental match**: Were training conditions similar to current deployment environment?
  - VN-CAM: trained in Vietnamese coastal conditions? Or generic dataset?
  - VN-LOMAH: trained with Vietnamese military weapons? Or generic gunshot datasets?
- [ ] **Edge case coverage**: Is current scenario within training distribution?
  - If not: flag as out-of-distribution, reduce trust threshold to 0.70 minimum
- [ ] **Data recency**: Training data from last 12 months? Equipment specs change.

### 2.3 Sensor Fusion Consistency
- [ ] **Count correlation**: Acoustic count matches visual count (|delta| ≤ 1)?
  - If delta > 1: HALT — do not auto-score (CORTEX FSM S5.2)
  - If delta = 1: HITL review (CORTEX FSM S4)
  - Ricochet fragments create acoustic-only events — expect delta ≤ 1 in maritime
- [ ] **Timing consistency**: Acoustic-visual timing gap consistent with range and speed of sound?
  - At 800m: acoustic delay ≈ 2.35s after visual impact
  - If gap > 3s or < 1.8s at 800m: flag for review
- [ ] **Spatial consistency**: Visual hit location consistent with acoustic source direction?

### 2.4 Statistical Validity
- [ ] **Sample size**: Is n sufficient for the stated confidence level?
  - Qualification scoring: n=10 minimum for 95% CI on hit percentage
- [ ] **Outlier handling**: Were outliers included or excluded? Was this appropriate?
- [ ] **Rounding**: Are reported values suspiciously round (e.g., exactly 75.0%)? May indicate truncation.

---

## CATEGORY 3: SAFETY CONSTRAINTS 🔴 [HUMAN JUDGMENT REQUIRED]

*"The edge case isn't a bug to fix later — it's a lethal failure mode." — agentic_ai_skills_analysis.md*

### 3.1 Safety Fan / Exclusion Zones
- [ ] **Safety fan**: All impacts within the defined safety fan?
  - Fan angle documented in session configuration?
  - AI correctly identified boundary — or is boundary itself wrong?
- [ ] **Maritime exclusion zone**: No civilian vessel within minimum safe distance?
  - MSD = weapon caliber × safety factor (see range safety SOP)
- [ ] **Personnel clearance**: All personnel at safe distance, verified by RSO?
- [ ] **Aircraft**: Airspace clearance obtained and confirmed before firing?

### 3.2 Fail-Safe Verification
- [ ] **Abort mechanism**: Is emergency stop (hardware + software) confirmed working pre-session?
- [ ] **Fallback mode**: If AI fails, is manual scoring mode verified ready?
- [ ] **Communication**: RSO communication link tested within last 30 minutes?
- [ ] **Power redundancy**: UPS / backup power for safety systems tested?

### 3.3 Weapon System Safety
- [ ] **Barrel condition**: Within barrel life? (Rounds fired vs. spec)
- [ ] **Ammunition**: Correct type for weapon and training exercise?
- [ ] **Misfire protocol**: Briefed and confirmed understood by all crew?
- [ ] **Safety interlocks**: All mechanical safety interlocks verified functional?

---

## CATEGORY 4: TCVN / MIL-STD COMPLIANCE [HUMAN JUDGMENT REQUIRED]

### 4.1 Environmental Standards (Design Phase)
- [ ] **IP rating**: System IP rating sufficient for deployment environment?
  - Maritime: IP67 minimum (submersion to 1m, 30 minutes)
  - Field: IP65 minimum (dust-tight + water jet protected)
- [ ] **Temperature range**: Operating temp within design envelope for Vietnam climate?
  - Range: −5°C to +55°C (coastal Vietnam extremes)
- [ ] **Humidity**: 95% relative humidity at 35°C (tropical conditions)
- [ ] **Salt spray**: MIL-STD-810G Method 509.7 (maritime equivalent)
- [ ] **Vibration**: MIL-STD-810G Method 514.8 (vehicle transport profile)

### 4.2 Documentation Standards
- [ ] **Bilingual**: All safety-critical documentation in Vietnamese + English?
- [ ] **Format**: Follows Vietnamese MoD document structure?
- [ ] **Traceability**: Each requirement traceable to source standard?
- [ ] **Version control**: Document version number + date stamped?

### 4.3 Scoring Standards
- [ ] **Scoring methodology**: Compliant with TCVN range scoring standard?
- [ ] **Qualification threshold**: Using approved threshold (not AI-proposed one)?
- [ ] **Record format**: Qualification records in approved format for MoD submission?
- [ ] **Signature**: Range Officer signature required on qualification records?

---

## CATEGORY 5: RULES OF ENGAGEMENT CONTEXT 🔴 [HUMAN JUDGMENT REQUIRED — ALWAYS]

*"AI cannot interpret Rules of Engagement contextually." — agentic_ai_skills_analysis.md §1.2*

**This category is ALWAYS 0% automated. Human judgment only.**

### 5.1 Target Identification
- [ ] **Target classification**: Is target positively identified as intended (not friendly/civilian)?
- [ ] **IFF confirmed**: Identify Friend or Foe check completed per SOP?
- [ ] **Visual confirmation**: At least one visual confirmation in addition to AI classification?
- [ ] **Ambiguity**: If any ambiguity in target ID → HOLD FIRE

### 5.2 RoE Compliance
- [ ] **Applicable ROE section**: Which ROE section governs this engagement?
- [ ] **Legal authority**: Who has the legal authority to engage?
- [ ] **Proportionality**: Is AI recommendation proportional to the threat?
- [ ] **Necessity**: Is engagement necessary, or is there a non-kinetic alternative?

### 5.3 Engagement Solution Review
- [ ] **Beyond AI recommendation**: Has the operator INDEPENDENTLY assessed the situation?
- [ ] **Tactical doctrine**: Does AI recommendation align with tactical doctrine?
  - VN-SMASH may suggest mathematically optimal solution that violates doctrine
- [ ] **Command authority**: Is higher command authority required for this action?

---

## CATEGORY 6: SYSTEM CONTEXT [PARTIALLY AUTOMATABLE]

### 6.1 Operational Envelope
- [ ] **Sea state**: Within system's rated sea state? (Typically ≤Sea State 4 for LOMAH/CAM)
- [ ] **Wind speed**: Within sensor accuracy envelope?
- [ ] **Visibility**: Optical sensors require ≥1km visibility for rated performance?
- [ ] **Temperature**: Within operating temperature range?

### 6.2 System Health
- [ ] **Calibration current**: Last calibration within required interval?
  - VN-LOMAH: calibration every 30 days or after significant transport
  - VN-CAM: calibration every session (alignment check)
- [ ] **Battery/power**: Sufficient power for mission duration?
- [ ] **Storage capacity**: Sufficient storage for session logs + video evidence?
- [ ] **Network**: Data links to CORTEX verified at mission start?

---

## QUICK REFERENCE: RED FLAGS

These patterns in AI output should trigger immediate HOLD:

```
RED FLAG                          │ LIKELY CAUSE               │ ACTION
──────────────────────────────────┼────────────────────────────┼─────────────────
Range > weapon effective range    │ AI optimizing wrong metric  │ Recalculate, reject solution
Confidence: >95% in novel         │ Overconfident AI           │ Require physical evidence
  conditions                      │                            │
Count mismatch: delta > 1         │ Sensor failure or ricochet │ Manual recount required
Acoustic delay off by >0.5s       │ Wrong range estimate or    │ Verify range + recalculate
  for stated range                │ speed of sound error       │
Missing IFF check in fire         │ Incomplete solution         │ HOLD — IFF mandatory
  control solution                │                            │
"Training data: generic dataset"  │ Out-of-distribution        │ Reduce confidence threshold
Qualification threshold proposed  │ AI modified standards       │ Use approved threshold ONLY
  by AI (not from standards)      │                            │
ROE referenced but not cited      │ AI confabulation           │ Verify ROE section exists
```

---

## VERDICT RUBRIC

```
Category Score  │ Verdict
────────────────┼──────────────────────────────────────────────────
All pass        │ PASS ✅ — Proceed
1-2 minor flags │ PASS* ⚠️ — Proceed with documented caveats
Any Cat 3 flag  │ FAIL 🔴 — Stop. Safety issue cannot be waived.
Any Cat 5 flag  │ HOLD 🛑 — Escalate to RSO/CO. No exceptions.
Physics failure │ FAIL 🔴 — AI output unreliable. Manual calculation required.
```

---

## SKILL 3 MASTERY EVIDENCE

**Evidence of 9/10 mastery:**
- [x] Domain knowledge sufficient to catch AI errors (existing — LOMAH, CAM, SMASH experience)
- [x] Physics-based plausibility checking (formalized in §1 with specific numbers)
- [x] Systematic checklist reduces 5h/week intuitive QC to 2h/week structured review
- [x] Deterministic checks separated from judgment checks (§1-2 vs. §3-6)
- [x] Red flags explicitly enumerated (Quick Reference table)
- [ ] Integrated with Claude Code as auto-invoked Skill (convert to SKILL.md format)
- [ ] Validated against real VN-RANGE-001 or VN-SMASH output (requires live system)

---

*Systematizes the critical reasoning demonstrated in agentic_ai_skills_analysis.md §1.2 (Skill 3 VN-SMASH scenario)*
*Next: convert to CC Skill format + build validate_defense_ai_output.py for automated §1-2 checks*
