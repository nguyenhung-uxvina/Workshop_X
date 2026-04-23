---
created: 2026-03-23
type: competitor-reverse-engineering
product: "Crew Served Weapons Training System (CSWS)"
company: "Cubic Defense"
country: "USA"
status: active
---

# REF-13: Cubic Defense — Crew Served Weapons Training System (CSWS) — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW

- **Company:** Cubic Defense (Cubic Corporation, Defence UK division)
- **Product name:** Crew Served Weapons Training System (CSWS) — part of Cubic's Ground Training portfolio
- **Country:** USA (with UK operations — Cubic Defence UK)
- **Target market:** Western military forces; NATO armies; Commonwealth nations. Primarily live force-on-force field training (NOT indoor simulation — this is an outdoor, range-integrated system)
- **Weapons simulated:**
  - MK19 40mm automatic grenade launcher
  - TOW (Tube-launched, Optically-tracked, Wire-guided) anti-tank missile
  - Mortar (LM-60 and M-98 variants)
  - RPG-7
  - Javelin anti-tank missile
  - SMAW (Shoulder-launched Multipurpose Assault Weapon)
  - C16 40mm grenade launcher (UK variant of MK19)
  - AT-4 anti-tank weapon
  - Artillery (via Artillery Mission Training System — AMTS)
- **Naval/Land/Both:** Land only
- **In service since:** AWES (Area Weapons Effects Simulator) contract awarded 1998; Salisbury Plain installation completed 2002; ongoing contracts through 2025+
- **Known customers:**
  - British Army (primary — AWES at Salisbury Plain Training Area, SPTA; $35M contract extension 2020; $130M ILT contract 2025)
  - British Army Training Unit Suffield (BATUS), Alberta, Canada (deployed 2003)
  - Australian Defence Force (ADF) — Cubic Defence Australia
  - US Army (MILES/TESS systems)
  - Multiple NATO/allied nations via MILES-compatible exports

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System

**Architecture: No physical recoil in base CSWS. Mortar exception noted.**

- **Mortar simulator (LM-60/M-98):** Explicitly stated to provide "sufficient recoil to disturb the operator's sight, requiring the trainee to achieve proper alignment again" — implies mechanical impulse actuator integrated into the simulator body.
- **MK19 / C16 / AT-4 / RPG-7 / Javelin / SMAW:** No recoil mechanism described. System is fundamentally an appliqué laser engagement system — training value comes from procedural fidelity and hit/miss feedback, not physical recoil simulation.
- **Recoil mechanism type:** N/A — not publicly available (for mortar); mechanical impulse for mortar disruption effect only.
- **Key design philosophy:** Cubic's CSWS is an **instrumented live training system**, not a stand-alone simulator. Recoil is secondary; mission fidelity (navigation, geopairing, targeting, hit adjudication) is primary.

### 2.2 Visual System

- **No screen/projector display system** — this is a field/outdoor training system integrated into live exercises.
- **Visual feedback delivery:**
  - **Android tablet:** MK19 uses real-time visual shot feedback displayed on an Android tablet mounted on/near the weapon.
  - **Display module (Mortar):** Used to select/change ammunition type; provides digital feedback to crew.
  - **Audio feedback (SMAW):** Audio shot feedback allows soldiers to "walk" onto target — auditory cueing replaces visual display.
  - **No screen-based visual environment** — trainees see the real-world battlefield with their own eyes; the system only injects hit/kill adjudication data.
- **Field of view:** Real-world, unlimited (live outdoor environment)
- **Resolution / image quality:** N/A — live field training

### 2.3 Ballistic Model

- **Core technology: Geopairing** — proprietary Cubic Non-Line-of-Sight (NLOS) technology
  - Uses shooter GPS position + target GPS position + weapon orientation (from IMU) + ballistic simulation to compute engagement outcome
  - System does NOT rely on direct laser path to target; calculates indirect fire outcomes mathematically
  - Enables mortar and artillery indirect fire simulation on live battlefield
