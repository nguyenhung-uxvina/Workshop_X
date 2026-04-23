---
project: VN-XUONG-UUV
phase: 0
type: product-idea-generation
version: 1.0
created: 2026-03-06
status: draft
data_confidence: LOW-MEDIUM (reference designs + ODI + user constraints)
---

# VN-XUONG-UUV — P10 Product Idea Generation

## 1. Problem Abstraction

### Essential Problem Statement

> Design a **minimum-size watercraft** that can **safely deploy and recover** a 5m/550kg torpedo-profile UUV **from a small mother ship** in Sea State 3 conditions.

### Abstraction Layers

| Level | Statement | Eliminates |
|-------|-----------|-----------|
| L0 (specific) | Build an 8m aluminum tender with stern ramp + V-funnel LARS | Fixed solution |
| **L1 (functional)** | **Create a vessel-based system to transfer a 550kg UUV between deck and water** | Hull type, LARS mechanism |
| L2 (general) | Create a platform to launch/recover underwater vehicles | Vessel assumption |
| L3 (abstract) | Enable underwater mission capability from surface assets | Platform assumption |

**Working level: L1** — keeps the vessel concept (confirmed by user: tender from mother ship) but opens solution space for hull type, LARS mechanism, and layout.

---

## 2. Function Structure

### Overall Function

```
INPUT:  UUV (550kg, 5m) on deck + crew commands + sea state data
OUTPUT: UUV deployed in water (launch) OR UUV secured on deck (recovery)
ENERGY: Marine diesel/electric + hydraulic/electric actuators
SIGNAL: USBL acoustic + operator commands + sensors
```

### Sub-Functions

| # | Sub-Function | Type | Drives Outcome |
|---|-------------|------|---------------|
| F1 | Float and maneuver at sea (SS 3-4) | Primary | O27, O28 (compact, lightweight) |
| F2 | Transfer UUV from deck to water (launch) | Primary | O10 (impact), O12 (release), O11 (time) |
| F3 | Capture UUV from water (recovery) | Primary | O13 (SS), O14 (attempts), O15 (damage), O16 (relative motion) |
| F4 | Guide UUV into capture zone | Primary | O17 (tolerance), O19 (SA) |
| F5 | Pull UUV from waterline to deck | Primary | O18 (time), O22 (securing) |
| F6 | Secure UUV on deck (transit/stowage) | Primary | O15 (damage), O07 (alignment) |
| F7 | Protect crew during ops | Safety | O26 (exposure), O08 (reliability) |
| F8 | Navigate + communicate | Support | O19 (SA), O02 (prediction) |
| F9 | Deploy/recover from mother ship | Interface | O27, O28 (compact, lightweight) |
| F10 | Resist tropical marine environment | Durability | O23 (corrosion), O24 (maintenance) |

### Function Dependencies

```
F9 (mother ship interface) ──GATES──> F1 (vessel size/weight)
                                        │
                            ┌───────────┼───────────┐
                            v           v           v
                      F2 (launch)  F3 (capture)  F8 (nav/comms)
                            │           │
                            v           v
                      F6 (secure)  F4 (guide) + F5 (pull up)
                            │           │
                            └─────┬─────┘
                                  v
                           F7 (crew safety) — overlays all
                           F10 (durability) — underlays all
```

**Critical path:** F9 → F1 → F3 → F4+F5 (mother ship constraint drives vessel size, which constrains recovery system, which is the hard problem).

---

## 3. Morphological Matrix — Solution Principles

For each sub-function, multiple solution principles are identified. Sources: reference designs (L3Harris, Saab, ECA, Atlas), engineering knowledge, user constraints.

### F1: Float and Maneuver

