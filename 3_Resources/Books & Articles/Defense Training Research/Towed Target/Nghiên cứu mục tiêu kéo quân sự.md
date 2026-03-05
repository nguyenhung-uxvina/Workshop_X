

# **PHÂN TÍCH CHUYÊN SÂU HỆ THỐNG MỤC TIÊU KÉO TRÊN KHÔNG: CÔNG NGHỆ TĂNG CƯỜNG TÍN HIỆU ĐA PHỔ VÀ AN TOÀN VẬN HÀNH**

## **CHƯƠNG I: PHẠM VI CHIẾN LƯỢC VÀ PHÂN LOẠI HỆ THỐNG MỤC TIÊU KÉO HIỆN ĐẠI**

### **1.1. Bối cảnh: Mục tiêu Kéo (Towed Targets) trong Thử nghiệm và Huấn luyện Tác chiến**

Mục tiêu Kéo trên không (Towed Targets) đại diện cho một phân khúc quan trọng và ngày càng tinh vi trong lĩnh vực huấn luyện và thử nghiệm phòng thủ quân sự. Về bản chất, mục tiêu kéo là một nền tảng thụ động hoặc bán chủ động được thiết kế để mô phỏng các mối đe dọa hàng không thực tế—bao gồm máy bay chiến đấu, tên lửa hành trình, và các phương tiện bay không người lái (UAV)—mà không cần sử dụng các phương tiện mục tiêu độc lập (target drones) có chi phí cao hơn \[User Query\].

Vai trò cốt lõi của mục tiêu kéo là cung cấp một điểm ngắm bắn vật lý, cho phép thực hiện huấn luyện bằng đạn thật (live-fire) cho cả pháo phòng không (air defense artillery) và các hệ thống không đối không bằng tên lửa và đạn pháo \[User Query\]. Chúng được kéo phía sau phương tiện kéo (máy bay hoặc drone chính) bằng một sợi cáp dài hàng trăm mét, đảm bảo khoảng cách tách biệt an toàn để bảo vệ phương tiện kéo khỏi mảnh đạn hoặc hỏa lực lạc \[User Query\]. Sự ra đời của các công nghệ tăng cường tín hiệu đa phổ đã chuyển mục tiêu kéo từ những bia tập đơn giản thành các mô hình vật lý phức tạp của mối đe dọa, buộc các hệ thống phòng thủ phải kiểm tra toàn bộ chu trình tiêu diệt (Detection, Acquisition, Tracking, Guidance, Fuzing) của hệ thống vũ khí.

### **1.2. Phân loại Cấu hình Mục tiêu Kéo Cơ bản**

Thị trường mục tiêu kéo được phân chia rõ rệt dựa trên mức độ phức tạp và khả năng mô phỏng tín hiệu mà chúng cung cấp.

#### **1.2.1. Mục tiêu Băng vải (Banner Target)**

Đây là loại mục tiêu kéo đơn giản và rẻ nhất, thường là tấm vải hoặc băng vật liệu dài nhiều mét \[User Query\]. Banner target chủ yếu được sử dụng cho các bài tập huấn luyện ngắm bắn trực quan cơ bản. Để hỗ trợ xạ thủ và hệ thống ngắm bắn sơ cấp, vật liệu vải bố thường được gắn thêm dải phản quang hoặc vật phản xạ radar nhỏ \[User Query\].

Ưu điểm chính của banner target là chi phí thấp và tính chất đơn giản; nếu bị bắn trúng, chỉ cần thay băng vải, không gây thiệt hại cho máy bay kéo \[User Query\]. Tuy nhiên, nhược điểm lớn nhất là chúng không tạo ra được tín hiệu hồng ngoại (IR) hay radar đáng kể (trừ khi gắn thêm các thiết bị phụ) \[User Query\], do đó chúng chỉ hữu dụng cho huấn luyện ngắm bắn trực quan và không thể kiểm tra các hệ thống dẫn đường hiện đại của tên lửa.

#### **1.2.2. Phân loại theo Mức độ Tăng cường Tín hiệu**

Các hệ thống mục tiêu kéo hiện đại được phân loại chủ yếu dựa trên khả năng mô phỏng dấu hiệu vật lý của mối đe dọa:

1. **Mục tiêu Kéo Tăng cường IR (Infrared Augmentation):** Chuyên dụng để mô phỏng dấu hiệu nhiệt động cơ và ma sát khí động học của máy bay hoặc tên lửa.1  
2. **Mục tiêu Kéo Tăng cường Radar (Radar Augmentation):** Mang theo thiết bị khuếch đại radar hoặc phản xạ lớn để mô phỏng tiết diện phản xạ radar (RCS) cao hoặc thấp của các mục tiêu cụ thể.2  
3. **Mục tiêu Chuyên dụng:** Ví dụ như mục tiêu giữ độ cao thấp (TLX-1), chuyên dùng để mô phỏng mối đe dọa tên lửa sea-skimming (bay là là mặt biển).3

Sự tồn tại của các loại mục tiêu kéo khác nhau, từ băng vải giá rẻ đến các hệ thống TGX-IR hoặc TRX công nghệ cao, cho thấy các lực lượng quân sự áp dụng mô hình huấn luyện phân cấp về độ chân thực. Banner targets phục vụ giai đoạn cơ bản cho xạ thủ, trong khi các mục tiêu tăng cường đa phổ được dành cho các kịch bản thử nghiệm phức tạp, nhằm kiểm tra khả năng hoạt động của hệ thống radar, hệ thống dẫn đường tên lửa, và ngòi nổ (fuzing).2

### **1.3. Phân tích Chi phí-Hiệu quả và Khía cạnh An toàn Vận hành**

Mục tiêu kéo cung cấp một giải pháp huấn luyện kinh tế và an toàn hơn so với việc sử dụng các drone mục tiêu độc lập đắt tiền (jet target drones). Bản thân mục tiêu kéo đơn giản, không cần động cơ hay hệ thống điều khiển phức tạp, giúp tiết kiệm chi phí vận hành đáng kể \[User Query\].

