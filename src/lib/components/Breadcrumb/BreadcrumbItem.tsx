import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteBreadcrumbItemTheme {
  base: string;
  chevron: string;
  href: FlowbiteBoolean;
  icon: string;
}

export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>> {
  href?: string;
  to?: string;
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteBreadcrumbItemTheme>;
  as?: ElementType;
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  (
    { children, className, href, to, icon: Icon, theme: customTheme = {}, as: CustomComponent = 'a', ...props },
    ref,
  ) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? CustomComponent : 'span';

    const theme = mergeDeep(useTheme().theme.breadcrumb.item, customTheme);

    return (
      <li className={classNames(theme.base, className)} {...props}>
        <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="flowbite-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? 'on' : 'off']}
          data-testid="flowbite-breadcrumb-item"
          href={href}
          to={to}
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
