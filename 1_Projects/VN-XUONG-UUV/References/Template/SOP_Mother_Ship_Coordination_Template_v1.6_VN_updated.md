---
project: VN-XUONG-UUV
phase: 1
type: SOP-template
version: 1.6
created: 2026-03-06
status: template
related: 003_Stakeholder_Analysis (S4 — Mother Ship CO)
---

# SOP Template — Mother Ship Coordination for UUV Tender Operations

> **Mục đích:** Quy định trình tự phối hợp giữa tàu mẹ và xuồng LARS, bao gồm: tiếp nhận xuồng, cẩu chuyển UUV, kéo sát mạn và thu hồi xuồng. Tài liệu này gửi Chỉ huy tàu mẹ để rà soát, thống nhất và làm căn cứ tổ chức thực hiện.
>
> **Hướng dẫn điền:** Điền vào các ô `___`. Giá trị phụ thuộc vào tàu mẹ cụ thể (loại tàu, vị trí crane, bố trí boong). Mục nào chưa biết ghi "TBD — xác định khi khảo sát tàu mẹ".
>
> **Quy ước:**
> - **SHIP CO** = Chỉ huy tàu mẹ (hoặc Sĩ quan trực)
> - **CRANE OP** = Người điều khiển crane tàu mẹ
> - **DECK CREW** = Thủy thủ boong tàu mẹ (phục vụ crane, dây kéo)
> - **CMDR** = Helmsman / Chỉ huy xuồng LARS
> - **OP1** = LARS Operator (winch điện, cradle, ramp)
> - **OP2** = UUV Controller Operator

---

## TỔNG QUAN HOẠT ĐỘNG

```
Trình tự chung:

TÀU MẸ (tại cảng hoặc trên biển)
  |
  |— [A] Hạ xuồng LARS xuống nước (crane/davit tàu mẹ)
  |— [B] Chuyển UUV + cáp điều khiển từ tàu mẹ sang xuồng LARS (crane tàu mẹ)
  |— [B2] Kết nối cáp điều khiển với UUV + bộ điều khiển trên xuồng
  |— [C] Xuồng LARS tách khỏi tàu mẹ → transit đến khu vực
  |— [D] Xuồng LARS thực hiện triển khai–thu hồi UUV (xem SOP riêng)
  |— [E] Xuồng LARS quay về tàu mẹ
  |— [F] Chuyển UUV từ xuồng LARS lên tàu mẹ (crane tàu mẹ)
  |— [G] Kéo xuồng LARS lên tàu mẹ (crane/davit) HOẶC kéo sát mạn
  |
  Tổng thời gian crane: A + B + F + G = ___ phút (mục tiêu: <= ___ phút)
```

---

## PHASE A: XUỒNG LARS VÀO VỊ TRÍ

> **LƯU Ý:** Xuồng LARS không tải ~2,820 kg > SWL của cẩu tàu mẹ là 2,5 tấn → **KHÔNG THỂ CẨU XUỒNG**. Xuồng phải tự transit đến tàu mẹ hoặc được kéo sát mạn. Crane tàu mẹ chỉ dùng cho UUV (550 kg).

### A1: Điều Kiện Tiên Quyết

| # | Điều kiện | Người xác nhận | Đạt | Ghi chú |
|---|-----------|---------------|-----|---------|
| A1-01 | Sea State <= SS ___ | SHIP CO | [ ] | Điều kiện an toàn hạ xuồng |
| A1-02 | Gió <= ___ kts | SHIP CO | [ ] | |
| A1-03 | Tàu mẹ giữ tốc độ ___ kts, hướng ___ | SHIP CO | [ ] | Tạo vùng khuất gió/sóng |
| A1-04 | Khu vực hạ xuồng sạch — không có chướng ngại | DECK CREW | [ ] | |
| A1-05 | Crane đã kiểm tra, SWL >= 2.5t | CRANE OP | [ ] | Crane chỉ dùng cho UUV 550 kg |
| A1-06 | Dây treo UUV — nguyên vẹn, SWL >= 750 kg | DECK CREW | [ ] | UUV 550 kg, SF ~1.4x |
| A1-07 | Xuồng LARS đã kiểm tra trước (0A bảng kiểm PASS) | CMDR | [ ] | Xem SOP Triển khai–thu hồi |
| A1-08 | Ekip xuồng LARS 3 người sẵn sàng (CMDR, OP1, OP2) | CMDR | [ ] | Helmsman / LARS op / UUV op |
| A1-09 | Liên lạc VHF giữa tàu mẹ và xuồng LARS — thu tốt | SHIP CO + CMDR | [ ] | Kênh ___ |

