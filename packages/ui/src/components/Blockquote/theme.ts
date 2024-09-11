import { createTheme } from "../../helpers/create-theme";
import type { FlowbiteBlockquoteTheme } from "./Blockquote";

export const blockquoteTheme: FlowbiteBlockquoteTheme = createTheme({
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white",
  },
});
