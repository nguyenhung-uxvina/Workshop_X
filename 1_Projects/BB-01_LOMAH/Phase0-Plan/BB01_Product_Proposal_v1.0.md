---
created: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v1.0
project: BB-01_LOMAH
status: approved
gate0: PASS (retroactive, CEO confirmed 2026-03-05, formal review 2026-04-09)
version: v2.0
updated: 2026-04-09
changelog: |
  v2.0 (2026-04-09): Fixed P&B §3.1 compliance — solution-neutral functions,
  removed solution-specific requirements, separated selected specs from options,
  fixed cross-document inconsistencies (TRL 9/9, IP66+67, local >80%, Phase status).
feeds_to:
  - FORGE: /odi (deferred), /shift (deferred), /portfolio
  - HELIX: /req (Phase 1 in progress), /morpho (Phase 2 pending)
---

# Product Proposal — BB-01 LOMAH (Location of Miss and Hit)

## 1. Intended Functions (solution-neutral)

**Primary:** Xác định vị trí va chạm của đạn trên mục tiêu và phân loại trúng/trượt
**Secondary:** Truyền kết quả chấm điểm đến hệ thống quản lý trường bắn
**Auxiliary:** Nhận dạng loại đạn (caliber) từ đặc tính va chạm

*Note: Functions mô tả WHAT — không chứa con số (accuracy, range) hay technology choice (piezo, LoRa). Specifications nằm ở §2 Requirements.*

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target | Notes |
|---|----------|-------------|-----|--------|-------|
| 1 | Performance | Độ chính xác xác định vị trí va chạm trên mặt mục tiêu | D | ≤5mm | Sacred |
| 2 | Performance | Phân biệt được đạn từ 5.56mm đến 12.7mm | D | Multi-caliber | |
| 3 | Performance | Hoạt động tại khoảng cách bắn 25-300m | D | | Khoảng cách từ tuyến bắn đến mục tiêu |
| 4 | Performance | Tỷ lệ báo sai (false positive) | D | ≤0.1% | Sacred |
| 5 | Performance | Thời gian từ phát hiện đến hiển thị kết quả | D | ≤100ms | |
| 6 | Environment | Nhiệt độ vận hành | D | 0-55°C | VN tropical + cold storage |
| 7 | Environment | Chịu thời tiết ngoài trời (mưa, bụi, ngập tạm thời) | D | IP66+IP67 dual | Updated from G3 research |
| 8 | Safety | Không gây nhiễu điện từ cho thiết bị bắn và trường bắn | D | | Solution-neutral (passive OR shielded active) |
| 9 | Power | Vận hành bằng pin, không cần nguồn điện tại bãi | D | ≥8h/charge | |
| 10 | Cost | Giá thành đơn vị | D | ≤$5,000 | Sacred. So sánh: import $15-30K |
| 11 | Maintenance | Tuổi thọ | W | MTBF ≥5,000h | |
| 12 | Maintenance | Thời gian lắp đặt trên mỗi mục tiêu | W | ≤30min | |
| 13 | Communication | Truyền dữ liệu không dây đến trạm chấm điểm | D | ≥200m range, battery-compatible | Solution-neutral (không chỉ định LoRa) |
| 14 | Production | Tỷ lệ nội địa hóa theo giá trị | D | ≥80% | Corrected from 90% (realistic estimate) |
| 15 | Integration | Tương thích với hệ thống quản lý trường bắn WX | W | CORTEX RANGE protocol | |

## 3. Cost Target + Production Volume

- Unit cost target: **≤$5,000** (compare: Polytronic ~$15K, SAAB ~$25K)
- Development budget: **~$5,000 NRE** (self-funded)
- Initial production: **10-20 units** (1-2 trường bắn pilot)
- Scale target: **50-100 units/year** after validation
- Local content: **≥80%** (corrected — realistic estimate including import components)
- Target margin: **≥60%** at scale

## 4. Working Principle Suggestions (OPTIONS — not decisions)

