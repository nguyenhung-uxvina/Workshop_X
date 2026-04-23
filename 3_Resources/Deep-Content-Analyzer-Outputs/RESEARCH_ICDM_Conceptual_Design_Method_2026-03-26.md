---
created: 2026-03-26
source: research-pipeline-v3
notebook: icdm
topic: "ICDM - Integrated Customer Driven Conceptual Design Method"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #pahl]
source_quality:
  tier_s: 8
  tier_a: 4
  tier_b: 3
  tier_c: 0
  pro_ratio: "80%"
---

# Research: ICDM — Integrated, Customer Driven, Conceptual Design Method

> 15 sources (11 ingested), --deep analysis, NLM notebook: icdm
> Authors: Hari & Weiss (Technion/RAFAEL Israel, 1996), extended by Mayda & Börklü (2014)

---

## 1. The 10 Steps of ICDM ★★★

| Step | Name | P&B Mapping | New by ICDM? |
|------|------|-------------|:------------:|
| 1 | **Identify Customers & Needs** (interviews, focus groups) | — (P&B starts at spec) | ✅ NEW |
| 2 | **VOC → Product Definition** (Enriched QFD + CSR functions + TVDT) | P&B Task Clarification (partial) | ✅ ENRICHED |
| 3 | **Abstraction & Functional Analysis** (solution-free basic problems) | P&B Ch. 6.2 Abstraction | = Same |
| 4 | **Create Solution Principles** (TRIZ + brainstorm → Morphological Diagram) | P&B Ch. 6.3 Working Principles | = Same |
| 5 | **Select Evaluation Criteria** (Group A for screening, Group B for deep) | P&B Ch. 6.4 (implicit) | ✅ FORMALIZED |
| 6 | **Synthesize Primary Concepts** (combine WPs into concepts) | P&B Ch. 6.5 Combining | = Same |
| 7 | **Evaluate Primary Concepts** (Pugh matrix with Group A criteria) | P&B VDI 2225 | ≈ Enhanced |
| 8 | **Design, Architecture, Analysis & Improve** (CFMA, CDTC, RTA, Robustool) | — (P&B jumps to embodiment) | ✅ NEW |
| 9 | **Final Concept Selection** (Group B criteria, CSR score, DQM) | P&B Ch. 6.6 (simpler) | ✅ ENRICHED |
| 10 | **Project Launch** (presentation to management + funding) | — (P&B doesn't cover) | ✅ NEW |

**Key insight:** ICDM adds 4 entirely new steps to P&B (Steps 1, 2, 8, 10) and formalizes 2 others (Steps 5, 9). Steps 3-4-6 are identical to P&B. **WX already has Steps 1-2 via forge-job-map (ODI/JTBD + HOQ). Step 8 is the biggest gap.**

---

## 2. Key ICDM Tools — Detailed ★★★

### 2.1 Enriched QFD (Step 2)
- Standard QFD + competitive benchmarking + usage scenarios
- Links to Customer Satisfaction Rating (CSR) functions
- Positions product against competitors while setting measurable targets
- **WX status:** ✅ Already in forge-job-map (HOQ H1-H5) — partially covered

### 2.2 CFMA — Conceptual Failure Mode Analysis (Step 8)
- Unlike standard FMEA: applied at CONCEPT level, based on FUNCTIONS not components
- Uses organizational experience + function analysis
- Evaluates potential failures BEFORE parts are designed
- Scoring: SFD (Severity × Frequency × Detection) — concepts with high SFD rejected or improved
- **WX status:** ✅ Already in helix-concept-generate Step 5.5 (Session 57)

### 2.3 DQM — Design Quality Measurement (Step 9)
- Measures how well a concept satisfies customer requirements
- Evaluates predicted performance against QFD target values
- Uses CSR functions to calculate total quantitative satisfaction score
- Requires full VOC→CSR traceability (cannot be standalone)
- **WX status:** ❌ NOT in any WX skill — DQM is the missing tool

### 2.4 TVDT — Target Values Decision Table (Step 2)
- Structures target value discussions in multi-discipline teams
- Links to QFD output → feeds evaluation criteria
- **WX status:** ✅ Already in helix-task-clarify Step 5.5 (Session 58)

### 2.5 CDTC — Conceptual Design To Cost (Step 8)
- Based on Design-to-Cost + Pareto principle
- Uses organizational experience to forecast major manufacturing costs
- Applied when product information is very limited (concept level)
- Identifies cost-reduction opportunities early
- **WX status:** ⚠️ Partial — forge-cost does defense-level cost analysis but not CDTC formal method

### 2.6 Roobustool (Step 8)
- Quantitative checklist for concept robustness
- Evaluates: (a) resistance to illegitimate use, (b) ability to accommodate future upgrades
- **WX status:** ❌ NOT in any WX skill

### 2.7 RTA — Risk and Time to Market Analysis (Step 8)
- Based on "Information Gap" principle
- Assesses gap between current org knowledge and new technology required
- Forecasts design cycles needed → predicts time-to-market + project risk
- **WX status:** ❌ NOT in any WX skill — could enhance helix-quality-gate

### 2.8 DSO — Direct Synthesis Optimization (Step 6)
- Solves morphological box combinatorial explosion
- Pre-evaluates individual WPs on 4-step scale (performance × risk)
- Rearranges morphological box by rank → "best" WPs grouped left
- Enables rapid direct synthesis without exhaustive combination
- **WX status:** ❌ NOT in any WX skill — could dramatically improve helix-concept-generate

---

## 3. P&B vs ICDM Comparison ★★★

| Aspect | Pahl & Beitz | ICDM | WX Current |
|--------|-------------|------|------------|
| **Customer input** | Spec-driven (engineer writes spec) | Customer-driven (VOC→QFD→CSR) | ✅ forge-job-map ODI/JTBD |
| **Abstraction** | Ch. 6.2 (same) | Step 3 (same) | ✅ helix-task-clarify Step 4 |
| **Morphological box** | Ch. 6.3-6.5 (exhaustive) | Steps 4-6 + DSO (optimized) | ⚠️ No DSO — exhaustive only |
| **Evaluation** | VDI 2225 weighted scoring | Two-stage (Group A Pugh + Group B DQM) | ✅ VDI 2225 in concept-generate |
| **Failure analysis at concept** | None (FMEA only in embodiment) | CFMA at concept level | ✅ CFMA in concept-generate |
| **Cost at concept** | None (cost in detail design) | CDTC (early cost forecast) | ⚠️ Partial (forge-cost) |
| **Robustness** | None (DfR in embodiment) | Roobustool at concept | ❌ Missing |
| **Risk/Schedule** | None | RTA (information gap → time-to-market) | ❌ Missing |
| **Final selection** | Single-stage VDI 2225 | Two-stage (A+B) with CSR score | ⚠️ Single-stage only |
| **Project launch** | Not covered | Step 10 (presentation + funding) | ❌ Not formalized |

### Gaps ICDM fills in P&B:
1. **Front-end customer integration** (Steps 1-2) — P&B starts too late
2. **Morphological box optimization** (DSO) — P&B generates too many combinations
3. **Concept-level risk assessment** (CFMA + RTA + Robustool) — P&B defers to embodiment
4. **Concept-level cost** (CDTC) — P&B defers to detail design
5. **Two-stage evaluation** (Group A screening + Group B deep) — P&B single-stage

### No contradictions — ICDM is a superset of P&B.

---

## 4. Practical Applications ★★

- **Flashlight for elderly** — teaching example (Technion)
- **Military Ground Launcher System (TEL)** — defense (RAFAEL)
- **LF100** — consumer product for parents
- **Israeli high-tech industry** — classified defense + startups
- **Taught at Technion** — SE Master's program, experienced engineers
- **20+ years validation** since 1996

---

## 5. WX Integration Gap Analysis ★★★

### Already Integrated (from Session 57-58 Mayda 2014 upgrades):
| Tool | WX Skill | Step |
|------|----------|------|
| CFMA | helix-concept-generate | Step 5.5 |
| TVDT | helix-task-clarify | Step 5.5 |
| HOQ (Enriched QFD partial) | forge-job-map | H1-H5 |
| TRIZ | helix-concept-generate | Steps 0/0.5/4.5 |

### NOT Yet Integrated (new opportunities):
| Tool | Benefit for WX | Integration Target | Effort |
|------|---------------|-------------------|--------|
| **DSO** | Reduce morphological box explosion (VN-12.7MM had 35 SFs) | helix-concept-generate Step 4.5 (before synthesis) | MEDIUM |
| **DQM** | Quantitative customer satisfaction scoring for concept selection | helix-concept-generate Step 7 (alongside VDI 2225) | HIGH (needs full CSR traceability) |
| **Roobustool** | Evaluate concept robustness vs illegitimate use + upgradability | helix-concept-generate Step 5.5 (alongside CFMA) | LOW |
| **RTA** | Predict time-to-market + info gap risk per concept | helix-quality-gate (Gate 2 criteria) | MEDIUM |
| **CDTC** | Early cost forecast at concept level | forge-cost extension OR helix-concept-generate Step 8 | MEDIUM |
| **Two-stage eval** | Group A screening → Group B deep analysis (reduce evaluation workload) | helix-concept-generate restructure Steps 5-7 | LOW |
| **Step 10 Project Launch** | Formalize concept-to-management presentation | helix-quality-gate Gate 2 output format | LOW |

### Priority Recommendation (CEO decision):
1. **DSO** — highest leverage, reduces concept generation time significantly
2. **Roobustool** — low effort, adds robustness dimension missing from VDI 2225
3. **Two-stage eval** — low effort, reduces evaluation workload for multi-concept projects
4. **RTA** — medium effort, valuable for defense projects with long lead times
5. **DQM** — high effort, highest value but needs full CSR pipeline (forge-job-map → helix integration)

---

## 6. Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 15 |
| Tier S (Papers) | 8 |
| Tier A (Authority) | 4 |
| Tier B (Professional) | 3 |
| Pro ratio (S+A/total) | 80% |
| NLM ingested | 11/15 (4 paywall failures) |
| Insights extracted | 18 |
| ★★★ HIGH confidence | 8 |
| ★★ MED confidence | 6 |
| ★ LOW confidence | 4 |
| NLM notebook | icdm (11 sources) |

### Coverage Gaps
- **DQM formula** — no source provides explicit mathematical formula. Need: Weiss original 1996 paper or Technion course material
- **DSO 4-step scale** — described conceptually but no numerical example. Need: worked example with real morphological box
- **Mayda 2014 PDF** — ScienceDirect paywall blocked NLM. Have search snippet only.
- **INCOSE 2024 CFMA evolution** — paywall blocked. May contain updates to CFMA method.

---

## Galaxy Candidates (THỊNH H — Hóa)

### ★★★ — Ready for Promotion

| # | Insight | Proposed Title | Cluster |
|---|---------|---------------|---------|
| 1 | ICDM Step 8 (Design-Architecture-Analysis-Improve) fills the biggest gap in P&B: between concept selection and embodiment, there's a phase where concepts are STRESS-TESTED (CFMA + CDTC + RTA + Robustool) before committing to detail. P&B jumps straight from selection to embodiment → misses early risk detection. | **Concept Stress-Test Gap — P&B Nhảy Từ Chọn Sang Embodiment, Thiếu Bước Kiểm Tra Stress** | G (Pahl-Beitz Technical) |
| 2 | DSO (Direct Synthesis Optimization) solves morphological box combinatorial explosion by pre-ranking individual WPs on performance×risk BEFORE synthesis. Result: "best" WPs cluster left in rearranged matrix → designer synthesizes directly instead of evaluating 100+ combinations. | **DSO Law — Xếp Hạng Trước Tổ Hợp, Không Phải Tổ Hợp Rồi Xếp Hạng** | G (Pahl-Beitz Technical) |

### ★★ — Needs More Evidence

| # | Insight | Missing |
|---|---------|---------|
| 1 | RTA "Information Gap" principle: risk = f(gap between current org knowledge and new tech required). More info gap = more design cycles = longer TTM. | Need: RTA formula/scoring rubric from original paper |

---

**CEO decisions:**
1. Galaxy promote "Concept Stress-Test Gap" và/hoặc "DSO Law"?
2. Integrate DSO vào helix-concept-generate? (highest leverage)
3. Add Roobustool + Two-stage eval vào concept-generate? (low effort)
4. Create `/skill-from-research` pipeline: ICDM notebook → upgrade helix-concept-generate skill?

*Research Pipeline v3.0 --deep | 15 sources | NLM notebook: icdm | 2026-03-26*
