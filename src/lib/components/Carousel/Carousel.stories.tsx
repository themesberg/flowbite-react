import type { Meta, Story } from '@storybook/react/types-6-0';
import type { CarouselProps } from '.';
import { Carousel } from '.';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args}>
    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {};

export const SlideInterval = Template.bind({});
SlideInterval.storyName = 'Slide interval';
SlideInterval.args = {
  slideInterval: 5000,
};

export const Static = Template.bind({});
Static.args = {
  slide: false,
};

export const CustomControls = Template.bind({});
CustomControls.storyName = 'With custom controls';
CustomControls.args = {
  leftControl: '<',
  rightControl: '>',
};

export const WithNoIndicators = Template.bind({});
WithNoIndicators.storyName = 'With no indicators';
WithNoIndicators.args = {
  indicators: false,
};
