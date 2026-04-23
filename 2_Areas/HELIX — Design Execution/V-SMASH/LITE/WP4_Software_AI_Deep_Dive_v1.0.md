# WP4: SOFTWARE & AI DEEP DIVE
## V-SMASH-LITE Firmware Architecture & YOLO Inference Pipeline

**Document**: VS-SW-001
**Version**: 1.0
**Date**: 2026-01-19
**Phase**: Detail Design (Pahl & Beitz Phase 4)
**Status**: Work Package Specification

---

# 1. SOFTWARE SYSTEM OVERVIEW

## 1.1 System Context

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE SOFTWARE SYSTEM CONTEXT                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                          EXTERNAL INTERFACES                                │   │
│  │                                                                             │   │
│  │   SENSORS              ACTUATORS           HUMAN            STORAGE         │   │
│  │   ┌─────────┐         ┌─────────┐        ┌─────────┐      ┌─────────┐      │   │
│  │   │ Camera  │         │Solenoid │        │ OLED    │      │ SD Card │      │   │
│  │   │ IMX290  │         │ Driver  │        │ Display │      │ 32GB    │      │   │
│  │   └────┬────┘         └────┬────┘        └────┬────┘      └────┬────┘      │   │
│  │        │                   │                  │                │           │   │
│  │   ┌────┴────┐         ┌────┴────┐        ┌────┴────┐      ┌────┴────┐      │   │
│  │   │  IMU    │         │  LEDs   │        │ Buttons │      │  USB-C  │      │   │
│  │   │ BMI160  │         │  RGB    │        │  ×2     │      │  Debug  │      │   │
│  │   └────┬────┘         └────┬────┘        └────┬────┘      └────┬────┘      │   │
│  │        │                   │                  │                │           │   │
│  │   ┌────┴────┐              │                  │                │           │   │
│  │   │ Trigger │              │                  │                │           │   │
│  │   │  FSR    │              │                  │                │           │   │
│  │   └────┬────┘              │                  │                │           │   │
│  └────────┼───────────────────┼──────────────────┼────────────────┼───────────┘   │
│           │                   │                  │                │               │
│           ▼                   ▼                  ▼                ▼               │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                             │   │
│  │                    V-SMASH-LITE SOFTWARE SYSTEM                             │   │
│  │                                                                             │   │
│  │   ┌───────────────────────────────────────────────────────────────────┐    │   │
│  │   │                   NVIDIA JETSON NANO (4GB)                        │    │   │
│  │   │                                                                   │    │   │
│  │   │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │    │   │
│  │   │   │   Linux     │  │   CUDA      │  │ TensorRT    │             │    │   │
│  │   │   │   L4T 32.7  │  │   10.2      │  │   8.2       │             │    │   │
│  │   │   └─────────────┘  └─────────────┘  └─────────────┘             │    │   │
│  │   │                                                                   │    │   │
│  │   │   ┌─────────────────────────────────────────────────────────┐   │    │   │
│  │   │   │              APPLICATION SOFTWARE                       │   │    │   │
│  │   │   │                                                         │   │    │   │
│  │   │   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │   │    │   │
│  │   │   │  │ Camera  │ │   AI    │ │ Tracker │ │Ballistic│      │   │    │   │
│  │   │   │  │ Manager │ │ Engine  │ │ Module  │ │ Compute │      │   │    │   │
│  │   │   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │   │    │   │
│  │   │   │                                                         │   │    │   │
│  │   │   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │   │    │   │
│  │   │   │  │  Fire   │ │ Display │ │ Sensor  │ │  Data   │      │   │    │   │
│  │   │   │  │ Control │ │ Manager │ │ Fusion  │ │ Logger  │      │   │    │   │
│  │   │   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │   │    │   │
│  │   │   │                                                         │   │    │   │
│  │   │   └─────────────────────────────────────────────────────────┘   │    │   │
│  │   │                                                                   │    │   │
│  │   └───────────────────────────────────────────────────────────────────┘    │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.2 Software Requirements Traceability

| Req ID | Software Requirement | Parent Req | Priority |
|--------|---------------------|------------|----------|
| SW-001 | End-to-end latency ≤50ms | R05 | MUST |
| SW-002 | Target detection accuracy ≥95% | R03 | MUST |
| SW-003 | Frame processing rate ≥30 fps | R04 | MUST |
| SW-004 | Power consumption ≤5W average | R28 | MUST |
| SW-005 | Boot time ≤30 seconds | R31 | MUST |
| SW-006 | Track up to 5 simultaneous targets | R04 | WISH |
| SW-007 | Record video to SD card | R27 | WISH |
| SW-008 | OTA firmware update capability | R35 | WISH |
| SW-009 | Safe shutdown on low battery | R26 | MUST |
| SW-010 | Fail-safe trigger blocking on error | R17 | MUST |

## 1.3 Platform Specifications

| Component | Specification | Notes |
|-----------|--------------|-------|
| **Processor** | NVIDIA Jetson Nano 4GB | Tegra X1, Quad-core ARM A57 |
| **GPU** | 128-core Maxwell | CUDA 10.2, TensorRT 8.2 |
| **Memory** | 4GB LPDDR4 | Shared CPU/GPU |
| **OS** | Linux4Tegra 32.7.3 | Ubuntu 18.04 based |
| **Root Filesystem** | 16GB (on 32GB SD) | JetPack 4.6.3 |
| **Power Mode** | 5W (MAXN disabled) | SW-004 compliance |

---

# 2. SOFTWARE ARCHITECTURE

