import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Tab } from '../components';
import { Tabs } from '../components';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const TabsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default tabs',
      code: (
        <Tabs style="default">
          <Tab active title="Profile" className="m-4">
            Profile content
          </Tab>
          <Tab title="Dashboard" className="m-4">
            Dashboard content
          </Tab>
          <Tab title="Settings" className="m-4">
            Settings content
          </Tab>
          <Tab title="Contacts" className="m-4">
            Contacts content
          </Tab>
          <Tab disabled title="Disabled" className="m-4">
            Disabled content
          </Tab>
        </Tabs>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Tabs with underline',
      code: (
        <Tabs style="underline">
          <Tab title="Profile">Profile content</Tab>
          <Tab active title="Dashboard">
            Dashboard content
          </Tab>
          <Tab title="Settings">Settings content</Tab>
          <Tab title="Contacts">Contacts content</Tab>
          <Tab disabled title="Disabled">
            Disabled content
          </Tab>
        </Tabs>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Tabs with icons',
      code: (
        <Tabs style="underline">
          <Tab title="Profile" icon={HiUserCircle}>
            Profile content
          </Tab>
          <Tab active title="Dashboard" icon={MdDashboard}>
            Dashboard content
          </Tab>
          <Tab title="Settings" icon={HiAdjustments}>
            Settings content
          </Tab>
          <Tab title="Contacts" icon={HiClipboardList}>
            Contacts content
          </Tab>
          <Tab disabled title="Disabled">
            Disabled content
          </Tab>
        </Tabs>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Pills tabs',
      code: (
        <Tabs style="pills">
          <Tab active title="Tab 1">
            Content 2
          </Tab>
          <Tab title="Tab 2">Content 2</Tab>
          <Tab title="Tab 3">Content 3</Tab>
          <Tab title="Tab 4">Content 4</Tab>
          <Tab disabled title="Tab 5">
            Content 5
          </Tab>
        </Tabs>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Full width tabs',
      code: (
        <Tabs style="fullWidth">
          <Tab title="Profile">Profile content</Tab>
          <Tab title="Dashboard">Dashboard content</Tab>
          <Tab title="Settings">Settings content</Tab>
          <Tab title="Invoice">Invoice content</Tab>
        </Tabs>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];
  return <DemoPage examples={examples} />;
};
export default TabsPage;
