---
source_notebook: "7 notebook hợp nhất (xem _nguon_notebook.md)"
notebook_id: multi
source_type: notebooklm-multi
source_count: 66
codebase_path: null
slug: phuong-phap-thiet-ke-he-thong-cong-nghe
pipeline: notebook-to-book v1.0
started: 2026-08-20
updated: 2026-08-20
mode: standard
flags:
  deep: false (CEO chốt 3 truy vấn/cụm)
  audience: both
  lang: vi
  insight_lens: [helix, forge, galaxy, ach, ip]
---

# Pipeline State — phuong-phap-thiet-ke-he-thong-cong-nghe

> **Luật ghi tệp:** ghi ra tệp tạm rồi `os.replace`. Không bao giờ mở thẳng `'w'` lên tệp đang giữ dữ liệu.
> Lý do: sổ của cuốn `icdm-hari-weiss` ghi lại một lần orchestrator làm rỗng 0 byte chính tệp trạng thái
> của nó, thư mục chưa được git theo dõi nên không phục hồi được, phải dựng lại bằng tay.

| Pha | Tên | Trạng thái | Ngày | Đầu ra |
|---|---|---|---|---|
| P0 | Phạm vi + kiểm nguồn | ✅ XONG | 2026-08-20 | `_danh_muc_nguon.md` |
| P1 | NLM Topic Extraction | ✅ XONG | 2026-08-20 | `Phase1-Exploration/` — 11 tệp |
| P2 | Positioning | ✅ XONG — CEO duyệt luận đề | 2026-08-20 | `Phase2-Positioning.md` |
| P3 | Outline | ✅ XONG — CEO duyệt | 2026-08-20 | `Phase3-Outline.md` — 6 phần × 18 chương |
| P3.5 | Giải câu hỏi chặn + cổng an ninh | ✅ XONG | 2026-08-20 | `_cau_hoi_mo_DA_GIAI.md` · `_source_manifest.md` |
| P4 | Write | ✅ XONG — 18/18 chương | 2026-08-20 | `Phase4-Chapters/` · 142.811 từ |
| P4.5 | Cổng kiểm cắt ngang | ✅ XANH | 2026-08-20 | `p5_gate.py` · `_P5_PUNCHLIST.md` |
| P5 | Review | ✅ XONG — 3 báo cáo | 2026-08-20 | `Phase5-Reviews/` · 9 CRITICAL · 56 MAJOR |
| P6 | Revise | ✅ XONG — 9/9 CRITICAL đóng | 2026-08-21 | `Phase6-Revised/` — 18 chương + 8 công cụ |
| P7 | Audit + Compile | ✅ XONG — CEO chưa ký IP | 2026-08-21 | `book.md` 129.962 từ · `Phase7-Audit-Log.md` |
| P8 | Notebook | ✅ XONG — bản ĐẦY ĐỦ, CEO chọn | 2026-08-21 | NLM `44be9c06` · 20 nguồn · 656.336 ký tự |
| P9 | CEO Insight | ⚠ XONG — nhưng KHÔNG có lần đọc độc lập của NLM | 2026-08-21 | `Phase9-CEO-Insights.md` |
| — | EPUB | ✅ XONG | 2026-08-21 | `.epub` 8,5 MB · 42/42 sơ đồ · nghiệm thu ĐẠT |

---

## Block Ledger

### P0 — Phạm vi và kiểm nguồn (2026-08-20)

**CEO chốt:** sách mới độc lập (không mở rộng `icdm-hari-weiss`, không đổ vào
`phuong-phap-thiet-ke-khi-tai-co-ai`); 3 truy vấn/cụm; slug `phuong-phap-thiet-ke-he-thong-cong-nghe`.

**82 nguồn thô → 66 tài liệu duy nhất.** Loại 9 vỏ rỗng, 1 lạc đề, 6 trùng. Chi tiết ở `_danh_muc_nguon.md`.

**Hai kết luận ban đầu của AI đã bị chính phép đo bác bỏ** — ghi lại vì cùng một lớp lỗi:
- Báo hai notebook một-nguồn "bị bao trọn, có thể bỏ". Đo ra: `Thiết kế Kỹ thuật: Tiếp cận Hệ thống` là
  **nguồn lớn nhất toàn corpus** (1.167.487 ký tự — toàn văn Pahl-Beitz bản 3, chiếm 32%); notebook VDI 2221
  tiếng Tây Ban Nha có 52.612 ký tự, 98% thân bài. Bỏ chúng thì mất chính cuốn sách nền.
