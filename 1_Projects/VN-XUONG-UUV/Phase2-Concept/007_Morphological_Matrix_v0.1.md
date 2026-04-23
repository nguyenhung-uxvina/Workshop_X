---
project: VN-XUONG-UUV
phase: 2
type: morphological-matrix
document: "007"
version: 0.1
created: 2026-03-07
updated: 2026-03-07
status: AI-DRAFT
data_confidence: MEDIUM (30% L2 user-confirmed, 40% L4 reference designs, 30% L5 engineering assumptions)
changelog:
  - version: v0.1
    date: 2026-03-07
    author: AI (T2)
    changes: "Initial draft — 43 sub-functions, 2-5 working principles each"
---

# VN-XUONG-UUV — Doc 007: Morphological Matrix v0.1

[AI-DRAFT v1]

## 1. Mục Đích

Ma trận hình thái (Pahl-Beitz Ch. 6) ánh xạ 43 sub-functions từ Doc 006 sang các nguyên lý làm việc (Working Principles — WP) khả thi. Mỗi sub-function có 2-5 WP ứng viên. Kết hợp các WP thành concept variants ở bước tiếp theo.

**Ký hiệu:**
- **WP-X.Y.Z** = Working Principle Z cho Sub-Function X.Y
- Đánh dấu `[L2]`...`[L5]` cho data confidence
- Đánh dấu `>>>` = preferred (từ Doc 006 preliminary mapping hoặc đã loại bỏ alternatives)
- Đánh dấu `PD-n` = liên quan Design Decision pending

---

## 2. Ma Trận Hình Thái

### F1: TRANSIT & POSITION VESSEL

| ID | Sub-Function | WP-1 | WP-2 | WP-3 | WP-4 |
|----|-------------|-------|-------|-------|-------|
| F1.1 | Tow alongside mother ship | **Bridle + towline + quick-release hook** [L4] >>> | Single-point tow (bow eye) [L4] | Alongside lashing (fender + lines) [L4] | — |
| F1.2 | Self-transit to operating area | ~~Inboard diesel~~ | ~~Single outboard~~ | **Twin outboard** [L2] (PD-1 DECIDED) >>> | ~~Waterjet~~ |
| F1.3 | Navigate and determine position | **GPS receiver + magnetic compass + speed log** [L4] >>> | GPS + electronic chart (ECDIS lite) [L4] | GPS + radar [L5] | — |
| F1.4 | Station-keep during LARS ops | **Manual helm (crew)** [L2] >>> | DP-lite (GPS + auto-throttle) [L5] | Anchor (shallow water only) [L4] | — |
| F1.5 | Maintain stability | **Pure aluminum hull beam ≥ 2.6m + bilge keels** [L2] (DECIDED) >>> | ~~RIB: sponson tubes~~ | Anti-roll tank [L5] | Ballast keel (fixed) [L4] |

**Notes F1:**
- F1.1: Bridle tow tiêu chuẩn cho work boats, quick-release cho an toàn [L4].
- F1.2: **PD-1 — DECIDED: Twin outboard** [L2]. Giống TRV reference. Twin cho differential thrust (station-keeping F1.4, stern-first approach F3.2), redundancy (1 engine fail → vẫn chạy được).
- F1.4: Manual helm + twin outboard differential thrust → station-keeping tốt hơn single. Đủ cho prototype.
- F1.5: **DECIDED: Pure aluminum hull** [L2]. Không dùng RIB sponson tubes. Đơn giản hơn, bền hơn cho UUV operations, phù hợp năng lực đóng tàu nhôm Việt Nam. Beam target ≥ 2.6m (xác nhận trong Phase 3).

---

### F2: LAUNCH UUV

