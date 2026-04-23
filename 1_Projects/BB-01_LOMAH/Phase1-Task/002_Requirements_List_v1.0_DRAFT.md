---
created: 2026-03-19
updated: 2026-03-19
type: requirements
status: draft
phase: 1-task-clarification
project: BB-01_LOMAH
---

# BB-01 LOMAH — Danh Sách Yêu Cầu v1.0 DRAFT

> **Phạm Vi (Re-Baseline 2026-03-17):** Hệ Thống Phát Hiện Va Chạm Bằng Cảm Biến Piezo CONTACT
>
> **KHÔNG phải:** Toàn bộ nền tảng bia bắn trên biển (catamaran, khung bia, phao)
>
> **CÓ:** Mạch điện tử, signal chain, firmware phát hiện trúng/trượt từ Piezo → ADC

---

## CONTEXT: Pahl-Beitz Phase 1 Clarification

**Mục tiêu Phase 1:**
- Xác định tất cả yêu cầu từ tiêu chuẩn, tương tự sản phẩm, và bối cảnh hoạt động
- Phân loại D/W/PD (Demand / Wish / Probabilistic) — **CEO xác định**
- Chạy 5-step abstraction để tìm bản chất vấn đề
- Tạo function structure 6-flow
- Thực hiện cross-domain sync S1

**Hạn chế Tier 2:** Deadline 2026-09-05. Blocking constraints: (1) Sourcing piezo contact sensors, (2) Op-amp availability (LM358, TL072), (3) VN-XUONG-UUV + VN-AST-MSL-001 là Tier 1 (ưu tiên cao hơn)

---

## REQUIREMENTS DRAFT — 56 Items

