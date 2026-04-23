# Credential Management for AI Infrastructure

This guide covers secure credential storage and rotation for self-hosted AI agent systems.

## The Problem

Default configurations store credentials in:
- Plain text `.env` files
- Hardcoded in `.mcp.json`
- Committed to git repositories

This exposes credentials to:
- Anyone with file system access
- Git history (even after deletion)
- Backup systems
- Log files

## Solution Tiers

| Tier | Method | Complexity | Security | Best For |
|------|--------|------------|----------|----------|
| 1 | File permissions + gitignore | Low | Basic | Personal projects |
| 2 | SOPS + age encryption | Medium | Good | Professional work |
| 3 | HashiCorp Vault | High | Excellent | Enterprise/Team |
| 4 | 1Password CLI | Low | Good | Teams with 1Password |

## Tier 1: Basic Protection

Minimum viable security for personal projects.

### 1.1 Restrict File Permissions

```bash
# Make .env readable only by owner
chmod 600 .env
chmod 600 .mcp.json

# Verify
ls -la .env
# Should show: -rw------- (no group/other permissions)
```

### 1.2 Comprehensive .gitignore

```gitignore
# Secrets
.env
.env.*
*.env
.mcp.json
secrets/
.secrets/

# Encrypted files indicator
*.enc
*.encrypted

# Auth files
.htpasswd

# Keys
*.pem
*.key
*.p12

# Logs (may contain secrets)
*.log
logs/
```

### 1.3 Git Pre-commit Hook

Prevent accidental credential commits:

```bash
# .git/hooks/pre-commit
#!/bin/bash

# Patterns that indicate secrets
PATTERNS="password|api_key|secret|token|ANTHROPIC|OPENAI|GITHUB_TOKEN|AIRTABLE"

# Check staged files
FILES=$(git diff --cached --name-only)
for FILE in $FILES; do
    if [ -f "$FILE" ]; then
        if grep -iE "$PATTERNS" "$FILE" > /dev/null 2>&1; then
            echo "WARNING: $FILE may contain secrets"
            echo "Review before committing!"
            exit 1
        fi
    fi
done
```

Make executable: `chmod +x .git/hooks/pre-commit`

## Tier 2: SOPS + Age Encryption

Recommended for professional use. Secrets are encrypted at rest.

### 2.1 Installation

```bash
# macOS
brew install sops age

# Ubuntu/Debian
sudo apt install age
# SOPS - download from GitHub releases
wget https://github.com/getsops/sops/releases/latest/download/sops_3.8.1_amd64.deb
sudo dpkg -i sops_3.8.1_amd64.deb

# Verify
sops --version
age --version
```

### 2.2 Generate Age Key

```bash
# Create key directory
mkdir -p ~/.config/sops/age

# Generate keypair
age-keygen -o ~/.config/sops/age/keys.txt

# Secure the key file
chmod 600 ~/.config/sops/age/keys.txt

# View public key (needed for encryption)
cat ~/.config/sops/age/keys.txt | grep "public key"
# Example: # public key: age1ql3z7hjy54pw3hyww5ayyfg7zqgvc7w3j2elw8zmrj2kg5sfn9aqmcac8p
```

### 2.3 Create SOPS Configuration

```yaml
# .sops.yaml (in project root)
creation_rules:
  - path_regex: \.env\.enc$
    age: age1ql3z7hjy54pw3hyww5ayyfg7zqgvc7w3j2elw8zmrj2kg5sfn9aqmcac8p
  - path_regex: \.mcp\.json\.enc$
    age: age1ql3z7hjy54pw3hyww5ayyfg7zqgvc7w3j2elw8zmrj2kg5sfn9aqmcac8p
```

### 2.4 Encrypt Secrets

```bash
# Encrypt .env file
sops -e .env > .env.enc

# Encrypt MCP config
sops -e .mcp.json > .mcp.json.enc

# Remove unencrypted versions
rm .env .mcp.json

# Commit encrypted versions (safe)
git add .env.enc .mcp.json.enc .sops.yaml
```

### 2.5 Decrypt for Use

```bash
# Decrypt to stdout
sops -d .env.enc

# Decrypt to file (temporary use)
sops -d .env.enc > .env
# Use application
# Delete after use
rm .env

# Or use exec to inject into environment
sops exec-env .env.enc 'your-command-here'
```

### 2.6 Edit Encrypted Files

```bash
# SOPS opens decrypted file in editor, re-encrypts on save
sops .env.enc
```

### 2.7 Integration with Clawdbot

Create a startup script:

```bash
#!/bin/bash
# start-clawdbot.sh

# Decrypt secrets to temp location
TEMP_ENV=$(mktemp)
sops -d .env.enc > "$TEMP_ENV"

# Export variables
set -a
source "$TEMP_ENV"
set +a

# Clean up temp file
rm "$TEMP_ENV"

# Start Clawdbot
node clawdbot/index.js
```

## Tier 3: HashiCorp Vault

For enterprise/team deployments with audit requirements.

### 3.1 Quick Start with Vault Dev Mode

```bash
# Install
wget https://releases.hashicorp.com/vault/1.15.0/vault_1.15.0_linux_amd64.zip
unzip vault_1.15.0_linux_amd64.zip
sudo mv vault /usr/local/bin/

# Start dev server (NOT for production!)
vault server -dev

# In another terminal
export VAULT_ADDR='http://127.0.0.1:8200'
export VAULT_TOKEN='<dev-root-token>'

# Store a secret
vault kv put secret/clawdbot \
    anthropic_key="sk-ant-..." \
    airtable_key="pat..." \
    github_token="ghp_..."

# Retrieve
vault kv get secret/clawdbot
vault kv get -field=anthropic_key secret/clawdbot
```

