# **Báo cáo Nghiên cứu: Hệ thống Kỹ thuật Thuật toán và AI trong Thiết kế Khí tài Quốc phòng và Hải quân Hiện đại**

Sự phát triển của công nghệ thiết kế và sản xuất đang đứng trước một bước ngoặt lịch sử, nơi các phương pháp thiết kế dựa trên máy tính (CAD) truyền thống đang dần nhường chỗ cho một kỷ nguyên mới: Kỹ thuật Thuật toán (Algorithmic Engineering \- AE) và Thiết kế dựa trên Trí tuệ Nhân tạo (AI-Driven Design). Trong bối cảnh quốc phòng và hải quân, nơi các yêu cầu về hiệu suất, trọng lượng và khả năng sinh tồn là cực kỳ khắt khe, việc ứng dụng các mô hình tiên tiến như của Hyperganic và các phương pháp tiếp cận của các chuyên gia như Nolan Kim đã tạo ra những đột phá chưa từng có. Báo cáo này đi sâu vào việc phân tích các đặc điểm cốt lõi, cơ chế vận hành và các ứng dụng chiến lược của hệ thống thiết kế AI trong việc chế tạo các khí tài thế hệ mới.

## **Hệ chuyển đổi từ CAD truyền thống sang Kỹ thuật Thuật toán**

Nền tảng của cuộc cách mạng này nằm ở việc thay đổi bản chất của cách thức con người tương tác với hình học. Trong hơn bốn thập kỷ qua, CAD (Computer-Aided Design) đã thống trị ngành công nghiệp bằng việc sử dụng hình học vector và biểu diễn ranh giới (B-Rep). Tuy nhiên, phương pháp này gặp giới hạn khi đối mặt với các cấu trúc có độ phức tạp cao, tương đương với các cấu trúc sinh học trong tự nhiên.1

### **Triết lý "Thiết kế như Tự nhiên" và Sự ra đời của Kỹ thuật Thuật toán**

Hyperganic, dưới sự dẫn dắt của Lin Kayser và Michael Gallo, đã tiên phong trong việc xử lý các vật thể vật lý không phải dưới dạng các bản vẽ tĩnh mà là các khối dữ liệu động được tạo ra bởi thuật toán.2 Kinh nghiệm của Lin Kayser trong ngành điều khiển công nghiệp tại Aradex và việc số hóa ngành điện ảnh tại Iridas đã tạo tiền đề cho việc coi sản xuất là một quy trình phần mềm.2 Kỹ thuật Thuật toán không bắt đầu bằng việc "vẽ" một vật thể; thay vào đó, nó bắt đầu bằng việc định nghĩa các quy tắc toán học và để AI thực hiện quy trình "tiến hóa kỹ thuật số" để tìm ra hình dáng tối ưu nhất.1

Sự khác biệt cốt lõi giữa hai phương pháp này có thể được tóm tắt qua bảng so sánh dưới đây:

| Đặc điểm so sánh | Thiết kế CAD truyền thống | Kỹ thuật Thuật toán (Hyperganic/Nolan) |
| :---- | :---- | :---- |
| **Đơn vị cấu thành** | Vector, Bề mặt (Surfaces), Mesh | Voxel (Pixel 3D), Hàm ẩn (Implicit Functions) |
| **Quy trình thiết kế** | Kỹ sư vẽ thủ công dựa trên kinh nghiệm | AI tính toán dựa trên tham số và thuật toán |
| **Độ phức tạp** | Bị giới hạn bởi khả năng vẽ và quản lý mesh | Không giới hạn, có thể đạt đến cấp độ vi mô |
| **Tốc độ lặp lại** | Chậm (mất vài tuần để chỉnh sửa mẫu lớn) | Cực nhanh (hàng nghìn biến thể trong vài phút) |
| **Khả năng tối ưu** | Tối ưu hóa cục bộ, rời rạc | Tối ưu hóa đa mục tiêu tích hợp |
| **Mối liên hệ sản xuất** | Cần bước trung gian để chuẩn bị tệp in | Trực tiếp tạo ra dữ liệu cho máy in 3D công nghiệp |

