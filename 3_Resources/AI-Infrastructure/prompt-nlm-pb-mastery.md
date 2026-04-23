# Bộ Prompt NotebookLM cho P&B Engineering Design Mastery
## Dành cho Chuyên gia Thiết kế Sản phẩm Công nghiệp Quốc phòng Việt Nam

Chào KN, đây là bộ prompt được thiết kế chuyên sâu dựa trên VDI 2221 (systematic design), VDI 2206 (mechatronic systems), và phương pháp luận Pahl & Beitz, kết hợp với bối cảnh QPAN Việt Nam và các ràng buộc ITAR-free mà KN đã quan tâm. Mỗi prompt được tối ưu để dùng trong NotebookLM với tài liệu kỹ thuật (textbook P&B, VDI standards, MIL-STD, STANAG, research papers).

---

## 1️⃣ Feynman Decoder: Hiểu bản chất systematic design

> "Đọc tài liệu này và giải thích các khái niệm cốt lõi của P&B/VDI 2221 như thể tôi là kỹ sư mới tốt nghiệp chưa từng tiếp xúc methodology. Với mỗi khái niệm (Requirements List, Function Structure, Working Principle, Morphological Matrix, VDI 2225 Evaluation, Embodiment Design, Detail Design), hãy:
> - Giải thích bằng ngôn ngữ đời thường, tránh jargon
> - Dùng analogy từ đời sống Việt Nam (ví dụ: thiết kế xe máy, nồi cơm điện, hay công trình xây dựng)
> - Chỉ ra **WHY** đằng sau mỗi bước, không chỉ **HOW**
> - Nêu 1 ví dụ sai lầm điển hình mà junior engineer hay mắc phải
> - Kết nối khái niệm đó với defense product context (UAV, naval gun mount, LOMAH sensor, target drone)
>
> Cuối cùng, tạo một 'concept map' thể hiện các khái niệm liên kết với nhau như thế nào trong toàn bộ design flow."

---

## 2️⃣ Chief Engineer Briefing: Tóm tắt methodology cho lãnh đạo kỹ thuật

> "Đóng vai Chief Engineer báo cáo cho Tổng Giám đốc Workshop X. Tạo executive briefing 1-2 trang từ tài liệu này, bao gồm:
> - **5 principles cốt lõi** của VDI 2221/P&B có thể áp dụng ngay cho dự án hiện tại
> - **3 rủi ro methodology** khi bỏ qua systematic approach (ví dụ: jumping to solutions, anchoring bias, inadequate requirements)
> - **Strategic recommendations** cho việc triển khai P&B tại doanh nghiệp QPAN Việt Nam, xét đến: năng lực kỹ sư hiện tại, văn hóa 'làm nhanh', ràng buộc ITAR-free
> - **ROI estimation**: P&B giúp giảm bao nhiêu % lỗi thiết kế, rework, time-to-market
> - **Quick wins** có thể triển khai trong 30/60/90 ngày
>
> Trình bày súc tích, có số liệu cụ thể từ tài liệu, và ngôn ngữ phù hợp cho lãnh đạo không chuyên sâu kỹ thuật."

---

## 3️⃣ Skeptic's Review: Phản biện methodology cho defense context

> "Đọc tài liệu này với tư duy phản biện chuyên nghiệp từ góc nhìn defense engineer Việt Nam. Phân tích:
>
> **Limitations của P&B/VDI 2221 khi áp dụng cho defense products:**
> - Methodology có phù hợp với sản phẩm có yêu cầu MIL-STD/STANAG không?
> - Có tính đến ràng buộc reverse engineering từ sản phẩm nước ngoài không? (bối cảnh thường gặp tại VN)
> - Xử lý thế nào với classified requirements và compartmentalized information?
> - Có phù hợp với mechatronic/cyber-physical systems hiện đại không, hay cần bổ sung VDI 2206?
>
> **Gaps trong tài liệu:**
> - Thiếu hướng dẫn cho dual-use products (dân sự + quân sự)
> - Thiếu consideration cho supply chain risk (ITAR, EAR, sanctions)
> - Thiếu integration với modern tools (MBSE, digital thread, FreeCAD, PLM)
>
> **5 điểm yếu lớn nhất** khi áp dụng P&B cho QPAN Vietnam, kèm số trang tham chiếu và đề xuất cách bổ sung/điều chỉnh."

---

## 4️⃣ Data Miner: Trích xuất toàn bộ design parameters và heuristics

