# Phase 2 Positioning — phuong-phap-thiet-ke-he-thong-cong-nghe

Ngày: 2026-08-20 · Pipeline: notebook-to-book v1.0 · **CEO duyệt luận đề A + lăng kính C, 2026-08-20**

---

## Luận đề cốt lõi

> **Mỗi phương pháp thiết kế có hệ thống là một canh bạc đặt vào một tổ chức không tồn tại.
> Chúng không hỏng vì sai kỹ thuật. Chúng hỏng ở mặt tiếp giáp với tổ chức — và nửa thế kỷ
> cải tiến phương pháp đã cải thiện tài liệu chứ không cải thiện người thiết kế, vì gần như
> mọi cải tiến đều can thiệp ở tầng đòn bẩy thấp trong khi chỗ quyết định nằm ở tầng cao nhất.**

Vế một là trục chính. Vế hai là lăng kính của phần cuối.

### Chuỗi lập luận từ khai thác đến luận đề này

Năm truy vấn xuyên suốt chạy độc lập trên năm notebook, không cái nào thấy câu trả lời của cái kia.
Nhưng notebook thứ năm là tuyến Meadows/Goldratt, và ranh giới cứng dưới đây đã loại tuyến đó khỏi vai
**bằng chứng về thiết kế kỹ thuật**. Không thể vừa loại nó ở Phần V vừa đếm nó vào bằng chứng ở đây.
**Con số dùng được là BỐN khối tài liệu độc lập.**
Cả bốn đều được hỏi *"phương pháp này giả định gì về tổ chức áp dụng nó, và giả định đó hỏng khi nào"*.
Cả bốn trả về một danh sách giả định gần trùng khớp — hợp tác liên ngành thông suốt, đồng thuận văn hoá
giữa kỹ sư và quản lý, kỷ luật quy trình cao, nguồn lực dồi dào cho pha trừu tượng đầu dự án, thuật ngữ
thống nhất giữa cơ–điện–phần mềm — và một danh sách điều kiện hỏng cũng gần trùng khớp: doanh nghiệp
vừa và nhỏ thiếu tiền thiếu thời gian, chính trị nội bộ và lợi ích cục bộ, cát cứ thông tin giữa các
miền kỹ thuật, điểm gãy khi bàn giao cho nhà thầu phụ.

Sự hội tụ này không phải do tôi ghép. Nó là điều xuất hiện khi hỏi cùng một câu vào bốn khối tài liệu
khác nhau về niên đại, ngôn ngữ và trường phái. Nó vẫn là **dấu hiệu**, chưa phải kết luận: bốn khối
độc lập, nhưng cùng một mô hình đọc chúng và viết ra câu trả lời.

Vế hai đến từ chỗ khác. Tầng Meadows–Goldratt trả lời được câu mà không tầng nào trong corpus tự trả
lời: *vì sao biết rồi mà vẫn không làm được.* Meadows xếp hạng mười hai điểm đòn bẩy, đặt **hệ hình
tư duy ở L2** gần đỉnh và **thông số bề nổi ở L12** đáy bảng, rồi đo được rằng gần như toàn bộ sự chú
ý thực tế đổ vào đáy bảng. Bản phân tích TOC trong corpus tự xếp chính nó: `"TOC emerges as primarily
an L10-level intervention methodology (physical structure)"`, và ghi thẳng điều kiện hỏng
`"Mental model resistance L2 (Paradigm) — Implementation fails if paradigm unchanged"`.

Đặt hai thứ cạnh nhau thì thấy: phổ biến một quy trình thiết kế mới trong khi hệ hình tổ chức không đổi
chính là can thiệp ở L12, và nó sẽ trượt — đúng như điều mà vế một mô tả bằng ngôn ngữ của chính các
nhà phương pháp luận.

### ⚠ Khai báo bắt buộc — khung ba tầng là tổng hợp CỦA SÁCH

**Không một nguồn nào trong 66 tài liệu đặt Meadows cạnh Pahl-Beitz.** Việc xếp corpus thành ba tầng
— phương pháp, phê bình, hệ thống — và dùng tầng ba để giải thích hai tầng kia là thao tác của cuốn
sách này, không phải phát hiện của nguồn nào.

