# Pahl & Beitz Section 7.5.12: Design for Minimum Risk
## Part 2: Design Review, Systems Mapping, Targeted Drills, and Evaluation

---

# PART 3: DESIGN REVIEW CRITERIA
## Skill: engineering-design-review-mentor

### 3.1 Review Framework for Minimum Risk Design

When reviewing a design for minimum risk compliance, evaluate across these 8 criteria:

### Criterion 1: Uncertainty Identification (Nhận diện độ không chắc chắn)
**Weight:** 15% | **Phase:** Task Clarification / Early Embodiment

| Score | Indicator |
|-------|-----------|
| 0 | No uncertainties documented |
| 1 | Vague statements about "some risk" |
| 2 | Major uncertainties listed without quantification |
| 3 | Major uncertainties quantified (probability, impact) |
| 4 | Comprehensive uncertainty register with risk matrix |

**Review Questions:**
- Is there a formal risk/uncertainty register?
- Are technical AND economic uncertainties identified?
- Is each uncertainty quantified (probability × impact)?
- Are uncertainties traced to specific design areas?

---

### Criterion 2: Dual-Risk Balance (Cân bằng rủi ro kép)
**Weight:** 15% | **Phase:** Conceptual / Early Embodiment

| Score | Indicator |
|-------|-----------|
| 0 | Only technical risk considered |
| 1 | Economic risk mentioned but not analyzed |
| 2 | Both risks analyzed separately |
| 3 | Trade-off between risks documented |
| 4 | Optimized balance with clear rationale |

**Review Questions:**
- Is the selected solution the cheapest that meets requirements?
- Is over-engineering explicitly avoided with justification?
- Is economic risk (cost, schedule, competitiveness) documented?
- Is the balance justified based on project priorities?

---

### Criterion 3: Solution Variant Preservation (Bảo tồn biến thể giải pháp)
**Weight:** 20% | **Phase:** Conceptual / Embodiment

| Score | Indicator |
|-------|-----------|
| 0 | Only one solution developed, alternatives discarded |
| 1 | Alternatives mentioned but not preserved |
| 2 | Alternative documentation exists but outdated |
| 3 | Second solution developed to prototype readiness |
| 4 | Second and third solutions ready with deployment plans |

**Review Questions:**
- Are conceptual phase alternatives preserved in design documentation?
- Is there a backup solution for each critical uncertainty area?
- What is the development status of backup solutions (%, timeline)?
- Are backup solutions traceable to specific uncertainties?

---

### Criterion 4: Provision Engineering (Kỹ thuật điều khoản dự phòng)
**Weight:** 20% | **Phase:** Embodiment / Detail

| Score | Indicator |
|-------|-----------|
| 0 | Primary solution designed with no provisions for alternatives |
| 1 | Some provisions exist but undocumented |
| 2 | Interface provisions documented |
| 3 | Interface + space + structural provisions |
| 4 | Comprehensive provisions including adjustment mechanisms |

**Provision Types to Check:**
- [ ] Interface: Connectors, mounting patterns, fluid connections
- [ ] Space: Volume reservations, routing paths, clearances
- [ ] Structural: Attachment points, reinforcement options
- [ ] Adjustment: Variable spacing, tunable parameters

**Review Questions:**
- Can the backup solution be deployed without modifying surrounding components?
- Is space reserved for backup components?
- Are structural attachment points provided?
- Are there adjustment mechanisms for uncertain parameters?

---

### Criterion 5: Backup Solution Readiness (Sẵn sàng giải pháp dự phòng)
**Weight:** 15% | **Phase:** Embodiment / Detail

| Score | Indicator |
|-------|-----------|
| 0 | No backup solution defined |
| 1 | Backup concept exists, no development |
| 2 | Backup partially developed (20-50%) |
| 3 | Backup substantially ready (60-80%) |
| 4 | Backup fully qualified and deployment-ready |

