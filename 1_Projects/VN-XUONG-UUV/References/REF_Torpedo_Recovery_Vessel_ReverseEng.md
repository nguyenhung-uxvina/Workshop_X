---
project: VN-XUONG-UUV
type: reference-analysis
version: 1.0
created: 2026-03-07
status: active
data_confidence: HIGH (90% L4 reference design, 10% L5 interpretation from photos)
source: "Torpedo Recovery Vessel product brochure (manufacturer TBD — likely Korean/SEA)"
---

# REF: Torpedo Recovery Vessel — Reverse Engineering Analysis

## 1. Tại Sao Reference Này Quan Trọng

Đây là analog gần nhất với VN-XUONG-UUV:
- **Cùng LOA 8m** — exact match
- **Cùng nhiệm vụ** — thu hồi ngư lôi/UUV từ nước lên tàu
- **Twin outboard** — validates PD-1 decision
- **Stern recovery channel** — validates V-funnel concept (F3.3)
- **Production vessel** — đã chứng minh concept hoạt động

---

## 2. Thông Số Kỹ Thuật [L4]

| Thông số | Giá trị | So sánh VN-XUONG-UUV |
|----------|---------|---------------------|
| Length O.A. | **8 m** | = 8 m (match) |
| Beam O.A. | **3.2 m** | > 2.6 m (assumed min) — **rộng hơn đáng kể** |
| Light Weight | **2.7 tonnes** | Benchmark cho weight estimate v2 |
| Speed | **30 kts** | Cao — VN-XUONG-UUV cần ~15-20 kts (thấp hơn OK) |
| Range | **80 NM** | Reference cho fuel tank sizing |
| Propulsion | **Twin O.B. Motors** | Validates PD-1 (outboard). Twin = better maneuvering |
| Complement | **Max 11 ppl** | Overspec — VN-XUONG-UUV chỉ cần 3 crew |

---

## 3. Key Features — Reverse Engineering từ Hình Ảnh

### 3.1 Hull Form: RIB (Rigid Inflatable Boat)

- **Dual sponson tubes** (inflatable collar) bọc quanh thân cứng
- Thân cứng aluminum/composite (orange painted)
- Sponson tubes cung cấp:
  - Tăng ổn định (beam hiệu dụng lớn hơn)
  - Fender khi cặp mạn tàu mẹ
  - Buoyancy dự phòng
  - Giảm sóng va đập (wave damping)

**Implication cho VN-XUONG-UUV:**
- Beam 3.2m (vs. assumed 2.6m) — sponson tubes đóng góp ~0.3m mỗi bên
- Hull beam thực ~2.6m + 2 x 0.3m sponson = 3.2m O.A.
- **Cân nhắc RIB construction cho VN-XUONG-UUV** — tăng stability cho LARS ops
- NHƯNG: sponson tubes có thể bị hỏng khi va UUV → cần đánh giá risk

### 3.2 Stern Recovery Channel System

Từ bottom-left và bottom-middle photos:

- **V-channel/funnel tại đuôi tàu** — nghiêng vào nước
- **Stern guide frame with roller** — khung dẫn hướng bằng thép/nhôm với con lăn
- Torpedo/UUV trượt vào channel từ phía nước
- Channel có **rollers dọc theo** để giảm ma sát khi kéo lên
- **Winch line** kéo torpedo dọc channel lên deck
- Channel width ~500-600mm (cho torpedo diameter ~324-533mm)

**Mapping sang VN-XUONG-UUV functions:**

| TRV Feature | VN-XUONG-UUV Sub-Function | Implication |
|------------|--------------------------|-------------|
| V-channel at stern | F3.3 Guide UUV into V-funnel | **Confirmed concept** — channel thay vì funnel riêng biệt |
| Stern guide frame | F3.3 + F3.4 | Frame cố định, không phải V-funnel di động |
| Rollers on channel | F3.6 Winch UUV up ramp | Rollers giảm lực kéo cần thiết → winch nhỏ hơn |
| Winch | F3.5 + F3.6 | Visible — mounted forward of channel |
| Channel angle | F2.5 Enter water | ~15-20 deg (consistent with Doc 006) |

### 3.3 Propulsion: Twin Outboard

- **Twin outboards** mounted on transom — có thể thấy rõ trong ảnh trên-trái
- Twin configuration:
  - Better low-speed maneuverability (differential thrust)
  - Redundancy (1 engine fails → still operable)
  - Cho phép stern-first approach (F3.2) bằng reverse thrust
  - **QUAN TRỌNG:** Outboards chiếm transom space → recovery channel phải ở GIỮA (centerline), không phải toàn bộ stern

**Implication cho PD-1:**
- Twin outboard mạnh hơn single cho station-keeping (F1.4) và recovery approach (F3.2)
- NHƯNG: chi phí cao hơn, transom phải đủ rộng cho 2 OB + recovery channel ở giữa
- **Decision point:** Single vs. Twin outboard cho VN-XUONG-UUV?

### 3.4 Console và Crew Station

- **Single console with bucket seat** — centralized control
- Console ở ~1/3 phía trước (forward third)
- Bucket seat cho helmsman
- Remote controlled search light — hỗ trợ night recovery

**Mapping:**

