# 🏠 Home — Trung Tâm Điều Hành IPARAG

> *Ngày hôm nay: [[your daily note here]]*

---

## ⚡ Quick Capture

> Có ý tưởng? → Tạo note mới trong [[0_Inbox/_README|0_Inbox]] ngay lập tức.

---

## 🎯 Projects Đang Chạy

```dataview
TABLE deadline, status
FROM "1_Projects"
WHERE status = "active"
SORT deadline ASC
```

*→ Xem tất cả: [[1_Projects/_README]]*

---

## 🌱 Areas Của Tôi

| Area | Dashboard |
|------|-----------|
| 🤖 AI & Công Cụ Lập Trình | [[2_Areas/AI & Công Cụ Lập Trình/_Area_Dashboard]] |
| 🧠 Phát Triển Tư Duy & Knowledge Management | [[2_Areas/Phát Triển Tư Duy & Knowledge Management/_Area_Dashboard]] |
| 🔬 Workshop X — Nghiên Cứu & Phân Tích Hệ Thống | [[2_Areas/Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/_Area_Dashboard]] |

*→ Xem tất cả: [[2_Areas/_README]]*

---

## 🔄 Weekly Review Checklist (THỊNH)

- [ ] **T** — Dọn sạch Inbox (Process to Zero)
- [ ] **H** — Tạo ≥ 3 permanent notes tuần này
- [ ] **I** — Link Traversal: tìm kết nối mới trong Galaxy
- [ ] **N** — Context Drift Test: CLAUDE.md vs. thực tế vault
- [ ] **H** — Harvest Audit: Galaxy insight nào đã inform decisions?
- [ ] Cập nhật trạng thái Projects, kiểm tra deadline sắp tới

---

## 🌌 Galaxy — Ghi Chú Gần Đây

```dataview
LIST
FROM "5_Galaxy"
SORT file.mtime DESC
LIMIT 10
```

*→ Xem tất cả ghi chú Galaxy: [[5_Galaxy/_README]]*

---

## 📊 Thống Kê

```dataview
TABLE length(rows) as "Số ghi chú"
FROM ""
GROUP BY split(file.folder, "/")[0] as "Thư mục"
```

---

## 🗺️ Điều Hướng Nhanh

| | | |
|--|--|--|
| [[0_Inbox/_README\|📥 Inbox]] | [[1_Projects/_README\|🎯 Projects]] | [[2_Areas/_README\|🌱 Areas]] |
| [[3_Resources/_README\|📚 Resources]] | [[4_Archives/_README\|🗄️ Archives]] | [[5_Galaxy/_README\|🌌 Galaxy]] |

---

*Hệ thống IPARAG — Bộ Não Thứ Hai | Khởi tạo: 2026-03-05*
