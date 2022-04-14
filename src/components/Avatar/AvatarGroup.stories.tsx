import { Meta, Story } from '@storybook/react/types-6-0';
import { Avatar } from '.';
import { AvatarGroupProps } from './AvatarGroup';

export default {
  title: 'Components/Avatar',
  component: Avatar.Group,
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => (
  <Avatar.Group {...args}>
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar.Counter total={99} href="#" />
  </Avatar.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Grouped';
DefaultAvatarGroup.args = {};
