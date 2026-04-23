# Pahl & Beitz 7.5.5 Design to Minimise Wear - Meta-Learning Analysis (Part 1)

## Document Information
- **Source**: Pahl & Beitz "Engineering Design: A Systematic Approach" - Section 7.5.5
- **Phase**: Embodiment Design (Phase 3)
- **Topic**: Design Guidelines for Wear Minimization
- **Framework**: Engineering Design Mastery Framework (EDMF) - 13 Skills
- **Application Context**: Vietnamese Defense Training Systems

---

## Table of Contents (Full Document)
1. [Skill 1: Feynman Explanation](#skill-1-engineering-feynman) - Part 1
2. [Skill 2: Cognitive Chunking](#skill-2-engineering-chunking-breakdown) - Part 1
3. [Skill 3: Design Review Criteria](#skill-3-engineering-design-review-mentor) - Part 1
4. [Skill 4: Interleaving Schedule](#skill-4-engineering-interleaving-scheduler) - Part 2
5. [Skill 5: Progress Tracking](#skill-5-engineering-project-progress-tracker) - Part 2
6. [Skill 6: Concept Evaluation Integration](#skill-6-engineering-concept-evaluation-assistant) - Part 2
7. [Skill 7: Mnemonic Creation](#skill-7-engineering-mnemonic-creator) - Part 2
8. [Skill 8: Learning Architecture](#skill-8-engineering-learning-architecture-builder) - Part 2
9. [Skill 9: Systems Mapping](#skill-9-engineering-systems-mapper) - Part 3
10. [Skill 10: Focus Session Optimization](#skill-10-engineering-focus-session-optimizer) - Part 3
11. [Skill 11: Self-Assessment Rubrics](#skill-11-engineering-self-assessment-rubric-generator) - Part 3
12. [Skill 12: Targeted Drills](#skill-12-engineering-targeted-drill-master) - Part 3
13. [Skill 13: Learning Journal](#skill-13-engineering-learning-journal-keeper) - Part 3
14. [Defense System Applications](#defense-system-applications) - Part 4
15. [Vietnamese Context Adaptations](#vietnamese-context-adaptations) - Part 4

---

## Skill 1: Engineering Feynman

### 🎓 THIẾT KẾ GIẢM MÀI MÒN (Design to Minimise Wear) - Giải Thích Đơn Giản

### Giải Thích 60 Giây

**Mài mòn (wear)** xảy ra khi hai bề mặt cọ xát nhau dưới tải trọng, giống như việc đế giày mòn dần khi đi trên đường nhựa. Có 4 cơ chế mài mòn chính: dính (như hai miếng kẹo dính nhau rồi bóc ra), mài (như giấy ráp mài gỗ), nứt bề mặt (như mặt đường nứt do xe đè nhiều), và hóa học (như sắt gỉ nhanh hơn khi bôi trơn kém).

Thiết kế giảm mài mòn có hai cách tiếp cận: **biện pháp sơ cấp** (loại bỏ nguyên nhân - tạo ma sát ướt thay vì khô) và **biện pháp thứ cấp** (giảm tốc độ mài mòn - giảm áp suất, vận tốc, hệ số ma sát).

### 🏠 Ví Dụ Hàng Ngày

**Phanh xe đạp:**
- **Mài mòn dính**: Má phanh dính vào vành khi phanh gấp → microwelds hình thành và bị phá vỡ
- **Mài mòn mài**: Bụi cát kẹt giữa má phanh và vành → tạo rãnh trên vành
- **Giải pháp sơ cấp**: Giữ vành sạch, dùng phanh đĩa với dầu thủy lực
- **Giải pháp thứ cấp**: Dùng vật liệu má phanh mềm hơn, giảm lực phanh

**Bản lề cửa:**
- Bản lề khô kêu cọt kẹt = ma sát khô → mài mòn nhanh
- Nhỏ dầu = tạo màng bôi trơn → ma sát ướt → mài mòn giảm 100 lần

### 🎯 Ví Dụ Quốc Phòng

**12.7mm Remote Controlled Weapon Station (RCWS):**

| Vị trí mài mòn | Cơ chế | Biện pháp thiết kế |
|:---|:---|:---|
| Trục quay tháp pháo | Dính + Mài | Ổ bi con lăn, mỡ MIL-PRF-10924 |
| Cơ cấu nạp đạn | Mài (vỏ đạn đồng) | Lớp phủ cứng TiN, thay thế dễ dàng |
| Cam điều khiển | Nứt bề mặt | Thép tôi cảm ứng, biên dạng cam tối ưu |
| Khớp giữ nòng | Hóa học (khói thuốc súng) | Thép không gỉ 17-4 PH, bôi trơn khô |

**Công thức mài mòn:**
```
Wear coefficient = (Sliding displacement × Wear volume) / Normal force
```

**Friction Power per Unit Area:**
```
P/A = p × νR × μ

Trong đó:
- p = Áp suất bề mặt (MPa)
- νR = Vận tốc tương đối (m/s)  
- μ = Hệ số ma sát
```

### 💡 Tại Sao Quan Trọng Cho Hệ Thống Quân Sự?

1. **Độ tin cậy chiến đấu**: Mài mòn quá mức → kẹt súng trong chiến đấu → mất khả năng tác chiến
2. **Chi phí vòng đời**: RCWS với MTBF 500h (mài mòn cao) vs 2000h (thiết kế tốt) → chênh lệch 4× chi phí bảo trì
3. **Khả năng sẵn sàng**: Hệ thống mòn nhanh → downtime nhiều → giảm operational availability

### ✅ Kiểm Tra Nhanh

❓ **Câu hỏi tình huống 1:**
Cơ cấu nạp đạn của Machine Gun Mount bị mòn nhanh sau 5000 viên bắn. Quan sát thấy rãnh song song theo hướng chuyển động. Đây là loại mài mòn gì và biện pháp sơ cấp nào có thể áp dụng?

<details>
<summary>Xem đáp án</summary>

**Loại mài mòn**: Abrasive wear (mài) - vì có rãnh song song theo hướng chuyển động

**Biện pháp sơ cấp:**
- Lọc mảnh đồng từ vỏ đạn ra khỏi khu vực tiếp xúc
- Thiết kế để vỏ đạn không cọ trực tiếp vào bề mặt quan trọng
- Dùng hệ thống thổi khí để loại bỏ mảnh vụn

</details>

❓ **Câu hỏi tình huống 2:**
Ổ trục quay của Target USV turret xuất hiện các vết lõm nhỏ (pitting) và vảy kim loại bong ra sau 200 giờ vận hành. Đây là cơ chế mài mòn gì?

<details>
<summary>Xem đáp án</summary>

**Cơ chế**: Surface disruption wear (mài mòn nứt bề mặt) - do ứng suất xoay chiều lặp đi lặp lại trong lớp bề mặt, gây ra nứt, pitting, và các mảnh kim loại bong ra.

**Giải thích**: Ổ bi chịu tải chu kỳ khi tháp pháo quay, ứng suất Hertz lặp lại dẫn đến fatigue bề mặt.

</details>

### ❌ Sai Lầm Phổ Biến

| Quan niệm sai | Quan niệm đúng |
|:---|:---|
| "Bôi trơn nhiều = không mài mòn" | Bôi trơn giảm ma sát nhưng không loại bỏ hoàn toàn; dầu/mỡ cũng có thể mang mảnh mài mòn |
| "Vật liệu cứng hơn = mòn ít hơn" | Không phải lúc nào cũng đúng; vật liệu cứng có thể gây mài mòn mạnh cho đối tác mềm hơn |
| "Mài mòn chỉ xảy ra khi ma sát cao" | Mài mòn hóa học có thể xảy ra ngay cả khi ma sát thấp nếu có phản ứng hóa học |
| "Chỉ cần thay chi tiết mòn" | Thiết kế tốt phải ngăn ngừa hoặc giảm mài mòn, không chỉ chấp nhận nó |

### 🔗 Bước Tiếp Theo

**Nếu chưa hiểu**: Ôn lại Section 7.4.1 về Force Transmission và 7.5.4 về Design Against Corrosion (có liên quan đến tribo-chemical wear)

**Nếu đã hiểu**: Tiếp tục Section 7.5.6 Design for Ergonomics hoặc thực hành phân tích mài mòn trên một hệ thống quân sự cụ thể

---

## Skill 2: Engineering Chunking Breakdown

### VDI 2225 Wear Analysis - Chunked Learning Plan

### Overview
- **Total Chunks**: 6
- **Total Time**: 5.5-6.5 hours
- **Prerequisites**: Basic materials science, tribology concepts, embodiment design fundamentals
- **Learning Goal**: Apply systematic wear analysis and mitigation to defense training systems

### Learning Roadmap

```
Chunk 1 (Mechanisms)     →  Chunk 2 (Primary Measures)  →  Chunk 3 (Secondary Measures)
   [1 hour]                      [1 hour]                      [1 hour]
        ↓                             ↓                              ↓
Chunk 6 (Integration)    ←   Chunk 5 (Defense Cases)    ←   Chunk 4 (Analysis Methods)
   [1 hour]                      [1 hour]                      [45 min]
```

---

### Chunk 1: Wear Mechanisms (Cơ Chế Mài Mòn)
**Duration**: 60 min  
**Difficulty**: ⭐⭐  
**Prerequisites**: Basic materials science

#### Core Concepts (5-7 items)
1. Định nghĩa mài mòn theo DIN 50320
2. Adhesive wear (Mài mòn dính) - microwelds
3. Abrasive wear (Mài mòn mài) - micromachining
4. Surface disruption wear (Nứt bề mặt) - fatigue
5. Tribo-chemical wear (Mài mòn hóa học) - reaction products
6. Wear consequences: shorter life, reduced performance, higher losses

#### Explanation

**Adhesive wear** xảy ra khi hai bề mặt tiếp xúc dưới tải cao, tạo ra các liên kết nguyên tử cục bộ (microwelds) tại các đỉnh nhấp nhô bề mặt. Khi các bề mặt chuyển động tương đối, các microwelds bị phá vỡ, tạo ra các mảnh mài mòn và làm hư hỏng bề mặt. Đây là cơ chế phổ biến trong các chi tiết máy chịu tải trượt như bạc đạn, piston-cylinder.

**Abrasive wear** xảy ra khi các hạt cứng (trong bề mặt hoặc môi trường) cắt gọt vi mô bề mặt đối tác mềm hơn. Kết quả là các rãnh và vết xước theo hướng chuyển động. Mài mòn nhẹ có thể cải thiện độ phẳng bề mặt; mài mòn mạnh gây hư hỏng không chấp nhận được.

**Surface disruption wear** do ứng suất cơ học xoay chiều trong lớp bề mặt. Sau nhiều chu kỳ tải, vật liệu xuất hiện nứt, pitting, và các mảnh bong ra. Đây là cơ chế chủ yếu trong rolling contact như ổ bi, bánh răng.

**Tribo-chemical wear** liên quan đến phản ứng hóa học giữa hai bề mặt, chất bôi trơn, và môi trường, được kích hoạt bởi nhiệt do ma sát. Sản phẩm có thể là các vùng cứng hóa hoặc các mảnh mài mòn, làm tăng tốc độ mài mòn.

#### Defense Application Example

**Small Arms Simulator - Bolt Carrier Group:**

| Cơ chế | Vị trí | Triệu chứng | Hậu quả tác chiến |
|:---|:---|:---|:---|
| Adhesive | Bolt lugs vs barrel extension | Galling, seizure | Bolt không đóng hoàn toàn |
| Abrasive | Bolt face vs cartridge base | Scoring, headspace wear | Mất độ kín, ép đạn kém |
| Surface disruption | Cam pin track | Pitting, spalling | Cycle unreliable |
| Tribo-chemical | Gas tube interior | Scale, fouling | Gas impingement reduced |

#### Practice Exercise

**Bài tập 1.1**: Liệt kê 3 vị trí mài mòn chính trong 12.7mm RCWS và xác định cơ chế mài mòn tương ứng cho mỗi vị trí.

**Bài tập 1.2**: Target UAV có bộ truyền động servo bị hư sau 100 giờ bay. Phân tích xem cơ chế nào có thể gây ra vấn đề này.

#### Self-Check Questions
- Có thể giải thích sự khác biệt giữa adhesive và abrasive wear không?
- Có thể nhận dạng loại mài mòn từ quan sát bề mặt không?
- Hiểu tại sao wear particles có thể gây ra positive feedback loop (mòn nhiều hơn)?

#### Connection to Next Chunk
Chunk 1 dạy NHẬN DẠNG cơ chế mài mòn. Chunk 2 sẽ dạy NGĂN NGỪA bằng biện pháp sơ cấp.

---

### Chunk 2: Primary Measures (Biện Pháp Sơ Cấp)
**Duration**: 60 min  
**Difficulty**: ⭐⭐⭐  
**Prerequisites**: Chunk 1

#### Core Concepts
1. Tribological system approach (material, geometry, surface, lubricant)
2. Fluid friction vs dry/mixed friction
3. Elastohydrodynamic lubrication (EHD)
4. Hydrostatic/magnetic bearing solutions
5. Elastic joints for small movements
6. Design to eliminate wear causes

#### Explanation

**Biện pháp sơ cấp** tập trung vào loại bỏ NGUYÊN NHÂN gây mài mòn, không chỉ giảm tốc độ mài mòn. Cách hiệu quả nhất là chuyển từ ma sát khô/hỗn hợp sang ma sát ướt (fluid friction).

**Elastohydrodynamic (EHD) lubrication** tạo màng dầu đủ dày để tách hoàn toàn hai bề mặt nhờ: độ nhớt dầu phù hợp, tốc độ trượt đủ cao, và tải không quá lớn. Khi đạt EHD, hệ số ma sát giảm từ 0.1-0.5 (khô) xuống còn 0.001-0.01 (ướt), và mài mòn gần như bằng không.

**Hydrostatic bearing** cấp dầu có áp suất từ bên ngoài để tạo màng bôi trơn, không phụ thuộc vào tốc độ. Phù hợp cho tải nặng, tốc độ thấp như bàn quay CNC, tháp pháo xe tăng.

**Magnetic bearing** sử dụng lực điện từ để nâng trục mà không tiếp xúc vật lý. Không mài mòn, không cần bôi trơn, nhưng đắt và phức tạp. Dùng trong flywheel energy storage, turbo phân tử.

**Elastic joints** (cao su, màng kim loại) hấp thụ chuyển động nhỏ mà không có ma sát trượt. Thích hợp cho vibration isolation, compensating joints.

#### Defense Application Example

**Machine Gun Mount System - Bearing Selection:**

| Phương án | Ưu điểm | Nhược điểm | Phù hợp khi |
|:---|:---|:---|:---|
| Ổ trượt với mỡ | Đơn giản, rẻ, chịu shock | Mòn khi không bôi trơn | Low duty cycle |
| Ổ bi với mỡ | Ít ma sát, tuổi thọ cao | Nhạy với bụi, nước | Moderate environment |
| Ổ bi kín | Sealed, low maintenance | Không thay mỡ được | Harsh environment |
| Hydrostatic | Zero wear at low speed | Cần hydraulic system | Heavy weapon mounts |
| Composite bushing | Self-lubricating, tolerant | Lower load capacity | Field maintainable |

#### Practice Exercise

**Bài tập 2.1**: UAV Catapult có cơ cấu phóng chịu tải shock cao trong 0.3 giây. Đề xuất 2 giải pháp sơ cấp để giảm mài mòn tại điểm tiếp xúc shuttle-rail.

**Bài tập 2.2**: Target USV turret rotation mechanism hiện dùng bronze bushing và mòn nhanh do nước biển xâm nhập. Đề xuất thiết kế thay thế với biện pháp sơ cấp.

#### Self-Check Questions
- Khi nào EHD lubrication không khả thi?
- Elastic joints có thể thay thế sliding joints trong trường hợp nào?
- Tại sao hydrostatic bearing đắt hơn nhưng đáng đầu tư cho một số ứng dụng?

#### Connection to Next Chunk
Khi biện pháp sơ cấp không khả thi (do ràng buộc thiết kế hoặc vận hành), Chunk 3 sẽ dạy biện pháp thứ cấp để GIẢM TỐC ĐỘ mài mòn.

---

### Chunk 3: Secondary Measures (Biện Pháp Thứ Cấp)
**Duration**: 60 min  
**Difficulty**: ⭐⭐⭐  
**Prerequisites**: Chunk 1, 2

#### Core Concepts
1. Friction power equation: P = p × νR × μ
2. Reducing surface pressure (p)
3. Reducing relative velocity (νR)
4. Reducing friction coefficient (μ)
5. Material pairing selection
6. Wear coefficient definition and application
7. Wear particle management

#### Explanation

Khi không thể loại bỏ hoàn toàn ma sát khô/hỗn hợp, cần giảm **friction power per unit area** để giảm tốc độ mài mòn:

**P/A = p × νR × μ**

**Giảm p (áp suất bề mặt):**
- Tăng diện tích tiếp xúc
- Phân tải đều hơn qua nhiều bề mặt
- Sử dụng vật liệu có modulus thấp hơn để tăng diện tích tiếp xúc thực

**Giảm νR (vận tốc tương đối):**
- Thay đổi kinematics (ví dụ: từ sliding sang rolling)
- Giảm stroke length hoặc frequency
- Chia nhỏ chuyển động

**Giảm μ (hệ số ma sát):**
- Chọn cặp vật liệu có μ thấp
- Áp dụng bôi trơn khô (PTFE, MoS2, graphite)
- Xử lý bề mặt (nitriding, DLC coating)

**Wear coefficient** cho phép dự đoán tuổi thọ:
```
k = (s × V) / N

Trong đó:
- k = wear coefficient (mm³/N·m)
- s = sliding distance (m)
- V = wear volume (mm³)
- N = normal force (N)
```

#### Defense Application Example

**LOMAH System - Projectile Path Sensor Wear:**

| Vấn đề | Nguyên nhân | Biện pháp thứ cấp |
|:---|:---|:---|
| Acoustic sensor membrane mòn | Mảnh vụn từ projectile impact | Lọc khí bảo vệ, replaceable membrane |
| Optical window scratched | Sand abrasion | Hard coating (sapphire), air curtain |
| Mounting bracket loosening | Vibration fretting | Thread-locking compound, elastic mount |
| Cable connector wear | Repeated connect/disconnect | Gold plating, limit insertion cycles |

**Wear life calculation example:**

```
Cho: 12.7mm RCWS cam follower
- Contact pressure p = 800 MPa
- Relative velocity νR = 0.5 m/s  
- Friction coefficient μ = 0.15
- Wear coefficient k = 1×10⁻⁸ mm³/N·m

Friction power/area = 800 × 0.5 × 0.15 = 60 MW/m²

Wear rate = k × N × νR = 1×10⁻⁸ × 10000N × 0.5 = 5×10⁻⁵ mm³/s

Allowable wear = 0.5 mm × 100 mm² = 50 mm³

Service life = 50 / (5×10⁻⁵) = 1,000,000 seconds ≈ 278 hours
```

#### Practice Exercise

**Bài tập 3.1**: Tính tuổi thọ của Training Grenade fuze striker với: p=500 MPa, νR=10 mm/s, μ=0.3, k=5×10⁻⁹ mm³/N·m, allowable wear volume=2 mm³.

**Bài tập 3.2**: Tethered Drone cable reel hiện có μ=0.25. Nếu áp dụng PTFE coating giảm μ xuống 0.08, tuổi thọ tăng bao nhiêu lần (giả sử các yếu tố khác không đổi)?

#### Self-Check Questions
- Yếu tố nào trong p, νR, μ thường dễ thay đổi nhất qua thiết kế?
- Wear coefficient phụ thuộc vào những yếu tố gì?
- Tại sao việc lọc mảnh mài mòn khỏi fluid flow lại quan trọng?

#### Connection to Next Chunk
Chunk 3 cung cấp công cụ tính toán. Chunk 4 sẽ dạy phương pháp phân tích có hệ thống để áp dụng vào thiết kế thực tế.

---

### Chunk 4: Analysis Methods (Phương Pháp Phân Tích)
**Duration**: 45 min  
**Difficulty**: ⭐⭐⭐⭐  
**Prerequisites**: Chunk 1, 2, 3

#### Core Concepts
1. Tribological system identification
2. Wear mode prediction from operating conditions
3. Design checklist for wear-critical components
4. Division of tasks principle
5. Wear indicators and maintenance planning
6. Failure mode linkage (wear → functional failure)

#### Explanation

**Tribological system** bao gồm 4 thành phần: material pair, working geometry, surface characteristics, và lubricant/environment. Phân tích mài mòn phải xem xét cả hệ thống, không chỉ từng thành phần riêng lẻ.

**Wear mode prediction** dựa trên operating conditions:

| Điều kiện | Cơ chế có khả năng nhất |
|:---|:---|
| High load, low speed, dry | Adhesive |
| Hard particles present | Abrasive |
| Cyclic loading, rolling contact | Surface disruption |
| High temperature, reactive environment | Tribo-chemical |
| Mixed conditions | Multiple mechanisms simultaneously |

**Division of tasks principle** (từ Section 7.4.2): Tách biệt chức năng chịu mài mòn ra thành chi tiết riêng, dễ thay thế và kinh tế.

Ví dụ:
- Replaceable bushings thay vì integral bearing surfaces
- Hardened wear plates trên structural members
- Sacrificial coatings trên critical surfaces

**Wear indicators** cho phép đo tốc độ mài mòn trong vận hành:
- Visual markers (groove depth gauges)
- Electrical indicators (resistance change when worn through)
- Oil analysis (particle count, composition)
- Vibration monitoring (bearing wear signature)

#### Practice Exercise

**Bài tập 4.1**: Thực hiện tribological system analysis cho V-SMASH marker pen mechanism (bắn đạn sơn vào mục tiêu).

**Bài tập 4.2**: Áp dụng division of tasks principle để thiết kế lại Target UAV landing gear shock absorber strut.

#### Self-Check Questions
- Có thể xác định tribological system đầy đủ không?
- Khi nào nên dùng wear indicators thay vì preventive replacement?
- Division of tasks principle có trade-off gì?

#### Connection to Next Chunk
Chunk 4 dạy phương pháp phân tích. Chunk 5 áp dụng vào case studies cụ thể từ hệ thống quốc phòng.

---

## Skill 3: Engineering Design Review Mentor

### Design Review Criteria for Wear-Critical Components

#### Phase 3 (Embodiment Design) - Wear Assessment Rubric

| Criterion | Weight | 0-2 (Needs Work) | 3-5 (Developing) | 6-8 (Proficient) | 9-10 (Exemplary) |
|:---|:---|:---|:---|:---|:---|
| **Wear mechanism identification** | 0.20 | No analysis | One mechanism identified | Multiple mechanisms analyzed | Complete tribological system analysis |
| **Primary measure consideration** | 0.20 | Not considered | Mentioned but not applied | One primary measure implemented | Multiple primary measures optimized |
| **Secondary measure quantification** | 0.15 | No calculations | Qualitative only | p×νR×μ calculated | Full wear life prediction |
| **Division of tasks application** | 0.15 | Wear zones not identified | Zones identified but integral | Replaceable parts designed | Optimized for field maintenance |
| **Wear indicator provision** | 0.10 | None | Inspection ports only | Visual indicators | Automatic monitoring |
| **Material pair justification** | 0.10 | Arbitrary selection | Based on similar systems | Wear coefficient considered | Tested pair with data |
| **Integration with DfR/DfM/DfMt** | 0.10 | No integration | Mentioned | Coordinated | Optimized across DfX |

#### Defense System Checklist

**For Weapon Systems (RCWS, Machine Gun Mount):**
- [ ] Ammunition feed path analyzed for abrasive wear from cartridge cases
- [ ] Bolt carrier/receiver interface analyzed for adhesive wear
- [ ] Recoil mechanism analyzed for cyclic fatigue wear
- [ ] Gas system analyzed for tribo-chemical wear
- [ ] Firing rate impact on wear life calculated
- [ ] Cleaning/lubrication intervals specified

**For Naval Systems (Target USV, Towed Target):**
- [ ] Seawater exposure considered for all tribological pairs
- [ ] Galvanic corrosion + wear interaction addressed
- [ ] Salt spray testing requirements defined
- [ ] Marine growth on wear surfaces addressed
- [ ] Emergency operation without lubrication considered

**For Aerial Systems (Target UAV, Tethered Drone):**
- [ ] Temperature range impact on lubricant viscosity
- [ ] Altitude effects on sealing/lubrication
- [ ] Vibration-induced fretting identified and addressed
- [ ] Weight penalty of wear countermeasures accepted
- [ ] Crash damage vs wear failure modes prioritized

**For Training Systems (Small Arms Simulator, LOMAH):**
- [ ] Cycle count requirements translated to wear life
- [ ] Consumable vs durable wear parts distinguished
- [ ] Field replacement procedures verified
- [ ] Training environment conditions (indoor/outdoor) considered
- [ ] Misuse/abuse scenarios analyzed

#### Common Issues and Fixes

| Issue | Severity | Fix |
|:---|:---|:---|
| No wear analysis performed | ❌ Critical | Conduct tribological system analysis before proceeding |
| Only secondary measures considered | ⚠️ Major | Re-evaluate for primary measures first |
| Wear life < requirement | ❌ Critical | Redesign bearing/contact system or change materials |
| No field maintenance plan | ⚠️ Major | Define inspection intervals and replacement procedures |
| Arbitrary material selection | ⚠️ Major | Research wear coefficients, reference similar systems |
| Wear zones not accessible | ⚠️ Major | Apply division of tasks, ensure maintenance access |

---

*Continue to Part 2 for Skills 4-8...*
