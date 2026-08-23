# Khai thác NLM — ICDM như một bản mở rộng của Pahl-Beitz — EQFD, TVDT, CFMA, CDTC, RTA, Robustool

Ngày: 2026-08-20 | Cụm: `c6-icdm-ban-mo-rong` | Truy vấn: 4

## Nguồn được dùng trong cụm này

- **[44]** (PDF) CFMA: An Effective FMEA Tool for Analysis and Selection of the Concept for a New Product  — `icdm`
- **[45]** (PDF) ICDM - an Integrated Methodology for the Conceptual Design of New Systems  — `icdm`
- **[46]** 1-s2.0-S2212827115002073-main.pdf  — `icdm`
- **[47]** 5.5.4 Design of the concept of a new system, using ICDM - Integrated, Customer Driven, Conceptua  — `icdm`
- **[48]** Development_of_an_innovative_conceptual.pdf  — `icdm`
- **[49]** ESDA2008-59394.pdf  — `icdm`
- **[50]** INCOSE2008CDTCpaper.pdf  — `icdm`
- **[51]** INTEGRATED_LOGISTICS_SUPPORT_IN_HIGH-TECHNOLOGY_CO.pdf  — `icdm`
- **[52]** Integrating_QFD_and_TRIZ_for_innovative_design.pdf  — `icdm`
- **[53]** https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BFE1D692F764BCE7D0CEF53  — `icdm`
- **[54]** https://www.designsociety.org/download-publication/19737/more_on_synthesis_of_concepts_as_an_opt  — `icdm`
- **[55]** https://www.designsociety.org/download-publication/23913/ANALYSIS+OF+RISK+AND+TIME+TO+MARKET+DUR  — `icdm`
- **[56]** https://www.designsociety.org/download-publication/25697/Design+to+Withstand+Improper+Use+and+De  — `icdm`
- **[57]** https://www.designsociety.org/download-publication/25781/selection_of_optimal_combinations_of_so  — `icdm`
- **[58]** https://www.designsociety.org/download-publication/29631/application_of_icdm_for_the_conceptual_  — `icdm`

## Đối chiếu khai báo nguồn theo từng truy vấn

| notebook | truy vấn | metadata khai | quét thân bài thấy | metadata bỏ sót |
|---|---|---|---|---|
| icdm | q1 | 46 | 45,46,47,48,49,50,54 | **45,47,48,49,50,54** |
| icdm | q2 | 44,46 | 46 | **không** |
| icdm | q3 | — | 44,46,47,50,53,55,56,57 | **44,46,47,50,53,55,56,57** |
| icdm | q4 | 51,52,58 | 51,52,58 | **không** |

> Metadata bỏ sót **14/20** lượt nguồn (70%) ở cụm này.

## icdm — Luận điểm, framework, bằng chứng

**Nguồn:** [45], [46], [47], [48], [49], [50], [54]  *(metadata: 46 · quét thân bài: 45, 46, 47, 48, 49, 50, 54)*

Hệ thống phương pháp luận **ICDM (Integrated, Customer Driven, Conceptual Design Method)** được thiết kế như một bản mở rộng toàn diện và hướng khách hàng sâu sắc của **Phương pháp thiết kế hệ thống Pahl & Beitz (SAPB)** cổ điển. Bằng cách nhúng đồng bộ các công cụ **EQFD, TVDT, CFMA, CDTC, RTA và Robustool**, ICDM giải quyết triệt để sự mờ nhạt thông tin và quản trị rủi ro tối đa ngay tại pha thiết kế ý tưởng sơ khởi.

Dưới đây là mổ xẻ phê bình khoa học và chi tiết phương pháp luận này từ các tài liệu nghiên cứu gốc:

---

### **I. Các luận điểm chính và kết luận (Main Arguments & Conclusions)**

*   **Sự cần thiết phải mở rộng phương pháp Pahl & Beitz cổ điển**:
    Phương pháp Pahl & Beitz giới thiệu lần đầu tiên vào năm **1977** tuy là một cột mốc vĩ đại của nền cơ khí chế tạo toàn cầu, nhưng khâu làm rõ nhiệm vụ và đánh giá phương án vẫn còn mang nặng tính định tính và trực giác chủ quan. ICDM được Technion (Israel) phát triển trong giai đoạn từ năm **1996** đến năm **2001** nhằm chuyển đổi toàn bộ quy trình thiết kế khái niệm sang một tiến trình định lượng, hướng khách hàng chặt chẽ dựa trên tinh thần kỹ thuật hệ thống (Systems Engineering).
    *   *Mốc năm **1977** — Trích nguyên văn:* `"The systematic method for conceptual design of a new product has been introduced as a comprehensive design tool by Pahl and Beitz in 1977 and improved since."` (File nguồn: `1-s2.0-S2212827115002073-main.pdf`)
    *   *Mốc năm **1996** và **2001** — Trích nguyên văn:* `"ICDM is the Integrated, Customer Driven, Conceptual Design Method, that has been developed in the Technion, Israel during 1996 and 2001."` (File nguồn: `ESDA2008-59394.pdf`)

*   **Pha thiết kế sớm quyết định sự thành bại thương mại**:
    Các tác giả nhấn mạnh: hơn **75%** hoặc khoảng **80%** chi phí vòng đời (LCC) cùng phần lớn các lỗi hỏng hóc sau này của hệ thống đều bị khóa chặt ngay từ pha thiết kế ý tưởng khái niệm. Do đó, việc ứng dụng các bộ công cụ quản trị rủi ro sớm tại thời điểm này là nhiệm vụ sinh tử.
    *   *Mốc tỷ lệ **75%** — Trích nguyên văn:* `"Most of the product's performance is determined and more than 75% of its life cycle cost is committed during the conceptual design phase."` (File nguồn: `(PDF) ICDM - an Integrated Methodology for the Conceptual Design of New Systems`)
    *   *Mốc tỷ lệ **75%** (biến thể) — Trích nguyên văn:* `"About 75 % of the life cycle cost is committed in this stage (Blanchard, 1978)."` (File nguồn: `INCOSE2008CDTCpaper.pdf`)
    *   *Mốc tỷ lệ **80%** — Trích nguyên văn:* `"It is well known that the conceptual design is the most influential step in the design process of a product or a system and that about 80 % of the life cycle cost is committed in this stage (Blanchard ,1978)."` (File nguồn: `5.5.4 Design of the concept of a new system, using ICDM - Integrated, Customer Driven, Conceptual Design Method.pdf`)

*   **Kiểm soát rủi ro đa ngành thời gian thực (Real-time Risk Control)**:
    Thay vì các chỉ số DQM truyền thống chỉ đo lường một cách thụ động khi sản phẩm đã được chế tạo xong (như số thay đổi kỹ thuật muộn hay tỷ lệ phế phẩm), hệ thống ICDM cho phép đo lường và dự báo mức độ hài lòng về chất lượng, rủi ro hỏng hóc, rủi ro chi phí và độ bền bỉ thiết kế trong thời gian thực bằng các hàm phi tuyến tính và thuật toán bán định lượng chặt chẽ.
    *   *Trích nguyên văn về tính hậu kỳ của phép đo cũ:* `"The values of the metrics used for DQM, like percentage of rejects in the production line, number of late engineering changes or time to market, are known generally only after the design process is completed."` (File nguồn: `1-s2.0-S2212827115002073-main.pdf`)

---

### **II. Frameworks, Mô hình và Quy trình (Frameworks, Models & Processes)**

#### **1. Quy trình 10 bước của hệ thống ICDM (The 10 Steps of ICDM)**
Phương pháp luận ICDM tích hợp đồng bộ toàn bộ tiến trình thiết kế khái niệm thông qua đúng **10** bước có trình tự logic nghiêm ngặt:
*   *Trích nguyên văn phép đếm số **10** bước — Trích nguyên văn:* `"The procedure of ICDM consists of 10 steps..."` (File nguồn: `https://www.designsociety.org/download-publication/19737/more_on_synthesis_of_concepts_as_an_optimal_combination_of_solution_principles`)
*   *Trích nguyên văn phép đếm số **10** bước (biến thể) — Trích nguyên văn:* `"Finally, an integration of these techniques, supplemented by a few additional analysis tools, was formed into a 10 step comprehensive prescriptive method – the ICDM - Integrated, Customer Driven, Conceptual Design Method (Hari and Weiss, 1996)."` (File nguồn: `5.5.4 Design of the concept of a new system, using ICDM - Integrated, Customer Driven, Conceptual Design Method.pdf`)

Chi tiết tên gọi gốc tiếng Anh của đúng **10** bước tiến trình (được trích dẫn nguyên văn từ bảng Table 1 của tệp nguồn `19737`):
*   Step **1**: `Identification of the customers and of their needs.`
*   Step **2**: `Translation of the Voice Of the Customer (VOC), into the product definition and specification, using an original enhanced QFD.` (Sử dụng công cụ EQFD).
*   Step **3**: `Abstraction and definition of the basic problems – the sub-functions.` (Ngược lại, phương pháp SAPB cổ điển phân rã thành **7** bước thiết kế khái niệm: `"The process consists of seven steps (Pahl, et al., 2007)."` - File nguồn: `Development_of_an_innovative_conceptual.pdf`).
*   Step **4**: `Creation of many engineering solution principles for each sub-function, shown graphically on a morphological diagram,`
*   Step **5**: `Definition of criteria for the concepts evaluation and selection.`
*   Step **6**: `Sorting the solution principles and Synthesis to create a small cluster of potentially best and feasible concepts` (Sử dụng tối ưu hóa Direct Synthesis Optimization - DSO).
*   Step **7**: `The initial evaluation and selection of a few main concepts for further design steps.` (Sử dụng ma trận Pugh phối hợp với dải tiêu chí lọc thô nhóm A).
*   Step **8**: `Design, architecture and analysis of the main concepts by original techniques – CFMA, CDTC and RTA` (Sử dụng CFMA, CDTC, RTA và Robustool để bóc tách thiết kế).
*   Step **9**: `Selection of the winning concept – a full second round of selection` (Sử dụng ma trận Pugh phối hợp với dải tiêu chí lọc tinh nhóm B).
*   Step **10**: `Project Launch – initiation of the embodiment design, based on the winning concept.` (Chốt dự án tại mốc SDR).

