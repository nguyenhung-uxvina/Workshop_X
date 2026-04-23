---
created: 2026-03-23
type: competitor-reverse-engineering
product: "MILO Range — Crew Served Weapons Simulation (CSWS / LRTI)"
company: "FAAC Incorporated (Arotech)"
country: "USA"
status: active
---

# REF-04: MILO / FAAC — Crew Served Weapons Simulation — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW
- **Company:** FAAC Incorporated (brand: MILO Range) — subsidiary of Arotech Corporation; HQ: Ann Arbor, Michigan, USA. Tel: 866-311-5361. GSA Contract: GS-00F-332CA
- **Product name:** MILO Range — Crew Served Weapons Simulation Training / Long Range Target Interdiction (LRTI) application
- **Country:** USA
- **Target market:** US Military (Army, Navy, Air Force, Marines), international armed forces; also law enforcement. Primary military application: heavy weapons proficiency without range access or ammunition expenditure
- **Weapons simulated:** M249 (SAW), M240B, M2 / M2HB (.50 cal); LRTI application covers extended-range engagements. Broader MILO family also covers M17/M18, M4A1, M320, MK19
- **Naval / Land / Both:** Both — US Pacific Air Force (PACAF) shore-based, naval shore-based, land-based garrison. Not reported as shipboard-integrated (shore trainer only)
- **In service since:** MILO simulator platform launched 2004 (acronym: Multiple Interactive Learning Objectives); ACME M2 GAR integration into MILO Range Theater reported 2018; LRTI application developed with US Navy SEALs (date not publicly specified, ~2015-2018)
- **Known customers:**
  - US Pacific Air Forces (PACAF) — MILO Range Theater systems with ACME M2 (2018 contract)
  - US Navy — LRTI application development partner (US Navy SEALs collaboration)
  - US Naval Expeditionary Combat Command (NECC) — via MILO Range integrations
  - Multiple law enforcement agencies (LE market primary revenue base)
  - International customers confirmed (specific country names not publicly listed)

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System
- **Type:** All-electric (GAR® — Gun Active Recoil system, supplied by ACME Worldwide Enterprises as integrated partner)
- **Mechanism:** Patented all-electric Gun Active Recoil (GAR®) cradle. Replica weapon mounts on an offboard-electronics-driven recoil cradle. The GAR® system uses electric actuators within the weapon mounting cradle to produce full-force, full-rate-of-fire recoil impulse. Does NOT use blanks or pneumatic charges — mains-powered (plug-into-wall). Variable torque system capable of simulating wind-loading forces on the weapon in addition to recoil
- **Force output:** "Full force" — claimed equivalent to actual M2 recoil force. Specific Newton/lbs value N/A — not publicly available. ACME states the system ensures "gunners adapt to the full recoil force to keep the weapon on target"
- **Rate of fire simulation:** Full rate of fire up to 3,000 rpm (GAR® platform specification); M2 real cyclic rate 450-600 rpm — system claims to match actual weapon ROF
- **Fidelity level:** Full-force claimed (100% intent); specific % vs real weapon not published
- **Options on weapon platform:** Muzzle flash, jammed round LED, replica laser
- **Insertable malfunctions:** Misfire, jam, runaway, cook-off, sluggish fire
- **Patent protection:** GAR® is patented by ACME Worldwide Enterprises (all-electric recoil cradle system); specific patent numbers N/A — not publicly available
- **Recoil alternatives in MILO ecosystem:**
  - Drop-in Wireless Recoil Kits (WRK) using CO2 or High-Pressure Air (HPA) — fits inside live weapons for lighter weapon classes
  - Dry-fire laser inserts (inert, pin-strike activation) — lowest cost option
  - For M2: ACME GAR® cradle is the recommended integration (full-force option)

### 2.2 Visual System
- **Display type:** Laser projection screens (HD projectors onto laser-reactive screens for hit detection)
- **Configurations:**
  - Single-screen (Classic / Advanced / Pro): minimum room 12 ft × 15 ft × 8-9 ft height
  - Theater 180: 3-screen, 180-degree FOV, minimum room 23 ft × 27 ft × 9 ft height
  - Theater 300: 5-screen, 300-degree FOV (fully immersive), minimum room 23 ft × 27 ft × 9 ft height
- **Resolution:** Full HD on each screen — up to 1920 × 1080 per screen
- **Field of view:**
  - Single screen: N/A — not specified
  - Theater 180: ~180 degrees horizontal
  - Theater 300: ~300 degrees horizontal (5-screen surround)
