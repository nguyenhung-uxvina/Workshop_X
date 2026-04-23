---
created: 2026-04-09
updated: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v1.0
project: VN-CUAV-SIM-001
status: approved
gate0: PASS (2026-04-06, formal /gate 2026-04-09)
feeds_to:
  - FORGE: /odi (done), /shift (done), /portfolio, /forge-cost (done), /forge-validate (done), /forge-fallback (done)
  - HELIX: /req (Phase 1 done, Gate 1 APPROVE 3.70), /morpho (Phase 2 in progress)
---

# Product Proposal — VN-CUAV-SIM-001 Maritime C-UAV/USV Training System

## 1. Intended Functions (solution-neutral)

**Primary:** Huấn luyện xạ thủ hải quân phát hiện, bám, và bắn mục tiêu bay và nổi trong môi trường biển mô phỏng
**Secondary:** Chấm điểm tự động hiệu quả bắn và phân tích kết quả sau buổi tập
**Auxiliary:** Điều chỉnh độ khó huấn luyện theo năng lực từng xạ thủ

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target |
|---|----------|-------------|-----|--------|
| 1 | Performance | Độ trễ từ thao tác đến phản hồi hình ảnh | D | ≤50ms |
| 2 | Performance | Mô hình đạn đạo khớp bảng TM thực tế | D | ±5% |
| 3 | Performance | Tốc độ khung hình liên tục | D | ≥60fps |
| 4 | Performance | Tầm nhìn ngang bao phủ vùng quan sát xạ thủ | D | ≥150° |
| 5 | Fidelity | Bệ vũ khí mô phỏng có kích thước và cảm giác tương đương vũ khí thực | D | ±5mm |
| 6 | Fidelity | Mô phỏng chuyển động tàu trong điều kiện biển | D | Sea state 1-3 |
| 7 | Safety | 100% mô phỏng — không có bất kỳ đạn thật nào | D | Sacred |
| 8 | Safety | Dừng khẩn cấp toàn hệ thống | D | ≤1 giây |
| 9 | Cost | Giá bán mỗi đơn vị | D | ≤$70,000 |
| 10 | Operation | Vận hành liên tục mỗi ngày | D | ≥8 giờ |
| 11 | Operation | Đào tạo giáo viên vận hành độc lập | D | ≤2 ngày |
| 12 | Environment | Nhiệt độ vận hành | D | 0-50°C |
| 13 | Sovereignty | Phần mềm vận hành độc lập, không phụ thuộc server nước ngoài | D | Sacred |
| 14 | Production | Tỷ lệ nội địa hóa theo tổng giá trị dự án | D | ≥60% |
| 15 | Maintenance | Tuổi thọ thiết bị | D | MTBF ≥500h |

## 3. Cost Target + Production Volume

- Giá bán: ≤$70,000/unit (so sánh: Zen Technologies $200-500K) [L4-ESTIMATE]
- R&D budget: $18-28K (self-funded)
- Sản xuất ban đầu: 5-10 units năm 1
- Nội địa hóa: ≥60% tổng giá trị (bao gồm SW)
- Margin mục tiêu: ≥50%

## 4. Working Principle Suggestions (OPTIONS — không phải quyết định)

| Nguyên lý | Ưu điểm | Rủi ro |
|-----------|---------|--------|
| Chiếu hình đa màn hình (projection) | Chi phí thấp/pixel, FOV rộng, nhiều người cùng quan sát | Cần phòng tối, thay bóng/laser |
| Tường LED | Sáng (không cần phòng tối), liền mạch | Chi phí 4× so với projection |
| Kính VR | Chi phí thấp nhất, 360° FOV, di động | Say sim 30% người dùng, cô lập |
| Nền tảng chuyển động 2-DOF | Đơn giản, rẻ, đủ cho roll+pitch | Không có heave/sway/yaw |
| Nền tảng chuyển động 6-DOF | Chuyển động đầy đủ | Chi phí $50-150K, phức tạp |
| Chỉ hình ảnh (không chuyển động) | Rẻ nhất, bảo trì ít | Thiếu cảm giác tiền đình |

*Chi tiết kỹ thuật (algorithm, ADC, GPU model, projector brand) → xem research files và Phase 2 Concept Description.*

## 5. Risk Assessment + Fallbacks

| Rủi ro | Mức | Phương án dự phòng |
|--------|-----|-------------------|
| Hiển thị cảnh biển chưa đạt yêu cầu | HIGH | (a) Dùng asset store sẵn có (b) Giảm chi tiết, ưu tiên khung hình (c) Hợp tác studio game VN |
| AI hành vi mục tiêu chưa phát triển | MED | (a) Kịch bản định sẵn (Phase 1) (b) Behavior tree 5 mẫu (c) AI coaching defer Phase 2 |
| Ổn định phần mềm chạy liên tục | MED | Khởi động lại định kỳ mỗi 4h (CEO decision D4) |
| Tỷ lệ nội địa hóa phần cứng thấp | MED | (a) Tối ưu BOM Phase 3 (b) Tính cả SW vào tổng giá trị (c) Tìm nguồn thay thế VN |
| Nguồn cung GPU không ổn định | LOW | (a) Đặt trước 2 units (b) GPU thay thế cùng hiệu năng |

## 6. Sacred Constraints (IFR)

> *"Hệ thống lý tưởng: xạ thủ đạt kỹ năng tương đương bắn thực, ZERO chi phí đạn, ZERO rủi ro, ZERO cần ra biển."*

| # | Sacred Constraint | Lý do | Auto-Req |
|---|-------------------|-------|----------|
| SC-1 | 100% mô phỏng — ZERO đạn thật | An toàn tuyệt đối, bản chất sản phẩm | #7 |
| SC-2 | Phản hồi trong ngưỡng nhận thức con người để tránh huấn luyện sai | Vượt ngưỡng → xạ thủ học sai muscle memory → nguy hiểm khi bắn thực | #1 |
| SC-3 | Đạn đạo mô phỏng khớp thực tế đủ để xạ thủ học lead angle đúng | Sai ballistic → xạ thủ bắn trượt khi thực hành thật | #2 |
| SC-4 | Giá ≤$70K/unit | Vượt → mất cạnh tranh vs import → không bán được | #9 |
| SC-5 | Vận hành độc lập, không phụ thuộc nước ngoài | Quốc phòng = sovereignty bắt buộc | #13 |

## 7. Gate 0 Result

**PASS** — 6/6 criteria met (formal review 2026-04-09)
- TRL: 6/9 ≥ TRL 4, 3 at TRL 3 (SW — raiseable in 3-4mo) ✅
- Nội địa: ~62% tổng giá trị ✅
- Lợi thế cạnh tranh: first VN C-UAV/USV sim, 70-80% rẻ hơn Zen ✅
- Portfolio: TARGET zone (20/25) ✅
- FTO: Không có IP blocker ✅

---

*Product Proposal VN-CUAV-SIM-001 v1.0 — P&B §3.1 compliant, /review-plan verified*
