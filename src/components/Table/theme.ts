import type { FlowbiteTableTheme } from './Table';

export const tableTheme: FlowbiteTableTheme = {
  root: {
    base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
    shadow: 'absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10',
    wrapper: 'relative',
  },
  body: {
    base: 'group/body',
    cell: {
      base: 'group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4',
    },
  },
  head: {
    base: 'group/head text-xs uppercase text-gray-700 dark:text-gray-400',
    cell: {
      base: 'group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3',
    },
  },
  row: {
    base: 'group/row',
    hovered: 'hover:bg-gray-50 dark:hover:bg-gray-600',
    striped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
  },
};
