---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — WTP + CSR
mode: RETROACTIVE
pipeline: helix-task-clarify v3.2 --icdm
block: BB
---

# BB ICDM: WTP Classification + CSR Functions — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE — applied to Requirements v2.0 (102 reqs)
**Source:** B0 ICDM (WTP categories) + BA EQFD v1.1 (22 ECs, HOQ cross-ref) + SA constraints
**CEO WTP adjustments (S70):** CN-16 price E→B, CN-18 sovereignty B→E, CN-15 room E→B, EC-04 recoil 8N→≥25N (D), EC-18 continuous 8h→4h

---

## 1. WTP CLASSIFICATION — All 102 Requirements

> **Rule:** Essential = customer walks if missing. Beneficial = pays small premium. Luxurious = won't pay extra.
> **Derivation:** From B0 ICDM WTP categories + CEO adjustments + CN mapping.

### 1.1 Geometry (6 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| G-01 | D | **B** | Room 6×8m = deployment preference, larger rooms OK (CEO S70: CN-15 E→B) |
| G-02 | D | **E** | Weapon feel = CN-03 Essential |
| G-03 | D | **E** | FOV = CN-04 Essential (target detection) |
| G-04 | D | **E** | Space constraint = deployment |
| G-05 | W | **B** | Deployability nice-to-have |
| G-06 | W | **L** | Compact beyond 6×8m = luxury |

### 1.2 Kinematics (6 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| K-01 | D | **E** | Weapon fidelity = CN-03 |
| K-02 | D | **E** | Engagement envelope = training validity |
| K-03 | D | **B** | Ship motion = CN-05 Beneficial |
| K-04 | D | **B** | Sea state matching = CN-05 |
| K-05 | W | **L** | Slew acceleration = advanced fidelity |
| K-06 | W | **L** | Heave = Luxurious per B0 |

### 1.3 Forces (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| F-01 | D | **E** | Recoil feel = CN-03 Essential. **CEO S70: ≥25N (D).** Solution TBD Phase 2. |
| F-02 | W | **E** | **CEO S70: ≥25N is now Demand.** F-02 (15-25N) absorbed into F-01 target. Full-weight mockup required. |
| F-03 | D | **E** | Structural safety |
| F-04 | D | **E** | Safety |
| F-05 | D | **E** | Trigger fidelity = CN-03 |

### 1.4 Energy (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| E-01 | D | **E** | VN power = deployment prerequisite |
| E-02 | D | **E** | Power budget = deployment |
| E-03 | D | **E** | Data protection = military requirement |
| E-04 | W | **B** | Energy saving = operational cost |
| E-05 | W | **L** | Standby mode = nice-to-have |

### 1.5 Material (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| M-01 | D | **E** | Durability = military use |
| M-02 | D | **E** | Safety |
| M-03 | D | **E** | Naval environment = deployment |
| M-04 | W | **B** | Al profile = production convenience |
| M-05 | W | **L** | OD green paint = aesthetic |

### 1.6 Signals & Control (9 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| S-01 | D | **E** | Latency = SC-2 sacred constraint |
| S-02 | D | **E** | Encoder resolution = CN-01 |
| S-03 | D | **E** | Encoder resolution = CN-01 |
| S-04 | D | **E** | Fire mode = weapon fidelity |
| S-05 | D | **E** | Instructor control = CN-10 |
| S-06 | D | **E** | AAR data = CN-07 + CN-08 |
| S-07 | D | **E** | Scoring accuracy = CN-07 |
| S-08 | W | **B** | Multi-trainee = FULL variant feature |
| S-09 | W | **L** | Remote diagnostics = nice-to-have |

### 1.7 Safety (6 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| Sa-01 | D | **E** | SC-1 sacred — zero ammo |
| Sa-02 | D | **E** | Emergency stop = safety |
| Sa-03 | D | **E** | Low voltage = safety |
| Sa-04 | D | **E** | Eye safety |
| Sa-05 | D | **E** | Mechanical limit = safety |
| Sa-06 | W | **B** | LOTO = maintenance safety |

