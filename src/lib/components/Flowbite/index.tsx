import { FC, HTMLAttributes, useLayoutEffect, useMemo } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import { ThemeContext } from '../../contexts/ThemeContext';
import { mergeDeep } from '../../helpers/mergeDeep';
import defaultTheme from '../../theme/default';

interface FlowbiteProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: any;
  dark?: boolean;
  usePreferences?: boolean;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme: customTheme, dark, usePreferences = true }) => {
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences);

  const mergedTheme = mergeDeep(defaultTheme, customTheme);

  useLayoutEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }
      document.documentElement.classList.add('dark');
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
