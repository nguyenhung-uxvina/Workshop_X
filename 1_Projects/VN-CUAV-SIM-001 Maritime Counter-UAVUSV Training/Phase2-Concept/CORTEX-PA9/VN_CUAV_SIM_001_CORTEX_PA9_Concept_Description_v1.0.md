---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Concept Description (Doc 010)
concept: PA-9 CORTEX
variant: CORTEX
version: v1.0
---

# VN-CUAV-SIM-001 CORTEX — Concept Description v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Phối Hợp Liên Quân — PA-9 CORTEX

**Ngày:** 2026-04-07
**Phase:** 2 — Conceptual Design
**Concept:** PA-9 CORTEX (phối hợp liên quân — multi-node, shared battlespace)
**Requirements baseline:** v1.0 (101 requirements: 71D + 30W)

---

## 1. Tổng Quan Concept

PA-9 CORTEX là hệ thống đầu tiên trong dòng sản phẩm VN-CUAV-SIM-001 cho phép **huấn luyện phối hợp liên quân thực sự** — xuồng tuần tra, đảo/nhà giàn DK1, và tàu chiến mặt nước diễn tập cùng một không gian chiến trường chia sẻ theo thời gian thực. CORTEX không phải là phần cứng mới — đây là **lớp phần mềm mạng + C2** được xây dựng bên trên các node phần cứng hiện có (LITE, FIXED, FULL), nối các node lại thành một hệ thống tác chiến thống nhất.

Điểm cốt lõi của CORTEX: **Shared Battlespace** — tất cả node trong mạng nhìn thấy cùng một bầy mục tiêu theo thời gian thực. Khi mục tiêu bị tiêu diệt tại Node A, nó biến mất ngay lập tức tại Node B và C. Người chỉ huy tại Sở Chỉ Huy Vùng điều phối lực lượng, phân bổ sector, và tổ chức tổng kết liên quân sau mỗi buổi diễn tập.

### Đặc Điểm Chính PA-9 CORTEX

| Hạng mục | Thông số |
|----------|----------|
| Quy mô nền tảng | Phối hợp liên quân — xuồng + đảo/nhà giàn + tàu chiến cùng lúc |
| Kiến trúc mạng | Multiple nodes (LITE + FIXED + FULL) kết nối WAN đến C2 Command Hub |
| Tính năng cốt lõi | Shared Battlespace — tất cả node nhìn thấy cùng bầy mục tiêu real-time |
| Quy mô bầy mục tiêu | 20-50 mục tiêu đồng thời (UAV + USV) |
| Đồng bộ hóa | WAN sync ≤ 100ms node-to-node |
| C2 Command Hub | Sở chỉ huy Vùng — tactical overview, force allocation, joint AAR |
| Cấu hình điển hình | 1 FULL (tàu) + 2 FIXED (đảo) + C2 Hub |
| Giá bán điển hình | $300.000+ mỗi triển khai (flagship product) |

### So Sánh PA-9 CORTEX Với Các Variant Khác

| Hạng mục | LITE (PA-2) | FIXED (PA-8) | FULL (PA-6) | **CORTEX (PA-9)** |
|----------|-------------|--------------|-------------|-------------------|
| Số node | 1 | 1 | 1 | **3-6+ nodes** |
| Phạm vi tác chiến | 1 tàu | 1 đảo/cảng | 1 tàu (3 trạm) | **Toàn vùng biển** |
| Bầy mục tiêu | 5-8 | 8-12 | 12-20 | **20-50** |
| Phối hợp | Cá nhân | 2-station crew | 3-station crew | **Multi-node joint** |
| C2 | Instructor | Instructor | Instructor | **Sở Chỉ Huy Vùng** |
| AAR | Đơn node | Đơn node | Đơn node | **Joint synchronized** |
| WAN sync | Không | Không | Không | **≤ 100ms** |
| Giá bán | $50-70K | $55-80K | $120-200K | **$300K+** |

---

## 2. Kiến Trúc Hệ Thống

