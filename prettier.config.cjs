/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-packagejson', '@ianvs/prettier-plugin-sort-imports'],
  printWidth: 120,
  singleQuote: true,
  // sort-imports
  importOrder: ['<BUILTIN_MODULES>', '<THIRD_PARTY_MODULES>', '^~/(.*)$', '^[.]', '', '^(?!.*[.]css$)[./].*$', '.css$'],
};
