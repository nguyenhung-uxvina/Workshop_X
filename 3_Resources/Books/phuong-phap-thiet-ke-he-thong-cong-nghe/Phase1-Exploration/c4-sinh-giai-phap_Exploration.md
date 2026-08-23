# Khai thác NLM — Công cụ sinh giải pháp — hộp đen, cấu trúc chức năng, ma trận hình thái, catalogue thiết kế

Ngày: 2026-08-20 | Cụm: `c4-sinh-giai-phap` | Truy vấn: 4

## Nguồn được dùng trong cụm này

- **[17]** Introducción a la metodología del diseño mecánico VDI 2221  — `vdi2221-pp`
- **[29]** (PDF) Using Morphological Chart for Analysing Existing Designs  — `pahlbeitz`
- **[32]** Chapter 2: Functional Analysis and Concept Generation – Introduction to Mechanical Engineering D  — `pahlbeitz`
- **[38]** Morphological Chart – Introduction to Mechanical Design and Manufacturing  — `pahlbeitz`
- **[39]** Morphological charts  — `pahlbeitz`

## Đối chiếu khai báo nguồn theo từng truy vấn

| notebook | truy vấn | metadata khai | quét thân bài thấy | metadata bỏ sót |
|---|---|---|---|---|
| pahlbeitz | q1 | 29,32,38,39 | 29,32,38 | **không** |
| pahlbeitz | q2 | 29,32,38,39 | 29,38 | **không** |
| pahlbeitz | q3 | 32 | 29,32,38 | **29,38** |
| vdi2221-pp | q2 | — | 17 | **17** |

> Metadata bỏ sót **3/12** lượt nguồn (25%) ở cụm này.

## pahlbeitz — Luận điểm, framework, bằng chứng

**Nguồn:** [29], [32], [38], [39]  *(metadata: 29, 32, 38, 39 · quét thân bài: 29, 32, 38)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

*Lưu ý quan trọng:* Hai nội dung **"Cấu trúc hộp đen" (Black box)** và **"Catalogue thiết kế" (Design catalogs)** hoàn toàn **không có trong 4 nguồn tài liệu đang hoạt động** này (do chúng thuộc nhóm tài liệu đã bị loại trừ khỏi truy vấn). Để đảm bảo tính trung thực tuyệt đối với nguồn thông tin, bài viết dưới đây sẽ tập trung làm rõ các khía cạnh về cấu trúc chức năng và biểu đồ/ma trận hình thái học được trình bày trong các tài liệu hoạt động còn lại.

---

### (1) CÁC LUẬN ĐIỂM CHÍNH VÀ KẾT LUẬN (MAIN ARGUMENTS & CONCLUSIONS)

*   **Luận điểm 1: Biểu đồ hình thái học (Morphological Chart - MC) là một phương pháp sinh ý tưởng có hệ thống và phân tích**. Phương pháp này giúp mở rộng không gian tìm kiếm giải pháp cho một vấn đề thiết kế đã được xác định rõ ràng, bằng cách phân rã sản phẩm thành các chức năng con (subfunctions) và đề xuất các giải pháp con/thành phần tương ứng (sub-solutions/components/means).
*   **Luận điểm 2: Có thể đảo ngược vai trò của biểu đồ hình thái thành công cụ phân tích thiết kế hiện có**. Nghiên cứu của Hülagü & Timur (2024) kết luận rằng việc deconstruct (phân rã) các sản phẩm vật lý thực tế trên thị trường thành một ma trận hình thái giúp nhà thiết kế trực quan hóa toàn bộ "không gian thiết kế" (design space), hỗ trợ nghiên cứu thị trường, đánh giá đối tác/đối thủ cạnh tranh và làm dữ liệu đầu vào máy đọc được cho trí tuệ nhân tạo (AI) và phần mềm thiết kế tự động.
*   **Luận điểm 3: Sự bùng nổ tổ hợp (combinatorial explosion) là thách thức lớn nhất của ma trận hình thái**. Khi số lượng chức năng con hoặc giải pháp con tăng lên, số lượng sản phẩm tiềm năng kết hợp được sẽ bùng nổ theo cấp số nhân (gây lãng phí thời gian đánh giá). Vì vậy, cần áp dụng các chiến lược tinh lọc và đánh giá thông minh như xếp hạng ưu tiên hoặc gom nhóm các thông số.
*   **Luận điểm về "Hộp đen" (Black box) và "Catalogue thiết kế" (Design catalogs):** **không có trong nguồn** hoạt động.

---

### (2) FRAMEWORKS, MÔ HÌNH, QUY TRÌNH ĐƯỢC TRÌNH BÀY (FRAMEWORKS, MODELS, PROCESSES)

*(Lưu ý: Mọi khẳng định về tổng số bước cụ thể của mỗi quy trình đều **không có trong nguồn** dưới dạng câu khẳng định đếm số trực tiếp. Hệ thống giữ nguyên tên gọi gốc và liệt kê chính xác thứ tự các bước theo tài liệu).*

#### 1. Quy trình dựng Biểu đồ hình thái học truyền thống để sinh ý tưởng (Traditional Morphological Chart for Idea Generation)
Các bước thực hiện bao gồm:
*   **Step 1: DECOMPOSITION** – List the sub-functions of the product.
*   **Step 2: GENERATION** – Find out solutions to these sub-functions.
*   **Step 3: COMBINATION** – Explore different combinations of solutions and find a combination that suits the problem statement.

#### 2. Quy trình sử dụng Biểu đồ hình thái học làm phương pháp phân tích thiết kế hiện có (Morphological Chart as an Analysis Method for Existing Designs)
Các bước thực hiện bao gồm:
*   **Step 1: COLLECT EXISTING PRODUCTS**.
*   **Step 2: MAKE A LIST OF SUB-FUNCTIONS**.
*   **Step 3: PLACE EXISTING PRODUCTS**.

#### 3. Quy trình tổng hợp giải pháp khái niệm hoàn chỉnh từ biểu đồ hình thái (Process to synthesize subsolution concepts to develop complete product concept solutions)
Các bước thực hiện bao gồm:
*   **1.** Identify the main functions of the product.
*   **2.** Break down each main function into subfunctions.
*   **3.** Identify all possible subsolutions for each subfunction.
*   **4.** Create a morphological chart.
*   **5.** Generate new product concepts by combining subsolutions from different columns.
*   **6.** Evaluate the new product concepts.

#### 4. Quy trình đề xuất áp dụng Morphological Chart trong Delft Design Guide (Possible Procedure)
Các bước thực hiện bao gồm:
*   **1.** The problem to be solved must be formulated as accurately as possible.
*   **2.** Identify all the parameters which might occur in the solution (i.e. functions and subfunctions).
*   **3.** Construct a morphological chart (a matrix), with parameters as the columns.
*   **4.** Fill the rows with the components that belong to that particular parameter.
*   **5.** Use the evaluation strategies (analysis of rows and grouping of parameters) to limit the number of principal solutions.
*   **6.** Create principal solutions by combining at least one component from each parameter.
*   **7.** Carefully analyse and evaluate all solutions with regard to (a part of) the criteria (design requirements), and choose a limited number of principal solutions (at least 3).
*   **8.** The principal solutions selected can be developed in detail in the remaining part of the design process.

*(Lưu ý: Quy trình liên quan đến "Hộp đen" và "Catalogue thiết kế" **không có trong nguồn** hoạt động).*

---

### (3) VÍ DỤ CỤ THỂ, CASE STUDY, DỮ LIỆU ĐO, BẰNG CHỨNG (EXAMPLES, CASE STUDIES, EVIDENCE)

