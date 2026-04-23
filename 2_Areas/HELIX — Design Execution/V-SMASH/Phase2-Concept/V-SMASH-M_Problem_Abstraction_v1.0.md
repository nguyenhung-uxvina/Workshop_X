---
project: V-SMASH-M
phase: 2
type: problem-abstraction
prompt: P16
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Requirements_List_v1.0.md, V-SMASH-M_ODI_Report_v1.1, V-SMASH-M_Product_Proposal_v1.0.md]
qc_run: 13 (2 FLAGs resolved — CHK-04 classification scope, CHK-10 local content HC-6)
---

# V-SMASH-M (Micro-Sight) — Problem Abstraction (P16)

> **Product:** Clip-on AI aiming aid for infantry C-UAS. $500 target. ≤0.5 kg. "Follow the dot."
> **Purpose:** Remove solution bias before concept generation. Define essential function, hard constraints, and degrees of freedom.

---

## Top 10 Requirements (by ODI Opportunity Score)

| Req | Opp | What it demands |
|-----|-----|----------------|
| VM-Y03/Y04 | 18 | Classification confidence gating + ≤2% FPR |
| VM-C01 | 19 | Unit cost ≤$500 |
| VM-S06 | 16 | Lead indicator ≤1.0 mrad accuracy |
| VM-H01 | 16 | Training ≤2h |
| VM-S02 | 16 | ≤150 ms latency |
| VM-H02 | 15 | ≤3 sec power-on |
| VM-O06/O09 | 14 | ≥200m detection, Pd ≥90% |
| VM-S07 | 14 | ≤200 ms reacquisition |
| VM-G02 | 13 | ≤0.5 kg |
| VM-E02 | 13 | ≥8h battery |

---

## Level 1: Solution-Biased Language — Flagged and Abstracted

| Req ID | Original (solution-specific) | Abstracted (function-neutral) |
|--------|------------------------------|-------------------------------|
| VM-G03 | Picatinny rail interface (MIL-STD-1913), 21.2 mm slot | Interface with standard infantry weapon mounting system |
| VM-M01 | Glass-filled nylon (PA6-GF30) or equivalent | Impact-resistant, lightweight, locally-moldable housing material |
| VM-E01 | Rechargeable Li-ion, 18650 or 21700 format | Field-replaceable portable energy source, standard logistics format |
| VM-S01 | CMOS sensor ≥2 MP (1920×1080) | Capture visual scene data at resolution sufficient to detect 30 cm target at 200 m |
| VM-S03 | OLED display refresh rate ≥60 Hz | Present visual aiming reference at flicker-free update rate |
| VM-S05 | BLE 5.0 for IRONMESH upload | Short-range wireless data link for fleet integration (optional) |
| VM-H04 | ≥1,000 nits OLED brightness | Display readable in all ambient light including direct sunlight |
| VM-N05 | USB-C or BLE OTA firmware update | Firmware update via standard interface at depot level |
| VM-S08 | Optical system FOV 8°-15° | Optical capture aperture balancing target resolution vs situational awareness |
| VM-S09 | f-number ≤f/2.0 | Optical light-gathering sufficient for low-light detection |
| VM-M05 | Jetson junction ≤95°C at +55°C in sealed housing | Compute module thermal management within sealed enclosure at max ambient |
| VM-O10/O11 | IEC 61000-4 / CISPR 32 EMC | Electromagnetic compatibility with co-located military radio equipment |

**[SAFETY-CONSTRAINT-REMOVED] check:** None. No abstraction removed a safety constraint. VM-Y01-Y06 are all function-level — they survive abstraction intact.

---

## Level 2: Essential Function

> **"Transform visual scene information into a spatial aiming reference to enable effective small-arms engagement of small, moving aerial targets."**

**Classification scope note [QC-RUN13, CHK-04]:** "Transform" includes a classification sub-step (drone/bird/debris/unknown) that determines WHETHER an aiming reference is displayed. Classification confidence gating (VM-Y03: no indicator below 70%) is a safety interlock within this transformation. **Classification ≠ threat identification ≠ engagement authorization.** ROE decision remains with the soldier. P17 must decompose classification as a distinct sub-function with its own HITL boundary.

**Verification — WHAT not HOW:**
- No sensor technology named (CMOS, IR, etc.)
- No display technology named (OLED, LED, holographic, etc.)
- No compute platform named (Jetson, Hailo, FPGA, etc.)
- No specific weapon system named
- Describes the transformation: scene → aiming reference
- Describes the goal: effective engagement of aerial targets

---

## Level 3: Hard Constraints (6)

| # | Hard Constraint | Source | Why non-negotiable |
|---|----------------|--------|-------------------|
| HC-1 | **No autonomous fire capability** — system provides information only; human controls trigger | VM-Y01 [SAFETY-CRITICAL] | ROE requires human in loop. No solution may bypass this. |
| HC-2 | **Human-portable mass ≤0.5 kg** — must not degrade infantry mobility | VM-G02 (D) / C1 conflict resolution | Soldier carries 25-35 kg already. Any heavier = won't be carried. |
| HC-3 | **Standard weapon interface** — mount on existing infantry weapons without weapon modification | VM-G03 (D) / MIL-STD-1913 | 100% of target weapons have Picatinny rail. No alternative universal mount exists. |
| HC-4 | **Unit cost ≤$500** — mass procurement at battalion scale | VM-C01 (D) / OM14 (Opp 19) | Kill threshold: >$600 = procurement won't approve. Volume play requires low unit cost. |
| HC-5 | **Military environmental survivability** — operational in field conditions (-10°C to +55°C, 10,000G shock, IP67, dust) | VM-M02, VM-F01, VM-O01-O05 (all D) | Any solution that fails in rain, cold, or recoil is useless. |
| HC-6 | **Local content ≥60% by value** — Vietnamese defense sovereignty requirement | VM-C02 (D) / MoD procurement rules | [QC-RUN13, CHK-10] D-classified requirement — any concept below 60% local content is non-viable regardless of other merits. |

---

## Level 4: Degrees of Freedom (5 areas)

| # | Degree of Freedom | Design Space Open | Example Options |
|---|-------------------|-------------------|-----------------|
| DoF-1 | **Aiming reference presentation** — how the soldier sees where to aim | Technology, form factor, optical path all open | See-through OLED overlay / LED ring / projected reticle / audio cue / smartphone HUD |
| DoF-2 | **Compute architecture** — where and how AI inference executes | Processor type, location, power trade all open | Edge SoC (Jetson/Hailo) / DSP / FPGA / hybrid / offloaded to phone |
| DoF-3 | **Optical capture system** — how scene data enters the system | Lens type, FOV, spectrum all open | Fixed lens / zoom / wide+crop / visible / near-IR / dual-band |
| DoF-4 | **Energy system** — how portable power is stored and managed | Chemistry, form factor, swappable vs integral all open | Li-ion cell / LiFePO4 / supercapacitor / CR123A primary / solar trickle |
| DoF-5 | **Fleet connectivity** — whether and how unit communicates externally | Protocol, requirement level (optional vs mandatory) all open | BLE / LoRa / WiFi / wired / none (fully standalone) / phone bridge |

---

## QC Gate Run #13 — Amendments Applied

| Flag | Severity | Amendment |
|------|----------|-----------|
| CHK-04 | MEDIUM | Added classification scope note to essential function. Classification ≠ threat ID ≠ engagement auth boundary preserved. P17 instruction added. |
| CHK-10 | MEDIUM | Added HC-6: local content ≥60% as independent hard constraint (not merged with HC-4 — cost and local content are independent failure modes). |

**Gate result after amendments:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
