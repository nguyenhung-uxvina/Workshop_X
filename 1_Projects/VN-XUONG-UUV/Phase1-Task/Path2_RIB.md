---
project: VN-XUONG-UUV
phase: 1
type: trade-study
variant: path-2-rib
version: 1.0
created: 2026-03-06
status: draft
---

# PATH 2: RIB (Rigid Inflatable Boat) — UUV Launch and Recovery Vessel

## 0. Summary

| Parameter | Value |
|-----------|-------|
| Vessel type | 7m Professional/Military RIB, Deep-V hull |
| Hull material | Aluminum or GRP rigid hull + Hypalon inflatable tubes |
| Target displacement (lightship) | 1200-1500 kg |
| Crane SWL constraint | < 2000 kg (mother ship crane SWL = 2.5t) |
| UUV payload | L=5000mm, D=400mm, W=550kg, H_max=850mm, torpedo-profile |
| LARS type | Stern ramp + passive V-funnel + electric winch + USBL homing |
| Lift concept | Split-lift (tender + UUV hoisted separately) |
| Sea state (launch) | SS 3-4 |
| Sea state (recovery) | SS 2-3 |
| Crew | 2-3 |
| Stowage | Mother ship deck (preferred) |
| Engine | Outboard 90-150 hp |

---

## 1. Vessel Concept

### 1.1 Hull Form

A 7m professional/military-grade RIB with deep-V hull (deadrise 20-24 deg at transom) and Hypalon inflatable collar tubes. The rigid hull section (aluminum 5083-H111 or marine GRP) carries all structural loads. Inflatable tubes (diameter ~450-550mm) provide:

- Reserve buoyancy (~200-300% of displacement)
- Natural fendering against mother ship hull during alongside operations
- Roll damping through wave interaction with tube surface
- Self-righting tendency when properly designed

### 1.2 Key Configuration

- **Open stern**: Transom modified with ramp cutaway between tubes or through tube termination
- **Outboard engine**: Mounted on transom bracket, offset to port or starboard to clear ramp centerline
- **Console/helm**: Forward-center position for weight distribution balance against stern LARS
- **LARS**: Stern ramp (18 deg nominal angle) with V-funnel, electric winch, cradle + rail system
- **Tubes**: Hypalon/CSM fabric (preferred for UV resistance) or PVC (lower cost, shorter life)

### 1.3 Why RIB?

Military RIBs are proven platforms used globally by navies (USN RHIB, Royal Marines LCVP(MK5), etc.) for boarding, patrol, and special operations. The inflatable collar provides inherent advantages in alongside operations and crew safety. The question is whether the platform can handle concentrated LARS loads — this is the central technical risk of Path 2.

---

## 2. Weight Budget

### 2.1 Detailed Weight Breakdown

| Item | Min (kg) | Max (kg) | Nominal (kg) | Notes |
|------|----------|----------|---------------|-------|
| **Hull (rigid section)** | 400 | 600 | 500 | 7m aluminum deep-V or GRP. [ASSUMPTION] Based on comparable professional RIBs (Zodiac Hurricane, Willard Marine) |
| **Inflatable tubes** | 80 | 120 | 100 | Hypalon/CSM, ~450-550mm diameter, full collar |
| **Console/helm** | 30 | 50 | 40 | Aluminum console, basic instruments, windscreen |
| **Engine (outboard)** | 120 | 180 | 150 | 90-150hp 4-stroke (Yamaha/Mercury). [ASSUMPTION] 115hp class ~150kg |
| **--- LARS System ---** | | | | |
| Stern ramp (reinforced) | 80 | 120 | 100 | Aluminum 6082-T6, hinged, must handle 550kg + dynamic |
| Cradle + guide rails | 60 | 80 | 70 | UHMWPE rollers on aluminum rails |
| Electric winch (1000kg SWL) | 40 | 60 | 50 | 24V DC, with brake and clutch |
| V-funnel frame + UHMWPE | 40 | 60 | 50 | Aluminum frame, UHMWPE contact surfaces |
| Dyneema line (50m x 12mm) | 5 | 10 | 8 | Synthetic, no rust, high strength |
| **LARS subtotal** | **225** | **330** | **278** | |
| **LARS reinforcement structure** | 80 | 150 | 120 | **CRITICAL** — see Section 4. Additional stringers, transom reinforcement, winch mounting plate, cross-deck beams |
| **Fuel (100L diesel/petrol)** | 75 | 85 | 80 | Petrol for outboard ~0.75 kg/L. [ASSUMPTION] 100L capacity |
| **Navigation/electrical** | 40 | 60 | 50 | GPS, VHF, compass, nav lights, battery bank (24V for winch + 12V for nav) |
| **USBL system** | 15 | 25 | 20 | Transducer + topside unit (e.g., Blueprint Subsea) |
| **Safety equipment** | 20 | 40 | 30 | PFDs, flares, fire extinguisher, first aid, tow line |
| **Miscellaneous** | 30 | 50 | 40 | Fittings, cleats, lifting eyes, tube repair kit, tools |
| **TOTAL (lightship + LARS)** | **1115** | **1690** | **1408** | **Excludes crew and UUV** |

