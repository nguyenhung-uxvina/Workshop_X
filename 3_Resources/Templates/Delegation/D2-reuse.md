# DELEGATION TEMPLATE: D2-REUSE
## Cross-Product Component Reuse Analysis

**Category:** Design Engineering | **HITL:** Yes — physical compat | **Time Saved:** 3-5h | **Frequency:** Per product pairing

---

## Invocation

```
agent.run({
  task: "Analyze component reuse opportunities between [product_A] and [product_B]",

  context: {
    product_a: "[product_code] — see [design_doc_A]",
    product_b: "[product_code] — see [design_doc_B]",
    ironmesh_platform: "See context/ironmesh.md",
    reuse_target: "70% component reuse across IRONMESH products",
    current_reuse: "[estimated %]"
  },

  constraints: {
    analysis_structure: [
      "1. Component inventory for both products",
      "2. Match identical components (100% reuse)",
      "3. Match similar components (>80% shared, variant-specific additions)",
      "4. Identify unique components (0% reuse — must be custom)",
      "5. Calculate reuse percentage",
      "6. Recommend design changes to increase reuse"
    ],
    component_categories: [
      "Compute (SBC, AI accelerator, MCU)",
      "Sensing (cameras, microphones, radar, IMU)",
      "Communication (WiFi, LoRa, BLE, Ethernet)",
      "Power (battery, DC-DC, solar, PD)",
      "Enclosure (materials, mounting, sealing)",
      "Software (OS, middleware, application)"
    ],
    prohibited: [
      "Do NOT force reuse where requirements fundamentally differ",
      "Do NOT ignore environmental differences between products"
    ]
  },

  test_criteria: {
    coverage: "All component categories analyzed",
    quantified: "Reuse % calculated per category and overall",
    actionable: "Specific design change recommendations with effort estimates"
  },

  review: "HITL required — KN validates physical/environmental compatibility",

  fallback: "If product specs incomplete, flag which specs needed before analysis"
})
```

---

## IRONMESH Product Pairings Matrix

```
              VN-LOMAH  VN-CAM  VN-TRN  VN-SMASH  CORTEX
VN-LOMAH        —        [ ]     [ ]      [ ]      [ ]
VN-CAM                    —      [ ]      [ ]      [ ]
VN-TRN                           —       [ ]      [ ]
VN-SMASH                                  —       [ ]
CORTEX                                             —

Priority pairings (highest reuse potential):
  1. VN-LOMAH ↔ VN-CAM (shared RPi5 compute, co-located at range)
  2. VN-CAM ↔ VN-TRN (video data pipeline overlap)
  3. All ↔ CORTEX (management interface to every product)
```

---

## Known Shared Components (Baseline)

```
Compute:      RPi5 (all products), Hailo-8 (VN-CAM, potentially VN-TRN)
Comms:        WiFi + Ethernet (all), LoRa (field products)
Power:        USB-C PD / 12-48V DC input (all)
Software:     Linux OS (all), Python runtime (all)
Enclosure:    IP65+ rating needed for outdoor products

Unique per product:
  VN-LOMAH:   Piezo sensors, charge amplifier, analog signal chain (LM358/TL072)
  VN-CAM:     Camera modules, Hailo-8 inference pipeline
  VN-SMASH:   Fire control actuators, safety interlocks (UNIQUE — safety critical)
  VN-TRN:     Analytics engine, reporting UI
  CORTEX:     Database, web interface, multi-product integration
```

---

## KN Review Checklist (30 minutes)

- [ ] Physical/environmental compatibility verified?
- [ ] No forced reuse where requirements fundamentally differ?
- [ ] Safety-critical components (VN-SMASH) treated separately?
- [ ] Reuse % calculation methodology sound?
- [ ] Design change recommendations have realistic effort estimates?
