import type { Meta, StoryFn } from '@storybook/react';
import type { IndicatorProps } from './Indicator';
import { Indicator } from './Indicator';

export default {
  title: 'Components/Indicator',
  component: Indicator,
} as Meta;

const Template: StoryFn<IndicatorProps> = (args) => <Indicator {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: <>Shift</>,
};
