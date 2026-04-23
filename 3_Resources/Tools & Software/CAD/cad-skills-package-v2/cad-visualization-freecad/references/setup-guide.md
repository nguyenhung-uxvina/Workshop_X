# FreeCAD MCP Setup Guide

## Quick Setup (5 steps)

### 1. Install FreeCAD
- Windows: https://www.freecad.org/downloads.php
- macOS: `brew install --cask freecad`
- Linux: `sudo snap install freecad`

### 2. Install uv/uvx
```bash
# Windows (PowerShell Admin)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```
Restart terminal after install.

### 3. Install FreeCAD Addon
```bash
git clone https://github.com/neka-nat/freecad-mcp.git /tmp/freecad-mcp

# Copy to addon directory:
# Windows: %APPDATA%\FreeCAD\Mod\
# macOS: ~/Library/Application Support/FreeCAD/Mod/
# Linux: ~/.FreeCAD/Mod/

cp -r /tmp/freecad-mcp/addon/FreeCADMCP [ADDON_PATH]/
```
Restart FreeCAD.

### 4. Configure Claude Desktop

Edit `claude_desktop_config.json`:
- Windows: `%APPDATA%\Claude\`
- macOS: `~/Library/Application Support/Claude/`
- Linux: `~/.config/Claude/`

```json
{
  "mcpServers": {
    "freecad": {
      "command": "uvx",
      "args": ["freecad-mcp"]
    }
  }
}
```
Restart Claude Desktop completely.

### 5. Start Session
1. Open FreeCAD
2. View → Workbench → **MCP Addon**
3. Click **"Start RPC Server"**
4. Use Claude Desktop (not web)

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MCP not found | Check JSON syntax, restart Claude Desktop |
| Connection refused | Start RPC Server in FreeCAD |
| uvx not found | Use full path in config |
| Workbench failure | Edit imports in rpc_server.py (remove leading dots) |

### Import Error Fix

If FreeCAD shows "Workbench failure", edit:
`[ADDON_PATH]/FreeCADMCP/rpc_server/rpc_server.py`

Change:
```python
from .parts_library import ...
```
To:
```python
from parts_library import ...
```
