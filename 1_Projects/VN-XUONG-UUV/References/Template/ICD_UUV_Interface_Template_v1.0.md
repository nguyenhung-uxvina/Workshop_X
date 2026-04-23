---
project: VN-XUONG-UUV
phase: 2
type: ICD-template
version: 1.3
created: 2026-03-06
updated: 2026-03-07
status: template
changelog: |
  v1.3 — 2026-03-07: Streamlined for OEM delivery. Removed internal guidance notes, obsolete items (drum on vessel), verbose checklist. Kept all critical parameters.
  v1.2 — 2026-03-07: Added Section K (Vessel Parameters). Cable drum inside UUV confirmed. Vessel max speed = 25 kts.
  v1.1 — Added Section H (Tether Cable) and Section J (Controller). Updated Section C.
related: 003_Stakeholder_Analysis (S3 BLOCKING item)
---

# UUV Interface Control Document (ICD) — Template

**Dự án:** VN-XUONG-UUV — Xuồng Triển Khai & Thu Hồi UUV
**Mục đích:** Thu thập thông tin kỹ thuật từ nhà sản xuất UUV để thiết kế cradle, LARS, và quy trình vận hành.
**Hướng dẫn:** Điền vào các ô `___`. Mục không biết ghi "TBD". Đơn vị = SI (mm, kg, N).

---

## SECTION A: UUV GENERAL INFORMATION

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| A1 | UUV Model/Designation | ___ | — | |
| A2 | Manufacturer | ___ | — | |
| A3 | Serial Number | ___ | — | Hoặc "generic" |
| A4 | **Overall Length (LOA)** | ___ | mm | Bao gồm antenna, protrusions |
| A5 | **Body Diameter (max)** | ___ | mm | Thân chính, không tính vây |
| A6 | **Max Width (incl. fins)** | ___ | mm | |
| A7 | **Max Height (incl. antenna)** | ___ | mm | Từ đáy đến đỉnh antenna |
| A8 | Height of centerline from keel | ___ | mm | |
| A9 | **Dry Weight (in air)** | ___ | kg | Không tính ballast |
| A10 | **Wet Weight (operational)** | ___ | kg | Đã nạp nước/ballast |
| A11 | **CG — X (from nose)** | ___ | mm | |
| A12 | **CG — Y (from centerline)** | ___ | mm | |
| A13 | **CG — Z (from keel)** | ___ | mm | |
| A14 | Buoyancy condition (surface) | Positive / Neutral / Negative | — | |
| A15 | Surface trim angle | ___ | deg | |

---

## SECTION B: STRUCTURAL & HANDLING

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| B1 | Hull material | ___ | — | VD: Aluminum 6061, HDPE, CFRP |
| B2 | Hull thickness | ___ | mm | |
| B3 | Max allowable point load | ___ | N | |
| B4 | Max allowable distributed load | ___ | N/m | |
| B5 | **Cradle support zones — ALLOWED** | *(đính kèm bản vẽ)* | — | Vùng được phép đặt cradle |
| B6 | **Cradle support zones — PROHIBITED** | *(đính kèm bản vẽ)* | — | Vùng cấm (sensors, hatches) |
| B7 | Recommended cradle contact angle | ___ | deg | VD: 120 deg V-saddle |
| B8 | Max lateral force on hull | ___ | N | |
| B9 | **Max vertical acceleration** | ___ | g | |
| B10 | **Max shock (drop/impact)** | ___ | g, ___ ms | |
| B11 | Lifting point locations | *(đính kèm bản vẽ)* | — | |
| B12 | Lifting sling type | ___ | — | |
| B13 | Lifting sling SWL | ___ | kg | |
| B14 | **Max tilt angle — pitch** | ___ | deg | Ảnh hưởng ramp angle (target 15 deg) |
| B15 | **Max tilt angle — roll** | ___ | deg | |

**Yêu cầu:** Đính kèm bản vẽ side-view + cross-section đánh dấu vùng B5 (xanh = OK) và B6 (đỏ = cấm).

---

## SECTION C: ELECTRICAL & DATA INTERFACE

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| C1 | Charging connector type | ___ | — | |
| C2 | Charging connector location | ___ | — | Vị trí trên thân UUV |
| C3 | Charging voltage/current | ___ V / ___ A | V, A | |
| C4 | Data download connector type | ___ | — | |
| C5 | Data download connector location | ___ | — | |
| C6 | Data interface protocol | ___ | — | Ethernet, RS-232, USB... |
| C7 | Pre-mission programming connector | ___ | — | Nếu khác C1/C4 |
| C8 | **Tether connector type (UUV end)** | ___ | — | CRITICAL |
| C9 | **Tether connector location on UUV** | ___ | mm from nose | |
| C10 | Tether connector mating cycles | ___ | cycles | |
| C11 | Tether connector waterproof rating | ___ | m depth | |
| C12 | Emergency beacon type | ___ | — | |
| C13 | Emergency beacon activation | Manual / Auto / Both | — | |

