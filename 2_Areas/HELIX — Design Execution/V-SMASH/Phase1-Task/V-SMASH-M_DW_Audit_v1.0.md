---
project: V-SMASH-M
phase: 1
type: dw-audit
prompt: P14
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Requirements_List_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — D/W Audit (P14)

> **Purpose:** 4 audit tasks on 68 requirements. Target: ≥80% quantified, 0 unresolved conflicts, all 16 categories covered.
> **D/W test:** "If NOT met → product fails purpose?" YES = D, NO = W.

---

## AUDIT 1 — D/W Classification Check

**Test applied:** For each requirement, "If this requirement is NOT met, does V-SMASH-M fail its core purpose (AI lead indicator for mass infantry anti-drone)?"

### Reclassifications Proposed

| Req ID | Current D/W | Test Result | Revised D/W | Reason |
|--------|-------------|-------------|-------------|--------|
| VM-G04 | W | Could function without co-witness? YES — V-M replaces red dot position, co-witness is nice-to-have | **W** (confirmed) | Soldier aims through V-M, not iron sights simultaneously |
| VM-E01 | W | Could function with non-standard battery? YES — any Li-ion works | **W** (confirmed) | Supply chain preference, not functional requirement |
| VM-E04 | W | Could function with slower charging? YES | **W** (confirmed) | Convenience, not mission-critical |
| VM-M01 | W | Could function with different housing material? YES — any impact-resistant polymer works | **W** (confirmed) | Manufacturing preference |
| VM-M04 | W | Could function without UV resistance? Product degrades over time but works day-1 | **W** (confirmed) | Durability wish, not functional |
| VM-S05 | W | Could function without BLE? YES — P11 says "operates fully standalone" | **W** (confirmed) | IRONMESH is value-add |
| VM-H05 | W | Could function with non-ideal eye relief? YES — awkward but usable | **W** (confirmed) | Ergonomic preference |
| VM-P02 | W | Could function if PCB exceeds SMT limits? YES — can outsource PCB assembly | **W** (confirmed) | Production convenience |
| VM-P03 | W | Could function at lower production rate? YES — slower delivery but product works | **W** (confirmed) | Business target, not product function |
| VM-P04 | W | Could function with more BOM components? YES — more complex but functional | **W** (confirmed) | Manufacturing manageability |
| VM-Q03 | W | Could function without environmental sample testing? YES — reduces confidence but product works | **W** (confirmed) | Quality assurance level |
| VM-A02 | W | Could function with longer assembly time? YES | **W** (confirmed) | Production efficiency |
| VM-T02 | W | Could function with different packaging? YES | **W** (confirmed) | Logistics preference |
| VM-N02 | W | Could function with longer depot MTTR? YES — slower turnaround but product works | **W** (confirmed) | Depot efficiency |
| VM-N04 | W | Could function without diagnostic LED? YES — depot uses test equipment | **W** (confirmed) | Maintainability convenience |
| VM-N05 | W | Could function without OTA update? YES — physical USB update works | **W** (confirmed) | Convenience |
| VM-C03 | W | Could function if NRE exceeds $50K? YES — product unchanged, business case changes | **W** (confirmed) | Business constraint |
| VM-C04 | W | Could function with higher warranty cost? YES | **W** (confirmed) | Business target |
| VM-D05 | W | Could function if ramp is slower? YES — product unchanged | **W** (confirmed) | Business schedule |
| VM-O07 | W | Could function without low-light detection? YES — V-M is daylight-primary, no NV | **W** (confirmed) | Nice-to-have capability |
| VM-G01 | D | If dimensions exceeded → doesn't fit Picatinny rail sight position → fails purpose? **YES** | **D** (confirmed) | Must fit in rail sight slot |
| VM-S02 | D | If latency >150ms → indicator lags behind drone → misaimed shots → fails purpose? **YES** | **D** (confirmed) | Core AI performance |
| VM-Y03 | D | If indicator shows during RED confidence → engagement of non-drone target → **SAFETY FAILURE** | **D** (confirmed) | [SAFETY-CRITICAL] — cannot reclassify per SAFETY_OVERRIDE |
| VM-N01 | D/W | Split: ≥1,500h is D (product fails if unreliable), ≥2,000h is W (better but not required) | **D at 1,500h / W at 2,000h** (confirmed) | C2 resolution |

