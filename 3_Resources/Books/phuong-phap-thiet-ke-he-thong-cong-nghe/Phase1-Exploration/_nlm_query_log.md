# Nhật ký truy vấn NLM — P1

Ngày: 2026-08-20 · 8 cụm · 28 truy vấn chính + 3 vét + 5 xuyên suốt + 1 chạy lại = 37 · 4 luồng song song · timeout 420s

| cụm | notebook | nguồn khoanh | q | loại | ký tự trả về | trạng thái |
|---|---|---|---|---|---|---|
| SYNTH | dmir | 0 | q9 | xuyên suốt (tổng hợp) | 15,129 | OK |
| SYNTH | pahlbeitz | 0 | q9 | xuyên suốt (tổng hợp) | 16,620 | OK |
| SYNTH | systems | 0 | q9 | xuyên suốt (tổng hợp) | 19,214 | OK |
| SYNTH | vdi2206 | 0 | q9 | xuyên suốt (tổng hợp) | 9,970 | OK |
| SYNTH | vdi2221-res | 0 | q9 | xuyên suốt (tổng hợp) | 12,989 | OK |
| c1-nen-mong-pahl-beitz | pahlbeitz | 6 | q2 | methodology chi tiết | 10,241 | OK |
| c1-nen-mong-pahl-beitz | systems | 1 | q1 | luận điểm/framework/bằng chứng | 13,568 | OK |
| c1-nen-mong-pahl-beitz | systems | 1 | q2 | methodology chi tiết | 19,993 | OK |
| c1-nen-mong-pahl-beitz | systems | 1 | q3 | phê bình/giới hạn/thất bại | 21,503 | OK |
| c2-vdi2221-1986-2019 | vdi2221-res | 11 | q1 | luận điểm/framework/bằng chứng | 17,090 | OK |
| c2-vdi2221-1986-2019 | vdi2221-res | 11 | q2 | methodology chi tiết | 21,594 | OK |
| c2-vdi2221-1986-2019 | vdi2221-res | 11 | q3 | phê bình/giới hạn/thất bại | 18,917 | OK |
| c2-vdi2221-1986-2019 | vdi2221-res | 11 | q4 | vét nguồn chưa nổi | 7,451 | OK |
| c3-vdi2206-vmodel-cps | vdi2206 | 11 | q1 | luận điểm/framework/bằng chứng | 12,102 | OK |
| c3-vdi2206-vmodel-cps | vdi2206 | 11 | q2 | methodology chi tiết | 11,695 | OK |
| c3-vdi2206-vmodel-cps | vdi2206 | 11 | q3 | phê bình/giới hạn/thất bại | 10,286 | OK |
| c3-vdi2206-vmodel-cps | vdi2206 | 11 | q4 | vét nguồn chưa nổi | 6,705 | OK |
| c4-sinh-giai-phap | pahlbeitz | 4 | q1 | luận điểm/framework/bằng chứng | 18,113 | OK |
| c4-sinh-giai-phap | pahlbeitz | 4 | q2 | methodology chi tiết | 13,718 | OK |
| c4-sinh-giai-phap | pahlbeitz | 4 | q3 | phê bình/giới hạn/thất bại | 16,725 | OK |
| c4-sinh-giai-phap | vdi2221-pp | 1 | q2 | methodology chi tiết | 11,621 | OK |
| c5-danh-gia-chon | icdm | 5 | q2 | methodology chi tiết | 19,212 | OK |
| c5-danh-gia-chon | pahlbeitz | 2 | q1 | luận điểm/framework/bằng chứng | 13,503 | OK |
| c5-danh-gia-chon | pahlbeitz | 2 | q2 | methodology chi tiết | 16,288 | OK |
| c5-danh-gia-chon | pahlbeitz | 2 | q3 | phê bình/giới hạn/thất bại | 7,763 | OK |
| c6-icdm-ban-mo-rong | icdm | 15 | q1 | luận điểm/framework/bằng chứng | 9,505 | OK |
| c6-icdm-ban-mo-rong | icdm | 15 | q2 | methodology chi tiết | 19,622 | OK |
| c6-icdm-ban-mo-rong | icdm | 15 | q3 | phê bình/giới hạn/thất bại | 18,407 | OK |
| c6-icdm-ban-mo-rong | icdm | 15 | q4 | vét nguồn chưa nổi | 21,313 | OK |
| c7-doi-chieu-phe-binh | pahlbeitz | 4 | q1 | luận điểm/framework/bằng chứng | 18,294 | OK |
| c7-doi-chieu-phe-binh | pahlbeitz | 4 | q2 | methodology chi tiết | 16,704 | OK |
| c7-doi-chieu-phe-binh | pahlbeitz | 4 | q3 | phê bình/giới hạn/thất bại | 17,657 | OK |
| c7-doi-chieu-phe-binh | vdi2221-res | 2 | q2 | methodology chi tiết | 17,182 | OK |
| c8-lang-kinh-he-thong | dmir | 8 | q1 | luận điểm/framework/bằng chứng | 14,664 | OK |
| c8-lang-kinh-he-thong | dmir | 8 | q2 | methodology chi tiết | 35,681 | OK |
| c8-lang-kinh-he-thong | dmir | 8 | q3 | phê bình/giới hạn/thất bại | 17,176 | OK |

**Tổng: 568,215 ký tự trả lời · 36 OK · 0 hỏng.**

## Ba sự cố vận hành trong vòng này

**1. Khoanh nguồn giết notebook một-nguồn.** Truyền `-s` liệt kê đúng toàn bộ nguồn của notebook chỉ có
1 nguồn → `INVALID_ARGUMENT`, lặp lại được cả hai lần. Thông báo lỗi gợi ý sai hướng ("account-level
restrictions … try re-authenticating") trong khi xác thực hoàn toàn bình thường. Bỏ cờ `-s` là chạy.

**2. Hai lỗi im lặng trong chính bộ điều phối, cả hai đều làm hỏng toàn bộ 28 truy vấn mà không báo lỗi.**
Lần một: Python trên Windows ghi danh sách việc với `
`, nên `case "$k" in 1)` không khớp `1␍`, hàm sinh
câu hỏi trả chuỗi rỗng, NLM nhận truy vấn trống và trả `"Please provide a question to ask."` — **28/28 tệp
đúng 76 byte**. Lần hai: tab là ký tự khoảng trắng nên `read` **gộp hai tab liền nhau**, làm lệch mọi trường
khi cột nguồn rỗng; bắt được bằng chạy khô 1 dòng trước khi phóng, sửa bằng ký tự thay chỗ `-`.

> Luật rút ra: **chạy khô một tác vụ và in ra từng trường trước khi phóng cả lô.** Cả hai lỗi đều không
> làm chương trình dừng — chúng chỉ làm kết quả rỗng, mà kết quả rỗng trông y hệt "nguồn không có gì".

**3. NLM bịa cả hành động.** Câu trả lời khám phá của notebook D-M-I-R mở đầu bằng *"Tôi đã xây dựng và
xuất bản bản đồ cấu trúc … dưới dạng tệp `structural-map-dmir.md` hiển thị trong bảng Studio của bạn."*
Kiểm bằng `nlm note list`: **không có ghi chú nào trong notebook**. Trước nay sổ chỉ ghi nhận NLM sai số
và sai ngày; đây là kiểu bịa mới — bịa việc nó đã làm. Hệ quả: luật "notebook nguồn chỉ đọc" phải kiểm
từ ngoài, không đọc trong câu trả lời.
