import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
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
}): JSX.Element => {
  const theme = useTheme().theme.listGroup.item;

  const Component = typeof href === 'undefined' ? 'button' : 'a';

  return (
    <li>
      <Component
        className={classNames(
          theme.active[isActive ? 'on' : 'off'],
          theme.base,
          theme.href[typeof href === 'undefined' ? 'off' : 'on'],
        )}
        href={href}
        onClick={onClick}
        type="button"
      >
        {Icon && <Icon aria-hidden className={theme.icon} data-testid="flowbite-list-group-item-icon" />}
        {children}
      </Component>
    </li>
  );
};
