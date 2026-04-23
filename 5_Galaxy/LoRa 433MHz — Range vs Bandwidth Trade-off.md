---
created: 2026-03-05
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/electronics, #topic/technology]
links: [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]], [[Charge Amplifier — Chuyển Đổi Impedance Cao]], [[Musk Sequence — Serial Development Cho Solo Engineer]]
---

# LoRa 433MHz — Range vs Bandwidth Trade-off

## Ý Tưởng Cốt Lõi
Cho ứng dụng field device (BB-01 LOMAH), LoRa 433MHz là lựa chọn tối ưu: range 500m+ (vượt yêu cầu 400m), bandwidth thấp nhưng đủ cho hit notification + heartbeat. WiFi có bandwidth cao nhưng range chỉ 50-100m ngoài trời — không đủ.

## Giải Thích Chi Tiết
- BB-01 data packet: Target ID + timestamp + signal strength = vài chục bytes
- LoRa SX1278: $4/module, 433MHz ISM band (không cần giấy phép)
- Range > 500m (line-of-sight trường bắn) — margin 25% so với yêu cầu
- Power: thấp, tương thích LiFePO4 12V/10Ah (8+ giờ hoạt động)
- WiFi ESP32: $3.50/module nhưng range chỉ 50-100m → loại (DEC của morphological matrix)

Quy tắc: **Chọn communication protocol theo range requirement trước, bandwidth sau.** Data rate không quan trọng khi dữ liệu chỉ là vài bytes mỗi lần bắn.

## Tại Sao Điều Này Quan Trọng?
Nhiều engineer mặc định chọn WiFi vì quen thuộc. Nhưng field device không phải smartphone — range là constraint số 1, không phải throughput.

## Liên Kết
- [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]] — Cả hai là ví dụ của "chọn theo physics, không theo xu hướng"
- [[Charge Amplifier — Chuyển Đổi Impedance Cao]] — Cùng signal chain BB-01
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — Telemetry là subsystem sau trong BB-01 — sensor + signal chain phải xong trước, LoRa tích hợp sau

## Nguồn Gốc
- BB-01 LOMAH morphological matrix (Phase 2)
- BB-01 VDI 2225 evaluation: V1 vs V4 (WiFi) comparison
