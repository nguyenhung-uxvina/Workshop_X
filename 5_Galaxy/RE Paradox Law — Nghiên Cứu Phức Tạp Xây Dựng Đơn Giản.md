---
created: 2026-04-20
updated: 2026-04-20
type: permanent-note
tags: [#type/permanent-note, #pahl, #three-laws, #meta]
links: [[Solution-Determining SF Law]], [[Phán đoán không thể uỷ thác cho AI]], [[Analyst Trap]]
---

## Y Tuong Cot Loi

Khi reverse-engineering, nghien cuu giai phap phuc tap nhat day nhieu nhat ve trade-off, nhung giai phap don gian hon thuong thang VDI 2225. Gia tri cua RE khong phai la copy — ma la hieu TAI SAO giai phap phuc tap ton tai, de biet KHI NAO no dang.

## Giai Thich Chi Tiet

Stallion VTOL dung tilt tricopter (2 front tilt + 1 rear fixed) — co khi phuc tap, ít motor, cruise hieu quat. Khi RE va chay VDI 2225 cho military scaling, quadplane (5 motor, 0 mechanism) thang 4/5 scenarios vi don gian hon de che tao, nhanh hon de prototype, re hon de bao tri.

Nhung neu khong study tilt tricopter, WX se khong biet:
- Tai sao tilt ton tai (cruise efficiency 5-8% better)
- Khi nao tilt dang (>50kg class, long endurance missions)
- Trade-off thuc su la gi (mechanism complexity vs cruise drag)

**Khong study complex → chon simple vi thieu hieu biet** KHAC voi **study complex → chon simple vi informed trade-off**.

Cai dau la ignorance. Cai sau la judgment.

## Tai Sao Dieu Nay Quan Trong?

- Tranh anchoring bias trong RE: RE san pham nao → mac dinh build san pham do
- RE pipeline Stage 3 (RECONSTRUCT) PHAI tao alternatives, khong chi adapt artifact goc
- Solution-Determining SF Law: giai phap cho SF quyet dinh cascade toan bo thiet ke — nen HIEU nhieu options truoc khi chon
- Ap dung cho moi RE project trong WX portfolio (VN-AST → STT-B, TARGET-DRONE → VTOL variant)

## Lien Ket

- [[Solution-Determining SF Law]] — SF-04 (tilt mechanism) la solution-determining, nhung solution CHON khong phai la solution cua artifact goc
- [[Phán đoán không thể uỷ thác cho AI]] — CEO phai hieu trade-off de chon, AI chi present options
- [[Analyst Trap]] — RE co the thanh analyst trap neu chi study ma khong build

## Nguon Goc

RE: Flightory Stallion VTOL → WX TARGET-DRONE VTOL, Session 2026-04-20. VDI 2225 evaluation 4 VTOL architectures, C2-QUAD thang 4/5 scenarios over C1-TILT (Stallion-derived).