### 1.8 Ergonomics (7 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| Er-01 | D | **E** | VN body size = CN-03 |
| Er-02 | D | **E** | Seat adjust = operator comfort |
| Er-03 | D | **E** | GUI Vietnamese = CN-11 Essential |
| Er-04 | D | **E** | No coding = CN-10 Essential |
| Er-05 | D | **E** | Audio = immersion minimum |
| Er-06 | W | **B** | Fast scenario setup = CN-10 |
| Er-07 | W | **L** | Headphones = optional |

### 1.9 Production (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| P-01 | D | **E** | Local content = sovereignty adjacent |
| P-02 | D | **E** | WX CNC capability = production |
| P-03 | D | **E** | GPU rendering = visual minimum |
| P-04 | D | **E** | No single-source = risk |
| P-05 | W | **B** | VN PCB = production convenience |

### 1.10 Quality Control (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| Q-01 | D | **E** | Ballistic accuracy = SC-3 sacred |
| Q-02 | D | **E** | Latency verification = SC-2 |
| Q-03 | D | **E** | Motion accuracy = fidelity |
| Q-04 | D | **E** | Burn-in = reliability |
| Q-05 | W | **B** | Self-test = operational |

### 1.11 Assembly (4 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| A-01 | D | **E** | Installation time = deployment |
| A-02 | D | **E** | Standard tools = serviceability |
| A-03 | D | **E** | Cable labeling = error prevention |
| A-04 | W | **B** | Color-coded connectors = nice |

### 1.12 Transport (4 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| Tr-01 | D | **E** | Packaging = logistics |
| Tr-02 | D | **E** | VN road transport = deployment |
| Tr-03 | W | **B** | Sea transport = export feature |
| Tr-04 | W | **B** | Environmental packaging = export |

### 1.13 Operation (10 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| O-01 | D | **E** | Boot time = CN-14 |
| O-02 | D | **E** | 8h continuous = CN-14 |
| O-03 | D | **E** | Instructor training = CN-10 |
| O-04 | D | **E** | 2 weapon profiles = minimum |
| O-05 | D | **E** | 5 UAV profiles = CN-06 |
| O-06 | D | **E** | 3 USV profiles = CN-06 |
| O-07 | D | **E** | 10 scenarios = CN-06 |
| O-08 | W | **B** | 4 weapon profiles = expansion |
| O-09 | W | **L** | Remote diagnostics |
| O-10 | D | **E** | Operating environment = naval base |

### 1.14 Maintenance (6 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| Ma-01 | D | **E** | MTBF = CN-17 |
| Ma-02 | D | **E** | MTTR = CN-17 |
| Ma-03 | D | **E** | Spare parts VN = CN-17 |
| Ma-04 | D | **E** | Tech training = CN-17 |
| Ma-05 | W | **B** | PM checklist = efficiency |
| Ma-06 | W | **B** | No special tools = serviceability |

### 1.15 Lifecycle (4 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| L-01 | D | **E** | 10yr lifecycle = defense procurement |
| L-02 | D | **E** | Annual SW update = relevance |
| L-03 | W | **B** | Modular GPU upgrade = future-proof |
| L-04 | D | **E** | **Sovereignty = CN-18 Essential** (CEO S70: B→E) |

### 1.16 Costs (5 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| C-01 | D | **B** | **Price ≤$70K = CN-16 Beneficial** (CEO S70: E→B). Customer pays more if value proven. |
| C-02 | D | **E** | Operating cost ≤$5/h = ROI argument |
| C-03 | D | **E** | R&D within WX budget = internal |
| C-04 | W | **B** | ≤$60K = competitive stretch |
| C-05 | W | **B** | Maintenance ≤5% = TCO |

### 1.17 Training Performance (10 reqs)

