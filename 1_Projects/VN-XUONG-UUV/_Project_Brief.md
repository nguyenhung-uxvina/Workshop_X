---
created: 2026-03-06
updated: 2026-03-07
type: project
status: active
deadline: null
area: "[[2_Areas/HELIX — Design Execution/_Area_Dashboard]]"
tags: [#type/project, #status/active, #topic/technology]
tier: 1-prototype
---

# VN-XUONG-UUV — Xuồng Triển Khai/Thu Hồi UUV

## Tổng Quan

| | |
|--|--|
| **Bắt đầu** | 2026-03-06 |
| **Deadline** | Gate 2 target: 2026-04-18 |
| **Area** | [[2_Areas/HELIX — Design Execution/_Area_Dashboard]] |
| **Trạng thái** | Active — Tier 1 Prototype |
| **Methodology** | Pahl & Beitz Systematic Design (VDI 2221/2225) |

## Nhiệm Vụ

> Thiết kế và chế tạo **xuồng chuyên dụng để triển khai và thu hồi UUV** (Unmanned Underwater Vehicle) trên biển. Xuồng phải đảm bảo an toàn khi hạ thủy và thu hồi UUV trong điều kiện biển Việt Nam, khả năng nội địa hóa cao, và phù hợp với năng lực chế tạo của Workshop X.

## Tiêu Chí Hoàn Thành

> Dự án HOÀN THÀNH khi:
> - [ ] Prototype xuồng đã triển khai và thu hồi UUV thành công trên biển thực tế
> - [ ] Quy trình vận hành (SOP) đã được viết và kiểm chứng
> - [ ] Chi phí nằm trong budget (TBD sau Phase 1)
> - [ ] Nội địa hóa >= 80%

---

## Pahl-Beitz Progress

| Phase | Status | Notes |
|-------|--------|-------|
| **Phase 0: Pre-study** | **DONE** | Gate 0 PASSED 2026-03-06 |
| **Phase 1: Task Clarification** | **DONE** | Gate 1 PASSED 2026-03-06 (3.80/4.0) |
| **Phase 2: Conceptual Design** | **IN PROGRESS** | P12 issued 2026-03-07 |
| Phase 3: Embodiment Design | To Do | Layout, materials, systems |
| Phase 4: Detail Design | To Do | Bản vẽ, BOM, chế tạo |

---

## Phase 0 — Câu Hỏi & Trả Lời

| # | Câu Hỏi | Trả Lời | Status |
|---|---------|---------|--------|
| 1 | UUV loại nào? | **Medium class, 550 kg** — compact form factor (KHÔNG phải torpedo-profile) | Đã xác định |
| 2 | Môi trường hoạt động? | **Ngoài khơi, Sea State 3-4** (Biển Đông điều kiện thường) | Đã xác định |
| 3 | Phương pháp triển khai? | **Stern ramp/slipway** (consensus 4/4 manufacturers) | Đã xác định |
| 4 | Phương pháp thu hồi? | **Passive V-funnel + cradle + winch** (consensus 3/4) | Đã xác định |
| 5 | Hoạt động độc lập hay từ tàu mẹ? | **Từ tàu mẹ** — xuồng là tender/work boat | Đã xác định |
| 6 | Số lượng UUV mỗi chuyến? | **1 UUV** | Đã xác định |
| 7 | Thời gian triển khai + thu hồi? | **30-60 phút** (tổng, bán tự động + manual) | Đã xác định |
| 8 | Budget? | **Sơ bộ: $198K-408K** (không tính UUV) — revised for 6.5m ultra-light | Cần xác nhận |
| 9 | Crane SWL tàu mẹ? | **2.5t** — forces split-lift ops + lightship < 2.0t | Đã xác định |

### UUV Specifications

| Thông số | Giá trị | Ghi chú |
|----------|---------|---------|
| Chiều dài | 5,000 mm (5.0 m) | Torpedo-profile, phù hợp reference designs |
| Đường kính thân | 400 mm | Lớn hơn 324mm standard — cần custom cradle |
| Trọng lượng | 550 kg | Medium class, trong tầm SWL của các LARS reference |
| Chiều cao max (tại cột anten) | 850 mm | Anten nhô lên ~450mm trên thân |
| Tỷ lệ L/D | 12.5 | Torpedo-profile điển hình |

**Form factor alignment với reference designs:**
- L/D = 12.5 phù hợp torpedo-profile (reference: L/D 5-15)
- Diameter 400mm lớn hơn 324mm standard nhưng vẫn trong phạm vi LARS thông thường
- 550kg nằm giữa dải trọng lượng các reference (300-800kg)
- Chiều dài 5m cần ramp/cradle đủ dài — tương tự A18-M của ECA (5.5m)
- Cradle cần custom cho D=400mm (không dùng torpedo standard 324mm)

### Hard Constraints (user confirmed 2026-03-06)

| # | Constraint | Lý do | Impact |
|---|-----------|-------|--------|
| HC-1 | **Xuồng LARS phải nhỏ gọn** | Tàu mẹ có kích thước hạn chế | Gates toàn bộ thiết kế — LOA, beam, displacement |
| HC-2 | **Crane tàu mẹ = 2.5t SWL** | Lightship < 2.0t, split-lift ops (tender + UUV riêng) | Gates vessel size → 6.5m ultra-light |
| HC-3 | **Bảo vệ UUV** | UUV >>$100K, không được hư hại | Soft capture, UHMWPE guides, controlled descent |
| HC-4 | **An toàn thủy thủ** | Người trên boong dưới sóng | Minimize stern deck exposure time |

### Design Priorities (user ranked)

1. **Compact size** — nhỏ nhất có thể (HARD CONSTRAINT)
2. **Lightweight** — crane tàu mẹ hạn chế (HARD CONSTRAINT)
3. **UUV protection** — bảo vệ tài sản (Opp 19)
4. **Crew safety** — an toàn thủy thủ (Opp 17)
5. **Recovery reliability** — funnel + USBL (Opp 19, nhưng compact trumps)
6. **Stability during recovery** — ổn định khi thu hồi (user xếp thứ 6)

### Tóm Tắt Operational Concept

```
Tàu mẹ (tàu Hải Quân)
  |
  |--- Hạ xuồng VN-XUONG-UUV xuống nước (davit/crane tàu mẹ)
         |
         |--- Xuồng chạy đến khu vực triển khai
         |--- Triển khai 1x UUV (550kg, compact) xuống nước
         |--- UUV thực hiện nhiệm vụ
         |--- Thu hồi UUV lên xuồng
         |--- Quay về tàu mẹ
         |
  |--- Kéo xuồng lên tàu mẹ
```

### Nghiên Cứu Cần Làm (Phase 0 — đã hoàn thành)

1. **Launch methods cho medium UUV** — so sánh A-frame vs. crane vs. stern ramp
   - Ưu/nhược điểm, độ phức tạp, chi phí, phù hợp Sea State 3-4
2. **Recovery methods cho medium UUV** — so sánh cradle vs. net vs. docking
   - An toàn, độ tin cậy, thời gian, phù hợp điều kiện sóng
3. **Reference designs** — nghiên cứu các xuồng UUV launch/recovery hiện có:
   - L3Harris USV LARS, Saab LARS, ECA Group, Atlas Elektronik
4. **Cost estimation sơ bộ** — vật liệu, động cơ, thiết bị thủy lực, nhân công

---

## Kanban

### Done (Phase 0 + Phase 1)
- [x] Khởi tạo dự án trong IPARAG
- [x] Trả lời 9/9 câu hỏi Phase 0
- [x] Nghiên cứu reference designs: L3Harris, Saab, ECA Group, Atlas Elektronik (4 analyses)
- [x] Cross-comparison synthesis — consensus: stern ramp + passive funnel capture
- [x] ODI Report v1.0 — 29 outcomes, all UNDERSERVED, strategy: DOMINATE
- [x] P09 Situation Analysis — PROCEED with conditions
- [x] P10 Product Idea Generation — 4 concepts, B (primary) + A (fallback), C eliminated
- [x] P11 Product Proposal — 3 paths: P1 aluminum / P2 RIB / P3 towed
- [x] P56 Gate 0 Review — **PASSED** (2026-03-06)
- [x] Phase 1: 6 docs + 4 templates, Gate 1 PASSED (3.80/4.0)
- [x] Path selection: **Path 3 (Towed/Independent)** — 8m aluminum, hydraulic LARS
- [x] P12 Product Definition issued (2026-03-07)

### To Do (Phase 2 — Conceptual Design)
- [ ] **BLOCKING:** Gửi ICD Template v1.1 cho UUV OEM
- [ ] Morphological matrix (43 sub-functions → working principles)
- [ ] 3-5 concept variants với sketches
- [ ] 7 quyết định thiết kế (PD-1 đến PD-7)
- [ ] TMS concept (25km cable drum + routing + LARS sync)
- [ ] Cable weight + preliminary stability check
- [ ] VDI 2225 evaluation → concept selection
- [ ] Weight estimate v2 (với TMS)
- [ ] Preliminary GA sketch
- [ ] Stakeholder interviews S1, S2, S4
- [ ] Seakeeping assessment (partner)
- [ ] Gate 2 Review

---

## Galaxy Notes Liên Quan

- [[5_Galaxy/Musk Sequence — Serial Development Cho Solo Engineer]] — Tier 1 = làm xong rồi mới chuyển sang project khác
- [[5_Galaxy/Flexibility Là Output, Không Phải Input]] — thiết kế xuồng linh hoạt cho nhiều loại UUV

## Resources

- `References/` — 5 LARS analyses (L3Harris, Saab, ECA, Atlas, Cross-Comparison)
- `Phase0-PreStudy/` — ODI, P09, P10, P11, P12, Gate 0

---

*Project Brief | Thuộc hệ thống IPARAG*
