# END-TO-END WORKFLOW: TỪ CUSTOMER JOB → PRODUCT DELIVERY → COMPOUND
## forge-job-map Output Chảy Qua Toàn Bộ 6 Lớp Như Thế Nào

**Ngày:** 02/03/2026
**Mục đích:** Trace chính xác dòng data từ output forge-job-map xuyên suốt 47 skills, từ customer insight đến product delivery và quay lại.

---

## TỔNG QUAN: DÒNG CHẢY CHÍNH

```
forge-job-map OUTPUT:
  A. Job Map (8 bước customer thực hiện job)
  B. 50-100 Desired Outcome Statements
  C. Opportunity Landscape (Importance × Satisfaction scored)
  D. Strategy Recommendation (differentiated/dominant/discrete/disruptive)

    ║
    ║  CHẢY XUỐNG qua 4 nhánh song song:
    ║
    ╠══▶ NHÁNH 1: FORGE Pipeline (product strategy decisions)
    ║    forge-scout → forge-shift(O) → forge-fallback → forge-cost
    ║    → forge-validate → forge-trust → forge-library → forge-flywheel
    ║
    ╠══▶ NHÁNH 2: HELIX Pipeline (design execution)
    ║    helix-task-clarify → helix-concept-generate → helix-embody
    ║    → helix-detail → helix-quality-gate
    ║
    ╠══▶ NHÁNH 3: BRIDGE Pipeline (organizational support)
    ║    bridge-knowledge-base → bridge-signal-extract → bridge-dashboard
    ║
    ╠══▶ NHÁNH 4: DMIR Loop (learning & optimization)
    ║    dmir-reflect → dmir-paradigm → dmir-cycle-plan → next cycle
    ║
    ▼  QUAY LẠI
    forge-job-map v2 (enriched by field data from delivery)
```

---

## NHÁNH 1: FORGE PIPELINE

### Stage 0→1: forge-job-map → forge-scout (enriched)

```
forge-job-map OUTPUT A,B,C chảy vào forge-scout:

forge-scout Step 0 (MỚI — trước technology scan):
  │
  ├── IMPORT: Opportunity Landscape (C)
  │   ├── Top 15 underserved outcomes (high importance, low satisfaction)
  │   └── Top 15 overserved outcomes (low importance or high satisfaction)
  │
  ├── 🤖 Cross-reference: underserved outcomes × product sub-functions
  │   ├── "Outcome #7: 'Minimize setup time at new position' → V-SMASH mounting subsystem"
  │   ├── "Outcome #12: 'Minimize false alarms in rain' → V-SMASH detection algorithm"
  │   └── "Outcome #23: 'Minimize operator training time' → V-SMASH UI/UX"
  │
  ├── 🤖 ACH Opportunity Filter:
  │   ├── Underserved outcome + AI can address → ★ HIGH PRIORITY ACH
  │   │   "False alarm in rain → AI weather-adaptive detection = ACH opportunity"
  │   ├── Overserved outcome + hardware expensive → ★ COST REDUCTION ACH
  │   │   "High-res daytime camera overserved → cheaper sensor + AI upscale"
  │   └── Underserved outcome + AI cannot address → NOT ACH (hardware/design fix)
  │       "Setup time too long → mechanical redesign, not AI"
  │
  └── OUTPUT ENRICHED:
      ACH Opportunity Matrix (as before)
      + NEW column: "Addresses outcome #__" + opportunity score
      + NEW filter: opportunities ranked by CUSTOMER VALUE, not just tech feasibility

      → feeds forge-shift
```

### Stage 1: forge-scout → forge-shift(O)

