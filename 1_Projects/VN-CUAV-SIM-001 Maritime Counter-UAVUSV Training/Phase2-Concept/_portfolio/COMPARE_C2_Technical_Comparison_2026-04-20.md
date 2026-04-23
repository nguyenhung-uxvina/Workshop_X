---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE COMPARE Mode C2 — Design Philosophy + Technical Comparison
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode compare
project: VN-CUAV-SIM-001
input: COMPARE_C1_OSINT_Dossier_2026-04-20.md
---

# COMPARE C2: DESIGN PHILOSOPHY + TECHNICAL COMPARISON
## VN-CUAV-SIM-001 — Maritime C-UAV/USV Training Simulation

**Date:** 2026-04-20
**Candidates:** 5 shortlisted + WX LITE PA-2 as reference

---

## C2a — DESIGN PHILOSOPHY ANALYSIS

### 1. Zen Technologies — FAC Simulator (India)

**Heritage:** Indian defense SME, 30+ years in training simulators. Started small arms, expanded to armor (T-72/T-90), then naval (FAC). Organic growth pattern — builds on previous product to enter adjacent market.

**Philosophy:**
- **Full-spectrum naval training** — ship handling + gunnery + tactics in one system. NOT weapon-only.
- **AI-first recent pivot** — AI-enabled IOS with adaptive training is NEW (not legacy). Marketing-led but real capability.
- **Self-reliant India** — aligned with "Make in India" defense policy. Full IP ownership.
- **Premium positioning** — prices at $200-500K, targets government defense budgets, NOT export-optimized for cost.
- **Patent-protective** — secured patents (T-90 sim). Values IP defense.

**Strengths:** Deepest naval sim experience in non-Western market. AI coaching is genuine differentiator. Complete FAC training (not just shooting).
**Weaknesses:** High price locks out smaller navies. C-UAS not a focus. 360° cylindrical projection = expensive + complex installation.

### 2. MVRsimulation — FPV-UAV Simulator (USA)

**Heritage:** US defense simulation company, core product is VRSG visual engine. Programs of record with USAF, Army. Deep DoD ecosystem integration.

**Philosophy:**
- **Visual engine company** — VRSG is the product. FPV trainer is a VRSG application, not standalone product.
- **Ecosystem play** — value comes from networking with MJAT, MUSE, DJFT, PJFT. Standalone value is lower.
- **Drone-first** — recognized FPV drone as emerging training need early (I/ITSEC 2024). Fast to market.
- **High-fidelity flight model** — partnered with Bihrle Applied Research for physics. Prioritizes accuracy over cost.
- **US-centric** — ITAR/EAR controlled, US military programs focus. Export is secondary.

