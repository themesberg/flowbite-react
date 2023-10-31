import type { FlowbiteListTheme } from './List';

export const ListTheme: FlowbiteListTheme = {
  root: {
    base: 'max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400',
    ordered: {
      off: 'list-disc',
      on: 'list-decimal',
    },
    unStyled: 'list-none'
  },
};
