---
created: 2026-03-05
updated: 2026-03-05
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/systems-thinking]
links: [[Context vs Capability — Sự Khác Biệt]], [[Shifting the Burden Archetype]], [[AI Dependency Spiral (R3)]]
---

# Context Drift Loop (R4)

## Ý Tưởng Cốt Lõi

R4 là vòng lặp trong đó CLAUDE.md (hoặc bất kỳ context file nào cho AI) dần lỗi thời so với thực tế vault → AI output lệch → người dùng mất tin tưởng hoặc fix sai chỗ → context file càng không được cập nhật. Đây là failure mode riêng của hệ thống AI-assisted KM.

## Giải Thích Chi Tiết

```
CLAUDE.md được viết (t=0)
       ↓
Vault thay đổi dần (t=1,2,3...)
       ↓
CLAUDE.md không được update
       ↓
Context gap tăng: AI hiểu vault khác thực tế
       ↓
AI output ngày càng lệch
       ↓
Hai phản ứng có thể:
  a) Bỏ qua AI output → mất giá trị AI
  b) Accept sai output → vault drift theo hướng sai
       ↓
Cả hai → CLAUDE.md càng ít được ưu tiên update
       ↓
(Vòng lặp tăng tốc)
```

**Tại sao R4 khó phát hiện:**
- Context drift xảy ra từ từ (boiling frog)
- Không có metric rõ ràng cho "CLAUDE.md đã lỗi thời bao nhiêu"
- Output lệch nhẹ trông vẫn "hợp lý" → không trigger alarm

**Cách phòng vệ:**
- Review CLAUDE.md trong weekly review (cùng lúc review Inbox)
- Sau mỗi thay đổi lớn trong vault structure → update CLAUDE.md ngay
- Dùng diff giữa CLAUDE.md description và thực tế vault

## Tại Sao Điều Này Quan Trọng?

Vì R4 là vòng lặp *duy nhất* chỉ tồn tại trong hệ thống có AI-assisted KM. Hệ thống thuần manual không có R4. Điều này nghĩa là: thêm AI vào KM = thêm một failure mode mới cần quản lý. Chi phí ẩn của AI-assisted KM.

## Liên Kết

- [[Context vs Capability — Sự Khác Biệt]] — R4 làm context suy giảm → capability bị ảnh hưởng gián tiếp
- [[Shifting the Burden Archetype]] — R4 là dạng shifting the burden: fix context thay vì fix process
- [[AI Dependency Spiral (R3)]] — R3 và R4 tương tác: R3 tăng delegation → R4 tăng drift
- [[Nested Shifting the Burden]] — R4 thường là layer 2-3 trong nested pattern

## Nguồn Gốc

- Nguồn: Phân tích vB Synthesis (Workshop X) — R4 context drift loop
- Ngày gặp: 2026-03-05
