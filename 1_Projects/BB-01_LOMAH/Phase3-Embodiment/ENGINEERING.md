# ENGINEERING.md — VKTHQ Defense Product Development Context

> **Persistent Context System v1.0** | Updated: 2026-02-09
> **Mục đích**: File này là "bộ não" của hệ thống AI-augmented engineering
> **Rule**: MỌI AI session PHẢI đọc file này trước khi bắt đầu làm việc

---

## 1. IDENTITY & MISSION

**Tổ chức**: VKTHQ — Viện Kỹ thuật Hải quân (Naval Technical Institute)
**Mission**: Phát triển sản phẩm công nghiệp an ninh quốc phòng cho QĐND/CAND Việt Nam
**Phương pháp luận**: D-M-I-R × Pahl & Beitz × TOC × Meadows Leverage Points

### Mục tiêu chiến lược

| Target | Metric | Status |
|--------|--------|--------|
| R&D cycle time | -50-60% vs truyền thống | 🔄 In progress |
| Nội địa hoá | >60% value | ✅ Policy |
| Export ready | MIL-STD/STANAG | 🔄 Building |
| Knowledge transfer | Tacit → Documented | 🔄 This system |

---

## 2. PORTFOLIO OVERVIEW — 15 Sản phẩm

### 2.1 Product Registry

| ID | Code | Sản phẩm | Loại | Pha hiện tại | Priority | Constraint chính |
|----|------|----------|------|--------------|----------|------------------|
| P01 | ARVR-SIM | AR-VR Weapon Simulator | Mô phỏng | Task Clarification | ★★★ | VR hardware sourcing |
| P02 | MGM | Machine Gun Mount | Cơ khí-vũ khí | Embodiment | ★★★★ | Recoil absorption testing |
| P03 | RCWS12.7 | 12.7mm RCWS | Cơ điện tử-vũ khí | Embodiment | ★★★★★ | Stabilization accuracy |
| P04 | T-USV | Target USV | UMV mặt nước | Conceptual | ★★★ | Sea state survivability |
| P05 | TT-SEA | Towed Target (at Sea) | Mục tiêu hải quân | Embodiment | ★★★ | Tow cable dynamics |
| P06 | TG | Training Grenade | Đạn huấn luyện | Conceptual | ★★ | Realism vs safety tradeoff |
| P07 | UAVCAT | UAV Catapult | Thiết bị phóng | Task Clarification | ★★★ | G-load limits on UAV |
| P08 | RITSIM | Radar-IR Target Sim | Mục tiêu mô phỏng | Task Clarification | ★★★★ | RCS accuracy |
| P09 | TD1300 | Tethered Drone 1300 | UAV có dây | Conceptual | ★★★★★ | Deployment time (NOT endurance) |
| P10 | T-UAV | Target UAV | UAV mục tiêu | Task Clarification | ★★★★ | Recovery rate & cost/sortie |
| P11 | CDRONE | Transport Cargo Drone | UAV vận tải | Task Clarification | ★★ | Payload/range trade-off |
| P12 | LOMAH | LOMAH System | Âm học đo lệch | Embodiment | ★★★★★ | Setup time (25min→10min) |
| P13 | NWS | Naval Weapon Simulator | Mô phỏng hải quân | Task Clarification | ★★★ | Scenario fidelity |
| P14 | SAS | Small Arms Simulator | Mô phỏng bộ binh | Embodiment | ★★★★ | Feedback immediacy |
| P15 | RAMS | RAMS | Huấn luyện AI | Conceptual | ★★★★★ | Real-time AI processing |

### 2.2 Product Family Clusters

