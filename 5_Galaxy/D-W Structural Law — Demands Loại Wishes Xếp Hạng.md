---
created: 2026-03-21
updated: 2026-03-21
type: permanent-note
tags: [#type/permanent-note, #pahl, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]]
---

## Ý Tưởng Cốt Lõi

Demands và Wishes có vai trò LOGIC khác nhau, không phải khác nhau về mức quan trọng. Demands = binary knockout (solution vi phạm bất kỳ Demand nào → loại, không chấm điểm). Wishes = scalar scoring (tham gia VDI 2225 qua weighted evaluation). Confuse hai loại → hoặc over-constraint (mọi thứ = Demand → paralysis) hoặc under-constraint (mọi thứ = Wish → chaos).

## Giải Thích Chi Tiết

Pahl-Beitz Ch5.2 phân loại requirements:
- **D (Demand):** Phải đạt. Không đạt = loại concept, không bàn thêm. VD: "Không được phát tia lửa" cho hệ thống trong môi trường dễ cháy.
- **W (Wish):** Muốn đạt, nhưng không đạt thì vẫn chấp nhận được nếu bù bằng ưu điểm khác. VD: "Trọng lượng <50kg" — 55kg vẫn OK nếu performance vượt trội.

**Hai failure modes:**
1. **Over-constraint (FM-2a):** Coi mọi W thành D → không concept nào survive screening → dự án stuck. Xảy ra khi stakeholder nói "must have" cho mọi thứ.
2. **Under-constraint (FM-2b):** Coi D thành W → concept nguy hiểm survive vì score cao overall → rủi ro safety/compliance. Xảy ra khi engineers muốn "flexible" để bảo vệ concept yêu thích.

**Key insight:** Một Wish có thể cực kỳ quan trọng chiến lược (VD: "sản xuất được tại VN" — import independence) mà vẫn là Wish vì không loại concept nếu không đạt. Quan trọng ≠ Demand. Logic role ≠ importance.

**Living document:** D/W classification có thể thay đổi khi có thông tin mới. W → D khi phát hiện thực ra là safety-critical. D → W khi constraint ban đầu hóa ra fictitious.

## Tại Sao Điều Này Quan Trọng?

VN-12.7MM-SIM: "Recoil impulse matches live 12.7mm ±X%" = Demand (training transfer phụ thuộc). "Weight <80kg" = Wish (nặng hơn OK nếu performance tốt). Confuse → chọn concept nhẹ nhưng recoil sai = train wrong muscle memory = [[Training Scars]].

## Liên Kết

- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — Wishes trở thành VDI criteria, Demands không tham gia scoring
- [[Phán đoán không thể uỷ thác cho AI]] — D/W classification = CEO judgment, AI không thể phân biệt
- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — reliability thường là Demand, precision thường là Wish

## Nguồn Gốc

- Pahl-Beitz Ch5.2 "Setting Up a Requirements List" — D/W/X classification
- Deep Analysis FM-2: "Conflating Demands and Wishes"
- Deep Analysis 10 key files, 2026-03-21, /learning --deep
