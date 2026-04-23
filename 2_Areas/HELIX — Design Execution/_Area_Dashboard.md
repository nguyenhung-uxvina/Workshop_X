---
created: 2026-03-05
updated: 2026-03-05
type: moc
status: active
tags: [#type/moc, #status/active]
---

# HELIX — Design Execution

> Trach nhiem lien tuc: Phuong phap thiet ke, AI orchestration, physical validation, design review.
> DAY LA BINDING CONSTRAINT cua Workshop X (29% theo Blueprint).

## Dinh Nghia
Moi thu lien quan den **kha nang thuc thi thiet ke**: Pahl-Beitz methodology proficiency, AI tool mastery, physical prototyping rate, design review discipline.

## Tieu Chi Suc Khoe
- dP/dt > 0 (co prototype iteration moi thang)
- Pahl-Beitz proficiency tang theo thoi gian
- Design decisions duoc record va review

## Metrics Theo Doi

| Metric | Target | Hien Tai |
|--------|--------|----------|
| dP/dt (prototype iterations/thang) | > 0, tang | — |
| Products voi physical test result thang nay | >= 1 | — |
| Products voi ZERO physical activity | < 2 | — |
| Pahl-Beitz skill level (1-4) | Tang | — |
| Claude Code Dependency Ratio (C) | < 40% | — |
| Subagent first-attempt acceptance | > 70% | — |

## Physical Validation Log

> DAY LA FILE QUAN TRONG NHAT CUA VAULT.
> Neu dP/dt = 0 trong 2 thang lien tiep → Analyst Trap dang active.

### Thang 3/2026
```
Prototype iterations: —
Products voi physical test result: —
Products voi zero physical activity: —
dP/dt so voi thang truoc: —
```

### Thang 2/2026
```
Prototype iterations: —
Products voi physical test result: —
Products voi zero physical activity: —
dP/dt so voi thang truoc: —
```

### Thang 1/2026
```
Prototype iterations: —
Products voi physical test result: —
Products voi zero physical activity: —
dP/dt so voi thang truoc: —
```

> CEO can dien retroactively cho 3 thang gan nhat. Day la Core task — khong delegate.

## Cac Thanh Phan

### Pahl-Beitz Practice
- Current skill level per phase:
  - Task Clarification: Level —/4
  - Conceptual Design: Level —/4
  - Embodiment Design: Level —/4
  - Detail Design: Level —/4
- Lien ket: [[3_Resources/Books & Articles/Engineering Design/]]

### AI Orchestration
- Claude Code mastery, MCP, agent configs
- Hooks: commit-gate, python-lint, notify, context-shield, quality-gate
- Config: AUTOCOMPACT_PCT=80, MAX_OUTPUT_TOKENS=64000, SUBAGENT_MODEL=haiku
- Lien ket: [[1_Projects/Mastering Claude Code V2/]]

### Design Review Log
- Record of key design decisions + rationale
- Gate review results (G1, G2, G3)

## Nhiem Vu Dinh Ky
- [ ] Weekly: Update Physical Validation Log
- [ ] Weekly: `/cost` tracking
- [ ] Weekly: Claude Code review (7 questions)
- [ ] Monthly: Context drift check (CLAUDE.md accuracy)
- [ ] Monthly: Pahl-Beitz skill self-assessment
- [ ] Monthly: MCP server review
- [ ] Quarterly: Design Review Log audit

## Du An Lien Quan
- [[1_Projects/Mastering Claude Code V2/]] — Claude Code mastery
- [[1_Projects/BB-01_LOMAH/]] — Primary prototype project
