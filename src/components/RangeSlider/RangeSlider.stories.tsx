import type { Meta, Story } from '@storybook/react';
import { theme } from '~/src';
import type { RangeSliderProps } from './RangeSlider';
import { RangeSlider } from './RangeSlider';

export default {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex w-1/2 flex-col">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    sizing: {
      options: Object.keys(theme.rangeSlider.field.input.sizes),
      control: { type: 'select' },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />;

export const DefaultRangeSlider = Template.bind({});
DefaultRangeSlider.storyName = 'RangeSlider';
DefaultRangeSlider.args = {};
