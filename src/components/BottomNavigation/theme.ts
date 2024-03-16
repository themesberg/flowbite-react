import type { FlowbiteBottomNavigationTheme } from './BottomNavigation';

export const bottomNavigationTheme: FlowbiteBottomNavigationTheme = {
  root: {
    base: 'fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
    inner: 'grid h-full max-w-lg grid-cols-4 mx-auto font-medium w-fit',
  },
  border: {
    on: 'border-gray-200 [&_button]:border',
    off: '',
  },
  item: {
    base: 'inline-flex flex-col items-center justify-center px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 group',
    icon: {
      base: 'w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
    },
    label: 'text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500',
  },
};
