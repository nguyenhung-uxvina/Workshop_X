---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #pahl, #warning, #three-laws]
links: [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]], [[DSO Pre-Ranking — Performance × Risk Trước Khi Tổ Hợp]]
---

# CSR Linear Trap — Đường Thẳng Che Giấu Ngưỡng

## Y Tuong Cot Loi

Linear CSR function là default dễ vẽ nhất — nhưng nó che giấu threshold effects. Khi có sacred constraint hoặc pass/fail boundary, linear curve cho điểm "trung bình" ở vùng thực tế đã FAIL, khiến concept nguy hiểm trông chấp nhận được.

## Giai Thich Chi Tiet

LITE-PA2 pipeline (VN-CUAV-SIM): CSR-1 Fidelity ban đầu dùng linear (50%→100%):
- C4 đạt 50% fidelity → CSR = 50% (trông OK, "trung bình")
- Nhưng SC-2 sacred constraint = 70% fidelity threshold

Chuyển sang step curve (threshold tại 70%):
- C4 đạt 50% fidelity → CSR = 30% (trừng phạt đúng mức)
- C2 đạt 85% → CSR = 95% (thưởng đúng)

Linear curve "phân bổ đều" satisfaction — nhưng thực tế khách hàng không hài lòng đều. Dưới ngưỡng = gần như vô giá trị, trên ngưỡng = nhảy vọt. Step/S-curve bắt được điều này, linear không.

**Rule:** Trước khi vẽ CSR, hỏi: "PC này có threshold không?" Nếu có → KHÔNG dùng linear. Kano Must-be → step. Kano Performance → linear OK. Kano Attractive → concave non-linear.

## Tai Sao Dieu Nay Quan Trong?

DQM score (Step 9 ICDM) là weighted sum of CSR values. Sai curve shape → sai CSR → sai DQM → chọn sai concept. Linear trap đặc biệt nguy hiểm vì nó không tạo ra lỗi rõ ràng — concept vẫn có điểm "OK", chỉ là điểm sai.

Với VDI 2225 traditional (0-4 scale), vấn đề tương tự: thang 0-4 rời rạc cũng che giấu threshold. CSR với đúng curve shape giải quyết vấn đề này — nhưng CHỈ khi curve shape được chọn đúng.

## Lien Ket

- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — VDI 2225 cũng có blind spot tương tự với thang 0-4; CSR khắc phục nếu curve đúng
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — TVI có threshold tại 70% fidelity, ví dụ điển hình cần step CSR
- [[DSO Pre-Ranking — Performance × Risk Trước Khi Tổ Hợp]] — DSO scores cũng bị ảnh hưởng nếu Performance assessment dựa trên CSR sai

## Nguon Goc

Practice-ICDM Drill C1 (2026-04-17). CSR Function Construction trên LITE-PA2 C4. Weiss & Hari, EQFD/ICDM. NLM notebooks: eqfd, icdm.
