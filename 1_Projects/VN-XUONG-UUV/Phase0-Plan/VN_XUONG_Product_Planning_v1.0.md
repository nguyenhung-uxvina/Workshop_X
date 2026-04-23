---
created: 2026-03-06
updated: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-XUONG-UUV
status: approved
mode: SOLO
scope: PORTFOLIO
gate0: PASS (2026-03-06)
gate1: PASS (2026-03-06, 3.80/4.0)
note: "Retroactive consolidation of P09-P12 Pre-Study docs into v3.0 schema, with Phase 1/2 learnings integrated"
---

# Product Planning — VN-XUONG-UUV (Xuồng Triển Khai/Thu Hồi UUV)

> Consolidated from: P09 Situation Analysis, P10 Idea Generation, P11 Product Proposal, P56 Gate 0 Review, ODI Report v1.0. Updated 2026-04-09 with Phase 1/2 evolution (Path 3 selected, tethered UUV confirmed).

---

## 1. Stimulus Classification (Step 1)

**Stimulus:** Vietnamese Navy is acquiring medium-class tethered UUVs (550 kg, 5m, D=400mm) but has NO domestic capability to deploy/recover them from surface vessels. All LARS solutions are imported ($1-3M, ITAR-restricted, 12-24 month lead time).

**Source:** Market (customer need) + Company (portfolio gap — Workshop X has marine design capability from VN-AST-MSL-001 but no LARS product)

**Classification:** Market pull + Company competence alignment

---

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase

```
[Introduction] → Growth → Maturation → Saturation → Decline
     ↑
   VN-XUONG-UUV (category creation — first Vietnamese LARS)
```

- **Global:** LARS technology is MATURE (TRL 7-9 for individual subsystems). L3Harris, Saab, ECA, Atlas all have proven products.
- **Vietnam:** INTRODUCTION phase — zero domestic LARS products exist. Category creation opportunity.
- **Implication:** High R&D investment needed for integration, but proven subsystems reduce technology risk. First-mover advantage in VN market.

### 2b. Product-Market Matrix (Ansoff)

```
                    EXISTING MARKETS    NEW MARKETS
EXISTING PRODUCTS   Penetration         Market Dev
NEW PRODUCTS        ★ PRODUCT DEV       Diversification
                    (VN-XUONG-UUV)
```

**Quadrant: PRODUCT DEVELOPMENT** — New product (LARS vessel) for existing market (VN Navy). Medium-high risk, mitigated by LARS being a REQUIREMENT for UUV operations.

### 2c. Company Competence Assessment

| Dimension | WX Current Capability | Gap | Action |
|-----------|----------------------|-----|--------|
| Technical — Marine structural (Al, HDPE) | YES — VN-AST-MSL-001 (6m platform) | No | — |
| Technical — Embedded control | YES — IRONMESH platform | No | — |
| Technical — Naval architecture | PARTIAL — basic hydrostatic from VN-AST | Yes | Partner confirmed (seakeeping analysis) |
| Technical — LARS mechanical | NO — new domain | Yes — CRITICAL | Reference design + custom engineering |
| Technical — TMS cable management | NO — new domain (added Phase 1) | Yes — CRITICAL | Research + custom design |
| Market — VN Navy relationships | YES — existing defense procurement | No | — |
| Financial — Self-funded R&D | YES — target margin ≥50% | No | Budget ceiling $670K (prototype) |
| Production — VN shipyard network | YES — Ba Son, Z189, Song Thu | No | RFQ at Phase 3 |

