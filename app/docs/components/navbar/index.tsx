'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import NavbarDocs from './navbar.mdx';

const NavbarPage: FC = () => (
  <DocsContentLayout
    title="React Navbar - Flowbite"
    description="Use the navbar component to show navigation menu items and links on the top side of your page based on multiple styles and options built with React and Tailwind CSS"
  >
    <NavbarDocs />
  </DocsContentLayout>
);

export default NavbarPage;
