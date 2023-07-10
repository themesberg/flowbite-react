import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '../..';
import { useDatePickerContext } from '../DatepickerContext';
import { addDays, getFirstDayOfMonth, getFormattedDate, isDateInRange } from '../helpers';

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
  theme?: DeepPartial<FlowbiteDatepickerViewsDaysTheme>;
}

export const DatepickerViewsDays: FC<DatepickerViewsDaysProps> = ({ minDate, maxDate, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.days, customTheme);
  const { selectedDate, setSelectedDate, language } = useDatePickerContext();

  const weekDays = ((lang: string): string[] => {
    const weekdays = [];
    const date = new Date();

    const formatter = new Intl.DateTimeFormat(lang, { weekday: 'short' });

    for (let i = 1; i <= 7; i++) {
      date.setDate(i);
      const formattedWeekday = formatter.format(date);
      weekdays.push(formattedWeekday.slice(0, 2).charAt(0).toUpperCase() + formattedWeekday.slice(1, 3));
    }

    return weekdays;
  })(language);

  const isSelectedDate = (value: Date): boolean =>
    selectedDate.getTime() > 0 && getFormattedDate(language, selectedDate) == getFormattedDate(language, value);

  const startDate = getFirstDayOfMonth(selectedDate);

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
