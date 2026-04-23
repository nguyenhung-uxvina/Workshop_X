---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
variant: CORTEX (PA-9)
baseline: VN_CUAV_SIM_001_Requirements_List_v2.md (v2.1)
method: Pahl & Beitz — Variant Requirements Derivation
version: v1.0
---

# VN-CUAV-SIM-001 CORTEX (PA-9) — Variant Requirements v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Phối Hợp Liên Quân — Multi-Node Shared Battlespace

**Ngày:** 2026-04-14
**Baseline:** Master Requirements List v2.1 (102 reqs: 74D + 28W)
**Concept:** PA-9 CORTEX — Multi-node WAN, C2 Command Hub, shared battlespace, 20-50 targets, $300K+/site
**Đặc thù:** CORTEX = **lớp phần mềm mạng + C2** trên các node phần cứng hiện có (LITE/FIXED/FULL). Không phải phần cứng mới — là capability multiplier.

---

## Tóm Tắt Delta So Với Master

| Loại thay đổi | Số lượng | Ghi chú |
|---------------|:--------:|---------|
| Giữ nguyên — per node (=) | 60 | HW requirements → "per node type" (LITE/FIXED/FULL) |
| Điều chỉnh giá trị (~) | 12 | Network, scaling, targets, scoring, cost, etc. |
| Per-node reference (→) | 30 | HW reqs delegated to node-type requirements |
| Thêm mới (+) | 25 | CTX-01→25 — WAN, C2 Hub, shared battlespace, joint ops |
| **Tổng** | **127** | **97D + 30W** |

---

## Kiến Trúc Requirements CORTEX

CORTEX requirements có **2 tầng:**

```
TẦNG 1: NODE REQUIREMENTS
  → Mỗi node kế thừa 100% requirements của variant tương ứng:
    LITE node  → LITE PA-2 Requirements v1.0 (105 reqs)
    FIXED node → FIXED PA-8 Requirements v1.0 (109 reqs)
    FULL node  → FULL PA-6 Requirements v1.0 (122 reqs)
  → CORTEX KHÔNG thay đổi node-level requirements.

TẦNG 2: CORTEX SYSTEM REQUIREMENTS (tài liệu này)
  → WAN networking, C2 Hub, shared battlespace, joint scoring/AAR
  → Áp dụng cho TOÀN TRIỂN KHAI (system-of-systems)
```

**Nguyên tắc:** Mỗi node **hoạt động standalone hoàn toàn** khi mất WAN. CORTEX chỉ thêm capabilities, không modify node internals.

---

## IFR & Sacred Constraints

| # | Sacred Constraint | CORTEX | Ghi chú |
|---|-------------------|:------:|---------|
| SC-1 | 100% mô phỏng — ZERO đạn thật | ✅ | Per node |
| SC-2 | Phản hồi trong ngưỡng nhận thức | ✅ | Per node. WAN sync ≤ 100ms không ảnh hưởng local latency. |
| SC-3 | Đạn đạo khớp thực tế | ✅ | Per node — ballistic engine local |
| SC-4 | Giá bán ≤ $70K/unit | ❌ | **$300K+ per deployment.** Khác segment (Bộ QP/Quân chủng/Vùng HQ). |
| SC-5 | Vận hành độc lập | ⚠️ | **Per node: standalone OK.** C2 Hub cần WAN → degraded mode nếu mất mạng. |

**SC-4 OVERRIDE:** CORTEX là **system-of-systems** — giá deployment, không phải unit price.
- **SC-4C:** Tổng giá triển khai ≤ $500,000 (3 nodes + C2 Hub). Cạnh tranh vs import $1-5M.

**SC-5 ADDENDUM:** Standalone fallback bắt buộc — mỗi node phải hoạt động 100% khi WAN down.

---

## Node-Level Requirements — DELEGATION

> Các requirements sau KHÔNG liệt kê lại — tham chiếu đến variant requirements tương ứng.

