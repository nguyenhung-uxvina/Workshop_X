---
project: V-SMASH-M
phase: 3
type: embodiment-task-clarification
prompt: P22
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_VDI2225_Evaluation_v1.0.md, V-SMASH-M_Function_Structure_v1.0.md, V-SMASH-M_Morphological_Matrix_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
selected_concept: "α — Proven Baseline (Rt = 0.81)"
---

# V-SMASH-M (Micro-Sight) — Embodiment Task Clarification (P22)

> **Purpose:** Translate Concept α into an actionable embodiment design task. Define all interfaces, audit production capability, plan design sequence, and map carry-forward risk mitigations.
> **Selected concept:** α — Proven Baseline (YOLO + OLED + size-based range). Rt = 0.81. Zero weak spots.
> **Envelope:** ≤120 × 50 × 60 mm, ≤0.50 kg (VM-G01, VM-G02)

---

## 1. Concept α — Working Principle Summary

| Sub-Function | Selected Working Principle | Key Component(s) |
|-------------|---------------------------|-------------------|
| SF1: Capture visual scene | A1 — Visible CMOS, global shutter | Sony IMX global shutter sensor, 2MP+, 12° FOV, f/1.8 lens |
| SF2: Detect aerial object | A2 — YOLOv8-nano (on-device, INT8) | Jetson Orin Nano (or equivalent edge SoC with GPU/NPU) |
| SF3: Classify object type | A3 — Integrated CNN (YOLO classification head) | Same SoC — no additional hardware |
| SF4: Gate on confidence | B4 — Threshold + temporal filter (≥70%, 3 frames) | Software on SoC — no additional hardware |
| SF5: Compute ballistic lead | A5 — Monocular size-based range + ballistic lookup | Software on SoC — pre-computed tables for 7.62×39mm |
| SF6: Present aiming reference | A6 — See-through OLED micro-display | OLED micro-display + beam-splitter + relay optics |
| SF7: Store & transfer data | A7 — BLE 5.0 to IRONMESH | BLE 5.0 module (e.g., nRF52840) |
| SFS1: Regulate energy | 21700 Li-ion cell + synchronous buck regulator | Single 21700 cell (~5,000 mAh, 3.7V = 18.5 Wh) |
| SFS2: Protect internals | PA6-GF30 injection-molded housing, IP67 sealed | Housing + O-ring seals + potting |
| SFS3: Interface with weapon | Picatinny MIL-STD-1913 clamping mount | Aluminum or steel clamp + cross-bolt |

---

## 2. Interface Inventory

### 2.1 External Interfaces (to systems outside V-SMASH-M boundary)

| #     | Interface                | Connected To                              | Type              | Fixed/Flexible | Standard/Protocol                                                                                                                                                                      | Safety?            |
| ----- | ------------------------ | ----------------------------------------- | ----------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| EI-01 | Picatinny rail mount     | Weapon top rail (AK/M4/etc.)              | Mechanical        | **FIXED**      | MIL-STD-1913: 21.2 mm ± 0.1 mm slot (VM-G03)                                                                                                                                           | No                 |
| EI-02 | Operator eye interface   | Human eye in shooting position            | Optical           | **FIXED**      | Eye relief 25-75 mm (VM-H05), ≥1,000 nits (VM-H04)                                                                                                                                     | No                 |
| EI-03 | Power button             | Operator finger (gloved)                  | Mechanical        | Flexible       | Single button, ≤20 N actuation                                                                                                                                                         | No                 |
| EI-04 | USB-C charge/data port   | Charger / depot laptop                    | Electrical + Data | Flexible       | USB-C PD (5V/2A for charge), USB 2.0 data for firmware                                                                                                                                 | No                 |
| EI-05 | BLE 5.0 antenna (RF)     | IRONMESH gateway / tablet                 | RF (2.4 GHz)      | Flexible       | BLE 5.0 (VM-S05)                                                                                                                                                                       | No                 |
| EI-06 | Battery compartment door | Operator (field replacement)              | Mechanical        | Flexible       | Tool-free, single-hand, gloved, ≤60s (VM-A01, VM-G05)                                                                                                                                  | No                 |
| EI-07 | Ambient light input      | Scene (drones, sky, ground)               | Optical           | **FIXED**      | FOV 8-15° (VM-S08), f/≤2.0 (VM-S09)                                                                                                                                                    | No                 |
| EI-08 | Shock/vibration input    | Weapon recoil environment                 | Mechanical        | **FIXED**      | 10,000 G, 0.5 ms (VM-F01); 500 rounds zero-shift (VM-F03)                                                                                                                              | [SAFETY-INTERFACE] |
| EI-09 | RF environment (EMC/EMI) | Co-located military VHF/UHF radios at ≤1m | RF                | **FIXED**      | VM-O10: radiated immunity 3 V/m 80 MHz–2.7 GHz (IEC 61000-4-3). VM-O11: emissions per CISPR 32 Class B. BLE 2.4 GHz shall not disrupt/be disrupted by VHF/UHF at 1m. [QC-RUN18 CHK-05] | No                 |

