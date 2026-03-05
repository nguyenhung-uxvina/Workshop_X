# BẢN NGHIÊN CỨU CHUYÊN SÂU: PHÁT TRIỂN VÀ TRIỂN KHAI HỆ THỐNG UAV CATAPULT CHO VIỆT NAM

## 1. Tóm tắt Điều hành (Executive Summary)

Việc phát triển và triển khai hệ thống Catapult cho Máy bay Không người lái (UAV) là một ưu tiên chiến lược nhằm mở rộng khả năng giám sát hàng hải và biên giới của Việt Nam. Nhu cầu này được thúc đẩy bởi sự tăng trưởng nhanh chóng của thị trường UAV toàn cầu, dự kiến đạt 700 tỷ USD vào năm 2035.1 Để khai thác hiệu quả các UAV cánh cố định (fixed-wing UAV) có tải trọng trung bình (MTOW 50–100 kg) từ các nền tảng di động như tàu tuần tra và nhà giàn, việc sử dụng các hệ thống phóng hỗ trợ là bắt buộc.

Mục tiêu chính của chương trình này là đạt được khả năng phóng UAV mang cảm biến phức tạp (ví dụ: radar hàng hải, EO/IR) trong điều kiện môi trường khắc nghiệt, đặc biệt là Sea-State 3-4.

**Khuyến nghị Công nghệ Chính:** Phân tích kỹ thuật chuyên sâu chỉ ra rằng Hệ thống Phóng Khí nén (Pneumatic Launcher) là giải pháp tối ưu cho giai đoạn ngắn và trung hạn. Công nghệ khí nén cung cấp công suất phóng lớn và khả năng tăng tốc tương đối đồng đều dọc theo ray 3, giúp giảm thiểu áp lực đột ngột lên khung UAV, một lợi thế quan trọng so với hệ thống bungee/spring. Hệ thống khí nén có tính trưởng thành công nghệ cao, đã được chứng minh trên thị trường thương mại và quân sự, đồng thời có chi phí triển khai thấp hơn đáng kể so với hệ thống điện từ (EMALS).4

**Lộ trình 3 Bước (36+ tháng) Đề xuất:**

Mục tiêu của lộ trình này là nhanh chóng đạt được khả năng vận hành chiến thuật thông qua mua sắm thương mại có sẵn (COTS) và dần dần tiến tới làm chủ công nghệ lõi trong nước, đặc biệt là các thành phần bị kiểm soát xuất khẩu.

Bảng Lộ Trình Triển Khai Chiến Lược

|**Giai đoạn**|**Mục tiêu Chính**|**Công nghệ Ưu tiên**|**Thời gian**|
|---|---|---|---|
|Ngắn hạn|Thử nghiệm, Chuẩn hóa, Mua sắm Pilot|Pneumatic COTS (40-120kg MTOW)|0–12 tháng|
|Trung hạn|Tích hợp Hàng hải, Nội địa hóa cấu trúc|Pneumatic cấp chiến thuật, áp dụng STANAG 4586|12–36 tháng|
|Dài hạn|Nghiên cứu công nghệ lõi|Phát triển Động cơ Tuyến tính (LIM), Hệ thống Kiểm soát Năng lượng|36+ tháng|

## 2. Phạm vi & Phân loại Nhiệm vụ (Mission Profiles and Operational Requirements)

Các yêu cầu kỹ thuật của hệ thống phóng phải được xác định dựa trên môi trường và mục đích vận hành cụ thể tại Việt Nam.

### 2.1. Tàu Tuần tra (20m - 100m, Cảnh sát Biển)

Nền tảng tàu tuần tra đặt ra những thách thức lớn nhất do giới hạn không gian boong (Deck Footprint) và chuyển động boong (Deck Motion). Các nhiệm vụ chính bao gồm giám sát Beyond Line of Sight (BLOS) dựa trên tọa độ AIS, trinh sát mục tiêu nghi vấn, và tìm kiếm cứu nạn (SAR).5 Những nhiệm vụ này đòi hỏi UAV phải mang tải trọng cảm biến phức tạp (như radar hàng hải, EO/IR đa kênh).6

- **Yêu cầu MTOW Mong muốn:** 40–100 kg. MTOW ở dải này đưa UAV vào phân khúc Group 2/3 8, đủ lớn để mang cảm biến chiến thuật cần thiết cho việc thu thập hình ảnh và nhận dạng mục tiêu từ xa.5
    
- **Tốc độ Phóng Cần thiết:** Tối thiểu 17–25 m/s. Việc đạt được vận tốc này là tối quan trọng để đảm bảo UAV có lực nâng khí động học (aerodynamic lift) đủ lớn, cho phép cất cánh an toàn ngay cả trong điều kiện gió thấp hoặc Sea-State cao.9
    
- **Sea-State Tối đa:** Vận hành tối thiểu Sea-State 3 (sóng cao 1.25m - 2.5m) là yêu cầu cơ bản. Hệ thống phải duy trì khả năng phóng/thu hồi ở **Sea-State 4** (sóng 2.5m - 4.0m) 7, điều này đòi hỏi thiết kế ray phóng ngắn và khả năng bù chuyển động boong.
    
- **Tần suất Phóng:** Cần có tần suất phóng cao (4–6 lần/ngày) trong các chiến dịch tuần tra kéo dài, đặt ra yêu cầu về tốc độ tái nạp (recycle rate) của hệ thống khí nén.
    
- **Yêu cầu BLOS:** Bắt buộc phải có khả năng điều khiển và thu thập dữ liệu ngoài tầm nhìn trực tiếp.5
    

### 2.2. Đảo, Nhà Giàn Dầu (DK1), Cảng & Trạm Biên phòng

Các địa điểm cố định này cho phép sử dụng UAV lớn hơn (Group 3) với tầm bay xa và khả năng mang tải trọng lâu hơn.

- **Đảo/Nhà Giàn:** MTOW 50–150 kg được khuyến nghị để tăng cường khả năng Giám sát Bền vững (Persistent Surveillance). Yêu cầu kỹ thuật nổi bật nhất là khả năng **Chống Ăn mòn (Corrosion Resistance)** cực cao. Môi trường biển khắc nghiệt đòi hỏi sử dụng vật liệu cấp hải quân (Inox 316L, sơn phủ ceramic) và thiết kế vỏ bọc kín hoàn toàn khi không hoạt động.
    
