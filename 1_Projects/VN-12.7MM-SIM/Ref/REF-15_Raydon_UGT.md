---
created: 2026-03-23
type: competitor-reverse-engineering
product: "UGT-I / UGT-C — Unstabilized Gunnery Trainer (Individual / Crew)"
company: "Raydon Corporation"
country: "USA"
status: active
---

# REF-15: Raydon Corporation — UGT-I / UGT-C Family of Trainers — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW

- **Company:** Raydon Corporation
- **Headquarters:** Port Orange, Florida, USA (near Daytona Beach)
- **Product family:** UGT (Unstabilized Gunnery Trainer) — two variants:
  - **UGT-I (Individual):** Individual gunner trainer (1 shooter per system)
  - **UGT-C (Crew):** Crew and collective convoy training (scales from crew to platoon)
- **Country:** USA
- **Target market:** US Army (Active + National Guard + Reserve) for garrison-based mounted machine gun training. International markets via US FMS (Foreign Military Sales) channel.
- **Weapons simulated:**
  - M2 .50 caliber Heavy Machine Gun (primary)
  - MK19 40mm automatic grenade launcher
  - M240B 7.62mm medium machine gun
  - All weapons in pintle-mounted / ring-mount vehicle configuration
- **Naval/Land/Both:** Land only (vehicle-mounted weapons)
- **In service since:**
  - IGT (.50 cal version, pre-UGT name): fielded ~2010 (first unit: 27th Brigade Combat Team, New York Army National Guard, September 2010)
  - UGT-I branded product: ~2015 onward
  - UGT-C (Crew): subsequent generation
  - D-BOX haptic upgrade: demonstrated at I/ITSEC ~2018
- **Known customers:**
  - US Army National Guard (multiple states confirmed: New York ARNG documented; Tennessee ARNG confirmed via contract solicitation)
  - US Army Active Component (Warrior Training Center, Fort Benning — training support role confirmed)
  - US Army approved simulator: confirmed "Army-approved simulator" status — critical for Gate-To-Live-Fire qualification
  - $20M VCOT (Virtual Convoy Operations Trainer) contract for US National Guard: 10 new systems + upgrade of 3 existing

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System

**Architecture: Physical haptic recoil — the defining technical differentiator of Raydon UGT vs. competitors**

This is the closest competitor to VN-12.7MM-SIM in recoil approach.

- **Base UGT-I recoil:** Physical recoil mechanism integrated into the simulated weapon mount. Described as "heavy, high-recoil, mounted gun." System "mimics everything about the experience of firing the weapons, including the recoil, vibrations, and sounds of the real thing."
- **D-BOX haptic upgrade (UGT-I retrofit):** D-BOX motion haptic actuators integrated into the weapon platform or mounting system. D-BOX provides programmable haptic motion synchronized to simulated firing events.
  - D-BOX selected specifically for: "high performance, reliability, and ease of integration"
  - Describes as providing "weapon recoil and accurate ballistics" in terms of cognitive and tactile fidelity
  - D-BOX G5 technology: multi-axis haptic motion (heave, pitch, roll, yaw) — enables not just recoil impulse but also vehicle movement simulation (traversing terrain, IED blast effects)
- **Recoil fidelity objective:** System must provide sufficient haptic feedback to:
  - Train gunner stabilization technique on moving vehicle
  - Create immersive "cognitive and tactile fidelity" — the stated design goal
  - Bridge VR and reality — D-BOX cited as "a critical bridge between VR and reality"
- **Recoil mechanism type:** Electromechanical actuator (D-BOX G5 linear actuators + rotary elements). NOT gas-operated like InVeris BlueFire.
- **Key insight vs. VN-12.7MM-SIM:** Raydon uses D-BOX commercial motion platform technology. This is a different and potentially more sophisticated approach than gas-impulse recoil alone — it adds vehicle motion simulation (pitch/roll of a moving vehicle) on top of weapon firing impulse. This is a higher-fidelity target state for VN-12.7MM-SIM's roadmap.

