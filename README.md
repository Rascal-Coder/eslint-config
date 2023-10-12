## Rascal's eslint config presets

- Auto fix for formatting with prettier
- TypeScript, Vue, React out-of-box
- Lint also for html, json, yaml, markdown
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"

## Package

### eslint-config-rascal

this default config is equal to rascal-ts

### eslint-config-rascal-base

this is base config, lint for js, html, json, yaml, markdown

### eslint-config-rascal-ts

this config extends the base config, and it also lint for ts

### eslint-config-rascal-vue

this config extends the ts config, and it also lint for vue3

### eslint-config-rascal-vue2

this config extends the ts config, and it also lint for vue2

## Usage

### Install

```bash
pnpm add -D eslint
pnpm add -D eslint-config-rascal # for ts
pnpm add -D eslint-config-rascal-base # base
pnpm add -D eslint-config-rascal-ts # for ts
pnpm add -D eslint-config-rascal-vue # for vue3
pnpm add -D eslint-config-rascal-vue2 # for vue2
pnpm add -D eslint-config-rascal-react # for vue2
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "rascal" // or rascal-base, rascal-ts, rascal-vue, rascal-vue2, rascal-react
}
```

You don't need .eslintignore normally as it has been provided by the preset.

### Change import alias

```json
{
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~", "."],
          ["@", "./src"]
        ],
        "extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx", "mts", ".d.ts"]
      }
    }
  }
}
```

### Add scripts for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
