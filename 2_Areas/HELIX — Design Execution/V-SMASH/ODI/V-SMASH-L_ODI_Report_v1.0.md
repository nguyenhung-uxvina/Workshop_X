---
project: V-SMASH-L
phase: 0
type: odi-report
prompt: P28 (/odi)
version: 1.0
created: 2026-02-20
status: draft
data_confidence: MEDIUM — based on product docs + competitive analysis + [ASSUMPTION] where noted
validation_needed: Field interviews with QĐND infantry and training units
family: V-SMASH
family_odi: V-SMASH_ODI_Report_v1.0.md
---

# V-SMASH-L (LITE) — ODI Report

> **Product:** V-SMASH-L (LITE) — AI-powered fire control sight for counter-UAS engagement.
> **Family:** V-SMASH (8 products). See `V-SMASH_ODI_Report_v1.0.md` for family-level outcome landscape and cross-product analysis.

---

## SECTION 1: JOB-TO-BE-DONE

### Core Functional Job

**"Detect, track, and engage unauthorized low-altitude drone threats threatening a protected asset or personnel, achieving first-shot neutralization while maintaining human decision authority."**

*Format check: verb (engage) + object (drone threat) + context (low-altitude, protected asset, HITL)*

### Emotional Jobs
- **Personal:** "Feel confident the system is ready and will perform when I need it most"
- **Social:** "Demonstrate to command that my unit can handle drone threats without expensive import equipment"

### Consumption Chain Jobs
| Type | Job Statement |
|------|---------------|
| Before | "Plan and rehearse drone engagement procedures for my unit" |
| During | "Document engagement outcomes for after-action review and command reporting" |
| After | "Report drone threat incident and system performance to command" |

**Evidence source:** [ASSUMPTION: based on military doctrine patterns and SMASH product documentation — validate with QĐND infantry units]

---

## SECTION 2: JOB MAP (8 Steps)

| Step | Job Step | What Customer Does | Current Pain Points | Current Tools |
|------|----------|--------------------|---------------------|---------------|
| 1 | **DEFINE** | Identify threat type (FPV vs fixed-wing vs quadcopter), set ROE, brief unit | No standardized threat classification for novel drone types; ROE ambiguity for civilian-looking drones | Standing orders, verbal briefing |
| 2 | **LOCATE** | Detect drone via naked eye, binoculars, or auditory cue; determine bearing and altitude | Detection range limited to ~100m naked eye; no automated detection; night operations impossible | Binoculars, auditory [ASSUMPTION] |
| 3 | **PREPARE** | Mount/raise weapon, acquire drone in sight picture, configure sight | Standard iron sights require shooter to predict drone movement; mount compatibility varies | Iron sights, basic optics |
| 4 | **CONFIRM** | Verify it's a hostile drone (not friendly/civilian), confirm ROE, confirm system ready | No AI assist for ID; shooter must decide under stress in <3 seconds | Visual inspection only |
| 5 | **EXECUTE** | Aim, wait for AI firing window, press trigger; AI gates the fire timing | Low hit probability (<20%) on moving FPV drones with manual aim; high ammo expenditure | Full-auto fire (spray) |
| 6 | **MONITOR** | Assess hit/miss, track drone status, check weapon/system status | No hit confirmation feedback; hard to track small fast drone after shot | Visual observation |
| 7 | **MODIFY** | Re-acquire and re-engage if miss; adjust firing solution; change position | Time to re-acquire on FPV drone >10 seconds; drone may have changed altitude/direction | Manual re-engagement |
| 8 | **CONCLUDE** | Report engagement (hit/miss), ammunition used, system status; debrief | Manual log entry; no automated data capture; inconsistent report format | Paper log, verbal debrief |

---

## SECTION 3: DESIRED OUTCOMES TABLE

> Format: "Minimize/Maximize the [metric] of [subject] when [context]"
> Scale: 1-10. Importance = critical to job success. Satisfaction = current solution meets this.

### DEFINE Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O01 | Minimize the time required to classify an inbound drone as hostile vs neutral | 9 | 3 | [ASSUMPTION: doctrine gap — validate] |
| O02 | Minimize the likelihood of incorrectly classifying a civilian drone as hostile | 10 | 3 | [ASSUMPTION: high consequence — validate] |
| O03 | Maximize the coverage of ROE scenarios pre-briefed per engagement type | 6 | 5 | [ASSUMPTION] |

