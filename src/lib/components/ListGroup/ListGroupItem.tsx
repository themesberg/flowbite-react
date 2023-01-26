import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteListGroupItemTheme {
  base: string;
  link: {
    base: string;
    active: FlowbiteBoolean;
    href: FlowbiteBoolean;
    icon: string;
  };
}

export type ListGroupItemProps = (
  | PropsWithChildren<ComponentProps<'a'>>
  | PropsWithChildren<ComponentProps<'button'>>
) & {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<FlowbiteListGroupItemTheme>;
};

export const ListGroupItem: FC<ListGroupItemProps> = ({
  active: isActive,
  children,
  href,
  icon: Icon,
  onClick,
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.listGroup.item, customTheme);

  const isLink = typeof href !== 'undefined';
  const Component = isLink ? 'a' : 'button';
  const theirProps = props as object;

  return (
    <li className={classNames(theme.base, className)}>
      <Component
        className={classNames(
          theme.link.active[isActive ? 'on' : 'off'],
          theme.link.base,
          theme.link.href[isLink ? 'on' : 'off'],
        )}
        href={href}
        onClick={onClick}
        type={isLink ? undefined : 'button'}
        {...theirProps}
      >
        {Icon && <Icon aria-hidden className={theme.link.icon} data-testid="flowbite-list-group-item-icon" />}
        {children}
      </Component>
    </li>
  );
};
