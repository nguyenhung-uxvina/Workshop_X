---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/technology, #product, #pahl]
links: [[Trihedral Corner Reflector — RCS Amplification]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]]
---

# RCS Scaling Law — Luỹ Thừa 4 Của Edge Length

## Ý Tưởng Cốt Lõi
RCS của trihedral corner reflector tỷ lệ với a⁴ (luỹ thừa 4 của edge length). Tăng gấp đôi cạnh = RCS tăng x16. Đây là ví dụ kinh điển của nonlinear sensitivity — thay đổi nhỏ ở input tạo thay đổi khổng lồ ở output.

## Giải Thích Chi Tiết
Công thức: σ_max = 4πa⁴ / 3λ²

Tại X-band 10GHz (λ = 0.03m):
- a = 500mm → σ ≈ 290 m² (gần đạt target)
- a = 643mm → σ ≈ 800 m² (đủ mọi góc, -3dB worst case = 400 m²)
- a = 800mm → σ ≈ 1,906 m² (vượt target gần 5x)

Chênh lệch 500mm → 800mm (tăng 60% kích thước) → RCS tăng 6.6x. Đây là lý do tại sao oversizing corner reflector rẻ hơn nhiều so với dùng active radar enhancer — chỉ cần thêm vài cm nhôm thay vì hệ thống điện tử phức tạp.

Ngược lại: giảm edge 10% → RCS giảm ~35%. Sensitivity analysis (VDI 2225) phải flag parameter này.

## Tại Sao Điều Này Quan Trọng?
1. **Thiết kế:** Khi parameter có nonlinear scaling (a⁴), margin rất rẻ. Chi phí nhôm thêm 300mm edge nhỏ hơn nhiều so với giá trị RCS margin nó mang lại.
2. **Quyết định:** AST-MSL-001 giữ 800mm thay vì giảm xuống 643mm — margin gấp 5x chỉ tốn thêm ~15kg nhôm/reflector.
3. **Pattern chung:** Bất kỳ hệ thống nào có power law scaling (antenna gain ∝ D², lift ∝ v², RCS ∝ a⁴) đều có đặc tính này — oversizing input tạo disproportionate margin ở output.

## Liên Kết
- [[Trihedral Corner Reflector — RCS Amplification]] — ứng dụng trực tiếp: 12x 800mm trên AST-MSL-001
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — sensitivity analysis phải flag nonlinear parameters
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — khi RCS margin quá lớn, design space collapse theo hướng tốt: không cần active enhancer

## Nguồn Gốc
- NLM Research pipeline output (73 sources, deep mode) — 2026-03-08
- Pahl-Beitz: Engineering Design Ch. 7 — sensitivity analysis for embodiment parameters
- Đây là output đầu tiên từ /research pipeline (WX-KPIPE-001) → Galaxy note
