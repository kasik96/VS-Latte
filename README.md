<h2 align="center">Nette Latte + Neon for VS Code</h2>
<p align="center">Syntax highlighting, snippets, and tooling for the <a href="https://latte.nette.org">Latte</a> template engine and <a href="https://ne-on.org">Neon</a> config format.</p>
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=Kasik96.latte">
    <img src="https://img.shields.io/badge/VS%20Code%20Marketplace-Install-blue" alt="VS Code Marketplace" />
  </a>
  <a href="https://open-vsx.org/extension/kasik96/latte">
    <img src="https://img.shields.io/badge/Open%20VSX%20Registry-Install-9e10c9" alt="Open VSX Registry" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License: MIT" />
  </a>
</p>

---

## Features

- 🎨 **Syntax highlighting** — full grammar for `.latte` and `.neon` files
- ✂️ **Snippets** — blocks, loops, includes, forms, filters, n: attributes, and more
- 📐 **Region folding** — `{* #region *}` / `{* #endregion *}` support
- ⚡ **Emmet** — HTML Emmet completions work out of the box in `.latte` files
- 🔲 **Bracket matching** — `{` / `}` tag pairs highlighted automatically
- 💬 **Comments** — toggle comments with the standard `Ctrl+/` shortcut

---

## Installation

| Source | Link |
|--------|------|
| VS Code Marketplace | [Kasik96.latte](https://marketplace.visualstudio.com/items?itemName=Kasik96.latte) |
| Open VSX Registry | [kasik96/latte](https://open-vsx.org/extension/kasik96/latte) |

---

## Snippets

### Blocks & Templates

| Prefix | Description |
|--------|-------------|
| `block` | `{block}…{/block}` |
| `define` | `{define}…{/define}` |
| `embed` | `{embed}…{/embed}` |
| `extends` | `{extends '…'}` |
| `import` | `{import '…'}` |
| `layout` | `{layout '…'}` |
| `capture` | `{capture $var}…{/capture}` |
| `include` | `{include #block}`, block/file/from variants |
| `snippet` | `{snippet}…{/snippet}` |
| `sandbox` | `{sandbox '…'}` |
| `try` | `{try}…{/try}` |

### Loops & Conditionals

| Prefix | Description |
|--------|-------------|
| `foreach` | `{foreach $items as $item}…{/foreach}` |
| `for` | `{for $i = 0; …}…{/for}` |
| `while` | `{while}…{/while}` |
| `iterateWhile` | `{iterateWhile}…{/while}` |
| `if` | `{if $cond}…{/if}` |
| `ifset` | `{ifset $var}…{/ifset}` |
| `ifchanged` | `{ifchanged}…{/ifchanged}` |
| `switch` | `{switch}…{/switch}` |
| `first` / `last` / `sep` | iteration helpers |
| `continueIf` / `breakIf` / `skipIf` | loop flow control |

### Forms & Links

| Prefix | Description |
|--------|-------------|
| `form` | `{form}…{/form}` |
| `formPrint` | `{formPrint …}` |
| `input` / `label` | form field tags |
| `link` / `plink` | `{link …}` / `{plink …}` |
| `control` | `{control …}` |

### Variables & Types

| Prefix | Description |
|--------|-------------|
| `var` | `{var $name = '…'}` |
| `default` | `{default $var = '…'}` |
| `varPrint` / `varType` | variable inspection / typing |
| `parameters` | `{parameters …}` |
| `templateType` / `templatePrint` | template class hints |

### Debugging & Utilities

| Prefix | Description |
|--------|-------------|
| `dump` | `{dump $var}` |
| `debugbreak` | `{debugbreak $cond}` |
| `cache` | `{cache $var}…{/cache}` |
| `php` | `{php …}` |
| `contentType` / `status` | HTTP helpers |
| `syntax` | `{syntax mode}…{/syntax}` |
| `l` / `r` | literal `{` / `}` |

### Filters

| Prefix | Description |
|--------|-------------|
| `\|truncate` `\|substr` `\|trim` | string trimming |
| `\|replace` `\|replaceRE` | string replacement |
| `\|strip` `\|striptags` | whitespace / HTML stripping |
| `\|webalize` `\|toAscii` | URL-friendly strings |
| `\|indent` `\|padLeft` `\|padRight` `\|repeat` | padding & indenting |
| `\|implode` `\|nl2br` | joining / line breaks |
| `\|lower` `\|upper` `\|firstUpper` `\|capitalize` | letter casing |
| `\|date` `\|number` `\|bytes` | formatting |
| `\|url` `\|length` `\|sort` `\|reverse` `\|clamp` `\|null` | misc |

### n: Attributes

| Prefix | Description |
|--------|-------------|
| `n:class` | conditional class binding |
| `n:attr` | generic attribute binding |
| `n:foreach` / `n:inner-foreach` | inline loop |
| `n:href` | presenter link |
| `n:snippet` | AJAX snippet |
| `n:ifcontent` / `n:ifchanged` / `n:tag-if` | conditional rendering |

---

## Configuration

Emmet is **enabled automatically** for `.latte` files — no manual setup needed. The extension sets `emmet.includeLanguages` via `configurationDefaults` in its manifest.

If you are on an older version of VS Code where `configurationDefaults` is not applied, add this manually to your `settings.json`:

```json
"emmet.includeLanguages": { "latte": "html" }
```

---

## Contributing

All contributions are welcome — bug reports, feature requests, and pull requests alike.
Open an issue or PR at [github.com/kasik96/VS-Latte](https://github.com/kasik96/VS-Latte).

---

## Credits

Grammar based on [Nette-Latte-Neon-for-Sublime-Text-3](https://github.com/FilipStryk/Nette-Latte-Neon-for-Sublime-Text-3) by Filip Stryk.

---

## License

MIT — see [LICENSE](LICENSE) for details.
