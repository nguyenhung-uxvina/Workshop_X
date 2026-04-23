---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 1B — Material & Process Detective (OSINT)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 1B: MATERIAL & PROCESS — Zen FAC Simulator

## Table E — Vietnam Manufacturing Capability Gap (Key Components)

| Component | Zen Approach (inferred) | VN Alternative | Gap | Priority |
|-----------|------------------------|---------------|:---:|:--------:|
| 6-DOF Stewart platform | Industrial-grade linear actuators (Moog/Parker class) | 2-DOF electric (WX current). 6-DOF = import actuators + custom frame | ❌→⚠️ | LOW (WX uses 2-DOF) |
| 360° cylindrical screen | Specialty rear-projection screen (igloo Vision / similar) | 3× flat screens (WX current) or curved screen import | ❌ for cylindrical | LOW (WX uses flat) |
| Projectors (6-8×) | High-lumen short-throw (Barco/Christie class) | Optoma ZU607TST × 3 (WX choice) | ✅ different scale | N/A |
| Electromechanical recoil | Motor + cam or linear actuator array | Solenoid (WX current) or pneumatic (contingency) | 🔄 Different approach | HIGH |
| Haptic controls | Custom force-feedback servos | Standard marine switches (WX current) | ⚠️ Limited | LOW for LITE |
| Render cluster | Multi-GPU workstation(s) | Single GPU PC (WX current) | ✅ Scale difference | N/A |
| AI IOS software | Proprietary (Zen/ARI developed) | WX Unity + custom AI (ACH approach) | ✅ Own development | HIGH |
| Ship dynamics model | Proprietary hydrodynamic model | Unity physics + custom (WX approach) | ✅ Own development | HIGH |
| Weapon replica | Modified real weapon OR cast/CNC replica | CNC aluminum mockup (WX approach) | ✅ Available | HIGH |

**Strategic bottleneck for WX:** NONE. Zen's architecture requires more expensive components (6-DOF, 360° screen, multiple projectors) but WX's LITE design deliberately avoids these cost drivers. WX's gaps are DIFFERENT from Zen's architecture.
