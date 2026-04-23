<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Yêu Cầu Kỹ Thuật Cho Target Drones

Dựa trên nghiên cứu các hệ thống target drone hiện đại trên toàn cầu, dưới đây là các yêu cầu kỹ thuật chi tiết được phân loại theo cấp độ và chức năng.

## 1. Yêu Cầu Hiệu Năng Bay Cơ Bản

Target drones cần đáp ứng các thông số hiệu năng bay tùy theo loại mục tiêu mô phỏng:

### Target Drone Cấp Cơ Bản (Entry-Level)

- **Tốc độ**: 100-300 km/h, phù hợp mô phỏng UAV thương mại hoặc mục tiêu tầm thấp[^1][^2]
- **Độ cao hoạt động**: Từ 30-50m đến 3,500m
- **Khả năng cơ động**: 3-5G, đủ cho các bài tập huấn luyện cơ bản
- **Thời gian bay**: 45-60 phút
- **Trọng lượng**: 25-90 kg MTOW
- **Phóng/Thu hồi**: Catapult pneumatic, thu hồi bằng dù và airbag[^2]


### Target Drone Hiệu Suất Cao

- **Tốc độ**: 600-1,000 km/h (Mach 0.8-0.95), mô phỏng tên lửa hành trình và máy bay chiến đấu[^3][^4][^5]
- **Độ cao**: Từ **2.5-6m** (sea-skimming) đến **12,000-15,000m**[^6][^3]
- **Khả năng cơ động**: **8-9G**, cho phép mô phỏng các cơ động chiến thuật phức tạp[^7][^5][^3]
- **Thời gian bay**: 60-90 phút
- **Trọng lượng**: 300-500 kg với payload 40-80 kg
- **Phóng/Thu hồi**: Rocket-assisted launch, parachute recovery với hệ thống đệm, có thể tái sử dụng **20-50 lần**[^5][^3]


### Target Drone Toàn Cỡ (Full-Scale)

- **Tốc độ**: Mach 2+ (supersonic)
- **Độ cao**: Lên đến 15,000m
- **Khả năng cơ động**: 9G+, tương đương máy bay chiến đấu thực[^8]
- **Thời gian bay**: 2-3 giờ
- **Trọng lượng**: 12,000-24,000 lbs với payload >2,500 lbs
- **Phóng/Thu hồi**: Cất hạ cánh bằng đường băng hoặc tiêu hủy sau nhiệm vụ


## 2. Yêu Cầu Hệ Thống Điều Khiển và Tự Động Hóa

### Điều Khiển Bay (Flight Control System)

- **Autopilot 3-trục** với tính năng stability augmentation
- **Chế độ bay tự động**: Waypoint navigation, auto-launch, auto-recovery
- **Chế độ điều khiển thủ công**: Remote control từ ground control station (GCS)
- **Khả năng nâng cao**: AI-enhanced adaptive maneuvers, 4D navigation (không gian + thời gian) cho kịch bản multi-target[^9][^1]


### Hệ Thống Định Vị (Navigation)

- **GPS/INS kết hợp** với độ chính xác ±5m
- **Multi-sensor fusion** (GPS/INS/Vision) cho môi trường GPS-denied
- Khả năng bay **sea-skimming** ở độ cao 2.5-6m đòi hỏi altimeter đặc biệt và cảm biến địa hình[^10][^3][^6]


### Liên Lạc Dữ Liệu (Datalink)

- **UHF/VHF datalink** với tầm hoạt động ≥100km
- **Real-time telemetry**: Truyền dữ liệu vị trí, tốc độ, độ cao, trạng thái hệ thống
- **Yêu cầu nâng cao**: Dual redundant datalink, encrypted communication
- Hỗ trợ **multi-operator** và **UAV handover** giữa các trạm điều khiển[^9]


### Hệ Thống An Toàn

- **Geo-fencing**: Giới hạn vùng bay, tự động quay về khi vượt biên
- **Emergency termination**: Hệ thống kết thúc khẩn cấp
- **Parachute recovery**: Triển khai dù tự động khi có sự cố
- **Collision avoidance**: Tránh va chạm với tự động hoặc target khác
- **Health monitoring**: Giám sát sức khỏe hệ thống real-time[^1][^9]


## 3. Yêu Cầu Payload và Tăng Cường Đặc Tính

Target drones cần có khả năng mang các payload để tăng cường đặc tính radar, hồng ngoại và thị giác nhằm mô phỏng chính xác các mục tiêu thực tế.

### Tăng Cường Radar (Radar Augmentation)

**Passive RCS Enhancement:**

- **Luneburg lens**: Phản xạ radar đồng đều mọi góc nhìn
- **Corner reflectors**: Tăng radar cross-section (RCS)
- **Reflective tape**: Phủ bề mặt để tăng RCS[^11][^12]

