export default {
  accordion: {
    base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
    title: {
      base: 'py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      isOpen: 'text-gray-900 dark:text-white',
      isOpenNotFlushed: 'bg-gray-100 dark:bg-gray-800',
      notFlushed: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
    },
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900',
    },
  },
  alert: {
    base: 'flex flex-col gap-2 p-4 text-sm',
    borderAccent: 'border-t-4',
    closeButton: {
      base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
      color: {
        info: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300',
        gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
        failure:
          'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
        success:
          'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
        warning:
          'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
      },
    },
    color: {
      info: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
      gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
      failure: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
      success: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
      warning: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    },
    icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
    rounded: 'rounded-lg',
  },
  avatar: {
    base: 'flex items-center space-x-4',
    bordered: 'p-1 ring-2 ring-gray-300 dark:ring-gray-500',
    img: {
      disabled: 'rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600',
      enabled: 'rounded',
    },
    rounded: '!rounded-full',
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-20 h-20',
      xl: 'w-36 h-36',
    },
    stacked: 'ring-2 ring-gray-300 dark:ring-gray-500',
    status: {
      away: 'bg-yellow-400',
      base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
      busy: 'bg-red-400',
      offline: 'bg-gray-400',
      online: 'bg-green-400',
    },
    statusPosition: {
      'bottom-left': '-bottom-1 -left-1',
      'bottom-right': '-bottom-1 -right-1',
      'top-left': '-top-1 -left-1',
      'top-right': '-top-1 -right-1',
    },
  },
  badge: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      info: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
      failure:
        'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      success:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
      indigo:
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
    },
    href: 'group',
    icon: {
      disabled: 'rounded px-2 py-0.5',
      enabled: 'rounded-full p-1.5',
      size: {
        xs: 'w-3 h-3',
        sm: 'w-3.5 h-3.5',
      },
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-1.5 text-sm',
    },
  },
};