Sự chuyển đổi này cho phép giảm thời gian từ ý tưởng đến sản xuất tới 80%, chuyển đổi các chu kỳ phát triển từ hàng tháng xuống còn vài ngày.4

### **Logic cốt lõi: Voxel và Hình học ẩn**

Thay vì sử dụng các lưới đa giác (mesh) dễ gây lỗi khi cấu trúc quá phức tạp, hệ thống AE sử dụng hình học ẩn (Implicit Modeling) và kiến trúc dựa trên voxel. Voxel, tương tự như pixel trong hình ảnh 2D, cho phép xác định thuộc tính vật liệu tại mọi điểm trong không gian 3D.3 Điều này cho phép AI tạo ra các vật thể có mật độ thay đổi liên tục, tích hợp các chức năng khác nhau vào cùng một khối vật liệu duy nhất mà không có ranh giới rõ rệt.

Trong mô hình hình học ẩn, một bề mặt được định nghĩa bởi một phương trình toán học dạng:

![][image1]  
Cách tiếp cận này loại bỏ các vấn đề về lỗi mesh thường gặp trong CAD và cho phép thực hiện các phép toán boolean (cộng, trừ khối) một cách tức thời và chính xác tuyệt đối, ngay cả với các cấu trúc có hàng triệu nan lưới.5

## **Cấu trúc Lưới (Lattice) và Metamaterials: Tối ưu hóa Hiệu suất Vật lý**

Một trong những đặc điểm nổi bật nhất của thiết kế AI là khả năng tạo ra các cấu trúc lưới (Lattice Structures) phức tạp mà con người không thể thiết kế thủ công. Những cấu trúc này không chỉ giúp giảm trọng lượng mà còn thay đổi hoàn toàn cách thức vật thể tương tác với lực, nhiệt và sóng điện từ.

### **Các loại bề mặt tối thiểu định kỳ ba lần (TPMS)**

Hệ thống Hyperganic và các nghiên cứu của Nolan Kim tập trung sâu vào các cấu trúc TPMS như Gyroid, Schwarz P, và Diamond.5 Những cấu trúc này có đặc tính là diện tích bề mặt cực lớn nhưng trọng lượng lại rất nhẹ và có khả năng chịu lực phân tán đều.

* **Gyroid:** Có khả năng phân tán lực đều theo mọi hướng và không có các mặt phẳng ưu tiên, giúp chống lại sự nứt vỡ cục bộ. Tuy nhiên, trong một số ứng dụng dòng chảy, Gyroid có thể tạo ra lực cản lớn hơn so với các cấu trúc lưới thẳng.7  
* **Schwarz P (Primitive):** Được mô tả bởi phương trình ![][image2], đây là cấu trúc lý tưởng cho các bộ trao đổi nhiệt nhờ khả năng phân tách hai dòng lưu chất một cách hiệu quả.8  
* **Cấu trúc Voronoi:** Được sử dụng để tạo ra các khoang tế bào ngẫu nhiên nhưng được kiểm soát về mật độ, mô phỏng cấu trúc xương người để tối ưu hóa tỷ lệ độ bền/trọng lượng.3

| Loại Lattice | Ưu điểm chính | Ứng dụng quốc phòng điển hình |
| :---- | :---- | :---- |
| **Gyroid** | Kháng va chạm, tản nhiệt đa hướng | Vỏ giáp nhẹ, thiết bị trao đổi nhiệt phức tạp |
| **Schwarz P** | Dễ sản xuất, hiệu quả dòng chảy cao | Hệ thống làm mát bệ pháo, bộ lọc khí |
| **Diamond** | Độ cứng cấu trúc cực cao | Khung thân máy bay không người lái (UAV) |
| **Voronoi** | Hấp thụ năng lượng va chạm tốt | Ghế chống sốc cho tàu cao tốc, phao chống đạn |

