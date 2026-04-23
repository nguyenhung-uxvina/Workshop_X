# FORGE JOB MAP — VN-CUAV-SIM-001
## Maritime Counter-UAV/USV Shooting Training Simulation
## 4 Variants: LITE (Xuồng) | FIXED (Đảo/Giàn/Cảng) | FULL (Tàu Chiến) | CORTEX (Liên Quân)

**Date:** 2026-04-07
**Method:** ODI (Outcome-Driven Innovation) × JTBD (Jobs-to-be-Done)
**Status:** AI-generated draft — CEO validation pending (Steps 1-2 = Core)
**Product Line:** $40K–$415K (4 variants)

---

## 1. JOB STATEMENT

### Core Functional Job

> **Huấn luyện xạ thủ phòng không trên biển đạt chuẩn sẵn sàng chiến đấu chống UAV và USV trong mọi điều kiện.**

Format: [Huấn luyện] + [xạ thủ phòng không trên biển] + [đạt chuẩn sẵn sàng chống UAV/USV]

### Related Jobs

| # | Job liên quan | Ai thực hiện | Variant phục vụ |
|---|-------------|-------------|----------------|
| RJ-1 | Đánh giá và sát hạch năng lực xạ thủ định kỳ | Chỉ huy đơn vị | Tất cả |
| RJ-2 | Phát triển chiến thuật phòng không chống swarm mới | Phòng Tác chiến | FULL, CORTEX |
| RJ-3 | Phối hợp kíp bắn nhiều ụ súng trên tàu | Kíp trưởng | FULL |
| RJ-4 | Phối hợp phòng thủ liên quân bờ–đảo–tàu | Sở chỉ huy Vùng | CORTEX |
| RJ-5 | Duy trì sẵn sàng chiến đấu lực lượng phòng không hải quân | Quân chủng HQ | Tất cả |
| RJ-6 | Huấn luyện phân biệt bạn–thù (IFF) trên biển | Instructor | FULL, CORTEX |

### Emotional & Social Jobs

| Loại | Job | Ai cảm nhận |
|------|-----|------------|
| Emotional | Cảm thấy tự tin khi đối đầu UAV/USV thực tế | Xạ thủ |
| Emotional | Không sợ phí đạn khi luyện tập (bắn thoải mái) | Xạ thủ |
| Emotional | Yên tâm rằng đơn vị đã sẵn sàng khi có tình huống | Chỉ huy |
| Social | Được đánh giá cao qua kết quả huấn luyện khách quan | Xạ thủ |
| Social | Đơn vị được công nhận đạt chuẩn bởi cấp trên | Chỉ huy |

---

## 2. JOB MAP — 8 Bước

> **Chủ thể:** Instructor (người vận hành hệ thống) + Xạ thủ (người huấn luyện)
> **Context:** Đơn vị hải quân VN, phòng huấn luyện, buổi tập 2-4 giờ

