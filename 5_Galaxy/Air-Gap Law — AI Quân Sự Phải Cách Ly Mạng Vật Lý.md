---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #acq, #warning, #defense]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[ACH Boundary Rule — Information vs Physical Forces]], [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]]
---

# Air-Gap Law — AI Quân Sự Phải Cách Ly Mạng Vật Lý

## Ý Tưởng Cốt Lõi

Hệ thống AI xử lý dữ liệu quân sự nội bộ PHẢI cách ly vật lý khỏi internet (air-gap). Phần mềm bảo mật (sandbox, privacy router, firewall) là lớp 1 cần thiết nhưng KHÔNG đủ — air-gap vật lý là lớp 2 bắt buộc. Không có air-gap = một lỗ hổng zero-day = toàn bộ quy định nội bộ rò rỉ.

## Giải Thích Chi Tiết

OpenClaw (AI agent open-source, viral 2026) có 30.000+ instances exposed trên internet, CVE-2026-25253 (RCE critical), 800+ malicious skills trên marketplace. NemoClaw (NVIDIA, GTC 2026-03-16) thêm lớp bảo mật nhưng mới 4 ngày tuổi, chưa audit.

Nguyên lý: **defense-in-depth**. Lớp phần mềm (NemoClaw OpenShell) ngăn 60% attack vectors. Air-gap vật lý ngăn 99% — vì attacker KHÔNG THỂ reach hệ thống không có network connection. Kết hợp cả hai = phòng thủ chấp nhận được cho tài liệu NỘI BỘ (không mật).

Áp dụng: data vào/ra hệ thống AI quân sự qua USB (manual, auditable). Update model qua USB (tested before deploy). KHÔNG có outbound connection nào — kể cả telemetry, update check, hay log gửi cloud.

## Tại Sao Điều Này Quan Trọng?

Workshop X phát triển AI cho quốc phòng VN (VN-AIA-128, I-08 ACH coaching, BB-01 ML classifier). Mỗi sản phẩm xử lý dữ liệu nhạy cảm khác nhau. Air-gap là nguyên tắc thiết kế từ Phase 0, không phải security feature thêm sau. Giống [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] nhưng mạnh hơn: edge = offline-capable, air-gap = offline-ONLY.

## Liên Kết

- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — air-gap = physical security boundary, không phải software concept
- [[ACH Boundary Rule — Information vs Physical Forces]] — AI xử lý information, air-gap bảo vệ physical boundary giữa internal và external
- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — air-gap là phiên bản cực đoan của edge-first cho quân sự
- [[Context Drift Loop (R4)]] — data rò rỉ qua network = context drift ở cấp tổ chức

## Nguồn Gốc

- Microsoft Security Blog: "Running OpenClaw Safely" (2026-02-19)
- Cisco: "Personal AI Agents Like OpenClaw Are a Security Nightmare" (2026)
- NVIDIA NemoClaw announcement (GTC 2026-03-16)
- Phân tích VN-AIA-128 (Session 54, 2026-03-20)
