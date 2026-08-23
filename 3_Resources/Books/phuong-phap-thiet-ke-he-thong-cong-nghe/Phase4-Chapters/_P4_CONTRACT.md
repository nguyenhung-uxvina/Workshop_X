# Hợp đồng P4 — ràng buộc chung cho mọi chương

Mọi agent viết chương **phải đọc file này trước**, và phải tuân thủ toàn bộ. Ngày: 2026-08-20.

---

## Luận đề của cuốn sách

> **Mỗi phương pháp thiết kế có hệ thống là một canh bạc đặt vào một tổ chức không tồn tại. Chúng không
> hỏng vì sai kỹ thuật — chúng hỏng ở mặt tiếp giáp với tổ chức. Và nửa thế kỷ cải tiến phương pháp đã
> cải thiện tài liệu chứ không cải thiện người thiết kế, vì gần như mọi cải tiến đều can thiệp ở tầng đòn
> bẩy thấp trong khi chỗ quyết định nằm ở tầng cao nhất.**

**Ba neo.** Mỗi chương nối về ít nhất một, và phải nối **rõ ràng trong văn bản**, không để người đọc tự suy:
1. **Canh bạc** — phương pháp này đặt cược vào tổ chức như thế nào?
2. **Mặt tiếp giáp** — nó vỡ ở đâu khi chạm tổ chức thật, bằng chứng nào trong nguồn?
3. **Tầng đòn bẩy** — công cụ này can thiệp ở tầng nào, và nó **tự nhận** là tầng nào?

---

## LUẬT 1 — Mọi con số phải có nguyên văn. Không có thì viết là không có.

Đây là luật quan trọng nhất. Cuốn sách trước trong cùng dự án suýt hỏng **ba lần** vì cùng một lỗi:
tài liệu liệt kê đủ mục mà không tự đếm, người viết điền con số vào giúp, rồi trích như thể nguồn nói vậy.

**Bắt buộc với mọi số, năm ban hành, phép đếm, tỷ lệ phần trăm:**
- Phải có **câu trích nguyên văn** (tiếng Anh/Đức) nằm trong tệp khám phá được giao. Đặt trong backtick.
- Nếu tệp khám phá ghi *"không có trong nguồn"* cho một phép đếm → **viết ra rằng nguồn không tự đếm**.
  Đó là nội dung hay, không phải thiếu sót.
- **Cấm** suy ra con số bằng cách tự đếm gạch đầu dòng rồi trình bày như con số của nguồn.
- Không tìm được nguyên văn → **bỏ con số đó đi**. Không ước lượng, không viết "khoảng", không "nhiều".

**Ca mẫu — đọc kỹ, đây là chuẩn:** danh sách bước cụ thể hoá của Pahl-Beitz đúng là 15 mục, nhưng sách
**không bao giờ viết chữ "fifteen"** (0 lần trên 1,18 triệu ký tự), và câu **liền trước** danh sách nói
`"it is not always possible to draw up a strict plan for the embodiment design phase"`. Viết
*"quy trình 15 bước của Pahl-Beitz"* là sai. Viết *"mười lăm bước công tác chính, kèm chính lời tác giả
rằng không thể lập kế hoạch chặt cho pha này"* là đúng.

## LUẬT 2 — Trích đủ ngữ cảnh, không chỉ đủ chữ

Trích đúng nguyên văn vẫn có thể xuyên tạc nếu cắt mất câu bên cạnh.

**Ca mẫu:** con số `"decreased the electrical energy demand by 58% to 90%"` là nguyên văn, nhưng câu ngay
trước nó là `"The prototypical implementation of the new design slightly outperforms state-of-the-art air
conditioning"` và cỡ mẫu là **1 xe + 4 người dùng**. Trích con số mà bỏ chữ *slightly* và bỏ cỡ mẫu là
xuyên tạc nguồn, dù từng chữ đều đúng.

Khi trích một con số ấn tượng, luôn tự hỏi: **câu bên cạnh có làm nó nhỏ lại không?** Nếu có, trích cả.

## LUẬT 3 — Trích dẫn nguồn bằng `[N]` của danh mục

Dùng số hiệu trong `Phase1-Exploration/_danh_muc_nguon.md`. **Chỉ được dùng những `[N]` có trong dòng
"Nguồn:" của mục mà mình đang lấy vật liệu** trong tệp khám phá. Không đoán số hiệu.

Tệp khám phá đã gỡ sạch thẻ `[n]` do NLM sinh — đừng bịa lại chúng.

## LUẬT 4 — Ranh giới Meadows/Goldratt

Meadows và Goldratt **không viết một chữ nào về thiết kế kỹ thuật**. Dùng làm **lăng kính** thì hợp lệ;
dùng làm **bằng chứng về thiết kế kỹ thuật** thì không.

