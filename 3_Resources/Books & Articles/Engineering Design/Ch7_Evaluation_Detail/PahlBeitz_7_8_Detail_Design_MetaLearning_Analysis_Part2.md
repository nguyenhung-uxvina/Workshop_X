# Pahl & Beitz Section 7.8: Detail Design
## Meta-Learning Analysis Part 2: Skills 3-7

---

## Skill 3: Design Review Criteria (engineering-design-review-mentor)

### Detail Design Review Framework

#### Phase Identification
**Current Phase:** Phase 4 - Detail Design  
**Key Deliverables Expected:**
- Complete component drawings with all dimensions and tolerances
- Assembly drawings with exploded views and sequence
- Bills of Materials (BOMs) with part numbers
- Production instructions and inspection criteria
- Standards compliance documentation

---

### Phase-Specific Assessment Criteria

#### A. Technical Completeness (30%)

| Criterion | Weight | Score 0-3 | Evidence Required |
|-----------|--------|-----------|-------------------|
| **A1. Dimensional completeness** | 8% | __ | All functional dimensions specified |
| **A2. Tolerance specification** | 7% | __ | GD&T properly applied, stack-up verified |
| **A3. Material specification** | 5% | __ | Materials fully defined with alternates |
| **A4. Surface finish** | 5% | __ | Ra/Rz specified for all critical surfaces |
| **A5. Standard parts identified** | 5% | __ | All standard parts have catalog numbers |

**Scoring Guide for A1 (Dimensional Completeness):**
- **0**: Missing >30% of dimensions needed for manufacturing
- **1**: Missing 15-30% of dimensions
- **2**: Missing 5-15% of dimensions, minor issues
- **3**: All dimensions present, properly organized

---

#### B. Documentation Quality (25%)

| Criterion | Weight | Score 0-3 | Evidence Required |
|-----------|--------|-----------|-------------------|
| **B1. Drawing clarity** | 6% | __ | Views clear, no ambiguity |
| **B2. BOM accuracy** | 6% | __ | All parts listed, quantities correct |
| **B3. Assembly instructions** | 5% | __ | Sequence clear, torque values specified |
| **B4. Revision control** | 4% | __ | Revision history maintained |
| **B5. Cross-references** | 4% | __ | Part numbers traceable across documents |

---

#### C. Standards Compliance (25%)

| Criterion | Weight | Score 0-3 | Evidence Required |
|-----------|--------|-----------|-------------------|
| **C1. MIL-STD compliance** | 8% | __ | Applicable MIL-STDs identified and met |
| **C2. Company standards** | 5% | __ | In-house standards followed |
| **C3. Safety standards** | 7% | __ | MIL-STD-882 requirements addressed |
| **C4. Interoperability** | 5% | __ | NATO STANAG where applicable |

---

#### D. Producibility (20%)

| Criterion | Weight | Score 0-3 | Evidence Required |
|-----------|--------|-----------|-------------------|
| **D1. Manufacturing feasibility** | 7% | __ | Processes identified, equipment available |
| **D2. Cost effectiveness** | 5% | __ | Tolerances not over-specified |
| **D3. Local sourcing** | 5% | __ | Vietnamese supply chain considered |
| **D4. Assembly feasibility** | 3% | __ | Assembly sequence practical |

---

### Defense System-Specific Checklists

#### V-SMASH Fire Block Mechanism Review

```markdown
□ SAFETY CRITICAL ITEMS
  □ Fire block engagement verified at 100% stroke
  □ Fail-safe spring force calculated (1.5x operating force)
  □ Material certification traceable to heat lot
  □ Hardness testing per MIL-STD-1312
  
□ TIMING CRITICAL ITEMS
  □ Solenoid response time specified: <5ms
  □ Mechanical clearances verified for temperature range
  □ Tolerance stack-up shows <0.1mm variation at extremes
  
□ INTERFACE VERIFICATION
  □ ICD-VSMASH-003 revision B or later referenced
  □ Electrical connector per MIL-DTL-38999
  □ Mounting bolt pattern matches receiver drawing
```