**Readiness Checklist:**
- [ ] Technical specifications complete
- [ ] Supplier/source identified with lead times
- [ ] Integration analysis completed
- [ ] Switching procedure documented
- [ ] Verification/test plan ready

---

### Criterion 6: Decision Criteria Definition (Định nghĩa tiêu chí quyết định)
**Weight:** 10% | **Phase:** Embodiment / Detail

| Score | Indicator |
|-------|-----------|
| 0 | No criteria for when to switch to backup |
| 1 | Vague criteria ("if it doesn't work") |
| 2 | Qualitative criteria defined |
| 3 | Quantitative thresholds established |
| 4 | Thresholds + measurement methods + decision authority |

**Review Questions:**
- What specific metrics trigger switching to backup?
- Who has authority to make the switch decision?
- What is the measurement/test procedure?
- What is the decision timeline?

---

### Criterion 7: Step-by-Step Modification Path (Lộ trình sửa đổi từng bước)
**Weight:** 5% | **Phase:** Detail

| Score | Indicator |
|-------|-----------|
| 0 | No modification path defined |
| 1 | Single-step modification (binary switch) |
| 2 | Two-step modification path |
| 3 | Three or more incremental steps defined |
| 4 | Incremental path with cost/time estimates per step |

**Review Questions:**
- Are intermediate solutions available before full backup deployment?
- Is each step's cost and time estimated?
- Does each step provide useful information?

---

### Criterion 8: Follow-Up System (Hệ thống theo dõi)
**Weight:** 10% | **Phase:** Detail / Production

| Score | Indicator |
|-------|-----------|
| 0 | No follow-up system planned |
| 1 | Ad-hoc feedback collection |
| 2 | Formal field reporting system |
| 3 | Systematic data collection + analysis |
| 4 | Closed-loop learning with design updates |

**Review Questions:**
- How will field performance data be collected?
- Who analyzes the data and makes recommendations?
- How are lessons learned fed back to design?
- Is there a trigger for updating backup priority?

---

### 3.2 Example Review: V-SMASH Fire Block Mechanism

**Design Under Review:** V-SMASH trigger gating system using solenoid actuator

| Criterion | Score | Evidence | Gap |
|-----------|-------|----------|-----|
| Uncertainty identification | 3 | Risk register exists, quantified timing uncertainty | Add temperature effects |
| Dual-risk balance | 3 | Solenoid chosen over piezo with cost justification | Document schedule risk |
| Solution variant preservation | 4 | Piezo backup developed to 80% | None |
| Provision engineering | 3 | Same mounting, connector standard | Add power headroom analysis |
| Backup readiness | 3 | Piezo qualified, supplier ready, 6-week lead | Document test procedure |
| Decision criteria | 2 | "<5ms timing" threshold | Add test protocol |
| Step-by-step path | 2 | Software tuning → Solenoid upgrade → Piezo swap | Add cost estimates |
| Follow-up system | 2 | Field reporting planned | Define analysis process |

**Overall Score:** 22/32 = 69% (PROFICIENT)

**Priority Improvements:**
1. ❌ **Critical:** Add test protocol to decision criteria (currently subjective)
2. ⚠️ **Major:** Document step-by-step modification costs
3. ℹ️ **Minor:** Expand risk register for temperature effects

---

### 3.3 Design Review Checklist: Minimum Risk Compliance

**Use this checklist during Embodiment Design reviews:**

**UNCERTAINTY ANALYSIS**
- [ ] All technical uncertainties documented with probability/impact
- [ ] Economic uncertainties (cost, market, schedule) analyzed
- [ ] Uncertainties traced to specific subsystems/components
- [ ] Uncertainty register maintained and current

**SOLUTION STRATEGY**
- [ ] Cheapest adequate solution selected (not over-engineered)
- [ ] Technical/economic risk balance explicitly justified
- [ ] Alternative solutions preserved from conceptual phase
- [ ] Backup solutions developed for critical uncertainty areas

