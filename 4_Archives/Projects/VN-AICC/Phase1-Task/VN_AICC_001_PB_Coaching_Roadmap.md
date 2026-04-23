# VN-AICC-001: AI Command Center — Desktop Platform
## Pahl & Beitz 4-Phase Coaching Roadmap + D-M-I-R Learning Framework
### Version 1.0 | 13/02/2026

---

## 📋 PROJECT IDENTITY

| Field | Value |
|-------|-------|
| **Product ID** | VN-AICC-001 |
| **Product Name** | AI Command Center (AICC) — Desktop Platform |
| **Context** | Dual-use: Dân dụng (productivity) → Quốc phòng/An ninh (C2 console) |
| **Development Goal** | Platform product (nhiều biến thể cho nhiều ứng dụng) |
| **P&B Scope** | Toàn bộ 4 phases: Task Clarification → Detail Design |
| **Reference Product** | OpenClaw AI Desktop Controller (~$35-50 USD) |
| **Target Market** | Phase 1: Makers/Developers | Phase 2: Enterprise/Military |

---

## 🎯 COACHING STRATEGY: D-M-I-R Applied to Learning

### Diagnosis — Bạn đang ở đâu?

**Input hiện tại**: Bạn có bản mô tả sản phẩm tham khảo (reference product description) với:
- ✅ Ý tưởng và chức năng chính (concept-level)
- ✅ Danh sách thành phần phần cứng cơ bản
- ✅ Kiến trúc phần mềm sơ bộ (RPi + VPS + OpenClaw)
- ✅ Quy trình chế tạo vỏ tham khảo (3D print + finishing)
- ❌ Chưa có Requirements List có hệ thống (P&B format)
- ❌ Chưa phân tích stakeholders cho dual-use context
- ❌ Chưa abstraction để tìm essential problem
- ❌ Chưa có function structure, morphological matrix
- ❌ Chưa xác định platform architecture cho multi-variant strategy

### Modeling — Tốc độ học tối ưu

**Learning velocity target**: Hoàn thành Phase 1 trong 1 tuần, Phase 2 trong 2 tuần, Phase 3 trong 3 tuần, Phase 4 trong 2 tuần = **8 tuần tổng cộng** (phân bổ phù hợp P&B: 12%-25%-38%-25%)

### Intervention — Kế hoạch hành động

Coaching theo từng phase với deliverables rõ ràng, quality gates, và D-M-I-R micro-cycles.

### Reflection — Sau mỗi phase

After-Action Review: Gì đúng? Gì sai? Gì bất ngờ? Điều chỉnh gì cho phase tiếp?

---

## ═══════════════════════════════════════════════
## PHASE 1: TASK CLARIFICATION (Làm rõ nhiệm vụ)
## ═══════════════════════════════════════════════

### 1.1 Xác định vấn đề cốt lõi (Essential Problem)

**Bước quan trọng nhất**: Abstraction — loại bỏ solution-specific constraints để tìm bản chất.

**Quy trình 5 bước abstraction theo P&B:**

**Bước 1 — Loại bỏ sở thích cá nhân:**
- ❌ "Raspberry Pi 4" → đó là một solution, không phải requirement
- ❌ "OpenClaw" → đó là software cụ thể, không phải chức năng
- ❌ "Cyberpunk aesthetic" → đó là style preference
- ❌ "Space lobster mascot" → không liên quan đến function

**Bước 2 — Chuyển định lượng thành định tính:**
- "$35-50" → "chi phí prototype thấp, phù hợp sản xuất batch"
- "6 nút cảm ứng" → "giao diện điều khiển nhanh cho tác vụ AI"
- "4 inch + 2.8 inch" → "hiển thị đa kênh: thông tin tổng quan + điều khiển"

**Bước 3 — Mở rộng phạm vi:**
- Từ "desktop AI controller" → "Human-AI interaction terminal"
- Từ "stream deck cho AI agents" → "Dedicated hardware interface cho AI workflow management"

**Bước 4 — Xác định vấn đề cốt lõi:**

> **ESSENTIAL PROBLEM**: Người dùng cần một thiết bị phần cứng chuyên dụng để giám sát, điều khiển và tương tác với các tác nhân AI một cách tập trung, giảm xao nhãng so với sử dụng điện thoại/máy tính đa năng.