CORTEX có kiến trúc phân tán hình sao (hub-and-spoke): mỗi node huấn luyện độc lập về mặt phần cứng, kết nối WAN về C2 Command Hub trung tâm. C2 Hub là bộ não chiến thuật — phân phối bầy mục tiêu, nhận tín hiệu kill confirmation, và duy trì đồng bộ trạng thái chiến trường.

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    PA-9 CORTEX — WAN TOPOLOGY                         ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  ┌─────────────────────────────────────────────────────────────────┐  ║
║  │                    C2 COMMAND HUB                               │  ║
║  │             Sở Chỉ Huy Vùng — Tactical Center                  │  ║
║  │                                                                 │  ║
║  │  ┌─────────────┐  ┌─────────────┐  ┌──────────┐  ┌──────────┐  │  ║
║  │  │ Tactical Map │  │Node A Mirror│  │Node B Mir│  │Node C Mir│  │  ║
║  │  │   55" 4K    │  │    55"      │  │   55"    │  │   55"    │  │  ║
║  │  └─────────────┘  └─────────────┘  └──────────┘  └──────────┘  │  ║
║  │                                                                 │  ║
║  │  Xeon/EPYC + RTX 4080 + 128GB RAM                              │  ║
║  │  CORTEX Server: Swarm Engine + Sync + AAR + Voice Intercom     │  ║
║  └───────────────┬─────────────────────────────────────────────────┘  ║
║                  │                                                    ║
║        WAN (VPN/VSAT/Fiber) — Sync ≤ 100ms — AES-256 Encrypted      ║
║                  │                                                    ║
║    ┌─────────────┼──────────────────────────┐                        ║
║    │             │                          │                        ║
║    ▼             ▼                          ▼                        ║
║ ┌──────────┐  ┌────────────┐           ┌──────────┐                  ║
║ │  NODE A  │  │   NODE B   │           │  NODE C  │                  ║
║ │  FULL    │  │   FIXED    │           │   LITE   │                  ║
║ │  PA-6    │  │   PA-8     │           │   PA-2   │                  ║
║ │          │  │            │           │          │                  ║
║ │Tàu TT400 │  │Đảo Trường  │           │Xuồng tuần│                  ║
║ │3 stations│  │Sa, 2 stn   │           │tra, 1 stn│                  ║
║ │360° FOV  │  │240° FOV    │           │180° FOV  │                  ║
║ │Deck motion│ │Fixed       │           │Motion    │                  ║
║ │          │  │            │           │          │                  ║
║ │CORTEX    │  │CORTEX      │           │CORTEX    │                  ║
║ │Node Agent│  │Node Agent  │           │Node Agent│                  ║
║ └──────────┘  └────────────┘           └──────────┘                  ║
╚═══════════════════════════════════════════════════════════════════════╝
```

**Nguyên tắc kiến trúc quan trọng:**
- Mỗi node hoạt động **độc lập hoàn toàn** khi mất kết nối WAN (standalone fallback)
- CORTEX Node Agent là phần mềm nhỏ (~50MB) chạy trên Render PC hiện có của mỗi node
- C2 Hub là nguồn sự thật duy nhất (single source of truth) về trạng thái chiến trường
- Không có phần cứng đặc biệt tại node — chỉ có phần mềm và kết nối mạng

---

## 3. C2 Command Hub

C2 Command Hub là trái tim của triển khai CORTEX. Đây là Sở Chỉ Huy Vùng thu nhỏ — tái hiện môi trường chỉ huy thực sự của cấp chỉ huy chiến dịch.

### 3.1 Phần Cứng C2 Hub

| Hạng mục | Thông số | Chi phí ước tính |
|----------|----------|-----------------|
| Server chính | Xeon W-3400 hoặc EPYC 7003 + RTX 4080 + 128GB ECC RAM + NVMe 4TB | $5.000-8.000 |
| Màn hình chiến thuật | 4× LED 55" 4K (1× tactical map + 3× node mirrors) | $3.000-5.000 |
| Hạ tầng mạng | Managed switch L3 + VPN router (FortiGate/pfSense) + VSAT terminal (tùy chọn) | $2.000-5.000 |
| Hệ thống liên lạc | Voice intercom server (IP-based, AES-256) + headset × 4 | $1.000-2.000 |
| CORTEX software | Giấy phép per-node (3 nodes điển hình) | $15.000 (3× $5K) |
| **Tổng C2 Hub** | | **~$26.000-35.000** |

*Lưu ý: CORTEX software license $5.000/node là recurring revenue — upgrade và scenario mới tính phí riêng.*

### 3.2 Phần Mềm CORTEX Server

CORTEX Server chạy trên C2 Hub, thực hiện các nhiệm vụ:

| Mô đun phần mềm | Chức năng | Công nghệ |
|-----------------|-----------|-----------|
| Swarm Distribution Engine | Sinh và phân phối 20-50 mục tiêu UAV/USV theo kịch bản | Python + WebSocket |
| State Sync Manager | Đồng bộ trạng thái chiến trường ≤ 100ms giữa tất cả node | UDP multicast + TCP fallback |
| Kill Confirmation Arbiter | Nhận kill signal từ node, xác nhận và broadcast trạng thái mục tiêu | gRPC |
| Force Allocation Console | GUI chỉ huy phân bổ sector theo node theo thời gian thực | Web-based (React) |
| Joint Scoring Engine | Tổng hợp điểm từ tất cả nodes + tính điểm hiệu quả liên hợp | PostgreSQL |
| Joint AAR Engine | Thu thập session data từ tất cả nodes, đồng bộ timeline | Time-series DB |
| Voice Intercom | Simulated radio protocol giữa các node + C2 | Mumble/custom VoIP |

### 3.3 Màn Hình Chiến Thuật

| Màn hình | Kích thước | Nội dung |
|----------|------------|----------|
| Monitor 1 (Tactical Map) | 55" 4K | Bản đồ chiến thuật tổng thể — vị trí tất cả node + tất cả mục tiêu + kill events real-time |
| Monitor 2 (Node A Mirror) | 55" 4K | Nhìn từ góc quan sát Node A (god-eye) — chỉ huy theo dõi trực tiếp |
| Monitor 3 (Node B Mirror) | 55" 4K | Nhìn từ góc quan sát Node B |
| Monitor 4 (Node C Mirror) | 55" 4K | Nhìn từ góc quan sát Node C |

Chỉ huy có thể chuyển bất kỳ màn hình nào sang chế độ **Scoring Live** hoặc **AAR Playback** trong khi diễn tập đang chạy.

### 3.4 Hệ Thống Liên Lạc Giọng Nói

CORTEX tái hiện hệ thống liên lạc radio quân sự:

| Tính năng | Mô tả |
|-----------|-------|
| Kênh chỉ huy | C2 Hub ↔ tất cả node (broadcast) — chỉ huy phát lệnh |
| Kênh node-to-node | Node A ↔ Node B, Node B ↔ Node C (direct) — phối hợp ngang |
| Mã hóa | AES-256 end-to-end |
| Độ trễ audio | ≤ 50ms (nội bộ LAN) / ≤ 150ms (qua WAN) |
| Giao thức mô phỏng | PTT (Push-to-Talk) — giống radio thực tế |
| Ghi âm | Toàn bộ liên lạc được ghi lại — phát lại trong AAR |

---

## 4. Node Types

PA-9 CORTEX tương thích với tất cả 3 loại node trong dòng VN-CUAV-SIM-001. Mỗi node duy trì đầy đủ khả năng standalone — CORTEX chỉ thêm lớp mạng, không thay đổi phần cứng.

| Node | Variant | Phần cứng | Trạm bắn | Phạm vi | Môi trường | Tài liệu |
|------|---------|-----------|----------|---------|------------|----------|
| LITE | PA-2 | Compact | 1 | 180° | Xuồng / tàu nhỏ | Doc PA-2 |
| FIXED | PA-8 | Standard | 2 | 240° | Đảo / nhà giàn / cảng | Doc PA-8 |
| FULL | PA-6 | Full-scale | 3 | 360° | Tàu chiến TT400/HQ | Doc PA-6 |

**Nguyên tắc nâng cấp CORTEX:** Bất kỳ đơn vị nào đang có node standalone (PA-2, PA-6, hoặc PA-8) đều có thể nâng cấp lên CORTEX bằng cách thêm **CORTEX Node Agent** (phần mềm) + **WAN connection** + **C2 Hub**. Không cần thay phần cứng.

---

## 5. Shared Battlespace Engine

Đây là tính năng cốt lõi tạo ra giá trị khác biệt của CORTEX.

### 5.1 Nguyên Lý Hoạt Động

```
C2 Hub: Sinh ra Swarm (20-50 mục tiêu)
    ↓