*   **Case study 1: Dự án Thiết kế lại Khay trà ("Tea Tray Revisited" hoặc "Tea Tray" project)**:
    *   *Mô tả:* Dự án kéo dài **1 ngày** (one-day project) dành cho sinh viên năm thứ nhất thuộc khoa Kiến trúc, Đại học Kỹ thuật Istanbul (Istanbul Technical University) trong học kỳ mùa xuân năm học **2016-2017**. Sinh viên từ **5 khoa** thiết kế khác nhau làm việc nhóm để giải quyết một bài toán thiết kế cấu trúc tĩnh.
    *   *Dữ liệu đo/đối tượng:* Nghiên cứu tiến hành thu thập và phân tích dữ liệu thiết kế từ **hơn 300 sinh viên** (cụ thể phân tích từ **345 bảng trình bày thiết kế** - design presentation boards).
    *   *Chi tiết phân rã hình thái học của khay trà:* Xác định các chức năng con tự phát của sinh viên như: Vật liệu (Corrugated cardboard, sheet metal, plastic, plywood, wood/metal combination); Số lớp bề mặt đỡ cốc (**1, 2, 3, 4 và alterable**); Cạnh khay (**3 giải pháp**: no walls, low/middle walls, high walls); Điểm đánh dấu bề mặt giữ cốc (holes, guides, grids, slots, pressable holes); Số lượng cốc mang được (2, 3, 4, 5, và nhiều hơn 5 cốc); Loại tay cầm (bar, ball, hole, T-shape, die-cut, strap); Cách thức cầm nắm khay (holding in hand, with finger, hanging on shoulder or on arm or by putting hand inside); Hình dạng khay (circle, square, rectangle, triangle, oval, octagonal, hexagonal, organic); Cách lắp ráp khay (folding, interlocking, detaching/tearing); Tính năng sinh thái; Cách vệ sinh khay; và Tính đa năng (holding sugar, plates, advertising space, using as a table).
*   **Case study 2: Hệ thống thu hoạch rau (Vegetable Collection System)**:
    *   *Mô tả:* Ví dụ về việc sử dụng biểu đồ hình thái để sinh ý tưởng. Nhóm nghiên cứu đã chọn tổ hợp tối ưu nhất cho từng chức năng con để tạo ra "Concept 1": Cái xẻng (scoop) để hái rau, băng chuyền (conveyor belt) để định vị, nước từ giếng (water from a well) để sàng lọc đất, bát (bowl) để đóng gói, hệ thống đường ray (track system) để vận chuyển, và năng lượng gió (wind-blown power).
*   **Case study 3: Máy pha cà phê kiểu Pháp (French Press Coffee Maker)**:
    *   *Cấu trúc cây chức năng (Function Tree) cho "Make Coffee":* Phân rã thành: Cân hạt (Weigh beans) -> Nghiền hạt (Grind beans) -> Trộn hạt và nước trong bình chứa (Combine beans and water in container) -> Tách bã cà phê (Separate beans from coffee) -> Rót phục vụ (Dispense coffee for serving).
    *   *Ví dụ tổ hợp ma trận của máy pha cà phê:* Các cột chức năng gồm Đun nước (Heat water), Nghiền hạt (Grind coffee beans), Pha chế (Brew coffee grounds), Giữ nóng (Keep coffee hot) và Rót (Dispense coffee) kết hợp với các dòng giải pháp vật lý cụ thể (ví dụ: Electric, Burr grinder, French press, Thermal pot, Automatic).
*   **Các số liệu bùng nổ tổ hợp:**
    *   Biểu đồ hình thái xe chạy bằng sức người (human-powered land vehicle) từ Delft Design Guide được tính toán có tới **57.238.272 tổ hợp giải pháp khác nhau**.
    *   Một ma trận lý thuyết kích thước **10 x 10** tạo ra tới **10.000.000.000 (10 tỷ) giải pháp**.

---

### (4) BÀI HỌC THỰC HÀNH (PRACTICAL LESSONS)

*   **Tập trung vào chức năng, không tập trung vào linh kiện cụ thể:** Khi xây dựng danh sách chức năng (trục dọc), hãy ghi rõ chức năng tổng quát thay vì viết tên linh kiện cụ thể (ví dụ: dùng "warning indicator" thay vì "bell"). Các chức năng con này phải mang tính loại trừ lẫn nhau (mutually exclusive).
*   **Khống chế kích thước ma trận phù hợp:** Tránh thiết lập ma trận quá rộng hoặc quá phức tạp. Lý tưởng nhất là **không quá 10 chức năng** chính để giữ số lượng tổ hợp trong tầm kiểm soát thực tế.
*   **Ưu tiên trực quan hóa tối đa:** Thiết kế ma trận hình thái bằng cách vẽ phác thảo các cơ chế hoạt động (sketches), sử dụng biểu tượng (symbols) hoặc hình tượng (pictograms) trực quan thay vì mô tả thuần túy bằng chữ viết để tăng khả năng liên tưởng sáng tạo.
*   **Áp dụng hai chiến lược rút gọn của Delft Design Guide:** 
    1.  *Phân tích hàng (Analysis of the rows):* Xếp hạng và chỉ giữ lại các giải pháp ưu tiên hạng 1 và hạng 2 dựa trên tiêu chí yêu cầu thiết kế ban đầu để thu hẹp số lựa chọn.
    2.  *Nhóm các thông số (Grouping of parameters):* Gom nhóm các thông số theo thứ tự ưu tiên giảm dần và đánh giá từng nhóm một.
*   **Kiểm tra tính logic hệ thống:** Khi kết hợp các giải pháp con độc lập thành một phương án tổng thể, nhà thiết kế bắt buộc phải kiểm tra dòng chảy logic của vật liệu, năng lượng và thông tin xuyên suốt hệ thống để đảm bảo tính khả thi kỹ thuật.

---

### (5) ĐIỂM BẤT NGỜ HOẶC PHẢN TRỰC GIÁC (SURPRISING OR COUNTER-INTUITIVE FINDINGS)

*   **Đảo ngược công cụ sáng tạo thành công cụ phân tích:** Phản trực giác lớn nhất là việc công cụ vốn dùng để sinh ý tưởng (concept generation) lại có thể đảo ngược quy trình một cách hiệu quả để làm **công cụ phân tích kỹ thuật đảo ngược và thống kê sản phẩm hiện có** trên thị trường.
*   **Sự phi độc lập thực tế của các bộ phận:** Trên lý thuyết, các hàng chức năng con trong biểu đồ hình thái hoàn toàn độc lập với nhau. Tuy nhiên, nghiên cứu thực nghiệm đối với sinh viên thiết kế chỉ ra điểm phản trực giác là các bộ phận thực tế luôn **phụ thuộc lẫn nhau (interdependent)**; người thiết kế thường có xu hướng giải quyết nhiều chức năng con cùng một lúc và bị ảnh hưởng bởi sự tương tác giữa các bộ phận.
*   **Chủ động chọn những tổ hợp "phi lý":** Trực giác con người luôn hướng về sự an toàn và những kết hợp quen thuộc. Tuy nhiên, bài học từ thực tế khuyên nhà thiết kế **hãy thách thức bản thân bằng những tổ hợp phản trực giác hoặc có vẻ phi thực tế** (counter-intuitive combinations) để tạo ra những đổi mới đột phá thực sự.
*   **Ảnh hưởng vô thức của chuyên ngành đào tạo sớm:** Dù sinh viên tham gia dự án thiết kế khay trà chưa hề được học kiến thức chuyên ngành chuyên sâu (chỉ học các môn đại cương chung của khoa trong năm đầu), nhưng giải pháp thiết kế của họ vẫn bị định hình sâu sắc bởi "tư duy chuyên ngành" (disciplinary mindset) một cách vô thức.

---

### TRÍCH DẪN NGUYÊN VĂN MINH CHỨNG CHO CÁC KHẲNG ĐỊNH SỐ, NĂM BAN HÀNH HOẶC PHÉP ĐẾM

Dưới đây là các câu tiếng Anh nguyên văn tương ứng từ các file nguồn để chứng minh cho mọi con số, mốc năm hoặc phép đếm được nêu trong bài viết:

*   **Năm ban hành 2024 (của bài báo phân tích khay trà)**:
    *   *Nguyên văn:* `"February 2024"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành 2023 (của sách Introduction to Mechanical Engineering Design)**:
    *   *Nguyên văn:* `"Introduction to Mechanical Engineering Design Copyright © 2023 by Jacqulyn A. Baughman is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License, except where otherwise noted."`
    *   *Tên file nguồn:* `Chapter 2: Functional Analysis and Concept Generation – Introduction to Mechanical Engineering Design`
*   **Năm ban hành 2024 (của sách Introduction to Mechanical Design and Manufacturing)**:
    *   *Nguyên văn:* `"Introduction to Mechanical Design and Manufacturing Copyright © 2024 by David Jensen is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License, except where otherwise noted."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm ban hành 2016 (của trang web Morphological charts từ Cambridge)**:
    *   *Nguyên văn:* `"© University of Cambridge 2016"`
    *   *Tên file nguồn:* `Morphological charts`