**Active Radar Enhancement:**

- **RF amplifier**: Nhận và khuếch đại tín hiệu radar, mô phỏng mục tiêu lớn hơn nhiều lần
- **Active Radar Homing Emulator (AHRE)**: Mô phỏng tên lửa có đầu dò radar chủ động
- **Radar threat simulator**: Mô phỏng tín hiệu radar của hệ thống vũ khí đối phương[^12][^11]


### Tăng Cường Hồng Ngoại (IR Augmentation)

**Hot Nose/Black-body IR Source:**

- Công suất: **200 watts/steradian** trong dải **4-5 micron**
- Bổ sung dải 1.8-3 micron với hot metal emitter[^13][^11]

**Plume Generator:**

- Sử dụng nhiên liệu **JP-4, JP-8, hoặc JET A**
- Mô phỏng khói động cơ phản lực thực tế
- Hoạt động đến độ cao **20,000 feet** và tốc độ **Mach 0.9**
- Cung cấp đủ nhiên liệu cho 4 lần chạy plume 2 phút mỗi lần[^13][^11]

**IR Tracking Flares:**

- Tạo dấu vết sáng trong phổ hồng ngoại
- Dùng để kiểm tra MANPADS (man-portable air defense systems) như Stinger[^11]


### Hệ Thống Chấm Điểm (Scoring Systems)

**Miss Distance Indicator (MDI):**

- **Acoustic MDI**: Phát hiện sóng xung kích từ đạn/tên lửa siêu thanh
- **Radar MDI**: Sử dụng Doppler radar theo dõi đạn bay qua
- **12-sector coverage**: Đo khoảng cách trượt và góc tấn công 360°
- **Real-time telemetry**: Truyền dữ liệu về ground station ngay lập tức[^14][^15][^16][^12]


### Đối Kháng Điện Tử (Electronic Countermeasures)

- **Chaff dispensers**: Phóng chaff kim loại gây nhiễu radar
- **Flare dispensers**: Phóng flare nhiệt gây nhiễu tên lửa hồng ngoại
- **RF jamming**: Nhiễu sóng vô tuyến
- Điều khiển tự động hoặc theo lệnh từ GCS[^5][^1][^11]


### Mục Tiêu Kéo (Towed Targets)

- **Banner targets**: Vải kéo phía sau
- **IR towed targets** (TPT, TGX-IR): Tạo chữ ký hồng ngoại
- Hệ thống cuộn dây tự động với độ dài kéo tùy chỉnh[^13][^5]


## 4. Yêu Cầu Chuẩn Quân Sự và Chứng Nhận

### Chuẩn Môi Trường

- **MIL-STD-810F/G**: Chống chịu môi trường khắc nghiệt (nhiệt độ, độ ẩm, rung động, sốc)
- Hoạt động trong sea state 0-4 (đối với marine targets)
- Chịu được điều kiện thời tiết khắc nghiệt (gió mạnh, mưa, nhiệt độ cực đoan)[^9]


### Chuẩn Điện Từ

- **MIL-STD-461F**: Tương thích điện từ (EMI/EMC), không gây nhiễu hệ thống khác
- Khả năng chống nhiễu từ các hệ thống radar, truyền thông quân sự[^9]


### Chuẩn Phần Mềm

- **DO-178C**: Chuẩn phần mềm hàng không cho hệ thống bay quan trọng
- **ISO 9001**: Hệ thống quản lý chất lượng
- Cybersecurity standards cho datalink và control systems


## 5. Yêu Cầu Vật Liệu và Kết Cấu

### Vật Liệu Khung

- **Carbon fiber và epoxy-based composites**: Nhẹ, bền, giảm RCS[^7][^5]
- **Fiberglass reinforced polyester**: Cho towed targets, khả năng sống sót cao[^13]
- **Aluminum**: Cho marine targets, chống ăn mòn nước biển[^17][^18]


### Thiết Kế Khí Động

- **Streamlined design**: Giảm drag, tăng hiệu suất nhiên liệu
- **Low observability features**: Giảm RCS tự nhiên của target
- **Modular payload bays**: Dễ dàng thay đổi payload[^19][^2]


## 6. Yêu Cầu Hệ Thống Năng Lượng

### Động Cơ

- **Piston engines**: 30-350 HP cho targets cấp thấp
- **Turbojet engines**: 990-1000 lbs thrust (MicroTurbo Tri 60-5+) cho targets hiệu suất cao[^7][^5]
- **Twin jet engines**: 90kg total thrust cho Banshee-class[^10]


### Nhiên Liệu

- **Gasoline/Diesel**: Cho động cơ piston
- **RP-3/Jet A/JP-8**: Cho động cơ jet
- Dung tích nhiên liệu: 40-450 liters tùy theo loại và thời gian bay yêu cầu