#### **2. EQFD (Enriched QFD) & TVDT (Target Value Decision Table)**
EQFD giải quyết **2** điểm nghẽn nghiêm trọng đã tích lũy từ kinh nghiệm thực tiễn qua **15** năm ứng dụng và **20** năm sử dụng QFD truyền thống trong việc làm rõ nhiệm vụ thiết kế:
*   *Phép đếm số **15** năm, **20** năm, và **2** vấn đề — Trích nguyên văn:* `"Quality Function Deployment (QFD) has been used for task clarification for at least 20 years."` và `"Paragraph 2 summarizes two lessons learned from 15 years of experience in using QFD for task clarification, and the remedies provided by ICDM for the two following problems: QFD is a time consuming process and difficult to apply for complex systems. QFD does not support making target value decision tradeoffs for complex systems."` (File nguồn: `1-s2.0-S2212827115002073-main.pdf`)

Để bẻ gãy điểm nghẽn này, EQFD đưa ra các quy tắc và bảng biểu cụ thể:
*   **Modified House of Quality (Ma trận HOQ cải tiến)**: Giới hạn kích thước ma trận tối ưu trong dải từ **15 đến 20** hàng nhu cầu khách hàng, và **20 đến 25** cột đặc tính sản phẩm (Product Characteristics - PCs) để tránh quá tải thời gian.
    *   *Trích nguyên văn các số **15-20** và **20-25**:* `"15-20 system level needs (rows), and if necessary also trimmed customer needs hierarchy tree. 20 – 25 product characteristics (columns), these being the most important, difficult, or controversial decisions."` (File nguồn: `1-s2.0-S2212827115002073-main.pdf`)
*   **Bảng quyết định TVDT (Target Value Decision Table)**: Nhúng bảng TVDT giúp đội ngũ đạt được sự đồng thuận (consensus) giữa tiếng nói khách hàng (VOC) và kỹ sư hệ thống (VOE) thông qua **3** điểm mấu chốt:
    *   *Trích nguyên văn phép đếm **3** điểm — Trích nguyên văn:* `"The TVDT and the process of filling in its data have been considered by most of the team members as 1. the most important part of the process 2. building the consensus 3. the most important modification to the traditional QFD process."` (File nguồn: `1-s2.0-S2212827115002073-main.pdf`)

