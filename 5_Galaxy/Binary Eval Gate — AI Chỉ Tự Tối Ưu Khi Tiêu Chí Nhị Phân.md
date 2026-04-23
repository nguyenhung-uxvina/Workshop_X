---
created: 2026-03-16
updated: 2026-03-16
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #acq, #warning]
links: [[Phán đoán không thể uỷ thác cho AI]], [[HOK Law — Tay Não Ký Ức Của Agent]], [[Changelog Compound Law — Lịch Sử Thử Nghiệm Giá Trị Hơn Kết Quả]]
---

# Binary Eval Gate — AI Chỉ Tự Tối Ưu Khi Tiêu Chí Nhị Phân

## Ý Tưởng Cốt Lõi

AI tự cải thiện (autoresearch) chỉ hoạt động khi tiêu chí đánh giá là **nhị phân** (đúng/sai, pass/fail). Tiêu chí định tính ("văn phong tốt", "thiết kế đẹp") không thể automate — vẫn đòi hỏi judgment con người.

## Giải Thích Chi Tiết

Karpathy's autoresearch loop: AI thay đổi code → chạy eval → score tăng → keep, score giảm → revert. Vòng lặp này CHỈ hoạt động vì eval là binary assertions (output < 300 words? có chứa thống kê? response time < 2s?).

Khi apply vào Workshop X skills (37 skills hiện có), hầu hết không có eval criteria. `/analyst-trap` output "tốt" hay "chưa tốt" theo tiêu chí gì? Không ai define → skill không thể tự improve.

**Trap:** AI tối ưu trên eval sai = overfitting. Nếu eval chỉ check "output > 500 words" → AI sẽ pad output. Eval phải reflect actual value, không chỉ surface metrics.

**Goodhart Gradient:** Mọi eval erode theo thời gian. Skill đạt 95% trên checklist cũ có thể sản xuất output mà expert sẽ reject — vì "good" đã thay đổi mà eval thì đứng yên. Cần refresh cadence: mỗi tháng, human review 5 output "perfect" (100% pass), hỏi "thật sự tốt chưa?" Nếu ≥1 bị reject → update checklist. Ole Lehmann's case: 56%→92% trong 4 rounds, nhưng 56% = skill có bug, không phải optimization thật sự. Giá trị thật của autoresearch nằm ở vùng 85%→95% — nơi Goodhart bắt đầu cắn.

## Tại Sao Điều Này Quan Trọng?

Workshop X có 37 skills nhưng zero evals. Mỗi skill nên có `evals.json` với 3-5 binary assertions. Ví dụ `/analyst-trap`: (1) mentions dP/dt? (2) cites specific project? (3) gives ratio number? (4) recommends action? Có evals → skill có thể tự iterate qua `/loop`.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — judgment chọn TIÊU CHÍ eval vẫn là Core. AI chỉ iterate TRÊN criteria đã set.
- [[HOK Law — Tay Não Ký Ức Của Agent]] — evals là "bộ nhớ đánh giá" cho agent, parallel với tay-não-ký ức.
- [[Changelog Compound Law — Lịch Sử Thử Nghiệm Giá Trị Hơn Kết Quả]] — eval drives changelog; changelog outlives improved skill

## Nguồn Gốc

- NLM: "Claude Code và Karpathy Autoresearch: Kỷ Nguyên Tự Tối Ưu Hóa" (6 sources)
- Ole Lehmann, "How to 10x Your Claude Skills", X Article, 2026-03-17 (Goodhart Gradient addition)
- Ngày gặp: 2026-03-16, updated 2026-03-19
