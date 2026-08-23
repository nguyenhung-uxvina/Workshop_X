# Khai thác NLM — Nền móng Pahl-Beitz — bốn pha, lý thuyết hệ thống kỹ thuật, các chuỗi bước

> 🔴🔴 **CẢNH BÁO XUẤT XỨ — thêm 2026-08-22, KHÔNG sửa nội dung bên dưới.**
>
> File này viện dẫn **nguồn [41] `VDI 2221_2225 Engineering Design Process.pdf`** — **1 lần**.
> **Tệp ấy KHÔNG phải bản chuẩn VDI 2221/2225.** Đo bằng máy: `producer` =
> `Skia/PDF m142 Google Docs Renderer`, 15 trang, có mục *"Works cited"* dẫn ResearchGate; **không**
> có `Beuth`, **không** có `ICS`, **không** có dòng bản quyền. Đối chứng: 12 PDF khác cùng thư mục
> đều do Distiller/PDFlib/PDFsam sinh — **không cái nào do máy viết**.
>
> Nó là **một báo cáo do máy viết VỀ bản chuẩn, đội tên bản chuẩn**. Tệp đã đổi tên tại chỗ thành
> `[BÁO CÁO AI — KHÔNG phải bản chuẩn] VDI 2221-2225 Engineering Design Process.pdf`.
>
> **Hệ quả:** mọi mệnh đề trong file này gán cho [41] phải hạ xuống mức **nghi vấn** cho tới khi kiểm
> lại từ bản chuẩn mua của VDI/Beuth. Nội dung bên dưới **giữ nguyên làm vật chứng**.
>
> Phát hiện trong lúc viết `pahl-beitz-tap2` Chương 18. Chi tiết:
> `3_Resources/Books & Articles/Engineering Design/References_PDF/_XUAT_XU.md`



Ngày: 2026-08-20 | Cụm: `c1-nen-mong-pahl-beitz` | Truy vấn: 4

## Nguồn được dùng trong cụm này

- **[1]** engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf  — `systems`
- **[28]** (PDF) Development of an innovative conceptual design process by using Pahl and Beitz^|^apos;s sy  — `pahlbeitz`
- **[30]** A Systematic Review of Pahl and Beitz Engineering Design  — `pahlbeitz`
- **[35]** Engineering Design: A Systematic Approach | Springer Nature Link  — `pahlbeitz`
- **[36]** Extension of the Pahl & Beitz Systematic Method for Conceptual Design of a New Product.pdf  — `pahlbeitz`
- **[37]** Lecture 40/ Transforming a method ecosystem – The new Pahl/Beitz. Dr Kilian Gericke  — `pahlbeitz`
- **[40]** Systematic Engineering Design  — `pahlbeitz`
- **[41]** VDI 2221_2225 Engineering Design Process.pdf  — `pahlbeitz`
- **[42]** https://www.designsociety.org/download-publication/26782/a_review_of_the_fundamentals_of_systema  — `pahlbeitz`

## Đối chiếu khai báo nguồn theo từng truy vấn

| notebook | truy vấn | metadata khai | quét thân bài thấy | metadata bỏ sót |
|---|---|---|---|---|
| pahlbeitz | q2 | 28 | 30,35,36,37,40,41,42 | **30,35,36,37,40,41,42** |
| systems | q1 | 1 | 1 | **không** |
| systems | q2 | 1 | 1 | **không** |
| systems | q3 | 1 | 1 | **không** |

> Metadata bỏ sót **7/11** lượt nguồn (64%) ở cụm này.

## pahlbeitz — Methodology chi tiết

**Nguồn:** [28], [30], [35], [36], [37], [40], [41], [42]  *(metadata: 28 · quét thân bài: 30, 35, 36, 37, 40, 41, 42)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

### 1. TIẾN TRÌNH CÁC PHA VÀ TÊN GỌI GỐC CỦA CÁC BƯỚC (STEP-BY-STEP PROCESS & ORIGINAL NAMES)
Tiến trình thiết kế hệ thống của Pahl & Beitz được chia thành các giai đoạn chính (phases) và các bước kỹ thuật cốt lõi (basic steps) với tên gọi gốc, đầu vào (inputs) và đầu ra (outputs) cụ thể như sau:

#### **Phase 1: Start off with product planning and a clarification of the task**
*   **Step 1.1: Clarify the task and build out the specification and requirements**
    *   **Đầu vào (Input):** Yêu cầu nhiệm vụ thô từ khách hàng hoặc thị trường, thường chưa toàn diện và cần làm rõ thêm.
    *   **Đầu ra (Output):** Danh sách yêu cầu kỹ thuật hoàn chỉnh cùng các ràng buộc và điều kiện biên được tổng hợp đầy đủ.

#### **Phase 2: Conceptual design phase**
*   **Step 2.1: Abstract the task to identify the essential problem**
    *   **Đầu vào (Input):** Danh sách yêu cầu kỹ thuật và ràng buộc đầy đủ từ Phase 1.
    *   **Đầu ra (Output):** Mô tả cốt lõi của bài toán thiết kế một cách khái quát nhất, xác định rõ chức năng tổng thể (overall function).
*   **Step 2.2: Establish the functional structures**
    *   **Đầu vào (Input):** Chức năng tổng thể (overall function) vừa được xác lập.
    *   **Đầu ra (Output):** Cấu trúc chức năng (functional structures) biểu diễn ranh giới giải pháp và dòng chảy luân chuyển năng lượng, vật liệu và tín hiệu (thông tin) từ đầu vào đến đầu ra; chia nhỏ chức năng tổng thể thành các chức năng con.
*   **Step 2.3: Search for solution principles**
    *   **Đầu vào (Input):** Các chức năng con (sub-functions).
    *   **Đầu ra (Output):** Các nguyên lý giải pháp / nguyên lý hoạt động (solution principles) cho từng chức năng con.
*   **Step 2.4: Combine the solution principles into concept variants**
    *   **Đầu vào (Input):** Các nguyên lý giải pháp riêng lẻ cho từng chức năng con.
    *   **Đầu ra (Output):** Các phương án thiết kế khái niệm hoặc các biến thể giải pháp sản phẩm tổng thể (concept variants).
*   **Step 2.5: Evaluation of concept variants using technical and economic criteria**
    *   **Đầu vào (Input):** Các phương án thiết kế khái niệm (concept variants) cùng các tiêu chí đánh giá kỹ thuật và kinh tế.
    *   **Đầu ra (Output):** Lựa chọn phương án giải pháp tối ưu nhất để sản xuất, đồng thời chọn ra một hoặc hai phương án dự phòng (back-up solutions).

#### **Phase 3: Embodiment design**
*   **Step 3.1: Develop a definitive layout and check that the requirements are met**
    *   **Đầu vào (Input):** Các phương án thiết kế khái niệm được lựa chọn ở Phase 2.
    *   **Đầu ra (Output):** Bản bố trí định hình hoàn chỉnh (definitive layout) thể hiện hệ thống kỹ thuật thực tế và kiểm tra tính tương thích về mặt không gian lắp ráp, độ bền và chức năng.

#### **Phase 4: Carry out a detail design**
*   **Step 4.1: Detail design**
    *   **Đầu vào (Input):** Bản bố trí định hình hoàn chỉnh từ Phase 3.
    *   **Đầu ra (Output):** Lựa chọn chi tiết về vật liệu, cấu trúc hình dạng kỹ thuật, linh kiện và hoàn thiện bề mặt.
*   **Step 4.2: Documentation**
    *   **Input (Đầu vào):** Các thông số kỹ thuật chi tiết của linh kiện, vật liệu và bề mặt từ Step 4.1.
    *   **Output (Đầu ra):** Các bản vẽ thiết kế kỹ thuật cuối cùng được sử dụng trực tiếp để sản xuất sản phẩm.

---

### 2. LÝ THUYẾT HỆ THỐNG KỸ THUẬT (THEORY OF TECHNICAL SYSTEMS - TS MODEL)
Lý thuyết hệ thống kỹ thuật của Pahl & Beitz dựa trên mô hình TS (Technical System) mô tả sản phẩm bằng cách chuyển dịch dần từ mức độ trừu tượng cao nhất sang mức độ vật lý cụ thể:
*   **Chức năng tổng thể (Overall function) & Cấu trúc chức năng (Function structure):** Trình bày những gì sản phẩm phải làm (*"what the product must do"*) dưới dạng luồng luân chuyển năng lượng (energy), vật liệu (material) và tín hiệu/thông tin (signals) từ đầu vào đến đầu ra.
*   **Nguyên lý hoạt động (Working principle structure):** Trình bày cách thức sản phẩm thực hiện chức năng (*"how the product will do it"*), kết hợp hiệu ứng vật lý (physical effect) với các đặc tính hình học và vật liệu kỹ thuật.
*   **Cấu trúc linh kiện (Component / constructional structure):** Định hình bố cục không gian và cấu trúc vật lý thực tế của sản phẩm.

**Mối quan hệ logic (Logical Relationships):**
Pahl & Beitz sử dụng sơ đồ logic dựa trên **logic Boolean tiêu chuẩn** để mô tả dòng chức năng của hệ thống kỹ thuật thông qua các cổng logic chính:
*   **Cổng AND:** Quy định khi tất cả các chức năng nhánh phải đồng thời thực hiện để đạt kết quả.
*   **Cổng OR:** Quy định khi chỉ cần một trong các chức năng trong nhóm được hoàn thành để đạt kết quả.
*   Các cổng phủ định tương ứng như **NAND** và **NOR**.

