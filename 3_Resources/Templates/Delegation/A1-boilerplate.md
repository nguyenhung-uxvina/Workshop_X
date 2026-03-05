# DELEGATION TEMPLATE: A1-BOILERPLATE
## Generate Boilerplate Code

**Category:** Software Development | **HITL:** No | **Time Saved:** 1-2h | **Frequency:** 3-5x/week

---

## Invocation

```
agent.run({
  task: "Generate [component_type] boilerplate for [product]",

  context: {
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    language: "[Python | C/C++ | JavaScript | Rust]",
    architecture: "IRONMESH CDM — see context/ironmesh.md",
    existing_code: "Reference [existing_module] for style/conventions",
    hardware_target: "[RPi5 | Hailo-8 | STM32H743 | FPGA iCE40]"
  },

  constraints: {
    style: "Follow existing project conventions",
    dependencies: "Only libraries from requirements.txt / package.json",
    no_network: "No external API calls in core modules — edge-first",
    no_hardcoded: "ALL thresholds and parameters → config file, not code",
    size_limit: "Single module ≤ 500 lines. Split if larger."
  },

  test_criteria: {
    compiles: "Must compile/run without errors",
    linting: "Pass flake8/clang-tidy with zero warnings",
    type_safe: "Full type hints (Python) / strict types (C++)",
    documented: "Docstrings on all public functions",
    testable: "Each function independently testable"
  },

  review: "NO HITL needed — automated pre-check sufficient",

  fallback: "If unclear about architecture, output QUESTIONS not assumptions"
})
```

---

## Example Usage

```
A1 for VN-LOMAH:
  component_type: "sensor data ingestion module"
  product: VN-LOMAH
  language: Python
  hardware_target: RPi5
  existing_code: "Reference lomah/signal_chain.py for conventions"

A1 for VN-CAM:
  component_type: "inference pipeline wrapper"
  product: VN-CAM
  language: Python
  hardware_target: Hailo-8
  existing_code: "Reference cam/pipeline.py for conventions"
```

---

## KN Review Checklist (5 minutes)

- [ ] Compiles without errors
- [ ] Follows existing code style
- [ ] No hardcoded values (all in config)
- [ ] No external API calls in core path
- [ ] Module ≤ 500 lines
