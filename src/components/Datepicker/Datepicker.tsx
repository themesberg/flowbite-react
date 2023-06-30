import type { FC, ReactNode, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiCalendar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '..';
import { useTheme } from '../..';
// @TODO It would be nice to not depende on TextInput
import { TextInput, type FlowbiteTextInputTheme, type TextInputProps } from '..';
import { mergeDeep } from '../../helpers/merge-deep';
import { DatepickerContext } from './DatepickerContext';
import { getFormattedDate, goToPrevNext, startOfYearPeriod, Views } from './helpers';
import type { FlowbiteDatepickerViewsDaysTheme } from './Views/Days';
import { DatepickerViewsDays } from './Views/Days';
import { DatepickerViewsMonth, type FlowbiteDatepickerViewsMonthsTheme } from './Views/Months';
import { DatepickerViewsYears, type FlowbiteDatepickerViewsYearsTheme } from './Views/Years';

export interface FlowbiteDatepickerTheme {
  root: {
    base: string;
    input?: FlowbiteTextInputTheme;
  };
  popup: FlowbiteDatepickerPopupTheme;
  views: {
    days: FlowbiteDatepickerViewsDaysTheme;
    months: FlowbiteDatepickerViewsMonthsTheme;
    years: FlowbiteDatepickerViewsYearsTheme;
  };
}

export interface FlowbiteDatepickerPopupTheme {
  root: {
    base: string;
    inner: string;
  };
  header: {
    base: string;
    title: string;
    selectors: {
      base: string;
      button: {
        base: string;
        prev: string;
        next: string;
        view: string;
      };
    };
  };
  view: {
    base: string;
  };
  footer: {
    base: string;
    button: {
      base: string;
      today: string;
      clear: string;
    };
  };
}

export interface DatepickerProps extends Omit<TextInputProps, 'theme'> {
  open?: boolean;
  autoHide?: boolean;
  showClearButton?: boolean;
  showTodayButton?: boolean;
  defaultDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  language?: string;
  // selectedDateState?: [Date, (date: Date) => void];
  // onChange?: (date: Date) => void;
  theme?: DeepPartial<FlowbiteDatepickerTheme>;
}

const DatepickerComponent: FC<DatepickerProps> = ({
  title,
  open,
  autoHide = true,
  showClearButton = true,
  showTodayButton = true,
  defaultDate = new Date(),
  minDate,
  maxDate,
  language = 'en',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.datepicker, customTheme);

  const [isOpen, setIsOpen] = useState(open);
  const [view, setView] = useState<Views>(Views.Days);
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);

  const inputRef = useRef<HTMLInputElement>(null);
  const datepickerRef = useRef<HTMLDivElement>(null);

  const refContainsEvent = (ref: RefObject<HTMLInputElement | HTMLDivElement>, event: MouseEvent) =>
    ref.current?.contains(event.target as Node);

  const changeSelectedDate = (action: 'prev' | 'next' | 'date' | 'today', date: Date) => {
    console.log(action);
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const renderView = (type: Views): ReactNode => {
    switch (type) {
      case Views.Decades:
        return 'Decades';
      case Views.Years:
        return <DatepickerViewsYears selectedDate={selectedDate} />;
      case Views.Months:
        return <DatepickerViewsMonth selectedDate={selectedDate} />;
      case Views.Days:
      default:
        return <DatepickerViewsDays startDay={1} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} />;
    }
  };

  const getNextView = (): Views => {
    switch (view) {
      case Views.Days:
        return Views.Months;
      case Views.Months:
        return Views.Years;
      case Views.Years:
        return Views.Decades;
    }
    return view;
  };

  const getViewTitle = (): string => {
    switch (view) {
      case Views.Decades:
        return `${startOfYearPeriod(selectedDate, 100)} - ${startOfYearPeriod(selectedDate, 100) + 90}`;
      case Views.Years:
        return `${startOfYearPeriod(selectedDate, 10)} - ${startOfYearPeriod(selectedDate, 10) + 9}`;
      case Views.Months:
        return getFormattedDate(language, selectedDate, { year: 'numeric' });
      case Views.Days:
      default:
        return getFormattedDate(language, selectedDate, { month: 'long', year: 'numeric' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!inputRef?.current && datepickerRef?.current) return;
      if (!refContainsEvent(inputRef, event) && !refContainsEvent(datepickerRef, event)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', (event: MouseEvent) => handleClickOutside(event));

    return () => {
      document.removeEventListener('mousedown', (event: MouseEvent) => handleClickOutside(event));
    };
  }, [inputRef, datepickerRef, setIsOpen]);

  // when mount set the default date
  useEffect(() => {
    setSelectedDate(defaultDate);
  }, [defaultDate, setSelectedDate]);

  return (
    <DatepickerContext.Provider
      value={{ language, selectedDate, isOpen, setIsOpen, view, setView, setSelectedDate, changeSelectedDate }}
    >
      <TextInput
        className={twMerge(theme.root.base, className)}
        icon={HiCalendar}
        ref={inputRef}
        onFocus={() => setIsOpen(true)}
        value={selectedDate && (selectedDate.getTime() > 0 && true ? getFormattedDate(language, selectedDate) : '')}
        readOnly
        {...props}
      />
      {isOpen && (
        <div ref={datepickerRef} className={theme.popup.root.base}>
          <div className={theme.popup.root.inner}>
            <div className={theme.popup.header.base}>
              {title && <div className={theme.popup.header.title}>Title</div>}
              <div className={theme.popup.header.selectors.base}>
                <button
                  className={twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.prev,
                  )}
                  onClick={() => changeSelectedDate('next', new Date(goToPrevNext(view, selectedDate, 1)))}
                >
                  <HiArrowLeft />
                </button>
                <button
                  className={twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.view,
                  )}
                  onClick={() => setView(getNextView())}
                >
                  {getViewTitle()}
                </button>
                <button
                  className={twMerge(
                    theme.popup.header.selectors.button.base,
                    theme.popup.header.selectors.button.next,
                  )}
                >
                  <HiArrowRight />
                </button>
              </div>
            </div>
            <div className={theme.popup.view.base}>{renderView(view)}</div>
            {(showClearButton || showTodayButton) && (
              <div className={theme.popup.footer.base}>
                {showTodayButton && (
                  <button className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.today)}>
                    Today
                  </button>
                )}
                {showClearButton && (
                  <button className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear)}>
                    Clear
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </DatepickerContext.Provider>
  );
};

export const Datepicker = Object.assign(DatepickerComponent, {});
