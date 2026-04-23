---
project: V-SMASH-R
phase: 0
type: odi-report
prompt: P28
version: 1.0
created: 2026-02-21
status: draft
data_confidence: LOW (~85% ASSUMPTION)
family: V-SMASH
parent_odi: V-SMASH-L_ODI_Report_v1.0.md
---

# V-SMASH-R (RWS) — ODI Report

> **Family position:** Vehicle-mounted — highest ASP. Two sub-products: V-R-LITE (tripod, portable) and V-R-FULL (vehicle turret).
> **Base reference:** V-SMASH-L ODI Report v1.1. V-R shares V-L's fire control job but **vehicle mount changes the entire job map** (preparation, execution, monitoring steps differ). Standalone ODI.

---

## 1. Job-to-be-Done

### Core Functional Job

**"Detect, track, and engage drone threats from a vehicle or fixed position using a remotely operated, stabilized weapon station — achieving effective engagement while the operator remains under armor or at safe distance."**

V-R shares V-L's fire control objective but adds three critical dimensions absent from handheld: **platform motion compensation**, **remote operation** (operator not on the weapon), and **heavy weapon integration** (12.7mm, not 5.56mm).

### Emotional Jobs

| Job | Description |
|-----|-------------|
| **Stay protected while engaging** | "I can fight drones without exposing myself" — operator inside vehicle/behind cover, weapon does the aiming. |
| **Trust the remote link** | "If something goes wrong, the weapon stops" — dead-man switch + cable-cut safe state are non-negotiable. |
| **Feel the system compensates for motion** | "Vehicle is moving but the sight stays on target" — stabilization = the key differentiator vs tripod-mounted V-L. |

### Consumption Chain Jobs

| Job | Description |
|-----|-------------|
| **Rapid deploy/stow** | V-R-LITE: set up in <5 min, stow in <5 min. V-R-FULL: permanently mounted. |
| **Integrate with vehicle systems** | CAN bus connection, 24V power, no separate batteries. Vehicle provides everything. |
| **Maintain under field conditions** | 12.7mm recoil × 1,000+ rounds. Shock/vibration tolerance. Mud, dust, salt spray. |

---

## 2. Job Map

**Executor:** Vehicle gunner (remote operator inside vehicle via RCU — Remote Control Unit) OR dismounted operator behind tripod (V-R-LITE)
**Context:** Convoy patrol, checkpoint, naval patrol. Drone threat detected by crew or networked alert (IRONMESH).

| Step | Job Step | What Happens | Current Pain Points | Current Tools |
|------|----------|-------------|---------------------|---------------|
| **1. DEFINE** | Recognize drone threat while vehicle is in motion | Crew receives alert (visual, IRONMESH, or V-D sentry). Commander orders engagement. Gunner switches to C-UAS mode. | Manual turret guns cannot track small fast targets. No AI-assisted C-UAS capability exists on Vietnamese vehicles. | Vehicle-mounted machine gun, manual traverse |
| **2. LOCATE** | Slew weapon to bearing, acquire drone in sight | Gunner uses RCU joystick or IRONMESH bearing cue to slew pan/tilt toward threat. V-R AI begins scanning sector. | Manual traverse is slow (~10°/sec hand crank). Drone at 300m moves faster than manual traverse. | Hand-cranked turret, binoculars |
| **3. PREPARE** | AI detects, tracks, compensates for platform motion | V-R AI acquires drone, begins tracking. Stabilization compensates for vehicle pitch/roll/yaw. Ballistic solution computed for heavy caliber (12.7mm). | No stabilized fire control exists on Vietnamese light vehicles. Firing while moving = spray and pray. | Mk 1 eyeball + experience |
| **4. CONFIRM** | Verify target, check IFF, obtain engagement authorization | Gunner verifies classification on RCU display. Confidence indicator shown. Commander authorizes engagement. | No remote viewing capability. Gunner must physically look through open turret to visually ID target. Exposed to fire. | Physical observation through turret |
| **5. EXECUTE** | Gunner fires via dead-man trigger on RCU | Gunner holds dead-man switch + presses fire trigger. V-R AI times burst for optimal intercept. Weapon fires. Release switch = immediate cease fire. | Current turret: gunner physically exposed, manually aims, no AI timing. Hit probability on drone from vehicle ≈ 1-3%. | Manual trigger, manual aim |
| **6. MONITOR** | Maintain track post-burst, assess damage | V-R reacquires target after recoil. Assesses hit/miss via tracking. Reports to gunner via RCU display. | Cannot assess hit at 300m+ through gun smoke and vehicle vibration. | Visual observation (unreliable from vehicle) |
| **7. MODIFY** | Re-engage or shift target | If missed: V-R recomputes, slews to updated lead. If multiple targets: shift to next priority. IRONMESH coordinates with other vehicles. | Manual re-engagement: slow, inaccurate. No coordination between vehicles on same target. | Verbal radio coordination |
| **8. CONCLUDE** | Safe weapon, log engagement, resume patrol | Dead-man released → weapon safe. Engagement logged: target class, burst count, rounds expended, hit/miss, operator ID. | No engagement logging. Ammo count estimated, not measured. No AAR data. | Manual report |