- **Ballistic fidelity:** Physics-based (gravity, projectile type, indirect/direct fire differentiation). System supports multiple ammunition types (mortar: HE, smoke, illumination via display module selection).
- **Direct fire (RPG, SMAW, Javelin, AT-4):** Laser-based line-of-sight engagement adjudication, aligned to weapon sights.
- **Indirect fire (Mortar, MK19, Artillery):** NLOS geopairing calculation — no laser required to hit point.
- **Adjudication engine:** AWES (Area Weapons Effects Simulator) determines injury/damage extent to soldiers and vehicles from indirect fire and area weapons.

### 2.4 Tracking/Sensing

- **IMU (Inertial Measurement Unit):** Used in MK19 and C16 to "accurately determine orientation." Tracks azimuth and elevation of weapon barrel in real time.
- **GPS:** Shooter and target positions tracked via Cubic player instrumentation (part of MILES/TESS ecosystem). GPS embedded in weapon systems and soldier vests.
- **Laser (for direct fire):** Near-infrared laser aligned to weapon sights (RPG-7, Javelin, SMAW, AT-4). Wavelength: N/A — not publicly available (Cubic MILES uses Class I/IIIA eye-safe NIR, ~904nm typical for MILES).
- **IRDA interface:** RPG-7 simulator uses Infrared Data Association (IrDA) interface to communicate with associated computer and player detection accessories.
- **Target Acquisition System (TAS):** TOW simulator integrates seamlessly with the real weapon's TAS — electronics contained within simulated missile tube.
- **360-degree situational awareness:** Voice recognition system (Raydon-era early systems) and Cubic systems allow 360-degree battlefield awareness via HMD or instrumented environment.

### 2.5 Instructor Station (IOS)

- **EXCON (Exercise Control) & AAR (After Action Review) platform:** Separate Cubic product that integrates with CSWS.
  - Real-time oversight of all players/weapons on battlefield
  - GPS tracking of all instrumented entities
  - Replay and AAR analysis post-exercise
  - Hit/kill/casualty data aggregation
- **Android tablet (forward IOS):** Instructors receive real-time shot feedback at the firing position for MK19.
- **C4I integration:** Artillery Mission Training System (AMTS) connects to C4I and logistics networks — full C2 chain simulation.
- **Data recording:** All engagements logged with shooter ID, target ID, weapon type, outcome.

### 2.6 Physical Specifications

- **Form factor:** Appliqué modular attachments to REAL weapons (not full surrogate bodies in all cases). Key exceptions:
  - RPG-7: "full surrogate trainer" (complete replica weapon body)
  - Javelin: full surrogate weapon simulator
  - SMAW: full surrogate weapon simulator
  - AT-4: fires real M22 ATWESS cartridges (live blank round for realism)
  - MK19/C16/Mortar: modular electronics attached to real weapon systems
- **Weight:** Designed to "mimic both the complexity and weight of their real-world counterparts" — full weight fidelity for surrogate systems.
- **Crew configuration:** Systems explicitly designed for multi-person loading and transportation drills (crew-served fidelity).
- **Portability:** Field deployable, ruggedized for outdoor military exercise environments.
- **Power:** N/A — not publicly available (likely battery-powered for portability)

### 2.7 AI / Adaptive Features

- **Automatic pathfinding:** Included in Cubic's broader simulation ecosystem (VBS integration mentioned in partner systems).
- **Hit adjudication AI:** AWES engine uses physics-based rules to determine blast radius, fragmentation patterns, and injury levels from indirect fire weapons.
- **No adaptive training AI mentioned** for the CSWS specifically — system is event-driven, not adaptive.
- **Geopairing algorithm:** Sophisticated computational model for indirect fire — this is the key proprietary technology.

### 2.8 Crew Training

