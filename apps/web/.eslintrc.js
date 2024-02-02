/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  settings: {
    tailwindcss: {
      callees: ['twMerge', 'createTheme'],
      classRegex: '^(class(Name)|theme)?$',
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'off',
  },
};
