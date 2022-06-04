import type { FC } from 'react';
import { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from '../Flowbite/ThemeContext';

export const DarkThemeToggle: FC = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <button
      className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      data-testid="dark-theme-toggle"
      onClick={toggleMode}
      type="button"
    >
      <span className="sr-only">Toggle dark mode</span>
      {mode === 'dark' ? (
        <HiSun className="h-5 w-5" data-testid="dark-theme-toggle-disabled" />
      ) : (
        <HiMoon className="h-5 w-5" data-testid="dark-theme-toggle-enabled" />
      )}
    </button>
  );
};
