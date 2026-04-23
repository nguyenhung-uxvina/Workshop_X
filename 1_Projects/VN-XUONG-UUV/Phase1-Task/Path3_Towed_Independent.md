---
project: VN-XUONG-UUV
phase: 1
type: trade-study
variant: path-3-towed
version: 1.0
created: 2026-03-06
status: draft
---

# PATH 3: Tender Operates Independently (Towed / Self-Transit)

> **Core Concept:** The tender is NOT stored on the mother ship deck. It operates as an independent vessel — towed alongside, towed astern, or self-transiting from a nearby port. The mother ship crane (SWL 2.5t) is used ONLY for UUV transfer (550 kg), never for lifting the tender itself.

> **Key Implication:** NO weight limit on tender. Full Concept B (8m aluminum, hydraulic LARS) is achievable without compromise.

---

## 1. Vessel Concept

Full Concept B from P10, without the weight constraints that cripple Paths 1 and 2.

| Parameter | Specification | Rationale |
|-----------|--------------|-----------|
| Hull | 8.0 m aluminum monohull, 5083-H321 | Marine-grade Al-Mg alloy, proven corrosion resistance |
| Hull form | Deep-V hull, 18-22 deg deadrise | SS 3-4 operation, soft ride in chop |
| Beam | 2.8 m | Wider than Path 1 (2.2m) — better stability, wider funnel |
| Bilge keels | Welded aluminum, 300mm depth x 2.5m length | Roll damping for recovery ops |
| Helm station | Semi-enclosed (hardtop + windscreen + side panels) | Crew protection for extended missions (8-12 hr) |
| Engine | Inboard marine diesel, 150-200 hp | Durability for extended ops, lower RPM, longer life than outboard |
| Transmission | Marine gearbox + shaft drive | More robust than jet drive for towing/low-speed ops |
| Propeller | Fixed pitch, 4-blade, protected by skeg | Reliability, towing thrust |
| LARS | Full hydraulic system | No weight limit — use the best system, not the lightest |
| Sensors | USBL transponder + IR camera + sea state sensor | Full situational awareness for UUV recovery |
| Navigation | GPS/GLONASS, radar, AIS, VHF, chart plotter | Independent transit capability (Option 3B) |

**Why inboard diesel over outboard?**
- Path 3 tender may operate independently for 8-12 hours
- Inboard diesel: 5,000-10,000 hr service life vs outboard: 1,500-3,000 hr
- Better fuel efficiency at cruise speed
- Lower noise/vibration (crew comfort on long missions)
- Shaft drive more robust for towing operations
- [ASSUMPTION] Suitable marine diesel (Yanmar, Cummins) available in Vietnam market

---

## 2. Weight Budget

No hard weight limit — the tender is never lifted by the crane. However, displacement affects towing resistance, fuel consumption, and handling.

### 2.1 Detailed Weight Breakdown

| Item | Min (kg) | Max (kg) | Notes |
|------|----------|----------|-------|
| **Hull (8m, 5083-H321)** | 1200 | 1600 | Plate thickness 5-8mm, frames, transom |
| **Helm station structure** | 80 | 120 | Hardtop, windscreen, side panels |
| **Engine (inboard diesel)** | 250 | 350 | Yanmar 6LY3-STP (150hp, 285kg) or similar |
| **Gearbox + shaft + propeller** | 60 | 100 | Marine gearbox ~40kg, shaft + strut ~30kg |
| **Fuel tank (300L, aluminum)** | 25 | 35 | [ASSUMPTION] 300L capacity for extended range |
| **Fuel (300L diesel)** | 252 | 255 | Diesel density 0.84-0.85 kg/L |
| **LARS — Stern ramp** | 100 | 150 | Hinged aluminum ramp, 1.5m wide x 2.5m long |
| **LARS — Cradle + rails** | 80 | 100 | UUV cradle with V-blocks, rail track system |
| **LARS — Hydraulic winch** | 80 | 120 | 1000 kg SWL, 5-10 m/min line speed |
| **LARS — Hydraulic power pack** | 60 | 100 | Electric motor + pump + reservoir (15-20L) |
| **LARS — V-funnel** | 60 | 80 | Optimized geometry, wider than Path 1 (beam = 2.8m) |
| **LARS — Piping, valves, reservoir** | 40 | 60 | Marine-grade hoses, directional valves |
| **Navigation / electronics** | 40 | 60 | GPS, radar, AIS, chart plotter, VHF |
| **Electrical system** | 40 | 60 | Batteries (2x 100Ah), alternator, panel, wiring |
| **IR camera + display** | 15 | 25 | Thermal camera for night recovery |
| **USBL transceiver** | 15 | 25 | Sonardyne/EvoLogics or equivalent |
| **Sea state sensor** | 5 | 10 | IMU-based wave height estimation |
| **Crew (3 persons)** | 225 | 270 | 75-90 kg/person |
| **Crew provisions (8-12 hr)** | 15 | 25 | Water, food, first aid |
| **Safety equipment** | 30 | 50 | Life jackets (3), flares, fire extinguisher, bilge pump |
| **Towing gear (Option 3A)** | 20 | 40 | Tow bridle, chafe gear, quick-release |
| **Communications (extended range)** | 10 | 20 | VHF + satellite phone or HF radio |
| **Misc (fittings, fenders, lines)** | 30 | 50 | Cleats, bollards, fender system |

### 2.2 Displacement Summary

| Condition | Min (kg) | Max (kg) | Typical (kg) |
|-----------|----------|----------|--------------|
| **Lightship** (hull + engine + LARS + systems, no fuel/crew) | 2160 | 2945 | ~2550 |
| **Operational** (lightship + fuel + crew + provisions) | 2672 | 3530 | ~3100 |
| **Full load with UUV** (operational + UUV 550kg) | 3222 | 4080 | ~3650 |
| **Maximum displacement** (full load + margins) | 3500 | 4500 | ~4000 |

