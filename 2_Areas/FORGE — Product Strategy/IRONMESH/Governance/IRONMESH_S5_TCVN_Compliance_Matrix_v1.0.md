---
project: IRONMESH
type: tcvn-compliance-matrix
version: 1.0
created: 2026-02-22
status: draft
skill: S5-Ethical-Governance
reusable: true
applies_to: [VN-RANGE-001, V-SMASH, VN-12.7MM-SIM, VN-CUAS-001, VN-CUA-001, CORTEX-RANGE]
---

# TCVN ↔ MIL-STD/IEC Compliance Matrix — Workshop X Portfolio

> **Purpose:** Reusable cross-project mapping of Vietnamese national standards (TCVN/QCVN) to international equivalents (MIL-STD, IEC, ISO). Enables compliance traceability for all defense products entering Vietnamese military procurement.
>
> **Why this matters:** Vietnamese defense procurement requires TCVN/QCVN compliance. Products designed to MIL-STD/IEC standards must demonstrate equivalence or meet TCVN directly. This matrix eliminates per-project research overhead.

---

## 1. Vietnamese Military Standards Framework

Vietnam operates a three-tier military standards system under **Circular 25/2020/TT-BQP** (effective 21 April 2020):

| Designation | Vietnamese Name | Nature | Issuing Authority | Public? |
|-------------|----------------|--------|-------------------|---------|
| **TCVN/QS** | Tiêu chuẩn Quốc gia trong lĩnh vực Quân sự | National standard — military domain | Minister of National Defense | NO — controlled |
| **QCVN/BQP** | Quy chuẩn Kỹ thuật Quốc gia trong lĩnh vực Quân sự | National technical regulation — MANDATORY | Minister of National Defense | NO — controlled |
| **TCQS** | Tiêu chuẩn Cơ sở trong lĩnh vực Quân sự | Organizational standard — specific unit/enterprise | Individual defense units | NO — controlled |

**Civilian standards** (TCVN, QCVN/BTTTT) are publicly available and apply to defense products where no military-specific standard exists.

**Key fact:** 2018–2023, 101 TCVN/QS and 81 TCQS/CNQP standards were developed. Catalogs are NOT publicly indexed — must be obtained through Cục Tiêu chuẩn Đo lường Chất lượng (Department of Standards, Metrology and Quality, MoND).

---

## 2. Environmental Testing — TCVN 7699 Series ↔ IEC 60068 ↔ MIL-STD-810H

Vietnam has **no single MIL-STD-810 equivalent**. Instead, the TCVN 7699 series (adopted from IEC 60068) covers the same environmental conditions as individual test standards.

| TCVN Standard | IEC Source | MIL-STD-810H Method | Test Name | Products |
|---------------|-----------|---------------------|-----------|----------|
| TCVN 7699-2-1:2007 | IEC 60068-2-1 | 502.7 (Low Temp) | **Cold** — storage/operation to -40°C | ALL |
| TCVN 7699-2-2:2011 | IEC 60068-2-2 | 501.7 (High Temp) | **Dry Heat** — operation to +55°C | ALL |
| TCVN 7699-2-5:2011 | IEC 60068-2-5 | 505.7 (Solar Radiation) | **Solar Radiation** — ground level | VN-RANGE, V-SMASH |
| TCVN 7699-2-6:2009 | IEC 60068-2-6 | 514.8 (Vibration) | **Vibration (sinusoidal)** — swept sine | ALL |
| TCVN 7699-2-10:2007 | IEC 60068-2-10 | 508.8 (Fungus) | **Mould Growth** — tropical fungi | ALL (tropical req) |
| TCVN 7699-2-11:2007 | IEC 60068-2-11 | 509.7 (Salt Fog) | **Salt Mist** — corrosion resistance | VN-RANGE, naval |
| TCVN 7699-2-13:2007 | IEC 60068-2-13 | 500.7 (Low Pressure) | **Low Air Pressure** — altitude | VN-CUAS (drone alt) |
| TCVN 7699-2-14:2007 | IEC 60068-2-14 | 503.7 (Temp Shock) | **Temperature Change** — thermal shock | ALL |
| TCVN 7699-2-18:2007 | IEC 60068-2-18 | 506.7 (Rain) | **Water** — rain, drip, immersion | ALL |
| TCVN 7699-2-27:2007 | IEC 60068-2-27 | 516.8 (Shock) | **Mechanical Shock** — drop, impact | ALL |
| TCVN 7699-2-30:2007 | IEC 60068-2-30 | 507.6 (Humidity) | **Damp Heat, Cyclic** — 95% RH @ 40°C | ALL |
| TCVN 7699-2-38:2007 | IEC 60068-2-38 | 507.6 (combined) | **Combined Temp/Humidity Cycle** | ALL |
| TCVN 7699-2-52:2007 | IEC 60068-2-52 | 509.7 (Salt Fog cyclic) | **Cyclic Salt Mist** — NaCl solution | VN-RANGE (coastal) |
| TCVN 7699-2-64:2013 | IEC 60068-2-64 | 514.8 (Random Vib) | **Random Broadband Vibration** | ALL |
| TCVN 7699-2-68:2007 | IEC 60068-2-68 | 510.7 (Sand/Dust) | **Dust and Sand** — ingress/abrasion | ALL |
| TCVN 7699-2-78:2007 | IEC 60068-2-78 | 507.6 (Humidity steady) | **Damp Heat, Steady State** | ALL |

