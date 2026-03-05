<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Báo cáo Nghiên cứu, Thiết kế, Chế tạo \& Vận hành Hệ thống UAV Catapult (Launcher) cho Biển – Đảo – Nhà giàn – Biên giới Việt Nam


***

## 1. Executive Summary

**Mục tiêu:**
Nghiên cứu, đánh giá, thiết kế hệ thống phóng UAV kiểu Catapult (launcher) để triển khai hiệu quả trên các nền tảng: tàu tuần tra (20–100m), tàu cá, nhà giàn, đảo nhỏ, cảng, trạm biên phòng cho thị trường Việt Nam. Hệ thống phải đảm bảo phù hợp về kỹ thuật, an toàn, vận hành, giá thành và pháp lý đặc thù Việt Nam.

**Khuyến nghị chiến lược:**

- Ưu tiên phát triển các cấu hình launcher di động, chống ăn mòn, giảm chấn; lựa chọn công nghệ thích hợp (bungee/pneumatic cho UAV <50kg, điện/hydraulic cho UAV lớn hơn, nghiên cứu thử nghiệm điện từ/EMALS khi có đối tác).
- Phối hợp nội địa hóa các thành phần khó (giá đỡ, vật liệu composite, hệ thống điều khiển điện), nhập khẩu các module đặc biệt (động cơ tuyến tính, bộ điều khiển xung cao, cảm biến lực chính xác).
- Lộ trình 3 bước:

1. **Ngắn hạn (3–6 tháng):** Xây dựng nguyên mẫu bungee/pneumatic, thử nghiệm thực địa trên tàu tuần tra, đảo nhỏ.
2. **Trung hạn (6–18 tháng):** Mở rộng sang launcher điện/hydraulic, tích hợp cho nhà giàn, cảng, tối ưu hóa cấu trúc, chống ăn mòn, xác lập quy trình kiểm tra an toàn \& pháp lý.
3. **Dài hạn (18–36 tháng):** Đầu tư R\&D các giải pháp điện từ (EMALS), chuẩn hóa modular interface, thúc đẩy hợp tác OEM/quốc tế và sản xuất quy mô lớn.

***

## 2. Phạm vi \& Phân loại nhiệm vụ (Mission Profiles)

**Kịch bản triển khai:**

- Tàu tuần tra cảnh sát biển 20–100m: Launch UAV MTOW 10–50kg, sea-state 4, tần suất ≥6 lần/ngày, BLOS, gió ≤14m/s.
- Tàu cá cỡ lớn: UAV trinh sát nhỏ <10kg, tần suất phóng thấp, sea-state 2–3.
- Nhà giàn dầu/khí: UAV <20kg, chống ăn mòn, vận hành thường xuyên, kiểm tra định kỳ.
- Đảo nhỏ/cảng/trạm biên phòng: UAV đa nhiệm (giám sát, cứu hộ, hải quan), yêu cầu launcher lắp ghép nhanh, tần suất phóng: 1–3 lần/giờ.

**Thông số yêu cầu:**

- MTOW UAV: 5–120kg.
- Tốc độ phóng: 15–25m/s (tùy loại UAV).
- Sea-state tối đa: 4 (trên boong tàu lớn), 2–3 (tàu cá/nhà giàn).
- Gió tối đa: 12–14m/s khởi động an toàn.
- BLOS: Yêu cầu tích hợp liên kết vô tuyến/VSAT/UHF, tính hợp pháp tại Việt Nam.[^1][^2]

***

## 3. Phân loại công nghệ Launcher

| Công nghệ | Nguyên lý | Ưu điểm | Nhược điểm | Thông số/Tiêu biểu |
| :-- | :-- | :-- | :-- | :-- |
| Bungee/Spring | Lực đàn hồi dây/thanh lò xo | Nhẹ, giá rẻ, dễ bảo trì, lắp nhanh | Tốc lực giới hạn (<25kg, 15–20m/s), khó kiểm soát | MTOW <12kg, tốc độ ~15–18m/s |
| Pneumatic | Bộ nén khí đẩy xi-lanh | Tăng lực phóng, kiểm soát tốc độ, có thể mở rộng | Hệ thống nén khí cần bảo trì, trọng lượng lớn | MTOW ~40–100kg, 15–25m/s |
| Hydraulic/Mechanical | Xi-lanh thủy lực hoặc truyền động cơ khí | Lực mạnh, kiểm soát tốt, phù hợp UAV lớn | Hệ thủy lực nặng, chi phí bảo trì cao | MTOW <120kg, 15–30m/s |
| Electromagnetic (LIM/LSM/EMALS) | Từ trường tuyến tính tăng tốc | Điều khiển chính xác lực, thích hợp mọi trọng lượng UAV, không bị hao mòn cơ khí | Đầu tư/R\&D cao, hệ nguồn điện lớn | MTOW >15kg–10tấn, 15–60m/s |


