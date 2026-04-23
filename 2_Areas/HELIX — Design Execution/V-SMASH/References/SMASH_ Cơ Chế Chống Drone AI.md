# **Cơ Chế Căn Thời Gian và Chặn Kim Hỏa Của Hệ Thống SMASH: Cuộc Cách Mạng Hỏa Lực Chống Drone Bằng Trí Tuệ Nhân Tạo**

## **Tóm tắt Điều hành**

Sự gia tăng theo cấp số nhân của các hệ thống máy bay không người lái cỡ nhỏ (sUAS) và vi mô trên chiến trường hiện đại đã tạo ra một khoảng trống năng lực nghiêm trọng cho lực lượng bộ binh. Các phương pháp hỏa lực truyền thống, dựa vào phản xạ con người và ước tính thủ công về độ lệch và đường đạn, đã được chứng minh là không hiệu quả về mặt thống kê trước các mục tiêu nhỏ, nhanh nhẹn và di chuyển trong không gian ba chiều. Thách thức cốt lõi không nằm ở khí động học hay uy lực của đạn dược, mà nằm ở giới hạn sinh lý và nhận thức của con người khi cố gắng đồng bộ hóa việc ngắm bắn với một vectơ mục tiêu động.

Công ty công nghệ quốc phòng Smart Shooter Ltd. của Israel đã giải quyết vấn đề bất đối xứng này thông qua việc phát triển dòng Hệ thống Điều khiển Hỏa lực (FCS) mang tên SMASH. Trọng tâm của công nghệ này là một sự đổi mới cơ điện tử mang tính đột phá: **Cơ chế Chặn Kim hỏa (Fire Block Mechanism \- FBM)**, hay còn được mô tả về mặt chức năng là **Cơ chế Căn Thời gian Bắn (Fire Timing Mechanism \- FTM)**. Hệ thống này tách biệt ý định khai hỏa của xạ thủ (hành động bóp cò) khỏi việc giải phóng cơ học của búa đập, chỉ cho phép súng nổ khi máy tính đường đạn xác nhận rằng nòng súng đã thẳng hàng với điểm trúng đích được tính toán.

Báo cáo nghiên cứu này cung cấp một phân tích kỹ thuật toàn diện về hệ thống SMASH, tập trung sâu vào kiến trúc cơ điện của Cơ chế Chặn Kim hỏa. Tài liệu sẽ khảo sát sự tích hợp của trí tuệ nhân tạo (AI) và thị giác máy tính trong việc thu thập mục tiêu, quy trình vận hành "Khóa-Theo dõi-Bắn" (Lock-Track-Hit), và các tác động chiến lược của việc triển khai "cò súng thông minh" cho các lực lượng quy ước. Thông qua việc xem xét các bằng sáng chế, hướng dẫn kỹ thuật, báo cáo thực địa và đánh giá hoạt động, báo cáo này làm sáng tỏ cách hệ thống SMASH biến súng trường tấn công tiêu chuẩn thành vũ khí đánh chặn động năng chính xác, đạt xác suất trúng đích vượt quá 95% đối với các mối đe dọa trên không.

## ---

**1\. Giới thiệu: Thách thức Động năng trong Kỷ nguyên Micro-Drone**

### **1.1 Sự Bất đối xứng của Mối đe dọa Drone**

Chiến trường hiện đại đang ngày càng được định hình bởi sự hiện diện của các loại drone thương mại giá rẻ (COTS) được vũ trang hóa cho mục đích trinh sát, tấn công trực tiếp (kamikaze), hoặc thả đạn. Các nền tảng này có đặc điểm là diện tích phản xạ radar (RCS) cực nhỏ, tín hiệu nhiệt thấp và khả năng cơ động thất thường cao. Đối với một xạ thủ con người, việc tấn công một mục tiêu di chuyển với tốc độ 30-60 km/h ở khoảng cách 100-300 mét là một bài toán lượng giác phức tạp liên quan đến vận tốc mục tiêu, thời gian bay của đạn, độ rơi do trọng lực và độ bạt gió.

Dữ liệu lịch sử cho thấy việc bắn trúng một mục tiêu bay di động bằng súng trường sử dụng thước ngắm cơ khí hoặc kính ngắm điểm đỏ tiêu chuẩn phụ thuộc rất nhiều vào mật độ hỏa lực—tức là bắn áp chế thay vì bắn chính xác. Điều này dẫn đến việc tiêu hao đạn dược nhanh chóng và tăng nguy cơ gây thiệt hại phụ. Vấn đề không phải là súng trường không thể vươn tới mục tiêu, mà là người vận hành không thể tính toán và thực hiện nhất quán "độ đón" (lead) cần thiết để giao điểm của quỹ đạo đạn trùng với đường bay của drone.1

### **1.2 Sự Tiến hóa của Điều khiển Hỏa lực Vũ khí Nhỏ**

Theo truyền thống, Hệ thống Điều khiển Hỏa lực (FCS) là lĩnh vực của các nền tảng hạng nặng—xe tăng, pháo hạm và pháo phòng không—nơi các hạn chế về kích thước và trọng lượng ít nghiêm trọng hơn. Các hệ thống này sử dụng radar hoặc máy đo khoảng cách laser, cảm biến môi trường và máy tính đường đạn để tự động điều chỉnh hướng súng.

Sự thu nhỏ của năng lực xử lý và quang học đã cho phép khả năng này di chuyển sang vũ khí cá nhân của người lính. Tuy nhiên, không giống như tháp pháo xe tăng được ổn định và điều hướng bởi hệ thống servo, súng trường được giữ bởi con người. Con người tạo ra sự bất ổn định (rung tay, nhịp thở) và sai số (giật cò). Do đó, một FCS cho vũ khí nhỏ không thể chỉ *hiển thị* cho xạ thủ biết nơi cần ngắm (như một sự điều chỉnh tâm ngắm thụ động); nó phải chủ động hỗ trợ trong việc *thực hiện* phát bắn. Nhu cầu này đã dẫn đến sự ra đời của khái niệm "cò súng thông minh" hay Cơ chế Chặn Kim hỏa, đóng vai trò là "người gác cổng" cuối cùng của chuỗi khai hỏa.2

### **1.3 Triết lý Thiết kế của Smart Shooter**

