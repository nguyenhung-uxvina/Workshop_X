# Workshop X Product Portfolio — Quick Reference

---

## VN-LOMAH (BB-01) — PRIORITY #1
**Location of Miss and Hit Detection**
- Piezoelectric CONTACT sensors (NOT MEMS)
- Signal: Piezo → Charge Amp → BPF → Gain → Clamp → ADC
- Op-amps: LM358, TL072 (Vietnam market)
- 4+ sensor channels, RPi5 compute
- Deployment: VN-RANGE-001 (first priority)
- Detail: see `context/vn-lomah.md`

## VN-CAM — PRIORITY #2
**AI Camera Detection System**
- RPi5 + Hailo-8 (26 TOPS inference)
- Outdoor deployment — variable lighting, weather
- Edge-first: local inference, no cloud dependency
- Video pipeline: capture → preprocess → Hailo inference → post-process → output
- Known issue: thermal throttling investigation needed for sustained operation

## VN-TRN — PRIORITY #3
**Training Analytics Platform**
- Aggregates data from VN-LOMAH, VN-CAM, other range sensors
- Analytics engine + reporting UI
- Database-backed: historical training records
- Deployment: after VN-LOMAH + VN-CAM are operational

## VN-SMASH — PRIORITY #4
**Fire Control System — SAFETY CRITICAL**
- Targeting solutions + actuator control
- MANDATORY: Safety interlocks at hardware level
- MANDATORY: Human-in-the-loop for all engagement decisions
- Highest review rigor — PLAUSIBLE + additional safety review
- AI role: ADVISORY ONLY — human decides, human fires

## CORTEX — PRIORITY #5
**Central Management / C2 Integration**
- Web-based management interface
- Integrates all IRONMESH products
- Multi-product database, user management, reporting
- Last in sequence: needs other products operational first

---

## Development Sequence (Musk Sequence — Serial, Not Parallel)

```
VN-LOMAH → VN-CAM → VN-TRN → VN-SMASH → CORTEX
   #1         #2        #3        #4         #5

Current focus: VN-RANGE-001 deployment
  = VN-LOMAH operational + basic integration

R2 loop activation: First revenue from VN-RANGE-001
  → Enables hiring → Enables parallel development
  → Until then: 25h/week, serial focus
```

---

## Competitor Landscape

| Competitor | Origin | Products | Price Point |
|------------|--------|----------|-------------|
| Saab | Sweden | LOMAH, training systems | Very high |
| Polytronic | Switzerland | Target systems, LOMAH | High |
| Australian ADI | Australia | Range systems | High |
| Elbit | Israel | Training, simulation | High |

**Workshop X advantage:** 91% cost reduction, Vietnamese manufacturing, local support.
**Workshop X constraint:** Solo engineer (KN), 25h/week, pre-revenue.
