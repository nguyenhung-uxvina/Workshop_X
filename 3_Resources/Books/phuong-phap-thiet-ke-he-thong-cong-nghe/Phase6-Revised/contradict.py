# -*- coding: utf-8 -*-
"""Bắt sách tự mâu thuẫn: chương này nói "không có trong nguồn", chương kia dùng như sự thật.

Ý tưởng từ agent phản biện Ch07-12. Điểm mấu chốt: bằng chứng để bắt lớp lỗi này ĐÃ nằm
sẵn trong bản thảo. Cái thiếu không phải cảm biến mới mà là phép đối chiếu chéo.

Phép kiểm chỉ soi CẶP phủ định–khẳng định về CÙNG một đối tượng, nên gần như không sinh
dương tính giả — khác hẳn phép kiểm "mọi con số phải có nguyên văn" vốn kêu oan 90%.
"""
import os, re, sys, glob
from collections import defaultdict

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
B = os.environ.get("BOOK_DIR", "D:/Workshop_X/3_Resources/Books/phuong-phap-thiet-ke-he-thong-cong-nghe")

NUMWORD = r"(?:hai|ba|bốn|năm|sáu|bảy|tám|chín|mười|mười một|mười hai|mười lăm|\d{1,3})"
# câu phủ nhận một PHÉP ĐẾM
NEG = re.compile(
    # "không nguồn nào ĐẾM" hiếm khi liền nhau — thực tế là "Không nguồn nào trong 66 tài
    # liệu tự đếm". Mẫu đòi liền nhau thì bỏ lọt chính câu phủ nhận, rồi báo mâu thuẫn oan.
    r"[^.\n]{0,200}?(?:không có trong nguồn|nguồn không tự đếm|"
    # KHÔNG cấm \n trong khoảng trống: văn bản markdown xuống dòng giữa chừng câu, và
    # "không nguồn nào trong\n66 tài liệu tự đếm" là dạng thật gặp trong bản thảo.
    r"không (?:nguồn|tài liệu) nào[^.]{0,40}?(?:tự )?đếm|"
    r"không (?:bao giờ )?(?:tự )?(?:viết ra|đếm|nêu) (?:ra )?con số|"
    r"chuỗi [^.\n]{0,40} xuất hiện \*?\*?0 lần|không tài liệu nào[^.\n]{0,40}đếm)[^.\n]{0,200}", re.I)

# đối tượng hay bị đếm lậu — rút từ chính báo cáo phản biện
OBJ = [
    ("bảy công cụ ICDM", r"bảy công cụ|7 công cụ"),
    ("số bước ma trận hình thái", r"%s bước[^.\n]{0,30}(?:ma trận hình thái|hình thái)" % NUMWORD),
    ("quy trình Roozenburg & Eekels", r"%s bước[^.\n]{0,30}Roozenburg" % NUMWORD),
    # BỎ "số câu hỏi CFMA": mẫu %s câu hỏi bắt cả "ba câu hỏi kiểm tra" trong mục Áp dụng,
    # không liên quan CFMA. Muốn soi nó phải neo vào chính chữ CFMA.
    ("số câu hỏi CFMA", r"%s câu hỏi[^.\n]{0,40}CFMA|CFMA[^.\n]{0,40}%s câu hỏi" % (NUMWORD, NUMWORD)),
    ("số bước micro-cycle", r"%s bước[^.\n]{0,25}micro" % NUMWORD),
    ("số bước cụ thể hoá P&B", r"quy trình %s bước" % NUMWORD),
    ("số giai đoạn CDTC", r"%s (?:giai đoạn|stage)[^.\n]{0,20}CDTC" % NUMWORD),
    ("số hoạt động VDI 2221:2019", r"%s hoạt động" % NUMWORD),
    ("số năm nghiên cứu ICDM", r"%s (?:mươi )?năm nghiên cứu" % NUMWORD),
]

chs = {}
for f in sorted(glob.glob(B + "/Phase6-Revised/Ch[0-9][0-9]_*.md")):
    chs[os.path.basename(f)[:4]] = open(f, encoding="utf-8").read()

# ── 1) thu mọi câu phủ định, kèm chương ──────────────────────────────────────
negs = []
for c, t in chs.items():
    for m in NEG.finditer(t):
        negs.append((c, t[: m.start()].count("\n") + 1, re.sub(r"\s+", " ", m.group(0)).strip()))
print("Câu phủ nhận phép đếm tìm được: %d\n" % len(negs))

# ── 2) với mỗi đối tượng: có chương nào phủ nhận, chương nào khẳng định? ──────
hits = 0
for label, pat in OBJ:
    rx = re.compile(pat, re.I)
    deniers, asserters = [], []
    for c, t in chs.items():
        body = t[: t.find("## Sổ kiểm của chương")] if "## Sổ kiểm của chương" in t else t
        # Phủ nhận chỉ tính khi câu phủ định NHẮC ĐÍCH DANH đối tượng.
        # Bản đầu chấp nhận "khớp 2 từ đầu của nhãn", nên mọi câu phủ định trong chương
        # đều thành người phủ nhận cho mọi đối tượng — và cụm "ba câu hỏi" trong văn xuôi
        # bị bắt như mâu thuẫn. Kêu oan kiểu đó làm cả phép kiểm mất giá trị.
        for _, ln, s in [x for x in negs if x[0] == c]:
            if rx.search(s):
                deniers.append((c, ln))
                break
        # khẳng định: dùng con số như sự thật, không kèm phủ định trong cùng đoạn
        # Cửa sổ miễn trừ phải bao cả KHỐI phủ nhận, không chỉ một đoạn văn.
        # Bản đầu cắt theo "\n\n" nên bắt cả TIÊU ĐỀ của chính hộp Đào sâu đang phủ nhận
        # con số — tức là báo mâu thuẫn ở đúng chỗ sách đang nói con số đó không có nguồn.
        for m in rx.finditer(body):
            win = body[max(0, m.start() - 900): m.end() + 900]
            if NEG.search(win) or "suy luận của tác giả" in win or "không đến từ nguồn" in win:
                continue
            asserters.append((c, body[: m.start()].count("\n") + 1, re.sub(r"\s+", " ", m.group(0))))
    if deniers and asserters:
        hits += 1
        print("─" * 78)
        print("MÂU THUẪN: %s" % label)
        print("  PHỦ NHẬN ở : %s" % ", ".join("%s:%d" % d for d in sorted(set(deniers))))
        seen = set()
        print("  KHẲNG ĐỊNH ở:")
        for c, ln, txt in sorted(asserters):
            if (c, txt) in seen:
                continue
            seen.add((c, txt))
            print("      %s:%-4d %s" % (c, ln, txt[:70]))

print("\n" + "=" * 78)
print("Cặp phủ-định↔khẳng-định về cùng đối tượng: %d" % hits)
sys.exit(1 if hits else 0)
