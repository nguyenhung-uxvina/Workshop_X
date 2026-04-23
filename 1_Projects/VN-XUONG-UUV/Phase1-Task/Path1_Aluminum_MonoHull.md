---
project: VN-XUONG-UUV
phase: 1
type: trade-study
variant: path-1-aluminum
version: 1.0
created: 2026-03-06
status: draft
---

# PATH 1: Ultra-Light Aluminum Monohull with Split-Lift Operations

**Trade Study — VN-XUONG-UUV Launch and Recovery Vessel**

| Parameter | Value |
|-----------|-------|
| UUV Specs | L=5000mm, D=400mm, W=550kg, H_max=850mm, torpedo-profile |
| Mother ship crane SWL | 2.5 t |
| Tender lightship limit | < 2.0 t (hard constraint) |
| LARS type | Stern ramp + passive V-funnel + electric winch + USBL homing |
| Lift mode | Split-lift (tender and UUV hoisted separately, never together) |
| Sea State | SS 3-4 launch, SS 2-3 recovery |
| Crew | 2-3 |
| Stowage | On mother ship deck (preferred) |

---

## 1. Vessel Concept

A 6.5-7.0 m aluminum monohull workboat optimized for minimum lightship weight while carrying a stern-mounted LARS for a 550 kg UUV.

**Key design choices:**

- **Material:** Marine aluminum 5083-H321 — proven corrosion resistance, weldable, widely available in Vietnam.
- **Hull form:** V-hull with moderate deadrise (18-22 deg at midship) for acceptable seakeeping at SS 3. Deep-V bow transitioning to flatter sections aft for stern ramp compatibility.
- **Stern:** Open transom with integrated ramp hinge points. Transom cut down to ~300mm above waterline to minimize ramp angle.
- **Propulsion:** Single outboard diesel engine, transom-mounted offset to port or starboard to clear the centerline ramp.
- **Roll damping:** Welded bilge keels, ~150mm depth, running 40-60% of waterline length.
- **Deck:** Open working deck amidships for crew access and UUV handling. No cabin — open helm station with windscreen only.

**General arrangement (bow to stern):**

```
|<-- 6500mm (or 7000mm) -->|
[BOW] [HELM] [WORKING DECK] [LARS/CRADLE] [RAMP] [STERN]
 0.8m   1.0m     1.2m          2.5m        2.5-3.0m
                                   ↕ UUV 5.0m on cradle ↕
```

---

## 2. Weight Budget

### 2.1 Detailed Weight Breakdown

| Item | Sub-item | Min (kg) | Max (kg) | Nominal (kg) | Notes |
|------|----------|----------|----------|---------------|-------|
| **Hull structure** | 6.5m aluminum monohull | 800 | 1100 | 900 | [ASSUMPTION] Min gauge: 4mm bottom, 3mm sides, 3mm deck. Based on comparable 6.5m aluminum workboats. Aggressive lightweighting. |
| **Engine** | Outboard diesel 90-115hp | 120 | 180 | 150 | [ASSUMPTION] e.g., OXE 150 diesel outboard ~185kg; lighter gasoline outboard ~120kg. See Section 5. |
| | Engine mounting bracket | 15 | 25 | 20 | Offset mount to clear centerline ramp |
| **LARS** | Stern ramp (Al, 2.5m x 0.8m) | 80 | 120 | 100 | 5083, 5mm plate + stiffeners, hinge mechanism |
| | Cradle + rails (Al + UHMWPE) | 60 | 80 | 70 | Cradle must support 550kg + 2.0x dynamic = 1100kg design load |
| | Electric winch (1000kg SWL) | 40 | 60 | 50 | e.g., Warn or Comeup 12V/24V industrial winch |
| | V-funnel frame + UHMWPE lining | 40 | 60 | 50 | Passive capture aid, folds for stowage |
| | Dyneema line (50m x 12mm) + fairlead | 5 | 10 | 8 | Dyneema: 12mm = ~0.1 kg/m |
| | LARS hydraulic/electric actuators | 10 | 20 | 15 | Ramp tilt actuator, latch mechanisms |
| **LARS subtotal** | | **235** | **350** | **293** | |
| **Fuel** | 100L diesel | 83 | 87 | 85 | Diesel density ~0.85 kg/L |
| | Fuel tank (aluminum) | 8 | 15 | 12 | |
| **Navigation/electrical** | Helm console, instruments, GPS, VHF | 20 | 35 | 25 | |
| | Battery bank (24V, 200Ah AGM) | 50 | 65 | 58 | [ASSUMPTION] Required for electric winch. 2x 12V 100Ah AGM @ ~29kg each |
| | Wiring harness, switches, lights | 15 | 25 | 20 | |
| **Nav/elec subtotal** | | **85** | **125** | **103** | |
| **USBL system** | Transceiver + transponder + display | 15 | 25 | 20 | e.g., Sonardyne Micro-Ranger 2 or EvoLogics S2CR |
| **Safety equipment** | Life jackets, flares, fire ext, first aid | 20 | 35 | 25 | |
| | Mooring lines, fenders, boat hook | 10 | 15 | 12 | |
| **Safety subtotal** | | **30** | **50** | **37** | |
| **Paint & fittings** | Anti-fouling, primer, topcoat | 15 | 25 | 20 | |
| | Cleats, hinges, latches, fasteners | 20 | 35 | 25 | |
| | Deck non-skid, scuppers, drains | 10 | 20 | 15 | |
| **Paint/fittings subtotal** | | **45** | **80** | **60** | |

