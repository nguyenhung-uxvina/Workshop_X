---
created: 2026-03-05
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/electronics, #topic/technology]
links: [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Musk Sequence — Serial Development Cho Solo Engineer]]
---

# Charge Amplifier — Chuyển Đổi Impedance Cao

## Ý Tưởng Cốt Lõi
Piezo sensor output là charge (pC), không phải voltage. Charge amplifier chuyển Q→V, biến tín hiệu high-impedance thành low-impedance để xử lý tiếp. Đây là bước bắt buộc — bỏ qua nó là mất tín hiệu.

## Giải Thích Chi Tiết
- PZT output: high impedance, charge-mode (pC range)
- Charge amp: op-amp (TL072/LM358) với feedback capacitor
- Output: mV-range voltage, low impedance → có thể filter, amplify, digitize
- Signal chain: Piezo → Charge Amp (Q→V) → Bandpass (100Hz-20kHz) → Gain → Clamp (bảo vệ ADC khỏi ±90V spike) → ADC (16-bit STM32H743)

Constraint VN: Chỉ dùng LM358 hoặc TL072 — có sẵn tại thị trường Việt Nam (Nhật Tảo, Hà Đông).

## Tại Sao Điều Này Quan Trọng?
Charge amp design quyết định noise floor của toàn hệ thống. Noise floor quyết định false positive rate (target ≤2%). Một charge amp thiết kế sai → toàn bộ signal chain phía sau vô nghĩa.

## Liên Kết
- [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]] — Charge amp là hậu quả trực tiếp của PZT selection
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — Bench test với oscilloscope là cách duy nhất validate noise performance
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — Signal chain là critical path của BB-01 (#1 trong Musk Sequence) — charge amp phải xong trước khi chuyển sang bất cứ project nào khác

## Nguồn Gốc
- BB-01 LOMAH signal chain architecture (Phase 2)
- BB-01 morphological matrix: charge amp topology selection