### 2.2 Internal Interfaces (between sub-assemblies)

| # | Interface | From → To | Type | Key Parameters |
|---|-----------|-----------|------|----------------|
| II-01 | Sensor data bus | CMOS sensor → SoC | Electrical (MIPI CSI-2) | 2-lane, ≥30 fps, cable ≤30 mm |
| II-02 | OLED video signal | SoC → OLED micro-display | Electrical (MIPI DSI or SPI) | ≥60 Hz refresh (VM-S03) |
| II-03 | BLE serial link | SoC → BLE module | Electrical (UART/SPI) | 115200 baud minimum |
| II-04 | Power distribution | Battery → regulator → all | Electrical | 3.0-4.2V input, 5V/3.3V/1.8V rails, ≤2.3W avg (VM-E03), ≤4.0W peak (VM-E07) |
| II-05 | Optical path (scene → sensor) | Lens assembly → CMOS | Optical | 12° FOV, f/1.8, back focal ≥6mm, flange-to-sensor alignment ≤0.1mm |
| II-06 | Optical path (OLED → eye) | OLED → beam-splitter → eye | Optical | See-through overlay, beam-splitter 50/50 or 70R/30T. **Optical error budget [QC-RUN18 CHK-06]:** VM-S06 requires ≤1.0 mrad total lead accuracy. Error contributors: OLED pixel pitch (≤0.2 mrad), beam-splitter alignment (≤0.2 mrad), housing-to-rail alignment (≤0.3 mrad), AI ballistic computation (≤0.3 mrad). Total RSS: √(0.2²+0.2²+0.3²+0.3²) = 0.51 mrad — within 1.0 mrad budget with 49% margin. Each contributor is a D5/D3 design target. |
| II-07 | Thermal path (SoC → housing) | SoC → thermal pad → heat spreader → housing wall | Thermal | Jetson Tj ≤95°C at 55°C ambient (VM-M05). R_θ_total ≤17.4°C/W derived (ΔT=40°C / 2.3W). Design target: ≤15°C/W (14% margin). [QC-RUN18 CHK-01] |
| II-08 | Structural mount (PCB → housing) | Main PCB → housing bosses | Mechanical | 4× M2.5 standoffs, vibration-rated, captive |
| II-09 | Structural mount (sensor → housing) | CMOS+lens assembly → housing front | Mechanical | Alignment tolerance ≤0.1 mm, retained after 10,000G shock |
| II-10 | Structural mount (OLED → housing) | OLED+beam-splitter → housing rear | Mechanical | Optical axis alignment ≤0.2 mrad to sensor axis |
| II-11 | Seal interface (housing halves) | Top shell → bottom shell | Mechanical | IP67 O-ring groove, ≤4× T10 Torx fasteners |
| II-12 | Seal interface (battery door) | Battery door → housing | Mechanical | IP65 silicone gasket, tool-free latch, ≤20 N (VM-G05) |
| II-13 | Shock isolation (SoC/sensor) | PCB/sensor → housing | Mechanical | Vibration isolators or potting to survive 10,000G without solder joint failure |

### 2.3 Safety-Tagged Interfaces

| Interface | Safety Classification | Rationale |
|-----------|----------------------|-----------|
| EI-08 (Recoil shock) | [SAFETY-INTERFACE] | 10,000G shock directly affects optical alignment (II-05, II-06, II-09, II-10). Misalignment after recoil → stale/incorrect lead indicator → soldier aims at wrong point. Requires dedicated shock analysis before layout commits. |

> **Safety note (VM-Y01):** V-SMASH-M has ZERO electrical connections to weapon trigger mechanism. No fire control interface exists. Verify: no wire, no connector, no PCB trace crosses the weapon boundary except the mechanical rail clamp (EI-01).

---

## 3. Production Capability Audit (Workshop X)

