import { action } from '@storybook/addon-actions';
import type { Meta, Story } from '@storybook/react/types-6-0';
import type { DropdownProps } from '.';
import { Dropdown } from '.';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    title: 'Dropdown example',
    label: 'Dropdown button',
    placement: 'auto',
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const WithDivider = Template.bind({});
WithDivider.storyName = 'With divider';
WithDivider.args = {
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
    </>
  ),
};

export const WithHeader = Template.bind({});
WithHeader.storyName = 'With header';
WithHeader.args = {
  children: (
    <>
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
  children: (
    <>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </>
  ),
};

export const ItemClickHandler = Template.bind({});
ItemClickHandler.storyName = 'Item click handlers';
ItemClickHandler.args = {
  children: (
    <>
      <Dropdown.Item onClick={action('Dashboard!')}>Dashboard</Dropdown.Item>
      <Dropdown.Item onClick={action('Settings!')}>Settings</Dropdown.Item>
      <Dropdown.Item onClick={action('Earnings!')}>Earnings</Dropdown.Item>
      <Dropdown.Item onClick={action('Sign out!')}>Sign out</Dropdown.Item>
    </>
  ),
};
