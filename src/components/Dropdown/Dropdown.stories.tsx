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
  children: 'Dropdown',
};
