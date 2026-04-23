---
created: 2026-03-06
updated: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v2.0
project: VN-XUONG-UUV
status: approved
gate0: PASS (2026-03-06)
gate1: PASS (2026-03-06, 3.80/4.0)
feeds_to:
  - FORGE: /odi (done), /shift, /portfolio
  - HELIX: /req (done, 107 reqs), /morpho (done, 35 SFs)
note: "v2.0 upgrades v1.0 (P11) to v3.0 schema: solution-neutral enforcement, Phase 1/2 evolution integrated, evidence tiers tagged"
supersedes: "Phase0-PreStudy/VN-XUONG-UUV_P11_Product_Proposal_v1.0.md"
---

# Product Proposal — VN-XUONG-UUV (Xuồng Triển Khai/Thu Hồi UUV)

═══════════════════════════════════════════════════════

## 1. Intended Functions (solution-neutral)

**Primary:**
- Deploy a medium-class tethered UUV (550 kg, 5 m length) from vessel deck into open water
- Recover the same UUV from open water back to vessel deck
- Manage the UUV's tether cable during all phases of operation

**Secondary:**
- Provide a stable working platform for UUV operations in open-sea conditions
- Enable UUV control and monitoring directly from the vessel during missions
- Self-transit to/from deployment area or be towed alongside a mother ship

**Auxiliary:**
- Provide a platform for post-mission UUV inspection and data transfer
- Support future upgrade to semi-automated launch/recovery operations

> **Solution-neutral check:** Zero technology names, zero component names, zero performance numbers in function statements. Functions describe WHAT, not HOW or HOW WELL. ✓

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target Value | Evidence |
|---|----------|------------|-----|-------------|---------|
| R1 | Geometry | Vessel overall dimensions fit deployment from mother ship | D | LOA ≤ 8.5 m, Beam ≤ 2.8 m | [L1-CEO] |
| R2 | Force | Vessel displacement within mother ship handling capacity | D | Lightship per crane limit analysis | [L1-CEO] |
| R3 | Safety | Zero UUV hull damage during normal operations | D | All contact surfaces = non-metallic | [L1-CEO] |
| R4 | Safety | Crew stern deck exposure minimized during recovery | D | < 10 min per recovery cycle | [L1-CEO] |
| R5 | Operation | Recover UUV in specified sea conditions | D | ≥ Sea State 3 (Hs 0.5-1.25 m) | [L4-competitive] |
| R6 | Operation | UUV accommodation for specified dimensions | D | 550 kg, L=5000 mm, D=400 mm, H=850 mm | [L1-CEO] |
| R7 | Operation | Manage tethered connection throughout mission | D | Tether range up to 25 km | [L1-CEO] |
| R8 | Operation | Control UUV from on-board station | D | Portable controller (OEM-supplied) | [L1-CEO] |
| R9 | Production | Local content meets procurement threshold | D | ≥ 50% by value | [L1-CEO] |
| R10 | Kinematics | Recovery cycle time competitive with reference systems | W | ≤ 25 min (surfaced to secured) | [L4-competitive] |
| R11 | Signal | Guide UUV into capture zone in all visibility | W | Acoustic + visual guidance | [L4-competitive] |
| R12 | Durability | Resist tropical marine environment degradation | D | 15-year service life with scheduled maintenance | [L4-competitive] |
| R13 | Ergonomics | Operable by minimum crew | D | ≤ 3 persons with clear role separation | [L1-CEO] |
| R14 | Cost | Unit cost competitive with import alternatives | D | 15-30% of equivalent import cost | [L4-competitive] |
| R15 | Maintenance | Maintainable with locally-available tools and materials | W | Standard marine tools, VN-sourced consumables | [L5-ASSUMPTION] |

> **Solution-neutral check:** No specific technology (piezo, LoRa, Unity), no component (ADC, MCU, winch brand), no algorithm names. All requirements specify WHAT performance, not HOW to achieve it. ✓

