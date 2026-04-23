---
project: VN-XUONG-UUV
phase: 1
type: SOP-template
version: 1.6
created: 2026-03-06
status: template
related: 003_Stakeholder_Analysis (S1 — Navy UUV Ops Team)
---

# SOP Template — UUV Launch and Recovery Operations

> **Mục đích:** Quy định trình tự vận hành đầy đủ cho biên chế 3 người trên xuồng LARS, bao gồm triển khai và thu hồi UUV. Tài liệu dùng làm cơ sở xây dựng SOP chính thức sau khi hoàn thành thử nghiệm trên biển.
>
> **Hướng dẫn điền:** Điền vào các ô `___`. Giá trị cụ thể sẽ được cập nhật sau Phase 3 (Embodiment Design) và sea trials. Mục nào chưa biết ghi "TBD — xác định khi ___".
>
> **Quy ước:**
> - **CMDR** = Helmsman / Chỉ huy xuồng (điều khiển từ wheelhouse)
> - **OP1** = LARS Operator (winch điện, cradle, ramp — permanent pendant)
> - **OP2** = UUV Controller Operator (điều khiển UUV qua valy bộ điều khiển)
> - UUV điều khiển bằng dây (tethered) — cuộn cáp nằm bên trong UUV [đã xác nhận]
> - Xuồng không bố trí tang quấn cáp; chỉ có tuyến dẫn cáp từ đuôi xuồng đến bộ điều khiển
> - LARS dẫn động điện: winch 10 kN VFD + linear actuator tilt, powered by genset 5-8 kW
> - Permanent pendant: dây winch gắn cố định vào cradle, không tháo rời

---

## PHASE 0: CHUẨN BỊ TRƯỚC KHI XUẤT PHÁT

### 0A: Kiểm Tra Xuồng LARS (Tại Cảng / Tại Tàu Mẹ)

| # | Hạng mục | Người | Kiểm tra | Đạt | Ghi chú |
|---|----------|-------|---------|-----|---------|
| 0A-01 | Nhiên liệu >= ___ lít (đủ cho ___ giờ hoạt động) | CMDR | Đồng hồ nhiên liệu | [ ] | |
| 0A-02 | Genset LARS (5-8 kW) — khởi động, điện áp đạt 220VAC | OP1 | Đồng hồ genset | [ ] | Nguồn cho winch VFD + linear actuator |
| 0A-03 | Winch điện 10 kN — vận hành thử (không tải) | OP1 | Thử lên/hạ 1 chu kỳ, VFD response | [ ] | Permanent pendant — dây luôn gắn cradle |
| 0A-04 | V-funnel — không móp/hỏng, UHMWPE nguyên vẹn | OP1 | Mắt kính | [ ] | |
| 0A-05 | Cradle — clamp hoạt động, UHMWPE pads nguyên vẹn | OP1 | Thử đóng/mở clamp | [ ] | |
| 0A-06 | Stern ramp — ray sạch, không kẹt | OP1 | Mắt kính + thử trượt cradle | [ ] | |
| 0A-07 | Dây kéo winch — không nứt/mòn, mối nối tốt | OP1 | Mắt kính dọc theo dây | [ ] | |
| 0A-08 | GPS — có tín hiệu | CMDR | Màn hình | [ ] | |
| 0A-09 | VHF radio — thu/phát tốt | CMDR | Thử liên lạc với tàu mẹ | [ ] | |
| 0A-10 | Tuyến dẫn cáp trên boong (stern → clips → bộ điều khiển) — thông, không kẹt | OP1 | Mắt kính dọc ~4-5 m | [ ] | Drum trong UUV, xuồng chỉ có tuyến dẫn cáp |
| 0A-11 | Cáp đoạn trên boong — không nứt/mòn | OP1 | Mắt kính | [ ] | |
| 0A-12 | Đầu nối cáp phía xuồng (H17) — sạch, không hỏng | OP1 | Mắt kính | [ ] | |
| 0A-13 | Ramp tilt actuator — thử co/duỗi | OP1 | Linear actuator response | [ ] | Góc ramp 15° nominal (adj. 12-18°) |
| 0A-15 | UUV bộ điều khiển (valy) — đặt tại vị trí, nguồn | OP2 | Mắt kính | [ ] | |
| 0A-16 | UUV bộ điều khiển — bật, tự kiểm tra OK | OP2 | Màn hình bộ điều khiển | [ ] | |
| 0A-17 | Kết nối bộ điều khiển với cáp điều khiển — test signal | OP2 | Test signal qua cáp | [ ] | |
| 0A-18 | Áo phao x3 — nguyên vẹn | OP2 | Mắt kính | [ ] | |
| 0A-19 | Phao cứu sinh x2 — nguyên vẹn | OP2 | Mắt kính | [ ] | |
| 0A-20 | Đèn chiếu stern deck — hoạt động | OP2 | Bật/tắt | [ ] | |
| 0A-21 | Bơm la canh — tự động + thủ công | OP2 | Thử | [ ] | |
| 0A-22 | Dụng cụ kết nối kéo (bridle, dây kéo, quick-release) | OP1 | Mắt kính | [ ] | Nếu kéo từ tàu mẹ |
| 0A-23 | GPS — có tín hiệu | CMDR | Màn hình | [ ] | |
| 0A-24 | VHF radio — thu/phát tốt | CMDR | Thử liên lạc với tàu mẹ | [ ] | |

