# Requirements Generator - Skill Tạo Danh Sách Yêu Cầu Thiết Kế

## Mục đích (Purpose)
Skill này giúp tạo Requirements List (Danh sách Yêu Cầu) hoàn chỉnh, có cấu trúc và tuân thủ phương pháp thiết kế hệ thống trong "Engineering Design: A Systematic Approach" của Pahl & Beitz, đặc biệt tối ưu cho các sản phẩm công nghệ quốc phòng và an ninh.

## Khi nào sử dụng skill này (Trigger Patterns)
Sử dụng skill này khi người dùng:
- Đề cập đến "requirements", "yêu cầu thiết kế", "specification"
- Yêu cầu "tạo requirements list", "phân tích yêu cầu"
- Bắt đầu một dự án thiết kế mới
- Cần làm rõ Task Clarification (Phase 1 của systematic design)
- Nhắc đến các từ khóa: "demands", "wishes", "constraints", "design specification"
- Làm việc với các sản phẩm: UAV, radar, weapon systems, armor, surveillance, communication systems, cybersecurity products

## Đầu vào (Inputs)
Skill cần thu thập các thông tin sau:

### 1. Thông tin cơ bản về sản phẩm
- **Tên sản phẩm**: (VD: UAV trinh sát tầm trung)
- **Mô tả ngắn gọn**: Mục đích chính và bối cảnh sử dụng
- **Lĩnh vực**: Quốc phòng/An ninh/Dân dụng/Hàng kép
- **Người dùng cuối**: Lực lượng nào sẽ sử dụng

### 2. Bối cảnh vận hành (Operational Context)
- **Môi trường tác chiến**: Sa mạc/Rừng núi/Đô thị/Biển/Đa địa hình
- **Điều kiện khí hậu**: Nhiệt độ, độ ẩm, mưa, bụi bặm
- **Thời gian nhiệm vụ**: Liên tục/Đợt ngắn/Triển khai dài hạn
- **Khoảng cách tác chiến**: Tầm gần/Tầm trung/Tầm xa

### 3. Mục tiêu chiến lược
- **Nhiệm vụ chính**: Trinh sát/Tấn công/Phòng thủ/Hỗ trợ/Đa nhiệm
- **Ưu tiên hàng đầu**: Stealth/Firepower/Mobility/Survivability/Cost
- **Đối thủ/Mối đe dọa**: Loại vũ khí/Hệ thống đối phương
- **Lợi thế mong muốn**: Tốc độ/Tầm xa/Chính xác/Bất ngờ

### 4. Ràng buộc
- **Ngân sách**: Mục tiêu chi phí (nếu có)
- **Thời gian**: Deadline phát triển
- **Nguồn lực**: Công nghệ sẵn có, nhà thầu, cơ sở sản xuất
- **Tiêu chuẩn bắt buộc**: MIL-STD, NATO STANAG, TCVN, QCVN

## Quy trình xử lý (Process)

### Bước 1: Phân tích bối cảnh
- Xác định rõ operational environment
- Liệt kê các stakeholders (người sử dụng, chỉ huy, kỹ sư bảo trì, logistic)
- Xác định life cycle phases (R&D, Production, Deployment, Operation, Maintenance, Disposal)

### Bước 2: Thu thập yêu cầu từ các nguồn
- **Người dùng**: Ergonomics, ease of use, training requirements
- **Kỹ thuật**: Performance, reliability, accuracy
- **Logistic**: Maintainability, transportability, spare parts
- **Sản xuất**: Manufacturability, cost, materials availability
- **Pháp lý**: Standards compliance, safety, environmental
- **Chiến lược**: Interoperability, upgradeability, modularity

### Bước 3: Phân loại yêu cầu
Chia thành 2 loại chính:

**DEMANDS (D) - Yêu cầu bắt buộc:**
- Không thể thương lượng
- Phải đáp ứng 100%, nếu không sản phẩm bị loại
- VD: "PHẢI chịu được nhiệt độ -40°C đến +60°C"
- VD: "PHẢI tuân thủ MIL-STD-810G"

**WISHES (W) - Yêu cầu mong muốn:**
- Có thể thương lượng
- Tối ưu hóa theo khả năng
- VD: "MONG MUỐN trọng lượng dưới 5kg (càng nhẹ càng tốt)"
- VD: "MONG MUỐN chi phí dưới $100,000/unit"

### Bước 4: Tổ chức theo nhóm chức năng
Sắp xếp requirements theo các category chuẩn:

1. **Geometry/Kinematics** (Hình học/Chuyển động)
2. **Forces/Loads** (Lực/Tải trọng)
3. **Energy/Power** (Năng lượng/Công suất)
4. **Material/Manufacturing** (Vật liệu/Sản xuất)
5. **Signals/Control** (Tín hiệu/Điều khiển)
6. **Safety/Survivability** (An toàn/Khả năng sống sót)
7. **Ergonomics/Human Factors** (Công thái học)
8. **Production/Quality** (Sản xuất/Chất lượng)
9. **Assembly/Transport** (Lắp ráp/Vận chuyển)
10. **Operation/Maintenance** (Vận hành/Bảo trì)
11. **Costs/Schedule** (Chi phí/Tiến độ)
12. **Standards/Regulations** (Tiêu chuẩn/Quy định)

### Bước 5: Định lượng hóa yêu cầu
Mỗi yêu cầu PHẢI có:
- **Metric đo lường rõ ràng**: Không dùng "tốt", "cao", "mạnh" mà phải là số cụ thể
- **Điều kiện kiểm tra**: Môi trường, phương pháp test
- **Acceptance criteria**: Giá trị pass/fail

### Bước 6: Xác định mối quan hệ và xung đột
- Highlight các yêu cầu có thể xung đột (VD: Stealth vs Payload)
- Xác định trade-offs cần thiết
- Đề xuất thứ tự ưu tiên khi có xung đột

### Bước 7: Tham chiếu tiêu chuẩn
Đối với quốc phòng/an ninh, LUÔN tham chiếu:
- **Quốc tế**: MIL-STD-810 (Environmental), MIL-STD-461 (EMC), MIL-STD-882 (System Safety), NATO STANAGs
- **Việt Nam**: TCVN (Tiêu chuẩn Việt Nam), QCVN (Quy chuẩn), Quy định của Bộ Quốc phòng
- **Ngành**: Aviation (DO-178C), Automotive (ISO 26262), Cyber (IEC 62443)

### Bước 8: Validation
Kiểm tra Requirements List theo checklist:
- [ ] Mỗi requirement đều có D hoặc W
- [ ] Mỗi requirement đều measurable (có số, có đơn vị)
- [ ] Không có requirement mơ hồ ("tốt", "đủ", "ổn")
- [ ] Có reference standards
- [ ] Đã xem xét toàn bộ life cycle
- [ ] Đã có input từ tất cả stakeholders
- [ ] Đã xác định conflicts và trade-offs

## Định dạng đầu ra (Output Format)

Tạo một bảng Requirements List với cấu trúc sau:

```
╔════════════════════════════════════════════════════════════════════════════╗
║                        REQUIREMENTS LIST                                    ║
║                     [TÊN SẢN PHẨM]                                         ║
╠════════════════════════════════════════════════════════════════════════════╣
║ Dự án: [Tên dự án]                    Ngày: [DD/MM/YYYY]                  ║
║ Người soạn: [Tên]                      Phiên bản: [v1.0]                   ║
║ Khách hàng: [Tên đơn vị]               Phê duyệt: [Tên]                    ║
╚════════════════════════════════════════════════════════════════════════════╝

┌────────────────────────────────────────────────────────────────────────────┐
│ 1. GEOMETRY / KINEMATICS                                                   │
├─────┬──────────────────────────────────────┬───────────┬──────────────────┤
│ ID  │ Requirement                          │ D/W       │ Specifications   │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│ 1.1 │ Kích thước tổng thể                  │ D         │ L×W×H ≤          │
│     │                                      │           │ 2.5×1.8×0.8 m    │
│     │ [Lý do: Phù hợp container vận       │           │ Kiểm tra: Đo     │
│     │ chuyển tiêu chuẩn 20ft]             │           │ trực tiếp        │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│ 1.2 │ Khả năng gấp gọn                     │ W         │ Thời gian gấp    │
│     │                                      │           │ < 5 phút         │
│     │ [Lý do: Triển khai nhanh]           │           │ Không dụng cụ    │
└─────┴──────────────────────────────────────┴───────────┴──────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ 2. FORCES / LOADS                                                          │
├─────┬──────────────────────────────────────┬───────────┬──────────────────┤
│ 2.1 │ Tải trọng tối đa                     │ D         │ ≥ 15 kg          │
│     │ (Payload capacity)                   │           │ @ max range      │
│     │ [Lý do: Phải mang sensor + ammo]    │           │ Test: Load test  │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│ 2.2 │ Chịu được lực va đập                 │ D         │ Theo MIL-STD-    │
│     │                                      │           │ 810G Method 516  │
│     │ [Lý do: Landing thô]                │           │ Shock: 40G, 11ms │
└─────┴──────────────────────────────────────┴───────────┴──────────────────┘

[... tiếp tục cho tất cả 12 categories ...]

┌────────────────────────────────────────────────────────────────────────────┐
│ 6. SAFETY / SURVIVABILITY                                                  │
├─────┬──────────────────────────────────────┬───────────┬──────────────────┤
│ 6.1 │ Khả năng chống đạn nhỏ               │ D         │ NIJ Level III    │
│     │                                      │           │ 7.62×51mm NATO   │
│     │ [Lý do: Bảo vệ thiết bị quan trọng] │           │ @ 100m           │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│ 6.2 │ EMI/EMP hardening                    │ D         │ MIL-STD-461G     │
│     │                                      │           │ CE102, CS114,    │
│     │ [Lý do: Chiến tranh điện tử]        │           │ RS103            │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│ 6.3 │ Self-destruct mechanism              │ W         │ Kích hoạt từ xa  │
│     │                                      │           │ hoặc tự động khi │
│     │ [Lý do: Tránh rơi vào tay địch]     │           │ mất liên lạc >3h │
└─────┴──────────────────────────────────────┴───────────┴──────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ 12. STANDARDS / REGULATIONS                                                │
├─────┬──────────────────────────────────────┬───────────┬──────────────────┤
│12.1 │ Tuân thủ tiêu chuẩn môi trường       │ D         │ MIL-STD-810H     │
│     │                                      │           │ All methods      │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│12.2 │ Tuân thủ an toàn hệ thống            │ D         │ MIL-STD-882E     │
│     │                                      │           │ System Safety    │
├─────┼──────────────────────────────────────┼───────────┼──────────────────┤
│12.3 │ Tiêu chuẩn Việt Nam                  │ D         │ TCVN xxx:20xx    │
│     │                                      │           │ QCVN xx:20xx/BQP │
└─────┴──────────────────────────────────────┴───────────┴──────────────────┘
```