---

## 3. Desired Outcomes

### DEFINE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR01 | Minimize the time from alert to weapon system ready (power on, C-UAS mode, operator at RCU) | 9 | 3 | [ASSUMPTION] Vehicle scenario: seconds count. V-R should be <15 sec from alert to tracking. |

### LOCATE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR02 | Maximize the slew rate for rapid target acquisition across full azimuth | 9 | 2 | [ASSUMPTION] ≥20°/sec target. Manual hand crank: ~10°/sec. |
| OR03 | Minimize the time from bearing cue (IRONMESH/verbal) to AI acquiring drone | 8 | 2 | [ASSUMPTION] IRONMESH provides bearing → V-R auto-slews to sector → AI acquires. Should be <5 sec total. |

### PREPARE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR04 | Maximize the stabilization accuracy (maintain tracking lock during vehicle motion) | 10 | 1 | [ASSUMPTION] **Core V-R differentiator.** 2-axis gyro stabilization. Firing from moving vehicle with AI compensation = impossible manually. |
| OR05 | Maximize the ballistic solution accuracy for heavy caliber (12.7mm) with platform motion | 9 | 1 | [ASSUMPTION] 12.7mm ballistics differ from 5.56mm (V-L). Heavier round, longer flight time, more wind effect. V-R must model 12.7mm-specific trajectory. |

### CONFIRM Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR06 | Minimize the operator exposure to hostile fire during target confirmation | 9 | 2 | [ASSUMPTION] Remote operation = operator INSIDE vehicle. Current turret: gunner's head and torso exposed. |
| OR07 | Maximize the classification confidence for engagement authorization | 9 | 2 | [ASSUMPTION] FR-IFF-01/02/03 apply. Commander needs high confidence before authorizing 12.7mm burst (collateral risk higher than 5.56mm). |

### EXECUTE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR08 | Maximize the hit probability from a moving platform at engagement range | 9 | 1 | [ASSUMPTION] Current Pk from moving vehicle vs drone ≈ 1-3%. V-R target: ≥40% at 300m. AI + stabilization = transformative. |
| OR09 | Maximize the safety of the dead-man trigger mechanism (release = immediate cease fire) | 10 | 5 | [ASSUMPTION] **MAINTAIN-QUALITY.** Standard RCWS safety pattern. Must work under all conditions including cable cut, power loss, system crash. |

### MONITOR Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR10 | Maximize the post-burst reacquisition speed (AI maintains lock through 12.7mm recoil) | 8 | 1 | [ASSUMPTION] 12.7mm recoil = 100g peak. Sight must reacquire within 2-3 frames (50-75ms). |