> "Trích xuất toàn bộ dữ liệu định lượng và heuristics từ tài liệu, sắp xếp thành các bảng markdown sau:
>
> **Bảng 1: Design Rules & Heuristics**
> | Rule/Heuristic | Phase (VDI 2221 step) | Context | Numerical Value | Page | Source Sentence |
>
> **Bảng 2: VDI 2225 Evaluation Criteria**
> | Criterion | Weight Range | Scoring Scale | Application Domain | Page |
>
> **Bảng 3: Checklist Items**
> | Checklist Topic | Phase | Items Count | Key Questions | Page |
>
> **Bảng 4: Formulas & Calculations**
> | Formula Name | Equation | Variables | Units | Application | Page |
>
> **Bảng 5: Design for X Guidelines**
> | DfX Category | Specific Guidelines | Quantitative Limits | Trade-offs | Page |
>
> Bao gồm cả các số liệu 'ẩn' trong text (ví dụ: '80% chi phí được locked tại conceptual phase'). Đảm bảo copy-paste được trực tiếp vào Notion/Airtable."

---

## 5️⃣ Mastery Study Guide: Tài liệu luyện thi chuyên gia

> "Biến tài liệu thành bộ tài liệu luyện thi cấp độ chuyên gia (senior design engineer):
>
> **Phần A - Kiến thức nền tảng (10 câu trắc nghiệm khó):**
> - Phân biệt các concept dễ nhầm (Function vs Working Principle vs Working Structure)
> - Edge cases trong VDI 2225 weighting
> - Khi nào dùng VDI 2221 vs VDI 2206
>
> **Phần B - Tình huống áp dụng (5 case studies):**
> - Case 1: Thiết kế target drone ITAR-free cho huấn luyện phòng không
> - Case 2: Reverse engineering AK-630 fire control system
> - Case 3: UAV gimbal bracket cho điều kiện biển Việt Nam
> - Case 4: Naval gun mount 30mm với domestic manufacturing constraints
> - Case 5: LOMAH acoustic sensor cho trường bắn
>
> **Phần C - Tự luận chuyên sâu (5 câu):**
> - So sánh P&B systematic design vs Agile hardware vs Set-Based Concurrent Engineering
> - Critique một requirements list mẫu và đề xuất cải tiến
> - Thiết kế function structure cho một defense product cụ thể
>
> Mỗi câu kèm: đáp án chi tiết, giải thích tại sao các phương án khác sai, pitfalls thường gặp, số trang tham chiếu, và mức độ Bloom's taxonomy (Remember/Understand/Apply/Analyze/Evaluate/Create)."

---

## 6️⃣ Implementation Roadmap: Triển khai P&B tại Workshop X

> "Dựa hoàn toàn vào tài liệu, tạo roadmap triển khai P&B/VDI 2221 tại doanh nghiệp QPAN Việt Nam với quy mô ~50-100 kỹ sư:
>
> **Phase 1 - Foundation (0-3 tháng):**
> - Training chương trình (giờ học, tài liệu, instructor)
> - Template hóa: Requirements List template, Function Structure template, Morphological Matrix template, VDI 2225 scorecard, DfX checklists
> - Pilot project selection criteria
>
> **Phase 2 - Pilot (3-9 tháng):**
> - Chọn 2-3 dự án pilot (đề xuất: 1 mechanical, 1 mechatronic, 1 reverse engineering)
> - KPIs đo lường: design iterations, defect rate, time-to-prototype
> - Mentorship structure
>
> **Phase 3 - Scale (9-18 tháng):**
> - Integration với PLM/CAD workflow (FreeCAD, STEP, drawing management)
> - Cross-functional involvement (production, QA, procurement)
> - Knowledge management system
>
> **Phase 4 - Excellence (18+ tháng):**
> - Internal certification levels (Junior/Senior/Expert designer)
> - Continuous improvement loops
> - External benchmarking
>
> Với mỗi phase, xác định: **người chịu trách nhiệm** (role, không tên), **deliverables**, **dependencies**, **risks** (đặc biệt: resistance to change, 'quick-fix' culture), **budget estimate**, **success metrics**. Làm nổi bật trade-offs (ví dụ: speed vs rigor, local adaptation vs standard compliance)."

---

## 7️⃣ Structure Hacker: Navigation map cho tài liệu dày

> "Phân tích cấu trúc tài liệu (đặc biệt hiệu quả cho P&B textbook ~600 trang hoặc VDI standards):
>
> **Level 1 - One-line summary mỗi chapter**
>
> **Level 2 - Key concepts hierarchy:**
> - Concept nào là foundational (phải đọc trước)
> - Concept nào là advanced (có thể skip lần đọc đầu)
> - Concept nào là reference (tra cứu khi cần)
>
> **Level 3 - Topic-based navigation:**
> Với mỗi topic trọng tâm của KN, chỉ ra trang quan trọng nhất:
> - Requirements engineering for defense: [pages]
> - Function structure methodology: [pages]
> - Concept evaluation VDI 2225: [pages]
> - Embodiment design principles: [pages]
> - Design for manufacturing (DfM) for Vietnamese manufacturing capability: [pages]
> - Reverse engineering methodology: [pages]
> - Mechatronic system design (VDI 2206): [pages]
>
> **Level 4 - Reading paths:**
> - Fast track (40 giờ): chỉ đọc những gì cần cho current project
> - Comprehensive (120 giờ): master toàn bộ methodology
> - Specialist track: focus deep vào 1 phase
>
> Tạo ASCII diagram thể hiện dependencies giữa các chapter/sections."

