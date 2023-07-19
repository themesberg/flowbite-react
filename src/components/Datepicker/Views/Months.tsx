import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../../helpers/merge-deep';
import { useTheme } from '../../Flowbite';
import { useDatePickerContext } from '../DatepickerContext';
import { Views, getFormattedDate, isDateEqual, isDateInRange } from '../helpers';

export interface FlowbiteDatepickerViewsMonthsTheme {
  items: {
    base: string;
    item: {
      base: string;
      selected: string;
      disabled: string;
    };
  };
}

export interface DatepickerViewsMonthsProps {
  theme?: FlowbiteDatepickerViewsMonthsTheme;
}

export const DatepickerViewsMonth: FC<DatepickerViewsMonthsProps> = ({ theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.datepicker.views.months, customTheme);

  const { minDate, maxDate, selectedDate, viewDate, language, setViewDate, setView } = useDatePickerContext();

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_month, index) => {
        const newDate = new Date(viewDate.getTime());
        newDate.setMonth(index);
        const month = getFormattedDate(language, newDate, { month: 'short' });

        const isSelected = isDateEqual(selectedDate, newDate);
        const isDisabled = !isDateInRange(newDate, minDate, maxDate);

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

              setViewDate(newDate);
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
