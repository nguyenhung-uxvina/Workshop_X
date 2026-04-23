---
created: 2026-04-16
updated: 2026-04-16
type: study-guide
topic: Robustool (ICDM Step 8)
sources: Kraus, Weiss & Hari ICED'07, ICDM research doc, web fragments
source_quality: ⚠️ Original paper paywalled — reconstructed from abstracts + domain knowledge
purpose: Build mental model before Drill B1
---

# Robustool — Study Guide

> **Feynman Target:** CEO giải thích Robustool trong 1 câu cho kỹ sư WX.

---

## 1. Vấn Đề Robustool Giải Quyết

**P&B traditional:** Đánh giá concept bằng VDI 2225 (technical + economic). Nhưng VDI 2225 KHÔNG hỏi:
- Nếu người dùng vận hành SAI thì sao? (ngoài spec, nhưng thực tế xảy ra)
- Nếu 3 năm sau cần upgrade sản phẩm thì sao? (mở rộng tính năng)

**Kết quả:** Concept "tốt nhất" theo VDI 2225 có thể:
- Dễ hỏng khi dùng sai (reliability risk)
- Không upgrade được (vendor lock-in, thiết kế cứng nhắc)

**Robustool bổ sung 2 chiều đánh giá mà VDI 2225 bỏ lỡ:**

```
VDI 2225:  Performance + Cost     → "concept tốt nhất HÔM NAY"
Robustool: Misuse + Upgradability → "concept tốt nhất CHO CẢ VÒNG ĐỜI"
```

---

## 2. Robustool Là Gì — Cấu Trúc

