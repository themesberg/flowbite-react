import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useTheme } from '../../Flowbite';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, isDateEqual, isDateInRange, startOfYearPeriod } from '../helpers';

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
  theme?: FlowbiteDatepickerViewsYearsTheme;
}

export const DatepickerViewsYears: FC<DatepickerViewsYearsProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.years, customTheme);
  const { selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext();

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate, 10);
        const year = first - 1 + index * 1;
        const newDate = new Date(viewDate.getTime());
        newDate.setFullYear(year);
        const inRange = isDateInRange(newDate, minDate, maxDate);

        return (
          <button
            disabled={!inRange}
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              isDateEqual(selectedDate, newDate) && theme.items.item.selected,
              !inRange && theme.items.item.disabled,
            )}
            onClick={() => {
              if (!inRange) return;

              setViewDate(newDate);
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
