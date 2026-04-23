import markdown, re, sys
from xhtml2pdf import pisa

BASE = "D:/Workshop_X/1_Projects/VN-XUONG-UUV/Phase0-PreStudy"

JOBS = [
    ("VN-XUONG-UUV_ODI_Report_v1.0.md", "VN-XUONG-UUV_ODI_Report_v2.1.pdf", "ODI Report v2.1"),
    ("VN-XUONG-UUV_P09_Situation_Analysis_v1.0.md", "VN-XUONG-UUV_P09_Situation_Analysis_v1.2.pdf", "P09 Situation Analysis v1.2"),
    ("VN-XUONG-UUV_P10_Product_Idea_Generation_v1.0.md", "VN-XUONG-UUV_P10_Product_Idea_Generation_v1.2.pdf", "P10 Product Idea Generation v1.2"),
]

# If args given, filter to matching jobs
if len(sys.argv) > 1:
    keys = sys.argv[1:]
    JOBS = [j for j in JOBS if any(k in j[0] for k in keys)]

def convert(src_name, out_name, title):
    with open(f"{BASE}/{src_name}", encoding="utf-8") as f:
        raw = f.read()
    raw = re.sub(r'^---\n.*?---\n', '', raw, flags=re.DOTALL)
    html_body = markdown.markdown(raw, extensions=['tables', 'fenced_code', 'toc'])
    html = f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<style>
@page {{
    size: A4;
    margin: 2.5cm 2cm 2.5cm 2.5cm;
    @frame header {{ -pdf-frame-content: headerContent; top: 0.5cm; margin-left: 2.5cm; margin-right: 2cm; height: 1.2cm; }}
    @frame footer {{ -pdf-frame-content: footerContent; bottom: 0.3cm; margin-left: 2.5cm; margin-right: 2cm; height: 1.2cm; }}
}}
body {{ font-family: "Times New Roman", serif; font-size: 11pt; line-height: 1.5; color: #222; }}
h1 {{ font-family: Arial, sans-serif; font-size: 18pt; font-weight: bold; color: #1B3A5C; margin-top: 24pt; margin-bottom: 10pt; page-break-after: avoid; }}
h2 {{ font-family: Arial, sans-serif; font-size: 14pt; font-weight: bold; color: #1B3A5C; margin-top: 18pt; margin-bottom: 8pt; border-bottom: 1pt solid #ccc; padding-bottom: 4pt; page-break-after: avoid; }}
h3 {{ font-family: Arial, sans-serif; font-size: 12pt; font-weight: bold; color: #2E5984; margin-top: 14pt; margin-bottom: 6pt; page-break-after: avoid; }}
h4 {{ font-family: Arial, sans-serif; font-size: 11pt; font-weight: bold; color: #3D7AB5; margin-top: 10pt; margin-bottom: 4pt; }}
table {{ border-collapse: collapse; width: 100%; margin: 8pt 0; font-size: 9.5pt; }}
th {{ background-color: #1B3A5C; color: white; font-family: Arial, sans-serif; font-weight: bold; padding: 6px 8px; text-align: left; border: 1px solid #1B3A5C; }}
td {{ padding: 5px 8px; border: 1px solid #ccc; vertical-align: top; }}
tr:nth-child(even) td {{ background-color: #f5f7fa; }}
blockquote {{ border-left: 3pt solid #1B3A5C; margin: 10pt 0; padding: 8pt 12pt; background: #f0f4f8; font-style: italic; }}
code {{ font-family: Consolas, monospace; font-size: 9pt; background: #f0f0f0; padding: 1px 4px; }}
strong {{ color: #1B3A5C; }}
p {{ margin: 6pt 0; }}
ul, ol {{ margin: 4pt 0 4pt 20pt; }}
li {{ margin: 2pt 0; }}
</style>
</head><body>
<div id="headerContent">
    <p style="font-family: Arial; font-size: 8pt; color: #999; text-align: right; margin: 0;">VN-XUONG-UUV &mdash; {title}</p>
</div>
<div id="footerContent">
    <p style="font-family: Arial; font-size: 8pt; color: #999; text-align: center; margin: 0;">Workshop X &mdash; Page <pdf:pagenumber/> / <pdf:pagecount/></p>
</div>
{html_body}
</body></html>"""
    out_path = f"{BASE}/{out_name}"
    with open(out_path, "wb") as f:
        status = pisa.CreatePDF(html, dest=f)
    if status.err:
        print(f"  ERROR: {out_name} — {status.err}")
    else:
        print(f"  OK: {out_name}")

for src, out, title in JOBS:
    convert(src, out, title)
