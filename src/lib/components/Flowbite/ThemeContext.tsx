/* eslint-disable react-hooks/rules-of-hooks */
import { FC, ReactNode, createContext, useContext, useState, useEffect } from 'react';
import defaultTheme from '../../theme/default';

export type Mode = string | undefined | 'light' | 'dark';

interface ThemeContextProps {
  theme: any;
  mode?: Mode;
  toggleMode?: () => void | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});

interface ThemeProviderProps {
  children: ReactNode;
  value?: any;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export const useThemeMode = (
  usePreferences: boolean,
): [Mode, React.Dispatch<React.SetStateAction<Mode>> | undefined, (() => void) | undefined] => {
  if (!usePreferences) return [undefined, undefined, undefined];

  const [mode, setMode] = useState<Mode>(undefined);

  const toggleMode = () => {
    if (!mode) return;

    const newMode = mode == 'light' ? 'dark' : 'light';
    document.documentElement.className = '';
    document.documentElement.classList.add(newMode);

    setMode(newMode);
  };

  useEffect(() => {
    const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(window.localStorage.getItem('theme') || (userPreference ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (!mode) return;

    window.localStorage.setItem('theme', mode);
    document.documentElement.classList.add(mode);
  }, [mode]);

  return [mode, setMode, toggleMode];
};