- Báo 3 nguồn tên `Details` là "rác". Đo ra mỗi cái 25–27 KB. Đọc ra thì đúng là vô giá trị (cookie banner
  vdi.de), nhưng **kết luận đúng đã đến từ suy đoán sai** — nếu chúng có nội dung thật thì đã bỏ nhầm.

> **Luật P0:** không phán nguồn bằng tiêu đề. Đo `nlm source content` từng nguồn, và **luôn chạy một mẫu
> đối chứng đã biết là tốt** — lần đầu cả 8 nguồn nghi vấn trả 0 byte, tưởng là rỗng, hoá ra sai cú pháp lệnh.

**Cổng an ninh:** chưa cần ký. Toàn bộ 66 nguồn là tài liệu học thuật/tiêu chuẩn công khai, không có tài
liệu nội bộ Xưởng nào trong phạm vi. Khi P4 bắt đầu đưa ví dụ Xưởng vào, phải mở bản kê nguồn theo mẫu
`_source_manifest.md` của dự án `phuong-phap-thiet-ke-khi-tai-co-ai`.

### P1 — Khai thác 8 cụm (2026-08-20)

**37 truy vấn NLM**: 28 chính + 1 chạy lại (`DEADLINE_EXCEEDED`) + 3 vét + 5 xuyên suốt.
**466.770 ký tự** vật liệu khai thác. **65/66 nguồn** được ít nhất một cụm chạm tới.

**Key findings — về nội dung:**

1. **Luận đề ứng viên nổi lên từ năm truy vấn độc lập:** mọi phương pháp trong corpus đều giả định một
   tổ chức mà tổ chức thật không phải như vậy — và tầng Meadows/TOC giải thích được vì sao biết rồi vẫn
   không làm được (hệ hình tư duy ở đòn bẩy L2; phổ biến quy trình mới mà hệ hình không đổi là can thiệp
   ở L12). **Đây là tổng hợp CỦA SÁCH, chưa nguồn nào đặt hai tầng cạnh nhau** → bắt buộc khai báo ở P2.
2. **VDI 2221 bản 2019 bỏ sơ đồ bảy bước** làm khung bắt buộc, chuyển sang mô hình cho tailoring.
3. **V-Model của VDI 2206:2021 có 3 luồng song song**, không phải hai nhánh chữ V; và chính tác giả khẳng
   định nó là *logic tác vụ kỹ thuật, không phải lịch trình dự án*, tương thích với Agile.
4. **VDI 2206 và Pahl-Beitz dùng chung một hạt nhân giải quyết vấn đề** — hai tiêu chuẩn cách nhau ba
   mươi năm. ⚠ **Đã hiệu chỉnh 2026-08-20:** bản ghi đầu của mục này viết *"micro-cycle 5 bước"* và
   *"general problem solving 6 bước"*. **Cả hai con số đều không có nguyên văn.** Tệp `c3` ghi thẳng
   *"Số bước cụ thể của chu trình vi mô: không có trong nguồn"*; toàn văn P&B đặt tên các bước trong văn
   xuôi (`confrontation` → `definition` → `creation`) nhưng chuỗi đầy đủ nằm ở **Figure 4.1** và chuỗi
   `six steps`/`six stages` xuất hiện **0 lần**. Con số đến từ vòng truy vấn khám phá của NLM, nơi nó
   khẳng định "5 bước" mà không trích được câu nào — rồi ở vòng sâu chính nó nhận là không có trong nguồn.

**Key findings — về công cụ:**

5. **Khoanh nguồn giết notebook một-nguồn.** `-s` liệt kê đúng toàn bộ nguồn của notebook 1 nguồn →
   `INVALID_ARGUMENT`; thông báo lỗi đổ cho xác thực, sai hướng. Bỏ `-s` là chạy.
