---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #warning]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]], [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]]
---

# ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo, Không Nứt Khi Nén

## Ý Tưởng Cốt Lõi

Environmental Stress Cracking (ESC) — dạng phá huỷ giòn nguy hiểm nhất của HDPE — chỉ xảy ra khi vật liệu chịu ứng suất kéo liên tục, kể cả ở mức tải thấp hơn nhiều so với giới hạn chảy. ESC **không bao giờ** xảy ra khi HDPE chịu nén. Đây là nguyên tắc thiết kế số 1 khi gắn bất kỳ phần cứng chịu tải nào vào thân HDPE: giữ HDPE trong trạng thái nén.

## Giải Thích Chi Tiết

**Cơ chế vi mô:** Polymer bán tinh thể như HDPE có các tinh thể (lamellae) nối với nhau bằng tie molecules qua pha vô định hình. Khi chịu kéo liên tục, các chất hoạt động bề mặt (nước biển, chất tẩy rửa, dầu) làm giảm lực liên kết giữ tie molecules trong tinh thể → chúng bị "kéo tuột" (pull-out) → vết nứt lan theo cơ chế craze-crack.

**Tốc độ lan nứt:** Tuân theo luật Paris-Erdogan: da/dt = C · K_I^m. Tốc độ tăng theo hàm mũ của hệ số cường độ ứng suất. Trước khi gãy có pha "pre-cracking" chậm → rồi tăng tốc nhanh → gãy giòn đột ngột.

**Các yếu tố tăng tốc ESC:**
- Nhiệt độ cao (điều kiện nhiệt đới Việt Nam!)
- Tia UV (phơi nắng liên tục trên biển)
- Chất hoạt động bề mặt (nước biển + dầu máy)
- Tập trung ứng suất (lỗ khoan, cạnh sắc, vết xước)
- Tải tuần hoàn (sóng biển — fatigue cycling)

**Ứng dụng trực tiếp cho AST-MSL-001:** Nếu dùng padeye HDPE hàn trực tiếp để neo → dây neo kéo liên tục → HDPE chịu kéo hằng định → ESC chắc chắn xảy ra. Thay vào đó: dùng ống xuyên thân (through-hull chain pipe) + tấm đệm thép → HDPE chỉ chịu nén cục bộ từ tấm đệm → ESC = 0.

## Tại Sao Điều Này Quan Trọng?

Đây là **binding constraint** của mọi thiết kế kết cấu HDPE chịu tải. Nếu không biết rule này, mọi giải pháp gắn phần cứng đều có thể chọn sai hướng — đặc biệt nguy hiểm cho sản phẩm quốc phòng neo ngoài biển dài hạn. Một vết nứt ESC có thể khiến bia tập mất neo, trôi vào luồng hàng hải → hậu quả an toàn nghiêm trọng.

## Liên Kết
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — vật liệu thân bia AST-MSL-001; ESC rule quyết định cách gắn neo vào thân này
- [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]] — tương tự: vật liệu polymer bị suy giảm tính chất theo nhiều yếu tố nhân chồng
- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — ESC rule ưu tiên reliability (không nứt) hơn precision (tải chính xác)
- [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]] — cùng hệ thống neo; ESC rule ảnh hưởng trực tiếp đến cách chọn điểm neo

## Nguồn Gốc
- PMC/MDPI: "Environmental Stress Cracking of HDPE Applying LEFM" (2022) — peer-reviewed ★★★
- INEOS: "Environmental Stress Crack Resistance of PE" — technical bulletin ★★★
- ABG Geosynthetics: "Durability: ESCR of HDPE" — technical note ★★
- NLM cross-source synthesis 18 sources, notebook `hdpe-mooring`, 2026-03-08