**Tiêu chí PASS:** Tất cả 23 mục đạt [ ]. Nếu bất kỳ mục nào FAIL → không xuất phát, sửa trước.

### 0B: Nạp UUV Lên Cradle (Tại Tàu Mẹ, Dùng Crane)

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 0B-01 | Xuồng LARS neo sát mạn tàu mẹ, đây chống va đặt | OP1, OP2 | ___ điểm chống va | [ ] |
| 0B-02 | UUV được treo lên crane tàu mẹ | Crane operator (tàu mẹ) | Dây treo SWL >= ___ kg | [ ] |
| 0B-03 | CMDR ra hiệu cho crane hạ UUV | CMDR | Dùng tín hiệu tay quy ước | [ ] |
| 0B-04 | OP1 + OP2 hướng dẫn UUV vào cradle | OP1, OP2 | Dùng dây dẫn, KHÔNG dùng tay trực tiếp | [ ] |
| 0B-05 | UUV đặt vào cradle, kiểm tra cân giữa | OP1 | Khoảng cách trái/phải = nhau | [ ] |
| 0B-06 | Đóng clamp cradle | OP1 | Tất cả ___ clamp đóng, chỉ thị LOCKED | [ ] |
| 0B-07 | Tháo dây treo crane | OP2 | Crane cho lơi | [ ] |
| 0B-08 | Kiểm tra UUV trên cradle — không xiêu, clamp chặt | OP1 | Mắt kính | [ ] |
| 0B-09 | Kết nối cáp sạc/data UUV (nếu cần) | OP2 | Connector ___ | [ ] |
| 0B-10 | Báo cáo CMDR: "UUV đã nạp, sẵn sàng" | OP1 | Bằng lời | [ ] |

**⚠ AN TOÀN:**
- KHÔNG BAO GIỜ dùng tay đỡ trực tiếp hướng UUV khi crane đang hạ — dùng dây dẫn
- Áo phao BẮT BUỘC cho OP1 + OP2 trên boong
- Nếu sóng > SS ___ → KHÔNG nạp UUV, chờ sóng giảm

---

## PHASE 1: TRANSIT ĐẾN KHU VỰC TRIỂN KHAI

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 1-01 | Tháo dây chống va, rời tàu mẹ | CMDR | Hoặc tháo dây kéo nếu được kéo | [ ] |
| 1-02 | Transit đến khu vực triển khai | CMDR | Tốc độ ___ kts, thời gian dự kiến ___ phút | [ ] |
| 1-03 | Liên lạc với tàu mẹ: "Đang transit, ETA ___ phút" | CMDR | VHF kênh ___ | [ ] |
| 1-04 | OP1 kiểm tra LARS suốt hành trình | OP1 | UUV không xiêu, clamp vẫn LOCKED | [ ] |
| 1-05 | Đến khu vực — đánh giá điều kiện biển | CMDR | Sóng: SS ___, Gió: ___ kts, Dòng chảy: ___ | [ ] |

