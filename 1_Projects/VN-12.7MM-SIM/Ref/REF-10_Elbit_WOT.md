---
created: 2026-03-23
type: competitor-reverse-engineering
product: "Platforms and Weapon Operators Training Systems (WOT)"
company: "Elbit Systems"
country: "Israel"
status: active
---

# REF-10: Elbit Systems — Platforms and Weapon Operators Training (WOT) — Reverse Engineering Analysis

## 1. PRODUCT OVERVIEW

- **Company:** Elbit Systems Ltd. (Land Division & Naval Division)
- **Product name:** Platforms and Weapon Operators Training Systems (WOT) — includes the Naval Tactical Center (NTC) / Close-Range Weapons Trainer (CRWT) for naval applications
- **Country:** Israel
- **Target market:** Ground forces, naval forces, special operations — worldwide export market. Primary customers: NATO allies, UK MoD, Israel Defense Forces, Asia-Pacific navies.
- **Weapons simulated:** Tanks (Challenger 3, Boxer AFV, Merkava), AFVs, remote controlled weapon stations (RCWS), crew-served heavy weapons, forward observer systems, close-range naval weapons (20–40 mm cannon, heavy machine guns on naval vessels)
- **Naval / Land / Both:** Both — WOT product line spans land platforms; naval CRWT is a dedicated naval sub-system
- **In service since:** Land platform trainers operational since ~2000s; JFST mobile delivered 2024 (UK); Naval CRWT operational with multiple navies (exact year not publicly available)
- **Known customers:**
  - UK Ministry of Defence — £166 million Future Naval Training Program (Royal Navy); JFST for British Army; Ground Manoeuvre Synthetic Trainer (GMST) for Challenger 3 and Boxer
  - Israeli Defense Forces (IDF)
  - Unnamed Asia-Pacific navies (per Elbit public statements)
  - Multiple NATO member states (unspecified)
  - Over 17 air forces (EHUD air system — related but separate)

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Recoil System

- **Platform simulators:** Independent Tank Crew Trainers (ITCT), Appended Tank Crew Trainers (ATCT), Embedded Tank Crew Trainers (ETCT) all provide physical motion feedback
- **Driving simulators:** Full-motion cabin replicas; Roll-In Roll-Out (RIRO) design to support multiple platform types
- **Naval CRWT:** N/A — specific recoil actuator details not publicly available. Likely electromechanical impulse actuator consistent with Elbit's land platform approach, applied to deck-mounted weapon replicas
- **ATCT:** Connects directly to actual combat vehicle — uses real turret hardware for maximum fidelity
- **ITCT/ETCT:** Simulated turret control and fire computer; physical recoil fidelity level not specified publicly
- **Assessment:** Elbit prioritizes high-fidelity physical cabin replica over recoil impulse authenticity in public documentation

### 2.2 Visual System

- **JFST (Joint Fires Synthetic Trainer):** 285° double-stacked immersive visual display; troops fully immersed within 15 minutes
- **Platform simulators (land):** Wide-projection, high-end cabin replica displays — exact resolution/FOV not published
- **ARTIST (Augmented Reality Integrated Training System):** Combines Live + Embedded + Augmented Reality; terrain analysis, communication, data-link and control for crew and formation-level training
- **Naval NTC/CRWT:** Physics-based simulation with "intuitive graphic user interface (GUI)"; COTS PC hardware base; exact display configuration not publicly specified
- **LVC capability:** Live Virtual Constructive architecture — trainees can interact with live forces, virtual entities, and constructive simulations simultaneously
- **Threat emulation:** Sophisticated threat emulation for air defense, surface, and subsurface threats

### 2.3 Ballistic Model

- **Description:** Physics-based weapon simulation models and algorithms embedded in NTC software; "five levels of damage" representation against targets (confirmed for JFST)
- **Approach:** Proprietary high-fidelity ballistic engine — details not publicly released
- **Naval weapons:** Close-range weapons ballistics (cannon, HMG) modeled within NTC simulation software
- **Kill/hit assessment:** Real-time kill notification and removal (confirmed for air combat EHUD — same architecture applied to surface systems)
- **No-drop weapon scoring:** Confirmed for air systems; equivalent implemented for surface weapon training
- **Details:** N/A — proprietary, not publicly available

### 2.4 Tracking / Sensing

- **Naval NTC:** Physics-based motion sensors and weapon simulation models
- **ESM/Radar/EO-IR:** Included within NTC for tactical situational awareness training
- **Computer Generated Forces (CGF):** Advanced autonomous CGF for threat generation and scenario injection
- **Crew tracking:** AI-driven monitoring in newer systems (post-2023 upgrades); behavioral performance analytics
- **Instrumentation:** Data-link based instrumentation for LVC exercises (derived from EHUD patented data-link protocol)
- **Scoring:** Automated hit/miss, engagement sequence, and crew response time recording

### 2.5 Instructor Station (IOS)

