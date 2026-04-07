---
created: 2026-04-06
updated: 2026-04-06
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Requirements List
version: v1.0
concept: PA-2 STANDARD
---

# VN-CUAV-SIM-001 — Requirements List v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV Trên Biển

**Ngày:** 2026-04-06
**Concept:** PA-2 STANDARD (3-screen, 180° FOV, authentic mockup + recoil, visual + seat motion)
**Phân loại:** D = Demand (bắt buộc) / W = Wish (mong muốn)
**Nguồn:** Reverse Engineering + Competitor Analysis + Market Gap Analysis

---

## 1. GEOMETRY (Hình Học & Không Gian)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| G-01 | D | Toàn bộ hệ thống triển khai trong phòng tối thiểu 6×8m, trần ≥ 3m | Use case shore-based |
| G-02 | D | Weapon mockup: kích thước lắp đặt tương đương DSHK/NSV 12.7mm (±5mm tại các điểm tỳ tay và cổ súng) | Training transfer |
| G-03 | D | 3 màn hình projection: FOV ngang ≥ 150°, FOV dọc ≥ 50° | PA-2 spec |
| G-04 | D | Diện tích chiếm đất của weapon station ≤ 2×2m | Room constraint |
| G-05 | W | Toàn bộ hệ thống tháo lắp qua cửa tiêu chuẩn 900×2100mm | Deployability |
| G-06 | W | Diện tích tổng ≤ 25m² (bao gồm instructor station) | Compact install |

---

## 2. KINEMATICS (Động Học)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| K-01 | D | Weapon traverse (ngang): tốc độ tối đa ≥ 60°/s (khớp với DSHK thực) | Weapon fidelity |
| K-02 | D | Weapon elevation (dọc): phạm vi -10° đến +85° | Engagement envelope |
| K-03 | D | Seat motion: roll ±12°, pitch ±8° — mô phỏng sea state 1-3 | Ship motion sim |
| K-04 | D | Seat motion: chu kỳ sóng 4-8 giây (phù hợp biển Đông sea state) | Maritime env |
| K-05 | W | Weapon slew acceleration: 0 → 60°/s trong < 0.5s (match real gun) | Advanced fidelity |
| K-06 | W | Seat motion: heave ±5cm (vertical displacement từ sóng) | Advanced motion |

---

## 3. FORCES (Lực & Tải Trọng)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| F-01 | D | Recoil simulation: peak impulse ≥ 8N mỗi phát (đủ để xạ thủ cảm nhận rõ) | Muscle memory |
| F-02 | W | Recoil simulation: peak impulse 15-25N, rhythm khớp với ROF 600rpm | High fidelity |
| F-03 | D | Weapon mount: chịu tải tĩnh ≥ 25kg (mockup + operator lateral force) | Structural |
| F-04 | D | Seat motion platform: chịu tải ≥ 130kg (operator 100kg + equipment 30kg) | Safety |
| F-05 | D | Trigger pull force: có thể điều chỉnh 1.5–4kg (range của DSHK thực) | Fidelity |

---

## 4. ENERGY (Năng Lượng)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| E-01 | D | Nguồn điện: 220V ±10%, 50Hz, single phase (tiêu chuẩn VN) | VN standard |
| E-02 | D | Tổng tiêu thụ điện ≤ 5kW (vừa ổ cắm phòng tiêu chuẩn 20A) | Installation |
| E-03 | D | UPS dự phòng ≥ 15 phút (bảo vệ dữ liệu khi mất điện đột ngột) | Data integrity |
| E-04 | W | Tổng tiêu thụ điện ≤ 3.5kW (tiết kiệm điện) | Operating cost |
| E-05 | W | Chế độ standby: giảm tiêu thụ xuống ≤ 500W khi không có trainee | Efficiency |

---

## 5. MATERIAL (Vật Liệu)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| M-01 | D | Weapon mockup tại các điểm chịu lực: thép hoặc nhôm (không dùng nhựa) | Durability |
| M-02 | D | Linh kiện tiếp xúc trực tiếp với người: không độc hại, không gây dị ứng | Safety |
| M-03 | D | Khung cấu trúc và bề mặt ngoài: chịu muối biển, độ ẩm > 90% (môi trường hải quân) | Environment |
| M-04 | W | Khung cơ khí: nhôm profile 40×40mm (dễ gia công tại VN, modular) | Producibility |
| M-05 | W | Bề mặt weapon mockup: sơn tĩnh điện màu OD green (aesthetic match với real weapon) | Authenticity |

