---
created: 2026-03-05
updated: 2026-03-05
type: project
status: active
deadline: 2026-09-05
area: "[[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]]"
tags: [#type/project, #status/active, #topic/technology, #topic/electronics]
---

# BB-01 LOMAH — Hệ Thống Phát Hiện Trúng/Trượt

## Tổng Quan

| | |
|--|--|
| **Bắt đầu** | 2026-03-05 |
| **Deadline** | 2026-09-05 |
| **Area** | [[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]] |
| **Trạng thái** | Active |

## Mục Tiêu & Tiêu Chí Hoàn Thành

> Dự án này HOÀN THÀNH khi: có prototype hoạt động phát hiện được trúng/trượt trên mục tiêu thực tế.

- [ ] Hoàn thành thiết kế schematic mạch tín hiệu
- [ ] Mô phỏng mạch xác nhận hoạt động đúng (LTspice)
- [ ] Prototype PCB được chế tạo
- [ ] Firmware ADC đọc và xử lý tín hiệu
- [ ] Thuật toán phân biệt trúng/trượt hoạt động
- [ ] Kiểm thử trên mục tiêu thực tế — phát hiện chính xác

## Ràng Buộc Kỹ Thuật (Hard Constraints)

- **Cảm biến**: Piezoelectric CONTACT — KHÔNG dùng MEMS microphone
- **Chức năng**: Phát hiện trúng/trượt ONLY — không phải âm thanh tổng quát
- **Chuỗi tín hiệu**: Piezo → Charge Amp (Q→V) → Bandpass → Gain → Clamp → ADC
- **Op-amp**: LM358, TL072 (sẵn có thị trường Việt Nam)
- **Lý do không dùng MEMS**: Không chịu được SPL yêu cầu

## Deliverables

- Schematic hoàn chỉnh (KiCad hoặc tương đương)
- Simulation files (LTspice)
- PCB layout + Gerber (nếu cần)
- Firmware source code
- Báo cáo kiểm thử

## Ghi Chú & Tiến Độ

### Tuần 1 (2026-03-05)
- Khởi tạo dự án trong hệ thống IPARAG
- Xác định hard constraints và signal chain

## Tài Liệu Liên Quan

- [[5_Galaxy/...]] — Các ghi chú liên quan sẽ được thêm

## Kanban

### To Do
- [ ] Nghiên cứu đặc tính piezo sensor cho ứng dụng va chạm
- [ ] Thiết kế charge amplifier stage
- [ ] Thiết kế bandpass filter stage
- [ ] Thiết kế gain + clamp stage
- [ ] Chọn MCU và thiết kế ADC interface
- [ ] Nghiên cứu thuật toán phát hiện trúng/trượt

### In Progress
- [ ]

### Done
- [x] Khởi tạo dự án và xác định constraints
