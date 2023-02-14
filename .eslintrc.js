module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: [
    '.eslintrc.js',
    'config-overrides.js',
    'lint-staged.js',
    'postcss.config.js',
    'tailwind.config.js',
    'commitlint.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json', 'tsconfig.lib.json', 'cypress/tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'storybook'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
};
