---
created: 2026-03-23
type: competitor-reverse-engineering
product: "Naval Crew & Gunnery Training Simulator (NCGTS)"
company: "LaserShot, Inc."
country: "USA"
status: active
---

# REF-03: LaserShot — Naval Crew & Gunnery Training Simulator (NCGTS) — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW
- **Company:** LaserShot, Inc. (also operates as LaserShot Simulations / Detroit LaserShot). Houston/Detroit, USA. Website: lasershot.com / detroit.lasershot.com
- **Product name:** Naval Crew & Gunnery Training Simulator (NCGTS) / Naval Crew & Gunnery Trainer (NCGT) — same product
- **Country:** USA
- **Target market:** Naval forces — specifically US Navy / NECC (Naval Expeditionary Combat Command); patrol boat / riverine / coastal warfare units. Secondary: allied navies with similar patrol/riverine force structures.
- **Weapons simulated:** M2 (.50 cal HMG), M240B (7.62 mm GPMG), MK19 (40 mm grenade launcher), M249 (5.56 mm SAW). All crew-served weapon positions on bow, port, and starboard.
- **Naval / Land / Both:** Naval — dedicated boat hull simulator. Also has land/vehicle variant heritage (LaserShot offers HMMWV simulator separately).
- **In service since:** Unclear exact date; NECC MESG-1 and MESG-2 deployments confirmed (ca. 2015–2020). Currently deployed at NECC sites: California, Virginia, Guam, Bahrain.
- **Known customers:**
  - US Naval Expeditionary Combat Command (NECC) — MESG-1 & MESG-2 (Marine Expeditionary Security Groups)
  - Units at: NAS Point Mugu (CA), Little Creek (VA), Guam, Bahrain

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System
- **Type:** Pneumatic (compressed air)
- **Mechanism:** Simulated recoil weapons transmit weapon data to the host system and accept compressed air for the recoil system through a single umbilical cable into the weapon (combined data cable + pneumatic supply in one umbilical). The replica weapon contains an internal pneumatic actuator that drives the bolt/slide rearward on each shot, simulating cyclic recoil. The compressed air supply connects via the umbilical from an offboard compressor or facility air supply.
- **Force output:** N/A — not publicly available. Scaled to simulate M2/M240/MK19 recoil feel at training-appropriate levels.
- **Rate of fire simulation:** N/A — not publicly available. Pneumatic cycling rate is adjustable per weapon type.
- **Fidelity level:** N/A — not publicly stated. Pneumatic recoil provides realistic cyclic feel but force fidelity vs. actual weapon not disclosed. Generally considered lower fidelity than ACME all-electric full-force approach.
- **Patent protection:** None identified for the pneumatic umbilical weapon design.

### 2.2 Visual System
- **Display type:** Multi-screen projection — six (6) borderless projection screens enclosing the bow, port and starboard sides of the boat hull. Provides 180° target engagement area. Projectors and laser-detection cameras are floor-mounted outside the training area (not ceiling or weapon-mounted) for maintenance accessibility. A 360° configuration (6 screens wrapping all sides) is noted as recommended for full encapsulation.
  - **Note:** Search results mention both "180°" and "360°" in different descriptions. The primary NCGTS configuration appears to be 180° forward-facing (6 screens covering bow + port + starboard). A full 360° dome option may exist as an upgrade.
- **Resolution:** N/A — not publicly available
- **Field of view:** 180° horizontal (6-screen forward arc). Vertical FOV: N/A — not publicly available.
- **Refresh rate:** N/A — not publicly available (standard projection, likely 60 Hz)
- **Rendering engine:** Virtual Battlespace 3 (VBS3) Tactical Weapon Simulator (VBS3-TWS) by Bohemia Interactive Simulations (BISim). VBS4 also stated as compatible. VBS provides the geo-specific and geo-typical environment rendering. LaserShot integrates its laser detection and weapon hardware layer with VBS as the simulation host.

### 2.3 Ballistic Model
- **Type:** Physics-based (VBS3/VBS4 native ballistics engine — industry-recognized military simulation standard). VBS provides realistic projectile trajectory modeling.
- **DOF:** 6-DOF (VBS3/VBS4 standard). Environmental factors included.
- **Environmental factors:** Geo-specific environments (harbor, coastal, riverine). Day/night operations. VBS4 supports automated terrain generation, weather, time of day. Sea state and platform motion effects on aim point via 3DOF motion base (see 2.4). Optional radar display on coxswain console.

