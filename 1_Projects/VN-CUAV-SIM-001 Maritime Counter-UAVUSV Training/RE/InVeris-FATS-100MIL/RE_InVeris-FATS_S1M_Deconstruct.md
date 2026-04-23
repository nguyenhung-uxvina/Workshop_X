# RE STAGE 1M: DECONSTRUCT — InVeris FATS 100MIL/180MIL + FATS Drone

**Date:** 2026-04-22
**Project:** VN-CUAV-SIM-001
**Mode:** MECHA (OSINT-only, no physical artifact)
**Products analyzed:** FATS 100MIL, FATS 180MIL, FATS VR, FATS AR, **FATS Drone** (Dec 2025)

---

## CRITICAL DISCOVERY: FATS Drone (Released Dec 2025)

> **InVeris released "FATS Drone" on Dec 1, 2025** — a counter-UAS/drone training simulator built on VBS4 (Bohemia Interactive Simulations). This is the FIRST time InVeris has entered the C-UAV training space. **Directly competitive with WX CUAV-SIM-001.**

| Feature | FATS Drone | WX CUAV-SIM LITE |
|---------|-----------|------------------|
| Engine | VBS4 (licensed from BIS) | Unity (owned) |
| Display | Standard display OR FPV goggle headset | 3× projector 180° FOV |
| Weapon | BlueFire wireless (small arms only?) | Modular Weapon Interface (5 weapon types, naval mount) |
| Drone types | FPV, ISR, loitering, one-way attack, resupply | Group 1-5 UAV + USV |
| C-UAS training | Counter-drone engagements, contested airspace | Naval AA gunnery against UAV/USV swarms |
| Maritime | **NO** — land-based battlefield focus | **YES** — ship motion, sea state, naval scenarios |
| Networking | Multi-party networked VBS4 | Multi-station instructor network |
| Motion platform | None identified | 2-DOF ship motion platform |
| Scoring | VBS4 built-in | Ray-trace ballistic model + AAR |
| Pricing | Unknown (likely $100-200K+ as FATS add-on) | $50-70K standalone |

**Strategic implication:** InVeris is pivoting toward drone training (US Army $36B drone program). WX CUAV-SIM has **12-24 month window** before FATS Drone matures. WX moat: **maritime focus + crew-served weapon fidelity + motion platform** — FATS Drone appears land-only.

---

## 1A — ARTIFACT DECONSTRUCTION (4-Layer)

### Layer 1 — System Architecture & Configuration

**FATS 100MIL (Single-screen baseline):**

| Component | Description | Confidence |
|-----------|------------|-----------|
| Display | Single rear-projection screen | H |
| Projector | Ultra-short throw (spec unknown, likely 1080p→4K) | M |
| Computer | Rack-mounted or case-mounted server/workstation | M |
| Hit detection | Camera-based laser hit detection system | H |
| Weapons | BlueFire wireless + tethered weapon library (300+ variants) | H |
| Audio | 5.1 surround sound system | M |
| Instructor station | Separate PC/tablet with control software | H |
| Configuration | Rack-style (classroom) OR mil-spec transport case (portable) | H |
| Capacity | Up to 60 weapons / 15 trainees concurrent | H |

**FATS 180MIL (3-screen immersive — MOST COMPARABLE to WX LITE):**

| Component | Specification | Confidence |
|-----------|-------------|-----------|
| Screens | **3× borderless, 3.8m × 2.14m (150" × 84"), 16:9** | H |
| FOV | **180° wrap-around** (configurable: flat or wrap) | H |
| Projectors | Ultra-short throw × 3 (exact model unknown) | M |
| Ceiling req | ≥ 10 feet (3.05m) | H |
| Weapons capacity | Up to **20 simulated weapons** | H |
| Weapons per user | Up to **4** (simultaneously) | H |
| Hit detection | **3 digital cameras → OCR processor** (Off-CPU Real-time) | H |
| Upgrade path | Same OCR processor as FATS 100 → easy upgrade | H |
| Audio | 5.1 surround + directional effects | M |

