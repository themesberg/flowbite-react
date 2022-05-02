import { Meta, Story } from '@storybook/react/types-6-0';

import { Label, LabelProps } from './Label';

export default {
  title: 'Components/FormControls',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.storyName = 'Label';
DefaultLabel.args = {
  children: 'Label',
};
