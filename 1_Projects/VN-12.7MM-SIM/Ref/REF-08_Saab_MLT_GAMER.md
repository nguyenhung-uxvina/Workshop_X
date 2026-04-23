---
created: 2026-03-23
type: competitor-reverse-engineering
product: "Maritime Live Training (MLT) / GAMER Naval"
company: "Saab AB"
country: "Sweden"
status: active
---

# REF-08: Saab — Maritime Live Training (MLT) / GAMER Naval — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW
- **Company:** Saab AB — Training and Simulation Division (formerly Saab Training Systems)
- **Product name:** Maritime Live Training (MLT); underpinned by GAMER (Ground Air Manoeuvre Exercise Rehearsal) system adapted for naval domain; laser engagement via BT46 Mk III technology
- **Country:** Sweden
- **Target market:** NATO navies, littoral/amphibious forces, coast guards. Currently expanding from GAMER (35+ land-force nations) into maritime domain. Known interest: Singapore (IMDEX 2023 showcase), US Marine Corps, European NATO navies.
- **Weapons simulated:** MLT is weapon-agnostic by design — supports any weapon fitted with BT46 laser emitter. In maritime context: crew-served weapons (GPMG, HMG, 20mm–40mm autocannon), shoulder-fired weapons, and naval gun fire control systems. CBL (Compact Ballistic Laser) variant supports remote weapon stations.
- **Naval/Land/Both:** Both — MLT is the naval/littoral extension of the land-based GAMER LSS. Supports ship-borne and shore-to-ship scenarios.
- **In service since:** GAMER land system: 1990s. MLT maritime extension: unveiled IMDEX Asia 2023. Full operational capability: target end-2025.
- **Known customers (GAMER/BT46 ecosystem):** 35+ nations including Germany (BT46 for PAH-1 helicopter anti-tank), Italy (MoD, 1999), Estonia (2017), Poland (AWL university, 2018), US Marine Corps ($37M MCTIS contract expansion), Belgium (mobile combat training centre).

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System
- **Type:** Not applicable — Saab MLT is a LIVE training system (real weapons fired with laser-emitting training rounds or blank ammunition), NOT a simulator. Physical recoil comes from blank ammunition in actual weapons.
- **Mechanism:** Blank cartridges in individual weapons mimic the retort of live rounds. Compressed air can simulate recoil for some configurations. Accurately-weighted weapon representations used where live weapons not deployed.
- **Force output:** As per weapon + blank round characteristics (e.g., 12.7mm blank cartridge recoil impulse)
- **Rate of fire simulation:** Real-time — limited only by weapon cyclic rate and blank feed mechanism
- **Fidelity level:** Very high for live engagement training (real weapon handling, real blank recoil, real muzzle effects). Lower for constructive environment (no real targets visible in virtual overlay).
- **Patent protection:** BT46 laser system — Saab proprietary. U-LEIS protocol — NATO standard (open). Specific encoding algorithms — Saab proprietary, not published.

### 2.2 Visual System
- **Display type:** N/A for live training mode — operators see real physical environment. For constructive/indoor modes: computer-generated image (CGI) via EXCON exercise control software.
- **Resolution:** N/A — live training
- **Field of view:** 360° (natural — operator looks at real environment)
- **Refresh rate:** N/A — live training
- **Rendering engine:** Saab EXCON (EXercise CONtrol) software — manages exercise scenario, tracks engagement events, provides instructor overview. Not a rendering engine in the traditional sense.

### 2.3 Ballistic Model
- **Type:** Two-way laser ballistic simulation (BT46 Mk III). NOT screen-based — laser trajectory IS the ballistic model enacted in physical space.
- **DOF:** 6-DOF effective — BT46 uses onboard ballistics computer and gyros to model: muzzle velocity, time of flight, temperature compensation (critical for large-calibre rounds), wind effect, trajectory arc, and impact point prediction.
- **Environmental factors:** Temperature of round (compensated by BT46 thermal sensor), wind (manual input or sensor), range (computed via gyro integration). Sea state effect on ship movement: tracked via vessel motion sensor feeding into engagement geometry calculation.

### 2.4 Tracking/Sensing
- **Weapon position:** Via laser emitter mounted on/in weapon barrel. BT46 Mk III uses internal gyros to track weapon orientation and compute projectile trajectory.
- **Aim point:** Laser beam direction + BT46 ballistic computation = predicted impact point. Detector array on target receives laser and decodes hit data.
- **Accuracy:** BT46 is described as "the most accurate and realistic laser-based simulator system in the world." Sub-milliradians angular resolution. Trajectory modeling accuracy: N/A — not publicly quantified, but calibration validated against live fire data.

### 2.5 Instructor Station (IOS)
- **Capabilities:** EXCON exercise control software — real-time track of all participants, engagement event logging, target status management, scenario injection (new threats, casualties), network health monitoring
- **Scenario editor:** EXCON scenario builder — supports up to 10,000 entities in single exercise. Ship, boat, aircraft, dismounted infantry entities all supported.
- **AAR features:** Rapid feedback and after-action review modules — engagement timeline reconstruction, hit/miss ratio per weapon system, crew performance scoring. Specific naval AAR detail: N/A beyond this.

