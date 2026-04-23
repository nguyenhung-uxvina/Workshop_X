---
skill: S1 — AI Literacy × Engineering Design
phase: 5-7 — Vietnamese Military Acceptance (ANQP)
framework: TCCNQP Process + Law 38/2024/QH15 + Circular 25/2020/TT-BQP
slash_commands: /yckt · /banve · /hdsd · /hdbt · /dmktkt · /fieldtrial · /nghiemthu · /aisafety
type: prompt-library
version: 3.0
created: 2026-02-23
updated: 2026-03-04
schema: v3.0 (Workshop X Enhanced)
total_artifacts: 26
detailed_templates: 8
---

# Vietnamese Military Acceptance (ANQP) — Full Pipeline

> **Goal:** Bridge Pahl & Beitz Phase 0-4 output → Vietnamese defense procurement acceptance → series production.
> **Scope:** 26 artifacts across 7 phases — from pre-entry qualification through batch production authorization.
> **Legal basis:** Luật Công nghiệp Quốc phòng 38/2024/QH15 (effective Jul 2025), Circular 25/2020/TT-BQP.
> **Duration:** Phase 0 pre-entry starts at project inception. B-series generated in parallel with Phase 1-4. C-series starts after P57 gate.

---

## FULL PIPELINE OVERVIEW

```
PHASE 0 — TIỀN THẨM ĐỊNH (Pre-Entry Qualification)
    │
    ├── A1  Hồ sơ Năng lực           (Legal Qualification Dossier)
    ├── A2  Chứng nhận QMS            (ISO 9001 via Cục TC-ĐL-CL)
    ├── A3  Phương án An ninh          (Security Protocol)
    └── A4  Phê duyệt / Hợp đồng     (Written Approval / Contract)
    │
    ▼ Pre-entry Gate ✅ → Company authorized to develop defense product
    │
PHASE 1-4 — THIẾT KẾ KỸ THUẬT (Pahl & Beitz Engineering Design)
    │   Existing pipeline: P09→P57 (no change)
    │
    │   IN PARALLEL — Vietnamese-format equivalents:
    ├── B1  Yêu cầu Kỹ thuật — YCKT  (Bilingual Requirements)         ← P58 /yckt
    ├── B2  Danh mục Bản vẽ TK         (Drawing Package Checklist)            ← P64 /banve
    ├── B3  Quy trình Công nghệ SX    (Manufacturing Process Plan)     ← P62 /qtcn
    ├── B4  Hướng dẫn Sử dụng         (User Manual — Vietnamese)             ← P65 /hdsd
    ├── B5  Hướng dẫn Bảo trì         (Maintenance Manual — Vietnamese)      ← P66 /hdbt
    └── B6  Định mức KTKT             (Technical-Economic Norms)             ← P67 /dmktkt
    │
    ▼ Phase 4 Gate (P57) ✅ → Engineering design complete
    │
PHASE 5 — THỬ NGHIỆM & ĐÁNH GIÁ (Testing & Evaluation)
    │
    ├── C1   Kết quả TN Nhà máy       (Factory Test Results)
    ├── C2   KH Thử nghiệm Thực địa  (Field Trial Protocol)            ← P59 /fieldtrial
    ├── C3   Kết quả TN Thực địa      (Field Trial Results)
    ├── C4   Biên bản Thử nghiệm      (Test Minutes — signed witnesses)
    ├── C5   Báo cáo TN Môi trường    (Environmental Test Report)
    ├── C6   Đánh giá Độ tin cậy      (Reliability Assessment)
    └── C16  Đánh giá An toàn AI      (AI Safety Assessment)            ← P61 /aisafety [conditional]
    │
    ▼ Test Completion Gate ✅ → All tests passed, results documented
    │
PHASE 6 — NGHIỆM THU (Formal Acceptance)
    │
    ├── C7   Hồ sơ Nghiệm thu         (Acceptance Dossier)             ← P60 /nghiemthu
    ├── C8   Biên bản Hội đồng KH&CN  (S&T Council Review Minutes)
    ├── C9   Giấy CN Nghiệm thu       (Acceptance Certificate)
    └── C10  QĐ Nghiệm thu NN         (State Acceptance Decision)
    │
    ▼ Nghiệm thu Gate ✅ → Product formally accepted by state
    │
PHASE 7 — SẢN XUẤT LOẠT "0" (Series "0" Production)
    │
    ├── C11  KH Sản xuất Loạt "0"     (Series "0" Production Plan)
    ├── C12  KH Đảm bảo Chất lượng    (Quality Assurance Plan)
    ├── C13  QT Thử nghiệm Loạt "0"   (Series "0" Test Protocol)
    ├── C14  BC Đánh giá Loạt "0"      (Series "0" Evaluation Report)
    └── C15  Phê duyệt SX Hàng loạt   (Batch Production Authorization)
    │
    ▼ Batch Production Gate ✅ → Authorized for full-scale manufacturing
```

---

## ARTIFACT INDEX

| ID | Vietnamese Name | English Name | Phase | Template | HITL |
|----|----------------|--------------|-------|----------|------|
| **A1** | Hồ sơ Năng lực | Legal Qualification Dossier | 0 | spec | — |
| **A2** | Chứng nhận QMS | ISO 9001 Certification | 0 | spec | — |
| **A3** | Phương án An ninh | Security Protocol | 0 | spec | ✅ |
| **A4** | Phê duyệt / Hợp đồng | Written Approval / Contract | 0 | spec | ✅ |
| **B1** | Yêu cầu Kỹ thuật (YCKT) | Bilingual Requirements | 1-4 ∥ | **P58** `/yckt` | ✅ |
| **B2** | Danh mục Bản vẽ Thiết kế | Drawing Package Checklist (VN format) | 1-4 ∥ | **P64** `/banve` | — |
| **B3** | Quy trình Công nghệ SX | Manufacturing Process Plan | 1-4 ∥ | **P62** `/qtcn` → [ANQP_B3_Process_Plan.md](ANQP_B3_Process_Plan.md) | ✅ |
| **B4** | Hướng dẫn Sử dụng | User Manual | 1-4 ∥ | **P65** `/hdsd` | ✅ |
| **B5** | Hướng dẫn Bảo trì | Maintenance Manual | 1-4 ∥ | **P66** `/hdbt` | ✅ |
| **B6** | Định mức Kinh tế Kỹ thuật | Technical-Economic Norms (ĐMKTKT) | 1-4 ∥ | **P67** `/dmktkt` | ✅ |
| **C1** | Kết quả TN Nhà máy | Factory Test Results | 5 | spec | ✅ |
| **C2** | KH Thử nghiệm Thực địa | Field Trial Protocol | 5 | **P59** `/fieldtrial` | ✅ |
| **C3** | Kết quả TN Thực địa | Field Trial Results | 5 | spec | ✅ |
| **C4** | Biên bản Thử nghiệm | Test Minutes (signed) | 5 | spec | ✅ |
| **C5** | Báo cáo TN Môi trường | Environmental Test Report | 5 | spec | — |
| **C6** | Đánh giá Độ tin cậy | Reliability Assessment | 5 | spec | — |
| **C16** | Đánh giá An toàn AI | AI Safety Assessment | 5 | **P61** `/aisafety` | ✅ |
| **C7** | Hồ sơ Nghiệm thu | Acceptance Dossier | 6 | **P60** `/nghiemthu` | ✅ |
| **C8** | Biên bản Hội đồng KH&CN | S&T Council Review Minutes | 6 | spec | ✅ |
| **C9** | Giấy CN Nghiệm thu | Acceptance Certificate | 6 | spec | ✅ |
| **C10** | QĐ Nghiệm thu Nhà nước | State Acceptance Decision | 6 | spec | ✅ |
| **C11** | KH Sản xuất Loạt "0" | Series "0" Production Plan | 7 | spec | — |
| **C12** | KH Đảm bảo Chất lượng | Quality Assurance Plan | 7 | spec | — |
| **C13** | QT Thử nghiệm Loạt "0" | Series "0" Test Protocol | 7 | spec | ✅ |
| **C14** | BC Đánh giá Loạt "0" | Series "0" Evaluation Report | 7 | spec | ✅ |
| **C15** | Phê duyệt SX Hàng loạt | Batch Production Authorization | 7 | spec | ✅ |

> **Template legend:** `P##` = full DCTRS prompt template (below) | `spec` = artifact specification (expandable to DCTRS when needed)

---

## PHASE 0 — TIỀN THẨM ĐỊNH (Pre-Entry Qualification)

> **When:** Before any design work. Company must be authorized to develop defense products.
> **Gate:** All A1-A4 complete → company cleared to proceed with specific product development.
> **Legal basis:** Law 38/2024/QH15, Articles 15-18 (private company participation in defense industry).

### A1: Hồ sơ Năng lực (Legal Qualification Dossier)

| Field | Content |
|-------|---------|
| **Purpose** | Prove company meets Law 38/2024 requirements for defense product development |
| **Contents** | Business registration, ≥50 technical workers evidence, facility ownership/lease, financial capability, past defense project references (if any) |
| **Submitted to** | TCCNQP (Tổng cục CNQP) or sponsoring military unit |
| **Format** | Vietnamese — certified copies, notarized translations for foreign docs |
| **Key requirement** | No foreign controlling interest for classified projects (Art. 17) |
| **AI role** | Format and checklist only — content is company-specific legal documents |

### A2: Chứng nhận QMS (ISO 9001 via Cục TC-ĐL-CL)

| Field | Content |
|-------|---------|
| **Purpose** | Demonstrate quality management system meets defense manufacturing requirements |
| **Contents** | ISO 9001 certificate (or equivalent), QMS manual abstract, process maps, calibration records |
| **Submitted to** | Cục TC-ĐL-CL (Standards, Metrology & Quality Bureau) for verification |
| **Key requirement** | Must be current (≤3 years). Defense-specific QMS addendum recommended (QCVN/BQP) |
| **AI role** | Gap analysis: existing ISO 9001 scope vs. defense product requirements |

### A3: Phương án An ninh (Security Protocol)