| ID | Sub-Function | WP-1 | WP-2 | WP-3 | WP-4 |
|----|-------------|-------|-------|-------|-------|
| F2.1 | Receive UUV from mother ship crane | **Deck cradle + sling points (crane hook)** [L4] >>> | Roller conveyor from crane [L5] | Dedicated A-frame on vessel [L5] | — |
| F2.2 | Secure UUV in launch cradle | **UHMWPE saddle + toggle clamps (4 điểm)** [L4] >>> | V-block + ratchet straps [L4] | Adjustable pipe clamps [L5] | — |
| F2.3 | Prepare LARS for launch | **Electric linear actuator tilt** [L2] >>> (PD-2 FORCED) | ~~Hydraulic cylinder tilt~~ | Manual pin-release (gravity) [L5] | — |
| F2.4 | Control UUV descent on ramp | **Electric winch + VFD speed control** [L2] >>> (PD-2 FORCED) | ~~Hydraulic winch~~ | Gravity + friction brake only [L5] | — |
| F2.5 | Enter UUV into water | **Stern ramp 15 deg nominal (adjustable 12-18 deg)** [L2] >>> | Side launch (davit) [L5] | Over-stern lift (A-frame) [L5] | — |
| F2.6 | Release UUV from cradle | **Winch pay-out → cradle+UUV trượt (permanent pendant)** [L4] >>> (PD-3 DECIDED) | ~~Auto-release (hydraulic latch)~~ | ~~Manual pin pull~~ | — |
| F2.7 | Retract cradle to deck | **Winch reverse (same as F2.4)** [L4] >>> | Manual pull (crew) [L5] | Spring-loaded auto-retract [L5] | — |

**Notes F2:**
- F2.2: UHMWPE saddle đã confirmed trong Phase 1 — low-friction, chống xước UUV coating [L4].
- F2.3/F2.4: **PD-2 — DECIDED: Electric LARS** [L2]. Forced by PD-1 (twin outboard → no PTO for hydraulic). Electric linear actuator + VFD winch, powered by genset riêng (5-8 kW).
- F2.5: **Ramp angle = 15 deg nominal (adjustable 12-18 deg)** [L2]. VDI 2225 analysis: 12-15 deg scored 0.75 vs 10 deg (0.64) vs 15-20 deg (0.70). 15 deg = optimal balance: submersion 0.91m đủ cho UUV D=400mm, ICD B14 compatible, TRV proven. Adjustable range cho Phase 3 tuning theo ICD data.
- F2.6: **PD-3 — DECIDED: Permanent pendant.** Winch cable gắn cố định vào cradle. Launch = winch pay-out → cradle+UUV trượt xuống → UUV tự nổi tách. Không cần crew ở stern (SA-02 resolved).

---

### F3: RECOVER UUV (Binding Constraint Function)

| ID | Sub-Function | WP-1 | WP-2 | WP-3 | WP-4 | WP-5 |
|----|-------------|-------|-------|-------|-------|-------|
| F3.1 | Acquire UUV position | **Tether bearing + visual** [L2] >>> | USBL acoustic [L5] | Radar reflector on UUV [L4] | AIS transponder [L5] | — |
| F3.2 | Maneuver vessel for approach | **Manual stern-first approach** [L4] >>> | UUV commanded to return via tether [L2] | Combined: UUV returns + vessel positions [L4] | — | — |
| F3.3 | Guide UUV into V-funnel | **Recovery channel (fixed stern frame + rollers, centerline)** [L4] >>> (TRV proven) | Passive V-funnel (UHMWPE lined, 60-90 deg) [L4] | Active funnel (hydraulic jaws) [L5] | Net capture [L5] | Diver-assisted [L4] |
| F3.4 | Capture UUV in cradle | **Cradle integrated in channel (rails + rollers)** [L4] >>> (TRV proven) | Cradle with centering rollers [L5] | Sling capture (no cradle) [L5] | — | — |
| F3.5 | Attach winch line to UUV/cradle | **Permanent pendant line (winch cable gắn cố định vào cradle)** [L2] >>> (PD-3 DECIDED) | ~~Auto-latch~~ | ~~Manual crew hook~~ | ~~Self-engaging hook~~ | — |
| F3.6 | Winch UUV up ramp | **Electric winch, 10 kN + VFD** [L2] >>> (PD-2 FORCED) | ~~Hydraulic winch~~ | Manual chain hoist (backup) [L4] | — | — |
| F3.7 | Secure UUV in stowed position | **Toggle clamps (same as F2.2)** [L4] >>> | Ratchet straps [L4] | Locking pins [L4] | — | — |
| F3.8 | Abort recovery | **Release UUV + back vessel away** [L4] | Tether hold + repositioning attempt [L2] | Emergency cable cut + UUV loss [L5] | — | — |

