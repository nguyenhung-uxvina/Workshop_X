---
project: V-SMASH-D
phase: 0
type: odi-report
prompt: P28
version: 1.0
created: 2026-02-21
status: draft
data_confidence: LOW (~80% ASSUMPTION)
family: V-SMASH
parent_odi: V-SMASH-L_ODI_Report_v1.0.md
---

# V-SMASH-D (Sentry Detector) — ODI Report

> **Family position:** Adjacent — non-weapon, detection-only. IRONMESH sensor node.
> **Base reference:** V-SMASH-L ODI Report v1.1 (22 outcomes for V-L). V-D has a **completely different job** from V-L — this is a standalone ODI.

---

## 1. Job-to-be-Done

### Core Functional Job

**"Continuously monitor the airspace above a protected area and reliably alert the duty officer within seconds when a drone intrusion is detected, without requiring a dedicated operator."**

This is fundamentally different from V-L's job (engage drones) and V-M's job (aim at drones). V-D's job is **detect and alert** — the response is entirely human-decided, and may not involve a weapon at all (could be evacuation, electronic countermeasure, or standby).

### Emotional Jobs

| Job | Description |
|-----|-------------|
| **Feel protected while sleeping** | "The base perimeter is watched even at 3 AM" — replaces human sentries who fatigue. |
| **Trust the alarm** | "When V-D alerts, it's real — not another bird" — FP fatigue is the primary trust destroyer. |
| **Know when it's broken** | "If V-D goes down, I know immediately" — silent failure = false sense of security = worst outcome. |

### Consumption Chain Jobs

| Job | Description |
|-----|-------------|
| **Install and forget** | Pole-mount, solar-powered, no operator station. Visit once per quarter for cleaning. |
| **Scale the perimeter** | 3 units = 360° coverage. Expandable by adding units. No central controller required for standalone. |
| **Integrate with command** | IRONMESH connectivity → COP (Common Operating Picture) at battalion/brigade level. V-D becomes a data source, not just a standalone alert box. |

---

## 2. Job Map

**Executor:** V-D system operates autonomously. Human executor is the **watch officer / duty NCO** who receives alerts and decides response.
**Context:** Military base perimeter, ammunition depot, fuel storage, critical infrastructure. 24/7 operation. Threat: surveillance drones, attack drones, unauthorized commercial drones.

| Step | Job Step | What Happens | Current Pain Points | Current Tools |
|------|----------|-------------|---------------------|---------------|
| **1. DEFINE** | Establish protected airspace | Watch officer defines the coverage area, alert zones, and response protocol. V-D is installed and configured. | No current AI detection. Manual sentry posts cover only line-of-sight at variable quality. Coverage gaps between shifts. | Human sentries, binoculars, occasionally radar ($50K+) |
| **2. LOCATE** | Detect object in monitored airspace | V-D AI continuously scans FOV. Detects moving aerial object. Pre-filters birds by size/speed/pattern. | Human sentries miss 60-80% of small drones at >200m, especially at night. Birds trigger excessive false alarms in non-AI systems. | Human eyes (day only), radar (expensive, FP-prone for small drones) |
| **3. PREPARE** | Classify detected object | V-D AI classifies: HOSTILE_DRONE / FRIENDLY_DRONE / BIRD / UNKNOWN. Computes confidence score. | No classification capability. All aerial objects are either ignored or over-reacted to. | Visual identification (requires binoculars + training) |
| **4. CONFIRM** | Apply alert threshold | If classification = DRONE and confidence ≥ threshold → generate alert. If UNKNOWN or below threshold → log but do not alert. | Binary alert systems (radar) flood with false positives. No confidence gating. | Manual observation |
| **5. EXECUTE** | Deliver alert to duty officer | V-D sends alert via Zalo/SMS/IRONMESH with: classification, confidence %, bearing, estimated range, screenshot. Within ≤3 seconds. | Alert delivery: human sentry calls by phone (≥30 sec), may not reach duty officer, no metadata. | Phone call, radio |
| **6. MONITOR** | Continue tracking after alert | V-D maintains track on detected drone. Updates bearing/range. Sends follow-up if drone crosses zone boundary. | Human sentry loses track when calling in report. No continuous tracking data. | None |
| **7. MODIFY** | Adapt to evolving situation | Multiple drones detected → multi-target alert. Drone loiters → escalation alert. Drone approaches restricted zone → priority alert. | Single sentry can only track one object. No escalation logic. | None |
| **8. CONCLUDE** | Log event, resume monitoring | Drone departs or is neutralized by response team. V-D logs event (timestamp, classification, confidence, track, response time). Returns to scanning. | No event log. No data for pattern analysis. No trend detection (recurring intrusions). | Manual log book (inconsistent) |

---

## 3. Desired Outcomes

### DEFINE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD01 | Minimize the setup and configuration time for a 3-unit perimeter kit | 7 | 3 | [ASSUMPTION] Install once, operate for years. Setup should be <4 hours for 3 units. |
| OD02 | Maximize the coverage area per unit (FOV × detection range) | 8 | 3 | [ASSUMPTION] 120° FOV × 500m = coverage per unit. 3 units = full 360°. |

