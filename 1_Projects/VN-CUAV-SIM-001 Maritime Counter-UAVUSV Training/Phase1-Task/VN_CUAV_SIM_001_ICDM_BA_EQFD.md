---
created: 2026-04-14
updated: 2026-04-14 (v1.1 — HOQ cross-ref + SA constraints)
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — EQFD (Enriched QFD)
mode: RETROACTIVE
pipeline: helix-task-clarify v3.2 --icdm
block: BA
---

# BA ICDM: EQFD — Enriched Quality Function Deployment — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE — applied to Requirements v2.0 (102 reqs)
**Source:** FORGE Job Map v1.0 (63 outcomes) + Requirements v2.0 + WTP from B0 ICDM
**v1.1 updates:** HOQ DP weight cross-reference (FORGE_HOQ_Design_Parameters_v1.0) + SA constraints (SA_Domain_Budgets)

---

## 1. TOP 18 CUSTOMER NEEDS (filtered from 63 ODI outcomes + 102 requirements)

> **EQFD rule:** Limit to 15-20 most critical system-level needs. Not 102 raw requirements.

| CN-#  | Customer Need (system-level)                             |  WTP  | Source (ODI / Req)     | Job Step |
| :---: | -------------------------------------------------------- | :---: | ---------------------- | :------: |
| CN-01 | Xạ thủ bắn trúng mục tiêu trong sim tương đương bắn thật | **E** | SC-3, T-03, Q-01       |    5     |
| CN-02 | Phản hồi hình ảnh tức thì khi thao tác                   | **E** | SC-2, S-01             |    5     |
| CN-03 | Cảm giác vũ khí giống thật (kích thước, lực, giật)       | **E** | G-02, F-01, F-05       |    5     |
| CN-04 | Nhìn thấy mục tiêu UAV nhỏ ở khoảng cách huấn luyện      | **E** | T-02, G-03             |    5     |
| CN-05 | Mô phỏng chuyển động tàu khi bắn                         | **B** | K-03, K-04, T-04       |    5     |
| CN-06 | Đa dạng kịch bản mục tiêu (UAV, USV, swarm, đêm)         | **E** | O-05, O-06, T-05, T-06 |    3     |
| CN-07 | Chấm điểm tự động, khách quan, chi tiết                  | **E** | S-06, S-07, O-02       |    8     |
| CN-08 | Replay 3D để phân tích lỗi sau buổi tập                  | **B** | T-07, O-28             |    8     |
| CN-09 | Theo dõi tiến bộ xạ thủ qua thời gian                    | **B** | O-01→03, F5.4          |   1,8    |
| CN-10 | Instructor vận hành dễ, không cần kỹ năng IT             | **E** | Er-04, O-03            |    3     |
| CN-11 | Giao diện 100% tiếng Việt                                | **E** | Er-03                  |   3,6    |
| CN-12 | Thay đổi loại vũ khí nhanh (MWI swap)                    | **B** | F7, O-04, O-12         |   2,7    |
| CN-13 | An toàn tuyệt đối — zero đạn thật                        | **E** | SC-1, Sa-01→06         |   All    |
| CN-14 | Vận hành liên tục ≥8h/ngày không treo                    | **E** | O-02, Q-04             |   4,5    |
| CN-15 | Lắp đặt tại đơn vị trong phòng 6×8m                      | **B** | G-01, A-01             |    2     |
| CN-16 | Giá ≤$70K — payback < 1 năm vs bắn thật                  | **B** | SC-4, C-01, C-02       |    —     |
| CN-17 | Bảo trì đơn giản, spare parts sẵn tại VN                 | **B** | Ma-01→06               |    —     |
| CN-18 | Phần mềm chạy offline, không phụ thuộc nước ngoài        | **E** | L-04                   |    —     |

**Count:** 18 needs = 11 Essential + 7 Beneficial. Zero Luxurious (filtered out). *(CEO S70: CN-15 E→B, CN-16 E→B, CN-18 B→E)*

---

## 2. TOP 22 ENGINEERING CHARACTERISTICS (filtered from 102 requirements)

> **EQFD rule:** Identify 20-25 most important/difficult/controversial engineering parameters.