### 2.2 Visual System

- **Display type: Head-Mounted Display (HMD)** — fundamentally different from InVeris FATS projection approach
- **HMD model: HTC Vive Pro** (confirmed for the D-BOX upgraded / commercial adaptation version)
  - HTC Vive Pro specifications: dual OLED displays, 1440×1600 per eye (2880×1600 combined), 110° FoV, 90Hz refresh rate, integrated spatial audio
  - SteamVR tracking (Lighthouse base stations) for head position and orientation tracking
- **Earlier/base system:** Head-Mounted Display confirmed from 2010 Army.mil article — "The gunner has to use a complex, but efficient system of switches and controls to maneuver the weapon, sight in using the head mounted display." HMD was present from initial IGT fielding.
- **Key visual capability:**
  - 360° full-surround battlefield view — soldier can look in any direction, including rear hemisphere (critical for situational awareness training)
  - Night vision and thermal sight simulation modes (confirmed from 2010 Army article: "changing to night vision or thermal sight")
  - Target types: infantry, trucks, armored vehicles, helicopters, civilians
- **Spectator display:** Separate display screen for observers/instructors to see what the gunner is seeing in HMD. Mentioned in D-BOX/arcade adaptation — likely carried into military system.
- **Visual fidelity:** "Higher resolution graphics" upgrade path confirmed (system evolved to HTC Vive Pro from earlier lower-res HMD).
- **Field of view:** Full 360° (no limitation of projection screen — HMD rotates with head)

### 2.3 Ballistic Model

- **Standard compliance:** TC 3-20.31 (Training and Qualification, Crew) — US Army doctrinal standard for mounted machine gun gunnery tables
- **Training tables supported:**
  - Basic familiarization (Table I equivalent)
  - Combat Service Support gunnery tables
  - Heavy Brigade Combat Team gunnery tables
  - Full matrix progression from Tables I through X (estimated)
- **Engagement types:**
  - Ground targets: infantry, wheeled vehicles, armored vehicles at various ranges
  - Air targets: helicopters
  - Civilian discrimination scenarios (no-shoot targets)
  - Day, night (NV), and thermal signature simulation
- **Ballistic computation:** N/A — specific ballistic model not publicly detailed. Assumed physics-based with gravity drop, tracer burn modeling, lead computation for moving targets.
- **Voice recognition integration:** System has voice recognition — gunner can verbally command target acquisition, sight changes (NV/thermal/day), and vehicle stop/maneuver. "Computer recognizes key words and acts accordingly."
- **Gate-to-Live-Fire:** System generates qualification data accepted by US Army as a readiness gate before progressing to actual live fire ranges.

### 2.4 Tracking/Sensing

- **Weapon orientation tracking:** Physical weapon (M2 replica) mounted on a stand with traverse and elevation mechanics. Gunner physically traverses and elevates the weapon — sensors capture position.
- **Head tracking:** HTC Vive Pro uses Lighthouse spatial tracking (infrared base stations + photodiodes on headset) for sub-millimeter precision head position and orientation at 90Hz update rate.
- **Voice recognition:** Microphone integrated into HMD. System recognizes command vocabulary in English (at minimum). First-of-kind in this weapon class at time of introduction (2010).
- **Trigger/fire control detection:** Physical trigger on M2 replica. Sensor detects trigger pull and transmits to simulation engine.
- **Weapon fire controls:** "Complex but efficient system of switches and controls" on the weapon mount — all physically replicated and sensed. Includes:
  - Traverse and elevation controls
  - Headspace and timing adjustment (M2-specific procedure)
  - Night vision / thermal sight selection
  - Vehicle stop command
- **D-BOX haptic feedback loop:** D-BOX actuators not only provide output (recoil) but can sense load and adjust force — two-way interaction for more realistic weapon behavior under different vehicle motion profiles.
- **Position tracking precision:** HTC Vive Pro: < 1mm translational, < 0.1° rotational (manufacturer spec)