### 3.2 Production Vault Setup

See HashiCorp's production deployment guide. Key considerations:
- Use auto-unseal (AWS KMS, Azure Key Vault, etc.)
- Enable audit logging
- Configure proper ACL policies
- Set up HA backend (Consul, Raft)

### 3.3 Vault Agent for Applications

```hcl
# vault-agent.hcl
pid_file = "/tmp/vault-agent.pid"

vault {
  address = "https://vault.internal:8200"
}

auto_auth {
  method "approle" {
    config = {
      role_id_file_path   = "/etc/vault/role-id"
      secret_id_file_path = "/etc/vault/secret-id"
    }
  }
}

template {
  source      = "/etc/vault/templates/env.tpl"
  destination = "/app/.env"
  perms       = 0600
}
```

## Tier 4: 1Password CLI

Simple solution for teams already using 1Password.

### 4.1 Installation

```bash
# macOS
brew install --cask 1password-cli

# Linux
curl -sS https://downloads.1password.com/linux/keys/1password.asc | \
    sudo gpg --dearmor --output /usr/share/keyrings/1password-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/1password-archive-keyring.gpg] https://downloads.1password.com/linux/debian/amd64 stable main" | \
    sudo tee /etc/apt/sources.list.d/1password.list
sudo apt update && sudo apt install 1password-cli
```

### 4.2 Sign In

```bash
# First time
op account add --address my.1password.com --email you@example.com

# Sign in
eval $(op signin)
```

### 4.3 Create and Retrieve Secrets

```bash
# Store in 1Password (via GUI or CLI)
op item create \
    --category="API Credential" \
    --title="Clawdbot Secrets" \
    --vault="Development" \
    'api_key[password]=sk-ant-...'

# Retrieve
op item get "Clawdbot Secrets" --fields api_key

# Use in script
export ANTHROPIC_API_KEY=$(op item get "Clawdbot Secrets" --fields api_key)
```

### 4.4 1Password Secret References

Use `op://` references in config files:

```bash
# .env.template
ANTHROPIC_API_KEY=op://Development/Clawdbot Secrets/api_key
AIRTABLE_API_KEY=op://Development/Clawdbot Secrets/airtable_key

# Inject at runtime
op run --env-file=.env.template -- node clawdbot/index.js
```

## Credential Rotation

Regular rotation limits exposure from leaked credentials.

### Rotation Schedule

| Credential Type | Rotation Frequency | Trigger Immediate Rotation |
|-----------------|-------------------|---------------------------|
| API Keys | Quarterly | Suspected compromise |
| Service Accounts | Semi-annually | Employee departure |
| Database Passwords | Quarterly | Security incident |
| SSH Keys | Annually | Key exposure |

### Rotation Script

```python
#!/usr/bin/env python3
"""
Credential rotation helper.
Generates new credentials and updates storage.
"""

import subprocess
import secrets
import string
from datetime import datetime

def generate_api_key(length=32):
    """Generate a secure random API key."""
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def rotate_credential(service: str, vault_path: str):
    """Rotate a credential in Vault."""
    new_key = generate_api_key()
    
    # Update in Vault
    subprocess.run([
        "vault", "kv", "patch",
        vault_path,
        f"{service}_key={new_key}"
    ], check=True)
    
    print(f"[{datetime.now()}] Rotated {service} key")
    print(f"New key: {new_key[:8]}...{new_key[-4:]}")
    print(f"Update the key in {service}'s dashboard!")
    
    return new_key

def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--target", choices=["all", "airtable", "github", "anthropic"])
    args = parser.parse_args()
    
    services = {
        "airtable": "secret/clawdbot",
        "github": "secret/clawdbot",
        "anthropic": "secret/clawdbot"
    }
    
    if args.target == "all":
        for service, path in services.items():
            rotate_credential(service, path)
    else:
        rotate_credential(args.target, services[args.target])

if __name__ == "__main__":
    main()
```

## MCP Server Credential Isolation

Special considerations for MCP servers which connect to sensitive data.

### Environment Variable References

```json
// .mcp.json - use references, not values
{
  "servers": {
    "airtable": {
      "command": "npx",
      "args": ["-y", "@airtable/mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "${AIRTABLE_API_KEY}"
      }
    },
    "github": {
      "command": "npx", 
      "args": ["-y", "@github/mcp-server"],
      "env": {
        "GITHUB_TOKEN": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

### Startup Script with Secret Injection

```bash
#!/bin/bash
# start-with-secrets.sh

# Load secrets from SOPS
eval $(sops -d --output-type dotenv .env.enc)

# Or from Vault
export AIRTABLE_API_KEY=$(vault kv get -field=airtable_key secret/clawdbot)
export GITHUB_TOKEN=$(vault kv get -field=github_token secret/clawdbot)
export ANTHROPIC_API_KEY=$(vault kv get -field=anthropic_key secret/clawdbot)

# Start the application
exec node clawdbot/index.js
```

## Audit Checklist

- [ ] No plain text credentials in git history
- [ ] `.env` and `.mcp.json` in `.gitignore`
- [ ] File permissions restricted (600)
- [ ] Encryption at rest (SOPS, Vault, or equivalent)
- [ ] Rotation schedule defined and followed
- [ ] Pre-commit hooks prevent credential commits
- [ ] Credentials use environment variables, not hardcoded values
