# Phản biện biên tập — Chương 01–06

Ngày: 2026-08-21 · Phạm vi: `Phase4-Chapters/Ch01…Ch06` · Người phản biện: biên tập viên phản biện P5
Đã đọc trước: `Phase2-Positioning.md` · `Phase3-Outline.md` · `_P4_CONTRACT.md` · `_P5_PUNCHLIST.md`

> **Quy ước.** Mười ba mục đã ghi trong `_P5_PUNCHLIST.md` (N-01…N-13) **không** được báo lại ở đây.
> Chỗ nào tôi xác nhận thêm dữ liệu cho một mục đã biết, tôi ghi ở phần *Xác nhận cho sổ nợ đã có*
> và **không tính vào bảng đếm**.

---

## 1. Xác minh trích dẫn — chiều thứ tám

### 1.1 Cách làm

Không đọc bằng mắt. Tôi rút bằng công cụ **toàn bộ chuỗi nguyên văn nằm trong backtick kèm dấu nháy kép**
của sáu chương (bỏ mục *Sổ kiểm* để tránh các bản rút gọn `"…"`), nối lại các trích dẫn xuống dòng và
các trích dẫn nằm trong khối `>`, rồi đối chiếu với `Phase1-Exploration/*.md` qua ba lượt chuẩn hoá:

1. chuẩn hoá Unicode (nháy cong → nháy thẳng, en/em dash → gạch nối, NBSP), gộp khoảng trắng, bỏ hoa/thường;
2. khử gạch nối ngắt dòng của PDF (`de- sign` → `design`);
3. lượt lỏng: bỏ mọi ký tự không phải chữ–số ở **cả hai phía** (bắt được `de-sign`, `com-pletely`,
   `v-model`, và các biến thể dấu tiếng Việt `hoá`/`hóa`).

Ba lượt là cần thiết: lượt 1 một mình báo **9 âm tính giả**, toàn bộ do tệp khám phá dính gạch nối
ngắt dòng của PDF gốc. Nếu dừng ở lượt 1, tôi đã kết luận sai rằng Ch03 có sáu câu bịa.

Bộ 12 đoạn dưới đây chọn **ngẫu nhiên có hạt giống** (seed `20260820`), hai đoạn mỗi chương.

### 1.2 Bảng xác minh 12 đoạn ngẫu nhiên

| Chương | Đoạn trích (30 chữ đầu) | Kết quả | Tệp nguồn khớp |
|---|---|---|---|
| Ch01 | `Mental model resistance L2 (Parad…` | **TÌM THẤY** | `SYNTH_Exploration.md` · `c8-lang-kinh-he-thong_Exploration.md` |
| Ch01 | `A period of staff shortages in th…` | **TÌM THẤY** | `SYNTH_Exploration.md` |
| Ch02 | `The process-oriented approach lar…` | **TÌM THẤY** | `c1-nen-mong-pahl-beitz_Exploration.md` |
| Ch02 | `It appears to us that Pahl & Beit…` | **TÌM THẤY** | `c7-doi-chieu-phe-binh_Exploration.md` |
| Ch03 | `Abstracting and creating function…` | **TÌM THẤY** | `c1-nen-mong-pahl-beitz_Exploration.md` |
| Ch03 | `From research in industry and uni…` | **TÌM THẤY** | `c1-nen-mong-pahl-beitz_Exploration.md` |
| Ch04 | `Existing standards describe the c…` | **TÌM THẤY** | `c2-vdi2221-1986-2019_Exploration.md` |
| Ch04 | `Consistency as well as conflictin…` | **TÌM THẤY** | `c2-vdi2221-1986-2019_Exploration.md` |
| Ch05 | `The direction of the guidelines h…` | **TÌM THẤY** | `c2-vdi2221-1986-2019_Exploration.md` |
| Ch05 | `Before joining the Ruhr Universit…` | **TÌM THẤY** | `SYNTH_Exploration.md` · `c2-vdi2221-1986-2019_Exploration.md` |
| Ch06 | `The first release of the VDI Guid…` | **TÌM THẤY** | `SYNTH_Exploration.md` · `c3-vdi2206-vmodel-cps_Exploration.md` |
| Ch06 | `general problem-solving cycle as …` | **TÌM THẤY** | `c3-vdi2206-vmodel-cps_Exploration.md` |

**Kết quả bộ ngẫu nhiên: 12/12 TÌM THẤY. Không đoạn nào bịa.**

### 1.3 Quét toàn bộ, không chỉ 12 đoạn

Vì phép kiểm chạy bằng công cụ nên chi phí quét hết bằng chi phí quét mười hai. Tôi quét **toàn bộ 194
đoạn nguyên văn** của Ch01–Ch06:

| | Số đoạn |
|---|---|
| Tổng đoạn nguyên văn rút được (Ch01–06, ngoài *Sổ kiểm*) | **194** |
| Truy được về `Phase1-Exploration/*.md` | **193** |
| Không truy được về đúng dạng đã in | **1** (Ch06, một câu **tiếng Việt**) |

Đoạn duy nhất không khớp tuyệt đối là câu tiếng Việt ở Ch06 dòng 351 — nó **có** trong
`Phase1-Exploration/SYNTH_Exploration.md` dòng 471, chỉ lệch một chữ (`mô hình hóa` trong tệp,
`mô hình hoá` trong chương). Nghĩa là **không có đoạn nào bị bịa trong sáu chương này.**

**Hiệu chỉnh mức độ.** Kết quả của tôi khớp với phép kiểm độc lập 625/625 do điều phối chạy. Vì vậy
hai phát hiện ở Ch06 mà tôi ban đầu định xếp CRITICAL — câu tiếng Việt nói trên và cụm `verifiable
units` — **đã được hạ xuống MAJOR**. Chúng không phải lỗi bịa trích dẫn. Chúng là lỗi **tầng xuất xứ**:
văn bản đến từ tệp *tổng hợp của chính dự án* (`SYNTH_Exploration.md`) chứ không từ tệp vật liệu nguồn,
nhưng được in trong định dạng nguyên văn và gán số hiệu `[25]` / `[23]` như thể là lời của nguồn. Cách
tôi kết luận: cụm `verifiable units` xuất hiện **1 lần duy nhất trong toàn `Phase1-Exploration/`, và
lần đó nằm trong `SYNTH_Exploration.md`** — không có trong `c3-vdi2206-vmodel-cps_Exploration.md` là
tệp vật liệu được giao cho Ch06.

---

## 2. Bảng tổng hợp số vấn đề

| Chương | CRITICAL | MAJOR | MINOR |
|---|---|---|---|
| Ch01 — Một quy trình không bao giờ chạy | 1\* | 3 | 4 |
| Ch02 — Thiết kế có hệ thống nghĩa là gì | 0 | 3 | 3 |
| Ch03 — Pahl-Beitz: bốn pha | **3** | 4 | 3 |
| Ch04 — VDI 2221:1993 | 0 | 3 | 2 |
| Ch05 — VDI 2221:2019 | 1\* | 3 | 3 |
| Ch06 — VDI 2206 | 1\* | 5 | 3 |
| **Lượt xuất hiện** | **6** | **21** | **18** |
| **Vấn đề riêng biệt** | **4** | 21 | 18 |

\* Hai vấn đề CRITICAL trải trên hai chương nên bị đếm hai lần: **C-02** ở Ch01+Ch03, **C-04** ở Ch05+Ch06.

### Bốn vấn đề CRITICAL, gọi tên

| Mã | Vấn đề | Chương |
|---|---|---|
| **C-01** | `Sáu mươi năm phổ biến phương pháp…` — con số Ch01 đã tuyên bố loại bỏ, sống sót ở Ch03 | Ch03 |
| **C-02** | Số ký tự của nguồn `[1]`: Ch01 ghi **1.167.487**, Ch03 ghi **1.182.358**, sổ kiểm Ch01 ghi **1,18 triệu** | Ch01 · Ch03 |
| **C-03** | `[45]` `[47]` `[50]` được gọi là **"ba tài liệu độc lập"** — cả ba nằm trong **Nhóm E — ICDM — Hari & Weiss** | Ch03 |
| **C-04** | Cùng quãng 1993→2019: Ch05 viết **"ba mươi năm"** (3 lần), Ch06 viết **"hai mươi sáu năm"** | Ch05 · Ch06 |

### Cái KHÔNG hỏng — ghi lại vì nó là kết quả, không phải chỗ trống

- **Ch03 viết đúng "mười lăm bước công tác chính"** kèm nguyên văn câu phủ nhận `"Because of this, it
  is not always possible to draw up a strict plan…"` ngay trước danh sách. Cụm **"quy trình 15 bước"
  xuất hiện 0 lần** trên cả sáu chương.
- **Cả bốn chương của Phần II (Ch03–Ch06) đều có mục đóng `## Phương pháp này giả định một tổ chức như
  thế nào`.** Không chương nào thiếu.
- Không chương nào dính năm cụm bị cấm ở LUẬT 6 (đã quét: `Chào bạn`, `chúng ta sẽ tìm hiểu`,
  `Điều quan trọng cần lưu ý`, `Như chúng ta đã thấy`, `Trước khi đi sâu vào`).
- Không có xung đột số hiệu nguồn: cùng một câu nguyên văn dùng lại ở chương khác đều mang cùng `[N]`.
- Độ dài cả sáu chương đều nằm trong dải mà `Phase3-Outline.md` quy định; số sơ đồ mermaid đúng bằng
  số dàn ý yêu cầu ở cả sáu chương.

---

## 3. Chương 01 — Một quy trình không bao giờ chạy như trên giấy

*488 dòng · 7.217 từ · 2 sơ đồ · 1 Đào sâu · 5 mục Áp dụng ở Xưởng*

### (1) Chất lượng mở chương — **đạt**

Móc bắt được ngay câu đầu và nó là móc thuộc loại tốt nhất: một mẫu hình người đọc đã sống qua, không
phải một định nghĩa. Đoạn ba hứa ba kết quả cụ thể, trong đó thứ ba — *giới hạn chứng cứ của chính cuốn
sách* — là lời hứa mà rất ít sách phương pháp dám đưa, và chương giữ lời.

Chỗ yếu duy nhất là câu **"Đây là chương mở, nên không có chương trước để nối về."** Nó nói với người
đọc về **kết cấu của cuốn sách**, không nói về chủ đề. LUẬT 7 đòi đoạn hai nối ngược đích danh; ở chương
mở, cách thay thế đúng không phải là thông báo rằng không có gì để nối, mà là bỏ hẳn câu ấy và bắt đầu
thẳng bằng mệnh đề nối tới.

### (2) Mạch — **tốt, một chỗ chùng**

Mạch chạy sạch: mẫu hình → bằng chứng hội tụ → bằng chứng nội tại → ba khai báo → ba neo → áp dụng. Chỗ
chùng duy nhất là mục *Ba khai báo* dài 60 dòng và đặt ngay trước mục *Ba neo* cũng dài. Hai mục siêu
hình liền nhau ở giữa chương làm nhịp tụt đúng lúc người đọc vừa được cấp một mẫu hình sắc. Dàn ý đã
lường trước rủi ro này (*"mở bài bằng ba lời tự thú có thể làm người đọc mất tin"*) và xử lý bằng cách
đặt chúng **sau** mẫu hình — xử lý đúng, nhưng chưa đủ, vì vấn đề còn lại là hai khối tĩnh nằm kề nhau.

