---
project: VN-XUONG-UUV
phase: 1
type: SOP-template
version: 1.0
created: 2026-03-06
status: template
related: 003_Stakeholder_Analysis (S1 — Navy UUV Ops Team)
---

# SOP Mẫu — Quy trình triển khai và thu hồi UUV

> **Mục đích:** Quy trình vận hành đầy đủ cho kíp 03 người trên xuồng LARS, bao gồm triển khai và thu hồi UUV. Dùng làm cơ sở xây dựng SOP chính thức sau giai đoạn thử nghiệm trên biển.
>
> **Hướng dẫn điền:** Điền vào các ô `___`. Giá trị cụ thể sẽ được cập nhật sau Giai đoạn 3 (thiết kế hiện thân) và thử nghiệm trên biển. Mục nào chưa xác định thì ghi "TBD — xác định khi ___".
>
> **Quy ước:**
> - **CMDR** = Chỉ huy xuồng (người chỉ huy, điều khiển từ buồng lái)
> - **OP1** = Operator 1 (khai thác LARS — tời, giá đỡ, tang quấn cáp TMS)
> - **OP2** = Operator 2 (khai thác bộ điều khiển UUV — điều khiển UUV qua vali điều khiển)
> - UUV điều khiển bằng cáp — OP2 điều khiển liên tục qua bộ điều khiển bố trí trên xuồng
> - Mỗi bước gồm: **HÀNH ĐỘNG** + **KIỂM TRA/XÁC NHẬN** + **ĐIỀU KIỆN CHUYỂN BƯỚC**

---

## GIAI ĐOẠN 0: CHUẨN BỊ TRƯỚC KHI XUẤT PHÁT

### 0A: Kiểm tra xuồng LARS (tại cảng / trên tàu mẹ)

| # | Hạng mục | Người | Kiểm tra | Đạt | Ghi chú |
|---|----------|-------|---------|-----|---------|
| 0A-01 | Nhiên liệu >= ___ lít (đủ cho ___ giờ hoạt động) | CMDR | Đồng hồ nhiên liệu | [ ] | |
| 0A-02 | Dầu thủy lực — mức + không rò rỉ | OP1 | quan sát trực quan + que đo | [ ] | Hoặc kiểm tra hệ thống điện nếu LARS điện |
| 0A-03 | Tời — vận hành thử (không tải) | OP1 | Thử lên/hạ 1 chu kỳ | [ ] | |
| 0A-04 | V-phễu dẫn hướng — không móp/hỏng, UHMWPE nguyên vẹn | OP1 | quan sát trực quan | [ ] | |
| 0A-05 | Giá đỡ — cơ cấu kẹp giữ hoạt động, UHMWPE pads nguyên vẹn | OP1 | Thử đóng/mở cơ cấu kẹp giữ | [ ] | |
| 0A-06 | Ray dốc đuôi — ray sạch, không kẹt | OP1 | quan sát trực quan + thử trượt giá đỡ | [ ] | |
| 0A-07 | Dây kéo tời — không nứt/mòn, mối nối tốt | OP1 | quan sát trực quan dọc theo dây | [ ] | |
| 0A-08 | GPS — có tín hiệu | CMDR | Màn hình | [ ] | |
| 0A-09 | VHF radio — thu/phát tốt | CMDR | Thử liên lạc với tàu mẹ | [ ] | |
| 0A-10 | Tang quấn cáp (TMS) — quay thử, phanh hoạt động | OP1 | Thử nhả/thu cáp ở chế độ không tải | [ ] | |
| 0A-11 | Cáp — kiểm tra bề mặt ngoài, không nứt, mòn | OP1 | quan sát trực quan dọc theo 10m đầu | [ ] | |
| 0A-12 | Con lăn dẫn hướng cáp — sạch, không kẹt | OP1 | quan sát trực quan | [ ] | |
| 0A-13 | Cable chiều dài cáp counter — reset, hoạt động | OP1 | Màn hình | [ ] | |
| 0A-14 | Cable lực căng cáp display — hoạt động | OP1 | Màn hình | [ ] | |
| 0A-15 | Vali bộ điều khiển UUV — đặt đúng vị trí, bảo đảm nguồn cấp | OP2 | quan sát trực quan | [ ] | |
| 0A-16 | Bộ điều khiển UUV — bật nguồn, tự kiểm tra đạt | OP2 | Màn hình bộ điều khiển | [ ] | |
| 0A-17 | Kết nối bộ điều khiển với cáp điều khiển — tín hiệu kiểm tra | OP2 | Tín hiệu kiểm tra truyền qua cáp đạt | [ ] | |
| 0A-18 | Áo phao x3 — nguyên vẹn | OP2 | quan sát trực quan | [ ] | |
| 0A-19 | Phao cứu sinh x2 — nguyên vẹn | OP2 | quan sát trực quan | [ ] | |
| 0A-20 | Đèn chiếu boong lái — hoạt động | OP2 | Bật/tắt | [ ] | |
| 0A-21 | Bơm la canh — tự động + thủ công | OP2 | Thử | [ ] | |
| 0A-22 | Dụng cụ kết nối kéo (bộ dây kéo phân tải, dây kéo, cơ cấu nhả nhanh) | OP1 | quan sát trực quan | [ ] | Nếu kéo từ tàu mẹ |
| 0A-23 | GPS — có tín hiệu | CMDR | Màn hình | [ ] | |
| 0A-24 | VHF radio — thu/phát tốt | CMDR | Thử liên lạc với tàu mẹ | [ ] | |

