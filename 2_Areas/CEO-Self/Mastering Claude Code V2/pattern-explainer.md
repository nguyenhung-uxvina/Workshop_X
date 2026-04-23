---
name: "Code Pattern Explainer"
description: "Auto-activates when discussing software design patterns to provide structured Vietnamese explanations with code examples"
triggers:
  - "design pattern"
  - "architecture pattern"
  - "singleton"
  - "observer"
  - "factory"
  - "strategy"
  - "decorator"
  - "adapter"
  - "repository pattern"
  - "dependency injection"
---

# Code Pattern Explainer Skill

## Pre-check
If the subject is NOT a software design pattern (e.g. "pattern" used in a general sense),
do NOT activate — respond normally without this skill's format.

## When this skill activates, explain using this structure:

### 1. Tên Pattern & Nhóm
- Tên chính thức (EN) + nhóm (Creational / Structural / Behavioral)
- Vấn đề nó giải quyết — 1 câu ngắn gọn

### 2. Khi nào DÙNG
- Tình huống cụ thể (≥2 điều kiện phải thỏa mãn)
- Dấu hiệu nhận biết trong code hiện tại

### 3. Khi nào KHÔNG DÙNG
- Over-engineering warnings
- Alternatives phù hợp hơn cho từng trường hợp

### 4. Ví dụ Code
Cung cấp ví dụ ngắn gọn, thực tế — ưu tiên Python hoặc ngôn ngữ đang dùng trong context.
Có comment giải thích từng bước quan trọng.

### 5. So sánh với Alternatives
| Pattern | Dùng khi | Trade-off |
|---------|----------|-----------|
| [pattern này] | ... | ... |
| [alternative 1] | ... | ... |
| [alternative 2] | ... | ... |

### 6. Gotcha thường gặp
- Lỗi implementation phổ biến
- Anti-pattern liên quan cần tránh