## 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE SOFTWARE ARCHITECTURE                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         APPLICATION LAYER                                   │   │
│  │  ┌──────────────────────────────────────────────────────────────────────┐  │   │
│  │  │                    MAIN APPLICATION (vsmash_main)                    │  │   │
│  │  │                                                                      │  │   │
│  │  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐    │  │   │
│  │  │  │  State     │  │   Event    │  │  Config    │  │   Health   │    │  │   │
│  │  │  │  Machine   │  │   Loop     │  │  Manager   │  │  Monitor   │    │  │   │
│  │  │  └────────────┘  └────────────┘  └────────────┘  └────────────┘    │  │   │
│  │  │                                                                      │  │   │
│  │  └──────────────────────────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                       │                                             │
│                                       ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         PROCESSING LAYER                                    │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │   CAMERA    │  │     AI      │  │   TRACKER   │  │  BALLISTIC  │       │   │
│  │  │   MANAGER   │  │   ENGINE    │  │   MODULE    │  │   COMPUTE   │       │   │
│  │  │             │  │             │  │             │  │             │       │   │
│  │  │ • Capture   │  │ • YOLO      │  │ • Kalman    │  │ • Trajectory│       │   │
│  │  │ • ISP       │  │ • TensorRT  │  │ • Multi-obj │  │ • Lead calc │       │   │
│  │  │ • Buffer    │  │ • Preproc   │  │ • Predict   │  │ • Fire soln │       │   │
│  │  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘       │   │
│  │         │                │                │                │              │   │
│  │         └────────────────┴────────────────┴────────────────┘              │   │
│  │                                   │                                        │   │
│  │  ┌─────────────┐  ┌─────────────┐│ ┌─────────────┐  ┌─────────────┐       │   │
│  │  │    FIRE     │  │   DISPLAY   ││ │   SENSOR    │  │    DATA     │       │   │
│  │  │   CONTROL   │  │   MANAGER   ││ │   FUSION    │  │   LOGGER    │       │   │
│  │  │             │  │             ││ │             │  │             │       │   │
│  │  │ • Auth gate │  │ • Reticle   ││ │ • IMU       │  │ • Video     │       │   │
│  │  │ • Safety    │  │ • Status    ││ │ • Trigger   │  │ • Telemetry │       │   │
│  │  │ • Solenoid  │  │ • Overlay   ││ │ • Time sync │  │ • Events    │       │   │
│  │  └─────────────┘  └─────────────┘│ └─────────────┘  └─────────────┘       │   │
│  │                                   │                                        │   │
│  └───────────────────────────────────┼────────────────────────────────────────┘   │
│                                       │                                             │
│                                       ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                         DRIVER LAYER                                        │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │   │
│  │  │   Camera    │  │    GPIO     │  │    I2C      │  │    SPI      │       │   │
│  │  │   V4L2/CSI  │  │   Driver    │  │   Driver    │  │   Driver    │       │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │   │
│  │                                                                             │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                        │   │
│  │  │    CUDA     │  │  TensorRT   │  │   Storage   │                        │   │
│  │  │   Runtime   │  │   Runtime   │  │   Driver    │                        │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘                        │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                       │                                             │
│                                       ▼                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                      LINUX KERNEL (L4T 32.7.3)                              │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Component Specifications

### 2.2.1 Component Summary Table

| Component | Language | Dependencies | Thread | Priority | Cycle Time |
|-----------|----------|--------------|--------|----------|------------|
| Main Application | C++ | All modules | Main | Normal | Event-driven |
| Camera Manager | C++ | V4L2, CUDA | Dedicated | High | 16.67ms (60fps) |
| AI Engine | C++/CUDA | TensorRT | Dedicated | High | 30ms max |
| Tracker Module | C++ | Eigen | Shared | Normal | 16.67ms |
| Ballistic Compute | C++ | - | Shared | Normal | 16.67ms |
| Fire Control | C++ | GPIO | Dedicated | Real-time | 1ms |
| Display Manager | C++ | SPI, framebuffer | Dedicated | Low | 33ms (30fps) |
| Sensor Fusion | C++ | I2C | Dedicated | High | 5ms (200Hz) |
| Data Logger | C++ | Filesystem | Dedicated | Low | Async |

---

# 3. AI INFERENCE PIPELINE

## 3.1 YOLO Detection Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    YOLO INFERENCE PIPELINE (TensorRT)                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  CAMERA INPUT                                                                       │
│  1920×1080 @ 60fps                                                                  │
│       │                                                                             │
│       ▼                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 1: IMAGE CAPTURE (Camera Manager)                                    │   │
│  │                                                                             │   │
│  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                    │   │
│  │  │   CSI-2     │───▶│   ISP       │───▶│   Buffer    │                    │   │
│  │  │   Capture   │    │  Pipeline   │    │   Pool (3)  │                    │   │
│  │  │             │    │             │    │             │                    │   │
│  │  │ MIPI 2-lane │    │ Debayer     │    │ Triple buf  │                    │   │
│  │  │ 1080p60     │    │ AWB, AE     │    │ NvBuffer    │                    │   │
│  │  └─────────────┘    └─────────────┘    └──────┬──────┘                    │   │
│  │                                               │                            │   │
│  │  Time: ~2ms                                   │                            │   │
│  └───────────────────────────────────────────────┼────────────────────────────┘   │
│                                                   │                                │
│                                                   ▼                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 2: PREPROCESSING (GPU)                                               │   │
│  │                                                                             │   │
│  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                    │   │
│  │  │   Resize    │───▶│  Normalize  │───▶│  GPU       │                    │   │
│  │  │ 1920×1080   │    │  /255.0     │    │  Tensor    │                    │   │
│  │  │     ↓       │    │             │    │             │                    │   │
│  │  │  640×640    │    │  CHW format │    │ FP16 input │                    │   │
│  │  │  (CUDA)     │    │  (CUDA)     │    │ [1,3,640,640]                   │   │
│  │  └─────────────┘    └─────────────┘    └──────┬──────┘                    │   │
│  │                                               │                            │   │
│  │  Time: ~3ms (GPU kernel)                      │                            │   │
│  └───────────────────────────────────────────────┼────────────────────────────┘   │
│                                                   │                                │
│                                                   ▼                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 3: NEURAL NETWORK INFERENCE (TensorRT)                               │   │
│  │                                                                             │   │
│  │  ┌───────────────────────────────────────────────────────────────────────┐ │   │
│  │  │                     YOLOv8-nano TensorRT Engine                       │ │   │
│  │  │                                                                       │ │   │
│  │  │  Input: [1, 3, 640, 640] FP16                                        │ │   │
│  │  │                                                                       │ │   │
│  │  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │ │   │
│  │  │  │Backbone │─▶│  Neck   │─▶│ Head P3 │─▶│ Head P4 │─▶│ Head P5 │   │ │   │
│  │  │  │CSPDark  │  │  PANet  │  │ 80×80   │  │ 40×40   │  │ 20×20   │   │ │   │
│  │  │  │         │  │         │  │ small   │  │ medium  │  │ large   │   │ │   │
│  │  │  └─────────┘  └─────────┘  └────┬────┘  └────┬────┘  └────┬────┘   │ │   │
│  │  │                                  │           │           │         │ │   │
│  │  │                                  └───────────┴───────────┘         │ │   │
│  │  │                                              │                     │ │   │
│  │  │  Output: [1, 84, 8400] (4 classes)          ▼                     │ │   │
│  │  │  84 = 4 (bbox) + 80 (COCO) → pruned to 4 (ours)                  │ │   │
│  │  │                                                                       │ │   │
│  │  └───────────────────────────────────────────────────────────────────────┘ │   │
│  │                                               │                            │   │
│  │  Time: ~18ms @ 5W mode (INT8), ~25ms (FP16)   │                            │   │
│  └───────────────────────────────────────────────┼────────────────────────────┘   │
│                                                   │                                │
│                                                   ▼                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 4: POST-PROCESSING (CPU/GPU)                                         │   │
│  │                                                                             │   │
│  │  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                    │   │
│  │  │   Decode    │───▶│    NMS      │───▶│   Scale     │                    │   │
│  │  │   Boxes     │    │  IoU=0.45   │    │   to 1080p  │                    │   │
│  │  │             │    │             │    │             │                    │   │
│  │  │ cx,cy,w,h   │    │ conf>0.5    │    │ x,y,w,h     │                    │   │
│  │  │ to x1y1x2y2 │    │ max_det=100 │    │ in pixels   │                    │   │
│  │  └─────────────┘    └─────────────┘    └──────┬──────┘                    │   │
│  │                                               │                            │   │
│  │  Time: ~2ms                                   │                            │   │
│  └───────────────────────────────────────────────┼────────────────────────────┘   │
│                                                   │                                │
│                                                   ▼                                │
│  OUTPUT: Detection List                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  struct Detection {                                                         │   │
│  │      int class_id;        // 0=drone, 1=person, 2=vehicle, 3=aircraft      │   │
│  │      float confidence;    // 0.0 - 1.0                                      │   │
│  │      float x, y, w, h;    // Bounding box in pixels (1920×1080)             │   │
│  │  };                                                                         │   │
│  │  std::vector<Detection> detections;  // Typically 0-10 objects              │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  TOTAL PIPELINE LATENCY: ~25ms (target: <30ms) ✓                                   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 YOLO Model Specifications

