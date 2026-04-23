---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE COMPARE Mode C1 — OSINT Parity Gathering
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode compare
project: VN-CUAV-SIM-001
---

# COMPARE C1: OSINT PARITY DOSSIER — VN-CUAV-SIM-001
## Maritime Counter-UAV/USV Shooting Training Simulation

**Date:** 2026-04-20
**Purpose:** Competitive benchmarking for Phase 3 embodiment decisions (NOT pre-RE selection)
**Existing baseline:** Reverse Morphological Chart v1.0 (6 competitors: ZEN, INV, ELB, SAA, KON, L3H)

---

## CANDIDATE RECLASSIFICATION (CEO Input vs OSINT Reality)

⚠️ **CRITICAL FINDING:** 3 of 9 candidates are NOT what they appear from initial description:

| # | System | CEO Classification | OSINT Reality | Action |
|---|--------|-------------------|---------------|--------|
| 4 | VSHOREZ | C-UAS virtual sim ($20-50K) | **SOFTWARE-ONLY** laser gun trainer for home/classroom. Min spec: 1.9GHz 4-core, 4GB RAM. Consumer-grade, NOT military hardware system | **RECLASSIFY → Tier C reference only** |
| 7 | Leonardo DRS MEP | Live C-UAS system ($1M+) | **REAL WEAPON SYSTEM** — autonomous C-UAS MEP for USVs (≥14ft). RF/EO-IR/EW/kinetic. NOT a simulator at all | **RECLASSIFY → Threat reference (what WX trains AGAINST)** |
| 8 | Meteksan SIMETRAN | Multi-sim ($100-300K) | **BRAND UMBRELLA** for DCS (Damage Control) + FTS (Fire Fighting) + HUET (Helicopter Underwater Escape). NO weapon gunnery sim found | **RECLASSIFY → Partial relevance (naval training ecosystem, not shooting sim)** |

**Updated candidate matrix:**

| # | System | Manufacturer | Actual Type | WX Relevance | Depth |
|---|--------|-------------|-------------|-------------|-------|
| 1 | FATS 100MIL | InVeris (ex-Meggitt) | Virtual small arms trainer | HIGH — market leader, ITAR export-friendly | UPDATE |
| 2 | Zen AWeSim | Zen Technologies | Virtual small arms + crew weapons | HIGH — Indian, ITAR-free, similar market | UPDATE |
| 3 | Zen FAC Sim | Zen Technologies | AI-enabled naval FAC simulator | **VERY HIGH** — closest to WX by mission | DEEP |
| 5 | MVRsim FPV-UAV | MVRsimulation (US) | FPV drone operator trainer | MEDIUM — different paradigm (drone pilot, not gunner) | DEEP |
| 6 | Saab GCIT | Saab (Sweden) | VR indoor trainer (Carl Gustaf) | MEDIUM — VR approach, high-fidelity reference | UPDATE |
| 9 | Elbit RCWS Trainer | Elbit Systems | RCWS embedded training | HIGH — real weapon station trainer | UPDATE |
| 4 | VSHOREZ | shooting-soft.com | Consumer SW laser trainer | LOW — software pricing reference only | REFERENCE |
| 7 | Leonardo DRS M-MEP | Leonardo DRS (US) | Real C-UAS weapon on USV | REFERENCE — threat model for WX scenarios | REFERENCE |
| 8 | Meteksan SIMETRAN | Meteksan (Turkey) | Naval DCS/FTS/HUET training | LOW — naval training brand, no shooting sim | REFERENCE |

---

## DEEP CANDIDATES — Full OSINT

### DEEP-1: Zen Technologies — FAC Simulator (Naval Gunnery)

**Country:** India | **ITAR:** FREE | **Partnership potential:** HIGH

**Product overview:**
- India's FIRST AI-enabled Fast Attack Craft (FAC) Simulator
- Developed by subsidiary Applied Research International (ARI) Simulation
- Training: ship handling + combat tactics + navigation + weapon engagements
- Weapons: medium machine guns + remote weapon stations, WITH recoil effects + fire-control systems
- AI-enabled Instructor Operator Station — adaptive training based on proficiency level

**Technical details (from OSINT):**
| Parameter | Value | Source | Confidence |
|-----------|-------|--------|:----------:|
| Weapon types | MMG + RWS | zentechnologies.com | H |
| Recoil sim | Electromechanical + seat vibration | Reverse MC v1.0 | H |
| Display | 360° cylindrical projection | Reverse MC v1.0 | H |
| AI coaching | Yes — adaptive IOS | idrw.org | M |
| Maritime scenarios | Yes — FAC mission profiles | zentechnologies.com | H |
| Ship motion sim | Yes (integrated with FAC) | Inferred | M |
| Export customers | Indian Navy (primary) | Public | H |
| Price range | $200-500K (estimate) | Industry benchmark | L |