**Notes F3:**
- F3.1: Tethered design fundamentally simplifies acquisition — tether provides bearing [L2]. USBL overkill cho tethered UUV.
- F3.2: Combined approach preferred — operator commands UUV to return via tether WHILE vessel positions stern-first [L4]. Twin outboard differential thrust giúp stern-first approach chính xác hơn.
- F3.3/F3.4: **DECIDED: Recovery channel system (TRV proven)** [L2]. Fixed stern frame + rollers, centerline giữa twin outboards. Channel width ~550-650mm cho UUV D=400mm + clearance. Rollers giảm lực kéo → winch nhỏ hơn.
- F3.3: V-funnel 60-90 deg opening is standard for torpedo-profile recovery [L4]. UHMWPE lining confirmed. Sizing = Phase 3.
- F3.5: **PD-3 — DECIDED: Permanent pendant** [L2]. Winch line luôn gắn vào cradle → recovery chỉ cần winch kéo, không cần crew ở stern. TRV proven pattern. SA-02 risk resolved.
- F3.8: Tethered design makes abort SAFER — connection maintained [L2].

---

### F4: SUPPORT OPERATIONS

| ID | Sub-Function | WP-1 | WP-2 | WP-3 | WP-4 |
|----|-------------|-------|-------|-------|-------|
| F4.1 | Generate mechanical power | ~~Inboard diesel + PTO~~ | **Twin outboard (2 x 40-60 HP) + separate genset** [L2] (PD-1 DECIDED) >>> | — | — |
| F4.2 | Distribute electrical power | **Engine alternator (24V) + battery bank** [L4] >>> | Separate diesel genset (5-8 kW) [L4] | Engine alternator + genset (redundant) [L5] | — |
| F4.3 | Communicate with mother ship | **VHF marine radio** [L4] >>> | VHF + satellite phone [L5] | VHF + data link (Wi-Fi/4G) [L5] | — |
| F4.4 | Monitor LARS status | **Load cell + analog gauge at helm** [L4] >>> | Load cell + digital display + alarm [L4] | PLC + HMI screen [L5] | — |
| F4.5 | Provide crew safety | **PFDs + guardrails + non-slip deck + safety harness points** [L4] >>> | Above + enclosed wheelhouse [L5] | — | — |
| F4.6 | Manage bilge water | **Manual bilge pump + auto float switch pump** [L4] >>> | Electric bilge pump only [L4] | — | — |
| F4.7 | Protect against corrosion | **Marine-grade aluminum 5083 + anodize + sacrificial anodes (Zn)** [L4] >>> | 5083 + marine paint system [L4] | 5083 + anodize + paint + CP [L5] | — |
| F4.8 | Enable maintenance access | **Hinged panels + standard fasteners (M8/M10 SS)** [L4] >>> | Quick-release panels [L5] | — | — |

**Notes F4:**
- F4.1: **PD-1 DECIDED → Twin outboard.** Cần separate genset (5-8 kW) cho LARS electric winch + cable drum + UUV controller + nav equipment. Twin OB layout: 2 engines trên transom, recovery channel ở centerline giữa 2 engines (giống TRV). Genset sizing = Phase 3 detail.
- F4.2: 24V system tiêu chuẩn cho 8m work boat. Battery bank cần cho UUV controller power (220VAC inverter hoặc 24VDC direct) [L5].
- F4.7: 5083 aluminum confirmed — tiêu chuẩn đóng tàu nhôm Việt Nam [L4].

---

### F5: TETHER MANAGEMENT (REVISED — cuộn cáp nằm trong UUV)

> **UPDATE [L2]:** Cuộn cáp quang (25 km) nằm BÊN TRONG UUV. UUV tự nhả cáp khi di chuyển ra xa. Xuồng chỉ cần tiếp nhận đầu cáp cố định và kết nối với controller. Hầu hết F5 sub-functions KHÔNG CÒN thuộc scope xuồng.
>
> **Hệ quả:** PD-4 (drum location), PD-5 (cable routing), PD-6 (TMS-LARS sync) — **LOẠI BỎ**.

| ID | Sub-Function | Status | WP (nếu còn) |
|----|-------------|--------|---------------|
| F5.1 | ~~Store tether on drum~~ | **LOẠI** — drum trong UUV | — |
| F5.2 | ~~Pay out cable during launch~~ | **LOẠI** — UUV tự nhả | — |
| F5.3 | ~~Pay out cable during mission~~ | **LOẠI** — UUV tự nhả | — |
| F5.4 | ~~Reel in cable during recovery~~ | **LOẠI** — cáp thu cùng UUV khi lên channel | — |
| F5.5 | **Route cable on vessel (UUV→controller)** | **GIỮ — đơn giản hóa** | Cable guide/clip dọc deck từ stern đến controller station [L4] >>> |
| F5.6 | ~~Monitor cable tension~~ | **LOẠI** — UUV-side | — |
| F5.7 | ~~Monitor cable length~~ | **LOẠI** — UUV-side | — |
| F5.8 | ~~Brake/hold cable~~ | **LOẠI** — UUV-side | — |
| F5.9 | ~~Prevent cable fouling~~ | **LOẠI** — UUV-side | — |