[ASSUMPTION] Hull weight 1200-1600 kg based on similar 8m aluminum workboats (e.g., Alnmaritec, Alicat, Naiad). Actual weight depends on plate thickness, framing density, and builder.

**Comparison with Path 1/2:**

| Parameter | Path 1 (6.5m) | Path 2 (7.2m) | Path 3 (8.0m) |
|-----------|---------------|---------------|---------------|
| Crane lift limit | 2500 kg | 2500 kg | N/A |
| Lightship target | <1500 kg | <2000 kg | ~2550 kg |
| Full load w/ UUV | ~2300 kg | ~2800 kg | ~3650 kg |
| Weight margin | Critical | Tight | Comfortable |
| LARS type | Electric (lightweight) | Electric/hybrid | Full hydraulic |

Path 3 eliminates the weight constraint entirely. Every design decision is driven by capability, not by mass budget.

---

## 3. Geometry / Layout

### 3.1 UUV-to-Hull Ratio

| Parameter | Path 1 (6.5m) | Path 2 (7.2m) | Path 3 (8.0m) |
|-----------|---------------|---------------|---------------|
| UUV length | 5000 mm | 5000 mm | 5000 mm |
| Hull length | 6500 mm | 7200 mm | 8000 mm |
| UUV/Hull ratio | 77% | 69% | **62.5%** |
| UUV overhang | Likely | Marginal | **None** |

62.5% is a comfortable ratio. The 5m UUV fits entirely within the hull envelope with room to spare.

### 3.2 Longitudinal Layout

```
[STERN]                                                              [BOW]
|<--- Ramp --->|<--- Working Deck --->|<--- Helm --->|<-- Foredeck -->|
|    3500 mm   |      2500 mm         |   1500 mm    |    500 mm      |
|              |                      |              |                |
|  V-funnel    |  Cradle + Rails      |  Console     |  Anchor        |
|  Ramp hinge  |  Winch              |  Instruments |  Tow point     |
|  Hydraulic   |  HPU (under deck)   |  Crew seats  |  Fairlead      |
|  cylinders   |  Tool storage       |  Electronics |                |
|              |  Equipment lockers  |  Comms       |                |
```

### 3.3 Cross-Section at Working Deck

```
        2800 mm beam
|<-------------------------->|
|                            |
|   Gunwale   Working Deck   Gunwale   |
|   300mm  |<-- 2200 mm -->|  300mm    |
|          |                |          |
|          |   UUV cradle   |          |
|          |   D=400mm      |          |
|          |   H_max=850mm  |          |
|          |                |          |
|   Port   |   Centerline   |   Stbd   |
|   locker |                |  locker  |
```

### 3.4 V-Funnel Geometry

With 2.8m beam (vs 2.2m on Path 1), the funnel can be significantly wider:

| Parameter | Path 1 | Path 3 | Benefit |
|-----------|--------|--------|---------|
| Max funnel width | ~1800 mm | ~2400 mm | +33% capture zone |
| Funnel mouth opening | ~1200 mm | ~1600 mm | Easier UUV entry |
| Funnel taper angle | ~15 deg | ~12 deg | Gentler guidance |
| UUV diameter | 400 mm | 400 mm | Same target |
| Width-to-UUV ratio | 3.0:1 | 4.0:1 | More forgiving alignment |

Wider funnel = higher probability of first-pass capture at SS 3. This is one of Path 3's strongest advantages.

### 3.5 Deck Space Comparison

| Feature | Path 1 | Path 3 | Notes |
|---------|--------|--------|-------|
| Working deck area | ~3.0 m2 | ~5.5 m2 | +83% more workspace |
| Tool storage | Minimal | Port/stbd lockers | Hydraulic tools, spares |
| Equipment stowage | Almost none | Under-deck + lockers | Tow gear, USBL spare, lines |
| Crew movement | Constrained | Comfortable | Safety during LARS ops |

---

## 4. Operational Concept — THE KEY DIFFERENCE

This section defines what makes Path 3 fundamentally different from Paths 1 and 2. The tender is not a ship-stored asset — it is an independent vessel that rendezvous with the mother ship for UUV operations.

### 4.1 Option 3A: Towed Alongside / Astern Mother Ship

**Concept:** Tender is towed by the mother ship during transit. At the operations area, tender casts off, receives UUV via crane, conducts UUV ops, returns UUV, and resumes towing.

**Operational Sequence:**

| Step | Action | Duration | Notes |
|------|--------|----------|-------|
| 1 | Tender crew boards at port, starts engine | 10 min | Pre-deployment checks |
| 2 | Tow line connected, tender towed to ops area | Hours | Speed 8-12 kn, crew aboard or unmanned |
| 3 | At ops area: tender casts off tow | 5-10 min | Quick-release tow hook |
| 4 | Tender comes alongside mother ship | 10-15 min | Fender-to-fender, spring lines |
| 5 | Crane lifts UUV from mother ship, lowers onto tender cradle | 15-20 min | 550 kg load, well within 2.5t SWL |
| 6 | Tender secures UUV, casts off | 10 min | Cradle clamps engaged |
| 7 | Tender transits to launch point | 15-30 min | 1-5 nm from mother ship |
| 8 | UUV launch via stern ramp | 10-15 min | Hydraulic winch controlled descent |
| 9 | UUV mission | 1-8 hr | Tender loiters or tracks via USBL |
| 10 | UUV recovery via V-funnel | 15-30 min | Approach from astern, funnel capture |
| 11 | Tender returns alongside mother ship | 15-30 min | |
| 12 | Crane lifts UUV from tender to mother ship | 15-20 min | |
| 13 | Tow line reconnected, resume transit | 10-15 min | |

**Total UUV operation cycle: ~2-4 hours** (excluding UUV mission time)

**Towing Sub-Options:**