| Category | Node Type | Reference Document |
|----------|-----------|-------------------|
| Geometry, Kinematics, Forces, Energy, Material | Per node | LITE/FIXED/FULL Requirements v1.0 |
| Safety (node-level) | Per node | LITE/FIXED/FULL Requirements v1.0 |
| Ergonomics, Production, Quality | Per node | LITE/FIXED/FULL Requirements v1.0 |
| Assembly (node-level) | Per node | LITE/FIXED/FULL Requirements v1.0 |
| Transport (node-level) | Per node | LITE/FIXED/FULL Requirements v1.0 |
| Maintenance (node-level) | Per node | LITE/FIXED/FULL Requirements v1.0 |

---

## Requirements — ĐIỀU CHỈNH GIÁ TRỊ (~)

> System-level adjustments cho CORTEX deployment context.

| ID | D/W | Master v2.1 | **CORTEX PA-9** | Lý do |
|----|:---:|-------------|-----------------|-------|
| S-08 | **D** | 1 instructor ≥ 4 stations (W) | **C2 Hub quản lý 3-6+ nodes đồng thời** (D). Mỗi node vẫn có instructor local. | System-of-systems management |
| S-09 | **D** | Remote diagnostics qua VPN (W) | **Remote diagnostics bắt buộc** — C2 Hub monitor tất cả nodes qua WAN (D). | Multi-site deployment cần remote monitoring |
| O-05 | D | ≥ 5 UAV profiles | **≥ 5 UAV profiles per node + swarm 20-50 hệ thống phân phối từ C2** | Shared battlespace scale |
| O-06 | D | ≥ 3 USV profiles | **≥ 3 USV profiles per node + multi-node coordinated attack patterns** | Coordinated multi-direction attacks |
| O-07 | D | ≥ 10 pre-built scenarios | **≥ 6 CORTEX-exclusive scenarios** (CTX-01→06) + per-node scenarios. Tổng ≥ 20 system-wide. | Joint operation scenarios |
| T-05 | D | Swarm ≥ 4 | **Swarm 20-50 mục tiêu toàn hệ thống** — phân phối từ C2 Hub, shared battlespace. | System-level swarm scale |
| T-08 | W | Training transfer ≥ 20% | **Joint force training transfer** — đo improvement cho kíp + liên quân, không chỉ cá nhân. | Joint ops effectiveness |
| C-01 | D | Giá bán ≤ $70K/unit | **Deployment: $300K+ per site** (3 nodes typical). C2 Hub: $26-35K. SW license: $5K/node. | System-of-systems pricing |
| C-04 | W | Giá bán ≤ $60K | **Deployment ≤ $400K** (competitive target). Existing nodes upgrade: +$15-20K/node (SW + WAN). | Competitive vs import |
| C-05 | W | Bảo trì ≤ 5% giá bán | **SW maintenance: $5K/node/năm** (license renewal + scenario updates). HW bảo trì per node. | Recurring revenue model |
| L-02 | D | SW update content mỗi 12 tháng | **CORTEX SW update mỗi 6 tháng** (scenarios + sync protocol + security patches). Node SW per variant schedule. | Multi-site system cần update thường xuyên hơn |
| Ma-03 | D | Spare parts VN, giao ≤ 7 ngày | **C2 Hub spare parts: COTS server/switch/monitor, giao ≤ 14 ngày** (specialty items). Node spares per variant. | C2 Hub = non-standard IT equipment |

---

## Requirements — BỔ SUNG MỚI (+)

### WAN Networking (CTX-01→05)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-01 | D | **WAN sync latency ≤ 100ms** node-to-node (qua C2 Hub). UDP multicast (target state) + TCP (kill confirmation). | Concept §5.4 — shared battlespace coherence |
| CTX-02 | D | **WAN encryption: AES-256 end-to-end** cho tất cả traffic (target state, kill signals, voice, AAR data). | Quốc phòng — data security |
| CTX-03 | D | **WAN transport agnostic:** hoạt động trên VPN/Fiber/VSAT. Bandwidth ≥ 2 Mbps per node. | Đảo DK1 dùng VSAT, cảng dùng fiber |
| CTX-04 | D | **Standalone fallback:** mỗi node hoạt động **100% standalone** khi mất WAN. Tự động reconnect ≤ 5 giây sau WAN recovery. Không mất dữ liệu session. | Mission-critical reliability |
| CTX-05 | D | **State synchronization protocol:** 20Hz update rate, ~2KB/frame, interpolation cho jitter < 200ms. Mục tiêu biến mất đồng thời trên tất cả nodes khi bị tiêu diệt. | Concept §5.4 — target state coherence |

