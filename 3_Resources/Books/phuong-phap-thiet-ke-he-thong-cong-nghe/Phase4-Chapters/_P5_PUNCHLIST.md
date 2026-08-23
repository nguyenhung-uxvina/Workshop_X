# Sổ nợ chuyển sang P5 — các việc cắt ngang nhiều chương

Lập trong lúc P4 đang chạy. Đây là những việc **không agent nào tự thấy được** vì mỗi agent chỉ nhìn
chương của mình. P5 phải xử lý từng mục và tick.

---

## N-01 — Luận đề đã đổi giữa chừng: "sáu mươi năm" → "nửa thế kỷ" ⚠ CHƯA ĐÓNG

**Chuyện gì xảy ra.** Agent Ch01 áp Luật 1 lên chính câu luận đề và nó trượt: không nguồn nào trong 66
tài liệu viết con số sáu mươi năm, và số học cũng không đỡ — *Konstruktionslehre* bản tiếng Đức đầu ra
năm 1977, tức **49 năm** tính đến 2026. Nguyên văn duy nhất về bề dày thời gian trong toàn corpus là
`"Design guidelines have been developed over the past 50 years."` `[13]`.

**Đã sửa:** `Phase2-Positioning.md`, `Phase3-Outline.md`, `_pipeline_state.md`, `_P4_CONTRACT.md`, và
`Ch01` (kể lại quá trình sửa thay vì im lặng đổi chữ).

**Việc của P5 — hai phần:**

1. **Các chương viết trước lúc sửa vẫn mang chữ cũ.** Hợp đồng P4 đã đổi giữa chừng, nên agent nào đọc
   hợp đồng trước thời điểm sửa sẽ trích luận đề bản cũ. Quét toàn bộ `Phase4-Chapters/` tìm
   `sáu mươi năm` và `60 năm`; mọi chỗ **trích luận đề** phải đổi thành *nửa thế kỷ*.
   Ngoại lệ giữ nguyên: hai chỗ trong Ch01 đang **kể lại** việc sửa.

2. **Ch03 dùng con số theo nghĩa khác, và cũng chưa có nguyên văn.** Bản nháp có câu *"sáu mươi năm sau
   vẫn nhắc lại nguyên vẹn"* — đây không phải trích luận đề mà là một khẳng định độc lập về độ bền của
   một mệnh đề qua thời gian. Nó cần nguyên văn riêng, hoặc phải đổi thành mốc có trích dẫn
   (1977 → nay), hoặc bỏ con số.

> **Bài học đăng ký cho P7:** lỗi này không bị bắt bởi ai đọc kỹ. Nó bị bắt bởi một **luật cơ học** —
> mọi con số phải chỉ ra được câu nguyên văn của nó, nếu không thì bỏ — và luật đó không quan tâm ai
> viết ra con số. P7 phải chạy đúng luật đó trên toàn bản thảo, kể cả phần do người biên tập viết.

---

## N-02 — Trần dòng của Ch08 là cảm biến R5 ⚠ CHƯA KIỂM

Ch08 có trần **450 dòng**. Vượt trần nghĩa là chương đang viết lại cuốn `icdm-hari-weiss` (126.578 từ)
chứ không phải đối chiếu với nó. P5 đếm dòng thật và đối chiếu; vượt thì **cắt**, không nới trần.

Kiểm thêm bằng nội dung: Ch08 **không được** giải thích cách dùng bảy công cụ ICDM, chỉ được nêu tên và
mỗi cái một câu nói nó cắt vào pha nào.

---

## N-03 — Ch13 có thể trả về ít hơn năm giả định ⚠ CHƯA KIỂM

Agent Ch13 được phép hạ số giả định xuống 3 hoặc 4 nếu không truy được nguyên văn trong tài liệu gốc.
Nếu nó hạ thật thì **tiêu đề chương, mục lục, và mọi tham chiếu chéo ở Ch01, Ch14, Ch17, Ch18 đều phải
đổi theo**. Đây là loại lỗi rất dễ sót vì mỗi agent chỉ nhìn chương của mình.

