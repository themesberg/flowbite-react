import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flowbite } from '../Flowbite';
import { DarkThemeToggle } from './DarkThemeToggle';

export default {
  title: 'Components/DarkThemeToggle',
  component: DarkThemeToggle,
} as Meta;

const Template: Story = (args) => (
  <Flowbite>
    <DarkThemeToggle {...args} />
  </Flowbite>
);

export const DefaultDarkThemeToggle = Template.bind({});
DefaultDarkThemeToggle.storyName = 'Default';
DefaultDarkThemeToggle.args = {};