- **Trạm Biên phòng & Cảng (Ground Launch):** Nhiệm vụ giám sát biên giới đất liền và huấn luyện ưu tiên tính di động và triển khai nhanh chóng. Hệ thống pneumatic phải nhẹ (ví dụ: < 300 kg 11) và có thể triển khai dưới 15 phút.9
    

Sự khác biệt giữa các kịch bản nhiệm vụ này cho thấy không thể áp dụng một giải pháp duy nhất. Việc tập trung vào tải trọng 100 kg cho tàu tuần tra sẽ mở đường cho việc mua sắm các hệ thống Pneumatic thương mại hiện có, có năng lượng phóng khoảng 50 kJ, nhưng cần có kế hoạch R&D dài hạn để làm chủ các hệ thống năng lượng cao hơn (ví dụ: > 80 kJ) để hỗ trợ các UAV chuyên dụng, tải trọng nặng hơn trong tương lai.12

## 3. Phân loại Công nghệ Launcher (Launcher Technology Classification)

Bốn loại công nghệ phóng chính được đánh giá dựa trên khả năng áp dụng cho các nền tảng hải quân và biên giới tại Việt Nam.

### 3.1. Bungee/Spring (Elastic Cord Systems)

Hệ thống phóng Bungee sử dụng năng lượng tiềm năng lưu trữ trong dây đàn hồi công suất cao.3 Đây là thiết kế đơn giản nhất, có chi phí mua sắm và bảo trì thấp nhất.3 Tuy nhiên, nhược điểm lớn nhất là giới hạn nghiêm ngặt về MTOW (thường < 25 kg) và việc kiểm soát lực phóng kém chính xác. Gia tốc ban đầu thường rất cao nhưng giảm nhanh chóng, gây áp lực không đồng đều lên khung UAV. Bungee phù hợp nhất cho UAV cỡ nhỏ (Group 1).

### 3.2. Pneumatic (Hệ thống Khí nén)

Hệ thống Khí nén hoạt động bằng cách giải phóng tức thời khí nén áp suất cao (ví dụ: Nitơ) thông qua một van kích hoạt.13 Công nghệ này được coi là tối ưu cho UAV cấp chiến thuật MTOW trung bình (20–200 kg).

