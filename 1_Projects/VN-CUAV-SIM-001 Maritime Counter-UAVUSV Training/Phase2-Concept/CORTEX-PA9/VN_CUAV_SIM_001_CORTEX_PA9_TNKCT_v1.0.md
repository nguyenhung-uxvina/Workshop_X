# TÍNH NĂNG KỸ CHIẾN THUẬT
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG CHỐNG UAV VÀ USV — PHIÊN BẢN CORTEX (PA-9)
# PHỐI HỢP LIÊN QUÂN — XUỒNG + ĐẢO + TÀU

**Số hiệu:** WX-CUAV-SIM-TNKCT-PA9
**Phiên bản:** 1.0
**Ngày:** 07/04/2026
**Phân loại:** Tài liệu kỹ thuật — không mật
**Concept:** PA-9 CORTEX (multi-node joint training, shared battlespace)
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Huấn luyện

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT | Nội dung | Mô tả |
|----|----------|-------|
| 1.1 | Nhiệm vụ chính | Huấn luyện phối hợp liên quân chống UAV và USV tại nhiều địa điểm đồng thời — tàu chiến, đảo/nhà giàn DK1, và xuồng tuần tra trong cùng một không gian chiến trường chia sẻ |
| 1.2 | Nhiệm vụ phụ | Huấn luyện chỉ huy cấp chiến dịch về phân bổ lực lượng, điều phối hỏa lực liên quân, xử lý cross-node handoff, và IFF liên hợp |
| 1.3 | Đối tượng huấn luyện | Kíp chiến đấu tại nhiều plat­form (tàu chiến + đảo + xuồng) + sĩ quan chỉ huy cấp Vùng/Bộ Tư Lệnh |
| 1.4 | Quy mô lực lượng | 3-18 xạ thủ (tùy số node) + 1-2 sĩ quan tại C2 Hub |
| 1.5 | Hình thức huấn luyện | Mô phỏng 100% (Pure Virtual) — tất cả nodes kết nối WAN, không sử dụng đạn thật |
| 1.6 | Phạm vi địa lý | Đa địa điểm — tất cả node kết nối qua WAN (VPN/VSAT/fiber) trong bán kính không giới hạn |
| 1.7 | Cơ chế phối hợp | Shared Battlespace — tất cả node nhìn thấy cùng bầy mục tiêu real-time, kill tại một node được xác nhận toàn hệ thống |
| 1.8 | Kiến trúc nền tảng | CORTEX là lớp phần mềm mạng + C2 xây dựng trên hardware nodes hiện có (LITE/FIXED/FULL) — không thay đổi phần cứng node |
| 1.9 | Tương thích ngược | Mọi đơn vị đang có node PA-2/PA-8/PA-6 đều có thể nâng cấp lên CORTEX chỉ bằng phần mềm và kết nối mạng |

### 2. Khả năng huấn luyện liên quân

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 2.1 | Số node tối đa trong 1 deployment | 6 | node | Mở rộng thêm node bất cứ lúc nào |
| 2.2 | Số node điển hình (cấu hình đề xuất) | 3 | node | 1 FULL + 2 FIXED + C2 Hub |
| 2.3 | Tổng số mục tiêu đồng thời (toàn hệ thống) | 20-50 | mục tiêu | UAV + USV phối hợp |
| 2.4 | Tổng số xạ thủ tham gia đồng thời | 3-18 | người | Tùy node configuration |
| 2.5 | Loại mục tiêu bay (UAV) | ≥ 5 | loại | DJI Mavic trinh sát, FPV kamikaze, đạn lảng vảng, UAV tầm trung, bầy đàn |
| 2.6 | Loại mục tiêu mặt nước (USV) | ≥ 3 | loại | Tiếp cận thẳng, zigzag né tránh, tốc độ cao 60 hải lý |
| 2.7 | Phạm vi huấn luyện node LITE | 180° | FOV | Xuồng tuần tra, 1 trạm bắn |
| 2.8 | Phạm vi huấn luyện node FIXED | 240° | FOV | Đảo/nhà giàn/cảng, 2 trạm bắn |
| 2.9 | Phạm vi huấn luyện node FULL | 360° | FOV | Tàu chiến, 3 trạm bắn |
| 2.10 | Kịch bản CORTEX-exclusive | 6 | kịch bản | CTX-01 đến CTX-06 (xem mục 3) |
| 2.11 | Tạo kịch bản liên quân mới (instructor) | ≤ 30 | phút | Định nghĩa sector per-node + wave schedule |
| 2.12 | Tốc độ mục tiêu UAV | 30-250 | km/h | Từ trinh sát vòng tròn đến FPV kamikaze |
| 2.13 | Tốc độ mục tiêu USV | 20-60 | hải lý/giờ | Từ tiếp cận thận trọng đến tấn công cao tốc |
| 2.14 | Điều kiện ánh sáng | 3 | loại | Ban ngày, hoàng hôn/bình minh, ban đêm |
| 2.15 | Điều kiện thời tiết | 3 | loại | Trời quang, mưa nhiệt đới, sương mù |
| 2.16 | Môi trường 3D hỗ trợ | ≥ 5 | preset/node | Tùy node type — dùng môi trường của từng node |