### 2.2 Weight Summary

| Category | Nominal (kg) | % of Total |
|----------|-------------|------------|
| Hull structure | 900 | 52.6% |
| Engine + mount | 170 | 9.9% |
| LARS system | 293 | 17.1% |
| Fuel + tank | 97 | 5.7% |
| Nav/electrical | 103 | 6.0% |
| USBL | 20 | 1.2% |
| Safety | 37 | 2.2% |
| Paint/fittings | 60 | 3.5% |
| **Subtotal** | **1680** | **98.2%** |
| **Weight margin (10%)** | **168** | |
| **TOTAL (with margin)** | **1848** | |

### 2.3 Assessment Against 2.0t Limit

| Metric | Value |
|--------|-------|
| Lightship (nominal) | 1680 kg |
| Lightship + 10% margin | 1848 kg |
| Limit | 2000 kg |
| Remaining margin after 10% contingency | **152 kg** |
| Crew (2 persons x 80kg) — NOT in lightship | 160 kg (excluded from crane lift) |

**Verdict:** The 2.0t limit is **achievable but tight**. The 152 kg remaining margin after 10% contingency is thin. Any significant weight growth in hull structure (the dominant item at 53%) would consume this margin.

**Critical dependency:** Hull weight of 900 kg assumes aggressive lightweighting (minimum gauge throughout). If the shipyard builds to standard commercial scantlings (~1100 kg), the budget is blown. This requires a detailed structural design with weight control as a KPI from day one.

[ASSUMPTION] Crew weight is excluded from lightship because split-lift means crew boards after the tender is in the water, or crew climbs down separately. If crane SWL check must include crew, budget is violated.

---

## 3. Geometry and Layout

### 3.1 UUV-to-Hull Length Ratio

| Parameter | 6.5m hull | 7.0m hull |
|-----------|-----------|-----------|
| UUV length | 5.0 m | 5.0 m |
| Hull LOA | 6.5 m | 7.0 m |
| UUV/LOA ratio | 77% | 71% |
| Available non-LARS length | 1.5 m | 2.0 m |
| Working deck length | ~1.2 m | ~1.7 m |

The 77% ratio on the 6.5m hull is extremely high. This is the fundamental geometric challenge of Path 1.

### 3.2 Ramp and Cradle Geometry

```
Side View (UUV on cradle, ramp raised):

         Helm   Working    Cradle/Rails        Ramp (stowed)
          |     Deck       |                    |
    Bow ──┤────┤──────────┤════════════════════┤── Stern
          |    |          |    UUV (5.0m)       |
                          |◄──────────────────►|
                          |<- 3.5m on deck ->|<- 1.5m overhang
```

```
Side View (ramp deployed at 18 deg):

    WL ─────────────────────────────────╲
                                         ╲  ramp @ 18°
                                          ╲
                                           ╲── UUV slides down
                                            ╲
    Ramp length = 3.0-3.5m                   ╲ tip at ~1.0m below WL
```

**Ramp geometry calculations:**

| Parameter | Value | Notes |
|-----------|-------|-------|
| Ramp angle | 18 deg | [ASSUMPTION] Compromise: shallower = longer ramp, steeper = harder control |
| Ramp length | 3.0 m | Minimum for UUV tail clearance during slide |
| Ramp tip submersion at 18 deg | 3.0 x sin(18°) = 0.93 m | Below transom hinge point |
| Transom freeboard | ~0.3 m | Low freeboard for practical ramp operation |
| Ramp tip depth below waterline | ~1.23 m | Adequate for UUV D=400mm submersion |

### 3.3 UUV Overhang

With the UUV (5.0 m) loaded on the cradle, and the cradle starting ~3.0 m forward of the stern:

- UUV forward end: 3.0 m from stern → at station 3.5 m from bow (on 6.5m hull)
- UUV aft end: extends **2.0 m past the stern** when fully loaded on cradle

This 2.0 m overhang is **problematic**:
- Stern trim increases significantly (550 kg at 2.0 m aft of stern)
- Structural cantilever load on ramp/cradle
- Risk of UUV contact with waves in following seas

**Mitigation options:**
1. Slide UUV forward on cradle so overhang is ~1.0-1.5 m (but then bow of UUV intrudes into working deck)
2. Increase hull to 7.0 m (adds ~0.5 m, reduces overhang to ~1.5 m)
3. Accept 1.5 m overhang with a reinforced ramp/cradle extension

### 3.4 The Case for 7.0 m Hull

| Factor | 6.5 m | 7.0 m | Delta |
|--------|-------|-------|-------|
| Hull weight [ASSUMPTION] | 900 kg | 1000-1050 kg | +100-150 kg |
| Working deck | 1.2 m | 1.7 m | +0.5 m |
| UUV overhang | ~2.0 m | ~1.5 m | -0.5 m |
| Lightship (nominal) | 1680 kg | 1780-1830 kg | +100-150 kg |
| Lightship + 10% margin | 1848 kg | 1958-2013 kg | **Borderline** |
| Crew workspace | Very cramped | Barely adequate | Improved |

