---
project: VN-XUONG-UUV
phase: 0a
type: ODI-report
version: 1.0
created: 2026-03-06
status: draft
data_confidence: LOW (10% L4, 90% L5)
---

# VN-XUONG-UUV — ODI Report v1.0

## Outcome-Driven Innovation Analysis: UUV Launch and Recovery Vessel

**Product Domain:** UUV launch and recovery tender vessel (LARS)
**Customer Segment:** Vietnamese Navy UUV operations crew (tender vessel operators + UUV technicians)
**Date:** 2026-03-06
**Data Confidence:** LOW — 10% L4 (competitive analysis from 4 reference designs), 90% L5 (assumptions)

---

## SECTION 1: JOB-TO-BE-DONE

### Core Functional Job

> **"Safely deploy and recover a medium-class UUV (5m, 550kg) from a tender vessel in open-sea conditions to support underwater missions"**

- Format: Verb (deploy/recover) + Object (medium-class UUV) + Context (tender vessel, open-sea)
- Solution-neutral: describes what the crew needs, not how
- Evidence: [L5: ASSUMPTION — inferred from Phase 0 pre-study + reference analysis]
- HITL Gate: **CONFIRMED** by user (2026-03-06)

### Emotional Jobs

| Type | Job | Source |
|------|-----|--------|
| Personal | Feel confident that the UUV will not be damaged during launch/recovery | [L5: ASSUMPTION — UUV cost >>$100K] |
| Personal | Feel safe on the stern deck during handling operations in waves | [L5: ASSUMPTION — splash zone hazard] |
| Social | Demonstrate to command that UUV operations can be conducted reliably without foreign support | [L5: ASSUMPTION — nội địa hóa goal] |
| Social | Be trusted as a competent LARS operator by UUV mission team | [L5: ASSUMPTION] |

### Consumption Chain Jobs

| Phase | Job | Source |
|-------|-----|--------|
| Before | Plan UUV mission including weather window for recovery | [L4: all 4 reference designs confirm recovery = weather-dependent] |
| Before | Prepare tender vessel and LARS equipment for deployment from mother ship | [L5: ASSUMPTION] |
| During | Maintain communication with UUV during subsurface mission | [L5: ASSUMPTION] |
| After | Secure UUV on deck, perform post-mission checks, transfer data | [L5: ASSUMPTION] |
| After | Maintain LARS equipment in tropical marine environment | [L4: reference designs — corrosion/biofouling critical] |

---

## SECTION 2: JOB MAP

| Step | Job Step | What Customer Does | Current Pain Points | Current Tools | Source |
|------|----------|--------------------|---------------------|---------------|--------|
| 1 | **DEFINE** | Mission commander defines UUV deployment area, mission profile, recovery window; LARS crew plans sea state requirements | No established SOP for UUV LARS ops in VN Navy. No historical data on success rates per sea state. Cannot predict recovery difficulty. | Paper mission orders, weather forecast | [L5: ASSUMPTION — new capability for VN Navy] |
| 2 | **LOCATE** | Coordinate with mother ship for deployment position; check weather window; confirm LARS equipment readiness; verify UUV status | Mother ship schedule is primary bottleneck. Weather window may close during UUV mission. No USBL tracking during transit. | Radio comms, weather reports, visual check | [L4: reference — weather window is universal constraint] |
| 3 | **PREPARE** | Lower tender from mother ship; power up LARS; load UUV onto cradle (if not pre-loaded); connect UUV for pre-mission checks; deploy USBL | Setup time 30-60 min in calm water, longer in waves. Cradle alignment with UUV is manual. Pre-mission UUV checks require deck access. | Crane from mother ship, manual handling, tools | [L5: ASSUMPTION + L4: reference cycle times] |
| 4 | **CONFIRM** | Verify LARS mechanical readiness (ramp, winch, funnel); confirm UUV mission program; check USBL lock; safety brief crew; confirm sea state within limits | Multiple go/no-go gates — any single failure aborts. Sea state assessment is subjective (visual). No automated readiness check. | Visual inspection, radio, sea state estimate | [L5: ASSUMPTION] |
| 5 | **EXECUTE — LAUNCH** | Release UUV from cradle down stern ramp into water; confirm UUV waterborne and stable; UUV begins autonomous mission | UUV water entry impact — risk of damage if ramp angle wrong or sea state too high. Controlled descent speed critical. Tail-first entry alignment. | Stern ramp, winch, hydraulic clamp | [L4: reference — launch is the easier problem] |
| 6 | **EXECUTE — RECOVER** | UUV surfaces at recovery point; tender maneuvers stern toward UUV; UUV homes via USBL into passive funnel; cradle captures UUV; winch pulls up ramp | THE HARD PROBLEM. Relative motion vessel-UUV in waves. Funnel alignment. Multiple capture attempts may be needed. Crew exposed on stern deck. | Stern ramp, passive funnel, USBL, winch | [L4: all 4 references — recovery is binding constraint] |
| 7 | **MONITOR/MODIFY** | During recovery: assess capture alignment, abort if dangerous, re-attempt; adjust vessel heading for wake shadow; communicate with UUV for re-approach | No quantified feedback on approach angle/speed. Operator relies on visual + experience. Night/low-vis recovery extremely difficult. | Visual observation, radio, USBL display | [L5: ASSUMPTION + L4: reference — semi-auto capture] |
| 8 | **CONCLUDE** | Secure UUV in cradle; perform post-recovery inspection; transfer mission data; stow LARS; return tender to mother ship; debrief + log | No standard inspection checklist. No automated damage detection. Stowing LARS in waves is secondary hazard. Freshwater washdown needed but rarely available at sea. | Manual inspection, data cable, logbook | [L5: ASSUMPTION + L4: tropical maintenance] |

