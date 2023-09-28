import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { theme } from '../../';
import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

const colors = Object.keys(theme.toggleSwitch.toggle.checked.color);

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

const Template: StoryFn<ToggleSwitchProps> = ({ checked, ...args }) => {
  const [switchChecked, setSwitchChecked] = useState(checked);

  const handleChange = () => {
    setSwitchChecked((currentCheck) => !currentCheck);
  };

  return <ToggleSwitch {...args} checked={switchChecked} onChange={handleChange} />;
};

export const DefaultToggleSwitch = Template.bind({});
DefaultToggleSwitch.storyName = 'Toggle switch';
DefaultToggleSwitch.args = {};
DefaultToggleSwitch.argTypes = {
  color: {
    description: 'Control defaults for colors',
    control: {
      type: 'radio',
      options: [...colors],
    },
  },
};

export const SmallToggleSwtich = Template.bind({});
SmallToggleSwtich.storyName = 'Small Toggle switch';
SmallToggleSwtich.args = {
  sizing: 'sm',
  label: 'small toggle switch',
};

export const MediumToggleSwitch = Template.bind({});
MediumToggleSwitch.storyName = 'Medium Toggle switch';
MediumToggleSwitch.args = {
  sizing: 'md',
  label: 'default toggle switch',
};

export const LargeToggleSwitch = Template.bind({});
LargeToggleSwitch.storyName = 'Large Toggle switch';
LargeToggleSwitch.args = {
  sizing: 'lg',
  label: 'large toggle switch',
};