---

### 3. CHI TIẾT METHODOLOGY (CÔNG THỨC, THANG ĐIỂM, BẢNG BIỂU, MA TRẬN)
Về các chi tiết nâng cao liên quan đến phép toán và đánh giá định lượng:
*   **Ma trận hình thái học (Morphological matrix / morphological chart):** Được Pahl & Beitz khuyến nghị áp dụng để tìm kiếm sự kết hợp nguyên lý giải pháp, tuy nhiên họ khuyên chỉ nên sử dụng cho một tập hợp con các chức năng con để kiểm soát sự bùng nổ tổ hợp.
*   **Công thức toán học cụ thể:** **không có trong nguồn** (các nguồn đang hoạt động không chứa công thức định lượng để tính toán điểm kỹ thuật hoặc kinh tế cho Pahl & Beitz).
*   **Thang điểm lượng hóa chi tiết:** **không có trong nguồn** (các nguồn đang hoạt động không đề xuất bất kỳ thang điểm định lượng cụ thể nào, ví dụ như thang 0-4 của tiêu chuẩn VDI 2225).
*   **Các bảng biểu đánh giá chi tiết:** **không có trong nguồn**.
> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

---

### 4. QUY TẮC MINH CHỨNG NGUYÊN VĂN CHO CÁC KHẲNG ĐỊNH SỐ, NĂM BAN HÀNH HOẶC PHÉP ĐẾM
Để tuân thủ nghiêm ngặt yêu cầu trích dẫn nguyên văn cho từng thông tin về số lượng, năm ban hành hoặc phép đếm trong nguồn, dưới đây là các câu trích dẫn tiếng Anh gốc tương ứng với nguồn tài liệu cụ thể:

*   **Năm 1977 (Ấn bản tiếng Đức Konstruktionslehre gốc)**:
    *   *Nguyên văn:* `"Original German Edition Konstruktionslehre: Handbuch für Stadium und Praxis Springer-Verlag, 1977"`
    *   *Tên file nguồn:* `Systematic Engineering Design`
    *   *Nguyên văn khác:* `"The 1st and 3rd German editions (1977, 1993) and the 2nd and 3rd English editions (1996, 2007) were consulted."`
    *   *Tên file nguồn:* `https://www.designsociety.org/download-publication/26782/a_review_of_the_fundamentals_of_systematic_engineering_design_process_models`

*   **Năm 1996 (Ấn bản tiếng Anh lần thứ 2)**:
    *   *Nguyên văn:* `"Copyright Information : Springer-Verlag London 1996"`
    *   *Tên file nguồn:* `Engineering Design: A Systematic Approach | Springer Nature Link`

*   **Năm 2007 (Ấn bản tiếng Anh lần thứ 3)**:
    *   *Nguyên văn:* `"Engineering Design: A Systematic Approach, Third Edition Translators and Editors: Ken Wallace and Luciënne T. M. Blessing Springer-Verlag London Limited, 2007"`
    *   *Tên file nguồn:* `Systematic Engineering Design`

*   **Năm 2021 (Ấn bản tiếng Đức lần thứ 9)**:
    *   *Nguyên văn:* `"the book p and bites now being in its ninth Edition in German language so we published the latest edition in 2021"`
    *   *Tên file nguồn:* `Lecture 40/ Transforming a method ecosystem – The new Pahl/Beitz. Dr Kilian Gericke`

*   **Khẳng định đếm số "5 tiêu chuẩn giải pháp" (five standard criteria)**:
    *   *Nguyên văn:* `"Adequate solutions must meet five standard criteria."`
    *   *Tên file nguồn:* `A Systematic Review of Pahl and Beitz Engineering Design`

*   **Khẳng định đếm số "28 đặc tính" nhiệm vụ thiết kế được chia vào "7 nhóm" (28 characteristics, 7 types)**:
    *   *Nguyên văn:* `"[Pahl & Beitz 1996] classifies the set of engineering design tasks with no less than 28 characteristics regrouped in 7 types (Origin of the task, Organisation, Novelty, Batch size, Branch, Complexity, Goals; see pp. 2-6)."`
    *   *Tên file nguồn:* `https://www.designsociety.org/download-publication/26782/a_review_of_the_fundamentals_of_systematic_engineering_design_process_models`

*   **Khẳng định đếm số "3 giai đoạn học tập" (three phases)**:
    *   *Nguyên văn:* `"The learning process incorporates three phases: a cognitive phase where the explicit knowledge of facts and rules is built; an associative phase where explicit knowledge is internalised by training and becomes implicit; and an autonomous phase where this knowledge is mastered and used in an almost automated way (see pp. 57-61)."`
    *   *Tên file nguồn:* `https://www.designsociety.org/download-publication/26782/a_review_of_the_fundamentals_of_systematic_engineering_design_process_models`

*   **Phép đếm "bốn pha chính" (four phases) trong quy trình thiết kế Pahl & Beitz**:
    *   *Trạng thái nguồn:* **không có trong nguồn** dưới dạng một câu khẳng định đếm số trực tiếp (mặc dù tài liệu liệt kê cấu trúc từng phần một từ Phase 1 đến Phase 4, không có câu tiếng Anh nào trong các nguồn đang hoạt động trực tiếp viết cụm từ "four phases" hoặc "4 phases" để đếm số lượng giai đoạn này của Pahl & Beitz).

*   **Phép đếm "năm bước con" trong giai đoạn thiết kế khái niệm**:
    *   *Trạng thái nguồn:* **không có trong nguồn** dưới dạng khẳng định phép đếm số trực tiếp. Con số "5 bước con" hoàn toàn là do tự tổng hợp bằng cách đếm các gạch đầu dòng từ Step 2.1 đến Step 2.5, văn bản gốc trong nguồn hoạt động không có khẳng định trực tiếp về số lượng này.

---
> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## systems — Luận điểm, framework, bằng chứng

**Nguồn:** [1]  *(metadata: 1 · quét thân bài: 1)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

---

### I. CÁC LUẬN ĐIỂM CHÍNH VÀ KẾT LUẬN (MAIN ARGUMENTS AND CONCLUSIONS)

Phương pháp luận thiết kế hệ thống Pahl-Beitz được xây dựng trên các luận điểm nền tảng sau:

1.  **Duy lý hóa quá trình thiết kế qua các bước logic**: Để hợp lý hóa việc thiết kế và chế tạo, nhà thiết kế cần áp dụng một chuỗi công việc được cấu trúc rõ ràng từ trừu tượng đến cụ thể. Phương pháp này giúp phân rã các bài toán phức tạp thành các bài toán phụ dễ kiểm soát hơn, đồng thời tối ưu hóa việc tái sử dụng tri thức và các giải pháp đã được kiểm chứng.
2.  **Thuyết hệ thống kỹ thuật là nền móng cốt lõi**: Mọi thực thể kỹ thuật (technical artefacts) — dù là một tổ hợp máy móc lớn hay một chi tiết nhỏ — đều phải được xem là một **hệ thống** liên hệ với môi trường thông qua các dòng đầu vào và đầu ra. Bản chất của mọi quy trình kỹ thuật là sự truyền dẫn và biến đổi năng lượng, vật liệu và tín hiệu.
3.  **Tối ưu hóa và kiểm soát chi phí ngay từ pha thiết kế ban đầu**: Hơn bất kỳ khâu nào khác trong vòng đời sản phẩm, chính quyết định ở các pha thiết kế sớm (đặc biệt là conceptual design) sẽ định hình và khóa lại phần lớn chi phí chế tạo lẫn độ tin cậy của sản phẩm sau này.
4.  **Giải pháp hệ thống hóa không dập tắt trực giác mà định hướng sáng tạo**: Việc áp dụng quy trình thiết kế logic, khoa học không làm mất đi tính sáng tạo nghệ thuật của người kỹ sư, mà nó tạo ra một "không gian giải pháp" (solution space) rộng lớn hơn, giúp sàng lọc và hội tụ các ý tưởng đột phá một cách có cơ sở.

---

### II. FRAMEWORKS, MÔ HÌNH VÀ QUY TRÌNH (FRAMEWORKS, MODELS AND PROCESSES)

Dưới đây là danh sách các mô hình cốt lõi được trình bày trong tài liệu, đi kèm tên gọi gốc tiếng Anh và số bước được xác minh nghiêm ngặt theo văn bản nguồn:

#### 1. Mô hình Bốn pha thiết kế sản phẩm (Four Phases of the Product Design Process)
*   **Tên gốc**: **Four phases of the product design process** (gồm: Task Clarification, Conceptual Design, Embodiment Design, Detail Design).
*   **Số pha**: **4 pha**.
*   **Chứng minh nguyên văn**: 
    > `"Of the four phases of the product design process, only the terminology used for the third, ‘embodiment design’, requires some explanation."`
    > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 7).

#### 2. Mô hình Quy trình thiết kế VDI 2221 (VDI Guideline 2221)
*   **Tên gốc**: **VDI Guideline 2221** (hoặc **VDI-Richtlinie 2221**).
*   **Số bước**: **7 bước công việc cơ bản** (seven basic working steps).
*   **Chứng minh nguyên văn**:
    > `"The approach (see Figure 1.9) includes seven basic working steps that accord with the fundamentals of technical systems (see Section 2.1) and company strategy (see Chapter 4)."`
    > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 18).