### 2.2 Operational Weight Cases

| Condition | Weight (kg) | Notes |
|-----------|-------------|-------|
| Lightship (no fuel, no crew, no UUV) | ~1328 | Nominal minus fuel |
| Lightship + fuel | ~1408 | Ready to launch, no crew/UUV |
| Operational (fuel + 3 crew @ 85kg) | ~1663 | Ready for crane lift |
| Operational + UUV on ramp | ~2213 | **Maximum displacement at sea** |
| Crane lift weight (tender only, no UUV) | ~1408 | **Well under 2000kg limit** |

### 2.3 Weight Margin Analysis

| Parameter | Value |
|-----------|-------|
| Crane SWL | 2500 kg |
| Tender lift weight (lightship + fuel) | ~1408 kg |
| **Margin to 2.0t crane limit** | **~592 kg (30%)** |
| **Margin to 2.5t SWL** | **~1092 kg (44%)** |
| Growth allowance (10% of lightship) | ~141 kg |
| **Net margin after growth** | **~451 kg** |

The RIB path provides the best crane margin of all paths. Even with worst-case weight growth (1690 kg), the margin to 2.0t remains 310 kg (15%). This is the primary advantage of Path 2.

---

## 3. Geometry / Layout

### 3.1 Principal Dimensions

| Parameter | Value | Notes |
|-----------|-------|-------|
| LOA | 7000 mm | Hull + tubes |
| Rigid hull length | ~6200 mm | Tubes extend beyond hull at bow |
| Beam overall (incl. tubes) | ~2600-2800 mm | |
| **Internal beam (between tubes)** | **~1800-2000 mm** | **KEY CONSTRAINT vs Path 1 monohull (~2400mm)** |
| Hull depth (keel to gunwale) | ~900-1000 mm | |
| Tube diameter | 450-550 mm | Adds ~900-1100mm to overall beam |
| Draft (operational, no UUV) | ~350-450 mm | |
| Freeboard (transom, operational) | ~500-600 mm | Plus tube height |
| Transom width (internal) | ~1600-1800 mm | Where ramp integrates |

### 3.2 UUV Accommodation

| Parameter | Value | Assessment |
|-----------|-------|------------|
| UUV length | 5000 mm | |
| Available ramp + deck length | ~4500 mm (from transom forward) | UUV overhangs stern by ~500mm when fully aboard |
| UUV overhang | ~500 mm | Less severe than 6.5m monohull (~800mm) — **RIB advantage** |
| UUV diameter | 400 mm | |
| Available internal beam | 1800-2000 mm | Adequate for cradle, but V-funnel width constrained |
| V-funnel width (max) | ~1600-1800 mm | **Narrower than Path 1 monohull (~2200mm)** |
| UUV height (on cradle) | ~500 mm (cradle top to UUV top) | Below tube top — good for stability |

### 3.3 Layout Arrangement (Plan View)

```
                    BOW
          ___________________________
         /  [TUBE]            [TUBE] \
        /   ___________________       \
       |   |                   |       |
       |   |   [HELM/CONSOLE]  |       |  Frame 0 - 2000mm
       |   |   [BATTERY BANK]  |       |
       |   |___________________|       |
       |   |                   |       |
       |   |   WORKING DECK    |       |  Frame 2000 - 4000mm
       |   |   [FUEL TANK]     |       |
       |   |   (under deck)    |       |
       |   |___________________|       |
       |   |                   |       |
       |   | CRADLE + RAILS    |       |  Frame 4000 - 5500mm
       |   | [WINCH]           |       |
       |   | ═══UUV POSITION═══|       |
       |   |_________↓_________|       |
        \  [TUBE]   RAMP    [TUBE]    /   Frame 5500 - 7000mm
         \_____[==RAMP HINGE==]______/
                   STERN
              [ENGINE - offset]

    ←── 2600-2800mm overall beam ──→
    ←── 1800-2000mm internal ──→
```

### 3.4 Ramp Integration Options

**Option A: Ramp between tube terminations**
- Tubes terminate ~500mm forward of transom, creating a gap for ramp
- Ramp width limited to ~1400-1600mm
- Tubes provide natural side guides
- Risk: tube termination sealing under dynamic loads

