import type { FC, ReactNode, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiCalendar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '..';
import { useTheme } from '../..';
// @TODO Do we want this dependency?
import { TextInput, type FlowbiteTextInputTheme, type TextInputProps } from '..';
import { mergeDeep } from '../../helpers/merge-deep';
import { DatepickerContext } from './DatepickerContext';
import type { FlowbiteDatepickerViewsDaysTheme } from './Views/Days';
import { DatepickerViewsDays } from './Views/Days';
import { DatepickerViewsDecades, type FlowbiteDatepickerViewsDecadesTheme } from './Views/Decades';
import { DatepickerViewsMonth, type FlowbiteDatepickerViewsMonthsTheme } from './Views/Months';
import { DatepickerViewsYears, type FlowbiteDatepickerViewsYearsTheme } from './Views/Years';
import { Views, addMonths, addYears, getFormattedDate, isDateInRange, startOfYearPeriod } from './helpers';

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
    decades: FlowbiteDatepickerViewsDecadesTheme;
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
  theme?: DeepPartial<FlowbiteDatepickerTheme>;
}

const DatepickerComponent: FC<DatepickerProps> = ({
  title,
  open,
  // @TODO autoHide is missing
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

  const changeSelectedDate = (date: Date, close: boolean) => {
    if (!isDateInRange(date, minDate, maxDate)) return;

    setSelectedDate(date);

    if (autoHide && view === Views.Days && close == true) {
      setIsOpen(false);
    }
  };

  // Render the DatepickerView* node
  const renderView = (type: Views): ReactNode => {
    switch (type) {
      case Views.Decades:
        return <DatepickerViewsDecades />;
      case Views.Years:
        return <DatepickerViewsYears />;
      case Views.Months:
        return <DatepickerViewsMonth />;
      case Views.Days:
      default:
        return <DatepickerViewsDays minDate={minDate} maxDate={maxDate} />;
    }
  };

  // Coordinate the next view based on current view (statemachine-like)
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

  // Get the view title based on active View
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

  // Navigate to prev/next for given view's date by value
  // @TODO This need some work, it can be simplified
  const getViewDatePage = (view: Views, date: Date, value: number): Date => {
    switch (view) {
      case Views.Days:
        return new Date(addMonths(date, value));
      case Views.Months:
        return new Date(addYears(date, value));
      case Views.Years:
        return new Date(addYears(date, value * 10));
      case Views.Decades:
        return new Date(addYears(date, value * 100));
      default:
        return new Date(addYears(date, value * 10));
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

  useEffect(() => {
    console.log(defaultDate, selectedDate);
  }, [defaultDate, selectedDate]);

  return (
    <DatepickerContext.Provider
      value={{ language, selectedDate, isOpen, setIsOpen, view, setView, setSelectedDate, changeSelectedDate }}
    >
      <TextInput
        className={twMerge(theme.root.base, className)}
        icon={HiCalendar}
        ref={inputRef}
        onFocus={() => setIsOpen(true)}
        value={selectedDate && getFormattedDate(language, selectedDate)}
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
                  onClick={() => changeSelectedDate(getViewDatePage(view, selectedDate, -1), false)}
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
                  onClick={() => changeSelectedDate(getViewDatePage(view, selectedDate, 1), false)}
                >
                  <HiArrowRight />
                </button>
              </div>
            </div>
            <div className={theme.popup.view.base}>{renderView(view)}</div>
            {(showClearButton || showTodayButton) && (
              <div className={theme.popup.footer.base}>
                {showTodayButton && (
                  <button
                    className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.today)}
                    onClick={() => changeSelectedDate(new Date(), true)}
                  >
                    Today
                  </button>
                )}
                {showClearButton && (
                  <button
                    className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear)}
                    onClick={() => changeSelectedDate(defaultDate, true)}
                  >
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