Đây là rủi ro nghiêm trọng nhất của cuốn sách. Nó phải được nói ra ở lời mở và nhắc lại ở đầu phần
cuối. Cuốn `icdm-hari-weiss` đã vấp đúng chỗ này và ghi nó thành rủi ro #5: nếu không khai báo, sách
tự phá luận điểm của chính nó — một cuốn sách buộc tội các phương pháp khác là giả định không khai
báo, mà bản thân nó lại có một giả định không khai báo.

**Ranh giới cứng cho P4:** Meadows và Goldratt không viết một chữ nào về thiết kế kỹ thuật. Dùng họ
làm lăng kính là hợp lệ. Dùng họ làm **bằng chứng** về thiết kế kỹ thuật thì không.

### Tập năm giả định CHUẨN — bản duy nhất được phép trích dẫn

Bản dưới đây là **kết quả sau khi Ch13 áp luật nguyên văn**, không phải danh sách hội tụ thô. Mọi chương
trích "giả định của Ch13" phải trích đúng năm mục này, đúng thứ tự, đúng cách gọi tên.

| # | Giả định | Câu bảo chứng |
|---|---|---|
| GĐ1 | Tổ chức là một cỗ máy xử lý thông tin, không có chính trị nội bộ | `"…makes it exceedingly hard for Pahl & Beitz to see method use as a social, political or organizational process…"` |
| GĐ2 | Các bước sẽ được làm đúng như viết | `"…the steps of methods are routinely changed, skipped, or squeezed…"` |
| GĐ3 | Có tiền và thời gian cho một pha chưa đẻ ra bản vẽ nào | `"The objection is often raised that applying a systematic approach during the conceptual design phase takes too much time."` |
| GĐ4 | Có một ngôn ngữ chung xuyên cơ, điện và phần mềm | `"the lack of a common interface language has made the information exchange in concurrent engineering difficult"` |
| GĐ5 | Cả tổ chức cùng cam kết một phương pháp | `"The direction of the guidelines has changed from a personal support for individuals… towards a general procedure for a company"` |

**Ba mệnh đề KHÔNG thuộc tập này** — Ch13 đã đẩy xuống phụ lục vì không truy được nguyên văn. **Cấm kéo
chúng lên thân bài, cấm gán tầng đòn bẩy cho chúng, cấm dùng làm chân của bất kỳ kết luận nào:**
- PL-1 — hạ tầng số hoá EDM/PDM/PLM
- PL-2 — đồng thuận văn hoá **tuyệt đối** giữa kỹ sư và quản lý
- PL-3 — trình độ nhân sự cao và đồng đều

> Vì sao mục này tồn tại: bản thảo P4 có hai tập giả định cùng mang nhãn "Ch13" — tập đã kiểm ở Ch13, và
> tập hội tụ thô ở tài liệu này. Ch17 và Ch18 lấy nhầm tập thứ hai, kéo **PL-2** lên, gán cho nó tầng L2,
> rồi dùng làm một trong ba chân của kết luận. Cổng kiểm không bắt được vì nó **so số lượng** — cả hai
> tập đều có năm mục — chứ không so nội dung.

### Ba neo — mọi chương phải nối về một trong ba

1. **Canh bạc** — phương pháp này đặt cược vào tổ chức như thế nào?
2. **Mặt tiếp giáp** — nó vỡ ở đâu khi chạm tổ chức thật, và bằng chứng nào trong nguồn?
3. **Tầng đòn bẩy** — công cụ này can thiệp ở tầng nào, và nó tự nhận là tầng nào?

---

## Độc giả

### Độc giả A — Kỹ sư trưởng hệ thống, kiến trúc sư hệ thống
- **Muốn gì:** quy trình chạy được, biết chọn công cụ nào cho pha nào, biết chỗ nào bỏ được.
- **Cách đọc:** lướt phần lịch sử, dừng ở bảng công cụ và sơ đồ, đọc kỹ mục *Áp dụng ở Xưởng*.
- **Không muốn:** triết lý tổ chức không dẫn tới hành động.

### Độc giả B — Người quyết định quy trình: CEO kỹ thuật, trưởng phòng thiết kế, quản đốc
- **Muốn gì:** hiểu vì sao lần trước áp quy trình mới mà không ăn; biết dấu hiệu sớm.
- **Cách đọc:** đọc kỹ phần giả định tổ chức và phần đòn bẩy, lướt chi tiết công thức.
- **Không muốn:** giáo trình phương pháp luận không nói đến điều kiện áp dụng.