| Sub-option | Description | Pro | Con |
|------------|-------------|-----|-----|
| Alongside tow | Tender secured to mother ship side via spring lines + breast lines | Short connection, easy crew transfer | Vessel interaction in waves, fender damage, restricted to lower SS |
| Short scope astern | 30-50m tow line astern | Less vessel interaction | Yaw/surge in following seas, risk of overrun |
| Long scope astern | 100-200m tow line astern | Best sea behavior | Long line management, slow to connect/disconnect |

**Manning during tow:**
- **Manned tow** [RECOMMENDED for SS 1-3]: 1 crew member aboard tender during tow. Can monitor bilge, adjust fenders, maintain readiness.
- **Unmanned tow** [SS 1-2 only]: Tender towed empty. Crew transfers via mother ship workboat or alongside at ops area. Reduces crew fatigue but adds transfer time.
- [ASSUMPTION] Navy will likely require manned tow for safety reasons.

**Assessment:**

| Criterion | Rating | Notes |
|-----------|--------|-------|
| Feasibility | FEASIBLE | Standard naval practice for small craft |
| Complexity | MODERATE | Tow line management, weather-dependent |
| Response time | FAST | Tender already on-scene, 30-45 min to deploy UUV |
| Weather limit | SS 4 transit, SS 3 ops | Towing in SS 5 not recommended for 8m vessel |
| Risk level | MODERATE | Tow line failure, collision, crew fatigue |

---

### 4.2 Option 3B: Self-Transit from Port

**Concept:** Tender is based at the nearest port to the operations area. Mother ship radios tender when UUV ops are needed. Tender self-transits to rendezvous, receives UUV, conducts ops, returns UUV, and returns to port.

**Operational Sequence:**

| Step | Action | Duration | Notes |
|------|--------|----------|-------|
| 1 | Mother ship requests tender via radio/sat-phone | — | Advance notice: ideally 4-8 hr |
| 2 | Tender crew prepares, conducts pre-departure checks | 30-60 min | Fuel, engine, LARS, comms |
| 3 | Tender departs port, self-transits to rendezvous | 2-5 hr | 25-50 nm at 12-15 kn |
| 4 | Tender arrives alongside mother ship | 10-15 min | |
| 5 | Crane loads UUV onto tender | 15-20 min | Same as 3A |
| 6-11 | UUV launch, mission, recovery | 2-10 hr | Same as 3A |
| 12 | Crane returns UUV to mother ship | 15-20 min | |
| 13 | Tender returns to port | 2-5 hr | |

**Total cycle: 6-20+ hours** (including transit both ways)

**Range/Endurance Requirements:**

| Parameter | Value | Basis |
|-----------|-------|-------|
| Operational radius | 50 nm | [ASSUMPTION] Maximum distance port-to-ops area |
| Round-trip transit | 100 nm | |
| Loiter during UUV mission | 10-30 nm equivalent fuel | 1-4 hr at 8-10 kn |
| Reserve (10%) | 13 nm | |
| Total range needed | ~140 nm | |
| Cruise speed | 12-15 kn | Fuel-efficient cruise |
| Fuel consumption at cruise | 30-50 L/hr | [ASSUMPTION] 150-200hp diesel at 60-70% load |
| Endurance on 300L | 6-10 hr | |
| Range on 300L | 72-150 nm | |
| Sufficient? | MARGINAL to YES | 300L covers 50nm radius ops; 400-500L recommended for margin |

[ASSUMPTION] Fuel consumption estimates based on comparable marine diesels (Yanmar 6LY series, Cummins QSB). Actual consumption depends on hull form, loading, sea state.

**Recommendation:** Increase fuel capacity to 400-500L for Option 3B to ensure adequate margin. Additional 100-200L adds only 85-170 kg — trivial for Path 3.

**Port Infrastructure Requirements:**

| Requirement | Detail | Availability in Vietnam |
|-------------|--------|------------------------|
| Berthing space | 8m alongside berth | Most naval ports: YES |
| Fuel supply | Marine diesel | Most naval ports: YES |
| Shore power | 220V for battery charging | YES |
| Covered storage | Protect electronics/LARS from weather | Some ports: YES |
| Crew quarters | Rest between missions | If co-located with naval base: YES |
| Maintenance facility | Basic marine workshop | Major naval ports: YES |

**Assessment:**

| Criterion | Rating | Notes |
|-----------|--------|-------|
| Feasibility | FEASIBLE | Standard for coastal patrol/workboat ops |
| Complexity | LOW (operationally) | No towing, independent vessel |
| Response time | SLOW (2-5 hr transit) | Cannot respond immediately |
| Weather limit | SS 4 transit, SS 3 ops | Transit in rough weather adds crew fatigue |
| Risk level | LOW-MODERATE | Independent vessel risk, crew fatigue |

---

### 4.3 Option 3C: Deployed via Mother Ship Stern Ramp

**Concept:** If the mother ship has a stern ramp or slipway (some amphibious, patrol, or research vessels do), the tender can drive off/on the ramp. Crane used only for UUV, not tender.

**Requirements:**

| Requirement | Detail | Likelihood |
|-------------|--------|------------|
| Stern ramp width | > 3.0 m (tender beam 2.8m + clearance) | Low — most VN Navy vessels lack this |
| Ramp capacity | > 4.5 t (full load displacement) | Depends on vessel class |
| Ramp angle | < 15 deg for safe drive-on/drive-off | Variable |
| Deck space (stowed) | 8m x 3m = 24 m2 | Significant deck footprint |

**Assessment:**

| Criterion | Rating | Notes |
|-----------|--------|-------|
| Feasibility | MARGINAL | Requires specific mother ship configuration |
| Applicability | NARROW | Very few VN Navy vessels have suitable stern ramps |
| Complexity | MODERATE | Ramp operations in seaway are non-trivial |
| Advantage over 3A/3B | SMALL | Avoids towing but requires ramp infrastructure |

