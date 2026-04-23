---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE COMPARE Mode C4 — MCDA Aggregate + CEO Decision
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode compare
project: VN-CUAV-SIM-001
input: COMPARE_C1→C2→C3
---

# COMPARE C4: MCDA SUMMARY + CEO DECISIONS
## VN-CUAV-SIM-001 — Maritime C-UAV/USV Training Simulation

**Date:** 2026-04-20
**Purpose:** Synthesize C1-C3 into actionable decisions for Phase 3 embodiment

---

## C4a — MCDA AGGREGATE (from C2 + C3)

### Technical Score (C2) + Risk-Adjusted Modifier (C3)

| System | C2 Technical Score | C3 Risk Modifier | Adjusted Score | Rank |
|--------|:-----------------:|:-----------------:|:--------------:|:----:|
| **WX LITE PA-2** | 3.43 | +0.3 (home market, no export risk, cost moat) | **3.73** | **1** |
| Zen FAC Sim | 3.04 | -0.1 (India export bureaucracy, could pivot to C-UAS) | 2.94 | 2 |
| MVRsim FPV-UAV | 2.55 | -0.3 (ITAR, US-centric, not competitor) | 2.25 | 4 |
| Elbit RCWS | 2.50 | -0.1 (conditional on RCWS buy, Israel restrictions) | 2.40 | 3 |
| Saab GCIT | 2.33 | -0.1 (no maritime, no C-UAS pivot likely) | 2.23 | 5 |
| FATS 100MIL | 2.32 | -0.2 (ITAR, no maritime, no C-UAS) | 2.12 | 6 |

### Robustness Across 6 Scenarios (C2 4 scenarios + C3 2 scenarios)

| System | Wins | 2nd Place | Never Below |
|--------|:----:|:---------:|:-----------:|
| **WX LITE** | **5/6** | 1/6 | 2nd |
| Zen FAC | 1/6 | 3/6 | 3rd |
| MVRsim | 0/6 | 1/6 | 5th |
| Elbit RCWS | 0/6 | 1/6 | 5th |
| Saab GCIT | 0/6 | 0/6 | 6th |
| FATS 100MIL | 0/6 | 0/6 | 6th |

**WX LITE is the ROBUST winner** — loses only in pure "Training Effectiveness First" scenario, where it drops to 2nd-3rd. All other weightings → WX wins.

---

## C4b — WHAT COMPETITORS TEACH WX (Design Lessons)

This COMPARE is not about selecting a product to buy — it's about learning. Each competitor reveals one design lesson for Phase 3.

| # | Lesson | From | WX Phase 3 Action | Priority |
|---|--------|------|-------------------|:--------:|
| 1 | **Recoil fidelity = training transfer** | Zen (electromech+seat), Saab (OEM haptic), Elbit (real mount) | SS1 PoC must validate solenoid ≥25N. If fail → pneumatic LITE+ per ICDM SC-2 70% SOFT decision | **CRITICAL** |
| 2 | **AI coaching ships in v1.0** | Zen FAC (AI-IOS already deployed) | ACH Layer 1 (lead angle error coaching) must be in LITE v1.0, not deferred. Zen already has this | **HIGH** |
| 3 | **Weapon replica quality = perceived value** | Saab (OEM blueprints), FATS (BlueFire 60+ weapons) | CNC aluminum mockup is good. Add: weighted barrel (inertia feel), textured grips, authentic trigger pull weight | **HIGH** |
| 4 | **FPV drone behavior = scenario realism** | MVRsim (Bihrle flight model) | WX UAV threat AI must simulate realistic FPV evasion. MVRsim-level agility profiles = benchmark for SS4 | **MEDIUM** |
| 5 | **Post-engagement analytics = selling point** | Saab (hit location, damage, reaction time, aiming efficiency) | AAR module (SS5) must include: shot dispersion map, reaction time trend, lead angle error per engagement | **MEDIUM** |
| 6 | **Portability = deployment advantage** | Saab (<15min setup), MVRsim (laptop) | WX LITE setup target: <60 min (current est. 2-3 hours). Reduce by designing quick-connect modules in Phase 3 | **LOW for LITE, HIGH for MOBILE variant** |
| 7 | **Embedded training paradigm exists** | Elbit (same HW live/sim) | WX HYBRID-BRIDGE concept (BB-01 sim↔live) is WX's version. Validate in product line roadmap | **FUTURE** |