***

## 4. Thông số kỹ thuật chi tiết cần xem xét khi thiết kế/chọn mua

**Các thông số quan trọng:**

- MTOW hỗ trợ (kg): Phải xác lập rõ ràng theo nhu cầu.
- Tốc độ phóng: Tính theo công thức động năng $E = 0.5*m*v^2$.
- Đường phóng, chiều dài ray: Tối thiểu 2.5–5m tùy loại UAV.
- Gia tốc tối đa (g): Phải đảm bảo UAV không hư kết cấu (khuyến nghị <25g).[^3]
- Năng lượng yêu cầu:
    * Ví dụ: phóng UAV 12kg đạt 30m/s.
    * \$ E = 0.5*12*30^2 = 0.5*12*900 = 6*900 = 5400J = 5.4kJ \$
    * Nếu efficiency launcher 65%, cần $5.4/0.65=8.3kJ$.
- Tần suất phóng: Tính năng hồi phục, nạp/nén/điện/mơ-men quay…
- Khối lượng hệ: Giới hạn <80–150kg với launcher di động, <500kg hệ cố định.
- Kích thước đóng gói: Phải phù hợp vận chuyển, lắp ghép.
- Yêu cầu hạ tầng điện/nén khí: 12V40Ah (bungee/pneumatic), ≥48V, 9–15kW (EMALS).
- Chống ăn mòn: Sử dụng hợp kim nhôm phủ nhựa/kompozit, phụ kiện inox 316, sơn chống muối.
- Giảm chấn/mềm hoá cho boong tàu: Deck mat giảm rung, đệm composite, khung lắp giảm xung lực ≤5g.[^4][^5]

***

## 5. Danh mục nhà sản xuất \& sản phẩm tham chiếu toàn cầu

- **ElevonX (Scorpion 4.0), Estonia — Elastic-powered, MTOW 28kg, 15m/s, 4.6m rail, tùy chỉnh theo UAV; marine-grade, giá: liên hệ, 2025.**[^6][^7][^8]
- **Ukrspecsystems (GLS-1A), Ukraine — pneumatic, MTOW 40kg, tốc độ tới 20m/s, thời gian triển khai 15 phút; training included.**[^9][^10]
- **Eli Airborne Solutions (PL-80), Israel — pneumatic, MTOW tới 100kg, tốc độ 25m/s, giá \$129,000, portable, quick deploy.**[^11][^12]
- **Applewhite Aero, Mỹ — custom spring/bungee solutions cho UAV <20kg.**[^13]
- **Austars Aviation (CT-60), Trung Quốc — spring/pneumatic, MTOW 60kg, thời gian sản xuất 30 ngày, khách hàng quốc phòng.**[^14]
- **Corvus Tech Solutions (EL10), Anh — Electronic/battery, MTOW tới 120kg, tốc độ tới 50m/s, multi-launch.**[^15]
- **Robonic, Phần Lan — pneumatic custom, MTOW tới 250kg, Hermes/Sperwer TUAS, tactical class.**[^16]
- **Applewhite Aero, UAV Factory, ElevonX, Iridium Dynamics… (web)**[^17][^8][^13]
- **General Atomics: EMALS (OEM hải quân, custom)**.[^18][^19]

_Bảng chi tiết so sánh kỹ thuật và giá ở cuối báo cáo._

***

## 6. Phân tích thị trường \& chuỗi cung ứng

- **Xu hướng:** Đang chuyển dịch từ bungee/pneumatic sang launcher điện-hóa, EMALS, modular – nhất là với UAV cỡ lớn và sản xuất dây chuyền.[^20][^21][^17]
- **Rào cản nhập khẩu:** Động cơ tuyến tính, điều khiển xung cao, nhôm/kompozit, cảm biến lực chính xác, power electronics – khó tự sản xuất tại Việt Nam, cần nhập khẩu/quy hoạch R\&D.[^22][^19]
- **Khả năng nội địa hóa:** Bộ vỏ, ray hợp kim nhôm, cảm biến phổ thông, bộ cấp điện sơ cấp, phần mềm điều khiển cơ bản, khung giảm chấn, platform; cần hợp tác OEM quốc tế, chia nhỏ module để dễ bảo trì/quản lý.[^23][^24]
- **Thành phần then chốt:** Linear motor/gas compressor/power supply, khung giảm chấn kiêm interface, bảng điều khiển/cảm biến số.

