import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { HiArrowLeft, HiArrowRight, HiCalendar } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '..';
import { TextInput, type FlowbiteTextInputTheme, type TextInputProps } from '..';
import { useTheme } from '../..';
import { mergeDeep } from '../../helpers/merge-deep';
import { DatepickerContext } from './DatepickerContext';
import type { FlowbiteDatepickerViewsDaysTheme } from './Views/Days';
import { DatepickerViewsDays } from './Views/Days';
import { DatepickerViewsDecades, type FlowbiteDatepickerViewsDecadesTheme } from './Views/Decades';
import { DatepickerViewsMonth, type FlowbiteDatepickerViewsMonthsTheme } from './Views/Months';
import { DatepickerViewsYears, type FlowbiteDatepickerViewsYearsTheme } from './Views/Years';
import { Views, WeekStart, addMonths, addYears, getFormattedDate, isDateInRange, startOfYearPeriod } from './helpers';

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
    inline: string;
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
  inline?: boolean;
  autoHide?: boolean;
  showClearButton?: boolean;
  labelClearButton?: string;
  showTodayButton?: boolean;
  labelTodayButton?: string;
  defaultDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  language?: string;
  weekStart?: WeekStart;
  theme?: DeepPartial<FlowbiteDatepickerTheme>;
}

export const Datepicker: FC<DatepickerProps> = ({
  title,
  open,
  inline = false,
  autoHide = true, // Hide when selected the day
  showClearButton = true,
  labelClearButton = 'Clear',
  showTodayButton = true,
  labelTodayButton = 'Today',
  defaultDate = new Date(),
  minDate,
  maxDate,
  language = 'en',
  weekStart = WeekStart.Sunday,
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

  const changeSelectedDate = (date: Date, useAutohide: boolean) => {
    if (!isDateInRange(date, minDate, maxDate)) return;

    setSelectedDate(date);

    if (autoHide && view === Views.Days && useAutohide == true && !inline) {
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
        return <DatepickerViewsDays weekStart={weekStart} minDate={minDate} maxDate={maxDate} />;
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
      const clickedInsideDatepicker = datepickerRef?.current?.contains(event.target as Node);
      const clickedInsideInput = inputRef?.current?.contains(event.target as Node);

      if (!clickedInsideDatepicker && !clickedInsideInput) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, datepickerRef, setIsOpen]);

  return (
    <DatepickerContext.Provider
      value={{ language, selectedDate, isOpen, setIsOpen, view, setView, setSelectedDate, changeSelectedDate }}
    >
      <div className={twMerge(theme.root.base, className)}>
        {!inline && (
          <TextInput
            theme={theme.root.input}
            icon={HiCalendar}
            ref={inputRef}
            onFocus={() => setIsOpen(true)}
            value={selectedDate && getFormattedDate(language, selectedDate)}
            readOnly
            {...props}
          />
        )}
        {(isOpen || inline) && (
          <div ref={datepickerRef} className={twMerge(theme.popup.root.base, inline && theme.popup.root.inline)}>
            <div className={theme.popup.root.inner}>
              <div className={theme.popup.header.base}>
                {title && <div className={theme.popup.header.title}>{title}</div>}
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
                      {labelTodayButton}
                    </button>
                  )}
                  {showClearButton && (
                    <button
                      className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear)}
                      onClick={() => changeSelectedDate(defaultDate, true)}
                    >
                      {labelClearButton}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DatepickerContext.Provider>
  );
};

Datepicker.displayName = 'Datepicker';
