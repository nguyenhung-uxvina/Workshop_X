---
created: 2026-03-21
type: exercises
week: 1
anchor: VN-12.7MM-SIM
---

# Bài Tập Tuần 1 — Overview Phase 0-1

## BT-1.1: E/M/S Full Analysis cho VN-12.7MM-SIM (T2, 60 phút)

**Mô tả:** Vẽ complete E/M/S flow diagram cho toàn hệ thống VN-12.7MM-SIM.

**Input:** `1_Projects/VN-12.7MM-SIM/_Project_Brief.md` + Phase 3 docs (12 docs)

**Output:** Diagram A3 (hoặc digital):
- Energy flows: recoil, pneumatic pressure, electrical power, spring, thermal
- Material flows: compressed air, bolt movement, mounting structure
- Signal flows: trigger, sensor, display, feedback, safety interlock

**Tiêu chí đạt:**
- [ ] ≥5 Energy flows identified
- [ ] ≥3 Material flows identified
- [ ] ≥5 Signal flows identified
- [ ] Flow interactions marked (where E crosses M, where S controls E)
- [ ] Domain assignment: Mechanical / Electrical / AI per flow

**Nếu bí:** Trace ONE complete firing sequence: trigger pull → recoil → reset.

---

## BT-1.2: 4-Level Systems Hierarchy (T3, 60 phút)

**Mô tả:** System → Subsystem → Assembly → Component cho VN-12.7MM-SIM.

**Output:** Tree diagram 4 levels, mỗi level ghi Function + Interfaces.

**Tiêu chí đạt:**
- [ ] ≥4 subsystems identified
- [ ] ≥3 assemblies per subsystem
- [ ] ≥2 components per assembly
- [ ] Function (NOT construction) ở mỗi level
- [ ] Interfaces between subsystems marked

---

## BT-1.3: Reverse-Engineer P12 cho VN-12.7MM-SIM (T3, 60 phút)

**Mô tả:** VN-12.7MM-SIM đang Phase 3 nhưng P12 có thể chưa formal. Viết P12 Development Specification retrospectively.

**Output:** P12 document: scope, constraints, success criteria, development timeline.

**Tiêu chí đạt:**
- [ ] P12 consistent với 12 docs hiện có
- [ ] Gaps identified (nếu có)
- [ ] Success criteria measurable

---

## BT-1.4: Iteration Map cho VN-12.7MM-SIM (T4, 60 phút)

**Mô tả:** Map lịch sử phát triển VN-12.7MM-SIM vào 6-phase problem solving model.

**Output:** Iteration timeline + 3 lessons learned.

**Tiêu chí đạt:**
- [ ] Iterations marked on timeline
- [ ] Phase skips identified
- [ ] ≥3 lessons learned extracted
- [ ] Connect to Loop-Size Law: which loops were small (good) vs large (costly)?

---

## BT-1.5: Requirements Quality Audit (T5, 60 phút)

**Mô tả:** Audit Doc 002 (205 requirements) cho VN-12.7MM-SIM.

**Output:** Quality score + improvement actions.

**Tiêu chí đạt:**
- [ ] % quantified calculated
- [ ] D/W/X distribution mapped
- [ ] Missing categories identified
- [ ] Compare patterns vs VN-AST (103 reqs) và VN-XUONG (107 reqs)
- [ ] Connect to D/W Structural Law: any D/W misclassifications?

---

## BT-1.6: Framework Integration Map (T6, 60 phút)

**Mô tả:** Vẽ diagram: P&B × DMIR × ODI × FORGE/HELIX — chồng lên nhau thế nào?

**Output:** 1-page integration map + 3 integration insights.

**Tiêu chí đạt:**
- [ ] Synergies identified (where frameworks reinforce)
- [ ] Conflicts identified (where frameworks contradict)
- [ ] Gaps identified (what no framework covers)

---

## BT-1.7: PDF vs Markdown Gap Analysis (T7, tích hợp)

**Mô tả:** Đọc PDF Ch1-Ch5, list concepts/diagrams mà markdown files thiếu.

**Output:** ≥5 gaps identified + coverage % estimate.

**Tiêu chí đạt:**
- [ ] ≥5 concepts/diagrams from PDF not in markdown
- [ ] Coverage estimate: markdown = ___% of PDF content
- [ ] Priority gaps: which missing concepts matter most for VN-12.7MM?

---

## BT-1.8: Tuần 1 Integration (CN, 60 phút)

**Mô tả:** Tổng hợp tất cả bài tập tuần 1 thành 1-page summary.

**Output:** "Tuần 1 Summary" — key learnings, surprises, gaps, VN-12.7MM insights.

**Tiêu chí đạt:**
- [ ] 1 page max
- [ ] ≥3 surprises documented
- [ ] ≥2 VN-12.7MM insights that change Phase 3 thinking
- [ ] Galaxy candidates listed (backlog)
- [ ] Feynman test: giải thích P&B flow cho kỹ sư WX trong 5 phút
