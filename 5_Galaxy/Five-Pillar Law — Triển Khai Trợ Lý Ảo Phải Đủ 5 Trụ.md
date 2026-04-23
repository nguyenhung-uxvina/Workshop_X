---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #ceo, #sys, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]]
---

## Ý Tưởng Cốt Lõi

Triển khai trợ lý ảo doanh nghiệp phải đủ 5 trụ: (1) Metrics rõ ràng, (2) Data quality, (3) Start narrow, (4) Human-in-the-loop, (5) Change management. Thiếu bất kỳ trụ nào = thất bại. Giống [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]]: tích, không phải tổng.

## Giải Thích Chi Tiết

**Trụ 1 — Metrics:** Đặt 3-5 KPIs trước khi triển khai. VD: containment rate 60-75%, response time <1s, CSAT >4.0, cost reduction 30%. Không có metrics = không biết thành hay bại.

**Trụ 2 — Data quality:** AI chỉ thông minh bằng dữ liệu đầu vào. Phải quy tụ dữ liệu phân mảnh từ ERP/CRM/HRM thành Data Lake/Warehouse thống nhất, loại bỏ mâu thuẫn. "Garbage in, garbage out" là failure mode #1.

**Trụ 3 — Start narrow:** Bắt đầu 5-10 use cases phổ biến nhất (chiếm 60% workload). Hoàn thiện chúng, rồi mới mở rộng. Không cố automate mọi thứ ngay — sẽ collapse dưới complexity.

**Trụ 4 — Human-in-the-loop:** Cơ chế escalation liền mạch khi AI không tự tin. Đặc biệt quan trọng trong context quân sự: hallucination + mệnh lệnh = CỰC KỲ NGUY HIỂM. Con người phải ở trong loop cho mọi quyết định quan trọng.

**Trụ 5 — Change management:** Nhân viên sợ mất việc → tẩy chay. Phải minh bạch: AI = công cụ giải phóng khỏi việc lặp lại, không thay thế. Thu hút nhân viên tham gia huấn luyện AI.

**Evidence:** Deloitte 2026: chỉ 1/5 tổ chức có mature governance model cho autonomous AI agents. Điều này có nghĩa 80% thiếu ít nhất 1 trụ.

## Tại Sao Điều Này Quan Trọng?

VN-AIA-128 (HD128): trước khi demo MVP 2026-04-19, phải check cả 5 trụ. Trụ 2 (Data quality) = blocking — HD128 có kho dữ liệu văn bản/quy định nào sẵn? Nếu chưa có → MVP sẽ hallucinate.

## Liên Kết

- [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]] — cùng nguyên lý tích: 5 trụ × nhau, thiếu 1 = 0
- [[Phán đoán không thể uỷ thác cho AI]] — Trụ 4 (Human-in-loop) là biểu hiện trực tiếp
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — Trụ 2 (Data quality) = dữ liệu thực, không phải giả định
- [[Analyst Trap — Vault Growth khác Thinking Growth]] — triển khai AI cũng bị Analyst Trap: plan nhiều, deploy ít

## Nguồn Gốc

- Deloitte: State of AI in the Enterprise 2026 (only 1/5 mature governance)
- Forrester: Copilot Reality Check (12-18 month pilot stuck)
- Gartner: ROI measurement "quite challenging"
- Cross-validated by MISA, FPT, VNPT deployment patterns
- Encountered: 2026-03-20, /research --deep
