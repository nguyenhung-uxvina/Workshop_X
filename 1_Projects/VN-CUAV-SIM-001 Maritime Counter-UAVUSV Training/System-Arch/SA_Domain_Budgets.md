---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2206:2021 — System Design
mode: RETROACTIVE
step: SA4
---

# SA4: DOMAIN BUDGETS — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE
**Source:** Function Structure 6-Flow v1.0 (energy budget) + Morpho SS1-SS5 (cost) + Requirements v2.0

---

## WEIGHT BUDGET

System total target: **No explicit weight req** — but transport req Tr-01 (2 người khiêng mỗi module) implies ≤30kg/module.

| Domain | Subsystem | Allocation | Margin | Key Items |
|--------|-----------|-----------|--------|-----------|
| MECH | SS1 Weapon cradle | ~15 kg | 20% | Al CNC body, bearings, quick-release |
| MECH | SS1 Weapon modules (each) | ~8-15 kg | — | Steel/Al weighted mockup per weapon type |
| MECH | SS3 Platform frame + seat | ~25 kg | 15% | Al profile 40×40, seat, harness |
| MECH | SS2-HW Screen frame | ~12 kg | 10% | Al profile, curved surface |
| ELEC | SS1 Encoders + solenoid + NFC + ESP32 | ~1 kg | — | PCBs, sensors, actuators |
| ELEC | SS2-HW 3× Projectors | ~18 kg | — | COTS ~6kg each (Optoma ZU607TST) |
| ELEC | SS3 2× Linear actuators | ~8 kg | — | COTS ~4kg each |
| ELEC | Power (UPS + PDU + cabling) | ~15 kg | — | UPS 2kVA ~12kg + PDU + cables |
| ELEC | Audio amp + speakers | ~5 kg | — | 5.1 system |
| ELEC | Render PC + Instructor PC | ~15 kg | — | Tower ~10kg + mini-PC ~5kg |
| SW | — | 0 kg | — | Software has no weight |
| **TOTAL** | | **~130-145 kg** | | Distributed across 5-6 modules |

**Transport check (Tr-01):** Heaviest single module = platform frame ~25kg → 2-person lift OK. Render PC + UPS in wheeled case ~27kg → OK with dolly. **PASS.**

---

## POWER BUDGET

System total available: **≤5,000W** (E-02 DEMAND) from 220V/20A circuit.

| Domain | Subsystem | Steady (W) | Peak (W) | Duty | Avg (W) |
|--------|-----------|-----------|---------|------|---------|
| ELEC | Render PC (RTX 4090 + CPU) | 350 | 500 | 100% | 350 |
| ELEC | 3× Projector (300W each) | 900 | 900 | 100% | 900 |
| ELEC | Instructor PC | 150 | 200 | 100% | 150 |
| ELEC | Audio amplifier | 50 | 100 | 70% | 70 |
| ELEC | 2× Motion actuator | 80 | 200 | 60% | 120 |
| ELEC | Solenoid recoil | 0 | 50 | 5% | 3 |
| ELEC | Magnetic brake | 24 | 30 | 80% | 24 |
| ELEC | ESP32 MCU ×2 + NFC | 5 | 5 | 100% | 5 |
| ELEC | Network switch | 10 | 10 | 100% | 10 |
| ELEC | UPS overhead (efficiency loss) | 50 | 50 | 100% | 50 |
| **TOTAL ELEC** | | **1,619** | **2,045** | | **1,682** |
| SW | (included in ELEC compute) | — | — | — | — |
| MECH | (no active power consumers) | 0 | 0 | — | 0 |
| **SYSTEM TOTAL** | | **1,619** | **2,045** | | **1,682** |
| **MARGIN** | | **3,381** | **2,955** | | **3,318** |
| **MARGIN %** | | **68%** | **59%** | | **66%** |

**E-02 (≤5kW): PASS** — peak 2.0kW = 41% of budget. Large margin.
**E-04 (≤3.5kW WISH): PASS** — peak 2.0kW < 3.5kW.

