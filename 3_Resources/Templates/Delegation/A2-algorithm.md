# DELEGATION TEMPLATE: A2-ALGORITHM
## Implement Known Algorithm from Specification

**Category:** Software Development | **HITL:** Yes (Layer 3-5) | **Time Saved:** 3-5h | **Frequency:** 1-2x/week

---

## Invocation

```
agent.run({
  task: "Implement [algorithm_name] as described in [reference]",

  context: {
    reference: "[paper/spec/textbook section]",
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    input_format: {
      data_type: "[audio samples | video frames | coordinate data]",
      sample_rate: "[value + unit]",
      channel_count: "[number]",
      precision: "[8bit | 16bit | 32bit float]"
    },
    output_format: {
      data_type: "[detection events | coordinates | scores]",
      latency_requirement: "[max ms from input to output]",
      accuracy_requirement: "[value + metric]"
    },
    hardware_constraint: {
      platform: "[RPi5 | Hailo-8 | STM32H743 | FPGA iCE40]",
      memory_limit: "[MB available]",
      compute_budget: "[TOPS | MFLOPS | CPU%]"
    }
  },

  constraints: {
    parameterize: "ALL constants MUST be configurable (no magic numbers)",
    temperature: "If using speed-of-sound: PARAMETERIZE for 20-45°C",
    units: "Explicitly document all units. Use SI. Convert at boundaries.",
    edge_cases: "Handle: null input, overflow, underflow, NaN, timeout",
    thread_safety: "Mark if function is thread-safe or not in docstring",
    prohibited: [
      "Do NOT assume single-channel audio (LOMAH has 4 sensors)",
      "Do NOT assume stationary platform (naval products move)",
      "Do NOT assume constant lighting (VN-CAM outdoor use)",
      "Do NOT assume continuous network (edge-first design)",
      "Do NOT hardcode file paths, IP addresses, or ports"
    ]
  },

  test_criteria: {
    unit_tests: "Generate pytest/gtest for: normal, boundary, error cases",
    performance: "Measure execution time. Flag if > latency_requirement",
    memory: "Measure peak memory. Flag if > memory_limit",
    numerical: "Compare output against known reference values from [source]"
  },

  review: "HITL required before integration — KN verifies Layer 3-5",

  fallback: {
    missing_spec: "If algorithm spec is ambiguous, list ALL interpretations and ASK",
    performance_fail: "If cannot meet latency, output profiling data + bottleneck analysis",
    hardware_mismatch: "If algorithm needs resources beyond hardware, suggest alternatives"
  }
})
```

---

## Product-Specific Presets

### VN-LOMAH (BB-01)
```
input_format:
  data_type: "piezo sensor voltage samples"
  sample_rate: "configurable — see signal chain spec"
  channel_count: 4  # NEVER assume single-channel
  precision: "16bit ADC"
output_format:
  data_type: "hit/miss detection events with timestamps"
hardware_constraint:
  platform: RPi5
  signal_chain: "Piezo → Charge Amp (Q→V) → BPF → Gain → Clamp → ADC"
  opamps: "LM358, TL072 (Vietnam market)"
critical: "CONTACT sensors (piezoelectric), NOT MEMS microphones"
```

### VN-CAM
```
input_format:
  data_type: "video frames"
  precision: "8bit RGB / YUV"
output_format:
  data_type: "detection events + bounding boxes + confidence"
  latency_requirement: "real-time inference"
hardware_constraint:
  platform: "RPi5 + Hailo-8"
```

### VN-SMASH
```
safety_criticality: FIRE CONTROL — maximum rigor
output_format:
  data_type: "targeting solutions"
  accuracy_requirement: "defense-grade precision"
review: "MANDATORY multi-layer review — SAFETY CRITICAL"
```

---

## KN Review Checklist (20-30 minutes — full PLAUSIBLE)

- [ ] **P** Physics: Obeys physical laws in Vietnam tropical environment?
- [ ] **L** Logic: Reasoning chain holds end-to-end?
- [ ] **A** Assumptions: All hidden assumptions listed?
- [ ] **U** Units: All units consistent? SI throughout?
- [ ] **S** Scale: Works at 0.1x and 10x expected conditions?
- [ ] **I** Integration: Compatible with IRONMESH CDM?
- [ ] **B** Boundary: Handles min/max/zero/null/timeout?
- [ ] **L** Lethality: If WRONG, could someone get hurt?
- [ ] **E** Endurance: Will it work in 2 years?
