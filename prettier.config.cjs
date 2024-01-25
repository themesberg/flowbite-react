/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
module.exports = {
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  printWidth: 120,
  singleQuote: true,
  // tailwindcss
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge'],
  // sort-imports
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[.]', '', '^(?!.*[.]css$)[./].*$', '.css$'],
};
