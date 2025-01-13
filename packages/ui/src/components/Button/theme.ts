import { createTheme } from "../../helpers/create-theme";
import type { ButtonTheme } from "./Button";
import type { ButtonGroupTheme } from "./ButtonGroup";

export const buttonTheme: ButtonTheme = createTheme({
  base: "group relative flex items-stretch justify-center p-0.5 text-center font-medium focus:z-10 focus:outline-none",
  fullSized: "w-full",
  grouped: "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
  color: {
    default:
      "border border-transparent bg-primary-700 text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
    alternative:
      "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
    dark: "border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    failure:
      "border border-transparent bg-red-700 text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    gray: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:text-gray-700 focus:ring-4 focus:ring-gray-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    info: "border border-transparent bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800",
    light:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    purple:
      "border border-transparent bg-purple-700 text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
    success:
      "border border-transparent bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    warning:
      "border border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    blue: "border border-transparent bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "border border-cyan-300 bg-white text-cyan-900 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:focus:ring-cyan-700",
    green:
      "border border-green-300 bg-white text-green-900 hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:border-green-600 dark:bg-green-600 dark:text-white dark:hover:border-green-700 dark:hover:bg-green-700 dark:focus:ring-green-700",
    indigo:
      "border border-indigo-300 bg-white text-indigo-900 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:border-indigo-700 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700",
    lime: "border border-lime-300 bg-white text-lime-900 hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:hover:border-lime-700 dark:hover:bg-lime-700 dark:focus:ring-lime-700",
    pink: "border border-pink-300 bg-white text-pink-900 hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:hover:border-pink-700 dark:hover:bg-pink-700 dark:focus:ring-pink-700",
    red: "border border-red-300 bg-white text-red-900 hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:border-red-600 dark:bg-red-600 dark:text-white dark:hover:border-red-700 dark:hover:bg-red-700 dark:focus:ring-red-700",
    teal: "border border-teal-300 bg-white text-teal-900 hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:hover:border-teal-700 dark:hover:bg-teal-700 dark:focus:ring-teal-700",
    yellow:
      "border border-yellow-300 bg-white text-yellow-900 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:hover:border-yellow-700 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700",
  },
  disabled: "pointer-events-none opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute top-0 flex h-full items-center",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6",
  },
  gradient: {
    cyan: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    failure:
      "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    info: "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    lime: "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",

    pink: "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    purple:
      "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    success:
      "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
  },
  gradientDuoTone: {
    cyanToBlue:
      "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue:
      "bg-gradient-to-br from-green-400 to-blue-600 text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    pinkToOrange:
      "bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    purpleToBlue:
      "bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToPink:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    redToYellow:
      "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    tealToLime:
      "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
  },
  inner: {
    base: "flex items-stretch",
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20",
    },
  },
  label:
    "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: "",
    },
    off: "",
    on: "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
    pill: {
      off: "rounded-md",
      on: "rounded-full",
    },
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full",
  },
  size: {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
    xl: "px-6 py-3 text-base",
  },
});

export const buttonGroupTheme: ButtonGroupTheme = createTheme({
  base: "inline-flex rounded-md shadow-sm",
});