**PROVISIONS**
- [ ] Interface provisions: backup uses same connectors/mounting
- [ ] Space provisions: volume reserved for backup components
- [ ] Structural provisions: attachment points for alternatives
- [ ] Adjustment provisions: tunable parameters where uncertain

**READINESS**
- [ ] Backup solution specifications complete
- [ ] Supplier identified with known lead time
- [ ] Integration impact analyzed
- [ ] Switching procedure documented
- [ ] Verification method ready

**DECISION SYSTEM**
- [ ] Quantitative switch criteria defined
- [ ] Measurement method specified
- [ ] Decision authority assigned
- [ ] Timeline for decision established

**FOLLOW-UP**
- [ ] Field data collection planned
- [ ] Analysis responsibility assigned
- [ ] Feedback loop to design defined

---

# PART 4: SYSTEMS MAPPING
## Skill: engineering-systems-mapper

### 4.1 System Boundary Definition

**Design for Minimum Risk system boundary:**

**INSIDE THE SYSTEM:**
- Primary solution design
- Backup solution development
- Provision engineering
- Decision criteria definition
- Follow-up data collection

**OUTSIDE THE SYSTEM (Given):**
- Market conditions
- Customer requirements
- Regulatory constraints
- Manufacturing capability

**KEY INTERFACES:**
- Requirements List → Uncertainty identification
- Conceptual alternatives → Backup solutions
- Field performance → Decision triggers
- Lessons learned → Next project

### 4.2 Stock-Flow Diagram

```
                          ┌─────────────────────────────────────────────┐
                          │         DESIGN FOR MINIMUM RISK             │
                          │                 SYSTEM                       │
                          └─────────────────────────────────────────────┘

STOCKS (Accumulations):

┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ UNCERTAINTY      │       │ BACKUP           │       │ DESIGN           │
│ INVENTORY        │       │ READINESS        │       │ FLEXIBILITY      │
│                  │       │                  │       │                  │
│ Current: High    │       │ Current: 70%     │       │ Current: Medium  │
│ Target: Known    │       │ Target: 95%      │       │ Target: High     │
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         │                          │                          │
FLOWS:   ▼                          ▼                          ▼

IN: Risk identification      IN: Development effort      IN: Provision engineering
    (+3 risks/review)            (+10%/week)                 (+1 provision/iteration)

OUT: Risk resolution         OUT: Obsolescence           OUT: Design lockdown
     (-1 risk/test)              (-5%/year)                  (-1 option/decision)


┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│ FIELD            │       │ ECONOMIC         │       │ TECHNICAL        │
│ EXPERIENCE       │       │ MARGIN           │       │ CONFIDENCE       │
│                  │       │                  │       │                  │
│ Current: Low     │       │ Current: 15%     │       │ Current: 80%     │
│ Target: Rich     │       │ Target: >10%     │       │ Target: >95%     │
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         ▼                          ▼                          ▼

IN: Test data, field reports  IN: Cost savings from       IN: Testing, analysis
    (+data/test)                  cheap solution              (+5%/test)
                                  (+$/cheaper choice)

OUT: Knowledge decay          OUT: Backup development     OUT: Failures, surprises
     (-data/year)                 cost (-$/backup)            (-10%/failure)
```

### 4.3 Causal Loop Diagram (CLD)

