import { describe, expect, it } from 'vitest';
import {
  addDays,
  addMonths,
  addYears,
  dayDiff,
  dayOfTheWeekOf,
  getFirstDayOfMonth,
  getFormattedDate,
  isDateInRange,
  startOfYearPeriod,
} from './helpers';

describe('isDateInRange', () => {
  it('returns true when date is within the range', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    const minDate = new Date(2023, 0, 1); // January 1st, 2023
    const maxDate = new Date(2023, 2, 31); // March 31st, 2023
    expect(isDateInRange(date, minDate, maxDate)).toBe(true);
  });

  it('returns true when only minDate is provided and date is after minDate', () => {
    const date = new Date(2023, 2, 15); // March 15th, 2023
    const minDate = new Date(2023, 0, 1); // January 1st, 2023
    expect(isDateInRange(date, minDate)).toBe(true);
  });

  it('returns true when only maxDate is provided and date is before maxDate', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    const maxDate = new Date(2023, 2, 31); // March 31st, 2023
    expect(isDateInRange(date, undefined, maxDate)).toBe(true);
  });

  it('returns true when no range is provided', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    expect(isDateInRange(date)).toBe(true);
  });

  it('returns false when date is outside the range', () => {
    const date = new Date(2023, 3, 1); // April 1st, 2023
    const minDate = new Date(2023, 0, 1); // January 1st, 2023
    const maxDate = new Date(2023, 2, 31); // March 31st, 2023
    expect(isDateInRange(date, minDate, maxDate)).toBe(false);
  });
});

describe('getFirstDayOfMonth', () => {
  it('returns the first day of the month', () => {
    const date = new Date(2023, 1, 15); // February 15th, 2023
    const firstDayOfMonth = getFirstDayOfMonth(date);
    expect(firstDayOfMonth.getDate()).toBe(1);
  });

  it('returns the first day of the month when the provided date is already the first day', () => {
    const date = new Date(2023, 2, 1); // March 1st, 2023
    const firstDayOfMonth = getFirstDayOfMonth(date);
    expect(firstDayOfMonth.getDate()).toBe(1);
  });

  it('returns the first day of the month when the provided date is a Sunday', () => {
    const date = new Date(2023, 4, 21); // May 21st, 2023 (Sunday)
    const firstDayOfMonth = getFirstDayOfMonth(date);
    expect(firstDayOfMonth.getDate()).toBe(1);
  });

  it('returns the first day of the month when the provided date is a Saturday', () => {
    const date = new Date(2023, 6, 29); // July 29th, 2023 (Saturday)
    const firstDayOfMonth = getFirstDayOfMonth(date);
    expect(firstDayOfMonth.getDate()).toBe(1);
  });
});

describe('addDays', () => {
  it('returns a new date by adding the specified number of days', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toBe(6);
  });

  it('returns a new date by subtracting the specified number of days', () => {
    const date = new Date(2023, 0, 10); // January 10th, 2023
    const newDate = addDays(date, -5);
    expect(newDate.getDate()).toBe(5);
  });

  it('does not modify the original date', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addDays(date, 5);
    expect(date.getDate()).toBe(1);
    expect(newDate.getDate()).toBe(6);
  });
});

describe('dayDiff', () => {
  it('returns the difference between two days of the week', () => {
    expect(dayDiff(2, 5)).toBe(4); // 5 (Fri) to 2 (Tue) = 4
    expect(dayDiff(0, 6)).toBe(1); // 6 (Sun) to 0 (Mon) = 1
    expect(dayDiff(3, 3)).toBe(0); // 3 (Wed) to 3 (Wed) = 0
    expect(dayDiff(1, 4)).toBe(3); // 4 (Thu) to 1 (Tue) = 3
  });
});

describe('dayOfTheWeekOf', () => {
  it('returns the date of the specified day of the week', () => {
    const baseDate = new Date(2023, 0, 15); // January 15th, 2023 (Sun)
    const dayOfWeek = 1; // Monday
    const resultDate = dayOfTheWeekOf(baseDate, dayOfWeek);
    expect(resultDate.getDate()).toBe(16); // January 16th, 2023 (Mon)
  });

  it('returns the date of the specified day of the week when the base date is the same day', () => {
    const baseDate = new Date(2023, 3, 5); // April 5th, 2023 (Wed)
    const dayOfWeek = 3; // Friday
    const resultDate = dayOfTheWeekOf(baseDate, dayOfWeek);
    expect(resultDate.getDate()).toBe(7); // April 7th, 2023 (Fri)
  });

  it('returns the date of the specified day of the week when the base date is before the target day', () => {
    const baseDate = new Date(2023, 6, 30); // July 30th, 2023 (Sun)
    const dayOfWeek = 6; // Saturday
    const resultDate = dayOfTheWeekOf(baseDate, dayOfWeek);
    expect(resultDate.getDate()).toBe(5); // July 5th, 2023 (Wed)
  });

  it('returns the date of the specified day of the week when the weekStart is different', () => {
    const baseDate = new Date(2023, 6, 30); // July 30th, 2023 (Sun)
    const dayOfWeek = 0; // Sunday
    const weekStart = 1; // Monday
    const resultDate = dayOfTheWeekOf(baseDate, dayOfWeek, weekStart);
    expect(resultDate.getDate()).toBe(31); // July 31st, 2023 (Mon)
  });
});

describe('addMonths', () => {
  it('returns a new date by adding the specified number of months', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addMonths(date, 2);
    expect(newDate.getMonth()).toBe(2); // March
  });

  it('returns a new date by subtracting the specified number of months', () => {
    const date = new Date(2023, 2, 10); // March 10th, 2023
    const newDate = addMonths(date, -2);
    expect(newDate.getMonth()).toBe(0); // January
  });

  it('does not modify the original date', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addMonths(date, 2);
    expect(date.getMonth()).toBe(0); // January
    expect(newDate.getMonth()).toBe(3); // March
  });
});

describe('addYears', () => {
  it('returns a new date by adding the specified number of years', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addYears(date, 5);
    expect(newDate.getFullYear()).toBe(2028);
  });

  it('returns a new date by subtracting the specified number of years', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addYears(date, -2);
    expect(newDate.getFullYear()).toBe(2021);
  });

  it('does not modify the original date', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const newDate = addYears(date, 5);
    expect(date.getFullYear()).toBe(2023);
    expect(newDate.getFullYear()).toBe(2028);
  });
});

describe('getFormattedDate', () => {
  it('returns the formatted date string using the default options', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    const formattedDate = getFormattedDate('en', date);
    expect(formattedDate).toBe('January 15, 2023');
  });

  it('returns the formatted date string using the specified options', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const formattedDate = getFormattedDate('en', date, options);
    expect(formattedDate).toBe('Jan 2023');
  });

  it('returns the formatted date string using the specified language', () => {
    const date = new Date(2023, 0, 15); // January 15th, 2023
    const formattedDate = getFormattedDate('pt-BR', date);
    expect(formattedDate).toBe('15 de janeiro de 2023');
  });
});

describe('startOfYearPeriod', () => {
  it('returns the start year period for the given date and years', () => {
    const date = new Date(2023, 7, 1); // August 1st, 2023
    const years = 10;
    const startYearPeriod = startOfYearPeriod(date, years);
    expect(startYearPeriod).toBe(2020);
  });

  it('returns the start year period when the date is already at the start of a year period', () => {
    const date = new Date(2023, 0, 1); // January 1st, 2023
    const years = 5;
    const startYearPeriod = startOfYearPeriod(date, years);
    expect(startYearPeriod).toBe(2020);
  });
});
