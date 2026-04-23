

# **Báo Cáo Chuyên Sâu: Tải Trọng Mô Phỏng Mối Đe Dọa Độ Trung Thực Cao cho Máy Bay Không Người Lái Mục Tiêu**

## **Tóm tắt điều hành: Yêu cầu Chiến lược đối với Mô phỏng Mối đe dọa Thế hệ mới**

Báo cáo này trình bày chi tiết các yêu cầu thực hiện và đặc tính hiệu suất của năm phân hệ thiết yếu—Tăng cường Radar, Tăng cường Hồng ngoại (IR), Chấm điểm Chính xác (MDI), Đối kháng Điện tử (ECM), và Mục tiêu Kéo—được tích hợp vào các máy bay không người lái (UAV) mục tiêu tiên tiến. Thách thức chiến lược cốt lõi là cân bằng **độ trung thực của chữ ký** (tức là mô phỏng chính xác các máy bay chiến đấu hiện đại và tên lửa chủ động) với **hiệu quả chi phí** và **hạn chế tải trọng**.1 Các nhà lãnh đạo ngành công nghiệp như Kratos (dòng BQM/MQM), QinetiQ (Banshee/ARHE), và Meggitt cung cấp các hệ thống mô-đun này, hỗ trợ xu hướng hướng tới các nền tảng có thể tái sử dụng để giảm chi phí trên mỗi nhiệm vụ.2 Tương lai của lĩnh vực này ngày càng dựa vào Công nghệ Bộ nhớ Tần số Vô tuyến Kỹ thuật số (DRFM) và quản lý chữ ký đa phổ tích hợp.

## **Section 1: Nền tảng Mô phỏng Mối đe dọa và Tiêu chuẩn Độ trung thực**

### **1.1 Xác định Yêu cầu Huấn luyện Đại diện Mối đe dọa (RCS, IR, Tốc độ, Độ cao)**

Máy bay không người lái mục tiêu phải tái tạo động lực học và chữ ký của các mối đe dọa trên không có giá trị cao. Ví dụ, Kratos BQM-167 là một hệ thống phản lực hiệu suất cao có khả năng đạt vận tốc Mach 0.91, cơ động 9g, và hoạt động từ độ cao thấp 50 feet đến trần bay 50,000 feet, cung cấp một phong bì mục tiêu thực tế tương đương máy bay chiến đấu.5 MQM-178 Firejet, một nền tảng nhỏ hơn nhưng linh hoạt, cung cấp tốc độ tối đa Mach 0.69 và trần bay 35,000 feet (10,670 mét), với khả năng mang tải trọng nội bộ tối đa 70 pounds (32 kg), làm cho hiệu quả tải trọng trở nên cực kỳ quan trọng.4

Các hệ thống tăng cường chữ ký radar và hồng ngoại (IR) phức tạp được triển khai trên các nền tảng này chỉ có ý nghĩa trong các kịch bản chiến đấu thực tế. Một nền tảng bay phải cung cấp hiệu suất động học cần thiết, ví dụ như khả năng đạt Mach 0.9 và hoạt động ở độ cao lên đến 20,000 feet, để hỗ trợ các hệ thống như bộ tạo khói động cơ (plume generator).6 Khả năng này đảm bảo rằng chữ ký mục tiêu được tăng cường xuất hiện trong phạm vi hoạt động của các kịch bản giao chiến máy bay chiến đấu thực tế, từ đó nâng cao giá trị huấn luyện của nhiệm vụ.

### **1.2 Yêu cầu Bắt buộc về Tính Mô-đun: Tích hợp Tải trọng Phức tạp**

Sự cần thiết cho các nhiệm vụ huấn luyện đa dạng (ví dụ: thử nghiệm tên lửa radar so với tên lửa IR) thúc đẩy nhu cầu về các tải trọng mô-đun, có thể cấu hình được.4 Các nhà sản xuất tập trung vào các hệ thống có thể hoán đổi cho nhau (hệ thống RF, hệ thống IR, đối kháng truyền thống, mục tiêu kéo) có thể dễ dàng thích ứng với nhiều nền tảng.5 Ví dụ, Kratos nhấn mạnh rằng BQM-167 có thể mang tải trọng đáng kể về thể tích và trọng lượng trong khi vẫn duy trì hiệu suất chiến đấu, cho thấy thiết kế đã tối ưu hóa cho tính mô-đun của tải trọng.5

### **1.3 Tuân thủ Tiêu chuẩn Quân sự/NATO về Thử nghiệm Chữ ký**

Độ trung thực của thử nghiệm được định hướng bởi các tiêu chuẩn đã được thiết lập, thường tham chiếu đến MIL-STD-810 cho thử nghiệm môi trường và các quy trình vận hành.8 Tuy nhiên, việc xác định chữ ký mục tiêu—đặc biệt là đặc tính phức tạp và thay đổi của Tiết diện Ngang Radar (RCS) của máy bay không người lái—vẫn là một thách thức kỹ thuật do sự đa dạng của các nền tảng và những cải tiến liên tục.9 Các hội đồng của NATO (NMSG, SET) đang tích cực nghiên cứu mô hình hóa các chữ ký máy bay không người lái phức tạp để đảm bảo tính đại diện cho mối đe dọa.10

## **Section 2: Tăng cường Chữ ký Radar Độ trung thực cao (RCS)**

Mục tiêu của việc tăng cường radar là sửa đổi RCS vốn có, thường nhỏ, của máy bay không người lái mục tiêu 11 để mô phỏng chữ ký lớn hơn nhiều của một máy bay kích thước đầy đủ hoặc một hệ thống vũ khí cụ thể.13

### **2.1 Kỹ thuật Tăng cường RCS Thụ động**

Các phương pháp thụ động dựa vào các bộ phản xạ hình học để chuyển hướng năng lượng radar trở lại nguồn, làm tăng RCS đo được ($\\sigma$).

#### **2.1.1 Bộ phản xạ Thấu kính Luneburg (LLR)**

Bộ phản xạ LLR là một thấu kính hình cầu có chỉ số khúc xạ thay đổi theo bán kính $n(r)$, được thiết kế để hội tụ sóng điện từ đến một điểm trên bề mặt đối diện.1 Bằng cách phủ một lớp phản xạ kim loại tại tiêu điểm này, sóng được phản xạ chính xác trở lại hướng nó đến, bất kể góc tới.1 LLR cung cấp khả năng phản xạ đa hướng tuyệt vời (**phủ sóng 360°**) và tăng cường chữ ký radar băng thông rộng, góc rộng thụ động.14 Tuy nhiên, LLR **đắt tiền, nặng, và khó sửa chữa**, do quá trình chế tạo phức tạp cần thiết cho các chất điện môi đa lớp theo chỉ số bước để xấp xỉ chỉ số thay đổi lý tưởng.15 Chúng đáp ứng các yêu cầu về độ trung thực cao, góc rộng nhưng phải trả giá bằng chi phí và trọng lượng đáng kể.1

