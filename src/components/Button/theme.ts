import type { FlowbiteButtonTheme } from './Button';
import type { FlowbiteButtonGroupTheme } from './ButtonGroup';

export const buttonTheme: FlowbiteButtonTheme = {
  base: 'group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10',
  fullSized: 'w-full',
  color: {
    dark: 'text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
    failure:
      'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
    gray: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 disabled:hover:bg-white focus:ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
    info: 'text-white bg-cyan-700 border border-transparent hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 dark:disabled:hover:bg-cyan-600',
    light:
      'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
    purple:
      'text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
    success:
      'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
    warning:
      'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400',
    blue: 'text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:border-cyan-700 dark:focus:ring-cyan-700',
    cyan: 'text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:border-cyan-700 dark:focus:ring-cyan-700',
    green:
      'text-green-900 bg-white border border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-green-300 disabled:hover:bg-white dark:bg-green-600 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:focus:ring-green-700',
    indigo:
      'text-indigo-900 bg-white border border-indigo-300 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 disabled:hover:bg-white dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:hover:bg-indigo-700 dark:hover:border-indigo-700 dark:focus:ring-indigo-700',
    lime: 'text-lime-900 bg-white border border-lime-300 hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 disabled:hover:bg-white dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:hover:bg-lime-700 dark:hover:border-lime-700 dark:focus:ring-lime-700',
    pink: 'text-pink-900 bg-white border border-pink-300 hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 disabled:hover:bg-white dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:hover:bg-pink-700 dark:hover:border-pink-700 dark:focus:ring-pink-700',
    red: 'text-red-900 bg-white border border-red-300 hover:bg-red-100 focus:ring-4 focus:ring-red-300 disabled:hover:bg-white dark:bg-red-600 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:focus:ring-red-700',
    teal: 'text-teal-900 bg-white border border-teal-300 hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 disabled:hover:bg-white dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:hover:bg-teal-700 dark:hover:border-teal-700 dark:focus:ring-teal-700',
    yellow:
      'text-yellow-900 bg-white border border-yellow-300 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-white dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-700 dark:focus:ring-yellow-700',
  },
  disabled: 'cursor-not-allowed opacity-50',
  isProcessing: 'cursor-wait',
  spinnerSlot: 'mr-3',
  gradient: {
    cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    failure:
      'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
    info: 'text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ',
    lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',

    pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
    purple:
      'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
    success:
      'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
    teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
  },
  gradientDuoTone: {
    cyanToBlue:
      'text-white bg-gradient-to-r from-cyan-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    greenToBlue:
      'text-white bg-gradient-to-br from-green-400 to-cyan-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
    pinkToOrange:
      'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
    purpleToBlue:
      'text-white bg-gradient-to-br from-purple-600 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
    purpleToPink:
      'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
    redToYellow:
      'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
    tealToLime:
      'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
  },
  inner: {
    base: 'flex items-center',
    position: {
      none: '',
      start: 'rounded-r-none',
      middle: 'rounded-none',
      end: 'rounded-l-none',
    },
    outline: 'border border-transparent',
  },
  label:
    'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
  outline: {
    color: {
      gray: 'border border-gray-900 dark:border-white',
      default: 'border-0',
      light: '',
    },
    off: '',
    on: 'flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
    pill: {
      off: 'rounded-md',
      on: 'rounded-full',
    },
  },
  pill: {
    off: 'rounded-lg',
    on: 'rounded-full',
  },
  size: {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-base px-6 py-3',
  },
};

export const buttonGroupTheme: FlowbiteButtonGroupTheme = {
  base: 'inline-flex',
  position: {
    none: 'focus:ring-2',
    start: 'rounded-r-none',
    middle: 'rounded-none border-l-0 pl-0',
    end: 'rounded-l-none border-l-0 pl-0',
  },
};