| EC-#  | Engineering Characteristic          | Unit | Direction | CN Served | Difficulty |   Controversial?   | SA/HOQ Flag                                                                     |
| :---: | ----------------------------------- | ---- | :-------: | --------- | :--------: | :----------------: | ------------------------------------------------------------------------------- |
| EC-01 | End-to-end latency (trigger→visual) | ms   |   ↓ MIN   | CN-02     |    HIGH    |         ❌          | **SA DD-1:** zero margin (50ms/50ms). Projector input lag = binding constraint. |
| EC-02 | Ballistic model error vs TM tables  | %    |   ↓ MIN   | CN-01     |    HIGH    |         ❌          | DP1 14.2% HIGH                                                                  |
| EC-03 | Angular resolution (encoder)        | °    |   ↓ MIN   | CN-01,03  |    LOW     |         ❌          | SA IF-01a: alignment quality                                                    |
| EC-04 | Recoil peak force                   | N    |   ↑ MAX   | CN-03     |  **HIGH**  | ✅ ≥25N (D)         | CEO S70: override HOQ LOW → ≥25N (D). Solution TBD (pneumatic likely). Cost+complexity ↑ |
| EC-05 | Trigger pull force range            | kg   |  — RANGE  | CN-03     |    LOW     |         ❌          | DP4 4.2% LOW                                                                    |
| EC-06 | FOV horizontal                      | °    |   ↑ MAX   | CN-04     |    MED     |         ❌          | DP5 8.4% MED                                                                    |
| EC-07 | FOV vertical                        | °    |   ↑ MAX   | CN-04     |    LOW     |         ❌          | DP5 8.4% MED                                                                    |
| EC-08 | Frame rate (sustained)              | fps  |   ↑ MAX   | CN-02,04  |    MED     |         ❌          | SA: GPU peak 500W = 24% power budget                                            |
| EC-09 | Motion roll amplitude               | °    |   ↑ MAX   | CN-05     |    MED     |         ❌          | DP3 7.9% MED. SA K1: vs DP9 logistics                                           |
| EC-10 | Motion pitch amplitude              | °    |   ↑ MAX   | CN-05     |    LOW     |         ❌          | DP3 7.9% MED                                                                    |
| EC-11 | Wave period fidelity                | s    |  — MATCH  | CN-05     |    MED     |         ❌          | DP3 7.9% MED                                                                    |
| EC-12 | UAV target profile count            | #    |   ↑ MAX   | CN-06     |    MED     |         ❌          | DP2 **18.2% HIGH** — top priority                                               |
| EC-13 | USV target profile count            | #    |   ↑ MAX   | CN-06     |    LOW     |         ❌          | DP2 **18.2% HIGH**                                                              |
| EC-14 | Hit detection accuracy              | %    |   ↑ MAX   | CN-07     |    MED     |         ❌          | DP1 14.2% HIGH + DP7 11.1% HIGH                                                 |
| EC-15 | Scoring criteria count              | #    |   ↑ MAX   | CN-07     |    LOW     |         ❌          | DP7 **11.1% HIGH**                                                              |
| EC-16 | Weapon swap time                    | min  |   ↓ MIN   | CN-12     |    MED     |         ❌          | DP12 3.0% LOW                                                                   |
| EC-17 | Boot-to-ready time                  | min  |   ↓ MIN   | CN-14     |    LOW     |         ❌          |                                                                                 |
| EC-18 | Continuous operation time           | h    |   ↑ MAX   | CN-14     |    MED     | ❌                  | CEO S70: ≥4h target (was 8h). Scheduled restart mỗi 4h = acceptable.            |
| EC-19 | Installation footprint              | m²   |   ↓ MIN   | CN-15     |    LOW     |         ❌          | DP9 8.9% MED                                                                    |
| EC-20 | Unit BOM cost                       | $    |   ↓ MIN   | CN-16     |    MED     |         ❌          | SA: projectors 42% + GPU 20% = 62% HW BOM                                       |
| EC-21 | Local content ratio                 | %    |   ↑ MAX   | CN-16,17  |  **HIGH**  |    ✅ 60% vs 70%    | SA: HW ~18% local, total incl SW ~62%                                           |
| EC-22 | MTBF                                | h    |   ↑ MAX   | CN-17     |    MED     |         ❌          | SA: projector lamp life = MTBF driver                                           |

**"Other" column:** remaining ~80 requirements not in top 22 — tracked in full Requirements_List_v2.md but NOT driving concept evaluation.

---

## 3. BENCHMARKING — Single Best Competitor Per Need

> **EQFD rule:** Identify single best competitor per need (not exhaustive grid).