---

## 6. SIGNALS & CONTROL (Tín Hiệu & Điều Khiển)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| S-01 | D | End-to-end latency (trigger → visual feedback): ≤ 50ms | Training transfer |
| S-02 | D | Encoder weapon traverse: độ phân giải ≥ 0.1° (angular accuracy) | Ballistic accuracy |
| S-03 | D | Encoder weapon elevation: độ phân giải ≥ 0.1° | Ballistic accuracy |
| S-04 | D | Trigger: phân biệt single/burst fire mode | Weapon fidelity |
| S-05 | D | Instructor station: inject target mới vào scenario trong ≤ 1 giây | Instructor control |
| S-06 | D | AAR: ghi lại đầy đủ (aim path, shot timing, hit/miss, target trajectory) toàn bộ session | Training analytics |
| S-07 | D | Shot detection accuracy: ≥ 95% (hit/miss phân loại đúng) | Scoring validity |
| S-08 | W | Network: 1 instructor station quản lý ≥ 4 trainee stations đồng thời | Multi-trainee |
| S-09 | W | Remote diagnostics qua VPN (hỗ trợ kỹ thuật từ xa) | Maintenance |

---

## 7. SAFETY (An Toàn)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| Sa-01 | D | Không có bộ phận bắn đạn — 100% mô phỏng | Absolute |
| Sa-02 | D | Emergency stop: dừng toàn bộ hệ thống (kể cả motion platform) trong ≤ 1 giây | Safety |
| Sa-03 | D | Điện áp phần người dùng tiếp xúc ≤ 24VDC | Low voltage safety |
| Sa-04 | D | Độ sáng màn hình projection: không vượt giới hạn an toàn mắt (IEC 62471) | Eye safety |
| Sa-05 | D | Seat motion platform: giới hạn phần cứng (hard stop) tại biên độ tối đa | Mechanical safety |
| Sa-06 | W | Lockout/Tagout cơ chế cho bảo trì (theo OSHA/VN standard) | Maintenance safety |

---

## 8. ERGONOMICS (Công Thái Học)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| Er-01 | D | Weapon mockup: điều chỉnh chiều cao bệ cho xạ thủ cao 155–185cm | VN body size |
| Er-02 | D | Seat: điều chỉnh ≥ 3 vị trí, tải ≥ 130kg | Operator comfort |
| Er-03 | D | Toàn bộ giao diện phần mềm: 100% tiếng Việt | Usability |
| Er-04 | D | Instructor không cần kỹ năng lập trình để tạo và chạy scenario | Operator ease |
| Er-05 | D | Âm thanh: súng nổ + môi trường biển (sóng, gió) qua loa stereo ≥ 85dB | Immersion |
| Er-06 | W | Thời gian thiết lập scenario mới từ template ≤ 15 phút | Instructor efficiency |
| Er-07 | W | Headphones option (noise-cancelling) để tăng immersion | Optional upgrade |

---

## 9. PRODUCTION (Sản Xuất)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| P-01 | D | ≥ 70% linh kiện sourced tại VN hoặc COTS có sẵn ở thị trường VN | Supply chain |
| P-02 | D | Weapon mockup cơ khí: gia công được tại Workshop X (CNC + hàn) | Capability |
| P-03 | D | GPU: NVIDIA RTX 4080 hoặc 4090 (có sẵn ở VN) | Availability |
| P-04 | D | Không phụ thuộc single-source cho bất kỳ linh kiện critical nào | Risk |
| P-05 | W | Toàn bộ PCB custom (nếu có): gia công được tại VN (JLCPCB VN-compatible) | Local production |

---

## 10. QUALITY CONTROL (Kiểm Tra Chất Lượng)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| Q-01 | D | Ballistic accuracy: sai số ≤ 1 mrad so với bảng TM tại 1000m (12.7mm B-32) | Physics fidelity |
| Q-02 | D | Display latency test: đo và verify ≤ 50ms trước khi xuất xưởng | Performance |
| Q-03 | D | Motion platform accuracy: ±0.5° của commanded position | Fidelity |
| Q-04 | D | Mỗi unit phải pass burn-in test 8 giờ liên tục trước khi giao | Reliability |
| Q-05 | W | Automated self-test khi khởi động: báo lỗi trong ≤ 2 phút | Diagnostics |

