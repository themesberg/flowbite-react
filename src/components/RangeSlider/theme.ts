import type { FlowbiteRangeSliderTheme } from "./RangeSlider";

export const rangeSliderTheme: FlowbiteRangeSliderTheme = {
  root: {
    base: 'flex',
  },
  field: {
    base: 'relative w-full',
    input: {
      base: 'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
      sizes: {
        sm: 'h-1 range-sm',
        md: 'h-2',
        lg: 'h-3 range-lg',
      },
    },
  },
}