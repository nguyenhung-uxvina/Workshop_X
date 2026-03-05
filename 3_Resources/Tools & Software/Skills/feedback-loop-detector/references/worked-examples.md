# Feedback Loop Detector: Worked Examples

## Table of Contents

1. [Example 1: Engineering Project with L3-5-6-7 Active Points](#example-1-engineering-project-with-l3-5-6-7-active-points)
   - [Context](#context)
   - [Step 1: Identify System Variables](#step-1-identify-system-variables)
   - [Step 2: Map Causal Links](#step-2-map-causal-links)
   - [Step 3: Detect Closed Loops](#step-3-detect-closed-loops)
   - [Step 4: Analyze Loop Dominance](#step-4-analyze-loop-dominance)
   - [Step 5: Detect System Archetypes](#step-5-detect-system-archetypes)
   - [Step 6: Integrate Leverage Points](#step-6-integrate-leverage-points)
   - [Step 7: Leverage Point Interlocks](#step-7-leverage-point-interlocks)
   - [Step 8: Concrete Intervention Sequence](#step-8-concrete-intervention-sequence)
   - [Step 9: Projected Outcomes](#step-9-projected-outcomes)
2. [Example 2: Manufacturing Quality-Throughput Trade-off](#example-2-manufacturing-quality-throughput-trade-off)
3. [Key Patterns from Examples](#key-patterns-from-examples)

---

## Example 1: Engineering Project with L3-5-6-7 Active Points

### Context

**System:** Defense engineering design project (UAV reconnaissance system)
**Problem:** Project exhibiting escalating complexity despite multiple intervention attempts
**Known Active Leverage Points:** L3 (Goals), L5 (Rules), L6 (Information), L7 (Reinforcing Loop Gain)
**User Request:** "Show how these leverage points interlock and provide concrete intervention sequence"

---

### Step 1: Identify System Variables

**Observable Stocks:**
1. Technical Complexity: 150 subsystems (target: 100)
2. Integration Effort: 240 person-hours/week (target: 120)
3. Design Knowledge: Medium maturity (3 projects completed)
4. Team Capability: 8 engineers, 2 technicians

**Rates/Flows:**
1. Complexity Growth: +5 subsystems/month
2. Knowledge Accumulation: +10% per integration cycle
3. Integration Rate: 3 subsystems/week
4. Error Discovery Rate: 8 issues/week

**Auxiliary Variables:**
1. Integration Backlog: 45 subsystems (growing)
2. Team Stress: High (subjective assessment)
3. Performance Gap: Current 75% vs Target 90%
4. Schedule Pressure: 3 months behind

---

### Step 2: Map Causal Links

**Detected Causal Chains:**

```
[Technical Complexity: 150] +→ [Integration Effort: 240h/week] +→ [Team Stress: High]

[Team Stress] −→ [Integration Quality] −→|| [Error Rate: 8/week]

[Error Rate] +→ [Rework] +→ [Schedule Pressure]

[Schedule Pressure] +→ [Pressure to Add Features] +→ [Complexity]

[Complexity] +→ [Integration Backlog: 45]

[Integration Backlog] +→ [Management Pressure] +→ [Add More People]

[Add More People] +→ [Communication Overhead] −→ [Integration Rate]
```

**Delays Identified:**
- Integration Quality → Error Rate: 2 weeks (testing lag)
- Error Rate → Rework: 1 week (diagnosis time)
- Add People → Communication Overhead: 3-4 weeks (onboarding lag)

---

### Step 3: Detect Closed Loops

#### R1: Complexity Spiral (REINFORCING) ⚠️

```
[Technical Complexity: 150] +→ [Integration Effort: 240h/week] +→ 
[Team Stress: High] −→ [Integration Quality] −→|| [Error Rate: 8/week] +→ 
[Rework] +→ [Schedule Pressure] +→ [Add Features to Impress Stakeholders] +→ 
[Technical Complexity] [LOOP CLOSES]
```

**Polarity Count:**
- 3 negative links (Stress→Quality, Quality→Error Rate, Add People→Integration Rate)
- Wait, let me recount more carefully:
  - Complexity → Effort: + (more complexity, more effort)
  - Effort → Stress: + (more effort, more stress)
  - Stress → Quality: − (more stress, lower quality)
  - Quality → Error Rate: − (higher quality, fewer errors)
  - Error Rate → Rework: + (more errors, more rework)
  - Rework → Schedule Pressure: + (more rework, more pressure)
  - Pressure → Add Features: + (more pressure, more features to show progress)
  - Features → Complexity: + (more features, more complexity)

**Total: 2 negative links → EVEN → Reinforcing (R)**

**Effect:** More complexity begets more complexity through stress-quality-error pathway

**Speed:** FAST (2-3 week cycle time from complexity to error to pressure)

**Strength:** STRONG (each cycle adds 5 subsystems/month)

**Current State:** ACTIVE (observable right now)

**Dominance:** **HIGH** ⚠️ - This loop is currently controlling system behavior

#### B1: Resource Addition (BALANCING)

```
[Integration Backlog: 45] +→ [Management Pressure] +→ 
[Add Engineers] +→ [Team Size: 8→10] +→ [Integration Capacity] −→ 
[Integration Backlog] [LOOP CLOSES]
```

**Polarity Count:**
- 1 negative link (Capacity → Backlog)
- ODD → Balancing (B)

**Effect:** Backlog triggers resource addition to reduce backlog

**Speed:** SLOW (3-4 weeks delay for new engineers to be productive)

**Strength:** WEAK (new engineers initially slow integration due to communication overhead)

**Current State:** ACTIVE (management is adding people)

**Dominance:** LOW - Being overwhelmed by R1

#### R2: Brooks' Law Loop (REINFORCING, Dormant)

```
[Team Size: 8→10] +→ [Communication Paths: n(n-1)/2] +→ 
[Meeting Time] +→ [Less Integration Time] −→ [Integration Rate] −→ 
[Team Size Need] +→ [Team Size] [LOOP CLOSES]
```

**Polarity Count:**
- 3 negative links → Wait, let me recount:
  - Size → Paths: + (more people, more connections)
  - Paths → Meetings: + (more connections, more meetings)
  - Meetings → Integration Time: − (more meetings, less work time)
  - Less Integration Time → Integration Rate: − (less time, lower rate)
  - Lower Rate → Need for More People: + (lower rate, more people requested)
  - More People → Size: + (request fulfilled)

**Total: 2 negative links → EVEN → Reinforcing (R)**

**Effect:** Adding people makes things worse (Brooks' Law)

**Speed:** MEDIUM (3-4 weeks to manifest)

**Strength:** MODERATE (each new person adds n-1 communication paths)

**Current State:** ACTIVATING (started 2 weeks ago with 2 new hires)

**Dominance:** MEDIUM - Will become HIGH if team continues growing

---

### Step 4: Analyze Loop Dominance

| Loop | Type | Strength | Speed | State | Delay | Dominance | Priority |
|------|------|----------|-------|-------|-------|-----------|----------|
| R1 - Complexity Spiral | R | Strong | Fast | Active | 2-3 weeks | **HIGH** ⚠️ | P0 - URGENT |
| B1 - Resource Addition | B | Weak | Slow | Active | 3-4 weeks | LOW | P2 |
| R2 - Brooks' Law | R | Moderate | Medium | Activating | 3-4 weeks | MEDIUM (rising) | P1 - CRITICAL |

**System Behavior:**

Currently dominated by **R1 (Complexity Spiral)**. Observable pattern:
- Complexity increasing 5 subsystems/month
- Integration effort increasing 10 hours/week
- Error rate steady at 8/week (should be declining)
- Schedule slipping 1 week per month

**Projection if Unaddressed:**
- Month 1-2: R1 continues, complexity reaches 160-170 subsystems
- Month 3-4: R2 activates fully as new engineers create communication overhead
- Month 5-6: R1 + R2 combine → runaway complexity, team paralysis
- Month 7+: Project collapse likely

**Critical Insight:** B1 (adding resources) is actually triggering R2 (Brooks' Law), which will amplify R1. This is a "Fixes That Fail" archetype.

---

### Step 5: Detect System Archetypes

#### ⚠️ ARCHETYPE MATCH: Fixes That Fail

**Confidence:** HIGH

**Evidence:**
1. **Fast R Loop (R1):** Complexity causes pressure, pressure causes more complexity
2. **Slow B Loop (B1):** Adding engineers to reduce backlog
3. **Unintended Consequence:** Adding engineers triggers R2 (Brooks' Law)
4. **Observed Pattern:** Short-term relief (more hands) → long-term worsening (more communication overhead)

**Risk Assessment:**
- Adding more engineers will initially reduce backlog (Week 1-2)
- Then communication overhead increases (Week 3-4)
- Then integration rate decreases below baseline (Week 5-6)
- Net result: Backlog LARGER than before intervention

**Intervention Priority:** CRITICAL - Must stop adding engineers immediately

#### ⚠️ ARCHETYPE MATCH: Escalation (Secondary)

**Confidence:** MEDIUM

**Evidence:**
1. **Dual R Loops:** Management adds features to show progress → Engineers add complexity to meet features → Management adds MORE features
2. **Competitive Amplification:** Each side's action triggers other side's escalation
3. **Mutual Exhaustion:** Both management and engineering team stressed

**Pattern:**
```
R (Management): [Schedule Pressure] +→ [Demand More Features] +→ [Engineering Stress] +→ [Schedule Pressure]
R (Engineering): [Feature Overload] +→ [Add Complexity] +→ [Management Concern] +→ [More Feature Demands]
```

**Intervention Priority:** HIGH - Need to align goals and break escalation

---

### Step 6: Integrate Leverage Points

**User's Known Active Points:** L3, L5, L6, L7

Let's map these INTO the detected loops:

#### L7: Gain Around Reinforcing Loops

**Location in R1 (Complexity Spiral):**
```
[Schedule Pressure] +→ [Add Features: GAIN=5 subsystems/month] +→ [Complexity]
                              ↑ L7 intervention point
```

**Current State:** High gain (5 subsystems/month added under pressure)

**Intervention:** Reduce gain from 5 to 2 subsystems/month
- **Method:** Feature freeze policy - no new subsystems until integration backlog < 20
- **Impact:** Slows R1 spiral from +5/month to +2/month (60% reduction)
- **Cost:** Low (policy change)
- **Risk:** Medium (management pushback)

**Location in R2 (Brooks' Law):**
```
[Team Size Need] +→ [Add Engineers: GAIN=2 people] +→ [Team Size]
                        ↑ L7 intervention point
```

**Current State:** Adding 2 engineers in response to backlog

**Intervention:** Stop adding people (reduce gain to 0)
- **Method:** Hiring freeze, focus on process improvement instead
- **Impact:** Prevents R2 from activating fully
- **Cost:** None (save hiring costs)
- **Risk:** Low (avoids Brooks' Law trap)

#### L6: Information Flow Structure

**Location in R1:**
```
[Integration Quality] −→|| [Error Rate: 8/week]
                     ↑ L6 intervention
                 (information delay: 2 weeks)
```

**Current State:** Engineers don't see integration errors for 2 weeks (testing lag)

**Intervention:** Real-time integration quality dashboard
- **Method:** CI/CD pipeline with immediate test feedback
- **Impact:** Errors visible within 1 hour instead of 2 weeks
- **Result:** Engineers fix issues before they compound
- **Cost:** Medium (2 weeks to setup)
- **Risk:** Low

**Location across all loops:**
```
[Management] ← [Information Gap] → [Engineering]
         ↑ L6 intervention
```

**Current State:** Management doesn't see complexity metrics, only schedule

**Intervention:** Shared complexity dashboard visible to all stakeholders
- **Metrics:** Subsystem count, integration backlog, error rate, team capacity
- **Impact:** Aligns understanding between management and engineering
- **Cost:** Low (1 week to build dashboard)
- **Risk:** Low

#### L5: Rules of the System

**Location in R1:**
```
[Schedule Pressure] +→ [Decision: Add Features] +→ [Complexity]
                           ↑ L5 intervention
```

**Current State:** Rule = "When behind schedule, add features to show progress"

**Intervention:** New rule = "When behind schedule, reduce scope to hit quality targets"
- **Method:** Policy: "No new features until integration backlog < 20 subsystems"
- **Impact:** Breaks R1 loop by changing response to pressure
- **Cost:** Medium (organizational change)
- **Risk:** High (requires management buy-in)

**Location in B1:**
```
[Integration Backlog] +→ [Decision: Add Engineers] +→ [Team Size]
                              ↑ L5 intervention
```

**Current State:** Rule = "When backlog grows, add people"

**Intervention:** New rule = "When backlog grows, reduce incoming work"
- **Method:** Policy: "Freeze requirements, focus on integration"
- **Impact:** Prevents B1 from triggering R2
- **Cost:** Low (policy change)
- **Risk:** Medium (management concern about delivery)

#### L3: Goals of the System

**Location across all loops:**

**Current Goals (Implicit):**
- Management: Maximize features delivered (quantity)
- Engineering: Survive schedule pressure
- System optimization: Feature count

**Current Goal Drives:**
- R1: Pressure → more features → more complexity → more pressure
- B1: Backlog → add people (wrong solution)
- R2: More people → less productivity

**Intervention:** Change system goal

**New Goals:**
- Management: Maximize operational capability delivered (quality × reliability)
- Engineering: Sustainable pace with high integration quality
- System optimization: Value per subsystem (not subsystem count)

**Method:**
1. Leadership workshop: Redefine success metrics
2. Change OKRs from "N features delivered" to "M operational capabilities with 95% reliability"
3. Reward integration quality, not feature velocity

**Impact:**
- R1: Pressure no longer drives feature additions (goal misalignment broken)
- B1: Backlog triggers scope reduction, not people addition
- R2: Team size stabilizes

**Cost:** Low (mindset shift) to High (if requires executive approval)
**Risk:** High (organizational paradigm shift)

---

### Step 7: Leverage Point Interlocks

**How L3-L5-L6-L7 Work Together:**

**Cascade Structure:**

```
L3 (System Goal) 
  ↓ enables
L5 (Rules)
  ↓ enforces
L7 (Loop Gain)
  ↓ visible through
L6 (Information)
  ↓ reinforces
L3 (Goal alignment verified)
```

**Concrete Interlocks:**

**Interlock 1: L3 → L5**
- **L3:** Change goal from "max features" to "max value/subsystem"
- **L5:** Enact rule "No features until backlog < 20" (enforces new goal)
- **Result:** Goal change has teeth (not just rhetoric)

**Interlock 2: L5 → L7**
- **L5:** Rule caps feature additions
- **L7:** Reduces gain in R1 from 5 to 2 subsystems/month
- **Result:** Rule directly slows reinforcing loop

**Interlock 3: L7 → L6**
- **L7:** Lower complexity growth rate
- **L6:** Dashboard shows declining growth rate trend
- **Result:** Information feedback reinforces behavior change

**Interlock 4: L6 → L3**
- **L6:** Dashboard shows value/subsystem increasing
- **L3:** Validates new goal is achievable
- **Result:** Goal shift becomes credible

**Synergy:**
- L3 alone: "We should focus on value" (no mechanism)
- L5 alone: "Don't add features" (no justification, resistance)
- L7 alone: "Slow down" (why? what's the target?)
- L6 alone: "Here's data" (so what? what should we do?)

**Together:** Clear goal (L3) + Enforced rules (L5) + Visible results (L6) + Structural change (L7) = Systemic transformation

---

### Step 8: Concrete Intervention Sequence

**PHASE 1 - IMMEDIATE (Week 1-2): L6 + L7 (Quick Wins)**

**Action 1.1: Deploy L6 (Information)**
- Build real-time complexity dashboard
  - Metrics: Subsystem count, backlog, error rate, integration rate
  - Visible to: All engineers, managers, executives
  - Update frequency: Hourly
- Setup CI/CD pipeline
  - Immediate test feedback (< 1 hour)
  - Automated integration quality checks
- **Expected Impact:** 20-30% fewer errors propagate (caught early)
- **Cost:** 2 person-weeks
- **Risk:** Low

**Action 1.2: Implement L7 (Loop Gain Reduction)**
- Freeze new feature additions immediately
  - No new subsystems added for 2 weeks
  - Focus 100% on integration backlog
- **Expected Impact:** R1 gain drops to 0 (temporarily)
- **Cost:** None
- **Risk:** Medium (management concern)

**Week 1-2 Outcome:**
- Backlog reduces from 45 to 30 subsystems
- Error rate drops from 8/week to 5/week
- Team stress decreases (visible relief)
- Builds credibility for Phase 2

**PHASE 2 - SHORT-TERM (Week 3-6): L5 (Structural Rules)**

**Action 2.1: Enact L5 (Rules)**
- Policy 1: "Max 2 new subsystems per month until backlog < 20"
  - Enforced by project manager + dashboard alert
  - Violators must justify to engineering lead
- Policy 2: "No new engineers until integration rate improves"
  - Prevents R2 (Brooks' Law) activation
  - Focus on process improvement instead
- Policy 3: "Mandatory root cause analysis for all errors"
  - Forces learning, prevents recurrence
  - Strengthens capability (anti-"Shifting the Burden")

**Week 3-6 Outcome:**
- R1 gain permanently reduced to 2 subsystems/month (60% reduction)
- B1 no longer triggers R2 (hiring freeze)
- Error recurrence drops 40% (root cause analysis)
- Backlog reduces from 30 to 15 subsystems

**PHASE 3 - MEDIUM-TERM (Month 2-3): L3 (Goal Change)**

**Action 3.1: Implement L3 (System Goal Shift)**
- Leadership workshop (4 hours)
  - Present data: Value/subsystem increasing, complexity decreasing
  - Redefine success: Operational capability (quality × reliability), not feature count
- Change OKRs
  - Old: "Deliver 20 subsystems in Q4"
  - New: "Deliver 5 integrated capabilities with 95% reliability"
- Update incentives
  - Reward teams for integration quality, not feature velocity
  - Bonus tied to error rate reduction, not feature count

**Month 2-3 Outcome:**
- R1 fundamentally redirected (pressure no longer drives features)
- B1 response changes (backlog triggers scope reduction, not hiring)
- R2 prevented (team size stable)
- System reaches new equilibrium: Sustainable pace, high quality

**PHASE 4 - MONITORING (Month 4+)**

**Leading Indicators (Weekly):**
- Subsystem additions: Target ≤ 2/month
- Integration backlog: Target < 20 subsystems
- Error rate: Target < 3/week
- Dashboard usage: Target 100% team adoption

**Lagging Indicators (Monthly):**
- Integration rate: Target 5 subsystems/week (up from 3)
- Value per subsystem: Target 1.5x baseline
- Team stress: Target "Medium" (down from "High")
- Schedule adherence: Target ±1 week (from ±4 weeks)

**Archetype Recurrence Signals:**
- "Fixes That Fail": Watch for pressure to add engineers when backlog grows
- "Escalation": Watch for management demanding more features when stressed

**Correction Triggers:**
- If backlog > 25: Freeze ALL new features for 1 month
- If error rate > 6/week: Mandatory 2-day quality sprint
- If team size increases: Immediate review of integration rate impact

---

### Step 9: Projected Outcomes

**Baseline (Current State):**
- Complexity: 150 subsystems, growing 5/month
- Integration backlog: 45 subsystems, growing 3/month
- Error rate: 8/week, stable
- Schedule: 3 months behind, slipping 1 month/month
- Team: 8 engineers, adding 2 more (doomed to fail)

**After Phase 1 (Week 2):**
- Complexity: 150 (frozen)
- Backlog: 30 (reduced 33%)
- Error rate: 5/week (reduced 37%)
- Schedule: 3 months behind (stable)
- Team: 8 engineers (hiring paused)

**After Phase 2 (Week 6):**
- Complexity: 152 (slow growth, controlled)
- Backlog: 15 (reduced 67%)
- Error rate: 3/week (reduced 62%)
- Schedule: 2.5 months behind (improving)
- Team: 8 engineers (stable)

**After Phase 3 (Month 3):**
- Complexity: 155 (stable, quality increasing)
- Backlog: 8 (reduced 82%)
- Error rate: 2/week (reduced 75%)
- Schedule: On track for adjusted delivery (with reduced scope but higher quality)
- Team: 8 engineers (stable, sustainable pace)

**Long-term Projection (Month 6+):**
- Complexity: 160-165 (slow, deliberate growth)
- Backlog: < 10 (manageable)
- Error rate: < 2/week (high quality)
- Schedule: Reliable delivery estimates
- Team: 8-9 engineers (growth only after process maturity)

**Total Impact:**
- 60% reduction in complexity growth rate
- 80% reduction in integration backlog
- 75% reduction in error rate
- Sustainable pace achieved
- Project delivery likely (with adjusted scope)

---

## Example 2: Manufacturing Quality-Throughput Trade-off

[Additional examples would go here - showing different loop structures, archetypes, and leverage cascades]

---

## Key Patterns from Examples

**Pattern 1: Multi-Point Cascades Outperform Single Interventions**
- L7 alone: 30-40% improvement
- L6 alone: 20-30% improvement
- L5 alone: 40-50% improvement
- L3 alone: Hard to implement, low initial impact
- **L6+L7+L5+L3 cascade: 60-80% improvement** (non-linear synergy)

**Pattern 2: Phasing Matters**
- Quick wins (L6, L7, L9) → Build credibility → Enable structural changes (L5, L3)
- Attempting L3 first without L6 evidence = resistance
- Attempting L5 first without L6 visibility = circumvention

**Pattern 3: Information (L6) is Force Multiplier**
- L6 makes all other interventions visible
- L6 provides feedback for course correction
- L6 builds consensus for goal changes (L3)

**Pattern 4: Rules (L5) Enforce Goals (L3)**
- L3 without L5 = rhetoric
- L5 without L3 = arbitrary constraints
- Together = aligned system

**Pattern 5: Loop Dominance Determines Priority**
- Attack dominant loops first (R1 in example)
- Strengthen weak balancing loops (B1 in example)
- Prevent dormant loops from activating (R2 in example)