**GO/NO-GO:** Tất cả 9 điều kiện đạt → SHIP CO cho phép hạ xuồng.

### A2: Quy Trình Xuồng LARS Cập Mạn Tàu Mẹ

> Xuồng LARS tự transit đến tàu mẹ hoặc được kéo sát mạn (không cẩu).

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| A2-01 | SHIP CO ra lệnh: "CHUẨN BỊ NHẬN XUỒNG LARS" | SHIP CO | Thông báo toàn tàu | [ ] |
| A2-02 | SHIP CO giữ tàu mẹ hướng tạo vùng khuất sóng/gió | SHIP CO | Mạn khuất sóng/gió | [ ] |
| A2-03 | CMDR lái xuồng LARS tiếp cận mạn tàu mẹ | CMDR | Tốc độ chậm, áo phao BẮT BUỘC | [ ] |
| A2-04 | OP1 bắt dây chống va + dây buộc tạm | OP1 + DECK CREW | ___ điểm chống va | [ ] |
| A2-05 | CMDR báo cáo SHIP CO: "XUỒNG LARS ĐÃ CẬP MẠN, SẴN SÀNG NHẬN UUV" | CMDR | VHF | [ ] |

**Thời gian mục tiêu Phase A:** <= 10 phút

**⚠ ABORT nếu:**
- Xuồng bị va mạnh vào mạn tàu → tách ra, kiểm tra hư hại
- Sóng đột ngột tăng → giữ khoảng cách an toàn, chờ

---

## PHASE B: CHUYỂN UUV TỪ TÀU MẸ SANG XUỒNG LARS

### B1: Điều Kiện Tiên Quyết

| # | Điều kiện | Người xác nhận | Đạt | Ghi chú |
|---|-----------|---------------|-----|---------|
| B1-01 | Xuồng LARS đã hạ, neo sát mạn tàu mẹ | CMDR | [ ] | Dây chống va đặt |
| B1-02 | Crane sẵn sàng, gắn dây treo UUV | CRANE OP | [ ] | Dây treo UUV: SWL >= 750 kg (UUV = 550 kg) |
| B1-03 | UUV đã được chuẩn bị trên boong tàu mẹ | DECK CREW | [ ] | Tại vị trí ___ |
| B1-04 | Cradle xuồng LARS — clamp OPEN, sẵn sàng nhận UUV | OP1 | [ ] | |
| B1-05 | Sea State vẫn <= SS ___ | SHIP CO | [ ] | |

