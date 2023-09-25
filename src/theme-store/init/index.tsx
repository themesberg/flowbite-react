import type { CustomFlowbiteTheme } from '~/src/components/Flowbite';
import { ClientInit } from './client';
import { ServerInit } from './server';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ThemeInit({ theme }: Props) {
  return (
    <>
      <ServerInit theme={theme} />
      <ClientInit theme={theme} />
    </>
  );
}