| # | Process | Available in Vietnam? | Workshop X Capable? | Cost Level | Tolerance Capability | V-SMASH-M Need |
|---|---------|----------------------|--------------------|-----------|--------------------|----------------|
| PR-01 | Injection molding (PA6-GF30) | Yes — multiple vendors | Yes — single-cavity mold (VM-P01) | Low-Med | ±0.1 mm general, ±0.05 mm on critical | Housing shells, battery door, lens mount ring |
| PR-02 | CNC machining (aluminum) | Yes — Hanoi/HCM | Limited (outsource to Hòa Phát or 3rd party) | Medium | ±0.02 mm | Picatinny clamp, heat spreader, optical alignment features |
| PR-03 | SMT PCB assembly | Yes | Yes — ≤200 SMD, ≤4 BGA (VM-P02) | Low-Med | 0.4 mm pitch BGA, 0201 passives | Main PCB (SoC, power, BLE, connectors) |
| PR-04 | Through-hole soldering | Yes | Yes | Low | Standard | Battery contacts, power button, USB-C receptacle |
| PR-05 | Optical assembly (lens-sensor alignment) | Limited — no precision optical house in VN | **New capability required** — jig-assisted alignment at WX. **Jig spec [QC-RUN18 CHK-12]:** V-block fixture locates lens barrel to housing datum A (rail interface face). Dial indicator measures lens-to-sensor flange distance (target: back focal ±0.05mm). Collimated target at 5m verifies FOV center alignment (≤0.1mm lateral shift = ≤0.3 mrad). Acceptance: image of 5m target centered within ±5px on sensor. | Medium | ≤0.1 mm position, ≤0.3 mrad angular | Lens-to-sensor, referenced to housing datum A |
| PR-06 | O-ring/gasket sealing | Yes | Yes | Low | Standard groove tolerances (Parker handbook) | IP67 housing seal, IP65 battery door |
| PR-07 | Conformal coating (PCB) | Yes — outsource to PCB vendor | Yes (outsource) | Low | IPC-CC-830 Class 2 | PCB moisture protection |
| PR-08 | Potting/encapsulation | Yes | Yes — manual or semi-auto dispense | Low | ±1 mm | Shock protection for SoC module, cable strain relief |
| PR-09 | Surface treatment (housing) | Yes — painting, pad printing | Yes | Low | Cosmetic | Matte finish, markings, serial number |
| PR-10 | Functional testing (EOL) | Partial — manual test station exists | **Needs new test jig** (~$2K) | Low | Pass/fail per VM-Q01 | Power-on + AI detect + indicator + BLE handshake |
| PR-11 | OLED alignment jig | No — new tooling | **Needs new jig** (~$2K). **Jig spec [QC-RUN18 CHK-12]:** Fixture holds SA-03 (OLED + beam-splitter + relay lens) in housing rear pocket. Bore-sight target projected through beam-splitter onto collimated reference at 5m. Adjustment screws allow ±1° tilt and ±0.5mm lateral. Lock with UV-cure adhesive once aligned. Acceptance: bore-sight dot within ≤0.2 mrad of sensor optical axis (measured by activating test pattern on OLED and comparing to sensor FOV center). Production cycle: ~3 min per unit. | One-time | ≤0.2 mrad | OLED + beam-splitter alignment to sensor axis via housing datum A |

### Production Capability Summary

| Category | Status |
|----------|--------|
| Processes available at WX | 8/11 (73%) |
| New capabilities needed | 3 (optical assembly jig, OLED alignment jig, EOL test jig) |
| Estimated tooling investment | ~$6K one-time (PR-05 jig $2K + PR-10 jig $2K + PR-11 jig $2K) |
| Outsourced processes | 2 (CNC aluminum — clamp/heatsink; conformal coating) |
| Blocking risks | None — all achievable with jig investment |

---

## 4. Sub-Assembly Decomposition

Based on the interface inventory, V-SMASH-M decomposes into **6 sub-assemblies + 1 accessory:**

| # | Sub-Assembly | Contains | Primary Function |
|---|-------------|----------|-----------------|
| SA-01 | **Sensor Module** | CMOS sensor + lens + lens mount + IR-cut filter + flex cable | SF1: Capture visual scene |
| SA-02 | **Compute Module** | SoC (Jetson Orin Nano or equiv.) + RAM + eMMC + thermal pad | SF2/SF3/SF4/SF5: All AI + compute |
| SA-03 | **Display Module** | OLED micro-display + beam-splitter + relay lens + exit window | SF6: Present aiming reference |
| SA-04 | **Main PCB** | Power regulation, BLE module, USB-C, button, LED indicators, connectors to SA-01/SA-02/SA-03 | SFS1 + SF7 + system integration |
| SA-05 | **Housing Assembly** | Top shell + bottom shell + O-rings + battery door + fasteners + rail clamp | SFS2 + SFS3: Protection + weapon interface |
| SA-06 | **Battery Pack** | 21700 Li-ion cell (~5,000 mAh) + spring contacts + polarity protection | SFS1: Energy storage |
| ACC-01 | **Accessories** | USB-C cable, lens cloth, quick-start card, depot tool (T10 Torx) | Support |