| ID | D/W | WTP | Rationale |
|:--:|:---:|:---:|-----------|
| T-01 | D | **E** | 60fps = visual minimum |
| T-02 | D | **E** | UAV detection = CN-04 |
| T-03 | D | **E** | Ballistic accuracy = SC-3 sacred |
| T-04 | D | **E** | Ship motion in scene = CN-05 visual component |
| T-05 | D | **E** | UAV profiles = CN-06 |
| T-06 | D | **E** | Day/dusk/night = CN-06 |
| T-07 | D | **E** | AAR replay = CN-08 (Beneficial but technically D) |
| T-08 | W | **B** | Training transfer 20% = validation |
| T-09 | W | **L** | AI adaptive difficulty = future ACH |
| T-10 | W | **L** | FLIR mode = advanced |

---

## 2. WTP SUMMARY

| WTP | Count | % | D/W Split |
|:---:|:-----:|:--:|-----------|
| **Essential** | **72** | 71% | 67D + 5W-reclassified |
| **Beneficial** | **22** | 22% | 2D + 20W |
| **Luxurious** | **8** | 8% | 0D + 8W |
| **TOTAL** | **102** | 100% | 73D + 29W |

**CEO S70 adjustments (all reflected):**
- C-01 (price ≤$70K): E→B — price ceiling negotiable if value demonstrated
- L-04 (sovereignty): B→E — air-gap non-negotiable for military
- CN-15/G-01 (room 6×8m): E→B — larger rooms acceptable
- F-02 (recoil 15-25N): L→E — ≥25N now Demand (CEO override)
- EC-18 (continuous op): target 8h→4h — scheduled restart acceptable
- EC-04 (recoil): target 8N→≥25N — solution TBD Phase 2

---

## 3. CSR FUNCTIONS — Top 10 Engineering Characteristics

> **CSR (Customer Satisfaction Rating):** Maps EC value → customer satisfaction %.
> Achieving target = 100%. Below = decreasing. Above = capped at 100% (no credit for over-engineering).
> CEO decides curve shape per EC.

### EC-01: End-to-End Latency (ms) — DP5 8.4%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≤30ms | 100% | — | Over-target: no extra credit |
| 40ms | 100% | — | Comfortable margin |
| **≤50ms** | **100%** | **TARGET** | SC-2 sacred. **SA DD-1: zero margin** |
| 60ms | 60% | STEEP | Perceptible delay — training transfer degrades |
| 80ms | 20% | STEEP | Noticeable lag — negative training |
| >100ms | 0% | CLIFF | Unusable — customer rejects |

**Shape: CLIFF** — latency tolerance is nonlinear. 50ms = hard ceiling.

### EC-02: Ballistic Model Error (%) — DP1 14.2%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≤2% | 100% | — | Over-target |
| ≤3% | 100% | — | Matches Zen |
| **≤5%** | **100%** | **TARGET** | SC-3 sacred |
| 7% | 70% | LINEAR | Noticeable deviation at long range |
| 10% | 40% | LINEAR | Lead angle training compromised |
| >15% | 0% | — | Unusable for training |

**Shape: LINEAR** — gradual degradation as error increases.

### EC-12: UAV Target Profile Count (#) — DP2 18.2% ★

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥8 | 100% | — | Over-target |
| **≥5** | **100%** | **TARGET** | O-05 requirement |
| 4 | 80% | LINEAR | Missing 1 profile |
| 3 | 60% | LINEAR | Limited scenario variety |
| 2 | 30% | STEEP | Insufficient for C-UAV training |
| 1 | 0% | — | Single target = useless |

**Shape: STEP** — each additional profile adds discrete value.

### EC-04: Recoil Peak Force (N) — DP4 8% (CEO override)

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥50N | 100% | — | Over-target |
| 35N | 100% | — | Exceeds target |
| **≥25N** | **100%** | **TARGET** | **CEO S70: ≥25N (D).** Solution TBD Phase 2. |
| 15N | 60% | LINEAR | Insufficient — below ≥25N target |
| 8N | 30% | LINEAR | Solenoid territory — no longer acceptable |
| <5N | 0% | — | No recoil = no training value |

**Shape: LINEAR** — CEO override: recoil ≥25N is Essential for training transfer. Solution TBD Phase 2 (pneumatic, electromagnetic, or hybrid). Solenoid alone (8N) unlikely sufficient.