#### 12.7mm RCWS Review Checklist

```markdown
□ STRUCTURAL INTEGRITY
  □ FEA results documented for max recoil (45kN)
  □ Weld joint factor of safety ≥ 3.0
  □ Fatigue life documented (50,000 rounds minimum)
  
□ AMMUNITION HANDLING
  □ Feed system tolerances verified for M2 belt
  □ Spent case ejection clearance documented
  □ Link ejection trajectory clear of vehicle
  
□ ENVIRONMENTAL
  □ Salt spray coating per MIL-PRF-32348
  □ Operating temp range: -40°C to +55°C
  □ Dust/sand protection per MIL-STD-810H
```

#### Target UAV Review Checklist

```markdown
□ AIRFRAME STRUCTURE
  □ Composite layup schedule complete
  □ Load cases per MIL-A-8861
  □ Ground handling loads specified
  
□ PROPULSION INTEGRATION
  □ Engine mounting vibration isolation
  □ Fuel system per MIL-DTL-5578
  □ Exhaust routing thermal analysis
  
□ EXPENDABLE DESIGN
  □ Cost target met (<$50k unit flyaway)
  □ Simplified manufacturing processes
  □ Reduced inspection requirements documented
```

---

### Severity Categorization

| Severity | Symbol | Definition | Action Required |
|----------|--------|------------|-----------------|
| **Critical** | ❌ | Blocks production release | Must fix immediately |
| **Major** | ⚠️ | Significant impact on quality/cost | Fix within 2 weeks |
| **Minor** | ℹ️ | Improvement opportunity | Address when convenient |

---

### Sample Review Finding Format

```markdown
**Finding ID:** DDR-VSMASH-001
**Severity:** ❌ Critical
**Category:** A2 - Tolerance specification
**Description:** Fire block engagement position tolerance ±0.15mm 
               exceeds functional requirement of ±0.05mm
**Impact:** May cause incomplete block engagement, safety hazard
**Evidence:** Drawing VSMASH-2301 Rev A, dim 23
**Recommendation:** 
  1. Revise tolerance to ±0.05mm
  2. Add position tolerance callout ⌀0.02 | A
  3. Update cost estimate for tighter tolerance
**Timeline:** Fix before production release (Week 3)
**Owner:** Design Engineer
```

---

### Review Scorecard Calculation

```
CATEGORY          WEIGHT    RAW SCORE    WEIGHTED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A. Technical       30%       __/15        __
B. Documentation   25%       __/15        __
C. Standards       25%       __/12        __
D. Producibility   20%       __/12        __
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL             100%                   __/100

INTERPRETATION:
  86-100%  EXEMPLARY    → Ready for production release
  61-85%   PROFICIENT   → Minor revisions, re-review optional
  41-60%   DEVELOPING   → Major revisions required
  0-40%    NEEDS WORK   → Significant rework, mandatory re-review
```

---

## Skill 4: Systems Mapping (engineering-systems-mapper)

### Detail Design System Dynamics

#### System Boundary Definition

**Inside Boundary (Design Team Controls):**
- Drawing specifications
- Tolerance selection
- Material choices
- Documentation format
- Production method recommendations

**Outside Boundary (Given/Fixed):**
- Embodiment layout (input from Phase 3)
- Budget constraints
- Schedule deadlines
- Manufacturing equipment available
- Customer requirements (from Phase 1)

**Interface Points:**
- CAD/CAM data transfer
- Supplier technical communication
- QC inspection feedback
- Production engineering input

---

### Stock-Flow-Feedback Analysis

#### Material Stocks

```
STOCK: Design Documentation Completeness
  Current: 60% complete (estimated)
  Target: 100% complete for production release
  Measurement: % of drawings released for production

STOCK: Production Knowledge
  Current: Limited (first article)
  Target: Full production capability
  Measurement: Defect rate, cycle time
```

#### Information Stocks

