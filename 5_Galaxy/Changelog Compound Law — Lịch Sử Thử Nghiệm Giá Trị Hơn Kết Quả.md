---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #meta, #three-laws]
links: [[Autoresearch Loop — Khi AI Tự Nâng Cấp Chính Mình]], [[Binary Eval Gate — AI Chỉ Tự Tối Ưu Khi Tiêu Chí Nhị Phân]], [[Muscle Memory Law — Skill Compounds, Tool Accumulates]]
---

# Changelog Compound Law — Lịch Sử Thử Nghiệm Giá Trị Hơn Kết Quả

## Ý Tưởng Cốt Lõi

Lịch sử ghi lại "đã thử gì, kết quả ra sao, tại sao giữ/bỏ" có giá trị compound hơn bản skill đã tối ưu. Skill tối ưu là ephemeral — model mới ra là hỏng. Changelog là permanent knowledge về cái gì hoạt động và tại sao.

## Giải Thích Chi Tiết

Khi autoresearch cải thiện một skill từ 56%→92%, output cuối cùng là file skill mới. Nhưng asset thật sự nằm ở changelog:
- Round 1: Thêm rule "headline phải có con số" → score +15%. **Tại sao:** headline vague là failure mode phổ biến nhất.
- Round 2: Thêm banned buzzwords → score +12%. **Tại sao:** AI mặc định dùng "revolutionary", "cutting-edge".
- Round 3: Thêm worked example → score +9%. **Tại sao:** show > tell cho LLM.
- Round 4: Siết word count → score -5%, revert. **Tại sao:** ngắn quá thì CTA bị hy sinh.

Bốn entries này chứa **transferable principles**: (1) ban-specific-words luôn hiệu quả, (2) worked-examples luôn giúp, (3) hard word limits có side effects. Những patterns này áp dụng cho MỌI skill, không chỉ landing page.

Tương tự git history: người giữ toàn bộ commit log học được nhiều hơn người chỉ giữ HEAD. `git log --oneline` là compressed knowledge; `git show HEAD` chỉ là snapshot.

## Tại Sao Điều Này Quan Trọng?

Workshop X có `_meta/evals/` từ Session 50, nhưng chưa có changelog infrastructure. Khi chạy autoresearch cho 32 skills, nếu chỉ lưu "improved version" mà không lưu changelog → mất compound asset. Khi Claude 5 ra, changelog cho phép agent mới pick up từ đúng chỗ agent cũ dừng lại — không cần rediscover cùng insights.

Changelog cũng giải quyết B1b (Infrastructure Trap): thay vì CEO maintain 32 skills thủ công, changelog tự accumulate cross-skill patterns mà CEO chỉ cần đọc và extract.

## Liên Kết

- [[Autoresearch Loop — Khi AI Tự Nâng Cấp Chính Mình]] — changelog là output compound quan trọng nhất của mỗi autoresearch run, không phải improved skill
- [[Binary Eval Gate — AI Chỉ Tự Tối Ưu Khi Tiêu Chí Nhị Phân]] — changelog ghi lại eval-driven changes; không có binary eval thì changelog vô nghĩa
- [[Muscle Memory Law — Skill Compounds, Tool Accumulates]] — cross-cluster D↔F: changelog biến tool accumulation (lưu trữ) thành skill compounding (học được)

## Nguồn Gốc

- Ole Lehmann, "How to 10x Your Claude Skills (Karpathy's autoresearch)", X Article, 2026-03-17
- Workshop X Session 50: analyst-trap autoresearch prototype (86%→100%), `_meta/evals/` deployed
- Ngày gặp: 2026-03-19
