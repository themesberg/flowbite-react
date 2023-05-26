import type { Metadata, NextPage } from 'next';
import NavbarPageContent from '.';

export const metadata: Metadata = {
  description:
    'The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns',
  title: 'React Navbar - Flowbite',
};

const NavbarPage: NextPage = () => {
  return <NavbarPageContent />;
};

export default NavbarPage;
