import type { Meta, Story } from '@storybook/react/types-6-0';
import type { TooltipProps } from '.';
import { Tooltip } from '.';
import { Button } from '../Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const DefaultTooltip = Template.bind({});
DefaultTooltip.storyName = 'Default';
DefaultTooltip.args = {
  content: 'Tooltip content',
  placement: 'bottom',
  children: <Button>Default tooltip</Button>,
};

export const TriggerOnClick = Template.bind({});
TriggerOnClick.storyName = 'Trigger on click';
TriggerOnClick.args = {
  content: 'Tooltip content',
  placement: 'bottom',
  trigger: 'click',
  children: <Button>Clickable tooltip</Button>,
};

export const NoArrow = Template.bind({});
NoArrow.storyName = 'No arrow';
NoArrow.args = {
  arrow: false,
  content: 'Tooltip content',
  placement: 'bottom',
  children: <Button>Tooltip with no arrow</Button>,
};

export const SlowAnimation = Template.bind({});
SlowAnimation.storyName = 'Slow animation';
SlowAnimation.args = {
  animation: 'duration-1000',
  content: 'Tooltip content',
  placement: 'bottom',
  children: <Button>Tooltip with slow animation</Button>,
};