#### 3. Mô hình Ba kiểu biến đổi hệ thống kỹ thuật (Conversion of energy, material and signals)
*   **Tên gốc**: **Conversion of energy, material and signals** (biến đổi năng lượng, vật chất, và tín hiệu).
*   **Số dòng biến đổi**: **3 kiểu biến đổi**.
*   **Chứng minh nguyên văn**:
    > `"In most mechanical engineering applications, a combination of all three types of conversion is usually involved..."`
    > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 33).

#### 4. Quy trình giải quyết vấn đề tổng quát (General Problem Solving Process)
*   **Tên gốc**: **General problem solving process**.
*   **Số bước**: **6 bước** (Confrontation - Đối mặt bài toán, Information - Thu thập thông tin, Definition - Định nghĩa vấn đề, Creation - Sáng tạo giải pháp, Evaluation - Đánh giá, Decision - Quyết định).
*   **Chứng minh số bước**: **"không có trong nguồn"** câu phát biểu chính xác số bước (sách chỉ minh họa quy trình 6 bước trực quan qua Figure 4.1 và mô tả nội dung, không có câu tiếng Anh đếm số bước).

#### 5. Quy trình thiết kế ý tưởng (Conceptual Design Steps)
*   **Tên gốc**: **Steps of conceptual design**.
*   **Số bước**: **5 bước chính** (Abstracting to find the essential problems, Establishing function structures, Searching for working principles, Combining working principles, Selecting a suitable concept).
*   **Chứng minh số bước**: **"không có trong nguồn"** (nguồn chỉ liệt kê thành 5 gạch đầu dòng trong Editors' Foreword và sơ đồ Figure 6.1, không có câu văn chứa cụm từ đếm số lượng bước này).

#### 6. Quy trình thiết kế cụ thể hóa (Embodiment Design Steps)
*   **Tên gốc**: **Steps of embodiment design**.
*   **Số bước**: **15 bước**.
*   **Chứng minh số bước**: **"không có trong nguồn"** (văn bản gốc đánh số chi tiết từ 1 đến 15 trong mục 7.1 và sơ đồ Figure 7.1, không có câu văn phát biểu cụ thể "15 steps").

#### 7. Quy tắc cơ bản của Thiết kế cụ thể hóa (Basic Rules of Embodiment Design)
*   **Tên gốc**: **Basic Rules of Embodiment Design**.
*   **Số quy tắc**: **3 quy tắc** (Clarity - Rõ ràng, Simplicity - Đơn giản, Safety - An toàn).
*   **Chứng minh số quy tắc**: **"không có trong nguồn"** (văn bản gốc trình bày thành các mục con riêng biệt 7.3.1, 7.3.2, 7.3.3 và phát biểu `"On closer analysis it appears that clarity, simplicity and safety are fundamental to all of them and are important prerequisites for a successful solution."` nhưng không có câu tiếng Anh đếm cụ thể số lượng quy tắc là 3).

---

### III. VÍ DỤ CỤ THỂ VÀ CASE STUDY (EXAMPLES AND CASE STUDIES)

Để làm sáng tỏ lý thuyết, Pahl-Beitz sử dụng các case study thực tế lớn và trực quan:

*   **Thiết bị đo nhiên liệu (Fuel Gauge)**: Được sử dụng xuyên suốt Chương 5 và Chương 6 để minh họa chuỗi bước của thiết kế ý tưởng. Ví dụ này cho thấy cách nhà thiết kế dịch chuyển từ yêu cầu khách hàng sang thông số định lượng kỹ thuật (Table 6.1), mô hình hóa dòng tín hiệu (Figure 6.6), lập sơ đồ lựa chọn phương án (Figure 3.27) và hiện thực hóa thành cơ cấu cơ-điện cụ thể (Figure 6.21).
*   **Vòi trộn nước một tay (One-handed mixing tap)**: Case study điển hình cho một thiết kế lấy dòng vật chất (nước nóng, nước lạnh và nước pha trộn) làm chủ đạo. Ý tưởng tối ưu được lựa chọn là "Phương án xi lanh kết hợp cần gạt" (Cylinder solution with lever) nhờ cấu trúc hoạt động cân bằng và dễ dàng chế tạo.
*   **Bệ thử nghiệm tải trọng xung (Impulse-loading test rig)**: Case study phức tạp tập trung vào dòng năng lượng để kiểm tra độ bền của mối nối trục-trục. Case study này kéo dài từ pha thiết kế ý tưởng (Chương 6) đến pha thiết kế embodiment hoàn thiện (Chương 7), chứng minh cách tính toán cơ học thô cho các phần tử chịu lực (lực xung cực đại đạt `17.6 kN` trong thời gian `0.12 s`).
*   **Dữ liệu đo đạc thực nghiệm nguyên bản**: **"không có trong nguồn"** (tài liệu chỉ cung cấp các phương trình kỹ thuật, biểu đồ quy hồi tuyến tính so sánh xu hướng chi phí chứ không cung cấp bảng số liệu đo thô từ thực nghiệm).

---

### IV. BÀI HỌC THỰC HÀNH (PRACTICAL LESSONS)

Đối với việc **thiết kế các sản phẩm công nghiệp quốc phòng phục vụ huấn luyện**, phương pháp luận Pahl-Beitz để lại 3 bài học thực tiễn vô cùng sâu sắc:

1.  **Luôn "Trừu tượng hóa" trước khi bắt tay vào thiết kế cơ khí**: 
    Khi nhận một yêu cầu thiết kế thiết bị mô phỏng hoặc huấn luyện, bạn hãy gạt bỏ ngay các định kiến về vật liệu hay cơ cấu cũ trong đầu. Hãy phát biểu bài toán ở dạng trung lập (solution-neutral). Ví dụ, thay vì ghi "thiết kế bệ phóng sử dụng lò xo thép" (định kiến), hãy phát biểu là "tích trữ và giải phóng năng lượng cơ học đột ngột để đẩy vật thể". Điều này giúp bạn mở rộng tầm nhìn sang lò xo khí nén, hệ thống thủy lực, hay thậm chí là bệ phóng từ trường.
2.  **Sử dụng Ma trận Morphological để tổ hợp giải pháp**:
> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*
3.  **Tập trung vào dòng Main Flow (Dòng chính) trước**:
> *[KHU-02: NLM tự dựng một ví dụ trong lĩnh vực người dùng, không trích nguồn nào. Đã gỡ để không bị đọc nhầm thành nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

---

### V. ĐIỂM BẤT NGỜ HOẶC PHẢN TRỰC GIÁC (SURPRISING OR COUNTER-INTUITIVE POINTS)

Tài liệu này chỉ ra một số thực tế rất bất ngờ, đi ngược lại suy nghĩ thông thường của đa số kỹ sư:

*   **Sự thật về thời gian của pha Thiết kế Ý tưởng (Conceptual Phase)**:
    Mọi người thường nghĩ pha thiết kế ý tưởng chỉ là giai đoạn phác thảo tự do, "bão não" nhanh chóng. Tuy nhiên, nghiên cứu thực tế cho thấy **60% thời gian** của pha thiết kế ý tưởng thực chất lại được dành cho việc **tính toán thô và vẽ biểu diễn chính xác** (rough calculations and representation) để chứng minh tính khả thi của nguyên lý trước khi chốt concept.
    *   *Chứng minh nguyên văn*:
        > `"From research in industry and universities [6.8], it is known that calculating and representation add up to 60% of the total time spent on conceptual design."`
        > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 194).
    *   *Chứng minh nguyên văn thứ hai (khoảng 60% đến 70%)*:
        > `"However, the time normally needed in this phase for concretising ideas into principle solutions, for example through rough calculations, developing solutions, and analyses of various layouts, is about the same as when a systematic approach is not used, that is, around 60 to 70%."`
        > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 568).
*   **Nguồn gốc của lỗi hỏng hóc sản phẩm**:
    Trực giác thường đổ lỗi cho "nguyên lý hoạt động sai" khi sản phẩm hỏng. Nhưng Pahl-Beitz chỉ ra rằng, lỗi hầu hết nằm ở **pha lập kế hoạch và thiết kế chi tiết (detail design) cẩu thả**, chứ không phải do nguyên lý ý tưởng ban đầu. Thống kê cho thấy có tới **80% tổng số lỗi** có nguồn gốc từ khâu lập kế hoạch và thiết kế, và **60% lỗi hỏng hóc trong thời gian bảo hành** phát sinh do thiết kế sản phẩm không đầy đủ.
    *   *Chứng minh nguyên văn (về 80% lỗi)*:
        > `"Just as design commits a large proportion of a product’s costs (see Chapter 11), up to 80% of all faults can be traced back to insufficient planning, design and development [10.26]."`
        > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 517).
    *   *Chứng minh nguyên văn (về 60% lỗi trong bảo hành)*:
        > `"Furthermore, up to 60% of all breakdowns that occur within the warranty period are caused by incorrect or incomplete product development."`
        > (Nguồn: *engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf*, trang 517).