**Tiêu chí ĐẠT:** Tất cả 24 mục đạt [ ]. Nếu bất kỳ mục nào KHÔNG ĐẠT → không xuất phát, sửa trước.

### 0B: Đưa UUV lên giá đỡ (trên tàu mẹ, sử dụng cần cẩu)

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 0B-01 | Xuồng LARS neo sát mạn tàu mẹ, dây chống va đặt | OP1, OP2 | ___ điểm chống va | [ ] |
| 0B-02 | UUV được treo lên cần cẩu tàu mẹ | Người điều khiển cần cẩu (tàu mẹ) | Dây treo SWL >= ___ kg | [ ] |
| 0B-03 | CMDR ra hiệu cho cần cẩu hạ UUV | CMDR | Dùng tín hiệu tay quy ước | [ ] |
| 0B-04 | OP1 + OP2 hướng dẫn UUV vào giá đỡ | OP1, OP2 | Dùng dây dẫn, KHÔNG dùng tay trực tiếp | [ ] |
| 0B-05 | UUV đặt vào giá đỡ, kiểm tra nằm cân bằng theo trục | OP1 | Khoảng cách trái/phải = nhau | [ ] |
| 0B-06 | Đóng cơ cấu kẹp giữ giá đỡ | OP1 | Tất cả ___ cơ cấu kẹp giữ đóng, chỉ thị ĐÃ KHÓA | [ ] |
| 0B-07 | Tháo dây treo cần cẩu | OP2 | Cần cẩu cho chùng dây | [ ] |
| 0B-08 | Kiểm tra UUV trên giá đỡ — không xiêu, cơ cấu kẹp giữ chặt | OP1 | quan sát trực quan | [ ] |
| 0B-09 | Kết nối cáp sạc/data UUV (nếu cần) | OP2 | đầu nối ___ | [ ] |
| 0B-10 | Báo cáo CMDR: "UUV đã nạp, sẵn sàng" | OP1 | xác nhận bằng lời | [ ] |

**⚠ AN TOÀN:**
- KHÔNG BAO GIỜ dùng tay đỡ trực tiếp hướng UUV khi cần cẩu đang hạ — dùng dây dẫn
- Áo phao BẮT BUỘC cho OP1 + OP2 trên boong
- Nếu sóng > SS ___ → KHÔNG nạp UUV, chờ sóng giảm

---