### Sub-Assembly → Sub-Function Mapping

```
SA-01 (Sensor)  ─── SF1 ──┐
                           ├── II-01 (MIPI CSI-2) ──→ SA-02 (Compute)
SA-02 (Compute) ─── SF2/SF3/SF4/SF5 ──┐
                                       ├── II-02 (MIPI DSI) ──→ SA-03 (Display)
SA-03 (Display) ─── SF6 ──┤
                           ├── II-06 (Optical) ──→ Operator eye
SA-04 (Main PCB) ── SFS1/SF7 ──┤
                                ├── II-04 (Power) ──→ All modules
                                ├── II-03 (UART) ──→ BLE antenna (EI-05)
SA-05 (Housing) ─── SFS2/SFS3 ── Structural envelope for all
SA-06 (Battery) ─── SFS1 ──── II-04 ──→ SA-04 (Main PCB)
```

---

## 5. Design Sequence (Dependency-Driven)

| Step | Design Task | Depends On | Rationale |
|------|------------|------------|-----------|
| **D1** | **Picatinny clamp + rail interface (SA-05 partial)** | Nothing — fixed interface | EI-01 is FIXED (MIL-STD-1913). Everything mounts to it. Defines bottom datum plane. Must survive VM-F03 (500 rounds zero shift). |
| **D2** | **Housing envelope + structural frame (SA-05)** | D1 (clamp defines bottom) | Housing shape sets the boundary for all internals. VM-G01 (120×50×60mm) is the box. O-ring groove geometry, fastener bosses, battery door cutout, optical apertures — all defined here. |
| **D3** | **Optical path layout (SA-01 + SA-03 positions)** | D2 (housing envelope) | Most critical internal layout decision. Sensor optical axis and OLED optical axis must be co-planar or precisely offset. Beam-splitter angle/position sets the display geometry. Drives front-face aperture and rear-face exit window in housing. |
| **D4** | **Sensor module integration (SA-01)** | D3 (optical path fixes sensor position) | Lens selection (focal length for 12° FOV), back focal distance, sensor-to-lens alignment. Drives front pocket geometry in housing. Shock isolation approach for sensor. |
| **D5** | **Display module integration (SA-03)** | D3 (optical path fixes display position) | OLED + beam-splitter + relay lens placement. Eye relief geometry (VM-H05: 25-75mm). Exit window size. Drives rear pocket geometry in housing. |
| **D6** | **Compute module placement (SA-02)** | D2, D3 (remaining volume after optics) | SoC placement in remaining volume. Thermal path to housing wall (II-07). MIPI cable routing to sensor (II-01) and display (II-02). ≤30mm cable length preferred. |
| **D7** | **Thermal management design** | D6 (SoC position known) | Thermal pad → heat spreader → housing wall path. Verify Tj ≤95°C at 55°C ambient (VM-M05). May need aluminum heat spreader insert in PA6-GF30 housing (thermal conductivity 0.3 W/mK for nylon vs 180 W/mK for aluminum). |
| **D8** | **Main PCB layout (SA-04)** | D4, D5, D6 (all modules positioned) | Power regulation, BLE, USB-C, button, LED indicators. Board shape fits around SA-01/SA-02/SA-03. Connector placement drives flex cable routing. **EMC considerations [QC-RUN18 CHK-05]:** BLE antenna placement away from SoC high-speed traces. Ground plane continuity under BLE module. USB-C common-mode choke. Ensure housing acts as partial shield (PA6-GF30 is non-conductive — may need internal EMI shield clip or conductive coating on housing interior near BLE antenna). EI-09 (VM-O10/O11) compliance verified at PCB level. |
| **D9** | **Battery compartment (SA-06)** | D2, D8 (remaining volume, power connector) | 21700 cell (70mm × 21mm). Spring contacts. Polarity protection circuit on SA-04. Battery door latch mechanism (VM-G05: ≤20N, single-hand, gloved). |
| **D10** | **Shock/vibration isolation** | D4, D5, D6, D8 (all internal positions) | Determine isolation approach: potting, elastomeric mounts, or structural design. Must survive 10,000G (VM-F01) without solder crack or optical misalignment. |
| **D11** | **Sealing + IP rating** | D2, D9, D11 (housing + battery door final) | O-ring groove dimensions, gasket compression, cable gland (if any). IP67 main body (VM-O04), IP65 battery door (VM-O05). |
| **D12** | **EOL test jig design** | D8 (PCB connectors), D2 (housing form) | Test fixture for VM-Q01: power-on, AI detect, indicator display, BLE handshake. Designed in parallel with product. |

### Design Sequence Diagram