### LOCATE Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O04 | Maximize the effective detection range when drone is approaching at low altitude | 9 | 2 | Competitive analysis: import solutions detect to 500m vs naked eye ~100m |
| O05 | Minimize the time required to transition from alert to target in sight picture | 9 | 3 | [ASSUMPTION: critical for FPV drone engagement timelines] |
| O06 | Minimize the likelihood of losing target track in cluttered visual backgrounds (trees, buildings) | 8 | 2 | Product doc: YOLOv8-nano designed for this; current state = manual tracking |

### PREPARE Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O07 | Minimize the time required to transition system from standby to AI-ready state | 8 | 4 | Product doc: <500ms latency target |
| O08 | Minimize the number of configuration steps required before engagement-ready | 7 | 5 | Product doc: one-press activation design |
| O09 | Maximize the compatibility of mount system across weapon platforms | 7 | 4 | Product doc: MIL-STD-1913 Picatinny; covers rifles + vehicles |

### CONFIRM Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O10 | Minimize the likelihood of AI system initiating unintended trigger action | 10 | 6 | Product doc: HITL principle — human must initiate trigger; AI only gates timing |
| O11 | Maximize operator confidence in system readiness indication under combat stress | 8 | 4 | [ASSUMPTION: UI/UX gap for combat conditions] |
| O12 | Minimize the time required to verify safe engagement zone before firing | 7 | 3 | [ASSUMPTION] |

### EXECUTE Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O13 | Maximize the probability of first-shot hit on a fast-moving drone target at 50-500m | 10 | 2 | Competitive analysis: SMASH claims >95%; current state ~<20% |
| O14 | Minimize the reaction time from target lock to optimal firing window opening | 9 | 2 | Product doc: <500ms system latency; current state = manual timing |
| O15 | Minimize the number of rounds required to neutralize a drone threat | 9 | 3 | [ASSUMPTION: ammo cost and re-engagement speed depend on this] |

### MONITOR Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O16 | Maximize the clarity of hit/miss feedback delivered to operator immediately after firing | 6 | 3 | [ASSUMPTION: no current solution provides this] |
| O17 | Minimize the time to determine whether the drone threat has been neutralized | 7 | 3 | [ASSUMPTION: visual confirmation time ~5-15 sec manually] |
| O18 | Minimize system thermal failures during sustained engagement operations | 7 | 5 | Product doc: battery >2hr, IP65 design |

### MODIFY Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O19 | Minimize the time required to re-acquire and re-engage drone after initial miss | 8 | 2 | [ASSUMPTION: FPV drones travel 15-20m/sec — acquisition window is seconds] |
| O20 | Minimize ammunition expenditure over a multi-shot engagement sequence | 8 | 3 | [ASSUMPTION: tied to O13/O14] |

### CONCLUDE Step

| # | Desired Outcome | Importance | Satisfaction | Source |
|---|----------------|-----------|-------------|--------|
| O21 | Minimize the time required to generate an engagement report after incident | 5 | 4 | [ASSUMPTION: lower priority than engagement outcomes] |
| O22 | Maximize the completeness of engagement data captured for after-action review | 6 | 3 | [ASSUMPTION: logs help improve doctrine over time] |

**Total: 22 desired outcomes across 8 job steps.**

---

## SECTION 4: OPPORTUNITY SCORES

> Formula: **Opportunity = Importance + max(Importance - Satisfaction, 0)**
> Score >=10 = UNDERSERVED | 8-9 = SLIGHTLY UNDERSERVED | 6-7 = SERVED | <6 = OVERSERVED