### 2.6 Physical Specifications
- **Dimensions:** Modular — BT46 emitters are weapon-mounted (rifle-scale to vehicle-scale). Modular Target System (MTS) for target vessels/boats: installed on Combat Boat 90 (CB90) and similar platforms. No fixed infrastructure required.
- **Weight:** BT46 unit: estimated <2 kg per weapon emitter (based on comparable laser trainer systems). Full MTS installation on CB90: N/A.
- **Power requirements:** Battery-powered laser emitters (BT46). Shore-based EXCON station: standard power. No generator requirement for basic deployment.
- **Operating temperature:** N/A — not publicly specified. Saab systems designed for NATO environmental range (assumed -30°C to +55°C based on European/tropical customer base).

### 2.7 AI / Adaptive Features
- EXCON scenario injection: instructor can dynamically introduce new threats, change target behavior, simulate casualties. Not autonomous AI — instructor-driven.
- UAV integration (announced I/ITSEC 2024): Saab revealed UAV live training developments as add-on to EXCON. Drones as autonomous targets in live training exercises — enables realistic aerial threat simulation without instructor micro-management.
- No publicly documented autonomous adaptive difficulty engine.

### 2.8 Crew Training
- **Individual / Team / Both:** Both — MLT designed for multi-crew, multi-platform joint exercises. Ship crews, boat crews, shore-based units can train simultaneously in same scenario.
- **Positions simulated:** All weapon operator positions on vessel (GPMG, HMG, autocannon, missile operator). Also: commander, navigator, fire control officer — all participate via their real equipment with EXCON overlay. 10,000-entity scenario capacity means full task group exercises.

---

## 3. ARCHITECTURE DIAGRAM

