import { Meta, Story } from '@storybook/react/types-6-0';

import { Tabs, TabsComponent, TabsProps } from '.';

export default {
  title: 'Components/Tabs',
  component: TabsComponent,
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <Tabs.Group {...args}>
    <Tabs.Item title="Profile">Profile content</Tabs.Item>
    <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
    <Tabs.Item title="Settings">Settings content</Tabs.Item>
    <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
    <Tabs.Item disabled title="Disabled">
      Disabled content
    </Tabs.Item>
  </Tabs.Group>
);

export const DefaultTabs = Template.bind({});
DefaultTabs.storyName = 'Default';
DefaultTabs.args = {
  className: 'bg-white rounded-lg dark:bg-gray-800 dark:text-white',
};