*   **Năm học 2016-2017 (2016-2017 academic year)**:
    *   *Nguyên văn:* `"...in the spring semester of the 2016- 2017 academic year."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "hơn 300 sinh viên/thiết kế"**:
    *   *Nguyên văn:* `"...which involves more than 300 students' designs. This design data is evaluated and visually summarised with a created morphological chart."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "345 bảng trình bày thiết kế" (345 design presentation boards)**:
    *   *Nguyên văn:* `"Solutions corresponding to these sub-functions have been noted down looking at 3 45 design presentation boards done by students."` *(Lưu ý: trong văn bản gốc có khoảng trắng lỗi gõ ký tự giữa số 3 và 45 thành "3 45").*
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "5 khoa" (five departments) trong ITU**:
    *   *Nguyên văn:* `"There are five departments in this faculty. These departments are Architecture, Industrial Design, Interior Architecture, Landscape Architecture, and Urban and Regional Planning."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "3 học kỳ đầu tiên" (first 3 semesters)**:
    *   *Nguyên văn:* `"Students from these five different departments enrol to the common set of courses for foundation studios in their first 3 semesters of undergraduate education."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "3-4 sinh viên" trong nhóm (3-4 students)**:
    *   *Nguyên văn:* `"Each group included 3-4 students and each group created a user scenario..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "3 giải pháp cho cạnh khay" (3 different solutions for the sides of the tray)**:
    *   *Nguyên văn:* `"In this study, students designed 3 different solutions for the sides of the tray."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "50 sinh viên cao học" (50 grad students) trong nghiên cứu của Börekçi**:
    *   *Nguyên văn:* `"This research was done with 50 grad students."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "57.238.272 tổ hợp giải pháp"**:
    *   *Nguyên văn:* `"...the one above for human-powered land vehicle design from Delft Design Guide (2013) has 57,238,272 different combinations..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Phép đếm "10 x 10 ma trận tạo ra 10.000.000.000 giải pháp"**:
    *   *Nguyên văn:* `"(theoretically, a 10 x 10 matrix yields 10,000,000,000 solutions)..."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Phép đếm "không quá 10 chức năng" (no more than 10)**:
    *   *Nguyên văn:* `"Ideally, there should be no more than 10."`
    *   *Tên file nguồn:* `Morphological charts`
*   **Phép đếm "ít nhất 3 giải pháp chính" (at least 3)**:
    *   *Nguyên văn:* `"...choose a limited number of principal solutions (at least 3)."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Thời gian dự án khay trà "1 ngày" (one-day)**:
    *   *Nguyên văn:* `"It was a one-day exercise and at the end of the day, students presented their designs with a design presentation board and a model of their tray out of cardboard."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Giới hạn tối thiểu "2 cốc" (2 cups as a minimum)**:
    *   *Nguyên văn:* `"Trays designed by students had a limit of carrying 2 cups as a minimum in the design brief."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng lớp của khay "1, 2, 3, 4 và alterable"**:
    *   *Nguyên văn:* `"Number of layers in this study are 1, 2, 3, 4 and alterable."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Ấn bản Delft Design Guide năm 2013**:
    *   *Nguyên văn:* `"Below (Fig. 1), is an example for a morphological chart for human- powered land vehicle design from Delft Design Guide (2013)."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Ấn bản Delft Design Approach năm 2018**:
    *   *Nguyên văn:* `"Daalhuizen, Jaap. 2018. Delft Design Approach, Delft University of Technology."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Phép đếm tổng số bước trong các quy trình**:
    *   *Trạng thái nguồn:* **không có trong nguồn** dưới dạng khẳng định phép đếm trực tiếp (các tài liệu chỉ liệt kê danh sách các bước như "Step 1, Step 2, Step 3..." hoặc "1., 2., 3..." chứ không viết trực tiếp câu nào khẳng định tổng số lượng bước cụ thể).

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## pahlbeitz — Methodology chi tiết

**Nguồn:** [29], [32], [38], [39]  *(metadata: 29, 32, 38, 39 · quét thân bài: 29, 38)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

### 1. HỘP ĐEN (BLACK BOX) & CATALOGUE THIẾT KẾ (DESIGN CATALOGS)
*   **Hộp đen (Black Box):** **không có trong nguồn**.
*   **Catalogue thiết kế (Design Catalogs):** **không có trong nguồn**.

*(Lưu ý: 4 tài liệu được lựa chọn không chứa bất kỳ thông tin lý thuyết, định nghĩa hay quy trình nào liên quan đến hai khái niệm này).*

---

### 2. CẤU TRÚC CHỨC NĂNG VÀ CÂY CHỨC NĂNG (FUNCTIONAL STRUCTURE / FUNCTION TREE)
*   **Chi tiết phương pháp:**
    Phương pháp phân tích chức năng (Functional Analysis) được sử dụng để phân rã một mục tiêu thiết kế lớn (chức năng chính) thành các nhiệm vụ con nhỏ hơn và dễ quản lý hơn (chức năng con). Việc này giúp đội ngũ thiết kế tập trung vào các yêu cầu chức năng thiết yếu của sản phẩm thay vì bị giới hạn sớm bởi các bộ phận vật lý cụ thể.
    *   *Ví dụ cấu trúc:* Cây chức năng của Bình pha cà phê kiểu Pháp (French Press) phân rã chức năng chính là "Pha cà phê" thành các chức năng con như: *Xay hạt (Grind beans)*, *Trộn hạt và nước trong bình (Combine beans and water in container)*, *Tách bã khỏi cà phê (Separate beans from coffee)*, và *Rót cà phê phục vụ (Dispense coffee for serving)*.
*   **Quy trình từng bước (Step-by-step process) để phân rã chức năng:**
    *   **Bước 1: Identify the main functions of the product.**
        *   *Nội dung:* Xác định các nhiệm vụ thiết yếu sản phẩm phải thực hiện.
        *   *Đầu vào:* Yêu cầu thiết kế / Mục tiêu sản phẩm.
        *   *Đầu ra:* Các chức năng chính (main functions).
    *   **Bước 2: Break down each main function into subfunctions.**
        *   *Nội dung:* Chia nhỏ các chức năng chính thành các nhiệm vụ nhỏ hơn để hoàn thành chức năng chính.
        *   *Đầu vào:* Các chức năng chính (main functions).
        *   *Đầu ra:* Các chức năng con (subfunctions / smaller tasks).
*   **Công thức, thang điểm, bảng biểu, ma trận:** **không có trong nguồn** đối với riêng phần Cấu trúc chức năng (ngoại trừ việc vẽ sơ đồ cây phân nhánh trực quan).

---

### 3. MA TRẬN HÌNH THÁI HỌC (MORPHOLOGICAL CHART / MATRIX)
Ma trận hình thái học là phương pháp tạo ý tưởng một cách phân tích và có hệ thống. Công cụ này chia nhỏ sản phẩm thành các chức năng con (được liệt kê theo chiều dọc) và tìm kiếm các giải pháp thành phần/cơ cấu vật lý khác nhau cho từng chức năng đó (được liệt kê theo chiều ngang).

Tùy theo mục đích sử dụng, các tài liệu cung cấp ba quy trình thực hiện cụ thể:

#### A. Quy trình sinh ý tưởng thiết kế (Tiwari et al., 2007):
*   **Step 1: DECOMPOSITION**
    *   *Mô tả:* Liệt kê các chức năng con của sản phẩm.
    *   *Đầu vào:* Phân tích chức năng (function analysis) cùng với bản tóm tắt thiết kế (design brief) hoặc tuyên bố vấn đề (problem statement).
    *   *Đầu ra:* Danh sách các chức năng con (sub-functions).
*   **Step 2: GENERATION**
    *   *Mô tả:* Tìm kiếm các giải pháp kỹ thuật cho từng chức năng con bằng các công cụ sáng tạo (như brainstorming).
    *   *Đầu vào:* Các chức năng con (sub-functions).
    *   *Đầu ra:* Các phương án giải pháp thành phần tương ứng (solutions to sub-functions).
*   **Step 3: COMBINATION**
    *   *Mô tả:* Khám phá và kết hợp các giải pháp thành phần lại với nhau để tạo thành một phương án thiết kế tổng thể phù hợp với yêu cầu.
    *   *Đầu vào:* Ma trận chứa các chức năng con và các giải pháp thành phần đã điền đầy đủ.
    *   *Đầu ra:* Phương án thiết kế khái niệm hoàn chỉnh (concept generation / concept variants).

#### B. Quy trình khả thi thiết lập ma trận (Roozenburg & Eekels):
*(Quy trình này không đặt tên gốc ngắn gọn cho từng bước mà đánh số thứ tự thực hiện từ 1 đến 8)*
1.  **Bước 1:** Formulate the problem as accurately as possible.
    *   *Đầu vào:* Yêu cầu thiết kế thô.
    *   *Đầu ra:* Phát biểu vấn đề được định nghĩa chính xác.
2.  **Bước 2:** Identify all the parameters which might occur in the solution (i.e. functions and subfunctions).
    *   *Đầu vào:* Vấn đề thiết kế đã xác định.
    *   *Đầu ra:* Các thông số kỹ thuật hoặc các chức năng con (parameters/subfunctions).
3.  **Bước 3:** Construct a morphological chart (a matrix), with parameters as the columns.
    *   *Đầu vào:* Các thông số/chức năng con.
    *   *Đầu ra:* Khung ma trận hình thái rỗng (với các cột là các thông số/chức năng).
4.  **Bước 4:** Fill the rows with the components that belong to that particular parameter.
    *   *Đầu vào:* Khung ma trận rỗng; các giải pháp từ sản phẩm tương tự hoặc nguyên lý tự nghĩ ra.
    *   *Đầu ra:* Ma trận hình thái đầy đủ chứa các thành phần giải pháp (components) ở các hàng.
5.  **Bước 5:** Use the evaluation strategies (analysis of rows and grouping of parameters) to limit the number of principal solutions.
    *   *Đầu vào:* Ma trận đầy đủ, các tiêu chí thiết kế.
    *   *Đầu ra:* Số lượng thành phần được rút gọn để giảm số tổ hợp khả thi.
6.  **Bước 6:** Create principal solutions by combining at least one component from each parameter.
    *   *Đầu vào:* Ma trận đã rút gọn.
    *   *Đầu ra:* Các giải pháp nguyên lý tổng thể (principal solutions).
7.  **Bước 7:** Carefully analyse and evaluate all solutions with regard to (a part of) the criteria (design requirements), and choose a limited number of principal solutions (at least 3).
    *   *Đầu vào:* Các giải pháp nguyên lý tổng thể, yêu cầu thiết kế.
    *   *Đầu ra:* Một số lượng giới hạn các giải pháp nguyên lý được chọn (tối thiểu là 3 giải pháp).
8.  **Bước 8:** The principal solutions selected can be developed in detail in the remaining part of the design process.
    *   *Đầu vào:* Các giải pháp nguyên lý tối ưu đã chọn.
    *   *Đầu ra:* Đầu vào cho các giai đoạn thiết kế chi tiết tiếp theo.

#### C. Quy trình lật ngược ma trận để phân tích sản phẩm hiện hữu (Renk Hülagü & Şebnem Timur, 2024):
*   **Step 1: COLLECT EXISTING PRODUCTS**
    *   *Đầu vào:* Loại sản phẩm cần phân tích trên thị trường.
    *   *Đầu ra:* Bộ sưu tập hình ảnh, bản vẽ hoặc mô hình sản phẩm hiện hữu.
*   **Step 2: MAKE A LIST OF SUB-FUNCTIONS**
    *   *Đầu vào:* Bộ sưu tập sản phẩm thu thập được.
    *   *Đầu ra:* Danh sách các chức năng con tối đa rút ra từ việc phân tích các sản phẩm đó.
*   **Step 3: PLACE EXISTING PRODUCTS**
    *   *Đầu vào:* Các sản phẩm thực tế và danh sách chức năng con.
    *   *Đầu ra:* Ma trận hình thái thể hiện trực quan các giải pháp mà mỗi sản phẩm thực tế đã áp dụng cho từng chức năng con.

---

### 4. CÔNG THỨC, THANG ĐIỂM, BẢNG BIỂU, MA TRẬN
*   **Công thức (Formulas):** **không có trong nguồn**.
*   **Thang điểm (Scales):** **không có trong nguồn** (Nguồn có nhắc đến một nghiên cứu của Jamea et al., 2023 sử dụng thang đo số nhị phân để chuẩn hóa các thuộc tính chất lượng nhằm lọc bớt các giải pháp thừa thãi, nhưng không cung cấp chi tiết nguyên văn thang điểm cụ thể này).
*   **Bảng biểu và ma trận (Tables/Matrices):**
    Tài liệu minh họa cấu trúc ma trận hình thái của một hệ thống pha cà phê điển hình như sau:

| Subfunction (Chức năng con) | Heat water | Grind coffee beans | Brew coffee grounds | Keep coffee hot | Dispense coffee |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Heat water** (Đun nước) | Electric | Gas | Induction | | |
| **Grind coffee beans** (Xay hạt) | Blade grinder | Burr grinder | | | |
| **Brew coffee grounds** (Hãm trà) | Drip brewing | French press | Espresso machine | | |
| **Keep coffee hot** (Giữ nóng) | Carafe | Thermal pot | Heating plate | | |
| **Dispense coffee** (Rót nước) | Manual | Automatic | | | |

*Việc kết hợp ngẫu nhiên các phần tử ở mỗi cột (ví dụ: Electric + Burr grinder + French press + Thermal pot + Automatic) sẽ tạo ra một concept giải pháp nguyên lý hoàn chỉnh.*

---

### 5. TRÍCH DẪN NGUYÊN VĂN CHO CÁC SỐ, NĂM BAN HÀNH HOẶC PHÉP ĐẾM

Dưới đây là các trích dẫn tiếng Anh nguyên văn tương ứng với mọi số lượng, năm ban hành hoặc phép đếm được nhắc đến trong các nguồn hoạt động:

*   **Năm công bố bài nghiên cứu của Renk Hülagü & Şebnem Timur (2024):**
    *   *Nguyên văn:* `"February 2024"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Dữ liệu thời gian nhận, duyệt và chấp nhận bài báo (2023):**
    *   *Nguyên văn:* `"Received : May. 18. 2023 ; Reviewed : Oct. 24. 2023 ; Accepted : Oct. 26. 2023"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng sinh viên và phương án thiết kế khay trà trong nghiên cứu (300 / 345):**
    *   *Nguyên văn:* `"...using the outputs of a foundation course in design, which involves more than 300 students' designs."` và `"Solutions corresponding to these sub-functions have been noted down looking at 345 design presentation boards done by students."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm xuất bản Delft Design Guide / Approach (2013 / 2018):**
    *   *Nguyên văn:* `"Morphological Chart example from Delft Design Guide (2013) …"` và `"Daalhuizen, Jaap. 2018. Delft Design Approach, Delft University of Technology."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs` và `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm phát triển phương pháp hình thái học của Zwicky (1967):**
    *   *Nguyên văn:* `"Morphological charts were developed by Zwicky (1967) who was an astrophysicist..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng sinh viên tham gia nghiên cứu của Börekçi (50):**
    *   *Nguyên văn:* `"This research was done with 50 grad students."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng tổ hợp khổng lồ từ biểu đồ phương tiện giao thông (57,238,272):**
    *   *Nguyên văn:* `"...the given morphological chart, the one above for human-powered land vehicle design has 57,238,272 different combinations..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Giới hạn số cốc tối thiểu trong thiết kế khay trà (2):**
    *   *Nguyên văn:* `"Trays designed by students had a limit of carrying 2 cups as a minimum in the design brief."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng khoa trong trường kiến trúc (5) và số học kỳ nền tảng chung (3):**
    *   *Nguyên văn:* `"There are five departments in this faculty."` và `"foundation studios in their first 3 semesters of undergraduate education."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm học diễn ra dự án khay trà (2016-2017):**
    *   *Nguyên văn:* `"...spring semester of the 2016- 2017 academic year."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng tổ hợp lý thuyết của ma trận 10 x 10 (10,000,000,000):**
    *   *Nguyên văn:* `"theoretically, a 10 x 10 matrix yields 10,000,000,000 solutions"`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Số lượng giải pháp nguyên lý tối thiểu cần chọn để phát triển tiếp (3):**
    *   *Nguyên văn:* `"Carefully analyse and evaluate all solutions with regard to (a part of) the criteria (design requirements), and choose a limited number of principal solutions (at least 3)."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Giới hạn số lượng chức năng tối ưu được khuyến nghị để tránh quá tải (10):**
    *   *Nguyên văn:* `"Ideally, there should be no more than 10."`
    *   *Tên file nguồn:* `Morphological charts`