**Strengths:** Best FPV drone flight model available. VRSG terrain/visual quality. US DoD validation.
**Weaknesses:** ITAR-controlled. Trains attacker not defender. Ecosystem dependency reduces standalone value. No weapon fidelity (no gun — it's a drone controller).

### 3. InVeris (ex-Meggitt) — FATS 100MIL (USA)

**Heritage:** Longest pedigree in virtual shooting simulation. FATS brand = 40+ years. Won EST II (Army) + ISMT (Marines). Global installed base.

**Philosophy:**
- **Weapon fidelity obsession** — BlueFire® form-fit-function weapons. 60+ weapon types. Physical accuracy is THE selling point.
- **Platform-agnostic scenarios** — same system trains rifle, shotgun, pistol, crew-served. Content-driven, not hardware-driven.
- **Video + 3D hybrid** — combines video judgmental scenarios (shoot/don't-shoot) with 3D marksmanship. Unique blend.
- **Export-friendly by design** — FATS 100MIL specifically designed for international market (vs EST II for US-only).
- **Analytics-heavy** — automatic coaching, shot placement analytics, diagnostic tools.

**Strengths:** Unmatched weapon variety (60+). Proven at scale (thousands deployed). Automatic coaching.
**Weaknesses:** Land-focused (no maritime). No C-UAS. No ship motion. No recoil beyond pneumatic blowback. Premium price ($200-500K). US-origin complexity for VN procurement.

### 4. Saab — GCIT (Sweden)

**Heritage:** Swedish defense giant. GCIT is training complement to Carl Gustaf M4 weapon system. Built by weapon OEM = maximum authenticity.

**Philosophy:**
- **OEM-authentic** — weapon replica from ORIGINAL blueprints. Physics from ACTUAL ballistic data. No reverse engineering needed.
- **VR-first** — HTC Vive Pro / Varjo headsets. Chose VR over projection. Bold bet on immersion.
- **Portable** — <15 min setup anywhere. Rejects fixed-installation model.
- **Weapon-system-specific** — GCIT trains Carl Gustaf ONLY. Deep on one weapon, not broad.
- **Data-driven feedback** — hit location, damage assessment, reaction time, aiming efficiency. Post-engagement analytics.

**Strengths:** Highest weapon fidelity (OEM blueprints). VR portability. All ammo types simulated. UK Armed Forces adoption.
**Weaknesses:** Single weapon system only. VR = 30% motion sickness risk. No maritime. No multi-user observation (instructor can't see what trainee sees easily). Premium price.

### 5. Elbit Systems — RCWS Trainer (Israel)

**Heritage:** Israeli defense powerhouse. RCWS is real weapon system deployed globally. Training is embedded INTO the weapon, not separate.

**Philosophy:**
- **Embedded training** — same hardware, flip a switch between live and sim mode. Zero additional equipment.
- **System-of-systems** — RCWS trainer is part of broader platform training (vehicle, border, naval).
- **Customer is ALREADY an Elbit customer** — sells training to existing RCWS owners. Captive market.
- **Dual-axis stabilized** — real RCWS physics. Training in sim = training on real weapon.
- **Black box** — Israeli defense = minimal public documentation. Buy the system, get the training. No TT.

**Strengths:** Highest fidelity possible (same hardware as real weapon). Proven in combat. Multi-caliber (7.62mm to 40mm AGL).
**Weaknesses:** Requires RCWS purchase first ($500K+). Black box — no customization. Israeli export restrictions for some markets. No standalone trainer for non-RCWS customers.

### WX CUAV-SIM LITE PA-2 (Reference)

**Philosophy:**
- **C-UAS mission-specific** — designed ONLY for counter-UAV/USV engagement. Not general purpose.
- **Affordable access** — $50-70K targets navies that CANNOT AFFORD $200K+ systems or real RCWS.
- **ACH-native** — AI compensates for commodity hardware. Solenoid recoil + AI coaching > expensive recoil + no AI.
- **MWI multi-weapon** — 5 weapon types via NFC swap (DSHK, NSV, KPVT, ZU-23-2, PKM). Unique.
- **Modular product line** — LITE → FIXED → FULL → CORTEX. Customer grows with WX.
- **ITAR-free, VN-made** — full sovereignty, ASEAN export path.

---

## C2a — DESIGN PHILOSOPHY COMPARATIVE MATRIX

| Dimension | Zen FAC | MVRsim | FATS 100MIL | Saab GCIT | Elbit RCWS | **WX LITE** |
|-----------|:-------:|:------:|:-----------:|:---------:|:----------:|:-----------:|
| Heritage depth | 30+ yr sim | 20+ yr visual | 40+ yr shooting | OEM weapon | 50+ yr defense | 8+ yr defense sim |
| Performance ambition | Full FAC training | Best FPV flight model | Best weapon variety | Best weapon fidelity | Same as real weapon | Best C-UAS value |
| Technology maturity | Medium-High | High | High | Medium-High | Very High | Medium |
| Cost positioning | Premium ($200-500K) | Mid ($50-100K) | Premium ($200-500K) | Premium ($150-300K) | Ultra-premium ($200K+RCWS) | **Budget ($50-70K)** |
| Customization | Moderate | Low (VRSG ecosystem) | Moderate (scenarios) | Low (CG only) | Low (Elbit system) | **High (MWI + Unity)** |
| Export openness | High (India→global) | Low (ITAR) | Moderate (export ver.) | High (Sweden→NATO+) | Moderate (Israel restrictions) | **Very High (ITAR-free)** |
| TT willingness | Moderate | None | None | None | None | **N/A (own IP)** |
| Support sustainability | High (Indian company) | Moderate (US SME) | High (global brand) | High (Saab backing) | High (Elbit backing) | **Growing (WX 26-person)** |

---

## C2b — TECHNICAL HEAD-TO-HEAD

### Dimensions & Weights (adapted for shooting training simulator)

| # | Dimension | Weight | Rationale |
|---|-----------|:------:|-----------|
| 1 | Training Effectiveness | **25%** | Weapon fidelity, recoil, coaching, skill transfer |
| 2 | Scenario Capability | **20%** | C-UAS threat types, maritime, complexity, realism |
| 3 | Visual Immersion | **15%** | Display quality, FOV, scene fidelity, ocean rendering |
| 4 | Technology Platform | **10%** | Engine, AI, networking, modularity, upgradability |
| 5 | Deployment Flexibility | **10%** | Setup, footprint, portability, environment requirements |
| 6 | Lifecycle Support + Sovereignty | **15%** | Spare parts, SW updates, TT, customization, ITAR-free |
| 7 | Cost Effectiveness | **5%** | Unit cost, maintenance, ROI for customer |

### Scoring: 0 (absent) — 1 (poor) — 2 (below avg) — 3 (average) — 4 (good) — 5 (excellent)

### Dimension 1: Training Effectiveness (25%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| Weapon physical fidelity | 4 | 1 (gamepad) | 5 (BlueFire) | 5 (OEM blueprint) | 5 (real RCWS) | 3 (CNC mockup) |
| Recoil simulation | 4 (electromech+seat) | 0 | 3 (pneumatic) | 4 (VR haptic) | 5 (real mount) | 2 (solenoid ≥8N) |
| Ballistic model accuracy | 4 | 4 (Bihrle) | 3 | 5 (OEM data) | 5 (real FCS) | 3 (ray-trace) |
| Automatic coaching/AI | 4 (AI-IOS) | 2 | 3 (auto-coach) | 3 (post-analytics) | 2 | 3 (ACH planned) |
| Multi-weapon versatility | 2 (MMG+RWS) | 1 (FPV only) | 5 (60+ weapons) | 1 (CG only) | 3 (7.62-40mm) | 4 (5 types MWI) |
| Crew coordination training | 4 (FAC crew) | 3 (team trainer) | 2 | 1 | 3 | 2 (LITE=1stn) |
| **Subtotal (avg)** | **3.7** | **1.8** | **3.5** | **3.2** | **3.8** | **2.8** |

### Dimension 2: Scenario Capability (20%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| C-UAS scenarios | 1 | 3 (as threat) | 0 | 0 | 2 (RCWS vs drone) | **5** |
| C-USV scenarios | 1 | 0 | 0 | 0 | 1 | **5** |
| Maritime environment | 4 (FAC) | 2 (VRSG terrain) | 0 | 0 | 2 (naval RCWS) | **4** |
| Ship motion integration | 4 | 0 | 0 | 0 | 1 | 3 (2-DOF) |
| Threat variety | 2 (conventional) | 4 (FPV profiles) | 3 (video) | 2 (ground) | 2 | 4 (UAV G1-3+USV) |
| Swarm scenarios | 1 | 2 | 0 | 0 | 1 | 3 (planned) |
| Night/weather/obscurant | 3 | 3 | 3 | 3 | 3 | 3 |
| **Subtotal (avg)** | **2.3** | **2.0** | **0.9** | **0.7** | **1.7** | **3.9** |

### Dimension 3: Visual Immersion (15%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| Display resolution | 3 (HD×N) | 3 (VRSG) | 3 (HD×N) | 4 (Varjo VR) | 3 | 3 (FHD×3) |
| Field of view | 5 (360°) | 3 (goggles) | 4 (60-300°) | 5 (VR 360°) | 3 | 3 (180°) |
| Ocean/sea rendering | 4 (proprietary) | 3 (VRSG) | 0 | 0 | 2 | 3 (Unity+custom) |
| Target visual fidelity | 3 | 4 (VRSG models) | 3 | 3 | 3 | 3 |
| Edge blending/seaming | 4 | N/A (VR) | 4 | N/A (VR) | 3 | 3 (needed) |
| **Subtotal (avg)** | **3.8** | **3.3** | **2.8** | **2.4** | **2.8** | **3.0** |

### Dimension 4: Technology Platform (10%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| Game/sim engine | 3 (proprietary) | 4 (VRSG) | 3 (proprietary) | 3 (VR SDK) | 3 (proprietary) | 4 (Unity) |
| AI capability | 4 | 3 | 2 | 2 | 2 | 3 (ACH planned) |
| Networking/federation | 3 | 5 (DIS/HLA) | 3 | 2 | 3 | 2 (standalone) |
| Modularity/upgradability | 3 | 3 | 3 | 2 | 2 | 4 (MWI+modular) |
| Data analytics | 3 | 3 | 4 | 4 | 2 | 3 (AAR planned) |
| **Subtotal (avg)** | **3.2** | **3.6** | **3.0** | **2.6** | **2.4** | **3.2** |

### Dimension 5: Deployment Flexibility (10%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| Setup time | 2 (permanent install) | 4 (laptop) | 3 (semi-portable) | 5 (<15 min) | 3 | 3 (semi-portable) |
| Footprint | 2 (large, 360°) | 5 (desktop) | 3 (room) | 5 (any room) | 3 | 3 (room, dark) |
| Environment needs | 2 (dedicated space) | 5 (any) | 3 (dark room) | 4 (any indoor) | 3 | 3 (dark room) |
| Shipboard deployable | 3 (designed for) | 4 (laptop on ship) | 1 | 4 (portable VR) | 3 | 3 (planned) |
| Power requirements | 2 | 5 (laptop) | 3 | 4 (VR PC) | 3 | 3 |
| **Subtotal (avg)** | **2.2** | **4.6** | **2.6** | **4.4** | **3.0** | **3.0** |

### Dimension 6: Lifecycle Support + Sovereignty (15%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| ITAR-free | 5 (India) | 0 (ITAR) | 2 (export ver.) | 3 (Sweden/EU) | 2 (Israel) | **5** (Vietnam) |
| Source code access | 2 | 0 | 0 | 0 | 0 | **5** (own IP) |
| Scenario customization | 3 | 2 | 3 | 2 | 1 | **5** (Unity) |
| Spare parts access | 3 | 4 (COTS) | 3 | 3 | 2 | **4** (COTS+CNC) |
| SW update independence | 2 | 1 | 1 | 1 | 1 | **5** (own dev) |
| VN-specific adaptation | 3 (India→VN cultural) | 0 | 1 | 1 | 1 | **5** (native) |
| **Subtotal (avg)** | **3.0** | **1.2** | **1.7** | **1.7** | **1.2** | **4.8** |

### Dimension 7: Cost Effectiveness (5%)

| Parameter | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | WX LITE |
|-----------|:-------:|:------:|:----:|:---------:|:----------:|:-------:|
| Unit cost | 2 ($200-500K) | 3 ($50-100K) | 2 ($200-500K) | 2 ($150-300K) | 1 ($200K+RCWS) | **5** ($50-70K) |
| Maintenance cost/yr | 2 | 4 | 2 | 3 | 2 | **4** |
| Training value/$ | 3 | 3 | 3 | 3 | 4 | **5** |
| **Subtotal (avg)** | **2.3** | **3.3** | **2.3** | **2.7** | **2.3** | **4.7** |

---

## C2b — WEIGHTED AGGREGATE

| Dimension | Weight | Zen FAC | MVRsim | FATS | Saab GCIT | Elbit RCWS | **WX LITE** |
|-----------|:------:|:-------:|:------:|:----:|:---------:|:----------:|:-----------:|
| 1. Training Effectiveness | 25% | 3.7 | 1.8 | 3.5 | 3.2 | 3.8 | 2.8 |
| 2. Scenario Capability | 20% | 2.3 | 2.0 | 0.9 | 0.7 | 1.7 | **3.9** |
| 3. Visual Immersion | 15% | 3.8 | 3.3 | 2.8 | 2.4 | 2.8 | 3.0 |
| 4. Technology Platform | 10% | 3.2 | 3.6 | 3.0 | 2.6 | 2.4 | 3.2 |
| 5. Deployment Flexibility | 10% | 2.2 | 4.6 | 2.6 | 4.4 | 3.0 | 3.0 |
| 6. Lifecycle + Sovereignty | 15% | 3.0 | 1.2 | 1.7 | 1.7 | 1.2 | **4.8** |
| 7. Cost Effectiveness | 5% | 2.3 | 3.3 | 2.3 | 2.7 | 2.3 | **4.7** |
| **WEIGHTED TOTAL** | **100%** | **3.04** | **2.55** | **2.32** | **2.33** | **2.50** | **3.43** |

### Ranking (baseline weights):

| Rank | System | Score | Primary Strength |
|:----:|--------|:-----:|-----------------|
| **1** | **WX CUAV-SIM LITE** | **3.43** | Scenario + Sovereignty + Cost |
| 2 | Zen FAC Sim | 3.04 | Training Effectiveness + Visual |
| 3 | MVRsimulation FPV-UAV | 2.55 | Deployment + Technology |
| 4 | Elbit RCWS Trainer | 2.50 | Training Effectiveness (real HW) |
| 5 | Saab GCIT | 2.33 | Deployment + Weapon Fidelity |
| 6 | FATS 100MIL | 2.32 | Training Effectiveness + Weapon Variety |

---

## SENSITIVITY ANALYSIS

### Scenario 1: Training-First (40% Training, 15% Scenario, 10% rest)

| Rank | System | Score | Change |
|:----:|--------|:-----:|:------:|
| 1 | Zen FAC | 3.18 | ↑ |
| 2 | Elbit RCWS | 2.74 | ↑ |
| **3** | **WX LITE** | **2.99** | ↓ from 1st |
| 4 | FATS | 2.62 | ↑ |
| 5 | Saab GCIT | 2.52 | ↑ |
| 6 | MVRsim | 2.30 | ↓ |

⚠️ **WX drops to 3rd** when training effectiveness dominates. **Action:** SS1 weapon fidelity (recoil, weapon feel) is the gap. Solenoid ≥25N target + CNC quality critical for Phase 3.

### Scenario 2: Sovereignty-First (30% Sovereignty, 20% Scenario, rest equal)

| Rank | System | Score |
|:----:|--------|:-----:|
| **1** | **WX LITE** | **3.72** |
| 2 | Zen FAC | 2.88 |
| 3 | MVRsim | 2.24 |
| 4 | Saab GCIT | 2.17 |
| 5 | FATS | 2.05 |
| 6 | Elbit RCWS | 2.11 |

WX wins decisively. This is VN procurement reality — sovereignty matters.

### Scenario 3: Cost-First (25% Cost, 20% Scenario, 15% Sovereignty, rest equal)

| Rank | System | Score |
|:----:|--------|:-----:|
| **1** | **WX LITE** | **3.68** |
| 2 | MVRsim | 2.72 |
| 3 | Zen FAC | 2.79 |
| 4 | Saab GCIT | 2.38 |
| 5 | FATS | 2.14 |
| 6 | Elbit RCWS | 2.19 |

WX wins. Budget-constrained ASEAN navies = WX primary market.

### Scenario 4: Technology-First (25% Technology, 20% Training, rest equal)

| Rank | System | Score |
|:----:|--------|:-----:|
| 1 | Zen FAC | 3.09 |
| **2** | **WX LITE** | **3.18** |
| 3 | MVRsim | 2.88 |
| 4 | Elbit RCWS | 2.47 |
| 5 | Saab GCIT | 2.41 |
| 6 | FATS | 2.38 |

WX competitive even with tech-first weighting due to Unity + ACH platform.

### Robustness Summary

| System | Scenarios Won | Robustness |
|--------|:------------:|:----------:|
| **WX LITE** | **3/4** | **ROBUST** |
| Zen FAC | 1/4 | Conditional |
| MVRsim | 0/4 | Weak |
| Elbit RCWS | 0/4 | Weak |
| Saab GCIT | 0/4 | Weak |
| FATS 100MIL | 0/4 | Weak |

---

## C2 KEY INSIGHTS

### 1. WX LITE Wins 3/4 Scenarios — Validated
WX's C-UAS niche + sovereignty + cost positioning creates a market segment where NO competitor scores well. The only scenario where WX loses is pure training effectiveness — fixable.

### 2. Training Effectiveness = WX's Only Significant Gap
Scored 2.8/5 vs Zen 3.7 and Elbit 3.8. Root cause: **solenoid recoil (2/5) + weapon physical fidelity (3/5)**. Phase 3 SS1 PoC (2026-05-07) is the right action — must hit ≥70% perceived fidelity of Saab benchmark.

### 3. Scenario Capability = WX's Strongest Differentiator
Scored 3.9/5 vs next best Zen 2.3. NO competitor has dedicated C-UAS + C-USV maritime scenarios. This is WX's moat.

### 4. Sovereignty = Force Multiplier for VN/ASEAN Market
4.8/5 vs nearest competitor Zen at 3.0. Source code ownership + Unity customization + VN-made = unbeatable for sovereign procurement.

### 5. Zen FAC Sim = Only Credible Competitor
If Zen decided to add C-UAS scenarios and drop price by 50%, they would be a real threat. Currently their $200-500K positioning and FAC-focused mission create clear water. **Monitor Zen quarterly.**

### 6. MVRsim FPV Model = WX Should Study, Not Compete
MVRsim's FPV flight model (Bihrle) is the reference for realistic drone behavior. WX should use MVRsim-level FPV behavior as benchmark for UAV threat AI (SS4 scenarios).

### 7. Elbit "Embedded Training" Paradigm Not Applicable to WX
Elbit trains EXISTING RCWS owners. WX targets navies WITHOUT weapon station training capability. Different TAM entirely.

---

## DESIGN DECISIONS INFORMED BY C2

| Decision | Informed By | Phase 3 Action |
|----------|------------|---------------|
| **SS1 recoil must reach ≥25N** | Zen (electromech) + Saab (OEM haptic) = training fidelity leaders. WX solenoid at 8N scores 2/5 | SS1 PoC criteria #5: "recoil impulse is perceptible". Consider pneumatic contingency (LITE+ per ICDM SC-2) |
| **MWI NFC is genuine differentiator** | FATS has 60 weapons but wired swap. No competitor has NFC auto-detect. | Protect MWI NFC in Phase 3. If NFC TRL risk → fallback to DIP switch (already planned) |
| **Ocean rendering quality = key battleground** | Zen has proprietary engine. FATS/Saab/Elbit have ZERO maritime. MVRsim has VRSG (good but not naval). | Unity ocean shader quality must be ≥ Zen's proprietary engine. D2 research identified Optoma ZU607TST + custom shader |
| **AI coaching must be in v1.0, not v2.0** | Zen FAC already has AI-enabled IOS. If WX defers AI to v2.0, Zen claims "we had it first" | ACH Layer 1 (lead angle coaching) must ship in LITE v1.0. Differentiates from ALL competitors except Zen |
| **DIS/HLA networking NOT needed for LITE** | Only MVRsim does networking well. All others = standalone or basic LAN. LITE = single station | Defer DIS/HLA to FULL/CORTEX variants. LITE stays standalone |

---

## SOURCES

All sources from C1 OSINT Dossier (2026-04-20) + existing Reverse MC v1.0 + Phase 2 FORGE analyses.
