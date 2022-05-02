import { Meta, Story } from '@storybook/react/types-6-0';

import { Dropdown, DropdownProps } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.storyName = 'Default';
DefaultDropdown.args = {
  title: 'Dropdown example',
  label: 'Dropdown button',
  placement: 'auto',
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};
