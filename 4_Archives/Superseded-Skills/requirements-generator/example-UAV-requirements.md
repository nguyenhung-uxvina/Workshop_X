# REQUIREMENTS LIST - VÍ DỤ HOÀN CHỈNH
## UAV TRINH SÁT TẦM TRUNG (MEDIUM-RANGE RECONNAISSANCE UAV)

╔════════════════════════════════════════════════════════════════════════════╗
║                     DANH SÁCH YÊU CẦU THIẾT KẾ                             ║
║              UAV TRINH SÁT TẦM TRUNG - DỰ ÁN PHOENIX-01                    ║
╠════════════════════════════════════════════════════════════════════════════╣
║ Dự án: PHOENIX-01                      Ngày: 19/10/2025                    ║
║ Người soạn: Senior Design Engineer     Phiên bản: v2.1                     ║
║ Khách hàng: Bộ Tư Lệnh Quân Khu        Phê duyệt: Trưởng Ban Kỹ Thuật    ║
╚════════════════════════════════════════════════════════════════════════════╝

## TỔNG QUAN DỰ ÁN

**Mission Statement:**
Thiết kế và chế tạo UAV trinh sát tầm trung dùng cho giám sát biên giới, hỗ trợ 
tác chiến bộ binh, và tình báo chiến thuật trong điều kiện địa hình phức tạp 
(rừng núi, ven biển, đô thị) với khả năng triển khai nhanh và chi phí tối ưu.

**Operational Context:**
- Địa hình: Đa dạng (núi cao 70%, ven biển 20%, đô thị 10%)
- Khí hậu: Nhiệt đới gió mùa, nhiệt độ -10°C đến +45°C, độ ẩm 40-95%
- Thời gian nhiệm vụ: 4-8 giờ/sortie, 2-3 sorties/ngày
- Độ cao hoạt động: 500m - 5,000m AGL
- Người vận hành: 2-3 người (pilot, payload operator, mission commander)

**Strategic Priorities:**
1. Stealth & Low Observability (Độ ưu tiên: CAO)
2. Extended Endurance (Độ ưu tiên: CAO)  
3. Payload Flexibility (Độ ưu tiên: TRUNG BÌNH)
4. Cost-Effectiveness (Độ ưu tiên: CAO)
5. Rapid Deployment (Độ ưu tiên: TRUNG BÌNH)

---

## BẢNG YÊU CẦU CHI TIẾT

