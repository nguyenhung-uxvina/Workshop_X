---
created: 2026-03-23
type: competitor-reverse-engineering
product: "GAR® M2 Machine Gun Simulator"
company: "ACME Worldwide Enterprises, Inc."
country: "USA"
status: active
---

# REF-01: ACME Worldwide — GAR® M2 Machine Gun Simulator — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW
- **Company:** ACME Worldwide Enterprises, Inc. — 1710 Randolph Court SE, Albuquerque NM 87106, USA. Tel: (505) 243-0400
- **Product name:** GAR® (Gun Active Recoil) M2 Machine Gun Simulator / Gunnery Training Simulation (GTS)
- **Country:** USA
- **Target market:** Military — US Army, US Navy, USMC, US Air Force; also Canadian MoD, UK Royal Navy; any operator of hard-mounted crew-served weapons on air/land/sea platforms
- **Weapons simulated:** M2HB (.50 cal), GAU-18, XM218 (reconfigurable); also M240, M134/GAU-2, MK19, M249 in related product family
- **Naval / Land / Both:** Both — shipboard (deck-mount), vehicle (HMMWV/MRAP), aircraft (helicopter door gun), and standalone GTS trainer
- **In service since:** ~2005 (company founded, first GAR deliveries); GTS product ~2018. I/ITSEC exhibitor since 2018+
- **Known customers:**
  - US Army — Land-based Threat Awareness Training System (TATS)
  - US Navy — multiple Shore-based Training Systems; FIST-FIAC (Fast Attack Craft / Fast Inshore Attack Craft) system
  - US Navy — Shipboard Gunnery Training System (demonstrated I/ITSEC 2018, integrated with Navy VR prototype)
  - US DoD Contractors (demonstrator systems)
  - USMC — SMC CH-47, CH-53 Helicopter Trainers (XM218 configuration)
  - Canadian Ministry of Defence
  - UK Royal Navy
  - Naval Expeditionary Combat Command (NECC) via FAAC/Milo Range integrations

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System
- **Type:** All-electric (electromechanical) — NO pneumatics, NO hydraulics, NO blanks/cartridges
- **Mechanism:** Patented Gun Active Recoil (GAR®) cradle — a slide-tray assembly driven by at least one motor. The gun mount (cradle) is actuated rather than the internal gun mechanism; the replica weapon bolts to the cradle and moves with it. The electromechanical system generates full-force, full-rate recoil impulses on a per-round basis. A dedicated Electronics Chassis provides power conditioning and drive electronics for the recoil actuator and all weapon sensors. Standard cable run: 25 feet (7.6 m) between weapon/cradle and electronics chassis.
- **Force output:** "Full-force" (matches actual M2 recoil impulse) — exact N figure not publicly disclosed. The real M2HB generates approximately 800–1,200 N peak recoil force per round at 450–600 rpm; ACME claims full fidelity.
- **Rate of fire simulation:** Up to 3,000 rpm (stated maximum capability of GAR® platform family). M2HB actual rate ~450–600 rpm — ACME matches this precisely for M2 configuration.
- **Fidelity level:** Claimed 100% of actual weapon force and rate. Variable torque windloading system also simulates aerodynamic barrel loads (relevant for helicopter/shipboard use in wind).
- **Patent protection:**
  - US8690575 — Apparatus and method for weapon simulator (foundational)
  - US9175922 — continuation
  - US9568268 — continuation
  - US10001338 — all-electric GAR® system (issued ~2018, primary commercial patent)
  - Additional patents likely pending (company states "patents pending" on newer products)

### 2.2 Visual System
- **Display type (GTS standalone):** Single rear-projection screen, retractable, 12 ft wide × 10 ft high (~3.65 m × 3.05 m). Projector requires only 18 inches (~45 cm) clearance (short-throw). Instructor station has separate monitor display.
- **Display type (naval shipboard integration):** Virtual Reality (VR) goggles — demonstrated at Annual Navy Technology Exercise and I/ITSEC 2018 with Navy prototype VR headset. Sailors engaged virtual fast-attack craft through VR goggles while operating deck-mounted M2 with full GAR® recoil.
- **Resolution:** N/A — not publicly available (depends on projector/VR headset spec selected by integrator)
- **Field of view:** GTS screen: approximately 60–70° horizontal from nominal shooting position. VR configuration: dependent on HMD selected (not disclosed).
- **Refresh rate:** N/A — not publicly available
- **Rendering engine:** Proprietary ACME simulation software (described as supporting day/night, geo-specific environments, intelligent targets). GTS product also stated compatible with third-party integration. Some ACME systems noted as integrating with MILO Range (FAAC) — confirmed by FAAC press release 2018.