### B2: Quy Trình Chuyển UUV

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| B2-01 | DECK CREW gắn dây treo vào UUV tại các điểm móc | DECK CREW | ___ điểm móc theo ICD | [ ] |
| B2-02 | CRANE OP nâng UUV | CRANE OP | Nâng chậm, kiểm tra cân bằng | [ ] |
| B2-03 | UUV rời boong tàu mẹ — CRANE OP giữ | CRANE OP | Không lắc | [ ] |
| B2-04 | CRANE OP quay UUV ra ngoài mạn, phía xuồng LARS | CRANE OP | Chậm, có người hướng dẫn | |
| B2-05 | CMDR điều khiển xuồng LARS vào vị trí nhận | CMDR | Sát mạn tàu mẹ, ___ dây chống va | [ ] |
| B2-06 | CRANE OP hạ UUV xuống phía xuồng LARS | CRANE OP | HẠ CHẬM — ___ m/phút | |
| B2-07 | OP1 + OP2 hướng dẫn UUV vào cradle | OP1, OP2 | Dây dẫn, KHÔNG dùng tay trực tiếp | [ ] |
| B2-08 | UUV đặt vào cradle — OP1 đóng clamp | OP1 | Tất cả clamp LOCKED | [ ] |
| B2-09 | OP2 tháo dây treo UUV | OP2 | Crane cho lơi | [ ] |
| B2-10 | CRANE OP kéo dây treo lên | CRANE OP | | [ ] |
| B2-11 | OP1 kiểm tra UUV trên cradle — cân giữa, clamp chặt | OP1 | | [ ] |
| B2-12 | **OP2 kết nối cáp điều khiển với UUV (connector C8)** | OP2 | Connector khớp, khóa | [ ] |
| B2-13 | **OP2 kết nối cable với bộ điều khiển, thử liên lạc** | OP2 | Controller: UUV CONNECTED | [ ] |
| B2-14 | CMDR báo cáo SHIP CO: "UUV ĐÃ NẠP, CABLE KẾT NỐI, SẴN SÀNG" | CMDR | VHF | [ ] |

**Thời gian mục tiêu Phase B:** <= ___ phút

**Trọng lượng cẩu: UUV = 550 kg << Crane SWL 2,500 kg → hệ số an toàn 4.5x — OK**

**⚠ AN TOÀN:**
- UUV trị giá >>$100K — HẠ CHẬM, không bao giờ để rơi
- KHÔNG dùng tay đỡ UUV khi crane đang hạ — dùng dây dẫn
- Nếu UUV lắc quá nhiều → NÂNG LÊN, chờ sóng giảm, thử lại
- OP1 + OP2 áo phao BẮT BUỘC

---

## PHASE C: XUỒNG LARS TÁCH KHỎI TÀU MẸ

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| C-01 | CMDR xin phép SHIP CO: "XIN TÁCH KHỎI" | CMDR | VHF | [ ] |
| C-02 | SHIP CO cho phép: "ĐỒNG Ý TÁCH" | SHIP CO | VHF | [ ] |
| C-03 | OP1 tháo dây chống va | OP1 | | [ ] |
| C-04 | Tháo dây kéo (nếu đang kéo sát mạn) | OP1 | Quick-release | [ ] |
| C-05 | CMDR lái xuồng rời xa tàu mẹ | CMDR | Hướng ___, tốc độ chậm | |
| C-06 | Khi đã cách tàu mẹ >= ___ m: tăng tốc transit | CMDR | Tốc độ ___ kts | |
| C-07 | CMDR báo cáo: "ĐÃ TÁCH, ĐANG TRANSIT" | CMDR | VHF | [ ] |

**Nếu kéo sát mạn (towing mode):**

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| C-T1 | DECK CREW buộc dây kéo từ tàu mẹ sang xuồng LARS | DECK CREW + OP1 | Dây kéo SWL >= ___ kg | [ ] |
| C-T2 | Kết nối bridle trên xuồng LARS | OP1 | ___ điểm buộc | [ ] |
| C-T3 | Quick-release lắp đúng và thử | OP1 | Thử nhả → hoạt động | [ ] |
| C-T4 | CMDR xác nhận: "DÂY KÉO SẴN SÀNG" | CMDR | VHF | [ ] |
| C-T5 | SHIP CO bắt đầu kéo — tăng tốc từ từ | SHIP CO | Tốc độ kéo ___ kts (max 5-8 kts) | |
| C-T6 | CMDR giám sát: dây kéo căng đều, xuồng ổn định | CMDR | Liên tục | |

---

## PHASE D: HOẠT ĐỘNG UUV

> Xem **SOP_UUV_Launch_Recovery_Template_v1.6_VN_updated.md** — quy trình triển khai–thu hồi do ekip xuồng LARS thực hiện.
>
> Trong thời gian này, tàu mẹ có thể:
> - Chờ tại khu vực (nếu kéo)
> - Thực hiện nhiệm vụ khác (nếu xuồng tự transit)
> - Giám sát VHF (UUV điều khiển bằng tether từ xuồng LARS, không cần relay)