### 1. GEOMETRY / KINEMATICS (HÌNH HỌC & CHUYỂN ĐỘNG)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ ID  │ Requirement Description                │ D/W  │ Specifications & Criteria    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.1 │ Kích thước tổng thể (stowed)          │  D   │ L×W×H ≤ 2.8m × 0.8m × 0.6m   │
│     │ Lý do: Vận chuyển bằng xe tải         │      │ Verification: Physical meas. │
│     │ quân sự tiêu chuẩn                     │      │ Test: Pre-production review  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.2 │ Sải cánh (wingspan) khi triển khai     │  D   │ 4.5m ± 0.1m                  │
│     │ Lý do: Tối ưu giữa lift và stealth    │      │ Tolerances: ±2%              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.3 │ Khả năng gấp cánh (wing folding)      │  D   │ Thời gian gấp/mở ≤ 3 phút    │
│     │ Lý do: Triển khai nhanh, ẩn nấp       │      │ Không cần dụng cụ chuyên dụng│
│     │                                        │      │ Test: Field trial x10 cycles │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.4 │ Tốc độ bay tuần tra (cruise speed)    │  D   │ 80-120 km/h                  │
│     │ Lý do: Cân bằng endurance & coverage  │      │ @ 3,000m altitude            │
│     │                                        │      │ Verification: Flight test    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.5 │ Tốc độ tối đa (max speed)             │  W   │ ≥ 150 km/h (mong muốn >180)  │
│     │ Lý do: Thoát khỏi vùng nguy hiểm      │      │ @ sea level                  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.6 │ Khả năng leo cao (rate of climb)      │  D   │ ≥ 5 m/s @ max takeoff weight │
│     │ Lý do: Nhanh chóng đạt độ cao an toàn │      │ Verification: Flight test    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.7 │ Bán kính quay vòng (turn radius)      │  W   │ ≤ 150m @ cruise speed        │
│     │ Lý do: Maneuverability trong núi      │      │ Bank angle ≤ 45°             │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.8 │ Khả năng cất cánh (takeoff method)    │  D   │ Catapult launch OR           │
│     │ Lý do: Không cần runway               │      │ Hand launch OR               │
│     │                                        │      │ Pneumatic launcher           │
│     │                                        │      │ Max launch force: 50G        │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 1.9 │ Khả năng hạ cánh (landing method)     │  D   │ Parachute recovery OR        │
│     │ Lý do: Không cần runway               │      │ Belly landing on skids       │
│     │                                        │      │ Survivability: 95%           │
│     │                                        │      │ Damage: Repairable in field  │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 2. FORCES / LOADS (LỰC & TẢI TRỌNG)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 2.1 │ Trọng lượng cất cánh tối đa (MTOW)    │  D   │ ≤ 25 kg                      │
│     │ Lý do: Man-portable by 2 soldiers     │      │ Includes fuel + payload      │
│     │                                        │      │ Verification: Weigh scale    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.2 │ Trọng lượng rỗng (empty weight)       │  W   │ ≤ 15 kg (mong muốn <12kg)    │
│     │ Lý do: Maximize payload fraction      │      │ Excluding battery & payload  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.3 │ Payload capacity (trọng lượng hữu ích)│  D   │ ≥ 3 kg                       │
│     │ Lý do: Camera + sensors + comms       │      │ @ full endurance (4h flight) │
│     │                                        │      │ @ range 50km                 │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.4 │ Load factor (hệ số tải trọng)         │  D   │ +4G / -2G                    │
│     │ Lý do: Maneuvers & gusts              │      │ @ max gross weight           │
│     │                                        │      │ Test: Structural test        │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.5 │ Wind resistance (chống gió)           │  D   │ Operable in wind ≤ 15 m/s    │
│     │ Lý do: Tropical storms common         │      │ (54 km/h sustained)          │
│     │                                        │      │ Gusts: ≤ 20 m/s              │
│     │                                        │      │ Test: Wind tunnel + flight   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.6 │ Impact resistance (chống va đập)      │  D   │ Landing impact: 5G vertical  │
│     │ Lý do: Rough terrain landing          │      │ @ 3 m/s descent rate         │
│     │                                        │      │ Test: Drop test              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 2.7 │ Vibration resistance                   │  D   │ MIL-STD-810H Method 514.8    │
│     │ Lý do: Propeller & engine vibration   │      │ Category 4 (Aircraft)        │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 3. ENERGY / POWER (NĂNG LƯỢNG & CÔNG SUẤT)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 3.1 │ Endurance (thời gian bay)             │  D   │ ≥ 4 hours @ cruise           │
│     │ Lý do: Mission requirement            │      │ @ sea level, 25°C, no wind   │
│     │                                        │      │ With full payload            │
│     │                                        │      │ Verification: Flight test    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.2 │ Extended endurance (mong muốn)        │  W   │ ≥ 6 hours (optimal: 8h)      │
│     │ Lý do: Long-range reconnaissance      │      │ With reduced payload         │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.3 │ Power source (nguồn năng lượng)       │  D   │ Electric (Li-Po or Li-Ion)   │
│     │ Lý do: Quiet, low IR signature        │      │ Swappable battery packs      │
│     │                                        │      │ Charging time ≤ 2 hours      │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.4 │ Propulsion power (công suất động cơ)  │  D   │ 500-800W continuous          │
│     │ Lý do: Sufficient for climb & cruise  │      │ Peak: 1200W for 30 sec       │
│     │                                        │      │ Efficiency: >80% @ cruise    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.5 │ Avionics power budget                 │  D   │ ≤ 50W total                  │
│     │ Lý do: Energy conservation            │      │ Flight control: 10W          │
│     │                                        │      │ Comms: 15W                   │
│     │                                        │      │ Payload: 25W                 │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.6 │ Battery safety                        │  D   │ No fire/explosion risk       │
│     │ Lý do: Lithium battery dangers        │      │ Per UN 38.3 transport        │
│     │                                        │      │ BMS with thermal protection  │
│     │                                        │      │ Crash-worthy packaging       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 3.7 │ Solar charging capability (optional)   │  W   │ Solar panels on wings        │
│     │ Lý do: Extended missions              │      │ +20% endurance in good sun   │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 4. MATERIAL / MANUFACTURING (VẬT LIỆU & SẢN XUẤT)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 4.1 │ Airframe material (vật liệu thân)     │  D   │ Carbon fiber composite OR    │
│     │ Lý do: Strength-to-weight ratio       │      │ Glass fiber composite        │
│     │                                        │      │ Epoxy resin matrix           │
│     │                                        │      │ Fiber volume: 50-60%         │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.2 │ UV resistance (chống tia UV)          │  D   │ No degradation after         │
│     │ Lý do: Tropical sun exposure          │      │ 1000h UV exposure            │
│     │                                        │      │ Per ASTM G154                │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.3 │ Corrosion resistance (chống ăn mòn)   │  D   │ No corrosion in saltwater    │
│     │ Lý do: Coastal operations             │      │ spray environment            │
│     │                                        │      │ Per MIL-STD-810H Method 509  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.4 │ Manufacturing method                   │  D   │ Hand layup + autoclave cure  │
│     │ Lý do: Small series production        │      │ OR vacuum bagging            │
│     │                                        │      │ OR RTM (Resin Transfer)      │
│     │                                        │      │ Lead time: ≤ 4 weeks/unit    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.5 │ Material sourcing (nguồn vật liệu)    │  W   │ Domestic sources preferred   │
│     │ Lý do: Supply chain security          │      │ <50% imported components     │
│     │                                        │      │ Dual suppliers for critical  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.6 │ Radar signature (đặc tính radar)      │  W   │ RCS < 0.01 m² @ X-band       │
│     │ Lý do: Low observability             │      │ RAM coating on nose & edges  │
│     │                                        │      │ (Radar Absorbing Material)   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 4.7 │ Acoustic signature (tiếng ồn)         │  D   │ ≤ 60 dB(A) @ 100m altitude   │
│     │ Lý do: Stealth operations             │      │ Quiet electric propulsion    │
│     │                                        │      │ Verification: Sound test     │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 5. SIGNALS / CONTROL (TÍN HIỆU & ĐIỀU KHIỂN)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 5.1 │ Communication range (tầm liên lạc)    │  D   │ ≥ 50 km line-of-sight        │
│     │ Lý do: Mission requirement            │      │ C-band datalink              │
│     │                                        │      │ With ground relay: 100km     │
│     │                                        │      │ Verification: Range test     │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.2 │ Datalink bandwidth (băng thông)       │  D   │ ≥ 2 Mbps downlink            │
│     │ Lý do: HD video streaming             │      │ ≥ 100 kbps uplink            │
│     │                                        │      │ Latency ≤ 200ms              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.3 │ Encryption (mã hóa)                   │  D   │ AES-256 minimum              │
│     │ Lý do: Secure military comms          │      │ Frequency hopping            │
│     │                                        │      │ Anti-jamming capability      │
│     │                                        │      │ Per FIPS 140-3 Level 2       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.4 │ Autonomous flight capability          │  D   │ Waypoint navigation          │
│     │ Lý do: Reduced operator workload      │      │ Auto takeoff/landing         │
│     │                                        │      │ Lost-link return-to-home     │
│     │                                        │      │ Geo-fencing                  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.5 │ GPS denied operation                  │  W   │ Inertial navigation backup   │
│     │ Lý do: GPS jamming threat             │      │ Visual odometry OR           │
│     │                                        │      │ Terrain-aided navigation     │
│     │                                        │      │ Drift ≤ 1% distance traveled │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.6 │ Payload control interface             │  D   │ STANAG 4586 compatible       │
│     │ Lý do: Interoperability              │      │ OR MAVLink protocol          │
│     │                                        │      │ Gimbal control: 3-axis       │
│     │                                        │      │ Stabilization ±0.05°         │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.7 │ Flight control redundancy             │  D   │ Dual flight computers        │
│     │ Lý do: Mission-critical system        │      │ Hot standby OR voting        │
│     │                                        │      │ MTBF ≥ 10,000 hours          │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 5.8 │ EMI/EMC compliance                    │  D   │ MIL-STD-461G                 │
│     │ Lý do: Electronic warfare env         │      │ CE102, CE106 (emissions)     │
│     │                                        │      │ CS114, CS116 (susceptibility)│
│     │                                        │      │ RS103 (radiated suscept)     │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 6. SAFETY / SURVIVABILITY (AN TOÀN & KHẢ NĂNG SỐNG SÓT)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 6.1 │ System safety (an toàn hệ thống)      │  D   │ Compliant with MIL-STD-882E  │
│     │ Lý do: Legal & operational req        │      │ System Safety Program        │
│     │                                        │      │ Hazard Analysis (PHA, SSHA)  │
│     │                                        │      │ Mishap risk: Low or Medium   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.2 │ Fail-safe design                      │  D   │ Loss of signal → RTH         │
│     │ Lý do: Prevent crashes               │      │ Low battery → Auto land      │
│     │                                        │      │ Sensor failure → Safe mode   │
│     │                                        │      │ Engine failure → Glide land  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.3 │ Flight termination system             │  D   │ Remote kill switch           │
│     │ Lý do: Emergency abort                │      │ Parachute deployment         │
│     │                                        │      │ Activate in ≤ 2 seconds      │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.4 │ Explosive atmosphere protection       │  D   │ Sealed electronics           │
│     │ Lý do: Fuel depot operations          │      │ Non-sparking materials       │
│     │                                        │      │ IP65 rating minimum          │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.5 │ Lightning protection                   │  W   │ Static discharge paths       │
│     │ Lý do: Tropical thunderstorms         │      │ Per MIL-STD-464C             │
│     │                                        │      │ (mong muốn, không bắt buộc)  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.6 │ Zeroize capability (xóa dữ liệu)      │  D   │ Crypto keys zeroized on:     │
│     │ Lý do: Prevent intel compromise       │      │ - Capture threat             │
│     │                                        │      │ - Command from GCS           │
│     │                                        │      │ - Tamper detection           │
│     │                                        │      │ Execution time ≤ 5 seconds   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.7 │ Ballistic tolerance                   │  W   │ Continues flight after:      │
│     │ Lý do: Hostile fire                   │      │ - Multiple 7.62mm hits (body)│
│     │                                        │      │ - One 12.7mm hit (non-vital) │
│     │                                        │      │ Critical components armored  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 6.8 │ Cyber security                        │  D   │ IEC 62443-4-2 SL-2           │
│     │ Lý do: Network attack prevention      │      │ Secure boot, signed firmware │
│     │                                        │      │ Intrusion detection system   │
│     │                                        │      │ No default passwords         │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 7. ERGONOMICS / HUMAN FACTORS (CÔNG THÁI HỌC)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 7.1 │ Operator training time                │  D   │ ≤ 2 weeks for pilot          │
│     │ Lý do: Rapid deployment               │      │ ≤ 1 week for payload op      │
│     │                                        │      │ Using simulator              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 7.2 │ Ground Control Station (GCS)          │  D   │ Man-portable ruggedized PC   │
│     │ Lý do: Field operations               │      │ IP54 rating                  │
│     │                                        │      │ Sunlight-readable display    │
│     │                                        │      │ 1000 nits brightness         │
│     │                                        │      │ MIL-STD-810H compliant       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 7.3 │ User interface complexity             │  D   │ Touch screen + physical btns │
│     │ Lý do: Ease of use                    │      │ Max 3 levels deep in menus   │
│     │                                        │      │ Critical functions 1-touch   │
│     │                                        │      │ Bilingual: Vietnamese/English│
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 7.4 │ Physical setup time (from vehicle)    │  D   │ ≤ 15 minutes (2 operators)   │
│     │ Lý do: Rapid response                 │      │ To mission-ready state       │
│     │                                        │      │ Including GCS setup          │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 7.5 │ Operator fatigue mitigation           │  W   │ Automated flight modes       │
│     │ Lý do: Long missions                  │      │ Orbit/Follow/Survey patterns │
│     │                                        │      │ Audio alerts for critical    │
│     │                                        │      │ (mong muốn giảm workload)    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 7.6 │ Documentation language                │  D   │ Vietnamese primary           │
│     │ Lý do: User base                      │      │ English secondary            │
│     │                                        │      │ Tech manual ≤ 200 pages      │
│     │                                        │      │ Quick start guide ≤ 10 pages │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 8. PRODUCTION / QUALITY (SẢN XUẤT & CHẤT LƯỢNG)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 8.1 │ Production volume (sản lượng)         │  D   │ Phase 1: 10 units (prototype)│
│     │ Lý do: Phased procurement             │      │ Phase 2: 50 units (series)   │
│     │                                        │      │ Phase 3: 200+ units (full)   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 8.2 │ Quality management system             │  D   │ ISO 9001:2015 certified      │
│     │ Lý do: Reliability                    │      │ AS9100D (aerospace std)      │
│     │                                        │      │ Full traceability            │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 8.3 │ Manufacturing location                │  W   │ Domestic production preferred│
│     │ Lý do: Technology transfer            │      │ Joint venture acceptable     │
│     │                                        │      │ Licensed production OK       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 8.4 │ Component commonality                 │  W   │ ≥70% parts shared with       │
│     │ Lý do: Reduce logistics cost          │      │ existing UAV fleet           │
│     │                                        │      │ COTS components preferred    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 8.5 │ Defect rate (tỷ lệ lỗi)              │  D   │ ≤ 2% DOA (Dead On Arrival)   │
│     │ Lý do: Mission readiness              │      │ ≤ 5% first year failures     │
│     │                                        │      │ Warranty: 2 years            │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 8.6 │ Testing requirements                  │  D   │ 100% functional test         │
│     │ Lý do: Mission-critical               │      │ 10% flight test (sample)     │
│     │                                        │      │ Environmental qual per       │
│     │                                        │      │ MIL-STD-810H (1 unit/lot)    │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 9. ASSEMBLY / TRANSPORT (LẮP RÁP & VẬN CHUYỂN)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│ 9.1 │ Assembly time (from components)       │  D   │ ≤ 4 hours (skilled tech)     │
│     │ Lý do: Production efficiency          │      │ Using standard tools         │
│     │                                        │      │ Detailed work instructions   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 9.2 │ Disassembly for maintenance           │  D   │ Modular design               │
│     │ Lý do: Field repair                   │      │ Major modules: 6-8 units     │
│     │                                        │      │ No special tools required    │
│     │                                        │      │ Keyed connectors (no error)  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 9.3 │ Transport packaging                   │  D   │ Reusable transit case        │
│     │ Lý do: Protect during shipping        │      │ Shock: 3G sustained          │
│     │                                        │      │ Water resistant: IP65        │
│     │                                        │      │ 2 UAVs per case              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 9.4 │ Transportability                      │  D   │ Air: Helicopter compatible   │
│     │ Lý do: Multi-modal deployment         │      │ Ground: Pickup truck bed     │
│     │                                        │      │ Sea: Small boat OK           │
│     │                                        │      │ Man-portable: 2 persons      │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│ 9.5 │ Hazmat classification (for battery)   │  D   │ UN 3480 (Lithium batteries)  │
│     │ Lý do: Air transport regulations      │      │ Class 9 dangerous goods      │
│     │                                        │      │ Proper labeling & docs       │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 10. OPERATION / MAINTENANCE (VẬN HÀNH & BẢO TRÌ)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│10.1 │ Mean Time Between Failures (MTBF)     │  D   │ ≥ 500 flight hours           │
│     │ Lý do: Reliability target             │      │ For critical systems         │
│     │                                        │      │ Per MIL-HDBK-217             │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.2 │ Mean Time To Repair (MTTR)            │  D   │ ≤ 1 hour (field repair)      │
│     │ Lý do: High availability              │      │ ≤ 8 hours (depot repair)     │
│     │                                        │      │ 90% of failures              │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.3 │ Maintenance intervals                 │  D   │ Pre-flight: Every flight     │
│     │ Lý do: Preventive maintenance         │      │ Phase inspection: 50h        │
│     │                                        │      │ Major overhaul: 500h         │
│     │                                        │      │ Battery replacement: 200cycle│
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.4 │ Built-In Test (BIT) capability        │  D   │ Power-on self-test (POST)    │
│     │ Lý do: Fault detection                │      │ Pre-flight automated check   │
│     │                                        │      │ In-flight health monitoring  │
│     │                                        │      │ Fault detection rate ≥95%    │
│     │                                        │      │ False alarm rate ≤5%         │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.5 │ Spare parts strategy                  │  D   │ 3-tier system:               │
│     │ Lý do: Logistics support              │      │ - Unit level (field)         │
│     │                                        │      │ - Intermediate (workshop)    │
│     │                                        │      │ - Depot level (factory)      │
│     │                                        │      │ Spares for 2 years operation │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.6 │ Maintenance personnel                 │  D   │ Field: 2 trained technicians │
│     │ Lý do: Support requirements           │      │ Depot: Electronics + Airframe│
│     │                                        │      │ specialists                  │
│     │                                        │      │ Training: 1 week (field)     │
│     │                                        │      │          2 weeks (depot)     │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.7 │ Diagnostic tools                      │  W   │ Laptop-based diagnostic SW   │
│     │ Lý do: Efficient troubleshooting      │      │ USB/CAN interface            │
│     │                                        │      │ Flight log download          │
│     │                                        │      │ Parameter tuning capability  │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│10.8 │ Life cycle (tuổi thọ)                 │  D   │ ≥ 10 years (calendar)        │
│     │ Lý do: Economic service life          │      │ ≥ 1000 flight hours          │
│     │                                        │      │ ≥ 500 flight cycles          │
│     │                                        │      │ Upgradeable avionics         │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 11. COSTS / SCHEDULE (CHI PHÍ & TIẾN ĐỘ)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│11.1 │ Unit cost (flyaway cost)              │  D   │ ≤ $50,000 USD per unit       │
│     │ Lý do: Budget constraint              │      │ @ series production (50+)    │
│     │                                        │      │ Excluding GCS & payloads     │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│11.2 │ Development cost                      │  D   │ ≤ $2M USD total              │
│     │ Lý do: Program budget                 │      │ Includes prototypes & testing│
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│11.3 │ Operating cost per flight hour        │  W   │ ≤ $100 USD/hour              │
│     │ Lý do: Lifecycle cost                 │      │ Includes fuel, maintenance,  │
│     │                                        │      │ depreciation                 │
│     │                                        │      │ Excluding personnel          │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│11.4 │ Ground Control Station cost           │  D   │ ≤ $30,000 USD per set        │
│     │ Lý do: System cost target             │      │ Controls 3 UAVs              │
│     │                                        │      │ Ruggedized PC + antennas     │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│11.5 │ Development schedule                  │  D   │ Phase 1: 12 months (proto)   │
│     │ Lý do: Operational urgency            │      │ Phase 2: 6 months (qual test)│
│     │                                        │      │ Phase 3: Production ramp-up  │
│     │                                        │      │ Total: 24 months to delivery │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│11.6 │ Payment terms                         │  D   │ 30% advance                  │
│     │ Lý do: Financial planning             │      │ 40% on prototype acceptance  │
│     │                                        │      │ 30% on final delivery        │
│     │                                        │      │ Retention: 5% for 1 year     │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