**Bước 5 — Mở rộng cho dual-use:**

> **DUAL-USE ESSENTIAL PROBLEM**: Tạo ra một nền tảng phần cứng mô-đun cho giao diện người-AI, phục vụ từ productivity cá nhân đến Command & Control quân sự, có khả năng mở rộng và tùy biến cho nhiều domain ứng dụng.

---

### 1.2 Stakeholder Analysis (Phân tích bên liên quan)

#### Variant A — Dân dụng (Civilian Productivity)

| Stakeholder | Needs | Priority |
|-------------|-------|----------|
| **Developers/Makers** | Customizable, hackable, affordable, open-source | High |
| **Knowledge Workers** | Less distraction, quick AI task approval, monitoring | High |
| **Content Creators** | Streamlined AI workflows, visual status display | Medium |
| **IT Administrators** | Security, manageability, fleet deployment | Medium |

#### Variant B — Quốc phòng/An ninh (Defense/Security)

| Stakeholder | Needs | Priority |
|-------------|-------|----------|
| **Operator (Sĩ quan trực)** | Giám sát AI agents trong phòng tác chiến, phê duyệt quyết định | Critical |
| **Commander** | Tổng quan tình hình, cảnh báo khẩn, phê duyệt nhanh | Critical |
| **System Admin** | Bảo mật, cấu hình, tích hợp hệ thống C4ISR | High |
| **Maintenance** | Bảo trì dễ, thay module nhanh | High |
| **Procurement** | Chi phí thấp, nội địa hóa cao, tuân thủ TCVN/QP | High |

---

### 1.3 Requirements List — Bản nháp đầu tiên

**Hướng dẫn coaching**: Đây là bản nháp V0.1. Bạn sẽ iterate nhiều lần. Mục tiêu ban đầu là **capture đủ rộng**, sau đó refine.

**Phân loại: D = Demand (BẮT BUỘC) | W = Wish (MONG MUỐN)**

#### GEOMETRY (Hình học)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | GE.01 | Kích thước tổng thể (footprint) | ≤ 200 × 150 | mm | Desktop form factor | All |
| D | GE.02 | Chiều cao | ≤ 120 | mm | Không che tầm nhìn | All |
| W | GE.03 | Góc nghiêng bề mặt | 15-30 | ° | Ergonomic viewing angle | All |
| D | GE.04 | Trọng lượng | ≤ 0.8 (Civ) / ≤ 1.5 (Mil) | kg | Ổn định trên bàn | All |
| W | GE.05 | Khả năng gắn VESA / bracket | Có | - | Wall/rack mount option | Mil |

#### KINEMATICS (Động học)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| W | KI.01 | Rotary encoder (núm xoay) | ≥ 1 | pcs | Navigation/volume control | All |
| W | KI.02 | Tilt adjustable | ±10 | ° | Ergonomic adaptation | Civ |

#### FORCES (Lực)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | FO.01 | Lực nhấn nút | 1.5-3.0 | N | Tactile feedback, chống nhấn nhầm | All |
| W | FO.02 | Chống trượt (đáy) | Có | - | Rubber feet / suction | All |
| D | FO.03 | Chịu va đập nhẹ | Rơi 0.5m (Civ) / MIL-STD-810 Method 516 (Mil) | - | Desktop drop | All/Mil |

#### ENERGY (Năng lượng)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | EN.01 | Nguồn cấp chính | USB-C 5V/3A (Civ) / 12-28V DC (Mil) | - | Standard / vehicle power | All |
| W | EN.02 | Battery backup | ≥ 2 giờ (Civ) / ≥ 8 giờ (Mil) | h | UPS function | All |
| D | EN.03 | Công suất tiêu thụ trung bình | ≤ 8 (Civ) / ≤ 15 (Mil) | W | Bao gồm màn hình + SBC | All |
| W | EN.04 | Power-saving mode | Có | - | Dim display khi idle | All |

#### MATERIAL (Vật liệu)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | MA.01 | Vỏ ngoài | PLA/PETG (Civ) / Al 6061-T6 hoặc PA12 (Mil) | - | 3D print vs CNC | All |
| W | MA.02 | Khả năng tái chế | Có | - | Eco-friendly materials | Civ |
| D | MA.03 | Chống cháy (vỏ) | UL94 V-0 (Mil) | - | Fire resistance | Mil |

