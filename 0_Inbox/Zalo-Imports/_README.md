---
created: 2026-03-23
updated: 2026-03-23
type: sop
status: active
---

# Zalo Imports — Hướng Dẫn

## Cách Capture Zalo Chat

> **Zalo KHÔNG có chức năng Export Chat** (cả mobile lẫn PC). Phải capture thủ công.

### Cách 1: Copy-paste tin nhắn (nhanh nhất)
1. Mở chat trên **Zalo PC**
2. Kéo chọn (select) các tin nhắn cần lưu
3. Ctrl+C → paste vào file `_chat.txt` trong subfolder
4. Tải media riêng: click vào file/ảnh → Download (↓)

### Cách 2: Dùng "Đánh dấu tin quan trọng" trước
1. Trong chat, right-click tin nhắn quan trọng → **Đánh dấu tin quan trọng**
2. Sau đó vào danh sách tin đánh dấu → copy tất cả
3. Paste vào `_chat.txt`

### Cách 3: Tab "File" (cho tài liệu)
1. Trong chat → click tab **File** (góc trên)
2. Thấy tất cả file đã chia sẻ → Download từng file cần thiết
3. Lưu vào subfolder `files/`

### Đặt tên folder: `[Tên-Liên-Hệ]_YYYY-MM/`

## Cấu Trúc Export

```
Zalo-Imports/
├── _README.md                  ← File này
├── Viettel-HD128_2026-03/      ← Chat với HD128
│   ├── _chat.txt               ← Nội dung chat
│   ├── photos/                 ← Ảnh
│   ├── videos/                 ← Video
│   └── files/                  ← PDF, Word, Excel
└── Team-WX-Internal_2026-03/
    ├── _chat.txt
    └── ...
```

## Xử Lý

Sau khi đặt folder vào đây, chạy:
```
/whatsapp-extract
```
(Skill tự detect Zalo format)

## Ưu Tiên Export

1. **Viettel/HD128** — requirement clarifications, approval context
2. **Đối tác kỹ thuật** — specs, drawings, test results
3. **Team nội bộ** — design decisions, process logic
4. **Nhà cung cấp** — quotes, lead times, material specs

## Quy Tắc

- KHÔNG để chat cá nhân không liên quan đến công việc
- KHÔNG import chats chứa thông tin mật (classified)
- Sau khi extract xong → move raw folder sang `4_Archives/Chat-Processed/`
- Mỗi tháng review: có chat nào chưa extract không?