| Solution | Description | Pros | Cons | Size Impact |
|----------|-------------|------|------|-------------|
| **F1-A** | Monohull aluminum (V-hull) | Simple, proven, compact beam, good speed | Roll in beam seas during recovery | LOA 7-9m, beam 2.5-3m |
| **F1-B** | Catamaran aluminum | Excellent stability, wide deck | Wider beam (4-5m), heavier, harder to stow on mother ship | LOA 7-8m, beam 4-5m |
| **F1-C** | RIB (Rigid Inflatable) | Lightweight, good seakeeping, soft fendering | Limited structural capacity for LARS, tube wear | LOA 7-9m, beam 2.5-3m |
| **F1-D** | HDPE monohull | Corrosion-free, impact resistant, low maintenance | Heavier than aluminum for same strength, limited stiffness | LOA 7-9m, beam 2.5-3m |

### F2: Launch UUV (Deck to Water)

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F2-A** | Stern ramp + gravity slide | Simple, proven (consensus 4/4), gravity-assisted | Ramp occupies stern, impact at water entry |
| **F2-B** | Side crane/davit | Controlled lowering, less stern dependency | Crane = heavy, roll-coupled, lateral loads on UUV |
| **F2-C** | A-frame over stern | Controlled lift-and-lower, good for heavy UUV | A-frame is tall + heavy, blocks stern access |
| **F2-D** | Moon pool (through-hull) | Zero wave exposure, calm water launch | Requires large hull opening, complex, heavy, large vessel |

### F3: Capture UUV from Water

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F3-A** | Passive V-funnel | UUV drives in, wide tolerance, no moving parts | Requires good UUV homing, funnel size = deck space |
| **F3-B** | Active mechanical grab/hook | Operator guides capture device onto UUV | Requires precision, risk of damage, complex |
| **F3-C** | Net/bag capture | Large capture area, soft contact | Entanglement risk, slow extraction, not reusable quickly |
| **F3-D** | Docking cradle (UUV drives into submerged cradle) | Calm capture below surface | Requires deep stern, complex cradle deployment |
| **F3-E** | Towed capture device (tow a funnel behind vessel) | UUV approaches from astern, vessel moves slowly | Towing adds complexity, line management |

### F4: Guide UUV into Capture Zone

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F4-A** | USBL acoustic homing (UUV homes to transponder on vessel) | Proven, precise, all-weather | Cost ($30-80K), requires UUV acoustic integration |
| **F4-B** | Visual (camera + operator guidance) | Low cost, simple | Daytime only, limited in waves, requires operator skill |
| **F4-C** | USBL + camera fusion | Redundant, works day and night | Higher cost, integration complexity |
| **F4-D** | Magnetic/inductive guide | Passive, no acoustic needed | Very short range, experimental |

### F5: Pull UUV from Waterline to Deck

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F5-A** | Electric winch + cable on rail | Simple, compact, reliable | Limited speed, cable management |
| **F5-B** | Hydraulic winch + cable | Powerful, smooth, proven for marine | Hydraulic system = weight + complexity + leak risk |
| **F5-C** | Chain drive on rail | Positive engagement, no slip | Heavier, noisy, corrosion-prone |
| **F5-D** | Manual winch/come-along | Lightest, simplest, zero power | Slow, crew fatigue, unsafe for 550kg |

### F6: Secure UUV on Deck

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F6-A** | Cradle + rail + locking pin | Simple, proven, quick lock | Custom for D=400mm UUV |
| **F6-B** | Adjustable V-blocks + straps | Adaptable to different UUVs | Slower to secure, less rigid |
| **F6-C** | Foam-lined fixed cradle | Maximum protection, passive | Only fits one UUV size |

### F9: Deploy/Recover from Mother Ship

| Solution | Description | Pros | Cons |
|----------|-------------|------|------|
| **F9-A** | Davit/crane (vessel lifted) | Standard naval practice | Requires crane SWL > vessel displacement |
| **F9-B** | Stern ramp/slipway (vessel slides off) | Works with weak crane | Mother ship needs stern ramp infrastructure |
| **F9-C** | Self-deploying (tender drives off mother ship ramp) | No crane needed for tender | Requires mother ship stern modification |
| **F9-D** | Permanent alongside (tender towed, not carried) | No lifting required | Slow, weather-dependent, loses mother ship mobility |

---

## 4. Concept Variants

Combining solution principles into 4 distinct concept variants. Selection criteria: all must satisfy HC-1 (compact) and HC-2 (lightweight).

