# LoRa Test Receiver - Build Instructions

> **Document**: TE-BB01-LORA-001
> **Version**: 1.0
> **Date**: 2026-01-26
> **Closes**: DfT-002
> **Purpose**: Test equipment for BB-01 MCU Box LoRa verification

---

## 1. Overview

Simple LoRa receiver for testing BB-01 MCU Box RF communication during production and field deployment.

| Spec | Value |
|------|-------|
| Frequency | 433 MHz (match BB-01) |
| Range | 500m+ (exceeds COM.01) |
| Interface | USB serial (115200 baud) |
| Display | Serial terminal + optional OLED |
| Power | USB 5V |

---

## 2. Bill of Materials

| Item | Part Number | Qty | Cost | Source |
|------|-------------|-----|------|--------|
| ESP32 DevKit | ESP32-WROOM-32 | 1 | 120K | Nhật Tảo |
| LoRa Module | Ra-02 (SX1276) | 1 | 80K | Nhật Tảo |
| OLED Display | SSD1306 0.96" I2C | 1 | 40K | Nhật Tảo |
| Antenna 433MHz | SMA whip | 1 | 30K | Nhật Tảo |
| Jumper wires | F-F | 10 | 10K | Nhật Tảo |
| USB cable | Micro-B | 1 | 20K | Local |
| **TOTAL** | | | **300K VND** | (~$12) |

---

## 3. Wiring Diagram

```
ESP32 DevKit          SX1276 (Ra-02)
─────────────         ──────────────
    3.3V ──────────── VCC
    GND  ──────────── GND
    GPIO18 (SCK) ──── SCK
    GPIO19 (MISO) ─── MISO
    GPIO23 (MOSI) ─── MOSI
    GPIO5  (SS) ───── NSS
    GPIO26 ────────── DIO0 (RX interrupt)
    GPIO27 ────────── RST


ESP32 DevKit          SSD1306 OLED
─────────────         ────────────
    3.3V ──────────── VCC
    GND  ──────────── GND
    GPIO21 (SDA) ──── SDA
    GPIO22 (SCL) ──── SCL
```

### Physical Layout

```
┌─────────────────────────────────────────┐
│              ESP32 DevKit               │
│  ┌─────┐                      ┌─────┐   │
│  │ USB │                      │OLED │   │
│  └─────┘                      └─────┘   │
│                                         │
│         ┌─────────────────┐             │
│         │    SX1276       │             │
│         │    Ra-02        │────[ANT]    │
│         └─────────────────┘             │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. Firmware

### 4.1 Arduino IDE Setup

1. Install ESP32 board support
2. Install libraries:
   - `LoRa` by Sandeep Mistry
   - `Adafruit_SSD1306`
   - `Adafruit_GFX`

### 4.2 Code

```cpp
// BB-01 LoRa Test Receiver
// TE-BB01-LORA-001

#include <SPI.h>
#include <LoRa.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// Pin definitions (ESP32)
#define LORA_SCK   18
#define LORA_MISO  19
#define LORA_MOSI  23
#define LORA_SS    5
#define LORA_RST   27
#define LORA_DIO0  26

// LoRa parameters (must match BB-01)
#define LORA_FREQ     433E6
#define LORA_BW       125E3
#define LORA_SF       7
#define LORA_CR       5

// OLED
#define SCREEN_WIDTH  128
#define SCREEN_HEIGHT 64
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

// Stats
uint32_t packetCount = 0;
int lastRSSI = 0;
float lastSNR = 0;
String lastMessage = "";

void setup() {
  Serial.begin(115200);
  Serial.println("\n=== BB-01 LoRa Test Receiver ===");
  Serial.println("TE-BB01-LORA-001 v1.0\n");

  // Init OLED
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("OLED init failed");
  }
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.println("BB-01 LoRa RX");
  display.println("Initializing...");
  display.display();

  // Init LoRa
  SPI.begin(LORA_SCK, LORA_MISO, LORA_MOSI, LORA_SS);
  LoRa.setPins(LORA_SS, LORA_RST, LORA_DIO0);

  if (!LoRa.begin(LORA_FREQ)) {
    Serial.println("LoRa init failed!");
    display.println("LoRa FAILED!");
    display.display();
    while (1);
  }

  // Configure LoRa (match BB-01 settings)
  LoRa.setSpreadingFactor(LORA_SF);
  LoRa.setSignalBandwidth(LORA_BW);
  LoRa.setCodingRate4(LORA_CR);
  LoRa.enableCrc();

  Serial.println("LoRa init OK");
  Serial.printf("Freq: %.1f MHz\n", LORA_FREQ / 1E6);
  Serial.printf("BW: %.0f kHz, SF: %d, CR: 4/%d\n",
                LORA_BW / 1E3, LORA_SF, LORA_CR);
  Serial.println("\nWaiting for packets...\n");

  updateDisplay();
}