```
JOB MAP — VN-CUAV-SIM-001 / Hải quân VN
Date: 2026-04-07

┌─────────────────────────────────────────────────────────────────┐
│ Step 1: DEFINE — Xác định nhu cầu huấn luyện                   │
│                                                                 │
│ Trigger: Lịch huấn luyện định kỳ / sát hạch / tình huống mới  │
│ Actor: Chỉ huy đơn vị + Instructor                            │
│                                                                 │
│ Hành động hiện tại:                                            │
│ • Nhận lịch huấn luyện từ cấp trên                           │
│ • Xác định xạ thủ nào cần tập (mới/yếu/sát hạch)            │
│ • Chọn loại vũ khí cần huấn luyện (DSHK, NSV, KPVT...)      │
│ • Chọn loại mục tiêu (UAV Group 1, FPV, USV, swarm)          │
│ • Đánh giá trình độ hiện tại của từng xạ thủ                 │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Không có dữ liệu khách quan về trình độ xạ thủ              │
│ ✗ Không biết xạ thủ yếu kỹ năng nào cụ thể                   │
│ ✗ Chưa có tiêu chuẩn bắn C-UAV/USV chính thức                │
├─────────────────────────────────────────────────────────────────┤
│ Step 2: LOCATE — Chuẩn bị phương tiện huấn luyện              │
│                                                                 │
│ Actor: Instructor + Kỹ thuật viên                              │
│                                                                 │
│ Hành động hiện tại (bắn thật):                                │
│ • Xin cấp đạn (thủ tục hậu cần phức tạp, phê duyệt nhiều cấp)│
│ • Kiểm tra vũ khí thật (bảo dưỡng, lau chùi, kiểm sổ)       │
│ • Đặt lịch trường bắn (khan hiếm, phụ thuộc thời tiết)       │
│ • Chuẩn bị target drone / bia kéo (nếu có — hiếm)            │
│                                                                 │
│ Hành động với simulator:                                       │
│ • Kiểm tra hệ thống (boot, self-test)                         │
│ • Chọn/lắp weapon module phù hợp (NFC auto-detect)            │
│ • Load scenario library                                        │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Thủ tục cấp đạn mất 1-2 tuần, giới hạn số viên             │
│ ✗ Trường bắn chỉ khả dụng khi thời tiết tốt                  │
│ ✗ Không có target drone chuyên dụng cho C-UAV training         │
├─────────────────────────────────────────────────────────────────┤
│ Step 3: PREPARE — Thiết lập buổi huấn luyện                   │
│                                                                 │
│ Actor: Instructor                                              │
│                                                                 │
│ Hành động:                                                     │
│ • Chọn/tạo kịch bản phù hợp trình độ xạ thủ                 │
│ • Thiết lập điều kiện môi trường (biển, thời tiết, ngày/đêm) │
│ • Cấu hình chấm điểm (tiêu chí, trọng số)                   │
│ • Briefing xạ thủ (tình huống chiến thuật, nhiệm vụ)         │
│ • [FULL/CORTEX] Phân công sector, assign weapon per station   │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Instructor phải tự nghĩ kịch bản (không có thư viện chuẩn)  │
│ ✗ Không thể tạo kịch bản swarm (bắn thật không mô phỏng được)│
│ ✗ Briefing khó hình dung vì không có visual aid               │
├─────────────────────────────────────────────────────────────────┤
│ Step 4: CONFIRM — Xác nhận sẵn sàng                           │
│                                                                 │
│ Actor: Instructor + Xạ thủ                                     │
│                                                                 │
│ Hành động:                                                     │
│ • Xạ thủ vào vị trí, điều chỉnh bệ vũ khí theo cơ thể       │
│ • Instructor kiểm tra liên lạc (bắn thật: radio; sim: intercom)│
│ • Test bắn thử 3-5 phát (warm-up, verify hệ thống hoạt động) │
│ • [FULL] Kiểm tra phối hợp kíp: sector handoff test           │
│ • Instructor confirm "Sẵn sàng" → bắt đầu scenario           │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Bắn thật: không có warm-up shots (đạn quý)                  │
│ ✗ Chỉ biết hệ thống hoạt động khi đã vào bài                 │
├─────────────────────────────────────────────────────────────────┤
│ Step 5: EXECUTE — Thực hiện bài tập bắn                       │
│                                                                 │
│ Actor: Xạ thủ (chính) + Instructor (giám sát)                 │
│                                                                 │
│ Hành động:                                                     │
│ • Phát hiện mục tiêu (visual scan, cảnh báo radar nếu có)    │
│ • Phân loại mục tiêu (UAV/USV, bạn/thù, ưu tiên)            │
│ • Bám mục tiêu (tracking — giữ ngắm liên tục)                │
│ • Tính lead angle (bù trước cho tốc độ + gió + ship motion)  │
│ • Bắn loạt (burst control, tiết kiệm đạn)                    │
│ • Đánh giá trúng/trượt → điều chỉnh → bắn tiếp              │
│ • [FULL] Phối hợp kíp: handoff, fire discipline, comms       │
│ • [CORTEX] Phối hợp liên quân: C2 chỉ đạo phân bổ mục tiêu  │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Bắn thật không có UAV/USV target → bắn bia cố định (vô ích)│
│ ✗ Không thể luyện swarm defense (chỉ 1 bia tại 1 thời điểm)  │
│ ✗ Không biết trúng/trượt real-time khi bắn C-UAV              │
│ ✗ Ship motion + lead angle = quá khó, không thể luyện trên bờ │
│ ✗ Ammo limit → ít phát bắn → ít lần thử → chậm tiến bộ      │
├─────────────────────────────────────────────────────────────────┤
│ Step 6: MONITOR — Instructor theo dõi real-time                │
│                                                                 │
│ Actor: Instructor                                              │
│                                                                 │
│ Hành động:                                                     │
│ • Theo dõi aim trace (đường ngắm) real-time                   │
│ • Quan sát reaction time xạ thủ                               │
│ • Đánh giá fire discipline (burst length, ammo efficiency)    │
│ • [FULL] Monitor sector discipline (friendly fire zone)       │
│ • Quyết định inject thêm target hoặc thay đổi scenario        │
│ • Pause nếu cần coaching moment                               │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Bắn thật: instructor không thấy aim trace                   │
│ ✗ Không có dữ liệu real-time → phải đoán xạ thủ đang làm gì │
│ ✗ Không thể pause giữa bài (đạn đã bay)                      │
├─────────────────────────────────────────────────────────────────┤
│ Step 7: MODIFY — Điều chỉnh trong buổi tập                    │
│                                                                 │
│ Actor: Instructor                                              │
│                                                                 │
│ Hành động:                                                     │
│ • Tăng/giảm độ khó (số target, tốc độ, evasion)              │
│ • Thay đổi điều kiện (thời tiết, biển, ánh sáng)             │
│ • Thay loại vũ khí (NFC swap < 5 phút)                       │
│ • Đổi loại mục tiêu (UAV → USV, đơn lẻ → swarm)             │
│ • Coaching pause: dừng, chỉ lỗi, replay, resume              │
│ • [FULL] Đổi sector assignment giữa bài                      │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Bắn thật: không thể thay đổi gì (bia cố định, thời tiết thực)│
│ ✗ Không có cơ chế "pause and teach"                           │
│ ✗ Thay vũ khí = buổi tập khác (hậu cần đạn riêng)           │
├─────────────────────────────────────────────────────────────────┤
│ Step 8: CONCLUDE — Đánh giá và kết thúc                       │
│                                                                 │
│ Actor: Instructor + Xạ thủ + Chỉ huy                          │
│                                                                 │
│ Hành động:                                                     │
│ • Chấm điểm buổi tập (accuracy, reaction time, ammo eff)     │
│ • So sánh với lần trước → xu hướng tiến bộ                   │
│ • AAR: replay bài tập, phân tích lỗi                         │
│ • Ghi nhận kỹ năng yếu → đề xuất bài tập tiếp theo          │
│ • Báo cáo kết quả cho chỉ huy                                │
│ • Lưu hồ sơ huấn luyện xạ thủ                                │
│ • Bảo dưỡng thiết bị (nếu simulator)                         │
│                                                                 │
│ Pain points:                                                    │
│ ✗ Bắn thật: chỉ biết tổng số trúng (không chi tiết 5 kỹ năng)│
│ ✗ Không có replay → không phân tích được lỗi cụ thể          │
│ ✗ Hồ sơ huấn luyện = giấy, không tracking dài hạn            │
│ ✗ Báo cáo viết tay, chủ quan, mất thời gian                  │
└─────────────────────────────────────────────────────────────────┘
```