### Cuốn sách này KHÔNG dành cho
- Sinh viên học Pahl-Beitz lần đầu — sách giả định đã biết bốn pha và ma trận hình thái.
- Người tìm hướng dẫn tra cứu tiêu chuẩn — corpus **không có toàn văn tiêu chuẩn VDI nào**.
- Người tìm sách quản trị tổ chức — tổ chức ở đây là **ràng buộc của phương pháp**, không phải chủ đề.

### Xung đột giữa hai độc giả, và cách xử lý
A muốn *quy trình chạy được*; B muốn *vì sao quy trình không chạy*. Luận đề phục vụ B tự nhiên hơn A.
**Giảm thiểu:** mỗi chương đóng bằng một mục *Áp dụng ở Xưởng* viết cho A — một quyết định cụ thể mà
A có thể ra ngay tuần sau. Nếu một chương không viết nổi mục đó, chương ấy đã trượt về phía B quá xa.

---

## Vì sao là một cuốn sách, không phải "đọc thẳng nguồn"

**1. Trình tự.** 66 tài liệu nằm rải trên bảy notebook, không tài liệu nào biết tài liệu kia tồn tại.
Chúng cũng không xếp theo thứ tự mà một cái đầu xây được hiểu biết: bài phê bình Pahl-Beitz năm 2010
chỉ có nghĩa sau khi đã hiểu Pahl-Beitz năm 1977, và bản VDI 2221:2019 chỉ đọc được như một nhượng bộ
nếu biết bản 1993 đòi gì.

**2. Mẫu hình cắt ngang.** Danh sách giả định tổ chức nằm rải trong năm khối tài liệu khác trường phái.
Không ai đứng ở chỗ nhìn thấy cả năm cùng lúc. Sách dựng riêng chương cho nó.

**3. Lý do đằng sau.** Tiêu chuẩn ghi *cái được chốt*, không ghi *cái bị bác và vì sao*. Rằng VDI 2221
bản 2019 tách đôi và thay bảy bước bằng mười nhóm nhân tố ngữ cảnh — đó là một cuộc nhượng bộ, nhưng
văn bản tiêu chuẩn không bao giờ tự gọi nó như vậy. Sách dựng lại lý do từ đối chiếu các phiên bản và
từ tuyến phê bình.

**4. Bài học chuyển giao được.** Mỗi chương đóng bằng *Áp dụng ở Xưởng*: một quyết định cụ thể cho một
xưởng thật, có ràng buộc thật về người và tiền.

---

## Glossary

> Thuật ngữ mang nghĩa riêng trong cuốn sách này. P4 phải dùng nhất quán, **không được đặt từ đồng nghĩa**.

