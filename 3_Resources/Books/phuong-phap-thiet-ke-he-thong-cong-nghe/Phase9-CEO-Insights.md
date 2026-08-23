# Phase 9 — Insight cho CEO, năm lăng kính

Ngày: 2026-08-21 · Nguồn: `book.md` 129.962 từ + ba báo cáo phản biện + sáu cổng kiểm

> ⚠ **Lệch khỏi thiết kế của skill, khai báo trước.** `book-ceo-insight` quy định phải hỏi NotebookLM
> chứ **không** đọc thẳng `book.md`, vì NLM cho một góc nhìn từ ngoài, đọc lại cuốn sách mà không mang
> ký ức của người viết. Xác thực NLM chết lần thứ ba trong phiên, ngay sau khi nạp xong 20 nguồn, nên
> năm truy vấn lăng kính trả về lỗi đồng loạt.
>
> Bản này viết từ bản thảo trên đĩa. Nó **thiếu đúng cái mà NLM đáng lẽ cấp: một lần đọc độc lập.**
> Khi có lại xác thực, chạy `Phase6-Revised/p9.sh` — năm truy vấn đã soạn sẵn, nhắm vào notebook `44be9c06`
> — rồi đối chiếu với bản này. **Chỗ hai bên lệch nhau mới là chỗ đáng đọc.**

---

## Lăng kính 1 — HELIX (thực thi thiết kế)

**Phát hiện dùng được ngay: một BƯỚC quy trình thực chất là một GIẢ ĐỊNH VỀ TỔ CHỨC chưa ai kiểm.**

Cuốn sách chứng minh điều này bằng chỗ mạnh nhất có thể — chính Pahl-Beitz, ở mục 7.1, viết
`"it is not always possible to draw up a strict plan for the embodiment design phase"` **ngay trước**
danh sách mười lăm bước mà cả ngành vẫn trích như một quy trình. Cái được **đọc** thành quy trình vốn
được **viết** ra như một gợi ý.

**Việc làm được — sắp theo chi phí:**

| # | Việc | COD | Ưu tiên |
|---|---|---|---|
| H1 | Với mỗi skill HELIX, phân loại từng bước thành **CỔNG** (có cơ chế chặn) hay **GỢI Ý** (chỉ là lời khuyên). Bước nào tự nhận là cổng mà không có gì cưỡng chế thì đổi tên hoặc dựng cơ chế | **Core** | **CAO** |
| H2 | Đưa **tailoring** thành cơ chế trong pipeline, không phải ngoại lệ xin phép. Sách xếp nó ở **L4 — cao nhất trong toàn họ công cụ thiết kế**, mà VDI đóng gói nó như một tờ hướng dẫn cấu hình | Core | CAO |
| H3 | Mua trước ba **lệnh cấm rẻ ở L5** đã có nguyên văn trong nguồn: cấm lấy điểm trung bình trong ma trận Pugh; cấm đưa cấu phần chưa có bằng chứng khả thi vào kế hoạch; ngưỡng phủ trọng số cho vòng lọc thô | Offload | CAO |
| H4 | Hoãn các cuộc triển khai cấu trúc đắt tiền ở L10 cho tới khi ba lệnh cấm trên đã sống được một quý | Core | TRUNG |

**Vì sao H3 đứng trước H4:** Ch16 đo được rằng đa số công cụ **tự nhận cao hơn tầng thật** — chữ V bản
2021 muốn đưa `"skills, competencies, convictions and emotions"` vào (một vấn đề L2) rồi trả lời bằng
cách ghép thêm một mô hình (L10). Đầu tư vào L10 trong khi vấn đề ở L2 là cách tiêu tiền phổ biến nhất
và ít hiệu quả nhất.

---

## Lăng kính 2 — FORGE (chiến lược sản phẩm)

**Bảng năm giả định của Ch13 dùng được làm bộ sàng dự án, không chỉ sàng phương pháp.**

Thủ tục ba bước ở Ch18 — chấm tổ chức trên năm giả định (0/1/2, neo vào **quan sát** chứ không vào đánh
giá) → loại phương pháp có *giả định trụ* ở mức 0 → chọn công cụ theo tầng đòn bẩy trong phần còn lại —
có một luật cứng đáng mượn nguyên: **ô bằng 0 là ràng buộc; dừng lại can thiệp vào nó trước, chưa chọn
phương pháp.** Và **một trục cho một chu kỳ**.

| # | Việc | COD | Ưu tiên |
|---|---|---|---|
| F1 | Chấm chính Xưởng trên năm giả định, một lần, bằng **bằng chứng sáu tháng** chứ không bằng cảm nhận. Đây là đầu vào của mọi việc còn lại | **Core** | **CAO** |
| F2 | Thêm một câu hỏi vào cổng quyết định làm/không làm dòng sản phẩm mới: *"dòng này đòi giả định tổ chức nào, và ta đang ở mức mấy trên giả định đó"* | Core | TRUNG |
| F3 | Trước khi mua bất kỳ công cụ hay quy trình mới nào, hỏi hai câu của Ch16: **nó cấm cái gì, và ai bắt được người vi phạm?** Không trả lời được thì đó là một tài liệu, và tài liệu ngồi ở L10 | Core | CAO |

