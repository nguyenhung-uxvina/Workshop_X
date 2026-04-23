---
created: 2026-03-23
type: competitor-reverse-engineering
product: "fats® 100MIL Military Virtual Training System"
company: "InVeris Training Solutions (formerly Meggitt Training Systems)"
country: "USA"
status: active
---

# REF-14: InVeris Training Solutions — fats® 100MIL Military Virtual Training System — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW

- **Company:** InVeris Training Solutions (formerly Meggitt Training Systems, formerly FATS Inc.)
- **Product name:** fats® 100MIL (Firearms Advanced Training System — Military)
- **Country:** USA (headquarters: Suwanee, Georgia)
- **Target market:** All branches of US military and international allied defense forces. Optimized for garrison-based marksmanship and collective training without live ammunition.
- **Weapons simulated:**
  - Small arms: Full range via BlueFire® wireless weapons (M4, M16, M9, M249, M240B, etc.)
  - Heavy weapons / crew served: M2 .50 cal HMG, MK19 grenade launcher (via Automatic Grenade Launcher simulator family using original weapon receivers or manufacturer-produced non-gun receivers), M224 60mm mortar, M252 81mm mortar, M120 120mm mortar
  - Rockets/launchers: M136 AT4, M72A7 LAW, M3A1 MAAWS (Carl Gustaf), M320 grenade launcher
  - Grenade launchers: C16 (UK)
  - Less-lethal: Taser, OC spray (for law enforcement variant)
  - Up to 60 weapons assignable simultaneously per system
- **Naval/Land/Both:** Land (garrison and deployable)
- **In service since:** FATS Inc. founded 1984; Meggitt acquisition ~2013; InVeris rebranding 2019. fats® 100MIL current generation: ~2019 onward.
- **Known customers:**
  - US Army (EST II — Engagement Skills Trainer II program)
  - US Marine Corps (ISMT — Indoor Simulated Marksmanship Trainer)
  - US Navy virtual simulation programs
  - US Air Force Security Forces Center (selected as "preferred manufacturer" August 2023)
  - International: Demonstrated at DSA 2022 (Malaysia defense exhibition) — active international sales
  - Multiple NATO nations (specific names N/A — not publicly available)

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System

**Architecture: Gas-operated recoil simulation via BlueFire® weapon simulators**

- **BlueFire® technology:** Patented wireless weapon simulator with integrated recoil mechanism. Weapon simulators are built on real weapon frames or manufacturer-produced non-gun receivers.
- **Recoil delivery method:** Gas-operated — compressed CO2 or HPA (High Pressure Air) drives an internal piston/bolt carrier to simulate bolt cycling and recoil impulse. This is the industry-standard approach for virtual simulation weapons.
- **Sensor integration:** BlueFire sensors measure:
  - Trigger pull force and timing
  - Buttstock pressure applied by shooter
  - Weapon cant angle
  - Weapon trace (muzzle movement before/during/after trigger break)
- **Automatic Coaching recoil analysis:** System specifically diagnoses "improper weapon handling" including how the trainee manipulates the trigger, how much pressure is applied to the buttstock, and how the weapon is canted — all of which are affected by anticipatory flinch/recoil compensation. This is the most sophisticated shot-process diagnostic in the market.
- **Heavy weapon recoil (MK19/AGL):** "Air and data tethering ensures the highest possible fidelity in terms of recoil and high volumes of fire" — implies pneumatic recoil actuator, air-fed through a tether to allow sustained fire simulation without CO2 depletion.
- **Mortar:** No recoil simulation described — mortar training is procedural (crew must handle simulated rounds and perform correct drop-loading procedures). Physical recoil not applicable for muzzle-loaded weapons.
- **M2 .50 cal:** Included in the product family based on US Army EST program requirements; specific recoil mechanism for M2 simulator — N/A not publicly available in detail.
- **Wireless range:** BlueFire weapons are fully wireless — no tether for small arms. Heavy weapons (AGL/M2) may require air tether for sustained high-volume fire simulation.

### 2.2 Visual System

- **Display type:** High-resolution projection system (projector + screen). NOT a display monitor.
- **Projection screens:** Front projection onto flat screen(s). Configuration options:
  - Single screen (1-screen): Standard 3D Marksmanship and Judgmental training
  - Triple screen (3-screen): Collective/VBS3 training mode with panoramic view — "up to three screens" networked together
  - 15 lanes (15-screen equivalent): Advanced 3D Marksmanship mode supports up to 15 concurrent shooting lanes
