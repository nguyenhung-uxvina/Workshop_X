---
project: VN-XUONG-UUV
phase: 1
type: standards-compliance
document: "005"
version: 1.0
created: 2026-03-06
status: draft
data_confidence: MEDIUM (60% L3 published standards, 20% L4 classification guidance, 20% L5 compliance path assumptions)
---

# VN-XUONG-UUV — Doc 005: Standards & Compliance Matrix v1.0

## 1. Scope & Purpose

This document maps applicable standards, regulations, and classification rules to VN-XUONG-UUV requirements. As a **Tier 1 prototype**, full classification is deferred — but the design must establish a clear **compliance path** for production vessels.

**Classification Strategy:** Design to classification rules where practical, but defer formal classification survey to production phase. Prototype operates under Workshop X internal standards + VN maritime safety minimums.

---

## 2. Applicable Standards Matrix

### 2.1 Structural Design — Hull & LARS

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **TCVN 6259** | Rules for Classification of Steel Ships (VN Register) | Reference — aluminum adaptation | G-01 to G-11, F-07, F-08, QC-01 | Deferred to production |
| **TCVN 6282** | Rules for Inland Waterway Ships | Reference — if operated in rivers/ports | AT-01, AT-02 | Review |
| **VR Rules for High-Speed Craft** | VN Register rules for vessels > 20 kts | Reference — if max speed >= 20 kts (OP-13) | F-07, F-08, G-01 | Conditional |
| **DNV-RU-HSLC** | Rules for High Speed Light Craft | Best practice reference (international) | Hull scantlings, stability | Reference only |
| **ISO 12215** | Small Craft — Hull Construction & Scantlings | Part 5 (design pressures), Part 6 (details) | Hull plating, stiffener sizing | Design reference |
| **AWS D1.2** | Structural Welding Code — Aluminum | Mandatory for hull welding quality | PR-02, QC-01 | Mandatory |
| **ASTM B928** | 5xxx Marine Aluminum Plate (sensitization-resistant) | Material specification for 5083-H321 | M-01 | Mandatory |

### 2.2 Stability & Buoyancy

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **IMO IS Code 2008** | Intact Stability Code | Reference for stability criteria | F-07 (GM >= 0.5m), F-08 (GZ to 60 deg) | Design target |
| **TCVN 6259 Part 4** | Stability (VN Register) | Formal requirement for classified vessels | F-07, F-08 | Deferred — apply criteria in design |
| **IMO MSC.267(85)** | 2008 IS Code — operational guidance | Weather criterion, severe wind/rolling | F-07, F-08 | Reference |

### 2.3 Safety Equipment & Lifesaving

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **SOLAS Ch. III** | Life-Saving Appliances | Reference — minimum safety equipment | SA-05 (life jackets, lifebuoy) | Minimum compliance |
| **TCVN 6259 Part 12** | Safety Equipment (VN Register) | Formal requirement for classified vessels | SA-03, SA-04, SA-05, SA-08 | Design target |
| **COLREGS (COLREGs 72)** | International Regulations for Preventing Collisions at Sea | Navigation lights, sound signals | S-06 (VHF), navigation equipment | Mandatory |

### 2.4 Machinery & Propulsion

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **TCVN 6259 Part 5** | Machinery Installations (VN Register) | Reference for engine mounting, fuel system | E-01, E-02 | Design reference |
| **ISO 8665** | Marine Propulsion Engines — Power Measurement | Engine rating standard | Propulsion sizing | Reference |
| **ISO 10088** | Small Craft — Permanently Installed Fuel Systems | Fuel tank design, ventilation | E-01 | Mandatory |

### 2.5 Electrical Systems

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **IEC 60092** | Electrical Installations in Ships | Cable sizing, protection, grounding | E-03, S-01 to S-07 | Design reference |
| **TCVN 6259 Part 6** | Electrical Equipment (VN Register) | Formal requirement for classified vessels | E-03, S-01 to S-07 | Deferred |

### 2.6 Lifting & Material Handling (LARS-Specific)

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **DNV-ST-0378** | Offshore and Platform Lifting Appliances | Best practice for winch/crane design | F-01, F-02, QC-02 | Reference |
| **EN 13001** | Crane Safety — General Design | Winch structural design, load factors | F-01, F-02 | Reference |
| **ISO 4309** | Wire Ropes — Care and Maintenance | Winch line inspection criteria | MA-01, S-07 | Reference |
| **ASME BTH-1** | Design of Below-the-Hook Lifting Devices | Cradle, hooks, shackles | F-01, F-04 | Reference |

### 2.7 Corrosion Protection

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **NORSOK M-501** | Surface Preparation & Protective Coating | Paint system specification | M-03 | Reference |
| **DNV-RP-B401** | Cathodic Protection Design | Anode sizing, potential | MA-04 | Design reference |
| **ISO 8501** | Surface Preparation — Visual Assessment | Surface prep before coating | M-03 | Reference |

### 2.8 Towing Operations

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **IMO MSC/Circ.884** | Guidelines for Safe Ocean Towing | Tow bridle design, safety procedures | F-05, SA-06, OP-11 | Reference |
| **OCIMF** | Mooring Equipment Guidelines | Towline material, SWL, breaking strength | F-05 | Reference |

### 2.9 Navigation & Communications

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **TCVN 6259 Part 11** | Navigation Equipment (VN Register) | GPS, compass, VHF requirements | S-01, S-02, S-06 | Mandatory minimum |
| **ITU-R M.493** | DSC (Digital Selective Calling) for VHF | VHF radio specification | S-06 | If required by VN regulations |

