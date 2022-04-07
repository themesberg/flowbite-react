import { FC } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../helpers';
import classNames from 'classnames';

type ComponentItem = {
  title: string;
  href: string;
  className: string;
  images: { light: string; dark: string };
};

const DashboardPage: FC = () => {
  const components: ComponentItem[] = [
    {
      title: 'Alerts',
      href: '/alerts',
      className: 'w-56',
      images: { light: 'alerts-light.svg', dark: 'alerts-dark.svg' },
    },
    {
      title: 'Accordion',
      href: '/accordion',
      className: 'w-56',
      images: { light: 'accordion-light.svg', dark: 'accordion-dark.svg' },
    },
    {
      title: 'Badges',
      href: '/badges',
      className: 'w-28',
      images: { light: 'badges-light.svg', dark: 'badges-dark.svg' },
    },
    {
      title: 'Breadcrumb',
      href: '/breadcrumb',
      className: 'w-64',
      images: { light: 'breadcrumb-light.svg', dark: 'breadcrumb-dark.svg' },
    },
    {
      title: 'Buttons',
      href: '/buttons',
      className: 'w-24',
      images: { light: 'buttons.svg', dark: 'buttons.svg' },
    },
    {
      title: 'Button group',
      href: '/button-group',
      className: 'w-56',
      images: { light: 'button-group-light.svg', dark: 'button-group-dark.svg' },
    },
    {
      title: 'Card',
      href: '/card',
      className: 'w-36',
      images: { light: 'card-light.svg', dark: 'card-dark.svg' },
    },
    {
      title: 'Carousel',
      href: '/carousel',
      className: 'w-48',
      images: { light: 'carousel-light.svg', dark: 'carousel-dark.svg' },
    },
    {
      title: 'Dropdown',
      href: '/dropdown',
      className: 'w-28',
      images: { light: 'dropdown-light.svg', dark: 'dropdown-dark.svg' },
    },
    {
      title: 'Forms',
      href: '/forms',
      className: 'w-40',
      images: { light: 'forms-light.svg', dark: 'forms-dark.svg' },
    },
    {
      title: 'List group',
      href: '/list-group',
      className: 'w-36',
      images: { light: 'list-group-light.svg', dark: 'list-group-dark.svg' },
    },
    {
      title: 'Modal',
      href: '/modal',
      className: 'w-36',
      images: { light: 'modal-light.svg', dark: 'modal-dark.svg' },
    },
    {
      title: 'Navbars',
      href: '/navbars',
      className: 'w-56',
      images: { light: 'navbars-light.svg', dark: 'navbars-dark.svg' },
    },
    {
      title: 'Rating',
      href: '/rating',
      className: 'w-36',
      images: { light: 'rating-light.svg', dark: 'rating-dark.svg' },
    },
    {
      title: 'Spinners',
      href: '/spinners',
      className: 'w-36',
      images: { light: 'spinners-light.svg', dark: 'spinners-dark.svg' },
    },
    {
      title: 'Tooltips',
      href: '/tooltips',
      className: 'w-24',
      images: { light: 'tooltips-light.svg', dark: 'tooltips-dark.svg' },
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl p-4 lg:p-12 lg:text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white lg:text-center lg:text-4xl lg:font-extrabold lg:leading-snug 2xl:px-48">
        Tailwind CSS Components
      </h2>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-center lg:text-xl xl:px-64">
        Explore the whole collection of open-source web components and interactive elements built with the utility
        classes from Tailwind CSS
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map(({ title, href, className, images }, index) => (
          <Link
            key={index}
            className="h-64 rounded-xl border border-gray-100 bg-white shadow transition hover:border-white hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:shadow-gray-800 dark:hover:border-gray-600"
            to={href}
          >
            <div className="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-50 py-2.5 px-5 dark:border-gray-700 dark:bg-gray-700">
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">{title}</span>
              <HiExternalLink className="h-5 w-5 text-gray-900 dark:text-white" />
            </div>
            <div className="flex h-52 items-center justify-center">
              <img className={classNames(className, 'dark:hidden')} src={getImageUrl(images.light)} alt="Alerts" />
              <img className={classNames(className, 'hidden dark:block')} src={getImageUrl(images.dark)} alt="Alerts" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