**Cảnh báo mạnh nhất của sách cho FORGE:** *"Đừng mua bằng đòn bẩy đi vay. Công cụ không mang tầng của
nó theo — tổ chức mới là thứ mang."* Cùng một bảng Pugh, ở nơi thi hành lệnh cấm thì là L5, ở nơi không
thi hành thì là L12.

---

## Lăng kính 3 — Galaxy (ứng viên ghi chú vĩnh viễn)

Sáu ý atomic, đều phản trực giác, đều đổi được cách ra quyết định. **Chưa tạo note** — đây là đề xuất,
theo luật *không viết permanent note khi chưa được yêu cầu*.

| # | Ý tưởng | Bác bỏ trực giác nào | Chương |
|---|---|---|---|
| G1 | **Cái được đọc thành quy trình vốn được viết ra như một gợi ý** | rằng phương pháp kinh điển tự nhận là bắt buộc | Ch03 |
| G2 | **Chuẩn hoá không thêm chắc chắn — nó lột phần bất định khỏi cách trình bày rồi giao cho tổ chức tự gánh** | rằng viết thành tiêu chuẩn là giảm rủi ro | Ch04 |
| G3 | **Mọi thang chấm là một tuyên bố ngầm về ai được quyền cho điểm.** Chọn thang là chọn người, không chỉ chọn phép tính | rằng bảng chấm làm quyết định khách quan hơn | Ch10 |
| G4 | **Bảng chấm không tạo quyết định đúng — nó tạo bằng chứng rằng quyết định bảo vệ được.** Tổ chức tiếp nhận nó vì lý do thứ hai sẽ điền bảng *sau khi* đã chọn, và đầu ra không phân biệt được | rằng công cụ đánh giá phục vụ việc đánh giá | Ch10 |
| G5 | **Nghịch lý thông tin không được giải, nó được định giá** — chốt muộn thì nổ tổ hợp, chốt sớm thì chốt khi chưa biết gì; mọi phương pháp chỉ chọn chỗ trả giá | rằng có một thời điểm đúng để chốt | Ch11 |
| G6 | **Phổ biến một quy trình mới trong khi hệ hình không đổi là can thiệp ở tầng đòn bẩy yếu nhất** | rằng phổ biến quy trình là thay đổi cách tổ chức tư duy | Ch17 |

**G3 và G4 là cặp mạnh nhất** và nên là hai note riêng, không gộp: G3 nói thang chấm phân bổ *quyền*,
G4 nói nó phân bổ *trách nhiệm giải trình*. Hai chuyện khác nhau, cùng đến từ một công cụ.

---

## Lăng kính 4 — Giả thuyết đối nghịch: cuốn sách này sai ở đâu

Viết thẳng, không bênh.

**Chỗ mỏng nhất — bảng ánh xạ tầng đòn bẩy ở Ch16.** **1 ô có căn cứ nguồn / 13 ô là suy luận của tác
giả.** Ô duy nhất có căn cứ là chỗ TOC tự xếp hạng chính nó. Chương có in tỷ lệ đó ra, nhưng một bảng
mà 93% ô là phán đoán của người viết thì **không phải một phép đo, nó là một cách nhìn được trình bày
bằng hình thức của phép đo** — và hình thức bảng có sức thuyết phục vượt quá nội dung nó chứa.

**Cách giải thích khác mà cuốn sách không xét đủ:** nó quy việc phổ biến quy trình thất bại cho *tầng
đòn bẩy sai*. Nhưng có ít nhất hai lời giải cạnh tranh nó không đặt lên bàn — **phương pháp đơn giản là
đắt hơn lợi ích nó mang lại ở quy mô nhỏ** (một lựa chọn kinh tế hợp lý, không phải một thất bại nhận
thức), và **người thực hành đã ngầm tailoring đúng cách rồi**, thứ trông như "bỏ bước" thực ra là thích
nghi có năng lực. Ch12 chạm vào ý thứ hai nhưng không dùng nó để thách thức luận đề chính.

**Ba giới hạn chính cuốn sách tự khai, xếp theo mức nghiêm trọng:**

1. **Corpus không chứa sách gốc của Meadows lẫn Goldratt** — chỉ có 8 tệp phân tích *về* hai cuốn đó.
   Toàn bộ Phần V đọc qua một lớp thứ cấp, rồi Ch16 dùng lớp thứ cấp ấy để chấm điểm lớp sơ cấp.
   **Chuỗi ba mắt.** Đây là giới hạn nặng nhất, và nó chỉ được phát hiện ở P4 — sau khi luận đề đã chốt.
2. **Corpus không có toàn văn tiêu chuẩn VDI nào** — chỉ một bản trích mẫu và hai mục lục.
3. **Một nguồn chiếm 32% corpus.** Ch03 trích 80% từ nó.

**Và một chỗ nên nghi thêm:** năm giả định của Ch13 đến từ hội tụ bốn khối tài liệu độc lập — nhưng
**cùng một mô hình ngôn ngữ đọc cả bốn và viết ra câu trả lời**. Hội tụ có thể là hội tụ của tài liệu,
mà cũng có thể là hội tụ của khuôn diễn đạt. Ch13 có khai điều này. Nó vẫn là điểm yếu thật.

