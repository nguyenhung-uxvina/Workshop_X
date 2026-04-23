# VN-B41SIM-001: THIẾT BỊ MÔ PHỎNG SÚNG CHỐNG TĂNG B41/RPG-7
## PHASE 1: TASK CLARIFICATION
### Pahl & Beitz Systematic Design Methodology

---

## 1. PRODUCT DEFINITION

### 1.1 Problem Statement

| Aspect | Description |
|--------|-------------|
| **Current State** | Huấn luyện B41/RPG-7 phụ thuộc vào đạn thật (đắt tiền, nguy hiểm) hoặc súng không nạp (thiếu realism) |
| **Pain Points** | • Chi phí đạn thật cao (~$300-500/viên đạn RPG)<br>• Nguy hiểm từ backblast (vùng nguy hiểm 60m phía sau)<br>• Tần suất huấn luyện thấp do hạn chế ngân sách<br>• Không có stress inoculation (khói, lửa, tiếng nổ, lực giật)<br>• Không đánh giá được quỹ đạo bắn |
| **Desired State** | Thiết bị mô phỏng an toàn cho phép huấn luyện thường xuyên với đầy đủ hiệu ứng realistic |
| **Success Criteria** | • Tiết kiệm >80% chi phí so với đạn thật<br>• Huấn luyện tăng tần suất 5x<br>• An toàn 100% (không thương vong)<br>• Realism >85% (đánh giá từ người dùng) |

### 1.2 Product Scope Definition

```
┌─────────────────────────────────────────────────────────────────────┐
│                     PRODUCT SCOPE - VN-B41SIM-001                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TRONG PHẠM VI (IN SCOPE):                                         │
│  ═══════════════════════════                                        │
│  ✓ Mô phỏng súng B41/RPG-7 (ống phóng + đạn giả)                  │
│  ✓ Hiệu ứng lực giật (recoil simulation)                           │
│  ✓ Hiệu ứng khói lửa phía sau (backblast simulation)               │
│  ✓ Hiệu ứng tiếng nổ khi bắn (sound simulation)                    │
│  ✓ Mô phỏng quỹ đạo bay đạn (trajectory simulation)                │
│  ✓ Hệ thống theo dõi điểm đạn (hit tracking)                       │
│  ✓ Hệ thống chấm điểm huấn luyện (scoring system)                  │
│  ✓ Bia huấn luyện (cố định và di động)                             │
│                                                                     │
│  NGOÀI PHẠM VI (OUT OF SCOPE):                                      │
│  ═══════════════════════════                                        │
│  ✗ Mô phỏng các loại súng chống tăng khác (AT4, Carl Gustaf)       │
│  ✗ Hệ thống VR/AR (Phase 2)                                        │
│  ✗ Kết nối networked multi-user (Phase 2)                          │
│  ✗ Mô phỏng phá giáp ERA (Phase 2)                                 │
│  ✗ Full tactical training environment                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. B41/RPG-7 TECHNICAL SPECIFICATIONS (Reference)

### 2.1 Physical Characteristics

| Parameter | Value | Unit | Source |
|-----------|-------|------|--------|
| Launcher weight (empty) | 6.3 | kg | Wikipedia |
| Launcher weight (loaded) | 8.7 | kg | Wikipedia |
| Launcher length | 950 | mm | Wikipedia |
| Launcher diameter | 40 | mm | Wikipedia |
| Projectile weight | 2.0-4.5 | kg | Wikipedia |
| Projectile diameter | 40-105 | mm | Varies by warhead |

### 2.2 Ballistic Characteristics

| Parameter | Value | Unit | Notes |
|-----------|-------|------|-------|
| Initial velocity (booster) | 117 | m/s | Gunpowder charge |
| Max velocity (rocket) | 295 | m/s | After rocket ignition |
| Rocket ignition distance | 11 | m | From launcher |
| Effective range (moving target) | 200 | m | 4m/s lateral movement |
| Effective range (stationary) | 500 | m | Standard |
| Maximum range | 920 | m | Fuze limit |
| Self-destruct range | 920 | m | Safety fuze |

### 2.3 Backblast Characteristics

| Parameter | Value | Unit | Notes |
|-----------|-------|------|-------|
| Danger zone (rear) | 20-30 | m | Lethal zone |
| Caution zone (rear) | 60 | m | Burns, injury risk |
| Smoke puff diameter | 0.9-1.2 | m | 3-4 feet |
| Smoke linger time | 8 | seconds | Low wind |
| Smoke color | Grey-blue | - | Characteristic |
| Secondary flash (rocket) | 11 | m from launcher | Bright flash |

### 2.4 Trajectory Characteristics (Key for Simulation)

```
QUỸNG ĐẠO BAY ĐẠN B41/RPG-7:

     │                    ┌── Rocket ignition (11m)
     │                    ↓   Secondary flash + smoke
     │          ┌─────────•─────────────────────────────────────→
     │         /          ↑
     │        /           Booster phase (0-11m)
     │       /            Initial velocity: 117 m/s
     │      /
     │     /
     │    /
     │   •←── Launch point
     │   ↓    Backblast: Smoke, flash, heat
     │   ↓    Danger zone: 20-30m rear
     │   ↓
