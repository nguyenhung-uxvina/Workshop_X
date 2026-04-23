---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — Platform & Innovation Flows
mode: RETROACTIVE
pipeline: helix-task-clarify v3.2 --icdm
block: BD
---

# BD ICDM: Platform & Innovation Flows — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE
**Source:** Function Structure 6-Flow v1.0 + Product Line Architecture v1.2 + FORGE ACH Opportunity Scan v1.0

---

## 1. INNOVATION FLOW (7th Flow — ICDM Extension)

> **ICDM adds a 7th flow** to the standard 6-flow function structure:
> Innovation flow captures how field data feeds back to improve the product over its lifecycle.

```
7th FLOW: INNOVATION (I)
───────────────────────────────────────────────────────────────

I-IN (Field Intelligence):
  ├── Trainee performance data (every session → aim traces, scores, error patterns)
  ├── Instructor feedback (scenario gaps, UI friction, feature requests)
  ├── Weapon firing data (via HYBRID-BRIDGE: BB-01 LOMAH live fire ↔ sim correlation)
  ├── Threat intelligence (new UAV/USV types, tactics, speeds from OSINT/military intel)
  └── Competitor updates (Zen, L3Harris product changes via Competitive Intelligence)

I-PROCESS (Knowledge Transformation):
  ├── Data analysis: trainee population statistics → training curriculum optimization
  ├── Model improvement: ballistic model tuning from field correlation data
  ├── AI behavior update: new UAV evasion patterns from Houthi/Ukraine OSINT
  ├── Scenario expansion: instructor-requested scenarios → scenario library update
  └── Performance benchmarking: sim accuracy vs live-fire data (HYBRID-BRIDGE)

I-OUT (Product Evolution):
  ├── SW update package (annual per L-02): new scenarios, target profiles, scoring
  ├── Model library addition (forge-library): validated ballistic/AI models
  ├── New variant generation: LITE → FIXED → FULL → CORTEX sequence
  ├── IRONMESH extraction: reusable modules promoted to platform level
  └── MAINT-KIT delivery: SW updates + calibration + spare parts → $300-600/yr
```

### Innovation Flow × ACH Layers

| ACH Layer | I-IN Source | I-PROCESS | I-OUT Update | Compound Effect |
|-----------|-----------|-----------|-------------|----------------|
| L1 Target AI | Threat OSINT, exercise logs | New behavior profiles | SW update | More realistic threats |
| L2 Ballistic | BB-01 LOMAH field data | Model regression analysis | Model tuning | Higher accuracy over time |
| L6 Scoring | Trainee statistics | Error pattern mining | Scoring algorithm update | Better weakness diagnosis |
| L7 Adaptive (future) | All trainee data | ML training on population | Adaptive difficulty model | Personalized training |

**Key insight:** Every training session generates labeled data (aim trace + score + hit/miss). This data flywheel compounds product value — each deployed unit makes the product better for all units. This is the ACH compound mechanism.

---

## 2. PLATFORM COMMONALITY CHECK

> **ICDM:** For each sub-function, flag if shared with other portfolio variants or products.

### 2.1 Cross-Variant Commonality (within VN-CUAV-SIM-001 product line)

| Sub-Function | LITE | FIXED | FULL | CORTEX | Commonality |
|-------------|:----:|:-----:|:----:|:------:|:-----------:|
| F1.1 Traverse sensing | ✅ | ✅ | ✅ | ✅ | **100%** — same encoder + ESP32 |
| F1.2 Elevation sensing | ✅ | ✅ | ✅ | ✅ | **100%** |
| F1.3 Trigger detection | ✅ | ✅ | ✅ | ✅ | **100%** |
| F1.4 Recoil actuation | ✅ | ✅ | ✅ | ✅ | **100%** — same solenoid + driver |
| F1.5 Weapon ID (NFC) | ✅ | ✅ | ✅ | ✅ | **100%** |
| F1.6 Resistance control | ✅ | ✅ | ✅ | ✅ | **100%** |
| F2.1 Ballistic engine | ✅ | ✅ | ✅ | ✅ | **100%** — V-SMASH 6DOF shared |
| F2.2 Target AI | ✅ | ✅ | ✅ | ✅ | **100%** — shared behavior library |
| F2.3 Ocean simulation | ✅ | ✅* | ✅ | ✅ | **90%** — FIXED no motion but renders waves |
| F2.4 Weather/lighting | ✅ | ✅ | ✅ | ✅ | **100%** |
| F3.1 Render pipeline | ✅ | ✅ | ✅ | ✅ | **100%** — same Unity engine |
| F3.2 Display output | 3×proj | 3×proj | 6×proj | 3×proj×N | **75%** — FULL doubles, CORTEX multiplies |
| F3.3 Audio output | ✅ | ✅ | ✅ | ✅ | **100%** |
| F4.1 Motion generation | 2-DOF | ❌ | Shared deck | Per-node | **50%** — FIXED none, FULL different |
| F5.1 Scoring engine | ✅ | ✅ | ✅ | ✅ | **100%** |
| F5.2 AAR replay | ✅ | ✅ | ✅ | ✅ | **100%** |
| F5.3 Report generation | ✅ | ✅ | ✅ | ✅+ | **90%** — CORTEX adds joint report |
| F6.1 Instructor station | 1 | 1 | 1 | 1+ | **90%** — CORTEX adds C2 hub |
| F6.2 Scenario management | ✅ | ✅ | ✅ | ✅ | **100%** |
| F7.1 Module swap (MWI) | ✅ | ✅ | ✅ | ✅ | **100%** |

