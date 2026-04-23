---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #defense, #product, #three-laws]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]]
---

# Khi Huấn Luyện Thực Không Hợp Pháp, Mô Phỏng Là Độc Quyền

## Ý Tưởng Cốt Lõi

Khi quy định pháp luật CẤM huấn luyện thực (live training) cho một kỹ năng quân sự, mô phỏng không còn là lựa chọn — nó trở thành **con đường duy nhất hợp pháp**. Thị trường mô ph��ng chuyển từ "cạnh tranh với live training" sang "độc quyền theo quy định."

## Giải Thích Chi Tiết

Counter-UAS là trường hợp điển hình. Ba ràng buộc pháp lý tạo monopoly cho simulation:

1. **GPS jamming bị cấm trong thời bình**: FAA/FCC cấm phá sóng GPS vì ảnh hưởng hạ tầng dân sự và không lưu. Binh sĩ KHÔNG THỂ luyện tập EW counter-drone thực tế → mất niềm tin vào thiết bị (NTC báo cáo: "perceive jammers as ineffective").

2. **MILES không tương thích C-UAS**: Hệ thống laser-tag MILES không hỗ trợ vũ khí chống drone → không thể đánh giá hiệu quả engagement trong force-on-force. Observer phải có mặt tại mọi vị trí để "white card adjudication."

3. **Không thể bay drone/bắn thật trên trường bắn**: Đóng cửa sân bay, an toàn dân sự, chi phí đạn dược ($2M/missile vs $2K/drone) → live-fire C-UAS cực kỳ hạn chế.

Kết quả: MILO, DroneShield (DroneSim), QinetiQ (synthetic inject vào C2 thật), Zen Technologies — TẤT CẢ đều bán vào khoảng trống pháp lý này.

## Tại Sao Điều Này Quan Trọng?

Cho Workshop X, đây là insight chiến lược cốt lõi cho VN-CUAV-SIM và sim counter-USV mới:
- **Thị trường không cần thuyết phục** — khách hàng PHẢI mua sim vì luật cấm live training
- **Export dễ hơn vũ khí thật** — sim không chịu ITAR/kiểm soát vũ khí EW → thị trường ASEAN mở
- **Pricing power cao** — khi là con đường duy nhất, khách hàng ít nhạy cảm giá
- **Mở rộng sang C-USV**: tương tự, huấn luyện counter-drone-boat trên biển = nguy hiểm + đắt → sim là cách duy nhất luyện tập an toàn

**Ba-law check:** Law này tương tác với [[Training Value Index]]: vì sim là bắt buộc, câu hỏi không phải "sim hay live?" mà là "sim chất lượng bao nhiêu?" → đầu tư vào feedback loop accuracy, không phải visual fidelity.

## Liên Kết

- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — sim monopoly KHÔNG có nghĩa skip physical validation. Sim phải validated against real data
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — vì regulatory mandate, focus vào learning transfer, không phải render quality
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — monopoly position = trách nhiệm lớn: sim sai → cả lực lượng train sai

## Nguồn Gốc

- ATP 3-01.81 C-UAS Training at NTC (Tier S) — GPS jamming restrictions
- CRS R48477 DoD Counter-UAS (Tier S) — FAA/FCC regulatory constraints
- MILO C-UAS Training, DroneShield DroneSim, QinetiQ Med Strike (Tier A)
- Research pipeline "Counter-UAS + Counter-USV Training," 2026-04-22
