import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../../helpers/resolve-theme";
import { useDatePickerContext } from "../DatepickerContext";
import { addYears, isDateInDecade, isDateInRange, startOfYearPeriod, Views } from "../helpers";

export interface FlowbiteDatepickerViewsDecadesTheme {
  items: {
    base: string;
    item: {
      base: string;
      selected: string;
      disabled: string;
    };
  };
}

export interface DatepickerViewsDecadesProps {
  theme?: FlowbiteDatepickerViewsDecadesTheme;
}

export const DatepickerViewsDecades: FC<DatepickerViewsDecadesProps> = ({ theme: customTheme }) => {
  const { theme: rootTheme, viewDate, selectedDate, minDate, maxDate, setViewDate, setView } = useDatePickerContext();

  const theme = resolveTheme([rootTheme.views.decades, {}, customTheme], { shouldPrefix: false });
  const first = startOfYearPeriod(viewDate, 100);
  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const year = first - 10 + index * 10;
        const newDate = new Date(viewDate.getTime());
        newDate.setFullYear(year + (viewDate.getFullYear() % 10));
        const firstDate = new Date(year, 0, 1);
        const lastDate = addYears(firstDate, 9);

        const isSelected = selectedDate && isDateInDecade(selectedDate, year);
        const isDisabled = !isDateInRange(firstDate, minDate, maxDate) && !isDateInRange(lastDate, minDate, maxDate);

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

              selectedDate && setViewDate(addYears(viewDate, year - selectedDate.getFullYear()));
              setView(Views.Years);
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};