**GO / NO-GO tại khu vực triển khai:**

| Điều kiện | Giới hạn | Giá trị thực tế | GO? |
|-----------|---------|-----------------|-----|
| Sea State | <= SS ___ (cho triển khai) | ___ | [ ] |
| Gió | <= ___ kts | ___ | [ ] |
| Tầm nhìn | >= ___ m | ___ | [ ] |
| Tether cable sẵn sàng | Đã kiểm tra (0A-10 to 0A-14) | ___ | [ ] |
| UUV bộ điều khiển hoạt động | Tự kiểm tra PASS (0A-16, 0A-17) | ___ | [ ] |
| UUV nguồn pin | >= ___% | ___ | [ ] |

**Tiêu chí GO:** Tất cả điều kiện đạt. Nếu bất kỳ NO-GO → báo cáo tàu mẹ, chờ hoặc hủy.

---

## PHASE 2: TRIỂN KHAI UUV (LAUNCH)

### 2A: Chuẩn Bị Launch

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 2A-01 | CMDR giảm tốc, giữ hướng ___ (xuôi sóng/gió) | CMDR | Tốc độ <= ___ kts | [ ] |
| 2A-02 | "CHUẨN BỊ LAUNCH" — thông báo ekip | CMDR | Bằng lời | [ ] |
| 2A-03 | OP1 + OP2 mặc áo phao, ra stern deck | OP1, OP2 | Kiểm tra áo phao nhau | [ ] |
| 2A-04 | Khởi động genset LARS + winch VFD | OP1 | Genset 220VAC ổn định, VFD ready | [ ] |
| 2A-05 | Tháo dây giằng UUV (tie-downs bổ sung) | OP2 | Tất cả dây giằng tháo | [ ] |
| 2A-06 | Kết nối cáp điều khiển với UUV (nếu chưa nối) | OP2 | Connector C8 khớp, khóa | [ ] |
| 2A-07 | OP2 bật bộ điều khiển, kiểm tra liên lạc với UUV qua tether | OP2 | Màn hình bộ điều khiển: UUV CONNECTED | [ ] |
| 2A-08 | Kết nối UUV — pre-trượt mục tiêu thu hồiion check qua bộ điều khiển | OP2 | Trạng thái UUV: ___ | [ ] |
| 2A-09 | OP1 kiểm tra tuyến dẫn cáp trên boong — thông thoáng | OP1 | Cable routing OK | [ ] | Drum trong UUV, cáp pay-out tự động |
| 2A-10 | Báo cáo CMDR: "LARS sẵn sàng, TMS sẵn sàng, UUV sẵn sàng" | OP1 | Bằng lời | [ ] |

### 2B: Thực Hiện Launch

