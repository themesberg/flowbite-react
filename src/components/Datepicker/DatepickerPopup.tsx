import type { ForwardedRef } from 'react';
import { forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { dayOfTheWeekOf, firstDateOfMonth } from '../../helpers/date';
import { ButtonClear, ButtonNextMonth, ButtonPrevMonth, ButtonSelectMonth, ButtonToday } from './Buttons';
import { DatePickerContext } from './DatepickerProvider';
import Days from './Views/Days';
import Decades from './Views/Decades';
import Months from './Views/Months';
import Years from './Views/Years';

const DatePickerPopup = forwardRef<HTMLDivElement>((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const { selectedMonth, selectedYear, view, options } = useContext(DatePickerContext);

  const firstOfMonth = firstDateOfMonth(selectedYear, selectedMonth, 1);
  const start = dayOfTheWeekOf(firstOfMonth, 1, 1);

  return (
    <div ref={ref} className={twMerge('absolute top-10 z-50 block pt-2', options?.datepickerClassNames)}>
      <div
        className={twMerge(
          'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
          options?.theme?.background,
        )}
      >
        <div>
          {options?.title && (
            <div
              className={twMerge(
                'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
                options?.theme?.text,
              )}
            >
              {options?.title}
            </div>
          )}
          <div className="mb-2 flex justify-between">
            <ButtonPrevMonth />
            <ButtonSelectMonth />
            <ButtonNextMonth />
          </div>
        </div>
        <div className="p-1">
          {view === 'days' && <Days start={start} />}
          {view === 'months' && <Months />}
          {view === 'years' && <Years />}
          {view === 'decades' && <Decades />}
        </div>
        {(options?.todayBtn || options?.clearBtn) && (
          <div className="mt-2 flex space-x-2">
            {options?.todayBtn && <ButtonToday />}
            {options?.clearBtn && <ButtonClear />}
          </div>
        )}
      </div>
    </div>
  );
});
DatePickerPopup.displayName = 'DatePickerPopup';

export default DatePickerPopup;
