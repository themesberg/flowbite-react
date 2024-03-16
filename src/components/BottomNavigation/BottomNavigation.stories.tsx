import type { Meta, StoryFn } from '@storybook/react';
import { AiFillHome } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { BottomNavigation, type BottomNavigationProps } from './BottomNavigation';

export default {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
} as Meta;

const Template: StoryFn<BottomNavigationProps> = (args) => (
  <div>
    <BottomNavigation {...args} />
  </div>
);

export const DefaultBottomNav = Template.bind({});
DefaultBottomNav.storyName = 'Default';
DefaultBottomNav.args = {
  children: (
    <>
      <BottomNavigation.Item label="Home" icon={AiFillHome} />
      <BottomNavigation.Item label="Wallet" icon={GiWallet} />
    </>
  ),
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  children: (
    <>
      <BottomNavigation.Item label="Home" icon={AiFillHome} />
      <BottomNavigation.Item label="Wallet" icon={GiWallet} />
    </>
  ),
  bordered: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  children: (
    <>
      <BottomNavigation.Item label="Home" icon={AiFillHome} showTooltip />
      <BottomNavigation.Item label="Wallet" icon={GiWallet} showTooltip />
    </>
  ),
};
