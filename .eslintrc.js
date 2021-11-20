module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [              // Take a recommended file as a starting point, override yourself later
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended"
  ],
  rules: {
    "no-unused-vars": "off"
  },
  env: {
    browser: true,        // If running a browser app
    node: true            // If running server-side node
  }
}