**Assessment:** 7.0 m hull improves geometry materially but pushes the weight budget to the absolute edge. At 2013 kg worst case (with margin), it could exceed the 2.0t limit. This makes the 7.0 m option a higher risk for weight compliance but a lower risk for operational functionality.

**Recommendation:** Start design at 6.5 m, with hull lines that can stretch to 7.0 m if geometry proves unworkable during detailed design.

---

## 4. Structural Considerations

### 4.1 Scantling Summary

| Component | Thickness | Material | Notes |
|-----------|-----------|----------|-------|
| Bottom plating | 4 mm | 5083-H321 | Minimum for a 6.5m workboat. DNV HSLC rules would typically require 5-6mm. [ASSUMPTION] 4mm is accepted under military waiver or class exemption. |
| Side plating | 3 mm | 5083-H321 | Adequate if frame spacing ≤ 400mm |
| Deck plating | 3 mm | 5083-H321 | Stiffened with flat bar or angles |
| Transom | 5 mm | 5083-H321 | Higher load area: engine mount + ramp hinge |
| Ramp plate | 5 mm | 5083-H321 | Must carry 550kg UUV + dynamic loads |
| Frames (transverse) | 50x50x5 L-angle | 5083-H321 | Spacing 400mm [ASSUMPTION] |
| Keel bar | 6 mm flat bar, 100mm | 5083-H321 | Longitudinal strength member |
| Bilge keels | 150mm depth, 3mm | 5083-H321 | Welded, tapered ends |

### 4.2 Ramp Load Analysis

The ramp must support the UUV during launch and recovery with dynamic amplification from wave action.

| Load Case | Calculation | Result |
|-----------|-------------|--------|
| Static UUV weight on ramp | 550 kg x 9.81 = 5.4 kN | 5.4 kN |
| Dynamic factor (SS 3 recovery) | 1.5-2.0x [ASSUMPTION] | 2.0x used for design |
| Design load on ramp | 5.4 x 2.0 = 10.8 kN | **10.8 kN** |
| Load component normal to ramp (18 deg) | 10.8 x cos(18°) = 10.3 kN | 10.3 kN |
| Load component along ramp (friction/winch) | 10.8 x sin(18°) = 3.3 kN | 3.3 kN |
| Ramp support: 2 hinge points, 0.8m apart | 10.3 / 2 = 5.15 kN each | 5.15 kN per hinge |

**Ramp bending (simplified):**
- Ramp as simply supported beam, 3.0m span, point load at 1.5m (worst case)
- M_max = F x L / 4 = 10.3 x 3.0 / 4 = 7.7 kN.m
- For 5mm plate, 800mm wide: I = (800 x 5^3)/12 = 83,333 mm^4 (plate only)
- This is grossly insufficient without stiffeners.
- **Ramp requires longitudinal T-bar or channel stiffeners** (2x aluminum T-sections, 60x40x5) to achieve adequate section modulus.

### 4.3 Winch Reaction Loads

| Parameter | Value |
|-----------|-------|
| Winch SWL | 1000 kg = 9.81 kN |
| Dynamic winch load (2.0x at SS 3) | 19.6 kN [ASSUMPTION: winch SWL provides 1.8x safety factor over dynamic UUV load] |
| Winch mounting bolts | 4x M16 SS bolts in aluminum backing plate |
| Backing plate | 10mm 5083 welded to deck structure |
| Pull direction | Aft → forward (winching UUV up the ramp) |

The winch reaction load (up to ~20 kN) is transmitted into the deck and must be carried by the hull structure forward of the ramp. This requires a dedicated reinforced deck section at the winch location with load paths into the hull frames.

### 4.4 Longitudinal Strength — Stern-Heavy Condition

When the UUV (550 kg) is on the ramp/cradle, the vessel becomes severely stern-trimmed:

| Item | Weight (kg) | LCG from bow (m) | Moment (kg.m) |
|------|------------|-------------------|----------------|
| Hull (6.5m) | 900 | 2.8 [ASSUMPTION] | 2520 |
| Engine + mount | 170 | 6.3 | 1071 |
| LARS (no UUV) | 293 | 5.2 | 1524 |
| Fuel | 97 | 2.0 [ASSUMPTION: forward tank] | 194 |
| Nav/elec/USBL/safety/paint | 220 | 1.5 | 330 |
| **Vessel lightship** | **1680** | **3.36** | **5639** |
| UUV on cradle | 550 | 5.5 [ASSUMPTION] | 3025 |
| **Vessel + UUV** | **2230** | **3.88** | **8664** |

**Trim analysis (simplified):**
- LCG shifts from 3.36 m to 3.88 m from bow when UUV loaded — a 0.52 m aft shift
- On a 6.5 m hull with ~5.5 m waterline, this is significant (~10% of LWL)
- [ASSUMPTION] Expected stern trim: 15-25 cm by the stern with UUV loaded
- This will reduce stern freeboard (already low for ramp operations) and increase risk of stern wave ingress

**Mitigation:** Place fuel tank as far forward as possible. Consider movable ballast (water ballast tank forward, ~50-100 kg) to compensate during UUV-loaded transit. Weight penalty is a concern.

