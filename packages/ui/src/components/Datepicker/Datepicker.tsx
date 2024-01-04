"use client";

import type { ForwardRefRenderFunction, ReactNode } from "react";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiCalendar } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { TextInput, type FlowbiteTextInputTheme, type TextInputProps } from "../TextInput";
import { DatepickerContext } from "./DatepickerContext";
import {
  addMonths,
  addYears,
  getFirstDateInRange,
  getFormattedDate,
  isDateEqual,
  startOfYearPeriod,
  Views,
  WeekStart,
} from "./helpers";
import type { FlowbiteDatepickerViewsDaysTheme } from "./Views/Days";
import { DatepickerViewsDays } from "./Views/Days";
import { DatepickerViewsDecades, type FlowbiteDatepickerViewsDecadesTheme } from "./Views/Decades";
import { DatepickerViewsMonth, type FlowbiteDatepickerViewsMonthsTheme } from "./Views/Months";
import { DatepickerViewsYears, type FlowbiteDatepickerViewsYearsTheme } from "./Views/Years";

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

export interface DatepickerRef {
  /**
   * Focus the datepicker input.
   */
  focus: () => void;
  /**
   * Clears the datepicker value back to the defaultDate.
   */
  clear: () => void;
}

export interface DatepickerProps extends Omit<TextInputProps, "theme"> {
  open?: boolean;
  inline?: boolean;
  autoHide?: boolean;
  showClearButton?: boolean;
  labelClearButton?: string;
  showTodayButton?: boolean;
  labelTodayButton?: string;
  defaultValue?: Date;
  minDate?: Date;
  maxDate?: Date;
  language?: string;
  weekStart?: WeekStart;
  theme?: DeepPartial<FlowbiteDatepickerTheme>;
  onSelectedDateChanged?: (date: Date) => void;
  value?: Date | null;
  label?: string;
}

const DatepickerRender: ForwardRefRenderFunction<DatepickerRef, DatepickerProps> = (
  {
    title,
    open,
    inline = false,
    autoHide = true, // Hide when selected the day
    showClearButton = true,
    labelClearButton = "Clear",
    showTodayButton = true,
    labelTodayButton = "Today",
    defaultDate = new Date(),
    minDate,
    maxDate,
    language = "en",
    weekStart = WeekStart.Sunday,
    className,
    theme: customTheme = {},
    onSelectedDateChanged,
  dateValue,
  labelEmptyDate = 'No date selected',
    ...props
  ref,
  },
) => {
  const theme = mergeDeep(getTheme().datepicker, customTheme);

  const effectiveDefaultValue = useMemo(() => {
    return defaultValue ? getFirstDateInRange(defaultValue, minDate, maxDate) : null;
  }, []);

  const effectiveDefaultView = useMemo(() => {
    return defaultValue ? getFirstDateInRange(defaultValue, minDate, maxDate) : new Date();
  }, []);

  const [isOpen, setIsOpen] = useState(open);
  const [view, setView] = useState<Views>(Views.Days);
  // selectedDate is the date selected by the user
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ?? effectiveDefaultValue);
  // viewDate is only for navigation
  const [viewDate, setViewDate] = useState<Date>(value ?? effectiveDefaultView);

  const inputRef = useRef<HTMLInputElement>(null);
  const datepickerRef = useRef<HTMLDivElement>(null);

  // Triggers when user select the date
  const changeSelectedDate = (date: Date | null, useAutohide: boolean) => {
    setSelectedDate(date);

    if (date && onSelectedDateChanged) {
      onSelectedDateChanged(date);
    }

    if (autoHide && view === Views.Days && useAutohide == true && !inline) {
      setIsOpen(false);
    }
  };

  const clearDate = () => {
    changeSelectedDate(defaultDate, true);
    if (defaultDate) {
      setViewDate(defaultDate);
    }
  };

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    clear() {
      clearDate();
    },
  }));

  // Render the DatepickerView* node
  const renderView = (type: Views): ReactNode => {
    switch (type) {
      case Views.Decades:
        return <DatepickerViewsDecades theme={theme.views.decades} />;
      case Views.Years:
        return <DatepickerViewsYears theme={theme.views.years} />;
      case Views.Months:
        return <DatepickerViewsMonth theme={theme.views.months} />;
      case Views.Days:
      default:
        return <DatepickerViewsDays theme={theme.views.days} />;
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
        return `${startOfYearPeriod(viewDate, 100) - 10} - ${startOfYearPeriod(viewDate, 100) + 100}`;
      case Views.Years:
        return `${startOfYearPeriod(viewDate, 10)} - ${startOfYearPeriod(viewDate, 10) + 11}`;
      case Views.Months:
        return getFormattedDate(language, viewDate, { year: "numeric" });
      case Views.Days:
      default:
        return getFormattedDate(language, viewDate, { month: "long", year: "numeric" });
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, datepickerRef, setIsOpen]);

  useEffect(() => {
    if (value !== undefined && value !== selectedDate) {
      setSelectedDate(value);
      value && setViewDate(value);
    }
  }, [value, setSelectedDate, setViewDate, selectedDate]);

  return (
    <DatepickerContext.Provider
      value={{
        theme,
        language,
        minDate,
        maxDate,
        weekStart,
        isOpen,
        setIsOpen,
        view,
        setView,
        viewDate,
        setViewDate,
        selectedDate,
        setSelectedDate,
        changeSelectedDate,
      }}
    >
      <div className={twMerge(theme.root.base, className)}>
        {!inline && (
          <TextInput
            theme={theme.root.input}
            icon={HiCalendar}
            ref={inputRef}
            onFocus={() => {
              if (selectedDate && !isDateEqual(viewDate, selectedDate)) {
                setViewDate(selectedDate);
              }
              setIsOpen(true);
            }}
            value={selectedDate ? getFormattedDate(language, selectedDate) : label}
            readOnly
            defaultValue={effectiveDefaultValue ? getFormattedDate(language, effectiveDefaultValue) : label}
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
                    type="button"
                    className={twMerge(
                      theme.popup.header.selectors.button.base,
                      theme.popup.header.selectors.button.prev,
                    )}
                    onClick={() => setViewDate(getViewDatePage(view, viewDate, -1))}
                  >
                    <HiArrowLeft />
                  </button>
                  <button
                    type="button"
                    className={twMerge(
                      theme.popup.header.selectors.button.base,
                      theme.popup.header.selectors.button.view,
                    )}
                    onClick={() => setView(getNextView())}
                  >
                    {getViewTitle()}
                  </button>
                  <button
                    type="button"
                    className={twMerge(
                      theme.popup.header.selectors.button.base,
                      theme.popup.header.selectors.button.next,
                    )}
                    onClick={() => setViewDate(getViewDatePage(view, viewDate, 1))}
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
                      type="button"
                      className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.today)}
                      onClick={() => {
                        const today = new Date();
                        changeSelectedDate(today, true);
                        setViewDate(today);
                      }}
                    >
                      {labelTodayButton}
                    </button>
                  )}
                  {showClearButton && (
                    <button
                      type="button"
                      className={twMerge(theme.popup.footer.button.base, theme.popup.footer.button.clear)}
                      onClick={() => {
                        changeSelectedDate(null, true);
                      }}
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

export const Datepicker = forwardRef(DatepickerRender);

Datepicker.displayName = "Datepicker";