**Hidden design intent (Layer 4 inference):**
- 3.8m × 2.14m screens = ~150" diagonal → matches commercial short-throw projector sweet spot
- Borderless screens = custom screen surface (not COTS TV monitors)
- OCR processor shared with FATS 100 = **platform architecture** (shared hit detection HW across product line)
- 20 weapons / 4 per user = **5 concurrent trainees** maximum (vs. 15 on FATS 100MIL)

### Layer 2 — BlueFire Weapon System (Detailed)

**Architecture:**

```
BLUEFIRE WEAPON ARCHITECTURE

┌─────────────────────────────────────────┐
│ WEAPON BODY (form/fit/function replica) │
│                                         │
│  ┌─── SENSORS ───────────────────────┐  │
│  │ • Trigger pressure sensor         │  │
│  │ • Buttstock pressure sensor       │  │
│  │ • Weapon cant sensor (gyro/accel) │  │
│  │ • Fire control / safety selector  │  │
│  │ • Continuous laser emitter        │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌─── RECOIL ─────��──────────────────┐  │
│  │ • Compressed air/gas magazine     │  │
│  │ • Recoil valve + locking valve    │  │
│  │ • Piston → bolt/slide cycling     │  │
│  │ • ~60% of real recoil impulse     │  │
│  │ • Rechargeable via fill station   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌─── COMMUNICATION ─────────────────┐  │
│  │ • Bluetooth wireless (BlueFire)   │  │
│  │ • Two-way weapon↔system comms     │  │
│  │ • Wireless OR tethered options    │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌─── POWER ─────────────────────────┐  │
│  │ • Rechargeable battery (wireless) │  │
│  │ • OR tethered power (tethered)    │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

**Recoil mechanism (from patent EP1546831A4):**

| Parameter | Value | Confidence |
|-----------|-------|-----------|
| Mechanism | Internal regulated gas (compressed air) | H |
| Containment | Entirely within removable magazine | H |
| External connections | **NONE** (no hoses, no wires — self-contained) | H |
| Key components | 2 electric valves (recoil valve + locking valve) | H |
| Actuation | Gas → piston → bolt/slide cycling | H |
| Recoil fidelity | ~60% of real weapon recoil | H (from marketing) |
| Recharge | Compressed breathable air via proprietary fill station | H |
| Magazine form factor | Standard magazine housing (M4/M16 STANAG, etc.) | M |

**Sensor suite comparison (FATS vs WX LITE):**

| Sensor | FATS BlueFire | WX LITE-PA2 | WX Advantage/Gap |
|--------|-------------|-------------|------------------|
| Aim position | Continuous laser → camera hit detection | Rotary encoder (az/el) ≥0.1° | WX: simpler, cheaper. FATS: more natural (no encoder). |
| Trigger | Pressure sensor (analog, force measurement) | Microswitch (digital on/off) | **GAP:** FATS measures trigger PULL FORCE, WX only detects fire/no-fire |
| Buttstock | Pressure sensor (analog, cheek/shoulder weld) | **NONE** | **GAP:** FATS detects stock weld quality → coaching |
| Weapon cant | Cant sensor (gyro/accelerometer) | **NONE** (only az/el from encoders) | **GAP:** FATS detects weapon tilt → coaching |
| Recoil | Gas blowback ~60% real recoil | Solenoid 15-20N (target ≥25N) | **GAP:** FATS ~60% real > WX solenoid. But WX targeting ≥25N (≥70% threshold) |
| Communication | Bluetooth wireless (2-way) | Wired (serial/USB) | FATS: wireless freedom. WX: wired = simpler, more reliable for naval mount. |

### Layer 3 — Functional Decomposition

**System-level function flow:**

```
FATS 100MIL/180MIL FUNCTIONAL FLOW

