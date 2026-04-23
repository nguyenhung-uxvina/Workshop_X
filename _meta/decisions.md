# Decision Log

> Design decisions with context, alternatives, and rationale.
> Captures CEO judgment (Core per COD) in searchable, linkable form.

## [2026-03-26] VN-XUONG-UUV — PD-10 v3: 3 V-blocks + Tail Overhang
- **Decision:** UHMWPE sheet LOẠI BỎ. 3 V-blocks (UHMWPE-lined, 60°) trên rails tại body section only. Tail section (fins, propeller, connector, cable exit) overhang tự do — ZERO contact.
- **Rationale:** UUV tail có 4 control fins (W=600mm), propeller 5 cánh, connector housing. Bất kỳ contact nào = damage. V-blocks chỉ chạm body cylinder smooth D=400mm. 3-point support = stable. Torpedo rack principle.
- **V-block positions:** 1.0m, 2.5m, 3.8m from nose. Tail starts ~4.0m → 200mm clearance to last block.

## [2026-03-26] VN-XUONG-UUV — R5 Recovery Redesign (PD-2, PD-10, PD-11)
- **Decision:** SWITCH recovery from ramp-winch to R5 (alongside + strap + davit). Launch via ramp unchanged.
- **PD-2 REVISED:** Genset LOẠI BỎ → battery 24VDC only (davit hoist + nav/comms)
- **PD-10 REVISED:** V-saddle → V-blocks + UHMWPE sheet + toggle clamps (launch-only)
- **PD-11 NEW:** Recovery = alongside + fender + lifting sling + davit SWL 600kg
- **Rationale:** CEO priority shift: launch >> recovery. R5 eliminates SPOF genset (CFMA F4.2 ★★), removes 8 critical failure modes, saves $152K + 570kg. Recovery alongside proven for ROV operations. Davit = 24VDC from battery.
- **ICD action:** 3 new questions to OEM (lifting points, contact points, buoyancy data)
- **Cost impact:** $517K → ~$365K (-29%)
- **Risk:** Alongside recovery in SS3 requires fender + crew skill. Mitigated by: tethered UUV = predictable position.

## [2026-03-26] VN-XUONG-UUV — Concept D Catamaran PARKED
- **Decision:** PARK catamaran drop-through concept. Keep monohull baseline for Gate 2.
- **Rationale:** First-principles: catamaran wins 7/10 criteria (launch simplicity, stability GM>>2m, cost -$130K, weight -400kg, 8 fewer CFMA failure modes, speed, transit protection). Loses on 1 CRITICAL: recovery in SS 3 between hulls = UNKNOWN, zero precedent. Binding constraint F3 not resolved.
- **Next action:** Targeted research "catamaran UUV recovery between hulls sea state". If positive → revisit post-Gate 2.
- **Trigger to revisit:** Monohull recovery test (MVP-01) fails, OR research finds catamaran UUV LARS precedent.

## DR-2026-03-26-01: VN-XUONG-UUV PD-10 — Passive Cradle + Buoyancy Release

**Date:** 2026-03-26 | **Project:** VN-XUONG-UUV | **Phase:** 2
**Decision:** 3 quyết định từ First Principles analysis (cradle release mechanism):

1. **Xe nôi passive:** Loại bỏ toggle clamps khỏi xe nôi → chỉ V-saddle UHMWPE 60°, depth 150mm. Zero moving parts trên xe nôi. Toggle clamps chuyển lên boong tại stowage position (4 × fixed on deck beams).
2. **Buoyancy passive release:** Xe nôi ngập hoàn toàn (~3-4m dưới mặt nước). UUV buoyancy > gravity → UUV nổi tự tách ra V-saddle. Zero mechanism nhả.
3. **Pendant cable ≥ 8m:** Ramp 5.3m + 3m ngập = cáp tời phải đủ dài cho xe nôi xuống đáy ramp ngập.

**Alternatives considered:**
- Toggle clamps on cradle (current Doc 007) — rejected: unclear release mechanism underwater, adds moving parts to saltwater-exposed component, OP1 must reach stern to toggle
- Active release (hydraulic/electric latch) — rejected: complexity, failure mode underwater, cost
- Cradle stops at waterline, UUV slides off — rejected: UUV chưa đủ ngập, uncontrolled slide