#### **2.1.2 Bộ phản xạ Góc (Corner Reflectors \- CR)**

CR (thường là góc nhị diện hoặc góc tam diện) sử dụng nhiều bề mặt phản xạ vuông góc để đảm bảo rằng sóng radar tới được phản xạ trực tiếp trở lại máy phát.17 CR có hiệu quả cao trong việc tăng RCS trong các góc nhìn hẹp, cụ thể.15 Chúng thường được sử dụng theo cụm để tăng phạm vi phủ sóng.15 Ưu điểm là chúng **rẻ tiền, nhẹ, và có thể sửa chữa được**.1 Nhược điểm là RCS của chúng giảm mạnh khi góc tới lệch khỏi trục tối ưu.15 Các hệ thống hiện đại có thể kết hợp CR và LLR với cơ chế chuyển dịch tự động để đạt được hình ảnh RCS biến thiên đồng thời giảm thiểu chi phí.1

#### **2.1.3 Lớp phủ Phản xạ (Reflective Tape)**

Băng phản xạ đóng vai trò là một phương pháp xử lý bề mặt đơn giản, chi phí thấp để tăng một phần RCS cơ bản của cấu trúc máy bay không người lái mục tiêu.12

### **2.2 Hệ thống Tăng cường Radar Chủ động (ARE)**

Các hệ thống chủ động xử lý và phát lại tín hiệu, cung cấp các chữ ký động, có thể kiểm soát và đánh lừa, vượt xa các phương pháp thụ động.

#### **2.2.1 Chức năng Bộ khuếch đại RF**

Các hệ thống này nhận tín hiệu radar đến, khuếch đại nó và phát lại tín hiệu đã khuếch đại. Quá trình này mô phỏng một mục tiêu vật lý có RCS lớn hơn đáng kể so với kích thước thực tế của máy bay không người lái.11 Để đảm bảo độ trung thực, mô phỏng phải tính đến sự dịch chuyển tần số Doppler để bắt chước chính xác các đặc điểm chuyển động của mục tiêu dự định.1 Một nghiên cứu đã chứng minh mức độ mô phỏng thực tế cao, đạt 93.1 điểm trên mô hình đánh giá độ trung thực, với lỗi RCS ở mũi chỉ 1.39 dBsm.1 Khả năng điều chỉnh cường độ tín hiệu phản xạ cho phép mô phỏng các mục tiêu có kích thước và vật liệu khác nhau, kiểm tra khả năng theo dõi và xác định phạm vi của radar.19

#### **2.2.2 Bộ mô phỏng Đầu dò Radar Chủ động (AHRE)**

AHRE là một tải trọng chuyên dụng được thiết kế để đại diện thực tế cho chữ ký của một **mối đe dọa tên lửa dẫn đường bằng radar chủ động**.20 Điều này rất quan trọng để đánh giá các hệ thống phòng thủ (hệ thống EW, hệ thống cảnh báo) chống lại khả năng 'bắn và quên' (fire-and-forget).20 AHRE của QinetiQ thường hoạt động trong **băng tần X (9410MHz $\\pm$30MHz)**, một tần số phổ biến cho đầu dò tên lửa, với **công suất đầu ra đỉnh cao 2.2KW**.22 Hệ thống hỗ trợ cấu hình xung, phân cực (dọc hoặc ngang) và các chế độ vận hành (quét và bắt mục tiêu) có thể lập trình được.22 Nó được thiết kế cho các kịch bản thực tế, bao gồm mô phỏng các cuộc tấn công lướt biển ở độ cao thấp (chỉ năm mét) và tạo ra nhiều kịch bản mối đe dọa bằng cách vận hành đồng thời nhiều đơn vị.22

Sự tập trung vào công suất đỉnh cao (2.2KW) và băng tần X của AHRE cho thấy ưu tiên chiến lược đã dịch chuyển từ việc chỉ mô phỏng kích thước vật lý thụ động sang mô phỏng *hành vi điện tử* thực tế của các mối đe dọa vũ khí, cụ thể là mô phỏng tên lửa chủ động đang trong pha cuối dẫn đường. Việc tích hợp AHRE cho phép kiểm tra vòng lặp đóng đầy đủ của các hệ thống phòng thủ chống tên lửa mà không cần phóng tên lửa thật, cải thiện đáng kể hiệu quả chi phí và an toàn.

#### **2.2.3 Bộ mô phỏng Mối đe dọa Radar**

Các hệ thống này tạo ra tín hiệu điện từ bắt chước toàn bộ đặc tính của các hệ thống radar đối phương, bao gồm khoảng cách, tốc độ, RCS và các mô hình cơ động phức tạp.19 Điều này kiểm tra giới hạn khả năng theo dõi và phân biệt mục tiêu của radar.

### **2.3 ECM Tiên tiến và Đánh lừa Chữ ký (DRFM và Mô phỏng LPI)**

Các tải trọng tiên tiến sử dụng xử lý kỹ thuật số để đánh lừa độ trung thực cao.

#### **2.3.1 Hệ thống Bộ nhớ Tần số Vô tuyến Kỹ thuật số (DRFM)**

DRFM nắm bắt tín hiệu RF đến, xử lý kỹ thuật số (thường sử dụng FPGA), và sau đó phát lại nó với các sửa đổi chính xác, được thao túng.23 Các Bộ mô phỏng Tiếng vọng Mục tiêu Radar dựa trên DRFM (RTES) cho phép mô phỏng nhiều mục tiêu với RCS khác nhau, dịch chuyển Doppler và các kỹ thuật đối kháng điện tử (ECM) tinh vi trong môi trường kiểm soát.23 Một đơn vị DRFM gắn trên máy bay không người lái có thể mô phỏng một mục tiêu đầy đủ tính năng và tiềm năng lên đến bảy mục tiêu bổ sung trong cùng một hướng, tạo ra các kịch bản theo dõi 3D phức tạp.24 DRFM được nhúng trong các bộ EW phức tạp (như MICRO SPEAR của Elbit) để cung cấp khả năng tự bảo vệ, tấn công điện tử và trinh sát, mang lại khả năng gây nhiễu và đánh lừa mạnh mẽ.25

#### **2.3.2 Mô phỏng Mối đe dọa Radar Xác suất Thấp bị Chặn (LPI)**

