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
      {/* TO DO: move this to tabs.mdx <CodePreview
        code={`const Tabs: FC = () => {
const [activeTab, setActiveTab] = useState<number>(0);
const tabsRef = useRef<TabsRef>(null);

return (

<>
<Tabs.Group
aria-label="Default tabs"
style="default"
ref={tabsRef}
onActiveTabChange={tab => setActiveTab(tab)} >
<Tabs.Item active title="Profile">
Profile content
</Tabs.Item>
<Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
<Tabs.Item title="Settings">Settings content</Tabs.Item>
<Tabs.Item title="Contacts">Contacts content</Tabs.Item>
</Tabs.Group>
<div>Active tab: {activeTab}</div>
<Button.Group>
<Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
Profile
</Button>
<Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
Dashboard
</Button>
<Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
Settings
</Button>
<Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
Contacts
</Button>
</Button.Group>
</>
);
};`}
        title="Set active tab programmatically"
      >
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
          ref={tabsRef}
          onActiveTabChange={(tab: SetStateAction<number>) => setActiveTab(tab)}
        >
          <Tabs.Item active title="Profile">
            Profile content
          </Tabs.Item>
          <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
          <Tabs.Item title="Settings">Settings content</Tabs.Item>
          <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        </Tabs.Group>
        <div>Active tab: {activeTab}</div>
        <Button.Group>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(0)}>
            Profile
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(1)}>
            Dashboard
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(2)}>
            Settings
          </Button>
          <Button color="gray" onClick={() => tabsRef.current?.setActiveTab(3)}>
            Contacts
          </Button>
        </Button.Group>
      </CodePreview> */}
    </DocsContentLayout>
  );
};

export default TabsPage;
