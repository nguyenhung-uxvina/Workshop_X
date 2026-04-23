---
created: 2026-03-07
updated: 2026-03-07
type: dashboard
status: active
cadence: weekly (Monday morning, 5 min)
tags: [#type/sop, #status/active]
---

# CEO PULSE DASHBOARD

**Tuần:** ___ | **Ngày:** ___/___/2026 | **Cập nhật bởi:** KN

---

## 1. PULSE — 7 Chỉ Số Sống Còn

| # | Metric | Tuần này | Tuần trước | Trend | Alert |
|:-:|--------|:--------:|:----------:|:-----:|:-----:|
| 1 | **dP/dt** — physical iterations tuần này | 0 | 0 | = | RED |
| 2 | **Ngày đến physical gate tiếp** | 28d (AST-MSL-001, 04/04) | — | — | |
| 3 | **Blocking constraint** | dP/dt = 0. Analyst Trap thắng. | | | RED |
| 4 | **Galaxy growth** — notes tuần này | 0 | ? | ? | |
| 5 | **AI Dependency Ratio** (C/O/D) | ?% / ?% / ?% | — | — | |
| 6 | **Integration Debt** trend | ICD v1.3 chưa gửi | — | UP | YELLOW |
| 7 | **Composite Health** (monthly) | 33% FRAGILE (B:12/30 F:7.8/25 H:10/35) | — | = | |

**Đọc bảng này mất 30 giây. Nếu không có RED → ngày tốt. Nếu có RED → xem Section 3.**

---

## 2. ALERTS — Chỉ Hiện Khi Có Vấn Đề

> Nếu section này trống = hệ thống đang chạy. Không cần đọc thêm.

| Severity | Alert | Nguồn |
|:--------:|-------|-------|
| RED | dP/dt = 0 liên tục. Không có physical iteration nào trong 2+ tuần. | Metric #1 |
| RED | AST-MSL-001 gate 28 ngày — Q1 (bolted) + Q3 (35 kg/m3) chưa confirm. | Metric #2 |
| YELLOW | ICD v1.3 to UUV OEM chưa gửi — 15 phút action, blocking XUONG-UUV. | Metric #6 |

---

## 3. HÀNH ĐỘNG TUẦN NÀY — MỘT THỨ DUY NHẤT

> TOC: Chỉ constraint #1 mới xứng đáng attention. Mọi thứ khác là noise.

**Constraint:** dP/dt = 0 — không có physical progress nào.

**Action:** Confirm Q1 (bolted joint) + Q3 (foam 35 kg/m3) cho AST-MSL-001 → generate BOM → bắt đầu sourcing.

**Owner:** KN | **Deadline:** Thứ Sáu tuần này

**Nếu không làm được:** Ghi lý do vào Decision Log. Đừng để tuần sau lại RED mà không biết tại sao.

---

## 4. DECISION LOG — 4 Tuần Gần Nhất

> Mỗi tuần ghi 1-3 quyết định quan trọng. Pattern sẽ tự hiện sau 4-8 tuần.

| Tuần | Ngày | Quyết định | Rationale | Framework |
|:----:|------|-----------|-----------|:---------:|
| W10 | 07/03 | Build 30/30 skills trước execution | Last infrastructure batch, mechanical O-type work | HELIX |
| W10 | 07/03 | AST-MSL-001 = Musk Sequence #1 | Highest dP/dt potential, physical gate nearest | FORGE |
| W10 | 07/03 | Deprioritize XUONG-UUV | Gate 2 REVISE, ICD blocking, lower dP/dt potential | BRIDGE |
| W11 | | | | |
| W12 | | | | |
| W13 | | | | |

---

## 5. LINKS — Tài Liệu Tham Khảo Sâu

Chỉ mở khi cần tra cứu, không đọc hàng tuần.

| Tài liệu | Nội dung | Khi nào dùng |
|-----------|----------|-------------|
| [[4_Archives/Unified_CEO_Dashboard_BRIDGE_FORGE_HELIX_v1]] | 22 feedback loops, 9 laws, 10 constraints, timeline, cross-flow map | Monthly/Quarterly review |
| [[2_Areas/FORGE — Product Strategy/FORGE_Portfolio_Dashboard_2026-03-07]] | FORGE scores per product, ACH pipeline, anti-patterns | Monthly portfolio review |
| Project Status files | Per-project state | Khi update Metric #1, #2 |

---

## QUY TẮC VẬN HÀNH

1. **Mở file này mỗi sáng Thứ Hai.** Đọc Section 1. Nếu không RED → làm việc bình thường.
2. **Cập nhật 7 metrics** trước 9:00. Nếu metric = "?" → đó chính là vấn đề.
3. **Section 3 chỉ có MỘT action.** Nếu muốn viết 2+ → chọn cái nào unblock nhiều nhất.
4. **Decision Log ghi ngay khi quyết định**, không đợi cuối tuần. 30 giây/entry.
5. **Monthly:** Cập nhật Metric #7 (Composite Health). Mở tài liệu tham khảo sâu.
6. **Quarterly:** Review Decision Log 12 tuần. Tìm pattern. Update constraint ranking.

---

*80 dòng. 5 phút đọc. Phần còn lại nằm trong archives.*