- **Resolution:** 1920 × 1080p HD (confirmed for Judgmental HD video scenarios)
- **Visual environment engine:**
  - **3D Marksmanship mode:** Advanced game engine. Photorealistic 3D terrain with natural occultation (foliage, obstacles). 3D targets including realistic paper targets. Moving eye point (shoot and move). Perspective-correct target rendering per lane.
  - **Collective training mode:** VBS3 (Virtual Battlespace 3) by Bohemia Interactive Simulations. ~9,000 3D models. Artificial intelligence and automatic pathfinding for OPFOR. Panoramic view across multiple screens. Continuous compass tape across multiple screens.
  - **Judgmental mode:** HD video scenarios (real video footage). 1920×1080p. Near-miss and branching scenarios.
- **Environmental effects:** Wind, temperature, elevation affect ballistics and visual environment. Wind-blown trees and grass animated. Weather conditions programmable.
- **Night/thermal simulation:** N/A — not explicitly detailed for 100MIL (confirmed in early Raydon/Army article as available in HMD-based systems; projector-based systems may have IR filter overlay).
- **Target detection/recognition/identification (DRI):** Explicitly designed to support DRI requirements for military qualification standards.

### 2.3 Ballistic Model

- **Engine:** Advanced proprietary game engine (not publicly identified — likely Unreal Engine or custom engine built on top of VBS3 for collective training)
- **Fidelity:** Full environmental ballistics model:
  - Temperature effects on muzzle velocity and powder burn
  - Elevation (air density) effects on trajectory
  - Wind speed and direction with visual correlation (trees/grass movement)
  - Gravity drop by caliber/round type
  - Lead point indicator for moving targets (automatic lead calculation displayed to trainee)
- **Round types per weapon:** Multiple (for mortars: HE, White/Red Phosphorous Smoke, Illumination — one of each per mortar simulator)
- **After Action Review:** Shot placement reviewable in 3D virtual environment with correct target perspective. Full shot trace from muzzle to impact available for instructor analysis.
- **Automatic Coaching ballistics:** System flags when shot result is inconsistent with weapon hold position — correlates sensor data with ballistic outcome to diagnose shooter error root cause.

### 2.4 Tracking/Sensing

**BlueFire® sensor suite (per weapon):**
- Trigger: Force and timing sensor (measures trigger pull weight, slap, staging)
- Buttstock: Pressure sensor (measures cheek weld / stock pressure — correlates with shoulder mounting quality)
- Cant: Angular sensor (measures weapon roll about barrel axis)
- Muzzle trace: IMU or optical sensor (measures weapon movement before, during, and after trigger break — the primary indicator of flinch and follow-through failure)
- **Shot detection:** Internal sensor detects simulated firing event; data transmitted wirelessly to IOS
- **Wireless protocol:** Proprietary BlueFire wireless protocol (N/A — not publicly available; likely 2.4GHz or 5GHz ISM band)
- **Range:** Wireless range N/A — not publicly available (must function across a 15-lane shooting range, estimated 25–30m minimum)

### 2.5 Instructor Station (IOS)

**Multi-tier IOS architecture:**

- **Main IOS console (rack or case-mounted):** Full system control. Unified User Interface (UUI) with dark color theme for low-light environments.
  - System health monitoring integrated into UUI
  - Error and warning indicators always visible
  - Weapon assignment to trainees (up to 60 weapons, 15 trainees)
  - Scenario selection and configuration
  - Environmental parameter control (wind, temperature, elevation)
  - Real-time monitoring of all trainees simultaneously
  - Session recording and data export

- **Instructor tablet (optional, wireless):**
  - "Instructor Mode" — controls contiguous range of lanes (e.g., lanes 1–5)
  - Displays per-trainee shot placement, sensor data, coaching flags in real time
  - Instructor walks firing line with tablet — eliminates distance between IOS console and firing point
  - Shows exact shot placement, weapon trace, improper handling incidents
  - Doctrinal references and corrective video excerpts auto-populated based on diagnosed error

- **Trainee tablet (optional):**
  - "Trainee Mode" — functions as Firing Point Computer
  - Shows personal performance data
  - Streaming access to training materials (PDFs, Word, PowerPoint, .mpg, .wmv)
  - Materials streamed from system (not stored on tablet) for data security