| CN-#  | Customer Need      | Best Competitor          | Their Solution                       | Their Performance |        WX Target         | WX Advantage                            |
| :---: | ------------------ | ------------------------ | ------------------------------------ | :---------------: | :----------------------: | --------------------------------------- |
| CN-01 | Ballistic accuracy | **Zen Technologies ILS** | Proprietary ballistic engine         |   ±3% (claimed)   |           ±5%            | Acceptable — 5% sufficient for training |
| CN-02 | Latency            | **L3Harris FATS**        | Custom render + direct drive         |       ~30ms       |          ≤50ms           | Acceptable at $50K vs $300K             |
| CN-03 | Weapon feel        | **Saab Gamer**           | Pneumatic recoil, full-weight mockup |      80-100N      | **≥25N (D), full-weight** | CEO S70: upgrade to ≥25N + full-weight mockup. Gap reduced (25N vs 80-100N). Solution TBD Phase 2. |
| CN-04 | See small UAV      | **No competitor**        | None train C-UAV at range            |         —         | Visual cue assist >250m  | **WX unique**                           |
| CN-06 | Scenario diversity | **Zen HITS**             | 15+ pre-built                        |   15 scenarios    |      ≥10 scenarios       | Zen leads, but WX has C-UAV niche       |
| CN-07 | Scoring            | **InVeris FATS**         | Camera-based + software              |    5 criteria     | Multi-criteria ray-trace | **WX unique** — ray-trace ≠ camera      |
| CN-12 | Weapon swap        | **Zen modular**          | Tool-free swap, 10 min               |      ~10 min      |       ≤5 min (NFC)       | **WX leads** — NFC auto-detect          |
| CN-16 | Price              | **Zen basic**            | $200-250K                            |       $200K       |          ≤$70K           | **WX leads 3×** cheaper                 |

**Uncontested gaps (from Reverse Morphological Chart v1.0):**
- C-UAV/USV niche → no competitor offers maritime counter-drone training
- MWI NFC auto-detect → no competitor has NFC weapon identification
- Ray-trace scoring → competitors use camera or simple proximity
- $50-70K price point → 3× cheaper than cheapest competitor

---

## 4. TVDT LINKAGE (from Requirements v2.0 + EQFD)

| EC-# | Characteristic | EC Weight | HOQ DP Cross-Ref | Trade-offs | Reference | Target | SA Constraint | Implication |
|:----:|---------------|:---------:|:----------------:|-----------|:---------:|:------:|:-------------:|------------|
| EC-01 | Latency | **10%** (SC-2) | DP5 8.4% | ↓latency → ↑GPU cost | Zen ~40ms | ≤50ms | **DD-1: zero margin** (50/50ms). Projector input lag = binding. | Must verify projector model before Phase 3 |
| EC-02 | Ballistic error | **9%** (SC-3) | DP1 **14.2%** | ↑accuracy → ↑dev time | Zen ±3% | ±5% | — | 5% sufficient for training transfer |
| EC-12 | UAV profile count | **—** | DP2 **18.2%** ★ | ↑profiles → ↑AI dev | No competitor | ≥5 | — | **DP2 is #1 HOQ priority but EC-12 was unweighted → UPGRADE to 9%** |
| EC-04 | Recoil force | **8%** | DP4 4.2% | ↑force → ↑cost+complexity | Saab 80-100N | **≥25N** | — | **CEO S70 override: ≥25N is Demand.** HOQ data says LOW but CEO judgment = recoil Essential for training transfer. Weight stays 8%. Solution TBD (pneumatic, electromagnetic, or hybrid). |
| EC-06 | FOV horizontal | **7%** | DP5 8.4% | ↑FOV → ↑projectors → cost | Zen 180° | ≥150° (D) | SA K3: visual vs logistics contradiction | 3-projector 180° at current cost |
| EC-08 | Frame rate | **7%** | DP5 8.4% | ↑fps → ↑GPU → cost | L3Harris 60fps | ≥60fps | SA: GPU peak 500W, 24% power | RTX 4090 sufficient at 3×FHD |
| EC-14 | Hit detection | **6%** | DP1 14.2% + DP7 11.1% | ↑accuracy → ↑compute | InVeris 99% | ≥95% | — | Software-only — no HW cost |
| EC-18 | Continuous op | **6%** | — | ↑hours → memory mgmt | Zen 8h+ | **≥4h** | — | CEO S70: 4h target + scheduled restart. Reduces SW risk significantly. |
| EC-20 | BOM cost | **6%** (SC-4) | DP9 8.9% | ↓cost → ↓quality risk | Zen ~$80K | ≤$18K | SA: projectors 42% + GPU 20% = 62% HW BOM | **3× advantage** |
| EC-21 | Local content | **5%** | — | ↑local → quality risk | N/A | ≥60% | SA: HW ~18%, total ~62% | Revised from 70% |
| **Other** | Remaining 12 ECs | **36%** | | | | | | Tracked in full list |