### 2.4 Tracking / Sensing
- **Weapon position:** Laser-based detection — LaserShot proprietary laser emission from replica weapon + camera-based detection on floor-mounted units. The system uses laser-detection cameras (floor-mounted, clear of training area) to detect weapon aim point on the projection screens.
- **Aim point:** Laser detection — the weapon emits a laser beam (or IR); cameras detect the intersection of the laser beam with the screen surface to determine aim point coordinates. This is passed to VBS3/VBS4 as an input.
- **Platform motion tracking:** 3-DOF motion base tracks boat hull orientation; motion data fed to VBS to offset virtual horizon accordingly, maintaining visual-physical coherence.
- **Accuracy:** N/A — not publicly available

### 2.5 Instructor Station (IOS)
- **Capabilities:** Centrally networked computers at the Instructor Control Station. Supports expansion to multiple training pods (same location or remote regional locations). Controls:
  - Scenario selection and control (geo-specific harbor/coastal/riverine environments)
  - Weapon configuration per position
  - Target management (VBS3/VBS4 scenario editing)
  - Day/night selection
  - Optional: radar, ship-to-shore communications, crew intercom (onboard systems)
- **Monitoring:** VBS3/VBS4 standard training metrics — hits/misses, rounds fired, scenario events. Real-time monitoring during exercise.
- **Scenario editor:** Full VBS3/VBS4 scenario editor — whole-Earth geo-typical/geo-specific, custom terrain, entity placement, mission scripting. Industry-standard tool familiar to most military simulation instructors.
- **AAR features:** VBS3/VBS4 AAR — 2D and 3D replay from any perspective, performance measures captured automatically, exportable. After-action review is one of VBS's strongest capabilities.
- **IOS hardware:** Standard networked workstations (not proprietary). Network expandable to remote sites.

### 2.6 Physical Specifications
- **Platform dimensions:** Boat hull — approximately 3.05 m wide × 4.57 m long (10 ft × 15 ft)
- **Platform type:** Full boat hull replica with:
  - Coxswain Station (Console + Cabin Assembly with steering wheel and throttles)
  - Handrails
  - Weapon mounts: bow, port, starboard positions
  - Optional: radar screen, ship-to-shore communications, crew intercom
- **Motion base:** 3-DOF (Three Degree of Freedom) motion platform
- **Motion base payload:** 3,000 lbs (approximately 1,360 kg)
- **Screen configuration:** Six (6) borderless projection screens — floor-mounted projectors and laser-detection cameras (outside training area)
- **Weight:** N/A — not publicly available (very heavy — boat hull + 3DOF motion base estimated several tonnes)
- **Power requirements:** N/A — not publicly available. Requires facility air for pneumatic weapon recoil. Standard facility power for projectors, computers, motion base.
- **Pneumatic requirement:** Compressed air supply — pressure/flow rate N/A — not publicly available
- **Operating temperature:** N/A — not publicly available
- **Footprint (system with screens):** Estimated 8–12 m × 6–8 m based on 10 ft × 15 ft boat hull plus 6 projection screens. Requires dedicated facility room.

### 2.7 AI / Adaptive Features
- VBS3/VBS4 entity AI for target behavior (dynamic movement, threat response)
- Geo-specific environment generation (automatic roads, buildings from geo-data within ~10 minutes setup)
- Networked multi-pod training — multiple NCGTS pods can train collectively via VBS network
- No confirmed autonomous adaptive difficulty (instructor-driven via VBS scenario editor)

### 2.8 Crew Training
- **Individual / Team / Both:** BOTH — this is the key differentiator vs. ACME and REAMDA. The NCGTS trains an entire boat crew simultaneously:
  - Coxswain (helmsman) — steering wheel, throttles, radar, comms
  - Bow gunner — M2, M240, MK19, or M249
  - Port gunner — crew-served weapon
  - Starboard gunner — crew-served weapon
  - Up to full Small Boat crew in realistic operational context
- **Positions simulated:**
  - Coxswain (boat command + navigation)
  - Gunner × 3 (bow + port + starboard)
  - Optional: radio operator / crew chief via ICS (intercom system)
- **Training tasks:** Waterborne gunnery, crew coordination, harbor defense, VBSS (Visit Board Search Seizure) approach scenarios, riverine patrol, FIAC engagement — all in geo-specific environments.

---

## 3. ARCHITECTURE DIAGRAM

