---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #defense, #acq, #three-laws]
links: [[Air-Gap Law — AI Quân Sự Phải Cách Ly Mạng Vật Lý]], [[ACH Boundary Rule — Information vs Physical Forces]], [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]]
---

## Ý Tưởng Cốt Lõi

Tổ chức quân sự triển khai trợ lý ảo AI chỉ có MỘT con đường hợp lệ: On-Premise Air-Gap + Private LLM + dữ liệu huấn luyện sovereign. Public API (ChatGPT/Gemini/Copilot) bị loại hoàn toàn. Ngay cả "private cloud" từ vendor = rủi ro nếu vendor kiểm soát infrastructure.

## Giải Thích Chi Tiết

**Sovereign AI** = triển khai AI hoàn toàn dưới luật pháp, hạ tầng, và dữ liệu của quốc gia mình. 3 lớp chủ quyền:

1. **Infrastructure sovereignty:** Hardware (GPU, server) đặt tại trung tâm dữ liệu nội bộ. Không thuê cloud nước ngoài.
2. **Model sovereignty:** Dùng open-source LLM (Qwen, Llama) fine-tuned trên dữ liệu tiếng Việt. Không dùng closed API.
3. **Data sovereignty:** Dữ liệu huấn luyện + prompts + outputs không bao giờ rời mạng nội bộ.

**Tại sao cloud bị loại?**
- Prompt data gửi ra ngoài = potential intelligence leak
- Vendor có thể bị ép cung cấp data cho chính phủ nước ngoài (CLOUD Act, FISA)
- Downtime cloud = mission-critical failure trong quân sự

**Landscape VN:** Viettel AI = vendor duy nhất đã chứng minh sovereign AI cho tổ chức nhà nước VN (Trợ lý ảo Tòa án NDTC: 160K văn bản, 1.8M bản án, GPU Blackwell B200). VNPT SmartBot đã triển khai cho chính quyền địa phương.

**KH 02-KH/BCĐTW:** Chính sách nhà nước VN đã xác định "AI Make in Vietnam" dựa trên dữ liệu VN, ngôn ngữ VN = đảm bảo chủ quyền số.

## Tại Sao Điều Này Quan Trọng?

VN-AIA-128 architecture decision: [[Air-Gap Law]] nói "phải cách ly mạng". Sovereign AI Law nói thêm: "phải sở hữu mọi lớp — từ GPU đến model đến data". Đây là extension của Air-Gap từ network layer sang toàn bộ stack.

Với Workshop X: mọi sản phẩm ACH có data/AI layer phải có sovereign deployment option cho khách hàng quốc phòng. Không có → không bán được.

## Liên Kết

- [[Air-Gap Law — AI Quân Sự Phải Cách Ly Mạng Vật Lý]] — Sovereign AI = extension từ network sang full stack
- [[ACH Boundary Rule — Information vs Physical Forces]] — sovereign AI giữ information layer trong kiểm soát
- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — sovereign = edge-first by default
- [[Security Retrofit Trap — Vá Bảo Mật Không Bằng Thiết Kế Bảo Mật]] — sovereign phải design-in, không retrofit

## Nguồn Gốc

- Deloitte: State of AI in Enterprise 2026 — Sovereign AI concept
- PremAI: Private LLM Deployment Guide 2026 — on-premise is the only path for defense
- Viettel AI: Trợ lý ảo Tòa án NDTC (VnExpress)
- KH 02-KH/BCĐTW: Chính sách AI Make in Vietnam (Bộ KH&CN)
- Encountered: 2026-03-20, /research --deep