Các mối đe dọa hiện đại ngày càng sử dụng radar LPI/LPD (Xác suất Phát hiện Thấp), sử dụng các kỹ thuật như chu kỳ làm việc cao, băng thông rộng, linh hoạt tần số và xung được mã hóa để tránh bị phát hiện bởi các Bộ thu Cảnh báo Radar (RWR) truyền thống.26 Khả năng xử lý tín hiệu kỹ thuật số tiên tiến của DRFM là thiết yếu để mô phỏng các sơ đồ điều chế radar phức tạp, linh hoạt này (ví dụ: Điều chế Tần số Tuyến tính \- LFM, mã Costas) nhằm kiểm tra nghiêm ngặt các hệ thống Hỗ trợ Điện tử (ES) hiện đại.27

Sự tích hợp DRFM cho thấy một sự chuyển đổi trong yêu cầu mô phỏng—từ việc chỉ là một mục tiêu có thể phát hiện được, sang việc trở thành một *mục tiêu gây thách thức về nhận thức* có khả năng mô phỏng góc phức tạp và giả mạo các hệ thống LPI/LPD.24

Bảng 1: Phân tích So sánh Công nghệ Tăng cường Chữ ký Radar

| Phương pháp Tăng cường | Loại | Đặc tính RCS Chính | Ưu điểm Chủ yếu | Độ trung thực & Hạn chế | Nguồn Hỗ trợ |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Thấu kính Luneburg (LLR) | Thụ động | RCS cao, Đa hướng | Rất hiệu quả, phủ sóng góc rộng (360°), băng thông rộng.15 | Nặng, đắt, chế tạo phức tạp (điện môi đa lớp).14 | 1 |
| Bộ phản xạ Góc (CR) | Thụ động | RCS cao, Cụ thể theo Góc nhìn | Rẻ, nhẹ, công nghệ thấp, độ cứng giao diện tốt.1 | Phủ sóng góc hẹp; RCS giảm nhanh ngoài trục.15 | 16 |
| Bộ khuếch đại RF | Chủ động | Kích thước Mô phỏng Biến thiên | Hệ số RCS có thể kiểm soát; mô phỏng độ trung thực cao (\<3 dBsm lỗi).1 | Không tái tạo cấu trúc mục tiêu nội bộ phức tạp; cần năng lượng.11 | 1 |
| Bộ mô phỏng Đầu dò Chủ động (AHRE) | Chủ động/Mối đe dọa | Đầu dò Tên lửa Băng X | Mô phỏng thực tế mối đe dọa tên lửa bắn-và-quên; công suất đỉnh cao (2.2KW).22 | Dải tần số chuyên dụng; tiêu tốn năng lượng; dành cho mối đe dọa pha cuối.21 | 20 |
| Bộ mô phỏng DRFM (RTES) | Chủ động/Đánh lừa | Tiếng vọng Mục tiêu & ECM Phức tạp | Độ trung thực cao nhất; mô phỏng Doppler, nhiễu, radar LPI/LPD, và gây nhiễu đánh lừa.23 | Độ phức tạp cao; cần sức mạnh xử lý và làm mát đáng kể.24 | 23 |

## **Section 3: Mô phỏng Mục tiêu Hồng ngoại và Thị giác Thực tế**

Tăng cường IR là thiết yếu để thử nghiệm tên lửa tìm kiếm nhiệt (ví dụ: MANPADS như Stinger) và các hệ thống theo dõi IR tiên tiến.28 Tính thực tế đạt được thông qua các nguồn lưỡng băng tần và mô phỏng khói động cơ (plume) động.

### **3.1 Nguồn IR Mũi Nóng (Hot Nose) và Vật đen (Black-body) (Góc nhìn Đối diện)**

Các nguồn này mô phỏng da nóng, các cạnh dẫn, và các thành phần động cơ hướng về phía trước, rất quan trọng cho các cuộc giao chiến đối đầu và không đối không.29

#### **3.1.1 Tăng cường MWIR (4-5 Micron)**

Yêu cầu đặt ra là **200 watts/steradian (W/sr)** trong băng tần MWIR 4-5 micron.30 Tuy nhiên, các hệ thống chạy bằng điện tiêu chuẩn, chẳng hạn như Fire-40 Hot Nose của QinetiQ, thường chỉ cung cấp chữ ký IR có thể lựa chọn bởi người vận hành lên tới **40 W/sr** trong băng tần 3 đến 5 micron.29 Để đạt được yêu cầu 200 W/sr, hệ thống phải sử dụng một nguồn năng lượng công suất cao, thường là máy phát điện tích hợp (Ram Air Turbine hoặc máy phát điện động cơ nội bộ), đảm bảo "thời gian hoạt động không giới hạn" khi được liên kết.29

#### **3.1.2 Bộ phát Kim loại Nóng SWIR (1.8-3 Micron)**

Băng tần này mô phỏng năng lượng nhiệt cực kỳ nóng tỏa ra từ các thành phần bên trong, cấu trúc lõi động cơ và khí thải rất nóng (lõi khói động cơ).32 Các bộ phát nhiệt độ cao chuyên dụng, như đầu đốt chạy bằng propane được sử dụng trong mục tiêu kéo tăng cường IR TIX, có thể cung cấp đầu ra cao hơn đáng kể: **400 W/sr trong băng tần 1.8-3 micron** và 250 W/sr trong băng tần 3-5 micron.33 Sự cùng tồn tại của tăng cường MWIR và SWIR là quan trọng vì các đầu dò IR lưỡng băng tần (MWIR-LWIR hoặc SWIR-LWIR) phổ biến hơn, mang lại khả năng nhận dạng mục tiêu tốt hơn và giảm báo động sai.32 Đầu ra cao trong băng tần SWIR (1.8-3 µm) là cần thiết để mô phỏng chữ ký nhiệt mạnh mẽ của máy bay phản lực quân sự ở công suất cao.33

Sự khác biệt lớn giữa đầu ra nguồn điện (40 W/sr) và nguồn đốt (400 W/sr) cho thấy yêu cầu 200 W/sr mà người dùng đề cập đối với MWIR đòi hỏi mật độ năng lượng cao khó có thể duy trì bằng điện trên một nền tảng mô-đun. Do đó, việc đạt được mô phỏng IR độ trung thực cao, đặc biệt là tái tạo nhiệt độ dữ dội của lõi máy bay phản lực quân sự, cần thiết các nguồn đốt nhiệt độ cao (ví dụ: đầu đốt propane hoặc nhiên liệu phản lực), đòi hỏi quản lý nhiên liệu và nhiệt phức tạp trong thiết kế tải trọng.33

### **3.2 Bộ tạo Khói Động cơ (Plume Generator) (Góc nhìn Aft và Beam)**

Bộ tạo khói động cơ mô phỏng vệt khí thải lớn, một nguồn chữ ký IR chiếm ưu thế, đặc biệt là từ góc nhìn phía sau.