*   **Năm xuất bản các sách tham khảo của Roozenburg & Eekels (1995 / 1998) và Cross (1989):**
    *   *Nguyên văn:* `"Roozenburg, N.F.M. and Eekels, J. (1995) Product Design: Fundamentals and Methods..."` và `"Roozenburg, N. and Eekels, J. (1998, 2nd ed.) Product Ontwerpen..."` và `"Cross, N. (1989) Engineering Design Methods..."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Số lượng sinh viên và phác thảo trong nghiên cứu của Bayırlı & Börekçi (45 / 3185):**
    *   *Nguyên văn:* `"This technique is used against the idea generation outcomes of 45 students obtained through the Morphological Chart method, comprising 3185 sketches."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs` (trong phần trích dẫn của ResearchGate)
*   **Các phép đếm bước thực hiện:**
    *   *Số lượng bước của Tiwari (3 bước):* **không có trong nguồn** dưới dạng một câu khẳng định đếm số lượng bước trực tiếp từ tác giả (Nguồn chỉ trực tiếp viết tiêu đề `Step 1: DECOMPOSITION`, `Step 2: GENERATION`, `Step 3: COMBINATION` mà không có câu tiếng Anh nào viết "The method consists of 3 steps").
    *   *Số lượng bước của Roozenburg & Eekels (8 bước):* **không có trong nguồn** dưới dạng khẳng định bằng số trực tiếp (Nguồn chỉ tự động liệt kê số thứ tự từ 1 đến 8).
    *   *Số lượng bước của phương pháp phân tích (3 bước):* **không có trong nguồn** dưới dạng khẳng định số trực tiếp (Nguồn chỉ viết `"Steps for using morphological chart as an analysis method are as follows:"` rồi liệt kê `Step 1`, `Step 2`, `Step 3`).

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## pahlbeitz — Phê bình, giới hạn, điều kiện thất bại

**Nguồn:** [29], [32], [38]  *(metadata: 32 · quét thân bài: 29, 32, 38)*

### 1. Hộp đen (Black Box) & Catalogue thiết kế (Design Catalogue)
*   **Hộp đen (Black Box):** Toàn bộ góc nhìn phê bình, rủi ro áp dụng, điều kiện biên, điều kiện thất bại, cũng như các thông số về con số, năm ban hành hoặc phép đếm liên quan đến công cụ "hộp đen" đều **không có trong nguồn** hiện tại được chọn.
*   **Catalogue thiết kế (Design Catalogue):** Mọi phân tích phê bình, giới hạn, rủi ro kỹ thuật, điều kiện thất bại hoặc bất kỳ số liệu định lượng, phép đếm và năm ban hành nào đối với "catalogue thiết kế" cũng đều **không có trong nguồn** hiện tại được chọn.

---

### 2. Cấu trúc chức năng (Functional Analysis / Structure)
Dù là một phương pháp cốt lõi để chuẩn bị cho việc sinh ý tưởng, chính các tài liệu trong nguồn đã chỉ ra các giới hạn và rủi ro áp dụng thực tế:
*   **Không đảm bảo nhận diện hết toàn bộ chức năng con:** Việc phân tích chức năng hệ thống hoàn toàn không có cơ chế tự động đảm bảo rằng mọi chức năng con liên quan đều sẽ được nhận diện đầy đủ.
    *   *Nguyên văn tiếng Anh:* `"However, function analysis does not guarantee that all the relevant (sub) functions are identified."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Rủi ro gặp khó khăn lớn ngay từ bước xác định ban đầu:** Trong thực tiễn thiết kế, kỹ sư thường gặp bế tắc và trở ngại nghiêm trọng ngay từ bước phân rã và xác lập các chức năng con.
    *   *Nguyên văn tiếng Anh:* `"In addition to this, it is known that designers have had difficulties identifying the sub-functions in the first place."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`