---

## SECTION D: ENVIRONMENTAL LIMITS

| # | Parameter | Min | Max | Unit | Notes |
|---|-----------|-----|-----|------|-------|
| D1 | Storage temperature (dry) | ___ | ___ | deg C | |
| D2 | Operating temperature (water) | ___ | ___ | deg C | |
| D3 | Max time out of water | — | ___ | hours | |
| D4 | Freshwater washdown required? | Yes / No | — | — | |
| D5 | UV exposure limit | — | ___ | hours | |
| D6 | Max wind speed for handling | — | ___ | knots | |
| D7 | Max sea state for water entry | — | ___ | SS | |
| D8 | Max sea state for recovery | — | ___ | SS | |

---

## SECTION E: LAUNCH & RECOVERY

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| E1 | Preferred launch method | ___ | — | ramp / crane / manual |
| E2 | Preferred recovery method | ___ | — | funnel / net / crane |
| E3 | **Water entry orientation** | Nose first / Tail first / Either | — | |
| E4 | Max water entry speed | ___ | m/s | |
| E5 | Max water entry angle | ___ | deg | |
| E6 | Min water depth for launch | ___ | m | |
| E7 | Surface behavior after launch | Dives / Floats then dives / Stays surface | — | |
| E8 | Surface behavior before recovery | Floats passive / Station-keeping / Needs command | — | |
| E9 | **Recovery approach heading** | Any / Nose-first / Tail-first | — | |
| E10 | Max approach speed to funnel | ___ | m/s | |
| E11 | Acceptable contact forces (nose) | ___ | N | |
| E12 | Acceptable contact forces (side) | ___ | N | |
| E13 | Propulsion shutoff before capture? | Yes / No / Auto | — | |
| E14 | Tow point location | ___ | mm from nose | |
| E15 | Drain after recovery | Natural / Needs tilting / Needs pump | — | |

---

## SECTION F: MAINTENANCE ON CRADLE

| # | Parameter | Value | Notes |
|---|-----------|-------|-------|
| F1 | Access panels location | *(đính kèm bản vẽ)* | |
| F2 | Access panel clearance required | ___ mm | |
| F3 | Battery removal on cradle? | Yes / No | |
| F4 | Battery location | ___ | |
| F5 | Battery weight | ___ kg | |
| F6 | Routine inspection points | *(liệt kê)* | |
| F7 | Post-mission checklist (OEM) | Attached? Yes / No | |
| F8 | Corrosion-sensitive areas | *(đính kèm bản vẽ)* | |

---

## SECTION H: TETHER CABLE INTERFACE

> Cuộn cáp (drum) nằm BÊN TRONG UUV [confirmed]. Workshop X cần thông số cáp để thiết kế cable routing trên xuồng.

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| H1 | **Cable type** | ___ | — | Fiber optic / Copper / Hybrid |
| H2 | **Cable outer diameter** | ___ | mm | |
| H3 | Cable length (supplied) | ___ | m | Dự kiến 25,000 m |
| H4 | Cable weight in air | **0.5** | kg/km | **[Confirmed]** |
| H5 | Cable weight in water | ___ | kg/km | |
| H6 | Cable breaking strength | ___ | kN | |
| H7 | Cable working load limit | ___ | kN | |
| H8 | Min bend radius (static) | ___ | mm | |
| H9 | Min bend radius (dynamic) | ___ | mm | |
| H10 | Cable construction | ___ | — | VD: FO core + Kevlar + PU jacket |
| H11 | Cable jacket material | ___ | — | |
| H12 | Cable buoyancy | Positive / Neutral / Negative | — | |
| H13 | Max operating depth | ___ | m | |
| H17 | **Cable termination (vessel end)** | ___ | — | Connector nối đến controller |
| H18 | Cable termination (UUV end) | ___ | — | Phải khớp với C8 |
| H19 | Cable signal bandwidth | ___ | Mbps | |
| H20 | Cable power capacity (if any) | ___ | V / A | |

---

## SECTION J: UUV CONTROLLER