### 4.5 Bilge Keel Attachment

- Bilge keels welded directly to hull plating at the turn of bilge
- Weld: continuous fillet, both sides
- On 3-4mm hull plating, heat distortion during welding is a concern — require qualified welder and sequence control
- Bilge keel terminations must be faired (tapered) to avoid snagging during crane lift

---

## 5. Propulsion

### 5.1 Options Comparison

| Criterion | Outboard Gasoline | Outboard Diesel | Inboard Diesel |
|-----------|-------------------|-----------------|----------------|
| **Weight** | 110-140 kg (best) | 150-200 kg | 250-400 kg (worst) |
| Power range | 90-150 hp | 90-150 hp | 90-200 hp |
| Example | Yamaha F115 (183kg) / Mercury 90hp (138kg) | OXE 150 (185kg), Cox CXO300 (too heavy) | Yanmar 3YM30 (144kg) + gearbox (40kg) + shaft/prop (50kg) = ~235kg total |
| Fuel consumption | Higher (gasoline) | Lower (diesel) | Lower (diesel) |
| Fuel logistics | Separate fuel type from mother ship | Same fuel as mother ship | Same fuel as mother ship |
| Maintenance | Simple, swap-out | More complex | Most complex, requires alignment |
| Military durability | Low (consumer product) | Medium | High (proven in military boats) |
| Low-speed control | Good (with steering) | Good | Best (with rudder) |
| Offset mounting | Required (clear ramp CL) | Required | N/A (midship, but heavy) |
| Cost | $8-15K | $25-45K | $15-30K + installation |
| **Weight score** | 1 (best) | 2 | 3 (worst) |
| **Suitability score** | 2 | 1 (best) | 3 (heaviest) |

### 5.2 Recommendation

**Primary choice: Outboard diesel (OXE 150 or equivalent)**

Rationale:
- Weight is acceptable (~185 kg installed) vs gasoline (~140 kg) — delta of ~45 kg
- Fuel commonality with mother ship (diesel) is a significant logistic advantage for naval operations
- Better durability than gasoline outboards
- Offset mounting to port, allowing centerline ramp

**Fallback: Gasoline outboard (Yamaha F90/F115)**

If weight budget becomes critical, a gasoline outboard saves ~45-60 kg but introduces:
- Separate fuel type (fire hazard, logistics burden on mother ship)
- Lower durability
- Higher fuel consumption

**Inboard diesel is rejected** for this path due to weight penalty of 80-150 kg over outboard diesel. This would consume the entire remaining weight margin.

### 5.3 Maneuvering During Recovery

Recovery operations require precise low-speed station-keeping alongside the UUV:
- Outboard provides good directional control via nozzle/steering at low RPM
- [ASSUMPTION] No bow thruster — weight and complexity prohibitive at this scale
- Crew skill dependent: helmsman must hold position while 1-2 crew operate LARS
- Wind and current set will be challenging at SS 3 for a 6.5m monohull

---

## 6. LARS System (Electric)

### 6.1 Electric Winch Specification

| Parameter | Requirement | Notes |
|-----------|-------------|-------|
| SWL (static) | 1000 kg | 1.8x safety factor over UUV static weight |
| Line pull (1st layer) | ≥ 10 kN | |
| Line speed | 3-8 m/min | Slower = more control during recovery |
| Line capacity | 50m x 12mm Dyneema | Enough for 30m+ UUV standoff |
| Power supply | 24V DC from vessel battery | |
| Current draw | 80-150A at full load [ASSUMPTION] | Based on comparable 12V/24V winches |
| Duty cycle | 10 min continuous | Recovery duration |
| Control | Wired pendant (waterproof) | Operator at stern, not helm |
| Brake | Automatic fail-safe (spring-applied, power-released) | |
| Manual override | Clutch + manual crank handle | Backup for electrical failure |

### 6.2 Battery Bank Sizing

| Parameter | Calculation | Value |
|-----------|-------------|-------|
| Winch power at full load | 10 kN x 5 m/min / 60 = 833 W mechanical | ~833 W |
| Winch electrical input (η=60%) [ASSUMPTION] | 833 / 0.60 | ~1389 W |
| Current at 24V | 1389 / 24 | ~58 A |
| Peak current (dynamic surge) | 2.0x steady state | ~116 A |
| Recovery duration | 10 min | |
| Energy per recovery | 1389 W x 10/60 h | ~0.23 kWh |
| Battery capacity required (50% DoD max) | 0.23 / 0.50 / 24 x 1000 | ~19 Ah |
| **Selected battery** | 2x 12V 100Ah AGM in series (24V) | Provides 100 Ah at 24V |
| Battery weight | 2 x 29 kg | **58 kg** |
| Capacity margin | 100 / 19 = 5.3x | Adequate for multiple cycles + nav loads |

**Assessment:** Battery bank is adequately sized. Weight of 58 kg is significant but necessary. Lithium (LiFePO4) alternative would save ~50% weight (29 kg total) at 3-4x cost — worth considering if weight budget is critical.

### 6.3 Dynamic Load Capability at SS 3

This is a critical concern. During recovery at SS 3:

