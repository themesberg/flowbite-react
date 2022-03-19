import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Tab } from '../components';
import { Tabs } from '../components';

const TabsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default tabs',
      code: (
        <Tabs style="default">
          <Tab active title="Profile">
            Profile
          </Tab>
          <Tab title="Dashboard">Dashboard</Tab>
          <Tab title="Settings">Settings</Tab>
          <Tab title="Contacts">Contacts</Tab>
          <Tab disabled title="Disabled">
            Disabled
          </Tab>
        </Tabs>
      ),
    },
    {
      title: 'Tabs with underline',
      code: (
        <Tabs style="underline">
          <Tab title="Profile">Profile</Tab>
          <Tab active title="Dashboard">
            Dashboard
          </Tab>
          <Tab title="Settings">Settings</Tab>
          <Tab title="Contacts">Contacts</Tab>
          <Tab disabled title="Disabled">
            Disabled
          </Tab>
        </Tabs>
      ),
    },
  ];
  return <DemoPage examples={examples} />;
};
export default TabsPage;