Trong trường hợp mục tiêu bị bắn trúng trong quá trình huấn luyện bằng đạn thật, chỉ có mục tiêu kéo là bị phá hủy, trong khi phương tiện kéo (máy bay hoặc drone) vẫn duy trì khoảng cách an toàn \[User Query\]. Điều này tối đa hóa lợi ích của huấn luyện bằng đạn thật mà không đặt phi công hoặc tài sản có giá trị cao vào rủi ro không cần thiết.4

#### **1.3.1. Xu hướng Chuyển đổi sang Phương tiện Kéo Không người lái (UAS Target Tugs)**

Để loại bỏ hoàn toàn rủi ro đối với nhân sự, các phương tiện kéo đang có xu hướng chuyển từ máy bay có người lái (manned aircraft) sang Drone Mục tiêu (UAS target tugs).5 Việc sử dụng drone làm phương tiện kéo không chỉ giảm thiểu rủi ro cho phi công mà còn cắt giảm chi phí bảo trì, vận hành và chuẩn bị nhiệm vụ.5 Một số hệ thống drone kéo hiện đại có thể tích hợp các hệ thống phòng thủ điện tử (electronic defense systems) để bảo vệ chính nó khỏi vũ khí dựa trên radar, đảm bảo tính bền vững của nhiệm vụ huấn luyện.5

#### **1.3.2. Tính Linh hoạt Chiến lược**

Khả năng dễ dàng thay đổi cấu hình RCS (chỉ cần lắp đặt thấu kính hoặc thiết bị phát đáp khác) trên các mục tiêu kéo tiên tiến \[User Query\] là một lợi thế chiến lược quan trọng. Tính mô đun này cho phép quân đội nhanh chóng điều chỉnh kịch bản huấn luyện để đối phó với thông tin tình báo mới hoặc các mối đe dọa tiềm tàng mới nổi. Điều này tạo ra một lợi thế vượt trội so với các drone mục tiêu độc lập, vốn thường có cấu hình cố định và đắt đỏ hơn nhiều.6

## **CHƯƠNG II: CÔNG NGHỆ MÔ PHỎNG DẤU HIỆU HỒNG NGOẠI (IR AUGMENTATION)**

### **2.1. Yêu cầu Mô phỏng: Tầm quan trọng của Dấu hiệu Nhiệt**

Dấu hiệu nhiệt (Thermal Signature) là yếu tố quyết định đối với các hệ thống tên lửa dẫn đường hồng ngoại (IR-guided missiles). Các tên lửa hiện đại, đặc biệt là những loại sử dụng đầu dò hình ảnh hồng ngoại (IIR), yêu cầu một dấu hiệu mục tiêu chân thực để kiểm tra khả năng khóa mục tiêu và phân biệt giữa mục tiêu thật và các biện pháp đối phó (như pháo sáng).

Việc mô phỏng dấu hiệu nhiệt phức tạp đòi hỏi phải tái tạo chính xác cả hai thành phần chính: (1) Bức xạ nhiệt từ bề mặt mục tiêu bị nén khí (ma sát khí động học) ở tốc độ cao, và (2) Khí thải động cơ (jet exhaust plume) ở phía sau và góc chéo.1

### **2.2. Kỹ thuật Meggitt TGX-IR: Giải pháp Tín hiệu Hồng ngoại Toàn diện (All-Aspect IR)**

Công ty Meggitt Defense Systems đã phát triển mục tiêu kéo TGX-IR để cung cấp một giải pháp mô phỏng hồng ngoại toàn diện và chân thực. TGX-IR sử dụng kiến trúc nguồn nhiệt kép để đảm bảo phủ sóng hồng ngoại 360 độ (All-aspect IR coverage).7

#### **2.2.1. Phân tích Nguồn IR Hướng trước (Head-on)**

Đối với dấu hiệu nhiệt hướng về phía trước (mô phỏng nhiệt ma sát của mũi máy bay), TGX-IR sử dụng thiết bị phát hồng ngoại hướng trước **FIRE-40 (Forward Infrared Emitter)**.7 Nguồn IR này được cung cấp năng lượng bằng điện và được tối ưu hóa với lớp phủ chống phản chiếu (high efficiency AR coating) trên cửa sổ phát nhiệt.

Thông số kỹ thuật của FIRE-40 cho thấy khả năng bức xạ cao, cung cấp tới **40 W/sr** (Watts/Steradian) cường độ bức xạ trong băng tần **3 đến 5 $\\mu$m**.7 Băng tần 3–5 $\\mu$m là dải sóng chính mà các cảm biến IR tầm trung sử dụng để phát hiện nhiệt từ các bề mặt nóng như mũi máy bay do nén khí. Cường độ 40 W/sr mô phỏng chính xác dấu hiệu nhiệt của đầu máy bay phản lực ở tốc độ cao.1 Việc cung cấp một nguồn nhiệt điểm chính xác và ổn định ở phía trước rất quan trọng để huấn luyện các tên lửa khóa mục tiêu ở góc đối đầu.

#### **2.2.2. Bộ Tạo Khói Nhiệt (Plume Generator) và Phủ sóng Góc sau**

Để mô phỏng khí thải động cơ phản lực, TGX-IR tích hợp **Bộ tạo Plume APC-6 (Plume Generator)**, tạo ra một luồng khói nóng rõ rệt, cung cấp dấu hiệu hồng ngoại cho góc sau và góc chéo (Aft and beam infrared signature).7 Bộ tạo khói này sử dụng nhiên liệu máy bay phản lực có sẵn (như JP-4, JP-8, JET A, v.v.).7

Thiết kế mô đun, sử dụng nguồn điện riêng cho nhiệt bề mặt (FIRE-40) và nguồn đốt nhiên liệu riêng cho khói nhiệt (APC-6), cho phép hệ thống này mô phỏng dấu hiệu nhiệt phức tạp. Các tên lửa IR thế hệ mới sử dụng công nghệ hình ảnh nhiệt để phân biệt các nguồn nhiệt khác nhau (ví dụ: nhiệt bề mặt so với khói thải), và bằng cách cung cấp cả hai nguồn một cách chân thực, TGX-IR buộc tên lửa phải sử dụng thuật toán bám sát tiên tiến để xác định mục tiêu thực sự, nâng cao đáng kể độ chân thực và độ khó của huấn luyện.