### Pain Point Clusters

| Cluster | Steps | Core Issue |
|---------|-------|------------|
| A: Recovery Difficulty | 6, 7 | Recovery in waves is the binding constraint — physics problem |
| B: Weather Dependency | 1, 2, 4 | Operations limited to SS 3 — narrow weather windows |
| C: UUV Safety | 5, 6, 8 | 550kg, >$100K UUV at risk during splash zone transit |
| D: Crew Safety | 6, 7, 8 | Personnel exposed on wet stern deck in waves |
| E: No Established SOP | 1, 4, 8 | New capability — no VN Navy experience base |
| F: Maintenance in Tropics | 8 | Salt, heat, biofouling degrade LARS rapidly |

---

## SECTION 3: DESIRED OUTCOMES (DIM Format)

**Scales:** Importance 1-10 | Satisfaction 1-10
**Format:** "Minimize/Maximize the [metric] when [context]"
**Note:** Satisfaction scores are against current state = NO UUV LARS exists in VN Navy (Sat = 1 for most)

### Step 1: DEFINE

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O01 | Minimize the time required to determine go/no-go for UUV deployment based on sea state forecast | 7 | 1 | H | [L5: ASSUMPTION] |
| O02 | Maximize the accuracy of predicting whether recovery will be feasible at mission end time | 9 | 1 | H | [L4: all references — recovery weather is critical] |

### Step 2: LOCATE

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O03 | Minimize the elapsed time from mission order to tender vessel ready at deployment position | 7 | 1 | H | [L5: ASSUMPTION] |
| O04 | Minimize the dependency on mother ship availability for UUV operations scheduling | 6 | 1 | H | [L5: ASSUMPTION — tender deployed from mother ship] |

### Step 3: PREPARE

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O05 | Minimize the setup time from tender waterborne to LARS ready for UUV launch | 8 | 1 | H | [L5: ASSUMPTION] |
| O06 | Minimize the number of crew required to load UUV onto cradle | 7 | 1 | H | [L5: ASSUMPTION — 550kg = heavy manual handling] |
| O07 | Maximize the precision of UUV alignment in cradle before launch | 8 | 1 | H | [L5: ASSUMPTION — misalignment = ramp damage] |

### Step 4: CONFIRM

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O08 | Minimize the likelihood of mission abort due to LARS equipment failure | 9 | 1 | H | [L5: ASSUMPTION] |
| O09 | Maximize the objectivity of sea state assessment for go/no-go decision | 8 | 1 | M | [L5: ASSUMPTION — currently visual/subjective] |

### Step 5: EXECUTE — LAUNCH

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O10 | Minimize the impact load on UUV during water entry from stern ramp | 9 | 1 | H | [L4: reference — controlled descent critical] |
| O11 | Minimize the time from launch command to UUV autonomous in water | 7 | 1 | H | [L5: ASSUMPTION] |
| O12 | Maximize the reliability of UUV release from cradle mechanism | 9 | 1 | H | [L5: ASSUMPTION] |