#### SIGNALS (Tín hiệu)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | SI.01 | Kết nối mạng | WiFi 5 (Civ) / Ethernet + WiFi (Mil) | - | Kết nối tới AI server | All |
| D | SI.02 | Màn hình chính | ≥ 3.5 inch IPS, 480×320 | - | Status dashboard | All |
| D | SI.03 | Màn hình phụ (cảm ứng) | ≥ 2.4 inch capacitive | - | Quick action buttons | All |
| D | SI.04 | Nút vật lý lập trình được | ≥ 6 | pcs | Hard buttons cho critical actions | All |
| W | SI.05 | LED trạng thái | ≥ 4 | pcs | System health indicators | All |
| W | SI.06 | Buzzer/Speaker | Có | - | Audio notifications | All |
| D | SI.07 | USB ports (peripheral) | ≥ 1 (Civ) / ≥ 2 (Mil) | pcs | Keyboard, USB stick | All |
| W | SI.08 | Serial/GPIO expansion | Có | - | Sensor/actuator integration | Mil |
| D | SI.09 | Giao thức AI agent | REST API / WebSocket | - | Kết nối OpenClaw hoặc tương đương | All |
| W | SI.10 | Mã hóa truyền thông | TLS 1.3 (Civ) / AES-256 + mTLS (Mil) | - | Bảo mật kết nối | All/Mil |

#### SAFETY (An toàn)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | SF.01 | An toàn điện | IEC 62368-1 (Civ) / MIL-STD-1275 (Mil) | - | CE marking / military | All |
| D | SF.02 | Nhiệt độ bề mặt tối đa | ≤ 45 | °C | Chống bỏng khi chạm | All |
| W | SF.03 | Tamper detection | Có | - | Alert khi mở vỏ trái phép | Mil |
| D | SF.04 | Secure boot | Có | - | Chống firmware giả mạo | Mil |

#### ERGONOMICS (Công thái học)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | ER.01 | Góc nhìn màn hình | ≥ 120° ngang, ≥ 80° dọc | ° | Đọc từ nhiều vị trí | All |
| D | ER.02 | Độ sáng màn hình | ≥ 250 (Civ) / ≥ 500 (Mil) | cd/m² | Đọc trong ánh sáng mạnh | All |
| W | ER.03 | Night mode (red filter) | Có | - | Bảo vệ thị lực ban đêm | Mil |
| D | ER.04 | Nút có phản hồi xúc giác | Có | - | Tactile + audible click | All |
| W | ER.05 | Thao tác một tay | Có | - | Approve/reject nhanh | All |

#### PRODUCTION (Sản xuất)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | PR.01 | Phương pháp SX vỏ | 3D print (prototype) / Injection molding (batch) | - | Scalable manufacturing | All |
| D | PR.02 | Số lượng linh kiện tổng | ≤ 30 (Civ) / ≤ 50 (Mil) | pcs | DfA simplicity | All |
| D | PR.03 | Thời gian lắp ráp | ≤ 30 (Civ) / ≤ 60 (Mil) | phút | Manual assembly | All |
| W | PR.04 | PCB layers | 2-4 (Civ) / 4-6 (Mil) | layers | Complexity vs cost | All |
| D | PR.05 | Tỷ lệ nội địa hóa | ≥ 40% (Civ) / ≥ 60% (Mil) | % | Local content target | All |

#### QUALITY (Chất lượng)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | QA.01 | MTBF | ≥ 5,000 (Civ) / ≥ 10,000 (Mil) | giờ | Reliability target | All |
| D | QA.02 | Tỷ lệ lỗi sản xuất | ≤ 2% (Civ) / ≤ 0.5% (Mil) | % | Yield target | All |
| W | QA.03 | Self-diagnostic | Có | - | Boot-up health check | All |

#### ASSEMBLY (Lắp ráp)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | AS.01 | Thiết kế mô-đun | ≥ 3 modules tách rời | - | Display + Compute + I/O | All |
| D | AS.02 | Tool-free assembly (vỏ) | Có (Civ) / Fastener (Mil) | - | Snap-fit vs screw | All |
| D | AS.03 | Connector standardization | USB-C + FPC (Civ) / MIL-spec connectors (Mil) | - | Inter-module connections | All |

