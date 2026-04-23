# CORTEX RANGE — DANH MỤC SẢN PHẨM PHÁT TRIỂN THEO GIAI ĐOẠN

## Phased Product Development Catalog

**20 Sản phẩm × 8 Giai đoạn × 30 Tháng**

Pahl & Beitz Chapter 9 — Modular Products & Platform Construction
D-M-I-R Framework × Musk Serial Development × AI Data Flywheel

Version 1.0 | February 2026 | CONFIDENTIAL

---

## 1. TỔNG QUAN LỘ TRÌNH PHÁT TRIỂN

CORTEX RANGE gồm **20 sản phẩm riêng biệt** được phát triển **SERIAL** (tuần tự) qua 8 giai đoạn trong 30 tháng. Nguyên tắc Musk: *"Parallelize nothing until you've serialized it first and proven it works."* Mỗi giai đoạn được fund bởi revenue từ giai đoạn trước. Mỗi sản phẩm phải **PASS validation gate** trước khi Phase tiếp theo bắt đầu.

### 1.1 Roadmap Tổng quan

| Phase | Sản phẩm | Thời gian | R&D Cost | Revenue (cum.) |
|-------|----------|-----------|----------|----------------|
| **P0 Foundation** | CR-P0 CDM | M0-M3 | $15-20K | $0 |
| **P1 Entry** | CR-L1 SCOREBOARD + CR-D3 PULSE | M1-M3 | $40-55K | $0 (bundled) |
| **P2 Analytics** | CR-L2 OVERWATCH + CR-D2 DEBRIEF | M3-M6 | $55-75K | $30-80K |
| **P3 Network** | CR-L3 TRACKER + CR-N1 MESH + CR-N2 EDGE + CR-D4 EXPORT | M6-M9 | $75-105K | $80-200K |
| **P4 Virtual** | CR-V1 MIRROR + CR-V2 GHOST + CR-V3 DOJO + CR-C1 ADVERSARY + CR-C2 SCENARIO FORGE | M9-M12 | $135-185K | $200-500K |
| **P5 Enterprise** | CR-N3 CLOUD + CR-C3 PROPHECY ★ + CR-L4 WEAPONS LINK | M12-M18 | $105-150K | $500K-1.5M |
| **P6 Weapons+** | CR-V4 LAUNCHER + CR-V5 CREW | M18-M24 | $55-90K | $1.5-3M |
| **P7 Conditional** | CR-V6 AIR DEFENSE | M24-M30 | $50-70K | $3-5M |

**Total R&D: $530-750K → Y3 Revenue: $3-5M → ROI: 4-7x → Breakeven: M15-18**

### 1.2 Revenue Cascade — Mỗi Phase fund Phase tiếp theo

- **P0-P1** ($0 revenue, $55-75K investment): CDM + SCOREBOARD + PULSE — Gateway product. FREE bundled với VN-LOMAH. Tạo installed base + data collection.
- **P2** ($30-80K revenue): OVERWATCH + DEBRIEF — Upsell $3-8K/range. First subscription revenue ($3K/yr STANDARD tier).
- **P3** ($80-200K cumulative): TRACKER + MESH + EDGE + EXPORT — Infrastructure sell. EDGE node = high-margin hardware. Open-source adapters drive partnerships.
- **P4** ($200-500K cumulative): VIRTUAL domain — MIRROR, GHOST, DOJO, ADVERSARY, SCENARIO FORGE. High-volume software revenue. Partnership MOUs (CAE, Saab).
- **P5** ($500K-1.5M cumulative): ENTERPRISE tier — CLOUD + PROPHECY + WEAPONS LINK. $50K perpetual + $10K/yr = top-line growth driver. PROPHECY justifies premium pricing.
- **P6** ($1.5-3M cumulative): LAUNCHER + CREW — Hardware expansion. 130-250 systems TAM cho B41 alone.
- **P7** ($3-5M cumulative): CONDITIONAL — AIR DEFENSE (MANPADS). Chỉ phát triển nếu RANGE scope = "ALL WEAPONS".

### 1.3 Nguyên tắc Pahl & Beitz — Modular Products (Chapter 9.2)

CORTEX RANGE áp dụng Modular Products (P&B 9.2): *"Machines, assemblies and components that fulfil various overall functions through the combination of distinct function units (building blocks) or modules."*

- **Basic Module (Grundbaustein)**: CR-P0 CDM — Foundation cho toàn bộ ecosystem
- **Essential Modules (Grundbausteine)**: SCOREBOARD, OVERWATCH, TRACKER — Core data collection
- **Special Modules (Sonderbausteine)**: GHOST, DOJO, LAUNCHER — Optional extensions
- **Connecting Structure (Verbindungselement)**: CDM data schema — Interface giữa tất cả modules

---

## 2. BẢNG MÔ TẢ CHI TIẾT SẢN PHẨM

Mỗi sản phẩm = 1 project riêng biệt với Phase 1 Task Clarification (Pahl & Beitz) đầy đủ.

---

### ═══ PHASE 0: FOUNDATION (M0-M3) ═══

---

