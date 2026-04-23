---
project: VN-RANGE-001
step: A5 — Logistics and Pre-Arrival Brief
type: pre-arrival-package (Clawdbot sends to POC + packing list for logistics)
deployment_id: DEP-VNR-001
customer: Trường bắn Suối Hai — E12/D3
version: 1.0
created: 2026-02-20
status: READY TO SEND
hitl: NO — routine logistics step
automation: 70%
---

# CORTEX RANGE — Pre-Arrival Package
## DEP-VNR-001: Trường bắn Suối Hai

---

## PART 1: PRE-ARRIVAL CHECKLIST (Send to POC via Zalo)

> **Clawdbot sends this message to Thiếu tá Trần Văn Hùng 5 days before install.**
> Language: Vietnamese. Tone: professional, clear, no ambiguity.

---

### Zalo Message Template

```
Kính gửi Thiếu tá Trần Văn Hùng,

Workshop X xin thông báo hệ thống CORTEX RANGE cho Trường bắn Suối Hai
đã hoàn tất kiểm tra tại xưởng (FAT PASS) và sẵn sàng lắp đặt.

📅 DỰ KIẾN LẮP ĐẶT: Tuần 2 tháng 3/2026 (3 ngày lắp + 2 ngày hiệu chuẩn)

Để đảm bảo lắp đặt diễn ra thuận lợi, xin đồng chí xác nhận các mục sau
TRƯỚC ngày lắp đặt:

✅ CHECKLIST CHUẨN BỊ TRƯỜNG BẮN:

☐ 1. Ổ cắm điện 220V tại tuyến bắn: CẦN TỐI THIỂU 5 ổ cắm
       (hiện có 2 — cần lắp thêm 3 ổ trước ngày cài đặt)
☐ 2. Trường bắn NGHỈ BẮN trong 3 ngày lắp đặt
       (không bắn đạn thật trong thời gian lắp)
☐ 3. Trường bắn nghỉ bắn thêm 2 ngày cho hiệu chuẩn
       (cần bắn đạn thật CHỈ trong buổi hiệu chuẩn, có RSO)
☐ 4. Đại úy Lê Minh Đức (RSO) xác nhận có mặt ngày hiệu chuẩn
☐ 5. Chuẩn bị 200 viên đạn 7.62mm cho hiệu chuẩn (20 viên/làn × 10 làn)
☐ 6. 1 đầu mối kỹ thuật hỗ trợ lắp đặt (biết vị trí nguồn điện, khóa phòng)
☐ 7. Mua 1 SIM Viettel 4G data (gói cước data, cho modem xem từ xa)
☐ 8. Phòng chỉ huy mở khóa tủ thiết bị cho kỹ thuật viên

⚠️ MỤC 1 LÀ QUAN TRỌNG NHẤT: Nếu chưa lắp đủ ổ cắm, hệ thống
sẽ chạy bằng pin (giới hạn 4 giờ). Xin ưu tiên lắp điện trước.

Xin phản hồi bằng cách đánh dấu ✅ từng mục khi hoàn thành.
Tôi sẽ nhắc lại 2 ngày trước ngày lắp đặt.

Trân trọng,
KN Nguyen — Workshop X
(Hỗ trợ: nhắn Zalo hoặc gọi 0XXX-XXX-XXX)
```

### Reminder Message (T-2 days)

```
Kính gửi Thiếu tá Hùng,

Nhắc nhở: Đội lắp đặt CORTEX RANGE sẽ đến Trường bắn Suối Hai
vào ngày [DATE].

Xin xác nhận lần cuối:
☐ Ổ cắm điện đã lắp đủ?
☐ Trường bắn đã lên lịch nghỉ bắn?
☐ RSO Đại úy Đức xác nhận có mặt ngày [DATE+3]?
☐ 200 viên đạn 7.62mm đã chuẩn bị?

Giờ đến dự kiến: [TIME] — Cổng đơn vị.

Trân trọng,
KN
```

---

## PART 2: PACKING LIST (For logistics / technician)

### Box 1: Sensors

| Item | Qty | Packed? | Weight |
|------|-----|---------|--------|
| VN-LOMAH sensor (labeled L01-L10 + SP) | 11 | ☐ | ~3.5 kg |
| Sensor mounting brackets (M8 bolt-on) | 11 | ☐ | ~2 kg |
| Sensor cables 5m (labeled L01-L08, SP) | 9 | ☐ | ~1.5 kg |
| Sensor cables 10m (labeled L09-L10) | 2 | ☐ | ~0.5 kg |
| Cable protector trunking 2m sections | 15 | ☐ | ~4 kg |
| **Box 1 total** | | | **~11.5 kg** |

### Box 2: Computing & Network

| Item | Qty | Packed? | Weight |
|------|-----|---------|--------|
| EDGE node (Jetson Orin Nano + NVMe, padded case) | 1 | ☐ | ~1.5 kg |
| WiFi AP (outdoor) + pole clamp kit | 1 | ☐ | ~0.8 kg |
| PoE switch 16-port | 1 | ☐ | ~1.2 kg |
| 4G LTE modem + external antenna | 1 | ☐ | ~0.3 kg |
| UPS 600VA | 1 | ☐ | ~4 kg |
| Ethernet Cat6 30m (EDGE→AP) | 1 | ☐ | ~0.8 kg |
| **Box 2 total** | | | **~8.6 kg** |