void loop() {
  int packetSize = LoRa.parsePacket();

  if (packetSize) {
    // Read packet
    String incoming = "";
    while (LoRa.available()) {
      incoming += (char)LoRa.read();
    }

    // Get signal info
    lastRSSI = LoRa.packetRssi();
    lastSNR = LoRa.packetSnr();
    packetCount++;
    lastMessage = incoming;

    // Print to serial
    Serial.println("────────────────────────────────");
    Serial.printf("Packet #%d received!\n", packetCount);
    Serial.printf("RSSI: %d dBm\n", lastRSSI);
    Serial.printf("SNR:  %.1f dB\n", lastSNR);
    Serial.printf("Size: %d bytes\n", packetSize);
    Serial.printf("Data: %s\n", incoming.c_str());

    // Parse BB-01 packet format
    // Expected: "HIT:T1:12345678" (target:timestamp)
    if (incoming.startsWith("HIT:")) {
      Serial.println(">>> IMPACT DETECTED <<<");
      parseHitPacket(incoming);
    }

    Serial.println("────────────────────────────────\n");

    // Update display
    updateDisplay();
  }
}

void parseHitPacket(String packet) {
  // Format: HIT:Tn:timestamp
  int t1 = packet.indexOf(':');
  int t2 = packet.indexOf(':', t1 + 1);

  if (t1 > 0 && t2 > 0) {
    String target = packet.substring(t1 + 1, t2);
    String timestamp = packet.substring(t2 + 1);

    Serial.printf("  Target: %s\n", target.c_str());
    Serial.printf("  Time:   %s\n", timestamp.c_str());
  }
}

void updateDisplay() {
  display.clearDisplay();
  display.setCursor(0, 0);

  display.println("BB-01 LoRa RX");
  display.println("────────────────");
  display.printf("Packets: %d\n", packetCount);
  display.printf("RSSI: %d dBm\n", lastRSSI);
  display.printf("SNR:  %.1f dB\n", lastSNR);
  display.println("────────────────");

  // Show last message (truncated)
  if (lastMessage.length() > 0) {
    display.print("Last: ");
    display.println(lastMessage.substring(0, 14));
  } else {
    display.println("Waiting...");
  }

  display.display();
}
```

### 4.3 Upload

1. Connect ESP32 via USB
2. Select board: "ESP32 Dev Module"
3. Select correct COM port
4. Upload

---

## 5. Usage

### 5.1 Basic Test

1. Power on test receiver via USB
2. Open serial terminal (115200 baud)
3. Power on BB-01 MCU Box
4. Observe packets in terminal

### 5.2 Expected Output

```
=== BB-01 LoRa Test Receiver ===
TE-BB01-LORA-001 v1.0

LoRa init OK
Freq: 433.0 MHz
BW: 125 kHz, SF: 7, CR: 4/5

Waiting for packets...

────────────────────────────────
Packet #1 received!
RSSI: -45 dBm
SNR:  9.5 dB
Size: 18 bytes
Data: HIT:T1:00012345
>>> IMPACT DETECTED <<<
  Target: T1
  Time:   00012345
────────────────────────────────
```

### 5.3 Pass/Fail Criteria

| Test | Pass Criteria | Ref |
|------|---------------|-----|
| Packet received | Any valid packet | DfT Stage 6 |
| RSSI at 10m | > -80 dBm | DfT Stage 6 |
| RSSI at 100m | > -100 dBm | DfT Stage 6 |
| Packet success | > 99% at 100m | DfT Stage 6 |
| Range | 500m LOS | COM.01 |

---

## 6. Range Test Procedure

### Equipment
- BB-01 MCU Box (DUT)
- This test receiver
- Laptop with serial terminal
- Measuring tape or GPS

### Procedure

| Step | Distance | Action | Record |
|------|----------|--------|--------|
| 1 | 10m | TX 10 packets | RSSI, success rate |
| 2 | 50m | TX 10 packets | RSSI, success rate |
| 3 | 100m | TX 10 packets | RSSI, success rate |
| 4 | 200m | TX 10 packets | RSSI, success rate |
| 5 | 500m | TX 10 packets | RSSI, success rate |

### Expected Results

| Distance | Typical RSSI | Min Success |
|----------|--------------|-------------|
| 10m | -40 to -60 dBm | 100% |
| 100m | -70 to -90 dBm | 99% |
| 500m | -90 to -110 dBm | 95% |

---

## 7. Troubleshooting

| Symptom | Possible Cause | Fix |
|---------|----------------|-----|
| No packets | Frequency mismatch | Verify 433 MHz both sides |
| No packets | SF/BW mismatch | Match LoRa parameters |
| No packets | Antenna missing | Connect antenna |
| Low RSSI | Antenna orientation | Try vertical |
| Low RSSI | Obstacles | Clear line of sight |
| Intermittent | Interference | Change channel |

---

## 8. Storage

Store test receiver in ESD bag with:
- ESP32 + LoRa module assembled
- Antenna
- USB cable
- This instruction sheet

---

---

## Related Documents

- [[quality/dfx-review-mcu-box]] - Source of DfT-002 requirement
- [[quality/test-procedure-checklist]] - Stage 6 LoRa test uses this receiver
- [[design/mcu-box-assembly-instructions]] - MCU Box assembly
- [[requirements/srs-v2.0]] - COM.01-08 communication requirements

---

*Test Equipment TE-BB01-LORA-001*
*Closes DfT-002*