### 3. Khả năng phối hợp liên quân (CORTEX-Exclusive)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Shared Battlespace | Có | — | Tất cả node nhìn thấy cùng bầy mục tiêu real-time — kill tại Node A biến mất ngay tại Node B và C |
| 3.2 | Kill confirmation toàn hệ thống | ≤ 100 | ms | Từ kill event đến khi tất cả nodes cập nhật |
| 3.3 | Force Allocation Console | Có | — | Chỉ huy kéo-thả sector trên bản đồ chiến thuật cho từng node, real-time |
| 3.4 | Dynamic sector reassignment | Có | — | Thay đổi sector giữa chừng — thử thách khả năng thích nghi |
| 3.5 | Cross-node target handoff | Có | — | Mục tiêu bay qua ranh giới sector → auto-handoff tracking |
| 3.6 | Thời gian handoff | ≤ 50 | ms | Từ detect crossing đến node mới nhận tracking |
| 3.7 | Voice intercom liên quân | Có | — | PTT encrypted — chỉ huy ↔ nodes + node-to-node |
| 3.8 | Độ trễ voice (nội bộ LAN) | ≤ 50 | ms | — |
| 3.9 | Độ trễ voice (qua WAN) | ≤ 150 | ms | Chấp nhận được cho mô phỏng radio quân sự |
| 3.10 | Ghi âm liên lạc | 100 | % | Toàn bộ voice được lưu — phát lại trong AAR |
| 3.11 | Wave attack scheduling | Có | — | C2 Hub kích hoạt từng sóng tấn công theo lịch hoặc on-demand |
| 3.12 | Số sóng tấn công tối đa | ≥ 5 | sóng | Mỗi sóng độc lập về thành phần và hướng |
| 3.13 | Target injection real-time | Có | — | Chỉ huy "rót" thêm mục tiêu vào sector bất kỳ trong khi diễn tập đang chạy |
| 3.14 | C2 order compliance tracking | Có | — | Theo dõi kíp có thực hiện đúng lệnh chỉ huy không |

### 4. Đánh giá và phân tích sau buổi tập liên quân (Joint AAR)

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 4.1 | Chấm điểm cá nhân | Trúng đích, thời gian phản ứng, tiết kiệm đạn, sector discipline, IFF compliance — tổng hợp từ tất cả nodes |
| 4.2 | Chấm điểm kíp node | Tỷ lệ tiêu diệt trong sector được giao, phối hợp nội bộ node, handoff received/missed |
| 4.3 | Chấm điểm lực lượng liên hợp | Overall engagement rate, cross-node handoff success, C2 order compliance, joint effectiveness rating (A/B/C/D) |
| 4.4 | Joint AAR Replay — synchronized | Phát lại toàn bộ chiến trường từ tất cả nodes trên 1 timeline thống nhất — không lệch pha |
| 4.5 | God-eye tactical view | Nhìn toàn bộ chiến trường từ trên — tất cả mục tiêu + tất cả xạ thủ + tất cả handoff events |
| 4.6 | Node drill-down | Click vào node → zoom vào góc nhìn của node đó trong AAR |
| 4.7 | Handoff visualization | Mũi tên hiển thị từng handoff event trên timeline — ai chuyển cho ai, có thành công không |
| 4.8 | Voice intercom replay | Nghe lại liên lạc giọng nói tại từng thời điểm trong AAR — đồng bộ với visual replay |
| 4.9 | Kill event attribution | Marker màu theo node — xem ai tiêu diệt mục tiêu nào, sector nào |
| 4.10 | Phân tích bottleneck | Tự động phát hiện kíp/node nào bị quá tải trước — khuyến nghị cải thiện |
| 4.11 | Xuất báo cáo | CSV (raw data tất cả nodes) + PDF (joint report — tổng hợp chỉ huy + từng kíp) |
| 4.12 | Dung lượng lưu trữ | ~250 MB/buổi tập (3 nodes + C2 sync data) — 4TB ≈ 16.000 buổi |

---

## II. TÍNH NĂNG KỸ THUẬT

### 5. Sở Chỉ Huy C2 Command Hub

#### 5A. Phần Cứng C2 Hub

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 5.1 | CPU Server | Intel Xeon W-3400 hoặc AMD EPYC 7003 | — | ≥ 16 cores — đủ xử lý swarm 50 targets + sync 6 nodes |
| 5.2 | GPU Server | NVIDIA RTX 4080 | — | Render tactical map 4K + 3 node mirrors đồng thời |
| 5.3 | RAM | 128 | GB ECC | Session state + all-node sync buffer |
| 5.4 | Lưu trữ | 4 | TB NVMe | AAR storage + scenario library |
| 5.5 | Màn hình chiến thuật | 4× LED 55" 4K | màn hình | Tactical map + 3 node mirrors (hoặc custom layout) |
| 5.6 | UPS | ≥ 30 | phút | Bảo vệ session data khi mất điện |
| 5.7 | OS | Windows 11 Pro / Ubuntu 22.04 LTS | — | CORTEX Server chạy trên cả hai |
| 5.8 | Hệ thống làm mát | ≥ 2 HP điều hòa riêng | — | Server + 4 màn hình tỏa ~3kW |
| 5.9 | Rack | 19" rack 12U | — | Server + PDU + switch + UPS |
| 5.10 | Tiêu thụ điện (đỉnh) | ~3 | kW | Server 800W + 4 màn hình 200W×4 + network 100W |

#### 5B. Phần Mềm CORTEX Server

| TT | Mô đun phần mềm | Chức năng |
|----|-----------------|-----------|
| 5.11 | Swarm Distribution Engine | Sinh và phân phối 20-50 mục tiêu UAV/USV theo kịch bản, wave scheduling |
| 5.12 | State Sync Manager | Đồng bộ trạng thái chiến trường ≤ 100ms giữa tất cả nodes — UDP multicast + TCP fallback |
| 5.13 | Kill Confirmation Arbiter | Nhận kill signal từ node, xác nhận tính hợp lệ, broadcast REMOVE [target_id] toàn hệ thống |
| 5.14 | Force Allocation Console | GUI web-based — chỉ huy kéo-thả sector cho từng node trên bản đồ chiến thuật |
| 5.15 | Joint Scoring Engine | Tổng hợp điểm từ tất cả nodes, tính 3-tier scoring (cá nhân/kíp/liên hợp) |
| 5.16 | Joint AAR Engine | Thu thập session data từ tất cả nodes, đồng bộ theo timestamp, xuất unified timeline |
| 5.17 | Voice Intercom Server | IP-based PTT — AES-256 encrypted, ghi âm toàn bộ, tích hợp với AAR |
| 5.18 | Diagnostics Console | Real-time monitoring: latency per-node, packet loss, sync health, node status |