### 2.5 Instructor Station (IOS)

- **Computer training console:** Described as a dedicated computer training console (not a commercial laptop).
- **Three interactive programs of instruction (pre-loaded):**
  1. Basic .50 caliber — new user familiarization with system and weapon capabilities
  2. Advanced 1 — matrix progression for Combat Service Support units
  3. Advanced 3 — matrix progression for Heavy Brigade Combat Team gunnery tables
- **Adaptive session tracking:** "Computer remembers where the soldier left off and will adjust the tutorials based on the amount of time since the last class" — adaptive spaced-repetition scheduling.
- **Qualification tracking:** Generates Gate-To-Live-Fire readiness certification data per individual soldier.
- **Training time requirement:** 60–80 hours to complete full tutorial and hands-on training curriculum.
- **Spectator display:** Separate screen showing gunner HMD view — enables instructor to monitor and coach without interfering with the gunner's HMD experience.
- **IOS detail:** N/A — full IOS interface specifications not publicly available beyond the above.

### 2.6 Physical Specifications

- **System form factor:** Freestanding pedestal/console unit with:
  - Simulated M2 .50 cal weapon body mounted on a stand (replicating vehicle ring mount / pintle mount configuration)
  - Computer training console integrated or adjacent
  - HMD (HTC Vive Pro or equivalent) for visual display
  - D-BOX haptic actuators in base platform (upgraded version)
  - Lighthouse tracking base stations (2 units, tripod-mounted)
- **Weapon replica:** High-fidelity M2 replica with correct weight, fire controls, and operating procedures. Described as "functionally accurate simulated weapon."
- **Weight:** N/A — not publicly available. Estimated heavy (the D-BOX case study describes the weapon as "heavy" explicitly — designed for training upper body and grip endurance as well as technique).
- **Footprint:** Approximately 2m × 2m (estimated from images; N/A — not publicly available)
- **Power:** N/A — not publicly available (standard 110V US; D-BOX actuators require low-voltage DC from controller)
- **Portability:** Transportable (National Guard units move these between armories). Not a permanently fixed installation.
- **Scalability:** UGT-I → UGT-C: additional stations, network interconnection for crew training (gunner + TC + loader simulation). Platoon-level convoy training via VCOT (Virtual Convoy Operations Trainer) — larger networked system.

### 2.7 AI / Adaptive Features

- **Adaptive training progression:** Most significant AI feature. System:
  - Tracks individual soldier progress across sessions
  - Records last training table completed and time elapsed since
  - Adjusts tutorial presentation based on time-since-last-training (spaced repetition decay model)
  - Progresses soldier through difficulty tables automatically
- **Voice recognition AI:** Natural language command processing for tactical commands. First generation (2010) recognized "key words" — likely improved in subsequent versions.
- **Target AI:** Enemy targets include infantry, vehicles, helicopters — likely AI-controlled target behaviors (approach, maneuver, cover). Civilian targets require discrimination (no-shoot decision making).
- **OPFOR variety:** Multiple enemy target types from side and rear of vehicle — 360° situational awareness training against unpredictable OPFOR positioning.
- **No explicitly described Automatic Coaching AI** (unlike InVeris) — Raydon's coaching appears instructor-driven rather than automated sensor-based diagnostics.

### 2.8 Crew Training

- **UGT-I (Individual):** Single gunner. Full M2/MK19/M240B operation: traverse, elevation, fire controls, sighting, target engagement, target discrimination.
- **UGT-C (Crew):** Scales to crew and platoon. Linked with VCOT (Virtual Convoy Operations Trainer) for full vehicle crew training.
- **Crew roles trained:** Gunner (primary in UGT-I). Commander + Gunner + Driver in UGT-C/VCOT configuration.
- **Convoy operations:** Multiple vehicle convoy with realistic vehicle control, route planning, IED response, ambush response — the VCOT extension of the UGT platform.
- **Gate-to-Live-Fire:** System provides Army-approved qualification data that certifies readiness for actual live fire gunnery ranges. This is the key institutional value — reduces range time and ammunition cost while improving trainee preparation.
- **Training tables (TC 3-20.31):** Full gunnery qualification tables from Table I (basic) through the Heavy Brigade Combat Team qualification matrix.