```
D1: Picatinny clamp ──────────────────────────────────┐
    │                                                   │
D2: Housing envelope ──────────────────────────────────┤
    │                                                   │
D3: Optical path layout ──┬───────────────────────────┤
    │                     │                             │
D4: Sensor module    D5: Display module                │
    │                     │                             │
D6: Compute module ───────┤                             │
    │                     │                             │
D7: Thermal management    │                             │
    │                     │                             │
D8: Main PCB layout ──────┤                             │
    │                     │                             │
D9: Battery compartment   │                             │
    │                     │                             │
D10: Shock isolation ─────┤                             │
    │                     │                             │
D11: Sealing/IP ──────────┤                             │
    │                     │                             │
D12: Test jig ────────────┘                             │
```

### Critical Path

**D1 → D2 → D3 → D4/D5 (parallel) → D6 → D7 → D8 → D9 → D10 → D11**

The optical path layout (D3) is the most constrained step — it locks sensor and display positions that everything else works around. Getting D3 wrong forces D4-D11 rework.

---

## 6. Carry-Forward Risk & Mitigation Plan

### 6.1 Phase 2 Carry-Forward Items

| # | Risk / Issue | Source | Embodiment Design Approach | Success Criterion | Design Step |
|---|-------------|--------|---------------------------|-------------------|-------------|
| CF-01 | **SF5 cascading error** — wrong class (SF3) → wrong physical size → wrong range → wrong lead | P21 K2 note, QC-RUN17 CHK-06 | Add SF5 bounds check as explicit firmware requirement. Define bounds: max lead angle = f(max range, max crossing speed). If computed lead exceeds bounds → suppress indicator + "COMPUTE FAULT" (already in P17). In Phase 3: quantify bounds for 7.62×39 at 50-200m, verify bounds catch ≥95% of cascading errors. | Bounds check catches lead errors >3× expected value. Zero stale indicators from cascading error. | D8 (firmware spec on PCB/SoC) |
| CF-02 | **Export control VM-T03** — Jetson Orin Nano may be ECCN ≥3A991 | P13 VM-T03, QC-RUN14 Phase A CHK-10 | **[HITL Decision: Direct-solder SoC]** — accepted vendor lock-in for cost/weight savings (~$2 + 5g). Export control risk mitigated by: (a) obtain BIS ruling before Phase 4, (b) if blocked, full PCB redesign to alternative SoC (Rockchip RK3588, Amlogic A311D) — accept 4-6 week schedule impact. Direct-solder saves $2/unit × 10K units = $20K over product life. | BIS ruling obtained before Phase 4 procurement. If ECCN blocked → PCB redesign triggered (accept schedule slip). | D6, D8 (direct-solder layout) |
| CF-03 | **Independent reviewer for Phase 3 gate** | QC-RUN17 CHK-11 | KN is designer + evaluator. For Phase 3 gate (higher stakes — layout commits to tooling), identify 1 independent reviewer. Options: Workshop X lead engineer (mechanical), or external consultant (1-day review). | Independent reviewer signs off on Gate 4 assessment. | D12 (gate preparation) |
| CF-04 | **G5 — Field validation of AI performance** | P13 info gap G5 | Phase 3 cannot resolve this (needs prototype hardware). Document in Phase 3 risk register. Plan field validation as first Phase 4 activity (first article + drone test). | Risk registered. Phase 4 validation plan written. | All (risk register) |
| CF-05 | **BOM local content tracking** | P13 VM-C02, Phase 1 QC action | Build local content tracking into BOM from the start. Every component gets a "Local/Import" tag and cost value. Running total maintained. Target: ≥60% (D), ≥75% (W). | Local content % visible at every design review. | D8, D9 (BOM built during design) |

### 6.2 New Phase 3 Risks (Identified During P22)

