import { Meta, Story } from '@storybook/react/types-6-0';
import { AvatarGroup, AvatarGroupProps } from '../AvatarGroup';
import { Avatar } from '../Avatar';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => (
  <AvatarGroup {...args}>
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <Avatar img="https://i.pravatar.cc/100" rounded stacked />
    <AvatarGroup.Counter total={99} href="#" />
  </AvatarGroup>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'Default';
DefaultAvatarGroup.args = {};
