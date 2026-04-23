---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #warning]
links: [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Shifting the Burden Archetype]]
---

## Ý Tưởng Cốt Lõi

Tàu semi-submersible ở chế độ bán chìm liên tục bị **mất ổn định pitch (ngóc/chúi mũi) khi vượt quá ~6 knot**. Dòng nước tăng tốc dưới thân tạo lực hút xuống, nước tích tụ trên thân → xu hướng lặn sâu hoặc lắc pitch dữ dội. Đây là failure mode cơ bản, không phải edge case.

## Giải Thích Chi Tiết

Thử nghiệm thực tế và CFD đều xác nhận:

- Trên 6 knot: lực hút thủy động (downward suction) tăng phi tuyến
- Thân semi-sub có **stiffness thấp** (small waterplane area → small restoring force) → phản ứng chậm khi bị lệch
- Kết quả: deck wetness, mất kiểm soát, hư kết cấu
- **Mitigation bắt buộc:** trim planes tĩnh (góc ~35° ở đuôi) + stabilizer fins chủ động với ride control tự động

Hai trường phái giải quyết:
1. **Continuous semi-sub:** Chấp nhận giới hạn ≤6 knot, thêm active control surfaces — đơn giản hơn
2. **Dual-mode (Metal Shark Prowler):** Transit ở chế độ planing (nổi bình thường, tốc độ cao) → chuyển sang semi-sub khi cần tàng hình — phức tạp nhưng tránh vùng pitch instability

## Tại Sao Điều Này Quan Trọng?

Nếu VN-USV-SS-001 cần tuần tra tốc độ >6 knot ở chế độ bán chìm mà không có hệ thống ổn định chủ động → tàu sẽ lặn không kiểm soát. Đây là **trap thiết kế**: trên bàn giấy semi-sub trông đơn giản, nhưng vật lý buộc phải có active stabilization hoặc phải chấp nhận giới hạn tốc độ. Giống [[Shifting the Burden Archetype]] — "fix nhanh" bằng thêm fins/control chỉ đẩy complexity sang nơi khác.

## Liên Kết

- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — active control tăng precision nhưng giảm reliability
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — phải test pitch ở tank/biển thật, không tin hoàn toàn CFD
- [[Shifting the Burden Archetype]] — active control = symptomatic fix, fundamental fix = hull geometry hoặc chấp nhận speed limit
- [[GM B Ratio — Ngón Tay Cái Cho Ổn Định Nổi]] — WPA nhỏ → GM nhỏ → stiffness thấp = root cause

## Nguồn Gốc

- "Development of a new Unmanned Semi-Submersible (USS) vehicle" — ResearchGate, Tier S
- "Development of a semi-submersible unmanned surface craft" — ResearchGate, Tier S
- EP1147983A2 — QinetiQ, Tier S
- Gặp: 2026-03-18, /research --deep semi-sub USV