**Định nghĩa (Kraus, Weiss & Hari, ICED'07):**
> Robustool là một **quantitative checklist dạng Excel** cho phép so sánh concept variants trên khả năng chịu đựng vận hành sai và khả năng nâng cấp tương lai.

### 2 Chiều Đánh Giá

| Chiều | Ý nghĩa | Ví dụ WX |
|---|---|---|
| **Dimension A: Withstand Illegitimate Use** | Sản phẩm chịu được khi người dùng dùng NGOÀI spec | Xạ thủ kéo trigger khi chưa mount weapon → cam interlock bảo vệ |
| **Dimension B: Future Enhancements** | Sản phẩm có thể upgrade dễ dàng, ít tốn kém | MWI cho phép thêm weapon module mới mà không redesign cradle |

### Format Trả Lời

Mỗi câu hỏi: **Yes / No / N/A**

- Câu hỏi đánh dấu **"A" (Critical)** = bắt buộc cho robustness. Nếu trả lời "No" → cảnh báo đỏ.
- Người dùng có thể **thêm câu hỏi riêng** theo kinh nghiệm ngành/sản phẩm.

---

## 3. Checklist Robustool — Tái Tạo Cho WX Defense Context

*(Gốc: Kraus/Weiss/Hari ICED'07. Bổ sung câu hỏi defense-specific cho WX.)*

### Dimension A — Withstand Illegitimate / Improper Use (10 câu)

| # | Câu hỏi | Critical? | Scope |
|---|---|:-:|---|
| A1 | Concept có fail-safe mode không? (nếu 1 thành phần hỏng, hệ thống dừng AN TOÀN, không gây hại) | **A** | Safety |
| A2 | Concept chịu được overload cơ học ≥1.5× rated load? | **A** | Structural |
| A3 | Concept chịu được sai điện áp (±20% nominal)? | | Electrical |
| A4 | Concept chịu được nhiệt độ vượt spec (VN tropical: 50-65°C)? | **A** | Environmental |
| A5 | Concept chịu được nước/ẩm (IP54+ hoặc cabin sealed)? | | Environmental |
| A6 | Concept có idiot-proof interface? (không thể lắp sai / cắm ngược) | **A** | Human factors |
| A7 | Concept có hard mechanical limit ngăn vượt biên giới an toàn? | **A** | Safety |
| A8 | Concept chịu được thao tác nhanh/thô (điều kiện stress cao)? | | Operational |
| A9 | Concept có cảnh báo rõ ràng khi vận hành ngoài spec? | | Usability |
| A10 | Concept chịu được sốc vận chuyển (MIL-STD-810H Method 516.8)? | | Transport |

### Dimension B — Future Enhancements / Upgradability (10 câu)

| # | Câu hỏi | Critical? | Scope |
|---|---|:-:|---|
| B1 | Concept có interface mở (modular) cho phép thêm module mới? | **A** | Modularity |
| B2 | Concept có communication bus/protocol chuẩn (CAN, SPI, USB, Ethernet)? | | Interoperability |
| B3 | Concept có software-updatable firmware? (OTA hoặc USB) | **A** | SW upgrade |
| B4 | Concept có physical space dự trữ (≥15% volume) cho module tương lai? | | Physical |
| B5 | Concept có power budget dự trữ (≥20% capacity) cho module tương lai? | | Electrical |
| B6 | Concept cho phép thay thế subsystem mà không redesign toàn bộ? | **A** | Serviceability |
| B7 | Concept tương thích với ít nhất 1 variant khác trong portfolio? | | Platform |
| B8 | Concept có test points/diagnostics cho integration testing? | | Testability |
| B9 | Data format concept có backward-compatible hoặc versioned? | | Data |
| B10 | Concept cho phép tăng performance (sensor accuracy, speed) bằng component swap? | | Scalability |

---

## 4. Scoring Method

### Bước 1: Trả lời Yes/No/N/A cho tất cả 20 câu

### Bước 2: Tính Robustness Score

```
Robustness Score (Dim A) = Số "Yes" trả lời / Số câu applicable (không tính N/A) × 100%
Robustness Score (Dim B) = Số "Yes" trả lời / Số câu applicable (không tính N/A) × 100%

Overall Robustool Score = (Score A + Score B) / 2
```

### Bước 3: Critical Check

Nếu BẤT KỲ câu đánh dấu **"A" (Critical)** có trả lời "No" → **RED FLAG**
→ Concept có structural weakness cần sửa trước khi select.

### Bước 4: So sánh concept variants

| Concept | Dim A (Misuse) | Dim B (Upgrade) | Overall | Critical "No" count |
|---|:-:|:-:|:-:|:-:|
| C1 | 80% | 70% | 75% | 0 |
| C2 | 60% | 90% | 75% | 1 (A4) |
| C3 | 90% | 50% | 70% | 0 |

→ C1 và C2 cùng overall 75%, nhưng C2 có 1 Critical "No" → C1 thắng.

### Phân loại Score

| Score | Phân loại | Hành động |
|:-:|---|---|
| **≥80%** | 🟢 Robust | Concept sẵn sàng cho embodiment |
| **60-79%** | 🟡 Acceptable | Cần cải thiện các "No" items trong Phase 3 |
| **<60%** | 🔴 Fragile | Concept có rủi ro nghiêm trọng — xem xét lại |

---

## 5. Robustool vs Các Tool Khác Trong Step 8

| Tool | Đánh giá gì | Khi nào fail |
|---|---|---|
| **CFMA** | Failure modes ở concept level | Concept có FM nào critical? |
| **CDTC** | Cost estimate sớm | Concept có vượt budget? |
| **RTA** | Risk + time-to-market | Concept có information gap lớn? |
| **Robustool** | **Misuse resilience + upgrade path** | **Concept dễ hỏng khi dùng sai? Không upgrade được?** |

**4 tools = 4 lens khác nhau nhìn vào cùng 1 concept.** Concept phải pass tất cả 4 để vào Phase 3.

---

## 6. Ví Dụ Nhanh — LITE C4 (Preview cho Drill B1)

CEO sẽ làm Drill B1 bằng cách apply Robustool cho LITE C4 (R3 Elastomer + M3 Taper-cam).

**Preview 3 câu dễ đoán:**
- A6 (idiot-proof): C4 dùng taper-pin → có thể lắp sai orientation? → có lẽ **No** (cần keying)
- B1 (modular interface): C4 dùng cam lever → swap weapon module OK → **Yes**
- A7 (hard mechanical limit): C4 có SW + Mech dual interlock → **Yes** (đã thiết kế)

---

## 7. Áp Dụng Cho Drill B1

**Input:** LITE C4 concept (từ BB WP Search + BD Risk)
**Output:** Robustool checklist 20 câu, score A + B + Overall, Critical check
**Time target:** 20 phút
**Pass criteria:** Hoàn thành tất cả 20 câu + identify ≥1 Critical "No" → propose fix

---

## 8. Feynman Check — 1 Câu

> **"Robustool là quantitative checklist đánh giá concept trên 2 chiều mà VDI 2225 bỏ lỡ: chịu được người dùng vận hành SAI (misuse) và có thể UPGRADE tương lai — dùng Yes/No trả lời 20 câu, tính %, flag các Critical 'No'."**

---

## Sources

- [Kraus, Weiss & Hari — Design to Withstand Improper Use and Design for Future Enhancements (ICED'07)](https://www.designsociety.org/download-publication/25697/Design+to+Withstand+Improper+Use+and+Design+for+Future+Enhancements,+Are+Incorporated+in+the+New+Robustool)
- [Hari — Extension of Pahl & Beitz Systematic Method (Procedia CIRP 2015)](https://www.researchgate.net/publication/283908326_Extension_of_the_Pahl_Beitz_Systematic_Method_for_Conceptual_Design_of_a_New_Product)
- [ICDM Overview (Academia.edu)](https://www.academia.edu/59514794/ICDM_an_Integrated_Methodology_for_the_Conceptual_Design_of_New_Systems)
- Galaxy note: [[DSO Pre-Ranking — Performance × Risk Trước Khi Tổ Hợp]] (sibling tool)
- `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_ICDM_Conceptual_Design_Method_2026-03-26.md` §2.6

### Source Quality Note
⚠️ ICED'07 original paper (Robustool full method) is paywalled. Checklist questions in Section 3 are **reconstructed from abstracts + defense engineering domain knowledge**, NOT verbatim from paper. The 2 dimensions and Yes/No/N/A + Critical "A" format are confirmed from multiple search fragments. The 20 specific questions are WX-adapted, not original Hari/Weiss questions.
