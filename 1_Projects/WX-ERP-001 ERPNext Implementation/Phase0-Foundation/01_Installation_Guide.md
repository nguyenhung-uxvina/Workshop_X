---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
assignee: NV Tổng hợp + CEO supervise
---

# ERPNext Installation Guide — Workshop X

**Target:** Local PC, Ubuntu 22.04, Docker, ERPNext v15
**Thời gian:** ~2-3 giờ (bao gồm download)
**Yêu cầu:** PC có internet, hiểu biết cơ bản Linux terminal

---

## Bước 1: Chuẩn Bị PC Server

### Hardware Tối Thiểu

| Thành phần | Tối thiểu | Khuyến nghị |
|-----------|----------|-------------|
| CPU | Intel i5 / AMD Ryzen 5 | i7 / Ryzen 7 |
| RAM | 8 GB | **16 GB** |
| Storage | 256 GB SSD | **500 GB SSD** |
| Network | Ethernet LAN (cùng mạng với các máy trong xưởng) | Gigabit |
| OS | Ubuntu 22.04 LTS | Ubuntu 22.04 LTS |

### Lưu ý
- PC này chạy 24/7 → cần UPS backup
- Đặt trong phòng có điều hòa (server tỏa nhiệt)
- IP tĩnh trên LAN (ví dụ: 192.168.1.100)

---

## Bước 2: Install Ubuntu 22.04 LTS

1. Download Ubuntu 22.04 LTS: https://ubuntu.com/download/server
2. Tạo USB boot (dùng Rufus hoặc Etcher)
3. Install Ubuntu Server (không cần GUI desktop)
4. Trong quá trình install:
   - Hostname: `wx-erp`
   - Username: `wxadmin`
   - Enable OpenSSH server
5. Sau install, set IP tĩnh:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

```yaml
network:
  version: 2
  ethernets:
    enp0s3:  # tên card mạng (kiểm tra bằng: ip a)
      dhcp4: false
      addresses:
        - 192.168.1.100/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
```

```bash
sudo netplan apply
```

---

## Bước 3: Install Docker + Docker Compose

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | bash
sudo usermod -aG docker $USER

# Logout và login lại (hoặc reboot)
exit
# SSH vào lại

# Verify Docker
docker --version
docker compose version
```

---

## Bước 4: Install ERPNext via frappe-docker

```bash
# Clone frappe-docker
git clone https://github.com/frappe/frappe_docker.git
cd frappe_docker

# Copy environment file
cp example.env .env

# Edit .env
nano .env
```

Chỉnh `.env`:
```
FRAPPE_VERSION=v15
ERPNEXT_VERSION=v15
LETSENCRYPT_EMAIL=admin@workshopx.vn
SITE_NAME=erp.workshopx.local
DB_PASSWORD=WxErp2026SecurePass
ADMIN_PASSWORD=WxAdmin2026SecurePass
```

```bash
# Start ERPNext (lần đầu sẽ download images, ~10-15 phút)
docker compose -f compose.yaml \
  -f overrides/compose.erpnext.yaml \
  up -d

# Chờ 3-5 phút để site khởi tạo
# Check logs:
docker compose logs -f backend

# Khi thấy "Site erp.workshopx.local has been created" → OK
```

---

## Bước 5: Truy Cập ERPNext

1. Trên PC server: mở browser → `http://localhost:8080`
2. Từ máy khác trong LAN: `http://192.168.1.100:8080`
3. Login:
   - Username: `Administrator`
   - Password: (ADMIN_PASSWORD trong .env)

### DNS nội bộ (optional)
Trên mỗi máy client, thêm vào file hosts:
- Windows: `C:\Windows\System32\drivers\etc\hosts`
- Thêm dòng: `192.168.1.100 erp.workshopx.local`

→ Truy cập bằng: `http://erp.workshopx.local:8080`

---

## Bước 6: Setup Wizard (Lần Đầu)

Khi đăng nhập lần đầu, ERPNext chạy Setup Wizard:

| Trường | Giá trị |
|--------|---------|
| Company Name | **Workshop X** |
| Abbreviation | **WX** |
| Country | **Vietnam** |
| Default Currency | **VND** |
| Chart of Accounts | **Standard with Numbers** (sẽ chuyển TT200 sau) |
| Fiscal Year Start | **01-01** |
| Company Tagline | Simulation & Defense Training Systems |
| What does your company do? | **Manufacturing** |
| Bank Account | (tên ngân hàng chính của WX) |

---

## Bước 7: Backup Schedule

```bash
# Tạo backup script
cat > ~/backup-erpnext.sh << 'EOF'
#!/bin/bash
cd ~/frappe_docker
docker compose exec backend bench --site erp.workshopx.local backup --with-files
BACKUP_DIR=~/erpnext-backups/$(date +%Y%m%d)
mkdir -p $BACKUP_DIR
docker cp $(docker compose ps -q backend):/home/frappe/frappe-bench/sites/erp.workshopx.local/private/backups/. $BACKUP_DIR/
echo "Backup completed: $BACKUP_DIR"
EOF
chmod +x ~/backup-erpnext.sh

# Cron job: backup daily at 2AM
(crontab -l 2>/dev/null; echo "0 2 * * * /home/wxadmin/backup-erpnext.sh") | crontab -
```

---

## Bước 8: Verify Installation

Checklist sau khi install:

- [ ] ERPNext accessible từ browser (localhost + LAN)
- [ ] Login thành công với Administrator
- [ ] Setup Wizard completed — Company "Workshop X" created
- [ ] Backup script chạy thành công (test thủ công 1 lần)
- [ ] Ghi lại passwords vào nơi an toàn (KHÔNG lưu trong vault!)

---

## Troubleshooting

| Lỗi | Giải pháp |
|-----|-----------|
| Port 8080 không truy cập từ LAN | `sudo ufw allow 8080/tcp` |
| Docker compose lỗi | `docker compose down && docker compose up -d` |
| Site chưa tạo | `docker compose exec backend bench new-site erp.workshopx.local --admin-password WxAdmin2026SecurePass --db-root-password WxErp2026SecurePass --install-app erpnext` |
| Quá chậm | Check RAM usage: `free -h`. ERPNext cần ≥4GB free. |
| Quên password | `docker compose exec backend bench --site erp.workshopx.local set-admin-password NewPassword` |

---

## Tiếp Theo

Sau khi install thành công → chuyển sang:
- `02_Company_Setup.md` — Chart of Accounts TT200, Warehouses, Work Stations
- `03_User_Accounts.md` — 26 users, roles, permissions