```
forge-shift receives: specific ACH opportunity + linked underserved outcome(s)

forge-shift Step 1: SHIFT → SHIFTO Checklist:
  │
  ├── S — SUBSTITUTABLE? (unchanged)
  ├── H — HYBRID POSSIBLE? (unchanged)
  ├── I — IMPROVEMENT TRAJECTORY? (unchanged)
  ├── F — FALLBACK FEASIBLE? (unchanged)
  ├── T — TRAINING DATA? (unchanged)
  │
  └── O — OUTCOME-ALIGNED? ★ MỚI
      │
      ├── 🤖 Pull from forge-job-map data:
      │   ├── "ACH này address outcome nào?"
      │   │   → "#12: Minimize false alarms in rain conditions"
      │   ├── "Opportunity score của outcome đó?"
      │   │   → Score: 8.4/10 (highly underserved)
      │   ├── "Bao nhiêu outcomes trong top-15 được ACH này address?"
      │   │   → 3/15 (outcomes #12, #14, #19)
      │   └── "Customer segment nào care nhất?"
      │       → Biên phòng units (rain-heavy regions)
      │
      ├── 🤖→👤 Outcome Alignment Assessment:
      │   ├── ✅ HIGH: addresses top-5 underserved outcome → strong GO signal
      │   ├── ⚠️ MEDIUM: addresses top-15 → moderate GO signal
      │   ├── ❌ LOW: no underserved outcome addressed → question value
      │   └── ★ RED FLAG: addresses OVERSERVED outcome → gold-plating risk
      │
      └── Score: ✅/⚠️/❌ → feeds into SHIFTO Decision Package

forge-shift Step 3: Decision Package (enriched):
  │
  ├── SHIFTO scorecard: S✅ H✅ I✅ F⚠️ T✅ O✅
  ├── NEW: "ACH addresses 3 of top-15 underserved outcomes"
  ├── NEW: "Combined opportunity score: 22.7/30"
  ├── NEW: "If successful → moves 3 outcomes from underserved to served"
  │        "→ estimated customer satisfaction increase: +15-20%"
  └── Recommendation: GO (strong outcome alignment)

forge-shift Step 4: 👤 CEO Decision:
  │
  ├── Reviews SHIFTO scorecard
  ├── NEW consideration: "Customer nói outcome #12 quan trọng nhất.
  │   ACH này address outcome #12. Nếu thành công → contract renewal likely."
  ├── DECISION: GO
  │
  └── CONDITIONS:
      ├── "Fallback Level 2 required (F was ⚠️)"
      ├── "Validate specifically against rain conditions (outcome #12)"
      └── "Present outcome-based evidence to customer (forge-trust)"

OUTPUT:
  SHIFTO Assessment + CEO GO Decision + Conditions
  → forge-fallback (fallback design)
  → forge-cost (economics with outcome-based value)
  → helix-task-clarify (new requirements from outcomes)
  → forge-validate (test plan includes outcome metrics)
```

### Stage 1: forge-shift GO → forge-fallback

```
forge-fallback receives: SHIFTO GO + Fallback Level 2 required

forge-fallback workflow (unchanged structurally, enriched context):
  │
  ├── 🤖 Generate fallback options: Level 1, 2, 3
  │   ★ NEW context from job map:
  │   "Fallback must preserve core job step 5 (EXECUTE: monitor targets)
  │    even if AI fails. Outcome #12 (false alarms in rain) is primary
  │    failure mode → fallback should specifically handle rain degradation."
  │
  ├── 👤 Select: Level 2 (Graceful Degradation)
  │   Architecture: "AI detection fail in rain → fallback to simpler
  │   motion-only detection + operator alert 'reduced accuracy mode'"
  │
  └── OUTPUT: Fallback Spec
      ├── Trigger: confidence score < 0.6 for 30+ seconds
      ├── Behavior: switch to motion-detection-only mode
      ├── User notification: "Chế độ giảm — cần xác nhận thủ công"
      ├── Recovery: auto-return to AI mode when confidence recovers
      └── Test plan: simulate rain at varying intensity

      → helix-integration-debt (ICD entry: IF-AI-FALLBACK-RAIN)
      → helix-task-clarify (new requirement: fallback must work in rain)
      → forge-validate (add rain test to validation plan)
```

### Stage 1: forge-shift GO → forge-cost (enriched)

