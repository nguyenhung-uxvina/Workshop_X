---
created: 2026-04-20
updated: 2026-04-20
type: permanent-note
tags: [#type/permanent-note, #pahl, #defense, #three-laws, #warning]
links: [[Physical-World Interface]], [[RCS Scaling Law]], [[CTE Mismatch Rule]], [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]]
---

## Y Tuong Cot Loi

Scaling hobby product (3kg) len military (25kg) KHONG phai phong to tuyen tinh. Tai ~10× mass, moi thu thay doi: material regime, manufacturing process, failure modes, qualification requirements. RE gia tri o architecture + control logic, KHONG o material + manufacturing detail.

## Giai Thich Chi Tiet

Stallion VTOL 3kg → TARGET-DRONE VTOL 25kg (~8× mass). Nhung thay doi KHONG tuyen tinh:

**Material regime change:**
- 3kg: LW-PLA 3D print (density 0.5 g/cm³, tensile 30 MPa)
- 25kg: Glass/carbon composite (density 1.5 g/cm³, tensile 300+ MPa)
- Hoan toan khac manufacturing: FDM printer → composite layup + vacuum bag + oven cure

**Loads nonlinear (cube-square law):**
- Mass scales as L³, wing area as L² → wing loading tang
- Structural loads scale faster than structural capability
- Flutter, aeroelastic effects XUAT HIEN o 25kg ma KHONG co o 3kg

**Qualification appears:**
- 3kg: khong can MIL-STD, bay duoc la du
- 25kg military: MIL-STD-810G (6+ environmental tests), EMC MIL-STD-461G, defense acceptance 3-level
- Cost: $0 → $80-150K qualification

**Failure modes shift:**
- 3kg: crash = $400 loss, rebuild
- 25kg: crash = $15,000 loss + safety investigation + potential program delay
- EMC: 3 small motors = negligible. 5 large motors = GPS interference, datalink disruption

**Cai GI reusable khi scaling:**
- Architecture decision (quadplane vs tilt) ✅
- ArduPilot configuration methodology ✅
- Transition safety logic ✅
- Function structure (6-flow) ✅

**Cai GI KHONG reusable:**
- Material selection ❌
- Manufacturing process ❌
- Structural analysis ❌ (new load regime)
- Qualification approach ❌ (new requirement)

## Tai Sao Dieu Nay Quan Trong?

- **Linear scaling trap** = loi RE pho bien nhat: "chi can lam lon hon" → that bai khi regime thay doi
- RE budget allocation: dau tu nhieu cho architecture/control learning, it cho material/manufacturing detail (se thay doi)
- WX applicable: TARGET-DRONE simple (200 shipped) → VTOL variant, BB-01 (3 units) → production scale, VN-AST (2 bo) → STT-B fleet
- Moi lan scale 10×, plan nhu NEW PRODUCT, khong nhu "version lon hon"

## Lien Ket

- [[Physical-World Interface]] — scaling thay doi physics, khong chi dimensions
- [[RCS Scaling Law]] — RCS scales voi kich thuoc — da co Galaxy note nay
- [[CTE Mismatch Rule]] — composite scaling tao CTE problems o joints
- [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]] — RE value o architecture, khong o material detail

## Nguon Goc

RE: Flightory Stallion VTOL (3kg) → WX TARGET-DRONE VTOL (25kg). Stage 2B RE Complexity Classification changed from AMBER to RED khi apply military scaling. Session 2026-04-20.