| Field | Content |
|-------|---------|
| **Purpose** | Establish security measures for classified defense product development |
| **Contents** | Physical security plan (facility), personnel clearance list, information security (IT/network), visitor control, document handling procedures |
| **Submitted to** | Military security authority (Cục Bảo vệ An ninh) |
| **Key requirement** | Clearance level must match product classification. All key personnel individually cleared. |
| **HITL** | ✅ Security protocol is company-specific — never AI-generated content for clearance applications |
| **AI role** | Checklist and template structure only — company fills in all security details |

### A4: Phê duyệt / Hợp đồng (Written Approval / Contract)

| Field | Content |
|-------|---------|
| **Purpose** | Formal authorization to begin product development + contract terms |
| **Contents** | Development authorization letter from sponsoring unit, R&D contract (scope, budget, timeline, deliverables, IP ownership), export control classification |
| **Submitted to** | TCCNQP + sponsoring military unit |
| **Key requirement** | Contract must specify: acceptance criteria, local content target, IP ownership, penalty clauses |
| **HITL** | ✅ Contract is a legal document — AI drafts structure, human negotiates and finalizes |
| **AI role** | Contract template structure, standard clause library, checklist |

---

## PHASE 1-4 PARALLEL — TÀI LIỆU KỸ THUẬT SONG SONG

> **When:** Generated in parallel with Pahl & Beitz Phase 1-4 engineering design.
> **Purpose:** Vietnamese-format documentation required for military customer engagement and eventual acceptance.
> **Note:** B1 (YCKT) is the critical path item — without it, product cannot enter formal evaluation.

### B1: Yêu cầu Kỹ thuật — YCKT → **P58** `/yckt`

