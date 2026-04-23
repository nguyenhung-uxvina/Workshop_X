# Pahl & Beitz 7.6: Evaluating Embodiment Designs
## Part 2: Skills 3-7 Meta-Learning Analysis

---

## SKILL 3: Engineering-Design-Review-Mentor

### Phase-Specific Assessment: Embodiment Evaluation Quality

This skill provides systematic critique of embodiment evaluations to ensure they meet Pahl & Beitz methodology standards before final layout decision.

### Review Checklist for Section 7.6 Artifacts

| # | Review Criterion | Weight | Pass | Fail Indicator |
|---|-----------------|--------|------|----------------|
| 1 | Concreteness parity | HIGH | All variants at same development level | Mixed rough/detailed layouts compared |
| 2 | Criteria completeness | HIGH | ≥1 criterion per Figure 7.148 heading | Headings skipped without justification |
| 3 | Requirements traceability | HIGH | Each criterion linked to requirement | Criteria appear without source |
| 4 | Scoring consistency | MEDIUM | Same evaluator(s) for all variants | Different teams scored different variants |
| 5 | Rt calculation correctness | HIGH | Formula applied correctly | Arithmetic errors, missing criteria |
| 6 | Re data quality | MEDIUM | Costs from estimates or quotes | Pure guesswork, no basis documented |
| 7 | S-diagram usage | MEDIUM | Plot exists for multi-variant comparison | No visualization of Rt vs. Re trade-off |
| 8 | Weak spot search | HIGH | Systematic search documented | "No weak spots" without evidence |
| 9 | Elimination evidence | HIGH | Before/after scores for addressed weak spots | Claims of improvement without data |
| 10 | Decision documentation | HIGH | Clear Go/No-Go with rationale | Vague "selected Variant A" |

### Common Evaluation Errors by System Type

#### Machine Gun Mount System / 12.7mm RCWS
- **Typical Error:** Ignoring vibration coupling between mount and vehicle
- **Impact:** Field failures, accuracy degradation
- **Review Action:** Verify "working principle" criterion includes dynamic analysis

#### Target USV / Towed Target (Sea)
- **Typical Error:** Evaluating radar signature in static conditions only
- **Impact:** Targets don't simulate real ship motion patterns
- **Review Action:** Check "function" criteria include dynamic sea state performance

#### Training Grenade
- **Typical Error:** Overweighting cost, underweighting safety margin
- **Impact:** Unreliable training, potential injury
- **Review Action:** Ensure safety criteria are demands (≥3/4 required), not wishes

#### UAV Catapult
- **Typical Error:** Single operating condition evaluation (ideal temperature, no wind)
- **Impact:** Field deployment failures
- **Review Action:** Verify "operation" criteria span environmental range (TCVN tropical conditions)

#### V-SMASH Fire Control System
- **Typical Error:** Evaluating Fire Block Mechanism in isolation from AI system latency
- **Impact:** System integration failures
- **Review Action:** Include system-level response time in technical criteria

### Design Review Template: Embodiment Evaluation Critique