Cách tiếp cận của Smart Shooter, được thể hiện trong dòng sản phẩm SMASH (2000, 2000L/3000, X4, AD), dựa trên học thuyết "One Shot, One Hit" (Một viên đạn, một mục tiêu). Hệ thống được thiết kế để loại bỏ biến số lỗi con người trong việc căn thời gian bóp cò. Bằng cách tích hợp máy tính đường đạn với bộ truyền động cơ điện trong cụm cò hoặc tay cầm súng, hệ thống đảm bảo rằng viên đạn chỉ được giải phóng khi xác suất trúng đích được tối đa hóa. Điều này đại diện cho sự thay đổi mô hình từ "bắn khi sẵn sàng" sang "bắn khi hợp lệ".4

## ---

**2\. Kiến trúc Hệ thống SMASH: Thành phần và Tích hợp**

Để hiểu sâu về Cơ chế Chặn Kim hỏa, trước tiên cần đặt nó trong bối cảnh kiến trúc tổng thể của hệ thống SMASH. Hệ thống này là một giải pháp bổ sung (add-on) được thiết kế để nâng cấp các súng trường tấn công hiện có (M4, AR15, SR25, dòng AK) thông qua các đường ray Picatinny tiêu chuẩn MIL-STD-1913.6

### **2.1 Đơn vị Kính ngắm Quang-Điện tử (Electro-Optical Sight Unit)**

Thành phần chính là đơn vị kính ngắm, được gắn vào đường ray phía trên của vũ khí. Đơn vị này chứa các thành phần cốt lõi sau:

* **Quang học:** Kính ngắm phản xạ (reflex sight) nhìn xuyên thấu với độ phóng đại 1x (hoặc 4x trong biến thể X4) hoặc màn hình hiển thị video cho các chế độ ban đêm/ảnh nhiệt. Công nghệ này cho phép xạ thủ duy trì nhận thức tình huống với cả hai mắt mở.8  
* **Cảm biến:** Một cảm biến camera độ phân giải cao chịu trách nhiệm thu thập dữ liệu hình ảnh cho quá trình xử lý thị giác máy tính.  
* **Máy tính Điều khiển Hỏa lực Tích hợp (Integral Fire Control Computer \- FCC):** "Bộ não" của hệ thống, chạy các thuật toán dự đoán mục tiêu độc quyền và xử lý dữ liệu đường đạn trong thời gian thực.6  
* **Máy đo Khoảng cách Laser (LRF):** Được tích hợp vào các mẫu tiên tiến (như SMASH X4 và AD) để cung cấp dữ liệu khoảng cách chính xác cho giải pháp đường đạn, thay thế hoặc bổ sung cho việc ước tính khoảng cách bằng hình ảnh.3

### **2.2 Cụm Tay cầm và Bộ Truyền động (Grip and Actuator Assembly)**

Giao diện vật lý giữa bộ não kỹ thuật số của hệ thống SMASH và hành động cơ học của súng trường là cụm tay cầm và bảo vệ cò súng thay thế. Đây là thành phần quan trọng chứa **Cơ chế Chặn Kim hỏa (FBM)**.

* **Kết nối Cáp:** Một cáp chuyên dụng kết nối đơn vị kính ngắm với đơn vị tay cầm, truyền tải tín hiệu "cho phép bắn" (fire authorization signal) hoặc xung điện điều khiển.7  
* **Nút PTT (Push-to-Talk/Lock):** Nằm trên ốp lót tay thông qua một công tắc áp lực hoặc được tích hợp vào vị trí thuận tiện, nút này khởi tạo pha "Khóa" (Lock). Nó cho phép người dùng ra lệnh cho hệ thống bắt đầu theo dõi mục tiêu đã chọn.7  
* **Giao diện Cò súng:** Đơn vị tay cầm thay thế tay cầm tiêu chuẩn của vũ khí và bao gồm cơ chế tương tác vật lý với lẫy cò hoặc thanh truyền lực của súng.6

### **2.3 Nguồn điện và Kết nối**

Hệ thống được cung cấp năng lượng bởi bộ pin Lithium-Ion sạc lại thông minh, thường được đánh giá cho 72 giờ hoạt động hoặc lên đến 3.600 phát bắn được hỗ trợ bởi SMASH (SMASH-assisted shots). Các tùy chọn kết nối cho phép hệ thống SMASH giao tiếp với các mạng C4I, chia sẻ tọa độ mục tiêu và luồng video với các đơn vị khác hoặc chỉ huy, tạo nên một mạng lưới tác chiến tích hợp.2

## ---

**3\. Cơ chế Chặn Kim Hỏa (FBM): Phân Tích Kỹ thuật Cơ Điện**

Cơ chế Chặn Kim hỏa là tính năng định hình sự khác biệt giữa SMASH và kính ngắm điểm đỏ tiêu chuẩn hay máy tính đường đạn thụ động. Đây là một thiết bị an toàn và định thời gian chủ động can thiệp vào chu trình khai hỏa cơ học của vũ khí.

### **3.1 Nguyên lý Truyền động Cơ điện**

Dựa trên các phân tích bằng sáng chế và mô tả kỹ thuật, FBM hoạt động bằng cách sử dụng một cuộn dây điện từ (solenoid) hoặc bộ truyền động cơ điện tương tự để kiểm soát chuyển động của cò súng hoặc thanh truyền cò (trigger bar).

* **Chức năng Solenoid:** Solenoid là một pít-tông hoạt động bằng điện từ. Trong bối cảnh của hệ thống SMASH, solenoid có khả năng được định vị để chặn vật lý hành trình lùi của cò súng hoặc ngắt kết nối thanh truyền cò khỏi cơ chế lẫy búa (sear).15  
* **Trạng thái Mặc định (Fail-Safe):** Trong chế độ "Bắn Tự do" (Free Firing) hoặc nếu pin cạn kiệt, cơ chế được thiết kế để trở về trạng thái an toàn mặc định, cho phép vũ khí hoạt động như một súng trường tiêu chuẩn. Khối chặn chỉ được kích hoạt khi hệ thống được bật nguồn và đặt ở chế độ "Bắn Hỗ trợ" (Assisted Firing) hoặc chế độ "Khóa".7

### **3.2 "Chốt Cò" (Trigger Pin) và Liên kết Cơ khí**

Các tài liệu kỹ thuật đề cập đến việc sửa đổi hoặc sử dụng "Trigger Pin" (Chốt cò) như một phần của quá trình lắp đặt. FBM cung cấp một khối chặn cò súng cơ học sử dụng một Trigger Pin cần được hiệu chỉnh trong quá trình lắp đặt.7