### Severity Mapping: MIL-STD-810H → TCVN 7699

| MIL-STD-810H Severity | TCVN 7699 Equivalent | Notes |
|------------------------|---------------------|-------|
| Basic (A1) — Mild ground, sheltered | TCVN 7699 Category 1 | Controlled environment |
| A2 — Ground, partial weather protection | TCVN 7699 Category 2 | Semi-outdoor (typical range) |
| B1 — Ground, vehicle-mounted | TCVN 7699 Category 3+ | Additional vibration profile |
| C1 — Jet aircraft | Not applicable | Workshop X products are ground-based |

> **DECISION REQUIRED:** MIL-STD-810H tailors test severity to platform lifecycle profile (LCEP). TCVN 7699 uses generic severity classes. For each product, the test plan must specify which TCVN 7699 severity class maps to the intended MIL-STD-810H LCEP category. **Recommend: create per-product LCEP mapping table during Phase 1.**

---

## 3. EMC — TCVN 7909 Series ↔ IEC 61000 ↔ MIL-STD-461G

| TCVN Standard | IEC Source | MIL-STD-461G Req | Test Type | Products |
|---------------|-----------|-------------------|-----------|----------|
| TCVN 7909-4-2:2015 | IEC 61000-4-2 | CS118 (ESD) | **ESD Immunity** — 4/8 kV contact/air | ALL |
| TCVN 7909-4-3:2015 | IEC 61000-4-3 | RS103 (Radiated) | **Radiated RF Immunity** — 80 MHz–6 GHz | ALL |
| TCVN 7909-4-5:2015 | IEC 61000-4-5 | CS106 (Surge) | **Surge Immunity** — 1/2 kV line/earth | VN-RANGE (AC powered) |
| TCVN 7909-4-6:2015 | IEC 61000-4-6 | CS114 (Conducted) | **Conducted RF Immunity** — 150 kHz–80 MHz | VN-RANGE, CORTEX |
| TCVN 7909-4-8:2015 | IEC 61000-4-8 | — | **Power Frequency Magnetic Field** | VN-RANGE (near power) |
| TCVN 7909-4-11:2015 | IEC 61000-4-11 | — | **Voltage Dips/Interruptions** | VN-RANGE (AC powered) |
| TCVN 7909-6-1:2019 | IEC 61000-6-1 | — | **Generic Immunity** (residential/commercial) | ALL (baseline) |
| TCVN 7909-3-2:2020 | IEC 61000-3-2 | — | **Harmonic Current Emissions** (≤16A) | VN-RANGE (AC powered) |

### Mandatory Radio EMC (QCVN — Legally Required)

| QCVN Standard | Base Standard | Scope | Effective | Products |
|---------------|--------------|-------|-----------|----------|
| **QCVN 18:2022/BTTTT** | ETSI EN 301 489-1 V2.2.2 | EMC for ALL radio equipment (BLE, WiFi, etc.) | 1 Jul 2023 | V-SMASH (BLE), VN-RANGE (WiFi) |
| **QCVN 55:2023/BTTTT** | — | Short-range devices (SRD), 9 kHz–25 MHz, inductive loops | 1 Jul 2024 | Check if any products use SRD bands |
| **QCVN 118:2018/BTTTT** | CISPR 32:2015 | Multimedia equipment emissions | 1 Jul 2019 | CORTEX RANGE (IT equipment) |

