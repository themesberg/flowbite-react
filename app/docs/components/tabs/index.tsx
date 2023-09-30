'use client';

import type { FC } from 'react';
import { useRef, useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import type { CustomFlowbiteTheme, TabsRef } from '~/src';
import TabsDocs from './tabs.mdx';

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  const customTheme: CustomFlowbiteTheme['tab'] = {
    tablist: {
      tabitem: {
        styles: {
          default: {
            active: {
              on: 'bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-500',
              off: 'text-gray-500 hover:bg-blue-50 hover:text-blue-600 dark:text-blue-400 dark:hover:bg-blue-800  dark:hover:text-blue-300',
            },
          },
        },
      },
    },
  };

  const state = {
    activeTab,
    setActiveTab,
    tabsRef,
    customTheme,
  };

  return (
    <DocsContentLayout
      title="React Tabs - Flowbite"
      description="Get started with the tabs component from Flowbite React to show a list of tab items where you can switch between them using multiple styles, colors and layouts"
    >
      <TabsDocs {...state} />
    </DocsContentLayout>
  );
};

export default TabsPage;