**Key contracts:**
- ₹108 crore (~$13M) MoD contract for Tank Crew Gunnery Simulators (T-72, T-90)
- Indian Navy FAC simulator (undisclosed value)
- Patent secured for T-90 simulator technology

**WX comparison:**
| Dimension | Zen FAC Sim | WX CUAV-SIM LITE | WX Advantage? |
|-----------|-------------|------------------|---------------|
| Mission focus | FAC ship handling + gunnery | C-UAV/USV shooting | WX: niche C-UAS focus |
| Weapon fidelity | Electromech recoil | Solenoid recoil | Zen: higher fidelity |
| AI coaching | Yes (adaptive IOS) | ACH 7-layer planned | WX: deeper ACH roadmap |
| Display | 360° cylindrical | 180° 3-screen | Zen: wider FOV |
| Price | $200-500K | $50-70K | **WX: 3-7× cheaper** |
| ITAR | Free (Indian) | Free (Vietnamese) | Parity |
| C-UAS scenarios | Not primary focus | Primary focus | **WX: mission-specific** |
| MWI multi-weapon | 2 types (MMG+RWS) | 5 types (NFC swap) | **WX: more versatile** |

**Strategic insight:** Zen is the closest competitor by mission AND market (ITAR-free, developing country, defense). But Zen prices 3-7× higher and doesn't focus on C-UAS. WX's $50-70K C-UAS niche is UNCONTESTED in their portfolio.

---

### DEEP-2: MVRsimulation — FPV-UAV Simulator

**Country:** USA | **ITAR:** YES (likely EAR controlled) | **Partnership potential:** LOW

**Product overview:**
- First Person View UAV Simulator for FPV attack drones + ISR quadcopters
- Combines VRSG (Virtual Reality Scene Generator) + Bihrle flight model
- NOT a shooting trainer — trains DRONE OPERATORS (attack side, not defense side)
- Networked with MJAT, MUSE/AFSERS, DJFT, PJFT (US military ecosystem)
- FPV Team Trainer (2025): scalable networked multi-operator + IOS

**Technical details:**
| Parameter | Value | Source | Confidence |
|-----------|-------|--------|:----------:|
| Platform | Laptop + handheld + ATAK + 2D goggles | mvrsimulation.com | H |
| Drone types | FPV attack (RPG-7 munition) OR RQ-28A ISR | mvrsimulation.com | H |
| Flight model | Bihrle Applied Research (high fidelity) | mvrsimulation.com | H |
| Visual engine | VRSG (proprietary) | mvrsimulation.com | H |
| Networking | DIS/HLA compatible, LSCO exercises | mvrsimulation.com | H |
| EW degradation | Simulated (GPS denial, comms jamming) | CEO input | M |
| Team training | FPV Team Trainer (2025, scalable) | janes.com | H |
| Price range | $50-100K (estimate) | CEO input | L |

**WX comparison:**
| Dimension | MVRsim FPV-UAV | WX CUAV-SIM | Relevance |
|-----------|---------------|-------------|-----------|
| Paradigm | Train drone PILOT | Train GUNNER vs drone | **Complementary, not competing** |
| Threat model | Accurate FPV drone behavior | Needs FPV threat profiles | **MVRsim = reference for WX threat AI** |
| EW simulation | GPS/comms degradation | Not in LITE scope | Future CORTEX feature |
| ITAR | Yes (US) | No | WX advantage for VN/ASEAN |

**Strategic insight:** MVRsim is NOT a competitor — they train the ATTACKER (drone pilot), WX trains the DEFENDER (gunner). But MVRsim's FPV flight model and behavior are exactly the threat profiles WX needs to simulate. Their FPV evasion patterns (BT architecture from D4 research) should inform WX's UAV AI behavior models.

---

### DEEP-3: VSHOREZ (shooting-soft.com) → RECLASSIFIED

**Country:** Unknown (likely Eastern Europe) | **ITAR:** N/A | **Partnership potential:** NONE

**OSINT finding:** This is a **consumer-grade laser gun training SOFTWARE**, not a military simulator system.

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|:----------:|
| Type | Software-only (no hardware) | shooting-soft.com | H |
| Min specs | 1.9GHz 4-core, 4GB RAM, Win 8+ | shooting-soft.com | H |
| Resolution | Up to 5K supported | shooting-soft.com | H |
| Weapons | Laser guns (iMarksman, Laser Ammo compatible) | shooting-soft.com | H |
| Use cases | Home practice, IPSC/USPSA, bodyguard training | shooting-soft.com | H |
| C-UAS mode | Listed in military section, details sparse | shooting-soft.com | L |
| Price | Software license (likely <$5K) | Inferred | L |