#### TRANSPORT (Vận chuyển)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | TR.01 | Chịu vận chuyển thông thường | Có | - | Courier shipping | Civ |
| D | TR.02 | Chịu vận chuyển quân sự | MIL-STD-810 Method 514 | - | Vehicle/aircraft transport | Mil |

#### OPERATION (Vận hành)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | OP.01 | Thời gian khởi động | ≤ 30 (Civ) / ≤ 15 (Mil) | s | Boot to operational | All |
| D | OP.02 | Hoạt động 24/7 | Có | - | Always-on monitoring | All |
| D | OP.03 | OTA firmware update | Có (Civ) / Controlled (Mil) | - | Remote update capability | All |
| W | OP.04 | Offline mode | Có | - | Hoạt động khi mất mạng | All |

#### MAINTENANCE (Bảo trì)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | MT.01 | Thay module (display/compute) | ≤ 10 | phút | Field replaceable | All |
| D | MT.02 | Không cần dụng cụ đặc biệt | Có (Civ) / Basic toolkit (Mil) | - | Standard tools | All |
| W | MT.03 | Diagnostic port | Có | - | Debug/maintenance interface | All |

#### ENVIRONMENT (Môi trường)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | EV.01 | Nhiệt độ hoạt động | 0 to +45 (Civ) / -10 to +55 (Mil) | °C | Vietnam climate | All |
| D | EV.02 | Độ ẩm | ≤ 85% RH (Civ) / 0-100% RH (Mil) | - | Tropical | All |
| W | EV.03 | IP Rating | IP40 (Civ) / IP54 (Mil) | - | Dust + splash | All |
| D | EV.04 | EMC | FCC/CE (Civ) / MIL-STD-461 (Mil) | - | Electromagnetic compatibility | All |

#### COSTS (Chi phí)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | CO.01 | BOM cost (prototype) | ≤ 50 (Civ) / ≤ 200 (Mil) | USD | Per unit | All |
| D | CO.02 | BOM cost (batch ≥100) | ≤ 35 (Civ) / ≤ 150 (Mil) | USD | Volume pricing | All |
| W | CO.03 | Target retail price | ≤ 99 (Civ) / ≤ 500 (Mil) | USD | Market competitive | All |
| D | CO.04 | Development cost total | ≤ 5,000 (Civ) / ≤ 20,000 (Mil) | USD | Including tooling | All |

#### SCHEDULE (Tiến độ)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | SC.01 | Prototype V1 (Civ) | ≤ 8 | tuần | Working prototype | Civ |
| D | SC.02 | Pilot batch (Civ) | ≤ 16 | tuần | 10-unit run | Civ |
| W | SC.03 | Military variant development | ≤ 6 | tháng | After civilian validated | Mil |

#### PLATFORM ARCHITECTURE (Kiến trúc nền tảng)

| D/W | ID | Requirement | Value | Unit | Notes | Variant |
|-----|-----|-------------|-------|------|-------|---------|
| D | PL.01 | Modular compute swap | Có | - | RPi ↔ Jetson ↔ Custom SBC | All |
| D | PL.02 | Display hot-swap | Có | - | Upgrade display without redesign | All |
| D | PL.03 | I/O expansion slot | ≥ 1 | - | Add RF, sensors, crypto module | All |
| D | PL.04 | Software-agnostic | Có | - | OpenClaw, custom agent, MCP | All |
| W | PL.05 | Stackable/daisy-chain | Có | - | Multi-unit deployment | Mil |

**Tổng số requirements V0.1: ~75 items** (Target: refine đến 80-100 items với full quantification)

---

### 1.4 Phase 1 Quality Gate Checklist

Trước khi chuyển sang Phase 2, kiểm tra:

- [ ] Essential problem xác định rõ ràng (solution-neutral)
- [ ] Stakeholder analysis đầy đủ cho cả civilian và military variants
- [ ] Requirements List ≥ 80 items, tất cả có D/W classification
- [ ] Tất cả D requirements có quantification (số + đơn vị)
- [ ] Không có xung đột giữa requirements (hoặc đã ghi nhận trade-offs)
- [ ] Applicable standards identified (IEC, FCC/CE cho Civ; MIL-STD cho Mil)
- [ ] Requirements có verification method (Test/Analysis/Demonstration/Inspection)
- [ ] Platform requirements đảm bảo multi-variant khả thi
- [ ] Stakeholder review (ít nhất 1 potential user đã xem)

