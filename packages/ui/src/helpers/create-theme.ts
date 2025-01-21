import type { CustomFlowbiteTheme } from "../types";

/**
 * Used to apply `tailwindcss` intellisense.
 */
export function createTheme<T = CustomFlowbiteTheme>(input: T) {
  return input;
}
