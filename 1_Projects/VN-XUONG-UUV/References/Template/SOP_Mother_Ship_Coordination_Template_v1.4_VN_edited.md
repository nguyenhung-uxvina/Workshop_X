---
project: VN-XUONG-UUV
phase: 1
type: SOP-template
version: 1.0
created: 2026-03-06
status: template
related: 003_Stakeholder_Analysis (S4 — Mother Ship CO)
---

# SOP Mẫu — Phối hợp tàu mẹ trong hoạt động của xuồng phục vụ UUV

> **Mục đích:** Quy trình phối hợp giữa tàu mẹ và xuồng LARS, bao gồm: hạ/kéo xuồng, chuyển UUV bằng cần cẩu, kéo sát mạn, và thu hồi xuồng. Gửi cho Chỉ huy tàu mẹ để rà soát và thống nhất quy trình.
>
> **Hướng dẫn điền:** Điền vào các ô `___`. Giá trị phụ thuộc vào tàu mẹ cụ thể (loại tàu, vị trí cần cẩu, bố trí boong). Mục nào chưa xác định thì ghi "TBD — xác định khi khảo sát tàu mẹ".
>
> **Quy ước:**
> - **SHIP CO** = Chỉ huy tàu mẹ (hoặc Sĩ quan trực)
> - **CRANE OP** = Người điều khiển cần cẩu tàu mẹ
> - **DECK CREW** = Thủy thủ boong tàu mẹ (phục vụ cần cẩu, dây kéo)
> - **CMDR** = Chỉ huy xuồng LARS
> - **OP1/OP2** = Kíp xuồng LARS

---

## TỔNG QUAN TRÌNH TỰ THỰC HIỆN

```
Trình tự thực hiện chung:

TÀU MẸ (tại cảng hoặc trên biển)
  |
  |— [A] Hạ xuồng LARS xuống nước (cần cẩu/davit tàu mẹ)
  |— [B] Chuyển UUV + cáp điều khiển từ tàu mẹ sang xuồng LARS (cần cẩu tàu mẹ)
  |— [B2] Kết nối cáp điều khiển với UUV + bộ điều khiển trên xuồng
  |— [C] Xuồng LARS tách khỏi tàu mẹ → cơ động đến khu vực
  |— [D] Xuồng LARS thực hiện triển khai – thu hồi UUV (xem SOP riêng)
  |— [E] Xuồng LARS quay về tàu mẹ
  |— [F] Chuyển UUV từ xuồng LARS lên tàu mẹ (cần cẩu tàu mẹ)
  |— [G] Kéo xuồng LARS lên tàu mẹ (cần cẩu/davit) HOẶC kéo sát mạn
  |
  Tổng thời gian sử dụng cần cẩu: A + B + F + G = ___ phút (mục tiêu: <= ___ phút)
```

---

## GIAI ĐOẠN A: HẠ XUỒNG LARS XUỐNG NƯỚC

### A1: Điều kiện tiên quyết

| # | Điều kiện | Người xác nhận | Đạt | Ghi chú |
|---|-----------|---------------|-----|---------|
| A1-01 | Sea State <= SS ___ | SHIP CO | [ ] | Điều kiện an toàn hạ xuồng |
| A1-02 | Gió <= ___ kn | SHIP CO | [ ] | |
| A1-03 | Tàu mẹ giữ tốc độ ___ kn, hướng ___ | SHIP CO | [ ] | Tạo vùng khuất gió/sóng |
| A1-04 | Khu vực hạ xuồng sạch — không có chướng ngại | DECK CREW | [ ] | |
| A1-05 | Cần cẩu đã kiểm tra, SWL >= 2,5 t | CRANE OP | [ ] | |
| A1-06 | Dây treo xuồng LARS — nguyên vẹn, SWL >= ___ kg | DECK CREW | [ ] | 2-point hoặc 4-point sling |
| A1-07 | Xuồng LARS đã kiểm tra trước (0A checklist ĐẠT) | CMDR | [ ] | Xem SOP triển khai – thu hồi |
| A1-08 | Kíp xuồng LARS sẵn sàng (CMDR, OP1, OP2) | CMDR | [ ] | |
| A1-09 | Liên lạc VHF giữa tàu mẹ và xuồng LARS — thu tốt | SHIP CO + CMDR | [ ] | Kênh ___ |