### **2.3. Điều kiện Khí động học và Quản lý Năng lượng**

Mục tiêu kéo IR như TGX-IR được chế tạo với vỏ ngoài chịu nhiệt và thiết kế khí động học tiên tiến để duy trì chuyến bay ổn định ở tốc độ cao, thường đạt **Mach 0.8–0.9** \[User Query\].

Vận hành các hệ thống tăng cường tín hiệu cường độ cao như FIRE-40 yêu cầu một nguồn năng lượng ổn định. Nguồn điện này được cung cấp thông qua **máy phát điện chạy bằng luồng khí nén (ram air turbine generator)** đặt ở đuôi mục tiêu.7 Cơ chế này đảm bảo mục tiêu kéo có thể tự duy trì nguồn điện liên tục và ổn định trong suốt nhiệm vụ bay tốc độ cao, một thách thức kỹ thuật đối với một nền tảng bị kéo.

TGX-IR cũng được thiết kế với đủ không gian bên trong để lắp đặt hệ thống chấm điểm (scoring system) nếu cần.7 Việc sử dụng máy phát điện Ram Air Turbine trên một thiết bị kéo đơn giản như vậy là một minh chứng cho kỹ thuật quản lý năng lượng tinh vi, đảm bảo nguồn điện cho các bộ phát IR công suất cao được duy trì liên tục, ngay cả khi thực hiện các thao tác bay căng thẳng.

## **CHƯƠNG III: CÔNG NGHỆ TĂNG CƯỜNG TIẾT DIỆN PHẢN XẠ RADAR (RCS AUGMENTATION)**

### **3.1. Vai trò của RCS trong Mô phỏng Mối đe dọa và Dẫn đường Radar**

Trong huấn luyện phòng không hiện đại, RCS là dấu hiệu vật lý quan trọng nhất để kiểm tra hiệu suất của radar bám sát và các hệ thống tên lửa dẫn đường bằng radar. Mục tiêu tăng cường radar được thiết kế để tương thích với bất kỳ hệ thống vũ khí nào (tên lửa hoặc pháo) yêu cầu chữ ký radar cho các chức năng từ thu nhận, bám sát, đo tầm, đến dẫn đường hoặc kích nổ ngòi nổ.2

Các mục tiêu này phải hoạt động trên nhiều băng tần radar khác nhau, bao gồm I/J/X-band, để đáp ứng các yêu cầu mô phỏng chính xác theo từng loại vũ khí.2

### **3.2. Hệ thống TRX của Meggitt: Cấu hình RCS Linh hoạt và Đa băng tần**

Hệ thống TRX Radar-Augmented Tow Target của Parker Meggitt là một nền tảng linh hoạt được thiết kế để mô phỏng một phổ rộng các mối đe dọa.2

#### **3.2.1. Thiết kế Linh hoạt và Phổ RCS**

TRX sử dụng hệ thống tăng cường radar thường là **thụ động**, dựa trên việc sắp xếp các thấu kính hoặc tấm phản xạ bên trong mục tiêu để điều chỉnh chữ ký radar.2 Sự linh hoạt này cho phép TRX mô phỏng hiệu quả nhiều loại mục tiêu trên không.

Hệ thống này có thể mô phỏng từ đặc tính radar "siêu nhỏ" (ultra-small, mô phỏng kiểu tàng hình – stealth type) thông qua TRX-14 passive precision target, cho đến các mục tiêu có RCS rất lớn thông qua các cấu hình tăng cường.2 Khả năng mô phỏng RCS rộng này cho phép quân đội huấn luyện không chỉ phản ứng với các mối đe dọa thông thường (RCS cao) mà còn phát triển chiến thuật đối phó với các đối thủ có công nghệ tàng hình mới nổi. TRX đã được ghi nhận đạt RCS lên tới **\~17 m² ở băng J** và **\~10 m² ở băng I/X** \[User Query\], đủ để giả lập các máy bay ném bom hoặc tên lửa hành trình cỡ lớn \[User Query\].

Ngoài tăng cường thụ động, TRX còn có thể cung cấp RCS thông qua **tăng cường chủ động**.2 Việc sử dụng các bộ phát đáp chủ động cho phép tạo ra các tín hiệu radar phức tạp hơn và mạnh mẽ hơn, cần thiết cho việc thử nghiệm các thuật toán radar tiên tiến. TRX cũng được thiết kế để tương thích với hầu hết các hệ thống chấm điểm âm thanh hoặc Doppler radar hiện có.2

### **3.3. Ứng dụng Chuyên biệt: Mục tiêu Bay thấp TLX-1**

Mục tiêu kéo TLX-1 là một ví dụ về mục tiêu chuyên dụng, được thiết kế để mô phỏng một cách chân thực mối đe dọa tên lửa tấn công ở độ cao cực thấp (extremely low altitude missile threat).3

#### **3.3.1. Kiểm soát Độ cao Chính xác**

TLX-1 sử dụng một hồ sơ bay giữ độ cao (height-keeping flight profile) để duy trì độ cao đã chọn, có thể điều chỉnh trong suốt chuyến bay từ 20 đến 500 feet, với dung sai kiểm soát độ cao cực kỳ chính xác là **$\\pm$6 feet**.3

Yêu cầu độ chính xác cao này (chỉ $\\pm$6 feet) đối với mô phỏng tên lửa bay là là mặt biển (sea-skimming missile) là một thông số kỹ thuật sống còn. Trong tác chiến hải quân, sai số độ cao lớn hơn có thể làm giảm tính chân thực, khiến tên lửa mô phỏng bị phát hiện sớm hơn hoặc bị nhầm lẫn với máy bay thông thường. Do đó, khả năng duy trì độ cao ổn định này là cần thiết để kiểm tra hiệu quả của các hệ thống phòng thủ điểm (CIWS) và hệ thống radar cảnh báo sớm của hải quân.