#### 5C. Màn Hình Chiến Thuật — Layout Mặc Định

| TT | Màn hình | Kích thước | Nội dung mặc định | Có thể chuyển sang |
|----|----------|------------|-------------------|--------------------|
| 5.19 | Monitor 1 (Tactical Map) | 55" 4K | Bản đồ chiến thuật 2D/3D — tất cả nodes + tất cả targets + kill events real-time | Overhead 3D view |
| 5.20 | Monitor 2 (Node A) | 55" 4K | God-eye view Node A | Scoring live / AAR |
| 5.21 | Monitor 3 (Node B) | 55" 4K | God-eye view Node B | Scoring live / AAR |
| 5.22 | Monitor 4 (Node C) | 55" 4K | God-eye view Node C | Diagnostics |

### 6. Hệ Thống Mạng Diện Rộng (WAN)

#### 6A. Yêu Cầu Kết Nối

| TT | Tham số | Giá trị | Đơn vị | Ghi chú |
|----|---------|---------|--------|---------|
| 6.1 | Sync latency tối đa (node-to-node qua C2) | ≤ 100 | ms | Yêu cầu tác chiến — target speed ≤ 250 km/h cho phép nội suy |
| 6.2 | Băng thông tối thiểu mỗi node | 512 | Kbps | Đủ cho 50 targets @ 20Hz với delta encoding |
| 6.3 | Băng thông khuyến nghị mỗi node | 2 | Mbps | Đảm bảo headroom cho voice + diagnostics |
| 6.4 | Update rate trạng thái chiến trường | 20 | Hz | 50ms interval — đủ cho mục tiêu chuyển động tốc độ thấp |
| 6.5 | Kích thước gói tin trung bình | ~2 | KB/frame | 50 targets × 40 bytes + overhead |
| 6.6 | Xử lý mất gói (packet loss < 10%) | Có | — | Target state interpolation — không đứt hình khi jitter < 200ms |
| 6.7 | Reconnect tự động sau mất kết nối | ≤ 5 | giây | Node tự kết nối lại, resume session |
| 6.8 | Standalone fallback khi mất WAN | Có | — | Node chuyển sang chế độ standalone tự động |

#### 6B. Phương Án Kết Nối Theo Địa Điểm

| TT | Địa điểm node | Phương án ưu tiên | Phương án dự phòng | Chi phí ước tính |
|----|---------------|-------------------|--------------------|-----------------|
| 6.9 | Cảng quân sự / thành phố | Cáp quang (100+ Mbps, 5-20ms) | VPN LTE | $500-2.000 lắp đặt |
| 6.10 | Tàu chiến tại cảng | Fiber + WAN switch trên tàu | 4G/LTE khi rời cảng | $1.000-3.000 |
| 6.11 | Đảo Trường Sa (có cáp biển) | Cáp biển fiber | VSAT C-band | $0 (cơ sở hạ tầng sẵn) |
| 6.12 | Đảo xa / nhà giàn DK1 | VSAT Ku-band | VSAT C-band | $500-2.000/tháng |
| 6.13 | Xuồng tuần tra trên biển | LTE/4G duyên hải | VSAT (nếu xa bờ) | $50-200/tháng |

#### 6C. Bảo Mật Mạng

| TT | Lớp bảo mật | Thông số |
|----|-------------|---------|
| 6.14 | Mã hóa truyền thông | AES-256 end-to-end (WireGuard VPN) |
| 6.15 | Xác thực node | Certificate-based authentication — mỗi node có cert riêng, C2 Hub là CA |
| 6.16 | Phân tách mạng | CORTEX traffic trên VLAN riêng, tách biệt với mạng đơn vị |
| 6.17 | Air-gap option | Có — CORTEX hoạt động trên WAN nội bộ, không cần internet |
| 6.18 | Ghi nhật ký bảo mật | Tất cả kết nối + xác thực được ghi log tại C2 Hub |

### 7. Chia Sẻ Không Gian Chiến Trường (Shared Battlespace)

#### 7A. Phân Phối Bầy Mục Tiêu

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.1 | Nguồn sinh mục tiêu | C2 Hub (duy nhất) | — | Single source of truth — không bao giờ duplicate targets |
| 7.2 | Số mục tiêu UAV tối đa | 30 | mục tiêu | DJI Mavic, FPV, trinh sát, đạn lảng vảng — đồng thời |
| 7.3 | Số mục tiêu USV tối đa | 20 | mục tiêu | Xuồng tiếp cận, zigzag, tốc độ cao — đồng thời |
| 7.4 | Tổng mục tiêu tối đa | 50 | mục tiêu | UAV + USV kết hợp |
| 7.5 | Phương pháp phân bổ sector | C2 Force Allocation Console | — | Chỉ huy kéo-thả — thay đổi được real-time |
| 7.6 | Phân bổ tự động (fallback) | Có | — | Chia đều theo FOV nếu chỉ huy chưa định nghĩa sector |
| 7.7 | Số sóng tấn công (waves) | ≥ 5 | sóng | Mỗi sóng kích hoạt thủ công hoặc theo timer |

#### 7B. Kill Confirmation và State Sync

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.8 | Kill signal path | Node → C2 Hub → broadcast → tất cả nodes | — | C2 Hub là arbiter duy nhất |
| 7.9 | Kill confirmation latency | ≤ 100 | ms | Từ kill event tại node đến khi tất cả nodes cập nhật |
| 7.10 | Xử lý double-kill (2 nodes cùng kill 1 target) | Có | — | C2 Hub nhận cả 2 signal, xác nhận kill đầu tiên, ghi credit cho node đó |
| 7.11 | State update frequency | 20 | Hz | Position + velocity + health của mỗi mục tiêu |
| 7.12 | Giao thức sync | UDP multicast (position) + TCP (kill) | — | UDP cho tốc độ, TCP cho độ tin cậy kill confirm |
| 7.13 | Interpolation khi WAN jitter | Có | — | ≤ 200ms jitter → node nội suy vị trí, không freeze |