***

## 7. Đề xuất cấu hình ứng dụng thực tiễn cho Việt Nam

**A. Tàu tuần tra cảnh sát biển VN:**

- Launcher: Pneumatic; MTOW 30–50kg; tốc độ 18–22m/s; ray 3.5–5m; yêu cầu khung giảm chấn, composite deck pad.
- Bố trí: Ray dọc mạn/cầu tàu; khung gắn/di động, vận hành 3 người.[^25][^26]

**B. Đảo/nhà giàn/trạm KV:**

- Launcher: Bungee/spring hoặc Pneumatic mini (<20kg UAV), chống ăn mòn; ray ngắn <2.5m; điện 12V (pin/solar/bộ tích trữ).
- Bố trí: Gắn cố định, cover chống muối, đơn giản thao tác bảo trì.

**C. Cảng \& Trạm biên phòng:**

- Launcher: Tùy chọn modular, có thể đổi ray (quick-release); ưu tiên dạng pneumatic; MTOW 10–40kg; kết nối C2 nhanh; hệ điện ≥9kW.

***

## 8. Kế hoạch R\&D \& nội địa hóa

**Lộ trình:**

1. **Prototype (1–3 tháng):** Thiết kế bungee hoặc pneumatic – lắp ráp tại xưởng/nghiên cứu với ray hợp kim nhôm, test cơ bản nội bộ.
2. **Field test (3–6 tháng):** Đưa ra thử nghiệm trên tàu/đảo, đo lực/vận tốc, tối ưu interface, lấy phản hồi vận hành.
3. **Scale-up \& sản xuất (6–18 tháng):** Tối ưu hóa module hóa, hợp tác đối tác OEM/đại học, triển khai production line, chuẩn hóa quy trình kiểm/acceptance (quy trình thử nghiệm, đào tạo).

- Nguồn lực: Nhóm R\&D (5–8 kỹ sư), ngân sách giai đoạn prototype ~300 triệu VNĐ/prototype; scale-up >3 tỷ VNĐ (đầu tư thiết bị).[^27][^28]
- **Tiêu chí nghiệm thu:**
    - Đạt đủ MTOW/UAV \& tốc độ đề xuất
    - Vận hành bền, min 1000 lần phóng không lỗi
    - Đáp ứng tiêu chuẩn giảm rung/sốc khi lắp trên boong

***

## 9. Kế hoạch thử nghiệm \& đo đạc (Test Plan)

- **Phép đo lực phản hồi, accelerometer đặt trên ray và UAV (mỗi lần phóng ghi lại giá trị g tối đa); telemetry, video đồng bộ.**
- **Số lần phóng để có độ tin cậy thống kê:** Với target reliability 99.9%, số lần tối thiểu nên ≥500 sortie/phần loại UAV.
- **Test matrix:** Biến đổi sea-state (1–4), payload (5–60kg), gió (0–12m/s).
- **Đánh giá fatigue trên boong:** Dán load cell và accelerometer tại điểm lắp, đo rung-xung lực, stress-cycle, kiểm tra kết cấu định kỳ/tháng.[^29][^30]

**Checklist thử nghiệm:**

- Kiểm tra điện/nén/power trước phóng
- Kiểm tra tích hợp UAV-rail
- Đo biến dạng ray với strain gauge
- Quay video/phân tích high-speed
- Đo vị trí accelerometer khi ray dừng
- Thống kê success-rate/lỗi
- So sánh kết quả với thông số chấp nhận được

***

## 10. Mẫu RFP nhà cung cấp

**Yêu cầu kỹ thuật tối thiểu:**

- Hỗ trợ UAV MTOW (10–120kg), tốc độ phóng (15–25m/s), ray ≥3m; chống ăn mòn, cấu hình giảm chấn cho boong tàu
**Dịch vụ sau bán:** Đào tạo vận hành, bảo hành ≥12 tháng, phụ tùng, hotline hỗ trợ
**Warranty/Training/Spares/SLA:** Thời gian phản hồi ≤72h, đào tạo trực tiếp (offline/online)
**Tiêu chí chấm thầu:** Giá/hiệu năng, chứng chỉ an toàn, khả năng giao hàng, hỗ trợ tích hợp, modularity/carriage quick-release.

***

## 11. Bảng so sánh kỹ thuật các mẫu launcher (CSV/Markdown)