```markdown
## EMBODIMENT EVALUATION REVIEW: [System Name]

### 1. Design Overview
- **Phase:** Embodiment Design (Section 7.6 evaluation)
- **Variants Compared:** [List variants]
- **Evaluation Date:** [Date]
- **Evaluators:** [Names/Roles]

### 2. Methodology Assessment

#### Prerequisites Check
- [ ] All variants at same concreteness level
- [ ] Manufacturing cost data available (or qualitative assessment justified)
- [ ] Requirements list available for criteria derivation

Score: __/3

#### Criteria Evaluation
| Heading (Fig 7.148) | Criteria Present | Score Quality |
|---------------------|------------------|---------------|
| Function | [Y/N] | [0-4 justified?] |
| Working Principle | [Y/N] | |
| Layout | [Y/N] | |
| Safety | [Y/N] | |
| ... | | |

Coverage Score: __/13 headings

### 3. Calculation Verification

#### Technical Rating Rt
- Sum of scores: ___ / ___ (claimed)
- Verified: ___ / ___ (checked)
- Error: [None / Minor / Major]

#### Economic Rating Re
- Cost basis: [Quotes / Estimates / Qualitative]
- Formula: Co = ___, Cvariant = ___
- Re = ___ (claimed) vs. ___ (verified)

### 4. S-Diagram Review
- [ ] Diagram present
- [ ] Axes labeled correctly (Rt, Re)
- [ ] All variants plotted
- [ ] Overall rating method identified (straight-line / hyperbolic)
- [ ] Decision zone interpretation correct

### 5. Weak Spot Analysis

| Weak Spot Claimed | Evidence | Elimination Documented | Verified |
|-------------------|----------|------------------------|----------|
| [Criterion X] | [Y/N] | [Method described?] | [Y/N] |

### 6. Decision Quality

- [ ] Go/No-Go clearly stated
- [ ] Rationale documented
- [ ] Rejected variants have closure reason
- [ ] Trade-offs acknowledged
- [ ] Risk register for accepted limitations

### 7. Overall Assessment

| Category | Score | Notes |
|----------|-------|-------|
| Methodology | __/10 | |
| Completeness | __/10 | |
| Accuracy | __/10 | |
| Documentation | __/10 | |
| **TOTAL** | __/40 | |

### 8. Critical Issues (Must Fix)
1. ❌ [Issue]
2. ❌ [Issue]

### 9. Major Issues (Fix Soon)
1. ⚠️ [Issue]
2. ⚠️ [Issue]

### 10. Recommendations
1. [Specific action]
2. [Specific action]

### 11. Next Review Date
[Date] - After [milestone]
```

### Scorecard: Embodiment Evaluation Quality

| Dimension | 0-2 (Needs Work) | 3-5 (Developing) | 6-8 (Proficient) | 9-10 (Exemplary) |
|-----------|------------------|------------------|------------------|------------------|
| **Prerequisites** | Variants at different stages | Some parity issues | Mostly aligned | Full parity verified |
| **Criteria Coverage** | <50% headings | 50-75% headings | 75-90% headings | All headings + extra |
| **Technical Rating** | Major errors | Minor calculation errors | Correct with minor omissions | Perfect with documentation |
| **Economic Rating** | No cost basis | Qualitative only | Estimates documented | Quotes + lifecycle |
| **S-Diagram** | Absent | Present but errors | Correct construction | With evolution tracking |
| **Weak Spots** | Not searched | Identified but not addressed | Addressed with evidence | Systematic + verified |
| **Decision** | Unclear | Stated but weak rationale | Clear with justification | Full audit trail |

---

## SKILL 4: Engineering-Interleaving-Scheduler

### Learning Schedule: Section 7.6 with Related Topics

**Interleaving Rationale:** Section 7.6 evaluation methods connect deeply to Section 3.3.2 (evaluation basics), Section 6.5 (concept evaluation), and Chapter 10 (faults/disturbing factors). Interleaving these topics prevents isolated knowledge silos.

### 4-Week Mastery Schedule (10 hours/week)

#### Week 1: Foundation Building (Low Interleaving - 20%)

| Day | Time | Primary (80%) | Secondary (20%) |
|-----|------|---------------|-----------------|
| Mon | 2h | Section 3.3.2 - Evaluation Basics | Section 7.6 overview (scan) |
| Wed | 2h | Section 3.3.2 - VDI 2225 Method | Chunk 1: Prerequisites |
| Fri | 2h | Section 3.3.2 - Scoring/Weighting | Practice: Score training grenade |
| Sat | 2h | Review + Quiz | Section 6.5 quick read |
| Sun | 2h | Chunk 2: Technical Rating Rt | 12.7mm RCWS example |

**Week 1 Goal:** Master scoring mechanics before tackling embodiment-specific evaluation.

