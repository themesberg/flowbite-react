'use client';

import { useEffect, useState } from 'react';

const LS_THEME_MODE = 'flowbite-theme-mode';

// TODO: add `system` as well
export type Mode = 'light' | 'dark';

export const useThemeMode = () => {
  const [mode, setMode] = useState<Mode>(getInitialMode());

  useEffect(() => {
    setModeInLS(mode);
    setModeOnBody(mode);
  }, []);

  /**
   * Toggles  between `light | dark`
   */
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';

    handleSetMode(newMode);
  };

  /**
   * Sets `mode` to a specific value (`light | dark`)
   */
  const handleSetMode = (mode: Mode) => {
    setMode(mode);
    setModeInLS(mode);
    setModeOnBody(mode);
  };

  return { mode, setMode: handleSetMode, toggleMode };
};

const setModeInLS = (mode: Mode) => {
  localStorage.setItem(LS_THEME_MODE, mode);
};

const setModeOnBody = (mode: Mode) => {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const prefersColorScheme: () => Mode = () => {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getInitialMode: () => Mode = () => {
  const LSMode = localStorage.getItem(LS_THEME_MODE) as Mode | undefined;

  return LSMode ?? prefersColorScheme();
};