### 3.2.1 Model Configuration

| Parameter | Value | Notes |
|-----------|-------|-------|
| **Architecture** | YOLOv8-nano | Ultralytics |
| **Input Size** | 640×640 | RGB, normalized |
| **Precision** | INT8 (production) / FP16 (dev) | TensorRT quantization |
| **Classes** | 4 | drone, person, vehicle, aircraft |
| **Parameters** | 3.2M | Pruned from 6.3M |
| **FLOPs** | 8.7G | @ 640×640 input |
| **Engine Size** | ~6MB | .engine file |

### 3.2.2 Training Configuration

```yaml
# training_config.yaml
# YOLOv8-nano training configuration for V-SMASH

model:
  name: yolov8n
  pretrained: yolov8n.pt  # COCO pretrained weights
  
data:
  train: /data/vsmash/train/images
  val: /data/vsmash/val/images
  nc: 4  # number of classes
  names: ['drone', 'person', 'vehicle', 'aircraft']
  
augmentation:
  hsv_h: 0.015
  hsv_s: 0.7
  hsv_v: 0.4
  degrees: 10
  translate: 0.1
  scale: 0.5
  shear: 2.0
  perspective: 0.0
  flipud: 0.0  # No vertical flip for aerial targets
  fliplr: 0.5
  mosaic: 1.0
  mixup: 0.1
  
training:
  epochs: 300
  batch_size: 64  # Cloud GPU training
  imgsz: 640
  optimizer: AdamW
  lr0: 0.01
  lrf: 0.01
  momentum: 0.937
  weight_decay: 0.0005
  warmup_epochs: 3.0
  warmup_momentum: 0.8
  
quantization:
  calibration_images: 1000  # INT8 calibration
  calibration_batches: 50
```

### 3.2.3 Dataset Requirements

| Category | Minimum | Target | Source |
|----------|---------|--------|--------|
| **Drone - Small (<50px)** | 1,000 | 2,000 | Field collection |
| **Drone - Medium (50-200px)** | 1,500 | 3,000 | Field + synthetic |
| **Drone - Large (>200px)** | 500 | 1,000 | Close-range |
| **Person** | 2,000 | 5,000 | Public datasets + field |
| **Vehicle** | 1,000 | 2,000 | Public datasets |
| **Aircraft** | 500 | 1,000 | Public + synthetic |
| **Background (no target)** | 1,000 | 2,000 | Various scenes |
| **TOTAL** | 7,500 | 16,000 | Mixed |

**Vietnam-Specific Requirements:**
- Include tropical vegetation backgrounds
- Urban Vietnamese environments
- Various lighting (tropical sun, overcast, dusk)
- Local drone models (DJI Mavic, Phantom, local manufacturers)

### 3.2.4 TensorRT Conversion Script

```python
#!/usr/bin/env python3
"""
V-SMASH YOLO to TensorRT Conversion Script
File: scripts/convert_to_tensorrt.py
"""

import tensorrt as trt
import numpy as np
from ultralytics import YOLO
import torch

def convert_yolo_to_tensorrt(
    model_path: str,
    output_path: str,
    precision: str = "fp16",
    workspace_gb: int = 2,
    calibration_data: str = None
):
    """
    Convert YOLOv8 model to TensorRT engine for Jetson Nano.
    
    Args:
        model_path: Path to .pt or .onnx model
        output_path: Path for output .engine file
        precision: "fp32", "fp16", or "int8"
        workspace_gb: TensorRT workspace in GB
        calibration_data: Path to calibration images (for INT8)
    """
    
    # Step 1: Load YOLO model
    print(f"Loading model: {model_path}")
    model = YOLO(model_path)
    
    # Step 2: Export to ONNX
    onnx_path = model_path.replace('.pt', '.onnx')
    print(f"Exporting to ONNX: {onnx_path}")
    model.export(
        format='onnx',
        imgsz=640,
        simplify=True,
        opset=12,
        dynamic=False
    )
    
    # Step 3: Build TensorRT engine
    print(f"Building TensorRT engine with {precision} precision...")
    
    TRT_LOGGER = trt.Logger(trt.Logger.INFO)
    builder = trt.Builder(TRT_LOGGER)
    network = builder.create_network(
        1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH)
    )
    parser = trt.OnnxParser(network, TRT_LOGGER)
    
    # Parse ONNX
    with open(onnx_path, 'rb') as f:
        if not parser.parse(f.read()):
            for error in range(parser.num_errors):
                print(f"ONNX Parse Error: {parser.get_error(error)}")
            raise RuntimeError("ONNX parsing failed")
    
    # Configure builder
    config = builder.create_builder_config()
    config.max_workspace_size = workspace_gb * (1 << 30)  # GB to bytes
    
    if precision == "fp16":
        config.set_flag(trt.BuilderFlag.FP16)
        print("Enabled FP16 mode")
    elif precision == "int8":
        config.set_flag(trt.BuilderFlag.INT8)
        # INT8 calibration
        if calibration_data:
            calibrator = Int8EntropyCalibrator(calibration_data)
            config.int8_calibrator = calibrator
            print("Enabled INT8 mode with calibration")
    
    # Build engine
    print("Building engine (this may take several minutes)...")
    engine = builder.build_engine(network, config)
    
    if engine is None:
        raise RuntimeError("Engine build failed")
    
    # Serialize and save
    print(f"Saving engine to: {output_path}")
    with open(output_path, 'wb') as f:
        f.write(engine.serialize())
    
    print(f"Engine saved successfully! Size: {os.path.getsize(output_path) / 1e6:.2f} MB")
    return output_path


class Int8EntropyCalibrator(trt.IInt8EntropyCalibrator2):
    """INT8 calibration using entropy method."""
    
    def __init__(self, image_dir: str, batch_size: int = 8, input_size: int = 640):
        super().__init__()
        self.image_dir = image_dir
        self.batch_size = batch_size
        self.input_size = input_size
        
        # Load calibration images
        self.images = sorted(glob.glob(f"{image_dir}/*.jpg"))[:1000]
        self.current_idx = 0
        
        # Allocate device memory
        self.d_input = cuda.mem_alloc(
            batch_size * 3 * input_size * input_size * 4  # FP32
        )
        
    def get_batch(self, names):
        if self.current_idx >= len(self.images):
            return None
            
        batch = []
        for i in range(self.batch_size):
            if self.current_idx + i >= len(self.images):
                break
            img = cv2.imread(self.images[self.current_idx + i])
            img = cv2.resize(img, (self.input_size, self.input_size))
            img = img.astype(np.float32) / 255.0
            img = img.transpose(2, 0, 1)  # HWC to CHW
            batch.append(img)
        
        batch = np.array(batch, dtype=np.float32)
        cuda.memcpy_htod(self.d_input, batch.ravel())
        self.current_idx += self.batch_size
        
        return [int(self.d_input)]
    
    def read_calibration_cache(self):
        if os.path.exists("calibration.cache"):
            with open("calibration.cache", "rb") as f:
                return f.read()
        return None
    
    def write_calibration_cache(self, cache):
        with open("calibration.cache", "wb") as f:
            f.write(cache)


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True, help="Path to YOLO .pt model")
    parser.add_argument("--output", required=True, help="Output .engine path")
    parser.add_argument("--precision", default="fp16", choices=["fp32", "fp16", "int8"])
    parser.add_argument("--calib-data", help="Calibration images for INT8")
    args = parser.parse_args()
    
    convert_yolo_to_tensorrt(
        args.model,
        args.output,
        args.precision,
        calibration_data=args.calib_data
    )
```

