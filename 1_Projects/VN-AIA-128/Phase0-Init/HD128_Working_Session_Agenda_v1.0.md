---
created: 2026-03-20
type: working-document
project: VN-AIA-128
target: Đầu mối Hải đoàn 128 (PoC)
purpose: Buổi làm việc đầu tiên — xác nhận nhu cầu + thu thập đầu vào
---

# NỘI DUNG LÀM VIỆC VỚI HẢI ĐOÀN 128
## Buổi 1 — Xác Nhận Nhu Cầu & Thu Thập Đầu Vào

**Thời lượng dự kiến:** 60-90 phút
**Đối tượng tham dự:**
- Phía Workshop X: CEO (KN)
- Phía HD128: Đầu mối chính (CNTT / Phòng nghiệp vụ / Chỉ huy phân công)

**Mục tiêu buổi làm việc:**
1. Xác nhận nhu cầu thực tế của đơn vị
2. Thu thập tài liệu mẫu cho RAG prototype
3. Thống nhất phạm vi demo MVP (30 ngày)
4. Xác định đầu mối phối hợp + lịch demo

---

# PHẦN 1: HIỂU NHU CẦU THỰC TẾ (20 phút)

## 1.1 Bối cảnh chung

| # | Câu hỏi | Ghi chú |
|---|---------|---------|
| 1 | "Hiện tại đơn vị quản lý khoảng bao nhiêu văn bản quy định đang có hiệu lực?" | Ước lượng: 100? 500? 1000+? |
| 2 | "Văn bản được lưu trữ ở đâu? (tủ hồ sơ giấy / folder chia sẻ mạng / hệ thống phần mềm / email / tất cả?)" | Xác nhận pain point O-07, O-10 |
| 3 | "Trung bình mỗi ngày, cán bộ nghiệp vụ cần tra cứu quy định bao nhiêu lần?" | Validate tần suất: 5-10 lần/ngày? |
| 4 | "Khi cần tìm một quy định cụ thể, thường mất bao lâu?" | Validate pain: 15 phút? 30 phút? 1 giờ? |
| 5 | "Có trường hợp nào áp dụng sai quy định hoặc bỏ sót văn bản mới không? Hậu quả thế nào?" | Validate O-06 risk |

## 1.2 Khó khăn hiện tại

| # | Câu hỏi | Ghi chú |
|---|---------|---------|
| 6 | "Điều gì KHIẾN ĐƠN VỊ KHÓ KHĂN NHẤT trong việc quản lý và tra cứu văn bản quy định?" | Câu hỏi mở — để họ tự nói pain point |
| 7 | "Khi có quy định mới ban hành, quy trình cập nhật và phổ biến đến cán bộ như thế nào?" | Xác nhận O-34 pain |
| 8 | "Cán bộ mới về đơn vị mất bao lâu để nắm được hệ thống quy định? Ai hướng dẫn?" | Validate O-16 |
| 9 | "Khi soạn văn bản, cán bộ tìm mẫu ở đâu? Mất bao lâu để soạn 1 văn bản chuẩn?" | Validate O-22, O-25 |
| 10 | "Có tình huống nào cán bộ muốn tra cứu 'lần trước ta xử lý thế nào' nhưng không tìm được?" | Validate O-37, O-41 — tiền lệ |

## 1.3 Kỳ vọng với trợ lý ảo

| # | Câu hỏi | Ghi chú |
|---|---------|---------|
| 11 | "Nếu có một hệ thống AI giúp tra cứu quy định, đơn vị mong muốn nó làm được gì TRƯỚC TIÊN?" | Ưu tiên của khách hàng — có thể khác AI estimates |
| 12 | "Những loại câu hỏi nào cán bộ hay hỏi nhất về quy định?" | Input cho bộ test 20 câu MVP |
| 13 | "Đơn vị có chấp nhận AI trả lời 'không chắc chắn' và gợi ý tham khảo thêm không? Hay phải luôn chính xác 100%?" | Xác định kỳ vọng accuracy + fallback |
| 14 | "Ngoài tra cứu quy định, còn nghiệp vụ nào khác đơn vị muốn AI hỗ trợ?" | Mở rộng scope nếu có nhu cầu lớn hơn |