---

## 11. ASSEMBLY (Lắp Ráp)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| A-01 | D | Lắp ráp hoàn chỉnh tại site ≤ 8 giờ với 2 người | Installation |
| A-02 | D | Không cần công cụ chuyên dụng để lắp ráp thông thường (hex key + screwdriver đủ) | Serviceability |
| A-03 | D | Tất cả cable: có nhãn rõ ràng tại 2 đầu | Error prevention |
| A-04 | W | Connectors: color-coded và key-coded (không thể cắm nhầm) | Error prevention |

---

## 12. TRANSPORT (Vận Chuyển)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| Tr-01 | D | Đóng gói trong ≤ 4 kiện, mỗi kiện ≤ 200kg (di chuyển bằng xe đẩy tay) | Logistics |
| Tr-02 | D | Chịu vận chuyển đường bộ VN (đường xấu, xe tải 2.5T) | Local logistics |
| Tr-03 | W | Chịu vận chuyển đường biển (container 20ft) — cho thị trường export | Export |
| Tr-04 | W | Các kiện đóng gói: chịu nhiệt độ 0–55°C, độ ẩm 10–95% (không đọng sương) | Environment |

---

## 13. OPERATION (Vận Hành)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| O-01 | D | Thời gian khởi động: cold boot → sẵn sàng huấn luyện ≤ 5 phút | Operational |
| O-02 | D | Vận hành liên tục ≥ 8 giờ/ngày mà không cần restart | Reliability |
| O-03 | D | Đào tạo instructor vận hành độc lập: ≤ 2 ngày | Usability |
| O-04 | D | Hỗ trợ ≥ 2 weapon profiles Phase 1: DSHK 12.7mm + NSV 12.7mm | Scope |
| O-05 | D | Hỗ trợ ≥ 5 UAV target profiles (DJI Mavic, FPV kamikaze, medium drone, loitering munition, swarm) | Training scope |
| O-06 | D | Hỗ trợ ≥ 3 USV target profiles (straight approach, zigzag, high-speed 60-knot) | Training scope |
| O-07 | D | Library ≥ 10 pre-built scenarios sẵn sàng khi giao hàng | Out-of-box value |
| O-08 | W | Hỗ trợ ≥ 4 weapon profiles Phase 2: thêm KPVT 14.5mm + ZU-23-2 23mm | Phase 2 upgrade |
| O-09 | W | Remote diagnostics qua mạng (VPN-secured) | Support |

---

## 14. MAINTENANCE (Bảo Trì)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| Ma-01 | D | MTBF ≥ 500 giờ vận hành | Reliability |
| Ma-02 | D | MTTR ≤ 4 giờ cho bất kỳ lỗi thông thường (với spare parts có sẵn) | Serviceability |
| Ma-03 | D | 100% spare parts có sẵn tại VN hoặc giao trong ≤ 7 ngày | Supply chain |
| Ma-04 | D | Đào tạo kỹ thuật viên bảo trì cơ bản: ≤ 3 ngày | Serviceability |
| Ma-05 | W | Preventive maintenance: ≤ 2 giờ/tháng theo checklist | Efficiency |
| Ma-06 | W | Không cần công cụ đặc biệt cho field maintenance | Serviceability |

---

## 15. LIFECYCLE & SUSTAINABILITY (Vòng Đời)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| L-01 | D | Vòng đời thiết kế ≥ 10 năm | Defense procurement |
| L-02 | D | Software: update content (scenarios, target behaviors) mỗi 12 tháng | Relevance |
| L-03 | W | GPU và display: modular upgrade không thay toàn bộ hệ thống | Future-proof |
| L-04 | W | Software license: không phụ thuộc server nước ngoài (on-premise) | Sovereignty |

---