**Verdict on 3C:** Not recommended as primary option. Only viable if the designated mother ship happens to have a suitable stern ramp. Do not design around this assumption.

---

### 4.4 Sub-Option Comparison

| Criterion | 3A (Towed) | 3B (Self-Transit) | 3C (Stern Ramp) |
|-----------|-----------|-------------------|-----------------|
| Response time | **30-45 min** | 2-5 hr | **30-45 min** |
| Transit burden on mother ship | Tow drag penalty (~5-15% fuel increase) | None | Deck space |
| Crew fatigue | Moderate (tow watch) | Higher (long transit) | Low |
| Weather dependency (transit) | High (tow limits) | Moderate (self-transit) | Moderate |
| Port infrastructure needed | No | **Yes** | No |
| Mother ship modification | None | None | **Stern ramp required** |
| Operational independence | Low (tied to mother ship) | **High** | Low |
| Cost adder | Tow gear ($5-15K) | Fuel + port fees | Ramp modification |
| Recommended | **PRIMARY** | **SECONDARY** | Not recommended |

**Recommendation:** Design for **Option 3A (towed) as primary mode**, with **Option 3B (self-transit) as secondary capability**. The tender should have both towing gear AND sufficient fuel/nav for independent transit. This dual-mode approach maximizes operational flexibility.

---

## 5. Towing Analysis (Option 3A)

### 5.1 Towing Resistance Estimate

Using Holtrop-Mennen approximation for displacement hull, with corrections for small craft:

**Hull parameters (estimated):**
- LWL = 7.6 m, BWL = 2.8 m, T (draft) = 0.6 m
- Displacement (full load, no UUV): ~3100 kg
- Cb (block coefficient): ~0.40 [ASSUMPTION]
- Wetted surface: ~22 m2 [ASSUMPTION]

| Speed (kn) | Fn | Rt (kN) | Rt (kgf) | Tow line tension (kN) | Notes |
|------------|------|---------|----------|----------------------|-------|
| 6 | 0.36 | 1.2-1.8 | 120-180 | 1.5-2.2 | Well below hull speed |
| 8 | 0.48 | 2.5-4.0 | 250-400 | 3.0-5.0 | Moderate displacement regime |
| 10 | 0.60 | 5.0-8.0 | 500-800 | 6.0-10.0 | Approaching hull speed, resistance rises sharply |
| 12 | 0.72 | 9.0-15.0 | 900-1500 | 11.0-18.0 | Semi-planing transition, high resistance |

[ASSUMPTION] Hull speed ~7.5 kn (1.34 x sqrt(LWL_ft) = 1.34 x sqrt(24.9) = 6.7 kn). Above hull speed, resistance increases rapidly. Towing at 10+ kn requires significant power from mother ship.

**Recommendation:** Tow at 8 kn or less for fuel efficiency and tow line safety. Accept slower transit speed in exchange for lower risk.

### 5.2 Tow Line Specification

| Parameter | Specification | Rationale |
|-----------|--------------|-----------|
| Material | HMPE (Dyneema) or Nylon | Dyneema: low stretch, high strength. Nylon: stretch absorbs shocks |
| Diameter | 24-32 mm | SWL 5-10 t |
| MBL (minimum breaking load) | 20-40 t | Safety factor 4:1 on max tow load |
| Length (alongside) | 15-25 m | Spring lines + breast lines |
| Length (astern, short scope) | 30-50 m | 4-6x vessel length |
| Length (astern, long scope) | 100-200 m | Better catenary, shock absorption |
| Chafe protection | Polyurethane sleeve at fairlead | Critical for tow line life |
| Connection (tender) | Tow bridle to forward bollards | Distributes load to hull structure |
| Connection (mother ship) | Tow hook or bollard | Quick-release preferred |
| Emergency release | Senhouse slip or hydraulic release | Must be operable under load |

### 5.3 Towing Sea State Limits

| Sea State | Hs (m) | Tow Assessment | Notes |
|-----------|--------|----------------|-------|
| SS 1 | 0-0.1 | SAFE | Calm, no issues |
| SS 2 | 0.1-0.5 | SAFE | Light seas, routine |
| SS 3 | 0.5-1.25 | SAFE with caution | Monitor tow line, maintain watch |
| SS 4 | 1.25-2.5 | MARGINAL | 8m vessel significant motion, tow line shock loads, alongside tow NOT recommended |
| SS 5 | 2.5-4.0 | NOT RECOMMENDED | Risk of tow line failure, swamping, capsize |
| SS 6+ | >4.0 | PROHIBITED | Tender should seek port or shelter |

[ASSUMPTION] Limits based on NATO ATP-43 guidelines for towing small craft, adjusted for 8m displacement vessel.

### 5.4 Towing Fuel Penalty on Mother Ship

| Mother ship displacement | Speed | Estimated fuel penalty from towing tender | Notes |
|--------------------------|-------|-----------------------------------------|-------|
| 500 t | 8 kn | 3-5% increase | Small relative to ship's resistance |
| 500 t | 12 kn | 8-15% increase | Tender near hull speed, high drag |
| 2000 t | 8 kn | 1-3% increase | Negligible for large vessel |
| 2000 t | 12 kn | 3-8% increase | Manageable |

---

## 6. Extended Range / Endurance (Option 3B)

### 6.1 Fuel Consumption Model

| Condition | Engine load | Fuel rate (L/hr) | Speed (kn) | Range per 100L |
|-----------|------------|-------------------|------------|----------------|
| Idle/loiter | 10-20% | 5-10 | 3-5 | N/A (time-based) |
| Economy cruise | 50-60% | 25-35 | 10-12 | 30-45 nm |
| Fast cruise | 70-80% | 40-55 | 14-18 | 25-35 nm |
| Full power | 90-100% | 55-75 | 18-22 | 20-28 nm |