### CR-P0: CORTEX CDM
**Common Data Model & Platform Core**
*Mô hình Dữ liệu Chung & Nền tảng Lõi*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P0 Foundation — M0-M3 |
| **Loại** | PLATFORM (Pure Software) |
| **Mô tả** | Nền tảng dữ liệu mở (open-source schema) cho toàn bộ hệ sinh thái CORTEX. JSON-based, version-controlled. Định nghĩa 4 profile: Soldier, Unit, Weapon, Session. Tất cả sản phẩm CORTEX đều ghi/đọc qua CDM. Đây là "Android" của training data — ai cũng có thể build trên đó, nhưng CORTEX AI engines là proprietary layer phía trên. |
| **Hardware** | Không — Pure software/schema |
| **Software** | CDM schema spec + REST API + SDK (Python/JS) + validation tools |
| **Giá bán** | **Open Source (FREE)** — Chiến lược platform lock-in |
| **AI Engine** | CDM KHÔNG phải AI — CDM là DATA LAYER cho AI. Mọi AI engine đọc từ CDM. |
| **Dependencies** | Không — Đây là foundation, không phụ thuộc gì |
| **Deliverables** | CDM v1.0 spec + SDK + reference implementation + documentation |
| **R&D Cost** | $15-20K |
| **Production Cost** | N/A (software) |
| **✅ Validation Gate** | ≥2 internal products (SCOREBOARD + PULSE) đọc/ghi CDM thành công |

---

### ═══ PHASE 1: ENTRY PRODUCTS (M1-M3) ═══

---

### CR-L1: SCOREBOARD
**Acoustic Shot Scoring System**
*Hệ thống Chấm điểm Bắn Âm thanh*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P1 Entry — M1-M3 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Sản phẩm MỞ CỬA (gateway product). Tích hợp VN-LOMAH acoustic sensors: miss distance <5mm accuracy, shot detection <50ms latency, scoring tự động lên đến 50 lanes đồng thời. AI shot pattern analysis khiến SCOREBOARD khác biệt với mọi đối thủ — Zen, Polytronic, Steinert đều có acoustic nhưng KHÔNG có AI. Đây là "iPhone moment" — khi range officer thấy real-time scoring trên tablet, họ không quay lại paper target. |
| **Hardware** | VN-LOMAH sensor array (existing) + tablet/laptop + WiFi AP |
| **Software** | Edge scoring engine + web dashboard + CDM writer + basic AI pattern detection |
| **Giá bán** | $2-5K/lane (bundled với VN-LOMAH hardware) |
| **AI Engine** | **BallisticAI v1.0** — Shot classification, grouping analysis, trend detection |
| **Dependencies** | CR-P0 (CDM) |
| **Deliverables** | Deployable scoring system + web app + CDM integration |
| **R&D Cost** | $25-35K |
| **Production Cost** | $2-5K/lane |
| **✅ Validation Gate** | Range officers NGỪNG dùng paper target. Live scoring trên tablet. |

---

### CR-D3: PULSE
**Real-Time Training Dashboard**
*Bảng điều khiển Huấn luyện Thời gian thực*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P1 Entry — M1-M3 |
| **Loại** | SOFTWARE |
| **Mô tả** | Live monitoring dashboard cho commander và instructor. Real-time shot-by-shot scoring từ SCOREBOARD feed, live video feeds với AI overlay, ammunition consumption tracker, safety zone monitoring (automated cease-fire alerts). Commander xem từ văn phòng qua web browser. CAE Rise cung cấp MBI (Metrics-Based Insights) cho simulation — PULSE cung cấp MBI cho LIVE-FIRE range. |
| **Hardware** | Không — Web app chạy trên browser bất kỳ |
| **Software** | React/Vue web app + WebSocket real-time + CDM reader + alert engine |
| **Giá bán** | **MIỄN PHÍ** — Bundled với SCOREBOARD (gateway drug cho platform) |
| **AI Engine** | Không riêng — Hiển thị output từ BallisticAI (SCOREBOARD) |
| **Dependencies** | CR-P0 (CDM) + CR-L1 (SCOREBOARD data source) |
| **Deliverables** | Web dashboard deployable trên laptop/tablet |
| **R&D Cost** | $15-20K |
| **Production Cost** | N/A (software) |
| **✅ Validation Gate** | Commander mở PULSE từ văn phòng để monitor range thay vì đến hiện trường. |

---

### ═══ PHASE 2: AI ANALYTICS (M3-M6) ═══

---

### CR-L2: OVERWATCH
**AI Video Analytics System**
*Hệ thống Phân tích Video AI*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P2 Analytics — M3-M6 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Camera AI analytics tích hợp VN-CAM (existing Workshop X product). AI phân tích: tư thế bắn (stance, grip, breathing), phát hiện muzzle flash + shot-to-camera correlation, multi-angle replay với AI annotation, weapon handling safety monitoring. Video là bằng chứng — khi commander thấy AI-annotated replay với errors highlighted, họ không quay lại "I think Private Nguyễn did okay." CAE có computer vision trong R&D, nhưng NOT trong live-fire. |
| **Hardware** | VN-CAM cameras (existing) + mounting kit + edge compute (Jetson) |
| **Software** | Computer vision pipeline (pose estimation + object detection) + CDM writer |
| **Giá bán** | $3-8K/range (cameras + software license) |
| **AI Engine** | **VisualAI v1.0** — Pose estimation, technique classification, safety violation detection |
| **Dependencies** | CR-P0 (CDM) + CR-L1 (SCOREBOARD cho shot-video correlation) |
| **Deliverables** | Camera system + CV pipeline + annotated replay viewer |
| **R&D Cost** | $30-40K |
| **Production Cost** | $3-8K/range |
| **✅ Validation Gate** | Training officers TỰ NGUYỆN share DEBRIEF reports với commanders. |

---