## GIAI ĐOẠN 1: cơ động ĐẾN KHU VỰC TRIỂN KHAI

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 1-01 | Tháo dây chống va, rời tàu mẹ | CMDR | Hoặc tháo dây kéo nếu được kéo | [ ] |
| 1-02 | cơ động đến khu vực triển khai | CMDR | Tốc độ ___ kn, thời gian dự kiến ___ phút | [ ] |
| 1-03 | Liên lạc với tàu mẹ: "Đang cơ động, thời gian dự kiến đến ___ phút" | CMDR | VHF kênh ___ | [ ] |
| 1-04 | OP1 kiểm tra LARS suốt hành trình | OP1 | UUV không xiêu, cơ cấu kẹp giữ vẫn ĐÃ KHÓA | [ ] |
| 1-05 | Đến khu vực — đánh giá điều kiện biển | CMDR | Sóng: SS ___, Gió: ___ kn, Dòng chảy: ___ | [ ] |

**GO / NO-GO tại khu vực triển khai:**

| Điều kiện | Giới hạn | Giá trị thực tế | GO? |
|-----------|---------|-----------------|-----|
| Sea State | <= SS ___ (cho triển khai) | ___ | [ ] |
| Gió | <= ___ kn | ___ | [ ] |
| Tầm nhìn | >= ___ m | ___ | [ ] |
| Tether cable sẵn sàng | Đã kiểm tra (0A-10 to 0A-14) | ___ | [ ] |
| UUV bộ điều khiển hoạt động | Self-test ĐẠT (0A-16, 0A-17) | ___ | [ ] |
| UUV battery | >= ___% | ___ | [ ] |

**Tiêu chí GO:** Tất cả điều kiện đạt. Nếu bất kỳ NO-GO → báo cáo tàu mẹ, chờ hoặc hủy.

---

## GIAI ĐOẠN 2: TRIỂN KHAI UUV (triển khai)

### 2A: Chuẩn Bị triển khai

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 2A-01 | CMDR giảm tốc, giữ hướng ___ (xuôi sóng/gió) | CMDR | Tốc độ <= ___ kn | [ ] |
| 2A-02 | "CHUẨN BỊ triển khai" — thông báo ekip | CMDR | xác nhận bằng lời | [ ] |
| 2A-03 | OP1 + OP2 mặc áo phao, ra stern boong | OP1, OP2 | Kiểm tra áo phao nhau | [ ] |
| 2A-04 | Khởi động hệ thống thủy lực/điện LARS | OP1 | Áp suất/dòng điện đạt ___ | [ ] |
| 2A-05 | Tháo dây giằng UUV (dây chằng buộc bổ sung bổ sung) | OP2 | Tất cả dây giằng tháo | [ ] |
| 2A-06 | Kết nối cáp điều khiển với UUV (nếu chưa nối) | OP2 | đầu nối C8 khớp, khóa | [ ] |
| 2A-07 | OP2 bật bộ điều khiển, kiểm tra liên lạc với UUV qua tether | OP2 | Màn hình bộ điều khiển: UUV CONNECTED | [ ] |
| 2A-08 | Kết nối UUV — pre-mission kiểm tra qua bộ điều khiển | OP2 | Status UUV: ___ | [ ] |
| 2A-09 | OP1 chuẩn bị tang quấn cáp — brake MỞ, sẵn sàng nhả cáp | OP1 | Drum sẵn sàng | [ ] |
| 2A-10 | Báo cáo CMDR: "LARS sẵn sàng, TMS sẵn sàng, UUV sẵn sàng" | OP1 | xác nhận bằng lời | [ ] |

### 2B: Thực Hiện triển khai