---

## 3. ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────────┐
│           RAYDON UGT-I — SYSTEM ARCHITECTURE                   │
│           (with D-BOX haptic upgrade)                          │
├──────────────────┬──────────────────┬──────────────────────────┤
│  WEAPON LAYER    │  SENSING LAYER   │  COMPUTING LAYER         │
│                  │                  │                          │
│ [M2 replica]    │ Trigger sensor   │ Training computer        │
│  - Full controls │ Traverse encoder │  + TC 3-20.31 model      │
│  - Correct weight│ Elevation encoder│  + Voice recognition AI  │
│  - Firing grip   │ Fire controls    │  + Adaptive session mgr  │
│                  │                  │  + Ballistics engine     │
│ [D-BOX actuators]│ HMD tracking     │                          │
│  - Heave/pitch   │ (HTC Vive Pro    │ IOS console              │
│  - Roll/yaw      │  Lighthouse)     │  + Session tracking      │
│  - Recoil impulse│                  │  + Gate-to-Live-Fire     │
│  - Vehicle motion│ Microphone       │    qualification data    │
│    simulation    │ (voice recog.)   │                          │
│                  │                  │ Spectator display        │
│ [HTC Vive Pro]   │                  │ (mirrors HMD view)       │
│  - 360° visual   │                  │                          │
│  - NV/thermal    │                  │                          │
│  - Day/night     │                  │                          │
└──────────────────┴──────────────────┴──────────────────────────┘
           UGT-C extension: network link → multiple UGT-I stations
           VCOT extension: full vehicle simulation platform
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)

1. **HMD-based 360° visual — correct shooting position:** Gunner looks through the HMD sight picture in correct head position (behind weapon), not at a projector screen. This is the correct training stimulus for the actual weapon employment position. VN-12.7MM-SIM must address this if using screen-based display.
2. **D-BOX haptic recoil + vehicle motion combined:** Not just weapon recoil but the entire moving vehicle experience (pitch over terrain, abrupt stops, IED blast) — training the stabilization skill against a moving platform. This is the critical differentiator for mounted weapon training and the capability VN-12.7MM-SIM currently lacks in its design.
3. **Voice recognition integration:** Gunner verbally calls commands (sight changes, target identification, vehicle halt) — trains communication procedures simultaneously with gunnery procedures. No competitor in the market has this at this weapon class level.
4. **Army-approved Gate-To-Live-Fire:** US Army institutional certification enables the system to replace initial live fire training events. Saves ammunition and range costs. VN-12.7MM-SIM needs equivalent VPA endorsement.
5. **Adaptive spaced-repetition training schedule:** Automatically manages individual soldier proficiency decay and refresher scheduling — reduces administrative burden on NCO training managers.
6. **Night vision and thermal sight simulation:** Full day/NVG/FLIR mode switching trained in the same session — critical for modern warfighter certification but expensive to replicate.
7. **Civilian discrimination scenarios:** Rules of engagement training integrated with gunnery — not just "shoot everything that moves." Increasingly required by modern military training doctrine.
8. **30+ years company experience:** Raydon has been building military simulation since the 1990s — deep institutional knowledge in US Army requirements and procurement processes.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)

