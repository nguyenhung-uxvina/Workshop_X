---
created: 2026-03-25
updated: 2026-03-25
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #three-laws]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]], [[Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention]]
---

# Distortion Sequence Law — Nhôm Đảo Ngược Thép Vì Dẫn Nhiệt 4×

## Ý Tưởng Cốt Lõi

Trình tự chế tạo tối ưu cho tàu nhôm ĐẢO NGƯỢC so với tàu thép. Thép: frames-first (khung trước) → bọc tôn. Nhôm: plate-first (vỏ trước) → hàn khung vào sau. Nguyên nhân gốc: nhôm dẫn nhiệt gấp 4× thép (167 vs 50 W/mK), nên vùng ảnh hưởng nhiệt lan xa hơn, biến dạng tích lũy nghiêm trọng hơn. Sequence kiểm soát distortion phải thay đổi theo.

## Giải Thích Chi Tiết

Convention đóng tàu thép: dựng khung sườn → bọc tôn → hàn fillet liên tục (frame-to-shell). Hoạt động tốt vì:
- Thép nặng (7,800 kg/m³) → tôn cần skeleton support chống trọng lực
- Thép dẫn nhiệt thấp → distortion cục bộ, kiểm soát được

Khi chuyển sang nhôm, nhiều xưởng giữ nguyên sequence này. Kết quả: "hungry horse" — tôn gợn sóng giữa mỗi cặp khung vì fillet weld dài liên tục co kéo tôn mỏng nhôm mạnh hơn nhiều so với thép.

Đúng sequence cho nhôm (first principles):
1. Hàn butt weld seams vỏ TRƯỚC (shell formed, controlled back-stepping)
2. Hàn fillet frames vào vỏ SAU (short welds, distributed, shell đã cứng)

Lý do: butt weld = 2 mép tôn cùng co → distortion đối xứng, dễ kiểm soát. Fillet weld frame-to-shell = shell co về phía frame → bất đối xứng, tạo sóng. Nên làm butt trước (khi shell tự do) rồi fillet sau (khi shell đã stable).

### Hệ quả: Tách Butt Khỏi Fillet HOÀN TOÀN (MPF Corollary)

Nguyên tắc mạnh hơn: KHÔNG BAO GIỜ interleave butt weld phase với fillet weld phase cho nhôm. Tất cả butt/seam welds (shell) phải hoàn thành VÀ pass fairness gate TRƯỚC KHI bất kỳ fillet weld nào (frames) bắt đầu.

Kasten Marine đề xuất "hybrid" (hàn bottom frames trước topside plating) — tối ưu cho yacht < 7m (tight access). Nhưng hybrid VI PHẠM nguyên tắc tách butt/fillet: fillet welds (bottom frames) xen vào giữa butt welds (topside chưa hàn) → bottom distortion trước khi shell locked.

Cho hull ≥ 8m (người vào được bên trong, internal height ≥ 1.5m): Modified Plate-First (MPF) 3-phase sequential = tối ưu. Access argument của Kasten KHÔNG áp dụng khi hull đủ lớn.

## Tại Sao Điều Này Quan Trọng?

VN-XUONG-UUV là xuồng nhôm 8m đầu tiên Workshop X chế tạo. Nếu áp dụng quy trình thép (frames-first) → hungry horse ở vùng bottom panels giữa frame spacing 800mm → phải mài + bả fairing → tốn thời gian + chi phí. Plate-first cho V-hull developable tránh được vấn đề này từ gốc. Convention này cũng áp dụng cho mọi sản phẩm nhôm WX trong tương lai.

## Liên Kết

- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — Thermal conductivity là thuộc tính vật lý không thể bỏ qua, quyết định sequence chế tạo
- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — Distortion control là solution-determining: sai sequence → cascade toàn bộ hull quality
- [[Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention]] — Cùng pattern: convention di cư từ domain cũ (thép→nhôm, torpedo→UUV) mà không reassess physics

## Nguồn Gốc

First principles analysis, VN-XUONG-UUV Phase 2→3 construction planning, 2026-03-25. Kasten Marine + Nordkyn Design (NLM notebook skill-alboat) confirm plate-first cho aluminum developable hull. Bedrock: k_Al/k_Fe = 167/50 ≈ 3.3×.
