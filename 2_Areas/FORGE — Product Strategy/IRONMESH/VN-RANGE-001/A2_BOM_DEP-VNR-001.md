---
project: VN-RANGE-001
step: A2 — Contract and BOM Finalization
type: bill-of-materials (auto-generated from A1 survey, KN reviews)
deployment_id: DEP-VNR-001
customer: Trường bắn Suối Hai — E12/D3, SĐ 302
config_source: A1_Range_Site_Survey_FILLED_DEP-VNR-001.md §9
version: 1.0
created: 2026-02-20
status: DRAFT — awaiting A2-H HITL review
---

# CORTEX RANGE — Bill of Materials
## DEP-VNR-001: Trường bắn Suối Hai (10 lanes, 100m primary)

---

## 1. HARDWARE BOM

### 1.1 Acoustic Scoring — VN-LOMAH Sensors

| # | Item | Qty | Unit Cost | Total | Notes |
|---|------|-----|-----------|-------|-------|
| H01 | VN-LOMAH acoustic sensor module (4× MEMS mic, FPGA TDOA, IP65) | 10 | $190 | $1,900 | 1 per lane |
| H02 | Sensor mounting bracket — steel post Ø48mm bolt-on (M8) | 10 | $15 | $150 | Per survey §5.1 |
| H03 | Sensor cable — waterproof gland, 5m (standard) | 8 | $12 | $96 | Lanes 1-8 (near power) |
| H04 | Sensor cable — waterproof gland, 10m (extension) | 2 | $18 | $36 | Lanes 9-10 (far end) |
| H05 | Cable protector trunking — 2m sections | 15 | $8 | $120 | F2 mitigation: exposed cable run |
| H06 | Spare VN-LOMAH sensor | 1 | $190 | $190 | On-site spare for swap |
| | **Subtotal — Sensors** | | | **$2,492** | |

### 1.2 Edge Computing & Network

| # | Item | Qty | Unit Cost | Total | Notes |
|---|------|-----|-----------|-------|-------|
| H07 | EDGE node (NVIDIA Jetson Orin Nano, 1TB NVMe, enclosure) | 1 | $450 | $450 | Command post, locked cabinet |
| H08 | WiFi AP — outdoor rated (802.11ac, dual-band) | 1 | $120 | $120 | Mount on 4m pole at CP |
| H09 | WiFi AP mounting kit (pole clamp + cable) | 1 | $25 | $25 | |
| H10 | Ethernet cable Cat6 — 30m (EDGE → WiFi AP) | 1 | $20 | $20 | |
| H11 | Ethernet switch — 16-port PoE | 1 | $85 | $85 | Sensors + AP + EDGE |
| H12 | 4G LTE modem + external antenna | 1 | $75 | $75 | F4 mitigation: commander remote viewing |
| H13 | UPS — 600VA (EDGE node power protection) | 1 | $65 | $65 | Protects against generator switchover |
| | **Subtotal — Compute & Network** | | | **$840** | |

### 1.3 User Devices

| # | Item | Qty | Unit Cost | Total | Notes |
|---|------|-----|-----------|-------|-------|
| H14 | Tablet — 10" ruggedized (Android, IP54) | 2 | $180 | $360 | Range officers (PULSE + SCOREBOARD) |
| H15 | Tablet protective case | 2 | $20 | $40 | |
| H16 | Tablet charging station | 1 | $30 | $30 | Command post |
| | **Subtotal — User Devices** | | | **$430** | |

### 1.4 Installation Materials

| # | Item | Qty | Unit Cost | Total | Notes |
|---|------|-----|-----------|-------|-------|
| H17 | Power extension — outdoor rated, 10m, 3-outlet | 3 | $15 | $45 | Firing line power distribution |
| H18 | Cable ties + labels (bulk) | 1 | $10 | $10 | Lane numbering |
| H19 | Waterproof junction box | 2 | $12 | $24 | Firing line cable joins |
| H20 | Laminated quick-reference cards | 5 | $3 | $15 | Range officer daily reference |
| H21 | Signage — "CORTEX RANGE Active" (Vietnamese) | 2 | $10 | $20 | Range entrance + firing line |
| | **Subtotal — Install Materials** | | | **$114** | |