### (3) Chỗ nên CẮT

- **Ô Đào sâu, đoạn cuối** (`metadata xuất xứ… bỏ sót 62 trên 173 lượt nguồn`) — đúng nhưng lạc chỗ. Nó
  nói về công cụ khai thác, không về hội tụ năm khối tài liệu là chủ đề của ô. Chuyển sang *Khai báo 3*
  nơi đã bàn về thiên lệch truy hồi, hoặc cắt.
- **Câu "Trình tự thường như sau."** — một dòng, không dạy gì, heading đã nói rồi.
- Bảng ánh xạ 18 chương × 3 neo và sơ đồ mermaid ba neo **nói cùng một thứ hai lần**. Sơ đồ đã gom
  chương theo neo; bảng lặp lại đúng phép gom ấy rồi thêm cột *"Chương đó trả lời gì"*. Giữ bảng (nó
  mang thông tin thêm), cắt ba nhánh `N1 --> P1` của sơ đồ, để sơ đồ chỉ còn luận đề → ba neo.

### (4) Chỗ THIẾU

- **Không có ví dụ cụ thể nào cho ba việc xảy ra khi một quy trình chết.** Ba việc được mô tả ở mức
  loại, và mức loại thì thuyết phục người đã trải qua, không thuyết phục người chưa. Một đoạn năm dòng
  kể một ca cụ thể ở mức *loại tình huống* (theo LUẬT 5) sẽ neo cả mục.
- **"Canh bạc tổ chức" được định nghĩa nhưng không được đối lập với cái gần nó.** Người đọc kỹ sẽ hỏi:
  khác gì "điều kiện tiên quyết", khác gì "giả định của dự án"? Một câu phân biệt là đủ và sẽ chặn một
  hiểu nhầm chạy suốt 17 chương sau.
- **Nêu trade-off mà không nói mặt kia:** đoạn giải thích vì sao Ch10 chạy neo *Canh bạc* nói rất rõ con
  đường không đi và lý do — đây là chỗ làm tốt nhất trong chương. Nhưng ba khai báo thì chỉ có mặt
  "chúng tôi thiếu", không có mặt "cái thiếu ấy làm hỏng khẳng định nào cụ thể". Khai báo 2 có nói;
  khai báo 1 và 3 thì không.

### (5) Sơ đồ còn thiếu

**Thay ba đoạn văn của mục *Cái chết của một quy trình* (ba "Việc thứ…") bằng một sơ đồ trạng thái
mermaid.** Bốn nút — *ban hành* → *nuốt bước trừu tượng* → *tài liệu tách khỏi thiết kế* → *quy trình
thành thứ dành cho người mới* — và một làn song song bên dưới ghi **"chỉ số tuân thủ: XANH"** ở cả bốn
nút. Chính sự tương phản giữa hai làn là luận điểm của mục, và nó là thứ chữ diễn đạt kém hơn hình.

### (6) Nhất quán xuyên chương

- **`[36]` bị gọi hai tên trong cùng một chương.** Bảng hội tụ xếp nó vào *"Tuyến công cụ và phê bình
  Pahl-Beitz"*; dòng 106 gọi nó là *"nguồn tuyến ICDM"*. Danh mục nguồn xếp `[36]` vào **Nhóm D**
  (notebook `pahlbeitz`), không phải Nhóm E. → **MAJOR**
- **Số ký tự của `[1]` không khớp giữa thân bài và sổ kiểm của chính chương**: thân bài `1.167.487`
  (khớp danh mục nguồn), sổ kiểm `1,18 triệu`. → **CRITICAL C-02**, xem Ch03.
- `Sáu mươi sáu tài liệu` (dòng 165) viết bằng chữ, trong khi mọi chỗ khác trong cả sáu chương viết
  `66 tài liệu`. → MINOR
- Sổ kiểm ghi **"Số dòng: 480"**, đếm thật là **488**. → MINOR

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "Đây là chương mở, nên không có chương trước để nối về. Thứ nó nối tới thì có:" | "**Chương 02** nhận từ đây nhiệm vụ dựng bộ từ vựng chung…" (bỏ hẳn vế đầu) | Nói về kết cấu sách thay vì về chủ đề; LUẬT 6 cấm nhắc lại điều heading/vị trí đã nói |
| 2 | "Trình tự thường như sau." | *(cắt)* | Một dòng không dạy gì; đoạn sau tự nó đã là trình tự |
| 3 | "Về ma trận đánh giá, nguồn tuyến ICDM ghi" | "Về ma trận đánh giá, một bài mở rộng phương pháp Pahl-Beitz `[36]` ghi" | `[36]` thuộc Nhóm D theo danh mục nguồn; chính bảng ở trên trong cùng chương xếp nó như vậy |
| 4 | "Sáu mươi sáu tài liệu của cuốn sách này rơi vào ba tầng" | "66 tài liệu của cuốn sách này rơi vào ba tầng" | Thống nhất với 100% các chỗ còn lại |
| 5 | "Trên toàn bộ 37 truy vấn của dự án, metadata xuất xứ của công cụ **bỏ sót 62 trên 173 lượt nguồn**" | Chuyển nguyên khối sang *Khai báo 3*, thêm một mệnh đề chỉ rõ đo bằng cách nào | Đang nằm trong ô bàn về hội tụ năm khối; và chính chương này đang lập luật rằng mọi con số phải chỉ ra xuất xứ |
| 6 | "Ba khai báo dưới đây vì thế không phải lời xin lỗi." | "Ba khai báo dưới đây là phép thử." (bỏ vế phủ định, giữ vế khẳng định ở câu sau) | Câu sau đã nói "Chúng là phép thử"; hai câu nói một ý, vế phủ định là thừa |
| 7 | "Cái thường được đọc thành *quy trình bắt buộc* vốn được viết ra như *gợi ý*" | Giữ nguyên, nhưng **thêm** một câu: "Chương 03 đo khoảng cách ấy bằng phép đếm chuỗi trên toàn văn." | Hiện Ch01 hứa "Ch03 sẽ mở nó ra" mà không nói mở bằng gì; một nửa câu là đủ để lời hứa có sức nặng |
| 8 | "Số dòng: 480" | "Số dòng: 488" | Sai số học trong chính sổ kiểm của chương lập luật về số |

---

## 4. Chương 02 — Thiết kế có hệ thống nghĩa là gì

*547 dòng · 7.490 từ · 2 sơ đồ · 1 Đào sâu · 5 mục Áp dụng ở Xưởng*

### (1) Chất lượng mở chương — **đạt, mở tốt nhất trong sáu chương**

Hai kỹ sư cãi nhau một tiếng mà không biết mình đang nói hai loại mệnh đề khác nhau — móc này vừa cụ
thể vừa **chính là chủ đề chương**, không phải một hình ảnh mượn để dẫn vào chủ đề. Đoạn hai nối ngược
Ch01 đích danh và nêu đúng thứ Ch01 để lại. Đoạn ba hứa ba kết quả, cả ba đều giao.

### (2) Mạch — **có một khúc lê thê ở giữa**

Ô *Đào sâu: cái giá của trừu tượng hoá* dài 45 dòng và gồm **bảy trích dẫn nguyên văn liên tiếp** chia
làm bốn "giá". Bốn giá là đúng, nhưng cách trình bày là xếp chồng trích dẫn: mỗi giá được giới thiệu
bằng một câu đậm rồi thả một khối `>`. Người đọc lướt qua khối này sẽ không mất gì — đó chính là dấu
hiệu nó chưa dựng được hiểu biết mà chỉ liệt kê bằng chứng.

Mục *Bằng chứng của phe mô tả* cũng vấp cùng lỗi ở dạng nhẹ hơn: bốn con số (87 / 235 / 46 / 45 phút /
25 bước) được thả ra thành năm đoạn trích liên tiếp, mỗi đoạn một dòng bình luận.

### (3) Chỗ nên CẮT

- **Trùng lặp nặng với Ch03.** Đối chiếu bằng công cụ: **11 đoạn nguyên văn xuất hiện đầy đủ ở cả Ch02
  lẫn Ch03** — toàn bộ khối thực nghiệm Kannengiesser–Gero (`Mapping all activities…`, `This results in
  a total of 235…`, `The behavioural observations…`, `All 46 design sessions…`, `a specified available
  time of 45 minutes`, `Therefore, it can be concluded…`) và bốn câu tự thú của Pahl-Beitz
  (`Abstracting and creating function structures…`, `The process-oriented approach…`, `Moreover, it
  should be remembered…`, `In many cases in industry…`, `The objection is often raised…`, `From
  research in industry…`, `However, the time normally needed…`). → **MAJOR**
  **Quyết định cần ra ở P6:** khối thực nghiệm 46 phiên có **nhà chính là Ch02** (nó phục vụ trục quy
  định ↔ mô tả); khối tự thú của Pahl-Beitz có **nhà chính là Ch03** (nó phục vụ mục *Những gì chính hai
  tác giả nhận là hỏng*). Mỗi khối giữ một nhà, chỗ còn lại rút xuống một câu kèm trỏ chương.
- **Ô Đào sâu, giá thứ tư (thời gian)** trùng nguyên văn với đoạn ngay sau ô về con số 60% — cùng hai
  câu `The objection is often raised…` và `However, the time normally needed…`. Trùng **trong cùng một
  chương**, cách nhau 30 dòng. Cắt bản trong ô.

### (4) Chỗ THIẾU

- **Trục quy định ↔ mô tả được định nghĩa nhưng "sai lầm loại mệnh đề" thì không.** Sơ đồ có ô
  `SAI LẦM LOẠI MỆNH ĐỀ`, bảng từ vựng cuối chương có dòng ấy, nhưng thân bài chưa từng đưa **một ca cụ
  thể** của việc chấm nhầm loại. Ví dụ biển báo đèn đỏ chạm tới nó nhưng đi theo hướng khác (nó biện hộ
  cho mệnh đề quy định, không minh hoạ lỗi chấm nhầm).
