---
created: 2026-03-08
updated: 2026-03-08
type: gate-review
status: approved
document-id: VN-AST-MSL-001-G2-001
version: "1.0"
tags: [#type/project, #status/active]
---

# PHASE 2 GATE REVIEW — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Gate** | G2 — Conceptual Design → Embodiment Design |
| **Date** | 2026-03-08 |
| **Reviewer** | AI (Offload) — CEO approved |
| **Selected Concept** | **C1 TRÒN HDPE** (86.8%, CEO selected) |
| **Reserve Concept** | C4 NHÔM GỌN (82.8%) |

---

## 1. Formal Gate Scoring (gate2 Protocol)

| # | Criterion | Weight | Score | Weighted | Evidence |
|:--|:----------|:------:|:-----:|:--------:|:---------|
| A | **Concept Diversity** | 0.15 | 4 | 0.60 | 4 genuinely different concepts (HDPE/steel/hybrid/aluminum), 7×4 morphological matrix, 26 WPs |
| B | **Evaluation Rigor** | 0.25 | 4 | 1.00 | 10 criteria with traceable weights, CEO trade-off inputs, 5 sensitivity tests (±20% + extreme), weak spot analysis, risk register per concept |
| C | **Selected Concept Quality** | 0.25 | 4 | 1.00 | Rt = 86.8% (≫ 0.70 threshold), zero weak spots (only concept with no score < 3), robust in all sensitivity tests, clear 4pp gap to #2 |
| D | **Function Coverage** | 0.15 | 3 | 0.45 | 14 SF → 43 L3 all assigned WPs. Minor gap: SF-11 compartmentalization WP inherited from SF-02 foam, not independently searched → condition C-G2-01 |
| E | **Feasibility Check** | 0.15 | 4 | 0.60 | Local content ≥ 85% (≫ 60% req). Cost 600-900M (45% of 2,000M budget). PE100 pipe available from VN suppliers. ~6 wk fabrication vs 8 wk limit. |
| F | **Documentation** | 0.05 | 4 | 0.20 | 5 Phase 2 documents, CEO trade-off trail, fallback concept C4 identified, 7 open items with owner |
| | **TOTAL** | **1.00** | | **3.85** | Target ≥ 3.5 → **EXCEEDS** |

### Blocker Checks
- Any criterion = 0? **No** (minimum = 3)
- Unresolved safety/reliability weak spot? **No** — C1 zero weak spots, top risk mitigated

---

## 2. Gate Decision

### **A — APPROVE** ✓

**Score: 3.85/4.0** — exceeds 3.5 threshold. CEO confirmed A.

**1 minor condition:**
> **C-G2-01:** In Phase 3, verify foam distribution creates ≥ 2 independent buoyancy zones per R-B04. Document foam layout with zone boundaries.

---

## 3. Initial Gate Criteria (Pre-formal Review)

| # | Criterion | Evidence | Score | Status |
|:--|:----------|:---------|:-----:|:------:|
| G2-1 | **Requirements coverage** — every D-requirement addressed by selected concept | C1 maps to all 46 D-requirements. RCS (A), survivability (B/C), mooring (D), nav safety (E), environment (F), logistics (G), cost (H), safety (I), towing (J) all addressed. No orphan D-requirements. | 4 | **PASS** |
| G2-2 | **Function completeness** — no orphan sub-functions | FS v2.0: 14 SF → 34 L2 → 43 L3. All leaf functions have at least one working principle assigned in C1. Interaction matrix shows no isolated functions. | 4 | **PASS** |
| G2-3 | **≥ 2 viable concepts evaluated** | 4 concepts evaluated (C1-C4). All 4 technically feasible. C2/C3/C4 scored 78.8-82.8%. Morphological matrix shows 7×4 = 26 working principles considered. | 4 | **PASS** |
| G2-4 | **VDI 2225 evaluation with sensitivity** | 10 criteria, weighted, scored 0-4. 5 sensitivity tests performed (±20% on K1-K3, K6; extreme ×2 on K3). C1 robust in all tests. Value profile analysis included. | 4 | **PASS** |
| G2-5 | **Cost estimate within target (±15%)** | C1 estimated 600-900M VND vs budget 2,000M VND. Even upper bound = 45% of budget. Large margin for Phase 3 refinement. | 4 | **PASS** |
| G2-6 | **Local content target achievable** | C1 local content ≥ 85% vs requirement ≥ 60%. HDPE pipe (VN), foam (VN), steel frame (VN), aluminum reflectors (VN fabrication from imported sheet). | 4 | **PASS** |
| G2-7 | **TRL assessment realistic** | Core WPs: HDPE foam hull (TRL 8), trihedral reflectors (TRL 9), chain/nylon mooring (TRL 8), V-bridle (TRL 8), GPS beacon (TRL 9). No TRL < 7 components. System-level TRL = 5 (subsystems proven, system integration not yet validated). | 3 | **PASS** |
| G2-8 | **Risk register with mitigations** | 5 risks identified for C1 with mitigations. Top risk: HDPE weld QC (Medium likelihood, High impact) — mitigated by test coupons + welder certification. No showstopper risks. | 3 | **PASS** |

---

## 4. Selected Concept Summary — C1 TRÒN HDPE

### Principle Solution

| Sub-Function | Working Principle | Preliminary Spec |
|:-------------|:-----------------|:-----------------|
| SF-01 RCS | Trihedral corner reflector array | 10× reflectors, edge **1.0m** (upgraded from 0.9m), aluminum sheet. σ_peak = 4,095 m², min = 1,024 m² (derated). |
| SF-02 Buoyancy | HDPE pipe ring, foam-filled | D ≈ 6.0m, 2-tier Ø500mm HDPE pipe, closed-cell PU foam |
| SF-03 Stability | Wide circular waterplane | GM = 12.234 m (verified). Wind heel < 1° @ 26 m/s. All IMO 2008 criteria met with 81× margin. |
| SF-04 Mooring | Drag anchor + chain/nylon hybrid | 125 kN design load, ~1,440 kg total mooring weight |
| SF-05 Structure | HDPE hull + galv steel mast/frame | HDPE for hull (corrosion-free), steel for load-bearing (mast, mooring, tow) |
| SF-06 Position | COTS GPS beacon | ≤ 5m CEP, ≤ 60s interval, battery-powered |
| SF-07 Nav safety | SOLAS light + IALA paint + marking | ≥ 2 NM visible, orange/yellow |
| SF-08 Transport | Bolted flanged joints | Hull splits 2 halves + mast/reflector module = 3 modules |
| SF-09 Deploy | Assembly at quay + crane launch | ≤ 4 hrs, ≤ 6 people, ≤ 5T crane |
| SF-12 Power | Battery pack | ≥ 30 days for GPS + lights |
| SF-13 Tow-out | V-bridle (2-point) | 37 kN/point, SS 5 rated, shared structural reinforcement with mooring |
| SF-14 Tow-back | Same tow points | SS 3-4, reduced requirements |

### Key Design Parameters for Phase 3

| Parameter | Value | Source |
|:----------|:------|:-------|
| Hull diameter | ~6.0m | SF-03 stability + SF-01 reflector coverage |
| Hull height (2-tier) | ~1.0m (2 × Ø500mm) | SF-02 buoyancy calculation |
| Mast height above WL | ≥ 2.0m (total ≥ 3.5m) | R-A05 + R-B06 |
| Reflector edge length | **1.0m** (upgraded from 0.9m per OI-2) | σ_peak = 4,095 m², min = 1,024 m² (derated -3dB) @ X-band |
| Reflector count | 10 | ≥ 330° azimuth coverage (36° per unit) |
| Dry weight target | ≤ 3,500 kg | SF-02 buoyancy margin |
| Mooring design load | 125 kN | R-D04 (RESEARCH) |
| Tow design load | 64 kN (V-bridle: 37 kN/pt) | R-J01 (RESEARCH) |
| Tow drag @ 5 kt | ≤ 17 kN | R-J08 (RESEARCH) |
| Cost target | ≤ 900M VND | Upper bound of C1 estimate |
| Local content | ≥ 85% | C1 assessment |

---

## 5. Conditions & Open Items for Phase 3

| # | Item | Priority | Owner | Type |
|:--|:-----|:--------:|:------|:-----|
| **C-G2-01** | **Verify foam layout creates ≥ 2 independent buoyancy zones (R-B04)** | **High** | **AI** | **Gate Condition** |
| OI-1 | HDPE weld test coupons — validate butt-fusion process before committing to hull | **High** | CEO (physical gate) | Open Item |
| ~~OI-2~~ | ~~Reflector RCS verification~~ **RESOLVED** — σ_max = 4,095 m² per reflector (edge **1.0m**, upgraded from 0.9m). 10× array min RCS ~2,048 m² (derated -3dB: 1,024 m²). Meets R-A01 ≥ 1,000 m². Formula: σ = 4πa⁴/3λ². CEO decision: Option B (1.0m × 10). See `0_Inbox/RESEARCH_AST-MSL-001_RCS_Verification_OI2_2026-03-08.md` | ~~High~~ | ~~AI~~ | **Closed** |
| ~~OI-3~~ | ~~Stability calculation — GM for D=6m, 2-tier, with mast + reflectors (wind heeling)~~ **RESOLVED** — GM = 12.234 m (81× IMO min), wind heel < 1° @ B10 (26 m/s). Per 46 CFR 174.055: H = 7.59 kN·m. All IMO 2008 IS Code criteria met. NLM notebook `stability` (19 sources). See `0_Inbox/RESEARCH_AST-MSL-001_Stability_GM_Calculation_2026-03-08.md` | ~~High~~ | ~~AI~~ | **Closed** |
| OI-4 | Mooring detail — chain/nylon hybrid sizing, anchor selection for VN seabed | Medium | AI (Offload) | Open Item |
| OI-5 | Transport module dimensions — verify 2 half-hulls + mast fit on 10T truck | Medium | AI (Offload) | Open Item |
| OI-6 | ICD v0 → v1 update — add IF-008/009/010, detail IF-003 (battery) | Medium | AI (Offload) | Open Item |
| OI-7 | Tow trial planning — identify location, tug, instrumentation | Low | CEO (Core) | Open Item |

---

## 6. Phase 2 Artifact Register

| # | Document | ID | Version | Status |
|:--|:---------|:---|:--------|:-------|
| 1 | Function Structure v2.0 | VN-AST-MSL-001-FS-001 | 2.0 | Approved |
| 2 | Working Principles Search | VN-AST-MSL-001-WP-001 | 1.0 | Approved |
| 3 | Morphological Matrix | VN-AST-MSL-001-MM-001 | 1.0 | Approved |
| 4 | VDI 2225 Concept Evaluation | VN-AST-MSL-001-CE-001 | 1.0 | Approved |
| 5 | Phase 2 Gate Review | VN-AST-MSL-001-G2-001 | 1.0 | **APPROVED** |

---

## 7. CEO Trade-off Decisions (Recorded)

| # | Question | CEO Decision |
|:--|:---------|:-------------|
| 1 | Unsinkability: steel compartmentation acceptable? | Yes — acceptable for defense target |
| 2 | Local content: aluminum 60% at boundary? | Acceptable risk |
| 3 | Complexity vs stability: hinges worth it? | No — operational simplicity > stability margin |
| 4 | Budget: minimize cost or invest in robustness? | Invest in robustness/quality |

---

## 8. Next Step

**Phase 3: Embodiment Design** (`/embody`)
- Preliminary layout drawing (GA sketch)
- DfX review (DfM, DfA, DfU, DfT)
- Structural sizing
- Detailed BOM v1
- ICD v1 update
- Physical gate: **test coupon by 2026-04-07** (30 days)

---

*Phase 2 Gate Review v1.0 — APPROVED | VN-AST-MSL-001 | HELIX Phase 2*