| TRV Feature | VN-XUONG-UUV Sub-Function |
|------------|--------------------------|
| Single console | F6.6 Operator workspace |
| Bucket seat | F6.6 — seated position |
| Search light | F3.1 Acquire UUV position (night) |

### 3.5 Deck Layout (từ bottom-left photo)

- **Recovery channel** chiếm trục dọc đuôi tàu (centerline aft)
- **Winch** mounted forward of channel
- **Open deck** hai bên channel cho crew access
- **Console** elevated, forward
- Không thấy canopy/shelter — open vessel

---

## 4. Khác Biệt Chính vs. VN-XUONG-UUV

| Aspect | TRV Reference | VN-XUONG-UUV | Gap |
|--------|--------------|--------------|-----|
| Payload | Torpedo (~300-500 kg) | UUV 550 kg + tether drum | UUV nặng hơn + thêm drum |
| Tether | Không (torpedo tự hành) | 25 km cáp quang + drum | **Hoàn toàn khác** — cần thêm drum, fairlead, operator |
| Recovery method | Channel + winch | Channel + winch + tether sync | Thêm PD-6 sync complexity |
| Crew task | Helmsman + recovery crew | Helmsman + LARS op + UUV op | Thêm UUV operator role |
| Hull type | RIB (inflatable collar) | Aluminum (assumed) | **Cân nhắc RIB option?** |
| Towing | Không ghi | Tow alongside mother ship | Cần towing arrangement |
| Speed requirement | 30 kts | ~15-20 kts (lower OK) | Cho phép lighter engines |
| UUV control | Không (torpedo autonomous) | Suitcase controller via tether | Cần thêm console space + power |

---

## 5. Lessons Learned cho VN-XUONG-UUV Design

### 5.1 Validated Concepts (can adopt directly)

1. **Stern recovery channel with rollers** — proven cho torpedo-profile bodies. VN-XUONG-UUV D=400mm phù hợp.
2. **Twin outboard propulsion** — xem xét nâng cấp từ single lên twin cho maneuverability.
3. **Centerline channel + outboards hai bên** — layout đã được chứng minh.
4. **Open deck** — cho phép crew access cả hai bên channel.
5. **Forward console** — clear sight lines to stern during recovery.

### 5.2 Design Adaptations Needed

1. **Thêm cable drum** — TRV không có tether. Drum placement = PD-4 (midship hoặc forward of channel).
2. **Thêm UUV operator station** — cần seat + suitcase controller mount. Có thể beside helm console.
3. **Channel width** — scale cho D=400mm UUV (+ clearance). TRV channel ~500-600mm, VN-XUONG-UUV cần ~550-650mm.
4. **Towing bridle** — TRV không có. Cần thêm cho VN-XUONG-UUV tow alongside mode.

### 5.3 Decisions Made (from TRV reference analysis)

1. **RIB vs. pure aluminum hull?** → **DECIDED: Pure aluminum** [L2]. Đơn giản, bền, phù hợp đóng tàu Việt Nam. Không dùng sponson tubes.
2. **Twin vs. single outboard?** → **DECIDED: Twin outboard** [L2]. Giống TRV. Differential thrust cho station-keeping + stern-first approach.
3. **Recovery channel system?** → **DECIDED: Integrated channel (TRV proven)** [L2]. Fixed stern frame + rollers, centerline.
4. **Lightship estimate** — TRV 2.7t (RIB). VN-XUONG-UUV pure aluminum + extras → estimate ~3.0-3.5t (xác nhận Phase 3).

---

## 6. Weight Benchmark

TRV lightship 2.7 tonnes cho 8m RIB, bao gồm:
- Hull + structure
- Twin outboards
- Console + electronics
- Recovery channel + winch
- KHÔNG bao gồm: cable drum, genset, UUV controller

**VN-XUONG-UUV additional mass (estimate [L5]):**

| Item | Mass (kg) |
|------|-----------|
| TRV baseline | 2,700 |
| Cable drum + 25km cable | ~50 (drum) + 12.5 (cable) = ~65 |
| Diesel genset (5 kW) | ~150 |
| UUV controller (suitcase) | ~30 |
| Towing bridle + hardware | ~30 |
| Margin (10%) | ~300 |
| **Estimated VN-XUONG-UUV lightship** | **~3,275 kg** |

Add UUV payload: 3,275 + 550 = **~3,825 kg loaded displacement**

---

## 7. Áp Dụng vào Morphological Matrix (Doc 007)

| Sub-Function | WP từ TRV Reference | Confidence |
|-------------|---------------------|-----------|
| F1.2 Propulsion | Twin outboard (nâng cấp từ single?) | L4 |
| F1.5 Stability | RIB sponson tubes → beam 3.2m | L4 |
| F2.5 Water entry | Stern channel at 15-20 deg | L4 |
| F3.3 V-funnel | **Recovery channel (fixed frame + rollers)** | L4 — proven |
| F3.4 Capture | Cradle integrated trong channel | L4 |
| F3.6 Winch up | Winch forward of channel, cable dọc channel | L4 |
| F4.4 Monitor | Console-based monitoring | L4 |
| F6.6 Workspace | Forward console + bucket seat | L4 |

---

*REF: Torpedo Recovery Vessel Reverse Engineering | VN-XUONG-UUV Phase 2 | COD: Offload (O2)*
