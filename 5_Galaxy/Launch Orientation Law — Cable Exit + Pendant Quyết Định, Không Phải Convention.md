---
created: 2026-03-24
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #pahl, #three-laws]
links: [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Data-First Design — Thiết Kế Capture Trước Actuator]]
---

# Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention

## Ý Tưởng Cốt Lõi

Hướng triển khai UUV từ ramp (mũi trước hay đuôi trước) KHÔNG được quyết định bởi convention "torpedo luôn đi mũi trước" hay "cable run ngắn hơn = tốt hơn." Hướng tối ưu được xác định bởi 3 bedrock constraints theo thứ tự ưu tiên: (1) cable exit point KHÔNG ĐƯỢC đi qua funnel/rollers khi thu hồi (fouling = mất UUV), (2) phóng và thu hồi PHẢI cùng hướng (không xoay 550 kg trên biển), (3) UUV tiếp cận funnel bằng forward thrust (tự nhiên, controllable).

## Giải Thích Chi Tiết

UUV hình torpedo KHÔNG đối xứng trước-sau: mũi có sonar dome, đuôi có propeller + rudder + cable exit. Khi phân tích first principles cho VN-XUONG-UUV (5m, 550 kg, stern ramp 12°):

- **Torpedo convention (nose-first launch vì streamlined)** tồn tại vì torpedo tube phóng ở 30+ knots. UUV trượt ramp chỉ ~0.5 m/s — drag shape IRRELEVANT ở Reynolds number này.
- **"Cable run ngắn" (tail-first)** — v1 của note này ưu tiên tail-first vì cable exit gần fairlead (~1m vs 5m). SAI vì: fiber optic 0.5 kg/km → 5m = 2.5 gram = không đáng kể. Cable guide tube (~3 kg nhôm) giải quyết hoàn toàn.
- **Cable fouling** là constraint THẬT: nếu cable exit ở đuôi mà thu hồi đuôi trước → cable vào funnel cùng UUV → bị ép giữa thân UUV và con lăn UHMWPE → đứt tether → mất điều khiển = mất UUV ($100K+).
- **Consistency** là constraint THẬT: xoay UUV 550 kg 180° trên xe nôi tại SS 3 trên xuồng 8m = unsafe + cần thêm mechanism. Phóng và thu hồi PHẢI cùng hướng.
- **Forward approach** là constraint THẬT: UUV bơi tới (mũi trước) tự nhiên và chính xác. Lùi vào funnel (đuôi trước) = mất hiệu quả lái (rudder sau propeller khi lùi).

**Resolved (2026-03-25):** Cable exit ở đuôi [L2 confirmed] → thu hồi MŨI TRƯỚC (đuôi ở ngoài funnel) → phóng MŨI TRƯỚC (consistent) → thêm cable guide tube trên mạn ramp. HEAD-FIRST cho cả phóng lẫn thu hồi.

**Confirmed by physics (2026-03-26 — ảnh thực tế đuôi UUV):** Head-first KHÔNG còn là judgment call mà là BẮT BUỘC vật lý. Đuôi UUV có 4 control fins cruciform (effective W=600mm) >> V-saddle opening (440mm). Tail-first = fins KHÔNG VÀO ĐƯỢC V-saddle.

**FINAL confirmation (2026-03-26 — R5 redesign + CEO review):** Sau khi R5 loại bỏ ramp recovery, tail-first tưởng thắng (cable path ngắn hơn 4m). Nhưng CEO phát hiện 2 physics constraints bị bỏ sót: (1) UUV 5m/550kg phải xoay 180° sau tail-first launch → tangle risk với 25km tether gần xuồng, (2) fiber optic gập tại mép ramp (5-10mm radius) < min bend radius (50-100mm) → đứt sợi quang. HEAD-FIRST = FINAL. 4 lần phân tích, 3/4 → head-first. Xem thêm: [[Cable Bend Radius Law — Đường Ngắn Nhất Không Phải Đường Tốt Nhất Nếu Gập]].

## Tại Sao Điều Này Quan Trọng?

1 câu hỏi "cable exit ở đầu nào?" cascade toàn bộ LARS geometry: hướng phóng, hướng thu hồi, cable routing, vị trí fairlead, có cần mechanism xoay hay không. Nếu giả định sai → rework Phase 3. Interface data phải thu thập TRƯỚC KHI vẽ GA sketch.

## Liên Kết

- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — Cable exit point chính là solution-determining sub-function: 1 interface nhỏ cascade toàn bộ LARS layout
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — Convention "nose-first" và "short cable run" là abstraction; cable fouling risk là physical reality
- [[Data-First Design — Thiết Kế Capture Trước Actuator]] — Phải biết cable exit data trước khi design ramp orientation

## Nguồn Gốc

First principles analysis, VN-XUONG-UUV Phase 2 design review, 2026-03-24. Updated 2026-03-25 with confirmed cable exit at tail [L2] → resolved head-first for both launch and recovery.
