"use client";

import { BottomNavigation } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiSettingsKnobs, GiWallet } from "react-icons/gi";
import type { CodeData } from "~/components/code-demo";

const code = `
'use client';

import { BottomNavigation } from "flowbite-react";

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
            base: "absolute bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700",
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
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "bottomNavigation/bottomNavigation.withBorder.tsx",
  component: <Component />,
};