### Concept A: "Minimum LARS" — Simplest Possible

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1 | **F1-A** Monohull aluminum | Smallest beam, proven |
| F2 | **F2-A** Stern ramp | Consensus, simple |
| F3 | **F3-A** Passive V-funnel | Proven, no moving parts |
| F4 | **F4-A** USBL homing | Non-negotiable per reference consensus |
| F5 | **F5-A** Electric winch | Simpler than hydraulic, lighter |
| F6 | **F6-A** Cradle + rail + pin | Simple, quick |
| F9 | **F9-A** Davit (vessel lifted) | Standard, but requires crane capacity |

**Character:** 7m monohull, electric-only LARS, manual-assist operations, 3-4 crew. Maximum simplicity. Electric winch limits to ~600kg SWL. No hydraulics = lighter vessel = easier to lift.

**Estimated LOA:** 7.0m | **Beam:** 2.5m | **Displacement:** 2.5-3.5t | **LARS weight:** ~200-300kg

**Strengths:** Lightest, simplest, cheapest, easiest to maintain. Best fit for HC-1 (compact) and HC-2 (lightweight).
**Weaknesses:** Electric winch slower, monohull rolls during recovery (affects O13, O16), limited growth for heavier UUVs. SS 2-3 recovery ceiling.

---

### Concept B: "Optimized Compact" — Best Balance

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1 | **F1-A** Monohull aluminum (with bilge keels) | Compact + stability enhancement |
| F2 | **F2-A** Stern ramp | Consensus |
| F3 | **F3-A** Passive V-funnel (optimized geometry) | Wider entrance, UHMWPE guides |
| F4 | **F4-C** USBL + camera fusion | Redundant guidance, night capability |
| F5 | **F5-B** Hydraulic winch | More power, smoother control for 550kg |
| F6 | **F6-A** Cradle + rail + pin | Proven |
| F9 | **F9-A** Davit (vessel lifted) | Standard |

**Character:** 8m monohull with bilge keels for roll damping, hydraulic LARS, semi-automated operations, 3 crew. Balanced between capability and size. Funnel geometry optimized for D=400mm UUV at SS 3.

**Estimated LOA:** 8.0m | **Beam:** 2.8m | **Displacement:** 3.5-4.5t | **LARS weight:** ~350-500kg

**Strengths:** Hydraulic power handles 550kg smoothly, bilge keels improve recovery stability, camera adds night capability, funnel optimization for specific UUV. Best balance of all 8 pillars.
**Weaknesses:** Heavier than Concept A (HC-2 tension), hydraulic system adds maintenance burden, higher cost.

---

### Concept C: "Stable Platform" — Catamaran

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1 | **F1-B** Catamaran aluminum | Superior stability for recovery ops |
| F2 | **F2-A** Stern ramp (centerline) | Between hulls |
| F3 | **F3-A** Passive V-funnel | Proven |
| F4 | **F4-A** USBL homing | Standard |
| F5 | **F5-B** Hydraulic winch | Power needed |
| F6 | **F6-A** Cradle + rail + pin | Standard |
| F9 | **F9-A** Davit (vessel lifted) | Requires larger crane |

**Character:** 7.5m catamaran with LARS between hulls. Excellent stability (nearly zero roll) makes recovery much easier. Wide deck for crew operations. But: wider beam (4-5m) creates mother ship stowage problem.

**Estimated LOA:** 7.5m | **Beam:** 4.0-4.5m | **Displacement:** 3.5-5.0t | **LARS weight:** ~400-500kg

**Strengths:** Best stability during recovery (Pillar 6 = excellent), widest safe working deck (Pillar 3), recovery in SS 3+ more reliable. Best O13, O14, O16 scores.
**Weaknesses:** **FAILS HC-1 (compact)** — 4.5m beam likely exceeds mother ship davit/deck constraints. Heavier = HC-2 tension. More expensive hull construction. Harder to handle alongside mother ship.

---