| # | Bước | Người | Chi tiết | Thời gian |
|---|------|-------|----------|-----------|
| 2B-01 | CMDR ra lệnh: "triển khai" | CMDR | | T = 0 |
| 2B-02 | OP1 mở cơ cấu kẹp giữ giá đỡ | OP1 | Clamp MỞ KHÓA, UUV vẫn trên giá đỡ (trọng lực giữ) | T + ___ s |
| 2B-03 | OP1 điều khiển tời — hạ giá đỡ xuống ray dốc đuôi | OP1 | Tốc độ ___ m/phút | T + ___ s |
| 2B-03a | **OP1 bắt đầu nhả cáp cable (TMS) — ĐỒNG BỘ với tời** | OP1 | Cable drum nhả cáp cùng tốc độ với giá đỡ hạ | T + ___ s |
| 2B-04 | UUV + giá đỡ trượt xuống ray dốc đuôi, cable nhả cáp liên tục | OP1 | Giám sát: cable không bị căng/chùng — KHÔNG để rơi tự do | |
| 2B-05 | UUV vào nước — ___ trước (nose/tail) | — | Cable tiếp tục nhả cáp | T + ___ s |
| 2B-06 | OP2 kiểm tra liên lạc UUV qua bộ điều khiển | OP2 | Màn hình: UUV CONNECTED, trạng thái bình thường | [ ] |
| 2B-07 | OP2 bắt đầu điều khiển UUV qua bộ điều khiển | OP2 | UUV nhận lệnh, bắt đầu nhiệm vụ | T + ___ s |
| 2B-08 | OP1 kéo giá đỡ lên lại vị trí ban đầu | OP1 | Tời kéo lên, giá đỡ về đầu ray dốc đuôi | |
| 2B-09 | OP1 giám sát tang quấn cáp — nhả cáp ổn định, lực căng cáp bình thường | OP1 | Màn hình: chiều dài cáp ___ m, lực căng cáp ___ kN | |
| 2B-10 | Báo cáo CMDR: "UUV ĐÃ TRIỂN KHAI, CABLE BÌNH THƯỜNG" | OP1 | xác nhận bằng lời | |
| 2B-11 | CMDR báo cáo tàu mẹ: "UUV deployed, time ___" | CMDR | VHF | |

**Thời gian mục tiêu:** triển khai (2A-01 đến 2B-10) <= 15 phút (OP-04)

**⚠ DỪNG QUY TRÌNH triển khai nếu:**
- UUV báo lỗi trước triển khai → đóng lại cơ cấu kẹp giữ, kiểm tra UUV
- Tời mất điện/áp → DỪNG, khóa giá đỡ, báo cáo
- Sóng tăng đột ngột > SS ___ → DỪNG, báo cáo, chờ
- OP bất kỳ cảm thấy không an toàn → BÁO CÁO NGAY, CMDR quyết định

---

## GIAI ĐOẠN 3: ĐIỀU KHIỂN UUV QUA TETHER (NHIỆM VỤ)

| # | Bước | Người | Chi tiết | Tần suất |
|---|------|-------|----------|----------|
| 3-01 | **OP2 điều khiển UUV qua bộ điều khiển** | OP2 | Liên tục — đây là nhiệm vụ chính của OP2 | Liên tục |
| 3-02 | OP1 giám sát tang quấn cáp — lực căng cáp + chiều dài cáp | OP1 | Màn hình TMS | Liên tục |
| 3-03 | CMDR giám sát vị trí xuồng + hướng cable | CMDR | GPS, quan sát trực quan | Liên tục |
| 3-04 | Giám sát thời tiết + sea state | CMDR | quan sát trực quan + thiết bị | Mỗi ___ phút |
| 3-05 | Liên lạc với tàu mẹ | CMDR | VHF, báo cáo tình hình | Mỗi ___ phút |
| 3-06 | Kiểm tra cable lực căng cáp không vượt tải làm việc cho phép | OP1 | Alarm nếu >= 80% WLL | Liên tục |
| 3-07 | Chuẩn bị LARS cho thu hồi | OP1 | Kiểm tra phễu dẫn hướng, tời, giá đỡ | 30 phút trước thời gian dự kiến đến thu hồi |
| 3-08 | CHO PHÉP / KHÔNG CHO PHÉP cho thu hồi | CMDR | Đánh giá sea state | Khi OP2 kết thúc nhiệm vụ UUV |

**⚠ CẢNH BÁO CABLE:**
- Nếu lực căng cáp vượt ___ kN (80% WLL) → BÁO CMDR, giảm tốc UUV, điều chỉnh hướng xuồng
- Nếu cable counter chỉ > ___ m (90% total) → BÁO CMDR, bắt đầu thu hồi
- Nếu mất tín hiệu bộ điều khiển → OP2 BÁO NGAY, OP1 kiểm tra cable, CMDR quyết định

---

## GIAI ĐOẠN 4: THU HỒI UUV (thu hồi) — THE HARD PROBLEM

