# skill-code-quality-setup

Agent skill for setting up code quality tools in repositories. Provides standard toolchain specifications for formatters, linters, type checkers, and dependency scanners across 13+ languages.

## What it covers

- Per-language toolchain: formatter, linter, type checker, dependency scanner
- Design and visual accessibility automation (web UI projects)
- Security baseline (SCA, secret scanning, CodeQL)

## Supported languages

JavaScript/TypeScript, Python, Go, Rust, Java, Kotlin, C#, C++, PowerShell, Shell, Dockerfile, Terraform, YAML, Markdown

## Installation

```sh
npx skills add metyatech/skill-code-quality-setup
```

## Usage

### Claude Code

```text
/code-quality-setup
```

### Codex

```powershell
$code-quality-setup
```

## Development

### Prerequisites

- Node.js 20+

### Commands

- `npm install`: Install dependencies
- `npm run format`: Format files with Prettier
- `npm run lint`: Lint Markdown files
- `npm run verify`: Run all checks (format check, lint, audit)

## License

MIT