| # | Bước | Người | Chi tiết | Thời gian |
|---|------|-------|----------|-----------|
| 2B-01 | CMDR ra lệnh: "LAUNCH" | CMDR | | T = 0 |
| 2B-02 | OP1 mở clamp cradle | OP1 | Clamp UNLOCKED, UUV vẫn trên cradle (trọng lực giữ) | T + ___ s |
| 2B-03 | OP1 điều khiển winch — hạ cradle xuống ramp | OP1 | Tốc độ ___ m/phút | T + ___ s |
| 2B-03a | Cáp điều khiển tự nhả từ cuộn cáp trong UUV | — | OP1 giám sát cáp trên boong không bị kẹt | T + ___ s |
| 2B-04 | UUV + cradle trượt xuống ramp (permanent pendant kiểm soát tốc độ) | OP1 | Winch VFD kiểm soát descent speed — KHÔNG để rơi tự do | |
| 2B-05 | UUV vào nước — ___ trước (nose/tail) | — | Cable tiếp tục pay-out | T + ___ s |
| 2B-06 | OP2 kiểm tra liên lạc UUV qua bộ điều khiển | OP2 | Màn hình: UUV CONNECTED, trạng thái bình thường | [ ] |
| 2B-07 | OP2 bắt đầu điều khiển UUV qua bộ điều khiển | OP2 | UUV nhận lệnh, bắt đầu nhiệm vụ | T + ___ s |
| 2B-08 | OP1 kéo cradle lên lại vị trí ban đầu | OP1 | Winch kéo lên, cradle về đầu ramp | |
| 2B-09 | OP1 giám sát cáp tether trên boong — không kẹt, không chùng | OP1 | Cáp pay-out từ UUV, routing trên boong thông | |
| 2B-10 | Báo cáo CMDR: "UUV ĐÃ TRIỂN KHAI, CÁP BÌNH THƯỜNG" | OP1 | Bằng lời | |
| 2B-11 | CMDR báo cáo tàu mẹ: "UUV deployed, time ___" | CMDR | VHF | |

**Thời gian mục tiêu:** Launch (2A-01 đến 2B-10) <= 15 phút (OP-04)

**⚠ ABORT LAUNCH nếu:**
- UUV báo lỗi trước triển khai → đóng lại clamp, check UUV
- Winch mất điện/áp → DỪNG, khóa cradle, báo cáo
- Sóng tăng đột ngột > SS ___ → DỪNG, báo cáo, chờ
- OP bất kỳ cảm thấy không an toàn → BÁO CÁO NGAY, CMDR quyết định

---

## PHASE 3: ĐIỀU KHIỂN UUV QUA TETHER (NHIỆM VỤ)

| # | Bước | Người | Chi tiết | Tần suất |
|---|------|-------|----------|----------|
| 3-01 | **OP2 điều khiển UUV qua bộ điều khiển** | OP2 | Liên tục — đây là nhiệm vụ chính của OP2 | Liên tục |
| 3-02 | OP1 giám sát cáp tether trên boong — routing thông, không kẹt | OP1 | Mắt kính | Liên tục |
| 3-03 | CMDR giám sát vị trí xuồng + hướng cable | CMDR | GPS, mắt kính | Liên tục |
| 3-04 | Giám sát thời tiết + sea state | CMDR | Mắt kính + thiết bị | Mỗi ___ phút |
| 3-05 | Liên lạc với tàu mẹ | CMDR | VHF, báo cáo tình hình | Mỗi ___ phút |
| 3-06 | Giám sát cáp tether — không bị kẹt tại con lăn/dẫn hướng cáp | OP1 | Mắt kính | Liên tục |
| 3-07 | Chuẩn bị LARS cho thu hồi | OP1 | Kiểm tra funnel, winch, cradle | 30 phút trước ETA thu hồi |
| 3-08 | GO/NO-GO cho thu hồi | CMDR | Đánh giá sea state | Khi OP2 kết thúc nhiệm vụ UUV |

**⚠ CẢNH BÁO CÁP:**
- Nếu cáp bị kẹt tại cable guide trên boong → BÁO CMDR, OP2 giảm tốc UUV, OP1 gỡ kẹt
- Nếu OP2 thấy UUV chiều dài cáp còn lại gần hết (qua bộ điều khiển) → BÁO CMDR, bắt đầu thu hồi
- Nếu mất tín hiệu bộ điều khiển → OP2 BÁO NGAY, OP1 kiểm tra cáp trên boong, CMDR quyết định

---

## PHASE 4: THU HỒI UUV (RECOVERY) — THE HARD PROBLEM

### 4A: Chuẩn Bị Recovery

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4A-01 | OP2 ra lệnh UUV quay về qua bộ điều khiển | OP2 | UUV bắt đầu quay về hướng xuồng | [ ] |
| 4A-01a | Cáp tether reel-in tự động trong UUV khi UUV quay về | — | OP1 giám sát cáp trên boong thu gọn dần | [ ] |
| 4A-02 | CMDR đánh giá điều kiện biển hiện tại | CMDR | Sóng, gió, dòng chảy, tầm nhìn | [ ] |