```
CLUSTER A: TRAINING & SIMULATION
├── P01 ARVR-SIM ──── Shares: Display tech, scenario engine
├── P13 NWS ───────── Shares: Physics engine, AAR system
├── P14 SAS ───────── Shares: Ballistics model, hit detection
└── P15 RAMS ──────── Shares: AI/ML pipeline, sensor fusion

CLUSTER B: TARGETS & COUNTERMEASURES
├── P04 T-USV ─────── Shares: Autopilot, GPS/INS, telemetry
├── P05 TT-SEA ────── Shares: Radar reflectors, tow mechanisms
├── P08 RIT-SIM ───── Shares: RCS augmentation, IR emitters
└── P10 T-UAV ─────── Shares: Airframe, propulsion, recovery

CLUSTER C: WEAPON SYSTEMS & MOUNTS
├── P02 MGM ───────── Shares: Recoil system, mounting interface
├── P03 RCWS-12.7 ─── Shares: Servo drives, fire control
└── V-SMASH family ── Shares: AI FCS, sensor modules

CLUSTER D: UAV PLATFORMS
├── P07 UAV-CAT ───── Shares: Launch rail, energy storage
├── P09 TD-1300 ───── Shares: Airframe, power tether, gimbal
└── P11 C-DRONE ───── Shares: Flight controller, navigation

STANDALONE
├── P06 TG ──────────── Training Grenade (standalone pyro/mech)
└── P12 LOMAH ───────── Acoustic sensing (standalone system)
```

### 2.3 Cross-Portfolio Leverage (Shared Subsystems)

| Subsystem | Products | Note |
|-----------|----------|------|
| AI/ML processing (Jetson) | P01, P03, P12, P14, P15 | NVIDIA Jetson family |
| Ruggedized enclosure (IP65/67) | P03, P09, P12, P14 | Standard platform |
| Telemetry & data link (900MHz/2.4GHz) | P04, P09, P10, P11 | Common protocol |
| Power management BMS (BB-2590) | P03, P09, P10 | Li-ion compatible |
| Mounting interface (Picatinny/NATO) | P02, P03, P14 | STANAG compliant |

---

## 3. ARCHITECTURE RULES — "Luật thiết kế"

### 3.1 DEMANDS (Bất di bất dịch)

| Code | Rule | Rationale |
|------|------|-----------|
| D01 | Safety first | MIL-STD-882E hazard analysis cho MỌI sản phẩm có explosive/kinetic energy |
| D02 | Solution-neutral | KHÔNG chọn giải pháp trước khi có requirements list validated |
| D03 | Quantify decisions | KHÔNG chọn phương án bằng cảm tính. Dùng VDI 2225 + AHP |
| D04 | Standards traceable | MỌI yêu cầu PHẢI trace được đến standard cụ thể |
| D05 | Constraint-first | Tìm bottleneck TRƯỚC KHI tối ưu chi tiết |
| D06 | Test-as-you-go | Prototype + test ở MỖI pha, không dồn test cuối |
| D07 | Local content >60% | Ưu tiên vật liệu/linh kiện khả dụng tại Việt Nam |
| D08 | DfM for Vietnam | Thiết kế cho năng lực sản xuất THỰC TẾ (CNC, hàn, lắp ráp tại VKTHQ) |
| D09 | Modular architecture | Thiết kế module hoá để tái sử dụng giữa các sản phẩm |
| D10 | Document everything | MỌI quyết định thiết kế phải có rationale ghi lại |

### 3.2 WISHES (Nên tuân thủ)

| Code | Rule | Rationale |
|------|------|-----------|
| W01 | COTS preference | Dùng linh kiện thương mại sẵn có khi chất lượng đáp ứng |
| W02 | Single-source avoidance | Tối thiểu 2 nguồn cung cho linh kiện critical |
| W03 | Tropical-first | Thiết kế cho điều kiện nhiệt đới VN (nóng, ẩm, muối) từ đầu |
| W04 | Operator simplicity | Bộ đội phải sử dụng được sau 2 giờ đào tạo |
| W05 | Field maintenance | Sửa chữa bậc 1-2 tại đơn vị, không cần trả về nhà máy |
| W06 | Export-ready | Thiết kế sẵn cho thị trường xuất khẩu (non-ITAR preferred) |

### 3.3 NEVER (Anti-Patterns)

| Code | NEVER | Consequence |
|------|-------|-------------|
| NEVER-01 | Nhảy vào CAD trước khi có function structure | Solution fixation |
| NEVER-02 | Chọn concept theo ý thích cá nhân | Skip VDI 2225 → bad decisions |
| NEVER-03 | Bỏ qua DfM review trước khi freeze layout | Chi phí sửa tăng 10x |
| NEVER-04 | Tối ưu tham số trước khi tìm constraint | 95% effort lãng phí (L12) |
| NEVER-05 | Copy thiết kế nước ngoài mà không abstract | Mang theo giải pháp lẫn vấn đề |
| NEVER-06 | Test cuối dự án | Dồn rủi ro, không có thời gian sửa |
| NEVER-07 | Tolerance tight hơn cần thiết | Tăng cost sản xuất không cần thiết |
| NEVER-08 | Thiết kế cho điều kiện lý tưởng | Luôn tính worst case (MIL-STD-810) |
| NEVER-09 | Bỏ qua Reflection trong D-M-I-R | Mất bài học, lặp lỗi cũ |
| NEVER-10 | Giả định requirement mà không verify | Luôn hỏi stakeholder |

