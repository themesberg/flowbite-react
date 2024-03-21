'use client';

import type { CodeData } from '~/components/code-demo';
import { AiFillHome } from 'react-icons/ai';
import { GiWallet, GiSettingsKnobs } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { BottomNavigation } from '~/src';

const code = `
'use client';

import { BottomNavigation } from 'flowbite-react';

function Component() {
  return (
    <BottomNavigation bordered>
      <BottomNavigation.Item label="Home" icon={AiFillHome} />
      <BottomNavigation.Item label="Wallet" icon={GiWallet} />
      <BottomNavigation.Item label="Settings" icon={GiSettingsKnobs} />
      <BottomNavigation.Item label="Profile" icon={CgProfile} />
    </BottomNavigation>
  )
}
`;

function Component() {
  return (
    <div className="relative bottom-0 h-20">
      <BottomNavigation
        theme={{
          root: {
            base: 'absolute bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600',
          },
        }}
        bordered
      >
        <BottomNavigation.Item label="Home" icon={AiFillHome} />
        <BottomNavigation.Item label="Wallet" icon={GiWallet} />
        <BottomNavigation.Item label="Settings" icon={GiSettingsKnobs} />
        <BottomNavigation.Item label="Profile" icon={CgProfile} />
      </BottomNavigation>
    </div>
  );
}

export const withBorder: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  githubSlug: 'bottomNavigation/bottomNavigation.withBorder.tsx',
  component: <Component />,
};
