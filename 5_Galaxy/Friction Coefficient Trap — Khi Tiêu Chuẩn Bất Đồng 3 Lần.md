---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/engineering, #pahl, #product, #warning, #sys]
links: [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]], [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]], [[Phán đoán không thể uỷ thác cho AI]]
---

## Ý Tưởng Cốt Lõi

Khi hai tiêu chuẩn uy tín (cùng Tier S) đưa ra giá trị chênh nhau **3 lần** cho cùng một thông số, đó không phải lỗi — đó là tín hiệu rằng thông số đó **phụ thuộc ngữ cảnh** nhiều hơn kỹ sư nghĩ. Phản ứng đúng: không chọn giữa hai, mà **đo tại hiện trường**.

## Giải Thích Chi Tiết

Hệ số ma sát chain trên đáy biển (seabed friction coefficient):

| Tiêu chuẩn | Giá trị | Ngữ cảnh |
|------------|---------|----------|
| DNV OS-E301 | **1.0** | Offshore conservative |
| BS 6349 (silt/clay) | **0.3** | Port/harbour |
| BS 6349 (sand) | **0.5** | Port/harbour |
| Field tests (mixed) | **0.80-0.85** | Empirical |

Chênh lệch: 0.3 vs 1.0 = **3.3 lần.** Hệ quả: lượng chain đáy cần thiết để giữ 0° angle tại anchor thay đổi tương ứng. Dùng 0.3 → cần gấp 3× chain so với dùng 1.0.

**Trap:** Kỹ sư tra bảng → thấy một con số → dùng luôn → không biết tiêu chuẩn khác cho giá trị khác 3 lần. Nếu dùng giá trị cao (1.0) → under-design chain → chain trượt → anchor bị kéo lên. Nếu dùng giá trị thấp (0.3) → over-design → lãng phí vật liệu và chi phí.

**Nguyên tắc:** Khi thấy standard disagreement > 2×:
1. Coi đó là **thiết kế phụ thuộc site-specific data**
2. Dùng giá trị conservative cho preliminary design
3. **Đo thực tế** trước khi finalize (field test, pull test)
4. Đây là quyết định Core — AI không thể thay CEO chọn giữa 0.3 và 1.0

## Tại Sao Điều Này Quan Trọng?

- **VN-AST-MSL-001:** Đáy biển VN ven bờ (cát/bùn hỗn hợp) → không rõ friction là 0.3 hay 0.8 → phải test trước khi deploy
- **Tổng quát:** Pattern này xuất hiện ở nhiều thông số thiết kế "tra bảng" khác — soil bearing capacity, thermal conductivity, fatigue endurance limits... Khi hai tiêu chuẩn bất đồng lớn → parameter đó cần site-specific measurement
- **Anti-pattern:** Tin tưởng 100% vào bảng tra → skip validation → failure mode ẩn
- Confirms [[Phán đoán không thể uỷ thác cho AI]] — AI tra bảng cho cả hai giá trị, nhưng chọn giá trị nào = judgment call dựa trên ngữ cảnh thực tế

## Liên Kết

- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — dùng giá trị conservative khi uncertain
- [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]] — hidden parameter trong mooring design
- [[Phán đoán không thể uỷ thác cho AI]] — chọn giữa 0.3 và 1.0 = Core decision, không phải Offload

## Nguồn Gốc

- DNV OS-E301 Position Mooring — Tier S: friction = 1.0
- BS 6349 Maritime Structures — Tier S: friction = 0.3-0.5
- Field test reports via NLM cross-source synthesis — Tier B: friction = 0.80-0.85
- Phát hiện qua /research v2.1 pipeline, contradiction flagged in cross-validation, 2026-03-08