### v1.1 HOQ ↔ EC Weight Alignment Check

> **Purpose:** Verify that EC weights (from EQFD/ODI) align with HOQ DP weights (from customer outcomes). Misalignment = potential over/under-investment.

| EC | EC Weight | Maps to DP | DP Weight | Delta | Action |
|:--:|:---------:|:----------:|:---------:|:-----:|--------|
| EC-12 Target AI profiles | unweighted | DP2 | **18.2%** | **+18%** ↑ | **UPGRADE EC-12 to 9%** — was missing from TVDT despite being #1 HOQ priority |
| EC-02 Ballistic error | 9% | DP1 | 14.2% | +5% ↑ | Aligned — both HIGH |
| EC-14 Hit detection | 6% | DP1+DP7 | 25.3% | +19% ↑ | EC-14 underweighted — but split across 2 DPs. Keep at 6% (scoring is SW-only, low cost) |
| EC-04 Recoil force | 8% | DP4 | 4.2% | +4% ↑ | **CEO OVERRIDE: keep 8%.** HOQ says LOW but CEO judgment: ≥25N = Essential for training transfer. Data ≠ judgment here. Solution TBD Phase 2. |
| EC-01 Latency | 10% | DP5 | 8.4% | -2% | Aligned — latency is sacred constraint (SC-2), weight justified |
| EC-20 BOM cost | 6% | DP9 | 8.9% | +3% ↑ | Aligned — sacred constraint (SC-4) |
| EC-06 FOV | 7% | DP5 | 8.4% | +1% | Aligned |
| EC-08 Frame rate | 7% | DP5 | 8.4% | +1% | Aligned |

**Key findings:**
1. **EC-12 (Target AI) was MISSING from TVDT** despite DP2 being #1 HOQ priority (18.2%). Added at 9%.
2. **EC-04 (Recoil): CEO OVERRIDE** — HOQ says LOW (4.2%) but CEO keeps 8% and upgrades target to **≥25N (D)**. Rationale: recoil fidelity is Essential for training transfer (CEO domain judgment overrides statistical weight). Solution TBD Phase 2 (pneumatic, electromagnetic, or hybrid). **Impact: SS1 cost ↑, complexity ↑.**
3. **EC-14 (Hit detection) looks underweighted** (6% vs DP1+DP7 = 25%) but it's software-only with near-zero marginal cost, so 6% is appropriate for TVDT cost allocation.
4. **EC-18 (Continuous op): CEO relaxes** target from ≥8h to **≥4h**. Scheduled restart mỗi 4h = acceptable. Reduces Unity memory management risk from HIGH to MED.

---

## 4b. SA CONSTRAINTS IMPACTING EQFD (from System Architecture)

> **Source:** SA_Domain_Budgets.md + SA_Architecture_Review.md (VDI 2206 retro, CEO approved 3.60/4.0)

| ID | SA Constraint | EC Impacted | Severity | Phase 3 Action |
|:--:|-------------|:----------:|:--------:|----------------|
| DD-1 | **Latency zero margin:** 50ms budget fully consumed (encoder→ESP32→USB→Unity→GPU→projector). Projector input lag = binding constraint. | EC-01 | **CRITICAL** | Must benchmark Optoma ZU607TST input lag before layout commitment |
| DD-2 | **SW cost 3-layer model:** Per-unit $205-410 + NRE $7-12K + lifecycle $2.7-6K/yr. Not $5-10 as originally assumed. | EC-20 | HIGH | MAINT-KIT pricing must cover lifecycle layer |
| DD-3 | **Projectors = 42% of HW BOM + 44% of power.** Single COTS item dominates cost AND power. | EC-20, EC-08 | MED | Projector model selection = highest-leverage BOM decision |
| DD-4 | **SW domain = 46% of system** (M34%+E27%+SW46%). SW cost was understated 50× in early estimates. | EC-20 | HIGH | SW NRE must be budgeted explicitly, not treated as "free" |
| DD-5 | **7 shadow assumptions formalized.** 3 allocation conflicts resolved at SA level. | All | MED | Track in ICD v1.5 → v2.0 at Phase 3 |
| DD-6 | **Transport: ≤30kg/module** (Tr-01). Heaviest = platform frame ~25kg. | EC-19 | LOW | PASS — but projector cases add weight |
| DD-7 | **Power: peak 2.0kW / 5.0kW budget = 59% margin.** Comfortable. | — | LOW | No action needed |

