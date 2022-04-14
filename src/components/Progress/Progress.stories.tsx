import { Meta, Story } from '@storybook/react/types-6-0';

import { Progress, ProgressProps } from '.';

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const DefaultProgress = Template.bind({});
DefaultProgress.storyName = 'Default';
DefaultProgress.args = {
  children: 'Progress',
};