### Step 6: EXECUTE — RECOVER (THE HARD PROBLEM)

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O13 | Maximize the sea state at which UUV can be reliably recovered | 10 | 1 | H | [L4: ALL 4 references — recovery SS is the binding constraint] |
| O14 | Minimize the number of capture attempts required per recovery | 9 | 1 | H | [L4: reference — multiple attempts = time + risk] |
| O15 | Minimize the risk of UUV hull damage during capture/cradle entry | 10 | 1 | H | [L5: ASSUMPTION — UUV >>$100K] |
| O16 | Minimize the relative motion between capture mechanism and UUV at moment of contact | 9 | 1 | H | [L4: reference — fundamental physics challenge] |
| O17 | Maximize the lateral alignment tolerance of the capture funnel | 8 | 1 | H | [L4: reference — passive funnel width determines success rate] |
| O18 | Minimize the time from UUV surfaced to UUV secured on deck | 9 | 1 | H | [L4: reference — 20-45 min typical] |

### Step 7: MONITOR/MODIFY

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O19 | Maximize the operator's situational awareness of UUV position relative to capture zone | 9 | 1 | M | [L4: reference — USBL + visual] |
| O20 | Minimize the time to abort and re-setup for another capture attempt | 8 | 1 | H | [L5: ASSUMPTION] |
| O21 | Maximize the ability to conduct recovery operations in low visibility (night, fog) | 7 | 1 | M | [L5: ASSUMPTION — extends operational window] |

### Step 8: CONCLUDE

| ID | Desired Outcome | Imp | Sat | Stability | Source |
|----|----------------|-----|-----|-----------|--------|
| O22 | Minimize the time to secure UUV on deck after cradle capture | 7 | 1 | H | [L5: ASSUMPTION] |
| O23 | Minimize the corrosion/biofouling degradation of LARS between missions | 8 | 1 | H | [L4: reference — tropical marine environment] |
| O24 | Minimize the number of specialist tools required for LARS maintenance | 7 | 1 | H | [L5: ASSUMPTION — nội địa hóa maintenance] |
| O25 | Maximize the ability to detect LARS equipment damage before next deployment | 8 | 1 | H | [L5: ASSUMPTION] |
| O26 | Minimize the crew exposure time on stern deck during all LARS operations | 9 | 1 | H | [L5: ASSUMPTION — safety] |

### Outcomes Summary

- Total: 26 outcomes across 8 job steps (2-6 per step)
- DIM compliant: 26/26
- Solution-neutral: 26/26
- SAFETY_OVERRIDE: No flags — human-operated LARS, no autonomous engagement
- Evidence: L4 = 10 (38%), L5 = 16 (62%)
- Stability: H = 22 (85%), M = 4 (15%), L = 0

---

## SECTION 4: OPPORTUNITY SCORES

**Formula:** Opportunity = Importance + max(Importance - Satisfaction, 0)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority | Stab | Investment Type |
|------|-----|----------------|-----|-----|-----|----------|------|-----------------|
| 1 | **O13** | Max recovery sea state | 10 | 1 | **19** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 2 | **O15** | Min UUV hull damage risk during capture | 10 | 1 | **19** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 3 | O02 | Recovery feasibility prediction accuracy | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 4 | O10 | Min UUV water entry impact load | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 5 | O12 | Max cradle release reliability | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 6 | O14 | Min capture attempts per recovery | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 7 | O16 | Min relative motion at capture | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 8 | O18 | Min time surfaced-to-secured | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 9 | O19 | Max operator SA of UUV position | 9 | 1 | **17** | UNDERSERVED | M | SOFTWARE PRIORITY |
| 10 | O26 | Min crew stern deck exposure time | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 11 | O08 | Min LARS equipment failure abort | 9 | 1 | **17** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 12 | O05 | Min setup time to LARS ready | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 13 | O07 | Max UUV cradle alignment precision | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 14 | O09 | Max sea state assessment objectivity | 8 | 1 | **15** | UNDERSERVED | M | SOFTWARE PRIORITY |
| 15 | O17 | Max funnel lateral tolerance | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 16 | O20 | Min abort/re-attempt cycle time | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 17 | O23 | Min corrosion/biofouling degradation | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 18 | O25 | Max pre-deployment damage detection | 8 | 1 | **15** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 19 | O01 | Min go/no-go decision time | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 20 | O06 | Min crew for UUV loading | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 21 | O11 | Min launch-to-autonomous time | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 22 | O21 | Max low-vis recovery capability | 7 | 1 | **13** | UNDERSERVED | M | SOFTWARE PRIORITY |
| 23 | O22 | Min post-capture securing time | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 24 | O24 | Min specialist tools for maintenance | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 25 | O03 | Min time order-to-position | 7 | 1 | **13** | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 26 | O04 | Min mother ship dependency | 6 | 1 | **11** | UNDERSERVED | H | STRUCTURAL PRIORITY |

