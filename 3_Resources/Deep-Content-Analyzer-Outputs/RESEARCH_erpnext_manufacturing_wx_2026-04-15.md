---
created: 2026-04-15
source: research-pipeline-v3
notebook: erpnext-wx
topic: "ERPNext Manufacturing Implementation for Workshop X"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_s: 6
  tier_a: 5
  tier_b: 6
  tier_c: 3
  pro_ratio: "55%"
sources_analyzed:
  - title: "Job Card — ERPNext Official Docs"
    tier: S
    url: "https://docs.frappe.io/erpnext/job-card"
  - title: "REST API — Frappe Docs"
    tier: S
    url: "https://docs.frappe.io/framework/user/en/api/rest"
  - title: "frappe_docker GitHub"
    tier: S
    url: "https://github.com/frappe/frappe_docker"
  - title: "Manufacturing with ERPNext White Paper"
    tier: S
    url: "https://erpnext.com/files/Manufacturing%20with%20ERPNext.pdf"
  - title: "ERPNext v15 Docker Installation (Frappe Forum)"
    tier: S
    url: "https://discuss.frappe.io/t/111731"
  - title: "ERPNext v16 Docker Installation (Frappe Forum)"
    tier: S
    url: "https://discuss.frappe.io/t/160885"
  - title: "5 Core Data Pillars of Manufacturing"
    tier: A
    url: "https://www.erpnext-consultants.com/blog/2025/11/02/the-5-core-data-pillars-of-manufacturing"
  - title: "Manufacturing in ERPNext v15 (ClefinCode)"
    tier: A
    url: "https://clefincode.com/blog/global-digital-vibes/en/utilizing-and-handling-manufacturing-in-erpnext-v15"
  - title: "ERPNext for Textile Manufacturing (ClefinCode)"
    tier: A
    url: "https://clefincode.com/blog/global-digital-vibes/en/implementing-and-optimizing-erpnext-for-textile-manufacturing"
  - title: "Vietnam Chart of Accounts TT200 (ERPonline.vn)"
    tier: A
    url: "https://erponline.vn/blog/blog-6/vietnam-chart-of-accounts"
  - title: "Vietnam Accounting Localization Pack (Balas Tech)"
    tier: A
    url: "https://balastechnologies.com/vas/"
  - title: "ERPNext Plant Floor Management (Havenir)"
    tier: B
    url: "https://havenir.com/blog/product-features/erpnext-plant-floor-management"
  - title: "ERPNext 2025 Review (Infintrix)"
    tier: B
    url: "https://infintrixtech.com/blog/erpnext-review-2025"
  - title: "Odoo vs ERPNext 2025 (Appvizer)"
    tier: B
    url: "https://www.appvizer.com/magazine/operations/erp/erpnext-vs-odoo"
  - title: "ERPNext vs Odoo Real-World (Midocean)"
    tier: B
    url: "https://midocean.tech/erpnext-vs-odoo"
  - title: "ERPNext API Integration (Infintrix)"
    tier: B
    url: "https://erp.infintrixtech.com/erpnext-api-integration"
  - title: "Production Deployment (DeepWiki)"
    tier: B
    url: "https://deepwiki.com/frappe/frappe_docker/3.2-production-deployment"
  - title: "ERPNext Implementation Guide (Matiyas)"
    tier: C
    url: "https://www.matiyas.com/blog/a-complete-guide-to-implementing-erpnext-in-manufacturing/"
  - title: "ERPNext Manufacturing (Kanak)"
    tier: C
    url: "https://www.kanakinfosystems.com/blog/manufacturing-with-erpnext"
  - title: "ERPNext Webhooks (Karani)"
    tier: C
    url: "https://codewithkarani.com/2021/07/16/sending-data-from-erpnext-to-other-applications-with-webhooks/"
---

# ERPNext Manufacturing Implementation — Research for Workshop X

**Date:** 2026-04-15
**NLM Notebook:** erpnext-wx (20 sources)
**Research depth:** --deep (6-question framework + cross-source synthesis)

---

## KEY FINDINGS (Cross-Validated)

### ★★★ HIGH CONFIDENCE — All Sources Agree

**1. ERPNext 4-Workshop Routing = Native Fit**
- ERPNext's standard BOM → Routing → Work Order → Job Card architecture natively maps to WX's 4-workshop sequential process.
- 4 workshops = 4 Workstations. Each Workstation has: hourly cost rate, capacity, working hours, holiday schedule.
- Routing defines sequence: WS-CKCX → WS-DT → WS-DC → WS-VL.
- Work Order submission auto-generates Job Cards per workshop.
- **Source:** Official docs [S1], White Paper [S4], 5 Pillars [A7], ClefinCode [A8]

