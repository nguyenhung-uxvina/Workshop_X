# Xác minh trích dẫn — toàn bộ, không lấy mẫu

Ngày: 2026-08-20 · Công cụ: `Phase6-Revised/verify_quotes.py` · Chạy độc lập với ba agent phản biện

---

## Kết quả

| | |
|---|---|
| Đoạn trích rút từ 18 chương | **625** (đã bỏ 119 cuống ba chữ trong Sổ kiểm — hợp đồng P4 yêu cầu ghi vậy) |
| Khớp toàn phần với vật liệu nguồn | **601** |
| Khớp sau khi truy tận nguồn gốc | **24** |
| **Bịa hoặc sửa** | **0** |

**625/625 truy được về nguồn.**

## Vì sao chạy hết thay vì lấy mẫu

Ba agent phản biện mỗi agent kiểm 12 đoạn — tổng 36/625, tức **5,8%**. Với tỷ lệ đó, một câu bịa duy nhất
có xác suất lọt **94%**. Phép kiểm này chạy trên toàn bộ, mất vài giây, và không có xác suất lọt.

Đây cũng là lý do nó phải chạy **độc lập** với các agent phản biện: nếu chỉ có mẫu của họ, con số báo lên
sẽ là "36/36 đạt" — nghe rất tốt và không có nghĩa gì.

## Bộ kiểm sai trước khi nó đúng

Bốn vòng, và mỗi vòng đều là lỗi của **bộ kiểm**, không phải của sách:

| Vòng | Báo thiếu | Nguyên nhân thật |
|---|---|---|
| 1 | 129 | dấu `>` của blockquote xen vào giữa câu trích khi xuống dòng |
| 2 | 56 | cuống ba chữ trong Sổ kiểm bị tính là trích dẫn |
| 3 | 7 | PDF tách chữ kiểu `"Requirement -Functional"`; nháy cong so với nháy thẳng |
| 4 | 1 | câu có dấu lược `...` ở giữa — hai nửa đều đúng, ghép lại không khớp chuỗi |

Nếu dừng ở vòng một, báo cáo sẽ là **"129 trích dẫn không xác minh được"** — một con số gây hoảng, hoàn
toàn sai, và đủ để bắt viết lại nửa cuốn sách.

> **Bài học:** một cổng mới viết ra thì giả thuyết đầu tiên phải là *cổng sai*, không phải *vật bị đo sai*.
> Thứ tự đó quyết định ta đi sửa cái gì.

## Hai ca đáng ghi

**Ca 1 — tôi nghi oan.** `Ch12:220` trích dòng thư mục Garfinkel 1967 kèm cả *Englewood Cliffs, NJ,
Prentice-Hall*. Chi tiết đầy đủ tới mức tôi ngờ nó đến từ trí nhớ mô hình chứ không từ corpus. Kiểm ra:
**nguồn có đủ cả dòng**, chỉ khác kiểu nháy. Nghi ngờ đúng hướng, kết luận sẽ sai nếu không kiểm.

**Ca 2 — chỗ duy nhất phải truy tận nguồn gốc.** `Ch14:102` trích
`"Pahl & Beitz approach is based on the historical background to modern systematic design thinking in
Germany, describing a systematic approach to engineering design."` Câu này **không có trong bất kỳ tệp
khám phá nào**. Suýt kết luận là bịa.

Kéo thẳng nội dung nguồn `[33]` từ NotebookLM thì thấy nó ở đó, nguyên văn — nguồn viết dính chữ
(`"Pahl & Beitzapproach"`), chương đã tách ra. Nghĩa là **agent Ch14 đã tự đi lấy nguồn gốc thay vì dừng
ở vật liệu được giao.**

Điều này lộ một khoảng trống của chính vòng P1: 37 truy vấn NLM không kéo ra được câu đó, dù nó nằm ngay
trước câu trích quan trọng nhất của Ch14 về vùng mù đội phân tán địa lý. **Vật liệu khai thác không phải
là nguồn — nó là một lát cắt của nguồn.** Mọi phép kiểm "có trong vật liệu khai thác không" đều mang sẵn
tỷ lệ âm tính giả bằng đúng phần nguồn mà NLM không kéo ra.

## Bốn chuẩn hoá được chấp nhận

Chương được phép sửa các thứ sau so với nguồn, và đã sửa đúng:

1. Chữ dính do PDF: `Pahl & Beitzapproach` → `Pahl & Beitz approach`
2. Chữ tách do PDF: `Requirement -Functional -Logical` → `Requirement-Functional-Logical`
3. Nháy cong → nháy thẳng, và nháy kép lồng → nháy đơn
4. Dấu lược `...` cho đoạn bị cắt giữa câu

**Không chấp nhận:** đổi từ, đổi số, bỏ vế làm đảo nghĩa. Không ca nào trong 625 vi phạm.