Phân bổ mục tiêu → Node A (sector Bắc), Node B (sector Nam), Node C (sector Đông)
    ↓
Mỗi node nhận danh sách mục tiêu TOÀN CỤC (không phải chỉ sector của mình)
    ↓
Node chỉ render chi tiết mục tiêu trong FOV của mình — nhưng biết vị trí tất cả
    ↓
Xạ thủ tiêu diệt mục tiêu → Kill signal → C2 Hub
    ↓
C2 Hub xác nhận Kill → Broadcast REMOVE [target_id] → TẤT CẢ nodes
    ↓
Mục tiêu biến mất đồng thời trên tất cả màn hình (≤ 100ms)
```

### 5.2 Swarm Distribution

| Tham số | Giá trị | Ghi chú |
|---------|---------|---------|
| Tổng mục tiêu tối đa | 50 | 20 UAV + 10 USV đồng thời (điển hình) |
| Phương pháp phân bổ | C2 Force Allocation Console | Chỉ huy kéo-thả sector cho từng node |
| Phân bổ tự động (fallback) | Có | Chia đều theo FOV nếu chỉ huy chưa phân bổ |
| Dynamic reallocation | Có | Chỉ huy có thể chuyển sector giữa chừng |
| Swarm wave scheduling | Có | Sóng tấn công 1, 2, 3 — C2 kích hoạt từng sóng |

### 5.3 Cross-Node Handoff

Khi mục tiêu bay/di chuyển từ sector của Node này sang sector của Node khác:

| Bước | Hành động | Thời gian |
|------|-----------|-----------|
| 1 | Mục tiêu đi qua ranh giới sector | — |
| 2 | C2 Hub phát hiện → gửi HANDOFF [target_id, new_node] | < 10ms |
| 3 | Node mới nhận handoff → target xuất hiện trong FOV với tracking đã có | < 50ms |
| 4 | Node cũ giảm priority mục tiêu này (vẫn visible nếu còn trong FOV) | Tức thì |
| 5 | C2 HQ ghi nhận handoff event → tính vào AAR | — |

Handoff được ghi lại đầy đủ trong AAR — cho phép phân tích tại sao mục tiêu "lọt" hoặc được chuyển giao không thành công.

### 5.4 State Synchronization Protocol

| Thông số | Giá trị |
|----------|---------|
| Sync interval | 50ms (20Hz update rate) |
| Protocol | UDP multicast (trạng thái mục tiêu) + TCP (kill confirmation) |
| Packet size trung bình | ~2KB/frame (50 targets × 40 bytes each) |
| Bandwidth yêu cầu | ~320 Kbps mỗi node (upstream + downstream) |
| WAN latency budget | ≤ 100ms (node-to-node qua C2 Hub) |
| Xử lý mất gói | Target state interpolation — không đứt hình khi jitter < 200ms |
| Reconnect tự động | ≤ 5 giây sau khi WAN phục hồi |

---

## 6. CORTEX-Exclusive Features

### 6.1 Shared Battlespace

**Đây là tính năng không thể có trong bất kỳ hệ thống standalone nào.** Tất cả node nhìn thấy cùng không gian tác chiến — mục tiêu được sinh ra một lần tại C2 Hub, phân phối đến tất cả node, và kill confirmation được xác nhận toàn hệ thống.

Ý nghĩa huấn luyện: xạ thủ tại đảo DK1 biết rằng mục tiêu vừa bị tàu chiến tiêu diệt sẽ không còn trong danh sách của họ — đúng như tác chiến thực.

### 6.2 Swarm Distribution

C2 Hub phân bổ bầy mục tiêu theo kịch bản, không phải mỗi node tự sinh mục tiêu độc lập. Điều này đảm bảo:
- Tổng số mục tiêu nhất quán (không bao giờ 20 node A + 20 node B = 40 mục tiêu cùng tên)
- Chỉ huy có thể "rót" thêm mục tiêu vào sector bất kỳ từ C2 HQ
- Wave attack thực tế — sóng 1 từ hướng Bắc, sóng 2 từ hướng Nam, đánh bất ngờ

### 6.3 Force Allocation

Chỉ huy tại C2 Hub phân bổ lực lượng trước và trong khi diễn tập:

| Tính năng | Mô tả |
|-----------|-------|
| Phân bổ sector trước khi diễn tập | Kéo-thả sector trên bản đồ chiến thuật cho từng node |
| Thay đổi sector real-time | Điều chỉnh giữa chừng — thử thách khả năng thích nghi của kíp |
| Tập trung hỏa lực | Assign cùng sector cho 2 node — luyện phối hợp hỏa lực chồng lấp |
| Phân chia wave | Sóng 1 → Node A lo, Sóng 2 → Node B+C phối hợp |
| Lệnh chỉ huy qua voice | Phát lệnh qua voice intercom — thử nghiệm khả năng chỉ huy trong tiếng ồn/áp lực |

### 6.4 Cross-Node Handoff Tracking

Mục tiêu có thể được "chuyển giao" giữa các node khi di chuyển sang sector khác. Hệ thống theo dõi:
- Handoff có xảy ra đúng thời điểm không?
- Node tiếp nhận có phản ứng kịp thời không?
- Có khoảng trống hỏa lực nào trong quá trình handoff không?

Kết quả handoff tracking được đưa vào AAR — chỉ huy có thể xem lại từng handoff event trên timeline.

### 6.5 Joint Scoring

Điểm số CORTEX có 3 cấp độ:

| Cấp độ | Đối tượng | Tiêu chí |
|--------|-----------|----------|
| Cá nhân | Từng xạ thủ | Trúng đích, thời gian phản ứng, tiết kiệm đạn |
| Kíp node | Từng node crew | Phối hợp nội bộ node + sector discipline |
| Lực lượng liên hợp | Toàn triển khai | Tỷ lệ tiêu diệt, cross-node handoff success, C2 latency |

### 6.6 Joint AAR

AAR liên quân là điểm khác biệt lớn nhất về mặt huấn luyện:

- Phát lại toàn bộ chiến trường từ tất cả node — synchronized timeline duy nhất
- Góc nhìn god-eye trên bản đồ chiến thuật — chỉ huy xem từ trên cao
- Zoom vào từng node — xem xạ thủ cụ thể đã làm gì
- Overlay: trajectory tất cả mục tiêu + đường bắn tất cả xạ thủ + handoff events
- Phân tích: "Tại sao mục tiêu này lọt qua? Node A không nhận handoff kịp thời."

### 6.7 Encrypted Voice Intercom

Hệ thống liên lạc nội bộ giữa các node và C2 Hub mô phỏng đúng quy trình radio quân sự:
- PTT (Push-to-Talk) — không nói chuyện tự do như điện thoại
- Kênh riêng: command channel + coordination channel
- Toàn bộ liên lạc được ghi âm và phát lại trong AAR
- Chỉ huy có thể nghe lại xem mệnh lệnh có được truyền đạt rõ ràng không

---

## 7. CORTEX-Exclusive Scenarios (CTX-01 đến CTX-06)

| ID | Tên kịch bản | Cấu hình node | Số mục tiêu | Thời gian | Mức độ |
|----|-------------|---------------|-------------|-----------|--------|
| CTX-01 | Phòng thủ đảo phối hợp | 2× FIXED | 8 UAV → 2 đảo | 10 phút | Trung bình |
| CTX-02 | Tàu + bờ phòng thủ hỗn hợp | 1× FULL + 1× FIXED | 10 UAV + 4 USV | 15 phút | Nâng cao |
| CTX-03 | Bão hòa cảng | 2× FIXED | 20 mục tiêu đồng thời | 8 phút | Nâng cao |
| CTX-04 | Diễn tập liên quân toàn phần | 1× FULL + 2× FIXED | 30 mục tiêu, 3 sóng | 30 phút | Chuyên gia |
| CTX-05 | Kiểm tra quá tải C2 | Tất cả nodes | 50 mục tiêu | 15 phút | Chuyên gia |
| CTX-06 | Phòng thủ đêm liên quân | Tất cả nodes | 20 mục tiêu (NVG) | 20 phút | Chuyên gia |

### Chi Tiết Kịch Bản

**CTX-01 — Phòng Thủ Đảo Phối Hợp:**
Hai đảo (2 node FIXED) bị tấn công bởi 8 UAV swarm phối hợp. 4 UAV tấn công Đảo A, 4 UAV tấn công Đảo B. Thử nghiệm: khi Đảo A tiêu diệt UAV nhanh hơn — chỉ huy có nên điều UAV "dư" sang hỗ trợ Đảo B không? Cross-node fire support thực tế.

**CTX-02 — Tàu + Bờ Phòng Thủ Hỗn Hợp:**
Tàu chiến (FULL) và đảo (FIXED) phối hợp phòng thủ. USV tiếp cận từ phía biển — tàu lo. UAV bay qua đảo — đảo lo. Nhưng khi UAV xuất hiện từ phía biển, tàu và đảo cùng nhìn thấy — ai bắn? Cross-node IFF và deconfliction.

**CTX-03 — Bão Hòa Cảng:**
20 mục tiêu tấn công 2 cảng đồng thời — test xem 2 kíp FIXED có thể xử lý không khi bị áp đảo. C2 có thể "rót" thêm mục tiêu vào một cảng đang yếu hơn để test khả năng ứng phó.

**CTX-04 — Diễn Tập Liên Quân Toàn Phần:**
Kịch bản flagship của CORTEX. 30 phút, 3 sóng tấn công, 30 mục tiêu. Sóng 1 (10 phút): UAV trinh sát — nhận biết, báo cáo, không bắn. Sóng 2 (10 phút): 15 mục tiêu tấn công — full engagement. Sóng 3 (10 phút): 15 mục tiêu còn lại, nhưng có mục tiêu giả mồi — IFF + deception. Joint AAR sau 30 phút.

**CTX-05 — Kiểm Tra Quá Tải C2:**
50 mục tiêu — nhiều hơn khả năng xử lý của bất kỳ kíp đơn lẻ nào. Test: chỉ huy có phân bổ đúng không? Kíp nào bị áp đảo trước? Phát hiện bottleneck trong chuỗi chỉ huy. Không có kịch bản nào "thắng" kịch bản này — mục đích là tìm điểm thất bại.

**CTX-06 — Phòng Thủ Đêm Liên Quân:**
Toàn bộ diễn tập trong điều kiện đêm — chỉ có NVG overlay và voice communications. Kiểm tra: kíp có duy trì discipline không khi không nhìn thấy nhau? Liên lạc voice có rõ ràng không? Phát lại AAR sáng hôm sau — so sánh quyết định ngày vs đêm.

---

## 8. Joint Scoring & AAR

### 8.1 Kiến Trúc Chấm Điểm 3 Cấp

```
JOINT SCORING ARCHITECTURE
═══════════════════════════════════════════════════════════

  CẤP 1: CÁ NHÂN (per-gunner)
  ────────────────────────────
  • Trúng đích (accuracy rate)
  • Thời gian phản ứng trung bình
  • Tiết kiệm đạn (rounds/kill)
  • IFF compliance (không bắn vùng cấm)
  • Sector discipline (không rời sector được giao)

  CẤP 2: KÍP NODE (per-node crew)
  ─────────────────────────────────
  • Tỷ lệ tiêu diệt trong sector được giao (%)
  • Cross-station coordination (FIXED + FULL nodes)
  • Handoff received / missed (khi nhận mục tiêu từ node khác)
  • Node total effectiveness score

  CẤP 3: LỰC LƯỢNG LIÊN HỢP (joint force)
  ──────────────────────────────────────────
  • Overall engagement rate (% mục tiêu bị tiêu diệt / tổng mục tiêu)
  • Cross-node handoff success rate
  • C2 order compliance (kíp có theo lệnh chỉ huy không?)
  • Time-to-engage sau khi nhận lệnh phân bổ
  • Joint force effectiveness rating (A/B/C/D)

