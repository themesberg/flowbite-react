import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteCardTheme {
  root: FlowbiteCardRootTheme;
  img: FlowbiteCardImageTheme;
}

export interface FlowbiteCardRootTheme {
  base: string;
  children: string;
  horizontal: FlowbiteBoolean;
  href: string;
}

export interface FlowbiteCardImageTheme {
  base: string;
  horizontal: FlowbiteBoolean;
}

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  horizontal?: boolean;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
  theme?: DeepPartial<FlowbiteCardTheme>;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  horizontal,
  href,
  imgAlt,
  imgSrc,
  theme: customTheme = {},
  ...props
}) => {
  const Component = typeof href === 'undefined' ? 'div' : 'a';
  const theirProps = props as object;

  const theme = mergeDeep(useTheme().theme.card, customTheme);

  return (
    <Component
      data-testid="flowbite-card"
      href={href}
      className={classNames(
        theme.root.base,
        theme.root.horizontal[horizontal ? 'on' : 'off'],
        href && theme.root.href,
        className,
      )}
      {...theirProps}
    >
      {imgSrc && (
        <img
          alt={imgAlt ?? ''}
          src={imgSrc}
          className={classNames(theme.img.base, theme.img.horizontal[horizontal ? 'on' : 'off'])}
        />
      )}
      <div className={theme.root.children}>{children}</div>
    </Component>
  );
};
