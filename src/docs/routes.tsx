import type { ComponentProps, FC, ReactNode } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiNotification } from 'react-icons/bi';
import { BsCreditCard2FrontFill, BsImages } from 'react-icons/bs';
import { FaBars, FaSpinner } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';
import {
  HiAnnotation,
  HiArrowCircleDown,
  HiBadgeCheck,
  HiBell,
  HiChevronDoubleRight,
  HiClipboardList,
  HiCollection,
  HiCreditCard,
  HiDeviceTablet,
  HiDuplicate,
  HiHome,
  HiLogout,
  HiMinus,
  HiOutlineChevronDoubleRight,
  HiOutlineClock,
  HiPencilAlt,
  HiStar,
  HiTable,
  HiUser,
} from 'react-icons/hi';
import { MdColorLens, MdTab } from 'react-icons/md';
import AccordionPage from './pages/AccordionPage';
import AlertsPage from './pages/AlertsPage';
import AvatarPage from './pages/AvatarPage';
import BadgesPage from './pages/BadgesPage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import ButtonGroupPage from './pages/ButtonGroupPage';
import ButtonsPage from './pages/ButtonsPage';
import CardPage from './pages/CardPage';
import CarouselPage from './pages/CarouselPage';
import DashboardPage from './pages/DashboardPage';
import DrawerPage from './pages/DrawerPage';
import DropdownPage from './pages/DropdownPage';
import FooterPage from './pages/FooterPage';
import FormsPage from './pages/FormsPage';
import ListGroupPage from './pages/ListGroupPage';
import ModalPage from './pages/ModalPage';
import NavbarPage from './pages/NavbarPage';
import PaginationPage from './pages/PaginationPage';
import ProgressPage from './pages/ProgressPage';
import RatingPage from './pages/RatingPage';
import SidebarPage from './pages/SidebarPage';
import SpinnersPage from './pages/SpinnersPage';
import TablePage from './pages/TablePage';
import TabsPage from './pages/TabsPage';
import ThemePage from './pages/ThemePage';
import TimelinePage from './pages/TimelinePage';
import ToastPage from './pages/ToastPage';
import TooltipsPage from './pages/TooltipsPage';

export type ComponentCardItem = {
  className: string;
  images: { light: string; dark: string };
};

export type RouteProps = {
  title: string;
  icon: FC<ComponentProps<'svg'>>;
  href: string;
  component: ReactNode;
  group: boolean;
  card?: ComponentCardItem;
};

