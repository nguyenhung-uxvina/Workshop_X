---
created: 2026-03-23
updated: 2026-03-23
type: sop
status: active
---

# WhatsApp Imports — Hướng Dẫn

## Cách Export WhatsApp Chat

> **LƯU Ý:** Export Chat chỉ có trên **WhatsApp Mobile** (Android/iOS), KHÔNG có trên WhatsApp Desktop Windows.

### Từ Android:
1. Mở chat → tap **⋮** → **Thêm** → **Xuất cuộc trò chuyện**
2. Chọn **Bao gồm media** hoặc **Không có media**
3. Gửi qua Email / Google Drive → tải về PC → giải nén vào thư mục này

### Từ iPhone:
1. Mở chat → tap tên chat → kéo xuống → **Export Chat**
2. Chọn có/không media
3. AirDrop / Email → tải về PC

### Workaround trên Desktop (nếu không export được):
1. Mở chat trên WhatsApp Desktop
2. Click **⋮** → **Select messages** → chọn các tin nhắn quan trọng
3. Copy → paste vào file `_chat.txt` trong subfolder tương ứng
4. Tải media riêng (click vào ảnh/PDF → Save as)

## Cấu Trúc Export

```
WhatsApp-Imports/
├── _README.md              ← File này
├── Viettel-HD128_2026-03/  ← Ví dụ: chat với HD128
│   ├── _chat.txt           ← Nội dung chat (rename từ WhatsApp Chat)
│   ├── IMG-20260323-WA0001.jpg
│   ├── DOC-20260323-WA0001.pdf
│   └── PTT-20260323-WA0001.opus  ← Voice notes
└── Team-Workshop-X_2026-03/
    ├── _chat.txt
    └── ...
```

## Xử Lý

Sau khi đặt folder vào đây, chạy:
```
/whatsapp-extract
```

Skill sẽ:
1. Parse chat format → identify participants, timeline, media
2. Extract signals (decisions, questions, patterns, action items)
3. Đề xuất routing (Galaxy, SOP, Project Status, KB)
4. CEO validate trước khi route

## Quy Tắc

- KHÔNG để chat cá nhân không liên quan đến công việc
- KHÔNG import chats chứa thông tin mật (classified)
- Sau khi extract xong → move raw folder sang `4_Archives/Chat-Processed/`
- Mỗi tháng review: có chat nào chưa extract không?
