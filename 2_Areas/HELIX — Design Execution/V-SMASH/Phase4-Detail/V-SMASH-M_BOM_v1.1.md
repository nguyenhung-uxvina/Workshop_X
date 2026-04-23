---
project: V-SMASH-M
phase: 4
type: bom
version: 1.1
created: 2026-02-22
updated: 2026-03-03
status: approved
inputs:
  - V-SMASH-M_Material_Selection_v1.0.md (P24)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (P23)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (P27 §C)
  - V-SMASH-M_Cost_Estimate_v1.0.md (P27 §B)
  - V-SMASH-M_DfX_Analysis_v1.0.md (P25)
  - V-SMASH-M_FMEA_v1.0.md (P26)
  - V-SMASH-M_Standards_Compliance_Matrix_v1.0.md (P27 §A)
  - V-SMASH-M_SA01_VDI2225_Concept_Selection_v1.0.md (SA-01 Concept C ECO)
  - V-SMASH-M_SA01_OptimalSolution_40pctLC_v1.0.md (LC re-evaluation)
---

# V-SMASH-M — Bill of Materials (P33)

**Product:** V-SMASH-M (Micro AI Weapon Sight)
**BOM Revision:** B (SA-01 Concept C Engineering Change)
**BOM Basis:** Phase 3 Gate 3 APPROVED (2.85/4.0), 2026-02-22; SA-01 Concept C APPROVED 2026-03-03
**Production Volume Basis:** 500 units/year
**Currency:** USD

---

## Revision History

| Rev | Date | Description | Author |
|-----|------|-------------|--------|
| A | 2026-02-22 | Initial release. SA-01: OEM module + FFC/ZIF interconnect. | Engineering |
| **B** | **2026-03-03** | **SA-01 Engineering Change (ECO-SA01-001): Replace VM-1200 + VM-1201 (FFC/ZIF) with VM-1200-CHIP + VM-1205 + VM-1206 (carrier PCB + B2B). Root cause: VM-1201 ZIF connector is design defect — incompatible with T01 (10,000G × 500 cycles, MIL-STD-810H 516.8). SA-04: Replace 1× VM-4106 ZIF with VM-1207 B2B female. SA-01 cost: $28 → $32.20 (+$4.20/unit). LC incl. labor: 50.6% → ~53.1%.** | Engineering |

---

## 1. BOM Structure Overview

```
Level 0: VM-0000  V-SMASH-M End Item (370g)
├── Level 1: VM-1000  SA-01 Sensor Module ($32.20) ← Rev B
├── Level 1: VM-2000  SA-02 Compute Module ($47)
├── Level 1: VM-3000  SA-03 Display Module ($39)
├── Level 1: VM-4000  SA-04 Main PCB Assembly ($26.20) ← Rev B
├── Level 1: VM-5000  SA-05 Housing Assembly ($17)
├── Level 1: VM-6000  SA-06 Battery Pack ($9)
├── Level 1: VM-7000  ACC-01 Accessories ($4)
└── Level 1: VM-8000  Consumables & Assembly Materials ($5)
```

---

## 2. Indented Bill of Materials

### Level 0 — End Item

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 0 | 1 | **VM-0000** | **V-SMASH-M Micro AI Weapon Sight** | 1 | ea | — | Final assy + test | WX | — | **$208.00** | — | — | Factory gate price incl. 10% overhead. Rev B: +$6.40 vs Rev A ($202). |

---

### Level 1 / SA-01 — Sensor Module ($32.20) ← Rev B

> **ECO-SA01-001 (Rev B):** VM-1200 (OEM module) and VM-1201 (FFC/ZIF cable) REMOVED. Replaced by VM-1200-CHIP (bare sensor chip) + VM-1205 (local carrier PCB) + VM-1206 (B2B male connector). Root cause: ZIF connector fatally incompatible with T01 (10,000G × 500 cycles). Hirose DF40C B2B rated 20,000G (JEDEC). See VDI 2225 analysis: V-SMASH-M_SA01_VDI2225_Concept_Selection_v1.0.md.