**Notes F5 (revised):**
- F5 giảm từ 9 sub-functions xuống **1 sub-function đơn giản** (F5.5 cable routing on deck).
- Vessel chỉ cần: (1) đầu nối cáp cố định tại stern/channel area, (2) cable guide dọc deck đến controller.
- **Không cần drum, motor, VFD, level-wind, fairlead, brake** trên xuồng.
- Tổng sub-functions vessel: 43 → **35** (giảm 8).
- **Vessel design giờ gần giống TRV reference** (cũng không có tether management).

---

### F6: UUV CONTROL (from vessel)

| ID | Sub-Function | WP-1 | WP-2 | WP-3 |
|----|-------------|-------|-------|-------|
| F6.1 | Mount controller on vessel | **Mounting plate + shock mounts on console** [L4] | Fold-down table + clamp [L5] | Dedicated console (built-in) [L5] |
| F6.2 | Supply power to controller | **220VAC inverter from 24V battery** [L4] | 24VDC direct (if controller accepts) [L5] | Shore-type outlet from genset [L4] |
| F6.3 | Connect controller to tether | **OEM junction box on vessel (OEM-supplied)** [L5] >>> | Direct splice at drum slip-ring [L5] | — |
| F6.4 | Transmit commands to UUV | **Via tether cable (OEM protocol)** [L2] >>> | — | — |
| F6.5 | Receive telemetry from UUV | **Via tether cable (OEM protocol)** [L2] >>> | — | — |
| F6.6 | Provide operator workspace | **Sheltered helm station (canopy + seat)** [L5] | Open deck station + weather cover [L5] | Enclosed cabin [L5] |

**Notes F6:**
- F6.1-F6.5: Phần lớn phụ thuộc vào OEM controller spec. **BLOCKED by ICD** — cần thông số: kích thước suitcase, cân nặng, yêu cầu điện, connector type, cable signal format.
- F6.2: 220VAC inverter phổ biến nhất. Nếu controller nhận 24VDC trực tiếp → đơn giản hơn, hiệu suất cao hơn.
- F6.6: Operator cần ngồi thoải mái trong thời gian dài (mission hours). Canopy tối thiểu cho che nắng/mưa.

---

## 3. Tổng Hợp Design Decisions Pending

| PD       | Quyết định              | Sub-Functions liên quan | WP ứng viên                                                                      | Coupling                          |
| -------- | ----------------------- | ----------------------- | -------------------------------------------------------------------------------- | --------------------------------- |
| **PD-1** | Propulsion type         | F1.2, F4.1              | **DECIDED: Twin outboard (2 x 40-60 HP)** [L2]                                  | Loại hydraulic PTO cho PD-2       |
| **PD-2** | LARS power source       | F2.3, F2.4, F3.6, F4.1  | **DECIDED: Electric (VFD)** [L2] — VDI 2225: 0.71 vs manual 0.62, safety gate FAIL cho manual | Forced by PD-1 + VDI confirmed    |
| **PD-3** | Winch/cradle attachment | F2.6, F3.5              | **DECIDED: Permanent pendant** [L2] — winch cable gắn cố định vào cradle, TRV proven | Crew safety (SA-02) resolved      |
| ~~PD-4~~ | ~~Cable drum location~~ | ~~F5.1, F5.9~~          | **LOẠI — cuộn cáp trong UUV** [L2]                                               | —                                 |
| ~~PD-5~~ | ~~Cable routing vs LARS~~ | ~~F5.5~~               | **LOẠI — chỉ cần cable guide on deck** [L2]                                      | —                                 |
| ~~PD-6~~ | ~~TMS-LARS sync method~~ | ~~F5.2, F5.4~~          | **LOẠI — không cần sync, UUV tự quản lý cáp** [L2]                              | —                                 |
| **PD-7** | Crew role allocation    | All F1-F6               | **DECIDED: 3 crew — Helmsman / LARS op / UUV op** [L2]                           | Redundancy + safety for prototype |

### PD Coupling Graph

```
PD-1 (Twin OB) ── DECIDED ── PD-2 (Electric) ── FORCED
                                    │
                               PD-3 (Permanent Pendant) ── DECIDED
                                    │
                               PD-7 (3 Crew) ── DECIDED

PD-4, PD-5, PD-6 ── LOẠI (cuộn cáp trong UUV)
```

