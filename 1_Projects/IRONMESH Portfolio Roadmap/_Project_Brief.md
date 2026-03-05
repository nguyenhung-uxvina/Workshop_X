---
created: 2026-03-05
updated: 2026-03-05
type: project
status: active
deadline: 2026-12-31
area: "[[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]]"
tags: [#type/project, #status/active, #topic/electronics, #topic/technology]
---

# IRONMESH Product Portfolio Roadmap

## Tong Quan

| | |
|--|--|
| **Bat dau** | 2026-03-05 |
| **Deadline** | 2026-12-31 (rolling) |
| **Area** | [[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]] |
| **Trang thai** | Active |
| **Constraint** | Solo engineer (KN), 25h/week, pre-revenue |

## Muc Tieu & Tieu Chi Hoan Thanh

> Du an nay HOAN THANH khi: VN-RANGE-001 deployed (VN-LOMAH + basic integration).

- [ ] VN-LOMAH prototype hoat dong (BB-01 → VN-RANGE-001)
- [ ] Revenue tu VN-RANGE-001 (R2 loop activation)
- [ ] Hiring enabled → chuyen tu serial sang parallel development

## IRONMESH Platform — 5 San Pham

| Code | Product | Priority | Status | Notes |
|------|---------|----------|--------|-------|
| VN-LOMAH (BB-01) | Marksmanship scoring | #1 | Active | [[1_Projects/BB-01_LOMAH/_Project_Brief]] |
| VN-CAM | AI camera detection | #2 | Waiting | RPi5 + Hailo-8 (26 TOPS) |
| VN-TRN | Training analytics | #3 | Conceptual | After LOMAH + CAM |
| VN-SMASH | Fire control | #4 | Conceptual | SAFETY CRITICAL — human-in-the-loop |
| CORTEX | C2 integration | #5 | Conceptual | Needs all others first |

## Development Sequence (Musk Sequence — Serial, Not Parallel)

```
VN-LOMAH → VN-CAM → VN-TRN → VN-SMASH → CORTEX
   #1         #2        #3        #4         #5

R2 loop: First revenue → hiring → parallel development
Until then: 25h/week, serial focus
```

## Shared Platform (IRONMESH CDM)

- Compute: RPi5 (all), Hailo-8 (VN-CAM, VN-TRN), STM32H743 (VN-LOMAH, VN-SMASH)
- Comms: Ethernet + WiFi (all), LoRa (field), BLE (config)
- Chi tiet: xem `D:\UxVina\workshop-x-delegation\context\ironmesh.md`

## Competitor Landscape

| Competitor | Origin | Price Point |
|------------|--------|-------------|
| Saab | Sweden | Very high |
| Polytronic | Switzerland | High |
| Australian ADI | Australia | High |
| Elbit | Israel | High |

**Workshop X advantage:** 91% cost reduction, Vietnamese manufacturing, local support.

## Tai Lieu Lien Quan

- [[3_Resources/Tools & Software/IRONMESH CDM Reference]]
- [[3_Resources/SOPs/DCTRS Delegation Protocol]]
- UxVina source: `D:\UxVina\workshop-x-delegation\`

## Kanban

### Done
- [x] IRONMESH CDM architecture defined
- [x] Product portfolio + dev sequence defined
- [x] BB-01 LOMAH project initialized

### In Progress
- [ ] BB-01 LOMAH hardware design (see BB-01 project brief)

### To Do
- [ ] VN-RANGE-001 deployment plan
- [ ] VN-CAM requirements analysis
- [ ] First revenue target + timeline

---

*Project Brief | Thuoc he thong IPARAG*
