import { createContext, useContext } from 'react';
import type { Views } from './helpers';

type DatepickerContextProps = {
  language: string;
  selectedDate: Date;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  view: Views;
  setView: (value: Views) => void;
  setSelectedDate: (date: Date) => void;
  changeSelectedDate: (action: 'prev' | 'next' | 'date' | 'today', date: Date) => void;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  // showSelectedDate: boolean;
  // setShowSelectedDate: Dispatch<SetStateAction<boolean>>;
  // selectedMonth: number;
  // selectedYear: number;
  // getFormattedDate: (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions) => string;
};

export const DatepickerContext = createContext<DatepickerContextProps | undefined>(undefined);

export function useDatePickerContext(): DatepickerContextProps {
  const context = useContext(DatepickerContext);

  if (!context) {
    throw new Error('useDatePickerContext should be used withing the DatePickerContext provider!');
  }

  return context;
}

// const contextProps = {
//   options: {},
//   view: 'days',
//   setView: () => {
//     // do nothing
//   },
//   show: false,
//   setShow: () => {
//     // do nothing
//   },
//   selectedDate: new Date(),
//   changeSelectedDate: () => {
//     // do nothing
//   },
//   showSelectedDate: true,
//   setShowSelectedDate: () => {
//     // do nothing
//   },
//   selectedMonth: 0,
//   selectedYear: 0,
//   getFormattedDate: () => '',
// });

// interface IDatePickerProviderProps {
//   children: ReactElement;
//   options?: IOptions;
//   onChange?: (date: Date) => void;
//   show: boolean;
//   setShow: (show: boolean) => void;
//   selectedDateState?: [Date, (date: Date) => void];
// }

// const DatePickerProvider = ({
//   children,
//   options: customOptions,
//   onChange,
//   show,
//   setShow,
//   selectedDateState,
// }: IDatePickerProviderProps) => {
//   const options = { ...defaultOptions, ...customOptions };
//   const [view, setView] = useState<Views>('days');
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [selectedDate, setSelectedDate] = selectedDateState ?? useState<Date>(options?.defaultDate || new Date());
//   const [showSelectedDate, setShowSelectedDate] = useState<boolean>(true);
//   const selectedMonth = selectedDate.getMonth();
//   const selectedYear = selectedDate.getFullYear();

//   const changeSelectedDate = (action: 'prev' | 'next' | 'date' | 'today', date: Date) => {
//     if (options?.maxDate && date > options.maxDate) return;
//     if (options?.minDate && date < options.minDate) return;
//     setSelectedDate(date);
//     setShowSelectedDate(true);
//     if (options?.autoHide && view === 'days' && action === 'date') setShow(false);
//     if (onChange) onChange(date);
//   };

//   const getFormattedDate = (date: Date | number, formatOptions?: Intl.DateTimeFormatOptions) =>
//     formatDate(options?.language ? options?.language : 'en', date, formatOptions);

//   return (
//     <DatePickerContext.Provider
//       value={{
//         options,
//         view,
//         setView,
//         show,
//         setShow,
//         selectedDate,
//         changeSelectedDate,
//         showSelectedDate,
//         setShowSelectedDate,
//         selectedMonth,
//         selectedYear,
//         getFormattedDate,
//       }}
//     >
//       {children}
//     </DatePickerContext.Provider>
//   );
// };

// export default DatePickerProvider;