#### 7C. Cross-Node Target Handoff

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.14 | Phát hiện crossing boundary | Tự động | — | C2 Hub theo dõi vị trí tất cả mục tiêu vs sector boundaries |
| 7.15 | Thời gian từ detect đến handoff signal | ≤ 10 | ms | — |
| 7.16 | Thời gian node mới nhận tracking | ≤ 50 | ms | Bao gồm WAN round-trip |
| 7.17 | Tracking continuity | 100 | % | Track không bị gián đoạn khi handoff — velocity/acceleration preserved |
| 7.18 | Ghi nhật ký handoff | 100 | % | Tất cả handoff events ghi vào AAR data |
| 7.19 | Cảnh báo missed handoff | Có | — | Mục tiêu đi qua boundary mà không node nào bắn → alarm tại C2 Hub |

### 8. Các Node Huấn Luyện

CORTEX không thay đổi phần cứng của từng node — toàn bộ tính năng phần cứng (weapon station, display, motion platform nếu có, audio) đều giống như tài liệu của variant tương ứng. Tham chiếu:

| TT | Node | Tài liệu chi tiết | Số trạm | FOV | Motion |
|----|------|-------------------|---------|-----|--------|
| 8.1 | LITE (PA-2) | VN_CUAV_SIM_001_TNKCT_v1.1.md | 1 | 180° | 2-DOF |
| 8.2 | FIXED (PA-8) | VN_CUAV_SIM_001_FIXED_PA8_TNKCT_v1.0.md | 2 | 240° | Không |
| 8.3 | FULL (PA-6) | VN_CUAV_SIM_001_FULL_PA6_TNKCT_v1.0.md | 3 | 360° | 2-DOF |

CORTEX thêm vào mỗi node 1 thành phần phần mềm duy nhất:

| TT | Thành phần | Mô tả | Tài nguyên tiêu thụ |
|----|-----------|-------|---------------------|
| 8.4 | CORTEX Node Agent | Phần mềm chạy nền trên Render PC của node — nhận/gửi state sync, kill signals, voice | ~50MB RAM, ~2% CPU, 2 Mbps WAN |
| 8.5 | Node sector overlay | HUD hiển thị ranh giới sector được C2 Hub giao — xạ thủ biết nhiệm vụ của mình | Tích hợp vào Unity render |
| 8.6 | Cross-node target indicator | Mục tiêu ngoài FOV nhưng trong hệ thống → hiển thị indicator ở rìa màn hình | Tích hợp vào Unity render |

### 9. Hệ Thống Chấm Điểm Liên Hợp (Joint Scoring)

#### 9A. Cấu Trúc Điểm 3 Cấp

| TT | Cấp độ | Đối tượng | Tiêu chí chính | Trọng số |
|----|--------|-----------|----------------|---------|
| 9.1 | Cấp 1 — Cá nhân | Từng xạ thủ | Accuracy, reaction time, ammo efficiency, IFF, sector discipline | 100% |
| 9.2 | Cấp 2 — Kíp node | Từng node crew | Sector engagement rate, internal coordination, handoff received | 100% |
| 9.3 | Cấp 3 — Liên hợp | Toàn deployment | Overall kill rate, cross-handoff success, C2 compliance, joint effectiveness | 100% |

#### 9B. Tiêu Chí Chấm Điểm Chi Tiết

**Cấp 1 — Cá Nhân (áp dụng cho mọi xạ thủ, mọi node):**

| TT | Tiêu chí | Trọng số | Mô tả |
|----|----------|---------|-------|
| 9.4 | Trúng đích (accuracy rate) | 30% | Số hit / số phát bắn |
| 9.5 | Thời gian phản ứng | 20% | Từ khi mục tiêu vào sector đến lần bắn đầu tiên |
| 9.6 | Tiết kiệm đạn | 20% | Số đạn tiêu thụ / số mục tiêu tiêu diệt |
| 9.7 | Sector discipline | 15% | Tỷ lệ thời gian bắm theo dõi trong sector được giao |
| 9.8 | IFF compliance | 15% | Không bắn vào vùng cấm / mục tiêu friendly (kịch bản PORT-02, CTX-06) |

**Cấp 2 — Kíp Node:**

| TT | Tiêu chí | Trọng số | Mô tả |
|----|----------|---------|-------|
| 9.9 | Sector engagement rate | 35% | % mục tiêu trong sector được giao bị tiêu diệt trước khi lọt qua |
| 9.10 | Handoff received rate | 25% | % handoff nhận từ node khác được xử lý thành công |
| 9.11 | Phối hợp nội bộ node | 20% | Dành cho FIXED (2 trạm) và FULL (3 trạm) — crew coordination |
| 9.12 | Node uptime | 10% | % thời gian node duy trì kết nối và hoạt động |
| 9.13 | C2 order compliance | 10% | Kíp có thực hiện đúng lệnh điều chỉnh sector từ C2 Hub không |

**Cấp 3 — Lực Lượng Liên Hợp:**

| TT | Tiêu chí | Trọng số | Mô tả |
|----|----------|---------|-------|
| 9.14 | Overall engagement rate | 40% | % tổng mục tiêu bị tiêu diệt / tổng mục tiêu được tung ra |
| 9.15 | Cross-node handoff success | 25% | % handoff giữa các nodes thành công (target không bị bỏ sót) |
| 9.16 | C2 response time | 15% | Thời gian từ khi C2 phát lệnh đến khi node thực thi |
| 9.17 | Force distribution efficiency | 20% | Tỷ lệ tải xử lý giữa các nodes — không có node nào quá tải trong khi node khác rảnh |

#### 9C. Joint Effectiveness Rating