### LOCATE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD03 | Minimize the false positive rate (non-drone objects triggering alerts) | 10 | 2 | [ASSUMPTION] **Kill condition depends on this.** >10 FP/day = guards ignore within 1 week. ≤5% FP target. |
| OD04 | Minimize the false negative rate (missed drone at detectable range) | 10 | 2 | [ASSUMPTION] **MAINTAIN-QUALITY.** FN at unmanned perimeter = undetected breach. Safety-critical error direction. |
| OD05 | Maximize the drone detection range in daylight conditions | 8 | 2 | [ASSUMPTION] ≥500m target. Gives response team ≥30 seconds warning at typical drone speed. |

### PREPARE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD06 | Maximize the classification accuracy (HOSTILE vs FRIENDLY vs BIRD vs UNKNOWN) | 9 | 2 | [ASSUMPTION] FR-IFF-02 family requirement. Minimum 4 classes. UNKNOWN → log only, no alert. |
| OD07 | Minimize the time from detection to classification complete | 8 | 3 | [ASSUMPTION] Classification should complete within 500ms of detection. Pre-filter birds within 100ms. |

### CONFIRM Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD08 | Maximize the configurability of alert thresholds per zone/time | 7 | 1 | [ASSUMPTION] Night = lower threshold (more sensitive). VIP visit = maximum sensitivity. Configurable per installation. |

### EXECUTE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD09 | Minimize the alert delivery latency (detection → duty officer notification) | 9 | 2 | [ASSUMPTION] ≤3 seconds target. Current phone-call process = 30+ seconds. |
| OD10 | Maximize the information richness of each alert (classification, confidence, bearing, screenshot) | 8 | 1 | [ASSUMPTION] Current: "Sir, I think I saw something." V-D: "DRONE, 87% conf, bearing 045°, 320m, [image]." |

### MONITOR Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD11 | Maximize the continuous tracking duration after initial detection | 7 | 2 | [ASSUMPTION] Drone loiters for 5-10 minutes. V-D should maintain track across FOV transitions. |
| OD12 | Minimize the silent failure risk (system down without operator knowing) | 10 | 1 | [ASSUMPTION] **MAINTAIN-QUALITY.** OD05 equivalent of V-L's O10 (HITL safety). Watchdog heartbeat every 60s. "SENTRY DOWN" = highest priority alert. |

### MODIFY Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD13 | Maximize the ability to handle multiple simultaneous drone detections | 7 | 1 | [ASSUMPTION] Swarm scenario: 3-5 drones. V-D must track all, alert with individual IDs. |
| OD14 | Maximize the escalation logic for evolving threats (loiter → approach → restricted zone breach) | 8 | 1 | [ASSUMPTION] Configurable zone rules. Drone crosses inner perimeter → escalated alert priority. |

### CONCLUDE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD15 | Maximize the quality of engagement logs for pattern analysis | 7 | 1 | [ASSUMPTION] Log every detection: timestamp, class, confidence, track, response. Feed IRONMESH analytics. |
| OD16 | Minimize the total cost of ownership for a 3-unit perimeter kit over 5 years | 9 | 2 | [ASSUMPTION] HW $4,500 + SW $7.5-15K = $12-19.5K total. vs radar: $50K+ HW + maintenance. |

### Cross-Cutting (all steps)

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OD17 | Maximize the continuous unattended operation duration (solar + battery) | 9 | 3 | [ASSUMPTION] ≥72 hours on battery in cloudy/rainy conditions. No grid power at remote sites. |
| OD18 | Maximize the environmental resilience (IP67, temperature range, wind/rain) | 8 | 3 | [ASSUMPTION] Outdoor year-round in Vietnam: 5-45°C, monsoon rain, high humidity, salt air (coastal). |
| OD19 | Maximize the night/low-light detection capability | 8 | 1 | [ASSUMPTION] V-D V1 = daylight only (12h gap). V-D V2 = IR/thermal. Night is a 50% coverage gap. |

**Total: 19 outcomes across 8 job steps + cross-cutting.**

---

## 4. Opportunity Scores

**Formula:** Opp = Importance + max(Importance − Satisfaction, 0)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OD12** | Minimize silent failure risk | 10 | 1 | **19** | 🔴 UNDERSERVED |
| 2 | **OD03** | Minimize false positive rate | 10 | 2 | **18** | 🔴 UNDERSERVED |
| 3 | **OD04** | Minimize false negative rate | 10 | 2 | **18** | 🔴 UNDERSERVED |
| 4 | **OD09** | Minimize alert delivery latency | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 5 | **OD06** | Maximize classification accuracy | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 6 | **OD16** | Minimize 5-year total cost of ownership | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 7 | **OD10** | Maximize alert information richness | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 8 | **OD14** | Maximize escalation logic | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 9 | **OD19** | Maximize night detection capability | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 10 | **OD17** | Maximize unattended operation (solar) | 9 | 3 | **15** | 🔴 UNDERSERVED |
| 11 | **OD05** | Maximize daylight detection range | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 12 | **OD02** | Maximize coverage area per unit | 8 | 3 | **13** | 🔴 UNDERSERVED |
| 13 | **OD07** | Minimize detection-to-classification time | 8 | 3 | **13** | 🔴 UNDERSERVED |
| 14 | **OD18** | Maximize environmental resilience | 8 | 3 | **13** | 🔴 UNDERSERVED |
| 15 | **OD13** | Maximize multi-drone handling | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 16 | **OD11** | Maximize continuous tracking | 7 | 2 | **12** | 🔴 UNDERSERVED |
| 17 | **OD15** | Maximize engagement log quality | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 18 | **OD08** | Maximize threshold configurability | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 19 | **OD01** | Minimize setup time | 7 | 3 | **11** | 🟡 UNDERSERVED |