* **Cơ chế Hoạt động:** Khi xạ thủ bóp cò trong Chế độ Hỗ trợ, lực cản vật lý hoặc một điểm dừng cơ học ngăn cản cò súng đi hết hành trình để giải phóng búa. Cò súng có thể di chuyển qua giai đoạn "rơ" (take-up), nhưng việc giải phóng năng lượng cuối cùng bị ức chế.  
* **Tín hiệu Kích hoạt:** Khi Máy tính Điều khiển Hỏa lực xác định rằng vũ khí đã được ngắm chính xác (tức là vị trí tâm ngắm được tính toán trùng khớp với mục tiêu thực tế trong không gian), nó gửi một xung điện đến solenoid.  
* **Giải phóng:** Solenoid rút lại hoặc dịch chuyển, loại bỏ khối chặn cơ học. Vì xạ thủ đã và đang áp dụng áp lực lên cò súng (giữ cò), việc loại bỏ khối chặn cho phép cò súng ngay lập tức hoàn thành hành trình của nó, giải phóng búa đập và khai hỏa viên đạn.16

### **3.3 Thông tin chi tiết từ Bằng sáng chế**

Các bằng sáng chế được cấp cho Smart Shooter Ltd. (Nhà phát minh: Avshalom Ehrlich, Zahi Giladi) mô tả một "thiết bị kiểm soát cò súng hỏa khí thích ứng để kiểm soát sự dịch chuyển của cò súng".18

* **Giới hạn Biến thiên:** Các bằng sáng chế gợi ý các trình tự hoạt động khác nhau. Trong một phương án, thiết bị hạn chế hành trình của cò súng *ngay khi khóa mục tiêu* và giải phóng khi nhận được tín hiệu bắn. Trong phương án khác, nó chỉ hạn chế hành trình khi người dùng *bắt đầu nhấn* cò trong khi đang khóa mục tiêu.18  
* **Thời gian Tối ưu:** Tuyên bố cốt lõi của công nghệ là cho phép khai hỏa "tại một thời điểm được xác định là tối ưu để bắn trúng mục tiêu đã định".18 Điều này xác nhận rằng FBM không chỉ là một khóa an toàn, mà là một công cụ định thời gian chính xác được thiết kế để giảm thiểu độ trễ giữa "quyết định bắn" và "hành động bắn".

### **3.4 Khả năng Trang bị lại (Retrofitting)**

Một thành tựu kỹ thuật quan trọng của FBM là sự tích hợp vào cụm tay cầm/bảo vệ cò thay thế. Điều này cho phép hệ thống được trang bị lại trên các nền tảng M4/AR-15 tiêu chuẩn mà không cần sửa đổi vĩnh viễn nhóm điều khiển hỏa lực bên trong của thân súng (mặc dù chốt cò cần được hiệu chỉnh).6 Khả năng "cắm và chạy" (plug-and-play) này là điều cần thiết cho hậu cần quân sự, cho phép nâng cấp súng trường bộ binh tiêu chuẩn thành vũ khí "thông minh" ngay tại cấp đơn vị.4

## ---

**4\. Quy trình Vận hành Chiến thuật: Khóa, Theo dõi, Bắn (Lock-Track-Hit)**

Cơ chế Chặn Kim hỏa hoạt động trong một vòng lặp quy trình nghiêm ngặt được gọi là chuỗi "Lock-Track-Hit". Quy trình làm việc này thay đổi căn bản cách người lính tương tác với mục tiêu.

### **4.1 Bước 1: Thu thập và Khóa Mục tiêu (Target Acquisition and Lock)**

Xạ thủ quan sát qua kính ngắm quang học (cung cấp tầm nhìn xuyên thấu với các lớp phủ thực tế tăng cường).

* **Phát hiện:** Hệ thống thị giác máy tính xác định các mục tiêu tiềm năng (drone hoặc các mối đe dọa mặt đất) và làm nổi bật chúng, thường bằng một chỉ báo trực quan như hình chữ nhật hoặc dấu chữ thập.7  
* **Lựa chọn:** Xạ thủ điều chỉnh vũ khí sao cho tâm ngắm nằm gần mục tiêu mong muốn và nhấn nút **PTT (Lock)** nằm trên ốp lót tay.  
* **Xác nhận Khóa:** Hệ thống "khóa" vào mục tiêu. Một dấu hiệu trực quan, chẳng hạn như một **Hộp Đỏ (Red Box)** xuất hiện bao quanh mục tiêu, xác nhận rằng hệ thống đang theo dõi đối tượng cụ thể đó.7

### **4.2 Bước 2: Theo dõi và Tính toán (Tâm ngắm Nhiễu loạn \- Disturbed Reticle)**

Sau khi khóa, xạ thủ có thể nhả nút PTT (trong một số chế độ) hoặc giữ nó. Hệ thống lúc này liên tục tính toán giải pháp đường đạn.

* **Tâm ngắm Động:** Hệ thống hiển thị một "tâm ngắm nhiễu loạn" hoặc một điểm ngắm phụ. Điểm này đại diện cho nơi nòng súng *phải* được hướng tới để bắn trúng mục tiêu, tính đến chuyển động của mục tiêu, trọng lực và khoảng cách.  
* **Dự đoán Mục tiêu:** Sử dụng các thuật toán độc quyền, hệ thống dự đoán vị trí tương lai của drone dựa trên vận tốc và vectơ của nó.9  
* **Cuộc Truy đuổi:** Nhiệm vụ của xạ thủ là di chuyển vũ khí để căn chỉnh tâm ngắm với mục tiêu đã bị khóa (hoặc căn chỉnh tâm ngắm nhiễu loạn đè lên mục tiêu). Hệ thống vẫn theo dõi mục tiêu ngay cả khi tay của xạ thủ rung hoặc mục tiêu di chuyển thất thường.4

### **4.3 Bước 3: Phát bắn Được Hỗ trợ (Kích hoạt Chặn Kim hỏa)**

Đây là giai đoạn quan trọng nơi FBM tham gia trực tiếp.

* **Bóp và Giữ Cò (Pull and Hold):** Người lính bóp và *giữ* cò súng.  
* **Hành động Chặn:** Trong một khẩu súng trường tiêu chuẩn, súng sẽ nổ ngay lập tức. Với SMASH ở Chế độ Hỗ trợ, súng *không nổ*. FBM ngăn cản vật lý việc giải phóng lẫy búa.3  
* **Căn chỉnh:** Người lính tiếp tục rê súng, cố gắng đưa tâm ngắm trùng khít với mục tiêu (trong Hộp Đỏ).  
* **Tự động Giải phóng:** Ngay khoảnh khắc Máy tính Điều khiển Hỏa lực phát hiện nòng súng đã thẳng hàng với quỹ đạo đường đạn yêu cầu (trong phạm vi biên độ lỗi cho phép), FBM ngắt kích hoạt.  
* **Khai hỏa:** Búa đập được giải phóng, và viên đạn rời nòng. Vì hệ thống chỉ giải phóng phát bắn vào thời điểm căn chỉnh tối ưu, xác suất trúng đích được tăng lên đáng kể.2

