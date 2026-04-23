---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #defense, #product, #three-laws, #acq]
links: [[Phán đoán không thể uỷ thác cho AI]], [[ACH Boundary Rule — Information vs Physical Forces]], [[Operator Cognitive Ceiling — Độ Phức Tạp C2 Vượt Kỹ Năng = Giá Sắt Đắt Tiền]]
---

# Human-in-the-Loop Thắng Tự Động — Bài Học Từ USV Ukraine

## Ý Tưởng Cốt Lõi

Trong chiến tranh USV thực tế (Biển Đen 2022-2026), **điều khiển từ xa bởi con người qua vệ tinh (human-in-the-loop)** chứng minh hiệu quả hơn tự động hóa hoàn toàn. Con người nhanh hơn triển khai, linh hoạt hơn chiến thuật, và đáng tin cậy hơn thuật toán trong giao chiến thực.

## Giải Thích Chi Tiết

Ukraine triển khai Magura V5 và Sea Baby USV với kiến trúc đơn giản: camera + Starlink/Kymeta satellite comms + đầu đạn mũi tàu. Thành công đến từ:

1. **Human targeting toàn bộ mission**: Operator điều khiển từ console di động, ra quyết định theo thời gian thực qua video vệ tinh
2. **Nhanh hơn triển khai**: Không cần train AI model, không cần dataset — một garage nhỏ chế tạo, một operator điều khiển
3. **Thích nghi chiến thuật**: Khi Nga triển khai EW/GPS jamming, operator thay đổi approach route ngay lập tức — AI cần retrain
4. **Tự động chỉ cho "last mile"**: Khi Starlink bị jam gần mục tiêu, autonomous guidance chỉ cần cho ~500m cuối

Kết quả: May 2025, Magura V5 bắn hạ 2 Su-30 Flanker bằng tên lửa AIM-9 Sidewinder — lần đầu tiên USV hạ máy bay chiến đấu.

Mẫu hình chiến lược: "Barbell strategy" — high-end manned (tàu ngầm, F-35) + batch expendable USVs ("batch of cookies" 10-25 chiếc, modular). KHÔNG ở giữa (quá đắt để mất, quá rẻ để sống).

## Tại Sao Điều Này Quan Trọng?

Thách thức trực tiếp giả định ACH của Workshop X:

1. **VN-CUAV-SIM counter-USV scenarios**: PHẢI bao gồm HITL (human-in-the-loop) threat model — không chỉ autonomous swarm. Operator Ukraine + Starlink = mối đe dọa KHÁC với AI swarm
2. **VN-USV-SS-001 architecture**: Human-in-loop + autonomous last-mile = kiến trúc hybrid. Đừng over-invest vào full autonomy cho Phase 1
3. **ACH nuance**: AI compensates hardware ĐÚNG cho sensor processing (MRA sea clutter) nhưng KHÔNG thay thế human judgment trong targeting. ACH Boundary Rule vẫn đúng — nhưng ranh giới khác với giả định
4. **Training sim design**: Sim phải train operator CHO CẢ HAI vai trò: (a) HITL USV pilot attacking, (b) Defender chống HITL USV — khác biệt lớn với chống autonomous swarm

**Counter-intuitive:** Trong lĩnh vực mà AI được đề cao, chiến trường thực chứng minh con người + vệ tinh thắng AI + autonomy. Ít nhất cho đến khi EW phá hủy link vệ tinh.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — Ukraine USV operators là bằng chứng chiến trường: human targeting judgment > automated algorithms
- [[ACH Boundary Rule — Information vs Physical Forces]] — ACH đúng cho sensor processing (MRA), nhưng targeting vẫn cần human. Ranh giới được xác nhận, không bị bác bỏ
- [[Operator Cognitive Ceiling — Độ Phức Tạp C2 Vượt Kỹ Năng = Giá Sắt Đắt Tiền]] — HITL operator cũng có cognitive ceiling. Console Ukraine "đơn giản bất ngờ" — 1 joystick + 1 screen. Ít hơn = nhiều hơn

## Nguồn Gốc

- RUSI "Uncrewed Platforms Critical to Ukraine's Success in Black Sea" (Tier A)
- IEEE Spectrum "Sea Drones in Russia-Ukraine War" (Tier A)
- CSBA "A Navy of Necessity: Ukraine's USVs at War" (Tier A)
- Autonomy Global "Lessons from Black Sea for AUKUS" (Tier A)
- Research update "Counter-UAS + Counter-USV Training," 2026-04-22