#### **3. CFMA (Conceptual Failure Mode Analysis)**
Khắc phục FMEA cổ điển vốn chỉ chạy được từ dưới lên (bottom-up) khi đã có bản vẽ chi tiết linh kiện. CFMA định nghĩa rủi ro sớm dựa trên chức năng (functional-based). PDT điền bảng ma trận CFMA thông qua việc trả lời tuần tự **7** câu hỏi logic (tương đương với các cột hiển thị trong ma trận rủi ro):
*   *Phép đếm thứ tự đúng **7** câu hỏi — Trích nguyên văn:*
    *   `"1. How can the system fail in performing a function (known or potential) failure modes? (Failure mode column)?"`
    *   `"2. What could be the causes and the effects of each failure mode (Failure Cause & Effect columns)?"`
    *   `"3. How will the failure effect the customer? (Severity Rating – S column)."`
    *   `"4. What is the chance of occurrence of a failure mode? (Frequency Rating - F column)?"`
    *   `"5. How can we detect if the potential failure mode does exist in our design, as early as possible in the design process (Detection Method & Detection Rating - D columns)?"`
    *   `"6. If the failure mode does exist, how can we prevent it from reaching the customer (Action

## icdm — Methodology chi tiết

**Nguồn:** [44], [46]  *(metadata: 44, 46 · quét thân bài: 46)*

Phương pháp luận **ICDM (Integrated, Customer Driven, Conceptual Design Method)** là một bản mở rộng và nâng cấp toàn diện từ phương pháp thiết kế hệ thống kinh điển của **Pahl & Beitz (SAPB)**. Phương pháp SAPB được giới thiệu lần đầu tiên vào năm **1977** (bản tiếng Đức) và dịch sang tiếng Anh năm **1984**, tuy rất hoàn thiện về mặt quy trình cơ học nhưng lại bộc lộ hạn chế trong việc lượng hóa rủi ro, kiểm soát chi phí sớm và tích hợp tiếng nói của khách hàng. 

Để khắc phục các nhược điểm này, Amihud Hari và Menachem P. Weiss đã phát triển và tối ưu hóa **ICDM** trong giai đoạn từ năm **1996 đến 2001** tại Viện Công nghệ Technion (Israel). ICDM tích hợp một bộ công cụ hỗ trợ ra quyết định bán định lượng vô cùng nghiêm ngặt bao gồm: **EQFD, TVDT, CFMA, CDTC, RTA và Robustool**.

Dưới đây là chi tiết phương pháp luận, công thức, thang điểm, quy trình từng bước, đầu vào/đầu ra và hệ thống bảng biểu ma trận của ICDM cùng các công cụ mở rộng:

---

### **PHẦN I: QUY TRÌNH 10 BƯỚC CỦA PHƯƠNG PHÁP LUẬN ICDM (The 10 Steps of ICDM)**

Quy trình tổng thể của ICDM được cấu trúc thành đúng **10 bước** chặt chẽ như sau:

#### **Step 1: Identification of the customers and of their needs** (Nhận diện khách hàng và nhu cầu của họ)
*   **Đầu vào (Inputs):** Ý tưởng sơ khởi, yêu cầu thị trường thô, định hướng chiến lược phát triển của doanh nghiệp.
*   **Đầu ra (Outputs):** Danh sách Tiếng nói Khách hàng định tính (Qualitative Voice of the Customer - VOC) được phân loại và sắp xếp.

#### **Step 2: Translation of the Voice of the Customer into the product definition and specification** (Dịch chuyển tiếng nói khách hàng sang định nghĩa và đặc tả sản phẩm)
*   **Đầu vào (Inputs):** Qualitative VOC từ Step 1.
*   **Đầu ra (Outputs):** Ma trận House of Quality (HOQ), danh sách các Đặc tính Sản phẩm (Product Characteristics - PCs) được gán trọng số tầm quan trọng (Weight), các Giá trị Mục tiêu (Target Values - TVs) kỹ thuật, bảng quyết định **TVDT**, và các hàm hài lòng **CSR** ban đầu.

#### **Step 3: Abstraction and definition of the basic problems – the sub-functions** (Trừu tượng hóa và định nghĩa các vấn đề cơ bản - các chức năng phân hệ)
*   **Đầu vào (Inputs):** Bản đặc tả thông số kỹ thuật (Specs) và mục tiêu hiệu năng từ Step 2.
*   **Đầu ra (Outputs):** Sơ đồ phân rã chức năng (như FAST chart hoặc cấu trúc khối), danh sách các vấn đề kỹ thuật cơ bản (basic problems) cần giải quyết.

#### **Step 4: Creation of many engineering solution principles for each sub-function** (Sáng tạo nhiều nguyên lý giải pháp kỹ thuật cho từng chức năng phân hệ)
*   **Đầu vào (Inputs):** Danh sách các chức năng phân hệ và vấn đề cơ bản từ Step 3.
*   **Đầu ra (Outputs):** Ma trận hình thái (Morphological Table / Morphological Diagram) được lấp đầy bởi các nguyên lý giải pháp (solution principles) cho từng dòng chức năng.

#### **Step 5: Definition of criteria for the concepts evaluation and selection** (Xác định các tiêu chí đánh giá và lựa chọn ý tưởng)
*   **Đầu vào (Inputs):** Trọng số tầm quan trọng của các đặc tính sản phẩm (PCs) được trích xuất từ QFD ở Step 2.
*   **Đầu ra (Outputs):** Danh mục tiêu chí đánh giá được phân loại thành hai bộ lọc: Nhóm lọc thô **Group A** (bắt buộc bao phủ **tối thiểu 70%** mức độ hài lòng khách hàng) và Nhóm lọc tinh **Group B** (bắt buộc bao phủ **tối thiểu 95%** mức độ hài lòng).

#### **Step 6: Sorting the solution principles and Synthesis to create a small cluster of potentially best and feasible concepts** (Phân loại các nguyên lý giải pháp và tổng hợp để tạo ra một cụm nhỏ các ý tưởng khả thi nhất)
*   **Đầu vào (Inputs):** Ma trận hình thái từ Step 4.
*   **Đầu ra (Outputs):** Danh sách lượng lớn các ý tưởng sơ khởi khả thi (Primary Concepts) — được tạo ra bằng cách kết hợp một nguyên lý giải pháp từ mỗi dòng của ma trận hình thái.

#### **Step 7: The initial evaluation and selection of a few main concepts for further design steps** (Đánh giá sơ bộ và lựa chọn một vài ý tưởng chính cho các bước thiết kế tiếp theo)
*   **Đầu vào (Inputs):** Danh sách ý tưởng sơ khởi từ Step 6, bộ tiêu chí lọc thô **Group A** từ Step 5.
*   **Đầu ra (Outputs):** Rút gọn xuống chỉ còn một cụm nhỏ các ý tưởng chính (Main Concepts) bằng cách chạy ma trận so sánh Pugh.

#### **Step 8: Design, architecture and analysis of the main concepts** (Thiết kế, xây dựng kiến trúc và phân tích các ý tưởng chính)
*   **Đầu vào (Inputs):** Nhóm các ý tưởng chính từ Step 7, bộ tiêu chí đánh giá chi tiết **Group B** từ Step 5.
*   **Đầu ra (Outputs):** Bản vẽ CAD phác thảo kiến trúc, sơ đồ giao diện hệ thống, và các báo cáo định lượng rủi ro kỹ thuật (**CFMA**), dự toán chi phí sản xuất (**CDTC**), dự báo tiến độ lặp (**RTA**), và điểm đánh giá độ bền bỉ (**Robustool**).

#### **Step 9: Selection of the winning concept** (Lựa chọn phương án ý tưởng chiến thắng cuối cùng)
*   **Đầu vào (Inputs):** Các báo cáo phân tích định lượng chi tiết cho từng ý tưởng từ Step 8.
*   **Đầu ra (Outputs):** Ý tưởng chiến thắng cuối cùng (Winner Concept) được lựa chọn dựa trên chỉ số đo lường chất lượng thiết kế (DQM Score) và hàm hài lòng khách hàng tích hợp tổng hợp (CSR).

#### **Step 10: SDR and Project Launch** (Phê duyệt thiết kế hệ thống và khởi động dự án)
*   **Đầu vào (Inputs):** Phương án ý tưởng chiến thắng cuối cùng từ Step 9.
*   **Đầu ra (Outputs):** Bài trình bày phê duyệt SDR (System Design Review), tài liệu specs kỹ thuật chính thức được đóng băng để bàn giao chuyển sang pha thiết kế chi tiết vật lý (Embodiment Design).

---

### **PHẦN II: PHƯƠNG PHÁP LUẬN CHI TIẾT CỦA CÁC CÔNG CỤ MỞ RỘNG TRONG ICDM**

#### **1. EQFD (Enriched QFD) và TVDT (Target Values Decision Table)**

*   **Phương pháp luận (Methodology):** 
    EQFD cải tiến House of Quality (HOQ) truyền thống bằng cách tinh giản các thủ tục tốn thời gian (như việc chỉ ghi nhận tên đối thủ cạnh tranh tốt nhất thay vì chấm điểm toàn bộ đối thủ; hay loại bỏ việc phân tích tương quan phức tạp ở "roof" của HOQ trừ khi nó ảnh hưởng trực tiếp tới quyết định chọn Target Values). Điểm cải tiến cốt lõi là việc nhúng thêm bảng **TVDT (Target Values Decision Table)** giúp PDT đưa ra quyết định thông số và phân tích hệ quả.
*   **Quy trình từng bước thực hiện EQFD & TVDT:**
    1.  Chuyển dịch các đặc tính sản phẩm (PCs) và trọng số tầm quan trọng (Weight) từ ma trận HOQ sang bảng TVDT (xếp từ cao xuống thấp).
    2.  Khai báo dải thảo luận (range of debate) và các đặc tính kỹ thuật xung đột (trade-offs).
    3.  Thực hiện so sánh kỹ thuật (technical benchmark) với sản phẩm tham chiếu xuất sắc nhất thị trường.
    4.  Xác lập cột **Target Value (TV)** định lượng thông qua cuộc họp đồng thuận giữa VOC và VOE.
    5.  Tiến hành **Implication Analysis** (Phân tích hệ quả): Đánh giá mức độ khó khăn kỹ thuật, tác động tới chi phí và tiến độ Time-to-Market (TTM).
    6.  Xây dựng **Action Plan** (Kế hoạch hành động) để phân công nhiệm vụ nghiên cứu/kiểm chứng tiếp theo.

*   **Hệ thống Thang điểm và Ký hiệu đánh giá Implication Analysis trong TVDT:**
    Để đánh giá hệ quả của việc chốt thông số Target Value, nhóm PDT sử dụng đúng **3 ký hiệu mức độ** sau:
    *   **Critical implication** (Ký hiệu chấm tròn đen đặc `●`): Điểm nghẽn chí mạng (ví dụ: thông số này quyết định phần lớn chi phí toàn hệ thống - *"the decision on this target value is the prime cost driver of the system cost"*).
    *   **Important implication** (Ký hiệu vòng tròn rỗng `○`): Hệ quả quan trọng (ví dụ: ảnh hưởng lớn tới tiến độ nhưng không phải yếu tố đường găng chính - *"the decision on this target value has a significant effect on the time to market but it is not the prime system time to market factor"*).
    *   **Minor implication** (Ký hiệu hình tam giác `△`): Hệ quả nhỏ, rủi ro thấp (ví dụ: thông số này đã được làm chủ ở hệ thống cũ - *"the decision on this target value involves a minor risk since the same target value has been achieved in a similar system"*).

*   **Biểu mẫu bảng TVDT thực tế (Trích xuất dự án Đèn pin ngày 1.1.02):**
    Bảng TVDT mẫu của dự án Đèn pin (Flashlight for the Elderly) ghi nhận Workshop Date chính xác là ngày **1 tháng 1 năm 2002**:

| No | Product Characteristics | Weight (W) | Trade-offs | Ref. X | Ref. Y | Target Values (TV) | Diff | Cost (\$) | TTM |
| :--- | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Total Volume (cc) | **16%** | - | 022 | 08 | **57** | `○` | `○` | `△` |
| **2** | Total Weight (grams) | **16%** | 1 (vol) | 022 | 57 | **07** | `○` | `●` | `△` |
| **3** | Continuous Operation Time (min) | **13%** | 1 (vol), 2 (wgt) | 04 | 02 | **02** | `●` | `○` | `○` |
| **4** | Time to Locate and Operate (sec) | **12%** | 1 (vol), 2 (wgt) | 01 | 41 | **8** | `○` | `△` | `△` |
| **5** | Product Mfg Cost (\$) | **12%** | 1, 2, 3, 4 | \$3 | \$2 | **3.1** | `○` | - | `○` |
| **6** | Design Level (scale 1-5) | **10%** | 4, 5 | 3 | 2 | **4** | `○` | `○` | `○` |
| **7** | Operations to Failure | **10%** | 5 | 005 | 004 | **005** | `△` | `△` | `△` |
| **8** | Light Intensity (Lux) | **6%** | 1, 2, 3, 6 | 003 | 003 | **002** | `△` | `△` | `△` |
| **9** | Automation Level (List 1) | **4%** | 3, 4, 5, 6 | 2 | 2 | **1** | `△` | `△` | `△` |
| **10** | Time to change batteries (sec) | **1%** | 5 | 52 | 03 | **52** | `△` | `△` | `△` |

*(Nguồn bảng: `1-s2.0-S2212827115002073-main.pdf`)*

---

#### **2. CFMA (Conceptual Failure Mode Analysis)**

*   **Phương pháp luận (Methodology):**
    Được Amihud Hari công bố lần đầu vào năm **1999**. Do ở pha ý tưởng sớm chưa có linh kiện phần cứng chi tiết, CFMA thay đổi tư duy FMEA truyền thống bằng cách tiếp cận từ trên xuống (top-down) dựa trên cấu trúc chức năng (functional structures) đã dựng ở Step 3. **Chế độ hỏng (failure mode) được định nghĩa là sự mất mát hoặc suy giảm chức năng hoạt động của hệ thống**.
*   **Quy trình triển khai từng bước của CFMA:**
    Tiến hành thảo luận nhóm PDT để trả lời tuần tự đúng **7 câu hỏi cốt lõi** tương ứng với các cột trên biểu mẫu:
    1.  *Failure Mode Identification:* Hệ thống có thể bị lỗi/không thực hiện được một chức năng cụ thể như thế nào?
    2.  *Failure Cause & Effect Analysis:* Nguyên nhân tiềm ẩn và hệ quả trực tiếp của chế độ hỏng đó là gì?
    3.  *Severity Rating (S):* Hệ quả đó ảnh hưởng nghiêm trọng đến khách hàng ở mức độ nào?
    4.  *Frequency Rating (F):* Tần suất xuất hiện hoặc khả năng xảy ra lỗi hỏng này là bao nhiêu?
    5.  *Detection Method & Rating (D):* Làm thế nào để phát hiện lỗi thiết kế này sớm nhất ngay trong pha thiết kế ý tưởng khái niệm?
    6.  *Formulate Action Items:* Cần thực hiện hành động khắc phục thiết kế (Correction actions) nào để ngăn lỗi chạm tới khách hàng?
    7.  *Priority Determination:* Tính toán chỉ số tích lũy rủi ro để xếp hạng ưu tiên xử lý.

*   **Công thức toán học tính toán chỉ số rủi ro CFMA:**
    *   Chỉ số rủi ro ban đầu: 
        \\[SFD = S \times F \times D\\]
    *   Chỉ số rủi ro hiệu chỉnh (sau khi áp dụng hành động sửa đổi thiết kế): 
        \\[Rev\ SFD = S_{new} \times F_{new} \times D_{new}\\]
    *   *Ngưỡng hành động bắt buộc:* Mọi dòng rủi ro có trị số tích lũy **SFD vượt quá mốc 100** bắt buộc phải áp đặt hành động cải tiến thiết kế để kéo điểm số xuống.

*   **Thang điểm Severity, Frequency, Detection:** Các tác giả chỉ ra thang điểm này mang tính chất may đo và bắt buộc phải được điều chỉnh thích ứng linh hoạt theo đặc thù của từng dự án (*"These parameters have to be adapted to the team and the relevant project"*). Do đó, bảng định nghĩa chi tiết từ 1 đến 10 cho CFMA **không có trong nguồn**.

---

#### **3. CDTC (Conceptual Design to Cost)**

*   **Phương pháp luận (Methodology):**
    DTC truyền thống đòi hỏi hóa đơn nguyên vật liệu chi tiết (BOM), do đó không phù hợp ở pha sớm khi hơn **75%** chi phí vòng đời sản phẩm bị khóa chặt. CDTC được phát triển nhằm kết hợp nguyên lý DTC với **nguyên lý Pareto (80-20)** và kinh nghiệm chuyên gia để dự báo chi phí sản xuất chính xác trong dải sai số chỉ **20%** so với chi phí thực tế cuối cùng.
*   **Quy trình 6 giai đoạn thực thi CDTC (6 CDTC Stages):**
    *   **Stage 1: Determining target cost and analyzing its implication.** Phân loại các tính năng sản phẩm dựa trên mức độ sẵn sàng chi trả **Willingness to Pay (WTP)** của khách hàng thành đúng **3 nhóm**:
        *   *Essentials:* Đáp ứng các nhu cầu cơ bản, lý do chính khách hàng mua sản phẩm.
        *   *Beneficial:* Đáp ứng một số nhu cầu mở rộng mà khách hàng có khả năng sẵn sàng chi trả thêm.
        *   *Nhóm thứ ba:* **Không có trong nguồn** tên gọi tiếng Anh chính thức của nhóm này dưới dạng văn bản (chỉ đề cập đến dải giá trị từ thiết yếu đến nâng cao).
    *   **Stage 2: Defining the Cost Model method.** Xác định phương pháp tính chi phí (chọn Direct Costs, Gross Cost hoặc Net Cost).
    *   **Stage 3: Identification of Cost factors.** Phân bổ chi phí mục tiêu tổng thể xuống từng thành phần dưới dạng sơ đồ cây (Tree Graph), gộp các linh kiện nhỏ lẻ vào dòng "all the rest" (trivial many).
    *   **Stage 4: Assembly / Test Concept Charts.** Xây dựng biểu đồ quy trình lắp ráp và kiểm thử sơ bộ để tính toán dữ liệu thời gian nhân công.
    *   **Stage 5: Cost evaluation for each cost factor.** Sử dụng bảng tính Excel để dự toán chi phí vật liệu và lao động. Bảng tính chỉ chứa tối đa **9 linh kiện đắt đỏ nhất** (vital few) để tối ưu hóa nguồn lực.
    *   **Stage 6: Results analysis.** Chạy công cụ **Requirement challenging** (Thách thức yêu cầu) hiển thị tối đa **9 yêu cầu tốn kém nhất** để tìm kiếm cơ hội cắt giảm hoặc thay đổi thiết kế.

---

#### **4. RTA (Risk and Time to Market Analysis)**

*   **Phương pháp luận (Methodology):**
    Được giới thiệu năm **2003** tại ICED Stockholm. RTA lập kế hoạch dự án dựa trên việc xác định và khép kín dần các **Khoảng trống Tri thức (Knowledge Gaps - KGs)** thừa hưởng từ thuyết của Z. Bonen công bố năm **1964**.
*   **Quy trình 5 bước thực thi RTA (5 Steps of RTA):**
    *   *Step A – Characterization of the KG or risk:* Xác định vị trí lỗi (Function gap hoặc Interface gap), gán mức nghiêm trọng (Severity) và phân cấp KG.
    *   *Step B – Logic development of the project:* Lên kế hoạch khép kín khoảng trống (Gap closing plan) và định nghĩa các sự kiện cột mốc lớn trong vòng đời sản phẩm (Central events).
    *   *Step C – Logic plan of the project:* Xây dựng mạng lưới hoạt động đa cấp độ dựa trên triết lý *"Top-Down design, Bottom-Up realization"*, xếp chồng tiến độ song song dựa trên mức độ sẵn sàng chấp nhận rủi ro.
    *   *Step D – Plan analysis:* Nhập thời gian ước lượng và chạy phần mềm chuyên dụng (như MS Project hoặc Concerto) để tìm đường găng và chỉ số TTM.
    *   *Step E – Conclusion drawing and plan improvement:* Đưa ra các quyết định thay đổi kỹ thuật hoặc concept (unlinking, chọn giải pháp có ít vòng R&D hơn) để rút ngắn TTM.

*   **Thang đo rủi ro và Thang phân cấp Bonen của RTA:**
    *   **Thang Bonen phân loại rủi ro tri thức thành đúng 4 cấp độ (Table 1):**
        Một vòng phát triển (Development Cycle) được định nghĩa gồm đúng **3 bước**: Thiết kế (Design), Chế tạo (Build) và Kiểm thử (Test).
        1.  *Level 1 - Revision or Variant Design:* Đội ngũ đã quen thuộc giải pháp (làm nội bộ trước đó). Cần từ **1 đến 1.5 vòng** phát triển.
        2.  *Level 2 - Engineering Gap or Adaptive Design:* Đội ngũ biết phải làm gì nhưng đòi hỏi nỗ lực R&D lớn. Cần từ **2 đến 3 vòng** phát triển.
        3.  *Level 3 - Original Design but Viability proof exists:* Công nghệ đã tồn tại đâu đó trên thế giới nhưng chưa từng tự thực hiện trong nội bộ. Cần từ **m + 2 đến 3 vòng** phát triển.
        4.  *Level 4 - No Viability proof, Research:* Chưa có chứng minh khả thi công nghệ. Cần số vòng vô định **??? + m + 2 đến 3 vòng** phát triển.
    *   **Thang đo mức độ nghiêm trọng lỗi hỏng do không khép được KG (Table 4) gồm đúng 4 mức:**
        *   *None (Mức La Mã I):* Không có rủi ro (risk eliminated hoặc gap closed).
        *   *Minor (Mức La Mã II):* Bất tiện nhỏ, phát sinh thêm chi phí nhỏ.
        *   *Major (Mức La Mã III):* Hiệu năng không đạt, tổn thất thị phần hoặc thiệt hại tài chính.
        *   *Critical (Mức La Mã IV):* Thất bại hoàn toàn nhiệm vụ sản phẩm, tai nạn an toàn hoặc đe dọa sự sinh tồn của doanh nghiệp.
    *   **Ma trận xác định độ hiểm trọng rủi ro (Table 5):** Kết hợp trục ngang (Cấp KG Bonen từ 1 đến 4) và trục dọc (Mức nghiêm trọng từ I đến IV) để phân dải ưu tiên xử lý thành đúng **3 mức**: L (Low - Thấp), M (Medium - Trung bình), H (High - Cao).

---

#### **5. Robustool**

*   **Phương pháp luận (Methodology):**
    Được công bố năm **2007** tại ICED Paris. Robustool được xây dựng dưới dạng bảng tính phần mềm **Excel** chứa một checklist các câu hỏi định lượng. Để đảm bảo khách quan tối đa, PDT chỉ được trả lời giới hạn trong đúng **3 lựa chọn**: Yes, No, hoặc N/A (Not Applicable).
*   **Quy trình tính toán điểm Robustness Score phi tuyến tính:**
    *   Phân loại câu hỏi thành đúng **4 nhóm danh mục** vòng đời và **2 mức nghiêm trọng (A - Chí mạng, B - Quan trọng)**.
    *   Tính toán biến phạt rủi ro lỗi `x`:
        \\[x = 30 \times \frac{3 \cdot A_{No} + B_{No}}{AB_{YesNo}}\\]
    *   Tính toán điểm số Robustness Score bằng hàm phi tuyến tính:
        \\[Score = \frac{e^{-b(x - a)} - e^{-b(x_0 - a)}}{1 - e^{-b(x_0 - a)}}\\]
    *   *Các hằng số kỹ thuật được gán cứng:* **`a = 3`**, **`b = 0.2`**, và **`x0 = 10`**.

*   **Thang điểm đánh giá quyết định Robustness (Table 7) gồm đúng 4 dải điểm:**
    *   Dải từ **87 đến 100 điểm**: Ý tưởng đạt độ bền bỉ thiết kế tốt.
    *   Dải từ **70 đến 86 điểm**: Ý tưởng cần thêm một vài cải tiến nhỏ.
    *   Dải từ **55 đến 69 điểm**: Ý tưởng cần những cải tiến nền tảng sâu rộng.
    *   Dải điểm **dưới 55 điểm**: Ý tưởng hoàn toàn không bền bỉ.

---

### **PHẦN III: KHẲNG ĐỊNH "KHÔNG CÓ TRONG NGUỒN" (Unsupported Claims)**

*   **Bản dịch tiếng Đức hoặc tiếng Tây Ban Nha chính thức của toàn bộ cuốn sách giáo khoa ICDM:** Cuốn sách giáo khoa ICDM hoàn chỉnh chưa từng được xuất bản độc lập ngoài phạm vi các tài liệu hội thảo và chương trình giảng dạy SE đại học của Technion (*"except in Australia, probably because a basic book has not been written"*), do đó các bản dịch tiếng Đức hay Tây Ban Nha chính thức của quy trình này **không có trong nguồn**.
*   **Công thức toán học khép kín (closed-form formula) để tự động hóa việc chia nhóm tiêu chí A và B:** Việc phân bổ tiêu chí kỹ thuật thành nhóm A (70% coverage) và B (95% coverage) hoàn toàn phụ thuộc vào thảo luận, thống nhất đa chức năng của PDT chứ không có bất kỳ thuật toán tự động nào hỗ trợ (**không có trong nguồn**).
*   **Danh sách đầy đủ hơn 50 câu hỏi checklist chi tiết của Robustool:** Tài liệu gốc chỉ cung cấp một số câu hỏi mẫu tại các bảng Table 2, 3, 4, 5 để minh họa nguyên lý hoạt động, còn bảng khảo sát đầy đủ hoàn chỉnh **không có trong nguồn**.

---
📊 Với các công thức toán học phi tuyến tính nghiêm ngặt của Robustool hay dải tính điểm SFD của CFMA, tôi có thể lập trình trực tiếp một script Python chạy ngay trong môi trường tính toán này để xây dựng cho bạn một bảng tính tự động hóa khâu phân tích rủi ro thiết kế sớm (tự nhập Yes/No/NA, tự động xuất điểm Robustness và cảnh báo đỏ lỗi SFD > 100) để bạn xuất file tải về sử dụng ngay không?

## icdm — Phê bình, giới hạn, điều kiện thất bại

**Nguồn:** [44], [46], [47], [50], [53], [55], [56], [57]  *(metadata: rỗng · quét thân bài: 44, 46, 47, 50, 53, 55, 56, 57)*

Dưới đây là mổ xẻ phê bình chuyên sâu về phương pháp luận **ICDM (Integrated, Customer Driven, Conceptual Design Method)** — bản mở rộng của phương pháp thiết kế hệ thống **Pahl & Beitz (SAPB)**, tập trung bóc tách các bài toán đánh đổi (trade-offs), giới hạn tự thừa nhận, rủi ro vận hành, trường hợp biên (edge cases), điều kiện thất bại sụp đổ và các bằng chứng thực nghiệm vạch trần lỗ hổng của mô hình này:

---

### **I. CÁC QUYẾT ĐỊNH ĐÁNH ĐỔI (TRADE-OFFS) TRONG THIẾT KẾ PHƯƠNG PHÁP**

#### **1. Sự đánh đổi giữa tiến độ song song (Concurrency) và rủi ro sửa đổi (Rework)**
Để rút ngắn tối đa thời gian ra mắt thị trường (Time to Market — TTM), phương pháp **RTA (Risk and Time to Market Analysis)** bắt buộc phải nén tiến độ bằng cách chạy song song các hoạt động chế tạo thô (bottom-up realization) khi các khoảng trống tri thức (Knowledge Gaps — KGs) ở pha trước chưa được khép kín hoàn toàn. Sự đánh đổi này yêu cầu nhà quản lý phải chấp nhận một mức rủi ro cực cao về mặt chi phí và công sức làm lại (rework) nếu thử nghiệm pha trước thất bại.
*   *Trích nguyên văn tiếng Anh:* `"This packing of simultaneous activities together produces logic links which dictate a minimum requirement to start any stage subject to the extent of willingness to risk an attempt at this stage before all the information has become available and all KGs and risks as associated with the previous stage have been eliminated."` và `"As shown, the ability to reduce times and to work simultaneously is a function of the willingness to take risks."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/23913/ANALYSIS+OF+RISK+AND+TIME+TO+MARKET+DURING+THE+CONCEPTUAL+DESIGN+OF+NEW+SYSTEMS`

#### **2. Sự đánh đổi giữa hiệu năng đột phá (Performance) và an toàn tiến độ (TTM)**
Khi sắp xếp và tối ưu hóa ma trận hình thái thông qua kỹ thuật **DSO (Direct Synthesis Optimization)**, đội ngũ phát triển sản phẩm (PDT) phải cân não giữa việc chọn một nguyên lý giải pháp cực kỳ mới mẻ đem lại tính năng đột phá nhưng đi kèm rủi ro kéo dài thời gian phát triển vô hạn (thường bị chấm điểm rủi ro thấp như `(5;2)` hoặc `(5;0)`); hoặc chấp nhận chọn phương án an toàn, bảo thủ (mốc điểm rủi ro từ `(*;5` trở lên) để bảo toàn thời hạn TTM nghiêm ngặt.
*   *Trích nguyên văn tiếng Anh:* `"A very novel solution principle with great impact on the performance of the designed product has been selected, in spite of the fact that the risks in such selection are considerable. Such a solution principle may have a mark of (5;2) or even (5;0). ... A new product is being developed in a case where the TTM - time to market is very crucial. Here the risks must be minimized on behalf of performance, and therefore no solution principles with the mark less than (*;5) will be chosen."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/25781/selection_of_optimal_combinations_of_solution_principles_from_a_morphological_diagram`

---

### **II. GIỚI HẠN MÀ CHÍNH TÁC GIẢ THỪA NHẬN (AUTHOR-ADMITTED LIMITATIONS)**

#### **1. EQFD & TVDT: Sự cồng kềnh, quá tải thông tin và thiếu nhạy bén**
Phương pháp QFD truyền thống đã được sử dụng nhiều năm để làm rõ nhiệm vụ thiết kế kỹ thuật. Tuy nhiên, các tác giả thừa nhận nó cực kỳ tốn thời gian và bất lực khi áp dụng cho các hệ thống phức tạp do ma trận phình to vượt quá tầm kiểm soát (vượt kích thước **20x20** hoặc **15x25**), khiến nhóm PDT không thể phân tích sâu các đánh đổi.
*   *Trích nguyên văn tiếng Anh có số:* `"Quality Function Deployment (QFD) has been used for task clarification for at least 20 years. QFD has a lot to offer but when used to specify a new product, has been found to have a number of deficiencies, has been perceived as a time consuming process and has been found as being difficult to apply to complex systems."` và `"A matrix of more than 20x20 or 15x25 is impractical to handle because it consumes too much time. This makes it difficult for the team to analyze all customers’ needs in depth and formulate all correlations and tradeoffs."`
*   *Remedy khống chế kích thước của tác giả:* Thiết lập House of Quality sửa đổi giới hạn nghiêm ngặt từ **15 đến 20** nhu cầu hệ thống (hàng) và từ **20 đến 25** đặc tính sản phẩm (cột). 
    *Trích nguyên văn:* `"15-20 system level needs (rows), and if necessary also trimmed customer needs hierarchy tree. 20 – 25 product characteristics (columns), these being the most important, difficult, or controversial decisions."`
*   *Giới hạn của QFD nguyên bản về việc ra quyết định:* `"QFD often does not generate the necessary information needed to make the informed critical decisions required to produce specifications. It is not suited for performing a sensitivity analysis on the consequences of the decisions, it does not incorporate the ability to discuss affordability or \"willingness to pay\" issues with the customer and does not contain the provision to produce an action-plan and high level verification-plan."`
*   *Tên file nguồn chung:* `1-s2.0-S2212827115002073-main.pdf`

#### **2. DQM: Sự chủ quan và rủi ro bị thao túng bởi quyền lực hành chính**
Tác giả thừa nhận một điểm yếu chí mạng của hệ thống đo lường chất lượng thiết kế **DQM**: do ở pha sớm chúng ta chỉ có thể so sánh đặc tính sản phẩm với các dự báo hoặc kỳ vọng mờ (forecasts/expectations) thay vì dữ liệu khách quan lặp đi lặp lại như trong sản xuất, các chỉ số DQM mang nặng tính chủ quan và rất dễ bị bóp méo bởi áp lực cá nhân hoặc ý chí của nhà quản lý cấp cao.
*   *Trích nguyên văn tiếng Anh:* `"We can compare design process data only against forecasts or expectations. These metrics are subjective and subjected to personal influence, power and pressure."`
*   *Tên file nguồn:* `1-s2.0-S2212827115002073-main.pdf`

#### **3. CDTC: Sai số ước lượng và giới hạn công cụ thách thức yêu cầu**
Công cụ thiết kế định hướng chi phí **CDTC** dựa trên kinh nghiệm chuyên gia và nguyên lý Pareto chỉ mang tính chất xấp xỉ thô. Tác giả thừa nhận sai số của CDTC ở pha sớm dao động trong khoảng **20%** so với chi phí sản xuất thực tế ngoài đời thực. Đồng thời, công cụ "Requirement challenging" (Thách thức yêu cầu) và bảng tính chi phí chỉ bị giới hạn xử lý tối đa **9** yêu cầu tài chính hoặc yếu tố chi phí cốt lõi để tránh quá tải tính toán.
*   *Trích nguyên văn tiếng Anh có số:* `"it was found that the accuracy of CDTC at the conceptual and preliminary design stages produced estimates within 20% of the final actual unit manufacturing cost"` và `"The tool displays up to 9 of the most significant requirements in terms of the associated costs."`
*   *Tên file nguồn:* `INCOSE2008CDTCpaper.pdf`

#### **4. Robustool: Các tham số phi tuyến tính tự áp đặt chủ quan và điểm số phi cam kết**
Thuật toán phi tuyến tính của Robustool sử dụng các hằng số gán cứng gồm **`a = 3`**, **`b = 0.2`**, và **`x0 = 10`** hoàn toàn là do tác giả tự ấn định một cách chủ quan (arbitrary) dựa trên cảm nhận cá nhân. Tác giả thừa nhận điểm số Robustness tích lũy hoàn toàn không có giá trị cam kết pháp lý hay kỹ thuật ràng buộc nào mà chỉ mang tính chất định hướng thô cho nhóm thiết kế.
*   *Trích nguyên văn tiếng Anh có số:* `"where: a = 3, b = 0.2, x0 = 10. The above parameters can be modified by the user in order to fit to his/hers project and needs. The numbers and equations are arbitrary, and were found to be appropriate for this case."` và `"This score is by no means considered as binding. An experienced designer will always strive to achieve a better robustness evaluation, and the table is considered as a guide only."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/25697/Design+to+Withstand+Improper+Use+and+Design+for+Future+Enhancements,+Are+Incorporated+in+the+New+Robustool`

---

### **III. RỦI RO KHI ÁP DỤNG & TRƯỜNG HỢP BIÊN (RISKS & EDGE CASES)**

#### **1. Rủi ro rò rỉ và triệt tiêu ý tưởng đột phá từ bộ lọc thô (Group A & B Criteria)**
ICDM chia tiêu chí đánh giá thành Nhóm A (chạy lọc Pugh ở Bước **7** để bao phủ **tối thiểu 70%** sự hài lòng khách hàng) và Nhóm B (chạy chọn Winner Concept ở Bước **9** để bao phủ **tối thiểu 95%** sự hài lòng). 
*   *Rủi ro vận hành:* Tiêu chí nhóm A chỉ chọn các thông số dễ đánh giá nhanh mà không cần phân tích sâu. Điều này tạo ra rủi ro: một ý tưởng có tính sáng tạo cực kỳ đột phá và đạt điểm số xuất sắc ở các thông số phức tạp (thuộc nhóm B) sẽ bị bộ lọc thô nhóm A loại bỏ một cách oan uổng ngay từ Bước **7**.
*   *Trích nguyên văn tiếng Anh chứa số:* `"Group A is used for the first evaluation step (Step 7) and includes relatively few (but important) criteria that can be used without any further analysis. This criteria group must cover at least 70% of the customer satisfaction according to their rating."` và `"Group B includes more criteria and covers at least 95% of the customer satisfaction. These criteria are used for the final concept selection phase (Step 9)."`
*   *Tên file nguồn:* `5.5.4 Design of the concept of a new system, using ICDM - Integrated, Customer Driven, Conceptual Design Method.pdf`

#### **2. Trường hợp biên "Single Source" trong Robustool đẩy dự án về vạch xuất phát**
Trong Robustool, câu hỏi nhóm A (chí mạng) yêu cầu thiết kế phải thoát hoàn toàn khỏi các linh kiện độc quyền chỉ có một nhà cung cấp duy nhất (Single Source items). Tại trường hợp biên này, nếu một linh kiện độc quyền bị dừng sản xuất hoặc thế hệ mới không đạt tương thích FFF (Fit-Form-Function), dự án sẽ lập tức rơi vào điều kiện thất bại thảm hại: **buộc phải hủy bỏ toàn bộ thiết kế hiện tại và quay trở lại vạch xuất phát số không (Back to Square One)**. 
*   *Trích nguyên văn tiếng Anh:* `"The only one answer \"No\" at category \"A\" is for the question: \"All technologies and components are free of \"Single Source\" items. Examples: \"Back to Square One” can be caused by such a single component which production has been stopped. The same in case of using a new generation of a component that doesn't have FFF compatibility B Yes\""`
*   *Sự bế tắc thực tế:* `"Most of the programmable firmware components are from single source, without FFF compatibility and in complicated cases the systems, sometimes, are tailored to fit these components. This problem is well known at industry and there is no simple solution."`
*   *Tên file nguồn chung:* `https://www.designsociety.org/download-publication/25697/...`

---

### **IV. ĐIỀU KIỆN THẤT BẠI & VÙNG KHÔNG THỂ ÁP DỤNG (FAILURE CONDITIONS & INAPPLICABILITY)**

#### **1. Điều kiện thất bại sụp đổ tiến độ RTA do chứa cấu phần rủi ro cấp 4 (Level 4 KG)**
Thang đo khoảng trống tri thức Bonen phân rã rủi ro thành **4 cấp độ**. Tại trường hợp biên khi dự án R&D cố tình đưa vào một cấu phần thuộc **Cấp độ 4** (No Viability proof, Research — yêu cầu số vòng thiết kế vô định là **`??? + m + 2 to 3`** vòng), **dự án đối mặt với điều kiện thất bại phá sản tiến độ hoàn toàn**. Do số vòng lặp khép kín KG cấp 4 là bất khả dự báo, tác giả nghiêm cấm đưa cấu phần này vào kế hoạch phát triển kỹ thuật; nó bắt buộc phải được chạy riêng thành đề tài nghiên cứu độc lập trước khi dự án bắt đầu.
*   *Trích nguyên văn tiếng Anh chứa số:* `"According to Bonen, at level 4, an unknown number of development cycles is required to move down to level 3, therefore no project can include a level-4 component. Such components are covered under a separate research effort before the project starts."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/23913/ANALYSIS+OF+RISK+AND+TIME+TO+MARKET+DURING+THE+CONCEPTUAL+DESIGN+OF+NEW+SYSTEMS`

#### **2. Những nơi phương pháp RTA tuyệt đối không thể áp dụng**
Phương pháp RTA hoàn toàn không thể áp dụng và không mang lại bất kỳ giá trị nào đối với **các dự án thi công lặp đi lặp lại kinh điển (Classical repetitive projects)**, ví dụ điển hình là xây dựng một tòa nhà (construction of a building). Ở các dự án này, chuỗi công việc và thời gian là tĩnh lặng, Specs đã rõ ràng ngay từ đầu, nên các công cụ quản trị truyền thống như PERT hay TOC sẽ hiệu quả hơn.
*   *Trích nguyên văn tiếng Anh:* `"A classical repetitive project, like the construction of a building can be planned and presented in a network of known activities, with the time required to complete each activity evaluated at reasonable precision and variance levels. Such projects may be managed by common project management methods as the mature PERT or the more recent Theory of Constrains (TOC)."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/23913/...`

#### **3. Sự sụp đổ của DQM nếu thiếu cam kết văn hóa QFD toàn doanh nghiệp**
Hệ thống đo lường chất lượng thiết kế DQM của ICDM sẽ hoàn toàn thất bại và không thể vận hành nếu doanh nghiệp chỉ áp dụng nó một cách hời hợt, chắp vá. Để DQM hoạt động, tổ chức bắt buộc phải cam kết thực thi văn hóa QFD toàn diện như một thói quen vận hành thường nhật của mọi đội ngũ phát triển sản phẩm.
*   *Trích nguyên văn tiếng Anh:* `"However, a practical application of deployments in DQM requires comprehensive implementation of QFD across the organization as a way of living for all the product development teams."`
*   *Tên file nguồn:* `1-s2.0-S2212827115002073-main.pdf`

---

### **V. BẰNG CHỨNG THỰC NGHIỆM VẠCH TRẦN SAI LỆCH CỦA PHƯƠNG PHÁP (EMPIRICAL EVIDENCE OF DEFICIENCIES)**

Nghiên cứu học thuật thực nghiệm độc lập đã chỉ ra các điểm mâu thuẫn kỹ thuật và sai lệch thực tế giữa tuyên bố lý thuyết của các phương pháp luận này so với hành vi thực tế:

#### **1. Bằng chứng thực nghiệm bác bỏ mô hình tuyến tính của Pahl & Beitz (SAPB)**
Mô hình hệ thống của Pahl & Beitz (SAPB) — nền tảng gốc của ICDM — tuyên bố rằng các vấn đề về kiến trúc cấu trúc vật lý (Structure — S) và hành vi cấu trúc (Structure Behaviour — B) sẽ không xuất hiện cho đến các giai đoạn thiết kế chi tiết phía sau (Embodiment & Detail design). 
Tuy nhiên, nghiên cứu thực nghiệm giải mã giao thức (protocol analysis) của Udo Kannengiesser và John S. Gero trên các kỹ sư sinh viên đã chứng minh điều ngược lại: **Kỹ sư luôn sản sinh ra các vấn đề về cấu trúc vật lý (S) và hành vi cấu trúc (B) từ rất sớm ngay khi vừa bắt đầu buổi thiết kế ý tưởng**, trực tiếp bác bỏ giả định tuyến tính của SAPB. Ngay cả khi tính đến các vòng lặp (iterations), mô hình lý thuyết của SAPB vẫn không thể dự báo hay giải thích được hành vi thực tế này.
*   *Trích nguyên văn tiếng Anh:* 
    > `"While PBSA predicts that these design issues will not occur until later during designing, for the second-year students the opposite was the case: They produced structure issues and structure behaviour issues very early on in their design sessions."` và `"Even if iterations in PBSA (which Pahl and Beitz do not exclude) were to be taken into account (including intra- and inter-stage iterations), there would still be no early occurrence of structure issues and structure behaviour issues in their model."`
*   *Tên file nguồn:* `https://www.cambridge.org/core/services/aop-cambridge-core/content/view/8BFE1D692F764BCE7D0CEF539ED3C580/S2053470117000245a.pdf/div-class-title-can-pahl-and-beitz-systematic-approach-be-a-predictive-model-of-designing-div.pdf`

#### **2. Bằng chứng thực nghiệm về sự thất bại của thuật toán DSO (Direct Synthesis Optimization)**
Phương pháp DSO được ICDM giới thiệu nhằm giải quyết bài toán nổ tung tổ hợp của ma trận hình thái bằng cách chạy thuật toán lọc tự động. Tuy nhiên, các tác giả thẳng thắn thừa nhận một điểm yếu thực nghiệm chí mạng: **Trong tất cả các dự án chạy thử nghiệm thực tế, thuật toán DSO đều gợi ý ra ít nhất từ 2 hoặc nhiều hơn các tổ hợp ý tưởng lỗi hoàn toàn không thể chấp nhận được (unacceptable/incompatible combinations)**. Nguyên nhân là do thuật toán DSO chỉ đánh giá độc lập từng nguyên lý giải pháp kỹ thuật riêng lẻ mà hoàn toàn bỏ qua việc kiểm tra khả năng tương thích chéo đa biến giữa các nguyên lý giải pháp khi xếp chồng lên nhau. Khâu loại bỏ lỗi này bắt buộc phải được xử lý thủ công bằng trực giác của các kỹ sư.
*   *Trích nguyên văn tiếng Anh có chứa số và phép đếm:* 
    > `"In each of our experimental projects, two or more unacceptable combinations were includeded in the solutions suggested by the algorithms. A reason may be the incompatibilities of more than 2 solution principles, that were not checked by the methods. These unacceptable combinations were eliminated by the teams."`
*   *Tên file nguồn:* `https://www.designsociety.org/download-publication/25781/selection_of_optimal_combinations_of_solution_principles_from_a_morphological_diagram`

#### **3. Bằng chứng về sự đứt gãy thực tế của các phương pháp đánh giá có cấu trúc**
Các nghiên cứu thực nghiệm về hành vi con người ngoài đời thực (như nghiên cứu của Miko Laakso năm **2013** đối với **16** nhà thiết kế chuyên nghiệp) chứng minh rằng: trong thực tiễn công nghiệp bận rộn, các nhà thiết kế hầu như không sử dụng các phương pháp đánh giá có cấu trúc (như ma trận Pugh hay Robustool) một cách đúng quy chuẩn. Họ liên tục thay đổi tiêu chí đánh giá ngẫu nhiên ngay giữa buổi họp và đối mặt với các xung đột nội bộ nghiêm trọng, đặt dấu hỏi lớn về tính thực tiễn của các phương pháp luận mang tính áp đặt lý thuyết (prescriptive methodologies) như ICDM.
*   *Trích nguyên văn tiếng Anh chứa số:* `"Previous research has shown that structured methods are often not used properly or at all in design practice. ... The experiment involved sixteen professional designers and utilized mixed methods... furthermore, some internal conflicts appeared between different concept evaluation tasks. These findings put designers’ ability to make rational and good concept decisions under some doubt."`
*   *Tên file nguồn:* Related papers excerpt trong `(PDF) CFMA: An Effective FMEA Tool for Analysis and Selection of the Concept for a New Product`

---
> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## icdm — Vét — nguồn không nổi lên ở ba truy vấn trước

**Nguồn:** [51], [52], [58]  *(metadata: 51, 52, 58 · quét thân bài: 51, 52, 58)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

---

### **PHẦN I: HỖ TRỢ HẬU CẦN TÍCH HỢP (INTEGRATED LOGISTICS SUPPORT - ILS)**
*Nguồn tài liệu:* `INTEGRATED_LOGISTICS_SUPPORT_IN_HIGH-TECHNOLOGY_CO.pdf`

#### **1. Quy trình từng bước và Đầu vào / Đầu ra (Step-by-Step Procedure & Inputs/Outputs)**
*   **Quy trình:** Tài liệu nguồn nêu rõ rằng hoạt động Hỗ trợ hậu cần tích hợp (ILS) được thực thi thành công thông qua việc lập Kế hoạch hỗ trợ hậu cần tích hợp (Integrated Logistics Support Plan - ILSP). Kế hoạch này được khởi thảo từ pha khái niệm của quá trình mua sắm hệ thống và cập nhật liên tục suốt vòng đời của hệ thống đó. 
*   **Đầu vào & Đầu ra (Inputs/Outputs):** Đối với quy trình xây dựng hoặc phát triển ILS một cách chi tiết, **văn bản gốc không mô tả các bước thực thi cụ thể kèm theo đầu vào và đầu ra rõ ràng (không có trong nguồn)**.

#### **2. Công thức toán học và Thang điểm (Formulas & Scoring)**
*   **Công thức & Thang điểm:** Tài liệu đề cập đến việc hiệu suất bảo trì có thể đo lường bằng các chỉ số như thời gian trung bình giữa các lần hỏng hóc (MTBF), thời gian sửa chữa trung bình (MTTR) và độ sẵn sàng (Availability). Tuy nhiên, **không có bất kỳ công thức toán học tường minh hay thang điểm đánh giá định lượng nào cho các chỉ số này được cung cấp trong tệp nguồn (không có trong nguồn)**.

#### **3. Hệ thống Bảng biểu (Tables)**
*   **Table 1: ILS sub-elements** (Bảng 1: Các phân hệ của ILS):
    *   *Computer resources* (Tài nguyên máy tính)
    *   *Configuration management* (Quản lý cấu hình)
    *   *Disposal* (Thải bỏ)
    *   *Facilities* (Cơ sở vật chất)
    *   *Maintenance support* (Hỗ trợ bảo trì)
    *   *Manpower and personnel* (Nhân lực và nhân sự)
    *   *Obsolescence* (Sự lỗi thời)
    *   *Packaging, handling, storage, and transportation (PHS&T)* (Đóng gói, bốc xếp, lưu kho và vận chuyển)
    *   *Reliability, availability, and maintainability (RAM), or dependability* (Độ tin cậy, độ sẵn sàng và khả năng bảo trì, hoặc tính phụ thuộc)
    *   *Supply support* (Hỗ trợ cung ứng)
    *   *Support and test equipment* (Thiết bị hỗ trợ và kiểm thử)
    *   *System operational requirements* (Yêu cầu vận hành hệ thống)
    *   *Technical data and documentation* (Dữ liệu kỹ thuật và tài liệu)
    *   *Training and training devices* (Đào tạo và thiết bị đào tạo)
    *   *(Lưu ý: Số lượng cụ thể các phân hệ trong danh sách này là 14 mục dựa trên phép đếm danh sách, nhưng văn bản gốc không tuyên bố trực tiếp con số này - không có trong nguồn về số đếm tổng phân hệ).*
*   **Table 2: Constraints of a developing country with regard to ILS elements** (Bảng 2: Các hạn chế của quốc gia đang phát triển đối với các phân hệ ILS): Bảng này mô tả chi tiết các khó khăn thực địa tại các nước đang phát triển đối với từng phân hệ nêu trên (như thiếu nhân lực có trình độ, tài liệu kỹ thuật không được cập nhật hoặc không viết bằng tiếng mẹ đẻ của kỹ sư bảo trì).

#### **4. Trích lục nguyên văn cho các khẳng định chứa Số, Năm ban hành hoặc Phép đếm**
*   **Năm nộp và duyệt công bố bài báo (2017 & 2020):** 
    > `"Submitted by authors 7 Sep 2017 Accepted for publication 8 Oct 2020 Available online 14 Dec 2020"`.
*   **Nguồn gốc lịch sử của logistics (năm 490 và 481 TCN):** 
    > `"Logistics is recorded as having originated in the military during wars as early as 490 and 481 BC."`.
*   **Số liệu thống kê hậu cần Chiến tranh Vùng vịnh lần thứ nhất (năm 1990 - 1991):** 
    > `"Pagonis states that, between August 1990 and August 1991, 1.3 billion gallons of fuel were pumped; more than 122 million meals were planned, moved and served; 31,800 tons of mail were handled; and 52 million miles were driven."`.
*   **Tuổi thọ của các hệ thống cũ (> 35 năm và quy mô 10 hệ thống):** 
    > `"Some of the legacy systems in the South African and South American contexts are over 35 years old."` và `"One of the high-technology complex systems investigated in this study consists of 10 systems, is more than 35 years old, and has a high incidence of failure associated with it."`.
*   **Thời gian R&D (5 - 10 năm) và vòng đời hệ thống công nghệ cao (20 - 40 năm):** 
    > `"High-technology complex systems take many years (from five to ten years, if not longer) of research and development. These complex systems have long (typically between 20 and 40 years, sometimes even longer) life cycles."`.

---

### **PHẦN II: TÍCH HỢP QFD VỚI TRIZ CHO THIẾT KẾ ĐỘT PHÁ**
*Nguồn tài liệu:* `Integrating_QFD_and_TRIZ_for_innovative_design.pdf`

#### **1. Quy trình từng bước và Đầu vào / Đầu ra (Step-by-Step Procedure & Inputs/Outputs)**
Phương pháp luận tích hợp được vận hành qua hai giai đoạn lớn với các bước nhỏ có tên gọi gốc tiếng Anh như sau:

##### **Giai đoạn 1: QFD Analysis (Phân tích QFD)**
*   **Bước 1.1: Evaluation of the task development (Đánh giá sự phát triển nhiệm vụ):**
    *   *Đầu vào:* `"Customers' Needs"` (Nhu cầu khách hàng) / `"customers' desires"`.
    *   *Đầu ra:* Các yêu cầu kỹ thuật (Technical requirements).
    *   *Nội dung thực hiện:* Gồm **Analysis of the environment** (hiểu vị thế sản phẩm mới), **Analysis of the competitors’ products** (phân tích đối thủ) và **Six questions** (Sáu câu hỏi: *WHO, WHAT, WHERE, WHEN, WHY, HOW*) để trích xuất ra các đặc tính quan trọng của sản phẩm.
*   **Bước 1.2: Evaluation and interrelation matrixes (Ma trận đánh giá và tương quan):**
    *   *Đầu vào:* Danh sách đặc tính thu được từ Bước 1.1.
    *   *Đầu ra:* Thứ tự ưu tiên của các yêu cầu và mối quan hệ phụ thuộc lẫn nhau.
    *   *Nội dung thực hiện:* Chạy ma trận tương quan độ quan trọng tương đối (Relative importance matrix) và ma trận độc lập/phụ thuộc (Independence/dependence matrix).
*   **Bước 1.3: Morphological Matrix analysis (Phân tích ma trận hình thái):**
    *   *Đầu vào:* Các đặc tính sản phẩm được chọn lọc.
    *   *Đầu ra:* Các đề xuất giải pháp kỹ thuật và kiến trúc khái niệm sơ khởi (`"Conceptual Product Architecture"`).
    *   *Nội dung thực hiện:* Tạo bảng Morphological Matrix (Table 7) đề xuất **4 giải pháp kỹ thuật** tương ứng cho mỗi yêu cầu và dùng ma trận phụ để tìm ra lộ trình kết hợp tối ưu.

##### **Giai đoạn 2: TRIZ Analysis (Phân tích TRIZ)**
*   **Bước 2.1: Formulation of the “Ideal Final Result” (Thiết lập Kết quả Cuối cùng Lý tưởng):**
    *   *Đầu vào:* Ý tưởng thiết kế sơ phác từ QFD.
    *   *Đầu ra:* Cấu trúc lý tưởng mục tiêu (ban đầu giả định khuôn có 3 lớp).
*   **Bước 2.2: Product Analysis (Phân tích sản phẩm):**
    *   *Đầu vào:* Các yêu cầu và giới hạn kỹ thuật chuyển tiếp từ QFD.
    *   *Đầu ra:* Bảng đánh giá tầm quan trọng của các yêu cầu trên thang điểm từ 1 đến 10.
*   **Bước 2.3: Functional Diagram (Thiết lập biểu đồ chức năng):**
    *   *Đầu vào:* Các phần tử cấu thành sản phẩm và các tác nhân vận hành.
    *   *Đầu ra:* Sơ đồ chức năng mô tả các mối liên hệ hữu ích (good) hoặc có hại (harmful).
*   **Bước 2.4: Relation Definition (Định nghĩa mối quan hệ):**
    *   *Đầu vào:* Sơ đồ chức năng từ Bước 2.3.
    *   *Đầu ra:* Dữ liệu định tính và định lượng về tương tác đa biến giữa các thông số hệ thống.
*   **Bước 2.5: Trimming (Lược bỏ/Tối ưu hóa hệ thống):**
    *   *Đầu vào:* Toàn bộ mô hình quan hệ chức năng.
    *   *Đầu ra:* Kiến trúc tối ưu hóa (`"Architecture Optimized"`) thông qua việc lược bỏ các thành phần dư thừa nhưng vẫn bảo toàn chức năng kỹ thuật của chúng.

#### **2. Công thức toán học và Thang điểm (Formulas & Scoring)**
*   **Công thức:** **Không có công thức toán học phức tạp nào được định nghĩa trong nguồn ngoại trừ các quy tắc gán điểm số bán định lượng**.
*   **Thang điểm đánh giá:**
    *   *Thang đo mức độ phụ thuộc (Table 2):* Không có phụ thuộc = **0**, Yếu = **1**, Trung bình = **3**, Mạnh = **9**.
    *   *Thang đo độ quan trọng tương đối (Table 3):* Dòng bằng cột = **1** điểm; dòng quan trọng hơn cột = **0** điểm; cột quan trọng hơn dòng = **2** điểm.
    *   *Thang đo tầm quan trọng trong TRIZ (Product Analysis):* Chấm điểm từ **1 đến 10**.

#### **3. Hệ thống Bảng biểu và Ma trận (Tables & Matrices)**
*   **Table 1:** QFD Six Questions (Bảng câu hỏi WHO, WHAT, WHERE, WHEN, WHY, HOW).
*   **Table 2:** Dependence chart values (Bảng giá trị gán cho mức độ phụ thuộc).
*   **Table 3:** Importance chart values (Bảng giá trị gán cho mức độ quan trọng tương đối).
*   **Table 4:** Requirements detection from six questions (Bảng trích xuất đặc tính kỹ thuật từ 6 câu hỏi cho khuôn đúc hở).
*   **Table 5:** The relative importance evaluation matrix (Ma trận so sánh độ quan trọng tương đối giữa các đặc tính).
*   **Table 6:** The independence/dependence evaluation matrix (Ma trận xác định độ phụ thuộc nhân quả giữa các đặc tính).
*   **Table 7:** The morphological matrix (Ma trận hình thái đề xuất giải pháp kỹ thuật).
*   **Tables 8, 9, 10, 11:** Các ma trận đánh giá tầm quan trọng tương đối của giải pháp kỹ thuật đối với từng đặc tính: *Industriability, Customization, Precision, và Structural Strength*.

#### **4. Trích lục nguyên văn cho các khẳng định chứa Số, Năm ban hành hoặc Phép đếm**
*   **Định nghĩa của Brundtland Commission (năm 1987):** 
    > `"In 1987 the Brundtland Commission defined first sustainability as “meets the needs of the present without compromising the ability of future generations to meet their own needs” (WCED, 1987 and Rosen, Hossam and Kishawy, 2012) ."`.
*   **Niên đại tiếp nhận và phê duyệt công bố bài báo (năm 2017):** 
    > `"Received: 10 January 2017; Revised: 23 March 2017; Accepted: 21 April 2017"`.
*   **Phương pháp QFD 4 pha và tích hợp TRIZ trong tiền lệ y văn:** 
    > `"In comparison with previous authors, they have developed the first method using a four phase QFD plan, followed by TRIZ application to enable the development of breakthrough products."`.
*   **Số lượng chuyên gia tham gia nghiên cứu (5 nhà nghiên cứu):** 
    > `"In this paper the investigation has been made among five researchers of the Design and Methods Research Group of the University of Bologna."`.
*   **Thời gian chế tạo khuôn truyền thống (6 tháng):** 
    > `"...it is usually available not before than six months."`.
*   **Số lượng đặc tính chất lượng của khuôn đúc được nhận diện (9 đặc tính):** 
    > `"From these answers, nine most important characteristics, which the open mould has to own, have been identified: 1. Industriabilty - 2. Structural Strength - 3. Customization - 4. Production Speed - 5. Workability - 6. Precision - 7. Thermal Resistance - 8. Complex Shaping - 9. Reliability."`.
*   **Số lượng giải pháp kỹ thuật đề xuất trong ma trận hình thái (4 giải pháp):** 
    > `"...four possible technical solutions have been proposed."`.
*   **Thang điểm đánh giá độ quan trọng trong phần mềm TRIZ (1 đến 10):** 
    > `"For each requirement, the relative importance has been evaluated on a scale from 1 to 10."`.
*   **Giả định ban đầu về cấu trúc khuôn đúc hở (3 lớp):** 
    > `"...mould with three layers: a structural strength frame, the intermediate support in a light and easily workable material, a complex shape additive layer easy to be shaped and to be finished."`.
*   **Kết quả tối ưu hóa Trimming của TRIZ (giảm từ 3 xuống 2 lớp):** 
    > `"The TRIZ analysis leads to a first result: it reduces the mould layers from three to two ones."`.
*   **Máy in 3D lai 5 trục được lắp ráp phục vụ thực nghiệm:** 
    > `"In the laboratories of the Department of Industrial Engineering, University of Bologna, a 5-axis hybrid 3D printer has been assembled (fig. 10)."`.
*   **Kích thước thể tích của hệ thống máy in thực nghiệm (5x3x2 m):** 
    > `"The system spans over a huge volume (5x3x2 m) and may be equipped by a nozzle in order to spray a film coat on the surface."`.

---

### **PHẦN III: CA ÁP DỤNG THỰC TẾ ICDM — DỰ ÁN HỆ THỐNG LF100 (LOST KID FINDING SYSTEM)**
*Nguồn tài liệu:* `https://www.designsociety.org/download-publication/29631/application_of_icdm_for_the_conceptual_design_of_a_new_product`

#### **1. Quy trình 10 bước của ICDM và Đầu vào / Đầu ra cho hệ thống LF100**
Quy trình thiết kế hệ thống LF100 được tiến hành đồng bộ qua đúng **10 bước** có tên gốc tiếng Anh như sau:

*   **Step 1: Identification of the customers and their needs** (Nhận diện khách hàng và nhu cầu của họ):
    *   *Đầu vào:* VOC thô từ các cuộc phỏng vấn hiện trường.
    *   *Đầu ra:* Sơ đồ cây phân cấp nhu cầu của khách hàng (Figure 1).
    *   *LF100:* Phỏng vấn đối tượng cốt lõi là trẻ em dưới **9** tuổi và người lớn đi kèm.
*   **Step 2: Translation of the Voice of the Customer into the product definition and specification** (Dịch chuyển tiếng nói khách hàng sang định nghĩa và đặc tả sản phẩm):
    *   *Đầu vào:* Sơ đồ cây nhu cầu từ Step 1.
    *   *Đầu ra:* Ma trận House of Quality (Figure 2), Bảng thông số kỹ thuật (Table 1) và các đồ thị hàm số hài lòng CSR (Figure 3).
*   **Step 3: Abstraction and functional analysis, definition of the “basic problems”** (Trừu tượng hóa, phân tích chức năng và định nghĩa các vấn đề cơ bản):
    *   *Đầu vào:* Bản đặc tả thông số kỹ thuật sơ khởi từ Step 2.
    *   *Đầu ra:* Biểu đồ FAST (Functional Analysis System Technique) và danh sách các vấn đề cơ bản.
    *   *LF100:* Danh sách gồm 6 vấn đề cơ bản được bóc tách: (1) Cách đo khoảng cách từ trẻ đến cổng; (2) Cách tìm hướng của trẻ; (3) Cách hiển thị hướng; (4) Cách kiểm tra tín hiệu khẩn cấp từ trẻ; (5) Phương tiện truyền tín hiệu đến cha mẹ; (6) Cách phát âm thanh báo động. *(Lưu ý: Danh sách gồm 6 mục được đánh số từ 1 đến 6 nhưng văn bản không ghi trực tiếp từ "6 vấn đề" - không có trong nguồn về số đếm tổng vấn đề).*
*   **Step 4: Creation of solution principles for the “basic problems”** (Sáng tạo nguyên lý giải pháp cho các vấn đề cơ bản):
    *   *Đầu vào:* Danh sách các vấn đề cơ bản từ Step 3.
    *   *Đầu ra:* Ma trận hình thái Morphological Table chứa các giải pháp kỹ thuật tương ứng cho từng vấn đề.
*   **Step 5: Selection of evaluation criteria** (Lựa chọn các tiêu chí đánh giá):
    *   *Đầu vào:* Đặc tính sản phẩm và Target Values kỹ thuật từ QFD ở Step 2.
    *   *Đầu ra:* Bảng tiêu chí đánh giá được phân chia thành hai nhóm riêng biệt: Nhóm lọc thô **Group A** (bắt buộc bao phủ **tối thiểu 70%** mức độ hài lòng khách hàng) và Nhóm lọc tinh **Group B** (bắt buộc bao phủ **tối thiểu 95%** mức độ hài lòng).
*   **Step 6: Synthesis of primary concepts** (Tổng hợp các ý tưởng sơ khởi):
    *   *Đầu vào:* Ma trận hình thái từ Step 4.
    *   *Đầu ra:* Danh sách **13 ý tưởng khái niệm sơ khởi khả thi** (ví dụ: ý tưởng *VTCF* và *Two-way transmission*).
*   **Step 7: Evaluation of the primary concepts and selection of a few main concepts for further development** (Đánh giá sơ bộ và lựa chọn các ý tưởng chính):
    *   *Đầu vào:* 13 ý tưởng sơ khởi (Step 6) và nhóm tiêu chí lọc thô Group A (Step 5).
    *   *Đầu ra:* Rút gọn xuống chỉ còn đúng **6 ý tưởng chính** thông qua ma trận so sánh Pugh (chọn phương án *Bi-directional local* làm Datum quy chiếu).
*   **Step 8: Design, architecture, analysis and improvement of the main concepts** (Thiết kế kiến trúc, phân tích và cải tiến các ý tưởng chính):
    *   *Đầu vào:* 6 ý tưởng chính từ Step 7 và nhóm tiêu chí chi tiết Group B.
    *   *Đầu ra:* Bản phác thảo kiến trúc vật lý và các báo cáo phân tích định lượng chuyên sâu (**CFMA, CDTC, R&TTMA/RTA**).
*   **Step 9: Final concept selection** (Lựa chọn phương án ý tưởng chiến thắng cuối cùng):
    *   *Đầu vào:* Các báo cáo kỹ thuật từ Step 8.
    *   *Đầu ra:* Ý tưởng chiến thắng tối thượng thống nhất bởi toàn đội và biểu đồ phân tích hàm CSR tổng hợp đạt mức **89%**.
*   **Step 10: Project launch** (Khởi động dự án):
    *   *Đầu vào:* Ý tưởng chiến thắng từ Step 9 và điểm số CSR.
    *   *Đầu ra:* Hồ sơ phê duyệt System Design Review (SDR) và sự chấp thuận của ban giám đốc để bước sang pha FSD.

#### **2. Công thức toán học và Thang điểm (Formulas & Scoring)**
*   **Hàm tính toán rủi ro sớm CFMA (SFD Score):**
    \\[SFD = S \times F \times D\\]
    *Trong đó:* S là mức độ nghiêm trọng (Severity), F là tần suất xuất hiện (Frequency), D là khả năng phát hiện lỗi (Detection). Trị số SFD ban đầu lớn hơn **100** bắt buộc phải áp đặt hành động sửa đổi thiết kế.
*   **Hàm tính toán độ hài lòng khách hàng tích hợp tổng thể (Total CSR):**
    \\[Total\ CSR = \sum (W_k \times CSR_k)\\]
    *Trong đó:* \\(W_k\\) là trọng số tầm quan trọng (%) của đặc tính kỹ thuật k rút ra từ QFD (tổng bằng **100%**), \\(CSR_k\\) là điểm số hài lòng (%) của đặc tính đó đạt được từ hàm phi tuyến tính.
*   **Thang điểm đánh giá trong Ma trận hình thái (Figure 4):**
    Mỗi ô giải pháp kỹ thuật được gán một cặp điểm số theo quy ước: `[Lack of development risk, Performance]` (Điểm số chống rủi ro R&D phát triển, Điểm số hiệu năng hoạt động tương đối).
*   **Thang điểm của các tham số S, F, D:** **Không có tài liệu chi tiết mô tả dải chấm điểm từ 1 đến 10 cho các biến số Severity, Frequency và Detection trong tệp nguồn này (không có trong nguồn)**.

#### **3. Hệ thống Bảng biểu và Ma trận (Tables & Matrices)**
*   **Figure 1:** Hierarchical tree for the customer needs of LF100 (Sơ đồ cây phân cấp nhu cầu người dùng).
*   **Figure 2:** The House of Quality of LF100 (Ma trận HOQ của hệ thống).
*   **Table 1:** Specification Decision Table for LF100 (Bảng quyết định thông số kỹ thuật sơ khởi).
*   **Figure 3:** Sample of system CSR functions: Mission Reliability, Range, Alarm Volume (Hàm phi tuyến biểu diễn mức độ hài lòng khách hàng).
*   **Figure 4:** Morphologic table for LF100 (Ma trận hình thái đề xuất nguyên lý giải pháp cho 6 vấn đề cơ bản).
*   **Figure 5:** Evaluation criteria for the LF100 (Bảng phân bổ 15 tiêu chí đánh giá vào nhóm A và B).
*   **Figure 6:** Evaluation of the LF100 primary concepts using Pugh method (Ma trận Pugh lọc thô sơ khởi).
*   **Figure 8:** CFMA table for "Alert the escort" function (Bảng phân tích rủi ro hỏng hóc chức năng khẩn cấp).
*   **Figure 9:** Customer Satisfaction Rating (CSR) analysis for the final concept (Bảng tính điểm hài lòng tích hợp của phương án thắng cuộc).

#### **4. Trích lục nguyên văn cho các khẳng định chứa Số, Năm ban hành hoặc Phép đếm**
*   **Niên đại và địa điểm diễn ra Hội nghị Thiết kế Quốc tế (năm 2002):** 
    > `"INTERNATIONAL DESIGN CONFERENCE - DESIGN 2002 Dubrovnik, May 14 - 17, 2002."`.
*   **Thành phần và số lượng chuyên gia chạy thử nghiệm thực tế (6 kỹ sư, 15 - 20 năm kinh nghiệm):** 
    > `"A multi disciplinary team of six senior engineers, with 15 – 20 years of experience each, was nominated to perform the case study."`.
*   **Phân khúc tuổi của đối tượng trẻ em phỏng vấn (dưới 9 tuổi):** 
    > `"The LF100 team gathered the customers’ needs by interviewing field users. The main users are children up to 9 years old and the accompanying adults."`.
*   **Tỷ lệ bao phủ bắt buộc của dải tiêu chí Group A (70%) và Group B (95%):** 
    > `"This criteria group must cover at least 70% of the customer satisfaction according to their rating. Group B includes more criteria and covers at least 95% of the customer satisfaction."`.
*   **Số lượng ý tưởng sơ khởi được tổng hợp từ ma trận hình thái (13 ý tưởng):** 
    > `"In this step, the team marked 13 feasible solution concepts."`.
*   **Số lượng ý tưởng chính được chọn lọc qua Pugh để đi tiếp (6 ý tưởng từ 13 ý tưởng):** 
    > `"Out of the 13 primary concepts, 6 where selected as main concepts, for further development."`.
*   **Số lượng thay đổi thiết kế bắt buộc được kích hoạt sau khi chạy CFMA (10 thay đổi):** 
    > `"...in this example the process yielded 10 design changes."`.
*   **Hiệu quả cắt giảm điểm rủi ro chí mạng của CFMA (từ 320 xuống 60, giảm 81%):** 
    > `"...the maximum SFD figure was reduced from 320 to 60, which means that the criticality of the concept was reduced by 81%."`.
*   **Điểm chất lượng thiết kế tích hợp tổng thể của Winner Concept (89%):** 
    > `"The total Customer Satisfaction Rating according to the above was 89 %."` và `"The Customer Satisfaction Rating (CSR) that was achieved was 89% with a significant improvement in the product reliability and cost and with a relatively low development risk."`.

---
> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*
