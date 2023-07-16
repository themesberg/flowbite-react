import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '../..';
import { useDatePickerContext } from '../DatepickerContext';
import type { WeekStart } from '../helpers';
import { addDays, getFirstDayOfTheMonth, getFormattedDate, getWeekDays, isDateInRange } from '../helpers';

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
  minDate?: Date;
  maxDate?: Date;
  weekStart: WeekStart;
  theme?: DeepPartial<FlowbiteDatepickerViewsDaysTheme>;
}

export const DatepickerViewsDays: FC<DatepickerViewsDaysProps> = ({
  minDate,
  maxDate,
  weekStart,
  theme: customTheme = {},
}) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.days, customTheme);
  const { selectedDate, setSelectedDate, language } = useDatePickerContext();

  const weekDays = getWeekDays(language, weekStart);
  console.log(weekStart, weekDays);

  const isSelectedDate = (value: Date): boolean =>
    selectedDate.getTime() > 0 && getFormattedDate(language, selectedDate) == getFormattedDate(language, value);

  const startDate = getFirstDayOfTheMonth(selectedDate, weekStart);

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
          const day = getFormattedDate(language, currentDate, { day: 'numeric' });
          return (
            <button
              key={index}
              type="button"
              className={twMerge(
                theme.items.item.base,
                isSelectedDate(currentDate) && theme.items.item.selected,
                !isDateInRange(new Date(currentDate), minDate, maxDate) && theme.items.item.disabled,
              )}
              onClick={() => {
                setSelectedDate(new Date(currentDate));
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