---

## N-04 — Ch16 phải công khai tỷ lệ ô suy luận ⚠ CHƯA KIỂM

Bảng ánh xạ công cụ → tầng đòn bẩy bắt buộc có cột *căn cứ ánh xạ*, mỗi ô hoặc trích nguyên văn hoặc
ghi *"suy luận của tác giả"*. P5 đếm hai loại ô. Nếu phần lớn là suy luận thì đó là kết quả trung thực
và phải được **nói ra ngay trong chương**, không giấu xuống sổ kiểm cuối chương.

---

## N-05 — Nhất quán thuật ngữ theo glossary 17 mục ⚠ CHƯA KIỂM

Kiểm chéo toàn bộ 18 chương với bảng glossary ở `Phase2-Positioning.md`. Hai mục dễ trôi nhất:
- **L1–L12**: quy ước **số nhỏ = đòn bẩy lớn** đi ngược trực giác. Bất kỳ chương nào viết ngược là hỏng
  cả Phần V.
- **VDI 2221 không ghi năm = bản 1993**. Chương nào để trống năm trong ngữ cảnh bản 2019 là gây hiểu sai.

---

## N-06 — Con số đã bị các agent chủ động BỎ ✅ GHI NHẬN, KHÔNG PHẢI LỖI

Ghi lại để P7 không tưởng là thiếu sót và đi "bổ sung" lại:
- **Ch05** bỏ phép đếm *"8 hoạt động / 8 kết quả"* của VDI 2221:2019 — nguồn không tự đếm. Chương liệt
  kê đủ tám dòng nhưng **để trống cột số hiệu** và nói ra lý do trong thân bài.
- **Ch05** chỉ nêu được tên **5/10** nhóm nhân tố ngữ cảnh; năm nhóm còn lại ghi rõ *không có trong nguồn*.
- **Ch01** cố ý **không** nêu số bước pha cụ thể hoá; con số đó thuộc về Ch03 kèm câu phủ nhận liền trước.

Đây là hành vi đúng theo Luật 1. **Không được "sửa" chúng thành có số.**

---

## N-07 — Cổng an ninh chạy lại sau khi đủ 18 chương ⚠ CHƯA CHẠY

`_source_manifest.md` dòng S-02 chưa ký. Ký sau khi 18 mục *Áp dụng ở Xưởng* đã tồn tại và quét được
bằng nội dung — **không ký trước**.

Bộ dò phải rộng hơn danh mục cần bảo vệ. Dương tính giả đã biết và chấp nhận được: `Defense mechanisms`
trong trích dẫn thuật ngữ tâm lý của Meadows.

---

## N-08 — Bẫy "liệt kê đủ mà không đếm" xuất hiện **năm lần**, không phải một ✅ CẢM BIẾN CHẠY ĐÚNG

Đây là phát hiện đáng kể nhất của P4, và nó là phát hiện về **lớp lỗi**, không phải về một con số.

| # | Phép đếm | Ai bắt | Kết quả |
|---|---|---|---|
| 1 | 15 bước cụ thể hoá Pahl-Beitz | kiểm trước P4 (PDF gốc) | `fifteen` 0 lần / 1,18 triệu ký tự |
| 2 | 8 hoạt động / 8 kết quả VDI 2221:2019 | agent Ch05 | nguồn không đếm → để trống cột số hiệu |
| 3 | 5 bước micro-cycle VDI 2206 | agent Ch06 | `c3` ghi thẳng *"không có trong nguồn"* |
| 4 | 6 bước chuỗi giải quyết vấn đề P&B | agent Ch06 | tên bước nằm ở **Figure 4.1**, `six steps` 0 lần |
| 5 | 5 hoạt động luồng cam VDI 2206:2021 | agent Ch07 | không nguyên văn nào đếm |

**Ca 3 và ca 4 là con số của CHÍNH TÔI** — chúng đã nằm trong glossary `Phase2-Positioning.md` và trong
mục *Key findings* của `_pipeline_state.md` trước khi P4 chạy. Nguồn gốc: vòng truy vấn **khám phá** của
NLM khẳng định "5 bước" mà không trích được câu nào; vòng truy vấn **sâu** của chính NLM sau đó nhận là
không có trong nguồn. Tôi lấy con số từ vòng đầu.