### 2.3 Ballistic Model
- **Type:** Physics-based with realistic bullet flyout
- **DOF:** N/A — not publicly disclosed; described as "true-to-life ballistics and bullet flyout"
- **Environmental factors:** Wind (including variable torque windloading on barrel), day/night (visibility), user-settable target resiliency. Ownship route (air/land/sea) affects relative motion between weapon and target.

### 2.4 Tracking / Sensing
- **Weapon position:** Azimuth encoder + elevation encoder (listed in sensor suite for M2)
- **Weapon state sensors (full suite):**
  - Trigger position
  - Replica bolt position
  - Top cover position
  - Ammunition present
  - Charge handle position
  - (Earlier product page also listed: Safety, Bolt Back)
- **Aim point:** Azimuth + elevation encoders feed aim point calculation — no separate IR/laser tracker. Ballistic solution derived from weapon orientation + ballistic model.
- **Accuracy:** N/A — not publicly available

### 2.5 Instructor Station (IOS)
- **Capabilities (GTS):** Integral pull-out instructor station, positioned below and behind the trainee. Controls: scenarios, gun state, ownship route, target type/number/resiliency, scoring.
- **Monitoring:** Rounds fired, hits, misses, gunner actions, weapon state changes.
- **Scenario editor:** Selectable intelligent targets (vehicles, personnel); multiple environments; geo-specific custom scenarios; day/night; pre-set or instructor-controlled ownship routes (air/land/sea). "Insertable" malfunctions (Misfire, Jam, Runaway, Cookoff, Sluggish Fire).
- **AAR features:** Score gunner effectiveness against targets; monitor all weapon state changes. Formal AAR module details not publicly disclosed.
- **IOS hardware:** Single laptop or workstation, integrated into trainer platform (pull-out tray on GTS).

### 2.6 Physical Specifications
- **GTS footprint:** 12 ft × 12 ft (3.65 m × 3.65 m) including screen
- **Platform:** Wheeled, modular, fits through standard office doors (~0.9 m door)
- **Cable length:** 25 ft (7.6 m) — weapon to electronics chassis
- **Weight (M2 GAR® weapon + cradle assembly):** N/A — not publicly available
- **Weight (GTS complete):** N/A — not publicly available
- **Power requirements:** Single input power point — standard US (120 V AC, 60 Hz) or European (230 V AC, 50 Hz). No external pneumatic supply required. Exact wattage N/A — not publicly available.
- **Operating temperature:** N/A — not publicly available

### 2.7 AI / Adaptive Features
- Intelligent targets with adjustable resiliency (can be made easy or hardened)
- Instructor-insertable malfunctions on demand
- Variable torque windloading (adjustable to simulate airstream conditions)
- GTS described as AR-upgradeable (ACME blog post "GTS Transformation to Augmented Reality" — details not publicly available)
- No confirmed autonomous adaptive difficulty (AI-driven) — instructor manually adjusts

### 2.8 Crew Training
- **Individual / Team / Both:** Primarily individual gunner training. The GAR® weapon unit is a single-position system. Multiple units can be networked for collective training (stated for FAAC/MILO integration).
- **Positions simulated:** Single gunner at weapon mount. GTS does not replicate coxswain/helmsman or other crew roles — it is a weapon-only trainer. Naval integration systems (e.g., FIST-FIAC) add crew context via the host system.

---

## 3. ARCHITECTURE DIAGRAM

