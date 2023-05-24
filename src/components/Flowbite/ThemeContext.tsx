import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { isClient } from '~/src/helpers/is-client';
import { theme } from '~/src/theme';
import type { FlowbiteTheme } from './FlowbiteTheme';

export type Mode = 'light' | 'dark';

export interface ThemeContextProps {
  mode?: Mode;
  theme: FlowbiteTheme;
  toggleMode?: () => void | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme,
});

interface ThemeProviderProps {
  children: ReactNode;
  value: ThemeContextProps;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme: () => ThemeContextProps = () => {
  return useContext(ThemeContext);
};

const prefersColorScheme: () => Mode = () => {
  if (!isClient()) {
    return 'light';
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeMode: () => [Mode, Dispatch<SetStateAction<Mode>>, () => void] = () => {
  const onToggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';

    setModeOnBody(newMode);
    setMode(newMode);
  };

  const setModeOnBody = useCallback((mode: Mode) => {
    if (!isClient()) {
      return;
    }

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const { mode: initialMode, toggleMode = onToggleMode } = useContext(ThemeContext);
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    if (initialMode) {
      setModeOnBody(initialMode);
      setMode(initialMode);
    } else {
      setMode(prefersColorScheme());
    }
  }, [initialMode, setModeOnBody, setMode]);

  return [mode, setMode, toggleMode];
};
