# Phản biện biên tập — Chương 07 đến 12

Ngày: 2026-08-19 · Phạm vi: `Ch07`, `Ch08`, `Ch09`, `Ch10`, `Ch11`, `Ch12`
Đã đọc trước: `Phase2-Positioning.md` · `Phase3-Outline.md` · `_P4_CONTRACT.md` · `_P5_PUNCHLIST.md`

> **Quy ước.** Mười ba mục đã có trong `_P5_PUNCHLIST.md` (N-01 → N-13) **không** được báo lại.
> Mọi mục dưới đây là phát hiện mới, hoặc là một ca cụ thể chưa được liệt kê của một lớp lỗi đã biết —
> chỗ nào như vậy thì có ghi rõ lớp lỗi cha.
>
> **KHÔNG sửa chương.** Việc sửa thuộc P6.

---

## 1. Bảng xác minh trích dẫn — chiều thứ tám

### 1.1 Cách làm

Không đọc bằng mắt. Làm bằng công cụ, ba vòng:

1. **Rút** mọi chuỗi dạng `` `"..."` `` (backtick + nháy kép) khỏi sáu chương — 270 chuỗi thô,
   261 chuỗi sau khi bỏ các mảnh quá ngắn.
2. **Chuẩn hoá** hai bên: NFKC, quy nháy cong `“ ” ‘ ’` về nháy thẳng, quy `–` `—` về `-`,
   nuốt xuống dòng và ký tự `>` của block quote, ép mọi khoảng trắng về một dấu cách, hạ chữ thường.
3. **Đối chiếu** với toàn bộ `Phase1-Exploration\*.md` **và** `Phase1-Exploration\_raw\*.json`
   (37 tệp JSON — vòng truy vấn gốc). Trích có `...` ở giữa được **tách thành mảnh** và mỗi mảnh
   kiểm riêng, vì phép so nguyên khối sẽ báo âm tính giả cho mọi trích có chỗ lược.

Mười hai đoạn dưới đây được chọn **ngẫu nhiên có hạt giống cố định** (`random.seed(20260820)`),
hai đoạn mỗi chương, chỉ lấy các trích **đủ câu** (loại các trích đã bị lược bằng `…`, vì chúng
không phải một chuỗi liên tục để tìm).

### 1.2 Bảng 12 đoạn

| # | Chương | 30 chữ đầu | Kết quả | Tệp khớp |
|---|---|---|---|---|
| 1 | Ch07 | `© Verein Deutscher Ingenieure e.V., Düsseldorf 2021` | **TÌM THẤY** (khớp nguyên khối) | `SYNTH_Exploration.md` · `c3-vdi2206-vmodel-cps_Exploration.md` (+4 tệp `_raw`) |
| 2 | Ch07 | `The inherent concern logic of the V-Model represents the logical sequence of tasks…` | **TÌM THẤY** (khớp nguyên khối) | `c3-vdi2206-vmodel-cps_Exploration.md` (+3 tệp `_raw`) |
| 3 | Ch08 | `at least 70% of the customer satisfaction` | **TÌM THẤY** (khớp nguyên khối) | `c5-danh-gia-chon_Exploration.md` · `c6-icdm-ban-mo-rong_Exploration.md` |
| 4 | Ch08 | `within 20% of the final actual unit manufacturing cost` | **TÌM THẤY** (khớp nguyên khối) | `c6-icdm-ban-mo-rong_Exploration.md` |
| 5 | Ch09 | `In addition to this, it is known that designers have had difficulties identifying…` | **TÌM THẤY** (khớp nguyên khối) | `c4-sinh-giai-phap_Exploration.md` |
| 6 | Ch09 | `Trays designed by students had a limit of carrying 2 cups as a minimum…` | **TÌM THẤY** (khớp nguyên khối) | `c4-sinh-giai-phap_Exploration.md` |
| 7 | Ch10 | `or the example of radar it took 15 years uh until it became available…` | **TÌM THẤY** (khớp nguyên khối) | `c5-danh-gia-chon_Exploration.md` |
| 8 | Ch10 | `the AI and machine learning which is available now initiated before 1990…` | **TÌM THẤY** (khớp nguyên khối) | `c5-danh-gia-chon_Exploration.md` |
| 9 | Ch11 | `We can compare design process data only against forecasts or expectations…` | **TÌM THẤY** (khớp nguyên khối) | `c6-icdm-ban-mo-rong_Exploration.md` |
| 10 | Ch11 | `choose a limited number of principal solutions (at least 3)` | **TÌM THẤY** (khớp nguyên khối) | `c4-sinh-giai-phap_Exploration.md` |
| 11 | Ch12 | `This starting point, we suggest, makes it exceedingly hard for Pahl & Beitz…` | **TÌM THẤY** (khớp nguyên khối) | `c7-doi-chieu-phe-binh_Exploration.md` |
| 12 | Ch12 | `since it does not predict designers' early focus on generating solutions` | **TÌM THẤY** (khớp nguyên khối) | `c7-doi-chieu-phe-binh_Exploration.md` |

**12/12 TÌM THẤY. Không có CRITICAL nào từ chiều thứ tám.**

### 1.3 Quét vét cạn — 261 trích, không phải 12

Mẫu 12 đoạn là yêu cầu tối thiểu. Vì phép đối chiếu chạy bằng máy nên chi phí mở rộng gần bằng
không, và tôi đã chạy nó trên **toàn bộ 261 trích** của sáu chương.

**Kết quả: 261/261 truy được về nguồn. Không đoạn nào bịa.**

Sáu trích ban đầu báo âm tính, và cả sáu là **khác biệt sắp chữ**, không phải khác biệt nội dung.
Ghi lại vì chúng là dữ liệu về kỷ luật trích dẫn, không phải về tính trung thực:

| Chương | Chương viết | Nguồn viết | Bản chất |
|---|---|---|---|
| Ch07 | `…the six different interpretations of the V-model…` | `…the V- model…` | nguồn có khoảng trắng thừa sau gạch nối (lỗi tách từ của PDF) |
| Ch07 | `The Requirement-Functional-Logical-Physical (RFLP)…` | `The Requirement -Functional -Logical -Physical…` | như trên |
| Ch09 | `…using a corrective approach…` | `…using a corrective ap-proach…` | chương đã nối lại chữ bị PDF ngắt dòng |
| Ch10 | `…student design issue behavior. This observation…` | `…behavior.18 This observation…` | chương đã gỡ số chú thích `18` |
| Ch12 | `Garfinkel, H. 'Studies in Ethnomethodology', Englewood Cliffs…` | `Garfinkel, H. “Studies in Ethnomethodology”…` | nháy kép lồng đổi thành nháy đơn (bắt buộc về mặt cú pháp) |
| Ch12 | (bản rút gọn của cùng câu trên) | — | như trên |

Bốn ca đầu là **chỉnh sửa im lặng bên trong dấu trích nguyên văn**. Chúng đều lành — dọn rác PDF —
nhưng chúng vẫn là chỉnh sửa, và một cuốn sách lấy độ chính xác của trích dẫn làm luận cứ trung tâm
nên nói ra quy ước dọn rác của mình một lần ở lời mở. Xếp **MINOR**, mã `X-01`.

> **Hiệu chỉnh mức độ.** Coordinator đã chạy độc lập phép đối chiếu 625 đoạn trích của cả 18 chương
> và được 625/625. Kết quả của tôi trên sáu chương (261/261) hội tụ với con số đó bằng một đường
> hoàn toàn khác — bộ chuẩn hoá khác, tập tệp khác (tôi có kéo cả `_raw\*.json`), phép tách mảnh khác.
> Hai phép đo độc lập cùng ra âm tính là bằng chứng mạnh hơn một phép đo ra âm tính.
> **Kết luận: không hạ mức độ vì không có mức độ nào để hạ — không đoạn nào bị bỏ ngỏ.**

---

## 2. Bốn phép kiểm riêng

### 2.1 Ch07 — con số 58–90% ✅ ĐẠT

Ba thứ bắt buộc phải nằm **cùng một chỗ**. Cả ba đều có, trong khung *Đào sâu: Một con số đi đường xa*
(dòng 275–311), tức là chúng nằm sát nhau chứ không rải khắp chương:

| Điều kiện | Kết quả | Bằng chứng |
|---|---|---|
| Gọi đích danh đại lượng là **"nhu cầu năng lượng điện"**, không viết "cải thiện" | ✅ | dòng 280–281: *"Đại lượng đo được nêu đích danh là **nhu cầu năng lượng điện**"* |
| Nguyên văn `"slightly outperforms state-of-the-art air conditioning"` | ✅ | dòng 290, trích đủ câu, kèm phân tích riêng chữ *slightly* |
| Cỡ mẫu 1 xe + 4 người dùng | ✅ | dòng 299: nguyên văn `"applied to a research vehicle and four representative users."` |

Chương làm **nhiều hơn** yêu cầu, và làm đúng hướng:
- thêm câu **liền sau** — `"Challenges include the cost, size and mass of the prototypical design."`
- ghi rằng 58–90% là kết quả của **một trong chín** hạng mục yêu cầu;
- ghi rằng số lần đo, số kịch bản và điều kiện biên **không có trong nguồn**;
- tự hạ trọng lượng con số: *"giai thoại minh hoạ, không phải luận cứ chịu lực… Nếu nó biến mất
  khỏi chương này, không luận điểm nào ở trên yếu đi."*

Đây là cách xử lý đúng của Luật 2, và nó nên được dùng làm mẫu cho P6 ở mọi con số ấn tượng khác.
Câu hỏi mở trong `Phase3-Outline.md` dòng 174 (*"chưa rõ điều kiện đo — truy về bài gốc, hoặc không dùng"*)
coi như **đã đóng**: chương không truy được bài gốc, và đã chọn đúng nhánh còn lại là nói ra rằng
không truy được.

### 2.2 Ch08 — trần 450 dòng và bảy công cụ ⚠️ ĐẠT PHẦN DÒNG, HỎNG PHẦN CON SỐ

**Đếm dòng thật:** `375` dòng. Trần `450`. **Dưới trần 75 dòng.** ✅
Chương tự khai `- **Số dòng:** 375` ở sổ kiểm — khớp với phép đếm độc lập.

**Kiểm nội dung — có giải thích cách dùng không:** ❌ Không. Bảy công cụ nằm trong **một bảng bảy dòng**
(dòng 89–97), mỗi dòng đúng một câu nói nó cắt vào bước nào. Không công thức, không thang điểm, không
biểu mẫu, không quy trình thực thi, không ca áp dụng. Câu chốt ở dòng 102: *"Công thức, thang điểm,
biểu mẫu và ca áp dụng của cả bảy: `icdm-hari-weiss`. Chương này dừng ở đây."* Ràng buộc R5 được giữ.

**Nhưng phép kiểm làm lộ ra hai chuyện mới, và cả hai đều nghiêm trọng hơn chuyện độ dài:**

1. **Bản thân con số "bảy" không có nguyên văn** — và `Ch16` đã công khai nói vậy trong một khung
   *Đào sâu* riêng, trong khi `Ch08` và bốn chương khác vẫn dùng nó như sự thật. → **`C-01`, CRITICAL**.
2. **Danh sách bảy công cụ của Ch08 khác danh sách của glossary.** → **`C-05`, MAJOR**.

Chi tiết ở mục 4 (Ch08) và mục 9.

### 2.3 Ch10 — không được giải thích thang đòn bẩy ✅ ĐẠT

Grep `đòn bẩy|Meadows|L1|L12|L10|L2|Goldratt|TOC` trên toàn văn Ch10:

- **Trong thân bài: 0 lần.** Không một chữ *Meadows*, không một mã tầng `L1`–`L12`, không *Goldratt*,
  không *TOC*.
- **Một câu chêm trỏ sang Chương 15, đúng một câu**, ở dòng 440, cuối mục đối chiếu DSO:
  > *"Chương 15 sẽ cho một cách đo chuyện này chính xác hơn."*
  Câu đứng riêng một dòng, không mở rộng, không giải thích thang là gì.
- Hai lần xuất hiện còn lại của cụm *tầng đòn bẩy* nằm ở **sổ kiểm cuối chương** (dòng 525–526),
  tức ngoài thân bài, và nội dung của chúng chính là lời tự khai rằng chương **không** giải thích thang.

Chương làm đúng phân công. Đáng ghi nhận thêm: khi Ch10 cần nói về "công cụ này ngồi ở đâu",
nó nói bằng ngôn ngữ riêng của mình — *ai được quyền cho điểm* — thay vì mượn thang chưa được giới thiệu.
Đó là cách xử lý tốt hơn cả việc chêm câu trỏ.

*(Ghi ngoài lề, không phải lỗi: `Ch08` và `Ch09` đều có chạm tầng đòn bẩy. Cả hai được phép —
`Ch08` có nguyên một mục "Tầng đòn bẩy: nêu vấn đề, chưa xếp hạng" theo đúng dàn ý, `Ch09` chạm một
đoạn và có khai báo. Ràng buộc "không giải thích" chỉ áp cho `Ch10`.)*

### 2.4 Ch12 — mục phân biệt "không mô tả đúng" ≠ "vô dụng" ✅ ĐẠT

Có **mục thân riêng**, không phải một đoạn chèn:

```
## Phân biệt quyết định toàn bộ phần còn lại của sách      (dòng 472)
### Bốn lý do lấy thẳng từ nguồn                            (dòng 485)
### Bảng phân định                                          (dòng 510)
### Cần bằng chứng gì mới kết luận được "vô dụng"           (dòng 524)
### Phát biểu gọn để mang đi                                (dòng 550)
```

