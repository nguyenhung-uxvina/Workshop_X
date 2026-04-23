---
project: V-SMASH-M
phase: 0
type: odi-report
prompt: P28
version: 1.1
created: 2026-02-21
status: draft
data_confidence: LOW (~80% ASSUMPTION)
changelog: "v1.1 — Added Section 6 Customer Segmentation (P32), fixed Opp ranking sort, expanded Capture Protocol"
family: V-SMASH
parent_odi: V-SMASH-L_ODI_Report_v1.0.md
---

# V-SMASH-M (Micro-Sight) — ODI Report

> **Family position:** Entry-level — below V-L (LITE). Minimum viable AI fire control.
> **Base reference:** V-SMASH-L ODI Report v1.1 (22 outcomes for V-L). V-M has a **different job** from V-L — this is a standalone ODI.

---

## 1. Job-to-be-Done

### Core Functional Job

**"Aim accurately at a moving drone using an AI-generated lead indicator, achieving effective suppression fire without specialized training or equipment."**

This is fundamentally different from V-L's job ("detect, track, and engage... achieving first-shot neutralization"). V-M's job is about **volume suppression**, not precision kill. The soldier does ALL timing and trigger control — the AI's only role is showing WHERE to aim.

### Emotional Jobs

| Job | Description |
|-----|-------------|
| **Feel capable against drones** | "My rifle can do something against a drone" — psychological. Currently infantry feel helpless against aerial threats. |
| **Feel confident in the dot** | "If I aim where it says, I'll hit" — trust the AI indicator without understanding the math. |
| **Not feel burdened** | "It doesn't weigh me down or complicate my weapon" — V-M must feel like standard equipment, not specialist gear. |

### Consumption Chain Jobs

| Job | Description |
|-----|-------------|
| **Quick mount/dismount** | Clip onto any Picatinny rail in <30 seconds, no tools. |
| **Zero maintenance** | No calibration, no alignment, no software updates in the field. |
| **Battalion-scale procurement** | Logistics command can order 1,000+ units without per-unit customization. |

---

## 2. Job Map

**Executor:** Infantry rifleman (basic, not specialist C-UAS operator)
**Context:** Patrol, checkpoint, or base defense. Drone threat is unexpected.

| Step | Job Step | What Soldier Does | Current Pain Points | Current Tools |
|------|----------|-------------------|---------------------|---------------|
| **1. DEFINE** | Recognize drone threat exists | Hears buzzing or receives verbal alert from squad. Looks up. | No standard detection aid. Relies on eyes/ears. Often notices too late. | Human senses, shouted alert |
| **2. LOCATE** | Acquire drone visually | Brings rifle up, scans sky through V-M display. | Drones are small (30-50cm) at 200m+. Hard to see with naked eye. Iron sights useless against aerial. | Iron sights, naked eye |
| **3. PREPARE** | Wait for V-M to detect and compute lead | V-M AI detects drone in FOV, classifies, computes ballistic lead. Soldier sees indicator appear. | No current equivalent — soldier must estimate lead manually (impossible for most infantry). | Manual estimation (ineffective) |
| **4. CONFIRM** | Verify indicator is valid | Checks confidence indicator (GREEN/YELLOW/RED). Verifies it's tracking a drone, not a bird. | No IFF system exists. No confidence feedback. Soldier either fires or doesn't based on gut. | Visual identification only |
| **5. EXECUTE** | Aim at indicator and fire | Places crosshair on lead indicator dot. Fires when steady. Manual trigger timing. | Manual trigger timing adds ~20% variance vs AI-gated fire. But "follow the dot" is trainable. | Rifle, manual trigger |
| **6. MONITOR** | Observe shot effect | Watches for hit/miss. V-M continues tracking target. | At 200m+, hard to see if rounds connected. No tracer feedback standard. | Visual observation |
| **7. MODIFY** | Re-engage if missed | V-M recomputes lead. Soldier adjusts aim to updated indicator. Fires again. | Without V-M, soldier has no feedback on WHERE they missed. V-M shows updated lead. | V-M re-tracking |
| **8. CONCLUDE** | Confirm result, resume patrol | Drone neutralized or retreated. Soldier lowers rifle. V-M logs engagement data. | No engagement record. No AAR data. Cannot improve next time. | None (no recording) |

---

## 3. Desired Outcomes