---

## 4. DESIGN STANDARDS & COMPLIANCE

### 4.1 Standards Matrix

| Standard | Phạm vi | Sản phẩm áp dụng | Notes |
|----------|---------|------------------|-------|
| MIL-STD-810H | Environmental testing | TẤT CẢ outdoor | Method 501-512 minimum |
| MIL-STD-461G | EMC | P03, P09, P12, P14, P15 | CE102, RE102, CS114, RS103 |
| MIL-STD-882E | System safety | P02, P03, P06 | Hazard analysis required |
| MIL-STD-1472 | Human factors | TẤT CẢ operator-facing | Critical for simulators |
| MIL-HDBK-217F | Reliability prediction | P03, P09, P12 | MTBF calculation |
| STANAG 4586 | UAV interoperability | P09, P10, P11 | Data link protocol |
| STANAG 2324 | Grenade safety | P06 | Training munition |
| VDI 2221 | Design methodology | TẤT CẢ | Process standard |
| VDI 2225 | Concept evaluation | TẤT CẢ khi chọn concept | Weighted scoring |
| IPC-A-610 | Electronics assembly | P03, P12, P14, P15 | Workmanship standard |
| IP65/67/68 | Ingress protection | Per product requirement | Environmental sealing |
| TCVN | Vietnam standards | TẤT CẢ | National requirements |

### 4.2 Test Requirements Quick Reference

| Điều kiện | Method | Thông số | Products |
|-----------|--------|----------|----------|
| Nhiệt độ cao | 501.7 | +55°C, 7 ngày | ALL |
| Nhiệt độ thấp | 502.7 | -10°C (tropic), 7 ngày | ALL |
| Shock | 503.7 | 40g, 11ms half-sine | P02, P03, P12 |
| Rung | 514.8 | Cat 24 (truck), Cat 8 (helicopter) | P02, P03, P09 |
| Mưa | 506.6 | Procedure I | ALL outdoor |
| Bụi | 510.7 | Procedure I & II | ALL outdoor |
| Muối sương | 509.7 | 48hr minimum | P04, P05, P12 naval |
| Độ ẩm | 507.6 | 95% RH, 10 cycles | ALL |

---

## 5. PRODUCTION CAPABILITIES — VKTHQ

### 5.1 Manufacturing Resources

| Năng lực | Thiết bị | Khả năng | Hạn chế |
|----------|----------|----------|---------|
| CNC milling | 3-axis Haas | ±0.05mm, Al/Steel | Không có 5-axis |
| CNC turning | Doosan Lynx | Ø300mm max | Standard turning only |
| Welding | TIG/MIG | SS, Al, Steel | Không có laser welding |
| Sheet metal | CNC brake, laser cut | t≤6mm steel, ≤10mm Al | Không có hydroforming |
| Electronics | SMT line (basic) | 0402 components | Không có BGA rework |
| PCB assembly | Manual + reflow | 2-sided, up to 6-layer | Outsource >6 layer |
| 3D printing | FDM (ABS/PETG) | Prototype only | Không có metal AM |
| Surface treatment | Anodize, powder coat | Standard colors | Không có hard anodize |
| Testing | Environmental chamber | -40 to +85°C, humidity | Không có vibration table |
| Assembly | Clean room (basic) | ISO 8 equivalent | Không có ISO 5 |

### 5.2 Supply Chain Constraints

**Locally available (<2 weeks)**:
- Steel, aluminum (6061, 5083), stainless
- Standard fasteners (metric)
- Basic electronic components (R, C, connectors)
- Cables, wire harnesses

**Regional sourcing (2-6 weeks)**:
- NVIDIA Jetson modules (Singapore/China)
- CMOS/thermal sensors (China/Korea)
- Brushless motors, servo drives
- Li-ion batteries (China)
- PCB fabrication (4-6 layer, China)