| Rating | Điều kiện | Ý nghĩa |
|--------|-----------|---------|
| A (Xuất sắc) | Overall engagement rate ≥ 85%, handoff success ≥ 90% | Lực lượng liên hợp hoạt động như đơn vị thống nhất |
| B (Khá) | Overall engagement rate 70-84%, handoff success 75-89% | Phối hợp tốt, có thể cải thiện thêm |
| C (Đạt) | Overall engagement rate 55-69%, handoff success 60-74% | Phối hợp cơ bản, cần tập thêm |
| D (Chưa đạt) | Overall engagement rate < 55% hoặc handoff success < 60% | Cần tập lại từ kịch bản cơ bản |

---

## III. ĐẶC TÍNH VẬN HÀNH

### 10. Triển Khai và Lắp Đặt

#### 10A. Trình Tự Triển Khai CORTEX

| TT | Bước | Nội dung | Thời gian | Nhân sự |
|----|------|----------|-----------|---------|
| 10.1 | Bước 1: Lắp đặt C2 Hub | Rack server + 4 màn hình + network equipment | 1 ngày | 2 kỹ thuật viên |
| 10.2 | Bước 2: Lắp đặt WAN | VPN router + cấu hình kết nối tới từng node | 0,5 ngày/node | 1-2 kỹ thuật viên/site |
| 10.3 | Bước 3: Cài CORTEX Node Agent | Chạy installer trên Render PC của mỗi node | 1 giờ/node | 1 kỹ thuật viên |
| 10.4 | Bước 4: Cấu hình C2 | Import node certs, định nghĩa sector defaults, test sync | 2 giờ | 1 kỹ sư Workshop X |
| 10.5 | Bước 5: WAN test | Đo latency, packet loss, bandwidth tất cả nodes | 1 giờ | 1 kỹ sư |
| 10.6 | Bước 6: Integration test | Chạy CTX-01 thử — kiểm tra kill confirm, AAR, voice | 2 giờ | Toàn đội |
| 10.7 | Bước 7: Đào tạo C2 operator | Hướng dẫn Force Allocation Console + AAR + voice intercom | 1 ngày | Workshop X trainer |
| 10.8 | **Tổng thời gian commissioning** | Cấu hình 3 nodes | **3-5 ngày** | 3-4 người Workshop X |

#### 10B. Yêu Cầu C2 Hub Room

| TT | Yêu cầu | Giá trị | Đơn vị |
|----|---------|---------|--------|
| 10.9 | Diện tích phòng C2 tối thiểu | 5 × 4 | m | Đủ cho rack + 4 màn hình + 2 ghế operator |
| 10.10 | Nguồn điện | 220V ±10%, 50Hz | — | PDU riêng nhánh C2 Hub |
| 10.11 | Điều hòa không khí | ≥ 2 HP | — | Server + 4 màn hình ~3kW |
| 10.12 | Kết nối mạng ra bên ngoài | ≥ 10 Mbps | — | WAN backbone — fiber hoặc VSAT |

### 11. Nguồn Điện

| TT | Hạng mục | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 11.1 | Nguồn cấp C2 Hub | 220V ±10%, 50Hz | — | Đơn pha tiêu chuẩn VN |
| 11.2 | Tiêu thụ C2 Hub (đỉnh) | ~3 | kW | Server 800W + 4× màn hình 200W + network 100W + audio 100W |
| 11.3 | Tiêu thụ C2 Hub (trung bình) | ~2,5 | kW | — |
| 11.4 | UPS C2 Hub | ≥ 30 | phút | 3 kVA — bảo vệ session data + graceful shutdown |
| 11.5 | Nguồn điện tại nodes | Xem TNKCT của từng node variant | — | PA-2: ~2kW; PA-8: ~2,5kW; PA-6: ~5kW |
| 11.6 | Tổng tiêu thụ điển hình (3 nodes + C2) | ~9,5-13 | kW | Phụ thuộc cấu hình node |

### 12. Vận Hành

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 12.1 | Nhân sự tối thiểu C2 Hub | 1 | sĩ quan C2 | Vận hành Force Allocation + voice + theo dõi AAR |
| 12.2 | Nhân sự mỗi node | Theo variant | người | LITE: 2; FIXED: 3; FULL: 4 (xạ thủ + instructor node) |
| 12.3 | Network administrator | 1 | kỹ thuật viên | Theo dõi WAN health — có thể remote nếu cần |
| 12.4 | Khởi động C2 Hub → sẵn sàng | ≤ 8 | phút | Bao gồm CORTEX Server boot + node authentication |
| 12.5 | Đồng bộ hóa trước khi bắt đầu diễn tập | ≤ 3 | phút | Kiểm tra kết nối + sync test + voice test |
| 12.6 | Đào tạo sĩ quan C2 (Force Allocation + AAR) | ≤ 2 | ngày | Bao gồm tạo kịch bản + điều hành diễn tập + AAR |
| 12.7 | Đào tạo kỹ thuật viên mạng | ≤ 2 | ngày | WAN config + diagnostics + troubleshooting |
| 12.8 | Vận hành liên tục | ≥ 8 | giờ/ngày | Không cần restart thường xuyên |
| 12.9 | Số buổi tập tối đa/ngày | ≥ 6 | buổi | 30-60 phút/buổi + 15 phút reset |

### 13. Bảo Trì

#### 13A. Bảo Trì CORTEX Software + C2 Hub

| TT | Hạng mục | Chu kỳ | Thời gian | Ghi chú |
|----|----------|--------|-----------|---------|
| 13.1 | Kiểm tra WAN health dashboard | Hàng ngày | 15 phút | Kiểm tra latency, packet loss, node status |
| 13.2 | Backup AAR data lên NAS | Hàng tuần | Tự động | Scheduled backup lúc 02:00 |
| 13.3 | CORTEX Server update | Mỗi 6 tháng | 2 giờ | Patch + tính năng mới — không downtime production |
| 13.4 | Scenario pack update | Mỗi 12 tháng | 1 giờ cài đặt | Workshop X cung cấp scenario mới |
| 13.5 | Bảo dưỡng C2 Hub hardware | Mỗi 6 tháng | 2 giờ | Vệ sinh lọc bụi server + kiểm tra log |
| 13.6 | SSL cert renewal | Mỗi 12 tháng | 1 giờ | Node authentication certs |
| 13.7 | WAN equipment check | Mỗi 3 tháng | 1 giờ | VPN router, VSAT terminal, cáp |