### **4.4 Yếu tố Con người và "Cảm giác Cò" (Trigger Feel)**

Một trong những thách thức khi triển khai FBM là quản lý "cảm giác cò". Lính bộ binh được huấn luyện để biết chính xác khi nào vũ khí của họ sẽ nổ (điểm "break"). SMASH phá vỡ ký ức cơ bắp này.

* **Huấn luyện lại:** Người lính phải được huấn luyện lại để "bóp và giữ" thay vì "bóp để bắn". Phản xạ tâm lý muốn "giật" cò để đón đầu mục tiêu di động bị vô hiệu hóa vì hệ thống bỏ qua thời điểm bóp cò của con người, chỉ tôn trọng *ý định* (giữ cò) và *giải pháp* (căn chỉnh).14  
* **Giảm tải Nhận thức:** Bằng cách chuyển giao việc tính toán độ đón và độ rơi cho máy tính, hệ thống giảm tải nhận thức cho người lính, cho phép họ tập trung vào nhận thức tình huống thay vì các phép toán đường đạn phức tạp.6

## ---

**5\. Thuật toán và Đường đạn: Bộ Não Đằng Sau Khối Chặn**

Cơ chế Chặn Kim hỏa chỉ hiệu quả khi dữ liệu điều khiển nó chính xác. Hệ thống SMASH dựa vào phần mềm tinh vi để xác định *khi nào* nên giải phóng khối chặn.

### **5.1 Thị giác Máy tính và Phân loại Mục tiêu**

Hệ thống sử dụng cảm biến quang-điện tử để "nhìn" chiến trường.

* **Phân biệt:** Các thuật toán phải phân biệt giữa một chiếc drone, một con chim và các vật thể nền lộn xộn. Điều này liên quan đến phát hiện cạnh, phân tích chuyển động và nhận dạng độ tương phản.2  
* **Khả năng Ngày/Đêm:** Hệ thống xử lý dữ liệu từ cả camera quang phổ khả kiến và (trong các chế độ ban đêm) cảm biến ánh sáng yếu hoặc nhiệt, cho phép hoạt động 24/7.8

### **5.2 Thuật toán Dự đoán Mục tiêu**

Bắn trúng một drone đang di chuyển đòi hỏi phải dự đoán nơi nó sẽ ở đó khi viên đạn bay tới.

* **Phân tích Động học:** Hệ thống theo dõi chuyển động pixel của mục tiêu trên cảm biến để tính toán vận tốc góc. Kết hợp với dữ liệu khoảng cách (ước tính hoặc qua LRF), nó tính toán vận tốc tuyến tính của mục tiêu.  
* **Bộ giải Đường đạn:** Máy tính lưu trữ các bảng đường đạn cho loại đạn cụ thể (ví dụ: 5.56mm M855 hoặc 7.62mm). Nó tính toán thời gian bay và góc đón cần thiết.8  
* **Bù đắp Độ trễ:** Hệ thống cũng phải tính đến độ trễ cơ học của chính FBM (thời gian để solenoid rút lại và búa rơi) để đảm bảo phát bắn thực sự được đồng bộ hóa.23

### **5.3 Logic Xác suất Trúng đích (Hit Probability Logic)**

Hệ thống không yêu cầu sự căn chỉnh *hoàn hảo* tuyệt đối, điều vốn bất khả thi đối với con người đang cầm súng. Thay vào đó, nó hoạt động dựa trên ngưỡng "Xác suất Trúng đích" (POH).

* **Vùng Khai hỏa Động:** Máy tính xác định một vùng động xung quanh điểm ngắm tối ưu. Nếu nòng súng đi vào vùng này trong khi cò đang được giữ, phát bắn được giải phóng.  
* **Ngân sách Sai số:** Khi khoảng cách giảm, vùng này cho phép sai số góc lớn hơn (vì mục tiêu lớn hơn trong kính ngắm). Ở khoảng cách xa hơn, vùng này thắt chặt lại. Điều này đảm bảo phát bắn chỉ được thực hiện khi thống kê cho thấy khả năng trúng đích là cao nhất.8

## ---

**6\. Các Biến thể Hệ thống và Khả năng Tích hợp**

Smart Shooter đã phát triển công nghệ SMASH thành một gia đình các hệ thống, mỗi hệ thống sử dụng nguyên lý Chặn/Căn thời gian cốt lõi nhưng được tùy chỉnh cho các vai trò cụ thể.

### **6.1 SMASH 2000 / 2000 Plus**

Các mẫu nền tảng. SMASH 2000 cung cấp khả năng điều khiển hỏa lực cốt lõi. Biến thể "Plus" bổ sung các thuật toán "Chế độ Drone" cụ thể để nâng cao hiệu suất C-UAS.

* **Thông số:** Trọng lượng khoảng 1,2 kg (chỉ tính kính ngắm), ray gắn tích hợp, độ phóng đại 1x (reflex sight).14  
* **Sử dụng:** Bộ binh thông thường.

### **6.2 SMASH 2000L / 3000**

Một phiên bản được giảm trọng lượng đáng kể ("L" là Light \- Nhẹ).

* **Cải tiến:** Giảm trọng lượng xuống còn khoảng 740g và kích thước nhỏ gọn hơn, giải quyết các phàn nàn của binh sĩ về sự cân bằng vũ khí. Nó giữ lại tất cả các chức năng cốt lõi, bao gồm FBM và khả năng kết nối.2  
* **Thị trường:** Đã được Quân đội Hoa Kỳ và Thủy quân Lục chiến Hoa Kỳ lựa chọn để đánh giá và trang bị tạm thời.26

### **6.3 SMASH X4**

Kết hợp khả năng điều khiển hỏa lực với kính ngắm phóng đại 4x.

* **Ứng dụng:** Tác chiến tầm xa. Hữu ích cho Xạ thủ Bắn tỉa (Designated Marksmen \- DMR), những người cần xác định và tấn công các mối đe dọa ở khoảng cách 300-400 mét. Bao gồm một tâm ngắm khắc (etched reticle) để sử dụng dự phòng không cần pin.3

### **6.4 SMASH AD (Air Defense)**

