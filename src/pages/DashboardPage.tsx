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

export const DashboardPage: FC = () => {
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
      title: 'Tooltips',
      href: '/tooltips',
      className: 'w-24',
      images: { light: 'tooltips-light.svg', dark: 'tooltips-dark.svg' },
    },
  ];

  return (
    <div className="p-4 mx-auto max-w-screen-xl lg:p-12 lg:text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:font-extrabold lg:text-4xl lg:leading-snug dark:text-white lg:text-center 2xl:px-48">
        Tailwind CSS Components
      </h2>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-64 lg:mb-16">
        Explore the whole collection of open-source web components and interactive elements built with the utility
        classes from Tailwind CSS
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map(({ title, href, className, images }, index) => (
          <Link
            key={index}
            className="h-64 bg-white rounded-xl border border-gray-100 transition hover:border-white dark:border-gray-700 dark:hover:border-gray-600 shadow dark:shadow-gray-800 hover:shadow-lg dark:bg-gray-900"
            to={href}
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-t-lg py-2.5 px-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
              <span className="text-lg font-medium text-gray-500 dark:text-gray-400">{title}</span>
              <HiExternalLink className="w-5 h-5 text-gray-900 dark:text-white" />
            </div>
            <div className="flex justify-center items-center h-52">
              <img className={classNames(className, 'dark:hidden')} src={getImageUrl(images.light)} alt="Alerts" />
              <img className={classNames(className, 'hidden dark:block')} src={getImageUrl(images.dark)} alt="Alerts" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