```
                     ┌─────────────────────────────────────────────────────────────┐
                     │                                                             │
                     │    R1: CONFIDENCE BUILDING LOOP (Reinforcing)               │
                     │    "Test-Learn-Improve"                                     │
                     │                                                             │
    ┌────────────────┼──────────────────┐                                          │
    │                │                  │                                          │
    ▼                │                  │                                          │
┌───────────┐  +     │        ┌─────────┴───────┐  +     ┌──────────────┐         │
│ Select    │───────►│        │ Testing &      │───────►│ Technical    │         │
│ cheaper   │        │        │ Field data     │        │ confidence   │         │
│ solution  │        │        └────────────────┘        │ increases    │─────────┘
└─────┬─────┘        │                                  └──────┬───────┘
      │              │                                         │
      │              │                                         │ +
      │ +            │                                         ▼
      │              │                                  ┌──────────────┐
      ▼              │                          ┌──────│ Design       │
┌───────────┐        │                          │      │ optimized    │
│ Economic  │        │                          │      └──────────────┘
│ margin    │        │                          │
│ increases │────────┘                          │
└─────┬─────┘                                   │
      │                                         │
      │ +                                       │
      ▼                                         │
┌───────────────────────────────────────────────┴─────────────────────────────────┐
│                                                                                  │
│    B1: BACKUP READINESS LOOP (Balancing)                                        │
│    "Prepare for the Worst"                                                       │
│                                                                                  │
│  ┌────────────┐  -      ┌────────────┐  +      ┌────────────┐  -   ┌──────────┐│
│  │ Technical  │────────►│ Backup     │────────►│ Backup     │─────►│ Deploy   ││
│  │ uncertainty│         │ development│         │ readiness  │      │ backup if││
│  │ (GAP)      │         │ effort     │         │            │      │ needed   ││
│  └─────┬──────┘         └────────────┘         └────────────┘      └────┬─────┘│
│        │                                                                 │      │
│        │                                                                 │ -    │
│        │                                       ┌─────────────────────────┘      │
│        │                                       ▼                                │
│        │                               ┌──────────────┐                         │
│        └───────────────────────────────│ Technical    │                         │
│                        +               │ risk level   │                         │
│                                        └──────────────┘                         │
└─────────────────────────────────────────────────────────────────────────────────┘

                     ┌─────────────────────────────────────────────────────────────┐
                     │                                                             │
                     │    B2: OVER-ENGINEERING CONSTRAINT LOOP (Balancing)        │
                     │    "Stay Competitive"                                       │
                     │                                                             │
    ┌────────────────┴───────────────────────────────────────────────────────┐    │
    │                                                                         │    │
    │  ┌────────────┐  +      ┌────────────┐  -      ┌────────────┐         │    │
    │  │ Technical  │────────►│ Temptation │────────►│ Economic   │◄────────┘    │
    │  │ risk       │         │ to over-   │         │ competit-  │              │
    │  │ awareness  │         │ engineer   │         │ iveness    │              │
    │  └────────────┘         └──────┬─────┘         └──────┬─────┘              │
    │                                │                      │                     │
    │                                │ + (if yielded to)    │ - (feedback)       │
    │                                ▼                      │                     │
    │                         ┌────────────┐                │                     │
    │                         │ Higher     │────────────────┘                     │
    │                         │ costs      │                                      │
    │                         └────────────┘                                      │
    └─────────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Loop Analysis

**R1: Confidence Building Loop (Reinforcing - Virtuous)**
- Selecting cheaper solution → More economic margin → Can afford more testing → More field data → Higher technical confidence → Better optimization → Can select even more targeted solutions
- **Leverage:** Accelerate this loop by investing savings in testing rather than profits

**B1: Backup Readiness Loop (Balancing - Protective)**
- Technical uncertainty (gap from target) → More backup development effort → Higher backup readiness → If needed, deploy backup → Reduces technical risk level → Reduces uncertainty gap
- **Leverage:** Ensure backup development stays ahead of potential failure discovery

**B2: Over-Engineering Constraint Loop (Balancing - Disciplinary)**
- Technical risk awareness → Temptation to over-engineer → If yielded to, higher costs → Lower competitiveness → Market pressure → Constrain over-engineering impulse
- **Leverage:** Use market feedback to resist over-engineering; quantify economic risk

### 4.5 Leverage Point Analysis (Donella Meadows Framework)

| Level | Leverage Point | Application to Minimum Risk | Impact | Feasibility |
|-------|---------------|----------------------------|--------|-------------|
| **L3** | Goals | "Goal is not zero technical risk but optimal risk balance" | Very High | Medium (cultural change needed) |
| **L4** | Self-organization | "Design team empowered to define backup without approval" | High | Medium |
| **L5** | System rules | "No embodiment approval without documented backup for critical areas" | High | High |
| **L6** | Information flows | "Real-time field data visible to design team" | High | High |
| **L7** | Feedback loops | "Weekly risk/backup review meetings" | Medium | High |
| **L9** | Delays | "Reduce backup development lead time" | Medium | Medium |
| **L12** | Parameters | "Adjust safety factors" | Low | High |

**Recommended Priority:**
1. **L6 (Information flows):** Establish real-time visibility of field performance data to design team
2. **L5 (Rules):** Institute "no embodiment without backup" policy
3. **L3 (Goals):** Educate leadership that zero risk is the wrong goal

### 4.6 Defense System Integration Risks

**Cross-System Dependencies for Minimum Risk:**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        SUPPLY CHAIN RISK PROPAGATION                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  V-SMASH Sensor ──────► RCWS Sensor ──────► Target Drone Sensor                │
│        │                     │                     │                            │
│        ▼                     ▼                     ▼                            │
│  Same backup supplier ═══════════════════════════════════════════              │
│        │                                                                        │
│        ▼                                                                        │
│  If Sony supply disrupted, ALL THREE systems lose backup option                │
│                                                                                 │
│  MITIGATION: Qualify second backup supplier across systems                     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│                        TECHNOLOGY RISK CORRELATION                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  AI Processing (V-SMASH) ──┬── Jetson platform uncertainty                     │
│                            │                                                    │
│  AI Processing (Simulator)─┤── Same platform, same risk                        │
│                            │                                                    │
│  AI Processing (LOMAH) ────┘── Correlated failure mode                         │
│                                                                                 │
│  MITIGATION: Qualify alternative platform (e.g., Intel NCS2)                   │
│              across ALL AI-enabled systems                                      │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 5: TARGETED DRILLS
## Skill: engineering-targeted-drill-master

### 5.1 Drill Set 1: Uncertainty Identification
**Weak Area:** Failing to identify economic risks alongside technical risks
**Duration:** 30 min | **Difficulty:** ⭐⭐

**Problem 1:**
You're designing a naval towed target. List the technical uncertainties. Now list the economic uncertainties. Rate each on 1-5 scale for probability and impact.

**Expected Answer Structure:**
| Category | Uncertainty | P | I | P×I | Mitigation |
|----------|-------------|---|---|-----|------------|
| Technical | Tow cable flutter | 3 | 4 | 12 | Design provision for stabilizer |
| Technical | RCS consistency | 2 | 3 | 6 | Qualification testing |
| Economic | Exchange rate on imported reflectors | 4 | 3 | 12 | Dual supplier strategy |
| Economic | Customer budget cut | 2 | 5 | 10 | Modular design for descoping |

**Feedback Focus:** Did you identify BOTH categories? Did you quantify?

---

**Problem 2:**
A teammate says "We've done thorough FEA analysis, so there's no structural risk." Challenge this statement using minimum risk principles.

**Expected Answer:**
FEA analysis has limitations: material properties may vary, boundary conditions may not match reality, fatigue behavior is uncertain. "No risk" is overconfident. Better framing: "FEA reduces structural uncertainty to acceptable level, but we've preserved the option to add reinforcement gussets if field testing reveals stress concentrations."

---

**Problem 3:**
For the V-SMASH project, rank these uncertainties by total risk (P×I):
- A: AI detection accuracy in fog
- B: Solenoid timing in extreme cold (-30°C)
- C: Import license approval delay
- D: Competitor product launch

Assign P (1-5) and I (1-5) to each and calculate P×I.

**Model Answer:**
| Uncertainty | P | I | P×I | Rationale |
|-------------|---|---|-----|-----------|
| A: AI in fog | 4 | 3 | 12 | Likely issue, degraded performance acceptable |
| B: Cold timing | 2 | 4 | 8 | Unlikely (Vietnam climate), serious if occurs |
| C: Import delay | 3 | 5 | 15 | Moderate likelihood, stops production |
| D: Competitor | 3 | 4 | 12 | Market risk, impacts sales volume |

Priority: C > A = D > B

---

### 5.2 Drill Set 2: Dual-Risk Balance
**Weak Area:** Always choosing "safest" technical option
**Duration:** 35 min | **Difficulty:** ⭐⭐⭐

**Problem 1:**
Training grenade casing material selection:

| Option | Technical Risk | Cost | Schedule |
|--------|---------------|------|----------|
| A: Imported mil-spec polymer | Low | $8/unit | 12-week lead |
| B: Domestic industrial polymer | Medium | $2/unit | 2-week lead |
| C: Domestic recycled polymer | High | $1/unit | 1-week lead |

Which represents minimum risk design? Justify using dual-risk balance.

**Expected Answer:**
Option B is minimum risk. Option A has low technical risk but high economic/schedule risk (expensive, long lead time). Option C is too risky technically for safety equipment. Option B balances: acceptable technical risk (can be tested extensively), good economic margin ($6/unit savings), fast schedule allows iteration.

The minimum risk approach: Select B, but design the grenade to accept Option A material if testing reveals problems with B.

---

**Problem 2:**
Your manager says "We can't afford to have the 12.7mm RCWS fail during acceptance trials. Use the premium gyros."

Counter this with minimum risk reasoning.

**Expected Answer:**
"I understand the concern about acceptance trials, but premium gyros create different risks: 2x cost may price us out of contract, 6-month lead time may miss delivery deadline. Minimum risk approach: Use standard gyros which meet specs on paper, but:
1. Design mount to accept premium gyros without modification
2. Order 2 premium gyros now as hedge (small cost)
3. Begin acceptance testing early with standard gyros
4. If data shows inadequacy, swap in premium gyros before formal trials

This way we learn actual performance, maintain cost competitiveness, and have backup ready."

---

**Problem 3:**
Calculate the dual-risk score for these UAV catapult options:

| Option | Technical Risk (1-10) | Economic Risk (1-10) |
|--------|----------------------|---------------------|
| Pneumatic (domestic) | 5 | 3 |
| Pneumatic (imported) | 3 | 6 |
| Electromagnetic | 2 | 9 |

Weight technical risk at 60%, economic risk at 40%. Which option minimizes total risk?

**Model Answer:**
| Option | Tech (60%) | Econ (40%) | Total |
|--------|------------|------------|-------|
| Pneumatic domestic | 5×0.6=3.0 | 3×0.4=1.2 | 4.2 |
| Pneumatic imported | 3×0.6=1.8 | 6×0.4=2.4 | 4.2 |
| Electromagnetic | 2×0.6=1.2 | 9×0.4=3.6 | 4.8 |

Pneumatic domestic and imported are tied. Minimum risk choice: **Pneumatic domestic** (equivalent score, but maintains technology independence and faster iteration).

---

### 5.3 Drill Set 3: Backup Solution Development
**Weak Area:** Not developing backups to readiness
**Duration:** 40 min | **Difficulty:** ⭐⭐⭐

**Problem 1:**
Define the "ready for immediate use" requirements for a backup sensor in the V-SMASH system. Use the 5-category framework.

**Expected Answer:**
| Category | Status Required |
|----------|-----------------|
| Technical specs | Complete datasheet, performance verified |
| Supplier | Quote obtained, 6-week lead time confirmed, payment terms known |
| Integration | Pin-for-pin compatible, firmware branch tested, no mechanical changes |
| Switching procedure | Step-by-step document: 1) Order sensor 2) Flash firmware 3) Update calibration 4) Test |
| Verification | Test protocol written, pass/fail criteria defined, equipment reserved |

---

**Problem 2:**
For the Target UAV propulsion backup (alternative engine), calculate the development effort to reach "ready" status:

Current status:
- Technical specs: 80% (missing thermal characterization)
- Supplier: 50% (identified, no quote)
- Integration: 30% (concept only)
- Switching: 0% (not documented)
- Verification: 20% (test concept)

Estimate hours to reach 100% in each category.

**Model Answer:**
| Category | Current | Gap | Hours Estimate |
|----------|---------|-----|----------------|
| Technical specs | 80% | 20% | 40 hrs (thermal testing + documentation) |
| Supplier | 50% | 50% | 16 hrs (RFQ + evaluation + negotiations) |
| Integration | 30% | 70% | 80 hrs (CAD fit-check, wiring design, fuel system mod) |
| Switching | 0% | 100% | 24 hrs (procedure writing + review) |
| Verification | 20% | 80% | 40 hrs (test protocol + equipment setup) |
| **TOTAL** | | | **200 hrs** |

At 20 hrs/week dedicated effort = 10 weeks to full readiness.

---

**Problem 3:**
Prioritize backup development across these systems given 100 hours of available effort:

| System | Uncertainty Impact | Current Backup Readiness | Effort to Complete |
|--------|-------------------|--------------------------|-------------------|
| V-SMASH sensor | High | 70% | 30 hrs |
| RCWS gyros | Medium | 40% | 60 hrs |
| UAV engine | High | 30% | 80 hrs |
| Catapult mechanism | Low | 50% | 25 hrs |

**Model Answer:**
Priority matrix (Impact × Gap):

| System | Impact Weight | Gap (100-Readiness) | Priority Score | Decision |
|--------|--------------|---------------------|----------------|----------|
| V-SMASH sensor | 3 | 30 | 90 | **Do first** (30 hrs, high impact) |
| RCWS gyros | 2 | 60 | 120 | Do second (60 hrs available) |
| UAV engine | 3 | 70 | 210 | **Highest priority but can't complete** |
| Catapult | 1 | 50 | 50 | Defer |

Allocation: V-SMASH (30 hrs) + RCWS (60 hrs) = 90 hrs
Remaining 10 hrs: Start UAV engine documentation

Note: UAV engine has highest priority score but insufficient budget. Escalate for additional resources.

---

### 5.4 Drill Set 4: Provision Engineering
**Weak Area:** Designing without provisions for alternatives
**Duration:** 35 min | **Difficulty:** ⭐⭐⭐⭐

**Problem 1:**
Design the provisions for the Small Arms Simulator recoil system:

Primary: Pneumatic recoil mechanism
Backup: Electric linear actuator

Draw (or describe) the mounting interface that accepts both.

**Expected Answer:**
```
MOUNTING INTERFACE SPECIFICATION:
┌────────────────────────────────────────┐
│         COMMON MOUNTING PLATE          │
├────────────────────────────────────────┤
│ • 4× M8 holes, 100mm square pattern   │
│ • Accepts pneumatic OR electric mount │
│                                        │
│ PNEUMATIC PATH:                        │
│ • 6mm air supply port (left side)     │
│ • Exhaust port (right side)           │
│ • Control valve mount (rear)          │
│                                        │
│ ELECTRIC PATH:                         │
│ • 24V power connector (left side)     │
│ • CAN bus control (right side)        │
│ • Driver board mount (rear)           │
│                                        │
│ SPACE RESERVATION:                     │
│ • 150mm stroke length (both systems)  │
│ • 80mm width clearance (electric)     │
│ • Cable routing channel               │
└────────────────────────────────────────┘
```

---

**Problem 2:**
The LOMAH system may need to upgrade from 3-microphone to 6-microphone array. What provisions are needed in the primary design?

**Expected Answer:**
| Provision Type | Requirement |
|----------------|-------------|
| **Interface** | Main board has 6 analog inputs (only 3 populated initially) |
| **Space** | Enclosure has 6 microphone ports (3 blanked off) |
| **Structural** | Mounting frame has 6 positions (3 unused with dummy weights for balance) |
| **Cable** | Cable harness has 6 conductors (3 terminated, 3 coiled and secured) |
| **Software** | Signal processing supports 3-6 mic configuration (software selectable) |
| **Calibration** | Calibration procedure supports both configurations |

---

**Problem 3:**
Review this 12.7mm RCWS design excerpt and identify missing provisions:

"The stabilization system uses MEMS gyros mounted in a sealed enclosure. The enclosure is machined to exact dimensions for the selected gyros. Power is supplied via dedicated wiring from the vehicle electrical system."

**Expected Answer:**
Missing provisions:
1. **Interface:** No mention of accepting alternative gyro sizes → Enclosure should have adjustable mounting or adapter capability
2. **Space:** "Exact dimensions" suggests no room for larger backup gyro → Need 20% volume margin
3. **Power:** "Dedicated wiring" may not support higher-power backup → Need power headroom analysis
4. **Thermal:** No mention of cooling provisions for potentially hotter backup unit

Improved specification:
"The stabilization system uses MEMS gyros in a sealed enclosure with universal mounting plate (accepts 3 gyro formats). Enclosure volume provides 25% margin. Power supply rated for 150% of primary gyro consumption. Thermal interface material pre-applied for both primary and backup gyro footprints."

---

### 5.5 Spaced Repetition Schedule

**Week 1 Check-In (10 min):**
1. What are the two types of risk that must be balanced?
2. Name 3 provision types for backup solution accommodation.

**Week 2 Check-In (10 min):**
1. What does "ready for immediate use" mean for a backup? (List 5 categories)
2. Why is over-engineering a form of risk?

**Week 4 Check-In (15 min):**
1. Walk through the minimum risk decision process for a new subsystem.
2. Design provisions for a specific backup scenario (instructor provides).

**Week 8 Verification (20 min):**
1. Apply minimum risk principles to a complete system design review.
2. Identify gaps and recommend improvements.

---

# PART 6: CONCEPT EVALUATION INTEGRATION
## Skill: engineering-concept-evaluation-assistant

### 6.1 VDI 2225 Criteria for Minimum Risk

When evaluating concept variants using VDI 2225, include these risk-related criteria:

| Criterion | Weight | Definition |
|-----------|--------|------------|
| **Backup feasibility** | 5-10% | How easily can alternative solutions be integrated if primary fails? |
| **Uncertainty level** | 5-10% | How much unknown/unvalidated technology is involved? |
| **Step-by-step modifiability** | 5% | Can the design be incrementally improved without major redesign? |
| **Follow-up data potential** | 5% | Will this design generate useful performance limit information? |

### 6.2 Example: Target USV Propulsion Selection

**Concepts Under Evaluation:**
- A: Diesel inboard (proven, heavy)
- B: Diesel outboard (lighter, less proven in this application)
- C: Electric/hybrid (innovative, highest uncertainty)

**Standard VDI 2225 Criteria + Minimum Risk Criteria:**

| Criterion | Weight | A: Inboard | B: Outboard | C: Hybrid |
|-----------|--------|------------|-------------|-----------|
| Performance | 25% | 3 | 4 | 4 |
| Reliability | 20% | 4 | 3 | 2 |
| Cost | 15% | 3 | 3 | 2 |
| Maintainability | 10% | 3 | 4 | 2 |
| **Backup feasibility** | 10% | 4 | 3 | 2 |
| **Uncertainty level** | 10% | 4 (low uncertainty) | 3 | 2 (high uncertainty) |
| **Modifiability** | 5% | 3 | 3 | 3 |
| **Data potential** | 5% | 2 | 3 | 4 |

**Weighted Scores:**
- A: 3.25
- B: 3.30 ← Highest
- C: 2.60

**Minimum Risk Selection:** Concept B (outboard) selected because it optimizes performance/reliability while maintaining backup feasibility. Concept A kept as backup.

---

# End of Part 2
## Continue to Part 3 for: Mnemonics, Learning Architecture, Interleaving Schedule, Self-Assessment, and Learning Journal Templates
