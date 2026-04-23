---
created: 2026-04-12
updated: 2026-04-12
type: permanent-note
tags: [#type/permanent-note, #pahl, #product]
links: [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]], [[Nguyên Tắc Atomic Note]], [[VDI 2221 Evolution — Khi Tiêu Chuẩn Thừa Nhận Waterfall Là Ảo Tưởng]]
---

# Three Strands — Orange Core + Yellow Requirements + Blue Modeling

## Ý Tưởng Cốt Lõi
VDI 2206:2021 V-Model có 3 "dải" chạy song song xuyên suốt hình chữ V, không phải 1 đường đơn lẻ:
1. **Orange (Core):** Hoạt động chính — requirements → system architecture → implementation → integration → V&V
2. **Yellow (Requirements):** Requirements Engineering chạy liên tục — KHÔNG phải input 1 lần
3. **Blue (Modeling):** Mô hình hóa + phân tích bao bọc toàn bộ V — mọi bước phải có model

## Giải Thích Chi Tiết
- **Bản 2004:** Requirements = ô input tĩnh ở góc trái trên. Modeling = ngoặc bao nửa V. V&V = mũi tên ngược (ấn tượng sai: retrospective)
- **Bản 2021:** 3 dải song song giải quyết 3 điểm yếu cùng lúc:
  - Yellow: "requirements and their values change along the product development process" → tracking liên tục
  - Blue: "model-based approach of all engineering tasks" → yêu cầu từ 25 experts tại validation workshop
  - Orange: V&V = 3 mũi tên (planning V&V + verification ngang + validation lên trên) thay vì mũi tên ngược

- **Main Feature List** (enhanced từ P&B): checklist mở rộng cho mechatronic/smart products — thêm sampling rate, bus system, big data → hỗ trợ requirements elicitation đầy đủ hơn

## Tại Sao Điều Này Quan Trọng?
HELIX pipeline hiện tại có Orange (Phase 1-4 tuần tự) nhưng:
- **Yellow yếu:** Requirements list viết 1 lần ở Phase 1, ít khi update. Cần requirements strand chạy liên tục song song
- **Blue gần như không có:** Không có model-based approach ở system level. CAD chỉ ở Phase 3. Cần SysML hoặc ít nhất block diagram ở Phase 1-2

**Insight: 3 strands = 3 dimensions song song, không phải 3 giai đoạn nối tiếp.**

## Liên Kết
- [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]] — macro-structure; three strands là internal anatomy
- [[Nguyên Tắc Atomic Note]] — tương tự: 1 note = 1 concept; 1 strand = 1 concern (separation of concerns)
- [[VDI 2221 Evolution — Khi Tiêu Chuẩn Thừa Nhận Waterfall Là Ảo Tưởng]] — VDI 2221 cũng evolved; VDI 2206 evolved nhanh hơn vì complexity cao hơn

## Nguồn Gốc
- Graessler & Hentze 2020 — at-Automatisierungstechnik 68(5): 312-324
- VDI/VDE 2206:2021 — 67 pages, published November 2021
- Extracted: 2026-04-12 từ /research --deep VDI 2206
