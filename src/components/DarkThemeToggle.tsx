import { FC, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

export const DarkThemeToggle: FC = () => {
  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      'theme-toggle-dark-icon',
    );
    const themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon',
    );

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      themeToggleLightIcon?.classList.remove('hidden');
    } else {
      themeToggleDarkIcon?.classList.remove('hidden');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

    const listener = () => {
      // toggle icons inside button
      themeToggleDarkIcon?.classList.toggle('hidden');
      themeToggleLightIcon?.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    };

    themeToggleBtn?.addEventListener('click', listener);

    return () => themeToggleBtn?.removeEventListener('click', listener);
  }, []);

  return (
    <button
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <MoonIcon id="theme-toggle-dark-icon" className="hidden w-5 h-5" />
      <SunIcon id="theme-toggle-light-icon" className="hidden w-5 h-5" />
    </button>
  );
};