### 4A: Chuẩn Bị thu hồi

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4A-01 | OP2 ra lệnh UUV quay về qua bộ điều khiển | OP2 | UUV bắt đầu quay về hướng xuồng | [ ] |
| 4A-01a | OP1 bắt đầu thu cáp cable (TMS) — ĐỒNG BỘ với UUV quay về | OP1 | Cable drum thu cáp, giám sát lực căng cáp | [ ] |
| 4A-02 | CMDR đánh giá điều kiện biển hiện tại | CMDR | Sóng, gió, dòng chảy, tầm nhìn | [ ] |

**GO / NO-GO cho thu hồi:**

| Điều kiện | Giới hạn | Giá trị thực tế | GO? |
|-----------|---------|-----------------|-----|
| Sea State | <= cấp sóng biển SS 3 (Hs <= 1.25m) | ___ | [ ] |
| Gió | <= ___ kn | ___ | [ ] |
| Tầm nhìn | >= ___ m | ___ | [ ] |
| Cable thu cáp hoạt động | Đã kiểm tra | ___ | [ ] |
| bộ điều khiển liên lạc UUV | ĐÃ KẾT NỐI | ___ | [ ] |
| LARS sẵn sàng | Đã kiểm tra | ___ | [ ] |
| Kíp sẵn sàng | 3/3 | ___ | [ ] |

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4A-03 | "CHUẨN BỊ thu hồi" — thông báo ekip | CMDR | xác nhận bằng lời | [ ] |
| 4A-04 | OP1 + OP2 ra stern boong, áo phao | OP1, OP2 | | [ ] |
| 4A-05 | Hạ giá đỡ xuống cuối ray dốc đuôi (vị trí thu hồi) | OP1 | Tời, giá đỡ nằm ngập nước một phần | [ ] |
| 4A-06 | Kiểm tra V-phễu dẫn hướng mở rộng, không kẹt | OP1 | quan sát trực quan | [ ] |
| 4A-07 | Bật đèn chiếu stern (nếu cần) | OP2 | | [ ] |
| 4A-08 | Báo cáo CMDR: "LARS SẴN SÀNG thu hồi" | OP1 | xác nhận bằng lời | [ ] |

### 4B: Tiếp cận và bắt giữ UUV

| # | Bước | Người | Chi tiết | Ghi chú |
|---|------|-------|----------|---------|
| 4B-01 | OP2 ra lệnh UUV nổi mặt nước qua bộ điều khiển | OP2 | UUV nổi, bộ điều khiển xác nhận | |
| 4B-01a | OP1 tiếp tục thu cáp cable — UUV dần về gần xuồng | OP1 | Cable chiều dài cáp giảm dần, lực căng cáp ổn định | |
| 4B-02 | CMDR điều khiển xuồng, giữ stern hướng về UUV (theo hướng cable) | CMDR | Tốc độ <= ___ kn | Tether chỉ hướng UUV |
| 4B-03 | Khi cable chiều dài cáp còn ___ m — OP2 ra lệnh UUV giảm tốc | OP2 | bộ điều khiển: UUV slow | |
| 4B-04 | Khi UUV trong tầm bắt của phễu dẫn hướng — "BẮT ĐẦU thu hồi" | CMDR | xác nhận bằng lời | |
| 4B-05 | OP2 điều khiển UUV hướng vào phễu dẫn hướng qua bộ điều khiển | OP2 | UUV đi thẳng vào phễu dẫn hướng | Ưu điểm điều khiển bằng cáp: OP2 chủ động lái UUV |
| 4B-06 | UUV tiếp xúc phễu dẫn hướng — phễu dẫn hướng dẫn UUV vào giá đỡ | — | ĐẠTive phễu dẫn hướng + OP2 điều khiển UUV | |
| 4B-07 | OP2 quan sát: "UUV VÀO CRADLE" hoặc "TRƯỢT RA" | OP2 | xác nhận bằng lời, KHÔNG dùng tay | |

**Nếu UUV TRƯỢT RA (miss):**

