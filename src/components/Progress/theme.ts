import type { FlowbiteProgressTheme } from './Progress';

export const progressTheme: FlowbiteProgressTheme = {
  base: 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
  label: 'mb-1 flex justify-between font-medium dark:text-white',
  bar: 'rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2',
  color: {
    dark: 'bg-gray-600 dark:bg-gray-300',
    blue: 'bg-cyan-600',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    indigo: 'bg-indigo-600 dark:bg-indigo-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
  },
  size: {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6',
  },
};