**Result: 19/19 outcomes UNDERSERVED (Opp ≥10).** Like V-M, V-D addresses a market with zero existing affordable solutions. Every outcome is unmet.

### Strategic Quadrant

| Quadrant | Outcomes | Action |
|----------|----------|--------|
| **UNDERSERVED (Opp ≥10, Imp ≥8)** | OD12, OD03, OD04, OD09, OD06, OD16, OD10, OD14, OD19, OD17, OD05, OD02, OD07, OD18 | **Address — product core** |
| **UNDERSERVED (Opp ≥10, Imp <8)** | OD13, OD11, OD15, OD08, OD01 | **Address — secondary** |
| **MAINTAIN-QUALITY** | OD12 (silent failure), OD04 (false negative) — if EITHER fails, system is WORSE than no system (false sense of security) | **Never degrade** |
| **OVERSERVED** | None | — |

> **SAFETY_OVERRIDE:** V-D has NO weapon interface. No outcome involves engagement or autonomous fire. However, OD12 and OD04 are **safety-adjacent**: a V-D that silently fails or misses drones creates a **false sense of security** that is worse than having no system at all. These are flagged MAINTAIN-QUALITY, not SAFETY_OVERRIDE. No HITL override needed — V-D has no lethal capability.

---

## 5. Strategic Recommendation

### Strategy: **CREATE new market**

**Rationale:** V-D does not compete in the existing C-UAS market (fire control). It creates a NEW market segment: **affordable AI perimeter surveillance.** There are no $1,500 AI drone detection systems today. The alternative is $50K+ radar or human sentries.

1. **Reliability over performance** (OD12 = Opp 19, OD03/OD04 = Opp 18) — the top 3 outcomes are all about **trust.** A V-D that sends false alerts or silently fails is worthless. Reliability is the product.

2. **TCO disruption** (OD16 = Opp 16) — a 3-unit perimeter kit at $4,500 HW + $1,500-3,000/yr replaces a $50K radar + $5K/yr maintenance. 90% cheaper. This enables procurement by base commanders, not just central command.

3. **IRONMESH platform play** — V-D alone is a standalone alert box. V-D + IRONMESH = a networked surveillance mesh with COP, pattern analytics, and cross-base intelligence. The subscription revenue (OD16) is the business model, not hardware margin.

### Top 3 Opportunity Areas

| Priority | Area | Top Outcome | Product Response |
|----------|------|-------------|------------------|
| 1 | **System Reliability** | OD12 (Opp 19) | Watchdog heartbeat, self-diagnostic, graceful degradation. "SENTRY DOWN" = priority alert. |
| 2 | **Detection Accuracy** | OD03/OD04 (Opp 18) | ≤5% FP via bird pre-filter. ≤2% FN at ≤500m. Dual-error optimization. |
| 3 | **Alert Quality** | OD09 (Opp 16) | ≤3 sec latency, rich metadata (class, confidence, bearing, range, image). |

### V-D vs V-L Positioning

| Dimension | V-D | V-L |
|-----------|-----|-----|
| **Job** | "Watch the sky, alert me" | "Help me kill the drone" |
| **User** | Watch officer (passive) | C-UAS operator (active) |
| **Weapon** | None | Rifle with fire gate |
| **Top outcome** | OD12: Reliability (Opp 19) | O13: Hit probability (Opp 18) |
| **Revenue model** | HW thin margin + IRONMESH subscription | HW strong margin |
| **Strategy** | CREATE | DOMINATE |

### Dual-Use Market Opportunity

V-D is the first V-SMASH product saleable to **non-military** customers:
- Power plants, oil depots (drone surveillance threat)
- Government buildings (VIP protection perimeter)
- Airports (unauthorized drone detection)
- Industrial facilities (IP theft via camera drones)

Military entry → dual-use expansion is the growth trajectory. IRONMESH subscription applies to both markets.

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes for V-D Phase 1 requirements:** OD12, OD03, OD04, OD09, OD06
- **Kill condition (from P11):** FP rate > 10% after 2 weeks field tuning → KILL. Also kill if IRONMESH subscription uptake < 30% after 6 months.
- **Validation needed:** OD03 (FP rate) requires field testing at representative VN military base (bird species, weather, lighting).
- **Segment C validation:** Interview 3-5 base security officers on alert fatigue threshold and current sentry pain points.

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (Section 6.4 for preliminary outcomes) | V-SMASH-D_Product_Proposal_v1.0.md (P11)*