INPUT:                     PROCESSING:                  OUTPUT:
┌─────────────┐    ┌─────────────────────┐    ┌──────────────────┐
│ Trainee      │───→│ Weapon Sensor Fusion │───→│ Shot Placement   │
│ Actions      │    │ (trigger, aim, cant) │    │ Analysis         │
├─────────────┤    ├─────────────────────┤    ├──────────────────┤
│ Weapon Laser │───→│ Hit Detection        │───→│ Hit/Miss/Score   │
│ (continuous) │    │ (3 cameras → OCR)    │    │                  │
├─────────────┤    ├──��──────────────────┤    ├──────────────────┤
│ Instructor   │───→│ Scenario Engine       │───→│ Visual Scene     │
│ Commands     │    │ (3D Marksmanship      │    │ (Projection)     │
│              │    │  OR VBS3 Collective   │    │                  │
│              │    │  OR HD Video Judgeml) │    │                  │
├─────────────┤    ├─────────────────────┤    ├──────────────────┤
│ Scenario     │───→│ Ballistic Model      │───→│ Recoil Command   │
│ Definition   │    │                       │    │ (gas valve fire) │
├─────────────┤    ├─────────────────────┤    ├───────��──────────┤
│              │    │ Automatic Coaching   │───→│ Real-time        │
│              │    │ Engine               │    │ Feedback (tablet) │
│              │    │                       │    │ + AAR Report     │
└─────────────┘    └─────────────────────┘    └──────────────────┘
```

**Component inventory (FATS 180MIL):**

| # | Component | Qty | Function | Domain |
|---|-----------|-----|----------|--------|
| 1 | Projection screens (3.8m × 2.14m, borderless) | 3 | Visual display | MECH |
| 2 | Ultra-short throw projectors | 3 | Image generation | ELEC |
| 3 | Simulation workstation(s) | 1-2 | Scene rendering + ballistics | SW/ELEC |
| 4 | OCR processor (Off-CPU Real-time) | 1 | Hit detection processing | ELEC/SW |
| 5 | Digital cameras (hit detection) | 3 | Laser spot tracking | ELEC |
| 6 | BlueFire weapon simulators | up to 20 | Trainee interface | MECH/ELEC |
| 7 | Compressed air fill station | 1 | Recoil gas recharge | MECH |
| 8 | 5.1 surround sound system | 1 | Audio immersion | ELEC |
| 9 | Instructor workstation | 1 | Scenario control + monitoring | SW/ELEC |
| 10 | Bluetooth receivers | N | Weapon↔system comms | ELEC |
| 11 | Network infrastructure | 1 | Multi-station connectivity | ELEC/SW |
| 12 | UPS / power distribution | 1 | Power management | ELEC |
| 13 | Rack / transport cases | 1 set | Physical housing | MECH |
| 14 | Calibration equipment | 1 set | System alignment | MECH/SW |

### Layer 4 — Hidden Design Intent

| Observation | Inferred Intent | Confidence | WX Relevance |
|-------------|----------------|-----------|-------------|
| **Magazine-contained recoil** (no external hoses) | Maximize weapon mobility + minimize setup time. Wireless = instant deployment. | H | WX naval mount is FIXED — external pneumatic OK. Different constraint. |
| **300+ weapon variants** on same platform | **Platform strategy** — one system, many weapons = massive installed base + recurring revenue from new weapon kits | H | **WX MWI concept validates** — NFC auto-detect is WX's version of same strategy |
| **OCR shared between 100MIL and 180MIL** | **Modular architecture** — shared hit detection HW across product line reduces NRE per variant | H | WX should design shared scoring module for LITE/FIXED/FULL/CORTEX |
| **3 training modes** (3D/VBS3/Video) | **Progressive training pipeline** — fundamentals → tactics → judgment. Not one-size-fits-all. | H | WX has marksmanship + scenario + AAR. Missing: **judgment/decision training** mode |
| **Automatic Coaching to doctrine** | **Doctrine-agnostic platform** — coaching references customer's own training manual. Sticky: customer invests in configuring coaching → switching cost HIGH. | H | WX should build **doctrine configuration layer** (TCLL, QCHD templates). Compound moat. |
| **Trigger pressure + cant + stock weld sensors** | **Training transfer science** — these are the exact parameters that predict real-weapon accuracy. Not gimmick — based on marksmanship pedagogy. | H | **GAP for WX:** solenoid recoil is necessary but insufficient. Trigger force + cant sensing dramatically improve coaching quality. |
| **FATS Drone on VBS4** (Dec 2025) | **Land-focused C-UAS.** InVeris entering drone training via simulation engine partnership (BIS), NOT hardware redesign. Software-first. | H | **WX advantage: HARDWARE-FIRST** (real weapon mount, motion platform). Different approach. But InVeris has budget + installed base to iterate fast. |
| **Ultra-short throw projectors** | Maximize trainee movement space. Short throw = projector close to screen, trainees won't shadow. | M | WX already selected Optoma short-throw. Aligned. |

---

## 1B — MATERIAL & PROCESS INFERENCE

(Limited for OSINT-only — no physical artifact)

| Component | Material Inference | Evidence | VN Availability |
|-----------|-------------------|----------|----------------|
| Weapon body (BlueFire) | Real weapon host + internal simulator kit | "Convert from live weapon to BlueFire and back in minutes" (MAAWS datasheet) | ⚠️ WX cannot use real weapons as host — must fabricate replica |
| Magazine housing | Aluminum or reinforced polymer | Must contain gas system at ~3000 PSI | ✅ CNC aluminum (WX capability) |
| Recoil piston | Steel or hardened aluminum | High-cycle gas piston | ✅ Standard machining |
| Gas valves (×2) | Solenoid electric valves | Patent description: electric recoil + locking valves | ✅ COTS solenoid valves available in VN |
| Projection screens | Specialized projection fabric, borderless frame | Custom (not COTS TV) | ✅ Available from specialized suppliers |
| Hit detection cameras | Industrial/machine vision cameras | Digital cameras interfacing with OCR processor | ✅ COTS industrial cameras |
| OCR processor | Custom FPGA or DSP board | Real-time laser spot tracking at high frame rate | ⚠️ WX uses encoder-based tracking, not camera — different approach |

**VN Manufacturing Capability Gap:**

| Capability | FATS Approach | WX Approach | Gap |
|-----------|--------------|-------------|-----|
| Weapon body | Convert real weapon → add simulator kit | CNC machine replica from scratch | **WX has LOWER fidelity but HIGHER freedom** — can optimize for training without real weapon constraints |
| Recoil | Gas blowback (magazine-contained) | Solenoid (external mount) | **FATS superior recoil fidelity.** WX tradeoff: simpler, cheaper, easier to maintain |
| Hit detection | Camera-based laser tracking | Encoder-based angle → ray-trace computation | **WX approach is MORE FLEXIBLE** — works for any angle, not just screen. Enables VR/AR migration. |
| Multi-weapon | 300+ weapon kits for same platform | 5 weapon modules (MWI) with NFC | **WX more focused** — naval weapons only. Quality > quantity. |

---

## 1C — PERFORMANCE PARAMETERS

| Parameter | FATS 100MIL | FATS 180MIL | WX LITE-PA2 | Assessment |
|-----------|------------|------------|-------------|-----------|
| FOV | Single screen (~90°?) | **180° wrap** | **180° wrap** | PARITY with 180MIL |
| Screen size | Single ~150" | **3× 150"×84"** | 3× (TBD, target similar) | PARITY |
| Trainees concurrent | **15** | **5** (20 weapons / 4 per user) | **1** (LITE), **2-3** (FULL) | **GAP:** FATS 100MIL scales to 15 |
| Weapon variants | **300+** | 20 (subset) | **5** (naval weapons) | **By design** — WX focused niche |
| Recoil fidelity | ~60% real | Same | Target ≥70% (if ≥25N achieved) | **WX targeting HIGHER** than FATS |
| Sensor suite | Trigger pressure + cant + stock weld + laser | Trigger pressure + cant + stock weld + laser | Encoder angle + microswitch trigger | **GAP: 3 missing sensors** |
| Hit detection | Camera/laser → OCR processor | 3 cameras → OCR | Encoder → ray-trace ballistic | WX approach: **different but viable** |
| Scoring latency | Unknown (camera → OCR pipeline) | Unknown | Target ≤50ms | Unknown comparison |
| Coaching | **Automatic Coaching** (doctrine-referenced) | Same | AAR + replay (basic) | **GAP:** FATS coaching is REAL-TIME + doctrine-linked |
| Portability | Mil-spec case (portable) | Fixed installation | Shipboard (LITE) / Fixed (FIXED) | **WX: different deployment model** |
| Maritime support | **NONE** | **NONE** | **YES** — ship motion, sea state | **WX UNIQUE ADVANTAGE** |
| C-UAV training | FATS Drone (VBS4, Dec 2025) | FATS Drone (VBS4) | Unity-based C-UAV/USV | **WX: PURPOSE-BUILT.** FATS: bolt-on. |
| Motion platform | None | None | 2-DOF (roll+pitch) | **WX UNIQUE ADVANTAGE** |
| Price | $200-500K+ | Higher | $50-70K | **WX 3-7× cheaper** |

---

## 1M — DOMAIN DECOMPOSITION (MECHA)

### Domain 1: MECHANICAL

| Component | Function | Sophistication | WX Equivalent |
|-----------|----------|---------------|---------------|
| Weapon body (real weapon host) | Authentic form/fit/weight | **HIGH** — actual weapon converted | CNC aluminum replica (MEDIUM) |
| Gas recoil piston assembly | Bolt cycling + recoil impulse | **HIGH** — precision pneumatic | Solenoid linear actuator (MEDIUM) |
| Gas magazine | Self-contained compressed air reservoir | **HIGH** — custom, patented | N/A — WX uses external power |
| Fill station | Compressed air recharge | MEDIUM — COTS compressor + custom adapter | N/A |
| Projection screen frames | Borderless 3.8m × 2.14m | MEDIUM — custom fabrication | Similar (WX Optoma setup) |
| Transport cases | Mil-spec ruggedized | HIGH — MIL-STD-810 qualified | Not needed (fixed install on ship) |
| Screen mounting hardware | Adjustable flat/wrap configuration | MEDIUM | Fixed 180° (WX simpler) |

**Mechanical complexity:** FATS mechanical domain is SIMPLER in structure (no weapon mount pedestal, no motion platform) but MORE COMPLEX in weapon fidelity (real weapon conversion).

### Domain 2: ELECTRONIC

| Component | Function | Sophistication | WX Equivalent |
|-----------|----------|---------------|---------------|
| **OCR processor** (Off-CPU Real-time) | Hit detection from 3 cameras at high frame rate | **HIGH** — custom real-time DSP/FPGA | N/A — WX uses encoder + software ray-trace |
| Digital cameras (×3) | Laser spot detection on screen | HIGH — synchronized multi-camera | N/A |
| Bluetooth transceivers | Weapon↔system wireless comms | MEDIUM — COTS BT | Wired USB/serial (simpler) |
| Trigger pressure sensor | Analog force measurement | MEDIUM — strain gauge or force cell | Microswitch (simpler) |
| Cant sensor | Gyroscope/accelerometer (weapon tilt) | MEDIUM — MEMS IMU | **NONE** (gap) |
| Buttstock pressure sensor | Analog force (cheek/shoulder weld) | MEDIUM — force cell | **NONE** (gap) |
| Continuous laser emitter | Aim point tracking (always on) | MEDIUM — IR or visible laser | N/A — encoder-based |
| Projectors (×3) | UST, 1080p-4K | MEDIUM — COTS | COTS (Optoma ZU607TST) |
| Audio system | 5.1 surround + directional | MEDIUM — COTS | COTS (similar) |
| Gas valve electronics | 2× solenoid valve drivers | LOW — standard solenoid drive | Solenoid driver (WX has from BB-01) |
| Power distribution | Rack-mount PSU, UPS | LOW — COTS | COTS (MEAN WELL + APC) |

**Electronic complexity split:**
- FATS: 40% custom (OCR + cameras + BlueFire sensors), 60% COTS
- WX: 15% custom (solenoid driver, encoder interface), 85% COTS

### Domain 3: SOFTWARE

| Component | Function | Technology | WX Equivalent |
|-----------|----------|-----------|---------------|
| **3D Marksmanship Engine** | Procedural 3D ranges, targets, weather, ballistics | Custom game engine (likely Unreal-based or proprietary) | Unity 3D (owned IP) |
| **VBS3/VBS4 Collective** | Squad-level tactical training, mission rehearsal | Licensed from Bohemia Interactive Simulations | N/A (WX doesn't need tactical sim) |
| **HD Video Judgmental** | Pre-recorded branching video scenarios | Proprietary video playback engine | N/A (WX could add later) |
| **Automatic Coaching Engine** | Real-time sensor analysis → doctrine-referenced feedback | Proprietary ML/analytics | WX AAR (simpler, post-session only) |
| **Shot placement analytics** | Weapon trace, grouping analysis, shot-by-shot diagnosis | Proprietary diagnostics | WX ray-trace scoring (basic) |
| **Scenario editor** | Create/modify training scenarios | Proprietary authoring tools | Unity Scene Editor + custom UI |
| **Instructor interface** | Monitor multiple trainees, inject events, control scenarios | Custom GUI (PC + tablet) | Custom GUI (PC + dual monitor) |
| **AAR system** | Post-session replay, performance report generation | Proprietary replay engine | Unity replay + PDF report |
| **FATS Drone** (NEW) | C-UAS drone training | VBS4-based (licensed) | Unity-based C-UAV/USV (owned) |
| **Calibration software** | Screen alignment, camera registration, weapon zero | Proprietary | WX projector auto-calibration (TBD) |

**Software complexity split:**
- FATS: **3 simulation engines** (3D Marksmanship + VBS3/4 + HD Video) = VERY HIGH complexity, VERY HIGH switching cost
- WX: **1 engine** (Unity) with multiple modes = LOWER complexity, higher agility

**Key SW difference:** FATS software is a **30+ year accumulation** (FATS Inc. 1980s → present). WX building from scratch with modern tools. FATS has breadth (300+ weapons, 40+ countries' doctrine); WX has focus (naval C-UAV, 5 weapons, Vietnamese doctrine).

### Domain 4: CONTROL

| Control Function | FATS Implementation | WX Implementation |
|-----------------|-------------------|-------------------|
| **Weapon tracking** | Continuous laser → camera → OCR (real-time closed loop) | Encoder → serial/USB → Unity (open loop read) |
| **Recoil timing** | Gas valve control: trigger event → valve open delay → pressure release → bolt cycle → valve close. Timing synchronized to weapon ROF. | Solenoid pulse: trigger → solenoid fire (24VDC) → spring return. Programmable ROF. |
| **Hit detection loop** | Laser spot on screen → camera frame → OCR processor → hit/miss → ballistic impact computed → visual effect rendered. Latency: unknown but real-time claim. | Encoder angle at trigger → ray-trace ballistic computation → hit/miss → visual effect. Latency: target ≤50ms. |
| **Coaching feedback** | Sensor data (trigger pressure curve, cant angle, stock weld force) → coaching rules engine → real-time display on tablet/screen. Doctrine-specific rules configured per customer. | Post-session AAR only. No real-time coaching. No trigger pressure/cant/stock weld data. |
| **Multi-trainee arbitration** | Up to 15 trainees × 60 weapons. OCR processor must disambiguate multiple laser spots simultaneously. | Single trainee (LITE). No arbitration needed. |
| **Scenario state machine** | Instructor → scenario start/inject → AI behaviors → scoring → AAR. 3 modes (3D/VBS3/Video) with mode-specific state machines. | Instructor → scenario start → target spawn → engagement → scoring → AAR. Single mode. |

**Control architecture comparison:**

```
FATS CONTROL ARCHITECTURE:
  Inner loop:  Weapon sensor → OCR → hit detection (< 1 frame, ~16ms @ 60fps)
  Middle loop: Ballistic computation + visual feedback (~1-3 frames, ~33-50ms)
  Outer loop:  Coaching analysis + scenario progression (~100ms-1s)
  Supervisory: Instructor control + multi-trainee management (manual)

