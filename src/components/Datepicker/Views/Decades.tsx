import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, addYears, isDateInDecade, isDateInRange, startOfYearPeriod } from '../helpers';

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
  const { theme: rootTheme, selectedDate, viewDate, setViewDate, setView } = useDatePickerContext();

  const theme = mergeDeep(rootTheme.views.decades, customTheme);

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate, 100);
        const year = first - 10 + index * 10;
        const firstDate = new Date(year, 0, 1);
        const lastDate = addYears(firstDate, 9);

        const isSelected = isDateInDecade(viewDate, year);
        const isDisabled = !isDateInRange(viewDate, firstDate, lastDate);

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

              setViewDate(addYears(viewDate, year - selectedDate.getFullYear()));
              setView(Views.Years);
            }}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
};
