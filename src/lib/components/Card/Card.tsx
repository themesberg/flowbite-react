import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteCardTheme {
  base: string;
  children: string;
  horizontal: {
    off: string;
    on: string;
  };
  href: string;
  img: {
    base: string;
    horizontal: {
      off: string;
      on: string;
    };
  };
}

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  horizontal?: boolean;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  horizontal,
  href,
  imgAlt,
  imgSrc,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.card;

  const Component = typeof href === 'undefined' ? 'div' : 'a';
  const theirProps = props as object;

  return (
    <Component
      className={classNames(theme.base, theme.horizontal[horizontal ? 'on' : 'off'], href && theme.href, className)}
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