### **Metamaterials và Hiệu ứng Auxetic**

Vượt ra ngoài các loại vật liệu truyền thống, thiết kế AI cho phép tạo ra metamaterials – loại vật liệu có tính chất cơ học được quyết định bởi cấu trúc hình học hơn là thành phần hóa học.10 Một ví dụ điển hình là cấu trúc auxetic, có hệ số Poisson âm, nghĩa là chúng nở ra theo phương ngang khi bị kéo theo phương dọc.11 Trong quốc phòng, vật liệu này cực kỳ hữu ích cho việc chế tạo các lớp lót chống nổ hoặc các tấm giáp có khả năng co lại để tăng mật độ tại điểm bị va chạm, từ đó ngăn chặn sự xuyên thấu của đầu đạn.

## **Tối ưu hóa đa mục tiêu trong Thiết kế Khí tài Hải quân**

Sức mạnh thực sự của AI thiết kế nằm ở khả năng giải quyết đồng thời nhiều bài toán kỹ thuật mâu thuẫn nhau trong cùng một quy trình tính toán duy nhất. Thay vì phải thiết kế xong hình dáng rồi mới thực hiện mô phỏng nhiệt hoặc radar, AI tích hợp các vòng lặp phản hồi ngay trong quá trình sinh trưởng của vật thể.5

### **Động cơ và Vũ khí: Tản nhiệt và Trọng lượng**

Trong thiết kế bệ pháo (như mẫu 176mm) và động cơ tên lửa, thách thức lớn nhất là quản lý nhiệt độ cực cao trong khi vẫn phải đảm bảo trọng lượng nhẹ để tăng tính cơ động. AI sử dụng phương pháp "Lattice Boltzmann Computational Fluid Dynamics" (CFD) để mô phỏng cách chất lỏng làm mát di chuyển qua các cấu trúc lưới phức tạp bên trong vách buồng đốt hoặc thân pháo.5

Kết quả thực nghiệm cho thấy các bộ trao đổi nhiệt được thiết kế theo cách này có thể đạt diện tích bề mặt lớn gấp 14 lần so với thiết kế truyền thống, giúp tăng hiệu suất tản nhiệt vượt trội.10 Đối với bệ pháo 176mm, việc tích hợp các kênh làm mát dạng lưới trực tiếp vào cấu trúc chịu lực cho phép giảm trọng lượng từ 30-50%, đồng thời rút ngắn thời gian làm nguội giữa các loạt bắn, giúp tăng tốc độ bắn liên tục.12

Sự kết hợp giữa Hyperganic và EOS trong việc phát triển động cơ Aerospike là một minh chứng điển hình.3 Động cơ Aerospike in 3D nguyên khối không chỉ nhẹ hơn mà còn có khả năng tự điều chỉnh theo áp suất môi trường, một thành tựu mà các phương pháp gia công truyền thống khó có thể đạt được do độ phức tạp của các kênh làm mát bên trong.3

### **Công nghệ Tàng hình (Stealth) và Quản lý Tín hiệu**

Khả năng tàng hình của tàu chiến không chỉ phụ thuộc vào hình dạng bên ngoài mà còn ở cách cấu trúc bề mặt tương tác với sóng radar và bức xạ hồng ngoại. AI thiết kế có thể tính toán các "siêu bề mặt" (metasurfaces) có khả năng tán xạ sóng radar theo các hướng không gây nguy hiểm hoặc hấp thụ chúng thông qua các cấu trúc lưới siêu nhỏ.10