---

## C4c — COMPETITIVE STRATEGY RECOMMENDATIONS

### Strategy 1: SPEED — Ship Before Zen Pivots

| Action | Owner | Deadline | Why |
|--------|-------|----------|-----|
| Complete SS1 PoC (recoil validation) | CEO + CNC team | 2026-05-07 | Gate decision: solenoid vs pneumatic |
| LITE v1.0 prototype integration | SW + HW team | 2026-Q3 | First working system |
| VN Navy demo unit | CEO | 2026-Q4 | Reference customer before competitors enter |
| First delivery | Team | 2027-Q1 | Revenue + deployed proof |

### Strategy 2: NICHE FORTRESS — Own C-UAS Maritime

| Action | Detail |
|--------|--------|
| **Scenario depth** | Build 20+ C-UAS scenarios (FPV, swarm, USV, mixed) — NO competitor has >3 |
| **Threat library updates** | Quarterly scenario updates with latest drone profiles (Houthi, Ukraine, etc.) |
| **Maritime-specific validation** | Ship motion + ocean rendering + sea-state effects = WX-only capability |
| **Training doctrine** | Publish "Maritime C-UAS Engagement Training Doctrine" — WX becomes the standard |

### Strategy 3: PRICE MOAT — Make $50-70K Impossible to Undercut

| Cost Driver | WX Advantage | Protect By |
|------------|-------------|-----------|
| CNC aluminum | In-house PX capability | Invest in CNC capacity, not outsource |
| Unity engine | $0 license (runtime) | Stay on Unity, build asset library |
| Vietnamese labor | $200-300/mo vs $3-5K Western | Train and retain SW team |
| COTS components | Alibaba/Taobao sourcing | Maintain VN sourcing database |
| Own IP | Zero royalties | Patent MWI NFC if novel |

### Strategy 4: MONITOR — Quarterly Competitive Watch

| Competitor | Watch For | Source | Frequency |
|-----------|----------|-------|-----------|
| Zen Technologies | C-UAS sim product announcement, ASEAN expo presence | zentechnologies.com, Janes, IMDEX | Quarterly |
| Elbit | VN Navy RCWS procurement rumors | BD contacts, defense press | Monthly |
| New entrants | Turkish (Havelsan, Aselsan), Korean (LIG Nex1) | IDEF, ADEX, defense press | Bi-annual |
| Market signals | ASEAN navy C-UAS training budget allocations | Defense ministry announcements | Quarterly |

---

## C4d — GALAXY CANDIDATES

From the COMPARE pipeline, 3 insights distilled:

### Candidate 1: "Niche Fortress Law — Giá Rẻ Hơn 3× Tạo Phân Khúc Không Có Đối Thủ"
- **Concept:** When you're 3-5× cheaper AND mission-specific, you don't compete in the existing market — you create a new segment that incumbents can't enter without cannibalizing their premium pricing.
- **Evidence:** WX $50-70K vs Zen $200-500K. Zen CAN'T drop to $70K without destroying their $350K FAC Sim margin. WX's price IS the moat.
- **Cluster:** C (Judgment & Agency) — strategic pricing as moat
- **Links:** [[Physical-World Interface]], [[Phán đoán không thể uỷ thác cho AI]]
- **Passes 3-question gate?** (1) Thay đổi cách thiết kế? YES — design for $50K floor, not $200K ceiling. (2) Chiến lược? YES — pricing IS strategy. (3) Cảnh báo? YES — if WX raises price to $100K+, loses moat.