> Controller dạng valy, đặt trên xuồng LARS.

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| J1 | **Controller model** | ___ | — | |
| J2 | **Dimensions (closed)** | ___ x ___ x ___ | mm | L x W x H |
| J3 | Dimensions (open/operating) | ___ x ___ x ___ | mm | |
| J4 | **Weight** | ___ | kg | |
| J5 | **Power input — voltage** | ___ | VAC or VDC | |
| J6 | **Power input — wattage** | ___ | W | |
| J7 | Power input — connector type | ___ | — | |
| J8 | Power input — frequency (if AC) | ___ | Hz | |
| J9 | Backup battery? | Yes / No | — | Nếu có: ___ phút |
| J10 | **Tether connector (controller end)** | ___ | — | Phải khớp với H17 |
| J11 | Operating temperature range | ___ to ___ | deg C | |
| J12 | IP rating | IP ___ | — | |
| J13 | Display type | ___ | — | |
| J14 | Display sunlight readable? | Yes / No | — | |
| J15 | Operators required | ___ | persons | |
| J16 | Operator interface | ___ | — | Joystick, touchscreen, keyboard |
| J18 | Needs rain shelter? | Yes / No | — | |
| J19 | **Needs fixed mounting surface?** | Yes / No | — | |
| J20 | Vibration sensitivity | ___ | g (max) | |

---

## SECTION K: VESSEL PARAMETERS (Workshop X → OEM)

> Thông tin xuồng LARS để OEM hiểu môi trường vận hành.

| # | Parameter | Value | Unit | Notes |
|---|-----------|-------|------|-------|
| K1 | Vessel type | Xuồng nhôm 5083 | — | 8m LOA |
| K2 | Vessel LOA | 8,000 | mm | |
| K3 | Vessel beam | ~2,600-3,200 | mm | Phase 3 xác nhận |
| K4 | **Vessel max speed** | **25** | **kts** | |
| K5 | Operating speed (LARS ops) | 2-5 | kts | |
| K6 | Propulsion | Twin outboard 2 x 40-60 HP | — | |
| K7 | Lightship | ~2,820 | kg | |
| K8 | Loaded displacement | ~3,843 | kg | UUV + crew + fuel |
| K9 | Recovery method | Stern ramp + channel + pendant winch | — | |
| K10 | Recovery channel width | ~550-650 | mm | UUV D=400 mm + clearance |
| K11 | Ramp angle | 15 (adj. 12-18) | deg | |
| K12 | Winch capacity | 10 | kN | Electric VFD |
| K13 | Cradle material | UHMWPE saddle | — | |
| K14 | Design sea state | 3-4 | SS | Biển Đông |
| K15 | Crew | 3 | persons | Helmsman / LARS op / UUV op |
| K16 | Electrical system | 24 VDC + genset 5-8 kW | — | |
| K17 | Cable drum location | Trong UUV | — | Xuồng không có drum |
| K18 | Cable routing on vessel | Stern → deck clips → controller | — | ~4-5 m |
| K19 | Mother ship crane SWL | 2,500 | kg | Cho UUV loading |
| K20 | Operations | Towed alongside / self-transit | — | |

---

## SECTION G: DOCUMENTATION REQUEST

| # | Document | Provided? | Format |
|---|----------|-----------|--------|
| G1 | **General Arrangement Drawing** | [ ] Yes  [ ] No | PDF / DWG / STEP |
| G2 | Cross-section drawings | [ ] Yes  [ ] No | |
| G3 | Lifting plan | [ ] Yes  [ ] No | |
| G4 | Structural Design Report (extract) | [ ] Yes  [ ] No | |
| G5 | Electrical Interface Drawing | [ ] Yes  [ ] No | |
| G6 | Environmental Qualification Report | [ ] Yes  [ ] No | |
| G7 | OEM L/R Procedure | [ ] Yes  [ ] No | |
| G8 | 3D model | [ ] Yes  [ ] No | STEP / IGES |
| G9 | Weight report (incl. CG) | [ ] Yes  [ ] No | |
| G10 | Maintenance manual (extract) | [ ] Yes  [ ] No | |
| G11 | **Tether cable spec sheet** | [ ] Yes  [ ] No | CRITICAL |
| G12 | **Controller user manual** | [ ] Yes  [ ] No | CRITICAL |
| G13 | Cable termination drawings | [ ] Yes  [ ] No | |
| G14 | Controller mounting drawing | [ ] Yes  [ ] No | |

---

## SIGN-OFF

| Role | Name | Date | Signature |
|------|------|------|-----------|
| UUV OEM Representative | ___ | ___ | ___ |
| Workshop X Engineer | ___ | ___ | ___ |
| Navy UUV Ops (witness) | ___ | ___ | ___ |

---

*ICD Template v1.3 | VN-XUONG-UUV Phase 2 | Workshop X*
