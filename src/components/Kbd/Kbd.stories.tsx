import type { Meta, StoryFn } from '@storybook/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import type { KbdProps } from './Kbd';
import { Kbd } from './Kbd';

export default {
  title: 'Components/Kbd',
  component: Kbd,
} as Meta;

const Template: StoryFn<KbdProps> = (args) => <Kbd {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <>Shift</>,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: MdKeyboardArrowDown,
};