* **Nhiên liệu và Chữ ký:** Các bộ tạo này sử dụng nhiên liệu phản lực tiêu chuẩn (JP-4, JP-8, hoặc JET A) mà khi đốt cháy, tạo ra chữ ký IR mô phỏng chặt chẽ khí thải động cơ phản lực thực tế.7 Các hạt bồ hóng có trong khói động cơ tăng cường sự phát xạ trên tất cả các băng tần IR.32  
* **Phạm vi Vận hành:** Hệ thống phải hoạt động đáng tin cậy lên đến **Mach 0.9** và độ cao **20,000 feet**.6 Các thông số này xác nhận sự cần thiết của các nền tảng chủ hiệu suất cao như BQM-34S.6  
* **Yêu cầu về Độ bền:** Tải trọng phải duy trì **4 lần chạy khói, mỗi lần 2 phút**, đòi hỏi dung tích nhiên liệu nội bộ đầy đủ.7 Khả năng này cho phép nhiều chu kỳ giao chiến trong một nhiệm vụ, tối đa hóa hiệu quả chi phí trên mỗi giờ bay.

Bên cạnh nhiệt, khói động cơ còn phục vụ như một phương tiện để kiểm soát chữ ký. Các luồng khí thải là nguồn phát xạ MWIR/SWIR chính.32 Các nghiên cứu tiên tiến chỉ ra rằng việc thao túng luồng khí thải (ví dụ: sử dụng vòi phun cong chữ S hoặc tiêm hạt aerosol) có thể *đàn áp* hoặc định hình chữ ký IR.35 Do đó, một bộ tạo khói động cơ thực tế không chỉ phải phát ra nhiệt mà còn phải tái tạo chính xác thành phần khí và hiệu ứng tán xạ (đặc biệt là từ hạt bồ hóng) để mô phỏng các tính năng tàng hình của máy bay hiện đại hoặc các điều kiện hoạt động động cơ khác nhau.

### **3.3 Pháo sáng Theo dõi IR (IR Tracking Flares)**

Pháo sáng là mồi nhử nhiệt pyrotechnic được thiết kế để tạo ra các chữ ký nhiệt IR cường độ cao, thời gian ngắn, được sử dụng cụ thể để kiểm tra các hệ thống cảnh báo tên lửa và đánh giá hiệu quả của các hệ thống phòng không, chẳng hạn như MANPADS.28

Bảng 2: Hiệu suất và Cấu hình Tải trọng Tăng cường Hồng ngoại

| Loại Nguồn | Băng tần Chính (Micron) | Đầu ra Yêu cầu (W/sr) | Tối đa Công nghiệp (W/sr) | Nguồn Năng lượng | Góc nhìn Mô phỏng | Ghi chú Độ trung thực |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Mũi Nóng Điện (FIRE-40) | 3-5 µm (MWIR) | Mục tiêu: 200 | Điển hình: 40 29 | Máy phát điện | Đối diện/Mặt trước | Khoảng cách đầu ra lớn; thời gian hoạt động không giới hạn nếu liên kết với máy phát điện.36 |
| Bộ phát Kim loại Nóng (TIX) | 1.8-3 µm (SWIR) | Bổ sung | Cao: 400 33 | Propane/Đốt cháy | Mặt trước/Lõi | Quan trọng cho mô phỏng lõi nhiệt độ cao; tái tạo động cơ phản lực ở công suất quân sự.33 |
| Bộ tạo Khói Động cơ | 1-5 µm (Mọi góc) | Định tính (Khí thải Phản lực Thực tế) | Cao (Thay đổi theo nhiên liệu/độ cao) | Nhiên liệu JP-4, JP-8, JET A 7 | Phía sau/Beam/Mọi góc | Phải hoạt động lên đến Mach 0.9 và 20,000 ft; hỗ trợ 4 lần chạy mỗi lần 2 phút.6 |
| Pháo sáng IR | Thời gian ngắn, Cường độ cao | N/A | Rất cao (Pyrotechnic) | Hộp Pyrotechnic | Mồi nhử/Phòng thủ | Dùng để kiểm tra các hệ thống theo dõi của MANPADS và bảo vệ chống cháy đầu dò.28 |

## **Section 4: Hệ thống Chấm điểm Mục tiêu Chính xác (Miss Distance Indicators \- MDI)**

Chấm điểm chính xác là rất quan trọng để xác nhận hệ thống vũ khí và đánh giá hiệu quả nhiệm vụ. MDI phải đo chính xác khoảng cách trượt tối thiểu (MMD) và vị trí góc của đạn so với mục tiêu.

### **4.1 Công nghệ MDI Âm thanh (Acoustic MDI)**

MDI âm thanh là lựa chọn chính để đo lường các va chạm từ đạn siêu thanh.

* **Nguyên lý Hoạt động:** Hệ thống phát hiện **sóng xung kích** được tạo ra bởi đạn siêu thanh (đạn hoặc tên lửa) đi qua.37 Khoảng cách trượt được tính toán dựa trên biên độ của sóng xung kích này.38  
* **Phạm vi Góc:** MDI 12-sector phổ quát (ví dụ: AS-134/12U) sử dụng sáu cảm biến áp suất tích hợp trong bộ micro để xác định vị trí góc (360°) của đạn dựa trên sự khác biệt về thời gian đến (TDOA) của sóng xung kích.37  
* **Hiệu suất:** Các hệ thống này có khả năng cao, với dung lượng chấm điểm 6,000 viên mỗi phút.37 Chúng được thiết kế để xử lý tất cả các đường bay mục tiêu (tấn công và đi qua).37  
* **Hạn chế:** Vì MDI âm thanh hoàn toàn dựa vào sóng xung kích được tạo ra khi vật thể vượt quá Mach 1 37, chúng không hiệu quả đối với các mối đe dọa dưới tốc độ âm thanh. Điều này yêu cầu các phương pháp chấm điểm bổ sung (như MDI Radar hoặc mục tiêu kéo vật lý) nếu hồ sơ nhiệm vụ bao gồm các cuộc giao chiến dưới tốc độ âm thanh.

### **4.2 MDI Radar và Theo dõi Doppler**

MDI dựa trên radar sử dụng các nguyên tắc điện từ để đo lường. Radar FMCW (Frequency-Modulated Continuous Wave) đo khoảng cách bằng cách phân tích sự dịch chuyển tần số giữa tín hiệu radar phát ra và nhận được.39 Radar Doppler theo dõi tốc độ tương đối (vận tốc) thông qua sự dịch chuyển tần số Doppler.19 Mặc dù MDI âm thanh tuyệt vời để định lượng sự gần gũi của các viên đạn siêu thanh, MDI radar được ưu tiên để đánh giá ngòi nổ khoảng cách và thu thập dữ liệu theo dõi liên tục độ phân giải cao về quỹ đạo mối đe dọa đang đến.39

