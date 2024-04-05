/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:vitest/recommended",
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "vitest"],
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },
  ignorePatterns: ["dist"],
  rules: {
    "no-undef": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/enforces-shorthand": "off",
  },
};
