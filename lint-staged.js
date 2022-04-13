module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache --fix',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc -p tsconfig.json --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
