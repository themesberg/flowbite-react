import type { FC, HTMLAttributes } from 'react';
import { useEffect, useMemo } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import defaultTheme from '../../theme/default';
import type { FlowbiteTheme } from './FlowbiteTheme';
import { ThemeContext, useTheme, useThemeMode } from './ThemeContext';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<FlowbiteTheme>;
}

interface FlowbiteProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark } = theme;
  const [mode, setMode, toggleMode] = useThemeMode();

  const mergedTheme = mergeDeep(defaultTheme, customTheme);

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }

      if (windowExists()) {
        document.documentElement.classList.add('dark');
      }
    } else {
      if (setMode != null) {
        setMode('light');
      }

      if (windowExists()) {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export type { FlowbiteTheme } from './FlowbiteTheme';
export { useTheme, useThemeMode };