### 2.10 Environmental

| Standard | Title / Scope | Applicability | Mapped Requirements | Status |
|----------|--------------|---------------|--------------------|---------|
| **MARPOL Annex I** | Oil Pollution Prevention | Bilge/fuel system containment | SA-08, E-01 | Minimum compliance |
| **VN Environmental Law** | National environmental regulations | Discharge, emissions | General | Compliance required |

---

## 3. Military / Defense Standards (Reference)

These standards apply if the vessel is procured under Vietnamese military acquisition:

| Standard | Title / Scope | Applicability | Notes |
|----------|--------------|---------------|-------|
| **TCVN 11456** | Vietnamese Navy vessel standards (if applicable) | Hull, machinery, outfitting | Verify current version with S2 (Procurement) |
| **MIL-STD-810H** | Environmental Engineering Considerations | Vibration, shock, salt fog, humidity | Reference for LARS component qualification |
| **MIL-STD-461G** | EMI/EMC Requirements | Electronics electromagnetic compatibility | Reference for S-01 to S-07 if military procurement |
| **MIL-STD-1399** | Interface Standard for Shipboard Systems | Power, signal interfaces | Reference for future C2 integration |
| **STANAG 1364** | NATO UUV Interoperability (reference only) | UUV interface standards | Not binding for VN, but useful for ICD template |

**Note:** Vietnamese military procurement standards for small craft may differ from formal TCVN. Stakeholder interview with S2 (Navy Procurement) should clarify which standards are contractually binding.

---

## 4. Workshop X Internal Standards

| Standard | Scope | Requirements Mapped |
|----------|-------|--------------------|
| **WX-QC-001** | Pahl-Beitz Gate Review Protocol | All deliverables (Docs 001-006) |
| **WX-QC-002** | Design Review Checklist | Phase 2-4 design outputs |
| **WX-DWG-001** | Drawing Standards (metric, 3rd angle projection) | Phase 4 detail drawings |
| **WX-MAT-001** | Material Certification Requirements | M-01 to M-05 (material certs required) |
| **WX-TEST-001** | Sea Trial Protocol | OP-01 to OP-14, SC-1 to SC-7 |

---

## 5. Compliance Summary by Requirement Category

| Category | Primary Standards | Compliance Level (Prototype) |
|----------|------------------|------------------------------|
| Geometry | ISO 12215, TCVN 6259 | Design reference |
| Forces / Stability | IMO IS Code, TCVN 6259 Part 4 | Design target (not certified) |
| Materials | AWS D1.2, ASTM B928 | Mandatory |
| Safety | SOLAS Ch. III, TCVN 6259 Part 12, COLREGS | Minimum compliance |
| LARS / Lifting | DNV-ST-0378, EN 13001 | Best practice reference |
| Electrical | IEC 60092 | Design reference |
| Navigation | COLREGS, TCVN 6259 Part 11 | Mandatory minimum |
| Towing | IMO MSC/Circ.884 | Reference |
| Corrosion | NORSOK M-501, DNV-RP-B401 | Design reference |
| Environmental | MARPOL Annex I | Minimum compliance |

---

## 6. Compliance Gaps & Actions

| # | Gap | Impact | Action | Owner | Timeline |
|---|-----|--------|--------|-------|----------|
| 1 | VN military procurement standards unclear | May require unexpected compliance items | Interview S2 (Procurement) — clarify binding standards | Workshop X | Before Gate 1 |
| 2 | TCVN aluminum small craft rules coverage | TCVN 6259 is primarily for steel — aluminum adaptation needed | Use ISO 12215 + DNV-RU-HSLC as primary design reference | Workshop X | Phase 2 |
| 3 | LARS lifting standards — no VN-specific rules | Prototype operates without formal certification | Apply DNV-ST-0378 principles, document load test results | Workshop X | Phase 3 |
| 4 | No formal stability book (prototype) | Acceptable for prototype, required for production | Perform stability calculation (hydrostatics), inclining test at launch | Workshop X | Phase 3-4 |
| 5 | EMI/EMC not tested (prototype) | Low risk for standalone system | Defer to production if military procurement requires MIL-STD-461G | Workshop X | Deferred |

---

## 7. Classification Path (Production)

For the production vessel, the following classification path is recommended:

```
Step 1: Select classification society
        → VN Register (primary) or DNV (if export potential)

Step 2: Submit design for plan approval
        → Hull structure, stability, machinery, electrical, safety

Step 3: Material certification
        → All structural materials certified to society standards

Step 4: Construction survey
        → Society surveyor witnesses hull fabrication, welding, testing

Step 5: Trials
        → Inclining test, sea trial, LARS load test under surveyor witness

Step 6: Certificate issued
        → Vessel classified, LARS approved as installed equipment
```

**Estimated Classification Cost:** $15,000-30,000 (VN Register)
**Timeline:** Add 4-6 weeks to production schedule for surveyor coordination

---

## 8. References

| Document | Standard Body |
|----------|--------------|
| TCVN 6259:2003 | Vietnam Register of Shipping |
| ISO 12215:2019 | International Organization for Standardization |
| AWS D1.2/D1.2M:2014 | American Welding Society |
| IMO IS Code 2008 | International Maritime Organization |
| DNV-ST-0378 | Det Norske Veritas |
| MIL-STD-810H | US Department of Defense |

---

*Doc 005 Standards & Compliance Matrix v1.0 | VN-XUONG-UUV Phase 1 Task Clarification | COD: Offload*
