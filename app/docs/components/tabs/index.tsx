'use client';

import type { FC } from 'react';
import { useRef, useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import type { TabsRef } from '~/src';
import TabsDocs from './tabs.mdx';

const TabsPage: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  const state = {
    activeTab,
    setActiveTab,
    tabsRef,
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