Mục dài 78 dòng, có bốn tiểu mục, hai bảng, và nó **tự nêu điều kiện bác bỏ chính mình** —
ba loại bằng chứng cần có để kết luận "vô dụng", kèm câu thừa nhận rằng **không thứ nào trong ba
nằm trong 66 tài liệu**. Đó là mức chặt chẽ cao hơn hẳn yêu cầu.

Hai bảng làm đúng việc khó nhất:
- *Bảng phân định* sáu dòng, cột trái **chứng minh** / cột phải **KHÔNG chứng minh**, kèm câu
  *"Cột phải quan trọng hơn cột trái"*;
- bảng *Đọc hư vô* so *Đọc đúng phạm vi*, dòng cuối chỉ thẳng hệ quả: *"Chương 13, Phần V,
  Chương 18 hết nghĩa"*.

Nối xuống cũng đúng: `Ch13` giữ **năm** giả định (đã kiểm — `N-03` của punchlist coi như đóng),
nên câu *"Chương 13 gọi tên năm giả định tổ chức"* ở dòng 546 và 558 là chính xác.

**Không CRITICAL từ phép kiểm này.** Nhưng chính chương này lại vấp Luật 1 ở mục *Áp dụng ở Xưởng* —
xem `C-03`.

---

## 3. Bảng tổng hợp — chương × mức độ

| Chương | CRITICAL | MAJOR | MINOR | Tổng |
|---|---|---|---|---|
| **Ch07** | 0 | 3 | 2 | 5 |
| **Ch08** | 2 | 3 | 1 | 6 |
| **Ch09** | 0 | 2 | 4 | 6 |
| **Ch10** | 0 | 2 | 2 | 4 |
| **Ch11** | 1 | 5 | 1 | 7 |
| **Ch12** | 1 | 4 | 2 | 7 |
| **Xuyên chương** | 0 | 2 | 2 | 4 |
| **TỔNG** | **4** | **21** | **14** | **39** |

### Bốn mục CRITICAL, gọi tên trước

| Mã | Chương | Vấn đề | Lớp lỗi cha |
|---|---|---|---|
| `C-01` | Ch08 (lan sang Ch01, Ch10, Ch15, Ch17, Ch18) | **"bảy công cụ ICDM"** — phép đếm không có nguyên văn, trong khi `Ch16` công khai tuyên bố nó không có nguyên văn | `N-08` ca thứ **6** |
| `C-02` | Ch08 | **"hai mươi năm nghiên cứu"** — mâu thuẫn với chính nguyên văn `1996`–`2001` mà chương trích cách đó 180 dòng | `N-01` |
| `C-03` | Ch12 | **"sáu câu hỏi lâm sàng"** — mâu thuẫn với tuyên bố Luật 1 của chính chương ở dòng 253, và với chính sổ kiểm của chương | `N-08` ca thứ **7** |
| `C-04` | Ch11 | **"quy trình tám bước của Roozenburg & Eekels"** — mâu thuẫn với tuyên bố của `Ch09` rằng nguồn không tự đếm | `N-08` ca thứ **8** |

> **Điều đáng nói về hình dạng của bốn mục này.** Không mục nào là lỗi trích dẫn — 261/261 trích đều
> thật. Cả bốn đều là **phép đếm do người viết điền vào**, và cả bốn đều bị bắt bởi cùng một luật cơ học
> mà `N-08` đã dựng. Punchlist ghi năm ca; sáu chương này đóng góp thêm ba ca nữa, nâng tổng lên **tám**.
> Và ba trong bốn mục **mâu thuẫn với một câu do chính cuốn sách viết ra ở chỗ khác** — nghĩa là bằng
> chứng để bắt chúng đã nằm sẵn trong bản thảo, chỉ chưa ai đối chiếu chéo.

---

## 4. Chương 07 — VDI 2206:2021: ba luồng, và chữ V không còn là chữ V

**643 dòng** (dàn ý: 500–650 ✅) · 3 sơ đồ (dàn ý: 3 ✅) · 1 *Đào sâu* · 5 mục *Áp dụng* ✅

### (1) Chất lượng mở chương — **rất tốt**

Ba đoạn mở làm đủ ba việc và làm sắc.

- **Móc:** *"Hình chữ V là thứ dễ nhớ nhất mà ngành thiết kế hệ thống từng sản xuất ra… Và đó chính là
  vấn đề."* Câu thứ hai lật câu thứ nhất trong sáu chữ. Cái hỏng được nêu cụ thể, không trừu tượng:
  *"một tổ chức tiếp tục vận hành một lịch trình cổng nghiệm thu theo giai đoạn, gọi tên nó là VDI 2206,
  và tin rằng mình đang làm đúng chuẩn."*
- **Nối ngược đích danh:** *"Chương 06 kể bản 2004: chữ V hai nhánh, bốn pha…"* — gọi tên chương, tóm
  đúng nội dung, rồi định vị chương này là *"chuyện gì xảy ra khi chính uỷ ban soạn thảo quay lại nhìn
  canh bạc đó… thấy nó chưa được ăn, và viết lại."*
- **Hứa ba kết quả**, đánh số **Một / Hai / Ba**, mỗi cái là một thứ mang đi được.

Đoạn thứ tư — nhắc lại khai báo 2 (corpus không có toàn văn VDI nào) — đặt đúng chỗ: trước khi chương
bắt đầu khẳng định về nội dung tiêu chuẩn, chứ không phải ở cuối.

### (2) Mạch — **tốt, một chỗ chùng**

Mạch chính chạy sạch: mốc thời gian → ba luồng → câu bác bỏ của tác giả → RFLP → giả định mô hình ảo →
đối chiếu 2004/2021 → giả định tổ chức. Mỗi mục dựng cho mục sau.

Chỗ chùng duy nhất là mục **"2004 đặt cạnh 2021"** (dòng ~355–430). Nó đến **sau** khi phần lớn nội dung
đối chiếu đã được nói rồi ở các mục trên, nên bảng sáu dòng ở đây phần lớn là **tóm tắt lại**. Bảng vẫn
có ích như một điểm neo, nhưng ba đoạn văn xuôi quanh nó thì lặp.

### (3) Chỗ nên CẮT

- **`Ch07-CUT-1` (MINOR).** Đoạn văn xuôi mở đầu mục *"2004 đặt cạnh 2021"* và các đoạn diễn giải quanh
  sơ đồ so sánh — giữ sơ đồ và bảng, cắt văn xuôi xuống một đoạn dẫn. Tiết kiệm ~15 dòng.
- **`Ch07-CUT-2` (MAJOR — xem `X-02`).** Mười sáu trích nguyên văn của chương này đã xuất hiện trong
  `Ch06`. Đây là chỗ cắt lớn nhất và nó không tự thấy được từ trong chương.

### (4) Chỗ THIẾU

- **`Ch07-GAP-1` (MAJOR).** *Trade-off của ba luồng chỉ được nêu một mặt.* Chương lập luận rất thuyết
  phục rằng tách luồng yêu cầu là đúng, vì hình cũ dạy sai. Nó **không hỏi cái giá của việc bỏ hình chữ V**.
  Chữ V có một tài sản mà ba luồng song song không có: nó **mã hoá tính đối xứng xác minh** — mỗi ô bên
  trái có một ô đối diện bên phải kiểm nó. Chính mục *Áp dụng ở Xưởng* số 2 của chương dựa vào đúng
  tính đối xứng ấy để đưa ra lời khuyên. Ba luồng chạy song song không có cấu trúc đối xứng đó.
  Vậy hình mới **dễ nhớ kém hơn và dạy được ít hơn** ở một khía cạnh cụ thể — và chương không nói ra,
  dù luận điểm chịu lực của chính nó là *hình vẽ nói to hơn văn bản*. Nếu hình vẽ mạnh đến thế thì việc
  đổi sang một hình khó nhớ hơn là một **nhượng bộ có giá**, không phải một cải tiến thuần.
  Một đoạn 6–8 dòng khép chỗ này, và nó làm chương mạnh lên chứ không yếu đi.
- **`Ch07-GAP-2` (MINOR).** Mục *"Một phép đếm không có trong nguồn"* nói rất tốt về năm hoạt động
  luồng cam, nhưng **sơ đồ ba luồng ở trên đã vẽ đúng năm hộp O1–O5**. Người đọc nhìn sơ đồ trước,
  đọc lời cảnh báo sau. Sơ đồ nên mang một nhãn tại chỗ — kiểu *tên hoạt động lấy từ tài liệu thứ cấp;
  nguồn không tự đếm* — chứ không để lời đính chính nằm cách đó 40 dòng.

### (5) Sơ đồ còn thiếu

- **`Ch07-DIA-1` (MAJOR).** **Sáu điểm kiểm không có hình.** Chúng là thay đổi có sức nặng thực hành lớn
  nhất của bản 2021 — thay cổng theo ngày bằng câu hỏi định hướng — và chúng là nền của *Áp dụng ở Xưởng*
  mục 3. Hiện chúng chỉ tồn tại dưới dạng một trích dẫn và ba đoạn văn. Đề xuất cụ thể: một sơ đồ
  `flowchart LR` **đối chiếu hai chế độ** — trên là *Cổng theo ngày: đến hạn → họp → ký → đi tiếp*
  (có nhánh đỏ *vấn đề lộ ở khâu tích hợp*), dưới là *Điểm kiểm theo câu hỏi: đã biết gì mà lúc trước
  chưa biết? · cái gì vẫn chưa biết?* với **nhánh quay lại** *chưa đủ → lùi*. Chính sự có mặt của nhánh
  lùi ở hình dưới và vắng mặt ở hình trên là toàn bộ luận điểm, và nó nhìn thấy được trong một giây.
  Kèm chú thích: *không có thang điểm — không có trong nguồn*.
- **`Ch07-DIA-2` (MINOR).** Sơ đồ RFLP đã có hộp `ĐIỂM ĐỨT GÃY` giữa L và P — tốt. Nên thêm vào chính
  hộp đó chi phí thật của điểm đứt gãy: *một người đọc bên này gõ lại bên kia*. Đó là câu đắt nhất
  của mục và hiện nó chỉ nằm trong văn xuôi.

### (6) Nhất quán xuyên chương

- **`Ch07-CON-1` (MAJOR — thuộc `X-03`).** Chương dùng **"chúng tôi"** cho người kể (dòng 301:
  *"Không phải chúng tôi chưa tìm"*). `Ch09`, `Ch14`–`Ch17` dùng **"tôi"**. `Ch01`, `Ch02`, `Ch06`,
  `Ch08`, `Ch12`, `Ch13`, `Ch18` **không dùng ngôi thứ nhất nào**. Ba giọng trong một cuốn sách.
- **`Ch07-CON-2` (MAJOR).** **"hai mươi năm"**, dùng hai lần (dòng 22 và 189), làm mệnh đề chịu lực:
  *"vẫn bị hiểu nhầm một cách hệ thống trong hai mươi năm"*. Bản 2004 → bản 2021 là **17 năm**, và
  chương có nguyên văn cho **cả hai mốc** ngay trong bảng của chính nó. Đây đúng lớp lỗi `N-01`:
  một con số tròn được điền vào chỗ mà số học đã có sẵn câu trả lời chính xác. Con số này **không**
  nằm trong danh sách *"Con số có nguyên văn"* ở sổ kiểm, nghĩa là tự-kiểm của chương đã bỏ sót nó.
- Thuật ngữ khớp glossary: *VDI 2206* luôn kèm năm ✅ · *macro/micro-cycle* không nêu số bước ✅ ·
  *RFLP* đúng nghĩa ✅ · không dùng L1–L12 ✅.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"…và vẫn bị hiểu nhầm một cách hệ thống trong **hai mươi năm**…"* (189) | *"…và vẫn bị hiểu nhầm một cách hệ thống suốt **mười bảy năm** giữa hai bản — 2004 tới 2021, cả hai mốc đều có nguyên văn ở bảng trên."* | Luật 1. Số tròn thay cho số đúng, trong khi số đúng đã nằm trong chương. Lớp `N-01`. |
| 2 | *"…cái mà hình vẽ đã dạy sai trong **hai mươi năm**."* (22) | *"…cái mà hình vẽ đã dạy sai suốt **mười bảy năm**."* | Như trên, chỗ thứ hai. |
| 3 | *"Không phải **chúng tôi** chưa tìm; chúng không được ghi ra."* (301) | *"Không phải chưa ai tìm; chúng không được ghi ra."* | Xoá ngôi thứ nhất số nhiều — chương duy nhất trong sáu chương dùng nó cho người kể. Bản vô nhân xưng khớp `Ch06` và `Ch08` hai bên. |
| 4 | *"Con số 25 người dự hội thảo thẩm định là con số nhỏ…"* (~62) | *"Hai mươi lăm người, trong một buổi, `from industry and science`. Đó là quy mô của một cuộc đối chất chuyên gia, không phải quy mô của một phép đo — và nó là toàn bộ nền chứng cứ đứng sau một tiêu chuẩn quốc gia."* | Bản gốc mở bằng lời bình (*"là con số nhỏ"*) rồi mới đưa dữ kiện. Đảo lại: dữ kiện trước, sức nặng tự đến. Luật 6. |
| 5 | *"Đây là mệnh đề đánh đổi rõ ràng: mô hình ảo thay cho mô hình vật lý…"* (326) | *"Mệnh đề này là một cuộc đánh đổi, và chỉ một vế của nó được kiểm: mô hình vật lý tốn thời gian và tiền — không ai cãi. Mô hình ảo đủ tin để thay — không ai đo."* | Bản gốc nói *"Vế trước mới là chỗ có giả định"* ở câu sau; gộp lại thì mất một câu và luận điểm sắc hơn. |
| 6 | *"Đọc kỹ cấu trúc câu: trong thực hành kỹ thuật, tuy nhiên… — chữ however đứng đối lập với cái gì?"* (~92) | *"Chữ however trong câu ấy đối lập với cái gì? Với cách bản cũ **vẽ**."* | *"Đọc kỹ"* là lời chỉ dẫn cho người đọc, cùng họ với nhóm Luật 6 cấm. Chương dùng biến thể của nó bốn lần; `Ch11` và `Ch12` cũng dùng. Xem `X-04`. |

