/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:tailwindcss/recommended", "prettier"],
  settings: {
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "tailwindcss/classnames-order": "off",
  },
  overrides: [
    {
      files: ["examples/**"],
      rules: {
        "@next/next/no-img-element": "off",
        "tailwindcss/enforces-shorthand": "off",
      },
    },
  ],
};