**Option B: Ramp through transom cutaway**
- Transom cut down to ramp hinge height
- Tubes continue around transom but with reduced diameter at stern
- More structural modification required
- Better ramp width possible

**Recommendation**: Option A is simpler and preserves tube integrity. V-funnel mouth at ~1400-1600mm is adequate for 400mm diameter UUV (3.5-4:1 funnel ratio).

### 3.5 Profile View

```
    WATERLINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                          ___________
    [CONSOLE]     [DECK]     [WINCH] [CRADLE]  |RAMP  \  18deg
    ___________________________________________/________\___
    \                DEEP-V HULL                        /
     \_______________________________________________ /
                                                 [ENGINE]

    |←── 7000mm LOA ──→|
    |←── 5000mm UUV ──→|  (on ramp/cradle, ~500mm overhang)
```

---

## 4. Structural Analysis (CRITICAL RISK)

This section addresses the **KEY RISK** of Path 2. RIB hulls are designed for distributed hydrodynamic loads (slamming, wave impact). LARS operations impose concentrated, cyclic, point loads that are fundamentally different from the design basis.

### 4.1 LARS Load Cases

| Load Case | Force (kg) | Direction | Location |
|-----------|------------|-----------|----------|
| UUV static on ramp | 550 | Vertical (gravity) | Distributed along cradle/rails |
| UUV sliding on ramp (18 deg) | ~170 (along ramp) + ~530 (normal) | Ramp axis + perpendicular | Cradle contact points |
| Winch pull (steady) | ~250 | Along ramp axis (tension) | Winch mounting point |
| Winch dynamic (snatch load in SS3) | ~500-800 | Along ramp axis (tension) | Winch mounting point [ASSUMPTION] 2-3x dynamic factor |
| Ramp hinge reaction | ~800-1100 | Vertical + horizontal | Transom hinge points (2x) |
| UUV impact on funnel (SS3 recovery) | ~300-500 | Lateral | Funnel frame mounts |
| **Combined worst case** | **~1100 at transom** | Multi-axis | Transom + ramp hinge |

### 4.2 Structural Concerns

**4.2.1 Hull Bottom Panel Loading**

Standard RIB hull bottom panels (3-5mm aluminum or 8-12mm GRP) are designed for:
- Slamming pressure: ~50-100 kPa (distributed over panel area)
- Wave loads: hydrostatic + hydrodynamic (distributed)

LARS imposes:
- Concentrated line loads along cradle rails: ~275 kg/m over 2m rail length
- Point loads at winch mount: ~500-800 kg over ~0.04 m^2 = ~125-200 kPa [ASSUMPTION]
- These loads are within panel capacity BUT are cyclic and at specific points

**4.2.2 Transom Loading**

The transom is the most critical structural element for LARS integration:
- Standard RIB transom designed for engine thrust (~200-400 kg for 150hp outboard)
- LARS ramp hinge adds ~800-1100 kg at two points
- Combined engine + LARS transom load: ~1000-1500 kg
- **This is 3-4x the design basis for a standard RIB transom** [ASSUMPTION]

**4.2.3 Hull-Tube Interface**

- Tube attachment to hull via bonded/bolted rubbing strake
- LARS loads transmitted through hull may cause:
  - Flexing of hull gunwale where tubes attach
  - Peeling loads on tube-hull bond
  - Fatigue cracking at tube attachment fittings
- This interface is NOT designed for the load spectrum LARS imposes

### 4.3 Required Reinforcements

| Reinforcement | Description | Weight (kg) | Purpose |
|---------------|-------------|-------------|---------|
| Longitudinal stringers (2x) | Aluminum 6082-T6, 80x40x4mm channel, 2.5m length | 30-40 | Distribute cradle rail loads to hull frames |
| Transom reinforcement plate | 10-12mm aluminum plate, full transom width | 15-25 | Ramp hinge + engine loads |
| Winch mounting plate | 8-10mm aluminum plate, 400x400mm, with backing plate | 8-12 | Distribute winch snatch loads |
| Cross-deck beams (2x) | Aluminum 6082-T6, 60x60x5mm box section | 10-15 | Lateral load distribution, prevent hull distortion |
| Ramp hinge reinforcement | Gusseted brackets, 8mm plate | 10-15 | Concentrate hinge loads into stringers |
| Gunwale stiffener | 50x50x4mm angle along tube attachment zone | 8-12 | Prevent hull flexing at tube interface |
| **TOTAL reinforcement** | | **80-120 kg** | [ASSUMPTION] Could reach 150kg if analysis shows higher loads |

### 4.4 Fatigue Analysis