#### **3.3.2. Augmentation trên TLX-1**

TLX-1 có thể được trang bị nhiều gói tăng cường đồng thời.3 Tăng cường radar thụ động được cung cấp bằng cách sử dụng màn hình phản xạ thụ động I/J/X-band gắn đồng trục ở mũi, cung cấp RCS hướng trước lên tới **3.5 $\\text{m}^2$**.3 Nếu cần tăng cường hình ảnh, TLX-1 cũng có thể được trang bị đèn 600,000 candlepower ở mũi.3

---

Để minh họa các thông số kỹ thuật cốt lõi của các hệ thống tăng cường tín hiệu, Bảng A dưới đây so sánh các khả năng chính của ba loại mục tiêu kéo Meggitt hàng đầu.

Table A: So sánh Thông số Kỹ thuật Chủ yếu của Mục tiêu Kéo Tăng cường Meggitt

| Tham số | TGX-IR (IR Augmentation) | TRX (Radar Augmentation) | TLX-1 (Low-Level) |
| :---- | :---- | :---- | :---- |
| **Chức năng Chính** | Mô phỏng dấu nhiệt động cơ phản lực và bề mặt nóng. | Mô phỏng RCS, dẫn đường và khóa mục tiêu radar. | Mô phỏng tên lửa bay cực thấp (20–500 ft). |
| **Hệ thống IR** | Kép: FIRE-40 (Điện) & APC-6 (Nhiên liệu Plume).7 | Có thể lắp đặt gói tăng cường tùy chọn. | Có thể lắp đặt gói tăng cường tùy chọn.3 |
| **Cường độ IR (Head-on)** | Lên tới 40 W/sr (Băng 3–5 $\\mu$m).7 | N/A. | N/A. |
| **Hệ thống RCS** | Có thể có phản xạ nhỏ/tùy chọn. | Thụ động (Lens/Reflector) hoặc Chủ động (Transponder).2 | Phản xạ màn hình thụ động I/J/X-band.3 |
| **Phổ RCS Mô phỏng** | N/A. | Từ Ultra-small (Stealth) đến 17 $\\text{m}^2$ (Băng J).2 | Tối đa 3.5 $\\text{m}^2$ (I/J/X-band).3 |
| **Khả năng Đặc biệt** | Phủ sóng IR 360°, sử dụng nhiên liệu Jet Fuel (JP-8).7 | Hỗ trợ chấm điểm Acoustic/Doppler.2 | Duy trì độ cao ổn định ($\\pm$6 feet).3 |
| **Tốc độ Vận hành** | Thường 0.8–0.9 Mach \[User Query\]. | N/A. | N/A. |

---

## **CHƯƠNG IV: HỆ THỐNG GUỒNG CUỘN VÀ VẬN HÀNH AN TOÀN TRÊN KHÔNG**

### **4.1. Thiết kế và Chức năng Của Phương tiện Kéo và Guồng Cuộn (Reeling Machine)**

Hệ thống guồng cuộn dây cáp (Reeling Machine) là thành phần cơ điện tử không thể thiếu, đảm bảo việc vận hành mục tiêu kéo được thực hiện an toàn và có kiểm soát. Guồng cuộn chịu trách nhiệm triển khai và thu hồi mục tiêu theo lệnh, duy trì khoảng cách tách biệt an toàn \[User Query\].

Về mặt kỹ thuật, yêu cầu chính đối với guồng cuộn là khả năng tự động giữ độ căng dây ổn định (towline tension control) khi máy bay kéo thực hiện các thao tác cơ động phức tạp và thay đổi tốc độ bay \[User Query\]. Độ căng dây phải được điều chỉnh theo thời gian thực để chống lại hiện tượng bất ổn định khí động học, đặc biệt khi kéo mục tiêu ở tốc độ cận âm cao, vốn có thể bị ảnh hưởng bởi đường kính và vật liệu dây kéo.9

### **4.2. Phân tích Kỹ thuật RM-30A1: Hệ thống Kéo/Thu hồi Hai chiều**

Hệ thống RM-30A1 của Meggitt là một ví dụ điển hình về công nghệ guồng cuộn tiên tiến, được sử dụng rộng rãi bởi các lực lượng quân sự trên thế giới, bao gồm Mỹ, Anh, Nhật Bản và Hàn Quốc.11

#### **4.2.1. Thiết kế Hệ thống và Khả năng Cuộn Dây**

RM-30A1 là hệ thống cuộn dây hai chiều (two-way reeling system), cho phép thu hồi và tái sử dụng các mục tiêu kéo.12 Về mặt kỹ thuật, hệ thống này hoạt động **hoàn toàn bằng điện**, loại bỏ các hệ thống khí nén và thủy lực phức tạp thường có trong các thiết kế cũ, giúp đơn giản hóa việc bảo trì.12

RM-30A1 có khả năng chứa một lượng dây kéo lớn. Tùy thuộc vào cấu hình mục tiêu và kích thước dây kéo, guồng có thể chứa tới **9,450 mét (31,000 ft)** towline.11 Chiều dài dây lớn này là then chốt để đảm bảo khoảng cách tách biệt an toàn, bảo vệ phương tiện kéo khỏi mảnh đạn \[User Query\].

#### **4.2.2. Điều khiển Tự động hóa và An toàn**

RM-30A1 tích hợp **Module Điều khiển Logic Vi xử lý (MLCM)**, cung cấp khả năng kiểm soát hệ thống theo các tham số do người dùng xác định, đồng thời thực hiện tự kiểm tra khi bật nguồn.12 Hệ thống này giữ lại tất cả các chức năng cuộn tự động của phiên bản tiền nhiệm, cho phép phi công máy bay kéo vận hành hệ thống với sự can thiệp tối thiểu vào công việc trong buồng lái.12

