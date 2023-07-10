import { createContext, useContext } from 'react';
import type { Views } from './helpers';

type DatepickerContextProps = {
  language: string;
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
  view: Views;
  setView: (value: Views) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  changeSelectedDate: (date: Date, close: boolean) => void;
};

export const DatepickerContext = createContext<DatepickerContextProps | undefined>(undefined);

export function useDatePickerContext(): DatepickerContextProps {
  const context = useContext(DatepickerContext);

  if (!context) {
    throw new Error('useDatePickerContext should be used within the DatePickerContext provider!');
  }

  return context;
}