| Scenario | Load on Winch Line |
|----------|-------------------|
| UUV static in water (reduced by buoyancy) | ~200 kg [ASSUMPTION: UUV near-neutral buoyancy in water, but cradle/ramp friction adds load] |
| UUV emerging from water (full weight on ramp) | 550 kg |
| Wave surge — UUV in water, wave drops away | Peak: 550 x 2.0 = 1100 kg [ASSUMPTION] |
| Snatch load — slack line goes taut | Peak: 1500-2000 kg possible |

**Problem:** Snatch loads can exceed 1000 kg SWL. The Dyneema line has some elasticity but far less than nylon. A snatch load scenario (wave lifts UUV, line goes slack, wave drops, line snaps taut) could:
1. Overload the winch brake
2. Part the Dyneema line
3. Damage winch mounting points

**Mitigations:**
- Winch operator must maintain constant tension (slack prevention)
- Add a Dyneema shock absorber (snubber) in line — absorbs 30-50% of peak dynamic load
- Limit recovery operations to SS 2-3 (not SS 3-4)
- Recovery procedure: approach UUV from downwind/downcurrent, minimize relative motion

### 6.4 Duty Cycle Verification

| Phase | Duration | Winch Load | Current Draw |
|-------|----------|------------|-------------|
| Initial hookup (UUV in water) | 2-3 min | ~200 kg (buoyancy-assisted) | ~25 A |
| Transition (UUV on ramp, emerging) | 2-3 min | 400-550 kg (increasing) | 40-58 A |
| Full haul (UUV sliding up ramp) | 3-4 min | 550 kg steady | ~58 A |
| Final positioning + latch | 1-2 min | Low | ~15 A |
| **Total** | **8-12 min** | | Avg ~40 A |

Battery consumption per recovery: ~40 A x 12 min / 60 = 8 Ah out of 100 Ah → **8% DoD per recovery cycle**. Acceptable for multiple cycles.

### 6.5 Backup / Manual Override

- Manual clutch engagement allows free-spooling the drum
- Manual crank handle: at 550 kg load, a human cannot crank the winch manually against UUV weight
- **Manual override is only useful for lowering (gravity-assisted launch) or light-load situations**
- For recovery, if electric winch fails, the mission is aborted — UUV stays in water until mother ship crane can assist

---

## 7. Seakeeping and Stability

### 7.1 Vessel Characteristics (Estimated)

| Parameter | Value | Notes |
|-----------|-------|-------|
| LOA | 6.5 m | |
| LWL | ~5.5 m | [ASSUMPTION] |
| Beam | 2.4 m | [ASSUMPTION] Typical for 6.5m workboat |
| Draft (lightship) | ~0.35 m | [ASSUMPTION] |
| Draft (with UUV) | ~0.50 m | Stern trim increases aft draft |
| Displacement (lightship) | ~1680 kg | |
| Displacement (loaded, no crew) | ~2230 kg (with UUV) | |
| Displacement (loaded, with crew) | ~2390 kg | |
| Block coefficient | ~0.45 | [ASSUMPTION] V-hull form |
| GM (lightship) [ASSUMPTION] | 0.8-1.2 m | Typical for beamy workboat |
| GM (with UUV on ramp) [ASSUMPTION] | 0.6-0.9 m | Reduced due to high CG of UUV on ramp |

### 7.2 Roll Period Estimate

Natural roll period (simplified):

T_roll = 2π x k / sqrt(g x GM)

Where:
- k = radius of gyration ≈ 0.35 x Beam = 0.35 x 2.4 = 0.84 m [ASSUMPTION]
- GM = 0.8 m (lightship, conservative)
- g = 9.81 m/s²

T_roll = 2π x 0.84 / sqrt(9.81 x 0.8) = 5.28 / 2.80 = **1.89 seconds**

| Condition | GM (m) | T_roll (s) | Assessment |
|-----------|--------|------------|------------|
| Lightship | 0.8-1.2 | 1.5-1.9 s | Very short — snap roll, uncomfortable |
| With UUV loaded | 0.6-0.9 | 1.8-2.2 s | Slightly better but still short |
| SS 3 wave period | 3-5 s | — | Risk of synchronous rolling if resonance |

**Assessment:** A 6.5m monohull with 2.4m beam will have a very short roll period (< 2 seconds), resulting in sharp, uncomfortable rolling motions. This is inherent to small monohulls and cannot be fully mitigated.

### 7.3 Bilge Keel Effectiveness

- Bilge keels on a 6.5m hull: effective at reducing roll amplitude by 20-40% [ASSUMPTION]
- Bilge keel area (2 keels, 150mm x 2.5m each): 0.75 m² total
- Not sufficient to make the vessel comfortable at SS 3, but reduces peak roll amplitude
- Main benefit: reduces roll rate (snap) rather than roll angle
- **Will not prevent significant roll during LARS operations at SS 3**

### 7.4 Stern Trim with UUV Loaded

From Section 4.4 LCG analysis:
- LCG aft shift: 0.52 m
- Waterplane area: ~5.5 x 2.4 x 0.75 = ~9.9 m² [ASSUMPTION: Cwp = 0.75]
- Moment to change trim 1 cm (MCT): Δ x GM_L / (100 x LWL) [ASSUMPTION: GM_L ≈ 1.5 x LWL = 8.25 m for this hull form]
- MCT ≈ 2230 x 8.25 / (100 x 5.5) = 33.5 kg.m/cm