6. **Hai lỗi im lặng trong bộ điều phối làm hỏng cả 28 truy vấn mà không báo lỗi** — 28/28 tệp đúng 76 byte.
   (a) Python trên Windows ghi `\r\n` → `case "$k" in 1)` không khớp `1␍` → câu hỏi rỗng.
   (b) Tab là ký tự khoảng trắng nên `read` gộp hai tab liền nhau → lệch mọi trường khi cột nguồn rỗng.
   → **Luật: chạy khô một tác vụ, in ra từng trường, trước khi phóng cả lô.** Bộ kết xuất nay tự đánh dấu
   `**HỎNG**` cho mọi truy vấn dưới 400 ký tự thay vì để nó lẫn vào như một mục trống.
7. **NLM bịa cả hành động, không chỉ bịa số.** Trả lời của notebook D-M-I-R mở đầu bằng *"Tôi đã xây dựng
   và xuất bản … tệp `structural-map-dmir.md` trong bảng Studio của bạn"*; `nlm note list` cho thấy
   **không có ghi chú nào**. → Luật "notebook nguồn chỉ đọc" phải kiểm từ ngoài, không đọc trong câu trả lời.
8. **Retrieval bị chèn ép bởi láng giềng, không phải bởi kích thước.** 8 nguồn chỉ nổi lên khi khoanh riêng,
   trong đó có nguồn lớn thứ hai corpus (118.650 ký tự). → **Muốn phủ đều thì khoanh hẹp, không phải hỏi rộng.**
9. **Metadata xuất xứ bỏ sót 36%** (62/173 lượt) — xác nhận lại 47% đo ở vòng ICDM. Đặc tính, không phải sự cố.

**Decisions for downstream:**
- Thẻ `[n]` do NLM sinh **đã bị gỡ bỏ hẳn** khỏi bản kết xuất, thay bằng dòng khai báo nguồn đầu mỗi mục.
  Không cố ánh xạ: số của NLM không trùng số danh mục, để nguyên thì cổng kiểm trích dẫn trỏ sai nguồn âm thầm.
- Đoạn trích thô đã đổi `[n]` → `(n)` để số thư mục của chính bài báo không bị đọc thành trích dẫn.
- P2 phải khai báo luận đề *ba tầng* là tổng hợp của sách. Đây là rủi ro nghiêm trọng nhất của cuốn này,
  đúng như rủi ro #5 của cuốn ICDM.
- Ranh giới phải giữ ở P4: Meadows và Goldratt **không viết về thiết kế kỹ thuật**. Dùng làm lăng kính thì
  được, dùng làm bằng chứng về thiết kế kỹ thuật thì không.

**Open questions:** xem mục *Câu hỏi mở* trong `Phase1-Exploration/P1_Synthesis.md` — 4 mục, trong đó mục 2
(*P&B pha cụ thể hoá có phải 15 bước?*) đúng lớp bẫy đã suýt làm hỏng cuốn ICDM ba lần: văn bản đánh số đủ
1–15 mà không bao giờ tự viết ra con số, người đọc điền vào giúp.

**CEO checkpoint:** ✅ duyệt 2026-08-20.

### P2 — Positioning (2026-08-20)

**CEO chốt: luận đề A làm trục chính + luận đề C làm lăng kính phần cuối.**

> *Mỗi phương pháp thiết kế có hệ thống là một canh bạc đặt vào một tổ chức không tồn tại. Chúng không
> hỏng vì sai kỹ thuật — chúng hỏng ở mặt tiếp giáp với tổ chức. Và nửa thế kỷ cải tiến phương pháp
> đã cải thiện tài liệu chứ không cải thiện người thiết kế, vì gần như mọi cải tiến đều can thiệp ở
> tầng đòn bẩy thấp trong khi chỗ quyết định nằm ở tầng cao nhất.*

**Ba neo:** Canh bạc · Mặt tiếp giáp · Tầng đòn bẩy.

**Hai luận đề bị loại và lý do** — ghi lại để P3 không vô tình trôi về chúng:
- **B (biên bản nhượng bộ)** có bằng chứng cứng nhất nhưng ít dạy được cách làm. Vật liệu của nó
  (1993 → 2019, chữ V → ba luồng) vẫn dùng, nhưng làm **chứng cứ cho neo "mặt tiếp giáp"**, không làm trục.
- **D (mỗi thước đo đóng băng một giả định)** trùng luận đề cuốn `icdm-hari-weiss` đã xuất bản
  (*"mỗi lời đáp là một món nợ có ngày phải trả"*) → sẽ thành bản mở rộng của cuốn cũ.

