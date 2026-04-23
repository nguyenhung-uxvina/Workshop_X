---
project: V-SMASH-M
phase: 4
type: rfq
supplier: Sony Semiconductor Solutions Corporation
part-target: ECX339A OLED Microdisplay
version: 1.0
created: 2026-03-03
status: draft
owner: Engineering / PM
---

# V-SMASH-M — OLED Supplier RFQ: Sony ECX339A

**Reference:** BOM v1.1 §5.2 — VM-3101 single-source risk mitigation
**Sprint:** S01–S02 action (qualify 2 OLED vendors before first prototype order)
**Priority:** HIGH — VM-3101 is 8-week long-lead, single-source. No qualified vendor = FAT blocker.

---

## 1. Request Summary

Workshop X is developing the V-SMASH-M, a ruggedized micro AI weapon sight for military applications. We are qualifying OLED microdisplay vendors for our SA-03 Display Module. We request technical and commercial information for the **Sony ECX339A** OLED microdisplay.

**Application context:** Military-grade near-eye display (weapon sight), IP66, MIL-STD-810H shock/vibration, operating temperature −10°C to +55°C (storage −40°C to +70°C).

---

## 2. Target Part Specification

| Parameter | Requirement | Sony ECX339A (expected) |
|-----------|-------------|------------------------|
| Display type | OLED on Silicon (OLEDoS) or equivalent | OLEDoS ✓ |
| Diagonal size | ~0.39" ± 0.05" | 0.39" |
| Resolution | 1024×768 (XGA) minimum | 1024×768 ✓ |
| Pixel pitch | ≤9 μm | ~9.4 μm |
| Luminance | ≥3,000 cd/m² (outdoor day use) | TBC |
| Contrast ratio | ≥1,000:1 | TBC |
| Color | Monochrome green or full color | TBC |
| Interface | MIPI DSI (1-lane or 2-lane) | TBC |
| Operating voltage | 3.3V or 1.8V logic, OLED supply TBC | TBC |
| Operating temp | −10°C to +55°C | TBC |
| Storage temp | −40°C to +70°C | TBC |
| Shock | MIL-STD-810H Method 516.8, functional after 500G | TBC — key question |
| Vibration | MIL-STD-810H Method 514.8, 20–2000Hz | TBC |
| Package / form factor | Module (PCB + flex cable) or bare die | TBC |

---

## 3. Information Requested

### 3.1 Technical

1. **Datasheet / technical specification** for ECX339A (or current production equivalent)
2. **Environmental qualification data** — shock, vibration, temperature: has this part been tested to MIL-STD-810H or equivalent? What are the rated limits?
3. **Interface details** — MIPI DSI lane count, data rate, initialization sequence availability (register map / initialization code)
4. **Luminance vs. drive current curve** — or typical luminance at nominal drive
5. **Lifetime / reliability data** — T50 or T70 (luminance half-life) at nominal operating conditions
6. **Package options** — is bare module available, or flex-cable-attached module only? Dimensions?
7. **Existing driver IC recommendation** — is there a paired driver board/IC for MIPI DSI input?

### 3.2 Commercial

1. **Unit price** at the following quantities: 50 / 200 / 500 / 1,000 units per year
2. **Lead time** from order to delivery (standard stock vs. made-to-order)
3. **Minimum order quantity (MOQ)**
4. **Sample availability** — can we obtain 5–10 evaluation samples?
5. **Export classification** — ECCN or EAR99 status? Any end-use restrictions for Vietnam?
6. **Authorized distributor** in Vietnam or Southeast Asia (for ongoing supply)
7. **Long-term supply commitment** — production lifetime / last time buy notice policy

### 3.3 Qualification Support

1. **Application notes** for near-eye / weapon sight integration
2. **Reference customer cases** in defense or industrial near-eye display (if releasable)
3. **Engineering support availability** for integration questions during prototype phase

---

## 4. Evaluation Criteria

Sony ECX339A will be evaluated against the following criteria for BOM qualification:

| Criterion | Weight | Pass/Fail Gate |
|-----------|--------|---------------|
| Resolution ≥ 1024×768 | — | **PASS/FAIL** |
| Luminance ≥ 3,000 cd/m² | — | **PASS/FAIL** |
| MIPI DSI interface | — | **PASS/FAIL** |
| Shock survival (functional after 500G shock event, MIL-STD-810H or stated rating) | 30 | Gate: must have test data or stated rating |
| Operating temp −10°C to +55°C | — | **PASS/FAIL** |
| Unit price at 500 units/year ≤ $25 | 25 | Score vs. competing quotes |
| Lead time ≤ 8 weeks | 20 | Score |
| Export compliance (no restriction for VN) | — | **PASS/FAIL** |
| Dual-source availability (not sole Sony) | 15 | Score |
| Sample availability within 4 weeks | 10 | Score |

**Backup vendor under parallel evaluation:** eMagin SXGA096 (RFQ issued separately).

---

## 5. Submission Details

| Item | Detail |
|------|--------|
| **Response requested by** | [S01 end — TBD per sprint schedule] |
| **Send to** | [PM email — fill before sending] |
| **Reference** | RFQ-VSMASHM-OLED-001 |
| **Sample ship-to address** | Workshop X, [address — fill before sending] |
| **NDA required?** | Yes — please confirm Sony NDA or use Workshop X template |

---

## 6. Next Steps After RFQ Response

| Step | Trigger | Owner |
|------|---------|-------|
| Technical review of datasheet | Sony response received | HW Lead |
| Order 5–10 evaluation samples | Price + lead time acceptable | PM |
| Integration test (MIPI DSI bring-up) | Samples received (S04) | SW-COM team |
| Shock qualification check | Samples received (pre-T01 screening) | HW Lead |
| Vendor qualification decision | Integration test + shock screen pass | Engineering gate |
| Production order | BOM v1.1 approved + vendor qualified | PM |

---

## 7. Competing RFQs (Parallel)

| Vendor | Part | Status |
|--------|------|--------|
| **Sony** | ECX339A | **This RFQ — draft** |
| eMagin | SXGA096 | RFQ to be issued (S01–S02) |

Goal: qualify **both** vendors by end of S02 to eliminate VM-3101 single-source risk before long-lead procurement window closes.

---

*V-SMASH-M OLED RFQ — Sony ECX339A — Draft v1.0, 2026-03-03*
*Fill in: PM email, ship-to address, response deadline date before sending.*
*Send as PDF or formal email with this document as attachment.*