### C2 Command Hub (CTX-06→11)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-06 | D | **C2 Command Hub:** 1× server (Xeon/EPYC + RTX 4080 + 128GB ECC + NVMe 4TB) + 4× LED 55" 4K monitors (1 tactical map + 3 node mirrors). | Concept §3.1 |
| CTX-07 | D | **Tactical map display:** bản đồ chiến thuật real-time — vị trí tất cả nodes + tất cả mục tiêu + kill events + sector assignments. | Concept §3.3 |
| CTX-08 | D | **Node mirror displays:** 3× 55" 4K monitors hiển thị god-eye view từ mỗi node. Chuyển đổi sang Scoring Live hoặc AAR Playback real-time. | Concept §3.3 |
| CTX-09 | D | **Force Allocation Console:** GUI kéo-thả sector/mục tiêu cho từng node. Dynamic reallocation giữa chừng. Swarm wave scheduling. | Concept §6.3 |
| CTX-10 | D | **CORTEX Server software:** Swarm Distribution Engine + State Sync Manager + Kill Confirmation Arbiter + Force Allocation + Joint Scoring + Joint AAR + Voice Intercom. | Concept §3.2 |
| CTX-11 | D | **C2 Hub standalone operation:** C2 Hub hoạt động với 1-6 nodes. Tự detect node connect/disconnect. No reconfiguration needed khi thêm/bớt node. | Scalability |

### Shared Battlespace (CTX-12→14)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-12 | D | **Swarm Distribution Engine:** sinh 20-50 mục tiêu (UAV + USV) theo kịch bản, phân phối đến tất cả nodes. C2 = single source of truth. | Concept §5 |
| CTX-13 | D | **Kill Confirmation Arbiter:** nhận kill signal từ node → xác nhận → broadcast REMOVE [target_id] → tất cả nodes ≤ 100ms. Tránh double-kill counting. | Concept §5.1 |
| CTX-14 | D | **Cross-node target handoff:** khi mục tiêu di chuyển sang sector node khác → C2 gửi HANDOFF → node mới nhận tracking ≤ 50ms. Handoff events → AAR log. | Concept §5.3 |

### Voice Communications (CTX-15→17)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-15 | D | **Encrypted voice intercom:** C2↔nodes (broadcast) + node↔node (direct). AES-256, latency ≤ 50ms LAN / ≤ 150ms WAN. | Concept §3.4 |
| CTX-16 | D | **Push-to-Talk protocol** giống radio quân sự thực tế. Kênh chỉ huy + kênh coordination. | Training radio discipline |
| CTX-17 | D | **Voice recording toàn session:** ghi âm tất cả channels, synchronized với action log. Phát lại trong Joint AAR. | Debriefing liên quân |

### Joint Scoring & AAR (CTX-18→21)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-18 | D | **Joint Scoring 3 cấp:** (1) Cá nhân — accuracy, reaction time, ammo; (2) Kíp node — phối hợp nội bộ + sector discipline; (3) Lực lượng liên hợp — tỷ lệ tiêu diệt, handoff success, C2 latency. | Concept §8.1 |
| CTX-19 | D | **Joint AAR synchronized timeline:** thu thập session data từ tất cả nodes, phát lại trên timeline duy nhất. God-eye tactical view + zoom từng node + voice overlay. | Concept §6.6 |
| CTX-20 | D | **Handoff analysis report:** trong AAR — phân tích tại sao mục tiêu "lọt qua", node nào không nhận handoff kịp, C2 allocation có hợp lý không. | Training feedback — cross-node |
| CTX-21 | W | **AI adaptive swarm:** C2 tự điều chỉnh swarm difficulty dựa trên joint performance (tương lai — Phase 2+). | Future enhancement |