---

## ═══════════════════════════════════════════════
## PHASE 2: CONCEPTUAL DESIGN (Thiết kế nguyên lý)
## ═══════════════════════════════════════════════

### 2.1 Function Structure (Cấu trúc chức năng)

**Overall Function**: Nhận lệnh/dữ liệu từ AI agents → Hiển thị trạng thái → Cho phép người dùng tương tác/phê duyệt → Trả phản hồi về AI agents

```
                    ┌─────────────────────────────────────────────────┐
                    │         AI COMMAND CENTER (AICC)                │
                    │                                                 │
   AI Agent Data ──►│  OVERALL FUNCTION:                              │──► Action Commands
   (Signals In)     │  "Giám sát và điều khiển tác nhân AI           │    (Signals Out)
                    │   thông qua giao diện phần cứng chuyên dụng"   │
   Power ─────────►│                                                 │──► Heat (waste)
   (Energy In)      │                                                 │
                    │                                                 │──► Visual/Audio
   User Input ────►│                                                 │    Feedback
   (Human action)   │                                                 │    (Signals Out)
                    └─────────────────────────────────────────────────┘
```

**Sub-Function Breakdown:**

```
LEVEL 0: Giám sát & Điều khiển AI Agents qua hardware chuyên dụng
│
├── SF1: RECEIVE (Nhận dữ liệu)
│   ├── SF1.1: Kết nối mạng (WiFi/Ethernet → AI Server)
│   ├── SF1.2: Xác thực & mã hóa (TLS/mTLS)
│   ├── SF1.3: Parse AI agent messages (heartbeat, alerts, tasks)
│   └── SF1.4: Buffer & prioritize (queue management)
│
├── SF2: PROCESS (Xử lý)
│   ├── SF2.1: Phân loại thông báo (urgent/normal/info)
│   ├── SF2.2: Render UI elements (dashboard, buttons, status)
│   ├── SF2.3: Quản lý state machine (idle/active/alert/critical)
│   └── SF2.4: Log & record (local storage)
│
├── SF3: DISPLAY (Hiển thị)
│   ├── SF3.1: Dashboard chính (main display — status overview)
│   ├── SF3.2: Action panel (touch display — quick actions)
│   ├── SF3.3: LED indicators (system health)
│   └── SF3.4: Audio alerts (buzzer/speaker)
│
├── SF4: INTERACT (Tương tác)
│   ├── SF4.1: Physical buttons (approve/reject/custom)
│   ├── SF4.2: Touch screen input (on secondary display)
│   ├── SF4.3: Rotary encoder (navigate/select)
│   └── SF4.4: Debounce & confirm (chống nhấn nhầm)
│
├── SF5: RESPOND (Phản hồi)
│   ├── SF5.1: Send command to AI agent (approve/reject/modify)
│   ├── SF5.2: Acknowledge receipt (visual + audio confirmation)
│   └── SF5.3: Update local state
│
├── SF6: POWER (Cấp nguồn)
│   ├── SF6.1: Accept external power (USB-C / DC jack)
│   ├── SF6.2: Regulate voltage (5V/3.3V rails)
│   ├── SF6.3: Battery management (charge/discharge/UPS)
│   └── SF6.4: Power state control (on/sleep/off)
│
└── SF7: PROTECT (Bảo vệ) [Military variant emphasis]
    ├── SF7.1: Environmental protection (thermal/moisture/dust)
    ├── SF7.2: EMC shielding
    ├── SF7.3: Tamper detection
    └── SF7.4: Secure boot & encrypted storage
```

---

### 2.2 Morphological Matrix (Ma trận hình thái)

**Hướng dẫn coaching**: Mỗi sub-function có nhiều solution principles khả thi. Kết hợp các principles tương thích tạo thành concepts.