Chức năng tự động hóa này là một yếu tố an toàn chiến thuật quan trọng. Khi máy bay kéo thực hiện các thao tác cơ động mạnh (ví dụ: TDK-39A cho phép máy bay kéo thực hiện maneuver lên tới **5g** ở tốc độ **Mach 0.9** 3), lực khí động học và dao động trên dây kéo là rất lớn. MLCM phải sử dụng dữ liệu độ căng và độ dài dây kéo (được hiển thị trên bảng điều khiển kỹ thuật số 11) để liên tục điều chỉnh (active damping), giữ ổn định mục tiêu và ngăn ngừa nguy cơ đứt dây. Tự động hóa này giảm thiểu sự quá tải nhận thức của phi công trong điều kiện căng thẳng của nhiệm vụ huấn luyện chiến đấu.

Về tốc độ vận hành, tốc độ thả/thu trung bình của dây kéo là khoảng **1600 – 2000 FPM** (Feet Per Minute). Tuy nhiên, tốc độ thu hồi cuối cùng (final recovery speed), khi mục tiêu được đưa gần vào pod hoặc máy bay kéo, giảm xuống còn khoảng **180 FPM**.12 Sự khác biệt lớn giữa tốc độ thu hồi trung bình và tốc độ thu hồi cuối cùng phản ánh một quy trình an toàn được lập trình, đảm bảo mục tiêu được đưa vào pod chứa một cách chính xác và an toàn, tránh va chạm hoặc hư hỏng.

Hệ thống RM-30A1 còn được trang bị **cơ chế cắt dây dự phòng** (redundant towline cutters) để xử lý các tình huống khẩn cấp, tăng cường độ an toàn vận hành.12

Table B: Thông số Vận hành Chủ yếu của Hệ thống Guồng Cuộn Meggitt RM-30A1

| Tham số Kỹ thuật | Giá trị Chi tiết | Nguồn Dữ liệu | Ý nghĩa Vận hành |
| :---- | :---- | :---- | :---- |
| **Công suất Hoạt động** | Hoàn toàn bằng điện. | 12 | Đơn giản hóa bảo trì, loại bỏ hệ thống thủy lực/khí nén. |
| **Chiều dài Dây Tối đa** | Lên tới 9,450 mét (31,000 ft). | 11 | Đảm bảo khoảng cách tách biệt an toàn lớn (tới \>9 km). |
| **Tốc độ Thu/Thả (Trung bình)** | 1600 – 2000 FPM. | 12 | Triển khai nhanh mục tiêu đến vị trí chiến thuật. |
| **Tốc độ Thu hồi (Cuối cùng)** | 180 FPM. | 12 | Thu hồi chính xác và an toàn mục tiêu gần máy bay. |
| **Hệ thống Điều khiển** | Microprocessor Logic Control Module (MLCM). | 12 | Tự động hóa các chức năng kéo/thu, giảm tải cho phi công. |
| **Chức năng Cuộn Dây** | Hệ thống cuộn hai chiều (Two-way reeling). | 12 | Cho phép tái sử dụng mục tiêu kéo. |

## **CHƯƠNG V: CÔNG NGHỆ CHẤM ĐIỂM VŨ KHÍ VÀ ĐÁNH GIÁ THỜI GIAN THỰC**

### **5.1. Tầm quan trọng của Đánh giá Thời gian Thực (Real-Time Assessment)**

Hệ thống chấm điểm vũ khí là yếu tố tối quan trọng để xác định hiệu quả của huấn luyện và thử nghiệm. Đánh giá thời gian thực (real-time scoring) cho phép phi công hoặc xạ thủ nhận được phản hồi ngay lập tức về độ chính xác, từ đó tối đa hóa giá trị huấn luyện trong mỗi lần xuất kích.3 Các hệ thống chấm điểm hiện đại được phân loại thành ba loại chính: Acoustic (Âm thanh), Doppler Radar, và Vector.

### **5.2. Hệ thống Chấm điểm Khoảng cách Lệch (Miss Distance Indicator \- MDI)**

#### **5.2.1. Acoustic MDI**

Hệ thống MDI Acoustic (ví dụ: AS-131, AS-136/12U) được sử dụng rộng rãi cho đạn pháo. Nguyên lý hoạt động dựa trên việc phát hiện sóng xung kích (shock wave) do đạn hoặc tên lửa siêu thanh tạo ra khi bay qua mục tiêu.13 Một mảng các cảm biến nhạy áp suất (pressure-sensitive sensors) được lắp đặt trên hoặc gần mục tiêu sẽ đo sự khác biệt về biên độ và thời gian giữa các cảm biến để tính toán khoảng cách lệch ngắn nhất (miss distance) và vị trí góc của viên đạn.13

Một giới hạn kỹ thuật của MDI Acoustic là nó chỉ hoạt động với đạn và tên lửa bay **siêu thanh** (tốc độ lớn hơn tốc độ âm thanh) do nó phụ thuộc hoàn toàn vào sóng xung kích để tính toán.13 Đối với huấn luyện vũ khí cận âm hoặc tốc độ thấp (ví dụ: một số loại tên lửa hành trình), cần phải sử dụng các phương pháp chấm điểm khác. Các MDI này thường là loại 12 sector, cho phép tính toán khoảng cách lệch từ mọi hướng tiếp cận của mục tiêu.13

#### **5.2.2. Doppler Radar MDI (Scalar Scoring)**

Hệ thống chấm điểm bằng radar Doppler scalar (như MicroDops và ProTrak) cung cấp giải pháp theo dõi đường đạn hiệu quả về chi phí.15 Các hệ thống này sử dụng radar Doppler để theo dõi và tính toán khoảng cách lệch, hoạt động hiệu quả đối với tất cả các loại súng, cỡ nòng và tốc độ bắn (bao gồm cả cận âm).16