#### Week 2: Core Methodology (Medium Interleaving - 40%)

| Day | Time | Block A (60%) | Block B (40%) |
|-----|------|---------------|---------------|
| Mon | 2h | Chunk 2 deep dive: Rt calculation | Section 6.5: Concept evaluation comparison |
| Wed | 2h | Chunk 3: Economic Rating Re | V-SMASH cost estimation exercise |
| Fri | 2h | Chunk 4: S-Diagram construction | Plot UAV catapult variants |
| Sat | 2h | Review: Rt + Re + S-Diagram | Chapter 10 preview: Fault types |
| Sun | 2h | Practice integration exercise | Compare 7.6 vs. 6.5 evaluation focus |

**Week 2 Goal:** Connect technical and economic ratings, understand how embodiment evaluation differs from concept evaluation.

#### Week 3: Critical Skills (High Interleaving - 60%)

| Day | Time | Rotation Topic A | Rotation Topic B | Rotation Topic C |
|-----|------|------------------|------------------|------------------|
| Mon | 2h | Chunk 5: Weak spots | Chapter 10: Faults | Value profile analysis |
| Wed | 2h | Chunk 5: Elimination | Section 7.4: Embodiment principles | Target USV case |
| Fri | 2h | Chapter 10: Disturbing factors | Chunk 5 practice | Machine gun mount |
| Sat | 2h | Integration: All concepts | LOMAH system evaluation | Review weak areas |
| Sun | 2h | Mock embodiment evaluation | Peer review exercise | Gaps identification |

**Week 3 Goal:** Master weak spot identification and elimination across multiple defense systems.

#### Week 4: Integration and Mastery (Project-Based)

| Day | Time | Activity |
|-----|------|----------|
| Mon | 2h | Full evaluation: Radar-IR Target Pod (all chunks) |
| Wed | 2h | Full evaluation: Small Arms Simulator (all chunks) |
| Fri | 2h | Design review of peer's evaluation (Skill 3) |
| Sat | 2h | Final self-assessment + gaps |
| Sun | 2h | Remedial practice on identified weak areas |

**Week 4 Goal:** Execute complete embodiment evaluations independently with professional quality.

### Interleaving Pattern Visualization

```
Week 1: [3.3.2][3.3.2][3.3.2][3.3.2][7.6.1]  (Foundation focused)
         ████████████████████████████░░░░░░

Week 2: [7.6.2][6.5 ][7.6.3][7.6.4][Ch10]   (Core + Connections)
         ██████░░░░████████████░░░░░░░░

Week 3: [7.6.5][Ch10][7.6.5][7.4 ][7.6.5]   (High interleaving)
         ██████░░░░██████░░░░██████

Week 4: [FULL EVALUATION PROJECT ACROSS ALL TOPICS]
         ████████████████████████████████████
```

### Topic Rotation Schedule for Daily Practice (After Week 4)

For maintenance of mastery, rotate through these practice activities:

| Day | Focus | Duration | Activity |
|-----|-------|----------|----------|
| Monday | Rt calculation | 30 min | Score 5 criteria for any defense system |
| Tuesday | Re estimation | 30 min | Cost breakdown for one component |
| Wednesday | S-Diagram | 20 min | Plot and interpret one comparison |
| Thursday | Weak spots | 45 min | Analyze value profile, propose elimination |
| Friday | Full evaluation | 60 min | Complete mini-evaluation (5-7 criteria) |

---

## SKILL 5: Engineering-Project-Progress-Tracker

### Competency Framework: Section 7.6 Evaluation Skills

#### Phase 3 (Embodiment Design) - Evaluation Competencies