**Verdict:** NOT a military-grade system. Listed C-UAS scenarios appear to be video-overlay exercises on flat screen, not immersive simulation. **Exclude from MCDA.** Retain only as software pricing reference — shows floor price for basic virtual shooting software.

---

### DEEP-4: Meteksan SIMETRAN → RECLASSIFIED

**Country:** Turkey | **ITAR:** FREE | **Partnership potential:** MEDIUM (brand, not product)

**OSINT finding:** SIMETRAN is a **brand umbrella** launched at IDEF 2025, consolidating 3 naval training systems:

| System | Purpose | Weapon Gunnery? |
|--------|---------|:---------------:|
| DCS (Damage Control Simulator) | Flooding + structural damage management | NO |
| FTS (Fire Fighting Training Simulator) | Onboard fire response | NO |
| HUET (Helicopter Underwater Escape Trainer) | Emergency sea landing survival | NO |

**No weapon gunnery or shooting simulation found under SIMETRAN brand.**

**However, Meteksan broader portfolio includes:**
- KAPAN (radar systems)
- AGNOSIS (naval platform simulators — potentially includes weapon training)
- MERT (electronic warfare training — PELIKAN EW system for Turkish Navy)

**Strategic insight:** Meteksan is relevant as a Turkish defense training company model (ITAR-free, NATO-adjacent, export-successful), but SIMETRAN specifically does NOT compete with WX. If CEO wants Turkish competitor intel, search should target **Havelsan** or **Aselsan** shooting simulators instead.

---

## UPDATE CANDIDATES — Refresh from existing Reverse MC

### UPDATE-1: InVeris FATS 100MIL (= INV in Reverse MC)

**New findings since Reverse MC v1.0:**
| Update | Detail | Impact on WX |
|--------|--------|-------------|
| Brand | Meggitt Training → **InVeris Training Solutions** (rebranded) | Name change only |
| FATS 100P | New portable variant — full marksmanship + judgmental training in compact form | WX MOBILE variant competitor |
| EST II / ISMT | Won US Army EST II + USMC ISMT programs of record | Validates market but ITAR-locked |
| Export | "Export-friendly" version exists | Still US-origin, complex licensing |
| C-UAS | **No C-UAS scenarios found** | **WX C-UAS niche uncontested** |
| Coaching | Automatic coaching + analytics | WX ACH more ambitious |
| Weapons | 60+ weapons (BlueFire® form-fit-function) | Gold standard for weapon fidelity |
| Price | $200-500K (unchanged) | WX 3-7× cheaper |

**Delta vs Reverse MC:** Minimal. InVeris remains land-focused small arms trainer, no maritime or C-UAS pivot detected. WX's maritime C-UAS niche remains clear water.

### UPDATE-2: Zen AWeSim (= ZEN in Reverse MC)

**New findings:**
| Update | Detail | Impact on WX |
|--------|--------|-------------|
| AWeSim scope | Small arms ONLY (recruits → Special Forces). Up to 10 lanes | Not crew-served weapons |
| Anti-drone | Zen has CUAS as SEPARATE product line (real kinetic/net/jamming) | Sim + real CUAS = potential bundled offering |
| Wireless | AWeSim available in wireless config | Standard for new systems |
| Maritime | **AWeSim has NO maritime scenarios** | **WX maritime exclusive** |

**Delta vs Reverse MC:** AWeSim is small arms (rifles/pistols), NOT crew-served weapons. The Zen FAC Sim (DEEP-1 above) is the actual naval competitor. AWeSim and FAC Sim are separate products.

### UPDATE-3: Saab GCIT (Ground Combat Indoor Trainer)

**New findings:**
| Update | Detail | Impact on WX |
|--------|--------|-------------|
| Full name | Ground Combat Indoor Trainer (GCIT) — not just Carl Gustaf | Broader scope |
| VR headsets | HTC Vive Pro + Varjo | Premium VR approach |
| Weapon replica | Built from ORIGINAL Carl Gustaf blueprints | Highest fidelity possible |
| Setup time | <15 minutes, any location | Portable advantage |
| Ballistics | ALL Carl Gustaf ammo types, realistic trajectories | Reference for ballistic fidelity |
| UK delivery | CG M4 IDT delivered to UK Armed Forces | Export success proof |
| Price range | $150-300K (estimate) | 2-4× WX |
| Maritime | **NO — ground combat only** | **WX maritime exclusive** |
| C-UAS | **NO** | **WX niche clear** |

