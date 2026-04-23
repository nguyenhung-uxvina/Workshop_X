---
created: 2026-03-06
type: reference
source: pre-training-knowledge
project: VN-XUONG-UUV
tags: [#type/article, #topic/technology]
note: Web research tools were unavailable. This analysis is based on Claude's pre-training knowledge (cutoff May 2025). Data should be verified against current manufacturer publications.
---

# Atlas Elektronik LARS for Medium-Class UUVs -- Reverse-Engineering Analysis

> Atlas Elektronik (now thyssenkrupp Marine Systems, tkMS) is a leading European manufacturer of naval electronics, mine countermeasure (MCM) systems, and unmanned underwater vehicles. This analysis examines their launch and recovery system (LARS) architecture for medium-class UUVs in the 200-1000 kg range.

---

## 1. System Overview

Atlas Elektronik produces two primary UUV product families relevant to the 200-1000 kg class:

### SeaCat (Medium-Class AUV/UUV)
- **Type**: Modular torpedo-shaped AUV, designed primarily for mine countermeasure (MCM) and hydrographic survey.
- **Weight class**: Approximately 300-450 kg (depending on payload configuration).
- **Length**: ~3.0-4.0 m.
- **Diameter**: ~324 mm (roughly 12.75-inch torpedo standard form factor).
- **Role**: Autonomous mine detection, classification, identification; environmental survey; route survey.
- **Key sensors**: Synthetic aperture sonar (SAS), multibeam echosounder, sidescan sonar, cameras.

### SeaFox (Smaller, Disposable/Expendable)
- Not in scope (semi-expendable mine disposal vehicle, ~40 kg), but relevant as it is often deployed from the same vessel as SeaCat.

### ARCIMS (Atlas Remote Combined Influence Minesweeping System)
- **Type**: Unmanned surface vessel (USV) platform, not the UUV itself.
- **Displacement**: ~11 tonnes; length ~12 m.
- **Function**: Remotely operated or autonomous surface platform that can tow influence sweeps AND deploy/recover UUVs like SeaCat.
- **ARCIMS acts as a LARS carrier platform** -- it has an integrated stern launch and recovery system for medium UUVs.

The LARS is not sold as a standalone brand name by Atlas Elektronik in the same way as, say, the Kraken KATFISH LARS. Instead, it is integrated into the vessel/platform design. Atlas provides the complete "system of systems" -- UUV + LARS + mission management + vessel integration.

---

## 2. Launch Method

Atlas Elektronik uses two primary launch architectures depending on the platform:

### 2a. Stern Ramp / Slipway Launch (Primary for ARCIMS and MCM Vessels)
- **Configuration**: An inclined ramp at the stern of the vessel, with a cradle/trolley system.
- **Process**:
  1. UUV is stored on a cradle/trolley on the deck or in a handling bay.
  2. The cradle is moved aft along rails to the stern ramp.
  3. The ramp is lowered to the waterline or slightly below.
  4. The UUV slides or is lowered into the water from the cradle.
  5. A mechanical or pneumatic release mechanism frees the UUV.
  6. The UUV powers up, performs pre-dive checks, then submerges for its mission.
- **Advantages**: Low complexity, gravity-assisted, works well on smaller vessels, keeps the UUV on centerline (reduces roll coupling).
- **Angle**: Typically 15-30 degrees from horizontal.

### 2b. A-Frame or Crane Launch (Alternative for Larger MCM Vessels)
- On larger dedicated MCM vessels (e.g., frigates or dedicated minehunters), Atlas has also integrated crane-based or A-frame-based deployment.
- A telescoping or folding A-frame at the stern, with a winch and cradle.
- The UUV is lifted from deck stowage, swung outboard, and lowered into the water.
- Less common for SeaCat due to its moderate size; more common for heavier ROVs.

### 2c. Over-the-Side Handling (Manual, Small Vessels)
- For smaller boats of opportunity, SeaCat can be launched with a davit or small crane, essentially a manual operation with 2-4 operators.
- This is the field/expeditionary mode.

---

## 3. Recovery Method

Recovery of UUVs at sea is the harder engineering problem. Atlas Elektronik employs:

### 3a. Stern Ramp Recovery with Guided Cradle (Primary)
- **Process**:
  1. UUV surfaces and transmits GPS/acoustic position to the vessel.
  2. The vessel maneuvers to position the stern ramp near the UUV (station-keeping).
  3. The stern ramp/slipway is lowered to at or below the waterline.
  4. The UUV is guided (via acoustic homing or operator control) to approach the ramp.
  5. A capture mechanism (V-shaped guide rails or funnel) aligns the UUV with the cradle.
  6. The UUV enters the cradle, which has a latching/clamping mechanism.
  7. A winch pulls the cradle (with UUV) up the ramp onto the deck.
- **Alignment aids**: Guide rails with flared entry (funnel geometry), soft bumpers, and sometimes a line/drogue that the UUV can follow.
- **Critical challenge**: Matching the relative motion of vessel and UUV in waves.

### 3b. Net/Basket Recovery (Backup/Emergency)
- A net or basket can be deployed over the side or at the stern.
- The UUV drives or drifts into the net.
- The net is then winched aboard.
- Used as a backup method or in higher sea states where precision cradle capture is difficult.

### 3c. ARCIMS-Specific USV Recovery
- ARCIMS, being a relatively small USV platform, uses an integrated stern notch with a capture cradle.
- The ARCIMS vessel has dynamic positioning capability to hold station while the UUV approaches.
- Recovery cycle is semi-automated: UUV homes to the vessel acoustically, enters the stern capture zone, and is winched aboard.

---

## 4. Platform / Vessel

Atlas Elektronik LARS are deployed on several platform types:

| Platform | Type | Displacement | Length | Notes |
|----------|------|-------------|--------|-------|
| ARCIMS USV | Unmanned surface vessel | ~11 t | ~12 m | Primary autonomous MCM platform |
| Frankenthal-class (Type 332) | Minehunter | ~650 t | ~54 m | German Navy; SeaFox + SeaCat capable |
| Troika/Seehund MCM drone | Remote-controlled MCM vessel | ~100 t | ~25 m | Legacy system |
| NATO MCM vessel variants | Dedicated minehunter/sweeper | 500-800 t | 50-60 m | Various allied navies |
| Vessels of opportunity | OPV, patrol craft, research vessel | Variable | Variable | Containerized or portable LARS kit |

### Key Platform Insight
Atlas designs its LARS to be **platform-agnostic** to a degree. The "containerized MCM" concept allows a LARS module (ramp + handling + control station) to be placed on any vessel with a clear stern working area. This is the "toolbox" or "mission module" concept that tkMS promotes for modular warships.

---

## 5. Sea State Capability

| Operation | Sea State | Significant Wave Height | Wind |
|-----------|-----------|------------------------|------|
| Launch (stern ramp) | Up to Sea State 4 | ~1.25-2.5 m | 11-16 kn |
| Recovery (stern ramp) | Up to Sea State 3-4 | ~0.5-2.0 m | Up to ~16 kn |
| Launch (crane/A-frame) | Up to Sea State 3 | ~0.5-1.25 m | Up to ~11 kn |
| Recovery (crane/A-frame) | Up to Sea State 2-3 | ~0.3-1.0 m | Up to ~11 kn |
| ARCIMS USV operations | Up to Sea State 4-5 | ~2.0-3.0 m | Up to ~20 kn |

**Notes:**
- Recovery is always more sea-state-limited than launch.
- The stern ramp method is more sea-state-tolerant than A-frame or crane methods because the UUV stays in the vessel's wake (calmer water) and the ramp provides a physical guide.
- ARCIMS has better sea-state performance than the UUV LARS itself because it is a vessel platform, not a handling system.

---

## 6. Key Specifications (Estimated for SeaCat-class LARS)

| Parameter | Estimated Value | Notes |
|-----------|----------------|-------|
| UUV weight capacity | 200-500 kg | SeaCat ~400 kg; system designed for growth |
| UUV length capacity | Up to 4.5 m | Standard torpedo-class form factor |
| Launch cycle time | 10-20 minutes | From deck stow to UUV in water |
| Recovery cycle time | 15-30 minutes | From UUV surfacing to secured on deck |
| LARS weight (ramp system) | ~500-1500 kg | Depends on automation level |
| LARS footprint | ~3 m x 2 m deck area | Plus ramp extension over stern |
| Power requirement | 380-440V, 3-phase | Standard naval power for winch and hydraulics |
| Winch capacity | 500-1000 kg pull | Sufficient for UUV + cradle + dynamic loads |
| Number of operators | 2-4 (semi-auto) or 1-2 (automated) | Depends on platform |

---

## 7. Automation Level

Atlas Elektronik's LARS automation spans a range:

### Semi-Automated (Current Standard for Most Platforms)
- **Launch**: Operator initiates sequence; cradle movement, ramp deployment, and release are powered/automated, but supervised by operator.
- **Recovery**: Operator controls vessel maneuvering; UUV acoustic homing is automated; capture and winching are operator-supervised.
- **Typical crew**: 2-3 operators (1 UUV operator, 1 LARS operator, 1 safety/deck).

### Fully Autonomous (ARCIMS Concept)
- ARCIMS is designed for unmanned operation, meaning the LARS on ARCIMS must function without anyone on the vessel deck.
- The target is full autonomous launch and recovery (ALAR).
- Status (as of training data cutoff): ARCIMS has demonstrated autonomous launch; autonomous recovery remains a significant engineering challenge and is in advanced development/testing.
- Key enablers: Dynamic positioning, acoustic homing, computer vision for UUV tracking, automated cradle latch/release, integrated health monitoring.

### Manual (Expeditionary/Austere)
- Davit or crane, fully manual, 3-4 operators.
- Used for boats of opportunity or expeditionary deployment.

---

## 8. Key Design Principles

Based on analysis of Atlas Elektronik's approach, these design principles are evident:

### P1: Stern-Centric Deployment
The UUV is always launched and recovered from the stern, exploiting the vessel's wake shadow for calmer water. This is a near-universal principle in medium-class UUV LARS and Atlas follows it consistently.

### P2: Cradle-Rail Architecture
A rigid cradle on rails provides mechanical constraint for the UUV during handling. This:
- Prevents damage from rolling/pitching.
- Guides alignment during recovery.
- Allows powered movement (winch) along a predictable path.
- Simplifies the transition from water to deck.

### P3: Funnel Geometry for Recovery
The capture mechanism uses progressively narrowing guide rails (funnel shape) at the waterline entry. This compensates for position uncertainty in the UUV approach (wave action, GPS error, current). The funnel converts a coarse approach into precise cradle alignment.

### P4: Acoustic Homing + Visual Confirmation
The UUV homes to the vessel using USBL (Ultra-Short Baseline) acoustic positioning. In the final approach phase, camera/visual systems on the vessel confirm UUV position. This dual-mode approach provides robustness.

### P5: Modular / Containerized Design Philosophy
Atlas and tkMS promote the "mission module" concept -- the LARS and UUV system can be packaged as a container or modular unit, deployable on different vessel classes. This is critical for navies that want MCM capability without dedicated minehunters.

### P6: Graduated Automation
Rather than attempting full autonomy immediately, Atlas follows a graduated approach:
1. Manual (proven baseline).
2. Semi-automated (operator-supervised powered systems).
3. Fully autonomous (ARCIMS target, ongoing development).

### P7: Commonality with Torpedo Handling
SeaCat uses a ~324 mm diameter, which is close to standard lightweight torpedo dimensions. This allows adaptation of existing torpedo handling equipment (rails, stowage, handling gear) for UUV operations, reducing development cost and risk.

---

## 9. Limitations and Trade-Offs

### L1: Recovery Remains the Hard Problem
- Launch is relatively straightforward (gravity + mechanical guide).
- Recovery requires matching two moving objects (vessel + UUV) in a dynamic sea environment.
- Recovery limits the operational sea state more than any other factor.
- Full autonomous recovery is not yet proven in high sea states.

### L2: Stern Ramp Limits Vessel Design
- The stern ramp requires a clear, flat or stepped stern structure.
- This conflicts with propulsion arrangements (propellers, rudders, waterjets at the stern).
- Some vessel designs require significant hull modification to accommodate the ramp.

### L3: Single-Vehicle Limitation
- Most Atlas LARS handle one UUV at a time.
- For multi-UUV operations (e.g., swarm MCM), this creates a throughput bottleneck.
- Launch and recovery cycle times of 10-30 minutes per vehicle limit the number of simultaneous UUV missions.

### L4: Size-Weight-Power Constraints on Small Platforms
- The LARS adds 500-1500 kg plus deck space.
- On small USVs like ARCIMS (~11 tonnes), the LARS is a significant fraction of the total platform.
- Structural reinforcement of the stern for ramp loads adds further weight.

### L5: Weather Sensitivity
- Sea State 3-4 limit for recovery means operations may be interrupted in typical open-ocean conditions.
- This is acceptable for littoral/coastal MCM (where conditions are often calmer) but limits blue-water utility.

### L6: Maintenance in Wet Marine Environment
- Rails, winches, cradle mechanisms, and latching systems are continuously exposed to seawater.
- Corrosion, biofouling, and mechanical wear are persistent issues.
- Requires regular maintenance and use of marine-grade materials (316L stainless, anodized aluminum, HDPE guides).

---

## 10. Lessons Learned for a Custom Vietnamese Design (VN-XUONG-UUV)

### Lesson 1: Start with Stern Ramp, Not A-Frame
The stern ramp/slipway is the most proven, sea-state-tolerant, and lowest-complexity LARS for medium UUVs. Vietnam should adopt this as the baseline architecture. A-frames and cranes are more versatile for heavy loads but introduce pendulum dynamics that worsen in waves.

### Lesson 2: Design the Funnel Recovery Geometry Early
The recovery capture funnel is the single most critical piece of mechanical engineering in the system. Its geometry (flare angle, width, depth below waterline, material/shock absorption) determines the maximum sea state for recovery. This should be designed and tested in parallel with the vessel, not as an afterthought.

### Lesson 3: Use Standard Torpedo-Class UUV Form Factor
Designing the UUV around a standard diameter (~324 mm or 533 mm) allows re-use of existing torpedo handling knowledge, off-the-shelf components (bearings, cradles, stowage), and compatibility with allied systems.

### Lesson 4: Containerized / Modular Approach
Vietnam's navy has diverse vessel types. Designing the LARS as a modular containerized system (ISO 20-foot container footprint) allows deployment on patrol vessels, research ships, and vessels of opportunity without permanent modification.

### Lesson 5: Plan for Semi-Auto First, Autonomy Later
Full autonomous LARS is a decade-long development goal even for Atlas Elektronik. Vietnam should target semi-automated LARS (powered winch, operator-supervised) as the initial capability, with provisions for future autonomy (add sensors, control interfaces, DP integration).

### Lesson 6: Recovery Sea State is the Design Driver
Do not over-optimize the launch system. Recovery in Sea State 3+ is where the engineering challenge lies. All design decisions (ramp angle, cradle geometry, vessel stern shape, dynamic positioning) should be evaluated against the recovery scenario.

### Lesson 7: USBL Acoustic Positioning is Essential
The UUV must have an acoustic homing capability for the final approach to the vessel. USBL transponders (e.g., from EvoLogics, Sonardyne, or Kongsberg) should be specified from the start, integrated into both the UUV and the vessel/LARS.

### Lesson 8: Material Selection for Tropical Marine Environment
Vietnam's tropical maritime environment (high temperature, high humidity, aggressive biofouling) demands:
- 316L or duplex stainless steel for structural elements.
- Anodized marine-grade aluminum (6061-T6 or 5083) for lightweight elements.
- HDPE or UHMWPE for guide rails and bumpers.
- Anti-fouling coatings on all submerged/splash-zone components.
- Freshwater washdown system post-recovery.

### Lesson 9: Consider the ARCIMS Model -- UUV-from-USV
Rather than only deploying UUVs from crewed vessels, Vietnam should evaluate the USV-as-LARS-carrier concept (like ARCIMS). A 10-15 m USV can deploy and recover medium UUVs autonomously, keeping human operators safely ashore or on a mother ship. This is the global trend in MCM operations.

### Lesson 10: Test in Representative Conditions Early
Atlas Elektronik has conducted extensive sea trials in the North Sea and Baltic. Vietnam should plan for early LARS testing in representative conditions (South China Sea littoral, Mekong Delta waters, Cam Ranh Bay) to validate the funnel geometry, ramp angle, and recovery procedure before committing to final design.

---

## Summary Comparison Table

| Feature | Atlas/tkMS Approach | Recommended for VN |
|---------|--------------------|--------------------|
| Launch method | Stern ramp + cradle | Stern ramp + cradle |
| Recovery method | Guided cradle with funnel | Guided cradle with funnel |
| UUV class | 300-500 kg, ~324 mm dia | 200-500 kg, ~324 mm dia |
| Sea state (recovery) | SS 3-4 | Target SS 3 initially |
| Automation | Semi-auto to autonomous | Semi-auto (Phase 1) |
| Platform | Dedicated MCM + USV + modular | Modular containerized (priority) |
| Material | Marine stainless + aluminum | 316L SS + 5083 Al + HDPE |
| Acoustic homing | USBL integrated | USBL (commercial off-the-shelf) |
| Operators | 2-3 (semi-auto) | 3-4 (initial), reduce over time |

---

## Sources

> **Note:** WebSearch and WebFetch tools were denied during this session. This analysis is based on Claude's pre-training knowledge (cutoff: May 2025). The following are representative public sources that informed the training data. Users should verify current specifications directly with thyssenkrupp Marine Systems.

- thyssenkrupp Marine Systems official website: https://www.thyssenkrupp-marinesystems.com/en/solutions/unmanned-naval-systems
- Atlas Elektronik SeaCat product page (archived): https://www.atlas-elektronik.com/solutions/unmanned-vehicles/seacat/
- Naval Technology - SeaCat AUV profile: https://www.naval-technology.com/projects/seacat-autonomous-underwater-vehicle/
- ARCIMS product information: https://www.atlas-elektronik.com/solutions/mine-countermeasures/arcims/
- Jane's Navy International - Atlas Elektronik MCM systems coverage (various editions, 2018-2024)
- Shephard Media / Underwater Defence Technology conference proceedings (2019-2024)
- NATO Allied Maritime Command MCM publications
- Wikipedia - Atlas Elektronik: https://en.wikipedia.org/wiki/Atlas_Elektronik