#### 13B. Bảo Trì Nodes

| TT | Hạng mục | Tham chiếu |
|----|----------|-----------|
| 13.8 | Bảo trì node LITE (PA-2) | Xem TNKCT PA-2 — mục 13 |
| 13.9 | Bảo trì node FIXED (PA-8) | Xem TNKCT PA-8 — mục 13 |
| 13.10 | Bảo trì node FULL (PA-6) | Xem TNKCT PA-6 — mục 13 |
| 13.11 | CORTEX Node Agent update | Đẩy từ C2 Hub — tự động cập nhật tất cả nodes | 

#### 13C. Chỉ Số Độ Tin Cậy Hệ Thống

| TT | Chỉ số | Giá trị | Ghi chú |
|----|--------|---------|---------|
| 13.12 | MTBF CORTEX software (server) | ≥ 2.000 | giờ | — |
| 13.13 | MTBF C2 Hub hardware | ≥ 500 | giờ | — |
| 13.14 | MTTR khi có sự cố WAN | ≤ 15 | phút | Remote diagnostics + node standalone fallback trong khi sửa |
| 13.15 | MTTR khi có sự cố C2 Hub | ≤ 4 | giờ | Spare server image sẵn có |
| 13.16 | Vòng đời phần mềm CORTEX | ≥ 10 | năm | Update liên tục — backward compatible |

---

## IV. CHI PHÍ VÀ HIỆU QUẢ

### 14. Chi Phí Triển Khai

#### 14A. Cấu Hình Nhỏ (2 Nodes FIXED + C2 Hub)

| TT | Thành phần | Chi phí |
|----|-----------|---------|
| 14.1 | 2× Node FIXED (PA-8) | 2× $55.000-80.000 = $110.000-160.000 |
| 14.2 | C2 Command Hub (phần cứng) | $11.000-20.000 |
| 14.3 | CORTEX software license (2 nodes) | 2× $5.000 = $10.000 |
| 14.4 | WAN infrastructure (2 sites) | $3.000-8.000 |
| 14.5 | Lắp đặt + commissioning + training | $8.000-12.000 |
| 14.6 | **Tổng cấu hình nhỏ** | **~$142.000-210.000** |
| 14.7 | **Giá bán mục tiêu** | **~$160.000-250.000** |

#### 14B. Cấu Hình Trung Bình — Đề Xuất (1 FULL + 2 FIXED + C2 Hub)

| TT | Thành phần | Chi phí |
|----|-----------|---------|
| 14.8 | 1× Node FULL (PA-6, 2-3 trạm bắn) | $120.000-200.000 |
| 14.9 | 2× Node FIXED (PA-8, 2 trạm bắn mỗi node) | $110.000-160.000 |
| 14.10 | C2 Command Hub (phần cứng) | $11.000-20.000 |
| 14.11 | CORTEX software license (3 nodes) | 3× $5.000 = $15.000 |
| 14.12 | WAN infrastructure (3 sites) | $5.000-15.000 |
| 14.13 | Lắp đặt + commissioning + training | $10.000-15.000 |
| 14.14 | **Tổng cấu hình trung bình** | **~$271.000-425.000** |
| 14.15 | **Giá bán mục tiêu** | **~$300.000-450.000** |
| 14.16 | **Biên lợi nhuận gộp ước tính** | **~60-70%** |

#### 14C. Cấu Hình Lớn (2 FULL + 2 FIXED + 2 LITE + C2 Hub)

| TT | Thành phần | Chi phí |
|----|-----------|---------|
| 14.17 | 2× Node FULL (PA-6) | 2× $120.000-200.000 = $240.000-400.000 |
| 14.18 | 2× Node FIXED (PA-8) | 2× $55.000-80.000 = $110.000-160.000 |
| 14.19 | 2× Node LITE (PA-2) | 2× $50.000-70.000 = $100.000-140.000 |
| 14.20 | C2 Command Hub (phần cứng, upgraded) | $15.000-25.000 |
| 14.21 | CORTEX software license (6 nodes) | 6× $5.000 = $30.000 |
| 14.22 | WAN infrastructure (6 sites) | $15.000-30.000 |
| 14.23 | Lắp đặt + commissioning + training | $20.000-30.000 |
| 14.24 | **Tổng cấu hình lớn** | **~$530.000-815.000** |
| 14.25 | **Giá bán mục tiêu** | **~$600.000-900.000** |

### 15. So Sánh Hiệu Quả Kinh Tế

| TT | Phương án | Chi phí | Tần suất | Chi phí/năm | Ghi chú |
|----|-----------|---------|----------|-------------|---------|
| 15.1 | Diễn tập thực địa liên quân cấp Vùng | ~$500.000-1.000.000/lần | 2 lần/năm | ~$1.000.000-2.000.000 | Nhiên liệu + đạn + vận chuyển + hao mòn |
| 15.2 | CORTEX cấu hình trung bình (3 nodes) | ~$350.000 (one-time) | — | ~$25.000 (vận hành + update) | Mô phỏng không giới hạn buổi tập |
| 15.3 | **Hòa vốn (break-even)** | **~0,35 lần diễn tập** | — | **< 3 tháng** | So sánh với 1 lần diễn tập thực địa $1M |
| 15.4 | Chi phí mỗi buổi tập CORTEX | ~$50-100 | mỗi buổi | — | Điện + hao mòn (250 buổi/năm) |
| 15.5 | Chi phí mỗi lần lặp lại kịch bản | $0 | — | — | Kịch bản có thể chạy không giới hạn lần |

### 16. Mô Hình Doanh Thu

