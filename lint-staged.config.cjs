module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache --fix',
    'prettier --write',
    'yarn test related --run',
    () => 'tsc-files --noEmit',
  ],
  '*.{json,css}': ['prettier --write'],
};
