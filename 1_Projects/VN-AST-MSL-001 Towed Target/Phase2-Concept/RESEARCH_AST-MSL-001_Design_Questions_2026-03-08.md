---
created: 2026-03-08
source: research-pipeline
notebook: ast (AST-MSL-001 Design Questions)
topic: "Pontoon quick-release mechanism + IR signature calibration"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox]
sources_analyzed: 20
videos_analyzed: []
---

# RESEARCH: AST-MSL-001 Open Design Questions

## Search Context
- Project: VN-AST-MSL-001 "THANH TRI" — 6m HDPE ring floating naval target
- Open Questions: Q2 (pontoon quick-release) + Q6 (IR signature calibration)
- NLM Notebook: `ast` (a33c420c-7840-40ac-9849-95472684bf31)
- Sources: 20 web sources imported via NLM research (fast mode)

---

## Q2: Pontoon Quick-Release Mechanism

### NLM Analysis Summary

**Recommendation: Modified Pelican Hook (SS316)**

| Mechanism | One-Person Op | 500kg Load | Vibration (8kn tow) | Corrosion | Verdict |
|-----------|--------------|------------|---------------------|-----------|---------|
| Pelican Hook | Good — takes up slack mechanically | Good | RISK — ring can open if tension drops | SS316 available | BEST with modification |
| Snap Shackle | Poor — fixed length, must manually relieve tension | Poor for 500kg | Good once locked | SS316 available | NOT suitable |
| Toggle Pin/Bar | Good — Navy uses for anchors | Proven heavy-duty | Good | Depends on material | Viable backup |

**Key Insight:** Standard pelican hook securing ring can vibrate open during towing. Fix: replace factory ring with small shackle or split pin, or use threaded insert with locking nut.

**Sources:** Dock & Lift Inc, T-ISS HRU, Lion Rubber, IALA Buoy Maintenance, Navy Mooring Guide MO-124, Trelleborg, Steelgear, YBW Forum

---

## Q6: IR Signature Calibration

### NLM Analysis Summary

**Recommendation: Propane Burner (like Meggitt TLX-1)**

| Method | Power Draw | 250°C Sustained | Weather Resistance | Cost | Verdict |
|--------|-----------|-----------------|-------------------|------|---------|
| Ceramic IR Emitter | 125-1000W each — depletes 1kWh in 1-2h | Yes but battery-limited | Robust (20,000h life) | Medium | NOT viable (power) |
| Propane Burner | Battery only for ignition + valves | Yes — fuel-based, not electric | Needs wind shielding | Low fuel cost | BEST for battery constraint |
| Resistive Wire | Same as ceramic — high draw | Poor in open air | Very poor — corrosion | Low | NOT viable |

**Key Insights:**
1. Wien's Law: 250°C peak emission at ~5.5μm — slightly above 3-5μm band but significant energy still in-band
2. Propane heats metal shroud/plate with high-emissivity coating → calibrated radiance
3. TLX-1 (Meggitt) uses propane "plume augmentation" for IR missile seeker training — proven approach
4. Battery preserved for electronics (ignition, control, telemetry, IALA lantern)
5. Must calibrate against specific seeker band — IR signature depends on shape, temp, emissivity, background

**Sources:** Frontiers IR analysis, WECO ceramic heaters, Tempco E-Mitter data, Wikipedia IR signature, Meggitt TLX-1, DTIC reports (ADA311729, ADA089896, ADA364884), SHIPIR/NTCS naval model

---

## CEO Action Items

- [ ] **Q2 Decision:** Confirm modified pelican hook (SS316) with locking nut — add to BOM
- [ ] **Q6 Decision:** Confirm propane burner approach — add propane system to BOM (tank, regulator, valve, igniter, shroud)
- [ ] Update BOM v1.1 with both decisions
- [ ] Source SS316 pelican hooks locally (check Viettel marine supply chain)