export const routes: RouteProps[] = [
  {
    title: 'Dashboard',
    icon: HiHome,
    href: '/',
    component: <DashboardPage />,
    group: false,
  },
  {
    title: 'Alerts',
    icon: HiBell,
    href: '/alerts',
    component: <AlertsPage />,
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'alerts-light.svg', dark: 'alerts-dark.svg' },
    },
  },
  {
    title: 'Accordion',
    icon: HiCreditCard,
    href: '/accordion',
    component: <AccordionPage />,
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'accordion-light.svg', dark: 'accordion-dark.svg' },
    },
  },
  {
    title: 'Avatar',
    icon: HiUser,
    href: '/avatar',
    component: <AvatarPage />,
    group: false,
    card: {
      className: 'w-40',
      images: { light: 'avatar-light.svg', dark: 'avatar-dark.svg' },
    },
  },
  {
    title: 'Badges',
    icon: HiBadgeCheck,
    href: '/badges',
    component: <BadgesPage />,
    group: false,
    card: {
      className: 'w-28',
      images: { light: 'badges-light.svg', dark: 'badges-dark.svg' },
    },
  },
  {
    title: 'Breadcrumb',
    icon: HiChevronDoubleRight,
    href: '/breadcrumb',
    component: <BreadcrumbPage />,
    group: false,
    card: {
      className: 'w-64',
      images: { light: 'breadcrumb-light.svg', dark: 'breadcrumb-dark.svg' },
    },
  },
  {
    title: 'Buttons',
    icon: HiCollection,
    href: '/buttons',
    component: <ButtonsPage />,
    group: false,
    card: {
      className: 'w-24',
      images: { light: 'buttons.svg', dark: 'buttons.svg' },
    },
  },
  {
    title: 'Button group',
    icon: HiDuplicate,
    href: '/button-group',
    component: <ButtonGroupPage />,
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'button-group-light.svg', dark: 'button-group-dark.svg' },
    },
  },
  {
    title: 'Card',
    icon: BsCreditCard2FrontFill,
    href: '/card',
    component: <CardPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'card-light.svg', dark: 'card-dark.svg' },
    },
  },
  {
    title: 'Carousel',
    icon: BsImages,
    href: '/carousel',
    component: <CarouselPage />,
    group: false,
    card: {
      className: 'w-48',
      images: { light: 'carousel-light.svg', dark: 'carousel-dark.svg' },
    },
  },
  {
    title: 'Dropdown',
    icon: HiArrowCircleDown,
    href: '/dropdown',
    component: <DropdownPage />,
    group: false,
    card: {
      className: 'w-28',
      images: { light: 'dropdown-light.svg', dark: 'dropdown-dark.svg' },
    },
  },
  {
    title: 'Forms',
    icon: HiPencilAlt,
    href: '/forms',
    component: <FormsPage />,
    group: false,
    card: {
      className: 'w-40',
      images: { light: 'forms-light.svg', dark: 'forms-dark.svg' },
    },
  },
  {
    title: 'Footer',
    icon: HiMinus,
    href: '/footer',
    component: <FooterPage />,
    group: false,
    card: {
      className: 'w-40',
      images: { light: 'footer-light.svg', dark: 'footer-dark.svg' },
    },
  },
  {
    title: 'List group',
    icon: HiClipboardList,
    href: '/list-group',
    component: <ListGroupPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'list-group-light.svg', dark: 'list-group-dark.svg' },
    },
  },
  {
    title: 'Modal',
    icon: HiDeviceTablet,
    href: '/modal',
    component: <ModalPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'modal-light.svg', dark: 'modal-dark.svg' },
    },
  },
  {
    title: 'Drawer',
    icon: HiLogout,
    href: '/drawer',
    component: <DrawerPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'drawer-light.svg', dark: 'drawer-dark.svg' },
    },
  },
  {
    title: 'Navbars',
    icon: FiNavigation,
    href: '/navbars',
    component: <NavbarPage />,
    group: false,
    card: {
      className: 'w-56',
      images: { light: 'navbars-light.svg', dark: 'navbars-dark.svg' },
    },
  },
  {
    title: 'Pagination',
    icon: HiOutlineChevronDoubleRight,
    href: '/pagination',
    component: <PaginationPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'pagination-light.svg', dark: 'pagination-dark.svg' },
    },
  },
  {
    title: 'Progress',
    icon: AiOutlineLoading3Quarters,
    href: '/progress',
    component: <ProgressPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'progress-light.svg', dark: 'progress-dark.svg' },
    },
  },
  {
    title: 'Rating',
    icon: HiStar,
    href: '/rating',
    component: <RatingPage />,
    group: false,
    card: {
      className: 'w-40',
      images: { light: 'rating-light.svg', dark: 'rating-dark.svg' },
    },
  },
  {
    title: 'Sidebar',
    icon: FaBars,
    href: '/sidebar',
    component: <SidebarPage />,
    group: false,
    card: {
      className: 'w-16',
      images: { light: 'sidebar-light.svg', dark: 'sidebar-dark.svg' },
    },
  },
  {
    title: 'Spinners',
    icon: FaSpinner,
    href: '/spinners',
    component: <SpinnersPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'spinners-light.svg', dark: 'spinners-dark.svg' },
    },
  },
  {
    title: 'Tables',
    icon: HiTable,
    href: '/tables',
    component: <TablePage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'tables-light.svg', dark: 'tables-dark.svg' },
    },
  },
  {
    title: 'Tabs',
    icon: MdTab,
    href: '/tabs',
    component: <TabsPage />,
    group: false,
    card: {
      className: 'w-64',
      images: { light: 'tabs-light.svg', dark: 'tabs-dark.svg' },
    },
  },
  {
    title: 'Timeline',
    icon: HiOutlineClock,
    href: '/timeline',
    component: <TimelinePage />,
    group: false,
    card: {
      className: 'w-24',
      images: { light: 'timeline-light.svg', dark: 'timeline-dark.svg' },
    },
  },
  {
    title: 'Theme',
    icon: MdColorLens,
    href: '/theme',
    component: <ThemePage />,
    group: false,
    card: {
      className: 'w-64',
      images: { light: 'tabs-light.svg', dark: 'tabs-dark.svg' },
    },
  },
  {
    title: 'Toast',
    icon: BiNotification,
    href: '/toast',
    component: <ToastPage />,
    group: false,
    card: {
      className: 'w-36',
      images: { light: 'toast-light.svg', dark: 'toast-dark.svg' },
    },
  },
  {
    title: 'Tooltips',
    icon: HiAnnotation,
    href: '/tooltips',
    component: <TooltipsPage />,
    group: false,
    card: {
      className: 'w-24',
      images: { light: 'tooltips-light.svg', dark: 'tooltips-dark.svg' },
    },
  },
];