**👤 CEO NOTE:** Job Map này dựa trên reverse engineering + domain knowledge. Cần validate bằng 3-5 phỏng vấn sâu với instructor/xạ thủ hải quân thực tế. Đặc biệt Step 5 (EXECUTE) và Step 8 (CONCLUDE).

---

## 3. DESIRED OUTCOME STATEMENTS

> Format: [Minimize/Maximize] + [metric] + [context]
> Grouped by Job Map step. AI-generated — CEO validation pending.

### Step 1: DEFINE — Xác định nhu cầu huấn luyện (7 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-01 | Minimize the time it takes to assess each gunner's current skill level | All |
| O-02 | Minimize the subjectivity in evaluating gunner readiness | All |
| O-03 | Minimize the difficulty of identifying which specific skills need improvement per gunner | All |
| O-04 | Minimize the time it takes to select appropriate training scenarios for a gunner's skill gaps | All |
| O-05 | Minimize the difficulty of determining which weapon type a gunner needs more practice with | All |
| O-06 | Minimize the dependency on instructor's memory for tracking gunner history | All |
| O-07 | Minimize the time it takes to plan a complete training syllabus for a new rotation | All |

### Step 2: LOCATE — Chuẩn bị phương tiện (8 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-08 | Minimize the time from "training decision" to "system ready" | All |
| O-09 | Minimize the administrative overhead to access training resources (vs ammo requisition) | All |
| O-10 | Minimize the dependency on weather conditions for training availability | All |
| O-11 | Minimize the number of personnel needed to prepare the system | All |
| O-12 | Minimize the time it takes to swap between weapon types | All |
| O-13 | Minimize the dependency on live-fire range scheduling | All |
| O-14 | Minimize the cost of consumables per training hour | All |
| O-15 | Minimize the risk of equipment damage during preparation | All |

### Step 3: PREPARE — Thiết lập buổi tập (8 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-16 | Minimize the time it takes to create a new training scenario | All |
| O-17 | Minimize the coding/technical skill needed by instructor to configure scenarios | All |
| O-18 | Minimize the difficulty of simulating realistic UAV swarm behavior | All |
| O-19 | Minimize the difficulty of adjusting environmental conditions (sea state, weather, light) | All |
| O-20 | Minimize the difficulty of briefing gunners on the tactical situation before exercise | All |
| O-21 | Minimize the time to switch from one exercise type to another | All |
| O-22 | Minimize the difficulty of setting up crew coordination exercises | FULL, CORTEX |
| O-23 | Minimize the difficulty of configuring multi-site joint exercises | CORTEX |

### Step 4: CONFIRM — Xác nhận sẵn sàng (5 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-24 | Minimize the time from cold boot to "ready to train" | All |
| O-25 | Minimize the number of calibration steps required before each session | All |
| O-26 | Minimize the uncertainty that the weapon mockup feels like the real weapon | All |
| O-27 | Minimize the difference in traverse/elevation resistance vs real weapon | All |
| O-28 | Minimize the delay between pulling the trigger and seeing the result on screen | All |