```
forge-cost receives: ACH spec + outcome data

forge-cost Step 1 (enriched):
  │
  ├── Hardware alternative cost (unchanged): $X per unit
  ├── ACH solution cost (unchanged): $Y per unit
  │
  ├── NEW: Outcome-Based Value Calculation
  │   ├── "ACH addresses outcomes #12, #14, #19"
  │   ├── "If these outcomes move from underserved → served:"
  │   │   ├── Customer willingness-to-pay for rain capability: estimated +$Z premium
  │   │   ├── Contract renewal probability increase: +25%
  │   │   └── Opens new customer segment (rain-heavy regions): TAM +$W
  │   └── "Total value = cost savings + capability premium + market expansion"
  │
  ├── Defense-realistic breakeven (unchanged): N units
  ├── NEW: Outcome-adjusted ROI:
  │   "Even if ACH costs MORE per unit, customer pays premium for rain capability
  │    → net positive at volume > M units (lower than pure cost breakeven)"
  │
  └── OUTPUT: Cost Analysis + Outcome-Based Value Report
      → forge-portfolio (economics per product)
      → forge-trust (value story for customer)
      → bridge-dashboard (financial metrics)
```

### Stage 2: → forge-validate (enriched)

```
forge-validate receives: ACH design + fallback spec + outcome targets

forge-validate Step 1: Validation Plan (enriched):
  │
  ├── Stage 1-3 (unchanged): Lab → Field Simulation → Operational
  │
  ├── NEW in each stage: OUTCOME-BASED TEST CRITERIA
  │   ├── Technical metrics (unchanged): accuracy, latency, false positive rate
  │   └── Customer outcome metrics (MỚI):
  │       ├── Outcome #12: "false alarm rate in rain < 5%" (customer threshold)
  │       ├── Outcome #14: "detection time in fog < 4s" (customer threshold)
  │       ├── Outcome #19: "operator override response < 2s" (customer threshold)
  │       └── Job map step 3 (PREPARE): "setup time < 8 min" (customer threshold)
  │
  ├── NEW: Stage 4 — OUTCOME VALIDATION (after technical validation)
  │   ├── Present Performance Envelope TO CUSTOMER using outcome language
  │   ├── "Hệ thống giảm 70% thời gian xác nhận trong mưa" (vs. technical: "FP rate 3.2%")
  │   ├── Customer rates: "satisfied with this outcome? 1-5"
  │   ├── Gap analysis: which outcomes STILL underserved after our solution?
  │   └── Input for forge-job-map v2 (next cycle)
  │
  └── OUTPUT:
      Validation Report + Performance Envelope + Outcome Satisfaction Gap
      → forge-trust (validation evidence in outcome language)
      → forge-library (validated model + outcome performance data)
      → bridge-knowledge-base (Layer 2: validation evidence archive)
      → helix-design-journal (test results + lessons)
      → forge-job-map v2 (remaining underserved outcomes for next iteration)
```

### Stage 2-3: → forge-trust (enriched)

```
forge-trust receives: validation results + outcome data + cost value story

forge-trust Step 1: Trust Evidence Package (enriched):
  │
  ├── BEFORE (supplier language):
  │   "System accuracy 96%. False positive rate 3.2%. Latency 1.8s."
  │
  ├── AFTER (outcome language — from forge-job-map):
  │   "Giảm 70% thời gian xác nhận mục tiêu trong mưa"
  │   "Giảm báo nhầm 85% so với hệ thống hiện tại"
  │   "Thời gian lắp đặt tại vị trí mới: 7 phút (trước: 25 phút)"
  │   "Không cần đào tạo riêng — giao diện tương tự hệ thống cũ"
  │
  │   ★ SAME DATA, nhưng framed trong ngôn ngữ CUSTOMER CARES ABOUT.
  │     Procurement officer đọc: "giảm 70% thời gian xác nhận" → hiểu giá trị
  │     Thay vì: "FP rate 3.2%" → "đó là tốt hay xấu?"
  │
  ├── Performance Envelope (outcome version):
  │   ├── "Excellent: trời trong, ban ngày → 95% outcomes met"
  │   ├── "Good: mưa nhẹ, hoàng hôn → 85% outcomes met"
  │   ├── "Degraded: mưa nặng, đêm → 60% outcomes met + fallback active"
  │   └── "Transparent: chúng tôi cho anh biết CHÍNH XÁC ở đâu nó yếu"
  │
  └── 👤 Customer engagement:
      ├── Present in CUSTOMER'S outcome language (not Workshop X's tech language)
      ├── Show: "đây là 15 outcome anh nói quan trọng. Chúng tôi address 12/15."
      ├── Honest: "3 outcomes chúng tôi chưa address. Kế hoạch tiếp theo..."
      └── ★ TRUST: transparency about limitations = trust builder (not weakness)

      OUTPUT: Trust Evidence Package (outcome-framed)
      → Customer decision: proceed / modify / reject
      → bridge-signal-extract (capture customer feedback in outcome terms)
      → forge-flywheel (customer satisfaction data = flywheel input)
```

