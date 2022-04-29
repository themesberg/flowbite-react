import { Meta, Story } from '@storybook/react/types-6-0';

import { Badge, BadgeProps } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <div className="flex">
    <Badge {...args} />
  </div>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.storyName = 'Default';

DefaultBadge.args = {
  children: 'Default',
};