Trimming moment from UUV: 550 x (5.5 - 3.36) = 550 x 2.14 = 1177 kg.m

Wait — more precisely, the trim change is caused by the difference in UUV LCG vs vessel LCF:
- LCF ≈ 2.6 m from bow [ASSUMPTION]
- UUV LCG = 5.5 m from bow
- Trim lever = 5.5 - 2.6 = 2.9 m
- Trimming moment = 550 x 2.9 = 1595 kg.m
- Trim change = 1595 / 33.5 = **47.6 cm** by the stern

**This is a very large trim change.** 47.6 cm stern trim on a 6.5 m vessel means:
- Stern sinks ~24 cm (half of trim change, approximately)
- Bow rises ~24 cm
- Stern freeboard (already low at ~0.3 m for ramp) could reduce to near zero

**This is a serious stability and safety concern.** The vessel may not be able to safely carry the UUV in anything above calm water.

**Mitigation required:**
1. Forward ballast tank (~200-300 kg water) — but this adds weight, defeating the purpose
2. Only carry UUV for short distances (launch from mother ship crane directly nearby)
3. Redesign: move LARS further amidships (but UUV geometry prevents this)

### 7.5 Free-Surface Effects During Recovery

During recovery, water will wash over the stern ramp and pool on deck:
- Ramp deployed at 18 deg → lower edge is 1.0 m below waterline
- Water ingress over ramp is continuous
- Scuppers and deck drains must handle this flow
- Free surface of pooled water reduces GM: FS correction = ρ x i / Δ
  - For a 2.0 m x 0.8 m pool of water, 50mm deep: i = (0.8 x 2.0³)/12 = 0.53 m⁴
  - FS correction = 1025 x 0.53 / 2230 = 0.24 m
  - **This reduces GM by ~0.24 m** — significant given baseline GM of 0.6-0.9 m

**Must design large, self-draining scuppers at stern to minimize water retention on deck.**

---

## 8. Operational Concept

### 8.1 Split-Lift Procedure

Split-lift means the tender and UUV are hoisted separately by the mother ship crane. This eliminates the combined weight issue (1680 + 550 = 2230 kg would exceed 2.5t SWL with margin) but increases cycle time.

**Mission Cycle (Launch):**

| Step | Action | Duration | Crane Cycles |
|------|--------|----------|-------------|
| 1 | Crane lifts tender from deck, lowers to water | 10-15 min | 1 |
| 2 | Crew boards tender (via ladder or from mother ship freeboard) | 5 min | 0 |
| 3 | Crane lifts UUV, lowers onto tender cradle | 10-15 min | 1 |
| 4 | Crew secures UUV on cradle, connects Dyneema line | 5-10 min | 0 |
| 5 | Tender transits to launch position | 10-30 min | 0 |
| 6 | Deploy ramp, winch-lower UUV into water | 5-10 min | 0 |
| 7 | UUV powers up, USBL confirms link, UUV departs | 5-10 min | 0 |
| | **Total launch cycle** | **50-95 min** | **2** |

**Mission Cycle (Recovery):**

| Step | Action | Duration | Crane Cycles |
|------|--------|----------|-------------|
| 1 | USBL tracks UUV approach | 10-20 min | 0 |
| 2 | UUV homes to V-funnel using USBL | 5-15 min | 0 |
| 3 | Crew attaches Dyneema line (or auto-latch in V-funnel) | 5-10 min | 0 |
| 4 | Winch hauls UUV up ramp, secure on cradle | 8-12 min | 0 |
| 5 | Tender transits back to mother ship | 10-30 min | 0 |
| 6 | Crane lifts UUV from tender to deck | 10-15 min | 1 |
| 7 | Crew disembarks | 5 min | 0 |
| 8 | Crane lifts tender from water to deck | 10-15 min | 1 |
| | **Total recovery cycle** | **63-122 min** | **2** |

**Full mission (launch + transit + recovery):** 2-4 hours minimum, excluding UUV mission time.

**Total crane cycles per mission: 4** (2 launch + 2 recovery).

### 8.2 Crew Positions and Roles

| Role | Position | Responsibility |
|------|----------|----------------|
| Helmsman | Helm station (forward) | Navigation, station-keeping during LARS ops, vessel safety |
| LARS Operator | Stern working deck | Winch control, ramp deployment, UUV securing, line handling |
| Safety/Comm (optional 3rd) | Amidships | Radio comms with mother ship, safety observer, assists LARS op |

**Minimum crew: 2** (helmsman + LARS operator). Strongly recommended: 3 for SS 3 operations.

With 2 crew, the helmsman must leave the helm to assist with UUV securing — vessel is uncontrolled during this phase. At SS 3, this is dangerous.

### 8.3 Weather Limits

| Operation | Sea State Limit | Wind Limit | Notes |
|-----------|-----------------|------------|-------|
| Transit (no UUV) | SS 4 | 20 kt | Standard for 6.5m monohull |
| Transit (UUV loaded) | SS 2-3 | 15 kt | Stern trim limits seaworthiness |
| UUV Launch | SS 3-4 | 18 kt | Gravity assist — easier than recovery |
| UUV Recovery | SS 2-3 | 15 kt | **Critical operation** — most demanding |
| Crane operations (split-lift) | SS 2 | 12 kt | Mother ship crane ops are the bottleneck |

