import type { Meta, Story } from '@storybook/react/types-6-0';
import type { AvatarProps } from '.';
import { Avatar } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.storyName = 'Default';
DefaultAvatar.args = {
  alt: 'Your avatar',
  img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
};
