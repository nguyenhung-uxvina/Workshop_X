---
project: VN-XUONG-UUV
phase: 0
type: product-proposal
version: 1.0
created: 2026-03-06
status: draft
data_confidence: LOW-MEDIUM (reference designs + ODI + P10 concept screening)
---

# VN-XUONG-UUV — P11 Product Proposal

## 1. Product Identity

| Field | Value |
|-------|-------|
| **Product name** | VN-XUONG-UUV (Xuong Trien Khai/Thu Hoi UUV) |
| **Product type** | UUV Launch and Recovery Tender Vessel |
| **Selected concept** | A-minus — Ultra-light Compact (revised from P10, crane 2.5t constraint) |
| **Target customer** | Seg A — Vietnamese Navy UUV Operations Team |
| **Strategy** | DOMINATE — category creation (first Vietnamese LARS product) |

---

## 2. Product Description

A **6.5-7m ultra-light aluminum monohull tender vessel** equipped with an integrated **stern ramp LARS** (Launch and Recovery System) for deploying and recovering a **550kg medium-class UUV** in Sea State 3 conditions. The vessel operates as a tender from a mother ship (naval vessel), stored on deck and lowered/hoisted by the mother ship's crane (2.5t SWL).

**Critical constraint update (2026-03-06):** Mother ship crane SWL = 2.5t. This forces:
- **Split-lift operations** — tender and UUV lifted separately (never together)
- **Lightship displacement < 2.0t** — to maintain safety margin on 2.5t crane
- **Electric LARS only** — no hydraulics (saves ~150-200kg)
- **Concept B eliminated** — too heavy. Concept revised to "A-minus" (ultra-light)
- **Fallback:** if lightship < 2.0t not achievable → tender operates independently (towed/self-transit, not stored on deck)

The LARS uses a **passive V-funnel capture** system with **USBL acoustic homing** — the UUV drives itself into the funnel, a cradle captures it, and an electric winch pulls it up the stern ramp. No robotic arms, no active grasping — simplicity and reliability over complexity.

**Core value proposition:** Enable UUV operations for the Vietnamese Navy at 20-30% the cost of imported solutions, with local manufacturing, local support, and no ITAR/export control barriers.

---

## 3. Target Specifications

### 3.1 Vessel

| Parameter | Target | Tolerance | Source |
|-----------|--------|-----------|--------|
| LOA (length overall) | 6.5 m | 6.0-7.0 m | Crane 2.5t → ultra-light |
| Beam | 2.4 m | 2.2-2.6 m | HC-1 compact |
| Depth (molded) | 1.1 m | 1.0-1.3 m | Structural calc needed |
| Draft (loaded, no UUV) | 0.4 m | 0.3-0.5 m | Hydrostatic calc needed |
| Draft (loaded, with UUV) | 0.6 m | 0.5-0.7 m | Hydrostatic calc needed |
| **Displacement (lightship)** | **1.8 t** | **1.5-2.0 t** | **HARD LIMIT — crane 2.5t SWL** |
| Displacement (ops, with UUV) | 2.6 t | 2.3-2.9 t | Vessel + UUV + crew + fuel (waterborne, not lifted) |
| Hull material | Marine aluminum 5083-H321 | — | VN shipyard standard |
| Speed (max) | 12 kn | 10-15 kn | Transit to deployment area |
| Speed (recovery ops) | 2-3 kn | 1-4 kn | UUV approach speed |
| Range | 30 nm | 20-50 nm | Tender role, refuel from mother ship |
| Endurance | 6 h | 4-8 h | Single mission |
| Crew | 2-3 | 2-3 | Helmsman + 1-2 LARS operators |
| Propulsion | Marine diesel outboard or inboard | — | Outboard saves weight |
| Engine power | 90-150 hp | 75-150 hp | Reduced for lighter vessel |

**Weight budget (Phase 1 critical deliverable):**

| Item | Target (kg) | Notes |
|------|-------------|-------|
| Hull structure (aluminum) | 900-1100 | 6.5m, must be minimum gauge |
| Engine + drive | 200-300 | Outboard preferred (lighter) |
| LARS (ramp + cradle + winch + funnel) | 200-300 | Electric, no hydraulics |
| Fuel (half load) | 50-80 | 6h endurance |
| Electrical + nav equipment | 50-80 | Minimal |
| USBL system | 15-25 | COTS |
| Misc (paint, fittings, safety) | 50-100 | |
| **Lightship total** | **1,465-1,985** | **Target: 1,800 kg** |

**Ops concept: Split-lift**
1. Crane hoists tender (1.8t) → lowers to water
2. Crane hoists UUV (550kg) → lowers onto tender's cradle (tender alongside mother ship)
3. Tender departs for mission
4. Return: crane hoists UUV (550kg) from tender → then hoists tender (1.8t)
5. Two lifts per deployment, two lifts per recovery = 4 crane cycles total

