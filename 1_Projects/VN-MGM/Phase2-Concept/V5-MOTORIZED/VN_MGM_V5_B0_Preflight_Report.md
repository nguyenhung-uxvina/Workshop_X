---
created: 2026-04-11
type: preflight-report
block: B0
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
design_type: ADAPTIVE (V1 base + motor + ICDM platform delta)
status: COMPLETE
morpho_rows_planned: 16
feeds_to:
  - VN_MGM_V5_Problem_Frame.md (BA)
  - VN_MGM_V5_Morphological_Matrix.md (BB)
---

# B0 Preflight Report — VN-MGM V5-MOTORIZED (ICDM)

## 1. Input Verification

| # | Input | Source | Status |
|---|-------|--------|:------:|
| 1 | Requirements List v1.0 (86 base) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 2 | ICDM Requirements Extension (+18 = 104 total) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 3 | Failure-Derived Requirements (+6 = 110 total) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 4 | Essential Problem (4-pillar, 10 sub-problems) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 5 | Function Structure (42 SFs: 22 V1 + 14 motor + 6 ICDM) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 6 | Design Type (ADAPTIVE) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 7 | TVDT (15 top reqs, 2 TG bench-testable) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 8 | Abstraction (5-step, solution-neutral verified ≥4 classes) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 9 | CSR Functions (15 chars, Group A 6/71.2%, Group B 9/97.4%) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 10 | ICDM Evaluation Criteria (2-stage Pugh+DQM) | Phase1-Task/V5-MOTORIZED/ | ✅ |
| 11 | HOQ Design Parameters (10 DPs, VDI 2225 weights) | Phase0-Forge/ | ✅ |
| 12 | Product Planning v1.0 + Operator Analysis + RE v1.0 | Phase0-Plan/V5-MOTORIZED/ | ✅ |
| 13 | FORGE full set (Job Map, Outcomes, Opportunity, ACH, Cost, Scout) | Phase0-Forge/ | ✅ |
| 14 | N12-RETROFIT-KIT Phase 2 morpho (12 SFs × 38 WPs, 3 concepts) | Phase2-Concept/N12-RETROFIT-KIT/ | ✅ |

**Result: 14/14 ✅ — Full input set. All Phase 1 + FORGE + Phase 0 + N12 reference available.**

---

## 2. Abstraction Quality Check (P&B §6.1-6.2)

| Step | Check | Status |
|------|-------|:------:|
| S1: Eliminate brand bias | 8 solution-biased terms → abstracted (BLDC→"rotary actuator", etc.) | ✅ |
| S2: Omit non-functional | Functional core = Drive + Preserve + Survive + Report. Non-functional (IP65, STANAG, BOM) correctly separated | ✅ |
| S3: Quantitative → qualitative | 5 quantitative targets → qualitative essence | ✅ |
| S4: Expand scope | V1 EP → V5 EP (adds powered + fallback + platform) | ✅ |
| S5: Essential problem statement | 4-pillar statement, solution-neutral, ≥4 solution classes verified | ✅ |

**Abstraction quality: PASS.** No solution bias in essential problem. "Motor" never appears — only "powered angular drive."

---

## 3. Function Structure Validation (P&B §6.3.3 Guidelines)

### 3a. Guideline Compliance

| # | Guideline | Check | Status |
|---|-----------|-------|:------:|
| G1 | Overall function clearly stated | "Provide powered angular drive..." with 6 I/O flows | ✅ |
| G2 | Enumerate-first if unclear | N/A — ADAPTIVE design, structure derived from V1 + delta | ✅ |
| G3 | No subfunctions without input/output | All 42 SFs have ≥1 flow assigned (E/M/S/D/C/T) | ✅ |
| G4 | No orphan flows | All 6 flows (E-M-S-D-C-T) connect input→output | ✅ |
| G5 | Appropriate decomposition depth | F7-F12 each have 3-4 SFs = manageable. No over-decomposition. | ✅ |
| G6 | Sub-functions solution-neutral | F7.1 = "couple motor torque to axis" (not "pinion on ring"). F9.1 = "disengage motor" (not "EM clutch") | ✅ |
| G7 | CARS variation considered | Not yet — BA will generate ≥2 function structure variants | ⏳ BA |
| G8 | Physical compatibility between SFs | Energy path (ship power → motor → gearbox → clutch → mount) is physically consistent | ✅ |
| G9 | Information flow consistency | Data flow: joystick → controller → drives → motors + encoder → data port | ✅ |
| G10 | Safety functions independent | F9.2 (fault detection) and E-stop are HW-independent from F10.2 (motor control) | ✅ |
| **G11** | **ALL SFs appear as morpho rows** | **See §3b below — 20 V5 delta SFs → 16 morpho rows planned** | ✅ |