**Sáu rủi ro định vị** ghi ở `Phase2-Positioning.md`. Nghiêm trọng nhất là **R1**: khung ba tầng là
tổng hợp CỦA SÁCH, không nguồn nào đặt Meadows cạnh Pahl-Beitz. Không khai báo thì sách tự phá luận
điểm của chính nó — nó buộc tội các phương pháp khác có giả định không khai báo.

**Ranh giới cứng chuyển xuống P4:** Meadows và Goldratt không viết về thiết kế kỹ thuật. Lăng kính thì
được, bằng chứng thì không.

**R5 — quan hệ với cuốn ICDM:** chương ICDM ở đây **chỉ đối chiếu** (giả định tổ chức nào, đòn bẩy tầng
nào) rồi trỏ sang `icdm-hari-weiss`. Không viết lại bảy công cụ.

**R6 — cổng an ninh:** chưa cần ở P1–P3 (66 nguồn đều công khai). **Bắt buộc mở bản kê nguồn trước khi
viết mục *Áp dụng ở Xưởng* ở P4**, theo mẫu `_source_manifest.md` của `phuong-phap-thiet-ke-khi-tai-co-ai`.

**CEO checkpoint:** ✅ duyệt luận đề 2026-08-20. ⏸ chờ duyệt sang P3.

### P3 — Outline (2026-08-20)

**6 phần × 18 chương**, dự phóng 105.000–135.000 từ. CEO duyệt.

**Quyết định cấu trúc:** không xếp theo niên đại. Niên đại chỉ dùng **bên trong Phần II**, bọc giữa một
phần nền và ba phần phân tích — vì xếp theo niên đại chính là luận đề B đã bị loại, và nó khiến người
đọc khép sách biết *chuyện gì đã xảy ra* chứ không biết *mình nên làm gì*.

**Cơ chế nối hai đầu:** sáu chương Phần II cùng đóng bằng mục *"phương pháp này giả định một tổ chức
như thế nào"*. Sự lặp lại sáu lần đó dựng nên Ch13.

**Một vi phạm thứ tự, cố ý không sửa bằng cách đảo chương:** Ch10 neo vào *Tầng đòn bẩy* nhưng thang
đòn bẩy mãi Ch15 mới giới thiệu. Đưa thang lên sớm sẽ làm người đọc nhận lăng kính mượn **trước khi
thấy vấn đề**. Xử lý bằng câu chêm trỏ tới, neo chính tạm ghi *Canh bạc*.

**Bốn cảm biến cài vào outline:** Ch08 trần 450 dòng (cảm biến R5 — vượt là đã viết lại cuốn ICDM) ·
Ch16 bảng bắt buộc có cột *căn cứ ánh xạ* (R1) · Ch13 mỗi giả định phải truy về nguyên văn tài liệu gốc ·
mỗi chương bắt buộc có mục *Áp dụng ở Xưởng* (R4).

### P3.5 — Gỡ hai câu hỏi chặn + mở cổng an ninh (2026-08-20)

**Q1 — "15 bước cụ thể hoá" — giải bằng PDF gốc trong vault, không hỏi lại NLM.** Danh sách đúng 15 mục;
sách **không bao giờ viết ra con số** (`fifteen`: 0 lần trên 1,18 triệu ký tự). Và tầng thứ ba:
**sách phủ nhận đó là quy trình**, ngay câu liền trước danh sách — `"it is not always possible to draw up
a strict plan for the embodiment design phase"`. → **Bằng chứng nội tại mạnh nhất cho luận đề của cả cuốn.**

**Q2 — con số 58–90% — giải sau khi CEO đăng nhập lại.** Phần cứng thật, **n = 1 xe + 4 người dùng**,
điều kiện biên *không có trong nguồn*. Và chính bài báo mô tả tổng thể là **`"slightly outperforms"`**.
→ Trích "58–90%" mà bỏ chữ *slightly* và bỏ câu về chi phí/kích thước/khối lượng là **xuyên tạc nguồn**,
dù từng chữ đều đúng nguyên văn.

**Cổng an ninh R6 — ĐẠT sau ba vòng. Rò rỉ KHÔNG đến từ nguồn.** 66 nguồn sạch. Thứ mang ngữ cảnh lĩnh
vực người dùng vào vật liệu là **văn bản do chính NLM sinh ra**: 49 dòng nói chuyện trực tiếp với người
dùng (KHU-01) + 1 dòng NLM tự dựng ví dụ trong lĩnh vực người dùng (KHU-02, **không chứa chữ "của bạn"
nên lọt vòng lọc đầu**). Đã khử 50 dòng, bản gốc ở `_raw/truoc-khu-ngu-canh/`.

