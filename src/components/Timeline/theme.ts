import type { FlowbiteTimelineTheme } from "./Timeline";

export const timelineTheme: FlowbiteTimelineTheme = {
  root: {
    direction: {
      horizontal: 'items-base sm:flex',
      vertical: 'relative border-l border-gray-200 dark:border-gray-700',
    },
  },
  item: {
    root: {
      horizontal: 'relative mb-6 sm:mb-0',
      vertical: 'mb-10 ml-6',
    },
    content: {
      root: {
        base: 'mt-3 sm:pr-8',
      },
      body: 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
      time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
      title: 'text-lg font-semibold text-gray-900 dark:text-white',
    },
    point: {
      horizontal: 'flex items-center',
      line: 'hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex',
      marker: {
        base: {
          horizontal:
            'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
          vertical:
            'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
        },
        icon: {
          base: 'h-3 w-3 text-cyan-600 dark:text-cyan-300',
          wrapper:
            'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900',
        },
      },
      vertical: '',
    },
  },
}