---

## Lăng kính 5 — Sở hữu trí tuệ và phơi nhiễm

**Đóng góp gốc của tác giả — ba thứ, không phải toàn cuốn:**

1. **Khung ba tầng** (phương pháp · phê bình · hệ thống) và việc dùng tầng ba giải thích hai tầng kia.
   Không nguồn nào trong 66 tài liệu đặt Meadows cạnh Pahl-Beitz.
2. **Bảng ánh xạ 14 công cụ × tầng đòn bẩy** ở Ch16 — 13/14 ô là phán đoán của tác giả. Đây vừa là
   đóng góp gốc lớn nhất, vừa là chỗ mỏng nhất. Hai điều đó không mâu thuẫn.
3. **Thủ tục quyết định ba bước** ở Ch18 và **bốn dấu hiệu sớm** ở Ch17.

**Bốn dấu hiệu sớm là thứ chuyển giao được nhất trong cả cuốn** — quan sát được từ một buổi chiều đến
một quý: lỗi bị dùng làm bằng chứng · ép đồng nhất không cho tailoring · hai miền hiểu khác nhau cùng
một thuật ngữ giao diện · miễn trừ không có điều kiện đóng.

**Phơi nhiễm:** 18 mục *Áp dụng ở Xưởng* mô tả cách một xưởng vài chục người ra quyết định thiết kế.
Đã quét sạch định danh (`sec_gate.py`, kiểm đột biến 6/6). Người ngoài đọc **không** suy ra được sản
phẩm, khách hàng hay năng lực cụ thể — nhưng suy ra được **mức trưởng thành quy trình**. Với một xưởng
đang chào thầu, đó là thông tin có giá.

**Nếu xuất bản công khai:** không cần cắt gì về mặt bí mật. Nhưng nên **đổi khung** mục *Áp dụng ở Xưởng*
từ *"đây là việc xưởng chúng tôi làm"* sang *"đây là việc một xưởng cỡ này nên làm"* — cùng nội dung,
khác hàm ý về chính mình.

---

## Việc lớn nhất P9 tìm ra, và nó không nằm trong cuốn sách

Dự án này vừa dựng ra **sáu cổng kiểm chạy được**, và **bốn trong sáu đã tự chứng minh bằng đột biến**:

| Cổng | Kiểm gì | Đột biến |
|---|---|---|
| `p5_gate.py` | 15 luật cắt ngang chương | 7/7 |
| `sec_gate.py` | rò rỉ định danh | 6/6 |
| `contradict.py` | sách tự mâu thuẫn — chương này phủ nhận, chương kia khẳng định | 1/1 |
| `verify_quotes.py` | mọi đoạn trích, chạy hết không lấy mẫu | — |
| `crosslink.py` | toàn vẹn khi nhiều agent sửa song song | — |
| `audit.py` | gốc gác nội dung | — |

Chúng **không thuộc riêng cuốn sách này.** `verify_quotes` và `contradict` áp được cho mọi deliverable
có trích dẫn; `crosslink` áp cho mọi việc fan-out nhiều agent; `sec_gate` áp cho mọi tài liệu sắp rời máy.

| # | Việc | COD | Ưu tiên |
|---|---|---|---|
| **P1** | Codify sáu cổng thành một skill dùng chung — đề xuất `book-gates` hoặc mở rộng `book-audit` | **Core** (quyết định) + Offload (thực thi) | **CAO** |
| P2 | Ghi vào chuẩn: **mọi cổng mới phải có kiểm đột biến trước khi được tin.** Bốn cổng ở đây đều từng báo xanh sai hoặc báo đỏ oan trước khi sửa | Core | CAO |

**Bài học đắt nhất để codify cùng chúng:** cổng `p5_gate` phải sửa **năm lần**, `contradict` **bốn lần**,
`verify_quotes` **bốn lần** — và gần như mọi lần đều là **cổng kêu oan**, không phải bản thảo sai. Một
cổng kêu oan 90% sẽ bị nới cho hết kêu, và lúc đó nó vẫn còn đó, vẫn chạy, vẫn báo xanh, nhưng không
còn chặn gì. **Đó nguy hiểm hơn không có cổng.**

Và thứ tự đã cứu dự án này bốn lần: **khi cổng báo bất thường, giả thuyết đầu tiên là phép đo sai,
không phải vật bị đo sai.**

---

## Checkpoint CEO

Chọn việc để chạy tiếp. Không việc nào tự khởi động.

**Đề xuất ba việc trước:** **F1** (chấm Xưởng trên năm giả định — đầu vào của mọi thứ khác) ·
**H1** (phân loại CỔNG/GỢI Ý trong skill HELIX) · **P1** (codify sáu cổng).

**Còn treo:** năm truy vấn lăng kính NLM chưa chạy được. Chạy `Phase6-Revised/p9.sh` khi có lại xác thực,
rồi đối chiếu — chỗ hai bên lệch nhau mới là chỗ đáng đọc.