**Strategic insight:** Saab GCIT is the gold standard for VR weapon training fidelity. Key learning for WX: weapon replicas from original blueprints + precise ballistic simulation = high perceived value. WX should invest in weapon mockup quality (SS1 already uses CNC aluminum — good direction).

### UPDATE-4: Elbit RCWS Trainer (= ELB in Reverse MC)

**New findings:**
| Update | Detail | Impact on WX |
|--------|--------|-------------|
| RCWS family | 3rd-gen, dual-axis stabilized, 7.62mm to 40mm AGL | Full weapon station range |
| Embedded training | Training mode built INTO real RCWS (not separate sim) | Different paradigm than WX |
| Naval RCWS | Specific naval variant exists | Potential reference for WX weapon station |
| Price | $200-400K for sim; real RCWS = $500K+ | WX 3-6× cheaper |
| Training center | Complete training centers for platform operators including gunners | Premium offering |
| C-UAS | **RCWS used for C-UAS engagements in practice** | Elbit RCWS = real C-UAS weapon, not sim |

**Strategic insight:** Elbit's approach is "embedded training" — same hardware for live AND simulation. WX's approach is dedicated standalone trainer. Different philosophy. Elbit serves customers who already OWN the RCWS. WX serves customers who CANNOT AFFORD the real weapon system for training.

---

## REFERENCE CANDIDATES

### REF-1: Leonardo DRS Maritime MEP

**NOT a simulator.** Real autonomous C-UAS weapon system for USVs.

| Parameter | Value | Relevance to WX |
|-----------|-------|-----------------|
| Platform | USVs ≥14 feet | WX simulates threats TO these vessels |
| Sensors | BlackLab RF + STAG EO/IR + AI fusion | Reference for WX scenario accuracy |
| Effectors | RF jamming + GPS spoofing + 4G/5G EW + kinetic | Threat model for WX C-UAS training |
| Environment | Saltwater-resistant, shock-isolated | WX needs similar for shipboard deployment |
| Status | First open-water demo completed (2025) | Emerging real-world C-UAS capability |

**WX use:** Leonardo DRS MEP defines what REAL C-UAS engagement looks like. WX scenarios should simulate defending against threats that systems like MEP would engage. Also validates that maritime C-UAS is a GROWING market need.

### REF-2: Meteksan SIMETRAN

See DEEP-4 above. Naval training brand (DCS/FTS/HUET), no weapon gunnery.

### REF-3: VSHOREZ

See DEEP-3 above. Consumer software, not military-grade.

---

## SPECIFICATION CONFIDENCE MATRIX (Parity Check)

| Parameter | Zen FAC | MVRsim FPV | FATS 100MIL | Zen AWeSim | Saab GCIT | Elbit RCWS |
|-----------|:-------:|:----------:|:-----------:|:----------:|:---------:|:----------:|
| Display type | 90% | 95% | 85% | 80% | 90% | 60% |
| FOV | 90% | 95% | 80% | 75% | 90% | 50% |
| Weapon types | 85% | 95% | 90% | 80% | 95% | 70% |
| Recoil mechanism | 80% | N/A | 85% | 60% | 90% | 50% |
| AI/Coaching | 80% | 70% | 75% | 60% | 70% | 40% |
| Networking | 60% | 90% | 70% | 60% | 70% | 50% |
| C-UAS capability | 40% | 70% | 30% | 30% | 20% | 40% |
| Maritime scenarios | 70% | 50% | 20% | 20% | 10% | 40% |
| Price | 30% | 40% | 40% | 35% | 35% | 30% |
| Export customers | 70% | 80% | 80% | 60% | 85% | 60% |
| **Avg coverage** | **70%** | **77%** | **66%** | **55%** | **66%** | **49%** |

**Parity assessment:**
- MVRsim: best coverage (US company, most public info)
- Zen FAC: good coverage, AI-enabled features poorly documented
- Elbit: weakest coverage (Israeli defense = limited public info)
- FATS/Saab: moderate, well-known products
- AWeSim: moderate, small arms not deeply relevant

**Parity gaps to close (if CEO wants):**
- Elbit RCWS embedded training: needs deeper search or trade show contact
- Zen FAC AI coaching specifics: needs Zen Technologies direct contact
- All pricing: industry estimates only, no firm quotes

---

## C1 KEY FINDINGS SUMMARY

