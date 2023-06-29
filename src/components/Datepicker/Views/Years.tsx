import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { addYears, startOfYearPeriod } from '../../../helpers/date';
import { DatePickerContext } from '../DatepickerProvider';

const Years = () => {
  const { selectedDate, showSelectedDate, changeSelectedDate, setView, getFormattedDate, options } =
    useContext(DatePickerContext);
  return (
    <div className="grid w-64 grid-cols-4">
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(selectedDate, 10);
        const year = first - 1 + index * 1;
        return (
          <span
            key={index}
            className={`block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${
              showSelectedDate &&
              selectedDate.getTime() > 0 &&
              Number(getFormattedDate(selectedDate, { year: 'numeric' })) === year
                ? twMerge('bg-blue-700 text-white hover:bg-blue-600', options?.theme?.selected)
                : ''
            } ${
              index == 0 || index == 11
                ? twMerge('text-gray-500', options?.theme?.disabledText)
                : twMerge('text-gray-900', options?.theme?.text)
            }`}
            onClick={() => {
              changeSelectedDate('date', new Date(addYears(selectedDate, year - selectedDate.getFullYear())));
              setView('months');
            }}
          >
            {year}
          </span>
        );
      })}
    </div>
  );
};

export default Years;
