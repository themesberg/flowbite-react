import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useTheme } from '../../Flowbite';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, addMonths, getFormattedDate } from '../helpers';

export interface FlowbiteDatepickerViewsMonthsTheme {
  items: {
    base: string;
    item: {
      base: string;
      selected: string;
    };
  };
}

export interface DatepickerViewsMonthsProps {
  theme?: FlowbiteDatepickerViewsMonthsTheme;
}

export const DatepickerViewsMonth: FC<DatepickerViewsMonthsProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.months, customTheme);
  const { selectedDate, language, changeSelectedDate, setView } = useDatePickerContext();

  const isSelectedMonth = (value: Date, month: string) =>
    value.getTime() > 0 && getFormattedDate(language, value, { month: 'short' }) === month;

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_month, index) => {
        const month = getFormattedDate(language, new Date(selectedDate.getFullYear(), index), { month: 'short' });
        return (
          <button
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              isSelectedMonth(selectedDate, month) && theme.items.item.selected,
            )}
            onClick={() => {
              changeSelectedDate('date', new Date(addMonths(selectedDate, index - selectedDate.getMonth())));
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