---

# 4. TRACKING MODULE

## 4.1 Kalman Filter Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    MULTI-OBJECT TRACKING SYSTEM                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  DETECTIONS (from AI Engine)                                                        │
│       │                                                                             │
│       ▼                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 1: DATA ASSOCIATION (Hungarian Algorithm)                            │   │
│  │                                                                             │   │
│  │  Existing Tracks: T1, T2, T3, ...                                           │   │
│  │  New Detections:  D1, D2, D3, ...                                           │   │
│  │                                                                             │   │
│  │  Cost Matrix (IoU-based):                                                   │   │
│  │  ┌─────────────────────────────────────────┐                               │   │
│  │  │         │  D1    D2    D3    D4        │                               │   │
│  │  │    T1   │  0.8   0.1   0.0   0.0       │  ← High IoU = Match           │   │
│  │  │    T2   │  0.1   0.7   0.0   0.0       │                               │   │
│  │  │    T3   │  0.0   0.0   0.6   0.1       │                               │   │
│  │  └─────────────────────────────────────────┘                               │   │
│  │                                                                             │   │
│  │  Output: Matched pairs, Unmatched tracks, Unmatched detections              │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│       │                                                                             │
│       ▼                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 2: KALMAN FILTER UPDATE                                              │   │
│  │                                                                             │   │
│  │  State Vector (per track):                                                  │   │
│  │  x = [x, y, vx, vy, ax, ay]ᵀ  (6 dimensions)                               │   │
│  │       │  │   │   │   │   │                                                  │   │
│  │       │  │   │   │   │   └── Y acceleration (px/frame²)                    │   │
│  │       │  │   │   │   └────── X acceleration (px/frame²)                    │   │
│  │       │  │   │   └────────── Y velocity (px/frame)                         │   │
│  │       │  │   └────────────── X velocity (px/frame)                         │   │
│  │       │  └────────────────── Y position (pixels)                           │   │
│  │       └────────────────────── X position (pixels)                          │   │
│  │                                                                             │   │
│  │  Measurement Vector:                                                        │   │
│  │  z = [x_det, y_det]ᵀ  (detection centroid)                                 │   │
│  │                                                                             │   │
│  │  ┌──────────────────────────────────────────────────────────────────────┐  │   │
│  │  │                    KALMAN FILTER EQUATIONS                           │  │   │
│  │  │                                                                      │  │   │
│  │  │  PREDICT:                                                            │  │   │
│  │  │  x̂ₖ⁻ = F·x̂ₖ₋₁    (State prediction)                                 │  │   │
│  │  │  Pₖ⁻ = F·Pₖ₋₁·Fᵀ + Q  (Covariance prediction)                        │  │   │
│  │  │                                                                      │  │   │
│  │  │  UPDATE (if matched):                                                │  │   │
│  │  │  yₖ = zₖ - H·x̂ₖ⁻   (Innovation/residual)                            │  │   │
│  │  │  Sₖ = H·Pₖ⁻·Hᵀ + R  (Innovation covariance)                          │  │   │
│  │  │  Kₖ = Pₖ⁻·Hᵀ·Sₖ⁻¹   (Kalman gain)                                    │  │   │
│  │  │  x̂ₖ = x̂ₖ⁻ + Kₖ·yₖ   (State update)                                  │  │   │
│  │  │  Pₖ = (I - Kₖ·H)·Pₖ⁻ (Covariance update)                             │  │   │
│  │  │                                                                      │  │   │
│  │  └──────────────────────────────────────────────────────────────────────┘  │   │
│  │                                                                             │   │
│  │  State Transition Matrix F (constant acceleration model):                   │   │
│  │  ┌                                   ┐                                      │   │
│  │  │ 1  0  dt  0  0.5dt²  0      │  dt = 1/60 sec                         │   │
│  │  │ 0  1  0   dt 0       0.5dt² │                                         │   │
│  │  │ 0  0  1   0  dt      0      │                                         │   │
│  │  │ 0  0  0   1  0       dt     │                                         │   │
│  │  │ 0  0  0   0  1       0      │                                         │   │
│  │  │ 0  0  0   0  0       1      │                                         │   │
│  │  └                                   ┘                                      │   │
│  │                                                                             │   │
│  │  Measurement Matrix H:                                                      │   │
│  │  ┌                          ┐                                               │   │
│  │  │ 1  0  0  0  0  0 │  (Extract position only)                            │   │
│  │  │ 0  1  0  0  0  0 │                                                      │   │
│  │  └                          ┘                                               │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│       │                                                                             │
│       ▼                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  STAGE 3: TRACK MANAGEMENT                                                  │   │
│  │                                                                             │   │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐            │   │
│  │  │  NEW TRACKS     │  │  ACTIVE TRACKS  │  │  LOST TRACKS    │            │   │
│  │  │                 │  │                 │  │                 │            │   │
│  │  │ Unmatched det   │  │ Matched & conf  │  │ No match for    │            │   │
│  │  │ → Initialize    │  │ > threshold     │  │ N frames        │            │   │
│  │  │   Kalman state  │  │                 │  │                 │            │   │
│  │  │                 │  │ hits += 1       │  │ misses += 1     │            │   │
│  │  │ require 3 hits  │  │                 │  │                 │            │   │
│  │  │ to confirm      │  │                 │  │ if misses > 10  │            │   │
│  │  │                 │  │                 │  │ → Delete track  │            │   │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘            │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│       │                                                                             │
│       ▼                                                                             │
│  OUTPUT: Track List                                                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  struct Track {                                                             │   │
│  │      int id;              // Unique track ID                                │   │
│  │      int class_id;        // Target class                                   │   │
│  │      TrackState state;    // TENTATIVE, CONFIRMED, LOST                     │   │
│  │      KalmanState kf;      // Kalman filter state                            │   │
│  │      Vec6f predicted_pos; // Position at future time                        │   │
│  │      int hits, misses;    // Track quality                                  │   │
│  │      float confidence;    // Average detection confidence                   │   │
│  │  };                                                                         │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Tracker Configuration