**Design driver:** Projectors dominate (44% of peak). GPU second (24%). These 2 COTS items = 68% of total power.

---

## COST BUDGET

System BOM target: **≤$17,550** (high-end from Morpho SS1-SS5 estimates). Sell price ≤$70K (C-01).

| Domain | Subsystem | Allocation | Confidence | Notes |
|--------|-----------|-----------|:----------:|-------|
| MECH | SS1 Cradle body (CNC Al) | $300-500 | M | WX CNC in-house |
| MECH | SS1 Weapon modules ×5 | $200-400 each = $1,000-2,000 | L | Steel/Al machining, varies by weapon |
| MECH | SS3 Platform frame + seat | $400-600 | M | Al profile + welding + seat |
| MECH | SS2-HW Screen frame | $200-300 | M | Al profile + fabric |
| MECH | Fasteners, brackets, misc | $100-200 | H | Standard hardware |
| **MECH subtotal** | | **$2,000-3,600** | | **~20% of BOM** |
| ELEC | SS1 Encoders ×2 | $60-100 | H | AMT103 or similar |
| ELEC | SS1 Solenoid + driver | $30-50 | M | 12V push solenoid + MOSFET |
| ELEC | SS1 Mag brake | $50-80 | M | Electromagnetic powder brake |
| ELEC | SS1 NFC reader + tags ×5 | $20-40 | H | RC522 + NTAG215 |
| ELEC | SS1 ESP32 MCU ×2 | $10-20 | H | Dev boards |
| ELEC | SS2-HW 3× Projectors | $4,500-7,500 | M | Optoma ZU607TST ~$1,500-2,500 ea |
| ELEC | SS2-HW Audio 5.1 system | $200-400 | M | Amp + 6 speakers |
| ELEC | SS3 Linear actuators ×2 | $200-400 | M | 12V/24V 150mm stroke |
| ELEC | Render PC (RTX 4090) | $2,500-3,500 | M | Custom build |
| ELEC | Instructor PC | $500-800 | H | Mini-PC |
| ELEC | UPS 2kVA | $200-400 | H | APC/CyberPower |
| ELEC | Cabling + connectors | $150-300 | M | MIL connectors, USB, HDMI, power |
| **ELEC subtotal** | | **$8,420-13,590** | | **~68% of BOM** |
| **SW — PER-UNIT (deployment + calibration)** | | | | |
| SW | USB drive + packaging | $5-10 | H | Deployment media |
| SW | Đồng bộ SW version cho unit mới | $50-100 | M | Build, test, flash — 2-4h labor @ $25/h |
| SW | Hiệu chỉnh per-unit (calibration) | $100-200 | M | Encoder mapping, projector warp mesh, motion PID tuning, NFC pairing — 4-8h labor on-site |
| SW | Commissioning test (acceptance) | $50-100 | M | Run 10 scenarios, verify scoring, latency check — 2-4h labor |
| **SW per-unit subtotal** | | **$205-410** | | **~2% of BOM** |
| **SW — NRE (initial development)** | | | | |
| SW-NRE | Dev labor (~6 person-months) | $6,000-10,000 | L | Unity + ballistic + GUI + AAR + scenario |
| SW-NRE | Asset store purchases | $500-1,000 | M | Ocean, skybox, effects, FMOD integration |
| SW-NRE | Testing + QA | $500-1,000 | L | 8h stability, cross-weapon, scenario coverage |
| **SW NRE total** | | **$7,000-12,000** | | One-time development cost |
| **SW — LIFECYCLE MAINTENANCE (annual, across fleet)** | | | | |
| SW-LC | HW compatibility updates (GPU/projector model change) | $1,000-2,000/yr | L | Driver updates, render pipeline adjust — ~2-4 weeks/yr |
| SW-LC | Unity engine upgrades (LTS every 2yr) | $500-1,500/yr | M | API migration, HDRP changes, regression test |
| SW-LC | New weapon profiles + scenarios | $500-1,000/yr | M | Content expansion — customer demand driven |
| SW-LC | Bug fixes + field issue response | $500-1,000/yr | M | Ongoing support labor |
| SW-LC | Fleet sync (push updates to deployed units) | $200-500/yr | M | Per-unit travel or remote update mechanism |
| **SW lifecycle total** | | **$2,700-6,000/yr** | | Across entire fleet, not per-unit |
| **SW lifecycle per-unit (10-unit fleet)** | | **$270-600/yr** | | = $1,350-3,000 over 5yr lifecycle |
| | | | | |
| **PER-UNIT COST SUMMARY** | | | | |
| **HW BOM (MECH+ELEC)** | | **$10,420-17,190** | | Marginal HW per unit |
| **SW per-unit (deploy+cal)** | | **$205-410** | | Sync + calibration + commissioning |
| **BOM per-unit total** | | **$10,625-17,600** | | |
| | | | | |
| **FULLY-LOADED UNIT COST (incl NRE amortization)** | | | | |
| Scenario A: 5 units yr1 | | $12,025-20,000 | | BOM + NRE/5 ($1,400-2,400/unit) |
| Scenario B: 10 units yr1 | | $11,325-18,800 | | BOM + NRE/10 ($700-1,200/unit) |
| Scenario C: 20 units (2yr) | | $10,975-18,200 | | BOM + NRE/20 ($350-600/unit) |
| | | | | |
| **5-YEAR TOTAL COST OF OWNERSHIP (per unit, 10-unit fleet)** | | | | |
| Unit cost (fully-loaded, 10 units) | | $11,325-18,800 | | One-time |
| SW lifecycle 5yr | | $1,350-3,000 | | HW compat + Unity upgrade + content + support |
| **TCO per unit** | | **$12,675-21,800** | | |
| | | | | |
| **Target sell price** | | **$50,000-70,000** | | |
| **MAINT-KIT opportunity** | | **$300-600/yr per unit** | | SW update + calibration + spare parts |
| **Gross margin (10 units, excl MAINT)** | | **$31,200-58,675** | | **62-84%** |
| **Break-even** | | **1 unit** | | BOM $17.6K + NRE $12K = $29.6K < $50K sell |
| | | | | |
| **⚠️ HW OBSOLESCENCE SCENARIO (yr 3-5)** | | | | |
| GPU model change (RTX 4090 → next gen) | | $1,000-2,000 NRE | | Driver + render pipeline retest |
| Projector model EOL | | $1,500-3,000 NRE | | Warp mesh recalibrate + edge-blend retune |
| Unity LTS major version (2yr cycle) | | $1,000-2,000 NRE | | API migration + full regression |
| **Worst-case yr3-5 refresh NRE** | | **$3,500-7,000** | | Amortize over fleet: $350-700/unit (10 units) |