**International sourcing (6-12 weeks)**:
- FPGA/specialty ICs
- Precision optics (Germany/Japan)
- Mil-spec connectors (US/EU)
- Specialty materials (titanium, ceramics)
- Calibration equipment

---

## 6. MISTAKES LEARNED — "Lỗi đã mắc, cách sửa"

> **Update rule**: Sau MỖI design review phát hiện lỗi

### 6.1 Design Methodology Mistakes

```
[2026-01] [LOMAH] [Embodiment]
LỖI: Tối ưu accuracy trước khi giải quyết setup time
→ NGUYÊN NHÂN GỐC: Tối ưu L12 (parameter) thay vì L3 (goal)
→ PHÒNG TRÁNH: Luôn chạy ODI opportunity analysis TRƯỚC khi tối ưu
   Setup time có opportunity score 13.2 — cao nhất — nhưng team focus vào accuracy (10.0)

[2026-01] [TD-1300] [Conceptual]
LỖI: Focus tăng flight endurance thay vì giảm deployment time
→ NGUYÊN NHÂN GỐC: Goal fixation — team nghĩ "drone = bay lâu" mà không hỏi user
→ PHÒNG TRÁNH: LUÔN bắt đầu bằng "What job is the user trying to get done?"
   User cần "persistent surveillance ASAP" → deployment time là constraint

[2026-01] [V-SMASH] [Conceptual]
LỖI: Ban đầu thiếu Problem Abstraction step → concept space bị hẹp
→ NGUYÊN NHÂN GỐC: Skip bước 6.2 Pahl & Beitz (5-step abstraction)
→ PHÒNG TRÁNH: PHẢI chạy 5-step abstraction trước khi mở morphological matrix
```

### 6.2 AI-Specific Mistakes

```
[2026-01] [General]
LỖI: AI generate requirements list nhưng mix Demands với Wishes sai
→ NGUYÊN NHÂN GỐC: AI thiếu context về "Demand = must have, Wish = nice to have"
→ PHÒNG TRÁNH: Luôn provide P&B §5.2 definition trong prompt
   D = failure to meet → system rejected. W = desirable but negotiable.

[2026-01] [General]
LỖI: AI đề xuất tolerance quá tight cho CNC 3-axis
→ NGUYÊN NHÂN GỐC: AI không biết production capability thực tế VKTHQ
→ PHÒNG TRÁNH: Luôn reference Section 5 (Production Capabilities) khi làm detail design

[2026-02] [V-SMASH] [Evaluation]
LỖI: VDI 2225 weights ban đầu là arbitrary, không dùng AHP
→ NGUYÊN NHÂN GỐC: Skip AHP pairwise comparison step
→ PHÒNG TRÁNH: LUÔN derive weights bằng AHP. Check consistency ratio CR<0.10
```

### 6.3 Defense-Specific Mistakes

```
[2026-01] [General]
LỖI: Thiết kế cho điều kiện phòng lab, fail khi test MIL-STD-810
→ NGUYÊN NHÂN GỐC: Chưa integrate environmental requirements từ đầu
→ PHÒNG TRÁNH: Environmental requirements là DEMANDS, đưa vào requirements list Phase 1

[2026-01] [RCWS] [Embodiment]
LỖI: Single-source sensor gây risk supply chain
→ NGUYÊN NHÂN GỐC: Chọn sensor "tốt nhất" mà không xét sourcing alternatives
→ PHÒNG TRÁNH: 2nd source identification là DEMAND cho mọi critical component
```

---

## 7. CONSTRAINTS LOG — "Ràng buộc hệ thống"

### 7.1 Current System Constraint (TOC)

```
╔══════════════════════════════════════════════════════════════╗
║ CURRENT SYSTEM CONSTRAINT (as of 2026-02-09):                ║
║                                                              ║
║ >>> VALIDATION CAPACITY <<<                                  ║
║                                                              ║
║ Validation (testing + review) chiếm ~40% timeline dự án     ║
║ nhưng có capacity giới hạn:                                  ║
║ - 1 environmental chamber                                    ║
║ - Không có vibration table (phải thuê ngoài)                ║
║ - 2-3 người qualified cho design review                      ║
║ - Field test phụ thuộc lịch đơn vị quân đội                 ║
║                                                              ║
║ EXPLOIT: Front-load testing, surrogate tests,                ║
║          simulation-before-hardware                          ║
║ SUBORDINATE: Design decisions serve test efficiency          ║
║ ELEVATE: Invest in vibration table, train reviewers          ║
╚══════════════════════════════════════════════════════════════╝
```

