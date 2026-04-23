---
created: 2026-03-21
type: exercises
week: 6
anchor: VN-12.7MM-SIM
---

# Bài Tập Tuần 6 — Deep Phase 3: All DfX + Gate 3 + Capstone

## BT-6.1: DfM/DfA Review VN-12.7MM (T2, 60 phút)

**Mô tả:** Review VN-12.7MM-SIM cho manufacturability tại WX workshop + assembly sequence.

**Input:** VN-12.7MM Phase 3 docs + Ch7.5.8-9

**Output:**
- DfM assessment: part complexity, material selection, process selection
- DfA assessment: assembly sequence, part count, fastener count
- WX workshop capability check: can WX make this?

**Tiêu chí đạt:**
- [ ] Part count documented (target: reduce by 10-20%)
- [ ] Assembly sequence defined (≥10 steps)
- [ ] Each part assessed: WX-makeable / outsource / COTS
- [ ] ≥3 DfM improvements identified
- [ ] ≥3 DfA improvements identified (symmetry, self-locating, snap fits)
- [ ] Field assembly vs factory assembly differences noted

---

## BT-6.2: DfMaint/DfErgo Review (T3, 60 phút)

**Mô tả:** Review VN-12.7MM cho maintenance accessibility + operator ergonomics under stress.

**Input:** VN-12.7MM design + Ch7.5.10 + Ch7.5.6

**Output:**
- Maintenance review: O-ring replacement time, tool requirements, access points
- Ergonomics review: operator posture, weight, controls layout, stress factors
- Field conditions: heat, humidity, gloves, low light

**Tiêu chí đạt:**
- [ ] O-ring replacement spec: time, tools, skill level
- [ ] Maintenance access points mapped on layout
- [ ] ≥3 maintenance improvements identified
- [ ] Operator weight/balance assessed (can 1 person carry?)
- [ ] Controls usable with gloves?
- [ ] Ergonomics under training stress (fatigue, heat, time pressure)

---

## BT-6.3: FMEA-lite + Standards Compliance (T4, 90 phút)

**Mô tả:** Run simplified FMEA + map VN-12.7MM to applicable standards.

**Input:** VN-12.7MM design + Ch7.5.12-13

**Output:**
- FMEA-lite table: ≥5 failure modes with Severity × Occurrence × Detection
- Risk hierarchy applied: eliminate → reduce → protect → warn
- Standards compliance matrix: MIL-STD mapping

**Tiêu chí đạt:**
- [ ] ≥5 failure modes identified
- [ ] RPN (Risk Priority Number) calculated for each
- [ ] Top 3 RPNs have mitigation actions
- [ ] Risk hierarchy applied to each failure mode
- [ ] Applicable standards listed (MIL-STD, TCVN, NATO STANAG)
- [ ] Compliance status per standard: Compliant / Partial / Non-compliant / N/A

---

## BT-6.4: Material/Environment Review (T5, 60 phút)

**Mô tả:** Review VN-12.7MM cho tropical environment: thermal, corrosion, wear.

**Input:** VN-12.7MM material specs + Ch7.5.2-5

**Output:**
- Thermal expansion: CTE mismatch between mating parts
- Corrosion: material compatibility, coating requirements
- Wear: 4 types assessed for moving parts
- Vietnam-specific: humidity, salt air, temperature range

**Tiêu chí đạt:**
- [ ] CTE mismatch checked for ≥3 critical joints
- [ ] Galvanic corrosion risk assessed (dissimilar metals)
- [ ] Coating/surface treatment specified per part
- [ ] Wear type identified for each moving contact surface
- [ ] Vietnam tropical derating applied (temperature, humidity)
- [ ] Lifecycle estimate: hours to first maintenance per wear point

---

## BT-6.5: DELIVERABLE — 12-Topic DfX Report VN-12.7MM (T6, 3 giờ)

**Mô tả:** Consolidated DfX review covering all 12 topics for VN-12.7MM-SIM.

**Input:** BT-6.1 through BT-6.4 + Ch7.5 complete

**Output:** Formal deliverable — 12-topic DfX report:
1. DfFunction (from Week 5)
2. DfSafety (BT-6.3)
3. DfErgonomics (BT-6.2)
4. DfProduction/DfM (BT-6.1)
5. DfAssembly/DfA (BT-6.1)
6. DfMaintenance (BT-6.2)
7. DfExpansion (BT-6.4)
8. DfCorrosion (BT-6.4)
9. DfWear (BT-6.4)
10. DfStandards (BT-6.3)
11. DfCost (from VDI 2225 Week 4)
12. DfEnvironment/Tropical (BT-6.4)

**Tiêu chí đạt:**
- [ ] All 12 topics scored (1-5 scale)
- [ ] Each topic has: current status, evidence, priority actions
- [ ] Top 5 priority actions identified (highest impact)
- [ ] Cross-topic conflicts identified (e.g., DfM vs DfMaint tradeoff)
- [ ] Output quality: presentable at WX design review
- [ ] Action items have owner + timeline estimate

---

## BT-6.6: DELIVERABLE — Gate 3 Review VN-12.7MM (T7, 3 giờ)

**Mô tả:** Formal Gate 3 review cho VN-12.7MM-SIM. Verdict: GO / REVISE / NO-GO.

**Input:** All Week 5-6 deliverables + VN-12.7MM Phase 3 docs + Ch7.6

**Output:** Gate 3 review document:
- Dual technical-economic rating
- S-diagram (embodiment level)
- Evidence summary per criterion
- Open issues list
- Formal verdict with conditions

**Tiêu chí đạt:**
- [ ] ≥8 evaluation criteria (technical + economic)
- [ ] Dual rating with S-diagram
- [ ] 60% threshold applied
- [ ] Weak spots identified with mitigation plan
- [ ] Open issues categorized: blocking / non-blocking
- [ ] Verdict justified: GO (conditions) / REVISE (specific items) / NO-GO (reasons)
- [ ] Compare with Week 2 evaluation: improvement visible?
- [ ] Output quality: could be used as actual gate review document

---

## BT-6.7: CAPSTONE — Phase 2→3 for New Product, NO Notes (CN, 3 giờ)

**Mô tả:** Full Phase 2→3 cho new product. KHÔNG được dùng notes, tài liệu, NLM. Chỉ dùng trí nhớ.

**Input:** 1-paragraph product brief (tự viết). Gợi ý: drone-launched training target hoặc portable anti-tank simulator.

**Output:** From memory only:
- Phase 2: Abstraction → Function Structure → Morphological Matrix → VDI 2225 → Concept Selection
- Phase 3: 3 Basic Rules check → Force Flow → DfX highlights → Embodiment evaluation

**Tiêu chí đạt:**
- [ ] Phase 2 completed in <1 hour
- [ ] Phase 3 started correctly (15 steps awareness)
- [ ] 3 Basic Rules applied from memory
- [ ] Force flow traced for selected concept
- [ ] ≥3 DfX topics addressed from memory
- [ ] NO reference materials used (honor system)
- [ ] Self-critique: what was forgotten? What was confident?
- [ ] Feynman test: explain entire P&B flow to WX engineer in 10 minutes
- [ ] Final self-assessment: Competent confirmed? Expert (emerging)?