| Competency Area | Weight | Level 1 | Level 2 | Level 3 | Level 4 |
|-----------------|--------|---------|---------|---------|---------|
| **Prerequisites Check** | 10% | Can name requirements | Verifies concreteness parity | Ensures cost data availability | Validates complete readiness |
| **Criteria Derivation** | 15% | Copies from template | Links to requirements | Covers all Fig 7.148 headings | Adapts to system-specific needs |
| **Rt Calculation** | 20% | Makes errors | Correct with guidance | Independent + accurate | Teaches others |
| **Re Calculation** | 15% | Understands concept | Applies with estimates | Uses cost quotes | Includes lifecycle |
| **S-Diagram Usage** | 10% | Plots incorrectly | Plots correctly | Interprets zones | Tracks evolution |
| **Weak Spot Search** | 20% | Misses obvious weak spots | Finds surface issues | Identifies root causes | Proposes effective eliminations |
| **Decision Quality** | 10% | No clear decision | Decision stated | Justified decision | Full audit trail |

#### Progress Dashboard Template

```
╔════════════════════════════════════════════════════════════════╗
║   EMBODIMENT EVALUATION COMPETENCY DASHBOARD                   ║
║   User: [Name]    Date: [Date]    Assessment: [#]              ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║   OVERALL: ████████████░░░░░░░░ 62% (Developing)              ║
║                                                                 ║
║   Prerequisites:    ████████████████████ 100% ✓               ║
║   Criteria:         ████████████░░░░░░░░ 65%                  ║
║   Rt Calculation:   ████████████████░░░░ 80% ✓                ║
║   Re Calculation:   ████████░░░░░░░░░░░░ 45% ⚠️               ║
║   S-Diagram:        ████████████████░░░░ 80% ✓                ║
║   Weak Spots:       ██████░░░░░░░░░░░░░░ 30% ❌               ║
║   Decision:         ████████████████░░░░ 75%                  ║
║                                                                 ║
║   STRENGTHS: Rt calculation, S-diagram plotting                 ║
║   GAPS: Re estimation (needs cost practice)                     ║
║         Weak spot identification (critical gap)                 ║
║                                                                 ║
║   RECOMMENDED ACTIONS:                                          ║
║   1. [HIGH] Practice weak spot drills (Skill 12)               ║
║   2. [MEDIUM] Cost estimation workshop with production team     ║
║   3. [LOW] Review Fig 7.148 checklist memorization             ║
║                                                                 ║
║   NEXT MILESTONE: Weak Spots competency ≥ 60%                  ║
║   ESTIMATED TIME: 2 weeks @ 5 hours/week                       ║
║                                                                 ║
║   PROJECT READINESS:                                            ║
║   □ Component evaluation - Ready                                ║
║   □ Subsystem evaluation - Ready with mentoring                 ║
║   ■ Full system evaluation - Not ready (weak spots gap)         ║
╚════════════════════════════════════════════════════════════════╝
```

#### Evidence Collection for Progress Assessment

| Evidence Type | Source | Weight | Example |
|---------------|--------|--------|---------|
| Evaluation exercises | Completed practice problems | 40% | V-SMASH evaluation scored |
| Project artifacts | Real project evaluations | 40% | UAV catapult evaluation document |
| Quiz results | Section 7.6 knowledge quiz | 10% | 85% on Rt/Re quiz |
| Peer reviews | Reviewed others' evaluations | 10% | Found 3 errors in peer work |

#### Learning Path Generation: From Current State

**If competency < 50% (Needs Work):**
```
Step 1: Review Section 3.3.2 basics (2 hours)
Step 2: Complete Chunks 1-3 with full exercises (6 hours)
Step 3: Practice 5 Rt calculations (1 hour each)
Step 4: Reassess before continuing to Chunks 4-6
```

**If competency 50-70% (Developing):**
```
Step 1: Identify specific weak area (dashboard shows Re and Weak Spots)
Step 2: Targeted drill on Re estimation (3 hours)
Step 3: Weak spot identification workshop (4 hours)
Step 4: Complete 2 full evaluations with mentor review
Step 5: Reassess for Proficient level
```

