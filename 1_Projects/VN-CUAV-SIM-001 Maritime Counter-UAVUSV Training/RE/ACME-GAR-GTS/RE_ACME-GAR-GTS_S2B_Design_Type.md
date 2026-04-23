---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
stage: 2B — RE Complexity Classification
created: 2026-04-21
---

# RE COMPLEXITY CLASSIFICATION — ACME GAR GTS

## Per-SF Assessment

| SF    | Sub-Function                    | WX Prior Art                                    | Complexity | Depth in Stage 3                       |
| ----- | ------------------------------- | :---------------------------------------------- | :--------: | -------------------------------------- |
| SF-01 | Convert E→linear impulse        | **YES** (5 WPs evaluated in Recoil Trade Study) |   GREEN    | SHALLOW — WX already has morpho matrix |
| SF-02 | Guide impulse along recoil axis | YES (cradle concept in Phase 2)                 |   GREEN    | SHALLOW — standard mechanical          |
| SF-03 | Modulate impulse frequency      | Partial (concept, not prototyped)               |   GREEN    | SHALLOW — firmware, well-understood    |
| SF-04 | Shape force-time profile        | NO (concept only)                               |   AMBER    | MODERATE — needs PoC data              |
| SF-05 | Detect trigger                  | YES (standard sensors)                          |   GREEN    | CATALOGUE only                         |
| SF-06 | Detect safety state             | YES (standard switch)                           |   GREEN    | CATALOGUE only                         |
| SF-07 | Detect weapon type              | **YES** (NFC auto-detect = WX innovation)       |   GREEN    | SHALLOW — MWI designed                 |
| SF-08 | Resist traverse motion          | **YES** (magnetic brake decided)                |   GREEN    | DONE — Channel A decided               |
| SF-09 | Weapon mass/CG fidelity         | YES (weapon module spec)                        |   GREEN    | SHALLOW — physical design              |
| SF-10 | Muzzle flash                    | YES (LED, trivial)                              |   GREEN    | CATALOGUE only                         |
| SF-11 | Ammo depletion simulation       | Partial                                         |   GREEN    | SHALLOW                                |
| SF-12 | Malfunction injection           | NO specific to recoil, YES for scenario engine  |   AMBER    | MODERATE — Unity integration           |
| SF-13 | Safety override                 | NO (concept)                                    |   AMBER    | MODERATE — safety-critical SW          |
| SF-14 | Visual environment              | **YES** (Unity engine, Phase 2 done)            |   GREEN    | DONE                                   |
| SF-15 | Audio feedback                  | YES (audio system designed)                     |   GREEN    | SHALLOW                                |
| SF-16 | Ballistic trajectory            | **YES** (Unity 6DOF engine)                     |   GREEN    | DONE                                   |
| SF-17 | Hit/miss detection              | **YES** (Unity)                                 |   GREEN    | DONE                                   |
| SF-18 | Performance scoring             | **YES** (Unity AAR)                             |   GREEN    | DONE                                   |
| SF-19 | Session control                 | **YES** (instructor station designed)           |   GREEN    | DONE                                   |
| SF-20 | DIS interop                     | Partial (Open-DIS planned)                      |   GREEN    | SHALLOW                                |
| SF-21 | Self-test/calibrate             | NO                                              |   AMBER    | MODERATE                               |
| SF-22 | Power distribution              | YES (system-level design)                       |   GREEN    | SHALLOW                                |
| SF-23 | Physical platform               | YES (cradle + container concept)                |   GREEN    | SHALLOW                                |

## Summary

| Complexity | Count | % | Stage 3 Depth |
|:----------:|:-----:|:-:|:-------------|
| **GREEN** | 19 | 83% | Reuse WX pattern library + catalogue |
| **AMBER** | 4 | 17% | Selective deep work (SF-04, SF-12, SF-13, SF-21) |
| **RED** | 0 | 0% | None — WX has extensive prior art |

## OVERALL RE COMPLEXITY: **GREEN** (Variant-level)

**Rationale:** WX has already done significant design work on VN-CUAV-SIM-001 (Phase 2 complete, Gate 2 passed 3.71/4.0). The ACME GAR RE is informing a SUBSYSTEM (recoil/F1.6) within an EXISTING product design, not creating a new product. 83% of sub-functions already have WX prior art.

**Stage 3 TIME BUDGET:** 30-40% (GREEN). Focus deep effort only on:
1. SF-04 (force-time profile shaping) — needs PoC data from masselotte/pneumatic
2. SF-12 (malfunction injection for recoil) — Unity integration
3. SF-13 (safety override logic) — safety-critical
4. SF-21 (self-test) — quality assurance

---

## Save to: `RE_ACME-GAR-GTS_S2B_Design_Type.md` ✅