**2. "5 Core Data Pillars" Must Be Perfect Before Go-Live**
- BOM (Bill of Materials)
- Routing (sequence of operations through workstations)
- Production Plan (aggregate demand → work orders)
- MRP (material requirements planning → purchase orders)
- Inventory (stock levels, WIP per workshop, batch/serial tracking)
- If ANY pillar has bad data → entire system produces garbage.
- **Source:** erpnext-consultants [A7], White Paper [S4], all community sources

**3. ERP = 90% People, 10% Technology**
- Change management is THE #1 risk. Shop floor workers will revert to paper/Excel if not trained.
- WX mitigation: WX-OPS (vault-based) validates PROCESS first, before imposing ERPNext tool.
- Over-customization = death spiral. Adapt business to ERPNext standard workflow, not reverse.
- **Source:** All community sources [B13, B15, C18, C19]

**4. Self-Hosted = $0 License, All 26 Users**
- ERPNext Community is 100% free, no per-user fee.
- Odoo Community is also free but Enterprise features (MRP, quality) require paid modules.
- ERPNext scales from 20→200 users without license cost increase. Only hosting cost.
- **Source:** Midocean [B15], Infintrix [B13], official docs

### ★★ MEDIUM CONFIDENCE — Most Sources Agree

**5. Plant Floor = QĐ Can Update From Workshop**
- ERPNext v15+ has Visual Plant Floor dashboard.
- Each workshop shows as color-coded icon (running/idle/maintenance).
- QĐ can update Job Card status directly (Start/Complete) from touchscreen/tablet on shop floor.
- Downtime Entry for recording machine stops.
- **Source:** Havenir [B12], ClefinCode [A8], official docs [S1]

**6. REST API = Full Integration Capability**
- Frappe REST API: JSON-based, token or password auth.
- CRUD on any doctype (Work Order, Item, Stock Entry).
- Webhooks: trigger on document events (on_submit, on_cancel).
- Custom whitelisted Python methods accessible via API.
- WX → IPARAG bridge: feasible via REST API + webhook.
- **Source:** Official docs [S2], Infintrix [B16], Karani [C20]

**7. Docker Deployment = Proven but Complex**
- frappe_docker is official, production-ready.
- Multi-service: configurator, backend, frontend, websocket, queue, scheduler.
- Requires: Linux CLI, Docker Compose, DNS/SSL understanding.
- NV Tổng hợp needs training or CEO supervises initial install.
- **Source:** GitHub [S3], Forum tutorials [S5, S6], DeepWiki [B17]

### ★ LOW CONFIDENCE — Gaps / Contradictions

**8. Vietnamese Localization (TT200) = Exists But Incomplete**
- ERPonline.vn provides TT200 chart of accounts mapping.
- Balas Technologies offers Vietnam Accounting Localization Pack (VAS).
- BUT: no source evaluates completeness or quality of Vietnamese UI translation.
- BUT: no source confirms TT200 chart of accounts is included in ERPNext core (may need manual setup or 3rd party app).
- **GAP:** Need to verify with Cộng đồng ERPNext Việt Nam (Facebook group).
- **Source:** ERPonline [A10], Balas [A11]

**9. ERPNext vs Odoo for Manufacturing = CONTRADICTED**
- Pro-ERPNext: cohesive open-source, no per-user paywall, simpler for small teams [B15].
- Pro-Odoo: superior UI/UX, 30K+ app ecosystem, better manufacturing depth (MPS, subcontracting), easier for non-developers [B14].
- **Resolution for WX:** ERPNext wins on cost ($0 for 26 users) and sovereignty (self-hosted). Odoo wins on manufacturing depth. At 26 people, ERPNext's manufacturing covers WX needs. Revisit if >50 people or need advanced MPS/subcontracting.
- **Source:** Appvizer [B14], Midocean [B15], Infintrix [B13]

**10. Air-Gap Deployment = UNANSWERED**
- Official Docker guides require internet for image pulls, SSL certs.
- No source addresses true air-gap (zero-internet) deployment.
- WX: defense company → air-gap may be required for classified data.
- **Mitigation:** Pre-pull Docker images on internet-connected PC → transfer to air-gapped server via USB.
- **GAP:** Needs manual testing and documentation.

