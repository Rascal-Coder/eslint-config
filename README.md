## Rascal's eslint config presets

- Auto fix for formatting with prettier
- TypeScript, Vue, React out-of-box
- Lint also for html, json, yaml, markdown
- Reasonable defaults, best practices, only one-line of config
- Default Alias mapping "@" => "src", "~" => "./"


## Usage

### Install

```bash
pnpm add -D eslint
pnpm add -D eslint-config-rascal 
```

### Config eslint (.eslintrc | .eslintrc.js | .eslintrc.json)

```json
{
  "extends": "rascal" // or rascal/base, rascal/ts, rascal/vue, rascal/vue2, rascal/react
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

### VSCode settings for ESlint

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "json"
  ]
}
```