### 7.2 Budget Constraints

| Sản phẩm | Development budget | Unit cost target | Production vol/year |
|----------|-------------------|------------------|---------------------|
| RCWS-12.7 | ~$200K | <$15,000 | 20-50 |
| LOMAH | ~$100K | <$10,000 | 30-100 |
| TD-1300 | ~$150K | <$20,000 | 10-30 |
| V-SMASH LITE | ~$50K | <$3,000 | 100-500 |
| T-UAV | ~$100K | <$5,000/sortie | 50-200 |

### 7.3 Timeline Hard Stops

| Milestone | Date | Product | Impact |
|-----------|------|---------|--------|
| V-SMASH LITE PDR | TBD | V-SMASH | Phase 1 gate |
| LOMAH field trial | TBD | LOMAH | Customer demo |
| TD-1300 prototype | TBD | TD-1300 | Investor review |

---

## 8. EVALUATION TEMPLATES

### 8.1 VDI 2225 Standard Criteria (Defense Products)

| # | Tiêu chí | Typical Weight | Notes |
|---|----------|----------------|-------|
| C1 | Technical performance | 15-25% | Derived from requirements D-list |
| C2 | Reliability (MTBF) | 10-15% | MIL-HDBK-217F prediction |
| C3 | Environmental robustness | 10-15% | MIL-STD-810 coverage |
| C4 | Manufacturing feasibility | 10-15% | Match VKTHQ capability |
| C5 | Unit cost | 10-20% | Must meet cost target |
| C6 | Development risk | 5-10% | TRL assessment |
| C7 | Local content ratio | 5-10% | >60% target |
| C8 | Maintenance ease | 5-10% | Field repair capability |
| C9 | Safety | 5-10% | MIL-STD-882E compliance |
| C10 | Growth potential | 5-10% | Future variants, export |

**Quy tắc**:
- LUÔN derive weights bằng AHP pairwise comparison. CR<0.10 bắt buộc
- Scoring: 0 = không đạt (loại), 1-4 scale per VDI 2225 guideline
- Threshold: Concept phải đạt ≥70% tổng điểm VÀ không có tiêu chí nào = 0

### 8.2 DfX Checklist (Quick Reference)

| DfX | Key Questions | Apply to |
|-----|---------------|----------|
| DfM | Có thể gia công trên thiết bị VKTHQ? Tolerance có reasonable? | ALL |
| DfA | Lắp ráp bao nhiêu bước? Cần tool đặc biệt? | ALL |
| DfR | MTBF target? Single point failures? Derating applied? | P03, P09, P12 |
| DfT | Test points accessible? Built-in test capability? | ALL electronics |
| DfC | Unit cost trong target? BOM costed? | ALL |
| DfE | Tropical conditions considered? Salt fog? Humidity? | ALL outdoor |

---

## 9. DESIGN PATTERNS — "Giải pháp đã chứng minh"

### 9.1 Proven Patterns (dùng lại)

**PATTERN: Ruggedized Electronics Enclosure**
- USED IN: LOMAH, V-SMASH, RCWS control box
- WHAT: Al6061 CNC housing + silicone gasket + IP67 connectors + conformal coat PCB
- WHY WORKS: Passes MIL-STD-810 temp/humidity/rain, producible at VKTHQ
- CAUTION: Thermal management — add thermal pad to compute module, verify with sim

**PATTERN: Modular Sensor Head**
- USED IN: V-SMASH family, RCWS
- WHAT: Camera + optional thermal + IMU on common mount, Picatinny interface
- WHY WORKS: Allows variant creation (LITE/PRO/PRO-X) by swapping sensor modules
- CAUTION: Boresight alignment critical — factory calibration mandatory

**PATTERN: Power Tether System**
- USED IN: TD-1300
- WHAT: 48V DC over lightweight cable + fiber optic data
- WHY WORKS: Unlimited endurance, high bandwidth video, no RF interference
- CAUTION: Cable weight limits altitude, wind loading on cable significant