### 3.2 LARS System

| Parameter | Target | Tolerance | Source |
|-----------|--------|-----------|--------|
| UUV capacity (weight) | 550 kg | Design for 700 kg SWL | O15, growth margin |
| UUV capacity (length) | 5.0 m | 4.0-5.5 m | Cradle rail length |
| UUV capacity (diameter) | 400 mm | 300-500 mm | Cradle adjustable V-blocks |
| Ramp angle | 18 deg | 15-22 deg | Reference consensus |
| Ramp length (submerged to deck) | 3.5 m | 3.0-4.0 m | UUV length + clearance |
| Winch type | Electric | — | Weight saving (no hydraulic system) |
| Winch SWL | 1,000 kg | — | 550kg + dynamic factor 1.5 + ramp friction |
| Winch line | Dyneema 10mm | — | Light, no-corrosion, high strength |
| Winch speed | 3-8 m/min | — | Electric = slower than hydraulic |
| Funnel type | Passive V-funnel | — | Consensus 3/4 manufacturers |
| Funnel entrance width | 1.5 m | 1.2-2.0 m | Phase 1 geometry optimization |
| Funnel material | UHMWPE lined | — | UUV protection (O15) |
| Cradle type | Rail-mounted, locking pin | — | P10 F6-A |
| Cradle guide material | UHMWPE | — | No hull damage |
| LARS deck footprint | 3.5 x 2.0 m | — | O29 |
| LARS weight (total) | 400 kg | 300-500 kg | Weight budget |

### 3.3 Navigation & Recovery Aids

| Parameter | Target | Source |
|-----------|--------|--------|
| USBL system | COTS (EvoLogics, Sonardyne, or Kongsberg) | Reference consensus |
| USBL range | 500 m min | UUV approach distance |
| USBL accuracy | < 1m at 100m range | Funnel guidance |
| Recovery camera | IP67 stern-mounted (day only, IR future upgrade) | Weight/cost saving vs Concept B |
| Display | Helm-mounted, USBL overlay | O19 operator SA |
| Navigation | GPS + compass + depth sounder | Standard |
| Communications | VHF marine + UHF to mother ship | Standard |
| Sea state sensor | IMU-based wave height estimation | O09 (IRONMESH future) |

### 3.4 Stability & Safety

| Parameter | Target | Source |
|-----------|--------|--------|
| Roll damping | Bilge keels (pair, small) | Recovery stability — weight vs effect trade-off in Phase 1 |
| Stability (GZ curve) | Positive to 70 deg min | Naval architecture standard |
| Recovery ops SS limit | Sea State 3 (Hs 1.25m) | Reference consensus |
| Launch ops SS limit | Sea State 4 (Hs 2.0m) | Reference consensus |
| Crew protection | Non-skid deck, handrails, harness points | O26 |
| Fendering | HDPE/rubber stern + side | Mother ship alongside ops |
| Freshwater washdown | 100L tank + pump | O23 tropical maintenance |
| Bilge pump | Electric, automatic | Standard |
| Fire suppression | Portable extinguisher (engine space) | Standard |

### 3.5 Performance Targets

| Metric | Target | Tolerance | Source |
|--------|--------|-----------|--------|
| Launch time (command to UUV autonomous) | 15 min | 10-20 min | O11, reference |
| Recovery time (UUV surfaced to secured) | 25 min | 20-35 min | O18, reference |
| Total cycle (launch + mission gap + recovery) | 60 min | 45-90 min | User requirement |
| Capture success rate (SS 2) | > 90% first attempt | — | O14 |
| Capture success rate (SS 3) | > 70% first attempt | — | O14 |
| LARS setup time (from waterborne) | 10 min | 5-15 min | O05 |
| UUV impact load at water entry | < 2g | — | O10 |
| Mean time between LARS failures | > 200 ops | — | O08 |

---

## 4. Hard Constraints (Pass/Fail)

These are non-negotiable. Failure on any one = design rejected.

| ID | Constraint | Criterion | Source |
|----|-----------|-----------|--------|
| HC-1 | Vessel LOA x Beam must fit mother ship davit/deck | Max 8.5m x 3.0m (TBC with Navy) | O27, user confirmed |
| HC-2 | Lightship displacement must be liftable by 2.5t crane | **Max 2.0t lightship** (crane SWL = 2.5t, confirmed) | O28, user confirmed |
| HC-3 | Zero UUV hull damage during normal LARS operations | No contact with metal; all contact surfaces UHMWPE/Dyneema | O15, UUV >$100K |
| HC-4 | Crew stern deck exposure < 10 min per recovery cycle | Semi-automated capture, winch from helm station | O26 |