### MODIFY Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR11 | Maximize the multi-vehicle target coordination (IRONMESH fleet engagement) | 7 | 1 | [ASSUMPTION] 3-vehicle convoy: distribute drone targets, avoid duplicating engagement on same drone. |
| OR12 | Minimize the time to shift engagement to next priority target | 8 | 2 | [ASSUMPTION] Auto-slew to next target after current engagement complete. Manual priority override by operator. |

### CONCLUDE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR13 | Maximize the engagement data quality for AAR and fleet analytics | 7 | 1 | [ASSUMPTION] Every burst logged: target class, range, rounds, hit/miss, operator, vehicle GPS. IRONMESH fleet analytics. |

### Cross-Cutting

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OR14 | Minimize the cable-cut/signal-loss response time (weapon safe state) | 10 | 3 | [ASSUMPTION] **MAINTAIN-QUALITY.** ≤100ms from signal loss to weapon safe. Non-negotiable HITL safety requirement. |
| OR15 | Maximize the shock and vibration tolerance for vehicle environment | 9 | 2 | [ASSUMPTION] MIL-STD-810H 516.8. Road shock, off-road, recoil. Electronics and optics must survive. |
| OR16 | Maximize the weapon platform compatibility (7.62mm PKM, 12.7mm NSV/DShK) | 8 | 2 | [ASSUMPTION] Vietnamese military standard weapons. Must accommodate both calibers with cradle swap. |
| OR17 | Minimize the total unit cost for vehicle-integrated configuration | 8 | 2 | [ASSUMPTION] $8,000-12,000 target. Import equivalent (Kongsberg CROWS): $100K+. |

**Total: 17 outcomes across 8 job steps + cross-cutting.**

---

## 4. Opportunity Scores

**Formula:** Opp = Importance + max(Importance − Satisfaction, 0)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OR04** | Maximize stabilization accuracy (platform motion) | 10 | 1 | **19** | 🔴 UNDERSERVED |
| 2 | **OR08** | Maximize Pk from moving platform | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 3 | **OR05** | Maximize 12.7mm ballistic solution accuracy | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 4 | **OR02** | Maximize slew rate for target acquisition | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 5 | **OR06** | Minimize operator exposure to hostile fire | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 6 | **OR07** | Maximize classification confidence for engagement | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 7 | **OR15** | Maximize shock/vibration tolerance | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 8 | **OR01** | Minimize alert-to-ready time | 9 | 3 | **15** | 🔴 UNDERSERVED |
| 9 | **OR10** | Maximize post-burst reacquisition (12.7mm recoil) | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 10 | **OR14** | Minimize cable-cut safe-state response time | 10 | 3 | **17** | 🔴 UNDERSERVED |
| 11 | **OR03** | Minimize bearing-to-acquire time | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 12 | **OR12** | Minimize target shift time | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 13 | **OR16** | Maximize weapon platform compatibility | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 14 | **OR17** | Minimize unit cost | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 15 | **OR09** | Maximize dead-man trigger safety | 10 | 5 | **15** | 🔴 UNDERSERVED |
| 16 | **OR11** | Maximize multi-vehicle coordination | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 17 | **OR13** | Maximize engagement data quality | 7 | 1 | **13** | 🔴 UNDERSERVED |

**Result: 17/17 outcomes UNDERSERVED (Opp ≥10).** No vehicle-mounted AI C-UAS exists in Vietnamese military.

### Strategic Quadrant

| Quadrant | Outcomes | Action |
|----------|----------|--------|
| **UNDERSERVED (Opp ≥10, Imp ≥8)** | OR04, OR08, OR05, OR02, OR06, OR07, OR15, OR01, OR10, OR14, OR03, OR12, OR16, OR17, OR09 | **Address — product core** |
| **UNDERSERVED (Opp ≥10, Imp <8)** | OR11, OR13 | **Address — secondary** |
| **MAINTAIN-QUALITY** | OR09 (dead-man trigger), OR14 (cable-cut safe state) — if EITHER fails, weapon fires without human control = catastrophic | **Never degrade** |
| **OVERSERVED** | None | — |