Một biến thể chuyên dụng cho phòng không (C-UAS).

* **Tính năng:** Bao gồm Máy đo Khoảng cách Laser (LRF) tích hợp để có độ chính xác cao hơn ở khoảng cách xa hơn đối với drone. Có khả năng nhận dữ liệu mục tiêu từ các cảm biến bên ngoài (radar).12

### **6.5 SMASH Hopper**

Một Trạm Vũ khí Điều khiển Từ xa (RCWS) tích hợp công nghệ SMASH.

* **Khái niệm:** Đây là ứng dụng robot hóa của FBM. Vì nền tảng ổn định (giá ba chân hoặc gắn xe), cơ chế "chặn" đảm bảo rằng người điều khiển từ xa—ngắm qua máy tính bảng—chỉ bắn khi súng được dẫn động bởi servo đã thẳng hàng hoàn hảo. Nó đại diện cho sự chuyển đổi từ "người lính trong vòng lặp" sang "người lính trên vòng lặp".4

## ---

**7\. Hiệu quả Chống Drone và Hiệu suất Thực địa**

Động lực chính cho việc áp dụng các hệ thống SMASH là nhu cầu cấp thiết về khả năng tiêu diệt cứng (hard-kill) C-UAS ở cấp tiểu đội.

### **7.1 Chỉ số "Trúng Đích Viên Đầu Tiên"**

Trong các cuộc giao tranh C-UAS, viên đạn đầu tiên là quan trọng nhất. Drone rất nhanh và có thể lẩn tránh ngay khi bị bắn.

* **Dữ liệu:** Các báo cáo cho thấy xác suất trúng đích trên 95% đối với các drone nhỏ ở khoảng cách 100-200 mét.24  
* **So sánh:** Hỏa lực không hỗ trợ tiêu chuẩn chống lại các mục tiêu tương tự thường dẫn đến tỷ lệ trúng dưới 20%, đòi hỏi phải xả cả băng đạn để đạt được một lần tiêu diệt. Hệ thống SMASH giảm đáng kể lượng đạn tiêu thụ, một yếu tố hậu cần quan trọng.30

### **7.2 Đánh giá Thực địa**

Hệ thống đã trải qua quá trình thử nghiệm và trang bị rộng rãi bởi Lực lượng Phòng vệ Israel (IDF), Lục quân Hoa Kỳ, Thủy quân Lục chiến Hoa Kỳ, Quân đội Anh và Lực lượng Phòng vệ Úc.

* **Lục quân Hoa Kỳ:** Hệ thống đã được đánh giá trong chương trình "Individual Weapon Overmatch Optic" (IWOO) và được mua sắm cho các nhiệm vụ C-sUAS.26  
* **Thủy quân Lục chiến Hoa Kỳ:** Đã trang bị như một giải pháp C-sUAS tạm thời cho lính thủy đánh bộ.27  
* **Phản hồi Hoạt động:** Các đơn vị đã sử dụng thành công hệ thống để vô hiệu hóa drone trong các vùng chiến sự như Syria và Gaza.11 Khả năng "khóa và bắn" làm giảm căng thẳng cho người lính, những người không còn cần phải thực hiện các phép tính nhẩm phức tạp dưới hỏa lực địch.

### **7.3 Tích hợp với Hệ thống Phát hiện**

Các biến thể SMASH 3000 và AD có thể tích hợp với "Mạng lưới Hỏa lực Liên hợp" (Joint Fire Networks).

* **Slew-to-Cue:** Các radar bên ngoài có thể phát hiện drone và "gợi ý" (cue) cho kính ngắm của người lính. Người lính nhìn thấy một mũi tên trong kính ngắm chỉ về hướng mục tiêu. Khi người lính đưa vũ khí về hướng đó, hệ thống SMASH tiếp quản việc theo dõi, và FBM đảm bảo tiêu diệt. Điều này tạo ra một mạng lưới phòng thủ nhiều lớp.8

## ---

**8\. Thách thức Vận hành và Giới hạn**

Mặc dù có khả năng mang tính cách mạng, hệ thống không phải là không có giới hạn, điều này rất quan trọng đối với một đánh giá kỹ thuật cân bằng.

### **8.1 Trọng lượng và Công thái học**

Việc bổ sung đơn vị SMASH làm thay đổi đặc tính vật lý của súng trường.

* **Trọng lượng:** SMASH 2000 thêm hơn 1 kg vào vũ khí. Mặc dù SMASH 3000 giảm xuống còn \~740g, đây vẫn là một khối lượng đáng kể đặt ở vị trí cao trên súng, có khả năng ảnh hưởng đến sự cân bằng và khả năng xử lý.14  
* **Phản hồi của Binh sĩ:** Một số phản hồi cho thấy lo ngại về sự cồng kềnh gia tăng, đặc biệt là trong Tác chiến Cận chiến (CQB) nơi tốc độ và khả năng cơ động là tối quan trọng.34

### **8.2 Phụ thuộc vào Nguồn điện**

FBM dựa hoàn toàn vào năng lượng điện.

* **Tuổi thọ Pin:** Mặc dù được đánh giá cho 72 giờ, việc sử dụng cường độ cao (xử lý video) làm hao pin nhanh hơn. Môi trường thời tiết lạnh có thể làm giảm đáng kể hiệu suất pin Lithium-Ion, có khả năng làm giảm thời gian hoạt động.7  
* **Chế độ Thất bại:** Nếu pin chết, hệ thống trở lại thành một kính ngắm phản xạ tiêu chuẩn (trong một số mẫu) hoặc mất hoàn toàn tâm ngắm. Quan trọng nhất, FBM được thiết kế để fail-safe (cho phép bắn), nhưng *lợi thế* về độ chính xác sẽ bị mất.7

### **8.3 Yếu tố Môi trường**

* **Vật cản Tầm nhìn:** Là một hệ thống quang học, SMASH dựa vào việc "nhìn thấy" mục tiêu. Sương mù dày đặc, khói hoặc ngụy trang làm mờ tín hiệu hình ảnh của drone có thể đánh bại các thuật toán xử lý hình ảnh, ngăn cản việc khóa mục tiêu.34  
* **Thời tiết Lạnh:** Ngoài các vấn đề về pin, cái lạnh cực độ có thể ảnh hưởng đến độ nhớt của chất bôi trơn trong solenoid hoặc cụm cò, làm tăng độ trễ cơ học, mặc dù hệ thống được chế tạo theo tiêu chuẩn MIL-STD-810.29

### **8.4 Huấn luyện và Học thuyết**

