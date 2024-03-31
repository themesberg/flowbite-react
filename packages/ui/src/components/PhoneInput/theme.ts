import { createTheme } from "../../helpers/create-theme";
import type { FlowbitePhoneInputTheme } from "./PhoneInput";

export const phoneInputTheme: FlowbitePhoneInputTheme = createTheme({
  root: {
    base: "relative",
    input: {
      base: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      startIcon: {
        base: "pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5",
        icon: "h-4 w-4 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 end-3 top-0 flex items-center ps-3.5",
        icon: "h-4 w-4 text-gray-500 dark:text-gray-400",
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base",
      },
    },
  },
});
