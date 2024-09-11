import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../../helpers/merge-deep";
import { useDatePickerContext } from "../DatepickerContext";
import { getFormattedDate, isDateInRange, isMonthEqual, Views } from "../helpers";

export interface FlowbiteDatepickerViewsMonthsTheme {
  items: {
    base: string;
    item: {
      base: string;
      selected: string;
      disabled: string;
    };
  };
}

export interface DatepickerViewsMonthsProps {
  theme?: FlowbiteDatepickerViewsMonthsTheme;
}

export const DatepickerViewsMonth: FC<DatepickerViewsMonthsProps> = ({ theme: customTheme = {} }) => {
  const {
    theme: rootTheme,
    minDate,
    maxDate,
    selectedDate,
    viewDate,
    language,
    setViewDate,
    setView,
  } = useDatePickerContext();

  const theme = mergeDeep(rootTheme.views.months, customTheme);

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_month, index) => {
        const newDate = new Date();
        // setting day to 1 to avoid overflow issues
        newDate.setMonth(index, 1);
        newDate.setFullYear(viewDate.getFullYear());
        const month = getFormattedDate(language, newDate, { month: "short" });

        const isSelected = isMonthEqual(selectedDate, newDate);
        const isDisabled = !isDateInRange(newDate, minDate, maxDate);

        return (
          <button
            disabled={isDisabled}
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              isSelected && theme.items.item.selected,
              isDisabled && theme.items.item.disabled,
            )}
            onClick={() => {
              if (isDisabled) return;

              setViewDate(newDate);
              setView(Views.Days);
            }}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
};
