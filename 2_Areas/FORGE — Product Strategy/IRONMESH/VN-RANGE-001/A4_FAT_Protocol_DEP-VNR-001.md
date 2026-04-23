---
project: VN-RANGE-001
step: A4 — Factory Acceptance Test
type: FAT-protocol (KN executes in workshop before shipping)
deployment_id: DEP-VNR-001
customer: Trường bắn Suối Hai — E12/D3
config_source: A3_Equipment_Config_DEP-VNR-001.md
version: 1.0
created: 2026-02-20
status: TEMPLATE — execute when equipment configured
automation: 50% — digital checks scripted, physical checks manual
gate_rule: KN signs FAT certificate. NO SHIPPING without FAT PASS.
---

# CORTEX RANGE — Factory Acceptance Test Protocol
## DEP-VNR-001: Trường bắn Suối Hai (10 lanes)

> **RULE:** Do NOT ship with known defects to a military customer.
> FAT PASS = every CRITICAL and HIGH check passes. MEDIUM items documented with mitigation.
> FAT FAIL = debug, fix, retest. Max 3 cycles before escalating.

---

## 1. PRE-FAT SETUP

**Time required:** ~30 min setup + ~2h testing
**Location:** Workshop X lab
**Personnel:** KN (tester + signatory) or designated technician

### 1.1 Lab Configuration

```
Simulate field deployment in lab:

[Power source 220V]──[UPS H13]──[EDGE node H07]──[PoE Switch H11]
                                       │                    │
                                  [WiFi AP H08]      [Sensors × 3]
                                       │              (minimum 3 for FAT:
                                  [Tablet H14]         L01, L05, L10)
```

> FAT tests 3 representative sensors (left edge, center, right edge) not all 10.
> If 3 pass → batch is good. If any fail → test the full set.

### 1.2 Pre-FAT Checklist

- ☐ All equipment from BOM present and unpacked
- ☐ A3 config flashed per §7 checklist (all items checked)
- ☐ Lab power stable (220V ± 10%)
- ☐ Test acoustic source ready (clapper or calibration speaker)
- ☐ Stopwatch / timer ready for latency checks
- ☐ This protocol printed

---

## 2. FAT CHECKLIST

### Test Group 1: SENSOR HARDWARE (per sensor — test L01, L05, L10)

| # | Test | Method | Acceptance | L01 | L05 | L10 | Notes |
|---|------|--------|------------|-----|-----|-----|-------|
| T01 | **Power on** | Connect PoE → observe | LED GREEN within 10s | ☐P ☐F | ☐P ☐F | ☐P ☐F | |
| T02 | **Network connectivity** | `ping [sensor_ip]` | Response < 5ms | ☐P ☐F | ☐P ☐F | ☐P ☐F | Automated |
| T03 | **Firmware version** | Query via API | Reports v2.1.0 | ☐P ☐F | ☐P ☐F | ☐P ☐F | Automated |
| T04 | **Config loaded** | Query sensor_id via API | Matches A3 §3.2 | ☐P ☐F | ☐P ☐F | ☐P ☐F | Automated |
| T05 | **Acoustic detection** | Hand clap at 1m | Event registered in < 100ms | ☐P ☐F | ☐P ☐F | ☐P ☐F | Manual |
| T06 | **Sensitivity range** | Clap at 0.5m, 1m, 2m | Detects all 3 distances | ☐P ☐F | ☐P ☐F | ☐P ☐F | Manual |
| T07 | **LED status indicator** | Disconnect cable → reconnect | RED on disconnect, GREEN on reconnect | ☐P ☐F | ☐P ☐F | ☐P ☐F | Manual |
| T08 | **IP rating visual** | Inspect seals, glands | No visible gaps, glands tight | ☐P ☐F | ☐P ☐F | ☐P ☐F | Manual |

**Severity:** T01-T04 = CRITICAL | T05-T06 = CRITICAL | T07 = HIGH | T08 = HIGH

### Test Group 2: EDGE NODE

| # | Test | Method | Acceptance | Result | Notes |
|---|------|--------|------------|--------|-------|
| T09 | **Boot** | Power on EDGE | Boots to OS in < 90s | ☐P ☐F | |
| T10 | **CDM service** | `curl http://localhost:5432/health` | Status: RUNNING | ☐P ☐F | Automated |
| T11 | **SCOREBOARD service** | `curl http://localhost:8080/health` | Status: RUNNING | ☐P ☐F | Automated |
| T12 | **PULSE service** | `curl http://localhost:80/health` | Status: RUNNING | ☐P ☐F | Automated |
| T13 | **Clawdbot service** | `curl http://localhost:8443/health` | Status: RUNNING | ☐P ☐F | Automated |
| T14 | **CDM write/read** | Insert test record → query | Record persists and returns correct | ☐P ☐F | Automated |
| T15 | **AI model loaded** | SCOREBOARD API `/model/status` | `ballisticai_7.62x39mm_v1.onnx` loaded | ☐P ☐F | Automated |
| T16 | **Storage** | `df -h` | ≥ 900GB free on NVMe | ☐P ☐F | Automated |
| T17 | **UPS protection** | Pull AC power → observe | EDGE stays running ≥ 5 min on UPS | ☐P ☐F | Manual |

