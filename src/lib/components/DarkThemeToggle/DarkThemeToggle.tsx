import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { ThemeContext, useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteDarkThemeToggleTheme {
  root: FlowbiteDarkThemeToggleRootTheme;
}

export interface FlowbiteDarkThemeToggleRootTheme {
  base: string;
  icon: string;
}

export interface DarkThemeToggleProps extends ComponentProps<'button'> {
  theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.darkThemeToggle, customTheme);

  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <button
      className={classNames(theme.root.base, className)}
      data-testid="dark-theme-toggle"
      onClick={toggleMode}
      type="button"
      aria-label="Toggle dark mode"
      {...props}
    >
      {mode === 'dark' ? (
        <HiSun aria-label="Currently dark mode" className={theme.root.icon} />
      ) : (
        <HiMoon aria-label="Currently light mode" className={theme.root.icon} />
      )}
    </button>
  );
};