### Step 5: EXECUTE — Bài tập bắn (15 outcomes) ★ CORE

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-29 | Minimize the difference between simulated and actual ballistic trajectory | All |
| O-30 | Minimize the error in hit/miss classification | All |
| O-31 | Minimize the visual difference between simulated and real-world maritime environment | All |
| O-32 | Minimize the latency from trigger pull to visual/audio/haptic feedback | All |
| O-33 | Minimize the difficulty of tracking fast-moving small targets (FPV kamikaze) | All |
| O-34 | Minimize the gap between simulated and real ship motion effect on shooting | LITE, FULL |
| O-35 | Maximize the variety of UAV/USV target behaviors available in training | All |
| O-36 | Maximize the number of simultaneous targets trainable (swarm defense) | All |
| O-37 | Minimize the risk of developing bad habits from unrealistic simulation | All |
| O-38 | Maximize the realism of recoil feedback per weapon type | All |
| O-39 | Minimize the difficulty of practicing lead angle calculation under ship motion | LITE, FULL |
| O-40 | Minimize the difficulty of practicing sector coordination with crew members | FULL, CORTEX |
| O-41 | Minimize the difficulty of practicing IFF (friend-foe identification) under stress | FULL, CORTEX |
| O-42 | Minimize the difficulty of practicing night/low-visibility engagement | All |
| O-43 | Minimize the difficulty of practicing defense against mixed UAV+USV simultaneous attack | All |

### Step 6: MONITOR — Theo dõi real-time (6 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-44 | Minimize the difficulty for instructor to see exactly where the gunner is aiming in real-time | All |
| O-45 | Minimize the delay in identifying when a gunner is making a systematic error | All |
| O-46 | Minimize the difficulty of injecting additional threats during a live exercise | All |
| O-47 | Minimize the difficulty of pausing the exercise for a coaching moment | All |
| O-48 | Minimize the difficulty of monitoring multiple gunners simultaneously | FULL, CORTEX |
| O-49 | Minimize the difficulty of monitoring joint force effectiveness across nodes | CORTEX |

### Step 7: MODIFY — Điều chỉnh (5 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-50 | Minimize the time to change difficulty level mid-exercise | All |
| O-51 | Minimize the difficulty of adapting scenarios to individual gunner weakness | All |
| O-52 | Minimize the time to switch between weapon modules during a session | All |
| O-53 | Minimize the time to change environmental conditions mid-exercise | All |
| O-54 | Minimize the difficulty of re-assigning sectors/targets between crew mid-exercise | FULL, CORTEX |

### Step 8: CONCLUDE — Đánh giá & kết thúc (9 outcomes)

| ID | Outcome Statement | Variant |
|----|------------------|---------|
| O-55 | Minimize the time to generate a comprehensive performance report after exercise | All |
| O-56 | Minimize the subjectivity in scoring gunner performance | All |
| O-57 | Minimize the difficulty of comparing current vs previous performance for the same gunner | All |
| O-58 | Minimize the difficulty of identifying the specific weakest skill per gunner | All |
| O-59 | Minimize the time to conduct AAR (after-action review) with replay | All |
| O-60 | Minimize the difficulty of generating standardized reports for command | All |
| O-61 | Minimize the difficulty of recommending the next training exercise automatically | All |
| O-62 | Minimize the difficulty of tracking long-term training progress across a unit | All |
| O-63 | Minimize the effort to maintain training records digitally (vs paper logbook) | All |

### Tóm Tắt

| Job Step | # Outcomes | Focus |
|----------|-----------|-------|
| 1. DEFINE | 7 | Skill assessment, planning |
| 2. LOCATE | 8 | Access, logistics, cost |
| 3. PREPARE | 8 | Scenario setup, crew config |
| 4. CONFIRM | 5 | System readiness, fidelity |
| 5. EXECUTE | 15 | Core training realism ★ |
| 6. MONITOR | 6 | Instructor visibility |
| 7. MODIFY | 5 | Adaptability |
| 8. CONCLUDE | 9 | Assessment, reporting |
| **TOTAL** | **63** | |

---

## 4. OPPORTUNITY SCORES — Importance × Satisfaction

> **Method:** AI-estimated based on reverse engineering, competitor gaps, and domain knowledge.
> **⚠️ CEO MUST validate** with 3-5 interviews with real operators before finalizing.
> Importance (1-5) = How important to operator. Satisfaction (1-5) = How well current solution serves.
> "Current solution" = bắn thật trên trường bắn + no simulator.