### EC-06: FOV Horizontal (°) — DP5 8.4%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥200° | 100% | — | Over-target |
| 180° | 100% | — | 3-projector sweet spot |
| **≥150°** | **100%** | **TARGET** | G-03 requirement |
| 120° | 70% | LINEAR | Peripheral detection compromised |
| 90° | 30% | STEEP | Too narrow for maritime scan |
| <60° | 0% | — | Tunnel vision |

**Shape: LINEAR with STEP at 120°** — peripheral scanning is critical for C-UAV detection.

### EC-08: Frame Rate (fps) — DP5 8.4%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥90fps | 100% | — | Over-target |
| **≥60fps** | **100%** | **TARGET** | T-01 requirement |
| 45fps | 60% | STEEP | Visible stutter on fast targets |
| 30fps | 20% | STEEP | Unacceptable for tracking FPV |
| <20fps | 0% | — | Slideshow |

**Shape: STEEP** — frame drops cause tracking training degradation.

### EC-14: Hit Detection Accuracy (%) — DP1+DP7 25.3%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥99% | 100% | — | Over-target |
| **≥95%** | **100%** | **TARGET** | S-07 requirement |
| 90% | 80% | LINEAR | 1-in-10 false = noticeable |
| 85% | 50% | LINEAR | Scoring validity questioned |
| <80% | 0% | — | Customer loses trust |

**Shape: LINEAR** — SW-only cost, so push toward 99%.

### EC-18: Continuous Operation (h) — CEO S70 relaxed

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥8h | 100% | — | Over-target |
| 6h | 100% | — | Exceeds target |
| **≥4h** | **100%** | **TARGET** | **CEO S70: 4h + scheduled restart.** 2 sessions/day = full training day. |
| 3h | 70% | LINEAR | Short session |
| 2h | 40% | STEEP | Can't complete full exercise |
| <1h | 0% | — | Useless |

**Shape: LINEAR** — CEO relaxed from 8h to 4h. Scheduled restart between sessions = acceptable. Significantly reduces Unity memory management risk.

### EC-20: Unit BOM Cost ($) — DP9 8.9%

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≤$12K | 100% | — | Over-target (maximum margin) |
| **≤$18K** | **100%** | **TARGET** | SA budget ceiling |
| $22K | 80% | LINEAR | Margin shrinks but OK |
| $30K | 40% | LINEAR | Margin <50% at $50K sell |
| >$40K | 0% | — | No margin at $50K sell |

**Shape: LINEAR** — continuous cost-margin relationship.

### EC-21: Local Content Ratio (%) — SA DD-4

| Value | CSR | Curve | Note |
|:-----:|:---:|:-----:|------|
| ≥80% | 100% | — | Over-target |
| 70% | 100% | — | Original target (infeasible for HW) |
| **≥60%** | **100%** | **TARGET** | P-01 revised (CEO QC FLAG 10) |
| 50% | 60% | STEP | Procurement barrier |
| 40% | 30% | STEP | Customer concern about dependency |
| <30% | 0% | — | Fails defense procurement threshold |

**Shape: STEP at 50%** — defense procurement has implicit thresholds.

---

## 4. GROUP A/B CRITERIA SPLIT

> **Group A:** Smallest set covering ≥70% of total satisfaction weight → Pugh SCREENING (Phase 2).
> **Group B:** Extended set covering ≥95% → FINAL concept selection (Phase 2).
> **Weight source:** HOQ DP weights from FORGE_HOQ_Design_Parameters_v1.0 + TVDT.

### Group A — Screening (7 criteria, 72.3% weight)

