import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteBadgeTheme {
  root: FlowbiteBadgeRootTheme;
  icon: FlowbiteBadgeIconTheme;
}

export interface FlowbiteBadgeRootTheme {
  base: string;
  color: BadgeColors;
  href: string;
  size: BadgeSizes;
}

export interface FlowbiteBadgeIconTheme extends FlowbiteBoolean {
  size: BadgeSizes;
}

export interface BadgeColors
  extends Pick<FlowbiteColors, 'failure' | 'gray' | 'indigo' | 'info' | 'pink' | 'purple' | 'success'> {
  [key: string]: string;
}

export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> {
  color?: keyof BadgeColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
  theme?: DeepPartial<FlowbiteBadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.badge, customTheme);

  const Content = (): JSX.Element => (
    <span
      className={classNames(
        theme.root.base,
        theme.root.color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.root.size[size],
        className,
      )}
      data-testid="flowbite-badge"
      {...props}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};
