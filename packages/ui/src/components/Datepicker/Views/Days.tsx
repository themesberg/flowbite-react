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
  isMonthEqual,
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
      outside: string;
      hidden: string;
      today: string;
    };
  };
}

export function DatepickerViewsDays() {
  const {
    theme: rootTheme,
    weekStart,
    minDate,
    maxDate,
    showOutsideDays,
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
          const isOutsideDay = !isMonthEqual(currentDate, viewDate);
          const isHidden = isOutsideDay && !showOutsideDays;

          return (
            <button
              disabled={isDisabled || isHidden}
              key={index}
              type="button"
              className={twMerge(
                theme.items.item.base,
                isToday && theme.items.item.today,
                isSelected && theme.items.item.selected,
                isDisabled && theme.items.item.disabled,
                isOutsideDay && !isSelected && !isDisabled && showOutsideDays && theme.items.item.outside,
                isHidden && theme.items.item.hidden,
              )}
              onClick={() => {
                if (isDisabled || isHidden) return;

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
