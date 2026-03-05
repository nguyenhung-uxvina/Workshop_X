---
created: 2026-01-22
updated: 2026-03-05
type: project
status: on-hold
deadline: null
area: "[[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]]"
tags: [#type/project, #status/on-hold, #topic/electronics, #topic/technology]
---

# VN-AST-MSL-001 "THANH TRI" — Platform Muc Tieu Chong Ham

## Tong Quan

| | |
|--|--|
| **Bat dau** | 2026-01-22 |
| **Deadline** | Chua xac dinh (on-hold, cho IRONMESH priority) |
| **Area** | [[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]] |
| **Trang thai** | On-hold |
| **Methodology** | Pahl & Beitz Systematic Design (VDI 2221/2225) |
| **DMIR Phase** | Reverse-engineering learning exercise |

## Nhiem Vu

> Thiet ke va che tao **platform muc tieu noi tren mat nuoc** de su dung trong huan luyen ten lua chong ham cua Hai quan Viet Nam. Platform phai mo phong dac tinh radar va hong ngoai cua tau chien co nho, hoat dong duoc trong dieu kien Bien Dong voi chi phi thap va kha nang che tao noi dia cao.

## Tieu Chi Hoan Thanh

> Du an HOAN THANH khi:
> - Prototype hoat dong tren bien, phat hien duoc boi radar va IR seeker
> - Chi phi <= 200M VND (~$8,000 USD)
> - Noi dia hoa >= 90%
> - Thoi gian che tao <= 4 tuan

---

## Yeu Cau Ky Thuat (Requirements)

| ID | Yeu Cau | Gia Tri | Loai |
|----|---------|---------|------|
| RQ-SG-001 | RCS (Radar Cross Section) | >= 400 m2 (X-band) | D |
| RQ-SG-002 | IR signature | >= 250 C (mo phong ong khoi tau) | D |
| RQ-PL-001 | Payload capacity | >= 1,200 kg | D |
| RQ-ST-001 | Suc noi du tru | Safety Factor >= 2.5 | D |
| RQ-ST-002 | On dinh (Metacentric Height) | GM > 0.5m | D |
| RQ-OP-001 | Hoat dong | Sea State 3-4 | D |
| RQ-SF-001 | Song sot | Sea State 5-6 (khong chim) | D |
| RQ-EC-001 | Chi phi | <= 200M VND | D |
| RQ-SC-001 | Thoi gian che tao | <= 4 tuan | D |
| RQ-PR-001 | Noi dia hoa | >= 90% | D |

---

## Phuong An Duoc Chon: V5 HYBRID

### Concept Selection (VDI 2225)

| Rank | Concept | Rating | Decision |
|:----:|---------|:------:|----------|
| **1** | **V5: Hybrid (HDPE + Pontoon)** | **93.8%** | **SELECTED** |
| 2 | V1: HDPE Tron 3 tang | 85.0% | Reserve |
| 3 | V2: Pontoon 100% | 78.8% | Low-cost option |
| 4 | V4: Catamaran | 76.3% | Eliminated |
| 5 | V3: Steel Platform | 67.5% | Eliminated |

### Thiet Ke V5 Hybrid — Tong Hop

```
Vong HDPE 2 tang (foam-filled, D=6.0m)
  + 6 pontoon phu COTS (quick-release)
  + Khung radial 6 thanh thep (tu tam ra)
  + Cot mast trung tam (H=3.0m)
  + 12 corner reflectors (RCS omnidirectional)
  + Propane burner x2 (IR, 5kW, dual redundancy)
  + GPS beacon + SOLAS light
  + Helix anchor (central, single-point mooring)
```

### Thong So Ky Thuat

| Thong So | Gia Tri | Don Vi |
|----------|:-------:|:------:|
| Duong kinh vong HDPE | 6.0 | m |
| Duong kinh tong (voi pontoon) | 8.0 | m |
| Chieu cao platform | 1.0 | m (2 x O500mm) |
| Chieu cao thuong tang | 2.5 | m |
| Chieu cao tong tu mat nuoc | 4.5 | m |
| Tong khoi luong | 3,332 | kg |
| Tong suc noi | 8,501 | kg |
| Suc noi du tru | 5,169 | kg (SF=2.55) |
| Freeboard | 0.61 | m |
| Draft | 0.39 | m |
| Dien tich san cong tac | ~28 | m2 |
| GM (Metacentric Height) | 21.7 | m |

### Nguyen Tac Thiet Ke (Pahl & Beitz)

| Nguyen Tac | Ap Dung |
|------------|---------|
| Clear force transmission | Luc neo truyen qua tam platform → xich → neo Helix |
| Short and direct force paths | Khung radial 6 thanh tu tam ra pontoon |
| Balanced forces (symmetry) | Bo tri doi xung 6 pontoon, 6 thanh radial |
| Division of tasks (modularity) | Platform / Thuong tang / He thong neo tach rieng |
| Self-help (self-centering) | Vong tron tu can bang, pontoon tu noi |
| Fault-free design | Foam-filled → khong chim khi thung |

### He Thong Chuc Nang (7 Functions)

| Function | Mo Ta | Giai Phap |
|----------|-------|-----------|
| F1: Suc noi | Cung cap suc noi co ban + du tru | Vong HDPE foam-filled 2 tang |
| F2: On dinh | On dinh tinh + dong | Hinh tron + 6 pontoon outrigger |
| F3: Mang tai | San cong tac + thuong tang | Cot mast trung tam |
| F4: Giu vi tri | Chong troi (gio + dong) | Helix anchor, single-point |
| F5: RCS | Phan xa radar X-band | 12 trihedral corners, canh 0.5m |
| F6: IR | Tao nguon nhiet mo phong | Propane burner 5kW x2 |
| F7: Bao vi tri | GPS + canh bao hang hai | GPS beacon + SOLAS light |

---

## Tien Do Thiet Ke (Pahl & Beitz Phases)

| Phase | Document ID | Status | Notes |
|-------|-------------|--------|-------|
| Phase 1: Task Clarification | (implied in Conceptual) | Done | Requirements extracted |
| Phase 2: Conceptual Design | VN-AST-MSL-001-CD-001 v1.0 | Done | Reverse-engineered from V5 (DMIR learning exercise) |
| Phase 3: Embodiment Design | VN-AST-MSL-001-R_Phase3 v1.1 | Done | Initial embodiment |
| Phase 3: Hybrid V5 | VN-AST-MSL-001-EMB-PLT-001 v1.0 | Done | Final selected design |
| **Phase 4: Detail Design** | — | **NOT STARTED** | Blocked: on-hold |

### Open Questions (tu Phase 2 → Phase 4)

1. Lien ket vong HDPE 2 tang: Han hay bu-long?
2. Quick-release mechanism cho pontoon: Design cu the?
3. Moi han HDPE: Butt fusion hay socket fusion?
4. Bo tri RCS: Elevation angles toi uu?
5. Foam density: 35 hay 45 kg/m3?
6. Helix anchor sizing: Dua tren luc neo tinh toan?

---

## Nghien Cuu Da Thuc Hien

| Tai Lieu | Noi Dung | Source |
|----------|----------|--------|
| L-CATT Naval Training Target | Catamaran tow target analysis | Towed Target/ |
| LCMT Reverse Engineering DMIR | DMIR framework analysis | Towed Target/ |
| Towed Target Sea MetaLearning | Meta-learning analysis | Towed Target/ |
| Nghien cuu muc tieu keo quan su | Tong hop | Towed Target/ |
| QTS Target Solutions Case Study | Commercial reference | Towed Target/ |
| Muc tieu keo — Phan loai va Ung dung | Classification | Towed Target/ |

Toan bo tai lieu: `3_Resources/Books & Articles/Defense Training Research/Towed Target/` (19 files)

---

## DMIR Learning Reflection

> Du an nay duoc thuc hien nhu **bai tap DMIR reverse-engineering**:
> - **D (Diagnosis):** Hieu ket qua thiet ke cuoi cung (V5 Hybrid)
> - **M (Modeling):** Truy nguoc cac quyet dinh thiet ke ve nguon goc
> - **I (Intervention):** Tai tao Phase 2 voi su hieu biet sau hon
> - **R (Reflection):** Nhan ra gaps trong quy trinh forward design

### Key Learnings
1. Quyet dinh dung 2 tang (thay vi 3) khong duoc ghi nhan ro o Phase 2
2. Ly do chon 6 pontoon (6-fold symmetry) khong co rationale document
3. Foam density 35 kg/m3 xuat hien o Phase 3 nhung khong co trade study
4. **Forward design improvement:** Document "tai sao khong" nhieu nhu "tai sao co"

---

## Galaxy Notes Lien Quan

- [[5_Galaxy/Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — prototype la validation cua thinking
- [[5_Galaxy/Analyst Trap — Vault Growth khác Thinking Growth]] — design docs != working prototype
- [[5_Galaxy/Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]] — bien test la real stakes

## Resources Lien Quan

- [[3_Resources/Books & Articles/Defense Training Systems Research Index]]
- [[3_Resources/Books & Articles/Systems Thinking & DMIR Library]]
- [[3_Resources/SOPs/DCTRS Delegation Protocol]] — D1-design template cho Phase 4

---

## Kanban

### Done
- [x] Nghien cuu muc tieu keo quoc te (L-CATT, QTS, general) — 19 files
- [x] Phase 2: Conceptual Design — 5 concepts, morphological matrix, VDI 2225
- [x] Phase 2: Concept selection — V5 Hybrid (93.8%)
- [x] Phase 3: Embodiment Design v1.1
- [x] Phase 3: Hybrid V5 final embodiment
- [x] DMIR reverse-engineering learning exercise

### To Do (khi resume — sau IRONMESH priority)
- [ ] Giai quyet 6 Open Questions (Phase 2 → Phase 4)
- [ ] Phase 4: Detail Design (ban ve chi tiet, BOM)
- [ ] Cost estimation chi tiet (target <= 200M VND)
- [ ] Sourcing survey: HDPE, thep, pontoon COTS tai Viet Nam
- [ ] Prototype planning + timeline
- [ ] Tim doi tac che tao (xuong co khi / nha may HDPE)

### Blocked
- [ ] Phase 4 blocked: on-hold cho VN-LOMAH (BB-01) priority (Musk Sequence)

---

*Project Brief | Thuoc he thong IPARAG*
