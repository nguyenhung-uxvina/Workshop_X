---
created: 2026-03-26
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #product, #three-laws]
links: [[Physical-World Interface]], [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]]
---

# Buoyancy Release Principle — Nếu Nổi Thì Không Cần Cơ Cấu

## Ý Tưởng Cốt Lõi

UUV có positive buoyancy (nổi tự nhiên). Khi xe nôi (cradle) chạm nước, lực Archimedes tự tách UUV khỏi cradle. Zero cơ cấu cần thiết cho phóng. First-principles: F_buoyancy > F_gravity + F_friction → automatic separation.

## Giải Thích Chi Tiết

VN-XUONG-UUV PD-10: Khi phân tích launch/recovery, convention nói cần actuator, latch, release mechanism. First-principles hỏi: "tại sao cần mechanism?" → vì phải tách UUV khỏi cradle. Nhưng UUV nổi → nước tự tách.

V-saddle UHMWPE 60° giữ UUV trên boong bằng gravity + friction. Khi ramp 12° đưa cradle xuống nước: nước vào → buoyancy lifts UUV out of V-saddle → done. Không có moving parts, không có failure mode, không có maintenance.

Pattern tổng quát: khi object có đặc tính vật lý tự nhiên (nổi, từ tính, đàn hồi) → tìm cách exploit thay vì thêm cơ cấu.

## Tại Sao Điều Này Quan Trọng?

Mỗi mechanism thêm = thêm failure mode + maintenance + cost. Buoyancy release = TRIZ Rule B (self-serve) ở dạng thuần khiết nhất: vật tự giải phóng bằng tính chất vật lý.

## Liên Kết

- [[Physical-World Interface]] — buoyancy là giao diện vật lý thuần, không qua trung gian
- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — "release UUV" là SF quyết định: nếu dùng buoyancy → cascade loại tất cả actuator

## Nguồn Gốc

VN-XUONG-UUV PD-10 First Principles analysis, 2026-03-26. Confirmed bởi TRV reference designs (US Navy).