**C-01 (≤$70K sell): PASS** — fully-loaded $12-20K/unit (5-unit scenario) → healthy margin.

**Key insight: SW cost has 3 layers:**
1. **Per-unit ($205-410):** deployment sync + calibration + commissioning = 2% of BOM. NOT zero — mỗi unit cần 8-16h labor.
2. **NRE ($7-12K):** initial development, amortizes over fleet. Break-even at unit #1.
3. **Lifecycle ($2.7-6K/yr fleet):** HW compatibility, Unity upgrades, content, support. **This is the hidden cost** — nếu không budget thì yr3-5 SW sẽ rot khi HW thay đổi.

**MAINT-KIT revenue opportunity:** $300-600/yr/unit covers SW lifecycle cost AND generates margin. 10-unit fleet × $450/yr = $4,500/yr recurring → covers $2.7-6K/yr lifecycle cost.

**Structural advantage vs Zen:** Even with full lifecycle cost, TCO $13-22K/unit vs Zen $200-500K. WX margin remains 62-84%.

**Design driver:** Projectors ($4.5-7.5K) = 42% of HW BOM. Render PC ($2.5-3.5K) = 20%. These 2 COTS items = **62% of hardware cost**. Cost reduction must focus here.

**Cost-sensitive SHARED interfaces:**
- IF-01a (encoder mounting): cheap encoder ($30) on expensive CNC cradle ($300-500) — alignment quality determines if cheap encoder is sufficient
- IF-05b (edge-blend): projector model selection drives both cost AND blend quality