WX LITE CONTROL ARCHITECTURE:
  Inner loop:  Encoder read → Unity update (1 frame, ~16ms @ 60fps)
  Middle loop: Ray-trace ballistic + visual + recoil (~1-2 frames, ~33ms)
  Outer loop:  Scenario AI + scoring (~100ms)
  Supervisory: Instructor station (manual)
```

---

## CROSS-DOMAIN MAPPING MATRIX

| Function | MECH % | ELEC % | SW % | CTRL % | Integration Concern |
|----------|--------|--------|------|--------|-------------------|
| Weapon recoil | **70** | 15 | 10 | 5 | Gas valve timing critical for recoil feel |
| Aim tracking | 5 | **50** | 25 | **20** | Camera↔OCR latency = training quality |
| Hit detection | — | 30 | **40** | **30** | Multi-trainee disambiguation |
| Visual rendering | 10 (screens) | 20 (projectors) | **60** | 10 | Edge-blend + calibration |
| Scoring/AAR | — | 5 | **80** | 15 | Data pipeline: sensors→analytics→report |
| Coaching | — | 15 (sensors) | **60** | **25** | Real-time feedback loop timing |
| Scenario control | — | — | **70** | **30** | AI behavior + instructor override |
| Audio immersion | 10 | 30 | **50** | 10 | Directional audio sync with visual |

**Domain weight (FATS overall):** MECH 15% / ELEC 25% / **SW 45%** / CTRL 15%

**Comparison with previous RE:**
| Product | MECH | ELEC | SW | CTRL |
|---------|------|------|-----|------|
| Zen FAC Sim | 20% | 17% | 48% | 15% |
| ACME-GAR-GTS | (similar to Zen) | | | |
| **InVeris FATS** | **15%** | **25%** | **45%** | **15%** |
| WX LITE-PA2 | **25%** | 20% | 40% | 15% |

InVeris is most software-heavy of all competitors. WX is most mechanical-heavy (weapon station + motion platform).

---

## PRODUCT FAMILY ARCHITECTURE (InVeris Fleet)

```
INVERIS TRAINING SOLUTIONS — PRODUCT PORTFOLIO

