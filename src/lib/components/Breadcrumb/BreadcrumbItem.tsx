import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface BreadcrumbItemProps extends PropsWithChildren<ComponentProps<'li'>> {
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, href, icon: Icon, ...props }): JSX.Element => {
  const isLink = typeof href !== 'undefined';
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.breadcrumb.item;

  const Component = isLink ? 'a' : 'span';

  return (
    <li className={theme.base} {...theirProps}>
      <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="flowbite-breadcrumb-separator" />
      <Component className={theme.href[isLink ? 'on' : 'off']} data-testid="flowbite-breadcrumb-item" href={href}>
        {Icon && <Icon aria-hidden className={theme.icon} />}
        {children}
      </Component>
    </li>
  );
};

BreadcrumbItem.displayName = 'Breadcrumb.Item';
export default BreadcrumbItem;
