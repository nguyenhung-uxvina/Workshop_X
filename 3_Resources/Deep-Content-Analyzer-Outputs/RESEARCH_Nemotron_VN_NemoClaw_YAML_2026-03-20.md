---
created: 2026-03-20
source: research-pipeline-v3
notebook: nemotron-vn
topic: "Nemotron Vietnamese benchmarks + NemoClaw YAML configuration"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #topic/ai-tools, #topic/technology]
source_quality:
  tier_s: 10
  tier_a: 2
  tier_b: 6
  tier_c: 0
  pro_ratio: "67%"
sources_analyzed:
  - title: "VMLU Leaderboard"
    tier: S
    url: "https://vmlu.ai/leaderboard"
  - title: "OpenShell Policy Schema Reference"
    tier: S
    url: "https://docs.nvidia.com/openshell/latest/reference/policy-schema.html"
  - title: "NemoClaw Developer Guide — How It Works"
    tier: S
    url: "https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html"
  - title: "NemoClaw Network Policies"
    tier: S
    url: "https://docs.nvidia.com/nemoclaw/latest/reference/network-policies.html"
  - title: "NemoClaw Inference Profiles"
    tier: S
    url: "https://docs.nvidia.com/nemoclaw/latest/reference/inference-profiles.html"
  - title: "NemoClaw Architecture"
    tier: S
    url: "https://docs.nvidia.com/nemoclaw/latest/reference/architecture.html"
  - title: "NIM Air-Gap Deployment"
    tier: S
    url: "https://docs.nvidia.com/nim/large-language-models/latest/deploy-air-gap.html"
  - title: "NemoClaw GitHub Repository"
    tier: S
    url: "https://github.com/NVIDIA/NemoClaw"
  - title: "CVE-2026-25253"
    tier: S
    url: "https://nvd.nist.gov/vuln/detail/CVE-2026-25253"
  - title: "Nemotron 3 Nano Technical Report"
    tier: S
    url: "https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Nano-Technical-Report.pdf"
  - title: "Vietnamese Data with NeMo Curator (NVIDIA Blog)"
    tier: A
    url: "https://developer.nvidia.com/blog/processing-high-quality-vietnamese-language-data-with-nvidia-nemo-curator/"
  - title: "NVIDIA Announces NemoClaw (Newsroom)"
    tier: A
    url: "https://nvidianews.nvidia.com/news/nvidia-announces-nemoclaw"
  - title: "NemoClaw Setup Step-by-Step (Medium)"
    tier: B
    url: "https://medium.com/@denvelop/setting-up-nemoclaw-step-by-step-e17ad7d4fcc8"
  - title: "NemoClaw Enterprise Security (VentureBeat)"
    tier: B
    url: "https://venturebeat.com/technology/nvidia-lets-its-claws-out-nemoclaw-brings-security-scale-to-the-agent"
  - title: "OpenClaw Security Guide (bitdoze)"
    tier: B
    url: "https://www.bitdoze.com/openclaw-security-guide/"
  - title: "Vietnamese LLM Study (NeurondAI)"
    tier: B
    url: "https://www.neurond.com/blog/vietnamese-llm"
  - title: "NemoClaw Enterprise Guide (PopularAITools)"
    tier: B
    url: "https://popularaitools.ai/nemoclaw-enterprise-guide/"
  - title: "Jensen Huang NemoClaw Launch (YouTube, 505K views)"
    tier: B
    url: "https://www.youtube.com/watch?v=kRmZ5zmMS2o"
---

# Research: Nemotron Vietnamese Benchmarks + NemoClaw YAML Configuration

**Context:** VN-AIA-128 project — HD128 naval AI coding assistant using NemoClaw + Nemotron
**Research mode:** --deep (4 NLM queries + cross-source synthesis)

---

## CRITICAL FINDING

**The planned stack (NemoClaw + Nemotron) is currently INCOMPATIBLE with a secure, Vietnamese-language, air-gapped military environment without extreme architectural modifications.**

Three overlapping failure modes:
1. **Language gap:** Vietnamese NOT in Nemotron's 19 training languages
2. **Air-gap gap:** NemoClaw local inference is "experimental"; default routes to NVIDIA cloud
3. **Security gap:** OpenClaw supply chain attacks (341 malicious skills, CVE-2026-25253)

---

## Analysis

