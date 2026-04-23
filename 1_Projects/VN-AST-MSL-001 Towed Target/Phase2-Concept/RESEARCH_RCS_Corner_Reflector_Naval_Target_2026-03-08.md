---
created: 2026-03-08
source: research-pipeline
notebook: rcs (Trihedral Corner Reflector RCS Amplification Naval Target)
topic: "Trihedral corner reflector RCS amplification cho mục tiêu trên biển"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox]
sources_analyzed: 73
videos_analyzed:
  - "Radar Cross Section of Flat Plate and Corner Reflector Objects"
  - "Corner reflectors for SAR activities in marine accidents"
---

# RESEARCH: Trihedral Corner Reflector — RCS Amplification cho Mục Tiêu Trên Biển

## Bối Cảnh
- Project: VN-AST-MSL-001 "THANH TRI" — 6m HDPE ring floating naval target
- Thiết kế hiện tại: 12 trihedral corner reflectors, 800mm edge, xếp cách 30°
- Yêu cầu: RCS >= 400 m² tại X-band (8-12 GHz), 360° azimuth
- NLM Notebook: `rcs` — 73 sources (deep mode), 72 web + YouTube

---

## Kết Quả Chính

### 1. Công Thức RCS Trihedral Corner Reflector

**Triangular trihedral:**
$$\sigma_{max} = \frac{4\pi a^4}{3\lambda^2}$$

**Square-faced trihedral:**
$$\sigma_{max} = \frac{12\pi a^4}{\lambda^2}$$

Trong đó: a = edge length (m), λ = wavelength (m)

### 2. Tính Toán Cho Thiết Kế Hiện Tại (12x 800mm)

| Parameter | Value |
|-----------|-------|
| Edge length (a) | 0.8 m |
| Frequency | 10 GHz (X-band mid) |
| Wavelength (λ) | 0.03 m |
| **RCS per reflector (peak)** | **~1,906 m²** |
| -3dB beamwidth | ~40° (±20° from boresight) |
| Spacing | 30° intervals |
| Worst-case off-axis | 15° (well within ±20° half-power) |
| **Coverage** | **360° — NO dead zones** |

**Kết luận: Thiết kế 12x 800mm vượt yêu cầu 400 m² gần 5 lần.** Có thể giảm kích thước nếu cần tiết kiệm chi phí/trọng lượng.

### 3. Kích Thước Tối Thiểu

- Để đảm bảo RCS >= 400 m² tại MỌI góc (worst-case 15° off-axis, giả định -3dB drop):
- Peak cần >= 800 m²
- **Edge length tối thiểu: ~643 mm**

### 4. So Sánh Công Nghệ

| Tiêu chí | Trihedral Corner | Luneburg Lens | Flat Plate |
|----------|-----------------|---------------|------------|
| RCS/kích thước | Tốt | Tốt nhất | Cao nhất nhưng chỉ 1 góc |
| 360° coverage | Cần array (12+ units) | Gần như hoàn hảo | Không thể |
| Dead zones | Nhỏ, có thể overlap | Gần 0 | Cực lớn |
| Chi phí | Thấp (nhôm/thép rỗng) | Rất cao | Thấp nhất |
| Trọng lượng | Trung bình | Nặng | Nhẹ |
| **Phù hợp cho 6m ring** | **TỐT NHẤT** | Quá nặng/đắt | Không phù hợp |

### 5. Ảnh Hưởng Sóng Biển

- **6-DOF motion:** Pitch/roll thay đổi góc tới → RCS dao động
- **Multipath:** Sóng phản xạ từ mặt biển tạo interference (lobes/nulls)
- **Sea clutter:** Sóng gió tạo tín hiệu nhiễu cạnh tranh với mục tiêu
- **Giải pháp:** Oversizing reflector (800mm >> 643mm minimum) tạo margin cho sea state

### 6. Thiết Kế Tối Ưu (Từ Nghiên Cứu)

- Phân bố nhiều cluster 8-quadrant trên perimeter → mô phỏng tàu chiến thực tế hơn
- Nhiều scattering center → chữ ký radar phức tạp giống tàu thật
- Hiện tại 12 reflectors đơn lẻ → cân nhắc gộp thành 3-4 cluster nếu muốn realistic signature

---

## Nguồn Quan Trọng

| Source | Nội dung |
|--------|----------|
| ResearchGate — Warship RCS determination | Lý thuyết + thực tế RCS tàu chiến |
| DTIC ADA318778 | US Navy corner reflector target design |
| DTIC ADA515506 | Naval test & evaluation resources |
| RadarSimX | Corner reflector RCS calculator |
| JAMET — Feasibility study | Corner reflector for radar applications |
| JCORS — Corner reflector array fitting | Mô phỏng ship scattering bằng array |
| NAVSEA Technical Capabilities | US Navy radar target specs |

---

## CEO Action Items

- [x] **Q5 validated:** Thiết kế 12x 800mm cho RCS ~1,906 m²/reflector — vượt target 400 m² gấp ~5x
- [ ] **Cân nhắc giảm xuống 650mm** nếu cần giảm trọng lượng/chi phí (vẫn đạt >=400 m²)
- [ ] **Cân nhắc cluster arrangement** (3-4 octahedral clusters thay vì 12 đơn lẻ) cho realistic warship signature
- [ ] Update Galaxy note [[Trihedral Corner Reflector — RCS Amplification]] với công thức + số liệu cụ thể
