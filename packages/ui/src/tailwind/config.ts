import type { Config } from "tailwindcss";
import { theme } from "./theme";

export const config: Partial<Config> = {
  theme: {
    extend: theme,
  },
};
