/* eslint-disable react-hooks/rules-of-hooks */
import type { FC, ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
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

export const useThemeMode = (): [Mode, React.Dispatch<React.SetStateAction<Mode>>, () => void] => {
  const userPreferenceIsDark = () => windowExists() && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const getPrefersColorScheme = (): Mode => (userPreferenceIsDark() ? 'dark' : 'light');
  const onToggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    setModeState(newMode);
  };
  const { mode: contextMode, toggleMode = onToggleMode } = useContext(ThemeContext);
  const [mode, setModeState] = useState<Mode>(contextMode ? contextMode : getPrefersColorScheme());
  const setMode = useCallback((mode: Mode) => {
    if (!windowExists()) {
      return;
    }

    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    if (contextMode) {
      setMode(contextMode);
      setModeState(contextMode);
    }
  }, [contextMode, setMode, setModeState]);

  return [mode, setModeState, toggleMode];
};