```cpp
// tracker_config.hpp
#pragma once

namespace vsmash {
namespace tracker {

struct TrackerConfig {
    // Data association
    float iou_threshold = 0.3f;         // Minimum IoU for match
    int max_age = 10;                    // Frames before track deletion
    int min_hits = 3;                    // Hits to confirm track
    int max_tracks = 10;                 // Maximum simultaneous tracks
    
    // Kalman filter tuning
    struct KalmanParams {
        // Process noise (Q matrix diagonal)
        float q_position = 1.0f;         // Position uncertainty
        float q_velocity = 5.0f;         // Velocity uncertainty  
        float q_acceleration = 10.0f;    // Acceleration uncertainty
        
        // Measurement noise (R matrix diagonal)
        float r_position = 4.0f;         // Detection jitter
    } kalman;
    
    // Prediction
    float prediction_horizon_ms = 100.0f;  // Look-ahead time
    int prediction_steps = 6;              // Steps at 60fps
};

} // namespace tracker
} // namespace vsmash
```

---

# 5. FIRE CONTROL MODULE

## 5.1 Fire Control State Machine

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    FIRE CONTROL STATE MACHINE                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│                              ┌──────────────┐                                       │
│                              │    BOOT      │                                       │
│                              │   (init)     │                                       │
│                              └──────┬───────┘                                       │
│                                     │ System ready                                  │
│                                     ▼                                               │
│                              ┌──────────────┐                                       │
│              ┌───────────────│    SAFE      │◀───────────────────┐                 │
│              │               │   (idle)     │                    │                 │
│              │               └──────┬───────┘                    │                 │
│              │                      │ Trigger sensed             │                 │
│              │                      ▼                            │                 │
│              │               ┌──────────────┐                    │                 │
│              │               │   SEEKING    │                    │                 │
│              │        ┌──────│  (searching) │──────┐             │                 │
│              │        │      └──────┬───────┘      │             │                 │
│              │        │             │              │             │                 │
│              │  No target      Target found    Trigger released  │                 │
│              │  (timeout)           │              │             │                 │
│              │        │             ▼              │             │                 │
│              │        │      ┌──────────────┐      │             │                 │
│              │        │      │   TRACKING   │      │             │                 │
│              │        │      │  (locked on) │◀─────┼─────────────┤                 │
│              │        │      └──────┬───────┘      │             │                 │
│              │        │             │              │             │                 │
│              │        │   Fire solution ready      │             │                 │
│              │        │             │              │             │                 │
│              │        │             ▼              │             │                 │
│              │        │      ┌──────────────┐      │             │                 │
│              │        │      │    ARMED     │      │             │                 │
│              │        │      │ (fire ready) │──────┤             │                 │
│              │        │      └──────┬───────┘      │             │                 │
│              │        │             │              │             │                 │
│              │        │    Alignment OK     Track lost          │                 │
│              │        │    Trigger full            │             │                 │
│              │        │             │              │             │                 │
│              │        │             ▼              │             │                 │
│              │        │      ┌──────────────┐      │             │                 │
│              │        │      │  AUTHORIZE   │      │             │                 │
│              │        └─────▶│  (fire gate) │◀─────┘             │                 │
│              │               └──────┬───────┘                    │                 │
│              │                      │                            │                 │
│              │            Gate OPEN (solenoid off)               │                 │
│              │                      │                            │                 │
│              │                      ▼                            │                 │
│              │               ┌──────────────┐                    │                 │
│              │               │    FIRED     │                    │                 │
│              │               │  (cooldown)  │────────────────────┘                 │
│              │               └──────────────┘   Recoil detected                    │
│              │                                  or timeout                         │
│              │                                                                      │
│              │   ┌──────────────┐                                                  │
│              └──▶│    ERROR     │  System fault detected                           │
│                  │  (fail-safe) │  Trigger blocked until reset                     │
│                  └──────────────┘                                                  │
│                                                                                      │
│  LEGEND:                                                                            │
│  ┌──────────────┐  State       ──────▶ Transition                                  │
│  │              │                                                                   │
│  └──────────────┘              Labels indicate trigger conditions                  │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Fire Control Logic

```cpp
// fire_control.hpp
#pragma once

#include <atomic>
#include <chrono>

namespace vsmash {
namespace fire_control {

enum class FireState {
    BOOT,
    SAFE,
    SEEKING,
    TRACKING,
    ARMED,
    AUTHORIZE,
    FIRED,
    ERROR
};

struct FireConditions {
    bool target_locked;           // Valid track exists
    bool alignment_ok;            // Aiming error < threshold
    bool trigger_pressed;         // Trigger pressure > threshold
    bool safety_checks_pass;      // All safety conditions met
    
    // Computed
    float alignment_error_mrad;   // Angular error in milliradians
    float hit_probability;        // Estimated P(hit)
};

class FireControl {
public:
    FireControl();
    ~FireControl();
    
    // Main update (called at 1kHz from real-time thread)
    void update(const FireConditions& conditions);
    
    // State queries
    FireState getState() const { return state_.load(); }
    bool isSolenoidEngaged() const { return solenoid_engaged_.load(); }
    
    // Configuration
    void setAlignmentThreshold(float mrad) { alignment_threshold_mrad_ = mrad; }
    void setMinHitProbability(float p) { min_hit_probability_ = p; }
    
    // Safety
    void emergencyStop();
    void reset();
    
private:
    // State machine
    std::atomic<FireState> state_{FireState::BOOT};
    std::atomic<bool> solenoid_engaged_{true};  // Default: BLOCKED
    
    // Thresholds
    float alignment_threshold_mrad_ = 5.0f;   // ~0.3° 
    float min_hit_probability_ = 0.7f;        // 70% confidence
    float trigger_threshold_ = 0.5f;          // Normalized pressure
    
    // Timing
    std::chrono::steady_clock::time_point state_entry_time_;
    static constexpr auto SEEK_TIMEOUT = std::chrono::milliseconds(500);
    static constexpr auto FIRE_COOLDOWN = std::chrono::milliseconds(200);
    
    // State handlers
    void handleSafe(const FireConditions& c);
    void handleSeeking(const FireConditions& c);
    void handleTracking(const FireConditions& c);
    void handleArmed(const FireConditions& c);
    void handleAuthorize(const FireConditions& c);
    void handleFired(const FireConditions& c);
    void handleError(const FireConditions& c);
    
    // Actuators
    void engageSolenoid();    // Block trigger
    void releaseSolenoid();   // Allow trigger
    
    // Safety checks
    bool runSafetyChecks() const;
};

} // namespace fire_control
} // namespace vsmash
```

