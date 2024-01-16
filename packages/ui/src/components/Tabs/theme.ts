import type { FlowbiteTabsTheme } from './Tabs';

export const tabTheme: FlowbiteTabsTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
      underline: 'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
      pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
      fullWidth:
        'w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none',
    },
    tabitem: {
      base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
            off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
          },
        },
        underline: {
          base: 'rounded-t-lg',
          active: {
            on: 'text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500',
            off: 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
          },
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-lg bg-cyan-600 text-white',
            off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
          },
        },
        fullWidth: {
          base: 'ml-0 first:ml-0 w-full rounded-none flex',
          active: {
            on: 'p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none',
            off: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none',
          },
        },
      },
      icon: 'mr-2 h-5 w-5',
    },
  },
  tabitemcontainer: {
    base: '',
    styles: {
      default: '',
      underline: '',
      pills: '',
      fullWidth: '',
    },
  },
  tabpanel: 'py-3',
};
