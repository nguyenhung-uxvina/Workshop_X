# Reverse Proxy Setup for AI Infrastructure

This guide covers configuring Nginx and Caddy as secure reverse proxies for Clawdbot and AI agent systems.

## Why a Reverse Proxy?

Direct exposure of AI agent endpoints creates multiple risks:

| Risk | Direct Exposure | With Reverse Proxy |
|------|-----------------|-------------------|
| Authentication | None by default | Centralized auth |
| TLS/Encryption | Manual setup | Automatic (Caddy) or easy (Nginx+Certbot) |
| Rate Limiting | Application-level only | Proxy-level protection |
| DDoS Protection | Vulnerable | First line of defense |
| Logging | Scattered | Centralized access logs |
| IP Filtering | Application code | Proxy rules |

## Architecture

### Before (Insecure)
```
Internet → Port 8080 → Clawdbot → MCP Servers → Data
            ↑
       No protection
```

### After (Secure)
```
Internet → Nginx (443) → localhost:8080 → Clawdbot → MCP → Data
              ↑
      TLS + Auth + Rate Limit + Logging
```

## Nginx Setup

### Installation

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx

# Start and enable
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify
sudo nginx -t
curl localhost
```

### Basic Secure Configuration

```nginx
# /etc/nginx/sites-available/clawdbot
# Complete production-ready configuration

# Rate limiting zones
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=auth_limit:10m rate=5r/m;
limit_conn_zone $binary_remote_addr zone=conn_limit:10m;

# Upstream for Clawdbot
upstream clawdbot_backend {
    server 127.0.0.1:8080;
    keepalive 32;
}

# HTTP - Redirect to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;
    
    # Let's Encrypt challenge location
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    # Redirect everything else to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS - Main server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name your-domain.com;
    
    # SSL Certificate (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # Modern SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
    
    # SSL Session
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Logging
    access_log /var/log/nginx/clawdbot_access.log combined;
    error_log /var/log/nginx/clawdbot_error.log warn;
    
    # Main API endpoint
    location / {
        # Authentication
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
        
        # Rate limiting
        limit_req zone=api_limit burst=20 nodelay;
        limit_conn conn_limit 10;
        
        # Proxy to Clawdbot
        proxy_pass http://clawdbot_backend;
        proxy_http_version 1.1;
        
        # WebSocket support (if needed)
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Request-ID $request_id;
        
        # Timeouts (longer for AI responses)
        proxy_connect_timeout 60s;
        proxy_send_timeout 300s;
        proxy_read_timeout 300s;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 16k;
        proxy_busy_buffers_size 24k;
    }
    
    # Health check (no auth required)
    location /health {
        access_log off;
        auth_basic off;
        return 200 "OK\n";
        add_header Content-Type text/plain;
    }
    
    # Block common attack paths
    location ~ /\.(git|env|htpasswd) {
        deny all;
        return 404;
    }
}
```

### Enable Configuration

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/clawdbot /etc/nginx/sites-enabled/

# Remove default if not needed
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload
sudo systemctl reload nginx
```

### Set Up TLS with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate (interactive)
sudo certbot --nginx -d your-domain.com

# Or non-interactive
sudo certbot --nginx -d your-domain.com \
    --non-interactive \
    --agree-tos \
    --email your-email@example.com

# Verify auto-renewal
sudo certbot renew --dry-run
```

### Set Up Basic Authentication

```bash
# Install htpasswd utility
sudo apt install apache2-utils

# Create password file
sudo htpasswd -c /etc/nginx/.htpasswd admin

# Add additional users
sudo htpasswd /etc/nginx/.htpasswd another-user

# Secure the file
sudo chmod 640 /etc/nginx/.htpasswd
sudo chown root:www-data /etc/nginx/.htpasswd
```

## Caddy Setup (Alternative)

Caddy provides automatic HTTPS and simpler configuration.

### Installation

```bash
# Ubuntu/Debian
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### Caddyfile Configuration