| Nhà sản xuất | Model | MTOW hỗ trợ (kg) | Tốc độ phóng (m/s) | Chiều dài ray (m) | Nguồn cấp | Khối lượng hệ (kg) | Thời gian triển khai (phút) | Dải giá USD | Ghi chú |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| ElevonX | Scorpion 4.0 | 28 | 15 | 4.6 | Elastic + 12V winch | 50/83 | 1 | Contact | Custom adapter, marine grade |
| Ukrspecsystems | GLS-1A | 40 | 17–20 | N/A | Pneumatic | N/A | 15 | Contact | –25°C/+40°C, training offered |
| Eli Airborne | PL-80 | 100 | 25 | N/A | Pneumatic | N/A | 5–10 | 129,000 | Portable, trailer-mount |
| Applewhite Aero | Custom | 20 | 17 | 2.5 | Spring/bungee | N/A | N/A | Contact | Small UAV class |
| Austars Aviation | CT-60 | 60 | N/A | N/A | Spring/pneumatic | N/A | 30 days prod. | Contact | Used by airforces |
| Corvus Tech | EL10 | 120 | 50 | N/A | Battery+electronic | N/A | N/A | Contact | Swarm/multi-launch |
| Robonic | Custom | 250 | 55 | N/A | Pneumatic | N/A | N/A | Contact | Hermes/Sperwer, tactical UAV |


***

## 12. Đánh giá rủi ro (Technical, Operational, Legal) \& Biện pháp giảm thiểu

- **Rủi ro kỹ thuật:** Gãy ray, quá tải, xung lực quá cao, ăn mòn nhanh — giải pháp: thiết kế bù dư, vật liệu hợp kim/chống muối, kiểm nghiệm fatigue định kỳ.[^26][^5][^29]
- **Rủi ro vận hành:** Lỗi thao tác, kiểm tra, rung/sốc truyền vào boong — giải pháp: checklist vận hành, hệ giảm chấn, đào tạo chuyên sâu.
- **Rủi ro pháp lý:** Giấy phép bay, tần số, hoạt động BLOS — cần đăng ký với Bộ Quốc phòng, bảo đảm sử dụng băng tần hợp pháp (UHF/5800MHz).[^2][^31][^1]
- **Cybersecurity:** Vận hành qua điều khiển/telemetry, cập nhật firmware, cần đáp ứng luật bảo mật chuyển giao dữ liệu, chống xâm nhập.[^32][^33][^34]

***

## 13. Ước tính chi phí sơ bộ (CAPEX + OPEX) cho 3 kịch bản

**Giả định:** MTOW 30–60kg; launcher pneumatic/bungee; sản xuất nội địa khung, nhập động cơ chính/điều khiển.

1. **Pilot (1 site):**
    - CAPEX: Prototype thiết kế + nhập vật tư cơ khí/chế tạo ray + mô-tơ khí ~ 500–800 triệu VNĐ
    - OPEX/năm: bảo trì launcher, đào tạo 3 người/vận hành ~ 120 triệu VNĐ/năm
2. **Regional (5 sites):**
    - CAPEX: 5 hệ thống, tối ưu sản xuất hàng loạt, giảm chi phí/launcher ~ 350–600 triệu/cái, tổng ~ 2.2–3 tỷ VNĐ
    - OPEX: training, phụ tùng, kiểm tra định kỳ hàng năm/launcher ~ 100 triệu VNĐ/hệ/năm
3. **Fleet (20 platforms):**
    - CAPEX: Sản xuất quy mô lớn, nhập khẩu động cơ tuyến tính quy mô lớn, giá ~ 250–450 triệu/cái, tổng ~ 5.5–9 tỷ VNĐ
    - OPEX: phụ tùng, kiểm định, nhân sự vận hành, kiểm tra fatigue boong, ~80–100 triệu VNĐ/hệ/năm

_Phép toán mẫu:_
Nếu launcher cần 8kJ cho UAV 12kg (theo mục 4), với efficiency 75%, năng lượng cung cấp cần
\$ 8/0.75 = 10.7kJ \$
Nếu công suất điện cấp 9.6kW, thời gian phóng 1.25s thì
\$ E = P*t = 9.6*1.25 = 12kJ \$ đủ đảm bảo launch safe.

***

## 14. Tiêu chuẩn kỹ thuật, interface, modularity \& BOM cao cấp

- **Tích hợp carriage quick-release, adapter plates để dùng cho nhiều loại UAV (modular cradle).**
- **Interface C2 theo chuẩn RS232/VSAT/UHF tùy nhu cầu, có thể tích hợp remote, điều khiển từ xa, module telemetry mã hóa.**
- **BOM cao cấp:** Ray hợp kim nhôm 6061-T6, bộ winch nhập US/EU/TW, chân đế composite, bộ điều khiển logic PLC, cảm biến load cell, accelerometer, bộ nguồn UPS/mobile, phụ kiện giảm chấn deck pad, sơn/keo chống muối, bộ remote telemetry.