### Stage 3: → forge-library (enriched)

```
forge-library receives: validated model + outcome performance data

forge-library Step 1: Catalog (enriched):
  │
  ├── Model ID: WX-DET-001
  ├── Technical specs (unchanged): input, output, accuracy, latency
  │
  ├── NEW: Outcome Performance Profile
  │   ├── "Addresses outcomes: #12 (rain FP ✅), #14 (fog detect ✅), #19 (override ⚠️)"
  │   ├── "Outcome satisfaction delta: +2.1 points average across 3 outcomes"
  │   └── "Customer segments served: biên phòng (rain), hải quân (fog)"
  │
  ├── forge-library Step 2: Cross-product matching (enriched):
  │   ├── 🤖 "LOMAH-AD has similar job: 'detect aerial threats in all weather'"
  │   ├── 🤖 Scan LOMAH-AD's outcomes (from LOMAH's forge-job-map):
  │   │   "Outcome #8: 'minimize false alarm rate for drones in rain' → MATCH with V-SMASH #12"
  │   └── Transfer recommendation: "WX-DET-001's rain adaptation directly applicable to LOMAH-AD"
  │
  └── OUTPUT:
      Library entry + Outcome-enriched cross-product match
      → forge-scout (next cycle: "library model already addresses LOMAH outcome #8")
      → helix-concept-generate (LOMAH): "model WX-DET-001 as solution option for rain detection"
      → forge-portfolio (library growth + transfer pipeline)
```

### Stage 3-4: → forge-flywheel (enriched)

```
forge-flywheel receives: field data + customer outcome satisfaction

forge-flywheel (enriched with outcome tracking):
  │
  ├── FLYWHEEL METRICS (unchanged):
  │   Data rate, model updates, performance improvement
  │
  ├── NEW: OUTCOME FLYWHEEL
  │   ├── Track per-outcome satisfaction over time:
  │   │   "Outcome #12 (rain FP): satisfaction 2.1→3.8→4.2 over 3 quarters"
  │   │   "Outcome #14 (fog): satisfaction 1.8→2.5 — SLOW improvement, investigate"
  │   │
  │   ├── 🤖 Identify: which outcomes improving fastest? slowest?
  │   │   → Slow improvement = bottleneck in flywheel for that outcome
  │   │   → Fast improvement = flywheel working, amplify
  │   │
  │   ├── 🤖 Predict: "at current improvement rate, outcome #14 reaches
  │   │   'satisfied' (4.0) in Q3 2027. Too slow? Invest more?"
  │   │
  │   └── 👤 Steer: "Focus retraining on fog conditions to accelerate outcome #14"
  │
  └── OUTPUT:
      Outcome-indexed flywheel report
      → forge-portfolio (outcome satisfaction trends per product)
      → forge-job-map v2 (updated satisfaction data → recalculate opportunity scores)
      → bridge-dashboard (outcome metrics alongside operational metrics)
      → dmir-reflect (flywheel health vs. prediction → learning)
```

