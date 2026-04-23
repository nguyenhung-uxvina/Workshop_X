---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #pahl, #product]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]], [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]]
---

# Compression Tube Protocol — Truyền Tải Trọng Qua Foam Core

## Ý Tưởng Cốt Lõi
Thân sandwich (HDPE skin + foam core) không thể chịu tải tập trung từ bu-lông — foam bị nát. Tại mọi vị trí bu-lông, phải đặt ống nén (compression tube) xuyên qua foam, nối trực tiếp hai lớp skin. Ống nén OD = 2-3× đường kính bu-lông, vật liệu SS hoặc nhôm, chiều dài = tổng chiều dày sandwich.

## Giải Thích Chi Tiết
- **Cơ chế:** bu-lông siết → Belleville washer → backing plate → compression tube → truyền lực nén từ skin trên xuống skin dưới, foam không chịu tải
- **Kích thước:** OD tube ≥ 2× bolt dia (cho M12: tube OD ≥ 24mm). Wall thickness đủ chịu bearing stress từ washer
- **Vật liệu tube:** SS316 (marine) hoặc Al6061 (nhẹ). HDPE tube cũng được nếu extrusion-welded vào hull skin (IRClass approach)
- **Quy trình:** (1) cắt lỗ foam, (2) ép/hàn tube vào vị trí, (3) skin trên và dưới kẹp chặt tube
- **Composite sandwich tương tự:** Delron inserts, potted inserts — nhưng HDPE hull dùng extrusion-welded tube vì HDPE không bond tốt với adhesive
- **Tideman Marine:** dữ liệu proprietary, không public. Phải prototype tự kiểm chứng

## Tại Sao Điều Này Quan Trọng?
F4 mooring interface (DR-2) bắt buộc compression tube tại mọi bu-lông. Nếu bỏ qua → foam nát → backing plate lún → mất lực siết → chain xích tuột. Đây là chi tiết nhỏ nhưng failure mode 100% nếu thiếu.

## Liên Kết
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — foam core buoyancy sẽ mất nếu bị nát tại bolt locations
- [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]] — compression tube là sub-component của through-hull assembly
- [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]] — backing plate + compression tube = bộ đôi bắt buộc

## Nguồn Gốc
Foam Sandwich Construction Guide (boatbuildercentral), Cinar 2020 (Sage Journals — composite tube-reinforced foam core), Delron Inserts. HELM coverage gap #1 research, Session 37, 2026-03-08. Confidence ★★ — cần prototype verify cho HDPE-specific.
