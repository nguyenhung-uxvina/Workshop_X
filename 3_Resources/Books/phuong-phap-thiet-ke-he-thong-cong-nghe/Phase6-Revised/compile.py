# -*- coding: utf-8 -*-
"""Ghép 18 chương thành book.md — và ghi lại CHÍNH XÁC cái gì bị bỏ ra."""
import os, re, sys, glob

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
B = "D:/Workshop_X/3_Resources/Books/phuong-phap-thiet-ke-he-thong-cong-nghe"

PARTS = {
    1: ("Phần I — Canh bạc", (1, 2),
        "Không quy trình nào chạy như trên giấy. Câu hỏi không phải vì sao, mà là: "
        "cái gì đã được đặt cược mà không ai viết ra?"),
    2: ("Phần II — Bốn thế hệ", (3, 8),
        "Mỗi thế hệ mở rộng thế hệ trước ở đúng chỗ nó gãy — và đặt một canh bạc mới ở chỗ khác."),
    3: ("Phần III — Công cụ, và điều chúng lặng lẽ đòi hỏi", (9, 11),
        "Một công cụ không bao giờ chỉ là một công cụ. Nó là một yêu cầu gửi tới tổ chức, "
        "viết bằng mực vô hình."),
    4: ("Phần IV — Mặt tiếp giáp", (12, 14),
        "Đây là chỗ cuốn sách thôi mô tả và bắt đầu chất vấn. Không phương pháp nào ở Phần II sai. "
        "Tất cả đều không đủ."),
    5: ("Phần V — Tầng đòn bẩy", (15, 17),
        "Đến đây cuốn sách mượn một lăng kính từ ngoài ngành. Mượn thì phải khai — "
        "và phải trả lại đúng chỗ."),
    6: ("Phần VI — Kết", (18, 18),
        "Không phải chọn phương pháp tốt nhất. Là chọn phương pháp mà tổ chức mình đang có nuôi nổi."),
}

files = {int(os.path.basename(f)[2:4]): f
         for f in glob.glob(B + "/Phase6-Revised/Ch[0-9][0-9]_*.md")}
assert len(files) == 18, "thiếu chương: %s" % sorted(set(range(1, 19)) - set(files))

out, dropped, kept_q = [], [], 0
out.append("# Phương pháp thiết kế hệ thống công nghệ\n")
out.append("*Canh bạc tổ chức — từ Pahl-Beitz đến hệ thống thực-ảo, soi bằng thang đòn bẩy*\n")
out.append("\nBản thảo M1 · 2026-08-21 · 18 chương, 6 phần\n\n---\n")

for pn in sorted(PARTS):
    title, (lo, hi), epi = PARTS[pn]
    out.append("\n\n# %s\n\n> *%s*\n" % (title, epi))
    for n in range(lo, hi + 1):
        t = open(files[n], encoding="utf-8").read()
        # Sổ kiểm là công cụ nội bộ của P4/P5 — không thuộc bản in.
        i = t.find("## Sổ kiểm của chương")
        if i > 0:
            dropped.append((n, len(t) - i, t[i:].count("\n")))
            t = t[:i]
        t = t.rstrip().rstrip("-").rstrip()
        kept_q += len(re.findall(r'`"', t)) // 2
        out.append("\n\n" + t + "\n")

book = "".join(out)
p = B + "/book.md"
open(p + ".tmp", "w", encoding="utf-8", newline="\n").write(book)
os.replace(p + ".tmp", p)

w = len(book.split())
print("book.md  %s ký tự · %s từ · %d dòng" % (format(len(book), ",d"), format(w, ",d"),
                                               book.count("\n") + 1))
print("sơ đồ mermaid: %d · đoạn trích giữ lại: %d" % (len(re.findall(r"```mermaid", book)), kept_q))
print("\nBỎ RA KHỎI BẢN IN — %d mục 'Sổ kiểm của chương', %s ký tự, %d dòng:"
      % (len(dropped), format(sum(d[1] for d in dropped), ",d"), sum(d[2] for d in dropped)))
print("  (đây là công cụ nội bộ của P4/P5 — nơi mỗi chương tự khai con số nào đã bỏ,")
print("   chỗ nào là suy luận. Giữ nguyên trong Phase4-Chapters, không in.)")

# kiểm cân bằng fence mermaid — lỗi ghép hay gặp
fences = len(re.findall(r"^```", book, re.M))
print("\nfence ``` tổng: %d — %s" % (fences, "CÂN BẰNG" if fences % 2 == 0 else "!! LẺ, có fence chưa đóng"))
h1 = re.findall(r"^# (.+)$", book, re.M)
print("tiêu đề cấp 1: %d  (1 tên sách + 6 phần + 18 chương = 25)" % len(h1))