---

## 5. Chương 08 — ICDM: cắm thước đo vào pha chưa có gì để đo

**375 dòng** (dàn ý: 350–450, cố ý ngắn ✅) · 2 sơ đồ · 1 *Đào sâu* · 5 mục *Áp dụng* ✅

Đây là chương có **tỷ lệ chất lượng trên độ dài cao nhất** trong sáu chương. Nó cũng chứa **hai mục
CRITICAL** — cả hai đều là phép đếm, không phải trích dẫn.

### (1) Chất lượng mở chương — **xuất sắc**

Đoạn một không nói về ICDM. Nó dựng **điều kiện làm việc**: *"Anh phải chọn giữa ba nguyên lý giải pháp
khi chưa có mẫu nào, chưa có bảng kê vật tư nào, chưa có một lần thử nào; rồi phải đứng trước ban lãnh
đạo giải thích vì sao chọn cái thứ hai."* Rồi mới đặt ICDM vào chỗ trống đó. Đây là cách mở đúng cho một
độc giả A đang bận: vấn đề trước, công cụ sau.

Nối ngược đích danh `Chương 03` (bốn pha) ✅. Hứa **đúng hai** kết quả và nói thẳng *"không hơn"* ✅.
Và mục kế tiếp — *"Chương này cố ý ngắn, và đây là lý do"* — biến một ràng buộc quản lý dự án (R5,
tránh trùng cuốn `icdm-hari-weiss`) thành **nội dung đọc được**, kèm câu đắt nhất chương:

> *"Trần độ dài của chương này là một **cảm biến**, không phải một gợi ý về văn phong… Cách xử lý đúng
> khi đó là cắt, không phải nới trần."*

Đó là Luật 6 ở dạng tốt nhất: nói ra con đường không đi và vì sao.

### (2) Mạch — **chặt, không có mỡ**

375 dòng và không mục nào thừa. Bảng *"Pha nào ICDM nong ra"* đọc theo chiều dọc cho ra một kết luận
hình học — *"không phải một phương pháp thiết kế đối thủ, mà một cái kính lúp đặt lên đúng một pha"* —
và kết luận ấy chỉ có được nhờ cách xếp bảng. Đó là bảng làm việc, không phải bảng trang trí.

Bốn giả định con xếp dưới canh bạc chính, mỗi cái một nguyên văn của **chính tác giả ICDM**, rồi khép
bằng một quan sát mà không nguồn nào nói: giả định đầu cần người **bảo vệ con số trước quyền lực**,
giả định cuối cần chính người đó **bác con số bằng trực giác** — hai khí chất mâu thuẫn, cùng một phòng.
Đây là chỗ chương có giá trị riêng, tách khỏi cuốn `icdm-hari-weiss`.

### (3) Chỗ nên CẮT — **gần như không có**

Chương đã tự cắt. Ghi nhận: không đề xuất cắt gì ngoài các trích trùng với `Ch11` (xem `X-02`).

### (4) Chỗ THIẾU

- **`Ch08-GAP-1` (MAJOR).** *Canh bạc được nêu một mặt.* Chương chứng minh rất tốt rằng chấm điểm ở pha
  ý tưởng đòi một quan hệ quyền lực đặc biệt. Nó **không nêu cái mà tổ chức được** khi canh bạc ăn.
  Một điểm số tồi tệ nhưng **có ghi ngày và có tên người chấm** vẫn hơn hẳn một phán đoán không dấu vết,
  vì nó là thứ duy nhất đọc lại được sau sáu tháng khi sự cố xảy ra. Chính `Ch10` nói ra điều tương
  đương — *"nó tạo ra bằng chứng rằng quyết định đã được ra một cách có thể bảo vệ được"* — nhưng `Ch08`
  thì không, nên ICDM ở đây trông thuần là chi phí. Ba tới bốn dòng khép chỗ này.
- **`Ch08-GAP-2` (MINOR).** Chương nói ICDM *"dừng ở cửa, không bước vào"* pha 3 và pha 4, nhưng không
  hỏi **vì sao**. Đó là một quyết định phạm vi có ý nghĩa: một phương pháp đo lường tự nguyện từ bỏ đúng
  hai pha mà ở đó dữ liệu bắt đầu có thật. Một câu hỏi tu từ ở cuối mục là đủ.

### (5) Sơ đồ

Hai sơ đồ, đúng trần dưới của hợp đồng. Cả hai đều làm việc: sơ đồ mười bước → ba pha, và sơ đồ cây
quyết định *"Ai được sửa điểm số"* — cây này đặc biệt tốt vì nó **kết thúc ở cùng một hộp** (`G`) cho
hai nhánh hỏng khác nhau, và hộp đó ghi *"Nghi thức chạy đủ mười bước và vẫn ra sai quyết định"*.

- **`Ch08-DIA-1` (MINOR).** Sơ đồ mười bước dùng `flowchart LR` với mười nút `S1`–`S10` đổ vào ba nút
  pha. Ở khổ trang, nó sẽ trải rất rộng và các cạnh sẽ chồng nhau. Đổi sang `flowchart TB` với ba
  `subgraph` theo pha, mỗi subgraph chứa các bước của nó — cùng thông tin, đọc được, và **hình dạng
  dồn cục sẽ tự hiện ra** thay vì phải nói bằng lời ở câu sau.

### (6) Nhất quán xuyên chương — **hai vấn đề, cả hai nặng**

- **`C-01` (CRITICAL) — "bảy công cụ ICDM" là phép đếm không có nguyên văn.**
  Chương dùng cụm này bốn lần (dòng 21, 99, 195, 286) như một sự thật của nguồn. Grep toàn bộ
  `Phase1-Exploration\` cho `seven tools` / `7 tools`: **không có kết quả**.
  Nghiêm trọng hơn: **`Ch16` đã phát hiện đúng điều này và công bố nó** trong một khung *Đào sâu* riêng
  mang tên *"«bảy công cụ ICDM» — con số này không đến từ nguồn"*, với câu:
  > *"Tôi đã tìm trong corpus một câu đếm chúng và **không tìm được**… Vì vậy trong bảng dưới đây tôi
  > liệt kê từng cái theo tên riêng thay vì gộp thành «bảy công cụ»."*

  Vậy cuốn sách **vừa tuyên bố con số này không có nguồn, vừa dùng nó như sự thật ở năm chương khác**:
  `Ch01` (nhãn sơ đồ), `Ch08` (×4), `Ch10`, `Ch15`, `Ch17`, `Ch18`. Đây là ca thứ **sáu** của lớp lỗi
  `N-08`, và là ca duy nhất mà **lời bác đã nằm sẵn trong bản thảo**.
  *Hướng xử lý cho P6 (không làm ở đây):* hoặc theo cách `Ch16` — bỏ phép gộp, gọi tên riêng từng công cụ;
  hoặc giữ cụm nhưng mỗi lần dùng phải kèm ghi chú rằng đây là cách gọi của cuốn sách. Một trong hai,
  áp đồng loạt sáu chương.

- **`C-02` (CRITICAL) — "hai mươi năm nghiên cứu" mâu thuẫn với nguyên văn của chính chương.**
  Dòng 195: *"Một phương pháp prescriptive toàn diện, mười bước, bảy công cụ, **hai mươi năm nghiên cứu**…"*
  Cách đó 180 dòng, chính chương trích:
  > `"ICDM is the Integrated, Customer Driven, Conceptual Design Method, that has been developed in the Technion, Israel during 1996 and 2001."` [49]

  **Năm năm, không phải hai mươi.** Đã quét toàn bộ `Phase1-Exploration\` tìm mốc nào đỡ cho "hai mươi
  năm": chỉ có `"QFD has been used for task clarification for at least 20 years"` — nói về **QFD**, không
  về ICDM — và `"15 – 20 years of experience each"` — nói về **kinh nghiệm của sáu kỹ sư trong một ca
  nghiên cứu**. Không câu nào đặt "20 năm" cạnh ICDM.
  Con số này **không** nằm trong danh sách *"Con số có nguyên văn"* ở sổ kiểm, và cũng không nằm trong
  danh sách *"Con số đã BỎ"*. Tự-kiểm của chương không nhìn thấy nó.
  Đây là ca xấu nhất trong bốn CRITICAL, vì nó **mâu thuẫn với chứng cứ do chính chương đưa ra** — đúng
  lớp *con số trôi qua trích dẫn lại nhau* mà khung *Đào sâu* của chính chương này lên án ở mục 75%/80%.

- **`C-05` (MAJOR) — danh sách bảy công cụ của Ch08 khác danh sách glossary.**

  | Nguồn | Danh sách |
  |---|---|
  | Glossary `Phase2-Positioning.md` | `EQFD · CFMA · DSO · CDTC · RTA · Robustool · DQM · CSR` — **tám tên**, nhãn "Bảy công cụ ICDM" |
  | Bảng của `Ch08` (dòng 89–97) | `EQFD · TVDT · DSO · CFMA · CDTC · RTA · Robustool` — **bảy dòng**, `TVDT` có mà glossary không có, `DQM`/`CSR` bị đẩy ra thành "một tầng đo nữa" |
  | Tệp khám phá `c6` | *"EQFD, TVDT, CFMA, CDTC, RTA và Robustool"* — **sáu tên** |

  Ba danh sách, ba tập hợp khác nhau. Phân biệt của `Ch08` — công cụ thiết kế so với thước đo đặt lên
  người thiết kế — là một **phân biệt tốt và có ích**, nhưng nó là thao tác của cuốn sách và chưa được
  khai báo là vậy. `N-05` yêu cầu kiểm chéo glossary; đây là mục trôi rõ nhất tìm được.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"…mười bước, bảy công cụ, **hai mươi năm nghiên cứu** — và cửa ngõ phổ biến của nó là hội thảo…"* (195) | *"…mười bước, bộ công cụ định lượng đầy đủ, và một chương trình nghiên cứu chạy tại Technion từ **1996 đến 2001** — `\"developed in the Technion, Israel during 1996 and 2001\"` [49] — nhưng cửa ngõ phổ biến của nó là hội thảo…"* | `C-02`. Thay số bịa bằng số có nguyên văn ngay trong chương. |
| 2 | *"Trên **bảy công cụ** này còn một tầng đo nữa — DQM… CSR…"* (99) | *"Trên các công cụ ở bảng còn một tầng đo nữa — DQM… CSR… Nguồn không ở đâu tự đếm chúng, nên bảng trên gọi tên từng cái thay vì gộp thành một con số; cách chia này là của cuốn sách."* | `C-01` + `C-05` cùng lúc: bỏ phép đếm, khai báo phép chia. |
| 3 | *"Chương này **không** dạy cách dùng bảy công cụ của ICDM."* (21) | *"Chương này **không** dạy cách dùng các công cụ của ICDM."* | `C-01`, chỗ thứ hai. |
| 4 | *"Đọc kỹ vế cuối. *Power and pressure* — quyền lực và áp lực."* (~118) | *"Vế cuối: *power and pressure*. Tác giả của một phương pháp định lượng viết ra rằng con số của chính mình chịu tác động của quyền lực."* | Bỏ *"Đọc kỹ"* (Luật 6, `X-04`) và gộp hai câu — bản gốc lặp ý ở câu ngay sau. |
| 5 | *"Mười sáu người — cỡ mẫu nhỏ, phải nói ra khi trích."* (~178) | *"Mười sáu người. Cỡ mẫu ấy không đỡ nổi một khẳng định về ngành, và nó đủ cho khẳng định hẹp mà chương này dùng: tiêu chí đánh giá bị đổi giữa chừng, bởi chính những người vừa đồng ý với nó."* | *"phải nói ra khi trích"* là lời tự nhắc về quy trình biên tập, lọt vào thân bài. Người đọc không cần biết luật nội bộ; họ cần biết cỡ mẫu ấy đỡ được cái gì. |
| 6 | *"Đó là canh bạc thứ hai, chồng lên canh bạc thứ nhất."* (~215) | *"Canh bạc thứ hai chồng lên canh bạc thứ nhất, và hai cái không cùng loại: cái thứ nhất cược vào quan hệ quyền lực trong phòng họp, cái thứ hai cược rằng cái nền mà phương pháp đứng lên mô tả đúng cách người thiết kế làm việc."* | Bản gốc tách thành ba câu ngắn nói lại điều vừa nói. Gộp một câu, giữ nguyên thông tin, bớt hai dòng. |

---

## 6. Chương 09 — Sinh giải pháp: hộp đen, cấu trúc chức năng, ma trận hình thái

**701 dòng** (dàn ý: 550–700 — **vượt 1 dòng**) · 3 sơ đồ (dàn ý: 3 ✅) · 2 *Đào sâu* · 5 mục *Áp dụng* ✅

Chương giàu nhất trong sáu về vật liệu nguồn: 37 trích, **62% là trích riêng của nó** — tỷ lệ độc lập
cao thứ nhì sau `Ch10`.

### (1) Chất lượng mở chương — **rất tốt**

Móc là một lỗ thủng, không phải một công cụ: *"Không phương pháp nào trong số đó nói **các phương án ở
đâu ra**."* Rồi hệ quả cụ thể: *"toàn bộ bộ máy chấm điểm phía sau chỉ là nghi lễ — chọn một trong một."*