**CHO PHÉP / KHÔNG CHO PHÉP:** Tất cả 9 điều kiện đạt → SHIP CO cho phép hạ xuồng.

### A2: Trình tự hạ xuồng

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| A2-01 | SHIP CO ra lệnh: "CHUẨN BỊ HẠ XUỒNG LARS" | SHIP CO | Thông báo toàn tàu | [ ] |
| A2-02 | DECK CREW gắn dây treo vào các điểm móc trên xuồng | DECK CREW | ___ điểm móc, kiểm tra khóa | [ ] |
| A2-03 | CRANE OP nâng xuồng khỏi vị trí cất giữ | CRANE OP | Nâng chậm, ___ m/phút | [ ] |
| A2-04 | CRANE OP quay ra ngoài mạn | CRANE OP | Tốc độ quay ___ độ/phút | |
| A2-05 | KÍP LARS xuống boong tàu mẹ, chuẩn bị xuống xuồng LARS | CMDR, OP1, OP2 | Áo phao BẮT BUỘC | [ ] |
| A2-06 | CRANE OP hạ xuồng xuống mặt nước | CRANE OP | Hạ chậm, ___ m/phút | |
| A2-07 | Xuồng chạm nước — OP1 kiểm tra nổi ổn định | OP1 | Từ trên tàu mẹ quan sát | [ ] |
| A2-08 | KÍP LARS xuống xuồng LARS (qua thang dây/cầu thang) | CMDR, OP1, OP2 | Từng người một | [ ] |
| A2-09 | CMDR khởi động động cơ, kiểm tra | CMDR | Động cơ chạy bình thường | [ ] |
| A2-10 | OP1 tháo dây treo cần cẩu | OP1 | Cần cẩu cho chùng dây | [ ] |
| A2-11 | CRANE OP kéo dây treo lên | CRANE OP | | [ ] |
| A2-12 | CMDR báo cáo SHIP CO: "XUỒNG LARS ĐÃ HẠ, BÌNH THƯỜNG" | CMDR | VHF | [ ] |

**Thời gian mục tiêu giai đoạn A:** <= ___ phút

**⚠ DỪNG QUY TRÌNH nếu:**
- Xuồng bị va vào mạn tàu khi đang hạ → DỪNG, nâng lên, kiểm tra
- Sóng đột ngột tăng → DỪNG tại vị trí hiện tại, chờ
- Dây treo có dấu hiệu bất thường → NÂNG LÊN NGAY

---

## GIAI ĐOẠN B: CHUYỂN UUV TỪ TÀU MẸ SANG XUỒNG LARS

### B1: Điều kiện tiên quyết

| # | Điều kiện | Người xác nhận | Đạt | Ghi chú |
|---|-----------|---------------|-----|---------|
| B1-01 | Xuồng LARS đã hạ, neo sát mạn tàu mẹ | CMDR | [ ] | Đã bố trí đệm chống va |
| B1-02 | Crane sẵn sàng (đã tháo dây treo xuồng, gắn dây treo UUV) | CRANE OP | [ ] | Dây treo UUV: SWL >= ___ kg |
| B1-03 | UUV đã được chuẩn bị trên boong tàu mẹ | DECK CREW | [ ] | Tại vị trí ___ trên boong |
| B1-04 | Cradle xuồng LARS — cơ cấu kẹp giữ MỞ, sẵn sàng nhận UUV | OP1 | [ ] | |
| B1-05 | Sea State vẫn <= SS ___ | SHIP CO | [ ] | |