### DEFINE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM01 | Minimize the time to power on and achieve operational readiness when threat is detected | 9 | 3 | [ASSUMPTION] Infantry combat: seconds matter. Current optics are instant-on. |
| OM02 | Minimize the training time required for a rifleman to competently use the AI lead indicator | 9 | 2 | [ASSUMPTION] Mass infantry = minimal training budget. "Follow the dot" must be literal. |

### LOCATE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM03 | Maximize the detection range at which the AI can acquire a drone target in daylight | 8 | 2 | [ASSUMPTION] V-M smaller optic than V-L → detection range trades off vs weight. |
| OM04 | Minimize the time from pointing rifle at sky to AI acquiring a drone in FOV | 8 | 3 | [ASSUMPTION] Soldier sweeps sky — AI must acquire quickly once drone enters FOV. |

### PREPARE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM05 | Minimize the latency from AI detection to lead indicator appearing on display | 9 | 2 | [ASSUMPTION] P11 target: ≤150ms. Soldier perceives >200ms as laggy. |
| OM06 | Maximize the accuracy of the AI-computed lead indicator at engagement range | 9 | 2 | [ASSUMPTION] P11 target: ≤1 mrad angular error at 150m. Without this, "follow the dot" fails. |

### CONFIRM Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM07 | Minimize the misclassification rate when distinguishing drones from birds/debris | 10 | 2 | [ASSUMPTION] FR-IFF-01/02 family requirement. False engagement of bird = wasted ammo + position compromise. |
| OM08 | Maximize the clarity of the confidence indicator so soldier can make quick GO/NO-GO decision | 8 | 2 | [ASSUMPTION] Binary GREEN/RED insufficient — soldier needs "how sure is the AI?" at a glance. |

### EXECUTE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM09 | Maximize the hit probability when soldier aims at the lead indicator and fires manually | 8 | 2 | [ASSUMPTION] P11 kill condition: Pk ≥40% at 150m. No fire gate = human timing variance. |
| OM10 | Minimize the number of rounds required to neutralize target | 7 | 3 | [ASSUMPTION] Infantry carries limited ammo. 5-round burst vs 20-round spray is a logistics concern. |

### MONITOR Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM11 | Maximize the post-shot tracking continuity (AI maintains lock after firing) | 7 | 3 | [ASSUMPTION] Recoil may shift sight. AI should reacquire within 1-2 frames. |

### MODIFY Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM12 | Minimize the time to recompute and display updated lead indicator after a miss | 8 | 2 | [ASSUMPTION] Drone may maneuver after first shot. V-M must update lead in <200ms. |

### CONCLUDE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM13 | Maximize the engagement data captured for after-action review | 6 | 1 | [ASSUMPTION] Currently zero data captured. Any recording = improvement. |

### Cross-Cutting (all steps)

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OM14 | Minimize the unit cost for battalion-wide procurement | 10 | 1 | [ASSUMPTION] **HIGHEST OPPORTUNITY.** $500 target vs $18K import. Mass procurement = price is king. |
| OM15 | Minimize the weight and bulk added to the standard rifle | 9 | 5 | [ASSUMPTION] ≤0.5 kg. Current AK-47/M16 = 3.6-4.2 kg. +0.5 kg acceptable, +1 kg not. |
| OM16 | Maximize the weapon platform compatibility (Picatinny + non-standard rails) | 8 | 4 | [ASSUMPTION] Not all VN infantry weapons have Picatinny. Adapter kit may be needed. |
| OM17 | Maximize battery life during continuous operational use | 8 | 3 | [ASSUMPTION] ≥8 hours = full patrol. Charging in field is difficult. |

**Total: 17 outcomes across 8 job steps + cross-cutting.**

---

## 4. Opportunity Scores

