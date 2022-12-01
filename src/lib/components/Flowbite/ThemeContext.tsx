/* eslint-disable react-hooks/rules-of-hooks */
import type { FC, ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import windowExists from '../../helpers/window-exists';
import defaultTheme from '../../theme/default';
import type { FlowbiteTheme } from './FlowbiteTheme';

export type Mode = 'light' | 'dark';

export interface ThemeContextProps {
  theme: FlowbiteTheme;
  mode?: Mode;
  toggleMode?: () => void | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});

interface ThemeProviderProps {
  children: ReactNode;
  value: ThemeContextProps;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export const useThemeMode = (
  usePreferences: boolean,
): [Mode, React.Dispatch<React.SetStateAction<Mode>>, () => void] => {
  const [mode, setModeState] = useState<Mode>('light');
  const savePreference = (mode: Mode) => localStorage.setItem('theme', mode);
  const getPreference = (): Mode => (localStorage.getItem('theme') as Mode) || getPrefersColorScheme();
  const userPreferenceIsDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const getPrefersColorScheme = (): Mode => (userPreferenceIsDark() ? 'dark' : 'light');
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    setModeState(newMode);
  };
  const setMode = (mode: Mode) => {
    savePreference(mode);
    if (!windowExists()) {
      return;
    }

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
  };
  if (usePreferences) {
    useEffect(() => setModeState(getPreference()), []);
    useEffect(() => setMode(mode), [mode]);
  }

  return [mode, setModeState, toggleMode];
};
