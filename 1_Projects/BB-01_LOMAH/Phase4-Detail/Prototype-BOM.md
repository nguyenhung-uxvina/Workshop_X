---
title: "BB-01 Prototype BOM"
title_vi: "BOM nguyên mẫu BB-01"
project: bb-01
type: procurement
created: 2026-01-29
updated: 2026-01-29
status: active
phase: embodiment
gate: G2
tags: [bom, procurement, prototype, supplier]
entities:
  - type: component
    name: ESP32-WROOM-32E
  - type: component
    name: MEMS-INMP441
  - type: component
    name: ADC-ADS1256
  - type: component
    name: LoRa-SX1278
  - type: supplier
    name: Hshop.vn
  - type: supplier
    name: AliExpress
  - type: supplier
    name: Jotun-VN
metrics:
  budget_vnd: 17000000
  budget_usd: 657
  unit_cost_usd: 117
  quantity: 3
  lead_time_days: 14
links:
  parent: "[[README]]"
  related:
    - "[[Gate-2-Ready]]"
    - "[[cad/Drawing-List]]"
---

# BB-01 Prototype BOM & Procurement List

> **Project**: BB-01 LOMAH Acoustic Detection
> **Phase**: Prototype (3 units)
> **Status**: ✅ READY FOR PROCUREMENT
> **Date**: 2026-01-29

---

## 1. BOM Summary

| Category | Items | Cost/Unit | Total (3 units) |
|----------|-------|-----------|-----------------|
| Electronics | 12 | $67.50 | $202.50 |
| Connectors | 5 | $18.72 | $56.16 |
| Mechanical | 6 | $15.00 | $45.00 |
| Coating | 3 | $10.00 | $30.00 |
| Misc | 4 | $7.00 | $21.00 |
| **SUBTOTAL** | **30** | **$117.22** | **$351.66** |

**With spares + shipping + contingency**: **$657** (~₫16.4M)

---

## 2. Electronics - Core

| # | Part | Spec | Qty | Cost | Supplier | Lead |
|---|------|------|-----|------|----------|------|
| E01 | **ESP32-WROOM-32E** | 4MB, WiFi+BT | 1 | $3.50 | Hshop | 3d |
| E02 | **LoRa SX1278** | 433MHz, 20dBm | 1 | $4.00 | Hshop | 3d |
| E03 | **ADC ADS1256** | 24-bit, 8ch | 1 | $8.00 | AliExpress | 10d |
| E04 | **MEMS Mic INMP441** | I2S, IP67 | 6 | $2.50 | AliExpress | 10d |
| E05 | Op-Amp TL074 | Quad, low noise | 2 | $0.50 | Nhật Tảo | 2d |
| E06 | Regulator LM2596 | 12V→3.3V | 2 | $1.50 | Nhật Tảo | 2d |
| E07 | Crystal 8MHz | 20ppm | 1 | $0.30 | Nhật Tảo | 2d |
| E08 | LED RGB | Common cathode | 6 | $0.20 | Nhật Tảo | 2d |
| E09 | Button | Tactile, waterproof | 2 | $0.50 | Nhật Tảo | 2d |
| E10 | Antenna 433MHz | SMA, 5dBi | 1 | $2.00 | Hshop | 3d |
| E11 | Capacitors | 0.1uF-100uF kit | 1 | $3.00 | Nhật Tảo | 2d |
| E12 | Resistors | 1K-100K kit | 1 | $2.00 | Nhật Tảo | 2d |

**Electronics**: $67.50/unit

---

## 3. Connectors - IP68 ⭐

| # | Part | Spec | Qty | Cost | Supplier | Lead |
|---|------|------|-----|------|----------|------|
| C01 | **Power M12** | 4-pin, IP68, gold | 1 | $4.50 | AliExpress | 10d |
| C02 | **Data M12** | 8-pin, IP68, gold | 1 | $5.50 | AliExpress | 10d |
| C03 | **Mic Harness M12** | 12-pin, IP68 | 1 | $6.00 | AliExpress | 10d |
| C04 | Cable Gland M12 | IP68, nylon | 3 | $0.50 | Nhật Tảo | 2d |
| C05 | SMA Bulkhead | IP67 | 1 | $1.22 | Nhật Tảo | 2d |