---

# PHẦN 2: DỮ LIỆU ĐẦU VÀO (15 phút)

## 2.1 Loại tài liệu cần nạp

| # | Câu hỏi | Mục đích |
|---|---------|----------|
| 15 | "Có thể phân loại tài liệu thành những nhóm nào?" | Ví dụ: quy chế, quy định, hướng dẫn, mẫu biểu, chỉ thị, thông báo |
| 16 | "Nhóm nào được tra cứu NHIỀU NHẤT?" | Ưu tiên nạp nhóm này trước cho MVP |
| 17 | "Tài liệu ở dạng gì? (Word, PDF scan, PDF text, Excel, giấy?)" | Xác định pipeline: OCR cần không? |
| 18 | "Có tài liệu nào KHÔNG ĐƯỢC đưa vào hệ thống AI? (mật, tối mật?)" | Ranh giới bảo mật — QUAN TRỌNG |

## 2.2 Yêu cầu cung cấp tài liệu mẫu

> *"Để xây dựng prototype demo trong 30 ngày, chúng tôi cần nhận được ≥10 văn bản quy định tiêu biểu (KHÔNG MẬT) của đơn vị. Đề xuất:"*

| # | Loại tài liệu | Số lượng đề xuất | Format |
|---|---------------|:----------------:|--------|
| 1 | Quy chế hoạt động / nội quy đơn vị | 2-3 | Word/PDF text |
| 2 | Quy trình nghiệp vụ (hậu cần, nhân sự, tác chiến) | 3-4 | Word/PDF |
| 3 | Hướng dẫn / chỉ thị thường dùng | 2-3 | Word/PDF |
| 4 | Mẫu biểu / mẫu văn bản | 3-5 | Word/Excel |
| 5 | FAQ hoặc tài liệu đào tạo (nếu có) | 1-2 | Bất kỳ |
| **Tổng** | | **≥10 văn bản** | |

**Lưu ý quan trọng:**
- CHỈ cần tài liệu KHÔNG MẬT
- Có thể che/xóa tên thật nếu cần (anonymize)
- File Word/PDF text ưu tiên (dễ xử lý hơn PDF scan)
- Deadline nhận tài liệu: **2026-03-27** (để kịp 30 ngày demo)

---

# PHẦN 3: HẠ TẦNG & BẢO MẬT (15 phút)

| # | Câu hỏi | Mục đích |
|---|---------|----------|
| 19 | "Đơn vị có server riêng không? Cấu hình thế nào? (CPU, RAM, GPU?)" | Xác định deployment: on-premise vs cloud |
| 20 | "Đơn vị sử dụng hạ tầng cloud nào? (FPT Cloud, Viettel Cloud, nội bộ?)" | Alternative nếu không có server |
| 21 | "Yêu cầu bảo mật dữ liệu: dữ liệu có được phép rời mạng nội bộ không?" | Confirm constraint: on-premise only? |
| 22 | "Hệ thống xác thực người dùng hiện tại là gì? (LDAP, AD, email nội bộ, không có?)" | Cho ICD IF-006 |
| 23 | "Đơn vị có cho phép triển khai Docker container trên hạ tầng không?" | Technical: deployment method |
| 24 | "Tốc độ mạng nội bộ? Cán bộ truy cập bằng gì? (PC văn phòng, laptop, điện thoại?)" | UI design: web responsive? mobile? |
| 25 | "Ai là người phê duyệt cuối cùng để triển khai phần mềm trên hạ tầng đơn vị?" | Gate keeper — cần biết sớm |

---

# PHẦN 4: DEMO & ĐÁNH GIÁ (10 phút)

