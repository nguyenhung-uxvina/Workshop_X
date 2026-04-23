---
created: 2026-03-06
type: reference
source: knowledge-base-synthesis
project: VN-XUONG-UUV
tags: [#type/article, #topic/technology]
note: Web research tools were unavailable. This analysis is synthesized from pre-training knowledge (cutoff May 2025). Verify all specifications against current ECA Group / Robotics documentation before use in design decisions.
---

# ECA Group LARS Analysis — Medium-Class UUV (200-1000 kg)

## 1. System Overview

ECA Group (now part of the Robotics division, formerly ECA Robotics, acquired by Groupe Gorgé) is a French defense and robotics company headquartered in Toulon. They are one of Europe's leading manufacturers of mine countermeasure (MCM) systems and autonomous underwater vehicles.

**Key UUV products in the medium class:**

| Vehicle | Class | Weight (in-air) | Length | Primary Role |
|---------|-------|-----------------|--------|--------------|
| A18-M | Medium AUV | ~700 kg | ~5.5 m | Mine countermeasures, survey |
| A18-D | Medium AUV | ~800 kg | ~5.5 m | Deep operations variant |
| A9-M | Small-Medium AUV | ~300 kg | ~3.5 m | Shallow water MCM |
| Inspector 125 | ROV | ~110 kg | ~1.2 m | Mine identification/neutralization |

The A18 is the flagship medium-class AUV. It carries synthetic aperture sonar (SAS), side-scan sonar, and optionally a multibeam echosounder. It is designed for autonomous mine hunting missions in the detect-to-engage MCM kill chain.

**UMIS (Unmanned MCM Integrated System):**
UMIS is ECA Group's integrated mine countermeasure system that combines multiple unmanned platforms — typically the A18-M AUV for detection, the Inspector 125 ROV for identification and neutralization, a USV (unmanned surface vehicle) acting as a relay and deployment platform, and a shore or ship-based command center. The LARS for the AUV is a critical subsystem within UMIS.

---

## 2. Launch Method

ECA Group uses primarily two LARS approaches for their medium-class UUVs:

### 2.1 Crane / A-Frame Based LARS (Ship-Deployed)

For deployment from dedicated MCM vessels or mother ships:

- **Type:** Telescopic hydraulic crane or A-frame with winch
- **Mechanism:** The AUV sits in a dedicated cradle on deck. The crane hooks onto a lift point (typically a certified pad-eye or sling arrangement at the AUV's center of gravity). The crane lifts the AUV over the side and lowers it to the water surface.
- **Release:** Once waterborne and buoyancy-supported, the hook/sling is released (either manually by divers/RIB crew, or via an automatic release mechanism triggered when tension drops below threshold).
- **Typical cycle:** 15-30 minutes for full launch sequence including pre-launch checks.

### 2.2 Stern Ramp / Slipway LARS (USV or Small Vessel)

For deployment from USVs (such as the Inspector USV or third-party USVs):

- **Type:** Inclined stern ramp with rail/track system
- **Mechanism:** The AUV sits on a cradle that rides on rails. The cradle is pushed or winched aft along the ramp until the AUV slides into the water stern-first.
- **Advantage:** Lower sea state sensitivity than crane operations. Can be semi-automated.
- **Constraint:** Requires the vessel to have a stern ramp or transom opening, limiting vessel selection.

### 2.3 Side-Launch (Containerized / Expeditionary)

ECA has also demonstrated containerized MCM systems where:

- AUV is stored in a standard ISO container
- Deployed via the host vessel's own crane or port crane
- Cradle can be designed for direct water entry

---

## 3. Recovery Method

Recovery is the harder problem. ECA Group uses:

### 3.1 Crane Recovery with Capture Frame

- AUV surfaces at a pre-programmed location alongside the vessel
- A capture frame or "horse" (a U-shaped cradle lowered into the water) is deployed by the crane
- The AUV is guided into the capture frame either manually (divers/crew visual guidance) or by USBL acoustic positioning
- Once in the cradle, the crane lifts the assembly back to deck
- **Key challenge:** Requires the AUV to maintain station alongside the vessel, which is difficult in currents and waves

### 3.2 Stern Ramp Recovery

- AUV is guided to approach the stern ramp from behind the vessel
- A capture mechanism (net, funnel, or V-guide) at the waterline directs the AUV onto the cradle
- A winch pulls the cradle (with AUV) up the ramp to the deck
- **Advantage:** The vessel can make slow headway, creating a calmer stern wake zone for the AUV approach
- **Challenge:** Requires precision approach control; risk of AUV-hull collision

### 3.3 USV Relay Recovery

In the UMIS concept:
- The USV (unmanned surface vehicle) recovers the AUV rather than the mother ship
- This reduces the mother ship's exposure to the minefield
- The USV then transits back to the mother ship for data download and AUV servicing
- Recovery methods on the USV mirror the stern ramp approach at smaller scale

---

## 4. Platform / Vessel Compatibility

ECA Group's LARS are designed for multiple platform types:

| Platform Type | Displacement | Example | LARS Type |
|---------------|-------------|---------|-----------|
| Dedicated MCM vessel | 500-900 t | Belgian/Dutch rMCM (replacement program) | Crane/A-frame, mission bay |
| OPV with mission bay | 1000-3000 t | Various NATO navies | Crane, containerized |
| USV (large) | 10-20 t | Inspector USV / SKELDAR-class | Stern ramp |
| Shore-based | N/A | Containerized system | Port crane or truck crane |
| Minehunter (legacy) | 500-700 t | Tripartite class (Belgian/French/Dutch) | Ship crane |

**Key vessel design features for ECA LARS:**
- Flat working deck aft (minimum ~4 x 6 m for A18 operations)
- Hydraulic power supply for crane/winch (typically 200+ bar, ~30 L/min)
- Dynamic positioning or at minimum good station-keeping capability
- USBL acoustic tracking system mounted on hull
- Ideally: mission bay with overhead crane and stern opening

---

## 5. Sea State Capability

| Operation | Sea State (Douglas) | Significant Wave Height | Wind |
|-----------|-------------------|------------------------|------|
| Launch (crane) | SS 3 | Up to ~1.25 m | Up to Beaufort 4 |
| Launch (stern ramp) | SS 3-4 | Up to ~1.5 m | Up to Beaufort 5 |
| Recovery (crane) | SS 2-3 | Up to ~0.75-1.0 m | Up to Beaufort 4 |
| Recovery (stern ramp) | SS 3 | Up to ~1.25 m | Up to Beaufort 4 |
| AUV autonomous ops | SS 4-5 | Up to ~2.5 m (submerged) | N/A (submerged) |

**Critical insight:** Recovery is always the limiting operation. The AUV can operate autonomously in worse conditions than the LARS can recover it. This drives mission planning — you must forecast weather for the recovery window, not just the launch.

---

## 6. Key Specifications (Estimated for A18-M LARS)

| Parameter | Value | Notes |
|-----------|-------|-------|
| AUV weight (in-air) | ~700 kg | A18-M typical |
| LARS rated capacity | 1000-1500 kg SWL | Safety margin ~2x |
| Crane reach | 3-6 m outboard | Depends on installation |
| Winch speed | 5-15 m/min | Variable speed, slower near water |
| Launch cycle time | 15-30 min | Including pre-launch checks |
| Recovery cycle time | 20-45 min | Weather dependent |
| Cradle dimensions | ~6.0 x 1.2 x 0.8 m | Sized for A18 hull |
| Power requirement | 15-30 kW hydraulic | For crane + winch |
| Deck footprint | ~4 x 7 m | Including swing radius |
| Operating temperature | -10 to +45 C | Tropical/Arctic capable |

---

## 7. Automation Level

ECA Group's approach to LARS automation has evolved:

| Generation | Automation Level | Description |
|------------|-----------------|-------------|
| Legacy (pre-2015) | Manual | Crew operates crane, manual hook-on/release, diver assistance for recovery |
| Current (2015-2025) | Semi-automated | Automated winch control, USBL-guided approach, crew monitors and intervenes. Launch: operator presses "go" after checks. Recovery: operator guides final capture. |
| UMIS concept | Highly automated | USV autonomously deploys and recovers AUV. Human-on-the-loop supervision from shore or mother ship. Full autonomous cycle demonstrated in exercises. |

**Current state of the art (ECA):**
- Launch is ~80% automated (pre-programmed sequence, operator confirms each phase)
- Recovery is ~50-60% automated (AUV approach is autonomous via USBL homing, but final capture still requires operator input or favorable conditions)
- Full autonomy in recovery remains a major R&D challenge industry-wide

---

## 8. Key Design Principles

### 8.1 Modularity
ECA designs their LARS as modular containerized or palletized systems. This allows the same MCM capability to be deployed on different vessels ("plug and fight"). The LARS, command system, and support equipment can be installed on a vessel of opportunity.

### 8.2 Standoff Operations
The UMIS philosophy: keep the crewed mother ship away from the minefield. Use USVs and AUVs as expendable/recoverable assets. The LARS on the USV is small and accepts higher risk (if the USV is damaged, no crew are at risk).

### 8.3 Positive Buoyancy Recovery
The A18 surfaces with positive buoyancy at end of mission. This simplifies recovery — you are lifting a floating object, not a submerged one. The AUV's buoyancy module and trim system ensure it floats stably at the surface with a known orientation (antenna mast up).

### 8.4 USBL Homing for Approach
The AUV uses USBL (Ultra-Short Baseline) acoustic positioning to home in on the recovery vessel. This provides ~0.1-0.5 m accuracy at close range, enabling precision approach to the capture mechanism.

### 8.5 Deck Handling Simplicity
The cradle and rail system is designed so the AUV can be serviced (battery swap, data download, payload change) while in the cradle on deck without additional handling equipment.

### 8.6 Fail-Safe Design
- Crane has mechanical brake + hydraulic lock (double redundancy)
- AUV has emergency drop-weight for forced surfacing
- LARS has manual override for all automated functions
- Capture mechanism is passive (funnel/V-guide) — does not require powered actuation during critical capture moment

---

## 9. Limitations and Trade-Offs

### 9.1 Sea State Limitation
Recovery in Sea State 3+ remains challenging. This is the single biggest operational limitation. ECA has not solved this problem fundamentally — no one has for medium-class UUVs. Mitigation: mission planning around weather windows.

### 9.2 Cycle Time
A 20-45 minute recovery cycle means that in a multi-sortie mission, LARS time is a significant fraction of total mission time. For a 6-hour AUV endurance mission, LARS adds ~10-15% overhead.

### 9.3 Vessel Dependency
Despite modularity claims, effective LARS operation requires:
- Adequate deck space and structural strength
- Hydraulic or electrical power supply
- Good station-keeping (DP or at minimum a skilled helmsman)
- USBL installation (hull-mounted transducer)
These requirements effectively limit deployment to purpose-built or pre-modified vessels.

### 9.4 Personnel Requirement
Even semi-automated LARS requires 2-4 trained operators for safe operations. Fully crewless operation (UMIS on USV) reduces this but introduces reliability and latency challenges.

### 9.5 Single-Vehicle Focus
Most ECA LARS configurations handle one AUV at a time. Multi-vehicle simultaneous operations require either multiple LARS or sequential launch/recovery, which multiplies cycle time.

### 9.6 Cost
The LARS can represent 15-25% of the total AUV system cost. For budget-constrained programs, this is significant. The AUV itself may cost EUR 1-3M; the LARS adds EUR 300-800K depending on complexity and vessel integration.

---

## 10. Lessons Learned for a Custom Vietnamese Design (VN-XUONG-UUV)

### 10.1 Recovery First Design
Design the LARS around the recovery problem, not the launch. Launch is relatively easy; recovery in sea conditions is the hard constraint. Every design choice should be evaluated against: "Does this make recovery easier or harder?"

### 10.2 Start with Stern Ramp
For a Vietnamese design targeting the South China Sea (typically SS 2-4 conditions):
- A stern ramp/slipway LARS is more robust than crane-based in moderate seas
- Ramp allows the vessel to make headway, creating a calmer wake zone
- Simpler mechanism = more reliable in tropical conditions (salt, humidity, heat)
- Easier to maintain with Vietnamese industrial capability

### 10.3 Design for the Worst-Case AUV, Not the Current One
Size the LARS for 1000 kg SWL even if the first AUV is 500 kg. Growth margin is essential. The A18 grew from ~600 kg to ~800 kg over its development. Your AUV will too.

### 10.4 Modularity Matters for Vietnam
Vietnam's navy operates diverse vessel types. A containerized or palletized LARS that can be installed on different platforms (OPV, landing ship, commercial vessel) multiplies capability without multiplying cost.

### 10.5 Semi-Automation is the Right Level
Full automation of LARS is not yet reliable enough for operational use. Manual operation is too slow and personnel-intensive. Semi-automated (automated sequence with operator approval at key gates) is the sweet spot for a first-generation system.

### 10.6 USBL is Non-Negotiable for Recovery
Budget for a USBL system from the start. Attempting AUV recovery without precise acoustic tracking is dangerous and unreliable. This is not optional equipment.

### 10.7 Tropical Environmental Considerations
ECA designs for European conditions. A Vietnamese LARS must account for:
- Higher ambient temperatures (up to 45C deck surface)
- Aggressive marine corrosion (South China Sea salinity ~33-35 ppt)
- Biofouling on submerged components (tropical waters = rapid growth)
- Monsoon conditions (sudden sea state changes)
- Material selection: 316L stainless steel minimum; consider duplex steel or aluminum with anodizing for structural members

### 10.8 Maintenance Philosophy
ECA systems assume depot-level maintenance is available in France/Europe. A Vietnamese system must be designed for organic maintenance (unit-level) with locally available tools and skills. This means:
- Simpler hydraulic circuits (fewer proportional valves, more on/off)
- Standard metric fasteners and fittings
- Local-sourced hydraulic hoses and seals where possible
- Clear maintenance manuals in Vietnamese

### 10.9 Power Budget
The LARS hydraulic power unit (HPU) is often underestimated. Plan for 20-40 kW dedicated to LARS. Ensure the host vessel's electrical or mechanical power plant can supply this without degrading other operations.

### 10.10 Test Early, Test in Real Sea Conditions
ECA spent decades iterating their LARS in the Mediterranean. Do not attempt to finalize a LARS design on paper. Build a prototype, test it in actual Vietnamese coastal conditions (Cam Ranh, Da Nang), and iterate. The sea state tolerance numbers above are from controlled conditions — real operations will be worse.

---

## Summary Comparison Table

| Feature | ECA Crane LARS | ECA Stern Ramp LARS | Recommended VN Approach |
|---------|---------------|--------------------|-----------------------|
| Launch SS | 3 | 3-4 | Target SS 3 |
| Recovery SS | 2-3 | 3 | Target SS 3 (critical) |
| Complexity | Medium-High | Medium | Start simple |
| Automation | Semi-auto | Semi-auto | Semi-auto |
| Vessel flexibility | High | Medium (needs stern ramp) | Design vessel around LARS |
| Cycle time | 30-45 min | 20-35 min | Target <30 min |
| Cost | Higher | Lower | Budget-constrained |
| Maintenance | Complex | Moderate | Design for local maintenance |

---

## Sources

**Note:** This analysis was compiled from pre-training knowledge. WebSearch and WebFetch tools were unavailable during this session. The following sources informed the training data and should be consulted for verification:

- ECA Group official website: https://www.ecagroup.com/en/solutions/mine-countermeasures
- ECA Group A18 AUV product page: https://www.ecagroup.com/en/solutions/a18-auv
- ECA Group UMIS system documentation: https://www.ecagroup.com/en/solutions/umis
- NATO STO documents on MCM LARS (STO-TR-SET-166, STO-TR-SET-219)
- Jane's Underwater Warfare Systems (annual)
- UDT (Undersea Defence Technology) conference proceedings, 2018-2024
- Belgian-Dutch rMCM program documentation (ECA as prime contractor for MCM toolbox)
- NURC/CMRE reports on AUV LARS standardization
- "Launch and Recovery Systems for Unmanned Underwater Vehicles" — various RINA and ASNE papers

**Verification recommended before design use.** Contact ECA Group / Robotics division directly for current specifications and LARS product catalog.
