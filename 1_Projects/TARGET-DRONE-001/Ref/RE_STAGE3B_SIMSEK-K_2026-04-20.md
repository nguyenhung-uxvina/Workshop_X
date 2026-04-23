---
created: 2026-04-20
type: re-morphological-matrix
source: /reverse-engineering --mode mecha --stage 3B
project: TARGET-DRONE-001
product: V5-JET-VN
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 3B: MORPHOLOGICAL MATRIX — V5-JET-VN
## IP-Free Conceptual Alternatives | 2026-04-20

**NLM Caveat:** Engine, datalink, and FCC alternatives drawn from general mechatronic knowledge outside uploaded sources. Independently verify for procurement.

---

## CRITICAL SUB-FUNCTION DEEP DIVE

### SF-02/03 Propulsion — ITAR-Free Turbojet 300-500N Class

| Engine | Origin | Thrust | RPM | Diameter | Mass | TSFC | Export | Price Est. | Risk |
|--------|--------|--------|-----|----------|------|------|--------|-----------|------|
| TEI-TJ90 | Turkey | 390N | 96k | 153.5mm | 6.95kg | 0.17 | Wassenaar/EUC | ~$15-20K (TT) | LOW (proven) |
| PBS TJ40-G1 | Czechia | 395N | 98k | 147mm | ~7kg | ~0.17 | Wassenaar/EUC, ITAR-free | ~$20K | LOW |
| JetCat P400 PRO | Germany | 400N | 98k | 148mm | ~6.5kg | ~0.18 | Dual-use EUC | ~$12K | MEDIUM |
| KingTech K-450G4 | Taiwan | 450N | 150k | 149mm | ~5.5kg | ~0.20 | COTS, no EUC | ~$5.5K | HIGH (commercial FADEC) |
| AMT Titan | Netherlands | ~390N | ~100k | ~150mm | ~7kg | ~0.18 | Dual-use EUC | ~$15K | MEDIUM |

**Recommendation:** PBS TJ40-G1 for Concept A (proven aerospace-grade), KingTech K-450G4 for Concept B (cost-driven, accepts higher risk).

### SF-09 Flight Control — Open-Source Autopilot

| Platform | RTOS | Processor | Loop Rate | EKF | Fixed-Wing | VN Suitability |
|----------|------|-----------|-----------|-----|-----------|---------------|
| **PX4** | NuttX/FreeRTOS | STM32H7 | 400Hz | EKF2 | Excellent | **Best for sovereignty** — modular, proprietary apps isolated |
| **ArduPilot** | ChibiOS | STM32H7 | 400Hz | EKF3 | Excellent | **Best for fast deployment** — richest fixed-wing features |
| iNAV | FreeRTOS | F722/H7 | 500Hz | Limited | FPV only | **Unsuitable** — no rigorous EKF for transonic |
| BetaFlight | FreeRTOS | F722 | 8kHz | None | None | **Unsuitable** — multirotor only |

**Recommendation:** PX4 for Concept A (sovereignty), ArduPilot for Concept B/C (fastest to field).

### SF-12/13 Datalink — ITAR-Free 150km Encrypted

| Solution | Origin | Range | Bandwidth | Encryption | Price | VN Feasibility |
|----------|--------|-------|-----------|------------|-------|----------------|
| VN Sovereign SDR (Viettel/VTX) | Vietnam | 150km+ | 2 Mbps | VN domestic AES-256 equiv | ~$8-15K dev | HIGH (36mo dev) |
| Silvus StreamCaster 4200E | USA/Canada | 100km+ | 100 Mbps | AES-256 | ~$15K | MEDIUM (EUC required) |
| Microhard pMDDL2450 | Canada | 100km+ | 5 Mbps | AES-256 | ~$5K | HIGH (COTS) |
| RFD900x | Australia | 50km | 250 kbps | None | ~$200 | HIGH but range/BW insufficient |

**Recommendation:** VN Sovereign SDR for Concept A, Microhard for Concept C (interim).

### SF-14 RCS Augmentation

| Method | RCS Range | Frequency | Power | Cost | VN Feasibility |
|--------|-----------|-----------|-------|------|----------------|
| Luneberg lens | 1-100 m² (fixed) | Broadband | 0W | $2-5K (import) | LOW (domestic fab difficult) |
| Corner reflectors (machined Al) | 1-10 m² (directional) | X/Ku-band | 0W | $200 | HIGH |
| Active RF repeater | 0.1-50 m² (tunable) | X/S/Ku | 50-200W | $10-20K | MEDIUM (VN RF lab) |
| DRFM emitter | Any profile | Agile | 100W+ | $50K+ | LOW (restricted export) |

**Recommendation:** Corner reflectors + active repeater (hybrid) for best cost/fidelity.

---

## 3 CONCEPT VARIANTS

