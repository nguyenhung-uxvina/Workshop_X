---
created: 2026-03-26
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #product, #three-laws, #warning]
links: [[Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention]], [[Physical-World Interface]]
---

# Cable Bend Radius Law — Đường Ngắn Nhất Không Phải Đường Tốt Nhất Nếu Gập

## Ý Tưởng Cốt Lõi

Tối ưu cable routing theo LENGTH (đường ngắn nhất) mà bỏ qua GEOMETRY (bán kính uốn) = gãy cáp. Fiber optic min bend radius = 10-20× cable OD. Đường cable ngắn hơn 4m nhưng có 1 sharp bend tại mép ramp > đường dài hơn 5m với gentle curves qua guide tube. Shortest path ≠ best path.

## Giải Thích Chi Tiết

VN-XUONG-UUV: khi phân tích tail-first launch (R5 context), cable routing từ tail trực tiếp ra stern fairlead = ngắn nhất (<1m vs 5m head-first). Nhưng cable phải gập qua mép ramp (radius ~5-10mm) trong khi fiber optic cần minimum 50-100mm bend radius. 1 sharp bend = đứt sợi quang = mất UUV.

Thêm vào đó: tail-first launch = UUV vào nước quay lưng về hướng mission → phải xoay 180° tại chỗ (5m, 550kg) gần xuồng với 25km tether → tangle risk với propeller.

Pattern tổng quát: khi routing bất kỳ thứ gì (cable, pipe, duct, tether), tối ưu theo 3 tiêu chí THEO THỨ TỰ:
1. **GEOMETRY** — bend radius, clearance, no kink points (FIRST)
2. **PROTECTION** — guide tube, conduit, strain relief (SECOND)
3. **LENGTH** — ngắn nhất (LAST — chỉ tối ưu sau khi 1+2 đạt)

CEO phát hiện 2 vấn đề thực tế mà phân tích "trên giấy" bỏ sót: UUV phải bơi đúng hướng ngay sau launch, và cable gập tại mép cứng = failure mode. Đây là lý do physical intuition của kỹ sư > phân tích tối ưu trừu tượng.

## Tại Sao Điều Này Quan Trọng?

Cảnh báo trap: AI optimization thiên về shortest/cheapest path. Kỹ sư biết rằng cable gập = chết. "Loại bỏ cable guide tube 5m để đơn giản hóa" nghe hợp lý trên giấy nhưng tạo failure mode mới nguy hiểm hơn cái cũ.

## Liên Kết

- [[Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention]] — PD-9 head-first confirmed lần 3 nhờ cable bend radius
- [[Physical-World Interface]] — cable bend = physical reality mà analysis trừu tượng bỏ sót
- [[Phán đoán không thể uỷ thác cho AI]] — CEO phát hiện 2 vấn đề mà AI analysis miss

## Nguồn Gốc

VN-XUONG-UUV PD-9 re-evaluation S62, 2026-03-26. 4 lần phân tích: 3/4 → head-first. Lần duy nhất tail-first "won" = thiếu 2 practical constraints (CEO caught).
