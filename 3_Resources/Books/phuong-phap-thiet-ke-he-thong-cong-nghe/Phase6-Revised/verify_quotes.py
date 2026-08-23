# -*- coding: utf-8 -*-
"""Đối chiếu MỌI đoạn trích nguyên văn trong 18 chương với vật liệu khai thác P1.

Lấy mẫu thì bỏ lọt. Chạy hết thì không.
Một câu "nguyên văn" không tìm được trong nguồn nghĩa là nó đã bị bịa hoặc bị sửa —
và đó là lỗi nặng nhất mà cuốn sách này có thể mắc, vì nó phá đúng cái luật nó đặt ra.
"""
import os, re, sys, glob, unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
B = "D:/Workshop_X/3_Resources/Books/phuong-phap-thiet-ke-he-thong-cong-nghe"

# ── nạp toàn bộ vật liệu nguồn thành một khối ────────────────────────────────
src = []
for f in glob.glob(B + "/Phase1-Exploration/*.md"):
    src.append((os.path.basename(f), open(f, encoding="utf-8").read()))
# thêm toàn văn PDF Pahl-Beitz nếu đã trích ra (Q1 dùng nó)
if os.path.exists("D:/tmp/nb7/pb.txt"):
    src.append(("pb.txt (toàn văn Pahl-Beitz)", open("D:/tmp/nb7/pb.txt", encoding="utf-8", errors="replace").read()))


def norm(s):
    """Chuẩn hoá để so khớp: nháy cong -> thẳng, gộp khoảng trắng, bỏ dấu nối cuối dòng."""
    s = unicodedata.normalize("NFC", s)
    for a, b in [("\u2019", "'"), ("\u2018", "'"), ("\u201c", '"'), ("\u201d", '"'),
                 ("\u2013", "-"), ("\u2014", "-"), ("\u2212", "-"), ("\u00a0", " ")]:
        s = s.replace(a, b)
    s = re.sub(r"\n\s*>\s*", " ", s)     # dấu blockquote xen vào giữa câu trích khi xuống dòng
    s = re.sub(r"-\s*\n\s*", "", s)      # từ bị ngắt dòng bằng dấu nối
    s = re.sub(r"\s*-\s*", "-", s)      # PDF tách chữ kiểu "Requirement -Functional"
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"\s*\.\.\.\s*", " ", s)  # dấu lược trong trích dẫn
    s = s.replace("*", "")               # nhấn mạnh markdown lọt vào trong trích
    return s.lower()


SRC = [(n, norm(t)) for n, t in src]
print("Khối nguồn: %d tệp, %s ký tự đã chuẩn hoá"
      % (len(SRC), format(sum(len(t) for _, t in SRC), ",d")))

# ── rút mọi đoạn trích: `"..."` trong backtick ───────────────────────────────
Q = re.compile(r'`"([^"`]{25,})"`')
rows = []
stubs = 0
for f in sorted(glob.glob(B + "/Phase6-Revised/Ch[0-9][0-9]_*.md")):
    ch = os.path.basename(f)[:4]
    t = open(f, encoding="utf-8").read()
    body = t[: t.find("## Sổ kiểm của chương")] if "## Sổ kiểm của chương" in t else t
    for m in Q.finditer(body):
        q = m.group(1).strip()
        # Hợp đồng P4 yêu cầu Sổ kiểm ghi "3 chữ đầu của câu trích" -> cuống có dấu lược.
        # Cuống không phải trích dẫn, không kiểm được, và không xuất hiện trong bản in.
        core = q.strip("….… ").strip()
        if "…" in q and len(core) < 40:
            stubs += 1
            continue
        line = body[: m.start()].count("\n") + 1
        rows.append((ch, line, core if core else q))

print("Đoạn trích rút được: %d\n" % len(rows))

found, missing, partial = [], [], []
for ch, line, q in rows:
    nq = norm(q)
    hit = next((n for n, t in SRC if nq in t), None)
    if hit:
        found.append((ch, line, q, hit))
        continue
    # thử khớp một phần: 12 từ đầu, rồi 8 từ đầu — bắt trường hợp bị cắt/ghép
    ws = nq.split()
    got = None
    for k in (12, 8):
        if len(ws) >= k:
            frag = " ".join(ws[:k])
            got = next((n for n, t in SRC if frag in t), None)
            if got:
                partial.append((ch, line, q, got, k))
                break
    if not got:
        missing.append((ch, line, q))

n = len(rows)
print("=" * 80)
print("KHỚP TOÀN PHẦN : %4d / %d  (%.1f%%)" % (len(found), n, 100.0 * len(found) / max(n, 1)))
print("KHỚP MỘT PHẦN  : %4d          (đầu câu khớp, phần sau lệch — kiểm tay)" % len(partial))
print("KHÔNG TÌM THẤY : %4d          <-- mỗi dòng là một CRITICAL" % len(missing))
print("=" * 80)

if partial:
    print("\n--- KHỚP MỘT PHẦN ---")
    for ch, line, q, hit, k in partial[:25]:
        print("  %s:%d  [%d từ đầu khớp %s]\n      %s" % (ch, line, k, hit, q[:120]))
if missing:
    print("\n--- KHÔNG TÌM THẤY ---")
    for ch, line, q in missing[:40]:
        print("  %s:%d\n      %s" % (ch, line, q[:150]))

# phân bố theo chương
print("\n--- theo chương ---")
from collections import Counter
tot = Counter(c for c, _, _ in rows)
bad = Counter(c for c, _, _ in missing)
par = Counter(c for c, _, _, _, _ in partial)
for c in sorted(tot):
    print("  %s  trích %3d · thiếu %2d · một phần %2d" % (c, tot[c], bad[c], par[c]))

sys.exit(1 if missing else 0)
