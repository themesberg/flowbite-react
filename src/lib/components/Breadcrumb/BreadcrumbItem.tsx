import { FC, ComponentProps, PropsWithChildren } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';

export interface BreadcrumbItemProps extends ComponentProps<'li'> {
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
}

const BreadcrumbItem: FC<PropsWithChildren<BreadcrumbItemProps>> = ({
  children,
  href,
  icon: Icon,
  ...rest
}): JSX.Element => {
  return (
    <li className="group flex items-center" {...rest}>
      <HiOutlineChevronRight
        aria-hidden="true"
        className="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2"
        data-testid="breadcrumb-separator"
      />
      {typeof href !== 'undefined' ? (
        <a
          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          data-testid="breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden="true" className="mr-2 h-4 w-4" />}
          {children}
        </a>
      ) : (
        <span
          className="flex items-center text-sm font-medium text-gray-400 dark:text-gray-500"
          data-testid="breadcrumb-item"
        >
          {Icon && <Icon aria-hidden="true" className="mr-2 h-4 w-4" />}
          {children}
        </span>
      )}
    </li>
  );
};

BreadcrumbItem.displayName = 'Breadcrumb.Item';
export default BreadcrumbItem;