- **Refresh rate:** N/A — not publicly specified
- **Rendering engine:** MILO GraphX CGI (proprietary computer-generated imagery); also supports America's Army, Unity, and VBS2 game engine platforms
- **Environmental simulation:** Multiple scenery and environmental conditions — every locale, weather conditions, day/night, lowlight/flashlight mode
- **Green Screen capability:** Real-time video processing for custom localized content

### 2.3 Ballistic Model
- **Type:** Physics-based validated model (MILO proprietary)
- **Validation standard:** Validated against ARDEC (Armament Research, Development and Engineering Center) standards
- **Accuracy:**
  - Direct-fire weapons (M17/M18, M2A1, M4A1, M249, M240L, M240B): within 0.05 mils of ARDEC
  - Indirect-fire weapons (M320, MK19): within 0.28 mils of ARDEC
- **DOF:** N/A — not publicly specified
- **Environmental factors modeled:** Distance, wind (variable torque on GAR® cradle), day/night, weather conditions. LRTI application states "projectiles behave accurately to reflect the distance, even when 15 feet away from a screen in simulation"
- **LRTI application:** "Full representational fidelity" for long-range crew-served engagements; developed in collaboration with US Navy SEALs; laser precision tracking

### 2.4 Tracking / Sensing
- **Weapon position sensing:** Full suite of I/O sensors on ACME M2 replica — trigger position, replica bolt position, top cover position, ammunition present, charge handle position
- **Aim point detection:** Laser hit detection on projection screens
- **Laser detection lanes:** 8-lane laser hit detection (Theater 180 and 300 configurations)
- **Accuracy:** Laser precision (quantitative spec N/A — not publicly available)
- **Trainee Action Capture (TAC):** Color video + digital audio capture of trainee; replay in normal, slow-motion, frame-by-frame; picture-in-picture or scenario-only display

### 2.5 Instructor Station (IOS)
- **Operation:** Single instructor operates entire system via touchscreen monitor or wireless tablet
- **Simultaneous trainees supported:** Up to 16 trainees
- **Scenario control:** Real-time scenario manipulation; can increase/decrease intensity before or during scenario
- **Malfunctions:** Insertable malfunctions on demand (misfire, jam, runaway, cook-off, sluggish fire)
- **Scenario editor:** MILO Course Designer — intuitive GUI for editing/producing interactive training content (video, graphics, text, slides, questions); included with Range Pro and Theater; add-on for other models
- **Content library:** Hundreds of HD and SD interactive branching scenarios; pre-loaded GraphX applications (Firing Range, Turning Targets, Dueling Tree, Poppers, Shoot House, Plates, Running Man, Hostages, Dynamic Room Breaches, etc.)
- **AAR features:**
  - Trainee Action Capture (TAC): video + audio of trainee during session
  - Frame-by-frame replay, slow-motion, picture-in-picture
  - Archive/export TAC video to external storage
  - KnowledgeBase: present policy/procedure documentation on screen during debrief
  - Advanced logging and debriefing tools
- **Custom content:** MILO Studios provides custom scenario creation service
- **Connectivity:** Stand-alone operation (no internet required); optional Wi-Fi or hardline for remote updates

### 2.6 Physical Specifications
- **MILO Range Theater system dimensions:**
  - Theater 180 (3-screen): minimum room 23 ft (7.0 m) × 27 ft (8.2 m), 9 ft (2.7 m) ceiling
  - Theater 300 (5-screen): same minimum room dimensions
  - Single-screen systems: minimum room 12 ft (3.7 m) × 15 ft (4.6 m), 8-9 ft (2.4-2.7 m) ceiling
- **Weight:** N/A — not publicly specified
- **Power requirements:** Mains-powered (ACME GAR® "plugs into wall"); specific voltage/amperage N/A
- **Operating temperature:** N/A — not publicly specified
- **Starting price:** US$15,745 (entry-level single-screen systems); crew-served / Theater systems significantly higher (no public pricing for military-grade configurations)
- **Delivery time:** 45-60 days ARO (after receipt of order); many within 30 days

### 2.7 AI / Adaptive Features
- **Scenario intensity control:** Instructor can increase/decrease scenario difficulty in real-time
- **Skill-level adaptation:** All GraphX applications have settings to accommodate shooter skill level
- **Adaptive features beyond manual instructor control:** N/A — not publicly described