Mọi ánh xạ từ công cụ thiết kế sang tầng đòn bẩy đều là **thao tác của cuốn sách này**, không nguồn nào
trong 66 tài liệu làm việc đó. Chương nào dùng ánh xạ này phải nói ra điều đó bằng một câu trong văn bản.

## LUẬT 5 — Cổng an ninh, áp cho mục *Áp dụng ở Xưởng*

Đây là chỗ duy nhất chạm quy trình thật của một xưởng thật.

- **Không tên riêng.** Không mã sản phẩm, không tên dự án, không tên đơn vị, không tên người, không tên
  đối thủ, không tên khách hàng. Viết theo *loại tình huống*: "một sản phẩm ở pha ý tưởng với ràng buộc
  nội địa hoá", không phải tên nó.
- **Không số liệu vận hành.** Không sản lượng, giá, tên nhà cung cấp, lịch giao hàng, quy mô nhân sự cụ thể.
- **Không nêu lĩnh vực quốc phòng.** Viết ở mức "xưởng cơ khí — điện tử — phần mềm nhúng, vài chục người".

## LUẬT 6 — Giọng

Chuyên gia viết cho đồng nghiệp ngang hàng, không phải thầy giảng cho học trò.

- **Cấm:** "Chào bạn", "Trong chương này chúng ta sẽ tìm hiểu", "Điều quan trọng cần lưu ý là",
  "Như chúng ta đã thấy", "Trước khi đi sâu vào". Heading đã nói rồi thì đừng nói lại.
- Dám nói thẳng: "đây là chỗ phương pháp này sai", "lý do nó tồn tại là". Không "còn tuỳ" khi có câu trả lời.
- Mỗi câu phải **dạy được cái gì** hoặc **dựng cho câu sau**. Bỏ đi mà không mất ý nghĩa → cắt.
- Tiếng Việt cho văn kể, giữ nguyên thuật ngữ tiếng Anh/Đức: *embodiment design*, *tailoring*, *V-Model*,
  *morphological chart*, *prescriptive*, *leverage point*. Không dịch gượng.
- Luôn cho thấy **cái không được chọn và vì sao** — con đường không đi thường dạy nhiều hơn con đường đã đi.

## LUẬT 7 — Cấu trúc chương

```
# Chương NN — <Tiêu đề>

<Mở: 3 đoạn. (1) vấn đề chương này giải và cái gì hỏng nếu thiếu nó;
 (2) nối ngược về chương trước, đích danh; (3) hứa 2–3 kết quả cụ thể.>

## <Tiêu đề mô tả — cấm "Giới thiệu về X">
<văn xuôi + sơ đồ mermaid + bảng>

## <Mục thân 2..N>

> **Đào sâu: <chủ đề>**   ← tuỳ chọn, 0–2 mỗi chương, tự chứa, người đọc lướt bỏ được

## Áp dụng ở Xưởng
### 1. <tên>  ← BẮT BUỘC là một quyết định cụ thể có thể ra TRONG TUẦN TỚI
### 2..5. <tên>
```

**Đúng 5 mục trong *Áp dụng ở Xưởng*.** Mục 1 bắt buộc là quyết định hành động được ngay trong tuần.
Bốn mục còn lại theo mẫu: **Vấn đề nó giải** (1 câu cụ thể) · **Cách áp** (1–2 câu, chuyển giao được) ·
**Bẫy** (1 câu, chế độ hỏng cụ thể).

Đây là **sách phương pháp luận, không phải sách code** — thay pseudocode bằng **bảng đối chiếu, sơ đồ
mermaid, và trích nguyên văn**. 2–4 sơ đồ mermaid mỗi chương.

## LUẬT 8 — Ba khai báo, chỉ viết ở Chương 01

Ch01 khai báo, các chương khác **nhắc lại khi dùng**, không lặp toàn văn:
1. Khung ba tầng là **tổng hợp của sách**, không nguồn nào đặt Meadows cạnh Pahl-Beitz.
2. Corpus **không có toàn văn tiêu chuẩn VDI nào** — chỉ có bản trích mẫu và hai mục lục.
3. **Một nguồn `[1]` chiếm 32% corpus** — trích dày từ nó có thể vì nó đúng, cũng có thể vì nó dài.

## Đầu ra

Ghi ra `Phase4-Chapters/Ch<NN>_<slug>_Draft.md`. Ghi tệp tạm rồi đổi tên — **không mở thẳng chế độ ghi đè
lên tệp đang giữ dữ liệu** (đã có một lần mất trắng vì lỗi này trong dự án anh em).

Cuối chương, thêm mục:

```
---
## Sổ kiểm của chương
- Neo luận đề: <neo nào, và nối ở đoạn nào>
- Nguồn đã dùng: [N], [M], ...
- Con số có nguyên văn: <liệt kê từng con số + 3 chữ đầu của câu trích>
- Con số đã BỎ vì không có nguyên văn: <liệt kê, hoặc "không có">
- Chỗ là suy luận của tác giả, không phải của nguồn: <liệt kê>
- Số dòng: <đếm>
```