| # | Câu hỏi | Mục đích |
|---|---------|----------|
| 26 | "Đơn vị muốn demo vào thời điểm nào? (đề xuất: tuần 14-19/04)" | Confirm physical gate |
| 27 | "Ai sẽ tham gia đánh giá demo? Bao nhiêu người?" | Target ≥3 cán bộ (success criteria) |
| 28 | "Tiêu chí đánh giá của đơn vị là gì? (chính xác? nhanh? dễ dùng?)" | Customer-defined success |
| 29 | "Sau demo, quy trình phê duyệt tiếp theo là gì? (báo cáo lên ai? timeline?)" | Hiểu decision pipeline |
| 30 | "Nếu demo thành công, đơn vị muốn triển khai chính thức khi nào?" | Expectation alignment |

---

# PHẦN 5: PHỐI HỢP (5 phút)

| # | Nội dung cần thống nhất | Ghi chú |
|---|------------------------|---------|
| 31 | Đầu mối phía HD128 (tên, SĐT, Zalo/email) | Cho liên lạc hàng tuần |
| 32 | Đầu mối CNTT (nếu khác đầu mối chính) | Cho câu hỏi kỹ thuật |
| 33 | Kênh liên lạc ưu tiên (Zalo group? Email? Telegram?) | Setup ngay trong buổi |
| 34 | Lịch check-in tiếp theo | Đề xuất: 1 tuần sau (2026-04-01) |
| 35 | Cam kết cung cấp tài liệu mẫu trước 2026-03-27 | **Điều kiện tiên quyết cho MVP** |

---

# CHECKLIST SAU BUỔI LÀM VIỆC

## CEO làm ngay (trong 24h):

- [ ] Gửi email/Zalo tóm tắt nội dung buổi làm việc cho HD128 PoC
- [ ] Confirm deadline nhận tài liệu: 2026-03-27
- [ ] Confirm ngày demo: tuần 14-19/04/2026
- [ ] Tạo Zalo/Telegram group với đầu mối HD128
- [ ] Cập nhật Status.md: blocking constraint #1 (stakeholder access) → RESOLVED/IN PROGRESS

## CEO làm trong tuần:

- [ ] Nhận tài liệu mẫu → kiểm tra format (Word/PDF text vs scan)
- [ ] Nếu PDF scan → setup OCR pipeline (Tesseract/PaddleOCR)
- [ ] Chọn LLM engine dựa trên hạ tầng HD128 (local vs cloud)
- [ ] Bắt đầu chunking + embedding tài liệu

## Red flags — nếu xảy ra:

| Red Flag | Hành động |
|----------|-----------|
| HD128 không cung cấp tài liệu | Dùng tài liệu công khai (nghị định, thông tư) làm demo → giảm giá trị nhưng vẫn demo được |
| Không có server, không cho dùng cloud | Demo trên laptop Workshop X mang theo → deploy sau |
| Yêu cầu bảo mật quá cao (mọi tài liệu đều mật) | Chuyển scope: demo trên tài liệu công khai + giải thích khả năng mở rộng |
| Đầu mối không có thẩm quyền quyết định | Hỏi: "Ai có thẩm quyền phê duyệt triển khai?" → tiếp cận người đó |
| Timeline kéo dài (demo sau 2 tháng) | Đề xuất: demo internal trước → demo HD128 khi họ sẵn sàng |

---

# TÓM TẮT — 5 ĐIỀU PHẢI ĐẠT ĐƯỢC SAU BUỔI LÀM VIỆC

| # | Output bắt buộc | Đạt? |
|---|-----------------|:----:|
| 1 | **Xác nhận nhu cầu thực tế** — HD128 có cần trợ lý tra cứu quy định? | ☐ |
| 2 | **Cam kết cung cấp ≥10 văn bản mẫu** trước 2026-03-27 | ☐ |
| 3 | **Đầu mối liên lạc** — tên + SĐT + kênh liên lạc | ☐ |
| 4 | **Ngày demo** — confirm tuần 14-19/04 | ☐ |
| 5 | **Hiểu hạ tầng** — server? cloud? bảo mật? xác thực? | ☐ |

**Nếu đạt 5/5 → Phase 1 unblocked. Nếu < 3/5 → reassess project viability.**

---

*VN-AIA-128 — HD128 Working Session Agenda v1.0*
*Chuẩn bị cho buổi làm việc đầu tiên với Hải đoàn 128*
