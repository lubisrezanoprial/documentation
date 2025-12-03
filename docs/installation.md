---
layout: docs
title: Installation
description: Detailed installation instructions
---

## Installation Guide

This page provides detailed instructions for installing our project.

### System Requirements

- **Operating System**: Windows 10+, macOS 10.14+, or Linux
- **Memory**: Minimum 4GB RAM
- **Disk Space**: At least 500MB free space
- **Network**: Internet connection for downloading dependencies

### Installation Methods

#### Method 1: Using npm

The easiest way to install:

```bash
npm install -g your-package-name
```

#### Method 2: Using yarn

If you prefer yarn:

```bash
yarn global add your-package-name
```

#### Method 3: Manual Installation

Download and install manually:

1. Download the latest release from [GitHub Releases](https://github.com/yourusername/repo/releases)
2. Extract the archive
3. Run the installation script

```bash
./install.sh
```

### Verification

Verify your installation:

```bash
your-command --version
```

You should see output similar to:

```
your-package-name v2.0.0
```

### Updating

To update to the latest version:

```bash
npm update -g your-package-name
```

### Uninstallation

To remove the package:

```bash
npm uninstall -g your-package-name
```

### Troubleshooting

**Permission errors on Linux/macOS?**

Try using `sudo`:

```bash
sudo npm install -g your-package-name
```

**Windows installation issues?**

Run your terminal as Administrator.

---

*Next: Learn about [Configuration]({{ '/docs/configuration/' | relative_url }})*
