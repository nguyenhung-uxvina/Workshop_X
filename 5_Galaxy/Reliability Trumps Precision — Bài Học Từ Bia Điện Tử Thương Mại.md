---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/technology, #product, #defense, #warning]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[Contact Piezo LOMAH — Lấp Khoảng Trống Dưới Âm Tốc]]
---

# Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại

## Ý Tưởng Cốt Lõi

Các hệ thống bia điện tử thương mại (dùng trong thi bắn) thất bại không phải vì thiếu chính xác, mà vì **thiếu tin cậy**: mất shot (false negative), calibration drift, scoring ambiguity. Trong quân sự, một hệ thống đáng tin cậy 99% với precision ±100mm tốt hơn hệ thống precision ±10mm nhưng chỉ đáng tin cậy 95%.

## Giải Thích Chi Tiết

Từ phân tích các hệ thống điện tử trong thi bắn (competition shooting):
1. **Missing shot protocol**: Hệ thống không ghi nhận được phát bắn → xạ thủ bị phạt điểm chuẩn (giá trị thấp nhất của loạt). Đây là pain point lớn nhất.
2. **Calibration drift**: Kết quả điện tử lệch so với lỗ đạn trên giấy, nhóm bắn bị dịch chuyển.
3. **Scoring ambiguity**: X ring vs 10 ring bị phân loại sai.

Tất cả đều là vấn đề reliability, không phải precision. Hệ thống có thể đo chính xác đến 0.1mm nhưng nếu 1/20 phát bắn bị mất → vô dụng.

## Tại Sao Điều Này Quan Trọng?

BB-01 LOMAH cần ưu tiên: (1) Không bao giờ bỏ sót hit (zero false negatives), (2) Không false trigger từ mưa/gió (low false positives), (3) SAU ĐÓ mới tối ưu precision. Thiết kế signal chain phải tối ưu cho reliability — pulse energy threshold (tích phân V²·dt) thay vì chỉ peak voltage, để phân biệt bullet impact vs rain drop.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — quyết định threshold level là judgment call, không phải optimization problem
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — khi reliability là constraint, design space thu hẹp nhanh chóng
- [[Contact Piezo LOMAH — Lấp Khoảng Trống Dưới Âm Tốc]] — context sản phẩm BB-01

## Nguồn Gốc

Research pipeline output #3 (2026-03-08). NLM notebook `lomah`. Feedback từ competition shooters sử dụng ShotMarker, Kongsberg, và các hệ thống điện tử khác.