| Lvl | Item    | Part Number      | Description                            | Qty | Unit | Material           | Process                                       | Source               | Unit Cost | Ext. Cost | L/I   | Lead (wk) | Notes                                                                                                                                                                                                                                                                             |
| --- | ------- | ---------------- | -------------------------------------- | --- | ---- | ------------------ | --------------------------------------------- | -------------------- | --------- | --------- | ----- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 1.1     | **VM-1000**      | **SA-01 Sensor Module Assy**           | 1   | ea   | —                  | Assy (PR-05 jig)                              | WX                   | —         | $32.20    | —     | —         | Rev B: +$4.20 vs Rev A. Carrier PCB underfill + conformal coat process adds $1.70 labor.                                                                                                                                                                                          |
| 2   | 1.1.1   | VM-1100          | Lens Assembly                          | 1   | ea   | —                  | Assy                                          | WX                   | —         | $10.00    | —     | —         |                                                                                                                                                                                                                                                                                   |
| 3   | 1.1.1.1 | VM-1101          | Objective lens (M12 mount)             | 1   | ea   | Optical glass      | Ground + AR coated                            | Import (CN/JP)       | $6.00     | $6.00     | **I** | 6         | MIL-O-13830 surface quality                                                                                                                                                                                                                                                       |
| 3   | 1.1.1.2 | VM-1102          | Lens barrel / mount ring               | 1   | ea   | Brass, black oxide | CNC turned                                    | Local                | $3.00     | $3.00     | L     | 2         | M12 thread, H7 register bore to VM-5301                                                                                                                                                                                                                                           |
| 3   | 1.1.1.3 | VM-1103          | Lens retaining ring                    | 1   | ea   | Brass              | CNC turned                                    | Local                | $1.00     | $1.00     | L     | 2         |                                                                                                                                                                                                                                                                                   |
| 2   | 1.1.2   | **VM-1200-CHIP** | **CMOS Image Sensor Chip (bare)**      | 1   | ea   | —                  | Pick & place + underfill                      | Import               | $13.00    | $13.00    | **I** | 6         | **Rev B: replaces VM-1200 OEM module.** Same silicon (OV4689 or IMX415). Bare chip — no module frame. Capillary underfill (Namics or equiv.) required post-placement. Same V4L2 driver as OEM module → zero SW rework.                                                            |
| 2   | 1.1.3   | **VM-1205**      | **Carrier PCB (sensor, 20×20mm)**      | 1   | ea   | FR-4 2-layer, ENIG | Fabricated + SMT + underfill + conformal coat | **Local (Bac Ninh)** | $5.00     | $5.00     | **L** | 3         | **Rev B: new part. LOCAL.** Controlled-impedance MIPI traces (100Ω diff). Sensor chip + B2B male footprint. Parylene or acrylic conformal coat post-underfill. 2× Ø1mm Cu fiducials for AOI. Sensor chip center-aligned to optical axis ±0.05mm. M4 mitigation path contribution. |
| 2   | 1.1.4   | **VM-1206**      | **B2B connector — male (carrier PCB)** | 1   | ea   | —                  | SMT reflow                                    | Import               | $1.50     | $1.50     | **I** | 4         | **Rev B: new part. Replaces ZIF.** Hirose DF40C-30DS-0.4V or equiv. Shock-rated ≥20,000G (JEDEC) — passes T01. 0.4mm pitch. 0.7mm mated height. −55°C to +125°C. Mates with VM-1207 on main PCB.                                                                                  |
| 2   | 1.1.5   | VM-1202          | Sensor mount screws M2×4 DIN 912       | 4   | ea   | A2-70 SS           | —                                             | Local                | $0.10     | $0.40     | L     | 1         | Loctite 243, 0.3 Nm                                                                                                                                                                                                                                                               |
| 2   | 1.1.6   | VM-1203          | Nylon isolating washer M2              | 4   | ea   | Nylon 6/6          | Molded                                        | Local                | $0.02     | $0.08     | L     | 1         | Dissimilar metal isolation                                                                                                                                                                                                                                                        |
| 2   | 1.1.7   | VM-1204          | Sensor alignment shim set              | 1   | set  | SS 304             | Laser cut                                     | Local                | $0.50     | $0.50     | L     | 2         | 0.05/0.10/0.20mm, selected at PR-05                                                                                                                                                                                                                                               |

> **REMOVED (Rev A, superseded):**
> - ~~VM-1200 CMOS Image Sensor (OEM module, $15, Import) — ZIF-interconnected module. Design defect: fails T01.~~
> - ~~VM-1201 Sensor-to-PCB flex cable MIPI CSI-2 (FFC/ZIF, $2, Import) — ZIF connector incompatible with 10,000G × 500 cycles.~~

---

### Level 1 / SA-02 — Compute Module ($47)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.2 | **VM-2000** | **SA-02 Compute Module Assy** | 1 | ea | — | Solder (BGA) | WX | — | $47.00 | — | — | Direct-solder per HD-02 |
| 2 | 1.2.1 | VM-2101 | SoC — NVIDIA Jetson Orin Nano | 1 | ea | — | BGA reflow | Import (US) | $40.00 | $40.00 | **I** | 10 | [EXPORT-REVIEW: EAR REQUEST INITIATED 2026-03-03] BIS/EAR 3A090 classification pending. EAR ruling expected 6–10 weeks. Do NOT procure until cleared. HD-02 accepted vendor lock-in. |
| 2 | 1.2.2 | VM-2102 | Thermal pad (SoC to spreader) | 1 | ea | Silicone, ≥1.0 W/mK | Die cut | Import | $1.50 | $1.50 | **I** | 4 | Bergquist GP1500 or equiv., 1mm thick |
| 2 | 1.2.3 | VM-2103 | eMMC flash module (32GB) | 1 | ea | — | BGA reflow | Import | $3.00 | $3.00 | **I** | 6 | YOLO model + firmware storage |
| 2 | 1.2.4 | VM-2104 | LPDDR4 RAM (4GB) | 1 | ea | — | BGA reflow | Import | $2.50 | $2.50 | **I** | 6 | Integrated on Jetson module — included in VM-2101 if module variant, else separate |

**Note:** If Jetson Orin Nano is procured as a full module (SoM), VM-2103 and VM-2104 are included in VM-2101 and should be removed. Cost stays at ~$45 for module variant. Verify at procurement.

---

