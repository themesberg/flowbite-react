import { Meta, Story } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.storyName = 'Default';
DefaultAvatar.args = {
  img: 'https://i.pravatar.cc/100',
};