### B2: Trình tự chuyển UUV

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| B2-01 | DECK CREW gắn dây treo vào UUV tại các điểm móc | DECK CREW | ___ điểm móc theo ICD | [ ] |
| B2-02 | CRANE OP nâng UUV | CRANE OP | Nâng chậm, kiểm tra cân bằng | [ ] |
| B2-03 | UUV rời boong tàu mẹ — CRANE OP giữ | CRANE OP | Không để tải lắc ngang | [ ] |
| B2-04 | CRANE OP quay UUV ra ngoài mạn, phía xuồng LARS | CRANE OP | Chậm, có người hướng dẫn | |
| B2-05 | CMDR điều khiển xuồng LARS vào vị trí nhận | CMDR | Sát mạn tàu mẹ, ___ dây chống va | [ ] |
| B2-06 | CRANE OP hạ UUV xuống phía xuồng LARS | CRANE OP | HẠ CHẬM, KIỂM SOÁT ỔN ĐỊNH TẢI — ___ m/phút | |
| B2-07 | OP1 + OP2 hướng dẫn UUV vào giá đỡ | OP1, OP2 | Dây dẫn, KHÔNG dùng tay trực tiếp | [ ] |
| B2-08 | UUV đặt vào giá đỡ — OP1 đóng cơ cấu kẹp giữ | OP1 | Tất cả cơ cấu kẹp giữ ĐÃ KHÓA | [ ] |
| B2-09 | OP2 tháo dây treo UUV | OP2 | Cần cẩu cho chùng dây | [ ] |
| B2-10 | CRANE OP kéo dây treo lên | CRANE OP | | [ ] |
| B2-11 | OP1 kiểm tra UUV trên giá đỡ — nằm cân bằng theo trục, cơ cấu kẹp giữ chặt | OP1 | | [ ] |
| B2-12 | **OP2 kết nối cáp điều khiển với UUV (đầu nối C8)** | OP2 | đầu nối khớp, khóa | [ ] |
| B2-13 | **OP2 kết nối cable với bộ điều khiển, thử liên lạc** | OP2 | bộ điều khiển: UUV CONNECTED | [ ] |
| B2-14 | CMDR báo cáo SHIP CO: "UUV ĐÃ NẠP, CABLE KẾT NỐI, SẴN SÀNG" | CMDR | VHF | [ ] |

**Thời gian mục tiêu giai đoạn B:** <= ___ phút

**Khối lượng nâng hạ: UUV = 550 kg << Crane SWL 2,5 t → nằm trong giới hạn an toàn (hệ số dự trữ khoảng 4,5 lần)**

**⚠ AN TOÀN:**
- UUV trị giá >>$100K — HẠ CHẬM, KIỂM SOÁT ỔN ĐỊNH TẢI, không bao giờ để rơi
- KHÔNG dùng tay đỡ UUV khi cần cẩu đang hạ — dùng dây dẫn
- Nếu UUV lắc quá nhiều → NÂNG LÊN, chờ sóng giảm, thử lại
- OP1 và OP2 bắt buộc mặc áo phao

---

## GIAI ĐOẠN C: XUỒNG LARS TÁCH KHỎI TÀU MẸ

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| C-01 | CMDR xin phép SHIP CO: "XIN TÁCH KHỎI" | CMDR | VHF | [ ] |
| C-02 | SHIP CO cho phép: "ĐỒNG Ý TÁCH" | SHIP CO | VHF | [ ] |
| C-03 | OP1 tháo dây chống va | OP1 | | [ ] |
| C-04 | Tháo dây kéo (nếu đang kéo sát mạn) | OP1 | Quick-release | [ ] |
| C-05 | CMDR lái xuồng rời xa tàu mẹ | CMDR | Hướng ___, tốc độ chậm | |
| C-06 | Khi đã cách tàu mẹ >= ___ m: tăng tốc cơ động | CMDR | Tốc độ ___ kn | |
| C-07 | CMDR báo cáo: "ĐÃ TÁCH, ĐANG cơ động" | CMDR | VHF | [ ] |

