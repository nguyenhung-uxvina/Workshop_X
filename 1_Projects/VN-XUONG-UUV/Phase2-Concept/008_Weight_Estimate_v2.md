---
project: VN-XUONG-UUV
phase: 2
type: weight-estimate
document: "008"
version: 2.0
created: 2026-03-07
updated: 2026-03-07
status: AI-DRAFT
data_confidence: MEDIUM (20% L2 user-confirmed, 30% L3 catalog, 50% L5 engineering assumptions)
changelog:
  - version: v2.0
    date: 2026-03-07
    author: AI (T2)
    changes: "Bottom-up weight estimate for baseline concept. No TMS on vessel (drum in UUV). Benchmarked against TRV reference 2.7t."
---

# VN-XUONG-UUV — Doc 008: Weight Estimate v2.0

[AI-DRAFT v1]

## 1. Mục Đích

Ước lượng trọng lượng bottom-up cho baseline concept đã chọn (Doc 007). Dùng để:
- Kiểm tra tương thích với crane SWL tàu mẹ (2.5t — chỉ cho UUV)
- Input cho preliminary stability check
- Input cho propulsion sizing (twin OB HP selection)
- Benchmark với TRV reference (2.7t lightship)

---

## 2. Lightship Breakdown

| # | Subsystem | Items | Mass (kg) | Confidence | Source |
|---|-----------|-------|-----------|------------|--------|
| 1 | Hull structure | 8m aluminum 5083 hull, frames, keel, transom, deck plating | 1,200 | [L4] | 8m aluminum work boat benchmarks: 1,000-1,400 kg |
| 2 | Superstructure | Console frame, canopy supports, windscreen, guardrails | 150 | [L5] | Estimate for open work boat with canopy |
| 3 | Propulsion | Twin outboard 2 × 60 HP (e.g., Yamaha F60), controls, steering | 240 | [L3] | Yamaha F60: ~105 kg each × 2 = 210 kg + rigging 30 kg |
| 4 | LARS — Ramp | Stern ramp structure (aluminum), hinges, tilt mechanism mounting | 180 | [L5] | 3.5m ramp × 0.65m wide, 6mm plate + frames |
| 5 | LARS — Winch | Electric winch 10 kN, VFD, cable (30m wire rope), mounting frame | 120 | [L4] | Marine electric winch ~80-100 kg + frame + cable |
| 6 | LARS — Channel | Recovery channel frame, rollers (×8-10), UHMWPE liners, V-funnel entry | 100 | [L5] | Aluminum frame + SS rollers |
| 7 | LARS — Cradle | UHMWPE saddle, toggle clamps ×4, cradle frame (aluminum) | 60 | [L5] | Light — cradle for D=400mm UUV |
| 8 | Ramp tilt actuator | Electric linear actuator + mounting brackets | 40 | [L4] | Industrial linear actuator ~25-35 kg |
| 9 | Genset | Diesel genset 5-8 kW (e.g., Kubota/Yanmar) + mounting, exhaust | 200 | [L3] | Kubota GL7000: ~170 kg + mounting 30 kg |
| 10 | Electrical system | Battery bank (24V, 2×12V), wiring, distribution panel, switches | 80 | [L5] | 2 × marine battery (~25 kg each) + wiring |
| 11 | Navigation/Comms | GPS, compass, VHF radio, nav lights, searchlight | 20 | [L4] | Standard SOLAS equipment |
| 12 | Fuel system | Fuel tank (~200L), lines, filters, fill/vent | 30 | [L5] | Tank only — fuel counted in deadweight |
| 13 | Deck fittings | Cleats, bollards, tow bridle, fenders, cable guides, bilge pump | 50 | [L5] | Standard work boat fittings |
| 14 | Console + seats | Helm console, 3 × bucket seats, instrument panel, UUV controller mount | 80 | [L5] | Aluminum console + 3 seats |
| 15 | Safety equipment | PFDs ×3, fire extinguisher, first aid, safety harness points | 15 | [L4] | Standard |
| | **SUBTOTAL** | | **2,565** | | |
| | **Margin (10%)** | | **257** | | |
| | **LIGHTSHIP TOTAL** | | **~2,820 kg** | | |

### Lightship by Category