### **4.3 Truyền dữ liệu Đo từ xa (Telemetry) Thời gian Thực và Độ trung thực Dữ liệu**

Kiến trúc của hệ thống MDI nhấn mạnh việc xử lý tập trung tại trạm mặt đất. MDI truyền dữ liệu khoảng cách trượt và vị trí góc đo được dưới dạng **tín hiệu dữ liệu thô** thông qua một máy phát chuyên dụng (tần số sóng mang điển hình 330-473 MHz) đến trạm chấm điểm.37

Yếu tố quyết định là dữ liệu đo từ xa của MDI được hợp nhất với **tọa độ GPS** của máy bay không người lái mục tiêu (vị trí, độ cao, tốc độ), được truyền đi mỗi giây.41 Tất cả các phép tính phức tạp (giải pháp toán học cho quỹ đạo đạn so với quỹ đạo mục tiêu) được thực hiện tại trạm mặt đất bằng cách sử dụng dữ liệu MDI thô và động lực học GPS chính xác.41 Phương pháp này cho phép **tính toán lại kết quả chấm điểm** bằng cách sử dụng "các thông số chính xác hơn sau này" để cải thiện độ trung thực.41

Quyết định truyền *dữ liệu thô* và thực hiện hợp nhất động học GPS tại trạm chấm điểm thể hiện một lựa chọn thiết kế chiến lược: tối đa hóa hiệu quả tải trọng trên máy bay (tải trọng tính toán thấp trên máy bay không người lái) trong khi tối đa hóa độ chính xác sau nhiệm vụ (tận dụng sức mạnh tính toán mạnh mẽ và phân tích hồi cứu tại GCS). Dữ liệu đo từ xa thô này là rất quan trọng để đáp ứng yêu cầu **đo từ xa thời gian thực** đồng thời đảm bảo tính toàn vẹn và khả năng kiểm chứng của dữ liệu cho việc xác nhận R\&D và huấn luyện quân sự.

Bảng 3: Kiến trúc và Hiệu suất Chỉ thị Khoảng cách Trượt (MDI)

| Loại MDI | Nguyên lý Phát hiện | Đầu ra Đo lường | Phạm vi Góc | Liên kết Đo từ xa | Vị trí Tính toán |
| :---- | :---- | :---- | :---- | :---- | :---- |
| MDI Âm thanh (AS-134/12U) | Biên độ & Thời gian Sóng xung kích 38 | Khoảng cách Trượt (MMD) và Vị trí Góc.37 | 12-Sector (360°); công suất \>6000 viên/phút.37 | Dữ liệu Thô Thời gian Thực \+ Tọa độ GPS (330-473 MHz).41 | Trạm Chấm điểm Mặt đất (GCS) để tái tạo quỹ đạo.41 |
| MDI Radar (Doppler/FMCW) | Dịch chuyển Tần số Sóng điện từ 39 | Khoảng cách và Tốc độ Tương đối (Doppler).39 | Khả năng theo dõi liên tục. | Dữ liệu Đã xử lý Thời gian Thực. | Trên máy bay hoặc GCS. |

## **Section 5: Đối Kháng Điện tử Tích hợp (Electronic Countermeasures \- ECM)**

Máy bay không người lái mục tiêu phải được trang bị các bộ ECM đầy đủ để xác nhận các hệ thống tự bảo vệ phức tạp trên máy bay có người lái và các đơn vị mặt đất. ECM là rất quan trọng để từ chối thông tin nhắm mục tiêu.42

### **5.1 Các biện pháp Đối kháng Tiêu hao (Chaff và Flares)**

* **Bộ phóng Chaff:** Các hệ thống này phóng ra các dải hoặc sợi kim loại (chaff) tạo ra các phản hồi radar giả mạo lớn, che khuất mục tiêu thực tế và làm rối loạn các hệ thống theo dõi.43 Chaff là biện pháp đối kháng phổ biến nhất trên các tàu hải quân.43  
* **Bộ phóng Flare:** Pháo sáng (Flares) tạo ra các chữ ký nhiệt cường độ cao (pyrotechnic) được thiết kế để đánh lừa tên lửa dẫn đường bằng IR khỏi chữ ký động cơ của máy bay không người lái mục tiêu.28

### **5.2 Kỹ thuật Gây nhiễu RF (RF Jamming)**

Gây nhiễu liên quan đến việc phát ra tín hiệu tần số vô tuyến để bão hòa hoặc gây nhầm lẫn cho các radar thù địch. Gây nhiễu có thể được sử dụng để phòng thủ (tự bảo vệ) hoặc tấn công (từ chối nhắm mục tiêu).42 Các hệ thống gây nhiễu máy bay không người lái mục tiêu hiện đại thường sử dụng công nghệ DRFM để tạo ra các tín hiệu lừa dối (ví dụ: mục tiêu giả) thay vì chỉ gây nhiễu trắng đơn thuần.23 Việc vận hành các hệ thống EW cách xa nền tảng bảo vệ (ví dụ: sử dụng pod drone như một máy gây nhiễu đứng ngoài) giảm thiểu sự can thiệp vào vũ khí của nền tảng đó và cho phép sử dụng các biện pháp đối kháng băng thông rộng hơn.43

### **5.3 Kiến trúc Lệnh và Kiểm soát**

Việc triển khai các biện pháp đối kháng phải đáp ứng kịp thời mối đe dọa. Các hệ thống ECM có thể được kích hoạt tự động (dựa trên các bộ thu cảnh báo mối đe dọa tích hợp với bộ ECM 43) hoặc được ra lệnh thủ công từ Trạm Kiểm soát Mặt đất (GCS). Các hệ thống phóng thường là các thành phần tích hợp của một bộ Tác chiến Điện tử (EW) rộng hơn, được liên kết với các hệ thống cảnh báo để đảm bảo thời gian phản hồi nhanh chóng.43

Sự chuyển hướng sang việc phóng ECM tự động, liên kết với các hệ thống cảnh báo, nhấn mạnh yêu cầu về khả năng đánh giá mối đe dọa tốc độ cao, tự động, điều khiển bằng AI trên máy bay. Tải trọng máy bay không người lái mục tiêu hiện đại phải bao gồm Bộ điều khiển Bộ EW (EWC) và Bộ thu Cảnh báo Radar (RWR) kỹ thuật số tinh vi 25, có khả năng tự động xác định các mối đe dọa và tính toán các hành động phản hồi tối ưu (ví dụ: thời gian và số lượng triển khai flare/chaff, kích hoạt gây nhiễu DRFM) nhanh hơn nhiều so với can thiệp của con người từ GCS.

