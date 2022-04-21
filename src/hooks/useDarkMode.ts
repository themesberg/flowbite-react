/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export const useDarkMode = (
  usePreferences: boolean,
): [Mode, React.Dispatch<React.SetStateAction<Mode>> | null, (() => void) | null] => {
  if (!usePreferences) return [null, null, null];

  const [mode, setMode] = useState<Mode>(null);

  const toggleMode = () => {
    if (!mode) return;
    const newMode = mode == 'light' ? 'dark' : 'light';
    document.documentElement.className = '';
    document.documentElement.classList.add(newMode);
    setMode(newMode);
  };

  useEffect(() => {
    const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(window.localStorage.getItem('theme') || (userPreference ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (!mode) return;

    window.localStorage.setItem('theme', mode);
    document.documentElement.classList.add(mode);
  }, [mode]);

  return [mode, setMode, toggleMode];
};

export default useDarkMode;
