import type { FlowbiteListTheme } from './List';

export const listTheme: FlowbiteListTheme = {
  root: {
    base: 'space-y-1 text-gray-500 list-inside dark:text-gray-400',
    ordered: {
      off: 'list-disc',
      on: 'list-decimal',
    },
    unstyled: 'list-none',
    nested: 'ps-5 mt-2 space-y-1',
  },
  item: {
    withIcon: {
      off: '',
      on: 'flex items-center',
    },
    icon: 'w-3.5 h-3.5 me-2 flex-shrink-0',
  },
};