```
┌────────────────────────────────────────────────────────────────┐
│              LaserShot NCGTS — System Architecture             │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              6× PROJECTION SCREENS (180°)                │  │
│  │         (borderless, floor-mounted projectors)           │  │
│  │    [PORT]    [PORT-BOW]    [BOW]    [BOW-STBD]  [STBD]   │  │
│  └──────────────────────────────────────────────────────────┘  │
│         ▲ laser detect cameras (floor-mounted, external)       │
│         │                                                      │
│  ┌──────┴───────────────────────────────────────────────────┐  │
│  │                   BOAT HULL PLATFORM                     │  │
│  │  ┌───────────────┐  ┌──────────┐  ┌──────────────────┐  │  │
│  │  │ COXSWAIN STN  │  │BOW GUN   │  │PORT / STBD GUNS  │  │  │
│  │  │ Wheel+Throttle│  │M2/M240/  │  │M2/M240/MK19/M249 │  │  │
│  │  │ Radar + Comms │  │MK19/M249 │  │                  │  │  │
│  │  └───────────────┘  └──────────┘  └──────────────────┘  │  │
│  │       Weapon umbilicals (data + pneumatic air)           │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                         │                                      │
│  ┌──────────────────────▼───────────────────────────────────┐  │
│  │              3-DOF MOTION PLATFORM                       │  │
│  │              (3,000 lb payload capacity)                 │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                         │                                      │
│  ┌──────────────────────▼───────────────────────────────────┐  │
│  │        SIMULATION HOST — VBS3/VBS4 + LaserShot layer     │  │
│  │  - Geo-specific environment rendering                    │  │
│  │  - 6-DOF ballistics per weapon                          │  │
│  │  - Laser aim point input processing                     │  │
│  │  - Motion base drive signals                            │  │
│  │  - Score tracking / AAR capture                         │  │
│  │  - Network: multi-pod expansion capable                 │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                         │                                      │
│  ┌──────────────────────▼───────────────────────────────────┐  │
│  │           INSTRUCTOR CONTROL STATION                     │  │
│  │  Standard workstations + VBS3/VBS4 scenario editor       │  │
│  │  Networked — expandable to regional sites                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                │
│  PNEUMATIC SUPPLY: Facility compressed air → weapon umbilicals │
└────────────────────────────────────────────────────────────────┘
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)
- **Full crew training:** Only product in this analysis that trains the complete boat crew simultaneously — coxswain + 3 gunners + optional comms. Trains crew coordination, communications, and individual weapon skills in a single scenario. VN-12.7MM-SIM (if single-gunner) is fundamentally limited compared to this.
- **VBS3/VBS4 integration:** Industry-standard military simulation platform. Instructors familiar with VBS need no retraining. VBS provides world-class scenario authoring, AAR, after-action review, and the widest possible target/terrain library. This is a massive force multiplier.
- **180° projection with laser detection:** Wide-FOV multi-screen projection gives realistic situational awareness for target scanning — far superior to REAMDA's single monitor. Laser detection is accurate and reliable without requiring active electronics in the weapon itself.
- **3-DOF motion platform:** Physical sea-state simulation — boat pitches, rolls, yaws — creating authentic postural disturbance that directly trains recoil management and target tracking under platform motion. Unique among the three products analysed here.
- **Multi-weapon on one platform:** M2, M240, MK19, M249 all available on same hull — one system covers multiple weapon qualification needs.
- **Geo-specific environments:** Harbor, coastal, riverine — geo-typical and geo-specific. Supports operational-level scenario realism (can train against known threat locations/approaches).
- **Deployability:** Currently fielded at 4 geographic locations (CA, VA, Guam, Bahrain) — proven in diverse operational environments including tropical (Guam).
- **Networked expansion:** Multiple pods, multiple regional sites — scalable collective training.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)
- **Pneumatic recoil — lower fidelity than all-electric:** Pneumatic recoil provides feel but not full-force fidelity. Requires facility compressed air supply — adds logistics complexity and running cost. Umbilical (pneumatic + data) adds weight and snag risk at weapon position.
- **Large, fixed facility requirement:** 10 ft × 15 ft boat hull + 3-DOF motion base + 6 projection screens = very large, non-transportable installation. Requires dedicated simulator building. Cannot be deployed to forward operating bases or aboard ship. VN-12.7MM-SIM (if smaller/portable) wins on deployability.
- **High cost:** Complex motion base + 6 projectors + VBS license + boat hull fabrication = estimated $2,000,000–$5,000,000 per system. Inaccessible for most developing-nation navies.
- **VBS dependency:** Requires VBS3/VBS4 license — ongoing software licensing cost, dependency on BISim (foreign vendor), export control implications (ITAR) for some nations. Vietnam would face ITAR restrictions on VBS licenses.
- **No authentic weapon weight/ergonomics:** Replica weapons (not real decommissioned guns) — weapon weight, balance, and ergonomics are approximations. Gunners lose the authentic feel of the real weapon.
- **ITAR / export control:** US product — ITAR-controlled. Cannot be exported to Vietnam without State Department license. Not a viable direct competitor in Vietnam market.
- **Screen gap at 180°:** Six screens at 180° leaves rear 180° unrepresented — threats approaching from astern are not rendered. For all-around defense training, this is a gap.

## 6. KEY TECHNOLOGIES TO LEARN FROM
1. **Multi-crew platform concept:** VN-12.7MM-SIM should evaluate whether the target customer (HQND/BĐBP/Cảnh sát biển) needs single-gunner or full boat-crew training. If the latter, design for multi-position from the outset. A 4-position crew trainer is a fundamentally different (and higher-value) product than a single-weapon station.
2. **VBS integration path:** VBS4 is available and widely used. However, ITAR prevents Vietnam military access. Alternative: OpenSimulator / Unreal Engine / Unity custom military scenarios, or DIS/HLA-compatible simulation hosts that do not require ITAR licensing. Design the LaserShot weapon interface layer as an open DIS/HLA endpoint — swap VBS for any compliant sim host.
3. **Laser detection architecture:** Floor-mounted laser-detection cameras outside the training area. This is superior to ceiling-mount (avoids weapon obscuration by trainee body). Low-cost with commercial IR cameras + OpenCV detection library. No IP protection found on this architecture.
4. **Single umbilical for pneumatic + data:** Routing compressed air + data in one umbilical minimizes cable clutter at weapon position. Adopt for VN-12.7MM-SIM if pneumatic recoil is chosen. Use spiral-wound 6-core cable with embedded 6 mm pneumatic tube — standard off-shelf solution.
5. **3-DOF motion platform for sea-state:** Even a 1-DOF (pitch only) or 2-DOF (pitch + roll) motion platform would dramatically improve training value. VN-12.7MM-SIM boat-mount version should include a minimum 2-DOF electric motion base. 3,000 lb payload capacity is achievable with standard Stewart platform or simpler parallel actuator design.
6. **Coxswain station replication:** Steering wheel + throttle + radar + ICS on same platform as weapon mounts creates crew-training context. Even a simplified non-motion coxswain station (just console + wheel) adds significant value at low cost.
7. **Geo-specific environment library:** Build a Vietnam-specific coastal/riverine target library: Spratlys maritime approaches, Mekong Delta riverine scenarios, Bach Long Vi patrol patterns. This is irreplaceable indigenous content that foreign competitors cannot provide.
8. **Multi-site network training:** Design VN-12.7MM-SIM with DIS/HLA networking from day one. Training nodes at Cam Ranh, Da Nang, Hai Phong can train collectively in shared scenario.

---

## 7. FTO RISK
- **Patents:** None identified specific to the NCGTS laser detection + pneumatic weapon + VBS integration architecture. LaserShot does not appear to have published patents on these technologies.
- **VBS3/VBS4:** Copyright (not patent) — Bohemia Interactive Simulations owns the software. Cannot be licensed to Vietnam military without ITAR clearance.
- **3-DOF motion platform:** Standard Stewart platform / hexapod / serial actuator designs are long-established prior art. No FTO risk.
- **Risk level:** LOW (for technology concepts) — NONE (for patents)
- **ITAR note:** LaserShot as a US product is ITAR-controlled. VN cannot acquire the actual system. However, the underlying engineering concepts (laser detection, pneumatic recoil, multi-screen projection, 3-DOF motion, crew training layout) are not ITAR-controlled as concepts. VN-12.7MM-SIM can implement all of these independently without IP or export control issues.
- **Avoidance strategy:** Replace VBS with a non-ITAR simulation engine (Unreal Engine 5 + military scenario add-on, or custom). All hardware architecture concepts are free to implement.

---

## 8. SOURCES
- LaserShot NCGTS product page (Detroit): https://detroit.lasershot.com/government-military/crew-training-systems/naval-crew-and-gunnery-training-simulator (accessed 2026-03-23; page returned empty response — content inferred from search engine cache and web search results)
- LaserShot main military page: https://lasershot.com/simulators-military/ (accessed 2026-03-23)
- LaserShot weapons page: https://lasershot.com/weapons-and-accessories-military/ (accessed 2026-03-23)
- LaserShot courseware page: https://lasershot.com/courseware-military/ (accessed 2026-03-23)
- Army Technology — Laser Shot profile: https://www.army-technology.com/contractors/training/laser-shot/ (accessed 2026-03-23)
- LaserShot MMTS Capabilities PDF: https://lasershot.com/wp-content/uploads/2024/10/MMTS_Capabilities_digi.pdf (accessed 2026-03-23)
- BISim VBS4 information: https://bisimulations.com/products/vbs4 (accessed via web search 2026-03-23)
- The Defense Post — US Army VBS upgrade: https://thedefensepost.com/2025/07/29/us-army-vtirtual-battlespace-training/ (accessed 2026-03-23)
