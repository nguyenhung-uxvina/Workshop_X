---
project: V-SMASH-M
phase: 4
type: rfq
supplier: eMagin Corporation (Samsung Display)
part-target: eMagin SXGA096 OLED Microdisplay (or equivalent current-production part)
version: 1.0
created: 2026-03-04
status: draft
owner: Engineering / PM
reference-rfq: RFQ-VSMASHM-OLED-001 (Sony ECX339A — parallel evaluation)
---

# V-SMASH-M — OLED Supplier RFQ: eMagin SXGA096

**Reference:** BOM v1.1 §5.2 — VM-3101 single-source risk mitigation
**Sprint:** S01–S02 action (qualify 2 OLED vendors before first prototype order)
**Priority:** HIGH — VM-3101 (Sony ECX339A) is 8-week long-lead, single-source.
Qualifying eMagin as second source eliminates procurement risk before long-lead window closes.

---

## 1. Request Summary

Workshop X is developing the **V-SMASH-M**, a ruggedized micro AI weapon sight for military
applications. We are qualifying OLED microdisplay vendors for our SA-03 Display Module as part of
a dual-source qualification exercise. We request technical and commercial information for the
**eMagin SXGA096** OLED microdisplay — or the closest current-production equivalent in
eMagin's portfolio.

**Application context:** Military-grade near-eye display (weapon sight), IP66, MIL-STD-810H
shock/vibration, operating temperature −10°C to +55°C (storage −40°C to +70°C).
**Display integration:** Near-eye via custom optical module (SA-03). Critical constraint: display
diagonal must be ≤0.5". **Please confirm physical size early** — size is a pass/fail gate for
optical path compatibility.

> **Note on corporate ownership:** We are aware that eMagin was acquired by Samsung Display
> in 2023. Please clarify which entity handles military sales, export licensing, and long-term
> supply commitments post-acquisition.

---

## 2. Target Part Specification

| Parameter | Requirement | eMagin SXGA096 (expected — confirm) |
|-----------|-------------|--------------------------------------|
| Display type | OLED on Silicon (OLEDoS) or equivalent | OLEDoS ✓ (eMagin dPd™ OLED) |
| Diagonal size | **≤0.5" — PASS/FAIL gate** | TBC — **confirm early** |
| Resolution | 1024×768 (XGA) minimum | SXGA 1280×1024 (expected) |
| Pixel pitch | ≤9 μm | TBC |
| Luminance | ≥3,000 cd/m² (outdoor day use) | TBC — eMagin high-brightness variants known |
| Contrast ratio | ≥1,000:1 | TBC |
| Color | Monochrome green or full color | TBC |
| Interface | MIPI DSI (1-lane or 2-lane) preferred | TBC — confirm interface type |
| Operating voltage | 3.3V or 1.8V logic, OLED supply TBC | TBC |
| Operating temp | −10°C to +55°C | TBC |
| Storage temp | −40°C to +70°C | TBC |
| Shock | MIL-STD-810H Method 516.8, functional after 500G | TBC — key question |
| Vibration | MIL-STD-810H Method 514.8, 20–2000Hz | TBC |
| Package / form factor | Module or bare die; height ≤4 mm preferred | TBC |

> **Critical size constraint:** SA-03 optical module is designed around a ≤0.5" display diagonal.
> If SXGA096 physical size exceeds this, optical path redesign is required (±4 weeks impact).
> Please confirm physical dimensions (L × W × H) at first response.

---

## 3. Information Requested

### 3.1 Technical

1. **Datasheet / technical specification** for SXGA096 (or current production equivalent —
   note any model name change post-Samsung acquisition)
2. **Physical dimensions** (display area, PCB/module footprint, height) — needed immediately
   to confirm SA-03 optical compatibility