[ASSUMPTION] Based on Yanmar 6LY3-STP (150hp) fuel consumption curves. Actual varies with hull form, loading, sea state, and fouling.

### 6.2 Mission Fuel Planning (50 nm radius, Option 3B)

| Phase | Distance/Time | Speed | Fuel rate | Fuel (L) |
|-------|--------------|-------|-----------|----------|
| Transit out | 50 nm | 12 kn (4.2 hr) | 30 L/hr | 126 |
| Alongside ops (load UUV) | 30 min | Idle | 8 L/hr | 4 |
| Transit to launch point | 5 nm | 10 kn (0.5 hr) | 25 L/hr | 13 |
| UUV mission loiter | 3 hr | 5 kn | 8 L/hr | 24 |
| Recovery ops | 1 hr | 3-8 kn | 15 L/hr | 15 |
| Return alongside | 5 nm | 10 kn (0.5 hr) | 25 L/hr | 13 |
| Transit return to port | 50 nm | 12 kn (4.2 hr) | 30 L/hr | 126 |
| **Total mission fuel** | | | | **321 L** |
| Reserve (10%) | | | | 32 L |
| **Required fuel capacity** | | | | **353 L** |

**Verdict:** 300L tank is INSUFFICIENT for 50nm radius Option 3B missions. **Recommend 400L minimum, 500L preferred.**

- 400L tank adds ~85 kg over 300L → negligible impact on Path 3
- 500L tank adds ~170 kg → still negligible
- [ASSUMPTION] Tank upgrade cost: $2,000-5,000 for larger aluminum fuel tank

### 6.3 Crew Endurance

| Mission duration | Crew status | Mitigation |
|-----------------|-------------|------------|
| 4-6 hr | Comfortable | Standard provisions (water, snacks) |
| 6-8 hr | Fatigued | Hot food, rotating rest, semi-enclosed helm |
| 8-12 hr | Significantly fatigued | Mandatory rest rotation, additional crew member? |
| >12 hr | NOT RECOMMENDED | Risk of errors during critical LARS ops |

**Recommendation:** Design for 8-hour max mission duration. If longer missions anticipated, add 4th crew member for rest rotation.

### 6.4 Navigation Requirements for Independent Transit

| Equipment | Requirement | Notes |
|-----------|-------------|-------|
| GPS/GLONASS receiver | Primary navigation | Dual-constellation for reliability |
| Chart plotter with ENC | Route planning, hazard avoidance | Vietnam coastal charts |
| Marine radar (4kW) | Collision avoidance, night/fog transit | Critical for independent ops |
| AIS transponder (Class B) | Vessel identification, traffic awareness | Required for vessels operating independently |
| VHF radio (25W, DSC) | Primary comms with mother ship and shore | GMDSS compliant |
| Compass (magnetic + fluxgate) | Backup navigation | |
| Navigation lights | COLREGS compliant | Masthead, sidelights, stern, anchor |
| Searchlight | Night operations | Recovery ops at night |

---

## 7. LARS System (Full Hydraulic)

Path 3 allows the best possible LARS — no weight compromise needed.

### 7.1 System Architecture

```
                    Hydraulic Power Unit (HPU)
                    ┌─────────────────────┐
                    │ Electric motor 5.5kW │
                    │ Gear pump 20 L/min   │
                    │ Reservoir 25L         │
                    │ Filter + cooler       │
                    └────────┬────────────┘
                             │ Pressure: 200 bar
                    ┌────────┴────────────┐
          ┌─────────┤ Directional valves  ├────────┐
          │         │ (4/3, proportional)  │        │
          │         └─────────┬───────────┘        │
          │                   │                     │
    ┌─────▼─────┐    ┌───────▼──────┐    ┌────────▼───────┐
    │ Ramp tilt  │    │ Winch motor  │    │ Funnel fold    │
    │ 2x cyl     │    │ 1000kg SWL   │    │ 2x cyl         │
    │ 50mm bore  │    │ 5-10 m/min   │    │ (optional)     │
    └────────────┘    └──────────────┘    └────────────────┘
```

### 7.2 Component Specifications

| Component | Specification | Weight (kg) | Notes |
|-----------|--------------|-------------|-------|
| **HPU motor** | 5.5 kW, 24VDC or engine-driven PTO | 25-40 | PTO preferred — no electrical load on batteries |
| **Hydraulic pump** | Gear pump, 20 L/min, 200 bar | 8-12 | Bosch Rexroth, Parker, or equivalent |
| **Reservoir** | 25L, aluminum, with level gauge | 8-12 | Includes return filter |
| **Directional valves** | 4/3 proportional, 2 sections | 5-8 | Ramp + winch control |
| **Pressure relief valve** | 210 bar set point | 1 | Safety |
| **Hydraulic winch** | 1000 kg SWL, 5-10 m/min, 30m wire | 80-120 | Planetary gear motor, auto-brake |
| **Winch wire** | 10mm IWRC, galvanized | 15-20 | 30m + 5m reserve |
| **Ramp cylinders (2x)** | 50mm bore x 500mm stroke | 12-20 | Stainless rod, marine seals |
| **Hoses** | DN12, 250 bar rated, marine-grade | 8-12 | Stainless fittings, UV-resistant cover |
| **Hydraulic fluid** | ISO VG46, biodegradable (marine) | 20 (25L) | Environmentally acceptable |
| **Oil cooler** | Air-blast, 5kW rejection | 5-8 | Prevents overheating in tropical climate |
| **TOTAL HPU + actuation** | | **187-272** | |

### 7.3 Hydraulic vs Electric LARS Comparison