**Liên lạc định kỳ:** Mỗi ___ phút, CMDR báo cáo SHIP CO tình hình.

---

## PHASE E: XUỒNG LARS QUAY VỀ TÀU MẸ

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| E-01 | CMDR báo cáo SHIP CO: "NHIỆM VỤ HOÀN THÀNH, ĐANG QUAY VỀ" | CMDR | VHF, ETA ___ phút | [ ] |
| E-02 | SHIP CO chuẩn bị: vị trí nhận xuồng, crane sẵn sàng | SHIP CO | | [ ] |
| E-03 | Xuồng LARS tiếp cận tàu mẹ | CMDR | Tốc độ chậm, phía ___ (mạn khuất sóng/gió) | |
| E-04 | OP1 bắt dây chống va | OP1 | | [ ] |
| E-05 | Buộc dây tạm vào tàu mẹ | OP1 + DECK CREW | | [ ] |
| E-06 | CMDR báo cáo: "ĐÃ CẬP MẠN, SẴN SÀNG CHUYỂN UUV" | CMDR | VHF | [ ] |

**Nếu kéo về:**

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| E-T1 | SHIP CO giảm tốc kéo, dừng | SHIP CO | | |
| E-T2 | DECK CREW thu dây kéo | DECK CREW | | [ ] |
| E-T3 | CMDR lái xuồng sát mạn tàu mẹ | CMDR | | |
| E-T4 | OP1 bắt dây chống va + dây tạm | OP1 | | [ ] |

---

## PHASE F: CHUYỂN UUV TỪ XUỒNG LARS LÊN TÀU MẸ

> **Ngược lại Phase B** — cùng quy trình, ngược chiều.

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| F-01 | CRANE OP chuẩn bị dây treo UUV | CRANE OP | SWL >= 750 kg (UUV 550 kg) | [ ] |
| F-02 | **OP2 ngắt cáp điều khiển khỏi UUV** | OP2 | Connector C8 tháo | [ ] |
| F-02a | OP2 tháo dây giềng UUV | OP2 | | [ ] |
| F-03 | OP1 mở clamp cradle | OP1 | Clamp UNLOCKED | [ ] |
| F-04 | CRANE OP hạ dây treo xuống, OP2 gắn vào UUV | OP2 | Tại ___ điểm móc (ICD) | [ ] |
| F-05 | CRANE OP nâng UUV khỏi cradle | CRANE OP | Nâng chậm | [ ] |
| F-06 | CRANE OP quay UUV vào boong tàu mẹ | CRANE OP | Có người hướng dẫn | |
| F-07 | DECK CREW hướng dẫn UUV vào vị trí cất giữ trên tàu mẹ | DECK CREW | Dây dẫn | [ ] |
| F-08 | UUV đặt xuống vị trí — DECK CREW buộc giữ | DECK CREW | | [ ] |
| F-09 | Tháo dây treo UUV | DECK CREW | | [ ] |
| F-10 | Báo cáo SHIP CO: "UUV ĐÃ LÊN TÀU MẸ" | CRANE OP | | [ ] |

**Thời gian mục tiêu Phase F:** <= ___ phút

---

## PHASE G: THU HỒI XUỒNG LARS LÊN TÀU MẸ (HOẶC KÉO SÁT MẠN)