### Insight 1: Vietnamese NOT in Nemotron's 19 Training Languages
- **Source tier:** S (Nemotron 3 Nano Technical Report)
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** VMLU leaderboard (no Nemotron entries), NeurondAI study
- **Citation:** NVIDIA, "Nemotron 3 Nano Technical Report", Dec 2023. 19 languages: Arabic, Chinese, Czech, Danish, Dutch, Finnish, French, German, Hebrew, Hindi, Italian, Japanese, Korean, Portuguese, Polish, Russian, Spanish, Swedish, Thai.
- **Galaxy candidate:** YES — "Nemotron Vietnamese Blind Spot — 19 Languages Không Có Tiếng Việt"
- **Impact for VN-AIA-128:** Nemotron will underperform on Vietnamese coding instructions, comments, and documentation. Must fine-tune or replace.

### Insight 2: VMLU Leaderboard — No Nemotron, Fine-tuned VN Models Dominate
- **Source tier:** S (vmlu.ai)
- **Confidence:** ★★★ HIGH
- **Top from-scratch:** QwQ-32B (76.13), Qwen2.5-72B (69.17), Llama-3-70B (66.44)
- **Top fine-tuned:** V-LLM v1 (85.11), MISA-AI-1.0 (81.26), Vi-Sovereign-Medium (80.57)
- **Viettel entry:** Llama3-ViettelSolution-8B = #22 fine-tuned (56.20)
- **Galaxy candidate:** YES — "VMLU Law — Fine-tuned Thắng From-scratch Cho Tiếng Việt"

### Insight 3: NeMo Curator Vietnamese Pipeline (Viettel Case Study)
- **Source tier:** A (NVIDIA Technical Blog)
- **Confidence:** ★★★ HIGH
- **Key data:** Viettel used NeMo Curator on C4+OSCAR+Wikipedia+News Vietnamese data
- **Pipeline:** Unicode reformatting → Exact dedup (−8.31%) → Heuristic filter (−35.74%) → Classifier filter (−45.43%) = **90% total removed**
- **Result:** Llama3-ViettelSolution-8B, ranked on VMLU
- **Galaxy candidate:** NO — specific to Viettel, not a generalizable law