## **Section 6: Mục tiêu Kéo và Hệ thống Vận hành**

Mục tiêu kéo là cần thiết để tách biệt an toàn máy bay không người lái/máy bay chủ đắt tiền khỏi khu vực giao chiến bắn đạn thật, đồng thời cung cấp mô phỏng chữ ký có thể tùy chỉnh.

### **6.1 Các Loại Mục tiêu Kéo**

* **Mục tiêu Băng rôn (Banner targets):** Hình thức đơn giản nhất, thường là tay áo vải được sử dụng chủ yếu để huấn luyện pháo kích trên không.44  
* **Mục tiêu Kéo IR (TPT, TGX-IR):** Cung cấp chữ ký IR thực tế mọi góc nhìn, thường kết hợp cả bộ phát điện phía trước (FIRE-40) và bộ tạo khói động cơ dựa trên nhiên liệu (APC-6) để phủ sóng tối đa trên các băng tần MWIR và SWIR.7 TPT sử dụng nhiên liệu phản lực (JP-4, JP-8, JET A) để mô phỏng khí thải.7  
* **Mục tiêu Kéo Tăng cường Radar (TGX, TRX):** Được trang bị bộ phản xạ radar thụ động độ lợi cao (ví dụ: bộ phản xạ băng tần I/J (X) độc quyền) để mô phỏng các giá trị RCS cụ thể, đôi khi đạt 5 mét vuông.45 Chúng thường sử dụng máy phát điện tuabin khí nén (ram air turbine) ở đuôi để cung cấp nguồn điện 28 volt liên tục.34

### **6.2 Hệ thống Cuộn Dây Tự động**

Khả năng cơ học để triển khai và thu hồi mục tiêu là rất quan trọng đối với an toàn và khả năng tái sử dụng. Các hệ thống tự động (ví dụ: RM-30A1) được thiết kế cho việc triển khai hiệu suất cao. Chúng hỗ trợ chiều dài dây kéo lên đến **9,450 mét (31,000 feet)**, tùy thuộc vào cấu hình mục tiêu được kéo.44 Các hệ thống cuộn dây như MTR-101 hoạt động lên đến 25,000 feet MSL ở tốc độ lên đến 300 KIAS.46 Khả năng tái sử dụng mục tiêu thông qua máy cuộn dây làm giảm thiểu chi phí trên mỗi nhiệm vụ và cho phép các khu vực giao chiến an toàn cách xa máy bay kéo.2

Chiều dài dây kéo tối đa 31,000 feet (9.45 km) là một thước đo trực tiếp về an toàn hoạt động. Khoảng cách này là rất quan trọng khi thử nghiệm vũ khí tốc độ cao, năng suất cao hoặc huấn luyện các nhà khai thác MANPADS, đảm bảo rằng máy bay không người lái hoặc nền tảng phóng chính vẫn nằm an toàn ngoài bán kính vụ nổ và vùng mảnh vỡ tiềm năng.

## **Section 7: Kết luận Chiến lược và Định hướng Phát triển Tương lai**

### **7.1 Ma trận Khả năng của Nhà cung cấp và Tổng hợp Nền tảng Chính**

Các nhà sản xuất chính như Kratos, QinetiQ và Meggitt (nay là một phần của Parker Meggitt Defense) thống trị thị trường, mỗi nhà chuyên về công nghệ nền tảng hoặc tải trọng.3 Kratos tập trung vào các mục tiêu trên không kích thước đầy đủ (FSAT) hiệu suất cao như BQM-167 5, trong khi QinetiQ chuyên về các tải trọng có khả năng thích ứng cao như AHRE và Fire-40 Hot Nose.22 Khả năng của các nền tảng như MQM-178 Firejet (khả năng tải trọng nội bộ 70 lb) 4 để chứa nhiều loại tăng cường RF/IR/kéo khác nhau 5 khẳng định sự phụ thuộc của ngành vào các thiết kế mô-đun, được tối ưu hóa cao.

### **7.2 Khuyến nghị để Tối đa hóa Độ trung thực Chữ ký**

Để đáp ứng các yêu cầu độ trung thực cao được chỉ định, cần thực hiện các bước sau:

1. **Bắt buộc Tích hợp DRFM:** Yêu cầu các hệ thống DRFM RTES chuyển từ tăng cường RCS đơn giản sang mô phỏng hành vi mục tiêu lừa dối, phức tạp và hồ sơ radar LPI/LPD.23  
2. **Nâng cấp Nguồn IR Lưỡng Băng tần:** Nhận ra những hạn chế hiện tại của các nguồn MWIR điện (40 W/sr) 29 và bắt buộc tích hợp các nguồn đốt năng lượng cao (ví dụ: đầu đốt propane đạt 400 W/sr trong SWIR 33) để đạt mục tiêu 200 W/sr và đạt được độ phức tạp chữ ký lưỡng băng tần thực tế (SWIR/MWIR).32  
3. **Hợp nhất Dữ liệu MDI:** Đảm bảo tất cả các hệ thống MDI truyền dữ liệu âm thanh thô và động lực học GPS về GCS, hỗ trợ chấm điểm sau nhiệm vụ có độ chính xác cao và tái tạo quỹ đạo.41

### **7.3 Xu hướng Tương lai: Tự chủ, Mô phỏng Bầy đàn và Giảm Chi phí**

* **Tự chủ AI và Mô phỏng Bầy đàn:** Máy bay không người lái mục tiêu trong tương lai sẽ tận dụng khả năng tự chủ AI tăng lên cho việc kiểm soát chuyến bay 2, cho phép cơ động phức tạp và, quan trọng nhất, mô phỏng bầy máy bay không người lái cho huấn luyện phòng không nối mạng.47  
* **Tập trung vào Khả năng Tái sử dụng:** Do chi phí mua sắm tăng cao, xu hướng thị trường thiên về các nền tảng có thể thu hồi và mô-đun (như Firejet có thể thu hồi bằng dù 4) hơn là các mục tiêu dùng một lần, làm giảm chi phí trên mỗi nhiệm vụ.2

#### **Works cited**