| Parameter | Value | Concern |
|-----------|-------|---------|
| LARS cycles per mission | 2 (1 launch + 1 recovery) | |
| Missions per month | 4-8 [ASSUMPTION] | |
| Annual cycles | ~100-200 | |
| Design life | 15 years | |
| Total life cycles | ~1500-3000 | Low cycle — fatigue manageable IF welds are proper |
| Critical fatigue locations | Ramp hinge welds, winch mount welds, stringer-to-frame connections | |
| Inspection interval | Every 100 cycles or annually | Recommend NDT at welds |

**Assessment**: Fatigue is manageable in terms of cycle count, but weld quality at reinforcement connections is critical. Any crack initiation at stress concentrations could propagate rapidly in the relatively thin RIB hull structure.

### 4.5 Structural Verdict

| Aspect | Rating | Notes |
|--------|--------|-------|
| Static strength (with reinforcements) | ADEQUATE | Reinforcements bring loads within hull capacity |
| Fatigue life | ADEQUATE with inspection | Low cycle count, but weld quality critical |
| Hull-tube interface integrity | UNCERTAIN | No precedent for LARS loads on tube attachment — **needs FEA or physical test** |
| Transom adequacy | MARGINAL | Standard transom insufficient; reinforcement required; combined engine + LARS loads are high |
| Overall structural risk | **MEDIUM-HIGH** | Feasible with reinforcements, but requires detailed structural analysis (FEA) to confirm |

**The structural reinforcement weight (80-150 kg) partially negates the RIB's weight advantage over an aluminum monohull.** Net weight saving vs Path 1 is reduced from ~300-500 kg to ~150-350 kg.

---

## 5. Tube Durability in Tropical Marine Environment

### 5.1 Material Comparison

| Property | Hypalon/CSM | PVC/Polyurethane |
|----------|-------------|------------------|
| UV resistance | Excellent | Moderate |
| Temperature range | -30 to +80 deg C | -10 to +50 deg C |
| Abrasion resistance | Good | Moderate |
| Chemical resistance | Excellent | Moderate |
| Repairability | Good (heat weld + glue) | Good (glue) |
| Cost (7m tube set) | $15,000-25,000 | $8,000-15,000 |
| Life (temperate climate) | 10-15 years | 5-8 years |
| **Life (tropical Vietnam)** | **5-8 years** [ASSUMPTION] | **3-5 years** [ASSUMPTION] |

### 5.2 Tropical Degradation Factors

| Factor | Severity | Mitigation |
|--------|----------|------------|
| **UV radiation** | HIGH — Vietnam latitude 10-21 deg N, year-round intense UV | Hypalon essential (not PVC). UV protectant coating. Cover when stored. |
| **Deck temperature** | HIGH — deck surface 60-70 deg C in direct sun | Hypalon rated to 80 deg C (OK). PVC softens at 50 deg C (NOT OK). |
| **Salt spray** | MODERATE — accelerates fabric degradation | Regular freshwater washdown |
| **Chafing from UUV** | HIGH — UUV contacts tube during failed recovery attempts | Install chafe guards (UHMWPE strips) on inner tube faces near stern |
| **Biofouling** | MODERATE — tropical waters = rapid growth on submerged tube surfaces | Antifouling coating on lower tube sections |
| **Humidity** | MODERATE — promotes mold/mildew in tube folds | Proper drying before storage |

### 5.3 Tube Maintenance and Replacement

| Item | Estimate | Notes |
|------|----------|-------|
| Annual tube inspection | 2 man-days | Check seams, valves, fabric condition |
| Tube repair (minor patch) | $200-500 per repair | Locally feasible with Hypalon repair kit |
| **Full tube replacement** | **$15,000-25,000 + labor** | **Must import — no VN manufacturer for Hypalon tubes** |
| Replacement interval (tropical) | Every 5-8 years (Hypalon) | [ASSUMPTION] Based on tropical military RIB operators |
| Tube availability lead time | 8-16 weeks | Custom order from specialist (Henshaw, Zodiac, Willard) |

### 5.4 Tube Durability Verdict

Tubes are a **recurring maintenance cost and logistics dependency** that does not exist in Path 1 (aluminum monohull). Over a 15-year vessel life, expect 2-3 tube replacements at $15-25K each = **$30-75K additional lifecycle cost**.

---

## 6. LARS System (Electric) — RIB-Specific Concerns

### 6.1 LARS Configuration (Same Principles as Path 1)

