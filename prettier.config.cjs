/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
module.exports = {
  plugins: ['prettier-plugin-packagejson', '@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  singleQuote: true,
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme'],
  // sort-imports
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[.]', '', '^(?!.*[.]css$)[./].*$', '.css$'],
};