### Box 3: User Devices & Materials

| Item | Qty | Packed? | Weight |
|------|-----|---------|--------|
| Tablets (ruggedized, charged) + cases | 2 | ☐ | ~1.2 kg |
| Tablet charging station | 1 | ☐ | ~0.5 kg |
| Power extensions 10m 3-outlet | 3 | ☐ | ~1.5 kg |
| Cable ties + labels (bulk bag) | 1 | ☐ | ~0.2 kg |
| Waterproof junction boxes | 2 | ☐ | ~0.4 kg |
| Quick-reference cards (laminated) | 5 | ☐ | ~0.1 kg |
| Signage "CORTEX RANGE Active" | 2 | ☐ | ~0.3 kg |
| **Box 3 total** | | | **~4.2 kg** |

### Box 4: Documentation & Tools

| Item | Qty | Packed? | Weight |
|------|-----|---------|--------|
| A3 Config printout (field reference) | 1 | ☐ | — |
| A4 FAT certificate (signed copy) | 1 | ☐ | — |
| Installation guide (B7 sensor mounting) | 1 | ☐ | — |
| Network validation checklist (B8) | 1 | ☐ | — |
| Technician tool kit (drill, M8 wrench, multimeter, cable tester) | 1 | ☐ | ~3 kg |
| Laptop (KN/technician — for EDGE terminal access) | 1 | ☐ | ~1.5 kg |
| **Box 4 total** | | | **~4.5 kg** |

### Shipping Summary

| | Boxes | Total Weight | Shipping Method |
|---|-------|-------------|----------------|
| Equipment | 4 boxes | ~29 kg | Van — Hanoi → Ba Vì (55km, ~1.5h) |
| Personnel | KN + technician | — | Same van or separate vehicle |
| Duration | — | — | Day trip possible; pack accommodation if install extends |

---

## PART 3: INSTALL WEEK SCHEDULE

| Day | Activity | Personnel | Duration | Notes |
|-----|----------|-----------|----------|-------|
| **Day 0** | Travel to Ba Vì + unload equipment | KN + technician | ~2h | Arrive before noon |
| **Day 1** | B6 prerequisites + B7 sensor mounting + B8 network | Technician (+ POC assist) | Full day | F1 power check FIRST |
| **Day 2** | B9 software deploy + B10 integration test | Technician + KN (remote) | Full day | End with B11 gate prep |
| **Day 3** | B11 installation gate (morning) + C12 calibration start | KN + RSO + Commander | Full day | RSO MUST be present for C12 |
| **Day 4** | C12 calibration complete + C13 report + C14 PULSE config | KN + technician | Full day | |
| **Day 5** | C15 validation gate + C16 training + C17 briefing + C18 handover | KN + Commander + range officers | Full day | GO-LIVE if all gates pass |

> **Contingency:** If Day 3-5 slip, KN extends 1 day. If F1 power not resolved → battery mode Day 1, escalate.

---

## PART 4: TECHNICIAN TRAVEL BRIEF

| Item | Detail |
|------|--------|
| Destination | Trường bắn Suối Hai, Ba Vì, Hà Nội |
| Distance | 55 km from Hanoi center (~1.5h drive) |
| Road | Paved to unit gate, 500m dirt road to range (§8.1) |
| Accommodation | Nhà khách đơn vị (unit guest house) — confirmed §8.3 |
| Meals | At unit canteen (confirm with POC) |
| Duration | 5 days on-site (Day 0 travel + Day 1-4 work + Day 5 handover) |
| Schedule constraint | Week 1 March BLOCKED (regimental exercise) — install Week 2 |
| Emergency contact | KN: 0XXX-XXX-XXX / POC: 0912-XXX-XXX |
| Equipment | Boxes 1-4 loaded in van; verify packing list before departure |

---

## PART 5: PRE-DEPARTURE VERIFICATION

> **KN checks before van departs Workshop X.**

- ☐ All 4 boxes packed per Part 2 (every item checked)
- ☐ FAT certificate in Box 4 (signed)
- ☐ Zalo message sent to POC (Part 1) and acknowledged
- ☐ POC confirmed: power outlets ≥ 5 at firing line (F1 resolved?)
- ☐ POC confirmed: RSO available Day 3
- ☐ POC confirmed: 200 rounds available for calibration
- ☐ Viettel SIM purchased (or POC confirmed they bought one)
- ☐ Accommodation arranged
- ☐ Technician has printed copies of A3 config + B7 install guide

**F1 power status at departure:**
- ☐ RESOLVED — POC installed outlets → proceed normally
- ☐ UNRESOLVED — battery fallback: pack 3× extra battery packs + plan permanent fix Day 1

---

*A5 Pre-Arrival Package v1.0 — DEP-VNR-001 (Trường bắn Suối Hai)*
*No HITL checkpoint — routine logistics*
*Clawdbot sends Part 1 to POC → KN verifies Part 5 → ship*