**Must-acquire capabilities (RISK):** LARS mechanical design, TMS cable management, seakeeping analysis.
**WX advantages:** IRONMESH integration, marine structural experience, defense procurement relationships, AI-assisted engineering (Claude Code).

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|-----------|-----|---------|------|
| Aluminum 5083 hull construction | 9 | VN shipyard routine production [L1-field] | LOW |
| Twin outboard propulsion (2×40-60 HP) | 9 | COTS Yamaha/Mercury [L1-field] | LOW |
| Stern ramp mechanism | 7 | Proven globally (4/4 reference designs) [L4-competitive] | LOW |
| Passive V-funnel capture | 5-6 | Proven concept (L3Harris, Atlas) [L4-competitive]. Geometry optimization for D=400mm + SS 3 is new. | MEDIUM |
| Electric winch (10 kN VFD) | 8 | COTS industrial winches [L4-competitive] | LOW |
| USBL acoustic homing | 8 | COTS (EvoLogics, Sonardyne, Kongsberg) [L4-competitive] | LOW |
| TMS cable drum (25 km capacity) | 6 | Industrial cable drums exist; marine 25 km tethered UUV TMS = specialized [L5-ASSUMPTION] | MEDIUM-HIGH |
| Compact vessel + LARS integration | 4 | No direct reference at 8m scale for 550 kg UUV [L5-ASSUMPTION] | **HIGH — binding TRL** |
| Semi-auto control system (IRONMESH) | 5-6 | IRONMESH framework exists; LARS-specific control logic new [L4-competitive] | MEDIUM |
| Tropical marine materials (316L, UHMWPE) | 7 | Known solutions, selection + validation needed [L4-competitive] | LOW |

**Overall system TRL: 4** — limited by compact integration (LARS + TMS on 8m vessel).

**PROCEED gate check:**
- [x] TRL ≥ 4 — YES (barely, at system level)
- [x] Local content ≥ 40% — YES (estimated 48-55%, target ≥50%)
- [x] Competitive advantage clear — YES (15-30% cost of imports, no ITAR, local support)

**CEO validation (2026-03-06):** TRL assessment accepted. TRL 4 system integration risk accepted with fallback (Path 3 towed ops removes weight constraint).

---

## 3. Need-Strength Matrix (Step 3)

```
                         WX STRENGTHS
                    Marine    Control    CNC/      AI/
                    Structure System     Mech.     Edge
CUSTOMER           (Al,HDPE) (IRONMESH) Design    Compute
NEEDS    ──────────────────────────────────────────────
HIGH     Recovery   ★★       ★★★       ★★★      ★        
(Opp≥17) UUV prot  ★★★      ★          ★★★      ○        
         Crew safe  ★★       ★★         ★★       ○        
         Compact    ★★★      ○          ★★★      ○        

MED      Op tempo   ★        ★★★       ★★       ★★       
(Opp 15) Durability ★★★      ○          ★★       ○        
         SA/display ○         ★★★       ○         ★★★     

LOW      Low-vis    ○         ★★        ○         ★★★     
(Opp≤13) Mother dep ★         ★         ○         ○        
```

**★★★ Preferred search fields:**
1. Marine Structure × Compact + UUV Protection — hull + LARS mechanical design
2. Control System × Recovery + Op Tempo + SA — IRONMESH LARS automation
3. CNC/Mech × Recovery + UUV Protection + Compact — ramp, cradle, funnel mechanism

**CEO confirmed (2026-03-06):** Search fields 1 (structure) and 3 (mechanism) = Phase 2-3 priority. Search field 2 (control) = Phase 4 upgrade path.

---

## 4. Portfolio Assessment (Step 4)

| Product                       | Market Appeal (1-5)                             | WX Strength (1-5)                           | Score  | Zone       |
| ----------------------------- | ----------------------------------------------- | ------------------------------------------- | ------ | ---------- |
| **VN-XUONG-UUV**              | **5** (zero competition, mandatory for UUV ops) | **3** (marine capability yes, LARS/TMS new) | **15** | **TARGET** |
| VN-AST-MSL-001 (Towed Target) | 4 (established market)                          | 4 (advanced Phase 4)                        | 16     | TARGET     |
| BB-01 LOMAH                   | 4 (training system need)                        | 4 (piezo + electronics core)                | 16     | TARGET     |
| VN-12.7MM-SIM                 | 4 (heavy weapons training)                      | 3 (new domain)                              | 12     | DECISION   |
| VN-CUAV-SIM-001               | 5 (urgent C-UAV threat)                         | 3 (Unity sim new)                           | 15     | TARGET     |

