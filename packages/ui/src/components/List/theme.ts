import { createTheme } from '../../helpers/create-theme';
import type { FlowbiteListTheme } from './List';

export const listTheme: FlowbiteListTheme = createTheme({
  root: {
    base: 'list-inside space-y-1 text-gray-500 dark:text-gray-400',
    ordered: {
      off: 'list-disc',
      on: 'list-decimal',
    },
    horizontal: 'flex list-none flex-wrap items-center justify-center space-x-4 space-y-0',
    unstyled: 'list-none',
    nested: 'mt-2 ps-5',
  },
});
