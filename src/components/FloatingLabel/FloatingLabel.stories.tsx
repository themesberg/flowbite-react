import type { Meta, Story } from '@storybook/react';
import type { FloatingLabelProps } from '~/src/components/FloatingLabel/FloatingLabel';
import { FloatingLabel } from './FloatingLabel';

export default {
  title: 'Components/FloatingLabel',
  component: FloatingLabel,
} as Meta;

const Template: Story<FloatingLabelProps> = (args) => <FloatingLabel {...args} />;

export const FilledSuccess = Template.bind({});
FilledSuccess.args = {
  color: 'success',
  variant: 'filled',
  label: 'Label',
};
export const OutlinedSuccess = Template.bind({});
OutlinedSuccess.args = {
  color: 'success',
  variant: 'outlined',
  label: 'Label',
};
export const StandardSuccess = Template.bind({});
StandardSuccess.args = {
  color: 'success',
  variant: 'standard',
  label: 'Label',
};
export const FilledError = Template.bind({});
FilledError.args = {
  color: 'error',
  variant: 'filled',
  label: 'Label',
};
export const OutlinedError = Template.bind({});
OutlinedError.args = {
  color: 'error',
  variant: 'outlined',
  label: 'Label',
};
export const StandardError = Template.bind({});

StandardError.args = {
  color: 'error',
  variant: 'standard',
  label: 'Label',
};

export const SmallFilled = Template.bind({});
SmallFilled.args = {
  variant: 'filled',
  label: 'Small Filled',
  sizing: 'sm',
};
export const SmallOutlined = Template.bind({});
SmallOutlined.args = {
  variant: 'outlined',
  label: 'Small Outlined',
  sizing: 'sm',
};

export const SmallStandard = Template.bind({});
SmallStandard.args = {
  variant: 'standard',
  label: 'Small Standard',
  sizing: 'sm',
};

export const HelperText = Template.bind({});
HelperText.args = {
  variant: 'filled',
  label: 'Floating Helper',
  helperText: 'Remember, contributions to this topic should follow our Community Guidelines.',
};