**Rationale:** Bedrock truth: UUV nổi (TNKCT 20.12). On ramp: gravity holds UUV in V-saddle (F_lateral = 1,122 N at 12°). In water: buoyancy > gravity → UUV floats up out of saddle passively. Stowage clamps on deck = OP1 works standing at midship (SA-02 improved). Xe nôi zero moving parts = zero saltwater corrosion mechanism, lighter (-10-20 kg), simpler maintenance.

**Files updated:** Doc 007 (F2.2, F2.2a, F2.6, notes), Doc 010 (§2.1 LARS section, §4.2 PD-10)

---

## DR-2026-03-25-04: VN-XUONG-UUV PD-9 — Head-First Launch + Cable Guide Tube

**Date:** 2026-03-25 | **Project:** VN-XUONG-UUV | **Phase:** 2
**Decision:** 3 quyết định từ First Principles analysis (launch orientation):

1. **TNKCT 20.10 correction:** "Đuôi trước (tail first)" → "Mũi trước (head first)" — consistent với 20.14 (thu hồi mũi trước)
2. **Cable guide tube:** Ống dẫn cáp nhôm 25mm hàn dọc mạn ramp (port side), ~4-5m, ~3 kg, ~$100
3. **Galaxy note update:** Launch Orientation Law cập nhật với confirmed cable exit at tail → resolved head-first

**New confirmed data [L2]:** Dây điều khiển (fiber optic tether) đi ra từ phần đuôi UUV.

**Alternatives considered:**
- Tail-first launch (TNKCT v1) — rejected: inconsistent với nose-first recovery → cần xoay 180° (unsafe, complex)
- Tail-first recovery — rejected: cable exit enters funnel → fouling risk → mất tether → mất UUV ($100K+)
- Adjustable orientation — rejected: mechanism xoay 550 kg trên SS 3 = unsafe

**Rationale:** 3 bedrock constraints xếp theo priority: (1) cable fouling prevention (safety), (2) L/R consistency (no rotation), (3) forward approach controllability. Head-first satisfies all 3. Only cost: cable guide tube 3 kg/$100. TNKCT had internal contradiction (20.10 tail-first vs 20.14 nose-first) — now resolved.

**Files updated:** TNKCT (20.10), Doc 010 (§2.1 cable section), Galaxy note (Launch Orientation Law)

---

## DR-2026-03-25-03: VN-XUONG-UUV PD-8 — LARS Tích Hợp + Ramp 12° Cố Định

**Date:** 2026-03-25 | **Project:** VN-XUONG-UUV | **Phase:** 2
**Decision:** 3 quyết định từ First Principles analysis:

1. **PR-03 reinterpretation:** "LARS tháo rời toàn bộ" → "LARS components tháo rời riêng lẻ để bảo trì" (tời, genset, xe nôi, VFD, con lăn = bolt-on; ramp, V-funnel, rails = hàn cố định vào thân)
2. **Ramp 12° cố định:** Hàn vào transom. Loại bỏ linear actuator hoàn toàn. Giảm 1 failure mode, giảm trọng lượng, giảm chi phí.
3. **No multi-platform reuse:** Prototype = xuồng chuyên dụng. Nếu cần LARS cho tàu khác → thiết kế mới. Không premature abstraction.

**Alternatives considered:**
- Full modular LARS (bolt-on/bolt-off toàn bộ) — rejected: +15-25% weight, +$30K, +10-15 failure points, 2-4 ngày lắp/tháo, xuồng 8m không có nhiệm vụ khác khi tháo LARS
- Adjustable ramp 12-18° (linear actuator) — rejected: thêm 1 failure mode, thêm trọng lượng/chi phí, giá trị thấp (12° đủ cho UUV D=400mm)
- Ramp 15° (previous baseline) — rejected: CEO chose 12°