- **AAR (After Action Review):**
  - 2D map view (collective) + 3D view (matches horizontal FoV of screens during training)
  - Shot/hit/miss timeline
  - Sensor data replay
  - Malfunction events log
  - Instructor comments input during training
  - Scenario branching trace (which branches executed and why)

- **Courseware authoring:**
  - Embedded marksmanship and collective courseware creation tools
  - Import customer-specific training manuals (PDF, MS Office, video)
  - Link doctrinal documents and scorecards to courses of fire
  - System utilization reports for data mining

### 2.6 Physical Specifications

- **Configurations:**
  - **Permanent rack configuration:** Standard 19" rack-mounted computing and control hardware for dedicated training classrooms
  - **Portable mil-spec case configuration:** Complete system in military-specification storage/transport cases. Self-contained for deployable use (FOB, exercise support).
- **Footprint:** N/A — not publicly available (typical for 15-lane system: approximately 15m × 5m range area with separate IOS room)
- **Power requirements:** N/A — not publicly available (standard 110/220V AC, single-phase assumed)
- **Weight (portable config):** N/A — not publicly available
- **Environmental:** Mil-spec storage case implies MIL-STD-810 transport/storage compliance
- **Networkability:** Up to 3 screens networked in Collective/VBS3 mode; up to 15 lanes in Advanced 3D Marksmanship mode. Systems can be networked across multiple rooms/locations (N/A — extent not publicly available).

### 2.7 AI / Adaptive Features

**Automatic Coaching — the key differentiator:**
- **Sensor-to-doctrine correlation engine:** System analyzes BlueFire sensor streams (trigger, cant, buttstock, trace) and correlates with shot outcome. If shot outcome is poor, system diagnoses probable cause from sensor data.
- **Automatic flagging:** System automatically flags "questionable results" (poor shots with diagnosable cause) without requiring instructor to individually review each shooter.
- **Doctrine-linked coaching:** Flagged results link to specific corrective content drawn from the customer organization's own official training doctrine — not generic advice.
- **Video excerpts:** Customized corrective technique videos (loaded by customer) auto-presented on instructor tablet.
- **Adaptive training path:** "Computer remembers where soldier left off and adjusts tutorials based on time since last class" (reported from Army.mil article on Raydon, but architecture principle applies to modern FATS systems as well).
- **VBS3 AI:** OPFOR have AI behavior and automatic pathfinding; AI responds to weapon fire from simulators.
- **System health monitoring:** Self-diagnostic AI monitors weapon simulator connectivity, sensor health, and display system status — flags anomalies to operator proactively.

### 2.8 Crew Training

- **Crew-served mode:** Multiple weapons can be assigned to a single training scenario. Crew members can each operate different weapons simultaneously in the virtual environment (e.g., M2 gunner + M240B assistant gunner in same scenario).
- **Collective training (VBS3):** Squad-level training. Up to 3 screens allow panoramic environment for team situational awareness.
- **Mortar crew procedures:** Mortar simulators include simulated rounds with correct handling weight. Crew must perform correct drop-loading procedures. One HE + one WP + one ILLUM round per mortar system.
- **MK19 / AGL crew:** Loading and firing procedures with air-tethered recoil for sustained fire drills.
- **Scalability:** 15 simultaneous trainees, 60 weapons — supports a full rifle company's marksmanship qualification in one session.
- **Gate to Live Fire:** System generates qualification data recognized by US Army EST II program to certify readiness for live fire.

---

## 3. ARCHITECTURE DIAGRAM