**Note:** Crane operations (SS 2) are more restrictive than vessel LARS operations (SS 3). The split-lift procedure means that the weather window must be calm enough for crane ops at both start and end of mission, even if conditions worsen in between.

---

## 9. Pros and Cons

### Pros

| # | Advantage | Significance |
|---|-----------|-------------|
| 1 | **Stored on mother ship deck** | Eliminates need for davits or dedicated boat bay. Rapid deployment from any vessel with a 2.5t crane. |
| 2 | **Proven material (5083-H321)** | Well-understood by VN shipyards. Welding, repair, and maintenance are straightforward. |
| 3 | **VN shipyard capability** | Multiple yards in Hai Phong, Da Nang, HCMC can build 6.5m aluminum hulls. No exotic manufacturing. |
| 4 | **Lower cost** | Simplest, cheapest option. Aluminum monohull + electric winch avoids hydraulics. |
| 5 | **Electric LARS simplicity** | No hydraulic system = no hoses, no HPU, no fluid contamination, simpler maintenance. |
| 6 | **Split-lift avoids combined weight issue** | Crane never lifts > 1.7t (tender) or > 0.6t (UUV). Margin on crane SWL is comfortable. |
| 7 | **Outboard engine serviceability** | Can be removed/swapped without dry-docking. VN has outboard service networks. |

### Cons

| # | Disadvantage | Severity | Mitigation |
|---|-------------|----------|------------|
| 1 | **Extremely tight weight budget** | HIGH | Min gauge aluminum, outboard engine, no hydraulics. Every kg counts. |
| 2 | **Small working deck (1.2m on 6.5m hull)** | HIGH | 7.0m hull adds 0.5m but costs 100-150 kg. Operational compromise. |
| 3 | **Monohull roll at SS 3** | MEDIUM-HIGH | Bilge keels help 20-40%. Crew must accept discomfort. Recovery limited to SS 2-3. |
| 4 | **Electric winch dynamic load limits** | MEDIUM-HIGH | Snatch loads at SS 3 could exceed SWL. Dyneema snubber + operator skill required. |
| 5 | **UUV stern overhang (2.0m)** | HIGH | Severe stern trim, structural cantilever. May force 7.0m hull. |
| 6 | **Stern trim with UUV loaded (~47cm)** | HIGH | Forward ballast required, but adds weight. Short transit distances only. |
| 7 | **Free-surface effects during recovery** | MEDIUM | Self-draining stern design critical. Reduces GM by ~0.24m. |
| 8 | **4 crane cycles per mission** | MEDIUM | Slow: 2-4 hour mission cycle. Weather window must hold for full duration. |
| 9 | **Crane ops limited to SS 2** | MEDIUM | Bottleneck is crane, not vessel. Split-lift = more weather-dependent. |
| 10 | **Min gauge (4/3mm) structural risk** | MEDIUM | Requires careful FEA and possibly class approval. Not standard practice for workboats. |

---

## 10. Risk Register (Path 1 Specific)

| ID | Risk | Likelihood | Impact | Severity | Mitigation | Residual Risk |
|----|------|-----------|--------|----------|------------|---------------|
| R1 | Weight overrun — hull exceeds 900 kg estimate | HIGH | HIGH | **CRITICAL** | Detailed weight tracking from design phase. Enforce min gauge. Weigh hull before outfitting. | MEDIUM — shipyard discipline varies |
| R2 | Structural adequacy at minimum gauge (4/3mm) | MEDIUM | HIGH | **HIGH** | FEA analysis of critical sections. Consider selective reinforcement at high-load areas (ramp, winch, engine mount). | MEDIUM |
| R3 | Electric winch cannot handle dynamic loads at SS 3 | MEDIUM | HIGH | **HIGH** | Dyneema snubber in line. Limit recovery to SS 2-3. Operator training. Oversize winch to 1500kg SWL if weight permits (+10-15kg). | MEDIUM |
| R4 | Seakeeping at SS 3 is unacceptable for LARS ops | MEDIUM | MEDIUM | **MEDIUM** | Bilge keels. Operational limit to SS 2-3 for recovery. Accept SS 3 for launch only. | LOW-MEDIUM |
| R5 | UUV geometry does not fit 6.5m hull | HIGH | MEDIUM | **HIGH** | Design for stretch to 7.0m. Accept 1.5-2.0m overhang with reinforced ramp extension. | MEDIUM |
| R6 | Stern trim with UUV loaded exceeds safe limits | HIGH | HIGH | **CRITICAL** | Forward ballast tank (water). Limit transit distance with UUV loaded. Mother ship repositions to minimize tender transit. | MEDIUM-HIGH |
| R7 | Free-surface effects reduce GM below safe minimum | MEDIUM | MEDIUM | **MEDIUM** | Large self-draining scuppers. Ramp design to shed water. Crew trained to abort if water pools. | LOW-MEDIUM |
| R8 | Crane operations weather window too restrictive | MEDIUM | MEDIUM | **MEDIUM** | Accept as operational constraint. Alternative: davit system (different trade study). | LOW — inherent to split-lift concept |
| R9 | Battery bank failure during recovery | LOW | HIGH | **MEDIUM** | Battery monitoring system. Pre-op voltage check. Carry spare battery. Manual override for launch (gravity). | LOW |
| R10 | Outboard diesel engine reliability in military use | MEDIUM | MEDIUM | **MEDIUM** | Spare engine carried on mother ship. Regular maintenance schedule. Consider twin outboard for redundancy (+weight, +cost). | LOW-MEDIUM |

