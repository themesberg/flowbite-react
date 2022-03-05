import { ComponentProps, FC } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';

export type BreadcrumbItem = {
  icon?: FC<ComponentProps<'svg'>>;
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRightIcon className="w-6 h-6 mx-1 md:mx-2 text-gray-400" />}
            {index < items.length - 1 ? (
              <a
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                href={item.href}
              >
                {item.icon && <item.icon className="mr-2 w-4 h-4" />}
                {item.label}
              </a>
            ) : (
              <span className="flex items-center text-sm font-medium text-gray-400 dark:text-gray-500">
                {item.icon && <item.icon className="mr-2 w-4 h-4" />}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