**Overall platform commonality: ~90%** — LITE is the reference platform. FIXED removes motion. FULL doubles display. CORTEX adds networking. Core SW is 100% shared.

### 2.2 Cross-Product Commonality (WX Portfolio)

| Sub-Function | CUAV-SIM | VN-XUONG V9-TRAIN | Naval Sim (Vega) | BB-01 LOMAH |
|-------------|:--------:|:-----------------:|:---------------:|:-----------:|
| Ballistic engine (V-SMASH) | ✅ | Partial (subsea) | Legacy (own) | — |
| Scoring engine | ✅ | — | Partial | ✅ (hit detect) |
| Unity framework (CTF) | ✅ | ✅ | ❌ (Vega Prime) | — |
| Scenario management | ✅ | Partial | Legacy | — |
| Instructor station pattern | ✅ | ✅ | ✅ | — |
| AAR replay | ✅ | — | Partial | — |
| Weapon sensing (encoder+trigger) | ✅ | — | ❌ (different) | — |
| Live-fire correlation data | HYBRID-BRIDGE ← | — | — | → HYBRID-BRIDGE |

**IRONMESH extraction candidates:**
1. **Unity CTF (Common Training Framework)** — shared with VN-XUONG V9-TRAIN. Extraction trigger: when V9-TRAIN reaches Phase 3.
2. **V-SMASH ballistic engine** — reusable across any weapon simulation. Extraction trigger: when validated against TM tables.
3. **Instructor station pattern** — UI/UX pattern shared across all simulator products. Extraction trigger: after CUAV-SIM LITE ships.

### 2.3 Full Portfolio Platform (9 products — from Portfolio Planning v1.1)

> BD §2.1-2.2 covered 4 L2 variants. Portfolio v1.1 expands to 9 products across 4 layers.

| Product | Layer | HW Shared | SW Shared | NRE Savings | Status |
|---------|:-----:|:---------:|:---------:|:-----------:|--------|
| LITE (lead) | L2 | reference | reference | — | Phase 2 active |
| FIXED (+Army) | L2 | 70% | 85% | 55% | Concept |
| FULL | L2 | 50% | 80% | 45% | Concept |
| CORTEX | L2 | 30% | 70% | 35% | Concept |
| WEAPON-MOD | L1 | 100% (MWI) | 10% | 80% | New |
| MOBILE | L4 | 0% | 60% | 50% | New |
| EXPORT-LITE | L4 | 100% | 95% | 85% | New (after 5+ domestic) |
| AAR-SaaS | L4 | 0% | 70% (AAR core) | 55% | New |
| HYBRID-BRIDGE | L4 | 10% | 30% (API) | 40% | New (depends BB-01) |

**Layer 0 Core Platform (shared by all 9):** Unity 6 LTS + V-SMASH 6DOF + Scoring engine + AAR engine + MWI protocol.

**Platform ROI:** LITE NRE $80K → platform savings $235K across 8 products = **294% ROI**.

**5-year revenue:** $4.075M (9 products) vs $3.03M (4 variants only) = **+34%** from portfolio expansion.

---

## 3. VARIANT DIFFERENTIATION MATRIX