Full DCTRS template: see [P58 detailed template](#p58--yêu-cầu-kỹ-thuật--bilingual-technical-requirements-yckt) below.

| Field | Content |
|-------|---------|
| **Source** | Phase 1 Requirements List (P13) + Standards Compliance Matrix (P51) |
| **Generate when** | Phase 1 gate approved — requirements stable |
| **HITL** | ✅ Legally binding after co-signature. Every line reviewed by engineer + military customer. |

### B2: Danh mục Bản vẽ Thiết kế → **P64** `/banve`

Full DCTRS template: see [P64 detailed template](#p64--danh-mục-bản-vẽ-thiết-kế--drawing-package-checklist-banve) below.

| Field | Content |
|-------|---------|
| **Purpose** | Master drawing list + T/I/A/B production stage checklists per Vietnamese military regulations |
| **Contents** | Drawing numbering system, master drawing list (all drawings), detail specs per drawing type (CNC, injection mold, PCB, optical, assembly), T/I/A/B cumulative checklists, supply chain risk annotation |
| **Source** | BOM (P33) + Assembly Sequence + FMEA (P26) + Layout Design Review (P23) |
| **Generate when** | Phase 4 BOM approved — all parts finalized |
| **Format** | Per TCVN 3821 (Title block), Vietnamese drawing numbering system |
| **AI role** | 70% auto — drawing list, numbering, checklists from BOM. Actual CAD drawings are manual. |

### B3: Quy trình Công nghệ Sản xuất → **P62** `/qtcn`

> **Full S1-S5 integration framework:** see [ANQP_B3_Process_Plan.md](ANQP_B3_Process_Plan.md)
> Includes: DCTRS template, 4-agent orchestration pipeline, 14-point QC gate, automation gradient, TCVN governance matrix, 3 operational checklists, 7 artifact templates, B2 drawing reference, 6-stage process inspection checklist.

| Field | Content |
|-------|---------|
| **Purpose** | Step-by-step manufacturing process for Vietnamese production facility |
| **Contents** | Process flow diagram (13 sections), workstation assignments, tooling list, **B2 drawing reference per operation**, QC hold points, **6-stage process inspection checklist**, cycle times, material routing, NCR procedures, safety/PPE |
| **Source** | BOM (P33) + DfX Analysis (P25) + Material Selection (P24) + Standards (P51) + Cost (P35) |
| **Generate when** | Phase 4 BOM approved — manufacturing sequence can be defined |
| **Orchestration** | Master Agent + 4 sub-agents: BOM Decomp (A), DfX Constraints (B), Local Router (C), Standards Mapper (D) |
| **Key requirement** | Must identify local content at each process step. QC hold points for safety-critical operations. Every operation → B2 drawing reference. 6-stage inspection checklist cross-refs drawings + YCKT. |
| **HITL** | ✅ Process engineer + QC manager approval required. Safety-critical QC points cannot be automated. |
| **AI role** | 60% auto generation — process flow, cycle times, standards mapping. Human validates sequence, safety, terminology. |

### B4: Hướng dẫn Sử dụng → **P65** `/hdsd`

Full DCTRS template: see [P65 detailed template](#p65--hướng-dẫn-sử-dụng--user-manual-hdsd) below.

| Field | Content |
|-------|---------|
| **Purpose** | Vietnamese-language operator manual for military end-users |
| **Contents** | Product description, "does NOT" table, safety warnings (⚠), quick-start, detailed operation (states, confidence tiers, classification types), LED/OLED status, troubleshooting, L1 maintenance, storage/transport, disposal/security destruction |
| **Source** | B1 YCKT (P58) + FMEA (P26) + DfX (P25) + Assembly Sequence |
| **Generate when** | Phase 4 near-complete — functional design stable |
| **Key requirement** | Reading level for basic infantry soldier. Safety warnings bilingual with pictograms. AI-specific: "follow the dot" paradigm, override procedures prominent, "does NOT" table upfront. |
| **HITL** | ✅ Safety warnings + AI behavior descriptions require engineer review |
| **AI role** | 80% auto — structure and text from YCKT/FMEA. Human validates safety warnings, AI behavior descriptions, Vietnamese terminology. |

### B5: Hướng dẫn Bảo trì → **P66** `/hdbt`

Full DCTRS template: see [P66 detailed template](#p66--hướng-dẫn-bảo-trì--maintenance-manual-hdbt) below.

| Field | Content |
|-------|---------|
| **Purpose** | Vietnamese-language maintenance and repair manual for field technicians (L2) and factory engineers (L3) |
| **Contents** | Sub-assembly maintenance matrix (L1/L2/L3), preventive schedule (round-count + calendar + event-based), corrective procedures with FMEA cross-ref, diagnostics (USB-C error codes, visual inspection), calibration procedures, repair limits + condemn criteria, spare parts kits (L1/L2/L3 with costs), tool kits, maintenance record forms (PM + CM) |
| **Source** | BOM (P33) + FMEA (P26) + DfX-Maintainability (P25) + B4 User Manual (L1 operator reference) |
| **Generate when** | Phase 4 complete — all components and failure modes finalized |
| **Key requirement** | 3 maintenance levels: L1 (xạ thủ), L2 (KTV đại đội), L3 (KTV kho). MTTR per procedure. Dual-signature for safety-critical L3 repairs. Supply chain risk markers on spare parts. |
| **HITL** | ✅ Safety-critical repair procedures + bore-sight calibration require engineer validation |
| **AI role** | 75% auto — procedures from FMEA, spare parts from BOM, schedules from DfX. Human validates MTTR estimates, condemn criteria, calibration specs. |

### B6: Định mức Kinh tế Kỹ thuật — ĐMKTKT → **P67** `/dmktkt`

Full DCTRS template: see [P67 detailed template](#p67--định-mức-ktkt--technical-economic-norms-dmktkt) below.

| Field | Content |
|-------|---------|
| **Purpose** | Per-unit resource consumption norms for materials, labor, equipment, energy, and waste/scrap. Used for military procurement pricing, production planning, and auditing. |
| **Contents** | (I) General info, (II) Material norms per unit (quantity + scrap allowance per BOM item), (III) Labor norms (hours by skill level per operation group), (IV) Equipment usage norms (machine-hours + depreciation), (V) Energy norms (kWh/unit), (VI) Waste/scrap norms (FPY, rework costs, disposal), (VII) Summary cost norms (giá thành toàn bộ), (VIII) Applicability conditions + volume scaling factors, (IX) Approval signatures |
| **Source** | B3 Quy trình CNSX (operations, cycle times, material routing) + P35 Cost Analysis (unit cost breakdown) + BOM (P33) + Assembly Sequence |
| **Generate when** | Phase 4 complete — B3 process plan and BOM finalized |
| **Key requirement** | Every material item includes scrap/loss allowance (%). Labor classified by Vietnamese skill grade (bậc thợ). Equipment depreciation calculated. Volume scaling factors for 100→2,000 units/year. All costs reconciled with P35 within ±5%. |
| **HITL** | ✅ Scrap rates, labor rates, exchange rate, overhead allocation require human validation |
| **AI role** | 70% auto — norms from B3 + P35 data. Human validates rates and assumptions. |

---

## PHASE 5 — THỬ NGHIỆM & ĐÁNH GIÁ (Testing & Evaluation)

> **When:** After Phase 4 gate approval (P57). Products built, ready for testing.
> **Gate:** All C1-C6 (+ C16 if AI) complete → test evidence package ready for acceptance.
> **Key principle:** Test sequence: factory first → field second. Non-destructive before destructive.

### C1: Kết quả Thử nghiệm Nhà máy (Factory Test Results)

| Field | Content |
|-------|---------|
| **Purpose** | Document factory-level testing before field trials — prove product meets basic specifications |
| **Contents** | Test setup description, unit serial numbers, test-by-test results (pass/fail + measured values), non-conformance log, corrective actions taken, final factory test status |
| **Source** | Verification Plan (P34) — factory-level tests (unit tests, bench tests) |
| **Witnesses** | QC department + customer representative (optional at factory level) |
| **HITL** | ✅ Factory test sign-off before shipping to field trial site |
| **Key requirement** | All [SAFETY-CRITICAL] items tested at factory. Failed items corrected and retested before shipping. |
| **AI role** | Test result template, pass/fail comparison against YCKT thresholds, non-conformance report format |

### C2: Kế hoạch Thử nghiệm Thực địa → **P59** `/fieldtrial`

Full DCTRS template: see [P59 detailed template](#p59--field-trial-protocol--kế-hoạch-thử-nghiệm-thực-địa-fieldtrial) below.

| Field | Content |
|-------|---------|
| **Source** | Verification Plan (P34) + YCKT (B1) + Test Requirements (Phase 3) |
| **Generate when** | Factory tests (C1) passed — scheduling field trial |
| **HITL** | ✅ Protocol requires Hội đồng KH&CN pre-approval before any trial execution |

### C3: Kết quả Thử nghiệm Thực địa (Field Trial Results)

| Field | Content |
|-------|---------|
| **Purpose** | Document all field trial test results — the core evidence for acceptance |
| **Contents** | Per-test data sheets (filled C2 forms), environmental conditions log, photo/video evidence, measurement data files, non-conformance events, daily debrief minutes |
| **Source** | Execution of C2 protocol at trial site |
| **Witnesses** | Hội đồng KH&CN representative + military end-user + developer team |
| **HITL** | ✅ All witnesses sign daily test logs. Final results signed by all parties. |
| **Key requirement** | Raw data preserved (not just summary). Every failed test gets root cause analysis. Retest results separately documented. |
| **AI role** | Data aggregation template, pass/fail summary generator, trend analysis on repeated tests |

### C4: Biên bản Thử nghiệm (Test Minutes — Signed by Witnesses)

| Field | Content |
|-------|---------|
| **Purpose** | Official minutes of the test and evaluation process — legal record |
| **Contents** | Meeting composition (names, ranks, roles), test summary (conducted/not conducted), key observations, non-conformances noted, overall assessment, recommendations, signatures |
| **Source** | C2 execution + C3 results + witness observations |
| **Witnesses** | All Hội đồng members sign. Dissenting opinions recorded. |
| **HITL** | ✅ This is a legal document. No AI-generated content in the minutes body. |
| **Key requirement** | Minutes drafted during/immediately after trial. Not after-the-fact reconstruction. |
| **AI role** | Template structure only. Content is handwritten/dictated by witnesses. |

### C5: Báo cáo Thử nghiệm Môi trường (Environmental Test Report)

| Field | Content |
|-------|---------|
| **Purpose** | Document compliance with environmental/durability requirements (MIL-STD-810H, TCVN equivalents) |
| **Contents** | Test matrix (temperature, humidity, vibration, shock, salt fog, dust, rain), test setup per method, before/after functional check results, photo evidence, compliance summary |
| **Source** | Verification Plan (P34) environmental tests + Standards Compliance Matrix (P51) |
| **Test facility** | Viện KH&CN Quân sự or accredited commercial lab |
| **Key requirement** | Each test references specific MIL-STD-810H method number and TCVN equivalent. Calibration certificates for all test equipment included. |
| **AI role** | Test matrix template per MIL-STD-810H methods, compliance checklist, result comparison table |

### C6: Đánh giá Độ tin cậy (Reliability Assessment)

| Field | Content |
|-------|---------|
| **Purpose** | Quantify product reliability — MTBF, MTTR, availability for military operational planning |
| **Contents** | Reliability block diagram, MTBF prediction (MIL-HDBK-217 or field data), MTTR estimates per maintenance level, spare parts consumption rate, availability calculation, reliability growth plan |
| **Source** | FMEA (P26) + factory test data (C1) + field trial data (C3) + component datasheets |
| **Key requirement** | MTBF claim must be supported by either prediction method OR test data — clearly state which. If prediction only, mark [DỰ BÁO — chưa xác nhận bằng thử nghiệm]. |
| **AI role** | Reliability prediction framework, MTBF calculation from component failure rates, availability model |

### C16: Đánh giá An toàn AI → **P61** `/aisafety` [CONDITIONAL]

Full DCTRS template: see [P61 detailed template](#p61--ai-subsystem-safety-assessment-aisafety) below.

> **Conditional:** Only required if product contains AI/ML subsystem. Skip for non-AI products.

| Field | Content |
|-------|---------|
| **Source** | AI subsystem design (Phase 2-3) + FMEA (P26) + IRONMESH Ethical Governance Framework |
| **Generate when** | Phase 4 complete — AI behavior fully characterized |
| **HITL** | ✅ AI safety assessment requires engineer + ethics officer review before S&T Council |

---

## PHASE 6 — NGHIỆM THU (Formal Acceptance)

> **When:** All Phase 5 testing complete. Dossier compiled for Hội đồng KH&CN review.
> **Gate:** C10 (State Acceptance Decision) issued → product formally accepted.
> **Key principle:** This is a FORMAL LEGAL PROCESS. Timeline driven by Hội đồng schedule, not developer schedule.

### C7: Hồ sơ Nghiệm thu → **P60** `/nghiemthu`

Full DCTRS template: see [P60 detailed template](#p60--acceptance-dossier--hồ-sơ-nghiệm-thu-nghiemthu) below.

| Field | Content |
|-------|---------|
| **Source** | ALL Phase 0-5 artifacts compiled into single package |
| **Generate when** | All Phase 5 tests passed — compiling for submission |
| **HITL** | ✅ Dossier submission starts formal clock. Incomplete = credibility damage. |

### C8: Biên bản Hội đồng KH&CN (S&T Council Review Minutes)

| Field | Content |
|-------|---------|
| **Purpose** | Official record of S&T Council review session — the formal evaluation of the product |
| **Contents** | Council composition (names, qualifications, specializations), dossier review summary, technical questions raised + answers, strengths/weaknesses identified, individual member assessments, vote/consensus result, conditions (if conditional acceptance) |
| **Generated by** | Hội đồng KH&CN secretary — NOT the developer |
| **HITL** | ✅ Developer has no control over this document. Can only respond to questions raised. |
| **Key requirement** | Developer should prepare briefing materials and be ready to defend all technical claims. |
| **AI role** | Briefing preparation support — anticipate likely questions based on dossier gaps, prepare response notes |

### C9: Giấy Chứng nhận Nghiệm thu (Acceptance Certificate)

| Field | Content |
|-------|---------|
| **Purpose** | Formal certificate that the product meets all YCKT requirements — issued by acceptance authority |
| **Contents** | Product identification (name, code, version), YCKT reference, test summary (all requirements met/conditions), acceptance level (full / conditional / limited), validity period, issuing authority |
| **Issued by** | Cục TC-ĐL-CL or designated acceptance authority |
| **HITL** | ✅ Certificate is issued by authority, not requested. Developer can only ensure dossier quality. |
| **Key requirement** | Conditional acceptance → list of conditions + timeline to resolve |
| **AI role** | None — this is an authority-issued document. Developer tracks status only. |

### C10: Quyết định Nghiệm thu Nhà nước (State Acceptance Decision)

| Field | Content |
|-------|---------|
| **Purpose** | Formal state-level decision to accept the product into military service |
| **Contents** | Decision number, product identification, acceptance scope (which configurations, quantities), authorized production facility, conditions/restrictions, effective date |
| **Issued by** | TCCNQP or Ministry of National Defense (depending on product classification) |
| **HITL** | ✅ State decision — developer has no control. Can only ensure quality of submission. |
| **Key requirement** | This decision authorizes Series "0" production. Without C10, manufacturing is not permitted. |
| **AI role** | None — tracking and status monitoring only |

---

## PHASE 7 — SẢN XUẤT LOẠT "0" (Series "0" Production)

> **When:** After C10 (State Acceptance Decision) authorizes production.
> **Gate:** C15 (Batch Production Authorization) → full-scale manufacturing permitted.
> **Key principle:** Series "0" is a VALIDATION run — prove manufacturing process, not just design.
> **Typical qty:** 5-20 units depending on product complexity and military order size.

### C11: Kế hoạch Sản xuất Loạt "0" (Series "0" Production Plan)

| Field | Content |
|-------|---------|
| **Purpose** | Plan the first production run to validate manufacturing process and supply chain |
| **Contents** | Production quantity and rationale, production schedule (Gantt), workstation assignments, material procurement plan (local vs import), tooling/fixture requirements, personnel training plan, quality control plan reference (C12) |
| **Source** | BOM (P33) + Manufacturing Process Plan (B3) + C10 authorization |
| **Key requirement** | Must demonstrate local content commitment. Material lead times factored into schedule. |
| **AI role** | Production schedule template, procurement timeline calculator, resource allocation framework |

### C12: Kế hoạch Đảm bảo Chất lượng (Quality Assurance Plan)

| Field | Content |
|-------|---------|
| **Purpose** | Define quality control measures for Series "0" production — catch process issues early |
| **Contents** | Incoming material inspection plan, in-process inspection points, final inspection protocol, statistical process control (SPC) parameters, non-conformance handling procedure, calibration management, traceability system (serial numbers, lot tracking) |
| **Source** | QMS (A2) + Verification Plan (P34) + Manufacturing Process Plan (B3) |
| **Key requirement** | 100% inspection for Series "0" (no sampling). SPC baseline established for future batch production. |
| **AI role** | QA plan template, SPC parameter selection, inspection checklist generator |

### C13: Quy trình Thử nghiệm Loạt "0" (Series "0" Test Protocol)

| Field | Content |
|-------|---------|
| **Purpose** | Test protocol specifically for Series "0" units — verify manufacturing consistency |
| **Contents** | Which tests from C1/C2 are repeated on Series "0" units, sample selection criteria, acceptance criteria (same as YCKT or relaxed for process validation), inter-unit consistency metrics |
| **Source** | Verification Plan (P34) + Field Trial Protocol (C2) + factory test results (C1) |
| **HITL** | ✅ Test scope selection — not all tests may be needed for every Series "0" unit |
| **Key requirement** | At minimum: all [SAFETY-CRITICAL] tests on every unit. Performance tests on sample basis with justification. |
| **AI role** | Test selection matrix, sample size calculator, consistency metrics framework |

### C14: Báo cáo Đánh giá Loạt "0" (Series "0" Evaluation Report)

| Field | Content |
|-------|---------|
| **Purpose** | Evaluate Series "0" results — prove manufacturing is repeatable and product is production-ready |
| **Contents** | Production metrics (yield, cycle time, defect rate), test results summary (all units), inter-unit variation analysis, process capability (Cpk) for critical dimensions, non-conformance summary and corrective actions, cost actual vs. estimate, supply chain performance, lessons learned |
| **Source** | C11 execution data + C13 test results + production records |
| **HITL** | ✅ Evaluation determines go/no-go for batch production. Management + military customer review. |
| **Key requirement** | Cpk ≥ 1.33 for critical dimensions. Yield ≥ 90% for Series "0" (process learning expected). |
| **AI role** | Statistical analysis, Cpk calculation, variation charts, comparison to design targets |

### C15: Phê duyệt Sản xuất Hàng loạt (Batch Production Authorization)

| Field | Content |
|-------|---------|
| **Purpose** | Formal authorization to proceed from Series "0" to full batch production |
| **Contents** | Series "0" evaluation summary, production readiness assessment, supply chain readiness, quality system readiness, recommended batch size, pricing confirmation, authorization signatures |
| **Issued by** | TCCNQP + sponsoring military unit (joint decision) |
| **HITL** | ✅ This is a business + military decision. Developer presents data, authority decides. |
| **Key requirement** | All Series "0" non-conformances resolved. Process capability demonstrated. Cost within contract. |
| **AI role** | Production readiness checklist, data compilation for decision brief |

---

## DETAILED PROMPT TEMPLATES (DCTRS v3.0)

> The following 8 templates are fully specified in DCTRS v3.0 format.
> Remaining 17 artifacts have specifications above — promote to full DCTRS templates as needed.

---

### P58 — Yêu cầu Kỹ thuật — Bilingual Technical Requirements (`/yckt`)
**Artifact:** B1 | **Use when:** Phase 4 complete or near-complete — military customer engagement imminent
**Why it works:** Vietnamese military procurement requires YCKT (Yêu cầu Kỹ thuật) in standardized format co-signed by both developer and military customer. Without YCKT, product cannot enter formal evaluation. This converts our English Phase 1 requirements into the correct bilingual format.

```
TASK: Generate Yêu cầu Kỹ thuật (YCKT) document for {{product_name}}
  Convert Phase 1 requirements list into Vietnamese military YCKT format.
  Bilingual: Vietnamese primary text, English technical terms in parentheses.
  Structure per Circular 25/2020/TT-BQP framework.
  Return: Complete YCKT document ready for military customer co-signature.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  phase: 5 (ANQP Preparation)
  inputs:
    - Phase 1 Requirements List: {{reference}}
    - Standards Compliance Matrix: {{reference}}
    - TCVN Compliance Matrix: {{reference — IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md}}
  military_customer: {{unit name or TBD}}
  classification: {{UNCLASSIFIED / RESTRICTED / CONFIDENTIAL}}
  language: Vietnamese primary, English technical terms

CONSTRAINTS:
  hard_limits:
    - Every MUST requirement from Phase 1 → YCKT mandatory parameter
    - Every WISH requirement → YCKT desired parameter (clearly marked)
    - All numeric thresholds preserved exactly — no rounding
    - Standards cited as TCVN equivalents (not MIL-STD) — use TCVN mapping
    - Where no TCVN equivalent exists: cite MIL-STD with note "chưa có TCVN tương đương"
  reject_conditions:
    - Phase 1 requirements list not available or incomplete (<50% quantified)
    - Classification level unclear — stop and ask before proceeding
    - Safety-critical requirements missing verification method
  prohibited_actions:
    - Never translate technical terminology into Vietnamese if no standard term exists — keep English with parenthetical explanation
    - Never fabricate TCVN numbers — mark [KIỂM TRA: cần xác nhận số TCVN] if unsure
    - Never omit safety-critical requirements
    - Never downgrade D (MUST) to W in translation

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  on_completion: true — "YCKT must be reviewed by engineer AND military customer before signing"
  on_safety_flag: "IMMEDIATE" — any safety-critical requirement unclear in Vietnamese translation
  trigger_note: "This document becomes legally binding after co-signature. Review every line."

SAFETY_OVERRIDE: "Any requirement tagged [SAFETY-CRITICAL] must be highlighted with ⚠ marker in YCKT. Cannot be edited or removed without S&T Council approval."

SUCCESS_CRITERIA:
  completeness: "100% of MUST requirements from Phase 1 appear in YCKT"
  tcvn_mapping: "≥80% of standards mapped to TCVN equivalents"
  bilingual_quality: "Technical meaning preserved — no ambiguity between EN and VN versions"
  format_compliance: "Matches Circular 25/2020/TT-BQP structure"

FALLBACK_PROTOCOL:
  missing_tcvn: "Mark [KIỂM TRA] and include MIL-STD number — resolve with Cục TC-ĐL-CL"
  ambiguous_requirement: "Flag with [CẦN LÀM RÕ] — do not translate until clarified"
  classification_unclear: "STOP — do not generate document until classification confirmed"
  unknown_error: "Save partial output, flag incomplete sections, alert engineer"

OUTPUT_FORMAT: markdown
UNCERTAINTY_FLAG: true — unverified TCVN mappings tagged [KIỂM TRA]
EVIDENCE_REQUIRED: true — every standard citation includes source document

--- YCKT DOCUMENT STRUCTURE ---

PHẦN I — THÔNG TIN CHUNG (General Information)
  1.1 Tên sản phẩm (Product Name): {{Vietnamese name}} ({{English name}})
  1.2 Mã sản phẩm (Product Code): {{code}}
  1.3 Đơn vị phát triển (Developer): {{company}}
  1.4 Đơn vị đặt hàng (Customer): {{military unit}}
  1.5 Phân loại bảo mật (Classification): {{level}}
  1.6 Phiên bản (Version): {{version}}
  1.7 Ngày (Date): {{date}}

PHẦN II — YÊU CẦU KỸ THUẬT BẮT BUỘC (Mandatory Technical Requirements)
  Table: | STT | Mã yêu cầu | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | Phương pháp kiểm tra | Tiêu chuẩn |
  STT = sequential number
  Mã yêu cầu = original requirement ID (e.g., VM-F01)
  Chỉ tiêu = threshold/target value
  Phương pháp kiểm tra = A/I/T/D verification method
  Tiêu chuẩn = applicable TCVN or MIL-STD

PHẦN III — YÊU CẦU MONG MUỐN (Desired Requirements)
  Same table format as Part II, clearly marked as non-mandatory

PHẦN IV — TIÊU CHUẨN ÁP DỤNG (Applicable Standards)
  List all TCVN, QCVN, MIL-STD standards with Vietnamese titles
  Note equivalence relationships (e.g., TCVN 7699-2-6 ≡ IEC 60068-2-6 ≡ MIL-STD-810H Method 514.8)

PHẦN V — ĐIỀU KIỆN ĐẶC BIỆT (Special Conditions)
  5.1 Yêu cầu an toàn (Safety requirements) — flagged items
  5.2 Yêu cầu bảo mật (Security requirements)
  5.3 Yêu cầu nội địa hóa (Local content requirements)
  5.4 Yêu cầu về AI (AI-specific requirements) — if applicable

PHẦN VI — KÝ DUYỆT (Approval Signatures)
  Bên phát triển (Developer): _________________ Ngày: _____
  Bên đặt hàng (Customer):   _________________ Ngày: _____
  Hội đồng KH&CN (S&T Council): ______________ Ngày: _____
```

---

### P64 — Danh mục Bản vẽ Thiết kế — Drawing Package Checklist (`/banve`)
**Artifact:** B2 | **Use when:** Phase 4 BOM approved — need master drawing list with T/I/A/B stage checklists
**Why it works:** Vietnamese military production uses T/I/A/B stage stamps (Thiết kế / Đơn chiếc / Loạt 0 / Hàng loạt). Each stage requires specific drawings and approvals. This checklist ensures all required drawings are identified, numbered, and tracked through the production stage progression. Note: this generates the CHECKLIST — actual CAD drawings are manual work.

```
TASK: Generate Danh mục Bản vẽ Thiết kế (Drawing Package Checklist) for {{product_name}}
  List all technical drawings required, assign numbering system,
  create T/I/A/B production stage checklists.
  Return: bilingual drawing checklist document with cumulative stage checklists.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  inputs:
    - BOM: {{reference — part list with sub-assemblies}}
    - Assembly Sequence: {{reference}}
    - FMEA: {{reference — identifies critical parts needing detailed drawings}}
    - Layout Design Review: {{reference}}
  drawing_numbering: {{product_code}}-XXXX-DWG-YYY-RevZ
  title_block_standard: TCVN 3821
  approval_chain: T (thiết kế) / K (kiểm tra) / D (duyệt)
  target_stage: {{T / I / A / B — current product position}}

CONSTRAINTS:
  hard_limits:
    - Every BOM part with custom geometry → requires detail drawing
    - Every sub-assembly → requires assembly drawing
    - Every PCB → requires schematic + layout + wiring diagram
    - Safety-critical parts from FMEA (S≥8) → flagged in drawing list
    - Supply chain risk items → marked ⚠ on assembly drawing balloons
  reject_conditions:
    - BOM not available or incomplete
    - No assembly sequence defined
  prohibited_actions:
    - Do NOT generate actual CAD drawings — this is a CHECKLIST only
    - Do NOT assign drawing numbers to COTS components (no custom geometry)
    - Do NOT skip optical/sensor drawings even if specs are TBD

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete full drawing checklist before review
  on_completion: true — "Drawing list must be reviewed by lead engineer before CAD work begins"
  on_safety_flag: "IMMEDIATE" — any safety-critical part (FMEA S≥8) found without drawing assignment; halt and flag immediately

SAFETY_OVERRIDE: "Safety-critical parts (FMEA S≥8) must have drawings at dấu T stage — never defer."

SUCCESS_CRITERIA:
  bom_coverage: "Every custom-geometry BOM part has a drawing entry in the master list"
  safety_critical_flagged: "All FMEA S≥8 parts flagged in drawing list"
  numbering_consistent: "All drawing numbers follow specified format — no gaps or duplicates"
  stage_checklists: "T/I/A/B stage checklists complete with cumulative requirements"

FALLBACK_PROTOCOL:
  bom_incomplete: "Flag [BOM INCOMPLETE]; proceed with available BOM; mark missing parts [PENDING BOM UPDATE]"
  cots_geometry_unclear: "Flag [KIỂM TRA: COTS hay gia công?]; mark drawing status [TBD]; include in list for manual resolution"
  assembly_sequence_missing: "Infer drawing requirements from BOM structure; flag all [KIỂM TRA: cần xác nhận chuỗi lắp ráp]"
  unknown_error: "SAFE_STATE — output completed drawing list with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: markdown
UNCERTAINTY_FLAG: true — tag TBD specs as [CẦN XÁC NHẬN trước dấu T]

--- DOCUMENT STRUCTURE ---

§1: T/I/A/B Production Stage System
  - Definitions: T=thiết kế, I=đơn chiếc, A=loạt 0, B=hàng loạt
  - Requirements per stage (which documents needed)
  - Current product position + roadmap

§2: Title Block & Drawing Numbering
  - TCVN 3821 title block layout
  - T/K/D approval chain
  - Drawing number format: {{code}}-XXXX-DWG-YYY-RevZ

§3: Master Drawing List
  - Table: | STT | Drawing # | Part/Assy | Type | Priority Batch | Stage Required | Status |
  - Supply chain risk annotation table (⚠ SINGLE-SOURCE, LONG-LEAD, EXPORT-REVIEW)

§4: Detail Drawing Specs — CNC Parts
  - Per-part: material, tolerances, surface finish, GD&T callouts needed

§5: Detail Drawing Specs — Injection Mold Parts
  - Per-part: material, draft angles, gate locations, wall thickness

§6: Electrical/PCB Drawings
  - Schematic, PCB layout, wiring diagram specs

§7: Optical Drawings (if applicable)
  - Optical component specs, TBD resolution notes

§8: T/I/A/B Cumulative Checklists
  - 4 checklists (one per stage, each cumulative)
  - Summary matrix: document types × stages

§9: Standards Reference
  - TCVN + MIL-STD/IPC standards for drawings

Appendix: Drawing Priority Batches mapped to T/I/A/B stages
```

---

### P65 — Hướng dẫn Sử dụng — User Manual (`/hdsd`)
**Artifact:** B4 | **Use when:** Phase 4 near-complete — need bilingual operator manual for military end-users
**Why it works:** Vietnamese military operators need clear, low-reading-level manuals with safety warnings in Vietnamese. For AI products, the "does NOT" table and confidence tier system are critical — operators must understand what the AI can and cannot do BEFORE using it in the field.

```
TASK: Generate Hướng dẫn Sử dụng (User Manual) for {{product_name}}
  Create bilingual operator manual for military end-users.
  Reading level: basic infantry soldier (not specialist).
  Return: complete manual (Phần 1-11 + Phụ lục) ready for field distribution.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  inputs:
    - B1 YCKT: {{reference — requirements + safety-critical items}}
    - FMEA: {{reference — failure modes for troubleshooting}}
    - DfX Analysis: {{reference — maintenance levels}}
    - Assembly Sequence: {{reference — for field strip procedures}}
  end_user: {{Infantry soldier / Specialist operator / Technician}}
  ai_product: {{true/false — if true, include AI behavior sections}}

CONSTRAINTS:
  hard_limits:
    - All safety warnings: Vietnamese + English, with ⚠ markers
    - "Does NOT" table in §1 — explicitly state what product CANNOT do
    - If AI product: confidence tier system (GREEN/YELLOW/RED) fully explained
    - Troubleshooting: every OLED/LED fault message → cause + action
    - L1 maintenance only — do NOT include L2/L3 procedures (those go in B5)
  reject_conditions:
    - YCKT not available — safety requirements unknown
    - FMEA not available — troubleshooting section cannot be written
  prohibited_actions:
    - Do NOT describe AI as "reliable" or "accurate" — use measured metrics only
    - Do NOT include L2/L3 repair procedures — refer to B5
    - Do NOT include classified information (tactical employment doctrine)
    - Do NOT use technical jargon without Vietnamese explanation

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete full manual before review
  on_completion: true — "Safety warnings + AI behavior descriptions require engineer review"
  on_safety_flag: "IMMEDIATE" — any safety warning that could be misinterpreted; halt; present for immediate review

SAFETY_OVERRIDE: "If product has AI fire control: Phần 2 MUST include 'AI KHÔNG quyết định khai hỏa' as first safety warning."

SUCCESS_CRITERIA:
  reading_level: "A basic infantry soldier can perform all operations from manual alone — no assumed prior knowledge"
  does_not_table: "≥3 explicit limitations stated in 'Does NOT' table in §1"
  safety_coverage: "All YCKT safety-critical items appear as user-facing warnings in Phần 2"
  ai_behavior: "If AI product: confidence tier system (GREEN/YELLOW/RED) fully explained with operator actions"

FALLBACK_PROTOCOL:
  yckt_missing: "Halt; request YCKT before proceeding — safety requirements unknown without it"
  fmea_missing: "Generate structure only; mark all troubleshooting entries [FMEA REQUIRED]; flag for completion"
  ai_behavior_unclear: "Mark AI section [CẦN XÁC NHẬN TỪ KỸ SƯ AI]; do not fabricate AI behavior descriptions"
  unknown_error: "SAFE_STATE — output completed sections with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: markdown — bilingual (Vietnamese primary / English technical terms)

--- DOCUMENT STRUCTURE ---

Phần 1: Mô tả Sản phẩm (Product Description)
  - What it does (1-2 sentences, plain language)
  - "Does NOT" table (≥3 explicit limitations)
  - Package contents list

Phần 2: Cảnh báo An toàn (Safety Warnings) ⚠
  - All safety-critical requirements from YCKT as user-facing warnings
  - AI-specific: fire decision responsibility, AI limits, confidence system
  - Li-ion battery safety
  - Environmental limits

Phần 3: Nội dung Kiện hàng (Package Contents)
  - Itemized list with quantities

Phần 4: Hướng dẫn Nhanh (Quick-Start Guide)
  - 5-step visual guide: mount → power on → wait → aim → fire

Phần 5: Vận hành Chi tiết (Detailed Operation)
  - Pre-mission checklist
  - Operating states (state machine for user)
  - AI confidence tiers (if applicable): GREEN/YELLOW/RED meaning + actions
  - Classification types (if applicable)
  - Connectivity (BLE, USB-C)

Phần 6: Chỉ thị Trạng thái (Status Indicators)
  - LED states table (color + pattern → meaning)
  - OLED fault messages table (code → cause → action)

Phần 7: Xử lý Sự cố (Troubleshooting)
  - Symptom → possible cause → action table
  - L2 escalation criteria (when to call technician)

Phần 8: Bảo dưỡng (L1 Maintenance)
  - L1 tasks only (operator level): battery swap, lens cleaning, visual inspection
  - Bore-sight check procedure (if applicable)
  - Schedule: pre-mission, post-mission, weekly, monthly

Phần 9: Bảo quản & Vận chuyển (Storage & Transport)

Phần 10: Thông số Kỹ thuật (Technical Specifications)
  - Summary tables from YCKT (key numbers only, not full spec)

Phần 11: Thanh lý & Tiêu hủy Bảo mật (Disposal & Security Destruction)

Phụ lục A: Bảng Viết tắt (Abbreviations)
Phụ lục B: Thông tin Hỗ trợ (Support Contacts)
```

---

### P66 — Hướng dẫn Bảo trì — Maintenance Manual (`/hdbt`)
**Artifact:** B5 | **Use when:** Phase 4 complete — need maintenance manual for L2 field technicians and L3 depot engineers
**Why it works:** Separating B5 from B4 ensures operators don't attempt repairs beyond their level. The 3-tier maintenance system (L1/L2/L3) with explicit repair limits and condemn criteria prevents field damage from unqualified repairs. Dual-signature for safety-critical L3 repairs creates an audit trail.

```
TASK: Generate Hướng dẫn Bảo trì (Maintenance Manual) for {{product_name}}
  Create bilingual maintenance manual for L2 (field technicians) and L3 (depot engineers).
  L1 (operator) procedures are in B4 — reference only, do not duplicate.
  Return: complete manual (Phần 1-10 + Phụ lục) with FMEA cross-references.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  inputs:
    - BOM: {{reference — parts list with sub-assemblies}}
    - FMEA: {{reference — failure modes drive corrective procedures}}
    - DfX Analysis: {{reference — DfMaint scores, maintenance levels}}
    - B4 User Manual: {{reference — L1 operator procedures for cross-ref}}
  maintenance_levels:
    L1: Operator (xạ thủ) — battery swap, cleaning only
    L2: Unit technician (KTV đại đội) — sub-assembly swap, bore-sight, diagnostics
    L3: Depot engineer (KTV kho) — board-level repair, optical alignment, firmware

CONSTRAINTS:
  hard_limits:
    - Every corrective procedure cross-referenced to FMEA failure mode
    - MTTR estimate for every L2 and L3 procedure
    - Dual-signature (KTV + KCS/giám sát) for safety-critical L3 repairs
    - Spare parts lists with costs per maintenance level (L1/L2/L3 kits)
    - Supply chain risk markers (⚠ SINGLE-SOURCE, EXPORT-REVIEW, LONG-LEAD)
    - Environment requirements for calibration procedures (temperature, surface, lighting)
  reject_conditions:
    - FMEA not available — corrective procedures cannot be written
    - BOM not available — spare parts list cannot be generated
  prohibited_actions:
    - Do NOT duplicate L1 procedures from B4 — reference only
    - Do NOT include procedures that exceed L3 capability (return to manufacturer)
    - Do NOT omit condemn criteria for wear items

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete full manual before review
  on_completion: true — "Calibration procedures + safety-critical repairs require engineer validation"
  on_safety_flag: "IMMEDIATE" — any procedure involving optical alignment or safety-critical sub-assembly (FMEA S≥8); halt; present immediately

SAFETY_OVERRIDE: "Safety-critical repairs (FMEA S≥8): MUST define dual-signature requirement. Single-technician sign-off NOT acceptable."

SUCCESS_CRITERIA:
  fmea_coverage: "Every FMEA failure mode has a corrective procedure (CM-XX) or explicit 'return to manufacturer' directive"
  mttr_assigned: "MTTR estimate present for every L2 and L3 corrective procedure"
  dual_signature: "All safety-critical L3 repairs (FMEA S≥8) have dual-signature requirement"
  spare_parts_complete: "L1/L2/L3 spare parts kits defined with costs and supply chain risk markers"

FALLBACK_PROTOCOL:
  fmea_missing: "Halt; request FMEA before proceeding — corrective procedures cannot be written without failure mode data"
  bom_missing: "Generate spare parts list structure only; mark all items [BOM REQUIRED]; flag for completion"
  mttr_unknown: "Mark estimates [ƯỚC TÍNH — cần dữ liệu thực tế]; use 30/60/120 min as L2/L3 placeholders; note assumption"
  unknown_error: "SAFE_STATE — output completed sections with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: markdown — bilingual
UNCERTAINTY_FLAG: true — MTTR estimates tagged [ƯỚC TÍNH] until field data available

--- DOCUMENT STRUCTURE ---

Phần 1: Tổng quan Bảo trì (Maintenance Overview)
  - Maintenance philosophy (L1/L2/L3 tiers)
  - MTTR estimates per level
  - Skill requirements per level

Phần 2: Ma trận Bảo trì theo Cụm (Sub-Assembly Maintenance Matrix)
  - Table: Sub-assembly × L1/L2/L3 → permitted actions

Phần 3: Lịch Bảo dưỡng Định kỳ (Preventive Maintenance Schedule)
  - Round-count based (500/1000/2500/5000)
  - Calendar based (6/12/24 months)
  - Event-based (post-drop, post-immersion, seasonal)

Phần 4: Quy trình Sửa chữa (Corrective Maintenance Procedures)
  - CM-01 through CM-xx: step-by-step per FMEA failure mode
  - Each: FMEA cross-ref, tools required, MTTR, safety notes

Phần 5: Chẩn đoán Lỗi (Diagnostic Procedures)
  - USB-C/BLE error codes table → FMEA mapping → action
  - Visual inspection checklist

Phần 6: Hiệu chuẩn (Calibration Procedures)
  - L2 bore-sight check + L3 re-alignment (if applicable)
  - Environment requirements (temperature, surface, lighting, distance)

Phần 7: Giới hạn Sửa chữa (Repair Limits)
  - L1/L2/L3 permission matrix
  - Condemn criteria per wear item

Phần 8: Phụ tùng (Spare Parts)
  - L1 kit (operator carry), L2 kit (unit stock), L3 kit (depot stock)
  - Costs per kit, FMEA cross-ref, supply chain risk markers

Phần 9: Bộ Dụng cụ (Tool Kits)
  - L2 tool kit + L3 tool kit with costs

Phần 10: Biểu mẫu Ghi chép Bảo trì (Maintenance Record Forms)
  - PM record form + CM record form
  - Dual-signature block for safety-critical L3 repairs

Phụ lục A: Bảng Mô-men Siết (Torque Reference)
Phụ lục B: Bảng Viết tắt (Abbreviations)
Phụ lục C: Sơ đồ Cụm với Bậc Bảo trì (Sub-Assembly Tree with Maintenance Levels)
```

---

### P67 — Định mức KTKT — Technical-Economic Norms (`/dmktkt`)
**Artifact:** B6 | **Use when:** Phase 4 complete, B3 process plan finalized — need per-unit resource norms for military procurement pricing
**Why it works:** Vietnamese military procurement uses ĐMKTKT (Định mức Kinh tế Kỹ thuật) as the basis for unit pricing in contracts. Every material gram, labor minute, and machine-hour must be accounted for. This document is auditable — military auditors cross-check norms against actual production data.

```
TASK: Generate Định mức Kinh tế Kỹ thuật (ĐMKTKT) for {{product_name}}
  Calculate per-unit resource consumption norms: materials, labor, equipment, energy, waste.
  Return: complete ĐMKTKT document (Phần I-IX + Phụ lục) reconciled with P35 cost analysis.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  inputs:
    - B3 Quy trình CNSX: {{reference — operations, cycle times, material routing}}
    - P35 Cost Analysis: {{reference — unit cost breakdown}}
    - BOM: {{reference — part list with quantities and unit costs}}
    - Assembly Sequence: {{reference — operation groups}}
  volume_baseline: {{units/year — for scaling factors}}
  currency: {{VND / USD — specify which, include exchange rate if USD}}

CONSTRAINTS:
  hard_limits:
    - Every BOM material item → quantity per unit + scrap/loss allowance (%)
    - Labor classified by Vietnamese skill grade (bậc thợ 3/5-7/KS)
    - Equipment usage in machine-hours + depreciation rate
    - Energy in kWh/unit (electrical + compressed air + other)
    - Waste/scrap: FPY per operation group, rework cost, disposal cost
    - Summary cost MUST reconcile with P35 within ±5%
    - Volume scaling factors: at least 3 production volumes (e.g., 100/500/2000 units/year)
  reject_conditions:
    - B3 not available — process operations undefined
    - BOM not available — material norms cannot be calculated
  prohibited_actions:
    - Do NOT use actual supplier prices if marked confidential — use [GIÁ THAM KHẢO]
    - Do NOT assume exchange rate — state rate and date explicitly
    - Do NOT omit overhead allocation methodology

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete full document before review
  on_completion: true — "Scrap rates, labor rates, exchange rate, overhead require human validation"
  on_cost_delta: true — "If ĐMKTKT total differs from P35 by >5% → flag [RECONCILIATION NEEDED] immediately"
  on_safety_flag: "IMMEDIATE" — if actual costs significantly exceed contract target; flag as commercial risk; do not suppress

SAFETY_OVERRIDE: "If actual costs significantly exceed contract target — flag as commercial risk. Do not suppress."

SUCCESS_CRITERIA:
  bom_coverage: "Every BOM material item has quantity/unit + scrap allowance (%) in material norms table"
  labor_graded: "All labor norms classified by Vietnamese skill grade (bậc thợ 3/5-7/KS)"
  reconciliation: "ĐMKTKT total cost reconciles with P35 within ±5% — delta documented"
  volume_scaling: "At least 3 production volume scenarios with scaling factors (e.g., 100/500/2000 units/year)"

FALLBACK_PROTOCOL:
  b3_missing: "Halt; request B3 process plan before proceeding — labor and equipment norms require process data"
  scrap_rate_unknown: "Use industry benchmark rates; mark all [ƯỚC TÍNH]; flag for correction after first production run"
  cost_delta_exceeds_5pct: "Flag [RECONCILIATION FAILED]; present line-by-line comparison vs P35; identify root cause before proceeding"
  unknown_error: "SAFE_STATE — output completed sections with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: markdown — bilingual
UNCERTAINTY_FLAG: true — scrap rates tagged [ƯỚC TÍNH — cần dữ liệu sản xuất thực tế]

--- DOCUMENT STRUCTURE ---

Phần I: Thông tin Chung (General Information)
  - Product name, code, BOM version, B3 version, date, author
  - Volume baseline and scaling factor methodology

Phần II: Định mức Vật tư (Material Norms)
  - Table: | STT | Mã VT | Tên vật tư | ĐVT | SL/SP | Hao hụt (%) | SL thực | Đơn giá | Thành tiền |
  - Grouped by: mechanical, electronic, optical, packaging, consumables
  - Sub-totals per group + grand total

Phần III: Định mức Lao động (Labor Norms)
  - Table: | STT | Nhóm CV | Bậc thợ | Thời gian (phút) | Đơn giá | Thành tiền |
  - Operation groups from B3 (e.g., CNC, SMT, assembly, QC, packaging)
  - Skill grade: bậc 3 (assembly), bậc 5 (CNC), bậc 7 (optical), KS (engineer)

Phần IV: Định mức Thiết bị (Equipment Usage Norms)
  - Table: | STT | Thiết bị | Giờ máy/SP | Khấu hao | Chi phí/SP |
  - Machine-hours per unit + depreciation allocation

Phần V: Định mức Năng lượng (Energy Norms)
  - Electrical (kWh/unit), compressed air, other utilities
  - Calculated from B3 cycle times × equipment power ratings

Phần VI: Định mức Phế phẩm (Waste/Scrap Norms)
  - FPY per operation group
  - Rework cost allocation
  - Scrap disposal cost
  - Overall yield: input units → output good units

Phần VII: Tổng hợp Giá thành (Summary Cost Norms)
  - Giá thành sản xuất = Materials + Labor + Equipment + Energy + Waste
  - Overhead allocation (% of direct cost)
  - Giá thành toàn bộ = Production cost + Overhead
  - Reconciliation table vs P35 (line-by-line, ±5% tolerance)

Phần VIII: Điều kiện Áp dụng (Applicability Conditions)
  - Volume scaling factors (3+ volumes)
  - Exchange rate assumption + sensitivity
  - Effective date + review cycle
  - Conditions that invalidate norms (design change, supplier change)

Phần IX: Ký duyệt (Approval Signatures)
  - Người lập (Prepared by): engineer
  - Kiểm tra (Checked by): cost accountant
  - Phê duyệt (Approved by): technical director

Phụ lục A: Bảng Quy đổi (Conversion Tables) — units, exchange rates, inflation index
```

---

### P59 — Field Trial Protocol — Kế hoạch Thử nghiệm Thực địa (`/fieldtrial`)
**Artifact:** C2 | **Use when:** Verification Plan (P34) approved — planning state-level field evaluation
**Why it works:** Vietnamese military acceptance requires field trials (Thử nghiệm Thực địa) witnessed by Hội đồng KH&CN and military end-users. This is NOT the same as factory testing — it happens at operational facilities under realistic conditions. Without a formal protocol, trials are ad hoc and results contestable.

```
TASK: Generate Field Trial Protocol for {{product_name}}
  Design the Thử nghiệm Thực địa plan for state-level military acceptance.
  Map each performance requirement to a field test scenario with pass/fail criteria.
  Include logistics: location, personnel, equipment, safety plan, schedule.
  Return: Complete trial protocol ready for Hội đồng KH&CN approval.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  phase: 6 (Testing & Evaluation)
  inputs:
    - Verification Plan (P34): {{reference}}
    - YCKT document (P58): {{reference — or note if not yet created}}
    - Test Requirements (Phase 3): {{reference}}
    - FMEA (Phase 3): {{reference}}
  trial_location: {{range name / facility — or TBD}}
  trial_duration: {{estimated days}}
  witnesses:
    - Hội đồng KH&CN representative
    - Military end-user unit representative
    - Developer technical team
    - Independent test officer (if required)

CONSTRAINTS:
  hard_limits:
    - Every [SAFETY-CRITICAL] requirement verified by T or D in field conditions
    - Minimum sample size: 3 units (unless destructive test — then 5)
    - Environmental conditions recorded for every test (temperature, humidity, wind)
    - All ammunition/ordnance handling per range SOP (Standard Operating Procedure)
    - Test sequence: safety checks FIRST → functional → performance → environmental
  reject_conditions:
    - Trial location not confirmed — protocol is location-dependent
    - Safety plan not included — field trials involve live equipment
    - No acceptance criteria defined — results must be unambiguous pass/fail
  prohibited_actions:
    - Never schedule destructive tests before non-destructive (preserve samples)
    - Never combine safety-critical and non-critical tests in same session
    - Never allow AI system to operate autonomously during trial (HITL mandatory)
    - Never proceed with trial if weather conditions outside specified envelope

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  on_completion: true — "Protocol requires Hội đồng KH&CN pre-approval before any trial execution"
  on_safety_flag: "IMMEDIATE" — any test involving live fire, ordnance proximity, or autonomous AI operation
  per_test_day: true — "Daily brief/debrief with all witnesses — sign off test log"
  trigger_note: "Field trial results become the legal basis for acceptance. Protocol rigor = acceptance defensibility."

SAFETY_OVERRIDE: "Any safety incident during trial → STOP all testing → incident report → resume only after safety review board approval. Pre-define STOP criteria in protocol."

SUCCESS_CRITERIA:
  coverage: "100% of [SAFETY-CRITICAL] and [D] requirements have field test scenarios"
  clarity: "Every test has unambiguous pass/fail criteria — no subjective judgment"
  reproducibility: "Any qualified test officer can execute protocol from document alone"
  logistics: "All required equipment, personnel, and facilities identified"

FALLBACK_PROTOCOL:
  weather_delay: "Postpone weather-sensitive tests — reschedule within trial window"
  equipment_failure: "Switch to backup unit — document serial numbers"
  test_failure: "Record failure, continue remaining tests, failure analysis within 48h"
  safety_incident: "STOP → isolate → report → safety board review before resume"
  unknown_error: "STOP all testing → preserve all data/evidence → convene review"

OUTPUT_FORMAT: markdown
LOG_LEVEL: detailed — full audit trail required for state acceptance

--- FIELD TRIAL PROTOCOL STRUCTURE ---

PHẦN A — TỔNG QUAN (Overview)
  A1. Mục đích thử nghiệm (Trial Purpose)
  A2. Sản phẩm thử nghiệm (Product Under Test) — serial numbers
  A3. Tiêu chuẩn áp dụng (Applicable Standards)
  A4. Thành phần Hội đồng (Council Composition)
  A5. Địa điểm và thời gian (Location and Schedule)

PHẦN B — KẾ HOẠCH AN TOÀN (Safety Plan)
  B1. Phân tích rủi ro thử nghiệm (Trial Risk Assessment)
  B2. Biện pháp an toàn (Safety Measures) — per test
  B3. Tiêu chí dừng thử nghiệm (STOP Criteria)
  B4. Quy trình xử lý sự cố (Incident Procedure)
  B5. Nhân viên y tế / cứu hộ (Medical/Emergency Personnel)

PHẦN C — MA TRẬN THỬ NGHIỆM (Test Matrix)
  Table: | STT | Mã thử nghiệm | Yêu cầu kiểm tra | Phương pháp | Tiêu chí đạt/không đạt | Thiết bị cần thiết | Thời gian | Ghi chú |
  STT = sequential number
  Mã thử nghiệm = test ID (T01, T02, etc. from P34)
  Tiêu chí đạt/không đạt = pass/fail criteria (numeric where possible)

PHẦN D — LỊCH TRÌNH CHI TIẾT (Detailed Schedule)
  Day-by-day test sequence with:
  - Morning brief (0700)
  - Test blocks (0800-1200, 1300-1700)
  - Evening debrief + data review (1730-1830)
  - Weather contingency days

PHẦN E — TRANG THIẾT BỊ (Equipment & Instrumentation)
  E1. Sản phẩm thử nghiệm (Test articles) — qty, serial numbers
  E2. Thiết bị đo lường (Measurement equipment) — calibration status
  E3. Mục tiêu / mô hình (Targets / models) — for performance tests
  E4. Thiết bị ghi hình (Recording equipment) — cameras, data loggers

PHẦN F — BIỂU MẪU GHI CHÉP (Data Recording Forms)
  F1. Nhật ký thử nghiệm hàng ngày (Daily Test Log)
  F2. Phiếu kết quả từng thử nghiệm (Individual Test Result Sheet)
  F3. Biên bản sự cố (Incident Report Form)
  F4. Biên bản tổng kết (Summary Report Template)

PHẦN G — KÝ DUYỆT (Approvals)
  Trưởng đoàn thử nghiệm (Trial Director): ___________ Ngày: _____
  Đại diện Hội đồng KH&CN: __________________________ Ngày: _____
  Đại diện đơn vị sử dụng (End-user Rep): ____________ Ngày: _____
  Chỉ huy trường bắn (Range Commander): ______________ Ngày: _____
```

---

### P60 — Acceptance Dossier — Hồ sơ Nghiệm thu (`/nghiemthu`)
**Artifact:** C7 | **Use when:** Field trials complete, all test results compiled — preparing for state acceptance
**Why it works:** Nghiệm thu (formal acceptance) requires a complete dossier package submitted to Hội đồng KH&CN for review. Missing documents → rejection → restart the review cycle. This checklist ensures nothing is missed.

```
TASK: Compile Acceptance Dossier (Hồ sơ Nghiệm thu) for {{product_name}}
  Assemble all required documents for Vietnamese military state-level acceptance.
  Check completeness against TCCNQP requirements.
  Flag missing/incomplete items with action required.
  Return: Dossier checklist + document status matrix + gap analysis.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  phase: 6-7 (Formal Acceptance)
  inputs:
    - All Phase 0-4 artifacts for this product
    - YCKT (P58): {{reference or status}}
    - Field Trial results (P59 execution): {{reference or status}}
    - AI Safety Assessment (P61): {{reference or status — if product contains AI}}
  acceptance_level: {{factory acceptance / state acceptance / both}}
  submission_to: {{Hội đồng KH&CN / Cục TC-ĐL-CL / specific body}}

CONSTRAINTS:
  hard_limits:
    - ALL items in dossier checklist must have status (COMPLETE / PARTIAL / MISSING)
    - Every [SAFETY-CRITICAL] requirement must have test evidence attached
    - Field trial results signed by all witnesses before inclusion
    - No draft documents in final dossier — all must be versioned and approved
  reject_conditions:
    - Field trials not yet executed — cannot compile acceptance dossier
    - YCKT not signed by military customer — dossier will be rejected
    - Any [SAFETY-CRITICAL] requirement without T or D evidence
  prohibited_actions:
    - Never submit partial dossier without flagging gaps
    - Never include unsigned or draft documents as final
    - Never fabricate test results or backfill data
    - Never omit AI subsystem documentation for AI-enabled products

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  on_completion: true — "Dossier package requires final engineer review + management sign-off before submission"
  on_gap_found: true — "Any MISSING item in safety-critical category → alert immediately"
  trigger_note: "Dossier submission starts the formal clock. Incomplete submission wastes Hội đồng time and damages credibility."

SAFETY_OVERRIDE: "If any safety-critical test FAILED or was not conducted → DO NOT submit dossier. Flag for engineering review first."

SUCCESS_CRITERIA:
  completeness: "100% of mandatory documents present and COMPLETE"
  traceability: "Every requirement → YCKT line item → test evidence → result"
  format: "All documents in correct Vietnamese format with proper signatures"
  ai_coverage: "AI Safety Assessment included if product contains AI subsystem"

FALLBACK_PROTOCOL:
  missing_document: "Flag with deadline and responsible person — do not submit until resolved"
  failed_test: "Include failure analysis + corrective action + retest results"
  partial_signatures: "Return to signing parties — do not submit with missing signatures"
  unknown_error: "Save checklist state, flag all incomplete items, alert project manager"

OUTPUT_FORMAT: markdown
LOG_LEVEL: detailed

--- HỒ SƠ NGHIỆM THU STRUCTURE ---

SECTION 1 — CHECKLIST (Bảng kiểm tra hồ sơ)

  Table: | STT | Tài liệu (Document) | Mã (ID) | Trạng thái | Ngày hoàn thành | Người ký | Ghi chú |

  MANDATORY DOCUMENTS:
  1.  Yêu cầu Kỹ thuật — YCKT (B1/P58)
  2.  Bản vẽ thiết kế (B2 — Design Drawings)
  3.  Bảng kê vật tư (Bill of Materials — P33)
  4.  Quy trình sản xuất (B3 — Manufacturing Process Plan)
  5.  Kế hoạch thử nghiệm (Test Plan — P34/C2)
  6.  Kết quả thử nghiệm nhà máy (C1 — Factory Test Results)
  7.  Kết quả thử nghiệm thực địa (C3 — Field Trial Results)
  8.  Biên bản thử nghiệm (C4 — Test Minutes, signed by witnesses)
  9.  Phân tích chi phí (Cost Analysis — P35)
  10. Hướng dẫn sử dụng (B4 — User Manual)
  11. Hướng dẫn bảo trì (B5 — Maintenance Manual)
  12. Phân tích FMEA (Failure Mode Analysis — P26)
  13. Chứng nhận tiêu chuẩn (Standards Compliance Evidence — P51)

  CONDITIONAL DOCUMENTS (if applicable):
  14. Đánh giá an toàn AI (C16/P61 — AI Safety Assessment) — if product contains AI
  15. Báo cáo TN môi trường (C5 — Environmental Test Report) — if electronic product
  16. Chứng nhận IP (IP Rating Certificate) — if environmental sealing claimed
  17. Chứng nhận vật liệu (Material Certificates) — for safety-critical components
  18. Giấy phép xuất nhập khẩu (Import/Export Permits) — for controlled items

SECTION 2 — TRACEABILITY MATRIX (Ma trận truy xuất)
  Table: | Yêu cầu YCKT | Mã thử nghiệm | Kết quả | Đạt/Không đạt | Tài liệu chứng minh |
  Maps: YCKT requirement → test ID → result → pass/fail → evidence document

SECTION 3 — GAP ANALYSIS (Phân tích thiếu sót)
  Table: | STT | Tài liệu thiếu | Lý do | Hành động | Người chịu trách nhiệm | Thời hạn |

SECTION 4 — SUMMARY & RECOMMENDATION (Tổng kết và kiến nghị)
  - Overall dossier completeness: {{x}}/{{total}} documents
  - Safety-critical coverage: {{x}}/{{total}} requirements verified
  - Recommendation: SUBMIT / HOLD (with reason)

SECTION 5 — KÝ DUYỆT (Approval)
  Giám đốc kỹ thuật (Technical Director): _____________ Ngày: _____
  Giám đốc chất lượng (Quality Director): _____________ Ngày: _____
  Giám đốc công ty (Company Director):    _____________ Ngày: _____
```

---

### P61 — AI Subsystem Safety Assessment (`/aisafety`)
**Artifact:** C16 | **Use when:** Product contains AI/ML subsystem — required before Hội đồng KH&CN review
**Why it works:** Vietnam has no specific defense AI regulation (Luật AI 134/2025 excludes defense), but Hội đồng KH&CN will demand explanation of AI behavior, limits, and failure modes. This proactive assessment builds trust and preempts questions. Also satisfies IRONMESH Ethical Governance Framework principles P1-P5.

```
TASK: Generate AI Subsystem Safety Assessment for {{product_name}}
  Document the AI/ML subsystem: capabilities, limitations, failure modes, and human oversight.
  Written for military S&T Council audience — clear, non-hype, honest about limitations.
  Cross-reference IRONMESH Ethical Governance Framework.
  Return: Complete AI safety assessment ready for S&T Council review.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  phase: 5-6 (ANQP Preparation / Testing)
  inputs:
    - AI subsystem design (from Phase 2-3): {{reference}}
    - FMEA (AI-related failure modes): {{reference}}
    - Verification Plan (AI tests): {{reference}}
    - IRONMESH Ethical Governance Framework: {{reference}}
    - IRONMESH Audit Trail System: {{reference}}
  ai_type: {{classification / detection / tracking / recommendation / other}}
  autonomy_level: {{H0 fully manual / H1 advisory / H2 semi-auto / H3 supervised-auto}}
  consequence_domain: {{LETHAL / SAFETY-CRITICAL / MISSION-IMPACT / ADMIN}}

CONSTRAINTS:
  hard_limits:
    - Autonomy level must match IRONMESH governance framework (consequence ↑ → automation ↓)
    - LETHAL domain → H0 or H1 ONLY (human always makes final decision)
    - SAFETY-CRITICAL domain → automation ≤30%
    - All AI performance claims backed by test data or marked [CHƯA KIỂM CHỨNG]
    - False positive rate and false negative rate must both be documented
    - Failure mode for every AI function must be documented with safe-state action
  reject_conditions:
    - AI subsystem with LETHAL consequence at H2 or H3 → REJECT immediately
    - No FMEA data for AI failure modes → cannot assess safety
    - Performance claims without any test basis → cannot include
  prohibited_actions:
    - Never claim AI is "reliable" or "accurate" without specific metrics
    - Never omit known failure modes or edge cases
    - Never promise performance outside tested conditions
    - Never describe AI as "autonomous" for lethal applications
    - Never use marketing language — S&T Council will reject it

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  on_completion: true — "AI safety assessment requires engineer + ethics officer review"
  on_safety_flag: "IMMEDIATE" — any mismatch between claimed autonomy level and actual system behavior
  on_lethal_content: "IMMEDIATE" — any AI function that could influence lethal force decisions
  trigger_note: "This document defines the trust contract between AI system and military users. Errors here = operational risk."

SAFETY_OVERRIDE: "If assessment reveals AI subsystem operates at higher autonomy than governance framework allows → STOP → flag for redesign. Do not document non-compliant system as acceptable."

SUCCESS_CRITERIA:
  honesty: "All limitations clearly stated — no omissions"
  completeness: "Every AI function → capability + limitation + failure mode + safe state"
  governance_alignment: "100% alignment with IRONMESH Ethical Governance Framework"
  audience_fit: "Understandable by military officer without AI background"

FALLBACK_PROTOCOL:
  missing_test_data: "Mark [CHƯA KIỂM CHỨNG] — plan test in field trial protocol"
  governance_mismatch: "STOP — escalate to ethics officer — do not proceed"
  edge_case_unknown: "Document as KNOWN UNKNOWN with planned investigation"
  unknown_error: "Save partial assessment, flag all incomplete sections, alert engineer"

OUTPUT_FORMAT: markdown
EVIDENCE_REQUIRED: true
LOG_LEVEL: detailed

--- AI SAFETY ASSESSMENT STRUCTURE ---

PHẦN 1 — TỔNG QUAN HỆ THỐNG AI (AI System Overview)
  1.1 Chức năng AI (AI Function): What the AI does — 1-2 sentences, plain language
  1.2 Loại AI (AI Type): Classification, detection, tracking, recommendation, etc.
  1.3 Mức tự động (Autonomy Level): H0/H1/H2/H3 per IRONMESH framework
  1.4 Miền hậu quả (Consequence Domain): LETHAL / SAFETY-CRITICAL / MISSION-IMPACT / ADMIN
  1.5 Mô hình AI (AI Model): Architecture, training data summary, model size
  1.6 Phần cứng chạy AI (AI Hardware): Edge processor, power, thermal constraints

PHẦN 2 — NĂNG LỰC VÀ GIỚI HẠN (Capabilities and Limitations)
  Table: | Chức năng | Năng lực (đo được) | Giới hạn đã biết | Điều kiện hoạt động |
  For each AI function:
  - Measured capability (detection rate, accuracy, latency) with test conditions
  - Known limitations (range limits, lighting, weather, target types)
  - Operating envelope (temperature, vibration, etc.)

PHẦN 3 — CHẾ ĐỘ LỖI VÀ TRẠNG THÁI AN TOÀN (Failure Modes and Safe States)
  Table: | Mã lỗi | Mô tả lỗi | Nguyên nhân | Tần suất ước tính | Trạng thái an toàn | Hành động người dùng |
  From FMEA — focused on AI-specific failure modes:
  - Misclassification (false positive / false negative)
  - Model degradation (drift, out-of-distribution)
  - Hardware failure (processor overtemp, memory)
  - Data pipeline failure (sensor input loss)
  For each: safe state = what system does automatically + what user must do

PHẦN 4 — GIÁM SÁT CON NGƯỜI (Human Oversight)
  4.1 Điểm kiểm soát HITL (HITL Control Points): Where human decides
  4.2 Giao diện người-máy (Human-Machine Interface): How operator sees AI output
  4.3 Cơ chế ghi đè (Override Mechanism): How operator overrides AI
  4.4 Đào tạo người dùng (User Training Requirements): What operator must know
  4.5 Quy trình khi AI sai (Procedure When AI is Wrong): Step-by-step

PHẦN 5 — ĐẠO ĐỨC VÀ QUẢN TRỊ (Ethics and Governance)
  5.1 Nguyên tắc đạo đức (Ethical Principles): Map to IRONMESH P1-P5
  5.2 Ranh giới đỏ (Red Lines): Map to IRONMESH RL-1 to RL-7
  5.3 Nhật ký kiểm toán (Audit Trail): How AI decisions are logged
  5.4 Quyền riêng tư dữ liệu (Data Privacy): Where data stored, who accesses
  5.5 Chủ quyền dữ liệu (Data Sovereignty): Compliance with Luật ANMN 2018

PHẦN 6 — KẾT QUẢ THỬ NGHIỆM (Test Results Summary)
  Table: | Mã thử nghiệm | Nội dung | Kết quả | Đạt/Không đạt | Ghi chú |
  Summary of AI-specific test results from factory and field trials

PHẦN 7 — RỦI RO TỒN ĐỌNG VÀ KHUYẾN NGHỊ (Residual Risks and Recommendations)
  7.1 Rủi ro chấp nhận được (Accepted Risks): With justification
  7.2 Rủi ro cần giám sát (Risks Requiring Monitoring): Post-deployment
  7.3 Khuyến nghị cải tiến (Improvement Recommendations): Future versions
  7.4 Chu kỳ đánh giá lại (Re-assessment Cycle): When to re-evaluate

PHẦN 8 — KÝ DUYỆT (Approval)
  Kỹ sư AI (AI Engineer): _________________________ Ngày: _____
  Cán bộ đạo đức (Ethics Officer): ________________ Ngày: _____
  Giám đốc kỹ thuật (Technical Director): _________ Ngày: _____
  Hội đồng KH&CN (S&T Council): __________________ Ngày: _____
```

---

## ANQP PROCESS NOTES

### Legal References
| Document | Relevance |
|----------|-----------|
| Luật 38/2024/QH15 (Luật CNQP) | Defense Industry Law — governs private company participation, quality requirements |
| Circular 25/2020/TT-BQP | Military standards framework (TCVN/QS, QCVN/BQP, TCQS) |
| Luật ANMN 2018 | Cybersecurity Law — data sovereignty, Art. 23 domestic storage |
| Luật AI 134/2025/QH15 | AI Law — explicitly EXCLUDES defense AI (Art. 2.3) |
| QCVN/BQP series | Mandatory military quality regulations |

### Key Bodies
| Body | Role in ANQP |
|------|-------------|
| TCCNQP (Tổng cục CNQP) | Central authority — product lifecycle, factory licensing, Phase 0 gate |
| Cục TC-ĐL-CL | Standards, Metrology & Quality Bureau — QMS certification (A2), test oversight (Phase 5) |
| Hội đồng KH&CN | Science & Technology Council — gate-keeping (Phase 6), acceptance authority |
| Viện KH&CN Quân sự | Military S&T Institute — testing facilities (Phase 5), independent evaluation |

### Private Company Requirements (Law 38/2024)
- ≥50 technical workers
- ISO 9001 or equivalent QMS
- Facility security clearance
- No foreign controlling interest for classified projects
- Annual production capability audit

### ANQP Timeline Estimates
| Phase | Typical Duration | Bottleneck |
|-------|-----------------|------------|
| Phase 0 (Pre-entry) | 3-6 months | Security clearance processing |
| Phase 1-4 (Engineering) | 6-18 months | Design complexity |
| Phase 5 (Testing) | 2-6 months | Trial scheduling, weather windows |
| Phase 6 (Acceptance) | 1-3 months | Hội đồng KH&CN availability |
| Phase 7 (Series "0") | 3-6 months | Supply chain, tooling |
| **Total** | **15-39 months** | — |

---

*Created: 2026-02-23 | Updated: 2026-02-23 | Artifacts: 26 (A1-A4, B1-B6, C1-C16) | DCTRS Templates: P58-P67 (9) | ANQP Pipeline v2.2*
