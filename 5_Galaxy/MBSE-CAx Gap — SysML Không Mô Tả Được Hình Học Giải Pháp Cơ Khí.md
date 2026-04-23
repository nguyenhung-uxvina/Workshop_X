---
created: 2026-04-12
updated: 2026-04-12
type: permanent-note
tags: [#type/permanent-note, #pahl, #product, #warning]
links: [[Tool Overload Trap — Khi Kết Nối Không Bằng Sử Dụng]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]]
---

# MBSE-CAx Gap — SysML Không Mô Tả Được Hình Học Giải Pháp Cơ Khí

## Ý Tưởng Cốt Lõi
Giữa system-level MBSE (SysML, block diagrams) và domain-specific CAD (3D, FEM) tồn tại một khoảng trống mà CHƯA AI giải quyết triệt để. SysML mô tả functions, interfaces, logic — nhưng KHÔNG có cách hiệu quả để capture hình học (geometry) và vị trí không gian (spatial arrangement) của các giải pháp cơ khí. Đây là vấn đề MỞ trong nghiên cứu.

## Giải Thích Chi Tiết
- **System level (top of V):** Dùng SysML — semi-formal, mô tả abstract elements, interfaces, temporal/logical dependencies. Phù hợp cho phân rã chức năng, requirement diagrams, behavior models.
- **Domain level (bottom of V):** Dùng CAD/ECAD — formal, mathematically unambiguous. 3D geometry, tolerances, manufacturing specs.
- **Gap ở giữa:** Khi kỹ sư cần mô tả "principle solution" (nguyên lý giải pháp) — cần CẢ logic LẪN geometry. SysML chỉ có logic. CAD quá detail cho giai đoạn sớm.
- Các nỗ lực mở rộng SysML (FAS4M, SysML4FMArch) chưa thành công rộng rãi.
- Thực tế: engineers dùng hand sketch + PowerPoint ở giai đoạn này → không traceable, không versionable.

## Tại Sao Điều Này Quan Trọng?
**Warning cho Workshop X:** Nếu áp dụng VDI 2206 và invest vào SysML tooling, sẽ gặp gap này ngay ở Phase 2 (conceptual design). Giải pháp thực tế cho WX:
- Phase 1-2 (system level): **Block diagrams + interface tables** (lightweight MBSE, không cần full SysML)
- Phase 2-3 (transition): **Rough sketches + P&B morphological matrix** (đã có trong HELIX)
- Phase 3-4 (domain level): **SolidWorks/AutoCAD** (đã có)

**Law: MBSE-CAx gap tồn tại. Đừng chờ giải quyết nó — dùng lightweight bridge thay vì perfect tool.**

## Liên Kết
- [[Tool Overload Trap — Khi Kết Nối Không Bằng Sử Dụng]] — mua SysML tool rồi không dùng nổi = trap. WX nên dùng block diagram + table thay vì full SysML
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — gap giữa model và reality luôn tồn tại; bridge bằng prototype, không bằng thêm model
- [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]] — gap xảy ra ở chính transition từ V-Model system level xuống P&B domain level

## Nguồn Gốc
- Cambridge 2022 "Integrating model-based design of mechatronic systems with domain-specific design approaches" — Design Science
- Eigner & Dickopf 2017 — Springer IFIP: "SysML is not really suitable to describe solution principles, since they contain... geometric information"
- Extracted: 2026-04-12 từ /research --deep VDI 2206