PROJECTION-BASED:
  ├── FATS 100MIL ── Single screen, 15 trainees, rack/portable
  ├── FATS 180MIL ── 3-screen 180°, 5 trainees, immersive
  ├── FATS 100LE  ── Law enforcement variant (HD video focus)
  └── FATS 100P   ── Portable (1-2 screens in transport case)

VR/AR-BASED:
  ├── FATS VR     ── VR headset, 2 trainees, fully portable
  └── FATS AR     ── Mixed reality, real environment + CGI, 4 trainees

SPECIALTY:
  └── FATS Drone  ── Counter-UAS training, VBS4, FPV goggles (NEW Dec 2025)

SHARED PLATFORM COMPONENTS:
  ├── BlueFire® Weapons      ── 300+ variants, wireless/tethered
  ├── Automatic Coaching      ── Doctrine-referenced real-time feedback
  ├── OCR Hit Detection       ── Shared across projection products
  ├── VBS3/VBS4 Integration   ── Licensed from Bohemia Interactive
  └── Instructor Interface    ── Common GUI across all products
```

**Platform strategy insight:** InVeris builds **shared components** (BlueFire, OCR, Coaching, VBS) then deploys across **7+ product variants**. Massive R&D amortization. WX has similar strategy with **IRONMESH** but at earlier stage.

---

## STRATEGIC BOTTLENECKS (VN Capability Gap for hypothetical reproduction)

| # | Bottleneck | FATS Component | WX Alternative | Impact |
|---|-----------|---------------|---------------|--------|
| 1 | **Real weapon conversion** | BlueFire kit converts live weapon → simulator | WX must fabricate replica from scratch | WX: lower fidelity but higher freedom |
| 2 | **OCR hit detection** | Custom real-time processor + calibrated cameras | Encoder-based ray-trace (already designed) | WX approach is viable, different trade-off |
| 3 | **VBS3/VBS4 license** | Licensed from Bohemia Interactive (~$M/yr?) | Unity (free for <$1M revenue) | **WX advantage: no license dependency** |
| 4 | **300+ weapon library** | 30+ years of weapon variant engineering | 5 weapon MWI (focused) | WX: quality > quantity for naval niche |
| 5 | **Automatic Coaching IP** | 30+ years of coaching algorithm + doctrine database | WX must build from scratch (opportunity for ACH) | **ACH opportunity: AI-adaptive coaching > rule-based** |

---

## COMPONENT INVENTORY SUMMARY

| Category | FATS 180MIL (est.) | WX LITE-PA2 |
|----------|-------------------|-------------|
| Unique components | ~45+ | ~25 |
| COTS components | ~60% | ~85% |
| Custom electronics | OCR processor, BlueFire sensors | Solenoid driver (from BB-01) |
| Licensed SW | VBS3/4 ($$$), game engine | Unity (free) |
| Proprietary SW | Coaching, analytics, scenario editor | All custom (Unity-based) |
| **Est. system cost** | **$50-80K** (HW only, excluding SW/NRE) | **$12-18K** (HW only) |
| **Est. sell price** | **$200-500K+** | **$50-70K** |
| **Est. gross margin** | ~75-85% | ~70-80% |

---

## TOP 5 UNKNOWNS (Need Physical Inspection or Deeper OSINT)

1. **OCR processor specifications** — frame rate, resolution, multi-spot disambiguation algorithm. Proprietary, not documented publicly.
2. **BlueFire recoil force-time profile** — claimed ~60% real recoil but exact force (N), pulse duration (ms), and shape unknown. **Critical for WX benchmarking.**
3. **Automatic Coaching algorithm** — rule-based or ML-based? How are doctrine rules configured? API or GUI? Training data requirements?
4. **FATS Drone C-UAS capabilities** — weapon types supported for C-UAS engagement? Naval scenarios? Scoring method for drone kills? Release date is recent (Dec 2025) so limited public info.
5. **Edge-blending technology** — hardware-based (projectors) or software-based? Calibration procedure? Automated or manual? Relevant to WX 3-screen setup.

---

## STAGE 1M SUMMARY

```
=== STAGE 1M COMPLETE — InVeris FATS 100MIL/180MIL + FATS Drone ===