### Strategic Quadrant

```
                    HIGH IMPORTANCE (>=7)
                         |
    UNDERSERVED          |          SERVED
    INNOVATE HERE        |          MAINTAIN QUALITY
                         |
  O13,O15        (19)   |
  O02,O10,O12    (17)   |
  O14,O16,O18   (17)    |
  O19,O26,O08   (17)    |          (none)
  O05,O07,O09   (15)    |
  O17,O20,O23   (15)    |
  O25            (15)    |
  O01,O06,O11   (13)    |
  O21,O22,O24   (13)    |
  O03            (13)    |
                         |
-------------------------+------------------------
                         |
    NOT VALUED           |          OVERSERVED
    IGNORE               |          SIMPLIFY
                         |
  O04             (11)   |          (none)
              LOW IMPORTANCE (<7)
```

**Market characterization:** Completely greenfield — no UUV LARS exists in VN Navy. 26/26 outcomes UNDERSERVED. Zero SERVED or OVERSERVED. This is a category creation, not differentiation.

---

## SECTION 5: STRATEGIC RECOMMENDATION

### 5A: Customer Segmentation

| Attribute | Seg A: Navy UUV Ops Team | Seg B: Navy MCM Unit | Seg C: Research/Survey Institute |
|---|---|---|---|
| Who | Dedicated UUV deployment crew on combat vessels | Mine countermeasure specialists | Civilian/military oceanographic survey |
| Size estimate | ~20-50 personnel (new capability) | ~50-100 personnel | ~30-50 personnel |
| Top 3 unmet outcomes | O13, O15, O26 (recovery + safety) | O13, O14, O18 (recovery speed) | O05, O23, O24 (ease of use + maintenance) |
| Current solution | None — no UUV LARS in VN | None — MCM still uses divers | Manual crane from research vessels |
| Opp concentration (0-10) | 9 | 9 | 7 |
| Size score (0-10) | 3 | 6 | 4 |
| Adoption speed (0-10) | 8 | 5 | 3 |
| Strategic fit (0-10) | 10 | 8 | 4 |

**Weighted scoring:**

| Criterion | Weight | Seg A | Seg B | Seg C |
|-----------|--------|-------|-------|-------|
| Opportunity concentration | 40% | 3.6 | 3.6 | 2.8 |
| Segment size | 30% | 0.9 | 1.8 | 1.2 |
| Adoption speed | 20% | 1.6 | 1.0 | 0.6 |
| Strategic fit | 10% | 1.0 | 0.8 | 0.4 |
| **TOTAL** | **100%** | **7.1** | **7.2** | **5.0** |

**Decision (user confirmed 2026-03-06): Seg A — Navy UUV Ops Team**

Rationale: faster adoption speed (score 8 vs 5), perfect strategic fit (score 10 vs 8) — this is the exact use case the project was initiated for. Top unmet outcomes: O13 (recovery SS), O15 (UUV damage prevention), O26 (crew safety). Secondary target: Seg B (MCM Unit) for Phase 2 variant.

### 5B: Strategy

**DOMINATE** — Create the UUV LARS category in Vietnamese Navy with full-solution product.

Rationale:
- 26/26 outcomes UNDERSERVED — zero competition in VN
- Category creation opportunity: first-mover defines the standard
- LARS that works = immediate strategic value (enables UUV missions that are currently impossible)
- Aligns with IRONMESH platform strategy

### Strategic Pillars (re-ranked per user HITL input 2026-03-06)

> **USER CONSTRAINTS (confirmed):**
> - Tau me co kich thuoc han che → xuong LARS phai nho gon
> - Kha nang cau (crane) tren tau me han che → xuong phai nhe, de ha/keo
> - Bao ve UUV va an toan thuy thu la uu tien cao
> - On dinh khi thu hoi: dung hang thu 6

