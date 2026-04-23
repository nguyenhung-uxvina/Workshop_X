---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #acq]
links: [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]], [[Muscle Memory Law — Skill Compounds, Tool Accumulates]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]]
---

## Ý Tưởng Cốt Lõi

IRONMESH platform (fire control, ballistics, metocean, scoring, CDM protocol) cho phép **50-93% code reuse** giữa các sản phẩm huấn luyện quốc phòng. Đây chính là cơ chế kích hoạt R5 (Model Reuse Compound) — không phải AI model riêng lẻ mà là PLATFORM chia sẻ giữa sản phẩm tạo compound value.

## Giải Thích Chi Tiết

Phân tích 6 archived projects (VN-NGT, VN-MRT, VN-GCT, VN-HW, VN-MANPADS, VN-NVL) cho thấy:

| Product Family | IRONMESH Reuse | Unique Dev |
|----------------|:--------------:|:----------:|
| Naval Gunnery (VN-NGT) | 50-60% | 40-50% |
| Heavy Weapons (VN-HW) | 70-93% | 7-30% |
| Ground Combat (VN-GCT) | 50-70% | 30-50% |
| Mortar (VN-MRT) | ~60% | ~40% |

Platform assets được chia sẻ: fire control algorithms, ballistics engine, metocean effects, scoring system, CDM communication protocol, 3D visualization engine.

**Mỗi sản phẩm mới chỉ cần phát triển phần product-specific** (weapon-specific kinematics, sensor interface, scenario content) — IRONMESH đã lo phần nền tảng.

## Tại Sao Điều Này Quan Trọng?

R5 feedback loop (Model Reuse Compound) không activate qua individual AI models — nó activate qua PLATFORM. IRONMESH là layer giữa middleware (ROS2/ArduPilot) và product-specific AI. Không có platform layer → mỗi sản phẩm viết từ đầu → không compound. Có platform → mỗi sản phẩm mới chỉ 7-50% effort → scaling possibility.

Đây là lý do ACH không chỉ là "thay hardware bằng AI" mà là "xây platform rồi nhân ra" — Identity Law in action.

## Liên Kết

- [[Compound Law — Zero Trong Một Pillar Bằng Zero Tổng]] — IRONMESH = FORGE pillar, zero nếu không có sản phẩm chạy trên đó
- [[Muscle Memory Law — Skill Compounds, Tool Accumulates]] — platform code = accumulated tool, product knowledge = compounded skill
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — platform chỉ có giá trị khi sản phẩm deploy thực tế
- [[ACH Boundary Rule — Information vs Physical Forces]] — IRONMESH xử lý information (fire control, scoring), không xử lý physical forces

## Nguồn Gốc

- Cross-analysis 6 archived projects: VN-NGT, VN-MRT, VN-GCT, VN-HW, VN-MANPADS, VN-NVL
- FORGE_Product_Strategy_Workshop_X_CEO_Detail.md
- Gặp: 2026-03-19, ACH Technical Stack analysis
