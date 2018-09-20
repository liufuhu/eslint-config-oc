# eslint-config-open

Node Style Guide for Javascript.

## Install

```bash
npm i eslint eslint-config-open --save-dev
```

## Usage

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-open": "1",
    "eslint": "4"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-open',
};
```

### Use with Experimental Features

If you want to use eslint-config-open with experimental features such as `async function`, you should use `babel-eslint` parser:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-open": "1",
    "eslint": "4",
    "babel-eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-open',
  // for experimental features support
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

### Use with React in Front-End

If you want to use eslint-config-open with react, jsx and es6 modules:

- `package.json`

```json
{
  "devDependencies": {
    "eslint-config-open": "1",
    "eslint": "4",
    "babel-eslint": "8",
    "eslint-plugin-react": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-open',
  // for experimental features support
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

## License

[MIT](LICENSE)