**Rationale:** First Principles analysis revealed "modular LARS" is convention from OEM phục vụ tàu 12-50m multi-UUV. VN-XUONG-UUV = 8m chuyên dụng 1 UUV → premise khác hoàn toàn. Physics: tải trọng LARS phải truyền liên tục từ tời → ramp → keel; mối nối mô đun = điểm yếu kết cấu + tăng trọng lượng. Sub-component serviceability đạt được bằng bolt-on components trên kết cấu tích hợp.

**Files updated:** Doc 002 (PR-03), Doc 007 (F2.3, F2.5, notes), Doc 010 (§1.1, §2.1, §3.2, §4.2)

---

## DR-2026-03-25-02: VN-XUONG-UUV ACH — 3 Opportunities GO

**Date:** 2026-03-25 | **Project:** VN-XUONG-UUV | **Phase:** 2 (FORGE pipeline)
**Decision:** ACH GO for 3 sub-functions. 2 in prototype, 1 deferred.

| # | Opportunity | SHIFT Score | Phase 3-4? | Hardware Saved |
|---|-----------|-------------|:----------:|---------------|
| A | Camera tracking (F3.1) | 5✅ 1⚠️ | **YES** | $30-80K USBL |
| B | Approach advisor (F3.2) | 6✅ | **YES** | Operator experience |
| C | DP-lite (F1.4) | 4✅ 1⚠️ | **DEFERRED v2** | $50-100K DP system |

**Prototype ACH package:** A+B share hardware (camera $200 + IMU $500 + GPS $200 + compute $250 = ~$1,200 total). B starts rule-based (no ML), A needs pool test.
**Deferred:** C needs OB throttle actuator integration = mechanical work beyond prototype scope.
**Conditions:** (A) Pool test with dummy UUV before Phase 3 lock. (C) Confirm OB electronic throttle when selecting engines.
**Cross-product synergy:** 4 model types → 4+ WX products (R5 compound).
**Evidence:** Reverse MC 2026-03-25 confirms 0/10 competitors use AI for recovery guidance. FORGE Scout + SHIFT scorecards.
**Rationale:** Opp B = zero marginal cost + inherent fallback (advisory only). Opp A = tether-as-sensor is unique WX advantage (solution gap). Opp C highest value but highest mechanical integration → defer to avoid scope creep on prototype.

---

## DR-2026-03-25-01: VN-XUONG-UUV Construction Sequence — Plate-First (Hybrid Bow)

**Date:** 2026-03-25 | **Project:** VN-XUONG-UUV | **Phase:** 2→3 preparation
**Decision:** Plate-first construction for hull body + hybrid frames-first for bow section only (if compound curve detected in GA sketch)
**Alternatives considered:**
- Frames-first (traditional) — rejected: convention from steel, causes more distortion in aluminum (thermal conductivity 4×)
- Full plate-first — accepted for body, conditional for bow
- Hybrid (Kasten recommended) — adopted: plate-first body + frames-first bow if compound
**Rationale:** First-principles analysis confirmed V-hull bottom + topsides = developable surfaces (Gaussian curvature ≈ 0). Plate-first gives better fairness (minimum energy surface), less cumulative distortion (butt welds before fillet welds), lower skill requirement, and cheaper jig. Galaxy #115 (Distortion Sequence Law) captures the physics basis.
**Evidence:** Kasten Marine, Nordkyn Design, AWS D3.7. Research doc: Phase3-Embodiment/RESEARCH_Plate_First_Construction_Procedure_2026-03-25.md
**Next action:** Verify bow developability when drawing GA sketch (trải bow panel trên CAD → nếu flat development OK → 100% plate-first)

### Update 2026-03-25: MPF replaces Kasten Hybrid