| # | Criterion | EC | DP | Weight | CSR Shape | Target |
|---|----------|:--:|:--:|:------:|:---------:|--------|
| A1 | Target AI realism | EC-12,13 | DP2 | **18.2%** | STEP | ≥5 UAV + ≥3 USV profiles |
| A2 | Ballistic fidelity | EC-02 | DP1 | **14.2%** | LINEAR | ≤5% error vs TM |
| A3 | Assessment depth | EC-14,15 | DP7 | **11.1%** | LINEAR | ≥95% hit detect, ≥5 scoring criteria |
| A4 | Scenario flexibility | EC-12,06 | DP8 | **10.7%** | LINEAR | ≥10 scenarios, no coding |
| A5 | Logistics independence | EC-20,19 | DP9 | **8.9%** | LINEAR | ≤$18K BOM, 6×8m room |
| A6 | Visual immersion | EC-01,06,08 | DP5 | **8.4%** | CLIFF (latency) | ≤50ms, ≥150° FOV, ≥60fps |
| A7 | Ship motion fidelity | EC-09,10,11 | DP3 | **7.9%** | LINEAR | Roll ±12°, pitch ±8° |
|   | **Subtotal** | | | **79.4%** | | |

**Reduction:** 102 requirements → **7 Group A criteria** covering 79.4% of weight. A concept that fails ANY Group A criterion is eliminated at Pugh screening.

### Group B — Final Evaluation (11 criteria, 96.0% weight)

| # | Criterion | EC | DP | Weight | CSR Shape | Target |
|---|----------|:--:|:--:|:------:|:---------:|--------|
| A1-A7 | *(Group A above)* | | | 79.4% | | |
| B1 | Instructor observability | — | DP6 | **7.1%** | LINEAR | Aim trace 10Hz, inject ≤1s |
| B2 | Crew coordination | S-08 | DP10 | **4.5%** | STEP | ≥4 stations (FULL+) |
| B3 | Haptic fidelity | EC-04,05 | DP4 | **8%** (CEO) | LINEAR | **≥25N recoil** + trigger 1.5-4kg |
| B4 | Weapon modularity | EC-16 | DP12 | **3.0%** | LINEAR | ≤5min swap, NFC ID |
|   | **Subtotal** | | | **98.2%** | | |

**Excluded from Group B (remaining 1.8%):** DP11 Multi-Site Joint Ops — CORTEX only, not evaluated for LITE/FIXED/FULL.

---

## 5. CSR FUNCTION SUMMARY TABLE

| EC | Characteristic | Target | CSR Shape | Critical Threshold | SA Flag |
|:--:|---------------|:------:|:---------:|:-----------------:|:-------:|
| EC-01 | Latency | ≤50ms | **CLIFF** | >100ms = 0% | **DD-1** |
| EC-02 | Ballistic error | ≤5% | LINEAR | >15% = 0% | — |
| EC-12 | UAV profiles | ≥5 | STEP | 1 = 0% | — |
| EC-04 | Recoil force | **≥25N** | LINEAR | <5N = 0% | CEO override |
| EC-06 | FOV | ≥150° | LINEAR+STEP | <60° = 0% | — |
| EC-08 | Frame rate | ≥60fps | STEEP | <20fps = 0% | — |
| EC-14 | Hit detection | ≥95% | LINEAR | <80% = 0% | — |
| EC-18 | Continuous op | **≥4h** | LINEAR | <1h = 0% | — |
| EC-20 | BOM cost | ≤$18K | LINEAR | >$40K = 0% | DD-3 |
| EC-21 | Local content | ≥60% | STEP at 50% | <30% = 0% | DD-4 |

---

## 6. DQM READINESS CHECK

> DQM (Design Quality Measurement) framework readiness for Phase 2 concept evaluation.

| DQM Component | Status | Note |
|--------------|:------:|------|
| Group A criteria defined | ✅ | 7 criteria, 79.4% weight |
| Group B criteria defined | ✅ | 11 criteria, 98.2% weight |
| CSR functions per criterion | ✅ | 10 ECs with shape + thresholds |
| Weight source traceable | ✅ | HOQ → DP → EC chain documented |
| Sacred constraints flagged | ✅ | SC-1→SC-5 → EC-01, EC-02, EC-20, L-04 |
| SA constraints integrated | ✅ | DD-1→DD-7 flagged in CSR |
| Concept variants ready | ✅ | 4 variants: LITE/FIXED/FULL/CORTEX |

**Phase 2 can use Group A for Pugh screening → Group B for VDI 2225 final evaluation.**

---

*Next: Block BC ICDM (Solution-Free Verification)*
