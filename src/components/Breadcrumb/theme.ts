import type { FlowbiteBreadcrumbTheme } from './Breadcrumb';

export const breadcrumbTheme: FlowbiteBreadcrumbTheme = {
  root: {
    base: '',
    list: 'flex items-center',
  },
  item: {
    base: 'group flex items-center',
    chevron: 'mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2',
    href: {
      off: 'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
      on: 'flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
    },
    icon: 'mr-2 h-4 w-4',
  },
};
