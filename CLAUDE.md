# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS-Latte is a VS Code extension that provides syntax highlighting, snippets, and language support for:
- **Nette Latte** — a PHP template engine (`.latte` files)
- **Neon** — a configuration format from the Nette ecosystem (`.neon` files)

No JavaScript runtime logic — the extension is purely declarative (grammar files, snippets, configuration).

## Commands

```bash
npm test                     # Run all tests (grammar + snippets)
npm run test:grammar         # Test both Latte and Neon grammars
npm run test:grammar:latte   # Test Latte syntax highlighting only
npm run test:grammar:neon    # Test Neon syntax highlighting only
npm run test:snippets        # Validate snippets.json structure
npm run prepare-hooks        # Install the pre-commit hook
```

A pre-commit hook runs `npm test` automatically — tests must pass before commits go through.

## Architecture

The extension has no compiled code. Everything is declarative:

| File | Purpose |
|------|---------|
| `syntaxes/latte.tmLanguage` | TextMate grammar for Latte syntax highlighting |
| `syntaxes/neon.tmLanguage` | TextMate grammar for Neon syntax highlighting |
| `snippets/snippets.json` | 91 code snippets (JSONC format — `//` comments allowed) |
| `latte.configuration.json` | Bracket pairs, comment tokens, folding markers for Latte |
| `neon.configuration.json` | Same for Neon |
| `package.json` | Extension manifest — language registrations, Emmet config, grammar contributions |

### Grammar files

Both `.tmLanguage` files are XML plist format. Patterns use named scopes (e.g., `variable.other.latte`, `keyword.control.latte`) that map to theme colors.

### Emmet

Emmet HTML completions for `.latte` files are enabled via `emmet.includeLanguages` default configuration in `package.json` — this is how Latte files get HTML Emmet support.

## Testing

Grammar tests live in `tests/latte/latte.test.latte` and `tests/neon/neon.test.neon`. They use the `vscode-tmgrammar-test` assertion format:

```latte
{$variable}
;^ variable.other.latte
```

Each assertion line uses `;` followed by `^` characters positioned under the token being tested, then the expected scope name.

Snippet validation (`tests/validate-snippets.mjs`) checks that every snippet in `snippets/snippets.json` has a valid `prefix` (string) and `body` (string or array).

## Key Latte Syntax Notes

- Block comments: `{* comment *}`
- Variables: `$variableName`
- Filters: `|filterName`
- n: attributes: `n:class`, `n:foreach`, `n:href`, etc.
- Region folding: `{* #region *}` / `{* #endregion *}`

## Key Neon Syntax Notes

- Line comments: `#`
- Parameter substitution: `%variableName%`
- Service references: `@serviceName`
- Region folding: `# region` / `# endregion`
