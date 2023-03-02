import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { addMonths } from '../../../helpers/date';
import { DatePickerContext } from '../DatepickerProvider';

const Months = () => {
  const { selectedDate, showSelectedDate, changeSelectedDate, getFormattedDate, setView, options } =
    useContext(DatePickerContext);
  return (
    <div className="grid w-64 grid-cols-4">
      {[...Array(12)].map((_month, index) => {
        const month = getFormattedDate(new Date(selectedDate.getFullYear(), index), { month: 'short' });
        return (
          <span
            key={index}
            className={`block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ${
              showSelectedDate &&
              selectedDate.getTime() > 0 &&
              getFormattedDate(selectedDate, { month: 'short' }) === month
                ? twMerge('bg-blue-700 text-white hover:bg-blue-600', options?.theme?.selected)
                : ''
            }`}
            onClick={() => {
              changeSelectedDate('date', new Date(addMonths(selectedDate, index - selectedDate.getMonth())));
              setView('days');
            }}
          >
            {month}
          </span>
        );
      })}
    </div>
  );
};

export default Months;
