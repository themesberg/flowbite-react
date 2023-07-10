export enum Views {
  Days,
  Months,
  Years,
  Decades,
}

export const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (minDate && maxDate) {
    const minWithoutTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    const maxWithoutTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
    return dateWithoutTime >= minWithoutTime && dateWithoutTime <= maxWithoutTime;
  }

  if (minDate) {
    const minWithoutTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    return dateWithoutTime >= minWithoutTime;
  }

  if (maxDate) {
    const maxWithoutTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
    return dateWithoutTime <= maxWithoutTime;
  }

  return true;
}

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

export const getFormattedDate = (language: string, date: Date, options?: Intl.DateTimeFormatOptions): string => {
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

export const startOfYearPeriod = (date: Date, years: number): number => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