- **GUI:** Intuitive graphic user interface running on COTS PC hardware
- **Scenario control:** Real-time scenario injection, threat activation, environmental parameter control (weather, visibility, EW)
- **CGF management:** Instructor controls autonomous CGF behavior and density
- **AAR (After Action Review):** Full session replay; "five levels of damage" scoring review
- **Networked exercise control:** NTC modules can operate standalone or networked for large-scale exercises
- **Scalability:** Modular — can integrate NTT (naval tactical trainer) + navigation simulator + CRWT into one combined exercise

### 2.6 Physical Specifications

- **Form factor:** Land trainers — fixed installation or mobile (JFST Mobile delivered 2024); naval CRWT — shore-based training center
- **Hardware base:** COTS PC hardware (explicitly stated for NTC)
- **Modularity:** High — RIRO (Roll-In Roll-Out) for land platform trainers enables rapid reconfiguration for multiple platforms
- **Dimensions/weight:** N/A — not publicly available
- **Power requirements:** N/A — not publicly available
- **Environmental ratings:** N/A — not publicly available

### 2.7 AI / Adaptive Features

- **ARTIST system:** Integrates live, embedded, and augmented reality — adaptive scenario overlay on real terrain
- **CGF behavior:** Advanced autonomous CGF — responds dynamically to trainee actions
- **Post-2023 upgrades (UK programs):** AI-driven performance monitoring added to JFST; fatigue and error flagging
- **LVC data fusion:** Patented data-link protocol (from EHUD lineage) enables real-time fusion of live and virtual entities — unlimited participants
- **Adaptive difficulty:** Implied by CGF architecture; scenario difficulty modulated by instructor via IOS
- **No explicit ML-based adaptive IOS publicly documented** for the WOT product line (as distinct from JFST)

### 2.8 Crew Training

- **Roles trained:** Commander, gunner, driver, loader (land); naval weapons operator, CRWT operator, tactical navigator
- **Training levels:** Undergraduate (basic crew), graduate (crew conversion/continuation), team and platoon-level collective training
- **Scenarios:** Gunnery engagement, maneuvering, forward observer coordination, JTAC, close-range naval defense
- **Multi-crew:** Yes — full crew simulation with intercommunication
- **Collective training:** Formation and platoon-level exercises supported
- **Live integration:** LVC architecture allows mixing with real vehicles/vessels

---

