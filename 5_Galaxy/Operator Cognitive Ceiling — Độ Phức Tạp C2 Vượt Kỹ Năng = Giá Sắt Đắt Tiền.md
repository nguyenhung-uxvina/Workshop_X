---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #defense, #acq, #warning, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[AI Dependency Spiral (R3)]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]]
---

# Operator Cognitive Ceiling — Độ Phức Tạp C2 Vượt Kỹ Năng = Giá Sắt Đắt Tiền

## Ý Tưởng Cốt Lõi

Khi hệ thống Command and Control (C2) phức tạp hơn khả năng nhận thức của người vận hành, hệ thống vũ khí trị giá triệu đô trở thành **giá sắt đắt tiền**. Bottleneck không phải sensor hay effector — mà là bộ não con người ở giữa.

## Giải Thích Chi Tiết

Phân tích CRS Report và NTC Training Report phát hiện:
- Legacy C2 FAADC2 yêu cầu operator **manually select và engage từng target** → "distracts operator focus" + "exacerbates human error"
- Khi đối mặt drone swarm (10-50+ targets đồng thời), cognitive overload xảy ra
- Operator hoặc freeze (không hành động) hoặc panic-fire (bắn sai mục tiêu)

Quan trọng hơn: KHÔNG MỘT nghiên cứu nào đo lường cognitive load thực tế lên người vận hành C-UAS. Field tests đo "system effectiveness" (bao nhiêu drone bị bắn hạ) nhưng KHÔNG đo "operator decision quality" (bao nhiêu quyết định đúng/sai, thời gian reaction, stress level).

Contradiction giữa sources: US doctrine nói "every soldier is drone defender" (general-purpose), nhưng UN Guidelines yêu cầu "dedicated C-UAS Planner, Operator, Analyst" (specialist). Sự khác biệt = khác biệt về user skill assumption.

## Tại Sao Điều Này Quan Trọng?

Cho Workshop X, đây là non-delegable design constraint cho MỌI sản phẩm C-UAS sim:

1. **UI/UX là quyết định thiết kế Core (CEO)** — không offload cho AI hay developer. Sai UI = sản phẩm vô dụng dù hardware tốt
2. **Vietnam context đặc biệt**: lực lượng nghĩa vụ quân sự (conscript-heavy), rotation cao, thời gian huấn luyện ngắn → UI PHẢI đơn giản hơn NATO standard
3. **ACH opportunity**: AI-enabled auto-engagement (giảm cognitive load cho operator) là ACH application trực tiếp — AI bù đắp cho skill gap của operator
4. **Test with real users**: prototype UI PHẢI test với binh sĩ Việt Nam thực tế, không phải designer giả định

**Thiết kế rule**: Nếu operator cần > 3 bước để engage một target → redesign. Nếu operator cần đọc manual để hiểu alert → redesign. Cognitive ceiling là hard constraint, không phải soft preference.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — UI design cho C2 là judgment call, nhưng MỨC ĐỘ automation (human-in-loop vs human-on-loop) cũng là CEO judgment
- [[AI Dependency Spiral (R3)]] — quá nhiều auto-engagement → operator mất skill → khi AI fail, operator không thể manual fallback
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — sim cần train decision-making speed, không phải button-pressing accuracy

## Nguồn Gốc

- CRS R48477 DoD Counter-UAS (Tier S) — FAADC2 cognitive burden
- NTC Training Report (Tier S) — soldier hesitation/confusion observations
- UN Guidelines on C-UAS (Tier S) — specialist personnel structure
- CL-2 Assumption Killer analysis
- Research pipeline "Counter-UAS + Counter-USV Training," 2026-04-22