### 12. STANDARDS / REGULATIONS (TIÊU CHUẨN & QUY ĐỊNH)

┌─────┬────────────────────────────────────────┬──────┬──────────────────────────────┐
│12.1 │ Environmental standards               │  D   │ MIL-STD-810H:                │
│     │ Lý do: Military qualification         │      │ - Method 501.7 (High temp)   │
│     │                                        │      │ - Method 502.7 (Low temp)    │
│     │                                        │      │ - Method 506.6 (Rain)        │
│     │                                        │      │ - Method 509.7 (Salt fog)    │
│     │                                        │      │ - Method 514.8 (Vibration)   │
│     │                                        │      │ - Method 516.8 (Shock)       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.2 │ EMC standards                         │  D   │ MIL-STD-461G:                │
│     │ Lý do: Electromagnetic compatibility  │      │ - CE102 (Conducted emissions)│
│     │                                        │      │ - RE102 (Radiated emissions) │
│     │                                        │      │ - CS114 (Conducted suscept)  │
│     │                                        │      │ - RS103 (Radiated suscept)   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.3 │ System safety standard                │  D   │ MIL-STD-882E:                │
│     │ Lý do: Safety program requirement     │      │ - System Safety Program Plan │
│     │                                        │      │ - Hazard Analysis (PHA,SSHA) │
│     │                                        │      │ - Mishap Risk ≤ Medium       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.4 │ Lightning/HIRF protection             │  W   │ MIL-STD-464C:                │
│     │ Lý do: Aircraft electrical safety     │      │ - Lightning (mong muốn)      │
│     │                                        │      │ - HIRF (High Intensity RF)   │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.5 │ Vietnamese national standards         │  D   │ TCVN (đang xác định số)      │
│     │ Lý do: Domestic compliance            │      │ QCVN xx:2024/BQP             │
│     │                                        │      │ (Quy chuẩn Bộ Quốc Phòng)    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.6 │ NATO interoperability                 │  W   │ STANAG 4586 (mong muốn):     │
│     │ Lý do: Coalition operations           │      │ - UAV control standard       │
│     │                                        │      │ - Data link interoperability │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.7 │ Cybersecurity standards               │  D   │ IEC 62443-4-2:               │
│     │ Lý do: Network security               │      │ - Security Level 2 minimum   │
│     │                                        │      │ - Component security reqs    │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.8 │ Quality management                    │  D   │ ISO 9001:2015                │
│     │ Lý do: Production quality             │      │ AS9100D (aerospace)          │
│     │                                        │      │ Certified manufacturer       │
├─────┼────────────────────────────────────────┼──────┼──────────────────────────────┤
│12.9 │ Battery transport                     │  D   │ UN 3480 / IATA DGR           │
│     │ Lý do: Shipping compliance            │      │ Section II packaging         │
│     │                                        │      │ Proper labeling              │
└─────┴────────────────────────────────────────┴──────┴──────────────────────────────┘