### CR-D2: DEBRIEF
**AI After-Action Review Engine**
*Công cụ Đánh giá Sau Huấn luyện bằng AI*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P2 Analytics — M3-M6 |
| **Loại** | SOFTWARE |
| **Mô tả** | AAR tự động thông minh. Instant replay từ mọi góc (camera + position data), AI highlights key moments (best/worst shot, near miss), AI identifies patterns (flinching, breathing, timing), LLM generates narrative debrief report tiếng Việt, commander dashboard unit-level summary trong 30 giây. Saab AR3 AI AAR chatbot MVP Q2 2026 — DEBRIEF phải ship trước. **First mover trong AI-powered live-fire AAR.** |
| **Hardware** | Không — Software layer trên data từ SCOREBOARD + OVERWATCH |
| **Software** | LLM narrative engine + replay builder + pattern detector + report generator |
| **Giá bán** | Included trong platform subscription ($3K/yr STANDARD tier) |
| **AI Engine** | **TrainingAI v1.0** — Pattern recognition, narrative generation, performance comparison |
| **Dependencies** | CR-P0 + CR-L1 + CR-L2 (OVERWATCH cho video data) |
| **Deliverables** | AAR report generator + replay viewer + LLM integration |
| **R&D Cost** | $25-35K |
| **Production Cost** | N/A (software) |
| **✅ Validation Gate** | AAR reports được sử dụng cho personnel evaluations chính thức. |

---

### ═══ PHASE 3: NETWORK & INTEROP (M6-M9) ═══

---

