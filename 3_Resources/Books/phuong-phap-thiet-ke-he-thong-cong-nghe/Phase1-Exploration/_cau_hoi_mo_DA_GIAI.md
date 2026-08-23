# Câu hỏi mở — kết quả kiểm chứng

Ngày: 2026-08-20 · Hai câu chặn Ch03 và Ch07 đã giải trước khi viết, đúng ràng buộc ghi ở `Phase3-Outline.md`.

---

## Q1 — Pha cụ thể hoá của Pahl-Beitz có phải 15 bước? ✅ GIẢI XONG

**Cách kiểm:** không hỏi lại NLM. Mở **toàn văn PDF bản 3** có sẵn trong vault
(`3_Resources/Books & Articles/Systems Thinking/engineering-design-a-systematic-approach.pdf`,
10.385.478 byte), trích ra 1.182.358 ký tự văn bản, đọc trực tiếp mục **7.1 Steps of Embodiment Design**
(trang 227–232).

**Kết quả — ba tầng, và tầng ba mới là thứ đáng viết:**

**1. Danh sách đúng là 15 mục.** Đánh số liên tục từ `1.` đến `15.`, mục 15 là
*"Fix the definitive layout and pass on to the detail design phase."*

**2. Sách không bao giờ tự viết ra con số.** Đếm trên toàn văn 1,18 triệu ký tự:

| Chuỗi tìm | Số lần xuất hiện |
|---|---|
| `fifteen` | **0** |
| `fifteen steps` | **0** |
| `15 steps` | **0** |

Đúng như NLM đã trả lời *"không có trong nguồn"* — và đúng lớp bẫy đã suýt làm hỏng cuốn ICDM ba lần:
văn bản liệt kê đủ, người đọc điền con số vào giúp, rồi trích như thể sách nói vậy.

**3. Và đây là tầng quan trọng nhất — sách PHỦ NHẬN đó là một quy trình, ngay ở câu liền trước danh sách:**

> `"Because of this, it is not always possible to draw up a strict plan for the embodiment design phase.
> However, it is possible to suggest a general approach with main working steps, see Figure 7.1."`

Hai câu bổ trợ, một trước một sau danh sách:

> `"Unlike conceptual design, embodiment design involves a large number of corrective steps in which
> analysis and synthesis constantly alternate and complement each other."`

> `"In the embodiment phase, unlike the conceptual phase, it is not necessary to lay down special methods
> for every individual step, however the following recommendations might prove useful."`

**Luật cho Ch03:**
- Được viết *"mười lăm bước công tác chính"*, **bắt buộc** kèm nguyên văn câu phủ nhận
  *"not always possible to draw up a strict plan"*.
- **Cấm** viết *"quy trình 15 bước của Pahl-Beitz"* — mâu thuẫn thẳng với đoạn liền trước danh sách.

**Và đây là bằng chứng nội tại mạnh nhất cho luận đề của cả cuốn sách.** Nguồn quy định nhất trong toàn
corpus, ở đúng chỗ người ta hay trích như một quy trình bắt buộc, lại tự nói rằng không thể lập kế hoạch
chặt cho pha này. Cái được đọc thành quy trình vốn được viết ra như một gợi ý. **Chuyển thẳng vào Ch03
và nhắc lại ở Ch12.**

---

## Q2 — Con số 58%–90% đo trong điều kiện nào? ✅ GIẢI XONG (sau khi CEO đăng nhập lại NLM)

**Nguồn:** `[18]` — *(PDF) V-MODELS FOR INTERDISCIPLINARY SYSTEMS ENGINEERING*. Truy tiếp bằng một truy
vấn khoanh đúng một nguồn.

### Đoạn văn đầy đủ — và chỗ trích dẫn có thể xuyên tạc nguồn

> `"The new, user-centered climatization system is evaluated with regard to nine requirement categories:
> thermal comfort, safety, cost, air quality, acoustics, user interaction, environmental impact, vehicle
> integration and energy. **The prototypical implementation of the new design slightly outperforms
> state-of-the-art air conditioning.** Most noteworthy is the energy aspect: in the experiments the novel
> cabin climate control system decreased the electrical energy demand by 58% to 90%. The new climatization
> system also offers benefits in other functional aspects, including air quality, acoustics and usability.
> **Challenges include the cost, size and mass of the prototypical design.**"`

**Chính bài báo mô tả kết quả tổng thể là *"slightly outperforms"* — nhỉnh hơn đôi chút.** Con số 58–90%
là **một** trong chín hạng mục yêu cầu. Trích riêng "58–90%" mà bỏ chữ *slightly* và bỏ câu về chi phí,
kích thước, khối lượng thì **xuyên tạc nguồn**, dù mỗi chữ trích ra đều đúng nguyên văn.

### Điều kiện thí nghiệm

| Mục | Kết quả |
|---|---|
| Chạy trên gì | **Phần cứng thật** — `"It is prototypically implemented into the research vehicle."` |
| Mốc so sánh | Điều hoà hiện đại nhất đương thời (*state-of-the-art air conditioning*) |
| Cỡ mẫu | **1 xe nghiên cứu, 4 người dùng đại diện** — `"applied to a research vehicle and four representative users."` |
| Số lần đo / kịch bản | **không có trong nguồn** |
| Điều kiện biên (nhiệt độ, tải, thời lượng) | **không có trong nguồn** |
| Người thực hiện | Luận án Thomas Hirn, 8/2025 |

**Luật cho Ch07 — dùng được, nhưng ba ràng buộc:**
1. Nêu đại lượng đích danh: **nhu cầu năng lượng điện**, không viết "cải thiện".
2. **Bắt buộc kèm** chữ *slightly outperforms* và cỡ mẫu **n = 1 xe, 4 người**. Bỏ một trong hai là xuyên tạc.
3. Là giai thoại minh hoạ, **không phải luận cứ chịu lực**. Ch07 đứng được nếu bỏ hẳn.

### Ghi thêm — KHU-01 tái xuất trong chính truy vấn này

Câu trả lời kết thúc bằng *"Tôi có thể phân tích sâu hơn **cho bạn** … để **bạn** hình dung…"*. Xác nhận
KHU-01 là **hành vi hệ thống**, không phải sự cố một lần. Mọi truy vấn NLM từ nay phải khử trước khi
nhập vào vật liệu.
