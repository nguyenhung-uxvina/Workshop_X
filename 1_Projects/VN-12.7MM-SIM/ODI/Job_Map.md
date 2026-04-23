---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-12.7MM-SIM
skill: forge-job-map
---

# Job Map — VN-12.7MM-SIM (HONG HAI)

## Job Statement

**Core Job:** Huấn luyện xạ thủ 12.7mm đạt chuẩn bắn chính xác trên bệ vũ khí tàu trong mọi điều kiện biển

**Related Jobs:**
- Đánh giá năng lực xạ thủ trước khi giao nhiệm vụ thực chiến
- Duy trì kỹ năng xạ kích giữa các đợt bắn đạn thật
- Huấn luyện chiến thuật kíp tàu phối hợp bắn mục tiêu trên biển
- Chứng nhận năng lực xạ thủ theo tiêu chuẩn quân đội (qualification)
- Phục hồi kỹ năng sau thời gian dài không bắn (re-qualification)

**Emotional Jobs:** Tự tin khi vận hành vũ khí thật, safe-to-fail trong luyện tập, không bị "sốc giật" lần đầu bắn thật
**Social Jobs:** Đạt chuẩn trước đồng đội, chỉ huy tin tưởng giao nhiệm vụ, không bị đánh giá thấp vì "chỉ tập trên máy"

## Customer Segments

| Segment | Vai trò | Quan tâm chính | Buyer ≠ User? |
|---------|---------|----------------|---------------|
| Xạ thủ (Gunner) | Operator | Cảm giác thật (giật + kháng quay), feedback nhanh | **USER** — interview ưu tiên |
| Huấn luyện viên (Instructor) | Supervisor | Chẩn đoán lỗi chính xác, quản lý nhiều học viên, báo cáo tự động | **USER** — interview ưu tiên |
| Chỉ huy tàu/đơn vị (CO) | Decision-maker | Sẵn sàng chiến đấu, tối ưu giờ HL, tin cậy kết quả mô phỏng | Decision-maker |
| Cơ quan Mua sắm | Buyer | Chi phí, nội địa hóa, bảo hành, compliance | **BUYER ≠ USER** — specs khác jobs |

**⚠️ Gotcha (ODI):** Buyer viết spec "≥70% nội địa hóa." Operator nói "tôi cần cảm giác giật giống thật." Hai ngôn ngữ khác nhau. Interview operators, không phải buyers.

## Consumption Chain (trước và sau Core Job)

```
TRƯỚC:     Mua sắm → Lắp đặt → Đào tạo HLV dùng mô phỏng → [CORE JOB 8 bước]
SAU:       Bắn đạn thật (validation) → Chứng nhận → Triển khai tác chiến → Re-qual
                                           ↑
                                   Mô phỏng giảm 50% đạn thật
                                   nhưng KHÔNG thay thế 100%
```

## 8-Step Job Map

### Step 1: DEFINE — Xác định nhiệm vụ huấn luyện
- Trigger: Lịch huấn luyện định kỳ hoặc chuẩn bị nhiệm vụ
- "Nhận lệnh huấn luyện bắn 12.7mm cho kíp X, đạt chuẩn Y"
- "Xác định bài bắn: đối hải/đối không/hỗn hợp"
- Pain: Không rõ xạ thủ nào yếu kỹ năng gì → train lặp lại

### Step 2: LOCATE — Tìm và chuẩn bị phương tiện
- "Tìm phòng huấn luyện/thiết bị mô phỏng có sẵn"
- "Kiểm tra tình trạng thiết bị, phụ kiện, PC"
- "Chuẩn bị bài bắn, kịch bản, dữ liệu mục tiêu"
- Pain: Thiết bị lưu ở kho xa, không rõ tình trạng kỹ thuật

### Step 3: PREPARE — Lắp đặt và khởi động
- "Vận chuyển thiết bị đến vị trí (nếu di động)"
- "Kết nối điện, màn hình, âm thanh"
- "Khởi động hệ thống, chọn bài bắn"
- "Calibrate cảm biến góc, kiểm tra phanh"
- Pain: Setup phức tạp, cần nhiều người, mất thời gian

### Step 4: CONFIRM — Xác nhận sẵn sàng
- "BIST (Built-In Self Test) tự động"
- "Test quay ngang/dọc, kiểm tra cảm giác phanh (Channel A)"
- "Test giật 1 phát (Channel B): áp suất OK, solenoid phản hồi"
- "Instructor kiểm tra hình ảnh, âm thanh, tính điểm"
- Pain: Không biết thiết bị có chính xác không trước khi bắt đầu
- Pain (v2): Áp suất khí nén thay đổi → lực giật khác nhau giữa các buổi → xạ thủ mất tin tưởng

### Step 5: EXECUTE — Thực hiện bài bắn mô phỏng

**Two-Channel Decomposition** (Galaxy: [[Two-Channel Law]]):

Step 5 chứa HAI bài toán huấn luyện độc lập:

| Sub-step | Kỹ năng | Kênh vật lý | Công nghệ | Pain hiện tại |
|----------|---------|-------------|-----------|--------------|
| 5A: Bám mục tiêu | Target tracking (quay ngang/dọc) | **Channel A: Mount Resistance** | Magnetic brake (SS3) | Quay quá nhẹ → không rèn cơ tay/vai → giật mình khi bắn thật |
| 5B: Khai hỏa | Burst control, engagement discipline | **Channel B: Firing Vibration** | Pneumatic recoil (SS10 RC-A) | Không có giật → xạ thủ giữ cò quá lâu → "training scars" khi bắn thật |
| 5C: Nhận feedback | Đánh giá kết quả mỗi loạt | **Software** | SS4 ballistics + SS5 visual | Hit/miss mismatch → mất tin tưởng mô phỏng |

- "Xạ thủ ngồi vào vị trí, nhận briefing"
- "Quay tìm mục tiêu (5A: cảm nhận kháng quay thật), bám sát"
- "Khai hỏa (5B: cảm nhận giật từng phát, burst 3-5 viên)"
- "Nhìn đạn bay, đánh giá trúng/trật (5C: ballistics + visual)"
- "Instructor theo dõi real-time trên màn hình riêng"

**Pain points (enriched):**
- Cảm giác không thật → xạ thủ không nghiêm túc → "mô phỏng là trò chơi"
- Mục tiêu quá dễ/khó → không match trình độ
- **Giật sai (10-50% thay vì ≥70% hoặc 0)** → hình thành phản xạ bù sai → [[Training Scars]] khi bắn thật (**nghiêm trọng hơn không giật**)
- Không phân biệt được lỗi tracking (5A) vs lỗi burst (5B) → HLV sửa sai lệch
- **Competitor gap:** ACME GAR ($15K+) giải quyết 5B nhưng KHÔNG giải quyết 5A. Chỉ VN-12.7MM-SIM giải quyết CẢ HAI kênh.

### Step 6: MONITOR — Theo dõi trong quá trình
- "Instructor xem trajectory, hit/miss, reaction time"
- "Hệ thống ghi log toàn bộ: góc, thời gian, điểm"
- "Cảnh báo nếu thao tác nguy hiểm (sweep friendlies)"
- Pain: Không có data real-time → feedback chậm
- Pain: Instructor phải đoán lý do miss

### Step 7: MODIFY — Điều chỉnh
- "Thay đổi độ khó: sóng, tốc độ mục tiêu, thời tiết"
- "Lặp lại bài bắn cụ thể để luyện kỹ năng yếu"
- "Instructor can thiệp: pause, replay, chỉ dẫn"
- Pain: Không có adaptive — cùng bài cho mọi trình độ
- Pain: Muốn drill 1 kỹ năng nhưng phải chạy lại cả bài

### Step 8: CONCLUDE — Kết thúc và đánh giá
- "AAR (After Action Review): replay, phân tích per-shot trajectory"
- "Chấm điểm theo tiêu chuẩn quân sự"
- "Lưu kết quả vào hồ sơ xạ thủ (per-engagement data: force, tracking, burst)"
- "Tắt máy, thu dọn, xả áp máy nén khí"
- "Báo cáo kết quả huấn luyện lên chỉ huy (MoD format)"
- Pain: Báo cáo thủ công, mất thời gian (30-60 phút/buổi)
- Pain: Không so sánh được tiến bộ qua nhiều buổi → không thấy ROI
- Pain (v2): Dữ liệu huấn luyện bị mất sau buổi → không tích lũy insight
- **MOUNT "T" opportunity:** Data capture pipeline (Doc 022 §16) biến Step 8 từ "kết thúc" thành "input cho buổi sau." Mỗi buổi tích lũy → I-08 ACH coaching chính xác hơn → R2 flywheel.

## Competitor Comparison per Step

| Step | Current (Đạn thật) | ACME GAR ($500K+) | VN-12.7MM-SIM ($44K) |
|------|--------------------|--------------------|----------------------|
| 1 DEFINE | HLV judgment | Software preset | Software + AI (I-08) |
| 3 PREPARE | Xin đạn, bãi bắn, thời tiết → 1-3 tuần | 30 phút, 2 techs | **≤ 8 min, 2 persons** (PR-008) |
| 5A Track | Real mount | ❌ No resistance | ✅ Magnetic brake |
| 5B Recoil | Real recoil | ✅ Electric $15K | ✅ Pneumatic $850 |
| 6 MONITOR | HLV mắt thường | Basic scoring | Real-time + per-shot data |
| 7 MODIFY | Không thể (đạn thật) | Limited scenarios | Adaptive (I-08 ACH) |
| 8 CONCLUDE | Báo cáo tay | PDF export | **Auto MoD-format** (S-023) |

**Unique value:** VN-12.7MM-SIM là hệ thống DUY NHẤT giải quyết Channel A + B + adaptive + auto-report ở mức giá $44K. ACME thiếu Channel A. Đạn thật thiếu Step 6/7/8.

## Status

- **Source:** AI draft v2 — enriched từ 205 requirements + competitor RE (ACME/Haptech/MILO) + Two-Channel architecture + MOUNT framework + 3-phase strategy
- **Validation:** ⚠️ PENDING — interview template ready ([Interview_Template_v1.0.md](Interview_Template_v1.0.md)), 15 respondents target
- **Next:** CEO conducts interviews (2026-04-10 → 04-30) → validate job map → update this document
- **v1→v2 changes:** +Two-Channel decomposition Step 5, +consumption chain, +competitor comparison, +buyer≠user warning, +MOUNT "T" in Step 8, +Step 4 pneumatic pain
