---
created: 2026-03-23
type: competitor-reverse-engineering
product: ".50 Caliber Machine Gun Naval Gunnery Simulator"
company: "REAMDA Ltd. / Sarkareod Robotics"
country: "Ireland"
status: active
---

# REF-02: REAMDA / Sarkareod Robotics — .50 Caliber Naval Gunnery Simulator — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW
- **Company:** REAMDA Ltd. (original developer); also marketed/rebranded as Sarkareod Robotics. HQ: Ireland. Tel: +353 (0) 66 7120500
- **Product name:** .50 CALIBER Machine Gun Naval Gunnery Simulator (part of Naval Gunnery Simulator product family)
- **Country:** Ireland
- **Target market:** Naval forces — coast guard, patrol vessel crews, naval infantry. Primary market: Irish Naval Service. Secondary: other small/medium navies and coast guards.
- **Weapons simulated:** .50 Caliber (12.7 mm) M2HB Machine Gun (using actual decommissioned weapon). Same product family also covers: Rheinmetall 20 mm Naval Cannon, 76 mm OTO Melara (EOFCS simulator — separate product).
- **Naval / Land / Both:** Naval — explicitly designed for naval gunnery personnel. Moveable platform simulates conditions at sea.
- **In service since:** ~2015 (website project date July 2015); operational at Irish Naval Service Training College (confirmed).
- **Known customers:**
  - Irish Naval Service Training College (3 simulators — .50 cal HMG, Rheinmetall 20 mm, EOFCS 76 mm)
  - Irish Army (also trains at the Irish Naval Service facility)
  - Other customers not publicly disclosed

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System
- **Type:** None confirmed — N/A — not publicly available. The brochure and website make no mention of simulated recoil for the .50 cal unit. The weapon is decommissioned (real, but inoperable). No recoil simulation mechanism described.
- **Mechanism:** N/A — not publicly available. Likely no active recoil; the decommissioned weapon provides authentic weight, ergonomics and manual operation (charging, aiming) but firing produces no recoil impulse.
- **Force output:** N/A — not publicly available (likely 0 N — no recoil simulation)
- **Rate of fire simulation:** N/A — not publicly available. Trigger actuation likely sends a digital fire signal; no cyclic recoil feedback.
- **Fidelity level:** Ergonomic/kinesthetic fidelity HIGH (real weapon weight, grips, charging handle). Recoil fidelity: likely 0% (no active recoil described).
- **Patent protection:** None identified.

### 2.2 Visual System
- **Display type:** Augmented Reality (AR) — the primary distinguishing feature. A large flat-panel monitor (visible in brochure photos: approximately 24–32 inch widescreen monitor mounted directly behind/above the weapon's sights, in the gunner's line of sight). The gunner looks through or past the real weapon's iron sights toward the AR display showing the virtual environment overlaid on/adjacent to the real weapon. This is monitor-based AR, not HMD-based.
  - From brochure photograph: The IOS (instructor console) uses a standard laptop/workstation monitor. The gunner's display is a large monitor positioned at the end of the weapon barrel axis.
- **Resolution:** N/A — not publicly available (standard commercial LCD monitor, likely 1080p or higher)
- **Field of view:** Narrow — limited to the monitor size and placement. No wide-FOV dome or multi-screen wrap. Estimated 30–50° horizontal based on monitor size and viewing distance in brochure photos.
- **Refresh rate:** N/A — not publicly available (standard 60 Hz LCD assumed)
- **Rendering engine:** Proprietary REAMDA software. Brochure shows a 3D naval environment with vessel targets and aircraft. Instructor console screenshot shows "CONTROL CONSOLE / SCORE / RADAR / PCS" tabs, with target selection panel, score overlay, radar display, and heading indicator. Engine is custom-built (not identified as commercial off-the-shelf game engine).

### 2.3 Ballistic Model
- **Type:** Likely simplified physics or lookup table — N/A — not publicly disclosed in detail. The system tracks "shots fired, number of shots on target or in the vicinity of the target." A kill zone radius is adjustable by the instructor (increasing/decreasing target kill zone). This implies simplified area-of-effect calculation rather than full 6-DOF ballistic simulation.
- **DOF:** N/A — not publicly available. Likely 3-DOF or simplified trajectory.
- **Environmental factors:** Wind (adjustable), sea state, precipitation, cloud cover, fog, time of day (affects brightness and visibility). All adjustable at run time by instructor.

### 2.4 Tracking / Sensing
- **Weapon position:** Moveable gunnery platform with position tracking — implies azimuth and elevation encoders or potentiometers on the weapon mount. Platform motion also tracked to offset target position. Exact sensor type: N/A — not publicly available.
- **Aim point:** Derived from weapon orientation tracking (encoders) combined with ballistic model. No separate laser or IR aim point sensor mentioned.
- **Accuracy:** N/A — not publicly available
- **Platform motion:** The gunnery platform is described as "moveable" to simulate sea conditions — implies a motion base (likely 1-2 DOF rocking/pitching, not full 6-DOF). Exact motion base spec: N/A — not publicly available.

