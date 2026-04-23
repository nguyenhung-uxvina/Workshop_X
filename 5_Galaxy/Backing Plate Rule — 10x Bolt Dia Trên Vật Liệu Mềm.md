---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #warning]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]]
---

# Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm

## Ý Tưởng Cốt Lõi

Khi bắt bulông qua vật liệu mềm (HDPE, foam-core, polyethylene), tấm đệm phía sau (backing plate) phải có đường kính ≥ 10 lần đường kính bulông, dày ≥ 0.5 lần đường kính bulông, với góc bo tròn ≥ 5 lần đường kính bulông. Vật liệu backing plate phải cứng hơn hull (G10, SS316, nhôm) — KHÔNG BAO GIỜ dùng HDPE/Starboard làm backing plate.

## Giải Thích Chi Tiết

**Tại sao cần oversized?** HDPE có modulus thấp (dễ uốn) và hardness thấp → dưới tải tập trung, nó bị "lún" (creep/cold flow). Một bulông M10 chỉ với washer chuẩn tạo ~2 in² diện tích chịu tải → pull-through. Tấm đệm 100×100mm tạo ~15 in² → giảm áp suất 7.5 lần.

**Sizing rules (tổng hợp từ IRClass + Practical Sailor + PPI):**

| Thông số | Quy tắc | Ví dụ M12 bolt |
|----------|---------|----------------|
| Đường kính backing plate | ≥ 10× bolt dia (foam-core) | ≥ 120mm |
| Độ dày backing plate | ≥ 0.5× bolt dia | ≥ 6mm |
| Bán kính góc bo | ≥ 5× bolt dia | ≥ 60mm radius |
| Cạnh | Tapered (vát mỏng dần) | Tránh "cookie-cutter" |

**Vật liệu backing plate — ranking:**
1. G10 (FR-4) fiberglass — cứng, không gỉ, dễ gia công
2. SS316 stainless — mạnh nhất, nặng, đắt
3. Nhôm marine-grade (5083/6061-T6) — nhẹ, đủ cứng
4. Marine plywood (epoxy-sealed) — rẻ, tạm chấp nhận
5. ~~HDPE/Starboard~~ — **CẤM** — creep, biến dạng, nứt dưới tải nén

**Fender washer trap:** Washer mỏng tiêu chuẩn (fender washer) bị uốn thành hình nón dưới tải cao → tập trung lực thay vì phân tán → cắt vào hull như wedge. PHẢI dùng tấm đệm dày, không dùng washer thay thế.

**Creep relaxation:** HDPE creep khiến lực kẹp bulông giảm theo thời gian. PPI TN-38 yêu cầu:
- Siết 4 giai đoạn tăng dần (nén 2-5% bề dày HDPE)
- Siết lại sau 4 giờ
- Kiểm tra định kỳ theo lịch bảo trì

## Tại Sao Điều Này Quan Trọng?

Đây là quy tắc thực hành bắt buộc cho AST-MSL-001 và mọi sản phẩm HDPE của Workshop X. Sai sizing backing plate = mất bia ngoài biển. IRClass (classification society) cũng yêu cầu "avoid hard points" — tấm đệm phải taper để không tạo điểm cứng đột ngột trên hull mềm.

## Liên Kết
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — vật liệu hull cần backing plate rule này
- [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]] — tương tự: con số tưởng đơn giản nhưng sai lệch lớn nếu không kiểm tra nguồn
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — backing plate sizing cần sensitivity check: nếu tải tăng 50%, plate có còn đủ?
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]] — backing plate giữ HDPE trong nén → bypass ESC

## Nguồn Gốc
- IRClass: "Guidelines on Hull Structure of Thermoplastic Vessels" Rev.1 (2024) — classification society ★★★
- PPI TN-38: "Bolt Torque for Polyethylene Flanged Joints" (2021) — industry standard ★★★
- Practical Sailor: "How Big Does a Backing Plate Need to Be?" — professional testing ★★
- NLM cross-source synthesis 18 sources, notebook `hdpe-mooring`, 2026-03-08
