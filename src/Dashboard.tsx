import { FC, useState } from 'react';
import {
  BadgeCheckIcon,
  BellIcon,
  ChartPieIcon,
  ChevronDoubleRightIcon,
  CreditCardIcon,
  MenuAlt1Icon,
} from '@heroicons/react/solid';
import { Route, Routes } from 'react-router-dom';

import { DarkThemeToggle, Navbar, Sidebar, SidebarItem } from './components';
import { AlertsPage } from './pages/AlertsPage';
import { AccordionPage } from './pages/AccordionPage';
import { BadgesPage } from './pages/BadgesPage';
import { BreadcrumbPage } from './pages/BreadcrumbPage';

export const Dashboard: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        dropdown: false,
        icon: ChartPieIcon,
        title: 'Dashboard',
        href: '/',
        label: '1',
      },
      {
        dropdown: false,
        icon: BellIcon,
        title: 'Alerts',
        href: '/alerts',
      },
      {
        dropdown: false,
        icon: CreditCardIcon,
        title: 'Accordion',
        href: '/accordion',
      },
      {
        dropdown: false,
        icon: BadgeCheckIcon,
        title: 'Badges',
        href: '/badges',
      },
      {
        dropdown: false,
        icon: ChevronDoubleRightIcon,
        title: 'Breadcrumb',
        href: '/breadcrumb',
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
          </Routes>
        </main>
      </div>
    </div>
  );
};