- **Multi-crew fidelity:** Core design principle — all systems designed for procedural crew drill (loader + gunner + commander roles where applicable).
- **Mortar:** Full crew positioning and aiming procedures required — crew must procedurally locate and orient mortar correctly.
- **TOW:** Full loading, aiming, and firing procedure simulation including Target Acquisition System operation.
- **Javelin:** Replicates fire-and-forget procedure including direct attack and top attack modes; dual camera (day + night) + integrated LRF.
- **Training standard:** TC 3-20.31 (Training and Qualification, Crew) for mounted systems; unit SOPs for dismounted.
- **Scalability:** Individual → crew → platoon training supported via networked instrumentation.
- **Gate to Live Fire:** System provides data to certify units for live fire qualification.

---

## 3. ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│              CUBIC CSWS — LIVE FIELD TRAINING               │
│                    SYSTEM ARCHITECTURE                      │
├─────────────────┬───────────────────┬───────────────────────┤
│  WEAPON LAYER   │  SENSING LAYER    │  NETWORK LAYER        │
│                 │                   │                       │
│ [MK19 + IMU]   │ IMU → orientation │ GPS mesh network      │
│ [TOW + TAS]    │ GPS → position    │ (Cubic player units)  │
│ [Mortar + disp]│ Laser → LOS hits  │                       │
│ [RPG + IrDA]   │ IrDA → data link  │ RF data link (UHF)    │
│ [Javelin + LRF]│ LRF → range       │                       │
│ [AT-4 + M22]   │                   │ NLOS geopairing       │
│ [SMAW + audio] │                   │ computation server    │
└────────┬────────┴─────────┬─────────┴──────────┬────────────┘
         │                  │                    │
         ▼                  ▼                    ▼
    Android tablet     AWES engine          EXCON/IOS
    (per weapon)       (casualty adj.)      (exercise control)
                                            + AAR analysis