```
STOCK: Manufacturing Lessons Learned
  Sources: First article build, prototype testing
  Inflow: +lessons/iteration during pilot production
  Outflow: -knowledge/month if not documented
  Gap: Need systematic capture mechanism

STOCK: Standards Knowledge
  Current: 70% of applicable standards identified
  Target: 100% compliance verification
  Risk: Unknown standards discovered late
```

---

### Feedback Loop Analysis

#### R1: Quality Spiral (Reinforcing)

```
[Detail Quality] +→ [Production Quality] +→ 
[Customer Confidence] +→ [Program Funding] +→
[Design Resources] +→ [Detail Quality]

Effect: Higher quality designs lead to more resources for even better designs
Leverage: Invest heavily in first article quality
Vietnamese Context: Build reputation with MoD through demonstrated quality
```

#### R2: Documentation Debt (Reinforcing - Negative)

```
[Schedule Pressure] +→ [Documentation Shortcuts] +→
[Ambiguous Drawings] +→ [Production Errors] +→
[Rework Required] +→ [Schedule Pressure]

Effect: Cutting corners on documentation creates more schedule pressure
Delay: 2-4 weeks between shortcut and error discovery
Intervention Point: STOP - Never skip documentation review
```

#### B1: Tolerance Optimization (Balancing)

```
[Tight Tolerances] +→ [Manufacturing Cost] +→
[Budget Pressure] -→ [Design Specification] -→
[Tight Tolerances]

Effect: Stabilizes tolerances around cost-optimal level
Risk: May settle at non-functional tolerance level
Intervention: Define functional requirements FIRST, then cost-optimize
```

#### B2: Standards Compliance (Balancing)

```
[Standards Requirement] +→ [Compliance Effort] +→
[Design Complexity] +→ [Documentation Burden] +→
[Deviation Requests] -→ [Standards Requirement]

Effect: Excessive standards burden triggers deviation requests
Vietnamese Context: Some MIL-STDs require tailoring for local conditions
Leverage: Negotiate tailoring early, before Detail Design
```

---

### Causal Loop Diagram: Detail Design Dynamics

```
                    ┌─────────────────────────────┐
                    │                             │
                    ▼                             │
         [Schedule Pressure]                      │
              │    │                              │
              │    └──────────────────┐          │
              │                       │          │
              ▼                       ▼          │
    [Documentation      [Tolerance             │
     Shortcuts]         Relaxation]            │
         │                   │                  │
         │                   │                  │
         ▼                   ▼                  │
   [Ambiguous         [Production              │
    Drawings]          Cost ↓]                 │
         │                   │                  │
         │                   │   B1             │
         ▼                   └──────────────────┤
   [Production                                  │
    Errors]                                     │
         │                                      │
         │  R2                                  │
         ▼                                      │
   [Rework Required] ─────────────────────────►─┘
         │
         │
         ▼
   [Customer
    Dissatisfaction]
         │
         │  R1 (broken)
         ▼
   [Program Funding ↓]
```

---

### Leverage Point Analysis for Detail Design

| Level | Current State | High-Leverage Intervention | Impact | Effort |
|-------|---------------|---------------------------|--------|--------|
| **L3** (Goals) | Goal: Complete drawings | Goal: Zero production defects from documentation | Very High | High |
| **L5** (Rules) | Rules: Designer reviews own work | Rule: Mandatory peer review + production review | High | Medium |
| **L6** (Information) | Information: Defects found in production | Information: Real-time DFM feedback in CAD | High | Medium |
| **L9** (Delays) | 2-week delay: Drawing → Production feedback | Same-day: Digital twin manufacturing simulation | Medium | High |
| **L12** (Parameters) | Parameter: ±0.1mm default tolerance | Parameter: Function-based tolerance selection | Low | Low |

**Recommended Intervention Priority:**
1. **L6 (Information)**: Implement DFM checking in CAD workflow
2. **L5 (Rules)**: Establish production engineer sign-off requirement
3. **L9 (Delays)**: Reduce feedback loop through digital prototyping

---

### Vietnamese Defense Context Considerations