---

## PHẦN PHỤ LỤC

### A. SUMMARY STATISTICS

```
TỔNG SỐ REQUIREMENTS: 94

Phân loại:
- Demands (D): 68 (72.3%)
- Wishes (W): 26 (27.7%)

Phân bố theo Category:
 1. Geometry/Kinematics:        9 requirements (6D, 3W)
 2. Forces/Loads:                7 requirements (6D, 1W)
 3. Energy/Power:                7 requirements (5D, 2W)
 4. Material/Manufacturing:      7 requirements (5D, 2W)
 5. Signals/Control:             8 requirements (6D, 2W)
 6. Safety/Survivability:        8 requirements (6D, 2W)
 7. Ergonomics/Human Factors:    6 requirements (5D, 1W)
 8. Production/Quality:          6 requirements (5D, 1W)
 9. Assembly/Transport:          5 requirements (5D, 0W)
10. Operation/Maintenance:       8 requirements (6D, 2W)
11. Costs/Schedule:              6 requirements (5D, 1W)
12. Standards/Regulations:       9 requirements (8D, 1W)

Tiêu chuẩn tham chiếu (Standards Referenced):
- MIL-STD-810H (Environmental Engineering)
- MIL-STD-461G (Electromagnetic Compatibility)
- MIL-STD-882E (System Safety)
- MIL-STD-464C (Lightning/HIRF Protection)
- STANAG 4586 (UAV Control Standard)
- ISO 9001:2015 (Quality Management)
- AS9100D (Aerospace Quality)
- IEC 62443-4-2 (Cybersecurity)
- FIPS 140-3 (Cryptographic Module)
- ASTM G154 (UV Testing)
- UN 38.3 / UN 3480 (Battery Transport)
- IATA DGR (Dangerous Goods Regulations)
- TCVN / QCVN (Vietnamese National Standards)
```