**Risk summary:** 2 CRITICAL, 3 HIGH, 5 MEDIUM risks. The weight budget (R1) and stern trim (R6) are the most concerning — both relate to the fundamental challenge of putting a 5.0m UUV on a 6.5m vessel.

---

## 11. Cost Estimate

| Item | Low ($K) | High ($K) | Nominal ($K) | Notes |
|------|----------|-----------|--------------|-------|
| Hull (6.5m aluminum, VN shipyard) | 50 | 80 | 65 | Includes structure, paint, basic fittings |
| Engine (outboard diesel) | 25 | 45 | 35 | OXE 150 or equivalent + controls |
| LARS system | 25 | 50 | 38 | Electric winch, ramp, cradle, V-funnel, fabrication |
| USBL system | 30 | 80 | 55 | Depends on brand: EvoLogics ~$35K, Sonardyne ~$70K |
| Navigation/electrical | 10 | 20 | 15 | GPS, VHF, compass, lights, battery bank, wiring |
| Safety equipment | 5 | 10 | 8 | Life jackets, flares, fire ext, mooring gear |
| Integration & testing | 25 | 50 | 38 | Sea trials, LARS testing, USBL integration, trim tests |
| Design & engineering | 15 | 30 | 22 | Naval architecture, structural analysis, drawings |
| Contingency (15%) | 28 | 55 | 42 | |
| **TOTAL** | **213** | **420** | **318** | |

**Cost range: $213K - $420K, nominal $318K**

Note: This excludes the UUV itself, mother ship modifications, and crew training costs.

### Cost Sensitivity

| Item | Impact on Total if +50% | Notes |
|------|------------------------|-------|
| USBL system | +$27K (+8.5%) | Largest single variable — brand choice matters |
| Hull | +$32K (+10%) | Relatively predictable in VN |
| Engine | +$17K (+5%) | Diesel outboard is a fixed-price item |
| LARS | +$19K (+6%) | Custom fabrication — hard to predict |

---

## 12. Verdict

### Feasibility Assessment: MARGINAL

Path 1 (6.5m aluminum monohull with electric LARS) is technically feasible but operates at the edge of multiple constraints simultaneously:

| Constraint | Status | Margin |
|------------|--------|--------|
| Weight < 2.0t | PASS (nominal 1680 kg) | 320 kg (19%) before margin; 152 kg (8%) after 10% contingency |
| UUV fits on vessel | MARGINAL | 2.0m overhang, 77% hull ratio |
| Stability with UUV loaded | MARGINAL | 47 cm stern trim, reduced freeboard |
| LARS at SS 3 | MARGINAL | Electric winch dynamic loads are concerning |
| Working deck for crew | MARGINAL | 1.2 m on 6.5m hull — very cramped |
| Cost | PASS | $213-420K range is reasonable |

### Key Conditions for Feasibility

1. **Hull weight MUST stay at or below 900 kg.** This requires minimum gauge (4/3mm) aluminum construction with rigorous weight control. If hull grows to 1000+ kg, the concept fails without going to 7.0m (which creates its own weight risk).

2. **UUV overhang and stern trim must be managed.** Forward ballast tank is likely unavoidable, adding ~50-100 kg to lightship. Transit with UUV loaded should be kept to minimum distance.

3. **Recovery operations limited to SS 2-3 maximum.** SS 3 is the design target but SS 2-3 is the realistic operational limit for electric winch LARS on a 6.5m monohull.

4. **7.0m hull should be treated as the likely outcome.** The geometry analysis shows 6.5m is very tight. Budget and plan for 7.0m, but attempt 6.5m first in detailed design.

5. **3 crew, not 2.** At SS 3, 2 crew cannot safely operate LARS and maintain vessel control simultaneously.

### Recommended Next Steps (if Path 1 is selected)

1. **Detailed weight estimate** — contact VN shipyard for actual hull weight quote at min gauge
2. **Hydrostatic analysis** — model hull in Maxsurf or similar, verify GM, trim, and stability with UUV loaded
3. **Structural FEA** — verify min gauge aluminum is adequate for ramp loads, winch reaction, and longitudinal bending
4. **Winch selection** — identify specific 24V electric winch with 1000-1500 kg SWL, confirm dynamic load rating
5. **USBL vendor engagement** — select system and confirm integration requirements
6. **Compare with Path 2 and Path 3** before committing — the stern trim issue (R6) and weight tightness (R1) may favor an alternative concept

---

*End of Trade Study — Path 1: Aluminum Monohull*

*Document version 1.0 | Created 2026-03-06 | Status: DRAFT*
*Next review: after Path 2 and Path 3 studies complete, for comparative evaluation.*