### 3b. G11 — Morphological Matrix Row Plan

V5 = ADAPTIVE. V1 F1-F6 (22 SFs) = **FROZEN** (300 units, TRL 9). Only V5 delta SFs (20 total: F7-F12) enter the morphological matrix.

**Combining rationale:** Some SFs share the same WP selection by physics (e.g., recoil isolation is the same approach for both axes). These are combined into single rows to avoid redundancy, per P&B §6.4 guidance.

| Row | SF(s) | Morpho Row Name | Domain | Depth | Combine Rationale |
|-----|-------|----------------|--------|:-----:|-------------------|
| **1** | **F7.1** | **Couple motor to azimuth** | Energy | MEDIUM | ★ Solution-determining #1. CEO confirmed pinion-ring. |
| **2** | F7.4 | Az speed reduction (gearbox type) | Energy | MEDIUM | Worm vs planetary vs belt. Shared with el if same approach. |
| **3** | **F8.1** | **Couple motor to elevation** | Energy | **DEEP** | ★★ Solution-determining #2. KEY OPEN QUESTION. V5 can modify V1 → more options than N12. |
| **4** | F8.4 | El speed reduction | Energy | CONDITIONAL | If F8.1 = WP-E1 (worm shaft), F8.4 = "V1 worm" (no new WP). Otherwise needs own WP. |
| **5** | F7.2 | Mount az motor to pedestal | Structure | MEDIUM | V5: permanent bracket (welded/bolted). Different from N12 (clamp). |
| **6** | F8.2 | Mount el motor to structure | Structure | MEDIUM | V5: bolted bracket. Depends on F8.1 choice. |
| **7** | F7.3 + F8.3 | Recoil isolation (both axes) | Structure | SHALLOW | Same WP for both axes — elastomer type/geometry. |
| **8** | **F9.1** | **Clutch disengage (motor↔manual)** | Energy | MEDIUM | ★ Solution-determining #3. EM NC locked by SC-V5-1. |
| **9** | F9.2 | Fault detection → safe state | Signal/Control | SHALLOW | Standard industrial safety architecture. |
| **10** | F9.3 | Mode status indication | Signal | SHALLOW | LED/beep/display — low risk. |
| **11** | F10.1 | Operator command interface | Signal | SHALLOW | Industrial joystick = proven. |
| **12** | F10.2 | Motor control architecture | Compute | SHALLOW | STM32 + dual servo = standard. |
| **13** | F10.3 | Power/signal through 360° rotation | Energy/Signal | MEDIUM | Cable spiral vs slip ring — affects reliability + cost. |
| **14** | F11.1 + F11.2 | Position data encoding + interface | Data (ICDM) | SHALLOW | Encoder type + protocol. Coupled choice. |
| **15** | F11.3 + F12.3 | Data security + firmware update | Data/Trust (ICDM) | SHALLOW | Security gate + update method. Coupled. |
| **16** | F12.1 + F12.2 | UPS + operational logging | Energy/Data (ICDM) | SHALLOW | Battery type + logging hardware. Coupled. |

**16 morpho rows from 20 SFs.** 4 combinations justified by physics coupling. All SFs accounted for — G11 PASS.

### 3c. Depth Distribution