| Parameter | Electric (Path 1/2) | Hydraulic (Path 3) | Advantage |
|-----------|--------------------|--------------------|-----------|
| Weight | 80-150 kg | 187-272 kg | Electric lighter |
| SWL | 500-800 kg | 1000 kg | **Hydraulic stronger** |
| Line speed | 3-5 m/min | **5-10 m/min** | **Hydraulic 2x faster** |
| Control under dynamic load | Jerky (motor steps) | **Smooth (proportional valve)** | **Hydraulic smoother** |
| Stall capability | Motor overheats | **Holds pressure indefinitely** | **Hydraulic safer** |
| Multi-function | One actuator at a time | **Simultaneous ramp + winch** | **Hydraulic more capable** |
| Maintenance | Low | Moderate (fluid, seals, hoses) | Electric simpler |
| Cost | $10-25K | $25-50K | Electric cheaper |
| Power source | Battery (large draw) | Engine PTO or dedicated motor | Hydraulic doesn't drain batteries |

**Verdict:** Hydraulic LARS is superior for UUV recovery operations. The weight and cost penalty is acceptable in Path 3 because there is no crane lift constraint.

### 7.4 Maintenance Schedule

| Interval | Task | Notes |
|----------|------|-------|
| Every mission | Visual inspection of hoses, fittings, fluid level | 5-minute walk-around |
| 50 hours | Check hydraulic fluid condition, filter indicator | Replace filter if clogged |
| 200 hours | Replace return filter element | |
| 500 hours | Full fluid change, hose inspection, cylinder seal check | |
| 1000 hours | Replace hoses, reseal cylinders if leaking | Major maintenance |
| Annual | Full system overhaul, pressure test | Onshore maintenance |

---

## 8. Seakeeping / Stability

### 8.1 Seakeeping Comparison

| Parameter | Path 1 (6.5m) | Path 3 (8.0m) | Advantage |
|-----------|---------------|---------------|-----------|
| LWL | 6.2 m | 7.6 m | Longer = smoother motion |
| Beam | 2.2 m | 2.8 m | Wider = more initial stability |
| Displacement (full load) | ~2300 kg | ~3650 kg | Heavier = less acceleration in waves |
| GM (est.) | 0.5-0.8 m | 0.7-1.0 m | Higher GM = stiffer, but well-damped with bilge keels |
| Natural roll period | 2.5-3.5 s | 3.5-4.5 s | Longer period = less snap roll |
| Bilge keel area | ~0.5 m2 | ~1.5 m2 | 3x more damping area |
| Pitch amplitude (SS 3) | +/- 5-8 deg | +/- 3-5 deg | Less pitch = better ramp operation |
| Relative bow motion (SS 3) | 0.4-0.6 m | 0.3-0.4 m | Less green water |

[ASSUMPTION] Seakeeping estimates based on parametric models for displacement monohulls. Actual performance requires model testing or CFD analysis.

### 8.2 Stability with UUV on Deck

| Condition | KG (est.) | GM (est.) | Assessment |
|-----------|-----------|-----------|------------|
| Lightship | 0.7 m | 0.9 m | GOOD |
| UUV on cradle (H_max = 850mm) | 0.85 m | 0.75 m | ACCEPTABLE |
| UUV half-launched (on ramp, stern submerged) | — | Transient | Monitor carefully |
| UUV in water (recovery approach) | 0.7 m | 0.9 m | GOOD (UUV weight removed) |

[ASSUMPTION] KG and GM estimates are parametric. Formal stability analysis (inclining experiment or CAD model) required before build.

### 8.3 Stern Trim Analysis

| Condition | Stern trim (est.) | Effect |
|-----------|--------------------|--------|
| No UUV, ramp up | 0 (level or slight bow trim) | Normal cruising |
| UUV on cradle amidships | +50-100 mm stern | Minimal, acceptable |
| UUV on ramp (launch position) | +150-250 mm stern | Noticeable, manageable |
| UUV half in water | +200-350 mm stern | Ramp partially submerged — by design |

Path 3's larger hull volume means stern trim from UUV weight is proportionally smaller. The 550 kg UUV is only ~15% of full-load displacement (vs ~24% for Path 1). This is a significant stability advantage.

### 8.4 Towing Stability

| Parameter | Assessment |
|-----------|------------|
| Directional stability under tow | GOOD — long waterline, deep V-hull, skeg |
| Yaw tendency (astern tow) | Moderate — bridle attachment forward of LCG reduces yaw |
| Roll in beam seas during tow | Moderate — bilge keels effective, but beam seas + tow line = complex motion |
| Risk of broaching (following seas) | Low-moderate — skeg and rudder provide directional control |

---

## 9. Pros and Cons

### 9.1 Pros

| # | Advantage | Impact | Compared to Path 1/2 |
|---|-----------|--------|----------------------|
| 1 | **NO weight limit** | Full Concept B without compromise | Eliminates the fundamental constraint |
| 2 | **Best LARS capability** | Hydraulic, 1000kg SWL, smooth control | 2x faster, 2x stronger than electric |
| 3 | **Best seakeeping** | 8m hull, heavier displacement | SS 3 recovery more reliable |
| 4 | **Largest working deck** | 5.5 m2 vs 3.0 m2 | +83% workspace |
| 5 | **Best funnel geometry** | 2.8m beam → wider funnel, gentler taper | +33% capture zone |
| 6 | **No UUV overhang** | 62.5% hull ratio | Eliminates stability risk |
| 7 | **Growth potential** | Can handle heavier/longer UUVs in future | No crane limit to constrain |
| 8 | **Enclosed helm** | Crew protection for long missions | Essential for 8-12 hr ops |
| 9 | **Inboard diesel** | Durability, fuel efficiency, lower noise | 3-5x engine life vs outboard |
| 10 | **Tool/spares storage** | Carry hydraulic tools, spare parts, USBL spare | Self-sufficient for field maintenance |
| 11 | **Dual-mode ops** | Can tow (3A) OR self-transit (3B) | Maximum flexibility |

### 9.2 Cons

