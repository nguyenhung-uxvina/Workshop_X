---
name: ai-infra-security-hardening
description: Secure self-hosted AI agent infrastructure (Clawdbot, Claude Code, MCP servers) against common attack vectors. Use when users want to harden AI deployments, secure open ports, implement authentication for agent systems, manage API keys/credentials, set up reverse proxies, configure firewalls for AI infrastructure, or audit security of self-hosted LLM tooling. Triggers on "secure clawdbot", "harden AI infrastructure", "add auth to agents", "API key management", "secure MCP servers", "firewall AI", "reverse proxy claude", "credential rotation", "security audit agents".
---

# AI Infrastructure Security Hardening

Secure self-hosted AI agent infrastructure without sacrificing capability.

## Core Philosophy

The viral critique is correct: **default Clawdbot/self-hosted agents are insecure**. But the solution isn't abandoning self-hosting—it's applying the same security practices used in production systems.

| Threat | Default State | Hardened State |
|--------|--------------|----------------|
| Open ports | Anyone can connect | Auth required |
| Credential exposure | Plain text in configs | Encrypted, rotated |
| No rate limiting | DoS vulnerable | Rate-limited |
| Exposed endpoints | Full attack surface | Minimal exposure via proxy |

**Key insight**: Security is a capability multiplier—it enables you to use powerful tools in sensitive contexts (defense engineering, proprietary data) that would otherwise be off-limits.

## Quick Start

### Determine Your Threat Level

| Context | Threat Level | Recommended Path |
|---------|-------------|------------------|
| Personal projects, low-sensitivity | Low | Basic Hardening (1 hour) |
| Professional work, some sensitive data | Medium | Standard Hardening (2-3 hours) |
| Defense/security, proprietary systems | High | Full Hardening (4-6 hours) |

### Fastest Path: Basic Hardening (1 hour)

```bash
# 1. Run security audit
python scripts/audit_security.py

# 2. Apply minimal fixes
./scripts/basic_hardening.sh

# 3. Verify
python scripts/verify_hardening.py --level basic
```

### Standard Hardening (2-3 hours)

1. Complete Basic Hardening
2. Configure reverse proxy with auth (`references/reverse-proxy-setup.md`)
3. Implement credential management (`references/credential-management.md`)
4. Set up monitoring (`references/monitoring-alerting.md`)

### Full Hardening (4-6 hours)

1. Complete Standard Hardening
2. Network segmentation (`references/network-architecture.md`)
3. Intrusion detection (`references/ids-setup.md`)
4. Incident response plan (`references/incident-response.md`)

## Security Layers

### Layer 1: Authentication (Critical)

**Problem**: Default Clawdbot has no authentication—anyone who discovers your endpoint can use your agents.

**Solution**: Add authentication at the reverse proxy level.

```nginx
# Nginx with basic auth (minimum viable)
location /api {
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd;
    proxy_pass http://localhost:8080;
}
```

For stronger auth, see `references/auth-methods.md`:
- Basic Auth (quick, okay for personal use)
- OAuth2/OIDC (recommended for teams)
- mTLS (recommended for defense contexts)
- Cloudflare Access (easy, cloud-based)

### Layer 2: Network Security

**Problem**: Open ports expose your entire attack surface.

**Solution**: Firewall rules + reverse proxy.

```bash
# UFW example (Ubuntu)
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 443/tcp  # Only HTTPS through nginx
sudo ufw enable
```

**Critical**: Never expose Clawdbot ports (8080, etc.) directly. All traffic through reverse proxy.

See `references/network-architecture.md` for complete setup.

### Layer 3: Credential Management

**Problem**: API keys in plain text `.env` files are easily stolen.

**Solution**: Encrypted secrets management.

| Method | Complexity | Security | Use Case |
|--------|------------|----------|----------|
| dotenv + file permissions | Low | Basic | Personal |
| SOPS + age | Medium | Good | Professional |
| HashiCorp Vault | High | Excellent | Enterprise |
| 1Password CLI | Low | Good | Teams with 1Password |

Quick start with SOPS:
```bash
# Install
brew install sops age  # macOS
# or
sudo apt install sops age  # Ubuntu

# Generate key
age-keygen -o ~/.config/sops/age/keys.txt

# Encrypt secrets
sops --encrypt --age $(cat ~/.config/sops/age/keys.txt | grep "public key" | cut -d: -f2) .env > .env.enc
```

See `references/credential-management.md` for full guide.

### Layer 4: Rate Limiting & DoS Protection

**Problem**: No rate limiting = easy target for DoS.

**Solution**: Rate limiting at proxy level.

```nginx
# Nginx rate limiting
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

server {
    location /api {
        limit_req zone=api_limit burst=20 nodelay;
        proxy_pass http://localhost:8080;
    }
}
```

See `references/rate-limiting.md` for Cloudflare and other options.

### Layer 5: Monitoring & Alerting

**Problem**: You won't know you've been compromised without monitoring.

**Solution**: Log aggregation + alerting.

```bash
# Quick monitoring with fail2ban
sudo apt install fail2ban
# Configure for nginx, see references/monitoring-alerting.md
```

Recommended stack:
- **Logs**: Loki + Promtail (lightweight) or ELK (comprehensive)
- **Metrics**: Prometheus + Grafana
- **Alerting**: Grafana Alerting or PagerDuty

See `references/monitoring-alerting.md` for setup.

## Clawdbot-Specific Hardening

### Current Architecture (Insecure)

```
Internet → Open Port → Clawdbot → MCP Servers → Your Data
                ↑
          No auth, no encryption
```

### Hardened Architecture

