import type { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '.';

import type { ButtonGroupProps } from './ButtonGroup';

export default {
  title: 'Components/Button',
  component: Button.Group,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button color="alternative">Profile</Button>
    <Button color="alternative">Settings</Button>
    <Button color="alternative">Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