*   **Nghịch lý của việc giảm trọng lượng (Lightweight Construction)**:
    Kỹ sư cơ khí thường mặc định: "giảm khối lượng là giảm chi phí". Nhưng thực tế, cố gắng tối ưu hóa độ dày vật liệu để giảm cân nặng thường dẫn đến việc phải sử dụng các máy NC phức tạp, tăng hao phí phế liệu khi cắt tấm, và đẩy chi phí nhân công lên cao, khiến tổng chi phí chế tạo tăng vọt.

---

### VI. PHỤ LỤC: CÁC MỐC NĂM BAN HÀNH QUAN TRỌNG ĐƯỢC XÁC MINH NGUYÊN VĂN

*   **Năm 1977 (Ấn bản tiếng Đức lần 1)**: `"The first German edition of Konstruktionslehre was published in 1977."`
*   **Năm 1984 (Ấn bản tiếng Anh lần 1)**: `"The first English edition entitled Engineering Design was published in 1984 and was a full translation of the German text."`
*   **Năm 1986 (Ấn bản tiếng Đức lần 2)**: `"To keep up-to-date with the changes, a second German edition was published in 1986."`
*   **Năm 1988 (Ấn bản rút gọn dành cho sinh viên)**: `"However, since the translation was being extensively used to support engineering design teaching, a slightly abridged student edition entitled Engineering Design – A Systematic Approach was published in 1988."`
*   **Năm 1993 (Ấn bản tiếng Đức lần 3)**: `"In 1993 an updated and extended third German edition of Konstruktionslehre was published."`
*   **Năm 1997 (Ấn bản tiếng Đức lần 4), Năm 2003 (Ấn bản tiếng Đức lần 5), Năm 2005 (Ấn bản tiếng Đức lần 6)**: `"There are now six German editions of Pahl/Beitz (4th 1997; 5th 2003; 6th 2005)—so it is timely to produce a third English edition."`
*   **Năm 2006 (Ấn bản tiếng Anh lần 3 - Bản dịch hiện tại)**: `"Ken Wallace and Luciënne Blessing Cambridge and Berlin, November 2006"`.

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## systems — Methodology chi tiết

**Nguồn:** [1]  *(metadata: 1 · quét thân bài: 1)*

### 1. Bốn pha trong Quy trình Thiết kế Kỹ thuật (Four Phases of the Product Design Process)

Phương pháp luận thiết kế hệ thống của Pahl và Beitz chia quy trình thiết kế thành **bốn pha cốt lõi**. 

*Về phép đếm số lượng 4 pha thiết kế:* 
*   **Trích nguyên văn câu tiếng Anh trong nguồn:** `"Of the four phases of the product design process, only the terminology used for the third, ‘embodiment design’, requires some explanation."`
*   **Tên file nguồn:** `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`.

---

#### Pha 1: Hoạch định và Làm rõ nhiệm vụ (Planning and Task Clarification)
*   **Đầu vào (Inputs):** Đơn đặt hàng phát triển sản phẩm từ bộ phận marketing, đề xuất sản phẩm từ bộ phận hoạch định sản phẩm, đơn đặt hàng cụ thể từ khách hàng, hoặc các yêu cầu cải tiến bắt nguồn từ các phản hồi/khiếu nại kỹ thuật.
*   **Đầu ra (Outputs):** Hồ sơ đặc tả thông tin dưới dạng **Danh sách yêu cầu (Requirements List / Design Specification)**.
*   **Quy trình từng bước:**
    *   *Bước 1:* Phân tích tình huống thị trường và năng lực doanh nghiệp để hình thành ý tưởng sản phẩm (Hoạch định sản phẩm - Product Planning).
    *   *Bước 2:* Làm rõ nhiệm vụ thiết kế bằng cách xác định các yêu cầu và ràng buộc cụ thể của sản phẩm phối hợp chặt chẽ với khách hàng hoặc người đề xuất.
    *   *Bước 3:* Phân loại các yêu cầu thành **Yêu cầu bắt buộc (Demands - D)** và **Yêu cầu mong muốn (Wishes - W)**, đồng thời định lượng hóa tối đa các thông số kỹ thuật.
    *   *Bước 4:* Lập bảng danh sách yêu cầu theo mẫu chuẩn, gửi lưu hành nội bộ giữa các phòng ban liên quan để lấy ý kiến phản hồi và cập nhật liên tục.
    *   *Về phép đếm số lượng bước trong Pha 1:* **"không có trong nguồn"** câu văn tiếng Anh phát biểu chính xác số lượng bước của pha này, tuy nhiên tiến trình công việc được mô tả chi tiết từ mục 5.1 đến 5.2.

---

#### Pha 2: Thiết kế ý tưởng (Conceptual Design)
*   **Đầu vào (Inputs):** Danh sách yêu cầu (Requirements List) đã được chốt và cập nhật liên tục ở pha trước.
*   **Đầu ra (Outputs):** Bản đặc tả **Giải pháp nguyên lý hay Ý tưởng sản phẩm (Principle Solution / Concept)**.
*   **Quy trình từng bước (Theo tiến trình chi tiết tại Chương 6 và Figure 6.1):**
    *   *Bước 1 (Abstracting to identify the essential problems):* Trừu tượng hóa để xác định cốt lõi của nhiệm vụ thiết kế. 
        *   *Kỹ thuật thực hiện gồm 5 bước con:*
            1. Loại bỏ các sở thích, định kiến cá nhân.
            2. Bỏ qua các yêu cầu không ảnh hưởng trực tiếp đến chức năng và ràng buộc chính.
            3. Chuyển đổi dữ liệu định lượng thành định tính và cô đọng thành các phát biểu cốt lõi.
            4. Khái quát hóa các kết quả vừa thu được.
            5. Phát biểu bài toán dưới dạng trung lập với giải pháp (solution-neutral).
    *   *Bước 2 (Establishing function structures):* Thiết lập cấu trúc chức năng (bao gồm xác định chức năng tổng thể - overall function và các chức năng thành phần - subfunctions) dựa trên các luồng chuyển đổi năng lượng, vật liệu và tín hiệu.
    *   *Bước 3 (Searching for working principles):* Tìm kiếm các nguyên lý hoạt động để đáp ứng từng chức năng thành phần.
    *   *Bước 4 (Combining working principles into working structures):* Kết hợp các nguyên lý hoạt động đơn lẻ thành các cấu trúc hoạt động tổng thể của giải pháp.
    *   *Bước 5 (Selecting suitable combinations):* Sử dụng biểu đồ lựa chọn (selection chart) để loại bỏ các phương án không khả thi và chọn ra các kết hợp hứa hẹn.
    *   *Bước 6 (Firming up into principle solution variants):* Cụ thể hóa các cấu trúc hoạt động đã chọn thành các phương án giải pháp nguyên lý thông qua tính toán sơ bộ và vẽ phác thảo tỉ lệ.
    *   *Bước 7 (Evaluating variants against technical and economic criteria):* Đánh giá các phương án giải pháp nguyên lý dựa trên cả tiêu chí kỹ thuật và kinh tế.
    *   *Bước 8 (Chốt phương án Concept):* Quyết định lựa chọn phương án nguyên lý tối ưu nhất để chuyển giao sang pha tiếp theo.
    *   *Về phép đếm số lượng bước trong Pha 2:* **"không có trong nguồn"** câu văn tiếng Anh phát biểu chính xác số lượng bước của pha này. Mặc dù Figure 6.1 chỉ ra sơ đồ chuỗi bước logic, văn bản chỉ mô tả các hoạt động chính một cách tuần tự.

---

#### Pha 3: Thiết kế cụ thể hóa (Embodiment Design)
*   **Đầu vào (Inputs):** Ý tưởng sản phẩm / Giải pháp nguyên lý (Concept / Principle Solution) đã được lựa chọn.
*   **Đầu ra (Outputs):** Bản đặc tả **Bố cục thiết kế hoàn chỉnh (Layout / Definitive Layout / Construction)**.
*   **Quy trình từng bước (Theo chuỗi 15 bước logic của mục 7.1 và Figure 7.1):**
    *   *Bước 1:* Xác định các yêu cầu kỹ thuật có ảnh hưởng quyết định đến cụ thể hóa (kích thước, sắp xếp hình học, vật liệu) từ Danh sách yêu cầu.
    *   *Bước 2:* Xác định các ràng buộc không gian xung quanh sản phẩm.
    *   *Bước 3:* Xác định các phần tử đảm nhận chức năng chính (main function carriers) quyết định bố cục tổng thể.
    *   *Bước 4:* Phát triển bản vẽ bố cục tỉ lệ sơ bộ và thiết kế hình dạng cho các phần tử đảm nhận chức năng chính này.
    *   *Bước 5:* Lựa chọn một hoặc nhiều bố cục sơ bộ phù hợp nhất.
    *   *Bước 6:* Phát triển bố cục sơ bộ và thiết kế hình dạng cho các phần tử chức năng chính còn lại.
    *   *Bước 7:* Xác định các chức năng phụ trợ thiết yếu (đỡ, giữ, làm kín, làm mát) và tìm kiếm giải pháp đáp ứng.
    *   *Bước 8:* Phát triển bản vẽ bố cục chi tiết và thiết kế hình dạng cho các phần tử chức năng chính, đảm bảo tính chuẩn hóa và tính tương thích với các chức năng phụ trợ.
    *   *Bước 9:* Phát triển bản vẽ bố cục chi tiết và thiết kế hình dạng cho các phần tử chức năng phụ trợ.
    *   *Bước 10:* Kết hợp tất cả các phần tử chức năng thành bản vẽ bố cục tổng thể sơ bộ.
    *   *Bước 11:* Chốt phương án bố cục tổng thể sơ bộ (preliminary overall layout) mô tả đầy đủ cấu trúc cấu tạo kỹ thuật.
    *   *Bước 12:* Tối ưu hóa và hoàn thiện thiết kế hình dạng bằng cách loại bỏ các điểm yếu được phát hiện trong quá trình đánh giá.
    *   *Bước 13:* Kiểm tra kỹ lưỡng lỗi thiết kế (design faults) về mặt động học, độ bền, lắp ráp, vận hành và ảnh hưởng của các yếu tố gây nhiễu.
    *   *Bước 14:* Lập danh mục phụ tùng sơ bộ (preliminary parts list) cùng tài liệu chế tạo và lắp ráp sơ bộ.
    *   *Bước 15:* Chốt bố cục cụ thể hóa hoàn chỉnh (definitive layout) để chuyển giao sang pha tiếp theo.
    *   *Về phép đếm số lượng bước trong Pha 3:* **"không có trong nguồn"** câu văn tiếng Anh phát biểu chính xác số lượng bước (mặc dù tài liệu đánh số từ 1 đến 15 trong mục 7.1).