**Nếu kéo sát mạn (towing mode):**

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| C-T1 | DECK CREW buộc dây kéo từ tàu mẹ sang xuồng LARS | DECK CREW + OP1 | Dây kéo SWL >= ___ kg | [ ] |
| C-T2 | Kết nối bộ dây kéo phân tải trên xuồng LARS | OP1 | ___ điểm buộc | [ ] |
| C-T3 | Quick-release lắp đúng và thử | OP1 | Thử nhả → hoạt động | [ ] |
| C-T4 | CMDR xác nhận: "DÂY KÉO SẴN SÀNG" | CMDR | VHF | [ ] |
| C-T5 | SHIP CO bắt đầu kéo — tăng tốc từ từ | SHIP CO | Tốc độ kéo ___ kn (max 5-8 kn) | |
| C-T6 | CMDR giám sát: dây kéo căng đều, xuồng ổn định | CMDR | Liên tục | |

---

## GIAI ĐOẠN D: HOẠT ĐỘNG UUV

> Xem **SOP_UUV_triển khai_thu hồi_Template_v1.0.md** — quy trình triển khai – thu hồi do ekip xuồng LARS thực hiện.
>
> Trong thời gian này, tàu mẹ có thể:
> - Chờ tại khu vực (nếu kéo)
> - Thực hiện nhiệm vụ khác theo lệnh (nếu xuồng tự cơ động)
> - Giám sát VHF (UUV điều khiển bằng tether từ xuồng LARS, không cần relay)

**Chế độ liên lạc định kỳ:** Mỗi ___ phút, CMDR báo cáo SHIP CO tình hình.

---

## GIAI ĐOẠN E: XUỒNG LARS QUAY VỀ TÀU MẸ

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| E-01 | CMDR báo cáo SHIP CO: "NHIỆM VỤ HOÀN THÀNH, ĐANG QUAY VỀ" | CMDR | VHF, thời gian dự kiến đến ___ phút | [ ] |
| E-02 | SHIP CO chuẩn bị: vị trí nhận xuồng, cần cẩu sẵn sàng | SHIP CO | | [ ] |
| E-03 | Xuồng LARS tiếp cận tàu mẹ | CMDR | Tốc độ chậm, phía ___ (mạn khuất gió) | |
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

## GIAI ĐOẠN F: CHUYỂN UUV TỪ XUỒNG LARS LÊN TÀU MẸ

> **Ngược lại Giai đoạn B** — cùng quy trình, ngược chiều.

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| F-01 | CRANE OP chuẩn bị dây treo UUV | CRANE OP | SWL >= ___ kg | [ ] |
| F-02 | **OP2 ngắt cáp điều khiển khỏi UUV** | OP2 | đầu nối C8 tháo | [ ] |
| F-02a | OP2 tháo dây giềng UUV | OP2 | | [ ] |
| F-03 | OP1 mở cơ cấu kẹp giữ giá đỡ | OP1 | Clamp MỞ KHÓA | [ ] |
| F-04 | CRANE OP hạ dây treo xuống, OP2 gắn vào UUV | OP2 | Tại ___ điểm móc (ICD) | [ ] |
| F-05 | CRANE OP nâng UUV khỏi giá đỡ | CRANE OP | Nâng chậm | [ ] |
| F-06 | CRANE OP quay UUV vào boong tàu mẹ | CRANE OP | Có người hướng dẫn | |
| F-07 | DECK CREW hướng dẫn UUV vào vị trí cất giữ trên tàu mẹ | DECK CREW | Dây dẫn | [ ] |
| F-08 | UUV đặt xuống vị trí — DECK CREW buộc giữ | DECK CREW | | [ ] |
| F-09 | Tháo dây treo UUV | DECK CREW | | [ ] |
| F-10 | Báo cáo SHIP CO: "UUV ĐÃ LÊN TÀU MẸ" | CRANE OP | | [ ] |

**Thời gian mục tiêu giai đoạn F:** <= ___ phút

---