| Req-ID | Requirement | Value | Unit | D/W | Category | Domain | Verification |
|--------|-------------|-------|------|-----|----------|--------|--------------|
| **FUNC.01** | Phát hiện va chạm đạn lên sensor Piezo CONTACT | Yes | - | D | Functional | Electrical | T |
| **FUNC.02** | Phân biệt TRÚNG vs TRƯỢT dựa trên tín hiệu acoustic | Yes | - | D | Functional | Signal/SW | T |
| **FUNC.03** | Xác định bia nào trúng (1-4 bia riêng biệt) | Yes | - | D | Functional | Signal/SW | T |
| **FUNC.04** | Transmit kết quả đến trạm điều khiển via LoRa | Yes | - | D | Functional | Electrical/RF | T |
| **FUNC.05** | Timestamp mỗi event và lưu trữ log | Yes | - | W | Functional | SW | D |
| | | | | | | | |
| **PERF.01** | Xác suất phát hiện (Pd) — TRÚNG | ≥90% | % | D | Performance | Signal/SW | T |
| **PERF.02** | Xác suất phát hiện (Pd) — TRƯỢT (tránh giả dương) | ≤5% | % false positive/hr | D | Performance | Signal/SW | T |
| **PERF.03** | Độ trễ phát hiện (tín hiệu piezo → quyết định) | ≤200 | ms | D | Performance | Signal/SW | T |
| **PERF.04** | Tỷ lệ signal-to-noise (SNR) tối thiểu | ≥15 | dB | D | Performance | Electrical | T |
| **PERF.05** | Độc lập với điều kiện sóng/gió | ≥95% | % accuracy in Sea State 3 | W | Performance | Signal/SW | T |
| **PERF.06** | Tần suất lặp lại — bắn loạt ≥3 phát/s | Yes | - | D | Performance | Signal/SW | T |
| | | | | | | | |
| **SEN.01** | Loại cảm biến | Piezoelectric CONTACT ceramic disc | - | D | Sensor | Electrical | I |
| **SEN.02** | KHÔNG dùng MEMS microphone | Forbidden | - | D | Sensor | Electrical | I |
| **SEN.03** | Số lượng sensor Piezo (tối thiểu) | 1 | per target | D | Sensor | Electrical | I |
| **SEN.04** | Số lượng sensor Piezo (tối đa) | 5 | total (4 bia + spare) | D | Sensor | Electrical | I |
| **SEN.05** | Đường kính sensor Piezo tiêu chuẩn | 27 | mm | D | Sensor | Electrical | I |
| **SEN.06** | Tần số cộng hưởng (center) | 2-4 | kHz | D | Sensor | Electrical | T |
| **SEN.07** | Dải tần ứng dụng | 100 Hz - 10 kHz | Hz | D | Sensor | Electrical | T |
| **SEN.08** | Mức áp suất âm tối đa (SPL max) | ≥140 | dB | D | Sensor | Electrical | T |
| **SEN.09** | Chống thấm nước | IP67 minimum | - | D | Sensor | Electrical | I |
| | | | | | | | |
| **COND.01** | Tên hệ thống signal chain | Piezo → Charge Amp → BPF → Gain → Clamp → ADC | - | D | Signal Path | Electrical | I |
| **COND.02** | Charge amplifier — đầu vào impedance | ≥10 | MΩ | D | Signal Path | Electrical | A |
| **COND.03** | Charge amplifier — conversion Q→V | Yes | - | D | Signal Path | Electrical | D |
| **COND.04** | Bandpass filter — tần số thấp (-3dB) | 500 | Hz (min) | D | Signal Path | Electrical | A |
| **COND.05** | Bandpass filter — tần số cao (-3dB) | 10 | kHz (max) | D | Signal Path | Electrical | A |
| **COND.06** | Gain stage — khuếch đại tối thiểu | 40 | dB (100×) | D | Signal Path | Electrical | A |
| **COND.07** | Clamp stage — hạn chế tối đa | ADC full scale | ±Vref | D | Signal Path | Electrical | I |
| **COND.08** | Output impedance → ADC | <1 | kΩ | D | Signal Path | Electrical | A |
| | | | | | | | |
| **OPAMP.01** | Op-amp models approved (LM358) | Có sẵn Việt Nam | - | D | Components | Electrical | I |
| **OPAMP.02** | Op-amp models approved (TL072) | Có sẵn Việt Nam | - | D | Components | Electrical | I |
| **OPAMP.03** | Slew rate (charge amp stage) | ≥0.5 | V/µs | D | Components | Electrical | A |
| **OPAMP.04** | Gain-bandwidth product | ≥1 | MHz | D | Components | Electrical | A |
| | | | | | | | |
| **ADC.01** | ADC Resolution tối thiểu | 12 | bit | D | Signal Path | Electrical | I |
| **ADC.02** | ADC Sample rate | ≥50 | kSPS | D | Signal Path | Electrical | A |
| **ADC.03** | ADC Channels tối thiểu | 4 | channels (1 per bia, +ref) | D | Signal Path | Electrical | I |
| **ADC.04** | ADC Channels tối đa | 5 | channels | D | Signal Path | Electrical | I |
| **ADC.05** | ADC Input range | 0 - 3.3 | V | D | Signal Path | Electrical | I |
| **ADC.06** | ADC ENOB (Effective Bits) | ≥10 | ENOB | D | Signal Path | Electrical | A |
| | | | | | | | |
| **MCU.01** | Processor (tối thiểu) | STM32H743 hoặc tương đương | - | D | Compute | Electrical | I |
| **MCU.02** | Memory (Flash code) | ≥512 | KB | D | Compute | Electrical | I |
| **MCU.03** | Memory (RAM) | ≥192 | KB | D | Compute | Electrical | I |
| **MCU.04** | Processing time (ADC→decision) | ≤50 | ms | D | Compute | Electrical/SW | A |
| **MCU.05** | Real-time DSP capability | Yes | - | D | Compute | SW | D |
| | | | | | | | |
| **RF.01** | Wireless protocol | LoRa 433 MHz | - | D | Communication | Electrical/RF | I |
| **RF.02** | Tầm truyền (line of sight) | ≥500 | m | D | Communication | Electrical/RF | T |
| **RF.03** | Data: Target ID + Result | Required | - | D | Communication | Electrical/RF | D |
| **RF.04** | Latency (detection→display) | ≤500 | ms | D | Communication | Electrical/RF | T |
| **RF.05** | Packet loss rate | ≤5% | % | D | Communication | Electrical/RF | T |
| | | | | | | | |
| **ENV.01** | Nhiệt độ hoạt động | 0 đến +50 | °C | D | Environmental | Mechanical | T |
| **ENV.02** | Độ ẩm | 0-100 | %RH | D | Environmental | Mechanical | T |
| **ENV.03** | IP Rating (MCU enclosure) | IP67 | - | D | Environmental | Mechanical | T |
| **ENV.04** | Chống ăn mòn mặn | ≥12 | tháng | D | Environmental | Mechanical | T |
| **ENV.05** | Vibration (từ sóng/gió) | Sea State 3 | Beaufort | D | Environmental | Mechanical | T |
| | | | | | | | |
| **REL.01** | MTBF | ≥2000 | hours | D | Reliability | System | A |
| **REL.02** | Power cycles | ≥500 | cycles | D | Reliability | System | A |
| **REL.03** | Design margin (component stress) | ≥20% | % | D | Reliability | Electrical | A |
| | | | | | | | |
| **PWR.01** | Pin loại | LiFePO4 | - | D | Power | Electrical | I |
| **PWR.02** | Điện áp | 12 | VDC | D | Power | Electrical | I |
| **PWR.03** | Thời gian hoạt động | ≥8 | hours | D | Power | System | T |
| **PWR.04** | Tiêu thụ công suất trung bình | ≤1.0 | W | D | Power | Electrical/SW | A |
| | | | | | | | |
| **TEST.01** | Phần mềm simulation | LTspice + STM32 IAR | - | D | Development | SW | D |
| **TEST.02** | Prototype test bench | Assembled PCB + lab targets | - | D | Development | HW | D |
| **TEST.03** | Sea trials (hậu kỳ) | Sea State 3, thật sự bắn | - | D | Validation | System | T |