| Component | Specification | RIB-Specific Notes |
|-----------|--------------|---------------------|
| Stern ramp | Aluminum 6082-T6, hinged at transom, 18 deg angle | Ramp width limited to ~1400-1600mm (between tube terminations) |
| V-funnel | UHMWPE-lined aluminum frame | Mouth width ~1400-1600mm — narrower than Path 1 (~2200mm) but adequate for 400mm UUV |
| Cradle | V-block on rails, UHMWPE contact | Same as Path 1 — fits within internal beam |
| Winch | 24V DC electric, 1000kg SWL, 15m/min line speed | Mounting requires reinforced plate (see Section 4) |
| Line | Dyneema 12mm, 50m, SWL 2000kg | Same as Path 1 |
| USBL | Transducer hull-mounted, topside unit at console | Same as Path 1 |

### 6.2 RIB-Specific LARS Concerns

**6.2.1 Funnel Width Constraint**

- Internal beam between tubes: ~1800-2000mm
- Ramp/funnel width between tube terminations: ~1400-1600mm
- Funnel mouth opening: ~1400mm
- UUV diameter: 400mm
- **Funnel ratio: 3.5:1** (vs 5.5:1 on Path 1 monohull)
- Reduced funnel ratio means less tolerance for lateral UUV misalignment during recovery
- Impact: recovery success rate in SS3 may be lower than Path 1 [ASSUMPTION]

**6.2.2 Battery Bank Location**

- Winch battery bank (24V, ~60-80 Ah): ~25-35 kg
- On a RIB, weight distribution is critical — CG shift affects trim significantly
- **Recommendation**: Mount battery bank forward, under console, to counterbalance stern LARS weight
- Requires longer cable run (~5m) — voltage drop consideration (use 16mm^2 cable minimum)

**6.2.3 Ramp Angle**

- RIB transom freeboard: ~500-600mm (plus tube height above waterline)
- Ramp deployed angle: 18 deg nominal — tip of ramp at ~waterline when deployed
- RIB freeboard may be slightly higher than aluminum monohull → ramp may need to be longer to reach waterline
- Ramp length estimate: ~1800-2200mm [ASSUMPTION]

---

## 7. Seakeeping / Stability

### 7.1 Baseline RIB Seakeeping

| Parameter | RIB (Path 2) | Monohull (Path 1) | Notes |
|-----------|-------------|-------------------|-------|
| Roll damping | Excellent (tubes absorb wave energy) | Moderate (hull form only) | RIB advantage |
| Reserve buoyancy | ~200-300% of displacement | ~80-120% | RIB significant advantage |
| Slamming | Moderate (deep-V helps, but lighter = more acceleration) | Lower (heavier hull dampens) | Trade-off |
| Self-righting tendency | Good (with proper tube sizing) | Dependent on hull form | RIB advantage |
| Spray | Moderate (tubes deflect some spray) | Variable | Similar |
| Crew comfort | Good (tubes absorb shock) | Moderate | RIB advantage |

### 7.2 Stability with UUV on Stern Ramp

| Condition | VCG est. (mm above keel) | LCG (mm from transom) | Trim change | Stability |
|-----------|--------------------------|----------------------|-------------|-----------|
| Light (no UUV) | ~400 | ~2800 (midship) | Level | Good |
| UUV on ramp (550kg at ~500mm from transom) | ~450 | ~2100 | Stern down ~100-150mm | Reduced but adequate [ASSUMPTION] |
| UUV half-submerged (recovery, ~300kg effective) | ~420 | ~2400 | Stern down ~60-80mm | Acceptable |

### 7.3 Stern Squat Analysis

- UUV on ramp: 550 kg at ~500mm from transom
- LARS system: ~278 kg centered at ~1500mm from transom
- Total stern moment: (550 x 500) + (278 x 1500) = 275,000 + 417,000 = 692,000 kg.mm
- Counterbalancing forward weight (console, fuel, battery): ~300 kg at ~5500mm from transom = 1,650,000 kg.mm
- **Net forward moment**: 958,000 kg.mm — vessel trims bow-down in static condition
- But at rest with UUV loading, dynamic effects (waves, winch operation) create transient stern-heavy conditions
- **Tube buoyancy provides significant reserve** — tubes at stern provide ~200-400 kg of additional buoyancy when partially submerged, self-correcting stern squat

### 7.4 Seakeeping Verdict

RIB seakeeping is **superior to Path 1 monohull** for crew comfort and reserve buoyancy. Tube buoyancy provides a natural stability margin during LARS operations. The lighter weight means higher wave-induced accelerations (more slamming) but tubes partially compensate. Overall: **GOOD**.

---

## 8. Manufacturing Capability (Vietnam)

### 8.1 Assessment