---

## 8️⃣ Cross-Standard Synthesizer: Tích hợp VDI 2221, 2206, MIL-STD, STANAG

> "Tổng hợp nội dung tài liệu với các standards khác mà defense engineer cần biết:
>
> **Mapping matrix:**
> | P&B Phase | VDI 2221 Step | VDI 2206 V-model Stage | Relevant MIL-STD | Relevant STANAG | Vietnam TCVN/TCQS |
>
> **Điểm giao thoa quan trọng:**
> - P&B Requirements List ↔ MIL-STD-961 (Defense Specifications)
> - Function Structure ↔ SysML block diagrams (MBSE)
> - VDI 2225 evaluation ↔ Decision analysis trong DoD Architecture Framework
> - Embodiment Design ↔ MIL-HDBK-5 (metallic materials) / MIL-HDBK-17 (composites)
> - Detail Design ↔ ASME Y14.5 (GD&T) / ISO 1101
> - Design Review ↔ MIL-STD-1521 (Technical Reviews and Audits)
>
> **Gaps cần fill cho Vietnam context:**
> - Những standard nào VN chưa có tương đương
> - Những standard nào cần 'localize' (material availability, supplier capability)
> - Cách xử lý khi customer spec (quân đội VN) khác với commercial best practice
>
> Kết luận: Recommended integrated design process framework cho Workshop X."

---

## 9️⃣ Failure Mode Analyzer: Học từ sai lầm thiết kế

> "Từ tài liệu, trích xuất và phân tích các failure modes của systematic design:
>
> **Phase-specific failures:**
> - **Task Clarification failures**: requirements creep, missing stakeholders, untestable requirements, conflicting requirements không được detect
> - **Conceptual Design failures**: anchoring to first solution, incomplete function structure, biased VDI 2225 weighting, không đủ alternatives
> - **Embodiment Design failures**: over-engineering, premature optimization, bỏ qua DfX, tolerance stack-up ignored
> - **Detail Design failures**: drawing errors, BOM inconsistency, missing manufacturing notes
>
> **Với mỗi failure mode:**
> - Symptom (dấu hiệu nhận biết)
> - Root cause (theo 5-Why hoặc Ishikawa)
> - Prevention (preventive action)
> - Detection (trong design review stage nào)
> - Recovery (nếu đã xảy ra, làm thế nào để khắc phục với minimal cost)
> - Defense product example (UAV, naval, artillery - từ kinh nghiệm thực tế hoặc case studies)
>
> Xếp hạng top 10 failure modes theo RPN (Risk Priority Number = Severity × Occurrence × Detection) cho defense manufacturing context Việt Nam."

---

## 🔟 Socratic Coach: Self-assessment và deep questioning

> "Đóng vai Socratic coach hướng dẫn tôi master methodology này. Thay vì explain, hãy hỏi tôi các câu hỏi thúc đẩy deep thinking:
>
> **Level 1 - Comprehension checks:**
> - Hỏi tôi định nghĩa core concepts bằng ngôn ngữ của tôi
> - Hỏi tôi phân biệt các concept dễ nhầm
>
> **Level 2 - Application probes:**
> - Đưa scenario defense engineering cụ thể, hỏi tôi apply như thế nào
> - Hỏi tôi justify decisions với evidence từ methodology
>
> **Level 3 - Critical thinking:**
> - Hỏi tôi khi nào methodology này FAIL
> - Hỏi tôi trade-offs khi deviate từ standard process
> - Thách thức assumptions của tôi
>
> **Level 4 - Synthesis:**
> - Hỏi tôi kết nối concepts across chapters
> - Hỏi tôi design hybrid approach cho situations tài liệu không cover
>
> **Level 5 - Teaching test (Feynman):**
> - Yêu cầu tôi giải thích cho một junior engineer
> - Đánh giá explanation của tôi và chỉ ra gaps
>
> Sau mỗi session, cho tôi một 'competency assessment' theo 4 phases của VDI 2221 (Clarify/Conceptualize/Embody/Detail) với thang điểm 1-5 và next-step recommendations."

---

## Gợi ý sử dụng trong NotebookLM

Thứ tự đề xuất cho learning journey của KN:

**Tuần 1-2 (Foundation):** Dùng Prompt 1 (Feynman) và Prompt 7 (Structure) để build mental model tổng thể.

**Tuần 3-4 (Deep dive):** Prompt 4 (Data Miner) và Prompt 8 (Cross-Standard) để internalize design parameters.

**Tuần 5-6 (Critical thinking):** Prompt 3 (Skeptic) và Prompt 9 (Failure Modes) để develop engineering judgment.

**Tuần 7-8 (Application):** Prompt 5 (Study Guide) và Prompt 10 (Socratic) để test mastery.

**Ongoing (Implementation):** Prompt 2 (Executive) và Prompt 6 (Roadmap) khi chuẩn bị triển khai tại Workshop X.