| Sub-Function | Solution A | Solution B | Solution C | Solution D |
|-------------|-----------|-----------|-----------|-----------|
| **SF1: Receive** | Raspberry Pi 4 WiFi | ESP32 + Ethernet | Jetson Nano WiFi/ETH | Custom SBC (STM32MP1) |
| **SF2: Process** | Linux + Python scripts | RTOS + C firmware | Linux + containerized apps | Bare-metal + custom OS |
| **SF3.1: Main Display** | 4" IPS LCD (SPI) | 5" HDMI IPS | 3.5" e-Paper | 7" HDMI touchscreen |
| **SF3.2: Action Panel** | 2.8" touch LCD | Physical button matrix (4×4) | OLED button modules (Stream Deck style) | Capacitive touch pad |
| **SF3.3: Status LEDs** | RGB NeoPixel strip | Individual LEDs (5mm) | LED bar graph | Light pipe + single LED |
| **SF3.4: Audio** | Piezo buzzer | Small speaker (3W) | Haptic motor (vibration) | None (silent) |
| **SF4.1: Buttons** | Mechanical switches (Cherry MX) | Membrane buttons | Tactile switches (6mm) | Capacitive touch areas |
| **SF4.3: Navigation** | Rotary encoder | Joystick (5-way) | D-pad buttons | Trackball |
| **SF6.1: Power** | USB-C PD | 12V DC barrel jack | PoE (Power over Ethernet) | USB-C + internal LiPo |
| **SF6.3: Battery** | No battery (mains only) | 18650 Li-ion (1S/2S) | LiPo pouch cell | Supercapacitor (short UPS) |
| **SF7.1: Enclosure** | 3D printed PLA/PETG | CNC aluminum | Injection molded ABS | Sheet metal + 3D print hybrid |
| **SF7.2: EMC** | None (open design) | Copper tape shielding | Aluminum enclosure (inherent) | Dedicated EMI gaskets + coatings |

---

### 2.3 Concept Variants (Phương án thiết kế)

**Concept 1: MAKER EDITION** (Phiên bản Maker/Developer)
```
RPi 4 + 4" SPI LCD + 2.8" touch + Cherry MX buttons + Rotary encoder
+ NeoPixel LEDs + Piezo buzzer + USB-C power + No battery
+ 3D printed PETG enclosure + No EMC shielding
→ Target: $40-50, open-source, hackable
```

**Concept 2: PROFESSIONAL EDITION** (Phiên bản chuyên nghiệp)
```
RPi CM4 + 5" HDMI IPS + OLED button modules + Tactile switches
+ LED bar graph + Small speaker + USB-C PD + 18650 battery (2h UPS)
+ Injection molded ABS + Copper tape shielding
→ Target: $80-120, refined UX, enterprise-ready
```

**Concept 3: TACTICAL EDITION** (Phiên bản quân sự)
```
Jetson Nano/Custom SBC + 5" HDMI sunlight-readable + Physical button matrix
+ Tactile switches + Light pipes + Haptic motor + 12V DC + LiPo 8h
+ CNC Al 6061 + EMI gaskets + MIL-STD-461 compliant
→ Target: $200-400, ruggedized, C2/MDA integration
```

**Concept 4: PLATFORM CORE** (Nền tảng lõi — khuyến nghị)
```
Modular compute slot (RPi/CM4/Jetson) + Modular display bay (3.5"-7")
+ Standardized button I/O board + Expansion slot
+ USB-C PD + Optional battery module
+ Base frame (Al extrusion) + Swappable skin (3D print / CNC / IM)
→ Target: Core $60-80, configurations $40-400
```

---

### 2.4 VDI 2225 Concept Evaluation (Sẽ thực hiện chi tiết khi bạn refine)

**Gợi ý tiêu chí đánh giá** (sẽ định lượng cùng bạn):

| Criterion | Weight | Rationale |
|-----------|--------|-----------|
| Platform flexibility (multi-variant) | 20% | Core strategy requirement |
| Cost efficiency (Civ variant) | 15% | Market competitiveness |
| Performance (responsiveness, UX) | 15% | User satisfaction |
| Manufacturability (DfM) | 12% | Scale-up feasibility |
| Military upgrade path | 12% | Dual-use strategy |
| Reliability (MTBF) | 10% | Quality perception |
| Local content potential | 8% | Nội địa hóa |
| Development speed | 8% | Time-to-market |

**Dự đoán ban đầu**: Concept 4 (Platform Core) sẽ score cao nhất vì nó maximize platform flexibility trong khi vẫn cho phép cost optimization per variant. Nhưng chúng ta cần chạy VDI 2225 calculator để verify objectively.

---

### 2.5 Phase 2 Quality Gate Checklist