**VN-XUONG-UUV zone: TARGET (invest)** — Market appeal maximum (Navy MUST have LARS for UUV), WX strength adequate (marine structural capability + control systems, acquiring LARS domain expertise).

**CEO confirmed (2026-03-06):** VN-XUONG-UUV = Musk Sequence #1 priority. All other projects deferred.

---

## 5a. §3.2 Knowledge Audit (Step 5a)

| Domain/SF | RE? | Research? | NLM? | WX? | Status | Action |
|-----------|-----|-----------|------|-----|--------|--------|
| LARS architecture (ramp, funnel, cradle) | ✓ (4 mfrs: L3Harris, Saab, ECA, Atlas) | ✓ (5 reference docs) | ✓ (NLM F1, F9) | ✓ (VN-AST marine) | Full | Reference |
| TMS cable management | ✗ | ✗ (gap identified Phase 1) | ✗ | ✗ | **GAP** | Phase 2 research done (competitive morpho) |
| Aluminum small vessel construction | ✗ | ✓ (jig/fixture, plate-first research) | ✗ | ✓ (VN-AST) | Full | Reference |
| Electric winch sizing | ✗ | ✗ | ✗ | ✗ | **GAP** | Phase 2 sizing calc done |
| V-funnel geometry optimization | ✗ | Partial (L3Harris/Atlas reference) | ✗ | ✗ | **GAP** | Phase 2-3 engineering |
| USBL integration with tethered UUV | ✗ | ✗ | ✗ | ✗ | **GAP** | **BLOCKING: ICD from OEM** |
| Seakeeping 8m monohull | ✗ | ✗ | ✗ | ✗ | **GAP** | Partner analysis (confirmed available) |
| Tropical marine corrosion | ✗ | Partial | ✓ (NLM hdpe-hull) | ✓ (Galaxy notes) | Adequate | Reference |

**Gap resolution status (as of Phase 2):**
- TMS: research done (competitive morphological analysis 2026-03-25)
- Winch: sizing done in Phase 2 concept
- V-funnel: preliminary geometry in concept, needs Phase 3 optimization
- USBL/ICD: **STILL BLOCKING** — ICD v1.3 ready but not sent to OEM
- Seakeeping: partner confirmed but analysis not yet requested

### 5b. Deep Research (completed during Phase 1-2)

| Research | Sources | NLM | Status |
|----------|---------|-----|--------|
| LARS reference analysis (L3Harris, Saab, ECA, Atlas) | 16 sources | F1, F9 | Complete |
| TRV global comparison | 14 sources | — | Complete |
| Competitive morphological chart | 27 sources | — | Complete |
| Jig/fixture/strongback construction | 12 sources | — | Complete |
| Plate-first construction procedure | 8 sources | — | Complete |

### 5c. Idea Generation — 3D Space (Step 5c)

**4 concept variants generated in P10** (informed by 4-manufacturer reference analysis):

| Dimension | Variation | Idea | Source |
|-----------|-----------|------|--------|
| Function | Core LARS + tethered UUV management | Concept B: Optimized Compact (8m, hydraulic) | [RE: all 4 mfrs] |
| Function | Minimum LARS (deploy/recover only) | Concept A: Minimum LARS (7m, electric) | [RE: L3Harris simple] |
| Embodiment | Catamaran hull for stability | Concept C: Stable Platform | [L5-ASSUMPTION] |
| Embodiment | RIB for minimum weight | Concept D: Lightweight RIB | [RE: military RIBs] |
| Function | Extended: tethered UUV ops from vessel | Path 3 evolution: 8m + TMS integrated | [L1-CEO: Phase 1 tethered UUV confirmed] |

