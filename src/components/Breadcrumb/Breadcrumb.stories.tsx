import type { Meta, StoryFn } from '@storybook/react';
import { HiHome } from 'react-icons/hi';
import type { BreadcrumbComponentProps } from './Breadcrumb';
import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: StoryFn<BreadcrumbComponentProps> = (args) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);

export const Default = Template.bind({});

export const SolidBackground = Template.bind({});
SolidBackground.storyName = 'Solid background';
SolidBackground.args = {
  className: 'bg-gray-50 px-5 py-3 dark:bg-gray-800',
};
