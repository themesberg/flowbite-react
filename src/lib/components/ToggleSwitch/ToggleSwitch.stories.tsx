import type { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import theme from '../../theme/default';
import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

const colors = Object.keys(theme.toggleSwitch.toggle.checked.color);

export default {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = ({ checked, ...args }) => {
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