## 5.3 Ballistic Computation

```cpp
// ballistic_computer.hpp
#pragma once

#include <cmath>
#include <array>

namespace vsmash {
namespace ballistics {

// Weapon profile for ballistic calculations
struct WeaponProfile {
    const char* name;
    float muzzle_velocity_mps;    // m/s
    float bullet_mass_g;          // grams
    float bullet_diameter_mm;     // mm
    float ballistic_coefficient; // G1 BC
    float sight_height_mm;        // Height above bore
};

// Predefined profiles
constexpr WeaponProfile PROFILE_AK47 = {
    "AK-47 (7.62x39mm)",
    715.0f,   // muzzle velocity
    7.9f,     // bullet mass
    7.85f,    // diameter
    0.275f,   // BC
    65.0f     // sight height
};

constexpr WeaponProfile PROFILE_M4 = {
    "M4/M16 (5.56x45mm)",
    940.0f,
    4.0f,
    5.70f,
    0.304f,
    65.0f
};

// Target state from tracker
struct TargetState {
    float x_px, y_px;           // Position in image (pixels)
    float vx_pxps, vy_pxps;     // Velocity (pixels/sec)
    float range_m;              // Estimated range (meters)
};

// Fire solution output
struct FireSolution {
    bool valid;
    float lead_x_mrad;          // Horizontal lead (milliradians)
    float lead_y_mrad;          // Vertical lead + drop compensation
    float alignment_error_mrad; // Current aim error
    float time_of_flight_ms;    // Bullet TOF to target
    float hit_probability;      // Estimated P(hit)
    float aim_point_x_px;       // Where to aim (pixels)
    float aim_point_y_px;
};

class BallisticComputer {
public:
    BallisticComputer(const WeaponProfile& profile);
    
    // Set current conditions
    void setEnvironment(float temp_c, float pressure_hpa, float humidity_pct);
    void setWeaponOrientation(float pitch_rad, float roll_rad);
    
    // Compute fire solution
    FireSolution compute(
        const TargetState& target,
        float fov_horizontal_deg,
        float fov_vertical_deg,
        int image_width_px,
        int image_height_px
    );
    
private:
    WeaponProfile profile_;
    
    // Environmental corrections
    float air_density_factor_ = 1.0f;
    float temperature_c_ = 20.0f;
    
    // Weapon state
    float pitch_rad_ = 0.0f;
    float roll_rad_ = 0.0f;
    
    // Internal calculations
    float calculateTOF(float range_m) const;
    float calculateDrop(float range_m, float tof_s) const;
    float calculateDrift(float range_m, float tof_s) const;
    float estimateRange(float target_height_px, float fov_deg, int image_height_px) const;
};

// Point-mass trajectory model (3DOF)
class TrajectoryModel {
public:
    struct State {
        float x, y, z;      // Position (m)
        float vx, vy, vz;   // Velocity (m/s)
    };
    
    // Integrate trajectory using RK4
    State integrate(
        const State& initial,
        float dt_s,
        float bc,
        float bullet_mass_kg
    );
    
private:
    static constexpr float GRAVITY = 9.81f;
    
    // Drag coefficient (G1 model)
    float dragCoefficient(float mach) const;
    
    // Air density at altitude
    float airDensity(float altitude_m) const;
};

} // namespace ballistics
} // namespace vsmash
```

---

# 6. SYSTEM INTEGRATION

## 6.1 Main Processing Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE MAIN PROCESSING LOOP                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  TIMING: 60 Hz main loop (16.67ms period)                                   │   │
│  │                                                                             │   │
│  │  t=0ms     t=2ms    t=5ms     t=25ms    t=27ms    t=30ms    t=32ms         │   │
│  │  │         │        │         │         │         │         │              │   │
│  │  ▼         ▼        ▼         ▼         ▼         ▼         ▼              │   │
│  │  ┌───┐    ┌───┐    ┌─────────────────┐  ┌───┐    ┌───┐    ┌───┐           │   │
│  │  │CAM│───▶│PRE│───▶│   AI INFERENCE  │─▶│TRK│───▶│BAL│───▶│DSP│           │   │
│  │  └───┘    └───┘    └─────────────────┘  └───┘    └───┘    └───┘           │   │
│  │                                                                             │   │
│  │  CAM = Camera capture (ISP)                                                 │   │
│  │  PRE = Preprocessing (resize, normalize)                                    │   │
│  │  AI  = YOLO inference (TensorRT)                                            │   │
│  │  TRK = Tracker update (Kalman)                                              │   │
│  │  BAL = Ballistic compute                                                    │   │
│  │  DSP = Display update (OLED)                                                │   │
│  │                                                                             │   │
│  │  TOTAL LATENCY: ~32ms (within 50ms budget) ✓                               │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  PARALLEL THREADS:                                                                  │
│                                                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   CAMERA    │  │     AI      │  │    FIRE     │  │   SENSOR    │              │
│  │   THREAD    │  │   THREAD    │  │   THREAD    │  │   THREAD    │              │
│  │             │  │             │  │             │  │             │              │
│  │ Priority:   │  │ Priority:   │  │ Priority:   │  │ Priority:   │              │
│  │ High (-10)  │  │ High (-10)  │  │ RT (-20)    │  │ High (-15)  │              │
│  │             │  │             │  │             │  │             │              │
│  │ CPU: 0      │  │ CPU: 1-3    │  │ CPU: 0      │  │ CPU: 0      │              │
│  │ (GPU bound) │  │ (GPU bound) │  │ (GPIO)      │  │ (I2C)       │              │
│  │             │  │             │  │             │  │             │              │
│  │ Rate: 60Hz  │  │ Rate: 30Hz+ │  │ Rate: 1kHz  │  │ Rate: 200Hz │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
│         │                │                │                │                      │
│         └────────────────┴────────────────┴────────────────┘                      │
│                                   │                                                │
│                                   ▼                                                │
│                          ┌───────────────┐                                        │
│                          │  SHARED DATA  │                                        │
│                          │  (lock-free)  │                                        │
│                          │               │                                        │
│                          │ • Frame buffer│                                        │
│                          │ • Detections  │                                        │
│                          │ • Tracks      │                                        │
│                          │ • Fire state  │                                        │
│                          │ • IMU data    │                                        │
│                          └───────────────┘                                        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 6.2 Thread Architecture

```cpp
// thread_manager.hpp
#pragma once

#include <thread>
#include <atomic>

namespace vsmash {

class ThreadManager {
public:
    ThreadManager();
    ~ThreadManager();
    
    void start();
    void stop();
    
private:
    // Thread handles
    std::thread camera_thread_;
    std::thread ai_thread_;
    std::thread fire_thread_;
    std::thread sensor_thread_;
    std::thread display_thread_;
    std::thread logger_thread_;
    
    // Control
    std::atomic<bool> running_{false};
    
    // Thread functions
    void cameraLoop();      // 60Hz, captures frames
    void aiLoop();          // ~30Hz, runs inference
    void fireLoop();        // 1kHz, real-time fire control
    void sensorLoop();      // 200Hz, IMU + trigger
    void displayLoop();     // 30Hz, OLED updates
    void loggerLoop();      // Async, data logging
    
    // Thread configuration
    void setThreadAffinity(std::thread& t, int cpu);
    void setThreadPriority(std::thread& t, int priority);
};

} // namespace vsmash
```

