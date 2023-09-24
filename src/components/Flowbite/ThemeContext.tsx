import type { Dispatch, SetStateAction } from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { isClient } from '../../helpers/is-client';
import { theme } from '../../theme';
import type { FlowbiteTheme } from './FlowbiteTheme';

export type Mode = 'light' | 'dark';

export interface ThemeContextProps {
  mode?: Mode;
  theme: FlowbiteTheme;
  toggleMode?: (mode?: Mode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme,
});

export const useTheme: () => ThemeContextProps = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme should be used within the ThemeContext provider!');
  }

  return context;
};

const prefersColorScheme: () => Mode = () => {
  if (!isClient()) {
    return 'light';
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeMode: () => [Mode, Dispatch<SetStateAction<Mode>>, () => void] = () => {
  const onToggleMode = (value?: Mode) => {
    const newMode = value ?? (mode === 'dark' ? 'light' : 'dark');

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

  const { mode: initialMode, toggleMode = onToggleMode } = useTheme();
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