```
┌──────────────────────────────────────────────────────┐
│              ACME GTS / M2 GAR® SYSTEM               │
│                                                      │
│  ┌─────────────────────┐   ┌────────────────────┐   │
│  │  REPLICA M2 WEAPON  │   │  PROJECTION SCREEN │   │
│  │  + GAR® Cradle      │   │  12ft × 10ft        │   │
│  │  (slide tray +      │◄──│  (retractable)      │   │
│  │   electric motor)   │   └────────────────────┘   │
│  │  Sensors:           │            ▲               │
│  │  - Trigger          │            │               │
│  │  - Bolt position    │   ┌────────┴───────────┐   │
│  │  - Top cover        │   │  SHORT-THROW        │   │
│  │  - Ammo present     │   │  PROJECTOR          │   │
│  │  - Charge handle    │   │  (18" clearance)    │   │
│  │  - Az/El encoders   │   └────────────────────┘   │
│  └────────┬────────────┘            ▲               │
│           │ 25ft cable              │               │
│           ▼                         │               │
│  ┌─────────────────────┐   ┌────────┴───────────┐   │
│  │ ELECTRONICS CHASSIS │──►│  SIM HOST COMPUTER │   │
│  │ - Power conditioning│   │  - Ballistics      │   │
│  │ - Motor drives      │   │  - Env/Scenarios   │   │
│  │ - Sensor I/O        │   │  - Scoring         │   │
│  └─────────────────────┘   └────────────────────┘   │
│                                      ▲               │
│                             ┌────────┴───────────┐   │
│                             │  INSTRUCTOR STATION│   │
│                             │  (pull-out tray)   │   │
│                             └────────────────────┘   │
│  AUDIO: Deployable speaker system (bass vibration)   │
└──────────────────────────────────────────────────────┘

Naval shipboard integration:
M2 GAR® cradle → deck mount → ship's electrical supply
→ host VR/simulation system (e.g., FIST-FIAC, FAAC/MILO)
→ VR headset (sailor) or external display
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)
- **Full-force electric recoil:** Only known all-electric system achieving 100% recoil fidelity — no pneumatics, no consumables. VN-12.7MM-SIM must match or justify lower fidelity.
- **Multi-platform (air/land/sea):** Single GAR® cradle technology adapts to helicopter, vehicle, ship mount — large addressable market; economies of scale in manufacturing.
- **Patent portfolio depth:** 4 patents protecting the core mechanism (8690575, 9175922, 9568268, 10001338). Competitors cannot copy the slide-tray + electric motor cradle approach without FTO risk.
- **Proven US DoD customer base:** US Army, Navy, USMC, USAF deployments give strong reference cases and lower procurement risk perception.
- **Sensor completeness:** 5+ weapon-state sensors enable rich training feedback (malfunctions, jam, bolt state) beyond simple "fire/no-fire."
- **Variable windloading:** Barrel torque simulation for airstream loads — unique feature relevant for shipboard and airborne use.
- **GTS portability:** 12×12 ft footprint, fits through office doors, single power connection — extremely low logistics burden.
- **Established integrator ecosystem:** FAAC/MILO Range, Veraxx helicopters — ACME slots into existing major simulation platforms.

## 5. WEAKNESSES (vs VN-12.7MM-SIM)
- **Cost:** Quote-only pricing implies very high unit cost (likely $150,000–$500,000+ per system). VN-12.7MM-SIM targets cost-effective production for Vietnam/developing market.
- **No crew training:** Single gunner only — no coxswain, no boat crew, no team coordination training. VN-12.7MM-SIM can differentiate with multi-crew capability if needed.
- **Proprietary closed system:** Integration requires ACME electronics chassis and software — limited operator customization. No open architecture.
- **VR only for naval:** Full shipboard training requires a separate host VR system (e.g., Navy prototype, FIST-FIAC) — ACME GAR® alone is insufficient for complete naval scenario. VN-12.7MM-SIM can offer more integrated naval scenario out of the box.
- **No AR overlay:** The screen/VR approach does not layer simulation onto real-world view. REAMDA's AR approach (see REF-02) may be superior for certain training contexts.
- **GTS screen FOV limited:** 12 ft × 10 ft screen at 180° coverage is very different from a 360° naval environment. Limited situational awareness training.
- **Not designed for tropical/developing-country environment:** No MIL-STD environmental ratings published. Support and spares logistics in Vietnam context would be challenging.
- **No ballistic data published:** DOF, environmental model depth unverifiable — may be less rigorous than claimed.

## 6. KEY TECHNOLOGIES TO LEARN FROM
1. **Slide-tray + electric motor cradle (FTO analysis required):** The core mechanism — actuating the mount rather than the gun's internal action — is patented. VN-12.7MM-SIM must design around this. Study patent US10001338B2 claims carefully to find design space.
2. **Sensor suite completeness:** Trigger + bolt + top cover + ammo + charge handle = 5 weapon-state sensors. VN-12.7MM-SIM should match this minimum for training fidelity. These sensors are commodity (microswitches, reed switches, optical encoders) — no patent protection on individual sensors.
3. **Single-cable umbilical architecture:** 25 ft cable between weapon and electronics chassis. Separating weapon mechanics from electronics chassis is a good design principle — reduces weapon weight, protects electronics from vibration, allows field cable replacement.
4. **Variable windloading concept:** Torque motor on barrel simulates aerodynamic loads during platform motion. Relevant for VN-12.7MM-SIM if mounted on boat simulator platform.
5. **Malfunction insertability:** Software-commanded physical malfunctions (trigger dead, jam round, cookoff) are high training value. Implement equivalent in VN firmware.
6. **GTS footprint philosophy:** Single-power, wheeled, fits through door. Adopt same logistic simplicity for VN-12.7MM-SIM deployable variant.
7. **Muzzle flash + jam round LED:** Low-cost options that significantly increase immersion. Implement with standard LED + driver.

---

## 7. FTO RISK
- **Patents:**
  - US8690575 — Apparatus and method for weapon simulator (filed ~2012)
  - US9175922 — continuation (filed ~2013)
  - US9568268 — continuation (filed ~2015)
  - US10001338 — all-electric GAR® (filed ~2016, issued 2018)
- **Risk level:** MEDIUM–HIGH for direct electric cradle-actuation approach
- **Avoidance strategy:**
  1. Read all 4 patent claims in detail — key claim is "slide tray + at least one motor + gun mounted to the slide tray." Design VN-12.7MM-SIM recoil using a fundamentally different mechanism (e.g., inertial mass on linear rail, pneumatic buffer, or rotating eccentric mass — all outside the slide-tray claim space).
  2. Pneumatic recoil (as used in many competitors including LaserShot — see REF-03) is NOT covered by ACME patents — zero FTO risk for pneumatic approach.
  3. Electromagnetic linear actuator with different kinematic chain may be outside claim scope — requires legal opinion.
  4. US patents do not have direct effect in Vietnam — FTO risk is only relevant for export to US/allied markets.

---

## 8. SOURCES
- ACME Worldwide product page, M2: https://www.acme-worldwide.com/project/m2/ (accessed 2026-03-23)
- ACME Worldwide product page, M2 alternate: https://www.acme-worldwide.com/acme-m2-machine-gun/ (accessed 2026-03-23)
- ACME Worldwide GAR® overview: https://www.acme-worldwide.com/products/gun-active-recoil-systems/gar-overview/ (accessed 2026-03-23)
- ACME Worldwide GTS product page: https://www.acme-worldwide.com/gunnery-training-system-gts/ (accessed 2026-03-23)
- ACME GTS Spec Sheet PDF (local copy): `Ref/ACME_GTS-Spec-Sheet.pdf` (downloaded from ACME website, accessed 2026-03-23)
- ACME Patent announcement: https://www.acme-worldwide.com/acmes-new-patent-10001338/ (accessed 2026-03-23)
- ACME GAR® Patent page: https://www.acme-worldwide.com/products/gun-active-recoil-systems/acme-gar-patent/ (accessed 2026-03-23)
- ACME Naval training article: https://www.acme-worldwide.com/advancing-naval-training-with-cutting-edge-replica-weapon-systems/ (accessed 2026-03-23)
- FAAC press release — ACME integration with MILO Range: https://www.faac.com/blog/2018/10/10/acme-machine-gun-added-milo-range-simulators/ (accessed 2026-03-23)
- Google Patents US8690575B1: https://patents.google.com/patent/US8690575B1/en (accessed 2026-03-23)
- ACME at I/ITSEC 2018: https://www.acme-worldwide.com/i-itsec-2018/ (accessed 2026-03-23)
- NAVAIR OSBP listing: https://www.navair.navy.mil/osbp/node/9686 (accessed 2026-03-23)
