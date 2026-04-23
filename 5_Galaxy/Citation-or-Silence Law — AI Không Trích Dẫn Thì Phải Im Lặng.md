---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #acq, #warning, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]]
---

# Citation-or-Silence Law — AI Không Trích Dẫn Thì Phải Im Lặng

## Ý Tưởng Cốt Lõi

Mọi output của AI trong ngữ cảnh quốc phòng/pháp lý PHẢI kèm trích dẫn nguồn cụ thể (tên văn bản, Điều, Khoản, Điểm) HOẶC trả lời "Tôi không tìm thấy quy định liên quan." KHÔNG BAO GIỜ bịa thông tin. Câu trả lời "gần đúng" không trích dẫn tệ hơn không trả lời — giống [[Training Scars]] nhưng cho quyết định hành chính.

## Giải Thích Chi Tiết

LLM hallucination là fundamental limitation (giảm nhưng không loại bỏ). Trong ngữ cảnh dân sự, hallucination = phiền toái. Trong ngữ cảnh quân sự/pháp lý, hallucination = hậu quả không đảo ngược:
- Trích dẫn sai điều khoản → văn bản bị trả lại, mất thời gian
- Áp dụng sai quy định → vi phạm kỷ luật, pháp luật
- Tư vấn sai quy trình → sự cố an toàn, trách nhiệm pháp lý

**Nguyên tắc congruency mở rộng:** [[Haptic Congruency Rule]] nói ≥70% lực thật HOẶC 0%, không bao giờ 10-50% (training scars). Tương tự: citation phải chính xác HOẶC AI im lặng, không bao giờ "có lẽ ở Điều 15 gì đó."

**RAG + source citation** giảm risk bằng cách buộc AI chỉ trả lời dựa trên tài liệu đã index. Nhưng RAG cũng có thể retrieve sai chunk → citation sai. Vì vậy disclaimer vĩnh viễn: "Tham khảo AI — xác nhận với pháp chế trước khi áp dụng."

## Tại Sao Điều Này Quan Trọng?

Áp dụng cho MỌI sản phẩm AI Workshop X phục vụ quốc phòng:
- **VN-AIA-128:** Tra cứu quy định → citation = tên VB + Điều + Khoản
- **VN-12.7MM-SIM I-08:** AI coaching → citation = engagement data (shot #, time, angle)
- **BB-01 LOMAH:** ML classification → citation = confidence score + waveform
- **Nguyên tắc:** AI output LUÔN kèm evidence trail. Không evidence = không output.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — citation cho phép human verify → judgment vẫn thuộc con người
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — thông tin sai tệ hơn không thông tin, giống luyện tập sai tệ hơn không luyện
- [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]] — congruency principle: chính xác hoặc im lặng, không bao giờ "gần đúng"
- [[PLAUSIBLE 9-Check — Defense AI Output Validation]] — citation là 1 trong 9 checks

## Nguồn Gốc

- Phân tích OpenClaw + NemoClaw cho VN-AIA-128 (Session 54, 2026-03-20)
- Galaxy synthesis: Congruency Rule + Training Scars + Judgment Primacy → extended to information domain