| # | Bước | Người | Chi tiết |
|---|------|-------|----------|
| MISS-01 | OP2 báo: "KHÔNG BẮT ĐƯỢC — UUV TRƯỢT RA" | OP2 | xác nhận bằng lời |
| MISS-02 | OP2 giữ UUV qua bộ điều khiển — UUV không mất (vẫn có tether) | OP2 | UUV vẫn connected |
| MISS-03 | CMDR tăng tốc nhẹ, tạo khoảng cách an toàn | CMDR | >= ___ m |
| MISS-04 | Đánh giá: UUV + cable có hư hại không? | OP2 + OP1 | quan sát trực quan + bộ điều khiển status |
| MISS-05 | OP2 điều khiển UUV quay lại vị trí, thử lần 2 | OP2 | bộ điều khiển | Lặp lại từ 4B-02 |
| MISS-06 | Sau ___ lần miss liên tiếp → DỪNG QUY TRÌNH, thu cáp cable, kéo UUV sát mạn | CMDR | Báo cáo về tàu mẹ |

### 4C: Kéo UUV lên boong

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 4C-01 | UUV trong giá đỡ — OP1 đóng cơ cấu kẹp giữ | OP1 | Từ stern station hoặc buồng lái | [ ] |
| 4C-02 | Xác nhận cơ cấu kẹp giữ ĐÃ KHÓA | OP1 | Chỉ thị locked, kiểm tra mắt | [ ] |
| 4C-03 | OP1 điều khiển tời kéo giá đỡ + UUV lên ray dốc đuôi | OP1 | Tốc độ ___ m/phút | |
| 4C-03a | **OP1 ĐỒNG BỘ tang quấn cáp thu cáp với tời** | OP1 | Cable không bị chùng/căng khi kéo lên | MỤC TỐI QUAN TRỌNG |
| 4C-04 | Giám sát: UUV không bị xiêu, cable không bị kẹt | OP2 + OP1 | quan sát trực quan, báo cáo liên tục | |
| 4C-05 | Giá đỡ + UUV lên đến vị trí cất giữ trên boong | OP1 | Tời dừng, khóa | [ ] |
| 4C-06 | OP2 tắt UUV qua bộ điều khiển | OP2 | bộ điều khiển: UUV SHUTDOWN | [ ] |
| 4C-07 | OP2 ngắt cáp điều khiển khỏi UUV (đầu nối C8) | OP2 | đầu nối tháo sạch | [ ] |
| 4C-08 | Bắt dây giằng bổ sung (dây chằng buộc bổ sung) | OP2 | ___ điểm buộc | [ ] |
| 4C-08 | Báo cáo CMDR: "UUV ĐÃ THU HỒI, AN TOÀN" | OP1 | xác nhận bằng lời | |
| 4C-09 | CMDR báo cáo tàu mẹ: "UUV recovered, time ___" | CMDR | VHF | |
| 4C-10 | OP1 + OP2 rời stern boong | OP1, OP2 | | [ ] |

**Thời gian mục tiêu:** thu hồi (4A-01 đến 4C-10) <= 30 phút (OP-03)

**⚠ DỪNG QUY TRÌNH thu hồi nếu:**
- Sóng tăng > SS ___ → DỪNG QUY TRÌNH, báo cáo tàu mẹ
- UUV bị hư hại khi vào phễu dẫn hướng → DỪNG QUY TRÌNH, đánh giá
- Tời mất lực → DỪNG, khóa giá đỡ, báo cáo
- Bất kỳ người nào trên stern boong cảnh báo nguy hiểm → DỪNG QUY TRÌNH NGAY
- Trời tối + không có đèn/IR → DỪNG QUY TRÌNH (trừ khi có IR camera)

---

## GIAI ĐOẠN 5: SAU THU HỒI

### 5A: Kiểm tra UUV sau thu hồi

| # | Hạng mục | Người | Kiểm tra | Đạt | Ghi chú |
|---|----------|-------|---------|-----|---------|
| 5A-01 | Vỏ UUV — trầy xước, móp, nứt | OP2 | quan sát trực quan, toàn bộ thân | [ ] | Chụp ảnh mọi hư hại |
| 5A-02 | Antenna/mast — nguyên vẹn | OP2 | quan sát trực quan | [ ] | |
| 5A-03 | Vây/phụ kiện — không gãy/cong | OP2 | quan sát trực quan | [ ] | |
| 5A-04 | đầu nối — không hư hại | OP2 | quan sát trực quan | [ ] | |
| 5A-05 | UUV đèn trạng thái — bình thường | OP2 | quan sát trực quan | [ ] | |
| 5A-06 | Kết nối data download (nếu cần) | OP2 | đầu nối ___ | [ ] | |
| 5A-07 | Ghi nhận tình trạng UUV vào log | OP2 | Phiếu ghi chép | [ ] | |