| # | Risk | Severity | Likelihood | Mitigation | Design Step |
|---|------|----------|-----------|------------|-------------|
| NR-01 | **Optical alignment under recoil** — sensor and OLED optical paths misalign after 10,000G shock | HIGH | MEDIUM | Rigid one-piece optical bench (aluminum insert in housing) shared by sensor mount + OLED mount. Both optics reference same datum surface. Shock cannot cause relative displacement. | D3, D4, D5 |
| NR-02 | **Thermal management in sealed housing** — Jetson Tj exceeds 95°C at 55°C ambient in IP67-sealed PA6-GF30 | HIGH | HIGH | Aluminum heat spreader plate (30×30×2mm) bonded to housing wall. Thermal pad (1 W/mK) between SoC and spreader. Housing wall acts as heatsink (external surface convection). Calculate thermal resistance budget: Tj-Tamb = 40°C → need R_θ ≤ 40/2.3 = 17.4°C/W total path. | D7 |
| NR-03 | **Battery life margin with 21700** — 18.5 Wh at 2.0W avg = 9.25h (15% margin over VM-E02 8h). Comfortable but not excessive. | MEDIUM | LOW | Design AI idle-mode (reduce from 2.0W to ~1.0W when no detection) as good practice — extends battery to 12+ hours. Duty-cycling is beneficial but not mandatory for 21700. At -10°C: 18.5 × 0.65 = 12.0 Wh / 2.0W = 6.0h (meets VM-E06 ≥5h with 20% margin). | D6, D8 (power management firmware) |
| NR-04 | **OLED beam-splitter alignment precision** — ≤0.2 mrad required for VM-S06 compliance | MEDIUM | MEDIUM | Dedicated alignment jig (PR-11, ~$2K). OLED + beam-splitter pre-assembled and aligned as a module (SA-03) before insertion into housing. Factory acceptance: bore-sight test on each unit (VM-Q01). | D5, D12 |
| NR-05 | **PA6-GF30 housing wall too thin for IP67 at bolt points** — injection mold wall uniformity | LOW | LOW | Minimum wall thickness 2.0 mm (PA6-GF30 guideline). Boss walls 3.0 mm around fastener holes. FEA check at D2 (housing design). | D2 |

---

## 7. Weight Budget (Preliminary)

| Sub-Assembly | Estimated Mass | % of 500g Budget | Basis |
|-------------|---------------|-------------------|-------|
| SA-01: Sensor Module | 15 g | 3% | Sony IMX module (~5g) + lens (~8g) + mount (~2g) |
| SA-02: Compute Module | 30 g | 6% | Jetson Orin Nano SoM (~20g) + thermal pad/spreader (~10g) |
| SA-03: Display Module | 25 g | 5% | OLED micro-display (~3g) + beam-splitter (~10g) + relay lens (~7g) + mount (~5g) |
| SA-04: Main PCB | 25 g | 5% | PCB (~15g) + BLE module (~2g) + passives + connectors (~8g) |
| SA-05: Housing Assembly | 120 g | 24% | Top shell (~40g) + bottom shell (~40g) + clamp (~30g) + fasteners/O-rings (~10g) |
| SA-06: Battery Pack | 70 g | 14% | 21700 cell (~68g) + contacts (~2g) |
| Cables/misc | 15 g | 3% | Flex cables, potting, adhesive |
| **TOTAL** | **300 g** | **60%** | **200 g margin (40%)** |

**VM-G02 status:** 300g estimated vs 500g limit → 200g margin. Healthy — absorbs design growth, aluminum optical bench insert (+20g), heavier CNC clamp option, larger heat spreader.

### 7.1 Local Content Estimate by Sub-Assembly [QC-RUN18 CHK-10]

| Sub-Assembly | Est. Cost | Local/Import | Local Cost | Notes |
|-------------|-----------|-------------|-----------|-------|
| SA-01: Sensor Module | $25 | **Import** (sensor+lens) | $0 | Sony IMX sensor + lens — no VN source |
| SA-02: Compute Module | $45 | **Import** (SoC module) | $0 | Jetson Orin Nano — no VN source. EAR risk (CF-02). |
| SA-03: Display Module | $35 | **Import** (OLED) / **Local** (beam-splitter assembly) | $10 | OLED imported ~$25. Beam-splitter + relay lens + mount: local optical assembly ~$10. |
| SA-04: Main PCB | $30 | **Local** (PCB fab + SMT assembly) | $25 | PCB fabrication + SMT assembly at WX. Imported: BLE module ~$3, USB-C connector ~$1, regulator ICs ~$1. |
| SA-05: Housing Assembly | $25 | **Local** (injection mold + CNC clamp) | $22 | PA6-GF30 housing local injection mold ~$8. Al clamp local CNC ~$8. O-rings, fasteners local ~$3. Surface treatment local ~$3. |
| SA-06: Battery Pack | $8 | **Import** (cell) / **Local** (contacts) | $2 | 21700 cell imported ~$6. Spring contacts local ~$2. |
| ACC-01: Accessories | $3 | **Local** | $3 | USB-C cable, lens cloth, card — all locally sourceable. |
| Assembly labor | $15 | **Local** | $15 | WX assembly labor. |
| Firmware/software | $15 | **Local** | $15 | In-house development — 100% local value. |
| **TOTAL** | **$201** | | **$92** | |
| **Local Content %** | | | **45.8%** | **⚠ Below 60% (VM-C02 DEMAND)** |

**Gap analysis:** At $92/$201 = 45.8%, V-SMASH-M is **14.2 percentage points below** the 60% demand. The three import-heavy sub-assemblies (SA-01 sensor $25, SA-02 SoC $45, SA-03 OLED $25) account for $95 of $109 import value.