| Capability | Vietnam Status | Notes |
|------------|---------------|-------|
| Aluminum hull fabrication (marine) | GOOD — multiple yards (Song Thu, Ba Son, Hai Phong) | Can build rigid hull section |
| GRP hull fabrication | MODERATE — some capability | Less preferred for structural LARS loads |
| **Professional Hypalon tube fabrication** | **VERY LIMITED / NONE** | **No known VN manufacturer of military-grade inflatable tubes** |
| **Professional RIB assembly (hull + tube bonding)** | **LIMITED** | Critical skill — tube-to-hull bond integrity is safety-critical |
| Outboard engine sourcing | GOOD — Yamaha/Mercury dealers throughout VN | Standard commercial procurement |
| LARS fabrication | MODERATE — custom aluminum fabrication available | Same as Path 1 |
| USBL integration | LIMITED — specialist required | Same as Path 1 |

### 8.2 Manufacturing Options

**Option A: Full Import (lowest risk, lowest nội địa hóa)**
- Import complete RIB hull from established manufacturer (Zodiac Milpro, Willard Marine, ASIS Boats UAE, Highfield China)
- Locally integrate LARS, engine, USBL, navigation
- Nội địa hóa: ~30-40% [ASSUMPTION]
- Cost: highest hull cost but lowest technical risk
- Lead time: 12-20 weeks for hull delivery

**Option B: Hybrid Build (balanced)**
- Build aluminum rigid hull locally (VN shipyard)
- Import Hypalon tube set from specialist (Henshaw UK, Zodiac, or Chinese supplier)
- Local tube-to-hull bonding/attachment (requires specialist training or imported labor)
- Locally fabricate and integrate LARS
- Nội địa hóa: ~50-60% [ASSUMPTION]
- Cost: moderate
- Lead time: 8-12 weeks hull + 8-16 weeks tube delivery (parallel)
- **Risk**: tube-to-hull bonding quality — this is a specialized skill

**Option C: Full Local Build (highest risk, highest nội địa hóa)**
- Build rigid hull locally
- Attempt local tube fabrication (PVC only — Hypalon requires specialist equipment)
- Nội địa hóa: ~70-80%
- **NOT RECOMMENDED** — PVC tubes inadequate for tropical military use, and tube fabrication quality is safety-critical

**Recommendation**: Option B (Hybrid Build) — best balance of risk, cost, and nội địa hóa. Accept 50-60% local content.

### 8.3 Nội Địa Hóa Impact

| Path | Nội Địa Hóa Target (70%) | Achievable | Gap |
|------|--------------------------|------------|-----|
| Path 1 (Aluminum monohull) | 70% | 70-80% | Met |
| **Path 2 (RIB - Option B)** | **70%** | **50-60%** | **10-20% shortfall** |

This is a **significant disadvantage** of Path 2 relative to Path 1 for programs with nội địa hóa requirements.

---

## 9. Operational Concept

### 9.1 Split-Lift Sequence (4 Crane Cycles)

| Step | Action | Duration (min) | Notes |
|------|--------|----------------|-------|
| 1 | Crane lifts tender (RIB) from deck, lowers to water | 5-8 | RIB lighter than Path 1 — faster, easier lift |
| 2 | Crew boards tender (ladder or scramble net) | 2-3 | |
| 3 | Crane lifts UUV from deck, lowers to tender ramp/cradle | 5-8 | Crew guides UUV onto cradle |
| 4 | Tender secures UUV, departs to launch area | 3-5 | |
| — | **Total deployment time** | **15-24 min** | Slightly faster than Path 1 due to lighter lift |
| 5 | After UUV recovery, tender returns alongside | — | |
| 6 | Crane lifts UUV from tender to deck | 5-8 | |
| 7 | Crew debarks | 2-3 | |
| 8 | Crane lifts tender from water to deck | 5-8 | |
| — | **Total recovery time** | **12-19 min** | |

### 9.2 Operational Advantages

- Lighter tender = easier crane handling, less pendulum effect
- Tubes provide natural fendering during alongside operations — less risk of hull damage
- Better crew comfort in transit (tube shock absorption)
- Higher reserve buoyancy = better safety margin

### 9.3 Operational Risks

- **Tube puncture during alongside operations**: Despite fendering benefit, crane hook, sharp edges on mother ship, or UUV fins could puncture tube
- **Tube deflation at sea**: Catastrophic if multiple chambers fail — RIB design uses multiple independent chambers (typically 5-7) for redundancy
- **UUV contact with tubes during recovery**: Torpedo nose or fins could abrade/puncture inner tube faces — **must install chafe guards**
- **Reduced working deck width**: 1.8-2.0m internal beam vs 2.4m on Path 1 — crew has less space to work alongside UUV

---

## 10. Pros and Cons

### 10.1 Advantages