**Severity:** T09-T15 = CRITICAL | T16 = HIGH | T17 = HIGH

### Test Group 3: NETWORK

| # | Test | Method | Acceptance | Result | Notes |
|---|------|--------|------------|--------|-------|
| T18 | **WiFi AP broadcast** | Scan WiFi from tablet | `CORTEX_RANGE_SUOIHAI` visible | ☐P ☐F | Manual |
| T19 | **WiFi connect** | Connect tablet to AP | Connected, IP assigned via DHCP | ☐P ☐F | Manual |
| T20 | **PULSE from tablet** | Open `http://cortex.range` in browser | Dashboard loads < 5s | ☐P ☐F | Manual |
| T21 | **Sensor → EDGE → PULSE** | Clap near L01 while watching PULSE | Event appears on dashboard < 2s | ☐P ☐F | Manual — END-TO-END |
| T22 | **4G modem** | Power on modem, check connectivity | Internet reachable via 4G | ☐P ☐F | Manual |
| T23 | **DNS resolution** | `nslookup cortex.range` from tablet | Resolves to 192.168.10.1 | ☐P ☐F | Automated |

**Severity:** T18-T21 = CRITICAL | T22 = HIGH | T23 = MEDIUM

### Test Group 4: INTEGRATION (end-to-end)

| # | Test | Method | Acceptance | Result | Notes |
|---|------|--------|------------|--------|-------|
| T24 | **Multi-sensor simultaneous** | Clap near L01, then L05, then L10 (5s apart) | All 3 events registered, correct lane attribution | ☐P ☐F | Manual |
| T25 | **PULSE all lanes** | Check dashboard lane view | L01, L05, L10 show GREEN; others show OFFLINE (expected — not connected) | ☐P ☐F | Manual |
| T26 | **CDM data written** | Query CDM after T24 | 3 events in DB with correct timestamps + lane IDs | ☐P ☐F | Automated |
| T27 | **Scoring output** | Check SCOREBOARD API after T24 | Events classified (even if uncalibrated — classification runs) | ☐P ☐F | Automated |
| T28 | **Session lifecycle** | Start session → generate events → end session → view report | Full session creates CDM record set + PULSE displays session summary | ☐P ☐F | Manual |
| T29 | **Battery life** (if applicable) | Run sensors on battery | ≥ 4h continuous operation | ☐P ☐F | Manual — only if battery mode planned |

**Severity:** T24-T28 = CRITICAL | T29 = MEDIUM (battery = fallback only)

---

## 3. AUTOMATED TEST SCRIPT

> Run this script to execute all automated checks at once.