Về mặt tín hiệu hồng ngoại, AI thiết kế các hệ thống quản lý nhiệt chủ động, dẫn nhiệt từ các bộ phận nóng (như động cơ) qua các kênh vi lưu tích hợp bên trong vỏ tàu để làm mát đều bề mặt bằng nước biển, từ đó làm triệt tiêu dấu vết nhiệt trước các cảm biến của đối phương.9

## **Ứng dụng trong Thiết bị Huấn luyện và Sinh tồn**

Các cấu trúc phao nổi đa khoang là một ứng dụng sáng tạo khác của thiết kế thuật toán trong hải quân. Thay vì một khoang rỗng lớn dễ bị chìm khi trúng đạn, AI tạo ra một mạng lưới hàng nghìn khoang nhỏ độc lập dựa trên cấu trúc lưới Voronoi hoặc TPMS.11

### **Phao nổi không thể chìm và Giả lập Mục tiêu**

Bằng cách tối ưu hóa độ dày của các nan lưới tại những vị trí chiến lược, AI tạo ra các phao nổi có độ bền cực cao nhưng vẫn đảm bảo lực nổi dư thừa lớn. Ngay cả khi bia mục tiêu bị trúng nhiều phát đạn trực tiếp, phần lớn các khoang nhỏ vẫn giữ được không khí, giúp thiết bị duy trì trạng thái nổi.5

Hơn nữa, các cấu trúc này có thể được lập trình để giả lập dấu vết vật lý của các tàu chiến thực thụ. Bằng cách thay đổi hình học lưới để điều chỉnh độ phản xạ radar, một phao nhỏ có thể xuất hiện trên màn hình radar đối phương như một tàu khu trục, phục vụ đắc lực cho các chiến dịch nghi binh và huấn luyện tác chiến điện tử.

### **Footwear và Công thái học cho Binh sĩ**

Nolan Kim đã đóng góp đáng kể trong việc ứng dụng các cấu trúc lưới vào giày hiệu suất cao.14 Trong quân đội, việc tùy chỉnh đế giày dựa trên dữ liệu áp lực bàn chân của từng binh sĩ giúp giảm mệt mỏi và chấn thương khi hành quân lâu ngày.5 AI có thể tạo ra các vùng có độ cứng khác nhau trong cùng một đế giày in 3D duy nhất bằng cách thay đổi độ dày và mật độ nan lưới, mang lại sự thoải mái tối ưu mà giày sản xuất hàng loạt không thể có được.5

## **Mô phỏng Meshless và Quy trình Sản xuất Bồi đắp**

Một thách thức lớn trong thiết kế các cấu trúc lưới phức tạp là việc mô phỏng độ bền. Các phương pháp Phần tử Hữu hạn (FEM) truyền thống thường thất bại vì đòi hỏi quá nhiều tài nguyên máy tính để tạo lưới (meshing) cho hàng triệu nan lưới nhỏ.

### **Phương pháp Finite Cell Method (FCM)**

Hyperganic sử dụng các phương pháp mô phỏng không lưới (Quasi-Meshless Simulation) như Finite Cell Method để kiểm tra độ bền trực tiếp trên dữ liệu voxel.5 Điều này cho phép thực hiện hàng chục lần lặp lại thiết kế mỗi ngày. Ví dụ, trong tối ưu hóa một giá đỡ hàng không, AI đã thực hiện 30 lần lặp để giảm 59% trọng lượng vật liệu trong khi vẫn đảm bảo ứng suất von Mises nằm trong giới hạn an toàn.11

Dưới đây là hiệu quả của việc áp dụng mô phỏng tích hợp trong quy trình thiết kế AI:

| Chỉ số hiệu quả | Quy trình truyền thống | Quy trình AI/Algorithmic |
| :---- | :---- | :---- |
| **Thời gian thiết kế** | 4-6 tuần | 2-3 ngày 4 |
| **Số lần lặp tối ưu hóa** | 2-5 lần | 30-100 lần 11 |
| **Thời gian chuẩn bị mô phỏng** | 12-24 giờ (tạo lưới) | Gần như tức thời (Meshless) 5 |
| **Độ chính xác cấu trúc vi mô** | Thấp (giả định vật liệu đồng nhất) | Rất cao (mô phỏng từng nan lưới) 15 |