> **Luật: cổng chỉ soi nguồn sẽ báo sạch và bỏ lọt toàn bộ.** Phải soi cả văn bản do mô hình sinh ra.
> KHU-01 tái xuất ngay trong truy vấn Q2 → đây là hành vi hệ thống, không phải sự cố một lần.

**Dương tính giả có thật, ghi lại:** vòng khử đầu dùng chữ *"lĩnh vực của Xưởng"* trong dấu thay chỗ →
cổng bắt 49 lượt `Xưởng` do chính bộ khử vừa tạo ra. Đã đổi từ ngữ. Ghi vì áp lực tiếp theo trong tình
huống đó luôn là nới bộ dò cho hết kêu — đúng cách một cổng thật biến thành cổng hình thức.

### P4 — Viết 18 chương (2026-08-20)

**18 agent song song, mỗi chương một agent.** Ràng buộc qua `Phase4-Chapters/_P4_CONTRACT.md` — 8 luật
dùng chung, thay vì nhồi luật vào từng prompt.

**Sản phẩm:** 10.295 dòng · **142.811 từ** · 40 sơ đồ mermaid · **489 đoạn trích nguyên văn**.

**Cảm biến gắn vào ba chương đã chạy và trả về số thật:**
- **Ch08 = 376/450 dòng** (cảm biến R5 — vượt trần nghĩa là đang viết lại cuốn `icdm-hari-weiss`). Đạt.
- **Ch13 = 5/5 giả định truy được nguyên văn.** Không phải hạ số. Ba mệnh đề không truy được đã xuống
  phụ lục riêng. Ma trận 5×4 cố ý **để trống** (2/4, 3/4, 4/4, 3/4, 3/4), mỗi ô trống có lý do nội dung.
- **Ch16 = 1 ô có căn cứ nguồn / 13 ô suy luận của tác giả**, in đậm **trong thân chương**. Ô duy nhất có
  căn cứ là chỗ TOC tự xếp hạng chính nó.

**Phát hiện lớn nhất của P4 là một LỚP LỖI, không phải một con số.** Bẫy *"liệt kê đủ mà không đếm"*
xuất hiện **năm lần**: 15 bước cụ thể hoá · 8 hoạt động VDI 2221:2019 · 5 bước micro-cycle · 6 bước
chuỗi P&B · 5 hoạt động luồng cam 2021. Hai ca ở giữa là **con số của chính tôi**, đã nằm trong glossary
trước khi P4 chạy — lấy từ vòng truy vấn *khám phá* của NLM, nơi nó khẳng định con số mà không trích được
câu nào; vòng truy vấn *sâu* của chính nó sau đó nhận là không có trong nguồn.

> **Luật: không bao giờ lấy phép đếm từ một truy vấn tổng quan.** Bản tóm tắt cấu trúc tự tin hơn bản
> truy vấn chi tiết, và nó tự tin sai.

**Ba lần agent bắt lỗi trong vật liệu CỦA TÔI, không phải của nguồn:**
1. `"sáu mươi năm"` trong luận đề — không nguyên văn, và 1977 → 2026 là 49 năm. Đổi thành *nửa thế kỷ*.
2. `"micro-cycle 5 bước"` và `"6 bước P&B"` trong glossary — không nguồn nào đếm.
3. `"năm nguồn độc lập hội tụ"` — notebook thứ năm là Meadows/Goldratt, đã bị Luật 4 loại khỏi vai bằng
   chứng. **Con số thật là bốn.** Không thể vừa loại nó ở Phần V vừa đếm nó ở Ch13.

**Giới hạn chứng cứ mới, chưa từng ghi ở đâu (N-10):** corpus **không chứa sách của Meadows lẫn Goldratt**
— chỉ có 8 tệp phân tích *về* hai cuốn đó. Mọi trích dẫn Phần V là nguyên văn của tài liệu thứ cấp.
Chuỗi suy diễn ở Ch16 dài ba mắt: thang thứ cấp → ánh xạ suy luận của sách → kết luận về công cụ sơ cấp.

### P4.5 — Cổng kiểm cắt ngang (2026-08-20)