═══════════════════════════════════════════════════════════
```

### 8.2 Joint AAR — Timeline Đồng Bộ

AAR liên quân phát lại toàn bộ diễn tập trên một timeline thống nhất:

| Tính năng | Mô tả |
|-----------|-------|
| Synchronized playback | Tất cả node phát lại cùng một clock — không lệch pha |
| God-eye tactical view | Nhìn toàn bộ chiến trường từ trên — thấy tất cả mục tiêu + tất cả xạ thủ |
| Node drill-down | Click vào node → zoom vào góc nhìn của node đó |
| Handoff visualization | Mũi tên hiển thị handoff events trên timeline |
| Voice intercom replay | Nghe lại liên lạc giọng nói tại từng thời điểm trong AAR |
| Kill confirmation markers | Marker màu theo node — ai tiêu diệt mục tiêu nào |
| Export | PDF joint report + CSV raw data (tất cả nodes) |

---

## 9. Tổng Hợp Chi Phí

### 9.1 Cấu Hình Điển Hình: 1 FULL + 2 FIXED + C2 Hub

| Thành phần | Chi phí |
|-----------|---------|
| 1× Node FULL (PA-6, tàu TT400, 2-3 trạm bắn) | $120.000-200.000 |
| 2× Node FIXED (PA-8, đảo, 2 trạm bắn mỗi node) | 2× $55.000-80.000 = $110.000-160.000 |
| 1× C2 Command Hub (phần cứng) | $11.000-20.000 |
| CORTEX software license (3 nodes × $5.000) | $15.000 |
| WAN infrastructure (VPN/VSAT/fiber, tùy địa điểm) | $5.000-15.000 |
| Lắp đặt + commissioning + training | $10.000-15.000 |
| **Tổng** | **~$271.000-425.000** |
| **Giá bán mục tiêu** | **$300.000-450.000** |
| **Biên lợi nhuận gộp** | **~60-70%** |

*Lưu ý: Biên lợi nhuận CORTEX thấp hơn standalone nodes (70-80%) do WAN infrastructure và commissioning phức tạp hơn. Bù lại bằng giá tuyệt đối cao hơn và CORTEX software license là recurring revenue.*

### 9.2 Doanh Thu Từ CORTEX Software License

| Hạng mục | Giá | Chu kỳ |
|----------|-----|--------|
| CORTEX Node Agent license | $5.000/node | One-time |
| Scenario pack update (annual) | $2.000/deployment | Hàng năm |
| C2 software update | $3.000/deployment | Hàng năm |
| **Recurring revenue (3-node deployment)** | **~$5.000/năm** | Hàng năm |

---

## 10. Deployment Scenarios

### Cấu Hình Nhỏ: 2 Nodes + C2 Hub (~$150.000-220.000)

Phù hợp cho đơn vị muốn bắt đầu với CORTEX ở quy mô nhỏ:

| Node | Variant | Vị trí |
|------|---------|--------|
| Node A | FIXED (PA-8) | Đảo Trường Sa 1 |
| Node B | FIXED (PA-8) | Đảo Trường Sa 2 |
| C2 Hub | — | Sở Chỉ Huy Vùng 4 |

Kịch bản phù hợp: CTX-01 (phòng thủ đảo phối hợp), CTX-03 (bão hòa cảng — 2 đảo).

### Cấu Hình Trung Bình: 3 Nodes + C2 Hub (~$270.000-420.000)

**Đây là cấu hình điển hình được đề xuất:**

| Node | Variant | Vị trí |
|------|---------|--------|
| Node A | FULL (PA-6) | Tàu TT400TP |
| Node B | FIXED (PA-8) | Đảo Trường Sa |
| Node C | LITE (PA-2) | Xuồng tuần tra |
| C2 Hub | — | Sở Chỉ Huy Vùng |

Kịch bản phù hợp: CTX-01 đến CTX-05 (đầy đủ). Đây là gói triển khai mà Workshop X đề xuất làm baseline.

### Cấu Hình Lớn: 4-6 Nodes + C2 Hub (~$500.000-800.000)

Dành cho Bộ Tư Lệnh Vùng muốn tổ chức diễn tập quy mô toàn vùng:

| Node | Variant | Vị trí |
|------|---------|--------|
| Node A | FULL (PA-6) | Tàu chiến TT400 |
| Node B | FULL (PA-6) | Tàu chiến TT400 thứ 2 |
| Node C | FIXED (PA-8) | Đảo Trường Sa 1 |
| Node D | FIXED (PA-8) | Đảo Trường Sa 2 |
| Node E | LITE (PA-2) | Xuồng tuần tra 1 |
| Node F | LITE (PA-2) | Xuồng tuần tra 2 |
| C2 Hub | — | Sở Chỉ Huy Vùng |

---

## 11. WAN Infrastructure

### 11.1 Các Phương Án Kết Nối

| Phương án | Băng thông | Độ trễ | Chi phí | Phù hợp với |
|-----------|-----------|--------|---------|------------|
| Cáp quang (fiber) | 100+ Mbps | 5-20ms | $500-2.000 (cài đặt) | Cảng + đất liền |
| VPN qua internet thương mại | 10-50 Mbps | 20-80ms | $100-300/tháng | Cảng + thành phố |
| VSAT (vệ tinh) | 5-20 Mbps | 600-700ms* | $500-2.000/tháng | Đảo xa, nhà giàn |
| LTE/5G (backup) | 10-100 Mbps | 30-100ms | $50-200/tháng | Tất cả (backup) |

*VSAT latency 600-700ms quá cao cho sync ≤ 100ms — **giải pháp**: dùng prediction engine tại node để nội suy trạng thái mục tiêu trong khoảng thời gian chờ sync. Mục tiêu đủ chậm (drone/tàu) để prediction < 1 giây vẫn chấp nhận được.

### 11.2 Yêu Cầu Băng Thông Tối Thiểu

| Số nodes | Bandwidth tối thiểu | Khuyến nghị |
|---------|---------------------|-------------|
| 2 nodes | 512 Kbps/node | 2 Mbps/node |
| 3 nodes | 512 Kbps/node | 2 Mbps/node |
| 6 nodes | 512 Kbps/node | 2 Mbps/node |

Băng thông thấp (< 1 Mbps) vẫn hoạt động nhờ protocol tối ưu (chỉ gửi delta, không gửi toàn bộ state mỗi frame).

### 11.3 Bảo Mật Mạng

| Lớp bảo mật | Thông số |
|-------------|---------|
| Mã hóa truyền thông | AES-256 end-to-end (WireGuard VPN) |
| Xác thực node | Certificate-based (mỗi node có cert riêng) |
| Phân tách mạng | CORTEX traffic trên VLAN riêng |
| Air-gap option | Deployment không cần internet — chỉ cần WAN nội bộ |

---

## 12. Known Risks

| ID | Rủi ro | Xác suất | Mức độ ảnh hưởng | Biện pháp giảm thiểu |
|----|--------|----------|-----------------|---------------------|
| R1 | VSAT latency > 700ms tại đảo xa | Cao | Trung bình | Prediction engine tại node; target speed limit 250 km/h đủ để nội suy ≤ 1 giây |
| R2 | WAN mất kết nối giữa diễn tập | Trung bình | Cao | Standalone fallback mode — node tự hoạt động đến khi WAN phục hồi; tự reconnect ≤ 5 giây |
| R3 | Phức tạp hóa multi-node sync debugging | Cao | Trung bình | Logging đầy đủ; debug console tại C2 Hub; remote diagnostics |
| R4 | Chi phí WAN cao tại nhà giàn (VSAT $2.000/tháng) | Cao | Cao | Đề xuất gói diễn tập định kỳ (4 lần/năm) thay vì kết nối thường xuyên |
| R5 | Độ trễ cao khi có 50 targets đồng thời trên WAN yếu | Trung bình | Trung bình | LOD (Level of Detail) cho targets xa; chỉ sync full-detail targets trong FOV |
| R6 | Phức tạp trong training/commissioning đa site | Cao | Trung bình | Tài liệu chi tiết; video hướng dẫn; remote support qua VPN |

---

## 13. Revenue Model

### 13.1 Cấu Trúc Doanh Thu CORTEX

```
CORTEX REVENUE STREAMS
═══════════════════════════════════════════════════════════

  ONE-TIME (per deployment)
  ─────────────────────────
  • Node hardware (LITE/FIXED/FULL) — see individual node pricing
  • C2 Hub hardware: $11.000-20.000
  • CORTEX Node Agent license: $5.000/node
  • WAN infrastructure setup: $5.000-15.000
  • Installation + commissioning: $10.000-15.000

  RECURRING (annual)
  ───────────────────
  • Scenario pack update: $2.000/deployment/năm
  • C2 software update + support: $3.000/deployment/năm
  • Hardware maintenance: 5% hardware cost/năm

  EXPANSION (upgrade path)
  ─────────────────────────
  • Add new node: $50.000-200.000 (tùy variant) + $5.000 CORTEX license
  • Upgrade LITE → FIXED: delta cost + $2.000 migration fee
  • Multi-region deployment: new C2 Hub + WAN + license