## GIAI ĐOẠN G: THU HỒI XUỒNG LARS LÊN TÀU MẸ (HOẶC KÉO SÁT MẠN)

### Option G1: Kéo Xuồng Lên Tàu Mẹ (Crane/Davit)

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G1-01 | KÍP LARS lên tàu mẹ (qua thang dây) | CMDR, OP1, OP2 | Từng người một | [ ] |
| G1-02 | Tắt động cơ xuồng LARS | CMDR (từ tàu mẹ hoặc OP1 xuống) | | [ ] |
| G1-03 | DECK CREW gắn dây treo vào xuồng LARS | DECK CREW | ___ điểm móc | [ ] |
| G1-04 | CRANE OP nâng xuồng LARS | CRANE OP | Trọng lượng: ___ kg (không tải, không UUV) | |
| G1-05 | CRANE OP đặt xuồng vào vị trí cất giữ trên boong | CRANE OP | | [ ] |
| G1-06 | DECK CREW buộc giữ xuồng LARS | DECK CREW | ___ điểm buộc | [ ] |
| G1-07 | Tháo dây treo | DECK CREW | | [ ] |
| G1-08 | Báo cáo SHIP CO: "XUỒNG LARS ĐÃ THU HỒI" | DECK CREW | | [ ] |

**Khối lượng nâng hạ: Xuồng LARS (không tải, không UUV) = ~2,550 kg > Crane SWL 2,5 t**
**⚠ CẢNH BÁO: Nếu không tải > 2,5 t → KHÔNG THỂ CẨU LÊN. Phải dùng Option G2.**

### Option G2: Kéo Sát Mạn (kéo sát mạn) — PRIMARY cho phương án 3

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G2-01 | KÍP LARS chuyển sang tàu mẹ (qua thang dây) | CMDR, OP1, OP2 | Từng người một, áo phao | [ ] |
| G2-02 | Tắt động cơ xuồng LARS | OP1 (xuống lại xuồng tắt) hoặc remote | | [ ] |
| G2-03 | DECK CREW buộc dây kéo + dây chống va | DECK CREW + OP1 | Dây kéo tại ___ điểm, chống va tại ___ điểm | [ ] |
| G2-04 | Kiểm tra buộc giữ: dây kéo, dây chống va, fender | OP1 | Mắt kinh | [ ] |
| G2-05 | Báo cáo SHIP CO: "XUỒNG LARS ĐÃ BUỘC, SẴN SÀNG KÉO" | OP1 | VHF | [ ] |
| G2-06 | Tàu mẹ bắt đầu hành trình — tăng tốc từ từ | SHIP CO | Tốc độ kéo <= ___ kn | |
| G2-07 | CMDR giám sát xuồng LARS từ tàu mẹ | CMDR | Mỗi ___ phút | |

### Option G3: Xuồng LARS Tự cơ động Về Cảng

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| G3-01 | CMDR + OP1 ở lại xuồng LARS | CMDR, OP1 | OP2 lên tàu mẹ | |
| G3-02 | Tháo dây chống va, tách khỏi tàu mẹ | CMDR | | [ ] |
| G3-03 | cơ động về cảng | CMDR | Tốc độ ___ kn, thời gian dự kiến đến ___ | |
| G3-04 | Báo cáo SHIP CO: "XUỒNG LARS ĐANG cơ động VỀ CẢNG ___" | CMDR | VHF | [ ] |
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
| MS-05 | Crane SWL | ___ t (đã biết: 2,5 t) | |
| MS-06 | Crane tầm với (radius) | ___ m tại SWL ___ t | SWL giảm khi tăng radius |
| MS-07 | Crane vị trí trên tàu | ___ (mạn ___, frame ___) | |
| MS-08 | Crane có thể quay ra ngoài mạn? | Có / Không | |
| MS-09 | Vị trí hạ xuồng LARS (mạn nào?) | Mạn ___ (phải/trái) | mạn khuất gió preferred |
| MS-10 | Vị trí UUV cất giữ trên tàu mẹ | ___ | Gần cần cẩu |
| MS-11 | Thang dây/cầu thang vị trí | ___ | Cho ekip lên/xuống |
| MS-12 | Điểm buộc dây kéo (bitts/cleats) | ___ vị trí, SWL ___ t | |
| MS-13 | Tốc độ kéo an toàn | ___ kn (max) | |
| MS-14 | Kênh VHF quy định | Kênh ___ | |
| MS-15 | Độ cao mạn khô từ mặt nước | ___ m | Ảnh hưởng thao tác cần cẩu |