### CR-L3: TRACKER
**Position & Movement Analytics**
*Phân tích Vị trí & Di chuyển*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P3 Network — M6-M9 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | GPS/GNSS tracking (outdoor, 1m accuracy) + IMU-based weapon orientation. Movement pattern analysis (approach, cover, fire). Heat map generation (where soldiers go/don't go). Biến range scoring thành tactical training — biết không chỉ "did he hit?" mà "where was he when he shot?" Cầu nối RANGE → BASE/SHIELD. Saab GAMER có GPS tracking cho Force-on-Force — CORTEX add cho LIVE-FIRE, giá 10x rẻ hơn với commodity LoRa/BLE. |
| **Hardware** | GPS/BLE trackers ($200-500/unit) + LoRa mesh gateway |
| **Software** | Tracking pipeline + heat maps + CDM writer + movement classifier |
| **Giá bán** | $200-500/tracker unit (BLE/LoRa) |
| **AI Engine** | **MovementAI** — Tactical movement classification, approach pattern analysis |
| **Dependencies** | CR-P0 + CR-L1 (shot correlation) + CR-N1 (MESH network) |
| **Deliverables** | Tracker hardware + mesh network + movement analytics dashboard |
| **R&D Cost** | $20-30K |
| **Production Cost** | $200-500/tracker |
| **✅ Validation Gate** | Units yêu cầu TRACKER cho field exercises, KHÔNG chỉ range days. |

---

### CR-N1: MESH
**Range Communication Network**
*Mạng Truyền thông Trường bắn*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P3 Network — M6-M9 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | LoRa/BLE mesh network kết nối tất cả CORTEX devices trên range. Self-healing, self-configuring. Hoạt động offline (edge-first architecture). Range coverage lên đến 5km. Tích hợp với military radio systems. Saab dùng DAN (proprietary radio mesh) — CORTEX MESH dùng commodity LoRa/BLE, open protocol, giá 10x rẻ hơn. |
| **Hardware** | LoRa gateways + BLE beacons + antenna kit |
| **Software** | Mesh routing protocol + device discovery + health monitoring |
| **Giá bán** | $1-3K/range (gateway + beacons) |
| **AI Engine** | Không — Infrastructure layer |
| **Dependencies** | Không — Stand-alone infrastructure |
| **Deliverables** | Mesh network kit + management software + deployment guide |
| **R&D Cost** | $15-20K |
| **Production Cost** | $1-3K/range |
| **✅ Validation Gate** | Tất cả CORTEX devices communicate qua MESH without WiFi dependency. |

---

### CR-N2: EDGE
**Edge Computing Node**
*Nút Tính toán Biên*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P3 Network — M6-M9 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Jetson Orin-based edge compute node. Chạy tất cả AI inference locally (offline capable). ONNX optimized models. Quản lý data sync khi có connectivity. CAE/Saab/Rheinmetall = server-only architecture — CORTEX EDGE chạy mọi thứ tại hiện trường không cần internet. **Critical cho quân đội Việt Nam** (field conditions, limited connectivity). |
| **Hardware** | NVIDIA Jetson Orin + rugged enclosure + power supply (12V DC / solar) |
| **Software** | Edge AI runtime + model manager + sync engine + CDM local store |
| **Giá bán** | $2-4K/node |
| **AI Engine** | Runtime cho tất cả AI engines — BallisticAI, VisualAI, TrainingAI inference |
| **Dependencies** | CR-N1 (MESH) |
| **Deliverables** | Edge compute box + pre-loaded AI models + deployment kit |
| **R&D Cost** | $20-30K |
| **Production Cost** | $2-4K/node |
| **✅ Validation Gate** | Full AI functionality hoạt động 48h offline, auto-sync khi reconnect. |

---

### CR-D4: EXPORT
**Interoperability Bridges**
*Cầu nối Tương tác Liên hệ thống*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P3 Network — M6-M9 |
| **Loại** | SOFTWARE |
| **Mô tả** | DIS adapter (kết nối legacy CTCs — Cubic), TAK plugin (overlay trên military C2 common operating picture), OSAG 2.0 bridge (Saab GAMER compatible), CAE Rise bridge (prepare data format cho CAE integration). Open-source adapters — remove integration friction, biến CORTEX thành hub kết nối mọi hệ thống huấn luyện. |
| **Hardware** | Không — Software adapters |
| **Software** | DIS/HLA protocol adapters + TAK plugin + OSAG translator + CAE bridge |
| **Giá bán** | **Open Source (FREE)** — Strategic ecosystem play |
| **AI Engine** | Không — Data translation layer |
| **Dependencies** | CR-P0 (CDM) — adapters translate CDM ↔ external formats |
| **Deliverables** | Adapter packages + API documentation + integration guides |
| **R&D Cost** | $20-25K |
| **Production Cost** | N/A (open source) |
| **✅ Validation Gate** | ≥1 external system (DIS/TAK/OSAG/CAE) exchange data thành công với CORTEX. |

---

### ═══ PHASE 4: VIRTUAL + CONSTRUCTIVE (M9-M12) ═══

---

### CR-V1: MIRROR
**Digital Twin of Physical Range**
*Bản sao Số của Trường bắn Thực*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P4 Virtual — M9-M12 |
| **Loại** | SOFTWARE |
| **Mô tả** | Digital twin 3D của range thực (photogrammetry scan). Replay live exercises trong 3D (như video game). What-if analysis (change wind, target, position). Share replays across units (cloud). Saab Sandbox làm điều này cho Force-on-Force AAR — MIRROR làm cho LIVE-FIRE AAR. Khác data source, cùng concept đã được proven. |
| **Hardware** | Không (photogrammetry scan 1 lần) + tablet cho viewer |
| **Software** | 3D engine (Three.js/Unity) + replay player + CDM integration + cloud sync |
| **Giá bán** | $5-10K one-time scan + software subscription |
| **AI Engine** | Không riêng — Visualize output từ TrainingAI/BallisticAI trong 3D space |
| **Dependencies** | CR-P0 + CR-L1 + CR-L3 (TRACKER cho position data) |
| **Deliverables** | 3D scan pipeline + replay viewer + cloud sharing portal |
| **R&D Cost** | $30-40K |
| **Production Cost** | $5-10K/range (scan + license) |
| **✅ Validation Gate** | Commanders sử dụng 3D replay cho operational planning, không chỉ training review. |

---

### CR-V2: GHOST
**Synthetic Inject / AR Tactical Overlay**
*Phóng ảnh Mục tiêu Ảo / Phủ AR Chiến thuật*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P4 Virtual — M9-M12 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Virtual threats injected vào live training. AR overlay trên tablet/HUD hiển thị virtual enemies, virtual moving targets (không cần mechanical target), virtual indirect fire (mortars, artillery simulation), stress inoculation (simulated chaos, noise, smoke). Thay thế pop-up target mechanisms ($10-50K each) bằng commodity tablet + software. **BAO GỒM:** AR_TSM (Vietnamese tactical scenarios) + Night/EO Mode (NVG + thermal simulation — market differentiator, ZERO competitors có night training capability cho live-fire). |
| **Hardware** | Tablets with AR capability (commodity) + optional AR HUD goggles |
| **Software** | AR rendering engine + target injection + scenario player + NVG/thermal simulation |
| **Giá bán** | $2-5K per tablet/HUD station |
| **AI Engine** | ADVERSARY AI feeds target behavior (see CR-C1) + Night training data feeds TrainingAI |
| **Dependencies** | CR-P0 + CR-L1 (shot-virtual correlation) + CR-C1 (ADVERSARY AI) |
| **Deliverables** | AR app + scenario library (100+ templates) + VN tactical module + Night Mode |
| **R&D Cost** | $35-50K |
| **Production Cost** | $2-5K/station |
| **✅ Validation Gate** | Training officers tạo và chạy scenarios trong <30 phút thay vì 3 ngày. |

---

### CR-V3: DOJO
**Virtual Marksmanship Trainer**
*Phòng Huấn luyện Bắn Ảo*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P4 Virtual — M9-M12 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Indoor dry-fire training với AI coaching. Laser-based indoor shooting với recoil simulation. AI phân tích trigger pull, sight picture, breathing. Progressive difficulty (AI adapts to skill level). Same data model như live fire (seamless transition dry → live). **BAO GỒM:** Vietnamese Weapons Module — AK-47/AKM, RPD/RPK, PKM, SVD, M16A2 profiles. CAE Sprint VR ($200-500K) làm cho pilots — DOJO làm cho shooters, giá 1/20. |
| **Hardware** | Laser weapon replicas (weighted, recoil) + projection screen/sensor + compute box |
| **Software** | Dry-fire scoring engine + AI coaching (trigger/breathing/sight) + VN weapons profiles |
| **Giá bán** | $5-15K per training station |
| **AI Engine** | **TrainingAI v2.0** — Marksmanship coaching, skill progression, dry-to-live correlation |
| **Dependencies** | CR-P0 (CDM) + CR-L1 (live-fire data cho dry-live correlation) |
| **Deliverables** | Training station hardware + AI coaching software + VN weapons module |
| **R&D Cost** | $30-40K |
| **Production Cost** | $5-15K/station |
| **✅ Validation Gate** | Measurable improvement trong live-fire scores sau DOJO training sessions. |

---

### CR-C1: ADVERSARY
**AI Threat Engine**
*Công cụ Đe dọa AI*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P4 Virtual — M9-M12 |
| **Loại** | SOFTWARE |
| **Mô tả** | AI-generated opposing force. Procedural enemy behavior (NOT scripted). Adapts to trainee skill level (harder for experts). Based on real threat doctrine database. Không cần OPFOR personnel cho basic scenarios. Rheinmetall TacSi CGF dùng rule-based behavior — ADVERSARY dùng ML-learned behavior = generational leap. |
| **Hardware** | Không — Software engine chạy trên EDGE compute |
| **Software** | Behavior tree ML engine + doctrine database + difficulty adapter + CDM integration |
| **Giá bán** | $1-2K/yr software subscription |
| **AI Engine** | **AdversaryAI** — Learned enemy behavior, adaptive difficulty, doctrine-based tactics |
| **Dependencies** | CR-N2 (EDGE compute) + CR-V2 (GHOST visualization) |
| **Deliverables** | AI engine + doctrine templates + difficulty scaling system |
| **R&D Cost** | $25-35K |
| **Production Cost** | N/A (subscription) |
| **✅ Validation Gate** | Trainees report scenarios "feel real" and "unpredictable" in surveys. |

---

### CR-C2: SCENARIO FORGE
**AI Scenario Generator**
*Công cụ Tạo Kịch bản AI*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P4 Virtual — M9-M12 |
| **Loại** | SOFTWARE |
| **Mô tả** | LLM-powered scenario creation từ text description. "Create a squad ambush at grid XY with 3 enemy" → auto-populates targets, timing, scoring criteria. Library of 100+ template scenarios (customizable). Thay thế 2-3 ngày manual scenario planning. |
| **Hardware** | Không — Software |
| **Software** | LLM scenario engine + template library + CDM scenario schema + validation |
| **Giá bán** | Included trong platform subscription |
| **AI Engine** | LLM (Claude/GPT) cho natural language → scenario conversion |
| **Dependencies** | CR-C1 (ADVERSARY) + CR-V2 (GHOST) + CR-P0 (CDM) |
| **Deliverables** | Scenario creation tool + template library + validation system |
| **R&D Cost** | $15-20K |
| **Production Cost** | N/A (subscription) |
| **✅ Validation Gate** | Scenario creation time giảm từ 3 ngày → 30 phút. |

---

### ═══ PHASE 5: ENTERPRISE (M12-M18) ═══

---

### CR-N3: CLOUD
**Multi-Range Sync & Federation**
*Đồng bộ Đa Trường bắn & Liên kết*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P5 Enterprise — M12-M18 |
| **Loại** | SOFTWARE |
| **Mô tả** | Multi-range data synchronization. Federated learning across sites (data stays local, models improve globally). Cross-unit performance comparison. Aggregate analytics dashboard cho commanders cấp cao. On-prem hoặc cloud (AWS/Azure). Network effect: more ranges → better AI → more value → more customers. |
| **Hardware** | Không — Server software (on-prem hoặc cloud) |
| **Software** | Federated sync engine + aggregation pipeline + multi-tenant dashboard + ML training pipeline |
| **Giá bán** | $5-10K/yr per range (ENTERPRISE tier) |
| **AI Engine** | **Federated TrainingAI** — Cross-range pattern learning without raw data sharing |
| **Dependencies** | CR-P0 + CR-N2 (EDGE) + CR-D2 (DEBRIEF data) |
| **Deliverables** | Cloud platform + federation engine + enterprise dashboard |
| **R&D Cost** | $40-60K |
| **Production Cost** | N/A (subscription) |
| **✅ Validation Gate** | General so sánh readiness across ≥5 units và ra quyết định phân bổ tài nguyên dựa trên data. |

---

### CR-C3: PROPHECY ★★★ INDUSTRY UNIQUE ★★★
**Predictive Readiness Engine**
*Công cụ Dự đoán Mức độ Sẵn sàng Chiến đấu*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P5 Enterprise — M12-M18 |
| **Loại** | SOFTWARE |
| **Mô tả** | **★★★ KHÔNG AI TRONG NGÀNH CÓ SẢN PHẨM NÀY ★★★** — Dự đoán unit readiness score từ training data. Xác định "at risk" soldiers TRƯỚC KHI họ fail qual. Khuyến nghị specific training interventions. Correlate readiness với operational outcomes. Đây là sản phẩm justify ENTERPRISE price point ($50K perpetual). Đây là thứ **generals và ministers of defense trả tiền**. Không ai khác build được vì không ai khác có live-fire data flywheel. CAE Rise: sim-only, no prediction. Saab TDI: benchmarking only, no prediction. Rheinmetall: ZERO analytics. Cubic: "AI-ready" but nothing deployed. |
| **Hardware** | Không — ML models chạy trên CLOUD |
| **Software** | Readiness prediction ML pipeline + risk identification + intervention recommender + commander report |
| **Giá bán** | $10-15K/yr per organization (ENTERPRISE exclusive) |
| **AI Engine** | **PredictiveAI** — Time-series readiness prediction, risk scoring, intervention optimization |
| **Dependencies** | CR-N3 (CLOUD) + CR-P0 (CDM historical data) + ≥6 months data accumulation |
| **Deliverables** | Prediction engine + readiness dashboard + intervention planner |
| **R&D Cost** | $50-70K |
| **Production Cost** | N/A (subscription) |
| **✅ Validation Gate** | Prediction accuracy ≥80% cho qualification pass/fail 30 days in advance. |

---

### CR-L4: WEAPONS LINK
**Direct Weapon System Data Integration**
*Kết nối Dữ liệu Hệ thống Vũ khí Trực tiếp*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P5 Enterprise — M12-M18 |
| **Loại** | SOFTWARE |
| **Mô tả** | Kết nối trực tiếp với Workshop X weapon systems: V-SMASH smart sight data (aim point, trigger, hit), RCWS engagement data (traverse, elevation, burst), grenade launcher data (range, angle, fuze), round count + ammunition management. Đây là R3 feedback loop: Weapons-AI Integration — **DroneShield STRUCTURALLY CANNOT BUILD THIS** vì chúng không sở hữu weapon systems. |
| **Hardware** | Không — Software integration với existing Workshop X hardware APIs |
| **Software** | Hardware API bridges + CDM adapter + weapon-specific parsers |
| **Giá bán** | Included trong platform (uses Workshop X hardware APIs) |
| **AI Engine** | **WeaponsAI** — Engagement effectiveness analysis, weapon system optimization |
| **Dependencies** | CR-P0 + V-SMASH/RCWS hardware APIs (Workshop X) |
| **Deliverables** | API bridge + weapon-specific CDM adapters + engagement analytics |
| **R&D Cost** | $15-20K |
| **Production Cost** | N/A (software) |
| **✅ Validation Gate** | V-SMASH engagement data auto-flows vào CORTEX DEBRIEF report. |

---

### ═══ PHASE 6: WEAPONS EXPANSION (M18-M24) ═══

---

### CR-V4: LAUNCHER
**Anti-Armor Weapons Simulator**
*Mô phỏng Vũ khí Chống Tăng*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P6 Weapons+ — M18-M24 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Mô phỏng B41/RPG-7 với pyrotechnic effects (smoke, recoil, blast) + accurate trajectory simulation + scoring. Mở rộng DOJO từ individual small arms sang anti-armor weapons. Weapon profiles: B41/RPG-7, RPG-29, AT-3 Sagger. TAM: 130-250 systems/5yr. Vietnamese-specific — không competitor nào có B41 simulator có scoring + AI + effects đồng thời. |
| **Hardware** | B41 weapon replica (weighted) + CO2 recoil system + pyrotechnic effects kit + VR/screen |
| **Software** | Rocket trajectory sim + scoring engine + recoil control + CDM integration + AI coach |
| **Giá bán** | $3-8K/training station |
| **AI Engine** | **TrainingAI v3.0** — Anti-armor engagement: aim point, lead angle, range estimation |
| **Dependencies** | CR-V3 (DOJO platform) + CR-P0 (CDM) |
| **Deliverables** | B41 simulator + weapon profiles + scoring system + AI coaching |
| **R&D Cost** | $30-50K |
| **Production Cost** | $3-8K/station |
| **✅ Validation Gate** | Trainees đạt qualification standards cho B41 nhanh hơn 30% vs traditional training. |

---

### CR-V5: CREW
**Crew-Served Weapons Simulator**
*Mô phỏng Vũ khí Tổ/Kíp*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P6 Weapons+ — M18-M24 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | Mô phỏng vũ khí crew-served: AGS-17 (automatic grenade launcher), SPG-9 (recoilless gun), DShK 12.7mm (heavy MG), M2 .50cal, Mk19. AI learns optimal burst patterns, range estimation accuracy, area coverage optimization. Mở rộng RANGE từ individual weapons sang crew-served platforms. |
| **Hardware** | Weapon-specific hardware consoles (mount, traverse, elevation controls) + display |
| **Software** | Grenade ballistic model (arc trajectory) + area effect scoring + burst pattern analysis + CDM |
| **Giá bán** | $8-15K/station |
| **AI Engine** | **TrainingAI v3.0** — Area fire effectiveness, burst optimization, crew coordination |
| **Dependencies** | CR-V3 (DOJO platform) + CR-P0 (CDM) + CR-V4 (shared heavy weapons framework) |
| **Deliverables** | Crew weapon stations + ballistic models + area scoring + AI coach |
| **R&D Cost** | $25-40K |
| **Production Cost** | $8-15K/station |
| **✅ Validation Gate** | Crew qualification pass rate tăng ≥20% vs traditional training. |

---

### ═══ PHASE 7: CONDITIONAL EXPANSION (M24-M30) ═══

---

### CR-V6: AIR DEFENSE ⚠️ CONDITIONAL
**MANPADS Training System**
*Hệ thống Huấn luyện MANPADS (Tên lửa phòng không vác vai)*

| Thuộc tính | Chi tiết |
|------------|---------|
| **Phase** | P7 Conditional — M24-M30 |
| **Loại** | HARDWARE + SOFTWARE |
| **Mô tả** | **⚠️ CONDITIONAL** — Chỉ phát triển nếu quyết định mở rộng RANGE scope thành "ALL WEAPONS TRAINING". Mô phỏng Igla, Stinger, Strela-2M với IR seeker simulation (reticle-based và imaging). Audio feedback: seeker tone changes (search buzz → acquisition warble → lock steady tone). State machine: UNCAGED → SEARCH → ACQUISITION → TRACK → LOCK → GUIDANCE. **Highest complexity module** — IR seeker = 40% total R&D. |
| **Hardware** | Gripstock replica + IMU (6-DOF, ±0.5°) + MCU (STM32) + audio (speaker 8Ω 2W) + VR headset (Quest 3) |
| **Software** | IR seeker simulation engine + missile flight model + air target generator + countermeasure sim |
| **Giá bán** | $20-35K/complete system |
| **AI Engine** | **TrainingAI v4.0** — Target acquisition timing, engagement decisions, shoot/no-shoot |
| **Dependencies** | CR-V3 (DOJO platform) + CR-C1 (ADVERSARY for air threats) + Phase 5 CLOUD data validation |
| **Deliverables** | MANPADS trainer stations + IR seeker sim + air target gen + VR integration |
| **R&D Cost** | $50-70K (IR seeker = $32K alone) |
| **Production Cost** | $3K/station |
| **✅ Validation Gate** | IR seeker acquisition time matches real weapon specs (±10%). |

---

## 3. CẤU TRÚC PHIÊN BẢN & GIÁ BÁN

### 3.1 Edition Tiers — Mỗi tier bao gồm tất cả sản phẩm tier thấp hơn

| Edition | Sản phẩm bao gồm | Perpetual | Annual |
|---------|------------------|-----------|--------|
| **FREE** | SCOREBOARD + PULSE + CDM (bundled với VN-LOMAH) | $0 | $0 |
| **STANDARD** | + OVERWATCH + DEBRIEF + EXPORT (DIS/TAK adapters) | $15K | $3K/yr |
| **PRO** | + TRACKER + MESH + EDGE + MIRROR + GHOST + DOJO + ADVERSARY + SCENARIO FORGE | $25K | $5K/yr |
| **ENTERPRISE** | + CLOUD + PROPHECY + WEAPONS LINK + cross-unit analytics | $50K | $10K/yr |

### 3.2 Add-on Products (Bán riêng, không thuộc tier)

| Product | Mô tả | Giá | Phase |
|---------|-------|-----|-------|
| **CR-V4 LAUNCHER** | B41/RPG Anti-Armor Simulator — Bán kèm hoặc standalone | $3-8K/station | P6 |
| **CR-V5 CREW** | Crew-Served Weapons (AGS-17, DShK, SPG-9) — Bán kèm hoặc standalone | $8-15K/station | P6 |
| **CR-V6 AIR DEFENSE** | MANPADS Trainer (Igla/Stinger) — CONDITIONAL | $20-35K/system | P7 |
| **VN Weapons Module** | AK-47, RPD, PKM, SVD profiles cho DOJO — Marketing SKU | $1-2K add-on | P4 |
| **Night/EO Mode** | NVG + Thermal simulation cho GHOST + DOJO — Feature add-on | $2-5K add-on | P4 |
| **RAMS by CORTEX** | Software-only license (TrainingAI + PROPHECY) cho ranges có sẵn hardware — CO-OPETITION SKU | $10-20K perpetual | P5 |

### 3.3 20-Year TCO Comparison

| | Cubic CTC | CAE Sim | Rheinmetall GUZ | Saab GAMER | **CORTEX RANGE** |
|--|-----------|---------|-----------------|------------|-----------------|
| Hardware | $5-50M | $15-50M | €100-500M | $30-300M | **$5-25K** |
| Annual | $1-5M/yr | $2-5M/yr | €10-30M/yr | $5-10M/yr | **$3-10K/yr** |
| 20-yr TCO | $25-150M | $50-150M | €300M-1B | $130-500M | **$65-225K** |
| Ratio | 200-600x | 400-600x | 2000-4000x | 1000-2000x | **1x** |

---

## 4. BẢN ĐỒ PHỤ THUỘC & AI ENGINE MAP

### 4.1 Dependency Chain

| Sản phẩm | Phụ thuộc trực tiếp | Phụ thuộc gián tiếp |
|----------|--------------------|--------------------|
| CR-P0 CDM | Không — Foundation | — |
| CR-L1 SCOREBOARD | CR-P0 | — |
| CR-D3 PULSE | CR-P0 + CR-L1 | — |
| CR-L2 OVERWATCH | CR-P0 + CR-L1 | — |
| CR-D2 DEBRIEF | CR-P0 + CR-L1 + CR-L2 | — |
| CR-L3 TRACKER | CR-P0 + CR-L1 + CR-N1 | CR-L2 (video correlation) |
| CR-N1 MESH | Không — Stand-alone infra | — |
| CR-N2 EDGE | CR-N1 | CR-P0 (CDM local store) |
| CR-D4 EXPORT | CR-P0 | — |
| CR-V1 MIRROR | CR-P0 + CR-L1 + CR-L3 | CR-L2 + CR-N1 |
| CR-V2 GHOST | CR-P0 + CR-L1 + CR-C1 | CR-N2 (EDGE compute) |
| CR-V3 DOJO | CR-P0 + CR-L1 | CR-D2 (dry-live correlation) |
| CR-C1 ADVERSARY | CR-N2 + CR-V2 | CR-P0 |
| CR-C2 SCENARIO FORGE | CR-C1 + CR-V2 + CR-P0 | Full Phase 4 stack |
| CR-N3 CLOUD | CR-P0 + CR-N2 + CR-D2 | Full Phase 1-4 stack |
| CR-C3 PROPHECY | CR-N3 + CR-P0 + ≥6mo data | Entire platform |
| CR-L4 WEAPONS LINK | CR-P0 + V-SMASH/RCWS APIs | CR-D2 (DEBRIEF reports) |
| CR-V4 LAUNCHER | CR-V3 + CR-P0 | Phase 4 platform |
| CR-V5 CREW | CR-V3 + CR-P0 + CR-V4 | Phase 4 platform |
| CR-V6 AIR DEFENSE | CR-V3 + CR-C1 + CR-N3 | Full platform validated |

### 4.2 AI Engine Map — Sản phẩm nào feed AI nào

Rule L5 từ D-M-I-R: *"Every product MUST feed at least 1 AI engine."* Sản phẩm không feed AI = component, không phải product. Infrastructure products (MESH, EDGE, CDM, EXPORT) được exempt vì chúng ENABLE data flow cho AI.

| Product | BallisticAI | VisualAI | TrainingAI | AdversaryAI | PredictiveAI | WeaponsAI |
|---------|-------------|----------|------------|-------------|--------------|-----------|
| SCOREBOARD | ★★★ | — | ★ | — | ★ | — |
| PULSE | — | — | — | — | — | — |
| OVERWATCH | — | ★★★ | ★ | — | ★ | — |
| DEBRIEF | ★ | ★ | ★★★ | — | ★★ | — |
| TRACKER | — | — | ★★ | — | ★ | — |
| GHOST | — | — | ★★ | ★★★ | — | — |
| DOJO | — | — | ★★★ | — | ★★ | — |
| ADVERSARY | — | — | — | ★★★ | — | — |
| PROPHECY | ★★ | ★ | ★★ | — | ★★★ | ★ |
| WEAPONS LINK | ★★ | — | ★ | — | ★ | ★★★ |
| LAUNCHER | ★★ | — | ★★ | — | ★ | — |
| CREW | ★★ | — | ★★ | — | ★ | — |
| AIR DEFENSE | — | — | ★ | ★★ | ★ | — |

★★★ = Primary data source | ★★ = Significant contributor | ★ = Minor contributor | — = No direct feed

---

## 5. TỔNG HỢP ĐẦU TƯ & REVENUE PROJECTION

### 5.1 Investment by Phase

| Phase | Products | R&D Cost | Cum. Revenue (est.) | Cum. R&D |
|-------|----------|----------|---------------------|----------|
| P0 | CDM | $15-20K | $0 | $15-20K |
| P1 | SCOREBOARD + PULSE | $40-55K | $0 (bundled) | $55-75K |
| P2 | OVERWATCH + DEBRIEF | $55-75K | $30-80K | $110-150K |
| P3 | TRACKER + MESH + EDGE + EXPORT | $75-105K | $80-200K | $185-255K |
| P4 | MIRROR + GHOST + DOJO + ADVERSARY + FORGE | $135-185K | $200-500K | $320-440K |
| P5 | CLOUD + PROPHECY + WEAPONS LINK | $105-150K | $500K-1.5M | $425-590K |
| P6 | LAUNCHER + CREW | $55-90K | $1.5-3M | $480-680K |
| P7 | AIR DEFENSE (conditional) | $50-70K | $3-5M | $530-750K |

**Total R&D (P0-P7): $530-750K**
**Y3 Revenue: $3-5M (nếu bao gồm P7)**
**ROI: 4-7x trong 3 năm**
**Breakeven: Month 15-18 (giữa Phase 4-5)**

### 5.2 Key Decision Point — Month 18

Tại cuối Phase 5, Workshop X phải quyết định:

- **Option A: RANGE = "MARKSMANSHIP ONLY"** → Giữ 17 products, stop. Focus revenue optimization.
- **Option B: RANGE = "ALL WEAPONS TRAINING"** → Mở rộng Phase 6-7, thêm 3 products (LAUNCHER + CREW + AIR DEFENSE).

Quyết định dựa trên: (1) Phase 5 revenue validation, (2) PROPHECY prediction accuracy, (3) Customer demand cho anti-armor/MANPADS training, (4) Engineering capacity availability.

---

## 6. PRODUCT TREE — 5 DOMAINS × 20 PRODUCTS

```
CORTEX RANGE ($15-25K perpetual + $3-5K/yr subscription)
│
├── LIVE ─────────────────────────────────────────────────
│   ├── CR-L1: SCOREBOARD ★ (Entry Product — P1)
│   ├── CR-L2: OVERWATCH (AI Video — P2)
│   ├── CR-L3: TRACKER (Position — P3)
│   └── CR-L4: WEAPONS LINK (V-SMASH/RCWS — P5)
│
├── VIRTUAL ──────────────────────────────────────────────
│   ├── CR-V1: MIRROR (Digital Twin — P4)
│   ├── CR-V2: GHOST (AR Inject + Night Mode — P4)
│   ├── CR-V3: DOJO (Marksmanship + VN Weapons — P4)
│   ├── CR-V4: LAUNCHER ★NEW (B41/RPG — P6)
│   ├── CR-V5: CREW ★NEW (AGS-17/DShK — P6)
│   └── CR-V6: AIR DEFENSE ★NEW ⚠️ (MANPADS — P7 CONDITIONAL)
│
├── CONSTRUCTIVE ─────────────────────────────────────────
│   ├── CR-C1: ADVERSARY (AI Threat — P4)
│   ├── CR-C2: SCENARIO FORGE (AI Scenario Gen — P4)
│   └── CR-C3: PROPHECY ★★★ INDUSTRY UNIQUE (Predictive — P5)
│
├── DATA ─────────────────────────────────────────────────
│   ├── CR-P0: CORTEX CDM ★ FOUNDATION (Data Model — P0)
│   ├── CR-D2: DEBRIEF (AI AAR — P2)
│   ├── CR-D3: PULSE (Real-Time Dashboard — P1)
│   └── CR-D4: EXPORT (DIS/TAK/OSAG/CAE Bridges — P3)
│
└── NETWORK ──────────────────────────────────────────────
    ├── CR-N1: MESH (Range Network — P3)
    ├── CR-N2: EDGE (Edge Compute — P3)
    └── CR-N3: CLOUD (Multi-Range Sync — P5)
```

---

*Document generated using Pahl & Beitz Chapter 9.2 Modular Products methodology + D-M-I-R Framework + Musk Serial Development principles.*

*CONFIDENTIAL — Workshop X — CORTEX RANGE Phased Product Catalog v1.0*