### Sau bảng chính, thêm các phần:

**A. SUMMARY STATISTICS**
```
Tổng số requirements: [X]
  - Demands (D): [Y] ([Z]%)
  - Wishes (W): [Y] ([Z]%)

Phân bố theo category:
  - Geometry/Kinematics: [X] requirements
  - Forces/Loads: [X] requirements
  [...]

Tiêu chuẩn tham chiếu: [Liệt kê tất cả standards]
```

**B. REQUIREMENTS RELATIONSHIPS MATRIX**
```
Conflict Matrix: Các yêu cầu xung đột
┌─────────┬─────────┬──────────────────────────────┐
│ Req ID  │ Req ID  │ Nature of Conflict           │
├─────────┼─────────┼──────────────────────────────┤
│ 1.1     │ 2.1     │ Size vs Payload capacity     │
│ 6.1     │ 11.1    │ Armor weight vs Cost         │
│ 3.2     │ 6.3     │ Endurance vs Stealth (IR)    │
└─────────┴─────────┴──────────────────────────────┘

Recommended Trade-offs:
1. [Conflict ID] → Giải pháp: [...]
2. [Conflict ID] → Giải pháp: [...]
```

**C. VERIFICATION PLAN**
```
┌─────────┬──────────────────────┬─────────────────────┬─────────────┐
│ Req ID  │ Verification Method  │ Test Procedure      │ Responsible │
├─────────┼──────────────────────┼─────────────────────┼─────────────┤
│ 1.1     │ Inspection           │ Measure with CMM    │ QC Team     │
│ 2.1     │ Test                 │ Load test on fixture│ Test Lab    │
│ 3.1     │ Analysis             │ CFD simulation      │ Eng Team    │
│ 6.1     │ Test                 │ Ballistic test      │ Test Range  │
└─────────┴──────────────────────┴─────────────────────┴─────────────┘
```

**D. PRIORITIZATION (for Wishes)**
```
High Priority Wishes (if budget allows):
1. [Req ID] - [Brief description]
2. [Req ID] - [Brief description]

Medium Priority:
[...]

Low Priority:
[...]
```

**E. NOTES & ASSUMPTIONS**
```
1. Giả định về môi trường tác chiến: [...]
2. Công nghệ sẵn có: [...]
3. Nguồn nhân lực: [...]
4. Rủi ro đã xác định: [...]
```

## Ví dụ sử dụng (Examples)

### Example 1: UAV Trinh Sát Tầm Trung

**Input từ người dùng:**
```
"Tôi cần tạo requirements list cho một UAV trinh sát tầm trung, 
dùng cho trinh sát biên giới và hỗ trợ tác chiến bộ binh. 
Phải bay được ít nhất 4 giờ, tầm 50km, có camera ngày/đêm."
```

**Claude xử lý:**
1. Hỏi thêm: Môi trường? Đối thủ? Ngân sách? Standards?
2. Thu thập đầy đủ thông tin
3. Tạo Requirements List đầy đủ 12 categories
4. Output như format trên

### Example 2: Hệ Thống Giáp Phòng Đạn Xe Chiến Đấu

**Input:**
```
"Thiết kế thêm module giáp reactive cho xe bọc thép hiện tại, 
chống được RPG-7 và đạn xuyên giáp 30mm."
```