| # | Advantage | Significance |
|---|-----------|--------------|
| 1 | **Lightest option** — best crane margin (~592 kg to 2.0t) | HIGH — most forgiving for weight growth |
| 2 | **Excellent seakeeping** — tubes provide damping, reserve buoyancy | HIGH — improves SS3-4 operations |
| 3 | **Natural fendering** — tubes protect during alongside ops | MODERATE — reduces hull damage risk |
| 4 | **Crew comfort** — softer ride, tube shock absorption | MODERATE — improves crew effectiveness |
| 5 | **Proven military platform** — RIBs used globally by navies | HIGH — operational concept validated |
| 6 | **Longer hull (7m)** — less UUV overhang than 6.5m monohull | MODERATE — better weight distribution |
| 7 | **Self-righting tendency** — safer in heavy weather | MODERATE — safety benefit |

### 10.2 Disadvantages

| # | Disadvantage | Significance |
|---|-------------|--------------|
| 1 | **Structural uncertainty for LARS loads** — no precedent for concentrated LARS loads on RIB hull | **HIGH — KEY RISK** |
| 2 | **Tube durability in tropics** — 5-8 year replacement cycle, $15-25K each | HIGH — lifecycle cost |
| 3 | **Limited VN manufacturing** — tubes must be imported | HIGH — nội địa hóa shortfall |
| 4 | **Narrow internal beam** — 1.8-2.0m constrains funnel width and working space | MODERATE — reduces recovery success margin |
| 5 | **Higher maintenance** — tubes require inspection, cleaning, repair, replacement | MODERATE — ongoing cost |
| 6 | **Nội địa hóa target (70%) unlikely to be met** — achievable ~50-60% | HIGH for regulated programs |
| 7 | **LARS reinforcement partially negates weight advantage** — +80-150 kg additional structure | MODERATE |
| 8 | **Tube puncture risk during UUV operations** — torpedo fins, crane hooks | MODERATE — mitigated by chafe guards |

---

## 11. Risk Register (Path 2 Specific)

| ID | Risk | Likelihood | Impact | Rating | Mitigation |
|----|------|------------|--------|--------|------------|
| R2-01 | **Structural inadequacy for concentrated LARS loads** — hull or tube-hull interface fails under LARS cycling | MEDIUM | HIGH | **HIGH** | FEA analysis before build; prototype load testing; conservative reinforcement design |
| R2-02 | **Tube degradation in tropical climate** — premature failure requiring unplanned replacement | HIGH | MEDIUM | **HIGH** | Hypalon only (not PVC); UV covers when stored; annual inspection; budget for replacement |
| R2-03 | **Narrow internal beam constrains V-funnel** — reduced recovery success rate in high sea states | MEDIUM | MEDIUM | **MEDIUM** | Optimize funnel geometry; accept SS2 recovery limit instead of SS3 |
| R2-04 | **VN manufacturing capability insufficient for professional RIB** — quality shortfall in tube-hull bonding | MEDIUM | HIGH | **HIGH** | Use Option B (hybrid) — import tubes, local hull; or full import |
| R2-05 | **Tube puncture during UUV operations** — loss of buoyancy compartment | MEDIUM | MEDIUM | **MEDIUM** | Multi-chamber tubes (5-7 independent); chafe guards on inner tube faces; repair kit aboard |
| R2-06 | **Nội địa hóa target not met** — program compliance issue | HIGH | MEDIUM | **HIGH** | Accept shortfall or reclassify tube bonding as local content; negotiate with customer |
| R2-07 | **Tube replacement logistics** — long lead time (8-16 weeks) for imported tubes | MEDIUM | LOW | **MEDIUM** | Pre-order spare tube set; establish supplier agreement |
| R2-08 | **Fatigue cracking at LARS reinforcement welds** — structural failure over time | LOW | HIGH | **MEDIUM** | NDT inspection annually; conservative weld design; use classification society guidance |

---

## 12. Cost Estimate

### 12.1 Capital Cost Breakdown

| Item | Low ($K) | High ($K) | Nominal ($K) | Notes |
|------|----------|-----------|--------------|-------|
| Hull (aluminum, local build) | 25 | 45 | 35 | VN shipyard, 7m aluminum deep-V |
| Tubes (imported, Hypalon) | 15 | 30 | 22 | Henshaw/Zodiac, custom fit |
| Tube-hull bonding/integration | 5 | 15 | 10 | Specialist labor (may need imported technician) |
| Engine (outboard 115hp) | 15 | 25 | 18 | Yamaha/Mercury, VN dealer |
| LARS system (fabrication) | 20 | 40 | 30 | Local aluminum fabrication |
| LARS reinforcement structure | 10 | 20 | 15 | Additional to standard LARS |
| USBL system | 30 | 80 | 50 | Blueprint Subsea or equivalent |
| Navigation/electrical | 8 | 15 | 12 | GPS, VHF, compass, batteries |
| Safety equipment | 3 | 8 | 5 | PFDs, flares, fire ext. |
| Integration and testing | 25 | 50 | 35 | Sea trials, LARS testing, USBL calibration |
| **TOTAL** | **$156K** | **$328K** | **$232K** | |

