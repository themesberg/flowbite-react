import type { FlowbiteIndicatorTheme } from './Indicator';

export const indicatorTheme: FlowbiteIndicatorTheme = {
  root: {
    base: 'flex rounded-full',
    color: {
      dark: 'bg-gray-900',
      failure: 'bg-red-700',
      gray: 'bg-gray-700',
      info: 'bg-cyan-700',
      light: 'bg-gray-300',
      purple: 'bg-purple-500',
      success: 'bg-green-700',
      warning: 'bg-yellow-400',
      blue: 'bg-blue-600',
      cyan: 'bg-cyan-700',
      green: 'bg-green-700',
      indigo: 'bg-indigo-700',
      lime: 'bg-lime-700',
      pink: 'bg-pink-700',
      red: 'bg-red-500',
      teal: 'bg-teal-500',
      yellow: 'bg-yellow-300',
      none: 'bg-transparent',
    },
    sizes: {
      xs: 'w-2 h-2',
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
      full: 'w-100 h-100',
    },
  },
};