### 1. WX's C-UAS Maritime Niche is UNCONTESTED
No competitor in this set has a dedicated maritime counter-UAV/USV shooting trainer at $50-70K. The closest (Zen FAC) costs 3-7× more and doesn't focus on C-UAS. FATS, Saab, Elbit = no C-UAS. MVRsim trains drone pilots, not gunners.

### 2. Three Candidates Were Misclassified
- VSHOREZ = consumer software (exclude from MCDA)
- Leonardo DRS MEP = real weapon system (threat reference)
- Meteksan SIMETRAN = naval training brand without shooting sim (exclude from MCDA)

### 3. Zen FAC Sim is the Primary Competitor
Indian, ITAR-free, naval focus, AI-enabled, recoil-simulating. But priced 3-7× higher with NO C-UAS focus. WX differentiators: price, C-UAS niche, MWI multi-weapon, ACH depth.

### 4. MVRsim is a Knowledge Source, Not a Competitor
FPV drone flight model + behavior patterns = exactly what WX needs for UAV threat AI. Different paradigm (train attacker vs train defender) = complementary.

### 5. Weapon Fidelity Benchmark: Saab GCIT
Weapon replicas from original blueprints + all ammo type ballistics = gold standard. WX CNC aluminum approach is cost-effective but should aim for ≥70% perceived fidelity of Saab.

### 6. Embedded Training vs Dedicated Trainer
Elbit embeds training into real RCWS. WX builds dedicated trainer for those who CAN'T AFFORD the real system. Different customer segments. WX's approach = larger addressable market.

---

## UPDATED MCDA CANDIDATE LIST (for C2-C4)

Based on C1 findings, propose revised candidate list for full COMPARE evaluation:

| # | System | Proceed to C2? | Rationale |
|---|--------|:--------------:|-----------|
| 3 | Zen FAC Sim | **YES** | Primary competitor, closest match |
| 5 | MVRsim FPV-UAV | **YES** | Different paradigm but valuable benchmarking |
| 1 | FATS 100MIL | **YES** | Market leader, pricing/feature benchmark |
| 6 | Saab GCIT | **YES** | Fidelity benchmark, VR approach reference |
| 9 | Elbit RCWS Trainer | **YES** | Embedded training paradigm reference |
| 2 | Zen AWeSim | **NO** | Small arms only, FAC Sim covers Zen |
| 4 | VSHOREZ | **NO** | Consumer software, not comparable |
| 7 | Leonardo DRS MEP | **NO** | Not a simulator |
| 8 | Meteksan SIMETRAN | **NO** | No shooting sim product |

**Recommended C2 list: 5 candidates** (Zen FAC, MVRsim, FATS, Saab GCIT, Elbit RCWS)

---

## SOURCES

- [Zen Technologies — zentechnologies.com](https://www.zentechnologies.com/)
- [Zen FAC Simulator — idrw.org](https://idrw.org/zen-technologies-unveils-indias-first-ai-enabled-fast-attack-craft-simulator-revolutionizing-naval-training/)
- [MVRsimulation FPV-UAV — mvrsimulation.com](https://www.mvrsimulation.com/products/fpv-uav-simulator.html)
- [MVRsim FPV Team Trainer — janes.com](https://www.janes.com/osint-insights/defence-news/c4isr/mvrsimulation-launches-new-fpv-uav-team-trainer)
- [InVeris FATS 100MIL — inveristraining.com](https://www.inveristraining.com/virtual-training/military-virtual-tactical-small-arms-training-marksmanship/fats-100mil/)
- [Saab GCIT — saab.com](https://www.saab.com/products/ground-combat-indoor-trainer)
- [Saab CG M4 IDT UK delivery — defence-industry.eu](https://defence-industry.eu/saab-delivers-carl-gustaf-m4-virtual-indoor-trainers-to-uk-armed-forces/)
- [Elbit RCWS — elbitsystems.com](https://www.elbitsystems.com/land/combat-vehicle-systems/weapon-stations-turrets/rcws)
- [Leonardo DRS M-MEP — leonardodrs.com](https://www.leonardodrs.com/what-we-do/products-and-services/maritime-mission-equipment-package-mmep/)
- [Meteksan SIMETRAN — navalnews.com](https://www.navalnews.com/event-news/idef-2025/2025/07/simetran-a-new-global-brand-for-simulation-and-training)
- [VSHOREZ — shooting-soft.com](https://shooting-soft.com/)
- [Existing baseline: VN_CUAV_SIM_001_Reverse_Morphological_Chart_v1.0.md](../VN_CUAV_SIM_001_Reverse_Morphological_Chart_v1.0.md)