| ID | Outcome (abbreviated) | Step | Imp | Sat | Opp Score |
|----|----------------------|------|:---:|:---:|:---------:|
| O-29 | Ballistic trajectory accuracy | 5 | 4.8 | 1.2 | **8.4** |
| O-36 | Max simultaneous targets (swarm) | 5 | 4.7 | 1.0 | **8.4** |
| O-30 | Hit/miss classification accuracy | 5 | 4.8 | 1.5 | **8.1** |
| O-10 | Independence from weather | 2 | 4.5 | 1.0 | **8.0** |
| O-34 | Ship motion effect on shooting | 5 | 4.5 | 1.0 | **8.0** |
| O-33 | Track fast small targets (FPV) | 5 | 4.8 | 1.8 | **7.8** |
| O-43 | Mixed UAV+USV attack defense | 5 | 4.6 | 1.2 | **7.8** |
| O-39 | Lead angle under ship motion | 5 | 4.5 | 1.2 | **7.8** |
| O-14 | Cost per training hour | 2 | 4.5 | 1.3 | **7.7** |
| O-59 | AAR replay time | 8 | 4.3 | 1.0 | **7.6** |
| O-44 | Instructor sees aim trace | 6 | 4.3 | 1.0 | **7.6** |
| O-42 | Night/low-vis engagement | 5 | 4.3 | 1.0 | **7.6** |
| O-18 | Simulate swarm behavior | 3 | 4.5 | 1.5 | **7.5** |
| O-13 | Independence from range scheduling | 2 | 4.2 | 1.0 | **7.4** |
| O-35 | Variety of UAV/USV behaviors | 5 | 4.2 | 1.0 | **7.4** |
| O-40 | Crew sector coordination | 5 | 4.5 | 1.8 | **7.2** |
| O-56 | Objective scoring | 8 | 4.2 | 1.2 | **7.2** |
| O-47 | Pause for coaching | 6 | 4.0 | 1.0 | **7.0** |
| O-57 | Compare vs previous performance | 8 | 4.0 | 1.0 | **7.0** |
| O-58 | Identify weakest skill | 8 | 4.0 | 1.0 | **7.0** |
| O-38 | Recoil feedback realism | 5 | 4.2 | 1.5 | **6.9** |
| O-41 | IFF under stress | 5 | 4.0 | 1.2 | **6.8** |
| O-09 | Admin overhead reduction | 2 | 3.8 | 1.0 | **6.6** |
| O-45 | Detect systematic errors | 6 | 3.8 | 1.0 | **6.6** |
| O-37 | Avoid bad habits from sim | 5 | 4.5 | 2.5 | **6.5** |
| O-55 | Generate perf report | 8 | 3.8 | 1.2 | **6.4** |
| O-01 | Assess skill level fast | 1 | 3.8 | 1.5 | **6.1** |
| O-62 | Track long-term progress | 8 | 3.5 | 1.0 | **6.0** |
| O-32 | Latency trigger→feedback | 5 | 4.8 | 3.0 | **6.6** |
| O-31 | Visual maritime environment | 5 | 4.0 | 2.0 | **6.0** |
| O-16 | Create scenario fast | 3 | 3.5 | 1.2 | **5.8** |
| O-26 | Weapon mockup feel | 4 | 4.0 | 2.5 | **5.5** |
| O-17 | No coding for instructor | 3 | 3.5 | 1.5 | **5.5** |
| O-24 | Boot to ready time | 4 | 3.3 | 1.5 | **5.1** |
| O-50 | Change difficulty mid-ex | 7 | 3.2 | 1.2 | **5.2** |
| O-51 | Adapt to weakness | 7 | 3.5 | 1.5 | **5.5** |
| O-52 | Swap weapon modules | 7 | 3.0 | 1.5 | **4.5** |
| O-27 | Traverse resistance feel | 4 | 3.5 | 2.5 | **4.5** |
| O-08 | Decision to ready time | 2 | 3.0 | 1.5 | **4.5** |
| O-11 | Number of prep personnel | 2 | 2.8 | 2.0 | **3.6** |
| O-25 | Calibration steps | 4 | 2.5 | 2.0 | **3.0** |
| O-15 | Equipment damage risk | 2 | 2.5 | 3.0 | **2.5** |

---

## 5. OPPORTUNITY LANDSCAPE

### UNDERSERVED TOP 15 — ★ Innovation Targets