**PATTERN: Acoustic Array Configuration**
- USED IN: LOMAH
- WHAT: 4+ microphone array with precisely known geometry + GPS timing
- WHY WORKS: Time-difference-of-arrival calculation for supersonic projectile position
- CAUTION: Deployment geometry accuracy is critical — quick-deploy jig needed

### 9.2 Anti-Patterns (tránh)

**ANTI-PATTERN: "Kitchen Sink" Feature Creep**
- SEEN IN: Early LOMAH design, V-SMASH initial scope
- WHAT: Adding features to match competitor spec without ODI validation
- WHY FAILS: Increases complexity, cost, timeline — often for features users don't value
- FIX: ODI opportunity scoring — only build for underserved outcomes with high importance

**ANTI-PATTERN: "Foreign Copy" Without Abstraction**
- WHAT: Directly copying foreign product design without understanding essential problem
- WHY FAILS: Imports their constraints (different production, different conditions)
- FIX: Abstract foreign product to function level → rebuild for Vietnamese context

**ANTI-PATTERN: "Accuracy Theater"**
- WHAT: Specifying ±0.01mm tolerance when ±0.1mm is functionally adequate
- WHY FAILS: 10x cost increase, production delays, quality escapes
- FIX: Tolerance analysis — specify what function REQUIRES, not what sounds impressive

---

## 10. METHODOLOGY QUICK REFERENCE

### 10.1 D-M-I-R Unified Model

D-M-I-R synthesizes **four theoretical traditions**:
- **DST (Systems Thinking)**: Conceptual map, archetypes, boundaries
- **SD (System Dynamics)**: Quantify stocks, flows, feedback loops
- **TOC (Theory of Constraints)**: Focus on the weakest link
- **ML (Meta-Learning)**: Learning how to learn, questioning paradigms

**Core Innovation**: 95% of conventional change efforts target low-leverage parameters (L12). D-M-I-R systematically identifies and exploits high-leverage points (L1-L10).

### 10.2 The Four Phases

