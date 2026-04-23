---
project: VN-XUONG-UUV
phase: 1
type: interview-template
version: 1.0
created: 2026-03-06
status: draft
purpose: Validate Phase 1 requirements with key stakeholders before Phase 2 concept freeze
---

# VN-XUONG-UUV — Stakeholder Interview Templates

## Pre-Interview Checklist (chung cho cả 3 buổi)

| # | Hạng mục | Status |
|---|----------|--------|
| 1 | In bản Doc 001 Charter v1.1 (tiếng Việt summary) | [ ] |
| 2 | In bản Doc 002 Requirements List v1.2 (bảng tóm tắt) | [ ] |
| 3 | In bản ICD Template v1.1 (Section H + J cho S3/OEM) | [ ] |
| 4 | Chuẩn bị sơ đồ LARS (hình vẽ đơn giản stern ramp + V-funnel + TMS) | [ ] |
| 5 | Chuẩn bị bảng so sánh đối thủ (Doc 004 tóm tắt) | [ ] |
| 6 | Ghi âm thiết bị (xin phép trước) | [ ] |
| 7 | Notebook + bút để ghi tay (backup) | [ ] |
| 8 | Đặt lịch hẹn trước >= 1 tuần, xác nhận lại 1 ngày trước | [ ] |

---

## S1: Navy UUV Ops Team (PRIMARY USER)

**Mục tiêu:** Validate yêu cầu vận hành, xác nhận SOP phù hợp, thu thập kinh nghiệm thực tế.

**Thời lượng:** 60-90 phút
**Địa điểm:** Đơn vị UUV hoặc tàu mẹ
**Người tham dự:** Trưởng kíp UUV + 1-2 người vận hành

### Phần A: Bối cảnh & Kinh nghiệm (15 phút)

| # | Câu hỏi | Ghi chú |
|---|---------|---------|
| A1 | Hiện tại các anh đang thu/thả UUV bằng cách nào? (crane? tay?) | Hiểu baseline hiện tại |
| A2 | UUV này đã được thu/thả ở biển chưa? Bao nhiêu lần? | Kinh nghiệm thực tế |
| A3 | Khó khăn lớn nhất khi vận hành UUV trên biển là gì? | Pain point chính |
| A4 | Dây điều khiển (tether) có hay bị vướng/kẹt không? | F5 tether management |
| A5 | Bộ điều khiển valy — các anh đã dùng ở đâu? (trên bờ? tàu?) | HC-10, HC-11 validation |

### Phần B: Validate yêu cầu vận hành (25 phút)

| # | Yêu cầu (từ Doc 002) | Câu hỏi xác nhận | D/W hiện tại |
|---|---------------------|-------------------|--------------|
| B1 | OP-01: Thu hồi ở Sea State 3 | Biển Đông thường gặp SS mấy? SS 3 có đủ không? | D |
| B2 | OP-03: Thời gian thu hồi <= 30 phút | 30 phút có chấp nhận được không? Cần nhanh hơn? | D |
| B3 | OP-04: Thời gian thả <= 15 phút | 15 phút có phù hợp? | D |
| B4 | OP-09: Kíp vận hành 3 người | 3 người đủ không? Cần bổ sung vai trò nào? | D |
| B5 | OP-17: Tether 25 km | Các anh thường vận hành ở cự ly bao nhiêu? Max? | D |
| B6 | OP-14: Hoạt động liên tục >= 5 giờ | 5 giờ có đủ cho 1 chuyến không? | D |
| B7 | SA-02: Thủy thủ ở đuôi tàu <= 10 phút/lần thu hồi | Các anh có chấp nhận được không? Muốn ít hơn? | D |
| B8 | OP-10: Thu hồi ban đêm | Có yêu cầu thu hồi ban đêm không? Tần suất? | W |

### Phần C: SOP Review (15 phút)

*Trình bày SOP Launch/Recovery v1.1 (tóm tắt)*

| # | Câu hỏi | Mục đích |
|---|---------|----------|
| C1 | Quy trình này có phù hợp với cách các anh làm việc không? | Validate SOP |
| C2 | Bước nào các anh thấy phức tạp/khó thực hiện? | Tìm bottleneck |
| C3 | Phân công vai trò: CMDR + OP1 (LARS) + OP2 (controller) — có hợp lý không? | Crew roles |
| C4 | Khi dây bị vướng, các anh xử lý thế nào hiện tại? | Emergency tether |
| C5 | Các anh cần thời gian huấn luyện bao lâu để vận hành được? | Training req |