**Additional ideas from P10 Innovation section:**

| # | Idea | Source | Status |
|---|------|--------|--------|
| I1 | IRONMESH automated sea state go/no-go | [WX: IRONMESH] | Phase 4 upgrade |
| I2 | Retractable V-funnel | [L5-ASSUMPTION] | Phase 3 trade study |
| I4 | Modular LARS cassette (bolt-on) | [L5-ASSUMPTION] | **Portfolio variant candidate** |
| I6 | Stern notch hull form | [L5-ASSUMPTION] | Phase 2-3 trade study |

**Solution Finding Methods Used:**
- [x] D-M-I-R 4-layer RE → `References/L3Harris_LARS_Analysis.md` + 3 others
- [x] Reverse Morphological Chart → `References/MORPHOLOGICAL_CHART_Competitive_Analysis_2026-03-25.md`
- [x] Literature/patent search → RESEARCH_ files in Phase 3
- [x] NLM notebook query → [NLM: F1, F9]
- [ ] Natural systems analogy / bionics — not used
- [x] 3D function×principle×embodiment variation (P10 Step 5)
- [x] WX cross-product → [WX: VN-AST-MSL-001 marine experience]
- [x] CEO domain knowledge [L2-CEO] — tethered UUV requirement, Path 3 selection
- [x] ALL gaps resolved before idea generation? ✓ (major gaps addressed; USBL/ICD = Phase 2 blocking item, not idea-generation blocker)

---

## 6. Idea Selection (Step 6)

### Pass 1: A-F Binary Elimination

| Criterion | A: Minimum | B: Optimized | C: Catamaran | D: RIB |
|-----------|-----------|-------------|-------------|--------|
| A: Compatible with WX portfolio? | + | + | + | + |
| B: Meets customer needs? | +/- (SS 2-3 only) | + | + | + |
| C: Realisable by WX? | + | + | + | - (RIB structural ?) |
| D: Within cost? | + | + | - (expensive hull) | + |
| E: Safety advantages? | 0 | + | + | 0 |
| F: WX fit (know-how, supply)? | + | + | - (cat hull rare in VN) | - (pro RIB rare in VN) |
| **Result** | ✓ proceed | ✓ proceed | **✗ ELIMINATE** (HC-1 beam) | **✗ ELIMINATE** (structural) |

**Eliminated:**
- **C (Catamaran):** 4-4.5m beam FAILS HC-1 compact constraint. Hard kill.
- **D (RIB):** Structural adequacy for 550 kg LARS loads unproven. Eliminated Phase 1.

**CEO confirmed (2026-03-06):** Elimination accepted.

### Pass 2: Weighted Selection (A vs B → evolved to Path 3)

**Phase 1 evolution:** Crane SWL = 2.5t confirmed → Concept A (ultra-light, stored on deck) vs Path 3 (tender independent, no weight limit). CEO selected **Path 3** based on:

| Criterion | Weight | Concept A (ultra-light) | Path 3 (independent 8m) |
|-----------|--------|------------------------|------------------------|
| Recovery capability (SS 3) | 15% | 2 (SS 2-3 marginal) | 4 (SS 3 reliable) |
| UUV protection | 12% | 3 | 4 (more space, controlled) |
| Crew safety | 10% | 3 | 3 |
| Compact size | 10% | 4 | 3 (8m, not on deck) |
| Operational flexibility | 10% | 2 (crane-dependent) | 4 (self-transit capable) |
| TMS integration | 10% | 1 (no space for TMS) | 4 (space for 25km drum) |
| Weight margin | 8% | 1 (tight budget) | 4 (no crane limit) |
| Cost | 8% | 3 ($200-400K) | 3 ($400-600K) |
| Growth potential | 7% | 1 | 4 (hydraulic upgrade path) |
| Local content | 5% | 3 | 4 (larger vessel = more local work) |
| Durability | 5% | 3 | 3 |
| **WEIGHTED TOTAL** | **100%** | **2.35/4.0 (59%)** | **3.60/4.0 (90%)** |

