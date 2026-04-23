---
created: 2026-03-23
updated: 2026-03-23
type: sop
status: active
---

# Viber Imports — Hướng Dẫn

## Cách Export Viber Chat

1. Mở conversation cần export
2. Tap **⋮** (menu) → **Thêm** → **Xuất cuộc trò chuyện** (Export chat)
3. Chọn **Bao gồm media** nếu cần
4. Gửi qua Email hoặc lưu trực tiếp → file .zip
5. Giải nén vào thư mục này, đặt tên: `[Tên-Liên-Hệ]_YYYY-MM/`

## Cấu Trúc Export

```
Viber-Imports/
├── _README.md                  ← File này
├── Partner-ABC_2026-03/        ← Chat với đối tác
│   ├── _chat.txt               ← Nội dung chat (Viber format)
│   ├── Viber Images/           ← Ảnh
│   ├── Viber Videos/           ← Video
│   ├── Viber Audio/            ← Voice messages (.m4a/.ogg)
│   └── Viber Files/            ← PDF, docs
└── Supplier-XYZ_2026-03/
    ├── _chat.txt
    └── ...
```

## Xử Lý

Sau khi đặt folder vào đây, chạy:
```
/whatsapp-extract
```
(Skill tự detect Viber format)

## Quy Tắc

- KHÔNG để chat cá nhân không liên quan đến công việc
- KHÔNG import chats chứa thông tin mật (classified)
- Sau khi extract xong → move raw folder sang `4_Archives/Chat-Processed/`
- Mỗi tháng review: có chat nào chưa extract không?