```
SUPPLY CHAIN CONSTRAINTS:
  - Import lead times: 3-6 months for specialty materials
  - Alternative materials: Specify multiple qualified sources
  - Local capability: Design for Vietnamese manufacturing equipment
  
STANDARDS ACCESS:
  - MIL-STD availability: Some restricted, use ASSIST database
  - TCVN standards: Easier access, consider local equivalents
  - NATO STANAG: Through Ministry of Defense channels

ORGANIZATIONAL DYNAMICS:
  - Design-production communication: Often weak, build relationships
  - Quality culture: Variable, specify inspection methods explicitly
  - Documentation language: Vietnamese + English for export potential
```

---

## Skill 5: Targeted Drill Master (engineering-targeted-drill-master)

### Detail Design Drill Package

#### Drill Set 1: Tolerance Specification (Most Common Weakness)

**Weak Area Pattern:** Engineers assign tolerances arbitrarily without functional analysis

**Drill Type:** Scaffolded Application (30 minutes)

---

**Problem 1: LOMAH Target Indicator Mounting**

*Scenario:* A LOMAH target indicator must be positioned to ±1 mrad accuracy when viewed from the firing line (100m distance).

*Your task:* Specify the mounting hole tolerance to achieve this requirement.

**Given:**
- Mounting plate thickness: 6mm steel
- Distance to firing line: 100m
- Allowable angular error: ±1 mrad (≈ ±0.057°)
- Indicator mounted via 2 holes, spaced 50mm apart

**Scaffold (fill in blanks):**
```
Step 1: Convert angular error to linear
  At mounting hole spacing: 1 mrad × ___ mm = ___ mm linear

Step 2: Allocate error budget
  Total budget: ___ mm
  Allocation:
    - Hole position tolerance: ___% = ___ mm
    - Pin/hole clearance: ___% = ___ mm
    - Plate flatness: ___% = ___ mm

Step 3: Specify tolerance
  Hole position callout: ⌀___ @ MMC | A
  Hole diameter: ___ +0.025/-0 mm
```

**Model Answer:**
```
Step 1: At 50mm spacing, 1 mrad = 0.050 mm linear error allowed

Step 2: Allocation (typical 60-20-20)
  - Hole position: 60% = 0.030 mm
  - Pin clearance: 20% = 0.010 mm
  - Flatness: 20% = 0.010 mm

Step 3: Specification
  - Hole position: ⌀0.030 @ MMC | A
  - Hole diameter: 6.000 +0.025/-0 (for M6 dowel pin)
  - Flatness: ⊏ 0.010 | A

This ensures worst-case stack-up remains within 1 mrad requirement.
```

---

**Problem 2: V-SMASH Trigger Reset Spring**

*Scenario:* The trigger reset spring must provide 8-12 N force at installed length.

*Your task:* Specify spring wire diameter tolerance to meet force requirement.

**Given:**
- Spring type: Compression
- Mean coil diameter: 10mm
- Active coils: 8
- Installed length: 15mm
- Free length: 25mm
- Wire material: Music wire (G = 80 GPa)

**Spring force formula:** F = (G × d⁴ × δ) / (8 × D³ × n)
- d = wire diameter
- δ = deflection (25-15 = 10mm)
- D = mean coil diameter (10mm)
- n = active coils (8)

**Your task:** What wire diameter tolerance achieves 8-12 N force range?

**Model Answer:**
```
Rearranging formula to solve for d:
d = ⁴√[(8 × D³ × n × F) / (G × δ)]

For F = 8 N (minimum):
d_min = ⁴√[(8 × 10³ × 8 × 8) / (80,000 × 10)]
d_min = ⁴√[51,200 / 800,000] = ⁴√0.064 = 0.503 mm

For F = 12 N (maximum):
d_max = ⁴√[(8 × 10³ × 8 × 12) / (80,000 × 10)]
d_max = ⁴√[76,800 / 800,000] = ⁴√0.096 = 0.557 mm

Specification: Wire diameter 0.53 ± 0.03 mm

Note: Force varies with d⁴, so small diameter changes 
cause large force changes. This is a critical dimension.
```

