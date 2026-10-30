import { createTheme } from "../../helpers/create-theme";
import type { EmptyTheme } from "./Empty";

export const emptyTheme = createTheme<EmptyTheme>({
  root: {
    base: "flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800",
  },
  icon: "mb-3 h-12 w-12 text-gray-500 dark:text-gray-400",
  title: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
  description: "mb-4 text-sm text-gray-500 dark:text-gray-400",
});
