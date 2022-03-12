import { FC, useState } from 'react';
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronDoubleRightIcon,
  CreditCardIcon,
  DuplicateIcon,
  MenuAlt1Icon,
  TemplateIcon,
} from '@heroicons/react/solid';
import { Route, Routes } from 'react-router-dom';

import { DarkThemeToggle, Navbar, Sidebar, SidebarItem } from './components';
import { AlertsPage } from './pages/AlertsPage';
import { AccordionPage } from './pages/AccordionPage';
import { BadgesPage } from './pages/BadgesPage';
import { BreadcrumbPage } from './pages/BreadcrumbPage';
import { ButtonsPage } from './pages/ButtonsPage';

export const Dashboard: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        group: false,
        icon: TemplateIcon,
        title: 'Dashboard',
        href: '/',
        label: '1',
      },
      {
        group: false,
        icon: BellIcon,
        title: 'Alerts',
        href: '/alerts',
      },
      {
        group: false,
        icon: CreditCardIcon,
        title: 'Accordion',
        href: '/accordion',
      },
      {
        group: false,
        icon: BadgeCheckIcon,
        title: 'Badges',
        href: '/badges',
      },
      {
        group: false,
        icon: ChevronDoubleRightIcon,
        title: 'Breadcrumb',
        href: '/breadcrumb',
      },
      {
        group: false,
        icon: DuplicateIcon,
        title: 'Buttons',
        href: '/buttons',
      },
    ],
  ];

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Navbar>
        <div className="flex items-center">
          <MenuAlt1Icon
            className="w-6 h-6 mr-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="text-xl font-semibold dark:text-white">Flowbite React Components</span>
        </div>
        <DarkThemeToggle />
      </Navbar>
      <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="alerts" element={<AlertsPage />} />
            <Route path="accordion" element={<AccordionPage />} />
            <Route path="badges" element={<BadgesPage />} />
            <Route path="breadcrumb" element={<BreadcrumbPage />} />
            <Route path="buttons" element={<ButtonsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
