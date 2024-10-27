import type { FC } from "react";
import { resolveTheme } from "../../../helpers/resolve-theme";
import { twMerge } from "../../../helpers/tailwind-merge";
import type { DeepPartial } from "../../../types";
import { useDatePickerContext } from "../DatepickerContext";
import { addDays, getFirstDayOfTheMonth, getFormattedDate, getWeekDays, isDateEqual, isDateInRange } from "../helpers";

export interface FlowbiteDatepickerViewsDaysTheme {
  header: {
    base: string;
    title: string;
  };
  items: {
    base: string;
    item: {
      base: string;
      selected: string;
      disabled: string;
    };
  };
}

export interface DatepickerViewsDaysProps {
  theme?: DeepPartial<FlowbiteDatepickerViewsDaysTheme>;
}

export const DatepickerViewsDays: FC<DatepickerViewsDaysProps> = ({ theme: customTheme }) => {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    viewDate,
    selectedDate,
    changeSelectedDate,
    language,
  } = useDatePickerContext();

  const theme = resolveTheme([rootTheme.views.days, customTheme], { shouldPrefix: false });

  const weekDays = getWeekDays(language, weekStart);
  const startDate = getFirstDayOfTheMonth(viewDate, weekStart);

  return (
    <>
      <div className={theme.header.base}>
        {weekDays.map((day, index) => (
          <span key={index} className={theme.header.title}>
            {day}
          </span>
        ))}
      </div>
      <div className={theme.items.base}>
        {[...Array(42)].map((_date, index) => {
          const currentDate = addDays(startDate, index);
          const day = getFormattedDate(language, currentDate, { day: "numeric" });

          const isSelected = selectedDate && isDateEqual(selectedDate, currentDate);
          const isDisabled = !isDateInRange(currentDate, minDate, maxDate);

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

                changeSelectedDate(currentDate, true);
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </>
  );
};