### Sơ Đồ Boong Tàu Mẹ (Vẽ Vào Đây)

```
Hướng dẫn: Vẽ sơ đồ mặt bằng nhìn từ trên xuống của boong tàu mẹ, đánh dấu:
- Vị trí cần cẩu (★)
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
| Chéo 2 tay trên đầu | KHẨN CẤP / DỪNG QUY TRÌNH | Dừng ngay mọi hoạt động |

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
| 2 | DỪNG cần cẩu (nếu đang hoạt động) | CRANE OP |
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
| 2 | KHÓA cần cẩu brake ngay | CRANE OP |
| 3 | Tất cả RÁN KHỎI khu vực dưới UUV | ALL |
| 4 | Nếu UUV còn treo: giữ nguyên, chờ sửa cần cẩu | — |
| 5 | Nếu UUV rơi: đánh giá hư hại, báo nhà chế tạo/OEM | SHIP CO |
| 6 | KHÔNG cố gắng bắt UUV đang rơi | ALL |

---

## DANH MỤC HOÀN THIỆN SOP

### Critical (PHẢI có trước hoạt động đầu tiên)

- [ ] Thông tin tàu mẹ (MS-01 đến MS-15) đã điền đầy đủ
- [ ] Sơ đồ boong tàu mẹ đã vẽ, đánh dấu vị trí cần cẩu, UUV, xuồng LARS
- [ ] Dây treo xuồng LARS và UUV đã xác định loại + SWL
- [ ] Tín hiệu tay đã thống nhất giữa CMDR và CRANE OP
- [ ] Câu nói VHF đã thống nhất, kênh VHF đã chọn
- [ ] Crane SWL đã kiểm tra tại radius thực tế (không chỉ SWL max)
- [ ] Quy trình xử trí khẩn cấp đã phổ biến cho TẤT CẢ người liên quan
- [ ] SHIP CO đã rà soát và đồng ý SOP này

### Important (SHOULD có trước thử nghiệm trên biển)

- [ ] Thử nghiệm cần cẩu với tải giả (trọng lượng tương đương UUV) trên tàu mẹ
- [ ] Thử buộc dây kéo + cơ cấu nhả nhanh
- [ ] Thử lên/xuống ekip qua thang dây
- [ ] Thử liên lạc VHF tại các khoảng cách ___, ___, ___ m
- [ ] Tập luyện Giai đoạn A (hạ xuồng) + Giai đoạn B (chuyển UUV) tại cảng trước khi ra biển
- [ ] Crane radius chart có sẵn tại vị trí cần cẩu

### Nice to have

- [ ] Video ghi lại lần thao tác đầu tiên (để rà soát + huấn luyện)
- [ ] Bản vẽ 3D minh họa trình tự cần cẩu (để phổ biến cho DECK CREW)
- [ ] Thời gian trung bình từng Giai đoạn (benchmark từ tập luyện)

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-06 | Workshop X | Biểu mẫu ban đầu — giá trị TBD |
| 1.1 | 2026-03-06 | Workshop X | Cập nhật: thêm kết nối cáp điều khiển (B2-12/13), ngắt cable trước chuyển UUV (F-02), bỏ USBL ref |

---

*SOP Phối hợp tàu mẹ v1.0 | VN-XUONG-UUV Giai đoạn 1 | COD: Offload (bản dự thảo AI, lãnh đạo dự án + Chỉ huy tàu mẹ rà soát)*