MicroDops là một cảm biến radar MicroDoppler siêu nhỏ, nhẹ, được thiết kế cho mục tiêu kéo và drone.17 Nó có thể được sử dụng để đếm đạn nhỏ (bullet counting) hoặc như một MDI scalar cho đạn lớn hơn hoặc tên lửa.17 Hệ thống ProTrak, một hệ thống theo dõi đường đạn linh hoạt hơn, có thể được cấu hình để định nghĩa vùng chết (dead zone) hoặc thể tích chấm điểm (scoring volume) lớn hơn 40 mét, dựa trên yêu cầu của khách hàng.15 Trong hệ thống Meggitt AGTS-36, chấm điểm radar Doppler (RADOPS) cung cấp đánh giá trúng/trượt theo thời gian thực trực tiếp cho phi công kéo.3

### **5.3. Vector Scoring Systems (VSS): Phân tích Quỹ đạo 3D**

Trong khi Scalar Scoring (MDI) chỉ cung cấp khoảng cách lệch theo một giá trị vô hướng (khoảng cách) hoặc theo sector, Hệ thống Chấm điểm Vector (VSS) mang lại khả năng phân tích chi tiết hơn nhiều.

VSS là radar chấm điểm tên lửa không hợp tác (non-cooperative missile-scoring radar) được tối ưu hóa cho các mục tiêu trên không phức tạp.15 Điểm khác biệt quan trọng của VSS là nó cung cấp khả năng theo dõi quỹ đạo 3 chiều hoàn chỉnh của tên lửa đang tiếp cận, bao gồm cả thái độ (attitude) của tên lửa trong suốt quá trình bay.15 Dữ liệu này sau đó được truyền bằng telemetry đến trạm mặt đất để phân tích.

Sự phát triển từ MDI (chỉ cung cấp Khoảng cách Lệch) sang VSS (cung cấp Quỹ đạo 3D) là một bước tiến quan trọng trong Thử nghiệm và Đánh giá (T\&E). Nó cho phép các nhà phát triển vũ khí không chỉ biết *tên lửa trượt bao xa* mà còn *lý do tại sao nó trượt* (ví dụ: lỗi dẫn đường ở pha cuối, lỗi ngòi nổ). Bằng cách tái tạo quỹ đạo và thái độ của tên lửa trong toàn bộ thể tích chấm điểm, dữ liệu VSS giúp tối ưu hóa thuật toán guidance và cải thiện hiệu suất vũ khí.15

## **CHƯƠNG VI: PHÂN TÍCH THỊ TRƯỜNG VÀ TRIỂN VỌNG TƯƠNG LAI**

### **6.1. Phân tích Cạnh tranh Ngành Mục tiêu Kéo**

Thị trường hệ thống mục tiêu trên không, bao gồm cả mục tiêu kéo, được dẫn dắt bởi một số nhà cung cấp quốc phòng lớn và chuyên biệt. Các nhà cung cấp chủ chốt bao gồm Meggitt Defense Systems (hiện là Parker Meggitt) 2, QinetiQ Group PLC 18, Airbus Defence and Space 19, và Air Target Sweden.20

Các công ty này cung cấp danh mục sản phẩm đa dạng, không chỉ giới hạn ở mục tiêu kéo mà còn bao gồm các mục tiêu bay trực tiếp (target drones) và các hệ thống chấm điểm liên quan. Ví dụ, Airbus cung cấp mục tiêu kéo chi phí thấp như Do-SK6 và sleeve target SETA-3 S1.19 QinetiQ nổi tiếng với các hệ thống Inflatable Towed Targets Tốc độ Cao (HSITT) cho huấn luyện hải quân.18

### **6.2. Các Giải pháp Mô phỏng Mối đe dọa Nâng cao và Chuyên biệt**

Nhu cầu về tính chân thực trong huấn luyện đang thúc đẩy sự phát triển của các giải pháp mục tiêu kéo chuyên biệt:

#### **6.2.1. Mục tiêu Lướt (Glide Targets)**

Mục tiêu lướt như GT-400 là một nền tảng tiên tiến, được thả ra khỏi dây kéo để thực hiện các nhiệm vụ tự hành đã được lập trình trước.3 GT-400 được thiết kế để bay ở tốc độ 250 đến 400 KIAS trên quãng đường 20 đến 50 hải lý, cung cấp một kịch bản huấn luyện phức tạp mô phỏng các mối đe dọa không đối hải hoặc tấn công mặt đất.3 Chúng là giải pháp chi phí thấp hơn đáng kể so với các drone mục tiêu phản lực truyền thống, đặc biệt phù hợp cho các bài tập bắn đạn thật hàng ngày.3

#### **6.2.2. Khả năng Tự chủ Cơ động Bán Chủ động**

Các hệ thống mục tiêu kéo đang được phát triển với khả năng thực hiện các thao tác cơ động phức tạp, không chỉ phụ thuộc vào chuyển động của máy bay kéo. Việc tích hợp các hệ thống avionics hiện đại (ví dụ: Veronte Autopilot) vào các mục tiêu kéo cho phép chúng thực hiện các thao tác né tránh (evasion maneuvers) được cấu hình trước, chẳng hạn như bay lên/xuống, dệt (weaving), hoặc cơ động ngẫu nhiên.5

Sự "bán chủ động" này là cần thiết để mô phỏng các mối đe dọa cơ động cao (high agility) như tên lửa hành trình hoặc UAV thế hệ mới. Mặc dù mục tiêu vẫn bị ràng buộc bởi dây kéo, hệ thống avionics cho phép nó thực hiện các thay đổi hướng hoặc độ cao nhanh chóng, vượt ra ngoài khả năng cơ động an toàn của máy bay kéo và dây cáp. Điều này bổ sung một lớp chân thực mới cho huấn luyện phòng không.

### **6.3. Mục tiêu kéo Hải quân: Mô phỏng Tàu chiến và Tấn công Diệt hạm**

Trong môi trường hải quân, mục tiêu kéo đóng vai trò then chốt trong việc huấn luyện phòng thủ điểm (point defense) và chống lại các mối đe dọa tên lửa diệt hạm (anti-ship missiles). Các hệ thống mục tiêu kéo chuyên biệt được phát triển để mô phỏng cả mối đe dọa trên không nhằm vào tàu chiến và bản thân các tàu chiến đối thủ (FIAC \- Fast Inshore Attack Craft, hoặc tàu mặt nước).

