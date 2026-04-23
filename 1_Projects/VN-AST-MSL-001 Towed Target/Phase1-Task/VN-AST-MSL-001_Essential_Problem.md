---
created: 2026-03-08
updated: 2026-03-08
type: essential-problem
status: approved
document-id: VN-AST-MSL-001-EP-001
version: "1.0"
tags: [#type/project, #status/active]
---

# 5-STEP PAHL-BEITZ ABSTRACTION — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Status** | Approved by CEO |

---

## Step 1: ELIMINATE — Loại bỏ sở thích cá nhân và giả định ngầm

Removed:
- ~~HDPE là vật liệu hull~~ → chưa chọn vật liệu
- ~~Corner reflector là giải pháp RCS duy nhất~~ → có thể Luneburg lens, flat plate array
- ~~Hình tròn là hình dạng tối ưu~~ → chưa chọn topology
- ~~6 pontoon outrigger~~ → số lượng và cấu hình chưa xác định
- ~~Single-point mooring~~ → multi-point cũng khả thi
- ~~Cột mast trung tâm~~ → nhiều cách mount reflector

## Step 2: OMIT — Tách riêng những gì không thuộc core function

Omitted (Wish — không ảnh hưởng core function):
- R-A03: RCS stability ≤ 6 dB
- R-B08: Fatigue life 500 cycles
- R-C04: Self-righting
- R-G04: Assembly ≤ 4 hrs
- Tất cả W2 requirements

38 Demands còn lại định nghĩa product phải làm gì.

## Step 3: TRANSFORM — Chuyển định lượng → định tính

| Định lượng | Định tính |
|-----------|-----------|
| RCS ≥ 1,000 m² X-band | Phản xạ radar tương đương tàu chiến cỡ nhỏ |
| Sea State 3-4 operational | Hoạt động trong điều kiện biển thông thường |
| Sea State 5-6 survival | Sống sót trong bão |
| ≤ 2,000M VND | Chi phí chấp nhận được cho ngân sách quốc phòng VN |
| ≥ 60% nội địa | Chế tạo chủ yếu trong nước |
| ≤ 8 tuần chế tạo | Sản xuất nhanh, không cần nhà máy lớn |
| Modular, xe tải vận chuyển | Di chuyển được bằng phương tiện phổ thông |
| GPS + đèn SOLAS | Nhìn thấy và theo dõi được |
| Không chìm khi thủng | Sống sót dù hư hỏng cục bộ |
| Neo trong dòng + gió | Đứng yên tại vị trí định sẵn |

## Step 4: GENERALIZE — Khái quát hoá bài toán

> Đây cơ bản là bài toán: **"Tạo ra một vật thể nổi trên biển có đặc tính radar kiểm soát được, giữ được vị trí, sống sót trong điều kiện khắc nghiệt, và có thể triển khai/thu hồi bằng phương tiện phổ thông."**

Lớp bài toán rộng hơn: **Mục tiêu huấn luyện hải quân — mô phỏng signature của mục tiêu thực tại môi trường biển.**

## Step 5: FORMULATE — Bài Toán Bản Chất

```
┌────────────────────────────────────────────────────────────────┐
│ BÀI TOÁN BẢN CHẤT (Essential Problem):                        │
│                                                                │
│ "Trình bày một mục tiêu radar có RCS kiểm soát được tại      │
│  vị trí cố định trên biển, có khả năng triển khai và thu      │
│  hồi bằng phương tiện thông thường, sống sót trong điều       │
│  kiện Biển Đông."                                              │
│                                                                │
│ English: "Present a controllable-RCS radar target at a         │
│ fixed sea position, deployable and recoverable by standard     │
│ means, survivable in South China Sea conditions."              │
└────────────────────────────────────────────────────────────────┘
```

### 5 Chức Năng Cốt Lõi

1. **Present RCS** — phản xạ radar kiểm soát được
2. **Hold position** — giữ vị trí cố định trên biển
3. **Stay afloat** — nổi + ổn định + sống sót
4. **Be deployable** — triển khai bằng phương tiện phổ thông
5. **Be visible** — nhận dạng + an toàn hàng hải

---

*Essential Problem v1.0 | VN-AST-MSL-001 | HELIX Phase 1*