### Option G1: Kéo Xuồng Lên Tàu Mẹ (Crane/Davit)

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G1-01 | EKIP LARS lên tàu mẹ (qua thang dây) | CMDR, OP1, OP2 | Từng người một | [ ] |
| G1-02 | Tắt động cơ xuồng LARS | CMDR (từ tàu mẹ hoặc OP1 xuống) | | [ ] |
| G1-03 | DECK CREW gắn dây treo vào xuồng LARS | DECK CREW | ___ điểm móc | [ ] |
| G1-04 | ~~CRANE OP nâng xuồng LARS~~ | ~~CRANE OP~~ | **KHÔNG KHẢ THI: không tải 2,820 kg > SWL 2,500 kg** | |
| G1-05 | CRANE OP đặt xuồng vào vị trí cất giữ trên boong | CRANE OP | | [ ] |
| G1-06 | DECK CREW buộc giữ xuồng LARS | DECK CREW | ___ điểm buộc | [ ] |
| G1-07 | Tháo dây treo | DECK CREW | | [ ] |
| G1-08 | Báo cáo SHIP CO: "XUỒNG LARS ĐÃ THU HỒI" | DECK CREW | | [ ] |

**Trọng lượng cẩu: Xuồng LARS không tải = ~2,820 kg > Crane SWL 2,500 kg**
**⚠ KHÔNG THỂ CẨU XUỒNG LÊN. BẮT BUỘC dùng Option G2 (kéo sát mạn) hoặc G3 (tự transit).**

### Option G2: Kéo Sát Mạn (Towing alongside) — PRIMARY cho Path 3

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G2-01 | EKIP LARS chuyển sang tàu mẹ (qua thang dây) | CMDR, OP1, OP2 | Từng người một, áo phao | [ ] |
| G2-02 | Tắt động cơ xuồng LARS | OP1 (xuống lại xuồng tắt) hoặc điều khiển từ xa | | [ ] |
| G2-03 | DECK CREW buộc dây kéo + dây chống va | DECK CREW + OP1 | Dây kéo tại ___ điểm, chống va tại ___ điểm | [ ] |
| G2-04 | Kiểm tra buộc giữ: dây kéo, dây chống va, fender | OP1 | Mắt kinh | [ ] |
| G2-05 | Báo cáo SHIP CO: "XUỒNG LARS ĐÃ BUỘC, SẴN SÀNG KÉO" | OP1 | VHF | [ ] |
| G2-06 | Tàu mẹ bắt đầu hành trình — tăng tốc từ từ | SHIP CO | Tốc độ kéo <= ___ kts | |
| G2-07 | CMDR giám sát xuồng LARS từ tàu mẹ | CMDR | Mỗi ___ phút | |

### Option G3: Xuồng LARS Tự Transit Về Cảng

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G3-01 | CMDR + OP1 ở lại xuồng LARS | CMDR, OP1 | OP2 lên tàu mẹ | |
| G3-02 | Tháo dây chống va, tách khỏi tàu mẹ | CMDR | | [ ] |
| G3-03 | Transit về cảng | CMDR | Tốc độ ___ kts, ETA ___ | |
| G3-04 | Báo cáo SHIP CO: "XUỒNG LARS ĐANG TRANSIT VỀ CẢNG ___" | CMDR | VHF | [ ] |
| G3-05 | Cập cảng, buộc giữ | CMDR, OP1 | | [ ] |

---

## THÔNG TIN TÀU MẸ (ĐIỀN KHI KHẢO SÁT)

> Mỗi tàu mẹ khác nhau — điền thông tin cụ thể của tàu mẹ sẽ sử dụng.

| # | Thông số | Giá trị | Ghi chú |
|---|----------|---------|---------|
| MS-01 | Tên tàu / Số hiệu | ___ | |
| MS-02 | Loại tàu | ___ | |
| MS-03 | LOA / Beam | ___ m / ___ m | |
| MS-04 | Crane loại | ___ | VD: knuckle boom, telescopic |
| MS-05 | Crane SWL | **2.5t** | Chỉ cho UUV 550 kg, KHÔNG cho xuồng 2,820 kg |
| MS-06 | Crane tầm với (radius) | ___ m tại SWL ___ t | SWL giảm khi tăng radius |
| MS-07 | Crane vị trí trên tàu | ___ (mạn ___, frame ___) | |
| MS-08 | Crane có thể quay ra ngoài mạn? | Có / Không | |
| MS-09 | Vị trí hạ xuồng LARS (mạn nào?) | Mạn ___ (phải/trái) | Mạn khuất sóng/gió preferred |
| MS-10 | Vị trí UUV cất giữ trên tàu mẹ | ___ | Gần crane |
| MS-11 | Thang dây/cầu thang vị trí | ___ | Cho ekip lên/xuống |
| MS-12 | Điểm buộc dây kéo (bitts/cleats) | ___ vị trí, SWL ___ t | |
| MS-13 | Tốc độ kéo an toàn | ___ kts (max) | |
| MS-14 | Kênh VHF quy định | Kênh ___ | |
| MS-15 | Độ cao mạn khô từ mặt nước | ___ m | Ảnh hưởng thao tác crane |