| # | Disadvantage | Impact | Mitigation |
|---|-------------|--------|------------|
| 1 | **NOT stored on mother ship deck** | User preference violated; tender must be towed or port-based | Accept as trade-off for capability |
| 2 | **Towing logistics (3A)** | Tow line management, speed penalty, weather limits | Proper tow gear, trained crew, SOPs |
| 3 | **Response time delay (3B)** | 2-5 hours transit vs immediate deployment | Pre-position tender when ops anticipated |
| 4 | **Crew fatigue** | 8-12 hr missions, especially with transit | Semi-enclosed helm, 4th crew for long missions |
| 5 | **Higher fuel consumption** | 300-500L per mission (3B) | Larger fuel tank, onshore fuel supply |
| 6 | **Port infrastructure (3B)** | Requires berthing, fuel, maintenance | Co-locate with naval base |
| 7 | **Higher cost** | $305-595K total (see Section 11) | Justified by capability |
| 8 | **Mother ship coordination** | Scheduling, rendezvous, crane availability | SOPs, communication protocols |
| 9 | **Hydraulic maintenance** | Fluid changes, seal replacement, hose inspection | Maintenance schedule, trained crew |
| 10 | **Navy acceptance risk** | "Not on deck" concept may not match navy expectations | Present capability comparison, demonstrate ops concept |
| 11 | **Towing in heavy seas** | Safety risk in SS 4-5 | Limit towing to SS 3, seek shelter in SS 4+ |

---

## 10. Risk Register (Path 3 Specific)

| ID | Risk | Likelihood | Severity | Risk Level | Mitigation |
|----|------|-----------|----------|------------|------------|
| R3-01 | Tow line failure during transit | Medium | High | **HIGH** | HMPE line, chafe protection, regular inspection, emergency release |
| R3-02 | Collision with mother ship during alongside ops | Low | High | **MEDIUM** | Fender system, trained coxswain, SOP for alongside approach |
| R3-03 | Response time too slow for tactical needs (3B) | Medium | Medium | **MEDIUM** | Pre-position when ops anticipated, dual-mode (3A+3B) |
| R3-04 | Crew fatigue causes error during LARS ops | Medium | High | **HIGH** | 8-hr mission limit, rest rotation, 4th crew for long missions |
| R3-05 | Port infrastructure unavailable (3B) | Low | Medium | **LOW** | Survey ports in advance, mobile fuel supply |
| R3-06 | Mother ship schedule conflict (crane/deck busy) | Medium | Low | **LOW** | Pre-coordinate UUV ops windows |
| R3-07 | Hydraulic system failure during recovery | Low | High | **MEDIUM** | Manual backup (hand pump), redundant hoses, onboard spares |
| R3-08 | Navy rejects "not on deck" concept | Medium | High | **HIGH** | Present side-by-side comparison with Paths 1/2, demonstrate capability gap |
| R3-09 | Tender damaged during towing in rough seas | Low-Med | High | **MEDIUM** | SS 3 tow limit, weather routing, seek shelter SOP |
| R3-10 | Engine failure during independent transit (3B) | Low | High | **MEDIUM** | Preventive maintenance, spare parts, towing by mother ship as backup |
| R3-11 | UUV damage during crane transfer (ship-to-tender) | Low | Medium | **LOW** | Taglines, trained crane operator, calm alongside conditions |
| R3-12 | Hydraulic fluid contamination (marine environment) | Medium | Medium | **MEDIUM** | Sealed reservoir, desiccant breather, regular fluid analysis |

---

## 11. Cost Estimate

| Item | Min ($K) | Max ($K) | Notes |
|------|----------|----------|-------|
| Hull (8m aluminum, 5083-H321) | 80 | 120 | Vietnam yard build, includes helm structure |
| Engine (inboard diesel 150-200hp) | 40 | 70 | Yanmar, Cummins, or equivalent |
| Gearbox + shaft + propeller | 10 | 20 | Marine gearbox, stainless shaft, bronze prop |
| LARS stern ramp + cradle + rails | 25 | 40 | Aluminum fabrication, hinges, slides |
| LARS hydraulic winch (1000kg SWL) | 15 | 30 | Marine-grade, planetary gear motor |
| LARS hydraulic power pack | 8 | 15 | Motor, pump, reservoir, valves, cooler |
| LARS V-funnel (optimized) | 10 | 18 | Aluminum, HDPE/rubber inserts for UUV protection |
| Hydraulic piping, hoses, fittings | 5 | 10 | Marine-grade, stainless fittings |
| IR camera + display | 15 | 30 | FLIR or equivalent thermal camera |
| USBL system | 30 | 80 | Sonardyne, EvoLogics, or equivalent |
| Navigation electronics | 15 | 30 | GPS, radar, AIS, chart plotter, VHF |
| Control console + displays | 10 | 20 | LARS control panel, engine instruments |
| Electrical system | 8 | 15 | Batteries, alternator, wiring, panel |
| Communications (extended range) | 15 | 30 | VHF + HF or satellite comms |
| Towing gear (Option 3A) | 5 | 15 | Tow bridle, lines, chafe gear, quick-release |
| Safety equipment | 5 | 10 | Life jackets, flares, fire ext., bilge pump |
| Sea state sensor (IMU-based) | 3 | 8 | Wave height estimation for LARS go/no-go |
| Integration, wiring, testing | 25 | 40 | Systems integration, sea trials |
| Design + engineering | 15 | 30 | Naval architecture, hydraulic design |
| Contingency (10%) | 34 | 60 | |
| **TOTAL** | **373** | **661** | |
| **TYPICAL (midpoint)** | | **~$517K** | |

### 11.1 Cost Comparison

