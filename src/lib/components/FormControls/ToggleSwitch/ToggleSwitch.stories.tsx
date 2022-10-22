import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ToggleSwitchProps } from './ToggleSwitch';
import { ToggleSwitch } from './ToggleSwitch';

export default {
  title: 'Components/FormControls',
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const DefaultToggleSwitch = Template.bind({});
DefaultToggleSwitch.storyName = 'Toggle switch';
DefaultToggleSwitch.args = {};