### Deployment & Licensing (CTX-22→25)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| CTX-22 | D | **CORTEX Node Agent:** phần mềm nhỏ (~50MB) cài trên Render PC hiện có của mỗi node. Không thay đổi phần cứng node. | Concept §2 — zero HW modification |
| CTX-23 | D | **Node upgrade path:** bất kỳ LITE/FIXED/FULL standalone nào đều có thể upgrade lên CORTEX bằng: Node Agent (SW) + WAN connection + C2 Hub subscription. | Product Line Architecture |
| CTX-24 | D | **Per-node licensing:** $5,000/node/năm bao gồm SW updates + scenario packs + security patches. C2 Hub license riêng. | Recurring revenue model |
| CTX-25 | W | **Multi-site deployment tool:** installer package cho C2 Hub + Node Agent. Remote deployment qua VPN (không cần kỹ thuật viên on-site tại mỗi node). | Operational efficiency |

---

## Tóm Tắt Thống Kê CORTEX PA-9

| Category | Tổng | D | W |
|----------|:----:|:-:|:-:|
| Per-node HW (delegated) | ref | ref | ref |
| System-level adjustments (~) | 12 | 10 | 2 |
| **WAN Networking** | **5** | **5** | **0** |
| **C2 Command Hub** | **6** | **6** | **0** |
| **Shared Battlespace** | **3** | **3** | **0** |
| **Voice Communications** | **3** | **3** | **0** |
| **Joint Scoring & AAR** | **4** | **3** | **1** |
| **Deployment & Licensing** | **4** | **3** | **1** |
| **CORTEX-specific total** | **25** | **23** | **2** |
| **TỔNG (system-level)** | **127** | **97 (76%)** | **30 (24%)** |

**Note:** Tổng 127 = 102 master (adjusted) + 25 CORTEX-specific. Nhưng thực tế mỗi deployment còn phải thỏa mãn node-level requirements (105-122 per node type).

---

## ICDM Evaluation — Không Áp Dụng Trực Tiếp

CORTEX là **system-of-systems** — không đánh giá bằng product-level DQM.

Thay vào đó, đánh giá CORTEX theo:

| Dimension | Metric | Target |
|-----------|--------|--------|
| Operational Value | Joint force readiness improvement | ≥ 30% vs standalone nodes |
| Technical Performance | WAN sync, target coherence | ≤ 100ms, 99.9% |
| Cost Efficiency | Per-trainee-hour cost (joint) | ≤ $15/h vs $50+/h live joint exercise |
| Scalability | Nodes supported | 1-6 nodes Phase 1, 10+ future |
| Reliability | Standalone fallback | 100% node-level capability when WAN down |
| Security | Encryption, air-gap compatible | AES-256, no external dependencies |

---

## CORTEX-Exclusive Scenarios Reference

| ID | Cấu hình | Mục tiêu | Thời gian | Mức độ |
|----|----------|----------|-----------|--------|
| CTX-01 | 2× FIXED | 8 UAV → 2 đảo | 10' | ★★★ |
| CTX-02 | 1× FULL + 1× FIXED | 10 UAV + 4 USV | 15' | ★★★★ |
| CTX-03 | 2× FIXED | 20 mục tiêu bão hòa | 8' | ★★★★ |
| CTX-04 | 1× FULL + 2× FIXED | 30 mục tiêu, 3 sóng | 30' | ★★★★★ |
| CTX-05 | All nodes | 50 mục tiêu overload | 15' | ★★★★★ |
| CTX-06 | All nodes | 20 NVG night | 20' | ★★★★★ |

---

## Traceability

```
Master Requirements v2.1 (102 reqs)
  ↓ Per-node delegation → LITE/FIXED/FULL Requirements v1.0
  ↓ System-level adjustments (12) + CORTEX-specific (25)
CORTEX PA-9 Requirements v1.0 (127 system-level reqs)
  ↓ C2 Hub architecture → CORTEX Server SW design
  ↓ WAN protocol design → State Sync + Kill Arbiter + Voice
  ↓ Joint Scoring/AAR → Data model + timeline sync
  → Phase 3 Embodiment: C2 Hub HW spec + Node Agent SW design
```

---

*Derived from Master Requirements v2.1. CORTEX = software/network layer, system-of-systems, zero node HW modification.*
