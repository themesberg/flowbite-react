import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ButtonProps } from '.';
import { Button } from '.';
import theme from '../../theme/default';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
};
