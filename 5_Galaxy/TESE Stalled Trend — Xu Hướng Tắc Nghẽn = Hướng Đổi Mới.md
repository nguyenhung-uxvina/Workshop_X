---
created: 2026-03-26
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #pahl, #three-laws]
links: [[TRIZ × Pahl-Beitz — Contradiction Finder Nâng Innovation Level Từ 1-2 Lên 2-4]], [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]]
---

# TESE Stalled Trend — Xu Hướng Tắc Nghẽn = Hướng Đổi Mới

## Ý Tưởng Cốt Lõi

Altshuller xác định 8 xu hướng tiến hóa kỹ thuật (TESE). Khi sản phẩm được chấm điểm 1-5 cho mỗi trend, trend nào bị "stalled" (score < 3 và không có working principle nào address) = hướng đổi mới có leverage cao nhất. Trend 5 (Uneven Development) đặc biệt mạnh: nó chỉ ra subsystem nào đang là bottleneck.

## Giải Thích Chi Tiết

8 Trends: Wholeness, Energy Flow, Rhythm Coordination, Ideality, Uneven Development, Super-system, Macro→Micro, Dynamicity.

Cách dùng: chấm sản phẩm hiện tại → tìm trend stalled → generate working principle mới để advance trend đó → feed vào morphological matrix.

Ví dụ: VN-12.7MM-SIM stalled ở Trend 7 (Macro→Micro, score 2) — vẫn dùng cơ cấu khí nén macro. Nhưng defense constraint: Trend 7 ceiling = 3 vì ruggedization yêu cầu cơ cấu chịu được MIL-STD-810.

Defense constraints trên TESE:
- Trend 7 (Macro→Micro): ceiling ≤ 3 trừ khi field-level solution proven cho defense
- Trend 8 (Dynamicity): ceiling bởi VN manufacturing capability (flexible/field mechanisms cần precision tooling)
- Trend 6 (Super-system): ACH tự nhiên advance trend này (hardware mono → hardware+AI bi → data poly)

## Tại Sao Điều Này Quan Trọng?

Thay đổi cách thiết kế: thay vì brainstorm random, TESE cho target có hệ thống. Stalled trend = highest ROI innovation effort.

## Liên Kết

- [[TRIZ × Pahl-Beitz — Contradiction Finder Nâng Innovation Level Từ 1-2 Lên 2-4]] — TESE + Contradiction Matrix = 2 công cụ TRIZ chính cho Phase 2
- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — Trend 5 (Uneven Development) chỉ ra SF nào đang bottleneck

## Nguồn Gốc

Altshuller TESE (validated on 200K+ patents). WX adaptation 2026-03-26 trong helix-concept-generate Step 1c. NLM notebook: triz-adv.