### B. REQUIREMENTS CONFLICTS MATRIX

```
┌─────────┬─────────┬────────────────────────────────────────────────────────────────┐
│ Req ID  │ Req ID  │ Nature of Conflict & Recommended Trade-off                     │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 1.2     │ 2.1     │ CONFLICT: Large wingspan vs Low weight                         │
│ (4.5m)  │ (≤25kg) │ - Large wings = more lift but heavier structure                │
│         │         │ SOLUTION: Use carbon fiber, optimize airfoil                   │
│         │         │ PRIORITY: Weight is DEMAND, wingspan can flex ±5%              │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 3.1     │ 2.3     │ CONFLICT: Long endurance vs High payload                       │
│ (4h)    │ (3kg)   │ - More fuel/battery → less payload capacity                    │
│         │         │ SOLUTION: Mission profiles: Recon (light) vs Strike (heavy)   │
│         │         │ PRIORITY: Both are DEMANDS, must meet minimum for both         │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 4.6     │ 2.1     │ CONFLICT: Stealth (RAM coating) vs Weight limit                │
│ (RCS)   │ (≤25kg) │ - Radar Absorbing Material adds weight                         │
│         │         │ SOLUTION: RAM is WISH, apply only to critical areas            │
│         │         │ PRIORITY: Weight DEMAND > Stealth WISH                         │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 3.2     │ 11.1    │ CONFLICT: Extended endurance vs Unit cost                      │
│ (8h)    │ ($50k)  │ - Larger batteries = higher cost                               │
│         │         │ SOLUTION: Extended endurance is WISH, standard is 4h           │
│         │         │ PRIORITY: Cost DEMAND > Endurance WISH                         │
│         │         │ Offer "Extended Range" variant at +$10k                        │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 1.4     │ 3.1     │ CONFLICT: High cruise speed vs Long endurance                  │
│ (120)   │ (4h)    │ - Faster = more power = less endurance                         │
│         │         │ SOLUTION: Optimize for 80-100 km/h cruise, 120 km/h capable   │
│         │         │ PRIORITY: Both DEMANDS, find optimal compromise                │
│         │         │ Flight planning software to optimize speed vs endurance        │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 5.1     │ 3.1     │ CONFLICT: Long comm range vs Power budget                      │
│ (50km)  │ (4h)    │ - More TX power = faster battery drain                         │
│         │         │ SOLUTION: Adaptive power, use relay when available             │
│         │         │ PRIORITY: Both DEMANDS, 50km at reduced data rate acceptable   │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 6.7     │ 2.1     │ CONFLICT: Ballistic protection vs Weight                       │
│ (Armor) │ (≤25kg) │ - Armor adds significant weight                                │
│         │         │ SOLUTION: Armor is WISH, protect only flight computer          │
│         │         │ PRIORITY: Weight DEMAND > Armor WISH                           │
│         │         │ Redundancy (dual systems) preferred over armor                 │
├─────────┼─────────┼────────────────────────────────────────────────────────────────┤
│ 4.5     │ 11.1    │ CONFLICT: Domestic sourcing vs Unit cost                       │
│ (Local) │ ($50k)  │ - Local materials may be more expensive                        │
│         │         │ SOLUTION: Both are targets, prioritize cost                   │
│         │         │ PRIORITY: Cost DEMAND, Domestic is WISH                        │
│         │         │ Tech transfer over time to reduce cost                         │
└─────────┴─────────┴────────────────────────────────────────────────────────────────┘

CRITICAL DESIGN CHALLENGES:
1. Weight budget is extremely tight → Every gram counts
2. Endurance vs Payload trade-off → Need mission analysis
3. Cost constraint is aggressive → Value engineering essential
4. Stealth features → Expensive, prioritize carefully
```