## 3. ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│              ELBIT WOT SYSTEM ARCHITECTURE                  │
├─────────────────────┬───────────────────────────────────────┤
│  TRAINEE STATIONS   │        SUPPORT SYSTEMS                │
│                     │                                       │
│  ┌───────────────┐  │  ┌──────────────────────────────────┐ │
│  │ ITCT/ATCT/ETCT│  │  │  IOS (Instructor Operator Sta.) │ │
│  │ Tank Trainer  │  │  │  - COTS PC Hardware              │ │
│  │ - Full cabin  │  │  │  - GUI scenario control          │ │
│  │ - RIRO design │  │  │  - CGF management                │ │
│  └───────┬───────┘  │  │  - AAR replay                    │ │
│          │          │  └──────────────┬───────────────────┘ │
│  ┌───────▼───────┐  │                 │                     │
│  │ Naval CRWT    │  │  ┌──────────────▼───────────────────┐ │
│  │ Deck weapon   │  │  │  SIMULATION ENGINE (Proprietary) │ │
│  │ replica +     │  │  │  - Physics-based ballistics      │ │
│  │ visual disp.  │  │  │  - Weapon simulation models      │ │
│  └───────┬───────┘  │  │  - 5-level damage assessment     │ │
│          │          │  │  - Advanced CGF                   │ │
│  ┌───────▼───────┐  │  └──────────────┬───────────────────┘ │
│  │ ARTIST AR     │  │                 │                     │
│  │ Overlay       │  │  ┌──────────────▼───────────────────┐ │
│  │ - Live+Virtual│  │  │  LVC DATA-LINK (EHUD Protocol)   │ │
│  │ - Terrain AR  │  │  │  - Unlimited live participants   │ │
│  └───────────────┘  │  │  - Real-time entity fusion       │ │
│                     │  └──────────────────────────────────┘ │
└─────────────────────┴───────────────────────────────────────┘
```

---

## 4. STRENGTHS (vs VN-12.7MM-SIM)

| # | Strength | Implication for VN-12.7MM-SIM |
|---|----------|-------------------------------|
| S1 | Full LVC architecture — trainees can train with live platforms simultaneously | VN-12.7MM-SIM is standalone; LVC is out of scope for Phase 1 but should be architected as future upgrade path |
| S2 | RIRO (Roll-In Roll-Out) modular design — one simulator supports multiple platform types | VN should consider multi-weapon-platform modularity from Phase 2 onwards |
| S3 | ARTIST AR overlay — combines real terrain/environment with virtual threats | High-cost differentiator; not relevant for VN-12.7MM-SIM Phase 1 |
| S4 | Established global supply chain, COTS hardware base = low maintenance burden | VN-12.7MM-SIM should also target COTS hardware to reduce lifecycle cost |
| S5 | 285° FOV visual (JFST) — highly immersive for situational awareness training | VN-12.7MM-SIM uses container-based setup; wider FOV would improve training transfer |
| S6 | UK MoD £166M contract — validated at major defense procurement scale | Benchmark for quality and reliability expectations in NATO-standard procurement |

---

## 5. WEAKNESSES (vs VN-12.7MM-SIM)

| # | Weakness | Opportunity for VN-12.7MM-SIM |
|---|----------|-------------------------------|
| W1 | No publicly documented specific recoil impulse fidelity for the HMG/CRWT — recoil may be de-emphasized relative to visual fidelity | VN-12.7MM-SIM differentiates on physical recoil fidelity as primary training transfer mechanism |
| W2 | System complexity and cost prohibitive for ASEAN/developing market navies — £166M contract scale | VN-12.7MM-SIM targets Vietnamese military price point — 5–10× lower cost |
| W3 | No explicit AI-adaptive IOS for the WOT/naval line (only JFST confirmed with AI monitoring) | Zen's FAC has explicit AI-IOS — VN-12.7MM-SIM can leapfrog Elbit here |
| W4 | Black-box proprietary engine — customer dependent on Elbit for updates, scenarios | VN-12.7MM-SIM with open architecture gives VNPLA full sovereignty over content |
| W5 | Primarily NATO-centric — scenario library not optimized for Southeast Asian maritime context | VN can build scenario library tailored to VN coastal threat environment |
| W6 | No public evidence of specific 12.7mm / DShK training module | Direct gap VN-12.7MM-SIM fills |

---

## 6. KEY TECHNOLOGIES TO LEARN FROM

| Tech | Source | Learning |
|------|--------|---------|
| RIRO (Roll-In Roll-Out) modularity | ITCT/ATCT design | Design VN-12.7MM-SIM frame/mount to be reconfigurable for different heavy weapon types (12.7mm → 14.5mm → 20mm) with minimal re-engineering |
| 5-level damage assessment | JFST ballistic model | Implement equivalent scoring rubric: clean miss → graze → hit → disable → kill, for post-exercise debrief |
| Physics-based motion sensor integration | NTC architecture | Sense trainee body motion/posture as part of training assessment — body lean, trigger control, target tracking quality |
| LVC data-link as future upgrade hook | EHUD protocol architecture | Even if VN-12.7MM-SIM is standalone in Phase 1, define ICD for future LVC integration from the start |
| COTS PC hardware as simulation backbone | NTC, all Elbit products | Avoid proprietary simulation computers — standard x86 hardware with open APIs |

---

## 7. FTO RISK

| Risk | Details |
|------|---------|
| Patents | Elbit holds patents on LVC data-link protocol (EHUD family) — do not implement similar patented data-link architecture without FTO clearance |
| AR/Augmented training overlay | ARTIST may carry IP on AR+live terrain fusion — not relevant to Phase 1 VN-12.7MM-SIM but flag for Phase 3+ |
| CGF behavior algorithms | Proprietary; VN should use open-source or independently developed CGF |
| General risk level | **LOW** — VN-12.7MM-SIM does not replicate the LVC or ARTIST features. Primary overlap is generic ballistic simulation and visual display, both of which are not patentable as general concepts. |
| Action required | Conduct FTO check before implementing any data-link-based networked training features |

---

## 8. SOURCES

- [Platforms and Weapon Operators Training Systems — Elbit Systems](https://elbitsystems.com/product/platforms-and-weapon-operators-training-systems/)
- [Platforms and Weapon Operators Training — Elbit Systems (Land)](https://www.elbitsystems.com/land/training-systems/live-constructive-platforms-training/platforms-and-weapon-operators-training)
- [Naval Simulators — Elbit Systems](https://www.elbitsystems.com/naval/services-solutions/training-simulation/naval-simulators)
- [Training & Simulation — Naval — Elbit Systems UK](https://www.elbitsystems-uk.com/what-we-do/naval/services-solutions/training-simulation)
- [Naval Tactical Training PDF — Elbit Systems UK](https://elbitsystems-uk.com/what-we-do/naval/services-solutions/training-simulation/naval-tactical-training.pdf)
- [EHUD Air Combat Training — Elbit Systems](https://www.elbitsystems.com/air-space/training-simulation/embedded-virtual-training/ehud)
- [Elbit in the UK: British Army simulation training — Army Technology](https://www.army-technology.com/news/elbit-in-the-uk-british-army-simulation-training/)
- [Elbit Systems UK Training and Simulation Programmes](https://www.elbitsystems-uk.com/what-we-do/training-simulation)
- [Simulating the Future of Ground Forces — Elbit Blog](https://www.elbitsystems.com/blog/simulating-the-future)
- Searched: 2026-03-23
