import type { Meta, Story } from '@storybook/react/types-6-0';
import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/FormControls',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.storyName = 'Checkbox';
DefaultCheckbox.args = {};
