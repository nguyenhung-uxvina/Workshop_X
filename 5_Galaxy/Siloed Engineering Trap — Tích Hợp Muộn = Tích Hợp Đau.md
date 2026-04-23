---
created: 2026-04-12
updated: 2026-04-12
type: permanent-note
tags: [#type/permanent-note, #sys, #warning, #three-laws]
links: [[Shifting the Burden Archetype]], [[Analyst Trap — Vault Growth khác Thinking Growth]], [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]]
---

# Siloed Engineering Trap — Tích Hợp Muộn = Tích Hợp Đau

## Ý Tưởng Cốt Lõi
Khi không có bước system design cross-domain ở đầu dự án, các kỹ sư Cơ-Điện-Phần mềm làm việc trong silos (tách biệt). Interface mismatches chỉ phát hiện khi tích hợp vật lý → sửa đắt, muộn, đau. VDI 2206 tồn tại CHÍNH XÁC để ngăn failure mode này bằng cách buộc system architecture phase trước khi domain-specific design bắt đầu.

## Giải Thích Chi Tiết
- **Cơ chế thất bại:** Mech engineer thiết kế housing theo tối ưu cơ khí. Elec engineer thiết kế PCB theo tối ưu mạch. SW engineer viết code theo tối ưu algorithm. Khi ghép lại: housing không đủ chỗ cho PCB, tản nhiệt chạm connector, firmware timing không match servo response.
- **Chi phí:** Sửa ở Phase 3 (embodiment) đắt gấp 10x sửa ở system design. Sửa ở Phase 4 (detail) hoặc prototype đắt gấp 100x.
- **VDI 2206 giải quyết:** System architecture phase phân rã function → allocate cho domains → DEFINE interfaces TRƯỚC KHI ai bắt đầu detail design
- **Validation từ practice:** Bathelt 2005 (PLC systems), Bouhali 2024 (UAV safety-critical), Olaya Vera 2025 (Naval EOS) — tất cả confirm cross-domain architecture phase là critical success factor

## Tại Sao Điều Này Quan Trọng?
Workshop X đang gặp ĐÚNG failure mode này:
- VN-XUONG-UUV: Hull design (Mech) + control system (Elec) + autonomy (SW) chạy somewhat parallel nhưng KHÔNG có system architecture document chung
- BB-01: Piezo sensor (Mech) + signal chain (Elec) + scoring SW — ICD có nhưng viết muộn (Phase 2-3)
- HELIX pipeline có `helix-p3-integrate` nhưng đó là Phase 3 — QUÁ MUỘN. Integration check phải ở Phase 1 (sau function structure)

**Law: Integration debt tăng theo bình phương thời gian delay. Mỗi phase delay = x² chi phí sửa.**

## Liên Kết
- [[Shifting the Burden Archetype]] — silos = shifting burden từ "early system thinking" sang "late integration fixing"
- [[Analyst Trap — Vault Growth khác Thinking Growth]] — thêm analysis per domain KHÔNG thay thế cross-domain system design
- [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]] — V-Model macro-cycle PREVENTS silo trap bằng cách buộc system-level trước domain-level

## Nguồn Gốc
- Graessler & Hentze 2020 — at-Automatisierungstechnik
- Bathelt et al. 2005 — ICED (PLC application)
- Bouhali et al. 2024 — Systems Engineering (UAV MBSE+MBSA)
- Extracted: 2026-04-12 từ /research --deep VDI 2206