**Proposed W→D reclassifications: 0**
**Proposed D→W reclassifications: 0**

All initial classifications hold. The split on VM-N01 (D at 1,500h / W at 2,000h) was already correctly captured in P13.

### Final D/W Count

| Class | Count | % |
|-------|-------|---|
| **D (Demand)** | **45** | 66% |
| **W (Wish)** | **23** | 34% |
| **Total** | **68** | 100% |

D/W ratio 66/34 is healthy for a simple component. Heavily D-weighted because V-M's "minimum viable" positioning means most features ARE the minimum.

---

## AUDIT 2 — Quantification Check

**Scale:** ✓ PASS (numeric + unit) · ⚠ PARTIAL (direction, no number) · ✗ FAIL (qualitative only)

| Req ID | Value / Limit | Check | Issue | Proposed Fix |
|--------|---------------|-------|-------|-------------|
| VM-G05 | "Yes — captive door, tool-free" | ⚠ PARTIAL | No metric — what does "tool-free" mean quantifiably? | → "Battery door opens with ≤20 N force, single-hand operation, no external tools" |
| VM-Y01 | "No autonomous fire capability" | ⚠ PARTIAL | Binary yes/no — but how to verify "physically incapable"? | → "Zero electrical connections between V-M and weapon trigger mechanism. Verify: wiring diagram inspection + continuity test = open circuit." |
| VM-M03 | "No cadmium, no asbestos, no beryllium" | ✓ PASS | Specific prohibited substances with identity | — |
| VM-H06 | "Single power button only" | ⚠ PARTIAL | Describes interface but no numeric metric | → "≤1 external control (power button). Zero menu selections required during operation." |
| VM-A03 | "Battery only. All other repair at depot." | ⚠ PARTIAL | No metric for "depot level" | → "Field-replaceable parts: 1 (battery). All other repairs require depot-level disassembly (≥2 fasteners requiring T10 Torx)." |
| VM-N03 | "None — zero-calibration design" | ⚠ PARTIAL | "Zero" is a number but verify method unclear | → "Zero user calibration steps. AI bore-sight alignment: automatic on power-on, ≤3 sec, ≤0.5 mrad residual error." |
| VM-O08 | "4 classes minimum" | ✓ PASS | Specific count + named classes | — |
| VM-T03 | "Not ITAR-controlled" | ⚠ PARTIAL | Regulatory status, not a quantified requirement | → "Export classification: EAR99 or equivalent non-controlled. If Jetson module = ECCN 3A991 or higher → obtain BIS ruling before Phase 3." |

### Quantification Summary

| Check | Count | % |
|-------|-------|---|
| ✓ PASS | **62** | **91.2%** |
| ⚠ PARTIAL | **6** | 8.8% |
| ✗ FAIL | **0** | 0% |
| **Total** | **68** | — |

**After fixes applied: 68/68 = 100% quantified. ✅** (target was ≥80%)

---

## AUDIT 3 — Conflict Check

**Scanning for numerical contradictions (Req-A demands X > N but Req-B demands X < M where M < N).**