| Thuật ngữ | Nghĩa dùng trong sách này |
|---|---|
| **PBSA** | *Pahl and Beitz Systematic Approach* — phương pháp gốc, bốn pha, làm nền cho cả phả hệ |
| **VDI 2221** | Tiêu chuẩn Đức. Khi không ghi năm, mặc định là **bản 1993** (4 pha, 7 bước). Bản 2019 luôn ghi rõ năm |
| **Tailoring** | Cắt may quy trình theo bối cảnh doanh nghiệp — cơ chế trung tâm của VDI 2221 Blatt 2 (2019), **10 nhóm nhân tố ngữ cảnh** |
| **VDI 2206** | Tiêu chuẩn cơ điện tử. Bản 2004 = chữ V hai nhánh; **bản 2021 = ba luồng song song**, luôn ghi rõ năm |
| **Macro-cycle / Micro-cycle** | Macro = khung chữ V toàn cục; micro = chu trình giải quyết vấn đề lặp bên trong. **Không nêu số bước** — nguồn chỉ viết `"general problem-solving cycle as a micro-cycle"`, không đếm |
| **RFLP** | Requirements → Functional → Logical → Physical — bốn mức trừu tượng của MBSE trong VDI 2206 |
| **CPS** | Cyber-Physical Systems — hệ thống thực-ảo, nấc phức tạp làm hỏng phương pháp cơ điện tử thuần |
| **ICDM** | *Integrated, Customer Driven, Conceptual Design Method* (Hari & Weiss), **10 bước**. KHÔNG phải ICDM của Kym Pohl |
| **EQFD · CFMA · DSO · CDTC · RTA · Robustool · DQM · CSR** | Nhóm công cụ ICDM. **KHÔNG viết "bảy công cụ"** — đây là tám tên, và không nguồn nào trong 66 tài liệu đếm số công cụ. Dòng cũ của bảng này ghi "Bảy công cụ" và con số đó đã lan ra 8 chương. Định nghĩa chi tiết ở cuốn `icdm-hari-weiss`; sách này chỉ dùng ở mức đối chiếu |
| **Quy định / Mô tả** *(prescriptive / descriptive)* | Quy định = *nên thiết kế thế nào*; mô tả = *người ta thật sự thiết kế thế nào*. Trục tranh luận trung tâm |
| **FBS** | Function–Behaviour–Structure (Gero) — mô hình thuộc phe mô tả |
| **L1–L12** | Mười hai tầng đòn bẩy Meadows. **L12 = thông số, yếu nhất; L2 = hệ hình tư duy, gần mạnh nhất.** Số nhỏ = đòn bẩy lớn |
| **TOC** | Theory of Constraints (Goldratt), **5 bước tập trung**; corpus tự xếp nó là can thiệp **tầng L10** |
| **D-M-I-R** | Diagnosis–Modeling–Intervention–Reflection, khung 4 bước của tuyến tư duy hệ thống |
| **Ma trận hình thái** | *Morphological chart* — công cụ tổ hợp giải pháp. Dùng thuật ngữ tiếng Việt, ghi kèm tên gốc lần đầu |
| **Mặt tiếp giáp** | Chỗ phương pháp chạm tổ chức thật. **Thuật ngữ của sách**, không phải của nguồn |
| **Canh bạc tổ chức** | Tập giả định ngầm mà một phương pháp đặt vào tổ chức áp dụng nó. **Thuật ngữ của sách** |

---

## Rủi ro định vị

**R1 — Khung ba tầng là tổng hợp của sách.** Đã nêu ở trên. *Giảm thiểu:* khai báo ở lời mở và đầu phần
cuối; P7 kiểm rằng không chỗ nào trình bày nó như phát hiện của nguồn.

**R2 — Corpus không có toàn văn tiêu chuẩn VDI nào.** Gần nhất là bản trích mẫu VDI 2221 Blatt 1 (2019)
song ngữ 27.608 ký tự và hai mục lục. *Giảm thiểu:* nói ra ở lời mở; mọi khẳng định về nội dung tiêu
chuẩn phải ghi rõ là qua tài liệu thứ cấp.

**R3 — Một nguồn chiếm 32% corpus.** Toàn văn sách Pahl-Beitz bản 3. *Giảm thiểu:* P7 đo tỷ lệ trích
theo nguồn cho từng chương; chương nào lệch quá về nguồn [1] phải bổ sung đối chứng.

**R4 — Luận đề phục vụ độc giả B hơn độc giả A.** *Giảm thiểu:* mục *Áp dụng ở Xưởng* bắt buộc mỗi chương;
chương nào không viết nổi thì đã trượt.

**R5 — Cạnh tranh với cuốn `icdm-hari-weiss` đã xuất bản.** ICDM là một trong bốn phương pháp ở đây, và
đã có nguyên một cuốn 126.578 từ. *Giảm thiểu:* chương ICDM trong sách này **chỉ làm nhiệm vụ đối chiếu**
— ICDM giả định tổ chức nào, và nó ngồi ở tầng đòn bẩy nào — rồi trỏ sang cuốn kia cho chi tiết công cụ.
Không viết lại bảy công cụ.

**R6 — Phơi nhiễm IP.** Mục *Áp dụng ở Xưởng* sẽ chạm quy trình thật của Xưởng. Chưa cần cổng an ninh ở
P1–P3 vì 66 nguồn đều công khai, nhưng **phải mở bản kê nguồn trước khi viết mục đó ở P4**, theo mẫu
`_source_manifest.md` của dự án `phuong-phap-thiet-ke-khi-tai-co-ai`.