* **Kỷ luật Cò súng:** Kỹ thuật "bóp và giữ" đi ngược lại với huấn luyện thiện xạ tiêu chuẩn (bóp êm và nhả (reset)). Việc đào tạo lại ký ức cơ bắp cần thời gian, mặc dù Smart Shooter tuyên bố người dùng mới có thể thành thạo hệ thống trong vài phút.4  
* **Sự Phụ thuộc vào Công nghệ:** Có một rủi ro về mặt học thuyết là binh lính có thể trở nên quá phụ thuộc vào hệ thống, đánh mất các kỹ năng cơ bản về ước tính độ đón cần thiết nếu hệ thống gặp sự cố.

## ---

**9\. Tác động Chiến lược và Xu hướng Tương lai**

Cơ chế Chặn Kim hỏa đại diện cho một thời điểm quan trọng trong lịch sử vũ khí nhỏ, chuyển đổi súng trường từ một công cụ cơ học sang một nút kỹ thuật số trong chuỗi tiêu diệt.

### **9.1 Dân chủ hóa Độ chính xác**

Hệ thống này "dân chủ hóa" hiệu quả khả năng thiện xạ. Một xạ thủ mới vào nghề được trang bị SMASH có thể đạt được tỷ lệ trúng đích tương đương hoặc vượt quá một xạ thủ chuyên nghiệp khi đối mặt với các mục tiêu di động.1 Điều này có ý nghĩa sâu sắc đối với các đội quân nghĩa vụ hoặc trong tình huống huy động nhanh, nơi thời gian huấn luyện bị hạn chế.

### **9.2 Sự Chuyển dịch sang C-UAS "Tiêu diệt Cứng"**

Tác chiến điện tử (gây nhiễu) đang trở nên kém hiệu quả hơn khi drone trở nên tự chủ và linh hoạt về tần số. Các giải pháp động năng "tiêu diệt cứng" đang trở nên thiết yếu. Hệ thống SMASH biến súng trường tấn công tiêu chuẩn thành một vũ khí phòng không khả thi cho "100 mét cuối cùng", bảo vệ tiểu đội khỏi các loại đạn tuần kích và drone FPV mà không cần tên lửa đắt tiền.27

### **9.3 Tích hợp Robot**

SMASH Hopper chứng minh rằng FBM là "mắt xích còn thiếu" cho robot vũ trang. Bằng cách đảm bảo rằng phát bắn chỉ được thực hiện khi giải pháp hợp lệ, nó giảm thiểu các vấn đề về độ trễ và ổn định vốn có trong các trạm vũ khí điều khiển từ xa. Điều này mở đường cho các phương tiện mặt đất tự hành (UGV) có khả năng tác chiến chống drone chính xác.2

### **9.4 Năng lực Tương lai**

Các thế hệ tiếp theo có thể sẽ bao gồm:

* **Thực tế Tăng cường:** Các lớp phủ tiên tiến hơn (nhận dạng bạn/thù, điểm mốc).  
* **Mạng lưới:** Chia sẻ khóa mục tiêu giữa các thành viên tiểu đội (một người đánh dấu, người khác bắn).  
* **Tinh chỉnh Thuật toán:** Dự đoán tốt hơn các chuyển động thất thường của drone FPV.  
* **Bộ truyền động Nhẹ hơn:** Tiếp tục thu nhỏ FBM để giảm độ cồng kềnh của tay cầm.

## ---

**10\. Kết luận**

**Cơ chế Chặn Kim hỏa** (hay Cơ chế Căn Thời gian Bắn) của hệ thống SMASH không đơn thuần là một thiết bị an toàn; nó là một **giao diện nhắm mục tiêu theo thời gian**. Bằng cách thu hẹp khoảng cách giữa nhận thức của con người (vốn chậm và dễ sai sót) và xử lý kỹ thuật số (vốn nhanh và chính xác), nó giải quyết vấn đề cơ bản của việc tấn công các mối đe dọa trên không nhanh nhẹn bằng vũ khí nhỏ.

Trong khi quang học nhìn xuyên thấu và các thuật toán thị giác máy tính cung cấp *giải pháp*, thì FBM cung cấp sự *thực thi*. Nếu không có khả năng giữ lại phát bắn một cách cơ học cho đến mili-giây chính xác của sự thẳng hàng, các tính toán đường đạn sẽ trở nên vô nghĩa bởi sự rung giật và độ trễ của con người.

Các báo cáo thực địa và tỷ lệ áp dụng quân sự xác nhận rằng công nghệ này mang lại lợi thế chiến thuật quyết định. Khi mối đe dọa từ drone tiếp tục phát triển, "cò súng thông minh" có khả năng sẽ trở thành một tính năng tiêu chuẩn của vũ khí bộ binh, đánh dấu sự kết thúc của kỷ nguyên đường đạn không hỗ trợ và sự khởi đầu của kỷ nguyên sát thương được kích hoạt bằng tính toán. Hệ thống SMASH chứng minh rằng trong thời đại chiến tranh AI, bộ phận quan trọng nhất của khẩu súng không còn là nòng súng, mà là thuật toán điều khiển kim hỏa.

---

**Bảng 1: So sánh Kỹ thuật Các Biến thể SMASH Chính**

| Đặc điểm | SMASH 2000 / 2000 Plus | SMASH 3000 (2000L) | SMASH X4 | SMASH AD |
| :---- | :---- | :---- | :---- | :---- |
| **Vai trò Chính** | Bộ binh / C-UAS | Bộ binh Nhẹ / C-UAS | Xạ thủ Bắn tỉa (DMR) | C-UAS Chuyên dụng |
| **Quang học** | Phản xạ (1x) | Phản xạ (1x) | Phóng đại (4x) | Phản xạ (1x) |
| **Trọng lượng** | \~1.2 kg | \~740 g | \~1.25 kg | \~1.39 kg |
| **Cơ chế Chặn Kim hỏa** | **Có** | **Có** | **Có** | **Có** |
| **Đo xa Laser (LRF)** | Không | Tùy chọn / Giới hạn | Tùy chọn | **Tích hợp** |
| **Tầm bắn Drone** | \~120m | \~200m | \~250m | \~250m |
| **Khả năng Ban đêm** | Chế độ Video Tùy chọn | Tích hợp Ánh sáng Yếu | Tích hợp Ánh sáng Yếu | Tích hợp Ánh sáng Yếu |
| **Pin** | \~72 Giờ / 3600 Phát | \~72 Giờ / 3600 Phát | \~72 Giờ | \~72 Giờ |