### Phần D: Môi trường vận hành (10 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| D1 | Tàu mẹ hiện tại là loại gì? Kích thước? Có crane không? | HC-2 |
| D2 | Vùng biển hoạt động chính? (ven bờ? xa bờ?) | Environment |
| D3 | Nhiệt độ/thời tiết điển hình khi vận hành? | Check 05 (env) |
| D4 | Có hoạt động ban đêm không? Tần suất? | OP-10 |
| D5 | UUV hiện tại nặng bao nhiêu? Kích thước chính xác? | HC-7 verify |

### Phần E: Câu hỏi mở (10 phút)

| # | Câu hỏi |
|---|---------|
| E1 | Nếu được thiết kế theo ý các anh, điều gì quan trọng nhất? |
| E2 | Điều gì các anh lo ngại nhất về xuồng thu/thả? |
| E3 | Có yêu cầu nào chúng tôi chưa đề cập mà các anh thấy cần thiết? |

---

## S2: Navy Procurement

**Mục tiêu:** Xác nhận ngân sách, nội địa hóa, tiêu chuẩn hợp đồng, quy trình nghiệm thu.

**Thời lượng:** 45-60 phút
**Địa điểm:** Văn phòng bộ phận mua sắm
**Người tham dự:** Cán bộ mua sắm + cán bộ kỹ thuật (nếu có)

### Phần A: Ngân sách & Hợp đồng (15 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| A1 | Ngân sách dự kiến cho xuồng thu/thả UUV là bao nhiêu? | C-01, C-02 |
| A2 | Ngân sách này bao gồm những gì? (chỉ xuồng? hay cả UUV + dây?) | Check 10 (scope) |
| A3 | Có yêu cầu về giá thành vận hành hàng năm không? | C-03 |
| A4 | Quy trình mua sắm: đấu thầu? chỉ định? hợp đồng nghiên cứu? | Process |
| A5 | Thời hạn giao hàng mong muốn? | SC-01, SC-02 |

### Phần B: Nội địa hóa (10 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| B1 | Tỷ lệ nội địa hóa tối thiểu yêu cầu là bao nhiêu? | HC-5 (50%) verify |
| B2 | Tính nội địa hóa theo giá trị hay theo số lượng linh kiện? | M-05 method |
| B3 | Dây điều khiển và bộ điều khiển UUV (OEM) có tính vào mẫu không? | Check 10 scope |
| B4 | Có chấp nhận linh kiện nhập khẩu cho những hạng mục không sản xuất được tại VN? | Supply chain |

### Phần C: Tiêu chuẩn & Nghiệm thu (15 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| C1 | Áp dụng tiêu chuẩn nào cho xuồng nhỏ quân sự? TCVN 6259? TCVN 11456? | Doc 005 Gap #1 |
| C2 | Có yêu cầu đăng kiểm (VN Register) cho prototype không? | Classification |
| C3 | Có yêu cầu MIL-STD (810H, 461G) không? | Doc 005 military |
| C4 | Quy trình nghiệm thu gồm những bước nào? | Acceptance |
| C5 | Ai ký biên bản nghiệm thu? Cán bộ kỹ thuật hay cấp chỉ huy? | Authority |
| C6 | Có cần báo cáo kiểm định EMC/EMI không? | MIL-STD-461G |

### Phần D: Câu hỏi mở (10 phút)

| # | Câu hỏi |
|---|---------|
| D1 | Có dự án tương tự (xuồng chuyên dụng) nào đã mua sắm trước đây không? |
| D2 | Khó khăn lớn nhất khi mua sắm trang bị mới là gì? |
| D3 | Yêu cầu về tài liệu bàn giao gồm những gì? (bản vẽ? SOP? báo cáo thử?) |
| D4 | Có yêu cầu nào chúng tôi chưa đề cập? |

---

## S4: Mother Ship CO

**Mục tiêu:** Validate towing arrangement, crane ops, operational integration.

**Thời lượng:** 30-45 phút
**Địa điểm:** Trên tàu hoặc văn phòng chỉ huy
**Người tham dự:** Chỉ huy trưởng hoặc phó chỉ huy + sĩ quan boong

### Phần A: Tàu mẹ hiện tại (10 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| A1 | Loại tàu, chiều dài, lượng giãn nước? | Context |
| A2 | Crane hiện có: SWL? Vị trí? Tầm vươi? | HC-2 verify |
| A3 | Có vị trí neo đặt xuồng nhỏ cạnh mạn tàu không? | Towing |
| A4 | Tốc độ hành trình thường lệ? | OP-11 (tow speed) |