Đã sửa cả ba nơi (glossary, sổ pipeline, dàn ý Ch06) và ghi lại quá trình sửa.

> **Điều đáng rút ra:** cùng một mô hình cho hai câu trả lời trái ngược cho cùng một sự kiện, tuỳ độ sâu
> câu hỏi. Bản tóm tắt cấu trúc **tự tin hơn** bản truy vấn chi tiết, và nó tự tin sai. **Không bao giờ
> lấy phép đếm từ một truy vấn tổng quan.**

## N-09 — Mâu thuẫn nguồn: chi phí vòng đời bị khoá ở pha ý tưởng ⚠ PHẢI XỬ Ở P6

Agent Ch03 phát hiện ba con số cho **cùng một mệnh đề**:

| Nguồn | Nguyên văn |
|---|---|
| `[45]` | `>75%` |
| `[50]` | `About 75 %` |
| `[47]` | `about 80 %` |

`[50]` và `[47]` **cùng dẫn một tài liệu Blanchard 1978** mà ra hai con số khác nhau. Và **không tài liệu
nào trong corpus tự đo** — tất cả đều trích lại.

Đây đúng mẫu mâu thuẫn đã ghi ở dự án `phuong-phap-thiet-ke-khi-tai-co-ai`, nơi một nguồn nêu **cả 75%
lẫn 80%** cùng quy cho Blanchard 1978 **trong cùng một bài**. Hai dự án độc lập gặp cùng một con số trôi.

**P6 phải xử:** không chọn một con số rồi trình bày như sự thật. Trình bày cả ba, nêu rõ chúng trích lại
chứ không đo, và dùng **chiều** của mệnh đề (chi phí bị khoá sớm) chứ không dùng **độ lớn**.

## N-10 — Toàn bộ Phần V đọc Meadows và Goldratt QUA MỘT LỚP THỨ CẤP ⚠ PHẢI KHAI Ở CH16, CH17

Agent Ch15 phát hiện: **corpus không chứa sách của Meadows lẫn Goldratt.** Nhóm F chỉ có tám tệp
`DMIR Analysis …` — tài liệu viết *về* hai cuốn đó. *Thinking in Systems* và *The Goal* chỉ xuất hiện
dưới dạng dòng thư mục tham khảo bên trong các tệp phân tích ấy.

**Hệ quả:** mọi câu "nguyên văn" ở Phần V là nguyên văn **của tài liệu phân tích**, không phải của
Meadows. Kể cả câu 99% và câu `"TOC emerges as primarily an L10-level intervention methodology"`.

Đây là **tầng khai báo thứ tư**, đứng cạnh ba khai báo ở Ch01, và nó chưa từng được ghi ở
`Phase2-Positioning.md` hay `_danh_muc_nguon.md` — tôi không biết điều này khi viết luận đề.

**Việc phải làm:**
- Ch15 đã khai. **Ch16 và Ch17 phải khai lại** — ở Ch16 ranh giới căng hơn hẳn, vì chương đó ánh xạ
  từng công cụ thiết kế vào thang đòn bẩy, tức là dùng lớp thứ cấp để chấm điểm lớp sơ cấp.
- Bổ sung vào mục *Khoảng trống phải khai báo* của `_danh_muc_nguon.md`.
- Cân nhắc thêm thành khai báo thứ tư ở Ch01.

> Ghi chú về chuỗi suy diễn đang dùng ở Phần V: **thang Meadows (thứ cấp) → ánh xạ của sách (suy luận)
> → kết luận về công cụ thiết kế (sơ cấp).** Hai lớp suy diễn chồng nhau. Nó vẫn dùng được, nhưng phải
> được nhìn thấy — chứ không phải được trình bày như một phép đo.

## N-11 — "Năm nguồn độc lập hội tụ" thật ra là BỐN ⚠ PHẢI SỬA Ở P5