**GO / NO-GO cho Recovery:**

| Điều kiện | Giới hạn | Giá trị thực tế | GO? |
|-----------|---------|-----------------|-----|
| Sea State | <= SS 3 (Hs <= 1.25m) | ___ | [ ] |
| Gió | <= ___ kts | ___ | [ ] |
| Tầm nhìn | >= ___ m | ___ | [ ] |
| Cáp tether routing trên boong OK | Đã kiểm tra | ___ | [ ] |
| Controller liên lạc UUV | Connected | ___ | [ ] |
| LARS sẵn sàng | Đã kiểm tra | ___ | [ ] |
| Ekip sẵn sàng | 3/3 | ___ | [ ] |

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4A-03 | "CHUẨN BỊ RECOVERY" — thông báo ekip | CMDR | Bằng lời | [ ] |
| 4A-04 | OP1 + OP2 ra stern deck, áo phao | OP1, OP2 | | [ ] |
| 4A-05 | Hạ cradle xuống cuối ramp (vị trí thu hồi) | OP1 | Winch, cradle nằm ngập nước một phần | [ ] |
| 4A-06 | Kiểm tra V-funnel mở rộng, không kẹt | OP1 | Mắt kính | [ ] |
| 4A-07 | Bật đèn chiếu stern (nếu cần) | OP2 | | [ ] |
| 4A-08 | Báo cáo CMDR: "LARS SẴN SÀNG RECOVERY" | OP1 | Bằng lời | [ ] |

### 4B: Tiếp Cận Và Bắt UUV

| # | Bước | Người | Chi tiết | Ghi chú |
|---|------|-------|----------|---------|
| 4B-01 | OP2 ra lệnh UUV nổi mặt nước qua bộ điều khiển | OP2 | UUV nổi, bộ điều khiển xác nhận | |
| 4B-01a | Cáp tether reel-in tự động trong UUV — UUV dần về gần xuồng | — | OP1 giám sát cáp trên boong | |
| 4B-02 | CMDR điều khiển xuồng, giữ stern hướng về UUV (theo hướng cable) | CMDR | Tốc độ <= ___ kts | Tether chỉ hướng UUV |
| 4B-03 | Khi chiều dài cáp còn lại còn ___ m — OP2 ra lệnh UUV giảm tốc | OP2 | Controller: UUV giảm tốc | |
| 4B-04 | Khi UUV trong tầm bắt của funnel — "BẮT ĐẦU RECOVERY" | CMDR | Bằng lời | |
| 4B-05 | OP2 điều khiển UUV hướng vào funnel qua bộ điều khiển | OP2 | UUV đi thẳng vào funnel | Ưu điểm tethered: OP2 chủ động lái UUV |
| 4B-06 | UUV tiếp xúc funnel — funnel dẫn UUV vào cradle | — | Passive funnel + OP2 điều khiển UUV | |
| 4B-07 | OP2 quan sát: "UUV VÀO CRADLE" hoặc "TRƯỢT RA" | OP2 | Bằng lời, KHÔNG dùng tay | |

**Nếu UUV trượt ra khỏi phễu dẫn hướng:**

| # | Bước | Người | Chi tiết |
|---|------|-------|----------|
| MISS-01 | OP2 báo: "MISS — UUV TRƯỢT RA" | OP2 | Bằng lời |
| MISS-02 | OP2 giữ UUV qua bộ điều khiển — UUV không mất (vẫn có tether) | OP2 | UUV vẫn connected |
| MISS-03 | CMDR tăng tốc nhẹ, tạo khoảng cách an toàn | CMDR | >= ___ m |
| MISS-04 | Đánh giá: UUV + cable có hư hại không? | OP2 + OP1 | Mắt kính + bộ điều khiển status |
| MISS-05 | OP2 điều khiển UUV quay lại vị trí, thử lần 2 | OP2 | Controller | Lặp lại từ 4B-02 |
| MISS-06 | Sau ___ lần trượt mục tiêu thu hồi liên tiếp → ABORT, thu cáp, kéo UUV sát mạn | CMDR | Báo cáo tàu mẹ |