```
[Real Weapons with BT46 Laser Emitters]
  ├── Blank Ammunition → Physical Recoil + Muzzle Effect
  ├── BT46 Ballistics Computer + Gyro → Trajectory Model
  └── Laser Emitter → Encoded Laser Pulse (U-LEIS protocol)
           │
           ▼ (laser travels through air)
[Modular Target System (MTS) on Target Vessel/Platform]
  ├── Laser Detector Array
  ├── Decode: ammo type, calibre, impact data
  └── Hit/Kill Assessment → Wireless Uplink
           │
           ▼
[EXCON Exercise Control Network]
  ├── Real-time Entity Tracking (up to 10,000)
  ├── Scenario Engine (threat injection, event sequencing)
  ├── Fire Control System Integration (ship FCS data link)
  └── AAR Data Logging
           │
           ▼
[Instructor Station]
  ├── Live Tactical Picture (all entities, engagements)
  ├── Scenario Editor
  └── AAR Review Module
           │
           ▼
[Ship Fire Control System Integration]
  └── FCS receives identical feedback as real engagement
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)

| # | Strength | Relevance to VN |
|---|----------|-----------------|
| 1 | **True live training** — real weapons, real blank recoil, real environment. Highest possible training fidelity for engagement skills | VN-12.7MM-SIM is a simulator; MLT covers the live training phase that VN's simulator cannot replace |
| 2 | **BT46 ballistic accuracy** — physics-based 6-DOF trajectory with temperature compensation. Industry gold standard | VN's ballistic model must be benchmarked against BT46 accuracy claims |
| 3 | **Ship FCS integration** — operators get same feedback as live ammunition. Creates fire control loop training not possible in standalone simulator | VN-12.7MM-SIM should investigate FCS interface as Phase 3 enhancement |
| 4 | **10,000-entity EXCON** — joint task group exercises. Scales from single gunner to full naval battle group | VN needs multi-crew capability; EXCON scale shows what is architecturally possible |
| 5 | **35+ nation GAMER ecosystem** — proven supply chain, trained instructors, standardized protocols (U-LEIS/NATO) | VN must build proprietary ecosystem from scratch — higher cost and time |
| 6 | **Weapon-agnostic** — same BT46 emitter scales from rifle to autocannon to naval gun | VN-12.7MM-SIM is calibre-specific; Saab's scalable approach = better ROI for customer |
| 7 | **Port-proximity training** — exercises near harbour, no airspace clearance | Key advantage for VN Navy: coastal and riverine operations near base |

---

## 5. WEAKNESSES (vs VN-12.7MM-SIM)

| # | Weakness | VN Opportunity |
|---|----------|----------------|
| 1 | **Not a simulator** — requires real weapons, real blanks, real target vessels. Very high running cost per training hour | VN-12.7MM-SIM: zero ammunition cost, zero target vessel cost, unlimited reps |
| 2 | **Safety constraints** — blank ammunition still requires safety zones, protective equipment, range clearance | VN simulator: fully indoor, zero safety exclusion zone, ship-board deployable in barracks |
| 3 | **Weather dependency** — live maritime training affected by sea state, visibility | VN simulator: all-weather, any time of day, any scenario |
| 4 | **High acquisition cost** — BT46 emitters, MTS installation on vessels, EXCON infrastructure. Estimated millions per fleet | VN-12.7MM-SIM: single-unit cost target significantly lower |
| 5 | **No constructive marksmanship training** — MLT is for collective/tactical training, not individual marksmanship drills | VN simulator excels at individual skill building: trigger control, lead angle, burst discipline |
| 6 | **Foreign-controlled technology** — BT46 and EXCON are Swedish proprietary; export license dependency | VN-12.7MM-SIM: sovereign technology, no export control exposure |
| 7 | **No indoor/classroom use** — requires outdoor live training area at minimum | VN simulator can be used in ship's training compartment or base classroom |

---

## 6. KEY TECHNOLOGIES TO LEARN FROM

1. **BT46 two-way laser encoding (U-LEIS)** — encode ammo type, calibre, time-of-flight into laser pulse. VN should design own encoding protocol for laser-based adjudication layer (separate from screen-based hit detection). Even for a simulator, adding a laser adjudication layer for range exercises is worth studying.
2. **Ballistic computer + gyro in weapon mount** — BT46 uses onboard gyros for trajectory computation. For VN's sensor package: IMU-based weapon tracking with onboard ballistic model computation is more accurate than host-PC-only computation.
3. **Modular Target System on CB90** — detector array architecture on fast attack boat. Study detector placement pattern, hit zone segmentation (lethal vs. non-lethal), and wireless data uplink approach.
4. **EXCON entity model** — 10,000-entity architecture with real-time AAR. VN's scenario engine should plan for ≥100-entity capacity in Phase 1 (adequate for platoon-level exercises) with path to expansion.
5. **Blank cartridge + compressed air dual approach** — Saab uses both: live blank for real-weapon feel + compressed air as fallback. VN-12.7MM-SIM uses only recoil actuator; adding blank-fire capability (with snap caps) to replica weapon would significantly increase fidelity at low cost.
6. **Near-port training concept** — for VN Navy marketing, emphasize that simulator enables "near-port equivalent" training outcomes: eliminate transit costs, fuel, safety clearances.

---

## 7. FTO RISK

- **Patents:**
  - BT46 laser system: Saab proprietary (multiple patents on ballistic laser encoding, two-way laser communication, gyro-integrated trajectory model). Risk if VN develops a laser adjudication layer.
  - U-LEIS protocol: NATO standard — open, freely usable.
  - EXCON software architecture: Saab trade secret / copyright — no patent issue for independent development.
  - Modular Target System mechanical design: possible Saab patents on mounting and detector array geometry.
- **Risk level:** MEDIUM — if VN adds laser adjudication (BT46-equivalent), risk of infringing Saab ballistic laser patents. If VN stays purely screen-based simulation (no laser), risk is LOW.
- **Avoidance strategy:**
  - Do NOT implement BT46-style two-way ballistic laser without FTO clearance.
  - Use standard MILES/AGDUS protocol (expired patents) if laser adjudication needed.
  - Screen-based simulation + software ballistic model: zero FTO risk.
  - U-LEIS protocol: freely usable for interoperability if desired.

---

## 8. SOURCES

- [Saab — Maritime Live Training at IMDEX Asia (press release 2023)](https://www.saab.com/newsroom/press-releases/2023/saab-to-present-maritime-live-training-at-imdex-asia)
- [Saab — Revolutionizing Naval Training (Singapore editorial)](https://www.saab.com/markets/singapore/editorial_articles/revolutionizing-naval-training)
- [Saab — The Full Sensory Experience: Future of Military Training (2024)](https://www.saab.com/newsroom/stories/2024/april/the-full-sensory-experience-welcome-to-the-future-of-military-training)
- [Saab — True Ballistic Training for True Battle Readiness (2024)](https://www.saab.com/newsroom/stories/2024/april/true-ballistic-training-for-true-battle-readiness)
- [Janes — Saab unveils new training simulation system for naval forces](https://www.janes.com/osint-insights/defence-news/c4isr/saab-unveils-new-training-simulation-system-for-naval-forces)
- [Army Technology — Poland AWL Saab BT46 upgrade GAMER](https://www.army-technology.com/news/poland-awl-saab-bt46-upgrade-gamer/)
- [Saab MLT Maritime Training (IMDEX brochure PDF)](https://www.saab.com/globalassets/event/imdex/maritime-live-training.pdf)
- [Shephard — USMC selects Saab training instrumentation systems](https://www.shephardmedia.com/news/training-simulation/usmc-selects-saab-training-instrumentation-systems/)
- [I/ITSEC 2024 — Saab reveals UAV live training developments](https://www.saab.com/newsroom/press-releases/2024/iitsec-saab-reveals-uav-live-training-developments)
- [Saab Training and Simulation — Wikipedia](https://en.wikipedia.org/wiki/Saab_Training_and_Simulation)