Agent Ch13 áp Luật 4 lên chính chỗ chống lưng cho luận đề. Năm truy vấn xuyên suốt chạy trên năm
notebook, nhưng **notebook thứ năm là Meadows/Goldratt** — và Luật 4 đã loại tuyến đó khỏi vai trò
*bằng chứng về thiết kế kỹ thuật*, chỉ giữ nó làm lăng kính.

Không thể vừa loại nó khỏi vai bằng chứng ở Phần V, vừa đếm nó vào bằng chứng ở Ch13. **Con số thật là
bốn khối tài liệu độc lập.**

**Chỗ phải sửa:** `Phase2-Positioning.md` mục *Chuỗi lập luận* · `P1_Synthesis.md` mục *Chủ đề xuyên suốt*
· `_pipeline_state.md` P1 key finding #1 · và mọi chương nói "năm nguồn độc lập" / "năm khối tài liệu".

Ch13 đã tự dùng **bốn** và giải thích lý do trong thân bài. Các chương khác chưa.

> Đây là lần thứ ba một agent bắt lỗi trong vật liệu của tôi chứ không phải trong vật liệu nguồn:
> (1) "sáu mươi năm" · (2) "micro-cycle 5 bước" và "6 bước P&B" · (3) "năm nguồn độc lập".
> Cả ba đều là **con số tôi tự tin đưa vào mà không có nguyên văn**, và cả ba đều bị bắt bởi cùng một
> luật cơ học chứ không bởi ai đọc kỹ hơn.

## N-12 — Ma trận 5×4 của Ch13 cố ý KHÔNG đầy ✅ GHI NHẬN, KHÔNG PHẢI LỖI

Ch13 phủ 2/4, 3/4, 4/4, 3/4, 3/4 — mỗi ô trống có lý do nội dung viết kèm. Đây là **dấu hiệu bảng
không bị nhồi cho đẹp**. P7 không được "hoàn thiện" ma trận này.

## N-13 — Cổng P5 đã phải sửa NĂM lần trước khi tin được ⚠ ĐỌC TRƯỚC KHI DÙNG `p5_gate.py`

Công cụ: `Phase6-Revised/p5_gate.py`, chạy `BOOK_DIR=<đường dẫn> python p5_gate.py`.

Lịch sử dương tính giả — ghi lại vì bản thân nó là bài học:

| Lần | Cổng báo đỏ | Thực tế |
|---|---|---|
| 1 | Ch15 "L12 bị mô tả là mạnh" | chương đang **bác bỏ** hiểu lầm đó → thêm nhận biết ngữ cảnh phủ định |
| 2 | Ch14 "Áp dụng ở Xưởng có 0 mục" | biến thể A đánh số bằng `**1.` chứ không `### 1.` |
| 3 | 59 cảnh báo N-08 | gần hết là con số cấu trúc của chính sách → whitelist + chỉ soi số gán cho nguồn |
| 4 | Ch16 "Chào bạn" | `"Khi ai đó **chào bạn** một phương pháp"` — động từ chào hàng |
| 5 | 8 chỗ "ba/bốn giả định" | giả định **của riêng từng phương pháp**, không phải tập của Ch13 |

**Bắt đúng: 3 lỗi thật** — `sáu mươi năm` ở Ch03 và hai chỗ ở Ch16.
**Kiểm bằng đột biến: 7/7** — tiêm phép đếm không nguyên văn, đảo quy ước tầng L, rò mã sản phẩm, lời
chào bị cấm, luận đề cũ, Ch08 vượt trần, xoá mục *Áp dụng ở Xưởng*. Cổng bắt cả bảy.

> **Bài học:** tỷ lệ báo oan là thứ quyết định cổng có sống sót hay không. Một cổng kêu oan 90% sẽ bị nới
> cho hết kêu, và lúc đó nó vẫn còn đó, vẫn chạy, vẫn báo xanh — nhưng không còn chặn gì. Đó chính là
> cách một cổng thật biến thành cổng hình thức, và nó nguy hiểm hơn không có cổng.
