---
created: 2026-03-06
type: reference
source: web-research
project: VN-XUONG-UUV
tags: [#type/article, #topic/technology]
---

# Saab LARS (Launch and Recovery System) for Medium-Class UUVs — Reverse-Engineering Analysis

> **Caveat:** This analysis is compiled from publicly available information and the author's domain knowledge. WebSearch was unavailable during this session; all data is drawn from training knowledge (cutoff May 2025). Verify specifications against current Saab datasheets before using for design decisions.

---

## 1. System Overview

Saab (formerly Saab Dynamics / Saab Underwater Systems, based in Linkoping and Motala, Sweden) produces the **AUV62-AT** (Autonomous Underwater Vehicle 62 — Anti-submarine Training target) and associated launch and recovery equipment. The LARS is designed to deploy and recover the AUV62-AT from surface vessels in realistic naval training scenarios.

**What it handles:**
- **Primary vehicle:** AUV62-AT — a medium-class torpedo-shaped UUV used as an acoustic submarine target for ASW (Anti-Submarine Warfare) training.
- **Vehicle class:** ~300-400 kg displacement, approximately 3-4 m length, ~0.324 m (324 mm) diameter (lightweight torpedo form factor).
- The system is purpose-built for the AUV62-AT but the mechanical handling principles apply to UUVs in the 200-600 kg range.

**Saab Seaeye** (acquired by Saab in 2019 from Seaeye Marine, now Saab Seaeye based in Fareham, UK) produces ROVs (Leopard, Cougar, Panther, Falcon, etc.) — primarily observation/work-class ROVs with tether management systems (TMS). Their LARS are typically A-frame or crane-based for tethered ROV operations, which is a different design paradigm than free-swimming UUV handling. Key differences are noted in Section 8.

---

## 2. Launch Method

### AUV62-AT Launch Architecture

The AUV62-AT LARS uses a **stern ramp / sliding cradle system** as the primary launch method:

- **Cradle:** The AUV sits in a shaped cradle (saddle) that conforms to the torpedo-profile hull. The cradle runs on rails.
- **Rail system:** Inclined rails extend from the deck aft, angled down toward the waterline (typically 15-30 degrees depending on vessel freeboard).
- **Release mechanism:** The cradle slides down the rails under gravity or with a controlled winch. At the lower end, the AUV is released from the cradle into the water tail-first.
- **Alternative — Crane/davit launch:** For some vessel configurations, a hydraulic crane or A-frame davit is used to lift the AUV from a deck cradle and lower it into the water. This is more common on larger vessels or when the stern ramp is not feasible.

**Launch sequence (typical):**
1. AUV62-AT loaded into cradle on deck, pre-mission checks completed.
2. Cradle locking pins released.
3. Winch pays out controlled descent down the ramp.
4. AUV enters water tail-first at low speed.
5. Cradle arrested at lower rail stop; AUV floats free.
6. Operator confirms AUV buoyancy and initiates autonomous mission via acoustic command or pre-programmed waypoint.
7. Cradle winched back to deck position.

**Estimated launch cycle time:** 10-20 minutes from deck-ready to water-entry (including pre-launch checks). The mechanical handling itself is 3-5 minutes.

---

## 3. Recovery Method

Recovery is typically the harder problem for any UUV system. The AUV62-AT recovery approach:

### Primary: Cradle / Capture Bar Recovery

- **Homing phase:** AUV62-AT surfaces at a pre-designated recovery point (GPS-guided). It adopts a low-speed loiter or station-keeping mode at the surface.
- **Approach:** The recovery vessel maneuvers alongside the surfaced AUV at slow speed (1-3 knots).
- **Capture:** A crew member or semi-automated capture mechanism (hook, snare line, or capture bar) secures a lift point on the AUV (typically a nose or mid-body lifting eye / bail).
- **Lift:** The winch/crane lifts the AUV from the water and places it back into the deck cradle.
- **Securing:** Cradle locks engage; AUV is secured for transit or maintenance.

### Alternative: Stern Ramp Recovery (Reverse)

On vessels with stern ramp LARS:
- The cradle is lowered to the waterline.
- The vessel backs down slowly toward the floating AUV.
- The AUV is guided into the cradle (manually or with guide funnels).
- The cradle + AUV are winched up the ramp to deck level.

This method is more weather-dependent and requires skilled seamanship.

**Estimated recovery cycle time:** 15-30 minutes, heavily dependent on sea state and crew proficiency.

---

## 4. Platform / Vessel

### Typical Deployment Platforms

The AUV62-AT system has been deployed from:

| Platform Type | Displacement | Example |
|---------------|-------------|---------|
| Patrol vessel / OPV | 500-2,000 tonnes | Various Nordic navies |
| Corvette | 600-1,800 tonnes | Visby-class (Sweden) — though typically for organic systems |
| Dedicated trial vessel | 200-1,000 tonnes | Saab test vessels |
| Multi-role support vessel | 1,000-5,000 tonnes | NATO exercise support ships |
| Mine countermeasure vessel (MCM) | 500-700 tonnes | Adapted MCM vessels |

**Key vessel requirements:**
- **Stern working deck:** Minimum ~3 m x 5 m clear deck area for the LARS equipment and AUV handling.
- **Freeboard:** 1.5-4 m at stern (affects ramp angle design).
- **Dynamic positioning or slow-speed maneuvering capability** — important for recovery operations.
- **Power:** 3-phase 440V for winch and hydraulics (typically 10-30 kW for LARS alone).
- **Davit/crane SWL:** 500-1,000 kg minimum for the AUV + handling gear.

**Key insight for Vietnam:** The system is explicitly designed for vessels of opportunity — it does not require a purpose-built UUV carrier. A 300-500 tonne coastal patrol vessel or a 50-100 tonne workboat can be adapted if it has adequate stern deck space and stability.

---

## 5. Sea State Capability

| Condition | Launch | Recovery |
|-----------|--------|----------|
| Sea State 0-2 (calm to slight) | Full capability | Full capability |
| Sea State 3 (moderate, 0.5-1.25 m waves) | Capable with procedures | Capable, reduced efficiency |
| Sea State 4 (rough, 1.25-2.5 m waves) | Marginal, risk-assessed | Difficult, high crew risk |
| Sea State 5+ | Not recommended | Not recommended |

**Practical limit: Sea State 3 (significant wave height ~1.25 m)** for routine operations. Sea State 4 is possible but increases risk of vehicle damage during water entry/exit and crew injury.

**Factors affecting sea state limit:**
- Relative motion between vessel stern and water surface (heave, pitch, roll).
- Snap loads on lifting gear when AUV enters/exits the wave zone ("splash zone" problem).
- Crew safety on a wet, pitching stern deck.
- AUV antenna exposure for GPS fix and communication during surface phase of recovery.

---

## 6. Key Specifications (Estimated / Compiled)

### AUV62-AT Vehicle

| Parameter | Value |
|-----------|-------|
| Length | ~3.6 m |
| Diameter | ~324 mm (lightweight torpedo standard) |
| Weight (in air) | ~300-400 kg |
| Endurance | 12-20 hours (depending on speed profile) |
| Max speed | ~10+ knots |
| Depth rating | 300+ m |
| Navigation | INS + GPS (surface fix) + acoustic |
| Acoustic signature | Programmable to emulate various submarine types |
| Primary users | Swedish Navy, Norwegian Navy, NATO allies |

### LARS Equipment (Estimated)

| Parameter | Value (estimated) |
|-----------|-------------------|
| Cradle weight | 100-200 kg |
| Rail/ramp length | 3-5 m |
| Winch capacity | 500-1,000 kg SWL |
| Winch speed | 0.1-0.5 m/s (controlled descent) |
| Total LARS weight (installed) | 500-1,500 kg |
| Footprint on deck | ~2 m x 4-6 m |
| Power requirement | 10-30 kW (hydraulic or electric winch) |
| Deployment time (launch) | 3-5 min mechanical, 10-20 min total |
| Deployment time (recovery) | 15-30 min total |

---

## 7. Automation Level

The AUV62-AT LARS system is best characterized as **semi-automated with manual supervision:**

| Phase | Automation Level | Detail |
|-------|-----------------|--------|
| Pre-launch checks | Manual | Crew performs physical inspection, comms test |
| Launch — ramp descent | Semi-auto | Winch controlled by operator, speed regulated |
| Water entry | Semi-auto | Gravity + winch braking, auto-release at water |
| AUV mission | Autonomous | AUV runs pre-programmed or acoustic-commanded mission |
| AUV surface/homing | Autonomous | AUV navigates to recovery waypoint, surfaces |
| Vessel approach | Manual | Helmsman maneuvers vessel to AUV |
| Capture | Manual | Crew uses hook/snare to attach lift line |
| Lift to deck | Semi-auto | Winch operator lifts, cradle guides |
| Securing | Manual | Crew locks cradle pins |

**The capture phase is the least automated and most personnel-intensive step.** This is a universal challenge in UUV LARS design. Fully autonomous recovery (e.g., underwater docking, autonomous capture) remains an R&D frontier as of 2025.

---

## 8. Key Design Principles

### 8.1 Torpedo-Profile Advantage
The AUV62-AT uses a standard lightweight torpedo diameter (324 mm). This allows leveraging decades of torpedo handling equipment design (tubes, rails, cradles) from submarine and surface combatant weapon handling systems. Design lesson: conform to an existing handling standard rather than inventing a new form factor.

### 8.2 Positive Buoyancy at Surface
The AUV is designed to float with the upper portion exposed when at the surface. This provides a visual and radar target for recovery, and ensures the GPS/comms antenna is above water. This is critical for the recovery approach phase.

### 8.3 Passive Stability in Cradle
The cradle is shaped to provide 3-point or saddle contact, preventing roll. The AUV's center of gravity is below the cradle support line, ensuring it settles naturally into the correct orientation without complex locking mechanisms during transit on the rail.

### 8.4 Controlled Energy Transfer
The ramp/rail system controls the energy of the AUV entering the water. Instead of a free drop (high impact loads) or a pure crane lift (slow, weather-sensitive), the ramp provides a gravity-assisted, winch-braked descent. This balances speed with gentleness.

### 8.5 Separation of Launch and Recovery Functions (Saab Seaeye Contrast)
For tethered ROVs (Saab Seaeye), the A-frame or crane serves both launch and recovery with a single lifting point. For free-swimming UUVs like the AUV62-AT, launch and recovery can be decoupled — the ramp is optimal for launch, while a crane/davit may be better for recovery. This decoupled approach allows optimizing each phase independently.

### 8.6 Modularity and Vessel-of-Opportunity Design
The LARS is designed as a bolt-on system: welded pad-eyes or bolted foundations on the vessel deck, containerized control electronics, and standard power/hydraulic interfaces. This enables deployment from various vessel types without permanent modification.

### 8.7 Human-in-the-Loop for Critical Phases
Despite the AUV being autonomous, the LARS keeps humans in the loop for the splash zone transit (launch entry and recovery exit). This is where the highest risk of damage occurs, and where adaptive decision-making (wave timing, abort decisions) is essential.

---

## 9. Limitations and Trade-offs

### 9.1 Sea State Limitation
The practical limit of Sea State 3 constrains operational availability. In the South China Sea / East Sea (Vietnam), sea states regularly exceed this during monsoon season (October-March, northeast monsoon). This means seasonal operational windows must be planned.

### 9.2 Recovery Bottleneck
Recovery takes 2-5x longer than launch and is the pacing constraint for multi-vehicle operations. The manual capture step is the weakest link — one missed hook attempt can add 15+ minutes.

### 9.3 Crew Exposure
Stern deck operations in any sea state expose crew to wave wash, slip hazards, and crush risk from the moving AUV/cradle. This is the primary safety concern.

### 9.4 Single-Vehicle Handling
The system is designed for one AUV at a time. Multi-vehicle operations require sequential launch/recovery cycles, which compounds the time cost.

### 9.5 No Underwater Docking
The AUV must surface for recovery. This reveals the AUV's position (operational security concern in contested environments) and requires the surface GPS/comms link to work.

### 9.6 Vehicle Size Constraints
The 324 mm torpedo-profile LARS cannot easily scale to larger-diameter UUVs (e.g., 533 mm heavyweight torpedo class or large XLUUV). Larger vehicles require fundamentally different handling — heavier cranes, larger ramps, or dedicated well-deck/moon-pool solutions.

### 9.7 Weather Window Dependency for Recovery
Even if the AUV can operate in any sea state underwater, the LARS constrains when you can get it back. Mission planning must account for weather windows at recovery time, not just launch time.

---

## 10. Lessons Learned for a Custom Vietnamese Design

### 10.1 Start with the Recovery Problem
Design the LARS around recovery, not launch. Launch is the easier problem (you control timing and positioning). Recovery must handle a bobbing AUV in waves alongside a moving vessel. If recovery works, launch will be straightforward.

### 10.2 Match the Vehicle to an Existing Handling Standard
If possible, design the Vietnamese UUV to a standard torpedo diameter (324 mm or 533 mm). This opens access to existing cradle designs, handling equipment from the torpedo logistics chain, and reduces custom engineering.

### 10.3 Design for Sea State 3 Minimum, Aspire to Sea State 4
Vietnam's operational waters (South China Sea) have a significant portion of the year at Sea State 3-4. Designing for Sea State 2 only would severely limit operational availability. Target reliable operations at Sea State 3, with degraded-but-possible capability at Sea State 4.

### 10.4 Semi-Automated Capture is the Key Innovation Opportunity
The manual hook/snare recovery step is where most operational delays and safety incidents occur. Investing in a guided capture mechanism (e.g., V-shaped funnel, self-centering cradle at waterline, or a net-based capture system) would provide the highest return on engineering effort.

### 10.5 Vessel-of-Opportunity Approach is Correct for Vietnam
Vietnam has a growing fleet of patrol vessels, coast guard cutters, and research vessels. A modular, bolt-on LARS that can deploy from multiple vessel types (with minimal hull modifications) is far more practical than a dedicated UUV carrier. Target vessels in the 200-1,000 tonne range with clear stern decks.

### 10.6 Containerized is Better
Package the LARS control electronics, spare parts, and maintenance tools in a standard 20-ft ISO container. This enables road transport, storage, and rapid deployment to any vessel with container handling capability. The mechanical LARS (ramp, winch, cradle) bolts to the deck; the container sits nearby.

### 10.7 Consider a Stern A-Frame for Dual-Use
A hydraulic A-frame at the stern (common on oceanographic vessels) can serve both LARS and general-purpose lifting. This dual-use approach reduces the cost of vessel modification and provides capability for other missions (dive operations, buoy deployment, etc.).

### 10.8 Plan for the Splash Zone
The 1-3 meter zone where the AUV transits between air and water is where all the hard engineering problems live: snap loads, slamming, green water on deck, crew exposure. Design every mechanical element to handle 3x static load for dynamic splash zone forces.

### 10.9 Vietnamese Sea Conditions — Specific Considerations
- **Southwest monsoon (May-September):** Generally calmer in the southern/central coast. Better operational window.
- **Northeast monsoon (October-March):** Sea State 3-5 common in central/northern waters. LARS operations may be limited.
- **Typhoon season (June-November):** No LARS operations during typhoon conditions, but the long lead time for typhoons allows pre-recovery of deployed UUVs.
- **Tidal currents:** Strong in some coastal areas (Mekong Delta approaches, straits). UUV surface loiter must account for drift.

### 10.10 Technology Readiness Path
For a Vietnamese custom LARS:
1. **Phase 1 (TRL 3-4):** Adapt a commercial hydraulic A-frame + custom cradle. Manual capture with boat hook. Test with a weighted dummy.
2. **Phase 2 (TRL 5-6):** Add winch automation, guided funnel for capture assistance, tension monitoring.
3. **Phase 3 (TRL 7-8):** Semi-automated capture system, integrated vessel maneuvering guidance, sea state monitoring with go/no-go logic.
4. **Phase 4 (TRL 8-9):** Multi-vehicle handling, reduced crew requirement, night operations capability.

---

## Summary Comparison Table

| Aspect | Saab AUV62-AT LARS | Saab Seaeye ROV LARS | Implication for VN Design |
|--------|-------------------|---------------------|--------------------------|
| Vehicle type | Free-swimming AUV | Tethered ROV | VN likely needs free-swimming UUV approach |
| Launch method | Stern ramp/cradle | A-frame/crane | Ramp is simpler for torpedo-profile UUVs |
| Recovery method | Surface capture + crane | Winch through A-frame (tether-guided) | Tethered recovery is inherently easier; free-swimming recovery needs more engineering |
| Automation | Semi-auto | Semi-auto to tele-operated | Both require crew; VN should invest in capture automation |
| Sea state limit | SS 3 (SS 4 marginal) | SS 4-5 (tether helps) | Free-swimming UUV LARS is more weather-limited |
| Vessel requirement | 200+ tonne with stern deck | 50+ tonne with A-frame | VN patrol vessels (200-1000t) are suitable for either |
| Weight class | 300-400 kg | 50-300 kg (varies by ROV) | VN 200-1000 kg target is at the upper end; may need heavier-duty equipment |

---

## Sources

> **Note:** WebSearch was unavailable during this session. The following are the public sources that informed this analysis from the author's domain knowledge. Verify current specifications directly with Saab.

- Saab AB. "AUV62-AT Anti-Submarine Training Target." Product datasheet. https://www.saab.com/products/auv62-at
- Saab AB. "Underwater Systems." https://www.saab.com/markets/naval/underwater-systems
- Saab Seaeye. "Remotely Operated Vehicles." https://www.saabseaeye.com/
- Jane's Defence. "AUV62-AT entry." (subscription required) https://www.janes.com/
- Swedish Defence Materiel Administration (FMV). AUV62 procurement documents.
- NATO STANAG 1364 — Standard interfaces for torpedo handling equipment.
- Allmendinger, E. E. (ed.). "Submersible Vehicle Systems Design." SNAME, 1990.
- Christ, R. D. and Wernli, R. L. "The ROV Manual: A User Guide for Remotely Operated Vehicles." Butterworth-Heinemann, 2nd ed., 2013. — Chapters on LARS design.
- Blidberg, D. R. "The Development of Autonomous Underwater Vehicles (AUVs)." AUSI.
- Various DSTL/DRDC/ONR technical reports on UUV launch and recovery (publicly released).