### 2.8 Crew Training
- **Individual / Team / Both:** Both — Theater configurations support up to 16 simultaneous trainees; Theater 300 enables true 300-degree multi-threat response training
- **Positions simulated:** Gunner (primary); instructor evaluates gunner effectiveness; supports CQB / CQM scenarios
- **Training tasks covered:** Loading, arming, firing, malfunction clearance (jam, misfire, runaway, cook-off, sluggish fire), target engagement, trigger control, burst-fire discipline

---

## 3. ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MILO Range Theater System                       │
│                                                                     │
│  ┌─────────────────┐    ┌──────────────────────────────────────┐   │
│  │  Instructor     │    │        Projection Area               │   │
│  │  Station        │    │  ┌──────┐  ┌──────┐  ┌──────┐       │   │
│  │  (Touchscreen   │◄───┤  │Screen│  │Screen│  │Screen│ (×5   │   │
│  │   or Tablet)    │    │  │  1   │  │  2   │  │  3   │  T300)│   │
│  │                 │    │  └──────┘  └──────┘  └──────┘       │   │
│  │ MILO Software   │    │    HD Projectors + Laser Screens     │   │
│  │ (GraphX CGI /   │    │    8-Lane Laser Hit Detection        │   │
│  │  LRTI / VBS2 /  │    └──────────────────────────────────────┘   │
│  │  Unity)         │                                               │
│  │                 │    ┌──────────────────────────────────────┐   │
│  │ Electronics     │    │     ACME M2 GAR® Weapon Station      │   │
│  │ Chassis         │◄───┤  ┌─────────────────────────────┐    │   │
│  │ (Power + Drive) │    │  │  ACME M2 Replica Weapon      │    │   │
│  │                 │    │  │  (Sensors: trigger, bolt,    │    │   │
│  └─────────────────┘    │  │   top cover, charge handle,  │    │   │
│                         │  │   ammo present)              │    │   │
│  ┌─────────────────┐    │  └─────────────────────────────┘    │   │
│  │  Surround Sound │    │  ┌─────────────────────────────┐    │   │
│  │  System         │    │  │  GAR® Recoil Cradle          │    │   │
│  └─────────────────┘    │  │  (All-electric, full-force,  │    │   │
│                         │  │   full-rate-of-fire, mains-  │    │   │
│  ┌─────────────────┐    │  │   powered, patented)         │    │   │
│  │  TAC Camera     │    │  └─────────────────────────────┘    │   │
│  │  (Trainee       │    │  ┌─────────────────────────────┐    │   │
│  │   Action        │    │  │  Mount (tripod / vehicle /   │    │   │
│  │   Capture)      │    │  │   aircraft cradle)           │    │   │
│  └─────────────────┘    │  └─────────────────────────────┘    │   │
│                         └──────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘

Data flow: Weapon sensors → Electronics Chassis → MILO Software →
           Visual feedback on screens + IOS display
           Laser from weapon → Screen → Hit detection → Ballistic scoring
           TAC Camera → IOS → AAR replay
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)
- **Validated ballistics to military standard:** ARDEC-validated to within 0.05 mils for M2A1 — extremely high scientific credibility and procurement acceptance
- **ACME GAR® full-force recoil:** True full-force, full-rate-of-fire electric recoil — no pneumatics, no consumables beyond electricity; proven operationally since ~2005
- **Mature software ecosystem:** Hundreds of preloaded scenarios, Course Designer, LRTI application, VBS2/Unity/America's Army support
- **Scalable configurations:** Single screen to 300-degree Theater; modular upgrade path
- **Multi-trainee capacity:** Up to 16 simultaneous trainees in Theater configuration
- **US Navy SEALs co-development of LRTI:** High credibility training application with SOF pedigree
- **GSA contract:** Streamlined US government procurement (GS-00F-332CA)
- **Established international market:** Ships to international customers with local partners
- **Stand-alone operation:** No network required — relevant for secure/classified environments
- **TAC feature:** Full video capture and replay for detailed AAR — superior to most competitors