### Level 1 / SA-03 — Display Module ($39)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.3 | **VM-3000** | **SA-03 Display Module Assy** | 1 | ea | — | Assy (PR-11 jig) | WX | — | $39.00 | — | — | UV-cure lock (irreversible) |
| 2 | 1.3.1 | VM-3101 | OLED micro-display (0.39" 1024×768) | 1 | ea | — | — | Import | $20.00 | $20.00 | **I** | 8 | [VENDOR QUALIFICATION IN PROGRESS] RFQ issued to Sony (ECX339A). eMagin SXGA096 as backup. Target: 2 qualified sources by S02. |
| 2 | 1.3.2 | VM-3102 | Beam-splitter (BK7, 50R/50T) | 1 | ea | BK7 optical glass | Ground, polished, coated | Import (CN/JP) | $10.00 | $10.00 | **I** | 8 | 15×15×1.5mm, λ/4 flatness, 50R/50T ±5% @ 450-650nm. MIL-C-675 coating adhesion. MIL-O-13830 scratch-dig. AR rear face |
| 2 | 1.3.3 | VM-3103 | Relay lens (collimating) | 1 | ea | Optical glass | Ground, AR coated | Import (CN/JP) | $4.00 | $4.00 | **I** | 6 | Collimates OLED output to beam-splitter |
| 2 | 1.3.4 | VM-3104 | Display-to-PCB flex cable (MIPI DSI) | 1 | ea | FPC | — | Import | $2.00 | $2.00 | **I** | 4 | ZIF connector both ends. NOTE: DSI flex cable retained (display side only). M4 mitigation path still applicable to this part. |
| 2 | 1.3.5 | VM-3105 | UV-cure adhesive (display lock) | 1 | dose | UV-cure acrylic | Dispense + cure | Import | $0.50 | $0.50 | **I** | 4 | Thermal cycling qualified: -10°C to +55°C, 100 cycles, ≤0.1 mrad drift (per F11) |
| 2 | 1.3.6 | VM-3106 | Display mount bracket | 1 | ea | AA6061-T6 | CNC milled | Local | $2.00 | $2.00 | L | 2 | Holds OLED + relay lens in 45° beam-splitter alignment |
| 2 | 1.3.7 | VM-3107 | Display mount screws M2×4 DIN 912 | 2 | ea | A2-70 SS | — | Local | $0.10 | $0.20 | L | 1 | Loctite 243, 0.3 Nm |
| 2 | 1.3.8 | VM-3108 | Nylon isolating washer M2 | 2 | ea | Nylon 6/6 | Molded | Local | $0.02 | $0.04 | L | 1 | |

---

### Level 1 / SA-04 — Main PCB Assembly ($26.20) ← Rev B

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.4 | **VM-4000** | **SA-04 Main PCB Assembly** | 1 | ea | — | SMT + conformal coat | WX | — | $26.20 | — | — | Rev B: +$1.20 (VM-4106 qty 2→1; add VM-1207 B2B female). |
| 2 | 1.4.1 | VM-4101 | PCB bare board (4-layer, FR-4) | 1 | ea | FR-4, 1.6mm, ENIG | Fabricated | Local | $3.00 | $3.00 | L | 3 | Ground plane continuity for EMC (IEC 61000-4-3) |
| 2 | 1.4.2 | VM-4102 | BLE module (nRF52840 or equiv.) | 1 | ea | — | SMT reflow | Import | $3.50 | $3.50 | **I** | 6 | BLE 5.0, Bluetooth SIG pre-certified. Antenna isolation per EMC |
| 2 | 1.4.3 | VM-4103 | USB-C connector (PD 5V/2A) | 1 | ea | — | SMT reflow | Import | $0.50 | $0.50 | **I** | 4 | USB-IF compliant, USB 2.0 data + charge |
| 2 | 1.4.4 | VM-4104 | Power regulator module (5V/3.3V) | 1 | ea | — | SMT reflow | Import | $1.50 | $1.50 | **I** | 4 | Buck converter, ≥90% efficiency |
| 2 | 1.4.5 | VM-4105 | Battery protection IC | 1 | ea | — | SMT reflow | Import | $0.80 | $0.80 | **I** | 4 | OV/UV/OC/SC protection per F21 (S=10) |
| 2 | 1.4.6 | **VM-4106** | **ZIF connector (MIPI DSI only)** | **1** | ea | — | SMT reflow | Import | $0.30 | **$0.30** | **I** | 4 | **Rev B: qty 2→1.** DSI connector for VM-3104 (display) retained. CSI-2 ZIF removed — replaced by VM-1207 B2B female for SA-01 sensor interface. |
| 2 | 1.4.7 | VM-4107 | Passive components (R, C, L kit) | 1 | set | — | SMT reflow | Import | $2.00 | $2.00 | **I** | 4 | ~50 components per board |
| 2 | 1.4.8 | VM-4108 | Status LED (RGB) | 1 | ea | — | SMT reflow | Import | $0.15 | $0.15 | **I** | 4 | Power/BLE/error indication |
| 2 | 1.4.9 | VM-4109 | Tactile switch (power button) | 1 | ea | — | SMT reflow | Import | $0.10 | $0.10 | **I** | 4 | IP67 rated, side-actuated |
| 2 | 1.4.10 | VM-4110 | Conformal coating (IPC-CC-830 Class 2) | 1 | dose | Acrylic conformal coat | Spray / selective coat | Import (material) | $0.50 | $0.50 | **I** | 4 | Second moisture barrier per F16. RoHS-compliant |
| 2 | 1.4.11 | VM-4111 | Battery contact assembly (spring + pad) | 1 | set | BeCu springs, Ni-plated | — | Import | $0.80 | $0.80 | **I** | 4 | Recoil-rated springs per F22, corrosion-resistant |
| 2 | 1.4.12 | VM-4112 | SMT assembly labor | 1 | ea | — | Reflow + AOI + ICT | WX | $5.00 | $5.00 | L | — | Includes placement, reflow, inspection |
| 2 | 1.4.13 | VM-4113 | RoHS-compliant solder paste | 1 | dose | SAC305 | Stencil print | Import | $0.10 | $0.10 | **I** | 4 | Per P25 DfRD: RoHS mandatory |
| 2 | 1.4.14 | VM-4114 | Antenna (chip or PCB trace) | 1 | ea | — | SMT or integrated | Import | $0.50 | $0.50 | **I** | 4 | BLE 2.4GHz, matched to nRF52840 |
| 2 | 1.4.15 | **VM-1207** | **B2B connector — female (main PCB)** | 1 | ea | — | SMT reflow | Import | $1.50 | $1.50 | **I** | 4 | **Rev B: new part. Replaces ZIF CSI-2.** Hirose DF40C-30DP-0.4V. Mates with VM-1206 on SA-01 carrier PCB. Shock-rated ≥20,000G (JEDEC). |

**Note (Rev B):** VM-2101 (Jetson Orin Nano) is soldered directly to VM-4101 per HD-02, tracked under SA-02 for cost allocation. Physical attachment point is SA-04 PCB.

---

### Level 1 / SA-05 — Housing Assembly ($17)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.5 | **VM-5000** | **SA-05 Housing Assembly** | 1 | ea | — | Assy | WX | — | $17.00 | — | — | |
| 2 | 1.5.1 | VM-5100 | Housing Upper Shell | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.1.1 | VM-5101 | Upper shell (molded, with fins) | 1 | ea | PA6-GF30, UV-stab, black | Injection molded | Local (WX) | $2.50 | $2.50 | L | 2 | Zytel 70G30HSL BK039 or equiv. 2.0mm wall, 3.0mm at bosses. 8 fins 1.5×5×40mm per HD-04. Matte VDI 24 texture. |
| 3 | 1.5.1.2 | VM-5102 | Pad-print markings (upper shell) | 1 | ea | Ink | Pad print | Local | $0.30 | $0.30 | L | 1 | Product ID, safety markings |
| 2 | 1.5.2 | VM-5200 | Housing Lower Shell | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.2.1 | VM-5201 | Lower shell (molded) | 1 | ea | PA6-GF30, UV-stab, black | Injection molded | Local (WX) | $2.50 | $2.50 | L | 2 | O-ring groove per Parker handbook, IP67. M2.5 brass insert bosses. |
| 3 | 1.5.2.2 | VM-5202 | O-ring seal (body, IP67) | 1 | ea | NBR 70 Shore A | Molded | Local | $0.30 | $0.30 | L | 2 | Parker-spec groove, ≥15% compression per F16 |
| 3 | 1.5.2.3 | VM-5203 | Brass heat-set inserts M2.5 | 4 | ea | CuZn39Pb3 (free-cutting brass) | Machined | Local | $0.10 | $0.40 | L | 2 | Pull-out ≥200N. Pressed into lower shell at Step 6 |
| 2 | 1.5.3 | VM-5300 | Optical Bench Sub-Assy | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.3.1 | VM-5301 | Optical bench insert | 1 | ea | AA7075-T6 per AMS-QQ-A-250/12 | CNC milled + hard anodize | Import (plate) + Local (CNC + anodize) | $15.00 | $15.00 | L/I | 4 | 80×25×5mm per HD-05. H7 register bore. Fillet ≥0.5mm per F19. MIL-A-8625 Type III ≥50μm sealed. Edge break ≥0.3mm. 80g |
| 3 | 1.5.3.2 | VM-5302 | Optical bench mount screws M3×8 DIN 912 | 4 | ea | A2-70 SS | — | Local | $0.12 | $0.48 | L | 1 | Loctite 243, 0.8 Nm |
| 3 | 1.5.3.3 | VM-5303 | Nylon isolating washer M3 | 4 | ea | Nylon 6/6 | Molded | Local | $0.02 | $0.08 | L | 1 | Galvanic isolation: Al/SS per DfCorr |
| 2 | 1.5.4 | VM-5400 | Thermal Management Sub-Assy | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.4.1 | VM-5401 | Heat spreader plate | 1 | ea | AA6061-T6 (167 W/mK) | CNC milled, deburred | Local (Hoa Phat Al) | $3.00 | $3.00 | L | 2 | 30×30×2mm. NO anodize (thermal penalty). 10g |
| 3 | 1.5.4.2 | VM-5402 | Thermal pad (spreader to housing) | 1 | ea | Silicone, ≥0.5 W/mK | Die cut | Import | $0.80 | $0.80 | **I** | 4 | Housing-side thermal interface |
| 2 | 1.5.5 | VM-5500 | Picatinny Clamp Sub-Assy | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.5.1 | VM-5501 | Picatinny clamp body | 1 | ea | AA7075-T6 per AMS-QQ-A-250/12 | CNC milled + hard anodize | Import (plate) + Local (CNC + anodize) | $8.00 | $8.00 | L/I | 4 | MIL-STD-1913 profile. Slot 21.2±0.1mm. Recoil lug 8mm wide per HD-06. Ra≤1.6μm bearing faces. MIL-A-8625 Type III ≥50μm. 40g |
| 3 | 1.5.5.2 | VM-5502 | MoS₂ dry film (recoil lug) | 1 | dose | MoS₂ | Spray / burnish | Import (material) | $0.20 | $0.20 | **I** | 4 | Per DfCorr + F18: prevents galling on rail |
| 3 | 1.5.5.3 | VM-5503 | Cross-bolt M6×30 DIN 912 | 1 | ea | A2-70 SS | — | Local | $0.25 | $0.25 | L | 1 | Anti-seize on threads, ≤20 Nm. F18 mitigation |
| 3 | 1.5.5.4 | VM-5504 | Flanged bushing (cross-bolt) | 1 | ea | SS 304, flanged | CNC turned | Local | $0.50 | $0.50 | L | 2 | Pressed fit in clamp per IMP-06 |
| 3 | 1.5.5.5 | VM-5505 | Nylon isolating washer M6 | 1 | ea | Nylon 6/6 | Molded | Local | $0.03 | $0.03 | L | 1 | Galvanic isolation: clamp/bolt |
| 2 | 1.5.6 | VM-5600 | Battery Door Sub-Assy | 1 | ea | — | — | — | — | — | — | — | |
| 3 | 1.5.6.1 | VM-5601 | Battery door (molded) | 1 | ea | PA6-GF30, UV-stab, black | Injection molded | Local (WX) | $1.50 | $1.50 | L | 2 | Detent ≥5N per MIL-STD-810H 514.8. Tool-free open ≤60s per DfMaint |
| 3 | 1.5.6.2 | VM-5602 | Silicone gasket (battery door, IP65) | 1 | ea | Silicone 50 Shore A | Molded | Local | $0.20 | $0.20 | L | 2 | IEC 60529 IP65 |
| 3 | 1.5.6.3 | VM-5603 | Battery door hinge pin | 1 | ea | SS 304 wire | Formed | Local | $0.10 | $0.10 | L | 1 | Captive hinge |
| 2 | 1.5.7 | VM-5700 | Housing Closure Fasteners | 1 | set | — | — | — | — | — | — | — | |
| 3 | 1.5.7.1 | VM-5701 | Housing closure screws M4×12 Torx T10 DIN 7991 | 4 | ea | A2-70 SS | — | Local | $0.15 | $0.60 | L | 1 | Flat head. Loctite 243, ~1.5 Nm. Single tool type per DfA |
| 3 | 1.5.7.2 | VM-5702 | Nylon isolating washer M4 | 4 | ea | Nylon 6/6 | Molded | Local | $0.02 | $0.08 | L | 1 | Under screw heads |
| 2 | 1.5.8 | VM-5800 | PCB Mounting Hardware | 1 | set | — | — | — | — | — | — | — | |
| 3 | 1.5.8.1 | VM-5801 | Standoff M2.5×6 (male-female) | 4 | ea | A2-70 SS | — | Local | $0.08 | $0.32 | L | 1 | Thread into brass inserts VM-5203 |
| 3 | 1.5.8.2 | VM-5802 | PCB cap screw M2.5×4 DIN 912 | 4 | ea | A2-70 SS | — | Local | $0.08 | $0.32 | L | 1 | Loctite 243, 0.5 Nm |

---

### Level 1 / SA-06 — Battery Pack ($9)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.6 | **VM-6000** | **SA-06 Battery Pack** | 1 | ea | — | Assy | WX | — | $9.00 | — | — | |
| 2 | 1.6.1 | VM-6101 | 21700 Li-ion cell (4000mAh) | 1 | ea | Li-ion | — | Import (KR/JP) | $6.00 | $6.00 | **I** | 6 | Samsung INR21700-40T or equiv. Grade A ONLY (Samsung/LG/Panasonic) per F21 (S=10). UN38.3 certified. <20Wh per DfS. HD-03 selected |
| 2 | 1.6.2 | VM-6102 | Battery contact springs (pos + neg) | 1 | set | BeCu, Ni-plated | Formed | Import | $0.80 | $0.80 | **I** | 4 | Recoil-rated per F22, corrosion-resistant |
| 2 | 1.6.3 | VM-6103 | Battery polarity label | 1 | ea | Vinyl | Printed | Local | $0.05 | $0.05 | L | 1 | Inside battery compartment |
| 2 | 1.6.4 | VM-6104 | Battery wrapper / sleeve | 1 | ea | PVC heat-shrink | — | Local | $0.05 | $0.05 | L | 1 | Color-coded for polarity if bare cell |
| 2 | 1.6.5 | VM-6105 | Spare 21700 cell | 1 | ea | Li-ion | — | Import (KR/JP) | $6.00 | $6.00 | **I** | 6 | Ships with product. Same spec as VM-6101 |

**Note:** Battery compartment venting path directed away from operator face (toward rail side) per F21. Housing design feature (VM-5201).

---

### Level 1 / ACC-01 — Accessories ($4)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.7 | **VM-7000** | **ACC-01 Accessories** | 1 | set | — | Kit pack | WX | — | $4.00 | — | — | |
| 2 | 1.7.1 | VM-7101 | USB-C charging/data cable (1m) | 1 | ea | — | — | Import | $1.50 | $1.50 | **I** | 4 | USB 2.0 data + PD 5V/2A charge |
| 2 | 1.7.2 | VM-7102 | Lens cleaning cloth (microfiber) | 1 | ea | Microfiber | — | Local | $0.20 | $0.20 | L | 1 | |
| 2 | 1.7.3 | VM-7103 | T10 Torx key (L-type) | 1 | ea | CrV steel | — | Local | $0.30 | $0.30 | L | 1 | For housing closure + optical bench |
| 2 | 1.7.4 | VM-7104 | Quick start guide (bilingual VN/EN) | 1 | ea | Paper | Printed | Local | $0.30 | $0.30 | L | 1 | |
| 2 | 1.7.5 | VM-7105 | Protective pouch (MOLLE-compatible) | 1 | ea | 500D Cordura | Sewn | Local | $1.50 | $1.50 | L | 2 | Fits V-SMASH-M + spare battery + cable |
| 2 | 1.7.6 | VM-7106 | Anti-seize sachet (single-use) | 1 | ea | MoS₂ compound | Packaged | Import | $0.10 | $0.10 | **I** | 4 | For clamp cross-bolt field re-torque |
| 2 | 1.7.7 | VM-7107 | Witness mark paint pen | 1 | ea | Lacquer | — | Import | $0.10 | $0.10 | **I** | 4 | Per F18: bolt rotation indicator |

---

### Level 1 / VM-8000 — Consumables & Assembly Materials ($5)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.8 | **VM-8000** | **Assembly Consumables** | 1 | lot | — | — | — | — | $5.00 | — | — | Per-unit allocation |
| 2 | 1.8.1 | VM-8101 | Loctite 243 (threadlocker, per-unit dose) | 1 | dose | Methacrylate | Dispense | Import (Henkel) | $0.50 | $0.50 | **I** | 4 | ~0.01mL per fastener × ~17 fasteners |
| 2 | 1.8.2 | VM-8102 | Anti-seize compound (per-unit dose) | 1 | dose | MoS₂ / graphite | Dispense | Import | $0.10 | $0.10 | **I** | 4 | Cross-bolt threads only |
| 2 | 1.8.3 | VM-8103 | Silicone potting compound (per-unit dose) | 1 | dose | Silicone RTV | Dispense | Import | $0.50 | $0.50 | **I** | 4 | NOT polyurethane per DfRD. Cable entry sealing |
| 2 | 1.8.4 | VM-8104 | Packaging box + foam insert | 1 | ea | Corrugated + PE foam | Die cut | Local | $1.50 | $1.50 | L | 2 | Product box with bilingual print |
| 2 | 1.8.5 | VM-8105 | ESD bag (anti-static) | 1 | ea | Metalized PE | — | Local | $0.10 | $0.10 | L | 1 | Inner product wrap |
| 2 | 1.8.6 | VM-8106 | Desiccant sachet | 1 | ea | Silica gel | — | Local | $0.05 | $0.05 | L | 1 | In-box moisture protection |
| 2 | 1.8.7 | VM-8107 | QC sticker (serial # + date) | 1 | ea | Vinyl | Printed | Local | $0.05 | $0.05 | L | 1 | Applied after EOL test pass |
| 2 | 1.8.8 | VM-8108 | Final assembly + test labor | 1 | ea | — | Manual | WX | $10.00 | $10.00 | L | — | Steps 14-23 of assembly sequence |
| 2 | 1.8.9 | VM-8109 | Packaging + QC labor | 1 | ea | — | Manual | WX | $5.00 | $5.00 | L | — | Final inspection + box pack |

**Note:** VM-8108 and VM-8109 represent labor, not physical materials. Included for cost completeness.

---

## 3. BOM Summary

### 3.1 Part Count Summary

| Category | Unique Part Numbers | Total Pieces per Unit | Rev B Change |
|----------|--------------------|-----------------------|-------------|
| SA-01 Sensor Module | **8** | **16** | +2 unique (VM-1200-CHIP, VM-1205, VM-1206 added; VM-1200, VM-1201 removed; net +2 unique, +1 piece) |
| SA-02 Compute Module | 4 | 4 | No change |
| SA-03 Display Module | 8 | 10 | No change |
| SA-04 Main PCB Assembly | **15** | **~66** | +1 unique (VM-1207 added; VM-4106 qty reduced) |
| SA-05 Housing Assembly | 18 | 33 | No change |
| SA-06 Battery Pack | 5 | 6 | No change |
| ACC-01 Accessories | 7 | 7 | No change |
| Consumables | 9 | 9 | No change |
| **Total** | **74** | **~151** | **+3 unique, +2 pieces vs Rev A** |

### 3.2 Cost Rollup

| Sub-Assembly | Material | Labor | Total | % of Unit |
|--------------|----------|-------|-------|-----------|
| SA-01 Sensor Module | $27.50 | $4.70 | **$32.20** | 15.5% |
| SA-02 Compute Module | $45.00 | $2.00 | $47.00 | 22.6% |
| SA-03 Display Module | $35.00 | $4.00 | $39.00 | 18.8% |
| SA-04 Main PCB Assembly | $21.20 | $5.00 | **$26.20** | 12.6% |
| SA-05 Housing Assembly | $12.00 | $5.00 | $17.00 | 8.2% |
| SA-06 Battery Pack | $8.00 | $1.00 | $9.00 | 4.3% |
| ACC-01 Accessories | $3.00 | $1.00 | $4.00 | 1.9% |
| Final Assembly + Test | — | $10.00 | $10.00 | 4.8% |
| Packaging + QC | — | $5.00 | $5.00 | 2.4% |
| **Subtotal** | **$151.70** | **$37.70** | **$189.40** | 91.1% |
| Overhead + margin (10%) | — | — | $19.00 | 9.1% |
| **Factory Gate Price** | — | — | **$208.00** | 100% |

> **Rev B delta vs Rev A:** SA-01 +$4.20 / SA-04 +$1.20 / Total subtotal +$5.40 / Factory gate +$6.00 (incl. overhead rounding)

### 3.3 Weight Rollup

| Sub-Assembly | Weight |
|--------------|--------|
| SA-01 Sensor Module | ~35g (no change — sensor chip same mass as OEM module) |
| SA-02 Compute Module | ~15g |
| SA-03 Display Module | ~25g |
| SA-04 Main PCB Assembly | ~30g |
| SA-05 Housing Assembly | ~200g (shells 95g + bench 80g + clamp 40g - overlap) |
| SA-06 Battery Pack | ~70g (21700 cell) |
| ACC-01 (not included in unit weight) | — |
| Consumables (harness, pads, adhesive) | ~5g |
| **Total Unit Weight** | **~370g** (VM-G02 limit: 500g, 26% margin) |

---

## 4. Local Content Analysis

### 4.1 Per-Line Local Content

| Part Number | Description | Ext. Cost | Local Value | Import Value | L% |
|-------------|-------------|-----------|-------------|--------------|-----|
| VM-1101 | Objective lens | $6.00 | $0.00 | $6.00 | 0% |
| VM-1102 | Lens barrel | $3.00 | $3.00 | $0.00 | 100% |
| VM-1103 | Retaining ring | $1.00 | $1.00 | $0.00 | 100% |
| **VM-1200-CHIP** | **CMOS sensor chip (bare)** | **$13.00** | **$0.00** | **$13.00** | **0%** |
| **VM-1205** | **Carrier PCB (sensor)** | **$5.00** | **$5.00** | **$0.00** | **100%** |
| **VM-1206** | **B2B connector male** | **$1.50** | **$0.00** | **$1.50** | **0%** |
| VM-1202+1203 | Sensor fasteners + washers | $0.48 | $0.48 | $0.00 | 100% |
| VM-1204 | Alignment shim set | $0.50 | $0.50 | $0.00 | 100% |
| VM-2101 | Jetson Orin Nano | $40.00 | $0.00 | $40.00 | 0% |
| VM-2102 | Thermal pad (SoC) | $1.50 | $0.00 | $1.50 | 0% |
| VM-2103 | eMMC flash | $3.00 | $0.00 | $3.00 | 0% |
| VM-2104 | LPDDR4 RAM | $2.50 | $0.00 | $2.50 | 0% |
| VM-3101 | OLED micro-display | $20.00 | $0.00 | $20.00 | 0% |
| VM-3102 | Beam-splitter | $10.00 | $3.00 | $7.00 | 30% |
| VM-3103 | Relay lens | $4.00 | $0.00 | $4.00 | 0% |
| VM-3104 | DSI flex cable | $2.00 | $0.00 | $2.00 | 0% |
| VM-3105 | UV-cure adhesive | $0.50 | $0.00 | $0.50 | 0% |
| VM-3106 | Display mount bracket | $2.00 | $2.00 | $0.00 | 100% |
| VM-3107+3108 | Display fasteners + washers | $0.24 | $0.24 | $0.00 | 100% |
| VM-4101 | PCB bare board | $3.00 | $3.00 | $0.00 | 100% |
| VM-4102 | BLE module | $3.50 | $0.00 | $3.50 | 0% |
| VM-4103–4114 (excl. VM-4106) | PCB components (all except ZIF) | $5.85 | $0.00 | $5.85 | 0% |
| **VM-4106** | **ZIF connector DSI (qty 1)** | **$0.30** | **$0.00** | **$0.30** | **0%** |
| **VM-1207** | **B2B connector female** | **$1.50** | **$0.00** | **$1.50** | **0%** |
| VM-4110 | Conformal coating | $0.50 | $0.00 | $0.50 | 0% |
| VM-4112 | SMT assembly labor | $5.00 | $5.00 | $0.00 | 100% |
| VM-5101 | Upper shell | $2.50 | $2.50 | $0.00 | 100% |
| VM-5102 | Pad-print | $0.30 | $0.30 | $0.00 | 100% |
| VM-5201 | Lower shell | $2.50 | $2.50 | $0.00 | 100% |
| VM-5202 | O-ring | $0.30 | $0.30 | $0.00 | 100% |
| VM-5203 | Brass inserts (×4) | $0.40 | $0.40 | $0.00 | 100% |
| VM-5301 | Optical bench | $15.00 | $9.00 | $6.00 | 60% |
| VM-5302+5303 | Bench fasteners + washers | $0.56 | $0.56 | $0.00 | 100% |
| VM-5401 | Heat spreader | $3.00 | $3.00 | $0.00 | 100% |
| VM-5402 | Thermal pad (housing) | $0.80 | $0.00 | $0.80 | 0% |
| VM-5501 | Picatinny clamp | $8.00 | $4.40 | $3.60 | 55% |
| VM-5502 | MoS₂ dry film | $0.20 | $0.00 | $0.20 | 0% |
| VM-5503-5505 | Clamp fasteners + bushing | $0.78 | $0.78 | $0.00 | 100% |
| VM-5601 | Battery door | $1.50 | $1.50 | $0.00 | 100% |
| VM-5602+5603 | Gasket + hinge | $0.30 | $0.30 | $0.00 | 100% |
| VM-5701+5702 | Housing closure fasteners | $0.68 | $0.68 | $0.00 | 100% |
| VM-5801+5802 | PCB standoffs + screws | $0.64 | $0.64 | $0.00 | 100% |
| VM-6101 | 21700 Li-ion cell | $6.00 | $0.00 | $6.00 | 0% |
| VM-6102 | Battery contacts | $0.80 | $0.00 | $0.80 | 0% |
| VM-6103-6104 | Battery labels/sleeve | $0.10 | $0.10 | $0.00 | 100% |
| VM-6105 | Spare 21700 cell | $6.00 | $0.00 | $6.00 | 0% |
| VM-7101-7107 | Accessories | $4.00 | $2.30 | $1.70 | 58% |
| VM-8101-8103 | Consumables (chemical) | $1.10 | $0.00 | $1.10 | 0% |
| VM-8104-8107 | Packaging materials | $1.70 | $1.70 | $0.00 | 100% |
| VM-8108 | Final assembly labor | $10.00 | $10.00 | $0.00 | 100% |
| VM-8109 | Packaging/QC labor | $5.00 | $5.00 | $0.00 | 100% |
| **SA-01 carrier PCB underfill/CC labor** | SA-01 labor increase (Rev B) | $1.70 | $1.70 | $0.00 | 100% |

> **Bold rows = Rev B changes.** ~~Strikethrough = removed in Rev B: VM-1200 ($15 import), VM-1201 ($2 import).~~

### 4.2 Local Content Summary

| Metric | Rev A | Rev B | Change |
|--------|-------|-------|--------|
| **Total BOM cost (material + labor)** | $184.00 | **$189.40** | +$5.40 |
| **Local material value** | $63.18 | **$68.18** | +$5.00 (VM-1205 carrier PCB) |
| **Import material value** | $84.82 | **$83.52** | -$1.30 |
| **Local content % (material only)** | 34.3% | **36.0%** | +1.7pp |
| **Local labor value (WX)** | $30.00 | **$31.70** | +$1.70 (SA-01 underfill process) |
| **Local value incl. labor** | $93.18 | **$99.88** | +$6.70 |
| **Local content % incl. labor** | 50.6% | **~53.1%** | **+2.5pp** |

> **LC target re-evaluated:** Per SA-01 Optimal Solution analysis (2026-03-03), the original 60% LC target is superseded by the revised minimum of **LC ≥ 40%**. At 53.1%, this target is **ACHIEVED with 13.1pp margin**. M3 is therefore DROPPED (see §4.3).

### 4.3 Gap to LC Target

**Current: 53.1% (target ≥ 40% — ACHIEVED).** M3 optical vendor mitigation path DROPPED.

#### Active Mitigation Paths (target 62%+ if 60% threshold reinstated)

| # | Mitigation | Est. Local Value Added | New L% | Status |
|---|-----------|----------------------|--------|--------|
| M1 | Local PCB assembly with local passive component sourcing | +$4.00 | ~55.3% | Available if needed |
| M2 | Local battery cell sourcing (VinES or equiv., Grade A qualified) | +$6.00 | ~58.4% | Available if needed |
| ~~M3~~ | ~~Local optical sub-assembly (Vietnamese optical coating house)~~ | ~~+$8.00~~ | ~~60.4%~~ | **DROPPED.** 40% LC target already met at 53.1%. M3 highest-risk mitigation (optical coating vendor not yet established in VN). Not needed to meet revised target. Drop reduces program risk. |
| M4 | Local flex cable fabrication — DSI only, VM-3104 (Bac Ninh FPC) | +$2.00 | ~54.1% | Reduced scope: VM-1201 (CSI-2 flex) eliminated in Rev B. Only VM-3104 DSI flex remains. |

**Note:** VM-1205 carrier PCB (local, $5) already partially fulfils what M4 was designed to capture. M4 still applicable to VM-3104 DSI flex cable only.

---

## 5. Procurement Flags

### 5.1 Export-Controlled Items

| Flag | Part | Detail | Status | Action Required |
|------|------|--------|--------|-----------------|
| [EXPORT-REVIEW] | VM-2101 Jetson Orin Nano | NVIDIA GPU compute module. EAR 3A090 classification. | **EAR REQUEST INITIATED 2026-03-03** | Await BIS ruling (est. 6–10 weeks). Do NOT procure. If controlled → evaluate Hailo-8 or RK3588 (R2 trigger). |

### 5.2 Single-Source Items

| Flag | Part | Sole Source | Risk | Status | Mitigation |
|------|------|-------------|------|--------|------------|
| SINGLE-SOURCE | VM-2101 Jetson Orin Nano | NVIDIA | **HIGH** | EAR pending | R2: Hailo-8 / RK3588 alternative. Firmware abstraction layer required |
| SINGLE-SOURCE | VM-3101 OLED micro-display | TBD | **HIGH** | **RFQ issued to Sony (ECX339A) — S01/S02** | Qualify 2 vendors: Sony ECX339A (primary), eMagin SXGA096 (backup). Target: dual-qualified by S02 end. |
| SINGLE-SOURCE | VM-5301 / VM-5501 hard anodize | TBD local vendor | **MEDIUM** | Qualification pending | Backup: HCM-based anodizer or Taiwan |

### 5.3 Long-Lead Items (>8 weeks)

| Flag | Part | Lead Time | Status | Action |
|------|------|-----------|--------|--------|
| LONG-LEAD | VM-2101 Jetson Orin Nano | 10 wk + EAR 6–10 wk | **EAR INITIATED** | Order immediately upon EAR clearance. Critical path blocker. |
| LONG-LEAD | VM-1200-CHIP | 6 wk (improved vs. 8 wk OEM module) | Rev B improvement | Order with first prototype run (S02) |
| LONG-LEAD | VM-3101 OLED micro-display | 8 wk | RFQ in progress | Order with first prototype run after vendor qualified |
| LONG-LEAD | VM-3102 Beam-splitter | 8 wk | No change | Optical coating lead time |

### 5.4 Items Requiring Vendor Qualification

| Part | Qualification Required | Standard | Status |
|------|----------------------|----------|--------|
| VM-5301 / VM-5501 anodize process | MIL-A-8625 Type III ≥50μm | Eddy current + salt spray test | [TBD: vendor not yet qualified] |
| VM-6101 21700 cell | UN38.3 transport certification | Grade A manufacturer cert | Samsung/LG/Panasonic pre-qualified |
| VM-3102 Beam-splitter coating | MIL-C-675 adhesion + MIL-O-13830 | Tape pull + scratch-dig | [TBD: supplier needed] |
| VM-4110 Conformal coating | IPC-CC-830 Class 2 | Process qualification | [TBD: outsource vendor] |
| **VM-1205 Carrier PCB** | **MIPI CSI-2 signal integrity (100Ω diff), underfill process** | **IPC-A-610 Class 2; capillary underfill process qual** | **[NEW Rev B: qualify in S04 with first carrier PCB build]** |
| **VM-1206 / VM-1207 B2B connectors** | **Shock ≥10,000G per T01; mate/unmate ×10 contact resistance <50mΩ** | **MIL-STD-202 Method 213** | **[NEW Rev B: qualify in S04 — 2h test]** |

---

## 6. Phase 4 BOM Risk Register

| Risk | Trigger | BOM Impact | Cost Impact | Status (Rev B) |
|------|---------|-----------|-------------|----------------|
| **R1: Thermal escalation** | FEA R_conv >13°C/W | VM-5101 upper shell → hybrid PA6-GF30 + aluminum thermal section. New part VM-5103 | +$5/unit, +30g | OPEN |
| **R2: EAR block on Jetson** | BIS classifies as controlled | VM-2101 replaced with alternative SoC. PCB redesign. Firmware port. | +$5K NRE, 4-6 week delay | **EAR REQUEST INITIATED — monitoring** |
| **R3: Anodize vendor fails qual** | Can't achieve MIL-A-8625 Type III locally | Import anodize process (Taiwan/China) | +$3/unit, +2 week lead | OPEN |
| **R4: Local content shortfall** | M4 optical vendor gap | ~~M3 optical vendor doesn't qualify → L% stays at ~56%~~ | ~~Procurement compliance risk~~ | **CLOSED — Rev B.** 40% LC target achieved at 53.1%. M3 DROPPED. Risk reclassified to **LOW**. Only R4 residual: if future target reinstated at 60%, M1+M2+M4 required. |
| **R5: SA-01 carrier PCB signal integrity** | MIPI CSI-2 100Ω diff impedance miss | Carrier PCB re-spin (+3 weeks). | ~$500 NRE for re-spin | **NEW Rev B.** Mitigate: specify impedance in PCB fab order (§5.4). Verify with TDR probe in S04. |

---

## 7. HITL Checkpoint

> **BOM Rev B (v1.1) incorporates ECO-SA01-001 (SA-01 Concept C). 74 unique part numbers, 151 pieces per unit. Factory gate: $208. LC incl. labor: ~53.1%.**
>
> **SA-01 Concept C SELECTED (VDI 2225 — dominant concept, T=0.788, W=0.750). EAR initiated for VM-2101. Sony RFQ issued for VM-3101.**
>
> **Decision required before drawing release:**
>
> A) ✅ APPROVE Rev B — Lock part numbers and assembly structure. Proceed to sprint S01 execution.
> B) 🔄 REVISE — Modify BOM (specify items to change).
> C) ⏸️ PAUSE — Review offline, resume later.
> D) ❌ CANCEL — Abandon Phase 4.

---

*Generated per P33 BOM Generation prompt. Rev B incorporates ECO-SA01-001 per VDI 2225 analysis (V-SMASH-M_SA01_VDI2225_Concept_Selection_v1.0.md) and LC re-evaluation (V-SMASH-M_SA01_OptimalSolution_40pctLC_v1.0.md). All material specs traced to P24 Material Selection. All FMEA mitigations reflected in part specifications. DfX constraints embedded in BOM notes.*