**Full requirements list:** `Phase1-Task/002_Requirements_List_v1.0.md` (107 requirements, 82D + 25W, 92% quantified)

## 3. Cost Target + Production Volume

| Field | Value | Evidence |
|-------|-------|---------|
| Unit cost target | ~$517,000 | [L5-ASSUMPTION, +/- 30%] |
| Budget ceiling (prototype) | $670,000 | $517K + 30% contingency |
| Import comparison | $1-3M (L3Harris, Saab, ECA, Atlas) | [L4-competitive] |
| Cost advantage | 15-30% of Western solutions | [L4-competitive] |
| Production volume | 1 prototype → 3-5 units (initial batch) | [L5-ASSUMPTION] |
| Target margin | ≥ 50% at batch volume | [L5-ASSUMPTION] |
| Local content target | ≥ 50% by value (estimated 48-55%) | [L5-ASSUMPTION] |
| Development timeline | ~10 months (Phase 2 → sea trial) | [L5-ASSUMPTION] |

**Cost breakdown (preliminary):**

| Component | Estimate (USD) | Confidence |
|-----------|---------------|------------|
| Hull & structure (8m aluminum) | 180,000-220,000 | [L5-ASSUMPTION] |
| LARS mechanical (ramp + cradle + winch + funnel) | 120,000-150,000 | [L5-ASSUMPTION] |
| TMS (cable drum + guide + monitoring) | 40,000-80,000 | [L5-ASSUMPTION] |
| Propulsion | 60,000-80,000 | [L4-competitive] |
| Electronics & sensors | 40,000-60,000 | [L4-competitive] |
| UUV controller integration | 10,000-20,000 | [L5-ASSUMPTION] |
| Outfitting & finishing | 30,000-50,000 | [L5-ASSUMPTION] |
| Engineering & labor | 50,000-70,000 | [L5-ASSUMPTION] |
| Contingency (10%) | ~50,000 | Standard |
| **Total** | **~$517,000** | **LOW (+/- 30%)** |

## 4. Working Principle Suggestions (OPTIONS only, not decisions)

### 4a. Hull Form

| Option | Advantage | Risk |
|--------|-----------|------|
| Monohull aluminum (deep-V) | Proven VN construction, good speed, compact beam | Roll in beam seas during recovery |
| Monohull aluminum (hard chine) | Better stability at rest, simpler construction | Rougher ride, spray in head seas |
| Monohull with bilge keels | Roll damping improves recovery stability | Added weight, drag, construction complexity |

### 4b. Launch & Recovery Mechanism

| Option | Advantage | Risk |
|--------|-----------|------|
| Stern ramp + gravity slide (launch) / winch pull-up (recovery) | Simple, proven (4/4 reference designs), gravity-assisted | Ramp occupies stern, impact at water entry |
| A-frame over stern | Controlled vertical lift, good for heavy UUV | Tall structure, heavy, blocks stern access |
| Side davit | Controlled lowering, stern free | Roll-coupled lateral loads, complex rigging |

### 4c. Capture Mechanism

| Option | Advantage | Risk |
|--------|-----------|------|
| Passive V-funnel (UUV self-homes) | Wide tolerance, no moving parts, proven (3/4 mfrs) | Requires good UUV homing, funnel occupies deck space |
| Active mechanical grab | Positive capture, works without UUV homing | Requires precision, risk of damage, complex |
| Net/bag capture | Large capture area, soft contact | Entanglement risk, slow extraction |

### 4d. Winch Power

| Option | Advantage | Risk |
|--------|-----------|------|
| Electric (VFD) | Lighter, simpler, no fluid leaks, precise speed control | Lower continuous power, may need larger motor for dynamic loads |
| Hydraulic (PTO or dedicated) | Higher power density, proven marine, smooth | Heavier system, fluid leak risk, maintenance burden |

### 4e. UUV Guidance

