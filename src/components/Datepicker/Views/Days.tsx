import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useTheme, type DeepPartial } from '../..';
import { useDatePickerContext } from '../DatepickerContext';
import { addDays, getFormattedDate } from '../helpers';

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
  startDay: number;
  minDate?: Date;
  maxDate?: Date;
  theme?: DeepPartial<FlowbiteDatepickerViewsDaysTheme>;
}

export const DatepickerViewsDays: FC<DatepickerViewsDaysProps> = ({
  startDay,
  minDate,
  maxDate,
  theme: customTheme = {},
}) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.days, customTheme);

  const weekDays: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const { selectedDate, setSelectedDate, language } = useDatePickerContext();

  const isSelectedDate = (value: number): boolean =>
    selectedDate.getTime() > 0 && getFormattedDate(language, selectedDate) == getFormattedDate(language, value);
  const isDateInRange = (value: number): boolean => {
    const currentDate = new Date(value);
    if (minDate && maxDate) {
      return minDate >= currentDate && maxDate <= currentDate;
    }
    if (minDate) {
      return minDate >= currentDate;
    }
    if (maxDate) {
      return maxDate <= currentDate;
    }
    return false;
  };

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
          const current = addDays(startDay, index);
          const day = getFormattedDate(language, current, { day: 'numeric' });
          return (
            <button
              key={index}
              type="button"
              className={twMerge(
                theme.items.item.base,
                isSelectedDate(current) && theme.items.item.selected,
                !isDateInRange(current) && theme.items.item.disabled,
              )}
              onClick={() => {
                setSelectedDate(new Date(current));
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
