import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../..';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, addYears, getFormattedDate, startOfYearPeriod } from '../helpers';

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

export const DatepickerViewsDecades: FC<DatepickerViewsDecadesProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.decades, customTheme);
  const { selectedDate, changeSelectedDate, setView, language } = useDatePickerContext();

  const isSelectedDecade = (value: Date, year: number) =>
    value.getTime() > 0 && Number(getFormattedDate(language, value, { year: 'numeric' })) === year;

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(selectedDate, 100);
        const year = first - 10 + index * 10;
        return (
          <button
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              isSelectedDecade(selectedDate, year) && theme.items.item.selected,
              (index == 0 || index == 11) && theme.items.item.disabled,
            )}
            onClick={() => {
              changeSelectedDate('date', new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
              setView(Views.Days);
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};