---

#### Pha 4: Thiết kế chi tiết (Detail Design)
*   **Đầu vào (Inputs):** Bố cục cụ thể hóa hoàn chỉnh (Definitive Layout).
*   **Đầu ra (Outputs):** Bộ **Tài liệu sản xuất / Hồ sơ kỹ thuật hoàn chỉnh (Production Documentation)** bao gồm các bản vẽ chế tạo chi tiết, danh mục vật tư thành phẩm và các hướng dẫn vận hành.
*   **Quy trình từng bước (Theo Figure 7.164):**
    *   *Bước 1:* Hoàn thiện các chi tiết cụ thể hóa và hoàn thành bản vẽ chi tiết các bộ phận cấu thành (complete detail drawings).
    *   *Bước 2:* Tích hợp các bộ phận đơn lẻ vào bản vẽ bố cục tổng thể, bản vẽ lắp ráp và danh mục phụ tùng (parts lists).
    *   *Bước 3:* Hoàn thiện hồ sơ kỹ thuật phục vụ sản xuất với đầy đủ hướng dẫn chế tạo, lắp ráp, vận chuyển và vận hành sản phẩm.
    *   *Bước 4:* Kiểm tra lại toàn bộ hồ sơ thiết kế về tính chuẩn hóa (standards), tính đầy đủ (completeness) và tính chính xác (correctness).
    *   *Bước 5:* Chốt giải pháp và đóng gói toàn bộ hồ sơ tài liệu kỹ thuật của sản phẩm.
    *   *Về phép đếm số lượng bước trong Pha 4:* **"không có trong nguồn"** câu văn tiếng Anh phát biểu chính xác số lượng bước của pha này.

---

### 2. Lý thuyết Hệ thống Kỹ thuật (Fundamentals of Technical Systems)

Hệ thống kỹ thuật được Pahl và Beitz đặt làm trung tâm của quy trình thiết kế hệ thống. Một thực thể kỹ thuật được coi là một hệ thống dynamic kết nối với môi trường thông qua các đầu vào và đầu ra vượt qua ranh giới hệ thống (system boundary).

#### Sự chuyển đổi Năng lượng, Vật liệu và Tín hiệu (Conversion of Energy, Material and Signals)
Mọi quá trình kỹ thuật đều liên quan đến việc dẫn truyền và chuyển đổi ba đại lượng cơ bản theo thời gian:
*   **Energy (Năng lượng):** Cơ năng, nhiệt năng, điện năng, hóa năng, quang năng, lực, mô-men xoắn, dòng điện...
*   **Material (Vật liệu):** Thể khí, thể lỏng, thể rắn, phôi, chi tiết gia công, bán thành phẩm, thành phẩm...
*   **Signals (Tín hiệu):** Chỉ số đo lường, hiển thị quang học, xung điều khiển, dữ liệu, thông tin...

Các loại chuyển đổi này được phân loại thành luồng chính (main flow) và các luồng phụ trợ (subsidiary/auxiliary flows):
*   **Machines (Máy móc):** Hệ thống kỹ thuật có luồng chính là **năng lượng**.
*   **Apparatus (Thiết bị công nghệ):** Hệ thống kỹ thuật có luồng chính là **vật liệu**.
*   **Devices (Dụng cụ/Thiết bị đo):** Hệ thống kỹ thuật có luồng chính là **tín hiệu**.

---

#### Các mối quan hệ tương tác cốt lõi trong Hệ thống Kỹ thuật (Technical Interrelationships)

```
[Requirements] ──> [Overall Function] ──> [Subfunctions] ──(Function Structure)
                                                                 │
                                                                 ▼
[Physical Effects] + [Geometry & Materials] ───────────────> [Working Principles] ──(Working Structure)
                                                                 │
                                                                 ▼
[Components, Joints & Assemblies] ─────────────────────────> [Construction Structure]
                                                                 │
                                                                 ▼
[Intended/Input/Feedback Effects] ─────────────────────────> [System Interrelationship]
```

1.  **Mối quan hệ chức năng (Functional Interrelationship):**
    *   Mối quan hệ đầu vào/đầu ra của hệ thống được mô tả bằng **Chức năng (Function)**, biểu diễn trừu tượng độc lập với giải pháp vật lý cụ thể dưới dạng **[Động từ + Danh từ]** (ví dụ: "tăng áp suất", "truyền mô-men", "giảm tốc độ").
    *   Các chức năng thành phần được tổ chức logic (như chuỗi nối tiếp, song song, mạch cầu) và liên kết với nhau bằng logic nhị phân (phép toán Boolean: AND, OR, NOT/Inhibition) được mô tả trong bảng chân trị (truth tables) để tối đa hóa độ an toàn và tin cậy.
2.  **Mối quan hệ hoạt động (Working Interrelationship):**
    *   Được hình thành bằng cách kết hợp các **Hiệu ứng vật lý (Physical Effects)** với các **Đặc tính hình học và vật liệu (Geometric and Material Characteristics)** cụ thể tại vị trí làm việc (working location).
    *   Các hiệu ứng được mô tả bằng các định luật vật lý (định luật ma sát Coulomb \\(F_F = \mu F_N\\), định luật đòn bẩy \\(F_A \cdot a = F_B \cdot b\\), định luật giãn nở nhiệt \\(\Delta l = \alpha \cdot l \cdot \Delta \vartheta\\)).
    *   Đặc tính hình học bao gồm bề mặt làm việc (working surfaces) được định hình bởi năm yếu tố: Loại, Hình dạng, Vị trí, Kích thước, Số lượng. Chuyển động làm việc (working motions) được định hình bởi: Loại, Bản chất, Hướng, Cường độ, Số lượng. Sự kết hợp này tạo ra **Nguyên lý hoạt động (Working Principle)**.
3.  **Mối quan hệ cấu tạo (Constructional Interrelationship):**
    *   Cụ thể hóa cấu trúc hoạt động thành cấu trúc chế tạo thực tế, xác định rõ ràng các cấu phần (chi tiết máy, cụm lắp ráp, mối nối kỹ thuật), đáp ứng các yêu cầu sản xuất, lắp ráp và vận chuyển.
4.  **Mối quan hệ hệ thống (System Interrelationship):**
    *   Xác định vị trí của hệ thống trong mối tương tác với con người và môi trường xung quanh, phân biệt rõ năm loại hiệu ứng: **Hiệu ứng mong muốn (Intended effect)**, **Hiệu ứng đầu vào (Input effect)**, **Hiệu ứng phản hồi (Feedback effect)**, **Hiệu ứng gây nhiễu (Disturbing effect)**, và **Hiệu ứng phụ không mong muốn (Side effect)**.

---

### 3. Phương pháp luận Đánh giá (Methodology & Evaluation Formulas)

#### Các thang điểm đánh giá (Scoring Scales)
*   **Phân tích Giá trị sử dụng / Phân tích Lợi ích - Chi phí (Cost–Benefit Analysis / Use-Value Analysis):** Sử dụng thang điểm từ **0 đến 10**.
*   **Hướng dẫn VDI Guideline 2225:** Sử dụng thang điểm thô từ **0 đến 4**.

*Trích nguyên văn câu tiếng Anh trong nguồn về hai thang điểm này:*
`"The values are expressed by points. Cost–Benefit Analysis employs a range from 0 to 10; Guideline VDI 2225 a range from 0 to 4 (see Figure 3.31)."`
*Tên file nguồn:* `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`.

##### Ý nghĩa của các mức điểm theo VDI 2225 và Phân tích Giá trị sử dụng (Figure 3.31):
*   *Về ý nghĩa cụ thể bằng câu văn:* **"không có trong nguồn"** (nguồn chỉ hiển thị thông tin này dưới dạng bảng so sánh đối chiếu trực quan tại Figure 3.31 / multimodal_7, không có câu văn xuôi mô tả nguyên văn toàn bộ). Ý nghĩa các mức điểm trong bảng:
    *   **Mức 0:** "absolutely useless solution" (Phân tích Giá trị sử dụng) / "unsatisfactory" (VDI 2225).
    *   **Mức 1:** "very inadequate solution" (Phân tích Giá trị sử dụng) / "just tolerable" (VDI 2225).
    *   **Mức 2:** "weak solution" (Phân tích Giá trị sử dụng) / "adequate" (VDI 2225).
    *   **Mức 3:** "tolerable solution" (Phân tích Giá trị sử dụng) / "good" (VDI 2225).
    *   **Mức 4:** "adequate solution" (Phân tích Giá trị sử dụng) / "very good (ideal)" (VDI 2225).
    *   *(Các mức điểm từ 5 đến 10 chỉ có trong thang điểm Phân tích Giá trị sử dụng: 5 - satisfactory; 6 - good with few drawbacks; 7 - good; 8 - very good; 9 - exceeding the requirement; 10 - ideal)*.

