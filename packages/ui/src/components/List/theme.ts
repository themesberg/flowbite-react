import { createTheme } from "../../helpers/create-theme";
import type { FlowbiteListTheme } from "./List";

export const listTheme: FlowbiteListTheme = createTheme({
  root: {
    base: "list-inside space-y-1 text-gray-500 dark:text-gray-400",
    ordered: {
      off: "list-disc",
      on: "list-decimal",
    },
    horizontal: "flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",
    resetTheme: "list-none",
    nested: "mt-2 ps-5",
  },
  item: {
    withIcon: {
      off: "",
      on: "flex items-center",
    },
    icon: "me-2 h-3.5 w-3.5 flex-shrink-0",
  },
});
