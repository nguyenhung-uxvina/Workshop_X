# Notebook nguồn — 7 notebook, CHỈ ĐỌC

Ngày hợp nhất: 2026-08-20

| Notebook | ID | Nguồn thô | Vào phạm vi |
|---|---|---|---|
| Thiết kế Kỹ thuật: Tiếp cận Hệ thống | `2b295bf1-a7a4-4bcf-bda3-9647ef2e1aae` | 1 | 1 |
| Research: VDI 2221 Systematic Design (1986→2019) | `f6e2b21f-8fdf-4d1d-aca0-d2dd5b2437a3` | 27 | 15 |
| Phương pháp Luận Thiết kế Kỹ thuật Cơ khí VDI 2221 | `390ae81b-ccd1-4a95-b3f8-5bb13f86de2b` | 1 | 1 |
| Research: VDI 2206 V-Model Mechatronic CPS | `3856a428-15ee-4634-971c-bddedd8a0e63` | 13 | 10 |
| Learning: Pahl-Beitz Full Mastery | `a7dbff9d-7b32-4573-8bb1-cb938ac38727` | 17 | 16 |
| Learn: ICDM — Hari & Weiss | `8416e6f8-5077-4f14-b4ac-8d0ff8f089e9` | 15 | 15 |
| Phân Tích Hệ Thống D-M-I-R Cho Lý Thuyết Điểm Hạn Chế | `bba354d7-48c6-4eee-8a5a-1e37ea539b0f` | 8 | 8 |
| **Cộng** | | **82** | **66** |

## Ba luật bắt buộc khi dùng vật liệu từ 7 notebook này

**1. Chỉ đọc.** Không thêm, không xoá, không đổi tên nguồn; không tạo ghi chú hay artifact Studio.
Kiểm việc này **từ ngoài** bằng `nlm note list` / `nlm source list` — **không** đọc trong câu trả lời của NLM,
vì NLM đã bịa ra rằng nó tạo tệp `structural-map-dmir.md` trong Studio khi không hề có (2026-08-20).

**2. Không tin `sources_used`.** Metadata xuất xứ bỏ sót **36%** số lượt (62/173 trên 37 truy vấn) trong vòng
này, và **47%** trong vòng ICDM trước đó. Khai báo nguồn phải suy từ **hợp** của metadata và tên file mà NLM
gọi đích danh trong thân bài. Bảng đối chiếu nằm cuối mỗi tệp `*_Exploration.md`.

**3. NLM không tất định.** Cùng câu hỏi nguyên văn, cùng phạm vi nguồn, hai vòng cho kết quả khác nhau —
vòng ICDM đã mất một loạt số liệu thật giữa hai vòng. Giữ mọi vòng, hợp lại. Muốn phủ ổn định thì **chạy lặp
và khoanh hẹp**, không phải hỏi sâu hơn: ở vòng này, 8 nguồn chỉ nổi lên khi bị khoanh riêng, trong đó có
nguồn lớn thứ hai toàn corpus.

## Notebook liên quan, KHÔNG trong phạm vi

- `5f5d4906-8175-4d76-a1f7-ec54ff87e470` — *Sách: Đo Thứ Chưa Tồn Tại — ICDM (bản đối ngoại)*, 17 nguồn.
  Đây là **đầu ra P8 của cuốn `icdm-hari-weiss` đã hoàn tất**, không phải nguồn. Truy vấn nó sẽ là đọc lại
  chính văn bản mình viết ra và tưởng là chứng cứ độc lập.


---

## Notebook ĐẦU RA của dự án này (P8) — 2026-08-21

| | |
|---|---|
| **Tên** | *Sách: Phương pháp thiết kế hệ thống công nghệ — canh bạc tổ chức* |
| **ID** | `44be9c06-bc81-4ba5-8304-86ea7daa33ad` |
| **Nguồn** | **20** — 18 chương + luận đề/độc giả + danh mục 66 nguồn |
| **Dung lượng** | 656.336 ký tự |
| **Nhãn** | **BẢN ĐẦY ĐỦ** — gồm cả 18 mục *Áp dụng ở Xưởng*. CEO chọn, xem S-03 trong bản kê |

**Chia theo chương, không nhồi cả cuốn vào một nguồn.** Một nguồn 618 KB làm mọi câu trả lời trỏ về cùng
một chỗ và mất hết khả năng truy nguồn. Chia 18 chương thì notebook trả lời được *"điều này ở chương nào"*.

**Đã gỡ khỏi gói nạp:** 18 mục *Sổ kiểm của chương*, 80.345 ký tự. Đó là giàn giáo nội bộ của P4/P5,
không có lý do gì để nó lên máy chủ Google.

### Ba phép kiểm sau khi nạp — không tin báo cáo của lệnh

Sổ dự án ghi rằng `source_add` từng **báo lỗi mà vẫn tạo vỏ rỗng 38 byte**. Nên "20/20 OK" không đủ.

1. **Đếm và đo từ ngoài:** 20/20 nguồn có mặt, nhỏ nhất 9.330 ký tự, **0 vỏ rỗng**.
2. **Truy vấn thử:** hỏi luận đề và ba neo → trả lời đúng nguyên văn luận đề, đúng ba neo, và chỉ đúng
   Ch13 là chương gánh luận đề. Notebook dùng được.
3. **Kiểm luật CHỈ ĐỌC từ ngoài:** cả bảy notebook nguồn giữ nguyên số nguồn (1/27/1/13/17/15/8) và
   **không notebook nào có ghi chú mới**. Kiểm bằng `nlm source list` và `nlm note list`, **không** đọc
   trong câu trả lời của NLM — vì chính NLM đã từng bịa ra rằng nó tạo một tệp Studio không hề tồn tại.