```caddyfile
# /etc/caddy/Caddyfile

your-domain.com {
    # Automatic HTTPS (no manual cert management!)
    
    # Basic authentication
    basicauth /* {
        admin $2a$14$hashed_password_here
    }
    
    # Rate limiting
    rate_limit {
        zone dynamic {
            key {remote_host}
            events 10
            window 1s
        }
    }
    
    # Security headers
    header {
        X-Frame-Options "SAMEORIGIN"
        X-Content-Type-Options "nosniff"
        X-XSS-Protection "1; mode=block"
        Referrer-Policy "strict-origin-when-cross-origin"
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
    }
    
    # Reverse proxy to Clawdbot
    reverse_proxy localhost:8080 {
        header_up X-Real-IP {remote_host}
        header_up X-Forwarded-For {remote_host}
        
        # Timeouts
        transport http {
            read_timeout 300s
            write_timeout 300s
        }
    }
    
    # Health check (no auth)
    handle /health {
        skip_log
        respond "OK" 200
    }
    
    # Logging
    log {
        output file /var/log/caddy/access.log
        format json
    }
}
```

### Generate Password Hash for Caddy

```bash
caddy hash-password
# Enter password, get bcrypt hash
```

### Enable and Start Caddy

```bash
sudo systemctl enable caddy
sudo systemctl start caddy

# Verify
sudo systemctl status caddy
curl https://your-domain.com/health
```

## IP Whitelisting

For additional security, restrict access to known IPs.

### Nginx IP Whitelist

```nginx
# Add to location block
location / {
    # Allow specific IPs
    allow 203.0.113.10;    # Your home IP
    allow 203.0.113.20;    # Your office IP
    allow 10.0.0.0/8;      # Internal network
    deny all;              # Block everyone else
    
    # Then auth and proxy...
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd;
    proxy_pass http://clawdbot_backend;
}
```

### Caddy IP Whitelist

```caddyfile
your-domain.com {
    @blocked not remote_ip 203.0.113.10 203.0.113.20 10.0.0.0/8
    respond @blocked "Forbidden" 403
    
    # Rest of config...
}
```

## Cloudflare Integration

For additional DDoS protection and easier IP management.

### Benefits
- DDoS protection at edge
- Cloudflare Access for zero-trust authentication
- Automatic SSL management
- Bot protection

### Setup Steps

1. **Add domain to Cloudflare**
2. **Update nameservers**
3. **Configure SSL mode**: Full (Strict)
4. **Create Cloudflare Access application**:
   - Go to Zero Trust > Access > Applications
   - Add self-hosted application
   - Configure authentication (email OTP, GitHub, Google, etc.)
   - Set policies

### Nginx with Cloudflare

```nginx
# Trust Cloudflare IPs for real client IP
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
# ... (get full list from cloudflare.com/ips)
real_ip_header CF-Connecting-IP;

# Only allow Cloudflare IPs
allow 173.245.48.0/20;
allow 103.21.244.0/22;
# ...
deny all;
```

## Testing Your Setup

### Basic Connectivity
```bash
# Health check
curl -v https://your-domain.com/health

# With auth
curl -u admin:password https://your-domain.com/

# Without auth (should fail)
curl https://your-domain.com/
```

### SSL Quality
```bash
# Test SSL configuration
curl https://www.ssllabs.com/ssltest/analyze.html?d=your-domain.com
```

### Rate Limiting
```bash
# Rapid requests (should trigger rate limit)
for i in {1..50}; do curl -s -o /dev/null -w "%{http_code}\n" https://your-domain.com/; done
```

## Troubleshooting

### Common Issues

| Issue | Check | Fix |
|-------|-------|-----|
| 502 Bad Gateway | Is Clawdbot running? | `systemctl status clawdbot` |
| SSL errors | Certificate valid? | `certbot renew` |
| 403 Forbidden | IP allowed? Auth correct? | Check whitelist, htpasswd |
| Timeout | Clawdbot responding? | Check upstream timeouts |

### Logs

```bash
# Nginx logs
tail -f /var/log/nginx/clawdbot_access.log
tail -f /var/log/nginx/clawdbot_error.log

# Caddy logs
journalctl -u caddy -f
tail -f /var/log/caddy/access.log
```

## Checklist

- [ ] Nginx or Caddy installed and configured
- [ ] TLS certificate obtained and auto-renewal working
- [ ] Basic authentication or Cloudflare Access configured
- [ ] Rate limiting enabled
- [ ] Security headers added
- [ ] Access logging enabled
- [ ] Clawdbot bound to localhost only
- [ ] Firewall blocks direct access to Clawdbot port
- [ ] Health check endpoint working (without auth)