### → forge-portfolio & forge-evolve (enriched)

```
forge-portfolio dashboard adds:
  │
  ├── NEW section: CUSTOMER OUTCOME SCORES
  │   ┌─────────────┬─────────────────┬────────┬────────┐
  │   │ Product     │ Outcomes mapped │ Served │ Gap    │
  │   ├─────────────┼─────────────────┼────────┼────────┤
  │   │ V-SMASH     │ 87              │ 62/87  │ 25 gap │
  │   │ LOMAH-AD    │ 0 (NOT MAPPED)  │ —      │ —      │
  │   │ SCOREBOARD  │ 43              │ 31/43  │ 12 gap │
  │   └─────────────┴─────────────────┴────────┴────────┘
  │   🔴 LOMAH-AD: No job map → flying blind on customer needs
  │
  └── forge-evolve: growth strategy PER PRODUCT based on outcome landscape
      ├── V-SMASH: Differentiated (target remaining 25 underserved outcomes)
      ├── SCOREBOARD: Discrete (12 overserved → simplify, reduce cost)
      └── LOMAH-AD: UNKNOWN (needs forge-job-map first!)
```

---

## NHÁNH 2: HELIX PIPELINE

### forge-job-map → helix-task-clarify

```
helix-task-clarify receives: underserved outcomes + fallback requirements

helix-task-clarify (enriched with outcome-derived requirements):
  │
  ├── Step 1 (unchanged): Gather requirements from specs, standards, MIL-STD
  │
  ├── Step 2 (MỚI): Import customer outcome requirements
  │   ├── 🤖 Convert underserved outcomes → design requirements:
  │   │
  │   │   Outcome: "Minimize false alarm rate in rain conditions"
  │   │   → Requirement: "False positive rate < 5% at rainfall > 10mm/h"
  │   │   Priority: MUST (top-5 underserved outcome, opportunity score 8.4)
  │   │
  │   │   Outcome: "Minimize time to set up at new position"
  │   │   → Requirement: "Field setup complete in < 8 minutes by 1 person"
  │   │   Priority: SHOULD (top-15 underserved, opportunity score 6.2)
  │   │
  │   │   Outcome: "Minimize operator training before first use"
  │   │   → Requirement: "Operator functional after 2-hour training module"
  │   │   Priority: SHOULD (top-15 underserved, opportunity score 5.8)
  │   │
  │   ├── 🤖 Flag conflicts: outcome requirement vs. spec requirement
  │   │   "Spec says 'detect at 5km' but operator outcome says 'minimize setup time'
  │   │    → heavy long-range optics CONFLICT with portable setup goal"
  │   │   → helix-concept-generate must resolve this trade-off
  │   │
  │   └── 🤖 Tag each requirement with source:
  │       [SPEC] = from MIL-STD / contract / regulation
  │       [OUTCOME] = from customer desired outcome ★ MỚI
  │       [FORGE] = from ACH decision / fallback requirement
  │       [HELIX] = from integration / DfX constraint
  │
  └── OUTPUT: Requirements List (enriched)
      ├── All requirements tagged by source
      ├── Priority includes outcome opportunity score
      ├── Conflicts flagged for concept phase resolution
      └── → helix-concept-generate, helix-6flow-mapper
```

### helix-task-clarify → helix-concept-generate

```
helix-concept-generate receives: enriched requirements + library models

helix-concept-generate Step 2: Solution Space (enriched):
  │
  ├── Morphological matrix includes:
  │   ├── forge-library models as solution options
  │   │   "Detection function → Option 3: WX-DET-001 (from library, rain-adapted)"
  │   ├── ACH vs. hardware alternatives for each sub-function
  │   └── Fallback architecture as MANDATORY row in matrix
  │
  ├── Step 3: Evaluation (enriched VDI 2225):
  │   ├── Standard criteria: cost, weight, reliability, manufacturability
  │   └── NEW criteria:
  │       ├── "Outcomes Addressed": how many top-15 underserved outcomes? (weight: HIGH)
  │       ├── "Reuse Potential": does this concept create library-worthy model? (weight: MEDIUM)
  │       └── "Fallback Quality": fallback level achieved? (weight: HIGH for defense)
  │
  └── OUTPUT: Selected concept + enriched evaluation matrix
      → helix-embody-realize
      → forge-scout (validated: ACH opportunity confirmed at concept level)
```

