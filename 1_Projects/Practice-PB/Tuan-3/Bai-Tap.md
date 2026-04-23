---
created: 2026-03-21
type: exercises
week: 3
anchor: VN-12.7MM-SIM
---

# Bài Tập Tuần 3 — Deep Phase 2: Abstraction + Function Structure

## BT-3.1: 5-Step Abstraction × 3 Products (T2, 90 phút)

**Mô tả:** Chạy 5-step abstraction cho 3 sản phẩm ở 3 mức độ khó.

**Input:**
- Easy: BB-01 LOMAH (đã quen)
- Medium: VN-12.7MM-SIM (anchor product)
- Hard: Sản phẩm tưởng tượng (tự chọn)

**Output:** 3 abstractions, mỗi cái gồm:
- Step 1: Bỏ personal preferences
- Step 2: Bỏ requirements không liên quan function
- Step 3: Quantify → qualitative
- Step 4: Generalize → solution-neutral
- Step 5: Formulate core problem

**Tiêu chí đạt:**
- [ ] 3 abstractions completed
- [ ] BB-01: <10 phút (easy benchmark)
- [ ] VN-12.7MM: <15 phút, solution-neutral
- [ ] Imaginary: <20 phút, no anchoring to known solutions
- [ ] Zero solution words in final abstraction (no "pneumatic", "sensor", etc.)
- [ ] Each abstraction validated: "could this be solved with a completely different technology?"

---

## BT-3.2: 6-Flow Function Structure VN-12.7MM (T3, 2 giờ)

**Mô tả:** Xây complete function structure cho VN-12.7MM-SIM với 6-flow assignment.

**Input:** BT-3.1 abstraction + VN-12.7MM project docs

**Output:** Function structure diagram:
- Overall function
- ≥7 subfunctions
- 6 flows: Energy, Material, Signal, Data, Computation, Trust
- Solution-determining subfunction(s) marked

**Tiêu chí đạt:**
- [ ] Overall function derived from abstraction (not from existing design)
- [ ] ≥7 subfunctions identified
- [ ] All 6 flow types assigned to relevant subfunctions
- [ ] Solution-determining subfunction identified + justified
- [ ] Domain assignment: Mechanical / Electrical / Software per subfunction
- [ ] Interfaces between subfunctions marked
- [ ] Cross-check: does structure support ALL requirements from Doc 002?

**Nếu bí:** Start with E/M/S only, add D/C/T flows in second pass.

---

## BT-3.3: Working Principles Matrix (T4, 60 phút)

**Mô tả:** Cho mỗi subfunction từ BT-3.2, tìm ≥3 working principles.

**Input:** BT-3.2 function structure

**Output:** Matrix:
- Rows: subfunctions
- Columns: working principle options (≥3 per row)
- Notes: pros/cons, VN availability

**Tiêu chí đạt:**
- [ ] All subfunctions covered
- [ ] ≥3 working principles per subfunction
- [ ] At least 1 unconventional principle per subfunction
- [ ] VN supply chain feasibility noted
- [ ] Incompatible combinations marked

---

## BT-3.4: Pattern Extraction — Worked Examples Set 1 (T5, 3 giờ = 36 phút × 5)

**Mô tả:** Cho mỗi example (UAV Catapult, Training Grenade, LOMAH, Small Arms Sim, Target USV):

**Output per example (36 phút each):**
- 3 patterns identified (reusable design moves)
- 1 mistake or trap identified (what went wrong or was avoided)
- 1 VN-12.7MM transfer insight (how to apply this pattern)

**Tiêu chí đạt:**
- [ ] 5 examples × 3 patterns = 15 patterns total
- [ ] 5 mistakes/traps identified
- [ ] 5 VN-12.7MM transfer insights
- [ ] Patterns categorized: abstraction / function / working principle / evaluation
- [ ] Cross-example patterns identified (patterns appearing in ≥3 examples)

---

## BT-3.5: Pattern Extraction — Worked Examples Set 2 (T6, 3 giờ = 36 phút × 5)

**Mô tả:** Cho mỗi example (Naval Weapon Sim, Machine Gun Mount, RCWS 12.7mm, RCWS Sim, B41 RPG):

**Output per example:** Same format as BT-3.4.

**Tiêu chí đạt:**
- [ ] 5 examples × 3 patterns = 15 patterns total
- [ ] 5 mistakes/traps identified
- [ ] 5 VN-12.7MM transfer insights
- [ ] Compare patterns Set 2 vs Set 1: common threads?
- [ ] RCWS 12.7mm: đặc biệt relevant cho VN-12.7MM — extra detail

---

## BT-3.6: Pattern Extraction — Worked Examples Set 3 (T7, 3 giờ = 36 phút × 5)

**Mô tả:** Cho mỗi example (Radar IR, Artillery/Mortar/MANPADS, Maritime Law, Naval AK176, RAMS AI):

**Output per example:** Same format as BT-3.4.

**Tiêu chí đạt:**
- [ ] 5 examples × 3 patterns = 15 patterns total
- [ ] 5 mistakes/traps identified
- [ ] 5 VN-12.7MM transfer insights
- [ ] Cumulative: 45 patterns across 15 examples → distill top 10
- [ ] Galaxy candidates: any pattern worth a permanent note?

---

## BT-3.7: DELIVERABLE — Final Abstraction + Function Structure (CN, 3 giờ)

**Mô tả:** Tổng hợp toàn bộ tuần 3 → publishable-quality abstraction + function structure cho VN-12.7MM-SIM.

**Input:** BT-3.1 abstraction + BT-3.2 function structure + patterns from BT-3.4/3.5/3.6

**Output:** Formal deliverable:
- 5-step abstraction (refined, final)
- 6-flow function structure (clean diagram)
- Solution-determining subfunction analysis
- Top 10 patterns from 15 examples (distilled)
- VN-12.7MM Phase 3 implications

**Tiêu chí đạt:**
- [ ] Abstraction is solution-neutral (peer review test)
- [ ] Function structure has ≥7 SF with all 6 flows
- [ ] Solution-determining SF justified with evidence
- [ ] Output quality: could be included in VN-12.7MM project docs
- [ ] Consistent with Doc 002 requirements
- [ ] Peer reviewable: another engineer can understand without explanation
- [ ] Self-assessment rubric completed (all 5 dimensions scored)
