# Phản biện Chương 13–18 — Phần IV, V, VI

Ngày: 2026-08-21 · Phạm vi: `Ch13` … `Ch18` · Đọc trước: `Phase2-Positioning.md`, `Phase3-Outline.md`,
`_P4_CONTRACT.md`, `_P5_PUNCHLIST.md` (13 mục N-01…N-13 đã biết — **không báo lại**, chỉ báo cái MỚI).

**Không sửa chương nào.** Mọi mục dưới đây là đề xuất cho P6.

---

## 1. Bảng xác minh trích dẫn — 12 đoạn ngẫu nhiên, rải đều 6 chương

**Cách làm.** Rút toàn bộ chuỗi trong backtick dài ≥ 40 ký tự, không chứa dấu tiếng Việt, của từng chương;
khử trùng lặp; bốc mẫu ngẫu nhiên có seed cố định (`seed=20260820`) theo hạn ngạch Ch13×2 · Ch14×2 ·
Ch15×3 · Ch16×2 · Ch17×2 · Ch18×1 — Ch18 chỉ có **đúng một** đoạn trích tiếng Anh trong toàn chương, nên
hạn ngạch buộc phải lệch. Chuẩn hoá nháy cong, gạch ngang em/en, dấu ba chấm và khoảng trắng trước khi
so; đoạn có dấu lược được cắt về mệnh đề dài nhất rồi dò lùi theo tiền tố giảm dần.

| # | Chương | 30 chữ đầu của đoạn trích | Kết quả | Tệp khớp |
|---|---|---|---|---|
| 1 | Ch13 | `"...only have parts of the lifecycle in scope."` | **TÌM THẤY** | `c3-vdi2206-vmodel-cps_Exploration.md` |
| 2 | Ch13 | `"However, the data flow needs to be further detailed and automated…"` | **TÌM THẤY** | `c3-vdi2206-vmodel-cps_Exploration.md` |
| 3 | Ch14 | `"Only seasoned project managers seemed to 'dare'…"` | **TÌM THẤY** | `c7-doi-chieu-phe-binh_Exploration.md` |
| 4 | Ch14 | `"If not intentionally and systematically kept"` | **TÌM THẤY** | `c2-vdi2221-1986-2019_Exploration.md` |
| 5 | Ch15 | `"House B uses one-third less electricity"` | **TÌM THẤY** | `c8-lang-kinh-he-thong_Exploration.md` |
| 6 | Ch15 | `"Failure Mode 3: Financial Benefits Don't Materialize"` | **TÌM THẤY** | `c8-lang-kinh-he-thong_Exploration.md` |
| 7 | Ch15 | `"Example 2: Romanian Population Policy (1967)"` | **TÌM THẤY** | `c8-lang-kinh-he-thong_Exploration.md` |
| 8 | Ch16 | `"Ideally, there should be no more than 10."` | **TÌM THẤY** | `c4-sinh-giai-phap_Exploration.md` |
| 9 | Ch16 | `"For example, the given morphological chart…"` | **TÌM THẤY** | `c4-sinh-giai-phap_Exploration.md` dòng 390 |
| 10 | Ch17 | `"Error-embracing is the condition for learning."` | **TÌM THẤY** | `SYNTH_Exploration.md` |
| 11 | Ch17 | `"Information quality L6 Garbage in → wrong constraint identified"` | **TÌM THẤY** (khớp 5/8 từ — mũi tên và khoảng trắng cột bảng khác nhau) | `c8-lang-kinh-he-thong_Exploration.md` |
| 12 | Ch18 | `"Mental model resistance L2 (Paradigm) Implementation fails if paradigm unchanged"` | **TÌM THẤY** | `c8-lang-kinh-he-thong_Exploration.md` · `SYNTH_Exploration.md` |

**Kết quả: 12/12 TÌM THẤY. 0 CRITICAL. Không đoạn nào trong mẫu bị bịa.**

### Hai ghi chú về phương pháp — đọc trước khi tin bảng trên

**(a) Vòng chạy đầu báo sai một ca, và lỗi nằm ở công cụ chứ không ở chương.** Dòng 9 thoạt tiên trả về
KHÔNG TÌM THẤY. Nguyên nhân: bộ chuẩn hoá của tôi thay `...` trước khi thay dấu lược một ký tự, nên phần
đuôi ba chấm sót lại và chặn phép khớp chuỗi con. Đoạn trích thật nằm nguyên văn ở
`c4-sinh-giai-phap_Exploration.md` dòng 390.

> **Bài học đăng ký cho P7:** một cổng dò trích dẫn phải được kiểm bằng ca dương tính đã biết **trước
> khi** dùng kết quả âm tính của nó để buộc tội một chương. Đây đúng mẫu N-13 — tỷ lệ báo oan là thứ
> quyết định cổng còn sống hay không.

**(b) "Không có trong `Phase1-Exploration\`" KHÔNG đủ để kết luận bịa.** Điều phối viên đã chạy độc lập
phép đối chiếu **toàn bộ 625 đoạn trích của cả 18 chương: 625/625 truy được về nguồn.** Trong đó có một
ca thuộc phần của tôi — `Ch14:102`, câu `"Pahl & Beitz approach is based on the historical background to
modern systematic design thinking in Germany…"` — **không nằm trong bất kỳ tệp khám phá nào**, phải kéo
thẳng nội dung nguồn `[33]` từ NotebookLM mới thấy, và ở đó nó nguyên văn.

Nghĩa là tệp khám phá chỉ là **một lát cắt** của nguồn, không phải toàn bộ nguồn. Bảng 12 dòng ở trên vì
thế chỉ chứng minh chiều thuận (có mặt trong lát cắt ⇒ có thật); nó **không có quyền** kết luận chiều
nghịch. Mọi báo cáo sau dùng phép dò này phải mang cùng câu cảnh báo, nếu không P7 sẽ đi "sửa" những câu
trích đúng. Ghi chú này cũng khớp với chính lời Ch18 tự viết ở mục *Những gì cuốn sách này không trả lời
được*: **độ phủ là một hàm của cách đặt câu hỏi, không chỉ của cái có trong corpus.**

---

## 2. Chiều thứ chín — độ chặt của lập luận Phần V

Phần V mượn thang đòn bẩy Meadows từ ngoài ngành, và chuỗi suy diễn dài ba mắt: **thang là tài liệu THỨ
CẤP** (corpus không có `Thinking in Systems` lẫn `The Goal`, chỉ có tám tệp `DMIR Analysis` viết *về*
chúng — `[59]`…`[66]`) **→ ánh xạ công cụ vào tầng là SUY LUẬN của sách → kết luận về công cụ thiết kế**
(tài liệu sơ cấp). Bốn câu hỏi kiểm, trả lời từng câu.

### 2.1 Ch15, Ch16, Ch17 có khai chuỗi ba mắt trong THÂN BÀI không, hay giấu xuống sổ kiểm?

| Chương | Mắt 1 — thang là thứ cấp | Mắt 2 — ánh xạ là suy luận | Vẽ liền ba mắt | Vị trí |
|---|---|---|---|---|
| **Ch15** | ✅ dòng 47–56, gọi đích danh tám tệp `DMIR Analysis` và hai dòng thư mục `[65]` | ✅ có, nhưng **hoãn thi hành** sang Ch16 (dòng 415–421) | ⚠️ **không** — hai mắt cách nhau 370 dòng | thân bài |
| **Ch16** | ✅ tiểu mục riêng *Lời khai thứ hai*, dòng 40–48 | ✅ tiểu mục *Bảng này là công trình của cuốn sách*, dòng 24–38 | ✅ **có, một dòng in đậm**, dòng 50–52 | thân bài, **trước** khi người đọc thấy ô nào của bảng |
| **Ch17** | ✅ mục *Ranh giới phải nhắc lại*, dòng 11–17 | ✅ hai lần, ngay dưới hai bảng: dòng 128 và dòng 182 | ❌ **không** — hai mắt rời nhau | thân bài |

**Kết luận 2.1: cả ba đều khai trong thân bài; không chương nào giấu xuống sổ kiểm.** Ch16 là chuẩn mực
— chương duy nhất phát biểu trọn chuỗi thành một câu và đặt câu ấy **trước** bảng:

> *"thang đo (tài liệu thứ cấp) → ánh xạ vào công cụ (suy luận của tôi) → kết luận về công cụ thiết kế
> (tài liệu sơ cấp)."* — Ch16, dòng 50–52

Ch15 và Ch17 khai **đủ các mắt nhưng không nối chúng lại**, nên người đọc phải tự cộng. MINOR, không
MAJOR: vật liệu có mặt, chỉ thiếu một câu gộp. Đề xuất câu chữ ở mục 6 và 8.

### 2.2 Có chỗ nào trình bày ánh xạ như một PHÉP ĐO thay vì một CÁCH NHÌN không?

**Có — đúng hai câu, cả hai trong Ch16, cả hai ở vị trí có trọng lượng lập luận cao nhất.** Điều làm nó
đáng kể: Ch16 tự viết ra luật đúng ở dòng 54 — `"nó là một *cách nhìn*, không phải một *phép đo*"` — rồi
vi phạm chính luật ấy ở hai chỗ khác trong cùng chương.

**(i) Ch16, dòng 84** — câu kết của mục *Bốn phép thử*, đặt ngay trước bảng:

> *"Không công cụ nào trong corpus vượt qua được L3. Không cái nào chạm `"L2: Paradigms—Mental Models"`
> [62]. Đó cũng là một phát hiện, và nó là phát hiện quan trọng nhất của chương."*

Câu này phát biểu một tính chất **của corpus**. Nhưng 13/14 ô là ánh xạ của tác giả, nên "không công cụ
nào chạm L2" là tính chất **của bảng phân loại do tác giả dựng**, không phải của các công cụ — nó là hệ
quả tất định của việc bốn phép thử không có phép thử nào bắt được L2. Gọi nó là *phát hiện*, và là
*phát hiện quan trọng nhất*, là nâng một hệ quả của phép phân loại lên hàng kết quả quan sát. Đây là chỗ
vi phạm nặng nhất trong cả sáu chương, và nó nằm ở đúng câu mà chương coi là kết luận của mình.

**(ii) Ch16, dòng 167:**

> *"Nhìn hình này thì thấy ngay hình dạng của vấn đề. Sáu trong mười bốn công cụ nằm ở hai tầng đáy."*

Phép đếm 6/14 chạy trên chính bảng của tác giả. Sổ kiểm cuối chương **có** ghi nhận điều này
(*"đó là phép đếm trên chính bảng của tôi chứ không phải của nguồn"*) — nhưng đó đúng là chỗ N-04 cấm đặt
nó. Thân bài trình bày như quan sát; đính chính nằm ở cuối chương, nơi người đọc lướt không tới.

**Ba chương còn lại sạch ở điểm này:**

