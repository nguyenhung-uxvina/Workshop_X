---
project: V-SMASH-M
phase: 4
type: bom
version: 1.0
created: 2026-02-22
status: draft
inputs:
  - V-SMASH-M_Material_Selection_v1.0.md (P24)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (P23)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (P27 §C)
  - V-SMASH-M_Cost_Estimate_v1.0.md (P27 §B)
  - V-SMASH-M_DfX_Analysis_v1.0.md (P25)
  - V-SMASH-M_FMEA_v1.0.md (P26)
  - V-SMASH-M_Standards_Compliance_Matrix_v1.0.md (P27 §A)
---

# V-SMASH-M — Bill of Materials (P33)

**Product:** V-SMASH-M (Micro AI Weapon Sight)
**BOM Revision:** A (initial release)
**BOM Basis:** Phase 3 Gate 3 APPROVED (2.85/4.0), 2026-02-22
**Production Volume Basis:** 500 units/year
**Currency:** USD

---

## 1. BOM Structure Overview

```
Level 0: VM-0000  V-SMASH-M End Item (370g)
├── Level 1: VM-1000  SA-01 Sensor Module ($28)
├── Level 1: VM-2000  SA-02 Compute Module ($47)
├── Level 1: VM-3000  SA-03 Display Module ($39)
├── Level 1: VM-4000  SA-04 Main PCB Assembly ($25)
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
| 0 | 1 | **VM-0000** | **V-SMASH-M Micro AI Weapon Sight** | 1 | ea | — | Final assy + test | WX | — | **$202.00** | — | — | Factory gate price incl. 10% overhead |

---

### Level 1 / SA-01 — Sensor Module ($28)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.1 | **VM-1000** | **SA-01 Sensor Module Assy** | 1 | ea | — | Assy (PR-05 jig) | WX | — | $28.00 | — | — | |
| 2 | 1.1.1 | VM-1100 | Lens Assembly | 1 | ea | — | Assy | WX | — | $10.00 | — | — | |
| 3 | 1.1.1.1 | VM-1101 | Objective lens (M12 mount) | 1 | ea | Optical glass | Ground + AR coated | Import (CN/JP) | $6.00 | $6.00 | **I** | 6 | MIL-O-13830 surface quality |
| 3 | 1.1.1.2 | VM-1102 | Lens barrel / mount ring | 1 | ea | Brass, black oxide | CNC turned | Local | $3.00 | $3.00 | L | 2 | M12 thread, H7 register bore to VM-5301 |
| 3 | 1.1.1.3 | VM-1103 | Lens retaining ring | 1 | ea | Brass | CNC turned | Local | $1.00 | $1.00 | L | 2 | |
| 2 | 1.1.2 | VM-1200 | CMOS Image Sensor | 1 | ea | — | Pick & place | Import | $15.00 | $15.00 | **I** | 8 | Pre-qualified module |
| 2 | 1.1.3 | VM-1201 | Sensor-to-PCB flex cable (MIPI CSI-2) | 1 | ea | FPC | — | Import | $2.00 | $2.00 | **I** | 4 | ZIF connector both ends |
| 2 | 1.1.4 | VM-1202 | Sensor mount screws M2×4 DIN 912 | 4 | ea | A2-70 SS | — | Local | $0.10 | $0.40 | L | 1 | Loctite 243, 0.3 Nm |
| 2 | 1.1.5 | VM-1203 | Nylon isolating washer M2 | 4 | ea | Nylon 6/6 | Molded | Local | $0.02 | $0.08 | L | 1 | Dissimilar metal isolation |
| 2 | 1.1.6 | VM-1204 | Sensor alignment shim set | 1 | set | SS 304 | Laser cut | Local | $0.50 | $0.50 | L | 2 | 0.05/0.10/0.20mm, selected at PR-05 |

---

### Level 1 / SA-02 — Compute Module ($47)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.2 | **VM-2000** | **SA-02 Compute Module Assy** | 1 | ea | — | Solder (BGA) | WX | — | $47.00 | — | — | Direct-solder per HD-02 |
| 2 | 1.2.1 | VM-2101 | SoC — NVIDIA Jetson Orin Nano | 1 | ea | — | BGA reflow | Import (US) | $40.00 | $40.00 | **I** | 10 | [EXPORT-REVIEW] BIS/EAR ruling required. HD-02 accepted vendor lock-in |
| 2 | 1.2.2 | VM-2102 | Thermal pad (SoC to spreader) | 1 | ea | Silicone, ≥1.0 W/mK | Die cut | Import | $1.50 | $1.50 | **I** | 4 | Bergquist GP1500 or equiv., 1mm thick |
| 2 | 1.2.3 | VM-2103 | eMMC flash module (32GB) | 1 | ea | — | BGA reflow | Import | $3.00 | $3.00 | **I** | 6 | YOLO model + firmware storage |
| 2 | 1.2.4 | VM-2104 | LPDDR4 RAM (4GB) | 1 | ea | — | BGA reflow | Import | $2.50 | $2.50 | **I** | 6 | Integrated on Jetson module — included in VM-2101 if module variant, else separate |

**Note:** If Jetson Orin Nano is procured as a full module (SoM), VM-2103 and VM-2104 are included in VM-2101 and should be removed. Cost stays at ~$45 for module variant. Verify at procurement.

---

### Level 1 / SA-03 — Display Module ($39)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.3 | **VM-3000** | **SA-03 Display Module Assy** | 1 | ea | — | Assy (PR-11 jig) | WX | — | $39.00 | — | — | UV-cure lock (irreversible) |
| 2 | 1.3.1 | VM-3101 | OLED micro-display (0.39" 1024×768) | 1 | ea | — | — | Import (CN) | $20.00 | $20.00 | **I** | 8 | Pre-qualified module |
| 2 | 1.3.2 | VM-3102 | Beam-splitter (BK7, 50R/50T) | 1 | ea | BK7 optical glass | Ground, polished, coated | Import (CN/JP) | $10.00 | $10.00 | **I** | 8 | 15×15×1.5mm, λ/4 flatness, 50R/50T ±5% @ 450-650nm. MIL-C-675 coating adhesion. MIL-O-13830 scratch-dig. AR rear face |
| 2 | 1.3.3 | VM-3103 | Relay lens (collimating) | 1 | ea | Optical glass | Ground, AR coated | Import (CN/JP) | $4.00 | $4.00 | **I** | 6 | Collimates OLED output to beam-splitter |
| 2 | 1.3.4 | VM-3104 | Display-to-PCB flex cable (MIPI DSI) | 1 | ea | FPC | — | Import | $2.00 | $2.00 | **I** | 4 | ZIF connector both ends |
| 2 | 1.3.5 | VM-3105 | UV-cure adhesive (display lock) | 1 | dose | UV-cure acrylic | Dispense + cure | Import | $0.50 | $0.50 | **I** | 4 | Thermal cycling qualified: -10°C to +55°C, 100 cycles, ≤0.1 mrad drift (per F11) |
| 2 | 1.3.6 | VM-3106 | Display mount bracket | 1 | ea | AA6061-T6 | CNC milled | Local | $2.00 | $2.00 | L | 2 | Holds OLED + relay lens in 45° beam-splitter alignment |
| 2 | 1.3.7 | VM-3107 | Display mount screws M2×4 DIN 912 | 2 | ea | A2-70 SS | — | Local | $0.10 | $0.20 | L | 1 | Loctite 243, 0.3 Nm |
| 2 | 1.3.8 | VM-3108 | Nylon isolating washer M2 | 2 | ea | Nylon 6/6 | Molded | Local | $0.02 | $0.04 | L | 1 | |

---

### Level 1 / SA-04 — Main PCB Assembly ($25)

| Lvl | Item | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost | Ext. Cost | L/I | Lead (wk) | Notes |
|-----|------|-------------|-------------|-----|------|----------|---------|--------|-----------|-----------|-----|-----------|-------|
| 1 | 1.4 | **VM-4000** | **SA-04 Main PCB Assembly** | 1 | ea | — | SMT + conformal coat | WX | — | $25.00 | — | — | |
| 2 | 1.4.1 | VM-4101 | PCB bare board (4-layer, FR-4) | 1 | ea | FR-4, 1.6mm, ENIG | Fabricated | Local | $3.00 | $3.00 | L | 3 | Ground plane continuity for EMC (IEC 61000-4-3) |
| 2 | 1.4.2 | VM-4102 | BLE module (nRF52840 or equiv.) | 1 | ea | — | SMT reflow | Import | $3.50 | $3.50 | **I** | 6 | BLE 5.0, Bluetooth SIG pre-certified. Antenna isolation per EMC |
| 2 | 1.4.3 | VM-4103 | USB-C connector (PD 5V/2A) | 1 | ea | — | SMT reflow | Import | $0.50 | $0.50 | **I** | 4 | USB-IF compliant, USB 2.0 data + charge |
| 2 | 1.4.4 | VM-4104 | Power regulator module (5V/3.3V) | 1 | ea | — | SMT reflow | Import | $1.50 | $1.50 | **I** | 4 | Buck converter, ≥90% efficiency |
| 2 | 1.4.5 | VM-4105 | Battery protection IC | 1 | ea | — | SMT reflow | Import | $0.80 | $0.80 | **I** | 4 | OV/UV/OC/SC protection per F21 (S=10) |
| 2 | 1.4.6 | VM-4106 | ZIF connectors (MIPI CSI-2 + DSI) | 2 | ea | — | SMT reflow | Import | $0.30 | $0.60 | **I** | 4 | For VM-1201 and VM-3104 flex cables |
| 2 | 1.4.7 | VM-4107 | Passive components (R, C, L kit) | 1 | set | — | SMT reflow | Import | $2.00 | $2.00 | **I** | 4 | ~50 components per board |
| 2 | 1.4.8 | VM-4108 | Status LED (RGB) | 1 | ea | — | SMT reflow | Import | $0.15 | $0.15 | **I** | 4 | Power/BLE/error indication |
| 2 | 1.4.9 | VM-4109 | Tactile switch (power button) | 1 | ea | — | SMT reflow | Import | $0.10 | $0.10 | **I** | 4 | IP67 rated, side-actuated |
| 2 | 1.4.10 | VM-4110 | Conformal coating (IPC-CC-830 Class 2) | 1 | dose | Acrylic conformal coat | Spray / selective coat | Import (material) | $0.50 | $0.50 | **I** | 4 | Second moisture barrier per F16. RoHS-compliant |
| 2 | 1.4.11 | VM-4111 | Battery contact assembly (spring + pad) | 1 | set | BeCu springs, Ni-plated | — | Import | $0.80 | $0.80 | **I** | 4 | Recoil-rated springs per F22, corrosion-resistant |
| 2 | 1.4.12 | VM-4112 | SMT assembly labor | 1 | ea | — | Reflow + AOI + ICT | WX | $5.00 | $5.00 | L | — | Includes placement, reflow, inspection |
| 2 | 1.4.13 | VM-4113 | RoHS-compliant solder paste | 1 | dose | SAC305 | Stencil print | Import | $0.10 | $0.10 | **I** | 4 | Per P25 DfRD: RoHS mandatory |
| 2 | 1.4.14 | VM-4114 | Antenna (chip or PCB trace) | 1 | ea | — | SMT or integrated | Import | $0.50 | $0.50 | **I** | 4 | BLE 2.4GHz, matched to nRF52840 |

**Note:** VM-2101 (Jetson Orin Nano) is soldered directly to VM-4101 per HD-02 but tracked under SA-02 for cost allocation. Physical attachment point is SA-04 PCB.

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

**Note:** Battery compartment venting path must be directed away from operator face (toward rail side) per F21. This is a housing design feature (VM-5201), not a separate BOM item.

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

**Note:** VM-8108 and VM-8109 represent labor, not physical materials. Included here for cost completeness.

---

## 3. BOM Summary

### 3.1 Part Count Summary

| Category | Unique Part Numbers | Total Pieces per Unit |
|----------|--------------------|-----------------------|
| SA-01 Sensor Module | 6 | 15 |
| SA-02 Compute Module | 4 | 4 |
| SA-03 Display Module | 8 | 10 |
| SA-04 Main PCB Assembly | 14 | ~65 (incl. passives kit) |
| SA-05 Housing Assembly | 18 | 33 |
| SA-06 Battery Pack | 5 | 6 |
| ACC-01 Accessories | 7 | 7 |
| Consumables | 9 | 9 |
| **Total** | **71** | **~149** |

### 3.2 Cost Rollup

| Sub-Assembly | Material | Labor | Total | % of Unit |
|--------------|----------|-------|-------|-----------|
| SA-01 Sensor Module | $25.00 | $3.00 | $28.00 | 13.9% |
| SA-02 Compute Module | $45.00 | $2.00 | $47.00 | 23.3% |
| SA-03 Display Module | $35.00 | $4.00 | $39.00 | 19.3% |
| SA-04 Main PCB Assembly | $20.00 | $5.00 | $25.00 | 12.4% |
| SA-05 Housing Assembly | $12.00 | $5.00 | $17.00 | 8.4% |
| SA-06 Battery Pack | $8.00 | $1.00 | $9.00 | 4.5% |
| ACC-01 Accessories | $3.00 | $1.00 | $4.00 | 2.0% |
| Final Assembly + Test | — | $10.00 | $10.00 | 5.0% |
| Packaging + QC | — | $5.00 | $5.00 | 2.5% |
| **Subtotal** | **$148.00** | **$36.00** | **$184.00** | 91.1% |
| Overhead + margin (10%) | — | — | $18.00 | 8.9% |
| **Factory Gate Price** | — | — | **$202.00** | 100% |

### 3.3 Weight Rollup

| Sub-Assembly | Weight |
|--------------|--------|
| SA-01 Sensor Module | ~35g |
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
| VM-1200 | CMOS sensor | $15.00 | $0.00 | $15.00 | 0% |
| VM-1201 | CSI-2 flex cable | $2.00 | $0.00 | $2.00 | 0% |
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
| VM-4103-4114 | PCB components (all) | $6.15 | $0.00 | $6.15 | 0% |
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

### 4.2 Local Content Summary

| Metric | Value |
|--------|-------|
| **Total BOM cost (material + labor)** | $184.00 |
| **Local value** | $63.18 |
| **Import value** | $120.82 |
| **Local content %** | **34.3%** (material only) |
| **Local value incl. labor** | $93.18 |
| **Local content % incl. labor** | **50.6%** |

### 4.3 Gap to 60% Target

Current: **50.6%** including labor → Gap: **9.4 percentage points**

#### Mitigation Paths (from P25 DfLC analysis, target 62.6%)

| # | Mitigation | Est. Local Value Added | New L% |
|---|-----------|----------------------|--------|
| M1 | Local PCB assembly with local passive component sourcing | +$4.00 | 52.8% |
| M2 | Local battery cell sourcing (VinES or equivalent, if Grade A qualified) | +$6.00 | 56.1% |
| M3 | Local optical sub-assembly (Vietnamese optical house for lens + beam-splitter coating) | +$8.00 | 60.4% |
| M4 | Local flex cable fabrication (FPC manufacturer in Bac Ninh) | +$4.00 | **62.6%** |

**Status:** M1-M4 all required to meet ≥60%. M3 is highest-risk (requires local optical coating vendor qualification).

---

## 5. Procurement Flags

### 5.1 Export-Controlled Items

| Flag | Part | Detail | Action Required |
|------|------|--------|-----------------|
| [EXPORT-REVIEW] | VM-2101 Jetson Orin Nano | NVIDIA GPU compute module. EAR99 or ECCN 3A090/4A090 classification pending. BIS ruling required before procurement. | **BLOCKER** — obtain EAR ruling. If controlled → evaluate Hailo-8 or RK3588 alternative (major BOM change) |

### 5.2 Single-Source Items

| Flag | Part | Sole Source | Risk | Mitigation |
|------|------|-------------|------|------------|
| SINGLE-SOURCE | VM-2101 Jetson Orin Nano | NVIDIA | **HIGH** | Evaluate Hailo-8 / RK3588 as drop-in alternative. Firmware abstraction layer required |
| SINGLE-SOURCE | VM-3101 OLED micro-display | [TBD: supplier needed] | **HIGH** | Qualify 2 vendors during Phase 4. Sony ECX339A or eMagin as alternatives |
| SINGLE-SOURCE | VM-5301 / VM-5501 hard anodize | [TBD: local vendor qualification pending] | **MEDIUM** | Backup: HCM-based anodizer or export to Taiwan |

### 5.3 Long-Lead Items (>8 weeks)

| Flag | Part | Lead Time | Action |
|------|------|-----------|--------|
| LONG-LEAD | VM-2101 Jetson Orin Nano | 10 weeks | Early order after EAR clearance |
| LONG-LEAD | VM-1200 CMOS sensor | 8 weeks | Order with first prototype run |
| LONG-LEAD | VM-3101 OLED micro-display | 8 weeks | Order with first prototype run |
| LONG-LEAD | VM-3102 Beam-splitter | 8 weeks | Optical coating lead time |

### 5.4 Items Requiring Vendor Qualification

| Part | Qualification Required | Standard | Status |
|------|----------------------|----------|--------|
| VM-5301 / VM-5501 anodize process | MIL-A-8625 Type III ≥50μm | Eddy current + salt spray test | [TBD: vendor not yet qualified] |
| VM-6101 21700 cell | UN38.3 transport certification | Grade A manufacturer cert | Samsung/LG/Panasonic pre-qualified |
| VM-3102 Beam-splitter coating | MIL-C-675 adhesion + MIL-O-13830 | Tape pull + scratch-dig | [TBD: supplier needed] |
| VM-4110 Conformal coating | IPC-CC-830 Class 2 | Process qualification | [TBD: outsource vendor] |

---

## 6. Phase 4 BOM Risk Register

| Risk | Trigger | BOM Impact | Cost Impact |
|------|---------|-----------|-------------|
| **R1: Thermal escalation** | FEA R_conv >13°C/W | VM-5101 upper shell → hybrid PA6-GF30 + aluminum thermal section. New part VM-5103 | +$5/unit, +30g |
| **R2: EAR block on Jetson** | BIS classifies as controlled | VM-2101 replaced with alternative SoC. PCB redesign. Firmware port. | +$5K NRE, 4-6 week delay |
| **R3: Anodize vendor fails qual** | Can't achieve MIL-A-8625 Type III locally | Import anodize process (Taiwan/China) | +$3/unit, +2 week lead |
| **R4: Local content shortfall** | M3 optical vendor doesn't qualify | L% stays at ~56%, below 60% target | Procurement compliance risk |

---

## 7. HITL Checkpoint

> **P33 BOM is complete. 71 unique part numbers, 149 pieces per unit.**
>
> **Decision required before drawing release:**
>
> A) ✅ APPROVE — Lock part numbers and assembly structure. Proceed to P34 Verification Plan.
> B) 🔄 REVISE — Modify BOM (specify items to change).
> C) ⏸️ PAUSE — Review offline, resume later.
> D) ❌ CANCEL — Abandon Phase 4.

---

*Generated per P33 BOM Generation prompt. All material specs traced to P24 Material Selection. All FMEA mitigations (F03, F08, F11, F16, F18, F19, F21, F22) reflected in part specifications. DfX constraints (DfCorr 3-layer, DfTherm conditional, DfRD restricted substances, DfLC mitigation paths) embedded in BOM notes.*