**Impact on EQFD priority:** DD-1 (latency) and DD-3 (projector dominance) confirm that EC-01 and EC-20 are correctly weighted as sacred constraints. DD-4 reinforces that SW development (DP1+DP2+DP7+DP8 = 54% of HOQ weight) is where value is created — hardware is commodity.

---

## 5. ACTION PLAN — Completing Specifications

| # | Action | Owner | Deadline | Feeds Into | SA Link |
|---|--------|-------|----------|-----------|---------|
| 1 | **Design recoil system ≥25N (EC-04)** — CEO S70: ≥25N (D). Explore solutions: pneumatic, electromagnetic, hybrid. Research Saab Gamer, airsoft blowback, linear solenoid arrays. Target: ≥25N peak, rhythm matching ROF. Solution selection = Phase 2. | CEO + Cơ khí + Điện tử | Phase 2 concept | BB ICDM: CSR function for recoil. SS1 cost re-estimate. | **NEW** |
| 2 | **Benchmark projector input lag (EC-01)** — test Optoma ZU607TST. **CRITICAL per DD-1: zero margin.** If projector adds >15ms → must select alternative model. | CEO (physical test) | **Before Phase 3 layout** | BB ICDM: CSR function for latency | **DD-1** |
| 3 | **Validate 8h stability (EC-18)** — Unity stress test profile | SW dev | Phase 3 | BB ICDM: CSR binary pass/fail | DD-4 |
| 4 | **Confirm local content calculation (EC-21)** — BOM-level DfLC | AI (offload) | Phase 3 BOM | BB ICDM: CSR step function | DD-4 |
| 5 | **VOC validation with 3-5 gunners (CN-01→18)** — interview or demo | CEO (Core) | Post-P1 | Validate WTP classification | — |
| 6 | **Price MAINT-KIT to cover SW lifecycle (DD-2)** — $300-600/yr/unit must cover $2.7-6K/yr fleet cost | CEO (Core) | Phase 3 BOM | forge-cost update | **DD-2** |
| 7 | **Define Target AI development scope (EC-12/DP2)** — HOQ #1 priority (18.2%) but no explicit dev plan yet | CEO + SW | Phase 2 concept | BB ICDM: CSR function for AI | — |

---

## 6. EQFD OUTPUT SUMMARY

| EQFD Deliverable | Count | Status | v1.1 Change |
|-----------------|:-----:|:------:|-------------|
| Customer needs (filtered) | 18 | ✅ (12E + 6B) | — |
| Engineering characteristics | 22 | ✅ | +SA/HOQ flags per EC |
| Benchmarking (best competitor) | 8 needs mapped | ✅ | — |
| TVDT linkage (weighted) | 10 top ECs weighted | ✅ | +EC-12 (was missing), EC-04 downgraded |
| HOQ ↔ EC alignment check | 8 cross-checks | ✅ **NEW** | 2 misalignments corrected |
| SA constraints | 7 constraints | ✅ **NEW** | DD-1 latency critical, DD-2 SW cost |
| Action plan | 7 items | ✅ | +2 SA-driven actions |
| Correlation roof | SKIPPED (EQFD rule) | ✅ | — |

**Key difference from standard BA:** Standard BA produced 102 requirements across 17 P&B categories. EQFD BA reduces to **18 needs → 22 characteristics** that DRIVE evaluation. Full 102-requirement list remains as compliance checklist.

**v1.1 key findings (updated after CEO review S70):**
1. **EC-12 (Target AI profiles) was MISSING from TVDT** despite DP2 being #1 HOQ priority (18.2%). Now added at 9%.
2. **EC-04 (Recoil): CEO OVERRIDE** — upgrades to **≥25N (D)**. HOQ says LOW but CEO judgment: recoil = Essential for training transfer. Solution TBD Phase 2 (solution-free per BC).
3. **EC-18 (Continuous op): CEO relaxes** ≥8h → **≥4h**. Scheduled restart acceptable. Risk MED (was HIGH).
4. **CN-15 (Room 6×8m): E→B.** Phòng lớn hơn cũng chấp nhận được.
5. **DD-1 (Latency zero margin)** is the single most critical SA constraint — projector selection gates Phase 3.
6. **DD-2 (SW 3-layer cost)** requires MAINT-KIT pricing action before Phase 3 BOM.

---

*Next: Block BB ICDM (WTP Classification + CSR Functions)*
