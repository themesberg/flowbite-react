import { act, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useThemeMode } from '~/src/helpers/use-theme-mode';
import { getTheme } from '~/src/theme-store';
import { Flowbite } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

describe('Components / Flowbite', () => {
  describe('Flowbite', () => {
    it('should return default values', () => {
      render(
        <Flowbite>
          <TestComponent />
        </Flowbite>,
      );

      const { mode, toggleMode } = themeMode;

      expect(mode).toBe('light');
      expect(toggleMode).not.toBeUndefined();
    });

    it('should return custom theme', () => {
      render(
        <Flowbite theme={{ theme: customTheme }}>
          <TestComponent />
        </Flowbite>,
      );

      const theme = getTheme();
      const mergedTheme = mergeDeep(theme, customTheme);

      expect(theme).toEqual(mergedTheme);
    });

    it('should toggle mode', () => {
      render(
        <Flowbite>
          <TestComponent />
        </Flowbite>,
      );

      const { mode, toggleMode } = themeMode;

      expect(mode).toBe('light');
      expect(documentEl()).not.toHaveClass('dark');

      act(() => {
        if (toggleMode) toggleMode();
      });

      const { mode: mode2 } = themeMode;

      expect(mode2).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });

    it('should return darkmode', () => {
      render(
        <Flowbite theme={{ dark: true }}>
          <TestComponent />
        </Flowbite>,
      );

      const { mode } = themeMode;

      expect(mode).toBe('dark');
      expect(documentEl()).toHaveClass('dark');
    });
  });
});

let themeMode: ReturnType<typeof useThemeMode>;

const TestComponent = () => {
  themeMode = useThemeMode();
  return null;
};

const customTheme = {
  avatar: {
    root: {
      size: {
        xxl: 'h-64 w-64',
      },
    },
  },
};

const documentEl = () => document.documentElement;
