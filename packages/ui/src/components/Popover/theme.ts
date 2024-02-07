import type { FlowbitePopoverTheme } from './Popover';

export const popoverTheme: FlowbitePopoverTheme = {
  base: 'absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800',
  content: 'z-10 overflow-hidden rounded-[7px]',
  arrow: {
    base: 'absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color',
    placement: '-4px',
  },
};