| Rank | ID | Outcome | Step | Opp Score | Variant Impact |
|:----:|:--:|---------|:----:|:---------:|---------------|
| 1 | O-29 | Ballistic trajectory accuracy | EXECUTE | **8.4** | All — V-SMASH 6DOF engine |
| 2 | O-36 | Swarm simultaneous targets | EXECUTE | **8.4** | All — 4-8 (LITE) → 50 (CORTEX) |
| 3 | O-30 | Hit/miss classification | EXECUTE | **8.1** | All — collision volume 95%+ |
| 4 | O-10 | Weather independence | LOCATE | **8.0** | All — indoor 24/7 |
| 5 | O-34 | Ship motion on shooting | EXECUTE | **8.0** | LITE/FULL — 2-DOF / shared deck |
| 6 | O-33 | Track fast FPV targets | EXECUTE | **7.8** | All — scenario library |
| 7 | O-43 | Mixed UAV+USV defense | EXECUTE | **7.8** | All — multi-target scenarios |
| 8 | O-39 | Lead angle + ship motion | EXECUTE | **7.8** | LITE/FULL — 6DOF ballistics |
| 9 | O-14 | Cost per training hour | LOCATE | **7.7** | All — ≤$5/h vs $250-1500/h |
| 10 | O-59 | AAR replay | CONCLUDE | **7.6** | All — 3D replay engine |
| 11 | O-44 | Instructor aim visibility | MONITOR | **7.6** | All — 10Hz aim trace |
| 12 | O-42 | Night engagement | EXECUTE | **7.6** | All — day/dusk/night |
| 13 | O-18 | Simulate swarm behavior | PREPARE | **7.5** | FULL/CORTEX — 12-50 targets |
| 14 | O-13 | Range independence | LOCATE | **7.4** | All — no range needed |
| 15 | O-35 | Target behavior variety | EXECUTE | **7.4** | All — 5 UAV + 3 USV profiles |

**Pattern:** 9/15 top outcomes are in **EXECUTE** — confirms core training realism is THE key value driver. But 3 in LOCATE (logistics) and 2 in CONCLUDE (assessment) are also highly underserved.

### OVERSERVED BOTTOM 10 — Cost Reduction Candidates

| Rank | ID | Outcome | Step | Opp Score | Note |
|:----:|:--:|---------|:----:|:---------:|------|
| 1 | O-15 | Equipment damage risk | LOCATE | **2.5** | Already low with sim |
| 2 | O-25 | Calibration steps | CONFIRM | **3.0** | NFC auto-detect solves |
| 3 | O-11 | Number of prep personnel | LOCATE | **3.6** | Already 1-2 people |
| 4 | O-27 | Traverse resistance feel | CONFIRM | **4.5** | Good enough with magnetic brake |
| 5 | O-52 | Swap weapon modules | MODIFY | **4.5** | < 5 min already acceptable |
| 6 | O-08 | Decision to ready time | LOCATE | **4.5** | Boot < 5 min fine |

**ACH insight:** Overserved outcomes are already well-addressed by the base design. No over-engineering to cut.

---

## 6. STRATEGY RECOMMENDATION

### Strategy Type

Based on opportunity landscape:

```
[✓] DIFFERENTIATED — Target top 15 underserved outcomes (charge premium)
[ ] Dominant — try to serve ALL
[ ] Discrete — simplify, lower cost
[ ] Disruptive — new approach

RATIONALE: No competitor serves VN C-UAV/USV training at $50-70K price point.
Top 15 underserved outcomes are MASSIVE gaps (Opp 7.4-8.4) because
current alternative (live fire) fundamentally CANNOT serve them.
Simulation is category-creating, not incremental improvement.
```

### Innovation Targets — Top 5 (CEO confirm)

| # | Underserved Outcome | Design Response | Sub-function |
|---|-------------------|-----------------|-------------|
| 1 | O-29+O-30: Ballistic accuracy + hit classification | V-SMASH 6DOF engine, collision volume mesh | SS2 SF5 |
| 2 | O-36+O-43: Swarm + mixed attack | Multi-target AI (flocking + tactics), 4→50 scalable | SS4 SF3-4 |
| 3 | O-34+O-39: Ship motion effect on shooting | 2-DOF seat (LITE), shared deck (FULL) | SS3 SF1-2 |
| 4 | O-10+O-13+O-14: Logistics independence | Indoor, no ammo, no range, ≤$5/h | System architecture |
| 5 | O-59+O-56+O-57: Objective assessment + AAR | 10Hz aim log, 3D replay, 5-skill scoring, PDF report | SS4 SF2+SF4 |

### ACH Candidates

| Outcome | ACH Opportunity | Priority |
|---------|----------------|:--------:|
| O-29 Ballistic accuracy | V-SMASH SW model replaces live ammunition → **pure ACH** | ★★★ |
| O-36 Swarm targets | AI-generated target behaviors replace physical target drones → **pure ACH** | ★★★ |
| O-34 Ship motion | 2-DOF electric replaces being-at-sea → **partial ACH** (motion is simplified) | ★★ |
| O-42 Night engagement | SW rendering replaces NVG + actual darkness → **pure ACH** | ★★ |
| O-59 AAR | Digital replay replaces instructor memory → **pure ACH** | ★★ |
| O-61 Auto-recommend next exercise | AI adaptive difficulty → **future ACH** (PA-3+) | ★ |

**Verdict:** VN-CUAV-SIM-001 IS an ACH product at its core — software simulation compensates for the impossibility/cost of live C-UAV/USV training. The entire product line is ACH.

### OUTCOME × REQUIREMENTS BRIDGE