3. **Environmental qualification data** — shock, vibration, temperature: MIL-STD-810H test
   reports available? What are rated limits? (eMagin's defense heritage suggests this data exists)
4. **Interface details** — is MIPI DSI supported? If not, what is the native interface
   (parallel RGB, LVDS, other)? Lane count, data rate, initialization sequence?
5. **Luminance vs. drive current curve** — eMagin's dPd™ process is known for high brightness;
   confirm achievable luminance at target current for outdoor day use (≥3,000 cd/m²)
6. **Lifetime / reliability data** — T50 or T70 at nominal drive current
7. **Package options** — bare module, flex-attached, or PCB-integrated? Can we specify
   connector type?
8. **Driver IC / controller** — is there a recommended paired driver for this display?
   Does eMagin provide a driver board or reference design?

### 3.2 Commercial

1. **Unit price** at the following quantities: 50 / 200 / 500 / 1,000 units per year
2. **Lead time** from order to delivery (standard vs. made-to-order)
3. **Minimum order quantity (MOQ)**
4. **Sample availability** — can we obtain 5–10 evaluation samples? Timeline?
5. **Export classification** — ECCN or EAR99 status? Any end-use restrictions for Vietnam?
   (Note: eMagin has historically supplied US DoD programs — please confirm export licensing
   requirements for non-US military end users)
6. **Authorized distributor** in Vietnam, Southeast Asia, or Asia Pacific for ongoing supply
7. **Long-term supply commitment** — production lifetime post-Samsung acquisition;
   last-time-buy notice policy; any roadmap changes expected?
8. **Samsung Display relationship** — does the acquisition affect pricing, lead times,
   or supply priority for military customers?

### 3.3 Qualification Support

1. **Defense application references** — eMagin has supplied US military HMD programs;
   are there any releasable references or application notes for weapon sight / targeting use?
2. **MIL-STD-810H test reports** — any qualification data available under NDA?
3. **Engineering support** — is field application engineering available for integration support?

---

## 4. Evaluation Criteria

eMagin SXGA096 will be evaluated **head-to-head against Sony ECX339A** for BOM qualification.
Both evaluations use identical criteria. One or both may be qualified — goal is dual-source.

| Criterion | Weight | Pass/Fail Gate |
|-----------|--------|---------------|
| **Diagonal size ≤0.5"** | — | **PASS/FAIL — eliminates if fail** |
| Resolution ≥ 1024×768 | — | **PASS/FAIL** |
| Luminance ≥ 3,000 cd/m² | — | **PASS/FAIL** |
| **MIPI DSI interface** | — | **PASS/FAIL (preferred) — non-MIPI requires SW-COM driver rewrite** |
| Shock survival (functional after 500G, MIL-STD-810H) | 30 | Gate: must have test data or stated rating |
| Operating temp −10°C to +55°C | — | **PASS/FAIL** |
| Unit price at 500 units/year ≤ $25 | 25 | Score vs. competing quotes |
| Lead time ≤ 8 weeks | 20 | Score |
| Export compliance — no restriction for VN end user | — | **PASS/FAIL** |
| Dual-source with Sony (not sole eMagin) | 15 | Score |
| Sample availability within 4 weeks | 10 | Score |

> **Interface flag:** V-SMASH-M uses Jetson Orin Nano + SW-FW firmware with MIPI DSI controller.
> If SXGA096 requires a parallel RGB or non-standard interface, additional driver development
> is needed in SW-FW scope (~2–3 weeks). Please confirm interface early.

> **Export control flag:** eMagin's history with US military programs may create ITAR or EAR
> licensing requirements for Vietnam end-user. This is a disqualifying condition if no license
> path exists. Please clarify before sample shipment.

---

## 5. Submission Details

| Item | Detail |
|------|--------|
| **Response requested by** | [S01 end — TBD per sprint schedule] |
| **Send to** | [PM email — fill before sending] |
| **Reference** | RFQ-VSMASHM-OLED-002 |
| **Sample ship-to address** | Workshop X, [address — fill before sending] |
| **NDA required?** | Yes — please confirm eMagin/Samsung NDA template or use Workshop X template |
| **Priority response item** | Physical dimensions (§3.1 item 2) — please respond within 5 business days even if full response is pending |

---

## 6. Next Steps After RFQ Response

| Step | Trigger | Owner |
|------|---------|-------|
| Size confirmation | eMagin response (partial) — within 5 days | HW Lead |
| SA-03 optical compatibility check | Size confirmed | HW Lead |
| Export license assessment | eMagin confirms ECCN / license requirement | PM + Legal |
| Interface compatibility check | Datasheet received | SW-FW team |
| Order 5–10 evaluation samples | Size + interface + export OK | PM |
| Integration test (MIPI/interface bring-up) | Samples received (S04) | SW-COM team |
| Shock qualification pre-screen | Samples received | HW Lead |
| Vendor qualification decision | Integration test + shock screen pass | Engineering gate |
| Dual-source BOM update | Both Sony + eMagin qualified | PM |

---

## 7. Competing RFQs (Parallel)

| Vendor | Part | RFQ Ref | Status |
|--------|------|---------|--------|
| Sony | ECX339A | RFQ-VSMASHM-OLED-001 | Draft issued 2026-03-03 |
| **eMagin** | **SXGA096** | **RFQ-VSMASHM-OLED-002** | **This RFQ — draft** |

Goal: qualify **both vendors** by end of S02 to eliminate VM-3101 single-source risk.
If eMagin SXGA096 is oversized (>0.5" diagonal), request alternative smaller-format part
from eMagin portfolio before closing evaluation.

---

## 8. Supplier Background Note (Internal — Remove Before Sending)

eMagin Corporation (formerly NYSE: EMAN, now Samsung Display subsidiary since 2023):
- **Heritage:** 25+ years of OLED microdisplay development; primary supplier for US Army IVAS
  (Integrated Visual Augmentation System) and other DoD HMD programs
- **Technology:** dPd™ (direct-patterned deposition) OLED — enables high brightness
  (>3,000 cd/m²) at small size; competitive with Sony OLEDoS on luminance
- **Acquisition risk:** Samsung Display acquisition creates dual risk: (1) supply priority may
  shift to Samsung consumer/mobile programs; (2) export compliance framework may change
  under Samsung ownership. Confirm both with eMagin military sales team.
- **SXGA096 note:** Product name implies SXGA (1280×1024) resolution, "096" likely 0.96"
  diagonal — **this would FAIL the ≤0.5" size gate**. Request smallest-format SXGA or
  XGA panel in current portfolio if SXGA096 is oversized. eMagin also produces 0.31"–0.5"
  panels in some configurations — confirm availability.
- **Interface:** eMagin historically used parallel CMOS / LVDS interfaces; MIPI DSI support
  varies by model. Confirm before assuming MIPI compatibility.

*Remove §8 before sending to supplier.*

---

*V-SMASH-M OLED RFQ — eMagin SXGA096 — Draft v1.0, 2026-03-04 — Workshop X*
*Fill in: PM email, ship-to address, response deadline date before sending.*
*Remove §8 (internal supplier background note) before sending.*
*Send as PDF or formal email with this document as attachment.*
*Parallel evaluation: Sony ECX339A (RFQ-VSMASHM-OLED-001) issued 2026-03-03.*