═══════════════════════════════════════════════════════════
  3-node deployment, 5 năm: ~$350.000 one-time + $25.000/năm recurring
  → Total 5-năm revenue: ~$475.000/deployment
═══════════════════════════════════════════════════════════
```

### 13.2 Chiến Lược Bán Hàng

CORTEX là sản phẩm flagship — không bán lẻ từng node. Chiến lược:
1. **Pilot với 1 node FIXED** → chứng minh giá trị → upgrade lên CORTEX
2. **Demo kịch bản CTX-04** (diễn tập liên quân 30 phút) tại sự kiện Bộ Quốc Phòng
3. **Budget alignment**: CORTEX phù hợp ngân sách cấp Bộ Tư Lệnh Vùng (không phải đơn vị cấp tàu/đảo đơn lẻ)
4. **Recurring model**: nhấn mạnh $5.000/năm scenario update = 1/60 giá live exercise tương đương

---

## Phụ Lục: IRONMESH Portfolio Synergy

| Tái sử dụng | Từ → Đến | Giá trị |
|------------|---------|---------|
| V-SMASH ballistic engine | V-SMASH → tất cả nodes | -$5.000 dev per node |
| Solenoid recoil driver | BB-01 LOMAH → weapon modules | -$50 dev per module |
| Weapon station hardware | PA-2 → PA-8 → PA-6 | 100% tái sử dụng cradle + WMs |
| Scenario engine core | PA-2 → PA-8 → PA-6 → PA-9 | Tái sử dụng base, thêm CORTEX layer |
| CORTEX Node Agent | PA-9 → tất cả future nodes | Write once, deploy everywhere |
| Joint AAR engine | PA-9 → tương lai C2 integration | Nền tảng cho C2 systems tương lai |

*CORTEX là product cao nhất trong portfolio IRONMESH — kết tinh giá trị của toàn bộ dòng sản phẩm.*
