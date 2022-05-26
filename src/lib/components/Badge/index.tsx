import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { excludeClassName } from '../../helpers/exclude';

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> {
  color?: keyof BadgeColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
}

export interface BadgeColors extends FlowbiteColors {
  [key: string]: string;
}

export interface BadgeSizes extends FlowbiteSizes {
  [key: string]: string;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.badge;

  const Content = (): JSX.Element => (
    <span
      className={classNames(Icon ? theme.icon.on : theme.icon.off, theme.base, theme.color[color], theme.size[size])}
      data-testid="flowbite-badge"
      {...theirProps}
    >
      {Icon && <Icon aria-hidden className={theme.icon.size[size]} data-testid="flowbite-badge-icon" />}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};