---

### 3. Ma trận hình thái / Biểu đồ hình thái (Morphological Matrix / Chart)
Phương pháp này nhận được nhiều phân tích phê bình chuyên sâu nhất về các rủi ro áp dụng, giới hạn kỹ thuật và các điều kiện thất bại:

*   **Rủi ro bùng nổ tổ hợp (Combinatorial Explosion) và gánh nặng thời gian:** Khi số lượng chức năng và giải pháp tăng lên, số lượng tổ hợp kết hợp tiềm năng sẽ bùng nổ đến mức vượt quá khả năng xử lý của con người, gây tốn thời gian cực lớn để đánh giá.
    *   **Phép đếm lý thuyết (Ma trận 10 x 10 sinh ra 10 tỷ giải pháp):**
        *   *Nguyên văn tiếng Anh:* `"However, the larger the morphological matrix, the larger the amount of possible solutions (theoretically, a 10 x 10 matrix yields 10,000,000,000 solutions), which takes much time to evaluate and choose from."`
        *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
    *   **Phép đếm thực tế (Biểu đồ phương tiện giao thông sinh ra hơn 57 triệu giải pháp):**
        *   *Nguyên văn tiếng Anh:* `"For example, the given morphological chart, the one above for human-powered land vehicles has 57,238,272 different combinations therefore numerically, this many different human-powered land vehicles can be derived from this morphological chart."`
        *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
    *   **Rủi ro quá tải thông tin buộc phải giới hạn chức năng:**
        *   *Nguyên văn tiếng Anh:* `"While this method eliminates the risk of missing novel solutions with the many combinations, the overwhelming number of possible combinations makes it impossible to scan all combinations, therefore, the number of sub-functions should be limited."`
        *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Khuyến nghị khống chế quy mô tối đa là 10:** Để kiểm soát rủi ro bùng nổ tổ hợp, tài liệu khuyến cáo số lượng chức năng tối đa đưa vào biểu đồ không nên vượt quá con số 10.
    *   *Nguyên văn tiếng Anh:* `"Ideally, there should be no more than 10."`
    *   *Tên file nguồn:* `Morphological charts`
*   **Sự tẻ nhạt, nhàm chán và nguy cơ tạo ra các giải pháp phi thực tế:** Quá trình lập ma trận dễ gây mệt mỏi và sinh ra vô số giải pháp không có giá trị thực tiễn.
    *   *Nguyên văn tiếng Anh:* `"Generating a morphological chart can be tedious and may result in a lot of solutions which may not be relevant or practical."`
    *   *Tên file nguồn:* `Morphological charts`
*   **Khó tích hợp yếu tố thẩm mỹ/phong cách:** Công cụ này hoạt động dựa trên các thông số kỹ thuật phân tách, khiến nó rất khó để lồng ghép các khía cạnh mềm mại về kiểu dáng, phong cách thẩm mỹ.
    *   *Nguyên văn tiếng Anh:* `"Attention should be paid to both the soft and hard aspects of the design mix, but it can be difficult to include 'stylistic' options."`
    *   *Tên file nguồn:* `Morphological charts`