---

**Problem 3: Training Grenade Fuse Delay**

*Scenario:* The training grenade fuse must delay 4.0-4.5 seconds.

*Your task:* Given the delay element burns at 3.0 ± 0.2 mm/s, specify the delay column length tolerance.

**Model Answer:**
```
Delay time = Length / Burn rate

For 4.0 s minimum with 3.2 mm/s burn rate (fast extreme):
Length_min = 4.0 × 3.2 = 12.8 mm

For 4.5 s maximum with 2.8 mm/s burn rate (slow extreme):
Length_max = 4.5 × 2.8 = 12.6 mm

PROBLEM: Length_min > Length_max (impossible!)

This reveals the burn rate tolerance (±0.2 mm/s = ±6.7%) 
is too large for the delay tolerance (4.25 ± 0.25 s = ±5.9%).

Solutions:
1. Tighten burn rate tolerance to ±3%
2. Widen delay specification to ±10%
3. Specify length AND burn rate testing of each lot

Recommended: Specify delay column 12.75 ± 0.5 mm, 
with lot acceptance testing of 5 samples to verify 
4.0-4.5 s delay. This is FUNCTIONAL testing, not just 
dimensional.
```

---

#### Drill Set 2: BOM Accuracy (Common in Production Handoff)

**Weak Area Pattern:** BOMs missing items, wrong quantities, or mismatched part numbers

**Drill Type:** Pattern Recognition (20 minutes)

---

**Problem:** Find 5 errors in this BOM excerpt for a UAV Catapult launch rail.

| Item | Part Number | Description | Qty | Material | Source |
|------|------------|-------------|-----|----------|--------|
| 1 | UC-001-101 | Rail extrusion | 2 | 6061-T6 | Make |
| 2 | UC-001-102 | End bracket | 2 | A36 Steel | Make |
| 3 | UC-001-103 | Roller assembly | 8 | - | Sub-assy |
| 4 | AN960-C10 | Washer, flat | 16 | Steel | Buy |
| 5 | MS35338-45 | Screw, machine | 32 | Alloy steel | Buy |
| 6 | UC-001-104 | Cable guide | 3 | Nylon 6/6 | Make |
| 7 | - | Loctite 242 | AR | - | Buy |

**Model Answer (5 errors):**

1. **Item 3 Material:** Sub-assembly should still list primary material (e.g., "Steel/Nylon") or reference sub-BOM
2. **Item 4 Quantity:** 16 washers for 32 screws is likely wrong - should be 32 or 64
3. **Item 6 Quantity:** "3" cable guides for 2 rails is odd - check if should be 4 (2 per rail)
4. **Item 7 Part Number:** Missing - should have company stock number
5. **Item 7 Quantity:** "AR" (As Required) is not acceptable for production - specify approximate quantity (e.g., "0.5 mL per assy")

**Additional issues (bonus):**
- Item 2 material "A36 Steel" - should specify if hot-rolled or cold-rolled
- No revision levels shown for make parts
- Missing units for quantities (EA, ML, M, etc.)

---

#### Drill Set 3: Drawing Interpretation Speed (For Experienced Engineers)

**Weak Area Pattern:** Correct interpretation but too slow for production support

**Drill Type:** Timed Repetition (15 minutes for 5 drawings)

**Target Time:** 3 minutes per drawing to extract key manufacturing info

**[Provide 5 drawing excerpts - engineer must identify in 3 min each:]**
1. Critical dimensions (which affect fit/function)
2. Tightest tolerance (cost driver)
3. Required operations (milling, turning, grinding, etc.)
4. Surface finish requirements
5. Material and heat treatment

---

### Spaced Repetition Schedule for Drills

| Drill | Initial | Week 1 | Week 2 | Week 4 | Week 8 |
|-------|---------|--------|--------|--------|--------|
| Tolerance Spec | 30 min | 10 min | 5 min | 3 min | Verify |
| BOM Accuracy | 20 min | 10 min | 5 min | 3 min | Verify |
| Drawing Speed | 15 min | 10 min | 10 min | 10 min | 10 min |