> **MIL-STD-461G gap:** TCVN/QCVN standards map to IEC commercial EMC levels. MIL-STD-461G requires **significantly tighter** limits (e.g., RS103 = 200 V/m vs IEC 61000-4-3 = 3–10 V/m). Products intended for military EMC certification need MIL-STD-461G testing at an accredited lab (Singapore, Australia, or South Korea). TCVN 7909 compliance does NOT satisfy MIL-STD-461G.

---

## 4. IP Rating — TCVN 4255 ↔ IEC 60529

| TCVN Standard | IEC Source | What It Covers | Products |
|---------------|-----------|----------------|----------|
| **TCVN 4255:2008** | IEC 60529:2001 | Ingress protection by enclosures (IP code) | ALL |

Product IP targets:

| Product | IP Target | TCVN 4255 Test | Rationale |
|---------|-----------|----------------|-----------|
| V-SMASH-M | IP67 body / IP65 battery door | Dust: Table II / Water: Table III | Weapon-mounted, field conditions |
| VN-RANGE-001 sensors | IP67 | Full dust + 1m immersion | Outdoor permanent installation |
| VN-RANGE-001 edge server | IP54 | Protected indoor, splash-proof | Covered shelter, some exposure |

---

## 5. Battery Safety — TCVN 11919 / QCVN 101

| Standard | Base Standard | Type | Scope | Products |
|----------|--------------|------|-------|----------|
| **TCVN 11919-2:2017** | IEC 62133-2:2017 | Voluntary | Li-ion cells and batteries safety | V-SMASH (21700 cell) |
| **QCVN 101:2020/BTTTT** | IEC 62133-2 + IEC 61960-3 | **MANDATORY** | Li-ion in portable equipment (phones, tablets, laptops) | V-SMASH — check if weapon sights in scope |
| **UN 38.3** | UN Manual of Tests T.1–T.8 | Transport | Li-ion transport safety | V-SMASH (shipping) |

> **QCVN 101 scope question:** Currently targets consumer portable electronics. Weapon-mounted sights may not fall under BTTTT (Ministry of Information) jurisdiction. Clarify with MoND whether QCVN 101 applies or if a TCVN/QS battery standard exists. **Action: Query during procurement engagement.**

---

## 6. Equipment Safety — QCVN 132 ↔ IEC 62368-1

| Standard | Base Standard | Type | Effective | Products |
|----------|--------------|------|-----------|----------|
| **QCVN 132:2022/BTTTT** | IEC 62368-1:2018 | **MANDATORY** | 1 Jan 2024 | VN-RANGE edge server, CORTEX software platform |
| TCVN 7326-1:2003 (superseded) | IEC 60950-1:2001 | Replaced | — | Legacy reference only |

---

## 7. Cybersecurity & Data — TCVN + Vietnamese Law

| Standard/Law | International Equivalent | Type | Scope | Products |
|-------------|------------------------|------|-------|----------|
| **Luật An Ninh Mạng 2018** (No. 24/2018/QH14) | — | **LAW** | Cybersecurity, data sovereignty | CORTEX RANGE, all networked |
| **Nghị định 13/2023/NĐ-CP** | GDPR-like | **DECREE** | Personal data protection | CORTEX (soldier training data) |
| **TCVN 11930:2017** | ISO/IEC 27001:2013 | Standard | ISMS framework | CORTEX RANGE |
| **TCVN 12480:2018** | ISO/IEC 27035 | Standard | Security incident management | CORTEX RANGE |
| **TCVN 12482:2018** | OWASP-aligned | Standard | Web application security | CORTEX RANGE dashboard |
| **TCVN 11386:2016** | — | Standard | Electronic signature / digital certificate | CORTEX (qualification certs) |

### Key Legal Requirements (Luật An Ninh Mạng 2018)

| Article | Requirement | Impact on Workshop X |
|---------|-------------|---------------------|
| Art. 19 | Critical Information System (CIS) protection | CORTEX RANGE likely classified as CIS — requires security assessment |
| Art. 23 | Domestic data storage | Training data must be stored on-premises in Vietnam (satisfied by air-gapped edge server) |
| Art. 26 | Data classification and protection | Training performance data = RESTRICTED; encrypted at rest and in transit |
| Art. 29 | Security incident reporting | Incident response plan must include reporting to MoND CERT |
| Art. 35 | Annual CIS security audit | Annual security audit required for military training systems |