---

#### Các công thức tính toán giá trị và hệ số xếp hạng (Formulas):

##### Giá trị tổng quát chưa trọng số (Unweighted Overall Value - $OV_j$):
$$OV_j = \sum_{i=1}^{n} v_{ij}$$

##### Giá trị tổng quát có trọng số (Weighted Overall Value - $OWV_j$):
$$OWV_j = \sum_{i=1}^{n} w_i \cdot v_{ij} = \sum_{i=1}^{n} wv_{ij}$$

*Trong đó, tổng trọng số của các tiêu chí đánh giá phải luôn bằng 1.0 (hoặc 100%):*
*   **Trích nguyên văn câu tiếng Anh trong nguồn:** `"The sum of the weighting factors for any one level must always be equal to \sum w_i = 1.0."`
*   **Tên file nguồn:** `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`.

##### Hệ số xếp hạng chưa trọng số (Unweighted Rating - $R_j$):
$$R_j = \frac{OV_j}{v_{max} \cdot n} = \frac{\sum_{i=1}^{n} v_{ij}}{v_{max} \cdot n}$$

##### Hệ số xếp hạng có trọng số (Weighted Rating - $WR_j$):
$$WR_j = \frac{OWV_j}{v_{max} \cdot \sum_{i=1}^{n} w_i} = \frac{\sum_{i=1}^{n} w_i \cdot v_{ij}}{v_{max} \cdot \sum_{i=1}^{n} w_i}$$

##### Hệ số xếp hạng kinh tế theo VDI 2225 (Economic Rating - $Re$):
Đánh giá mức độ hiệu quả kinh tế bằng cách so sánh chi phí chế tạo ước tính của phương án (\\(C_{variant}\\)) với chi phí chế tạo so sánh tiêu chuẩn (\\(C_o\\)):
$$Re = \frac{C_o}{C_{variant}}$$

*Trong đó, chi phí tiêu chuẩn so sánh thường được chọn dựa trên mức chi phí cho phép tối đa hoặc chi phí tối thiểu:*
*   **Trích nguyên văn câu tiếng Anh trong nguồn:** `"It is possible to put, say, Co = 0.7 \times Cadmissible or Co = 0.7 \times Cminimum for the cheapest variant."`
*   **Tên file nguồn:** `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`.

##### Công thức tích hợp Hệ số xếp hạng tổng hợp (Overall Rating - $R$):
Để kết hợp hệ số xếp hạng kỹ thuật (\\(R_t\\)) và hệ số xếp hạng kinh tế (\\(R_e\\)), Baatz đề xuất hai phương pháp tính toán cụ thể:

*Về phép đếm số lượng phương pháp đề xuất:*
*   **Trích nguyên văn câu tiếng Anh trong nguồn:** `"To that end, Baatz [3.1] has proposed two procedures, namely:"`
*   **Tên file nguồn:** `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`.

1.  **Phương pháp đường thẳng (Straight-line method - trung bình cộng):**
    $$R = \frac{R_t + R_e}{2}$$
2.  **Phương pháp Hyperbol (Hyperbolic method - trung bình nhân):**
    $$R = \sqrt{R_t \times R_e}$$

*Phương pháp Hyperbol được ưu tiên lựa chọn vì nó giúp giảm điểm tổng hợp một cách lũy tiến nếu có sự mất cân bằng lớn giữa khía cạnh kỹ thuật và kinh tế, từ đó hướng nhà thiết kế đến các giải pháp hài hòa và bền vững.*

---

#### Các bảng biểu và ma trận công cụ (Charts and Matrices)

*   **Ma trận Morphological (Morphological Matrix):** Công cụ biểu diễn không gian giải pháp bằng cách liệt kê các chức năng thành phần ở các dòng và các giải pháp nguyên lý tương ứng ở các cột. Việc kết hợp một giải pháp cho mỗi dòng sẽ tạo nên một cấu trúc hoạt động hoàn chỉnh.
*   **Biểu đồ lựa chọn (Selection Chart):** Sử dụng ở bước sơ tuyển ý tưởng dựa trên các tiêu chí nhị phân loại trừ (Yes/No) bao gồm: Tính tương thích, Sự đáp ứng các yêu cầu bắt buộc, Khả thi về mặt nguyên lý, Nằm trong giới hạn chi phí cho phép, Đảm bảo các biện pháp an toàn trực tiếp, Được ưu tiên bởi năng lực công ty.
*   **Ma trận so sánh cặp / Ma trận ưu thế (Dominance Matrix):** Sử dụng để so sánh sơ bộ các phương án khi các thông số kỹ thuật chưa được định lượng rõ ràng. Phương án này được so sánh trực tiếp với phương án kia theo từng tiêu chí, gán giá trị nhị phân (**1** nếu tốt hơn, **0** nếu kém hơn hoặc bằng), tổng hợp điểm số theo cột để xác định thứ hạng ưu tiên.

---

### 4. Bảng tổng hợp các mốc lịch sử phát triển phương pháp luận (Historical Milestones)

Dưới đây là các mốc thời gian quan trọng định hình nên phương pháp luận thiết kế hệ thống được trích dẫn trực tiếp trong tài liệu:

| Năm / Thời kỳ | Sự kiện lịch sử & Nội dung đóng góp | Trích dẫn nguyên văn câu tiếng Anh chứng minh & File nguồn |
| :--- | :--- | :--- |
| **Năm 1942** | Kesselring lần đầu tiên giải thích cơ sở phương pháp xấp xỉ liên tiếp của ông, đánh giá dựa trên tiêu chí kỹ thuật và kinh tế (tiền thân của VDI 2225). | `"Kesselring [1.98] first explained the basis of his method of successive approximations in 1942 (for a summary see [1.96, 1.97] and VDI Guideline 2225 [1.195])."`<br>*(File: engineering-design-a-systematic-approach...)* |
| **Đầu thập niên 1950** | Hansen và trường phái IlmenauSchool (Bischoff, Bock) lần đầu tiên đưa ra các đề xuất thiết kế hệ thống. | `"Hansen and other members of the Ilmenau School (Bischoff, Bock) first put forward their systematic design proposals in the early 1950s [1.21, 1.25, 1.78]."`<br>*(File: engineering-design-a-systematic-approach...)* |
| **Năm 1965** | Hansen xuất bản cuốn sách tiêu chuẩn ấn bản lần thứ hai trình bày hệ thống thiết kế toàn diện hơn. | `"Hansen presented a more comprehensive design system in the second edition of his standard work published in 1965 [1.77]."`<br>*(File: engineering-design-a-systematic-approach...)* |
| **Năm 1971** | Sách của French xuất bản mở ra thuật ngữ "thiết kế cụ thể hóa" (Embodiment Design). | `"The idea to introduce the term embodiment design came from French’s book, Engineering Design: The Conceptual Stage, published in 1971."`<br>*(File: engineering-design-a-systematic-approach...)* |
| **Năm 1974** | Hansen xuất bản tác phẩm lý thuyết thiết kế "Science of Design" (Konstruktionswissenschaft). | `"In 1974 Hansen published another work, entitled Konstruktionswissenschaft (Science of Design) [1.76]."`<br>*(File: engineering-design-a-systematic-approach...)* |

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

## systems — Phê bình, giới hạn, điều kiện thất bại

**Nguồn:** [1]  *(metadata: 1 · quét thân bài: 1)*

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*

Dưới đây là phân tích chi tiết từ góc nhìn phê bình đối với **Nền móng Pahl-Beitz**, được đối chiếu trực tiếp và nghiêm ngặt với nội dung của tài liệu **"Engineering Design: A Systematic Approach" (Third Edition, 2006)**.

---

### I. SỰ ĐÁNH ĐỔI (TRADE-OFFS) VÀ GIỚI HẠN DO CHÍNH CÁC TÁC GIẢ THỪA NHẬN

Dù là những người tiên phong cổ vũ mạnh mẽ cho phương pháp thiết kế hệ thống, G. Pahl và W. Beitz rất thẳng thắn khi chỉ ra các giới hạn nội tại của phương pháp này trong thực tế:

