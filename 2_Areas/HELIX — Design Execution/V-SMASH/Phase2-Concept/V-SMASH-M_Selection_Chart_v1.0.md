---
project: V-SMASH-M
phase: 2
type: selection-chart
prompt: P20
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Concept_Sketch_Review_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
qc_run: pending
---

# V-SMASH-M (Micro-Sight) — Selection Chart (P20)

> **Purpose:** Binary elimination on 6 criteria. Quick cull before detailed VDI 2225 scoring.
> **Rule:** Any − on A, B, or C eliminates immediately. − on D, E, F triggers revise-or-eliminate.
> **Minimum survivors:** 2 for VDI comparison to be meaningful.

---

## Selection Chart

| Criterion | α Proven Baseline | β Budget Fighter | γ Smart Compact | δ Night Edge | ε Innovation Probe |
|-----------|:-:|:-:|:-:|:-:|:-:|
| **A: Compatible with all requirements?** | + | − | + | ? | ? |
| **B: Fulfills all DEMANDS (D)?** | + | − | + | ? | ? |
| **C: Technically realizable (WX skills + budget + Q4 2026)?** | + | + | + | + | − |
| **D: Cost within budget (≤$500)?** | + | + | + | + | + |
| **E: Safety measures adequate?** | + | + | + | + | + |
| **F: Fits Workshop X capabilities?** | + | + | + | ? | − |

---

## Criterion-by-Criterion Analysis

### A: Compatible with all requirements?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **α** | **+** | All 78 requirements addressable. No known incompatibility. |
| **β** | **−** | VM-S06 (≤1.0 mrad lead accuracy, DEMAND) — LED ring provides ~90-170 mrad per sector. Non-compliant by 2 orders of magnitude. Also: VM-H04 (≥1,000 nits display readability) — LED ring has no display. VM-S03 (≥60 Hz refresh) — LED ring is binary (on/off per sector), no refresh rate concept in the display sense. |
| **γ** | **+** | All requirements addressable. VM-H06 ("≤1 external control, zero menu selections") — rocker switch is 1 additional control. Requirement says "≤1 external control (power button)" which technically excludes range rocker. However, VM-H06 is D-classified. **? if interpreted strictly.** Counter-argument: rocker is non-menu, single physical action, and enables significantly better lead accuracy. **Marking + with note — address at VDI.** |
| **δ** | **?** | VM-E02 (≥8h battery, DEMAND) — at risk. NIR sensor +150-300mW may reduce battery to 7.1h. Mitigation available (larger cell +15g). If mitigated: +. If not: −. **Resolve: assume mitigation (larger 21700 cell, 5100mAh). Weight impact: +15g → 0.465 kg total, within HC-2 (0.5 kg).** → **Resolved to +.** |
| **ε** | **?** | Temporal parallax range estimation may not achieve VM-S06 accuracy (≤1.0 mrad lead) if range estimate has >50% error. At 200m with marginal SNR, range error could be >50% → lead error >1.0 mrad. **Cannot confirm compliance without prototype testing.** → Mark ? but TRL gates this at criterion C anyway. |

### B: Fulfills all DEMANDS (D)?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **α** | **+** | All 54 D-classified requirements addressed. Key demands: VM-S06 (OLED overlay provides sub-mrad positioning), VM-Y03/Y04 (YOLO + temporal gate), VM-G02 (estimated 0.42 kg), VM-C01 (BOM $250-350), VM-E02 (8h+ with 21700 at 2.3W). |
| **β** | **−** | FAILS VM-S06 (D), VM-S03 (D), VM-H04 (D). Three D-requirement failures. |
| **γ** | **+** | All D requirements addressed. VM-H06 interpretation: "≤1 external control" — if range rocker counts as 2nd control, this is a D-failure. However, power button + range rocker could be combined (e.g., power ring around rocker). Alternatively, range rocker could be recessed/detented to be part of the body, not an "external control" in the ergonomic sense. **Marking + — resolvable in embodiment.** |
| **δ** | **?→+** | After mitigation (larger cell): all D requirements met. VM-E02 resolved with 5100mAh cell (8.1h at 2.6W worst case). |
| **ε** | **?** | VM-S06 compliance uncertain. But moot — eliminated at C. |

