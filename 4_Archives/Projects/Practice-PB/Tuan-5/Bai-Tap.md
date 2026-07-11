---
created: 2026-03-21
type: exercises
week: 5
anchor: VN-12.7MM-SIM
---

# Bài Tập Tuần 5 — Deep Phase 3: Embodiment Principles + Force Flow

## BT-5.1: 15-Step Checklist (T2, 60 phút)

**Mô tả:** Tạo executable checklist cho VN-12.7MM embodiment dựa trên 15 steps từ Ch7.1.

**Input:** Ch7.1 15 steps + VN-12.7MM current Phase 3 docs

**Output:** Checklist:
- All 15 steps listed with VN-12.7MM-specific actions
- Simultaneous vs sequential marking
- Current status per step (Done / In Progress / Not Started)
- Dependencies between steps

**Tiêu chí đạt:**
- [ ] All 15 steps listed
- [ ] Simultaneous steps grouped (not forced sequential)
- [ ] Each step has VN-12.7MM-specific action item
- [ ] Current status honestly assessed
- [ ] ≥3 steps identified as "should have been done earlier"

---

## BT-5.2: Three Rules Application (T3, 90 phút)

**Mô tả:** Score VN-12.7MM-SIM design trên 3 basic rules: Clarity, Simplicity, Safety.

**Input:** VN-12.7MM Phase 3 docs + Ch7.3 three basic rules

**Output:** Scoring table:
- Clarity: function clarity, layout clarity, production clarity (1-5 each)
- Simplicity: part count, assembly steps, maintenance steps (1-5 each)
- Safety: direct safety, indirect safety, protective safety (1-5 each)

**Tiêu chí đạt:**
- [ ] All 3 rules scored with sub-dimensions
- [ ] Each score justified with evidence from docs
- [ ] Lowest scores identified → improvement actions
- [ ] Safety rule: fail-safe mechanisms listed
- [ ] Compare: VN-12.7MM vs BB-01 (which scores better on each rule?)

---

## BT-5.3: Two-Channel Force Flow (T4, 2 giờ)

**Mô tả:** Trace 2 force channels trong VN-12.7MM: Channel A (recoil force path) + Channel B (pneumatic pressure path).

**Input:** VN-12.7MM mechanical design docs + Ch7.4.1-7.4.2

**Output:** Force flow diagrams:
- Channel A: trigger → bolt → recoil spring → receiver → mount → operator
- Channel B: air tank → regulator → cylinder → piston → bolt → reset
- Stress concentration points marked
- Direction changes counted
- Force path efficiency rating

**Tiêu chí đạt:**
- [ ] Both channels traced completely
- [ ] Direction changes counted (target: ≤3 per channel)
- [ ] Stress concentrations identified (≥2 per channel)
- [ ] Short/direct path principle evaluated
- [ ] Uniform force distribution checked at each joint
- [ ] ≥2 redesign suggestions to improve force flow

**Nếu bí:** Start with Channel A only. Trace from trigger pull to operator shoulder.

---

## BT-5.4: Self-Help + Fault-Free Analysis (T5, 90 phút)

**Mô tả:** Identify chi (χ) parameter cho mỗi critical joint + fault-free analysis cho VN-12.7MM.

**Input:** VN-12.7MM design + Ch7.4.3-7.4.5

**Output:**
- Self-help analysis: χ parameter for ≥3 critical joints
- Stability analysis: type of stability at each operating point
- Fault-free analysis: fail-safe vs fail-soft decisions
- Failure modes + consequences

**Tiêu chí đạt:**
- [ ] ≥3 critical joints analyzed for self-help (χ parameter)
- [ ] Self-reinforcing vs self-weakening joints identified
- [ ] Stability type classified for ≥3 operating conditions
- [ ] Fail-safe mechanisms listed (what happens when air pressure drops?)
- [ ] Fail-soft mechanisms listed (degraded operation modes)
- [ ] ≥3 failure modes with consequences ranked by severity

---

## BT-5.5: Embodiment Pattern Extraction — Set 1 (T6, 3 giờ = 28 phút × 6)

**Mô tả:** Cho mỗi example (MachineGunMount, LOMAH, SmallArms, TowedTarget, TargetUSV, RAMS):

**Output per example (28 phút each):**
- 2 embodiment patterns identified
- 1 principle violation identified (where design breaks a rule)
- 1 force flow insight (how forces are managed)

**Tiêu chí đạt:**
- [ ] 6 examples × 2 patterns = 12 patterns total
- [ ] 6 principle violations identified
- [ ] 6 force flow insights
- [ ] Patterns categorized by rule: Clarity / Simplicity / Safety / Force / Self-Help
- [ ] VN-12.7MM transfer: which patterns apply directly?

---

## BT-5.6: Embodiment Pattern Extraction — Set 2 (T7, 3 giờ = 28 phút × 7)

**Mô tả:** Cho mỗi example (ImpulseTestRig, UAVCatapult, TargetUAV, TetheredDrone, TrainingGrenade, RadarIR, NavalWeapon):

**Output per example (28 phút each):**
- 2 embodiment patterns identified
- 1 principle violation identified
- 1 force flow insight

**Tiêu chí đạt:**
- [ ] 7 examples × 2 patterns = 14 patterns total
- [ ] 7 principle violations identified
- [ ] 7 force flow insights
- [ ] Cumulative: 26 patterns across 13 examples → distill top 10
- [ ] Compare with Week 3 conceptual patterns: overlap? New insights?
- [ ] Galaxy candidates: any embodiment pattern worth a permanent note?

---

## BT-5.7: DELIVERABLE — 8-Criterion Principles Review VN-12.7MM (CN, 3 giờ)

**Mô tả:** Formal review VN-12.7MM design against 3 basic rules + 5 embodiment principles.

**Input:** BT-5.2 (three rules) + BT-5.3 (force flow) + BT-5.4 (self-help/fault-free) + patterns

**Output:** Formal deliverable:
- 8 criteria: Clarity, Simplicity, Safety, Force Transmission, Division of Tasks, Self-Help, Stability, Fault-Free
- Each criterion scored 1-5 with evidence
- ≥5 redesign suggestions with priority
- Force flow diagrams (clean, publishable)
- Failure mode summary

**Tiêu chí đạt:**
- [ ] All 8 criteria scored with evidence
- [ ] ≥5 redesign suggestions, prioritized (impact × effort)
- [ ] Force flow diagrams clean enough for design review
- [ ] Failure modes ranked by severity
- [ ] Output quality: presentable at WX design review
- [ ] Consistent with Phase 3 docs (no contradictions)
- [ ] Self-assessment rubric completed (all 5 dimensions scored)
