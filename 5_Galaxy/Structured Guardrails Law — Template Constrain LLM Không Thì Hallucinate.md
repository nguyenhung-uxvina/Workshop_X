---
created: 2026-04-15
updated: 2026-04-15
type: permanent-note
tags: [#type/permanent-note, #acq, #warning, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[AI Dependency Spiral (R3)]], [[AI-First Leverage Sequencing — L6 Trước L5 Trước L2]]
---

## Ý Tưởng Cốt Lõi

LLM trong manufacturing phải được constrain bằng structured templates (JSON schemas, CSV columns, routing tables). Không có guardrails → LLM hallucinate Bills of Process, tham số sản xuất, và thông số kỹ thuật. Generic LLM + vague prompt = thảm họa trên shop floor.

## Giải Thích Chi Tiết

Nghiên cứu trên Journal of Intelligent Manufacturing (2025) chứng minh: khi user cung cấp input vague cho LLM trong manufacturing context, model "struggled to generate domain-specific technical parameters with the same accuracy." LLM tạo ra Bills of Process sai cho turbine manufacturing khi thiếu domain constraints.

Giải pháp đã validated: structured prompting với predefined JSON schemas + embedded industrial domain instructions. Mọi LLM output phải bị ràng buộc bởi "parameter ranges that constrain outputs to realistic industrial values."

Ví dụ WX: /ops skill dùng CSV files = structured guardrails tự nhiên. BOM master, routing, work orders = data có cấu trúc mà AI phải reference, không được tự generate. "NEVER infer values not in CSV" = guardrail cứng.

## Tại Sao Điều Này Quan Trọng?

Với defense manufacturer, hallucinated production parameters → sai BOM → thiếu vật tư → trễ deadline quân đội. Guardrails không phải optional — là survival requirement. Nguyên tắc này extend [[Phán đoán không thể uỷ thác cho AI]]: AI phải operate trong khung data đã verified, CEO verify data, AI compute trên data đó.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — guardrails bảo vệ judgment boundary
- [[AI Dependency Spiral (R3)]] — không có guardrails → team tin AI output → spiral
- [[AI-First Leverage Sequencing — L6 Trước L5 Trước L2]] — L6 data quality = nền tảng cho mọi tầng

## Nguồn Gốc

Research pipeline "AI-First Manufacturing" (2026-04-15). Source: J. Intelligent Manufacturing (Springer, 2025) — "Natural language-driven production planning: integrating LLMs with ASMG." + Springer survey "AI-Driven Manufacturing" (2025). NLM notebook: ai-mfg.