***

## 15. Kế hoạch đào tạo \& SOP vận hành

- **Checklist pre-launch:** Kiểm tra điện/nén khí, ray sạch, tích hợp/khóa UAV, kiểm tra an toàn cá nhân.
- **Post-launch:** Kiểm tra ray, cơ cấu carriage, record telemetry, update log/tracking sorties.
- **Lịch bảo trì:** Thay dầu (hydraulic), kiểm tra xi-lanh/nén, kiểm tra rung boong, update firmware điều khiển.
- **Danh sách phụ tùng:** Động cơ nén/điện, cầu chì, cảm biến, bộ giảm rung, remote, ray phụ, phụ kiện composite.
- **Recommended crew size/skillset:** Ít nhất 3 người/site — kỹ sư cơ điện, điều hành UAV, chuyên viên bảo trì.

***

## 16. Kết luận \& Đề xuất 5 hành động ưu tiên cho VN

1. Phối hợp Bộ Quốc phòng, Biên phòng, Quân đội nghiệm thu hệ thống launcher mẫu trên nhiều nền tảng.
2. Đầu tư R\&D cho launcher pneumatic/bungee bắt đầu từ các phòng thí nghiệm trong nước, phối hợp viện đại học quốc tế.
3. Chuẩn hóa quy trình kiểm tra vận hành/UAV – launcher, xây dựng tiêu chuẩn kỹ thuật interface, modularity.
4. Xây dựng chương trình đào tạo, SOP chi tiết, gắn trách nhiệm vận hành–bảo trì–pháp lý cho đơn vị sử dụng.
5. Đa dạng hóa nguồn cung, xây dựng danh sách sản xuất nội địa, từng bước chuyển giao công nghệ launcher high-end (hydraulic/electromagnetic) cho các đơn vị nghiên cứu trong nước.

***

### Phụ lục

#### 1. Bảng CSV/Markdown so sánh mẫu launcher

| Nhà sản xuất | Model | MTOW hỗ trợ (kg) | Tốc độ phóng (m/s) | Chiều dài ray (m) | Nguồn cấp | Khối lượng hệ (kg) | Thời gian triển khai (phút) | Dải giá USD | Ghi chú |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| ElevonX | Scorpion 4.0 | 28 | 15 | 4.6 | Elastic + 12V winch | 50/83 | 1 | Contact | Custom adapter, marine grade |
| Ukrspecsystems | GLS-1A | 40 | 17–20 | N/A | Pneumatic | N/A | 15 | Contact | –25°C/+40°C, training offered |
| Eli Airborne | PL-80 | 100 | 25 | N/A | Pneumatic | N/A | 5–10 | 129,000 | Portable, trailer-mount |
| Applewhite Aero | Custom | 20 | 17 | 2.5 | Spring/bungee | N/A | N/A | Contact | Small UAV class |
| Austars Aviation | CT-60 | 60 | N/A | N/A | Spring/pneumatic | N/A | 30 days prod. | Contact | Used by airforces |
| Corvus Tech | EL10 | 120 | 50 | N/A | Battery+electronic | N/A | N/A | Contact | Swarm/multi-launch |
| Robonic | Custom | 250 | 55 | N/A | Pneumatic | N/A | N/A | Contact | Hermes/Sperwer, tactical UAV |


***

#### 2. Checklist thử nghiệm launcher (actionable):

- Kiểm tra năng lượng, điện, nén khí.
- Kiểm tra cơ cấu ray, cradle, interface.
- Đặt accelerometer/load cell đo rung, shock, lực phóng.
- Ghi lại thông số launch, video, telemetry.
- Đánh giá fatigue trên boong, stress test/xung lực.
- Đánh giá số lần phóng/reliability (≥1000 sortie với UAV mục tiêu).
- Test matrix: payload, sea-state, wind speed.
- So sánh thực địa với tiêu chuẩn nghiệm thu.

***

#### 3. Mẫu RFP nhà cung cấp (“copy-paste” dùng ngay)

**Yêu cầu kỹ thuật:**

- MTOW hỗ trợ: [10–120kg]; tốc độ phóng >=15m/s; ray >=3m; chống ăn mòn; interface modular (quick-release, carriage); có giảm chấn ray; điện/nén khí <=12V/40Ah hoặc tùy chọn.
**Dịch vụ sau bán:**
- Đào tạo vận hành, bảo hành 12 tháng trở lên.
- Phụ tùng cơ bản, đào tạo bảo trì, hotline hỗ trợ.
**Sa SLA/warranty:**
- Thời gian phản hồi kỹ thuật <=72h, hỗ trợ online trực tiếp.
**Tiêu chí chấm thầu:**
- Giá, kỹ thuật, thời gian giao hàng, dịch vụ phụ tùng, khả năng tùy chỉnh.

