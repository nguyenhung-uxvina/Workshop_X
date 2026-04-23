---
created: 2026-03-26
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #defense, #three-laws, #warning]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Physical-World Interface]]
---

# Sacred Constraints Law — IFR Không Xóa Được An Toàn Quốc Phòng

## Ý Tưởng Cốt Lõi

TRIZ Ideal Final Result (IFR) nói: "hệ thống lý tưởng là hệ thống không tồn tại nhưng vẫn thực hiện chức năng." Nhưng sản phẩm quốc phòng có Sacred Constraints — những thành phần KHÔNG THỂ loại bỏ dù IFR yêu cầu: human-in-loop cho quyết định sát thương, ruggedization (MIL-STD-810), redundant safety systems, và yêu cầu doctrine cụ thể.

## Giải Thích Chi Tiết

IFR cực kỳ mạnh để phá psychological inertia — bắt đầu từ hoàn hảo, lùi về thực tế. Nhưng nếu áp dụng mù cho defense: "lý tưởng = không cần operator" → vi phạm doctrine human-in-loop. "Lý tưởng = không cần vỏ bọc" → không qua MIL-STD-810.

Giải pháp: tạo Sacred Constraints list TRƯỚC khi chạy IFR. Constraints này sống sót qua IFR — không bao giờ bị loại. IFR chỉ tối ưu XUNG QUANH chúng, không QUA chúng.

Ví dụ BB-01: IFR = "detect projectile with zero electronics on target face." Sacred constraint = "sensor must survive direct hit" → led to piezo contact (no MEMS, no exposed electronics).

## Tại Sao Điều Này Quan Trọng?

Cảnh báo: TRIZ tools rất mạnh nhưng nếu dùng không adapt cho defense context → đề xuất loại bỏ thành phần safety-critical. Sacred Constraints Law là guardrail cho mọi TRIZ tool trong Workshop X.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — Sacred constraints list = CEO judgment, không AI quyết
- [[Physical-World Interface]] — Sacred constraints tồn tại vì thế giới vật lý không tha thứ

## Nguồn Gốc

Altshuller IFR, adapted for defense. WX first-principles adaptation 2026-03-26. NLM notebook: triz-adv.