**Decision: Path 3 (independent 8m aluminum, electric LARS + TMS)**

**Key driver:** Tethered UUV requirement (confirmed Phase 1) made TMS mandatory → TMS drum cannot fit on ultra-light 6.5m vessel → Path 3 = only viable path.

### 6.5 s-Diagram — Skipped

Only 1 viable concept after TMS requirement confirmed. s-Diagram not applicable.

---

## 7. Product Proposal (Step 7)

**See separate file:** `VN_XUONG_Product_Proposal_v2.0.md`

Summary: 8m aluminum monohull, stern ramp LARS, passive V-funnel, electric 10 kN winch, permanent pendant, TMS with 25 km cable drum, USBL + camera, twin outboard 2×40-60 HP, 3 crew. Target $517K vs $1-3M import.

---

## 8. Gate 0 Quick Check (Step 8)

| Criterion | Check | Pass? |
|-----------|-------|-------|
| TRL ≥ 4 for key technologies? | System TRL 4 (compact integration is novel) | ✓ YES (barely) |
| Local content ≥ 40% achievable? | Estimated 48-55%, target ≥50% | ✓ YES |
| Competitive advantage clear? | 15-30% cost of imports, no ITAR, local support | ✓ YES |
| Within WX financial capacity? | $517K target, $670K ceiling | ✓ YES |
| Aligns with portfolio strategy? | Musk Sequence #1, IRONMESH path | ✓ YES |
| No IP/regulatory blockers? | LARS = well-established, no known patents | ✓ YES |

**Gate 0 RESULT: PASS** (2026-03-06, confirmed by CEO)
**Gate 1 RESULT: PASS** (2026-03-06, score 3.80/4.0)

---

## Appendix: CEO Decisions Record

| Date | Decision | Basis | Impact |
|------|----------|-------|--------|
| 2026-03-06 | Musk Sequence #1 | Strategic priority | All other projects deferred |
| 2026-03-06 | Seg A (Navy UUV Ops Team) selected | ODI weighted scoring | Design for tethered UUV ops |
| 2026-03-06 | DOMINATE strategy (category creation) | 26/26 outcomes underserved | First-mover, no compromise |
| 2026-03-06 | 3 paths open (aluminum/RIB/independent) | Trade study needed | Phase 1 W1-2 selection |
| 2026-03-06 | Crane SWL = 2.5t confirmed | User data [L1] | Split-lift or independent ops |
| 2026-03-06 | Gate 0 PASS | 11/11 deliverables, 3.9/5.0 score | Proceed to Phase 1 |
| 2026-03-06 | Gate 1 PASS | 107 reqs, 92% quantified, 3.80/4.0 | Proceed to Phase 2 |
| 2026-03-06 | Path 3 SELECTED (8m independent) | Tethered UUV + TMS = need space | 8m aluminum, electric LARS + TMS |
| 2026-03-07 | Twin outboard (PD-1) | Weight, reliability, maintenance | 2×40-60 HP Yamaha/Mercury |
| 2026-03-07 | Electric LARS (PD-2) | Forced by PD-1 (no PTO for hydraulic) | 10 kN VFD winch |
| 2026-03-07 | Permanent pendant (PD-3) | Simplicity, crew safety | Cable always attached to UUV cradle |
| 2026-03-07 | 3 crew roles (PD-7) | Workload analysis | Helmsman + LARS Op + UUV Op |
| 2026-03-07 | Cable drum inside UUV (TMS) | UUV OEM design | No separate TMS on vessel (simplified) |
| 2026-03-07 | F5 (cable management) collapsed | Drum in UUV = vessel only manages slack | 43 → 35 active sub-functions |

---

*Product Planning v1.0 | VN-XUONG-UUV | Pahl & Beitz §3.1-3.3 | Retroactive consolidation 2026-04-09*