Pneumatic launchers nổi bật nhờ khả năng cung cấp Công suất Phóng Lớn (huge catapult's launch power) và gia tốc tương đối đồng đều dọc theo ray, làm giảm ứng suất lên thân UAV.3 Các sản phẩm thương mại hiện tại có thể cung cấp tốc độ phóng lên tới 42 m/s.14 Tuy nhiên, hệ thống này có cấu tạo phức tạp (bình chứa áp suất, van điều khiển) làm giảm độ tin cậy nếu không được bảo trì đúng cách, và chi phí mua sắm ban đầu tương đối cao.3

### 3.3. Hydraulic/Mechanical (Hệ thống Thủy lực/Cơ khí Tích trữ)

Hệ thống này sử dụng bánh đà (flywheel) hoặc áp suất thủy lực để tích trữ năng lượng. Một khái niệm mới là sử dụng động năng lưu trữ trong bánh đà quay nhanh, sau đó truyền lực thông qua bộ ly hợp và phanh điện từ để kiểm soát chính xác tốc độ và gia tốc.15 Mặc dù có khả năng tạo ra công suất cực lớn và kiểm soát chính xác, các hệ thống này thường nặng, cồng kềnh, và đòi hỏi bảo trì phức tạp (dầu, lọc).

### 3.4. Electromagnetic (EMALS/LIM/LSM) (Hệ thống Điện từ)

Hệ thống điện từ (ví dụ: EMALS, sử dụng Động cơ Cảm ứng Tuyến tính - LIM) tạo ra lực đẩy tuyến tính thông qua từ trường.4

Ưu điểm chính của EMALS là khả năng tăng tốc máy bay/UAV mượt mà hơn đáng kể, giảm thiểu căng thẳng lên khung máy bay.4 EMALS cho phép kiểm soát lực phóng rất chính xác (Max Peak-to-Mean Tow Force Ratio = 1.05) và có thể phóng linh hoạt cả tải nặng và tải nhẹ.4 Tuy nhiên, công nghệ này đòi hỏi hệ thống lưu trữ và chuyển đổi năng lượng (Energy-Storage Subsystem, Power-Conversion Subsystem) cực kỳ phức tạp và công suất cao (EMALS cần 122 MJ năng lượng cho mỗi lần phóng trên tàu sân bay).4 Do đó, EMALS hiện không khả thi cho tàu tuần tra nhỏ mà chỉ là mục tiêu R&D dài hạn cho Việt Nam.

Bảng So Sánh Kỹ Thuật Các Loại Launcher

|**Loại Launcher**|**Nguyên Lý Năng Lượng**|**Gia tốc (g)**|**Kiểm soát Tốc độ/Lực**|**MTOW Hỗ Trợ Điển hình**|**Độ phức tạp**|**Chi phí Vận hành (Opex)**|
|---|---|---|---|---|---|---|
|Bungee/Spring|Năng lượng đàn hồi (PE)|Không đều, Cao đỉnh|Thấp|< 25 kg (Group 1)|Thấp|Rất thấp (Thay dây)|
|Khí Nén (Pneumatic)|Khí nén|Đồng đều, Cao|Trung bình/Cao|20 kg - 200 kg (Group 2/3)|Trung bình/Cao|Trung bình (Khí nén, van)|
|Hydraulic/Mechanical|Cơ học/Thủy lực|Rất cao|Cao|100 kg - 500 kg+|Cao|Cao (Bảo trì thủy lực)|
|Điện từ (EMALS/LIM)|Điện (LIM)|Rất đồng đều, Mượt|Rất cao (Precision control)|50 kg - 600 kg+|Rất cao|Trung bình/Thấp (Ít bộ phận chuyển động)|

## 4. Thông số Kỹ thuật Chi tiết Cần Xem xét

Việc thiết kế hoặc lựa chọn hệ thống phóng phải dựa trên việc tính toán năng lượng động học ($KE$) cần thiết để đưa UAV đạt tốc độ cất cánh tối thiểu ($v_{launch}$) tại cuối ray phóng.

### 4.1. Công thức và Tính toán Định lượng

Năng lượng động học cần thiết được tính theo công thức: $KE = \frac{1}{2} m v^2$.

**Ví dụ Tính toán Tiêu chuẩn (MTOW 100 kg):**

Giả định:

- MTOW của UAV ($m$): $100 \text{ kg}$
    
- Tốc độ phóng tối thiểu ($v$): $25 \text{ m/s}$
    
- Chiều dài ray phóng ($D_{launch}$): $5 \text{ m}$
    

1. Tính Năng lượng Động học (KE):
    
    $$KE = \frac{1}{2} m v^2$$
    
    $$KE = \frac{1}{2} \cdot 100 \text{ kg} \cdot (25 \text{ m/s})^2$$
    
    $$KE = 50 \text{ kg} \cdot 625 \text{ m}^2/\text{s}^2$$
    
    $$KE = 31,250 \text{ J} = 31.25 \text{ kJ}$$
    
2. Tính Lực Phóng Trung bình (Average Launch Force - F):
    
    Lực phóng trung bình cần thiết được tính bằng Năng lượng chia cho Chiều dài Ray:
    
    $$F = \frac{KE}{D_{launch}}$$
    
    $$F = \frac{31,250 \text{ J}}{5 \text{ m}} = 6,250 \text{ N}$$
    
3. Tính Gia tốc Trung bình (Average Acceleration - a):
    
    $$a = \frac{F}{m}$$
    
    $$a = \frac{6,250 \text{ N}}{100 \text{ kg}} = 62.5 \text{ m/s}^2$$
    
    Chuyển đổi sang đơn vị g (gia tốc trọng trường $\approx 9.81 \text{ m/s}^2$):
    
    $$a_g = \frac{62.5 \text{ m/s}^2}{9.81 \text{ m/s}^2/\text{g}} \approx 6.37 \text{ g}$$
    

**Kết luận Tính toán:** Gia tốc $6.37 \text{ g}$ nằm trong giới hạn an toàn cho UAV cấp chiến thuật, vốn thường chịu đựng được gia tốc lên tới $8-10 \text{ g}$. Hệ thống phóng phải được thiết kế để cung cấp năng lượng giải phóng (Stored Energy) tối thiểu là $50 \text{ kJ}$ để có biên độ an toàn và bù đắp các tổn thất năng lượng do ma sát (Coulomb friction) và hiệu suất khí động lực.18

### 4.2. Các Thông số Kỹ thuật Chi tiết khác

- **Chiều dài Ray Phóng (Rail Length):** Cần tối ưu hóa. Ray quá dài (ví dụ: $16.1 \text{ m}$ của Robonic OHTO 19) làm tăng momen xoắn tác động lên tàu khi boong chuyển động. Chiều dài tối đa $6 \text{ m}$ là mục tiêu khả thi cho tàu tuần tra.
    
- **Năng lượng Yêu cầu (kW, kJ):** Đối với hệ thống khí nén, năng lượng $50 \text{ kJ}$ là yêu cầu tối thiểu. Máy nén khí (compressor) cần công suất ổn định (ví dụ: $30-50 \text{ kW}$) để nhanh chóng tái nạp bình tích áp.
    
- **Gia tốc Tối đa (g):** Gia tốc đỉnh phải được kiểm soát để không vượt quá giới hạn thiết kế của UAV. Việc lựa chọn công nghệ khí nén thay vì bungee giúp kiểm soát độ đồng đều của gia tốc.3
    
- **Khả năng Chống Ăn mòn:** Bắt buộc sử dụng vật liệu Inox 316 hoặc nhôm cấp hải quân được anodized và sơn phủ. Tất cả các bộ phận điện và khí nén phải có lớp bảo vệ chống xâm nhập (Ingress Protection - IP rating) cao để chịu được sương muối.
    
- **Yêu cầu Giảm chấn & Tải phản hồi:** Các điểm neo launcher vào boong tàu phải được thiết kế với các tấm đệm đàn hồi (shock absorption pads) để phân tán tải xung $6.25 \text{ kN}$ nhằm bảo vệ cấu trúc tàu khỏi nguy cơ nứt mỏi.20
    

## 5. Danh mục Nhà sản xuất & Sản phẩm Tham chiếu Toàn cầu

Danh mục tham chiếu này tập trung vào các nhà cung cấp Hệ thống Khí nén và các OEM quân sự đã được chứng minh, cung cấp cơ sở cho chiến lược mua sắm COTS (Commercial Off-the-Shelf) ban đầu.

Bảng Danh mục Nhà Sản Xuất UAV Catapult Tham Chiếu

|**Phân cấp**|**Nhà Sản Xuất**|**Quốc gia**|**Sản phẩm Điển hình**|**Thông số Chính**|**Dải Giá Ước tính (USD)**|**Nguồn**|
|---|---|---|---|---|---|---|
|OEM Quân sự|**Robonic Ltd Oy**|Phần Lan|MC0315L|MTOW < 25 kg (tại 15 m/s), Dài 3.5 m, Di động 11|Cần báo giá (Military Grade)|11|
|OEM Quân sự|**Robonic Ltd Oy**|Phần Lan|OHTO|MTOW ~200+ kg, Dài 16.1 m (Triển khai) 19|Cao (Military Grade)|19|
|COTS/Thương mại|**UKRSPECSYSTEMS**|Ukraine|GLS-1A|MTOW 40 kg (tại 17 m/s), 9.7 kJ, Triển khai 15 phút 9|N/A (Request Quote)|9|
|COTS/Thương mại|**UAV Factory**|Latvia|12 kJ Pneumatic Catapult|Năng lượng 12 kJ 21|N/A|21|
|COTS (Chi phí Thấp)|**Austars Model**|Trung Quốc|CT-612 Launcher|MTOW 30-120 kg, Tốc độ 42 m/s 14|$95,000.00|14|
|COTS (Chi phí Thấp)|**Austars Model**|Trung Quốc|CT-615Pro Launcher|MTOW 30-200 kg, Tốc độ 42 m/s 14|$129,000.00|14|
|OEM Hải quân/Nghiên cứu|**ALSEAMAR**|Pháp|UAV Catapult|Giải pháp tích hợp hàng hải 21|N/A|21|
|OEM Hàng không Vũ trụ|**General Atomics (GA)**|Mỹ|EMALS|Công nghệ điện từ (LIM) 4|Rất cao (Hệ thống Tàu sân bay)|4|

Phân tích thị trường cho thấy các giải pháp COTS như Austars CT-612/CT-615Pro có giá ước tính từ $95,000 đến $129,000 14 có thể đáp ứng ngay lập tức yêu cầu MTOW 100 kg. Mức giá này cung cấp một điểm khởi đầu thực tế cho chương trình mua sắm pilot, cho phép Việt Nam nhanh chóng triển khai năng lực vận hành. Các hệ thống cấp quân sự (Robonic) dù có độ bền cao hơn nhưng sẽ đi kèm với chi phí mua sắm và rào cản xuất khẩu lớn hơn.

## 6. Phân tích Thị trường & Chuỗi Cung ứng

### 6.1. Xu hướng Công nghệ và Điện hóa

Mặc dù có xu hướng dài hạn chuyển sang điện từ (LIM/EMALS) do khả năng kiểm soát lực phóng tuyệt vời và giảm bảo trì 4, công nghệ này vẫn chưa phổ biến cho phân khúc UAV chiến thuật MTOW trung bình do yêu cầu năng lượng và chi phí R&D quá cao. Đối với UAV Group 2/3, công nghệ khí nén vẫn duy trì vị thế dẫn đầu nhờ sự cân bằng giữa hiệu suất và độ phức tạp. Việc theo dõi R&D về Kinetic Launcher (dùng bánh đà) 15 cũng là cần thiết, vì đây là cầu nối tiềm năng giữa Pneumatic và EMALS về mặt kiểm soát gia tốc.

### 6.2. Khả năng Nội địa hóa và Rào cản Nhập khẩu

Việt Nam đang có lợi thế để phát triển ngành công nghiệp UAV và kinh tế độ cao thấp.1 Tuy nhiên, để làm chủ công nghệ phóng, phải giải quyết các thách thức về chuỗi cung ứng.

- **Rào cản Nhập khẩu:** Các công nghệ tiên tiến như Động cơ Tuyến tính (LIM) 16 và các bộ phận điều khiển công suất cao sẽ chịu sự kiểm soát nghiêm ngặt của các Hiệp định Kiểm soát Xuất khẩu Công nghệ Lưỡng dụng (Dual-Use) như Wassenaar Arrangement (WA) 23 và ITAR của Mỹ.24 Điều này khiến việc nhập khẩu công nghệ cho Phase 3 (R&D EMALS) trở nên khó khăn.
    
- **Khả năng Nội địa hóa:**
    
    - **Thành phần dễ nội địa hóa:** Cấu trúc cơ khí (Ray dẫn, Khung, Shuttle), hệ thống neo, và các giải pháp chống ăn mòn. Các công ty cơ khí chính xác trong nước có khả năng chế tạo 70% các thành phần này trong Phase 2.
        
    - **Thành phần then chốt khó sản xuất nội địa:**
        
        1. **Van Khí nén Tốc độ cao (High-Flow Trigger Valve):** Đây là trái tim của hệ thống khí nén. Việc đạt được _sonic conductivity_ và tỷ lệ áp suất tới hạn cần thiết cho việc giải phóng năng lượng nhanh (ví dụ: $50 \text{ kJ}$) đòi hỏi chuyên môn cao về cơ học chất lỏng và vật liệu.12
            
        2. **Động cơ Tuyến tính (LIM) và Điện tử Công suất:** Cần chuyên môn sâu về cuộn dây điện từ, vật liệu phản ứng (reaction rail) và bộ điều khiển (inverters) để quản lý công suất lớn, các lĩnh vực mà Việt Nam đang có công nghệ cốt lõi còn hạn chế.1
            

## 7. Ứng dụng Thực tiễn cho Việt Nam: Đề xuất Cấu hình Hệ thống

### (A) Cấu hình Tàu Tuần tra Cảnh sát Biển Việt Nam

**Đề xuất:** Hệ thống Khí nén Chiến thuật (COTS/Modified).

- **Thông số Cơ bản:** MTOW $100 \text{ kg}$, Tốc độ Phóng $25 \text{ m/s}$. Năng lượng Giải phóng yêu cầu $50 \text{ kJ}$. Chiều dài ray $\le 6 \text{ m}$.
    
- **Sơ đồ Bố trí trên Boong (Deck Layout):**
    
    - Vị trí tối ưu: Mũi tàu (Foredeck) để tận dụng luồng gió tương đối, giảm thiểu nhiễu động do cấu trúc thượng tầng.
        
    - Yêu cầu không gian: $10 \text{ m} \times 3 \text{ m}$ (khu vực phóng và vận hành).
        
- **Yêu cầu Gia cố Boong:** Lực phản hồi $6.25 \text{ kN}$ cần được phân tán bằng hệ thống neo sử dụng vật liệu cường độ cao, tích hợp các tấm đệm giảm chấn. Cần có một phân tích cấu trúc tàu (Load Study) chi tiết trước khi lắp đặt để đảm bảo lực xung kích không gây rủi ro nứt mỏi lâu dài.20
    
- **Năng lượng Cần có:** Điện năng $380 \text{ V}/3$ pha ổn định để chạy máy nén khí (dự kiến $30-50 \text{ kW}$). Hệ thống cần được tích hợp vào hệ thống điện lưới của tàu một cách cẩn thận.
    

### (B) Cấu hình Đảo/Nhà Giàn/Trạm KV

**Đề xuất:** Hệ thống Khí nén Cố định, Thiết kế Chống ăn mòn.

- **Thông số Cơ bản:** MTOW $150 \text{ kg}$, Tốc độ $30 \text{ m/s}$.
    
- **Yêu cầu Đặc biệt:** Hệ thống phải có vỏ bọc bảo vệ hoàn toàn khi không hoạt động và sử dụng các vật liệu có tuổi thọ cao trong môi trường muối biển. Việc bảo trì định kỳ phải tập trung vào việc kiểm tra độ kín và chống gỉ sét.
    

### (C) Cảng & Trạm Biên phòng (Ground Launch)

**Đề xuất:** Hệ thống Khí nén Di động (Portable).

- **Thông số Cơ bản:** MTOW $40 \text{ kg}$, Tốc độ $20 \text{ m/s}$.
    
- **Ưu tiên Vận hành:** Hệ thống phải có khối lượng nhẹ (ví dụ: Robonic MC0315L nặng $255 \text{ kg}$ 11) và thời gian triển khai nhanh chóng (dưới 15 phút).9
    

## 8. Kế hoạch R&D & Lộ trình Nội địa hóa

Lộ trình này nhằm đạt được sự tự chủ công nghệ chiến lược trong 5 năm.

Bảng Kế Hoạch R&D và Nội Địa Hóa

|**Giai đoạn**|**Timeline (Tháng)**|**Mục tiêu & Tiêu chí Nghiệm thu (Acceptance Criteria)**|**Nguồn lực (Nhân sự)**|**Ngân sách Ước tính (USD)**|
|---|---|---|---|---|
|**Phase 1: Proof of Concept & Pilot Buy**|0–12|**Mục tiêu:** Vận hành thành công 1-2 hệ thống Pneumatic COTS và tích hợp C2. **Tiêu chí:** Tỷ lệ phóng thành công $> 95\%$. Sai số vận tốc phóng $< 5\%$.25 Hoàn thành thử nghiệm lực phản hồi boong.|15 FTE (Kỹ thuật UAV, Cơ khí, Vận hành)|$2.5M - $4M|
|**Phase 2: Localization & Scale-Up (Tactical)**|12–36|**Mục tiêu:** Nội địa hóa 70% các thành phần cấu trúc. Thiết kế hệ thống nén khí tự động nội địa. Áp dụng chuẩn STANAG 4586.26 **Tiêu chí:** MTBF $> 100$ lần phóng. Hoàn thành 500 lần phóng tích lũy (Fatigue testing).|30 FTE (Thêm Vật liệu, Điện tử)|$6M - $10M|
|**Phase 3: Core Technology Mastery (Future Capability)**|36+|**Mục tiêu:** Nghiên cứu và chế tạo thành công mô hình thử nghiệm Động cơ Tuyến tính (LIM) công suất thấp. Phát triển Van Khí nén Cao áp nội địa.12 **Tiêu chí:** Tạo ra lực phóng $> 10 \text{ kN}$ bằng LIM. Thiết kế van đạt _sonic conductivity_ tiêu chuẩn.|50 FTE (Thêm Nghiên cứu Điện từ, Vật lý)|$15M - $25M|

## 9. Kế hoạch Thử nghiệm & Đo đạc (Detailed Test Plan)

Việc thử nghiệm phải được thiết kế để xác minh hiệu suất của hệ thống và đánh giá tác động cấu trúc lên nền tảng tàu.

### 9.1. Phép Đo Lực Phản hồi và Gia tốc

- **Đo Lực Phản hồi:** Bắt buộc sử dụng **Load Cells (Cảm biến Tải trọng)** tại tất cả các điểm neo chính của launcher vào boong tàu. Các cảm biến này phải ghi lại lực xung kích ($F(t)$) trong suốt quá trình phóng.27 Điều này cho phép xác định chính xác tải trọng tối đa truyền vào cấu trúc tàu.
    
- **Đo Gia tốc:** Sử dụng Accelerometer 3 trục. Một bộ đặt tại Xe phóng (Shuttle) để đo gia tốc truyền lực, và một bộ đặt tại Khung UAV (Centre of Gravity) để đảm nhận rằng gia tốc tác động lên UAV không vượt quá giới hạn thiết kế ($8-10 \text{ g}$).4
    
- **Telemetry và Vận tốc:** Radar Doppler hoặc Photogate Sensors phải được sử dụng để xác minh vận tốc phóng thực tế ($v_{actual}$) tại điểm tách.25
    

### 9.2. Ma trận Thử nghiệm

Việc thử nghiệm cần lặp lại trong một ma trận biến số để đảm bảo độ tin cậy thống kê (statistical confidence).

- **Số lượng Lần phóng:** Cần tối thiểu 100 lần phóng thử nghiệm (sorties) bằng UAV dummy (có khối lượng và hình dáng tương đương) 25 để thu thập dữ liệu đáng tin cậy về hiệu suất và tải trọng.
    

Bảng Ma Trận Thử Nghiệm

|**Trục Thử nghiệm**|**Thông số Thay đổi (Variable)**|**Giá trị Điển hình (Levels)**|**Mục tiêu Đo đạc**|
|---|---|---|---|
|**Payload/MTOW**|Khối lượng UAV/Dummy|40 kg, 70 kg, 100 kg|Xác định $v_{launch}$ thực tế và KE.25|
|**Môi trường Hàng hải**|Mức độ động của boong|Sea-State 1, Sea-State 3, Sea-State 4|Đánh giá khả năng bù chuyển động và tải phản hồi.|
|**Gió**|Tốc độ gió ngược|0 kt, 10 kt, 20 kt|Đánh giá tính ổn định của shuttle.|
|**Hiệu suất Hệ thống**|Áp suất khí nén ban đầu|90% Max Pressure, 100% Max Pressure|Xác định sai số vận tốc phóng.|

### 9.3. Phương pháp Đánh giá Mỏi (Fatigue Assessment) trên Boong Tàu

Do lực phóng là tải xung (impulse load), nguy cơ mỏi cấu trúc là cao, đặc biệt trên các tàu nhỏ.20

- **Quy trình:** Sử dụng dữ liệu lực phản hồi theo thời gian ($F(t)$) thu thập từ Load Cells. Phân tích này đòi hỏi phải tạo ra các biểu đồ tần suất (histograms) tải trọng lặp lại.20 Sau đó, áp dụng các phương pháp phân tích mỏi (ví dụ: dựa trên đường cong S-N) để ước tính tuổi thọ mỏi còn lại của các khu vực boong được gia cố. Việc đánh giá mỏi phải được tích hợp vào giai đoạn thiết kế để đảm bảo tuổi thọ của hệ thống launcher tương đương với tuổi thọ của tàu.
    

## 10. Mẫu RFP (Request for Proposal)

Mẫu RFP này được soạn thảo để mua sắm hệ thống Khí nén Chiến thuật trong giai đoạn pilot (Phase 1).

**YÊU CẦU ĐỀ XUẤT (RFP) CHO HỆ THỐNG CATAPULT UAV HÀNG HẢI CHIẾN THUẬT**

**Mục tiêu:** Cung cấp và tích hợp Hệ thống Phóng UAV cố định cánh (Fixed-Wing UAV Catapult System) cho tàu tuần tra ven biển.

|**Phần**|**Yêu cầu Kỹ thuật Tối thiểu (Mandatory Requirements)**|
|---|---|
|**1. Hiệu suất Phóng**|MTOW Hỗ trợ: Tối thiểu $100 \text{ kg}$. Tốc độ Phóng Tối thiểu: $25 \text{ m/s}$. Năng lượng Giải phóng Hệ thống: Tối thiểu $50 \text{ kJ}$. Tỷ lệ gia tốc đỉnh/trung bình: $< 1.3$.|
|**2. Thông số Cơ học**|Chiều dài Ray Phóng: Tối đa $6.0 \text{ m}$. Gia tốc Tối đa: Không vượt quá $8 \text{ g}$. Tần suất Phóng (Tái nạp): Tối đa 15 phút/lần phóng.|
|**3. Yêu cầu Hàng hải**|Vật liệu: Hợp kim chống ăn mòn (316L, Nhôm anodized). Khả năng vận hành: Sea-State 3-4. Tích hợp điểm lắp đặt Load Cell.|
|**4. Hạ tầng & Interface**|Nguồn Điện Yêu cầu: $380 \text{ V}/3$ Pha. Giao diện C2: Bắt buộc tương thích STANAG 4586 (hoặc cung cấp chi tiết giao thức API mở).26|
|**5. Dịch vụ Hỗ trợ & Bảo hành**|**Bảo hành:** Tối thiểu 24 tháng hoặc 300 lần phóng. **Đào tạo:** 02 khóa đào tạo (vận hành và bảo trì Cấp 1/2) cho 6 nhân sự. **Spares:** Cung cấp danh mục phụ tùng tiêu hao cho 100 lần phóng. **Tài liệu:** Sổ tay Kỹ thuật và Bản vẽ chi tiết lắp đặt/gia cố boong.|
|**6. Tiêu chí Chấm thầu**|Kỹ thuật & Độ tin cậy (50%), Giá cả (30%), Hỗ trợ Nội địa hóa & Chuyển giao Kỹ thuật (20%).|

## 11. Bảng So sánh Kỹ thuật Các Sản phẩm Thương mại (Comparative Technical Table)

Bảng tổng hợp chi tiết, phục vụ cho quyết định mua sắm COTS ban đầu.

Bảng So Sánh Kỹ Thuật Các Mẫu Launcher Tiêu Biểu (2024 Estimates)

|**Nhà Sản Xuất**|**Model**|**MTOW Support (kg)**|**Launch Speed Max (m/s)**|**Length Deployed (m)**|**Power Source**|**Mass (kg)**|**Price Range (USD)**|**Notes**|
|---|---|---|---|---|---|---|---|---|
|Austars Model|CT-612|30-120|42|6-10|Pneumatic|N/A|$95,000 - $129,000|Chi phí thấp, công suất cao cho MTOW trung bình 14|
|UKRSPECSYSTEMS|GLS-1A|40|20|~3.5|Pneumatic|255|N/A (Request Quote)|Hệ thống 9.7 kJ di động, triển khai 15 phút 9|
|Robonic Ltd Oy|MC0315L|25 (tại 15 m/s)|25+|3.495|Pneumatic|255|N/A (Military Grade)|Phù hợp UAV Group 1, độ tin cậy cao 11|
|Robonic Ltd Oy|OHTO|~200|N/A|16.1|Pneumatic|< 3500|N/A (Military Grade)|Hệ thống chiến thuật lớn, kém phù hợp cho tàu nhỏ 19|
|UAV Factory|12 kJ Catapult|N/A|N/A|N/A|Pneumatic|N/A|N/A|Công suất thấp (12 kJ) hơn yêu cầu $50 \text{ kJ}$ cho UAV $100 \text{ kg}$ 21|
|R&D Kinetic|Flywheel Launcher|50|30|N/A|Electric/Kinetic|N/A|R&D Focus|Hứa hẹn kiểm soát gia tốc 15|

## 12. Đánh giá Rủi ro (Technical, Operational, Legal) và Biện pháp Giảm thiểu

|**Loại Rủi ro**|**Mô tả Rủi ro**|**Tác động Tiềm ẩn**|**Biện pháp Giảm thiểu**|
|---|---|---|---|
|**Kỹ thuật**|Lỗi bộ điều khiển van khí nén (core component).12|Thất bại phóng, mất UAV.|Yêu cầu kiểm tra chất lượng nghiêm ngặt (NDT), mua sắm van từ nhà cung cấp chuyên nghiệp. Duy trì kho dự trữ phụ tùng quan trọng (Spare Parts).|
|**Cấu trúc**|Mỏi boong tàu do tải xung $6.25 \text{ kN}$ lặp lại.20|Hư hỏng cấu trúc tàu, yêu cầu sửa chữa tốn kém.|Gia cố cục bộ boong bằng thép cường độ cao, sử dụng hệ thống neo giảm chấn. Thực hiện giám sát mỏi định kỳ bằng cảm biến.|
|**Vận hành**|Giới hạn Sea-State.7|Không thể phóng/thu hồi trong điều kiện Sea-State 4+.|Thiết lập SOP vận hành nghiêm ngặt dựa trên dữ liệu thử nghiệm thực tế. Cân nhắc hệ thống ổn định nền tảng (Stabilized Platform) cho tàu nhỏ.21|
|**Pháp lý (Việt Nam)**|Vi phạm quy định về cấp phép bay.28|Đình chỉ nhiệm vụ, tịch thu thiết bị.|Tuân thủ Nghị định 36/2008/NĐ-CP. Đảm bảo giấy phép bay (do Bộ Quốc phòng cấp) được nộp tối thiểu 14 ngày trước khi thực hiện bay. Sử dụng tần số vô tuyến được cấp phép riêng cho nhiệm vụ quốc phòng.|
|**Pháp lý (Quốc tế)**|Rào cản kiểm soát xuất khẩu công nghệ lõi (WA/ITAR).24|Chậm trễ R&D công nghệ LIM/van cao áp nội địa.|Tập trung nghiên cứu và phát triển nội địa các thành phần công nghệ lưỡng dụng từ giai đoạn sớm (Phase 3).|
|**Cybersecurity**|Tấn công vào giao diện C2 (STANAG 4586).26|Mất quyền kiểm soát, rò rỉ dữ liệu.|Áp dụng mã hóa mạnh, sử dụng mạng lưới điều khiển đóng và cô lập (air-gapped) khỏi mạng lưới chung của tàu.|

## 13. Ước tính Chi phí Sơ bộ (CAPEX + OPEX)

Phương pháp ước tính dựa trên giá thị trường COTS cấp trung bình ($110,000 \text{ USD}$) và chi phí R&D theo quy mô dự án.

**Giả định:**

1. Đơn giá trung bình COTS Pneumatic (MTOW 100 kg) = $110,000 \text{ USD}/$ hệ thống.
    
2. Chi phí tích hợp/lắp đặt trên tàu (bao gồm gia cố boong) = $50,000 \text{ USD}/$ tàu.
    
3. OPEX hàng năm = $10\%$ CAPEX thiết bị/lắp đặt ban đầu.
    
4. Ước tính R&D lấy từ Lộ trình Mục 8.
    

### Kịch bản 1: Pilot (1 Site/Tàu)

1. **CAPEX:**
    
    - Mua sắm 01 Launcher COTS: $110,000$
        
    - Tích hợp/Lắp đặt (1 tàu): $50,000$
        
    - Chi phí R&D/Đào tạo ban đầu (Phase 1): $100,000$
        
    - **Tổng CAPEX:** $110,000 + 50,000 + 100,000 = \$260,000 \text{ USD}$
        
2. **OPEX (Năm 1):**
    
    - $0.10 \times (\$110,000 + 50,000) = 0.10 \times 160,000 = \$16,000 \text{ USD}$
        

### Kịch bản 2: Regional (5 Sites/Nền tảng)

1. **CAPEX:**
    
    - Mua sắm 05 Launcher: $110,000 \times 5 = \$550,000$
        
    - Tích hợp/Lắp đặt (5 nền tảng): $50,000 \times 5 = \$250,000$
        
    - R&D & Nội địa hóa Cấu trúc (Ước tính năm 1 Phase 2): $3,000,000$
        
    - **Tổng CAPEX:** $550,000 + 250,000 + 3,000,000 = \$3,800,000 \text{ USD}$
        
2. **OPEX (Năm 1):**
    
    - $0.10 \times (\$550,000 + 250,000) = 0.10 \times 800,000 = \$80,000 \text{ USD}$
        

### Kịch bản 3: Fleet (20 Platforms/Triển khai Hàng loạt)

1. **CAPEX (Giả định giảm $15\%$ chi phí thiết bị nhờ mua số lượng lớn và nội địa hóa cấu trúc):**
    
    - CAPEX thiết bị/lắp đặt: $(\$110,000 + 50,000) \times 20 \times 0.85 = \$3,200,000 \times 0.85 = \$2,720,000$
        
    - R&D/Nội địa hóa (Tổng 3 năm Phase 2 & 3): $20,000,000$
        
    - **Tổng CAPEX (3 năm ước tính):** $2,720,000 + 20,000,000 = \$22,720,000 \text{ USD}$
        
2. **OPEX (Hàng năm cho 20 hệ thống):**
    
    - $0.10 \times \$2,720,000 = \$272,000 \text{ USD}$
        

## 14. Kiến nghị về Tiêu chuẩn, Interface và Modularity

Việc áp dụng các tiêu chuẩn chung là thiết yếu để đảm bảo khả năng tương tác giữa các mẫu UAV khác nhau và giữa UAV với hệ thống điều khiển tàu.

### 14.1. Tiêu chuẩn Interface C2

Kiến nghị mạnh mẽ việc áp dụng **STANAG 4586 (Standard Interface of the Unmanned Control System for NATO UAV Interoperability)**.26 Mặc dù việc áp dụng tiêu chuẩn này không phải lúc nào cũng được các nhà sản xuất hưởng ứng do các vấn đề tổ chức và kỹ thuật 30, nhưng việc bắt buộc tiêu chuẩn này trong RFP sẽ đơn giản hóa Command and Control (C2), cho phép một trạm điều khiển duy nhất quản lý đồng thời nhiều UAV (Multi-Vehicle Control) và dễ dàng tích hợp các mẫu UAV trong tương lai.

### 14.2. Thiết kế Modularity Cơ khí

- **Quick-Release Carriage:** Thiết kế xe phóng phải hỗ trợ cơ cấu nhả nhanh (quick-release) để giảm thời gian chuẩn bị và thay thế UAV.
    
- **Adapter Plates (Tấm Điều hợp):** Cần phát triển một bộ các tấm điều hợp tiêu chuẩn (adapter plates) để kết nối các mẫu UAV khác nhau với cùng một xe phóng (shuttle). Điều này đảm bảo launcher có thể hỗ trợ dải MTOW rộng và nhiều nhà sản xuất UAV khác nhau, tăng tính linh hoạt chiến thuật.
    

### 14.3. Danh mục BOM Cấp cao (High-level Bill of Materials)

Danh mục này đại diện cho các thành phần chính của hệ thống Pneumatic Launcher:

1. **Cấu trúc Cơ khí:** Khung ray dẫn chính, Xe phóng (Shuttle), Cơ cấu khóa/nhả UAV, Bộ giảm chấn cuối ray (End-of-Stroke Damper).
    
2. **Hệ thống Năng lượng Khí nén:** Bình tích áp (Accumulator) áp suất cao, Máy nén khí (Compressor) điện/thủy lực, Van kích hoạt điện tử tốc độ cao, Ống dẫn khí áp suất cao.
    
3. **Hệ thống Điều khiển:** Bộ điều khiển Logic Lập trình (PLC), Giao diện Người máy (HMI), Cảm biến Tải/Gia tốc/Vận tốc, Bộ điều chỉnh áp suất.
    
4. **Tích hợp Hàng hải:** Vỏ bảo vệ chống ăn mòn, Cơ cấu neo boong và Giảm chấn.
    

## 15. Kế hoạch Đào tạo & SOP Vận hành

Sự thành công của việc triển khai phụ thuộc vào quy trình vận hành tiêu chuẩn (SOP) rõ ràng và đội ngũ nhân sự được đào tạo chuyên sâu.

### 15.1. Checklist Pre-Launch (Trước khi Phóng)

1. **An toàn Cấu trúc & Môi trường:** Xác minh Sea-State và tốc độ gió nằm trong giới hạn vận hành. Kiểm tra khu vực phóng không có vật cản.
    
2. **Hệ thống Launcher:** Xác minh áp suất khí nén trong bình tích áp đạt $100\%$ ($P_{set}$). Kiểm tra các cảm biến và hệ thống nhả an toàn.
    
3. **Hệ thống UAV & C2:** Kiểm tra tải trọng, cân bằng, và kết nối chặt chẽ của UAV với shuttle. Xác nhận liên kết C2 Link (tuân thủ STANAG 4586) và Link dữ liệu với Trạm điều khiển mặt đất/tàu.26
    
4. **Pháp lý Vận hành:** Xác nhận đã nhận được Giấy phép bay (Flight Authorization) từ Bộ Quốc phòng.28
    

### 15.2. SOP Vận hành và Tái nạp

Quy trình vận hành phải được tiêu chuẩn hóa, bao gồm việc ghi lại tất cả dữ liệu phóng (vận tốc, gia tốc, áp suất) cho mỗi lần phóng để theo dõi sức khỏe hệ thống và phân tích mỏi. Sau khi phóng, hệ thống phải tự động kích hoạt máy nén khí để tái nạp bình tích áp, đảm bảo thời gian tái nạp tối đa là 15 phút.

### 15.3. Lịch Bảo trì (Maintenance Schedule)

Việc bảo trì phải tập trung vào các thành phần chịu tải cao và môi trường ăn mòn.

- **Hàng ngày/Tuần:** Kiểm tra trực quan ăn mòn, bôi trơn ray dẫn, kiểm tra áp suất khí rò rỉ.
    
- **Hàng quý:** Kiểm tra các bộ phận điện tử, kiểm tra độ chính xác của cảm biến vận tốc.
    
- **Hàng năm (Overhaul):** Tháo rời và kiểm tra không phá hủy (NDT) Van kích hoạt tốc độ cao và các điểm neo cấu trúc chính.
    

### 15.4. Quy mô Tổ đội và Bộ Kỹ năng

Đội ngũ vận hành tối thiểu phải có 3 người 7:

1. **Launcher Technician:** Chịu trách nhiệm bảo trì và vận hành hệ thống khí nén/cơ khí.
    
2. **C2 Operator/Pilot:** Điều khiển UAV (cần có giấy phép bay hợp lệ) và quản lý liên kết dữ liệu.
    
3. **Mission Commander:** Ra quyết định phóng/hủy, quản lý quy trình SOP và tuân thủ pháp lý.
    

## 16. Kết luận & Đề xuất 5 Hành động Ưu tiên

### Kết luận

Việt Nam có một cơ hội chiến lược để nhanh chóng tăng cường năng lực giám sát hàng hải bằng cách áp dụng hệ thống UAV Catapult. Hệ thống Khí nén là lựa chọn hợp lý nhất cho giai đoạn khởi đầu do sự cân bằng giữa chi phí ($95k - $130k cho COTS) và hiệu suất ($50 \text{ kJ}$ cho UAV $100 \text{ kg}$), đồng thời giảm thiểu rủi ro công nghệ. Tuy nhiên, để đạt được sự tự chủ và khả năng mở rộng trong tương lai, việc đầu tư vào R&D công nghệ lõi (van khí nén, động cơ tuyến tính) là không thể tránh khỏi, đặc biệt để vượt qua các rào cản kiểm soát xuất khẩu công nghệ quốc tế.

### Đề xuất 5 Hành động Ưu tiên cho Bộ/Quân/Doanh nghiệp Việt Nam (Trong 12 tháng tới)

1. **Khởi động Chương trình Mua sắm Pilot COTS:** Ban hành RFP ngay lập tức để mua 3-5 hệ thống Khí nén COTS (MTOW $100 \text{ kg}$) nhằm triển khai và đánh giá thực tế trên các tàu tuần tra.
    
2. **Chuẩn hóa Interface C2 và Cơ khí:** Chính thức áp dụng STANAG 4586 làm tiêu chuẩn C2 interface cho tất cả các chương trình UAV mới. Thiết kế các tấm điều hợp cơ khí tiêu chuẩn để đảm bảo tính linh hoạt của launcher.
    
3. **Thiết lập Cơ sở Thử nghiệm Cấu trúc:** Cấp ngân sách và nguồn lực để thiết lập cơ sở thử nghiệm có khả năng đo lường chính xác Lực Phản hồi (sử dụng Load Cells) và Gia tốc, nhằm thu thập dữ liệu tin cậy cho phân tích mỏi boong tàu.
    
4. **Hợp lý hóa Quy trình Pháp lý và SOP:** Phối hợp với các cơ quan quản lý (Bộ Quốc phòng, CAAV) để hợp lý hóa quy trình cấp phép bay quân sự/an ninh, giảm thiểu thời gian chờ đợi 14 ngày hiện tại 28, và ban hành SOP vận hành chi tiết cho môi trường Sea-State 3/4.
    
5. **Giai đoạn Hóa Công nghệ Lõi (Phase 3 Initiation):** Phân bổ ngân sách R&D ban đầu ($1-2M) cho các viện nghiên cứu để bắt đầu nghiên cứu lý thuyết và thiết kế mô hình thử nghiệm (Test Rig) cho công nghệ Động cơ Tuyến tính (LIM) và tối ưu hóa hệ thống Van Khí nén áp suất cao.