### Candidate 2: "Embedded vs Dedicated Training — Hai Thị Trường Khác Nhau"
- **Concept:** Embedded training (Elbit: same HW live/sim) serves EXISTING weapon owners. Dedicated training (WX: standalone sim) serves those WITHOUT the real weapon. Different TAM, different customer, different value prop. Confusing the two = pursuing wrong competitor.
- **Evidence:** Elbit RCWS training = free with $500K RCWS purchase. WX LITE = $60K for navies that can't afford $500K RCWS.
- **Cluster:** C (Judgment & Agency) — market segmentation
- **Links:** [[Phán đoán không thể uỷ thác cho AI]], [[Training Value Index]]

### Candidate 3: "Attack-Side RE Informs Defense-Side Design"
- **Concept:** Studying how ATTACKERS train (MVRsim FPV drone pilot) reveals exactly what DEFENDERS need to practice against. Competitor analysis of non-competing products (different paradigm, same domain) yields higher-quality threat models than analyzing direct competitors.
- **Evidence:** MVRsim FPV flight model + Bihrle physics = the most accurate FPV drone behavior available. WX should benchmark UAV threat AI against this, not against other shooting sims.
- **Cluster:** C (Judgment & Agency) — cross-paradigm learning
- **Links:** [[Physical-World Interface]], [[Phán đoán không thể uỷ thác cho AI]]

**CEO: approve Galaxy candidates? (Core — do not auto-create)**

---

## C4e — COMPARE COMPLETE SUMMARY

```
=== COMPARE MODE COMPLETE — VN-CUAV-SIM-001 ===

Candidates evaluated: 9 initial → 5 shortlisted → 6 scored (incl. WX)
MCDA winner (baseline): WX LITE PA-2 (3.43/5.0)
Risk-adjusted winner: WX LITE PA-2 (3.73/5.0)
Robust winner: WX LITE (5/6 scenarios)
Primary threat: Zen Technologies FAC Sim (India)
Window of opportunity: 12-24 months

RECLASSIFIED (from initial 9):
- VSHOREZ → consumer software (excluded)
- Leonardo DRS MEP → real C-UAS weapon (threat reference)
- Meteksan SIMETRAN → naval DCS/FTS/HUET brand (no shooting sim)

KEY C2 INSIGHT: WX's only gap = Training Effectiveness (recoil + weapon fidelity)
KEY C3 INSIGHT: WX's cost moat is STRUCTURAL (3-5× TCO), not pricing tactics
KEY C4 INSIGHT: Ship LITE v1.0 before Zen pivots (12-24 month window)

PHASE 3 ACTIONS DERIVED FROM COMPARE:
1. SS1 recoil ≥25N — CRITICAL (PoC 2026-05-07)
2. AI coaching (ACH Layer 1) in v1.0 — HIGH
3. CNC weapon mockup quality (weighted barrel, textured grips) — HIGH
4. FPV drone behavior realism for SS4 scenarios — MEDIUM
5. AAR analytics (shot dispersion, reaction time, lead angle) — MEDIUM
6. Quick-connect modules for faster setup — LOW for LITE

DELIVERABLES:
1. COMPARE_C1_OSINT_Dossier_2026-04-20.md — 9 candidates, 10 OSINT layers
2. COMPARE_C2_Technical_Comparison_2026-04-20.md — 7-dimension scoring + sensitivity
3. COMPARE_C3_Competitive_Risk_2026-04-20.md — geopolitical + cost + market risk
4. COMPARE_C4_MCDA_Summary_2026-04-20.md — aggregate + strategy + Galaxy candidates

Galaxy candidates: 3 (pending CEO review)
```

---

## CEO DECISIONS REQUIRED (Core)

| # | Decision | Options |
|---|----------|---------|
| 1 | **Approve COMPARE conclusions?** | Confirm WX positioning validated |
| 2 | **Approve 6 Phase 3 actions?** | Prioritize for Phase 3 embodiment |
| 3 | **Approve Galaxy candidates?** | Select 0-3 for Galaxy promotion |
| 4 | **Activate quarterly competitive watch?** | Monitor Zen + Elbit + new entrants |
| 5 | **Route C2 recoil insight to SS1 PoC?** | Update PoC success criteria if needed |