---

## LATENCY BUDGET

System response requirement: **≤50ms** trigger-to-visual (S-01 DEMAND, SC-2 Sacred).

| Stage | Domain | Allocation | Subtotal | Source |
|-------|--------|-----------|----------|--------|
| Encoder poll + debounce | ELEC | ≤2ms | 2ms | IF-02a/c |
| USB Serial transmit | ELEC | ≤3ms | 5ms | IF-02a |
| Unity input processing | SW | ≤4ms | 9ms | Frame-aligned read |
| Ballistic 6DOF compute | SW | ≤4ms | 13ms | Per-frame solve |
| HDRP render pipeline | SW | ≤12ms | 25ms | 1 frame @60fps avg |
| HDMI output | ELEC | ≤8ms | 33ms | Signal processing |
| Projector display | ELEC | ≤17ms | **50ms** | DLP/LCD response |

**Domain ownership:**
- **ELEC total: ≤30ms** (sensor 5ms + output 25ms)
- **SW total: ≤20ms** (input+compute+render)
- **Total: 50ms = exactly at budget** (zero margin)

**⚠️ RISK: Zero margin on latency.** Projector input lag varies 8-30ms by model. If actual projector lag = 25ms (not 17ms), total = 58ms → **FAIL S-01.**

**Mitigation:** Phase 3 must benchmark actual projector model. If >20ms input lag → need faster GPU frame time to compensate (reduce render budget from 12ms to 8ms via lower LOD).

---

## LATENCY BUDGET — MOTION PATH

System requirement: perceptible wave motion (K-03, K-04). Human vestibular threshold ~100ms.

| Stage | Domain | Allocation | Subtotal |
|-------|--------|-----------|----------|
| Wave model compute | SW | ≤10ms | 10ms |
| UDP transmit | SW | ≤2ms | 12ms |
| UDP receive | ELEC | ≤2ms | 14ms |
| PID compute (ESP32) | ELEC | ≤3ms | 17ms |
| PWM output | ELEC | ≤1ms | 18ms |
| Actuator mechanical | MECH | ≤30ms | **48ms** |

**Domain ownership (CEO 1a: SHARED):**
- **SW: ≤12ms** | **ELEC: ≤6ms** | **MECH: ≤30ms**
- **Total: 48ms** — 2× margin vs 100ms vestibular threshold. **PASS.**

---

## BUDGET CONFLICTS & DESIGN DRIVERS

| # | Conflict | Domain | Impact | Resolution |
|---|---------|--------|--------|------------|
| 1 | **Latency: zero margin** on trigger-to-visual path | ELEC (projector) | If projector lag >20ms → S-01 FAIL | **DESIGN DRIVER #1** — projector selection in Phase 3 must verify input lag ≤17ms |
| 2 | **Cost: 62% in 2 COTS items** (projectors + GPU) | ELEC | Price volatility, supply risk | **DESIGN DRIVER #2** — pre-order strategy, fallback models identified |
| 3 | **Power: 68% headroom** | ELEC | Not a conflict — healthy margin | No action needed |
| 4 | **Weight: distributed OK** | MECH | No module >30kg | No action needed |

**CEO: 2 design drivers confirmed for Phase 3:**
1. Projector input lag benchmark (≤17ms target, blocking for S-01)
2. COTS cost lock (projector + GPU pre-order before Phase 4)

---

*Next: SA5 (V&V Plan) → CEO checkpoint*
