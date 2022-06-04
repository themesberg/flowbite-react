import type { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export interface CardProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  horizontal?: boolean;
  imgAlt?: string;
  imgSrc?: string;
}

export const Card: FC<CardProps> = ({ children, horizontal, imgAlt, imgSrc, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.card;

  return (
    <div
      className={classNames(theme.base, theme.horizontal[horizontal ? 'on' : 'off'])}
      data-testid="flowbite-card"
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
    </div>
  );
};