*   **Cản trở tư duy thiết kế đa năng (Multifunctionality Restriction):** Biểu đồ hình thái ngầm định rằng mỗi chức năng con phải được đảm nhiệm bởi một bộ phận mang chức năng riêng biệt tương ứng (vì mỗi chức năng con chiếm một dòng riêng biệt). Điều này mâu thuẫn trực tiếp với tư duy thiết kế tích hợp đa năng trong thực tế (như các cấu trúc khớp đa năng tích hợp của cơ thể sống hay robot tiên tiến).
    *   *Nguyên văn tiếng Anh:* `"Traditional design methods generally do not encourage multifunctioning design. For example, morphological charts imply that all the individual subfunctions should have their own individual function carrier because separate boxes are allocated for each subfunction."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Rủi ro tâm lý lựa chọn phương án "An toàn" (Safe Combinations):** Nhà thiết kế có xu hướng tâm lý né tránh rủi ro, từ đó chỉ chọn các kết hợp giải pháp quen thuộc và an toàn thay vì thử thách bản thân với các kết hợp đột phá.
    *   *Nguyên văn tiếng Anh:* `"You may be tempted to choose the 'safe' combinations of components. Challenge yourself by making counter-intuitive combinations of components."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Điều kiện thất bại / Điểm không áp dụng được (Fuzzy Front End):** Phương pháp này đòi hỏi bài toán thiết kế phải được định nghĩa cực kỳ rõ ràng từ trước. Nó hoàn toàn không phù hợp để áp dụng trong giai đoạn ban đầu còn mơ hồ (fuzzy front end) của dự án. Đồng thời, nó cũng không phải là công cụ vạn năng cho mọi bài toán thiết kế mà chỉ hoạt động hiệu quả trong lĩnh vực thiết kế kỹ thuật (engineering design).
    *   *Nguyên văn tiếng Anh:* `"These charts are used mainly by design engineers, because, in order to be able to divide a problem to its sub-functions, the problem should be defined, even well-defined (Rittel and Webber, 1973) (Rittel, 1972) rather than ill-defined. Therefore, this method is not suitable to be used in the fuzzy front end of the design process."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
    *   *Nguyên văn tiếng Anh:* `"Not all design problems are suitable for using the morphological method. The morphological chart has been successful in particular for design problems in the field of engineering design."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`

---

### 4. Bằng chứng thực nghiệm (Empirical Evidence) chứng minh giả định lý thuyết bị lỗi
Về mặt lý thuyết, biểu đồ hình thái giả định rằng các chức năng con được phân rã hoàn toàn **độc lập** và các giải pháp tương ứng có thể được kết hợp tự do một cách tuyến tính. Tuy nhiên, các nghiên cứu thực nghiệm trong nguồn đã bác bỏ giả định này, chứng minh rằng **các thành phần của sản phẩm thực tế phụ thuộc lẫn nhau (interdependent)**:

*   **Bằng chứng thực nghiệm 1 (Nghiên cứu của Börekçi, 2018 trên 50 sinh viên cao học):** 
    Nghiên cứu thực nghiệm khi sinh viên thiết kế máy pha cà phê chứng minh rằng người thiết kế không xử lý các chức năng độc lập. Họ liên tục thiết kế giải pháp cho nhiều chức năng cùng một lúc và quay lại chỉnh sửa các chức năng đã đi qua, do các thành phần thực chất liên kết hữu cơ với nhau.
    *   *Nguyên văn tiếng Anh:* `"Börekçi (2018) investigated its effectiveness in terms of design divergence. ... This research was done with 50 grad students. They have found out that the participants tend to create solutions to more than one sub-function at once and continue exploring solutions for sub-functions they have already moved away from; this means that for the participant, the components of a product (in this case a coffee maker) were not independent, rather interdependent."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Bằng chứng thực nghiệm 2 (Nghiên cứu của Börekçi, 2018 trên 12 biểu đồ nhóm, 686 phác thảo, 21 chức năng):**
    Nghiên cứu thực tế chỉ ra hàng loạt yếu tố phi tuyến tính (chuẩn bị, động lực nhóm, ranh giới chức năng con, mối quan hệ giữa các bộ phận) tác động trực tiếp đến cách thức người dùng điền biểu đồ, thay vì chỉ là việc chọn lựa ngẫu nhiên các ô độc lập.
    *   *Nguyên văn tiếng Anh:* `"The paper presents the findings of a review carried out on twelve morphological charts completed in groups, containing a total of 686 sub-solution sketches made for a pool of 21 sub-functions."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`

---

### 5. Minh chứng nguyên văn cho tất cả các năm ban hành, nghiên cứu trích dẫn và các phép đếm khác trong nguồn:

*   **Năm ban hành Delft Design Guide (2013):**
    *   *Nguyên văn tiếng Anh:* `"According to the Delft Design Guide (2013), morphological charts are done by deconstructing..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành Delft Design Approach của Daalhuizen (2018):**
    *   *Nguyên văn tiếng Anh:* `"Daalhuizen, Jaap. 2018. Delft Design Approach, Delft University of Technology."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm xuất bản nghiên cứu của Hülagü và Timur (February 2024):**
    *   *Nguyên văn tiếng Anh:* `"* February 2024 * Archives of Design Research 37(1):27-40"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Thời gian nhận bài, duyệt và chấp nhận bài báo Hülagü & Timur (May 18, 2023; Oct 24, 2023; Oct 26, 2023):**
    *   *Nguyên văn tiếng Anh:* `"Received : May. 18. 2023 ; Reviewed : Oct. 24. 2023 ; Accepted : Oct. 26. 2023"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng sinh viên tham gia nghiên cứu case study khay trà (hơn 300 sinh viên):**
    *   *Nguyên văn tiếng Anh:* `"This use is demonstrated through a study, using the outputs of a foundation course in design, which involves more than 300 students' designs."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng bảng trình bày thiết kế được phân tích thực tế (345 bảng):**
    *   *Nguyên văn tiếng Anh:* `"Solutions corresponding to these sub-functions have been noted down looking at 345 design presentation boards done by students."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Thời gian áp dụng khung chương trình thử nghiệm (2 năm) tại Đại học Kỹ thuật Istanbul:**
    *   *Nguyên văn tiếng Anh:* `"Data was gathered from an experimental course syllabus that was only applicable for two years in Istanbul Technical University."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Thời gian năm học diễn ra bài tập khay trà (năm học 2016-2017):**
    *   *Nguyên văn tiếng Anh:* `"spring semester of the 2016- 2017 academic year."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng khoa đào tạo thiết kế chung lớp cơ sở (5 khoa):**
    *   *Nguyên văn tiếng Anh:* `"Students from all 5 departments, to teach them the basics of industrial design..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Số lượng sinh viên trong mỗi nhóm thảo luận kịch bản (3-4 sinh viên):**
    *   *Nguyên văn tiếng Anh:* `"Each group included 3-4 students and each group created a user scenario..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành học thuyết của Zwicky về hướng tiếp cận hình thái học (1967):**
    *   *Nguyên văn tiếng Anh:* `"Morphological charts were developed by Zwicky (1967)"`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành tài liệu "Design methods" của Jones (1992):**
    *   *Nguyên văn tiếng Anh:* `"structured brainstorming tools and idea generation methods to generate and visualise many solutions at once (Jones, 1992)."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành tài liệu "A Short Course in Industrial Design" của Tjalve (1979):**
    *   *Nguyên văn tiếng Anh:* `"Tjalve (1979) states that, sub-functions of a product are as important as..."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành nghiên cứu của Bayırlı và Börekçi (2022):**
    *   *Nguyên văn tiếng Anh:* `"create a comprehensive design space (Bayırlı and Börekçi, 2022)."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành lý thuyết thiết kế của Wim Zeiler về lĩnh vực xây dựng (2018):**
    *   *Nguyên văn tiếng Anh:* `"Another recent research with grad students as participants was done by Zeiler (2018) in the context of building design."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm xuất bản nghiên cứu của Hsiao và Ko về mức độ ưu tiên xe đạp (2013):**
    *   *Nguyên văn tiếng Anh:* `"These names also show that this method is matrix based... (Hsiao and Ko, 2013)."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm xuất bản nghiên cứu mạng thần kinh nhân tạo của Hsiao và Huang (2002):**
    *   *Nguyên văn tiếng Anh:* `"Hsiao and Huang (2002) has used morphological charts as input to neural networks."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm ban hành lý thuyết về Khủng hoảng lập kế hoạch của Rittel (1977):**
    *   *Nguyên văn tiếng Anh:* `"Rittel, H. W. (1977). On the Planning Crisis: Systems Analysis of the \"first and Second Generations\""`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm xuất bản học thuyết về các vấn đề hóc búa của Rittel và Webber (1973) & Rittel (1972):**
    *   *Nguyên văn tiếng Anh:* `"the problem should be defined, even well-defined (Rittel and Webber, 1973) (Rittel, 1972) rather than ill-defined."`
    *   *Tên file nguồn:* `(PDF) Using Morphological Chart for Analysing Existing Designs`
