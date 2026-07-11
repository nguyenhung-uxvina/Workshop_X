---
created: 2026-03-08
updated: 2026-03-08
type: project
status: active
tags: [#type/project, #status/active]
tier: 3-strategic
project_id: WX-KPIPE-001
codename: GOD MODE
---

# WX-KPIPE-001 "GOD MODE" — Project Charter

## Product

**Knowledge Pipeline — Claude Code x NotebookLM x Obsidian**

Pipeline thu thập tri thức tự động kết hợp 3 công cụ:
- **Claude Code** — orchestration + skills + MCP
- **NotebookLM** — Gemini-powered analysis (miễn phí token)
- **Obsidian** — IPARAG vault, lưu trữ + retrieval

Mục đích: Bổ sung BRIDGE-FORGE-HELIX framework với AI-assisted research, offload phân tích nặng sang NotebookLM, kết quả tự động vào vault.

## Classification

- **Tier:** 3 — Strategic (knowledge/tooling, không physical)
- **Target:** Nội bộ Workshop X (CEO + future team)
- **ACH:** N/A — tooling project

## Domains

| Domain | Lead | Clock Speed | Notes |
|--------|------|-------------|-------|
| AI/Software | KN | Days/sprint | Claude Code skills, MCP, pipeline |
| Knowledge Mgmt | KN | Weeks | IPARAG vault structure, THỊNH flow |
| External APIs | — | API-dependent | NotebookLM API (nlm-cli), YouTube |

## Milestones

| Gate | Target Date | Deliverable | Status |
|------|-------------|-------------|--------|
| G0 | 2026-03-08 | Charter + ICD v0 | DONE |
| G1 | 2026-03-15 | NLM CLI installed + MCP connected | PENDING |
| G2 | 2026-03-22 | First pipeline skill working (search->NLM->vault) | PENDING |
| G3 | 2026-03-29 | Super skill operational + CLAUDE.md feedback loop | PENDING |
| G4 | 2026-04-05 | 4-week usage report, compound value measured | PENDING |

## Implementation Steps

| Giai đoạn | Gate | Action |
|-----------|------|--------|
| 1. Cài đặt + Kết nối | G1 | `pip install nlm-cli` -> `nlm login` -> `nlm setup add claude-code` -> verify `/mcp` |
| 2. Workspace | G1 | CC chạy trong Workshop_X vault (đã có) |
| 3. Tạo Skills | G2 | `/skill-creator` -> YouTube skill + NLM skill |
| 4. Super Skill | G3 | Pipeline: search -> NLM analyze -> write to vault |
| 5. Vòng lặp tự học | G4 | CLAUDE.md update loop + measurement |

## Success Criteria

1. NLM MCP server connected to Claude Code, verified via `/mcp`
2. At least 1 "super skill" pipeline operational (input->NLM->vault)
3. >=5 research outputs saved to vault via pipeline within first month
4. Token cost reduction measurable: NLM handles analysis, CC handles orchestration
5. CLAUDE.md self-improvement loop demonstrated (>=2 updates from pipeline learning)

## Similar Products

- `tana-iparag-bridge` MCP (existing) — same vault target, different input source. Reuse potential: MEDIUM.
- Greenfield for NLM integration.

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| NLM API changes/breaks | HIGH | Pin nlm-cli version, monitor GitHub repo |
| Google auth token expiry | MEDIUM | Document re-auth procedure in SOP |
| Analyst Trap: build pipeline instead of using it | HIGH | G4 gate: measure OUTPUTS not FEATURES |
| NLM rate limits | LOW | Batch requests, use during off-peak |
