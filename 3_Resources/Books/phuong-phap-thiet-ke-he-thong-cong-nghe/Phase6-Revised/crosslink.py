# -*- coding: utf-8 -*-
"""Kiểm tính toàn vẹn của việc PHÂN NHÀ giữa các chương.

Ba agent sửa song song, mỗi agent nhường/nhận khối bằng chứng cho agent khác. Một câu
"chi tiết ở Chương N" chỉ đúng nếu Chương N THẬT SỰ còn giữ khối đó. Nếu cả hai đầu cùng
cắt, bằng chứng biến mất khỏi sách mà không ai thấy — và không cổng nào hiện có bắt được,
vì mỗi cổng chỉ soi một chương.
"""
import os, re, sys, glob

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
B = os.environ.get("BOOK_DIR", "D:/Workshop_X/3_Resources/Books/phuong-phap-thiet-ke-he-thong-cong-nghe")

chs = {}
for f in sorted(glob.glob(B + "/Phase6-Revised/Ch[0-9][0-9]_*.md")):
    chs[os.path.basename(f)[:4]] = open(f, encoding="utf-8").read()

# (chương trỏ đi, chương nhà, tên khối, dấu hiệu phải CÒN ở chương nhà)
CLAIMS = [
    ("Ch03", "Ch02", "sFBS 87/235 bước, 46 phiên thiết kế", [r"\b87\b", r"\b235\b", r"46 (?:phiên|design)"]),
    ("Ch12", "Ch02", "phép thử sFBS + kết luận incomplete", [r"\b87\b", r"incomplete"]),
    ("Ch02", "Ch03", "năm câu tự thú của Pahl-Beitz", [r"not always possible to draw up a strict plan"]),
    ("Ch06", "Ch03", "câu phủ nhận kế hoạch chặt", [r"not always possible to draw up a strict plan"]),
    ("Ch05", "Ch04", "phả hệ 1954/1965/1973 + Weissdruck", [r"195[0-9]", r"197[0-9]", r"Wei(?:ß|ss)druck"]),
    ("Ch07", "Ch06", "bốn pha bản 2004 + Haberfellner", [r"Haberfellner", r"2004"]),
    ("Ch09", "Ch11", "khối nổ tổ hợp", [r"57[.,]?238[.,]?272|10[.,]000[.,]000[.,]000|nổ tổ hợp"]),
    ("Ch10", "Ch11", "khối DSO", [r"\bDSO\b"]),
    ("Ch10", "Ch11", "mâu thuẫn 75%/80% chi phí vòng đời", [r"75\s?%", r"80\s?%"]),
    ("Ch11", "Ch09", "chứng cứ hàng không độc lập", [r"độc lập|independen"]),
    ("Ch11", "Ch08", "power and pressure", [r"power (?:and|,) pressure|personal influence"]),
]

bad, ok = [], 0
for src, home, name, pats in CLAIMS:
    if src not in chs or home not in chs:
        bad.append("THIẾU CHƯƠNG: %s hoặc %s" % (src, home))
        continue
    t = chs[home]
    miss = [p for p in pats if not re.search(p, t, re.I)]
    if miss:
        bad.append("%s trỏ sang %s cho %r — nhưng %s KHÔNG còn: %s"
                   % (src, home, name, home, "; ".join(miss)))
    else:
        ok += 1

# quét mọi câu trỏ chương để không bỏ sót cặp chưa khai
POINT = re.compile(r"(?:xem|chi tiết ở|đã (?:dựng|trình bày|nêu) ở|trỏ (?:sang|về)|Chương)\s*(\d{2})", re.I)
pairs = set()
for c, t in chs.items():
    body = t[: t.find("## Sổ kiểm của chương")] if "## Sổ kiểm của chương" in t else t
    for m in POINT.finditer(body):
        tgt = "Ch" + m.group(1)
        if tgt in chs and tgt != c:
            pairs.add((c, tgt))
known = {(s, h) for s, h, _, _ in CLAIMS}
print("Cặp trỏ-chương xuất hiện trong bản thảo: %d" % len(pairs))
print("Cặp đã khai trong bảng phân nhà        : %d" % len(known & pairs))
print("Cặp CHƯA khai (chỉ là tham chiếu thường, không nhất thiết là lỗi): %d" % len(pairs - known))

print("\n" + "=" * 78)
print("Khối phân nhà kiểm được : %d" % (ok + len(bad)))
print("ĐẠT                     : %d" % ok)
print("HỎNG                    : %d" % len(bad))
for b in bad:
    print("   !! " + b)
print("=" * 78)
sys.exit(1 if bad else 0)