#### 1. Sự trừu tượng hóa quá mức cản trở việc tìm kiếm giải pháp trực tiếp
Việc chuyển đổi các chức năng đặc thù của bài toán sang "các chức năng có giá trị tổng quát" (generally valid functions) nhằm mở rộng không gian giải pháp có một tác dụng phụ lớn: nó có thể làm lu mờ bản chất kỹ thuật cụ thể và ngăn cản tư duy tìm giải pháp trực tiếp của kỹ sư.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"A comparison between the functional representations in Figures 2.5 and 2.8 shows that the description that uses generally valid functions has a higher level of abstraction. For this reason, it leaves open all possible solutions and makes a systematic approach easier. However, using generally valid functions can represent a problem because such an abstract level can sometimes hin-der the direct search for solutions."* `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)
    *   *Áp dụng trong công nghiệp:* Trong môi trường thực tế, việc xây dựng cấu trúc chức năng từ các khối quá chung chung đôi khi bị coi là lý thuyết suông và không thực tế:
        *   *Trích dẫn tiếng Anh:* `"In many cases in industry it may not be expedient to build up a function structure from generally valid subfunctions, because they are, in fact, too general and thus do not provide a sufficiently concrete picture of the relationships to aid the sub-sequent search for solutions."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 2. Rủi ro phình to không gian giải pháp và gánh nặng thời gian ở pha Ý tưởng (Conceptual Phase)
Mô hình Pahl-Beitz yêu cầu thiết kế theo tiến trình (process-oriented) — phát triển song song tất cả các vùng chức năng từ trừu tượng đến cụ thể. Sự đánh đổi lớn nhất ở đây là kỹ sư phải trả giá bằng một lượng thời gian khổng lồ để khảo sát những phương án không khả thi, tạo ra một không gian giải pháp phình to không cần thiết.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"The process-oriented approach largely avoids the potential disadvantages of the problem-oriented approach. However, more time is required because of the wider, more systematic perspective. This carries the danger of generating an unnecessarily large solution space."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)
    *   *Ý kiến phản biện về thời gian trong thực tế:* `"The objection is often raised that applying a systematic approach during the conceptual design phase takes too much time."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 3. Định kiến ẩn trong cấu trúc chức năng (Presuppositions)
Mặc dù mục tiêu của cấu trúc chức năng là "trung lập với giải pháp" (solution-neutral), các tác giả thừa nhận rằng hầu như không thể xây dựng một cấu trúc chức năng hoàn toàn thoát ly khỏi các định kiến vật lý hoặc hình học sẵn có trong đầu nhà thiết kế. Điều này vô hình trung giới hạn các giải pháp đột phá ngay từ bước đầu.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"Moreover, it should be remembered that function structures are seldom com-pletely free of physical or formal presuppositions, which means that the number of possible solutions is inevitably restricted to some extent."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 4. Tính chủ quan cao trong các ma trận lựa chọn và đánh giá điểm số
Các bảng đánh giá (như VDI 2225 hay phân tích chi phí - lợi ích) thường tạo ra cảm giác "khoa học và chính xác" giả tạo thông qua các con số, nhưng thực chất chúng bị chi phối mạnh mẽ bởi thành kiến cá nhân của người đánh giá.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"All in all, therefore, the assignment of a value, the selection of a value func-tion and the setting up of an assessment scheme may involve strong subjective influences. Cases with a clear, or even experimentally verified, correlation between the values and the parameters are few and far between."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)
    *   *Rủi ro về con số:* Việc gán điểm số định lượng khi chưa có đủ thông tin chính xác là cực kỳ nguy hiểm vì nó che giấu đi sự mơ hồ thực tế:
        *   *Trích dẫn tiếng Anh:* `"With regard to prognostic uncertainty, it is therefore advisable not to express the parameters in figures unless this can be done with some accuracy... Numerical values, by contrast, are dangerous because they introduce a false sense of certainty."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 5. Hậu quả hủy diệt từ sai lệch đánh giá (Evaluation Uncertainties) ở pha ý tưởng
Nếu một lỗi nhỏ hoặc điểm yếu (weak spot) không được phát hiện do sự mơ hồ của việc đánh giá ở pha ý tưởng, toàn bộ công sức thiết kế cụ thể hóa (embodiment) và thiết kế chi tiết (detail) phía sau sẽ đổ sông đổ bể.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"If, because of an uniden-tified evaluation uncertainty, which is more likely to occur in the conceptual than in the embodiment phase, a weak spot should make itself felt later, then the whole concept may be put in doubt and all the development work may prove to have been in vain."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

---

### II. RỦI RO ÁP DỤNG, TRƯỜNG HỢP BIÊN (EDGE CASES), ĐIỀU KIỆN THẤT BẠI VÀ NƠI PHƯƠNG PHÁP KHÔNG THỂ ÁP DỤNG

#### 1. Nơi phương pháp này KHÔNG thể áp dụng hiệu quả (Thiết kế thích nghi & Thiết kế biến thể)
Phương pháp phân tích chức năng hệ thống cực kỳ tốn kém và cồng kềnh, do đó nó **hầu như không được áp dụng** cho các dự án thiết kế thích nghi (adaptive design) hoặc thiết kế biến thể (variant design) — những mảng vốn chiếm phần lớn công việc thực tế trong công nghiệp.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"The approach has hardly been introduced at all for adaptive or variant de-sign [12.2, 12.4]. This is understandable because working with functions and function structures is not the most important task in these types of design."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 2. Điều kiện thất bại của các hệ thống quản lý chất lượng (TQM / FMEA)
Nhiều doanh nghiệp lầm tưởng rằng các công cụ quản lý chất lượng như TQM hay FMEA có thể cứu vãn một thiết kế tồi. Thực tế, nếu bước thiết kế ý tưởng ban đầu (Conceptual Design) không được làm nghiêm túc để tìm ra giải pháp nguyên lý đúng, không một phương pháp TQM nào có thể sửa chữa được sai lầm hệ thống này.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"If the search for suitable principle solutions has not been undertaken rigorously and if the appropriate rules, principles and embodiment guidelines have not been applied to their full extent, the methods of TQM will not be able to rectify these fundamental deficiencies."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 3. Sự xung đột không thể dung hòa giữa các quy tắc thiết kế cụ thể hóa (Embodiment Principles)
Các nguyên lý thiết kế cụ thể hóa thường xuyên triệt tiêu lẫn nhau. Ví dụ: Nguyên lý "độ bền đồng đều" (uniform strength) mâu thuẫn trực tiếp với yêu cầu "chi phí tối thiểu" (minimum costs); nguyên lý "tự cứu" (self-help) mâu thuẫn với hành vi "an toàn khi hỏng" (fail-safe). Nhà thiết kế bắt buộc phải chấp nhận sự đánh đổi và thỏa hiệp.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"When applying embodiment design principles, designers may find that they run counter to certain requirements. Thus, the principle of uniform strength may conflict with the demand for minimum costs; the principle of self-help may conflict with fail-safe behaviour (see Section 7.3.3); and the principle of uni-form wall thickness chosen for the purpose of simplifying the production process [7.168] may conflict with the demand for lightweight construction or uniform strength."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 4. Edge Case hiểm họa: Việc lạm dụng "Double Fits" (Lắp ghép kép) và "Double Arrangements" (Cơ cấu kép) làm mất đi tính rõ ràng (Clarity)
Trong nỗ lực gia tăng độ an toàn hoặc độ bền, kỹ sư rất dễ rơi vào lỗi thiết kế cơ cấu kép (ví dụ: vừa dùng mối ghép ép dôi co ngót vừa chốt then để truyền lực). Điều này vi phạm nghiêm trọng quy tắc cốt lõi "Clarity" (Rõ ràng), dẫn đến tập trung ứng suất không thể dự đoán và gây khó khăn cho việc lắp ráp.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh về mối ghép kép (double fits):* `"Doublefits conflict with the basic rule of clarity... As a consequence, the force flow cannot be predicted clearly and assembly is made more difficult."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)
    *   *Trích dẫn tiếng Anh về cơ cấu kép (double arrangements - xem hình trục-then ghép co ngót):* `"Very often one comes across double arrangements, i.e. doubling up working principles for safety’s sake, which conflict with the rule of clarity. Thus a shaft–hub connection designed as a interference fit will not have a better load-carrying capacity if it is also provided with a key... The extra element merely ensures correct positioning... but... resulting stress concentration..."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 5. Điều kiện thất bại thảm khốc của nguyên lý an toàn "Safe-Life"
Nếu kỹ sư lựa chọn nguyên lý an toàn "safe-life" (yêu cầu chi tiết không được phép hỏng trong suốt vòng đời) cho các kết cấu chịu lực chính, điều kiện thất bại của nó là cực kỳ thảm khốc vì một khi xảy ra nứt hỏng ngoài dự tính, tai nạn nghiêm trọng cấp độ phá hủy hệ thống sẽ lập tức xảy ra.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"If a fail-ure should nevertheless occur, and if a safe-life is essential, then as a rule there will be a serious accident, for instance the fracture of an aeroplane wing or the collapse of a bridge."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 6. Giới hạn kinh tế và kỹ thuật của hệ thống Mô-đun (Modular Systems)
Khi cố gắng module hóa sản phẩm để giảm giá thành sản xuất hàng loạt, doanh nghiệp sẽ phải đối mặt với rủi ro mất đi tính linh hoạt trước các yêu cầu đặc biệt của khách hàng, tăng chi phí thiết kế ban đầu, yêu cầu dung sai chế tạo khắt khe hơn và tăng gánh nặng lắp ráp.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"For the manufacturer the limit of a modular system is reached whenever the subdivision into modules leads to technical shortcomings and economic losses: Adaptations to special customer wishes are not as easily made as they are with individual designs (loss of flexibility and market orientation)... Production costs are increased, for example because of the need for accurate locating surfaces and production quality must be higher because re-machining is impossible... Increased assembly effort and care are required."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

---