### **Chuỗi cung ứng kỹ thuật số và Nhà máy số**

Sự kết hợp giữa thiết kế thuật toán và in 3D công nghiệp đang thúc đẩy khái niệm "Digital Factories".1 Trong hải quân, điều này cho phép các tàu hậu cần hoặc xưởng đóng tàu dã chiến sản xuất các phụ tùng thay thế ngay tại chỗ từ các tệp thiết kế thuật toán được gửi qua mạng. Thay vì lưu kho hàng nghìn linh kiện vật lý, quân đội chỉ cần lưu trữ các thuật toán tạo ra chúng, giúp giảm chi phí kho bãi và tăng khả năng phản ứng nhanh trong chiến tranh.1

## **Tương lai: Sự giao thoa giữa LLM và Kỹ thuật Thuật toán**

Một rào cản lớn của Kỹ thuật Thuật toán trước đây là đòi hỏi kỹ sư phải có kỹ năng lập trình cao. Tuy nhiên, Hyperganic hiện đang nghiên cứu việc tích hợp các Mô hình Ngôn ngữ Lớn (LLM) như GPT-4 để tạo ra giao diện "Text-to-3D".18

Kỹ sư giờ đây có thể ra lệnh bằng tiếng Anh hoặc tiếng Việt: "Thiết kế một bệ đỡ chịu lực 5 tấn, tích hợp kênh làm mát bằng nước, sử dụng cấu trúc lưới Gyroid ở tâm và Voronoi ở bề mặt để giảm 40% trọng lượng".18 AI sẽ tự động biên dịch yêu cầu này thành mã thuật toán, thực hiện mô phỏng và tạo ra tệp sản xuất. Sự dân chủ hóa công nghệ này cho phép các chuyên gia quân sự trực tiếp tham gia vào quá trình thiết kế mà không cần phải là chuyên gia lập trình hay chuyên gia CAD.18

## **Kết luận và Nhận định Chiến lược**

Hệ thống AI thiết kế dựa trên mô hình của Hyperganic và Nolan Kim không chỉ là một công cụ phần mềm mới, mà là một sự tái định nghĩa về năng lực sản xuất quốc phòng. Khả năng "tính toán" ra các vật thể có độ phức tạp như tự nhiên cho phép chúng ta vượt qua những giới hạn vật lý của các phương pháp chế tạo cũ.

1. **Ưu thế về Trọng lượng và Hiệu suất:** Việc giảm trọng lượng 30-50% cho các khí tài hải quân như bệ pháo và động cơ giúp tăng tốc độ di chuyển và khả năng mang theo nhiều nhiên liệu hoặc vũ khí hơn.11  
2. **Khả năng Sinh tồn Đột phá:** Các cấu trúc tàng hình dựa trên metamaterials và phao nổi đa khoang không thể chìm tạo ra lợi thế sinh tồn quan trọng trong các kịch bản tác chiến cường độ cao.10  
3. **Hậu cần Tức thời:** Mô hình thiết kế thuật toán kết hợp với in 3D giúp hiện thực hóa chuỗi cung ứng kỹ thuật số, giảm sự phụ thuộc vào các tuyến hậu cần dài ngày và dễ bị tổn thương.1

Mặc dù việc chuyển đổi hoàn toàn sang Kỹ thuật Thuật toán vẫn còn những thách thức về mặt tiêu chuẩn hóa và xác thực, nhưng những lợi ích chiến lược mà nó mang lại là không thể phủ nhận. Đây chính là chìa khóa để duy trì ưu thế công nghệ trong một thế giới mà tốc độ đổi mới chính là yếu tố quyết định thắng bại trên chiến trường.