- **Bảng "Dòng chính → loại hệ thống" nêu trade-off một chiều.** Chương nói rất rõ hậu quả của việc gán
  nhãn sai; không nói mặt kia — rằng nhiều sản phẩm cơ điện tử **thật sự không có một dòng chính duy
  nhất**, và ép một nhãn lên chúng cũng là một chế độ hỏng. Chính Ch06 sẽ nói điều đó ("một chức năng
  chạy xuyên ba miền và không thuộc miền nào") — Ch02 nên báo trước nửa câu.
- **Không nói ranh giới hệ thống được đặt bởi ai.** Mục mở đầu bằng "cách đọc đó quyết định anh đặt ranh
  giới hệ thống ở đâu" rồi không quay lại. Việc *ai* có quyền vẽ ranh giới là câu hỏi tổ chức, đúng
  luận đề, và nó bị bỏ lửng.

### (5) Sơ đồ còn thiếu

**Thay ô `SAI LẦM LOẠI MỆNH ĐỀ` trong sơ đồ trục bằng một ma trận 2×2 riêng** — hàng: *mệnh đề quy định*
/ *mệnh đề mô tả*; cột: *bằng chứng "làm theo có tốt hơn không"* / *bằng chứng "quan sát có khớp không"*.
Hai ô đường chéo là phép kiểm hợp lệ, hai ô còn lại là sai lầm loại mệnh đề, mỗi ô một ví dụ một dòng.
Trục dọc hiện tại đang phải gánh hai việc — xếp trường phái **và** cảnh báo lỗi — và nó làm việc thứ hai kém.

### (6) Nhất quán xuyên chương

- **Ch02 tiêu trước vật liệu của Ch03.** Dòng "văn bản đánh số từ 1 đến 15 ở mục 7.1 nhưng không câu nào
  đếm" xuất hiện ở Ch02, trong khi Ch01 đã tuyên bố trong sổ kiểm: *"Con số thuộc về Ch03, kèm câu phủ
  nhận liền trước danh sách."* Ch02 nêu con số mà **không** kèm câu phủ nhận. → **MAJOR** — hoặc bỏ con
  số ở Ch02 (giữ "một danh sách đánh số ở mục 7.1"), hoặc kèm luôn câu phủ nhận.
- **Mục 1 của *Áp dụng ở Xưởng* không dùng ba nhãn `Vấn đề nó giải` / `Cách áp` / `Bẫy`** trong khi mục
  2–5 của chính chương này dùng. LUẬT 7 cho phép mục 1 khác, nhưng Ch01/Ch03/Ch04/Ch05 đều giữ nhãn ở
  mục 1. → MINOR
- Cụm `"…revealed that a large number of the company's projects (roughly 30%)…"` dùng ở **cả Ch01 lẫn
  Ch02**, ở Ch02 có kèm cỡ mẫu, ở Ch01 thì không. Ch01 nên nhận cỡ mẫu, hoặc nhường hẳn con số cho Ch02.

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "Đây là chỗ bất ngờ." | *(cắt; đi thẳng vào "Tuyến phê bình đánh gần như mọi thứ khác…")* | Báo trước rằng cái sắp tới thú vị là việc của cái sắp tới, không phải của câu này |
| 2 | "Bây giờ là chỗ dễ trượt nhất trong cả chương." | "Kết luận trên nói PBSA **chưa hoàn thiện với tư cách một mô hình tiên đoán**." | Cùng loại: hô hào thay vì dạy; câu sau đã tự đứng được |
| 3 | "Cùng lớp bẫy đó áp cho chuỗi cụ thể hoá — văn bản đánh số từ 1 đến 15 ở mục 7.1 nhưng không câu nào đếm" | "Cùng lớp bẫy đó áp cho chuỗi cụ thể hoá, nơi văn bản đánh số một danh sách mà không câu nào đếm — Chương 03 mở ca đó ra đầy đủ." | Ch01 đã giao con số 15 cho Ch03; nêu ở đây mà thiếu câu phủ nhận đi kèm là đúng cái lỗi chương này đang cảnh báo |
| 4 | "Sự đồng thuận này hiếm đến mức đáng ghi thành một quy tắc làm việc" | "Sự đồng thuận này cho một quy tắc làm việc:" | Bốn chữ "hiếm đến mức đáng" là lời tự khen về phát hiện của chính mình |
| 5 | "Cột thứ ba là suy luận của cuốn sách, không phải của nguồn — nguồn chỉ phân loại ba nhóm theo dòng chính [1]." | Giữ nguyên, **thêm**: "Và nguồn cũng không nói mọi sản phẩm đều có đúng một dòng chính — Chương 06 sẽ gặp loại sản phẩm không có." | Đang nêu một công cụ phân loại mà không nói vùng nó không áp dụng; chính Ch06 phá vỡ nó |
| 6 | "Ba mảnh bằng chứng cho thấy canh bạc ấy được thanh toán thế nào ngoài đời." | "Canh bạc ấy được thanh toán thế nào ngoài đời:" | "Ba mảnh bằng chứng" là đếm hộ chính mình; ba đoạn đậm ngay dưới đã tự đánh dấu |
| 7 | Ô *Đào sâu*, giá thứ tư — hai câu `The process-oriented approach…` và `The objection is often raised…` | Cắt khỏi ô; giữ bản nằm ở đoạn về con số 60% | Trùng nguyên văn trong cùng một chương, cách nhau 30 dòng |
| 8 | "Đối tượng là sinh viên kỹ thuật cơ khí, không phải kỹ sư công nghiệp." | "Đối tượng là sinh viên cơ khí sau năm thứ nhất, làm bài trong 45 phút — không phải kỹ sư công nghiệp trong một dự án thật." | Ràng buộc quan trọng nhất của thí nghiệm đang bị phát biểu yếu hơn dữ liệu mà chính chương vừa trích |

---

## 5. Chương 03 — Pahl-Beitz: bốn pha và canh bạc đầu tiên

*637 dòng · 8.561 từ · 3 sơ đồ · 1 Đào sâu · 5 mục Áp dụng ở Xưởng · **chương dài nhất trong sáu***

> Đây là chương mạnh nhất về nội dung và **hỏng nhất về kiểm chứng số**. Mục 7.1 — mười lăm bước công
> tác chính kèm câu phủ nhận — là phát hiện hay nhất của cả Phần II. Ba lỗi CRITICAL dưới đây nằm ở
> chỗ khác, và cả ba đều thuộc đúng lớp lỗi mà chương này đang dạy người đọc cách tránh.

### CRITICAL

**C-01 — "Sáu mươi năm phổ biến phương pháp đã sao chép danh sách và bỏ lại câu đó." (dòng 260)**

Ch01 dành nguyên một mục (*Khai báo phụ*) để kể rằng con số **sáu mươi năm** đã bị luật "mọi con số phải
có nguyên văn" bắt và **loại khỏi cuốn sách**, thay bằng *nửa thế kỷ*, và ghi vào sổ kiểm rằng nó đã bị
bỏ. Câu này ở Ch03 dùng lại đúng con số ấy, ở dạng một khẳng định độc lập về độ bền của một mệnh đề qua
thời gian, không có nguyên văn nào đỡ.

Đây **không phải** mục N-01 của sổ nợ. N-01 chỉ ra câu *"sáu mươi năm sau vẫn nhắc lại nguyên vẹn"* ở
dòng 6 — câu ấy **đã được sửa** thành *"gần nửa thế kỷ sau"*. Đây là **một chỗ thứ hai, chưa ai thấy**.
Quét không phân biệt hoa thường trên cả sáu chương xác nhận nó là chỗ duy nhất còn lại ngoài Ch01, nơi
Ch01 đang kể lại việc sửa, tức ngoại lệ hợp lệ.
*Sửa:* "Nửa thế kỷ phổ biến phương pháp đã sao chép danh sách và bỏ lại câu đó." — khớp nguyên văn
`"Design guidelines have been developed over the past 50 years."` `[13]`.

**C-02 — Số ký tự của nguồn `[1]` mâu thuẫn giữa ba chỗ**

| Chỗ | Con số |
|---|---|
| `_danh_muc_nguon.md`, Nhóm A | **1,167,487** |
| Ch01, *Khai báo 3*, thân bài | **1.167.487** — khớp |
| Ch01, *Sổ kiểm* | **1,18 triệu** — lệch |
| Ch03, *Tầng hai*, thân bài và sổ kiểm | **1.182.358** — lệch |

Ch03 xây một mục quan trọng lên chính con số này (`fifteen` = 0 lần *trên 1.182.358 ký tự*), rồi lặp lại
"Trên một triệu mốt trăm nghìn ký tự". Có thể đây là hai phép đo khác nhau của cùng một vật — "ký tự
thân bài do NLM trích" so với "ký tự văn bản PDF gốc" — nhưng **cuốn sách không nói ra rằng có hai phép
đo**, và hai chương in hai số. Với một cuốn sách mà luận điểm phương pháp luận là *đừng để con số trôi*,
đây là chỗ tự phá.
*Sửa:* chọn một phép đo, ghi rõ nó đo cái gì, dùng thống nhất ở cả Ch01 và Ch03. Nếu phép đếm chuỗi
`fifteen` chạy trên bản PDF gốc thì viết ra đúng như vậy — đó là thông tin làm phép đếm **mạnh hơn**.

**C-03 — `[45]` `[47]` `[50]` được trình bày là "ba tài liệu độc lập"**

Chương viết: *"Corpus có ba nguồn bên ngoài nói đúng điều này"* (dòng 148), *"Ba tài liệu độc lập, cùng
một mệnh đề"* (156), *"được ba tuyến tài liệu nhắc lại nhất quán"* (161). Danh mục nguồn của chính dự án
xếp cả ba vào **một nhóm duy nhất: "Nhóm E — ICDM — Hari & Weiss"**, notebook `icdm`:

- `[45]` (PDF) ICDM – an Integrated Methodology for the Conceptual Design of New Systems
- `[47]` 5.5.4 Design of the concept of a new system, using ICDM…
- `[50]` INCOSE2008CDTCpaper.pdf

Chúng không phải ba tuyến độc lập; chúng là ba bài của cùng một trường phái, nhiều khả năng cùng nhóm
tác giả. Điều này đánh thẳng vào lời tự tuyên bố của chương trong sổ kiểm: *"Mọi khẳng định về hiệu quả
đều đã bắc ra ngoài `[1]`"*. Bắc ra khỏi `[1]` thì có, nhưng bắc vào **một nguồn duy nhất khác** — và
việc `[47]` với `[50]` cùng dẫn Blanchard 1978 mà ra hai con số khác nhau càng dễ hiểu khi biết chúng
cùng một họ.
*Sửa:* đổi "ba tài liệu độc lập" thành "ba bài trong cùng tuyến ICDM"; giữ nguyên phần phân tích mâu
thuẫn 75/80 — nó mạnh hơn khi nói rõ chúng cùng nhà; thêm một câu rằng corpus **không có** nguồn ngoài
tuyến ICDM đo mệnh đề chi phí khoá sớm. Đây là **N-09 mở rộng**: N-09 đã ghi mâu thuẫn số, chưa ghi
vấn đề độc lập.

### (1) Chất lượng mở chương — **đạt**

"Có một cuốn sách mà gần như mọi bản quy trình thiết kế đang lưu hành trên thế giới đều là hậu duệ của
nó" — móc tốt, và nó đặt cược đúng: người đọc muốn biết cuốn nào. Nối ngược Ch02 đích danh, nêu đúng ba
thứ Ch02 để lại. Hứa ba kết quả, cả ba giao.

### (2) Mạch — **đoạn cuối chậm lại**

Bảy mục đầu chạy rất tốt. Mục *Những gì chính hai tác giả nhận là hỏng* thì đổi thể loại: nó là **tám
tiêu đề đậm, mỗi tiêu đề một khối trích dẫn**, không có mạch nối giữa các mục. Đây là liệt kê sự kiện
chứ không dựng hiểu biết — và nó chiếm 50 dòng. Câu chốt hay nhất của mục ("Người mới đi theo tiến
trình. Người có kinh nghiệm đi theo bài toán. Câu này nằm trong chính cuốn sách dạy đi theo tiến
trình.") đang bị chôn ở đáy một danh sách.

### (3) Chỗ nên CẮT

- **11 đoạn nguyên văn trùng với Ch02** (chi tiết ở mục Ch02). Ở Ch03 nên cắt **khối thực nghiệm
  Kannengiesser–Gero** — 87 / 235 / 46 phiên / 45 phút / kết luận *incomplete* — xuống một đoạn năm dòng
  trỏ sang Ch02, vì Ch03 dùng nó chỉ để làm "tuyến bằng chứng ngoài `[1]`" thứ nhất, không cần trình lại
  số liệu. Riêng phần *đối tượng đo là sinh viên* thì Ch03 giữ, vì đó là chỗ Ch03 dùng để hạ mức kết luận.
- **Mục *Những gì chính hai tác giả nhận là hỏng*: gộp tám khối thành một bảng** ba cột — *nhược điểm ·
  nguyên văn · hệ quả cho người áp dụng* — rồi giữ văn xuôi cho **đúng một** mục: mục Dylla/Fricke, vì
  nó là mục duy nhất mang lập luận chứ không mang dữ kiện. Tiết kiệm khoảng 30 dòng và trả lại nhịp.

### (4) Chỗ THIẾU

- **Không nói ra rằng `[37]` là bản gỡ băng bài giảng.** Danh mục ghi rõ: *"Lecture 40/ Transforming a
  method ecosystem – Dr Kilian Gericke"*. Câu trích in nguyên "p and bites" — tức *Pahl and Beitz* bị
  nhận dạng giọng nói sai — làm người đọc tưởng là lỗi đánh máy của sách. → **MAJOR**
- **Bảng năm giả định thiếu cột "bằng chứng nguyên văn".** Ch06 làm đúng việc này (bảng bốn giả định có
  cột *Bằng chứng trong nguồn*). Ch03 — chương đầu của Phần II, chương đặt khuôn cho ba chương sau — lại
  không có; bảng chỉ có *canh bạc · nó vỡ khi · dấu hiệu sớm*.
- **Mệnh đề "quyết định sớm định đoạt số phận sản phẩm" không được nói mặt kia.** Nếu quyết định sớm khoá
  chi phí thì hệ quả hành động hiển nhiên là *đầu tư nhiều hơn vào pha sớm*. Chương không hỏi câu ngược:
  đầu tư sớm mà **sai** thì khoá cái gì? Chương có sẵn vật liệu để trả lời — câu `"If, because of an
  unidentified evaluation uncertainty…"` — nhưng dùng nó làm minh hoạ chứ không làm phản đề.

### (5) Sơ đồ còn thiếu

**Thay ba đoạn văn của mục *Vì sao đây là bằng chứng nội tại mạnh nhất* bằng một sơ đồ "hao hụt qua mỗi
lần sao chép".** Bốn cột: *bản gốc mục 7.1* (danh sách + `not always possible` + `suggest` + `might
prove useful`) → *giáo trình* → *slide đào tạo* → *quy trình nội bộ*. Mỗi mũi tên ghi thứ rơi mất ở bước
đó; cột cuối chỉ còn "15 ô phải tick". Đây là cơ chế trung tâm của chương, hiện chỉ tồn tại dưới dạng
hai câu văn ("thứ sống sót qua mỗi lần sao chép là thứ *có hình dạng*").

### (6) Nhất quán xuyên chương

- **Trích nguyên văn một bản gỡ băng lỗi** (`"the book p and bites now being in its ninth Edition…"`
  `[37]`) không có ghi chú, không nói đó là lời nói. → **MAJOR**. Sửa: giữ trích dẫn, thêm câu dẫn.
- Sổ kiểm ghi thang 0–10 / 0–4 với nguyên văn `"The values are…"`, còn **thân bài dùng một câu khác**:
  `"Cost–Benefit Analysis employs a range from 0 to 10; Guideline VDI 2225 a range from 0 to 4"`. Cả hai
  câu đều có thật trong nguồn, nhưng sổ kiểm đang trỏ tới câu không xuất hiện trong chương. → MINOR
- `"Đọc lại chậm."` (Ch03) · `"Đọc chậm câu này."` (Ch04) · `"câu đó đáng đọc chậm"` (Ch05) — cùng một
  mệnh lệnh với người đọc, ba chương liền nhau. → MINOR
- Cụm `canh bạc` chỉ xuất hiện 3 lần trong toàn chương kể cả tiêu đề, dù đây là **chương neo Canh bạc
  đầu tiên của Phần II**; Ch02 dùng 10 lần. → MINOR

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "Sáu mươi năm phổ biến phương pháp đã sao chép danh sách và bỏ lại câu đó." | "Nửa thế kỷ phổ biến phương pháp đã sao chép danh sách và bỏ lại câu đó." | **C-01** — con số Ch01 đã tuyên bố loại bỏ, không nguyên văn nào đỡ |
| 2 | "Đếm chuỗi ký tự trên toàn văn 1.182.358 ký tự" | "Đếm chuỗi trên toàn văn bản in của `[1]` — 1.167.487 ký tự theo danh mục nguồn" (hoặc nói rõ đây là bản PDF gốc, khác phép đo của danh mục) | **C-02** — hai chương in hai số cho cùng một vật |
| 3 | "Ba tài liệu độc lập, cùng một mệnh đề, và hai con số khác nhau" | "Ba bài **trong cùng tuyến ICDM**, cùng một mệnh đề, và hai con số khác nhau" | **C-03** — cả ba thuộc Nhóm E, Hari & Weiss |
| 4 | "Corpus có ba nguồn bên ngoài nói đúng điều này" | "Corpus có ba bài ngoài `[1]` nói đúng điều này — cả ba đều thuộc tuyến ICDM, nên chúng đối chứng cho `[1]` chứ không đối chứng cho nhau" | Cùng lý do; nói ra làm phân tích mạnh hơn, không yếu đi |
| 5 | "tới bản tiếng Đức thứ chín năm 2021 theo nguồn `[37]`" | "— lời Kilian Gericke trong một bài giảng, bản gỡ băng tự động (`p and bites` là *Pahl and Beitz*):" | Người đọc đang bị bỏ lại một mình với một chuỗi trông như lỗi đánh máy |
| 6 | "Đọc lại chậm." | *(cắt; để bản dịch tiếng Việt ngay sau đó tự làm việc)* | Mệnh lệnh với người đọc; bản dịch liền sau đã làm đúng việc mà mệnh lệnh đòi |
| 7 | "Mẫu hình quá rõ để là ngẫu nhiên." | "Sách đếm những gì nó coi là **cấu trúc**; sách không đếm những gì nó coi là **trình tự công việc**." | Câu hiện tại tự khen phát hiện; câu sau nó mới là phát hiện, nên để nó đứng đầu |
| 8 | "Ba tuyến, ba phương pháp thu thập khác nhau, cùng một chiều" | "Ba tuyến, ba phương pháp thu thập khác nhau — và cần nói rõ: hai trong ba là khảo sát sinh viên" | Ràng buộc này đã nêu ở từng tuyến rồi bị bỏ mất đúng lúc gộp kết luận |
| 9 | Bảng năm giả định, ba cột | Thêm cột thứ tư **"Nguyên văn đỡ giả định này"**; ô nào không có thì ghi *suy luận dựng ngược* | Ch06 làm đúng việc này; Ch03 là chương đặt khuôn cho Phần II mà lại lỏng hơn |

---

## 6. Chương 04 — VDI 2221:1993: bảy bước và cái giá của việc thành tiêu chuẩn

*584 dòng · 8.165 từ · 2 sơ đồ · 2 Đào sâu · 5 mục Áp dụng ở Xưởng*

> Chương kỷ luật nhất về trích dẫn trong sáu chương. Không lỗi CRITICAL. Mục *Giả định 4 — thuật ngữ
> thống nhất*, với ca "mô-đun ba nghĩa", là đoạn hay nhất của cả Phần II: nó lấy một luận điểm trừu
> tượng về mặt tiếp giáp và biến thành một chế độ hỏng người đọc kiểm được ngay trong xưởng của mình.

### (1) Chất lượng mở chương — **đạt, nhưng móc thuộc loại yếu hơn**

"Một phương pháp và một tiêu chuẩn là hai loại vật khác nhau, dù chữ in ra có thể giống hệt" — sắc, đúng
chủ đề, nhưng là móc **khái niệm**, không phải móc **cảnh**. Ch02, Ch03, Ch05 đều mở bằng một người, một
cảnh, hoặc một vật cụ thể. Ở vị trí chương thứ tư liên tiếp của một cuốn sách dày, đây là chỗ độc giả A
(kỹ sư trưởng) dễ bắt đầu lướt. Nối ngược Ch03 đích danh và **nhặt đúng mảnh bằng chứng Ch03 để lại** —
đây là cách nối chương tốt nhất trong sáu chương, nên giữ nguyên làm mẫu.

### (2) Mạch — **tốt; hai ô Đào sâu liền nhau làm chùng một nhịp**

Mạch mua-và-trả-giá là kết cấu đúng và chạy sạch: bốn món mua được, bốn khoản giá, rồi bốn giả định.
Chỗ chùng là hai ô *Đào sâu* đặt **liền nhau** (dòng 331 và 373), tổng 60 dòng, ngay trước mục đóng
chương. LUẬT 7 cho phép 0–2 ô, nên đây không phải vi phạm; nhưng đặt chúng cạnh nhau nghĩa là người đọc
lướt bỏ được **cả hai** và mất luôn phát hiện Vielhaber, vốn là bằng chứng mạnh nhất của chương.
*Đề xuất:* đẩy ô *tri thức — thứ tiêu chuẩn không đếm được* lên ngay sau *Giá thứ ba*, để nó nằm trong
mạch chứ không nằm ngoài lề.

### (3) Chỗ nên CẮT

- **Trùng lặp nặng với Ch05: 13 đoạn nguyên văn xuất hiện đầy đủ ở cả hai chương.** Đây là chỗ trùng
  lớn nhất trong sáu chương. Cụ thể:
  - toàn bộ **bảng phả hệ 1954 / 1965 / 1973 / thập niên 1970** với y nguyên bốn câu trích;
  - câu `"The direction of the guidelines has changed…"` và câu `"Design guidelines have been developed
    over the past 50 years."`;
  - cụm **Weißdruck 42 trang / 52 trang / một phần ba dành cho CAD** với cả ba câu trích;
  - cả bốn câu Vielhaber (`Looking in detail inside VDI 2221…`, `…partial knowledge, only`,
    `A shortcoming of most design process models…`, `only the minimum of documentation…`);
  - câu `"Existing standards describe the content and generation…"`.
  → **MAJOR**. Xem đề xuất phân nhà ở mục Ch05.
- **Ô *Đào sâu: hai dự án áp dụng*** lặp lại toàn bộ số liệu đã nêu ở mục *Thứ ba: đào tạo được* (6 ml,
  1.45, 2.57379, 270°C/80°C, Rp 3.657.000). Trùng **trong cùng chương**. Giữ ô Đào sâu (nó mang phân
  tích: *"chuẩn hoá bảo đảm sàn, không bảo đảm trần"*), rút mục *Thứ ba* xuống một câu không có số.

### (4) Chỗ THIẾU

- **Nói "chuẩn hoá mua được bốn món" nhưng chỉ có một món được đo.** Ngôn ngữ chung, truy vết, và bốn
  công cụ nhỏ đều được lập luận, không có bằng chứng. Chỉ món "đào tạo được" có hai case study. Chương
  nên nói ra sự bất đối xứng ấy — nó là một dữ kiện về corpus, và nó nhất quán với luận điểm chương.
- **Bảy bước được liệt kê mà không nói bước nào hay bị bỏ nhất trong thực tế.** Chương có sẵn cơ chế
  (bước 2–3 không sinh ra vật cầm được, nên bị cắt trước) ở *Giả định 3*, nhưng nó nằm cách bảng bảy
  bước 300 dòng. Một cột thứ năm trong bảng — *"bước này bị bỏ khi nào"* — sẽ làm bảng dùng được ngay.
- **Nêu trade-off một chiều ở giá thứ nhất.** Chương nói rất mạnh rằng chuẩn hoá lột mất phần bất định
  và đẩy phán đoán xuống hoạt động ngầm. Không nói mặt kia: có những tổ chức mà **phán đoán ngầm chính
  là vấn đề**, và một quy trình cứng là cách rẻ nhất để chặn nó. Chương đang nợ nửa câu đó.

### (5) Sơ đồ còn thiếu

**Thay ba đoạn văn của ca "mô-đun ba nghĩa" bằng một sơ đồ.** Một khối hệ thống, ba đường cắt chồng lên
nhau — mặt bích/bu-lông (cơ), đầu nối/giao thức (điện), hàm gọi được (phần mềm) — và tô đậm **vùng không
chồng khít** với nhãn *"không có chủ; lộ ra ở bước 6–7, không lộ ở bước 4"*. Đây là luận điểm chịu lực
của cả chương và hiện đang được diễn đạt bằng chữ ở chỗ hình làm tốt hơn hẳn.

### (6) Nhất quán xuyên chương

- **Tiêu đề mục "Trước khi có số hiệu: một phả hệ ba mươi năm" không có căn cứ.** Bảng ngay dưới trải từ
  **1954 đến 1993** — ba mươi chín năm; hoặc 1954 đến 1973 — mười chín năm. Không phép đếm nào trong
  nguồn cho "ba mươi". Đây đúng lớp lỗi mà Ch01 và Ch03 đang lập luật để chặn, và nó nằm trong một
  **tiêu đề**, tức chỗ dễ trích lại nhất. → **MAJOR**
- Chương viết "không ai chịu trả giá suốt **năm mươi năm**" — con số này thì có nguyên văn (`over the
  past 50 years` `[13]`), nhưng nguyên văn đo *bề dày phát triển hướng dẫn thiết kế*, không đo *thời
  gian doanh nghiệp trả giá cho VDI 2221*. Dùng đúng con số cho sai đối tượng. → MINOR
- "Đọc chậm câu này." — cùng tic với Ch03 và Ch05. → MINOR

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "## Trước khi có số hiệu: một phả hệ ba mươi năm" | "## Trước khi có số hiệu: từ Kesselring 1954 đến VDI 2221" | **MAJOR** — "ba mươi năm" không khớp bảng ngay dưới (1954→1993) và không có nguyên văn |
| 2 | "vì nếu không có gì để mua thì đã không ai chịu trả giá suốt năm mươi năm" | "vì nếu không có gì để mua thì đã không ai chịu trả giá lâu đến thế" | Con số có nguyên văn nhưng nguyên văn đo một đối tượng khác |
| 3 | "Đọc chậm câu này. Nó không nói phương pháp trở nên đúng hơn." | "Câu này không nói phương pháp trở nên đúng hơn." | Mệnh lệnh với người đọc; câu sau tự đứng được |
| 4 | "Bốn món hàng thật. Bây giờ đến hoá đơn." | "Bốn món hàng thật — và ba trong bốn không có gì trong corpus đo được. Hoá đơn thì có bằng chứng." | Chuyển một câu chuyển mạch thành một câu mang thông tin, và vá đúng chỗ thiếu ở (4) |
| 5 | "Chú ý cái đuôi câu, vì nó sẽ quay lại ám cả chương" | "Cái đuôi câu quay lại ám cả chương: bước đầu tiên được chính tài liệu tổng quan gọi là **quan trọng nhất**." | Bỏ mệnh lệnh, gộp hai câu, giữ nguyên nội dung |
| 6 | Bảng bảy bước (4 cột) | Thêm cột **"bị bỏ khi nào"**, điền từ chính lập luận ở *Giả định 3* | Bảng hiện là bảng tra cứu; thêm một cột là thành công cụ chẩn đoán, đúng thứ độc giả A cần |
| 7 | Mục *Thứ ba: đào tạo được*, đoạn hai gạch đầu dòng với 1.45 / 2.57379 / 6 ml / 270°C / Rp 3.657.000 | Rút xuống một câu không số, trỏ tới ô *Đào sâu* | Cùng bộ số xuất hiện hai lần trong một chương, cách nhau 180 dòng |
| 8 | "Đây không phải lỗi của ban soạn thảo. Đó là **thuộc tính của thể loại**." | Giữ nguyên — đây là câu tốt nhất của chương | *(ghi lại để P6 không cắt nhầm khi rút gọn mục này)* |

---

## 7. Chương 05 — VDI 2221:2019: lần nhượng bộ được viết thành văn bản

*562 dòng · 7.293 từ · 2 sơ đồ · 1 Đào sâu · 5 mục Áp dụng ở Xưởng*

> Chương có luận điểm sắc nhất trong sáu: *bản 2019 không gỡ canh bạc, nó đổi canh bạc — và canh bạc mới
> khó bắt quả tang hơn*. Bảng "sai thì lộ ra khi nào" là bảng hay nhất của cả Phần II. Vấn đề của chương
> không nằm ở lập luận mà ở chỗ **một phần tư dung lượng của nó là Ch04 kể lại**.

### CRITICAL

**C-04 — Cùng quãng thời gian, hai con số, hai chương**

Ch05 mở bằng: *"Suốt **ba mươi năm**, phe phê bình nói rằng khung bảy bước của VDI 2221 quá cứng"*, và
lặp lại hai lần nữa: *"**Ba mươi năm** phê bình đòi đúng câu đó"* (dòng 292), *"cái mà phê bình đã đòi
**ba mươi năm**"* (dòng 412). Ch06 mở bằng: *"chính cơ quan tiêu chuẩn Đức, sau **hai mươi sáu năm**,
tách VDI 2221 làm đôi"*.

Cùng một quãng — từ bản mang khung bảy bước (1993, năm duy nhất có nguyên văn đỡ, qua
`"procedural models with a prescriptive notion … such as the VDI 2221 (1993)"` `[12]`) đến bản 2019.
1993 đến 2019 là **26 năm**. Ch06 tính đúng; Ch05 làm tròn lên 30 ba lần, và làm tròn ấy phóng đại chính
luận điểm của chương — thời gian phê bình càng dài thì lời thú nhận càng nặng.

Chương này thậm chí không thể viện năm ban hành sớm hơn để biện minh: **chính Ch04 đã tuyên bố rằng năm
ban hành bản VDI 2221 đầu tiên là "không có trong nguồn"** và cuốn sách từ chối viết 1986. Vậy "ba mươi
năm" đếm từ đâu thì không chỗ nào trong sách trả lời được.
*Sửa:* dùng **26 năm** ở cả Ch05 lẫn Ch06, hoặc bỏ con số ở cả hai và viết "hơn hai thập niên" — nhưng
phải thống nhất. Hai chương liền nhau in hai số cho cùng một khoảng là chỗ người đọc kỹ sẽ dừng lại.

### (1) Chất lượng mở chương — **đạt; móc mạnh nhất trong sáu chương**

"Có một loại bằng chứng mà không tuyến phê bình nào mua được: bị cáo tự khai." Một câu, và người đọc
biết ngay chương này sẽ làm gì. Nối ngược Ch04 đích danh, nêu đúng thứ Ch04 để lại. Hứa ba kết quả, cả
ba giao — trong đó lời hứa thứ hai (*"biết đích xác corpus này biết tên năm nhóm nào, không biết tên năm
nhóm nào"*) thuộc loại hiếm: nó hứa **cả chỗ trống**, và giao đúng chỗ trống ấy thành nội dung.

Chỉ tiếc là câu thứ hai của chương chứa lỗi C-04.

### (2) Mạch — **chùng nặng ở giữa**

Mục *Ai nhượng bộ ai: đọc lại phả hệ 1954 đến 2019* (khoảng 45 dòng) **dựng lại nguyên bảng phả hệ của
Ch04** với y nguyên bốn câu trích, rồi trích lại câu *"The direction of the guidelines has changed…"* mà
Ch04 đã trích và phân tích kỹ hơn. Phần thật sự mới của mục chỉ là ba đoạn cuối — *ai nhượng bộ ai, và
nhượng bộ dừng ở đâu* — và ba đoạn ấy hay.

Ô *Đào sâu: năm ví dụ điển hình* cũng dựng lại toàn bộ cụm Weißdruck 42/52/một-phần-ba của Ch04. Phần
mới duy nhất là câu `"…an orientation aid in the form of five representative case examples."` `[16]` và
cách đọc nó như dấu vết một cuộc thua — một cách đọc hay, đang bị vùi dưới 25 dòng vật liệu cũ.

Mục *Chỗ nhượng bộ không chạm tới* thì trích lại cả bốn câu Vielhaber của Ch04. Ở đây việc trích lại
**có lý do** — chương cần chứng minh chúng *vẫn còn* sau bản 2019 — nhưng ba trong bốn câu chỉ cần một
dòng nhắc kèm số hiệu, không cần khối trích đầy đủ lần thứ hai.

### (3) Chỗ nên CẮT

**Trùng lặp với Ch04 là chỗ trùng lớn nhất trong sáu chương: 13 đoạn nguyên văn xuất hiện đầy đủ ở cả
hai chương.** → **MAJOR**

- **Bảng phả hệ 1954–2019**: cắt bốn hàng đầu, giữ hai hàng mới (`Since about 1990…`, `Blatt 1 / Blatt 2
  2019-11`), mở mục bằng một câu trỏ về Ch04. Tiết kiệm khoảng 20 dòng.
- **Ô *Đào sâu*, cụm Weißdruck**: cắt ba câu trích 42 trang / 52 trang / một phần ba, giữ một dòng tóm
  tắt trỏ Ch04, giữ nguyên phần về `five representative case examples` — đó là nội dung mới và nó xứng
  đáng làm cả ô.
- **Mục *Chỗ nhượng bộ không chạm tới***: giữ trọn khối trích cho khiếm khuyết **Một** (quyết định trên
  tri thức bán phần) vì nó nặng nhất; hai khiếm khuyết còn lại rút xuống một dòng mỗi cái kèm `[N]`.
- Câu `"Looking in detail inside VDI 2221 … knowledge is explicitly mentioned twice"` xuất hiện ở Ch04
  trong ô Đào sâu và **lần nữa ở cuối mục này của Ch05**, kèm cùng một bình luận "Hai lần." → cắt bản Ch05.

### (4) Chỗ THIẾU

- **Không định nghĩa *tailoring* trước khi dùng.** Glossary định nghĩa nó, và Ch02 tuyên bố "tailoring có
  nhà riêng ở Ch05". Nhưng Ch05 dùng cụm "cắt may" từ dòng 40 trở đi mà **chưa bao giờ định nghĩa, và
  chưa từng viết chữ *tailoring* cạnh chữ *cắt may*** trong thân bài. Người đọc đến từ Ch02 đang chờ một
  định nghĩa mà chương không trả. → **MAJOR**
- **Bảng "sai thì lộ ra khi nào" chứa một khẳng định mạnh không được đánh dấu là suy luận.** Dòng *"Ai
  chịu trách nhiệm khi hỏng: **Không ai được chỉ định**"* cho bản 2019 là suy luận; sổ kiểm có khai (mục
  5) nhưng **thân bài thì không**, trong khi ba suy luận khác của chương đều được đánh dấu tại chỗ
  ("*Đây là suy luận của tôi…*"). Không nhất quán ngay trong một chương.
- **Không có ví dụ về một tổ chức tự chẩn đoán sai.** Luận điểm chịu lực là "cắt may trên bản tự chẩn
  đoán sai cho ra quy trình sai một cách có hệ thống". Chương không đưa nổi một ca — kể cả ca giả định ở
  mức loại tình huống theo LUẬT 5 — nên luận điểm đứng bằng lập luận thuần.

### (5) Sơ đồ còn thiếu

**Bảng "sai thì lộ ra khi nào" cần một sơ đồ đi kèm: hai đường phát hiện lỗi trên cùng một trục thời
gian dự án.** Đường 1993 dựng đứng sớm — bỏ bước là thấy ngay, có chuẩn ngoài để đối chiếu; đường 2019
nằm ngang rất lâu rồi mới bật lên ở cuối — mô tả sai bối cảnh thì không có gì báo động. Đúng một sơ đồ,
và nó chứa toàn bộ luận điểm của mục. Hiện chương chỉ có hai sơ đồ, cả hai đều ở nửa đầu, nên nửa sau
chạy suốt 300 dòng không có hình nào.

### (6) Nhất quán xuyên chương

- **C-04** ở trên. → CRITICAL
- Bốn dòng mục lục tiếng Đức của Blatt 1 được in thành **bốn khối trích riêng biệt liên tiếp**, mỗi khối
  một dòng. Nên gộp thành một bảng hai cột (*mục · trang*), vì lập luận đi kèm là lập luận **về số
  trang**, và bảng làm nó đọc được ngay. → MINOR
- Chương gọi `[12]` là "hai tác giả công nghiệp" ba lần mà không nêu tên hay đơn vị, trong khi cùng
  chương lại trích chi tiết tiểu sử 21 năm Mercedes-Benz và 12 năm Bombardier. Xưng hô nửa vời. → MINOR

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "Suốt ba mươi năm, phe phê bình nói rằng khung bảy bước của VDI 2221 quá cứng" | "Suốt hai mươi sáu năm, phe phê bình nói rằng khung bảy bước của VDI 2221 quá cứng" | **C-04** — 1993 đến 2019; Ch06 dùng 26, Ch05 dùng 30 ba lần |
| 2 | "Ba mươi năm phê bình đòi đúng câu đó." | "Hơn hai thập niên phê bình đòi đúng câu đó." | Cùng lý do; ở chỗ này không cần con số chính xác nên bỏ hẳn là an toàn nhất |
| 3 | "nó sửa đúng cái mà phê bình đã đòi ba mươi năm" | "nó sửa đúng cái mà phê bình đã đòi suốt quãng ấy" | Cùng lý do |
| 4 | "Doanh nghiệp **cắt may** quy trình cho mình thế nào" (ô bảng Blatt 2) | Thêm ngay dưới bảng: "*Cắt may* — **tailoring** trong nguyên bản — là việc doanh nghiệp tự dựng quy trình riêng từ một bộ nhân tố ngữ cảnh, thay vì nhận một trình tự in sẵn." | Ch02 đã hẹn định nghĩa này ở Ch05; chương dùng thuật ngữ hơn mười lần mà không định nghĩa lần nào |
| 5 | "Ai chịu trách nhiệm khi hỏng · … · *Không ai được chỉ định*" | Thêm một câu dưới bảng: "Dòng thứ ba là suy luận của tôi — corpus không có mô tả cơ chế trách nhiệm nào cho Blatt 2." | Ba suy luận khác trong chương đều được đánh dấu tại chỗ; dòng này không, dù nó nặng nhất |
| 6 | Mục *Ai nhượng bộ ai*, bảng phả hệ sáu hàng | Cắt bốn hàng đầu; mở mục bằng "Phả hệ đã dựng ở Chương 04; ở đây chỉ cần hai mốc mới:" | Khối trùng lớn nhất giữa hai chương liền kề |
| 7 | "**Hai lần.** Trong một bộ hướng dẫn về hoạt động mà đầu ra chính là tri thức." | *(cắt cả đoạn; Ch04 đã trích và bình đúng câu này)* | Trùng cả nguyên văn lẫn bình luận với Ch04 |
| 8 | "Đó là hai tác giả với hai mươi mốt năm phát triển xe hơi…" | "Đó là hai tác giả của `[12]`, với hai mươi mốt năm phát triển xe hơi…" | Đoạn duy nhất trong chương lập luận dựa trên thẩm quyền của nguồn mà không gắn số hiệu |
| 9 | "Đây không phải một bài kiểm tra dễ hơn bài cũ. Nó là một bài kiểm tra **khác loại**." | Giữ nguyên — câu chốt của chương | *(ghi lại để P6 không cắt nhầm khi rút gọn)* |

---

## 8. Chương 06 — VDI 2206: khi hệ thống thành liên ngành

*517 dòng · 7.123 từ · 2 sơ đồ · 1 Đào sâu · 5 mục Áp dụng ở Xưởng*

> Chương duy nhất trong sáu có **hai chỗ trích từ tầng tổng hợp của chính dự án** thay vì từ tệp vật
> liệu nguồn, và cả hai được gán số hiệu nguồn. Không phải bịa — văn bản có thật, truy được — nhưng sai
> tầng xuất xứ. Ngoài ra đây là chương có bảng giả định tốt nhất Phần II: bốn giả định, mỗi giả định kèm
> **cột bằng chứng nguyên văn** và cột điều kiện hỏng. Ch03 nên mượn đúng khuôn này.

### MAJOR — hai chỗ sai tầng xuất xứ

**M6-1 — Câu "nguyên văn" tiếng Việt (dòng 351–352)**

> "…nguồn phát biểu nó gần như thành lời: tổ chức áp dụng được giả định có `"các kỹ sư đa ngành có khả
> năng thấu hiểu và sử dụng chung một ngôn ngữ mô hình hoá bán chính quy"`, và kịch bản đổ vỡ được ghi
> ngay bên cạnh là `lack of common interface language` `[25]`."

Câu tiếng Việt trong backtick **không đến từ nguồn nào**. Nó là dòng 471 của
`Phase1-Exploration/SYNTH_Exploration.md` — mục *"Giả định về tổ chức"* do chính vòng tổng hợp của dự án
viết ra ("Các kỹ sư đa ngành có khả năng thấu hiểu và sử dụng chung một ngôn ngữ mô hình hóa bán chính
quy (như SysML)"). Chương in nó trong định dạng dành riêng cho nguyên văn và dẫn nhập bằng *"nguồn phát
biểu nó gần như thành lời"*.

Đây là vi phạm hình thức của LUẬT 1 (nguyên văn phải là tiếng Anh hoặc Đức, nằm trong tệp khám phá được
giao) ở dạng khó thấy nhất: chữ **có thật**, chỉ là của tầng phân tích chứ không của tầng nguồn. Cụm
`lack of common interface language` `[25]` đứng ngay cạnh **thì đúng** — nó có trong
`c3-vdi2206-vmodel-cps_Exploration.md` — nên chỗ sai được che bởi chỗ đúng.
*Sửa:* bỏ backtick và bỏ câu dẫn "nguồn phát biểu nó gần như thành lời"; viết thành lời của sách —
*"Giả định trung tâm là ba miền dùng chung một ngôn ngữ mô hình hoá bán chính quy; nguồn không phát biểu
giả định này trực tiếp, nhưng ghi thẳng kịch bản đổ vỡ của nó: `lack of common interface language` `[25]`."*

**M6-2 — Cụm `verifiable units` gán cho `[23]` (dòng 377, bảng bốn giả định)**

Ô *Bằng chứng trong nguồn* của giả định "hệ thống cộng gộp được" ghi: `mô tả phân rã thành verifiable
units [23]`. Quét toàn `Phase1-Exploration/`: cụm `verifiable units` xuất hiện **đúng 1 lần, và lần đó
nằm trong `SYNTH_Exploration.md`**, không có trong `c3-vdi2206-vmodel-cps_Exploration.md` là tệp vật
liệu được giao cho chương này. Đây là ô **duy nhất** trong bảng không có bằng chứng nguồn thật — ba ô
kia đều dẫn đúng.
*Sửa:* thay ô ấy bằng `"không có nguyên văn — suy luận từ cấu trúc nhánh phải của chữ V"`, hoặc tìm câu
thật trong `[23]` mô tả việc phân rã thành đơn vị kiểm thử được. Đây cũng là **cảnh báo cho P7**: bảng
bốn giả định của Ch06 là khuôn tốt, nhưng khuôn tốt khiến ô yếu trông giống ô mạnh.

**M6-3 — Bốn giả định trùng khớp 1:1 với mục *Giả định ngầm* của `SYNTH_Exploration.md`**

Ba trong bốn giả định của chương — ngôn ngữ mô hình hoá chung, "tính cộng gộp của mảnh ghép", độ tin
cậy của mô hình ảo — là ba gạch đầu dòng liên tiếp ở dòng 456–458 của tệp tổng hợp, theo đúng thứ tự.
Chương trình bày chúng như đọc ra từ nguồn ("Ba điều đầu có bằng chứng trực tiếp trong nguồn"). Điều đó
đúng với giả định 1 và 3; giả định 2 thì bằng chứng của nó chính là M6-2 ở trên. P6 phải kiểm lại từng ô.

### (1) Chất lượng mở chương — **đạt**

"Một phương pháp thiết kế cơ khí giả định rằng sản phẩm phân rã sạch" — móc mở bằng một giả định người
đọc mang sẵn mà chưa từng nói ra, rồi phá nó trong bốn câu. Nối ngược Ch05 đích danh, và làm một việc
tinh hơn nối thường: nó **phân biệt hai loại áp lực** ("VDI 2221 nới lỏng dọc theo một trục sẵn có. VDI
2206 phải dựng một trục thứ hai"). Hứa ba kết quả, cả ba giao. Vướng duy nhất: câu nối ngược chứa nửa
kia của lỗi C-04 ("sau hai mươi sáu năm" — bản thân nó đúng, nhưng lệch với Ch05).

### (2) Mạch — **tốt; một đoạn tự nói về mình quá lâu**

Mục *Macro-cycle và micro-cycle* dừng 8 dòng để kể việc glossary của chính cuốn sách đã ghi sai "5 bước"
và chương phải bỏ con số. Đây là nội dung đúng và thuộc loại quý (N-08 ghi nhận nó là cảm biến chạy
đúng). Nhưng nó được kể **ba lần trong cùng chương**: một lần trong khối cảnh báo, một lần trong hai
hàng của bảng đối chiếu hạt nhân, một lần trong nút mermaid (`SỐ BƯỚC: KHÔNG CÓ TRONG NGUỒN`). Ba lần
cho một sự vắng mặt là quá nhiều; giữ khối cảnh báo và nút mermaid, rút bảng xuống một hàng.

### (3) Chỗ nên CẮT

- **Đoạn về sáu cách hiểu chữ V nói ra rằng nó không nói được gì** — ô *Đào sâu* trích được hai con số
  (`six different interpretations`, `eleven characteristic properties`) rồi ghi rằng danh sách của cả
  hai đều không có trong vật liệu. Trung thực và đúng luật, nhưng ở dạng một ô *Đào sâu* riêng thì nó
  hứa nhiều hơn giao. Rút xuống 6 dòng và ghép vào mục *Chữ V bản 2004 trả lời thế nào*, giữ nguyên đoạn
  kết luận vận hành ("khi hai kỹ sư nói *chúng ta làm theo chữ V*…") — đó là phần có giá trị.
- **Hai hàng cuối của bảng đối chiếu hạt nhân** (*Cái được kiểm chứng* / *Cái không được kiểm chứng*)
  nhắc lại đúng nội dung hai hàng ngay trên chúng. Bốn hàng nói một ý. Gộp còn ba hàng.
- Câu `"it is not always possible to draw up a strict plan for the embodiment design phase"` được trích
  lại lần thứ ba trong sách (Ch01, Ch03, Ch04 đều có). Ở Ch06 nó chỉ làm nhiệm vụ trỏ về Ch03 — thay
  bằng một câu trỏ, bỏ trích dẫn.

### (4) Chỗ THIẾU

- **Chương nói "ba miền, ba nhịp đồng hồ" rồi không bao giờ dùng lại chữ "nhịp" trong phần chẩn đoán.**
  Bảng ba miền có hàng *Nhịp đổi một vòng*, và mục *Áp dụng ở Xưởng* số 4 (*Tách nhịp*) dùng nó rất hay.
  Nhưng phần giữa — chỗ chữ V chạm tổ chức — quy toàn bộ chỗ vỡ về **ngôn ngữ**, bỏ hẳn **nhịp**. Nếu
  lệch nhịp là mệnh đề thứ nhất của chương thì nó phải xuất hiện trong danh sách chỗ vỡ, hoặc chương
  phải nói rõ tại sao nguồn không ghi nhận nó.
- **Giả định 2 nêu trade-off mà không nói mặt kia.** "Hệ thống cộng gộp được" bị bác bằng nhiệt, rung,
  nhiễu, trễ. Không nói mặt kia: nếu bỏ giả định cộng gộp thì **không tồn tại cách chia việc nào**, và
  toàn bộ giá trị của nhánh trái chữ V biến mất. Đây là một trade-off thật, không phải một sai lầm, và
  chương đang trình bày nó như sai lầm.
- **Không nói vì sao chữ V thắng được danh sách bảy bước ở đúng bài toán này.** Chương nói chữ V "gập
  danh sách lại làm đôi", nhưng người đọc độc giả A cần một câu về **cái gì buộc phải gập** — rằng với
  ba miền chạy song song, một danh sách tuyến tính không có chỗ đặt điểm kiểm chứng giữa chừng. Câu ấy
  gần như có ("bước cuối bao giờ cũng là bước bị cắt khi hết thời gian") nhưng chưa nối vào tính liên ngành.

### (5) Sơ đồ còn thiếu

**Thay hai đoạn văn của mục *Ba miền, ba nhịp đồng hồ* — đoạn "Ba miền tiến hoá với nhịp khác nhau" và
đoạn "Ba miền không phân rã sạch theo miền" — bằng một sơ đồ.** Một chức năng cơ điện tử (ví dụ *giữ vị
trí*) vẽ thành một dải chạy ngang qua ba làn cơ / điện / phần mềm, cắt qua cả ba mà không nằm trong làn
nào; bên phải là ba thang nhịp thay đổi lệch nhau, với mũi tên dồn sai lệch về làn phần mềm. Hai mệnh đề
nặng nhất của chương hiện đang là hai đoạn văn thuần, trong một chương chỉ có hai sơ đồ và cả hai đều
dành cho chữ V.

### (6) Nhất quán xuyên chương

- **Mục *Áp dụng ở Xưởng* dùng nhãn `Coi chừng:` thay cho `Bẫy:` và bỏ hẳn hai nhãn `Vấn đề nó giải` /
  `Cách áp`.** Ch01–Ch05 dùng bộ ba nhãn ấy (tổng 22 lần); Ch06 dùng 0 lần và thay bằng một câu hỏi mở
  trong khối `>`. `Phase3-Outline.md` **có** cho phép Ch06 dùng "Apply This: C (kiểu trích dẫn)", nên
  đây không phải vi phạm dàn ý — nhưng đọc liền sáu chương thì người đọc sẽ hiểu `Coi chừng` là một mục
  khác loại với `Bẫy`, trong khi nội dung hai nhãn là một. → **MAJOR** về nhất quán. *Đề xuất:* giữ kiểu
  trình bày C, đổi nhãn về `Bẫy:`.
- **"hai tiêu chuẩn cách nhau ba mươi năm"** (tiêu đề mục, và nhắc lại trong thân bài). Pahl-Beitz bản
  Đức 1977 đến VDI 2206:2004 là **27 năm**; Ch03 gọi cùng khoảng ấy là "ba thập niên". Con số này đến từ
  `Phase3-Outline.md` nên nó là lỗi thừa kế, không phải lỗi của agent — nhưng nó vẫn là một con số làm
  tròn không có nguyên văn, nằm trong một **tiêu đề**. → **MAJOR**
- `Ba mươi lăm năm sau mới có một tiêu chuẩn thiết kế mang tên nó` — 1969 đến 2004, đúng số học, cả hai
  mốc đều có nguyên văn. Nhưng nên viết thẳng "Từ 1969 đến 2004" để phép trừ hiện ra thay vì phải tin. → MINOR
- Chương trích được **hai niên đại mâu thuẫn cho V-Model** (1993 `[26]` và 1995 `[23]`) và xử lý mẫu mực:
  ghi cả hai, nói rõ không phân xử được, chỉ ra điều đáng giữ. Đây là chỗ nên nêu làm chuẩn cho P6 khi
  xử N-09. *(ghi nhận, không phải vấn đề)*

### (7) Câu cần viết lại

| # | Nguyên bản | Đề xuất thay | Lý do |
|---|---|---|---|
| 1 | "nguồn phát biểu nó gần như thành lời: tổ chức áp dụng được giả định có `\"các kỹ sư đa ngành…\"`" | "Nguồn không phát biểu giả định này trực tiếp, nhưng ghi thẳng kịch bản đổ vỡ của nó: `lack of common interface language` `[25]`." | **M6-1** — chuỗi trong backtick đến từ tệp tổng hợp của dự án, không từ nguồn |
| 2 | "mô tả phân rã thành `verifiable units` `[23]`" (ô bảng) | "không có nguyên văn — suy luận từ cấu trúc nhánh phải" | **M6-2** — cụm này chỉ có trong `SYNTH_Exploration.md`, không có trong tệp vật liệu của chương |
| 3 | "## Hạt nhân dùng chung: hai tiêu chuẩn cách nhau ba mươi năm" | "## Hạt nhân dùng chung: từ 1977 đến 2004, cùng một lõi" | Con số làm tròn không nguyên văn, đặt trong tiêu đề |
| 4 | "**Coi chừng:**" (5 lần) | "**Bẫy:**" | Nhất quán với 22 lần ở Ch01–Ch05; nội dung hai nhãn là một |
| 5 | "Ba mươi lăm năm sau mới có một tiêu chuẩn thiết kế mang tên nó." | "Từ 1969 đến 2004 — ba mươi lăm năm — mới có một tiêu chuẩn thiết kế mang tên nó." | Cho phép trừ hiện ra; cả hai mốc đều có nguyên văn nên không có lý do giấu |
| 6 | "Ba điều đầu có bằng chứng trực tiếp trong nguồn; điều thứ tư là điều kiện để ba điều kia có nghĩa." | "Hai trong ba điều đầu có bằng chứng trực tiếp trong nguồn; điều thứ hai và điều thứ tư là suy luận." | **M6-3** — sau khi sửa M6-2, câu đếm này không còn đúng |
| 7 | "Nó sai với đúng loại tương tác mà cơ điện tử sinh ra nhiều nhất: nhiệt, rung, nhiễu, trễ" | Giữ nguyên, **thêm**: "Bỏ hẳn giả định ấy thì cũng không còn cách chia việc nào — đây là một đánh đổi, không phải một sai lầm." | Đang trình bày một trade-off như một lỗi; mặt kia chưa được nói |
| 8 | "Bên trong mỗi ô của chữ V còn một vòng nhỏ hơn, lặp: **micro-cycle**" | Giữ nguyên; nhưng rút hai hàng cuối bảng đối chiếu hạt nhân | Sự vắng mặt của phép đếm đang được kể ba lần trong một chương |
| 9 | "**Chế độ hỏng không nằm ở tài liệu. Nằm ở đường từ tài liệu sang tổ chức.**" | Giữ nguyên — câu chốt của chương và của cả Phần II | *(ghi lại để P6 không cắt nhầm)* |

---

## 9. Vấn đề cắt ngang sáu chương

### 9.1 Trùng lặp nguyên văn — con số đo được

Quét bằng công cụ, khớp theo 60 ký tự đầu đã chuẩn hoá:

| Cặp chương | Số đoạn nguyên văn trùng | Bản chất |
|---|---|---|
| **Ch04 ↔ Ch05** | **13** | phả hệ 1954–1973, Weißdruck 42/52/CAD, bốn câu Vielhaber, `is based on 7 stages`, `four main design phases` |
| **Ch02 ↔ Ch03** | **11** | khối thực nghiệm Kannengiesser–Gero (87/235/46/45 phút), năm câu tự thú của Pahl-Beitz |
| Ch01 ↔ Ch03 | 4 | ba câu mục 7.1 cộng `The first German edition…` |
| Ch01 ↔ Ch02 | 1 | `roughly 30%` |
| Ch01 · Ch04 · Ch05 | 2 | `Design guidelines have been developed…` và `The first VDI Standards…`, mỗi câu ở ba chương |
| Ch04 ↔ Ch06 | 1 | `it is not always possible to draw up a strict plan…` |

Hai cặp đầu là vấn đề thật; các cặp còn lại là nhắc lại hợp lý.

**Nguyên tắc phân nhà đề xuất cho P6 — mỗi khối bằng chứng có đúng một nhà, chỗ khác chỉ được một dòng
kèm số hiệu:**

| Khối bằng chứng | Nhà | Chỗ phải rút gọn |
|---|---|---|
| Thực nghiệm sFBS 87 / 235 / 46 phiên / 45 phút / 25 bước | **Ch02** — nó phục vụ trục quy định ↔ mô tả | Ch03 |
| Năm câu tự thú của Pahl-Beitz về trừu tượng hoá | **Ch03** — mục *Những gì chính hai tác giả nhận là hỏng* | Ch02, ô *Đào sâu* |
| Con số 60% và câu làm nó nhỏ lại | **Ch02** — ca mẫu về trích đủ ngữ cảnh | Ch03 |
| Phả hệ 1954 / 1965 / 1973 / thập niên 1970 | **Ch04** | Ch05 |
| Weißdruck 42 / 52 / một phần ba CAD | **Ch04** — *Giá thứ hai* | Ch05, ô *Đào sâu* |
| Bốn câu Vielhaber | **Ch04** — ô *Đào sâu* | Ch05 giữ 1, rút 3 |
| Ba câu mục 7.1 của Pahl-Beitz | **Ch03** | Ch01 giữ vì là bằng chứng mở; Ch04 và Ch06 rút xuống một dòng |

### 9.2 Con số làm tròn không có nguyên văn — một lớp lỗi, năm chỗ

Đây là **cùng lớp lỗi** mà `_P5_PUNCHLIST.md` N-08 đã ghi nhận năm lần cho *phép đếm bước*. Lần này nó
xuất hiện ở một hình dạng khác — **khoảng thời gian** — và chưa ai quét:

| Chỗ | Viết là | Tính ra | Mức |
|---|---|---|---|
| Ch03 dòng 260 | "Sáu mươi năm phổ biến phương pháp" | 1977 → 2026 = 49 | **C-01 · CRITICAL** |
| Ch05 dòng 3, 292, 412 | "ba mươi năm" phê bình | 1993 → 2019 = 26 | **C-04 · CRITICAL** |
| Ch06 dòng 12 | "hai mươi sáu năm" | 26 — đúng, nhưng lệch Ch05 | **C-04 · CRITICAL** |
| Ch04 dòng 28, tiêu đề mục | "một phả hệ ba mươi năm" | 1954 → 1993 = 39 | MAJOR |
| Ch06 dòng 228, tiêu đề mục | "hai tiêu chuẩn cách nhau ba mươi năm" | 1977 → 2004 = 27 | MAJOR — thừa kế từ `Phase3-Outline.md` |

> **Đề xuất luật cơ học cho P6 và P7**, cùng loại với luật đã bắt được "sáu mươi năm": **mọi khoảng thời
> gian viết bằng chữ phải chỉ ra được hai mốc có nguyên văn, và phép trừ phải khớp.** Không khớp thì thay
> bằng hai mốc — "từ 1993 đến 2019". Quét bằng biểu thức đơn giản là đủ. Bốn trên năm chỗ ở bảng trên nằm
> trong hoặc ngay cạnh **tiêu đề mục** — chỗ dễ bị trích lại nhất và ít bị soi nhất.

### 9.3 Ba tầng xuất xứ đang bị trộn thành một

Sáu chương dùng ba loại vật liệu với ba mức tin cậy rất khác nhau, và **định dạng in ra thì giống hệt
nhau** — chữ trong backtick kèm nháy kép, gắn `[N]`:

1. **Tầng nguồn** — câu tiếng Anh/Đức có trong `c1…c8-*_Exploration.md`. Đây là 191 trên 194 đoạn.
2. **Tầng tổng hợp của dự án** — `SYNTH_Exploration.md`. Hai chỗ ở Ch06 (M6-1, M6-2) lấy từ đây và được
   gắn số hiệu nguồn `[25]`, `[23]`.
3. **Tầng đo của chính dự án** — số ký tự, số lượt truy vấn, số nguồn bị bỏ sót. Ch01 dùng bốn con số
   loại này (37 truy vấn · 62 trên 173 lượt · 8 nguồn · 32%) mà không nói chúng được đo bằng cách nào.

`_P5_PUNCHLIST.md` N-10 đã ghi một trường hợp của đúng vấn đề này cho Phần V. **Ở đây nó xuất hiện sớm
hơn nhiều, ở Phần II**, và ở dạng ngược lại: không phải nguồn thứ cấp bị đọc như sơ cấp, mà **vật liệu
do chính dự án viết ra bị in như vật liệu nguồn**.

*Đề xuất quy ước hình thức, áp từ P6:*
- `"chữ tiếng Anh/Đức"` `[N]` — nguyên văn nguồn. Giữ nguyên như hiện nay.
- *chữ nghiêng, không backtick, không `[N]`* — tổng hợp của dự án.
- Con số đo của dự án — bắt buộc kèm một mệnh đề nói rõ đo trên cái gì.

### 9.4 Đọc liền sáu chương: nhịp và tật lời văn

- **Sáu chương có sáu tiếng nói rất gần nhau** — đó là thành tựu, không phải vấn đề. Không chương nào
  trượt sang giọng giảng bài; không chương nào dính năm cụm bị cấm ở LUẬT 6.
- **Tật lặp đáng sửa — mệnh lệnh với người đọc:** `Đọc lại chậm.` (Ch03) · `Đọc chậm câu này.` (Ch04) ·
  `câu đó đáng đọc chậm` (Ch05) · `Đọc kỹ vế sau dấu gạch` (Ch04) · `Chú ý ba chi tiết` (Ch03). Ba chương
  liền nhau bảo người đọc phải đọc chậm. Mỗi chỗ chỉ cần bỏ câu mệnh lệnh; câu ngay sau đó luôn đã làm
  đúng việc mà mệnh lệnh đòi.
- **Tật thứ hai — tự đếm phát hiện của mình trước khi trình bày:** "Ba mảnh bằng chứng cho thấy…", "Ba
  lý do.", "Ba tầng sự thật…", "Bốn món hàng thật." Ở đoạn mở chương thì đúng luật (LUẬT 7 đòi hứa 2–3
  kết quả); ở giữa thân bài thì nó chỉ báo trước cấu trúc mà tiêu đề đậm ngay dưới đã báo.
- **Số sơ đồ đang ở mức tối thiểu.** Cả sáu chương đều đúng bằng số mà `Phase3-Outline.md` yêu cầu, và
  LUẬT 7 cho phép tới bốn. Sáu sơ đồ đề xuất ở các mục trên đều **thay thế văn xuôi**, không thêm dung
  lượng — chúng rơi đúng vào chỗ chương đang giải thích một cơ chế không gian bằng chữ tuyến tính.

### 9.5 Xác nhận cho sổ nợ đã có — không tính vào bảng đếm

- **N-01 phần 1** — quét toàn sáu chương không phân biệt hoa thường: cụm "sáu mươi năm / 60 năm" còn ở
  **hai chương**. Ch01 (3 lần) là ngoại lệ hợp lệ vì đang kể lại việc sửa. **Ch03 dòng 260 thì không** —
  đã nâng thành C-01, vì nó là khẳng định độc lập chứ không phải trích luận đề, và nó không nằm trong
  mô tả của N-01 (N-01 chỉ tới câu ở dòng 6, câu ấy đã được sửa).
- **N-05** — quy ước `L1–L12`: không chương nào trong Ch01–Ch06 viết ngược; Ch01 giữ đúng "số nhỏ = đòn
  bẩy lớn". Quy ước *VDI 2221 không ghi năm = bản 1993*: Ch04, Ch05, Ch06 **luôn** ghi năm khi bàn tới
  bản 2019. Sạch.
- **N-06** — ba chỗ agent chủ động bỏ số vẫn còn nguyên và được giải thích trong thân bài (Ch05 cột số
  hiệu để trống · Ch05 năm trên mười nhóm · Ch01 không nêu số bước pha cụ thể hoá). Không chỗ nào bị
  "sửa" thành có số.
- **N-09** — mâu thuẫn 75/80%: Ch03 đã trình bày cả ba con số, nêu rõ chúng trích lại chứ không đo, và
  dùng chiều chứ không dùng độ lớn — **đúng như N-09 yêu cầu**. Việc còn lại duy nhất là C-03: ba nguồn
  ấy không độc lập với nhau.
- **N-11** — "năm nguồn độc lập": Ch01 còn **hai chỗ trong thân bài** (đoạn mở, và tiêu đề mục *Năm khối
  tài liệu, hỏi cùng một câu*), cộng bảng năm hàng và ô *Đào sâu* nói về "hội tụ của năm truy vấn".
  Ch02–Ch06 sạch. Sửa Ch01 sẽ kéo theo cả tiêu đề mục và số hàng của bảng — không phải sửa một chữ.

---

## 10. Thứ tự việc cho P6

1. **C-01 · C-02 · C-03 · C-04** — bốn lỗi CRITICAL. Ba trong bốn là con số; cả bốn sửa bằng thao tác
   nhỏ, nhưng phải sửa **đồng thời ở các chương liên quan**, nếu không sẽ đẻ ra mâu thuẫn mới.
2. **M6-1 · M6-2 · M6-3** — ba chỗ sai tầng xuất xứ ở Ch06, cộng quy ước hình thức ở mục 9.3.
3. **Trùng lặp Ch04 ↔ Ch05 và Ch02 ↔ Ch03** — theo bảng phân nhà ở 9.1. Đây là việc tốn công nhất và
   mang lại nhiều nhất: cắt được ước chừng 120–150 dòng mà không mất một bằng chứng nào.
4. **Sáu sơ đồ đề xuất** — Ch01 cái chết của một quy trình · Ch02 ma trận loại mệnh đề · Ch03 hao hụt qua
   mỗi lần sao chép · Ch04 mô-đun ba mặt phẳng · Ch05 hai đường phát hiện lỗi · Ch06 một chức năng cắt
   ngang ba miền.
5. **Nhất quán nhãn** — `Coi chừng` thành `Bẫy` ở Ch06; nhãn ba phần cho mục 1 của Ch02.
6. **MINOR** — tật mệnh lệnh với người đọc; số dòng trong sổ kiểm Ch01 (480 → 488); sổ kiểm Ch03 trỏ tới
   câu trích không có trong thân bài; các chỗ tự đếm phát hiện của mình.

---

*Hết. Phản biện Chương 01–06 · 2026-08-21 · 4 CRITICAL · 21 MAJOR · 18 MINOR · xác minh trích dẫn 12/12
và 193/194 trên toàn bộ, không đoạn nào bịa.*
