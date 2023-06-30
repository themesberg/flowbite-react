import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useTheme } from '../../Flowbite';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, addYears, getFormattedDate, startOfYearPeriod } from '../helpers';

export interface FlowbiteDatepickerViewsYearsTheme {
  items: {
    base: string;
    item: {
      base: string;
      disabled: string;
      selected: string;
    };
  };
}

export interface DatepickerViewsYearsProps {
  selectedDate: Date;
  theme?: FlowbiteDatepickerViewsYearsTheme;
}

export const DatepickerViewsYears: FC<DatepickerViewsYearsProps> = ({ selectedDate, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.years, customTheme);
  const { changeSelectedDate, language, setView } = useDatePickerContext();

  const isSelectedYear = (value: Date, year: number) =>
    value.getTime() > 0 && Number(getFormattedDate(language, value, { year: 'numeric' })) === year;

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(selectedDate, 10);
        const year = first - 1 + index * 1;
        return (
          <button
            key={index}
            className={twMerge(
              theme.items.item.base,
              isSelectedYear(selectedDate, year) && theme.items.item.selected,
              (index == 0 || index == 11) && theme.items.item.disabled,
            )}
            onClick={() => {
              changeSelectedDate('date', new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
              setView(Views.Months);
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};
