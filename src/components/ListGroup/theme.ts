import type { FlowbiteListGroupTheme } from './ListGroup';

export const listGroupTheme: FlowbiteListGroupTheme = {
  root: {
    base: 'list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left',
  },
  item: {
    base: '[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0',
    link: {
      base: 'flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600',
      active: {
        off: 'hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500',
        on: 'bg-cyan-700 text-white dark:bg-gray-800',
      },
      disabled: {
        off: '',
        on: 'hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed',
      },
      href: {
        off: '',
        on: '',
      },
      icon: 'mr-2 h-4 w-4 fill-current',
    },
  },
};