---

### HARDWARE TOTAL

| Category | Cost |
|----------|------|
| Sensors (H01-H06) | $2,492 |
| Compute & Network (H07-H13) | $840 |
| User Devices (H14-H16) | $430 |
| Install Materials (H17-H21) | $114 |
| **HARDWARE TOTAL** | **$3,876** |
| **Per lane** | **$388/lane** |

---

## 2. SOFTWARE BOM

| # | Item | Qty | License | Notes |
|---|------|-----|---------|-------|
| S01 | CR-P0 CDM (Common Data Model) | 1 | Open source — FREE | Data foundation |
| S02 | CR-L1 SCOREBOARD (scoring engine + BallisticAI v1.0) | 1 | Bundled with hardware | 10-lane license |
| S03 | CR-D3 PULSE (real-time dashboard) | 1 | FREE — bundled | Web app, no extra hardware |
| S04 | Clawdbot (AI assistant — range officer support) | 1 | Included | Chat support channel |
| **SOFTWARE TOTAL** | | | **$0** | P0-P1 strategy: free software, sell hardware |

---

## 3. SERVICES BOM

| # | Item | Qty | Unit Cost | Total | Notes |
|---|------|-----|-----------|-------|-------|
| V01 | Site survey & configuration (remote) | 1 | $0 | $0 | Already done (A1) |
| V02 | Equipment configuration (factory, A3) | 1 | $200 | $200 | Technician time: ~4h |
| V03 | Factory acceptance test (A4) | 1 | $100 | $100 | KN time: ~2h |
| V04 | On-site installation (3 days) | 1 | $600 | $600 | Technician: travel + 3 days |
| V05 | Commissioning & calibration (2 days) | 1 | $500 | $500 | KN + technician on-site |
| V06 | Range officer training (C16) | 1 | $200 | $200 | Half-day session |
| V07 | Commander briefing (C17) | 1 | $0 | $0 | Included in commissioning |
| V08 | Travel & accommodation (5 days, Ba Vì) | 1 | $300 | $300 | 55km from Hanoi — day trips possible |
| | **SERVICES TOTAL** | | | **$1,900** | |

---

## 4. COST SUMMARY

| Category | Cost | % of Total |
|----------|------|------------|
| Hardware | $3,876 | 67% |
| Software | $0 | 0% |
| Services | $1,900 | 33% |
| **TOTAL DEPLOYMENT COST** | **$5,776** | 100% |

### Pricing to Customer

| Line Item | Amount | Notes |
|-----------|--------|-------|
| CORTEX RANGE 10-Lane System (hardware + install) | $25,000 | $2,500/lane × 10 lanes |
| Software license (Year 1) | $0 | P0-P1 bundled strategy |
| Annual subscription (Year 2+, Base tier) | $6,000/yr | $50/lane/month × 10 lanes × 12 |
| **Customer pays (Year 1)** | **$25,000** | |
| **Workshop X cost** | **$5,776** | |
| **Gross margin (Year 1)** | **$19,224 (77%)** | |

> **Note:** $2,500/lane includes all hardware, installation, commissioning, and training.
> Year 2+ subscription revenue = $6,000/yr recurring (Base tier).
> Upgrade to Pro tier ($80/lane/mo) or Enterprise ($120/lane/mo) after P2 OVERWATCH ships.

---

## 5. BOM VALIDATION CHECKLIST

- ☐ Every A1 survey parameter maps to a BOM line item
- ☐ F1 (power) addressed: H17 power extensions as interim; POC installs permanent outlets
- ☐ F2 (cable) addressed: H05 cable protectors included
- ☐ F4 (4G) addressed: H12 4G modem + antenna included
- ☐ Spare sensor (H06) included for field swap
- ☐ UPS (H13) protects EDGE during generator switchover
- ☐ Pricing matches product catalog ($2-5K/lane range)
- ☐ No items require import lead time > 2 weeks

---

*A2 BOM v1.0 — DEP-VNR-001 (Trường bắn Suối Hai, 10 lanes)*
*Generated by A-DOC from approved A1 survey data*
*Status: DRAFT — awaiting A2-H HITL review + customer contract*
