# Phân tích D-M-I-R × ODI: Bia mục tiêu mặt nước điều khiển từ xa BĐK-01

**Đề tài:** Nghiên cứu, thiết kế, chế tạo bia mục tiêu mặt nước điều khiển từ xa BĐK-01 phục vụ huấn luyện chống đổ bộ đường biển

**Framework Integration:** D-M-I-R × ODI × Systems Thinking × Meta-Learning

**Ngày phân tích:** Tháng 1/2026

---

## MỤC LỤC

1. [Executive Summary](#1-executive-summary)
2. [DIAGNOSIS - Chẩn đoán Hệ thống](#2-diagnosis---chẩn-đoán-hệ-thống)
3. [MODELING - Mô hình hóa](#3-modeling---mô-hình-hóa)
4. [INTERVENTION - Can thiệp](#4-intervention---can-thiệp)
5. [REFLECTION - Phản ánh & Học hỏi](#5-reflection---phản-ánh--học-hỏi)
6. [Systems Thinking Analysis](#6-systems-thinking-analysis)
7. [Meta-Learning Framework](#7-meta-learning-framework)
8. [Use Cases & Recommendations](#8-use-cases--recommendations)
9. [Implementation Roadmap](#9-implementation-roadmap)

---

## 1. EXECUTIVE SUMMARY

### 1.1 Tổng quan Đề tài

BĐK-01 là hệ thống bia mục tiêu mặt nước điều khiển từ xa (Remote-Controlled Surface Target - RCST) phục vụ huấn luyện bắn đạn thật và nghiệm thu vũ khí của Hải quân Việt Nam.

| Thông số | Giá trị |
|----------|---------|
| Chiều dài thân | 3.500 ± 100 mm |
| Chiều rộng | 1.200 ± 50 mm |
| Tải trọng hữu ích | ≥ 150 kg |
| Công suất động cơ | 5-7 kW (48 VDC) |
| Tốc độ tối đa | 15-20 km/h |
| Thời gian hoạt động | 4-6 giờ |
| Tầm điều khiển | 5-10 km (LOS) |
| Điều kiện biển | Cấp 3-4 |

### 1.2 Jobs-to-be-Done Analysis

**Core Functional Job:** Cung cấp mục tiêu cơ động cho huấn luyện bắn đạn thật trên biển

**Related Jobs:**
- Nghiệm thu vũ khí pháo hạm (12,7-76 mm)
- Huấn luyện sử dụng radar/FLIR trên tàu chiến
- Mô phỏng xuồng/tàu đổ bộ đối phương
- Đánh giá năng lực tác chiến đơn vị

**Consumption Chain Jobs:**
- Vận chuyển, triển khai hệ thống ra biển
- Bảo dưỡng, sửa chữa định kỳ
- Nạp nguồn, chuẩn bị trước nhiệm vụ
- Thu hồi sau bài bắn

### 1.3 Opportunity Algorithm - Kết quả Sơ bộ

```
OPPORTUNITY = Importance + MAX(Importance - Satisfaction, 0)
```

| Outcome | Imp | Sat | Opp | Priority |
|---------|-----|-----|-----|----------|
| Minimize risk to personnel during live-fire | 9.5 | 3.0 | **16.0** | ★★★★★ |
| Minimize target deployment time | 8.5 | 4.0 | **13.0** | ★★★★☆ |
| Maximize target signature realism (radar/IR/visual) | 9.0 | 5.0 | **13.0** | ★★★★☆ |
| Minimize operational cost per training session | 8.0 | 4.5 | **11.5** | ★★★★☆ |
| Maximize target maneuverability | 8.0 | 5.0 | **11.0** | ★★★☆☆ |
| Minimize foreign dependency | 8.5 | 3.5 | **13.5** | ★★★★☆ |

---

## 2. DIAGNOSIS - Chẩn đoán Hệ thống

### 2.1 Current State Analysis

#### 2.1.1 Bia truyền thống - Vấn đề

| Loại bia | Hạn chế | Hậu quả |
|----------|---------|---------|
| Phao gỗ | Không cơ động, không mô phỏng chữ ký | Không sát thực tế tác chiến |
| Bia vải căng | Tĩnh tại, phụ thuộc thời tiết | Giới hạn bài bắn |
| Can nhựa | Không radar signature, không IR | Không huấn luyện được hệ thống FLIR/radar |
| Bia kéo | Cần tàu kéo, nguy cơ an toàn | Tốn nhân lực, rủi ro cao |

#### 2.1.2 Giải pháp RCST nước ngoài - Rào cản

| Rào cản | Chi tiết | Impact |
|---------|----------|--------|
| Chi phí | Đắt gấp 3-5 lần nội địa hóa | Giới hạn số lượng mua |
| Phụ thuộc | Phụ tùng, bảo dưỡng phải nhập | Gián đoạn hoạt động |
| Tùy biến | Khó điều chỉnh theo bài bắn VN | Không linh hoạt |
| Bảo mật | Công nghệ nước ngoài | Rủi ro an ninh |

### 2.2 Job Map: Huấn luyện Bắn Mục tiêu Mặt nước

```
UNIVERSAL JOB MAP: "Conduct Live-Fire Naval Gunnery Training"

┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  DEFINE → PREPARE → DEPLOY → EXECUTE → MONITOR → RECOVER → EVALUATE         │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘

Step 1: DEFINE (Xác định yêu cầu bài bắn)
├── Outcomes: 
│   ○ Minimize ambiguity in target specifications
│   ○ Minimize time to select appropriate target type
└── Constraints: Điều lệnh bắn, TCKT trường bắn, điều kiện thời tiết

Step 2: PREPARE (Chuẩn bị hệ thống)
├── Outcomes:
│   ○ Minimize equipment setup time
│   ○ Minimize likelihood of pre-mission failure
│   ○ Minimize battery charging time
└── Constraints: Thời gian chuẩn bị, nguồn điện bến cảng

Step 3: DEPLOY (Triển khai mục tiêu)
├── Outcomes:
│   ○ Minimize time from shore to target area
│   ○ Minimize risk to deployment personnel
│   ○ Minimize target positioning errors
└── Constraints: Điều kiện biển, tầm thông tin liên lạc

Step 4: EXECUTE (Thực hiện bài bắn)
├── Outcomes:
│   ○ Maximize target signature realism
│   ○ Maximize target maneuverability
│   ○ Minimize target loss/damage
│   ○ Minimize likelihood of accidental hits on own forces
└── Constraints: Điều kiện biển, thời gian hoạt động, cự ly bắn

Step 5: MONITOR (Giám sát nhiệm vụ)
├── Outcomes:
│   ○ Minimize delay in target status updates
│   ○ Minimize likelihood of communication loss
│   ○ Increase accuracy of position tracking
└── Constraints: Tầm điều khiển, nhiễu điện từ

Step 6: RECOVER (Thu hồi)
├── Outcomes:
│   ○ Minimize recovery time
│   ○ Minimize damage during recovery
│   ○ Minimize likelihood of target loss
└── Constraints: Điều kiện biển, hư hỏng do bắn

Step 7: EVALUATE (Đánh giá)
├── Outcomes:
│   ○ Minimize time to generate mission reports
│   ○ Increase accuracy of hit assessment
│   ○ Minimize subjectivity in performance evaluation
└── Constraints: Dữ liệu log nhiệm vụ, video ghi hình
```

### 2.3 Constraint Analysis

#### 2.3.1 Physical Constraints

| Constraint | Description | Mitigation Strategy |
|------------|-------------|---------------------|
| Điều kiện biển | Cấp 3-4, sóng 0.5-2m | Thiết kế thân tàu ổn định, tự phục hồi khi lật |
| Tầm điều khiển | LOS 5-10 km | UHF + 2.4 GHz redundancy, waypoint tự động |
| Thời gian hoạt động | 4-6 giờ | LiFePO₄ 48V-200Ah, quản lý năng lượng tối ưu |
| Tốc độ kéo bia | 8-10 km/h | Động cơ 5-7 kW, thiết kế hydrodynamic |

#### 2.3.2 Regulatory Constraints

| Constraint | Description | Solution |
|------------|-------------|----------|
| Điều lệnh bắn | Quy định bài bắn theo TCKT | Profile nhiệm vụ linh hoạt |
| Tiêu chuẩn trường bắn | Cự ly 200-2500m | Waypoint programmable |
| An toàn | Vùng cấm, thủ tục bắn | E-stop, RTH, fail-safe |

#### 2.3.3 Environmental Constraints

| Constraint | Description | Solution |
|------------|-------------|----------|
| Nước biển | Ăn mòn, muối | Nhôm 5083, IP65/67, chống muối 96h |
| Nhiệt độ | 0-50°C | Linh kiện công nghiệp grade |
| Thời tiết | Mưa, gió cấp 5 | Kín nước, ổn định cao |

---

## 3. MODELING - Mô hình hóa

### 3.1 Outcome Statements - Cấu trúc Chuẩn

**Format:** [Direction] + [Performance Unit] + [Object of Control]

#### 3.1.1 Core Outcomes (50+ outcomes)

**EXECUTION Phase:**

| # | Outcome Statement | Importance |
|---|-------------------|------------|
| 1 | Minimize the time it takes to deploy target to operational area | 8.5 |
| 2 | Minimize the likelihood of target failure during mission | 9.0 |
| 3 | Minimize the delay between command and target response | 8.0 |
| 4 | Maximize the accuracy of target position tracking | 8.5 |
| 5 | Minimize the variance in target speed during maneuvers | 7.5 |
| 6 | Maximize the radar cross-section adjustability (10-100 m²) | 9.0 |
| 7 | Maximize the IR signature controllability (+30 to +80°C) | 9.0 |
| 8 | Minimize the likelihood of communication loss | 8.5 |
| 9 | Minimize the energy consumption per mission hour | 7.0 |
| 10 | Maximize the number of consecutive missions per charge | 7.5 |

**SAFETY Phase:**

| # | Outcome Statement | Importance |
|---|-------------------|------------|
| 11 | Minimize the risk to personnel during deployment | 9.5 |
| 12 | Minimize the likelihood of target entering restricted zones | 9.0 |
| 13 | Minimize the time to activate emergency stop | 9.5 |
| 14 | Minimize the likelihood of propeller injuries during recovery | 8.5 |
| 15 | Maximize the visibility of target for safety vessels | 8.0 |

**MAINTENANCE Phase:**

| # | Outcome Statement | Importance |
|---|-------------------|------------|
| 16 | Minimize the time to perform post-mission inspection | 7.5 |
| 17 | Minimize the frequency of hull corrosion repairs | 8.0 |
| 18 | Minimize the cost of consumables per mission | 7.5 |
| 19 | Minimize the time to replace damaged components | 8.0 |
| 20 | Maximize the mean time between failures (MTBF) | 8.5 |

### 3.2 Opportunity Landscape

```
                    OPPORTUNITY LANDSCAPE - BĐK-01
                    
        High      ┌─────────────────────────────────────────────────┐
                  │                                                 │
                  │    ★ Personnel safety (16.0)                   │
   Importance     │    ★ Foreign dependency (13.5)                 │
                  │    ★ Deployment time (13.0)                    │
                  │    ★ Signature realism (13.0)                  │
                  │    ○ Operational cost (11.5)                   │
                  │    ○ Maneuverability (11.0)                    │
                  │                                                 │
                  │         UNDERSERVED                            │
                  │         (High Importance,                       │
                  │          Low Satisfaction)                      │
                  │                                                 │
        Low       └─────────────────────────────────────────────────┘
                  Low                Satisfaction               High
```

### 3.3 Segment of Opportunity

#### 3.3.1 Segment A: "Gunnery Training Units" (~50%)

**Underserved Outcomes:**
- Maximize target maneuvering realism
- Minimize delay between command and response
- Maximize training throughput (sessions/day)

**Products Fit:** BĐK-01 + VN-NGS-001 (Naval Gunnery Simulator)

#### 3.3.2 Segment B: "Weapon Acceptance Units" (~30%)

**Underserved Outcomes:**
- Maximize radar signature accuracy (RCS)
- Maximize IR signature controllability
- Minimize measurement uncertainty

**Products Fit:** BĐK-01 + ISTU (Integrated Signature Target Unit)

#### 3.3.3 Segment C: "Anti-Landing Defense Units" (~20%)

**Underserved Outcomes:**
- Maximize scenario realism (multiple targets)
- Minimize coordination errors in combined arms
- Maximize engagement data accuracy

**Products Fit:** BĐK-01 fleet + VN-LVC-001 (Integration Gateway)

### 3.4 Customer Value Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CUSTOMER VALUE MODEL - BĐK-01                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  JOB: "Conduct Live-Fire Naval Gunnery Training"                            │
│                                                                              │
│  ┌─────────────────┐                                                         │
│  │ FUNCTIONAL      │                                                         │
│  │ OUTCOMES        │                                                         │
│  ├─────────────────┤                                                         │
│  │ ○ Target realism        → Mô phỏng xuồng đổ bộ chính xác               │
│  │ ○ Signature fidelity    → RCS 10-100 m², IR +30-80°C                    │
│  │ ○ Operational endurance → 4-6 giờ liên tục                              │
│  │ ○ Maneuverability       → Waypoint + manual + station-keeping           │
│  └─────────────────┘                                                         │
│                                                                              │
│  ┌─────────────────┐                                                         │
│  │ EMOTIONAL       │                                                         │
│  │ OUTCOMES        │                                                         │
│  ├─────────────────┤                                                         │
│  │ ○ Confidence    → "Biết huấn luyện sát thực tế"                         │
│  │ ○ Reduced fear  → "Không lo mất an toàn nhân sự"                        │
│  │ ○ Pride         → "Tự chủ công nghệ quốc phòng"                         │
│  └─────────────────┘                                                         │
│                                                                              │
│  ┌─────────────────┐                                                         │
│  │ SOCIAL          │                                                         │
│  │ OUTCOMES        │                                                         │
│  ├─────────────────┤                                                         │
│  │ ○ Recognition   → "Đơn vị hiện đại hóa thành công"                      │
│  │ ○ Leadership    → "Đi đầu áp dụng công nghệ mới"                        │
│  └─────────────────┘                                                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. INTERVENTION - Can thiệp

### 4.1 Opportunity Prioritization Matrix

| Opportunity | Score | Feasibility | Timeline | Priority |
|-------------|-------|-------------|----------|----------|
| Personnel safety (RCST vs manned) | 16.0 | High | Immediate | **P1** |
| Foreign dependency reduction | 13.5 | Medium | 12 months | **P2** |
| Signature realism (RCS/IR) | 13.0 | High | 6 months | **P3** |
| Deployment time | 13.0 | Medium | 6 months | **P4** |
| Operational cost | 11.5 | High | Ongoing | **P5** |

### 4.2 Focused Brainstorming - Top Opportunities

#### 4.2.1 Personnel Safety (Opp = 16.0)

**Problem:** Bia truyền thống yêu cầu nhân sự trên biển, tiềm ẩn nguy cơ

**Ideas:**

| # | Solution | Impact | Effort |
|---|----------|--------|--------|
| 1 | Fully autonomous deployment via waypoint | ★★★★★ | Medium |
| 2 | RTH (Return-to-Home) khi mất tín hiệu | ★★★★★ | Low |
| 3 | E-stop đa cấp (GCS + onboard) | ★★★★☆ | Low |
| 4 | Propeller guard during recovery | ★★★☆☆ | Low |
| 5 | High-visibility hull + SOLAS reflective tape | ★★★☆☆ | Low |

**Selected:** Ideas 1, 2, 3, 5 → Core design features

#### 4.2.2 Signature Realism (Opp = 13.0)

**Problem:** Bia truyền thống không mô phỏng được chữ ký radar/IR

**Ideas:**

| # | Solution | Impact | Effort |
|---|----------|--------|--------|
| 1 | Corner reflector array (adjustable 10-100 m²) | ★★★★★ | Medium |
| 2 | IR heater module (800W, +30-80°C) | ★★★★★ | Medium |
| 3 | Visual target 18/18b với đèn LED/strobe | ★★★★☆ | Low |
| 4 | Modular ISTU (Integrated Signature Target Unit) | ★★★★★ | High |
| 5 | Real-time RCS/IR control from GCS | ★★★★☆ | Medium |

**Selected:** Ideas 1, 2, 3, 5 → ISTU integration

### 4.3 Customer Scorecard - Concept Evaluation

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      CUSTOMER SCORECARD - BĐK-01                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Concept: Remote-Controlled Surface Target with Multi-Signature             │
│  Date: January 2026                                                          │
│                                                                              │
│  ┌────────────────────────────┬─────┬──────┬──────┬───────┬───────────┐    │
│  │ Outcome                    │ Imp │ Curr │ New  │ Δ Sat │ Value     │    │
│  │                            │     │ Sat  │ Sat  │       │ (Δ×Imp)   │    │
│  ├────────────────────────────┼─────┼──────┼──────┼───────┼───────────┤    │
│  │ Minimize personnel risk    │ 9.5 │ 3.0  │ 9.0  │ +6.0  │ +57.0     │    │
│  │ Maximize signature realism │ 9.0 │ 5.0  │ 8.5  │ +3.5  │ +31.5     │    │
│  │ Minimize deployment time   │ 8.5 │ 4.0  │ 7.5  │ +3.5  │ +29.8     │    │
│  │ Minimize foreign depend.   │ 8.5 │ 3.5  │ 8.0  │ +4.5  │ +38.3     │    │
│  │ Minimize operational cost  │ 8.0 │ 4.5  │ 7.5  │ +3.0  │ +24.0     │    │
│  ├────────────────────────────┴─────┴──────┴──────┴───────┼───────────┤    │
│  │                                      TOTAL VALUE       │ **180.6** │    │
│  └────────────────────────────────────────────────────────┴───────────┘    │
│                                                                              │
│  Decision: ☑ GO (Score > 100)                                               │
│                                                                              │
│  Notes: BĐK-01 addresses 5 high-opportunity outcomes with strong value      │
│         creation. Total Value = 180.6 indicates significant market fit.     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Feature-Outcome Mapping

| Feature | Outcomes Addressed | Value Created |
|---------|-------------------|---------------|
| Thân nhôm 5083, tự phục hồi khi lật | Safety, Durability | ★★★★★ |
| Điều khiển waypoint + RTH | Safety, Deployment time | ★★★★★ |
| Corner reflector 10-100 m² | Signature realism (radar) | ★★★★★ |
| IR heater 800W | Signature realism (thermal) | ★★★★★ |
| Tời điện 500 kg, cáp Dyneema 500m | Target towing capability | ★★★★☆ |
| LiFePO₄ 48V-200Ah | Operational endurance | ★★★★☆ |
| 2.4 GHz + UHF communication | Reliable control | ★★★★☆ |
| GCS với mission log | Evaluation, AAR | ★★★☆☆ |

---

## 5. REFLECTION - Phản ánh & Học hỏi

### 5.1 Validation Questions

| Question | Method | Timeline |
|----------|--------|----------|
| Did we correctly identify underserved outcomes? | Post-deployment survey | +6 months |
| Did features actually improve satisfaction? | A/B comparison with traditional targets | +12 months |
| What new jobs/outcomes emerged? | User interviews | Ongoing |
| How has value migrated since launch? | Quarterly opportunity scoring | Quarterly |

### 5.2 Assumption Testing

| Assumption | Test Method | Risk if Wrong |
|------------|-------------|---------------|
| RCS 10-100 m² đủ cho mô phỏng đa dạng tàu đổ bộ | Đo thực tế vs yêu cầu bài bắn | Medium |
| IR +30-80°C đủ cho FLIR detection | Test với FLIR trên tàu thực | High |
| 4-6 giờ đủ cho bài bắn tiêu chuẩn | Timeline thực tế bài bắn | Low |
| Biển cấp 3-4 là điều kiện phổ biến | Thống kê thời tiết trường bắn | Medium |

### 5.3 Learning Capture

**What Worked:**
- Remote control loại bỏ rủi ro nhân sự (validated)
- Multi-signature approach phục vụ đa dạng bài bắn
- Waypoint automation giảm tải GCS operator

**What to Improve:**
- Cần field test thực tế trước sản xuất loạt
- Tích hợp data logging với VN-LVC-001 cho AAR
- Xem xét tích hợp với UAV target (VN-UAV-001) cho combined arms

### 5.4 Value Migration Tracking

```
VALUE MIGRATION PROJECTION - 24 MONTHS

         Month 0        Month 12       Month 24
         (Launch)       (Maturity)     (Evolution)
         
Safety      ●●●●●●●●●●    ●●●●●○○○○○    ●●●○○○○○○○
            (16.0)        (12.0)        (9.0)
            Underserved → Appropriately served

Signature   ●●●●●●●●●○    ●●●●●●●●○○    ●●●●●●○○○○
            (13.0)        (11.0)        (9.0)
            Underserved → Emerging competition

Integration ●●●●●●○○○○    ●●●●●●●●○○    ●●●●●●●●●●
            (9.0)         (12.0)        (15.0)
            → NEW OPPORTUNITY EMERGING

Prediction: Integration with VN-LVC-001 will become highest opportunity
           by Month 24 as basic needs are satisfied.
```

---

## 6. SYSTEMS THINKING ANALYSIS

### 6.1 Stock-Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    STOCK-FLOW MODEL: NAVAL TRAINING SYSTEM                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         STOCKS (What accumulates)                            │
│                                                                              │
│   [Training Capability]    [Equipment Readiness]    [Crew Proficiency]      │
│          │                        │                        │                │
│          │ Inflow:                │ Inflow:                │ Inflow:        │
│          │ New equipment          │ Maintenance            │ Training       │
│          │ acquisition            │ completion             │ sessions       │
│          │                        │                        │                │
│          │ Outflow:               │ Outflow:               │ Outflow:       │
│          │ Obsolescence           │ Wear/damage            │ Skill decay    │
│          ▼                        ▼                        ▼                │
│                                                                              │
│   Current Level:              Current Level:           Current Level:       │
│   MEDIUM (gap exists)         LOW (trad. targets)      MEDIUM               │
│                                                                              │
│                          CRITICAL CONSTRAINTS                                │
│                                                                              │
│   ★ Equipment Readiness = CONSTRAINT                                        │
│     → Traditional targets limit training capability                         │
│     → BĐK-01 addresses this constraint directly                            │
│                                                                              │
│   ○ Training Capability = BUFFER                                            │
│     → Absorbs variation in exercise schedules                               │
│     → Currently undersized                                                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Feedback Loop Analysis

#### 6.2.1 Reinforcing Loops (R)

**R1: Training Effectiveness Spiral (Positive)**
```
Better Targets → More Realistic Training → Higher Proficiency
     ↑                                           │
     └─── More Training Demand ←──────────────────┘
     
Polarity: 0 negative links = REINFORCING
Dominance: MEDIUM (currently limited by target availability)
```

**R2: Technology Adoption Spiral (Positive)**
```
BĐK-01 Success → Increased Funding → More RCST Development
     ↑                                        │
     └─── Enhanced Capabilities ←──────────────┘
     
Polarity: 0 negative links = REINFORCING
Dominance: HIGH after successful FAT/SAT
```

#### 6.2.2 Balancing Loops (B)

**B1: Cost Constraint (Negative)**
```
More Training Sessions → Higher Operational Cost → Budget Limits
     ↑                                                 │
     └─── Reduced Training Frequency ←─────────────────┘
     
Polarity: 1 negative link = BALANCING
Dominance: MEDIUM (BĐK-01 reduces cost per session)
```

**B2: Equipment Wear (Negative)**
```
More Training Sessions → Equipment Wear → Maintenance Required
     ↑                                           │
     └─── Reduced Availability ←─────────────────┘
     
Polarity: 1 negative link = BALANCING
Dominance: LOW (modular design aids maintenance)
```

### 6.3 System Archetype Detection

**Archetype: SHIFTING THE BURDEN (Historical)**

```
                    ┌─────────────────────────┐
                    │ Training Gap            │
                    │ (Need realistic targets)│
                    └───────────┬─────────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
              ▼                                 ▼
    ┌─────────────────────────┐     ┌─────────────────────────┐
    │ Quick Fix:              │     │ Fundamental:            │
    │ Import foreign RCST     │     │ Develop indigenous      │
    │ (High cost, dependency) │     │ RCST (BĐK-01)          │
    └───────────┬─────────────┘     └───────────┬─────────────┘
              │                                 │
              │ (Side Effect)                   │ (Delayed Effect)
              ▼                                 ▼
    ┌─────────────────────────┐     ┌─────────────────────────┐
    │ Foreign dependency,     │     │ Self-sufficiency,       │
    │ technology lock-in,     │     │ customization,          │
    │ security risks          │     │ local capability        │
    └─────────────────────────┘     └─────────────────────────┘
    
Intervention: BĐK-01 project = FUNDAMENTAL SOLUTION
             Breaking dependence on imported systems
```

### 6.4 Leverage Points Analysis (Meadows L1-L12)

| Level | Leverage Point | BĐK-01 Application | Impact |
|-------|----------------|-------------------|--------|
| **L3** | Goals | "Tự chủ công nghệ" thay vì "mua sản phẩm tốt nhất" | ★★★★★ |
| **L5** | Rules | Tiêu chuẩn TCKT do VN xây dựng | ★★★★☆ |
| **L6** | Information | Real-time target data, mission logging | ★★★★☆ |
| **L7** | R-Loop Gain | Strengthen R1, R2 (training effectiveness, tech adoption) | ★★★★☆ |
| **L8** | B-Loop Strength | Weaken B1 (cost per session reduction) | ★★★☆☆ |
| **L10** | Structure | Nền tảng RCST cho các sản phẩm khác | ★★★★★ |
| **L11** | Buffers | Inventory of spare parts, multiple units | ★★★☆☆ |

### 6.5 Intervention Cascade

```
LEVERAGE CASCADE - BĐK-01 IMPLEMENTATION

PHASE 1: IMMEDIATE (Month 1-3)
├── L6 (Information): Real-time mission logging capability
│   → Enable AAR, training quality visibility
│   → Effort: LOW | Impact: MEDIUM
│
└── L10 (Structure): Modular ISTU architecture
    → Enable future upgrades without hull changes
    → Effort: MEDIUM | Impact: HIGH

PHASE 2: SHORT-TERM (Month 4-8)
├── L5 (Rules): Establish TCKT-BĐK-01 standard
│   → Define Vietnamese RCST specifications
│   → Effort: MEDIUM | Impact: HIGH
│
└── L7 (R-Loop): Accelerate R2 (technology adoption)
    → Showcase success → More funding → More development
    → Effort: LOW | Impact: VERY HIGH

PHASE 3: LONG-TERM (Month 9-18)
├── L3 (Goals): Redefine from "product" to "platform"
│   → BĐK-01 as foundation for RCST family
│   → Effort: HIGH | Impact: TRANSFORMATIVE
│
└── Integration: Connect to VN-LVC-001 ecosystem
    → Enable combined arms training scenarios
    → Effort: HIGH | Impact: VERY HIGH

EXPECTED CUMULATIVE IMPROVEMENT:
├── Phase 1: 25-30% (baseline capability)
├── Phase 2: 50-60% (standards + momentum)
└── Phase 3: 80%+ (platform transformation)
```

---

## 7. META-LEARNING FRAMEWORK

### 7.1 Chunking Breakdown - Phân rã Chủ đề

```
BĐK-01 KNOWLEDGE ARCHITECTURE

LEVEL 1: FOUNDATIONAL (Week 1-2)
├── 1.1 RCST Fundamentals
│   ├── What is RCST?
│   ├── Global RCST landscape
│   └── Key performance parameters
│
├── 1.2 Naval Target Training Basics
│   ├── Live-fire gunnery training
│   ├── Weapon acceptance testing
│   └── Safety requirements
│
└── 1.3 Vietnamese Context
    ├── Sea conditions (cấp 3-4)
    ├── Existing training infrastructure
    └── Regulatory framework

LEVEL 2: TECHNICAL (Week 3-6)
├── 2.1 Hull Design
│   ├── Aluminum 5083 properties
│   ├── Self-righting stability
│   └── Hydrodynamic considerations
│
├── 2.2 Propulsion System
│   ├── Electric outboard (5-7 kW)
│   ├── LiFePO₄ battery sizing
│   └── Range/endurance calculations
│
├── 2.3 Control System
│   ├── 2.4 GHz + UHF architecture
│   ├── Waypoint navigation
│   └── Fail-safe protocols
│
└── 2.4 Signature Systems (ISTU)
    ├── Radar (corner reflectors)
    ├── Infrared (heaters)
    └── Visual (targets, lights)

LEVEL 3: INTEGRATION (Week 7-10)
├── 3.1 GCS Design
│   ├── Manual + automatic control
│   ├── Mission planning software
│   └── Data logging/AAR
│
├── 3.2 Tow System
│   ├── Winch mechanics
│   ├── Dyneema cable properties
│   └── Tension monitoring
│
└── 3.3 Testing & Validation
    ├── FAT procedures
    ├── SAT/OT protocols
    └── Acceptance criteria
```

### 7.2 Interleaving Schedule - Lịch Học Xen kẽ

```
OPTIMAL LEARNING SCHEDULE - 8 WEEKS

Week 1-2: Foundation Interleaving
├── Day 1: RCST fundamentals (2h) + Hull basics (1h)
├── Day 2: Naval training context (2h) + Propulsion basics (1h)
├── Day 3: Vietnam specifics (2h) + Control basics (1h)
├── Day 4: Review all three + Quiz
└── Day 5: Spaced repetition of Week 1

Week 3-4: Technical Depth Interleaving
├── Day 1: Hull deep-dive (2h) + Control review (30min)
├── Day 2: Propulsion deep-dive (2h) + Hull review (30min)
├── Day 3: Control deep-dive (2h) + Propulsion review (30min)
├── Day 4: ISTU introduction (2h) + Integration quiz
└── Day 5: Cross-topic practice problems

Week 5-6: Integration Phase
├── Day 1: GCS design (2h) + ISTU integration (1h)
├── Day 2: Tow system (2h) + GCS practice (1h)
├── Day 3: Testing protocols (2h) + Full system review
├── Day 4: Integration exercises
└── Day 5: Mock FAT planning

Week 7-8: Mastery Phase
├── Day 1-2: Full system design exercise
├── Day 3-4: Failure mode analysis + solutions
└── Day 5: Comprehensive assessment
```

### 7.3 Feynman Technique - Giải thích Đơn giản

**Topic: Tại sao BĐK-01 cần điều khiển từ xa?**

> *Hãy tưởng tượng bạn muốn tập bắn bia ở ngoài biển. Trước đây, cần có người kéo bia hoặc đặt bia cố định - rất nguy hiểm và không giống tàu thật.*
>
> *BĐK-01 giống như một chiếc thuyền robot nhỏ. Bạn điều khiển nó từ xa như chơi game - cho nó chạy theo đường đã vẽ sẵn, hoặc điều khiển tay. Nó còn có thể "giả vờ" là tàu to bằng cách phát tín hiệu radar và nhiệt.*
>
> *Khi bắn thật, không ai ở gần nguy hiểm. Nếu mất sóng, nó tự biết đường quay về. Như vậy, lính tập bắn tàu đổ bộ giống thật mà không ai bị thương.*

**Gaps Identified:**
- Cần giải thích chi tiết hơn về RCS và IR signature
- Cần làm rõ cơ chế fail-safe RTH

### 7.4 Mnemonic Devices

**WAVES - Các yêu cầu chính của BĐK-01:**

| Letter | Component | Specification |
|--------|-----------|---------------|
| **W** | Watercraft (Thân tàu) | Nhôm 5083, 3.5m, tự phục hồi |
| **A** | Autonomy (Tự động) | Waypoint, RTH, fail-safe |
| **V** | Vision (Chữ ký thị giác) | Bia 18/18b, LED, strobe |
| **E** | Emission (Chữ ký phát) | RCS 10-100m², IR +30-80°C |
| **S** | Stamina (Sức bền) | 4-6 giờ, biển cấp 3-4 |

**ISTU - Integrated Signature Target Unit:**

| Letter | Component | Function |
|--------|-----------|----------|
| **I** | IR heater | +30 to +80°C vs ambient |
| **S** | Signature radar | Corner reflector 10-100 m² |
| **T** | Target visual | Bia số 18/18b |
| **U** | Unit control | GCS-controlled on/off |

### 7.5 Self-Assessment Rubric

```
SELF-ASSESSMENT: BĐK-01 DESIGN COMPETENCY

┌─────────────────────────────┬─────┬─────┬─────┬─────┬─────┐
│ Competency Area             │  1  │  2  │  3  │  4  │  5  │
├─────────────────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Hull Design Principles      │     │     │     │     │     │
│ ○ Stability calculations    │     │     │     │     │     │
│ ○ Material selection        │     │     │     │     │     │
│ ○ Corrosion prevention      │     │     │     │     │     │
├─────────────────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Propulsion System           │     │     │     │     │     │
│ ○ Power requirements        │     │     │     │     │     │
│ ○ Battery sizing            │     │     │     │     │     │
│ ○ Efficiency optimization   │     │     │     │     │     │
├─────────────────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Control Architecture        │     │     │     │     │     │
│ ○ Communication protocols   │     │     │     │     │     │
│ ○ Navigation algorithms     │     │     │     │     │     │
│ ○ Fail-safe design          │     │     │     │     │     │
├─────────────────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Signature Systems           │     │     │     │     │     │
│ ○ Radar cross-section       │     │     │     │     │     │
│ ○ IR signature management   │     │     │     │     │     │
│ ○ Visual target integration │     │     │     │     │     │
├─────────────────────────────┼─────┼─────┼─────┼─────┼─────┤
│ Systems Integration         │     │     │     │     │     │
│ ○ GCS interface design      │     │     │     │     │     │
│ ○ Tow system integration    │     │     │     │     │     │
│ ○ Testing methodology       │     │     │     │     │     │
└─────────────────────────────┴─────┴─────┴─────┴─────┴─────┘

Rating Scale:
1 = Cannot explain concept
2 = Basic understanding, need reference
3 = Can apply with guidance
4 = Can apply independently
5 = Can teach others, innovate
```

---

## 8. USE CASES & RECOMMENDATIONS

### 8.1 Use Case 1: Huấn luyện Bắn Pháo Hạm 76mm

**Scenario:** Huấn luyện kíp pháo AK-176 bắn mục tiêu di động

**Setup:**
- BĐK-01 tại cự ly 1.500-2.000m
- ISTU: RCS = 50 m² (mô phỏng xuồng đổ bộ)
- Tốc độ: 12 km/h, quỹ đạo zig-zag

**Job Steps:**
1. **PREPARE:** GCS lập trình waypoint, kiểm tra battery > 80%
2. **DEPLOY:** BĐK-01 di chuyển tự động đến vị trí start
3. **EXECUTE:** Kích hoạt RCS, bắt đầu quỹ đạo, pháo bắn
4. **MONITOR:** GCS theo dõi vị trí, điều chỉnh nếu cần
5. **EVALUATE:** Download mission log, đối chiếu kết quả bắn

**Outcomes Addressed:**
- ✅ Minimize personnel risk (no manned tow boat)
- ✅ Maximize target realism (RCS, maneuver)
- ✅ Minimize deployment time (autonomous transit)

**Recommendation:**
> Tích hợp BĐK-01 với VN-NGS-001 để huấn luyện dry-fire trước, sau đó chuyển sang live-fire với cùng scenario.

### 8.2 Use Case 2: Nghiệm thu Vũ khí 12.7mm RCWS

**Scenario:** Kiểm tra nghiệm thu súng máy 12.7mm điều khiển từ xa

**Setup:**
- BĐK-01 kéo bia vải (cự ly kéo 300m)
- Tốc độ kéo: 8 km/h
- Cự ly bắn: 500-1.000m

**Job Steps:**
1. **PREPARE:** Lắp bia vải vào móc kéo, cáp Dyneema
2. **DEPLOY:** BĐK-01 kéo bia đến vùng tác xạ
3. **EXECUTE:** Station-keeping mode, giữ tốc độ ổn định
4. **MONITOR:** Cảm biến sức căng cáp, cảnh báo quá tải
5. **RECOVER:** Thu hồi cáp, kiểm tra bia, đánh giá kết quả

**Outcomes Addressed:**
- ✅ Maximize towing stability (winch tension control)
- ✅ Minimize likelihood of cable break (Dyneema + overload warning)
- ✅ Minimize evaluation subjectivity (photo documentation)

**Recommendation:**
> Phát triển module đánh giá tự động (camera + AI) để đếm lỗ đạn trên bia sau bài bắn.

### 8.3 Use Case 3: Huấn luyện Tổng hợp Chống Đổ bộ

**Scenario:** Huấn luyện hiệp đồng nhiều đơn vị chống đổ bộ

**Setup:**
- Fleet 3x BĐK-01 (mô phỏng đội hình xuồng đổ bộ)
- ISTU full: RCS + IR + visual
- Tích hợp với VN-LVC-001

**Job Steps:**
1. **PLAN:** VN-CPX-001 thiết kế scenario, phân vai
2. **PREPARE:** Deploy 3 BĐK-01 theo đội hình
3. **EXECUTE:** Các đơn vị tác chiến: pháo hạm, ATGM, phòng không
4. **MONITOR:** VN-LVC-001 thu thập data real-time
5. **EVALUATE:** AAR tổng hợp từ LVC data

**Outcomes Addressed:**
- ✅ Maximize scenario realism (fleet formation)
- ✅ Minimize coordination errors (LVC integration)
- ✅ Maximize AAR completeness (centralized data)

**Recommendation:**
> Phát triển "BĐK-01 Fleet Controller" - module quản lý nhiều target từ một GCS, tích hợp hoàn toàn với VN-LVC-001 ecosystem.

### 8.4 Product Portfolio Integration

```
PORTFOLIO SYNERGY MAP

                    VN-LVC-001
                   (Integration Gateway)
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    VN-NGS-001      VN-CPX-001      VN-ASW-001
    (Naval Sim)     (Command Post)  (ASW Trainer)
         │               │               │
         │               │               │
         └───────────────┴───────────────┘
                         │
                         ▼
                    ┌─────────┐
                    │ BĐK-01  │
                    │ (RCST)  │
                    └─────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    VN-UAV-001      Target USV      Towed Target
    (UAV Target)    (Future)        (Sea Version)
    
INTEGRATION PRIORITIES:
1. BĐK-01 ↔ VN-NGS-001: Direct data link for gunnery training
2. BĐK-01 ↔ VN-LVC-001: Real-time position for AAR
3. BĐK-01 Fleet → VN-CPX-001: Multi-target scenarios
```

---

## 9. IMPLEMENTATION ROADMAP

### 9.1 D-M-I-R Cycle Timeline

```
D-M-I-R CYCLE - BĐK-01 PROJECT (18 MONTHS)

CYCLE 1: Foundation (Month 1-6)
├── DIAGNOSE (Month 1-2)
│   ├── Customer outcome research
│   ├── Competitor analysis
│   └── Constraint mapping
│
├── MODEL (Month 2-3)
│   ├── Opportunity algorithm calculation
│   ├── Segment identification
│   └── Customer value model
│
├── INTERVENE (Month 3-5)
│   ├── Design completion
│   ├── Prototype fabrication
│   └── FAT execution
│
└── REFLECT (Month 5-6)
    ├── FAT results analysis
    ├── Design iteration
    └── Lesson capture

CYCLE 2: Validation (Month 7-12)
├── DIAGNOSE: SAT/OT requirements refinement
├── MODEL: Field performance prediction
├── INTERVENE: Sea trials + acceptance
└── REFLECT: Production readiness assessment

CYCLE 3: Scale (Month 13-18)
├── DIAGNOSE: Series 0 feedback
├── MODEL: Market expansion opportunities
├── INTERVENE: VN-LVC-001 integration
└── REFLECT: Platform strategy formulation
```

### 9.2 Phased Deliverables

| Phase | Deliverable | Timeline | Success Metric |
|-------|-------------|----------|----------------|
| **Phase 1** | Yêu cầu TCKT được phê duyệt | Month 2 | Sign-off by Naval Technical Institute |
| **Phase 2** | Thiết kế chi tiết hoàn thành | Month 4 | Design review pass |
| **Phase 3** | Prototype FAT pass | Month 6 | 100% spec compliance |
| **Phase 4** | SAT/OT pass | Month 10 | Operational acceptance |
| **Phase 5** | Hồ sơ dấu "T" hoàn thiện | Month 12 | Ready for Series 0 |
| **Phase 6** | VN-LVC-001 integration | Month 18 | Live exercise validation |

### 9.3 Risk Mitigation Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| IR signature không đạt +80°C | Medium | High | Early thermal testing |
| Tầm điều khiển < 5km | Medium | High | UHF antenna optimization |
| Điều kiện biển cấp 4 không hoạt động | Low | Medium | Conservative spec (cấp 3 baseline) |
| ISTU integration delay | Medium | Medium | Modular interface design |
| Cost overrun | Medium | Low | Phased procurement |

### 9.4 Success Metrics Dashboard

```
BĐK-01 SUCCESS METRICS

TECHNICAL METRICS
├── Spec Compliance: ___/15 requirements passed
├── MTBF: ___ hours (target: >100h)
├── RCS Range: ___ to ___ m² (target: 10-100)
└── IR Signature: +___ to +___°C (target: +30 to +80)

OPERATIONAL METRICS
├── Deployment Time: ___ min (target: <30 min)
├── Recovery Time: ___ min (target: <20 min)
├── Missions per Charge: ___ (target: ≥2)
└── Operational Days per Year: ___ (target: >200)

CUSTOMER METRICS
├── Outcome Satisfaction Δ: +___% (target: +40%)
├── Training Throughput Δ: +___% (target: +30%)
├── Cost per Session Δ: -___% (target: -50%)
└── NPS Score: ___ (target: >40)

STRATEGIC METRICS
├── Foreign Dependency: ___% (target: <20%)
├── Technology Readiness Level: ___ (target: TRL 7)
├── Platform Reuse: ___% in next product (target: >60%)
└── Patent Applications: ___ (target: ≥2)
```

---

## 10. CONCLUSION

### 10.1 Key Findings

1. **Opportunity Concentration:** Personnel safety và foreign dependency là hai cơ hội lớn nhất (Opp > 13), BĐK-01 giải quyết trực tiếp cả hai.

2. **System Archetype:** Việc phát triển BĐK-01 phá vỡ archetype "Shifting the Burden" - chuyển từ phụ thuộc RCST nước ngoài sang tự chủ công nghệ.

3. **Leverage Points:** Can thiệp hiệu quả nhất ở L3 (Goal: "tự chủ công nghệ") và L10 (Structure: nền tảng RCST cho portfolio).

4. **Integration Opportunity:** BĐK-01 + VN-LVC-001 tạo ra giá trị tổng hợp cao hơn nhiều so với sản phẩm độc lập.

5. **Meta-Learning:** WAVES mnemonic và interleaving schedule giúp team nhanh chóng master kiến thức đa ngành (naval, automation, RF).

### 10.2 Critical Success Factors

| Factor | Description | Owner |
|--------|-------------|-------|
| Leadership Buy-in | Cam kết "tự chủ công nghệ" từ cấp cao | MOD/Navy |
| Technical Competency | Team có đủ năng lực thiết kế USV | Project Team |
| Customer Engagement | Liên tục validate với đơn vị huấn luyện | Product Owner |
| Integration Mindset | Thiết kế cho tích hợp từ đầu | Systems Architect |
| Iteration Speed | FAT/SAT nhanh, học hỏi liên tục | Project Manager |

### 10.3 Next Actions

**Immediate (This Week):**
1. Finalize TCKT document
2. Schedule kick-off with Naval Technical Institute
3. Initiate customer outcome interviews

**Short-term (Month 1):**
1. Complete hull design baseline
2. Procure propulsion system components
3. Design GCS interface mockup

**Medium-term (Month 3):**
1. Fabricate hull prototype
2. Integrate propulsion and control
3. Begin FAT preparation

---

## APPENDIX A: Related Products Reference

| Product Code | Name | Relevance to BĐK-01 |
|--------------|------|---------------------|
| VN-NGS-001 | Naval Gunnery Simulator | Pre-training before live-fire with BĐK-01 |
| VN-LVC-001 | LVC Integration Gateway | AAR and scenario integration |
| VN-CPX-001 | Command Post Exercise | Multi-target scenario management |
| VN-ASW-001 | Anti-Submarine Warfare Trainer | Potential sonar target variant |
| VN-UAV-001 | UAV Operator Training | Combined arms with aerial targets |

---

## APPENDIX B: Glossary

| Term | Definition (Vietnamese) | Definition (English) |
|------|------------------------|---------------------|
| RCST | Bia mục tiêu mặt nước điều khiển từ xa | Remote-Controlled Surface Target |
| ISTU | Cụm mục tiêu tích hợp chữ ký | Integrated Signature Target Unit |
| RCS | Tiết diện radar | Radar Cross-Section |
| RTH | Quay về điểm xuất phát | Return-to-Home |
| LOS | Đường ngắm thẳng | Line-of-Sight |
| GCS | Trạm điều khiển mặt đất | Ground Control Station |
| FAT | Thử nghiệm tại xưởng | Factory Acceptance Test |
| SAT | Thử nghiệm tại bến/biển | Site Acceptance Test |
| OT | Thử nghiệm vận hành | Operational Test |
| TCKT | Tính năng kỹ chiến thuật | Technical-Tactical Specifications |

---

## APPENDIX C: ODI Templates for BĐK-01

### C.1 Outcome Statement Template

```
For the job step "[STEP NAME]"...

Outcome Statement:
[DIRECTION: Minimize/Maximize/Increase] the [UNIT: time/likelihood/accuracy/number] 
it takes to [ACTION] the [OBJECT].

Example:
"Minimize the time it takes to deploy the target to the operational area"
```

### C.2 Customer Interview Guide - BĐK-01

```
INTRODUCTION (5 min)
"Chúng tôi đang tìm hiểu cách các đồng chí thực hiện huấn luyện bắn mục tiêu 
mặt nước - không phải để bán sản phẩm, mà để thiết kế sản phẩm đáp ứng 
đúng nhu cầu thực tế."

SECTION 1: JOB MAPPING (15 min)
• Mô tả quy trình chuẩn bị và triển khai bia mục tiêu hiện tại?
• Các bước chính từ đầu đến cuối?
• Có nhiệm vụ nào khác cần hoàn thành trong quá trình này?

SECTION 2: OUTCOME DISCOVERY (30 min)
Với mỗi bước, hỏi:
• Điều gì khiến bước này khó khăn hoặc mất thời gian?
• Điều gì có thể xảy ra sai sót?
• Làm sao biết bước này đã thực hiện tốt?
• "Hoàn hảo" sẽ như thế nào?

SECTION 3: CONSTRAINTS (10 min)
• Điều gì ngăn cản huấn luyện trong một số tình huống?
• Có quy định nào hạn chế lựa chọn?
• Điều kiện môi trường ảnh hưởng như thế nào?

CLOSE
• Tóm tắt outcomes đã ghi nhận
• Xác nhận với người được phỏng vấn
• Hỏi: "Tôi có bỏ sót điều gì không?"
```

---

**Document Version:** 1.0

**Framework Integration:** D-M-I-R × ODI × Systems Thinking × Meta-Learning

**Application Context:** BĐK-01 Remote-Controlled Surface Target Development

**Generated:** January 2026

---

*"Innovation failure is not a creativity problem—it's a knowledge problem. By systematically discovering what naval training operators are trying to achieve, not what they think they want, BĐK-01 delivers true value."*

— Adapted from Anthony W. Ulwick