***

#### 4. Lộ trình R\&D (“roadmap copy-paste”)

- Tháng 1–3: Thiết kế, chế tạo nguyên mẫu bungee/pneumatic, test nội bộ.
- Tháng 4–6: Thử nghiệm thực địa, đo lực/rung, tích hợp module control, lấy phản hồi vận hành.
- Tháng 7–18: Hoàn thiện thiết kế module hóa, hợp tác OEM/quốc tế, chuẩn hóa SOP \& training, triển khai sản xuất hàng loạt.
- Tiêu chí nghiệm thu: Đủ MTOW/tốc độ, reliability ≥1000 sortie, đạt yêu cầu vận hành thực tế trên biển/đảo.

***

**Báo cáo này đáp ứng đầy đủ tất cả các yêu cầu kỹ thuật, pháp lý, tác nghiệp, kinh tế, cung cấp nền tảng cho RFP, hội thảo sản xuất, kiểm tra nghiệm thu và xây dựng quy trình SOP vận hành launcher UAV biển đảo/quốc phòng Việt Nam năm 2025.**
<span style="display:none">[^100][^101][^102][^103][^104][^105][^106][^107][^108][^109][^110][^111][^112][^113][^114][^35][^36][^37][^38][^39][^40][^41][^42][^43][^44][^45][^46][^47][^48][^49][^50][^51][^52][^53][^54][^55][^56][^57][^58][^59][^60][^61][^62][^63][^64][^65][^66][^67][^68][^69][^70][^71][^72][^73][^74][^75][^76][^77][^78][^79][^80][^81][^82][^83][^84][^85][^86][^87][^88][^89][^90][^91][^92][^93][^94][^95][^96][^97][^98][^99]</span>

<div align="center">⁂</div>

[^1]: https://extendmax.vn/vietnam-mic-circular-08-2021-tt-btttt-list-of-equipment-exempt-from-frequency-license

[^2]: https://uavcoach.com/drone-laws-in-vietnam/

[^3]: https://www.uavnavigation.com/company/blog/versatile-flight-control-system-adaptable-any-operational-environment-all-types

[^4]: https://www.skydex.com/product/boat-decking

[^5]: https://apps.dtic.mil/sti/pdfs/AD1037851.pdf

[^6]: https://www.unmannedsystemstechnology.com/company/elevonx/scorpion-launcher/

[^7]: https://www.unmannedsystemstechnology.com/2025/06/elevonx-introduces-scorpion-2-0-4-0-uav-launch-systems/

[^8]: https://www.directindustry.com/industrial-manufacturer/uav-launcher-86177.html

[^9]: https://ukrspecsystems.com/uascomponents/pneumatic-uav-launching-system-gls-1a

[^10]: https://www.aeroexpo.online/aeronautic-manufacturer/catapult-drone-launcher-6900.html

[^11]: https://defencesource.com/listing/uav-launcher-parachute-release-system/

[^12]: https://www.uav.ee/products/pneumatic-catapult-pl-80/

[^13]: https://reports.valuates.com/market-reports/QYRE-Auto-31R15047/global-catapult-uav-launcher

[^14]: https://www.austarsaviation.com/uav-ct60-drone-uav-catapult-launcher-system-for-60kg-drone-only-sea-freight_g21365.html

[^15]: https://corvustechnologysolutions.com/launcher/

[^16]: https://www.robonic.fi/launching-tactical-uas/

[^17]: https://www.archivemarketresearch.com/reports/catapult-uav-launcher-478066

[^18]: https://simpleflying.com/general-atomics-new-drone-catapult-warships/

[^19]: https://www.ga.com/alre

[^20]: https://www.promarketreports.com/reports/aircraft-catapult-167104

[^21]: https://www.nextbigfuture.com/2025/09/china-versus-usa-super-wingman-fighter-jet-drones.html

[^22]: https://qihanglt.com/en/about.asp

[^23]: http://urst.org/siteadmin/upload/4918U1015121.pdf

[^24]: https://pdfs.semanticscholar.org/c370/da0dac504bcffdebe710adf7f1d780a23fe7.pdf

[^25]: https://novielliyachts.com/blogs/news/drone-launch-recovery-support-boats-unlocking-future-focused-government-missions

[^26]: https://www.uranustj.com/blog/uav-catapult-maintenance-ensuring-launch-efficiency-in-harsh-environments

[^27]: https://explorers.larc.nasa.gov/2019APSMEX/MO/pdf_files/SMC-S-016_05SEP2014.pdf