### 4C: Kéo UUV Lên Boong

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4C-01 | UUV trong cradle — OP1 đóng clamp | OP1 | Từ stern station hoặc wheelhouse | [ ] |
| 4C-02 | Xác nhận clamp LOCKED | OP1 | Chỉ thị locked, kiểm tra mắt | [ ] |
| 4C-03 | OP1 điều khiển winch kéo cradle + UUV lên ramp | OP1 | Tốc độ ___ m/phút | |
| 4C-03a | OP1 giám sát cáp tether không bị kẹt khi kéo UUV lên ramp | OP1 | Cáp routing thông, không chùng | |
| 4C-04 | Giám sát: UUV không bị xiêu, cable không bị kẹt | OP2 + OP1 | Mắt kính, báo cáo liên tục | |
| 4C-05 | Cradle + UUV lên đến vị trí stow trên boong | OP1 | Winch dừng, khóa | [ ] |
| 4C-06 | OP2 tắt UUV qua bộ điều khiển | OP2 | Controller: UUV SHUTDOWN | [ ] |
| 4C-07 | OP2 ngắt cáp điều khiển khỏi UUV (connector C8) | OP2 | Connector tháo sạch | [ ] |
| 4C-08 | Bắt dây giằng bổ sung (tie-downs) | OP2 | ___ điểm buộc | [ ] |
| 4C-08 | Báo cáo CMDR: "UUV ĐÃ THU HỒI, AN TOÀN" | OP1 | Bằng lời | |
| 4C-09 | CMDR báo cáo tàu mẹ: "UUV recovered, time ___" | CMDR | VHF | |
| 4C-10 | OP1 + OP2 rời stern deck | OP1, OP2 | | [ ] |

**Thời gian mục tiêu:** Recovery (4A-01 đến 4C-10) <= 30 phút (OP-03)

**⚠ ABORT RECOVERY nếu:**
- Sóng tăng > SS ___ → ABORT, báo cáo tàu mẹ
- UUV bị hư hại khi vào funnel → ABORT, đánh giá
- Winch mất lực → DỪNG, khóa cradle, báo cáo
- Bất kỳ người nào trên stern deck cảnh báo nguy hiểm → ABORT NGAY
- Trời tối + không có đèn/IR → ABORT (trừ khi có IR camera)

---

## PHASE 5: SAU THU HỒI

### 5A: Kiểm Tra UUV Sau Thu Hồi

| # | Hạng mục | Người | Kiểm tra | Đạt | Ghi chú |
|---|----------|-------|---------|-----|---------|
| 5A-01 | Vỏ UUV — trầy xước, móp, nứt | OP2 | Mắt kính, toàn bộ thân | [ ] | Chụp ảnh mọi hư hại |
| 5A-02 | Antenna/mast — nguyên vẹn | OP2 | Mắt kính | [ ] | |
| 5A-03 | Vây/phụ kiện — không gãy/cong | OP2 | Mắt kính | [ ] | |
| 5A-04 | Connector — không hư hại | OP2 | Mắt kính | [ ] | |
| 5A-05 | UUV status light — bình thường | OP2 | Mắt kính | [ ] | |
| 5A-06 | Kết nối data download (nếu cần) | OP2 | Connector ___ | [ ] | |
| 5A-07 | Ghi nhận tình trạng UUV vào nhật ký khai thác | OP2 | Phiếu ghi | [ ] | |

**Nếu UUV bị hư hại:** Chụp ảnh → ghi chi tiết → báo cáo CMDR → CMDR báo cáo tàu mẹ và nhà chế tạo