| # | Conflict | Req A | Req B | Status |
|---|----------|-------|-------|--------|
| 1 | Weight budget vs component count | VM-G02 (≤0.5 kg) | VM-S01 (≥2 MP CMOS) + VM-S03 (≥60 Hz OLED) + VM-E02 (≥8h battery) → total component mass | **TENSION** — not a direct contradiction, but 0.5 kg is tight for Jetson + CMOS + OLED + optics + battery + housing. Phase 3 layout validates. |
| 2 | Power budget vs battery life | VM-E03 (≤2.5 W) vs VM-E02 (≥8h) with VM-E01 (21700 cell, ~18.5 Wh) | **CONSISTENT** — 18.5 Wh / 2.5 W = 7.4h. Marginal at ≤2.5W. Need ≤2.3W for 8h. | **FLAG** — VM-E03 should tighten to ≤2.3 W to guarantee VM-E02 with single 21700 cell. |
| 3 | Detection range vs weight | VM-O06 (≥200m detection) requires larger optic → more weight vs VM-G02 (≤0.5 kg) | **RESOLVED** — C1 resolution: 200m is target, 150m is kill threshold. Weight ceiling is hard D. |
| 4 | IP67 main body vs IP65 battery door | VM-O04 (IPX7 main) vs VM-O05 (IPX5 battery door) | **CONSISTENT** — different IP ratings for different zones is intentional (C3 resolution). Not a conflict. |
| 5 | Latency vs IFF safety | VM-S02 (≤150 ms) vs VM-Y03 (no indicator when <70% confidence) | **RESOLVED** — C4 resolution: parallel pipeline. IFF classification completes within same 150 ms budget. |

### Conflict Resolution Actions

| # | Action | Owner |
|---|--------|-------|
| 1 | Validate total component mass at Phase 3 layout. If >0.5 kg, reduce detection range (per C1). | Phase 3 |
| 2 | **Tighten VM-E03 from ≤2.5 W to ≤2.3 W** to ensure 8h battery life with single 21700 cell. | **Apply now** |

**Direct numerical contradictions: 0.** One tightening action required (VM-E03).

---

## AUDIT 4 — Coverage Check

**Checking all 16 categories have ≥2 requirements.**

| Category | Count | Min Met? | Note |
|----------|-------|----------|------|
| 1. Geometry | 5 | ✅ | |
| 2. Kinematics | 2 | ✅ | Minimum — consider adding if Phase 2 reveals more motion requirements |
| 3. Forces | 3 | ✅ | |
| 4. Energy | 5 | ✅ | |
| 5. Material | 4 | ✅ | |
| 6. Signals | 7 | ✅ | Heaviest — expected for AI signal processing product |
| 7. Safety | 5 | ✅ | All [SAFETY-CRITICAL] |
| 8. Ergonomics | 6 | ✅ | |
| 9. Production | 4 | ✅ | |
| 10. Quality Control | 3 | ✅ | |
| 11. Assembly | 3 | ✅ | |
| 12. Transport | 3 | ✅ | |
| 13. Operation | 8 | ✅ | Second heaviest — environmental + performance |
| 14. Maintenance | 5 | ✅ | |
| 15. Costs | 4 | ✅ | |
| 16. Schedules | 5 | ✅ | |

**All 16 categories ≥2 requirements. ✅**
**No under-specified categories.**

---

## AUDIT SUMMARY

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **Total requirements** | **78** (68 original + 10 QC amendments) | 50-80 | ✅ Near upper bound — justified by QC completeness |
| **D (Demand)** | **54** (69%) | — | +9D from QC (HIGH: VM-S08, VM-E06, VM-O09, VM-N04 W→D; MEDIUM: VM-O10, VM-O11, VM-Y06, VM-M05, VM-N06) |
| **W (Wish)** | 24 (31%) | — | +2W (VM-S09, VM-E07) |
| **Quantified** | **78/78 post-QC (100%)** | ≥80% | ✅ Exceeds |
| **Conflicts** | 0 direct contradictions | 0 | ✅ |
| **Tensions flagged** | 2 (weight budget, power budget) | — | Tracked for Phase 3 |
| **Under-specified categories** | 0 | 0 | ✅ |
| **[SAFETY-CRITICAL]** | 4 (VM-Y01, VM-Y02, VM-Y03, VM-Y04) | — | ✅ |
| **[ASSUMPTION]** | 21/78 (27%) | ≤15% at gate | ⚠ Acceptable for greenfield; +3 from MEDIUM amendments |
| **[ESTIMATE]** | 5 (VM-O07, VM-T03, VM-C03, VM-C04, VM-D05) | 0 at gate | ⚠ Need sources |

### Recommended Changes to Requirements List