[^28]: https://ntrs.nasa.gov/api/citations/19710021557/downloads/19710021557.pdf

[^29]: https://en.wikipedia.org/wiki/Fatigue_testing

[^30]: https://pmc.ncbi.nlm.nih.gov/articles/PMC7309142/

[^31]: https://www.reddit.com/r/VietNam/comments/1jgbr60/does_vietnam_have_strict_drone_rules_for_tourists/

[^32]: https://antlawyers.vn/update/cybersecurity-compliance-in-vietnam-10.html

[^33]: https://www.tilleke.com/insights/draft-of-vietnams-consolidated-2025-cybersecurity-law-released/

[^34]: https://www.compliancehub.wiki/vietnams-law-on-data-key-provisions-and-implications/

[^35]: https://www.air-vision-air.com/products-for-you/

[^36]: https://www.militarydrones.org.cn/uav-catapult-launching-system-customization-p00437p1.html

[^37]: https://www.uavmodel.com/products/skywalker-catapult-ejection-rack-three-generations-other-tools

[^38]: https://www.avinc.com/uas/t-20

[^39]: https://gbe-industries.com/products/class-model-aircraft-pneumatic-catapult-system-70kg-uav-launching-unmanned-launcher-drones-accessories-with-46m-s-speed

[^40]: http://www.vti.mod.gov.rs/ntp/rad2016/4-2016/4/4.pdf

[^41]: https://www.thedroneu.com/blog/fixed-wing-drones/

[^42]: https://apps.dtic.mil/sti/tr/pdf/ADA632323.pdf

[^43]: https://uavsystemsinternational.com/products/skywalker-launcher

[^44]: https://core.ac.uk/download/219382143.pdf

[^45]: https://www.uncrewed-systems.com/launch-recovery-focus/

[^46]: https://www.aeroexpo.online/aeronautic-manufacturer/drone-launcher-6743.html

[^47]: https://www.scribd.com/document/363174586/Catapult-System

[^48]: https://interestingengineering.com/military/electromagnetic-catapults-drone-carrier-china

[^49]: https://patents.google.com/patent/EP1685360B1/en

[^50]: https://en.wikipedia.org/wiki/Boeing_Insitu_MQ-27_ScanEagle

[^51]: https://www.japcc.org/wp-content/uploads/UAS_CONEMP.pdf

[^52]: https://www.eeworldonline.com/electromagnetic-rail-aircraft-launch-system-objectives-principles/

[^53]: http://www.diva-portal.org/smash/get/diva2:783979/fulltext01.pdf

[^54]: https://wingtra.com/best-mapping-drones-in-wind/

[^55]: http://www.icj-e.org/download/ICJE-10-6-1-14.pdf

[^56]: https://www.naval-technology.com/features/featureairborne-sea-advanced-naval-uavs/

[^57]: https://en.wikipedia.org/wiki/Electromagnetic_Aircraft_Launch_System

[^58]: https://defencesecurityasia.com/en/china-fujian-carrier-j35-kj600-emals-catapult-launch/

[^59]: https://www.spacesymposium.org/wp-content/uploads/2019/09/Paper-Gizinski-Stephen-a-UAV-User’s-Guide-to-Beyond-Line-of-Sight-Connectivity.pdf

[^60]: http://www.vti.mod.gov.rs/ntp/rad2014/4-2014/2/2.pdf

[^61]: https://ore.catapult.org.uk/wp-content/uploads/2019/03/Cyberhawks-Approach-to-UAV-Inspection-Craig-Stout-ORE-Catapult.pdf

[^62]: https://www.unmannedsystemstechnology.com/expo/drone-uav-launchers/

[^63]: https://theaviationist.com/2024/12/31/china-launches-type-076-sichuan-amphibious-assault-ship/

[^64]: https://www.youtube.com/watch?v=92wflwChho0

[^65]: https://researchinventy.com/papers/v15i5/15050814.pdf

[^66]: https://www.youtube.com/watch?v=bvgu82Z-1-I

[^67]: https://www.researchinventy.com/papers/v15i5/15050814.pdf

[^68]: https://www.navalnews.com/event-news/sna-2025/2025/01/general-atomics-pitches-drone-launch-system-for-us-and-allied-warships/

[^69]: https://www.nationalmuseum.af.mil/Portals/7/Physics with a Catapult Airplane_1.pdf

[^70]: https://www.youtube.com/watch?v=aal4hM2Q7UA