**Connectors**: $18.72/unit

---

## 4. Mechanical

| # | Part | Spec | Qty | Cost | Supplier | Lead |
|---|------|------|-----|------|----------|------|
| M01 | **Enclosure** | IP65, ABS, 200×150×75 | 1 | $8.00 | Nhật Tảo | 5d |
| M02 | Bracket | SS304, L-type | 2 | $1.00 | Workshop X | 7d |
| M03 | Strain Relief | PA66, saddle | 3 | $0.50 | Nhật Tảo | 2d |
| M04 | Cable Clips | Adhesive, 5-7mm | 10 | $0.10 | Nhật Tảo | 2d |
| M05 | Screws M3×8 | SS304 | 20 | $0.05 | Nhật Tảo | 2d |
| M06 | Gasket | Silicone, custom | 1 | $2.00 | Workshop X | 5d |

**Mechanical**: $15.00/unit

---

## 5. Coating & Protection

| # | Part | Spec | Qty | Cost | Supplier | Lead |
|---|------|------|-----|------|----------|------|
| T01 | **Marine Coat** | Jotun Hardtop XP | 0.1L | $5.00 | Jotun VN | 7d |
| T02 | Conformal Coat | Silicone spray | 0.05L | $3.00 | Nhật Tảo | 3d |
| T03 | Primer | Jotun Vinyl | 0.05L | $2.00 | Jotun VN | 7d |

**Coating**: $10.00/unit

---

## 6. Power (Tracked Separately)

| # | Part | Spec | Qty | Cost | Supplier | Lead |
|---|------|------|-----|------|----------|------|
| P01 | **Battery** | LiFePO4, 12V/10Ah | 1 | $35.00 | Hshop | 5d |
| P02 | BMS | 4S, 30A, balance | 1 | $5.00 | AliExpress | 10d |
| P03 | Fuse + Switch | 10A, waterproof | 1 | $2.00 | Nhật Tảo | 2d |

**Power**: $42.00/unit (battery = consumable)

---

## 7. Order Summary

### By Supplier

| Supplier | Items | Est. Total | Priority |
|----------|-------|------------|----------|
| **AliExpress** | ADC, Mics, IP68 conn, BMS | $180 | P1 (10d lead) |
| **Hshop.vn** | ESP32, LoRa, Antenna, Battery | $145 | P1 (5d lead) |
| **Nhật Tảo** | Passives, cables, enclosure | $75 | P2 (2d lead) |
| **Jotun VN** | Marine coating, primer | $25 | P2 (7d lead) |
| **Workshop X** | Brackets, gaskets, PCB | $50 | P3 (7d lead) |

### Order Quantities (3 units + spares)

| Item | Need | Spares | Order |
|------|------|--------|-------|
| ESP32 | 3 | +2 | **5** |
| LoRa | 3 | +2 | **5** |
| ADC | 3 | +1 | **4** |
| MEMS Mic | 18 | +6 | **24** |
| IP68 Conn | 9 | +3 | **12** |
| Enclosure | 3 | +1 | **4** |
| Battery | 3 | +1 | **4** |

---

## 8. Budget (3 Prototypes)

| Line Item | Amount |
|-----------|--------|
| BOM × 3 units | $351.66 |
| Batteries × 4 | $140.00 |
| Spares (20%) | $70.00 |
| Shipping | $30.00 |
| PCB (5 pcs) | $25.00 |
| Contingency (10%) | $61.67 |
| **TOTAL** | **$678.33** |

**VND**: ~₫17,000,000

---

## 9. Long-Lead Items ⚠️

| Item | Lead | Action |
|------|------|--------|
| IP68 Connectors | 10 days | Order Week 1 |
| MEMS Microphones | 10 days | Order Week 1 |
| ADC ADS1256 | 10 days | Order Week 1 |
| Marine Coating | 7 days | Order Week 1 |

---

## 10. References

- [[Gate-2-Ready]] - Design baseline
- [[MTBF-Improvement-Plan]] - IP68 upgrade rationale
- [[Marine-Coating-Spec]] - Coating spec
- [[Strain-Relief-Design]] - Strain relief

---

*Ready for procurement approval*
