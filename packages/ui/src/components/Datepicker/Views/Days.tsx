"use client";

import { twMerge } from "../../../helpers/tailwind-merge";
import { useDatePickerContext } from "../DatepickerContext";
import {
  addDays,
  getFirstDayOfTheMonth,
  getFormattedDate,
  getWeekDays,
  isDateEqual,
  isDateInRange,
  isDateToday,
  Views,
} from "../helpers";

export interface DatepickerViewsDaysTheme {
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
      today: string;
      outside: string;
    };
  };
}

export function DatepickerViewsDays() {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    filterDate,
    viewDate,
    selectedDate,
    changeSelectedDate,
    language,
  } = useDatePickerContext();

  const theme = rootTheme.views.days;

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
          const isDisabled =
            !isDateInRange(currentDate, minDate, maxDate) || (filterDate && !filterDate(currentDate, Views.Days));
          const isToday = isDateToday(currentDate);

          const isOutOfMonth = currentDate.getMonth() !== viewDate.getMonth();

          return (
            <button
              disabled={isDisabled}
              key={index}
              type="button"
              className={twMerge(
                theme.items.item.base,
                isToday && theme.items.item.today,
                isSelected && theme.items.item.selected,
                isDisabled && theme.items.item.disabled,
                isOutOfMonth && !isSelected && !isDisabled && theme.items.item.outside,
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
}

DatepickerViewsDays.displayName = "DatepickerViewsDays";
