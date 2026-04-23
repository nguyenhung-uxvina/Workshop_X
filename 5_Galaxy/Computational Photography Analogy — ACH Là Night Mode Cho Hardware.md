---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #acq, #three-laws, #ceo]
links: [[ACH Boundary Rule — Information vs Physical Forces]], [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]], [[Phán đoán không thể uỷ thác cho AI]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]]
---

# Computational Photography Analogy — ACH Là Night Mode Cho Hardware

## Ý Tưởng Cốt Lõi

iPhone thắng Sony $999 camera ở chụp đêm không phải vì sensor tốt hơn (sensor nhỏ hơn 9 lần), mà vì AI xử lý multi-frame merge + tone mapping + ML recognition bù đắp cho hardware yếu. Đây chính xác là pattern ACH: **AI-Compensates-Hardware**. Workshop X đang làm "Night Mode cho huấn luyện quân sự."

## Giải Thích Chi Tiết

ACH pattern xuất hiện ở mọi ngành, không chỉ defense:

| Domain | Hardware đắt | AI thay thế | Tỷ lệ chi phí |
|---|---|---|---|
| **Computational Photography** | Sensor lớn, ống kính phức tạp, ND filter | Multi-frame merge, HDR, ML scene recognition | Smartphone $1,200 vs camera $5,000+ |
| **Predictive Maintenance** | Máy dự phòng, cảm biến rung đắt tiền | ML anomaly detection trên sensor rẻ | Loại bỏ catastrophic failure |
| **Digital Twin** | Prototype vật lý, test rig | Mô phỏng 3D/4D + IoT | Virtual commissioning |
| **Defense Training** | Full-motion simulator, human red team | AI instructor, adaptive scenarios | 1/5 chi phí live sortie |

**5 bước ACH universal:**
1. **Identify** — tìm subsystem hardware đắt
2. **Instrument** — gắn sensor rẻ capture signal
3. **Model** — mô hình hóa physics/behavior trong software
4. **Replace** — thay hardware bằng AI inference
5. **Validate** — xác nhận output đạt ngưỡng tối thiểu

**Giới hạn critical:** ACH pattern BREAK khi hardware tạo ra **physical forces** thay vì information. iPhone không thể AI-substitute trọng lượng ống kính cho bokeh vật lý thật — chỉ fake được bằng software. Tương tự, VN-12.7MM-SIM không thể AI-substitute recoil — phải pneumatic.

## Tại Sao Điều Này Quan Trọng?

1. **Storytelling cho ACH thesis publication:** Analogy computational photography cực mạnh vì mọi người đều hiểu iPhone vs Sony — dùng làm opening hook cho paper
2. **Strategy validation:** Workshop X product portfolio map chính xác theo ACH pattern — BB-01 (AI scoring từ piezo rẻ), 12.7MM-SIM (AI coaching + pneumatic recoil), AST-MSL-001 (pure physical → ACH không áp dụng)
3. **Go/No-Go nhanh:** Trước khi thêm AI vào bất kỳ subsystem nào, hỏi: "Subsystem này là Night Mode (information) hay ống kính (physical force)?"

## Liên Kết

- [[ACH Boundary Rule — Information vs Physical Forces]] — cluster C: rule chính thức phân biệt khi nào ACH hoạt động và khi nào không
- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — cluster D: ACH phải chạy edge vì quân đội VN không có cloud ở thao trường
- [[Phán đoán không thể uỷ thác cho AI]] — cluster C hub: ACH automate information processing, KHÔNG automate judgment — human-in-the-loop luôn
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — cluster C: ACH cho phép skip hardware realism mà vẫn đạt training outcome

## Nguồn Gốc

- Research: ACH Case Studies in Defense Training (WX-KPIPE-001, output #5/5)
- NLM notebook `ach`: Sony vs iPhone, I/ITSEC 2025 TVI, SLATS project, Edge AI
- Cross-reference: Wikipedia Computational Photography, Digital Twin, Predictive Maintenance
- Ngày: 2026-03-08
