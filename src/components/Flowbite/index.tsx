import { FC, PropsWithChildren, useLayoutEffect, useMemo } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import { ThemeContext } from '../../contexts/ThemeContext';

export type FlowbiteProps = PropsWithChildren<{
  dark?: boolean;
  usePreferences?: boolean;
}>;

export const Flowbite: FC<FlowbiteProps> = ({ children, dark, usePreferences = true }) => {
  const [mode, setMode, toggleMode] = useDarkMode(usePreferences);

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
      mode,
      toggleMode,
    }),
    [mode, toggleMode],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};