### Concept D: "Lightweight RIB" — Minimum Weight

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1 | **F1-C** RIB (rigid inflatable) | Lightest hull option |
| F2 | **F2-A** Stern ramp (compact) | Through transom |
| F3 | **F3-A** Passive V-funnel (compact) | Reduced size funnel |
| F4 | **F4-A** USBL homing | Standard |
| F5 | **F5-A** Electric winch | Weight saving |
| F6 | **F6-B** Adjustable V-blocks + straps | Lighter than full cradle |
| F9 | **F9-A** Davit (vessel lifted) | Lightest = easiest to lift |

**Character:** 8m RIB with reinforced aluminum deck structure for LARS mounting. Inflatable tubes provide natural fendering and buoyancy reserve. Lightest option but structural questions for 550kg LARS loads.

**Estimated LOA:** 8.0m | **Beam:** 2.8m | **Displacement:** 2.0-3.0t | **LARS weight:** ~200-300kg

**Strengths:** Lightest vessel (best HC-2), good seakeeping from inflatable tubes, natural shock absorption, easy to lift onto mother ship. Tubes act as fendering during UUV handling.
**Weaknesses:** Tube puncture risk from LARS operations, limited structural hardpoints for winch/ramp loads, tube degradation in tropical sun, higher maintenance, professional-grade RIB construction required. Questionable whether tubes survive repeated UUV contact.

---

## 5. Concept Screening (Pugh Matrix)

**Datum:** Concept A (simplest) — all others compared to A.

| Criterion | Source | Wt | A (datum) | B | C | D |
|-----------|--------|-----|-----------|---|---|---|
| HC-1: Compact (LOA x Beam) | O27 | Gate | 0 | - | **--** | 0 |
| HC-2: Lightweight | O28 | Gate | 0 | - | - | + |
| UUV protection | O15, O10 | 10 | 0 | + | + | - |
| Crew safety | O26 | 9 | 0 | + | + | 0 |
| Recovery max SS | O13 | 10 | 0 | + | ++ | 0 |
| Capture success rate | O14, O16, O17 | 9 | 0 | + | ++ | 0 |
| Launch reliability | O10, O12 | 8 | 0 | 0 | 0 | 0 |
| Operational tempo | O18, O05, O20 | 7 | 0 | + | 0 | - |
| Tropical durability | O23, O24 | 7 | 0 | 0 | 0 | - |
| LARS footprint | O29 | 8 | 0 | 0 | - | 0 |
| Manufacturing complexity | Cost | 6 | 0 | - | -- | 0 |
| Mother ship interface | F9 | 8 | 0 | 0 | -- | + |

**Scoring: ++ = much better, + = better, 0 = same, - = worse, -- = much worse**

### Screening Results

| Concept | + count | - count | Net | Gate Pass? | Verdict |
|---------|---------|---------|-----|------------|---------|
| **A: Minimum LARS** | datum | datum | 0 | YES | CARRY FORWARD |
| **B: Optimized Compact** | 5+ | 2- | **+3** | YES (marginal HC-2) | **CARRY FORWARD** |
| C: Stable Platform (Cat) | 4+ (2x++) | 5- (2x--) | -1 | **FAILS HC-1** | **ELIMINATE** |
| D: Lightweight RIB | 2+ | 3- | -1 | YES | CARRY FORWARD (conditional) |

### Gate Analysis

- **Concept C (Catamaran): ELIMINATED** — 4-4.5m beam fails HC-1 (compact). Despite excellent stability and recovery capability, it physically cannot fit mother ship constraints. This is a hard kill.
- **Concept D (RIB): CONDITIONAL** — Structural adequacy for 550kg LARS loads on inflatable hull is unproven. Carry forward only if Phase 1 structural analysis confirms feasibility. Risk: HIGH.

---

## 6. Refined Shortlist

### Carry Forward to P11 (Product Proposal)

| Priority | Concept | Rationale |
|----------|---------|-----------|
| **#1** | **B: Optimized Compact** | Best net score (+3), satisfies all gates (marginal HC-2 but manageable with weight budget), best balance across all 8 pillars. Hydraulic LARS handles 550kg properly. |
| **#2** | **A: Minimum LARS** | Fallback if B exceeds weight budget. Simplest, lightest, cheapest. Sacrifices recovery capability for compactness. |
| **Conditional** | D: Lightweight RIB | Only if structural analysis confirms LARS loads on RIB. High-risk/high-reward for HC-2. |