### 12.2 Lifecycle Cost (15 Years)

| Item | Cost ($K) | Frequency | 15-Year Total ($K) |
|------|-----------|-----------|---------------------|
| Capital cost | 232 | Once | 232 |
| Tube replacement | 22 | Every 5-7 years (2-3 replacements) | 44-66 |
| Engine overhaul | 5 | Every 1000 hours | 15-25 |
| Annual maintenance | 5 | Annual | 75 |
| LARS inspection/maintenance | 3 | Annual | 45 |
| **15-Year Total** | | | **$411-443K** |

### 12.3 Cost Comparison Note

Capital cost is similar to Path 1 (aluminum monohull), but **lifecycle cost is $44-66K higher** due to tube replacements. This is the "hidden cost" of the RIB path.

---

## 13. Verdict

### 13.1 Feasibility Assessment: **MARGINAL**

Path 2 (RIB) is technically feasible but carries higher risk and higher lifecycle cost than Path 1 (aluminum monohull) for this specific application. The RIB's natural advantages (lightweight, seakeeping, fendering) are partially offset by structural concerns, tube durability, manufacturing limitations, and nội địa hóa shortfall.

### 13.2 Key Conditions for Feasibility

1. **Structural analysis (FEA) must confirm** that reinforced RIB hull can sustain LARS loads with acceptable fatigue life — this is a MUST before selecting this path
2. **Hypalon tubes only** — PVC is not acceptable for tropical military use
3. **Hybrid build (Option B)** — import tubes, build hull locally
4. **Accept nội địa hóa at 50-60%** — or find alternative way to meet 70% requirement
5. **Budget for tube replacement** — $44-66K over 15-year life
6. **Install chafe guards** on inner tube faces to prevent UUV-induced tube damage

### 13.3 What Must Be Proven Before Selecting Path 2

| # | Question | Method | Go/No-Go Threshold |
|---|----------|--------|---------------------|
| 1 | Can reinforced RIB hull sustain LARS loads? | FEA analysis of representative 7m RIB with LARS reinforcements | Stress < 0.6 x yield at all points; fatigue life > 5000 cycles |
| 2 | Is tube-hull interface integrity maintained under LARS cycling? | FEA + physical pull test on tube attachment | No bond degradation after 500 simulated LARS cycles |
| 3 | Can VN shipyard bond tubes to hull to professional standard? | Trial bonding on test piece, peel test | Bond strength > 8 kN/m (ISO 1421 equivalent) |
| 4 | Is funnel width (1400-1600mm) adequate for SS3 recovery? | Simulation or scale model test | Recovery success rate > 80% in SS3 |

### 13.4 Comparison Summary (Path 2 vs Path 1)

| Criterion | Path 1 (Aluminum Monohull) | Path 2 (RIB) | Winner |
|-----------|---------------------------|--------------|--------|
| Weight margin to crane limit | ~192 kg (10%) | ~592 kg (30%) | **Path 2** |
| Structural confidence for LARS | HIGH (known loads on monohull) | **MEDIUM-LOW (unproven)** | **Path 1** |
| Seakeeping | Good | Excellent | **Path 2** |
| Internal beam / funnel width | 2.2-2.4m / ~2.2m | 1.8-2.0m / ~1.4-1.6m | **Path 1** |
| VN manufacturing capability | HIGH | LOW-MODERATE | **Path 1** |
| Nội địa hóa | 70-80% | 50-60% | **Path 1** |
| Capital cost | ~$220K | ~$232K | Similar |
| 15-Year lifecycle cost | ~$370K | ~$411-443K | **Path 1** |
| Tube maintenance | None | Ongoing | **Path 1** |
| Crew comfort | Moderate | Good | **Path 2** |
| Fendering (alongside ops) | Needs fenders | Natural | **Path 2** |

**Bottom line**: Path 2 wins on weight margin, seakeeping, and fendering. Path 1 wins on structural confidence, manufacturing, nội địa hóa, funnel width, and lifecycle cost. For a UUV LARS vessel where structural integrity under concentrated loads is paramount, **Path 1 (aluminum monohull) is the lower-risk choice**. Path 2 remains viable if weight margin is the overriding constraint or if structural analysis confirms LARS load capability.

---

*Document: VN-XUONG-UUV Phase 1 Trade Study — Path 2: RIB*
*Version: 1.0 | Created: 2026-03-06 | Status: DRAFT*
*Next action: Compare with Path 1 and Path 3 results → downselect decision*
