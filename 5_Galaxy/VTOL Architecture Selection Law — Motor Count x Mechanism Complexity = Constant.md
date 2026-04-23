---
created: 2026-04-20
updated: 2026-04-20
type: permanent-note
tags: [#type/permanent-note, #pahl, #product, #three-laws]
links: [[Siloed Engineering Trap]], [[V-Model Macro-Micro]], [[Concern Logic]], [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]]
---

## Y Tuong Cot Loi

Trong VTOL UAV, so motor va do phuc tap mechanism ti le nghich. Complexity khong mat di — chi DICH CHUYEN giua domains (Mechanical ↔ Electronic ↔ Software). Chon domain nao team manh nhat de chiu complexity.

## Giai Thich Chi Tiet

4 kien truc VTOL sap xep theo Motor × Mechanism trade-off:

| Architecture | Motors | Mechanism | SW Complexity | Tong complexity |
|---|---|---|---|---|
| Tailsitter | 2 | 0 (body tilts) | MAX (transition control) | Thap co khi, cao phan mem |
| Tilt tricopter | 3 | 2 tilt servos | MEDIUM | Can bang |
| Quadplane | 5 | 0 | MIN (don gian nhat) | Cao so motor, thap co khi + SW |
| Tilt quadrotor | 4 | 4 tilt servos | MEDIUM | Cao co khi |

Khong co free lunch. Quadplane "don gian" nhung phai chiu:
- 5 motors (trong luong, drag khi cruise)
- 4 VTOL motors idle trong cruise (dead weight)

Tilt tricopter "hieu quat" nhung phai chiu:
- Tilt mechanism backlash, alignment, servo failure mode
- Cross-domain coupling: servo timing × airspeed buildup × control law transition

## Tai Sao Dieu Nay Quan Trong?

- **Chon architecture theo nang luc domain cua team**, khong theo "cool factor" hay marketing
- WX: SW capability (ArduPilot) > mechanism capability → quadplane = phu hop nhat hien tai
- Khi WX build tilt mechanism experience (qua Stallion study + prototype) → co the xet tilt cho future variants
- Ap dung cho moi san pham co trade-off giua domains: VN-CUAV-SIM (HW fidelity vs SW compensation = ACH), VN-USV (mechanical hull vs AI autonomy)

## Lien Ket

- [[Siloed Engineering Trap]] — complexity dich chuyen giua domain = can cross-domain thinking
- [[V-Model Macro-Micro]] — integration test phai cover cross-domain coupling (servo timing × airspeed)
- [[Concern Logic]] — moi architecture co concern rieng, khong co "simple" tuyet doi
- [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]] — hieu tilt de chon quadplane

## Nguon Goc

RE: Flightory Stallion VTOL, Morphological matrix 4 VTOL architectures, VDI 2225 defense RE weights. Session 2026-04-20.