### 5B: Thu Dọn LARS

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 5B-01 | Tắt genset LARS + winch VFD | OP1 | | [ ] |
| 5B-02 | Kéo ramp lên vị trí cất giữ (nếu có) | OP1 | | [ ] |
| 5B-03 | Kiểm tra winch dây — cuộn gọn | OP1 | | [ ] |
| 5B-03a | Kiểm tra cáp tether trên boong — gọn gàng, không xoắn | OP1 | | [ ] |
| 5B-03b | Tắt bộ điều khiển, cất giữ valy | OP2 | | [ ] |
| 5B-04 | V-funnel — kiểm tra hư hại | OP1 | | [ ] |
| 5B-05 | Rửa nước ngọt stern deck + LARS (nếu có nước ngọt) | OP1, OP2 | | [ ] |

### 5C: Quay Về

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 5C-01 | Transit về tàu mẹ (hoặc cảng) | CMDR | Tốc độ ___ kts | |
| 5C-02 | Báo cáo tàu mẹ: "Đang quay về, ETA ___" | CMDR | VHF | [ ] |
| 5C-03 | Cập mạn tàu mẹ / cảng | CMDR, OP1, OP2 | | [ ] |
| 5C-04 | Cẩu UUV lên tàu mẹ (nếu cần) | Crane operator | Ngược lại quy trình 0B | [ ] |
| 5C-05 | Rửa nước ngọt toàn bộ xuồng + LARS | OP1, OP2 | BẮT BUỘC | [ ] |

---

## PHASE 6: DEBRIEF & LOG

| # | Hạng mục | Người | Chi tiết |
|---|----------|-------|----------|
| 6-01 | Ghi nhận vào Operations Log | CMDR | |

### Operations Log Entry

| Field | Value |
|-------|-------|
| Ngày | ___ |
| Nhiệm vụ | ___ |
| Ekip | CMDR: ___ / OP1: ___ / OP2: ___ |
| Thời gian xuất phát | ___ |
| Thời gian đến khu vực | ___ |
| Sea State (triển khai) | SS ___ |
| Thời gian triển khai | ___ (từ 2B-01 đến 2B-10: ___ phút) |
| Số lần thu hồi (attempts) | ___ |
| Sea State (thu hồi) | SS ___ |
| Thời gian thu hồi | ___ (từ 4A-01 đến 4C-10: ___ phút) |
| Thời gian về | ___ |
| Tổng thời gian hoạt động | ___ giờ ___ phút |
| UUV tình trạng sau thu hồi | Bình thường / Hư hại (ghi chi tiết) |
| LARS tình trạng | Bình thường / Cần sửa (ghi chi tiết) |
| Sự cố / Ghi chú | ___ |
| Người ghi | ___ |

---

## EMERGENCY PROCEDURES

### EP-01: Mất Điện Genset / Winch Khi Đang Hạ/Kéo UUV

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "MẤT ĐIỆN GENSET" | OP1 |
| 2 | KHÓA NGAY winch brake (cơ khí) | OP1 |
| 3 | Tắt máy chính nếu cần | CMDR |
| 4 | Đánh giá tình hình | CMDR |
| 5 | Nếu UUV đang trên ramp: giữ nguyên, không làm gì | ALL |
| 6 | Nếu UUV nửa trên nửa dưới nước: khóa clamp, chờ sửa | OP1 |
| 7 | Báo cáo tàu mẹ | CMDR |
| 8 | Sửa chữa hoặc kéo về (không có UUV trên ramp) | — |

### EP-02: UUV Rời Khỏi Cradle Trên Ramp

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "UUV RỜI CRADLE" | OP2 |
| 2 | DỪNG WINCH NGAY | OP1 |
| 3 | KHÔNG cố gắng bắt UUV bằng tay | ALL |
| 4 | Nếu UUV trượt xuống nước: để nó trượt, đánh giá sau | — |
| 5 | Nếu UUV kẹt trên ramp: khóa winch, đánh giá | — |
| 6 | Báo cáo tàu mẹ và nhà chế tạo | CMDR |