Second first-principles analysis confirmed: Kasten Hybrid (interleaved bottom frames before topside plating) is suboptimal for 8m V-hull because:
1. Access argument invalid (1.85m internal height = thợ vào được)
2. Interleaving violates butt/fillet separation principle (Galaxy #115 corollary)
3. Adds sequence complexity for marginal benefit

**Final approach: Modified Plate-First (MPF) — 3-phase sequential:**
- Phase A: ALL shell butt/seam welds → CP-B fairness GATE
- Phase B: ALL frame fillet welds (stringers first, then frames)
- Phase C: Deck + LARS stern fittings + completion

Research doc updated: Phase3-Embodiment/RESEARCH_Plate_First_Construction_Procedure_2026-03-25.md

## 2026-03-23 — VN-CUAS Pre-Study: PARK

**Context:** YouTube viral video (13M views) triggered C-UAS automated turret opportunity screening. ACH fit cực mạnh (4 GREEN / 3 YELLOW / 0 RED). TAM $20M+ VN.
**Alternatives:** (A) Pitch AI module cho Viettel VCUS/E, (B) GO independent dân sự, (C) PARK chờ signal.
**Decision:** PARK (Option C). Viettel đã có VCUS/E — cạnh tranh trực tiếp = phá vỡ quan hệ. Chờ Viettel approach hoặc facility opportunity.
**Revisit:** Khi Viettel contact, hoặc capacity trống.
**File:** `4_Archives/Pre-Study/PRESTUDY_VN-CUAS_2026-03-23.md`

Format: `[YYYY-MM-DD] [decision] — [context] — [alternatives] — [rationale]`

---

[2026-03-15] IPARAG AI OS: Approach B (Incremental) — Context: 3 documents propose full AI OS integration. Already have 30 skills + CLAUDE.md + Galaxy. — Alternatives: A (full integration 1 session), B (incremental 3 phases), C (minimal) — Rationale: Aligns with Mastery doc anti-pattern "don't install all plugins at once". Phase 1 behavior layer → Phase 2 hooks → Phase 3 MCP. Each phase verified before next.

[2026-03-15] NLM source limit: ~50 practical capacity — Context: F1 (205) and F9 (157) notebooks over capacity. — Alternatives: keep all, prune to 50, prune to ~85 (KEEP+MAYBE) — Rationale: KEEP+MAYBE retained (safer). Can prune MAYBE later if still noisy. Backups in References/.

[2026-03-19] VN-USV-SS-001 ACH: GO — Context: Semi-submersible USV for Biên phòng, COTS ArduSub+Pixhawk vs military INS+DP system. SHIFT scorecard S/H/I/F=PASS, T=MARGINAL. — Alternatives: NO-GO (hardware-only), CONDITIONAL GO (wait for more data) — Rationale: 97% cost reduction ($300 vs $10K+), Level 2 fallback inherent in NC ballast valve design, ArduSub ecosystem proven. T=MARGINAL acceptable because lab demonstrator ($140) generates first semi-sub data before Phase 2 lock. Reuse across VN-XUONG + future USVs.

[2026-03-19] ACH Learning Path: Option A→B sequential — Context: 10 learning projects identified across portfolio, need to master 8-layer ACH tech stack while producing thesis demos. — Alternatives: A (12.7MM first), B (USV first), C (LOMAH first), D (parallel sprint) — Rationale: A→B = 12.7MM-SIM (LP-1 Jetson+YOLO → LP-3 Pose) then USV (LP-2 ArduSub → LP-5 ROS2). 13 weeks, $340. Covers thesis Ch 6+7+9. Sequential avoids CEO capacity overload (25h/week). Each LP validates a real product AND produces thesis demo evidence.

[2026-03-20] VN-USV-SS-001 forge-job-map: DISRUPTIVE strategy — 52 outcomes, top 3: O-23 comms loss (10.0), O-24 endurance (10.0), O-25 detection range (9.8). 7/15 ACH addressable (avg Opp 9.5) — strongest ACH case in portfolio. 5 requirements gaps approved (launch ≤2 persons, recovery handles, GCS ≤5 alerts, turnaround ≤2h, charge ≤3h). Hidden insight: Step 3+8 (launch/recovery) = 4/15 top outcomes = physical danger zone, NOT solvable by AI.

[2026-03-22] CEO Health = Binding Constraint — Context: Xét nghiệm 17-20/03/2026 phát hiện Viêm gan B mạn tính hoạt động (ALT 400+), ĐTĐ type 2 mới (HbA1C 6.6%), rối loạn lipid (Chol 8.77, LDL 3.59), sỏi thận 4mm. Three Laws: Vicious Cycle, Organ-Protection-First, Golden Window. — Alternatives: (A) xử lý từng bệnh tuần tự, (B) điều trị đồng thời tích hợp, (C) trì hoãn chờ thêm data — Rationale: Option B. Vicious Cycle Law = 3 bệnh khuếch đại lẫn nhau, phải phá vòng đồng thời. Golden Window Law = HbA1C 6.6% là cửa sổ tối ưu, trì hoãn = xơ gan 8-20% trong 5 năm. DMIR 12 tuần bắt đầu ngay. Sức khỏe CEO = binding constraint mới, ưu tiên ngang Tier 1 project. Mọi schedule phải accommodate daily health protocol.

[2026-03-20] VN-AIA-128 initialized (Tier 1) — Trợ lý ảo nội bộ cho Hải đoàn 128 Hải quân (Tân Cảng). RAG + LLM chatbot tra cứu quy định nghiệp vụ. Physical gate: demo MVP 2026-04-19 (30 ngày). WX-KPIPE-001 archived to free portfolio slot (G4 MET). 3 HIGH stakeholders need access (BLOCKING). On-premise/VN cloud only — không foreign cloud. ACH bản chất (AI thay tra cứu thủ công).

[2026-03-20] SHIFTO "O" dimension added: VN-12.7MM-SIM I-08 = ✅ HIGH (7/20 top underserved, avg Opp 8.57, $50 HW). BB-01 LOMAH ML classifier = CONDITIONAL GO (S=PASS, H=STRONG PASS, I=PASS, F=PASS Level 2 inherent, T=MARGINAL with $50 lab gate, O=N/A pending forge-job-map). Key finding: I-08 ACH outcomes (#9-20) have ZERO overlap with I-01 HW outcomes (#1-8) — cleanest possible ACH separation.

[2026-03-20] forge-scout Portfolio ACH Scan — 7 products scanned, 13 HIGH + 4 MED ACH opportunities identified across 3 products (VN-12.7MM-SIM 6H, VN-USV-SS-001 4H+1M, BB-01 3H+1M). VN-AST-MSL-001 and VN-XUONG-UUV = LOW (passive/manual — correct, not every product needs ACH). Cross-product synergy: 6 model types × 1.7× reuse = 10 product-applications. Top 3: #1 VN-12.7MM I-08 coaching (SW-only, data compound), #2 VN-USV autonomy (SHIFT GO done), #3 BB-01 ML classifier (needs forge-shift). Thesis chapters mapped to all 3.

[2026-03-20] VN-12.7MM-SIM forge-job-map: DIFFERENTIATED strategy — Context: 58 desired outcomes mapped, AI-estimated I×S scores. Top 6 underserved: O-26 recoil (10.0), O-30 hit/miss (9.8), O-27 traverse (9.6), O-37 bad habits (9.6), O-38 miss diagnosis (9.4), O-13 setup time (9.0). — Alternatives: Dominant (all outcomes), Discrete (simplify overserved), Disruptive (new approach) — Rationale: InVeris serves Step 5 at $500K+. WX differentiates on Step 3 (10× cheaper setup), Step 7 (adaptive I-08), Step 8 (auto-reporting). 5 ACH candidates confirmed for I-08. 4 new requirements approved (PR-022, SW-022/023/024). Scores are AI estimates — user interviews still needed.

[2026-03-20] VN-12.7MM-SIM Recoil: RC-A Pneumatic Standard — Context: Doc 022 Phase 2b subsystem concept selection. 5 concepts evaluated via VDI 2225 (10 criteria, 28 weight points). Two-Channel architecture: Channel A (brake, decided) + Channel B (recoil impulse, this decision). — Alternatives: RC-A Pneumatic (78.6%), RC-C Electric (72.3%), RC-D Cam-Spring (68.8%), RC-B CO2 (64.3%), RC-E Blank (53.6%, eliminated: noise). — Rationale: RC-A is ONLY concept meeting 70% force threshold for 12.7mm (2,300 N peak). Fits V2 budget ($800-1,500 added). Zero patent conflict (ACME/Haptech abandoned pneumatic). Low coupling risk (score 10 vs RC-C 17). MOUNT framework: pneumatic NOW, design for electric swap in I-06/I-08. Data capture pipeline ($50 added sensor) enables I-08 ACH flywheel.
