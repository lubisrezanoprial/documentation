---
layout: docs
title: Basic Configuration
description: Learn the basics of configuration
---

## Basic Configuration

This guide covers the essential configuration options.

### Configuration File

Create a `config.json` file in your project root:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "port": 3000,
  "environment": "development"
}
```

### Essential Options

#### Project Name

Set your project name:

```json
{
  "name": "my-awesome-project"
}
```

#### Port Configuration

Choose your development port:

```json
{
  "port": 3000
}
```

Default is 3000, but you can use any available port.

#### Environment

Set the environment mode:

```json
{
  "environment": "development"
}
```

Options: `development`, `staging`, `production`

### File Structure

Your configuration files should be organized as:

```
project/
├── config.json          # Main config
├── .env                 # Environment variables
└── .env.example         # Example env file
```

### Environment Variables

Create a `.env` file:

```env
NODE_ENV=development
PORT=3000
API_KEY=your-api-key-here
```

### Loading Configuration

In your code, load the configuration:

```javascript
const config = require('./config.json');
console.log(config.name); // "my-project"
```

### Best Practices

- Never commit sensitive data to version control
- Use `.env` files for secrets
- Keep configuration simple and organized
- Document all configuration options

### Next Steps

Learn about [Advanced Configuration]({{ '/docs/configuration/advanced/' | relative_url }}) for more options.

---

*See also: [Installation Guide]({{ '/docs/installation/' | relative_url }})*