### Sơ Đồ Boong Tàu Mẹ (Vẽ Vào Đây)

```
Hướng dẫn: Vẽ sơ đồ top-view của boong tàu mẹ, đánh dấu:
- Vị trí crane (★)
- Vị trí cất giữ xuồng LARS (▣)
- Vị trí cất giữ UUV (◆)
- Điểm buộc dây kéo (●)
- Thang dây cho ekip (△)

                    MŨI TÀU
                      |
    ┌─────────────────┼─────────────────┐
    │                 |                 │
    │    MẠN TRÁI     |    MẠN PHẢI    │
    │                 |                 │
    │                 |                 │
    │       ★?        |                 │  ← Crane
    │                 |                 │
    │       ▣?        |                 │  ← Xuồng LARS
    │                 |                 │
    │       ◆?        |                 │  ← UUV
    │                 |                 │
    │       ●?        |        ●?      │  ← Điểm buộc dây kéo
    │                 |                 │
    │       △?        |                 │  ← Thang dây
    │                 |                 │
    └─────────────────┼─────────────────┘
                      |
                   ĐUÔI TÀU
```

---

## TÍN HIỆU LIÊN LẠC

### Tín Hiệu Tay (Khi VHF Không Dùng Được / Khoảng Cách Gần)

| Tín hiệu | Hành động | Mô tả |
|----------|-----------|-------|
| 2 tay giơ lên | DỪNG / STOP | Dừng mọi hoạt động |
| 1 tay xoay tròn | NÂNG LÊN | Crane nâng |
| 1 tay chỉ xuống + xoay | HẠ XUỐNG | Crane hạ |
| 2 tay đẩy ra | RA XA | Tăng khoảng cách |
| 2 tay vẫy vào | LẠI GẦN | Giảm khoảng cách |
| Chéo 2 tay trên đầu | KHẨN CẤP / ABORT | Dừng ngay mọi hoạt động |

### Tín Hiệu VHF (Câu Nói Chuẩn)

| Tình huống | CMDR (xuồng LARS) | SHIP CO (tàu mẹ) |
|------------|-------------------|-----------------|
| Xin hạ xuồng | "XIN HẠ XUỒNG LARS" | "ĐỒNG Ý HẠ XUỒNG" / "CHỜ" |
| Xin nhận UUV | "SẴN SÀNG NHẬN UUV" | "BẮT ĐẦU CHUYỂN UUV" |
| Sẵn sàng tách | "XIN TÁCH KHỎI" | "ĐỒNG Ý TÁCH" |
| Báo cáo vị trí | "VỊ TRÍ: ___, HƯỚNG ___" | "NHẬN" |
| Báo cáo xong | "NHIỆM VỤ HOÀN THÀNH" | "NHẬN, CHUẨN BỊ NHẬN XUỒNG" |
| Khẩn cấp | "KHẨN CẤP: ___" | "NHẬN, ĐANG XỬ LÝ" |

---

## EMERGENCY PROCEDURES (PHÍA TÀU MẸ)

### EP-MS-01: Xuồng LARS Va Chạm Mạn Tàu Mẹ

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG | Người phát hiện |
| 2 | DỪNG crane (nếu đang hoạt động) | CRANE OP |
| 3 | Đánh giá hư hại: xuồng LARS + mạn tàu mẹ | CMDR + DECK CREW |
| 4 | Nếu xuồng LARS bị thủng → ưu tiên cứu người → kéo lên nếu có thể | SHIP CO |
| 5 | Báo cáo và ghi nhận | SHIP CO |

