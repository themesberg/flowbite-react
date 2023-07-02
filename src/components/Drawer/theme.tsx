import type { FlowbiteDrawerTheme } from './Drawer';

export const drawerTheme: FlowbiteDrawerTheme = {
  root: {
    base: 'fixed bg-white dark:bg-gray-800 p-0 shadow',
    placements: {
      left: {
        on: 'top-0 w-80 left-0 z-40 h-screen p-0 overflow-y-auto overflow-x-hidden transition-transform',
        off: 'overflow-y-auto translate-x-full overflow-x-hidden transition-transform',
      },
      right: {
        on: 'top-0 w-80 right-0 z-40 h-screen overflow-x-hidden transition-transform',
        off: 'translate-x-full transition-transform',
      },
      top: {
        on: 'top-0 left-0 right-0 z-40 w-full p-0 transition-transform',
        off: 'translate-y-full transition-transform',
      },
      bottom: {
        on: 'bottom-0 left-0 right-0 z-40 w-full p-0 overflow-y-auto transition-transform',
        off: 'translate-y-full transition-transform',
        // fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none
      },
    },
  },
  content: {
    // base: 'relative h-full w-full p-4 md:h-auto',
    // inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700',
    base: 'relative',
    inner: 'relative',
  },
  body: {
    base: 'px-5',
  },
  header: {
    base: 'flex items-start justify-between rounded-t p-5',
    title: 'text-xl font-medium text-gray-600 dark:text-white',
    close: {
      base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
      icon: 'h-5 w-5',
    },
  },
};
