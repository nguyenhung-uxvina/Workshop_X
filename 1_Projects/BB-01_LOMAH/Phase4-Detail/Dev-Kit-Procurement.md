# V-SMASH Development Kit Procurement Spec

> **Project**: V-SMASH Fire Control System
> **Phase**: Phase 1 Development
> **Status**: ✅ READY FOR PROCUREMENT
> **Date**: 2026-01-29

---

## 1. Summary

| Item | Qty | Unit | Total |
|------|-----|------|-------|
| Jetson Xavier NX Dev Kit | 3 | $399 | $1,197 |
| Camera Modules | 6 | $30 | $180 |
| IMU Modules | 6 | $15 | $90 |
| Accessories | - | - | $200 |
| Shipping + Contingency | - | - | $333 |
| **TOTAL** | | | **$2,000** |

**VND**: ~₫50,000,000

---

## 2. Jetson Xavier NX (per DEC-005)

| Spec | Value |
|------|-------|
| Model | Jetson Xavier NX Developer Kit |
| Part # | 945-83518-0005-000 |
| GPU | 384 CUDA + 48 Tensor cores |
| CPU | 6-core ARM Carmel |
| RAM | 8GB LPDDR4x |
| AI Perf | 21 TOPS |
| Power | 10-15W |
| CSI | 2× (up to 6 cameras) |

**Quantity**: 3 (dev + integration + spare)

**Supplier Priority**:
1. Seeed Studio ($399, 7-14d)
2. Arrow Electronics
3. Waveshare

---

## 3. Cameras

| Model | Sensor | Resolution | Low Light | Qty | Cost |
|-------|--------|------------|-----------|-----|------|
| **IMX290** | Sony | 1080p/60fps | 0.01 lux ✅ | 4 | $25 |
| IMX477 | Sony | 12MP/40fps | Good | 2 | $50 |

**Total**: 6 modules, ~$200

---

## 4. IMU

| Model | Type | Interface | Fusion | Qty | Cost |
|-------|------|-----------|--------|-----|------|
| **BNO055** | 9-DOF | I2C | Built-in ✅ | 4 | $15 |
| MPU9250 | 9-DOF | I2C/SPI | External | 2 | $8 |

**Total**: 6 modules, ~$76

---

## 5. Accessories

| Category | Items | Cost |
|----------|-------|------|
| Storage | microSD 128GB ×4, NVMe 256GB ×2 | $140 |
| Power | 19V PSU ×3, cables | $60 |
| Cables | CSI, USB-C, HDMI, jumpers | $53 |
| Cooling | Noctua 40mm ×3, heatsinks | $60 |
| **Total** | | **$313** |

---

## 6. Order Plan

| Week | Action |
|------|--------|
| W1 Mon | Order Jetson from Seeed |
| W1 Tue | Order cameras (AliExpress) |
| W1 Wed | Order IMU (Hshop) |
| W2 | Local items arrive |
| W3 | Jetson arrives, setup begins |

---

## 7. Budget

| Line | Amount |
|------|--------|
| Hardware | $1,786 |
| Shipping | $100 |
| Contingency (10%) | $189 |
| **TOTAL** | **$2,075** |

---

## 8. References

- [[DEC-005-processing-platform]]
- [[Resource-Plan]]
- [[Phase-1-Schedule]]

---

*Ready for procurement*