| Category | Mass (kg) | % of Lightship |
|----------|-----------|----------------|
| Hull + superstructure (#1-2) | 1,350 | 47.9% |
| Propulsion (#3) | 240 | 8.5% |
| LARS system (#4-8) | 500 | 17.7% |
| Power + electrical (#9-10) | 280 | 9.9% |
| Outfitting (#11-15) | 195 | 6.9% |
| Margin | 257 | 9.1% |
| **TOTAL** | **2,820** | **100%** |

---

## 3. Deadweight (Variable Loads)

| Item | Mass (kg) | Notes |
|------|-----------|-------|
| Crew × 3 | 240 | 80 kg/person standard |
| UUV payload | 550 | Dry weight [L2] |
| Fuel (200L diesel) | 170 | ~0.85 kg/L |
| Tether cable on deck | 13 | 0.5 kg/km × 25 km [L2] — negligible |
| Stores, tools, spares | 30 | Minimal for day operations |
| Fresh water (20L) | 20 | Drinking water |
| **DEADWEIGHT TOTAL** | **~1,023 kg** | |

---

## 4. Displacement Summary

| Condition | Mass (kg) | Use Case |
|-----------|-----------|----------|
| Lightship (empty) | **~2,820** | Towing, dry-dock |
| Half load (crew + half fuel, no UUV) | **~3,225** | Transit to operating area |
| Full load (crew + fuel + UUV) | **~3,843** | LARS operations |
| Max displacement | **~3,843** | = full load |

---

## 5. Benchmark Comparison

| Parameter | TRV Reference | VN-XUONG-UUV v2 | Delta |
|-----------|--------------|-----------------|-------|
| LOA | 8 m | 8 m | = |
| Hull type | RIB (inflatable collar) | Aluminum 5083 | Aluminum heavier |
| Lightship | 2,700 kg | 2,820 kg | +120 kg (+4.4%) |
| LARS | Channel + winch | Channel + winch + genset + actuator | +~360 kg LARS subsystem |
| Speed | 30 kts | 25 kts [L2] | Lower — lighter engines OK |
| Complement | Max 11 | 3 crew | Less outfit needed |

**Assessment:** Lightship 2,820 kg hợp lý — chỉ +4.4% so với TRV dù aluminum nặng hơn RIB. Offset bởi: (1) VN-XUONG-UUV không có sponson tubes, (2) crew 3 vs 11 → less outfitting, (3) lower speed → lighter engines.

---

## 6. Critical Checks

### 6.1 Crane SWL Check

- Crane tàu mẹ SWL: 2,500 kg
- Xuồng lightship: 2,820 kg → **KHÔNG cẩu được bằng crane tàu mẹ**
- **Confirmed:** Xuồng towed alongside hoặc self-transit. Crane chỉ dùng cho UUV loading (550 kg) — OK.

### 6.2 Speed Check (Preliminary)

- Loaded displacement: 3,843 kg
- Twin outboard: 2 × 60 HP = 120 HP total
- Power-to-weight: 120 HP / 3.84 t = **31.3 HP/t**
- Benchmark: 25 kts cần ~25-35 HP/t cho semi-planing hull [L4]
- **Result: 31.3 HP/t → 25 kts achievable** [L5]

### 6.3 Stability Indicator (Preliminary) [L5]

- Beam target: ≥ 2.6 m (Phase 3 xác nhận)
- B/D ratio: ~2.6/1.0 = 2.6 (adequate for work boat)
- Displacement/length ratio: 3,843 / (8.0)³ = 7.5 (moderate, good for semi-planing)
- **Worst-case trim:** UUV 550 kg tại stern during recovery → cần detailed GM/trim calculation Phase 3

### 6.4 LARS Load Check

- UUV weight on ramp (15 deg): 550 × 9.81 × sin(15°) = **1,397 N** (gravity component)
- Friction (μ=0.1 rollers): 550 × 9.81 × 0.1 × cos(15°) = **521 N**
- Total winch pull: **~1,918 N** (~196 kgf)
- Winch capacity: 10,000 N → **Safety factor = 5.2×** — adequate [L4]

---

## 7. Weight Sensitivity

| Scenario | Impact on Lightship | Notes |
|----------|-------------------|-------|
| Hull 5mm instead of 6mm plate | -80 kg | Cần structural check |
| Single outboard instead of twin | -105 kg | PD-1 decided twin — not applicable |
| No genset (battery-only LARS) | -170 kg | Insufficient for sustained ops — rejected |
| Heavier hull (framing over-estimate) | +150 kg | Worst case → lightship ~2,970 kg, still OK |
| Controller heavier than assumed (50 kg vs 30 kg) | +20 kg | Negligible impact |

---

## 8. Action Items

- [ ] Validate hull weight (#1) với shipyard estimate — largest single item (42% of subtotal)
- [ ] Confirm outboard model + weight từ dealer catalog [L3 → L1]
- [ ] Confirm genset model + weight từ dealer catalog [L3 → L1]
- [ ] Detailed trim + stability calculation khi có beam confirmed (Phase 3)
- [ ] Update weight estimate khi có ICD data (controller weight, UUV wet weight)

---

*Doc 008 Weight Estimate v2.0 | VN-XUONG-UUV Phase 2 Conceptual Design | COD: Offload (O1) — AI calculated, human verify*