| Outcome | → Existing Requirement | Status |
|---------|----------------------|--------|
| O-29 Ballistic accuracy | Q-01, T-03 (≤1mrad, ±5% TM tables) | ✅ Covered |
| O-30 Hit/miss classification | S-07 (≥95% accuracy) | ✅ Covered |
| O-36 Swarm targets | T-05 (≥5 UAV profiles, swarm ≥4) | ✅ Covered |
| O-10 Weather independence | G-01 (indoor 6×8m) | ✅ Covered |
| O-34 Ship motion | K-03, K-04 (roll ±12°, pitch ±8°) | ✅ Covered |
| O-14 Cost per hour | C-02 (≤$5/h) | ✅ Covered |
| O-59 AAR replay | S-06, T-07 | ✅ Covered |
| O-40 Crew coordination | S-08 (≥4 stations) | ⚠️ Partially — needs FULL-specific reqs |
| O-23 Multi-site joint | — | ❌ Missing — needs CORTEX-specific reqs |

**Gap:** Requirements List v1.0 was written for PA-2 LITE only. FULL and CORTEX outcomes need additional requirements (crew coordination, networking, joint scoring, C2 interface).

---

## 7. HOQ DESIGN PARAMETER WEIGHTS

### Step H1: Outcomes → Design Parameters (12 DPs)

| DP# | Design Parameter | Source Outcomes | Type |
|-----|-----------------|----------------|------|
| DP1 | Ballistic Fidelity | O-29, O-30, O-37 | Performance |
| DP2 | Target AI Realism | O-33, O-35, O-36, O-43 | Performance |
| DP3 | Ship Motion Fidelity | O-34, O-39 | Performance |
| DP4 | Haptic Fidelity (recoil + resistance) | O-26, O-27, O-38 | Performance |
| DP5 | Visual Immersion | O-31, O-42, O-32 | Performance |
| DP6 | Instructor Observability | O-44, O-45, O-46, O-47, O-48 | Usability |
| DP7 | Assessment Depth | O-55, O-56, O-57, O-58, O-59, O-61, O-62 | Value |
| DP8 | Scenario Flexibility | O-16, O-17, O-18, O-19, O-50, O-51, O-53 | Usability |
| DP9 | Logistics Independence | O-08, O-09, O-10, O-13, O-14 | Value |
| DP10 | Crew Coordination | O-22, O-40, O-41, O-54 | Performance (FULL+) |
| DP11 | Multi-Site Joint Ops | O-23, O-49 | Performance (CORTEX) |
| DP12 | Weapon Modularity | O-05, O-12, O-52 | Flexibility |

### Step H2: HOQ Matrix

```
HOQ MATRIX — VN-CUAV-SIM-001

                      DP1  DP2  DP3  DP4  DP5  DP6  DP7  DP8  DP9  DP10 DP11 DP12
                      Ball Tgt  Ship Hapt Vis  Inst Asmt Scen Logi Crew Jnt  Wpn
Outcomes       Imp    Fid  AI   Mot  Fid  Imm  Obs  Dpth Flex Ind  Coor Ops  Mod
─────────────────────────────────────────────────────────────────────────────────────
O-29 Ballistic  4.8    A                        C         C
O-30 Hit/miss   4.8    A    C                             C
O-36 Swarm      4.7         A                        C    A              C
O-10 Weather    4.5                                            A
O-34 Ship mot   4.5              A         C
O-33 FPV track  4.8         A              C
O-43 Mixed atk  4.6         A                        C    A              C
O-39 Lead angle 4.5    B         A
O-14 Cost/hr    4.5                                            A
O-59 AAR        4.3                             C    A
O-44 Aim trace  4.3                        C    A
O-42 Night      4.3              C         A              C
O-18 Swarm sim  4.5         A                        C    A
O-35 Variety    4.2         A                             A
O-40 Crew coord 4.5                                                 A
─────────────────────────────────────────────────────────────────────────────────────

A=9, B=5, C=3
```

### Step H3: Design Parameter Weights

| DP# | Design Parameter | W_TP | R_j (%) | Weight (0-1) | Priority |
|-----|-----------------|:----:|:-------:|:------------:|:--------:|
| DP2 | Target AI Realism | 165.6 | **18.2%** | 0.182 | **HIGH** |
| DP1 | Ballistic Fidelity | 129.0 | **14.2%** | 0.142 | **HIGH** |
| DP7 | Assessment Depth | 100.8 | **11.1%** | 0.111 | **HIGH** |
| DP8 | Scenario Flexibility | 97.5 | **10.7%** | 0.107 | HIGH |
| DP9 | Logistics Independence | 81.0 | **8.9%** | 0.089 | MED |
| DP5 | Visual Immersion | 76.2 | 8.4% | 0.084 | MED |
| DP3 | Ship Motion Fidelity | 72.0 | 7.9% | 0.079 | MED |
| DP6 | Instructor Observability | 64.8 | 7.1% | 0.071 | MED |
| DP10 | Crew Coordination | 40.5 | 4.5% | 0.045 | MED (FULL+) |
| DP4 | Haptic Fidelity | 38.5 | 4.2% | 0.042 | LOW |
| DP12 | Weapon Modularity | 27.0 | 3.0% | 0.030 | LOW |
| DP11 | Multi-Site Joint Ops | 16.2 | 1.8% | 0.018 | LOW (CORTEX) |
| | **TOTAL** | **909.1** | **100%** | **1.000** | |

