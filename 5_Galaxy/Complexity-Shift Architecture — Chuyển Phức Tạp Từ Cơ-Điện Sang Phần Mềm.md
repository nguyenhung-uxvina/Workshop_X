---
created: 2026-04-21
updated: 2026-04-21
type: permanent-note
tags: [#type/permanent-note, #acq, #product, #three-laws]
links: [[ACH Boundary Rule — Information vs Physical Forces]], [[Computational Photography Analogy — ACH Là Night Mode Cho Hardware]], [[Software-Determines Law — 90% Giá Trị Mô Phỏng Nằm Ở Phần Mềm]]
---

# Complexity-Shift Architecture — Chuyển Phức Tạp Từ Cơ-Điện Sang Phần Mềm

## Ý Tưởng Cốt Lõi

Khi target fidelity cho phép (ví dụ L3 = 70%), dịch chuyển system complexity từ Mech/Elec/Ctrl sang Software domain ĐỒNG THỜI giảm: unit cost (-90%), IP risk (SW = trade secret, khó patent), component count (-60%), control complexity (-80%) — VÀ ĐỒNG THỜI tăng: iteration speed (SW update vs HW redesign), compound moat (data + AI), sovereignty (SW = nhân lực nội, HW = nhập khẩu).

## Giải Thích Chi Tiết

RE ACME GAR vs WX thiết kế cho cùng bài toán (recoil simulation):

| Domain | ACME | WX | Hướng dịch chuyển |
|--------|------|----|----|
| Mech | 40% (motor+gearbox+linkage+tray) | 60% nhưng CỰC KỲ ĐƠN GIẢN (masselotte 2-3 chi tiết) | Mech đơn giản hóa |
| Elec | 30% (FOC driver, Hall sensors, 72V) | 20% (MOSFET relay) | Elec giảm 70% |
| Ctrl | 20% (5 control loops, PID, FOC, 10kHz) | 10% (2 loops, on/off, 100Hz) | Ctrl giảm 80% |
| **SW** | **10%** (weapon profiles, basic host) | **55%** (Unity engine, AI coaching, scenario, AAR) | **SW tăng gấp 5×** |

Kết quả: ACME = $15K subsystem, 22 chi tiết, 5 control loops. WX = $420 subsystem, 8 chi tiết, 2 loops. Cùng L3 training fidelity.

**Điều kiện áp dụng:** Chỉ khi target fidelity < 100%. Nếu cần full-force recoil (L5), phải đầu tư HW. Nhưng 80% training simulator use cases target L3-L4 — đủ điều kiện cho complexity shift.

**ACH connection:** Đây chính là ACH thesis dưới góc nhìn systems architecture. ACH = "AI compensates hardware" = "shift complexity to SW domain where AI lives."

## Tại Sao Điều Này Quan Trọng?

- Mọi sản phẩm WX mới: hỏi "fidelity target cho phép L3?" → nếu có → shift to SW
- Compound moat: SW + data = defensible. HW = commodity, dễ copy. AI coaching = không thể copy bằng RE.
- VN advantage: VN có nhân lực SW (rẻ, giỏi), thiếu nhân lực precision HW. Shift to SW = play to VN strength.
- Cảnh báo: KHÔNG shift sang SW nếu function là physically-bound ([[ACH Boundary Rule]]). Force generation = physics. AI coaching = information. Biết ranh giới.

## Liên Kết

- [[ACH Boundary Rule — Information vs Physical Forces]] — ranh giới: force = physical (không shift), coaching = information (shift)
- [[Computational Photography Analogy — ACH Là Night Mode Cho Hardware]] — cùng pattern: phone camera HW tệ hơn DSLR, nhưng SW (Night Mode) bù đắp. ACH = Night Mode cho military training.
- [[Software-Determines Law — 90% Giá Trị Mô Phỏng Nằm Ở Phần Mềm]] — evidence: 90% giá trị sim = SW (scenario, ballistic, scoring, AI). HW chỉ là "container."

## Nguồn Gốc

- RE: ACME GAR GTS Stage 2M (Cross-Domain Analysis: allocation shift Mech/Elec→SW)
- VDI 2225 comparison: ACME $15K vs WX $420 at same L3 fidelity
- Ngày: 2026-04-21