---

## 5. Cost Target

| Component | Estimate (USD) | Confidence |
|-----------|---------------|------------|
| Hull (6.5m aluminum, VN shipyard) | 50,000-90,000 | MEDIUM — smaller than VN-AST-MSL-001 |
| Propulsion + power (outboard diesel) | 25,000-50,000 | MEDIUM — COTS engine |
| LARS mechanical (ramp + cradle + electric winch + funnel) | 30,000-60,000 | LOW — custom design |
| Control system (helm + LARS + display) | 20,000-40,000 | MEDIUM — IRONMESH baseline |
| USBL system | 30,000-80,000 | MEDIUM — COTS pricing |
| Recovery camera | 3,000-8,000 | HIGH — COTS |
| Communications | 10,000-20,000 | MEDIUM |
| Integration + testing | 30,000-60,000 | LOW — first-of-kind |
| **Total (without UUV)** | **$198,000-408,000** | LOW |

**Target price point:** < $350K (vs $1-3M for imported equivalent)
**Cost advantage:** 15-25% of Western solutions. Smaller vessel = lower cost.

### Fallback (Path 3: Independent/towed tender)

If lightship < 2.0t not achievable:
- Remove crane-lift requirement → tender not stored on deck
- Can use heavier 8m hull with hydraulic LARS (original Concept B)
- Tender towed alongside or self-transits
- **Adds operational complexity but removes weight constraint**
- **Path 3 total: $290-560K** (original Concept B pricing)

---

## 6. Nội Địa Hóa (Local Content)

| Component | Source | Local % |
|-----------|--------|---------|
| Hull structure | VN shipyard (Ba Son, Z189, Song Thu) | 100% |
| LARS frame/ramp | VN workshop (Workshop X or partner) | 100% |
| Cradle + rails | VN workshop | 100% |
| UHMWPE guides | Import material, VN machining | 70% |
| Hydraulic power pack | Import (Bosch Rexroth, Parker) | 0% |
| Hydraulic winch | Import or VN assembly | 30-50% |
| Dyneema winch line | Import | 0% |
| Marine diesel engine | Import (Yanmar, Cummins) | 0% |
| Shaft + propeller | VN manufacture | 100% |
| USBL system | Import (EvoLogics/Sonardyne) | 0% |
| Control system | Workshop X (IRONMESH) | 90% |
| Camera system | Import | 0% |
| Electrical/wiring | VN | 100% |
| Paint/coatings | VN (International/Jotun agents) | 80% |
| **Weighted average** | — | **~65-75%** |

**Target: >= 70% nội địa hóa** (from project brief). Achievable — hull and structure dominate cost/weight.

---

## 7. Risk Register

| # | Risk | Probability | Impact | Mitigation | Owner |
|---|------|------------|--------|-----------|-------|
| R1 | Lightship > 2.0t (exceeds crane margin) | HIGH | CRITICAL — forces fallback to Path 3 (towed) | Detailed weight budget Phase 1 week 1. Target 1.8t with 200kg margin. | Workshop X |
| R2 | Funnel geometry doesn't work at SS 3 | MEDIUM | HIGH — reduces operational capability | Phase 1 simulation + Phase 2 scale model test in wave tank | Workshop X |
| R3 | Electric winch insufficient for 550kg + dynamic loads at SS 3 | MEDIUM | HIGH — recovery fails | Winch sizing calc Phase 1; if electric inadequate → forces Path 3 (hydraulic) | Workshop X |
| R4 | Solo engineer capacity (25h/week) with 3 active projects | HIGH | HIGH — schedule slip | Musk Sequence #1 confirmed. Defer BB-01/VN-AST if needed. | User |
| R5 | USBL integration with UUV | LOW-MEDIUM | HIGH — recovery impossible without it | Confirm UUV acoustic interface early in Phase 1 | User/Navy |
| R6 | 8m vessel seakeeping insufficient for crew comfort at SS 3-4 | MEDIUM | MEDIUM — reduced ops window | Bilge keels + operational limits + seakeeping analysis (partner confirmed) | Seakeeping partner |
| R7 | Cost overrun (first-of-kind) | HIGH | MEDIUM — budget pressure | Phase 3 detailed BOM before procurement commitment | Workshop X |

---

## 8. Development Roadmap