### C. VERIFICATION PLAN (Kế hoạch kiểm chứng)

```
┌──────────┬──────────────────────┬─────────────────────────────┬──────────────┬─────────┐
│ Req ID   │ Verification Method  │ Test Procedure / Analysis   │ Responsible  │ Phase   │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ GEOMETRY │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 1.1      │ Inspection           │ Measure with tape, calipers │ QC Team      │ Proto   │
│ 1.2      │ Inspection           │ CMM measurement ±0.1m       │ QC Team      │ Proto   │
│ 1.3      │ Demonstration        │ 10 fold/unfold cycles       │ Test Team    │ Proto   │
│ 1.4      │ Test                 │ GPS-tracked flight test     │ Flight Test  │ Qual    │
│ 1.5      │ Test                 │ Level flight max speed      │ Flight Test  │ Qual    │
│ 1.6      │ Test                 │ Climb rate @ MTOW           │ Flight Test  │ Qual    │
│ 1.8      │ Demonstration        │ 20 launches (all methods)   │ Test Team    │ Qual    │
│ 1.9      │ Test                 │ 20 landings, damage assess  │ Test Team    │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ FORCES   │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 2.1      │ Inspection           │ Certified scale             │ QC Team      │ Every   │
│ 2.3      │ Test                 │ Payload flight test 4h      │ Flight Test  │ Qual    │
│ 2.4      │ Analysis + Test      │ FEA + static load test      │ Structures   │ Design  │
│ 2.5      │ Test                 │ Wind tunnel + flight        │ Aero Lab     │ Qual    │
│ 2.6      │ Test                 │ Drop test (instrumented)    │ Test Lab     │ Qual    │
│ 2.7      │ Test                 │ MIL-STD-810H M514.8         │ Cert Lab     │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ ENERGY   │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 3.1      │ Test                 │ 5 endurance flights         │ Flight Test  │ Qual    │
│ 3.4      │ Test                 │ Dynamometer power measure   │ Propulsion   │ Bench   │
│ 3.5      │ Test                 │ Power consumption monitor   │ Avionics     │ Ground  │
│ 3.6      │ Test + Certification │ UN 38.3 battery test        │ Battery Lab  │ Design  │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ MATERIAL │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 4.1      │ Inspection + Test    │ Fiber volume fraction test  │ Materials    │ Prod    │
│ 4.2      │ Test                 │ ASTM G154 UV exposure       │ Materials    │ Design  │
│ 4.3      │ Test                 │ MIL-STD-810H M509 salt fog  │ Cert Lab     │ Qual    │
│ 4.7      │ Test                 │ Sound level meter @ 100m    │ Acoustics    │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ SIGNALS  │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 5.1      │ Test                 │ Range test (5 directions)   │ RF Test      │ Qual    │
│ 5.2      │ Test                 │ Bandwidth/latency measure   │ RF Test      │ Qual    │
│ 5.3      │ Test + Certification │ FIPS 140-3 crypto test      │ Cyber Lab    │ Design  │
│ 5.4      │ Demonstration        │ 20 auto missions            │ Flight Test  │ Qual    │
│ 5.6      │ Test                 │ STANAG 4586 compliance test │ Interop Lab  │ Qual    │
│ 5.8      │ Test                 │ MIL-STD-461G all methods    │ EMC Lab      │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ SAFETY   │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 6.1      │ Analysis             │ PHA, SHA, SSHA documents    │ Safety Engr  │ Design  │
│ 6.2      │ Test                 │ Failsafe scenarios (20 ea)  │ Flight Test  │ Qual    │
│ 6.3      │ Demonstration        │ 10 flight terminations      │ Test Team    │ Qual    │
│ 6.6      │ Test                 │ Zeroize function test       │ Cyber Team   │ Qual    │
│ 6.8      │ Test + Penetration   │ IEC 62443 security tests    │ Cyber Lab    │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ ERGO     │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 7.1      │ Demonstration        │ 10 trainees, time to solo   │ Training     │ IOC     │
│ 7.2      │ Test                 │ MIL-STD-810H, IP54 test     │ HW Test      │ Qual    │
│ 7.4      │ Demonstration        │ 10 setup drills, timed      │ Ops Team     │ IOC     │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ QUALITY  │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 8.2      │ Audit                │ ISO/AS cert audit           │ External     │ LRIP    │
│ 8.5      │ Inspection           │ Incoming, in-process, final │ QC Team      │ Every   │
│ 8.6      │ Test                 │ Functional + flight sample  │ Test Team    │ Prod    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ MAINT    │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 10.1     │ Analysis + Test      │ FMEA + reliability test     │ Reliability  │ Design  │
│ 10.2     │ Test                 │ Maintainability demo        │ Logistics    │ IOC     │
│ 10.4     │ Test                 │ BIT detection rate test     │ Avionics     │ Qual    │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ COST     │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 11.1     │ Analysis             │ Cost estimation + quotes    │ Procurement  │ Design  │
│ 11.5     │ Inspection           │ Schedule tracking (Gantt)   │ PM Office    │ All     │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ STDS     │                      │                             │              │         │
├──────────┼──────────────────────┼─────────────────────────────┼──────────────┼─────────┤
│ 12.1-9   │ Test + Certification │ Various MIL-STD tests       │ Cert Labs    │ Qual    │
└──────────┴──────────────────────┴─────────────────────────────┴──────────────┴─────────┘

VERIFICATION PHASES:
- Proto: Prototype testing (Month 6-9)
- Design: Design verification (Month 3-12)
- Qual: Qualification testing (Month 12-15)
- LRIP: Low Rate Initial Production (Month 15-18)
- IOC: Initial Operational Capability (Month 18-24)
- Prod: Production (Month 24+)
```