`Phase4-Chapters/p5_gate.py` — chạy `BOOK_DIR=<đường dẫn> python p5_gate.py`. Mỗi mục trong
`_P5_PUNCHLIST.md` là một phép kiểm chạy được, không phải một dòng nhắc.

**Kết quả cuối: XANH, 0 mục đỏ trên 18 chương.**

**Nhưng cổng đã phải sửa NĂM lần trước khi tin được** — chi tiết ở N-13. Bắt đúng **4 lỗi thật** (chuỗi
`sáu mươi năm` sót ở Ch03, Ch11 và hai chỗ ở Ch16). Kiểm bằng **đột biến: 7/7** — tiêm phép đếm không
nguyên văn, đảo quy ước tầng L, rò mã sản phẩm, lời chào bị cấm, luận đề cũ, Ch08 vượt trần, xoá mục
*Áp dụng ở Xưởng*.

> **Bài học đắt nhất của khối này:** tỷ lệ báo oan quyết định cổng có sống sót hay không. Cổng bản đầu
> kêu oan 90% (59 cảnh báo, gần hết là con số cấu trúc của chính sách). Một cổng như vậy sẽ bị nới cho
> hết kêu — và lúc đó nó **vẫn còn đó, vẫn chạy, vẫn báo xanh, nhưng không còn chặn gì.** Đó là cách một
> cổng thật biến thành cổng hình thức, và nó nguy hiểm hơn không có cổng.

**CEO checkpoint:** ⏸ chờ duyệt sang P5.

### Hiệu chỉnh cấu trúc thư mục — 2026-08-21 (CEO phát hiện)

**Lỗi:** ba agent P6 sửa **thẳng vào `Phase4-Chapters/`** thay vì sinh `Phase6-Revised/` như quy ước
pipeline. Bản nháp P4 bị ghi đè, thư mục dự án mất đối chiếu trước/sau. CEO phát hiện khi thấy thiếu
thư mục — không cổng nào bắt được, vì mọi cổng soi *nội dung chương*, không soi *cấu trúc pipeline*.

**Đã sửa, và có một cái bẫy trong lúc sửa.** Sáu cổng kiểm cộng bộ ghép đều trỏ vào `Phase4-Chapters/`.
Trả bản nháp về đó mà không đổi đường dẫn thì **mọi cổng lặng lẽ chuyển sang kiểm bản nháp** — vẫn chạy,
vẫn báo xanh, nhưng xanh cho tệp sai. Đã đổi đường dẫn trong cả bảy công cụ trước khi phục hồi.

**Trạng thái sau khi sửa:**
- `Phase4-Chapters/` — 18 bản nháp P4 (phục hồi từ bản sao nguội 20/08) + hợp đồng + sổ nợ
- `Phase6-Revised/` — 18 chương bản cuối + 8 công cụ; đây là nguồn của `book.md` và EPUB

**Ba phép kiểm sau khi chuyển:**
1. Dựng lại `book.md` từ `Phase6-Revised` → **khớp từng byte** với bản đã xuất EPUB. Chứng minh sách và
   EPUB dựng từ bản đã sửa, không phải bản nháp.
2. Chạy lại bốn cổng → **xanh cả bốn**.
3. Đo chênh lệch P4 → P6: **1.193 dòng đổi hoặc thêm, 11% bản cuối**. Con số này trước đó không tồn tại
   vì bản nháp đã bị ghi đè; nay đối chiếu được.

> **Bài học:** sáu cổng soi rất kỹ *bên trong* chương và **không cổng nào soi chỗ chương nằm**. Một
> deliverable đúng nội dung vẫn có thể sai chỗ, và cái sai chỗ đó xoá mất khả năng đối chiếu — thứ chỉ
> phát hiện được khi có người nhìn vào cây thư mục.

---

## Bảo vệ dữ liệu

Thư mục `Books/` **chưa có tệp nào được git theo dõi** (vault đang ở nhánh `feature/mentor-aluminum-boat-council`
với 381 mục chưa commit — đổ nội dung sách vào nhánh đó là sai chỗ). Bản sao nguội tạm:

- `<thư mục sao lưu cục bộ>`
- `<thư mục sao lưu cục bộ>`

**Chờ CEO quyết:** tạo nhánh riêng cho `Books/` và commit cả ba thư mục sách.
