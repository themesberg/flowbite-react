import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext, useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteDarkThemeToggleTheme {
  base: string;
  icon: string;
}

export type DarkThemeToggleProps = ComponentProps<'button'>;

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({ className, ...props }) => {
  const theme = useTheme().theme.darkThemeToggle;
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <button
      className={classNames(theme.base, className)}
      data-testid="dark-theme-toggle"
      onClick={toggleMode}
      type="button"
      aria-label="Toggle dark mode"
      {...props}
    >
      {mode === 'dark' ? (
        <HiSun aria-label="Currently dark mode" className={theme.icon} />
      ) : (
        <HiMoon aria-label="Currently light mode" className={theme.icon} />
      )}
    </button>
  );
};