#### **Works cited**

1. Let's Build Machines as Complex as Nature \- Radical Innovation in a World of A.I.-based Engineering \- Dubai Future Foundation, accessed February 9, 2026, [https://www.dubaifuture.ae/events/lets-build-machines-as-complex-as-nature-radical-innovation-in-a-world-of-a-i-based-engineering/](https://www.dubaifuture.ae/events/lets-build-machines-as-complex-as-nature-radical-innovation-in-a-world-of-a-i-based-engineering/)  
2. Lin Kayser, CEO Hyperganic AG | Events | 1E9.community, accessed February 9, 2026, [https://www.1e9.community/speakers/lin-kayser/92e4a9c4-ceaf-49bd-99c6-16484a83316b](https://www.1e9.community/speakers/lin-kayser/92e4a9c4-ceaf-49bd-99c6-16484a83316b)  
3. Founders Lin Kayser & Michael Gallo depart from Hyperganic, accessed February 9, 2026, [https://www.tctmagazine.com/founders-lin-kayser-michael-gallo-depart-hyperganic/](https://www.tctmagazine.com/founders-lin-kayser-michael-gallo-depart-hyperganic/)  
4. Running Faster | Hyperganic, accessed February 9, 2026, [https://hyperganic.com/press-and-stories/running-faster/](https://hyperganic.com/press-and-stories/running-faster/)  
5. Hyperganic: Algorithmic Engineering for Additive Manufacturing, accessed February 9, 2026, [https://hyperganic.com/](https://hyperganic.com/)  
6. Mechanical properties of a new type of plate–lattice structures \- ResearchGate, accessed February 9, 2026, [https://www.researchgate.net/publication/346130484\_Mechanical\_properties\_of\_a\_new\_type\_of\_plate-lattice\_structures](https://www.researchgate.net/publication/346130484_Mechanical_properties_of_a_new_type_of_plate-lattice_structures)  
7. Metal AM Autumn 2022 by Inovar Communications \- Issuu, accessed February 9, 2026, [https://issuu.com/inovar-communications/docs/metal\_am\_autumn\_2022\_issuu](https://issuu.com/inovar-communications/docs/metal_am_autumn_2022_issuu)  
8. Use of Triply Periodic Minimal Surface Lattices for Heat Transfer Applications: A Systematic Literature Investigation \- MDPI, accessed February 9, 2026, [https://www.mdpi.com/1996-1073/19/3/833](https://www.mdpi.com/1996-1073/19/3/833)  
9. Performance Evaluation of Triply Periodic Minimal Surface Heat Exchangers Using Nanofluids at High Flow Rates for Enhanced Energy Efficiency \- MDPI, accessed February 9, 2026, [https://www.mdpi.com/2076-3417/15/8/4140](https://www.mdpi.com/2076-3417/15/8/4140)  
10. Thermal Management | Hyperganic, accessed February 9, 2026, [https://hyperganic.com/solutions/thermal-management](https://hyperganic.com/solutions/thermal-management)  
11. Metamaterials | Hyperganic, accessed February 9, 2026, [https://hyperganic.com/solutions/metamaterials](https://hyperganic.com/solutions/metamaterials)  
12. NVIDIA® Jetson™ \- Powered Edge AI Device Collection \- Seeed Studio, accessed February 9, 2026, [https://files.seeedstudio.com/wiki/Seeed\_Jetson/Seeed\_NVIDIA\_Jetson\_Catalog\_in\_Robotics\_and\_Edge\_AI.pdf](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)  
13. Additively Manufactured Lattice-Based Enhanced Heat Transfer Concepts for Superior Particle-to-Supercritical Carbon Dioxide Heat Exchanger for \- TRACE: Tennessee, accessed February 9, 2026, [https://trace.tennessee.edu/cgi/viewcontent.cgi?article=12134\&context=utk\_graddiss](https://trace.tennessee.edu/cgi/viewcontent.cgi?article=12134&context=utk_graddiss)  
14. Nolan Kim, Author at VoxelMatters \- The heart of additive ..., accessed February 9, 2026, [https://www.voxelmatters.com/author/nolan-kim/](https://www.voxelmatters.com/author/nolan-kim/)  
15. 3D-footwear: Visualize and materialize \- nTop, accessed February 9, 2026, [https://www.ntop.com/resources/blog/3d-footwear-visualize-and-materialize/](https://www.ntop.com/resources/blog/3d-footwear-visualize-and-materialize/)  
16. Impact F1, what next-gen, parametric, 3D printed flip flops look like \- VoxelMatters, accessed February 9, 2026, [https://www.voxelmatters.com/impact-f1-what-next-gen-parametric-3d-printed-flip-flops-look-like/](https://www.voxelmatters.com/impact-f1-what-next-gen-parametric-3d-printed-flip-flops-look-like/)  
17. Nolan Kim, accessed February 9, 2026, [https://www.nolankim.com/](https://www.nolankim.com/)  
18. The magazine for metal Additive Manufacturing / 3D printing \- Autumn 2023 issue, accessed February 9, 2026, [https://www.metal-am.com/wp-content/uploads/sites/4/2023/10/Metal-Additive-Manufacturing-magazine-Autumn-2023.pdf](https://www.metal-am.com/wp-content/uploads/sites/4/2023/10/Metal-Additive-Manufacturing-magazine-Autumn-2023.pdf)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAAAiCAYAAADiWIUQAAAC80lEQVR4Xu3cTahUZRgH8Fc0UfpAULSw0EADUWghKEGL/FgUkmabkKACF7oQFJEEbZFEm9pEiLgoKKRdtAkXfSwu2k6JCKI2Qds2LYKCNuXzcM5x3jnONBfmcu/I/f3gz8x53nPnzvLhed8zpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBULkXW9YuL4Ejk+X4RAGC52hX5MfJv5IWqfr56vxS2RR7vF6fwaOR65NXIzd4aAMBMy8YsG5gDkQfa2pOR7+7esTRWlIVtGj+IXG7fZ5O6s1oDAJhZeyO/RD6LbKnqn0fOVtfZPD0V2R1ZFXkj8ki13nco8lp1/UT1fpSXSrMF+lDkaFX/IfJ0dT2NvyMvtu/z/3xarQEAzKRsvJ6L/BN5tww3bLfKoLlJpyKnIzciX0WuRD6q1mvZ3B2OfFFdZ0OYr6PkVO/P0mzJvh85WK3l5K/+Hp2NkcfGZFN1X+2/MtywfRt5cLAMADC7fops6NVyspXTtM6a9jXvPRFZXcY3YHlvTst+b6/zc54dLI+Un3Wsfa3NlYXbFu03bHPtKwDAzMvtz5y21foNWyebsEnNV8qzYnnAP2WDt7laGyUneC/3i2VhGzZbogDAfSmfwhzXKNX13LLc09az2XmnNA8m5Dbqb5G13Y2t3MrMRmtr5Neq/ldpDv93cqL2ZuT1yPbIN2X4vNvPZXiLdBrZRNYPHWQAAGZeTstGHer/sDTn2jpfRt4rTSN2IbKvrWfDl01Vnh2rnSnNObjvSzPZ6vxRmrNjnWzGzkWulmbLcn+1lm6XydO5+crmMr9TTg6/LvduvwIAzJSckn0Sudard3K929KcZH0ZnHFL9fmwPPN2slrLKdrF6vr/5NTumX4RAGC5yCcpPy7N5Gyc3ALtb3X25ZQqz5/V8m+OR3ZE3iqD33ZLb5fmB3Hn45ViCgYAMNHDkZX94iLIn9uoGz0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYLHcAJK1YvNmuxigAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,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>