─────┴─────────────────────────────────────────────────────────
     Launcher            500m effective          920m max
     
FLIGHT PHASES:
1. Booster Phase (0-11m): Gunpowder propels at 117 m/s
2. Rocket Phase (11-920m): Sustainer motor accelerates to 295 m/s
3. Ballistic Phase: Stabilizing fins deploy, 2 sets (main + rear spin)
4. Self-Destruct: Fuze triggers at 920m if no impact

DROP CHARACTERISTICS:
- Significant drop at ranges >200m
- Crosswind drift: 11 km/h wind → 50% hit rate at 180m
- Requires lead for moving targets
```

---

## 3. STAKEHOLDER ANALYSIS

### 3.1 Primary Stakeholders

| Stakeholder | Role | Key Requirements | Priority |
|-------------|------|------------------|----------|
| **Học viên (Trainee)** | Primary user | Realistic feel, clear feedback, safe operation | CRITICAL |
| **Huấn luyện viên (Instructor)** | Operator, evaluator | Performance tracking, scenario control, replay | CRITICAL |
| **Chỉ huy đơn vị (Commander)** | Decision maker | Training effectiveness, cost efficiency, readiness | HIGH |
| **Kỹ thuật viên (Technician)** | Maintainer | Modular design, easy repair, spare parts | HIGH |

### 3.2 Customer Segments

| Segment | Estimated Quantity | Use Case | Price Sensitivity |
|---------|-------------------|----------|-------------------|
| **Bộ binh (Infantry Units)** | 50-100 systems | Basic RPG training | Medium |
| **Học viện quân sự (Military Academies)** | 20-30 systems | Cadet training | Medium |
| **Biên phòng (Border Guard)** | 30-50 systems | Defensive training | Medium |
| **Đặc công (Special Forces)** | 10-20 systems | Advanced training | Low (quality focus) |
| **Export (Lào, Campuchia)** | 20-50 systems | Regional market | High |

**Total Addressable Market (TAM):** 130-250 systems over 5 years

---

## 4. COMPETITOR BENCHMARK

### 4.1 Existing Solutions

| Competitor | Type | Key Features | Price | Weaknesses |
|------------|------|--------------|-------|------------|
| **SKIFTECH (Ukraine)** | Attachment to real launcher | Software tracking, realistic flight path | ~$5K-15K | No physical effects (smoke, recoil) |
| **PR Tactical RPG II HX** | Pyrotechnic | Blast, heat, smoke, flash, smell, wireless | ~$10K-20K | No trajectory simulation |
| **Explotrain X-RPG** | CO2 propelled | 50m guideline, 80mph rocket, smoke | ~$500-600 | Fixed trajectory, no scoring |
| **Inert Products XC-RPGK** | CO2 backblast | Smoke, flash, sound | ~$300-560 | No projectile, no scoring |
| **Saab GCIT** | Virtual (VR) | Carl Gustaf VR trainer, ballistics | ~$170K | VR only, no physical effects |

### 4.2 Gap Analysis

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MARKET GAP ANALYSIS                              │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  FEATURE                    SKIF  PR-TAC  EXPLO  INERT  SAAB   VN-B41 │
│  ────────────────────────   ────  ──────  ─────  ─────  ────   ────── │
│  Realistic launcher feel     ✓      ✓       ✓      ✓      ✗      ✓    │
│  Recoil simulation           ✗      ✗       ✗      ✗      ✗      ✓ ★  │
│  Backblast smoke/flash       ✗      ✓       ✓      ✓      ✗      ✓    │
│  Trajectory simulation       ✓      ✗       ~      ✗      ✓      ✓    │
│  Hit tracking/scoring        ✓      ✗       ✗      ✗      ✓      ✓    │
│  Moving target support       ✓      ✗       ✗      ✗      ✓      ✓    │
│  Instructor station          ✓      ✗       ✗      ✗      ✓      ✓    │
│  Vietnamese language         ✗      ✗       ✗      ✗      ✗      ✓ ★  │
│  Local support/maintenance   ✗      ✗       ✗      ✗      ✗      ✓ ★  │
│                                                                        │
│  ★ = Unique differentiation                                            │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Differentiation Strategy

| Differentiation | How VN-B41SIM Achieves It |
|-----------------|---------------------------|
| **Integrated System** | Combines ALL features: recoil + smoke + trajectory + scoring |
| **Recoil Simulation** | Pneumatic/spring mechanism for realistic shoulder kick |
| **Vietnamese Context** | Local terrain scenarios, Vietnamese UI, local support |
| **Cost Advantage** | Target 40-60% of import price through local production |
| **B41-Specific** | Optimized for Vietnamese B41 variant (vs generic RPG-7) |

---

## 5. APPLICABLE STANDARDS

### 5.1 Military Standards

| Standard | Title | Application to B41SIM |
|----------|-------|----------------------|
| **MIL-STD-810H** | Environmental Engineering | Temperature, humidity, vibration, shock testing |
| **MIL-STD-461G** | EMI/EMC | Electronics immunity, no interference |
| **MIL-STD-882E** | System Safety | Hazard analysis, backblast safety |
| **MIL-STD-1472** | Human Engineering | Ergonomics, controls, displays |
| **MIL-HDBK-217F** | Reliability Prediction | MTBF calculation |

### 5.2 Vietnamese Standards

| Standard | Title | Application |
|----------|-------|-------------|
| **QCVN 06:2010/BQP** | Quality Management - Defense Products | Quality system compliance |
| **TCVN 6508** | Environmental Testing | Local test procedures |
| **TCVN 7699** | Electrical Safety | Electronics safety |

### 5.3 Safety Standards

| Standard | Application |
|----------|-------------|
| **ISO 12100** | Safety of machinery |
| **IEC 60204-1** | Electrical equipment safety |
| **Pyrotechnic regulations** | If using pyrotechnic effects |

---

## 6. REQUIREMENTS LIST (DRAFT)

### 6.1 Geometry (G)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | G.01 | Launcher length (simulated) | 950 ± 20 | mm | I | Match real B41 |
| D | G.02 | Launcher weight (unloaded) | 6.0-7.0 | kg | I | Match real feel |
| D | G.03 | Launcher weight (loaded) | 8.0-9.0 | kg | I | With dummy projectile |
| D | G.04 | Launcher diameter | 40 ± 2 | mm | I | Standard B41 |
| W(H) | G.05 | Dummy projectile length | 400-500 | mm | I | Visible warhead |
| D | G.06 | Overall system footprint | ≤ 3 × 2 | m | I | Training station |

### 6.2 Kinematics (K)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | K.01 | Simulated initial velocity | 115-120 | m/s | A | Match real booster |
| D | K.02 | Simulated max velocity | 290-300 | m/s | A | Match real rocket |
| D | K.03 | Trajectory accuracy | ≥ 90 | % | T | vs real ballistics |
| D | K.04 | Drop simulation | Included | - | A | Gravity effect |
| W(H) | K.05 | Wind drift simulation | Included | - | A | Crosswind effect |
| D | K.06 | Effective range (simulated) | 50-500 | m | T | Scalable |
| W(M) | K.07 | Moving target tracking | ≤ 10 | m/s | T | Lateral movement |

### 6.3 Forces (F) - RECOIL SIMULATION

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | F.01 | **Recoil impulse** | **50-100** | **N·s** | **T** | **Critical - must feel realistic** |
| D | F.02 | Recoil duration | 50-150 | ms | T | Short, sharp kick |
| D | F.03 | Recoil direction | Rearward | - | I | Shoulder push |
| W(H) | F.04 | Recoil adjustability | 3 levels | - | D | Low/Med/High |
| D | F.05 | Launcher weight (shooter comfort) | ≤ 9 | kg | I | Shoulder-fired |
| D | F.06 | Trigger pull force | 20-40 | N | T | Match real B41 |

### 6.4 Energy (E)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | E.01 | Power supply | 220V AC, 50Hz | - | I | Vietnamese standard |
| W(H) | E.02 | Battery backup | ≥ 2 | hours | T | Field use |
| D | E.03 | Power consumption | ≤ 500 | W | T | Main system |
| D | E.04 | CO2/compressed air pressure | ≤ 150 | bar | I | For backblast |
| D | E.05 | Shots per CO2 cartridge | ≥ 20 | shots | T | Economy |

### 6.5 Signals (S) - SMOKE/FIRE EFFECTS

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | S.01 | **Backblast smoke diameter** | **0.8-1.5** | **m** | **T** | **Match real 3-4 ft** |
| D | S.02 | **Backblast smoke duration** | **3-8** | **seconds** | **T** | **Visible lingering** |
| D | S.03 | **Backblast flash intensity** | **Visible in daylight** | - | **T** | **Safety awareness** |
| D | S.04 | **Sound level (launch)** | **110-130** | **dB** | **T** | **Match real report** |
| D | S.05 | Smoke color | Grey-blue | - | I | Match real signature |
| W(H) | S.06 | Smell simulation | Burnt powder | - | D | Optional realism |
| D | S.07 | Laser tracer (trajectory) | Class 1 safe | - | I | Eye-safe |
| D | S.08 | Display resolution (instructor) | ≥ 1920×1080 | pixels | I | Full HD |
| W(H) | S.09 | Impact flash simulation | Included | - | D | At target location |

### 6.6 Safety (SF)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SF.01 | Backblast danger zone | ≤ 5 | m | T | Safe for training |
| D | SF.02 | No projectile ejection | None | - | I | Dummy only |
| D | SF.03 | Emergency stop | Required | - | D | Immediate halt |
| D | SF.04 | Hearing protection required | > 85 | dB | I | Warning signage |
| D | SF.05 | Eye protection (laser) | Required | - | I | Class 1 compliance |
| D | SF.06 | Fire-safe materials | UL94 V-0 | - | I | Pyrotechnic area |
| D | SF.07 | Pressure vessel certification | Required | - | D | CO2 tank |
| D | SF.08 | Failsafe trigger mechanism | Required | - | D | No accidental fire |

### 6.7 Ergonomics (ER)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | ER.01 | Firing position | Standing, kneeling, prone | - | D | All standard |
| D | ER.02 | Grip dimensions | Match real B41 | mm | I | Muscle memory |
| D | ER.03 | Sight alignment | Iron + optical | - | I | PGO-7 compatible |
| D | ER.04 | UI language | Vietnamese + English | - | I | Bilingual |
| D | ER.05 | Trainee training time | ≤ 30 | min | T | Quick familiarization |
| D | ER.06 | Weight distribution | Match real | - | T | Balance |

### 6.8 Operation (OP)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | OP.01 | Setup time | ≤ 15 | min | T | Field deployment |
| D | OP.02 | Shots per session | ≥ 50 | shots | T | Full class |
| D | OP.03 | Reset time between shots | ≤ 30 | sec | T | Reload simulation |
| D | OP.04 | Operating temperature | 15-45 | °C | T | Vietnam climate |
| D | OP.05 | Operating humidity | 20-95 | % RH | T | Tropical |
| D | OP.06 | Pre-built scenarios | ≥ 5 | - | D | Tank, bunker, vehicle |
| W(H) | OP.07 | Scenario editor | Included | - | D | Custom missions |
| D | OP.08 | Performance recording | Required | - | D | After-action review |
| D | OP.09 | Scoring system | Accuracy + time | - | D | Objective evaluation |
| W(H) | OP.10 | **Night training mode** | **Included** | - | **D** | **NVG compatible** |

### 6.9 Target System (TG)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | TG.01 | Target types | Tank silhouette, vehicle, bunker | - | I | Standard targets |
| D | TG.02 | Target size (tank) | 5 × 2.5 | m | I | Standard panel |
| D | TG.03 | Target distance range | 50-500 | m | A | Simulated |
| W(H) | TG.04 | Moving target | 0-10 | m/s | T | Lateral |
| D | TG.05 | Hit detection accuracy | ≤ 0.5 | m | T | Point of impact |
| D | TG.06 | Hit detection latency | ≤ 100 | ms | T | Real-time feedback |
| W(H) | TG.07 | Multiple targets | ≥ 3 | - | D | Simultaneous |

### 6.10 Maintenance (MT)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | MT.01 | MTBF | ≥ 1000 | hours | A | High reliability |
| D | MT.02 | MTTR | ≤ 2 | hours | D | Field repair |
| D | MT.03 | CO2 cartridge replacement | Tool-free | - | D | Quick change |
| D | MT.04 | Self-diagnostics | Included | - | D | Fault detection |
| D | MT.05 | Documentation language | Vietnamese | - | I | Local support |
| D | MT.06 | Spare parts availability | ≥ 95 | % | I | Local sourcing |

### 6.11 Costs (CO)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | CO.01 | R&D budget | ≤ 500,000,000 | VND | I | ~$20K USD |
| D | CO.02 | Prototype cost | ≤ 200,000,000 | VND | I | ~$8K USD |
| W(H) | CO.03 | Unit production cost | ≤ 150,000,000 | VND | I | ~$6K USD |
| W(H) | CO.04 | Target selling price | ≤ 300,000,000 | VND | I | ~$12K USD |
| D | CO.05 | Cost per shot (consumables) | ≤ 20,000 | VND | A | ~$0.80 |
| D | CO.06 | Annual maintenance cost | ≤ 5 | % of price | A | Low TCO |

### 6.12 Schedule (SC)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SC.01 | Concept design completion | Q1 2026 | - | I | Phase 2 |
| D | SC.02 | Prototype completion | Q3 2026 | - | I | Working demo |
| D | SC.03 | Field testing | Q4 2026 | - | I | User evaluation |
| D | SC.04 | Production readiness | Q1 2027 | - | I | Serial production |

---

## 7. CRITICAL INPUT QUESTIONS

### Questions Requiring Customer/Stakeholder Input

| # | Question | Options | Impact |
|---|----------|---------|--------|
| **1** | Recoil type preference? | A) Pneumatic (realistic, complex)<br>B) Spring (simple, less realistic)<br>C) Electromagnetic (precise, expensive) | Architecture, cost |
| **2** | Backblast effect type? | A) CO2 only (safe, reusable)<br>B) Pyrotechnic (realistic, consumable)<br>C) Hybrid (CO2 + flash) | Safety, running cost |
| **3** | Target system type? | A) Physical targets (outdoor)<br>B) Projected targets (indoor)<br>C) Both | Venue flexibility |
| **4** | Trajectory simulation? | A) Laser-based (simple, limited range)<br>B) Software + screen (indoor)<br>C) Augmented Reality (future) | Complexity, realism |
| **5** | Priority customer segment? | A) Infantry units<br>B) Military academies<br>C) Special forces | Feature prioritization |
| **6** | Development budget constraint? | Fixed: _____ VND | Scope limitation |

---

## 8. TECHNICAL ARCHITECTURE OPTIONS

### 8.1 Recoil Simulation Concepts

| Concept | Mechanism | Pros | Cons | Estimated Cost |
|---------|-----------|------|------|----------------|
| **A. Pneumatic Piston** | CO2 drives piston rearward | Realistic impulse, adjustable | Complex, requires gas | $500-800 |
| **B. Spring-Loaded** | Pre-tensioned spring releases | Simple, reliable, low cost | Less realistic, fixed force | $100-200 |
| **C. Electromagnetic** | Solenoid/linear motor | Precise, programmable | Expensive, needs power | $1000-2000 |
| **D. Flywheel** | Rotating mass creates impulse | Very realistic | Complex, heavy | $800-1500 |

**Recommendation:** Start with **Option A (Pneumatic)** for balance of realism and cost.

### 8.2 Backblast Effects Concepts

| Concept | Mechanism | Pros | Cons | Estimated Cost |
|---------|-----------|------|------|----------------|
| **A. CO2 Release** | High-pressure CO2 creates smoke cloud | Safe, reusable, low cost | Limited smoke density | $200-400 |
| **B. Pyrotechnic** | Flash powder + smoke charge | Most realistic, smell included | Consumable, fire risk | $20-50/shot |
| **C. Fog Machine** | Heated glycol creates smoke | Dense smoke, reusable | Needs power, slower | $300-500 |
| **D. Hybrid CO2+Flash** | CO2 smoke + electronic flash | Good balance | Medium complexity | $400-600 |

**Recommendation:** **Option D (Hybrid)** for safety + realism balance.

### 8.3 Trajectory Tracking Concepts

| Concept | Mechanism | Pros | Cons | Estimated Cost |
|---------|-----------|------|------|----------------|
| **A. Laser + Sensors** | Laser beam + target sensors | Simple, accurate | Limited range, daylight issues | $500-1000 |
| **B. Camera Tracking** | High-speed camera tracks projectile | Flexible, no sensors needed | Processing, weather | $2000-5000 |
| **C. IR Beam** | Infrared + IR sensitive targets | Works in daylight | Limited range | $800-1500 |
| **D. Software Simulation** | Ballistic model + display | No physical projectile | Less immersive | $1000-2000 |

**Recommendation:** **Option A (Laser + Sensors)** for Phase 1, upgrade to C/B later.

---

## 9. FUNCTION STRUCTURE (PRELIMINARY)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    OVERALL FUNCTION: SIMULATE B41/RPG-7 FIRING               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  INPUTS:                                                                    │
│  • Energy: Electrical power, CO2 pressure, user force                       │
│  • Material: CO2 cartridge, smoke fluid, dummy projectile                   │
│  • Signals: Trigger pull, aim direction, target position                    │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                                                                       │  │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐                 │  │
│  │  │ DETECT AIM  │──▶│ CALCULATE   │──▶│ EXECUTE     │                 │  │
│  │  │ & TRIGGER   │   │ TRAJECTORY  │   │ EFFECTS     │                 │  │
│  │  └─────────────┘   └─────────────┘   └─────────────┘                 │  │
│  │        │                 │                 │                          │  │
│  │        ▼                 ▼                 ▼                          │  │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐                 │  │
│  │  │ Detect      │   │ Compute     │   │ Generate    │                 │  │
│  │  │ trigger     │   │ ballistic   │   │ recoil      │                 │  │
│  │  │ pull force  │   │ path        │   │ impulse     │                 │  │
│  │  └─────────────┘   └─────────────┘   └─────────────┘                 │  │
│  │                                                                       │  │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐                 │  │
│  │  │ Measure     │   │ Apply wind  │   │ Generate    │                 │  │
│  │  │ aim         │   │ & drop      │   │ backblast   │                 │  │
│  │  │ direction   │   │ correction  │   │ effects     │                 │  │
│  │  └─────────────┘   └─────────────┘   └─────────────┘                 │  │
│  │                                                                       │  │
│  │  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐                 │  │
│  │  │ Track       │   │ Determine   │   │ Generate    │                 │  │
│  │  │ launcher    │   │ impact      │   │ launch      │                 │  │
│  │  │ position    │   │ point       │   │ sound       │                 │  │
│  │  └─────────────┘   └─────────────┘   └─────────────┘                 │  │
│  │                                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐                 │  │
│  │  │              RECORD & SCORE                      │                 │  │
│  │  │  • Log shot data                                 │                 │  │
│  │  │  • Calculate accuracy                            │                 │  │
│  │  │  • Display feedback                              │                 │  │
│  │  └─────────────────────────────────────────────────┘                 │  │
│  │                                                                       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│  OUTPUTS:                                                                   │
│  • Energy: Recoil force, sound, flash                                       │
│  • Material: Smoke cloud                                                    │
│  • Signals: Hit location, score, feedback                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 10. NEXT STEPS

### 10.1 Immediate Actions (Week 1-2)

| # | Action | Owner | Deadline |
|---|--------|-------|----------|
| 1 | Answer 6 critical input questions | Customer/Stakeholder | Week 1 |
| 2 | Identify priority customer segment #1 | PM | Week 1 |
| 3 | Research CO2 pneumatic recoil mechanisms | Engineer | Week 2 |
| 4 | Contact potential suppliers (CO2, sensors) | Procurement | Week 2 |
| 5 | Benchmark SKIFTECH/PR Tactical products | Engineer | Week 2 |

### 10.2 Stakeholder Interview Questions

1. "Hiện tại đơn vị huấn luyện B41 như thế nào?"
2. "Vấn đề lớn nhất khi huấn luyện B41 là gì?"
3. "Nếu có thiết bị mô phỏng, tính năng nào BẮT BUỘC phải có?"
4. "Ngân sách dự kiến cho một thiết bị là bao nhiêu?"
5. "Ai là người quyết định mua sắm thiết bị huấn luyện?"
6. "Mô phỏng lực giật quan trọng như thế nào (1-5)?"
7. "Mô phỏng khói lửa quan trọng như thế nào (1-5)?"

### 10.3 Phase 1 Completion Criteria

- [ ] All critical input questions answered
- [ ] ≥80% requirements quantified
- [ ] ≥2 stakeholder interviews completed
- [ ] No unresolved requirement conflicts
- [ ] Cost/schedule constraints confirmed
- [ ] Document reviewed by project sponsor

---

## 11. REQUIREMENTS SUMMARY

| Category | Count | Key Highlights |
|----------|-------|----------------|
| Geometry | 6 | Match real B41 dimensions/weight |
| Kinematics | 7 | Trajectory accuracy ≥90% |
| **Forces (Recoil)** | **6** | **Recoil impulse 50-100 N·s ★** |
| Energy | 5 | Battery backup ≥2 hours |
| **Signals (Effects)** | **9** | **Smoke 0.8-1.5m, Sound 110-130dB ★** |
| Safety | 8 | Backblast danger ≤5m |
| Ergonomics | 6 | All firing positions |
| Operation | 10 | Night training mode |
| Target System | 7 | Moving target 0-10 m/s |
| Maintenance | 6 | MTBF ≥1000 hours |
| Costs | 6 | Unit cost ≤$6K USD |
| Schedule | 4 | Prototype Q3 2026 |
| **TOTAL** | **80** | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 2024 | Claude + Hung | Initial draft |

---

*Phase 1 Task Clarification - Ready for stakeholder review and input*