| Depth | Rows | % | SFs |
|:-----:|:----:|:-:|-----|
| DEEP | 1 | 6% | F8.1 (elevation coupling — open question) |
| MEDIUM | 6 | 38% | F7.1, F7.4, F7.2, F8.2, F9.1, F10.3 |
| SHALLOW | 8 | 50% | F9.2, F9.3, F10.1, F10.2, F11.*, F12.* |
| CONDITIONAL | 1 | 6% | F8.4 (depends on F8.1) |

**Consistent with ADAPTIVE design type:** Deep search only on novel/open SFs. Shallow on COTS/proven SFs.

---

## 4. Design Type Confirmation

| Factor | Value | Implication for Phase 2 |
|--------|-------|------------------------|
| Base product | V1-NAVAL-12.7 (300 units, TRL 9) | V1 F1-F6 frozen. No morpho rows for V1. |
| Delta scope | F7-F12 (20 SFs) | 16 morpho rows |
| Classification | **ADAPTIVE** | Deep on F8.1, medium on F7.1/F9.1, shallow on rest |
| N12 overlap | 12 of 14 motor SFs shared with N12 | Reuse N12 WPs as starting point. Add V5-specific options (permanent brackets, ICDM platform). |
| ICDM addition | F11, F12 (6 SFs, 3 morpho rows) | Low-risk COTS solutions. Shallow search. |
| --quick eligible? | **NO** — F8.1 is genuinely open. Full pipeline needed. | Run full B0→BE |

---

## 5. Constraint Classification (P&B §6.2)

| # | Constraint | Genuine / Fictitious | Rationale |
|---|-----------|:--------------------:|-----------|
| SC-V5-1 | EM clutch auto-disengage ≤1s | **GENUINE** | Safety — weapon must never die. Physics-based transition time. |
| SC-V5-2 | Motor→manual ≤5s, 1 action | **GENUINE** | Tactical — combat transition window. |
| SC-V5-3 | Manual mode ≥80% of V1 | **GENUINE** | Training — trắc thủ trained on V1. |
| SC-V5-4 | Motor slew ≥60°/s | **GENUINE** | Physics — FPV at 200m = 15.9°/s, 4× margin needed. |
| SC-V5-5 | Recoil recovery ≤0.5s | **GENUINE (RELAXED)** | CEO relaxed from 0.3s. Bench test validates. |
| SC-V1-1 | ≥50 kN recoil, 50K cycles | **GENUINE** | Physics — weapon generates this force. |
| SC-V1-3 | 1,000 hrs salt fog | **GENUINE** | Environment — tropical marine, V1 field-proven. |
| P-05 | ≤3 additional brackets on V1 | **Review → WISH** | This is a V5 design preference, not physics. V5 is a NEW product — if 4 brackets gives better result, it should be allowed. Recommend: keep as WISH, not sacred. |

**⚠️ P-05 REVIEW:** P-05 ("≤3 brackets") was stated as a WISH in requirements but appeared in Essential Problem as if it were a constraint. For V5 (new product, not retrofit), there is no physics reason to limit bracket count. N12 has zero-modification constraint (SC-N12-4), but V5 does NOT inherit this. **CEO: confirm P-05 stays as WISH, not a sacred constraint.**

**No fictitious constraints impersonating as genuine detected** (other than P-05 ambiguity).

---

## 6. ICDM Input Checklist (B0 Extension)

| Check | Required Input | Status | Source |
|-------|---------------|:------:|--------|
| CSR functions defined | 15 characteristics with satisfaction curves | ✅ | CSR_Functions.md |
| WTP classification | All top reqs tagged E/B/L | ✅ | CSR_Functions.md §1 |
| Group A criteria (screening) | 6 criteria, 71.2% weight | ✅ | CSR_Functions.md §4 |
| Group B criteria (final) | 9 criteria, 97.4% weight | ✅ | ICDM_Evaluation_Criteria.md |
| Cost target (CDTC) | BOM ≤$10K, ICDM overhead ≤$500 | ✅ | CO-01 + IM-03 |
| DQM framework defined | DQM = Σ(weight × CSR), thresholds set | ✅ | CSR_Functions.md §5 |
| Evaluation strategy (2-stage) | Pugh Group A → CSR Group B → DQM | ✅ | ICDM_Evaluation_Criteria.md |
| CFMA + CDTC + RTA + Robustool planned | BD block assignments defined | ✅ | ICDM_Evaluation_Criteria.md §2 |