1. Intelligent Simulation Technology Based on RCS Imaging \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/2076-3417/13/18/10119](https://www.mdpi.com/2076-3417/13/18/10119)  
2. Target Drone Market Size, Share | Growth Report \[2025-2032\], accessed November 10, 2025, [https://www.fortunebusinessinsights.com/target-drone-market-114033](https://www.fortunebusinessinsights.com/target-drone-market-114033)  
3. Top 10 Companies in Target Drone Market in 2024 \- Emergen Research, accessed November 10, 2025, [https://www.emergenresearch.com/blog/top-10-companies-in-target-drone-market](https://www.emergenresearch.com/blog/top-10-companies-in-target-drone-market)  
4. Firejet | Kratos Defense, accessed November 10, 2025, [https://www.kratosdefense.com/unmanned-systems/air/aerial-targets/firejet](https://www.kratosdefense.com/unmanned-systems/air/aerial-targets/firejet)  
5. Aerial Targets \- Kratos Defense, accessed November 10, 2025, [https://www.kratosdefense.com/unmanned-systems/air/aerial-targets](https://www.kratosdefense.com/unmanned-systems/air/aerial-targets)  
6. BQM-34S \- NAVAIR, accessed November 10, 2025, [https://www.navair.navy.mil/product/BQM-34S](https://www.navair.navy.mil/product/BQM-34S)  
7. TPT Plume augmented target \- Parker Defense Systems Division, accessed November 10, 2025, [https://meggittdefense.com/product/tpt-plume-augmented-target/](https://meggittdefense.com/product/tpt-plume-augmented-target/)  
8. WHITE SANDS \- U.S. Army Test and Evaluation Command, accessed November 10, 2025, [https://www.atec.army.mil/wstc/tev/pubs/WSMR\_2018\_RCH\_FINAL\_v1\_1.pdf](https://www.atec.army.mil/wstc/tev/pubs/WSMR_2018_RCH_FINAL_v1_1.pdf)  
9. Low, Slow, Small Threats Modelling and Simulation \- DTIC, accessed November 10, 2025, [https://apps.dtic.mil/sti/trecms/pdf/AD1183697.pdf](https://apps.dtic.mil/sti/trecms/pdf/AD1183697.pdf)  
10. NATO-STO-Drone-Signature-Modelling-CfP.pdf \- Future Forces Forum, accessed November 10, 2025, [https://future-forces-forum.org/download/NATO-STO-Drone-Signature-Modelling-CfP.pdf](https://future-forces-forum.org/download/NATO-STO-Drone-Signature-Modelling-CfP.pdf)  
11. Small Unmanned Aerial System Adversary Capabilities \- RAND, accessed November 10, 2025, [https://www.rand.org/content/dam/rand/pubs/research\_reports/RR3000/RR3023/RAND\_RR3023.pdf](https://www.rand.org/content/dam/rand/pubs/research_reports/RR3000/RR3023/RAND_RR3023.pdf)  
12. Radar cross section \- Wikipedia, accessed November 10, 2025, [https://en.wikipedia.org/wiki/Radar\_cross\_section](https://en.wikipedia.org/wiki/Radar_cross_section)  
13. Small Fixed-Wing UAV Radar Cross-Section Signature Investigation and Detection and Classification of Distance Estimation Using Realistic Parameters of a Commercial Anti-Drone System \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/2504-446X/7/1/39](https://www.mdpi.com/2504-446X/7/1/39)  
14. A quantitative study of Luneberg-lens reflectors | Request PDF \- ResearchGate, accessed November 10, 2025, [https://www.researchgate.net/publication/3305338\_A\_quantitative\_study\_of\_Luneberg-lens\_reflectors](https://www.researchgate.net/publication/3305338_A_quantitative_study_of_Luneberg-lens_reflectors)  
15. COMPARISON OF REFLECTIVE PROPERTIES OF CORNER REFLECTOR CLUSTERS AND LUNEBURG LENS REFLECTORS \- DTIC, accessed November 10, 2025, [https://apps.dtic.mil/sti/tr/pdf/AD0640577.pdf](https://apps.dtic.mil/sti/tr/pdf/AD0640577.pdf)  
16. COMPARISON OF REFLECTIVE PROPERTIES OF CORNER REFLECTOR CLUSTERS AND LUNEBURG LENS REFLECTORS \- DTIC, accessed November 10, 2025, [https://apps.dtic.mil/sti/citations/AD0640577](https://apps.dtic.mil/sti/citations/AD0640577)  
17. Radar Reflector Corner Reflector for Automotive Calibration RCS Target Simulate | eBay, accessed November 10, 2025, [https://www.ebay.com/itm/166759311312](https://www.ebay.com/itm/166759311312)  
18. Analysis of the Dihedral Corner Reflector's RCS Features in Multi-Resource SAR \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/2076-3417/14/12/5054](https://www.mdpi.com/2076-3417/14/12/5054)  
19. What are Radar Target Simulators? \- everything RF, accessed November 10, 2025, [https://www.everythingrf.com/community/what-are-radar-target-simulators](https://www.everythingrf.com/community/what-are-radar-target-simulators)  
20. Active Radar Enhancement System from QinetiQ, accessed November 10, 2025, [https://www.qinetiq.com/en/what-we-do/services-and-products/active-radar-enhancement](https://www.qinetiq.com/en/what-we-do/services-and-products/active-radar-enhancement)  
21. Active radar homing \- Wikipedia, accessed November 10, 2025, [https://en.wikipedia.org/wiki/Active\_radar\_homing](https://en.wikipedia.org/wiki/Active_radar_homing)  
22. Active radar homing emulator \- QinetiQ, accessed November 10, 2025, [https://www.qinetiq.com/-/media/15383094fb194606bff82192ed426a5c.ashx](https://www.qinetiq.com/-/media/15383094fb194606bff82192ed426a5c.ashx)  
23. The DRFM Advantage: How Digilogic's Radar Target Echo Simulator is Revolutionizing Radar Test & Evaluation, accessed November 10, 2025, [https://digilogicsystems.com/blog/the-drfm-advantage-how-digilogics-radar-target-echo-simulator-is-revolutionizing-radar-test-and-evaluation/](https://digilogicsystems.com/blog/the-drfm-advantage-how-digilogics-radar-target-echo-simulator-is-revolutionizing-radar-test-and-evaluation/)  
24. Simulators \- Unistring Tech Solutions, accessed November 10, 2025, [https://unistring.com/simulators/](https://unistring.com/simulators/)  
25. Launched Effects Systems \- Elbit America, accessed November 10, 2025, [https://www.elbitamerica.com/launched-effects](https://www.elbitamerica.com/launched-effects)  
26. Low-probability-of-intercept radar \- Wikipedia, accessed November 10, 2025, [https://en.wikipedia.org/wiki/Low-probability-of-intercept\_radar](https://en.wikipedia.org/wiki/Low-probability-of-intercept_radar)  
27. LPI Radar Detection Based on Deep Learning Approach with Periodic Autocorrelation Function \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/1424-8220/23/20/8564](https://www.mdpi.com/1424-8220/23/20/8564)  
28. Target drone systems | Unmanned Aerial Systems \- Airbus, accessed November 10, 2025, [https://www.airbus.com/en/products-services/defence/uas/target-drone-systems](https://www.airbus.com/en/products-services/defence/uas/target-drone-systems)  
29. Naval Aerial Targets Fire-40 Hot Nose by QinetiQ, accessed November 10, 2025, [https://www.qinetiq.com/en/what-we-do/services-and-products/fire-40-hot-nose](https://www.qinetiq.com/en/what-we-do/services-and-products/fire-40-hot-nose)  
30. DOCUMENT 809-10 STANDARDS AND PROCEDURES FOR APPLICATION OF RADIOMETRIC SENSORS, accessed November 10, 2025, [https://www.trmc.osd.mil/wiki/download/attachments/113019989/809-10%20Standards%20and%20Procedures%20for%20Application%20of%20Radiometric%20Sensors.pdf?api=v2](https://www.trmc.osd.mil/wiki/download/attachments/113019989/809-10%20Standards%20and%20Procedures%20for%20Application%20of%20Radiometric%20Sensors.pdf?api=v2)  
31. Small Unmanned Aircraft (sUAS)-Deployed Thermal Infrared (TIR) Imaging for Environmental Surveys with Implications in Submarine Groundwater Discharge (SGD): Methods, Challenges, and Novel Opportunities \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/2072-4292/13/7/1331](https://www.mdpi.com/2072-4292/13/7/1331)  
32. Infrared signature of aero-engine exhaust plume's potential core and aircraft surface from direct bottom view | The Aeronautical Journal \- Cambridge University Press, accessed November 10, 2025, [https://www.cambridge.org/core/journals/aeronautical-journal/article/infrared-signature-of-aeroengine-exhaust-plumes-potential-core-and-aircraft-surface-from-direct-bottom-view/D14DC72BD1247D01A1D4883B5B17B687](https://www.cambridge.org/core/journals/aeronautical-journal/article/infrared-signature-of-aeroengine-exhaust-plumes-potential-core-and-aircraft-surface-from-direct-bottom-view/D14DC72BD1247D01A1D4883B5B17B687)  
33. TIX INFRARED-AUGMENTED TOW TARGET \- Meggitt Defense Systems, accessed November 10, 2025, [https://meggittdefense.com/wp-content/uploads/2017/01/TIX\_Infrared.pdf](https://meggittdefense.com/wp-content/uploads/2017/01/TIX_Infrared.pdf)  
34. TGX-IR All Aspect Realistic Infrared Signature Tow Target \- Meggitt Letter, accessed November 10, 2025, [https://meggittdefense.com/wp-content/uploads/2020/06/TGX-IR.pdf](https://meggittdefense.com/wp-content/uploads/2020/06/TGX-IR.pdf)  
35. Simulation Analysis on the Characteristics of Aerosol Particles to Inhibit the Infrared Radiation of Exhaust Plumes \- MDPI, accessed November 10, 2025, [https://www.mdpi.com/1996-1944/17/14/3505](https://www.mdpi.com/1996-1944/17/14/3505)  
36. Fire-40 Hot Nose (Forward Infrared Emitter) \- QinetiQ, accessed November 10, 2025, [https://www.qinetiq.com/-/media/7a513a0b633045d18bbb6e0d8310ea67.ashx](https://www.qinetiq.com/-/media/7a513a0b633045d18bbb6e0d8310ea67.ashx)  
37. The universal 12-sector Miss Distance Indica- tor MDI AS-133/12U is intended to be installed in both hard targets and UAVs ( \- Military Systems and Technology, accessed November 10, 2025, [https://www.militarysystems-tech.com/sites/militarysystems/files/supplier\_docs/MDI\_133\_tech\_data\_Edition%202022-03-16.pdf](https://www.militarysystems-tech.com/sites/militarysystems/files/supplier_docs/MDI_133_tech_data_Edition%202022-03-16.pdf)  
38. MISS DISTANCE INDICATOR AS-134/12U \- Military Systems and Technology, accessed November 10, 2025, [https://www.militarysystems-tech.com/sites/militarysystems/files/supplier\_docs/MDI\_134\_tech\_data\_Edition%202022-03-17.pdf](https://www.militarysystems-tech.com/sites/militarysystems/files/supplier_docs/MDI_134_tech_data_Edition%202022-03-17.pdf)  
39. Distance sensor types | Advantages of radar vs laser & ultrasonic \- OndoSense, accessed November 10, 2025, [https://ondosense.com/en/distance-sensors-radar-displacement-sensor/](https://ondosense.com/en/distance-sensors-radar-displacement-sensor/)  
40. Decoding Radar & Acoustic Sensors: A Deep Dive \- YouTube, accessed November 10, 2025, [https://www.youtube.com/watch?v=M6fS\_EeoGeo](https://www.youtube.com/watch?v=M6fS_EeoGeo)  
41. Miss Distance Indicators for sleeve targets \- AIR TARGET, accessed November 10, 2025, [https://www.airtarget.com/products/miss-distance-indicators-for-sleeve-targets/](https://www.airtarget.com/products/miss-distance-indicators-for-sleeve-targets/)  
42. Electronic countermeasure \- Wikipedia, accessed November 10, 2025, [https://en.wikipedia.org/wiki/Electronic\_countermeasure](https://en.wikipedia.org/wiki/Electronic_countermeasure)  
43. An illustrated overview of ESM and ECM systems \- CORE, accessed November 10, 2025, [https://core.ac.uk/download/36719434.pdf](https://core.ac.uk/download/36719434.pdf)  
44. Towed Systems, accessed November 10, 2025, [https://meggittdefense.com/wp-content/uploads/2021/01/Towed\_Systems\_2020.pdf](https://meggittdefense.com/wp-content/uploads/2021/01/Towed_Systems_2020.pdf)  
45. TGX Augmented radar tow target \- Parker Defense Systems Division, accessed November 10, 2025, [https://meggittdefense.com/product/tgx-augmented-radar-tow-target/](https://meggittdefense.com/product/tgx-augmented-radar-tow-target/)  
46. MTR-101 Reeling Machine \- Air Affairs Australia | Specialised Aviation Services | Bushfire Scanning | Airborne Remote Sensing | Defence Training | Advanced Manufacturing Centre, accessed November 10, 2025, [https://www.airaffairs.com.au/products/mtr-101-reeling-machine/](https://www.airaffairs.com.au/products/mtr-101-reeling-machine/)  
47. Use Cases and Applications of Target Drones in Modern Defense and Training \- Hinaray, accessed November 10, 2025, [https://hinaray.com/use-cases-and-applications-of-target-drones-in-modern-defense-and-training/](https://hinaray.com/use-cases-and-applications-of-target-drones-in-modern-defense-and-training/)