```
┌──────────────────────────────────────────────────────────────────┐
│              InVeris fats® 100MIL — SYSTEM ARCHITECTURE          │
├──────────────────┬───────────────────────┬───────────────────────┤
│  WEAPON LAYER    │  DISPLAY LAYER        │  COMPUTING LAYER      │
│                  │                       │                       │
│ [BlueFire® SA]  │ Projector(s)          │ IOS Console (rack)    │
│  - Trigger       │  1080p HD             │  + Game engine        │
│  - Buttstock     │  1 to 15 screens      │  + Ballistics model   │
│  - Cant IMU      │                       │  + VBS3 server        │
│  - Muzzle trace  │ VBS3 panoramic        │  + BlueFire receiver  │
│ [BlueFire® HW]  │  (3 screens max)      │  + Auto Coaching AI   │
│  - AGL (tethered)│                       │  + AAR database       │
│  - M2 simulator  │                       │                       │
│ [Mortar sim]     │ Screen environment:   │ Instructor tablet     │
│  - HE/WP/ILLUM   │  3D Marksmanship OR  │  (wireless)           │
│    round props   │  VBS3 Collective OR  │                       │
│                  │  HD Video Judgmental  │ Trainee tablet        │
└────────┬─────────┴─────────┬─────────────┴──────────┬────────────┘
         │ Wireless           │ Projector signal        │ Network
         │ (BlueFire RF)      │ (HDMI/DP)               │ (LAN/WiFi)
         ▼                    ▼                         ▼
    Engagement data       Visual environment        IOS → Tablets
    + sensor stream       rendered per-lane         + AAR output
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)

1. **Automatic Coaching — unmatched diagnostics:** No competitor in the market has a comparable sensor-to-doctrine diagnostic chain. The BlueFire sensor suite measuring trigger pull + buttstock pressure + cant + muzzle trace simultaneously is the gold standard for marksmanship training science.
2. **Broad weapon family — one platform:** 60 weapons, 15+ weapon types, small arms through mortars. VN-12.7MM-SIM is single-weapon focused.
3. **VBS3 collective training integration:** Full squad/platoon simulation on the same hardware as individual marksmanship training. Unique capability combining individual skill development with collective tactics.
4. **US institutional adoption:** EST II (Army) + ISMT (Marines) + Air Force Security Forces = proven at industrial scale across all US military branches. High credibility for international sales.
5. **Portable mil-spec configuration:** Can be deployed to forward operating bases or exercise locations — not permanently fixed.
6. **Courseware authoring:** Customer can create and load their own doctrine-linked training materials. VN-12.7MM-SIM would need to build equivalent capability.
7. **15-lane simultaneous training:** Throughput to qualify an entire company in one session. VN-12.7MM-SIM likely single or dual-lane only.
8. **Established global service network:** InVeris has service teams across US, Europe, Middle East, Asia-Pacific.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)

1. **High system cost:** Full 15-lane 100MIL system likely $500K–$2M+ range (N/A — not publicly available). VN-12.7MM-SIM targets a price point accessible to MOIT/VPAF procurement cycles.
2. **No tactical vehicle-mounted training:** FATS is a dismounted/static training system. Does not simulate the vehicle-mounted firing position (turret ring, pintle mount, vehicle motion) that is critical for M2 training on armored vehicles. Raydon UGT addresses this gap.
3. **Projector-based display limitation:** Projector systems require darkened rooms and specific screen distances. Cannot replicate actual weapon sight picture fidelity (shooter looks at screen, not through weapon sight). VR-based systems (Raydon UGT-I with HMD) solve this but InVeris FATS 100MIL uses projection.
4. **Recoil fidelity for HMG:** Gas-operated recoil in a static pedestal mount does not replicate the physics of a pintle-mounted M2 on a moving vehicle. Heavy weapon recoil impulse and vibration pattern differ significantly from a bench-rested simulator.
5. **US ITAR constraints:** Full FATS system with VBS3 may face ITAR export controls for Vietnam. VN-12.7MM-SIM is fully domestic.
6. **No standalone heavy weapon focus:** Heavy weapons are an add-on to a primarily small arms system. VN-12.7MM-SIM positions heavy weapons as the primary focus.
7. **Dependency on Bohemia Interactive (VBS3) licensing:** Third-party software dependency for collective training capability creates ongoing license cost and version dependency.

## 6. KEY TECHNOLOGIES TO LEARN FROM

1. **BlueFire sensor architecture — directly applicable to VN-12.7MM-SIM:**
   - Measure trigger force + buttstock pressure + cant + muzzle trace as a combined shot-process diagnostic package.
   - These are low-cost sensors (piezo pressure, MEMS IMU, strain gauge) — fully replicable with Vietnamese supply chain.
   - The key insight: diagnostic value is in the combination of sensors, not any individual one.

2. **Unified User Interface (UUI) with dark theme for low-light environments:**
   - VN-12.7MM-SIM IOS should adopt dark UI theme — standard for military night-operation readiness.
   - Common workflow across training modes reduces instructor training burden.

3. **Doctrine-linked automatic coaching:**
   - Link VPA/QĐNDVN (Vietnam People's Army) training standards (TC equivalents) to error flagging.
   - Auto-populate corrective content from VPA doctrinal manuals when specific errors are detected.
   - This creates a uniquely Vietnamese training product that competitors cannot easily replicate.

4. **Portable mil-spec case configuration:**
   - Design VN-12.7MM-SIM for transport from day one — modular cases, quick setup, vehicle-portable.
   - Target: 2-person, 30-minute setup.

5. **Per-shot 3D AAR with trajectory replay:**
   - Show exact trajectory from muzzle to impact in 3D — not just a 2D hit/miss overlay.
   - Allows instructor to diagnose whether miss was elevation error, windage, lead error, or flinch.

6. **Multi-round type selection per weapon:**
   - For M2 simulator: distinguish between API, tracer, and ball rounds in ballistics model.
   - For MK19/grenade: HE, smoke, illumination — affects training scenario design.

7. **System utilization reporting:**
   - Track time-in-training-mode, weapon type used, trainee ID, score trends — for VPA unit readiness reporting and G3 training management.

## 7. FTO RISK

- **BlueFire® technology: HIGH RISK — strongly patented**
  - InVeris holds multiple patents on wireless weapon simulator with integrated recoil and sensor diagnostics under the BlueFire brand.
  - Key patent families: sensor suite in weapon simulator; wireless transmission of shot data; automatic coaching correlation of sensor data to doctrinal errors.
  - InVeris patents page explicitly lists this as a core IP area: https://www.inveristraining.com/patents/
  - **Do NOT directly replicate:** Trigger force sensor + buttstock pressure + cant + trace as a combined wireless package without FTO search and design-around.
  - **Design-around approach for VN-12.7MM-SIM:** Use wired connection for initial version (no wireless patent exposure). Use piezo contact sensors for trigger detection only (established VN supply chain). Separate cant/trace measurement into a separately filed VN utility model to establish prior art.

- **VBS3 integration: MEDIUM risk**
  - VBS3 is licensed from Bohemia Interactive Simulations (Czech Republic). If VN-12.7MM-SIM attempts to integrate VBS-like collective training, it should use an alternative engine (Unity, Unreal, or Vietnamese-developed engine) to avoid license dependency.

- **Projector-based virtual marksmanship system: LOW risk**
  - Basic projection-screen marksmanship simulators are well-established prior art (1990s+). The fundamental architecture is in the public domain.
  - The specific combination of BlueFire sensors + automatic coaching + VBS3 is what is protected.

- **Overall verdict:** InVeris is the most IP-aggressive competitor in this space. Conduct a formal FTO search before finalizing VN-12.7MM-SIM sensor architecture. Priority search: US patents assigned to InVeris Training Solutions, Meggitt Training Systems, and FATS Inc.

## 8. SOURCES

1. [InVeris FATS 100MIL product page](https://www.inveristraining.com/virtual-training/military-virtual-tactical-small-arms-training-marksmanship/fats-100mil/)
2. [InVeris FATS 100MIL datasheet PDF (BWA)](https://www.inveristraining.com/wp-content/uploads/2025/01/fats100MIL-BWA.pdf)
3. [InVeris Heavy Weapon Simulators page](https://www.inveristraining.com/virtual-training/military-virtual-tactical-small-arms-training-marksmanship/heavy-weapon-simulators/)
4. [ADS Inc — InVeris FATS 100MIL product listing](https://equipment.adsinc.com/inveris-fats-100mil-virtual-training-system/ecomm-product-detail/401849/)
5. [Air Force Selects InVeris for Virtual Training Systems — InVeris press release](https://www.inveristraining.com/air-force-security-forces-center-chooses-inveris-as-the-preferred-manufacturer-of-choice-for-virtual-simulations-training-systems/)
6. [DSA 2022: InVeris Training Solutions demonstrates FATS 100MIL — Army Recognition, 2022](https://armyrecognition.com/news/army-news/2022/dsa-2022-inveris-training-solutions-from-us-demonstrates-fats-100mil-virtual-training-system)
7. [InVeris Mortar Simulator product page](https://www.inveristraining.com/virtual-training/military-virtual-tactical-small-arms-training-marksmanship/heavy-weapon-simulators/mortar-simulator/)
8. [InVeris C16 AGL Simulator product page](https://www.inveristraining.com/virtual-training/defense-virtual-tactical-small-arms-training-marksmanship/heavy-weapon-simulators/c16-simulator/)
9. [InVeris Patents page](https://www.inveristraining.com/patents/)
10. [US Army — Soldiers train with new .50-caliber machine gun simulator (Raydon IGT, context)](https://www.army.mil/article/45510/Soldiers_train_with_new__50_caliber_machine_gun_simulator)
