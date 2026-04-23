---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
type: Requirements Delta Log (Stage 2↔3 co-evolution)
created: 2026-04-21
---

# REQUIREMENTS DELTA LOG — RE: ACME GAR GTS

| Delta-ID | Req-ID | Change Type | Stage 2 Value | Stage 3 Modified | Reason | CEO Approved | Propagate? |
|----------|--------|------------|---------------|-----------------|--------|:----------:|-----------|
| D-001 | R-018 | D→W | All-electric (Demand) | Pneumatic acceptable (Wish) | Patent freedom + cost optimization + fallback architecture | PENDING | S2A req list |
| D-002 | R-001 | VALUE CHANGE | 7.6mm (0.30") stroke | TBD (mechanism dependent: masselotte ~10-20mm) | Different mechanism = different stroke geometry | PENDING | S2A req list, TVDT |
| D-003 | NEW | NEW REQ | — | IP54, -10°~55°C, 95% RH environmental rating | VN tropical coastal operation not in ACME design | PENDING | S2A req list (Cat 13 Operation) |
| D-004 | NEW | NEW REQ | — | NFC weapon auto-detect + auto-configure | WX MWI architecture innovation (LITE-01) | PENDING | S2A req list (Cat 6 Signals) |
| D-005 | NEW | NEW REQ | — | Mandatory Channel A/B architectural separation | Two-Channel Law: mount resistance ≠ firing vibration | PENDING | S2A req list (Cat 3 Forces) |

## Rules
- Every delta requires CEO APPROVE/REJECT (Core — non-delegable)
- ACCEPT → propagate to S2A_Requirements.md (v1.1)
- REJECT → document rationale, may require design rework
- DEFER → flag as [TBD], track in Stage 4 validation
