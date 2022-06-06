import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export interface CardProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  horizontal?: boolean;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
}

export const Card: FC<CardProps> = ({ children, horizontal, href, imgAlt, imgSrc, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.card;

  const Component = typeof href === 'undefined' ? 'div' : 'a';

  return (
    <Component
      className={classNames(theme.base, theme.horizontal[horizontal ? 'on' : 'off'], href && theme.href)}
      data-testid="flowbite-card"
      href={href}
      {...theirProps}
    >
      {imgSrc && (
        <img
          alt={imgAlt ?? ''}
          className={classNames(theme.img.base, theme.img.horizontal[horizontal ? 'on' : 'off'])}
          src={imgSrc}
        />
      )}
      <div className={theme.children}>{children}</div>
    </Component>
  );
};
