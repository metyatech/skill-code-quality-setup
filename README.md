# @metyatech/skill-code-quality-setup

Agent skill for setting up code quality tools in repositories. Provides standard toolchain specifications for formatters, linters, type checkers, and dependency scanners across many languages.

## Overview

This skill provides comprehensive guidance for agents to establish and maintain high code quality standards. It covers standard toolchains for various programming languages, visual accessibility automation for web projects, and security baseline configurations.

## What it covers

- **Per-language toolchain**: Recommended formatters, linters, type checkers, and dependency scanners.
- **Visual accessibility**: Automation for route discovery and contrast checks.
- **Security baseline**: SCA, secret scanning, and CodeQL integration.

## Supported languages

JavaScript/TypeScript, Python, Go, Rust, Java, Kotlin, C#, C++, PowerShell, Shell, Dockerfile, Terraform, YAML, Markdown.

## Installation

```powershell
npx skills add metyatech/skill-code-quality-setup --yes --global
```

## Usage

### Direct Command

```text
/code-quality-setup
```

### Purpose

Use this skill when:

- Setting up a new repository.
- Auditing existing code quality tools.
- Adding security or accessibility checks to a project.

## Development

### Verification

Run the full verification suite (linting):

```powershell
npm install
npm run verify
```

## License

MIT