| Rank | # | Desired Outcome (abbreviated) | Imp | Sat | Opp Score | Priority |
|------|---|-------------------------------|-----|-----|-----------|---------|
| 1 | O13 | First-shot hit probability (50-500m) | 10 | 2 | **18** | UNDERSERVED |
| 2 | O02 | Minimize hostile/civilian misclassification | 10 | 3 | **17** | UNDERSERVED |
| 3 | O14 | Reaction time lock -> firing window | 9 | 2 | **16** | UNDERSERVED |
| 4 | O01 | Time to classify threat | 9 | 3 | **15** | UNDERSERVED |
| 5 | O05 | Time from alert to target in sight | 9 | 3 | **15** | UNDERSERVED |
| 6 | O15 | Rounds to neutralize drone | 9 | 3 | **15** | UNDERSERVED |
| 7 | O04 | Detection range at low altitude | 9 | 2 | **16** | UNDERSERVED |
| 8 | O06 | Track stability in cluttered background | 8 | 2 | **14** | UNDERSERVED |
| 9 | O19 | Re-acquisition time after miss | 8 | 2 | **14** | UNDERSERVED |
| 10 | O20 | Ammo expenditure multi-shot sequence | 8 | 3 | **13** | UNDERSERVED |
| 11 | O07 | Standby -> AI-ready transition time | 8 | 4 | **12** | UNDERSERVED |
| 12 | O11 | Operator confidence in readiness | 8 | 4 | **12** | UNDERSERVED |
| 13 | O17 | Time to confirm drone neutralized | 7 | 3 | **11** | UNDERSERVED |
| 14 | O09 | Mount compatibility across platforms | 7 | 4 | **10** | UNDERSERVED |
| 15 | O12 | Safe zone verification time | 7 | 3 | **11** | UNDERSERVED |
| 16 | O18 | Thermal failures in sustained ops | 7 | 5 | **9** | SLIGHTLY UNDERSERVED |
| 17 | O16 | Hit/miss feedback clarity | 6 | 3 | **9** | SLIGHTLY UNDERSERVED |
| 18 | O22 | Engagement data completeness | 6 | 3 | **9** | SLIGHTLY UNDERSERVED |
| 19 | O08 | Configuration steps before engagement | 7 | 5 | **9** | SLIGHTLY UNDERSERVED |
| 20 | O10 | AI system unintended trigger (HITL) | 10 | 6 | **14** | UNDERSERVED* |
| 21 | O03 | ROE scenario briefing coverage | 6 | 5 | **7** | SERVED |
| 22 | O21 | Engagement report generation time | 5 | 4 | **6** | SERVED |

*O10 (HITL safety): high importance + currently satisfied by design principle. Opp Score = 14 because importance is 10 — any reduction in satisfaction would be critical. Treat as MAINTAIN-QUALITY, not ignore.*

### Strategic Quadrant

```
HIGH IMPORTANCE
        |
        |  O13,O14,O04    |  O10 (HITL)
        |  O02,O15,O06    |  (Maintain Quality)
        |  INNOVATE HERE  |
        |-----------------+------------------
        |  O21 (low need) |  O03, O08
        |  IGNORE         |  SERVED
        |                 |
LOW IMPORTANCE
     LOW SATISFACTION      HIGH SATISFACTION
```

---

## SECTION 5: STRATEGIC RECOMMENDATION

**Strategy: DOMINATE**

V-SMASH-L should pursue market domination in the underserved Vietnamese counter-UAS segment because:

1. **14 out of 22 outcomes are UNDERSERVED** (score >=10) — extremely high opportunity concentration
2. **No local solution exists** at any satisfaction level for the top 10 outcomes
3. **Import solutions ($15K-$25K) satisfy outcomes** but at 3-4x the target price — cost is a secondary differentiator, not primary

**Top 3 opportunity areas to anchor Phase 1 MUST requirements:**
- **Hit probability at range** (O13: score 18) -> drives AI accuracy, latency, tracking algorithm specs
- **Threat misclassification risk** (O02: score 17) -> drives AI confidence threshold, IFF logic, HITL confirmation UX
- **Engagement speed** (O14: score 16) -> drives system latency budget, trigger gate response time

**Feed into Phase 1:** These 3 outcomes -> highest-weight MUST requirements in VDI 2225 evaluation

---

## CAPTURE PROTOCOL

```
Product:             V-SMASH-L (LITE) — AI-gated fire control for counter-UAS
Customer segment:    Segment A: Specialist C-UAS operators
Core job:            Detect, track, and engage drone threats with AI-gated first-shot kill
Top 3 opportunities: O13 First-shot hit (18) | O02 Misclassification (17) | O14 Reaction time (16)
Strategy:            DOMINATE
Data confidence:     MEDIUM — ~65% [ASSUMPTION]
Validation needed:   Field interview: QĐND infantry drone engagement experience
```

---

## ODI -> PHASE 1 HANDOFF

- [x] Core job-to-be-done defined (1 clear statement)
- [x] >=10 desired outcomes mapped (22 outcomes across 8 job steps)
- [x] Opportunity scores calculated for all outcomes
- [x] Top 5 opportunities identified (scores 15-18, all UNDERSERVED)
- [ ] Primary target segment selected — **Segment A (specialist C-UAS)** <- HITL: confirm before Phase 1
- [x] UNDERSERVED outcomes -> MUST requirements (O13, O02, O14, O04, O06, O19)
- [x] SERVED outcomes -> WISH requirements (O03, O21)
- [x] VDI 2225 criteria weights pre-informed

---

*V-SMASH-L ODI Report v1.0 | 2026-02-21*
*Extracted from V-SMASH Family ODI v1.2 (Sections 1-5) | Framework: ODI (Tony Ulwick)*
*Cross-reference: V-SMASH_ODI_Report_v1.0.md (family) | V-SMASH-L_Product_Proposal_v1.0.md (P11)*
