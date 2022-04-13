module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=0',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
  ],
  '*.{ts,tsx}': [() => 'tsc-files -p tsconfig.json --noEmit', 'eslint --max-warnings=0'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