**Top 3 priority DPs:** Target AI Realism (18%), Ballistic Fidelity (14%), Assessment Depth (11%) — together = 43% of total weight.

### Step H4: Correlation Roof — Contradictions

|     | DP1 | DP2 | DP3 | DP4 | DP5 | DP8 | DP9 |
|-----|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| DP1 | — | ++ | + | | + | | |
| DP2 | | — | | | + | ++ | |
| DP3 | | | — | | + | | **-** |
| DP4 | | | | — | | | **-** |
| DP5 | | | | | — | | **-** |
| DP8 | | | | | | — | |
| DP9 | | | | | | | — |

**Contradictions detected:**

| # | DP-A | DP-B | Severity | Nature | TRIZ Direction |
|---|------|------|:--------:|--------|---------------|
| K1 | DP3 Ship Motion | DP9 Logistics | **-** | Shared deck platform = heavy/complex vs portable indoor | TRIZ #1 Segmentation (modular deck) |
| K2 | DP4 Haptic | DP9 Logistics | **-** | More realistic recoil = more complex mechanism vs simple setup | TRIZ #35 Parameter changes (adjustable solenoid) |
| K3 | DP5 Visual | DP9 Logistics | **-** | More projectors/larger screen = more space/cost vs compact | TRIZ #17 Another dimension (VR fallback for LITE) |

### Step H5b: CDTC — Cost Allocation

| WTP Category | Features | Budget % |
|-------------|----------|:--------:|
| **Essential** (must-have) | Ballistic accuracy, hit detection, ≥3 scenarios, instructor station | 60% |
| **Beneficial** (nice-to-have) | Motion platform, swarm >8, AAR replay, NFC weapon swap | 30% |
| **Luxurious** (won't pay extra) | AI adaptive, FLIR mode, voice comms recording | 10% |

**Cost Factors (Pareto — LITE):**

| # | Factor | Est. Cost | % Total | Confidence |
|---|--------|:---------:|:-------:|:----------:|
| 1 | GPU + Render PC | $3,500 | 18% | L4 |
| 2 | Projectors × 3 | $3,600 | 19% | L4 |
| 3 | SW Development (6pm) | $8,000 | 41% | L3 |
| 4 | Motion Platform | $2,000 | 10% | L3 |
| 5 | Weapon Station | $1,330 | 7% | L4 |
| 6 | All rest | $1,200 | 6% | L4 |

**SW Development (41%) is the dominant cost factor.** Hardware is surprisingly cheap for the sell price ($50-70K). → High-margin product, SW-driven value.

---

## 8. ROUTING TO DOWNSTREAM SKILLS

```
forge-job-map FEEDS:
├── forge-scout → 63 outcomes as ACH opportunity filter
│   Top ACH: O-29 ballistic, O-36 swarm, O-42 night, O-59 AAR, O-61 auto-recommend
├── forge-shift → "O" dimension: all top 15 outcomes = customer-aligned ✓
├── forge-validate → outcome metrics as validation criteria
│   "O-29 ≤5% error" → ballistic validation test
│   "O-30 ≥95% hit/miss" → scoring validation test
├── forge-trust → evidence framed as: "chúng tôi đạt O-29, O-30, O-34"
├── forge-cost → SW (41%) is dominant → scale via multi-variant platform
├── helix-task-clarify → FULL/CORTEX need additional requirements for O-22, O-23, O-40, O-49
└── bridge-knowledge-base → L2: customer job data for C-UAV/USV training
```

---

## CEO SELECTION REQUIRED

**👤 CEO: Vui lòng confirm hoặc adjust:**

1. **Strategy type:** DIFFERENTIATED (charge premium on underserved outcomes) — đồng ý?
2. **Top 5 innovation targets:** Ballistic + Swarm + Ship Motion + Logistics + Assessment — đúng ưu tiên?
3. **ACH verdict:** Product line = ACH at core (SW replaces live fire) — confirm for forge-shift?
4. **Gap action:** Tạo Requirements List v2.0 bổ sung FULL/CORTEX-specific requirements?
5. **Survey plan:** Lên lịch 3-5 phỏng vấn instructor/xạ thủ hải quân để validate Imp × Sat?

**Next FORGE step:** `/forge-shift` (ACH Go/No-Go) → feeds from this Job Map's ACH candidates.