---

## 8. Product × Standard Matrix — Quick Reference

| Standard Domain | VN-RANGE-001 | V-SMASH | VN-12.7MM-SIM | VN-CUAS-001 | CORTEX SW |
|----------------|:---:|:---:|:---:|:---:|:---:|
| TCVN 7699 (Environmental) | ✅ Outdoor | ✅ Weapon-mount | ✅ Weapon-mount | ✅ Field | ❌ SW only |
| TCVN 7909 (EMC) | ✅ | ✅ | ✅ | ✅ | ❌ |
| TCVN 4255 (IP) | ✅ IP67/54 | ✅ IP67 | ✅ IP67 | ✅ IP67 | ❌ |
| QCVN 18 (Radio EMC) | ✅ WiFi | ✅ BLE | ❌ | ✅ WiFi/LTE | ❌ |
| QCVN 132 (Safety) | ✅ Edge HW | ❌ Battery | ❌ | ✅ | ❌ |
| TCVN 11919 (Battery) | ❌ | ✅ Li-ion | ❌ | ✅ Li-ion | ❌ |
| TCVN 11930 (ISMS) | ⚪ Optional | ❌ | ❌ | ⚪ Optional | ✅ |
| Luật ANMN 2018 | ✅ Networked | ❌ | ❌ | ✅ Networked | ✅ |
| NĐ 13/2023 (Data) | ✅ Soldier data | ❌ | ❌ | ❌ | ✅ |
| MIL-STD-810H | ✅ If export | ✅ If export | ✅ If export | ✅ If export | ❌ |
| MIL-STD-461G | ✅ If export | ✅ If export | ✅ If export | ✅ If export | ❌ |

Legend: ✅ = Required | ⚪ = Recommended | ❌ = Not applicable

---

## 9. Critical Gaps & Open Actions

| # | Gap | Priority | Action Required | Owner |
|---|-----|----------|----------------|-------|
| G1 | TCVN/QS military-specific standards catalog not obtained | **HIGH** | Request from Cục TC-ĐL-CL through military customer during VN-RANGE-001 engagement | KN + POC |
| G2 | TCVN/QS for shooting ranges (trường bắn) unknown | **HIGH** | Query during first military touchpoint — ask for applicable TCVN/QS or TCQS | KN |
| G3 | QCVN 101 scope for weapon-mounted electronics unclear | MEDIUM | Clarify whether BTTTT jurisdiction covers military accessories or if MoND TCVN/QS applies | KN |
| G4 | MIL-STD-810H/461G test lab not identified in region | **HIGH** | Shortlist: Singapore (ST Engineering), Australia (DSTO), South Korea (ADD) | KN |
| G5 | TCVN 7699 severity classes not mapped to product LCEPs | MEDIUM | Create per-product LCEP mapping during Phase 1 requirements | Per project |
| G6 | Vietnamese military data classification scheme unconfirmed | MEDIUM | Confirm RESTRICTED level appropriate for CORTEX training data | KN + POC |
| G7 | Annual CIS audit requirement — cost/process unknown | LOW | Research after first CORTEX deployment | KN |

---

## 10. How to Use This Matrix

### For New Products (Phase 1 — Task Clarification)
1. Look up product in §8 Product × Standard Matrix
2. For each ✅, add corresponding TCVN standard to requirements list (P13)
3. Add G1/G2 resolution as Phase 1 open items if TCVN/QS not yet obtained
4. Create LCEP mapping table (§2 Severity Mapping) for environmental testing

### For Phase 3 — Standards Compliance Matrix
1. Copy relevant rows from §2–§7 into project-specific compliance matrix
2. Add "Design Response" column showing how each standard is met
3. Add "Verification Phase" column (Phase 4 test, incoming inspection, or module cert)

### For Phase 4 — Verification Plan
1. Map each TCVN standard to specific A/I/T/D verification method
2. Identify which tests can be performed at Vietnamese labs vs international
3. Calculate total verification cost using TCVN 7699 test cost estimates

### For Procurement Engagement (B-NS Practice)
1. Reference §1 framework to demonstrate regulatory awareness
2. Use §7 cybersecurity compliance to address data sovereignty concerns
3. Use §9 gaps as conversation starters with military POC

---

*Matrix maintained by: KN Nguyen | Review cycle: quarterly or after new product added*
*Next review: 2026-05-22*
