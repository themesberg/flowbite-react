import { Meta, Story } from '@storybook/react/types-6-0';

import { Carousel, CarouselProps } from '.';

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

export const DefaultCarousel = Template.bind({});
DefaultCarousel.storyName = 'Default';
DefaultCarousel.args = {};