| TT | Nguồn doanh thu | Giá trị | Chu kỳ | Ghi chú |
|----|-----------------|---------|--------|---------|
| 16.1 | Hardware nodes (one-time) | Xem bảng 14A-14C | Một lần | Theo cấu hình |
| 16.2 | C2 Hub hardware (one-time) | $11.000-25.000 | Một lần | — |
| 16.3 | CORTEX Node Agent license (one-time) | $5.000/node | Một lần | Per-node pricing |
| 16.4 | WAN setup (one-time) | $5.000-30.000 | Một lần | Tùy số nodes và địa điểm |
| 16.5 | Scenario pack update | $2.000/deployment/năm | Hàng năm | Kịch bản mới + cải thiện AI mục tiêu |
| 16.6 | C2 software update + support | $3.000/deployment/năm | Hàng năm | Tính năng mới + hotfix + remote support |
| 16.7 | Hardware maintenance contract | 5% hardware/năm | Hàng năm | Bao gồm on-site visit 2 lần/năm |
| 16.8 | Node expansion (upgrade path) | $50.000-200.000/node mới | Khi mua thêm | Thêm node bất cứ lúc nào |
| 16.9 | **Recurring revenue (3-node deployment)** | **~$13.000/năm** | **Hàng năm** | Scenario + software update |
| 16.10 | **Total revenue / 5 năm (3 nodes)** | **~$420.000-480.000** | — | One-time + 5 năm recurring |

---

## V. CẤU HÌNH TRIỂN KHAI ĐIỂN HÌNH

### 17. Ba Cấu Hình Triển Khai

#### Cấu Hình 1: Nhỏ — Phối Hợp Đảo (2 FIXED + C2 Hub)

**Mục tiêu:** Tổ chức diễn tập phối hợp phòng thủ giữa hai đảo/nhà giàn trong cùng cụm đảo.

| Hạng mục | Nội dung |
|----------|----------|
| Node A | FIXED (PA-8) — Đảo 1, 2 trạm bắn, 240° FOV |
| Node B | FIXED (PA-8) — Đảo 2 (cách Node A 5-50 km), 2 trạm bắn, 240° FOV |
| C2 Hub | Sở Chỉ Huy Cụm Đảo |
| Kết nối | Cáp biển fiber hoặc VSAT |
| Tổng nhân sự | 7 người (2 kíp × 3 người + 1 sĩ quan C2) |
| Kịch bản phù hợp | CTX-01 (phòng thủ đảo phối hợp), CTX-03 (bão hòa cảng) |
| Giá bán | ~$160.000-250.000 |

#### Cấu Hình 2: Trung Bình — Tổ Hợp Đa Lực Lượng (1 FULL + 2 FIXED + C2 Hub)

**Mục tiêu:** Diễn tập phối hợp giữa tàu chiến, đảo/nhà giàn, và xuồng tuần tra — tái hiện đúng cơ cấu lực lượng Vùng Hải Quân.

| Hạng mục | Nội dung |
|----------|----------|
| Node A | FULL (PA-6) — Tàu TT400TP hoặc HQ, 3 trạm bắn, 360° FOV, deck motion |
| Node B | FIXED (PA-8) — Đảo Trường Sa (hoặc nhà giàn DK1), 2 trạm bắn, 240° FOV |
| Node C | FIXED (PA-8) — Đảo thứ 2 hoặc cảng quân sự, 2 trạm bắn, 240° FOV |
| C2 Hub | Sở Chỉ Huy Vùng Hải Quân |
| Kết nối | Fiber (cảng) + VSAT (tàu + đảo) |
| Tổng nhân sự | 12 người (3 kíp × 3-4 người + 1-2 sĩ quan C2) |
| Kịch bản phù hợp | CTX-01 đến CTX-05 (đầy đủ) |
| Giá bán | **$300.000-450.000** |
| Ghi chú | **Đây là cấu hình Workshop X đề xuất** — cân bằng giữa chi phí và năng lực |

#### Cấu Hình 3: Lớn — Diễn Tập Cấp Vùng (2 FULL + 2 FIXED + 2 LITE + C2 Hub)

**Mục tiêu:** Diễn tập liên quân quy mô toàn Vùng — phù hợp cho Bộ Tư Lệnh Vùng Hải Quân tổ chức diễn tập thường niên.

| Hạng mục | Nội dung |
|----------|----------|
| Node A | FULL (PA-6) — Tàu chiến 1 (TT400TP) |
| Node B | FULL (PA-6) — Tàu chiến 2 (TT400TP hoặc Gepard) |
| Node C | FIXED (PA-8) — Đảo Trường Sa 1 |
| Node D | FIXED (PA-8) — Đảo Trường Sa 2 hoặc nhà giàn DK1 |
| Node E | LITE (PA-2) — Xuồng tuần tra 1 |
| Node F | LITE (PA-2) — Xuồng tuần tra 2 |
| C2 Hub | Sở Chỉ Huy Bộ Tư Lệnh Vùng (upgraded Xeon 32-core + 256GB RAM) |
| Kết nối | VSAT + LTE + cáp biển (tùy địa điểm) |
| Tổng nhân sự | 22-24 người (6 kíp + 2-3 sĩ quan C2 + 1 network admin) |
| Kịch bản phù hợp | CTX-01 đến CTX-06 (đầy đủ), + custom scenarios cấp Vùng |
| Giá bán | **$600.000-900.000** |

---

## VI. THÀNH PHẦN HỆ THỐNG

### 18. Bảng Kê Thành Phần C2 Command Hub (BOM)

#### BOM C2 Hub — Cấu Hình Trung Bình (3 nodes)