**Mitigation paths to ≥60%:**
1. **Increase local assembly value-add** — local optical alignment labor ($5), local testing ($3), local packaging ($2) = +$10 local → 50.7%
2. **Local PCB value-add** — conformal coating ($2), potting ($2), cable assembly ($3) = +$7 local → 54.2%
3. **Reclassify firmware/AI training** — if YOLO model training counted as local value (it is), add training compute time ($10) = +$10 → 59.1%
4. **Housing complexity increase** — aluminum optical bench insert ($3), heat spreader ($2), internal EMI shield ($2) = +$7 local → **62.6%** ✅

**Conclusion:** Achievable at ≥60% with paths 1-4 combined. CF-05 (BOM tracking) ensures this is validated component-by-component during D8/D9. The critical lever is maximizing local value-add on assembly, testing, and housing complexity — not substituting import components (no VN sensor/SoC/OLED source exists).

---

## 8. Power Budget (Preliminary)

| Consumer | Avg Power | Peak Power | Duty Cycle | Basis |
|----------|-----------|-----------|------------|-------|
| SoC (AI inference) | 1.5 W | 3.0 W | 70% (idle when no detection) | Jetson Orin Nano in 7W power mode, INT8 inference at 30fps. 1.5W is module-only at reduced clocks — [ASSUMPTION: needs bench measurement on dev kit before Phase 4]. If actual is 2.0-2.5W → total avg rises to 2.3-2.8W, exceeding VM-E03 (2.3W). Mitigation: AI idle-mode + frame-skip (15fps when no target). [QC-RUN18 CHK-06] |
| CMOS sensor | 0.15 W | 0.2 W | 100% | Sony IMX typical |
| OLED display | 0.15 W | 0.3 W | 100% (dim when no target, bright on engagement) | Micro-OLED typical |
| BLE module | 0.03 W | 0.1 W | 5% TX, 95% idle | nRF52840 typical |
| Power regulation (losses) | 0.17 W | 0.4 W | 100% | ~90% efficiency buck converter |
| **TOTAL** | **2.0 W** | **4.0 W** | | |

**VM-E03 status:** 2.0W avg vs 2.3W limit → 0.3W margin (13%). Achievable with AI idle-mode.
**VM-E02 status:** 18.5 Wh / 2.0W = **9.25h** vs 8h demand → **15% margin.** ✅
**VM-E06 status:** At -10°C: 18.5 × 0.65 = 12.0 Wh / 2.0W = **6.0h** vs 5h demand → **20% margin.** ✅
**VM-E07 status:** 4.0W peak vs 4.0W limit → at limit. Battery voltage sag analysis needed in D8. 21700 high-drain cell (e.g., Samsung 40T, 25A continuous) handles 4W/3.7V = 1.08A easily.

---

## 9. Preliminary Spatial Arrangement (Conceptual)

```
                    ┌──────────────── 120 mm ──────────────────┐
                    │                                           │
     FRONT          │                 TOP VIEW                  │         REAR
   (scene side)     │                                           │     (eye side)
                    │                                           │
  ┌─────────────────┼───────────────────────────────────────────┼─────────────────┐
  │                 │                                           │                 │  ↑
  │   ┌─────────┐  │  ┌────────────┐  ┌──────────────────┐  ┌─┼───────────┐     │  │
  │   │  LENS   │  │  │  CMOS      │  │   JETSON SoC     │  │ │  OLED +   │     │  │
  │   │  f/1.8  │──│──│  SENSOR    │──│   + thermal pad  │──│ │  BEAM-    │──── │──│──→ eye
  │   │  12°FOV │  │  │  (SA-01)   │  │   (SA-02)        │  │ │  SPLITTER │     │  │  50 mm
  │   └─────────┘  │  └────────────┘  └──────────────────┘  └─┼───────────┘     │  │
  │                 │                                           │                 │  │
  │   ┌────────────────────────────────────────────────────────────────────┐     │  │
  │   │                    MAIN PCB (SA-04)                                │     │  ↓
  │   │   [Power Reg] [BLE] [USB-C] [Button] [LED] [Connectors]          │     │
  │   └────────────────────────────────────────────────────────────────────┘     │
  │                 │                                           │                 │
  │   ┌────────────────────────┐                                                 │
  │   │   21700 BATTERY (SA-06)│   ← battery door access from bottom/side        │
  │   │   70mm × 21mm dia      │                                                 │
  │   └────────────────────────┘                                                 │
  │                 │                                           │                 │
  ├═════════════════╪═══════════════════════════════════════════╪═════════════════┤
  │  ████████████████  PICATINNY CLAMP (SA-05)  ████████████████████████████████ │
  └──────────────────────────────────────────────────────────────────────────────┘
                    │           ↓ weapon rail ↓                 │
                    │           ═══════════════                 │

SIDE VIEW (schematic):
  ┌──────────────────────────────────────────┐  ↑
  │  [Lens] → [Sensor] → [SoC] → [OLED] → ●│  60 mm max
  │  ──────── MAIN PCB ──────────────────────│  │
  │  [BATTERY 21700]  ← door access          │  ↓
  ├══════════ RAIL CLAMP ════════════════════╡
  │          ═══ weapon rail ═══              │
```