### EP-03: Người Rơi Xuống Nước (Man Overboard)

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "NGƯỜI RƠI XUỐNG NƯỚC — MAN ___ (tên)" | Bất kỳ |
| 2 | Ném phao cứu sinh về phía người rơi | Người gần nhất |
| 3 | CMDR giữ xuồng cạnh người, KHÔNG để chân vịt gần người | CMDR |
| 4 | DỪNG mọi hoạt động LARS | ALL |
| 5 | Kéo người lên xuồng | OP còn lại |
| 6 | Sơ cứu nếu cần | — |
| 7 | Báo cáo tàu mẹ NGAY | CMDR |
| 8 | HỦY nhiệm vụ, quay về | CMDR |

### EP-04: Thời Tiết Xấu Đột Ngột (Sóng Tăng)

| # | Bước | Người |
|---|------|-------|
| 1 | CMDR đánh giá: sóng có vượt SS ___ không? | CMDR |
| 2 | Nếu đang triển khai: HOÃN, giữ UUV trên boong | CMDR |
| 3 | Nếu UUV đã triển khai: quyết định thu hồi ngay hoặc chờ | CMDR |
| 4 | Nếu đang thu hồi: hoàn thành nếu gần xong, ABORT nếu mới bắt đầu | CMDR |
| 5 | Báo cáo tàu mẹ | CMDR |
| 6 | Xem xét quay về hoặc tìm vùng khuất gió | CMDR |

---

## SOP COMPLETION CHECKLIST

> Đánh dấu [x] khi đã điền đầy đủ. Tất cả mục CRITICAL phải có trước sea trials.

### Critical (MUST có trước sea trials)

- [ ] Tất cả giá trị `___` trong Phase 2 (Launch) đã điền — tốc độ winch, tốc độ tiếp cận
- [ ] Tất cả giá trị `___` trong Phase 4 (Recovery) đã điền
- [ ] GO/NO-GO criteria đã có giá trị cụ thể (SS, gió, tầm nhìn)
- [ ] Emergency Procedures đã được ekip đọc và hiểu
- [ ] Số lần trượt mục tiêu thu hồi tối đa trước ABORT đã xác định
- [ ] Tín hiệu tay giữa CMDR và OP đã thống nhất
- [ ] Thời gian mục tiêu đã xác định (triển khai <= 15 phút, thu hồi <= 30 phút)

### Important (SHOULD có trước sea trials)

- [ ] Operations Log template in sẵn, có sẵn trên xuồng
- [ ] Checklist Phase 0A in sẵn, có sẵn trên xuồng
- [ ] UUV post-thu hồi inspection form (5A) in sẵn
- [ ] Emergency Procedures in kết nối, dán ở wheelhouse
- [ ] Ekip đã tập luyện trên bờ (dry run) ít nhất ___ lần
- [ ] Ekip đã tập luyện trên nước (calm water) ít nhất ___ lần

### Nice to have (trước operational deployment)

- [ ] Night thu hồi procedure (với IR camera nếu có)
- [ ] Multi-attempt thu hồi statistics từ sea trials
- [ ] Thời gian trung bình cho mỗi Phase (benchmark)
- [ ] Lessons learned từ sea trials đã ghi vào SOP

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-06 | Đơn vị chế tạo | Template ban đầu — giá trị TBD |
| 1.1 | 2026-03-06 | Đơn vị chế tạo | Cập nhật cho UUV tethered: crew roles, TMS checks, cable pay-out/reel-in, OP2 = UUV bộ điều khiển operator, bỏ USBL |
| 1.2 | 2026-03-07 | Đơn vị chế tạo | Cập nhật giai đoạn 2: LARS dẫn động điện (VFD + máy phát, không dùng thủy lực), cuộn cáp nằm trong UUV, dây tời gắn cố định với cradle, góc ramp 15°, tời 10 kN, biên chế 3 người đã được xác nhận. |

---

*SOP triển khai–thu hồi UUV v1.6 | VN-XUONG-UUV Giai đoạn 1 | Bản dự thảo phục vụ rà soát nội bộ*