### 2.5 Instructor Station (IOS)
- **Capabilities:** Standalone instructor console runs on laptop or standard workstation, independently of the gunnery simulator hardware. Can operate from a separate room. Controls:
  - Target selection (up to 8 different target types)
  - Scenario loading and modification
  - Difficulty adjustment (reduce/increase target kill zone radius)
  - Weather/environment adjustment at run time: time of day, precipitation, cloud cover, fog, wind, sea state
  - Target behavior: speed, location, position, course, orientation — all adjustable per target
  - Multiple simultaneous targets (friendly + threat)
  - Ammunition reload command
  - Scenario reset
- **Monitoring:** Real-time student performance monitoring — score sheet tracking shots fired, hits on/near target, friendly fire incidents. Automated student lesson plan recording (student name, ID, instructor name, date, conditions).
- **Scenario editor:** Lesson plan system with settable scenario number. Scenarios include: static targets, fishing trawlers, tugboats, RIBs, cargo vessels, MIG-29 fighter jets, Blackhawk S-70. Custom scenarios appear possible. Heading indicator (compass rose) shows target approach bearing.
- **AAR features:** Automated recording of lesson implementation — post-exercise review of shots fired, hit/miss, conditions. Score sheet exportable. Formal playback/replay: N/A — not publicly described.
- **IOS hardware:** Laptop or standard PC workstation (not proprietary hardware)

### 2.6 Physical Specifications
- **Weapon hardware:** Actual decommissioned .50 caliber M2 machine gun on original naval mount (visible in brochure: pintle/ring mount). Full weapon weight and form factor preserved.
- **Gunnery platform:** Moveable base simulating sea motion — exact dimensions N/A — not publicly available.
- **Overall system footprint:** N/A — not publicly available. Likely requires ~4–6 m² floor space based on brochure photos.
- **Weight:** N/A — not publicly available
- **Power requirements:** N/A — not publicly available (standard mains power assumed for computers and display)
- **Operating temperature:** N/A — not publicly available

### 2.7 AI / Adaptive Features
- Target behavior adjustable (speed, course, orientation) — instructor-driven, not AI-autonomous
- Target kill zone adjustable for difficulty progression — instructor-driven
- Multiple simultaneous friendly + threat targets — requires instructor target management
- No confirmed autonomous adaptive AI difficulty

### 2.8 Crew Training
- **Individual / Team / Both:** Individual — single gunner position. The system trains one gunner at a time on a single weapon station.
- **Positions simulated:** Single weapon position (.50 cal gunner). No helmsman, no crew coordination, no bridge simulation.

---

## 3. ARCHITECTURE DIAGRAM