| Cost element | Path 1 (6.5m) | Path 2 (7.2m) | Path 3 (8.0m) |
|-------------|---------------|---------------|---------------|
| Hull | $50-80K | $65-100K | $80-120K |
| Engine | $15-35K | $25-50K | $40-70K |
| LARS | $30-60K | $40-70K | $63-113K |
| Electronics/sensors | $60-140K | $60-140K | $63-148K |
| Other | $30-60K | $35-65K | $75-145K |
| Integration/design | $25-50K | $30-55K | $40-70K |
| **TOTAL** | **$210-425K** | **$255-480K** | **$373-661K** |
| **Typical** | **~$320K** | **~$370K** | **~$517K** |
| **Delta vs Path 1** | Baseline | +$50K (+16%) | **+$197K (+62%)** |

Path 3 costs approximately 60% more than Path 1. The cost increase buys: full hydraulic LARS, inboard diesel, enclosed helm, navigation for independent transit, towing gear, and larger fuel capacity. The question is whether the capability increase justifies the cost.

---

## 12. Verdict

### 12.1 Feasibility Assessment

| Criterion | Assessment | Confidence |
|-----------|-----------|------------|
| Technical feasibility | **FEASIBLE** | HIGH — no novel technology, proven vessel class |
| Operational feasibility | **FEASIBLE** (3A), **FEASIBLE** (3B), **MARGINAL** (3C) | MEDIUM — depends on navy acceptance |
| Weight/stability | **FEASIBLE** — no constraint | HIGH |
| LARS capability | **BEST of all paths** | HIGH |
| Recovery probability (SS 3) | **HIGHEST of all paths** | MEDIUM-HIGH |
| Cost feasibility | **FEASIBLE** — ~$517K typical | MEDIUM — higher than Paths 1/2 |
| Navy acceptance | **UNCERTAIN** | LOW — "not on deck" concept is a departure |

### 12.2 Overall Verdict: FEASIBLE

Path 3 is technically and operationally feasible. It offers the best UUV handling capability of all three paths by eliminating the weight constraint entirely.

### 12.3 Best Sub-Option

**Option 3A (Towed) — PRIMARY**, with **3B (Self-Transit) as secondary capability.**

Design the tender with both tow fittings AND sufficient fuel/navigation for independent transit. This dual-mode approach costs only ~$20K more than 3A alone (additional fuel capacity + navigation upgrades) and provides maximum operational flexibility.

### 12.4 Key Advantage Over Paths 1 and 2

**No compromise on LARS capability.** Path 3 is the only path where the tender design is driven by mission requirements, not by crane lift capacity. The result is:
- Hydraulic LARS (2x faster, 2x stronger, smoother control)
- Wider V-funnel (+33% capture zone)
- Better seakeeping (8m hull, heavier displacement)
- More working deck space (+83%)
- Growth potential for heavier UUVs

In Paths 1 and 2, every kilogram of LARS capability must be traded against hull structure, fuel, or crew. In Path 3, the design space is unconstrained.

### 12.5 Key Disadvantage

**The tender is not on the mother ship deck.** This creates operational complexity:
- Towing logistics and weather limitations (Option 3A)
- Response time delay of 2-5 hours (Option 3B)
- Crew fatigue on extended missions
- Mother ship coordination requirements
- Higher total cost (~+62% vs Path 1)
- **Navy acceptance risk** — the concept of a UUV tender that is NOT ship-borne may not align with navy expectations

### 12.6 When to Select Path 3

Select Path 3 when:
- UUV recovery reliability at SS 3 is the TOP priority (mission-critical application)
- The UUV is high-value (recovery failure cost >> tender cost)
- Multiple UUV deployments per mission are expected (hydraulic LARS speed advantage)
- Future UUVs may be heavier/larger (growth potential)
- The mother ship has limited deck space (no room for tender anyway)
- A nearby naval port is available for Option 3B basing
- The navy is willing to accept an independent tender concept

Do NOT select Path 3 when:
- Rapid response time (<30 min from request to UUV in water) is required AND towing is not feasible
- The mother ship operates far from any port (eliminates Option 3B, forces towing-only)
- Budget is strictly constrained
- The navy insists on a ship-borne tender concept

---

## Appendix A: Comparison Matrix (All Three Paths)

| Parameter | Path 1 (6.5m, on deck) | Path 2 (7.2m, on deck) | Path 3 (8.0m, independent) |
|-----------|----------------------|----------------------|--------------------------|
| Stored on deck | YES | YES | **NO** |
| Crane lift required | YES (tender + UUV) | YES (tender + UUV) | **UUV only** |
| Weight limit | 2500 kg (HARD) | 2500 kg (HARD) | **NONE** |
| Hull length | 6.5 m | 7.2 m | **8.0 m** |
| UUV/hull ratio | 77% (tight) | 69% (better) | **62.5% (comfortable)** |
| LARS type | Electric (lightweight) | Electric/hybrid | **Full hydraulic** |
| LARS SWL | 500-800 kg | 500-1000 kg | **1000 kg** |
| Winch speed | 3-5 m/min | 3-8 m/min | **5-10 m/min** |
| Funnel width | ~1200 mm | ~1400 mm | **~1600 mm** |
| Seakeeping (SS 3 recovery) | Marginal | Acceptable | **Good** |
| Working deck | 3.0 m2 | 4.0 m2 | **5.5 m2** |
| Response time | Immediate (on deck) | Immediate (on deck) | 30 min (3A) / 2-5 hr (3B) |
| Crew protection | Open helm | Open/semi | **Semi-enclosed** |
| Engine | Outboard | Outboard/inboard | **Inboard diesel** |
| Growth potential | Very limited | Limited | **Significant** |
| Cost (typical) | ~$320K | ~$370K | **~$517K** |
| Technical risk | HIGH (weight) | MEDIUM-HIGH (weight) | **LOW** |
| Operational risk | LOW (ship-borne) | LOW (ship-borne) | **MEDIUM (logistics)** |
| Navy acceptance risk | LOW | LOW | **MEDIUM-HIGH** |

---

*End of Path 3 Trade Study. This document should be read alongside Path 1 and Path 2 studies for a complete picture of the design space.*