## 6.3 Data Flow Structures

```cpp
// shared_data.hpp
#pragma once

#include <atomic>
#include <array>

namespace vsmash {

// Lock-free triple buffer for frames
template<typename T>
class TripleBuffer {
public:
    T& getWriteBuffer() { return buffers_[write_idx_.load()]; }
    const T& getReadBuffer() const { return buffers_[read_idx_.load()]; }
    
    void swapWrite() {
        int write = write_idx_.load();
        int ready = ready_idx_.load();
        write_idx_.store(ready);
        ready_idx_.store(write);
    }
    
    void swapRead() {
        int read = read_idx_.load();
        int ready = ready_idx_.load();
        read_idx_.store(ready);
        ready_idx_.store(read);
    }
    
private:
    std::array<T, 3> buffers_;
    std::atomic<int> write_idx_{0};
    std::atomic<int> read_idx_{1};
    std::atomic<int> ready_idx_{2};
};

// Frame data
struct FrameData {
    uint64_t timestamp_ns;
    int width, height;
    void* gpu_buffer;  // CUDA memory
    bool valid;
};

// Detection results
struct DetectionData {
    uint64_t frame_timestamp_ns;
    std::vector<Detection> detections;
    float inference_time_ms;
};

// Track results  
struct TrackData {
    uint64_t timestamp_ns;
    std::vector<Track> tracks;
    int selected_track_id;  // Primary target
};

// Sensor readings
struct SensorData {
    uint64_t timestamp_ns;
    
    // IMU
    float accel_x, accel_y, accel_z;   // m/s²
    float gyro_x, gyro_y, gyro_z;      // rad/s
    
    // Trigger
    float trigger_pressure;             // 0.0 - 1.0
    
    // Orientation (computed)
    float pitch_rad, roll_rad, yaw_rad;
};

// Global shared state
struct SharedState {
    TripleBuffer<FrameData> frames;
    TripleBuffer<DetectionData> detections;
    TripleBuffer<TrackData> tracks;
    TripleBuffer<SensorData> sensors;
    
    std::atomic<FireState> fire_state;
    std::atomic<bool> solenoid_engaged;
    
    // Health monitoring
    std::atomic<float> cpu_temp_c;
    std::atomic<float> gpu_temp_c;
    std::atomic<float> battery_voltage;
    std::atomic<bool> system_healthy;
};

extern SharedState g_state;  // Global instance

} // namespace vsmash
```

---

# 7. DISPLAY & USER INTERFACE

## 7.1 OLED Display Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    OLED DISPLAY LAYOUT (128×64 pixels)                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  NORMAL MODE (Tracking):                                                            │
│  ┌────────────────────────────────────────────────────────────────┐                │
│  │  ╔════════════════════════════════════════════════════════════╗ │ 0             │
│  │  ║  TRK: 2   RNG: 150m                              [====]  ║ │ 8             │
│  │  ╠════════════════════════════════════════════════════════════╣ │ 16            │
│  │  ║                                                            ║ │               │
│  │  ║                         ⊕                                 ║ │ 32 (center)   │
│  │  ║                        ╱│╲                                ║ │               │
│  │  ║                                                            ║ │               │
│  │  ╠════════════════════════════════════════════════════════════╣ │ 56            │
│  │  ║  AIM: ●●●○○   P(hit): 85%                                ║ │ 64            │
│  │  ╚════════════════════════════════════════════════════════════╝ │               │
│  └────────────────────────────────────────────────────────────────┘                │
│     0        32       64       96       128                                         │
│                                                                                      │
│  ELEMENTS:                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Header Bar (y=0-15):                                                       │   │
│  │  - TRK: Number of active tracks                                             │   │
│  │  - RNG: Estimated range to primary target                                   │   │
│  │  - Battery indicator [====] [===.] [==..] [=...] [!!!!]                    │   │
│  │                                                                             │   │
│  │  Center Reticle (y=16-55):                                                  │   │
│  │  - ⊕ = Aim point (static center)                                           │   │
│  │  - ╱│╲ = Target lead indicator (dynamic, shows where to aim)               │   │
│  │  - Box around target when locked                                            │   │
│  │                                                                             │   │
│  │  Status Bar (y=56-63):                                                      │   │
│  │  - AIM: Alignment quality (●=good, ○=poor)                                 │   │
│  │  - P(hit): Computed hit probability                                         │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  SAFE MODE (No trigger):                                                            │
│  ┌────────────────────────────────────────────────────────────────┐                │
│  │  ╔════════════════════════════════════════════════════════════╗ │               │
│  │  ║                      V-SMASH LITE                          ║ │               │
│  │  ║                                                            ║ │               │
│  │  ║                         ⊕                                 ║ │               │
│  │  ║                                                            ║ │               │
│  │  ║                                                            ║ │               │
│  │  ║  SAFE                                            [====]  ║ │               │
│  │  ╚════════════════════════════════════════════════════════════╝ │               │
│  └────────────────────────────────────────────────────────────────┘                │
│                                                                                      │
│  ERROR MODE:                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐                │
│  │  ╔════════════════════════════════════════════════════════════╗ │               │
│  │  ║  ████████████████████████████████████████████████████████ ║ │               │
│  │  ║  ██                                                    ██ ║ │               │
│  │  ║  ██   ⚠ ERROR: [error_code]                          ██ ║ │               │
│  │  ║  ██     [error_message]                              ██ ║ │               │
│  │  ║  ██                                                    ██ ║ │               │
│  │  ║  ████████████████████████████████████████████████████████ ║ │               │
│  │  ╚════════════════════════════════════════════════════════════╝ │               │
│  └────────────────────────────────────────────────────────────────┘                │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 7.2 LED Status Indicators

| LED | Color | State | Meaning |
|-----|-------|-------|---------|
| LED1 | Red | Solid | No target detected |
| LED1 | Yellow | Blinking | Target detected, tracking |
| LED1 | Green | Solid | Target locked, fire solution ready |
| LED2 | Green | Off | System booting |
| LED2 | Green | Blinking | System running normally |
| LED2 | Green | Solid | Fire authorized (gate open) |
| LED3 | Red | Off | Battery >20% |
| LED3 | Red | Blinking | Battery 10-20% |
| LED3 | Red | Solid | Battery <10% (shutdown warning) |

---

# 8. TESTING & VALIDATION

## 8.1 Software Test Matrix