Products analyzed: 5 (FATS 100MIL, 180MIL, VR, AR, Drone)
Components catalogued: ~45 (180MIL focus)
Domain split: MECH 15% / ELEC 25% / SW 45% / CTRL 15%
Critical discovery: FATS Drone (Dec 2025) = C-UAS on VBS4 — land-only, no maritime
Platform components identified: 5 shared (BlueFire, OCR, Coaching, VBS, Instructor GUI)
Strategic bottlenecks (VN): 5 (weapon conversion, OCR, VBS license, weapon library, coaching IP)
Unknown items: 5

KEY INSIGHTS FOR WX LITE-PA2:
1. SENSOR GAP: WX missing 3 coaching sensors (trigger pressure, cant, stock weld)
   → Consider adding IMU + force sensors to weapon module. Cost: ~$30-50/set.
2. RECOIL BENCHMARK: FATS claims ~60% real recoil. WX targets ≥25N (≥70%).
   → WX CAN EXCEED FATS in recoil fidelity IF PoC hits ≥25N target.
3. COACHING GAP: FATS real-time coaching >> WX post-session AAR
   → ACH opportunity: AI-adaptive coaching could LEAPFROG rule-based FATS coaching.
4. MARITIME MOAT: FATS has ZERO maritime capability. FATS Drone = land-only.
   → WX CUAV-SIM is UNCONTESTED in naval C-UAV/USV gunnery simulation.
5. PLATFORM LESSON: InVeris shares OCR + BlueFire + Coaching across 7 products.
   → WX should design LITE scoring module as reusable for FIXED/FULL/CORTEX.

CEO: approve Stage 1M to proceed to Stage 2M?
```
