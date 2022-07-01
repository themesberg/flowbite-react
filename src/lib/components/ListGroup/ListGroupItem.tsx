import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface ListGroupItemProps extends PropsWithChildren<Omit<ComponentProps<'a' | 'button'>, 'className'>> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
}

export const ListGroupItem: FC<ListGroupItemProps> = ({
  active: isActive,
  children,
  href,
  icon: Icon,
  onClick,
  ...props
}): JSX.Element => {
  const isLink = typeof href !== 'undefined';

  const Component = isLink ? 'a' : 'button';
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.listGroup.item;

  return (
    <li>
      <Component
        className={classNames(theme.active[isActive ? 'on' : 'off'], theme.base, theme.href[isLink ? 'on' : 'off'])}
        href={href}
        onClick={onClick}
        type={isLink ? undefined : 'button'}
        {...theirProps}
      >
        {Icon && <Icon aria-hidden className={theme.icon} data-testid="flowbite-list-group-item-icon" />}
        {children}
      </Component>
    </li>
  );
};
