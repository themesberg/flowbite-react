export enum Views {
  Days,
  Months,
  Years,
  Decades,
}

export const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && maxDate) {
    return minDate >= date && maxDate <= date;
  }
  if (minDate) {
    return minDate >= date;
  }
  if (maxDate) {
    return maxDate <= date;
  }
  return true;
};

export const getFirstDayOfMonth = (date: Date): Date => {
  const initDate = new Date(date);
  initDate.setDate(1);
  const dayOfWeek = initDate.getDay();

  if (dayOfWeek > 0) {
    initDate.setDate(initDate.getDate() - dayOfWeek + 1);
  }

  return initDate;
};

export const addDays = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

// @TODO There is a better way to do it
export const dayDiff = (day: number, from: number): number => {
  return (day - from + 7) % 7;
};

export const dayOfTheWeekOf = (baseDate: Date, dayOfWeek: number, weekStart = 0): Date => {
  const baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
};

export const addMonths = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + amount);
  return newDate;
};

export const addYears = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + amount);
  return newDate;
};

export const getFormattedDate = (
  language: string,
  date: Date,
  options?: Intl.DateTimeFormatOptions,
): string => {
  let defaultOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
    
  if (options) {
    defaultOptions = options;
  }

  return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};

// @TODO Validate this function
export const startOfYearPeriod = (date: Date, years: number): number => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