## 5. WEAKNESSES (vs VN-12.7MM-SIM)
- **No shipboard-integrated system:** MILO is a shore-based/garrison trainer — does not replicate shipboard environment (motion, sea state, naval gunnery fire control)
- **ACME GAR® is offboard / mains-only:** The recoil cradle requires external electronics chassis and wall power — not portable, cannot be deployed to field or aboard ship
- **High cost and footprint:** Theater 300 requires 23 ft × 27 ft room; not suitable for compact shipboard trainer rooms on Vietnamese Navy vessels
- **No naval targeting integration:** No link to FCS (Fire Control System), radar, or FLIR systems — standalone marksmanship trainer only
- **ACME GAR® not a drop-in:** Full cradle system — cannot convert an existing weapon; requires purpose-built integration
- **Western procurement only:** GSA/DoD supply chain; not accessible via Vietnamese defense procurement or domestic manufacturing
- **Software proprietary and US-export-controlled:** MILO software likely ITAR-controlled; integration with non-US platforms problematic
- **Theater 300 cost:** Entry-level $15,745 (small single-screen LE); military Theater systems likely $200K–$500K+ (not publicly priced)

## 6. KEY TECHNOLOGIES TO LEARN FROM
- **ARDEC-validated ballistics:** VN-12.7MM-SIM should establish Vietnamese equivalent validation standard (QCVN or TCVN) and document the ballistic model against known reference data
- **Full-force, full-ROF recoil as training requirement:** MILO/ACME prove that "gaming" without recoil does not train proper technique — justifies VN-12.7MM-SIM's recoil fidelity requirement (Haptic Congruency Rule)
- **Malfunction injection system:** Insertable malfunctions (jam, runaway, cook-off) are standard expected features — VN-12.7MM-SIM must include these in Phase 2 design
- **Sensor suite on replica weapon:** Trigger, bolt, top-cover, charge-handle, ammo-present sensors are all standard — map these against VN-12.7MM-SIM requirement list
- **TAC (Trainee Action Capture):** Simple camera + replay system dramatically improves AAR quality — low-cost addition to consider for VN system
- **Single-instructor operation:** A key procurement criterion — VN-12.7MM-SIM should target 1-instructor operation as a functional requirement
- **Modular upgrade path:** Design VN-12.7MM-SIM so single-screen initial deliverable can upgrade to multi-screen without replacement

## 7. FTO RISK
- **Patents:**
  - ACME GAR® — all-electric, full-force, full-rate-of-fire recoil cradle (patented, specific numbers not publicly disclosed)
  - MILO GraphX / LRTI — software methods likely copyright-protected; no specific patents identified in public search
- **Risk level:** MEDIUM
  - GAR® electric recoil cradle approach is patented — VN-12.7MM-SIM must not copy the specific electric cradle mechanism
  - Laser hit detection on projection screen: broad concept unpatentable, but specific implementations may be covered
- **Avoidance strategy:**
  - Use pneumatic (compressed gas) or electromagnetic drop-in recoil kit approach — architecturally different from GAR® external cradle
  - Laser detection can be implemented with commercially available off-the-shelf components (different optical architecture)
  - Use local Vietnamese CGI rendering — no license dependency on MILO GraphX or VBS2
  - Conduct freedom-to-operate search specifically on ACME Worldwide patent portfolio before Phase 3 detail design

---

## 8. SOURCES
- [Crew Served Weapons Simulation Training | MILO — faac.com](https://www.faac.com/milo/solutions/crew-served-weapons-simulation-training-milo/) — accessed 2026-03-23
- [MILO Range Theater | FAAC — faac.com](https://www.faac.com/milo/virtual/milo-range-theater/) — accessed 2026-03-23
- [MILO Range Features | FAAC — faac.com](https://www.faac.com/milo/virtual/features/) — accessed 2026-03-23
- [MILO Range FAQ | FAAC — faac.com](https://www.faac.com/milo/brochures/milo-virtual-faq/) — accessed 2026-03-23
- [ACME machine gun added to MILO Range Simulators — faac.com blog](https://www.faac.com/blog/2018/10/10/acme-machine-gun-added-milo-range-simulators/) — accessed 2026-03-23
- [ACME M2 Machine Gun Simulator — acme-worldwide.com](https://www.acme-worldwide.com/acme-m2-machine-gun/) — accessed 2026-03-23
- [ACME Full-Force Recoil GAR® Overview — acme-worldwide.com](https://www.acme-worldwide.com/products/gun-active-recoil-systems/gar-overview/) — accessed 2026-03-23
- [MILO Military Training Solutions — faac.com](https://www.faac.com/milo/milo-military-solutions/) — accessed 2026-03-23