| Pillar | Outcomes | Design Implication | Priority |
|--------|----------|-------------------|----------|
| **1. Compact Size** | (NEW — not in original outcomes) | Xuong LARS phai nho nhat co the. Tau me nho + crane yeu = constraint chinh. Anh huong moi quyet dinh thiet ke. | **HIGHEST — Hard constraint** |
| **2. UUV Protection** | O15 (19), O10 (17), O07 (15) | Soft capture, controlled descent, UHMWPE guides = bao ve tai san >$100K | HIGH — Phase 2-3 |
| **3. Crew Safety** | O26 (17), O08 (17) | Minimize stern deck exposure, reliable equipment, ergonomic handling | HIGH — Phase 2-3 |
| **4. Recovery Reliability** | O13 (19), O14 (17), O16 (17), O17 (15) | Funnel geometry + USBL homing. Vẫn la core value nhung compact trumps SS capability. | HIGH — Phase 2-3 |
| **5. Operational Tempo** | O18 (17), O05 (15), O20 (15) | Fast cycle time = more missions per weather window | MEDIUM — Phase 3-4 |
| **6. Stability During Recovery** | O16 (17), O13 (19) | On dinh cua xuong khi thu hoi UUV. Xep thu 6 theo user. | MEDIUM — Phase 3 |
| **7. Tropical Durability** | O23 (15), O25 (15), O24 (13) | Materials + maintenance cho dieu kien VN | MEDIUM — Phase 3 |
| **8. Situational Awareness** | O19 (17), O09 (15), O02 (17) | USBL display, sea state sensors | SOFTWARE — Phase 4 |

### New Outcomes Added (from user constraints)

| ID | Desired Outcome | Imp | Sat | Opp | Stability | Source |
|----|----------------|-----|-----|-----|-----------|--------|
| O27 | Minimize the overall length and beam of the LARS vessel to fit mother ship davit/crane constraints | 10 | 1 | **19** | H | [L1: USER CONFIRMED] |
| O28 | Minimize the displacement/weight of the LARS vessel for handling by limited mother ship crane | 10 | 1 | **19** | H | [L1: USER CONFIRMED] |
| O29 | Minimize the deck footprint required for LARS equipment on the tender vessel | 9 | 1 | **17** | H | [L1: USER CONFIRMED — derived from compact requirement] |

**Impact on rankings:** O27 and O28 tie for #1 (score 19) with O13 and O15. Compact size is now a HARD CONSTRAINT, not just a desired outcome — it gates all other design choices.

### Phase 1 Feed

| Category | Outcomes | VDI 2225 Weight |
|----------|----------|-----------------|
| **HARD CONSTRAINT** | **O27, O28 (compact + lightweight)** — khong thoa man = khong dung duoc | **Gate — pass/fail** |
| MUST (highest weight) | O15 (UUV protection), O26 (crew safety), O13 (recovery SS), O29 (LARS footprint) | 9-10 |
| MUST (high weight) | O02, O10, O12, O14, O16, O18, O19, O08 (Opp >=17) | 7-8 |
| MUST (medium weight) | O05, O07, O09, O17, O20, O23, O25 (Opp 15) | 5-7 |
| WISH | O01, O06, O11, O21, O22, O24, O03 (Opp 13), O04 (Opp 11) | 3-5 |

---

## CAPTURE PROTOCOL

```
Product domain:         UUV launch and recovery tender vessel (LARS)
Customer segment:       Vietnamese Navy UUV operations crew
Core job:               Safely deploy and recover a medium-class UUV (5m, 550kg)
                        from a tender vessel in open-sea conditions
Top 3 opportunities:    O13 (recovery sea state, 19), O15 (UUV damage prevention, 19),
                        O02 (recovery feasibility prediction, 17)
Primary target segment: Navy UUV Ops Team (Seg A) — user confirmed
Data confidence:        LOW (10% L4, 90% L5)
Validation needed:      Field interviews with Navy UUV/diving unit officers to confirm
                        I/S scores for O13, O15, O16, O18
```

---

## ODI → PHASE 1 HANDOFF CHECKLIST

- [x] Core job-to-be-done defined (1 clear statement) — CONFIRMED by user
- [x] >=10 desired outcomes mapped across 8 job steps (26 mapped)
- [x] Opportunity scores calculated for all outcomes
- [x] Top 5 opportunities identified (O13, O15, O02, O10, O12 — all score >=17)
- [x] Primary target segment selected: **Seg A — Navy UUV Ops Team** (user confirmed)
- [x] UNDERSERVED outcomes → MUST requirements list (feed to P13)
- [x] SERVED outcomes → WISH requirements list (feed to P13)
- [x] VDI 2225 criteria weights pre-informed by opportunity scores
- [ ] **PENDING:** Validate I/S scores with Navy UUV/diving unit officers
- [ ] **PENDING:** User decision on primary segment (Seg A vs Seg B)

---

*ODI Report v1.0 | VN-XUONG-UUV | Thuoc he thong IPARAG*