| Test ID | Category | Test Description | Method | Pass Criteria |
|---------|----------|------------------|--------|---------------|
| ST-001 | Performance | AI inference latency | Profiling | <30ms @ 640×640 |
| ST-002 | Performance | End-to-end latency | Timestamp | <50ms |
| ST-003 | Performance | Frame rate | Counter | ≥30 fps sustained |
| ST-004 | Accuracy | Detection mAP | Validation set | >0.70 |
| ST-005 | Accuracy | Tracking accuracy | Ground truth | <10px RMS error |
| ST-006 | Accuracy | Ballistic lead | Simulation | <5% error @ 200m |
| ST-007 | Safety | Fail-safe trigger | Fault injection | Blocked in <10ms |
| ST-008 | Safety | Error recovery | Fault injection | Recovers or safe |
| ST-009 | Reliability | 8-hour stress test | Continuous run | No crash/hang |
| ST-010 | Memory | Memory leak check | Valgrind | No leaks |
| ST-011 | Power | Power consumption | Measurement | <5W average |
| ST-012 | Boot | Boot time | Timer | <30s to ready |

## 8.2 Performance Benchmarks (Target)

| Metric | Target | Measured | Status |
|--------|--------|----------|--------|
| AI Inference (FP16) | <30ms | TBD | - |
| AI Inference (INT8) | <20ms | TBD | - |
| Tracker Update | <2ms | TBD | - |
| Ballistic Compute | <1ms | TBD | - |
| Display Update | <5ms | TBD | - |
| Fire Control Loop | 1ms | TBD | - |
| Memory Usage | <2GB | TBD | - |
| GPU Memory | <1.5GB | TBD | - |

---

# 9. BUILD & DEPLOYMENT

## 9.1 Directory Structure

```
vsmash-lite/
├── CMakeLists.txt
├── README.md
├── LICENSE
│
├── src/
│   ├── main.cpp                    # Application entry
│   ├── camera/
│   │   ├── camera_manager.cpp
│   │   ├── camera_manager.hpp
│   │   └── v4l2_capture.cpp
│   ├── ai/
│   │   ├── ai_engine.cpp
│   │   ├── ai_engine.hpp
│   │   ├── tensorrt_inference.cpp
│   │   └── preprocessing.cu        # CUDA kernels
│   ├── tracker/
│   │   ├── tracker_module.cpp
│   │   ├── tracker_module.hpp
│   │   ├── kalman_filter.cpp
│   │   └── hungarian.cpp
│   ├── ballistics/
│   │   ├── ballistic_computer.cpp
│   │   └── trajectory_model.cpp
│   ├── fire_control/
│   │   ├── fire_control.cpp
│   │   └── solenoid_driver.cpp
│   ├── display/
│   │   ├── display_manager.cpp
│   │   └── oled_driver.cpp
│   ├── sensors/
│   │   ├── sensor_fusion.cpp
│   │   ├── imu_driver.cpp
│   │   └── trigger_sensor.cpp
│   ├── utils/
│   │   ├── logger.cpp
│   │   ├── config.cpp
│   │   └── thread_utils.cpp
│   └── common/
│       ├── shared_data.cpp
│       └── types.hpp
│
├── include/
│   └── vsmash/
│       └── (public headers)
│
├── config/
│   ├── default.yaml               # Runtime configuration
│   ├── weapon_profiles.yaml       # Ballistic profiles
│   └── calibration.yaml           # Camera/sensor calibration
│
├── models/
│   ├── yolov8n_vsmash.pt         # PyTorch model
│   ├── yolov8n_vsmash.onnx       # ONNX export
│   └── yolov8n_vsmash.engine     # TensorRT engine (Jetson)
│
├── scripts/
│   ├── convert_to_tensorrt.py
│   ├── train_model.py
│   ├── calibrate_camera.py
│   ├── benchmark.sh
│   └── deploy.sh
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── benchmark/
│
├── docs/
│   ├── architecture.md
│   ├── api_reference.md
│   └── deployment_guide.md
│
└── deploy/
    ├── jetson/
    │   ├── flash_image/
    │   └── overlay/
    └── rootfs_overlay/
```

## 9.2 Build Commands

```bash
# Build for Jetson Nano
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
         -DTARGET_PLATFORM=jetson-nano \
         -DWITH_TENSORRT=ON
make -j4

# Deploy to device
./scripts/deploy.sh jetson@192.168.1.100

# Run benchmarks
./scripts/benchmark.sh
```

---

# 10. WP4 DELIVERABLES & SCHEDULE

## 10.1 Deliverables

| ID | Deliverable | Format | Status |
|----|------------|--------|--------|
| D4.1 | Software Requirements Document | .md | ✅ This document |
| D4.2 | Architecture Design Document | .md | ✅ This document |
| D4.3 | YOLO Model (trained) | .pt, .engine | 🔲 Pending |
| D4.4 | Source Code (all modules) | C++/CUDA | 🔲 Pending |
| D4.5 | Build System | CMake | 🔲 Pending |
| D4.6 | Unit Tests | GoogleTest | 🔲 Pending |
| D4.7 | Integration Tests | Scripts | 🔲 Pending |
| D4.8 | Benchmark Results | Report | 🔲 Pending |
| D4.9 | Deployment Image | JetPack + App | 🔲 Pending |
| D4.10 | API Documentation | Doxygen | 🔲 Pending |

## 10.2 Schedule

| Task | Duration | Dependencies | Status |
|------|----------|--------------|--------|
| WP4.1 Requirements & Architecture | 5 days | WP1-3 complete | ✅ Complete |
| WP4.2 Camera Module | 7 days | Hardware available | 🔲 Pending |
| WP4.3 AI Engine + TensorRT | 14 days | WP4.2, Model trained | 🔲 Pending |
| WP4.4 Tracker Module | 7 days | WP4.3 | 🔲 Pending |
| WP4.5 Ballistic Computer | 5 days | WP4.4 | 🔲 Pending |
| WP4.6 Fire Control | 7 days | WP4.5 | 🔲 Pending |
| WP4.7 Display Manager | 5 days | WP4.2 | 🔲 Pending |
| WP4.8 Sensor Fusion | 5 days | WP4.2 | 🔲 Pending |
| WP4.9 Integration | 10 days | All WP4.x | 🔲 Pending |
| WP4.10 Testing | 10 days | WP4.9 | 🔲 Pending |
| **TOTAL** | **75 days** | | |

## 10.3 Cost Estimate

| Category | Item | Cost |
|----------|------|------|
| **Development** | | |
| | Software engineering (75 days) | Internal |
| | Cloud GPU training (100 hrs) | $200 |
| | Dataset labeling (5000 images) | $500 |
| **Tools** | | |
| | JetPack development kit | $0 (free) |
| | NVIDIA Nsight profiler | $0 (free) |
| | CMake/build tools | $0 (open source) |
| **Testing** | | |
| | Test equipment time | $100 |
| **TOTAL** | | **$800** |

---

# 11. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial release - WP4 Software Deep Dive |

---

*WP4 Software & AI Deep Dive v1.0*
*V-SMASH-LITE Firmware Architecture & YOLO Inference Pipeline*
