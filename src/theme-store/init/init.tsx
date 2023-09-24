import { FlowbiteTheme } from '~/src/components';
import { ClientInit } from './client';
import { ServerInit } from './server';

interface Props {
  theme?: FlowbiteTheme;
}

export function Init({ theme }: Props) {
  return (
    <>
      <ServerInit theme={theme} />
      <ClientInit theme={theme} />
    </>
  );
}