**11. Obsidian/IPARAG Integration = UNANSWERED**
- No source mentions Obsidian or markdown-based system integration.
- REST API + Webhooks = technically feasible for custom bridge.
- WX: `/bridge-erp` skill concept is viable via REST API, but requires custom development.
- **GAP:** Custom Frappe app or webhook → markdown file writer needed.

---

## CROSS-VALIDATION SUMMARY

| Insight | S/A Sources | B/C Sources | Confidence |
|---------|:-----------:|:-----------:|:----------:|
| 4-workshop routing = native fit | ✅ 4 sources | ✅ 3 sources | ★★★ |
| 5 data pillars | ✅ 2 sources | ✅ 4 sources | ★★★ |
| Change management #1 risk | ✅ 1 source | ✅ 5 sources | ★★★ |
| $0 license for 26 users | ✅ 1 source | ✅ 3 sources | ★★★ |
| Plant Floor for QĐ | ✅ 2 sources | ✅ 1 source | ★★ |
| REST API integration | ✅ 1 source | ✅ 2 sources | ★★ |
| Docker deployment | ✅ 3 sources | ✅ 1 source | ★★ |
| VN TT200 localization | ✅ 2 sources | — | ★ (incomplete) |
| ERPNext vs Odoo | — | ✅ 3 sources (contradicted) | ★ |
| Air-gap deployment | — | — | ★ (unanswered) |
| Obsidian integration | — | — | ★ (unanswered) |

---

## WX-SPECIFIC RECOMMENDATIONS

### Immediate Actions (WX-OPS Phase)

1. **WX-OPS validates process** — current CSV-based system proves that Work Order → 4 PX routing → QC flow works with WX team.
2. **Name CSV columns to match ERPNext doctypes** — already done (wo_id, item_code, etc.).
3. **Train NV Tổng hợp on ERPNext basics** — use ClefinCode tutorials + official docs.

### ERPNext Migration Trigger (when WX-OPS process stable)

1. **Install ERPNext v15/16 on local PC** using Docker (SOPs already in Phase0-Foundation/).
2. **Import CSV data** via ERPNext Data Import Tool — designed for this exact workflow.
3. **4 Workstations + Routing** = first configuration (maps directly from _routing.md).
4. **BOM import from HELIX Phase 4** outputs → ERPNext BOM doctype.
5. **TT200 Chart of Accounts** — use ERPonline.vn guide + Balas VAS pack as reference.

### Risks to Mitigate

| Risk | Mitigation |
|------|-----------|
| Over-customization | Use standard ERPNext workflow. Adapt WX process, not ERP code. |
| Shop floor adoption | WX-OPS proves process first. QĐ already comfortable with status updates. |
| Air-gap requirement | Pre-pull Docker images. Test offline deployment before classified data. |
| VN localization gaps | Verify TT200 with KTT. Manual account creation if needed. |
| IPARAG bridge | Custom Frappe app or webhook → /bridge-erp skill. Phase 5 scope. |

---

## COVERAGE GAPS — Next Research

| Gap | What to Search | Priority |
|-----|---------------|:--------:|
| Air-gap Docker deployment | "ERPNext offline installation no internet air-gap" | HIGH (defense) |
| Vietnamese UI completeness | Ask Cộng đồng ERPNext Việt Nam (Facebook) | MEDIUM |
| TT200 chart of accounts import file | "ERPNext TT200 chart of accounts JSON CSV import" | MEDIUM |
| Defense industry ERPNext case study | "ERPNext defense manufacturing aerospace compliance" | LOW |
| Obsidian ↔ ERPNext bridge | Custom development — no existing solution | Phase 5 |

---

## SOURCE QUALITY REPORT

| Metric | Value |
|--------|:-----:|
| Total sources found | 21 |
| Total ingested (NLM) | 20 |
| Tier S (Official) | 6 |
| Tier A (Authority) | 5 |
| Tier B (Professional) | 6 |
| Tier C (Community) | 3 |
| Pro ratio (S+A/total) | 55% |
| Insights extracted | 11 |
| ★★★ HIGH confidence | 4 |
| ★★ MED confidence | 3 |
| ★ LOW confidence | 4 (includes 2 unanswered gaps) |
| Galaxy candidates | 2 ready, 1 needs verification |

### NLM Status
- NLM notebook: `erpnext-wx` (20 sources)
- NLM gaps: 1 source skipped (Facebook group — not ingestible)
- Auto-fallback triggered: NO

---

*Research pipeline v3.0 --deep complete. NLM notebook preserved for future /research --update.*