**If competency 70-85% (Proficient):**
```
Step 1: Practice on complex systems (V-SMASH, RCWS)
Step 2: Conduct peer reviews (teaching reinforces learning)
Step 3: Handle edge cases (qualitative Re, single-variant evaluation)
Step 4: Document one evaluation as reference example
```

**If competency > 85% (Exemplary):**
```
Step 1: Mentor others on evaluation methodology
Step 2: Develop system-specific evaluation templates
Step 3: Lead evaluation workshops for team
Step 4: Contribute to organizational standards
```

---

## SKILL 6: Engineering-Concept-Evaluation-Assistant

### Application to Embodiment Phase

While primarily used for conceptual design (Phase 2), the concept evaluation assistant adapts to embodiment evaluation with key modifications.

### Conceptual vs. Embodiment Evaluation Comparison

| Aspect | Conceptual (Section 6.5) | Embodiment (Section 7.6) |
|--------|--------------------------|--------------------------|
| **Object** | Principle solutions | Construction structures |
| **Information Level** | Low (working principles) | High (layouts, dimensions) |
| **Rt Focus** | Can concept work? | Does layout meet specs? |
| **Re Approach** | Usually qualitative | Should be quantitative |
| **Criteria Source** | Main functions | Requirements list details |
| **Typical Criteria** | 5-10 | 10-15+ |
| **Weak Spot Impact** | Return to function structure | Return to concept or redesign |
| **Output** | Concept selection | Layout validation |

### Adapted VDI 2225 Process for Embodiment

#### Step 1: Criteria Extraction (Expanded for Embodiment)

For embodiment evaluation, use Figure 7.148 checklist to ensure comprehensive criteria:

**Function Criteria (from requirements demands):**
- Primary function metrics (speed, accuracy, capacity)
- Secondary function fulfillment
- Interface compatibility

**Working Principle Criteria:**
- Physical effect utilization efficiency
- Principle robustness under variation

**Layout Criteria:**
- Spatial compatibility
- Assembly feasibility
- Access for maintenance

**Lifecycle Criteria:**
- Production manufacturability
- Operational reliability
- Maintenance accessibility
- End-of-life handling

#### Step 2: Weighting Justification (Embodiment-Specific)

| Weight Category | Embodiment Emphasis | Example Criterion |
|-----------------|--------------------|--------------------|
| **HIGH (>15%)** | Safety, primary function, cost drivers | Fire block response time |
| **MEDIUM (10-15%)** | Secondary functions, lifecycle factors | Maintenance MTTR |
| **LOW (<10%)** | Aesthetic, minor features | Surface finish quality |

**Defense System Weighting Pattern:**

| System Type | Highest Weight | Second Weight | Third Weight |
|-------------|----------------|---------------|--------------|
| Weapon Mount | Accuracy stability | Recoil control | Field serviceability |
| Target System | Signature simulation | Survivability | Recovery ease |
| Training Device | Realism | Safety | Durability |
| Fire Control | Response time | Reliability | Weight |

#### Step 3: Scoring with Embodiment Specificity

**0-4 Scale Interpretation for Embodiment:**

| Score | General Meaning | Embodiment Interpretation |
|-------|-----------------|---------------------------|
| 4 | Ideal solution | Layout fully optimized, exceeds requirements |
| 3 | Good | Layout meets requirements, minor improvements possible |
| 2 | Satisfactory | Layout meets minimum, significant room for improvement |
| 1 | Just acceptable | Layout marginally acceptable, requires revision |
| 0 | Unacceptable | Layout fails requirement, return to concept |

#### Step 4: Embodiment-Specific Evaluation Matrix Template