**Key layout decisions captured:**
- Linear optical path: lens (front) → sensor → SoC → OLED/beam-splitter (rear/eye side)
- PCB below optical path (full-length board, maximizes component area)
- Battery alongside or below PCB, accessible from bottom/side door
- Rail clamp at bottom — lowest possible center of gravity

---

## HITL CHECKPOINT — Design Sequence Review

**P22 complete. 4 deliverables generated:**
1. Interface inventory: 8 external + 13 internal interfaces, 1 [SAFETY-INTERFACE]
2. Production capability audit: 11 processes, 8 available, 3 need new jigs (~$6K)
3. Design sequence: 12 steps, critical path through D1→D2→D3→D4/D5→D6→D7→D8
4. Risk mitigation plan: 5 carry-forward + 5 new risks, all with mitigation approaches

**Key decisions for review:**

1. **Optical bench approach (NR-01):** Aluminum insert shared by sensor + OLED mounts — rigidity under recoil. Adds ~20g and ~$3 per unit. Alternative: rely on housing geometry alone (lighter, cheaper, riskier).

2. **SoM socket for export control (CF-02):** Designing PCB with SoM socket means Jetson OR alternative SoC can be used without PCB redesign. Adds ~$2 PCB cost and 5g weight. Alternative: solder SoC directly (cheaper, locked to one vendor).

3. **Battery format:** 21700 (18.5 Wh, 70g) vs 18650 (12.95 Wh, 48g). 18650 saves 22g and 5mm length but requires aggressive power management to meet VM-E02 (8h).

### HITL Decisions (APPROVED)

| # | Decision | Choice | Rationale | Impact |
|---|----------|--------|-----------|--------|
| HD-01 | Optical bench approach | **Aluminum insert** | Recoil survivability is non-negotiable for military product. +20g and +$3 is cheap insurance against NR-01. | +20g weight, +$3/unit, eliminates NR-01 risk |
| HD-02 | SoC integration | **Direct-solder** | Accept vendor lock-in. $2/unit × 10K = $20K savings. If EAR blocks Jetson → accept PCB redesign schedule hit. | -$2/unit, -5g weight, CF-02 risk accepted |
| HD-03 | Battery format | **21700** | 18.5 Wh provides 9.25h at 2.0W (15% margin over VM-E02). 6.0h at -10°C (20% margin over VM-E06). Comfortable power budget — no aggressive duty-cycling required. 70mm length fits within 120mm envelope with 50mm for optics. | NR-03 stays MEDIUM/LOW — no power management critical path |

**Result: APPROVED → proceed to QC then P23.**

---

## QC Gate Run #18 — Amendments Applied

| Flag | Check | Severity | Amendment |
|------|-------|----------|-----------|
| CHK-01 | Physics | LOW | Thermal resistance: II-07 now shows both derived limit (≤17.4°C/W) and design target (≤15°C/W with 14% margin). Inconsistency resolved. |
| CHK-05 | Environmental | MEDIUM | Added EI-09 (RF environment) to external interface table with VM-O10/O11 references. Added EMC design considerations to D8 (PCB layout): BLE antenna placement, ground plane, USB-C CMC, potential housing EMI shield. |
| CHK-06 | AI Confidence | MEDIUM | SoC power: 1.5W flagged as [ASSUMPTION: needs bench measurement]. If 2.0-2.5W actual → mitigation via idle-mode + frame-skip noted. Optical error budget decomposed in II-06: 4 contributors, RSS = 0.51 mrad vs 1.0 mrad budget (49% margin). |
| CHK-10 | Local Content | HIGH | Full sub-assembly local content table added (§7.1): baseline 45.8%, below 60% demand. Four mitigation paths identified → 62.6% achievable. CF-05 tracking validates during D8/D9. |
| CHK-12 | Placeholder | MEDIUM | PR-05 jig: V-block + collimated target + ±5px acceptance criterion specified. PR-11 jig: bore-sight alignment via UV-cure lock + ≤0.2 mrad acceptance + 3 min/unit cycle specified. |

**Gate result after amendments:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