---

## REQUIREMENTS SUMMARY

| Category | Count | Notes |
|----------|-------|-------|
| Functional (FUNC) | 5 | Core functions |
| Performance (PERF) | 6 | Detection accuracy, latency, robustness |
| Sensor (SEN) | 9 | Piezo CONTACT specs |
| Signal Conditioning (COND) | 8 | Full signal chain: Piezo→ADC |
| Op-amp (OPAMP) | 4 | LM358, TL072 approved |
| ADC (ADC) | 6 | Sampling, resolution |
| Processor (MCU) | 5 | STM32H743 min requirement |
| RF Communication (RF) | 5 | LoRa 433 MHz |
| Environmental (ENV) | 5 | Marine, tropical |
| Reliability (REL) | 3 | MTBF, cycles, margin |
| Power (PWR) | 4 | Battery, runtime |
| Development (TEST) | 3 | Tools, test benches |
| **TOTAL** | **63** | Ready for CEO D/W classification |

---

## NOTES FOR CEO REVIEW

### Hard Constraints (Already Locked — From _Project_Brief.md)
1. ✅ **Piezo CONTACT sensors** — NOT MEMS microphone
2. ✅ **Signal chain**: Piezo → Charge Amp (Q→V) → Bandpass → Gain → Clamp → ADC
3. ✅ **Op-amps**: LM358, TL072 available in Vietnam market
4. ✅ **Hit/miss detection ONLY** — not general audio

### Critical Trade-offs to Decide
- **Sensor count:** 1 per target (minimum) vs. 2 per target (redundancy)
- **ADC**: STM32H743 internal vs. external ADC chip
- **Gain distribution:** 40 dB in one stage vs. split across filter + main stage
- **Environmental:** Sea State 3 (threshold) vs. Sea State 4 (objective)

### Missing Information (Questions for CEO)
- Q.01: Exact panel/target material? (Steel AR400+ assumed)
- Q.02: Impact velocity range? (7.62mm rifle assumed)
- Q.03: Sensor mounting method? (Epoxy potting assumed)
- Q.04: Available budget for PCB/component sourcing?

---

## Next Steps (After CEO D/W Classification)

1. ✅ Collect D/W/PD classification from CEO
2. Run 5-step Pahl-Beitz abstraction → Essential Problem
3. Generate 6-flow function structure
4. Cross-domain sync S1 (Electrical ↔ Software ↔ Mechanical)
5. Update Status.md → Phase 1 ready for Gate 1 review