**Formula:** Opp = Importance + max(Importance − Satisfaction, 0)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OM14** | Minimize unit cost for battalion procurement | 10 | 1 | **19** | 🔴 UNDERSERVED |
| 2 | **OM07** | Minimize misclassification rate (drone vs bird) | 10 | 2 | **18** | 🔴 UNDERSERVED |
| 3 | **OM06** | Maximize lead indicator accuracy | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 4 | **OM02** | Minimize training time to competence | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 5 | **OM05** | Minimize detection-to-indicator latency | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 6 | **OM01** | Minimize power-on to operational readiness | 9 | 3 | **15** | 🔴 UNDERSERVED |
| 7 | **OM12** | Minimize lead recompute time after miss | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 8 | **OM09** | Maximize hit probability with manual fire | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 9 | **OM03** | Maximize drone detection range (daylight) | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 10 | **OM08** | Maximize confidence indicator clarity | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 11 | **OM15** | Minimize weight/bulk on rifle | 9 | 5 | **13** | 🔴 UNDERSERVED |
| 12 | **OM17** | Maximize battery life | 8 | 3 | **13** | 🔴 UNDERSERVED |
| 13 | **OM04** | Minimize sky-to-acquire time | 8 | 3 | **13** | 🔴 UNDERSERVED |
| 14 | **OM16** | Maximize weapon platform compatibility | 8 | 4 | **12** | 🟡 UNDERSERVED |
| 15 | **OM13** | Maximize engagement data capture | 6 | 1 | **11** | 🟡 UNDERSERVED |
| 16 | **OM10** | Minimize rounds to neutralize | 7 | 3 | **11** | 🟡 UNDERSERVED |
| 17 | **OM11** | Maximize post-shot tracking continuity | 7 | 3 | **11** | 🟡 UNDERSERVED |

**Result: 17/17 outcomes UNDERSERVED (Opp ≥10).** This is expected — V-M addresses a market with ZERO existing solutions. Every outcome is unmet.

### Strategic Quadrant

| Quadrant | Outcomes | Action |
|----------|----------|--------|
| **UNDERSERVED (Opp ≥10, Imp ≥8)** | OM14, OM07, OM06, OM02, OM05, OM12, OM09, OM03, OM08, OM15, OM01, OM17, OM04, OM16 | **Address — product core** |
| **UNDERSERVED (Opp ≥10, Imp <8)** | OM13, OM10, OM11 | **Address — secondary** |
| **MAINTAIN-QUALITY** | OM07 (misclassification — if V-M causes friendly fire, trust destroyed forever) | **Never degrade** |
| **OVERSERVED** | None | — |

> **SAFETY_OVERRIDE:** OM07 (misclassification) is the only safety-critical outcome. V-M has NO fire gate — the human fires manually. No outcome requires autonomous engagement. HITL is inherent in V-M's design (no AI trigger control). FR-IFF-01/02 apply via confidence indicator only.

---

## 5. Strategic Recommendation

### Strategy: **DISRUPT**

**Rationale:** V-M enters a market with ZERO existing solutions for mass infantry anti-drone aiming. The opportunity landscape is uniformly underserved. The winning strategy is:

1. **Lowest cost** (OM14 = Opp 19) — at $500, V-M is 36× cheaper than imported SMASH. Price enables battalion-wide procurement where per-unit budgets are $500-1,000.

2. **Simplest training** (OM02 = Opp 16) — "follow the dot" requires ≤2 hours training vs 40+ hours for advanced FCS. Mass infantry cannot train every soldier on complex systems.

3. **Good enough accuracy** (OM09 = Opp 14) — Pk ≥40% at 150m is below V-L's ≥80%, but 1,000 soldiers at 40% Pk > 50 specialists at 80% Pk for area defense.

### Top 3 Opportunity Areas

| Priority | Area | Top Outcome | Product Response |
|----------|------|-------------|------------------|
| 1 | **Affordability** | OM14 (Opp 19) | $500 unit cost target, ≤$300-500 BOM, minimal optics |
| 2 | **Trust/Safety** | OM07 (Opp 18) | FR-IFF-01/02 confidence gating, 4-class classification |
| 3 | **AI Performance** | OM06 (Opp 16) | ≤1 mrad lead accuracy, ≤150ms latency (OM05) |

### Positioning vs V-L

| Dimension | V-M | V-L |
|-----------|-----|-----|
| **Job** | "Show me where to aim" | "Decide when to fire" |
| **User** | Basic rifleman | Specialist C-UAS operator |
| **Volume** | 5,000-10,000 units | 100-500 units |
| **Top outcome** | OM14: Cost (Opp 19) | O13: Hit probability (Opp 18) |
| **Strategy** | DISRUPT | DOMINATE |
| **Hard boundary** | NO fire gate — EVER | Fire gate is core differentiator |

### Cannibalization Risk: LOW