### EP-MS-02: Dây Kéo Đứt Khi Đang Kéo

| # | Bước | Người |
|---|------|-------|
| 1 | SHIP CO giảm tốc ngay | SHIP CO |
| 2 | CMDR khởi động động cơ xuồng LARS (nếu chưa) | CMDR |
| 3 | CMDR điều khiển xuồng LARS, tránh trôi | CMDR |
| 4 | Khi an toàn: tiếp cận lại tàu mẹ, buộc dây mới | CMDR + DECK CREW |
| 5 | Kiểm tra nguyên nhân đứt dây trước khi kéo lại | OP1 |

### EP-MS-03: Crane Hư Hỏng Khi Đang Treo UUV

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "CRANE HỎNG" | CRANE OP |
| 2 | KHÓA crane brake ngay | CRANE OP |
| 3 | Tất cả RÁN KHỎI khu vực dưới UUV | ALL |
| 4 | Nếu UUV còn treo: giữ nguyên, chờ sửa crane | — |
| 5 | Nếu UUV rơi: đánh giá hư hại, báo nhà chế tạo | SHIP CO |
| 6 | KHÔNG cố gắng bắt UUV đang rơi | ALL |

---

## SOP COMPLETION CHECKLIST

### Critical (PHẢI có trước hoạt động đầu tiên)

- [ ] Thông tin tàu mẹ (MS-01 đến MS-15) đã điền đầy đủ
- [ ] Sơ đồ boong tàu mẹ đã vẽ, đánh dấu vị trí crane, UUV, xuồng LARS
- [ ] Dây treo xuồng LARS và UUV đã xác định loại + SWL
- [ ] Tín hiệu tay đã thống nhất giữa CMDR và CRANE OP
- [ ] Câu nói VHF đã thống nhất, kênh VHF đã chọn
- [ ] Crane SWL đã kiểm tra tại radius thực tế (không chỉ SWL max)
- [ ] quy trình xử trí khẩn cấp đã phổ biến cho TẤT CẢ người liên quan
- [ ] SHIP CO đã rà soát và đồng ý SOP này

### Quan trọng (nên có trước thử nghiệm trên biển)

- [ ] Thử nghiệm crane với tải thử tương đương (trọng lượng tương đương UUV) trên tàu mẹ
- [ ] Thử buộc dây kéo + quick-release
- [ ] Thử lên/xuống ekip qua thang dây
- [ ] Thử liên lạc VHF tại các khoảng cách ___, ___, ___ m
- [ ] Tập luyện Phase A (hạ xuồng) + Phase B (chuyển UUV) tại cảng trước khi ra biển
- [ ] Crane radius chart có sẵn tại vị trí crane

### Khuyến nghị bổ sung

- [ ] Video ghi lại lần thao tác đầu tiên (phục vụ rà soát, rút kinh nghiệm và huấn luyện)
- [ ] Bản vẽ 3D minh họa trình tự thao tác cẩu (phục vụ phổ biến nhanh cho lực lượng boong)
- [ ] Thời gian trung bình từng Phase (benchmark từ tập luyện)

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-06 | Đơn vị chế tạo | Template ban đầu — giá trị TBD |
| 1.1 | 2026-03-06 | Đơn vị chế tạo | Thêm kết nối cáp điều khiển (B2-12/13), ngắt cable (F-02), bỏ USBL |
| 1.2 | 2026-03-07 | Đơn vị chế tạo | Phase 2 update: Xuồng 2.820 kg > cẩu 2,5 tấn → không cẩu xuồng, chỉ cẩu UUV 550 kg. Phase A đổi thành cập mạn (không hạ bằng crane). G1 đánh dấu không khả thi. Crew 3 người đã xác nhận. |

---

*SOP phối hợp tàu mẹ v1.6 | VN-XUONG-UUV Giai đoạn 1 | Bản dự thảo phục vụ rà soát nội bộ*