### D. PRIORITIZATION OF WISHES

```
HIGH PRIORITY WISHES (Implement if budget allows):
─────────────────────────────────────────────────
1. Req 1.5: Max speed >180 km/h
   Impact: Mission flexibility, survivability
   Cost: ~$2k (more powerful motor)
   
2. Req 3.2: Extended endurance to 8h
   Impact: Mission capability expansion
   Cost: ~$5k (larger battery)
   
3. Req 5.5: GPS-denied navigation
   Impact: Resilience against jamming
   Cost: ~$8k (INS, visual odometry)
   
4. Req 7.5: Automated flight modes
   Impact: Operator workload reduction
   Cost: ~$3k (software development)

Total High Priority: ~$18k → Offer as "Premium" variant

MEDIUM PRIORITY WISHES:
─────────────────────────────────────────────────
5. Req 1.7: Tight turn radius (<150m)
   Impact: Maneuverability in mountains
   Cost: ~$1k (flight control tuning)
   
6. Req 2.2: Lower empty weight (<12kg)
   Impact: More payload/endurance margin
   Cost: ~$3k (advanced composites)
   
7. Req 4.5: >50% domestic sourcing
   Impact: Supply chain security
   Cost: Variable (depends on local industry)
   
8. Req 4.6: RCS reduction (stealth)
   Impact: Survivability vs radar
   Cost: ~$6k (RAM coating)

Total Medium Priority: ~$10-13k

LOW PRIORITY WISHES:
─────────────────────────────────────────────────
9. Req 3.7: Solar charging capability
   Impact: Endurance bonus in sunny weather
   Cost: ~$2k (solar cells integration)
   
10. Req 6.5: Lightning protection
    Impact: Safety in extreme weather
    Cost: ~$2k (static discharge paths)
    
11. Req 6.7: Ballistic tolerance
    Impact: Survivability under fire
    Cost: ~$4k (selective armoring)
    
12. Req 10.7: Advanced diagnostics
    Impact: Easier troubleshooting
    Cost: ~$3k (software development)

Total Low Priority: ~$11k

RECOMMENDATION:
- Baseline: All DEMANDS only → $50k target
- Standard+: High priority wishes → $68k
- Premium: Standard+ plus Medium → $81k
- Ultimate: All wishes → $92k
```