Nối ngược `Chương 08` đích danh và **chính xác về mặt logic**, không chỉ về mặt hình thức: *"thước đo
giả định có vật. Chương 08 không trả lời — và không có nhiệm vụ trả lời — câu hỏi vật ấy từ đâu tới."*
Câu *"và không có nhiệm vụ trả lời"* là chỗ hay: nó bảo vệ chương trước thay vì đá nó.

Ba lời hứa rõ, và lời hứa thứ ba tự khai luôn vai trò cấu trúc: *"lý do chương này mở Phần III"*.

### (2) Mạch — **tốt ở phần công cụ, dài ở phần giữa**

Trục hộp đen → cấu trúc chức năng → ma trận hình thái chạy sạch, và mục *"Vì sao trật tự không đảo được"*
với ba chế độ hỏng đánh số là chỗ mạnh nhất chương — đặc biệt **đảo lần hai** (`warning indicator` so với
`bell`), có ví dụ, có dấu hiệu nhận biết sớm kiểm được (*"nếu hai hàng có thể cùng do một chi tiết đảm
nhiệm, cột trái đang là danh sách bộ phận"*), và có hệ quả định lượng.

Chỗ chùng: mục **"Bốn giới hạn còn lại, bằng chữ của nguồn"** (~dòng 275–300) là **liệt kê chứ không dựng
hiểu biết**. Bốn trích, bốn đoạn bình một–hai câu, không cái nào nối vào cái nào, và ba trong bốn không
được dùng lại ở đâu nữa trong chương. Chỉ giới hạn thứ tư — *"morphological charts imply that all the
individual subfunctions should have their own individual function carrier"* — là chịu lực, vì nó là
luận điểm hình học thật sự về công cụ.

### (3) Chỗ nên CẮT

- **`Ch09-CUT-1` (MAJOR).** Mục *"Bốn giới hạn còn lại"*: **giữ giới hạn thứ tư, gộp ba cái đầu thành
  một đoạn hai câu.** Ba giới hạn kia (tẻ nhạt · khó nhét kiểu dáng · xu hướng chọn tổ hợp an toàn) là
  vật liệu tốt nhưng ở đây chúng là danh mục. Tiết kiệm ~18 dòng, và cũng đưa chương về đúng trần 700.
  *Lưu ý:* trích *"You may be tempted to choose the 'safe' combinations"* được `Ch11` dùng lại làm luận
  cứ chịu lực ở cột 1 — nên cắt ở đây **không mất gì**, chỉ dời về đúng nhà của nó.
- **`Ch09-CUT-2` (MAJOR — thuộc `X-02`).** Khối con số nổ tổ hợp (57.238.272 · 10×10 = 10 tỷ ·
  *"no more than 10"* · *"impossible to scan all combinations"*) được trình bày **đầy đủ ở đây và đầy đủ
  lại ở `Ch11`**, kèm cùng một phân tích *"vế đầu là lời khen, vế sau huỷ lời khen"*. Chương này đã tự
  nói *"Tôi dừng chuỗi lập luận này ở đây một cách có chủ ý… đó là toàn bộ nội dung Chương 11"* — nhưng
  nó dừng **sau** khi đã đưa hết chứng cứ. Đề xuất: `Ch09` giữ **một** con số (57.238.272, vì nó là ma
  trận thật đã in) và câu *"no more than 10"*, rồi trỏ sang `Ch11`; nhường phần còn lại.

### (4) Chỗ THIẾU

- **`Ch09-GAP-1` (MAJOR).** *Trade-off của trật tự bắt buộc chỉ nêu một mặt.* Chương chứng minh xuất sắc
  rằng đảo trật tự thì hỏng, và nó **có** dữ liệu nói rằng kỹ sư giỏi làm ngược (Dylla & Fricke).
  Nhưng nó không hỏi câu tiếp theo: **nếu người có kinh nghiệm đi hướng bài toán và vẫn ra kết quả tốt,
  thì trật tự này đang mua gì cho họ mà họ không có sẵn?** Khung *Đào sâu: hai cách sống chung* có chạm
  vào, nhưng nó bàn *cách thi hành*, không bàn *có nên thi hành với nhóm đó không*. Chương hiện đọc ra
  như: trật tự đúng, người làm sai. Đó chính là cách đọc mà `Ch12` sẽ bác. Một đoạn ngắn thừa nhận rằng
  với đội giàu kinh nghiệm, cụm công cụ này có thể là **chi phí điều phối chứ không phải công cụ sinh
  ý tưởng**, sẽ dựng nền tốt hơn hẳn cho `Ch12`.
- **`Ch09-GAP-2` (MINOR).** Trần *"no more than 10"* được đặt cạnh ví dụ sáu chức năng của máy thu hoạch
  khoai tây, rồi chương nói một hệ cơ–điện–phần mềm không thể chỉ có sáu. **Nhưng không đưa ra cách xử
  lý nào** ngoài nhận xét rằng công cụ bắt bài toán co lại. Vấn đề được đẩy sang `Ch11` — hợp lý — nhưng
  người đọc rời mục này tay không. Một câu trỏ tới `Ch11` là đủ và hiện đang thiếu.

### (5) Sơ đồ

Ba sơ đồ, tất cả đều làm việc. Sơ đồ hộp đen đặc biệt tốt vì nó vẽ **dòng ra hao phí** bằng nét đứt —
đúng thứ mà chương nói là hay bị quên.

- **`Ch09-DIA-1` (MINOR).** **Không có sơ đồ cho ba chế độ hỏng khi đảo trật tự**, dù đó là mục mạnh
  nhất chương và đã có sẵn một bảng ba dòng. Đề xuất: `flowchart LR` ba nhánh xuất phát từ cùng một nút
  *"Bắt đầu pha ý tưởng"*, mỗi nhánh bỏ qua một công cụ và kết ở một hộp hậu quả có màu — nhánh 2 kết ở
  *"Ma trận vẫn sinh hàng nghìn tổ hợp — tất cả là biến thể của một quyết định đã chốt"*. Câu đó là câu
  hay nhất của mục và nó xứng đáng được nhìn thấy.
- **`Ch09-DIA-2` (MINOR).** Sơ đồ cấu trúc chức năng có nhãn chứa dấu `&` trần (`"nhận & định vị"`,
  `"tách & phân loại"`). `Ch12` thì escape thành `&amp;`. Hai quy ước khác nhau trong cùng một cuốn sách,
  và `&` trần trong nhãn mermaid có rủi ro render. Thống nhất một cách. Xem `X-05`.

### (6) Nhất quán xuyên chương

- **`Ch09-CON-1` (MAJOR — thuộc `X-03`).** Chương dùng **"tôi"** bảy lần cho người kể (*"mức tôi tự đặt
  ra"*, *"suy luận của tôi"*, *"việc tôi làm"*). `Ch07` ngay trước dùng *"chúng tôi"*; `Ch08` và `Ch12`
  hai bên không dùng ngôi thứ nhất nào. Trong sáu chương, đây là chương đậm ngôi thứ nhất nhất.
- **`Ch09-CON-2` (MINOR).** Chương nói *"cụm ba công cụ"* bảy lần và tiêu đề chương nêu ba, nhưng bảng
  tổng kết *"Cụm công cụ này đòi tổ chức có gì"* có **bốn dòng** — thêm `Catalogue`. Mục catalogue dài
  ~35 dòng và có một phát hiện riêng đáng giá (*catalogue nguyên lý chết, catalogue nhà cung cấp sống*).
  Vậy chương dạy bốn thứ và tự gọi mình là ba. Hoặc nâng catalogue lên ngang hàng trong tiêu đề và lời
  hứa mở chương, hoặc gọi nó là phụ lục của cụm ba — hiện nó lửng lơ giữa hai.
- **`Ch09-CON-3` (MINOR).** **701 dòng, trần 700.** Vượt một dòng. Ghi lại vì trần là cảm biến, không
  phải gợi ý — nhưng vượt một dòng thì `Ch09-CUT-1` đã xử lý dư.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"…xếp cụm công cụ này vào một tầng đòn bẩy là việc tôi làm, không nguồn nào trong tài liệu **làm việc làm việc** đó."* (503) | *"…xếp cụm công cụ này vào một tầng đòn bẩy là thao tác của cuốn sách này; không nguồn nào trong tài liệu làm việc đó."* | **Lỗi lặp chữ.** Đồng thời đổi *"việc tôi làm"* sang *"thao tác của cuốn sách này"* — đúng cách nói mà `Ch06`, `Ch08` và `Ch11` dùng cho cùng một khai báo (`X-03`). |
| 2 | *"Hai mức trong sơ đồ… là hai mức mà [17] mô tả, không phải **mức tôi tự đặt ra**."* (119) | *"Hai mức trong sơ đồ là hai mức mà [17] mô tả, không phải phân tầng do cuốn sách này đặt ra."* | Ngôi thứ nhất, `X-03`. |
| 3 | *"Khoảng trống này tự nó là một phát hiện, và nó là **suy luận của tôi** chứ không phải của nguồn nào."* (423) | *"Khoảng trống này tự nó là một phát hiện, và nó là suy luận của cuốn sách này chứ không phải của nguồn nào."* | Ngôi thứ nhất, `X-03`. |
| 4 | *"…điều mà **tôi phải nói ra**: nguồn [1] là toàn văn sách Pahl-Beitz và nó một mình chiếm phần lớn nhất của toàn bộ tài liệu làm việc."* (150) | *"…và điều đó phải được nói ra: [1] là toàn văn sách Pahl-Beitz, chiếm 32% corpus. Trích dày từ nó có thể vì nó đúng, cũng có thể chỉ vì nó dài."* | Ngôi thứ nhất; và **thay cách nói mờ *"phần lớn nhất"* bằng con số 32% đã có khai báo** (Luật 8, khai báo 3). Chương đang né một con số mà cuốn sách đã cho phép dùng. |
| 5 | *"Bốn hàng là ví dụ giáo trình. Bài toán thật không có bốn hàng."* (240) | *"Bốn hàng là ví dụ giáo trình. Mục sau đưa con số của một ma trận thật, đã in trong một cẩm nang đang được dạy — và nó có tám chữ số."* | Câu gốc kết đúng nhịp nhưng bỏ người đọc ở chỗ trống. Bản mới giữ nhịp và mở sang mục sau. |
| 6 | *"Đây là tính chất hiếm của công cụ này: **nó tự kiểm được**, không cần chuyên gia bên ngoài."* (~112) | *"Đây là tính chất hiếm của công cụ này: nó tự kiểm được. Một khối nhận vật liệu vào mà không có dòng ra là sai, và ai cũng thấy — không cần người duyệt có thẩm quyền."* | Bản gốc đặt kết luận trước bằng chứng; bằng chứng nằm ở đoạn trên và đã bị tách rời. Gộp lại thì câu tự đứng được. |
| 7 | *"Con số ấy đáng ghi lại vì nó sẽ va vào một khuyến nghị khác ở mục sau."* (~123) | *"Sáu, cho một máy nông nghiệp. Giữ con số ấy — nó sắp va vào trần mười."* | *"đáng ghi lại vì… ở mục sau"* là chỉ dẫn đọc, không phải nội dung. Bản mới nói thẳng va vào cái gì. |

---

## 7. Chương 10 — Chọn phương án: VDI 2225, Pugh, và giá trị sử dụng

**594 dòng** (dàn ý: 500–650 ✅) · 2 sơ đồ (dàn ý: 2 ✅) · 2 *Đào sâu* · 5 mục *Áp dụng* ✅

**Chương độc lập nhất trong sáu**: 34 trích, **70% là trích riêng**. Không CRITICAL.

### (1) Chất lượng mở chương — **xuất sắc, hay nhất trong sáu chương**

Hai câu đầu là hai câu tốt nhất của cả cụm:

> *"Một bảng chấm điểm không đo phương án. Nó đo phương án **qua một người**."*

Rồi lập tức đưa phép thử: *"Cùng bốn ý tưởng, cùng tám tiêu chí, đưa cho hai nhóm khác nhau thì ra hai
thứ hạng khác nhau — và không có nhóm nào tính sai."* Vế cuối là chỗ móc thật — nó chặn trước phản xạ
*"vậy là có nhóm làm sai"*.

Nối ngược `Chương 09` đích danh, và nối bằng **chỗ chương trước dừng lại**: *"chương đó dừng đúng ở chỗ
tập tổ hợp trở nên lớn hơn khả năng nhìn của một người."* Đó là nối theo logic, không phải theo thủ tục.

Ba lời hứa cụ thể, và lời hứa thứ ba là thứ độc giả A mua vé để lấy: *"một quy tắc chọn công cụ theo
trạng thái thông tin của dự án, đủ cụ thể để áp ngay ở cuộc họp duyệt ý tưởng gần nhất."*

Thêm một điểm đáng ghi nhận: mục *"Nguồn nói được gì và im ở đâu"* đặt **ngay sau bảng mở đầu**, trước
khi chương khẳng định bất cứ điều gì — và nó biến một khoảng trống tra cứu thành nội dung:
*"Sự im lặng này không phải lỗ hổng tra cứu. Nó là dữ liệu."*

### (2) Mạch — **tốt, một chỗ hụt hơi ở cuối**

Ba công cụ → ai được quyền cho điểm → canh bạc → cái công cụ thật sự đo → ba thứ không thang nào đo →
đối chiếu DSO. Mạch lên đều và đỉnh nằm đúng chỗ: mục *"Cái mà công cụ đo được lại là cái nó không định
đo"*, với câu chốt *"Nó tạo ra bằng chứng rằng quyết định đã được ra một cách có thể bảo vệ được."*

Nhưng mục **"Đối chiếu với thang DSO của ICDM"** (~90 dòng) đến **sau** đỉnh đó và kéo chương đi ngang.
Nó hay về nội dung — thang 5/3/2/0 khoét rỗng vùng giữa, điểm rủi ro là phép đếm chứ không phải phán
đoán — nhưng nó là **mục thứ tư về một công cụ** trong một chương đã tuyên bố ở tiêu đề rằng nó bàn ba
công cụ, và phần lớn vật liệu của nó được `Ch11` dùng lại nguyên khối.

### (3) Chỗ nên CẮT

- **`Ch10-CUT-1` (MAJOR — thuộc `X-02`).** Mục đối chiếu DSO chia sẻ **sáu trích** với `Ch11`, gồm cả
  khối thang 5/3/2/0 và quy tắc đếm rủi ro — hai thứ mà `Ch11` cần làm cột 4 của bảng bốn thế hệ.
  Đề xuất: `Ch10` giữ **luận điểm** (DSO cố gắng không giao bút cho ai) kèm **một** trích thang điểm,
  cắt phần cơ chế và các ngưỡng 70%/95%/10–15 tổ hợp — chúng thuộc về `Ch11`. Tiết kiệm ~35 dòng và
  chương kết đúng ở đỉnh của nó.
- **`Ch10-CUT-2` (MINOR).** Đoạn liệt kê nguồn gốc trọng số của Pugh trong ICDM (AHP, NGT) là chi tiết
  công cụ, thuộc phạm vi cuốn `icdm-hari-weiss` theo R5. Một câu là đủ.

### (4) Chỗ THIẾU

- **`Ch10-GAP-1` (MAJOR).** *Lời hứa thứ ba của chương chưa được giao.* Mở chương hứa **"một quy tắc
  chọn công cụ theo trạng thái thông tin của dự án"**. Chương kết thúc bằng nhận xét rằng *"không cách
  nào trong bốn cách là đúng phổ quát"* — đúng, nhưng đó là **phản đề của một quy tắc**, không phải một
  quy tắc. Mục *Áp dụng ở Xưởng* cũng không chứa nó (nó chứa quy tắc về chữ ký trọng số, về cấm tính
  trung bình…). Người đọc rời chương không có thứ được hứa.
  Vật liệu để dựng nó thì chương đã có sẵn — cột *"Cần biết trước cái gì"* của bảng mở đầu chính là
  trạng thái thông tin. Cần một bảng ba dòng hoặc một cây quyết định bốn nhánh: *chưa có ước lượng chi
  phí → Pugh · có chi phí, chưa thoả thuận trọng số → biểu đồ kỹ thuật–kinh tế · có cả hai → giá trị sử
  dụng · cần kết quả gửi lên cấp trên → không dùng Pugh*.
- **`Ch10-GAP-2` (MINOR).** *"Cả ba cược rằng ước lượng chi phí ở pha ý tưởng là đáng tin"* — chương ghi
  đúng rằng không nguồn nào bàn về sai số ước lượng ấy. Nhưng `Ch08` **có** một nguyên văn liên quan:
  `"within 20% of the final actual unit manufacturing cost"` [50]. Đó chính là một phát biểu về sai số
  ước lượng sớm, và nó nên được trỏ tới ở đây — hoặc dùng, hoặc nói rõ vì sao không dùng được.

### (5) Sơ đồ

Hai sơ đồ, và cả hai đều là lựa chọn tốt. `quadrantChart` cho biểu đồ kỹ thuật–kinh tế là **kiểu sơ đồ
duy nhất không phải flowchart trong toàn bộ sáu chương**, và nó đúng việc: nó cho thấy *phía lệch*, thứ
mà chương nói là bị mất khi gộp hai trục.

- **`Ch10-DIA-1` (MAJOR).** **Bảng "Ai được quyền cho điểm" không có hình**, dù đó là luận điểm trung tâm
  của chương (*"Đó là toàn bộ luận điểm, gói trong một ví dụ"*). Bảng ba dòng hiện tại làm việc tốt,
  nhưng thứ nó mô tả — **ba cấu hình quyền lực khác nhau** — là quan hệ, không phải danh mục.
  Đề xuất: `flowchart LR` ba dải, mỗi dải một công cụ, mỗi dải cho thấy trọng số vào từ đâu, điểm vào từ
  đâu, và **ai đứng ngoài khung** (vẽ bằng nút nét đứt, không có cạnh nối vào bảng). Chính các nút mồ côi
  ấy — *người dùng cuối* ở dải 1, *cấp quản lý* ở dải 2, *đội thiết kế* ở dải 3 — là nội dung.
- **`Ch10-DIA-2` (MINOR).** Sơ đồ Pugh đã vẽ vòng lặp dịch mốc chuẩn, tốt. Nhưng khung *Đào sâu* nói
  vòng lặp ấy **không có điều kiện dừng** và điều kiện dừng phải đến từ ngoài phương pháp. Sơ đồ hiện
  vẽ nhánh `"không" → Chốt thứ hạng` như thể có điều kiện dừng nội tại. Thêm một nút nét đứt
  *"điều kiện dừng: hết giờ, hoặc có người nói đủ rồi — không nằm trong phương pháp"* cắm vào nút quyết
  định. Sơ đồ hiện đang mâu thuẫn nhẹ với chính khung *Đào sâu* ở dưới nó.

### (6) Nhất quán xuyên chương

- Thuật ngữ khớp glossary ✅. *Ma trận hình thái* dùng tiếng Việt ✅. *VDI 2225* không cần năm ✅.
  Không dùng L1–L12 ✅ (xem mục 2.3).
- **`Ch10-CON-1` (MINOR).** Dùng *"bảy công cụ"* một lần (dòng 52) — thuộc `C-01`.
- Không có trôi ngôi kể: một lần *"chúng tôi"* ở dòng 97 nhưng đó là **lời của một tổ chức giả định**
  trong ngoặc kép (*"chúng tôi không mua giải pháp lệch"*), không phải người kể. Hợp lệ.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"Không cách nào trong bốn cách là đúng phổ quát; mỗi cách là một canh bạc đặt vào một hình thái tổ chức khác nhau…"* (~437) | Giữ nguyên, rồi **thêm ngay sau** bảng quy tắc chọn theo trạng thái thông tin đã hứa ở mở chương. | `Ch10-GAP-1`. Chương kết bằng phản đề của lời hứa mà không giao lời hứa. |
| 2 | *"Chương 15 sẽ cho một cách đo chuyện này chính xác hơn."* (440) | *"Có một cách đo khoảng cách ấy chính xác hơn — giữa cái công cụ tự nhận và cái nó thật sự chạm tới. Chương 15 dựng thước ấy."* | Câu gốc đúng ràng buộc (một câu, không mở rộng) nhưng mơ hồ — *"chuyện này"* trỏ vào đâu? Bản mới vẫn một câu, vẫn không giới thiệu thang, nhưng nói rõ đo cái gì. |
| 3 | *"Chỗ này mới thú vị."* (~72, mở đoạn hệ số kinh tế) | *"Hệ số kinh tế không phải điểm chấm. Nó là một tỷ số chi phí, và chỗ chọn mẫu số mới là chỗ có chính sách."* | *"Chỗ này mới thú vị"* là lời dẫn rỗng — Luật 6: heading và câu sau đã nói rồi. Bản mới dùng đúng số chữ để nói nội dung. |
| 4 | *"Câu này đáng đọc hai lần, vì nó đảo ngược thứ tự thông thường."* (~404) | *"Thứ tự thông thường bị đảo ở đây: một bảng chấm không tạo ra quyết định đúng, nó tạo ra bằng chứng rằng quyết định đã được ra một cách có thể bảo vệ được."* | *"đáng đọc hai lần"* là chỉ dẫn đọc. Gộp với câu sau thì mất một dòng và luận điểm đứng trước. |
| 5 | *"Đọc sơ đồ này theo *khoảng cách tới góc lý tưởng* thì mất thông tin."* (~110) | *"Đọc sơ đồ theo khoảng cách tới góc lý tưởng thì hai phương án lệch ngược chiều nhau ra cùng một điểm số — và chúng cần hai hành động khác hẳn."* | Bản gốc nêu kết luận (*"mất thông tin"*) rồi mới giải thích ở hai câu sau. Đưa nội dung lên trước. |
| 6 | *"Rất khó tin rằng một nhóm kỹ sư ngồi trong phòng sẽ tự cho an toàn trọng số 10 và tốc độ trọng số 3…"* (~390) | *"Một nhóm kỹ sư ngồi trong phòng khó cho an toàn trọng số 10 và tốc độ trọng số 3 — nhóm kỹ sư đánh giá cao thứ mà họ cải thiện được bằng thiết kế. Đây là suy luận của cuốn sách; nguồn chỉ ghi rằng trọng số đến từ 49 người vận hành."* | Câu gốc là một **suy đoán về hành vi** trình bày liền mạch với dữ liệu có nguyên văn, không phân định. Luật 4 và sổ kiểm đòi tách hai loại mệnh đề. |

---

## 8. Chương 11 — Nổ tổ hợp: bài toán mà cả bốn thế hệ đều phải né

**550 dòng** (dàn ý: 400–550 — **đúng kịch trần**) · 2 sơ đồ (dàn ý: 2 ✅) · 1 *Đào sâu* · 5 mục *Áp dụng* ✅

Chương có **luận điểm hay nhất** và **vấn đề biên tập nặng nhất** trong sáu chương. Hai chuyện đó liên quan
đến nhau: luận điểm của nó cần vật liệu từ ba chương trước, và nó lấy vật liệu ấy bằng cách **trình bày lại
toàn bộ**, không phải bằng cách trỏ về.

### (1) Chất lượng mở chương — **rất tốt**

Móc chính xác và không màu mè: *"Ma trận hình thái mở ra một không gian mà chính người vừa dựng nó không
duyệt nổi."* Rồi nâng ngay khỏi mức công cụ lẻ: *"nó là hệ quả số học của phép phân rã chức năng — thứ mà
cả bốn thế hệ trong Phần II đều lấy làm nền."*

Nối ngược `Chương 10` **đích danh và bằng chỗ chương ấy im lặng**, đây là kiểu nối tốt nhất trong cả sáu
chương: trích lại chính câu vô hại của bài giảng — `"for simplicity let's assume we have four concepts"` —
rồi hỏi *bốn phương án ấy từ đâu ra*. Một câu trích được tái sử dụng để lật ngược chương trước.

Ba lời hứa cụ thể, và lời hứa thứ nhất tự đặt ràng buộc lên chính nó: *"có nguyên văn trong nguồn — và
ghi rõ những con số mà nguồn **không** nêu."*

### (2) Mạch — **luận điểm chặt, nhưng chương đi trên vật liệu đi mượn**

Trục lập luận là trục tốt nhất của Phần III: con số nổ → bốn cách né xếp theo **vị trí nhát cắt** → nghịch
lý thông tin → và cú lật cuối: *"nghịch lý không được giải, nó được **định giá**"*, tựa trên
`"the ability to reduce times and to work simultaneously is a function of the willingness to take risks"`.
Đó là chỗ chương chạm đúng luận đề của sách bằng chữ của chính nguồn.

Mục *"Cùng nghịch lý, ở thượng nguồn: House of Quality quá rộng"* là một nước đi hay — nó chặn lối thoát
hiển nhiên (*"thu thập thông tin sớm hơn"*) bằng cách cho thấy công cụ thu thập nổ theo đúng kiểu ấy.

**Nhưng:** trong 34 trích của chương, chỉ **12 (35%) là trích riêng**. Hai mươi hai trích đã xuất hiện ở
chương khác — 8 từ `Ch09`, 6 từ `Ch10`, 6 từ `Ch08`, 8 từ `Ch16`. Đây là tỷ lệ độc lập **thấp nhất trong
cả 18 chương**. Chương không thiếu ý; nó thiếu vật liệu chưa dùng.

### (3) Chỗ nên CẮT — **đây là mục nặng nhất của toàn bộ bản phản biện**

- **`Ch11-CUT-1` (MAJOR).** **Khối con số nổ tổ hợp trùng `Ch09`.** Bốn trích trục (57.238.272 ·
  10×10 = 10 tỷ · *"no more than 10"* · *"impossible to scan all combinations"*) xuất hiện đầy đủ ở cả hai
  chương, **kèm cùng một phép phân tích**: `Ch09` viết *"Vế đầu là lời khen… Vế sau huỷ luôn lời khen"*;
  `Ch11` viết *"Vế đầu là lời khen… Vế sau rút lại lời khen ấy"*. Cùng câu trích, cùng cấu trúc bình,
  cách nhau 200 dòng.
  *Hướng xử lý:* đây là **nhà chính thức** của khối này (`Ch09` đã tự nói vậy). Cắt ở `Ch09`, giữ ở đây.
- **`Ch11-CUT-2` (MAJOR).** **Khung *Đào sâu: các hàng không độc lập* trùng `Ch09` gần như nguyên khối** —
  cùng trích Börekçi 50 học viên, cùng trích *"twelve morphological charts… 686 sub-solution sketches"*,
  cùng trích *"multifunctioning design"*. `Ch09` đã dùng cả ba ở mục *"Đòi hỏi ngầm"* và mục *"Bốn giới
  hạn"*. Khung này thêm được **một** điều `Ch09` không có: hệ quả rằng không gian thật **vừa lớn hơn khả
  năng duyệt, vừa méo so với mô hình dùng để đếm nó**, và đó là lý do DSO sinh tổ hợp bất khả thi trong
  *mọi* dự án. Giữ hệ quả đó, cắt việc dựng lại chứng cứ, trỏ về `Ch09`. Tiết kiệm ~20 dòng.
- **`Ch11-CUT-3` (MAJOR).** **Hai trong năm mục *Áp dụng ở Xưởng* trùng `Ch08`.**

  | `Ch11` | `Ch08` | Trùng ở đâu |
  |---|---|---|
  | #4 *Cấu phần không lập lịch được thì không nằm trong lịch* | #4 *Tách cấu phần chưa có bằng chứng khả thi ra khỏi kế hoạch dự án* | cùng nguồn [55], cùng quy tắc Bonen cấp 4, cùng hành động, cùng hình dạng bẫy |
  | #5 *Trần cho bảng yêu cầu, và một danh sách chờ* | #3 *Chặn kích thước bảng nhu cầu trước khi mở nó ra* | cùng trích 20×20/15×25 [46], cùng hành động (đặt trần + danh sách chờ, không xoá), cùng bẫy |

  Bốn mục *Áp dụng* cho hai lời khuyên. Đây là loại lặp không agent nào tự thấy được, và nó rơi đúng vào
  mục mà độc giả A đọc kỹ nhất.
- **`Ch11-CUT-4` (MINOR).** Đoạn *"Chỗ cuốn sách đổi giọng"* nói ba lần cùng một điều (giọng đổi · hợp đồng
  đọc đổi · ai đọc gì nên đọc thế nào). Gộp còn một đoạn.

### (4) Chỗ THIẾU

- **`Ch11-GAP-1` (MAJOR).** *Bảng bốn cột nêu cái mỗi cách né hy sinh, nhưng không nêu cái mỗi cách né
  **mua được**.* Chương kết luận *"Không cột nào mở rộng năng lực chấm; cả bốn đều thu hẹp không gian cho
  vừa năng lực chấm"* — đúng và sắc. Nhưng bốn cách ấy không tương đương: cách của ICDM **để lại hồ sơ**,
  cách của VDI 2206 **không để lại gì**. Chương có nhận ra điều này (*"khác biệt duy nhất là nhát cắt được
  đặt ở chỗ có ghi chép hay ở chỗ không ai nhìn thấy"*) nhưng để nó trong một câu ngoặc đơn ở cuối, trong
  khi đó là **kết luận có giá trị hành động duy nhất** của cả mục. Nó xứng đáng một dòng riêng trong bảng.
- **`Ch11-GAP-2` (MINOR).** Chương né được cái bẫy *"ma trận tốt hơn sẽ dọn được"*, nhưng không nói gì về
  hướng đi duy nhất mà bốn thế hệ đều không thử: **không cắt, mà đổi thứ được chấm** — chấm cụm chức năng
  thay vì chấm tổ hợp đầy đủ. Không cần đề xuất giải pháp; chỉ cần một câu ghi nhận rằng lời giải nằm
  ngoài tập bốn cách, để người đọc không khép chương với ấn tượng bốn cách ấy là toàn bộ không gian.

### (5) Sơ đồ

Hai sơ đồ, cả hai đều tốt. Sơ đồ thứ nhất làm đúng một việc khó: đặt **hàm luỹ thừa** cạnh **hằng số sinh
học** và nói thẳng rằng chúng không cùng đơn vị. Sơ đồ bốn cách né với bốn `subgraph` đọc được ngay.

Đáng khen riêng: các nút minh hoạ trong sơ đồ đầu **có nhãn *minh hoạ của tác giả*** ngay trong hộp, tách
khỏi hai nút có nhãn **nguyên văn nguồn**. Đây là cách xử lý Luật 1 **bên trong sơ đồ** mà không chương nào
khác trong sáu chương làm, và P6 nên nhân rộng nó.

- **`Ch11-DIA-1` (MINOR).** Nghịch lý thông tin — trục chịu lực của nửa sau chương — **không có hình**, và
  nó là thứ dễ vẽ nhất: hai mũi tên ngược chiều trên cùng một trục thời gian (*chốt muộn → không gian nhân
  lên* so với *chốt sớm → khoá 75–80% chi phí vòng đời*), giao nhau ở một vùng tô đậm ghi *"không có cửa
  thứ ba — chỉ có chỗ trả giá"*. Hiện luận điểm này chỉ tồn tại bằng văn xuôi trong một chương mà mọi luận
  điểm khác đều đã có hình.

### (6) Nhất quán xuyên chương

- **`C-04` (CRITICAL) — "quy trình tám bước của Roozenburg & Eekels".**
  Dòng ~148: *"Quy trình **tám bước** của Roozenburg & Eekels đặt việc rút gọn thành bước riêng"*, và lặp
  ở sổ kiểm dòng 540: *"quy trình **tám bước** Roozenburg & Eekels"*.
  Grep `Phase1-Exploration\` cho `eight steps` / `8 steps`: **không có kết quả.**
  Và `Ch09` — chương giới thiệu chính quy trình đó — **đã tuyên bố ngược lại**:
  > *"**Không nguồn nào tự đếm số bước của quy trình nào**… quy trình B có tám mục được đánh số, và
  > **tác giả không phát biểu con số nào**."*

  Hai chương liền kề, một chương nói nguồn không đếm, chương sau đặt tên phương pháp bằng chính con số ấy.
  Ca thứ **tám** của lớp `N-08`. Sổ kiểm của `Ch11` có nhắc cụm này nhưng chỉ để khai báo **việc gộp cột**,
  không khai báo **phép đếm**.
- **`Ch11-CON-1` (MAJOR).** *"nguồn [57] quy định xét đúng **ba** cân nhắc"* (dòng ~200) và *"chấm theo đúng
  **ba** câu hỏi"* (dòng ~460). Nguyên văn liệt kê ba vấn đề và dùng cụm *"when all exist"* — nó ngụ ý một
  tập đóng nhưng **không phát biểu con số ba**. Grep `three considerations` / `three problems`: không có.
  Cùng lớp `N-08`, mức nhẹ hơn `C-04` vì phép đếm ở đây gần như suy ra được từ cấu trúc câu trích.
- **`Ch11-CON-2` (MAJOR).** **Đoạn kết hứa một thứ mà `Ch12` từ chối giao.** Dòng ~421:
  > *"Chương 12 mang bằng chứng thực nghiệm của tuyến phê bình — FBS của Kannengiesser & Gero, **Motte**,
  > Jensen & Andreasen…"*

  `Ch12` thì khai thẳng rằng **Motte không có tài liệu nào trong danh mục 66 nguồn**, tên ông chỉ xuất hiện
  ở lớp tổng hợp, và vì thế `Ch12` *"nêu tên Motte như một thành viên của tuyến phê bình và **dừng ở đó** —
  không gán cho ông một luận điểm nào, không trích một câu nào."*
  `Ch11` đang hứa **bằng chứng thực nghiệm của Motte**. Chương sau sẽ không có. Đây là loại lỗi mà chính
  `Ch12` gọi tên: *"Một cuốn sách buộc tội các phương pháp khác là mang giả định không khai báo thì không
  được phép có chỗ nào tự mình làm đúng điều đó."*
- Thuật ngữ: *nửa thế kỷ* dùng đúng (dòng 370) ✅ · *VDI 2221* không ghi năm nhưng thân bài nói rõ *"bản
  1993"* ✅ · không dùng L1–L12 ✅ · một lần *"chúng tôi"* ở dòng 338 là lời của phương pháp trong ngoặc
  kép, hợp lệ ✅.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"Quy trình **tám bước** của Roozenburg & Eekels đặt việc rút gọn thành bước riêng — bước 5 dùng chiến lược đánh giá…"* (~148) | *"Quy trình của Roozenburg & Eekels — tám mục được đánh số, nhưng nguồn không tự đếm chúng, như Chương 09 đã ghi — đặt việc rút gọn thành một mục riêng: dùng chiến lược đánh giá để giới hạn số giải pháp nguyên lý."* | `C-04`. Giữ được thông tin vị trí mà không gán phép đếm cho nguồn. |
| 2 | *"…quy trình **tám bước** Roozenburg & Eekels vào cùng «cột Pahl-Beitz»…"* (540, sổ kiểm) | *"…quy trình Roozenburg & Eekels vào cùng «cột Pahl-Beitz»…"* | `C-04`, chỗ thứ hai. |
| 3 | *"Nguồn [57] quy định xét đúng **ba** cân nhắc — bất định trong R&D, vấn đề công nghệ/sản xuất, vấn đề sử dụng và bảo trì…"* (~200) | *"Nguồn [57] nêu tên các cân nhắc — bất định trong R&D, vấn đề công nghệ hoặc sản xuất, vấn đề sử dụng và bảo trì — rồi quy đổi cơ học: không vấn đề nào thì 5, một thì 3, hai thì 2, `\"when all exist\"` thì 0."* | `Ch11-CON-1`. Bỏ phép đếm, để chính quy tắc quy đổi cho thấy tập là đóng. |
| 4 | *"Chương 12 mang bằng chứng thực nghiệm của tuyến phê bình — FBS của Kannengiesser & Gero, **Motte**, Jensen & Andreasen…"* (~421) | *"Chương 12 mang bằng chứng thực nghiệm của tuyến phê bình — phép thử FBS của Kannengiesser & Gero, và khảo sát thực địa của Jensen & Andreasen — rồi phân biệt một điều quyết định phần còn lại của sách."* | `Ch11-CON-2`. Bỏ tên không có tài liệu, đúng theo cách `Ch12` xử lý. |
| 5 | *"Năm mươi bảy triệu. Cho một cái xe đạp."* (~34) | Giữ nguyên. | Ghi lại như **câu mẫu**: hai câu cụt, mười chữ, làm được việc mà một đoạn giải thích không làm được. P6 nên giữ tuyệt đối. |
| 6 | *"Đọc kỹ cấu trúc câu. Vế đầu là lời khen: phương pháp này **triệt tiêu rủi ro bỏ sót giải pháp mới**."* (~140) | *"Vế đầu khen: phương pháp triệt tiêu rủi ro bỏ sót giải pháp mới. Vế sau rút lại lời khen — vì không quét hết được nên phải giới hạn số chức năng con. Hai vế, một câu, nối bằng chữ *therefore*."* | Bỏ *"Đọc kỹ cấu trúc câu"* (`X-04`); và nếu `Ch09-CUT-2` được áp thì đây là **bản duy nhất còn lại** của phép phân tích này, nên nó cần đứng độc lập. |
| 7 | *"Đây là một thay đổi trong hợp đồng đọc. Từ đây, mỗi chương ít trả lời «làm thế nào» hơn…"* (~425) | *"Từ đây hợp đồng đọc đổi: mỗi chương ít trả lời «làm thế nào» hơn và nhiều «cái này đặt cược vào điều gì» hơn."* | `Ch11-CUT-4`. Câu đầu chỉ tuyên bố rằng câu sau sắp nói gì. Luật 6. |

---

## 9. Chương 12 — Quy định hay mô tả: người ta có thật sự thiết kế như thế không?

**697 dòng** (dàn ý: 550–700 ✅) · 2 sơ đồ (dàn ý: 2 ✅) · 2 *Đào sâu* · 5 mục *Áp dụng* ✅

Chương **trung thực nhất** trong sáu — nó tự khai một chỗ mỏng (Motte) mà không ai bắt được nếu nó im.
Nó cũng chứa một mục CRITICAL nằm đúng ở chỗ nó vừa tuyên bố mình đang cẩn thận.

### (1) Chất lượng mở chương — **xuất sắc**

Móc là một cú buộc tội cả mười một chương trước: *"Không chương nào hỏi câu hiển nhiên nhất — có ai làm
đúng như thế không."* Rồi nêu **hai cách giải thích sai** mà người đọc sẽ tự tìm đến (*đội mình vô kỷ luật*
hoặc *phương pháp này là chuyện hàn lâm*) và hứa cách thứ ba. Đây là cách móc đúng cho độc giả B.

Nối ngược `Chương 11` đích danh, kèm cả tiêu đề, và nối bằng **sự đổi thước đo**: *"đó vẫn là phê bình từ
bên trong: đo phương pháp bằng chính thước của phương pháp… Từ chương này thước đo đổi."*

Ba lời hứa, và lời hứa thứ hai tự nêu mức độ nghiêm trọng nếu hỏng: *"vì sao toàn bộ Phần V và Chương 18
sụp nếu người đọc trộn hai thứ đó làm một."*

### (2) Mạch — **rất tốt; nặng ở một chỗ**

Hai câu hỏi bị nhập một → phép thử định lượng → phép thử xã hội học → chỗ mỏng Motte → phát hiện Q1 →
mục phân biệt. Mỗi mục đổi thước đo và nói ra rằng nó đang đổi thước đo.

Mục *"Nhắc lại phát hiện Q1"* là chỗ hay nhất chương: nó cho thấy **chính Pahl-Beitz đã tự viết ra điều
mà phe phê bình bỏ ba năm thực địa để chứng minh**, và chốt bằng câu định vị đúng luận đề:
*"Chỗ hỏng không nằm trong văn bản. Nó nằm ở đoạn đường từ văn bản đến tổ chức."*

Chỗ nặng: **mục *"Đo bằng một cái thước hoàn toàn khác"* và ba tiểu mục biến dạng** chiếm ~110 dòng và
phần lớn là kể lại các ca thực địa. Chúng hay, nhưng ba biến dạng đầu (bước bị đổi · mục tiêu trôi ·
30% ngoài quy hoạch) làm cùng một việc chứng minh, còn biến dạng thứ tư (*over-documentation*) mới là cái
được dùng lại ở mục phân biệt.

### (3) Chỗ nên CẮT

- **`Ch12-CUT-1` (MAJOR — thuộc `X-02`).** **Mười sáu trích trùng `Ch02`**, và chúng không phải trích rìa —
  chúng là **toàn bộ lõi chứng cứ** của chương: 87 bước · 235 bước · 46 phiên · 45 phút · ngưỡng 25 bước ·
  kết luận *"incomplete as a predictive model"* · *"phase-based… waterfall"* · hai câu Jensen & Andreasen ·
  con số 30%. Xem `X-06` — đây là mục nghiêm trọng nhất về mặt cấu trúc trong cả bản phản biện.
- **`Ch12-CUT-2` (MINOR).** Ba biến dạng đầu: giữ **hai** (bước bị bóp, mục tiêu trôi), gộp ca 30% vào
  bảng phân định nơi nó vốn đã được dùng. Tiết kiệm ~15 dòng.

### (4) Chỗ THIẾU

- **`Ch12-GAP-1` (MAJOR).** *Mục phân biệt nêu đủ hai mặt, nhưng chỉ cho công cụ đọc một mặt.* Chương dựng
  rất tốt ba điều kiện để kết luận "vô dụng" và nói không điều kiện nào có trong corpus. Nó **không dựng
  điều kiện đối xứng**: cần bằng chứng gì mới kết luận một phương pháp **đáng giữ**? Không có, nên độc giả
  A — người phải quyết định tuần sau có bỏ quy trình hay không — rời chương với một lệnh cấm (*đừng kết
  luận vô dụng*) mà không có tiêu chí thay thế. `Ch18` có thể gánh, nhưng chương này hứa *"một bộ câu hỏi
  lâm sàng chạy được ngay"*, nên chỗ này thuộc về nó.
- **`Ch12-GAP-2` (MINOR).** Sáu câu hỏi lâm sàng được chép nguyên văn kèm cột *"Cái nó bóc ra"* — rất tốt.
  Nhưng không có ví dụ đã chạy. Một ca chạy thử dài bốn dòng trên một quy trình quen (soát xét thiết kế)
  sẽ biến bảng từ tham chiếu thành công cụ.

### (5) Sơ đồ

Hai sơ đồ, cả hai đều nặng ký. Sơ đồ *hai thế giới quan* với hai `subgraph` năm tầng và **một cạnh nét đứt
duy nhất nối `A5` với `B5`** (*"cùng một hiện tượng, hai cách đọc trái ngược"*) là sơ đồ tốt nhất trong
sáu chương: nó đặt toàn bộ tranh luận vào đúng một cạnh.

Sơ đồ thứ hai đối chiếu chuỗi mô hình với 25 bước đầu đo thật — đúng việc, và nút kết luận trích thẳng
`"incomplete as a predictive model"` thay vì diễn giải.

- **`Ch12-DIA-1` (MAJOR).** **Mục phân biệt — mục quan trọng nhất chương và có thể của cả Phần IV — không
  có hình.** Nó có hai bảng, và bảng làm việc tốt, nhưng thứ nó mô tả là một **ngã ba có hậu quả**, và
  chương tự nói vậy: *"Cột trái là ngõ cụt mà chương này tồn tại để chặn."* Đề xuất: `flowchart TD` từ một
  nút *"Bằng chứng: mô hình không mô tả đúng hành vi"* rẽ hai nhánh — nhánh *Đọc hư vô* dẫn tới một nút
  cụt tô xám ghi *"Chương 13 · Phần V · Chương 18 hết nghĩa"* và **không có cạnh nào đi tiếp**; nhánh
  *Đọc đúng phạm vi* dẫn tiếp sang ba nút chương. Nhánh cụt phải **nhìn thấy được là cụt** — đó là toàn bộ
  chức năng của mục, và hiện nó chỉ được nói bằng lời.
- **`Ch12-DIA-2` (MINOR).** Nhãn `subgraph` dùng `&amp;` (*Kannengiesser &amp; Gero*) trong khi `Ch09`
  dùng `&` trần. Xem `X-05`.

### (6) Nhất quán xuyên chương

- **`C-03` (CRITICAL) — "sáu câu hỏi lâm sàng" mâu thuẫn với tuyên bố Luật 1 của chính chương.**
  Dòng 253, trong thân bài, chương viết:
  > *"Nguồn liệt kê ra các câu hỏi nhưng **không tự đếm tổng số** — nên chương này chép từng câu chứ không
  > nêu con số."*

  Dòng 590, tiêu đề mục *Áp dụng ở Xưởng* số 2:
  > *"### 2. Chạy **sáu** câu hỏi lâm sàng lên một phương pháp xưởng đang áp"*

  Và dòng 599, trong thân mục ấy: *"**Sáu câu**, đúng thứ tự trong bảng ở trên."*

  Chương tuyên bố không nêu con số, rồi nêu con số hai lần, cách đó 340 dòng.
  Nặng hơn: **sổ kiểm cuối chương liệt kê chính mục này trong danh sách *"Con số đã BỎ vì không có nguyên
  văn"***: *"tổng số câu hỏi phỏng vấn lâm sàng — nguồn liệt kê nhưng không tự đếm, chương chép nguyên văn
  từng câu và nói rõ điều đó."* Tự-kiểm của chương **mô tả sai chính chương**.
  Ca thứ **bảy** của lớp `N-08`, và là ca minh hoạ rõ nhất cho bài học đã đăng ký trong punchlist: lỗi này
  không bị bắt bởi ai đọc kỹ — sổ kiểm chính là "đọc kỹ", và nó đã nói ngược. Nó chỉ bị bắt bởi một phép
  grep không quan tâm ai viết ra con số.
- **`Ch12-CON-1` (MAJOR).** *"**bốn** thước đo"* — dùng làm tiêu đề khung *Đào sâu* (dòng 189) và trong
  thân bài (*"Bốn tiêu chí đọc đồ thị"*). Grep `four criteria` trong `Phase1-Exploration\`: **không có**.
  Con số này không nằm trong danh sách *"Con số có nguyên văn"* lẫn danh sách *"Con số đã BỎ"* của sổ kiểm.
  Cùng lớp `N-08`, mức nhẹ hơn `C-03` vì chương không tự tuyên bố ngược ở chỗ khác.
- **`Ch12-CON-2` (MAJOR).** **Câu *"lộ ra lần đầu"* không đúng so với `Ch02`.** Mở chương viết:
  > *"Đây là chỗ **mặt tiếp giáp** lộ ra **lần đầu** bằng dữ liệu chứ không bằng lập luận."*

  `Ch02` mục *"Bằng chứng của phe mô tả, và điều nó thật sự chứng minh"* đã trình bày cùng bộ số (87/235/
  46/45 phút/25 bước), cùng kết luận *incomplete*, và cùng phép loại suy đèn đỏ. Xem `X-06`.
- **`Ch12-CON-3` (MINOR).** Dùng *"bảy công cụ"* một lần ở dòng 4 — thuộc `C-01`.
- Điểm mạnh về nhất quán: *"mười lăm bước"* ở dòng 455 được xử lý **hoàn toàn đúng** — chương nêu con số
  chỉ để nói rằng cuốn sách gốc chưa một lần tự gọi nó như vậy, kèm phép đếm cơ học `fifteen` = 0 lần.
  Đây là bản mẫu của Luật 1 và nên được giữ nguyên chữ.

### (7) Câu cần viết lại

| # | Nguyên bản (dòng) | Đề xuất | Lý do |
|---|---|---|---|
| 1 | *"### 2. Chạy **sáu** câu hỏi lâm sàng lên một phương pháp xưởng đang áp"* (590) | *"### 2. Chạy bộ câu hỏi lâm sàng lên một phương pháp xưởng đang áp"* | `C-03`. Chương đã tuyên bố không nêu con số ở dòng 253. |
| 2 | *"**Sáu câu**, đúng thứ tự trong bảng ở trên."* (599) | *"Từng câu, đúng thứ tự trong bảng ở trên."* | `C-03`, chỗ thứ hai. |
| 3 | *"> **Đào sâu: bốn thước đo**, và vì sao chúng quan trọng hơn kết luận"* (189) | *"> **Đào sâu: các thước đo**, và vì sao chúng quan trọng hơn kết luận"* | `Ch12-CON-1`. Nguồn không đếm; thân khung đã nêu tên từng thước, không cần con số. |
| 4 | *"Đây là chỗ **mặt tiếp giáp** lộ ra **lần đầu** bằng dữ liệu chứ không bằng lập luận."* (~15) | *"Chương 02 đã đặt tranh luận này lên bàn và đưa số đo cốt lõi. Chương này mở cả tuyến bằng chứng, và quan trọng hơn: dựng đường ranh mà nếu đọc sai thì cả Phần V mất nghĩa."* | `Ch12-CON-2` + `X-06`. Bỏ khẳng định "lần đầu" đã sai, và định vị lại chương bằng cái nó **thật sự** thêm vào. |
| 5 | *"Điều đáng học ở Kannengiesser & Gero không phải kết luận. Là cách họ biến một cuộc cãi vã triết học thành một phép đo."* (~91) | Giữ nguyên. | Ghi lại như **câu mẫu**: câu thứ hai cụt chủ ngữ là cố ý và nó chạy. |
| 6 | *"Chỗ này đáng dừng lại một nhịp, vì nó là một trong hai lần cuốn sách này có **số đo** thay vì lập luận."* (~178) | *"Đây là một trong hai lần cuốn sách này có số đo thay vì lập luận — nên phạm vi của nó phải được phát biểu hẹp: bốn mươi sáu phiên sinh viên trong phòng lab 45 phút không phải bằng chứng về ngành công nghiệp."* | *"đáng dừng lại một nhịp"* là chỉ dẫn đọc (Luật 6). Gộp với câu sau thì mất một dòng. **Ghi chú:** *"một trong hai lần"* là một phép đếm về chính cuốn sách — cần kiểm chéo với các chương khác ở P6 xem có đúng hai lần không. |
| 7 | *"Trộn hai mệnh đề là một lỗi loại — cùng loại với việc bác một bản đồ vì không ai đi đúng lộ trình vẽ trên đó."* (~480) | Giữ nội dung, nhưng **đổi hình ảnh**: `Ch02` đã dùng phép loại suy đèn đỏ cho cùng lập luận, và mở chương `Ch12` cũng dùng đèn đỏ. Ba lần một hình ảnh. Giữ bản đồ ở đây, bỏ đèn đỏ ở mở chương. | `X-06`. Lặp hình ảnh xuyên chương, không thấy được từ trong chương. |

---

## 10. Mục xuyên chương — những thứ không agent nào tự thấy được

Bảy mục dưới đây chỉ hiện ra khi đặt sáu chương cạnh nhau, hoặc đặt chúng cạnh các chương ngoài phạm vi.
Đây là phần có giá trị riêng của P5; chúng **không** phải lỗi của chương nào cả.

### `X-01` (MINOR) — Bốn trích được sửa im lặng bên trong dấu nguyên văn

Đã trình bày ở mục 1.3. Cả bốn đều là dọn rác PDF và đều lành. Đề xuất: một câu quy ước ở lời mở —
*"trích nguyên văn được giữ nguyên chữ; chỗ nào bản gốc bị PDF ngắt từ hoặc mang số chú thích thì đã dọn,
và không chỗ nào đổi chữ."* Một câu, đóng vĩnh viễn một lớp nghi ngờ.

### `X-02` (MAJOR) — Trùng trích dẫn giữa các chương liền kề, đo được

| Cặp chương | Số trích trùng | Tính chất |
|---|---|---|
| `Ch02` ∩ `Ch12` | **16** | toàn bộ lõi chứng cứ của `Ch12` — xem `X-06` |
| `Ch06` ∩ `Ch07` | **16** | hai chương VDI 2206 |
| `Ch09` ∩ `Ch11` | **8** | khối nổ tổ hợp, kèm cùng một phép phân tích |
| `Ch11` ∩ `Ch16` | **8** | — (ngoài phạm vi, ghi để chuyển tiếp) |
| `Ch08` ∩ `Ch11` | **6** | 75/80%, *power and pressure*, tổ hợp bất khả thi, 20×20 |
| `Ch10` ∩ `Ch11` | **6** | khối DSO 5/3/2/0 và các ngưỡng |
| `Ch08` ∩ `Ch10` | **2** | 75/80% |

Tỷ lệ trích **riêng** của từng chương (so với cả 18 chương):

| | Ch07 | Ch08 | Ch09 | Ch10 | Ch11 | Ch12 |
|---|---|---|---|---|---|---|
| trích riêng | 51% | 50% | 62% | **70%** | **35%** | 45% |

`Ch11` ở 35% là ngoại lệ rõ: hai phần ba vật liệu của nó đã được đọc ở chỗ khác. Chương không thiếu ý —
luận điểm *vị trí nhát cắt* là của riêng nó và rất mạnh — nhưng nó dựng lại chứng cứ thay vì trỏ về.

**Con số 75%/80% Blanchard 1978 xuất hiện với xử lý riêng ở ba chương**: `Ch08` (khung *Đào sâu*),
`Ch10` (mục *ba thứ không thang nào đo*), `Ch11` (mục *nghịch lý thông tin*). Cả ba đều xử lý **đúng** theo
`N-09` — nêu cả hai con số, ghi rõ là trích lại chứ không đo, dùng chiều chứ không dùng độ lớn — nhưng
người đọc gặp cùng một bài học ba lần. P6 nên chọn **một nhà chính thức** (đề xuất: `Ch11`, vì ở đó con số
là **vế thứ hai của nghịch lý**, tức nó chịu lực chứ không minh hoạ) và để hai chương kia trỏ về.

### `X-03` (MAJOR) — Ngôi kể trôi giữa ba chế độ

| Chế độ | Chương |
|---|---|
| Không ngôi thứ nhất | `Ch01` `Ch02` `Ch06` `Ch08` `Ch12` `Ch13` `Ch18` |
| **"tôi"** | `Ch03`(2) `Ch04`(1) `Ch05`(7) **`Ch09`(7)** `Ch14`(7) `Ch15`(3) **`Ch16`(19)** `Ch17`(6) |
| **"chúng tôi"** | **`Ch07`(1)** `Ch05`(1) |

`Ch07` là chương duy nhất trong sáu dùng *"chúng tôi"* cho người kể. `Ch09` dùng *"tôi"* bảy lần. Hai chương
liền nhau, hai ngôi khác nhau, và `Ch08` ở giữa không dùng ngôi nào.

Chỗ này quan trọng hơn vẻ ngoài của nó, vì ngôi thứ nhất trong cuốn sách này **luôn** xuất hiện ở đúng một
loại câu: khai báo *"đây là suy luận của tôi, không phải của nguồn"* theo Luật 4. Nghĩa là **cùng một hành
vi khai báo đang được ký bằng ba chữ ký khác nhau**. Đề xuất cho P6: chuẩn hoá về *"thao tác của cuốn sách
này"* — cách nói mà `Ch06`, `Ch08` và `Ch11` đã dùng — và giữ *"tôi"* nếu muốn, nhưng chỉ ở `Ch16`/`Ch17`
nơi giọng cá nhân là có chủ ý.

### `X-04` (MINOR) — Tật chỉ dẫn đọc

Các biến thể *"Đọc kỹ…"*, *"Đọc chậm câu này"*, *"Câu này đáng đọc hai lần"*, *"Chỗ này đáng dừng lại một
nhịp"*, *"Chỗ này mới thú vị"* xuất hiện **ít nhất 12 lần** trong sáu chương. Không cụm nào nằm trong danh
sách cấm của Luật 6, nhưng tất cả đều cùng họ với nó: chúng bảo người đọc **hãy chú ý**, thay vì làm câu
tiếp theo đáng chú ý. Trong hầu hết ca, xoá cụm đi thì câu mạnh lên. Đã nêu ca cụ thể ở mục (7) của từng
chương.

### `X-05` (MINOR) — Hai quy ước escape trong nhãn mermaid

`Ch02` và `Ch09` dùng `&` trần trong nhãn nút; `Ch12` dùng `&amp;`. Thống nhất một cách và kiểm render một
lượt. Ghi thêm: **13 trên 14 sơ đồ của sáu chương là `flowchart`**; ngoại lệ duy nhất là `quadrantChart` ở
`Ch10`. Với một cuốn sách có trục niên đại rõ ở Phần II và trục so sánh bốn thế hệ ở Phần III, việc chỉ
dùng một kiểu sơ đồ là một cơ hội bỏ lỡ chứ chưa phải lỗi — `timeline` cho mốc 1969→2021 của `Ch07` là ca
rõ nhất.

### `X-06` (MAJOR) — `Ch02` đã tiêu trước lõi chứng cứ của `Ch12`

Đây là mục cấu trúc nghiêm trọng nhất tìm được, và nó chỉ hiện ra khi đọc chéo ra ngoài phạm vi.

`Ch02` mục *"Bằng chứng của phe mô tả, và điều nó thật sự chứng minh"* (dòng ~267–342) đã trình bày:

- toàn bộ bộ số của Kannengiesser & Gero: 87 bước · 235 bước · 46 phiên · 45 phút · ngưỡng 25 bước;
- kết luận nguyên văn `"seems to be incomplete as a predictive model"`;
- câu `"phase-based… waterfall"`;
- **chính phép phân biệt** mà `Ch12` lấy làm mục quan trọng nhất của mình, kèm phép loại suy đèn đỏ:
  *"Một biển báo cấm vượt đèn đỏ không bị bác bỏ bởi số liệu đếm được bao nhiêu người vượt đèn đỏ"*;
- hai câu Jensen & Andreasen (*"confused the result…"*, *"This starting point…"*).

`Ch02` có bàn giao tử tế — *"Chương 12 sẽ khai thác đủ cả tuyến bằng chứng; ở đây chỉ cần giữ lấy sự phân
biệt."* Nhưng nó đã giao **cả sự phân biệt lẫn số đo**. Hệ quả là `Ch12` mở bằng một lời hứa không giữ được
(*"lộ ra lần đầu bằng dữ liệu"*) và lặp lại ở quy mô lớn hơn một mục người đọc đã đọc ở chương 2.

**Hai hướng cho P6, chọn một** (đây là quyết định cấu trúc, thuộc thẩm quyền cao hơn phản biện):

- **A — dồn về `Ch12`.** `Ch02` giữ **một** câu kết luận `"incomplete"` và giữ phép phân biệt ở mức nguyên
  tắc, bỏ toàn bộ bộ số và bỏ phép loại suy đèn đỏ. Ưu: `Ch12` giữ nguyên sức, mở chương không phải sửa,
  Phần IV có trọng lượng đúng như dàn ý định. Nhược: `Ch02` mất một mục có sức nặng.
- **B — dồn về `Ch02`.** `Ch12` bỏ việc dựng lại phép thử, chỉ tóm bằng ba câu rồi đi thẳng vào cái `Ch02`
  không có: tuyến ethnomethodology, bốn biến dạng doanh nghiệp, chỗ mỏng Motte, và mục phân biệt mở rộng
  với ba điều kiện bác bỏ. Ưu: `Ch12` ngắn lại ~80 dòng và sắc hơn. Nhược: phải sửa mở chương của `Ch12`.

Khuyến nghị: **B**. Cái `Ch12` thật sự thêm vào so với `Ch02` là *ba điều kiện để kết luận vô dụng* và
*bảng chứng minh/không chứng minh* — hai thứ không có ở `Ch02` và không thể có, vì `Ch02` chưa có tuyến
thực địa để đối chiếu. Định vị `Ch12` bằng hai thứ đó thì chương mạnh hơn hẳn hiện nay.

### `X-07` (MAJOR) — Lớp lỗi `N-08` nay có **tám** ca, không phải năm

Punchlist ghi năm ca. Sáu chương này đóng góp thêm ba, tất cả đều là **con số do người viết điền vào**:

| # | Phép đếm | Chương | Trạng thái |
|---|---|---|---|
| 6 | "bảy công cụ ICDM" | `Ch01` `Ch08` `Ch10` `Ch15` `Ch17` `Ch18` | `C-01` — `Ch16` đã bác, năm chương khác vẫn dùng |
| 7 | "sáu câu hỏi lâm sàng" | `Ch12` | `C-03` — mâu thuẫn với chính thân bài và chính sổ kiểm |
| 8 | "tám bước Roozenburg & Eekels" | `Ch11` | `C-04` — mâu thuẫn với `Ch09` |

Cộng thêm bốn ca mức MAJOR cùng lớp: *"hai mươi năm"* (`Ch07` ×2), *"hai mươi năm nghiên cứu"* (`Ch08` —
đã nâng lên CRITICAL vì mâu thuẫn nội bộ), *"ba cân nhắc"* (`Ch11`), *"bốn thước đo"* (`Ch12`).

**Điều đáng rút ra, và nó khác với bài học đã đăng ký.** Punchlist ghi rằng lớp lỗi này bị bắt bởi một luật
cơ học chứ không bởi ai đọc kỹ. Sáu chương này thêm một tầng: **ba trong tám ca mâu thuẫn với một câu do
chính cuốn sách viết ra ở chương khác.** `Ch16` bác "bảy công cụ"; `Ch09` bác "tám bước"; `Ch12` tự bác
"sáu câu hỏi" ở dòng 253 của chính nó. Nghĩa là bằng chứng để bắt chúng đã nằm sẵn trong bản thảo từ trước
khi P5 chạy — cái thiếu không phải cảm biến, mà là **phép đối chiếu chéo giữa các chương**.

Đề xuất cụ thể cho cổng `p5_gate.py`: thêm một phép kiểm mới — rút mọi câu dạng *"không có trong nguồn"* /
*"nguồn không tự đếm"* / *"không tìm được"* khỏi toàn bộ 18 chương, lấy đối tượng của câu phủ định ấy, rồi
tìm ngược xem có chương nào khẳng định chính đối tượng đó. Cả ba ca CRITICAL trên đều bị bắt bởi đúng một
phép kiểm này, và nó không sinh dương tính giả vì nó chỉ soi các cặp *phủ định – khẳng định* về cùng một
đối tượng.

---

## 11. Tổng kết

### Chỉ số

| | |
|---|---|
| Trích dẫn kiểm bằng công cụ | **261 / 261 truy được về nguồn** (mẫu bắt buộc 12/12) |
| Trích bịa | **0** |
| CRITICAL | **4** |
| MAJOR | **21** |
| MINOR | **14** |
| Bốn phép kiểm riêng | 3 ĐẠT hoàn toàn (`Ch07` 58–90%, `Ch10` đòn bẩy, `Ch12` mục phân biệt) · 1 ĐẠT phần dòng, hỏng phần con số (`Ch08`) |
| Trần độ dài | 6/6 trong khoảng dàn ý (`Ch09` vượt 1 dòng, `Ch11` đúng kịch trần) |
| Sơ đồ · mục *Áp dụng* · *Đào sâu* | 6/6 đúng hợp đồng |
| Cổng an ninh Luật 5 | **sạch** — không tên riêng, mã sản phẩm, đơn vị, số liệu vận hành, hay lĩnh vực. Một dương tính giả: chữ *"vũ khí"* ở `Ch08` dòng 135, dùng ẩn dụ về điểm số |
| Luật 6 — cụm cấm | **0 lần** trong sáu chương |

### Ba vấn đề nghiêm trọng nhất

**1. `X-06` — `Ch02` đã tiêu trước toàn bộ lõi chứng cứ của `Ch12`, và `Ch12` mở bằng chữ "lần đầu".**
Mười sáu trích trùng, gồm cả bộ số 87/235/46/45 phút/25 bước, kết luận *incomplete*, phép phân biệt trung
tâm và phép loại suy đèn đỏ. Đây là chương bản lề của Phần IV — chỗ cuốn sách tuyên bố đổi giọng — và nó
đang chạy trên vật liệu người đọc đã gặp ở chương 2. Không phải lỗi trích dẫn, không phải lỗi lập luận;
là lỗi phân bổ vật liệu, và nó chỉ sửa được ở tầng cấu trúc. Khuyến nghị hướng **B** ở `X-06`.

**2. `C-01` + `C-02` + `C-03` + `C-04` — bốn phép đếm không có nguyên văn, ba trong đó bị chính cuốn sách
bác ở chỗ khác.**
"Bảy công cụ ICDM" được dùng như sự thật ở sáu chương trong khi `Ch16` có nguyên một khung *Đào sâu* nói nó
không có nguồn. "Tám bước Roozenburg & Eekels" ở `Ch11` mâu thuẫn với tuyên bố của `Ch09`. "Sáu câu hỏi lâm
sàng" ở `Ch12` mâu thuẫn với dòng 253 của chính `Ch12` **và** với sổ kiểm của chính `Ch12`. "Hai mươi năm
nghiên cứu" ở `Ch08` mâu thuẫn với nguyên văn `1996`–`2001` mà chính chương trích cách đó 180 dòng.
Với một cuốn sách có luận điểm trung tâm là *con số trôi qua trích dẫn lại nhau mà không ai đo lại*, bốn
mục này chặn xuất bản. Cả bốn đều sửa được bằng cách bỏ con số — không mục nào đòi thêm nghiên cứu.

**3. `X-02` — trùng lặp có hệ thống giữa các chương liền kề, nặng nhất ở `Ch11` (35% trích riêng).**
`Ch11` dựng lại khối nổ tổ hợp của `Ch09`, khối DSO của `Ch10`, và **hai trong năm mục *Áp dụng ở Xưởng*
của nó lặp hai mục của `Ch08`** — cùng nguồn, cùng hành động, cùng bẫy. `Ch07` lặp 16 trích của `Ch06`.
Luận điểm riêng của `Ch11` — *vị trí nhát cắt*, và *"nghịch lý không được giải, nó được định giá"* — là một
trong những luận điểm hay nhất cuốn sách, và nó đang bị chôn dưới vật liệu đã đọc. Chương này cần được cắt
để mạnh lên, không phải để ngắn lại.

### Ghi nhận — những chỗ nên giữ nguyên chữ

Để P6 không "sửa" nhầm:

- **`Ch07`, khung *Đào sâu: Một con số đi đường xa*.** Bản mẫu của Luật 2. Đủ ba ràng buộc, tự hạ trọng
  lượng con số, và tự nói rằng bỏ nó đi cũng không luận điểm nào yếu đi.
- **`Ch08`, mục *"Chương này cố ý ngắn, và đây là lý do"*.** Biến một ràng buộc quản lý dự án thành nội
  dung, kèm câu *"trần độ dài là một cảm biến, không phải một gợi ý về văn phong"*.
- **`Ch11`, các nút sơ đồ có nhãn *minh hoạ của tác giả* tách khỏi nhãn *nguyên văn nguồn*.** Cách áp Luật 1
  **bên trong sơ đồ** — không chương nào khác làm, nên nhân rộng.
- **`Ch12`, mục *"Motte, và một chỗ mỏng phải khai"*.** Chương tự khai một khoảng trống không ai bắt được
  nếu nó im, kèm lý do đúng: *"Một cuốn sách buộc tội các phương pháp khác là mang giả định không khai báo
  thì không được phép có chỗ nào tự mình làm đúng điều đó."*
- **`Ch12`, đoạn *"mười lăm bước"* ở dòng 455.** Bản mẫu của Luật 1, kèm phép đếm cơ học `fifteen` = 0 lần.
- **`Ch11`, hai câu *"Năm mươi bảy triệu. Cho một cái xe đạp."*** Mười chữ, làm được việc mà một đoạn giải
  thích không làm được.
- **Sáu con số đã bị các agent chủ động BỎ** trong sáu chương (năm bước luồng cam · số bước micro-cycle ·
  thang chấm độ chín · `SFD > 100` · ngưỡng hệ số xác định · tổng số câu hỏi lâm sàng ở thân bài). Đây là
  hành vi đúng theo Luật 1 và `N-06`. **Không được "bổ sung" lại.**