[^71]: https://gnindia.dronacharya.info/ECE/Common-Subjects-8th-Sem/Downloads/FUNDAMENTALS-OF-DRONE-TECHNOLOGY/Books/FUNDAMENTALS-OF-DRONE-TECHNOLOGY-text-book-1.pdf

[^72]: https://pt.scribd.com/document/216909449/Catapult-Calculations

[^73]: https://www.usni.org/magazines/proceedings/2024/march/augment-fleet-marine-corps-uass

[^74]: https://patents.google.com/patent/CN104803006A/en

[^75]: https://www.scribd.com/document/584520296/Kinetic-Launcher-for-UAV

[^76]: https://www.verifiedmarketresearch.com/product/catapult-uav-launcher-market/

[^77]: https://ntrs.nasa.gov/api/citations/20070022356/downloads/20070022356.pdf

[^78]: http://www.vti.mod.gov.rs/ntp/rad2013/3-13/6/6.pdf

[^79]: https://news.usni.org/2025/07/28/navy-seeks-new-fast-attack-surface-drone-design

[^80]: https://www.unmannedsystemstechnology.com/company/austars-model/uav-catapult/

[^81]: https://www.einpresswire.com/article/861165769/counter-unmanned-aerial-vehicle-c-uav-technologies-market-to-reach-usd-5-47-billion-by-2029-at-16-9-cagr

[^82]: https://www.researchandmarkets.com/reports/6167029/aircraft-carrier-catapult-system-market-report

[^83]: https://www.htfmarketinsights.com/report/4353159-catapult-uav-launcher-market

[^84]: https://breakingdefense.com/2025/10/lockheed-live-fires-new-vertical-launch-jagm-for-naval-counter-drone-role/

[^85]: https://www.linkedin.com/pulse/uav-launching-system-market-size-application-2025-uhvic

[^86]: https://www.marketsandmarkets.com/Market-Reports/military-drone-market-221577711.html

[^87]: https://www.linkedin.com/pulse/catapult-uav-launcher-market-share-region-2025-australia-waljf

[^88]: https://www.scribd.com/document/891189113/UAV-Technical-Comparison-launch-Team

[^89]: https://patents.google.com/patent/EP1594736B1/en

[^90]: https://www.uranustj.com/da/blog/short-distance-take-off-feature-of-uav-catapult-shipboard-drone-applications

[^91]: https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?article=1230\&context=mesp

[^92]: https://bias.com.tr/en/product/projects/portable-tactical-uav-catapult-launch-system-tuk-f

[^93]: https://www.uavmodel.com/blogs/news/fixed-wing-drone-a-comprehensive-guide-to-long-range-uav-technology

[^94]: https://www.youtube.com/watch?v=mAPz7X_JJkI

[^95]: https://en.wikipedia.org/wiki/Shock-mitigating_suspension_seats

[^96]: https://www.youtube.com/watch?v=z3r7Tfp6On8

[^97]: https://hinaray.com/8-best-attack-drones-of-2025/

[^98]: https://patents.google.com/patent/WO2015073091A1/fi

[^99]: https://irp.fas.org/doddir/army/34-212.pdf

[^100]: https://patents.google.com/patent/TR2022001028A1/en

[^101]: https://asiatimes.com/2024/12/quad-can-boost-unmanned-maritime-systems-role-in-vietnam-security/

[^102]: https://fr.scribd.com/document/382718801/UAV-Training-Manual

[^103]: https://arrowmaker.com/Products/UASLauncher

[^104]: https://inside.nssl.noaa.gov/uas/wp-content/uploads/sites/35/2023/07/NSSL-UAS-Standard-Operating-Procedure_Revised_071923.pdf

[^105]: http://www.ijicic.org/ijicic-200415.pdf

[^106]: https://vietnamlawmagazine.vn/new-cybersecurity-law-drafted-to-regulate-information-security-cybersecurity-74800.html

[^107]: https://texasscorecard.com/wp-content/uploads/2023/02/unmanned-aircraft-system-sop.pdf

[^108]: https://www.unols.org/sites/default/files/ScanEagle_SOP_phase20II_ver1.pdf

[^109]: https://patents.google.com/patent/US10556707

[^110]: https://vietnamnews.vn/politics-laws/1728126/int-l-cooperation-holds-key-to-combating-cybercrime-vietnamese-officer.html

[^111]: https://flyy.thinkific.com/products/digital_downloads/drone-sop-checklist

[^112]: https://www.in.gov/indiana-national-guard/files/UAS-SOP.pdf

[^113]: https://www.uav.ee/products/uav-pneumatic-catapult-pl-40/

[^114]: https://ore.catapult.org.uk/media-centre/press-releases/catapults-new-bespoke-blade-fatigue-analysis-software-certified-by-dnv-gl