**Nếu UUV bị hư hại:** Chụp ảnh → ghi chi tiết → báo cáo CMDR → CMDR báo tàu mẹ + nhà chế tạo/OEM

### 5B: Thu dọn hệ thống LARS

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 5B-01 | Tắt hệ thống thủy lực/điện LARS | OP1 | | [ ] |
| 5B-02 | Kéo ray dốc đuôi lên vị trí cất giữ (nếu có) | OP1 | | [ ] |
| 5B-03 | Kiểm tra tời dây — cuộn gọn | OP1 | | [ ] |
| 5B-03a | Kiểm tra tang quấn cáp — cáp cuộn gọn, brake ĐÓNG | OP1 | | [ ] |
| 5B-03b | Tắt bộ điều khiển, cất giữ valy | OP2 | | [ ] |
| 5B-04 | V-phễu dẫn hướng — kiểm tra hư hại | OP1 | | [ ] |
| 5B-05 | Rửa bằng nước ngọt stern boong + LARS (nếu có nước ngọt) | OP1, OP2 | | [ ] |

### 5C: Quay về

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 5C-01 | cơ động về tàu mẹ (hoặc cảng) | CMDR | Tốc độ ___ kn | |
| 5C-02 | Báo cáo về tàu mẹ: "Đang quay về, thời gian dự kiến đến ___" | CMDR | VHF | [ ] |
| 5C-03 | Cập mạn tàu mẹ / cảng | CMDR, OP1, OP2 | | [ ] |
| 5C-04 | Cẩu UUV lên tàu mẹ (nếu cần) | Crane operator | Ngược lại quy trình 0B | [ ] |
| 5C-05 | Rửa bằng nước ngọt toàn bộ xuồng + LARS | OP1, OP2 | BẮT BUỘC | [ ] |

---

## GIAI ĐOẠN 6: DEBRIEF & LOG

| # | Hạng mục | Người | Chi tiết |
|---|----------|-------|----------|
| 6-01 | Ghi nhận vào Nhật ký vận hành | CMDR | |

### Nhật ký vận hành Entry

| Field | Value |
|-------|-------|
| Ngày | ___ |
| Nhiệm vụ | ___ |
| Kíp | CMDR: ___ / OP1: ___ / OP2: ___ |
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

### EP-01: Mất Điện / Mất Thủy Lực Khi Đang Hạ/Kéo UUV

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "MẤT ĐIỆN/THỦY LỰC" | OP1 |
| 2 | KHÓA NGAY tời brake (cơ khí) | OP1 |
| 3 | Tắt máy chính nếu cần | CMDR |
| 4 | Đánh giá tình hình | CMDR |
| 5 | Nếu UUV đang trên ray dốc đuôi: giữ nguyên, không làm gì | ALL |
| 6 | Nếu UUV nửa trên nửa dưới nước: khóa cơ cấu kẹp giữ, chờ sửa | OP1 |
| 7 | Báo cáo về tàu mẹ | CMDR |
| 8 | Sửa chữa hoặc kéo về (không có UUV trên ray dốc đuôi) | — |

### EP-02: UUV Rời Khỏi Giá đỡ Trên Ramp

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "UUV RỜI CRADLE" | OP2 |
| 2 | DỪNG WINCH NGAY | OP1 |
| 3 | KHÔNG cố gắng bắt UUV bằng tay | ALL |
| 4 | Nếu UUV trượt xuống nước: để nó trượt, đánh giá sau | — |
| 5 | Nếu UUV kẹt trên ray dốc đuôi: khóa tời, đánh giá | — |
| 6 | Báo cáo về tàu mẹ và nhà chế tạo/OEM | CMDR |

### EP-03: Người Rơi Xuống Nước (Man Overboard)