> **SAFETY_OVERRIDE:** V-R is the HIGHEST safety-concern product in the V-SMASH family.
> - **OR09 (dead-man trigger):** Continuous operator input required. Release = immediate cease fire. This is the fundamental HITL mechanism for remote weapons.
> - **OR14 (cable-cut safe state):** Signal loss → weapon safe within 100ms. Non-negotiable.
> - **Autonomous zone boundary:** AI may TRACK, COMPUTE, SLEW. AI may NEVER fire, select targets for engagement, or override operator cease-fire.
> - All three are MAINTAIN-QUALITY and must be tested under fault injection (cable cut during burst, power loss during slew, system crash mid-engagement).

---

## 5. Strategic Recommendation

### Strategy: **DOMINATE (vehicle-mounted C-UAS segment)**

**Rationale:** V-R enters a market where current solutions cost $100K+ (Kongsberg CROWS-J, Rafael Samson). V-R at $8K-25K is a 4-10× cost disruption with competitive AI capability. But the primary strategy is DOMINATE (not DISRUPT) because the customer segment (mechanized forces, navy) values **proven reliability over low price.**

1. **Stabilization is the product** (OR04 = Opp 19) — the #1 outcome. Without stabilization, firing from a moving vehicle is fundamentally impossible against drones. V-R's AI + gyro combination is the entire value proposition.

2. **Heavy caliber fire solution** (OR05 = Opp 17) — 12.7mm has different ballistics from all other V-SMASH products. Heavier round, more wind sensitivity, longer flight time. V-R must model this correctly — not just scale V-L's 5.56mm model.

3. **HITL safety is non-negotiable** (OR09/OR14 = Opp 15/17) — remote weapons that fire without operator control are unacceptable. This is not a feature — it is a hard constraint that must be proven by test (fault injection).

### Top 3 Opportunity Areas

| Priority | Area | Top Outcome | Product Response |
|----------|------|-------------|------------------|
| 1 | **Stabilization** | OR04 (Opp 19) | 2-axis gyro + IMU + AI compensation. This is V-R's ACH thesis: AI compensates vehicle motion. |
| 2 | **Heavy Caliber FCS** | OR05/OR08 (Opp 17) | 12.7mm ballistic model, recoil compensation, burst timing optimization. |
| 3 | **HITL Safety** | OR14/OR09 (Opp 17/15) | Dead-man + cable-cut safe + autonomous zone boundary. Tested under fault injection. |

### Two-Product Opportunity Scoring

| Outcome Cluster | V-R-LITE Impact | V-R-FULL Impact |
|-----------------|-----------------|-----------------|
| Stabilization (OR04) | PARTIAL (passive, friction-damped) | FULL (gyro + IMU) |
| Operator protection (OR06) | PARTIAL (50m cable, still exposed at position) | FULL (inside vehicle) |
| Vehicle integration (OR03, OR11) | N/A (tripod-only) | FULL (CAN bus, IRONMESH fleet) |
| Cost (OR17) | FULL ($8K) | PARTIAL ($25K) |

V-R-LITE addresses 12/17 outcomes. V-R-FULL addresses 17/17. Ship V-R-LITE first for revenue.

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes for V-R Phase 1 requirements:** OR04, OR08, OR05, OR14, OR09
- **Kill condition (from P11):** V-R-LITE: setup >90 sec or weight >12 kg → fail. V-R-FULL: MTB-20 unavailable after 24 months → defer indefinitely.
- **Validation needed:** OR04 (stabilization) requires prototype test on moving vehicle (road test, not bench test). OR14 (cable-cut) requires fault injection test.
- **Segment E validation:** Interview 2-3 vehicle crew commanders on: current turret engagement against small aerial targets, willingness to use remote weapon station, CAN bus interface availability.

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (Section 6, V-R coverage) | V-SMASH-R_Product_Proposal_v1.0.md (P11)*
