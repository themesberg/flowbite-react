import type { FlowbiteRatingTheme } from './Rating';

export const ratingTheme: FlowbiteRatingTheme = {
  root: {
    base: 'flex items-center',
  },
  advanced: {
    base: 'flex items-center',
    label: 'text-sm font-medium text-cyan-600 dark:text-cyan-500',
    progress: {
      base: 'mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700',
      fill: 'h-5 rounded bg-yellow-400',
      label: 'text-sm font-medium text-cyan-600 dark:text-cyan-500',
    },
  },
  star: {
    empty: 'text-gray-300 dark:text-gray-500',
    filled: 'text-yellow-400',
    sizes: {
      sm: 'w-5 h-5',
      md: 'w-7 h-7',
      lg: 'w-10 h-10',
    },
  },
};