- **Ch17** — mọi bảng ánh xạ đều có dòng khai ngay bên dưới (dòng 128: *"Toàn bộ cột 'Tầng' trong bảng
  này là thao tác của cuốn sách"*; dòng 182: *"Cột 'Tầng vỡ' là ánh xạ của cuốn sách"*), và cột *Nhìn
  thấy được sau* tự hạ giá trị của chính nó: *"không có căn cứ đo trong nguồn nào — nó ở đây vì thứ tự
  tương đối giữa bốn dòng mới là cái có ích, không phải trị số tuyệt đối."*
- **Ch15** — cột thứ tư của bảng mười hai tầng được khai *"là của tôi, không của nguồn… phải được đọc như
  một đề nghị chứ không phải một kết quả"*; mục *Cái thang này dùng để làm gì, và không dùng để làm gì*
  nói thẳng *"Gán tầng cho một công cụ là giả thuyết, không phải phép đo."*
- **Ch18** — nhắc lại ranh giới ở đầu Bước 3 trước khi dùng bảng Ch16, và mục *Việc phải làm tiếp* số 5
  đề xuất **chấm mù bảng Ch16** kèm điều kiện bác bỏ: *"Nếu những người chấm độc lập không đồng thuận với
  nhau… bảng Ch16 không phải là một ánh xạ mà là một ý kiến."* Đây là mức trung thực cao nhất trong sáu
  chương — sách tự viết ra phép thử có thể giết chính nó.

### 2.3 Con số "1 ô có căn cứ nguồn / 13 ô suy luận" có in trong THÂN chương Ch16 không?

**Có — in đậm, ngay dưới bảng, dòng 165:**

> *"**Kết quả đếm, không làm tròn cho đẹp: 1 ô có căn cứ nguyên văn từ nguồn, 13 ô là suy luận của tác
> giả.**"*

Nhắc lại lần thứ hai ở đoạn liền sau, kèm câu bảo vệ đúng chỗ — *"Cái tôi bán ở đây là phép thử, không
phải là bảng."* — và lần thứ ba ở sổ kiểm. **N-04 đóng được.** Ngoài mức yêu cầu, Ch16 còn cố ý giữ TOC
làm **hàng đối chứng** trong bảng chính để người đọc thấy một ô *có* căn cứ trông khác một ô không có
thế nào. Đó là thiết kế trình bày tốt hơn mức punchlist đòi.

Một lưu ý nhỏ cho P6: nhãn nhị phân 1/13 **đánh giá thấp** chính công trình của chương. Tám trong mười ba
ô "suy luận" có neo vào một câu nguyên văn (lệnh cấm của Pugh `[57]`, lệnh loại trừ cấp 4 của RTA `[55]`,
câu tự thu hồi của Robustool `[56]`, câu tự thú thuật toán hỏng của DSO `[57]`, định nghĩa L4 `[62]` đối
chiếu với Blatt 2 `[12]`…). Cách đếm hiện tại đúng ở mức *"ô nào có nguồn phát biểu chính phép ánh xạ"* —
nên giữ con số, nhưng thêm một câu phân biệt **ô không căn cứ** với **ô suy luận có neo nguyên văn**.

### 2.4 Có chỗ nào dùng Meadows/Goldratt làm BẰNG CHỨNG về thiết kế kỹ thuật (vi phạm LUẬT 4)?

**Không. Trong sáu chương này không có vi phạm trực tiếp.** Ba chỗ đáng nêu, không chỗ nào vượt lằn ranh:

- **Ch15** dựng hẳn bảng hai cột *Được phép / Không được phép* (dòng 35–41) phát biểu lằn ranh thành câu
  kiểm được, rồi tự áp. Bảng ca thực nghiệm (Romania, Ấn Độ, Vermont, tín dụng thuế, TRI, hai căn nhà)
  được mở bằng *"Tất cả đều ngoài ngành thiết kế; giá trị của chúng là chỉ ra **hình dạng** của lỗi,
  không phải cung cấp số liệu về kỹ thuật."*
- **Ch17** mở rộng câu `"Mental model resistance L2…"` từ ngữ cảnh triển khai TOC sang ngữ cảnh phổ biến
  một phương pháp thiết kế — và **gọi tên phép mở rộng ấy là suy luận ngay tại chỗ**, kèm ba lớp ngữ cảnh
  (*"đây là một dòng bảng, không phải một câu văn"* · *"nó nói về TOC, không nói về Pahl-Beitz"* · chế độ
  hỏng thứ tư nói lại cùng điều bằng ngôn ngữ hành vi). Xử lý đúng cả LUẬT 2 lẫn LUẬT 4.
- **Ch13** chủ động **loại notebook thứ năm (Meadows/Goldratt) khỏi vai bằng chứng** và hạ con số hội tụ
  từ năm xuống bốn, giải thích lý do trong thân bài — N-11 do chính một agent bắt.

**Nhưng có một hệ quả LUẬT 4 chưa đóng, và nó là gốc của lỗi CRITICAL ở mục 4.** Ch13 đã loại tuyến
Meadows khỏi vai bằng chứng, còn **Ch17 và Ch18 vẫn viết "năm khối tài liệu độc lập"**: Ch17 dòng 170 ·
Ch18 dòng 91 · Ch18 dòng 335. Đây là N-11, đã có trong sổ nợ — tôi ghi vị trí chính xác để P6 khỏi quét
lại, **không tính là mục mới**. Điều mới là: cùng ba chỗ ấy còn kéo theo một tập giả định sai (mục 4.1).

### Kết luận chiều thứ chín

**Phần V ĐẠT về khai báo, HỎNG ở hai câu, và có một lỗ hổng lớn không nằm ở khai báo mà nằm ở tính liên
tục của vật liệu giữa các chương.**

1. Chuỗi ba mắt được khai trong thân bài ở cả Ch15, Ch16, Ch17. Ch16 — chương ranh giới căng nhất — khai
   tốt nhất, sớm nhất, và là chương duy nhất vẽ liền cả ba mắt. Không chương nào giấu xuống sổ kiểm.
2. Tỷ lệ 1/13 in đậm trong thân chương Ch16, nhắc ba lần. N-04 đóng.
3. Không có vi phạm LUẬT 4 kiểu dùng Meadows làm bằng chứng kỹ thuật. Ranh giới được canh gác kỹ hơn mức
   hợp đồng đòi — Ch18 còn tự viết phép thử có thể bác bỏ bảng Ch16.
4. **Vi phạm duy nhất của chiều này là hai câu trong Ch16** (dòng 84 và 167) trình bày kết quả phân loại
   của chính sách như phát hiện về corpus, và câu thứ nhất được gắn nhãn *"phát hiện quan trọng nhất của
   chương"*. Sửa hai câu ấy là sửa xong toàn bộ vấn đề của chiều thứ chín.
5. **Rủi ro thật của Phần V không nằm ở lăng kính mượn.** Nó nằm ở chỗ **Ch17 và Ch18 dùng một tập năm
   giả định KHÁC với Ch13** — mục 4.1. Lăng kính được canh gác kỹ; cái đưa vào lăng kính thì không.

---

## 3. Bảng tổng hợp — chương × mức độ

| Chương | CRITICAL | MAJOR | MINOR | Ghi chú một dòng |
|---|---|---|---|---|
| **Ch13** | 0 | 3 | 2 | Chương mạnh nhất trong sáu. Vấn đề duy nhất: ma trận 5×4 không truy được từ thân bài |
| **Ch14** | 0 | 2 | 2 | Tiêu đề hứa "cả bốn thế hệ", bằng chứng phủ 1/4 — và chương tự thừa nhận điều đó |
| **Ch15** | 0 | 0 | 2 | Không lỗi thực chất. Chuẩn mực về cách xử lý con số 99% và cỡ mẫu |
| **Ch16** | 0 | 2 | 2 | Khai báo mẫu mực, rồi tự phá bằng hai câu trình bày phân loại như phát hiện |
| **Ch17** | 1 | 2 | 1 | Dùng sai tập năm giả định của Ch13; vượt trần độ dài mà cổng đếm dòng không thấy |
| **Ch18** | 1 | 3 | 1 | Kế thừa tập giả định sai; ca chạy thử A tự mâu thuẫn trong hai câu liền nhau |
| **Xuyên chương** | — | 2 | 1 | Thang điểm cùng tên hai vạch chia khác nhau; "bảy công cụ ICDM" sống lại sau khi Ch16 khai tử |
| **TỔNG** | **1** | **14** | **11** | CRITICAL của Ch17 và Ch18 là **cùng một lỗi**, đếm một lần ở dòng TỔNG |

---

## 4. CRITICAL — mục duy nhất chặn xuất bản

### 4.1 CRITICAL-01 · Ch17 và Ch18 chấm điểm bằng một tập năm giả định KHÁC với Ch13, và gán nó cho Ch13

Đây là lỗi nghiêm trọng nhất trong phần được giao, và nó chỉ nhìn thấy được khi đọc ba chương cạnh nhau
— đúng loại lỗi mà không agent viết chương nào tự bắt được.

**Ch13 kết luận bằng năm giả định này** (tiêu đề mục, dòng 165 · 253 · 347 · 428 · 494):

| | Ch13 — năm giả định VÀO THÂN CHƯƠNG, cả năm có nguyên văn |
|---|---|
| GĐ1 | Tổ chức là cỗ máy xử lý thông tin, **không có chính trị nội bộ** |
| GĐ2 | Các bước sẽ được làm **đúng như viết** |
| GĐ3 | Có tiền và thời gian cho một pha chưa đẻ ra bản vẽ nào |
| GĐ4 | Có một **ngôn ngữ chung** xuyên cơ, điện và phần mềm |
| GĐ5 | **Cả tổ chức** cùng cam kết một phương pháp |

**Ch17 (dòng 170–180) và Ch18 (dòng 91–95) dùng một tập khác hẳn, và cùng ghi "Giả định (Ch13)":**

| | Ch17 + Ch18 — tập được dùng để chấm điểm |
|---|---|
| G1 | Hợp tác liên ngành thông suốt |
| G2 | **Đồng thuận văn hoá giữa kỹ sư và quản lý** |
| G3 | Kỷ luật quy trình cao |
| G4 | Nguồn lực dồi dào cho pha trừu tượng đầu dự án |
| G5 | Thuật ngữ thống nhất giữa cơ – điện – phần mềm |

**Đây là danh sách hội tụ thô của NLM ở `Phase2-Positioning.md` mục *Chuỗi lập luận*, không phải đầu ra
của Ch13.** Ch13 tồn tại chính là để lọc danh sách ấy qua luật nguyên văn. Hậu quả cụ thể, ba tầng:

**(a) Ô G2 là mệnh đề Ch13 đã CHỦ ĐỘNG LOẠI.** Ch13 mục *Phụ lục — Giả định chưa truy được nguồn nguyên
văn* ghi rõ, dòng 630–637:

> *"**PL-2 — Phải có đồng thuận văn hoá tuyệt đối giữa kỹ sư và cấp quản lý…** *Trạng thái:* đây là bản
> mạnh của Giả định 5, và nó **không** có nguyên văn… Từ hai câu đó suy ra "đồng thuận văn hoá tuyệt đối,
> cả hai phía được đào tạo bài bản" là một bước dài hơn mức bằng chứng cho phép. Bản mạnh ở lại đây."*

Ch17 đưa PL-2 trở lại thân bài, gán cho nó tầng **L2**, rồi dùng nó để rút kết luận trung tâm của chương:
*"ba trong năm giả định vỡ ở tầng L2 hoặc L3 — tầng mà một cuộc phổ biến bình thường không chạm tới.
**Đó là lý do phổ biến trượt.**"* (dòng 184). Một trong ba chân của kết luận ấy là mệnh đề mà chương gánh
luận đề đã tuyên bố là không đủ bằng chứng để đứng.

**(b) Ch18 xây toàn bộ công cụ quyết định trên tập sai.** Bảng chấm Bước 1, luật loại ở Bước 2, sơ đồ
Bước 3, ba ca chạy thử A/B/C, cả năm mục *Áp dụng ở Xưởng*, và mục *Đọc ô bằng 0 trước khi đọc tổng điểm*
— tất cả chạy trên G1…G5 của tập sai. Sách kết bằng câu *"Điều mà thủ tục ba bước ở chương này thêm vào
chỉ là một thứ: **các giả định đó chấm được.**"* Nhưng cái đang được chấm không phải "các giả định đó".

**(c) Hai giả định của Ch13 biến mất khỏi Phần V–VI.** GĐ1 (**chính trị nội bộ** — mà Ch13 gọi là chỗ có
*"câu trích quan trọng nhất của cả chương"*, `"...makes it almost impossible to imagine that the goals of
methods-related activities can be any other than getting the information right."` `[43]`) và GĐ5 (**cam
kết cấp tổ chức**) không có ô nào trong bảng chấm của Ch18. Người đọc dùng công cụ quyết định của cuốn
sách sẽ **không bao giờ được hỏi** về hai điều mà Phần IV dựng công phu nhất.

**Vì sao là CRITICAL, không phải MAJOR.** Luận đề vế một là *canh bạc tổ chức*; Ch13 là chương gánh nó;
Ch18 là chỗ luận đề biến thành hành động. Nếu ba chương ấy không nói về cùng năm thứ, thì cuốn sách kết
bằng một công cụ đo một thứ khác với thứ nó vừa chứng minh — và làm đúng điều nó buộc tội các phương pháp
khác: **giao ra một bảng chấm mà tiêu chí không truy được về căn cứ.**

**Đề xuất cho P6 — ba lựa chọn, xếp theo chi phí tăng dần.**

1. **Rẻ nhất, và tôi khuyến nghị.** Thay tập của Ch17/Ch18 bằng đúng năm tiêu đề của Ch13. Ánh xạ có sẵn
   và gần một-một: G1↔GĐ4 (ngôn ngữ/hợp tác liên ngành, cùng vỡ ở L6) · G3↔GĐ2 (kỷ luật quy trình) ·
   G4↔GĐ3 (nguồn lực pha trừu tượng) · G5↔GĐ4 hoặc GĐ2. Hai ô phải viết mới: **GĐ1 chính trị nội bộ** và
   **GĐ5 cam kết cấp tổ chức**. Ô G2 cũ (đồng thuận văn hoá) **bỏ**, hoặc gộp làm mức 0 của GĐ5.
2. **Trung bình.** Giữ tập của Ch18 nhưng đổi nhãn: bỏ chữ "(Ch13)", viết thẳng rằng đây là **danh sách
   hội tụ thô trước khi lọc**, và giải thích vì sao công cụ chấm dùng bản thô. Cách này trung thực nhưng
   yếu — nó thừa nhận công cụ quyết định của sách đứng trên vật liệu chưa qua cổng của chính sách.
3. **Đắt nhất.** Ch13 nhận thêm GĐ6 nếu tìm được nguyên văn cho "đồng thuận văn hoá". Ch13 đã tìm và
   không thấy; đừng làm lại trừ khi kéo nguồn `[13]`, `[46]` từ NLM như ca `Ch14:102`.

**Kiểm chéo bắt buộc sau khi sửa** — mọi tham chiếu "năm giả định" ở Ch01, Ch14, Ch17, Ch18 phải khớp
(đây chính là N-03 trong sổ nợ, mở rộng: N-03 chỉ lo *số lượng* đổi, thực tế *nội dung* mới là cái đã đổi).

---

## 5. Ch13 — Năm giả định tổ chức, và chỗ chúng vỡ

**Đánh giá chung: chương mạnh nhất trong sáu, và xứng đáng là chương gánh luận đề.** Nó tự áp một luật
kiểm cứng, công bố kết quả của luật ấy kể cả khi kết quả bất lợi, dựng một phép thử bác bỏ chống lại
chính mình, và loại một tuyến bằng chứng có lợi cho nó vì luật của dự án không cho dùng. 800 dòng, đúng
trần trên của `Phase3-Outline.md`.

**(1) Chất lượng mở chương — TỐT.** Ba đoạn đúng hợp đồng. Đoạn 1 định nghĩa *canh bạc tổ chức* và nói
cái hỏng nếu thiếu chương (*"người ta sẽ đi tìm nguyên nhân trong công thức"*). Đoạn 2 nối ngược Ch12
đích danh và phân biệt sắc: *"Mô tả sai thì người ta vẫn dùng được. Giả định sai thì không dùng được —
và người ta thường không biết vì sao."* Đoạn 3 hứa đúng ba kết quả, cả ba đều giao.

**(2) Mạch — TỐT.** Bằng chứng-về-bằng-chứng đặt trước bằng chứng là lựa chọn đúng cho chương này. Năm
mục giả định theo cùng khuôn *Nội dung → Điều kiện hỏng → Bằng chứng trong nguồn*, dễ đối chiếu. Bảng tự
chấm → phụ lục → Áp dụng ở Xưởng khép tự nhiên.

**(3) Chỗ nên CẮT.** Ít. Ba chỗ:
- Đoạn *"Các câu trích kiểm chứng không chỉ lấy từ tệp xuyên suốt…"* (dòng 87–90) lặp ý đã nói ở đoạn
  trên và nói lại ở *Đào sâu* thứ hai. Cắt, giữ ở *Đào sâu*.
- Mục GĐ4 có ghi chú ranh giới với Ch06/Ch07 dài ba câu (dòng 487–491); một câu là đủ.
- Nhận xét *"Cả ba mục trượt đều thuộc loại giả định về năng lực…"* (dòng 670–676) hay nhưng đứng sai chỗ
  — nó là quan sát cấp chương, nên đi lên cuối mục *Bảng tự chấm*, không nằm cuối phụ lục.

**(4) Chỗ THIẾU — đây là chỗ chương yếu, và là toàn bộ ba MAJOR của nó.**

**MAJOR Ch13-A · Ma trận 5×4 không truy được từ thân bài.** Sơ đồ mermaid (dòng 105–139) vẽ **15 cạnh**,
mỗi cạnh là một khẳng định sự kiện — *"một cạnh nghĩa là khối tài liệu đó nêu giả định đó"*. Nhưng chương
**không ở đâu ánh xạ số hiệu `[N]` sang bốn khối**, nên người đọc không kiểm được cạnh nào. Đối chiếu
`_danh_muc_nguon.md` (T1 = `[1]` notebook `systems` · T2 = `[28]`–`[43]` notebook `pahlbeitz` ·
T3 = `[2]`–`[17]` notebook `vdi2221-res` · T4 = `[18]`–`[27]` notebook `vdi2206`):

| Giả định | Ma trận nói | Khối có nguyên văn HIỆN trong thân bài | Cạnh không truy được |
|---|---|---|---|
| GĐ1 | 2/4 — T1, T2 | `[43]`→T2 · `[1]`→T1 | **0** ✅ |
| GĐ2 | 3/4 — T2, T3, T4 | `[43]`→T2 · `[13]`→T3 · `[44]`→**ICDM, không thuộc bốn khối** | T4 |
| GĐ3 | 4/4 — cả bốn | `[1]`→T1 · `[2]`,`[14]`→T3 | T2, T4 |
| GĐ4 | 3/4 — T1, T3, T4 | `[25]`,`[20]`,`[27]`→T4 | T1, T3 |
| GĐ5 | 3/4 — T1, T2, T3 | `[13]`,`[10]`→T3 · `[46]`→**ICDM** | T1, T2 |

**Chỉ 5/15 cạnh truy được.** Ma trận có thể vẫn đúng — nó đến từ năm truy vấn thật trong
`SYNTH_Exploration.md` — nhưng chương trình bày nó như dữ kiện mà không cho đường kiểm. Nghiêm trọng vì
*Đào sâu* thứ hai dùng chính **độ thưa của ma trận** làm bằng chứng chống giả thuyết "hội tụ chỉ là thói
quen diễn đạt". Một phép thử bác bỏ không được đứng trên dữ liệu chưa kiểm được.
*Sửa:* thêm một cột **Khối · nguồn** vào bảng dòng 141–150, mỗi ô ghi số hiệu `[N]` bảo chứng.

**MAJOR Ch13-B · Câu "Bốn khối, bốn tuyến" đứng sau bằng chứng của hai khối.** Dòng 423 kết mục GĐ3 —
giả định được chương gọi là chỗ *"nếu phải chọn một chỗ để chấm một tổ chức… chỗ đó là đây"*. Trước câu
ấy chương trưng `[1]` (khối A) và `[2]`,`[14]` (khối B). Khối `pahlbeitz` và khối `vdi2206` không có câu
nào. *(Đối chiếu độc lập: `SYNTH_Exploration.md` dòng 468–476, mục giả định của notebook `vdi2206`, có
`"Tổ chức sở hữu ngân sách lớn và hạ tầng công nghệ thông tin đủ mạnh"` và gánh nặng SME — đủ để giữ ô
4/4, nhưng nó nghiêng về hạ tầng chứ không về "pha chưa đẻ ra bản vẽ nào". Cạnh này cần một câu biện minh
riêng, không dùng chung được với GĐ3.)*

**MAJOR Ch13-C · Phép thử bác bỏ tự đếm sai chính vật liệu của nó.** *Đào sâu* thứ hai, dòng 668:
*"Các câu nguyên văn **rải trên tám nguồn khác nhau**, thuộc **bốn tuyến**…"* Sổ kiểm cùng chương liệt kê
**13 nguồn** `[1] [2] [10] [13] [14] [19] [20] [25] [26] [27] [43] [44] [46]`; riêng thân bài dùng **11**.
Và chúng thuộc **năm** nhóm của `_danh_muc_nguon.md` (A, B, C, D **và E — ICDM**, qua `[44]` và `[46]`),
không phải bốn. Lệch số nguồn nghiêng về phía **có lợi** cho lập luận nên không nguy hiểm; lệch "bốn
tuyến" thì nguy hiểm, vì nó gộp ICDM vào bốn khối mà chương vừa định nghĩa. *Sửa:* đổi thành *"rải trên
mười một nguồn thuộc năm nhóm tài liệu — trong đó hai câu đến từ tuyến ICDM, tuyến không nằm trong bốn
khối của ma trận"*. Sửa xong lập luận **mạnh lên**.

**(5) Sơ đồ còn thiếu.** Có 2 mermaid, đủ trần hợp đồng. Thiếu một sơ đồ đáng giá: **vòng lặp hai chế độ
hỏng ngược chiều của GĐ2** — hiện chỉ mô tả bằng văn xuôi trong *Đào sâu* thứ nhất, mà nó là một vòng
phản hồi có hình dạng rõ (siết → chế độ 2 → nới → chế độ 1 → siết) và là ý hay nhất của chương. Vẽ được
bằng 6 nút.

**(6) Nhất quán với glossary — ĐẠT.** *Canh bạc tổ chức* và *mặt tiếp giáp* dùng đúng nghĩa và được gọi
là thuật ngữ của sách. *Tailoring* nhắc ở GĐ5 đúng ngữ cảnh Blatt 2 (2019), có ghi năm. Không dùng thang
L1–L12 (đúng — Ch15 mới giới thiệu), chỉ trỏ tới Ch16 ở cuối *Đào sâu* thứ nhất. Không có "sáu mươi năm".

**(7) MINOR.**
- **MINOR Ch13-a ·** Đúng 800 dòng — chạm trần trên của `Phase3-Outline.md`. Ba chỗ cắt ở (3) đưa về
  ~780, giữ biên an toàn cho P6 khi thêm cột nguồn ở Ch13-A.
- **MINOR Ch13-b ·** N-12 nói *"mỗi ô trống có lý do nội dung viết kèm"*. Thực tế **3/5 ô trống có lý do**
  (GĐ1 thiếu T3+T4 — một lý do chung; GĐ4 thiếu T2 — có lý do). **Hai ô trống không có lý do: GĐ2 thiếu
  T1 và GĐ5 thiếu T4.** Ô GĐ2×Pahl-Beitz đặc biệt phản trực giác — Pahl-Beitz là nguyên mẫu của "làm đúng
  như viết" mà lại không được ghi là nêu giả định ấy. Cần một câu.

### Bảy câu cần viết lại — Ch13

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 423 | *"Bốn khối, bốn tuyến, cùng một kết luận: pha trừu tượng là thứ phải mua…"* | *"Hai khối trưng được nguyên văn ở trên — nền móng `[1]` và phả hệ tiêu chuẩn `[2]`,`[14]`; hai khối còn lại nêu giả định này trong truy vấn xuyên suốt nhưng không cho câu trích rời nào, và ma trận ghi 4/4 theo nghĩa 'nêu', không theo nghĩa 'bảo chứng'."* | Câu hiện tại khẳng định bốn tuyến sau khi trưng hai. Đây là ô mà chương dặn chấm trước tiên |
| 2 | 668 | *"Các câu nguyên văn rải trên tám nguồn khác nhau, thuộc bốn tuyến"* | *"…rải trên mười một nguồn thuộc năm nhóm tài liệu — trong đó hai câu đến từ tuyến ICDM, tuyến không nằm trong bốn khối của ma trận"* | Số thật lớn hơn số đã viết; và "bốn tuyến" gộp nhầm ICDM vào bốn khối |
| 3 | 128–129 | *"Đọc sơ đồ này theo đúng nghĩa đen của nó: một cạnh nghĩa là khối tài liệu đó nêu giả định đó"* | Thêm ngay sau: *"Cạnh nào có câu nguyên văn hiện trong chương này thì cột 'Khối · nguồn' của bảng dưới ghi số hiệu; cạnh không có số hiệu nghĩa là nó đến từ câu tổng hợp của truy vấn, chưa có câu trích rời."* | Cho người đọc đường kiểm 15 cạnh; đồng thời khai đúng chỗ 10 cạnh chỉ có căn cứ tổng hợp |
| 4 | 133–135 | *"Giả định 1 chỉ nổi lên ở hai khối… tài liệu của hai tuyến kia **không bàn tới nó**."* | Nối thêm hai câu cùng khuôn cho hai ô trống còn lại: GĐ2 vắng ở khối nền móng, GĐ5 vắng ở khối VDI 2206 | N-12 chỉ đứng nếu **mọi** ô trống có lý do; hiện 2/5 ô không có |
| 5 | 84–86 | *"năm giả định, **cả năm truy được nguyên văn**"* | *"…cả năm truy được ít nhất một câu nguyên văn. Cần nói rõ phạm vi của phép kiểm: nó chứng minh **giả định có mặt trong tài liệu**, không chứng minh **bốn khối đều nêu nó** — cột đếm 2/4, 3/4, 4/4 đến từ truy vấn xuyên suốt, không từ các câu trích."* | Hiện hai mệnh đề khác nhau bị người đọc gộp thành một; đây là gốc của Ch13-A |
| 6 | 87–90 | *"Các câu trích kiểm chứng không chỉ lấy từ tệp xuyên suốt. Chúng được lấy trên cả chín tệp khám phá…"* | Cắt khỏi đây, chuyển nguyên văn vào *Đào sâu* thứ hai làm dấu hiệu thứ tư của phép thử bác bỏ | Ý mạnh nhưng đang nằm ở chỗ nó chỉ là lời trấn an; ở *Đào sâu* nó thành bằng chứng có cấu trúc |
| 7 | 670–676 | *"Một nhận xét chung. Cả ba mục trượt đều thuộc loại **giả định về năng lực**…"* | Chuyển lên cuối mục *Bảng tự chấm*, đổi mở đầu thành *"Có một mẫu hình trong chính chỗ phép kiểm này trượt, và nó đáng để người chấm biết trước:"* | Đây là quan sát cấp chương, hiện bị chôn ở cuối phụ lục nơi độc giả A sẽ lướt qua |

---

## 6. Ch14 — Những chỗ cả bốn thế hệ đều không nhìn tới

**Đánh giá chung: chương gọn, sắc, và trung thực bất thường về độ mỏng của bằng chứng.** 422 dòng, trong
ngưỡng 400–550. Mục *Đào sâu* phân biệt **"phát biểu sai" (Ch13) với "biến không tồn tại" (Ch14)** là
đoạn hay nhất của cả hai chương Phần IV.

**(1) Mở chương — TỐT.** *"Một sai lầm có thể sửa được, vì ai đó đã viết nó ra. Một vùng mù thì không"*
mở đúng cơ chế. Đoạn 2 nối Ch13 đích danh và phân biệt chất. Đoạn 3 hứa ba thứ, kể cả lời hứa bất thường
*"kèm câu bên cạnh làm nhỏ lời thừa nhận ấy lại"* — và giữ lời.

**(2) Mạch — TỐT.** Ba vùng mù xếp theo ba thuộc tính của tổ chức (trải trên không gian · có mép · có
ngân sách) chứ không xếp rời rạc; mục *Cách soi vùng mù của bất kỳ phương pháp nào* biến chương từ danh
mục thành thao tác chuyển giao được; mục *Chỗ cuốn sách rẽ hướng* bắc cầu sang Phần V và khai lăng kính
mượn trước một chương. Ba hộp *"nếu tổ chức anh có đặc điểm này thì phải tự bù"* đúng chỉ thị rủi ro của
outline.

**(3) Chỗ nên CẮT.** Rất ít — chương đã gọn. Một chỗ: đoạn phân biệt `"distributed"` của tuyến VDI 2206
(dòng 118–123) dài bốn câu cho một ý phòng thủ; hai câu đủ.

**(4) Chỗ THIẾU — hai MAJOR.**

**MAJOR Ch14-A · Tiêu đề hứa "cả bốn thế hệ", bằng chứng phủ một thế hệ.** Vùng mù thứ nhất — vùng mù
duy nhất được trưng bằng một câu nguyên văn trực tiếp — nêu tên **BS 7000, Total Design (Pugh), và
Pahl-Beitz** `[33]`. Trong đó **chỉ Pahl-Beitz** là một trong bốn thế hệ của cuốn sách; BS 7000 và Pugh
không phải. Chương tự thừa nhận điều đó rất đàng hoàng ở dòng 121–123:

> *"Với VDI 2206 và với ICDM, corpus **không có câu tương đương** nào về đội phân tán địa lý; tôi không
> suy ra rằng chúng cũng bỏ qua, tôi ghi rằng ở đây không có bằng chứng."*

Câu ấy đúng luật và đáng khen — nhưng nó **mâu thuẫn trực diện với tiêu đề chương**. Người đọc lướt mục
lục nhận một khẳng định mạnh hơn hẳn cái chương giao được. Vùng mù 2 và 3 khá hơn (`[10]`, `[12]`, `[2]`,
`[14]`, `[43]` trải rộng hơn) nhưng cũng không phủ đủ bốn thế hệ.
*Sửa — hai đường:* đổi tiêu đề thành **"Những chỗ không phương pháp nào có biến để ghi"** (đúng luận
điểm của *Đào sâu*, không hứa phép đếm), **hoặc** giữ tiêu đề và thêm một đoạn ngay sau mục *Ba vùng mù
không nằm rải rác* nói rõ phạm vi bằng chứng của từng vùng mù trên bốn thế hệ.

**MAJOR Ch14-B · Vùng mù thứ ba không có bằng chứng riêng — nó mượn của Ch13.** Ba câu trích chính của
vùng mù 3 là `[2]`, `[14]`, `[43]`. **Cả ba đã được dùng ở Ch13**, hai câu `[2]` và `[14]` dùng nguyên
văn y hệt ở GĐ3, câu `[43]` dùng y hệt ở GĐ2. Với một chương có nhiệm vụ chứng minh cái *khác* Ch13 —
"biến không tồn tại" chứ không phải "phát biểu sai" — việc dùng lại đúng bộ câu trích làm nhòe chính sự
phân biệt mà *Đào sâu* dựng lên. Chương có nêu một suy luận riêng và tự gắn nhãn (*"quyền linh hoạt được
trao cho người dày dạn, mà xưởng nhỏ lại là nơi người dày dạn khan hiếm nhất"*) — đó là đóng góp thật,
nhưng nó là suy luận, không phải bằng chứng mới.
*Sửa:* mở đầu vùng mù 3 bằng một câu nói thẳng: *"Vùng mù này không có câu trích riêng — nó dùng lại
đúng vật liệu của Chương 13, và đó là một dữ kiện: các nguồn nêu điều kiện hỏng của xưởng nhỏ, không
nguồn nào ghi rằng phương pháp thiếu biến cho nó."* Vừa trung thực vừa mạnh hơn.

**(5) Sơ đồ.** Có 2, đủ. Sơ đồ *bộ lọc ở ranh giới tổ chức* là sơ đồ tốt nhất trong sáu chương — nó vẽ
được một **cơ chế**, không chỉ một phân loại. Thiếu một sơ đồ cho mục *Cách soi vùng mù* (ba câu hỏi soi
hiện chỉ là bảng), nhưng không bắt buộc.

**(6) Nhất quán glossary — ĐẠT.** *Tailoring* dùng đúng, ghi năm 2019. *Mặt tiếp giáp* dùng đúng nghĩa
sách. Ghi rõ "không có trong nguồn" cho năm nhóm nhân tố ngữ cảnh còn lại thay vì đoán — đúng N-06.

**(7) MINOR.**
- **MINOR Ch14-a ·** Sơ đồ vòng đời: nút `B1` ghi *"phủ toàn bộ vòng đời, không nằm ở một pha"* nhưng chỉ
  vẽ ba cạnh đứt tới `P1`, `P3`, `P5`. Hoặc vẽ đủ năm cạnh, hoặc bỏ ba cạnh và để `B1` đứng ngoài khung.
- **MINOR Ch14-b ·** *Áp dụng ở Xưởng* dùng biến thể đánh số `**1.` thay vì `### 1.` — biết rồi (N-13 ca
  2), ghi lại để P6 chuẩn hoá một lượt cho cả sách, không phải để báo lỗi.

### Sáu câu cần viết lại — Ch14

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 1 | *"# Chương 14 — Những chỗ cả bốn thế hệ đều không nhìn tới"* | *"# Chương 14 — Ba chỗ không phương pháp nào có biến để ghi"* | Tiêu đề hiện tại hứa một phép đếm trên bốn thế hệ mà chương tự khai là không có |
| 2 | 302 | *"Ba vùng mù trên là ba vùng mù của bốn thế hệ đã bàn trong sách."* | *"Ba vùng mù trên được nêu tên trong corpus ở mức rất khác nhau: vùng thứ nhất chỉ có một câu, nêu ba phương pháp trong đó một thuộc bốn thế hệ; vùng thứ hai có cả cơ chế lẫn nguyên văn; vùng thứ ba dùng lại vật liệu của Chương 13."* | Câu hiện tại khẳng định điều mà thân bài vừa bác ở dòng 121–123 |
| 3 | 223–225 | *"Vùng mù này khác: phương pháp **có nhìn**, nhưng nhìn thấy một loại tổ chức duy nhất"* | Thêm ngay sau: *"Và khác hai vùng trên ở một điểm nữa: nó không có câu trích riêng. Ba câu dưới đây đã xuất hiện ở Chương 13 — điều mới không nằm ở vật liệu mà ở chỗ đọc chúng như một biến bị thiếu chứ như một giả định bị sai."* | Ch14-B; biến một điểm yếu thành một phân biệt sắc |
| 4 | 105–108 | *"Sự mỏng của bằng chứng chính là bằng chứng: nếu đây là một vấn đề mà ngành đã tiêu hoá xong, nó đã không nằm ở dòng cuối cùng của một đoạn tổng kết."* | Giữ, nhưng thêm: *"Đây là suy luận từ **vị trí** của câu văn trong nguồn, không phải từ nội dung của nó — loại lập luận yếu nhất trong chương này, và tôi để nó ở đây vì không có loại mạnh hơn."* | Sổ kiểm đã gắn nhãn suy luận; thân bài thì chưa, và đây là câu chống đỡ chính của vùng mù 1 |
| 5 | 118–123 | Bốn câu về `"integrating distributed components"` | Gộp còn hai: *"Chữ `distributed` có ở tuyến VDI 2206, nhưng trong cụm `integrating distributed components` — linh kiện phân tán qua các nhánh của chữ V, không phải người phân tán qua không gian. Với VDI 2206 và ICDM, corpus không có câu tương đương; tôi ghi là không có bằng chứng, không suy ra rằng chúng cũng bỏ qua."* | Ý phòng thủ đang chiếm bốn câu ở chỗ chương cần đà |
| 6 | 34–52 (mermaid) | Nút `B1` … *"phủ toàn bộ vòng đời, không nằm ở một pha"* + ba cạnh `P1`,`P3`,`P5` | Bỏ ba cạnh, đặt `B1` thành một nút bao ngoài `LIFE`; hoặc vẽ đủ năm cạnh | Nhãn và hình đang nói hai điều khác nhau |

---

## 7. Ch15 — Mười hai tầng đòn bẩy, và 99% sự chú ý đổ vào đâu

**Đánh giá chung: không có lỗi thực chất. Đây là chương chuẩn mực của cả sáu về xử lý con số và cỡ mẫu.**
562 dòng, trong ngưỡng 450–600. **0 MAJOR.**

Ba chỗ đáng ghi làm mẫu cho P6 và P7:

- **Cách đọc con số 99%.** Chương dành hẳn ba đoạn (dòng 156–175) để nói câu ấy là *"một ước lượng nói
  miệng, tự sửa hai lần ngay giữa câu"*, chỉ ra dấu gạch ngang và chữ `no` lặp lại **chính là bằng chứng
  của vết leo thang tu từ**, rồi tách ra phần còn dùng được: *"phần áp đảo của sự chú ý đổ vào tầng yếu
  nhất"* — mệnh đề không phụ thuộc con số là 90 hay 99. Đây là LUẬT 2 áp ở mức cao nhất trong cả sách.
- **Chủ động bỏ phần bù "1%".** *"Con số 1% đó là phép trừ của người phân tích, không phải chữ trong câu
  gốc. Tôi bỏ nó đi."* Đúng N-06, cần ghi vào sổ để P7 không đi bổ sung lại.
- **Cỡ mẫu viết ngay cạnh mọi ca.** *"**Cỡ mẫu là hai căn nhà.** Phải viết ra con số đó mỗi lần dẫn ca
  này, nếu không thì đang dùng một giai thoại như một nghiên cứu."* Và với ca TRI 40%: *"là mức giảm
  doanh nghiệp tự khai theo cơ chế tự nguyện… nguồn không nói gì về việc kiểm chứng độc lập."*
- **Bắt phép đếm của chính mình.** Mục *D-M-I-R: bốn bước, và một chỗ nguồn không tự đếm* — nguồn có
  nguyên văn cho bốn **tên giai đoạn** nhưng không ở đâu đếm chúng thành "bốn bước"; câu gần nhất
  `"...applying four integrated skills..."` đếm **bốn kỹ năng có tên khác hẳn**. Đây là ca N-08 thứ sáu,
  do agent Ch15 tự bắt, và nó **chưa có trong bảng năm ca của sổ nợ**. Đề nghị bổ sung vào N-08.

**(1) Mở chương — TỐT.** Đặt câu hỏi mà bốn phần trước không trả lời được (*"biết rồi thì vì sao vẫn không
sửa được?"*), nối Ch14 đích danh kể cả lời hứa Ch14 để lại, hứa ba thứ và giao đủ ba.

**(2) Mạch — TỐT.** Khai báo → thang → câu 99% → TOC → D-M-I-R → ca thực nghiệm → giới hạn → áp dụng.
Mục cuối *Cái thang này dùng để làm gì, và không dùng để làm gì* đặt sẵn ba lời phản đối để Ch16 không
phải bào chữa — bố cục xuyên chương tốt.

**(3) Chỗ nên CẮT.** Bảng mười hai tầng in **hai lần** nguyên văn: bảng đầy đủ (dòng 78–92) rồi bản rút
gọn `"L12: Numbers—Constants and Parameters"`… liệt kê liền một mạch (dòng 94–100). Bản rút gọn chiếm bảy
dòng đặc và không thêm thông tin — nó chỉ là tên ngắn của cùng mười hai tầng. Cắt, giữ lại hai hoặc ba
mã mà Ch16 và Ch17 sẽ trích lại (L10, L6, L5), viết chúng vào chính bảng đầy đủ làm cột phụ.

**(4) Chỗ THIẾU.** Không có chỗ thiếu ở mức MAJOR. Một chỗ đáng thêm: chương nói TOC *"là một can thiệp
L10 mang theo một can thiệp L5 giấu trong người"* — ý rất hay, nhưng nó là **suy luận của sách** và
không được gắn nhãn tại chỗ (sổ kiểm cũng không nêu riêng). Thêm sáu chữ.

**(5) Sơ đồ.** Có 3 — nhiều nhất trong sáu chương, đúng trần hợp đồng.

**(6) Nhất quán glossary — ĐẠT, và là chương thiết lập chuẩn.** Quy ước **số nhỏ = đòn bẩy lớn** được đặt
trong hộp trích dẫn riêng trước bảng, kèm cảnh báo vì sao nó phản trực giác. Ch16 và Ch17 đều nhắc lại
đúng chiều. **N-05 mục thứ nhất: ĐẠT cho toàn Phần V.** Glossary ghi TOC *"5 bước tập trung"* — Ch15
trưng đủ năm bước có nguyên văn từng bước, hợp lệ.

**(7) MINOR.**
- **MINOR Ch15-a ·** Chuỗi ba mắt bị tách: mắt 1 ở dòng 47–56, mắt 2 hoãn tới dòng 415. Thêm một câu ở
  dòng 56 nối chúng lại (xem bảng dưới, mục 1).
- **MINOR Ch15-b ·** Bảng mười hai tầng in hai lần — xem (3).

### Năm câu cần viết lại — Ch15

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 56 (cuối đoạn khai lớp thứ cấp) | *"Chương 16 sẽ căng ranh giới này thêm một nấc, và ở đó nó dễ vỡ hơn nhiều."* | Thêm trước câu này: *"Cộng với việc ánh xạ công cụ vào tầng — việc mà Chương 16 sẽ làm — chuỗi suy diễn của cả Phần V có ba mắt: **thang đo là tài liệu thứ cấp → ánh xạ vào công cụ là suy luận của sách → kết luận về công cụ thiết kế là tài liệu sơ cấp.** Hai lớp suy diễn chồng nhau, và người đọc nên thấy cả ba trước khi đọc bất kỳ bảng nào của Phần V."* | Ch15 là chương mở Phần V; chuỗi ba mắt hiện chỉ được vẽ liền ở Ch16, nghĩa là người đọc gặp mắt 1 rồi đi 370 dòng mới gặp mắt 2 |
| 2 | 94–100 | Bản rút gọn mười hai tầng liệt kê liền một mạch | Cắt; đưa `"L10: Stock-and-Flow Structures—Physical Architecture"`, `"L6: Information Flows—Who Knows What When"`, `"L5: Rules—Incentives, Constraints, Decision Criteria"` vào bảng đầy đủ làm cột *Tên rút gọn* | Bảy dòng đặc không thêm thông tin; ba mã này là ba mã Ch16/Ch17 dùng lại |
| 3 | 316–318 | *"Nó là một can thiệp L10 mang theo một can thiệp L5 giấu trong người."* | *"Theo cách phân tầng này — và đây là suy luận của tôi, nguồn chỉ xếp TOC ở L10 — nó là một can thiệp L10 mang theo một can thiệp L5 giấu trong người."* | Nguồn tự xếp L10; chuyện "kèm L5" là đọc của sách. Chỗ này đang đứng lẫn với câu có nguyên văn |
| 4 | 331–333 | *"Khung chạy chẩn đoán trong vật liệu này gọi là D-M-I-R. Bốn giai đoạn, mỗi tên có nguyên văn riêng"* | *"Khung chạy chẩn đoán trong vật liệu này gọi là D-M-I-R. Mỗi tên giai đoạn có nguyên văn riêng — và như mục dưới đây cho thấy, con số đếm chúng thì không."* | Câu hiện tại nói "Bốn giai đoạn" ngay trước đoạn chứng minh nguồn không đếm bốn; tự mâu thuẫn trong hai câu liền nhau |
| 5 | 25 (tiêu đề mục) | *"## Cái lăng kính này mượn từ đâu, và ai trong đó không nói một chữ nào về thiết kế"* | *"## Lăng kính này mượn từ đâu, mượn qua mấy lớp, và ai trong đó không nói một chữ nào về thiết kế"* | Mục này thực ra khai **hai** điều — mượn từ ngoài ngành, và đọc qua lớp thứ cấp. Tiêu đề chỉ hứa một |

---

## 8. Ch16 — Xếp lại toàn bộ công cụ theo tầng đòn bẩy

**Đánh giá chung: chương có kỷ luật khai báo tốt nhất trong sáu, và tự phá kỷ luật ấy đúng hai câu.**
608 dòng, trong ngưỡng 550–700. Mọi yêu cầu của N-04 và N-10 đều đóng được (xem mục 2.1 và 2.3).

**(1) Mở chương — TỐT.** *"Chưa ai đặt đống công cụ lên cái thang"* dựng đúng khoảng trống. Cái hỏng nếu
thiếu chương được viết cụ thể đến mức đo được: *"một xưởng có ngân sách cho đúng một cuộc cải tiến quy
trình mỗi năm sẽ tiêu nó vào thứ trông giống cải tiến nhất… và sẽ mất mười hai tháng để biết mình chọn
sai."* Đoạn 2 nối Ch15 đích danh. Đoạn 3 hứa ba thứ, kể cả lời hứa tự bất lợi: *"bạn sẽ thấy phần lớn
căn cứ ấy là suy luận của tôi."*

**(2) Mạch — TỐT, và bố cục là điểm mạnh riêng.** Chương **mở bằng lời khai chứ không bằng bảng** — hai
lời khai, bốn phép thử, một mục *Cái tôi cố ý không làm* — rồi mới cho xem ô đầu tiên. Đó là thứ tự đúng
cho chương R1-dễ-vỡ-nhất. Hai hướng lệch (tự nhận cao hơn / thấp hơn) chia mục *Chênh lệch* làm hai nửa
có bài học khác nhau; *Đào sâu* về ranh giới L5/L10 chỉ là một câu văn cấm — đoạn hay nhất của Phần V.

**(3) Chỗ nên CẮT.** Chương dài nhưng đặc. Hai chỗ:
- Trường hợp thứ năm (EQFD, dòng 246–256) lặp đúng mẫu hình đã rút ở trường hợp ma trận hình thái
  (*"L12 vá cho L10"*). Rút còn ba câu, giữ câu chốt về hai trường phái cách nhau ba thập kỷ.
- Mục *Ba cảnh báo* (dòng 424–443) trích lại nguyên văn ba câu `[62]` đã trích ở Ch15. Giữ một, hai câu
  còn lại trỏ về Ch15.

**(4) Chỗ THIẾU — hai MAJOR, cả hai thuộc chiều thứ chín.**

**MAJOR Ch16-A · Kết quả phân loại được trình bày như phát hiện về corpus.** Dòng 84 —
*"Không công cụ nào trong corpus vượt qua được L3. Không cái nào chạm L2. **Đó cũng là một phát hiện, và
nó là phát hiện quan trọng nhất của chương.**"* Đây là hệ quả tất định của bốn phép thử do chính tác giả
đặt — không phép thử nào trong bốn bắt được L2, nên không công cụ nào có thể được xếp vào L2. Trình bày
nó như *phát hiện* là đúng thứ mà dòng 54 của chính chương cấm: *"nó là một cách nhìn, không phải một
phép đo."* Lặp lại ở dòng 440–442: *"Không công cụ nào trong sáu mươi sáu nguồn chạm tới L2, và tôi
không định giả vờ rằng có."* Xem đề xuất câu chữ ở bảng dưới.

**MAJOR Ch16-B · Phép đếm 6/14 chạy trên bảng của chính tác giả nhưng trình bày như quan sát.** Dòng 167:
*"Nhìn hình này thì thấy ngay hình dạng của vấn đề. Sáu trong mười bốn công cụ nằm ở hai tầng đáy."* Sổ
kiểm cuối chương ghi đúng (*"phép đếm trên chính bảng của tôi"*) — nhưng N-04 nói rõ **không được để lời
đính chính ở sổ kiểm**. Cùng đoạn còn một câu lệch nhẹ: *"Ba công cụ duy nhất được thiết kế như luật đều
đến từ ICDM và Pugh, chứ không đến từ tiêu chuẩn"* — trong khi ô **cao nhất toàn bảng, L4, là tailoring
của VDI 2221 Blatt 2, tức là một tiêu chuẩn**. Câu đúng về L5 nhưng để lại ấn tượng sai về cả bảng.

**(5) Sơ đồ.** Có 2, đúng outline. Cả hai làm việc thật. Thiếu một sơ đồ mà chương gần như đã viết ra
bằng lời: **cây quyết định của bốn phép thử** (đầu ra là gì → có cấm gì không → ai biết thêm gì → có đụng
định nghĩa thắng không). Vì chương tuyên bố *"cái tôi bán ở đây là phép thử, không phải là bảng"*, phép
thử xứng đáng có hình.

**(6) Nhất quán glossary — ĐẠT.** Thang L1–L12 đúng chiều. VDI 2221 luôn kèm năm (`:1993`, `Blatt 2
(2019)`). VDI 2206 kèm năm (`2004 hai nhánh; 2021 ba luồng`). ICDM đúng Hari & Weiss. Bảy công cụ ICDM
được **liệt kê theo tên riêng thay vì gộp**, kèm hộp *Đào sâu* giải thích vì sao — xem MAJOR-X-2 ở mục 10.

**(7) MINOR.**
- **MINOR Ch16-a ·** Nhãn nhị phân **1/13** đánh giá thấp chính công trình của chương: tám trong mười ba
  ô "suy luận" có neo vào một câu nguyên văn. Giữ con số, thêm một câu phân biệt.
- **MINOR Ch16-b ·** Hàng 6 tự mô tả là *"ô tôi tự tin nhất trong bảng và cũng là ô gây tranh cãi nhất"*
  — hai vế nghe như nghịch nhau, dễ đọc thành lỗi biên tập dù ý là cố tình. Viết rõ vì sao cả hai cùng
  đúng (tự tin vì đối chiếu định nghĩa khít; tranh cãi vì hệ quả lớn nhất bảng).

### Sáu câu cần viết lại — Ch16

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 84 | *"Không công cụ nào trong corpus vượt qua được L3. Không cái nào chạm `"L2: Paradigms—Mental Models"` [62]. Đó cũng là một phát hiện, và nó là phát hiện quan trọng nhất của chương."* | *"Chạy bốn phép thử này trên cả mười bốn công cụ, không công cụ nào lên quá L3, và không công cụ nào chạm `"L2: Paradigms—Mental Models"` [62]. Cần đọc kết quả ấy cho đúng: bốn phép thử **không có phép thử nào bắt được L2**, nên trần L3 một phần là trần của cái thước, không chỉ của cái được đo. Điều đáng nói không phải 'không công cụ nào chạm L2' mà là **không nguồn nào trong sáu mươi sáu tài liệu đặt câu hỏi công cụ của mình can thiệp ở tầng nào** — đó mới là chỗ trống, và nó kiểm được." * | Vi phạm nặng nhất của chiều thứ chín, ở đúng câu chương gọi là kết luận. Bản sửa giữ nguyên sức nặng nhưng chuyển khẳng định về chỗ kiểm được |
| 2 | 167 | *"Nhìn hình này thì thấy ngay hình dạng của vấn đề. Sáu trong mười bốn công cụ nằm ở hai tầng đáy."* | *"Nhìn hình này thì thấy hình dạng của **bảng** — và xin nhắc rằng mười ba trong mười bốn ô là ánh xạ của tôi, nên phép đếm dưới đây đếm trên phân loại của tôi, không trên một dữ kiện của nguồn. Với cách xếp ấy, sáu trong mười bốn công cụ rơi vào hai tầng đáy."* | N-04 cấm để đính chính ở sổ kiểm; đây là chỗ nó phải nằm |
| 3 | 167–170 | *"Ba công cụ duy nhất được thiết kế như luật đều đến từ ICDM và Pugh, chứ không đến từ tiêu chuẩn."* | *"Ba công cụ chứa một lệnh cấm ở mức L5 đều đến từ ICDM và Pugh. Nhưng ô cao nhất toàn bảng lại là của một tiêu chuẩn — tailoring của Blatt 2 ở L4 — và đó là nghịch lý đáng nhớ nhất của bảng này: họ tiêu chuẩn Đức vừa chiếm gần hết đáy bảng, vừa giữ ô đỉnh."* | Câu hiện tại đúng về L5 nhưng để lại ấn tượng sai về cả bảng, ngay đoạn tổng kết |
| 4 | 165 | *"**Kết quả đếm, không làm tròn cho đẹp: 1 ô có căn cứ nguyên văn từ nguồn, 13 ô là suy luận của tác giả.**"* | Thêm ngay sau: *"Cần một phân biệt nữa bên trong con số mười ba: **tám** ô neo vào một câu nguyên văn của nguồn (một lệnh cấm, một lệnh loại trừ, một câu tự thu hồi, một câu tự thú thuật toán hỏng), **năm** ô chỉ dựa vào phép thử 1 — đầu ra của công cụ. Ô loại sau yếu hơn hẳn, và nếu bạn định bác một ô thì bác nhóm ấy trước."* | Nhãn nhị phân đang tự hạ thấp chương; và người muốn kiểm cần biết bác ở đâu trước |
| 5 | 440–442 | *"Không công cụ nào trong sáu mươi sáu nguồn chạm tới `"L2: Paradigms—Mental Models"` [62], và tôi không định giả vờ rằng có."* | *"Không công cụ nào **trong cách xếp của tôi** lên tới `"L2: Paradigms—Mental Models"` [62], và tôi không định giả vờ rằng có. Ai bác được một ô lên L2 thì bác — bảng này được dựng để bị bác, không để được tin."* | Cùng lỗi với câu 1, ở chỗ chuyển sang Ch17 |
| 6 | 246–256 | Trường hợp thứ năm — EQFD, mười một dòng | Rút còn ba câu, giữ trọn câu chốt *"L12 vá cho L10, lặp lại ở hai trường phái cách nhau ba thập kỷ và không biết nhau"* | Lặp mẫu hình đã rút ở ma trận hình thái; câu chốt mới là phần mang tải |

---

## 9. Ch17 — Vì sao phổ biến quy trình mới thường trượt

**Đánh giá chung: nội dung mạnh, khai báo ánh xạ kỷ luật, nhưng chương mang lỗi CRITICAL của cả phần và
vượt trần độ dài theo cách cổng đếm dòng không nhìn thấy.** Mục *Dấu hiệu sớm* là phần có giá trị hành
động cao nhất trong sáu chương.

**(1) Mở chương — TỐT.** Ba đoạn đúng khuôn. Đoạn 1 dựng chế độ hỏng phổ biến nhất và nói rõ cái mất nếu
thiếu chương. Đoạn 2 nối Ch16 đích danh bằng một hình ảnh sắc — *"Bảng đó có một ô trống mà Chương 16 cố
ý không điền: bản thân hành động phổ biến nằm ở tầng nào?"* — rồi khép vòng hai vế luận đề. Đoạn 3 hứa
ba thứ, giao đủ.

**(2) Mạch — TỐT.** Ranh giới → chân dung một cuộc phổ biến → câu corpus tự viết → **câu hỏi bị bỏ qua:
ràng buộc thật nằm ở đâu** → tầng của cuộc phổ biến → năm giả định đọc lại → bốn nguyên mẫu bẫy → dấu
hiệu sớm → điểm can thiệp thay thế. Mục *ràng buộc thật* đặt trước mục *tầng nào* là thứ tự đúng và
không hiển nhiên — nó chặn người đọc nhảy vào chữa trước khi chẩn.

**(3) Chỗ nên CẮT — và ở đây là bắt buộc.**

**MAJOR Ch17-A · Chương vượt trần độ dài, và cổng đếm dòng báo xanh.** Đo thật:

| Chương | Số dòng | Số từ | Độ dài dòng trung bình | Dòng > 130 ký tự |
|---|---|---|---|---|
| Ch13 | 800 | 10.814 | 83 | 6 |
| Ch14 | 422 | 5.721 | 83 | 2 |
| Ch15 | 562 | 7.586 | 75 | 27 |
| Ch16 | 608 | 8.846 | 85 | 14 |
| **Ch17** | **450** | **9.549** | **189** | **133** |
| Ch18 | 540 | 7.343 | 80 | 11 |

Ch17 **không xuống dòng theo chuẩn ~85 ký tự của năm chương kia**. Nếu ngắt dòng cùng chuẩn, nó ≈ **1.060
dòng** so với trần 450–600 của outline — vượt khoảng 75%. Theo **số từ** nó là chương nhiều chữ nhất
trong sáu, hơn cả Ch13 dài 800 dòng. Cổng `p5_gate.py` kiểm bằng `wc -l` sẽ báo *"450, trong ngưỡng"*.
Đây là cùng lớp lỗi với N-13: **một cổng đo đúng thứ nó đo, và thứ nó đo không phải thứ cần đo.**
*Sửa:* ngắt dòng theo chuẩn sách, **rồi** cắt về ngưỡng. Ứng viên cắt: mục *Bốn nguyên mẫu bẫy* (bốn bẫy
xuống ba — bẫy `"Drift to Low Performance"` và `"Policy Resistance"` chồng ý ở phần triệu chứng), và ba
đoạn bình luận sau bảng bốn ứng viên ràng buộc.

**(4) Chỗ THIẾU — một CRITICAL và một MAJOR.**

**CRITICAL-01 (đã trình bày ở mục 4.1).** Bảng *Năm giả định tổ chức, đọc lại bằng thang đòn bẩy*
(dòng 170–182) ghi *"Giả định (Ch13)"* nhưng liệt kê một tập khác, trong đó dòng 2 là mệnh đề Ch13 đã đẩy
xuống phụ lục vì không có nguyên văn. Kết luận trung tâm của chương — *"ba trong năm giả định vỡ ở tầng
L2 hoặc L3… Đó là lý do phổ biến trượt"* (dòng 184) — có một chân đứng trên mệnh đề ấy.

**MAJOR Ch17-B · Cột "Điều kiện hỏng trong nguồn" gắn tới tám số hiệu cho một ô.** Hai dòng của bảng ghi
`[18,19,20,22,23,25,26,27]` — tám nguồn cho một điều kiện hỏng, và câu được trích lại là **tiếng Việt**
(`"Sự cát cứ thông tin (Domain Silos)"`), tức là câu tổng hợp của tệp khám phá chứ không phải nguyên văn
của tác giả nguồn. Cùng cách trích ấy lặp ở *Áp dụng ở Xưởng* mục 1, nơi nó được đặt trong hộp trích dẫn
như một câu nguồn. Chương ở mọi chỗ khác rất kỷ luật về việc này, nên đây là chỗ lệch chuẩn của chính nó.
*Sửa:* thay bằng câu nguyên văn có thật — `"However, the lack of a common interface language has made the
information exchange in concurrent engineering difficult."` `[25]`, đã dùng ở Ch13 GĐ4 — và bỏ chuỗi tám
số hiệu, giữ một hoặc hai số hiệu thật sự bảo chứng.

**(5) Sơ đồ.** Có 2, đúng outline, cả hai tốt. Sơ đồ *đường đi của một cuộc phổ biến trượt* có vòng lặp
tự khép `N → B` — đúng ngôn ngữ hệ thống mà chương đang mượn.

**(6) Nhất quán glossary — ĐẠT trừ hai chỗ.** Thang L đúng chiều, nhắc lại quy ước ở dòng 17. VDI ghi
năm đầy đủ. Hai chỗ lệch: *"bảy công cụ ICDM"* ở dòng 5 (xem MAJOR-X-2), và *"năm khối tài liệu độc lập"*
ở dòng 170 (N-11, đã có trong sổ nợ).

**(7) MINOR Ch17-a ·** Chuỗi ba mắt khai đủ nhưng không nối liền — xem 2.1.

### Sáu câu cần viết lại — Ch17

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 170 | *"Chương 13 dựng năm giả định mà cả bốn thế hệ phương pháp cùng đặt vào tổ chức áp dụng. Con số năm là **phép gộp của cuốn sách** từ chỗ hội tụ của **năm khối tài liệu độc lập**…"* | *"Chương 13 dựng năm giả định… Con số năm là phép gộp của cuốn sách từ chỗ hội tụ của **bốn khối tài liệu độc lập về thiết kế kỹ thuật** — khối thứ năm là tuyến Meadows/Goldratt, và Chương 13 đã loại nó khỏi vai bằng chứng theo đúng ranh giới của Phần V."* | N-11 tại đúng vị trí; và nó là câu dẫn vào bảng mang lỗi CRITICAL |
| 2 | 172–180 (bảng) | Cột *"Giả định (Ch13)"* với năm mục: hợp tác liên ngành · đồng thuận văn hoá · kỷ luật quy trình · nguồn lực · thuật ngữ thống nhất | Thay bằng đúng năm tiêu đề của Ch13: chính trị nội bộ · bước làm đúng như viết · tiền và thời gian cho pha trừu tượng · ngôn ngữ chung xuyên miền · cam kết cấp tổ chức. Gán tầng lại cho hai ô mới | **CRITICAL-01.** Dòng "đồng thuận văn hoá" là PL-2, mệnh đề Ch13 loại vì không có nguyên văn |
| 3 | 184 | *"**Chiều thứ nhất, hiển nhiên:** ba trong năm giả định vỡ ở tầng L2 hoặc L3 — tầng mà một cuộc phổ biến bình thường không chạm tới. Đó là lý do phổ biến trượt."* | Viết lại sau khi sửa bảng, và thêm: *"Phép đếm 'ba trong năm' đếm trên ánh xạ của tôi ở cột bên phải, không trên một dữ kiện của nguồn."* | Cùng lớp với Ch16-B: phép đếm chạy trên ánh xạ của sách nhưng đọc như quan sát |
| 4 | 5 | *"Chương 16 xếp toàn bộ công cụ — ma trận hình thái, Pugh, VDI 2225, chữ V, bảy bước, **bảy công cụ ICDM** — theo tầng đòn bẩy"* | *"…chữ V, bảy bước, và từng công cụ ICDM theo tên riêng — theo tầng đòn bẩy"* | Ch16 đã dành hẳn một hộp *Đào sâu* chứng minh con số bảy không có trong nguồn; Ch17 làm nó sống lại ở dòng 5 |
| 5 | 174 và 178 (ô bảng) | `"Sự cát cứ thông tin (Domain Silos)"` … `[18,19,20,22,23,25,26,27]` | `"However, the lack of a common interface language has made the information exchange in concurrent engineering difficult."` `[25]` | Câu hiện tại là văn tổng hợp tiếng Việt của tệp khám phá, đặt trong backtick như nguyên văn nguồn; chuỗi tám số hiệu không truy được ô nào |
| 6 | toàn chương | Dòng dài trung bình 189 ký tự, 133 dòng vượt 130 | Ngắt dòng theo chuẩn ~85 ký tự của năm chương kia, rồi cắt về ngưỡng 450–600 dòng | Chương đang vượt trần ~75% mà cổng `wc -l` báo xanh — cùng lớp lỗi N-13 |

---

## 10. Ch18 — Chọn phương pháp cho tổ chức mình đang có

**Ba câu hỏi kiểm bắt buộc cho chương kết, trả lời trước:**

| Yêu cầu | Kết quả |
|---|---|
| Có phải **CÔNG CỤ QUYẾT ĐỊNH dùng được** không? | ✅ **Có.** Thủ tục ba bước, thứ tự bắt buộc có lý do, luật loại tường minh (*"giả định trụ ở mức 0 thì loại ở dạng đầy đủ"*), luật dừng (*"ô bằng 0 là ràng buộc, can thiệp vào nó trước"*), luật một trục, và **đầu ra luôn gồm một danh sách không-làm**. Ba ca chạy thử cho ba đầu ra khác nhau ở hai tầng khác nhau — đúng phép thử tối thiểu của một thủ tục |
| Có **bản kê giới hạn trung thực** không? | ✅ **Có, và vượt mức.** Bốn khoảng trống + bốn câu hỏi còn treo + sáu việc phải làm tiếp, **mỗi việc kèm điều kiện bác bỏ**. Việc số 5 đề nghị chấm mù chính bảng Ch16 và nói rõ kết quả nào sẽ hạ bảng ấy xuống hàng *"một ý kiến"*. Hộp *Đào sâu: thủ tục này chịu được sai đến đâu* thừa nhận thủ tục **cũng đặt một canh bạc tổ chức của riêng nó** và không tự gỡ được vòng lặp ấy từ bên trong |
| Có **trượt thành hô hào hoặc thành bản tóm tắt** không? | ✅ **Không.** Mục *Kết* dài 5 đoạn, không có một câu kêu gọi nào; nó kết bằng một mệnh đề hạn chế: *"Không chính xác, không có thang chuẩn, và chưa qua kiểm chứng thực nghiệm nào… Nhưng chấm được."* Không có mục tóm tắt 17 chương |

**Đây là chương kết tốt.** Vấn đề của nó không nằm ở thiết kế mà nằm ở **đầu vào**: nó thừa kế tập năm
giả định sai của Ch17, và có một ca chạy thử tự mâu thuẫn. 540 dòng, trong ngưỡng 500–650.

**(1) Mở chương — TỐT.** Đề từ Phần VI đặt đúng chỗ. Cái hỏng nếu thiếu chương được viết thành hành vi
cụ thể: *"lấy phương pháp mạnh nhất mình đọc được, ban hành nó thành quy trình bắt buộc, và đo kết quả
bằng số biểu mẫu được điền."* Nối Ch17 đích danh, nêu rõ Ch17 dừng ở đâu.

**(2) Mạch — TỐT.** *Vì sao thứ tự không đảo được* đặt trước ba bước — đúng, vì thứ tự là nội dung. Ba
ca chạy thử đứng sau ba bước và trước bản kê giới hạn. Mục *Kết* không tóm tắt mà rút một phân biệt mới
(*"Cuốn sách nói cái gì đúng. Công cụ nói cái gì đang có."*).

**(3) Chỗ nên CẮT.** Chương gọn. Một chỗ: hai đoạn cuối mục *Bước 3* (*"Đường nét đứt xuống tầng thấp
không phải là cấm"* + *"Luật một trục"*) có thể gộp — luật một trục là luật, nên tách ra thành mục riêng
in đậm thay vì nằm cuối một chuỗi bình luận.

**(4) Chỗ THIẾU — một CRITICAL và ba MAJOR.**

**CRITICAL-01 (mục 4.1).** Toàn bộ Bước 1, Bước 2, Bước 3, ba ca chạy thử và cả năm mục *Áp dụng ở Xưởng*
chạy trên tập G1…G5 **không phải** năm giả định của Ch13. GĐ1 (chính trị nội bộ) và GĐ5 (cam kết cấp tổ
chức) của Ch13 **không có ô nào** trong công cụ quyết định của cuốn sách.

**MAJOR Ch18-A · Ca chạy thử A tự mâu thuẫn trong hai câu liền nhau.** Dòng 258–259:

> *"**Trường hợp A — tổng 3, không ô nào bằng 0.** G1=1 · G2=0 · G3=1 · G4=0 · G5=1. **Hai ô bằng 0**,
> nên thủ tục dừng ở bước 2 và không đi tiếp."*

Tiêu đề ca nói *không ô nào bằng 0*; dữ liệu có hai số 0; câu ngay sau nói *hai ô bằng 0*. Bảng tổng kết
ba ca (dòng 274) ghi đúng `Ô bằng 0: G2, G4`. Vậy chỉ tiêu đề sai — nhưng nó sai ở **đúng biến điều khiển
của thủ tục**: luật dừng treo hoàn toàn trên câu hỏi có ô nào bằng 0 hay không. Người đọc chạy theo sơ đồ
sẽ nhận hai chỉ dẫn ngược nhau ở nhánh quyết định. Trong một chương tự nhận là công cụ quyết định, đây
không phải lỗi chính tả.
*Sửa:* `**Trường hợp A — tổng 3, hai ô bằng 0.**`

**MAJOR Ch18-B · Hai vạch chia khác nhau cho cùng một thang 0–10.** Ch13 (dòng 578–586) chia **0–3 /
4–6 / 7–8 / 9–10**, kèm vạch thứ tư có ý nghĩa riêng (*"9–10 — hoặc đã đầu tư nhiều năm, hoặc vừa chấm
bằng cảm nhận. Chấm lại."*). Ch18 (sơ đồ dòng 52–55, và Bước 3) chia **0–3 / 4–7 / 8–10**. Cùng tên
"tổng điểm năm giả định", cùng thang 0–10, hai cách đọc khác nhau — một tổ chức 7 điểm rơi vào *"gần đủ,
bù bằng cơ chế"* theo Ch13 và vào *"vùng giữa, can thiệp tầng cao"* theo Ch18. Và **vạch cảnh báo tự chấm
quá dễ dãi của Ch13 biến mất ở Ch18**, đúng lúc nó cần nhất — Ch18 là chỗ điểm số biến thành quyết định.
*Sửa:* chọn một vạch chia, dùng chung; giữ vạch 9–10 của Ch13 vì nó bắt đúng chế độ hỏng mà chính Ch18
mô tả ở hộp *Đào sâu* (*"hỏng hoàn toàn nếu người chấm và người hưởng lợi từ điểm số là một người"*).

**MAJOR Ch18-C · Nhãn G4 trôi giữa hai nghĩa trong cùng một đoạn.** Bảng Bước 1 định nghĩa
**G4 = nguồn lực cho pha trừu tượng**. Nhưng ca A lập luận: *"Chọn G2, vì G4 phụ thuộc G2: pha trừu tượng
chỉ có ngân sách riêng khi cả kỹ sư lẫn quản lý cùng coi nó đáng"* — dùng đúng nghĩa nguồn lực ✅ — trong
khi ở Ch13 **GĐ4 là ngôn ngữ chung xuyên miền**. Người đọc cầm cả hai chương sẽ thấy "G4/GĐ4" mang hai
nghĩa. Đây là triệu chứng trực tiếp của CRITICAL-01; sửa CRITICAL-01 là hết.

**(5) Sơ đồ.** Có 2, đúng outline: cây quyết định ba bước, và bảng tự chấm gộp Ch13 → Ch16. Sơ đồ thứ hai
làm đúng việc outline giao (*"bảng tự chấm gộp từ Ch13 và Ch16"*). Không thiếu sơ đồ.

**(6) Nhất quán glossary — ĐẠT trừ hai chỗ.** VDI ghi năm đầy đủ. Thang L đúng chiều. Hai chỗ lệch:
*"ICDM bản đủ bảy công cụ"* (mermaid dòng 59) và *"**ICDM** bảy công cụ"* (bảng dòng 152) — xem
MAJOR-X-2; và *"năm khối tài liệu độc lập"* dòng 91, *"năm nguồn độc lập"* dòng 335 — N-11.

**(7) MINOR Ch18-a ·** Sổ kiểm ghi *"Nguồn đã dùng: [1], [7], [12], [62], [65]"* và nói rõ chương không
mở vật liệu nguồn mới — hợp lệ cho chương kết. Nhưng mục *Những gì cuốn sách này không trả lời được* dẫn
một loạt số liệu kiểm kê corpus (3.685.452 ký tự, trung vị 23.057 so với 32.964, tám nguồn chỉ nổi khi
khoanh hẹp) mà không nguồn nào bảo chứng — chương **có** khai chúng là *"con số của bản kê corpus, không
phải của nguồn"* ở sổ kiểm, nhưng thân bài không nói. Thêm nửa câu ở đầu mục.

### Sáu câu cần viết lại — Ch18

| # | Dòng | Nguyên bản | Đề xuất | Lý do |
|---|---|---|---|---|
| 1 | 258 | *"**Trường hợp A — tổng 3, không ô nào bằng 0.**"* | *"**Trường hợp A — tổng 3, và hai ô bằng 0.**"* | Câu ngay sau nói "Hai ô bằng 0"; luật dừng của cả thủ tục treo trên chính biến này |
| 2 | 91–95 | *"Năm giả định đến từ Chương 13, và Chương 13 dựng chúng từ hội tụ của **năm khối tài liệu độc lập**: hợp tác liên ngành thông suốt, **đồng thuận văn hoá giữa kỹ sư và quản lý**, kỷ luật quy trình cao, nguồn lực dồi dào cho pha trừu tượng đầu dự án, thuật ngữ thống nhất giữa cơ — điện — phần mềm."* | *"Năm giả định đến từ Chương 13, dựng từ hội tụ của **bốn khối tài liệu độc lập về thiết kế kỹ thuật**: tổ chức không có chính trị nội bộ chi phối quyết định kỹ thuật · các bước được làm đúng như viết · có tiền và thời gian cho pha trừu tượng · có ngôn ngữ chung xuyên cơ–điện–phần mềm · cả tổ chức cùng cam kết một phương pháp."* | **CRITICAL-01** + N-11, một câu chứa cả hai. Danh sách hiện tại là bản hội tụ thô trước khi Ch13 lọc, và mục thứ hai là mệnh đề Ch13 đã loại |
| 3 | 97–110 (bảng Bước 1) | Năm hàng G1…G5 theo tập cũ | Dựng lại năm hàng theo năm giả định của Ch13. Hai hàng phải viết mới — mốc quan sát cho **chính trị nội bộ** và cho **cam kết cấp tổ chức**; Ch13 dòng 570–576 đã có sẵn cột *Bằng chứng phải nêu* cho cả hai, dùng lại được gần nguyên | Đây là bảng mà cả chương chạy trên nó; hai giả định công phu nhất của Phần IV hiện không có ô |
| 4 | 52–55 (mermaid) và Bước 3 | Vạch chia `0–3 / 4–7 / 8–10` | Đổi về vạch của Ch13: `0–3 / 4–6 / 7–8 / 9–10`, và **giữ lại nhánh 9–10 = chấm lại có bằng chứng** | Cùng thang, hai cách đọc; và vạch cảnh báo tự chấm dễ dãi biến mất đúng lúc điểm số biến thành quyết định |
| 5 | 152 và 59 | *"**ICDM** bảy công cụ"* · *"ICDM bản đủ bảy công cụ"* | *"**ICDM** bản đầy đủ"* · *"ICDM bản đầy đủ"* | Ch16 đã chứng minh con số bảy không có trong nguồn và chủ động bỏ nó |
| 6 | 314 | *"Bốn khoảng trống, không sắp xếp cho dễ nghe."* | *"Bốn khoảng trống, không sắp xếp cho dễ nghe. Các con số kiểm kê corpus dùng dưới đây — số tài liệu, số ký tự, tỷ lệ — là **phép đo của chính dự án này trên vật liệu của nó**, không phải con số của nguồn nào."* | Thân bài dẫn loạt số liệu kiểm kê; lời khai hiện chỉ có ở sổ kiểm |

---

## 11. Vấn đề xuyên chương — mới, không có trong sổ nợ N-01…N-13

### MAJOR-X-1 · Thang chấm trung tâm của cuốn sách tồn tại ở ba phiên bản không tương thích

| Nơi | Tập giả định | Vạch chia | Mốc chấm |
|---|---|---|---|
| `Phase2-Positioning.md` mục *Chuỗi lập luận* | hội tụ thô (5 mục) | — | — |
| **Ch13** dòng 566–586 | **năm giả định đã lọc qua luật nguyên văn** | 0–3 / 4–6 / 7–8 / 9–10 | bằng chứng **sáu tháng** gần nhất |
| **Ch17** dòng 170–182 | hội tụ thô | — | — |
| **Ch18** dòng 89–135 | hội tụ thô | 0–3 / 4–7 / 8–10 | bằng chứng **ba tháng** gần nhất |

Ba trục lệch cùng lúc: **tập giả định**, **vạch chia**, **cửa sổ bằng chứng** (sáu tháng ở Ch13 so với ba
tháng ở Ch18). Một người đọc chấm ở Ch13 rồi mang điểm sang Ch18 sẽ mang một con số không so được. P6
phải chọn **một** bản chuẩn — đề nghị lấy Ch13 làm gốc vì nó là bản duy nhất đi qua luật nguyên văn — và
để Ch17, Ch18 tham chiếu, không dựng lại.

### MAJOR-X-2 · "Bảy công cụ ICDM" sống lại ở ba chương sau khi Ch16 khai tử nó

Ch16 dành hẳn một hộp *Đào sâu* (dòng 96–105) chứng minh corpus **không có câu nào đếm số công cụ ICDM**
— tám cái tên, con số bảy đến từ bảng thuật ngữ của chính cuốn sách — rồi chủ động liệt kê từng cái theo
tên riêng. Nhưng con số bảy vẫn còn ở:

- **Ch15** dòng 415 — trong câu giới thiệu chính Ch16;
- **Ch17** dòng 5 — trong đoạn mở, mô tả Ch16 đã làm gì;
- **Ch18** dòng 59 (mermaid) và dòng 152 (bảng Bước 2) — nơi nó thành **tiêu chí loại phương pháp**.

Đây đúng lớp lỗi N-08 (*liệt kê đủ mà không đếm*) nhưng ở dạng ngược và nguy hiểm hơn: **một agent đã bắt
được con số, và các chương khác không biết.** Nó cũng nằm trong glossary `Phase2-Positioning.md`
(*"Bảy công cụ ICDM"*), nên P6 phải sửa **glossary trước**, rồi mới quét chương — nếu không nó sẽ mọc lại.
*Quét:* `grep -n "bảy công cụ" Phase4-Chapters/*.md Phase2-Positioning.md Phase3-Outline.md`.

### MINOR-X-1 · Cổng `p5_gate.py` đo độ dài bằng `wc -l`, và Ch17 đi lọt

Đã trình bày ở MAJOR Ch17-A. Ghi lại ở đây vì nó là **việc của cổng, không của chương**: Ch17 có 450 dòng
và 9.549 từ; Ch14 có 422 dòng và 5.721 từ. Cùng "trong ngưỡng" theo cổng, chênh nhau 67% về chữ thật.
*Đề nghị:* cổng đo **số từ**, hoặc đo `wc -l` sau khi chuẩn hoá ngắt dòng. Nếu không, mọi trần dòng trong
`Phase3-Outline.md` — kể cả trần 450 dòng của Ch08 ở N-02 — đều lách được bằng cách không xuống dòng.

---

## 12. Ba vấn đề nghiêm trọng nhất — nếu P6 chỉ làm được ba việc

**1 · CRITICAL-01 — Ch17 và Ch18 chấm điểm bằng một tập năm giả định khác Ch13, và gán nó cho Ch13.**
Công cụ quyết định kết sách đo một thứ khác với thứ chương gánh luận đề vừa chứng minh; một trong năm tiêu
chí là mệnh đề Ch13 đã tuyên bố không đủ bằng chứng để đứng; hai giả định công phu nhất của Phần IV không
có ô nào. Sửa bảng Ch17 dòng 172–180 và bảng Ch18 dòng 97–110 theo đúng năm tiêu đề của Ch13.

**2 · MAJOR Ch16-A/B — Ch16 trình bày kết quả phân loại của chính nó như phát hiện về corpus.**
Hai câu, dòng 84 và 167. Chương tự viết ra luật đúng ở dòng 54 (*"một cách nhìn, không phải một phép đo"*)
rồi vi phạm ở chính câu nó gọi là *"phát hiện quan trọng nhất của chương"*. Đây là chỗ duy nhất trong sáu
chương mà chiều thứ chín thật sự hỏng, và nó sửa được bằng hai câu.

**3 · MAJOR Ch13-A/B/C — Ma trận 5×4 của chương gánh luận đề không truy được từ thân bài.**
15 cạnh là 15 khẳng định sự kiện; chỉ 5 cạnh có nguyên văn hiện trong chương; câu *"Bốn khối, bốn tuyến"*
đứng sau bằng chứng của hai khối; và phép thử bác bỏ tự đếm sai vật liệu của chính nó (*"tám nguồn, bốn
tuyến"* — thật ra mười một nguồn, năm nhóm, gồm cả tuyến ICDM mà chương vừa loại). Thêm một cột
**Khối · nguồn** vào bảng dòng 141–150 là đủ chữa cả ba.

---

## 13. Ghi nhận — đừng "sửa" những chỗ này

- **Ch13** loại notebook thứ năm khỏi vai bằng chứng và hạ hội tụ từ năm xuống bốn (N-11, do agent tự bắt).
- **Ch13** đẩy ba mệnh đề xuống phụ lục vì không có nguyên văn. **Không được kéo chúng lên** — CRITICAL-01
  chính là hậu quả của việc một trong ba đã bị kéo lên ở Ch17/Ch18.
- **Ch14** ghi *"không có trong nguồn"* cho năm nhóm nhân tố ngữ cảnh còn lại và cho mọi con số về SME.
- **Ch15** bỏ phần bù "1%" của câu 99%; ghi cỡ mẫu **hai căn nhà** cạnh ca L6; ghi *voluntarily* cạnh 40%;
  và bắt được ca N-08 **thứ sáu** (D-M-I-R: nguồn không tự đếm "bốn bước") — **cần bổ sung vào bảng N-08**.
- **Ch16** giữ TOC làm hàng đối chứng trong bảng chính; bỏ con số bảy công cụ ICDM; từ chối xếp sáu điểm
  kiểm của chữ V vào L5 vì corpus không cho biết chúng có quyền dừng dự án hay không.
- **Ch18** tự viết phép thử có thể bác bỏ bảng Ch16 (việc số 5) và tự thừa nhận thủ tục của nó cũng đặt
  một canh bạc tổ chức, vào chính ô mà nó không tự kiểm được.
- **Ma trận 5×4 của Ch13 cố ý không đầy** (N-12) — nhưng lưu ý MINOR Ch13-b: chỉ 3/5 ô trống có lý do nội
  dung, không phải 5/5 như sổ nợ ghi.
