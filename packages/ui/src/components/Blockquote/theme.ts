import { createTheme } from "../../helpers/create-theme";
import type { BlockquoteTheme } from "./Blockquote";

export const blockquoteTheme: BlockquoteTheme = createTheme({
  root: {
    base: "text-xl font-semibold italic text-gray-900 dark:text-white",
  },
});
