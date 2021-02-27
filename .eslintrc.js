module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    indent: ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "class-methods-use-this": "off",
    "no-console": "off",
    "max-classes-per-file": "off"
  },
};
