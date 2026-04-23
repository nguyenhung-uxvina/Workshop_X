---
created: 2026-04-15
updated: 2026-04-15
type: permanent-note
tags: [#type/permanent-note, #acq, #sys, #three-laws]
links: [[Shifting the Burden Archetype]], [[Phán đoán không thể uỷ thác cho AI]], [[AI Dependency Spiral (R3)]], [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]]
---

## Ý Tưởng Cốt Lõi

AI-First không phải AI-Everywhere. Phải sequence theo Meadows Leverage Points: **L6 (information flow) trước → L5 (rules) khi có data → L2 (paradigm) khi có pattern.** Nhảy tầng = thất bại.

## Giải Thích Chi Tiết

Sai lầm phổ biến nhất khi triển khai AI cho vận hành: tiếp cận theo L12 (thay đổi tham số — mua tool, tự động hóa tác vụ rời rạc). Đúng sequence:

**L6 — Information Flow (nền tảng):** Giải quyết thông tin chậm, ẩn, không cấu trúc. AI cross-reference data across domains trong 2 giây thay vì CEO nhẩm tính. Ví dụ: BOM × stock × active WOs → material availability check tự động.

**L5 — Rules (khi đã có data flow):** AI thay đổi quy tắc ra quyết định. Order acceptance scoring thay vì rule cứng "8% margin." Gate automation 60-70% tiêu chí khách quan, reviewer focus 30-40% cần judgment. NCR pattern recognition biến dữ liệu quá khứ thành luật chơi tương lai.

**L2 — Paradigm (khi đã có pattern):** Platform configurator thay vì custom-build. Predictive design thay vì reactive (thiết kế → lỗi → sửa). Knowledge institutionalization phá vỡ key-person dependency.

TOC principle áp dụng: **đừng elevate (thêm tool/layer) khi chưa exploit hết layer hiện tại.** 1 agent dùng tốt > 5 agents orchestrated kém.

## Tại Sao Điều Này Quan Trọng?

Workshop X với 26 người, nếu spray AI khắp nơi sẽ rơi vào [[Shifting the Burden Archetype]] — team phụ thuộc AI thay vì xây hệ thống. Sequencing đúng đảm bảo mỗi tầng có data nuôi tầng kế tiếp. L5 (rules) không thể hoạt động nếu L6 (information) chưa chảy. L2 (paradigm shift) không thể xảy ra nếu chưa có pattern từ L5.

Đây cũng là guard rail chống [[AI Dependency Spiral (R3)]]: L6 = AI đọc data cho CEO → CEO vẫn quyết → [[Phán đoán không thể uỷ thác cho AI]] được bảo vệ. Chỉ khi judgment compound đủ (L5) mới mở rộng automation scope.

## Liên Kết

- [[Shifting the Burden Archetype]] — AI-First sai sequence = burden shift lên AI, team ngừng suy nghĩ hệ thống
- [[Phán đoán không thể uỷ thác cho AI]] — L6 bảo vệ nguyên tắc này: AI cung cấp information, human decide
- [[AI Dependency Spiral (R3)]] — nhảy thẳng L2 mà bỏ L6 = spiral risk cực cao
- [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]] — L6 = 0 thì L5 × L2 = 0

## Nguồn Gốc

Tổng hợp từ phân tích AI-First Operations cho Workshop X (2026-04-15). Kết hợp Meadows 12 Leverage Points + TOC sequential focus + thực nghiệm WX-OS MVP. Validated qua conversation với Claude về ERPNext + OpenClaw + Paperclip stack.
