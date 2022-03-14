import { FC, lazy, Suspense, useState } from 'react';
import {
  HiAnnotation,
  HiBadgeCheck,
  HiBell,
  HiChevronDoubleRight,
  HiClipboardList,
  HiCollection,
  HiCreditCard,
  HiDuplicate,
  HiHome,
  HiMenuAlt1,
} from 'react-icons/hi';
import { BsCreditCard2FrontFill, BsGithub, BsImages } from 'react-icons/bs';
import { FaSpinner } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';

import { DarkThemeToggle, Navbar, Sidebar, SidebarItem, Spinner } from './components';

const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AlertsPage = lazy(() => import('./pages/AlertsPage'));
const AccordionPage = lazy(() => import('./pages/AccordionPage'));
const BadgesPage = lazy(() => import('./pages/BadgesPage'));
const BreadcrumbPage = lazy(() => import('./pages/BreadcrumbPage'));
const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));
const ButtonGroupPage = lazy(() => import('./pages/ButtonGroupPage'));
const CardPage = lazy(() => import('./pages/CardPage'));
const CarouselPage = lazy(() => import('./pages/CarouselPage'));
const ListGroupPage = lazy(() => import('./pages/ListGroupPage'));
const SpinnersPage = lazy(() => import('./pages/SpinnersPage'));
const TooltipsPage = lazy(() => import('./pages/TooltipsPage'));

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
        icon: HiCollection,
        title: 'Buttons',
        href: '/buttons',
      },
      {
        group: false,
        icon: HiDuplicate,
        title: 'Button group',
        href: '/button-group',
      },
      {
        group: false,
        icon: BsCreditCard2FrontFill,
        title: 'Card',
        href: '/card',
      },
      {
        group: false,
        icon: BsImages,
        title: 'Carousel',
        href: '/carousel',
      },
      {
        group: false,
        icon: HiClipboardList,
        title: 'List group',
        href: '/list-group',
      },
      {
        group: false,
        icon: FaSpinner,
        title: 'Spinners',
        href: '/spinners',
      },
      {
        group: false,
        icon: HiAnnotation,
        title: 'Tooltips',
        href: '/tooltips',
      },
    ],
  ];

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Navbar>
        <div className="flex items-center">
          <HiMenuAlt1
            className="mr-6 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400"
            onClick={() => setCollapsed(!collapsed)}
          />
          <span className="text-xl font-semibold dark:text-white">Flowbite React Components</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="https://github.com/bacali95/flowbite-react"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="h-5 w-5" />
          </a>
          <DarkThemeToggle />
        </div>
      </Navbar>
      <div className="flex h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar collapsed={collapsed} itemsGroups={itemsGroups} />
        <main className="flex-1 overflow-auto p-4">
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <Routes>
              <Route path="" element={<DashboardPage />} />
              <Route path="alerts" element={<AlertsPage />} />
              <Route path="accordion" element={<AccordionPage />} />
              <Route path="badges" element={<BadgesPage />} />
              <Route path="breadcrumb" element={<BreadcrumbPage />} />
              <Route path="buttons" element={<ButtonsPage />} />
              <Route path="button-group" element={<ButtonGroupPage />} />
              <Route path="card" element={<CardPage />} />
              <Route path="carousel" element={<CarouselPage />} />
              <Route path="list-group" element={<ListGroupPage />} />
              <Route path="spinners" element={<SpinnersPage />} />
              <Route path="tooltips" element={<TooltipsPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
};