```

**Key insight:** Cubic CSWS is NOT a standalone simulator — it is an instrumentation layer overlaid on real weapons in real field environments. The "simulator" is the network, software, and adjudication engine, not a physical cabinet.

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)

1. **Ecosystem lock-in:** CSWS integrates with existing MILES infrastructure — customer who already has Cubic MILES for small arms will naturally adopt CSWS. VN-12.7MM-SIM has no ecosystem to leverage.
2. **Live force-on-force capability:** Trains actual field tactics with real terrain, weather, and operational tempo. VN-12.7MM-SIM is an indoor simulator — cannot replicate this.
3. **Multi-weapon breadth:** 8+ weapon types in a single ecosystem. VN-12.7MM-SIM is single-weapon focused.
4. **No live fire range required:** Full tactical training without ammunition expenditure or range access. Superior for unit-level sustainment training.
5. **Proven at scale:** SPTA deployment (150 sq miles) is the largest instrumented training area in the world — industrial-scale proven reliability.
6. **Procedural crew fidelity:** Multi-crew loading/transport drills impossible in VN-12.7MM-SIM standing architecture.
7. **NLOS geopairing:** Solves the indirect fire training problem entirely — mortars and artillery can be trained with this system, something VN-12.7MM-SIM does not address.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)

1. **No physical recoil (except mortar):** CSWS does not simulate the recoil and vibration of firing the M2 .50 cal or MK19. VN-12.7MM-SIM targets this as a primary training differentiator.
2. **Outdoor only:** Requires access to large field exercise areas (minimum platoon-level). Cannot be used in garrison without a training area. VN-12.7MM-SIM is portable/indoor.
3. **No ballistic marksmanship training:** CSWS cannot train zeroing, lead estimation, or sustained fire accuracy in isolation — it validates tactical outcomes, not individual marksmanship skills. VN-12.7MM-SIM specifically addresses marksmanship fundamentals.
4. **High infrastructure cost:** Requires GPS network, RF infrastructure, EXCON facilities, trained exercise controllers. Unit cost per training event is high.
5. **No synthetic environment:** Soldiers see real terrain only — cannot create scripted scenarios (ambush, specific target presentation, night IR conditions) without real forces and terrain.
6. **Very limited in Vietnam context:** No known deployment in Southeast Asia. MILES ecosystem unfamiliar to VPA.
7. **Price and export controls:** US-origin defense system — ITAR-restricted, complex export process for Vietnam.

## 6. KEY TECHNOLOGIES TO LEARN FROM

1. **Geopairing / NLOS ballistic computation:** The concept of using GPS positions + IMU orientation + physics engine to adjudicate indirect fire without a laser path is highly relevant for VN-12.7MM-SIM's future expansion to mortar training.
2. **IMU-based weapon orientation tracking:** Using an IMU attached to the weapon to capture azimuth and elevation in real time — directly applicable to VN-12.7MM-SIM's tracking/sensing architecture.
3. **Android tablet for forward instructor feedback:** Cheap, rugged, wireless feedback at the firing point — a design pattern worth adopting for VN-12.7MM-SIM IOS tablet mode.
4. **Modular appliqué design:** Attaching electronics to the real weapon vs. building a full surrogate. For VN context where actual M2 QCB weapons exist in VPA inventory, an appliqué approach could be lower-cost than a full surrogate.
5. **Scalability model:** Individual → Crew → Platoon training using the same underlying infrastructure — VN-12.7MM-SIM should design its architecture for this from the start.
6. **AT-4 blank cartridge approach:** Using real blank rounds (M22 ATWESS) to provide auditory and mechanical firing fidelity while keeping safety — applicable for VN-12.7MM-SIM to consider gas-impulse blank cartridge recoil generation.

## 7. FTO RISK

- **Patent risk: MEDIUM-HIGH**
  - Cubic holds patents on MILES-based laser engagement adjudication (foundational IP, likely expired for basic MILES but supplemental patents active)
  - Geopairing / NLOS technology: likely patented — specific implementation details not publicly disclosed. Avoid implementing GPS+IMU+ballistic-model adjudication without FTO clearance.
  - IMU-based weapon orientation tracking for training systems: multiple patent families in this space (Cubic, Rheinmetall, others)
  - Android tablet feedback interface: low risk (generic technology)
- **Key differentiator for VN-12.7MM-SIM:** Cubic CSWS is a live-field system; VN-12.7MM-SIM is an indoor virtual system — different patent domains, lower direct FTO risk.
- **Recommendation:** Avoid direct NLOS geopairing implementation. Use standard ballistic tables + screen-based visual environment instead. This sidesteps Cubic's core IP.

## 8. SOURCES

1. [Cubic — Crew Served Weapons product page](https://www.cubic.com/solutions/training/ground/crew-served-weapons)
2. [Cubic Awarded Area Weapon Effects Simulation (AWES) Contract Extension](https://www.cubic.com/news-events/news/cubic-awarded-area-weapon-effects-simulation-awes-contract-extension)
3. [Cubic Awarded Contract to Support British Army Training — BusinessWire, 2020](https://www.businesswire.com/news/home/20200601005155/en/Cubic-Awarded-Contract-to-Support-British-Army-Training)
4. [Cubic Secures $130M UK Contract for Army Training Simulator — GovCon Exec, 2025](https://www.govconexec.com/2025/07/cubic-training-simulator-contract-award/)
5. [Cubic helps simulation meet reality for British Army training — Global Defence Technology, Dec 2018](https://defence.nridigital.com/global_defence_technology_dec18/cubic_helps_simulation_meet_reality_for_british_army_training)
6. [Cubic tailors mortar simulator for the US Army — Shephard Media](https://www.shephardmedia.com/news/training-simulation/cubic-tailors-mortar-simulator-for-the-us-army/)
7. [British Army training receives a boost from Cubic's simulation systems — Army Technology](https://www.army-technology.com/features/british-army-training/)
8. [EXCON & AAR Analysis — Cubic product page](https://www.cubic.com/solutions/training/ground/excon-aar-analysis)
9. [Cubic Manworn Systems — Cubic product page](https://www.cubic.com/solutions/training/ground/tactical-engagement-systems/manworn-systems)