---

## Skill 6: Mnemonic Creator (engineering-mnemonic-creator)

### Detail Design Mnemonics

---

#### MNEMONIC 1: Detail Design Steps

**🎯 Target Concept:** 5 steps of Detail Design per Figure 7.164

**🧠 Primary Mnemonic:**  
**Type:** Acronym (Vietnamese)  
**Mnemonic:** **"FINTECH"** = **F**inal, **IN**tegrate, **T**echnical docs, **E**xamine, **CH**uẩn y (approve)

**📖 Component Breakdown:**
- **F**inal = Finalize definitive layout (hoàn thiện bố trí)
- **IN**tegrate = Integrate into overall drawings (tích hợp bản vẽ)
- **T**echnical docs = Complete production documents (tài liệu sản xuất)
- **E**xamine = Check all documents (kiểm tra tài liệu)
- **CH**uẩn y = Documentation approval (phê duyệt)

**💡 Memory Reinforcement:**  
Think of FINTECH (financial technology) - just as fintech finalizes financial transactions, Detail Design finalizes your product for "transaction" to production.

**✅ Quick Recall Test:**
1. What does "IN" stand for in FINTECH?
2. What is checked during the "E" step?

**🔗 Application Context:**  
Use FINTECH checklist when reviewing Detail Design completeness before production release.

---

#### MNEMONIC 2: Drawing Documentation Types

**🎯 Target Concept:** 7 document types in Detail Design package

**🧠 Primary Mnemonic:**  
**Type:** Rhyme (Vietnamese)  
**Mnemonic:**
```
Bản vẽ chi tiết (CAD) đầu tiên,
Lắp ráp, bảng kê tiếp liền,
Hướng dẫn lắp, vận chuyển, kiểm,
Sổ tay vận hành - tài liệu yêu!
```

**📖 Component Breakdown:**
1. Bản vẽ chi tiết = Component drawings
2. Lắp ráp = Assembly drawings
3. Bảng kê = Parts lists (BOM)
4. Hướng dẫn lắp = Assembly instructions
5. Vận chuyển = Transport documentation
6. Kiểm = Quality control measures
7. Sổ tay = Operating/maintenance manuals

**💡 Memory Reinforcement:**  
Visualize a production line: First you see drawings (chi tiết), then assembly (lắp ráp), then the parts in boxes (bảng kê), then workers reading instructions, forklifts moving items, inspectors checking, and finally operators reading manuals.

**✅ Quick Recall Test:**
1. Recite the rhyme from memory
2. What are the 7 document types?

---

#### MNEMONIC 3: Tolerance Stack-Up Factors

**🎯 Target Concept:** Sources of variation in tolerance stack-up

**🧠 Primary Mnemonic:**  
**Type:** Story  
**Mnemonic:** "**M**r. **T**olerance **S**tacked **F**ive **C**rates **A**t **T**he **W**arehouse"

**📖 Component Breakdown:**
- **M**aterial variation (vật liệu)
- **T**hermal expansion (giãn nở nhiệt)
- **S**urface finish (bề mặt)
- **F**orm error (sai số hình dạng)
- **C**learance fit (khe hở lắp ghép)
- **A**ssembly method (phương pháp lắp)
- **T**ool wear (mòn dao)
- **W**orkholding deflection (biến dạng đồ gá)

**💡 Memory Reinforcement:**  
Picture Mr. Tolerance (a factory worker) carefully stacking 5 crates at a warehouse. Each crate represents a source of variation that "stacks up" in the final assembly.

**✅ Quick Recall Test:**
1. What does the "T" in the story represent?
2. Name all 8 tolerance stack-up factors

**🔗 Application Context:**  
Use when analyzing why assemblies don't fit - check each factor systematically.

---

#### MNEMONIC 4: MIL-STD Drawing Standards