V-M and V-L serve **different customers doing different jobs**. V-M does not compete with V-L — it competes with "no solution at all." If a unit needs AI-gated fire control, V-M literally cannot provide it (no fire gate). If a unit needs 1,000 aiming aids at $500 each, V-L's $3,000 price makes it impossible.

---

## 6. Customer Segmentation (P32)

### Step 1: Outcome Clusters

V-M's 17 outcomes cluster into 3 groups based on which outcomes co-vary in importance across customer types:

| Cluster | Outcomes | Theme | Customer Profile |
|---------|----------|-------|------------------|
| **Cost & Simplicity** | OM14, OM02, OM15, OM16 | "Cheapest possible, simplest possible, fits my weapon" | High-volume procurement, price-sensitive, minimal training budget |
| **AI Performance** | OM06, OM05, OM12, OM03, OM07, OM08, OM09 | "The dot must be accurate and fast" | Operationally exposed to real drone threats, demands performance |
| **Data & Sustainment** | OM13, OM17, OM01, OM10, OM11 | "Keep it running, learn from engagements" | Repeated operational use, after-action review culture |

### Step 2: Segment Profiles

| Attribute | Segment A: Mass Infantry Battalions | Segment B: Base Security / Installation Defense | Segment C: Border & Checkpoint Units |
|-----------|-------------------------------------|------------------------------------------------|--------------------------------------|
| **Who they are** | Infantry platoons (line infantry, light infantry, mountain infantry) across all military regions | Security companies at airbases, ammunition depots, command posts, radar stations | Border guard posts, checkpoint teams, outposts along land borders |
| **Size estimate** | ~150,000 riflemen across ~50 infantry brigades [ASSUMPTION] | ~15,000 personnel across ~200 installations [ASSUMPTION] | ~20,000 personnel across ~350 border posts [ASSUMPTION] |
| **Usage pattern** | Patrol/maneuver — short engagements, weapon always carried, power-constrained | Stationary overwatch — longer engagement windows, grid power available, fixed arcs | Mixed — patrol + fixed position, remote locations, limited logistics |
| **Top 3 unmet outcomes** | OM14 (cost), OM02 (training), OM15 (weight) | OM03 (detection range), OM13 (data capture), OM07 (misclassification) | OM17 (battery life), OM16 (weapon compat), OM03 (detection range) |
| **Current solution** | None — no C-UAS capability at rifleman level | Manual spotters + legacy AA guns (ZSU-23), no AI aiding | Visual observation only, occasional legacy AA |
| **Procurement path** | Logistics Command batch order (10,000+ unit lots) | Individual installation commander request + MD approval | Border Defense Command batch order |
| **Opp concentration** (avg top-5 opp scores ÷ 2) | 8.5 (OM14=19, OM07=18, OM06=16, OM02=16, OM05=16 → avg 17.0 ÷ 2) | 7.5 (OM03=14, OM07=18, OM13=11, OM08=14, OM01=15 → avg 14.4 ÷ 2) | 6.5 (OM17=13, OM16=12, OM03=14, OM07=18, OM15=13 → avg 14.0 ÷ 2) |
| **Size score** (0-10) | **10** (150K — by far the largest) | 3 (15K — 10× smaller than A) | 4 (20K) |
| **Adoption speed** (0-10) | 7 (large batch procurement takes 6-12 months but once approved scales instantly) | 5 (per-installation, 12-18 months, requires individual justification) | 6 (Border Command central procurement, 6-12 months, smaller batch) |
| **Strategic fit** (0-10) | **9** (purest ACH thesis — max AI, min HW, max volume, max IRONMESH nodes) | 5 (good but stationary use underutilizes V-M's portability advantage) | 6 (good fit, but remote logistics makes sustainment harder) |

### Step 3: Weighted Scoring

| Criterion | Weight | Seg A: Mass Infantry | Seg B: Base Security | Seg C: Border/Checkpoint |
|-----------|--------|---------------------|---------------------|-------------------------|
| Opportunity concentration | 40% | 8.5 × 0.40 = **3.40** | 7.5 × 0.40 = 3.00 | 6.5 × 0.40 = 2.60 |
| Segment size | 30% | 10 × 0.30 = **3.00** | 3 × 0.30 = 0.90 | 4 × 0.30 = 1.20 |
| Adoption speed | 20% | 7 × 0.20 = **1.40** | 5 × 0.20 = 1.00 | 6 × 0.20 = 1.20 |
| Strategic fit (IRONMESH) | 10% | 9 × 0.10 = **0.90** | 5 × 0.10 = 0.50 | 6 × 0.10 = 0.60 |
| **WEIGHTED TOTAL** | 100% | **8.70** | **5.40** | **5.60** |

### Segment Selection

**Primary target: Segment A — Mass Infantry Battalions** (score 8.70, clear winner)

**Rationale:**
1. **10× size advantage** — 150K riflemen vs 15-20K in other segments. Even at 10% penetration = 15,000 units. This is V-M's entire business case.
2. **Highest opportunity concentration** — the cluster that matters most (OM14 cost + OM02 training) directly aligns with mass infantry's procurement reality.
3. **Best ACH fit** — volume equipping is the purest expression of the ACH thesis (AI value > hardware cost). Each unit generates IRONMESH telemetry that improves the entire V-SMASH family.
4. **Single procurement decision-maker** — Logistics Command can order 10,000 units in one batch. Segment B requires 200 individual installation approvals.

**Secondary target: Segment C — Border/Checkpoint Units** (score 5.60)

Border units are a natural follow-on because:
- Central procurement (Border Defense Command) enables batch orders
- Remote locations value V-M's standalone capability (no IRONMESH dependency)
- Different enough from Segment A to validate V-M across contexts
- Enters Phase 1 as WISH requirements, not MUST

**Not recommended: Segment B — Base Security** (score 5.40)

Base security's stationary use pattern undervalues V-M's key differentiator (portability). These units may be better served by V-D (Sentry Detector — detection + alerting without engagement) or V-L (higher precision for dedicated C-UAS role).

> **Data confidence: LOW** — all segment sizes are [ASSUMPTION]. Validate Segment A size with Logistics Command contact before committing Phase 1 requirements to 150K-unit scale assumptions.

---

## Capture Protocol

### ODI Summary

| Field | Value |
|-------|-------|
| **Product** | V-SMASH-M (Micro-Sight) |
| **Core job** | Aim accurately at a moving drone using AI lead indicator, achieving effective suppression fire without specialized training |
| **Total outcomes** | 17 (OM01-OM17) |
| **Underserved (Opp ≥10)** | 17/17 (100% — greenfield market, zero existing solutions) |
| **Strategy** | DISRUPT |
| **Primary segment** | Segment A: Mass Infantry Battalions (~150K riflemen) |
| **Secondary segment** | Segment C: Border/Checkpoint Units (~20K personnel) |
| **Data confidence** | LOW (~80% ASSUMPTION) |
| **Top 3 opportunities** | OM14 (cost, 19), OM07 (misclassification, 18), OM06 (accuracy, 16) |

### Phase 1 Handoff

**UNDERSERVED → MUST requirements (feed to P13):**
- OM14 (cost ≤$500), OM07 (misclassification ≤2%), OM06 (lead accuracy ≤1 mrad), OM02 (training ≤2h), OM05 (latency ≤150ms), OM01 (power-on ≤3s)

**UNDERSERVED secondary → WISH requirements:**
- OM12, OM09, OM03, OM08, OM15, OM17, OM04, OM16

**Secondary segment outcomes → WISH requirements:**
- OM17 (battery for remote ops), OM16 (non-Picatinny adapter for border weapons)

**Kill condition (from P11):** Pk < 25% at 150m after 2 tuning iterations → KILL. Also kill if unit cost > $600.

### Validation Needed

| # | What | Who | Why | Priority |
|---|------|-----|-----|----------|
| 1 | Segment A size (150K riflemen) | Logistics Command contact | Size assumption drives entire business case | HIGH |
| 2 | $500 price acceptability | 3-5 battalion logistics officers | OM14 (cost) is #1 opportunity | HIGH |
| 3 | OM07 misclassification rate | Field test — Vietnamese bird species at ranges | Herons, pigeons common at training ranges | MEDIUM |
| 4 | Training time ≤2h feasibility | Infantry training cadre | OM02 — "follow the dot" actual learning curve | MEDIUM |

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (Section 6.3 for preliminary outcomes) | V-SMASH-M_Product_Proposal_v1.0.md (P11) | V-SMASH_Family_Orchestration_Design_v1.0.md*