#### **6.3.1. Mô phỏng Mối đe dọa trên không và Tên lửa Diệt hạm**

* **Tấn công Tầm thấp:** Các mục tiêu kéo như TLX-1 được sử dụng để mô phỏng mối đe dọa tên lửa bay là là mặt biển (sea-skimming missile), kiểm tra hiệu suất của các hệ thống phòng thủ hải quân trước các cuộc tấn công cực thấp.3  
* **Mục tiêu Phòng thủ Điểm (CIWS):** Mục tiêu kéo TGX của Meggitt được thiết kế đặc biệt để sử dụng làm mục tiêu phòng thủ điểm tích cực (active naval point defense target) cho pháo, Hệ thống Vũ khí Tầm gần (CIWS), hoặc tên lửa.8 TGX cung cấp khả năng tăng cường radar và hình ảnh: đạt RCS hướng trước lên tới **5 mét vuông** (54 ft²) nhờ bộ phản xạ radar I/J(X)-band, kết hợp với đèn **600.000 candlepower** ở mũi để tăng cường khả năng nhận dạng bằng mắt thường, ngay cả khi đang tấn công các hệ thống như Phalanx CIWS.

#### **6.3.2. Mô phỏng Mục tiêu Mặt nước Kéo (Surface Towed Targets)**

* **Mục tiêu Catamaran Tốc độ thấp (L-CATT):** QinetiQ cung cấp Mục tiêu Kéo Catamaran Chi phí thấp (Low-Cost Catamaran Tow Targets \- L-CATT™), được thiết kế để huấn luyện hải quân và mô phỏng mối đe dọa cho các bài kiểm tra hệ thống vũ khí. L-CATT là mục tiêu catamaran có thể kéo được, chi phí thấp, có thể gắn các gói tải trọng tùy chọn để mô phỏng hiệu quả các mối đe dọa hải quân khác nhau.23  
* **Mục tiêu Bơm hơi Tốc độ Cao (HSITT):** QinetiQ cũng nổi tiếng với các Mục tiêu Kéo Bơm hơi Tốc độ Cao (High Speed Inflatable Towed Targets \- HSITT), được công nhận là một trong những mục tiêu bơm hơi hải quân tốt nhất trên thế giới và hiện đang được sử dụng bởi hơn 10 lực lượng quân sự.18 Các biến thể như HSITT Mk II được thiết kế cho huấn luyện và Biểu diễn Mối đe dọa (Threat Representation) hải quân, thường được kéo bởi các Phương tiện Mặt nước Không người lái (USV-T) như Barracuda ở tốc độ cao.18 HSITT Mk II có diện tích mục tiêu đáng kể, đạt **18.25 mét vuông** với chiều cao và chiều rộng là **2.5 mét**, phù hợp cho huấn luyện trực quan.  
* **Mô phỏng Tấn công Bờ biển (FIAC):** Các dịch vụ mục tiêu của Airbus cũng bao gồm việc tái tạo các kịch bản phòng thủ phức tạp như tấn công mục tiêu hải quân FIAC (Fast Inshore Attack Craft).19

### **6.4. Dự báo Xu hướng: Tích hợp Drone Tugs và Swarming**

Xu hướng sử dụng các phương tiện bay không người lái (UAV/Drone) làm phương tiện kéo đang được đẩy mạnh nhằm giảm thiểu rủi ro nhân sự và chi phí vận hành.5 QinetiQ và Airbus đều đang phát triển các nền tảng drone chuyên biệt cho vai trò này.19

Hơn nữa, Airbus đang phát triển khả năng sử dụng các drone multi-copter với khả năng swarming (tấn công bầy đàn) để mô phỏng các mối đe dọa UAV cỡ nhỏ tiếp cận với số lượng lớn.19 Đây là một kịch bản huấn luyện quan trọng trong bối cảnh tác chiến chống UAV (Counter-UAS) đang phát triển.

### **6.5. Kết luận và Triển vọng Thị trường**

Sự tăng trưởng của thị trường mục tiêu trên không cho thấy vai trò không thể thay thế của các hệ thống này trong việc duy trì khả năng sẵn sàng chiến đấu. Thị trường Drone Mục tiêu trên không (bao gồm cả mục tiêu kéo) được dự báo sẽ tăng trưởng với Tốc độ Tăng trưởng Kép Hàng năm (CAGR) là 9.6% từ năm 2024 đến năm 2034, đạt giá trị ước tính **3.0 tỷ USD** vào cuối giai đoạn này.22 Sự tăng trưởng này được thúc đẩy bởi nhu cầu mở rộng huấn luyện quân sự và chi tiêu quốc phòng gia tăng trên toàn cầu.22

Mô hình "tăng cường mô đun" (modular augmentation)—sử dụng một nền tảng kéo chi phí thấp để mang theo một gói tín hiệu phức tạp và đắt tiền—vẫn là xương sống của huấn luyện quân sự. Chiến lược này cho phép các lực lượng vũ trang tập trung nguồn lực vào việc tạo ra *tín hiệu* chân thực (ví dụ: 40 W/sr IR, 17 $\\text{m}^2$ RCS) thay vì đầu tư vào *phương tiện bay* đắt tiền có cấu hình cố định.6 Tính kinh tế và tính linh hoạt trong việc mô phỏng đa phổ tín hiệu đảm bảo rằng mục tiêu kéo sẽ tiếp tục là một công cụ thiết yếu để thử nghiệm và nâng cấp hệ thống phòng thủ trước các mối đe dọa hàng không ngày càng phức tạp.

#### **Works cited**

