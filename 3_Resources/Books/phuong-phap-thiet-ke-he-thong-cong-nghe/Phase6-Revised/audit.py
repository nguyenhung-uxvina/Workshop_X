# -*- coding: utf-8 -*-
"""P7 — kiểm IP bằng phép đo.

Ba câu hỏi đo được:
  1. Bao nhiêu phần cuốn sách là chữ của nguồn, bao nhiêu là chữ của tác giả?
  2. Chương nào lệch về một nguồn duy nhất? (rủi ro R3 — nguồn [1] chiếm 32% corpus)
  3. Chương nào nặng suy luận của tác giả nhất? (chỗ cần khai báo mạnh nhất)
"""
import os, re, sys, glob, json
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
B = "D:/Workshop_X/3_Resources/Books/phuong-phap-thiet-ke-he-thong-cong-nghe"

Q = re.compile(r'`"([^"`]{15,})"`')
CITE = re.compile(r"\[(\d{1,2})\]")
INFER = re.compile(r"suy luận của tác giả|thao tác của (?:cuốn )?sách|của người viết|"
                   r"minh hoạ của tác giả|cách trình bày của sách|phép chia .{0,20}của cuốn sách", re.I)

rows = []
for f in sorted(glob.glob(B + "/Phase6-Revised/Ch[0-9][0-9]_*.md")):
    ch = os.path.basename(f)[:4]
    t = open(f, encoding="utf-8").read()
    body = t[: t.find("## Sổ kiểm của chương")] if "## Sổ kiểm của chương" in t else t
    qs = Q.findall(body)
    qw = sum(len(q.split()) for q in qs)
    tw = len(body.split())
    cites = Counter(CITE.findall(body))
    top = cites.most_common(1)[0] if cites else ("—", 0)
    rows.append({
        "ch": ch, "words": tw, "quotes": len(qs), "qwords": qw,
        "qpct": 100.0 * qw / max(tw, 1),
        "srcs": len(cites), "top": top[0], "toppct": 100.0 * top[1] / max(sum(cites.values()), 1),
        "s1": 100.0 * cites.get("1", 0) / max(sum(cites.values()), 1),
        "infer": len(INFER.findall(body)),
    })

print("%-6s %7s %6s %7s %6s %-10s %8s %7s" %
      ("ch", "từ", "trích", "%chữ nguồn", "nguồn", "nguồn đậm", "%[1]", "khai suy luận"))
print("-" * 78)
for r in rows:
    flag = "!!" if r["qpct"] > 20 or r["toppct"] > 45 else "  "
    print("%s %-4s %7s %6d %9.1f%% %6d  [%-3s]%5.0f%% %6.0f%% %7d" %
          (flag, r["ch"], format(r["words"], ","), r["quotes"], r["qpct"], r["srcs"],
           r["top"], r["toppct"], r["s1"], r["infer"]))

tw = sum(r["words"] for r in rows); qw = sum(r["qwords"] for r in rows)
print("-" * 78)
print("TỔNG  %s từ · %d đoạn trích · chữ của nguồn %.1f%% · chữ của tác giả %.1f%%"
      % (format(tw, ","), sum(r["quotes"] for r in rows), 100.0 * qw / tw, 100 - 100.0 * qw / tw))
print("Khai báo 'đây là suy luận/thao tác của sách': %d lượt, %d/18 chương"
      % (sum(r["infer"] for r in rows), sum(1 for r in rows if r["infer"])))

print("\n--- rủi ro R3: chương lệch về một nguồn ---")
for r in sorted(rows, key=lambda x: -x["toppct"])[:5]:
    print("  %s nguồn [%s] chiếm %.0f%% số lượt trích dẫn của chương" % (r["ch"], r["top"], r["toppct"]))
print("\n--- chương nặng suy luận nhất (cần khai báo mạnh nhất) ---")
for r in sorted(rows, key=lambda x: -x["infer"])[:5]:
    print("  %s — %d lượt khai báo trên %s từ" % (r["ch"], r["infer"], format(r["words"], ",")))
print("\n--- chương KHÔNG khai báo lần nào (kiểm tay) ---")
z = [r["ch"] for r in rows if r["infer"] == 0]
print("  " + (", ".join(z) if z else "không có — cả 18 chương đều có ít nhất một khai báo"))