### helix-concept-generate → helix-embody-realize → helix-detail-finalize

```
HELIX Phase 3-4 proceeds with standard P&B methodology.
OUTCOME DATA influences but doesn't change the PROCESS:

helix-embody-realize:
  ├── DfX checks include: "DfU — Design for Usability"
  │   ├── "Setup time requirement (from outcome) → mechanical quick-release design?"
  │   └── "Training requirement (from outcome) → familiar interface layout?"
  ├── cad-review-automation includes fallback interface review
  └── helix-integration-debt tracks: AI-fallback interface as ICD entry

helix-detail-finalize:
  ├── Manufacturing package includes outcome-traceability:
  │   "Part #XYZ exists because outcome #7 requires setup < 8 min"
  ├── Test specifications include outcome-based acceptance criteria
  │   (from forge-validate plan)
  └── Operator manual structured around job map 8 steps (not product features)
      ★ "Chương 1: Lắp đặt tại vị trí (Job Step 3: PREPARE)"
        thay vì: "Chương 1: Mô tả kỹ thuật" (supplier thinking)

OUTPUT: Manufacturing package + test specs + operator manual
→ forge-validate (ready for Stage 1 testing)
→ bridge-deploy-gate (Phase 1 evidence: design complete)
→ quality-gate-reporter (manufacturing QC)
```

---

## NHÁNH 3: BRIDGE PIPELINE

```
forge-job-map data flows into BRIDGE at 3 points:

1. bridge-knowledge-base Layer 2:
   ├── Per-product job map stored
   ├── Outcome data + opportunity scores stored
   ├── Historical: how outcomes changed over time (versions)
   └── Cross-product: "outcome #12 in V-SMASH ≈ outcome #8 in LOMAH"

2. bridge-signal-extract Source 3 (Customer/Field):
   ├── Extract customer feedback through OUTCOME LENS
   │   Customer says: "trong mưa nó hay báo nhầm quá"
   │   → 🤖 Map to: Outcome #12 (rain false positive) — satisfaction DECREASED
   │   → Route to: forge-flywheel (satisfaction update) + forge-validate (retest?)
   │
   └── Extract field usage through JOB MAP LENS
       Operator observation: "lính thường bỏ qua bước calibrate"
       → 🤖 Map to: Job Step 4 (CONFIRM) — underserved outcome opportunity
       → Route to: forge-job-map update + helix design consideration

3. bridge-dashboard:
   ├── Metric 8 (MỚI): "Customer Outcome Coverage: __% outcomes served"
   ├── Alert: "Product X has 0 job maps — outcome blind"
   └── CEO review: "outcome satisfaction trend ↑ hay ↓?"
```

---

## NHÁNH 4: DMIR LEARNING LOOP

```
Outcome data creates FEEDBACK cho DMIR meta-layer:

dmir-reflect (after each forge-validate cycle):
  │
  ├── "Predicted: ACH would address outcome #12. Actual: partially (3.8/5 vs. target 4.5)"
  ├── "Why gap? Model performance OK nhưng UI didn't communicate fallback clearly"
  ├── "Root cause: design focused on ALGORITHM accuracy, not OPERATOR EXPERIENCE"
  ├── → Update dmir-model: add "operator experience" as variable in SD model
  └── → Learning: "technical metric ≠ outcome satisfaction. Always validate BOTH."

dmir-paradigm (quarterly):
  │
  ├── Challenge: "Chúng ta nghĩ accuracy = customer satisfaction. Sai."
  │   "Accuracy 96% nhưng operator satisfaction 3.8/5 vì UI confusing in degraded mode"
  ├── Paradigm shift: "Outcome satisfaction = f(technical performance, usability, trust)"
  │   Not just: "Outcome satisfaction = f(technical performance)"
  └── → Feeds next forge-job-map cycle: "investigate usability outcomes deeper"

dmir-cycle-plan (quarterly):
  │
  ├── "This quarter FORGE bottleneck was: outcome data missing for 4/6 products"
  ├── "Intervention: run forge-job-map for LOMAH-AD and MTB-20"
  ├── "Next quarter constraint shifts to: HELIX (design execution too slow)"
  └── → Set priority: FORGE job mapping → HELIX acceleration
```

