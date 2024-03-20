import type { Meta, StoryFn } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => {
  return (
    <div {...args}>
      <Skeleton />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};