```
┌──────────────────────────────────────────────────────────┐
│        REAMDA .50 CAL NAVAL GUNNERY SIMULATOR            │
│                                                          │
│  ┌──────────────────────┐    ┌───────────────────────┐  │
│  │  DECOMMISSIONED M2   │    │   AR DISPLAY MONITOR  │  │
│  │  on naval mount      │    │   (~24-32" LCD)        │  │
│  │  (real weapon,       │    │   positioned at end    │  │
│  │   full weight)       │    │   of weapon sight axis │  │
│  │                      │    └───────────┬───────────┘  │
│  │  Sensors:            │                │              │
│  │  - Az/El encoders    │    ┌───────────▼───────────┐  │
│  │    (inferred)        │    │  SIMULATION HOST PC   │  │
│  └──────────┬───────────┘    │  - 3D naval world     │  │
│             │ encoders        │  - Target AI          │  │
│             └────────────────►│  - Ballistics model  │  │
│                               │  - Score tracking    │  │
│                               │  - Audio (ship sound)│  │
│  ┌──────────────────────┐     └───────────┬──────────┘  │
│  │  MOVEABLE GUNNERY    │                 │             │
│  │  PLATFORM            │     ┌───────────▼──────────┐  │
│  │  (simulates sea      │     │  INSTRUCTOR CONSOLE  │  │
│  │   motion — rocking)  │     │  (laptop/workstation)│  │
│  └──────────────────────┘     │  Tabs: CONTROL /     │  │
│                                │  SCORE / RADAR / PCS │  │
│  AUDIO: Real ship audio        └──────────────────────┘  │
│  playback through speakers                               │
└──────────────────────────────────────────────────────────┘
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)
- **Real weapon authenticity:** Decommissioned actual M2 — 100% ergonomic fidelity, weight, controls, sighting. Zero manufacturing complexity for weapon replica. Gunners train on the exact weapon they will fire.
- **AR visual approach:** AR display mounted in gunner's sight line is intuitive and requires minimal adaptation. No HMD required, no sick-free concerns, easy to maintain.
- **Low-cost instructor console:** Standard laptop, independent of simulator hardware — IOS can be relocated easily. Simple robust architecture.
- **Naval-specific scenario library:** Ship audio, moving sea targets, aircraft threats, sea state effects — purpose-built for naval gunnery, not adapted from helicopter/vehicle training.
- **Proven in service:** 3 units in active use at Irish Naval Service Training College. Long operational history (~10 years) validates reliability.
- **Multi-weapon product family scalability:** Same instructor console and software architecture covers .50 cal HMG, 20 mm cannon, 76 mm EOFCS — upsell path from one platform.
- **Simple logistics:** No pneumatics, no consumables beyond standard PC maintenance. Decommissioned weapon is already on-hand at most navies.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)
- **No recoil simulation:** Largest gap — the .50 cal M2 has significant and distinctive recoil. Training without recoil fails to develop the core skill of recoil management and target re-acquisition. VN-12.7MM-SIM with active recoil directly outperforms on fidelity.
- **Narrow FOV display:** Single monitor at weapon sight line — very limited situational awareness. No peripheral vision of threats, no wide-scan engagement training. VN-12.7MM-SIM with wider projection or multi-screen will be vastly superior for realistic naval engagement.
- **No motion base confirmed for .50 cal:** The platform is described as "moveable" — unclear if it provides active sea-state motion or is just manually repositionable. If static, sea-state training is visual-only (display shows rolling horizon but gunner has no physical cue).
- **Legacy architecture:** Website last updated ~2015; Sarkareod Robotics rebranding unclear. Technology appears stagnant — no AR headset upgrade, no AI targets, no VR option announced.
- **Single-gunner only:** No crew-level or team training.
- **Ireland-only market apparent:** No known export customers beyond Irish Naval Service. Limited international sales suggest cost/capability may not compete outside domestic procurement.
- **No published ballistics rigor:** Kill-zone adjustment implies simplified model — may not satisfy rigorous military training standards.

## 6. KEY TECHNOLOGIES TO LEARN FROM
1. **AR display-in-sightline approach:** Mounting the display directly in the gunner's sight axis is elegant — the gunner naturally looks toward target through/past real iron sights, and the display is co-located. VN-12.7MM-SIM could offer this as a low-cost configuration option (single 32" 4K display vs. full projection screen).
2. **Decommissioned weapon sourcing:** If QĐND (Vietnam People's Army) has decommissioned 12.7 mm Type 54 or DShKM weapons available, using these directly (rather than manufacturing a replica) eliminates weapon-replica tooling cost. Investigate availability from training/logistics commands.
3. **Instructor console architecture — laptop + independent:** Decoupling IOS from simulator hardware on a standard laptop is robust and low-cost. VN-12.7MM-SIM should follow this pattern — IOS on standard ruggedized laptop, not proprietary hardware.
4. **Target library for naval context:** REAMDA's target set (trawlers, tugboats, RIBs, cargo, MIG-29, S-70) is a good baseline. VN-12.7MM-SIM should add Vietnam-relevant targets: Type 022 missile boat (threat scenario), Chinese fishing militia vessels (PAFMM pattern), UAVs.
5. **Sea-state environment parameters:** Time of day + precipitation + cloud + fog + wind + sea state = 6 independent environment variables. Adopt this minimum set as VN-12.7MM-SIM IOS environmental controls.
6. **Scoring with kill-zone radius:** Adjustable kill zone (larger = easier, smaller = harder) is a simple and effective difficulty scaling mechanism. Easy to implement in VN firmware/software.
7. **Multi-weapon platform reuse:** Design VN-12.7MM-SIM software/IOS to be weapon-agnostic — future expansion to DShKM 12.7, SPG-9, or 23 mm ZU-23 by swapping weapon module only.

---

## 7. FTO RISK
- **Patents:** None identified. No patent numbers listed in any REAMDA/Sarkareod product literature. Core technologies (decommissioned weapon integration, LCD display in sight line, laptop IOS) are not patentable concepts.
- **Risk level:** NONE — no patent protection identified
- **Avoidance strategy:** No avoidance required. The concept of using a decommissioned weapon with a display and tracking encoders is generic prior art. Standard industry practice.
- **Note:** Sarkareod Robotics rebranding of REAMDA products — legal status of IP transfer not publicly known, but irrelevant from FTO perspective since no patents exist.

---

## 8. SOURCES
- REAMDA project page — Naval Gunnery Simulators: https://reamda.com/project/naval-gunnery-simulators/ (accessed 2026-03-23)
- REAMDA .50 Cal brochure PDF (local copy): `Ref/REAMDA-Naval-Gunnery-Simulator_50.pdf` (downloaded from https://reamda.com/pdfs/REAMDA-Naval-Gunnery-Simulator_50.pdf, accessed 2026-03-23)
- Sarkareod Robotics Naval Gunnery Simulator page: https://www.sarkareodrobotics.com/navalgunnerysimulator (accessed 2026-03-23; page load failed — content inferred from search results)
- C4ISRNET — "Augmented reality helps interpret gunnery commands": https://www.c4isrnet.com/c2-comms/2017/01/26/augmented-reality-helps-interpret-gunnery-commands/ (accessed 2026-03-23)
- ScienceDirect — "Virtual and augmented reality in a simulated naval engagement": https://www.sciencedirect.com/science/article/abs/pii/S0003687020301526 (accessed 2026-03-23)
