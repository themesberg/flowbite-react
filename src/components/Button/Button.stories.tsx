import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Buttons',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
};