| # | Change | Req ID | From | To |
|---|--------|--------|------|----|
| 1 | Tighten power consumption | VM-E03 | ≤2.5 W | **≤2.3 W** |
| 2 | Quantify battery door force | VM-G05 | "captive door, tool-free" | **"≤20 N single-hand, no tools"** |
| 3 | Quantify no-fire-gate verification | VM-Y01 | "physically incapable" | **"Zero trigger electrical connections. Verify: continuity test = open circuit."** |
| 4 | Quantify single control | VM-H06 | "Single power button only" | **"≤1 external control. Zero menu selections during operation."** |
| 5 | Quantify depot boundary | VM-A03 | "Battery only. All other at depot." | **"Field-replaceable: 1 (battery). Depot: ≥2 fasteners requiring T10 Torx."** |
| 6 | Quantify zero-calibration | VM-N03 | "Zero-calibration design" | **"Zero user calibration. Auto bore-sight: ≤3 sec, ≤0.5 mrad residual."** |
| 7 | Quantify export classification | VM-T03 | "Not ITAR-controlled" | **"EAR99 target. ECCN ≥3A991 → obtain BIS ruling before Phase 3."** |

### QC Run #12 Amendments (2026-02-22)

| # | Change | Req ID | Type | Rationale |
|---|--------|--------|------|-----------|
| 8 | Add optical FOV requirement | **VM-S08** (new D) | Binding gap | Sensor resolution (VM-S01) + detection range (VM-O06) unbound without FOV spec |
| 9 | Add optical f-number | **VM-S09** (new W) | Low-light support | Light-gathering for VM-O07 dusk/dawn performance |
| 10 | Add cold-temp battery life | **VM-E06** (new D) | Physics gap | Li-ion capacity drops 30-40% at -10°C → 8h claim invalid at lower operating limit |
| 11 | Add detection probability | **VM-O09** (new D) | Dual-error gap | Only FPR (VM-Y04) was specified. Pd completes both error directions. |
| 12 | Upgrade fault indicator | **VM-N04** (W→D) | Safety-adjacent | AI fault indistinguishable from power-off → soldier unaware system is faulted |

### QC Run #12 MEDIUM Amendments (2026-02-22)

| # | Change | Req ID | Type | Rationale |
|---|--------|--------|------|-----------|
| 13 | Rename IFF → classification confidence | **VM-S04, VM-Y03** (text clarification) | ROE boundary | System classifies object type (drone/bird), NOT friend/foe. "IFF" was misleading. |
| 14 | Add EMC/EMI immunity | **VM-O10** (new D) | Regulatory gap | BLE 5.0 radio in military RF environment — no EMC standard referenced |
| 15 | Add EMC/EMI emissions | **VM-O11** (new D) | Regulatory gap | BLE transmitter could interfere with military comms |
| 16 | Add AI safety standard | **VM-Y06** (new D) | Safety standard gap | Safety-critical AI classification with no referenced safety assessment framework |
| 17 | Add thermal management | **VM-M05** (new D) | Environmental gap | Jetson 5-10W TDP in sealed IP67 at +55°C — no thermal path defined |
| 18 | Add peak power draw | **VM-E07** (new W) | Power budget gap | Average ≠ peak; battery voltage sag at peak could brownout system |
| 19 | Add degraded mode behavior | **VM-N06** (new D) | State machine gap | Partial HW failure → stale/incorrect indicator without operator awareness |

### Verdict: **PROCEED** to P15 Gate Review

All gate preconditions met:
- ✅ ≥80% quantified (100% after all QC amendments)
- ✅ 0 unresolved conflicts
- ✅ All 16 categories covered
- ⚠ 21 [ASSUMPTION] tags (27%) — acceptable for V-M's greenfield market. +3 from MEDIUM amendments (EMC assumptions pending G6 TCVN standards, peak power pending Phase 2 architecture).

### Remaining non-requirement actions (from QC Run #12)
- CHK-06: Prioritize G5 field validation (bird misclassification data) — field action, not requirement
- CHK-10: Estimate local content % at BOM level + identify Jetson alternative — Phase 3 BOM activity
- CHK-11: Plan independent gate review for Phase 3+ — process action
