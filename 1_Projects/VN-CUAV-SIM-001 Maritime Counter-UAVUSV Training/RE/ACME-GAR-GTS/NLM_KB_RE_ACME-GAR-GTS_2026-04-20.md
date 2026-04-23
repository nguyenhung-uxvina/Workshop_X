---
project: VN-CUAV-SIM-001
product: ACME Gun Active Recoil (GAR®) Gunnery Training System (GTS)
notebook: re-gar (135c0723-456e-4f2a-9f71-a2d13b50c9fe)
created: 2026-04-20
mode: MECHA
reports: 20 (10 MECH + 10 MECHA)
---

# NLM Knowledge Base — RE: ACME GAR GTS

Notebook: `re-gar`
Created: 2026-04-20
Sources: 13 (3 patents, 7 ACME pages, 3 competitor/academic)
Reports: 20 (MECHA mode: 10 base + 10 mechatronic)

## Source Inventory

| # | Title | Type | Status |
|---|-------|------|:------:|
| 1 | US8690575B1 — ACME weapon simulator | Patent | ✅ |
| 2 | US10001338B1 — ACME continuation | Patent | ✅ |
| 3 | US9719748B2 — Haptech linear motor recoil | Patent | ✅ |
| 4 | ACME GAR Overview | Web | ✅ |
| 5 | ACME GTS Product Page | Web | ✅ |
| 6 | ACME Replica Weapons | Web | ✅ |
| 7 | ACME MCAT Case Study | Web | ✅ |
| 8 | ACME Overview (company) | Web | ✅ |
| 9 | ACME GAR YouTube Demo | YouTube | ✅ |
| 10 | Haptech ERIS — Nat'l Defense Mag | Article | ✅ |
| 11 | Dvorak Instruments | Web | ✅ |
| 12 | ELI Military Simulations Recoil | Web | ✅ |
| 13 | Springer electromagnetic counter-recoil | Web | ⚠️ Partial |

## Report Index

| # | Report | Query Type | Use When |
|---|--------|-----------|----------|
| 1 | Artifact Deconstruction | Stage 1 | Starting physical analysis |
| 2 | Design Intent Decoder | Stage 2 | Reconstructing requirements |
| 3 | IP & Legal Navigator | Stage 0 | Go/no-go decision |
| 4 | Functional Abstraction | Stage 2 | Building function structure |
| 5 | Material & Process | Stage 1 | VN capability gap analysis |
| 6 | Tolerance & Performance | Stage 1 | Critical dimensions |
| 7 | Redesign Strategist | Stage 3 | P&B forward design |
| 8 | Validation Strategy | Stage 4 | Test planning |
| 9 | Knowledge Capture | Stage 5 | Compound learning |
| 10 | Adversarial Audit | Stage 4 | Red team review |
| 11 | System Boundary & Black Box (M-1) | Stage 1M | Context diagram, interfaces |
| 12 | Domain Decomposition (M-2) | Stage 1M | 4-domain Mech/Elec/Sw/Ctrl |
| 13 | V-Model Requirements (M-3) | Stage 2M | Behavior-driven req reconstruction |
| 14 | Cross-Domain Allocator (M-4) | Stage 2M | Function-domain allocation |
| 15 | Control Law Reverser (M-5) | Stage 2M | FOC, PID, state machines |
| 16 | Firmware & SW Archaeology (M-6) | Stage 2M | SW architecture, RTOS selection |
| 17 | Integration Challenge Predictor (M-7) | Stage 4M | 7-category integration risks |
| 18 | V&V Strategy VDI 2206 (M-8) | Stage 4M | Right-side V-model testing |
| 19 | RE Maturity Assessment (M-10) | Gate check | 8-dimension scoring (74/100 CONDITIONAL) |
| 20 | — | — | (M-9 MBRE Digital Thread skipped — low priority) |

## Chat Persona

Persona text: MECHA mode (RE Mechatronic)
Status: CEO to paste into NLM Settings → Custom Instructions

## Quiz & Study Materials

- Quiz: 10 MCQ + 5 scenarios (generated, in NLM chat history)
- Flashcards: pending (can generate on request)

## Key Insights from NLM KB

1. **RE Maturity: 74/100 (CONDITIONAL GO)** — proceed to PoC, halt scale-up until physical validation
2. **Red Team NO-GO on pure electromagnetic path** — N-S-N-S flux density uncertain, hard stop safety risk
3. **Red Team recommends pneumatic CO2 parallel prototype** — ELI/Dvorak approach eliminates patent + thermal + safety risks
4. **WX Two-Channel Law VALIDATED** — ACME combines A+B ($15K), WX separates ($1.5-2.5K)
5. **Software is primary gap AND primary opportunity** — Zephyr RTOS + Unity host = WX path

## How to Use in NLM Chat

After persona is set, CEO can chat with questions like:
- "So sánh vật liệu component X với alternative VN"
- "Tolerance nào là critical nhất cho function Y?"
- "Rủi ro IP cao nhất ở đâu?"
- "VN có thể sản xuất component nào bằng nội lực?"
- "Tại sao Red Team đề xuất pneumatic song song?"
- "Control loop latency budget cho 3000 RPM là bao nhiêu?"

NLM chat will use both uploaded sources AND generated reports to answer.