```
┌─────────────────────────────────────────────────────────────────┐
│                    D-M-I-R CYCLE                                │
│                                                                 │
│   DIAGNOSIS ──▶ MODELING ──▶ INTERVENTION ──▶ REFLECTION       │
│       │                                            │            │
│       └────────────── NEXT CYCLE ◀─────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

**DIAGNOSIS (10 min)** — "What is the system?"
- Define boundaries (what's in, what's out)
- Identify elements, interconnections, purpose
- Recognize system archetypes
- Create Causal Loop Diagram (CLD)

**MODELING (20-40 min)** — "How does it work?"
- Convert CLD to stock-flow structure
- Map feedback loops (R = reinforcing, B = balancing)
- Identify constraint using TOC Step 1
- Predict behavior

**INTERVENTION (30-60 min)** — "What should we change?"
- TOC 5 Focusing Steps: Identify → Exploit → Subordinate → Elevate → Repeat
- Target high-leverage points (L1-L10, not L12)
- Design phased approach

**REFLECTION (10 min)** — "What did we learn?"
- Outcome: Did it work as predicted?
- Process: Was our model accurate?
- Paradigm: Are we solving the right problem?
- Update Section 6 (Mistakes Learned)

### 10.3 Leverage Points Hierarchy (Meadows)

| Level | Type | Example | Impact |
|-------|------|---------|--------|
| L1 | Transcending paradigms | Ability to change mental models | Highest |
| L2 | Paradigms | "Cost minimization" vs "Value creation" | |
| L3 | Goals | What system optimizes for | |
| L4 | Self-organization | System's ability to restructure | |
| L5 | Rules | Policies, incentives, constraints | |
| L6 | Information flows | Who knows what, when | |
| L7 | Reinforcing loops | Growth engines, virtuous cycles | |
| L8 | Balancing loops | Goals, negative feedback | |
| L9 | Delays | Feedback timing, lead times | |
| L10 | Physical structure | Layout, org chart, connections | |
| L11 | Buffer sizes | Inventory, reserves | |
| L12 | Parameters | Numbers, budgets | Lowest |

**Key Insight**: Most effort goes to L12 → least leverage. D-M-I-R targets L1-L10.

### 10.4 The Upward Spiral

Each D-M-I-R cycle should target **progressively higher leverage points**:

| Cycle | Focus | Expected ROI |
|-------|-------|--------------|
| 1 | Fix broken physical flows (L10) via TOC | 2-5x |
| 2 | Redesign information (L6) + feedback (L7-L8) | 5-10x |
| 3 | Revise rules/incentives (L5) | 10-20x |
| 4 | Clarify/change goals (L3) | 20-50x |
| 5+ | Question paradigms (L2) | Unbounded |

### 10.5 System Archetypes (Quick Reference)

| Archetype | Pattern | High-Leverage Fix |
|-----------|---------|-------------------|
| Fixes That Fail | Quick fix → delayed side effect | Address root cause (L6) |
| Shifting Burden | Symptomatic solution → dependency | Strengthen fundamental (L5) |
| Eroding Goals | Miss target → lower standard | Anchor standards (L3) |
| Escalation | A acts → B reacts → A escalates | Break loop, negotiate (L5) |
| Success to Successful | Winner gets more | Rebalance resources (L5) |
| Growth & Underinvestment | Growth → strain → collapse | Invest in capacity (L10) |

### 10.6 TOC 5 Focusing Steps

1. **IDENTIFY** the constraint (bottleneck)
2. **EXPLOIT** the constraint (maximize its utilization)
3. **SUBORDINATE** everything else (non-constraints serve constraint)
4. **ELEVATE** the constraint (add capacity if still bottleneck)
5. **REPEAT** (constraint will shift — go back to Step 1)

### 10.7 Pahl & Beitz Phase Checklist

**Task Clarification DONE when:**
- [ ] Requirements list complete (D/W classified, all P&B categories)
- [ ] 5-step abstraction performed → Essential Problem Statement
- [ ] Stakeholders validated requirements
- [ ] Standards identified and mapped

**Conceptual Design DONE when:**
- [ ] Function structure at appropriate decomposition level
- [ ] Morphological matrix with ≥3 solutions per sub-function
- [ ] ≥3 concept variants composed
- [ ] VDI 2225 evaluation with AHP weights (CR<0.10)
- [ ] Sensitivity analysis shows robust winner
- [ ] Concept selection documented with rationale

**Embodiment Design DONE when:**
- [ ] Preliminary layout meets all Demands
- [ ] DfX analysis completed (DfM, DfA, DfR, DfT, DfC)
- [ ] Material selection justified
- [ ] Cost estimate within target
- [ ] MIL-STD compliance verified
- [ ] Definitive layout frozen

**Detail Design DONE when:**
- [ ] Production drawings complete
- [ ] BOM finalized and costed
- [ ] Assembly instructions written
- [ ] Test procedures documented
- [ ] Production team approved feasibility

### 10.8 D-M-I-R Per-Session Checklist

```
□ DIAGNOSIS (10 min)
  ├─ What's the system? Boundaries?
  ├─ What archetype is operating?
  ├─ What leverage level are we at?
  └─ Output: CLD or problem statement

□ MODELING (20-40 min)
  ├─ What are stocks and flows?
  ├─ Which feedback loops dominate?
  ├─ What's the constraint?
  └─ Output: Analysis/model

□ INTERVENTION (30-60 min)
  ├─ What leverage point to target?
  ├─ What specific action?
  ├─ What resistance expected?
  └─ Output: Deliverable/artifact

□ REFLECTION (10 min)
  ├─ What worked? What didn't?
  ├─ Update Section 6?
  └─ What's next cycle focus?
```

---

## 11. CHANGE LOG

| Date | Section | Change | Reason |
|------|---------|--------|--------|
| 2026-02-09 | ALL | Initial creation | Establish persistent context system |

---

## HOW TO UPDATE THIS FILE

1. **After every design review** → update Section 6 (Mistakes Learned)
2. **After every constraint change** → update Section 7 (Constraints Log)
3. **After every successful pattern** → update Section 9 (Design Patterns)
4. **After every product phase change** → update Section 2 (Portfolio Overview)
5. **Weekly**: review and consolidate updates

---

**THE COMPOUND EFFECT**: Mỗi tuần cập nhật, hệ thống thông minh hơn.
- After 3 months → AI sessions have context of 12+ review cycles
- After 6 months → patterns emerge that no individual remembers
- After 1 year → institutional knowledge that survives team changes
