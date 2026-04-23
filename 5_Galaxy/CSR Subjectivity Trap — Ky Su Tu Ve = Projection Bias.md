---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #pahl, #warning, #ceo]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]], [[CSR Linear Trap — Đường Thẳng Che Giấu Ngưỡng]]
---

# CSR Subjectivity Trap — Ky Su Tu Ve = Projection Bias

## Y Tuong Cot Loi

CSR function construction trông như công việc kỹ thuật (vẽ đồ thị, gán số) nhưng thực chất chứa đầy judgment calls chủ quan: curve shape, vị trí threshold, độ lớn step, baseline %. Kỹ sư tự vẽ CSR mà không có khách hàng = vẽ mô hình tinh thần của mình, không phải thực tế khách hàng.

## Giai Thich Chi Tiet

Drill C1 (Practice-ICDM) bộc lộ 3 điểm chủ quan ẩn trong CSR:

1. **Curve shape** — Linear hay step? Quyết định này thay đổi DQM score 20-40%. Không có công thức — phải hiểu khách hàng perceive value thế nào.

2. **Threshold position** — Ngưỡng fidelity ở 70% hay 60%? Dịch 10% thay đổi toàn bộ ranking. Nguồn duy nhất đáng tin = dữ liệu training transfer thực tế hoặc customer interview.

3. **Step magnitude** — Dưới ngưỡng CSR = 30% hay 10%? Sự khác biệt này quyết định concept nào bị loại. Kỹ sư mặc định chọn số "hợp lý" — nhưng "hợp lý" theo mental model của ai?

**Solo CEO risk đặc biệt:** Không có QFD team, không có customer representative review curve. CEO vừa thiết kế vừa đánh giá — giống thầy giáo tự ra đề tự chấm. DSO và VDI 2225 không giúp — chúng dùng CSR làm input, nếu CSR sai thì output cũng sai.

**Mitigation:** (1) Dùng field data thay vì assumption khi có (VN-CUAV-SIM có 8 hệ thống shipped → có thể survey users). (2) Khi không có data → ghi rõ "CSR assumed, not validated" và sensitivity-test DQM với ±20% threshold shift. (3) Tốt nhất: customer co-creation — cho user thực tế vẽ curve, so sánh với curve của kỹ sư.

## Tai Sao Dieu Nay Quan Trong?

ICDM Step 9 (DQM) được quảng cáo là "quantitative final selection" — nghe khoa học hơn VDI 2225. Nhưng nếu CSR functions là projection bias của kỹ sư, thì DQM chỉ là quantified subjectivity với vẻ ngoài chính xác. Nguy hiểm hơn VDI 2225 vì tạo false confidence — số % trông chính xác hơn điểm 0-4.

Bài học rộng: bất kỳ công cụ nào biến judgment thành số đều có risk ẩn giấu subjectivity đằng sau precision.

## Lien Ket

- [[Phán đoán không thể uỷ thác cho AI]] — CSR construction = judgment thuần tuý, không thể outsource cho AI hay spreadsheet
- [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]] — customer co-creation = skin in the game cho CSR
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — TVI threshold là ví dụ CSR cần field data, không phải assumption
- [[CSR Linear Trap — Đường Thẳng Che Giấu Ngưỡng]] — sister note: Linear Trap = sai shape, Subjectivity Trap = sai source

## Nguon Goc

Practice-ICDM Drill C1 (2026-04-17). Insight khi tự vẽ 3 CSR curves (A1 Weight, A2 Fidelity, A3 Cost) và nhận ra mỗi curve đều chứa ít nhất 2 judgment calls không có data backing.
