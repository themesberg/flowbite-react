import { createTheme } from "../../helpers/create-theme";
import type { ToggleSwitchTheme } from "./ToggleSwitch";

export const toggleSwitchTheme: ToggleSwitchTheme = createTheme({
  root: {
    base: "group flex rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50",
    },
    label: "ms-3 mt-0.5 text-start text-sm font-medium text-gray-900 dark:text-gray-300",
  },
  toggle: {
    base: "relative rounded-full border after:absolute after:rounded-full after:bg-white after:transition-all group-focus:ring-4",
    checked: {
      on: "after:translate-x-full after:border-white rtl:after:-translate-x-full",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        default: "border-primary-700 bg-primary-700 group-focus:ring-primary-300 dark:group-focus:ring-primary-800",
        blue: "border-blue-700 bg-blue-700 group-focus:ring-blue-300 dark:group-focus:ring-blue-800",
        dark: "border-gray-900 bg-gray-700 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
        failure: "border-red-900 bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
        gray: "border-gray-600 bg-gray-500 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
        green: "border-green-700 bg-green-600 group-focus:ring-green-300 dark:group-focus:ring-green-800",
        light: "border-gray-300 bg-gray-300 group-focus:ring-gray-300 dark:group-focus:ring-gray-800",
        red: "border-red-900 bg-red-700 group-focus:ring-red-300 dark:group-focus:ring-red-800",
        purple: "border-purple-900 bg-purple-700 group-focus:ring-purple-300 dark:group-focus:ring-purple-800",
        success: "border-green-500 bg-green-500 group-focus:ring-green-300 dark:group-focus:ring-green-800",
        yellow: "border-yellow-400 bg-yellow-400 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
        warning: "border-yellow-600 bg-yellow-600 group-focus:ring-yellow-300 dark:group-focus:ring-yellow-800",
        cyan: "border-cyan-500 bg-cyan-500 group-focus:ring-cyan-300 dark:group-focus:ring-cyan-800",
        lime: "border-lime-400 bg-lime-400 group-focus:ring-lime-300 dark:group-focus:ring-lime-800",
        indigo: "border-indigo-400 bg-indigo-400 group-focus:ring-indigo-300 dark:group-focus:ring-indigo-800",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br group-focus:ring-teal-300 dark:group-focus:ring-teal-800",
        info: "border-cyan-600 bg-cyan-600 group-focus:ring-cyan-300 dark:group-focus:ring-cyan-800",
        pink: "border-pink-600 bg-pink-600 group-focus:ring-pink-300 dark:group-focus:ring-pink-800",
      },
    },
    sizes: {
      sm: "h-5 w-9 min-w-9 after:left-px after:top-px after:h-4 after:w-4 rtl:after:right-px",
      md: "h-6 w-11 min-w-11 after:left-px after:top-px after:h-5 after:w-5 rtl:after:right-px",
      lg: "h-7 w-[52px] min-w-[52px] after:left-px after:top-px after:h-6 after:w-6 rtl:after:right-px",
    },
  },
});
