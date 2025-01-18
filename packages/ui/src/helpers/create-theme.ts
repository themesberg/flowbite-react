import type { CustomFlowbiteTheme } from "../components/Flowbite/FlowbiteTheme";

/**
 * Used to apply `tailwindcss` intellisense.
 */
export function createTheme<T = CustomFlowbiteTheme>(input: T) {
  return input;
}