| Option | Advantage | Risk |
|--------|-----------|------|
| USBL acoustic homing | All-weather, proven, precise positioning | Cost ($30-80K), requires UUV acoustic integration |
| Camera-based visual guidance | Low cost, simple, intuitive for operator | Daytime only, limited in waves |
| Combined acoustic + visual | Redundant, works day/night, best SA | Higher cost, integration complexity |

### 4f. Tether Management

| Option | Advantage | Risk |
|--------|-----------|------|
| Cable drum on vessel (TMS) | Full vessel-side control of cable | Weight, space, synchronization with LARS |
| Cable drum inside UUV | No TMS weight/space on vessel | UUV heavier, cable deployed from UUV end |
| Manual cable handling | Simplest, no mechanism | Crew-intensive, slow, unsafe for 25 km |

> **Phase separation check:** §4 contains OPTIONS only. Zero Phase 2-3 specs (no algorithm names, no ADC models, no housing brands, no specific winch models). ✓

## 5. Risk Assessment + Fallbacks

| # | Risk | P | I | Fallback |
|---|------|---|---|---------|
| R1 | LARS + TMS integration on 8m vessel proves too complex | MED | HIGH | Simplify: remove TMS if UUV OEM integrates cable drum internally |
| R2 | V-funnel geometry doesn't achieve >70% first-attempt capture at SS 3 | MED | HIGH | Widen funnel entrance; accept SS 2 operational limit; add active guidance |
| R3 | Electric winch inadequate for 550 kg + wave dynamic loads | MED | HIGH | Upgrade to hydraulic winch (requires power system redesign) |
| R4 | Vessel seakeeping insufficient at SS 3 for crew safety | MED | MED | Add bilge keels; reduce ops SS limit to 2; accept reduced mission availability |
| R5 | Cost overrun beyond $670K ceiling | HIGH | MED | Descope features (remove IRONMESH automation, simplify controls); phase delivery |
| R6 | UUV OEM ICD incompatible with vessel design | LOW-MED | HIGH | Redesign interface; worst case = custom adapter between OEM controller and vessel systems |
| R7 | Solo engineer 25h/week capacity vs 10-month timeline | HIGH | MED | Defer other projects (confirmed Musk Sequence #1); hire contract support for specific tasks |
| R8 | Galvanic corrosion Al-SS joints | MED | MED | Isolation gaskets + cathodic protection; material selection Phase 3 |

## 6. Sacred Constraints (from IFR)

| # | Constraint | Basis |
|---|-----------|-------|
| SC-1 | Vessel must be compact enough to operate alongside mother ship | Physics: mother ship deck/crane geometry [L1-CEO] |
| SC-2 | UUV must not contact metal surfaces during any LARS operation | Physics: UUV hull integrity ($100K+ asset) [L1-CEO] |
| SC-3 | Crew stern deck exposure during recovery must be minimized | Safety: wave-washed stern is hazardous [L1-CEO] |
| SC-4 | Recovery system must function in sea conditions typical of operating area | Physics: Sea State 3 wave dynamics [L1-CEO] |
| SC-5 | Tether must be managed throughout 25 km mission range | Physics: cable dynamics, tension, routing [L1-CEO] |

> **Sacred constraint check:** All based on physics/safety/scope — zero technology names (no "piezo", no "electric LARS", no "aluminum"). ✓

## 7. Gate 0 Result + QC Gate Result

| Gate | Result | Date | Score |
|------|--------|------|-------|
| Gate 0 | **PASS** | 2026-03-06 | 3.9/5.0 |
| Gate 1 | **PASS** | 2026-03-06 | 3.80/4.0 |
| QC Gate | PENDING (retroactive formalization) | 2026-04-09 | — |

**Conditions carried forward:**
1. ICD from UUV OEM — **STILL BLOCKING** (ICD Template v1.3 ready, not yet sent)
2. Seakeeping analysis — partner confirmed, not yet engaged
3. Navy stakeholder interviews (S1, S2, S4) — not yet scheduled

═══════════════════════════════════════════════════════

*Product Proposal v2.0 | VN-XUONG-UUV | Pahl & Beitz §3.1 | Solution-neutral v3.0 schema*
