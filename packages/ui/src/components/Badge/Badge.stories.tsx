import type { Meta, StoryFn } from '@storybook/react';
import { HiCheck } from 'react-icons/hi';
import { theme } from '../../theme';
import type { BadgeProps } from './Badge';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      options: Object.keys(theme.badge.root.color),
      control: { type: 'inline-radio' },
    },
    size: {
      options: Object.keys(theme.badge.root.size),
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => (
  <div className="flex items-center">
    <Badge {...args} />
  </div>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.storyName = 'Default';
DefaultBadge.args = {
  children: 'Default',
};

export const BadgeWithIcon = Template.bind({});
BadgeWithIcon.storyName = 'With icon';
BadgeWithIcon.args = {
  color: 'indigo',
  icon: HiCheck,
  children: '2 minutes ago',
};

export const BadgeOnlyIcon = Template.bind({});
BadgeOnlyIcon.storyName = 'Only icon';
BadgeOnlyIcon.args = {
  color: 'green',
  icon: HiCheck,
};

export const BadgeAsLink = Template.bind({});
BadgeAsLink.storyName = 'As link';
BadgeAsLink.args = {
  href: '/badges',
  children: 'Read more →',
};
