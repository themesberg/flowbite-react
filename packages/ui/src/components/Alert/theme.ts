import type { FlowbiteAlertTheme } from './Alert';

export const alertTheme: FlowbiteAlertTheme = {
  base: 'flex flex-col gap-2 p-4 text-sm',
  borderAccent: 'border-t-4',
  closeButton: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    icon: 'w-5 h-5',
    color: {
      info: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
      gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
      failure:
        'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
      success:
        'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
      warning:
        'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
      red: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
      green:
        'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
      yellow:
        'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
      blue: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
      cyan: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
      pink: 'bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300',
      lime: 'bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300',
      dark: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300',
      indigo:
        'bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300',
      teal: 'bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300',
      light:
        'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white',
    },
  },
  color: {
    info: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
    gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
    failure: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
    success: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
    warning: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
    green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
    yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
    blue: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
    cyan: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
    pink: 'text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800',
    lime: 'text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800',
    dark: 'text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300',
    indigo: 'text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800',
    purple: 'text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800',
    teal: 'text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800',
    light: 'text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200',
  },
  icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
  rounded: 'rounded-lg',
  wrapper: 'flex items-center',
};
