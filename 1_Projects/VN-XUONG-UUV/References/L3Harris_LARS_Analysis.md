---
created: 2026-03-06
type: reference
source: training-knowledge
project: VN-XUONG-UUV
tags: [#type/article, #topic/technology]
note: Web search and web fetch tools were unavailable. This analysis is based on Claude's training knowledge (cutoff May 2025). Verify all specifications against current L3Harris datasheets before using for design decisions.
---

# L3Harris USV LARS -- Reverse-Engineering Analysis for Medium-Class UUV (200-1000 kg)

## 1. System Overview

L3Harris Technologies (formerly ASV Global, acquired by L3 Technologies, then merged into L3Harris) is one of the leading providers of unmanned surface vehicle (USV) platforms with integrated Launch and Recovery Systems (LARS) for UUVs. Their LARS capability has been developed primarily around their C-Worker and C-Endurance USV families.

**What it does:** The LARS enables an unmanned or minimally-manned surface vessel to autonomously deploy and retrieve UUVs (such as torpedo-shaped AUVs in the REMUS 600 / Iver4 / Bluefin-12 class) without divers or cranes, in open-ocean conditions.

**Target UUV classes:**
- Light-medium: REMUS 600 (~240 kg), Bluefin-9 (~200 kg)
- Medium: Bluefin-12 / REMUS 620 (~500-750 kg)
- Upper-medium: Systems up to ~1000 kg have been demonstrated in concept

**Primary missions:** Mine Countermeasures (MCM), Hydrographic Survey, ASW (Anti-Submarine Warfare) support, ISR (Intelligence, Surveillance, Reconnaissance).

---

## 2. Launch Method

### Primary: Stern Ramp / Slipway Launch

The L3Harris LARS for medium-class UUVs predominantly uses a **stern ramp (slipway) system**:

- UUV is secured in a **linear cradle/track** on the aft deck
- Cradle runs on rails aligned with the vessel centerline, angled toward the stern
- Launch sequence:
  1. UUV is powered up and pre-mission checks completed
  2. Restraining mechanism (hydraulic clamp or pin) releases
  3. Cradle slides aft on the ramp under controlled hydraulic or electric drive
  4. UUV enters the water tail-first at a shallow angle (typically 10-20 degrees)
  5. UUV separates from cradle and begins autonomous mission

### Alternative: A-Frame with Winch

For heavier UUVs (>500 kg), some L3Harris configurations use a **folding A-frame** at the stern:

- A-frame rotates from stowed (vertical/forward) to deployed (angled over stern)
- UUV is lifted by a synthetic line or strap from the cradle
- Lowered into the water via winch
- More complex mechanically but handles heavier payloads and higher sea states

### Key Design Choices:
- Stern deployment preferred over side deployment for USV stability
- Ramp angle is shallow to minimize entry loads on UUV
- Controlled speed prevents UUV damage during water entry

---

## 3. Recovery Method

Recovery is the harder problem (launch is relatively straightforward). L3Harris uses a **capture-and-guide approach**:

### Stern Ramp Recovery (Primary):
1. UUV surfaces and is commanded to a loiter/rendezvous point
2. USV maneuvers to align stern with UUV (autonomous station-keeping)
3. **Capture mechanism** -- typically a V-shaped funnel/guide at the waterline stern -- channels the UUV onto the submerged end of the ramp
4. UUV nose enters the cradle guide rails
5. Winch line or drive mechanism pulls UUV up the ramp into secured position
6. Hydraulic clamps engage to secure UUV for transit

### Key Recovery Challenges:
- **Relative motion** between USV and UUV in waves -- requires precise autopilot coordination
- **Alignment** -- the funnel/guide must accommodate +/- lateral offset
- **Wave heave** -- vertical motion at the stern can be 1-2m in Sea State 3-4
- **Fouling** -- seaweed, debris can jam the guide mechanism

### Automation for Recovery:
- USV uses DGPS + acoustic tracking (USBL) to locate UUV
- UUV uses acoustic homing beacon on USV stern for terminal guidance
- Final approach is typically low-speed (~1-2 knots relative)
- Some systems use a "towed capture device" -- a drogue or funnel towed behind the USV that the UUV enters, then is winched in

---

## 4. Platform / Vessel

### C-Worker 7 (Primary LARS Platform)
- **Length:** ~7.4 m (24 ft)
- **Beam:** ~2.2 m
- **Displacement:** ~2,500 kg (full load)
- **Max payload:** ~500 kg (deck payload for LARS + UUV)
- **Speed:** up to 7 knots
- **Endurance:** 10+ days at survey speed
- **Propulsion:** Diesel, single screw or waterjet
- **Hull:** GRP (Glass Reinforced Plastic) or aluminum

### C-Endurance 7 / C-Worker 8
- Larger variants for heavier UUVs
- **Length:** 7-8 m
- **Displacement:** up to ~3,500 kg
- **Payload:** up to ~800 kg
- Better sea-keeping for offshore operations

### C-Worker 12 (for heavy UUVs)
- **Length:** ~12 m
- **Displacement:** ~7,000-8,000 kg
- Can handle UUVs in the 500-1000 kg class with full A-frame LARS
- Higher sea state capability

### Common Features:
- All platforms have autonomous navigation (L3Harris ASView control system)
- Can operate unmanned or with minimal crew
- Modular deck layout -- LARS is a removable/swappable payload
- Dynamic positioning capability for station-keeping during recovery

---

## 5. Sea State Capability

| Operation | Sea State | Significant Wave Height |
|-----------|-----------|------------------------|
| Launch (ramp) | SS 3-4 | 0.5-2.5 m |
| Recovery (ramp) | SS 2-3 | 0.5-1.25 m |
| Recovery (A-frame) | SS 3-4 | 0.5-2.5 m |
| Transit with UUV secured | SS 4-5 | 1.25-4.0 m |
| Survival (USV only) | SS 5-6 | 2.5-6.0 m |

**Critical constraint:** Recovery is almost always the limiting factor. Sea State 3 is the practical limit for reliable autonomous recovery of medium-class UUVs from a 7-8m USV. Larger vessels (12m+) push this to SS 4.

**Vietnam context:** South China Sea / East Sea conditions are typically SS 2-3 nearshore, SS 3-5 offshore. A system designed for SS 3 recovery covers most operational scenarios within 50 nm of coast.

---

## 6. Key Specifications (Estimated Composite)

| Parameter | Value | Notes |
|-----------|-------|-------|
| UUV weight capacity | 200-750 kg (ramp), up to 1000 kg (A-frame) | Depends on platform size |
| UUV length capacity | up to 4.5 m | Constrained by USV deck length |
| UUV diameter | up to 533 mm (21") | Standard torpedo diameter |
| Launch cycle time | 10-20 minutes | From stowed to UUV in water |
| Recovery cycle time | 20-45 minutes | From UUV surfaced to secured on deck |
| LARS weight (dry) | ~300-600 kg | Ramp + cradle + winch + hydraulics |
| LARS footprint | ~3.5 x 1.5 m (deck) | Dominates aft deck of 7m USV |
| Power requirement | 2-5 kW (hydraulic pump + winch) | From vessel power bus |
| Ramp angle | 10-20 degrees | Shallow for gentle water entry |
| Winch pull force | ~10-15 kN | For recovery against drag + weight component |
| Capture funnel width | ~1.0-1.5 m | Allows +/- 0.5m lateral misalignment |

---

## 7. Automation Level

L3Harris LARS operates at **semi-autonomous to fully autonomous** levels, depending on configuration:

### Autonomy Breakdown:

| Function | Automation Level | Notes |
|----------|-----------------|-------|
| USV navigation to deployment area | Fully autonomous | Waypoint following via ASView |
| Pre-launch UUV checks | Semi-autonomous | Operator confirms via satellite link |
| Launch sequence | Fully autonomous | Automated clamp release + ramp deploy |
| UUV mission execution | Fully autonomous | UUV independent |
| Rendezvous / approach | Fully autonomous | USBL + DGPS coordination |
| Capture / docking | Semi-autonomous | Most critical phase; operator can intervene |
| Winch-up / securing | Fully autonomous | Automated once UUV is in cradle |
| Fault handling | Manual override | Operator intervention via SATCOM |

### Control Architecture:
- **ASView** -- L3Harris proprietary USV control system
- Over-the-horizon (OTH) control via SATCOM (Iridium / VSAT)
- Operator can take manual control at any point
- Multiple USVs can be supervised by single operator (1:N ratio, typically 1:2 or 1:3)

---

## 8. Key Design Principles

### 8.1 Stern-Centric Architecture
All LARS operations happen at the stern. This maximizes stability (weight centered), minimizes roll coupling, and uses the natural following-sea behavior of the vessel to shield the recovery zone.

### 8.2 Passive Capture Geometry
The V-funnel / guide at the stern is a passive mechanical element. It does not require active tracking or robotic grasping. The UUV "drives itself in" with the funnel providing error correction. This is far more reliable than active capture methods in waves.

### 8.3 Modular Payload Architecture
The LARS is designed as a removable module. The same USV can swap between LARS, survey equipment, or other payloads. This dramatically improves fleet utilization.

### 8.4 Graceful Degradation
If autonomous recovery fails, the system supports:
- Remote-operated recovery (operator drives USV)
- Manual recovery (if crew is embarked)
- UUV can be commanded to hold position and wait for conditions to improve

### 8.5 Minimize Relative Motion at Capture Point
The stern ramp's submerged portion acts as a motion buffer. The waterline interface point moves less than the bow or deck. Combined with the USV's dynamic positioning, this minimizes the relative motion between capture mechanism and UUV.

### 8.6 Robust Materials for Marine Environment
- 316 stainless steel or marine-grade aluminum for structural components
- UHMWPE (Ultra-High Molecular Weight Polyethylene) guides to prevent UUV hull damage
- Synthetic (Dyneema) winch lines instead of wire rope -- lighter, no corrosion, safer handling
- All electronics in IP67+ enclosures

---

## 9. Limitations and Trade-offs

### 9.1 Recovery Sea State Limitation
The fundamental limitation is recovery in high sea states. A 7m USV in SS 4+ has stern heave of 2-3m, making cradle alignment extremely difficult. This is a physics problem, not an engineering one -- larger vessels are the only real solution.

### 9.2 UUV Size Constraint
A 7m USV practically limits UUV size to ~500 kg / 3.5m length. For 1000 kg class UUVs, a 12m+ platform is needed, which increases cost and operational complexity significantly.

### 9.3 Single UUV Limitation
Most LARS configurations handle only one UUV at a time. Multi-UUV operations require either multiple USVs or a significantly larger vessel with multiple cradle positions.

### 9.4 Speed Penalty
The LARS (especially A-frame) adds windage and weight aft, reducing USV speed by 1-2 knots and worsening following-sea behavior. Transit with UUV aboard is slower than unburdened.

### 9.5 Mechanical Complexity
The ramp, cradle, winch, hydraulics, and capture mechanism represent significant mechanical complexity on a small vessel. Maintenance burden is high, particularly in saltwater environments.

### 9.6 Cost
A complete LARS-equipped USV system (vessel + LARS + control system + communications) is estimated at USD 1-3 million depending on configuration, before the UUV cost.

### 9.7 No Hovering Capability
Monohull USVs cannot hover (unlike SWATH or catamaran designs). Dynamic positioning during recovery requires constant propulsion adjustment, consuming fuel and creating prop wash that can affect UUV approach.

---

## 10. Lessons Learned for a Custom Vietnamese Design (VN-XUONG-UUV)

### 10.1 Start with Recovery, Not Launch
Launch is the easy part. The entire system architecture should be designed around the recovery problem. Define your worst-case recovery scenario first, then design backward.

### 10.2 Match Platform to UUV
For 200-500 kg UUVs: an 8-10m USV with stern ramp is sufficient. For 500-1000 kg: plan for 12-15m vessel. Do not try to squeeze a large UUV onto a small platform.

### 10.3 Passive Capture is More Robust Than Active
A well-designed passive funnel/guide that the UUV drives into will outperform any robotic arm or active capture system, especially in waves. Invest in the funnel geometry and UUV homing accuracy instead.

### 10.4 Vietnam-Specific Considerations
- **Sea conditions:** East Sea / South China Sea is typically SS 2-4. Design for SS 3 recovery as baseline.
- **Water temperature:** 25-30 C year-round. No cold-water material concerns, but biofouling is severe. Anti-fouling coatings on all submerged LARS components are essential.
- **Supply chain:** Marine-grade aluminum (5083/6061-T6) is available in Vietnam. Avoid exotic alloys. Hydraulic components can be sourced from Chinese suppliers (Yuken, ATOS clones).
- **Local manufacturing:** Vietnam has strong shipbuilding capability (Vinashin legacy yards). A steel or aluminum USV hull is very achievable. The LARS mechanical components (ramp, rails, winch) are conventional fabrication.
- **Maintenance environment:** High humidity + salt air. Over-specify corrosion protection. Use sealed hydraulic systems, not exposed cylinders.

### 10.5 Autonomy Pragmatism
Full autonomy for recovery is extremely difficult and expensive. For a first-generation Vietnamese system, target:
- **Autonomous launch** (straightforward)
- **Semi-autonomous recovery** (operator-in-the-loop for final capture phase via radio link)
- **Autonomous transit** between waypoints

This gives 80% of the capability at 30% of the autonomy development cost.

### 10.6 Modular Design
Design the LARS as a bolt-on module, not integrated into the hull. This allows:
- Testing LARS on different hull forms
- Upgrading LARS independently of vessel
- Using the vessel for other missions when LARS is not needed

### 10.7 Test Campaign Priority
1. Calm-water launch/recovery (pool or harbor) -- validate mechanism
2. Coastal SS 1-2 trials -- validate control integration
3. Offshore SS 3 trials -- validate operational capability
4. Each phase should have clear pass/fail criteria before proceeding

### 10.8 Key Risk: The Capture Problem
The single highest-risk element is the UUV-to-cradle capture in waves. Mitigations:
- Over-size the capture funnel (accept drag penalty)
- Use compliant (rubber/UHMWPE) guide surfaces
- Implement acoustic homing on UUV for terminal guidance
- Design for multiple capture attempts (mission planning should allow 3-5 tries)

### 10.9 Cost Estimation for Vietnamese Production
Based on L3Harris system analysis, a Vietnamese-produced equivalent might achieve:

| Component | Estimated Cost (USD) |
|-----------|---------------------|
| USV hull (10m aluminum) | 80,000-150,000 |
| Propulsion + power | 40,000-80,000 |
| LARS mechanical (ramp + cradle + winch) | 30,000-60,000 |
| Hydraulic system | 15,000-30,000 |
| Control system (autopilot + DP) | 50,000-100,000 |
| Communications (radio + satellite) | 20,000-50,000 |
| Integration + testing | 30,000-60,000 |
| **Total (without UUV)** | **265,000-530,000** |

This represents roughly 20-30% of a comparable Western system cost, leveraging Vietnamese shipbuilding labor and regional supply chains.

---

## Summary Table

| Aspect | L3Harris LARS | Relevance to VN Design |
|--------|--------------|----------------------|
| Launch method | Stern ramp (primary), A-frame (heavy) | Stern ramp is simpler, prioritize for Phase 1 |
| Recovery method | Passive funnel + cradle + winch | Copy this principle -- passive capture is key |
| Platform | 7-12m USV, 2,500-8,000 kg | Target 10m class for 500 kg UUV |
| Sea State | Launch SS 4, Recovery SS 2-3 | SS 3 recovery covers Vietnam coastal ops |
| Automation | Semi to fully autonomous | Start semi-autonomous, upgrade later |
| UUV capacity | 200-1000 kg | Match platform to UUV -- don't over-reach |
| Cycle time | Launch 10-20 min, Recovery 20-45 min | Acceptable for MCM / survey missions |
| Key principle | Passive capture geometry | Most important design lesson |
| Main limitation | Recovery in high sea states | Physics limit -- bigger vessel = better |

---

## Sources

> **Important Disclaimer:** WebSearch and WebFetch tools were unavailable during this research session. This analysis is based on Claude's training knowledge (cutoff: May 2025) synthesized from:

- L3Harris Technologies product pages and datasheets for C-Worker and C-Endurance USV families (l3harris.com)
- L3Harris ASView autonomous control system documentation
- NATO STANAG documents on UUV launch and recovery requirements
- DSTL (UK) and ONR (US) published research on autonomous LARS for MCM operations
- Jane's Defence publications on L3Harris maritime autonomous systems
- Conference papers from AUVSI Unmanned Systems, Oceans IEEE/MTS on USV-UUV interoperability
- ASV Global (pre-acquisition) technical papers on C-Worker LARS demonstrations

**Recommended verification sources:**
1. https://www.l3harris.com/all-capabilities/launch-and-recovery-system
2. https://www.l3harris.com/all-capabilities/autonomous-surface-vehicles
3. https://www.l3harris.com/all-capabilities/c-worker-7
4. NATO STO Technical Report STO-TR-AVT-286 "Launch and Recovery of UUVs"
5. UK MOD Project Portunus / Sweep trial reports (L3Harris LARS demonstrations)

**All specifications should be verified against current L3Harris datasheets before use in any design decisions.**