### III. BẰNG CHỨNG THỰC NGHIỆM CHO THẤY PHƯƠNG PHÁP KHÔNG HOẠT ĐỘNG HOÀN HẢO NHƯ TUYÊN BỐ

Cuốn sách của Pahl & Beitz không chỉ là lý thuyết thuần túy mà nó tích hợp các kết quả nghiên cứu tâm lý học nhận thức và thực nghiệm thiết kế. Các nghiên cứu này đã chỉ ra những điểm "lệch pha" lớn giữa lý thuyết hệ thống và thực tế hành vi của con người:

#### 1. Các nhà thiết kế có kinh nghiệm KHÔNG thiết kế theo quy trình tuần tự tuyến tính (Nghiên cứu của Dylla & Fricke)
Đây là bằng chứng thực nghiệm quan trọng nhất chống lại tính "bắt buộc" của quy trình hệ thống tuần tự (process-oriented). Nghiên cứu thực nghiệm đối với các kỹ sư lão luyện cho thấy họ có xu hướng làm việc theo phương pháp **"giải quyết vấn đề cục bộ" (problem-oriented)** — tức là đi thẳng từ ý tưởng đến thiết kế cụ thể hóa cho từng vùng chức năng riêng lẻ rồi mới tìm cách ghép nối và sửa chữa chúng lại với nhau. Họ dựa vào trực giác và kho giải pháp mẫu trong đầu để làm việc nhanh hơn, thay vì đi từng bước tuần tự từ trừu tượng đến cụ thể như sách giáo khoa dạy.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"The investigations of Dylla [2.11, 2.12] and Fricke [2.15, 2.16] show that novices educated in systematic design tend to follow the process-oriented approach, whereas experienced designers tend to follow the problem-oriented approach. Experienced designers apply their wealth of experience, know a wide range of possible subsolutions, and are able to represent these solutions quickly. Hence they arrive relatively quickly at a concrete result. Then, using a corrective ap-proach, they bring this together into an overall solution."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 2. Tác hại tiêu cực của kinh nghiệm thực tế (Nghiên cứu của Frankenberger)
Nghiên cứu thực nghiệm của Frankenberger chỉ ra một nghịch lý: mặc dù kinh nghiệm giúp tăng tốc độ thiết kế, nó đồng thời tạo ra tác động tiêu cực làm kỹ sư trở nên bảo thủ, thiếu linh hoạt và bị bám chấp (fixation) vào các lối mòn tư duy cũ, chống lại sự đổi mới sáng tạo.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"Frankenberger [12.5] observed in his research that experience does have a large positive effect but can also have a negative effect when that experience leads to inflexibility and fixation."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 3. Phê bình từ phía công nghiệp: Hệ thống ước lượng chi phí của Pahl-Beitz quá kém phát triển
Khi áp dụng phương pháp này vào thực tế sản xuất thương mại, các công ty công nghiệp phàn nàn rằng quy trình thiết kế hệ thống của Pahl-Beitz thiếu các công cụ thực tế và hiệu quả để ước tính chi phí ở các giai đoạn sớm.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh:* `"The following aspects have been criticised by industry: Procedures for estimating costs are insufficiently developed."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

#### 4. Kỹ sư thực tế gặp khó khăn lớn trước tư duy trừu tượng
Bằng chứng thực tế cho thấy các kỹ sư trong ngành công nghiệp cực kỳ ngại và gặp nhiều trở ngại khi phải làm việc với các sơ đồ chức năng (function structures) hay các bảng phân loại Morphological vì bộ não con người có xu hướng tư duy bằng hình ảnh trực quan của vật thể vật lý hơn là các khái niệm trừu tượng.
*   **Bằng chứng định lượng & Trích dẫn gốc:**
    *   *Trích dẫn tiếng Anh về Cấu trúc chức năng:* `"Abstracting and creating function structures often causes difficulties because of the abstract representation. Designers are more used to thinking in objects and visual images [12.6]."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)
    *   *Trích dẫn tiếng Anh về Ma trận Morphological:* `"Discursive solution methods such as classification schemes and morphological matrices initially cause some difficulties because the appropriate but abstract classifying criteria and their characteristics are not, or not fully, recognised."` `` (File nguồn: `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`)

---

### IV. BẢNG TỔNG HỢP CÁC SỐ LIỆU ĐỊNH LƯỢNG VÀ NĂM BAN HÀNH QUAN TRỌNG TRONG NGUỒN

Để đảm bảo tính xác thực tuyệt đối, dưới đây là toàn bộ các tuyên bố có chứa số liệu định lượng, mốc năm hoặc phép đếm được trích xuất nguyên văn từ file tài liệu nguồn `engineering-design-a-systematic-approach-978-1-84628-318-5-978-1-4471-6025-0.pdf`:

1.  **Năm 1977 (Năm ban hành ấn bản tiếng Đức lần 1):**
    *   *Trích dẫn gốc:* `"The first German edition of Konstruktionslehre was published in 1977."` ``
2.  **60% đến 70% (Tỷ lệ thời gian thiết kế ý tưởng thực tế dành cho việc cụ thể hóa ý tưởng dù có hay không dùng phương pháp hệ thống):**
    *   *Trích dẫn gốc:* `"However, the time normally needed in this phase for concretising ideas into principle solutions, for example through rough calculations, developing solutions, and analyses of various layouts, is about the same as when a systematic approach is not used, that is, around 60 to 70%."` ``
3.  **60% (Lượng thời gian tính toán và vẽ phác thảo chiếm trong tổng thời gian thiết kế ý tưởng):**
    *   *Trích dẫn gốc:* `"From research in industry and universities [6.8], it is known that calculating and representation add up to 60% of the total time spent on conceptual design."` ``
4.  **80% (Tỷ lệ lỗi sản phẩm có nguồn gốc từ việc lập kế hoạch và thiết kế kém):**
    *   *Trích dẫn gốc:* `"Just as design commits a large proportion of a product’s costs (see Chapter 11), up to 80% of all faults can be traced back to insufficient planning, design and development [10.26]."` ``
5.  **60% (Tỷ lệ hỏng hóc trong thời gian bảo hành do phát triển sản phẩm không đúng/thiếu sót):**
    *   *Trích dẫn gốc:* `"Furthermore, up to 60% of all breakdowns that occur within the warranty period are caused by incorrect or incomplete product development."` ``
6.  **30 đến 45 phút (Thời gian tối ưu cho một phiên Brainstorming tránh lặp ý tưởng):**
    *   *Trích dẫn gốc:* `"A session should not generally last for more than 30 to 45 minutes."` ``
7.  **RN > 125 (Chỉ số rủi ro tới hạn trong FMEA đòi hỏi phải sửa đổi thiết kế):**
    *   *Trích dẫn gốc:* `"Risk number calculation: (RN) > 125 is considered critical."` ``
8.  **10 năm và 47 đường kính trục (Số liệu thống kê về thiết kế vòng đệm chắn dầu tuabin chứng minh xu hướng chia dãy kích thước tự phát của con người):**
    *   *Trích dẫn gốc:* `"In Figure 9.1, shaft diameters are plotted using a logarithmic scale against the number of oil scraper rings designed over a period of 10 years. The results show that there were 47 diameters with peaks at more or less regular intervals, which clearly demonstrates a geometrical scaling."` ``
9.  **100 mm (Chiều dài van trượt trong ví dụ kinh điển của Leyer về việc đơn giản hóa hình học chế tạo):**
    *   *Trích dẫn gốc:* `"Leyer, when discussing changes in production methods [7.166], uses the exam-ple of a sliding control valve approximately 100 mm long..."` ``
10. **4 pha của quy trình thiết kế (Task Clarification, Conceptual, Embodiment, Detail):**
    *   *Trích dẫn gốc:* `"Of the four phases of the product design process, only the terminology used for the third, ‘embodiment design’, requires some explanation."` ``
11. **7 bước công việc cơ bản của VDI 2221:**
    *   *Trích dẫn gốc:* `"The approach (see Figure 1.9) includes seven basic working steps that accord with the fundamentals of technical systems (see Section 2.1) and company strategy (see Chapter 4)."` ``
12. **3 quy tắc cơ bản của Thiết kế cụ thể hóa (Clarity, Simplicity, Safety):**
    *   *Trích dẫn gốc:* `"In short, by observing these three basic rules, designers can increase their chances of success..."` ``
13. **5 nguyên lý thiết kế cụ thể hóa của Pahl-Beitz:**
    *   *Về phép đếm con số 5:* **"không có trong nguồn"** câu trích dẫn tiếng Anh chính xác chứa cụm từ phát biểu số lượng "five principles" (tài liệu chỉ trình bày chúng thành các mục lục riêng lẻ từ 7.4.1 đến 7.4.5).
14. **15 bước của thiết kế cụ thể hóa (Embodiment Design steps):**
    *   *Về phép đếm con số 15:* **"không có trong nguồn"** câu trích dẫn tiếng Anh chính xác phát biểu số lượng "15 steps" (tài liệu chỉ đánh số thứ tự từ 1 đến 15 trong lưu đồ Figure 7.1 và các tiêu mục nhỏ).

---

> *[KHU-01: NLM nói chuyện trực tiếp với người dùng, mang ngữ cảnh lĩnh vực người dùng. Không phải nội dung nguồn. Bản gốc ở `_raw/truoc-khu-ngu-canh/`.]*
