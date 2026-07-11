---
created: 2026-05-18
updated: 2026-07-10
type: project
status: cancelled
tags: [#type/project, #status/cancelled, #defense]
cancelled: 2026-07-10
cancel_note: "CEO xác nhận HỦY (2026-07-10) — lý do (CEO 2026-07-11): KHÔNG PHÙ HỢP CHIẾN LƯỢC + thời gian quá ngắn. Dự án triển lãm one-off = 'project' không phải 'product' (không lặp lại, không platform, không recurring), timeline 203 ngày với 6 bottleneck ngoài tầm kiểm soát (demil 8-16 tuần, PE, permit Bộ CA). Đúng kỷ luật barbell: từ chối 5 tỷ VNĐ vùng giữa để giữ capacity cho convex bets. Giá trị bank: Phase 1 pipeline 75 reqs + ECR-001 demil analysis = reference."
---

# STATUS — VN-EXH-BPS-001
**❌ CANCELLED 2026-07-10** (CEO decision — xem cancel_note frontmatter)
**Cập nhật:** 2026-07-10 | **Phase khi hủy:** Phase 1 COMPLETE → Gate 1 CONDITIONAL PASS + ECR-001 OPEN
**Deadline cũ:** 2026-12-10 (không còn hiệu lực)

---

## 🔴 ECR-001 OPEN (2026-05-21) — MAJOR SCOPE CHANGE

**Subject:** Chuyển AK-630 × 2, bệ tên lửa × 2 (8 ống), và radar(s) từ **mock-up fabricated** sang **vỏ thực phi quân sự hóa** (demil shell, không cơ cấu trong).

**Status:** OPEN — chờ CEO answer Q1-Q6 + customer sign-off (target 28/05).

**Headline impact:**
- ✅ Schedule: NEUTRAL-to-favourable (GRP mold lead time eliminated for AK-630/missile/radar) — but **demil sourcing 8-16 tuần thay thành new critical path** → start tuần này
- ⚠ Cost: **+400 đến +2,250M VNĐ** delta nếu WX sourcing — re-negotiate contract value hoặc KH cung cấp shells
- 🔴 Structural: +2.6-4.5 tấn load — **PE brief PHẢI bao gồm ECR-001 trước 25/05**, có thể cần reinforce skeleton
- 🔴 Regulatory: demil cert (CNQP) + permit triển lãm vũ khí (Bộ CA) — NEW critical workstream
- KHÔNG đổi: AK-176M, súng phóng nhiễu, hull, ACP, kết cấu (vẫn theo Phase 1 baseline)

**Reqs affected:** W-04, W-05, W-06, W-07, W-09, W-10, W-11 supersede/drop; W-13/W-14/W-15/W-16 add. ICD IF-002b/c/e/f → demil dimensions TBD.

→ See [[ECR-001_Real_Demil_Weapons]]

---

## TRAFFIC LIGHT

| Dimension | Status | Ghi chú |
|-----------|:------:|---------|
| Schedule | 🟡 | Timeline 0-buffer — B-02/B-03 vẫn open |
| Budget | 🟢 | Locked: ~5,000M–5,200M VNĐ contract (PA3+U1+U2+U3), 30% margin |
| Technical | 🟢 | Phase 1 COMPLETE. P02 QC: PASS 3.5/4.0. 75 reqs validated. |
| Resources | 🔴 | B-02 (PE) + B-03 (xưởng thép) vẫn OPEN |
| Customer | 🟢 | Design locked. CAD chờ 25/05. Contract chờ 28/05. |

---

## PHASE 1 — COMPLETE ✅

**Pipeline:** helix-task-clarify v3.2 | **Mode:** Standard | **Completed:** 2026-05-19

| Block | Status | Key output |
|-------|:------:|-----------|
| B0 Preflight | ✅ DONE | ORIGINAL design confirmed, 6 risk flags, standards scan |
| BA Requirements | ✅ DONE | 70 reqs draft, 73% quantified, 7 groups |
| BB Validate D/W | ✅ DONE | 75 reqs (D=67/W=8), 5 FMEA-derived, 6 sacred constraints |
| BC Abstraction | ✅ DONE | Essential Problem approved, TVDT 12 reqs |
| BD Function Structure | ✅ DONE | 35 SFs, ORIGINAL (9/25), solution-determining SF identified |
| BE Compile | ✅ DONE | P02 PASS, Cross-domain sync, Deliverables index |

**Phase 1 Stats:**
- Requirements: **75 total** (D=67 / W=8) | 73% quantified
- Essential Problem: *"Tái tạo hình dạng và hệ thống vũ khí của một tàu chiến cụ thể ở tỷ lệ 1:1 thành cấu trúc tiếp cận được cho đám đông, đảm bảo an toàn kết cấu và xác thực ngoại quan trong điều kiện ngoài trời nhiệt đới, có thể triển khai và thu hồi lặp lại tại các địa điểm venue khác nhau mà không cần cơ sở hạ tầng đặc biệt."*
- Design Type: **ORIGINAL** (9/25)
- Sub-functions: **35** (Cơ 29 / Điện 4 / Trust 3)
- P02 QC Gate: **PASS 3.50 / 4.00**
- Sacred Constraints: **6** (SC-01→SC-06)
- Solution-determining SF: **SF-03** (keelson span — LOCKED)

---

## BLOCKING CONSTRAINTS

| # | Vấn đề | Owner | Deadline | Status |
|---|--------|-------|---------|--------|
| B-01 | CAD file từ KH | CEO/KH | 25/05/2026 | ⚠️ Chờ nhận — OPEN |
| B-02 | Structural PE (licensed) — **brief bao gồm ECR-001 load delta +3T** | CEO | **25/05/2026** | 🔴 OPEN — bottleneck #1 |
| B-03 | Xưởng chế tạo thép book | CEO | **30/05/2026** | 🔴 OPEN — bottleneck #2 |
| B-04 | Hợp đồng + penalty clause + **ECR-001 scope amendment** | CEO + KH | **28/05/2026** | ❌ OPEN |
| **B-05** | **Demil sourcing channel (CNQP / KH cung cấp) — confirm Q2 ECR-001** | CEO + KH | **28/05/2026** | 🔴 OPEN — bottleneck #3 NEW |
| **B-06** | **Permit triển lãm vũ khí (Bộ CA + Sở VHTT province)** | CEO | **15/06/2026** | 🔴 OPEN — bottleneck #4 NEW |

---

## OPEN [TBD] REQUIREMENTS (11 items — resolve sau khi nhận inputs)

| [TBD] Group | Reqs | Trigger |
|------------|------|---------|
| CAD pending (25/05) | W-01, W-08, W-09, W-11, W-12 | Nhận CAD → resolve trong 48h (D-04) |
| PE pending (B-02) | ST-12, C-01 | Confirm PE identity |
| Venue survey (Survey 04) | ST-06, C-08 | Survey 04 trước G1 |
| Contract (B-04) | D-03, D-05 | Ký hợp đồng 28/05 |

---

## MILESTONE TRACKER

| Gate | Ngày | Deliverable | Status |
|------|------|-------------|--------|
| G0 | 2026-05-18 | Charter + ICD v0 khởi tạo | ✅ DONE |
| **Phase 1** | **2026-05-19** | **75 reqs + EP + Function Structure + P02 PASS** | **✅ COMPLETE** |
| **Gate 1** | **2026-07-11** | **Shop drawings + PE sign-off + ICD v1** | ⏳ PENDING |
| G2 | 2026-08-08 | Fabrication start confirmed | ⏳ PENDING |
| G3 | 2026-10-17 | Fabrication + trial assembly done | ⏳ PENDING |
| G4 | 2026-11-28 | On-site assembly + finishing | ⏳ PENDING |
| **DELIVERY** | **2026-12-10** | Bàn giao, inspection passed | ⏳ PENDING |

**⚠️ CRITICAL PATH:** GRP molds phải START **01/08** (6–8 tuần lead time → G3 không slip)

---

## PHASE 2 ENTRY CONDITIONS

Đủ điều kiện vào Phase 2 khi:
- [ ] Gate 1 formally run (`/helix-quality-gate --gate 1`)
- [ ] B-02 PE confirmed (nhận trước G1)
- [ ] CAD received + TBD reqs resolved (25/05)
- [ ] Contract signed (28/05) → D-03/D-05 resolved
- Recommended: skip `/helix-system-arch` (U2 electrical is simple open-loop add-on)

**Phase 2 focus areas:**
- 🔴 DEEP: GRP mold design (AK-176M tháp + nose cone), CNC machining brief (barrel Ø120mm), Assembly sequence kit (IKEA-style)
- 🟡 MEDIUM: ACP Z-clip installation detail, U2 electrical package spec (IF-E06 inter-module connector)
- 🟢 SHALLOW: Structural skeleton (locked — triple longeron)

---

## TECHNICAL SPEC GAPS (carryforward)

| # | Gap | Status |
|---|-----|--------|
| GAP-01 | GRP gelcoat 0.5mm + fair spec + Sikaflex joint seal | ⏳ Resolve trước G1 |
| GAP-02 | ACP Z-clip silicone seal + weep hole Ø8mm @2m | ⏳ Resolve trước G1 |
| GAP-03 | 1 RAL code exterior (ACP+GRP+Steel color continuity) | ⏳ Resolve trước G2 |
| GAP-04 | Al grating → serrated bearing bar anti-slip | 🔴 Fix trước order |
| GAP-05 (NEW) | IF-E06: Inter-module weatherproof connector spec (IP55, ≥6-pin) | ⏳ Resolve trước G1 |

---

## WEEKLY ACTIONS (Tuần 19–25/05/2026)

### ECR-001 NEW (priority 🔴 — 21-28/05)
- [ ] **CEO — 22/05** — Answer ECR-001 Q1-Q6 (radar scope, sourcing model, rotation keep/drop, budget envelope, A-10 exit plan, AK-176M decision)
- [ ] **CEO — 22-25/05** — Start demil sourcing inquiries (≥2 channels: CNQP direct + KH inventory check)
- [ ] **CEO — 28/05** — Customer sign-off ECR-001 cùng contract signing; amend scope + budget envelope
- [ ] **CEO — 28/05** — Apply permit triển lãm vũ khí (B-06) — Bộ CA + Sở VHTT province
- [ ] **CEO — sau Q1** — Re-baseline forge-cost với new envelope (+400 đến +2,250M VNĐ delta)
- [ ] **CEO — sau Q1** — Update Requirements_Draft: supersede W-04/W-05/W-06/W-07/W-09/W-11; revisit W-10; add W-13/W-14/W-15/W-16

### Phase 1 / Gate 1 unchanged
- [ ] **CEO — NGAY** — Tìm Structural PE: liên hệ ≥3 ứng viên, confirm trước 25/05
- [ ] **CEO — 25/05** — Nhận CAD, resolve W-01/W-08/W-12 trong 48h (W-09/W-11 auto-resolve qua ECR-001)
- [ ] **CEO — 25/05** — Brief PE: ST-01→ST-12 + PE flags PE-01→PE-06 + **ECR-001 load delta +2.6-4.5T worst case**
- [ ] **CEO — 28/05** — Ký hợp đồng. Include penalty clause D-03 + ECR protocol D-05 + ECR-001 scope amendment
- [ ] **CEO — 30/05** — Book ≥3 xưởng thép cho fabrication tháng 8-10
- [ ] **CEO — 30/05** — Brief GRP mold maker (chỉ AK-176M tháp — nose cone ×8 ĐÃ DROP qua ECR-001)
- [ ] **CEO — trước G1** — GAP-01: GRP gelcoat spec vào scope
- [ ] **CEO — trước G1** — GAP-02: ACP Z-clip seal spec vào IF-001
- [ ] **CEO — trước G1** — GAP-05: IF-E06 multi-pin connector spec (Điện team)
- [ ] **CEO — trước order grating 🔴** — GAP-04: serrated bearing bar anti-slip
- [ ] **CEO — 15/08** — START GRP mold AK-176M (revised từ 01/08 — chỉ 1 mold sau ECR-001, lead time 4-6 tuần)

---

## SUBCONTRACTORS

| Vai trò | Status |
|---------|--------|
| Steel fabrication | ❌ Chưa book (B-03) |
| GRP/composite (molds) — chỉ AK-176M tháp sau ECR-001 | ❌ Chưa xác định |
| ~~CNC machining (barrel Ø120mm)~~ | ❌ Có thể DROP — chờ ECR-001 confirm (AK-176M nòng vẫn cần Ø100mm thép) |
| Structural PE | ❌ Chưa xác định (B-02) |
| On-site crane | ❌ Chưa book — capacity tăng do +3T weapons load |
| Electrical (U2) subcon | ❌ Chưa brief |
| **Demil weapons source (CNQP / KH inventory)** | ❌ NEW (B-05) |
| **Logistics escort vũ khí demil** | ❌ NEW |
| **Anti-corrosion preservation (5 demil units)** | ❌ NEW |

---

## LINKS

- [[_Project_Brief]] — Charter đầy đủ
- [[ICD_v0]] — Interface Control Document v0 (update to v1 after Gate 1)
- [[ECR-001_Real_Demil_Weapons]] — Engineering Change Request OPEN (2026-05-21)
- [[ECR-001_Analysis_Technical_Cost]] — Phân tích kỹ thuật + chi phí chi tiết (3 sourcing scenarios)
- [[ECR-001_Comparison_Demil_vs_GRP]] — So sánh 18 dimensions + decision matrix theo scenario
- `Phase1-Task/VN_EXH_BPS001_BE_Deliverables_Index.md` — Phase 1 deliverables
- `Phase1-Task/_pipeline_state.md` — Full pipeline ledger
- `Phase2-Concept/Expert_Panel_3Options_v1.0.md` — PA1/PA2/PA3 analysis