## 16. COSTS (Chi Phí)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| C-01 | D | Giá bán ≤ $70,000 USD/unit (PA-2 STANDARD) | Market target |
| C-02 | D | Chi phí vận hành ≤ $5/giờ huấn luyện (vs $250-1500/giờ live fire) | ROI |
| C-03 | D | Chi phí phát triển nằm trong R&D budget Workshop X | Internal constraint |
| C-04 | W | Giá bán ≤ $60,000 USD/unit (cạnh tranh hơn) | Competitive |
| C-05 | W | Chi phí bảo trì hàng năm ≤ 5% giá bán ($3,000-3,500/năm) | TCO |

---

## 17. TRAINING PERFORMANCE (Hiệu Quả Huấn Luyện — Đặc Thù Simulator)

| ID | D/W | Yêu Cầu | Nguồn |
|----|-----|---------|-------|
| T-01 | D | Frame rate ≥ 60 fps liên tục (smooth tracking mục tiêu nhanh) | Visual fidelity |
| T-02 | D | Xạ thủ phân biệt UAV Group 1 (DJI Mavic, ~30cm) ở khoảng cách ≥ 300m trong scene | Detection training |
| T-03 | D | Ballistic model: khớp TM tables ±5% cho 12.7mm B-32 tại 100–1500m | Physics accuracy |
| T-04 | D | Ship motion trong scene: roll ±5–15°, pitch ±3–10° (sea state 1–4) | Environmental fidelity |
| T-05 | D | ≥ 5 UAV attack profiles: thẳng / jinking / kamikaze dive / pop-up / swarm ≥ 4 units | Scenario variety |
| T-06 | D | ≥ 3 điều kiện ánh sáng: ban ngày / hoàng hôn-bình minh / ban đêm (NVG mode) | Environmental |
| T-07 | D | AAR: replay từng phát bắn với aim trace và impact point | Debriefing |
| T-08 | W | Training transfer: ≥ 20% cải thiện accuracy trong live fire sau 40 giờ simulation | Validation |
| T-09 | W | Adaptive difficulty: AI tự điều chỉnh target speed/evasion dựa trên performance trainee | AI coaching |
| T-10 | W | Thermal/FLIR mode simulation cho bài tập ban đêm | Night training |

---

## Tóm Tắt Thống Kê

| Category | Tổng | D (Bắt buộc) | W (Mong muốn) |
|----------|------|--------------|----------------|
| Geometry | 6 | 4 | 2 |
| Kinematics | 6 | 4 | 2 |
| Forces | 5 | 4 | 1 |
| Energy | 5 | 3 | 2 |
| Material | 5 | 3 | 2 |
| Signals | 9 | 7 | 2 |
| Safety | 6 | 5 | 1 |
| Ergonomics | 7 | 5 | 2 |
| Production | 5 | 4 | 1 |
| Quality | 5 | 4 | 1 |
| Assembly | 4 | 3 | 1 |
| Transport | 4 | 2 | 2 |
| Operation | 9 | 7 | 2 |
| Maintenance | 6 | 4 | 2 |
| Lifecycle | 4 | 2 | 2 |
| Costs | 5 | 3 | 2 |
| Training Performance | 10 | 7 | 3 |
| **TỔNG** | **101** | **71 (70%)** | **30 (30%)** |

---

## Known Unknowns — Cần Xác Nhận Từ Stakeholder

| # | Câu hỏi | Ảnh hưởng đến |
|---|---------|----------------|
| Q1 | Cục Quân huấn có tiêu chuẩn bắn UAV/USV chính thức chưa? | T-08, O-07 scenario content |
| Q2 | Ngân sách tối đa 1 hệ thống? Fleet-wide bao nhiêu bộ? | C-01, C-04 |
| Q3 | Physical seat motion có bắt buộc hay visual-only đủ? | K-03, K-04, F-04 |
| Q4 | Unreal Engine 5 vs Unity vs Godot — licensing VN-accepted? | L-04, software architecture |
| Q5 | Kết nối V-SMASH ballistic engine: cùng model hay build mới? | T-03, dev timeline |

---

## Trạng Thái & Next Step

- [x] Requirements List v1.0 — DONE (2026-04-06)
- [ ] Stakeholder validation — Chờ field visit
- [ ] Morphological Matrix — SS1 Weapon Station, SS2 Visual Engine, SS3 Target/Ballistic, SS4 Core Computer, SS5 Instructor Station
- [ ] Working principles selection per subsystem
