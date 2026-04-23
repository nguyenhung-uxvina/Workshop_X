---
created: 2026-04-09
updated: 2026-04-09
type: project
status: active
tags: [#type/project, #status/active]
method: Reverse Morphological Chart (Hülagü & Timur 2024) + P&B §3.2 Existing Systems Analysis
version: v1.0
sources: VN_CUAV_SIM_001_Competitor_Reverse_Engineering.md (6 competitors)
---

# REVERSE MORPHOLOGICAL CHART — VN-CUAV-SIM-001
## Maritime Counter-UAV/USV Shooting Training Simulation

**Date:** 2026-04-09
**Method:** Reverse MC — map competitor working principles onto SF×Principle grid
**Purpose:** Reveal proven combinations, uncontested gaps, and WX differentiation opportunities

---

## COMPETITOR KEY

| Code | Competitor | Country | Price Range | Focus |
|------|-----------|---------|-------------|-------|
| **ZEN** | Zen Technologies — FAC Simulator | India | $200-500K | Ship handling + weapon (FAC) |
| **INV** | InVeris/Meggitt — FATS 100MIL | USA | $200-500K | Small arms + crew-served (land) |
| **ELB** | Elbit Systems — Naval Simulators | Israel | $1-27M | Full naval ecosystem (RCWS) |
| **SAA** | Saab — Trackfire RWS + Loke C-UAS | Sweden | N/A (weapon, not sim) | Real C-UAS weapon reference |
| **KON** | Kongsberg — NSM Simulator | Norway | $500K+ | Missile/weapon system sim |
| **L3H** | L3Harris — SAGITTARIUS | USA | $100-300K | Small arms sim (US Navy) |

---

## REVERSE MORPHOLOGICAL CHART

### SS1: Weapon Station

| Sub-Function | ZEN | INV | ELB | SAA (ref) | KON | L3H | WX PA-2 | Gap/Opportunity |
|-------------|-----|-----|-----|-----------|-----|-----|---------|----------------|
| **Weapon fidelity** | Replica controls | BlueFire® form-fit-function | Same HW as real RCWS | N/A | Console replica | Modified real weapon | CNC aluminum mockup ±5mm | INV/ELB = gold standard. WX CNC approach is cost-effective middle ground |
| **Recoil mechanism** | Electromech + seat vibration | Compressed air magazine | Electromech (RCWS mount) | N/A | None (missile sim) | Pneumatic blowback | Solenoid ≥8N | ★ **UNCONTESTED: No competitor uses solenoid for HMG sim.** Low-cost but unproven at scale |
| **Weapon traverse** | Servo-driven | Free-moving (laser track) | Powered mount (real RCWS motor) | Full 360° stabilized | Joystick only | Free-moving | Encoder 0.1° + manual | ELB powered mount = highest fidelity. WX manual+encoder = budget option |
| **Multi-weapon** | MMG + RWS (2 types) | 60+ weapons (modular) | 12.7mm + 7.62mm + 40mm | Multi-caliber (12.7-30mm) | Missile + gun | 10+ weapon types | MWI NFC swap (5 types) | ★ **WX MWI NFC = unique approach.** INV uses wired swap, others fixed |
| **Trigger sensing** | Binary (on/off) | Pressure + jerk + cant | Binary | N/A | Binary | Pressure sensing | Binary + single/burst | INV leads (multi-sensor). WX could add pressure sensing in v2 |

### SS2: Visual Display

| Sub-Function | ZEN | INV | ELB | KON | L3H | WX PA-2 | Gap/Opportunity |
|-------------|-----|-----|-----|-----|-----|---------|----------------|
| **Display type** | 360° cylindrical projection | 1-5 flat screen projection | Multi-screen projection | Large screen | 1-3 screen projection | 3-screen 180° projection | **CONSENSUS: Projection wins for group training.** VR only for individual |
| **FOV** | 360° | 60-300° (config) | 240-360° | 120° | 60-180° | 180° | WX 180° = adequate for 1 station. 240°+ for multi-station |
| **Resolution** | HD (1920×1080 × N) | HD per screen | HD-4K | HD | HD | FHD × 3 = 5760×1080 | ★ **GAP: No competitor at 4K×3 for maritime.** Research needed on optimal px density |
| **Ocean rendering** | Proprietary engine | N/A (land-based) | Proprietary naval | Limited | N/A | Unity + custom shader | ★ **GAP: Ocean rendering quality = key differentiator.** No COTS solution proven |
| **Day/night/weather** | Yes (full cycle) | Yes + flashlight mode | Yes + EO/IR sim | Limited | Yes | Yes (3 modes) | Industry standard. WX covers basics. Thermal/FLIR = v2 |
| **Edge blending** | Yes (cylindrical) | Yes (multi-projector) | Yes | N/A | Yes | Needed for 3-screen | Standard technology. WX must implement |

### SS3: Motion Platform

| Sub-Function | ZEN | INV | ELB | KON | L3H | WX PA-2 | Gap/Opportunity |
|-------------|-----|-----|-----|-----|-----|---------|----------------|
| **DOF** | 6-DOF Stewart | None (land sim) | 6-DOF (naval) | None | None | 2-DOF (roll+pitch) | ★ **WX 2-DOF = cost advantage.** 6-DOF = $50-150K. 2-DOF = $1.5-2.5K |
| **Actuator type** | Hydraulic/electric | N/A | Hydraulic | N/A | N/A | Electric linear | WX electric = simpler maintenance than hydraulic |
| **Sea state range** | 1-5+ | N/A | 1-6 | N/A | N/A | 1-3 | WX limited to Sea State 3. Sufficient for C-UAV/USV training |
| **Motion cueing** | Washout algorithm | N/A | Full washout | N/A | N/A | Simplified (direct map) | ★ **GAP: Washout algorithm research needed** for realistic cue within 2-DOF limits |
| **Payload** | 200-500kg | N/A | 200-500kg | N/A | N/A | 130kg | WX lighter payload = smaller actuators = cheaper |

### SS4: Scenario & AI

| Sub-Function | ZEN | INV | ELB | KON | L3H | WX PA-2 | Gap/Opportunity |
|-------------|-----|-----|-----|-----|-----|---------|----------------|
| **Target behavior** | AI adaptive | Scripted + branching video | CGF engine (autonomous AI) | Scripted | Scripted + branching | Pre-scripted (Phase 1) | ★ **GAP: ZEN+ELB use AI behavior. WX = scripted.** Key differentiator to close |
| **Scenario creation** | Database-driven templates | Video authoring + 3D editor | Parameterized generator | Fixed scenarios | Template-based | Template-based | INV video authoring = unique. WX template = adequate for v1 |
| **C-UAV specific** | No (FAC general) | No (land) | Yes (CGF includes UAV) | Yes (Loke reference) | No | Yes (5 UAV + 3 USV profiles) | ★ **WX C-UAV/USV focus = niche advantage.** Only ELB has comparable UAV sim |
| **Swarm simulation** | No | No | Yes (multi-entity CGF) | Yes (Loke handles swarm) | No | Yes (≥4 unit swarm) | ★ **WX swarm = high value.** Most competitors can't simulate UAV swarm |
| **Networking** | Single station | Multi-system (DIS) | DIS/HLA multi-ship | N/A | Networked | 1 instructor → 4 trainees | ELB/INV lead in networking. WX adequate for v1 |

### SS5: Instructor & AAR

| Sub-Function | ZEN | INV | ELB | KON | L3H | WX PA-2 | Gap/Opportunity |
|-------------|-----|-----|-----|-----|-----|---------|----------------|
| **Instructor interface** | AI-enabled IOS | Wireless tablet | Dedicated IOS | Console | PC-based | PC-based instructor stn | INV wireless tablet = innovation. WX PC = adequate |
| **Auto coaching** | Yes (AI-driven) | Yes (Automatic Coaching patent) | TNA-based | No | Limited | No (Phase 1) → AI (Phase 2) | ★ **GAP: INV patented auto-coaching.** WX should design own algorithm |
| **AAR** | Data-driven reports | 3D replay + shot analysis | Performance assessment | Basic | Shot replay | Aim trace + impact replay | WX AAR covers basics. 3D replay = v2 enhancement |
| **Student database** | Yes (fleet analytics) | Yes (career tracking) | Yes (TNA integration) | No | Basic | Yes (session + trainee log) | Industry standard. WX covers this |
| **Scoring method** | AI scoring | Laser/IR hit detection | Sensor-based | N/A | Laser detection | Ray-trace ballistic calc | ★ **WX ray-trace = unique.** No physical laser/sensor needed. Pure software |

---

## ANALYSIS SUMMARY

### Proven Combinations (≥3 competitors use)
| Sub-Function | Proven Choice | Confidence |
|-------------|--------------|------------|
| Display type | Multi-screen projection (not VR) | HIGH — 5/5 competitors use projection |
| Weapon fidelity | Form-fit-function replica (not generic joystick) | HIGH — all competitors invest in realism |
| AAR | Shot-by-shot replay with performance database | HIGH — industry standard |
| Scenario library | Pre-built + customizable templates | HIGH — all offer this |

### Uncontested Gaps (WX unique or <2 competitors)
| Gap | WX Approach | Competitor Coverage | Opportunity |
|-----|-----------|-------------------|-------------|
| **MWI NFC weapon swap** | NFC auto-detect, <5min swap | INV: wired, others: fixed | ★★★ Revenue multiplier (5 weapon modules) |
| **Solenoid recoil** | Low-cost solenoid ≥8N | None use solenoid (pneumatic or electromech) | ★★ Cost advantage, validate transfer first |
| **C-UAV/USV focus** | Dedicated UAV+USV scenarios | Only ELB has UAV in CGF | ★★★ Niche = market entry |
| **Swarm simulation** | ≥4 unit UAV swarm | Only ELB (CGF) + Saab (Loke ref) | ★★★ High value for HQ VN |
| **2-DOF motion at $2K** | Electric 2-DOF, 130kg | All naval sims use 6-DOF ($50K+) | ★★ Cost disruptor if training transfer validated |
| **Ray-trace scoring** | Pure software ballistic calc | Others use laser/IR physical detection | ★★ Zero HW cost for scoring |

### Competitive Blind Spots (no competitor addresses)
| Blind Spot | Opportunity for WX |
|-----------|-------------------|
| Live-sim hybrid (LOMAH + sim in same AAR) | WX has BB-01 LOMAH → unique integration |
| Soviet/VN weapon mockups (DSHK, NSV, KPVT, ZU-23-2) | All competitors Western weapons. WX = only source |
| Vietnamese climate/doctrine scenarios | Localization = barrier to entry for Western competitors |
| $50-70K price point for naval sim | All competitors $200K+. WX disrupts on price |

---

## MORPHO MATRIX IMPLICATIONS

For `/morpho` Step 1 — use this Reverse MC to inform option selection:

| Sub-Function | Proven (adopt) | Differentiate (WX unique) | Avoid |
|-------------|----------------|--------------------------|-------|
| Display | Projection (consensus) | 180° 3-screen (cost-optimized) | VR headset (motion sickness + no instructor view) |
| Recoil | Needs validation [L5] | Solenoid if validated | Hydraulic (cost) |
| Motion | 2-DOF electric (cost) | Simplified washout | 6-DOF (cost prohibitive) |
| Target AI | Behavior trees (ELB/ZEN proven) | C-UAV/USV specific behavior | Fixed scripted only |
| Scoring | Ray-trace (WX unique, zero HW) | - | Laser detection (adds HW cost) |
| Weapon swap | MWI NFC (WX unique) | 5 VN weapon modules | Single weapon (limits revenue) |

---

*Reverse Morphological Chart v1.0 — VN-CUAV-SIM-001*
*Source: 6 competitors analyzed via D-M-I-R 4-layer RE*
*Method: Hülagü & Timur 2024 + P&B §3.2 Existing Systems Analysis*