### E. NOTES & ASSUMPTIONS

```
1. OPERATIONAL ENVIRONMENT ASSUMPTIONS:
   - Primary AO: Mountainous border regions (70%), coastal (20%), urban (10%)
   - Threat level: Small arms fire, possible MANPADS
   - Weather: Tropical, high humidity, frequent rain
   - Infrastructure: Limited, austere forward bases
   
2. TECHNOLOGY READINESS:
   - Electric propulsion: TRL 9 (mature)
   - Composite airframe: TRL 8 (proven in similar apps)
   - Autonomous navigation: TRL 7 (needs adaptation)
   - Datalink encryption: TRL 9 (COTS available)
   
3. MANUFACTURING ASSUMPTIONS:
   - Labor cost: $10/hour (Vietnam average for skilled)
   - Material availability: 70% domestic, 30% import
   - Production facility: Existing, needs upgrade
   - Tooling: ~$100k investment required
   
4. SUPPORT ASSUMPTIONS:
   - Training: On-site by manufacturer
   - Maintenance: 3-tier system (unit/intermediate/depot)
   - Spare parts: 2-year stock at contract signature
   - Technical support: 24/7 hotline + on-site engineers
   
5. COST DRIVERS (Top 5):
   - Battery pack: ~$8k (16% of unit cost)
   - Flight computer & avionics: ~$7k (14%)
   - Composite airframe: ~$6k (12%)
   - Camera/payload: ~$10k (20%) - User-provided option
   - Datalink system: ~$4k (8%)
   
6. SCHEDULE RISKS:
   - Battery certification: 3-6 months (long lead item)
   - EMC testing: Limited lab capacity (scheduling issue)
   - Flight testing: Weather-dependent (tropical storms)
   - Component import: Customs clearance delays possible
   
7. TECHNICAL RISKS:
   - Weight budget: VERY TIGHT → Requires aggressive optimization
   - Endurance target: Achievable but challenging with payload
   - Comm range in mountains: Line-of-sight limited, relay needed
   - Ballistic tolerance: WISH item, not baseline → Accept risk
   
8. ASSUMPTIONS REQUIRING VALIDATION:
   - [ ] Wind conditions representative? Need Met data for AO
   - [ ] Payload interface spec? Pending customer provision
   - [ ] GCS hardware? Commercial vs ruggedized trade-off
   - [ ] Maintenance personnel skill level? Need training assessment
   - [ ] Local supply chain capability? Needs survey
   
9. REGULATORY ASSUMPTIONS:
   - Vietnamese airspace: COA (Certificate of Authorization) required
   - Frequency allocation: Pending approval from regulatory authority
   - Export control: Some components (crypto) subject to restrictions
   - Environmental: No impact assessment required (military exemption)
   
10. DESIGN PHILOSOPHY:
    - "Good enough" vs "Perfect": Target 80% solution at 50% cost
    - KISS principle: Keep It Simple, Stupid (reliability > features)
    - COTS over custom: Use commercial components where possible
    - Modular design: Enable future upgrades and variants
    - Fail-safe over fail-operational: Safety first

11. LESSONS LEARNED (from similar programs):
    - Underestimating weight is #1 killer → Add 15% margin
    - Integration testing takes 2x longer than planned → Buffer schedule
    - Battery life degrades 20% in hot climate → Account in spec
    - Users want simplicity over features → Prioritize UX
    - Spare parts consumption 3x higher than predicted → Increase stock
```

---

## DOCUMENT CONTROL

```
┌────────────────────────────────────────────────────────────────┐
│ VERSION HISTORY                                                │
├─────────┬────────────┬──────────────┬─────────────────────────┤
│ Version │ Date       │ Author       │ Changes                 │
├─────────┼────────────┼──────────────┼─────────────────────────┤
│ v1.0    │ 2025-08-15 │ Eng. Nguyen  │ Initial draft           │
│ v1.5    │ 2025-09-20 │ Eng. Tran    │ Added standards section │
│ v2.0    │ 2025-10-05 │ Design Team  │ Post-review updates     │
│ v2.1    │ 2025-10-19 │ PM Office    │ Final approval version  │
└─────────┴────────────┴──────────────┴─────────────────────────┘

APPROVAL SIGNATURES:
- Chief Engineer:       _______________ Date: __________
- Project Manager:      _______________ Date: __________
- Quality Assurance:    _______________ Date: __________
- Customer Representative: ____________ Date: __________

DISTRIBUTION:
- Design Team (all members)
- Manufacturing Engineering
- Quality Control
- Procurement
- Customer (3 copies)
- Project file (original)
```

---

**KẾT LUẬN:**

Requirements List này đại diện cho **PHASE 1: TASK CLARIFICATION** của Systematic Design Process. Nó là nền tảng cho tất cả các phase tiếp theo:

- **Phase 2: Conceptual Design** → Function Structures, Working Principles sẽ đáp ứng các requirements này
- **Phase 3: Embodiment Design** → Preliminary layouts, material selection sẽ thực hiện các requirements
- **Phase 4: Detail Design** → Production drawings, tolerances sẽ verify các requirements

Bất kỳ thay đổi nào trong Requirements List đều phải được quản lý chặt chẽ qua **Change Control Process** vì nó ảnh hưởng toàn bộ design downstream.

📋 **Next Steps:**
1. Customer review & approval of Requirements List
2. Kickoff meeting with design team
3. Begin Phase 2: Conceptual Design (Function Structures)
4. Establish design baseline and freeze requirements

---
*Document End*