### C: Technically realizable (WX skills + budget + Q4 2026 timeline)?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **α** | **+** | YOLO: WX has V-L experience. OLED assembly: red-dot sight lineage, commercially available optical trains. PCB: within WX SMT capability. Timeline: achievable within 6-month development. |
| **β** | **+** | Simplest concept. Technically trivial. (Eliminated on A/B already.) |
| **γ** | **+** | MobileNet: well-documented, easier to train than YOLO. Hailo-8 SDK: mature. Rocker: standard component. OLED: same as α. Timeline: achievable. |
| **δ** | **+** | Technically realizable but tight on schedule. NIR data collection (+2-3 weeks), Bayesian gate implementation (+2-4 weeks), NIR optical integration (+1-2 weeks). Total: +6-9 weeks vs α. Still within Q4 2026 if started in Q2. |
| **ε** | **−** | Temporal parallax: TRL 2-3. No known military implementation. Requires: (a) IMU-camera synchronization R&D, (b) SfM algorithm development for micro-baselines, (c) recoil-environment testing, (d) proof-of-concept before committing. Estimated 6-12 months R&D before production-ready. **Exceeds Q4 2026 timeline.** |

### D: Cost within budget (≤$500 unit cost)?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **All** | **+** | α: $250-350, β: $120-180, γ: $230-320, δ: $280-380, ε: $250-350. All within $500 ceiling. |

### E: Safety measures adequate?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **All** | **+** | All concepts maintain HC-1 (no fire gate), SF4 confidence gating (VM-Y03), safe power failure (VM-Y02). No concept introduces autonomous engagement capability. Safety architecture is identical across α/γ/δ/ε (threshold or Bayesian gate → suppress indicator when uncertain). β has same safety architecture but doesn't reach aiming stage. |

### F: Fits Workshop X capabilities?

| Concept | Score | Rationale |
|---------|-------|-----------|
| **α** | **+** | All components within WX capability. OLED alignment jig is only new equipment (~$2K). |
| **β** | **+** | Simplest. Fully within WX capability. |
| **γ** | **+** | Similar to α. Hailo-8 integration is new but SDK is mature. MobileNet training is simpler than YOLO. |
| **δ** | **?→+** | NIR data collection and Bayesian gate require new skills but not new equipment. Training data collection needs drone flights at dusk — requires scheduling, not capital. Mark + with development investment noted. |
| **ε** | **−** | SfM/VIO expertise not in WX. Would require external hire or partnership. IMU calibration in recoil environment requires specialized test equipment. |

---

## Elimination Log

| Concept | Eliminated? | Criterion Failed | Reason | Reversible? |
|---------|:-:|:-:|--------|:-:|
| **β Budget Fighter** | **YES** | A, B | VM-S06 (D): LED ring ≈90-170 mrad vs ≤1.0 mrad required. 2 orders of magnitude non-compliant. Also fails VM-S03 (D), VM-H04 (D). | No — fundamental display limitation. |
| **ε Innovation Probe** | **YES** | C, F | TRL 2-3. No military implementation. 6-12 month R&D exceeds Q4 2026 deadline. WX lacks SfM expertise. | Not within current timeline. Documented as future R&D candidate. |

---

## ? Resolution Summary

| Concept | Criterion | Original | Resolved | How |
|---------|-----------|----------|----------|-----|
| δ | A | ? (battery) | + | Larger 5100mAh cell: 8.1h at 2.6W, +15g → 0.465 kg (within HC-2) |
| δ | B | ? | + | Same mitigation |
| δ | F | ? | + | New skills (NIR data, Bayesian gate) but no new equipment |

---

## Result

**ELIMINATED:** β (criterion A/B — display non-compliance), ε (criterion C/F — TRL/timeline/capability)

**SURVIVING FOR VDI 2225:**

| # | Concept | Key Differentiator |
|---|---------|-------------------|
| 1 | **α — Proven Baseline** | YOLO + OLED + size-based range. Lowest risk. V-L reuse. |
| 2 | **γ — Smart Compact** | MobileNet + OLED + operator range bands. Lower compute. Better range accuracy (if operator cooperates). |
| 3 | **δ — Night Edge** | NIR + YOLO + OLED + Bayesian gate. Dusk/dawn capability. Higher dev effort. |

**3 survivors ≥ 2 minimum → proceed to P21 VDI 2225 Evaluation.**

---

## HITL CHECKPOINT

Before P21 scoring:
1. **Concept γ VM-H06 interpretation** — range rocker as 2nd control. I'm carrying γ forward on the basis that it's resolvable in embodiment (combined power/range control, or recessed rocker). Agree?
2. **Concept δ battery mitigation** — accepted larger cell (+15g, 0.465 kg). Within HC-2 margin. OK?
3. **3 survivors** — α, γ, δ. Good mix of safe/balanced/premium. Proceed to VDI?

**Proceeding to P21.**
