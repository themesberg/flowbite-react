import { Meta, Story } from '@storybook/react/types-6-0';

import { Sidebar } from '.';
import {
  CTASidebarComponent,
  DefaultSidebarComponent,
  DropdownSidebarComponent,
  LogoSidebarComponent,
  SeparatorSidebarComponent,
} from '../../pages/SidebarPage';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story = (args) => <Sidebar {...args} />;

export const DefaultSidebar = Template.bind({});
DefaultSidebar.storyName = 'Default';
DefaultSidebar.args = {
  children: <DefaultSidebarComponent />,
  collapsed: false,
};

export const MultiLevelDropdown = Template.bind({});
MultiLevelDropdown.storyName = 'Multi-level dropdown';
MultiLevelDropdown.args = {
  children: <DropdownSidebarComponent />,
  collapsed: false,
};

export const ContentSeparator = Template.bind({});
ContentSeparator.storyName = 'Content separator';
ContentSeparator.args = {
  children: <SeparatorSidebarComponent />,
  collapsed: false,
};

export const CTAButton = Template.bind({});
CTAButton.storyName = 'CTA button';
CTAButton.args = {
  children: <CTASidebarComponent />,
  collapsed: false,
};

export const LogoBranding = Template.bind({});
LogoBranding.storyName = 'Logo branding';
LogoBranding.args = {
  children: <LogoSidebarComponent />,
  collapsed: false,
};