---

## FEEDBACK LOOP: PRODUCT → FIELD → FORGE-JOB-MAP v2

```
THE COMPLETE CYCLE:

forge-job-map v1 ──▶ FORGE pipeline ──▶ HELIX design ──▶ PRODUCT DELIVERED
                                                              │
                                                              ▼
                                                         FIELD USE
                                                              │
                                                              ▼
                              bridge-signal-extract ◀── Customer feedback
                                                              │
                                        ┌─────────────────────┤
                                        ▼                     ▼
                              forge-flywheel            bridge-knowledge-base
                              (outcome tracking)        (outcome data stored)
                                        │                     │
                                        ▼                     ▼
                              forge-validate            dmir-reflect
                              (retest if needed)        (learn from gaps)
                                        │                     │
                                        └──────┬──────────────┘
                                               ▼
                                    forge-job-map v2
                                    (updated surveys)
                                    (new outcomes discovered)
                                    (satisfaction re-measured)
                                               │
                                               ▼
                                    forge-scout v2
                                    (new opportunities from updated data)
                                    
CYCLE TIME TARGET: 6-12 months (first cycle longer, subsequent compress)

★ MỖI CYCLE:
  - Outcome data more accurate (more users surveyed, more field data)
  - Opportunity landscape shifts (solved outcomes become served, new ones emerge)
  - ACH decisions better targeted (proven outcome alignment)
  - Trust evidence stronger (outcome history over multiple cycles)
  - Library richer (models tagged with outcome performance)
  → COMPOUND: each cycle makes next cycle faster and more accurate
```

---

## V-SMASH WORKED EXAMPLE: COMPLETE TRACE

```
CYCLE 1: V-SMASH (Tháng 1-12)

▸ forge-job-map (Tháng 1):
  Job: "Phát hiện và theo dõi mục tiêu di chuyển trong khu vực tác chiến"
  87 outcomes mapped. Top 5 underserved:
  #1: "Minimize false alarm rate in rain" (score: 9.2)
  #2: "Minimize detection time at night" (score: 8.7)
  #3: "Minimize time to relocate and setup" (score: 8.4)
  #4: "Minimize battery replacement frequency" (score: 7.9)
  #5: "Minimize weight of portable unit" (score: 7.6)

▸ forge-scout (Tháng 1):
  ACH opportunities matched:
  #1 rain FP → AI weather-adaptive algorithm ★ ACH
  #2 night detect → AI low-light enhancement ★ ACH
  #3 setup time → mechanical redesign (NOT ACH)
  #4 battery → power management AI ★ ACH possible
  #5 weight → hardware redesign (NOT ACH)
  → 3 ACH opportunities (outcomes #1, #2, #4)

▸ forge-shift (Tháng 2):
  SHIFTO assessment for "AI weather-adaptive detection":
  S✅ H✅ I✅ F⚠️ T✅ O✅ (outcome #1, score 9.2)
  CEO Decision: GO with conditions (fallback Level 2 required)

▸ forge-fallback (Tháng 2):
  Level 2: rain detection → motion-only fallback
  Spec generated → ICD entry created

▸ helix-task-clarify (Tháng 2-3):
  Requirements enriched: 12 new requirements from outcomes
  Conflict: long-range optics (5km spec) vs. portable setup (#3)
  → Resolved in concept phase: modular optics (detachable telephoto)

▸ helix-concept-generate (Tháng 3):
  WX-DET-001 from library as base → fine-tune for rain
  VDI 2225 with outcome criteria → Concept B wins (modular + AI-adaptive)

▸ helix-embody + detail (Tháng 4-8):
  Standard P&B execution. DfU checks against job map.
  Operator manual structured around 8 job steps.

▸ forge-validate (Tháng 9-10):
  Stage 1 (lab): technical ✅ + outcome #1 rain test ✅ (FP 3.2% < 5%)
  Stage 2 (field): outcome #2 night test ✅, #3 setup 7min ✅
  Stage 4: customer survey → outcomes #1,#2 now satisfied (4.2, 4.0)
           outcome #4 battery still underserved (2.8) → next cycle target

▸ forge-trust (Tháng 10):
  Evidence in outcome language: "Giảm 70% báo nhầm trong mưa"
  Customer reaction: impressed. Contract renewal signed.

▸ forge-library (Tháng 11):
  WX-DET-001v2 (rain-adaptive) entered → tagged: outcomes #1,#2
  Cross-match: LOMAH-AD outcome #8 (rain detection) → transfer candidate

▸ forge-flywheel (Tháng 11-12):
  Outcome tracking: #1 ✅served, #2 ✅served, #4 ❌still underserved
  Field data collecting for model improvement

▸ dmir-reflect (Tháng 12):
  "3/5 top outcomes addressed in 1 cycle. Good."
  "Outcome #3 (setup) solved by mechanical redesign, NOT ACH — correct decision"
  "Outcome #4 (battery) = next ACH opportunity for Cycle 2"

▸ forge-job-map v2 (Tháng 12):
  Re-survey: satisfaction updated. New outcomes discovered from field use.
  Opportunity landscape shifted: new top-5 underserved.
  → Cycle 2 begins with better data.
```