1. **US-only ecosystem:** No known international deployments outside US military. No presence in Vietnam or Southeast Asia. Export via FMS channel would be extremely slow (years) and may be blocked for Vietnam due to ITAR restrictions.
2. **High per-unit cost:** D-BOX haptic systems + HTC Vive Pro HMDs + commercial military-grade computing = estimated $150K–$300K+ per station (N/A — not publicly available). VN-12.7MM-SIM must be dramatically lower cost to be viable for MOIT procurement.
3. **HTC Vive Pro HMD dependency:** Commercial off-the-shelf HMD creates product lifecycle risk (component availability, software updates, HMD generation transition). When Vive Pro is discontinued, full headset replacement cycle required.
4. **Limited weapon breadth:** Three weapons only (M2, MK19, M240B). Does not support the breadth of weapon types that InVeris FATS provides. VN-12.7MM-SIM has opportunity to include DShK variants and Chinese-origin weapons common in VPA inventory.
5. **No crowd-sourced marksmanship diagnostics:** Raydon does not have InVeris-style Automatic Coaching with sensor diagnostics. Instructor coaching is manual. This is a gap that VN-12.7MM-SIM could address with a lower-cost piezo sensor implementation.
6. **No mortar or indirect fire simulation:** UGT-I family is strictly direct-fire, vehicle-mounted weapons. No ability to train mortars or artillery. VN-12.7MM-SIM's scope is narrower in this regard (correct focus).
7. **Small company risk:** Raydon is a small Florida defense contractor — supply chain risk for parts, field support, and long-term product maintenance for a Vietnamese customer would be very high. VN-12.7MM-SIM's domestic development eliminates this risk.
8. **Projector-based option missing:** No screen/projector mode available — only HMD. Some training environments (especially collective IOS observation) benefit from a shared screen display that all can see simultaneously.

## 6. KEY TECHNOLOGIES TO LEARN FROM

1. **D-BOX haptic recoil architecture — highest priority for VN-12.7MM-SIM roadmap:**
   - D-BOX G5 actuators are commercially available (non-ITAR, civilian technology).
   - The Raydon integration proves this architecture is viable and Army-accepted.
   - For VN-12.7MM-SIM: investigate D-BOX or equivalent multi-axis actuator (Vietnamese supplier: ACT Motion, or Chinese equivalent) for Phase 2 recoil enhancement.
   - Key parameters to specify: peak force (N), stroke (mm), frequency response (Hz), latency (ms) — these determine recoil fidelity ceiling.

2. **HMD-based visual display for weapon sight picture fidelity:**
   - HMD allows gunner to be in correct physical position behind weapon and look through simulated sight — not possible with projector.
   - For VN-12.7MM-SIM: evaluate HMD (Meta Quest Pro, HTC Vive Pro 2, or equivalent) vs. projector. HMD is the correct architecture for mounted weapon training. Projector is adequate for dismounted/bench training.
   - Consider: HMD for primary gunner station + spectator display for IOS/instructor use simultaneously.

3. **360° situational awareness training:**
   - HMD allows threats from any direction — teaches gunner not to fixate on primary arc.
   - Design VN-12.7MM-SIM scenarios where threats appear from 360° — this skill is untrained by fixed-screen systems.

4. **Voice recognition for tactical procedure training:**
   - Gunner verbally calls out: "Driver, stop!" / "Target, right flank, 400m!" / "Cease fire!" simultaneously with physical gunnery actions.
   - Vietnamese-language voice recognition for VPA tactical procedures — this would be a unique differentiator for VN-12.7MM-SIM vs. all foreign competitors.
   - Technology approach: use existing Vietnamese ASR (Google ASR API or local Viettel AI voice engine) with command vocabulary restriction for real-time performance.

5. **Adaptive training progression system:**
   - Track individual soldier performance across sessions.
   - Implement spaced repetition algorithm (SM-2 or similar) to schedule refresher training automatically.
   - Generate readiness report per soldier for unit commander's G3 training management.

6. **Night vision / thermal sight simulation modes:**
   - Essential for modern combat readiness — VPA units increasingly equipped with NV devices.
   - NV mode: green-monochrome image with reduced resolution and gain simulation.
   - Thermal mode: false-color or white-hot/black-hot palette based on target emissivity model.
   - Both modes achievable within same VR engine at low additional development cost.

7. **Gate-to-Live-Fire qualification data generation:**
   - VN-12.7MM-SIM must produce output that can be recognized by VPA training commands as a live fire readiness gate.
   - Design the qualification report format to match VPA/BQP training standard documentation from day one.
   - Pilot this with a VPA unit before product launch — institutional acceptance is the bottleneck, not technology.

