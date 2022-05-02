import { Meta, Story } from '@storybook/react/types-6-0';

import { Navbar, NavbarComponentProps } from '../Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarComponentProps> = (args) => <Navbar {...args} />;

export const DefaultNavbar = Template.bind({});
DefaultNavbar.storyName = 'Default';
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#/navbars">About</Navbar.Link>
        <Navbar.Link href="#/navbars">Services</Navbar.Link>
        <Navbar.Link href="#/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="#/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};