**Tất cả 7 PD decisions RESOLVED** (4 decided, 3 eliminated)

---

## 4. Thông Tin Bị BLOCKED (chờ ICD từ UUV OEM)

Các WP sau không thể xác nhận nếu chưa có ICD response:

| Thông tin cần | Ảnh hưởng đến |
|---------------|---------------|
| ~~Cable diameter (mm)~~ | ~~F5.1 drum sizing~~ — **LOẠI: drum trong UUV** |
| ~~Cable weight (kg/m)~~ | ~~F5.1 total cable weight~~ — **RESOLVED: 0.5 kg/km, 12.5 kg total [L2]** |
| ~~Cable minimum bend radius~~ | ~~F5.5 fairlead radius~~ — **LOẠI: drum trong UUV** |
| ~~Cable breaking strength~~ | ~~F5.6 tension alarm~~ — **LOẠI: UUV-side function** |
| Controller dimensions + weight | F6.1 mounting, F6.6 workspace |
| Controller power requirements | F6.2 power source selection |
| Controller connector type | F6.3 junction box design |
| UUV lift points + sling configuration | F2.1 crane operation, F2.2 cradle shape |

**Confirmed values:**
- Cable type: Cáp quang (fiber optic) [L2 — user confirmed]
- Cable weight: 0.5 kg/km → 25 km = **12.5 kg total** [L2] — negligible impact on displacement/stability
- Cable stored on vessel (drum on xuồng) [L2]
- Cable drum location: **Trong UUV** [L2] — vessel không cần drum
- Cable diameter, bend radius, breaking strength: UUV-side, không ảnh hưởng vessel design
- Controller: ~30 kg, 500W, 220VAC [L5]

> **Cable weight = NON-ISSUE.** 12.5 kg cho 25 km cáp quang. Drum sizing phụ thuộc vào cable diameter và bend radius (chờ ICD), không phải weight capacity.

---

## 5. Concept Variant Formation (Bước Tiếp Theo)

Sau khi human review + confirm WP choices, kết hợp thành 3-5 concept variants:

| Thông số        | Giá trị đã quyết định                                           |
| --------------- | --------------------------------------------------------------- |
| PD-1 Propulsion | Twin outboard (2 x 40-60 HP) [L2]                               |
| PD-2 LARS power | Electric VFD + genset [L2]                                      |
| PD-3 Attachment | **Permanent pendant** [L2] — winch cable gắn cố định vào cradle |
| Hull            | Pure aluminum 5083 [L2]                                         |
| Recovery        | Stern channel + rollers (TRV proven) [L2]                       |
| TMS             | Không cần — drum trong UUV [L2]                                 |

> **Tất cả PD-1 đến PD-7 đã DECIDED hoặc LOẠI.** Design space đóng — 1 concept duy nhất.
> 3 concept variants (B, D, E) đã hội tụ thành **1 concept duy nhất** — VDI 2225 evaluation không cần thiết cho concept selection.
> Chuyển sang VDI 2225 cho **detail trade-off** (sub-component choices) hoặc trực tiếp Phase 3 Embodiment.

### Concept duy nhất: VN-XUONG-UUV Baseline

**Mô tả:** Xuồng nhôm 8m, twin outboard, stern recovery channel (centerline) với rollers, permanent pendant winch, electric LARS (VFD), genset riêng. Cuộn cáp trong UUV — xuồng chỉ route cable trên deck. Crew 3 người: Helmsman / LARS Operator / UUV Operator (PD-7 DECIDED).

---

## 6. Tiếp Theo

- [x] Quyết định PD-1 (Twin OB) — DONE
- [x] Quyết định PD-2 (Electric) — FORCED by PD-1
- [x] Quyết định PD-3 (Permanent pendant) — DONE
- [x] PD-4/5/6 loại bỏ (drum trong UUV) — DONE
- [x] Quyết định PD-7 (3 crew) — DONE
- [x] Cable weight resolved (0.5 kg/km, negligible) — DONE
- [x] Concept variants hội tụ → 1 baseline concept — DONE
- [ ] Human review từng WP — confirm, correct, hoặc loại bỏ
- [ ] Weight estimate v2 (với baseline concept)
- [ ] Preliminary GA sketch (Core — human draws)
- [ ] Gửi ICD Template cho UUV OEM (BLOCKING)

---

*Doc 007 Morphological Matrix v0.1 | VN-XUONG-UUV Phase 2 Conceptual Design | COD: Offload (O2) — AI draft, human review*