```
Internet → Cloudflare → Nginx (auth + TLS) → Clawdbot → MCP Servers → Your Data
              ↑              ↑                    ↑
         DDoS protection   Auth + Rate limit   Internal only
```

### Step-by-Step Clawdbot Hardening

1. **Move Clawdbot to internal port**
   ```bash
   # In your Clawdbot config
   HOST=127.0.0.1  # Only listen on localhost
   PORT=8080
   ```

2. **Install and configure Nginx**
   ```bash
   sudo apt install nginx
   # Copy config from assets/nginx-clawdbot.conf
   sudo cp assets/nginx-clawdbot.conf /etc/nginx/sites-available/clawdbot
   sudo ln -s /etc/nginx/sites-available/clawdbot /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

3. **Set up TLS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

4. **Add authentication**
   ```bash
   # Generate password file
   sudo htpasswd -c /etc/nginx/.htpasswd your-username
   # Or use Cloudflare Access (see references/cloudflare-access.md)
   ```

5. **Configure firewall**
   ```bash
   sudo ufw allow 'Nginx Full'
   sudo ufw deny 8080  # Block direct Clawdbot access
   sudo ufw enable
   ```

6. **Verify**
   ```bash
   python scripts/verify_hardening.py --target clawdbot
   ```

## MCP Server Security

MCP servers connect to sensitive data (Airtable, GitHub, databases). They require special attention.

### MCP Credential Isolation

```json
// .mcp.json - NEVER commit this file
{
  "servers": {
    "airtable": {
      "command": "npx",
      "args": ["-y", "@airtable/mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "${AIRTABLE_API_KEY}"  // Reference env var, don't hardcode
      }
    }
  }
}
```

Add to `.gitignore`:
```
.mcp.json
.env
*.enc
```

### MCP Network Segmentation

For high-security contexts, run MCP servers in isolated containers:

```yaml
# docker-compose.yml
services:
  mcp-airtable:
    image: node:18
    command: npx -y @airtable/mcp-server
    environment:
      - AIRTABLE_API_KEY_FILE=/run/secrets/airtable_key
    secrets:
      - airtable_key
    networks:
      - mcp-internal
    # No external ports - only accessible within Docker network
```

See `references/mcp-security.md` for detailed patterns.

## Scripts

### Security Audit
```bash
python scripts/audit_security.py
```
Checks: open ports, credential exposure, auth status, TLS configuration

### Basic Hardening
```bash
./scripts/basic_hardening.sh
```
Applies: firewall rules, basic auth, port restrictions

### Verify Hardening
```bash
python scripts/verify_hardening.py --level [basic|standard|full]
```
Validates: all security controls for specified level

### Rotate Credentials
```bash
python scripts/rotate_credentials.py --target [all|airtable|github|...]
```
Rotates: API keys with zero-downtime

### Generate Security Report
```bash
python scripts/generate_report.py --output security-report.md
```
Creates: comprehensive security posture report

## Security Checklist

### Basic (Required)
- [ ] Clawdbot listens on localhost only (127.0.0.1)
- [ ] Firewall enabled, only necessary ports open
- [ ] Authentication required for all endpoints
- [ ] HTTPS/TLS enabled
- [ ] `.mcp.json` and `.env` in `.gitignore`
- [ ] No hardcoded credentials in code

### Standard (Recommended)
- [ ] Reverse proxy with rate limiting
- [ ] Encrypted credential storage (SOPS or similar)
- [ ] Fail2ban or equivalent for brute force protection
- [ ] Log aggregation enabled
- [ ] Regular credential rotation (quarterly minimum)

### Full (High-Security Contexts)
- [ ] mTLS for service-to-service communication
- [ ] Network segmentation (MCP servers isolated)
- [ ] Intrusion detection system active
- [ ] Security monitoring with alerting
- [ ] Incident response plan documented
- [ ] Regular penetration testing
- [ ] Audit logging with tamper protection

## References

- `references/auth-methods.md` - Comparison of authentication approaches
- `references/reverse-proxy-setup.md` - Nginx/Caddy configuration
- `references/credential-management.md` - SOPS, Vault, 1Password CLI
- `references/network-architecture.md` - Firewall and network design
- `references/rate-limiting.md` - DoS protection strategies
- `references/monitoring-alerting.md` - Logging and alerting setup
- `references/mcp-security.md` - MCP-specific security patterns
- `references/cloudflare-access.md` - Zero-trust access setup
- `references/incident-response.md` - When things go wrong
- `references/ids-setup.md` - Intrusion detection systems
- `references/defense-context.md` - Additional considerations for defense/security industries

## Assets

- `assets/nginx-clawdbot.conf` - Production-ready Nginx config
- `assets/docker-compose-secure.yml` - Secure Docker deployment
- `assets/sops-config.yaml` - SOPS configuration template
- `assets/fail2ban-clawdbot.conf` - Fail2ban jail for Clawdbot
- `assets/security-checklist.md` - Printable security checklist

## Anti-Patterns

### ❌ Security Through Obscurity
**Symptom**: "No one knows my IP/port, I'm safe"
**Problem**: Automated scanners find everything
**Fix**: Assume discovery, implement real security

### ❌ All-or-Nothing Thinking
**Symptom**: "Security is too hard, I'll just use cloud"
**Problem**: Loses control, may not fit compliance requirements
**Fix**: Progressive hardening (basic → standard → full)

### ❌ One-Time Setup
**Symptom**: "I set up auth once, I'm done"
**Problem**: Credentials leak, configs drift
**Fix**: Regular audits, credential rotation, monitoring

### ❌ Ignoring Dependencies
**Symptom**: "My code is secure, that's enough"
**Problem**: MCP servers, libraries have vulnerabilities
**Fix**: Dependency scanning, regular updates
