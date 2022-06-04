import type { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from '.';
import type { AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'Components/Avatar',
  component: Avatar.Group,
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
    <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
    <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
    <Avatar img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" rounded stacked />
    <Avatar.Counter total={99} href="#" />
  </Avatar.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = {};
