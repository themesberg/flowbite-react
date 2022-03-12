import { FC, useState } from 'react';
import {
  HiBadgeCheck,
  HiBell,
  HiChevronDoubleRight,
  HiCreditCard,
  HiDotsCircleHorizontal,
  HiDuplicate,
  HiHome,
  HiMenuAlt1,
} from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { Route, Routes } from 'react-router-dom';

import { DarkThemeToggle, Navbar, Sidebar, SidebarItem } from './components';
import { AlertsPage } from './pages/AlertsPage';
import { AccordionPage } from './pages/AccordionPage';
import { BadgesPage } from './pages/BadgesPage';
import { BreadcrumbPage } from './pages/BreadcrumbPage';
import { ButtonsPage } from './pages/ButtonsPage';
import { TooltipsPage } from './pages/TooltipsPage';
import { DashboardPage } from './pages/DashboardPage';

export const Root: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        group: false,
        icon: HiHome,
        title: 'Dashboard',
        href: '/',
      },
      {
        group: false,
        icon: HiBell,
        title: 'Alerts',
        href: '/alerts',
      },
      {
        group: false,
        icon: HiCreditCard,
        title: 'Accordion',
        href: '/accordion',
      },
      {
        group: false,
        icon: HiBadgeCheck,
        title: 'Badges',
        href: '/badges',
      },
      {
        group: false,
        icon: HiChevronDoubleRight,
        title: 'Breadcrumb',
        href: '/breadcrumb',
      },
      {
        group: false,
        icon: HiDuplicate,
        title: 'Buttons',
        href: '/buttons',
      },
      {
        group: false,
        icon: HiDotsCircleHorizontal,
        title: 'Tooltips',
        href: '/tooltips',
      },
    ],
  ];

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Navbar>
        <div className="flex items-center">
          <HiMenuAlt1
            className="w-6 h-6 mr-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="text-xl font-semibold dark:text-white">Flowbite React Components</span>
        </div>
        <div className="flex gap-2 items-center">
          <a
            className="cursor-pointer text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            href="https://github.com/bacali95/flowbite-react"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-5 h-5" />
          </a>
          <DarkThemeToggle />
        </div>
      </Navbar>
      <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="" element={<DashboardPage />} />
            <Route path="alerts" element={<AlertsPage />} />
            <Route path="accordion" element={<AccordionPage />} />
            <Route path="badges" element={<BadgesPage />} />
            <Route path="breadcrumb" element={<BreadcrumbPage />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="tooltips" element={<TooltipsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