**🎯 Target Concept:** Key MIL-STD standards for defense drawings

**🧠 Primary Mnemonic:**  
**Type:** Chunking + Visual  
**Mnemonic:** "**100-129-1916-31000** = Drawing → Dimension → Thread → Data"

**📖 Component Breakdown:**
```
DRAWING FORMAT:
  MIL-STD-100: Engineering Drawing Practices
  MIL-STD-129: Military Marking

DIMENSIONS:
  MIL-STD-1916: DoD Preferred Methods

DATA MANAGEMENT:
  MIL-STD-31000: Technical Data Packages
```

**💡 Memory Reinforcement:**  
Think of a document journey: First you CREATE (100), then you MARK (129), then you DIMENSION (1916), then you PACKAGE (31000). Numbers roughly double each step.

**✅ Quick Recall Test:**
1. Which MIL-STD covers Technical Data Packages?
2. Which MIL-STD covers military marking?

---

#### MNEMONIC 5: Surface Finish Parameters

**🎯 Target Concept:** Ra, Rz, Rq meaning and relationship

**🧠 Primary Mnemonic:**  
**Type:** Visual metaphor  
**Mnemonic:** Think of ocean waves:

```
Ra = Average wave height (arithmetic mean)
Rz = Distance from deepest valley to highest peak
Rq = "RMS" wave energy (root mean square)

Relationship: Rz ≈ 4-6 × Ra (typically)
             Rq ≈ 1.1-1.3 × Ra (typically)
```

**💡 Memory Reinforcement:**  
Imagine measuring waves:
- Ra = Average swimmer's head above water (middle ground)
- Rz = Distance from seabed to wave crest (extreme)
- Rq = Energy the surfer feels (weighted average)

**✅ Quick Recall Test:**
1. If Ra = 1.6 μm, estimate Rz
2. Which parameter is most commonly specified?

**🔗 Application Context:**  
Use Ra for general machined surfaces. Use Rz when maximum peak-to-valley matters (sealing surfaces). Use Rq for precision optics.

---

### Review Schedule for Mnemonics

| Mnemonic | Now | Day 1 | Day 3 | Day 7 |
|----------|-----|-------|-------|-------|
| FINTECH | 2× | Quiz | Apply | Teach |
| 7 Documents Rhyme | 3× | Recite | Apply | Teach |
| Mr. Tolerance | 2× | Story | Apply | Teach |
| MIL-STD Numbers | 2× | Quiz | Look up | Teach |
| Surface Finish | 2× | Quiz | Calculate | Teach |

---

## Skill 7: Learning Journal Keeper (engineering-learning-journal-keeper)

### Detail Design Session Reflection Template

---

#### Session Reflection (15 min after work)

```markdown
## SESSION: Detail Design - [System Name]
**Date:** ____-__-__
**Duration:** __ min (_ Pomodoro blocks)
**Phase Focus:** □ Dimensioning □ Tolerancing □ Documentation □ Review

### What I Worked On
[Describe specific task - e.g., "Completed tolerance stack-up for V-SMASH fire block"]

### What Went Well ✓
- [Specific observation - e.g., "GD&T symbols came naturally after yesterday's drill"]
- [Condition that helped - e.g., "Morning session, fresh mind"]

### What Was Hard ✗
- [Specific challenge - e.g., "Struggled with datum selection for asymmetric part"]
- [What caused difficulty - e.g., "No clear functional surfaces to use as primary datum"]

### Misconception Discovered
**BEFORE:** [What I thought]
**AFTER:** [What I now understand]
**IMPACT:** [How this affected my work]

Example:
**BEFORE:** "Tighter tolerances always mean better quality"
**AFTER:** "Tight tolerances that don't affect function only add cost"
**IMPACT:** Wasted 30 min specifying ±0.01 on non-critical dimension; revised to ±0.1

### Aha Moment 💡
[Breakthrough realization]
Example: "I finally see why tolerance stack-up must start from functional requirements, 
not from what machines can achieve. Function FIRST, then allocate to achievable tolerances."

### What Would I Change?
[Actionable adjustment for next session]
Example: "Next time, start with FUNCTION → REQUIREMENT → TOLERANCE, not the reverse"
```

