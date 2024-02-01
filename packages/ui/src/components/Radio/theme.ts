import { createTheme } from '../../helpers/create-theme';
import type { FlowbiteRadioTheme } from './Radio';

export const radioTheme: FlowbiteRadioTheme = createTheme({
  root: {
    base: 'h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600',
  },
});
