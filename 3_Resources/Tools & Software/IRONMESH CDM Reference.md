---
created: 2026-03-05
updated: 2026-03-05
type: article
status: active
tags: [#type/article, #status/active, #topic/electronics, #topic/technology]
---

# IRONMESH Common Design Model (CDM) — Reference

> Shared platform architecture cho Workshop X Product Portfolio.
> Source: `D:\UxVina\workshop-x-delegation\context\ironmesh.md`

## Product Portfolio

| Code | Product | Priority | Status |
|------|---------|----------|--------|
| VN-LOMAH (BB-01) | Marksmanship scoring | #1 | Active |
| VN-CAM | AI camera detection | #2 | Waiting |
| VN-TRN | Training analytics | #3 | Conceptual |
| VN-SMASH | Fire control (SAFETY CRITICAL) | #4 | Conceptual |
| CORTEX | C2 integration | #5 | Conceptual |

## Shared Hardware

| Component | Used By | Notes |
|-----------|---------|-------|
| Raspberry Pi 5 | All | Primary SBC, edge compute |
| Hailo-8 (26 TOPS) | VN-CAM, VN-TRN | AI inference accelerator |
| STM32H743 | VN-LOMAH, VN-SMASH | Real-time MCU |
| FPGA iCE40 | VN-LOMAH (optional) | Ultra-low latency |

## Shared Comms

| Interface | Used By |
|-----------|---------|
| Ethernet | All (primary backbone) |
| WiFi | All (secondary/field) |
| LoRa | Field products (long-range telemetry) |
| BLE | Peripheral config |

## Reuse Targets

- Hardware modules shared across products
- Software libraries reusable (signal processing, comms, data logging)
- Enclosure/mounting standards

## Full Source Files

- CDM architecture: `D:\UxVina\workshop-x-delegation\context\ironmesh.md`
- Product portfolio: `D:\UxVina\workshop-x-delegation\context\products.md`
- Environment specs: `D:\UxVina\workshop-x-delegation\context\environment.md`
- VN-LOMAH detail: `D:\UxVina\workshop-x-delegation\context\vn-lomah.md`

---

*Resource | Thuoc he thong IPARAG*
