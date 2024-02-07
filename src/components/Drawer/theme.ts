import type { FlowbiteDrawerTheme } from './Drawer';

export const drawerTheme: FlowbiteDrawerTheme = {
  header: {
    inner: {
      closeButton:
        'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white',
      closeIcon: 'w-4 h-4',
      titleIcon: 'w-4 h-4 me-2.5',
      titleText: 'inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400',
    },
    collapsed: {
      on: 'hidden',
      off: 'block',
    },
  },
  root: {
    base: 'z-[99999] p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800',
    collapsed: {
      on: 'fixed',
      off: 'hidden',
    },
    position: {
      bottom: 'bottom-0 left-0 right-0 w-full transform-none h-80 rounded-t-md',
      left: 'top-0 left-0 h-screen -translate-x-[translateX(99%)] w-60 md:w-80 rounded-r-md',
      right: 'top-0 right-0 h-screen translate-x-[translateX(99%)] w-60 md:w-80 rounded-l-md',
      top: 'top-0 left-0 right-0 w-full -translate-y-[translateY(99%)] h-80 rounded-b-md',
    },
  },
  items: {
    base: '',
  },
};
