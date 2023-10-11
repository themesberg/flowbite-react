import type { CustomFlowbiteTheme } from '../../components/Flowbite';
import type { ThemeMode } from '../../helpers/use-theme-mode';
import { ThemeClientInit } from './client';
import { ThemeModeInit } from './mode';
import { ThemeServerInit } from './server';

interface Props {
  mode?: ThemeMode;
  theme?: CustomFlowbiteTheme;
}

export function ThemeInit({ mode, theme }: Props) {
  return (
    <>
      <ThemeModeInit mode={mode} />
      <ThemeServerInit theme={theme} />
      <ThemeClientInit theme={theme} />
    </>
  );
}