### Insight 4: Complete OpenShell YAML Policy Schema
- **Source tier:** S (docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Schema structure:**

```yaml
version: 1                        # REQUIRED, must be 1

filesystem_policy:                 # STATIC — locked at sandbox creation
  include_workdir: true
  read_only:
    - /usr
    - /lib
    - /etc
  read_write:
    - /sandbox
    - /tmp

landlock:                          # STATIC
  compatibility: best_effort       # or "hard_requirement"

process:                           # STATIC
  run_as_user: sandbox             # cannot be root/0
  run_as_group: sandbox            # cannot be root/0

network_policies:                  # DYNAMIC — hot-swappable
  policy_key:
    name: "display-name"
    endpoints:
      - host: "api.example.com"    # supports *.example.com wildcards
        port: 443
        protocol: rest             # enables HTTP inspection
        tls: terminate             # or "passthrough"
        enforcement: enforce       # or "audit"
        access: read-only          # or "read-write" or "full"
        rules:                     # mutually exclusive with access
          - allow:
              method: GET
              path: "/api/v1/**"
    binaries:
      - path: /usr/bin/node        # supports * and ** globs
```

- **Access levels:** full (all methods), read-only (GET/HEAD/OPTIONS), read-write (+POST/PUT/PATCH)
- **Constraints:** Absolute paths only, no `..`, max 256 paths, each ≤4096 chars
- **Hot-swap:** network_policies = dynamic (openshell policy set), filesystem/landlock/process = static (requires nemoclaw onboard)
- **Galaxy candidate:** NO — reference material, not insight

### Insight 5: NemoClaw Baseline Network Policies (9 Endpoint Groups)
- **Source tier:** S (docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Default endpoints:**

| Policy | Endpoints | Binaries |
|--------|-----------|----------|
| claude_code | api.anthropic.com:443, statsig.anthropic.com:443, sentry.io:443 | claude |
| nvidia | integrate.api.nvidia.com:443, inference-api.nvidia.com:443 | claude, openclaw |
| github | github.com:443 | gh, git |
| github_rest_api | api.github.com:443 | gh |
| clawhub | clawhub.com:443 | openclaw |
| openclaw_api | openclaw.ai:443 | openclaw |
| openclaw_docs | docs.openclaw.ai:443 | openclaw |
| npm_registry | registry.npmjs.org:443 | openclaw, npm |
| telegram | api.telegram.org:443 | any |

- **For air-gap:** Remove ALL 9 groups. Add only internal git, internal registry, local NIM.
- **Galaxy candidate:** NO — configuration reference

### Insight 6: NIM Air-Gap Deployment Fully Documented
- **Source tier:** S (docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Procedure:**
  1. Connected environment: `docker run ... create-model-store --model-repo hf://nvidia/Nemotron-3-Nano --model-store /model-repo`
  2. Transfer model-repo to air-gapped system (USB/physical media)
  3. Air-gapped: `docker run ... -e NIM_MODEL_NAME=/model-repo` (NO HF_TOKEN, NO NGC_API_KEY)
- **Hardware:** NVIDIA GPU required, 16GB+ shared memory, Docker with NVIDIA runtime
- **Profiles:** vLLM, SGLang, TensorRT-LLM selectable via NIM_MODEL_PROFILE
- **Galaxy candidate:** NO — procedure, not insight

### Insight 7: Marketing vs Docs Contradiction on "Local-Ready"
- **Source tier:** S+A vs B (NVIDIA docs vs press vs community)
- **Confidence:** ★★ MED — contradiction flagged
- **Marketing (Jensen Huang, NVIDIA press):** NemoClaw enables "local computing for autonomous agents" with privacy controls out-of-the-box
- **Official docs:** Local inference (Ollama, vLLM) is "still experimental". Default config routes to NVIDIA cloud API requiring external API key.
- **Galaxy candidate:** YES — "Marketing-Docs Gap — NemoClaw Local Inference Thực Tế Là Experimental"

### Insight 8: CVE-2026-25253 + Supply Chain Details (Confirms Session 54)
- **Source tier:** S (NVD) + B (bitdoze, VentureBeat)
- **Confidence:** ★★★ HIGH
- **CVE-2026-25253:** CVSS 8.8, 1-click RCE via gatewayUrl parameter, auth token exfiltration
- **Affected:** 40,000+ exposed instances, 17,500+ exploitable
- **341 malicious skills** (12% of ClawHub), 3 attack types:
  - macOS droppers (Base64 → curl → infostealer at 91.92.242.30)
  - Fake Windows installers (MSI disguised as driver)
  - MCP backdoors (reverse tunnel via bore.pub)
- **Fix:** Update to OpenClaw ≥2026.1.29
- **Galaxy candidate:** NO — already captured in Session 54 Galaxy notes

### Insight 9: Nemotron Model Options for NemoClaw
- **Source tier:** S (docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Available models:**

| Model | Context | Max Output | Notes |
|-------|---------|------------|-------|
| Nemotron 3 Super 120B (A12B) | 131K | 8,192 | Default in NemoClaw |
| Nemotron Ultra 253B | 131K | 4,096 | Largest |
| Nemotron Super 49B v1.5 | 131K | 4,096 | Mid-range |
| Nemotron 3 Nano 30B (A3B) | 131K | 4,096 | Edge-deployable |

- **Runtime switch:** `openshell inference set --provider nvidia-nim --model <model-name>` (no restart)
- **Galaxy candidate:** NO — reference table

### Insight 10: Vietnamese LLM Alternatives for Air-Gap Deployment
- **Source tier:** S (VMLU) + B (NeurondAI)
- **Confidence:** ★★ MED
- **Best candidates for VN-AIA-128:**

| Model | VMLU Score | Size | Open Weights | Air-Gap Ready |
|-------|-----------|------|:---:|:---:|
| QwQ-32B | 76.13 | 32B | ✓ | ✓ via NIM/vLLM |
| Qwen2.5-72B | 69.17 | 72B | ✓ | ✓ via vLLM |
| Sailor 7B/14B | N/A (best VN lit) | 7-14B | ✓ | ✓ |
| Llama3-ViettelSolution-8B | 56.20 | 8B | ? | ? |
| V-LLM v1 | 85.11 (fine-tuned) | ? | ✗ | ✗ |

- **Recommendation:** QwQ-32B or Qwen2.5-7B as base, fine-tuned with NeMo Curator Vietnamese data pipeline
- **Galaxy candidate:** YES — "QwQ vs Nemotron — Khi Model Đa Ngôn Ngữ Thua Model Chuyên Tiếng Việt"

### Insight 11: OpenShell Architecture — Out-of-Process Security
- **Source tier:** S (docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Key principle:** Policy engine runs OUTSIDE the sandbox. Even fully compromised agent cannot modify policies.
- **Request path:** Agent (sandbox) → OpenShell gateway → inference provider (never direct egress)
- **Unknown host:** Intercepted by TUI for human operator approval
- **Galaxy candidate:** NO — already covered by Session 54 "Security Retrofit Trap" note

### Insight 12: NemoClaw Prerequisites & Platform Support
- **Source tier:** S (GitHub, docs.nvidia.com)
- **Confidence:** ★★★ HIGH
- **Hardware:** 4+ vCPU, 16GB RAM, 40GB disk (recommended)
- **Software:** Ubuntu 22.04+, Node.js 20+, npm 10+, Docker
- **Platform matrix:**

| Platform | Container Runtime | Status |
|----------|-------------------|--------|
| Linux | Docker | Primary |
| macOS (Apple Silicon) | Colima, Docker Desktop | Supported |
| Windows WSL | Docker Desktop WSL | Supported |
| macOS Podman | — | Not supported |

- **Install:** `curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash`
- **Galaxy candidate:** NO — reference

---

## Cross-Source Synthesis

### Agreement (HIGH confidence)
1. **AI agents need strict security guardrails** — all sources agree
2. **Vietnamese LLM quality depends on data curation** — NeMo Curator pipeline proven
3. **NIM supports air-gap deployment** — Docker-based, fully documented
4. **OpenShell YAML = declarative policy** — well-documented, production-grade

### Contradictions (CEO review needed)
1. **Marketing says "local-ready"** vs **docs say "experimental local inference"** — MUST verify experimentally before committing to local Nemotron
2. **NVIDIA says "enterprise-ready"** vs **community says "40+ patches needed"** — NemoClaw is alpha/early-preview, not production-grade yet

### Coverage Gaps
1. **No Nemotron Vietnamese benchmark data exists** — nobody has tested Nemotron on VMLU
2. **NemoClaw air-gap viability unknown** — NIM supports air-gap, but NemoClaw framework itself may break without internet (skill updates, ClawHub, npm)
3. **Fine-tuning Nemotron for Vietnamese = undocumented** — Viettel used Llama, not Nemotron
4. **NemoClaw + non-Nemotron models** — can NemoClaw route to Qwen/Llama-VN instead? Likely yes via OpenShell inference provider config, but undocumented

---

## VN-AIA-128 Decision Matrix Update

Based on this research, the Session 54 model selection matrix needs revision:

### Original (Session 54)
| Model | VDI Score |
|-------|-----------|
| OpenClaw + NemoClaw | 77.8% |

### Revised Architecture Options

| Option | Stack | Vietnamese | Air-Gap | Security | Complexity |
|--------|-------|:---:|:---:|:---:|:---:|
| A | NemoClaw + Nemotron (as-is) | ✗ Poor | ⚠ Experimental | ✓ Good | Low |
| B | NemoClaw + Qwen2.5/QwQ (swap model) | ✓ Good | ⚠ Experimental | ✓ Good | Medium |
| C | OpenShell + custom agent + Qwen (no OpenClaw) | ✓ Good | ✓ Full | ✓ Best | High |
| D | Standalone vLLM/NIM + custom UI (no NemoClaw) | ✓ Good | ✓ Full | ✓ Manual | Medium |

**Recommendation:** Option B for MVP demo (2026-04-19), evaluate Option C for production.

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 22 |
| Total analyzed | 18 |
| Tier S (Standards/Docs) | 10 |
| Tier A (Authority) | 2 |
| Tier B (Professional) | 6 |
| Tier C (Community) | 0 |
| Pro ratio (S+A/total) | 67% |
| Insights extracted | 12 |
| ★★★ HIGH confidence | 9 |
| ★★ MED confidence | 3 |
| ★ LOW confidence | 0 |
| Galaxy candidates | 3 ready, 0 needs verification |

### Patent Landscape
- Patents found: 0 (Channel 4 skipped — software/AI topic, not engineering hardware)
- FTO concern: NO

### Coverage Gaps
- Nemotron Vietnamese performance — no benchmark data exists. **Suggested action:** Run VMLU benchmark on Nemotron 3 Nano locally
- NemoClaw + non-Nemotron model — undocumented. **Suggested action:** Test `openshell inference set` with Qwen model
- NemoClaw full air-gap — untested. **Suggested action:** Install NemoClaw, disconnect network, verify functionality

### NLM Status
- NLM notebook: nemotron-vn (18 sources)
- NLM gaps: 0 sources failed (1 Medium uncertain)
- Auto-fallback triggered: NO
- Conversation IDs: 379a43fb, 45d7329e, 343923a8, 689e4adf

### Recommendation for Next Research
1. **VMLU benchmark Nemotron Nano locally** — install model, run VMLU eval
2. **Qwen2.5 + NemoClaw integration** — test model swap in OpenShell
3. **SeaLLM and Sailor models** — Southeast Asian LLM alternatives
4. **HD128 specific use cases** — what Vietnamese language tasks does the assistant actually need?