## 7. Yêu Cầu Vận Hành và Logistics

### Khả Năng Triển Khai

- **Containerized**: 4 units trong container 20-foot (C-Target 3)[^17]
- **Modular design**: Lắp ráp nhanh tại hiện trường
- **Minimal support equipment**: Giảm nhu cầu logistics


### Bảo Trì và Độ Tin Cậy

- **Mission reliability**: ≥95-98%[^20]
- **Overhaul life**: 10-50 sorties tùy loại[^3]
- **MTBF** (Mean Time Between Failures): Tối thiểu 50 giờ bay
- **Turn-around time**: <2 giờ giữa các lần bay


### Đào Tạo

- **Ground control station simulator**: Huấn luyện operator
- **Maintenance training**: Đào tạo kỹ thuật bảo trì
- **Documentation**: Tài liệu kỹ thuật đầy đủ bằng tiếng Việt và tiếng Anh

***

## Khuyến Nghị Cho Doanh Nghiệp Việt Nam

Doanh nghiệp tư nhân Việt Nam nên ưu tiên phát triển **target drones cấp cơ bản đến trung cấp** (tốc độ 300-600 km/h, độ cao 5,000m, cơ động 5-7G) vì:

1. **Chi phí R\&D hợp lý**: Không đòi hỏi công nghệ quá phức tạp
2. **Thị trường nội địa**: Đáp ứng nhu cầu huấn luyện phòng không cơ bản
3. **Xuất khẩu**: Phù hợp với các nước có ngân sách quốc phòng vừa phải
4. **Modular payload**: Dễ nâng cấp và tùy chỉnh theo yêu cầu khách hàng

**Đầu tư trọng điểm**:

- Hệ thống điều khiển bay tự động đạt chuẩn MIL-STD
- Payload tăng cường radar và IR cơ bản
- Hệ thống thu hồi dù đáng tin cậy
- Quy trình kiểm định và chứng nhận đầy đủ[^19][^1][^5][^9]
<span style="display:none">[^21][^22][^23][^24][^25][^26]</span>

<div align="center">⁂</div>

[^1]: https://www.airbus.com/en/products-services/defence/uas/target-drone-systems

[^2]: https://scrdrones.com/wp-content/uploads/2019/12/FOLLETO-TARGET-DRONES-EN.pdf

[^3]: https://www.militarydrones.org.cn/280-high-speed-target-drone-p00227p1.html

[^4]: https://en.wikipedia.org/wiki/High_Speed_Target_Drone

[^5]: https://www.kratosdefense.com/unmanned-systems/air/aerial-targets

[^6]: https://aeronautics.leonardo.com/documents/30508878/30801272/MIRACH_100-5_Integrated_Aerial_Target_System_HQ.pdf?t=1634205748795

[^7]: https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104562/bqm-167a-air-force-subscale-aerial-target/

[^8]: https://dsb.cto.mil/wp-content/uploads/reports/2000s/ADA441466.pdf

[^9]: https://www.uavnavigation.com/company/blog/introduction-target-drones

[^10]: https://www.naval-technology.com/projects/banshee-jet-80-aerial-target-drone-uk/

[^11]: https://houbara.me/ancillaries-payloads

[^12]: https://electronics.leonardo.com/documents/16277707/18428600/MIRACH+40_Integrated_Aerial_Target_System_(MM08519)_HQ.pdf?t=1671535193671

[^13]: https://www.meggittdefense.com/wp-content/uploads/2017/01/TPT.pdf

[^14]: https://www.kratosdefense.com/resources/1536-2

[^15]: https://www.airtarget.com/products/miss-distance-indicators-for-target-drones/

[^16]: https://www.militarysystems-tech.com/sites/militarysystems/files/supplier_docs/MDI_134_tech_data_Edition%202022-03-17.pdf

[^17]: https://www.unmannedsystemstechnology.com/wp-content/uploads/2013/12/C-Target-datasheet.pdf

[^18]: https://www.unmannedsystemstechnology.com/wp-content/uploads/2013/11/C-Target-Naval-Target-Systems.pdf

[^19]: https://www.group.sener/en/markets/defence/remote-carriers/target-drones/

[^20]: https://www.edrmagazine.eu/new-v2-version-of-leonardos-mirach-100-5-target-drone-secures-first-customer-11-january-2022

[^21]: https://www.unmannedsystemstechnology.com/expo/target-drones/

[^22]: https://arxiv.org/pdf/2507.22650.pdf

[^23]: https://apps.dtic.mil/sti/tr/pdf/ADP010321.pdf

[^24]: https://amprius.com/drone-range/

[^25]: https://nextgendefense.com/l3harris-stealthy-target-tracker/

[^26]: https://en.wikipedia.org/wiki/Target_drone

