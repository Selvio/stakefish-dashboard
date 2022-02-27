module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "plugin:cypress/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": 0,
    "no-restricted-exports": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "import/no-extraneous-dependencies": 0,
    "camelcase": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