> What makes each variant/product DIFFERENT (not what's shared).

### 3.1 L2 Integrated Systems (4 variants)

| Differentiator | LITE | FIXED | FULL | CORTEX |
|---------------|------|-------|------|--------|
| **Installation** | Shipboard room | Shore building | Ship shared deck | Multi-site WAN |
| **Stations** | 1 | 2 (side-by-side) | 2-3 (shared FOV) | N (distributed) |
| **Motion** | 2-DOF seat | None | Shared deck platform | Per-node 2-DOF |
| **FOV** | 180° (3 proj) | 240° (4 proj) | 360° (6 proj) | 180°×N nodes |
| **Unique SW** | — | Army scenario pack | Crew coordination, sector handoff | C2 Hub, WAN sync, joint scoring |
| **Price** | $50-70K | $55-80K | $120-200K | $300K+ |
| **WTP focus** | Essential only | Essential + Army | Essential + crew | All + joint |

### 3.2 L1/L4 Ecosystem Products (5 new)

| Product | Unique Value | Differentiator vs LITE |
|---------|-------------|----------------------|
| WEAPON-MOD | Standalone weapon mockup module | HW only, no projection/motion |
| MOBILE | Tablet/VR individual trainer | No infra, gyro aim, $3-5K |
| EXPORT-LITE | LITE + English + generic scenarios | Localization only, HW identical |
| AAR-SaaS | Standalone analytics subscription | SW only, connects to ANY trainer |
| HYBRID-BRIDGE | BB-01 LOMAH ↔ sim data bridge | API + dashboard, unique WX moat |

---

## 4. INNOVATION READINESS LEVEL (IRL) — Pre-Assessment

| Dimension | Score (1-5) | Evidence |
|-----------|:----------:|---------|
| Technology maturity | **3.5** | Core tech proven (projection, encoders, Unity). Novel combination untested (MWI NFC, recoil ≥25N, C-UAV AI). SS1 PoC scheduled 2026-05-07. |
| Market understanding | **3.0** | Reverse engineering + competitor analysis done. VOC pending (0/5 interviews). HD128 contact exists. |
| Manufacturing capability | **4.0** | WX has CNC, welding, assembly. PCB = outsource (JLCPCB). SW = in-house. |
| Team competence | **3.5** | CEO + 3 chuyên gia (cơ khí, điện tử, phần mềm AI nhúng). Triple Helix covered: MECH ✅ ELEC ✅ SW ✅. |
| IP/Regulatory | **3.0** | No IP conflicts found (InVeris patent FTO checked). TCVN standards mapped. MIL-STD-810H referenced. No export control issues for domestic sale. |
| **IRL Average** | **3.4** | **ADAPTIVE** — 4-person team covers all domains. Ready for Phase 2/3 with targeted gap closures. |

### IRL Gaps → Actions

| Gap | IRL Impact | Action | Timeline |
|-----|-----------|--------|----------|
| No VOC interviews | Market 3.0 → target 4.0 | Schedule 3-5 gunner/instructor interviews at HD128 | Post-P1 PoC |
| SS1 PoC not validated | Tech 3.5 → target 4.0 | Execute SS1 weapon station PoC | 2026-05-07 |
| Recoil ≥25N solution TBD | Tech 3.5 | Explore pneumatic/electromagnetic/hybrid. Trade study Phase 2. | Phase 2 concept |

---

## 5. BD SUMMARY

| Deliverable | Status |
|------------|:------:|
| Innovation Flow (7th flow) defined | ✅ |
| I-IN / I-PROCESS / I-OUT mapped | ✅ |
| Innovation × ACH layer cross-reference | ✅ |
| Cross-variant commonality (90% for L2) | ✅ |
| Full portfolio platform (9 products, 4 layers) | ✅ |
| Cross-product commonality (3 IRONMESH candidates) | ✅ |
| Variant differentiation matrix (L2 + L1/L4) | ✅ |
| IRL assessment (**3.4** = Adaptive) | ✅ Updated (team 2.5→3.5) |
| IRL gap → action plan | ✅ Updated (recoil ≥25N TBD) |

**Key findings:**
1. **90% platform commonality** across 4 L2 variants. LITE = reference platform.
2. **9-product portfolio** (v1.1) = 4-layer architecture. Platform ROI 294%.
3. **IRL 3.4** (was 3.2) — team competence upgrade (CEO + 3 experts).
4. **Recoil ≥25N** solution TBD Phase 2 — impacts WEAPON-MOD risk profile too.

---

*Next: Block BE ICDM (Concept Evaluation Criteria Deliverable)*