```markdown
## EMBODIMENT EVALUATION MATRIX: [System Name]

### Evaluation Setup
- Date: [Date]
- Evaluator(s): [Names]
- Variants: [List or "Single variant assessment"]
- Basis: Requirements List v[#], Technical Specs v[#]

### Technical Evaluation (Rt)

| ID | Criterion | Source | Weight | Ideal | V1 | V2 | V3 | Notes |
|----|-----------|--------|--------|-------|----|----|-----|-------|
| T1 | [Function 1] | Req D-01 | 1.2 | 4 | | | | |
| T2 | [Function 2] | Req D-02 | 1.0 | 4 | | | | |
| T3 | [Safety 1] | Req D-05 | 1.5 | 4 | | | | |
| T4 | [Layout 1] | Tech Spec 3 | 0.8 | 4 | | | | |
| T5 | [Production] | Fig 7.148 | 1.0 | 4 | | | | |
| ... | | | | | | | | |

**Weighted Sums:**
- Ideal: [Sum of weights × 4]
- V1: [Weighted sum] → Rt = ___ / ___ = ___
- V2: [Weighted sum] → Rt = ___ / ___ = ___
- V3: [Weighted sum] → Rt = ___ / ___ = ___

### Economic Evaluation (Re)

| ID | Cost Category | V1 ($) | V2 ($) | V3 ($) | Notes |
|----|---------------|--------|--------|--------|-------|
| E1 | Materials | | | | |
| E2 | Direct Labor | | | | |
| E3 | Overheads | | | | |
| E4 | **Manufacturing Total** | | | | |
| E5 | Operating (annual) | | | | |
| E6 | Maintenance (annual) | | | | |
| E7 | **Lifecycle Total** | | | | |

**Economic Rating:**
- Basis: Co = 0.7 × [Cmin or Cadmissible] = ___
- Re(V1) = ___ / ___ = ___
- Re(V2) = ___ / ___ = ___
- Re(V3) = ___ / ___ = ___

### Combined Analysis

| Variant | Rt | Re | R (hyperbolic) | Rank |
|---------|-----|-----|----------------|------|
| V1 | | | | |
| V2 | | | | |
| V3 | | | | |

### S-Diagram
[ASCII or reference to attached image]

### Weak Spot Analysis
| Variant | Weak Criterion | Score | Root Cause | Elimination Plan |
|---------|----------------|-------|------------|------------------|
| | | | | |

### Decision
- **Selected:** [Variant]
- **Rationale:** [2-3 sentences]
- **Conditions:** [Any monitoring or fixes required]
- **Rejected Variants:** [Why not selected]

### Signatures
- Technical Lead: _____________ Date: _______
- Project Manager: ____________ Date: _______
```

---

## SKILL 7: Engineering-Mnemonic-Creator

### Mnemonics for Section 7.6 Key Concepts

---

### MNEMONIC 1: Evaluation Prerequisites

#### 🎯 Target Concept
The two prerequisites for embodiment evaluation: same concreteness level and manufacturing costs determinable.

#### 🧠 Primary Mnemonic
**Type:** Acronym + Visual  
**Mnemonic:** **"SAME COST"** - Both must be SAME level and COST must be determinable

#### 📖 Component Breakdown
- **S**ame = Same degree of concreteness
- **A**ll = All variants must meet this
- **M**atch = Information content must match
- **E**qual = Equal development stage

- **C**ost = Manufacturing costs
- **O**btainable = Must be obtainable (estimates or quotes)
- **S**pecific = Specific to each variant
- **T**otal = Total including materials, labor, overheads

#### 💡 Memory Reinforcement
Picture a scale with two identical drawings on each side (SAME concreteness), and a price tag attached to each (COST determinable). The scale must be balanced and priced before you can compare.

#### ✅ Quick Recall Test
1. What must be "same" before comparing embodiment variants?
2. What cost components must be determinable?

---

### MNEMONIC 2: Figure 7.148 Checklist Headings (13 items)

#### 🎯 Target Concept
The 13 headings of the embodiment evaluation checklist.

#### 🧠 Primary Mnemonic
**Type:** Story + Acronym  
**Mnemonic:** **"FWLS-EPQ-ATOMRC"** - "Forward Looking Soldier - Expertly Planned Quarters - At Tomorrow's Military Research Center"

