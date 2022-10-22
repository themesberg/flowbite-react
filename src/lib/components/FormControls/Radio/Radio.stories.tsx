import type { Meta, Story } from '@storybook/react/types-6-0';
import type { RadioProps } from './Radio';
import { Radio } from './Radio';

export default {
  title: 'Components/FormControls',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.storyName = 'Radio';
DefaultRadio.args = {};
