---
created: 2026-03-19
updated: 2026-03-19
type: strategic-plan
status: active
tags: [#type/project, #status/active, #acq, #topic/ai-tools]
---

# Master Plan: 8 ACH × AI Actionable Ideas for Workshop X

> Extracted from Bitblaze analysis × ACH strategy × active project portfolio.
> Sequenced to compound: each idea builds on previous + feeds into LP learning path.

---

## Overview Matrix

| # | Idea | Category | Revenue Model | Cost | Timeline | Dependencies | LP Link |
|---|------|:--------:|:-------------:|:----:|:--------:|:------------:|:-------:|
| AI-1 | RAG on Defense Standards | Tool (internal) | Cost savings → faster design | $0 | Month 2 | LP-7 (DVC) | LP-7+ |
| AI-2 | Fine-tune YOLO on Military Targets | Capability | Product differentiation | $0-100 | Month 3-4 | LP-1 (Jetson) | LP-1+ |
| AI-3 | AI Coaching as SaaS | Product (AI-native) | Subscription $5-10K/yr/unit | $0 | Month 3-5 | LP-3 (Pose) | LP-3+ |
| AI-4 | n8n BD Automation | Tool (internal) | Time freed → more BD | $0 | **Now** (2w) | None | — |
| AI-5 | Model Distillation YOLO→TFLite | Capability | Lower BOM cost | $0 | Month 4 | LP-1, AI-2 | LP-1+ |
| AI-6 | Case Study Content Machine | Marketing | Trust → contracts | $0 | **Now** (1w) | None | — |
| AI-7 | PLAUSIBLE as Service | Product (future) | Consulting $200/h | $0 | Year 2 | Quality-gate proven | — |
| AI-8 | ACH Training Course | Knowledge Product | $500-2000/student | $0 | After thesis | ACH-Thesis | — |

---

## Phase 1: Quick Wins — No Cost, Immediate Start (Week 1-2)

### AI-4: n8n BD Automation Pipeline

```
TRIGGER: New defense contact / meeting / event
    ↓
CAPTURE: Log in bridge-signal-extract → structured note
    ↓
AI ENRICH: Claude API summarizes contact profile + opportunity assessment
    ↓
ROUTE:
  → High potential → CEO calendar reminder (7-day follow-up)
  → Medium → Monthly touchpoint queue
  → Low → Archive
    ↓
REPORT: Weekly BD pulse summary → Slack/email

IMPLEMENTATION:
  Tool: n8n self-hosted (free) OR Claude Code hooks
  Time: 2 weeks setup, 30 min/week maintenance
  Value: Replace manual BD tracking, prevent "forgot to follow up"

LINK TO EXISTING:
  → /bd-pulse skill (already exists — automate its input)
  → bridge-signal-extract (captures meetings)
  → bridge-dashboard metric #2 (signal capture rate)
```

**Deliverable:** n8n workflow deployed OR Claude hook equivalent
**Success metric:** 100% contacts logged, 0 missed follow-ups

### AI-6: Case Study Content Machine

```
INPUT: 1_Projects/*/Status.md + _Project_Brief.md
    ↓
AI EXTRACT: For each project with Gate PASS:
  - Problem statement (from Essential Problem)
  - Solution approach (from selected concept)
  - Key metrics (cost, performance, local content)
  - Technical differentiator (ACH if applicable)
    ↓
AI GENERATE:
  - 1-page case study (anonymized per Goldilocks)
  - LinkedIn post (300 words)
  - Technical brief (2 pages, for procurement officers)
    ↓
CEO REVIEW: Goldilocks check before publishing
    ↓
PUBLISH: LinkedIn + defense industry contacts

IMPLEMENTATION:
  Tool: Claude Code skill (new /case-study command)
  Time: 1 week setup, 1 hour/case study (mostly review)
  Value: Build R2 (portfolio flywheel) + R4 (validation compound)

IMMEDIATE CANDIDATES:
  - VN-AST-MSL-001: "Indigenous towed target at 10% import cost"
  - VN-12.7MM-SIM: "IRONMESH platform approach to gunnery training"
  - VN-USV-SS-001: "Semi-submersible USV using COTS ArduSub" (after demo)
```

**Deliverable:** 2 case studies published (VN-AST + VN-12.7MM)
**Success metric:** 1 inbound inquiry from published content

---

## Phase 2: Capability Building — Aligned with LP Path (Month 1-4)

### AI-1: RAG on Defense Standards

```
PURPOSE: Instant design review assistant that knows MIL-STD, TCVN, Pahl-Beitz

ARCHITECTURE:
  L5 (Data): Ingest → chunk → embed → vector store
    Sources: MIL-STD-810H, MIL-STD-882E, TCVN standards (PDF),
             Pahl-Beitz chapters (already in vault),
             IRClass thermoplastic guidelines,
             Workshop X SOPs + Gate review checklists

  L3 (Model): RAG query pipeline
    Query: "Does this design meet MIL-STD-810H Method 501 for high temperature?"
    → Retrieves relevant standard section
    → AI generates compliance assessment with citations

  L4 (Inference): Local (Ollama + nomic-embed) or API (OpenAI embeddings)

IMPLEMENTATION:
  Tool: LlamaIndex + Pinecone (free tier) OR ChromaDB (local)
  Integrates with: LP-7 (DVC + Label Studio) — same data infrastructure
  Time: 1 week for MVP, ongoing refinement
  Cost: $0 (local) or $20/month (Pinecone)

VALUE:
  - Design review time: 4 hours → 30 minutes (per review)
  - Compliance gap detection: automated (currently manual)
  - Feeds: helix-quality-gate PLAUSIBLE check (automated standard lookup)
  - Feeds: helix-task-clarify (auto-suggest applicable standards)

GOLDILOCKS: Internal tool only — do NOT publish the RAG system
            (competitive advantage: WX reviews faster than competitors)
```

**Deliverable:** RAG system answering standard compliance queries
**Success metric:** Used in ≥1 gate review, saves ≥2 hours

### AI-2: Fine-tune YOLO on Military Targets

```
PURPOSE: Detection model that knows Vietnamese military equipment
         → transfers across V-SMASH, VN-CAM, 12.7MM-SIM products

ARCHITECTURE:
  L5 (Data):
    Sources: Open military vehicle datasets (DOTA, xView, etc.)
    Augmentation: Vietnamese context (tropical foliage, urban VN)
    Custom: Photograph WX products (targets, simulators) as training data
    Size: ~2000 images minimum for fine-tune

  L3 (Model): YOLOv8n → fine-tune on custom dataset
    Base: YOLOv8n pretrained on COCO
    Fine-tune: Add classes relevant to WX products
      - Towed target (VN-AST-MSL-001 type)
      - Soldier silhouette (shooting range)
      - Naval vessel classes (patrol boat, corvette)
      - Drone types (quad, fixed-wing)

  L4 (Inference): Export → ONNX → TensorRT (Jetson Orin Nano)
    Target: ≥30 FPS, ≥90% mAP@0.5 on custom classes

IMPLEMENTATION:
  Prerequisite: LP-1 (Jetson dev kit) complete
  Time: 3-4 weeks (1w data collection, 1w labeling, 1w training, 1w optimization)
  Cost: $0-100 (cloud GPU for training if needed, otherwise Jetson itself)

VALUE:
  - First entry in forge-library (WX-DET-001)
  - Reuse across 3+ products → R5 activated
  - Thesis Ch 9 evidence: "custom military detection model"

MODEL LIBRARY ENTRY:
  ID: WX-DET-001
  Type: Detection
  Input: 640×640 RGB camera
  Output: Bounding boxes + class + confidence
  Platform: Jetson Orin Nano (TensorRT)
  Reuse: V-SMASH, VN-CAM, 12.7MM-SIM, future products
```

**Deliverable:** WX-DET-001 in forge-library, running on Jetson
**Success metric:** ≥90% mAP on custom classes, ≥30 FPS

### AI-3: AI Coaching as SaaS (12.7MM-SIM I-08)

```
PURPOSE: Transform 12.7MM-SIM from hardware product ($42K)
         to hardware + AI subscription ($42K + $5-10K/yr)

PRODUCT CONCEPT:
  Hardware: VN-12.7MM-SIM I-01 (HỒNG HẢI Standard) — pneumatic recoil trainer
  AI Layer: I-08 (HỒNG HẢI MASTER) — software upgrade
    - Real-time pose estimation → shooter posture assessment
    - Shot pattern analysis → grouping feedback
    - Session history → readiness prediction
    - Auto-generated AAR → coaching report

ARCHITECTURE:
  L1: Jetson Orin Nano (embedded in trainer) + USB camera
  L2: ROS2 node for camera → inference → display pipeline
  L3: MediaPipe pose (from LP-3) + custom scoring model
  L4: TensorRT inference ≤30ms per frame
  L5: Session data → local storage → periodic upload
  L6: Performance Envelope for pose accuracy at different lighting/positions
  L7: OTA model update via USB or WiFi

REVENUE MODEL:
  Option A: One-time license $3K per unit
  Option B: Annual subscription $5-10K/yr per unit (includes updates + support)
  Option C: Freemium — basic scoring free, advanced coaching = subscription

  At 10 units: $50-100K/yr recurring revenue
  At 50 units: $250-500K/yr — meaningful business

IMPLEMENTATION:
  Prerequisite: LP-1 (Jetson) + LP-3 (Pose) complete
  Time: 2 months for MVP (after LP-3)
  Cost: $0 (software on existing hardware)

VALUE:
  - First AI-native revenue stream for Workshop X
  - Thesis Ch 9 primary case study
  - Proves ACH business model (Identity Law in action)
  - Data flywheel: each unit generates training data → model improves

THIS IS THE ACH THESIS PROOF-OF-CONCEPT
```

**Deliverable:** I-08 MVP demo on Jetson with pose estimation
**Success metric:** Demo to 1 military unit, collect feedback

---

## Phase 3: Compound Value — Month 4-8

### AI-5: Model Distillation YOLO→TFLite (for BB-01 LOMAH)

```
PURPOSE: Take WX-DET-001 (Jetson-optimized) → compress to run on CM4

PROCESS:
  1. Knowledge distillation: YOLOv8n (teacher) → YOLOv8-pico (student)
  2. Export: PyTorch → ONNX → TFLite (INT8 quantized)
  3. Deploy: CM4 with TFLite runtime
  4. Target: ≥20 FPS on CM4, ≥85% mAP (accept 5% accuracy trade-off)

VALUE:
  - BB-01 LOMAH gets AI scoring without Jetson cost ($200 → $45 for CM4)
  - Proves ACH cost reduction at hardware level
  - Second forge-library entry (WX-DET-001-LITE)
  - R5 compound: same model family serves Jetson AND CM4 products
```

**Deliverable:** WX-DET-001-LITE running on CM4
**Success metric:** ≥85% mAP, ≥20 FPS on CM4

---

## Phase 4: Strategic Products — Month 8-12+

### AI-7: PLAUSIBLE as Automated Service (Year 2)

```
CONCEPT: Package PLAUSIBLE 9-check as AI-powered design review service
         for other Vietnamese defense companies

PRODUCT:
  Input: Upload design document (PDF/DOCX)
  Output: PLAUSIBLE scorecard with flagged items
  Price: $200/review or $2K/month subscription

PREREQUISITE:
  - PLAUSIBLE proven on ≥5 WX gate reviews
  - RAG on standards (AI-1) mature
  - ACH thesis published (credibility)

WHY YEAR 2:
  - Need track record first (prove it works internally)
  - Need published thesis for credibility
  - Need regulatory understanding for external use
```

### AI-8: ACH Training Course

```
CONCEPT: Package ACH methodology as training course
         for Vietnamese defense engineers and small manufacturers

PRODUCT:
  Format: 2-day workshop ($500) or online course ($200)
  Content: ACH definition + SHIFT checklist + Three Laws + case studies
  Target: Vietnamese defense industry engineers, procurement officers, SME owners

PREREQUISITE:
  - ACH thesis published (content source)
  - ≥2 ACH products deployed (credibility)
  - Case studies with metrics (proof)

REVENUE: 20 students × $500 = $10K per workshop
         At 4 workshops/year = $40K (supplemental revenue)

STRATEGIC VALUE:
  - Positions Workshop X as thought leader
  - Builds trust capital (R4) for future product sales
  - Creates awareness of ACH → more demand for WX products
```

---

## Execution Timeline (integrated with LP path)

```
MONTH 1 ─────────────────────────────────────────
  Week 1: AI-4 (n8n BD automation) + AI-6 (first case study)
  Week 2: AI-4 complete + LP-1 start (Jetson arrives)
  Week 3-4: LP-1 (YOLOv8 on Jetson) → feeds AI-2

MONTH 2 ─────────────────────────────────────────
  Week 5-7: LP-3 (Pose estimation) → feeds AI-3
  Week 8: AI-1 (RAG on standards MVP)

MONTH 3 ─────────────────────────────────────────
  Week 9-12: LP-2 (ArduSub depth hold demonstrator)
  Parallel: AI-2 (fine-tune YOLO on military data)

MONTH 4 ─────────────────────────────────────────
  Week 13-16: LP-5 (ROS2 + MAVROS)
  Parallel: AI-5 (distillation YOLO→TFLite for CM4)

MONTH 5-6 ───────────────────────────────────────
  AI-3 MVP: Coaching SaaS prototype on 12.7MM-SIM
  AI-6: Publish 3 case studies
  ACH Thesis: Draft Chapter 9 from LP outputs

MONTH 8-12 ──────────────────────────────────────
  AI-3: First customer demo
  ACH Thesis: v0.1 complete → CEO review
  AI-7: Begin PLAUSIBLE internal validation
  AI-8: Course outline from thesis content
```

---

## Resource Budget

| Item | Cost | When | Status |
|------|:----:|------|:------:|
| Jetson Orin Nano dev kit | $200 | Week 1 | ORDER NOW |
| HDPE pipe + end caps (LP-2) | $140 | Week 8 | Order Week 6 |
| Cloud GPU for training (optional) | $0-100 | Month 3 | If needed |
| n8n hosting (self-hosted) | $0 | Week 1 | Free |
| Pinecone/ChromaDB | $0-20/mo | Month 2 | Free tier |
| **TOTAL** | **$340-460** | | |

---

## Success Metrics (6-month checkpoint)

| Metric | Target | Feeds |
|--------|:------:|-------|
| forge-library models | ≥2 (WX-DET-001, WX-DET-001-LITE) | R5 activation |
| Products with AI layer | ≥2 (12.7MM I-08 + USV) | FORGE score ↑ |
| Case studies published | ≥3 | R2 (portfolio flywheel) |
| Gate reviews using PLAUSIBLE | ≥3 | Quality improvement |
| BD contacts tracked | 100% | No missed follow-ups |
| ACH thesis chapters drafted | ≥4 (Ch 2, 5, 7, 9) | Publication timeline |
| First AI-native revenue | ≥$1 (prove model works) | Identity Law validation |
| CEO time on Tier 3+ work | ≥40% | Bitblaze tier progression |