**Claude xử lý:**
1. Focus vào requirements: Ballistic protection, Weight constraints, Retrofitability
2. Tạo chi tiết cho Forces/Loads, Material, Safety, Standards
3. Highlight conflicts: Weight vs Protection
4. Suggest trade-offs

### Example 3: Hệ Thống Mã Hóa Thông Tin

**Input:**
```
"Cần một thiết bị mã hóa thông tin liên lạc cấp quân đoàn, 
portable, chống nghe lén."
```

**Claude xử lý:**
1. Focus: Signals/Control, Cybersecurity, Portability
2. Standards: FIPS 140-3, IEC 62443, MIL-STD-188
3. Đề xuất encryption algorithms, key management
4. Ergonomics cho field use

## Best Practices

### DO (NÊN):
✅ Luôn phân biệt rõ Demands (D) và Wishes (W)
✅ Mỗi requirement phải có số đo cụ thể (metric)
✅ Tham chiếu standards đầy đủ
✅ Xem xét toàn bộ life cycle
✅ Include verification method cho mỗi requirement
✅ Identify conflicts sớm
✅ Liên kết requirements với operational scenarios
✅ Dùng ngôn ngữ rõ ràng, không mơ hồ

### DON'T (KHÔNG NÊN):
❌ Dùng từ mơ hồ: "tốt", "cao", "mạnh", "ổn", "đủ"
❌ Requirements không đo được: "phải đẹp", "dễ dùng"
❌ Quên stakeholders: chỉ focus kỹ thuật, bỏ qua user/maintenance
❌ Bỏ qua standards/regulations
❌ Copy-paste requirements từ sản phẩm khác mà không điều chỉnh
❌ Quá nhiều Demands, quá ít Wishes (hoặc ngược lại)
❌ Không xác định verification method
❌ Bỏ qua environmental conditions

## Checklist hoàn thiện

Trước khi output Requirements List, kiểm tra:

- [ ] Đã có đầy đủ 12 categories?
- [ ] Mỗi category có ít nhất 2-3 requirements?
- [ ] Tỷ lệ D/W hợp lý (khoảng 50/50 đến 70/30)?
- [ ] Mỗi requirement có ID duy nhất?
- [ ] Tất cả đều có specifications đo lường được?
- [ ] Đã tham chiếu standards phù hợp?
- [ ] Đã có conflict matrix?
- [ ] Đã có verification plan?
- [ ] Đã có prioritization cho Wishes?
- [ ] Đã có notes & assumptions?
- [ ] Đã review với domain knowledge (quốc phòng/an ninh)?
- [ ] Feasibility check: Tất cả requirements đều realistic?

## Advanced Features

### 1. Integration với QFD (Quality Function Deployment)
Sau khi có Requirements List, có thể:
- Map requirements to functions (House of Quality)
- Identify critical requirements (high importance, low satisfaction)
- Prioritize development efforts

### 2. Requirements Traceability
- Mỗi requirement được trace through design phases
- Link requirements → functions → components → parts
- Ensure nothing is missed, nothing is over-designed

### 3. Dynamic Requirements Management
- Version control cho Requirements List
- Change management process
- Impact analysis khi có requirement thay đổi

### 4. Risk-based Requirements
- Identify high-risk requirements early
- Allocate more resources to mitigate risks
- Contingency planning

## Output Artifacts

Skill tạo ra các artifacts sau:

1. **requirements_list.md**: Bảng Requirements List chính (như format trên)
2. **conflict_matrix.md**: Chi tiết các xung đột và giải pháp
3. **verification_plan.md**: Kế hoạch kiểm chứng đầy đủ
4. **standards_checklist.md**: Danh sách standards cần tuân thủ
5. **assumptions_log.md**: Các giả định và rationale

## Customization Options

User có thể customize:
- **Level of detail**: Basic/Standard/Detailed
- **Industry focus**: Defense/Security/Dual-use/Civil
- **Standards region**: International/Vietnam/NATO/US
- **Output format**: Markdown Table/Excel/PDF/Word
- **Language**: Vietnamese/English/Bilingual

## Continuous Improvement

Sau mỗi lần sử dụng:
- Thu thập feedback: Requirements có đầy đủ không?
- Lessons learned: Requirement nào bị miss?
- Update templates based on real projects
- Expand standards database
- Improve conflict detection algorithms

---

## Kết luận

Requirements Generator là skill nền tảng cho toàn bộ quá trình systematic design. Requirements List tốt = 50% thành công của dự án. Skill này đảm bảo:
- ✅ Completeness (Đầy đủ)
- ✅ Clarity (Rõ ràng)
- ✅ Measurability (Đo lường được)
- ✅ Traceability (Truy xuất được)
- ✅ Compliance (Tuân thủ standards)
- ✅ Practicality (Khả thi)

Khi master được skill này, bạn đã có nền tảng vững chắc để tiến vào các phase tiếp theo của Engineering Design process.