---

#### Daily Consolidation (10 min end of day)

```markdown
## DAILY SUMMARY: [Date]

**Total Work:** _ hours (_ sessions)
**Detail Design Progress:** _% complete

### Concepts Applied Today
- [Concept 1 - e.g., "GD&T position tolerance"]
- [Concept 2 - e.g., "Material specification per MIL"]

### Misconceptions Discovered: [Count]
1. [Brief title - e.g., "Datum selection"]
2. [Brief title]

### Artifacts Created
- [Drawing/document name and status]
- [e.g., "VSMASH-2301 Rev B - 80% complete"]

### Focus Quality: [High/Medium/Low]
[What helped or hurt focus]

### Confusion Flags ⚠️
[What needs clarification tomorrow]
Example: "Still unclear on when to use MMC vs RFS for position tolerance"

### Tomorrow's Focus
1. [Top priority]
2. [Second priority]
```

---

#### Weekly Analysis (30 min end of week)

```markdown
## WEEK [N] ANALYSIS: Detail Design Phase

### Week Overview
- Total hours: [X]
- Sessions: [Y] across [Z] days
- Artifacts created: [List]
- Reviews completed: [Count]

### Misconceptions Inventory
| # | Misconception | Impact | Status |
|---|---------------|--------|--------|
| 1 | [Title] | CRITICAL/HIGH/MEDIUM/LOW | Fixed/Open |
| 2 | [Title] | CRITICAL/HIGH/MEDIUM/LOW | Fixed/Open |

### Learning Velocity
- Concepts mastered this week: [X]
- Spaced rep performance: [Y]% recall
- Application success: Can apply [with/without] guidance

### Weak Areas Identified
1. **[Area]** - Current: [status]
   - Action: [What to do]
   - Risk: [If not addressed]

### Breakthrough Moments 💡
- [Quote the insight and why it matters]

### Context Effects
- Best learning time: [When]
- Focus enhancers: [What helps]
- Focus killers: [What hurts]

### Learning Strategy Evaluation
✓ What worked: [Strategy with example]
✗ What needs adjustment: [What to change]

### Next Week Focus
1. [Priority 1]
2. [Priority 2]
3. [Maintain: what's working]

### Meta-Reflection
- Velocity: [Accelerating/Stable/Declining]
- Metacognition: [Catching mistakes earlier?]
- Confidence: [Growing/Stable]

**OVERALL WEEK [N] ASSESSMENT: [ON TRACK ✓ / NEEDS ADJUSTMENT ⚠]**
```

---

### Example Completed Journal Entry

```markdown
## SESSION: Detail Design - V-SMASH Fire Block
**Date:** 2025-01-20
**Duration:** 100 min (2 Pomodoro blocks)
**Phase Focus:** ☑ Tolerancing

### What I Worked On
Completed tolerance stack-up analysis for fire block solenoid-to-sear interface

### What Went Well ✓
- Statistical tolerance method (RSS) worked correctly on first try
- Defense calculator spreadsheet saved 30 min vs manual calculation

### What Was Hard ✗
- Determining which dimensions are "contributors" vs "resultant"
- Thermal expansion factor - forgot to include initially

### Misconception Discovered
**BEFORE:** "Stack-up only includes drawing tolerances"
**AFTER:** "Stack-up must include ALL variation sources: thermal, assembly, wear"
**IMPACT:** Initial analysis showed 0.03mm margin; after adding thermal (0.02mm), 
margin reduced to 0.01mm - much tighter than expected!

### Aha Moment 💡
"Thermal expansion is why military specs often require testing at temperature extremes.
The 'worst case' isn't just dimensional - it's dimensional AT temperature!"

### What Would I Change?
Create a checklist of ALL stack-up contributors before starting analysis.
Add to standard template: Material, Thermal, Form, Fit, Assembly, Tool, Wear.
```

