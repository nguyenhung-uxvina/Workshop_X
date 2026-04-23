---
project: V-SMASH-M
phase: 3
type: standards-compliance-matrix
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md, V-SMASH-M_DfX_Analysis_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Standards Compliance Matrix

> **Purpose:** Map all applicable standards to design responses and verification status. Extracted from P27 Gate Review §A for standalone traceability.

---

## Compliance Matrix

| Standard | Applies To | Requirement | Design Response | Verified? |
|----------|-----------|-------------|-----------------|-----------|
| MIL-STD-1913 | EI-01, SA-05 clamp | 21.2 ±0.1mm slot, cross-slot recoil lug | Clamp geometry per standard, CNC machined | Phase 4 (dimensional inspection) |
| MIL-STD-810H Method 516.8 | SA-05, all | Shock: 10,000G, 0.5ms half-sine | AA7075-T6 optical bench SF≥2.0 (P24). FMEA F03/F18/F19. | Phase 4 (shock test) |
| MIL-STD-810H Method 514.8 | SA-05, SA-06 | Vibration: random, 10-500 Hz | Battery door ≥5N detent (P23 IMP-03). Loctite 243 on all fasteners. | Phase 4 (vibration test) |
| MIL-STD-810H Method 501.7/502.7 | All | Temperature: -10°C to +55°C operation | Thermal analysis (P24). PA6-GF30 conditioned properties used. Battery cold capacity verified (VM-E06). | Phase 4 (thermal chamber) |
| MIL-STD-810H Method 507.6 | SA-05 | Humidity: 95% RH at 40°C | IP67 seal (II-11). Conformal coating (PR-07). UV-stabilized PA6-GF30. | Phase 4 (humidity test) |
| MIL-A-8625 Type III | Optical bench, clamp | Hard anodize ≥50 μm | Specified in P24 Components 1, 2. | Incoming inspection (eddy current) |
| IEC 60529 (IP67/IP65) | SA-05 | IP67 body, IP65 battery door | O-ring seal (II-11). Silicone gasket (II-12). | Phase 4 (immersion test) |
| IEC 61000-4-3 | EI-09 | Radiated immunity 3 V/m, 80 MHz–2.7 GHz | EMC design in D8 (P22). BLE antenna isolation. Ground plane continuity. | Phase 4 (EMC lab) |
| CISPR 32 Class B | EI-09 | Radiated emissions | Housing + PCB layout (D8). | Phase 4 (EMC lab) |
| IPC-CC-830 Class 2 | SA-04 | Conformal coating | Outsourced (PR-07). | Phase 4 (coating inspection) |
| MIL-C-675 | SA-03 beam-splitter | Coating adhesion (tape pull) | Specified in P24 Component 6. | Incoming inspection |
| MIL-O-13830 | SA-03 beam-splitter | Surface quality (scratch-dig) | Specified in P24 Component 6. | Incoming inspection |
| BLE 5.0 (Bluetooth SIG) | SA-04 BLE module | BLE 5.0 protocol compliance | nRF52840 or equivalent (pre-certified module). | Module certification |
| USB-IF | SA-04 USB-C | USB-C PD 5V/2A, USB 2.0 data | Standard connector + protocol. | Functional test |
| UN38.3 | SA-06 | Li-ion battery transport safety | 21700 Grade A cell (Samsung/LG). Protection circuit on SA-04. | Cell manufacturer cert |

---

## Summary

| Metric | Value |
|--------|-------|
| Total standards mapped | 15 |
| Verified at Phase 3 | 0 (all verification deferred to Phase 4 or incoming inspection) |
| Standards with design response | 15/15 (100%) |
| TCVN mapping | Deferred to Phase 4 documentation |

---

## Open Actions

| Action | Priority | Phase |
|--------|----------|-------|
| Map TCVN equivalents for procurement compliance | MEDIUM | Phase 4 |
| Complete EMC testing (IEC 61000-4-3 + CISPR 32) | HIGH | Phase 4 qualification |
| Qualify anodize vendor for MIL-A-8625 Type III | HIGH | Phase 4 procurement |