| # | Bước | Người |
|---|------|-------|
| 1 | BÁO ĐỘNG: "NGƯỜI RƠI XUỐNG NƯỚC — MAN ___ (tên)" | Bất kỳ |
| 2 | Ném phao cứu sinh về phía người rơi | Người gần nhất |
| 3 | CMDR giữ xuồng cạnh người, KHÔNG để chân vịt gần người | CMDR |
| 4 | DỪNG mọi hoạt động LARS | ALL |
| 5 | Kéo người lên xuồng | OP còn lại |
| 6 | Sơ cứu nếu cần | — |
| 7 | Báo cáo về tàu mẹ NGAY | CMDR |
| 8 | HỦY nhiệm vụ, quay về | CMDR |

### EP-04: Thời Tiết Xấu Đột Ngột (Sóng Tăng)

| # | Bước | Người |
|---|------|-------|
| 1 | CMDR đánh giá: sóng có vượt SS ___ không? | CMDR |
| 2 | Nếu đang triển khai: HOÃN, giữ UUV trên boong | CMDR |
| 3 | Nếu UUV đã triển khai: quyết định thu hồi ngay hoặc chờ | CMDR |
| 4 | Nếu đang thu hồi: hoàn thành nếu gần xong, DỪNG QUY TRÌNH nếu mới bắt đầu | CMDR |
| 5 | Báo cáo về tàu mẹ | CMDR |
| 6 | Xem xét quay về hoặc tìm vùng khuất gió | CMDR |

---

## SOP COMPLETION kiểm traLIST

> Đánh dấu [x] khi đã điền đầy đủ. Tất cả mục MỤC TỐI QUAN TRỌNG phải có trước thử nghiệm trên biển.

### Critical (MUST có trước thử nghiệm trên biển)

- [ ] Tất cả giá trị `___` trong Giai đoạn 2 (triển khai) đã điền — tốc độ tời, tốc độ tiếp cận
- [ ] Tất cả giá trị `___` trong Giai đoạn 4 (thu hồi) đã điền
- [ ] CHO PHÉP / KHÔNG CHO PHÉP criteria đã có giá trị cụ thể (SS, gió, tầm nhìn)
- [ ] Quy trình xử trí khẩn cấp đã được ekip đọc và hiểu
- [ ] Số lần miss tối đa trước DỪNG QUY TRÌNH đã xác định
- [ ] Tín hiệu tay giữa CMDR và OP đã thống nhất
- [ ] Thời gian mục tiêu đã xác định (triển khai <= 15 phút, thu hồi <= 30 phút)

### Important (SHOULD có trước thử nghiệm trên biển)

- [ ] Nhật ký vận hành template in sẵn, có sẵn trên xuồng
- [ ] checklist Giai đoạn 0A in sẵn, có sẵn trên xuồng
- [ ] UUV sau thu hồi inspection form (5A) in sẵn
- [ ] Quy trình xử trí khẩn cấp in sẵn, dán tại buồng lái
- [ ] Kíp đã tập luyện trên bờ (dry run) ít nhất ___ lần
- [ ] Kíp đã tập luyện trên nước (calm water) ít nhất ___ lần

### Nice to have (trước triển khai thực tế)

- [ ] Quy trình thu hồi ban đêm (với IR camera nếu có)
- [ ] Thống kê số liệu thu hồi nhiều lần từ thử nghiệm trên biển
- [ ] Thời gian trung bình cho mỗi Giai đoạn (mốc tham chiếu)
- [ ] Lessons learned từ thử nghiệm trên biển đã ghi vào SOP

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-06 | Workshop X | Biểu mẫu ban đầu — giá trị TBD |
| 1.1 | 2026-03-06 | Workshop X | Cập nhật cho UUV điều khiển bằng cáp: vai trò từng thành viên kíp, các hạng mục kiểm tra TMS (0A-10 to 0A-17), cable nhả cáp/thu cáp trong triển khai – thu hồi, OP2 = khai thác viên bộ điều khiển UUV, bỏ USBL |

---

*SOP Triển khai – thu hồi UUV v1.0 | VN-XUONG-UUV Giai đoạn 1 | COD: Offload (bản dự thảo AI, lãnh đạo dự án + kíp khai thác rà soát)*