### Phần B: Vận hành xuồng thu/thả (15 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| B1 | Tàu mẹ có thể lai dắt xuồng nhỏ cạnh mạn ở tốc độ bao nhiêu? | OP-11 (5-8 kts) |
| B2 | Thời gian cho phép dùng crane để chuyển UUV? | ER-04, schedule |
| B3 | Có chấp nhận xuồng nhỏ neo đặt lâu dài cạnh mạn tàu không? | Operational |
| B4 | Khi biển động (SS 3-4), có cho phép thả xuồng nhỏ không? | OP-01, OP-02 |
| B5 | Việc có thêm 1 xuồng nhỏ cạnh mạn ảnh hưởng đến vận hành tàu thế nào? | S4 pain point |
| B6 | Có yêu cầu về liên lạc VHF giữa xuồng nhỏ và tàu mẹ không? | S-06 |

### Phần C: An toàn & Quy trình (10 phút)

| # | Câu hỏi | Map to Req |
|---|---------|-----------|
| C1 | Có SOP hiện tại cho việc lai dắt xuồng nhỏ không? | SOP Mother Ship |
| C2 | Yêu cầu về an toàn khi crane chuyển UUV? | SA, HC-2 |
| C3 | Ai là người ra quyết định thả/thu xuồng nhỏ? Chỉ huy tàu hay kíp UUV? | Authority |
| C4 | Khi khẩn cấp, có thể cắt dây kéo nhanh được không? | SA-06 |

### Phần D: Câu hỏi mở (5 phút)

| # | Câu hỏi |
|---|---------|
| D1 | Điều gì làm anh lo ngại nhất về việc có thêm xuồng thu/thả UUV? |
| D2 | Có yêu cầu nào từ phía tàu mẹ mà chúng tôi cần biết? |

---

## Post-Interview Checklist

| # | Hạng mục | Deadline | Status |
|---|----------|----------|--------|
| 1 | Ghi chép lại tất cả câu trả lời (trong ngày) | +0 ngày | [ ] |
| 2 | Xác định requirements cần thay đổi (D/W, giá trị) | +1 ngày | [ ] |
| 3 | Xác định requirements mới cần bổ sung | +1 ngày | [ ] |
| 4 | Cập nhật Doc 002 Requirements List | +3 ngày | [ ] |
| 5 | Cập nhật Doc 001 Charter (nếu HC thay đổi) | +3 ngày | [ ] |
| 6 | Cập nhật Doc 005 Standards (từ S2 interview) | +3 ngày | [ ] |
| 7 | Gửi email cảm ơn + tóm tắt cho người được phỏng vấn | +1 ngày | [ ] |
| 8 | Đánh giá: có cần re-score Gate 1 không? (nếu > 10% thay đổi) | +3 ngày | [ ] |

### Decision Rules After Interviews

| Kết quả | Hành động |
|---------|----------|
| Không có thay đổi lớn (< 5 reqs đổi) | Cập nhật Doc 002, tiếp tục Phase 2 |
| Thay đổi vừa (5-15 reqs) | Cập nhật Docs, review lại Gate 1 score |
| Thay đổi lớn (> 15 reqs hoặc HC mới) | Re-run /gate1 trước khi tiếp tục |
| Conflict giữa S1 và S2/S4 | Escalate — CEO quyết định ưu tiên |

---

## Interview Priority & Schedule

| Ưu tiên | Stakeholder | Lý do | Target date |
|---------|-------------|-------|-------------|
| **1** | S2 (Procurement) | Xác nhận ngân sách + tiêu chuẩn hợp đồng + nội địa hóa scope — ảnh hưởng trực tiếp đến Phase 2 | Tuần 1 |
| **2** | S1 (Ops Team) | Validate yêu cầu vận hành + SOP — nhiều câu hỏi nhất | Tuần 1-2 |
| **3** | S4 (Mother Ship CO) | Validate towing + crane — ít câu hỏi hơn nhưng cần xác nhận sớm | Tuần 2 |

**Note:** S3 (UUV OEM) không phỏng vấn mà gửi ICD Template v1.1 để họ điền — đã có trong khu vực riêng.

---

*Interview Templates v1.0 | VN-XUONG-UUV Phase 1 | COD: Core (judgment validation)*
