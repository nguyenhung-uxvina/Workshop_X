---
created: 2026-03-05
updated: 2026-03-05
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/knowledge-management]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Shifting the Burden Archetype]]
---

# Context vs Capability — Sự Khác Biệt

## Ý Tưởng Cốt Lõi

**Context** là thông tin về bạn mà AI có thể nhận. **Capability** là khả năng phán đoán thực sự. CLAUDE.md cải thiện context — nhưng không tăng capability của AI hay của bạn.

## Giải Thích Chi Tiết

**Confusion phổ biến:** "AI ngày càng hiểu tôi hơn" = "AI ngày càng có capability cao hơn về domain của tôi."

Thực tế:
```
Với CLAUDE.md tốt:
  AI biết context của bạn → output relevant hơn → "feels smarter"

Nhưng những thứ KHÔNG thay đổi:
  AI's judgment capability:                   UNCHANGED
  AI's understanding của domain bạn:          UNCHANGED
  AI's ability to catch errors in thinking:   UNCHANGED
  
"Personalized OS" = highly relevant, same underlying model
```

**Hai cách AI có thể sai:**
1. AI có context kém → output không relevant → **dễ nhận ra**
2. AI có context tốt nhưng judgment sai → output relevant nhưng sai → **khó nhận ra hơn**

CLAUDE.md giải quyết loại 1. Nó không giải quyết loại 2. Đây là tại sao cần maintain Human Judgment để catch loại 2.

**Phân biệt Current vs Fundamental Limitation:**
- Context amnesia → CLAUDE.md giải quyết được ✅ (current limitation)
- AI bear consequences khi output sai → Fundamental limitation (không có skin in the game)
- AI detect khi output của chính nó sai → Fundamental limitation

## Tại Sao Điều Này Quan Trọng?

Nhầm lẫn context với capability dẫn đến over-trust: bạn assume AI "hiểu" vấn đề sâu hơn nó thực sự hiểu. Duy trì phân biệt này giúp bạn dùng AI đúng tầm — amplifier, không phải oracle.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — Vì context tốt không build judgment cho bạn
- [[Shifting the Burden Archetype]] — CLAUDE.md tốt là symptomatic fix nếu dùng để replace judgment

## Nguồn Gốc

- Nguồn: IPARAG_AI_SecondBrain_vB_Synthesis vB — Debate Point 3 (Workshop X)
- Ngày gặp: 2026-03-05
