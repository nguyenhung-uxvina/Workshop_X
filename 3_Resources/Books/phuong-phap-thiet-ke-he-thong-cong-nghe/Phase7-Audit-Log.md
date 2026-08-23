# Phase 7 — Nhật ký kiểm IP và ghép sách

Ngày: 2026-08-21 · Công cụ: `Phase4-Chapters/audit.py`, `sec_gate.py`, `verify_quotes.py`,
`p5_gate.py`, `contradict.py`, `crosslink.py`

---

## Sản phẩm

`book.md` — **129.962 từ · 617.976 ký tự · 9.380 dòng · 42 sơ đồ mermaid · 298 đoạn trích nguyên văn**

Kiểm cấu trúc sau khi ghép: **25 tiêu đề cấp 1** (1 tên sách + 6 phần + 18 chương — đúng số dự kiến),
**84 fence ``` — cân bằng**, không fence nào hở.

**Bỏ ra khỏi bản in: 18 mục *Sổ kiểm của chương*, 80.345 ký tự, 1.020 dòng.** Đây là công cụ nội bộ của
P4/P5 — nơi mỗi chương tự khai con số nào đã bỏ và chỗ nào là suy luận. Giữ nguyên trong
`Phase4-Chapters/`, không in. Bản thảo mất 38% khối lượng thô khi bỏ chúng, và đó là đúng: chúng là
giàn giáo, không phải công trình.

---

## Kiểm gốc gác nội dung

| Chỉ số | Giá trị |
|---|---|
| Chữ của nguồn (trong đoạn trích nguyên văn) | **9,4%** |
| Chữ của tác giả | **90,6%** |
| Đoạn trích nguyên văn | 590 trong bản chương · 298 trong bản in |
| Khai báo *"đây là suy luận / thao tác của sách"* | **50 lượt, 14/18 chương** |

Tỷ lệ 9,4% là lành mạnh cho một cuốn tổng hợp: đủ dày để mọi khẳng định về nguồn đều neo được, đủ mỏng
để cuốn sách là văn của nó chứ không phải tuyển tập trích dẫn.

**Xác minh trích dẫn — chạy toàn bộ, không lấy mẫu.** 563 đoạn kiểm được, **541 khớp thẳng vào vật liệu
nguồn, 22 phải truy tận tài liệu gốc, 0 bịa.** Chi tiết và bốn vòng sửa bộ kiểm ở
`Phase5-Reviews/_XAC_MINH_TRICH_DAN.md`.

---

## Rủi ro R3 — chương lệch về một nguồn

| Chương | Nguồn đậm nhất | Tỷ lệ lượt trích | Đánh giá |
|---|---|---|---|
| Ch03 | `[1]` Pahl-Beitz toàn văn | **80%** | ⚠ Chấp nhận có điều kiện |
| Ch12 | `[43]` Jensen & Andreasen | 55% | Chấp nhận |
| Ch02 | `[1]` | 47% | Chấp nhận |
| Ch07 | `[23]` VDI 2206:2021 | 46% | Chấp nhận |
| Ch18 | — | *(chỉ số hỏng, xem dưới)* | — |

**Ch03 ở 80% là chỗ duy nhất phải nói rõ.** Chương viết về chính cuốn sách Pahl-Beitz, nên nguồn `[1]`
đậm là tự nhiên. Nhưng `[1]` một mình chiếm **32% toàn corpus**, nên "trích dày từ `[1]`" có thể vì nó
đúng, cũng có thể chỉ vì nó dài — điều này đã được khai báo ở Ch01. Ràng buộc đặt ra ở P3 là *mọi khẳng
định về hiệu quả phải có nguồn ngoài `[1]`*; P6 đã bắc sang `[45]` `[47]` `[50]`, **nhưng cả ba đều
thuộc Nhóm E — tuyến ICDM, Hari & Weiss.** Chương nay nói đúng điều đó: chúng là **một** tuyến đối chứng,
không phải ba nguồn độc lập. Corpus không có nguồn ngoài tuyến ICDM nào đo mệnh đề chi phí khoá sớm.

### Một chỉ số của chính tôi bị hỏng, ghi lại

Bảng đầu tiên báo **Ch18 có nguồn `[5]` chiếm 100%**, nghe như một chương chỉ dựa vào một nguồn. Kiểm ra:
`[5]` ở Ch18 **không phải trích dẫn** — đó là chương đang báo cáo rằng *nguồn `[5]` chưa cụm nào chạm tới*,
nằm trong mục **những gì cuốn sách này không trả lời được**.

Phép đo của tôi gộp *nhắc số hiệu nguồn* với *trích dẫn nguồn*. Ch18 là chương tổng hợp, ít trích dẫn là
đúng thiết kế. **Không phải lỗi của sách, là lỗi của thước.**

---

## Chương nặng suy luận nhất — nơi khai báo phải mạnh nhất

| Chương | Lượt khai báo | Ghi chú |
|---|---|---|
| Ch16 | **15** | Bảng ánh xạ công cụ → tầng đòn bẩy: **1 ô có căn cứ nguồn / 13 ô suy luận của tác giả**, in trong thân bài |
| Ch11 | 6 | Mọi phép nhân minh hoạ đều dán nhãn *của tác giả*, kể cả trong sơ đồ |
| Ch08 · Ch17 | 4 | |

**Bốn chương không khai báo lần nào: Ch04, Ch05, Ch07, Ch12.** Đã kiểm tay: Ch04, Ch05, Ch07 là ba chương
tường thuật tiêu chuẩn, phần suy luận của tác giả ít và đã nằm trong văn cảnh rõ. **Ch12 thì khác** — nó
chứa phép phân biệt trung tâm *"không mô tả đúng ≠ vô dụng"*, và phép phân biệt ấy là của cuốn sách chứ
không của nguồn nào. **Việc cho P8/M1: thêm một câu khai báo ở Ch12.** Không chặn xuất bản, nhưng nó là
đúng lớp lỗi mà cả cuốn sách đang buộc tội người khác.

---

## Cổng an ninh

**S-01 ký 20/08** — 66 nguồn công khai. **S-02 ký 21/08** — 18/18 mục *Áp dụng ở Xưởng*, **78.099 ký tự
quét bằng nội dung, 0 lượt khớp thật**, một dương tính giả đã biết (`EGO DEFENSE`).

**Cổng được kiểm bằng đột biến trước khi ký: bắt 6/6.** Tiêm mã sản phẩm, từ khoá lĩnh vực, tên đơn vị,
ngữ cảnh người dùng, số liệu vận hành, thương hiệu — mỗi loại vào một mục khác nhau.

---

## Sáu cổng, trạng thái cuối

| Cổng | Kiểm gì | Kết quả | Đã kiểm đột biến |
|---|---|---|---|
| `p5_gate.py` | 15 luật cắt ngang | 0 đỏ, 0 vàng | 7/7 |
| `verify_quotes.py` | mọi đoạn trích | 0 bịa | — (chạy toàn bộ, không lấy mẫu) |
| `sec_gate.py` | rò rỉ định danh | 0 lượt thật | 6/6 |
| `contradict.py` | sách tự mâu thuẫn | 0 cặp | 1/1 |
| `crosslink.py` | toàn vẹn phân nhà | 11/11 | — |
| `audit.py` | gốc gác nội dung | 9,4% chữ nguồn | — (một chỉ số hỏng, đã ghi ở trên) |

**Chạy lại toàn bộ sau mọi lần sửa bản thảo.** Mọi chữ ký ở đây gắn với nội dung tại thời điểm quét.

---

## Đánh giá IP — ba mức

**SAFE — 17/18 chương.** Nội dung là tổng hợp học thuật từ nguồn công khai, cộng văn của tác giả. Không
định danh Xưởng, không số liệu vận hành, không tài liệu nội bộ.

**REVIEW — mục *Áp dụng ở Xưởng*, cả 18 mục.** Sạch định danh, nhưng chúng mô tả **cách một xưởng ra
quyết định**. Không phải bí mật, nhưng là thứ CEO nên đọc qua trước khi bản thảo đi ra ngoài.

**SENSITIVE — không có.**

### Cổng còn chưa mở: P8

Nếu tạo notebook NotebookLM từ bản thảo, **toàn bộ 18 mục *Áp dụng ở Xưởng* lên máy chủ Google.** Chúng
đã sạch định danh, nhưng chữ ký S-02 nói *"không có định danh"* — nó **không** nói *"đưa lên đám mây thì
không sao"*. Đó là quyết định phơi nhiễm riêng, phải hỏi CEO, không suy ra từ S-02.

Nếu CEO muốn chạy P8 mà không muốn phơi nhiễm: dựng `book-public.md` bỏ 18 mục *Áp dụng ở Xưởng*, mất
khoảng 78.000 ký tự và giữ nguyên toàn bộ lập luận — cuốn `icdm-hari-weiss` đã làm đúng cách này.
