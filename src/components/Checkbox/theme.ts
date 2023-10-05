import type { FlowbiteCheckboxTheme } from './Checkbox';

export const checkboxTheme: FlowbiteCheckboxTheme = {
  root: {
    base: 'h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100',
    color: {
      default: 'focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600',
      dark: 'focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800',
      failure: 'focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900',
      gray: 'focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900',
      info: 'focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800',
      light: 'focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900',
      purple: 'focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600',
      success: 'focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800',
      warning: 'focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400',
      blue: 'focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700',
      cyan: 'focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600',
      green: 'focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600',
      indigo: 'focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700',
      lime: 'focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700',
      pink: 'focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600',
      red: 'focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600',
      teal: 'focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600',
      yellow: 'focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400',
    },
  },
};