- [ ] Essential problem → Function Structure trace rõ ràng
- [ ] Sub-functions đầy đủ, covers tất cả requirements
- [ ] Morphological Matrix ≥ 3 solutions per key sub-function
- [ ] ≥ 3 concept variants tạo thành từ compatible combinations
- [ ] VDI 2225 evaluation hoàn thành với ≥ 7 criteria
- [ ] Concept winner xác định với justification
- [ ] Platform architecture concept validated (modular strategy)
- [ ] Preliminary feasibility check (có thể build prototype?)

---

## ═══════════════════════════════════════════════
## PHASE 3: EMBODIMENT DESIGN (Thiết kế thể hiện)
## ═══════════════════════════════════════════════

### 3.1 Approach — Platform Architecture Embodiment

**Coaching note**: Phase 3 là phase dài nhất (38% effort). Ở đây chúng ta biến concept thành layout cụ thể với kích thước, vật liệu, và quy trình sản xuất.

**Strategy cho platform product**: Design "Base Platform" trước, sau đó derive variants.

#### Base Platform Architecture

```
┌──────────────────────────────────────────────┐
│           AI COMMAND CENTER — EXPLODED VIEW   │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         TOP SHELL (Skin Layer)          │  │  ← Variant-specific
│  │    3D Print / CNC / Injection Mold      │  │     (cosmetics + protection)
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         DISPLAY MODULE                  │  │  ← Swappable
│  │    Main LCD + Touch Panel               │  │     (3.5" → 7" range)
│  │    FPC connector to mainboard           │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         I/O BOARD (Button Board)        │  │  ← Standardized
│  │    Buttons + Encoder + LEDs + Touch     │  │     PCB design
│  │    I2C/SPI connector to mainboard       │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         MAINBOARD (Carrier Board)       │  │  ← Platform core
│  │    SBC slot + Power management          │  │     (shared across all)
│  │    + Expansion connector + Storage      │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         COMPUTE MODULE                  │  │  ← Swappable
│  │    RPi CM4 / Jetson / Custom SBC        │  │     (performance scaling)
│  │    SODIMM or custom form factor         │  │
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         POWER MODULE                    │  │  ← Optional
│  │    Battery pack + Charger IC            │  │     (add for portable/mil)
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         EXPANSION MODULE                │  │  ← Optional
│  │    Radio / Crypto / Sensor / GPIO       │  │     (add for mil/industrial)
│  └─────────────────────────────────────────┘  │
│                                               │
│  ┌─────────────────────────────────────────┐  │
│  │         BOTTOM SHELL (Base)             │  │  ← Variant-specific
│  │    Structural base + feet/mount         │  │     (desk / rack / vehicle)
│  └─────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

### 3.2 Key Embodiment Decisions (To be developed with KN)

| Decision | Options | Criteria | Status |
|----------|---------|----------|--------|
| Base frame material | Al extrusion / Steel bracket / 3D print frame | Strength, cost, tooling | TBD |
| Inter-module connector | FPC flat cable / Board-to-board / Custom backplane | Reliability, flexibility | TBD |
| Thermal management | Passive (heatsink) / Active (fan) / Hybrid | Noise, reliability, size | TBD |
| Mounting system | Rubber feet / VESA 75 / DIN rail / 19" rack ears | Use case flexibility | TBD |
| PCB design | Single board / Multi-board modular / Flex-rigid | Cost vs modularity | TBD |

### 3.3 DfX Checklist for Embodiment

- [ ] **DfM**: All parts manufacturable with target processes (3D print/CNC/IM)
- [ ] **DfA**: Assembly sequence defined, ≤ 30 min, ≤ 2 assembly directions
- [ ] **DfMaint**: All modules accessible without special tools
- [ ] **DfC**: BOM cost within target per variant
- [ ] **DfS**: No sharp edges, thermal protection, electrical isolation
- [ ] **DfEMC** (Mil): Shielding strategy defined, grounding plan
- [ ] **DfEnvironment** (Mil): Sealing, corrosion protection, thermal range

### 3.4 Phase 3 Quality Gate

- [ ] Definitive layout with dimensions (scale drawing or CAD)
- [ ] Material specifications cho tất cả components
- [ ] BOM preliminary với supplier identification
- [ ] Thermal analysis (predicted junction temperatures)
- [ ] Modularity verified (swap test scenario)
- [ ] Manufacturing process plan outline
- [ ] Cost estimate per variant (BOM + assembly)

---

## ═══════════════════════════════════════════════
## PHASE 4: DETAIL DESIGN (Thiết kế chi tiết)
## ═══════════════════════════════════════════════

### 4.1 Deliverables Checklist

| Deliverable | Format | Status |
|-------------|--------|--------|
| Part drawings (all custom parts) | DXF/STEP + PDF | TBD |
| Assembly drawing (exploded + assembled) | STEP + PDF | TBD |
| BOM (complete with suppliers) | Spreadsheet | TBD |
| PCB layout (Gerber files) | KiCad/Altium output | TBD |
| 3D print files (enclosure) | STL/3MF | TBD |
| Firmware source code | Git repository | TBD |
| Assembly instructions | Illustrated guide | TBD |
| Test procedures | Per requirements | TBD |
| User manual | PDF/Web | TBD |
| Cost calculation (final) | Spreadsheet | TBD |

### 4.2 Verification Matrix Template

| Req ID | Requirement | Method | Standard | Acceptance | Test ID | Result |
|--------|-------------|--------|----------|------------|---------|--------|
| EN.01 | Power input | T | IEC 62368 | No failure | TP-001 | - |
| EV.01 | Operating temp | T | MIL-STD-810 501/502 | Functional at range | TP-002 | - |
| SI.02 | Main display | D | - | Readable at 0.5m | DM-001 | - |
| QA.01 | MTBF | A | MIL-HDBK-217 | ≥ target hours | RA-001 | - |

### 4.3 Phase 4 Quality Gate

- [ ] All part drawings complete with tolerances
- [ ] BOM finalized, all parts sourced
- [ ] PCB fabrication files verified (DRC clean)
- [ ] Firmware tested on target hardware
- [ ] Assembly instructions verified (build 1 unit following docs)
- [ ] All MUST requirements verified (T/A/D/I)
- [ ] Cost within budget
- [ ] Production package ready for handoff

---

## ═══════════════════════════════════════════════
## D-M-I-R LEARNING MILESTONES
## ═══════════════════════════════════════════════

### Weekly Micro-Cycles

| Week | Phase | Focus | Deliverable | D-M-I-R Reflection |
|------|-------|-------|-------------|-------------------|
| 1 | P1 | Essential problem + Requirements List V1.0 | Requirements List (≥80 items) | What did I miss? |
| 2 | P2 | Function Structure + Morphological Matrix | FS diagram + MM table | Did I abstract enough? |
| 3 | P2 | Concept generation + VDI 2225 evaluation | 3-4 evaluated concepts | Am I biased toward one? |
| 4 | P3 | Platform architecture + layout sketch | Block diagram + rough dims | Is modularity real? |
| 5 | P3 | Component selection + preliminary BOM | BOM V1.0 + supplier list | Cost realistic? |
| 6 | P3 | Detailed layout + DfX review | CAD model or detailed sketch | DfA feasible? |
| 7 | P4 | PCB design + firmware architecture | Schematic + code structure | Integration risks? |
| 8 | P4 | Documentation + prototype build | Build 1 unit, verify | What would I do different? |

### Key Learning Objectives per Phase

**Phase 1**: Master requirements elicitation and classification (D/W, quantification)
**Phase 2**: Master abstraction → function decomposition → systematic concept generation
**Phase 3**: Master layout development with DfX constraints integration
**Phase 4**: Master production documentation and verification planning

---

## 🚀 NEXT STEPS — Bắt đầu ngay

### Immediate Action (Hôm nay):
1. **Review Requirements List V0.1** ở trên — đánh dấu items nào bạn đồng ý, items nào cần sửa
2. **Bổ sung requirements** bạn thấy thiếu (đặc biệt cho use case cụ thể của bạn)
3. **Xác nhận essential problem statement** — có phản ánh đúng ý định của bạn không?

### Week 1 Target:
- Requirements List V1.0 hoàn chỉnh (≥80 items, all quantified)
- Stakeholder validation (ít nhất 1 potential user review)
- Phase 1 Quality Gate PASS

---

*Document ID: VN-AICC-001-COACHING-v1.0*
*Framework: Pahl & Beitz Systematic Design + D-M-I-R Learning*
*Author: KN Nguyen (coached by Claude)*
*Date: 13/02/2026*
