---
created: 2026-03-05
updated: 2026-03-05
type: permanent-note
tags: [#type/permanent-note, #topic/systems-thinking, #topic/ai-tools, #topic/learning]
links: [[Phán đoán không thể uỷ thác cho AI]], [[AI Dependency Spiral (R3)]], [[Valley of Despair — Pre-threshold]]
---

# dJ/dt > dD/dt — Điều Kiện Sống Còn

## Ý Tưởng Cốt Lõi

Tốc độ phát triển phán đoán (dJ/dt) phải lớn hơn tốc độ tăng uỷ thác (dD/dt). Khi vi phạm điều kiện này, R3 (AI Dependency Spiral) thắng — và phán đoán sẽ suy yếu không thể đảo ngược trong thực tế.

## Giải Thích Chi Tiết

```
J = Judgment capability (khả năng phán đoán)
D = Delegation level (mức độ uỷ thác cho AI)

Điều kiện sống còn: dJ/dt > dD/dt

Nghĩa là: Mỗi khi tăng delegation thêm 1 đơn vị,
phải đảm bảo judgment đã tăng ít nhất 1 đơn vị trước đó.
```

**Ba kịch bản:**
1. **dJ/dt > dD/dt** → An toàn. Delegation là leveraged judgment, không phải replacement.
2. **dJ/dt ≈ dD/dt** → Nguy hiểm. Chỉ cần một lần tăng delegation nhanh hơn → rơi vào R3.
3. **dJ/dt < dD/dt** → R3 đang thắng. Judgment atrophy bắt đầu. Cần giảm delegation ngay.

**Cách đo thực tế:**
- Track tỷ lệ manual/delegate hàng tuần (THỊNH protocol)
- Rule: 10 lần manual trước khi delegate (Manual First Rule)
- Nếu thấy "không thể làm manual nữa" → dJ/dt đã < dD/dt

## Tại Sao Điều Này Quan Trọng?

Vì đây là *công thức duy nhất* phân biệt giữa "dùng AI thông minh" và "nghiện AI". Không cần bỏ AI — chỉ cần đảm bảo judgment tăng nhanh hơn delegation. Nó biến một cảnh báo mơ hồ ("cẩn thận với AI") thành một điều kiện có thể kiểm tra được.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — J là thứ không thể outsource; chỉ có thể tự phát triển
- [[AI Dependency Spiral (R3)]] — Vi phạm dJ/dt > dD/dt là trigger chính của R3
- [[Valley of Despair — Pre-threshold]] — Giai đoạn dJ/dt thấp nhất, dễ vi phạm nhất
- [[Shifting the Burden Archetype]] — dJ/dt < dD/dt là toán học hoá "burden đang shift"

## Nguồn Gốc

- Nguồn: Phân tích vB Synthesis (Workshop X) — mô hình toán cho R3 survival condition
- Ngày gặp: 2026-03-05