### CONCEPT A: "Sovereignty-First" (V5-JET-VN-S)

| Sub-Function | Solution Selected |
|-------------|------------------|
| SF-02/03 Propulsion | PBS TJ40-G1 (Czechia, 395N, EUC) |
| SF-04/05 Power | Custom VN PDU + stator generator |
| SF-06/08 Sensors | Triple Bosch IMU + Ublox F9P (BeiDou/GLONASS) |
| SF-09 FCC | Pixhawk 6X running PX4 (FreeRTOS) |
| SF-10 Actuators | Volz brushless CAN servos |
| SF-11 Airframe | VN VARTM composite (GFRP + CFRP spars) |
| SF-12/13 Datalink | VN Sovereign SDR C-band (Viettel/VTX) |
| SF-14 RCS | Active RF repeater (VN-tuned X/S/Ku) |
| SF-17 Launch | VN domestic solid motor RATO |
| SF-18/19 Recovery | VN nylon drogue/main parachute |

| Metric | Value |
|--------|-------|
| **Domestic content** | 75-80% |
| **Unit cost** | $65,000-$80,000 |
| **Development time** | 36-48 months |
| **Key risk** | VN SDR↔PX4 latency under terminal maneuver stress |

---

### CONCEPT B: "Balanced Expendable" (V5-JET-VN-B)

| Sub-Function | Solution Selected |
|-------------|------------------|
| SF-02/03 Propulsion | KingTech K-450G4 (Taiwan, 450N, COTS) |
| SF-04/05 Power | Engine BLDC generator + LiPo backup |
| SF-06/08 Sensors | Single MPU6000 + Ublox M8N |
| SF-09 FCC | Matek H743 running ArduPilot |
| SF-10 Actuators | Standard hobby servos (upgraded) |
| SF-11 Airframe | Wet layup GFRP (heavier but cheap) |
| SF-12/13 Datalink | VN Sovereign SDR C-band |
| SF-14 RCS | Machined aluminum corner reflectors |
| SF-17 Launch | VN domestic solid motor RATO |
| SF-18/19 Recovery | None (expendable / kamikaze only) |

| Metric | Value |
|--------|-------|
| **Domestic content** | 65% |
| **Unit cost** | $35,000-$50,000 |
| **Development time** | 18-24 months |
| **Key risk** | Commercial KingTech FADEC fails under 15g RATO + MIL EMI |

---

### CONCEPT C: "Rapid Fielding" (V5-JET-VN-R)

| Sub-Function | Solution Selected |
|-------------|------------------|
| SF-02/03 Propulsion | PBS TJ40-G1 (Czechia, 395N) |
| SF-04/05 Power | Engine-driven generator (PBS integrated) |
| SF-06/08 Sensors | Pixhawk INS + Ublox F9P |
| SF-09 FCC | Pixhawk 6X running ArduPilot |
| SF-10 Actuators | Volz brushless servos |
| SF-11 Airframe | Machined Al-7075 semi-monocoque (CNC) |
| SF-12/13 Datalink | Microhard pMDDL2450 (Canada, COTS) |
| SF-14 RCS | Imported Luneberg lens |
| SF-17 Launch | Pneumatic catapult (reusable, no explosive) |
| SF-18/19 Recovery | Imported parachute system |

| Metric | Value |
|--------|-------|
| **Domestic content** | <30% |
| **Unit cost** | $85,000-$110,000 |
| **Development time** | 9-12 months |
| **Key risk** | Supply chain dependency on European EUCs; geopolitical shock |

---

## CONCEPT COMPARISON

| Criterion | Weight | A (Sovereignty) | B (Balanced) | C (Rapid) |
|-----------|--------|----------------|-------------|-----------|
| Technical Performance | 35% | 8/10 | 6/10 | 8/10 |
| Manufacturability (VN) | 25% | 7/10 | 8/10 | 3/10 |
| Sovereignty | 20% | 9/10 | 7/10 | 2/10 |
| Unit Cost | 10% | 6/10 | 9/10 | 4/10 |
| Time-to-Deploy | 10% | 4/10 | 7/10 | 10/10 |
| **WEIGHTED SCORE** | | **7.25** | **7.05** | **4.85** |

**Preliminary winner: CONCEPT A (Sovereignty-First)** — but very close to B.

---

## CEO DECISION REQUIRED (Stage 3C)

Next step is VDI 2225 formal evaluation with sensitivity analysis. But first:

1. **Do these 3 concepts cover the right design space?**
2. **Any hybrid combinations CEO wants to explore?** (e.g., Concept A airframe + Concept B expendable variant)
3. **Is the $65-80K range for Concept A acceptable?** (vs $50-80K target in portfolio planning)
4. **Phased approach?** Start with Concept C (rapid IOC) → transition to Concept A (sovereign production)?
