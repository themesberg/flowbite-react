import { FC, useState } from 'react';
import {
  BellIcon,
  ChartPieIcon,
  CreditCardIcon,
  MenuAlt1Icon,
} from '@heroicons/react/solid';
import { Route, Routes } from 'react-router-dom';

import { AlertsPage } from './pages/AlertsPage';
import { AccordionPage } from './pages/AccordionPage';
import { DarkThemeToggle, Navbar, Sidebar, SidebarItem } from './components';

export const Dashboard: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const itemsGroups: SidebarItem[][] = [
    [
      {
        dropdown: false,
        icon: (
          <ChartPieIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ),
        title: 'Dashboard',
        href: '/',
        label: '1',
      },
      {
        dropdown: false,
        icon: (
          <BellIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ),
        title: 'Alerts',
        href: '/alerts',
      },
      {
        dropdown: false,
        icon: (
          <CreditCardIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        ),
        title: 'Accordion',
        href: '/accordion',
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
          <span className="text-xl font-semibold dark:text-white">
            Flowbite React Components
          </span>
        </div>
        <DarkThemeToggle />
      </Navbar>
      <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="alerts" element={<AlertsPage />} />
            <Route path="accordion" element={<AccordionPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
