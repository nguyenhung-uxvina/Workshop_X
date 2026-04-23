# MCP Server Security

Model Context Protocol (MCP) servers connect AI agents to sensitive data sources like Airtable, GitHub, databases, and internal systems. This guide covers security hardening specific to MCP deployments.

## MCP Threat Model

### Attack Vectors

| Vector | Risk | Impact |
|--------|------|--------|
| Credential exposure | API keys in plain text | Full access to connected services |
| Network exposure | MCP servers on public ports | Unauthorized data access |
| Injection attacks | Malicious inputs to MCP | Command execution, data exfiltration |
| Privilege escalation | Over-permissioned tokens | Broader access than intended |
| Session hijacking | Shared contexts | Cross-user data leakage |

### High-Value MCP Targets

| MCP Server | Sensitivity | Why It Matters |
|------------|-------------|----------------|
| Airtable | HIGH | Business data, customer info |
| GitHub | HIGH | Source code, secrets in repos |
| Database MCPs | CRITICAL | Direct data access |
| Filesystem | HIGH | Local file access |
| Slack/Teams | MEDIUM | Internal communications |
| Email | HIGH | Sensitive correspondence |

## Credential Security

### Never Hardcode Credentials

```json
// ❌ BAD - Hardcoded credentials
{
  "servers": {
    "airtable": {
      "env": {
        "AIRTABLE_API_KEY": "patXXXXXXXXXXXXXX"
      }
    }
  }
}

// ✅ GOOD - Environment variable reference
{
  "servers": {
    "airtable": {
      "env": {
        "AIRTABLE_API_KEY": "${AIRTABLE_API_KEY}"
      }
    }
  }
}
```

### Secure .mcp.json Template

```json
{
  "mcpServers": {
    "airtable": {
      "command": "npx",
      "args": ["-y", "@airtable/mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "${AIRTABLE_API_KEY}"
      }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}"
      }
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": {
        "BRAVE_API_KEY": "${BRAVE_API_KEY}"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/allowed/path/only"],
      "env": {}
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {}
    }
  }
}
```

### Minimum Permissions Principle

Create tokens with minimum required permissions:

#### GitHub Token Scopes
```
# For read-only operations
- repo (read)
- read:org

# AVOID unless needed
- repo (write)
- delete_repo
- admin:org
```

#### Airtable Token Scopes
```
# Minimum for most use cases
- data.records:read
- schema.bases:read

# Add only if needed
- data.records:write
```

## Network Isolation

### Docker Network Segmentation

For high-security deployments, isolate MCP servers in their own network.

```yaml
# docker-compose.yml
version: '3.8'

services:
  clawdbot:
    image: node:18
    command: node index.js
    networks:
      - frontend      # Exposed to proxy
      - mcp-internal  # Connects to MCP servers
    ports: []         # No direct ports!
    environment:
      - NODE_ENV=production
    depends_on:
      - mcp-airtable
      - mcp-github

  mcp-airtable:
    image: node:18
    command: npx -y @airtable/mcp-server
    networks:
      - mcp-internal  # Internal only
    environment:
      - AIRTABLE_API_KEY_FILE=/run/secrets/airtable_key
    secrets:
      - airtable_key
    # No ports exposed!

  mcp-github:
    image: node:18
    command: npx -y @modelcontextprotocol/server-github
    networks:
      - mcp-internal
    environment:
      - GITHUB_PERSONAL_ACCESS_TOKEN_FILE=/run/secrets/github_token
    secrets:
      - github_token

  nginx:
    image: nginx:alpine
    networks:
      - frontend
      - external
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/nginx/certs:ro

networks:
  external:     # Internet-facing
  frontend:     # Between nginx and clawdbot
    internal: true
  mcp-internal: # Between clawdbot and MCP servers
    internal: true

secrets:
  airtable_key:
    file: ./secrets/airtable.txt
  github_token:
    file: ./secrets/github.txt
```

### Network Architecture

```
Internet
    ↓
[Nginx/Caddy] (external network)
    ↓
[Clawdbot] (frontend + mcp-internal)
    ↓
[MCP Servers] (mcp-internal only)
    ↓
[External APIs] (via MCP)
```

## Filesystem MCP Security

The filesystem MCP server requires special attention as it provides direct file access.

