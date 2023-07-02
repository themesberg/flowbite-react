import type { Meta, Story } from '@storybook/react';
import { theme } from '../../';
import type { ButtonProps } from './Button';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: 'inline-radio' },
    },
  },
  args: {
    disabled: false,
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
};