## 7. FTO RISK

- **D-BOX technology: LOW risk for VN-12.7MM-SIM**
  - D-BOX actuators are commercial products. Raydon purchases and integrates them — the D-BOX IP belongs to D-BOX Technologies Inc. (Canada), not Raydon.
  - Using D-BOX or equivalent motion actuators in VN-12.7MM-SIM does not infringe Raydon IP.
  - Raydon likely holds patents on the specific integration design (actuator placement, synchronization with weapon firing signal, vehicle motion profile generation) — design-around by using a different mechanical integration approach.

- **Raydon patent: MEDIUM risk for specific implementations**
  - Raydon holds a patent on "Vehicle Crew Training System" (US patent published ~2015, freepatentsonline.com/y2015/0056577.html). This covers the vehicle + weapon + VR integration approach.
  - Key claims likely cover: vehicle station + simulated weapon + networked VR environment + crew role assignment.
  - VN-12.7MM-SIM as a standalone weapon trainer (not vehicle crew trainer) is likely outside the main claims — but review required.
  - Voice recognition + weapon simulation combination may be claimed. Check US patent database.

- **HMD + weapon simulator combination: LOW risk**
  - Generic combination of off-the-shelf HMD with a weapon replica is not patentable in its basic form. Many implementations exist in the public domain.
  - The specific Raydon innovations are in the integration details — design-around is straightforward.

- **Overall verdict:** Raydon is a small company with less IP depth than InVeris. Primary FTO concern is the vehicle crew training system patent and the D-BOX integration approach. Commission FTO search on US patent families assigned to Raydon Corporation before finalizing VN-12.7MM-SIM Phase 3 embodiment design.

## 8. SOURCES

1. [US Army — Soldiers train with new .50-caliber machine gun simulator (IGT/UGT)](https://www.army.mil/article/45510/Soldiers_train_with_new__50_caliber_machine_gun_simulator)
2. [US Army — New York Army National Guard Soldiers Training With New .50 Caliber Machine Gun Simulator](https://www.army.mil/article/45345/new_york_army_national_guard_soldiers_training_with_new_50_caliber_machinegun_simulator)
3. [D-BOX Case Studies — Raydon Training Solutions: VR Gunner Trainer UGT-I Retrofit](https://www.d-box.com/en/case-studies/raydon)
4. [Raydon UGT brochure PDF (v1.3, 2018)](http://www.raydon.com/wp-content/uploads/2020/07/FINAL-UGT-v1.3-050818-1.pdf) — URL accessible but PDF content unavailable at time of analysis
5. [LinkedIn — Unstabilized Gunnery Trainer Crew (UGT-C) product page](https://www.linkedin.com/products/raydon-corporation-unstabilized-gunnery-trainer-crew/)
6. [Raydon secures $20 million VCOT contract — Shephard Media](https://www.shephardmedia.com/news/training-simulation/raydon-secures-20-million-vcot-contract/)
7. [Raydon Corporation — Army Guide profile](http://www.army-guide.com/eng/firm3511.html)
8. [Tabletop trainer — Army Guide product listing](http://www.army-guide.com/eng/product2948.html)
9. [Raydon Corporation vehicle crew training system patent](https://www.freepatentsonline.com/y2015/0056577.html)
10. [I/ITSEC 2017: Armoured Vehicle Training Update — Monch Verlagsgesellschaft](https://www.monch.com/mpg/news/37-iitsec17/2335-afv-train.html)
11. [Thomas Net — Army Weapons Training Gets Virtual Assist](https://www.thomasnet.com/insights/army-weapons-training-gets-virtual-assist/)
12. [TN ARNG — Raydon Virtual Trainer Maintenance contract solicitation](https://insurancenewsnet.com/oarticle/Amendment-to-Combined-Synopsis-Solicitation-D-TN-ARNG-Raydon-Virtual-Trainer-a-551640)
