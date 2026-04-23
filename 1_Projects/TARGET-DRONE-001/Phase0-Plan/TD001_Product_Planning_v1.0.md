---
created: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: TARGET-DRONE-001
status: approved
lead_product: V1-PROP-BASIC (Class A propeller, reusable)
---

# Product Planning — TARGET-DRONE-001 Aerial Target Drone System

## 1. Stimulus Classification (Step 1)

| Source | Classification |
|---|---|
| **Market** | VN air defense forces need live-fire training targets. Zero domestic supply — 100% import ($30-200K/unit). |
| **Company** | IRONMESH re-evaluation activated project. Completes train→test→assess loop. |
| **Environment** | FPV drone threat paradigm shift — AD training now critical VN military priority. |

**Stimulus:** Vietnamese military has no indigenous aerial target drone. WX can build Class A-B targets leveraging VN-AST (sea target RCS), CUAV-SIM (threat models), BB-01 (scoring). First-mover for domestic AD training market.

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase
Global market: Maturation (Banshee since 1980s). VN domestic: **Pre-Introduction** (greenfield). First-mover advantage.

### 2b. Ansoff Matrix
Product Development (new product, existing VN military market). Medium risk.

### 2c. Company Competence

| Dimension | WX Capability | Gap | Action |
|---|---|---|---|
| Technical | CNC, electronics, Unity, AI, RCS (VN-AST) | Aerodynamics, turbojet, flight test | Start Class A (propeller — no aero gap) |
| Market | VN military training | AD units (new contacts) | Leverage CUAV-SIM customer relationships |
| Financial | Self-funded | $100-200K for jet variant | Start Class A ($30-50K R&D) |
| Production | Small batch, high local content | Composite airframe | Foam-core + fiberglass (VN capability) |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|---|---|---|---|
| Autopilot (ArduPilot/Pixhawk) | TRL 6 | COTS proven [L3-STANDARDS] | Low |
| Propeller propulsion (Class A) | TRL 7 | COTS motors+props [L3-STANDARDS] | Low |
| Small turbojet (Class B) | TRL 5 | COTS micro turbines (Jetcat) [L4-ESTIMATE] | Medium |
| Parachute recovery | TRL 6 | UAV parachute systems commercial [L3-STANDARDS] | Low |
| Corner reflector RCS | TRL 7 | Proven on VN-AST-MSL-001 [L2-PROTOTYPE] | Low |
| Luneburg lens RCS | TRL 5 | Commercial products exist [L3-STANDARDS] | Medium |
| Hot nose IR signature | TRL 4 | Competitor-proven concept [L4-ESTIMATE] | Medium |
| Acoustic MDI | TRL 4 | Air Target Sweden AS-series [L4-ESTIMATE] | Medium |
| Catapult launch | TRL 5 | COTS pneumatic/bungee [L3-STANDARDS] | Low |
| CDM telemetry | TRL 3 | IRONMESH protocol [L5-ASSUMPTION] | High |
| V-SMASH integration | TRL 5 | Running in CUAV-SIM [L2-PROTOTYPE] | Low |

**PROCEED:** Class A lead product TRL ≥4 across all key tech. ✅

## 3. Need-Strength Matrix (Step 3)

Preferred search fields (★★★):
1. UAV/FPV threat simulation × flight control SW + local manufacturing
2. Scoring/MDI × BB-01 acoustic expertise
3. Live-sim correlation × CUAV-SIM SW/AI
4. Low cost/reusable × CNC airframe + local content

## 4. Portfolio Assessment (Step 4)

| Product | Market (1-5) | WX Strength (1-5) | Score | Zone |
|---|---|---|---|---|
| TARGET-DRONE Class A | 5 | 4 | 20 | **TARGET** |
| TARGET-DRONE Class B | 4 | 2 | 8 | DECISION |
| TARGET-DRONE Class C | 3 | 1 | 3 | EXIT |

## 5. Knowledge Audit (Step 5a)

**Prior research available (no gaps blocking):**
- Phase 1 Deep Dive: `3_Resources/Books & Articles/Product Portfolio/Conceptual Designs/VN_TARGET_DRONE_001_Phase1_Deep_Dive.md`
- MetaLearning: `3_Resources/Books & Articles/Engineering Design/Ch6_Worked_Examples/6.6.2.e Target_UAV_MDI_MetaLearning_Analysis.md`
- VN-AST RCS: corner reflector design, trihedral arrays [L2-PROTOTYPE]
- Archived: VN-ADTS target drone requirements
- Archived: UAV Catapult project (launch system)

All gaps accepted as [L3/L5]. No /research --deep needed.

## 6. Idea Selection (Step 6)

### Pass 1: A-F Elimination
5 ideas evaluated. 4 clear proceed (PROP-BASIC, PROP-FULL, SWARM-EXPEND, MDI-MODULE). 1 conditional (JET-STANDARD — turbojet gap, high cost).

### Pass 2: Weighted Selection

| Rank | Idea | Score | Key Strength |
|---|---|---|---|
| 1 | MDI-MODULE | 3.55 | Lowest investment, BB-01 synergy, unique |
| 2 | SWARM-EXPEND | 3.52 | FPV relevance, cheapest |
| 3 | PROP-BASIC | 3.37 | Lowest risk, fastest to fly |
| 4 | PROP-FULL | 3.22 | Full capability |
| 5 | JET-STANDARD | 2.17 | High-end, long-term |

### Step 6.5: s-Diagram
Top 3 all in upper-right quadrant. MDI-MODULE best combined R = 0.92.

## 7. Product Proposal → See separate file

## 8. Gate 0

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4 for key technologies? | Class A: all TRL ≥4 | ✅ |
| Local content ≥40%? | Airframe, electronics, integration local. Motor/autopilot import. ~60% [L4-ESTIMATE] | ✅ |
| Competitive advantage? | 60-80% cost reduction vs QinetiQ. Ecosystem integration unique. [L4-ESTIMATE] | ✅ |
| Within WX financial capacity? | V1 R&D ~$30-50K [L5-ASSUMPTION] | ✅ |
| Portfolio alignment? | Closes train→test→assess loop | ✅ |
| No IP/regulatory blockers? | Military drone ops need MOD coordination. No IP conflict. | ✅ |

**Gate 0: PROCEED**

## Appendix: CEO Decisions Record

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | Class A lead product (propeller, reusable) | 2026-04-09 | Lowest risk, fastest to fly |
| 2 | TRL table validated | 2026-04-09 | Class A all TRL ≥4 |
| 3 | Knowledge gaps accepted as L3/L5 | 2026-04-09 | Extensive prior research exists |
| 4 | All 5 ideas proceed to scoring | 2026-04-09 | Including JET conditional |
| 5 | 5-variant portfolio confirmed | 2026-04-09 | V1→V2→V3→V4→V5 sequence |