**Bảng 2: Trình tự Vận hành của Cơ chế Chặn Kim hỏa**

| Pha | Hành động của Xạ thủ | Hành động của Hệ thống | Trạng thái FBM |
| :---- | :---- | :---- | :---- |
| **1\. Thu thập** | Xác định mục tiêu bằng mắt | Phát hiện mục tiêu tiềm năng | Không hoạt động (An toàn) |
| **2\. Khóa** | Nhấn Nút PTT | Khóa mục tiêu, tính toán giải pháp | Không hoạt động |
| **3\. Tấn công** | **Bóp và Giữ Cò** | Tính toán sai số ngắm | **KÍCH HOẠT (CHẶN)** |
| **4\. Căn chỉnh** | Di chuyển tâm ngắm đến mục tiêu | Giám sát độ thẳng hàng nòng súng | **KÍCH HOẠT (CHẶN)** |
| **5\. Bắn** | *Đang giữ cò* | Phát hiện độ lệch \< Ngưỡng cho phép | **GIẢI PHÓNG (BẮN)** |
| **6\. Tiếp theo** | Nhả Cò | Đặt lại trình tự | Đặt lại (Reset) |

#### **Works cited**

1. Counter Drone \- smart-shooter, accessed January 18, 2026, [https://www.smart-shooter.com/counter-drone/](https://www.smart-shooter.com/counter-drone/)  
2. AI-Powered SMASH 3000 Fire Control System Selected for Australian Army Counter-Drone Evaluation \- Autonomy Global, accessed January 18, 2026, [https://www.autonomyglobal.co/ai-powered-smash-3000-fire-control-system-selected-for-australian-army-counter-drone-evaluation/](https://www.autonomyglobal.co/ai-powered-smash-3000-fire-control-system-selected-for-australian-army-counter-drone-evaluation/)  
3. Smart Shooter SMASH Family of Fire Control Systems (FCS): Smart Weapon Sight Systems for Kinetically Engaging and Neutralizing Enemy Combatants, Vehicles and Drone Aircraft\! \- Defense Review, accessed January 18, 2026, [https://defensereview.com/smart-shooter-smash-family-of-fire-control-systems-fcs-smart-weapon-sight-systems-for-kinetically-engaging-and-neutralizing-enemy-combatants-vehicles-and-drone-aircraft/](https://defensereview.com/smart-shooter-smash-family-of-fire-control-systems-fcs-smart-weapon-sight-systems-for-kinetically-engaging-and-neutralizing-enemy-combatants-vehicles-and-drone-aircraft/)  
4. Home \- smart-shooter, accessed January 18, 2026, [https://www.smart-shooter.com/](https://www.smart-shooter.com/)  
5. About \- Smart Shooter, accessed January 18, 2026, [https://www.smart-shooter.com/about-smart-shooter/](https://www.smart-shooter.com/about-smart-shooter/)  
6. Smash 3000 | PDF | Unmanned Aerial Vehicle | Fire Control System \- Scribd, accessed January 18, 2026, [https://www.scribd.com/document/726667173/SMASH-3000](https://www.scribd.com/document/726667173/SMASH-3000)  
7. Smash 2000 \- Sop For Ak103 | PDF | Trigger (Firearms) | Rifle \- Scribd, accessed January 18, 2026, [https://www.scribd.com/document/899835349/Smash-2000-Sop-for-Ak103](https://www.scribd.com/document/899835349/Smash-2000-Sop-for-Ak103)  
8. SMASH 3000 \- Advanced Fire Control Sight \- smart-shooter, accessed January 18, 2026, [https://www.smart-shooter.com/wp-content/uploads/2025/07/SMASH-3000.pdf](https://www.smart-shooter.com/wp-content/uploads/2025/07/SMASH-3000.pdf)  
9. Solutions \- Smart Shooter, accessed January 18, 2026, [https://www.smart-shooter.com/products/](https://www.smart-shooter.com/products/)  
10. SMASH X4 \- smart-shooter, accessed January 18, 2026, [https://www.smart-shooter.com/wp-content/uploads/2024/03/SMASH-X4.pdf](https://www.smart-shooter.com/wp-content/uploads/2024/03/SMASH-X4.pdf)  
11. US special operations forces are testing a 'guaranteed hit' smart rifle system in Syria, accessed January 18, 2026, [https://taskandpurpose.com/news/special-operations-smart-shooter-syria/](https://taskandpurpose.com/news/special-operations-smart-shooter-syria/)  
12. Smash Ad | PDF | Unmanned Aerial Vehicle | Fire Control System \- Scribd, accessed January 18, 2026, [https://www.scribd.com/document/898487254/SMASH-AD](https://www.scribd.com/document/898487254/SMASH-AD)  
13. Australia tests Israeli smart sights for counter-drone use \- Defence Blog, accessed January 18, 2026, [https://defence-blog.com/australia-tests-israeli-smart-sights-for-counter-drone-use/](https://defence-blog.com/australia-tests-israeli-smart-sights-for-counter-drone-use/)  
14. Fire Control System for Small Arms SMASH 2000 \- smart-shooter, accessed January 18, 2026, [https://www.smart-shooter.com/wp-content/uploads/2021/02/SMASH-2000-V6.12.20.pdf](https://www.smart-shooter.com/wp-content/uploads/2021/02/SMASH-2000-V6.12.20.pdf)  
15. Smart Gun Technology Patents, accessed January 18, 2026, [https://www.dhs.gov/sites/default/files/publications/R-Tech%20Smart%20Gun%20Technology%20Patents%20for%20Micro%20Site%20DELIV%20160719-508C.pdf](https://www.dhs.gov/sites/default/files/publications/R-Tech%20Smart%20Gun%20Technology%20Patents%20for%20Micro%20Site%20DELIV%20160719-508C.pdf)  
16. Trigger Lock Patents and Patent Applications (Class 42/70.06), accessed January 18, 2026, [https://patents.justia.com/patents-by-us-classification/42/70.06](https://patents.justia.com/patents-by-us-classification/42/70.06)  
17. Shot indicating resetting trigger firearm training system. Патент № US 0009746271 МПК F41A33/02 \- Московский инновационный кластер, accessed January 18, 2026, [https://i.moscow/patents/US0009746271B2\_20170829](https://i.moscow/patents/US0009746271B2_20170829)  
18. US20240240894A1 \- A Firearm Trigger Control Device \- Google Patents, accessed January 18, 2026, [https://patents.google.com/patent/US20240240894A1/en](https://patents.google.com/patent/US20240240894A1/en)  
19. Patents Assigned to Smart Shooter Ltd., accessed January 18, 2026, [https://patents.justia.com/assignee/smart-shooter-ltd](https://patents.justia.com/assignee/smart-shooter-ltd)  
20. SMARTSHOOTER develops portable layered C-UAS \- Unmanned airspace, accessed January 18, 2026, [https://www.unmannedairspace.info/counter-uas-systems-and-policies/smartshooter-develops-portable-layered-c-uas/](https://www.unmannedairspace.info/counter-uas-systems-and-policies/smartshooter-develops-portable-layered-c-uas/)  
21. Soldier's Manual and Trainer's Guide MOS 19D Cavalry Scout \- 2nd Platoon Recoons, accessed January 18, 2026, [https://www.recoons.org/files/Doctrine%20and%20Training/Soldiers%20Training%20Publication/SoldiersManual19DLevel2.pdf](https://www.recoons.org/files/Doctrine%20and%20Training/Soldiers%20Training%20Publication/SoldiersManual19DLevel2.pdf)  
22. SCIENCE AND TECHNOLOGY PUBLICATIONS \- SciTePress, accessed January 18, 2026, [https://www.scitepress.org/PublishedPapers/2019/](https://www.scitepress.org/PublishedPapers/2019/)  
23. Electromagnetic firing system for firearm with interruptable trigger control \- Justia Patents, accessed January 18, 2026, [https://patents.justia.com/patent/11300378](https://patents.justia.com/patent/11300378)  
24. Press \- Smart Shooter, accessed January 18, 2026, [https://www.smart-shooter.com/press/](https://www.smart-shooter.com/press/)  
25. DEFEA 2023 | SMARTSHOOTER presents the advanced SMASH 3000 fire control system \- VIDEO and Photos | DEFENCE ReDEFiNED, accessed January 18, 2026, [https://defenceredefined.com.cy/defea-2023-smartshooter-presents-the-advanced-smash-3000-fire-control-system-video-and-photos/](https://defenceredefined.com.cy/defea-2023-smartshooter-presents-the-advanced-smash-3000-fire-control-system-video-and-photos/)  
26. U.S. Army Expands Use of Smart Shooter's Precision Fire Control System \- Techtime News, accessed January 18, 2026, [https://techtime.news/2025/05/31/smart-shooter-6/](https://techtime.news/2025/05/31/smart-shooter-6/)  
27. SMARTSHOOTER Receives New Order from U.S. Marine Corps for SMASH 2000L Fire Control Systems, accessed January 18, 2026, [https://soldiersystems.net/2025/07/14/smartshooter-receives-new-order-from-u-s-marine-corps-for-smash-2000l-fire-control-systems/](https://soldiersystems.net/2025/07/14/smartshooter-receives-new-order-from-u-s-marine-corps-for-smash-2000l-fire-control-systems/)  
28. SMASH AD Counter Drone Fire Control System for Small Arms \- DEFSYS SOLUTIONS, accessed January 18, 2026, [https://www.defsys.co.in/img/SMASH-AD.PDF](https://www.defsys.co.in/img/SMASH-AD.PDF)  
29. DSEI UK 2025: SMASH 3000 for heavy machine guns unveiled \- Calibre Defence, accessed January 18, 2026, [https://www.calibredefence.co.uk/dsei-uk-2025-smash-3000-for-heavy-machine-guns-unveiled/](https://www.calibredefence.co.uk/dsei-uk-2025-smash-3000-for-heavy-machine-guns-unveiled/)  
30. Smash 3000 | PDF | Unmanned Aerial Vehicle | Fire Control System \- Scribd, accessed January 18, 2026, [https://es.scribd.com/document/726667173/SMASH-3000](https://es.scribd.com/document/726667173/SMASH-3000)  
31. SMARTSHOOTER Moving Past the Final Milestone on ASD SO/LIC IWTSD's Individual Weapon Overmatch Optic (IWOO) Program using the SMASH Advanced Fire Control System, accessed January 18, 2026, [https://soldiersystems.net/2023/01/11/smartshooter-moving-past-the-final-milestone-on-asd-so-lic-iwtsds-individual-weapon-overmatch-optic-iwoo-program-using-the-smash-advanced-fire-control-system/](https://soldiersystems.net/2023/01/11/smartshooter-moving-past-the-final-milestone-on-asd-so-lic-iwtsds-individual-weapon-overmatch-optic-iwoo-program-using-the-smash-advanced-fire-control-system/)  
32. Marines to field new smart scope to help shoot down small drones \- Task & Purpose, accessed January 18, 2026, [https://taskandpurpose.com/news/marines-smash-2000l-smart-scope/](https://taskandpurpose.com/news/marines-smash-2000l-smart-scope/)  
33. Soldier Systems Daily Soldier Systems Daily, accessed January 18, 2026, [https://soldiersystems.net/page/485/?trk=public\_post\_share-update\_update-text](https://soldiersystems.net/page/485/?trk=public_post_share-update_update-text)  
34. Small arms fire control systems/optics (e.g. Tracking point, SMASH scope) appear to have some interest by mitary entities. Would these optics actually present a significant benefit to infantry? \- Reddit, accessed January 18, 2026, [https://www.reddit.com/r/WarCollege/comments/ht6yu6/small\_arms\_fire\_control\_systemsoptics\_eg\_tracking/](https://www.reddit.com/r/WarCollege/comments/ht6yu6/small_arms_fire_control_systemsoptics_eg_tracking/)  
35. Marines Testing Counter-Drone Rifle Aiming System With Automatically Moving Stock, accessed January 18, 2026, [https://www.twz.com/sea/marines-testing-counter-drone-rifle-aiming-system-with-automatically-moving-stock](https://www.twz.com/sea/marines-testing-counter-drone-rifle-aiming-system-with-automatically-moving-stock)  
36. Army Purchases Fire Control System to Counter Small Drones \- National Defense Magazine, accessed January 18, 2026, [https://www.nationaldefensemagazine.org/articles/2022/12/2/army-purchases-fire-control-system-to-counter-small-drones](https://www.nationaldefensemagazine.org/articles/2022/12/2/army-purchases-fire-control-system-to-counter-small-drones)  
37. Smart Shooter's launches SMASH Dragon UAV \- APDR \- Asia Pacific Defence Reporter, accessed January 18, 2026, [https://asiapacificdefencereporter.com/smart-shooters-launches-smash-dragon-uav/](https://asiapacificdefencereporter.com/smart-shooters-launches-smash-dragon-uav/)