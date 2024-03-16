import type { FlowbiteBottomNavigationTheme } from './BottomNavigation';

export const bottomNavigationTheme: FlowbiteBottomNavigationTheme = {
  root: {
    base: 'fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
    inner: 'grid h-full max-w-lg grid-cols-4 mx-auto font-medium',
  },
  border: {
    on: '',
    off: '',
  },
};