### Key Trade-off: Concept A vs B

| Dimension | A: Minimum | B: Optimized | Decision Driver |
|-----------|-----------|-------------|-----------------|
| Displacement | 2.5-3.5t | 3.5-4.5t | Mother ship crane SWL |
| Recovery SS | 2-3 | 3 | Mission availability |
| LARS power | Electric only | Hydraulic | Winch speed + control smoothness |
| Night recovery | No | Yes (camera) | Operational window |
| Cost estimate | $200-350K | $300-500K | Budget |
| Crew | 3-4 | 3 | Manning |
| Growth potential | Limited | Good (hydraulic headroom) | Future UUV variants |

**Recommendation:** Start with **Concept B** as primary. If mother ship crane SWL is confirmed < 4t, fall back to **Concept A** and accept reduced recovery capability.

---

## 7. Critical Questions for Phase 1

These must be answered before committing to a concept:

| # | Question | Drives | Method |
|---|---------|--------|--------|
| Q1 | Mother ship crane SWL (exact tonnage)? | A vs B selection | User/Navy input |
| Q2 | Mother ship davit/deck space (exact dimensions)? | Max LOA x Beam | User/Navy input |
| Q3 | Can 550kg UUV be pre-loaded on tender before lowering to water? | LARS cycle time, deck layout | Ops concept analysis |
| Q4 | Electric winch: can it handle 550kg + dynamic loads (wave surge) on 15-20deg ramp? | A viability | Engineering calc (Phase 1) |
| Q5 | Funnel entrance width vs vessel beam — is 2.8m beam enough for passive V-funnel for D=400mm UUV? | Funnel geometry feasibility | Engineering calc (Phase 1) |
| Q6 | Bilge keel effectiveness on 8m monohull for roll damping during recovery at SS 3? | Recovery reliability | Seakeeping analysis (partner) |

---

## 8. Innovation Opportunities (Beyond Reference Designs)

Ideas that go beyond what L3Harris/Saab/ECA/Atlas do — potential differentiation:

| # | Idea | Addresses | Risk | Phase |
|---|------|-----------|------|-------|
| I1 | **IRONMESH integration** — automated sea state go/no-go using IMU + wave sensor | O02, O09 | LOW (software) | Phase 4 |
| I2 | **Retractable funnel** — V-funnel folds flat when not in recovery mode, freeing deck space | O29, O27 | MEDIUM (mechanism) | Phase 3 |
| I3 | **UUV-to-vessel comms via USBL data channel** — UUV reports its own approach trajectory, vessel adjusts heading | O16, O14 | MEDIUM (integration) | Phase 3-4 |
| I4 | **Modular LARS cassette** — entire ramp+cradle+funnel as bolt-on module, deployable on different vessels | Reuse, flexibility | LOW (design philosophy) | Phase 2 |
| I5 | **Passive roll damping tank** (anti-roll) — small free-surface tank tuned to vessel roll period for recovery stability | O13, O16 | MEDIUM (naval architecture) | Phase 3 |
| I6 | **Stern notch hull form** — transom notch creates calm capture pool behind vessel | O16, O13 | HIGH (hull design) | Phase 2-3 |

---

## HANDOFF TO P11

```
Concepts shortlisted:  B (primary), A (fallback), D (conditional)
Eliminated:            C (fails HC-1 — beam too wide)
Primary recommendation: Concept B — 8m aluminum monohull, hydraulic LARS,
                       passive V-funnel, USBL+camera, bilge keels
Key risk:              Displacement (3.5-4.5t) vs mother ship crane SWL
Innovation potential:  I2 (retractable funnel), I4 (modular cassette), I6 (stern notch)
Phase 1 critical Qs:   6 questions (Q1-Q6) must be answered
```

---

*P10 Product Idea Generation v1.0 | VN-XUONG-UUV | Phase 0*