*   **Năm xuất bản tài liệu "Product Design: Fundamentals and Methods" của Roozenburg và Eekels (1995):**
    *   *Nguyên văn tiếng Anh:* `"Roozenburg, N.F.M. and Eekels, J. (1995) Product Design: Fundamentals and Methods, Utrecht: Lemma."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm xuất bản tài liệu ấn bản lần thứ 2 của Roozenburg và Eekels (1998):**
    *   *Nguyên văn tiếng Anh:* `"Roozenburg, N. and Eekels, J. (1998, 2nd ed.) Product Ontwerpen: Structuur en Methoden, Utrecht: Lemma."`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm xuất bản tài liệu "Engineering Design Methods" của Cross (1989):**
    *   *Nguyên văn tiếng Anh:* `"Cross, N. (1989) Engineering Design Methods, Chichester: Wiley"`
    *   *Tên file nguồn:* `Morphological Chart – Introduction to Mechanical Design and Manufacturing`
*   **Năm đăng ký bản quyền tài liệu của Đại học Cambridge (2016):**
    *   *Nguyên văn tiếng Anh:* `"© University of Cambridge 2016"`
    *   *Tên file nguồn:* `Morphological charts`
*   **Năm đăng ký bản quyền tài liệu của Jacqulyn A. Baughman (2023):**
    *   *Nguyên văn tiếng Anh:* `"Introduction to Mechanical Engineering Design Copyright © 2023 by Jacqulyn A. Baughman"`
    *   *Tên file nguồn:* `Chapter 2: Functional Analysis and Concept Generation – Introduction to Mechanical Engineering Design`

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## vdi2221-pp — Methodology chi tiết

**Nguồn:** [17]  *(metadata: rỗng · quét thân bài: 17)*

Phương pháp luận thiết kế cơ khí theo tiêu chuẩn VDI 2221 cung cấp một loạt các công cụ sinh giải pháp có tính hệ thống cao, giúp chuyển hóa các ý tưởng trừu tượng thành các thực thể vật lý khả thi. Dưới đây là chi tiết về từng công cụ cốt lõi bao gồm quy trình, thang điểm, bảng biểu, đầu vào và đầu ra, cùng việc đối chiếu nghiêm ngặt các con số dựa trên tài liệu gốc.

---

### I. Chi tiết các công cụ sinh giải pháp cốt lõi

#### 1. Hộp đen (Caja negra / Black box)
Công cụ này được sử dụng ở giai đoạn đầu của việc phân tích chức năng để hiểu rõ hành vi tổng thể của hệ thống mà không bị phân tâm bởi các chi tiết cơ khí phức tạp bên trong.
*   **Quy trình thực hiện:** 
    1. Xác định ranh giới của hệ thống (vẽ một khối chữ nhật đại diện cho "hộp đen").
    2. Xác định tất cả các dòng vật chất, năng lượng và tín hiệu đi vào hệ thống.
    3. Xác định các dòng tương ứng đi ra khỏi hệ thống (bao gồm cả dòng đầu ra hữu ích và dòng đầu ra hao phí/môi trường như nhiệt, tiếng ồn, rung động).
*   **Đầu vào:** Yêu cầu cốt lõi từ khách hàng, các nguồn tài nguyên sẵn có (nguồn điện, vật liệu thô).
*   **Đầu ra:** Sơ đồ khối Hộp đen thể hiện các dòng chuyển hóa tổng thể của Năng lượng, Vật liệu và Tín hiệu.
*   **Xác minh thông số và phép đếm:**
    *   **3 dòng đầu vào/đầu ra tổng quát (Năng lượng, Vật liệu, Tín hiệu):** Con số "3" này **không có trong nguồn** dưới dạng văn bản phát biểu trực tiếp, tuy nhiên nguồn mô tả cụ thể các thành phần này qua câu:
        > *"en los tres casos hay una energía que iniesta hay un material o probeta en este caso que ingresa a mi caja negra y hay una señal"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").
    *   **Dòng năng lượng hao phí đầu ra (tiếng ồn, nhiệt, rung động):** Nguồn xác nhận sự tồn tại của các dòng đầu ra này qua câu:
        > *"toda máquina me genera ruido me genera calor que genera vibración que son tipos de energía de hecho es la energía que se transforman en ruido en calor en vibración"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

#### 2. Cấu trúc chức năng (Estructura de funciones)
Khi đã có Hộp đen, nhà thiết kế tiến hành mở chiếc hộp này ra để phân rã chức năng tổng thể thành các chức năng nhỏ hơn.
*   **Quy trình thực hiện:**
    1. Phân rã vấn đề tổng thể thành các vấn đề cục bộ (problemas parciales).
    2. Tiếp tục chia nhỏ các vấn đề cục bộ thành các vấn đề cá nhân (problemas individuales) nếu cần thiết để dễ giải quyết hơn.
    3. Thiết lập mối liên kết tuần tự hoặc song song giữa các chức năng cục bộ này để dòng năng lượng, vật liệu và tín hiệu có thể lưu thông trôi chảy từ đầu vào đến đầu ra.
*   **Đầu vào:** Sơ đồ Hộp đen tổng thể.
*   **Đầu ra:** Sơ đồ Cấu trúc chức năng chi tiết gồm các khối chức năng cục bộ được liên kết chặt chẽ.
*   **Xác minh thông số và phép đếm:**
    *   **6 chức năng cục bộ (Ví dụ máy thu hoạch khoai tây):** Nguồn xác nhận số lượng chức năng cục bộ trong ví dụ này qua câu:
        > *"seis soluciones parciales en este caso"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

#### 3. Ma trận hình thái (Matriz morfológica)
Đây là công cụ sáng tạo mạnh mẽ nhất để tìm kiếm các phương án vật lý đáp ứng cho từng chức năng cục bộ và kết hợp chúng thành giải pháp tổng thể.
*   **Quy trình thực hiện:**
    1. Liệt kê các chức năng cục bộ (đã xác định ở bước trước) theo trục dọc (cột bên trái ngoài cùng).
    2. Ở mỗi hàng ngang tương ứng với một chức năng, liệt kê các giải pháp kỹ thuật hoặc cơ cấu vật lý có khả năng thực hiện chức năng đó.
    3. Tạo ra các "Khái niệm giải pháp" (Concepto de solución) bằng cách vẽ các đường dẫn (rutas) kết nối ngẫu nhiên một giải pháp từ mỗi chức năng cục bộ.
    4. Sử dụng kinh nghiệm và tính logic kỹ thuật để loại bỏ các kết hợp phi thực tế.
    5. Chọn lọc ra một số lượng nhỏ các phương án khả thi nhất để tiến hành vẽ phác thảo bằng tay (sketching) chưa qua tính toán.
*   **Đầu vào:** Sơ đồ Cấu trúc chức năng.
*   **Đầu ra:** Ma trận hình thái hoàn chỉnh và danh sách các bản vẽ phác thảo tay của các khái niệm giải pháp được chọn lọc.
*   **Xác minh thông số và phép đếm:**
    *   **Chọn lọc từ 5 đến 7 phương án tối đa để phác thảo tay:** Nguồn đưa ra số lượng đề xuất này qua câu:
        > *"Lo preferible es es tener unos 56 máximo no tampoco 2 eso sería muy poco pero que sea de cinco para cinco para siete"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221") *(Lưu ý: số "56" trong câu gốc là lỗi nhận diện giọng nói của hệ thống transcript từ cụm từ "5 o 6" (5 hoặc 6) trong tiếng Tây Ban Nha)*.
    *   **Ví dụ khối thép 200 kg và máy CNC trị giá ít nhất 50.000 USD:**
        *   Thông số khối lượng **200 kg**:
            > *"desplazar un bloque de acero de 200 kilos hacia una máquina cnc"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").
        *   Thông số giá trị máy CNC **50.000 USD**:
            > *"uno baja de 50 mil dólares"* hoặc *"no baja de 50 mil dólares"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

#### 4. Đánh giá định lượng Kỹ thuật - Kinh tế (Evaluación técnico-económica)
Công cụ này (thường áp dụng theo tiêu chuẩn đánh giá VDI 2225) giúp loại bỏ tính cảm tính của người kỹ sư bằng cách định lượng hóa mức độ hiệu quả của từng thiết kế sơ bộ (Proyecto preliminar).
*   **Quy trình thực hiện:**
    1. Liệt kê các tiêu chí đánh giá kỹ thuật (an toàn, độ tin cậy, vận hành) và kinh tế (số lượng chi tiết, giá vật liệu).
    2. Gán trọng số (ponderación) cho từng tiêu chí tùy thuộc vào tầm quan trọng của dự án (ví dụ: nhân hệ số 2 cho mức độ an toàn).
    3. Chấm điểm cho từng giải pháp sơ bộ theo thang điểm quy định.
    4. Tính toán giá trị đánh giá kỹ thuật và kinh tế tương đối bằng cách chia tổng điểm đạt được cho điểm của giải pháp lý tưởng.
    5. Vẽ các tọa độ này lên biểu đồ 2 trục (Trục hoành: Giá trị kỹ thuật; Trục tung: Giá trị kinh tế) để xác định vị trí giải pháp. Phương án nằm gần đường chéo nhất và có điểm số cao nhất là phương án tối ưu.
*   **Đầu vào:** Các phương án thiết kế sơ bộ (Proyecto preliminar) kèm theo các thông số tính toán cơ bản.
*   **Đầu ra:** Ma trận chấm điểm có trọng số và Biểu đồ đánh giá Kỹ thuật - Kinh tế chỉ ra phương án chiến thắng.
*   **Công thức và Thang điểm (Xác minh thông số và phép đếm):**
    *   **Thang điểm từ 0 đến 3 (và loại trừ điểm 4 vốn dành cho giải pháp lý tưởng):** 
        > *"le doy una serie de puntajes del 0 al 3 el 4 no porque el 4 se considera o se reserva solamente para las soluciones ideales y las soluciones ideales no existen solamente va del 0 al 3"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").
    *   **Ví dụ về điểm số 32, 28 và mẫu số điểm lý tưởng 52:**
        > *"por ejemplo 32 y lo olvido en 352 tengo 0.62 y solución 2 obtengo un puntaje de 28 y voy a tener un valor del 0.54 si lo divido con respecto a los 52 que es el de la resolución ideal"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221") *(Lưu ý: cụm "lo olvido en 352" là lỗi nhận diện giọng nói của hệ thống từ phép chia "lo divido entre 52")*.
    *   **Ngưỡng đánh giá chất lượng thiết kế (0.8, 0.7, 0.6):**
        > *"si yo tengo 0.8 para arriba es una muy buena solución de hecho es la máxima... si obtengo 0.7 o por ahí la solución es buena... si mi solución es de 0.6 a menos mi solución es deficiente"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

#### 5. Catalogue thiết kế (Catálogos)
Đây là công cụ hỗ trợ xuyên suốt quá trình thiết kế sơ bộ và hoàn chỉnh nhằm tiêu chuẩn hóa sản phẩm.
*   **Quy trình thực hiện:** Tra cứu các bảng thông số từ nhà sản xuất để chọn kích thước vấu, xi lanh, bu-lông, ổ bi có sẵn trên thị trường thay vì tự thiết kế các chi tiết phi tiêu chuẩn.
*   **Đầu vào:** Các yêu cầu về tải trọng, kích thước sơ bộ từ tính toán Sức bền vật liệu.
*   **Đầu ra:** Các mã linh kiện tiêu chuẩn chính xác được đưa vào Danh sách vật tư (Lista de piezas / BOM).
*   **Xác minh thông số và phép đếm:**
    *   Yêu cầu tra cứu catalogue được ghi nhận qua câu:
        > *"es recomendable siempre revisar las bases de los concursos revisar fichas revisar catálogos"* (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

### II. Quy trình từng bước tổng thể của VDI 2221 (Đầu vào - Đầu ra)

Dưới đây là bảng đặc tả quy trình tuần tự từng bước của phương pháp luận thiết kế VDI 2221 được bóc tách từ nguồn.

| Thứ tự bước | Tên gọi gốc (Tiếng Tây Ban Nha) | Mục tiêu & Hành động chính | Đầu vào (Inputs) | Đầu ra (Outputs) |
| :--- | :--- | :--- | :--- | :--- |
| **Bước 1** | **Comprensión de la solicitud** | Thấu hiểu yêu cầu khách hàng, loại bỏ cảm tính, nghiên cứu lịch sử công nghệ và lập tiến độ. | Yêu cầu thô sơ, mơ hồ của khách hàng. | **Lista de exigencias** (Danh sách yêu cầu kỹ thuật) và **Cronograma** (Tiến độ dự án). |
| **Bước 2** | **Estructura de funciones** | Thiết lập mô hình Hộp đen và phân rã hệ thống thành các khối chức năng nhỏ hơn. | Lista de exigencias, định hướng năng lượng/vật chất đầu vào. | **Sơ đồ cấu trúc chức năng** (chuỗi các vấn đề cục bộ - problemas parciales). |
| **Bước 3** | **Concepto de solución** | Sử dụng Ma trận hình thái để tìm cơ cấu vật lý cho từng chức năng cục bộ và tổ hợp giải pháp. | Sơ đồ cấu trúc chức năng. | **Concepto de solución** (Các bản vẽ phác thảo tay - vẽ nháp chưa tính toán). |
| **Bước 4** | **Proyecto preliminar** | Thực hiện tính toán vật lý cơ bản, lựa chọn vật liệu sơ bộ, chấm điểm kỹ thuật - kinh tế. | Bản phác thảo tay của giải pháp được chọn. | **Bản vẽ bố trí sơ bộ** kèm các tính toán kiểm nghiệm kỹ thuật. |
| **Bước 5** | **Proyecto definitivo** | Chốt kích thước, dung sai, vật liệu chi tiết. Tối ưu hóa an toàn, môi trường và công thái học. | Dự án sơ bộ đã được phê duyệt. | **Plano de ensamble** (Bản vẽ lắp ráp tổng thể) và **Lista de piezas / BOM** (Danh sách vật tư). |
| **Bước 6** | **Elaboración de detalles** | Hoàn thiện tất cả tài liệu kỹ thuật riêng lẻ để xưởng có thể gia công độc lập không bị sai sót. | Bản vẽ lắp ráp tổng thể và danh sách vật tư chi tiết. | **Planos de detalle** (Bản vẽ chi tiết từng linh kiện có dung sai, xử lý nhiệt) và **Informe técnico** (Báo cáo kỹ thuật hoàn chỉnh). |

---

### III. Khẳng định về các thông số "Không có trong nguồn"
Để đảm bảo tính trung thực tuyệt đối theo đúng cam kết nguồn gốc:
1.  **Năm ban hành của tiêu chuẩn VDI 2221 hoặc VDI 2225:** **Không có trong nguồn** (Video chỉ gọi tên tiêu chuẩn mà không hề đề cập đến năm ban hành hay phiên bản cập nhật của chúng).
2.  **Số lượng bước chính xác của phương pháp luận VDI 2221:** Phát biểu trực tiếp dạng *"Quy trình VDI 2221 gồm có 6 bước"* bằng một con số cụ thể **không có trong nguồn** dưới dạng văn bản trực tiếp. Giảng viên chỉ giới thiệu tuần tự từ bước thứ nhất đến bước thiết kế chi tiết cuối cùng qua sơ đồ trình chiếu mà không trực tiếp đếm tổng số bước trong lời thoại transcript. 
3.  **Năm bối cảnh của cuộc thi máy bay giấy (2014) và bối cảnh video (2021):** Nguồn có đề cập trực tiếp đến các mốc năm này thông qua các câu thoại:
    *   Năm diễn ra cuộc thi máy bay giấy: `"fui a un en el año 2014 si mal no recuerdo"` (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").
    *   Bối cảnh năm phát hành video: `"recordemos que estamos en el 2021"` (Nguồn: "Introducción a la metodología del diseño mecánico VDI 2221").

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*