**ICDM inputs: 8/8 ✅ — Full ICDM pipeline ready.** This is the first real ICDM run with complete inputs.

---

## 7. N12 → V5 WP Inheritance Map

Since N12 Phase 2 BB is complete (12 SFs × 38 WPs), V5 inherits applicable WPs:

| V5 SF | N12 SF | N12 WP Inherited | V5 Changes |
|-------|--------|-----------------|------------|
| F7.1 | F7.1 | WP-A1 (spur pinion) ★ | Same — CEO confirmed |
| F7.4 | F7.4 | Worm gearbox (NMRV050 1:80) | Same — commonality PC-02 |
| F8.1 | F8.1 | WP-E1/E2/E4 (3 options) | **V5 adds options** — can modify V1 (P-05) |
| F7.2 | F7.2 | WP-CLA1 (split-ring clamp) | **V5 DIFFERENT** — permanent bracket, not clamp |
| F8.2 | F8.2 | WP-CLE1 (U-bolt saddle) | **V5 DIFFERENT** — bolted bracket option |
| F7.3/F8.3 | F7.3/F8.3 | WP-ISO1 (elastomer bushing) | Same |
| F9.1 | F9.1 | WP-C1 (EM clutch NC) ★ | Same — commonality PC-03 |
| F9.2 | F9.2 | WP-FD1 (triple watchdog) | Same |
| F9.3 | F9.3 | WP-MS1 (LED+beep) | Same |
| F10.1 | F10.1 | WP-JS1 (industrial joystick) | Same — commonality PC-06 |
| F10.2 | F10.2 | WP-SC1 (PID servo STM32) | Same — commonality PC-04 |
| F10.3 | F10.3 | WP-CR1/CR2 (cable/slip ring) | Same options |
| F11.* | — | N/A (V5 only) | **NEW — ICDM platform** |
| F12.* | — | N/A (V5 only) | **NEW — ICDM platform** |

**Inheritance score: 10/14 motor SFs directly inherit N12 WPs as starting point.** 2 SFs have V5-specific differences (F7.2, F8.2 = permanent brackets). 6 ICDM SFs are V5-only.

---

## 8. Risks & Issues for BB

| # | Risk | Impact | Mitigation |
|---|------|--------|-----------|
| R1 | F8.1 elevation coupling still open — N12 worm shaft question unanswered | Concept A viability unknown | V5 can modify V1 → more options than N12. Generate ≥3 WPs regardless. |
| R2 | V5 permanent bracket WPs (F7.2, F8.2) have no N12 precedent | New design work needed | Use RE competitor data (CROWS linear actuator, SARP sector gear brackets) |
| R3 | ICDM platform SFs (F11, F12) are first-time for WX | Integration risk | COTS solutions only. Shallow search depth. |
| R4 | 16 morpho rows × 3+ WPs each = large combinatorial space | Over-search risk | DSO pre-ranking + N12 inheritance reduces effective search space |

---

## 9. B0 Summary

| Check | Result |
|-------|:------:|
| Phase 1 inputs complete | ✅ 14/14 |
| Abstraction quality | ✅ PASS (5-step, solution-neutral) |
| Function structure (G1-G11) | ✅ PASS (10/11 guidelines, G7 CARS = BA) |
| Design type confirmed | ✅ ADAPTIVE |
| Morpho rows planned | ✅ 16 rows from 20 SFs |
| Constraints classified | ✅ All genuine (P-05 → recommend WISH) |
| ICDM inputs verified | ✅ 8/8 |
| N12 WP inheritance mapped | ✅ 10/14 SFs inherit |
| Risks identified | ✅ 4 risks, all mitigated |

**B0 RESULT: PROCEED to BA (Problem Frame)**

---

*B0 Preflight | helix-concept-generate v3.1 (ICDM) | 2026-04-11*