| TT | Hạng mục | Thông số | Số lượng | Đơn giá (USD) | Thành tiền (USD) | Ghi chú |
|----|----------|---------|---------|--------------|-----------------|---------|
| **PHẦN CỨNG SERVER** | | | | | | |
| 18.1 | Server CPU | Intel Xeon W-3455 (28 cores) hoặc tương đương | 1 | — | — | — |
| 18.2 | Server GPU | NVIDIA RTX 4080 16GB | 1 | 700-900 | 700-900 | Render tactical map + 3 node mirrors |
| 18.3 | RAM Server | 128GB ECC DDR5 | 1 kit | 400-600 | 400-600 | — |
| 18.4 | Storage | NVMe SSD 4TB (2× 2TB RAID-1) | 2 | 150-250 | 300-500 | AAR data + scenario library |
| 18.5 | Motherboard + Chassis | Server-grade rack 2U | 1 | 500-1.000 | 500-1.000 | — |
| 18.6 | PSU Redundant | 2× 800W (1+1 redundant) | 2 | 150-250 | 300-500 | — |
| **THIẾT BỊ HIỂN THỊ** | | | | | | |
| 18.7 | Màn hình chiến thuật | Samsung/LG 55" 4K LED | 4 | 700-1.200 | 2.800-4.800 | Tactical map + 3 node mirrors |
| 18.8 | HDMI hub/splitter | 8-port HDMI 2.0 | 1 | 100-200 | 100-200 | — |
| 18.9 | Giá đỡ màn hình | Floor stand 360° adjustable | 4 | 80-150 | 320-600 | — |
| **HẠ TẦNG MẠNG** | | | | | | |
| 18.10 | VPN Router | FortiGate 60F hoặc pfSense appliance | 1 | 600-1.200 | 600-1.200 | AES-256 WireGuard |
| 18.11 | Managed Switch L3 | 24-port Gigabit (Cisco/HPE) | 1 | 400-800 | 400-800 | VLAN, QoS |
| 18.12 | VSAT Terminal (tùy chọn) | Ku-band 90cm dish + modem | 1 | 1.500-3.000 | 1.500-3.000 | Cho C2 Hub nếu ở đảo |
| 18.13 | UPS | APC SMT3000RM2U (3kVA, 30 phút) | 1 | 800-1.200 | 800-1.200 | — |
| 18.14 | PDU rack | 16-outlet metered PDU | 1 | 150-300 | 150-300 | — |
| 18.15 | Rack cabinet | 19" 12U closed rack | 1 | 300-500 | 300-500 | Server + PDU + UPS + switch |
| **LIÊN LẠC GIỌNG NÓI** | | | | | | |
| 18.16 | Voice intercom server | Dedicated PC mini (i5 + 16GB RAM) | 1 | 400-600 | 400-600 | Chạy Mumble server / custom VoIP |
| 18.17 | Headset PTT | Military-style PTT headset | 4 | 80-150 | 320-600 | C2 operator + node lead per node |
| 18.18 | Audio interface | USB audio mixer 4 channel | 1 | 100-200 | 100-200 | — |
| **TỔNG PHẦN CỨNG C2 HUB** | | | | | **~$9.990-17.700** | — |

*Lưu ý: Giá trên là chi phí linh kiện. Giá bán C2 Hub đến khách hàng = $20.000-35.000 (bao gồm tích hợp, test, hỗ trợ 1 năm).*

### 19. Bảng Kê Phần Mềm CORTEX

| TT | Mô đun phần mềm | Nền tảng | License model | Chi phí |
|----|-----------------|---------|--------------|---------|
| 19.1 | CORTEX Server (C2 Hub) | Windows 11 Pro / Ubuntu 22.04 LTS | Per-deployment | Bao gồm trong C2 Hub package |
| 19.2 | CORTEX Node Agent | Windows 11 Pro (trên Render PC node) | Per-node | $5.000/node |
| 19.3 | Force Allocation Console | Web-based (Chrome/Firefox) | Bao gồm trong CORTEX Server | — |
| 19.4 | Swarm Distribution Engine | Python 3.11 + C++ core | Bao gồm trong CORTEX Server | — |
| 19.5 | State Sync Manager | Go 1.21 (UDP multicast + TCP) | Bao gồm trong CORTEX Server | — |
| 19.6 | Joint Scoring Engine | PostgreSQL 16 + Python | Bao gồm trong CORTEX Server | — |
| 19.7 | Joint AAR Engine | InfluxDB (time-series) + React frontend | Bao gồm trong CORTEX Server | — |
| 19.8 | Voice Intercom Server | Mumble 1.5 + custom PTT protocol | Open source + Workshop X custom | — |
| 19.9 | Diagnostics Console | Grafana + Prometheus | Open source | — |
| 19.10 | CORTEX Node Agent Unity plugin | Unity 6 LTS (C#) | Bao gồm trong CORTEX Node Agent | — |
| 19.11 | Scenario Pack CTX-01 đến CTX-06 | Bao gồm trong CORTEX Server | — | Bao gồm |
| 19.12 | Annual Scenario Pack Update | Workshop X | Annual subscription | $2.000/deployment/năm |
| 19.13 | Annual Software Support | Workshop X | Annual subscription | $3.000/deployment/năm |

**Stack công nghệ CORTEX (tóm tắt):**
- Backend: Python 3.11 + Go 1.21 + PostgreSQL 16 + InfluxDB
- Frontend: React (Force Allocation Console) + Grafana (Diagnostics)
- Real-time sync: UDP multicast (target state) + gRPC (kill confirmation)
- VPN/Security: WireGuard (AES-256) + mutual TLS certificates
- Render nodes: Unity 6 LTS + CORTEX Node Agent (C# plugin ~50MB)
- Voice: Mumble 1.5 + custom PTT scheduling layer

---

*Tài liệu này là TNKCT chính thức cho phiên bản PA-9 CORTEX của hệ thống VN-CUAV-SIM-001.*
*Workshop X — Bộ phận Quốc phòng & Huấn luyện — 07/04/2026*
*Tài liệu tham chiếu: TNKCT PA-2 (LITE), TNKCT PA-8 (FIXED), TNKCT PA-6 (FULL), Concept Description PA-9 v1.0*