```bash
#!/bin/bash
# FAT automated test suite — DEP-VNR-001
# Run from EDGE node terminal

echo "=== CORTEX RANGE FAT — Automated Tests ==="
echo "Deployment: DEP-VNR-001 (Suối Hai, 10 lanes)"
echo "Date: $(date)"
echo ""

PASS=0
FAIL=0

# T02: Sensor connectivity
for ip in 192.168.10.10 192.168.10.14 192.168.10.19; do
  if ping -c 1 -W 1 $ip > /dev/null 2>&1; then
    echo "[PASS] T02: Sensor $ip reachable"
    ((PASS++))
  else
    echo "[FAIL] T02: Sensor $ip NOT reachable"
    ((FAIL++))
  fi
done

# T03: Firmware version
for ip in 192.168.10.10 192.168.10.14 192.168.10.19; do
  VER=$(curl -s http://$ip/api/version | jq -r '.firmware')
  if [ "$VER" == "v2.1.0" ]; then
    echo "[PASS] T03: Sensor $ip firmware $VER"
    ((PASS++))
  else
    echo "[FAIL] T03: Sensor $ip firmware $VER (expected v2.1.0)"
    ((FAIL++))
  fi
done

# T10-T13: Service health
for svc in "CDM:5432" "SCOREBOARD:8080" "PULSE:80" "Clawdbot:8443"; do
  NAME=$(echo $svc | cut -d: -f1)
  PORT=$(echo $svc | cut -d: -f2)
  STATUS=$(curl -s http://localhost:$PORT/health | jq -r '.status')
  if [ "$STATUS" == "RUNNING" ]; then
    echo "[PASS] T1x: $NAME service RUNNING on port $PORT"
    ((PASS++))
  else
    echo "[FAIL] T1x: $NAME service status=$STATUS on port $PORT"
    ((FAIL++))
  fi
done

# T14: CDM write/read
curl -s -X POST http://localhost:5432/api/events \
  -H "Content-Type: application/json" \
  -d '{"type":"fat_test","lane":1,"timestamp":"'$(date -Iseconds)'"}' > /dev/null
RESULT=$(curl -s http://localhost:5432/api/events?type=fat_test | jq '.count')
if [ "$RESULT" -ge 1 ]; then
  echo "[PASS] T14: CDM write/read verified ($RESULT records)"
  ((PASS++))
else
  echo "[FAIL] T14: CDM write/read failed"
  ((FAIL++))
fi

# T15: AI model
MODEL=$(curl -s http://localhost:8080/model/status | jq -r '.model_file')
if [[ "$MODEL" == *"7.62x39mm"* ]]; then
  echo "[PASS] T15: AI model loaded: $MODEL"
  ((PASS++))
else
  echo "[FAIL] T15: AI model: $MODEL (expected 7.62x39mm)"
  ((FAIL++))
fi

# T16: Storage
FREE=$(df -h /data | tail -1 | awk '{print $4}' | sed 's/G//')
if (( $(echo "$FREE > 900" | bc -l) )); then
  echo "[PASS] T16: Storage ${FREE}GB free"
  ((PASS++))
else
  echo "[FAIL] T16: Storage ${FREE}GB free (need >900GB)"
  ((FAIL++))
fi

echo ""
echo "=== RESULTS: $PASS PASS / $FAIL FAIL ==="
if [ $FAIL -eq 0 ]; then
  echo "STATUS: ALL AUTOMATED TESTS PASSED"
else
  echo "STATUS: $FAIL FAILURES — INVESTIGATE BEFORE PROCEEDING"
fi
```

---

## 4. FAT RESULT SUMMARY

| Group | Tests | PASS | FAIL | Notes |
|-------|-------|------|------|-------|
| 1: Sensor Hardware | T01-T08 (×3 sensors) | /24 | /24 | |
| 2: EDGE Node | T09-T17 | /9 | /9 | |
| 3: Network | T18-T23 | /6 | /6 | |
| 4: Integration | T24-T29 | /6 | /6 | |
| **TOTAL** | **45 checks** | **/__** | **/__** | |

### Defects Found

| # | Test | Defect Description | Severity | Fix Applied | Retest Result |
|---|------|--------------------|----------|-------------|---------------|
| — | — | — | — | — | — |

---

## 5. FAT DECISION

### Gate Criteria

| Criterion | Required | Actual | Status |
|-----------|----------|--------|--------|
| All CRITICAL tests pass | 100% | __% | ☐ |
| All HIGH tests pass | 100% | __% | ☐ |
| MEDIUM tests pass | ≥ 80% | __% | ☐ |
| No open CRITICAL defects | 0 | __ | ☐ |
| No open HIGH defects | 0 | __ | ☐ |

### Decision

```
☐ FAT PASS  → Sign certificate → Proceed to A5 (ship)
☐ FAT FAIL  → Debug: [defect list] → Retest (attempt __/3)
☐ ESCALATE  → 3 failed attempts → HALT: "Repeated FAT failure — investigate root cause"
```

---

## 6. FAT CERTIFICATE

> **This section = the shipping gate. No signature = no shipping.**

```
╔══════════════════════════════════════════════════════════════╗
║           FACTORY ACCEPTANCE TEST CERTIFICATE                ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Deployment:  DEP-VNR-001                                    ║
║  Customer:    Trường bắn Suối Hai — E12/D3, SĐ 302          ║
║  Equipment:   CORTEX RANGE 10-lane system                    ║
║                                                              ║
║  Tests executed: __ / 45                                     ║
║  Tests passed:   __ / 45                                     ║
║  Open defects:   __                                          ║
║                                                              ║
║  Result:  ☐ PASS — Equipment approved for shipping           ║
║           ☐ FAIL — Equipment held for rework                 ║
║                                                              ║
║  Tester:   ________________________  Date: ____________      ║
║  Signed:   ________________________  (KN or designee)        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

*A4 FAT Protocol v1.0 — DEP-VNR-001 (Trường bắn Suối Hai, 10 lanes)*
*45 checks: 24 sensor + 9 EDGE + 6 network + 6 integration*
*Automated script covers ~40% of checks; remainder require physical verification*
*Status: TEMPLATE — execute when A3 flash complete*