| Principle | Advantage | Risk | Research | Score |
|-----------|-----------|------|----------|-------|
| Contact vibration sensing (structural wave) | Rain immune, subsonic capable, orthogonal patent space | Higher bandwidth ADC required, temp compensation needed | [G1] [G2] | 3.67 |
| Air-borne acoustic sensing (shockwave) | Simpler ADC, proven industry approach | Rain/wind sensitive, no subsonic, commodity (5+ competitors) | [G1] | 2.87 |
| Hybrid dual-mode | Best of both — works on any target material | Double complexity, longer timeline | [G1+G2] | 2.82 |
| Optical (camera-based) | Visual evidence, AI scoring | Cost ($8-15K), lighting dependency | — | Deferred |
| Radar (microwave) | All-weather, velocity measurement | Cost ($20K+), no RF expertise | — | Eliminated |

**Selected: Contact vibration sensing** (CEO confirmed 2026-04-09, Step 6 evaluation)

*Note: Detailed technical specs (algorithm, ADC, housing) are Phase 2-3 design decisions documented in research files G1/G2/G3 — NOT in this Product Proposal. See:*
- *G1: `RESEARCH_LOMAH_Competitor_ReverseEngineering_2026-04-09.md`*
- *G2: `RESEARCH_TDOA_Acoustic_Impact_Localization_2026-04-09.md`*
- *G3: `RESEARCH_IP67_Enclosure_Tropical_Military_2026-04-09.md`*

## 5. Risk Assessment + Fallbacks

| Risk | Severity | Fallback |
|------|----------|----------|
| Piezo sensor sourcing in VN | MED | (a) Import from China (cheap, fast) (b) Local ceramic manufacturer (c) Salvage from commercial buzzers |
| TDOA accuracy insufficient for location | HIGH | (a) Increase sensor count (4→8) (b) Simpler zone-based detection (quadrant only) (c) Defer location to Phase 2, ship hit/miss only first |
| IP65 housing in tropical environment | MED | (a) Off-the-shelf junction box (VN electrical market) (b) CNC aluminum enclosure with O-ring seal (c) Conformal coating on PCB + simple housing |
| Power consumption exceeds 8h battery | LOW | (a) Sleep mode between shots (b) Larger battery (c) Solar trickle charge |

## 6. Sacred Constraints (from IFR)

> "LOMAH lý tưởng: phát hiện hit/miss với ZERO false positive, ZERO cần nguồn điện ngoài, ZERO can thiệp từ môi trường, trên MỌI loại đạn VN đang sử dụng."

| # | Sacred Constraint | Lý do | Auto-Req |
|---|-------------------|-------|----------|
| SC-1 | Phát hiện qua rung động cơ học trực tiếp (không qua sóng âm trong không khí) | Miễn nhiễm mưa/gió — yêu cầu then chốt cho VN tropical. SPL > 170dB tại va chạm vượt khả năng MEMS | Req #8 (passive), design direction |
| SC-2 | Chỉ phát hiện trúng/trượt — không phải giám sát âm thanh tổng quát | Giới hạn scope, giảm complexity, tránh feature creep | Scope limiter |
| SC-3 | False positive ≤0.1% | Sai kết quả trường bắn = mất tin tưởng từ khách hàng | Req #4 |
| SC-4 | Giá thành ≤$5,000/unit | Cạnh tranh với import ($15-30K). Vượt = mất thị trường | Req #10 |
| SC-5 | Vận hành ngoài trời mọi thời tiết VN | Trường bắn = outdoor 100%. Mưa = 6 tháng/năm | Req #7 (IP66+IP67) |

## 7. Gate 0 Result

**PASS** — retroactively confirmed (CEO 2026-03-05, formal review 2026-04-09)
- TRL: 9/9 ≥ TRL 4 ✅ (corrected from 6/8)
- Local content: >80% ✅ (corrected from 90%)
- Competitive advantage: 70-80% cheaper than import, rain immune, subsonic capable ✅
- Portfolio fit: CORTEX RANGE ecosystem ✅
- IP/regulatory: Domestic safe. EU export ⚠️ EP2040025A1 watch ✅

---

*Product Proposal BB-01 v2.0 — P&B §3.1 compliant*
*Feeds: HELIX Phase 1 (/req — in progress), FORGE (deferred)*