---

## SKILL ACTIVATION SEQUENCE: TÓM TẮT

```
CEO đọc document này và hỏi: "Tôi kích hoạt theo thứ tự nào?"

PHASE 1 — CUSTOMER INTELLIGENCE (Tháng 1):
  1. forge-job-map: V-SMASH pilot (map job, 50+ outcomes, survey users)
  2. bridge-knowledge-base: store outcome data
  
PHASE 2 — PRODUCT STRATEGY (Tháng 2):
  3. forge-scout: cross-reference outcomes × ACH → opportunities
  4. forge-shift (SHIFTO): GO/NO-GO with outcome alignment
  5. forge-fallback: design fallback for GO decisions
  6. forge-cost: economics with outcome-based value

PHASE 3 — DESIGN EXECUTION (Tháng 2-8):
  7. helix-task-clarify: import outcome-derived requirements
  8. helix-concept-generate: evaluate with outcome criteria
  9. helix-embody + detail: standard P&B (outcomes influence DfU)
  10. helix-quality-gate: phase gate + outcome traceability check

PHASE 4 — VALIDATION & TRUST (Tháng 9-10):
  11. forge-validate: test against outcome metrics + technical specs
  12. forge-trust: present evidence in outcome language
  13. bridge-deploy-gate: deployment readiness including outcome validation

PHASE 5 — COMPOUND (Tháng 11-12):
  14. forge-library: catalog model with outcome performance tags
  15. forge-flywheel: track outcome satisfaction over time
  16. bridge-signal-extract: capture field feedback through outcome lens
  17. dmir-reflect: learn from outcome prediction vs. reality

PHASE 6 — CYCLE 2:
  18. forge-job-map v2: updated data → new opportunity landscape
  19. → repeat from Phase 2 with richer data and proven patterns
  
★ MỖI CYCLE: tốt hơn, nhanh hơn, chính xác hơn.
  Cycle 1: 12 tháng (learning curve)
  Cycle 2: 8 tháng (process established)
  Cycle 3: 6 tháng (flywheel spinning)
```

---

*End-to-end workflow hoàn chỉnh. Customer job → 4 nhánh song song → product delivery → field feedback → next cycle. 47 skills activated in sequence, outcome data flowing throughout.*
