import classNames from 'classnames';
import { ComponentProps, FC, forwardRef, PropsWithChildren } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';

export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>> {
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, ...props }, ref): JSX.Element => {
    const isLink = typeof href !== 'undefined';
    const theme = useTheme().theme.breadcrumb.item;

    const Component = isLink ? 'a' : 'span';

    return (
      <li className={classNames(theme.base, className)} {...props}>
        <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="flowbite-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? 'on' : 'off']}
          data-testid="flowbite-breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'Breadcrumb.Item';
export default BreadcrumbItem;
