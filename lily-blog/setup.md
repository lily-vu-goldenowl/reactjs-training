# Setup Prettier and ESLint

## 1. Install prettier-vscode is default formatter for VS Code and Format on Save

## 2. Create .editorconfig (https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

- Cần cài extention Editor Config for VS code

```json
[*]
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
```

## 3. Create .prettierrc to config prettier, this make my project alway keep config when it place on another devices.

```json
{
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "semi": true
}
```

## 4. Install devDependencies that support prettier and eslint

```bash
yarn add prettier eslint-plugin-prettier eslint-config-prettier --dev
```

OR

```bash
npm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

## 5. create .eslintrc

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["react-app", "plugin:prettier/recommended"]
}
```

## 6. Install lint-staged (https://github.com/okonet/lint-staged)

````bash
npx mrm@2 lint-staged
```

## 6. Config scripts of package.json

```json
  "lint": "eslint --ext js,jsx src/",
  "lint:fix": "eslint --fix --ext js,jsx src/",
  "prettier": "prettier --check \"src/**/(**.jsx|*.js|*.scss|*.css)\"",
  "prettier:fix": "prettier --write \"src/**/(**.jsx|*.js|*.scss|*.css)\""
````