1. TGX-IR All aspect realistic infrared signature tow target \- Parker Defense Systems Division, accessed November 11, 2025, [https://meggittdefense.com/product/tgx-ir-all-aspect-realistic-infrared-signature-tow-target/](https://meggittdefense.com/product/tgx-ir-all-aspect-realistic-infrared-signature-tow-target/)  
2. TRX radar augmented tow target \- Parker Defense Systems Division, accessed November 11, 2025, [https://meggittdefense.com/product/trx-radar-augmented-tow-target/](https://meggittdefense.com/product/trx-radar-augmented-tow-target/)  
3. Towed Systems, accessed November 11, 2025, [https://meggittdefense.com/wp-content/uploads/2021/01/Towed\_Systems\_2020.pdf](https://meggittdefense.com/wp-content/uploads/2021/01/Towed_Systems_2020.pdf)  
4. Target tug \- Wikipedia, accessed November 11, 2025, [https://en.wikipedia.org/wiki/Target\_tug](https://en.wikipedia.org/wiki/Target_tug)  
5. Towed Target UAS for defense systems training & testing \- Embention, accessed November 11, 2025, [https://www.embention.com/news/towed-target-uas-operations/](https://www.embention.com/news/towed-target-uas-operations/)  
6. How Much Does A Drone Cost in 2025? Here's a Price Breakdown \- JOUAV, accessed November 11, 2025, [https://www.jouav.com/blog/how-much-does-a-drone-cost.html](https://www.jouav.com/blog/how-much-does-a-drone-cost.html)  
7. TGX-IR All Aspect Realistic Infrared Signature Tow Target \- Meggitt ..., accessed November 11, 2025, [https://www.meggittdefense.com/wp-content/uploads/2017/01/TGX-IR.pdf](https://www.meggittdefense.com/wp-content/uploads/2017/01/TGX-IR.pdf)  
8. TGX Augmented radar tow target \- Parker Defense Systems Division, accessed November 11, 2025, [https://meggittdefense.com/product/tgx-augmented-radar-tow-target/](https://meggittdefense.com/product/tgx-augmented-radar-tow-target/)  
9. FACTORS EFFECTING THE DESIGN OF A SYSTEM FOR TOWING A BODY ON A LONG LENGTH OF WIRE \- DTIC, accessed November 11, 2025, [https://apps.dtic.mil/sti/tr/pdf/AD0296137.pdf](https://apps.dtic.mil/sti/tr/pdf/AD0296137.pdf)  
10. simulation study (simstudy): a simmulaatioon toool for engiineeers annd mission planners \- DTIC, accessed November 11, 2025, [https://apps.dtic.mil/sti/tr/pdf/ADA590749.pdf](https://apps.dtic.mil/sti/tr/pdf/ADA590749.pdf)  
11. RM-30A1 Reeling machine-launcher \- Parker Defense Systems Division, accessed November 11, 2025, [https://meggittdefense.com/product/rm-30a1-reeling-machine-launcher/](https://meggittdefense.com/product/rm-30a1-reeling-machine-launcher/)  
12. RM-30A1 Reeling Machine- Launcher \- Meggitt Letter, accessed November 11, 2025, [https://meggittdefense.com/wp-content/uploads/2020/06/RM-30A1.pdf](https://meggittdefense.com/wp-content/uploads/2020/06/RM-30A1.pdf)  
13. Air Target Sweden \- Acoustic Scoring for Defence Applications \- Army Technology, accessed November 11, 2025, [https://www.army-technology.com/contractors/military-messaging/air\_target/](https://www.army-technology.com/contractors/military-messaging/air_target/)  
14. UAV TOWED TARGET The UAV Towed Target is intended to be towed behind a target drone/UAV. The target can have up to 2 IR flares o \- air target, accessed November 11, 2025, [https://www.airtarget.com/wp-content/uploads/2022/11/UAV-Towed-Target\_datasheet\_2022\_03\_11.pdf](https://www.airtarget.com/wp-content/uploads/2022/11/UAV-Towed-Target_datasheet_2022_03_11.pdf)  
15. Weapon Scoring Systems \- Meggitt, accessed November 11, 2025, [https://www.meggitt.com/products-services/weapon-scoring-systems/](https://www.meggitt.com/products-services/weapon-scoring-systems/)  
16. Weapon Scoring Systems \- Meggitt Defense Systems, accessed November 11, 2025, [https://meggittdefense.com/weapon-scoring-systems/](https://meggittdefense.com/weapon-scoring-systems/)  
17. Radar MDI Scoring Sensor Systems by QinetiQ, accessed November 11, 2025, [https://www.qinetiq.com/en-us/capabilities/ai-analytics-and-advanced-computing/radar-mdi-scoring](https://www.qinetiq.com/en-us/capabilities/ai-analytics-and-advanced-computing/radar-mdi-scoring)  
18. High Speed Inflatable Towed Targets (HSITT) \- QinetiQ, accessed November 11, 2025, [https://www.qinetiq.com/en/what-we-do/services-and-products/high-speed-inflatable-towed-targets](https://www.qinetiq.com/en/what-we-do/services-and-products/high-speed-inflatable-towed-targets)  
19. Target drone systems | Unmanned Aerial Systems \- Airbus, accessed November 11, 2025, [https://www.airbus.com/en/products-services/defence/uas/target-drone-systems](https://www.airbus.com/en/products-services/defence/uas/target-drone-systems)  
20. Start \- AIR TARGET, accessed November 11, 2025, [https://www.airtarget.com/](https://www.airtarget.com/)  
21. QinetiQ Banshee to train NATO allies, accessed November 11, 2025, [https://www.qinetiq.com/en/news/qinetiq-banshee-to-train-nato-allies](https://www.qinetiq.com/en/news/qinetiq-banshee-to-train-nato-allies)  
22. Aerial Target Drones Market Size, Trends, Outlook 2034, accessed November 11, 2025, [https://www.transparencymarketresearch.com/aerial-target-drones-market.html](https://www.transparencymarketresearch.com/aerial-target-drones-market.html)  
23. Low-cost Catamaran Tow Target (L-CATT) \- QinetiQ, accessed November 11, 2025, [https://www.qinetiq.com/en/what-we-do/services-and-products/low-cost-catamaran-tow-target](https://www.qinetiq.com/en/what-we-do/services-and-products/low-cost-catamaran-tow-target)