| Phase | Duration | Key Deliverables | Gate |
|-------|----------|-----------------|------|
| **Phase 0: Pre-study** | 2 weeks | ODI, P09, P10, P11, Gate 0 review | **Gate 0:** Proceed to Phase 1? |
| **Phase 1: Task Clarification** | 4-6 weeks | Requirements list, constraints, weight budget, funnel geometry feasibility, mother ship interface spec | **Gate 1:** Requirements complete + feasible? |
| **Phase 2: Conceptual Design** | 4-6 weeks | Morphological matrix, concept evaluation (VDI 2225), selected concept detailed | **Gate 2:** Concept technically feasible + affordable? |
| **Phase 3: Embodiment Design** | 8-12 weeks | Layout drawings, material selection, structural calc, LARS mechanism design, hydraulic schematic | **Gate 3:** Ready for detail design? |
| **Phase 4: Detail Design** | 8-12 weeks | Production drawings, BOM, build plan, test plan | **Gate 4:** Ready for prototype build? |
| **Prototype Build** | 12-20 weeks | Hull construction, LARS integration, sea trials | Acceptance |

**Total estimated timeline:** 9-14 months (Phase 1 to sea trial)
**Note:** Timeline assumes Musk Sequence #1 priority (confirmed). Parallel with BB-01/VN-AST will extend.

---

## 9. Success Metrics (from ODI)

| Metric | Target | How Measured | Phase Validated |
|--------|--------|-------------|-----------------|
| Recovery in SS 3 | > 70% first-attempt capture | Sea trial log | Prototype |
| UUV zero damage | 0 hull marks after 10 recovery cycles | Visual inspection | Prototype |
| Crew stern exposure | < 10 min/recovery | Stopwatch | Prototype |
| Full cycle time | < 60 min (launch + recovery) | Stopwatch | Prototype |
| Vessel lightship | < 2.0t | Weigh at shipyard | Phase 4 |
| Vessel LOA x Beam | <= 7.0m x 2.6m | Tape measure | Phase 3 |
| Cost | < $350K | Accounting | Phase 4 |
| Nội địa hóa | >= 70% | BOM analysis | Phase 4 |

---

## 10. Three-Path Decision Tree

All 3 paths open entering Phase 1. Selection at Week 2 based on trade study data.

```
    Crane SWL = 2.5t (CONFIRMED)
    Preference: stored on deck > towed
              |
    ┌─────────┼─────────┐
    v         v         v
  PATH 1    PATH 2    PATH 3
  Aluminum  RIB       Independent/Towed
  6.5-7m    7m        8m (Concept B)
  <2.0t     1.2-1.5t  No weight limit
  Electric  Electric  Hydraulic
  On deck   On deck   NOT on deck
  $198-408K $180-380K $290-560K
    |         |         |
    v         v         v
  Phase 1:  Phase 1:  Phase 1:
  Weight    Structural Towing/transit
  budget    analysis   feasibility
  Geometry  Tube life  Fuel range
  check     LARS loads Alongside ops
```

**Phase 1 Week 1-2 trade study must answer:**

| Question | Path 1 | Path 2 | Path 3 |
|----------|--------|--------|--------|
| Lightship achievable? | < 2.0t? | 1.2-1.5t (likely yes) | N/A |
| Structure for LARS loads? | Aluminum OK | RIB + reinforcement? | Aluminum OK |
| UUV geometry fits? | 6.5-7m hull | 7m hull | 8m hull (easy) |
| Tropical durability? | Good (aluminum) | Risk (tube degradation) | Good (aluminum) |
| VN manufacturing? | Yes (shipyards) | Limited (professional RIB) | Yes (shipyards) |
| Stored on deck? | Yes (preferred) | Yes (preferred) | No |
| Recovery SS ceiling? | SS 2-3 | SS 2-3 | SS 3+ |

**Selection at Phase 1 Week 2 — user HITL decision.**

---

## PROPOSAL SUMMARY

| Field | Value |
|-------|-------|
| **Product** | UUV Launch and Recovery Tender Vessel + integrated stern ramp LARS |
| **UUV** | 5m, 550kg, D=400mm torpedo-profile |
| **LARS** | Passive V-funnel + winch + USBL homing |
| **Crane SWL** | 2.5t (confirmed) |
| **3 paths open** | Path 1: 6.5m aluminum (<2.0t, on deck) / Path 2: 7m RIB (1.2-1.5t, on deck) / Path 3: 8m aluminum (towed, no limit) |
| **Recovery SS** | Sea State 2-3 (Path 1/2) or SS 3+ (Path 3) |
| **Cost range** | $180-560K depending on path |
| **Local content** | 65-75% (target >=70%) |
| **Timeline** | 9-14 months to sea trial |
| **Priority** | Musk Sequence #1 |
| **Phase 1 key decision** | Path selection at Week 2 based on trade study |
| **Next step** | Phase 1 Task Clarification (Gate 0 passed) |

---

*P11 Product Proposal v1.0 | VN-XUONG-UUV | Phase 0*