#### 📖 Component Breakdown
**FWLS** (The soldier moving forward):
- **F**unction - Lack of ambiguity ensured
- **W**orking principle - Market position favorably influenced
- **L**ayout - Material and energy reduced, design simplified
- **S**afety - Safety increased

**EPQ** (Expert planning):
- **E**rgonomics - Instructions clear, conditions improved
- **P**roduction - Materials handling, quality control, capacity
- **Q**uality control - Inspection simplified

**ATOMRC** (Tomorrow's military research):
- **A**ssembly - Assembly facilitated
- **T**ransport - Transport and packing simplified
- **O**peration - Operation clarified
- **M**aintenance - Parts replacement improved
- **R**ecycling - Recycling facilitated
- **C**osts - Costs reduced (design, production, assembly, testing)

#### 💡 Memory Reinforcement
Visualize a Vietnamese soldier walking toward a modern military research facility. As he walks (FWLS), he reviews his expertly planned quarters (EPQ), arriving at tomorrow's military research center (ATOMRC). Each letter represents a checklist heading he must verify.

#### ✅ Quick Recall Test
1. List the 13 headings in order
2. What does the "S" in FWLS represent?
3. Which headings fall under ATOMRC?

#### 🔗 Application Context
Use this mnemonic when verifying that your embodiment evaluation covers all required aspects before declaring "evaluation complete."

---

### MNEMONIC 3: Technical Rating Formula

#### 🎯 Target Concept
The formula for calculating Technical Rating: Rt = Σ(weighted scores) / Σ(ideal scores)

#### 🧠 Primary Mnemonic
**Type:** Visual Metaphor  
**Mnemonic:** **"Tỷ lệ Thực / Tối đa"** (Ratio of Real / Maximum)

#### 📖 Component Breakdown
- **Rt** = Rating technical (Tỷ lệ kỹ thuật)
- **Tử số (Numerator)** = Tổng điểm thực tế (Sum of actual scores)
- **Mẫu số (Denominator)** = Tổng điểm tối đa (Sum of ideal = n × 4)

#### 💡 Memory Reinforcement
Imagine a thermometer where the mercury level (Tỷ lệ Thực) shows how close you are to the top (Tối đa). Rt = how far up the thermometer reaches compared to the maximum mark.

```
Ideal (4×n) ─────── 1.0 (100%)
     │
     █  ← Your score (Rt = 0.75)
     █
     █
     █
─────┴─────── 0.0
```

#### ✅ Quick Recall Test
1. If 5 criteria each scored 3/4, what is Rt?
   - Answer: Rt = 15/20 = 0.75

---

### MNEMONIC 4: Economic Rating Formula

#### 🎯 Target Concept
The formula for calculating Economic Rating: Re = Co / Cvariant

#### 🧠 Primary Mnemonic
**Type:** Acronym with Logic  
**Mnemonic:** **"RE = Cơ sở / Chi phí"** (Base / Cost)

#### 📖 Component Breakdown
- **Re** = Rating economic
- **Co** = Cost reference (Cơ sở = baseline)
  - Option 1: Co = 0.7 × Cadmissible (budget)
  - Option 2: Co = 0.7 × Cminimum (cheapest variant)
- **Cvariant** = Cost of variant being evaluated

**Logic Memory:** "Cheaper is better" → When cost (denominator) goes DOWN, Re goes UP

#### 💡 Memory Reinforcement
Picture a fraction: the baseline (what you'd ideally pay) divided by what you actually pay. If you get a good deal (low actual cost), the fraction goes UP (better Re).

```
        Co (baseline)
Re = ─────────────────
       Cvariant (actual)

If Cvariant < Co → Re > 1 (great deal!)
If Cvariant = Co → Re = 1 (exactly as expected)
If Cvariant > Co → Re < 1 (over budget)
```

#### ✅ Quick Recall Test
1. If budget is $10,000 and variant costs $8,000, calculate Re
   - Co = 0.7 × $10,000 = $7,000
   - Re = $7,000 / $8,000 = 0.875

---

### MNEMONIC 5: S-Diagram Interpretation

#### 🎯 Target Concept
How to interpret positions on the S-diagram (Rt on x-axis, Re on y-axis).

#### 🧠 Primary Mnemonic
**Type:** Spatial + Vietnamese phrase  
**Mnemonic:** **"Phải Trên = Tốt" (Right-Up = Good)**

#### 📖 Component Breakdown
- **Góc phải trên (Upper-right):** High Rt, High Re → Best candidates
- **Góc phải dưới (Lower-right):** High Rt, Low Re → Technically great but expensive
- **Góc trái trên (Upper-left):** Low Rt, High Re → Cheap but weak
- **Góc trái dưới (Lower-left):** Low Rt, Low Re → Not worth developing

#### 💡 Memory Reinforcement
Draw a compass on the S-diagram:
- Northeast (NE) = Nirvana (ideal)
- Southeast (SE) = Expensive Excellence
- Northwest (NW) = Cheap but Crappy
- Southwest (SW) = Scrap it

```
      Re ↑
         |  NW (cheap/weak)  |  NE (ideal!) ★
    0.7  |─────────────────────────────────────
         |  SW (scrap!)      |  SE (expensive)
         |____________________________________→ Rt
                            0.7
```

#### ✅ Quick Recall Test
1. A variant at Rt=0.85, Re=0.55 is in which zone?
   - Answer: Southeast (excellent technically, expensive)
2. What should you do with a Southwest variant?
   - Answer: Eliminate from further development

---

### MNEMONIC 6: Weak Spot Identification Process

#### 🎯 Target Concept
The systematic process for finding and eliminating weak spots.

#### 🧠 Primary Mnemonic
**Type:** Acronym + Story  
**Mnemonic:** **"FIND-FIX-VERIFY"** (Tìm - Sửa - Kiểm tra)

#### 📖 Component Breakdown
**FIND:**
- **F**rom value profile, identify below-average scores
- **I**nspect checklist (Fig 7.148) for missing evaluations
- **N**ote disturbing factors (temperature, vibration, etc.)
- **D**ocument root causes

**FIX:**
- **F**ormulate elimination strategy
- **I**mplement design changes
- **X**amine effects on other criteria (no new weak spots?)

**VERIFY:**
- **V**alidate with re-scoring
- **E**nsure before/after improvement documented
- **R**eview by independent party
- **I**nclude in decision rationale
- **F**inalize layout only after verification
- **Y**es/No decision based on verified elimination

#### 💡 Memory Reinforcement
Military analogy: FIND the enemy position, FIX (engage and neutralize) the threat, VERIFY the area is clear before advancing.

#### ✅ Quick Recall Test
1. What does the "D" in FIND represent?
2. After implementing a fix, what must you verify?

---

### Review Schedule for All Mnemonics

| Mnemonic | Day 1 | Day 3 | Day 7 | Day 14 |
|----------|-------|-------|-------|--------|
| SAME COST | ✓ Learn | ✓ Quick recall | ✓ Apply to exercise | ✓ Teach to peer |
| FWLS-EPQ-ATOMRC | ✓ Learn | ✓ Write from memory | ✓ Use in evaluation | ✓ Verify coverage |
| Rt formula | ✓ Learn | ✓ Calculate 3 problems | ✓ Calculate 5 problems | ✓ Explain to colleague |
| Re formula | ✓ Learn | ✓ Calculate 3 problems | ✓ Calculate with lifecycle | ✓ Estimate real system |
| Phải Trên = Tốt | ✓ Draw diagram | ✓ Plot 5 points | ✓ Interpret real data | ✓ Track evolution |
| FIND-FIX-VERIFY | ✓ Learn | ✓ Practice on case | ✓ Apply to weak spot | ✓ Lead review |

---

*Document continues in Part 3 with Skills 8-13...*
