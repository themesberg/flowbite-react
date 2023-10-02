import type { CustomFlowbiteTheme } from '~/src/components/Flowbite';
import { ThemeClientInit } from './client';
import { ThemeServerInit } from './server';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ThemeInit({ theme }: Props) {
  return (
    <>
      <ThemeServerInit theme={theme} />
      <ThemeClientInit theme={theme} />
    </>
  );
}