### Restrict Allowed Paths

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/home/user/projects",     // Only project directory
        "/home/user/documents"     // Only documents
        // NOT: "/" or "/home" or "~"
      ]
    }
  }
}
```

### Directory Blacklist

Prevent access to sensitive directories:

```bash
# Never include in filesystem MCP
/etc           # System configuration
/root          # Root home
~/.ssh         # SSH keys
~/.gnupg       # GPG keys
~/.config      # Application configs with secrets
/var/log       # System logs
```

### Read-Only Mode

If you only need read access:

```json
{
  "servers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "--read-only",
        "/home/user/projects"
      ]
    }
  }
}
```

## Audit Logging

### Enable MCP Server Logging

```bash
# Wrapper script for logged MCP execution
#!/bin/bash
# run-mcp-with-logging.sh

LOG_DIR="/var/log/mcp"
mkdir -p "$LOG_DIR"

MCP_NAME=$1
shift

# Log all input/output
exec > >(tee -a "$LOG_DIR/${MCP_NAME}.log")
exec 2>&1

echo "[$(date -Iseconds)] Starting $MCP_NAME"
npx -y "$@"
```

### Log Format

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "mcp_server": "airtable",
  "operation": "list_records",
  "base_id": "appXXXXX",
  "table": "Projects",
  "record_count": 25,
  "duration_ms": 150,
  "status": "success"
}
```

### Log Rotation

```bash
# /etc/logrotate.d/mcp
/var/log/mcp/*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
    create 0640 root adm
}
```

## Input Validation

MCP servers should validate inputs, but defense in depth means the orchestrator should too.

### Sanitize User Inputs

```python
# Before passing to MCP
import re

def sanitize_mcp_input(user_input: str) -> str:
    """Sanitize input before sending to MCP server."""
    # Remove potential command injection
    dangerous_patterns = [
        r'`.*`',           # Backticks
        r'\$\(.*\)',       # Command substitution
        r';\s*\w+',        # Command chaining
        r'\|\s*\w+',       # Pipe commands
    ]
    
    sanitized = user_input
    for pattern in dangerous_patterns:
        sanitized = re.sub(pattern, '', sanitized)
    
    return sanitized.strip()
```

### Validate MCP Responses

```python
def validate_mcp_response(response: dict, expected_type: str) -> bool:
    """Validate MCP response structure."""
    if not isinstance(response, dict):
        return False
    
    # Check for expected fields
    required_fields = {
        'airtable_records': ['records', 'offset'],
        'github_files': ['files', 'repository'],
        'search_results': ['results', 'query'],
    }
    
    if expected_type in required_fields:
        for field in required_fields[expected_type]:
            if field not in response:
                return False
    
    return True
```

## Secret Rotation for MCP

### Rotation Without Downtime

1. **Generate new credential** in the service (Airtable, GitHub, etc.)
2. **Update secret store** (SOPS, Vault)
3. **Restart MCP servers** to pick up new credentials
4. **Verify** new credentials work
5. **Revoke old credentials** in the service

### Rotation Script

```bash
#!/bin/bash
# rotate-mcp-credentials.sh

SERVICE=$1

case $SERVICE in
    airtable)
        echo "1. Generate new Airtable Personal Access Token at:"
        echo "   https://airtable.com/create/tokens"
        echo "2. Enter new token:"
        read -s NEW_TOKEN
        
        # Update SOPS-encrypted secrets
        SOPS_AGE_KEY=$(cat ~/.config/sops/age/keys.txt | grep -v "^#" | head -1)
        echo "AIRTABLE_API_KEY=$NEW_TOKEN" | sops -e /dev/stdin > secrets/airtable.enc
        
        # Restart MCP
        docker-compose restart mcp-airtable
        
        echo "3. Verify, then revoke old token in Airtable dashboard"
        ;;
    github)
        echo "1. Generate new GitHub PAT at:"
        echo "   https://github.com/settings/tokens"
        # Similar process...
        ;;
    *)
        echo "Unknown service: $SERVICE"
        exit 1
        ;;
esac
```

## Security Checklist for MCP

### Configuration
- [ ] No hardcoded credentials in `.mcp.json`
- [ ] `.mcp.json` in `.gitignore`
- [ ] Environment variables used for all secrets
- [ ] Tokens have minimum required permissions

### Network
- [ ] MCP servers not exposed on public ports
- [ ] Network segmentation (Docker networks or firewalls)
- [ ] All external communication over HTTPS

### Filesystem
- [ ] Filesystem MCP restricted to specific directories
- [ ] Sensitive directories explicitly excluded
- [ ] Read-only mode if writes not needed

### Monitoring
- [ ] MCP operations logged
- [ ] Log rotation configured
- [ ] Alerting on suspicious activity

### Maintenance
- [ ] Credential rotation schedule defined
- [ ] Rotation process documented and tested
- [ ] Dependencies regularly updated
